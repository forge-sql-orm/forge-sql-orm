import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { printDegradationQueriesConsumer } from "../../../src/async/PrintQueryConsumer";
import { AsyncEvent } from "@forge/events";
import { AsyncEventPrintQuery } from "../../../src/async/PrintQueryConsumer";
import { ForgeSqlOperation } from "../../../src/core/ForgeSQLQueryBuilder";
import { ForgeSQLMetadata } from "../../../src/utils/forgeDriver";

// Mock dependencies
const mockPrintDegradationQueries = vi.fn();
vi.mock("../../../src/utils/metadataContextUtils", () => ({
  printDegradationQueries: (...args: any[]) => mockPrintDegradationQueries(...args),
}));

describe("PrintQueryConsumer", () => {
  let mockForgeSQLORM: ForgeSqlOperation;
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
  let mockEvent: AsyncEvent;
  let mockBody: AsyncEventPrintQuery;

  beforeEach(() => {
    // Mock console.warn
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    // Mock ForgeSQLORM
    mockForgeSQLORM = {} as ForgeSqlOperation;

    // Create mock event body
    const beginTime = new Date("2023-01-01T12:00:00Z");
    mockBody = {
      totalDbExecutionTime: 1500,
      totalResponseSize: 2048,
      beginTime: beginTime,
      options: {
        mode: "TopSlowest",
        topQueries: 1,
        summaryTableWindowTime: 15000,
        showSlowestPlans: true,
        normalizeQuery: true,
        asyncQueueName: "",
      },
      statistics: [
        {
          query: "SELECT * FROM users",
          params: [],
          metadata: {
            dbExecutionTime: 1500,
            responseSize: 2048,
            fields: [],
          } as ForgeSQLMetadata,
        },
      ],
    };

    // Create mock event
    mockEvent = {
      jobId: "test-job-id-123",
      body: mockBody,
    } as AsyncEvent;

    // Reset mocks
    mockPrintDegradationQueries.mockClear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("printDegradationQueriesConsumer", () => {
    it("should process event and call printDegradationQueries", async () => {
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      expect(mockPrintDegradationQueries).toHaveBeenCalledTimes(1);
      expect(mockPrintDegradationQueries).toHaveBeenCalledWith(
        mockForgeSQLORM,
        expect.objectContaining({
          totalDbExecutionTime: 1500,
          totalResponseSize: 2048,
          statistics: mockBody.statistics,
          options: mockBody.options,
        }),
      );
    });

    it("should convert beginTime string to Date object", async () => {
      const beginTimeString = "2023-01-01T12:00:00Z";
      const beginTimeDate = new Date(beginTimeString);

      mockEvent.body = {
        ...mockBody,
        beginTime: beginTimeString as any, // Simulate string from JSON
      } as any;

      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      // Verify that beginTime was converted to Date
      const callArgs = mockPrintDegradationQueries.mock.calls[0][1] as AsyncEventPrintQuery;
      expect(callArgs.beginTime).toBeInstanceOf(Date);
      expect(callArgs.beginTime.getTime()).toBe(beginTimeDate.getTime());
    });

    it("should log warning with correct information", async () => {
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      const logMessage = consoleWarnSpy.mock.calls[0][0] as string;

      expect(logMessage).toContain("[Performance Analysis] Processing query degradation event");
      expect(logMessage).toContain(`Job ID: ${mockEvent.jobId}`);
      expect(logMessage).toContain(`Total DB time: ${mockBody.totalDbExecutionTime}ms`);
      expect(logMessage).toContain(`Queries: ${mockBody.statistics.length}`);
      expect(logMessage).toContain(`Started: ${mockBody.beginTime.toISOString()}`);
    });

    it("should handle event with multiple statistics", async () => {
      const multipleStatsBody: AsyncEventPrintQuery = {
        ...mockBody,
        statistics: [
          {
            query: "SELECT * FROM users",
            params: [],
            metadata: {
              dbExecutionTime: 500,
              responseSize: 1024,
              fields: [],
            } as ForgeSQLMetadata,
          },
          {
            query: "SELECT * FROM orders",
            params: [],
            metadata: {
              dbExecutionTime: 1000,
              responseSize: 2048,
              fields: [],
            } as ForgeSQLMetadata,
          },
        ],
      };

      mockEvent.body = multipleStatsBody;
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining(`Queries: ${multipleStatsBody.statistics.length}`),
      );
      expect(mockPrintDegradationQueries).toHaveBeenCalledWith(
        mockForgeSQLORM,
        expect.objectContaining({
          statistics: multipleStatsBody.statistics,
        }),
      );
    });

    it("should handle event with zero statistics", async () => {
      const emptyStatsBody: AsyncEventPrintQuery = {
        ...mockBody,
        statistics: [],
      };

      mockEvent.body = emptyStatsBody;
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("Queries: 0"));
      expect(mockPrintDegradationQueries).toHaveBeenCalledWith(
        mockForgeSQLORM,
        expect.objectContaining({
          statistics: [],
        }),
      );
    });

    it("should handle different job IDs", async () => {
      const differentJobId = "different-job-id-456";
      mockEvent.jobId = differentJobId;
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining(`Job ID: ${differentJobId}`),
      );
    });

    it("should handle different totalDbExecutionTime values", async () => {
      const highDbTimeBody: AsyncEventPrintQuery = {
        ...mockBody,
        totalDbExecutionTime: 5000,
      };

      mockEvent.body = highDbTimeBody;
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("Total DB time: 5000ms"));
    });

    it("should preserve all options when calling printDegradationQueries", async () => {
      const customOptionsBody: AsyncEventPrintQuery = {
        ...mockBody,
        options: {
          mode: "SummaryTable",
          topQueries: 5,
          summaryTableWindowTime: 20000,
          showSlowestPlans: false,
          normalizeQuery: false,
          asyncQueueName: "customQueue",
        },
      };

      mockEvent.body = customOptionsBody;
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      expect(mockPrintDegradationQueries).toHaveBeenCalledWith(
        mockForgeSQLORM,
        expect.objectContaining({
          options: customOptionsBody.options,
        }),
      );
    });

    it("should handle errors from printDegradationQueries", async () => {
      const error = new Error("Test error");
      mockPrintDegradationQueries.mockRejectedValue(error);

      await expect(printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent)).rejects.toThrow(
        "Test error",
      );

      expect(mockPrintDegradationQueries).toHaveBeenCalledTimes(1);
    });

    it("should handle Date object beginTime correctly", async () => {
      const beginTimeDate = new Date("2023-06-15T10:30:00Z");
      const dateBody: AsyncEventPrintQuery = {
        ...mockBody,
        beginTime: beginTimeDate,
      };

      mockEvent.body = dateBody;
      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      const callArgs = mockPrintDegradationQueries.mock.calls[0][1] as AsyncEventPrintQuery;
      expect(callArgs.beginTime).toBeInstanceOf(Date);
      expect(callArgs.beginTime.getTime()).toBe(beginTimeDate.getTime());
    });

    it("should handle ISO string beginTime and convert to Date", async () => {
      const isoString = "2023-12-25T15:45:30.123Z";
      const expectedDate = new Date(isoString);

      mockEvent.body = {
        ...mockBody,
        beginTime: isoString as any, // Simulate string from JSON
      } as any;

      mockPrintDegradationQueries.mockResolvedValue(undefined);

      await printDegradationQueriesConsumer(mockForgeSQLORM, mockEvent);

      const callArgs = mockPrintDegradationQueries.mock.calls[0][1] as AsyncEventPrintQuery;
      expect(callArgs.beginTime).toBeInstanceOf(Date);
      expect(callArgs.beginTime.toISOString()).toBe(expectedDate.toISOString());
    });
  });
});
