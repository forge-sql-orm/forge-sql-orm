import { c as mt } from "./lodash-vendor-Cp37rRJM.js";
var he = {},
  Ct = {},
  kt = {},
  pn;
function H() {
  return (
    pn ||
      ((pn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          u = "  INFO ",
          E = "  WARN ",
          v = " ERROR ";
        function _(S) {
          return (S.unshift("[Statsig]"), S);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class g {
          static info(...y) {
            g.level >= e.LogLevel.Info && console.info(u, ..._(y));
          }
          static debug(...y) {
            g.level >= e.LogLevel.Debug && console.debug(m, ..._(y));
          }
          static warn(...y) {
            g.level >= e.LogLevel.Warn && console.warn(E, ..._(y));
          }
          static error(...y) {
            g.level >= e.LogLevel.Error && console.error(v, ..._(y));
          }
        }
        ((e.Log = g), (g.level = e.LogLevel.Warn));
      })(kt)),
    kt
  );
}
var wn;
function ce() {
  return (
    wn ||
      ((wn = 1),
      (function (e) {
        var m, u, E;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = H(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : r;
            } catch {
              return r;
            }
          };
        e._getStatsigGlobal = _;
        const g = (o) => (0, e._getStatsigGlobal)()[o];
        e._getStatsigGlobalFlag = g;
        const S = (o) => {
          const n = (0, e._getStatsigGlobal)();
          return o
            ? n.instances && n.instances[o]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                v.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              n.firstInstance);
        };
        e._getInstance = S;
        const y = "__STATSIG__",
          s = typeof window < "u" ? window : {},
          a = typeof mt < "u" ? mt : {},
          i = typeof globalThis < "u" ? globalThis : {},
          r =
            (E =
              (u = (m = s[y]) !== null && m !== void 0 ? m : a[y]) !== null && u !== void 0
                ? u
                : i[y]) !== null && E !== void 0
              ? E
              : { instance: e._getInstance };
        ((s[y] = r), (a[y] = r), (i[y] = r));
      })(Ct)),
    Ct
  );
}
var Ot = {},
  In;
function dn() {
  return (
    In ||
      ((In = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          u = "start",
          E = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (s) => m.get(s),
          _markInitOverallStart: (s) => {
            S(s, _({}, u, "overall"));
          },
          _markInitOverallEnd: (s, a, i) => {
            S(
              s,
              _(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: i,
                },
                E,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (s, a) => {
            S(s, _(a, u, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (s, a) => {
            S(s, _(a, E, "initialize", "network_request"));
          },
          _markInitProcessStart: (s) => {
            S(s, _({}, u, "initialize", "process"));
          },
          _markInitProcessEnd: (s, a) => {
            S(s, _(a, E, "initialize", "process"));
          },
          _clearMarkers: (s) => {
            m.delete(s);
          },
          _formatError(s) {
            if (s && typeof s == "object")
              return { code: y(s, "code"), name: y(s, "name"), message: y(s, "message") };
          },
          _getDiagnosticsData(s, a, i, r) {
            var o;
            return {
              success: s?.ok === !0,
              statusCode: s?.status,
              sdkRegion:
                (o = s?.headers) === null || o === void 0 ? void 0 : o.get("x-statsig-region"),
              isDelta: i.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: e.Diagnostics._formatError(r),
            };
          },
          _enqueueDiagnosticsEvent(s, a, i, r) {
            const o = e.Diagnostics._getMarkers(i);
            if (o == null || o.length <= 0) return -1;
            const n = o[o.length - 1].timestamp - o[0].timestamp;
            e.Diagnostics._clearMarkers(i);
            const t = g(s, { context: "initialize", markers: o.slice(), statsigOptions: r });
            return (a.enqueue(t), n);
          },
        };
        function _(s, a, i, r) {
          return Object.assign({ key: i, action: a, step: r, timestamp: Date.now() }, s);
        }
        function g(s, a) {
          return { eventName: v, user: s, value: null, metadata: a, time: Date.now() };
        }
        function S(s, a) {
          var i;
          const r = (i = m.get(s)) !== null && i !== void 0 ? i : [];
          (r.push(a), m.set(s, r));
        }
        function y(s, a) {
          if (a in s) return s[a];
        }
      })(Ot)),
    Ot
  );
}
var fe = {},
  ve = {},
  Tt = {},
  me = {},
  Dn;
function gn() {
  if (Dn) return me;
  ((Dn = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me._isTypeMatch = me._typeOf = void 0));
  function e(u) {
    return Array.isArray(u) ? "array" : typeof u;
  }
  me._typeOf = e;
  function m(u, E) {
    const v = (_) => (Array.isArray(_) ? "array" : typeof _);
    return v(u) === v(E);
  }
  return ((me._isTypeMatch = m), me);
}
var Cn;
function Be() {
  return (
    Cn ||
      ((Cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = gn(),
          u = (_) => {
            let g = 0;
            for (let S = 0; S < _.length; S++) {
              const y = _.charCodeAt(S);
              ((g = (g << 5) - g + y), (g = g & g));
            }
            return String(g >>> 0);
          };
        e._DJB2 = u;
        const E = (_, g) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, g)));
        e._DJB2Object = E;
        const v = (_, g) => {
          if (_ == null) return null;
          const S = Object.keys(_).sort(),
            y = {};
          return (
            S.forEach((s) => {
              const a = _[s];
              if (g === 0 || (0, m._typeOf)(a) !== "object") {
                y[s] = a;
                return;
              }
              y[s] = (0, e._getSortedObject)(a, g != null ? g - 1 : g);
            }),
            y
          );
        };
        e._getSortedObject = v;
      })(Tt)),
    Tt
  );
}
var kn;
function Et() {
  if (kn) return ve;
  ((kn = 1),
    Object.defineProperty(ve, "__esModule", { value: !0 }),
    (ve._getStorageKey = ve._getUserStorageKey = void 0));
  const e = Be();
  function m(E, v, _) {
    var g;
    if (_) return _(E, v);
    const S = v && v.customIDs ? v.customIDs : {},
      y = [
        `uid:${(g = v?.userID) !== null && g !== void 0 ? g : ""}`,
        `cids:${Object.keys(S)
          .sort((s, a) => s.localeCompare(a))
          .map((s) => `${s}-${S[s]}`)
          .join(",")}`,
        `k:${E}`,
      ];
    return (0, e._DJB2)(y.join("|"));
  }
  ve._getUserStorageKey = m;
  function u(E, v, _) {
    return v ? m(E, v, _) : (0, e._DJB2)(`k:${E}`);
  }
  return ((ve._getStorageKey = u), ve);
}
var Mt = {},
  On;
function bt() {
  return (
    On ||
      ((On = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NetworkParam = e.NetworkDefault = e.Endpoint = void 0),
          (e.Endpoint = {
            _initialize: "initialize",
            _rgstr: "rgstr",
            _download_config_specs: "download_config_specs",
          }),
          (e.NetworkDefault = {
            [e.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
            [e.Endpoint._initialize]: "https://featureassets.org/v1",
            [e.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1",
          }),
          (e.NetworkParam = {
            EventCount: "ec",
            SdkKey: "k",
            SdkType: "st",
            SdkVersion: "sv",
            Time: "t",
            SessionID: "sid",
            StatsigEncoded: "se",
            IsGzipped: "gz",
          }));
      })(Mt)),
    Mt
  );
}
var Rt = {},
  Tn;
