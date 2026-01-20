import { c as ot } from "./lodash-vendor-Cp37rRJM.js";
var Y = {},
  Me = {},
  Le = {},
  st;
function A() {
  return (
    st ||
      ((st = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const S = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function _(p) {
          return (p.unshift("[Statsig]"), p);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class b {
          static info(...f) {
            b.level >= e.LogLevel.Info && console.info(c, ..._(f));
          }
          static debug(...f) {
            b.level >= e.LogLevel.Debug && console.debug(S, ..._(f));
          }
          static warn(...f) {
            b.level >= e.LogLevel.Warn && console.warn(y, ..._(f));
          }
          static error(...f) {
            b.level >= e.LogLevel.Error && console.error(v, ..._(f));
          }
        }
        ((e.Log = b), (b.level = e.LogLevel.Warn));
      })(Le)),
    Le
  );
}
var at;
function Q() {
  return (
    at ||
      ((at = 1),
      (function (e) {
        var S, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = A(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : i;
            } catch {
              return i;
            }
          };
        e._getStatsigGlobal = _;
        const b = (o) => (0, e._getStatsigGlobal)()[o];
        e._getStatsigGlobalFlag = b;
        const p = (o) => {
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
        e._getInstance = p;
        const f = "__STATSIG__",
          a = typeof window < "u" ? window : {},
          l = typeof ot < "u" ? ot : {},
          r = typeof globalThis < "u" ? globalThis : {},
          i =
            (y =
              (c = (S = a[f]) !== null && S !== void 0 ? S : l[f]) !== null && c !== void 0
                ? c
                : r[f]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((a[f] = i), (l[f] = i), (r[f] = i));
      })(Me)),
    Me
  );
}
var Pe = {},
  lt;
function Ye() {
  return (
    lt ||
      ((lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const S = new Map(),
          c = "start",
          y = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (a) => S.get(a),
          _markInitOverallStart: (a) => {
            p(a, _({}, c, "overall"));
          },
          _markInitOverallEnd: (a, l, r) => {
            p(
              a,
              _(
                {
                  success: l,
                  error: l ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: r,
                },
                y,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (a, l) => {
            p(a, _(l, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (a, l) => {
            p(a, _(l, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (a) => {
            p(a, _({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (a, l) => {
            p(a, _(l, y, "initialize", "process"));
          },
          _clearMarkers: (a) => {
            S.delete(a);
          },
          _formatError(a) {
            if (a && typeof a == "object")
              return { code: f(a, "code"), name: f(a, "name"), message: f(a, "message") };
          },
          _getDiagnosticsData(a, l, r, i) {
            var o;
            return {
              success: a?.ok === !0,
              statusCode: a?.status,
              sdkRegion:
                (o = a?.headers) === null || o === void 0 ? void 0 : o.get("x-statsig-region"),
              isDelta: r.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: l,
              error: e.Diagnostics._formatError(i),
            };
          },
          _enqueueDiagnosticsEvent(a, l, r, i) {
            const o = e.Diagnostics._getMarkers(r);
            if (o == null || o.length <= 0) return -1;
            const n = o[o.length - 1].timestamp - o[0].timestamp;
            e.Diagnostics._clearMarkers(r);
            const t = b(a, { context: "initialize", markers: o.slice(), statsigOptions: i });
            return (l.enqueue(t), n);
          },
        };
        function _(a, l, r, i) {
          return Object.assign({ key: r, action: l, step: i, timestamp: Date.now() }, a);
        }
        function b(a, l) {
          return { eventName: v, user: a, value: null, metadata: l, time: Date.now() };
        }
        function p(a, l) {
          var r;
          const i = (r = S.get(a)) !== null && r !== void 0 ? r : [];
          (i.push(l), S.set(a, i));
        }
        function f(a, l) {
          if (l in a) return a[l];
        }
      })(Pe)),
    Pe
  );
}
var Z = {},
  $ = {},
  Ne = {},
  ee = {},
  ut;
function Ze() {
  if (ut) return ee;
  ((ut = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee._isTypeMatch = ee._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  ee._typeOf = e;
  function S(c, y) {
    const v = (_) => (Array.isArray(_) ? "array" : typeof _);
    return v(c) === v(y);
  }
  return ((ee._isTypeMatch = S), ee);
}
var ct;
function ge() {
  return (
    ct ||
      ((ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const S = Ze(),
          c = (_) => {
            let b = 0;
            for (let p = 0; p < _.length; p++) {
              const f = _.charCodeAt(p);
              ((b = (b << 5) - b + f), (b = b & b));
            }
            return String(b >>> 0);
          };
        e._DJB2 = c;
        const y = (_, b) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, b)));
        e._DJB2Object = y;
        const v = (_, b) => {
          if (_ == null) return null;
          const p = Object.keys(_).sort(),
            f = {};
          return (
            p.forEach((a) => {
              const l = _[a];
              if (b === 0 || (0, S._typeOf)(l) !== "object") {
                f[a] = l;
                return;
              }
              f[a] = (0, e._getSortedObject)(l, b != null ? b - 1 : b);
            }),
            f
          );
        };
        e._getSortedObject = v;
      })(Ne)),
    Ne
  );
}
var dt;
function Oe() {
  if (dt) return $;
  ((dt = 1),
    Object.defineProperty($, "__esModule", { value: !0 }),
    ($._getStorageKey = $._getUserStorageKey = void 0));
  const e = ge();
  function S(y, v, _) {
    var b;
    if (_) return _(y, v);
    const p = v && v.customIDs ? v.customIDs : {},
      f = [
        `uid:${(b = v?.userID) !== null && b !== void 0 ? b : ""}`,
        `cids:${Object.keys(p)
          .sort((a, l) => a.localeCompare(l))
          .map((a) => `${a}-${p[a]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(f.join("|"));
  }
  $._getUserStorageKey = S;
  function c(y, v, _) {
    return v ? S(y, v, _) : (0, e._DJB2)(`k:${y}`);
  }
  return (($._getStorageKey = c), $);
}
var Ae = {},
  _t;
function Ce() {
  return (
    _t ||
      ((_t = 1),
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
      })(Ae)),
    Ae
  );
}
var je = {},
  gt;
function le() {
  return (
    gt ||
      ((gt = 1),
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
        const S = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = S;
        const c = () => {
          var f;
          const a = (0, e._getWindowSafe)();
          return (f = a?.document) !== null && f !== void 0 ? f : null;
        };
        e._getDocumentSafe = c;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const f =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || f;
        };
        e._isServerEnv = y;
        const v = (f, a) => {
          const l = (0, e._getWindowSafe)();
          typeof l?.addEventListener == "function" && l.addEventListener(f, a);
        };
        e._addWindowEventListenerSafe = v;
        const _ = (f, a) => {
          const l = (0, e._getDocumentSafe)();
          typeof l?.addEventListener == "function" && l.addEventListener(f, a);
        };
        e._addDocumentEventListenerSafe = _;
        const b = () => {
          var f;
          try {
            return (f = (0, e._getWindowSafe)()) === null || f === void 0
              ? void 0
              : f.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = b;
        const p = () => {
          const f = (0, e._getWindowSafe)();
          return f && "onpagehide" in f ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = p;
      })(je)),
    je
  );
}
var q = {},
  ft;
function Qt() {
  if (ft) return q;
  ((ft = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q._createLayerParameterExposure =
      q._createConfigExposure =
      q._mapExposures =
      q._createGateExposure =
      q._isExposureEvent =
        void 0));
  const e = "statsig::config_exposure",
    S = "statsig::gate_exposure",
    c = "statsig::layer_exposure",
    y = (l, r, i, o, n) => (
      i.bootstrapMetadata && (o.bootstrapMetadata = i.bootstrapMetadata),
      {
        eventName: l,
        user: r,
        value: null,
        metadata: a(i, o),
        secondaryExposures: n,
        time: Date.now(),
      }
    ),
    v = ({ eventName: l }) => l === S || l === e || l === c;
  q._isExposureEvent = v;
  const _ = (l, r, i) => {
    var o, n, t;
    const u = { gate: r.name, gateValue: String(r.value), ruleID: r.ruleID };
    return (
      ((o = r.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (u.configVersion = r.__evaluation.version),
      y(
        S,
        l,
        r.details,
        u,
        b(
          (t = (n = r.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          i,
        ),
      )
    );
  };
  q._createGateExposure = _;
  function b(l, r) {
    return l.map((i) => (typeof i == "string" ? (r ?? {})[i] : i)).filter((i) => i != null);
  }
  q._mapExposures = b;
  const p = (l, r, i) => {
    var o, n, t, u;
    const g = { config: r.name, ruleID: r.ruleID };
    return (
      ((o = r.__evaluation) === null || o === void 0 ? void 0 : o.version) != null &&
        (g.configVersion = r.__evaluation.version),
      ((n = r.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (g.rulePassed = String(r.__evaluation.passed)),
      y(
        e,
        l,
        r.details,
        g,
        b(
          (u = (t = r.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && u !== void 0
            ? u
            : [],
          i,
        ),
      )
    );
  };
  q._createConfigExposure = p;
  const f = (l, r, i, o) => {
    var n, t, u, g, s, E;
    const w = r.__evaluation,
      d = ((n = w?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(i)) === !0;
    let h = "",
      k = (t = w?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    d &&
      ((h = (u = w.allocated_experiment_name) !== null && u !== void 0 ? u : ""),
      (k = w.secondary_exposures));
    const D = (g = r.__evaluation) === null || g === void 0 ? void 0 : g.parameter_rule_ids,
      C = {
        config: r.name,
        parameterName: i,
        ruleID: (s = D?.[i]) !== null && s !== void 0 ? s : r.ruleID,
        allocatedExperiment: h,
        isExplicitParameter: String(d),
      };
    return (
      ((E = r.__evaluation) === null || E === void 0 ? void 0 : E.version) != null &&
        (C.configVersion = r.__evaluation.version),
      y(c, l, r.details, C, b(k, o))
    );
  };
  q._createLayerParameterExposure = f;
  const a = (l, r) => (
    (r.reason = l.reason),
    l.lcut && (r.lcut = String(l.lcut)),
    l.receivedAt && (r.receivedAt = String(l.receivedAt)),
    r
  );
  return q;
}
var te = {},
  vt;
function Te() {
  return (
    vt ||
      ((vt = 1),
      Object.defineProperty(te, "__esModule", { value: !0 }),
      (te.LoggingEnabledOption = te.LogEventCompressionMode = void 0),
      (te.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (te.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    te
  );
}
var Fe = {},
  ht;
function X() {
  return (
    ht ||
      ((ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const S = A(),
          c = le(),
          y = {},
          v = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (r) => (y[r] ? y[r] : null),
            setItem: (r, i) => {
              y[r] = i;
            },
            removeItem: (r) => {
              delete y[r];
            },
            getAllKeys: () => Object.keys(y),
          };
        let _ = null;
        try {
          const r = (0, c._getWindowSafe)();
          r &&
            r.localStorage &&
            typeof r.localStorage.getItem == "function" &&
            (_ = {
              isReady: () => !0,
              isReadyResolver: () => null,
              getProviderName: () => "LocalStorage",
              getItem: (i) => r.localStorage.getItem(i),
              setItem: (i, o) => r.localStorage.setItem(i, o),
              removeItem: (i) => r.localStorage.removeItem(i),
              getAllKeys: () => Object.keys(r.localStorage),
            });
        } catch {
          S.Log.warn("Failed to setup localStorageProvider.");
        }
        let b = _ ?? v,
          p = b;
        function f(r) {
          try {
            return r();
          } catch (i) {
            if (i instanceof Error && i.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            if (i instanceof Error && i.name === "QuotaExceededError") {
              const n = e.Storage.getAllKeys().filter((t) => t.startsWith("statsig."));
              i.message = `${i.message}. Statsig Keys: ${n.length}`;
            }
            throw i;
          }
        }
        e.Storage = {
          isReady: () => p.isReady(),
          isReadyResolver: () => p.isReadyResolver(),
          getProviderName: () => p.getProviderName(),
          getItem: (r) => f(() => p.getItem(r)),
          setItem: (r, i) => f(() => p.setItem(r, i)),
          removeItem: (r) => p.removeItem(r),
          getAllKeys: () => p.getAllKeys(),
          _setProvider: (r) => {
            ((b = r), (p = r));
          },
          _setDisabled: (r) => {
            r ? (p = v) : (p = b);
          },
        };
        function a(r) {
          const i = e.Storage.getItem(r);
          return JSON.parse(i ?? "null");
        }
        e._getObjectFromStorage = a;
        function l(r, i) {
          e.Storage.setItem(r, JSON.stringify(i));
        }
        e._setObjectInStorage = l;
      })(Fe)),
    Fe
  );
}
var he = {},
  yt;
function Xt() {
  if (yt) return he;
  ((yt = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he.UrlConfiguration = void 0));
  const e = ge(),
    S = Ce(),
    c = {
      [S.Endpoint._initialize]: "i",
      [S.Endpoint._rgstr]: "e",
      [S.Endpoint._download_config_specs]: "d",
    };
  let y = class {
    constructor(_, b, p, f) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = c[_]),
        b && (this.customUrl = b),
        !b && p && (this.customUrl = p.endsWith("/") ? `${p}${_}` : `${p}/${_}`),
        f && (this.fallbackUrls = f));
      const a = S.NetworkDefault[_];
      this.defaultUrl = `${a}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const b = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + b);
    }
  };
  return ((he.UrlConfiguration = y), he);
}
var qe = {},
  mt;
function $e() {
  return (
    mt ||
      ((mt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const S = le(),
          c = "foreground",
          y = "background",
          v = [];
        let _ = c,
          b = !1;
        const p = () => _ === c;
        e._isCurrentlyVisible = p;
        const f = () => b;
        e._isUnloading = f;
        const a = (r) => {
          v.unshift(r);
        };
        e._subscribeToVisiblityChanged = a;
        const l = (r) => {
          r !== _ && ((_ = r), v.forEach((i) => i(r)));
        };
        ((e._notifyVisibilityChanged = l),
          (0, S._addWindowEventListenerSafe)("focus", () => {
            ((b = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, S._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, S._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : y);
          }),
          (0, S._addWindowEventListenerSafe)((0, S._getUnloadEvent)(), () => {
            ((b = !0), (0, e._notifyVisibilityChanged)(y));
          }));
      })(qe)),
    qe
  );
}
var St;
function Yt() {
  if (St) return Z;
  St = 1;
  var e =
    (Z && Z.__awaiter) ||
    function (w, d, h, k) {
      function D(C) {
        return C instanceof h
          ? C
          : new h(function (L) {
              L(C);
            });
      }
      return new (h || (h = Promise))(function (C, L) {
        function M(B) {
          try {
            H(k.next(B));
          } catch (O) {
            L(O);
          }
        }
        function x(B) {
          try {
            H(k.throw(B));
          } catch (O) {
            L(O);
          }
        }
        function H(B) {
          B.done ? C(B.value) : D(B.value).then(M, x);
        }
        H((k = k.apply(w, d || [])).next());
      });
    };
  (Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.EventLogger = void 0));
  const S = Oe(),
    c = ge(),
    y = A(),
    v = Ce(),
    _ = le(),
    b = Qt(),
    p = Te(),
    f = X(),
    a = Xt(),
    l = $e(),
    r = 100,
    i = 1e4,
    o = 1e3,
    n = 6e5,
    t = 500,
    u = 200,
    g = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  let E = class _e {
    static _safeFlushAndForget(d) {
      var h;
      (h = g[d]) === null || h === void 0 || h.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(d) {
      var h;
      (h = g[d]) === null || h === void 0 || h._retryFailedLogs(s.GainedFocus);
    }
    constructor(d, h, k, D) {
      var C, L;
      ((this._sdkKey = d),
        (this._emitter = h),
        (this._network = k),
        (this._options = D),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = D?.loggingEnabled) !== null && C !== void 0
            ? C
            : D?.disableLogging === !0
              ? p.LoggingEnabledOption.disabled
              : p.LoggingEnabledOption.browserOnly),
        D?.loggingEnabled &&
          D.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = D?.loggingBufferMaxSize) !== null && L !== void 0 ? L : r));
      const M = D?.networkConfig;
      this._logEventUrlConfig = new a.UrlConfiguration(
        v.Endpoint._rgstr,
        M?.logEventUrl,
        M?.api,
        M?.logEventFallbackUrls,
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
        this._queue.length > this._maxQueueSize && _e._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(d) {
      var h;
      const k = (h = this._nonExposedChecks[d]) !== null && h !== void 0 ? h : 0;
      this._nonExposedChecks[d] = k + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var d;
      const h = (0, _._isServerEnv)();
      (h &&
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always") ||
        ((g[this._sdkKey] = this),
        h ||
          (0, l._subscribeToVisiblityChanged)((k) => {
            k === "background"
              ? _e._safeFlushAndForget(this._sdkKey)
              : k === "foreground" && _e._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(s.Startup),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete g[this._sdkKey],
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
        !(Date.now() - this._creationTime > u) &&
          setTimeout(() => _e._safeFlushAndForget(this._sdkKey), u));
    }
    _shouldLogEvent(d) {
      var h;
      if (
        ((h = this._options) === null || h === void 0 ? void 0 : h.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, b._isExposureEvent)(d)) return !0;
      const k = d.user ? d.user : { statsigEnvironment: void 0 },
        D = (0, S._getUserStorageKey)(this._sdkKey, k),
        C = d.metadata ? d.metadata : {},
        L = [
          d.eventName,
          D,
          C.gate,
          C.config,
          C.ruleID,
          C.allocatedExperiment,
          C.parameterName,
          String(C.isExplicitParameter),
          C.reason,
        ].join("|"),
        M = this._lastExposureTimeMap[L],
        x = Date.now();
      return M && x - M < n
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > o && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[L] = x),
          !0);
    }
    _sendEvents(d) {
      return e(this, void 0, void 0, function* () {
        var h, k;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(d), !1);
        try {
          const C =
            (0, l._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((k = (h = this._options) === null || h === void 0 ? void 0 : h.networkConfig) ===
              null || k === void 0
              ? void 0
              : k.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: d }),
            (C ? this._sendEventsViaBeacon(d) : yield this._sendEventsViaPost(d)).success
              ? (this._emitter({ name: "logs_flushed", events: d }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(d), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(d) {
      return e(this, void 0, void 0, function* () {
        var h;
        const k = yield this._network.post(this._getRequestData(d)),
          D = (h = k?.code) !== null && h !== void 0 ? h : -1;
        return { success: D >= 200 && D < 300 };
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
      const h = this._getStorageKey();
      try {
        (0, f._setObjectInStorage)(h, d);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(d) {
      const h = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        f.Storage.isReady() || (yield f.Storage.isReadyResolver());
        const k = (0, f._getObjectFromStorage)(h);
        if (!k) return;
        (d === s.Startup && f.Storage.removeItem(h),
          (yield this._sendEvents(k)) && d === s.GainedFocus && f.Storage.removeItem(h));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(d) {
      d.user && ((d.user = Object.assign({}, d.user)), delete d.user.privateAttributes);
      const h = {},
        k = this._getCurrentPageUrl();
      k && (h.statsigMetadata = { currentPage: k });
      const D = Object.assign(Object.assign({}, d), h);
      (y.Log.debug("Enqueued Event:", D), this._queue.push(D));
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
      var d, h;
      const k =
          (h = (d = this._options) === null || d === void 0 ? void 0 : d.loggingIntervalMs) !==
            null && h !== void 0
            ? h
            : i,
        D = setInterval(() => {
          const C = g[this._sdkKey];
          !C || C._flushIntervalId !== D ? clearInterval(D) : _e._safeFlushAndForget(this._sdkKey);
        }, k);
      this._flushIntervalId = D;
    }
  };
  return ((Z.EventLogger = E), Z);
}
var Ke = {},
  bt;
function Ie() {
  return (
    bt ||
      ((bt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.18.2"));
        let S = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => S,
          add: (c) => {
            S = Object.assign(Object.assign({}, S), c);
          },
        };
      })(Ke)),
    Ke
  );
}
var Be = {},
  Et;
function sn() {
  return (Et || ((Et = 1), Object.defineProperty(Be, "__esModule", { value: !0 })), Be);
}
var z = {},
  ye = {},
  me = {},
  pt;
function et() {
  if (pt) return me;
  ((pt = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let S = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          S > 0
            ? ((_ = ((S + _) % 16) | 0), (S = Math.floor(S / 16)))
            : ((_ = ((c + _) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((me.getUUID = e), me);
}
var wt;
function Re() {
  if (wt) return ye;
  ((wt = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.StableID = void 0));
  const e = Oe(),
    S = A(),
    c = le(),
    y = X(),
    v = et(),
    _ = {},
    b = {},
    p = {};
  ye.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (p[n]) return null;
      if (_[n] != null) return _[n];
      let t = null;
      return (
        (t = r(n)),
        t != null
          ? ((_[n] = t), a(t, n), t)
          : ((t = l(n)), t == null && (t = (0, v.getUUID)()), a(t, n), i(t, n), (_[n] = t), t)
      );
    },
    setOverride: (n, t) => {
      ((_[t] = n), a(n, t), i(n, t));
    },
    _setCookiesEnabled: (n, t) => {
      b[n] = t;
    },
    _setDisabled: (n, t) => {
      p[n] = t;
    },
  };
  function f(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  function a(n, t) {
    const u = f(t);
    try {
      (0, y._setObjectInStorage)(u, n);
    } catch {
      S.Log.warn("Failed to save StableID to storage");
    }
  }
  function l(n) {
    const t = f(n);
    return (0, y._getObjectFromStorage)(t);
  }
  function r(n) {
    if (!b[n] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const u of t) {
      const [g, s] = u.trim().split("=");
      if (g === o(n)) return decodeURIComponent(s);
    }
    return null;
  }
  function i(n, t) {
    if (!b[t] || !document) return;
    const u = new Date();
    (u.setFullYear(u.getFullYear() + 1),
      (document.cookie = `${o(t)}=${encodeURIComponent(n)}; expires=${u.toUTCString()}; path=/`));
  }
  function o(n) {
    return `statsig.stable_id.${(0, e._getStorageKey)(n)}`;
  }
  return ye;
}
var ne = {},
  kt;
function Zt() {
  if (kt) return ne;
  ((kt = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._getFullUserHash = ne._normalizeUser = void 0));
  const e = ge(),
    S = A();
  function c(v, _, b) {
    try {
      const p = JSON.parse(JSON.stringify(v));
      return (
        _ != null && _.environment != null
          ? (p.statsigEnvironment = _.environment)
          : b != null && (p.statsigEnvironment = { tier: b }),
        p
      );
    } catch {
      return (S.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  ne._normalizeUser = c;
  function y(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  return ((ne._getFullUserHash = y), ne);
}
var Se = {},
  Dt;
function $t() {
  if (Dt) return Se;
  ((Dt = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se._typedJsonParse = void 0));
  const e = A();
  function S(c, y, v) {
    try {
      const _ = JSON.parse(c);
      if (_ && typeof _ == "object" && y in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((Se._typedJsonParse = S), Se);
}
var It;
function an() {
  if (It) return z;
  It = 1;
  var e =
    (z && z.__awaiter) ||
    function (r, i, o, n) {
      function t(u) {
        return u instanceof o
          ? u
          : new o(function (g) {
              g(u);
            });
      }
      return new (o || (o = Promise))(function (u, g) {
        function s(d) {
          try {
            w(n.next(d));
          } catch (h) {
            g(h);
          }
        }
        function E(d) {
          try {
            w(n.throw(d));
          } catch (h) {
            g(h);
          }
        }
        function w(d) {
          d.done ? u(d.value) : t(d.value).then(s, E);
        }
        w((n = n.apply(r, i || [])).next());
      });
    };
  (Object.defineProperty(z, "__esModule", { value: !0 }),
    (z._makeDataAdapterResult = z.DataAdapterCore = void 0));
  const S = A(),
    c = Re(),
    y = Zt(),
    v = X(),
    _ = $t(),
    b = 10;
  let p = class {
    constructor(i, o) {
      ((this._adapterName = i),
        (this._cacheSuffix = o),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${o}`),
        (this._inMemoryCache = new a()));
    }
    attach(i, o, n) {
      ((this._sdkKey = i), (this._options = o));
    }
    getDataSync(i) {
      const o = i && (0, y._normalizeUser)(i, this._options),
        n = this._getCacheKey(o),
        t = this._inMemoryCache.get(n, o);
      if (t && this._getIsCacheValueValid(t)) return t;
      const u = this._loadFromCache(n);
      return u && this._getIsCacheValueValid(u)
        ? (this._inMemoryCache.add(n, u), this._inMemoryCache.get(n, o))
        : null;
    }
    setData(i, o) {
      const n = o && (0, y._normalizeUser)(o, this._options),
        t = this._getCacheKey(n);
      this._inMemoryCache.add(t, f("Bootstrap", i, null, n));
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, o, n) {
      return e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const t = i ?? this.getDataSync(o),
          u = [this._fetchAndPrepFromNetwork(t, o, n)];
        return (
          n?.timeoutMs &&
            u.push(
              new Promise((g) => setTimeout(g, n.timeoutMs)).then(
                () => (S.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(u)
        );
      });
    }
    _prefetchDataImpl(i, o) {
      return e(this, void 0, void 0, function* () {
        const n = i && (0, y._normalizeUser)(i, this._options),
          t = this._getCacheKey(n),
          u = yield this._getDataAsyncImpl(null, n, o);
        u &&
          this._inMemoryCache.add(t, Object.assign(Object.assign({}, u), { source: "Prefetch" }));
      });
    }
    _fetchAndPrepFromNetwork(i, o, n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const u = (t = i?.data) !== null && t !== void 0 ? t : null,
          g = i != null && this._isCachedResultValidFor204(i, o),
          s = yield this._fetchFromNetwork(u, o, n, g);
        if (!s) return (S.Log.debug("No response returned for latest value"), null);
        const E = (0, _._typedJsonParse)(s, "has_updates", "Response"),
          w = this._getSdkKey(),
          d = c.StableID.get(w);
        let h = null;
        if (E?.has_updates === !0) h = f("Network", s, d, o);
        else if (u && E?.has_updates === !1) h = f("NetworkNotModified", u, d, o);
        else return null;
        const k = this._getCacheKey(o);
        return (this._inMemoryCache.add(k, h), this._writeToCache(k, h), h);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (S.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var o;
      const n = (o = v.Storage.getItem) === null || o === void 0 ? void 0 : o.call(v.Storage, i);
      if (n == null) return null;
      const t = (0, _._typedJsonParse)(n, "source", "Cached Result");
      return t ? Object.assign(Object.assign({}, t), { source: "Cache" }) : null;
    }
    _writeToCache(i, o) {
      (v.Storage.setItem(i, JSON.stringify(o)), this._runLocalStorageCacheEviction(i));
    }
    _runLocalStorageCacheEviction(i) {
      var o;
      const n =
        (o = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && o !== void 0
          ? o
          : {};
      n[i] = Date.now();
      const t = l(n, b);
      (t && (delete n[t], v.Storage.removeItem(t)),
        (0, v._setObjectInStorage)(this._lastModifiedStoreKey, n));
    }
  };
  z.DataAdapterCore = p;
  function f(r, i, o, n) {
    return {
      source: r,
      data: i,
      receivedAt: Date.now(),
      stableID: o,
      fullUserHash: (0, y._getFullUserHash)(n),
    };
  }
  z._makeDataAdapterResult = f;
  class a {
    constructor() {
      this._data = {};
    }
    get(i, o) {
      var n;
      const t = this._data[i],
        u = t?.stableID,
        g = (n = o?.customIDs) === null || n === void 0 ? void 0 : n.stableID;
      return g && u && g !== u
        ? (S.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(i, o) {
      const n = l(this._data, b - 1);
      (n && delete this._data[n], (this._data[i] = o));
    }
    merge(i) {
      this._data = Object.assign(Object.assign({}, this._data), i);
    }
  }
  function l(r, i) {
    const o = Object.keys(r);
    return o.length <= i
      ? null
      : o.reduce((n, t) => {
          const u = r[n],
            g = r[t];
          return typeof u == "object" && typeof g == "object"
            ? g.receivedAt < u.receivedAt
              ? t
              : n
            : g < u
              ? t
              : n;
        });
  }
  return z;
}
var Ge = {},
  Ot;
function ln() {
  return (Ot || ((Ot = 1), Object.defineProperty(Ge, "__esModule", { value: !0 })), Ge);
}
var be = {},
  Ee = {},
  Ct;
function tt() {
  if (Ct) return Ee;
  ((Ct = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.SDKType = void 0));
  const e = {};
  let S;
  return (
    (Ee.SDKType = {
      _get: (c) => {
        var y;
        return ((y = e[c]) !== null && y !== void 0 ? y : "js-mono") + (S ?? "");
      },
      _setClientType(c, y) {
        e[c] = y;
      },
      _setBindingType(c) {
        (!S || S === "-react") && (S = "-" + c);
      },
    }),
    Ee
  );
}
var Tt;
function en() {
  return (
    Tt ||
      ((Tt = 1),
      (function (e) {
        var S =
          (be && be.__awaiter) ||
          function (r, i, o, n) {
            function t(u) {
              return u instanceof o
                ? u
                : new o(function (g) {
                    g(u);
                  });
            }
            return new (o || (o = Promise))(function (u, g) {
              function s(d) {
                try {
                  w(n.next(d));
                } catch (h) {
                  g(h);
                }
              }
              function E(d) {
                try {
                  w(n.throw(d));
                } catch (h) {
                  g(h);
                }
              }
              function w(d) {
                d.done ? u(d.value) : t(d.value).then(s, E);
              }
              w((n = n.apply(r, i || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = A(),
          y = tt(),
          v = Ie();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        let b = class {
          constructor(i, o, n, t) {
            ((this._sdkKey = i),
              (this._options = o),
              (this._emitter = n),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(i) {
            try {
              const o = i;
              a(o).forEach((n) => {
                const t = o[n];
                "$EB" in t ||
                  ((o[n] = (...u) => this._capture(n, () => t.apply(i, u))), (o[n].$EB = !0));
              });
            } catch (o) {
              this._onError("eb:wrap", o);
            }
          }
          logError(i, o) {
            this._onError(i, o);
          }
          getLastSeenErrorAndReset() {
            const i = this._lastSeenError;
            return ((this._lastSeenError = void 0), i ?? null);
          }
          attachErrorIfNoneExists(i) {
            this._lastSeenError || (this._lastSeenError = p(i));
          }
          _capture(i, o) {
            try {
              const n = o();
              return n && n instanceof Promise ? n.catch((t) => this._onError(i, t)) : n;
            } catch (n) {
              return (this._onError(i, n), null);
            }
          }
          _onError(i, o) {
            try {
              (c.Log.warn(`Caught error in ${i}`, { error: o }),
                S(this, void 0, void 0, function* () {
                  var t, u, g, s, E, w, d;
                  const h = o || Error(_),
                    k = h instanceof Error,
                    D = k ? h.name : "No Name",
                    C = p(h);
                  if (((this._lastSeenError = C), this._seen.has(D))) return;
                  if (
                    (this._seen.add(D),
                    !(
                      (u =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || u === void 0
                    ) && u.preventAllNetworkTraffic)
                  ) {
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: o, tag: i });
                    return;
                  }
                  const L = y.SDKType._get(this._sdkKey),
                    M = v.StatsigMetadataProvider.get(),
                    x = k ? h.stack : f(h),
                    H = Object.assign(
                      { tag: i, exception: D, info: x, statsigOptions: l(this._options) },
                      Object.assign(Object.assign({}, M), { sdkType: L }),
                    );
                  (yield (
                    (w =
                      (E =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || E === void 0
                        ? void 0
                        : E.networkOverrideFunc) !== null && w !== void 0
                      ? w
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(L),
                      "STATSIG-SDK-VERSION": String(M.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(H),
                  }),
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: o, tag: i }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = b;
        function p(r) {
          return r instanceof Error
            ? r
            : typeof r == "string"
              ? new Error(r)
              : new Error("An unknown error occurred.");
        }
        function f(r) {
          try {
            return JSON.stringify(r);
          } catch {
            return _;
          }
        }
        function a(r) {
          const i = new Set();
          let o = Object.getPrototypeOf(r);
          for (; o && o !== Object.prototype; )
            (Object.getOwnPropertyNames(o)
              .filter((n) => typeof o?.[n] == "function")
              .forEach((n) => i.add(n)),
              (o = Object.getPrototypeOf(o)));
          return Array.from(i);
        }
        function l(r) {
          if (!r) return {};
          const i = {};
          return (
            Object.entries(r).forEach(([o, n]) => {
              switch (typeof n) {
                case "number":
                case "bigint":
                case "boolean":
                  i[String(o)] = n;
                  break;
                case "string":
                  n.length < 50 ? (i[String(o)] = n) : (i[String(o)] = "set");
                  break;
                case "object":
                  o === "environment"
                    ? (i.environment = n)
                    : o === "networkConfig"
                      ? (i.networkConfig = n)
                      : (i[String(o)] = n != null ? "set" : "unset");
                  break;
              }
            }),
            i
          );
        }
      })(be)),
    be
  );
}
var Ve = {},
  Rt;
function un() {
  return (Rt || ((Rt = 1), Object.defineProperty(Ve, "__esModule", { value: !0 })), Ve);
}
var Je = {},
  Ut;
function cn() {
  return (Ut || ((Ut = 1), Object.defineProperty(Je, "__esModule", { value: !0 })), Je);
}
var ze = {},
  Mt;
function dn() {
  return (Mt || ((Mt = 1), Object.defineProperty(ze, "__esModule", { value: !0 })), ze);
}
var re = {},
  Lt;
function tn() {
  if (Lt) return re;
  ((Lt = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.createMemoKey = re.MemoPrefix = void 0),
    (re.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    S = new Set(["userPersistedValues"]);
  function c(y, v, _) {
    let b = `${y}|${v}`;
    if (!_) return b;
    for (const p of Object.keys(_)) {
      if (S.has(p)) return;
      e.has(p) ? (b += `|${p}=true`) : (b += `|${p}=${_[p]}`);
    }
    return b;
  }
  return ((re.createMemoKey = c), re);
}
var ie = {},
  W = {},
  oe = {},
  Pt;
function _n() {
  if (Pt) return oe;
  Pt = 1;
  var e =
    (oe && oe.__awaiter) ||
    function (p, f, a, l) {
      function r(i) {
        return i instanceof a
          ? i
          : new a(function (o) {
              o(i);
            });
      }
      return new (a || (a = Promise))(function (i, o) {
        function n(g) {
          try {
            u(l.next(g));
          } catch (s) {
            o(s);
          }
        }
        function t(g) {
          try {
            u(l.throw(g));
          } catch (s) {
            o(s);
          }
        }
        function u(g) {
          g.done ? i(g.value) : r(g.value).then(n, t);
        }
        u((l = l.apply(p, f || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }), (oe._fetchTxtRecords = void 0));
  const S = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    v = 200;
  function _(p) {
    return e(this, void 0, void 0, function* () {
      const f = yield p(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: S,
      });
      if (!f.ok) {
        const r = new Error("Failed to fetch TXT records from DNS");
        throw ((r.name = "DnsTxtFetchError"), r);
      }
      const a = yield f.arrayBuffer(),
        l = new Uint8Array(a);
      return b(l);
    });
  }
  oe._fetchTxtRecords = _;
  function b(p) {
    const f = p.findIndex(
      (l, r) =>
        r < v && String.fromCharCode(l) === "=" && y.includes(String.fromCharCode(p[r - 1])),
    );
    if (f === -1) {
      const l = new Error("Failed to parse TXT records from DNS");
      throw ((l.name = "DnsTxtParseError"), l);
    }
    let a = "";
    for (let l = f - 1; l < p.length; l++) a += String.fromCharCode(p[l]);
    return a.split(",");
  }
  return oe;
}
var Nt;
function gn() {
  if (Nt) return W;
  Nt = 1;
  var e =
    (W && W.__awaiter) ||
    function (o, n, t, u) {
      function g(s) {
        return s instanceof t
          ? s
          : new t(function (E) {
              E(s);
            });
      }
      return new (t || (t = Promise))(function (s, E) {
        function w(k) {
          try {
            h(u.next(k));
          } catch (D) {
            E(D);
          }
        }
        function d(k) {
          try {
            h(u.throw(k));
          } catch (D) {
            E(D);
          }
        }
        function h(k) {
          k.done ? s(k.value) : g(k.value).then(w, d);
        }
        h((u = u.apply(o, n || [])).next());
      });
    };
  (Object.defineProperty(W, "__esModule", { value: !0 }),
    (W._isDomainFailure = W.NetworkFallbackResolver = void 0));
  const S = _n(),
    c = ge(),
    y = A(),
    v = X(),
    _ = 10080 * 60 * 1e3,
    b = 14400 * 1e3;
  let p = class {
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
      var u;
      const g = (u = this._fallbackInfo) === null || u === void 0 ? void 0 : u[t.endpoint];
      g &&
        ((g.expiryTime = Date.now() + _),
        l(n, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: g })));
    }
    getActiveFallbackUrl(n, t) {
      var u, g;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (u = r(n)) !== null && u !== void 0 ? u : {}), (this._fallbackInfo = s));
      const E = s[t.endpoint];
      return !E ||
        Date.now() > ((g = E.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== E.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), l(n, this._fallbackInfo), null)
        : E.url
          ? E.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, t, u, g) {
      return e(this, void 0, void 0, function* () {
        var s, E;
        try {
          if (!f(u, g)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            h = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              d,
            );
          return h ? (this._updateFallbackInfoWithNewUrl(n, t, h), !0) : !1;
        } catch (w) {
          return (
            (E = this._errorBoundary) === null ||
              E === void 0 ||
              E.logError("tryFetchUpdatedFallbackInfo", w),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, t, u) {
      var g, s, E;
      const w = {
          urlConfigChecksum: t.getChecksum(),
          url: u,
          expiryTime: Date.now() + _,
          previous: [],
        },
        d = t.endpoint,
        h = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[d];
      (h && w.previous.push(...h.previous), w.previous.length > 10 && (w.previous = []));
      const k =
        (E = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[d]) === null ||
        E === void 0
          ? void 0
          : E.url;
      (k != null && w.previous.push(k),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: w })),
        l(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return e(this, void 0, void 0, function* () {
        var t;
        const u = this._dnsQueryCooldowns[n.endpoint];
        if (u && Date.now() < u) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + b;
        const g = [],
          s = yield (0, S._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          E = i(n.defaultUrl);
        for (const w of s) {
          if (!w.startsWith(n.endpointDnsKey + "=")) continue;
          const d = w.split("=");
          if (d.length > 1) {
            let h = d[1];
            (h.endsWith("/") && (h = h.slice(0, -1)), g.push(`https://${h}${E}`));
          }
        }
        return g;
      });
    }
    _pickNewFallbackUrl(n, t) {
      var u;
      if (t == null) return null;
      const g = new Set((u = n?.previous) !== null && u !== void 0 ? u : []),
        s = n?.url;
      let E = null;
      for (const w of t) {
        const d = w.endsWith("/") ? w.slice(0, -1) : w;
        if (!g.has(w) && d !== s) {
          E = d;
          break;
        }
      }
      return E;
    }
  };
  W.NetworkFallbackResolver = p;
  function f(o, n) {
    var t;
    const u = (t = o?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      n ||
      u.includes("uncaught exception") ||
      u.includes("failed to fetch") ||
      u.includes("networkerror when attempting to fetch resource")
    );
  }
  W._isDomainFailure = f;
  function a(o) {
    return `statsig.network_fallback.${(0, c._DJB2)(o)}`;
  }
  function l(o, n) {
    const t = a(o);
    if (!n || Object.keys(n).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(n));
  }
  function r(o) {
    const n = a(o),
      t = v.Storage.getItem(n);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (y.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function i(o) {
    try {
      return new URL(o).pathname;
    } catch {
      return null;
    }
  }
  return W;
}
var pe = {},
  At;
function nn() {
  if (At) return pe;
  ((At = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.SDKFlags = void 0));
  const e = {};
  return (
    (pe.SDKFlags = {
      setFlags: (S, c) => {
        e[S] = c;
      },
      get: (S, c) => {
        var y, v;
        return (v = (y = e[S]) === null || y === void 0 ? void 0 : y[c]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    pe
  );
}
var We = {},
  jt;
function nt() {
  return (
    jt ||
      ((jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const S = Q(),
          c = Oe(),
          y = A(),
          v = X(),
          _ = et(),
          b = 1800 * 1e3,
          p = 14400 * 1e3,
          f = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              f[s] == null && (f[s] = a(s));
              const E = f[s];
              return r(E);
            },
            overrideInitialSessionID: (s, E) => {
              f[E] = l(s, E);
            },
          }));
        function a(s) {
          let E = g(s);
          const w = Date.now();
          return (
            E || (E = { sessionID: (0, _.getUUID)(), startTime: w, lastUpdate: w }),
            { data: E, sdkKey: s }
          );
        }
        function l(s, E) {
          const w = Date.now();
          return { data: { sessionID: s, startTime: w, lastUpdate: w }, sdkKey: E };
        }
        function r(s) {
          const E = Date.now(),
            w = s.data,
            d = s.sdkKey;
          if (o(w) || n(w)) {
            ((w.sessionID = (0, _.getUUID)()), (w.startTime = E));
            const k = __STATSIG__ == null ? void 0 : __STATSIG__.instance(d);
            k && k.$emt({ name: "session_expired" });
          }
          ((w.lastUpdate = E),
            u(w, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const h = E - w.startTime;
          return ((s.idleTimeoutID = i(d, b)), (s.ageTimeoutID = i(d, p - h)), s);
        }
        function i(s, E) {
          return setTimeout(() => {
            var w;
            const d =
              (w = (0, S._getStatsigGlobal)()) === null || w === void 0 ? void 0 : w.instance(s);
            d && d.$emt({ name: "session_expired" });
          }, E);
        }
        function o({ lastUpdate: s }) {
          return Date.now() - s > b;
        }
        function n({ startTime: s }) {
          return Date.now() - s > p;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function u(s, E) {
          const w = t(E);
          try {
            (0, v._setObjectInStorage)(w, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function g(s) {
          const E = t(s);
          return (0, v._getObjectFromStorage)(E);
        }
      })(We)),
    We
  );
}
var we = {},
  Ft;
function rn() {
  return (
    Ft ||
      ((Ft = 1),
      Object.defineProperty(we, "__esModule", { value: !0 }),
      (we.ErrorTag = void 0),
      (we.ErrorTag = { NetworkError: "NetworkError" })),
    we
  );
}
var qt;
function fn() {
  if (qt) return ie;
  qt = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (O, m, I, T) {
      function R(U) {
        return U instanceof I
          ? U
          : new I(function (P) {
              P(U);
            });
      }
      return new (I || (I = Promise))(function (U, P) {
        function fe(j) {
          try {
            G(T.next(j));
          } catch (F) {
            P(F);
          }
        }
        function J(j) {
          try {
            G(T.throw(j));
          } catch (F) {
            P(F);
          }
        }
        function G(j) {
          j.done ? U(j.value) : R(j.value).then(fe, J);
        }
        G((T = T.apply(O, m || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.NetworkCore = void 0), Q());
  const S = Q(),
    c = Ye(),
    y = A(),
    v = Ce(),
    _ = gn(),
    b = nn(),
    p = tt(),
    f = le(),
    a = nt(),
    l = Re(),
    r = rn(),
    i = Ie(),
    o = Te(),
    n = $e(),
    t = 1e4,
    u = 500,
    g = 3e4,
    s = 1e3,
    E = 50,
    w = E / s,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let h = class {
    constructor(m, I) {
      ((this._emitter = I),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        m && (this._options = m),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new _.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(m)));
    }
    setLogEventCompressionMode(m) {
      this._options.logEventCompressionMode = m;
    }
    setErrorBoundary(m) {
      ((this._errorBoundary = m),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(m));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const m = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), m);
    }
    beacon(m) {
      if (!k(m)) return !1;
      const I = this._getInternalRequestArgs("POST", m),
        T = this._getPopulatedURL(I),
        R = navigator;
      return R.sendBeacon.bind(R)(T, I.body);
    }
    post(m) {
      return e(this, void 0, void 0, function* () {
        const I = this._getInternalRequestArgs("POST", m);
        return (this._tryEncodeBody(I), yield this._tryToCompressBody(I), this._sendRequest(I));
      });
    }
    get(m) {
      const I = this._getInternalRequestArgs("GET", m);
      return this._sendRequest(I);
    }
    _sendRequest(m) {
      return e(this, void 0, void 0, function* () {
        var I, T, R, U;
        if (!k(m) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: fe, retries: J, attempt: G } = m,
          j = m.urlConfig.endpoint;
        if (this._isRateLimited(j))
          return (
            y.Log.warn(
              `Request to ${j} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const F = G ?? 1,
          K = typeof AbortController < "u" ? new AbortController() : null,
          ue = setTimeout(() => {
            K?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          ve = this._getPopulatedURL(m);
        let V = null;
        const on = (0, n._isUnloading)();
        try {
          const ce = {
            method: P,
            body: fe,
            headers: Object.assign({}, m.headers),
            signal: K?.signal,
            priority: m.priority,
            keepalive: on,
          };
          x(m, F);
          const de = this._leakyBucket[j];
          if (
            (de && ((de.lastRequestTime = Date.now()), (this._leakyBucket[j] = de)),
            (V = yield (
              (I = this._netConfig.networkOverrideFunc) !== null && I !== void 0 ? I : fetch
            )(ve, ce)),
            clearTimeout(ue),
            !V.ok)
          ) {
            const De = yield V.text().catch(() => "No Text"),
              it = new Error(`NetworkError: ${ve} ${De}`);
            throw ((it.name = "NetworkError"), it);
          }
          const Ue = yield V.text();
          return (
            H(m, V, F, Ue),
            this._fallbackResolver.tryBumpExpiryTime(m.sdkKey, m.urlConfig),
            { body: Ue, code: V.status }
          );
        } catch (ce) {
          const de = L(K, ce),
            rt = M(K);
          if (
            (H(m, V, F, "", ce),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              m.sdkKey,
              m.urlConfig,
              de,
              rt,
            )) &&
              (m.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(m.sdkKey, m.urlConfig)),
            !J || F > J || !d.has((T = V?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (R = this._emitter) === null ||
              R === void 0 ||
              R.call(this, {
                name: "error",
                error: ce,
                tag: r.ErrorTag.NetworkError,
                requestArgs: m,
              });
            const De = `A networking error occurred during ${P} request to ${ve}.`;
            return (
              y.Log.error(De, de, ce),
              (U = this._errorBoundary) === null || U === void 0 || U.attachErrorIfNoneExists(De),
              null
            );
          }
          return (
            yield B(F),
            this._sendRequest(Object.assign(Object.assign({}, m), { retries: J, attempt: F + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(m) {
      let I = m?.logEventCompressionMode;
      return (
        !I && m?.disableCompression === !0 && (I = o.LogEventCompressionMode.Disabled),
        I || (I = o.LogEventCompressionMode.Enabled),
        I
      );
    }
    _isRateLimited(m) {
      var I;
      const T = Date.now(),
        R =
          (I = this._leakyBucket[m]) !== null && I !== void 0
            ? I
            : { count: 0, lastRequestTime: T },
        U = T - R.lastRequestTime,
        P = Math.floor(U * w);
      return (
        (R.count = Math.max(0, R.count - P)),
        R.count >= E
          ? !0
          : ((R.count += 1), (R.lastRequestTime = T), (this._leakyBucket[m] = R), !1)
      );
    }
    _getPopulatedURL(m) {
      var I;
      const T = (I = m.fallbackUrl) !== null && I !== void 0 ? I : m.urlConfig.getUrl();
      (m.urlConfig.endpoint === v.Endpoint._initialize ||
        m.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const R = Object.assign(
          {
            [v.NetworkParam.SdkKey]: m.sdkKey,
            [v.NetworkParam.SdkType]: p.SDKType._get(m.sdkKey),
            [v.NetworkParam.SdkVersion]: i.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: a.SessionID.get(m.sdkKey),
          },
          m.params,
        ),
        U = Object.keys(R)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(R[P])}`)
          .join("&");
      return `${T}${U ? `?${U}` : ""}`;
    }
    _tryEncodeBody(m) {
      var I;
      const T = (0, f._getWindowSafe)(),
        R = m.body;
      if (
        !(
          !m.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof R != "string" ||
          (0, S._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((m.body = T.btoa(R).split("").reverse().join("")),
            (m.params = Object.assign(
              Object.assign({}, (I = m.params) !== null && I !== void 0 ? I : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (U) {
          y.Log.warn(`Request encoding failed for ${m.urlConfig.getUrl()}`, U);
        }
    }
    _tryToCompressBody(m) {
      return e(this, void 0, void 0, function* () {
        var I;
        const T = m.body;
        if (!(typeof T != "string" || !C(m, this._options)))
          try {
            const R = new TextEncoder().encode(T),
              U = new CompressionStream("gzip"),
              P = U.writable.getWriter();
            (P.write(R).catch(y.Log.error), P.close().catch(y.Log.error));
            const fe = U.readable.getReader(),
              J = [];
            let G;
            for (; !(G = yield fe.read()).done; ) J.push(G.value);
            const j = J.reduce((ue, ve) => ue + ve.length, 0),
              F = new Uint8Array(j);
            let K = 0;
            for (const ue of J) (F.set(ue, K), (K += ue.length));
            ((m.body = F),
              (m.params = Object.assign(
                Object.assign({}, (I = m.params) !== null && I !== void 0 ? I : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (R) {
            y.Log.warn(`Request compression failed for ${m.urlConfig.getUrl()}`, R);
          }
      });
    }
    _getInternalRequestArgs(m, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        R = Object.assign(Object.assign({}, I), { method: m, fallbackUrl: T });
      return ("data" in I && D(R, I.data), R);
    }
  };
  ie.NetworkCore = h;
  const k = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    D = (O, m) => {
      const { sdkKey: I, fallbackUrl: T } = O,
        R = l.StableID.get(I),
        U = a.SessionID.get(I),
        P = p.SDKType._get(I);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, m), {
          statsigMetadata: Object.assign(Object.assign({}, i.StatsigMetadataProvider.get()), {
            stableID: R,
            sessionID: U,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(O, m) {
    if (
      !O.isCompressable ||
      (0, S._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = b.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (m.logEventCompressionMode) {
      case o.LogEventCompressionMode.Disabled:
        return !1;
      case o.LogEventCompressionMode.Enabled:
        return !(I && !T);
      case o.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function L(O, m) {
    return O?.signal.aborted && typeof O.signal.reason == "string"
      ? O.signal.reason
      : typeof m == "string"
        ? m
        : m instanceof Error
          ? `${m.name}: ${m.message}`
          : "Unknown Error";
  }
  function M(O) {
    return (
      (O?.signal.aborted &&
        typeof O.signal.reason == "string" &&
        O.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function x(O, m) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: m });
  }
  function H(O, m, I, T, R) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(m, I, T, R));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((m) => setTimeout(m, Math.min(u * (O * O), g)));
    });
  }
  return ie;
}
var xe = {},
  Kt;
function vn() {
  return (Kt || ((Kt = 1), Object.defineProperty(xe, "__esModule", { value: !0 })), xe);
}
var He = {},
  Bt;
function hn() {
  return (Bt || ((Bt = 1), Object.defineProperty(He, "__esModule", { value: !0 })), He);
}
var se = {},
  Gt;
function yn() {
  if (Gt) return se;
  Gt = 1;
  var e =
    (se && se.__awaiter) ||
    function (n, t, u, g) {
      function s(E) {
        return E instanceof u
          ? E
          : new u(function (w) {
              w(E);
            });
      }
      return new (u || (u = Promise))(function (E, w) {
        function d(D) {
          try {
            k(g.next(D));
          } catch (C) {
            w(C);
          }
        }
        function h(D) {
          try {
            k(g.throw(D));
          } catch (C) {
            w(C);
          }
        }
        function k(D) {
          D.done ? E(D.value) : s(D.value).then(d, h);
        }
        k((g = g.apply(n, t || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }), (se.StatsigClientBase = void 0), Q());
  const S = Q(),
    c = en(),
    y = Yt(),
    v = A(),
    _ = tn(),
    b = le(),
    p = nt(),
    f = Re(),
    a = Te(),
    l = X(),
    r = 3e3;
  let i = class {
    constructor(t, u, g, s) {
      var E, w, d, h;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const k = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && l.Storage._setDisabled(!0),
        s?.initialSessionID && p.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && l.Storage._setProvider(s.storageProvider),
        s?.enableCookies && f.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && f.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (E = s?.overrideAdapter) !== null && E !== void 0 ? E : null),
        (this._logger = new y.EventLogger(t, k, g, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, k)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(u),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = u),
        this.dataAdapter.attach(t, s, g),
        (this.storageProvider = l.Storage),
        (h =
          (d = (w = this.overrideAdapter) === null || w === void 0 ? void 0 : w.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(w)) === null ||
          h === void 0 ||
          h.catch((D) => this._errorBoundary.logError("OA::loadFromStorage", D)),
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
          l.Storage._setDisabled(t.disableStorage)),
        t.enableCookies != null &&
          ((this._options.enableCookies = t.enableCookies),
          f.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
        t.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode)
          : t.disableCompression &&
            this._logger.setLogEventCompressionMode(a.LogEventCompressionMode.Disabled));
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
    on(t, u) {
      (this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(u));
    }
    off(t, u) {
      if (this._listeners[t]) {
        const g = this._listeners[t].indexOf(u);
        g !== -1 && this._listeners[t].splice(g, 1);
      }
    }
    $on(t, u) {
      ((u.__isInternal = !0), this.on(t, u));
    }
    $emt(t) {
      var u;
      const g = (s) => {
        try {
          s(t);
        } catch (E) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, E);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => g(s)),
        (u = this._listeners["*"]) === null || u === void 0 || u.forEach(g));
    }
    _setStatus(t, u) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: u }));
    }
    _enqueueExposure(t, u, g) {
      if (g?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(u);
    }
    _memoize(t, u) {
      return (g, s) => {
        if (this._options.disableEvaluationMemoization) return u(g, s);
        const E = (0, _.createMemoKey)(t, g, s);
        return E
          ? (E in this._memoCache ||
              (Object.keys(this._memoCache).length >= r && (this._memoCache = {}),
              (this._memoCache[E] = u(g, s))),
            this._memoCache[E])
          : u(g, s);
      };
    }
  };
  se.StatsigClientBase = i;
  function o(n, t) {
    var u;
    if ((0, b._isServerEnv)()) return;
    const g = (0, S._getStatsigGlobal)(),
      s = (u = g.instances) !== null && u !== void 0 ? u : {},
      E = t;
    (s[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[n] = E),
      g.firstInstance || (g.firstInstance = E),
      (g.instances = s),
      (__STATSIG__ = g));
  }
  return se;
}
var ke = {},
  Vt;
function mn() {
  return (
    Vt ||
      ((Vt = 1),
      Object.defineProperty(ke, "__esModule", { value: !0 }),
      (ke.DataAdapterCachePrefix = void 0),
      (ke.DataAdapterCachePrefix = "statsig.cached")),
    ke
  );
}
var Qe = {},
  Jt;
function Sn() {
  return (Jt || ((Jt = 1), Object.defineProperty(Qe, "__esModule", { value: !0 })), Qe);
}
var N = {},
  zt;
function bn() {
  if (zt) return N;
  ((zt = 1),
    Object.defineProperty(N, "__esModule", { value: !0 }),
    (N._makeTypedGet =
      N._mergeOverride =
      N._makeLayer =
      N._makeExperiment =
      N._makeDynamicConfig =
      N._makeFeatureGate =
        void 0));
  const e = A(),
    S = Ze();
  function c(a, l, r, i) {
    var o;
    return {
      name: a,
      details: l,
      ruleID: (o = r?.rule_id) !== null && o !== void 0 ? o : "",
      __evaluation: r,
      value: i,
    };
  }
  function y(a, l, r) {
    var i;
    return Object.assign(Object.assign({}, c(a, l, r, r?.value === !0)), {
      idType: (i = r?.id_type) !== null && i !== void 0 ? i : null,
    });
  }
  N._makeFeatureGate = y;
  function v(a, l, r) {
    var i;
    const o = (i = r?.value) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, c(a, l, r, o)), { get: f(a, r?.value) });
  }
  N._makeDynamicConfig = v;
  function _(a, l, r) {
    var i;
    const o = v(a, l, r);
    return Object.assign(Object.assign({}, o), {
      groupName: (i = r?.group_name) !== null && i !== void 0 ? i : null,
    });
  }
  N._makeExperiment = _;
  function b(a, l, r, i) {
    var o, n;
    return Object.assign(Object.assign({}, c(a, l, r, void 0)), {
      get: f(a, r?.value, i),
      groupName: (o = r?.group_name) !== null && o !== void 0 ? o : null,
      __value: (n = r?.value) !== null && n !== void 0 ? n : {},
    });
  }
  N._makeLayer = b;
  function p(a, l, r, i) {
    return Object.assign(Object.assign(Object.assign({}, a), l), { get: f(a.name, r, i) });
  }
  N._mergeOverride = p;
  function f(a, l, r) {
    return (i, o) => {
      var n;
      const t = (n = l?.[i]) !== null && n !== void 0 ? n : null;
      return t == null
        ? (o ?? null)
        : o != null && !(0, S._isTypeMatch)(t, o)
          ? (e.Log.warn(
              `Parameter type mismatch. '${a}.${i}' was found to be type '${typeof t}' but fallback/return type is '${typeof o}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            o ?? null)
          : (r?.(i), t);
    };
  }
  return ((N._makeTypedGet = f), N);
}
var Xe = {},
  Wt;
function En() {
  return (Wt || ((Wt = 1), Object.defineProperty(Xe, "__esModule", { value: !0 })), Xe);
}
var ae = {},
  xt;
function pn() {
  if (xt) return ae;
  ((xt = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.UPDATE_DETAIL_ERROR_MESSAGES = ae.createUpdateDetails = void 0));
  const e = (S, c, y, v, _, b) => ({
    duration: y,
    source: c,
    success: S,
    error: v,
    sourceUrl: _,
    warnings: b,
  });
  return (
    (ae.createUpdateDetails = e),
    (ae.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    ae
  );
}
var Ht;
function Rn() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        var S =
            (Y && Y.__createBinding) ||
            (Object.create
              ? function (a, l, r, i) {
                  i === void 0 && (i = r);
                  var o = Object.getOwnPropertyDescriptor(l, r);
                  ((!o || ("get" in o ? !l.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return l[r];
                      },
                    }),
                    Object.defineProperty(a, i, o));
                }
              : function (a, l, r, i) {
                  (i === void 0 && (i = r), (a[i] = l[r]));
                }),
          c =
            (Y && Y.__exportStar) ||
            function (a, l) {
              for (var r in a)
                r !== "default" && !Object.prototype.hasOwnProperty.call(l, r) && S(l, a, r);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          Q());
        const y = Q(),
          v = Ye();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = Yt();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const b = A();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return b.Log;
          },
        });
        const p = Ie(),
          f = X();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return f.Storage;
          },
        }),
          c(Q(), e),
          c(Oe(), e),
          c(sn(), e),
          c(an(), e),
          c(Ye(), e),
          c(ln(), e),
          c(en(), e),
          c(un(), e),
          c(cn(), e),
          c(ge(), e),
          c(dn(), e),
          c(A(), e),
          c(tn(), e),
          c(Ce(), e),
          c(fn(), e),
          c(vn(), e),
          c(hn(), e),
          c(le(), e),
          c(tt(), e),
          c(nt(), e),
          c(Re(), e),
          c(yn(), e),
          c(rn(), e),
          c(mn(), e),
          c(Qt(), e),
          c(Ie(), e),
          c(Te(), e),
          c(Sn(), e),
          c(bn(), e),
          c(En(), e),
          c(Zt(), e),
          c(X(), e),
          c($t(), e),
          c(Ze(), e),
          c(Xt(), e),
          c(et(), e),
          c($e(), e),
          c(pn(), e),
          c(nn(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: b.Log, SDK_VERSION: p.SDK_VERSION }));
      })(Y)),
    Y
  );
}
export { Rn as r };
