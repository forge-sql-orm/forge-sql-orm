import { t as e } from "./rolldown-runtime-COnpUsM8.js";
var t = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Log = e.LogLevel = void 0));
    var t = ` DEBUG `,
      n = `  INFO `,
      r = `  WARN `,
      i = ` ERROR `;
    function a(e) {
      return (e.unshift(`[Statsig]`), e);
    }
    e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
    var o = class o {
      static info(...t) {
        o.level >= e.LogLevel.Info && console.info(n, ...a(t));
      }
      static debug(...n) {
        o.level >= e.LogLevel.Debug && console.debug(t, ...a(n));
      }
      static warn(...t) {
        o.level >= e.LogLevel.Warn && console.warn(r, ...a(t));
      }
      static error(...t) {
        o.level >= e.LogLevel.Error && console.error(i, ...a(t));
      }
    };
    ((e.Log = o), (o.level = e.LogLevel.Warn));
  }),
  n = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
    var n = t();
    ((e._getStatsigGlobal = () => {
      try {
        return typeof __STATSIG__ < `u` ? __STATSIG__ : s;
      } catch {
        return s;
      }
    }),
      (e._getStatsigGlobalFlag = (t) => (0, e._getStatsigGlobal)()[t]),
      (e._getInstance = (t) => {
        let r = (0, e._getStatsigGlobal)();
        return t
          ? r.instances && r.instances[t]
          : (r.instances &&
              Object.keys(r.instances).length > 1 &&
              n.Log.warn(
                `Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.`,
              ),
            r.firstInstance);
      }));
    var r = `__STATSIG__`,
      i = typeof window < `u` ? window : {},
      a = typeof global < `u` ? global : {},
      o = typeof globalThis < `u` ? globalThis : {},
      s = i[r] ?? a[r] ?? o[r] ?? { instance: e._getInstance };
    ((i[r] = s), (a[r] = s), (o[r] = s));
  }),
  r = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Diagnostics = void 0));
    var t = new Map(),
      n = `start`,
      r = `end`,
      i = `statsig::diagnostics`;
    e.Diagnostics = {
      _getMarkers: (e) => t.get(e),
      _markInitOverallStart: (e) => {
        s(e, a({}, n, `overall`));
      },
      _markInitOverallEnd: (e, t, n) => {
        s(
          e,
          a(
            {
              success: t,
              error: t ? void 0 : { name: `InitializeError`, message: `Failed to initialize` },
              evaluationDetails: n,
            },
            r,
            `overall`,
          ),
        );
      },
      _markInitNetworkReqStart: (e, t) => {
        s(e, a(t, n, `initialize`, `network_request`));
      },
      _markInitNetworkReqEnd: (e, t) => {
        s(e, a(t, r, `initialize`, `network_request`));
      },
      _markInitProcessStart: (e) => {
        s(e, a({}, n, `initialize`, `process`));
      },
      _markInitProcessEnd: (e, t) => {
        s(e, a(t, r, `initialize`, `process`));
      },
      _clearMarkers: (e) => {
        t.delete(e);
      },
      _formatError(e) {
        if (e && typeof e == `object`)
          return { code: c(e, `code`), name: c(e, `name`), message: c(e, `message`) };
      },
      _getDiagnosticsData(t, n, r, i) {
        return {
          success: t?.ok === !0,
          statusCode: t?.status,
          sdkRegion: t?.headers?.get(`x-statsig-region`),
          isDelta: r.includes(`"is_delta":true`) === !0 ? !0 : void 0,
          attempt: n,
          error: e.Diagnostics._formatError(i),
        };
      },
      _enqueueDiagnosticsEvent(t, n, r, i) {
        let a = e.Diagnostics._getMarkers(r);
        if (a == null || a.length <= 0) return -1;
        let s = a[a.length - 1].timestamp - a[0].timestamp;
        e.Diagnostics._clearMarkers(r);
        let c = o(t, { context: `initialize`, markers: a.slice(), statsigOptions: i });
        return (n.enqueue(c), s);
      },
    };
    function a(e, t, n, r) {
      return Object.assign({ key: n, action: t, step: r, timestamp: Date.now() }, e);
    }
    function o(e, t) {
      return { eventName: i, user: e, value: null, metadata: t, time: Date.now() };
    }
    function s(e, n) {
      let r = t.get(e) ?? [];
      (r.push(n), t.set(e, r));
    }
    function c(e, t) {
      if (t in e) return e[t];
    }
  }),
  i = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.EventBatch = void 0),
      (e.EventBatch = class {
        constructor(e) {
          ((this.attempts = 0), (this.createdAt = Date.now()), (this.events = e));
        }
        incrementAttempts() {
          this.attempts++;
        }
      }));
  }),
  a = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.EventRetryConstants = void 0),
      (e.EventRetryConstants = {
        MAX_RETRY_ATTEMPTS: 5,
        DEFAULT_BATCH_SIZE: 100,
        MAX_PENDING_BATCHES: 30,
        TICK_INTERVAL_MS: 1e3,
        QUICK_FLUSH_WINDOW_MS: 200,
        MAX_LOCAL_STORAGE: 500,
        get MAX_QUEUED_EVENTS() {
          return this.DEFAULT_BATCH_SIZE * this.MAX_PENDING_BATCHES;
        },
      }));
  }),
  o = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.BatchQueue = void 0));
    var t = i(),
      n = a();
    e.BatchQueue = class {
      constructor(e = n.EventRetryConstants.DEFAULT_BATCH_SIZE) {
        ((this._batches = []), (this._batchSize = e));
      }
      batchSize() {
        return this._batchSize;
      }
      requeueBatch(e) {
        return this._enqueueBatch(e);
      }
      hasFullBatch() {
        return this._batches.some((e) => e.events.length >= this._batchSize);
      }
      takeNextBatch() {
        return this._batches.shift();
      }
      takeAllBatches() {
        let e = this._batches;
        return ((this._batches = []), e);
      }
      createBatches(e) {
        let n = 0,
          r = 0;
        for (; n < e.length; ) {
          let i = e.slice(n, n + this._batchSize);
          ((r += this._enqueueBatch(new t.EventBatch(i))), (n += this._batchSize));
        }
        return r;
      }
      _enqueueBatch(e) {
        this._batches.push(e);
        let t = 0;
        for (; this._batches.length > n.EventRetryConstants.MAX_PENDING_BATCHES; ) {
          let e = this._batches.shift();
          e && (t += e.events.length);
        }
        return t;
      }
    };
  }),
  s = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._isTypeMatch = e._typeOf = void 0));
    function t(e) {
      return Array.isArray(e) ? `array` : typeof e;
    }
    e._typeOf = t;
    function n(e, t) {
      let n = (e) => (Array.isArray(e) ? `array` : e === null ? `null` : typeof e);
      return n(e) === n(t);
    }
    e._isTypeMatch = n;
  }),
  c = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
    var t = s();
    ((e._DJB2 = (e) => {
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        let r = e.charCodeAt(n);
        ((t = (t << 5) - t + r), (t &= t));
      }
      return String(t >>> 0);
    }),
      (e._DJB2Object = (t, n) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(t, n)))),
      (e._getSortedObject = (n, r) => {
        if (n == null) return null;
        let i = Object.keys(n).sort(),
          a = {};
        return (
          i.forEach((i) => {
            let o = n[i];
            if (r === 0 || (0, t._typeOf)(o) !== `object`) {
              a[i] = o;
              return;
            }
            a[i] = (0, e._getSortedObject)(o, r == null ? r : r - 1);
          }),
          a
        );
      }));
  }),
  l = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._getStorageKey = e._getUserStorageKey = void 0));
    var t = c();
    function n(e, n, r) {
      if (r) return r(e, n);
      let i = n && n.customIDs ? n.customIDs : {},
        a = [
          `uid:${n?.userID ?? ``}`,
          `cids:${Object.keys(i)
            .sort((e, t) => e.localeCompare(t))
            .map((e) => `${e}-${i[e]}`)
            .join(`,`)}`,
          `k:${e}`,
        ];
      return (0, t._DJB2)(a.join(`|`));
    }
    e._getUserStorageKey = n;
    function r(e, r, i) {
      return r ? n(e, r, i) : (0, t._DJB2)(`k:${e}`);
    }
    e._getStorageKey = r;
  }),
  u = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.NetworkParam = e.NetworkDefault = e.Endpoint = void 0),
      (e.Endpoint = {
        _initialize: `initialize`,
        _rgstr: `rgstr`,
        _download_config_specs: `download_config_specs`,
      }),
      (e.NetworkDefault = {
        [e.Endpoint._rgstr]: `https://prodregistryv2.org/v1`,
        [e.Endpoint._initialize]: `https://featureassets.org/v1`,
        [e.Endpoint._download_config_specs]: `https://api.statsigcdn.com/v1`,
      }),
      (e.NetworkParam = {
        EventCount: `ec`,
        SdkKey: `k`,
        SdkType: `st`,
        SdkVersion: `sv`,
        Time: `t`,
        SessionID: `sid`,
        StatsigEncoded: `se`,
        IsGzipped: `gz`,
      }));
  }),
  d = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._cloneObject =
        e._getUnloadEvent =
        e._getCurrentPageUrlSafe =
        e._addDocumentEventListenerSafe =
        e._addWindowEventListenerSafe =
        e._isServerEnv =
        e._getDocumentSafe =
        e._getWindowSafe =
          void 0));
    var n = t();
    ((e._getWindowSafe = () => (typeof window < `u` ? window : null)),
      (e._getDocumentSafe = () => (0, e._getWindowSafe)()?.document ?? null),
      (e._isServerEnv = () => {
        if ((0, e._getDocumentSafe)() !== null) return !1;
        let t = typeof process < `u` && process.versions != null && process.versions.node != null;
        return typeof EdgeRuntime == `string` || t;
      }),
      (e._addWindowEventListenerSafe = (t, n) => {
        let r = (0, e._getWindowSafe)();
        typeof r?.addEventListener == `function` && r.addEventListener(t, n);
      }),
      (e._addDocumentEventListenerSafe = (t, n) => {
        let r = (0, e._getDocumentSafe)();
        typeof r?.addEventListener == `function` && r.addEventListener(t, n);
      }),
      (e._getCurrentPageUrlSafe = () => {
        try {
          return (0, e._getWindowSafe)()?.location.href.split(/[?#]/)[0];
        } catch {
          return;
        }
      }),
      (e._getUnloadEvent = () => {
        let t = (0, e._getWindowSafe)();
        return t && `onpagehide` in t ? `pagehide` : `beforeunload`;
      }),
      (e._cloneObject = (e, t) => {
        try {
          return JSON.parse(JSON.stringify(t));
        } catch {
          return (n.Log.error(`Failed to clone object ${e}`), null);
        }
      }));
  }),
  f = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._notifyVisibilityChanged =
        e._subscribeToVisiblityChanged =
        e._isUnloading =
        e._isCurrentlyVisible =
          void 0));
    var t = d(),
      n = `foreground`,
      r = `background`,
      i = [],
      a = n,
      o = !1;
    ((e._isCurrentlyVisible = () => a === n),
      (e._isUnloading = () => o),
      (e._subscribeToVisiblityChanged = (e) => {
        i.unshift(e);
      }),
      (e._notifyVisibilityChanged = (e) => {
        e !== a && ((a = e), i.forEach((t) => t(e)));
      }),
      (0, t._addWindowEventListenerSafe)(`focus`, () => {
        ((o = !1), (0, e._notifyVisibilityChanged)(n));
      }),
      (0, t._addWindowEventListenerSafe)(`blur`, () => (0, e._notifyVisibilityChanged)(r)),
      (0, t._addDocumentEventListenerSafe)(`visibilitychange`, () => {
        (0, e._notifyVisibilityChanged)(document.visibilityState === `visible` ? n : r);
      }),
      (0, t._addWindowEventListenerSafe)((0, t._getUnloadEvent)(), () => {
        ((o = !0), (0, e._notifyVisibilityChanged)(r));
      }));
  }),
  p = e((e) => {
    var n =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EventSender = void 0));
    var r = t(),
      i = u(),
      a = f();
    e.EventSender = class {
      constructor(e, t, n, r, i, a) {
        ((this._sdkKey = e),
          (this._network = t),
          (this._emitter = n),
          (this._options = i),
          (this._logEventUrlConfig = r),
          (this._loggingEnabled = a));
      }
      setLogEventCompressionMode(e) {
        this._network.setLogEventCompressionMode(e);
      }
      setLoggingEnabled(e) {
        this._loggingEnabled = e;
      }
      sendBatch(e) {
        return n(this, void 0, void 0, function* () {
          try {
            let t =
              (0, a._isUnloading)() &&
              this._network.isBeaconSupported() &&
              this._options?.networkConfig?.networkOverrideFunc == null;
            this._emitter({ name: `pre_logs_flushed`, events: e.events });
            let n = t ? this._sendEventsViaBeacon(e) : yield this._sendEventsViaPost(e);
            return n.success
              ? (this._emitter({ name: `logs_flushed`, events: e.events }), n)
              : { success: !1, statusCode: n.statusCode };
          } catch (e) {
            return (r.Log.warn(`Failed to send batch:`, e), { success: !1, statusCode: -1 });
          }
        });
      }
      _sendEventsViaPost(e) {
        return n(this, void 0, void 0, function* () {
          let t = (yield this._network.post(this._getRequestData(e)))?.code ?? -1;
          return { success: t >= 200 && t < 300, statusCode: t };
        });
      }
      _sendEventsViaBeacon(e) {
        let t = this._network.beacon(this._getRequestData(e));
        return { success: t, statusCode: t ? 200 : -1 };
      }
      _getRequestData(e) {
        return {
          sdkKey: this._sdkKey,
          data: { events: e.events },
          urlConfig: this._logEventUrlConfig,
          retries: 3,
          isCompressable: !0,
          params: { [i.NetworkParam.EventCount]: String(e.events.length) },
          headers: {
            "statsig-event-count": String(e.events.length),
            "statsig-retry-count": String(e.attempts),
          },
          credentials: `same-origin`,
        };
      }
    };
  }),
  m = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FlushInterval = void 0));
    var t = 1e3,
      n = 6e4;
    e.FlushInterval = class {
      constructor() {
        ((this._currentIntervalMs = t), (this._lastFlushAttemptTime = Date.now()));
      }
      getCurrentIntervalMs() {
        return this._currentIntervalMs;
      }
      markFlushAttempt() {
        this._lastFlushAttemptTime = Date.now();
      }
      getTimeSinceLastAttempt() {
        return Date.now() - this._lastFlushAttemptTime;
      }
      hasReachedMaxInterval() {
        return this.getTimeSinceLastAttempt() >= n;
      }
      getTimeTillMaxInterval() {
        return n - this.getTimeSinceLastAttempt();
      }
      hasCompletelyRecoveredFromBackoff() {
        return this._currentIntervalMs <= t;
      }
      adjustForSuccess() {
        let e = this._currentIntervalMs;
        e !== t && (this._currentIntervalMs = Math.max(t, Math.floor(e / 2)));
      }
      adjustForFailure() {
        let e = this._currentIntervalMs;
        this._currentIntervalMs = Math.min(n, e * 2);
      }
      getTimeUntilNextFlush() {
        return this.getCurrentIntervalMs() - this.getTimeSinceLastAttempt();
      }
    };
  }),
  h = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FlushType = void 0));
    var t;
    (function (e) {
      ((e.ScheduledMaxTime = `scheduled:max_time`),
        (e.ScheduledFullBatch = `scheduled:full_batch`),
        (e.Limit = `limit`),
        (e.Manual = `manual`),
        (e.Shutdown = `shutdown`));
    })(t || (e.FlushType = t = {}));
  }),
  g = e((e) => {
    var t =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._fetchTxtRecords = void 0));
    var n = new Uint8Array([
        0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
        116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
      ]),
      r = `https://cloudflare-dns.com/dns-query`,
      i = [`i`, `e`, `d`],
      a = 200;
    function o(e) {
      return t(this, void 0, void 0, function* () {
        let t = yield e(r, {
          method: `POST`,
          headers: { "Content-Type": `application/dns-message`, Accept: `application/dns-message` },
          body: n,
        });
        if (!t.ok) {
          let e = Error(`Failed to fetch TXT records from DNS`);
          throw ((e.name = `DnsTxtFetchError`), e);
        }
        let i = yield t.arrayBuffer();
        return s(new Uint8Array(i));
      });
    }
    e._fetchTxtRecords = o;
    function s(e) {
      let t = e.findIndex(
        (t, n) =>
          n < a && String.fromCharCode(t) === `=` && i.includes(String.fromCharCode(e[n - 1])),
      );
      if (t === -1) {
        let e = Error(`Failed to parse TXT records from DNS`);
        throw ((e.name = `DnsTxtParseError`), e);
      }
      let n = ``;
      for (let r = t - 1; r < e.length; r++) n += String.fromCharCode(e[r]);
      return n.split(`,`);
    }
  }),
  _ = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
    var n = t(),
      r = d(),
      i = {},
      a = {
        isReady: () => !0,
        isReadyResolver: () => null,
        getProviderName: () => `InMemory`,
        getItem: (e) => (i[e] ? i[e] : null),
        setItem: (e, t) => {
          i[e] = t;
        },
        removeItem: (e) => {
          delete i[e];
        },
        getAllKeys: () => Object.keys(i),
      },
      o = null;
    try {
      let e = (0, r._getWindowSafe)();
      e &&
        e.localStorage &&
        typeof e.localStorage.getItem == `function` &&
        (o = {
          isReady: () => !0,
          isReadyResolver: () => null,
          getProviderName: () => `LocalStorage`,
          getItem: (t) => e.localStorage.getItem(t),
          setItem: (t, n) => e.localStorage.setItem(t, n),
          removeItem: (t) => e.localStorage.removeItem(t),
          getAllKeys: () => Object.keys(e.localStorage),
        });
    } catch {
      n.Log.warn(`Failed to setup localStorageProvider.`);
    }
    var s = o ?? a,
      c = s;
    function l(t) {
      try {
        return t();
      } catch (t) {
        if (t instanceof Error && t.name === `SecurityError`)
          return (e.Storage._setProvider(a), null);
        throw t;
      }
    }
    e.Storage = {
      isReady: () => c.isReady(),
      isReadyResolver: () => c.isReadyResolver(),
      getProviderName: () => c.getProviderName(),
      getItem: (e) => l(() => c.getItem(e)),
      setItem: (e, t) => l(() => c.setItem(e, t)),
      removeItem: (e) => c.removeItem(e),
      getAllKeys: () => c.getAllKeys(),
      _setProvider: (e) => {
        ((s = e), (c = e));
      },
      _setDisabled: (e) => {
        c = e ? a : s;
      },
    };
    function u(t) {
      let r = e.Storage.getItem(t);
      try {
        return JSON.parse(r ?? `null`);
      } catch {
        return (n.Log.error(`Failed to parse value for key "${t}"`), null);
      }
    }
    e._getObjectFromStorage = u;
    function f(t, n) {
      e.Storage.setItem(t, JSON.stringify(n));
    }
    e._setObjectInStorage = f;
  }),
  v = e((e) => {
    var n =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._isDomainFailure = e.NetworkFallbackResolver = void 0));
    var r = g(),
      i = c(),
      a = t(),
      o = _(),
      s = 10080 * 60 * 1e3,
      l = 14400 * 1e3;
    e.NetworkFallbackResolver = class {
      constructor(e) {
        ((this._fallbackInfo = null),
          (this._errorBoundary = null),
          (this._dnsQueryCooldowns = {}),
          (this._networkOverrideFunc = e.networkConfig?.networkOverrideFunc));
      }
      setErrorBoundary(e) {
        this._errorBoundary = e;
      }
      tryBumpExpiryTime(e, t) {
        let n = this._fallbackInfo?.[t.endpoint];
        n &&
          ((n.expiryTime = Date.now() + s),
          f(e, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: n })));
      }
      getActiveFallbackUrl(e, t) {
        if (t.customUrl != null && t.fallbackUrls != null) return null;
        let n = this._fallbackInfo;
        n ?? ((n = p(e) ?? {}), (this._fallbackInfo = n));
        let r = n[t.endpoint];
        return !r || Date.now() > (r.expiryTime ?? 0) || t.getChecksum() !== r.urlConfigChecksum
          ? (delete n[t.endpoint], (this._fallbackInfo = n), f(e, this._fallbackInfo), null)
          : r.url
            ? r.url
            : null;
      }
      tryFetchUpdatedFallbackInfo(e, t, r, i) {
        return n(this, void 0, void 0, function* () {
          var n;
          try {
            if (!u(r, i)) return !1;
            let n =
                t.customUrl == null && t.fallbackUrls == null
                  ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                  : t.fallbackUrls,
              a = this._pickNewFallbackUrl(this._fallbackInfo?.[t.endpoint], n);
            return a ? (this._updateFallbackInfoWithNewUrl(e, t, a), !0) : !1;
          } catch (e) {
            return (
              (n = this._errorBoundary) == null || n.logError(`tryFetchUpdatedFallbackInfo`, e),
              !1
            );
          }
        });
      }
      _updateFallbackInfoWithNewUrl(e, t, n) {
        let r = {
            urlConfigChecksum: t.getChecksum(),
            url: n,
            expiryTime: Date.now() + s,
            previous: [],
          },
          i = t.endpoint,
          a = this._fallbackInfo?.[i];
        (a && r.previous.push(...a.previous), r.previous.length > 10 && (r.previous = []));
        let o = this._fallbackInfo?.[i]?.url;
        (o != null && r.previous.push(o),
          (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [i]: r })),
          f(e, this._fallbackInfo));
      }
      _tryFetchFallbackUrlsFromNetwork(e) {
        return n(this, void 0, void 0, function* () {
          let t = this._dnsQueryCooldowns[e.endpoint];
          if (t && Date.now() < t) return null;
          this._dnsQueryCooldowns[e.endpoint] = Date.now() + l;
          let n = [],
            i = yield (0, r._fetchTxtRecords)(this._networkOverrideFunc ?? fetch),
            a = m(e.defaultUrl);
          for (let t of i) {
            if (!t.startsWith(e.endpointDnsKey + `=`)) continue;
            let r = t.split(`=`);
            if (r.length > 1) {
              let e = r[1];
              (e.endsWith(`/`) && (e = e.slice(0, -1)), n.push(`https://${e}${a}`));
            }
          }
          return n;
        });
      }
      _pickNewFallbackUrl(e, t) {
        if (t == null) return null;
        let n = new Set(e?.previous ?? []),
          r = e?.url,
          i = null;
        for (let e of t) {
          let t = e.endsWith(`/`) ? e.slice(0, -1) : e;
          if (!n.has(e) && t !== r) {
            i = t;
            break;
          }
        }
        return i;
      }
    };
    function u(e, t) {
      let n = e?.toLowerCase() ?? ``;
      return (
        t ||
        n.includes(`uncaught exception`) ||
        n.includes(`failed to fetch`) ||
        n.includes(`networkerror when attempting to fetch resource`)
      );
    }
    e._isDomainFailure = u;
    function d(e) {
      return `statsig.network_fallback.${(0, i._DJB2)(e)}`;
    }
    function f(e, t) {
      let n = d(e);
      if (!t || Object.keys(t).length === 0) {
        o.Storage.removeItem(n);
        return;
      }
      o.Storage.setItem(n, JSON.stringify(t));
    }
    function p(e) {
      let t = d(e),
        n = o.Storage.getItem(t);
      if (!n) return null;
      try {
        return JSON.parse(n);
      } catch {
        return (a.Log.error(`Failed to parse FallbackInfo`), null);
      }
    }
    function m(e) {
      try {
        return new URL(e).pathname;
      } catch {
        return null;
      }
    }
  }),
  y = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.SDKFlags = void 0));
    var t = {};
    e.SDKFlags = {
      setFlags: (e, n) => {
        t[e] = n;
      },
      get: (e, n) => t[e]?.[n] ?? !1,
    };
  }),
  b = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.SDKType = void 0));
    var t = {},
      n;
    e.SDKType = {
      _get: (e) => (t[e] ?? `js-mono`) + (n ?? ``),
      _setClientType(e, n) {
        t[e] = n;
      },
      _setBindingType(e) {
        (!n || n === `-react`) && (n = `-` + e);
      },
    };
  }),
  x = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getUUID = void 0));
    function t() {
      if (typeof crypto < `u` && typeof crypto.randomUUID == `function`) return crypto.randomUUID();
      let e = new Date().getTime(),
        t = (typeof performance < `u` && performance.now && performance.now() * 1e3) || 0;
      return `xxxxxxxx-xxxx-4xxx-${`89ab`[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
        /[xy]/g,
        (n) => {
          let r = Math.random() * 16;
          return (
            e > 0
              ? ((r = ((e + r) % 16) | 0), (e = Math.floor(e / 16)))
              : ((r = ((t + r) % 16) | 0), (t = Math.floor(t / 16))),
            (n === `x` ? r : (r & 7) | 8).toString(16)
          );
        },
      );
    }
    e.getUUID = t;
  }),
  S = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.StatsigSession = e.SessionID = void 0));
    var n = l(),
      r = t(),
      i = _(),
      a = x(),
      o = f(),
      s = 1800 * 1e3,
      c = 14400 * 1e3,
      u = 15e3,
      d = {};
    ((0, o._subscribeToVisiblityChanged)((e) => {
      e === `background` && Object.values(d).forEach((e) => y(e));
    }),
      (e.SessionID = { get: (t) => e.StatsigSession.get(t).data.sessionID }),
      (e.StatsigSession = {
        get: (e, t = !0) => {
          d[e] ?? (d[e] = C(e));
          let n = d[e];
          return p(n, t);
        },
        overrideInitialSessionID: (e, t) => {
          let n = Date.now(),
            r = {
              data: { sessionID: e, startTime: n, lastUpdate: n },
              sdkKey: t,
              lastPersistedAt: Date.now(),
              storageKey: v(t),
            };
          (y(r), (d[t] = r));
        },
        checkForIdleSession: (e) => {
          let t = d[e];
          t && m(t) && y(t);
        },
      }));
    function p(e, t) {
      let n = Date.now();
      return (m(e) ? y(e) : t && ((e.data.lastUpdate = n), b(e)), e);
    }
    function m(e) {
      var t;
      let n = e.data,
        r = h(n) || g(n);
      return (
        r &&
          ((e.data = w()),
          (t = __STATSIG__ == null ? void 0 : __STATSIG__.instance(e.sdkKey)) == null ||
            t.$emt({ name: `session_expired` })),
        r
      );
    }
    function h({ lastUpdate: e }) {
      return Date.now() - e > s;
    }
    function g({ startTime: e }) {
      return Date.now() - e > c;
    }
    function v(e) {
      return `statsig.session_id.${(0, n._getStorageKey)(e)}`;
    }
    function y(e) {
      try {
        ((0, i._setObjectInStorage)(e.storageKey, e.data), (e.lastPersistedAt = Date.now()));
      } catch {
        r.Log.warn(`Failed to save SessionID`);
      }
    }
    function b(e) {
      Date.now() - e.lastPersistedAt > u && y(e);
    }
    function S(e) {
      return (0, i._getObjectFromStorage)(e);
    }
    function C(e) {
      let t = v(e),
        n = S(t);
      return n && n.sessionID && n.startTime && n.lastUpdate
        ? { data: n, sdkKey: e, lastPersistedAt: 0, storageKey: t }
        : { data: w(), sdkKey: e, lastPersistedAt: 0, storageKey: t };
    }
    function w() {
      return { sessionID: (0, a.getUUID)(), startTime: Date.now(), lastUpdate: Date.now() };
    }
  }),
  C = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getCookieName = e.StableID = void 0));
    var n = l(),
      r = t(),
      i = d(),
      a = _(),
      o = x(),
      s = {},
      c = {},
      u = {};
    e.StableID = {
      cookiesEnabled: !1,
      randomID: Math.random().toString(36),
      get: (e) => {
        if (u[e]) return null;
        if (s[e] != null) return s[e];
        let t = null;
        return (
          (t = h(e)),
          t == null
            ? ((t = m(e)), (t ??= (0, o.getUUID)()), p(t, e), g(t, e), (s[e] = t), t)
            : ((s[e] = t), p(t, e), t)
        );
      },
      setOverride: (e, t) => {
        ((s[t] = e), p(e, t), g(e, t));
      },
      _setCookiesEnabled: (e, t) => {
        c[e] = t;
      },
      _setDisabled: (e, t) => {
        u[e] = t;
      },
    };
    function f(e) {
      return `statsig.stable_id.${(0, n._getStorageKey)(e)}`;
    }
    function p(e, t) {
      let n = f(t);
      try {
        (0, a._setObjectInStorage)(n, e);
      } catch {
        r.Log.warn(`Failed to save StableID to storage`);
      }
    }
    function m(e) {
      let t = f(e);
      return (0, a._getObjectFromStorage)(t);
    }
    function h(e) {
      if (!c[e] || (0, i._getDocumentSafe)() == null) return null;
      let t = document.cookie.split(`;`);
      for (let n of t) {
        let [t, r] = n.trim().split(`=`);
        if (t === v(e)) return decodeURIComponent(r);
      }
      return null;
    }
    function g(e, t) {
      if (!c[t] || (0, i._getDocumentSafe)() == null) return;
      let n = new Date();
      (n.setFullYear(n.getFullYear() + 1),
        (document.cookie = `${v(t)}=${encodeURIComponent(e)}; expires=${n.toUTCString()}; path=/`));
    }
    function v(e) {
      return `statsig.stable_id.${(0, n._getStorageKey)(e)}`;
    }
    e.getCookieName = v;
  }),
  w = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.ErrorTag = void 0),
      (e.ErrorTag = { NetworkError: `NetworkError` }));
  }),
  T = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
      (e.SDK_VERSION = `3.32.1`));
    var t = { sdkVersion: e.SDK_VERSION, sdkType: `js-mono` };
    e.StatsigMetadataProvider = {
      get: () => t,
      add: (e) => {
        t = Object.assign(Object.assign({}, t), e);
      },
    };
  }),
  E = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.LoggingEnabledOption = e.LogEventCompressionMode = void 0),
      (e.LogEventCompressionMode = { Disabled: `d`, Enabled: `e`, Forced: `f` }),
      (e.LoggingEnabledOption = {
        disabled: `disabled`,
        browserOnly: `browser-only`,
        always: `always`,
      }));
  }),
  D = e((e) => {
    var i =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.NetworkCore = e.RETRYABLE_CODES = void 0),
      n());
    var a = n(),
      o = r(),
      s = t(),
      c = u(),
      l = v(),
      p = y(),
      m = b(),
      h = d(),
      g = S(),
      _ = C(),
      x = w(),
      D = T(),
      O = E(),
      k = f(),
      A = 1e4,
      j = 500,
      M = 3e4,
      N = 1e3,
      P = 50,
      F = P / N;
    ((e.RETRYABLE_CODES = new Set([408, 500, 502, 503, 504, 522, 524, 599])),
      (e.NetworkCore = class {
        constructor(e, t) {
          ((this._emitter = t),
            (this._errorBoundary = null),
            (this._timeout = A),
            (this._netConfig = {}),
            (this._options = {}),
            (this._leakyBucket = {}),
            (this._lastUsedInitUrl = null),
            e && (this._options = e),
            this._options.networkConfig && (this._netConfig = this._options.networkConfig),
            this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
            (this._fallbackResolver = new l.NetworkFallbackResolver(this._options)),
            this.setLogEventCompressionMode(this._getLogEventCompressionMode(e)));
        }
        setLogEventCompressionMode(e) {
          this._options.logEventCompressionMode = e;
        }
        setErrorBoundary(e) {
          ((this._errorBoundary = e),
            this._errorBoundary.wrap(this),
            this._errorBoundary.wrap(this._fallbackResolver),
            this._fallbackResolver.setErrorBoundary(e));
        }
        isBeaconSupported() {
          return typeof navigator < `u` && typeof navigator.sendBeacon == `function`;
        }
        getLastUsedInitUrlAndReset() {
          let e = this._lastUsedInitUrl;
          return ((this._lastUsedInitUrl = null), e);
        }
        beacon(e) {
          if (!I(e)) return !1;
          let t = this._getInternalRequestArgs(`POST`, e),
            n = this._getPopulatedURL(t),
            r = navigator;
          return r.sendBeacon.bind(r)(n, t.body);
        }
        post(e) {
          return i(this, void 0, void 0, function* () {
            let t = this._getInternalRequestArgs(`POST`, e);
            return (this._tryEncodeBody(t), yield this._tryToCompressBody(t), this._sendRequest(t));
          });
        }
        get(e) {
          let t = this._getInternalRequestArgs(`GET`, e);
          return this._sendRequest(t);
        }
        _sendRequest(t) {
          return i(this, void 0, void 0, function* () {
            var n, r;
            if (!I(t) || this._netConfig.preventAllNetworkTraffic) return null;
            let { method: i, body: a, retries: o, attempt: c } = t,
              l = t.urlConfig.endpoint;
            if (this._isRateLimited(l))
              return (
                s.Log.warn(
                  `Request to ${l} was blocked because you are making requests too frequently.`,
                ),
                null
              );
            let u = c ?? 1,
              d = !1,
              f = this._getPopulatedURL(t),
              p = null,
              m = (0, k._isUnloading)();
            try {
              let e = {
                method: i,
                body: a,
                headers: Object.assign({}, t.headers),
                priority: t.priority,
                keepalive: m,
              };
              V(t, u);
              let n = this._leakyBucket[l];
              n && ((n.lastRequestTime = Date.now()), (this._leakyBucket[l] = n));
              let r = this._netConfig.networkOverrideFunc ?? fetch,
                o;
              if (
                ((p = yield Promise.race([
                  r(f, e).finally(() => clearTimeout(o)),
                  new Promise((e, t) => {
                    o = setTimeout(() => {
                      ((d = !0), t(Error(`Timeout of ${this._timeout}ms expired.`)));
                    }, this._timeout);
                  }),
                ])),
                !p.ok)
              ) {
                let e = yield p.text().catch(() => `No Text`),
                  t = Error(`NetworkError: ${f} ${e}`);
                throw ((t.name = `NetworkError`), t);
              }
              let s = yield p.text();
              return (
                H(t, p, u, s),
                this._fallbackResolver.tryBumpExpiryTime(t.sdkKey, t.urlConfig),
                { body: s, code: p.status }
              );
            } catch (a) {
              let c = z(a),
                l = B(c ?? ``, d);
              if (
                (H(t, p, u, ``, a),
                (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
                  t.sdkKey,
                  t.urlConfig,
                  c,
                  l,
                )) &&
                  (t.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(
                    t.sdkKey,
                    t.urlConfig,
                  )),
                !o || u > o || !e.RETRYABLE_CODES.has(p?.status ?? 500))
              ) {
                (n = this._emitter) == null ||
                  n.call(this, {
                    name: `error`,
                    error: a,
                    tag: x.ErrorTag.NetworkError,
                    requestArgs: t,
                  });
                let e = `A networking error occurred during ${i} request to ${f}.`;
                return (
                  s.Log.error(e, c, a),
                  (r = this._errorBoundary) == null || r.attachErrorIfNoneExists(e),
                  null
                );
              }
              return (
                yield U(u),
                this._sendRequest(
                  Object.assign(Object.assign({}, t), { retries: o, attempt: u + 1 }),
                )
              );
            }
          });
        }
        _getLogEventCompressionMode(e) {
          let t = e?.logEventCompressionMode;
          return (
            !t && e?.disableCompression === !0 && (t = O.LogEventCompressionMode.Disabled),
            (t ||= O.LogEventCompressionMode.Enabled),
            t
          );
        }
        _isRateLimited(e) {
          let t = Date.now(),
            n = this._leakyBucket[e] ?? { count: 0, lastRequestTime: t },
            r = t - n.lastRequestTime,
            i = Math.floor(r * F);
          return (
            (n.count = Math.max(0, n.count - i)),
            n.count >= P
              ? !0
              : ((n.count += 1), (n.lastRequestTime = t), (this._leakyBucket[e] = n), !1)
          );
        }
        _getPopulatedURL(e) {
          let t = e.fallbackUrl ?? e.urlConfig.getUrl();
          (e.urlConfig.endpoint === c.Endpoint._initialize ||
            e.urlConfig.endpoint === c.Endpoint._download_config_specs) &&
            (this._lastUsedInitUrl = t);
          let n = Object.assign(
              {
                [c.NetworkParam.SdkKey]: e.sdkKey,
                [c.NetworkParam.SdkType]: m.SDKType._get(e.sdkKey),
                [c.NetworkParam.SdkVersion]: D.SDK_VERSION,
                [c.NetworkParam.Time]: String(Date.now()),
                [c.NetworkParam.SessionID]: g.SessionID.get(e.sdkKey),
              },
              e.params,
            ),
            r = Object.keys(n)
              .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`)
              .join(`&`);
          return `${t}${r ? `?${r}` : ``}`;
        }
        _tryEncodeBody(e) {
          let t = (0, h._getWindowSafe)(),
            n = e.body;
          if (
            !(
              !e.isStatsigEncodable ||
              this._options.disableStatsigEncoding ||
              typeof n != `string` ||
              (0, a._getStatsigGlobalFlag)(`no-encode`) != null ||
              !t?.btoa
            )
          )
            try {
              ((e.body = t.btoa(n).split(``).reverse().join(``)),
                (e.params = Object.assign(Object.assign({}, e.params ?? {}), {
                  [c.NetworkParam.StatsigEncoded]: `1`,
                })));
            } catch (t) {
              s.Log.warn(`Request encoding failed for ${e.urlConfig.getUrl()}`, t);
            }
        }
        _tryToCompressBody(e) {
          return i(this, void 0, void 0, function* () {
            let t = e.body;
            if (!(typeof t != `string` || !R(e, this._options)))
              try {
                let n = new TextEncoder().encode(t),
                  r = new CompressionStream(`gzip`),
                  i = r.writable.getWriter();
                (i.write(n).catch(s.Log.error), i.close().catch(s.Log.error));
                let a = r.readable.getReader(),
                  o = [],
                  l;
                for (; !(l = yield a.read()).done; ) o.push(l.value);
                let u = o.reduce((e, t) => e + t.length, 0),
                  d = new Uint8Array(u),
                  f = 0;
                for (let e of o) (d.set(e, f), (f += e.length));
                ((e.body = d),
                  (e.params = Object.assign(Object.assign({}, e.params ?? {}), {
                    [c.NetworkParam.IsGzipped]: `1`,
                  })));
              } catch (t) {
                s.Log.warn(`Request compression failed for ${e.urlConfig.getUrl()}`, t);
              }
          });
        }
        _getInternalRequestArgs(e, t) {
          let n = this._fallbackResolver.getActiveFallbackUrl(t.sdkKey, t.urlConfig),
            r = Object.assign(Object.assign({}, t), { method: e, fallbackUrl: n });
          return (`data` in t && L(r, t.data), r);
        }
      }));
    var I = (e) => (e.sdkKey ? !0 : (s.Log.warn(`Unable to make request without an SDK key`), !1)),
      L = (e, t) => {
        let { sdkKey: n, fallbackUrl: r } = e,
          i = _.StableID.get(n),
          a = g.SessionID.get(n),
          o = m.SDKType._get(n);
        e.body = JSON.stringify(
          Object.assign(Object.assign({}, t), {
            statsigMetadata: Object.assign(Object.assign({}, D.StatsigMetadataProvider.get()), {
              stableID: i,
              sessionID: a,
              sdkType: o,
              fallbackUrl: r,
            }),
          }),
        );
      };
    function R(e, t) {
      if (
        !e.isCompressable ||
        (0, a._getStatsigGlobalFlag)(`no-compress`) != null ||
        typeof CompressionStream > `u` ||
        typeof TextEncoder > `u`
      )
        return !1;
      let n = e.urlConfig.customUrl != null || e.urlConfig.fallbackUrls != null,
        r = p.SDKFlags.get(e.sdkKey, `enable_log_event_compression`) === !0;
      switch (t.logEventCompressionMode) {
        case O.LogEventCompressionMode.Disabled:
          return !1;
        case O.LogEventCompressionMode.Enabled:
          return !(n && !r);
        case O.LogEventCompressionMode.Forced:
          return !0;
        default:
          return !1;
      }
    }
    function z(e) {
      return typeof e == `string`
        ? e
        : e instanceof Error
          ? `${e.name}: ${e.message}`
          : `Unknown Error`;
    }
    function B(e, t) {
      return e.includes(`Timeout`) || t;
    }
    function V(e, t) {
      e.urlConfig.endpoint === c.Endpoint._initialize &&
        o.Diagnostics._markInitNetworkReqStart(e.sdkKey, { attempt: t });
    }
    function H(e, t, n, r, i) {
      e.urlConfig.endpoint === c.Endpoint._initialize &&
        o.Diagnostics._markInitNetworkReqEnd(
          e.sdkKey,
          o.Diagnostics._getDiagnosticsData(t, n, r, i),
        );
    }
    function U(e) {
      return i(this, void 0, void 0, function* () {
        yield new Promise((t) => setTimeout(t, Math.min(e * e * j, M)));
      });
    }
  }),
  O = e((e) => {
    var n =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FlushCoordinator = void 0));
    var r = a(),
      i = p(),
      o = m(),
      s = h(),
      l = c(),
      u = t(),
      d = D(),
      f = S(),
      g = _();
    e.FlushCoordinator = class {
      constructor(e, t, n, r, a, s, c, l, u, d) {
        ((this._cooldownTimer = null),
          (this._maxIntervalTimer = null),
          (this._hasRunQuickFlush = !1),
          (this._currentFlushPromise = null),
          (this._creationTime = Date.now()),
          (this._isShuttingDown = !1),
          (this._storageKey = null),
          (this._flushInterval = new o.FlushInterval()),
          (this._batchQueue = e),
          (this._pendingEvents = t),
          (this._onPrepareFlush = n),
          (this._errorBoundary = d),
          (this._sdkKey = r),
          (this._eventSender = new i.EventSender(r, a, s, c, l, u)));
      }
      setLoggingEnabled(e) {
        this._eventSender.setLoggingEnabled(e);
      }
      setLogEventCompressionMode(e) {
        this._eventSender.setLogEventCompressionMode(e);
      }
      startScheduledFlushCycle() {
        this._scheduleNextFlush();
      }
      stopScheduledFlushCycle() {
        this._clearAllTimers();
      }
      addEvent(e) {
        (this._pendingEvents.addToPendingEventsQueue(e),
          !this._currentFlushPromise &&
            this._pendingEvents.hasEventsForFullBatch() &&
            this.processLimitFlush());
      }
      processManualFlush() {
        return n(this, void 0, void 0, function* () {
          return (
            this._currentFlushPromise && (yield this._currentFlushPromise),
            (this._currentFlushPromise = this._executeFlush(s.FlushType.Manual).finally(() => {
              ((this._currentFlushPromise = null), this._scheduleNextFlush());
            })),
            this._currentFlushPromise
          );
        });
      }
      processShutdown() {
        return n(this, void 0, void 0, function* () {
          return (
            (this._isShuttingDown = !0),
            this._clearAllTimers(),
            this._currentFlushPromise && (yield this._currentFlushPromise),
            (this._currentFlushPromise = this._executeFlush(s.FlushType.Shutdown)
              .catch((e) => {
                u.Log.error(`Error during shutdown flush: ${e}`);
              })
              .finally(() => {
                this._currentFlushPromise = null;
              })),
            this._currentFlushPromise
          );
        });
      }
      _executeFlush(e) {
        return n(this, void 0, void 0, function* () {
          this._clearAllTimers();
          try {
            this._prepareQueueForFlush(e);
            let t = this._batchQueue.takeAllBatches();
            if (t.length === 0) return;
            yield Promise.all(t.map((t) => this._processOneBatch(t, e)));
          } finally {
            this._isShuttingDown || this._scheduleNextFlush();
          }
        });
      }
      checkQuickFlush() {
        this._hasRunQuickFlush ||
          Date.now() - this._creationTime > r.EventRetryConstants.QUICK_FLUSH_WINDOW_MS ||
          ((this._hasRunQuickFlush = !0),
          setTimeout(() => {
            this.processManualFlush().catch((e) => {
              u.Log.warn(`Quick flush failed:`, e);
            });
          }, r.EventRetryConstants.QUICK_FLUSH_WINDOW_MS));
      }
      _attemptScheduledFlush() {
        if (this._currentFlushPromise) {
          this._scheduleNextFlush();
          return;
        }
        let e = this.containsAtLeastOneFullBatch(),
          t = this._flushInterval.hasReachedMaxInterval();
        if (!e && !t) {
          this._scheduleNoopPollTick();
          return;
        }
        this._flushInterval.markFlushAttempt();
        let n;
        ((n = e ? s.FlushType.ScheduledFullBatch : s.FlushType.ScheduledMaxTime),
          (this._currentFlushPromise = this._processNextBatch(n)
            .then(() => {})
            .catch((e) => {
              u.Log.error(`Error during scheduled flush:`, e);
            })
            .finally(() => {
              ((this._currentFlushPromise = null), this._scheduleNextFlush());
            })));
      }
      processLimitFlush() {
        this._flushInterval.hasCompletelyRecoveredFromBackoff() &&
          (this._currentFlushPromise ||= this._processLimitFlushInternal()
            .catch((e) => {
              u.Log.error(`Error during limit flush`, e);
            })
            .finally(() => {
              ((this._currentFlushPromise = null), this._scheduleNextFlush());
            }));
      }
      _processLimitFlushInternal() {
        return n(this, void 0, void 0, function* () {
          if (yield this._processNextBatch(s.FlushType.Limit))
            for (
              ;
              this._flushInterval.hasCompletelyRecoveredFromBackoff() &&
              this.containsAtLeastOneFullBatch() &&
              (yield this._processNextBatch(s.FlushType.Limit));
            );
        });
      }
      _scheduleNextFlush() {
        if ((this._clearAllTimers(), this._isShuttingDown)) return;
        let e = Math.max(0, this._flushInterval.getTimeUntilNextFlush());
        this._cooldownTimer = setTimeout(() => {
          ((this._cooldownTimer = null),
            f.StatsigSession.checkForIdleSession(this._sdkKey),
            this._attemptScheduledFlush());
        }, e);
        let t = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
        this._maxIntervalTimer = setTimeout(() => {
          ((this._maxIntervalTimer = null),
            f.StatsigSession.checkForIdleSession(this._sdkKey),
            this._attemptScheduledFlush());
        }, t);
      }
      _clearAllTimers() {
        (this._cooldownTimer !== null &&
          (clearTimeout(this._cooldownTimer), (this._cooldownTimer = null)),
          this._maxIntervalTimer !== null &&
            (clearTimeout(this._maxIntervalTimer), (this._maxIntervalTimer = null)));
      }
      _scheduleNoopPollTick() {
        if ((this._clearAllTimers(), this._isShuttingDown)) return;
        this._cooldownTimer = setTimeout(() => {
          ((this._cooldownTimer = null),
            f.StatsigSession.checkForIdleSession(this._sdkKey),
            this._attemptScheduledFlush());
        }, r.EventRetryConstants.TICK_INTERVAL_MS);
        let e = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
        this._maxIntervalTimer = setTimeout(() => {
          ((this._maxIntervalTimer = null),
            f.StatsigSession.checkForIdleSession(this._sdkKey),
            this._attemptScheduledFlush());
        }, e);
      }
      _processNextBatch(e) {
        return n(this, void 0, void 0, function* () {
          this._prepareQueueForFlush(e);
          let t = this._batchQueue.takeNextBatch();
          return t ? this._processOneBatch(t, e) : !1;
        });
      }
      _processOneBatch(e, t) {
        return n(this, void 0, void 0, function* () {
          let n = yield this._eventSender.sendBatch(e);
          return n.success
            ? (this._flushInterval.adjustForSuccess(), !0)
            : (this._flushInterval.adjustForFailure(), this._handleFailure(e, t, n.statusCode), !1);
        });
      }
      _prepareQueueForFlush(e) {
        this._onPrepareFlush();
        let t = this.convertPendingEventsToBatches();
        t > 0 &&
          (u.Log.warn(`Dropped ${t} events`),
          this._errorBoundary.logDroppedEvents(t, `Batch queue limit reached`, {
            loggingInterval: this._flushInterval.getCurrentIntervalMs(),
            batchSize: this._batchQueue.batchSize(),
            maxPendingBatches: r.EventRetryConstants.MAX_PENDING_BATCHES,
            flushType: e,
            retries: `dropped before batching`,
          }));
      }
      containsAtLeastOneFullBatch() {
        return this._pendingEvents.hasEventsForFullBatch() || this._batchQueue.hasFullBatch();
      }
      convertPendingEventsToBatches() {
        if (this._pendingEvents.isEmpty()) return 0;
        let e = this._pendingEvents.takeAll();
        return this._batchQueue.createBatches(e);
      }
      _handleFailure(e, t, n) {
        if (t === s.FlushType.Shutdown) {
          (u.Log.warn(
            `${t} flush failed during shutdown. ${e.events.length} event(s) will be saved to storage for retry in next session.`,
          ),
            this._saveShutdownFailedEventsToStorage(e.events));
          return;
        }
        if (!d.RETRYABLE_CODES.has(n)) {
          (u.Log.warn(
            `${t} flush failed after ${e.attempts} attempt(s). ${e.events.length} event(s) will be dropped. Non-retryable error: ${n}`,
          ),
            this._errorBoundary.logEventRequestFailure(
              e.events.length,
              `non-retryable error`,
              t,
              n,
              e.attempts,
            ));
          return;
        }
        if (e.attempts >= r.EventRetryConstants.MAX_RETRY_ATTEMPTS) {
          (u.Log.warn(
            `${t} flush failed after ${e.attempts} attempt(s). ${e.events.length} event(s) will be dropped.`,
          ),
            this._errorBoundary.logEventRequestFailure(
              e.events.length,
              `max retry attempts exceeded`,
              t,
              n,
              e.attempts,
            ));
          return;
        }
        e.incrementAttempts();
        let i = this._batchQueue.requeueBatch(e);
        i > 0 &&
          (u.Log.warn(`Failed to requeue batch : dropped ${i} events due to full queue`),
          this._errorBoundary.logDroppedEvents(i, `Batch queue limit reached`, {
            loggingInterval: this._flushInterval.getCurrentIntervalMs(),
            batchSize: this._batchQueue.batchSize(),
            maxPendingBatches: r.EventRetryConstants.MAX_PENDING_BATCHES,
            flushType: t,
            retries: e.attempts,
          }));
      }
      loadAndRetryShutdownFailedEvents() {
        return n(this, void 0, void 0, function* () {
          let e = this._getStorageKey();
          try {
            g.Storage.isReady() || (yield g.Storage.isReadyResolver());
            let t = this._getShutdownFailedEventsFromStorage(e);
            if (t.length === 0) return;
            (u.Log.debug(`Loading ${t.length} failed shutdown event(s) from storage for retry`),
              g.Storage.removeItem(e),
              t.forEach((e) => {
                this.addEvent(e);
              }),
              yield this.processManualFlush());
          } catch (e) {
            u.Log.warn(`Failed to load and retry failed shutdown events:`, e);
          }
        });
      }
      _getStorageKey() {
        return (
          (this._storageKey ||= `statsig.failed_shutdown_events.${(0, l._DJB2)(this._sdkKey)}`),
          this._storageKey
        );
      }
      _saveShutdownFailedEventsToStorage(e) {
        let t = this._getStorageKey();
        try {
          let n = [...this._getShutdownFailedEventsFromStorage(t), ...e];
          (n.length > r.EventRetryConstants.MAX_LOCAL_STORAGE &&
            (n = n.slice(-r.EventRetryConstants.MAX_LOCAL_STORAGE)),
            (0, g._setObjectInStorage)(t, n),
            u.Log.debug(
              `Saved ${e.length} failed shutdown event(s) to storage (total stored: ${n.length})`,
            ));
        } catch (e) {
          u.Log.warn(`Unable to save failed shutdown events to storage:`, e);
        }
      }
      _getShutdownFailedEventsFromStorage(e) {
        try {
          let t = (0, g._getObjectFromStorage)(e);
          return Array.isArray(t) ? t : [];
        } catch {
          return [];
        }
      }
    };
  }),
  k = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.PendingEvents = void 0));
    var n = t();
    e.PendingEvents = class {
      constructor(e) {
        ((this._pendingEvents = []), (this._batchSize = e));
      }
      addToPendingEventsQueue(e) {
        (this._pendingEvents.push(e), n.Log.debug(`Enqueued Event:`, e));
      }
      hasEventsForFullBatch() {
        return this._pendingEvents.length >= this._batchSize;
      }
      takeAll() {
        let e = this._pendingEvents;
        return ((this._pendingEvents = []), e);
      }
      isEmpty() {
        return this._pendingEvents.length === 0;
      }
    };
  }),
  A = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._createLayerParameterExposure =
        e._createConfigExposure =
        e._mapExposures =
        e._createGateExposure =
        e._isExposureEvent =
          void 0));
    var t = `statsig::config_exposure`,
      n = `statsig::gate_exposure`,
      r = `statsig::layer_exposure`,
      i = (e, t, n, r, i) => (
        n.bootstrapMetadata && (r.bootstrapMetadata = n.bootstrapMetadata),
        {
          eventName: e,
          user: t,
          value: null,
          metadata: o(n, r),
          secondaryExposures: i,
          time: Date.now(),
        }
      );
    ((e._isExposureEvent = ({ eventName: e }) => e === n || e === t || e === r),
      (e._createGateExposure = (e, t, r) => {
        let o = { gate: t.name, gateValue: String(t.value), ruleID: t.ruleID };
        return (
          t.__evaluation?.version != null && (o.configVersion = t.__evaluation.version),
          i(n, e, t.details, o, a(t.__evaluation?.secondary_exposures ?? [], r))
        );
      }));
    function a(e, t) {
      return e.map((e) => (typeof e == `string` ? (t ?? {})[e] : e)).filter((e) => e != null);
    }
    ((e._mapExposures = a),
      (e._createConfigExposure = (e, n, r) => {
        let o = { config: n.name, ruleID: n.ruleID };
        return (
          n.__evaluation?.version != null && (o.configVersion = n.__evaluation.version),
          n.__evaluation?.passed != null && (o.rulePassed = String(n.__evaluation.passed)),
          i(t, e, n.details, o, a(n.__evaluation?.secondary_exposures ?? [], r))
        );
      }),
      (e._createLayerParameterExposure = (e, t, n, o) => {
        let s = t.__evaluation,
          c = s?.explicit_parameters?.includes(n) === !0,
          l = ``,
          u = s?.undelegated_secondary_exposures ?? [];
        c && ((l = s.allocated_experiment_name ?? ``), (u = s.secondary_exposures ?? []));
        let d = t.__evaluation?.parameter_rule_ids,
          f = {
            config: t.name,
            parameterName: n,
            ruleID: d?.[n] ?? t.ruleID,
            allocatedExperiment: l,
            isExplicitParameter: String(c),
          };
        return (
          t.__evaluation?.version != null && (f.configVersion = t.__evaluation.version),
          i(r, e, t.details, f, a(u, o))
        );
      }));
    var o = (e, t) => (
      (t.reason = e.reason),
      e.lcut && (t.lcut = String(e.lcut)),
      e.receivedAt && (t.receivedAt = String(e.receivedAt)),
      t
    );
  }),
  j = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.UrlConfiguration = void 0));
    var t = c(),
      n = u(),
      r = {
        [n.Endpoint._initialize]: `i`,
        [n.Endpoint._rgstr]: `e`,
        [n.Endpoint._download_config_specs]: `d`,
      };
    e.UrlConfiguration = class {
      constructor(e, t, i, a) {
        ((this.customUrl = null),
          (this.fallbackUrls = null),
          (this.endpoint = e),
          (this.endpointDnsKey = r[e]),
          t && (this.customUrl = t),
          !t && i && (this.customUrl = i.endsWith(`/`) ? `${i}${e}` : `${i}/${e}`),
          a && (this.fallbackUrls = a),
          (this.defaultUrl = `${n.NetworkDefault[e]}/${e}`));
      }
      getUrl() {
        return this.customUrl ?? this.defaultUrl;
      }
      getChecksum() {
        let e = (this.fallbackUrls ?? []).sort().join(`,`);
        return (0, t._DJB2)(this.customUrl + e);
      }
    };
  }),
  M = e((e) => {
    var n =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EventLogger = void 0));
    var r = o(),
      i = l(),
      s = a(),
      p = O(),
      m = c(),
      h = t(),
      g = u(),
      v = k(),
      y = d(),
      b = A(),
      x = E(),
      S = _(),
      C = j(),
      w = f(),
      T = 1e3,
      D = 6e5,
      M = {};
    e.EventLogger = class e {
      static _safeFlushAndForget(e) {
        var t;
        (t = M[e]) == null || t.flush().catch(() => {});
      }
      constructor(e, t, n, r, i) {
        ((this._sdkKey = e),
          (this._emitter = t),
          (this._network = n),
          (this._options = r),
          (this._errorBoundary = i),
          (this._pendingEvents = null),
          (this._batchQueue = null),
          (this._flushCoordinator = null),
          (this._lastExposureTimeMap = {}),
          (this._nonExposedChecks = {}),
          (this._isShuttingDown = !1),
          (this._storageKey = null),
          (this._pendingCompressionMode = null),
          (this._loggingEnabled =
            r?.loggingEnabled ??
            (r?.disableLogging === !0
              ? x.LoggingEnabledOption.disabled
              : x.LoggingEnabledOption.browserOnly)),
          r?.loggingEnabled &&
            r.disableLogging !== void 0 &&
            h.Log.warn(
              `Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.`,
            ));
        let a = r?.networkConfig;
        this._logEventUrlConfig = new C.UrlConfiguration(
          g.Endpoint._rgstr,
          a?.logEventUrl,
          a?.api,
          a?.logEventFallbackUrls,
        );
      }
      setLogEventCompressionMode(e) {
        this._flushCoordinator
          ? this._flushCoordinator.setLogEventCompressionMode(e)
          : (this._pendingCompressionMode = e);
      }
      setLoggingEnabled(e) {
        let t = this._loggingEnabled === `disabled`,
          n = e !== `disabled`;
        if (
          ((this._loggingEnabled = e),
          this._flushCoordinator && this._flushCoordinator.setLoggingEnabled(e),
          t && n)
        ) {
          let e = this._loadStoredEvents();
          (h.Log.debug(`Loaded ${e.length} stored event(s) from storage`),
            e.length > 0 &&
              (e.forEach((e) => {
                this._initFlushCoordinator().addEvent(e);
              }),
              this.flush().catch((e) => {
                h.Log.warn(`Failed to flush events after enabling logging:`, e);
              })));
        }
      }
      enqueue(e) {
        var t;
        if (!this._shouldLogEvent(e)) return;
        let n = this._normalizeEvent(e);
        if (this._loggingEnabled === `disabled`) {
          this._storeEventToStorage(n);
          return;
        }
        (this._initFlushCoordinator().addEvent(n),
          (t = this._flushCoordinator) == null || t.checkQuickFlush());
      }
      incrementNonExposureCount(e) {
        let t = this._nonExposedChecks[e] ?? 0;
        this._nonExposedChecks[e] = t + 1;
      }
      reset() {
        (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
      }
      start() {
        let t = (0, y._isServerEnv)();
        if (t && this._options?.loggingEnabled !== `always`) return;
        let n = this._initFlushCoordinator();
        ((M[this._sdkKey] = this),
          t ||
            (0, w._subscribeToVisiblityChanged)((t) => {
              t === `background`
                ? e._safeFlushAndForget(this._sdkKey)
                : t === `foreground` && n.startScheduledFlushCycle();
            }),
          n.loadAndRetryShutdownFailedEvents().catch((e) => {
            h.Log.warn(`Failed to load failed shutdown events:`, e);
          }),
          n.startScheduledFlushCycle());
      }
      stop() {
        return n(this, void 0, void 0, function* () {
          ((this._isShuttingDown = !0),
            this._flushCoordinator && (yield this._flushCoordinator.processShutdown()),
            delete M[this._sdkKey],
            (this._flushCoordinator = null),
            (this._pendingEvents = null),
            (this._batchQueue = null));
        });
      }
      flush() {
        return n(this, void 0, void 0, function* () {
          if (this._flushCoordinator) return this._flushCoordinator.processManualFlush();
        });
      }
      appendAndResetNonExposedChecks() {
        if (Object.keys(this._nonExposedChecks).length === 0) return;
        let e = Object.assign({}, this._nonExposedChecks);
        this._nonExposedChecks = {};
        let t = this._normalizeEvent({
          eventName: `statsig::non_exposed_checks`,
          user: null,
          time: Date.now(),
          metadata: { checks: e },
        });
        this._flushCoordinator && this._flushCoordinator.addEvent(t);
      }
      _shouldLogEvent(e) {
        if (this._options?.loggingEnabled !== `always` && (0, y._isServerEnv)()) return !1;
        if (!(0, b._isExposureEvent)(e)) return !0;
        let t = e.user ? e.user : { statsigEnvironment: void 0 },
          n = (0, i._getUserStorageKey)(this._sdkKey, t),
          r = e.metadata ? e.metadata : {},
          a = [
            e.eventName,
            n,
            r.gate,
            r.config,
            r.ruleID,
            r.allocatedExperiment,
            r.parameterName,
            String(r.isExplicitParameter),
            r.reason,
          ].join(`|`),
          o = this._lastExposureTimeMap[a],
          s = Date.now();
        return o && s - o < D
          ? !1
          : (Object.keys(this._lastExposureTimeMap).length > T && (this._lastExposureTimeMap = {}),
            (this._lastExposureTimeMap[a] = s),
            !0);
      }
      _getCurrentPageUrl() {
        if (this._options?.includeCurrentPageUrlWithEvents !== !1)
          return (0, y._getCurrentPageUrlSafe)();
      }
      _getStorageKey() {
        return (
          (this._storageKey ||= `statsig.pending_events.${(0, m._DJB2)(this._sdkKey)}`),
          this._storageKey
        );
      }
      _initFlushCoordinator() {
        if (this._flushCoordinator) return this._flushCoordinator;
        let e = this._options?.loggingBufferMaxSize ?? s.EventRetryConstants.DEFAULT_BATCH_SIZE;
        return (
          (this._pendingEvents = new v.PendingEvents(e)),
          (this._batchQueue = new r.BatchQueue(e)),
          (this._flushCoordinator = new p.FlushCoordinator(
            this._batchQueue,
            this._pendingEvents,
            () => this.appendAndResetNonExposedChecks(),
            this._sdkKey,
            this._network,
            this._emitter,
            this._logEventUrlConfig,
            this._options,
            this._loggingEnabled,
            this._errorBoundary,
          )),
          (this._pendingCompressionMode &&=
            (this._flushCoordinator.setLogEventCompressionMode(this._pendingCompressionMode),
            null)),
          this._flushCoordinator
        );
      }
      _storeEventToStorage(e) {
        let t = this._getStorageKey();
        try {
          let n = this._getEventsFromStorage(t);
          (n.push(e),
            n.length > s.EventRetryConstants.MAX_LOCAL_STORAGE &&
              (n = n.slice(-s.EventRetryConstants.MAX_LOCAL_STORAGE)),
            (0, S._setObjectInStorage)(t, n));
        } catch {
          h.Log.warn(`Unable to save events to storage`);
        }
      }
      _getEventsFromStorage(e) {
        try {
          let t = (0, S._getObjectFromStorage)(e);
          return Array.isArray(t) ? t : [];
        } catch {
          return [];
        }
      }
      _loadStoredEvents() {
        let e = this._getStorageKey(),
          t = this._getEventsFromStorage(e);
        return (t.length > 0 && S.Storage.removeItem(e), t);
      }
      _normalizeEvent(e) {
        e.user && ((e.user = Object.assign({}, e.user)), delete e.user.privateAttributes);
        let t = {},
          n = this._getCurrentPageUrl();
        return (
          n && (t.statsigMetadata = { currentPage: n }),
          Object.assign(Object.assign({}, e), t)
        );
      }
    };
  }),
  N = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.PrecomputedEvaluationsContextHandle = void 0));
    var n = t(),
      r = d(),
      i = S(),
      a = C();
    e.PrecomputedEvaluationsContextHandle = class {
      constructor(e, t, n, r, i, a) {
        ((this._sdkKey = e),
          (this._getOptions = t),
          (this._getErrorBoundary = n),
          (this._getValues = r),
          (this._getUser = i),
          (this._getSdkInstanceID = a));
      }
      get sdkKey() {
        return this._sdkKey;
      }
      get options() {
        return this._getOptions();
      }
      get errorBoundary() {
        return this._getErrorBoundary();
      }
      get values() {
        return this._getValues();
      }
      get user() {
        let e = (0, r._cloneObject)(`StatsigUser`, this._getUser());
        return ((e ??= (n.Log.error(`Failed to clone user`), {})), e);
      }
      getSession(e = !0) {
        return i.StatsigSession.get(this._sdkKey, e);
      }
      get stableID() {
        return a.StableID.get(this._sdkKey);
      }
      get sdkInstanceID() {
        return this._getSdkInstanceID();
      }
      toContext(e = !0) {
        return {
          sdkKey: this.sdkKey,
          options: this.options,
          values: this.values,
          user: this.user,
          errorBoundary: this.errorBoundary,
          session: this.getSession(e),
          stableID: this.stableID,
          sdkInstanceID: this.sdkInstanceID,
        };
      }
    };
  }),
  P = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._getUnitIDFromUser = e._getFullUserHash = e._normalizeUser = void 0));
    var n = c(),
      r = t(),
      i = d();
    function a(e, t, n) {
      let a = (0, i._cloneObject)(`StatsigUser`, e);
      return a == null
        ? (r.Log.error(`Failed to clone user`), { statsigEnvironment: void 0 })
        : (t != null && t.environment != null
            ? (a.statsigEnvironment = t.environment)
            : n != null && (a.statsigEnvironment = { tier: n }),
          a);
    }
    e._normalizeUser = a;
    function o(e) {
      return e ? (0, n._DJB2Object)(e) : null;
    }
    e._getFullUserHash = o;
    function s(e, t) {
      if (typeof t != `string`) return e.userID;
      let n = t.toLowerCase();
      return n === `userid` ? e.userID : (e.customIDs?.[t] ?? e.customIDs?.[n]);
    }
    e._getUnitIDFromUser = s;
  }),
  F = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._typedJsonParse = void 0));
    var n = t();
    function r(e, t, r) {
      try {
        let n = JSON.parse(e);
        if (n && typeof n == `object` && t in n) return n;
      } catch {}
      return (n.Log.error(`Failed to parse ${r}`), null);
    }
    e._typedJsonParse = r;
  }),
  I = e((e) => {
    var n =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._makeDataAdapterResult = e.DataAdapterCore = void 0));
    var r = t(),
      i = C(),
      a = P(),
      o = _(),
      s = F(),
      c = 10,
      l = 8;
    e.DataAdapterCore = class {
      constructor(e, t) {
        ((this._adapterName = e),
          (this._cacheSuffix = t),
          (this._options = null),
          (this._sdkKey = null),
          (this._cacheLimit = c),
          (this._lastModifiedStoreKey = `statsig.last_modified_time.${t}`),
          (this._inMemoryCache = new d()));
      }
      attach(e, t, n) {
        ((this._sdkKey = e), (this._options = t));
      }
      getDataSync(e) {
        let t = e && (0, a._normalizeUser)(e, this._options),
          n = this._getCacheKey(t),
          r = this._inMemoryCache.get(n, t);
        if (r && this._getIsCacheValueValid(r)) return r;
        let i = this._loadFromCache(n);
        return i && this._getIsCacheValueValid(i)
          ? (this._inMemoryCache.add(n, i, this._cacheLimit), this._inMemoryCache.get(n, t))
          : null;
      }
      setData(e, t) {
        let n = t && (0, a._normalizeUser)(t, this._options),
          r = this._getCacheKey(n);
        this._inMemoryCache.add(r, u(`Bootstrap`, e, null, n), this._cacheLimit);
      }
      _getIsCacheValueValid(e) {
        return e.stableID == null || e.stableID === i.StableID.get(this._getSdkKey());
      }
      _getDataAsyncImpl(e, t, i) {
        return n(this, void 0, void 0, function* () {
          o.Storage.isReady() || (yield o.Storage.isReadyResolver());
          let n = e ?? this.getDataSync(t),
            a = [this._fetchAndPrepFromNetwork(n, t, i)];
          return (
            i?.timeoutMs &&
              a.push(
                new Promise((e) => setTimeout(e, i.timeoutMs)).then(
                  () => (r.Log.debug(`Fetching latest value timed out`), null),
                ),
              ),
            yield Promise.race(a)
          );
        });
      }
      _prefetchDataImpl(e, t) {
        return n(this, void 0, void 0, function* () {
          let n = e && (0, a._normalizeUser)(e, this._options),
            r = this._getCacheKey(n),
            i = yield this._getDataAsyncImpl(null, n, t);
          i &&
            this._inMemoryCache.add(
              r,
              Object.assign(Object.assign({}, i), { source: `Prefetch` }),
              this._cacheLimit,
            );
        });
      }
      _fetchAndPrepFromNetwork(e, t, a) {
        return n(this, void 0, void 0, function* () {
          let n = e?.data ?? null,
            o = e != null && this._isCachedResultValidFor204(e, t),
            c = yield this._fetchFromNetwork(n, t, a, o);
          if (!c) return (r.Log.debug(`No response returned for latest value`), null);
          let l = (0, s._typedJsonParse)(c, `has_updates`, `Response`),
            d = this._getSdkKey(),
            f = i.StableID.get(d),
            p = null;
          if (l?.has_updates === !0) p = u(`Network`, c, f, t);
          else if (n && l?.has_updates === !1) p = u(`NetworkNotModified`, n, f, t);
          else return null;
          let m = this._getCacheKey(t);
          return (this._inMemoryCache.add(m, p, this._cacheLimit), this._writeToCache(m, p), p);
        });
      }
      _getSdkKey() {
        return this._sdkKey == null
          ? (r.Log.error(`${this._adapterName} is not attached to a Client`), ``)
          : this._sdkKey;
      }
      _loadFromCache(e) {
        let t = o.Storage.getItem?.call(o.Storage, e);
        if (t == null) return null;
        let n = (0, s._typedJsonParse)(t, `source`, `Cached Result`);
        return n ? Object.assign(Object.assign({}, n), { source: `Cache` }) : null;
      }
      _writeToCache(e, t) {
        let n = JSON.stringify(t);
        for (let t = 0; t < l; t++)
          try {
            o.Storage.setItem(e, n);
            break;
          } catch (t) {
            if (
              !(t instanceof Error) ||
              !(
                t.toString().includes(`QuotaExceededError`) ||
                t.toString().includes(`QUOTA_EXCEEDED_ERR`)
              ) ||
              this._cacheLimit <= 1
            )
              throw t;
            ((this._cacheLimit = Math.ceil(this._cacheLimit / 2)),
              this._runLocalStorageCacheEviction(e, this._cacheLimit - 1));
          }
        this._runLocalStorageCacheEviction(e);
      }
      _runLocalStorageCacheEviction(e, t = this._cacheLimit) {
        let n = (0, o._getObjectFromStorage)(this._lastModifiedStoreKey) ?? {};
        n[e] = Date.now();
        let r = f(n, t);
        for (let e of r) (delete n[e], o.Storage.removeItem(e));
        (0, o._setObjectInStorage)(this._lastModifiedStoreKey, n);
      }
    };
    function u(e, t, n, r) {
      return {
        source: e,
        data: t,
        receivedAt: Date.now(),
        stableID: n,
        fullUserHash: (0, a._getFullUserHash)(r),
      };
    }
    e._makeDataAdapterResult = u;
    var d = class {
      constructor() {
        this._data = {};
      }
      get(e, t) {
        let n = this._data[e],
          i = n?.stableID,
          a = t?.customIDs?.stableID;
        return a && i && a !== i
          ? (r.Log.warn(`'StatsigUser.customIDs.stableID' mismatch`), null)
          : n;
      }
      add(e, t, n) {
        let r = f(this._data, n - 1);
        for (let e of r) delete this._data[e];
        this._data[e] = t;
      }
      merge(e) {
        this._data = Object.assign(Object.assign({}, this._data), e);
      }
    };
    function f(e, t) {
      let n = Object.keys(e);
      return n.length <= t
        ? []
        : t === 0
          ? n
          : n
              .sort((t, n) => {
                let r = e[t],
                  i = e[n];
                return typeof r == `object` && typeof i == `object`
                  ? r.receivedAt - i.receivedAt
                  : r - i;
              })
              .slice(0, n.length - t);
    }
  }),
  L = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  R = e((e) => {
    var n =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
    var r = t(),
      i = b(),
      a = T();
    e.EXCEPTION_ENDPOINT = `https://statsigapi.net/v1/sdk_exception`;
    var o = `[Statsig] UnknownError`;
    e.ErrorBoundary = class {
      constructor(e, t, n, r) {
        ((this._sdkKey = e),
          (this._options = t),
          (this._emitter = n),
          (this._lastSeenError = r),
          (this._seen = new Set()));
      }
      wrap(e, t) {
        try {
          let n = e;
          l(n).forEach((r) => {
            let i = n[r];
            `$EB` in i ||
              ((n[r] = (...n) => this._capture(t ? `${t}:${r}` : r, () => i.apply(e, n))),
              (n[r].$EB = !0));
          });
        } catch (e) {
          this._onError(`eb:wrap`, e);
        }
      }
      logError(e, t) {
        this._onError(e, t);
      }
      logDroppedEvents(e, t, n) {
        let r = { eventCount: String(e) };
        (n &&
          Object.keys(n).forEach((e) => {
            r[e] = String(n[e]);
          }),
          this._onError(`statsig::log_event_dropped_event_count`, Error(t), !0, r));
      }
      logEventRequestFailure(e, t, n, r, i) {
        let a = {
          eventCount: String(e),
          flushType: n,
          statusCode: String(r),
          reason: t,
          retries: String(i),
        };
        this._onError(`statsig::log_event_failed`, Error(t), !0, a);
      }
      getLastSeenErrorAndReset() {
        let e = this._lastSeenError;
        return ((this._lastSeenError = void 0), e ?? null);
      }
      attachErrorIfNoneExists(e) {
        this._lastSeenError ||= s(e);
      }
      _capture(e, t) {
        try {
          let n = t();
          return n && n instanceof Promise ? n.catch((t) => this._onError(e, t)) : n;
        } catch (t) {
          return (this._onError(e, t), null);
        }
      }
      _onError(t, l, d = !1, f) {
        try {
          (r.Log.warn(`Caught error in ${t}`, { error: l }),
            n(this, void 0, void 0, function* () {
              var n, r;
              let p = l || Error(o),
                m = p instanceof Error,
                h = m ? p.name : `No Name`;
              if (((this._lastSeenError = s(p)), !d && this._seen.has(h))) return;
              if ((this._seen.add(h), this._options?.networkConfig?.preventAllNetworkTraffic)) {
                (n = this._emitter) == null || n.call(this, { name: `error`, error: l, tag: t });
                return;
              }
              let g = i.SDKType._get(this._sdkKey),
                _ = a.StatsigMetadataProvider.get(),
                v = m ? p.stack : c(p),
                y = Object.assign(
                  Object.assign(
                    { tag: t, exception: h, info: v, statsigOptions: u(this._options) },
                    Object.assign(Object.assign({}, _), { sdkType: g }),
                  ),
                  f ?? {},
                );
              (yield (this._options?.networkConfig?.networkOverrideFunc ?? fetch)(
                e.EXCEPTION_ENDPOINT,
                {
                  method: `POST`,
                  headers: {
                    "STATSIG-API-KEY": this._sdkKey,
                    "STATSIG-SDK-TYPE": String(g),
                    "STATSIG-SDK-VERSION": String(_.sdkVersion),
                    "Content-Type": `application/json`,
                  },
                  body: JSON.stringify(y),
                },
              ),
                (r = this._emitter) == null || r.call(this, { name: `error`, error: l, tag: t }));
            })
              .then(() => {})
              .catch(() => {}));
        } catch {}
      }
    };
    function s(e) {
      return e instanceof Error
        ? e
        : typeof e == `string`
          ? Error(e)
          : Error(`An unknown error occurred.`);
    }
    function c(e) {
      try {
        return JSON.stringify(e);
      } catch {
        return o;
      }
    }
    function l(e) {
      let t = new Set(),
        n = Object.getPrototypeOf(e);
      for (; n && n !== Object.prototype; )
        (Object.getOwnPropertyNames(n)
          .filter((e) => typeof n?.[e] == `function`)
          .forEach((e) => t.add(e)),
          (n = Object.getPrototypeOf(n)));
      return Array.from(t);
    }
    function u(e) {
      if (!e) return {};
      let t = {};
      return (
        Object.keys(e).forEach((n) => {
          let r = n,
            i = e[r];
          switch (typeof i) {
            case `number`:
            case `bigint`:
            case `boolean`:
              t[String(r)] = i;
              break;
            case `string`:
              i.length < 50 ? (t[String(r)] = i) : (t[String(r)] = `set`);
              break;
            case `object`:
              r === `environment`
                ? (t.environment = i)
                : r === `networkConfig`
                  ? (t.networkConfig = i)
                  : (t[String(r)] = i == null ? `unset` : `set`);
              break;
            default:
          }
        }),
        t
      );
    }
  }),
  z = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  B = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  V = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  H = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createMemoKey = e.MemoPrefix = void 0),
      (e.MemoPrefix = {
        _gate: `g`,
        _dynamicConfig: `c`,
        _experiment: `e`,
        _configList: `cl`,
        _layer: `l`,
        _paramStore: `p`,
      }));
    var t = new Set([]),
      n = new Set([`userPersistedValues`]);
    function r(e, r, i) {
      let a = `${e}|${r}`;
      if (!i) return a;
      for (let e of Object.keys(i)) {
        if (n.has(e)) return;
        t.has(e) ? (a += `|${e}=true`) : (a += `|${e}=${i[e]}`);
      }
      return a;
    }
    e.createMemoKey = r;
  }),
  U = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  W = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  G = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._fastApproxSizeOf = void 0));
    var t = 2,
      n = 1;
    e._fastApproxSizeOf = (r, i) => {
      let a = 0,
        o = Object.keys(r);
      for (let s = 0; s < o.length; s++) {
        let c = o[s],
          l = r[c];
        if (
          ((a += c.length),
          typeof l == `object` && l
            ? (a += (0, e._fastApproxSizeOf)(l, i) + t)
            : (a += String(l).length + n),
          a >= i)
        )
          return a;
      }
      return a;
    };
  }),
  K = e((e) => {
    var r =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.StatsigClientBase = void 0), n());
    var i = n(),
      a = R(),
      o = M(),
      s = t(),
      c = H(),
      l = d(),
      u = S(),
      f = C(),
      p = E(),
      m = _(),
      h = 3e3;
    e.StatsigClientBase = class {
      constructor(e, t, n, r) {
        var i, c;
        ((this.loadingStatus = `Uninitialized`),
          (this._initializePromise = null),
          (this._listeners = {}));
        let l = this.$emt.bind(this);
        (r?.logLevel != null && (s.Log.level = r.logLevel),
          r != null && r.disableStorage && m.Storage._setDisabled(!0),
          r != null &&
            r.initialSessionID &&
            u.StatsigSession.overrideInitialSessionID(r.initialSessionID, e),
          r != null && r.storageProvider && m.Storage._setProvider(r.storageProvider),
          r != null && r.enableCookies && f.StableID._setCookiesEnabled(e, r.enableCookies),
          r != null && r.disableStableID && f.StableID._setDisabled(e, !0),
          (this._sdkKey = e),
          (this._options = r ?? {}),
          (this._memoCache = {}),
          (this.overrideAdapter = r?.overrideAdapter ?? null),
          (this._errorBoundary = new a.ErrorBoundary(e, r, l)),
          (this._logger = new o.EventLogger(e, l, n, r, this._errorBoundary)),
          this._errorBoundary.wrap(this),
          this._errorBoundary.wrap(t),
          this._errorBoundary.wrap(this._logger),
          n.setErrorBoundary(this._errorBoundary),
          (this.dataAdapter = t),
          this.dataAdapter.attach(e, r, n),
          (this.storageProvider = m.Storage),
          (c = (i = this.overrideAdapter)?.loadFromStorage?.call(i)) == null ||
            c.catch((e) => this._errorBoundary.logError(`OA::loadFromStorage`, e)),
          this._primeReadyRipcord(),
          g(e, this));
      }
      updateRuntimeOptions(e) {
        (e.loggingEnabled
          ? ((this._options.loggingEnabled = e.loggingEnabled),
            this._logger.setLoggingEnabled(e.loggingEnabled))
          : e.disableLogging != null &&
            ((this._options.disableLogging = e.disableLogging),
            this._logger.setLoggingEnabled(e.disableLogging ? `disabled` : `browser-only`)),
          e.disableStorage != null &&
            ((this._options.disableStorage = e.disableStorage),
            m.Storage._setDisabled(e.disableStorage)),
          e.enableCookies != null &&
            ((this._options.enableCookies = e.enableCookies),
            f.StableID._setCookiesEnabled(this._sdkKey, e.enableCookies)),
          e.logEventCompressionMode
            ? this._logger.setLogEventCompressionMode(e.logEventCompressionMode)
            : e.disableCompression &&
              this._logger.setLogEventCompressionMode(p.LogEventCompressionMode.Disabled));
      }
      flush() {
        return this._logger.flush();
      }
      shutdown() {
        return r(this, void 0, void 0, function* () {
          (this.$emt({ name: `pre_shutdown` }),
            this._setStatus(`Uninitialized`, null),
            (this._initializePromise = null),
            yield this._logger.stop());
        });
      }
      on(e, t) {
        (this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t));
      }
      off(e, t) {
        if (this._listeners[e]) {
          let n = this._listeners[e].indexOf(t);
          n !== -1 && this._listeners[e].splice(n, 1);
        }
      }
      $on(e, t) {
        ((t.__isInternal = !0), this.on(e, t));
      }
      $emt(e) {
        var t;
        let n = (t) => {
          try {
            t(e);
          } catch (n) {
            if (t.__isInternal === !0) {
              this._errorBoundary.logError(`__emit:${e.name}`, n);
              return;
            }
            s.Log.error(
              `An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.`,
              e,
            );
          }
        };
        (this._listeners[e.name] && this._listeners[e.name].forEach((e) => n(e)),
          (t = this._listeners[`*`]) == null || t.forEach(n));
      }
      _setStatus(e, t) {
        ((this.loadingStatus = e),
          (this._memoCache = {}),
          this.$emt({ name: `values_updated`, status: e, values: t }));
      }
      _enqueueExposure(e, t, n) {
        if (n?.disableExposureLog === !0) {
          this._logger.incrementNonExposureCount(e);
          return;
        }
        this._logger.enqueue(t);
      }
      _memoize(e, t) {
        return (n, r) => {
          if (this._options.disableEvaluationMemoization) return t(n, r);
          let i = (0, c.createMemoKey)(e, n, r);
          return i
            ? (i in this._memoCache ||
                (Object.keys(this._memoCache).length >= h && (this._memoCache = {}),
                (this._memoCache[i] = t(n, r))),
              this._memoCache[i])
            : t(n, r);
        };
      }
    };
    function g(e, t) {
      if ((0, l._isServerEnv)()) return;
      let n = (0, i._getStatsigGlobal)(),
        r = n.instances ?? {},
        a = t;
      (r[e] != null &&
        s.Log.warn(
          `Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.`,
        ),
        (r[e] = a),
        (n.firstInstance ||= a),
        (n.instances = r),
        (__STATSIG__ = n));
    }
  }),
  q = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.DataAdapterCachePrefix = void 0),
      (e.DataAdapterCachePrefix = `statsig.cached`));
  }),
  J = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  Y = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._makeTypedGet =
        e._mergeOverride =
        e._makeLayer =
        e._makeExperiment =
        e._makeDynamicConfig =
        e._makeFeatureGate =
          void 0));
    var n = t(),
      r = s();
    function i(e, t, n, r) {
      return { name: e, details: t, ruleID: n?.rule_id ?? ``, __evaluation: n, value: r };
    }
    function a(e, t, n) {
      return Object.assign(Object.assign({}, i(e, t, n, n?.value === !0)), {
        idType: n?.id_type ?? null,
      });
    }
    e._makeFeatureGate = a;
    function o(e, t, n) {
      let r = n?.value ?? {};
      return Object.assign(Object.assign({}, i(e, t, n, r)), {
        idType: n?.id_type ?? null,
        get: d(e, n?.value),
      });
    }
    e._makeDynamicConfig = o;
    function c(e, t, n) {
      let r = o(e, t, n);
      return Object.assign(Object.assign({}, r), { groupName: n?.group_name ?? null });
    }
    e._makeExperiment = c;
    function l(e, t, n, r) {
      return Object.assign(Object.assign({}, i(e, t, n, void 0)), {
        get: d(e, n?.value, r),
        groupName: n?.group_name ?? null,
        __value: n?.value ?? {},
      });
    }
    e._makeLayer = l;
    function u(e, t, n, r) {
      return Object.assign(Object.assign(Object.assign({}, e), t), { get: d(e.name, n, r) });
    }
    e._mergeOverride = u;
    function d(e, t, i) {
      return (a, o) => {
        let s = t?.[a] ?? null;
        return s == null
          ? (o ?? null)
          : o != null && !(0, r._isTypeMatch)(s, o)
            ? (n.Log.warn(
                `Parameter type mismatch. '${e}.${a}' was found to be type '${typeof s}' but fallback/return type is '${typeof o}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
              ),
              o ?? null)
            : (i?.(a), s);
      };
    }
    e._makeTypedGet = d;
  }),
  X = e((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  Z = e((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.UPDATE_DETAIL_ERROR_MESSAGES = e.createUpdateDetails = void 0),
      (e.createUpdateDetails = (e, t, n, r, i, a) => ({
        duration: n,
        source: t,
        success: e,
        error: r,
        sourceUrl: i,
        warnings: a,
      })),
      (e.UPDATE_DETAIL_ERROR_MESSAGES = {
        NO_NETWORK_DATA: `No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.`,
      }));
  }),
  Q = e((e) => {
    var i =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      a =
        (e && e.__exportStar) ||
        function (e, t) {
          for (var n in e)
            n !== `default` && !Object.prototype.hasOwnProperty.call(t, n) && i(t, e, n);
        };
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
      n());
    var o = n(),
      p = r();
    Object.defineProperty(e, `Diagnostics`, {
      enumerable: !0,
      get: function () {
        return p.Diagnostics;
      },
    });
    var m = M();
    Object.defineProperty(e, `EventLogger`, {
      enumerable: !0,
      get: function () {
        return m.EventLogger;
      },
    });
    var h = t();
    Object.defineProperty(e, `Log`, {
      enumerable: !0,
      get: function () {
        return h.Log;
      },
    });
    var g = T(),
      v = _();
    (Object.defineProperty(e, `Storage`, {
      enumerable: !0,
      get: function () {
        return v.Storage;
      },
    }),
      a(n(), e),
      a(l(), e),
      a(N(), e),
      a(I(), e),
      a(r(), e),
      a(L(), e),
      a(R(), e),
      a(z(), e),
      a(B(), e),
      a(c(), e),
      a(V(), e),
      a(t(), e),
      a(H(), e),
      a(u(), e),
      a(D(), e),
      a(U(), e),
      a(W(), e),
      a(d(), e),
      a(b(), e),
      a(S(), e),
      a(G(), e),
      a(C(), e),
      a(K(), e),
      a(w(), e),
      a(q(), e),
      a(A(), e),
      a(T(), e),
      a(E(), e),
      a(J(), e),
      a(Y(), e),
      a(X(), e),
      a(P(), e),
      a(_(), e),
      a(F(), e),
      a(s(), e),
      a(j(), e),
      a(x(), e),
      a(f(), e),
      a(Z(), e),
      a(y(), e),
      Object.assign((0, o._getStatsigGlobal)(), { Log: h.Log, SDK_VERSION: g.SDK_VERSION }));
  });
export { Q as t };