function je() {
  return (
    Tn ||
      ((Tn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getUnloadEvent =
            e._getCurrentPageUrlSafe =
            e._addDocumentEventListenerSafe =
            e._addWindowEventListenerSafe =
            e._isServerEnv =
            e._getDocumentSafe =
            e._getWindowSafe =
              void 0));
        const m = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = m;
        const u = () => {
          var y;
          const s = (0, e._getWindowSafe)();
          return (y = s?.document) !== null && y !== void 0 ? y : null;
        };
        e._getDocumentSafe = u;
        const E = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const y =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || y;
        };
        e._isServerEnv = E;
        const v = (y, s) => {
          const a = (0, e._getWindowSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(y, s);
        };
        e._addWindowEventListenerSafe = v;
        const _ = (y, s) => {
          const a = (0, e._getDocumentSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(y, s);
        };
        e._addDocumentEventListenerSafe = _;
        const g = () => {
          var y;
          try {
            return (y = (0, e._getWindowSafe)()) === null || y === void 0
              ? void 0
              : y.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = g;
        const S = () => {
          const y = (0, e._getWindowSafe)();
          return y && "onpagehide" in y ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = S;
      })(Rt)),
    Rt
  );
}
var X = {},
  Mn;
function ui() {
  if (Mn) return X;
  ((Mn = 1),
    Object.defineProperty(X, "__esModule", { value: !0 }),
    (X._createLayerParameterExposure =
      X._createConfigExposure =
      X._mapExposures =
      X._createGateExposure =
      X._isExposureEvent =
        void 0));
  const e = "statsig::config_exposure",
    m = "statsig::gate_exposure",
    u = "statsig::layer_exposure",
    E = (a, i, r, o, n) => (
      r.bootstrapMetadata && (o.bootstrapMetadata = r.bootstrapMetadata),
      {
        eventName: a,
        user: i,
        value: null,
        metadata: s(r, o),
        secondaryExposures: n,
        time: Date.now(),
      }
    ),
    v = ({ eventName: a }) => a === m || a === e || a === u;
  X._isExposureEvent = v;
  const _ = (a, i, r) => {
    var o, n, t;
    const l = { gate: i.name, gateValue: String(i.value), ruleID: i.ruleID };
    return (
      ((o = i.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (l.configVersion = i.__evaluation.version),
      E(
        m,
        a,
        i.details,
        l,
        g(
          (t = (n = i.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          r,
        ),
      )
    );
  };
  X._createGateExposure = _;
  function g(a, i) {
    return a.map((r) => (typeof r == "string" ? (i ?? {})[r] : r)).filter((r) => r != null);
  }
  X._mapExposures = g;
  const S = (a, i, r) => {
    var o, n, t, l;
    const h = { config: i.name, ruleID: i.ruleID };
    return (
      ((o = i.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (h.configVersion = i.__evaluation.version),
      ((n = i.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (h.rulePassed = String(i.__evaluation.passed)),
      E(
        e,
        a,
        i.details,
        h,
        g(
          (l = (t = i.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && l !== void 0
            ? l
            : [],
          r,
        ),
      )
    );
  };
  X._createConfigExposure = S;
  const y = (a, i, r, o) => {
    var n, t, l, h, c, w;
    const f = i.__evaluation,
      d = ((n = f?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(r)) === !0;
    let b = "",
      I = (t = f?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    d &&
      ((b = (l = f.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (I = f.secondary_exposures));
    const C = (h = i.__evaluation) === null || h === void 0 ? void 0 : h.parameter_rule_ids,
      M = {
        config: i.name,
        parameterName: r,
        ruleID: (c = C?.[r]) !== null && c !== void 0 ? c : i.ruleID,
        allocatedExperiment: b,
        isExplicitParameter: String(d),
      };
    return (
      ((w = i.__evaluation) === null || w === void 0 ? void 0 : w.version) != null &&
        (M.configVersion = i.__evaluation.version),
      E(u, a, i.details, M, g(I, o))
    );
  };
  X._createLayerParameterExposure = y;
  const s = (a, i) => (
    (i.reason = a.reason),
    a.lcut && (i.lcut = String(a.lcut)),
    a.receivedAt && (i.receivedAt = String(a.receivedAt)),
    i
  );
  return X;
}
var ye = {},
  Rn;
function pt() {
  return (
    Rn ||
      ((Rn = 1),
      Object.defineProperty(ye, "__esModule", { value: !0 }),
      (ye.LoggingEnabledOption = ye.LogEventCompressionMode = void 0),
      (ye.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (ye.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    ye
  );
}
var Lt = {},
  Ln;
function de() {
  return (
    Ln ||
      ((Ln = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = H(),
          u = je(),
          E = {},
          v = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (i) => (E[i] ? E[i] : null),
            setItem: (i, r) => {
              E[i] = r;
            },
            removeItem: (i) => {
              delete E[i];
            },
            getAllKeys: () => Object.keys(E),
          };
        let _ = null;
        try {
          const i = (0, u._getWindowSafe)();
          i &&
            i.localStorage &&
            typeof i.localStorage.getItem == "function" &&
            (_ = {
              isReady: () => !0,
              isReadyResolver: () => null,
              getProviderName: () => "LocalStorage",
              getItem: (r) => i.localStorage.getItem(r),
              setItem: (r, o) => i.localStorage.setItem(r, o),
              removeItem: (r) => i.localStorage.removeItem(r),
              getAllKeys: () => Object.keys(i.localStorage),
            });
        } catch {
          m.Log.warn("Failed to setup localStorageProvider.");
        }
        let g = _ ?? v,
          S = g;
        function y(i) {
          try {
            return i();
          } catch (r) {
            if (r instanceof Error && r.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            if (r instanceof Error && r.name === "QuotaExceededError") {
              const n = e.Storage.getAllKeys().filter((t) => t.startsWith("statsig."));
              r.message = `${r.message}. Statsig Keys: ${n.length}`;
            }
            throw r;
          }
        }
        e.Storage = {
          isReady: () => S.isReady(),
          isReadyResolver: () => S.isReadyResolver(),
          getProviderName: () => S.getProviderName(),
          getItem: (i) => y(() => S.getItem(i)),
          setItem: (i, r) => y(() => S.setItem(i, r)),
          removeItem: (i) => S.removeItem(i),
          getAllKeys: () => S.getAllKeys(),
          _setProvider: (i) => {
            ((g = i), (S = i));
          },
          _setDisabled: (i) => {
            i ? (S = v) : (S = g);
          },
        };
        function s(i) {
          const r = e.Storage.getItem(i);
          return JSON.parse(r ?? "null");
        }
        e._getObjectFromStorage = s;
        function a(i, r) {
          e.Storage.setItem(i, JSON.stringify(r));
        }
        e._setObjectInStorage = a;
      })(Lt)),
    Lt
  );
}
var Ge = {},
  Fn;
function ci() {
  if (Fn) return Ge;
  ((Fn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.UrlConfiguration = void 0));
  const e = Be(),
    m = bt(),
    u = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  class E {
    constructor(_, g, S, y) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = u[_]),
        g && (this.customUrl = g),
        !g && S && (this.customUrl = S.endsWith("/") ? `${S}${_}` : `${S}/${_}`),
        y && (this.fallbackUrls = y));
      const s = m.NetworkDefault[_];
      this.defaultUrl = `${s}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const g = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + g);
    }
  }
  return ((Ge.UrlConfiguration = E), Ge);
}
var Ft = {},
  Un;
function hn() {
  return (
    Un ||
      ((Un = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const m = je(),
          u = "foreground",
          E = "background",
          v = [];
        let _ = u,
          g = !1;
        const S = () => _ === u;
        e._isCurrentlyVisible = S;
        const y = () => g;
        e._isUnloading = y;
        const s = (i) => {
          v.unshift(i);
        };
        e._subscribeToVisiblityChanged = s;
        const a = (i) => {
          i !== _ && ((_ = i), v.forEach((r) => r(i)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((g = !1), (0, e._notifyVisibilityChanged)(u));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(E)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? u : E);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((g = !0), (0, e._notifyVisibilityChanged)(E));
          }));
      })(Ft)),
    Ft
  );
}
var An;
function di() {
  if (An) return fe;
  An = 1;
  var e =
    (fe && fe.__awaiter) ||
    function (f, d, b, I) {
      function C(M) {
        return M instanceof b
          ? M
          : new b(function (L) {
              L(M);
            });
      }
      return new (b || (b = Promise))(function (M, L) {
        function A(B) {
          try {
            N(I.next(B));
          } catch (k) {
            L(k);
          }
        }
        function x(B) {
          try {
            N(I.throw(B));
          } catch (k) {
            L(k);
          }
        }
        function N(B) {
          B.done ? M(B.value) : C(B.value).then(A, x);
        }
        N((I = I.apply(f, d || [])).next());
      });
    };
  (Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.EventLogger = void 0));
  const m = Et(),
    u = Be(),
    E = H(),
    v = bt(),
    _ = je(),
    g = ui(),
    S = pt(),
    y = de(),
    s = ci(),
    a = hn(),
    i = 100,
    r = 1e4,
    o = 1e3,
    n = 6e5,
    t = 500,
    l = 200,
    h = {},
    c = { Startup: "startup", GainedFocus: "gained_focus" };
  class w {
    static _safeFlushAndForget(d) {
      var b;
      (b = h[d]) === null || b === void 0 || b.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(d) {
      var b;
      (b = h[d]) === null || b === void 0 || b._retryFailedLogs(c.GainedFocus);
    }
    constructor(d, b, I, C) {
      var M, L;
      ((this._sdkKey = d),
        (this._emitter = b),
        (this._network = I),
        (this._options = C),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (M = C?.loggingEnabled) !== null && M !== void 0
            ? M
            : C?.disableLogging === !0
              ? S.LoggingEnabledOption.disabled
              : S.LoggingEnabledOption.browserOnly),
        C?.loggingEnabled &&
          C.disableLogging !== void 0 &&
          E.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = C?.loggingBufferMaxSize) !== null && L !== void 0 ? L : i));
      const A = C?.networkConfig;
      this._logEventUrlConfig = new s.UrlConfiguration(
        v.Endpoint._rgstr,
        A?.logEventUrl,
        A?.api,
        A?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(d) {
      this._network.setLogEventCompressionMode(d);
    }
    setLoggingEnabled(d) {
      this._loggingEnabled = d;
    }
    enqueue(d) {
      this._shouldLogEvent(d) &&
        (this._normalizeAndAppendEvent(d),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && w._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(d) {
      var b;
      const I = (b = this._nonExposedChecks[d]) !== null && b !== void 0 ? b : 0;
      this._nonExposedChecks[d] = I + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var d;
      const b = (0, _._isServerEnv)();
      (b &&
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always") ||
        ((h[this._sdkKey] = this),
        b ||
          (0, a._subscribeToVisiblityChanged)((I) => {
            I === "background"
              ? w._safeFlushAndForget(this._sdkKey)
              : I === "foreground" && w._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(c.Startup),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete h[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const d = this._queue;
        ((this._queue = []), yield this._sendEvents(d));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > l) &&
          setTimeout(() => w._safeFlushAndForget(this._sdkKey), l));
    }
    _shouldLogEvent(d) {
      var b;
      if (
        ((b = this._options) === null || b === void 0 ? void 0 : b.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, g._isExposureEvent)(d)) return !0;
      const I = d.user ? d.user : { statsigEnvironment: void 0 },
        C = (0, m._getUserStorageKey)(this._sdkKey, I),
        M = d.metadata ? d.metadata : {},
        L = [
          d.eventName,
          C,
          M.gate,
          M.config,
          M.ruleID,
          M.allocatedExperiment,
          M.parameterName,
          String(M.isExplicitParameter),
          M.reason,
        ].join("|"),
        A = this._lastExposureTimeMap[L],
        x = Date.now();
      return A && x - A < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > o && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[L] = x),
          !0);
    }
    _sendEvents(d) {
      return e(this, void 0, void 0, function* () {
        var b, I;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(d), !1);
        try {
          const M =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((I = (b = this._options) === null || b === void 0 ? void 0 : b.networkConfig) ===
              null || I === void 0
              ? void 0
              : I.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: d }),
            (M ? this._sendEventsViaBeacon(d) : yield this._sendEventsViaPost(d)).success
              ? (this._emitter({ name: "logs_flushed", events: d }), !0)
              : (E.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(d), !1)
          );
        } catch {
          return (E.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(d) {
      return e(this, void 0, void 0, function* () {
        var b;
        const I = yield this._network.post(this._getRequestData(d)),
          C = (b = I?.code) !== null && b !== void 0 ? b : -1;
        return { success: C >= 200 && C < 300 };
      });
    }
    _sendEventsViaBeacon(d) {
      return { success: this._network.beacon(this._getRequestData(d)) };
    }
    _getRequestData(d) {
      return {
        sdkKey: this._sdkKey,
        data: { events: d },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [v.NetworkParam.EventCount]: String(d.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(d) {
      for (; d.length > t; ) d.shift();
      const b = this._getStorageKey();
      try {
        (0, y._setObjectInStorage)(b, d);
      } catch {
        E.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(d) {
      const b = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        y.Storage.isReady() || (yield y.Storage.isReadyResolver());
        const I = (0, y._getObjectFromStorage)(b);
        if (!I) return;
        (d === c.Startup && y.Storage.removeItem(b),
          (yield this._sendEvents(I)) && d === c.GainedFocus && y.Storage.removeItem(b));
      }).catch(() => {
        E.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, u._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(d) {
      d.user && ((d.user = Object.assign({}, d.user)), delete d.user.privateAttributes);
      const b = {},
        I = this._getCurrentPageUrl();
      I && (b.statsigMetadata = { currentPage: I });
      const C = Object.assign(Object.assign({}, d), b);
      (E.Log.debug("Enqueued Event:", C), this._queue.push(C));
    }
    _appendAndResetNonExposedChecks() {
      Object.keys(this._nonExposedChecks).length !== 0 &&
        (this._normalizeAndAppendEvent({
          eventName: "statsig::non_exposed_checks",
          user: null,
          time: Date.now(),
          metadata: { checks: Object.assign({}, this._nonExposedChecks) },
        }),
        (this._nonExposedChecks = {}));
    }
    _getCurrentPageUrl() {
      var d;
      if (
        ((d = this._options) === null || d === void 0
          ? void 0
          : d.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, _._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var d, b;
      const I =
          (b = (d = this._options) === null || d === void 0 ? void 0 : d.loggingIntervalMs) !==
            null && b !== void 0
            ? b
            : r,
        C = setInterval(() => {
          const M = h[this._sdkKey];
          !M || M._flushIntervalId !== C ? clearInterval(C) : w._safeFlushAndForget(this._sdkKey);
        }, I);
      this._flushIntervalId = C;
    }
  }
  return ((fe.EventLogger = w), fe);
}
var Ut = {},
  Pn;
function yt() {
  return (
    Pn ||
      ((Pn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.18.2"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (u) => {
            m = Object.assign(Object.assign({}, m), u);
          },
        };
      })(Ut)),
    Ut
  );
}
var At = {},
  Nn;
function Ti() {
  return (Nn || ((Nn = 1), Object.defineProperty(At, "__esModule", { value: !0 })), At);
}
var ne = {},
  xe = {},
  Ve = {},
  jn;
function fn() {
  if (jn) return Ve;
  ((jn = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      u = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          m > 0
            ? ((_ = ((m + _) % 16) | 0), (m = Math.floor(m / 16)))
            : ((_ = ((u + _) % 16) | 0), (u = Math.floor(u / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ve.getUUID = e), Ve);
}
var qn;
function wt() {
  if (qn) return xe;
  ((qn = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.StableID = void 0));
  const e = Et(),
    m = H(),
    u = je(),
    E = de(),
    v = fn(),
    _ = {},
    g = {},
    S = {};
  xe.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (S[n]) return null;
      if (_[n] != null) return _[n];
      let t = null;
      return (
        (t = i(n)),
        t != null
          ? ((_[n] = t), s(t, n), t)
          : ((t = a(n)), t == null && (t = (0, v.getUUID)()), s(t, n), r(t, n), (_[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((_[t] = n), s(n, t), r(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      g[n] = t;
    },
    _setDisabled: (n, t) => {
      S[n] = t;
    },
  };
  function y(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function s(n, t) {
    const l = y(t);
    try {
      (0, E._setObjectInStorage)(l, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(n) {
    const t = y(n);
    return (0, E._getObjectFromStorage)(t);
  }
  function i(n) {
    if (!g[n] || (0, u._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [h, c] = l.trim().split("=");
      if (h === o(n)) return decodeURIComponent(c);
    }
    return null;
  }
  function r(n, t) {
    if (!g[t] || !document) return;
    const l = new Date();
    (l.setFullYear(l.getFullYear() + 1),
      (document.cookie = `${o(t)}=${encodeURIComponent(n)}; expires=${l.toUTCString()}; path=/`));
  }
  function o(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  return xe;
}
var Se = {},
  Kn;
function _i() {
  if (Kn) return Se;
  ((Kn = 1),
    Object.defineProperty(Se, "__esModule", { value: !0 }),
    (Se._getFullUserHash = Se._normalizeUser = void 0));
  const e = Be(),
    m = H();
  function u(v, _, g) {
    try {
      const S = JSON.parse(JSON.stringify(v));
      return (
        _ != null && _.environment != null
          ? (S.statsigEnvironment = _.environment)
          : g != null && (S.statsigEnvironment = { tier: g }),
        S
      );
    } catch {
      return (m.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  Se._normalizeUser = u;
  function E(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  return ((Se._getFullUserHash = E), Se);
}
var ze = {},
  Bn;
function gi() {
  if (Bn) return ze;
  ((Bn = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze._typedJsonParse = void 0));
  const e = H();
  function m(u, E, v) {
    try {
      const _ = JSON.parse(u);
      if (_ && typeof _ == "object" && E in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((ze._typedJsonParse = m), ze);
}
var Gn;
function Mi() {
  if (Gn) return ne;
  Gn = 1;
  var e =
    (ne && ne.__awaiter) ||
    function (i, r, o, n) {
      function t(l) {
        return l instanceof o
          ? l
          : new o(function (h) {
              h(l);
            });
      }
      return new (o || (o = Promise))(function (l, h) {
        function c(d) {
          try {
            f(n.next(d));
          } catch (b) {
            h(b);
          }
        }
        function w(d) {
          try {
            f(n.throw(d));
          } catch (b) {
            h(b);
          }
        }
        function f(d) {
          d.done ? l(d.value) : t(d.value).then(c, w);
        }
        f((n = n.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._makeDataAdapterResult = ne.DataAdapterCore = void 0));
  const m = H(),
    u = wt(),
    E = _i(),
    v = de(),
    _ = gi(),
    g = 10;
  class S {
    constructor(r, o) {
      ((this._adapterName = r),
        (this._cacheSuffix = o),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${o}`),
        (this._inMemoryCache = new s()));
    }
    attach(r, o, n) {
      ((this._sdkKey = r), (this._options = o));
    }
    getDataSync(r) {
      const o = r && (0, E._normalizeUser)(r, this._options),
        n = this._getCacheKey(o),
        t = this._inMemoryCache.get(n, o);
      if (t && this._getIsCacheValueValid(t)) return t;
      const l = this._loadFromCache(n);
      return l && this._getIsCacheValueValid(l)
        ? (this._inMemoryCache.add(n, l), this._inMemoryCache.get(n, o))
        : null;
    }
    setData(r, o) {
      const n = o && (0, E._normalizeUser)(o, this._options),
        t = this._getCacheKey(n);
      this._inMemoryCache.add(t, y("Bootstrap", r, null, n));
    }
    _getIsCacheValueValid(r) {
      return r.stableID == null || r.stableID === u.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(r, o, n) {
      return e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const t = r ?? this.getDataSync(o),
          l = [this._fetchAndPrepFromNetwork(t, o, n)];
        return (
          n?.timeoutMs &&
            l.push(
              new Promise((h) => setTimeout(h, n.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(l)
        );
      });
    }
    _prefetchDataImpl(r, o) {
      return e(this, void 0, void 0, function* () {
        const n = r && (0, E._normalizeUser)(r, this._options),
          t = this._getCacheKey(n),
          l = yield this._getDataAsyncImpl(null, n, o);
        l &&
          this._inMemoryCache.add(t, Object.assign(Object.assign({}, l), { source: "Prefetch" }));
      });
    }
    _fetchAndPrepFromNetwork(r, o, n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = (t = r?.data) !== null && t !== void 0 ? t : null,
          h = r != null && this._isCachedResultValidFor204(r, o),
          c = yield this._fetchFromNetwork(l, o, n, h);
        if (!c) return (m.Log.debug("No response returned for latest value"), null);
        const w = (0, _._typedJsonParse)(c, "has_updates", "Response"),
          f = this._getSdkKey(),
          d = u.StableID.get(f);
        let b = null;
        if (w?.has_updates === !0) b = y("Network", c, d, o);
        else if (l && w?.has_updates === !1) b = y("NetworkNotModified", l, d, o);
        else return null;
        const I = this._getCacheKey(o);
        return (this._inMemoryCache.add(I, b), this._writeToCache(I, b), b);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(r) {
      var o;
      const n = (o = v.Storage.getItem) === null || o === void 0 ? void 0 : o.call(v.Storage, r);
      if (n == null) return null;
      const t = (0, _._typedJsonParse)(n, "source", "Cached Result");
      return t ? Object.assign(Object.assign({}, t), { source: "Cache" }) : null;
    }
    _writeToCache(r, o) {
      (v.Storage.setItem(r, JSON.stringify(o)), this._runLocalStorageCacheEviction(r));
    }
    _runLocalStorageCacheEviction(r) {
      var o;
      const n =
        (o = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && o !== void 0
          ? o
          : {};
      n[r] = Date.now();
      const t = a(n, g);
      (t && (delete n[t], v.Storage.removeItem(t)),
        (0, v._setObjectInStorage)(this._lastModifiedStoreKey, n));
    }
  }
  ne.DataAdapterCore = S;
  function y(i, r, o, n) {
    return {
      source: i,
      data: r,
      receivedAt: Date.now(),
      stableID: o,
      fullUserHash: (0, E._getFullUserHash)(n),
    };
  }
  ne._makeDataAdapterResult = y;
  class s {
    constructor() {
      this._data = {};
    }
    get(r, o) {
      var n;
      const t = this._data[r],
        l = t?.stableID,
        h = (n = o?.customIDs) === null || n === void 0 ? void 0 : n.stableID;
      return h && l && h !== l
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(r, o) {
      const n = a(this._data, g - 1);
      (n && delete this._data[n], (this._data[r] = o));
    }
    merge(r) {
      this._data = Object.assign(Object.assign({}, this._data), r);
    }
  }
  function a(i, r) {
    const o = Object.keys(i);
    return o.length <= r
      ? null
      : o.reduce((n, t) => {
          const l = i[n],
            h = i[t];
          return typeof l == "object" && typeof h == "object"
            ? h.receivedAt < l.receivedAt
              ? t
              : n
            : h < l
              ? t
              : n;
        });
  }
  return ne;
}
var Pt = {},
  xn;
function Ri() {
  return (xn || ((xn = 1), Object.defineProperty(Pt, "__esModule", { value: !0 })), Pt);
}
var Je = {},
  We = {},
  Vn;
function vn() {
  if (Vn) return We;
  ((Vn = 1), Object.defineProperty(We, "__esModule", { value: !0 }), (We.SDKType = void 0));
  const e = {};
  let m;
  return (
    (We.SDKType = {
      _get: (u) => {
        var E;
        return ((E = e[u]) !== null && E !== void 0 ? E : "js-mono") + (m ?? "");
      },
      _setClientType(u, E) {
        e[u] = E;
      },
      _setBindingType(u) {
        (!m || m === "-react") && (m = "-" + u);
      },
    }),
    We
  );
}
var zn;
function hi() {
  return (
    zn ||
      ((zn = 1),
      (function (e) {
        var m =
          (Je && Je.__awaiter) ||
          function (i, r, o, n) {
            function t(l) {
              return l instanceof o
                ? l
                : new o(function (h) {
                    h(l);
                  });
            }
            return new (o || (o = Promise))(function (l, h) {
              function c(d) {
                try {
                  f(n.next(d));
                } catch (b) {
                  h(b);
                }
              }
              function w(d) {
                try {
                  f(n.throw(d));
                } catch (b) {
                  h(b);
                }
              }
              function f(d) {
                d.done ? l(d.value) : t(d.value).then(c, w);
              }
              f((n = n.apply(i, r || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const u = H(),
          E = vn(),
          v = yt();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        class g {
          constructor(r, o, n, t) {
            ((this._sdkKey = r),
              (this._options = o),
              (this._emitter = n),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(r) {
            try {
              const o = r;
              s(o).forEach((n) => {
                const t = o[n];
                "$EB" in t ||
                  ((o[n] = (...l) => this._capture(n, () => t.apply(r, l))), (o[n].$EB = !0));
              });
            } catch (o) {
              this._onError("eb:wrap", o);
            }
          }
          logError(r, o) {
            this._onError(r, o);
          }
          getLastSeenErrorAndReset() {
            const r = this._lastSeenError;
            return ((this._lastSeenError = void 0), r ?? null);
          }
          attachErrorIfNoneExists(r) {
            this._lastSeenError || (this._lastSeenError = S(r));
          }
          _capture(r, o) {
            try {
              const n = o();
              return n && n instanceof Promise ? n.catch((t) => this._onError(r, t)) : n;
            } catch (n) {
              return (this._onError(r, n), null);
            }
          }
          _onError(r, o) {
            try {
              (u.Log.warn(`Caught error in ${r}`, { error: o }),
                m(this, void 0, void 0, function* () {
                  var t, l, h, c, w, f, d;
                  const b = o || Error(_),
                    I = b instanceof Error,
                    C = I ? b.name : "No Name",
                    M = S(b);
                  if (((this._lastSeenError = M), this._seen.has(C))) return;
                  if (
                    (this._seen.add(C),
                    !(
                      (l =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || l === void 0
                    ) && l.preventAllNetworkTraffic)
                  ) {
                    (h = this._emitter) === null ||
                      h === void 0 ||
                      h.call(this, { name: "error", error: o, tag: r });
                    return;
                  }
                  const L = E.SDKType._get(this._sdkKey),
                    A = v.StatsigMetadataProvider.get(),
                    x = I ? b.stack : y(b),
                    N = Object.assign(
                      { tag: r, exception: C, info: x, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, A), { sdkType: L }),
                    );
                  (yield (
                    (f =
                      (w =
                        (c = this._options) === null || c === void 0 ? void 0 : c.networkConfig) ===
                        null || w === void 0
                        ? void 0
                        : w.networkOverrideFunc) !== null && f !== void 0
                      ? f
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(L),
                      "STATSIG-SDK-VERSION": String(A.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(N),
                  }),
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: o, tag: r }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        }
        e.ErrorBoundary = g;
        function S(i) {
          return i instanceof Error
            ? i
            : typeof i == "string"
              ? new Error(i)
              : new Error("An unknown error occurred.");
        }
        function y(i) {
          try {
            return JSON.stringify(i);
          } catch {
            return _;
          }
        }
        function s(i) {
          const r = new Set();
          let o = Object.getPrototypeOf(i);
          for (; o && o !== Object.prototype; )
            (Object.getOwnPropertyNames(o)
              .filter((n) => typeof o?.[n] == "function")
              .forEach((n) => r.add(n)),
              (o = Object.getPrototypeOf(o)));
          return Array.from(r);
        }
        function a(i) {
          if (!i) return {};
          const r = {};
          return (
            Object.entries(i).forEach(([o, n]) => {
              switch (typeof n) {
                case "number":
                case "bigint":
                case "boolean":
                  r[String(o)] = n;
                  break;
                case "string":
                  n.length < 50 ? (r[String(o)] = n) : (r[String(o)] = "set");
                  break;
                case "object":
                  o === "environment"
                    ? (r.environment = n)
                    : o === "networkConfig"
                      ? (r.networkConfig = n)
                      : (r[String(o)] = n != null ? "set" : "unset");
                  break;
              }
            }),
            r
          );
        }
      })(Je)),
    Je
  );
}
var Nt = {},
  Jn;
function Li() {
  return (Jn || ((Jn = 1), Object.defineProperty(Nt, "__esModule", { value: !0 })), Nt);
}
var jt = {},
  Wn;
function Fi() {
  return (Wn || ((Wn = 1), Object.defineProperty(jt, "__esModule", { value: !0 })), jt);
}
var qt = {},
  Qn;
function Ui() {
  return (Qn || ((Qn = 1), Object.defineProperty(qt, "__esModule", { value: !0 })), qt);
}
var Ee = {},
  Hn;
function fi() {
  if (Hn) return Ee;
  ((Hn = 1),
    Object.defineProperty(Ee, "__esModule", { value: !0 }),
    (Ee.createMemoKey = Ee.MemoPrefix = void 0),
    (Ee.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    m = new Set(["userPersistedValues"]);
  function u(E, v, _) {
    let g = `${E}|${v}`;
    if (!_) return g;
    for (const S of Object.keys(_)) {
      if (m.has(S)) return;
      e.has(S) ? (g += `|${S}=true`) : (g += `|${S}=${_[S]}`);
    }
    return g;
  }
  return ((Ee.createMemoKey = u), Ee);
}
var be = {},
  re = {},
  pe = {},
  Xn;
function Ai() {
  if (Xn) return pe;
  Xn = 1;
  var e =
    (pe && pe.__awaiter) ||
    function (S, y, s, a) {
      function i(r) {
        return r instanceof s
          ? r
          : new s(function (o) {
              o(r);
            });
      }
      return new (s || (s = Promise))(function (r, o) {
        function n(h) {
          try {
            l(a.next(h));
          } catch (c) {
            o(c);
          }
        }
        function t(h) {
          try {
            l(a.throw(h));
          } catch (c) {
            o(c);
          }
        }
        function l(h) {
          h.done ? r(h.value) : i(h.value).then(n, t);
        }
        l((a = a.apply(S, y || [])).next());
      });
    };
  (Object.defineProperty(pe, "__esModule", { value: !0 }), (pe._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    u = "https://cloudflare-dns.com/dns-query",
    E = ["i", "e", "d"],
    v = 200;
  function _(S) {
    return e(this, void 0, void 0, function* () {
      const y = yield S(u, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!y.ok) {
        const i = new Error("Failed to fetch TXT records from DNS");
        throw ((i.name = "DnsTxtFetchError"), i);
      }
      const s = yield y.arrayBuffer(),
        a = new Uint8Array(s);
      return g(a);
    });
  }
  pe._fetchTxtRecords = _;
  function g(S) {
    const y = S.findIndex(
      (a, i) =>
        i < v && String.fromCharCode(a) === "=" && E.includes(String.fromCharCode(S[i - 1])),
    );
    if (y === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let s = "";
    for (let a = y - 1; a < S.length; a++) s += String.fromCharCode(S[a]);
    return s.split(",");
  }
  return pe;
}
var Yn;
function Pi() {
  if (Yn) return re;
  Yn = 1;
  var e =
    (re && re.__awaiter) ||
    function (o, n, t, l) {
      function h(c) {
        return c instanceof t
          ? c
          : new t(function (w) {
              w(c);
            });
      }
      return new (t || (t = Promise))(function (c, w) {
        function f(I) {
          try {
            b(l.next(I));
          } catch (C) {
            w(C);
          }
        }
        function d(I) {
          try {
            b(l.throw(I));
          } catch (C) {
            w(C);
          }
        }
        function b(I) {
          I.done ? c(I.value) : h(I.value).then(f, d);
        }
        b((l = l.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._isDomainFailure = re.NetworkFallbackResolver = void 0));
  const m = Ai(),
    u = Be(),
    E = H(),
    v = de(),
    _ = 10080 * 60 * 1e3,
    g = 14400 * 1e3;
  class S {
    constructor(n) {
      var t;
      ((this._fallbackInfo = null),
        (this._errorBoundary = null),
        (this._dnsQueryCooldowns = {}),
        (this._networkOverrideFunc =
          (t = n.networkConfig) === null || t === void 0 ? void 0 : t.networkOverrideFunc));
    }
    setErrorBoundary(n) {
      this._errorBoundary = n;
    }
    tryBumpExpiryTime(n, t) {
      var l;
      const h = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      h &&
        ((h.expiryTime = Date.now() + _),
        a(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: h })));
    }
    getActiveFallbackUrl(n, t) {
      var l, h;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let c = this._fallbackInfo;
      c == null && ((c = (l = i(n)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = c));
      const w = c[t.endpoint];
      return !w ||
        Date.now() > ((h = w.expiryTime) !== null && h !== void 0 ? h : 0) ||
        t.getChecksum() !== w.urlConfigChecksum
        ? (delete c[t.endpoint], (this._fallbackInfo = c), a(n, this._fallbackInfo), null)
        : w.url
          ? w.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, l, h) {
      return e(this, void 0, void 0, function* () {
        var c, w;
        try {
          if (!y(l, h)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            b = this._pickNewFallbackUrl(
              (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[t.endpoint],
              d,
            );
          return b ? (this._updateFallbackInfoWithNewUrl(n, t, b), !0) : !1;
        } catch (f) {
          return (
            (w = this._errorBoundary) === null ||
              w === void 0 ||
              w.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, l) {
      var h, c, w;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + _,
          previous: [],
        },
        d = t.endpoint,
        b = (h = this._fallbackInfo) === null || h === void 0 ? void 0 : h[d];
      (b && f.previous.push(...b.previous), f.previous.length > 10 && (f.previous = []));
      const I =
        (w = (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[d]) === null ||
        w === void 0
          ? void 0
          : w.url;
      (I != null && f.previous.push(I),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: f })),
        a(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[n.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + g;
        const h = [],
          c = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          w = r(n.defaultUrl);
        for (const f of c) {
          if (!f.startsWith(n.endpointDnsKey + "=")) continue;
          const d = f.split("=");
          if (d.length > 1) {
            let b = d[1];
            (b.endsWith("/") && (b = b.slice(0, -1)), h.push(`https://${b}${w}`));
          }
        }
        return h;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var l;
      if (t == null) return null;
      const h = new Set((l = n?.previous) !== null && l !== void 0 ? l : []),
        c = n?.url;
      let w = null;
      for (const f of t) {
        const d = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!h.has(f) && d !== c) {
          w = d;
          break;
        }
      }
      return w;
    }
  }
  re.NetworkFallbackResolver = S;
  function y(o, n) {
    var t;
    const l = (t = o?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  re._isDomainFailure = y;
  function s(o) {
    return `statsig.network_fallback.${(0, u._DJB2)(o)}`;
  }
  function a(o, n) {
    const t = s(o);
    if (!n || Object.keys(n).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(n));
  }
  function i(o) {
    const n = s(o),
      t = v.Storage.getItem(n);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (E.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function r(o) {
    try {
      return new URL(o).pathname;
    } catch {
      return null;
    }
  }
  return re;
}
var Qe = {},
  Zn;
function vi() {
  if (Zn) return Qe;
  ((Zn = 1), Object.defineProperty(Qe, "__esModule", { value: !0 }), (Qe.SDKFlags = void 0));
  const e = {};
  return (
    (Qe.SDKFlags = {
      setFlags: (m, u) => {
        e[m] = u;
      },
      get: (m, u) => {
        var E, v;
        return (v = (E = e[m]) === null || E === void 0 ? void 0 : E[u]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    Qe
  );
}
var Kt = {},
  $n;
function mn() {
  return (
    $n ||
      (($n = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = ce(),
          u = Et(),
          E = H(),
          v = de(),
          _ = fn(),
          g = 1800 * 1e3,
          S = 14400 * 1e3,
          y = {};
        ((e.SessionID = { get: (c) => e.StatsigSession.get(c).data.sessionID }),
          (e.StatsigSession = {
            get: (c) => {
              y[c] == null && (y[c] = s(c));
              const w = y[c];
              return i(w);
            },
            overrideInitialSessionID: (c, w) => {
              y[w] = a(c, w);
            },
          }));
        function s(c) {
          let w = h(c);
          const f = Date.now();
          return (
            w || (w = { sessionID: (0, _.getUUID)(), startTime: f, lastUpdate: f }),
            { data: w, sdkKey: c }
          );
        }
        function a(c, w) {
          const f = Date.now();
          return { data: { sessionID: c, startTime: f, lastUpdate: f }, sdkKey: w };
        }
        function i(c) {
          const w = Date.now(),
            f = c.data,
            d = c.sdkKey;
          if (o(f) || n(f)) {
            ((f.sessionID = (0, _.getUUID)()), (f.startTime = w));
            const I = __STATSIG__ == null ? void 0 : __STATSIG__.instance(d);
            I && I.$emt({ name: "session_expired" });
          }
          ((f.lastUpdate = w),
            l(f, c.sdkKey),
            clearTimeout(c.idleTimeoutID),
            clearTimeout(c.ageTimeoutID));
          const b = w - f.startTime;
          return ((c.idleTimeoutID = r(d, g)), (c.ageTimeoutID = r(d, S - b)), c);
        }
        function r(c, w) {
          return setTimeout(() => {
            var f;
            const d =
              (f = (0, m._getStatsigGlobal)()) === null || f === void 0 ? void 0 : f.instance(c);
            d && d.$emt({ name: "session_expired" });
          }, w);
        }
        function o({ lastUpdate: c }) {
          return Date.now() - c > g;
        }
        function n({ startTime: c }) {
          return Date.now() - c > S;
        }
        function t(c) {
          return `statsig.session_id.${(0, u._getStorageKey)(c)}`;
        }
        function l(c, w) {
          const f = t(w);
          try {
            (0, v._setObjectInStorage)(f, c);
          } catch {
            E.Log.warn("Failed to save SessionID");
          }
        }
        function h(c) {
          const w = t(c);
          return (0, v._getObjectFromStorage)(w);
        }
      })(Kt)),
    Kt
  );
}
var He = {},
  er;
function mi() {
  return (
    er ||
      ((er = 1),
      Object.defineProperty(He, "__esModule", { value: !0 }),
      (He.ErrorTag = void 0),
      (He.ErrorTag = { NetworkError: "NetworkError" })),
    He
  );
}
var tr;
function Ni() {
  if (tr) return be;
  tr = 1;
  var e =
    (be && be.__awaiter) ||
    function (k, p, D, O) {
      function T(R) {
        return R instanceof D
          ? R
          : new D(function (F) {
              F(R);
            });
      }
      return new (D || (D = Promise))(function (R, F) {
        function $(U) {
          try {
            j(O.next(U));
          } catch (P) {
            F(P);
          }
        }
        function K(U) {
          try {
            j(O.throw(U));
          } catch (P) {
            F(P);
          }
        }
        function j(U) {
          U.done ? R(U.value) : T(U.value).then($, K);
        }
        j((O = O.apply(k, p || [])).next());
      });
    };
  (Object.defineProperty(be, "__esModule", { value: !0 }), (be.NetworkCore = void 0), ce());
  const m = ce(),
    u = dn(),
    E = H(),
    v = bt(),
    _ = Pi(),
    g = vi(),
    S = vn(),
    y = je(),
    s = mn(),
    a = wt(),
    i = mi(),
    r = yt(),
    o = pt(),
    n = hn(),
    t = 1e4,
    l = 500,
    h = 3e4,
    c = 1e3,
    w = 50,
    f = w / c,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class b {
    constructor(p, D) {
      ((this._emitter = D),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        p && (this._options = p),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new _.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(p)));
    }
    setLogEventCompressionMode(p) {
      this._options.logEventCompressionMode = p;
    }
    setErrorBoundary(p) {
      ((this._errorBoundary = p),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(p));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const p = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), p);
    }
    beacon(p) {
      if (!I(p)) return !1;
      const D = this._getInternalRequestArgs("POST", p),
        O = this._getPopulatedURL(D),
        T = navigator;
      return T.sendBeacon.bind(T)(O, D.body);
    }
    post(p) {
      return e(this, void 0, void 0, function* () {
        const D = this._getInternalRequestArgs("POST", p);
        return (this._tryEncodeBody(D), yield this._tryToCompressBody(D), this._sendRequest(D));
      });
    }
    get(p) {
      const D = this._getInternalRequestArgs("GET", p);
      return this._sendRequest(D);
    }
    _sendRequest(p) {
      return e(this, void 0, void 0, function* () {
        var D, O, T, R;
        if (!I(p) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: F, body: $, retries: K, attempt: j } = p,
          U = p.urlConfig.endpoint;
        if (this._isRateLimited(U))
          return (
            E.Log.warn(
              `Request to ${U} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const P = j ?? 1,
          V = typeof AbortController < "u" ? new AbortController() : null,
          J = setTimeout(() => {
            V?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          G = this._getPopulatedURL(p);
        let Z = null;
        const ue = (0, n._isUnloading)();
        try {
          const z = {
            method: F,
            body: $,
            headers: Object.assign({}, p.headers),
            signal: V?.signal,
            priority: p.priority,
            keepalive: ue,
          };
          x(p, P);
          const ee = this._leakyBucket[U];
          if (
            (ee && ((ee.lastRequestTime = Date.now()), (this._leakyBucket[U] = ee)),
            (Z = yield (
              (D = this._netConfig.networkOverrideFunc) !== null && D !== void 0 ? D : fetch
            )(G, z)),
            clearTimeout(J),
            !Z.ok)
          ) {
            const _e = yield Z.text().catch(() => "No Text"),
              ge = new Error(`NetworkError: ${G} ${_e}`);
            throw ((ge.name = "NetworkError"), ge);
          }
          const te = yield Z.text();
          return (
            N(p, Z, P, te),
            this._fallbackResolver.tryBumpExpiryTime(p.sdkKey, p.urlConfig),
            { body: te, code: Z.status }
          );
        } catch (z) {
          const ee = L(V, z),
            Ke = A(V);
          if (
            (N(p, Z, P, "", z),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              p.sdkKey,
              p.urlConfig,
              ee,
              Ke,
            )) &&
              (p.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(p.sdkKey, p.urlConfig)),
            !K || P > K || !d.has((O = Z?.status) !== null && O !== void 0 ? O : 500))
          ) {
            (T = this._emitter) === null ||
              T === void 0 ||
              T.call(this, {
                name: "error",
                error: z,
                tag: i.ErrorTag.NetworkError,
                requestArgs: p,
              });
            const _e = `A networking error occurred during ${F} request to ${G}.`;
            return (
              E.Log.error(_e, ee, z),
              (R = this._errorBoundary) === null || R === void 0 || R.attachErrorIfNoneExists(_e),
              null
            );
          }
          return (
            yield B(P),
            this._sendRequest(Object.assign(Object.assign({}, p), { retries: K, attempt: P + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(p) {
      let D = p?.logEventCompressionMode;
      return (
        !D && p?.disableCompression === !0 && (D = o.LogEventCompressionMode.Disabled),
        D || (D = o.LogEventCompressionMode.Enabled),
        D
      );
    }
    _isRateLimited(p) {
      var D;
      const O = Date.now(),
        T =
          (D = this._leakyBucket[p]) !== null && D !== void 0
            ? D
            : { count: 0, lastRequestTime: O },
        R = O - T.lastRequestTime,
        F = Math.floor(R * f);
      return (
        (T.count = Math.max(0, T.count - F)),
        T.count >= w
          ? !0
          : ((T.count += 1), (T.lastRequestTime = O), (this._leakyBucket[p] = T), !1)
      );
    }
    _getPopulatedURL(p) {
      var D;
      const O = (D = p.fallbackUrl) !== null && D !== void 0 ? D : p.urlConfig.getUrl();
      (p.urlConfig.endpoint === v.Endpoint._initialize ||
        p.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = O);
      const T = Object.assign(
          {
            [v.NetworkParam.SdkKey]: p.sdkKey,
            [v.NetworkParam.SdkType]: S.SDKType._get(p.sdkKey),
            [v.NetworkParam.SdkVersion]: r.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: s.SessionID.get(p.sdkKey),
          },
          p.params,
        ),
        R = Object.keys(T)
          .map((F) => `${encodeURIComponent(F)}=${encodeURIComponent(T[F])}`)
          .join("&");
      return `${O}${R ? `?${R}` : ""}`;
    }
    _tryEncodeBody(p) {
      var D;
      const O = (0, y._getWindowSafe)(),
        T = p.body;
      if (
        !(
          !p.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof T != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !O?.btoa
        )
      )
        try {
          ((p.body = O.btoa(T).split("").reverse().join("")),
            (p.params = Object.assign(
              Object.assign({}, (D = p.params) !== null && D !== void 0 ? D : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (R) {
          E.Log.warn(`Request encoding failed for ${p.urlConfig.getUrl()}`, R);
        }
    }
    _tryToCompressBody(p) {
      return e(this, void 0, void 0, function* () {
        var D;
        const O = p.body;
        if (!(typeof O != "string" || !M(p, this._options)))
          try {
            const T = new TextEncoder().encode(O),
              R = new CompressionStream("gzip"),
              F = R.writable.getWriter();
            (F.write(T).catch(E.Log.error), F.close().catch(E.Log.error));
            const $ = R.readable.getReader(),
              K = [];
            let j;
            for (; !(j = yield $.read()).done; ) K.push(j.value);
            const U = K.reduce((J, G) => J + G.length, 0),
              P = new Uint8Array(U);
            let V = 0;
            for (const J of K) (P.set(J, V), (V += J.length));
            ((p.body = P),
              (p.params = Object.assign(
                Object.assign({}, (D = p.params) !== null && D !== void 0 ? D : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (T) {
            E.Log.warn(`Request compression failed for ${p.urlConfig.getUrl()}`, T);
          }
      });
    }
    _getInternalRequestArgs(p, D) {
      const O = this._fallbackResolver.getActiveFallbackUrl(D.sdkKey, D.urlConfig),
        T = Object.assign(Object.assign({}, D), { method: p, fallbackUrl: O });
      return ("data" in D && C(T, D.data), T);
    }
  }
  be.NetworkCore = b;
  const I = (k) => (k.sdkKey ? !0 : (E.Log.warn("Unable to make request without an SDK key"), !1)),
    C = (k, p) => {
      const { sdkKey: D, fallbackUrl: O } = k,
        T = a.StableID.get(D),
        R = s.SessionID.get(D),
        F = S.SDKType._get(D);
      k.body = JSON.stringify(
        Object.assign(Object.assign({}, p), {
          statsigMetadata: Object.assign(Object.assign({}, r.StatsigMetadataProvider.get()), {
            stableID: T,
            sessionID: R,
            sdkType: F,
            fallbackUrl: O,
          }),
        }),
      );
    };
  function M(k, p) {
    if (
      !k.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const D = k.urlConfig.customUrl != null || k.urlConfig.fallbackUrls != null,
      O = g.SDKFlags.get(k.sdkKey, "enable_log_event_compression") === !0;
    switch (p.logEventCompressionMode) {
      case o.LogEventCompressionMode.Disabled:
        return !1;
      case o.LogEventCompressionMode.Enabled:
        return !(D && !O);
      case o.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function L(k, p) {
    return k?.signal.aborted && typeof k.signal.reason == "string"
      ? k.signal.reason
      : typeof p == "string"
        ? p
        : p instanceof Error
          ? `${p.name}: ${p.message}`
          : "Unknown Error";
  }
  function A(k) {
    return (
      (k?.signal.aborted &&
        typeof k.signal.reason == "string" &&
        k.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function x(k, p) {
    k.urlConfig.endpoint === v.Endpoint._initialize &&
      u.Diagnostics._markInitNetworkReqStart(k.sdkKey, { attempt: p });
  }
  function N(k, p, D, O, T) {
    k.urlConfig.endpoint === v.Endpoint._initialize &&
      u.Diagnostics._markInitNetworkReqEnd(k.sdkKey, u.Diagnostics._getDiagnosticsData(p, D, O, T));
  }
  function B(k) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((p) => setTimeout(p, Math.min(l * (k * k), h)));
    });
  }
  return be;
}
var Bt = {},
  nr;
function ji() {
  return (nr || ((nr = 1), Object.defineProperty(Bt, "__esModule", { value: !0 })), Bt);
}
var Gt = {},
  rr;
function qi() {
  return (rr || ((rr = 1), Object.defineProperty(Gt, "__esModule", { value: !0 })), Gt);
}
var we = {},
  ir;
function Ki() {
  if (ir) return we;
  ir = 1;
  var e =
    (we && we.__awaiter) ||
    function (n, t, l, h) {
      function c(w) {
        return w instanceof l
          ? w
          : new l(function (f) {
              f(w);
            });
      }
      return new (l || (l = Promise))(function (w, f) {
        function d(C) {
          try {
            I(h.next(C));
          } catch (M) {
            f(M);
          }
        }
        function b(C) {
          try {
            I(h.throw(C));
          } catch (M) {
            f(M);
          }
        }
        function I(C) {
          C.done ? w(C.value) : c(C.value).then(d, b);
        }
        I((h = h.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(we, "__esModule", { value: !0 }), (we.StatsigClientBase = void 0), ce());
  const m = ce(),
    u = hi(),
    E = di(),
    v = H(),
    _ = fi(),
    g = je(),
    S = mn(),
    y = wt(),
    s = pt(),
    a = de(),
    i = 3e3;
  class r {
    constructor(t, l, h, c) {
      var w, f, d, b;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const I = this.$emt.bind(this);
      (c?.logLevel != null && (v.Log.level = c.logLevel),
        c?.disableStorage && a.Storage._setDisabled(!0),
        c?.initialSessionID && S.StatsigSession.overrideInitialSessionID(c.initialSessionID, t),
        c?.storageProvider && a.Storage._setProvider(c.storageProvider),
        c?.enableCookies && y.StableID._setCookiesEnabled(t, c.enableCookies),
        c?.disableStableID && y.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = c ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (w = c?.overrideAdapter) !== null && w !== void 0 ? w : null),
        (this._logger = new E.EventLogger(t, I, h, c)),
        (this._errorBoundary = new u.ErrorBoundary(t, c, I)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        h.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, c, h),
        (this.storageProvider = a.Storage),
        (b =
          (d = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(f)) === null ||
          b === void 0 ||
          b.catch((C) => this._errorBoundary.logError("OA::loadFromStorage", C)),
        this._primeReadyRipcord(),
        o(t, this));
    }
    updateRuntimeOptions(t) {
      (t.loggingEnabled
        ? ((this._options.loggingEnabled = t.loggingEnabled),
          this._logger.setLoggingEnabled(t.loggingEnabled))
        : t.disableLogging != null &&
          ((this._options.disableLogging = t.disableLogging),
          this._logger.setLoggingEnabled(t.disableLogging ? "disabled" : "browser-only")),
        t.disableStorage != null &&
          ((this._options.disableStorage = t.disableStorage),
          a.Storage._setDisabled(t.disableStorage)),
        t.enableCookies != null &&
          ((this._options.enableCookies = t.enableCookies),
          y.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
        t.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode)
          : t.disableCompression &&
            this._logger.setLogEventCompressionMode(s.LogEventCompressionMode.Disabled));
    }
    flush() {
      return this._logger.flush();
    }
    shutdown() {
      return e(this, void 0, void 0, function* () {
        (this.$emt({ name: "pre_shutdown" }),
          this._setStatus("Uninitialized", null),
          (this._initializePromise = null),
          yield this._logger.stop());
      });
    }
    on(t, l) {
      (this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(l));
    }
    off(t, l) {
      if (this._listeners[t]) {
        const h = this._listeners[t].indexOf(l);
        h !== -1 && this._listeners[t].splice(h, 1);
      }
    }
    $on(t, l) {
      ((l.__isInternal = !0), this.on(t, l));
    }
    $emt(t) {
      var l;
      const h = (c) => {
        try {
          c(t);
        } catch (w) {
          if (c.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, w);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((c) => h(c)),
        (l = this._listeners["*"]) === null || l === void 0 || l.forEach(h));
    }
    _setStatus(t, l) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: l }));
    }
    _enqueueExposure(t, l, h) {
      if (h?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(l);
    }
    _memoize(t, l) {
      return (h, c) => {
        if (this._options.disableEvaluationMemoization) return l(h, c);
        const w = (0, _.createMemoKey)(t, h, c);
        return w
          ? (w in this._memoCache ||
              (Object.keys(this._memoCache).length >= i && (this._memoCache = {}),
              (this._memoCache[w] = l(h, c))),
            this._memoCache[w])
          : l(h, c);
      };
    }
  }
  we.StatsigClientBase = r;
  function o(n, t) {
    var l;
    if ((0, g._isServerEnv)()) return;
    const h = (0, m._getStatsigGlobal)(),
      c = (l = h.instances) !== null && l !== void 0 ? l : {},
      w = t;
    (c[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (c[n] = w),
      h.firstInstance || (h.firstInstance = w),
      (h.instances = c),
      (__STATSIG__ = h));
  }
  return we;
}
var Xe = {},
  or;
function Bi() {
  return (
    or ||
      ((or = 1),
      Object.defineProperty(Xe, "__esModule", { value: !0 }),
      (Xe.DataAdapterCachePrefix = void 0),
      (Xe.DataAdapterCachePrefix = "statsig.cached")),
    Xe
  );
}
var xt = {},
  sr;
function Gi() {
  return (sr || ((sr = 1), Object.defineProperty(xt, "__esModule", { value: !0 })), xt);
}
var W = {},
  ar;
function xi() {
  if (ar) return W;
  ((ar = 1),
    Object.defineProperty(W, "__esModule", { value: !0 }),
    (W._makeTypedGet =
      W._mergeOverride =
      W._makeLayer =
      W._makeExperiment =
      W._makeDynamicConfig =
      W._makeFeatureGate =
        void 0));
  const e = H(),
    m = gn();
  function u(s, a, i, r) {
    var o;
    return {
      name: s,
      details: a,
      ruleID: (o = i?.rule_id) !== null && o !== void 0 ? o : "",
      __evaluation: i,
      value: r,
    };
  }
  function E(s, a, i) {
    var r;
    return Object.assign(Object.assign({}, u(s, a, i, i?.value === !0)), {
      idType: (r = i?.id_type) !== null && r !== void 0 ? r : null,
    });
  }
  W._makeFeatureGate = E;
  function v(s, a, i) {
    var r;
    const o = (r = i?.value) !== null && r !== void 0 ? r : {};
    return Object.assign(Object.assign({}, u(s, a, i, o)), { get: y(s, i?.value) });
  }
  W._makeDynamicConfig = v;
  function _(s, a, i) {
    var r;
    const o = v(s, a, i);
    return Object.assign(Object.assign({}, o), {
      groupName: (r = i?.group_name) !== null && r !== void 0 ? r : null,
    });
  }
  W._makeExperiment = _;
  function g(s, a, i, r) {
    var o, n;
    return Object.assign(Object.assign({}, u(s, a, i, void 0)), {
      get: y(s, i?.value, r),
      groupName: (o = i?.group_name) !== null && o !== void 0 ? o : null,
      __value: (n = i?.value) !== null && n !== void 0 ? n : {},
    });
  }
  W._makeLayer = g;
  function S(s, a, i, r) {
    return Object.assign(Object.assign(Object.assign({}, s), a), { get: y(s.name, i, r) });
  }
  W._mergeOverride = S;
  function y(s, a, i) {
    return (r, o) => {
      var n;
      const t = (n = a?.[r]) !== null && n !== void 0 ? n : null;
      return t == null
        ? (o ?? null)
        : o != null && !(0, m._isTypeMatch)(t, o)
          ? (e.Log.warn(
              `Parameter type mismatch. '${s}.${r}' was found to be type '${typeof t}' but fallback/return type is '${typeof o}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            o ?? null)
          : (i?.(r), t);
    };
  }
  return ((W._makeTypedGet = y), W);
}
var Vt = {},
  lr;
function Vi() {
  return (lr || ((lr = 1), Object.defineProperty(Vt, "__esModule", { value: !0 })), Vt);
}
var Ie = {},
  ur;
function zi() {
  if (ur) return Ie;
  ((ur = 1),
    Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie.UPDATE_DETAIL_ERROR_MESSAGES = Ie.createUpdateDetails = void 0));
  const e = (m, u, E, v, _, g) => ({
    duration: E,
    source: u,
    success: m,
    error: v,
    sourceUrl: _,
    warnings: g,
  });
  return (
    (Ie.createUpdateDetails = e),
    (Ie.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    Ie
  );
}
var cr;
function So() {
  return (
    cr ||
      ((cr = 1),
      (function (e) {
        var m =
            (he && he.__createBinding) ||
            (Object.create
              ? function (s, a, i, r) {
                  r === void 0 && (r = i);
                  var o = Object.getOwnPropertyDescriptor(a, i);
                  ((!o || ("get" in o ? !a.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return a[i];
                      },
                    }),
                    Object.defineProperty(s, r, o));
                }
              : function (s, a, i, r) {
                  (r === void 0 && (r = i), (s[r] = a[i]));
                }),
          u =
            (he && he.__exportStar) ||
            function (s, a) {
              for (var i in s)
                i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && m(a, s, i);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          ce());
        const E = ce(),
          v = dn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = di();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const g = H();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return g.Log;
          },
        });
        const S = yt(),
          y = de();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return y.Storage;
          },
        }),
          u(ce(), e),
          u(Et(), e),
          u(Ti(), e),
          u(Mi(), e),
          u(dn(), e),
          u(Ri(), e),
          u(hi(), e),
          u(Li(), e),
          u(Fi(), e),
          u(Be(), e),
          u(Ui(), e),
          u(H(), e),
          u(fi(), e),
          u(bt(), e),
          u(Ni(), e),
          u(ji(), e),
          u(qi(), e),
          u(je(), e),
          u(vn(), e),
          u(mn(), e),
          u(wt(), e),
          u(Ki(), e),
          u(mi(), e),
          u(Bi(), e),
          u(ui(), e),
          u(yt(), e),
          u(pt(), e),
          u(Gi(), e),
          u(xi(), e),
          u(Vi(), e),
          u(_i(), e),
          u(de(), e),
          u(gi(), e),
          u(gn(), e),
          u(ci(), e),
          u(fn(), e),
          u(hn(), e),
          u(zi(), e),
          u(vi(), e),
          Object.assign((0, E._getStatsigGlobal)(), { Log: g.Log, SDK_VERSION: S.SDK_VERSION }));
      })(he)),
    he
  );
}
var De = {},
  zt = {},
  Jt = {},
  dr;
function q() {
  return (
    dr ||
      ((dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          u = "  INFO ",
          E = "  WARN ",
          v = " ERROR ";
        function _(S) {
          return (S.unshift("[Statsig]"), S);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class g {
          static info(...y) {
            g.level >= e.LogLevel.Info && console.info(u, ..._(y));
          }
          static debug(...y) {
            g.level >= e.LogLevel.Debug && console.debug(m, ..._(y));
          }
          static warn(...y) {
            g.level >= e.LogLevel.Warn && console.warn(E, ..._(y));
          }
          static error(...y) {
            g.level >= e.LogLevel.Error && console.error(v, ..._(y));
          }
        }
        ((e.Log = g), (g.level = e.LogLevel.Warn));
      })(Jt)),
    Jt
  );
}
var _r;
function Ne() {
  return (
    _r ||
      ((_r = 1),
      (function (e) {
        var m, u, E;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = q(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : r;
            } catch {
              return r;
            }
          };
        e._getStatsigGlobal = _;
        const g = (o) => (0, e._getStatsigGlobal)()[o];
        e._getStatsigGlobalFlag = g;
        const S = (o) => {
          const n = (0, e._getStatsigGlobal)();
          return o
            ? n.instances && n.instances[o]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                v.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              n.firstInstance);
        };
        e._getInstance = S;
        const y = "__STATSIG__",
          s = typeof window < "u" ? window : {},
          a = typeof mt < "u" ? mt : {},
          i = typeof globalThis < "u" ? globalThis : {},
          r =
            (E =
              (u = (m = s[y]) !== null && m !== void 0 ? m : a[y]) !== null && u !== void 0
                ? u
                : i[y]) !== null && E !== void 0
              ? E
              : { instance: e._getInstance };
        ((s[y] = r), (a[y] = r), (i[y] = r));
      })(zt)),
    zt
  );
}
var Wt = {},
  gr;
function _n() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          u = "start",
          E = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (s) => m.get(s),
          _markInitOverallStart: (s) => {
            S(s, _({}, u, "overall"));
          },
          _markInitOverallEnd: (s, a, i) => {
            S(
              s,
              _(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: i,
                },
                E,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (s, a) => {
            S(s, _(a, u, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (s, a) => {
            S(s, _(a, E, "initialize", "network_request"));
          },
          _markInitProcessStart: (s) => {
            S(s, _({}, u, "initialize", "process"));
          },
          _markInitProcessEnd: (s, a) => {
            S(s, _(a, E, "initialize", "process"));
          },
          _clearMarkers: (s) => {
            m.delete(s);
          },
          _formatError(s) {
            if (s && typeof s == "object")
              return { code: y(s, "code"), name: y(s, "name"), message: y(s, "message") };
          },
          _getDiagnosticsData(s, a, i, r) {
            var o;
            return {
              success: s?.ok === !0,
              statusCode: s?.status,
              sdkRegion:
                (o = s?.headers) === null || o === void 0 ? void 0 : o.get("x-statsig-region"),
              isDelta: i.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: e.Diagnostics._formatError(r),
            };
          },
          _enqueueDiagnosticsEvent(s, a, i, r) {
            const o = e.Diagnostics._getMarkers(i);
            if (o == null || o.length <= 0) return -1;
            const n = o[o.length - 1].timestamp - o[0].timestamp;
            e.Diagnostics._clearMarkers(i);
            const t = g(s, { context: "initialize", markers: o.slice(), statsigOptions: r });
            return (a.enqueue(t), n);
          },
        };
        function _(s, a, i, r) {
          return Object.assign({ key: i, action: a, step: r, timestamp: Date.now() }, s);
        }
        function g(s, a) {
          return { eventName: v, user: s, value: null, metadata: a, time: Date.now() };
        }
        function S(s, a) {
          var i;
          const r = (i = m.get(s)) !== null && i !== void 0 ? i : [];
          (r.push(a), m.set(s, r));
        }
        function y(s, a) {
          if (a in s) return s[a];
        }
      })(Wt)),
    Wt
  );
}
var Ce = {},
  Ye = {},
  Ze = {},
  hr;
function Ji() {
  if (hr) return Ze;
  ((hr = 1), Object.defineProperty(Ze, "__esModule", { value: !0 }), (Ze.EventBatch = void 0));
  let e = class {
    constructor(u) {
      ((this.attempts = 0), (this.createdAt = Date.now()), (this.events = u));
    }
    incrementAttempts() {
      this.attempts++;
    }
  };
  return ((Ze.EventBatch = e), Ze);
}
var $e = {},
  fr;
function yn() {
  return (
    fr ||
      ((fr = 1),
      Object.defineProperty($e, "__esModule", { value: !0 }),
      ($e.EventRetryConstants = void 0),
      ($e.EventRetryConstants = {
        MAX_RETRY_ATTEMPTS: 5,
        DEFAULT_BATCH_SIZE: 100,
        MAX_PENDING_BATCHES: 30,
        TICK_INTERVAL_MS: 1e3,
        QUICK_FLUSH_WINDOW_MS: 200,
        MAX_LOCAL_STORAGE: 500,
        get MAX_QUEUED_EVENTS() {
          return this.DEFAULT_BATCH_SIZE * this.MAX_PENDING_BATCHES;
        },
      })),
    $e
  );
}
var vr;
function Wi() {
  if (vr) return Ye;
  ((vr = 1), Object.defineProperty(Ye, "__esModule", { value: !0 }), (Ye.BatchQueue = void 0));
  const e = Ji(),
    m = yn();
  class u {
    constructor(v = m.EventRetryConstants.DEFAULT_BATCH_SIZE) {
      ((this._batches = []), (this._batchSize = v));
    }
    batchSize() {
      return this._batchSize;
    }
    requeueBatch(v) {
      return this._enqueueBatch(v);
    }
    hasFullBatch() {
      return this._batches.some((v) => v.events.length >= this._batchSize);
    }
    takeNextBatch() {
      return this._batches.shift();
    }
    takeAllBatches() {
      const v = this._batches;
      return ((this._batches = []), v);
    }
    createBatches(v) {
      let _ = 0,
        g = 0;
      for (; _ < v.length; ) {
        const S = v.slice(_, _ + this._batchSize);
        ((g += this._enqueueBatch(new e.EventBatch(S))), (_ += this._batchSize));
      }
      return g;
    }
    _enqueueBatch(v) {
      this._batches.push(v);
      let _ = 0;
      for (; this._batches.length > m.EventRetryConstants.MAX_PENDING_BATCHES; ) {
        const g = this._batches.shift();
        g && (_ += g.events.length);
      }
      return _;
    }
  }
  return ((Ye.BatchQueue = u), Ye);
}
var ke = {},
  Qt = {},
  Oe = {},
  mr;
function Sn() {
  if (mr) return Oe;
  ((mr = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe._isTypeMatch = Oe._typeOf = void 0));
  function e(u) {
    return Array.isArray(u) ? "array" : typeof u;
  }
  Oe._typeOf = e;
  function m(u, E) {
    const v = (_) => (Array.isArray(_) ? "array" : _ === null ? "null" : typeof _);
    return v(u) === v(E);
  }
  return ((Oe._isTypeMatch = m), Oe);
}
var yr;
function qe() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = Sn(),
          u = (_) => {
            let g = 0;
            for (let S = 0; S < _.length; S++) {
              const y = _.charCodeAt(S);
              ((g = (g << 5) - g + y), (g = g & g));
            }
            return String(g >>> 0);
          };
        e._DJB2 = u;
        const E = (_, g) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, g)));
        e._DJB2Object = E;
        const v = (_, g) => {
          if (_ == null) return null;
          const S = Object.keys(_).sort(),
            y = {};
          return (
            S.forEach((s) => {
              const a = _[s];
              if (g === 0 || (0, m._typeOf)(a) !== "object") {
                y[s] = a;
                return;
              }
              y[s] = (0, e._getSortedObject)(a, g != null ? g - 1 : g);
            }),
            y
          );
        };
        e._getSortedObject = v;
      })(Qt)),
    Qt
  );
}
var Sr;
function It() {
  if (Sr) return ke;
  ((Sr = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke._getStorageKey = ke._getUserStorageKey = void 0));
  const e = qe();
  function m(E, v, _) {
    var g;
    if (_) return _(E, v);
    const S = v && v.customIDs ? v.customIDs : {},
      y = [
        `uid:${(g = v?.userID) !== null && g !== void 0 ? g : ""}`,
        `cids:${Object.keys(S)
          .sort((s, a) => s.localeCompare(a))
          .map((s) => `${s}-${S[s]}`)
          .join(",")}`,
        `k:${E}`,
      ];
    return (0, e._DJB2)(y.join("|"));
  }
  ke._getUserStorageKey = m;
  function u(E, v, _) {
    return v ? m(E, v, _) : (0, e._DJB2)(`k:${E}`);
  }
  return ((ke._getStorageKey = u), ke);
}
var Te = {},
  Me = {},
  Ht = {},
  Er;
function gt() {
  return (
    Er ||
      ((Er = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NetworkParam = e.NetworkDefault = e.Endpoint = void 0),
          (e.Endpoint = {
            _initialize: "initialize",
            _rgstr: "rgstr",
            _download_config_specs: "download_config_specs",
          }),
          (e.NetworkDefault = {
            [e.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
            [e.Endpoint._initialize]: "https://featureassets.org/v1",
            [e.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1",
          }),
          (e.NetworkParam = {
            EventCount: "ec",
            SdkKey: "k",
            SdkType: "st",
            SdkVersion: "sv",
            Time: "t",
            SessionID: "sid",
            StatsigEncoded: "se",
            IsGzipped: "gz",
          }));
      })(Ht)),
    Ht
  );
}
var Xt = {},
  Yt = {},
  br;
function le() {
  return (
    br ||
      ((br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._cloneObject =
            e._getUnloadEvent =
            e._getCurrentPageUrlSafe =
            e._addDocumentEventListenerSafe =
            e._addWindowEventListenerSafe =
            e._isServerEnv =
            e._getDocumentSafe =
            e._getWindowSafe =
              void 0));
        const m = q(),
          u = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = u;
        const E = () => {
          var a;
          const i = (0, e._getWindowSafe)();
          return (a = i?.document) !== null && a !== void 0 ? a : null;
        };
        e._getDocumentSafe = E;
        const v = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const a =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || a;
        };
        e._isServerEnv = v;
        const _ = (a, i) => {
          const r = (0, e._getWindowSafe)();
          typeof r?.addEventListener == "function" && r.addEventListener(a, i);
        };
        e._addWindowEventListenerSafe = _;
        const g = (a, i) => {
          const r = (0, e._getDocumentSafe)();
          typeof r?.addEventListener == "function" && r.addEventListener(a, i);
        };
        e._addDocumentEventListenerSafe = g;
        const S = () => {
          var a;
          try {
            return (a = (0, e._getWindowSafe)()) === null || a === void 0
              ? void 0
              : a.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = S;
        const y = () => {
          const a = (0, e._getWindowSafe)();
          return a && "onpagehide" in a ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = y;
        const s = (a, i) => {
          try {
            return JSON.parse(JSON.stringify(i));
          } catch {
            return (m.Log.error(`Failed to clone object ${a}`), null);
          }
        };
        e._cloneObject = s;
      })(Yt)),
    Yt
  );
}
var pr;
function ht() {
  return (
    pr ||
      ((pr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const m = le(),
          u = "foreground",
          E = "background",
          v = [];
        let _ = u,
          g = !1;
        const S = () => _ === u;
        e._isCurrentlyVisible = S;
        const y = () => g;
        e._isUnloading = y;
        const s = (i) => {
          v.unshift(i);
        };
        e._subscribeToVisiblityChanged = s;
        const a = (i) => {
          i !== _ && ((_ = i), v.forEach((r) => r(i)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((g = !1), (0, e._notifyVisibilityChanged)(u));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(E)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? u : E);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((g = !0), (0, e._notifyVisibilityChanged)(E));
          }));
      })(Xt)),
    Xt
  );
}
var wr;
function Qi() {
  if (wr) return Me;
  wr = 1;
  var e =
    (Me && Me.__awaiter) ||
    function (_, g, S, y) {
      function s(a) {
        return a instanceof S
          ? a
          : new S(function (i) {
              i(a);
            });
      }
      return new (S || (S = Promise))(function (a, i) {
        function r(t) {
          try {
            n(y.next(t));
          } catch (l) {
            i(l);
          }
        }
        function o(t) {
          try {
            n(y.throw(t));
          } catch (l) {
            i(l);
          }
        }
        function n(t) {
          t.done ? a(t.value) : s(t.value).then(r, o);
        }
        n((y = y.apply(_, g || [])).next());
      });
    };
  (Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.EventSender = void 0));
  const m = q(),
    u = gt(),
    E = ht();
  let v = class {
    constructor(g, S, y, s, a, i) {
      ((this._sdkKey = g),
        (this._network = S),
        (this._emitter = y),
        (this._options = a),
        (this._logEventUrlConfig = s),
        (this._loggingEnabled = i));
    }
    setLogEventCompressionMode(g) {
      this._network.setLogEventCompressionMode(g);
    }
    setLoggingEnabled(g) {
      this._loggingEnabled = g;
    }
    sendBatch(g) {
      return e(this, void 0, void 0, function* () {
        var S, y;
        try {
          const a =
            (0, E._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((y = (S = this._options) === null || S === void 0 ? void 0 : S.networkConfig) ===
              null || y === void 0
              ? void 0
              : y.networkOverrideFunc) == null;
          this._emitter({ name: "pre_logs_flushed", events: g.events });
          const i = a ? this._sendEventsViaBeacon(g) : yield this._sendEventsViaPost(g);
          return i.success
            ? (this._emitter({ name: "logs_flushed", events: g.events }), i)
            : { success: !1, statusCode: i.statusCode };
        } catch (s) {
          return (m.Log.warn("Failed to send batch:", s), { success: !1, statusCode: -1 });
        }
      });
    }
    _sendEventsViaPost(g) {
      return e(this, void 0, void 0, function* () {
        var S;
        const y = yield this._network.post(this._getRequestData(g)),
          s = (S = y?.code) !== null && S !== void 0 ? S : -1;
        return { success: s >= 200 && s < 300, statusCode: s };
      });
    }
    _sendEventsViaBeacon(g) {
      const S = this._network.beacon(this._getRequestData(g));
      return { success: S, statusCode: S ? 200 : -1 };
    }
    _getRequestData(g) {
      return {
        sdkKey: this._sdkKey,
        data: { events: g.events },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [u.NetworkParam.EventCount]: String(g.events.length) },
        headers: {
          "statsig-event-count": String(g.events.length),
          "statsig-retry-count": String(g.attempts),
        },
        credentials: "same-origin",
      };
    }
  };
  return ((Me.EventSender = v), Me);
}
var et = {},
  Ir;
function Hi() {
  if (Ir) return et;
  ((Ir = 1), Object.defineProperty(et, "__esModule", { value: !0 }), (et.FlushInterval = void 0));
  const e = 1e3,
    m = 6e4;
  let u = class {
    constructor() {
      ((this._currentIntervalMs = e), (this._lastFlushAttemptTime = Date.now()));
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
      return this.getTimeSinceLastAttempt() >= m;
    }
    getTimeTillMaxInterval() {
      return m - this.getTimeSinceLastAttempt();
    }
    hasCompletelyRecoveredFromBackoff() {
      return this._currentIntervalMs <= e;
    }
    adjustForSuccess() {
      const v = this._currentIntervalMs;
      v !== e && (this._currentIntervalMs = Math.max(e, Math.floor(v / 2)));
    }
    adjustForFailure() {
      const v = this._currentIntervalMs;
      this._currentIntervalMs = Math.min(m, v * 2);
    }
    getTimeUntilNextFlush() {
      return this.getCurrentIntervalMs() - this.getTimeSinceLastAttempt();
    }
  };
  return ((et.FlushInterval = u), et);
}
var tt = {},
  Dr;
function Xi() {
  if (Dr) return tt;
  ((Dr = 1), Object.defineProperty(tt, "__esModule", { value: !0 }), (tt.FlushType = void 0));
  var e;
  return (
    (function (m) {
      ((m.ScheduledMaxTime = "scheduled:max_time"),
        (m.ScheduledFullBatch = "scheduled:full_batch"),
        (m.Limit = "limit"),
        (m.Manual = "manual"),
        (m.Shutdown = "shutdown"));
    })(e || (tt.FlushType = e = {})),
    tt
  );
}
var nt = {},
  ie = {},
  Re = {},
  Cr;
function Yi() {
  if (Cr) return Re;
  Cr = 1;
  var e =
    (Re && Re.__awaiter) ||
    function (S, y, s, a) {
      function i(r) {
        return r instanceof s
          ? r
          : new s(function (o) {
              o(r);
            });
      }
      return new (s || (s = Promise))(function (r, o) {
        function n(h) {
          try {
            l(a.next(h));
          } catch (c) {
            o(c);
          }
        }
        function t(h) {
          try {
            l(a.throw(h));
          } catch (c) {
            o(c);
          }
        }
        function l(h) {
          h.done ? r(h.value) : i(h.value).then(n, t);
        }
        l((a = a.apply(S, y || [])).next());
      });
    };
  (Object.defineProperty(Re, "__esModule", { value: !0 }), (Re._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    u = "https://cloudflare-dns.com/dns-query",
    E = ["i", "e", "d"],
    v = 200;
  function _(S) {
    return e(this, void 0, void 0, function* () {
      const y = yield S(u, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!y.ok) {
        const i = new Error("Failed to fetch TXT records from DNS");
        throw ((i.name = "DnsTxtFetchError"), i);
      }
      const s = yield y.arrayBuffer(),
        a = new Uint8Array(s);
      return g(a);
    });
  }
  Re._fetchTxtRecords = _;
  function g(S) {
    const y = S.findIndex(
      (a, i) =>
        i < v && String.fromCharCode(a) === "=" && E.includes(String.fromCharCode(S[i - 1])),
    );
    if (y === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let s = "";
    for (let a = y - 1; a < S.length; a++) s += String.fromCharCode(S[a]);
    return s.split(",");
  }
  return Re;
}
var Zt = {},
  kr;
function ae() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = q(),
          u = le(),
          E = {},
          v = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (i) => (E[i] ? E[i] : null),
            setItem: (i, r) => {
              E[i] = r;
            },
            removeItem: (i) => {
              delete E[i];
            },
            getAllKeys: () => Object.keys(E),
          };
        let _ = null;
        try {
          const i = (0, u._getWindowSafe)();
          i &&
            i.localStorage &&
            typeof i.localStorage.getItem == "function" &&
            (_ = {
              isReady: () => !0,
              isReadyResolver: () => null,
              getProviderName: () => "LocalStorage",
              getItem: (r) => i.localStorage.getItem(r),
              setItem: (r, o) => i.localStorage.setItem(r, o),
              removeItem: (r) => i.localStorage.removeItem(r),
              getAllKeys: () => Object.keys(i.localStorage),
            });
        } catch {
          m.Log.warn("Failed to setup localStorageProvider.");
        }
        let g = _ ?? v,
          S = g;
        function y(i) {
          try {
            return i();
          } catch (r) {
            if (r instanceof Error && r.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            throw r;
          }
        }
        e.Storage = {
          isReady: () => S.isReady(),
          isReadyResolver: () => S.isReadyResolver(),
          getProviderName: () => S.getProviderName(),
          getItem: (i) => y(() => S.getItem(i)),
          setItem: (i, r) => y(() => S.setItem(i, r)),
          removeItem: (i) => S.removeItem(i),
          getAllKeys: () => S.getAllKeys(),
          _setProvider: (i) => {
            ((g = i), (S = i));
          },
          _setDisabled: (i) => {
            i ? (S = v) : (S = g);
          },
        };
        function s(i) {
          const r = e.Storage.getItem(i);
          try {
            return JSON.parse(r ?? "null");
          } catch {
            return (m.Log.error(`Failed to parse value for key "${i}"`), null);
          }
        }
        e._getObjectFromStorage = s;
        function a(i, r) {
          e.Storage.setItem(i, JSON.stringify(r));
        }
        e._setObjectInStorage = a;
      })(Zt)),
    Zt
  );
}
var Or;
function Zi() {
  if (Or) return ie;
  Or = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (o, n, t, l) {
      function h(c) {
        return c instanceof t
          ? c
          : new t(function (w) {
              w(c);
            });
      }
      return new (t || (t = Promise))(function (c, w) {
        function f(I) {
          try {
            b(l.next(I));
          } catch (C) {
            w(C);
          }
        }
        function d(I) {
          try {
            b(l.throw(I));
          } catch (C) {
            w(C);
          }
        }
        function b(I) {
          I.done ? c(I.value) : h(I.value).then(f, d);
        }
        b((l = l.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie._isDomainFailure = ie.NetworkFallbackResolver = void 0));
  const m = Yi(),
    u = qe(),
    E = q(),
    v = ae(),
    _ = 10080 * 60 * 1e3,
    g = 14400 * 1e3;
  let S = class {
    constructor(n) {
      var t;
      ((this._fallbackInfo = null),
        (this._errorBoundary = null),
        (this._dnsQueryCooldowns = {}),
        (this._networkOverrideFunc =
          (t = n.networkConfig) === null || t === void 0 ? void 0 : t.networkOverrideFunc));
    }
    setErrorBoundary(n) {
      this._errorBoundary = n;
    }
    tryBumpExpiryTime(n, t) {
      var l;
      const h = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      h &&
        ((h.expiryTime = Date.now() + _),
        a(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: h })));
    }
    getActiveFallbackUrl(n, t) {
      var l, h;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let c = this._fallbackInfo;
      c == null && ((c = (l = i(n)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = c));
      const w = c[t.endpoint];
      return !w ||
        Date.now() > ((h = w.expiryTime) !== null && h !== void 0 ? h : 0) ||
        t.getChecksum() !== w.urlConfigChecksum
        ? (delete c[t.endpoint], (this._fallbackInfo = c), a(n, this._fallbackInfo), null)
        : w.url
          ? w.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, l, h) {
      return e(this, void 0, void 0, function* () {
        var c, w;
        try {
          if (!y(l, h)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            b = this._pickNewFallbackUrl(
              (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[t.endpoint],
              d,
            );
          return b ? (this._updateFallbackInfoWithNewUrl(n, t, b), !0) : !1;
        } catch (f) {
          return (
            (w = this._errorBoundary) === null ||
              w === void 0 ||
              w.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, l) {
      var h, c, w;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + _,
          previous: [],
        },
        d = t.endpoint,
        b = (h = this._fallbackInfo) === null || h === void 0 ? void 0 : h[d];
      (b && f.previous.push(...b.previous), f.previous.length > 10 && (f.previous = []));
      const I =
        (w = (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[d]) === null ||
        w === void 0
          ? void 0
          : w.url;
      (I != null && f.previous.push(I),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: f })),
        a(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[n.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + g;
        const h = [],
          c = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          w = r(n.defaultUrl);
        for (const f of c) {
          if (!f.startsWith(n.endpointDnsKey + "=")) continue;
          const d = f.split("=");
          if (d.length > 1) {
            let b = d[1];
            (b.endsWith("/") && (b = b.slice(0, -1)), h.push(`https://${b}${w}`));
          }
        }
        return h;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var l;
      if (t == null) return null;
      const h = new Set((l = n?.previous) !== null && l !== void 0 ? l : []),
        c = n?.url;
      let w = null;
      for (const f of t) {
        const d = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!h.has(f) && d !== c) {
          w = d;
          break;
        }
      }
      return w;
    }
  };
  ie.NetworkFallbackResolver = S;
  function y(o, n) {
    var t;
    const l = (t = o?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  ie._isDomainFailure = y;
  function s(o) {
    return `statsig.network_fallback.${(0, u._DJB2)(o)}`;
  }
  function a(o, n) {
    const t = s(o);
    if (!n || Object.keys(n).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(n));
  }
  function i(o) {
    const n = s(o),
      t = v.Storage.getItem(n);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (E.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function r(o) {
    try {
      return new URL(o).pathname;
    } catch {
      return null;
    }
  }
  return ie;
}
var rt = {},
  Tr;
function yi() {
  if (Tr) return rt;
  ((Tr = 1), Object.defineProperty(rt, "__esModule", { value: !0 }), (rt.SDKFlags = void 0));
  const e = {};
  return (
    (rt.SDKFlags = {
      setFlags: (m, u) => {
        e[m] = u;
      },
      get: (m, u) => {
        var E, v;
        return (v = (E = e[m]) === null || E === void 0 ? void 0 : E[u]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    rt
  );
}
var it = {},
  Mr;
function En() {
  if (Mr) return it;
  ((Mr = 1), Object.defineProperty(it, "__esModule", { value: !0 }), (it.SDKType = void 0));
  const e = {};
  let m;
  return (
    (it.SDKType = {
      _get: (u) => {
        var E;
        return ((E = e[u]) !== null && E !== void 0 ? E : "js-mono") + (m ?? "");
      },
      _setClientType(u, E) {
        e[u] = E;
      },
      _setBindingType(u) {
        (!m || m === "-react") && (m = "-" + u);
      },
    }),
    it
  );
}
var $t = {},
  ot = {},
  Rr;
function bn() {
  if (Rr) return ot;
  ((Rr = 1), Object.defineProperty(ot, "__esModule", { value: !0 }), (ot.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      u = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          m > 0
            ? ((_ = ((m + _) % 16) | 0), (m = Math.floor(m / 16)))
            : ((_ = ((u + _) % 16) | 0), (u = Math.floor(u / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((ot.getUUID = e), ot);
}
var Lr;
function ft() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = It(),
          u = q(),
          E = ae(),
          v = bn(),
          _ = ht(),
          g = 1800 * 1e3,
          S = 14400 * 1e3,
          y = 15e3,
          s = {};
        ((0, _._subscribeToVisiblityChanged)((f) => {
          f === "background" && Object.values(s).forEach((d) => t(d));
        }),
          (e.SessionID = { get: (f) => e.StatsigSession.get(f).data.sessionID }),
          (e.StatsigSession = {
            get: (f, d = !0) => {
              s[f] == null && (s[f] = c(f));
              const b = s[f];
              return a(b, d);
            },
            overrideInitialSessionID: (f, d) => {
              const b = Date.now(),
                I = {
                  data: { sessionID: f, startTime: b, lastUpdate: b },
                  sdkKey: d,
                  lastPersistedAt: Date.now(),
                  storageKey: n(d),
                };
              (t(I), (s[d] = I));
            },
            checkForIdleSession: (f) => {
              const d = s[f];
              if (!d) return;
              i(d) && t(d);
            },
          }));
        function a(f, d) {
          const b = Date.now();
          return (i(f) ? t(f) : d && ((f.data.lastUpdate = b), l(f)), f);
        }
        function i(f) {
          var d;
          const b = f.data,
            I = r(b) || o(b);
          return (
            I &&
              ((f.data = w()),
              (d = __STATSIG__ == null ? void 0 : __STATSIG__.instance(f.sdkKey)) === null ||
                d === void 0 ||
                d.$emt({ name: "session_expired" })),
            I
          );
        }
        function r({ lastUpdate: f }) {
          return Date.now() - f > g;
        }
        function o({ startTime: f }) {
          return Date.now() - f > S;
        }
        function n(f) {
          return `statsig.session_id.${(0, m._getStorageKey)(f)}`;
        }
        function t(f) {
          try {
            ((0, E._setObjectInStorage)(f.storageKey, f.data), (f.lastPersistedAt = Date.now()));
          } catch {
            u.Log.warn("Failed to save SessionID");
          }
        }
        function l(f) {
          Date.now() - f.lastPersistedAt > y && t(f);
        }
        function h(f) {
          return (0, E._getObjectFromStorage)(f);
        }
        function c(f) {
          const d = n(f),
            b = h(d);
          return b && b.sessionID && b.startTime && b.lastUpdate
            ? { data: b, sdkKey: f, lastPersistedAt: 0, storageKey: d }
            : { data: w(), sdkKey: f, lastPersistedAt: 0, storageKey: d };
        }
        function w() {
          return { sessionID: (0, v.getUUID)(), startTime: Date.now(), lastUpdate: Date.now() };
        }
      })($t)),
    $t
  );
}
var Le = {},
  Fr;
function vt() {
  if (Fr) return Le;
  ((Fr = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le.getCookieName = Le.StableID = void 0));
  const e = It(),
    m = q(),
    u = le(),
    E = ae(),
    v = bn(),
    _ = {},
    g = {},
    S = {};
  Le.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (S[n]) return null;
      if (_[n] != null) return _[n];
      let t = null;
      return (
        (t = i(n)),
        t != null
          ? ((_[n] = t), s(t, n), t)
          : ((t = a(n)), t == null && (t = (0, v.getUUID)()), s(t, n), r(t, n), (_[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((_[t] = n), s(n, t), r(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      g[n] = t;
    },
    _setDisabled: (n, t) => {
      S[n] = t;
    },
  };
  function y(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function s(n, t) {
    const l = y(t);
    try {
      (0, E._setObjectInStorage)(l, n);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(n) {
    const t = y(n);
    return (0, E._getObjectFromStorage)(t);
  }
  function i(n) {
    if (!g[n] || (0, u._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [h, c] = l.trim().split("=");
      if (h === o(n)) return decodeURIComponent(c);
    }
    return null;
  }
  function r(n, t) {
    if (!g[t] || (0, u._getDocumentSafe)() == null) return;
    const l = new Date();
    (l.setFullYear(l.getFullYear() + 1),
      (document.cookie = `${o(t)}=${encodeURIComponent(n)}; expires=${l.toUTCString()}; path=/`));
  }
  function o(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  return ((Le.getCookieName = o), Le);
}
var st = {},
  Ur;
function Si() {
  return (
    Ur ||
      ((Ur = 1),
      Object.defineProperty(st, "__esModule", { value: !0 }),
      (st.ErrorTag = void 0),
      (st.ErrorTag = { NetworkError: "NetworkError" })),
    st
  );
}
var en = {},
  Ar;
function St() {
  return (
    Ar ||
      ((Ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.32.0"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (u) => {
            m = Object.assign(Object.assign({}, m), u);
          },
        };
      })(en)),
    en
  );
}
var Fe = {},
  Pr;
function Dt() {
  return (
    Pr ||
      ((Pr = 1),
      Object.defineProperty(Fe, "__esModule", { value: !0 }),
      (Fe.LoggingEnabledOption = Fe.LogEventCompressionMode = void 0),
      (Fe.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (Fe.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    Fe
  );
}
var Nr;
function Ei() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        var m =
          (nt && nt.__awaiter) ||
          function (k, p, D, O) {
            function T(R) {
              return R instanceof D
                ? R
                : new D(function (F) {
                    F(R);
                  });
            }
            return new (D || (D = Promise))(function (R, F) {
              function $(U) {
                try {
                  j(O.next(U));
                } catch (P) {
                  F(P);
                }
              }
              function K(U) {
                try {
                  j(O.throw(U));
                } catch (P) {
                  F(P);
                }
              }
              function j(U) {
                U.done ? R(U.value) : T(U.value).then($, K);
              }
              j((O = O.apply(k, p || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.NetworkCore = e.RETRYABLE_CODES = void 0),
          Ne());
        const u = Ne(),
          E = _n(),
          v = q(),
          _ = gt(),
          g = Zi(),
          S = yi(),
          y = En(),
          s = le(),
          a = ft(),
          i = vt(),
          r = Si(),
          o = St(),
          n = Dt(),
          t = ht(),
          l = 1e4,
          h = 500,
          c = 3e4,
          w = 1e3,
          f = 50,
          d = f / w;
        e.RETRYABLE_CODES = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
        let b = class {
          constructor(p, D) {
            ((this._emitter = D),
              (this._errorBoundary = null),
              (this._timeout = l),
              (this._netConfig = {}),
              (this._options = {}),
              (this._leakyBucket = {}),
              (this._lastUsedInitUrl = null),
              p && (this._options = p),
              this._options.networkConfig && (this._netConfig = this._options.networkConfig),
              this._netConfig.networkTimeoutMs &&
                (this._timeout = this._netConfig.networkTimeoutMs),
              (this._fallbackResolver = new g.NetworkFallbackResolver(this._options)),
              this.setLogEventCompressionMode(this._getLogEventCompressionMode(p)));
          }
          setLogEventCompressionMode(p) {
            this._options.logEventCompressionMode = p;
          }
          setErrorBoundary(p) {
            ((this._errorBoundary = p),
              this._errorBoundary.wrap(this),
              this._errorBoundary.wrap(this._fallbackResolver),
              this._fallbackResolver.setErrorBoundary(p));
          }
          isBeaconSupported() {
            return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
          }
          getLastUsedInitUrlAndReset() {
            const p = this._lastUsedInitUrl;
            return ((this._lastUsedInitUrl = null), p);
          }
          beacon(p) {
            if (!I(p)) return !1;
            const D = this._getInternalRequestArgs("POST", p),
              O = this._getPopulatedURL(D),
              T = navigator;
            return T.sendBeacon.bind(T)(O, D.body);
          }
          post(p) {
            return m(this, void 0, void 0, function* () {
              const D = this._getInternalRequestArgs("POST", p);
              return (
                this._tryEncodeBody(D),
                yield this._tryToCompressBody(D),
                this._sendRequest(D)
              );
            });
          }
          get(p) {
            const D = this._getInternalRequestArgs("GET", p);
            return this._sendRequest(D);
          }
          _sendRequest(p) {
            return m(this, void 0, void 0, function* () {
              var D, O, T, R;
              if (!I(p) || this._netConfig.preventAllNetworkTraffic) return null;
              const { method: F, body: $, retries: K, attempt: j } = p,
                U = p.urlConfig.endpoint;
              if (this._isRateLimited(U))
                return (
                  v.Log.warn(
                    `Request to ${U} was blocked because you are making requests too frequently.`,
                  ),
                  null
                );
              const P = j ?? 1;
              let V = !1;
              const J = this._getPopulatedURL(p);
              let G = null;
              const Z = (0, t._isUnloading)();
              try {
                const ue = {
                  method: F,
                  body: $,
                  headers: Object.assign({}, p.headers),
                  priority: p.priority,
                  keepalive: Z,
                };
                x(p, P);
                const z = this._leakyBucket[U];
                z && ((z.lastRequestTime = Date.now()), (this._leakyBucket[U] = z));
                const ee =
                  (D = this._netConfig.networkOverrideFunc) !== null && D !== void 0 ? D : fetch;
                let Ke;
                if (
                  ((G = yield Promise.race([
                    ee(J, ue).finally(() => clearTimeout(Ke)),
                    new Promise((_e, ge) => {
                      Ke = setTimeout(() => {
                        ((V = !0), ge(new Error(`Timeout of ${this._timeout}ms expired.`)));
                      }, this._timeout);
                    }),
                  ])),
                  !G.ok)
                ) {
                  const _e = yield G.text().catch(() => "No Text"),
                    ge = new Error(`NetworkError: ${J} ${_e}`);
                  throw ((ge.name = "NetworkError"), ge);
                }
                const te = yield G.text();
                return (
                  N(p, G, P, te),
                  this._fallbackResolver.tryBumpExpiryTime(p.sdkKey, p.urlConfig),
                  { body: te, code: G.status }
                );
              } catch (ue) {
                const z = L(ue),
                  ee = A(z ?? "", V);
                if (
                  (N(p, G, P, "", ue),
                  (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
                    p.sdkKey,
                    p.urlConfig,
                    z,
                    ee,
                  )) &&
                    (p.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(
                      p.sdkKey,
                      p.urlConfig,
                    )),
                  !K ||
                    P > K ||
                    !e.RETRYABLE_CODES.has((O = G?.status) !== null && O !== void 0 ? O : 500))
                ) {
                  (T = this._emitter) === null ||
                    T === void 0 ||
                    T.call(this, {
                      name: "error",
                      error: ue,
                      tag: r.ErrorTag.NetworkError,
                      requestArgs: p,
                    });
                  const te = `A networking error occurred during ${F} request to ${J}.`;
                  return (
                    v.Log.error(te, z, ue),
                    (R = this._errorBoundary) === null ||
                      R === void 0 ||
                      R.attachErrorIfNoneExists(te),
                    null
                  );
                }
                return (
                  yield B(P),
                  this._sendRequest(
                    Object.assign(Object.assign({}, p), { retries: K, attempt: P + 1 }),
                  )
                );
              }
            });
          }
          _getLogEventCompressionMode(p) {
            let D = p?.logEventCompressionMode;
            return (
              !D && p?.disableCompression === !0 && (D = n.LogEventCompressionMode.Disabled),
              D || (D = n.LogEventCompressionMode.Enabled),
              D
            );
          }
          _isRateLimited(p) {
            var D;
            const O = Date.now(),
              T =
                (D = this._leakyBucket[p]) !== null && D !== void 0
                  ? D
                  : { count: 0, lastRequestTime: O },
              R = O - T.lastRequestTime,
              F = Math.floor(R * d);
            return (
              (T.count = Math.max(0, T.count - F)),
              T.count >= f
                ? !0
                : ((T.count += 1), (T.lastRequestTime = O), (this._leakyBucket[p] = T), !1)
            );
          }
          _getPopulatedURL(p) {
            var D;
            const O = (D = p.fallbackUrl) !== null && D !== void 0 ? D : p.urlConfig.getUrl();
            (p.urlConfig.endpoint === _.Endpoint._initialize ||
              p.urlConfig.endpoint === _.Endpoint._download_config_specs) &&
              (this._lastUsedInitUrl = O);
            const T = Object.assign(
                {
                  [_.NetworkParam.SdkKey]: p.sdkKey,
                  [_.NetworkParam.SdkType]: y.SDKType._get(p.sdkKey),
                  [_.NetworkParam.SdkVersion]: o.SDK_VERSION,
                  [_.NetworkParam.Time]: String(Date.now()),
                  [_.NetworkParam.SessionID]: a.SessionID.get(p.sdkKey),
                },
                p.params,
              ),
              R = Object.keys(T)
                .map((F) => `${encodeURIComponent(F)}=${encodeURIComponent(T[F])}`)
                .join("&");
            return `${O}${R ? `?${R}` : ""}`;
          }
          _tryEncodeBody(p) {
            var D;
            const O = (0, s._getWindowSafe)(),
              T = p.body;
            if (
              !(
                !p.isStatsigEncodable ||
                this._options.disableStatsigEncoding ||
                typeof T != "string" ||
                (0, u._getStatsigGlobalFlag)("no-encode") != null ||
                !O?.btoa
              )
            )
              try {
                ((p.body = O.btoa(T).split("").reverse().join("")),
                  (p.params = Object.assign(
                    Object.assign({}, (D = p.params) !== null && D !== void 0 ? D : {}),
                    { [_.NetworkParam.StatsigEncoded]: "1" },
                  )));
              } catch (R) {
                v.Log.warn(`Request encoding failed for ${p.urlConfig.getUrl()}`, R);
              }
          }
          _tryToCompressBody(p) {
            return m(this, void 0, void 0, function* () {
              var D;
              const O = p.body;
              if (!(typeof O != "string" || !M(p, this._options)))
                try {
                  const T = new TextEncoder().encode(O),
                    R = new CompressionStream("gzip"),
                    F = R.writable.getWriter();
                  (F.write(T).catch(v.Log.error), F.close().catch(v.Log.error));
                  const $ = R.readable.getReader(),
                    K = [];
                  let j;
                  for (; !(j = yield $.read()).done; ) K.push(j.value);
                  const U = K.reduce((J, G) => J + G.length, 0),
                    P = new Uint8Array(U);
                  let V = 0;
                  for (const J of K) (P.set(J, V), (V += J.length));
                  ((p.body = P),
                    (p.params = Object.assign(
                      Object.assign({}, (D = p.params) !== null && D !== void 0 ? D : {}),
                      { [_.NetworkParam.IsGzipped]: "1" },
                    )));
                } catch (T) {
                  v.Log.warn(`Request compression failed for ${p.urlConfig.getUrl()}`, T);
                }
            });
          }
          _getInternalRequestArgs(p, D) {
            const O = this._fallbackResolver.getActiveFallbackUrl(D.sdkKey, D.urlConfig),
              T = Object.assign(Object.assign({}, D), { method: p, fallbackUrl: O });
            return ("data" in D && C(T, D.data), T);
          }
        };
        e.NetworkCore = b;
        const I = (k) =>
            k.sdkKey ? !0 : (v.Log.warn("Unable to make request without an SDK key"), !1),
          C = (k, p) => {
            const { sdkKey: D, fallbackUrl: O } = k,
              T = i.StableID.get(D),
              R = a.SessionID.get(D),
              F = y.SDKType._get(D);
            k.body = JSON.stringify(
              Object.assign(Object.assign({}, p), {
                statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
                  stableID: T,
                  sessionID: R,
                  sdkType: F,
                  fallbackUrl: O,
                }),
              }),
            );
          };
        function M(k, p) {
          if (
            !k.isCompressable ||
            (0, u._getStatsigGlobalFlag)("no-compress") != null ||
            typeof CompressionStream > "u" ||
            typeof TextEncoder > "u"
          )
            return !1;
          const D = k.urlConfig.customUrl != null || k.urlConfig.fallbackUrls != null,
            O = S.SDKFlags.get(k.sdkKey, "enable_log_event_compression") === !0;
          switch (p.logEventCompressionMode) {
            case n.LogEventCompressionMode.Disabled:
              return !1;
            case n.LogEventCompressionMode.Enabled:
              return !(D && !O);
            case n.LogEventCompressionMode.Forced:
              return !0;
            default:
              return !1;
          }
        }
        function L(k) {
          return typeof k == "string"
            ? k
            : k instanceof Error
              ? `${k.name}: ${k.message}`
              : "Unknown Error";
        }
        function A(k, p) {
          return k.includes("Timeout") || p;
        }
        function x(k, p) {
          k.urlConfig.endpoint === _.Endpoint._initialize &&
            E.Diagnostics._markInitNetworkReqStart(k.sdkKey, { attempt: p });
        }
        function N(k, p, D, O, T) {
          k.urlConfig.endpoint === _.Endpoint._initialize &&
            E.Diagnostics._markInitNetworkReqEnd(
              k.sdkKey,
              E.Diagnostics._getDiagnosticsData(p, D, O, T),
            );
        }
        function B(k) {
          return m(this, void 0, void 0, function* () {
            yield new Promise((p) => setTimeout(p, Math.min(h * (k * k), c)));
          });
        }
      })(nt)),
    nt
  );
}
var jr;
function $i() {
  if (jr) return Te;
  jr = 1;
  var e =
    (Te && Te.__awaiter) ||
    function (i, r, o, n) {
      function t(l) {
        return l instanceof o
          ? l
          : new o(function (h) {
              h(l);
            });
      }
      return new (o || (o = Promise))(function (l, h) {
        function c(d) {
          try {
            f(n.next(d));
          } catch (b) {
            h(b);
          }
        }
        function w(d) {
          try {
            f(n.throw(d));
          } catch (b) {
            h(b);
          }
        }
        function f(d) {
          d.done ? l(d.value) : t(d.value).then(c, w);
        }
        f((n = n.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.FlushCoordinator = void 0));
  const m = yn(),
    u = Qi(),
    E = Hi(),
    v = Xi(),
    _ = qe(),
    g = q(),
    S = Ei(),
    y = ft(),
    s = ae();
  let a = class {
    constructor(r, o, n, t, l, h, c, w, f, d) {
      ((this._cooldownTimer = null),
        (this._maxIntervalTimer = null),
        (this._hasRunQuickFlush = !1),
        (this._currentFlushPromise = null),
        (this._creationTime = Date.now()),
        (this._isShuttingDown = !1),
        (this._storageKey = null),
        (this._flushInterval = new E.FlushInterval()),
        (this._batchQueue = r),
        (this._pendingEvents = o),
        (this._onPrepareFlush = n),
        (this._errorBoundary = d),
        (this._sdkKey = t),
        (this._eventSender = new u.EventSender(t, l, h, c, w, f)));
    }
    setLoggingEnabled(r) {
      this._eventSender.setLoggingEnabled(r);
    }
    setLogEventCompressionMode(r) {
      this._eventSender.setLogEventCompressionMode(r);
    }
    startScheduledFlushCycle() {
      this._scheduleNextFlush();
    }
    stopScheduledFlushCycle() {
      this._clearAllTimers();
    }
    addEvent(r) {
      (this._pendingEvents.addToPendingEventsQueue(r),
        !this._currentFlushPromise &&
          this._pendingEvents.hasEventsForFullBatch() &&
          this.processLimitFlush());
    }
    processManualFlush() {
      return e(this, void 0, void 0, function* () {
        return (
          this._currentFlushPromise && (yield this._currentFlushPromise),
          (this._currentFlushPromise = this._executeFlush(v.FlushType.Manual).finally(() => {
            ((this._currentFlushPromise = null), this._scheduleNextFlush());
          })),
          this._currentFlushPromise
        );
      });
    }
    processShutdown() {
      return e(this, void 0, void 0, function* () {
        return (
          (this._isShuttingDown = !0),
          this._clearAllTimers(),
          this._currentFlushPromise && (yield this._currentFlushPromise),
          (this._currentFlushPromise = this._executeFlush(v.FlushType.Shutdown)
            .catch((r) => {
              g.Log.error(`Error during shutdown flush: ${r}`);
            })
            .finally(() => {
              this._currentFlushPromise = null;
            })),
          this._currentFlushPromise
        );
      });
    }
    _executeFlush(r) {
      return e(this, void 0, void 0, function* () {
        this._clearAllTimers();
        try {
          this._prepareQueueForFlush(r);
          const o = this._batchQueue.takeAllBatches();
          if (o.length === 0) return;
          yield Promise.all(o.map((n) => this._processOneBatch(n, r)));
        } finally {
          this._isShuttingDown || this._scheduleNextFlush();
        }
      });
    }
    checkQuickFlush() {
      this._hasRunQuickFlush ||
        Date.now() - this._creationTime > m.EventRetryConstants.QUICK_FLUSH_WINDOW_MS ||
        ((this._hasRunQuickFlush = !0),
        setTimeout(() => {
          this.processManualFlush().catch((r) => {
            g.Log.warn("Quick flush failed:", r);
          });
        }, m.EventRetryConstants.QUICK_FLUSH_WINDOW_MS));
    }
    _attemptScheduledFlush() {
      if (this._currentFlushPromise) {
        this._scheduleNextFlush();
        return;
      }
      const r = this.containsAtLeastOneFullBatch(),
        o = this._flushInterval.hasReachedMaxInterval();
      if (!r && !o) {
        this._scheduleNoopPollTick();
        return;
      }
      this._flushInterval.markFlushAttempt();
      let n;
      (r ? (n = v.FlushType.ScheduledFullBatch) : (n = v.FlushType.ScheduledMaxTime),
        (this._currentFlushPromise = this._processNextBatch(n)
          .then(() => {})
          .catch((t) => {
            g.Log.error("Error during scheduled flush:", t);
          })
          .finally(() => {
            ((this._currentFlushPromise = null), this._scheduleNextFlush());
          })));
    }
    processLimitFlush() {
      this._flushInterval.hasCompletelyRecoveredFromBackoff() &&
        (this._currentFlushPromise ||
          (this._currentFlushPromise = this._processLimitFlushInternal()
            .catch((r) => {
              g.Log.error("Error during limit flush", r);
            })
            .finally(() => {
              ((this._currentFlushPromise = null), this._scheduleNextFlush());
            })));
    }
    _processLimitFlushInternal() {
      return e(this, void 0, void 0, function* () {
        if (yield this._processNextBatch(v.FlushType.Limit))
          for (
            ;
            this._flushInterval.hasCompletelyRecoveredFromBackoff() &&
            this.containsAtLeastOneFullBatch() &&
            (yield this._processNextBatch(v.FlushType.Limit));
          );
      });
    }
    _scheduleNextFlush() {
      if ((this._clearAllTimers(), this._isShuttingDown)) return;
      const r = Math.max(0, this._flushInterval.getTimeUntilNextFlush());
      this._cooldownTimer = setTimeout(() => {
        ((this._cooldownTimer = null),
          y.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, r);
      const o = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
      this._maxIntervalTimer = setTimeout(() => {
        ((this._maxIntervalTimer = null),
          y.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, o);
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
          y.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, m.EventRetryConstants.TICK_INTERVAL_MS);
      const r = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
      this._maxIntervalTimer = setTimeout(() => {
        ((this._maxIntervalTimer = null),
          y.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, r);
    }
    _processNextBatch(r) {
      return e(this, void 0, void 0, function* () {
        this._prepareQueueForFlush(r);
        const o = this._batchQueue.takeNextBatch();
        return o ? this._processOneBatch(o, r) : !1;
      });
    }
    _processOneBatch(r, o) {
      return e(this, void 0, void 0, function* () {
        const n = yield this._eventSender.sendBatch(r);
        return n.success
          ? (this._flushInterval.adjustForSuccess(), !0)
          : (this._flushInterval.adjustForFailure(), this._handleFailure(r, o, n.statusCode), !1);
      });
    }
    _prepareQueueForFlush(r) {
      this._onPrepareFlush();
      const o = this.convertPendingEventsToBatches();
      o > 0 &&
        (g.Log.warn(`Dropped ${o} events`),
        this._errorBoundary.logDroppedEvents(o, "Batch queue limit reached", {
          loggingInterval: this._flushInterval.getCurrentIntervalMs(),
          batchSize: this._batchQueue.batchSize(),
          maxPendingBatches: m.EventRetryConstants.MAX_PENDING_BATCHES,
          flushType: r,
          retries: "dropped before batching",
        }));
    }
    containsAtLeastOneFullBatch() {
      return this._pendingEvents.hasEventsForFullBatch() || this._batchQueue.hasFullBatch();
    }
    convertPendingEventsToBatches() {
      if (this._pendingEvents.isEmpty()) return 0;
      const r = this._pendingEvents.takeAll();
      return this._batchQueue.createBatches(r);
    }
    _handleFailure(r, o, n) {
      if (o === v.FlushType.Shutdown) {
        (g.Log.warn(
          `${o} flush failed during shutdown. ${r.events.length} event(s) will be saved to storage for retry in next session.`,
        ),
          this._saveShutdownFailedEventsToStorage(r.events));
        return;
      }
      if (!S.RETRYABLE_CODES.has(n)) {
        (g.Log.warn(
          `${o} flush failed after ${r.attempts} attempt(s). ${r.events.length} event(s) will be dropped. Non-retryable error: ${n}`,
        ),
          this._errorBoundary.logEventRequestFailure(
            r.events.length,
            "non-retryable error",
            o,
            n,
            r.attempts,
          ));
        return;
      }
      if (r.attempts >= m.EventRetryConstants.MAX_RETRY_ATTEMPTS) {
        (g.Log.warn(
          `${o} flush failed after ${r.attempts} attempt(s). ${r.events.length} event(s) will be dropped.`,
        ),
          this._errorBoundary.logEventRequestFailure(
            r.events.length,
            "max retry attempts exceeded",
            o,
            n,
            r.attempts,
          ));
        return;
      }
      r.incrementAttempts();
      const t = this._batchQueue.requeueBatch(r);
      t > 0 &&
        (g.Log.warn(`Failed to requeue batch : dropped ${t} events due to full queue`),
        this._errorBoundary.logDroppedEvents(t, "Batch queue limit reached", {
          loggingInterval: this._flushInterval.getCurrentIntervalMs(),
          batchSize: this._batchQueue.batchSize(),
          maxPendingBatches: m.EventRetryConstants.MAX_PENDING_BATCHES,
          flushType: o,
          retries: r.attempts,
        }));
    }
    loadAndRetryShutdownFailedEvents() {
      return e(this, void 0, void 0, function* () {
        const r = this._getStorageKey();
        try {
          s.Storage.isReady() || (yield s.Storage.isReadyResolver());
          const o = this._getShutdownFailedEventsFromStorage(r);
          if (o.length === 0) return;
          (g.Log.debug(`Loading ${o.length} failed shutdown event(s) from storage for retry`),
            s.Storage.removeItem(r),
            o.forEach((n) => {
              this.addEvent(n);
            }),
            yield this.processManualFlush());
        } catch (o) {
          g.Log.warn("Failed to load and retry failed shutdown events:", o);
        }
      });
    }
    _getStorageKey() {
      return (
        this._storageKey ||
          (this._storageKey = `statsig.failed_shutdown_events.${(0, _._DJB2)(this._sdkKey)}`),
        this._storageKey
      );
    }
    _saveShutdownFailedEventsToStorage(r) {
      const o = this._getStorageKey();
      try {
        let t = [...this._getShutdownFailedEventsFromStorage(o), ...r];
        (t.length > m.EventRetryConstants.MAX_LOCAL_STORAGE &&
          (t = t.slice(-m.EventRetryConstants.MAX_LOCAL_STORAGE)),
          (0, s._setObjectInStorage)(o, t),
          g.Log.debug(
            `Saved ${r.length} failed shutdown event(s) to storage (total stored: ${t.length})`,
          ));
      } catch (n) {
        g.Log.warn("Unable to save failed shutdown events to storage:", n);
      }
    }
    _getShutdownFailedEventsFromStorage(r) {
      try {
        const o = (0, s._getObjectFromStorage)(r);
        return Array.isArray(o) ? o : [];
      } catch {
        return [];
      }
    }
  };
  return ((Te.FlushCoordinator = a), Te);
}
var at = {},
  qr;
function eo() {
  if (qr) return at;
  ((qr = 1), Object.defineProperty(at, "__esModule", { value: !0 }), (at.PendingEvents = void 0));
  const e = q();
  let m = class {
    constructor(E) {
      ((this._pendingEvents = []), (this._batchSize = E));
    }
    addToPendingEventsQueue(E) {
      (this._pendingEvents.push(E), e.Log.debug("Enqueued Event:", E));
    }
    hasEventsForFullBatch() {
      return this._pendingEvents.length >= this._batchSize;
    }
    takeAll() {
      const E = this._pendingEvents;
      return ((this._pendingEvents = []), E);
    }
    isEmpty() {
      return this._pendingEvents.length === 0;
    }
  };
  return ((at.PendingEvents = m), at);
}
var Y = {},
  Kr;
function bi() {
  if (Kr) return Y;
  ((Kr = 1),
    Object.defineProperty(Y, "__esModule", { value: !0 }),
    (Y._createLayerParameterExposure =
      Y._createConfigExposure =
      Y._mapExposures =
      Y._createGateExposure =
      Y._isExposureEvent =
        void 0));
  const e = "statsig::config_exposure",
    m = "statsig::gate_exposure",
    u = "statsig::layer_exposure",
    E = (a, i, r, o, n) => (
      r.bootstrapMetadata && (o.bootstrapMetadata = r.bootstrapMetadata),
      {
        eventName: a,
        user: i,
        value: null,
        metadata: s(r, o),
        secondaryExposures: n,
        time: Date.now(),
      }
    ),
    v = ({ eventName: a }) => a === m || a === e || a === u;
  Y._isExposureEvent = v;
  const _ = (a, i, r) => {
    var o, n, t;
    const l = { gate: i.name, gateValue: String(i.value), ruleID: i.ruleID };
    return (
      ((o = i.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (l.configVersion = i.__evaluation.version),
      E(
        m,
        a,
        i.details,
        l,
        g(
          (t = (n = i.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          r,
        ),
      )
    );
  };
  Y._createGateExposure = _;
  function g(a, i) {
    return a.map((r) => (typeof r == "string" ? (i ?? {})[r] : r)).filter((r) => r != null);
  }
  Y._mapExposures = g;
  const S = (a, i, r) => {
    var o, n, t, l;
    const h = { config: i.name, ruleID: i.ruleID };
    return (
      ((o = i.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (h.configVersion = i.__evaluation.version),
      ((n = i.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (h.rulePassed = String(i.__evaluation.passed)),
      E(
        e,
        a,
        i.details,
        h,
        g(
          (l = (t = i.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && l !== void 0
            ? l
            : [],
          r,
        ),
      )
    );
  };
  Y._createConfigExposure = S;
  const y = (a, i, r, o) => {
    var n, t, l, h, c, w, f;
    const d = i.__evaluation,
      b = ((n = d?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(r)) === !0;
    let I = "",
      C = (t = d?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    b &&
      ((I = (l = d.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (C = (h = d.secondary_exposures) !== null && h !== void 0 ? h : []));
    const M = (c = i.__evaluation) === null || c === void 0 ? void 0 : c.parameter_rule_ids,
      L = {
        config: i.name,
        parameterName: r,
        ruleID: (w = M?.[r]) !== null && w !== void 0 ? w : i.ruleID,
        allocatedExperiment: I,
        isExplicitParameter: String(b),
      };
    return (
      ((f = i.__evaluation) === null || f === void 0 ? void 0 : f.version) != null &&
        (L.configVersion = i.__evaluation.version),
      E(u, a, i.details, L, g(C, o))
    );
  };
  Y._createLayerParameterExposure = y;
  const s = (a, i) => (
    (i.reason = a.reason),
    a.lcut && (i.lcut = String(a.lcut)),
    a.receivedAt && (i.receivedAt = String(a.receivedAt)),
    i
  );
  return Y;
}
var lt = {},
  Br;
function pi() {
  if (Br) return lt;
  ((Br = 1),
    Object.defineProperty(lt, "__esModule", { value: !0 }),
    (lt.UrlConfiguration = void 0));
  const e = qe(),
    m = gt(),
    u = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  let E = class {
    constructor(_, g, S, y) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = u[_]),
        g && (this.customUrl = g),
        !g && S && (this.customUrl = S.endsWith("/") ? `${S}${_}` : `${S}/${_}`),
        y && (this.fallbackUrls = y));
      const s = m.NetworkDefault[_];
      this.defaultUrl = `${s}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const g = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + g);
    }
  };
  return ((lt.UrlConfiguration = E), lt);
}
var Gr;
function Ii() {
  if (Gr) return Ce;
  Gr = 1;
  var e =
    (Ce && Ce.__awaiter) ||
    function (w, f, d, b) {
      function I(C) {
        return C instanceof d
          ? C
          : new d(function (M) {
              M(C);
            });
      }
      return new (d || (d = Promise))(function (C, M) {
        function L(N) {
          try {
            x(b.next(N));
          } catch (B) {
            M(B);
          }
        }
        function A(N) {
          try {
            x(b.throw(N));
          } catch (B) {
            M(B);
          }
        }
        function x(N) {
          N.done ? C(N.value) : I(N.value).then(L, A);
        }
        x((b = b.apply(w, f || [])).next());
      });
    };
  (Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.EventLogger = void 0));
  const m = Wi(),
    u = It(),
    E = yn(),
    v = $i(),
    _ = qe(),
    g = q(),
    S = gt(),
    y = eo(),
    s = le(),
    a = bi(),
    i = Dt(),
    r = ae(),
    o = pi(),
    n = ht(),
    t = 1e3,
    l = 6e5,
    h = {};
  let c = class wi {
    static _safeFlushAndForget(f) {
      var d;
      (d = h[f]) === null || d === void 0 || d.flush().catch(() => {});
    }
    constructor(f, d, b, I, C) {
      var M;
      ((this._sdkKey = f),
        (this._emitter = d),
        (this._network = b),
        (this._options = I),
        (this._errorBoundary = C),
        (this._pendingEvents = null),
        (this._batchQueue = null),
        (this._flushCoordinator = null),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._isShuttingDown = !1),
        (this._storageKey = null),
        (this._pendingCompressionMode = null),
        (this._loggingEnabled =
          (M = I?.loggingEnabled) !== null && M !== void 0
            ? M
            : I?.disableLogging === !0
              ? i.LoggingEnabledOption.disabled
              : i.LoggingEnabledOption.browserOnly),
        I?.loggingEnabled &&
          I.disableLogging !== void 0 &&
          g.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ));
      const L = I?.networkConfig;
      this._logEventUrlConfig = new o.UrlConfiguration(
        S.Endpoint._rgstr,
        L?.logEventUrl,
        L?.api,
        L?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(f) {
      this._flushCoordinator
        ? this._flushCoordinator.setLogEventCompressionMode(f)
        : (this._pendingCompressionMode = f);
    }
    setLoggingEnabled(f) {
      const d = this._loggingEnabled === "disabled",
        b = f !== "disabled";
      if (
        ((this._loggingEnabled = f),
        this._flushCoordinator && this._flushCoordinator.setLoggingEnabled(f),
        d && b)
      ) {
        const I = this._loadStoredEvents();
        (g.Log.debug(`Loaded ${I.length} stored event(s) from storage`),
          I.length > 0 &&
            (I.forEach((C) => {
              this._initFlushCoordinator().addEvent(C);
            }),
            this.flush().catch((C) => {
              g.Log.warn("Failed to flush events after enabling logging:", C);
            })));
      }
    }
    enqueue(f) {
      var d;
      if (!this._shouldLogEvent(f)) return;
      const b = this._normalizeEvent(f);
      if (this._loggingEnabled === "disabled") {
        this._storeEventToStorage(b);
        return;
      }
      (this._initFlushCoordinator().addEvent(b),
        (d = this._flushCoordinator) === null || d === void 0 || d.checkQuickFlush());
    }
    incrementNonExposureCount(f) {
      var d;
      const b = (d = this._nonExposedChecks[f]) !== null && d !== void 0 ? d : 0;
      this._nonExposedChecks[f] = b + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var f;
      const d = (0, s._isServerEnv)();
      if (
        d &&
        ((f = this._options) === null || f === void 0 ? void 0 : f.loggingEnabled) !== "always"
      )
        return;
      const b = this._initFlushCoordinator();
      ((h[this._sdkKey] = this),
        d ||
          (0, n._subscribeToVisiblityChanged)((I) => {
            I === "background"
              ? wi._safeFlushAndForget(this._sdkKey)
              : I === "foreground" && b.startScheduledFlushCycle();
          }),
        b.loadAndRetryShutdownFailedEvents().catch((I) => {
          g.Log.warn("Failed to load failed shutdown events:", I);
        }),
        b.startScheduledFlushCycle());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        ((this._isShuttingDown = !0),
          this._flushCoordinator && (yield this._flushCoordinator.processShutdown()),
          delete h[this._sdkKey],
          (this._flushCoordinator = null),
          (this._pendingEvents = null),
          (this._batchQueue = null));
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if (this._flushCoordinator) return this._flushCoordinator.processManualFlush();
      });
    }
    appendAndResetNonExposedChecks() {
      if (Object.keys(this._nonExposedChecks).length === 0) return;
      const f = Object.assign({}, this._nonExposedChecks);
      this._nonExposedChecks = {};
      const d = this._normalizeEvent({
        eventName: "statsig::non_exposed_checks",
        user: null,
        time: Date.now(),
        metadata: { checks: f },
      });
      this._flushCoordinator && this._flushCoordinator.addEvent(d);
    }
    _shouldLogEvent(f) {
      var d;
      if (
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always" &&
        (0, s._isServerEnv)()
      )
        return !1;
      if (!(0, a._isExposureEvent)(f)) return !0;
      const b = f.user ? f.user : { statsigEnvironment: void 0 },
        I = (0, u._getUserStorageKey)(this._sdkKey, b),
        C = f.metadata ? f.metadata : {},
        M = [
          f.eventName,
          I,
          C.gate,
          C.config,
          C.ruleID,
          C.allocatedExperiment,
          C.parameterName,
          String(C.isExplicitParameter),
          C.reason,
        ].join("|"),
        L = this._lastExposureTimeMap[M],
        A = Date.now();
      return L && A - L < l
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > t && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[M] = A),
          !0);
    }
    _getCurrentPageUrl() {
      var f;
      if (
        ((f = this._options) === null || f === void 0
          ? void 0
          : f.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, s._getCurrentPageUrlSafe)();
    }
    _getStorageKey() {
      return (
        this._storageKey ||
          (this._storageKey = `statsig.pending_events.${(0, _._DJB2)(this._sdkKey)}`),
        this._storageKey
      );
    }
    _initFlushCoordinator() {
      var f, d;
      if (this._flushCoordinator) return this._flushCoordinator;
      const b =
        (d = (f = this._options) === null || f === void 0 ? void 0 : f.loggingBufferMaxSize) !==
          null && d !== void 0
          ? d
          : E.EventRetryConstants.DEFAULT_BATCH_SIZE;
      return (
        (this._pendingEvents = new y.PendingEvents(b)),
        (this._batchQueue = new m.BatchQueue(b)),
        (this._flushCoordinator = new v.FlushCoordinator(
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
        this._pendingCompressionMode &&
          (this._flushCoordinator.setLogEventCompressionMode(this._pendingCompressionMode),
          (this._pendingCompressionMode = null)),
        this._flushCoordinator
      );
    }
    _storeEventToStorage(f) {
      const d = this._getStorageKey();
      try {
        let b = this._getEventsFromStorage(d);
        (b.push(f),
          b.length > E.EventRetryConstants.MAX_LOCAL_STORAGE &&
            (b = b.slice(-E.EventRetryConstants.MAX_LOCAL_STORAGE)),
          (0, r._setObjectInStorage)(d, b));
      } catch {
        g.Log.warn("Unable to save events to storage");
      }
    }
    _getEventsFromStorage(f) {
      try {
        const d = (0, r._getObjectFromStorage)(f);
        return Array.isArray(d) ? d : [];
      } catch {
        return [];
      }
    }
    _loadStoredEvents() {
      const f = this._getStorageKey(),
        d = this._getEventsFromStorage(f);
      return (d.length > 0 && r.Storage.removeItem(f), d);
    }
    _normalizeEvent(f) {
      f.user && ((f.user = Object.assign({}, f.user)), delete f.user.privateAttributes);
      const d = {},
        b = this._getCurrentPageUrl();
      return (
        b && (d.statsigMetadata = { currentPage: b }),
        Object.assign(Object.assign({}, f), d)
      );
    }
  };
  return ((Ce.EventLogger = c), Ce);
}
var ut = {},
  xr;
function to() {
  if (xr) return ut;
  ((xr = 1),
    Object.defineProperty(ut, "__esModule", { value: !0 }),
    (ut.PrecomputedEvaluationsContextHandle = void 0));
  const e = q(),
    m = le(),
    u = ft(),
    E = vt();
  class v {
    constructor(g, S, y, s, a, i) {
      ((this._sdkKey = g),
        (this._getOptions = S),
        (this._getErrorBoundary = y),
        (this._getValues = s),
        (this._getUser = a),
        (this._getSdkInstanceID = i));
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
      let g = (0, m._cloneObject)("StatsigUser", this._getUser());
      return (g == null && (e.Log.error("Failed to clone user"), (g = {})), g);
    }
    getSession(g = !0) {
      return u.StatsigSession.get(this._sdkKey, g);
    }
    get stableID() {
      return E.StableID.get(this._sdkKey);
    }
    get sdkInstanceID() {
      return this._getSdkInstanceID();
    }
    toContext(g = !0) {
      return {
        sdkKey: this.sdkKey,
        options: this.options,
        values: this.values,
        user: this.user,
        errorBoundary: this.errorBoundary,
        session: this.getSession(g),
        stableID: this.stableID,
        sdkInstanceID: this.sdkInstanceID,
      };
    }
  }
  return ((ut.PrecomputedEvaluationsContextHandle = v), ut);
}
var oe = {},
  se = {},
  Vr;
function Di() {
  if (Vr) return se;
  ((Vr = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se._getUnitIDFromUser = se._getFullUserHash = se._normalizeUser = void 0));
  const e = qe(),
    m = q(),
    u = le();
  function E(g, S, y) {
    const s = (0, u._cloneObject)("StatsigUser", g);
    return s == null
      ? (m.Log.error("Failed to clone user"), { statsigEnvironment: void 0 })
      : (S != null && S.environment != null
          ? (s.statsigEnvironment = S.environment)
          : y != null && (s.statsigEnvironment = { tier: y }),
        s);
  }
  se._normalizeUser = E;
  function v(g) {
    return g ? (0, e._DJB2Object)(g) : null;
  }
  se._getFullUserHash = v;
  function _(g, S) {
    var y, s, a;
    if (typeof S != "string") return g.userID;
    const i = S.toLowerCase();
    return i !== "userid"
      ? (s = (y = g.customIDs) === null || y === void 0 ? void 0 : y[S]) !== null && s !== void 0
        ? s
        : (a = g.customIDs) === null || a === void 0
          ? void 0
          : a[i]
      : g.userID;
  }
  return ((se._getUnitIDFromUser = _), se);
}
var ct = {},
  zr;
function Ci() {
  if (zr) return ct;
  ((zr = 1), Object.defineProperty(ct, "__esModule", { value: !0 }), (ct._typedJsonParse = void 0));
  const e = q();
  function m(u, E, v) {
    try {
      const _ = JSON.parse(u);
      if (_ && typeof _ == "object" && E in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((ct._typedJsonParse = m), ct);
}
var Jr;
function no() {
  if (Jr) return oe;
  Jr = 1;
  var e =
    (oe && oe.__awaiter) ||
    function (r, o, n, t) {
      function l(h) {
        return h instanceof n
          ? h
          : new n(function (c) {
              c(h);
            });
      }
      return new (n || (n = Promise))(function (h, c) {
        function w(b) {
          try {
            d(t.next(b));
          } catch (I) {
            c(I);
          }
        }
        function f(b) {
          try {
            d(t.throw(b));
          } catch (I) {
            c(I);
          }
        }
        function d(b) {
          b.done ? h(b.value) : l(b.value).then(w, f);
        }
        d((t = t.apply(r, o || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe._makeDataAdapterResult = oe.DataAdapterCore = void 0));
  const m = q(),
    u = vt(),
    E = Di(),
    v = ae(),
    _ = Ci(),
    g = 10,
    S = 8;
  let y = class {
    constructor(o, n) {
      ((this._adapterName = o),
        (this._cacheSuffix = n),
        (this._options = null),
        (this._sdkKey = null),
        (this._cacheLimit = g),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${n}`),
        (this._inMemoryCache = new a()));
    }
    attach(o, n, t) {
      ((this._sdkKey = o), (this._options = n));
    }
    getDataSync(o) {
      const n = o && (0, E._normalizeUser)(o, this._options),
        t = this._getCacheKey(n),
        l = this._inMemoryCache.get(t, n);
      if (l && this._getIsCacheValueValid(l)) return l;
      const h = this._loadFromCache(t);
      return h && this._getIsCacheValueValid(h)
        ? (this._inMemoryCache.add(t, h, this._cacheLimit), this._inMemoryCache.get(t, n))
        : null;
    }
    setData(o, n) {
      const t = n && (0, E._normalizeUser)(n, this._options),
        l = this._getCacheKey(t);
      this._inMemoryCache.add(l, s("Bootstrap", o, null, t), this._cacheLimit);
    }
    _getIsCacheValueValid(o) {
      return o.stableID == null || o.stableID === u.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(o, n, t) {
      return e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const l = o ?? this.getDataSync(n),
          h = [this._fetchAndPrepFromNetwork(l, n, t)];
        return (
          t?.timeoutMs &&
            h.push(
              new Promise((c) => setTimeout(c, t.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(h)
        );
      });
    }
    _prefetchDataImpl(o, n) {
      return e(this, void 0, void 0, function* () {
        const t = o && (0, E._normalizeUser)(o, this._options),
          l = this._getCacheKey(t),
          h = yield this._getDataAsyncImpl(null, t, n);
        h &&
          this._inMemoryCache.add(
            l,
            Object.assign(Object.assign({}, h), { source: "Prefetch" }),
            this._cacheLimit,
          );
      });
    }
    _fetchAndPrepFromNetwork(o, n, t) {
      return e(this, void 0, void 0, function* () {
        var l;
        const h = (l = o?.data) !== null && l !== void 0 ? l : null,
          c = o != null && this._isCachedResultValidFor204(o, n),
          w = yield this._fetchFromNetwork(h, n, t, c);
        if (!w) return (m.Log.debug("No response returned for latest value"), null);
        const f = (0, _._typedJsonParse)(w, "has_updates", "Response"),
          d = this._getSdkKey(),
          b = u.StableID.get(d);
        let I = null;
        if (f?.has_updates === !0) I = s("Network", w, b, n);
        else if (h && f?.has_updates === !1) I = s("NetworkNotModified", h, b, n);
        else return null;
        const C = this._getCacheKey(n);
        return (this._inMemoryCache.add(C, I, this._cacheLimit), this._writeToCache(C, I), I);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(o) {
      var n;
      const t = (n = v.Storage.getItem) === null || n === void 0 ? void 0 : n.call(v.Storage, o);
      if (t == null) return null;
      const l = (0, _._typedJsonParse)(t, "source", "Cached Result");
      return l ? Object.assign(Object.assign({}, l), { source: "Cache" }) : null;
    }
    _writeToCache(o, n) {
      const t = JSON.stringify(n);
      for (let l = 0; l < S; l++)
        try {
          v.Storage.setItem(o, t);
          break;
        } catch (h) {
          if (
            !(h instanceof Error) ||
            !(
              h.toString().includes("QuotaExceededError") ||
              h.toString().includes("QUOTA_EXCEEDED_ERR")
            ) ||
            this._cacheLimit <= 1
          )
            throw h;
          ((this._cacheLimit = Math.ceil(this._cacheLimit / 2)),
            this._runLocalStorageCacheEviction(o, this._cacheLimit - 1));
        }
      this._runLocalStorageCacheEviction(o);
    }
    _runLocalStorageCacheEviction(o, n = this._cacheLimit) {
      var t;
      const l =
        (t = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && t !== void 0
          ? t
          : {};
      l[o] = Date.now();
      const h = i(l, n);
      for (const c of h) (delete l[c], v.Storage.removeItem(c));
      (0, v._setObjectInStorage)(this._lastModifiedStoreKey, l);
    }
  };
  oe.DataAdapterCore = y;
  function s(r, o, n, t) {
    return {
      source: r,
      data: o,
      receivedAt: Date.now(),
      stableID: n,
      fullUserHash: (0, E._getFullUserHash)(t),
    };
  }
  oe._makeDataAdapterResult = s;
  class a {
    constructor() {
      this._data = {};
    }
    get(o, n) {
      var t;
      const l = this._data[o],
        h = l?.stableID,
        c = (t = n?.customIDs) === null || t === void 0 ? void 0 : t.stableID;
      return c && h && c !== h
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : l;
    }
    add(o, n, t) {
      const l = i(this._data, t - 1);
      for (const h of l) delete this._data[h];
      this._data[o] = n;
    }
    merge(o) {
      this._data = Object.assign(Object.assign({}, this._data), o);
    }
  }
  function i(r, o) {
    const n = Object.keys(r);
    return n.length <= o
      ? []
      : o === 0
        ? n
        : n
            .sort((t, l) => {
              const h = r[t],
                c = r[l];
              return typeof h == "object" && typeof c == "object"
                ? h.receivedAt - c.receivedAt
                : h - c;
            })
            .slice(0, n.length - o);
  }
  return oe;
}
var tn = {},
  Wr;
function ro() {
  return (Wr || ((Wr = 1), Object.defineProperty(tn, "__esModule", { value: !0 })), tn);
}
var dt = {},
  Qr;
function ki() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        var m =
          (dt && dt.__awaiter) ||
          function (i, r, o, n) {
            function t(l) {
              return l instanceof o
                ? l
                : new o(function (h) {
                    h(l);
                  });
            }
            return new (o || (o = Promise))(function (l, h) {
              function c(d) {
                try {
                  f(n.next(d));
                } catch (b) {
                  h(b);
                }
              }
              function w(d) {
                try {
                  f(n.throw(d));
                } catch (b) {
                  h(b);
                }
              }
              function f(d) {
                d.done ? l(d.value) : t(d.value).then(c, w);
              }
              f((n = n.apply(i, r || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const u = q(),
          E = En(),
          v = St();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        let g = class {
          constructor(r, o, n, t) {
            ((this._sdkKey = r),
              (this._options = o),
              (this._emitter = n),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(r, o) {
            try {
              const n = r;
              s(n).forEach((t) => {
                const l = n[t];
                "$EB" in l ||
                  ((n[t] = (...h) => this._capture(o ? `${o}:${t}` : t, () => l.apply(r, h))),
                  (n[t].$EB = !0));
              });
            } catch (n) {
              this._onError("eb:wrap", n);
            }
          }
          logError(r, o) {
            this._onError(r, o);
          }
          logDroppedEvents(r, o, n) {
            const t = { eventCount: String(r) };
            (n &&
              Object.keys(n).forEach((l) => {
                t[l] = String(n[l]);
              }),
              this._onError("statsig::log_event_dropped_event_count", new Error(o), !0, t));
          }
          logEventRequestFailure(r, o, n, t, l) {
            const h = {
              eventCount: String(r),
              flushType: n,
              statusCode: String(t),
              reason: o,
              retries: String(l),
            };
            this._onError("statsig::log_event_failed", new Error(o), !0, h);
          }
          getLastSeenErrorAndReset() {
            const r = this._lastSeenError;
            return ((this._lastSeenError = void 0), r ?? null);
          }
          attachErrorIfNoneExists(r) {
            this._lastSeenError || (this._lastSeenError = S(r));
          }
          _capture(r, o) {
            try {
              const n = o();
              return n && n instanceof Promise ? n.catch((t) => this._onError(r, t)) : n;
            } catch (n) {
              return (this._onError(r, n), null);
            }
          }
          _onError(r, o, n = !1, t) {
            try {
              (u.Log.warn(`Caught error in ${r}`, { error: o }),
                m(this, void 0, void 0, function* () {
                  var h, c, w, f, d, b, I;
                  const C = o || Error(_),
                    M = C instanceof Error,
                    L = M ? C.name : "No Name",
                    A = S(C);
                  if (((this._lastSeenError = A), !n && this._seen.has(L))) return;
                  if (
                    (this._seen.add(L),
                    !(
                      (c =
                        (h = this._options) === null || h === void 0 ? void 0 : h.networkConfig) ===
                        null || c === void 0
                    ) && c.preventAllNetworkTraffic)
                  ) {
                    (w = this._emitter) === null ||
                      w === void 0 ||
                      w.call(this, { name: "error", error: o, tag: r });
                    return;
                  }
                  const x = E.SDKType._get(this._sdkKey),
                    N = v.StatsigMetadataProvider.get(),
                    B = M ? C.stack : y(C),
                    k = Object.assign(
                      Object.assign(
                        { tag: r, exception: L, info: B, statsigOptions: a(this._options) },
                        Object.assign(Object.assign({}, N), { sdkType: x }),
                      ),
                      t ?? {},
                    );
                  (yield (
                    (b =
                      (d =
                        (f = this._options) === null || f === void 0 ? void 0 : f.networkConfig) ===
                        null || d === void 0
                        ? void 0
                        : d.networkOverrideFunc) !== null && b !== void 0
                      ? b
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(x),
                      "STATSIG-SDK-VERSION": String(N.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(k),
                  }),
                    (I = this._emitter) === null ||
                      I === void 0 ||
                      I.call(this, { name: "error", error: o, tag: r }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = g;
        function S(i) {
          return i instanceof Error
            ? i
            : typeof i == "string"
              ? new Error(i)
              : new Error("An unknown error occurred.");
        }
        function y(i) {
          try {
            return JSON.stringify(i);
          } catch {
            return _;
          }
        }
        function s(i) {
          const r = new Set();
          let o = Object.getPrototypeOf(i);
          for (; o && o !== Object.prototype; )
            (Object.getOwnPropertyNames(o)
              .filter((n) => typeof o?.[n] == "function")
              .forEach((n) => r.add(n)),
              (o = Object.getPrototypeOf(o)));
          return Array.from(r);
        }
        function a(i) {
          if (!i) return {};
          const r = {};
          return (
            Object.keys(i).forEach((o) => {
              const n = o,
                t = i[n];
              switch (typeof t) {
                case "number":
                case "bigint":
                case "boolean":
                  r[String(n)] = t;
                  break;
                case "string":
                  t.length < 50 ? (r[String(n)] = t) : (r[String(n)] = "set");
                  break;
                case "object":
                  n === "environment"
                    ? (r.environment = t)
                    : n === "networkConfig"
                      ? (r.networkConfig = t)
                      : (r[String(n)] = t != null ? "set" : "unset");
                  break;
              }
            }),
            r
          );
        }
      })(dt)),
    dt
  );
}
var nn = {},
  Hr;
function io() {
  return (Hr || ((Hr = 1), Object.defineProperty(nn, "__esModule", { value: !0 })), nn);
}
var rn = {},
  Xr;
function oo() {
  return (Xr || ((Xr = 1), Object.defineProperty(rn, "__esModule", { value: !0 })), rn);
}
var on = {},
  Yr;
function so() {
  return (Yr || ((Yr = 1), Object.defineProperty(on, "__esModule", { value: !0 })), on);
}
var Ue = {},
  Zr;
function Oi() {
  if (Zr) return Ue;
  ((Zr = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.createMemoKey = Ue.MemoPrefix = void 0),
    (Ue.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    m = new Set(["userPersistedValues"]);
  function u(E, v, _) {
    let g = `${E}|${v}`;
    if (!_) return g;
    for (const S of Object.keys(_)) {
      if (m.has(S)) return;
      e.has(S) ? (g += `|${S}=true`) : (g += `|${S}=${_[S]}`);
    }
    return g;
  }
  return ((Ue.createMemoKey = u), Ue);
}
var sn = {},
  $r;
function ao() {
  return ($r || (($r = 1), Object.defineProperty(sn, "__esModule", { value: !0 })), sn);
}
var an = {},
  ei;
function lo() {
  return (ei || ((ei = 1), Object.defineProperty(an, "__esModule", { value: !0 })), an);
}
var ln = {},
  ti;
function uo() {
  return (
    ti ||
      ((ti = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e._fastApproxSizeOf = void 0));
        const m = 2,
          u = 1,
          E = (v, _) => {
            let g = 0;
            const S = Object.keys(v);
            for (let y = 0; y < S.length; y++) {
              const s = S[y],
                a = v[s];
              if (
                ((g += s.length),
                typeof a == "object" && a !== null
                  ? (g += (0, e._fastApproxSizeOf)(a, _) + m)
                  : (g += String(a).length + u),
                g >= _)
              )
                return g;
            }
            return g;
          };
        e._fastApproxSizeOf = E;
      })(ln)),
    ln
  );
}
var Ae = {},
  ni;
function co() {
  if (ni) return Ae;
  ni = 1;
  var e =
    (Ae && Ae.__awaiter) ||
    function (n, t, l, h) {
      function c(w) {
        return w instanceof l
          ? w
          : new l(function (f) {
              f(w);
            });
      }
      return new (l || (l = Promise))(function (w, f) {
        function d(C) {
          try {
            I(h.next(C));
          } catch (M) {
            f(M);
          }
        }
        function b(C) {
          try {
            I(h.throw(C));
          } catch (M) {
            f(M);
          }
        }
        function I(C) {
          C.done ? w(C.value) : c(C.value).then(d, b);
        }
        I((h = h.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.StatsigClientBase = void 0), Ne());
  const m = Ne(),
    u = ki(),
    E = Ii(),
    v = q(),
    _ = Oi(),
    g = le(),
    S = ft(),
    y = vt(),
    s = Dt(),
    a = ae(),
    i = 3e3;
  let r = class {
    constructor(t, l, h, c) {
      var w, f, d, b;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const I = this.$emt.bind(this);
      (c?.logLevel != null && (v.Log.level = c.logLevel),
        c?.disableStorage && a.Storage._setDisabled(!0),
        c?.initialSessionID && S.StatsigSession.overrideInitialSessionID(c.initialSessionID, t),
        c?.storageProvider && a.Storage._setProvider(c.storageProvider),
        c?.enableCookies && y.StableID._setCookiesEnabled(t, c.enableCookies),
        c?.disableStableID && y.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = c ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (w = c?.overrideAdapter) !== null && w !== void 0 ? w : null),
        (this._errorBoundary = new u.ErrorBoundary(t, c, I)),
        (this._logger = new E.EventLogger(t, I, h, c, this._errorBoundary)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        h.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, c, h),
        (this.storageProvider = a.Storage),
        (b =
          (d = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(f)) === null ||
          b === void 0 ||
          b.catch((C) => this._errorBoundary.logError("OA::loadFromStorage", C)),
        this._primeReadyRipcord(),
        o(t, this));
    }
    updateRuntimeOptions(t) {
      (t.loggingEnabled
        ? ((this._options.loggingEnabled = t.loggingEnabled),
          this._logger.setLoggingEnabled(t.loggingEnabled))
        : t.disableLogging != null &&
          ((this._options.disableLogging = t.disableLogging),
          this._logger.setLoggingEnabled(t.disableLogging ? "disabled" : "browser-only")),
        t.disableStorage != null &&
          ((this._options.disableStorage = t.disableStorage),
          a.Storage._setDisabled(t.disableStorage)),
        t.enableCookies != null &&
          ((this._options.enableCookies = t.enableCookies),
          y.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
        t.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode)
          : t.disableCompression &&
            this._logger.setLogEventCompressionMode(s.LogEventCompressionMode.Disabled));
    }
    flush() {
      return this._logger.flush();
    }
    shutdown() {
      return e(this, void 0, void 0, function* () {
        (this.$emt({ name: "pre_shutdown" }),
          this._setStatus("Uninitialized", null),
          (this._initializePromise = null),
          yield this._logger.stop());
      });
    }
    on(t, l) {
      (this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(l));
    }
    off(t, l) {
      if (this._listeners[t]) {
        const h = this._listeners[t].indexOf(l);
        h !== -1 && this._listeners[t].splice(h, 1);
      }
    }
    $on(t, l) {
      ((l.__isInternal = !0), this.on(t, l));
    }
    $emt(t) {
      var l;
      const h = (c) => {
        try {
          c(t);
        } catch (w) {
          if (c.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, w);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((c) => h(c)),
        (l = this._listeners["*"]) === null || l === void 0 || l.forEach(h));
    }
    _setStatus(t, l) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: l }));
    }
    _enqueueExposure(t, l, h) {
      if (h?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(l);
    }
    _memoize(t, l) {
      return (h, c) => {
        if (this._options.disableEvaluationMemoization) return l(h, c);
        const w = (0, _.createMemoKey)(t, h, c);
        return w
          ? (w in this._memoCache ||
              (Object.keys(this._memoCache).length >= i && (this._memoCache = {}),
              (this._memoCache[w] = l(h, c))),
            this._memoCache[w])
          : l(h, c);
      };
    }
  };
  Ae.StatsigClientBase = r;
  function o(n, t) {
    var l;
    if ((0, g._isServerEnv)()) return;
    const h = (0, m._getStatsigGlobal)(),
      c = (l = h.instances) !== null && l !== void 0 ? l : {},
      w = t;
    (c[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (c[n] = w),
      h.firstInstance || (h.firstInstance = w),
      (h.instances = c),
      (__STATSIG__ = h));
  }
  return Ae;
}
var _t = {},
  ri;
function _o() {
  return (
    ri ||
      ((ri = 1),
      Object.defineProperty(_t, "__esModule", { value: !0 }),
      (_t.DataAdapterCachePrefix = void 0),
      (_t.DataAdapterCachePrefix = "statsig.cached")),
    _t
  );
}
var un = {},
  ii;
function go() {
  return (ii || ((ii = 1), Object.defineProperty(un, "__esModule", { value: !0 })), un);
}
var Q = {},
  oi;
function ho() {
  if (oi) return Q;
  ((oi = 1),
    Object.defineProperty(Q, "__esModule", { value: !0 }),
    (Q._makeTypedGet =
      Q._mergeOverride =
      Q._makeLayer =
      Q._makeExperiment =
      Q._makeDynamicConfig =
      Q._makeFeatureGate =
        void 0));
  const e = q(),
    m = Sn();
  function u(s, a, i, r) {
    var o;
    return {
      name: s,
      details: a,
      ruleID: (o = i?.rule_id) !== null && o !== void 0 ? o : "",
      __evaluation: i,
      value: r,
    };
  }
  function E(s, a, i) {
    var r;
    return Object.assign(Object.assign({}, u(s, a, i, i?.value === !0)), {
      idType: (r = i?.id_type) !== null && r !== void 0 ? r : null,
    });
  }
  Q._makeFeatureGate = E;
  function v(s, a, i) {
    var r, o;
    const n = (r = i?.value) !== null && r !== void 0 ? r : {};
    return Object.assign(Object.assign({}, u(s, a, i, n)), {
      idType: (o = i?.id_type) !== null && o !== void 0 ? o : null,
      get: y(s, i?.value),
    });
  }
  Q._makeDynamicConfig = v;
  function _(s, a, i) {
    var r;
    const o = v(s, a, i);
    return Object.assign(Object.assign({}, o), {
      groupName: (r = i?.group_name) !== null && r !== void 0 ? r : null,
    });
  }
  Q._makeExperiment = _;
  function g(s, a, i, r) {
    var o, n;
    return Object.assign(Object.assign({}, u(s, a, i, void 0)), {
      get: y(s, i?.value, r),
      groupName: (o = i?.group_name) !== null && o !== void 0 ? o : null,
      __value: (n = i?.value) !== null && n !== void 0 ? n : {},
    });
  }
  Q._makeLayer = g;
  function S(s, a, i, r) {
    return Object.assign(Object.assign(Object.assign({}, s), a), { get: y(s.name, i, r) });
  }
  Q._mergeOverride = S;
  function y(s, a, i) {
    return (r, o) => {
      var n;
      const t = (n = a?.[r]) !== null && n !== void 0 ? n : null;
      return t == null
        ? (o ?? null)
        : o != null && !(0, m._isTypeMatch)(t, o)
          ? (e.Log.warn(
              `Parameter type mismatch. '${s}.${r}' was found to be type '${typeof t}' but fallback/return type is '${typeof o}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            o ?? null)
          : (i?.(r), t);
    };
  }
  return ((Q._makeTypedGet = y), Q);
}
var cn = {},
  si;
function fo() {
  return (si || ((si = 1), Object.defineProperty(cn, "__esModule", { value: !0 })), cn);
}
var Pe = {},
  ai;
function vo() {
  if (ai) return Pe;
  ((ai = 1),
    Object.defineProperty(Pe, "__esModule", { value: !0 }),
    (Pe.UPDATE_DETAIL_ERROR_MESSAGES = Pe.createUpdateDetails = void 0));
  const e = (m, u, E, v, _, g) => ({
    duration: E,
    source: u,
    success: m,
    error: v,
    sourceUrl: _,
    warnings: g,
  });
  return (
    (Pe.createUpdateDetails = e),
    (Pe.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    Pe
  );
}
var li;
function mo() {
  return (
    li ||
      ((li = 1),
      (function (e) {
        var m =
            (De && De.__createBinding) ||
            (Object.create
              ? function (s, a, i, r) {
                  r === void 0 && (r = i);
                  var o = Object.getOwnPropertyDescriptor(a, i);
                  ((!o || ("get" in o ? !a.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return a[i];
                      },
                    }),
                    Object.defineProperty(s, r, o));
                }
              : function (s, a, i, r) {
                  (r === void 0 && (r = i), (s[r] = a[i]));
                }),
          u =
            (De && De.__exportStar) ||
            function (s, a) {
              for (var i in s)
                i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && m(a, s, i);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          Ne());
        const E = Ne(),
          v = _n();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = Ii();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const g = q();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return g.Log;
          },
        });
        const S = St(),
          y = ae();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return y.Storage;
          },
        }),
          u(Ne(), e),
          u(It(), e),
          u(to(), e),
          u(no(), e),
          u(_n(), e),
          u(ro(), e),
          u(ki(), e),
          u(io(), e),
          u(oo(), e),
          u(qe(), e),
          u(so(), e),
          u(q(), e),
          u(Oi(), e),
          u(gt(), e),
          u(Ei(), e),
          u(ao(), e),
          u(lo(), e),
          u(le(), e),
          u(En(), e),
          u(ft(), e),
          u(uo(), e),
          u(vt(), e),
          u(co(), e),
          u(Si(), e),
          u(_o(), e),
          u(bi(), e),
          u(St(), e),
          u(Dt(), e),
          u(go(), e),
          u(ho(), e),
          u(fo(), e),
          u(Di(), e),
          u(ae(), e),
          u(Ci(), e),
          u(Sn(), e),
          u(pi(), e),
          u(bn(), e),
          u(ht(), e),
          u(vo(), e),
          u(yi(), e),
          Object.assign((0, E._getStatsigGlobal)(), { Log: g.Log, SDK_VERSION: S.SDK_VERSION }));
      })(De)),
    De
  );
}
var Ro = mo();
export { mo as a, So as r, Ro as s };
