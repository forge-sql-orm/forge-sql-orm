import { c as lt } from "./lodash-vendor-Cp37rRJM.js";
var fe = {},
  St = {},
  bt = {},
  fn;
function Q() {
  return (
    fn ||
      ((fn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const S = " DEBUG ",
          d = "  INFO ",
          y = "  WARN ",
          h = " ERROR ";
        function _(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class v {
          static info(...m) {
            v.level >= e.LogLevel.Info && console.info(d, ..._(m));
          }
          static debug(...m) {
            v.level >= e.LogLevel.Debug && console.debug(S, ..._(m));
          }
          static warn(...m) {
            v.level >= e.LogLevel.Warn && console.warn(y, ..._(m));
          }
          static error(...m) {
            v.level >= e.LogLevel.Error && console.error(h, ..._(m));
          }
        }
        ((e.Log = v), (v.level = e.LogLevel.Warn));
      })(bt)),
    bt
  );
}
var vn;
function ue() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        var S, d, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const h = Q(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = _;
        const v = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = v;
        const b = (i) => {
          const r = (0, e._getStatsigGlobal)();
          return i
            ? r.instances && r.instances[i]
            : (r.instances &&
                Object.keys(r.instances).length > 1 &&
                h.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              r.firstInstance);
        };
        e._getInstance = b;
        const m = "__STATSIG__",
          s = typeof window < "u" ? window : {},
          a = typeof lt < "u" ? lt : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (d = (S = s[m]) !== null && S !== void 0 ? S : a[m]) !== null && d !== void 0
                ? d
                : n[m]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((s[m] = o), (a[m] = o), (n[m] = o));
      })(St)),
    St
  );
}
var Et = {},
  hn;
function rn() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const S = new Map(),
          d = "start",
          y = "end",
          h = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (s) => S.get(s),
          _markInitOverallStart: (s) => {
            b(s, _({}, d, "overall"));
          },
          _markInitOverallEnd: (s, a, n) => {
            b(
              s,
              _(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: n,
                },
                y,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (s, a) => {
            b(s, _(a, d, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (s, a) => {
            b(s, _(a, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (s) => {
            b(s, _({}, d, "initialize", "process"));
          },
          _markInitProcessEnd: (s, a) => {
            b(s, _(a, y, "initialize", "process"));
          },
          _clearMarkers: (s) => {
            S.delete(s);
          },
          _formatError(s) {
            if (s && typeof s == "object")
              return { code: m(s, "code"), name: m(s, "name"), message: m(s, "message") };
          },
          _getDiagnosticsData(s, a, n, o) {
            var i;
            return {
              success: s?.ok === !0,
              statusCode: s?.status,
              sdkRegion:
                (i = s?.headers) === null || i === void 0 ? void 0 : i.get("x-statsig-region"),
              isDelta: n.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: e.Diagnostics._formatError(o),
            };
          },
          _enqueueDiagnosticsEvent(s, a, n, o) {
            const i = e.Diagnostics._getMarkers(n);
            if (i == null || i.length <= 0) return -1;
            const r = i[i.length - 1].timestamp - i[0].timestamp;
            e.Diagnostics._clearMarkers(n);
            const t = v(s, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function _(s, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, s);
        }
        function v(s, a) {
          return { eventName: h, user: s, value: null, metadata: a, time: Date.now() };
        }
        function b(s, a) {
          var n;
          const o = (n = S.get(s)) !== null && n !== void 0 ? n : [];
          (o.push(a), S.set(s, o));
        }
        function m(s, a) {
          if (a in s) return s[a];
        }
      })(Et)),
    Et
  );
}
var ve = {},
  he = {},
  pt = {},
  ye = {},
  yn;
function sn() {
  if (yn) return ye;
  ((yn = 1),
    Object.defineProperty(ye, "__esModule", { value: !0 }),
    (ye._isTypeMatch = ye._typeOf = void 0));
  function e(d) {
    return Array.isArray(d) ? "array" : typeof d;
  }
  ye._typeOf = e;
  function S(d, y) {
    const h = (_) => (Array.isArray(_) ? "array" : typeof _);
    return h(d) === h(y);
  }
  return ((ye._isTypeMatch = S), ye);
}
var mn;
function Ke() {
  return (
    mn ||
      ((mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const S = sn(),
          d = (_) => {
            let v = 0;
            for (let b = 0; b < _.length; b++) {
              const m = _.charCodeAt(b);
              ((v = (v << 5) - v + m), (v = v & v));
            }
            return String(v >>> 0);
          };
        e._DJB2 = d;
        const y = (_, v) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, v)));
        e._DJB2Object = y;
        const h = (_, v) => {
          if (_ == null) return null;
          const b = Object.keys(_).sort(),
            m = {};
          return (
            b.forEach((s) => {
              const a = _[s];
              if (v === 0 || (0, S._typeOf)(a) !== "object") {
                m[s] = a;
                return;
              }
              m[s] = (0, e._getSortedObject)(a, v != null ? v - 1 : v);
            }),
            m
          );
        };
        e._getSortedObject = h;
      })(pt)),
    pt
  );
}
var Sn;
function dt() {
  if (Sn) return he;
  ((Sn = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he._getStorageKey = he._getUserStorageKey = void 0));
  const e = Ke();
  function S(y, h, _) {
    var v;
    if (_) return _(y, h);
    const b = h && h.customIDs ? h.customIDs : {},
      m = [
        `uid:${(v = h?.userID) !== null && v !== void 0 ? v : ""}`,
        `cids:${Object.keys(b)
          .sort((s, a) => s.localeCompare(a))
          .map((s) => `${s}-${b[s]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(m.join("|"));
  }
  he._getUserStorageKey = S;
  function d(y, h, _) {
    return h ? S(y, h, _) : (0, e._DJB2)(`k:${y}`);
  }
  return ((he._getStorageKey = d), he);
}
var Dt = {},
  bn;
function _t() {
  return (
    bn ||
      ((bn = 1),
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
      })(Dt)),
    Dt
  );
}
var kt = {},
  En;
function Ne() {
  return (
    En ||
      ((En = 1),
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
        const d = () => {
          var m;
          const s = (0, e._getWindowSafe)();
          return (m = s?.document) !== null && m !== void 0 ? m : null;
        };
        e._getDocumentSafe = d;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const m =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || m;
        };
        e._isServerEnv = y;
        const h = (m, s) => {
          const a = (0, e._getWindowSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(m, s);
        };
        e._addWindowEventListenerSafe = h;
        const _ = (m, s) => {
          const a = (0, e._getDocumentSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(m, s);
        };
        e._addDocumentEventListenerSafe = _;
        const v = () => {
          var m;
          try {
            return (m = (0, e._getWindowSafe)()) === null || m === void 0
              ? void 0
              : m.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = v;
        const b = () => {
          const m = (0, e._getWindowSafe)();
          return m && "onpagehide" in m ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = b;
      })(kt)),
    kt
  );
}
var X = {},
  pn;
function Wr() {
  if (pn) return X;
  ((pn = 1),
    Object.defineProperty(X, "__esModule", { value: !0 }),
    (X._createLayerParameterExposure =
      X._createConfigExposure =
      X._mapExposures =
      X._createGateExposure =
      X._isExposureEvent =
        void 0));
  const e = "statsig::config_exposure",
    S = "statsig::gate_exposure",
    d = "statsig::layer_exposure",
    y = (a, n, o, i, r) => (
      o.bootstrapMetadata && (i.bootstrapMetadata = o.bootstrapMetadata),
      {
        eventName: a,
        user: n,
        value: null,
        metadata: s(o, i),
        secondaryExposures: r,
        time: Date.now(),
      }
    ),
    h = ({ eventName: a }) => a === S || a === e || a === d;
  X._isExposureEvent = h;
  const _ = (a, n, o) => {
    var i, r, t;
    const l = { gate: n.name, gateValue: String(n.value), ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (l.configVersion = n.__evaluation.version),
      y(
        S,
        a,
        n.details,
        l,
        v(
          (t = (r = n.__evaluation) === null || r === void 0 ? void 0 : r.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          o,
        ),
      )
    );
  };
  X._createGateExposure = _;
  function v(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  X._mapExposures = v;
  const b = (a, n, o) => {
    var i, r, t, l;
    const g = { config: n.name, ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (g.configVersion = n.__evaluation.version),
      ((r = n.__evaluation) === null || r === void 0 ? void 0 : r.passed) != null &&
        (g.rulePassed = String(n.__evaluation.passed)),
      y(
        e,
        a,
        n.details,
        g,
        v(
          (l = (t = n.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && l !== void 0
            ? l
            : [],
          o,
        ),
      )
    );
  };
  X._createConfigExposure = b;
  const m = (a, n, o, i) => {
    var r, t, l, g, c, D;
    const p = n.__evaluation,
      u = ((r = p?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let f = "",
      k = (t = p?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    u &&
      ((f = (l = p.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (k = p.secondary_exposures));
    const w = (g = n.__evaluation) === null || g === void 0 ? void 0 : g.parameter_rule_ids,
      C = {
        config: n.name,
        parameterName: o,
        ruleID: (c = w?.[o]) !== null && c !== void 0 ? c : n.ruleID,
        allocatedExperiment: f,
        isExplicitParameter: String(u),
      };
    return (
      ((D = n.__evaluation) === null || D === void 0 ? void 0 : D.version) != null &&
        (C.configVersion = n.__evaluation.version),
      y(d, a, n.details, C, v(k, i))
    );
  };
  X._createLayerParameterExposure = m;
  const s = (a, n) => (
    (n.reason = a.reason),
    a.lcut && (n.lcut = String(a.lcut)),
    a.receivedAt && (n.receivedAt = String(a.receivedAt)),
    n
  );
  return X;
}
var me = {},
  Dn;
function gt() {
  return (
    Dn ||
      ((Dn = 1),
      Object.defineProperty(me, "__esModule", { value: !0 }),
      (me.LoggingEnabledOption = me.LogEventCompressionMode = void 0),
      (me.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (me.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    me
  );
}
var wt = {},
  kn;
function ce() {
  return (
    kn ||
      ((kn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const S = Q(),
          d = Ne(),
          y = {},
          h = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (n) => (y[n] ? y[n] : null),
            setItem: (n, o) => {
              y[n] = o;
            },
            removeItem: (n) => {
              delete y[n];
            },
            getAllKeys: () => Object.keys(y),
          };
        let _ = null;
        try {
          const n = (0, d._getWindowSafe)();
          n &&
            n.localStorage &&
            typeof n.localStorage.getItem == "function" &&
            (_ = {
              isReady: () => !0,
              isReadyResolver: () => null,
              getProviderName: () => "LocalStorage",
              getItem: (o) => n.localStorage.getItem(o),
              setItem: (o, i) => n.localStorage.setItem(o, i),
              removeItem: (o) => n.localStorage.removeItem(o),
              getAllKeys: () => Object.keys(n.localStorage),
            });
        } catch {
          S.Log.warn("Failed to setup localStorageProvider.");
        }
        let v = _ ?? h,
          b = v;
        function m(n) {
          try {
            return n();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(h), null);
            if (o instanceof Error && o.name === "QuotaExceededError") {
              const r = e.Storage.getAllKeys().filter((t) => t.startsWith("statsig."));
              o.message = `${o.message}. Statsig Keys: ${r.length}`;
            }
            throw o;
          }
        }
        e.Storage = {
          isReady: () => b.isReady(),
          isReadyResolver: () => b.isReadyResolver(),
          getProviderName: () => b.getProviderName(),
          getItem: (n) => m(() => b.getItem(n)),
          setItem: (n, o) => m(() => b.setItem(n, o)),
          removeItem: (n) => b.removeItem(n),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (n) => {
            ((v = n), (b = n));
          },
          _setDisabled: (n) => {
            n ? (b = h) : (b = v);
          },
        };
        function s(n) {
          const o = e.Storage.getItem(n);
          return JSON.parse(o ?? "null");
        }
        e._getObjectFromStorage = s;
        function a(n, o) {
          e.Storage.setItem(n, JSON.stringify(o));
        }
        e._setObjectInStorage = a;
      })(wt)),
    wt
  );
}
var Ge = {},
  wn;
function Hr() {
  if (wn) return Ge;
  ((wn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.UrlConfiguration = void 0));
  const e = Ke(),
    S = _t(),
    d = {
      [S.Endpoint._initialize]: "i",
      [S.Endpoint._rgstr]: "e",
      [S.Endpoint._download_config_specs]: "d",
    };
  class y {
    constructor(_, v, b, m) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = d[_]),
        v && (this.customUrl = v),
        !v && b && (this.customUrl = b.endsWith("/") ? `${b}${_}` : `${b}/${_}`),
        m && (this.fallbackUrls = m));
      const s = S.NetworkDefault[_];
      this.defaultUrl = `${s}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const v = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + v);
    }
  }
  return ((Ge.UrlConfiguration = y), Ge);
}
var It = {},
  In;
function an() {
  return (
    In ||
      ((In = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const S = Ne(),
          d = "foreground",
          y = "background",
          h = [];
        let _ = d,
          v = !1;
        const b = () => _ === d;
        e._isCurrentlyVisible = b;
        const m = () => v;
        e._isUnloading = m;
        const s = (n) => {
          h.unshift(n);
        };
        e._subscribeToVisiblityChanged = s;
        const a = (n) => {
          n !== _ && ((_ = n), h.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, S._addWindowEventListenerSafe)("focus", () => {
            ((v = !1), (0, e._notifyVisibilityChanged)(d));
          }),
          (0, S._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, S._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? d : y);
          }),
          (0, S._addWindowEventListenerSafe)((0, S._getUnloadEvent)(), () => {
            ((v = !0), (0, e._notifyVisibilityChanged)(y));
          }));
      })(It)),
    It
  );
}
var On;
function Qr() {
  if (On) return ve;
  On = 1;
  var e =
    (ve && ve.__awaiter) ||
    function (p, u, f, k) {
      function w(C) {
        return C instanceof f
          ? C
          : new f(function (L) {
              L(C);
            });
      }
      return new (f || (f = Promise))(function (C, L) {
        function M(N) {
          try {
            G(k.next(N));
          } catch (O) {
            L(O);
          }
        }
        function B(N) {
          try {
            G(k.throw(N));
          } catch (O) {
            L(O);
          }
        }
        function G(N) {
          N.done ? C(N.value) : w(N.value).then(M, B);
        }
        G((k = k.apply(p, u || [])).next());
      });
    };
  (Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.EventLogger = void 0));
  const S = dt(),
    d = Ke(),
    y = Q(),
    h = _t(),
    _ = Ne(),
    v = Wr(),
    b = gt(),
    m = ce(),
    s = Hr(),
    a = an(),
    n = 100,
    o = 1e4,
    i = 1e3,
    r = 6e5,
    t = 500,
    l = 200,
    g = {},
    c = { Startup: "startup", GainedFocus: "gained_focus" };
  class D {
    static _safeFlushAndForget(u) {
      var f;
      (f = g[u]) === null || f === void 0 || f.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(u) {
      var f;
      (f = g[u]) === null || f === void 0 || f._retryFailedLogs(c.GainedFocus);
    }
    constructor(u, f, k, w) {
      var C, L;
      ((this._sdkKey = u),
        (this._emitter = f),
        (this._network = k),
        (this._options = w),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = w?.loggingEnabled) !== null && C !== void 0
            ? C
            : w?.disableLogging === !0
              ? b.LoggingEnabledOption.disabled
              : b.LoggingEnabledOption.browserOnly),
        w?.loggingEnabled &&
          w.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = w?.loggingBufferMaxSize) !== null && L !== void 0 ? L : n));
      const M = w?.networkConfig;
      this._logEventUrlConfig = new s.UrlConfiguration(
        h.Endpoint._rgstr,
        M?.logEventUrl,
        M?.api,
        M?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(u) {
      this._network.setLogEventCompressionMode(u);
    }
    setLoggingEnabled(u) {
      this._loggingEnabled = u;
    }
    enqueue(u) {
      this._shouldLogEvent(u) &&
        (this._normalizeAndAppendEvent(u),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && D._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(u) {
      var f;
      const k = (f = this._nonExposedChecks[u]) !== null && f !== void 0 ? f : 0;
      this._nonExposedChecks[u] = k + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var u;
      const f = (0, _._isServerEnv)();
      (f &&
        ((u = this._options) === null || u === void 0 ? void 0 : u.loggingEnabled) !== "always") ||
        ((g[this._sdkKey] = this),
        f ||
          (0, a._subscribeToVisiblityChanged)((k) => {
            k === "background"
              ? D._safeFlushAndForget(this._sdkKey)
              : k === "foreground" && D._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(c.Startup),
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
        const u = this._queue;
        ((this._queue = []), yield this._sendEvents(u));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > l) &&
          setTimeout(() => D._safeFlushAndForget(this._sdkKey), l));
    }
    _shouldLogEvent(u) {
      var f;
      if (
        ((f = this._options) === null || f === void 0 ? void 0 : f.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, v._isExposureEvent)(u)) return !0;
      const k = u.user ? u.user : { statsigEnvironment: void 0 },
        w = (0, S._getUserStorageKey)(this._sdkKey, k),
        C = u.metadata ? u.metadata : {},
        L = [
          u.eventName,
          w,
          C.gate,
          C.config,
          C.ruleID,
          C.allocatedExperiment,
          C.parameterName,
          String(C.isExplicitParameter),
          C.reason,
        ].join("|"),
        M = this._lastExposureTimeMap[L],
        B = Date.now();
      return M && B - M < r
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[L] = B),
          !0);
    }
    _sendEvents(u) {
      return e(this, void 0, void 0, function* () {
        var f, k;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(u), !1);
        try {
          const C =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((k = (f = this._options) === null || f === void 0 ? void 0 : f.networkConfig) ===
              null || k === void 0
              ? void 0
              : k.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: u }),
            (C ? this._sendEventsViaBeacon(u) : yield this._sendEventsViaPost(u)).success
              ? (this._emitter({ name: "logs_flushed", events: u }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(u), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(u) {
      return e(this, void 0, void 0, function* () {
        var f;
        const k = yield this._network.post(this._getRequestData(u)),
          w = (f = k?.code) !== null && f !== void 0 ? f : -1;
        return { success: w >= 200 && w < 300 };
      });
    }
    _sendEventsViaBeacon(u) {
      return { success: this._network.beacon(this._getRequestData(u)) };
    }
    _getRequestData(u) {
      return {
        sdkKey: this._sdkKey,
        data: { events: u },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [h.NetworkParam.EventCount]: String(u.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(u) {
      for (; u.length > t; ) u.shift();
      const f = this._getStorageKey();
      try {
        (0, m._setObjectInStorage)(f, u);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(u) {
      const f = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        m.Storage.isReady() || (yield m.Storage.isReadyResolver());
        const k = (0, m._getObjectFromStorage)(f);
        if (!k) return;
        (u === c.Startup && m.Storage.removeItem(f),
          (yield this._sendEvents(k)) && u === c.GainedFocus && m.Storage.removeItem(f));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, d._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(u) {
      u.user && ((u.user = Object.assign({}, u.user)), delete u.user.privateAttributes);
      const f = {},
        k = this._getCurrentPageUrl();
      k && (f.statsigMetadata = { currentPage: k });
      const w = Object.assign(Object.assign({}, u), f);
      (y.Log.debug("Enqueued Event:", w), this._queue.push(w));
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
      var u;
      if (
        ((u = this._options) === null || u === void 0
          ? void 0
          : u.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, _._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var u, f;
      const k =
          (f = (u = this._options) === null || u === void 0 ? void 0 : u.loggingIntervalMs) !==
            null && f !== void 0
            ? f
            : o,
        w = setInterval(() => {
          const C = g[this._sdkKey];
          !C || C._flushIntervalId !== w ? clearInterval(w) : D._safeFlushAndForget(this._sdkKey);
        }, k);
      this._flushIntervalId = w;
    }
  }
  return ((ve.EventLogger = D), ve);
}
var Ot = {},
  Cn;
function ut() {
  return (
    Cn ||
      ((Cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.18.2"));
        let S = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => S,
          add: (d) => {
            S = Object.assign(Object.assign({}, S), d);
          },
        };
      })(Ot)),
    Ot
  );
}
var Ct = {},
  Tn;
function di() {
  return (Tn || ((Tn = 1), Object.defineProperty(Ct, "__esModule", { value: !0 })), Ct);
}
var ne = {},
  Ve = {},
  ze = {},
  Un;
function ln() {
  if (Un) return ze;
  ((Un = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let S = new Date().getTime(),
      d = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (h) => {
        let _ = Math.random() * 16;
        return (
          S > 0
            ? ((_ = ((S + _) % 16) | 0), (S = Math.floor(S / 16)))
            : ((_ = ((d + _) % 16) | 0), (d = Math.floor(d / 16))),
          (h === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((ze.getUUID = e), ze);
}
var Rn;
function ft() {
  if (Rn) return Ve;
  ((Rn = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.StableID = void 0));
  const e = dt(),
    S = Q(),
    d = Ne(),
    y = ce(),
    h = ln(),
    _ = {},
    v = {},
    b = {};
  Ve.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (r) => {
      if (b[r]) return null;
      if (_[r] != null) return _[r];
      let t = null;
      return (
        (t = n(r)),
        t != null
          ? ((_[r] = t), s(t, r), t)
          : ((t = a(r)), t == null && (t = (0, h.getUUID)()), s(t, r), o(t, r), (_[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((_[t] = r), s(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      v[r] = t;
    },
    _setDisabled: (r, t) => {
      b[r] = t;
    },
  };
  function m(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function s(r, t) {
    const l = m(t);
    try {
      (0, y._setObjectInStorage)(l, r);
    } catch {
      S.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(r) {
    const t = m(r);
    return (0, y._getObjectFromStorage)(t);
  }
  function n(r) {
    if (!v[r] || (0, d._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [g, c] = l.trim().split("=");
      if (g === i(r)) return decodeURIComponent(c);
    }
    return null;
  }
  function o(r, t) {
    if (!v[t] || !document) return;
    const l = new Date();
    (l.setFullYear(l.getFullYear() + 1),
      (document.cookie = `${i(t)}=${encodeURIComponent(r)}; expires=${l.toUTCString()}; path=/`));
  }
  function i(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  return Ve;
}
var Se = {},
  Mn;
function Xr() {
  if (Mn) return Se;
  ((Mn = 1),
    Object.defineProperty(Se, "__esModule", { value: !0 }),
    (Se._getFullUserHash = Se._normalizeUser = void 0));
  const e = Ke(),
    S = Q();
  function d(h, _, v) {
    try {
      const b = JSON.parse(JSON.stringify(h));
      return (
        _ != null && _.environment != null
          ? (b.statsigEnvironment = _.environment)
          : v != null && (b.statsigEnvironment = { tier: v }),
        b
      );
    } catch {
      return (S.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  Se._normalizeUser = d;
  function y(h) {
    return h ? (0, e._DJB2Object)(h) : null;
  }
  return ((Se._getFullUserHash = y), Se);
}
var Je = {},
  Ln;
function Yr() {
  if (Ln) return Je;
  ((Ln = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je._typedJsonParse = void 0));
  const e = Q();
  function S(d, y, h) {
    try {
      const _ = JSON.parse(d);
      if (_ && typeof _ == "object" && y in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${h}`), null);
  }
  return ((Je._typedJsonParse = S), Je);
}
var Pn;
function _i() {
  if (Pn) return ne;
  Pn = 1;
  var e =
    (ne && ne.__awaiter) ||
    function (n, o, i, r) {
      function t(l) {
        return l instanceof i
          ? l
          : new i(function (g) {
              g(l);
            });
      }
      return new (i || (i = Promise))(function (l, g) {
        function c(u) {
          try {
            p(r.next(u));
          } catch (f) {
            g(f);
          }
        }
        function D(u) {
          try {
            p(r.throw(u));
          } catch (f) {
            g(f);
          }
        }
        function p(u) {
          u.done ? l(u.value) : t(u.value).then(c, D);
        }
        p((r = r.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._makeDataAdapterResult = ne.DataAdapterCore = void 0));
  const S = Q(),
    d = ft(),
    y = Xr(),
    h = ce(),
    _ = Yr(),
    v = 10;
  class b {
    constructor(o, i) {
      ((this._adapterName = o),
        (this._cacheSuffix = i),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${i}`),
        (this._inMemoryCache = new s()));
    }
    attach(o, i, r) {
      ((this._sdkKey = o), (this._options = i));
    }
    getDataSync(o) {
      const i = o && (0, y._normalizeUser)(o, this._options),
        r = this._getCacheKey(i),
        t = this._inMemoryCache.get(r, i);
      if (t && this._getIsCacheValueValid(t)) return t;
      const l = this._loadFromCache(r);
      return l && this._getIsCacheValueValid(l)
        ? (this._inMemoryCache.add(r, l), this._inMemoryCache.get(r, i))
        : null;
    }
    setData(o, i) {
      const r = i && (0, y._normalizeUser)(i, this._options),
        t = this._getCacheKey(r);
      this._inMemoryCache.add(t, m("Bootstrap", o, null, r));
    }
    _getIsCacheValueValid(o) {
      return o.stableID == null || o.stableID === d.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(o, i, r) {
      return e(this, void 0, void 0, function* () {
        h.Storage.isReady() || (yield h.Storage.isReadyResolver());
        const t = o ?? this.getDataSync(i),
          l = [this._fetchAndPrepFromNetwork(t, i, r)];
        return (
          r?.timeoutMs &&
            l.push(
              new Promise((g) => setTimeout(g, r.timeoutMs)).then(
                () => (S.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(l)
        );
      });
    }
    _prefetchDataImpl(o, i) {
      return e(this, void 0, void 0, function* () {
        const r = o && (0, y._normalizeUser)(o, this._options),
          t = this._getCacheKey(r),
          l = yield this._getDataAsyncImpl(null, r, i);
        l &&
          this._inMemoryCache.add(t, Object.assign(Object.assign({}, l), { source: "Prefetch" }));
      });
    }
    _fetchAndPrepFromNetwork(o, i, r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = (t = o?.data) !== null && t !== void 0 ? t : null,
          g = o != null && this._isCachedResultValidFor204(o, i),
          c = yield this._fetchFromNetwork(l, i, r, g);
        if (!c) return (S.Log.debug("No response returned for latest value"), null);
        const D = (0, _._typedJsonParse)(c, "has_updates", "Response"),
          p = this._getSdkKey(),
          u = d.StableID.get(p);
        let f = null;
        if (D?.has_updates === !0) f = m("Network", c, u, i);
        else if (l && D?.has_updates === !1) f = m("NetworkNotModified", l, u, i);
        else return null;
        const k = this._getCacheKey(i);
        return (this._inMemoryCache.add(k, f), this._writeToCache(k, f), f);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (S.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(o) {
      var i;
      const r = (i = h.Storage.getItem) === null || i === void 0 ? void 0 : i.call(h.Storage, o);
      if (r == null) return null;
      const t = (0, _._typedJsonParse)(r, "source", "Cached Result");
      return t ? Object.assign(Object.assign({}, t), { source: "Cache" }) : null;
    }
    _writeToCache(o, i) {
      (h.Storage.setItem(o, JSON.stringify(i)), this._runLocalStorageCacheEviction(o));
    }
    _runLocalStorageCacheEviction(o) {
      var i;
      const r =
        (i = (0, h._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && i !== void 0
          ? i
          : {};
      r[o] = Date.now();
      const t = a(r, v);
      (t && (delete r[t], h.Storage.removeItem(t)),
        (0, h._setObjectInStorage)(this._lastModifiedStoreKey, r));
    }
  }
  ne.DataAdapterCore = b;
  function m(n, o, i, r) {
    return {
      source: n,
      data: o,
      receivedAt: Date.now(),
      stableID: i,
      fullUserHash: (0, y._getFullUserHash)(r),
    };
  }
  ne._makeDataAdapterResult = m;
  class s {
    constructor() {
      this._data = {};
    }
    get(o, i) {
      var r;
      const t = this._data[o],
        l = t?.stableID,
        g = (r = i?.customIDs) === null || r === void 0 ? void 0 : r.stableID;
      return g && l && g !== l
        ? (S.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(o, i) {
      const r = a(this._data, v - 1);
      (r && delete this._data[r], (this._data[o] = i));
    }
    merge(o) {
      this._data = Object.assign(Object.assign({}, this._data), o);
    }
  }
  function a(n, o) {
    const i = Object.keys(n);
    return i.length <= o
      ? null
      : i.reduce((r, t) => {
          const l = n[r],
            g = n[t];
          return typeof l == "object" && typeof g == "object"
            ? g.receivedAt < l.receivedAt
              ? t
              : r
            : g < l
              ? t
              : r;
        });
  }
  return ne;
}
var Tt = {},
  An;
function gi() {
  return (An || ((An = 1), Object.defineProperty(Tt, "__esModule", { value: !0 })), Tt);
}
var xe = {},
  We = {},
  jn;
function un() {
  if (jn) return We;
  ((jn = 1), Object.defineProperty(We, "__esModule", { value: !0 }), (We.SDKType = void 0));
  const e = {};
  let S;
  return (
    (We.SDKType = {
      _get: (d) => {
        var y;
        return ((y = e[d]) !== null && y !== void 0 ? y : "js-mono") + (S ?? "");
      },
      _setClientType(d, y) {
        e[d] = y;
      },
      _setBindingType(d) {
        (!S || S === "-react") && (S = "-" + d);
      },
    }),
    We
  );
}
var Nn;
function Zr() {
  return (
    Nn ||
      ((Nn = 1),
      (function (e) {
        var S =
          (xe && xe.__awaiter) ||
          function (n, o, i, r) {
            function t(l) {
              return l instanceof i
                ? l
                : new i(function (g) {
                    g(l);
                  });
            }
            return new (i || (i = Promise))(function (l, g) {
              function c(u) {
                try {
                  p(r.next(u));
                } catch (f) {
                  g(f);
                }
              }
              function D(u) {
                try {
                  p(r.throw(u));
                } catch (f) {
                  g(f);
                }
              }
              function p(u) {
                u.done ? l(u.value) : t(u.value).then(c, D);
              }
              p((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const d = Q(),
          y = un(),
          h = ut();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        class v {
          constructor(o, i, r, t) {
            ((this._sdkKey = o),
              (this._options = i),
              (this._emitter = r),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(o) {
            try {
              const i = o;
              s(i).forEach((r) => {
                const t = i[r];
                "$EB" in t ||
                  ((i[r] = (...l) => this._capture(r, () => t.apply(o, l))), (i[r].$EB = !0));
              });
            } catch (i) {
              this._onError("eb:wrap", i);
            }
          }
          logError(o, i) {
            this._onError(o, i);
          }
          getLastSeenErrorAndReset() {
            const o = this._lastSeenError;
            return ((this._lastSeenError = void 0), o ?? null);
          }
          attachErrorIfNoneExists(o) {
            this._lastSeenError || (this._lastSeenError = b(o));
          }
          _capture(o, i) {
            try {
              const r = i();
              return r && r instanceof Promise ? r.catch((t) => this._onError(o, t)) : r;
            } catch (r) {
              return (this._onError(o, r), null);
            }
          }
          _onError(o, i) {
            try {
              (d.Log.warn(`Caught error in ${o}`, { error: i }),
                S(this, void 0, void 0, function* () {
                  var t, l, g, c, D, p, u;
                  const f = i || Error(_),
                    k = f instanceof Error,
                    w = k ? f.name : "No Name",
                    C = b(f);
                  if (((this._lastSeenError = C), this._seen.has(w))) return;
                  if (
                    (this._seen.add(w),
                    !(
                      (l =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || l === void 0
                    ) && l.preventAllNetworkTraffic)
                  ) {
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const L = y.SDKType._get(this._sdkKey),
                    M = h.StatsigMetadataProvider.get(),
                    B = k ? f.stack : m(f),
                    G = Object.assign(
                      { tag: o, exception: w, info: B, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, M), { sdkType: L }),
                    );
                  (yield (
                    (p =
                      (D =
                        (c = this._options) === null || c === void 0 ? void 0 : c.networkConfig) ===
                        null || D === void 0
                        ? void 0
                        : D.networkOverrideFunc) !== null && p !== void 0
                      ? p
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(L),
                      "STATSIG-SDK-VERSION": String(M.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(G),
                  }),
                    (u = this._emitter) === null ||
                      u === void 0 ||
                      u.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        }
        e.ErrorBoundary = v;
        function b(n) {
          return n instanceof Error
            ? n
            : typeof n == "string"
              ? new Error(n)
              : new Error("An unknown error occurred.");
        }
        function m(n) {
          try {
            return JSON.stringify(n);
          } catch {
            return _;
          }
        }
        function s(n) {
          const o = new Set();
          let i = Object.getPrototypeOf(n);
          for (; i && i !== Object.prototype; )
            (Object.getOwnPropertyNames(i)
              .filter((r) => typeof i?.[r] == "function")
              .forEach((r) => o.add(r)),
              (i = Object.getPrototypeOf(i)));
          return Array.from(o);
        }
        function a(n) {
          if (!n) return {};
          const o = {};
          return (
            Object.entries(n).forEach(([i, r]) => {
              switch (typeof r) {
                case "number":
                case "bigint":
                case "boolean":
                  o[String(i)] = r;
                  break;
                case "string":
                  r.length < 50 ? (o[String(i)] = r) : (o[String(i)] = "set");
                  break;
                case "object":
                  i === "environment"
                    ? (o.environment = r)
                    : i === "networkConfig"
                      ? (o.networkConfig = r)
                      : (o[String(i)] = r != null ? "set" : "unset");
                  break;
              }
            }),
            o
          );
        }
      })(xe)),
    xe
  );
}
var Ut = {},
  Fn;
function fi() {
  return (Fn || ((Fn = 1), Object.defineProperty(Ut, "__esModule", { value: !0 })), Ut);
}
var Rt = {},
  qn;
function vi() {
  return (qn || ((qn = 1), Object.defineProperty(Rt, "__esModule", { value: !0 })), Rt);
}
var Mt = {},
  Kn;
function hi() {
  return (Kn || ((Kn = 1), Object.defineProperty(Mt, "__esModule", { value: !0 })), Mt);
}
var be = {},
  Bn;
function $r() {
  if (Bn) return be;
  ((Bn = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be.createMemoKey = be.MemoPrefix = void 0),
    (be.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    S = new Set(["userPersistedValues"]);
  function d(y, h, _) {
    let v = `${y}|${h}`;
    if (!_) return v;
    for (const b of Object.keys(_)) {
      if (S.has(b)) return;
      e.has(b) ? (v += `|${b}=true`) : (v += `|${b}=${_[b]}`);
    }
    return v;
  }
  return ((be.createMemoKey = d), be);
}
var Ee = {},
  re = {},
  pe = {},
  Gn;
function yi() {
  if (Gn) return pe;
  Gn = 1;
  var e =
    (pe && pe.__awaiter) ||
    function (b, m, s, a) {
      function n(o) {
        return o instanceof s
          ? o
          : new s(function (i) {
              i(o);
            });
      }
      return new (s || (s = Promise))(function (o, i) {
        function r(g) {
          try {
            l(a.next(g));
          } catch (c) {
            i(c);
          }
        }
        function t(g) {
          try {
            l(a.throw(g));
          } catch (c) {
            i(c);
          }
        }
        function l(g) {
          g.done ? o(g.value) : n(g.value).then(r, t);
        }
        l((a = a.apply(b, m || [])).next());
      });
    };
  (Object.defineProperty(pe, "__esModule", { value: !0 }), (pe._fetchTxtRecords = void 0));
  const S = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    d = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    h = 200;
  function _(b) {
    return e(this, void 0, void 0, function* () {
      const m = yield b(d, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: S,
      });
      if (!m.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const s = yield m.arrayBuffer(),
        a = new Uint8Array(s);
      return v(a);
    });
  }
  pe._fetchTxtRecords = _;
  function v(b) {
    const m = b.findIndex(
      (a, n) =>
        n < h && String.fromCharCode(a) === "=" && y.includes(String.fromCharCode(b[n - 1])),
    );
    if (m === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let s = "";
    for (let a = m - 1; a < b.length; a++) s += String.fromCharCode(b[a]);
    return s.split(",");
  }
  return pe;
}
var Vn;
function mi() {
  if (Vn) return re;
  Vn = 1;
  var e =
    (re && re.__awaiter) ||
    function (i, r, t, l) {
      function g(c) {
        return c instanceof t
          ? c
          : new t(function (D) {
              D(c);
            });
      }
      return new (t || (t = Promise))(function (c, D) {
        function p(k) {
          try {
            f(l.next(k));
          } catch (w) {
            D(w);
          }
        }
        function u(k) {
          try {
            f(l.throw(k));
          } catch (w) {
            D(w);
          }
        }
        function f(k) {
          k.done ? c(k.value) : g(k.value).then(p, u);
        }
        f((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._isDomainFailure = re.NetworkFallbackResolver = void 0));
  const S = yi(),
    d = Ke(),
    y = Q(),
    h = ce(),
    _ = 10080 * 60 * 1e3,
    v = 14400 * 1e3;
  class b {
    constructor(r) {
      var t;
      ((this._fallbackInfo = null),
        (this._errorBoundary = null),
        (this._dnsQueryCooldowns = {}),
        (this._networkOverrideFunc =
          (t = r.networkConfig) === null || t === void 0 ? void 0 : t.networkOverrideFunc));
    }
    setErrorBoundary(r) {
      this._errorBoundary = r;
    }
    tryBumpExpiryTime(r, t) {
      var l;
      const g = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      g &&
        ((g.expiryTime = Date.now() + _),
        a(r, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: g })));
    }
    getActiveFallbackUrl(r, t) {
      var l, g;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let c = this._fallbackInfo;
      c == null && ((c = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = c));
      const D = c[t.endpoint];
      return !D ||
        Date.now() > ((g = D.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== D.urlConfigChecksum
        ? (delete c[t.endpoint], (this._fallbackInfo = c), a(r, this._fallbackInfo), null)
        : D.url
          ? D.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, g) {
      return e(this, void 0, void 0, function* () {
        var c, D;
        try {
          if (!m(l, g)) return !1;
          const u =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            f = this._pickNewFallbackUrl(
              (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[t.endpoint],
              u,
            );
          return f ? (this._updateFallbackInfoWithNewUrl(r, t, f), !0) : !1;
        } catch (p) {
          return (
            (D = this._errorBoundary) === null ||
              D === void 0 ||
              D.logError("tryFetchUpdatedFallbackInfo", p),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(r, t, l) {
      var g, c, D;
      const p = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + _,
          previous: [],
        },
        u = t.endpoint,
        f = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[u];
      (f && p.previous.push(...f.previous), p.previous.length > 10 && (p.previous = []));
      const k =
        (D = (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[u]) === null ||
        D === void 0
          ? void 0
          : D.url;
      (k != null && p.previous.push(k),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [u]: p })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + v;
        const g = [],
          c = yield (0, S._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          D = o(r.defaultUrl);
        for (const p of c) {
          if (!p.startsWith(r.endpointDnsKey + "=")) continue;
          const u = p.split("=");
          if (u.length > 1) {
            let f = u[1];
            (f.endsWith("/") && (f = f.slice(0, -1)), g.push(`https://${f}${D}`));
          }
        }
        return g;
      });
    }
    _pickNewFallbackUrl(r, t) {
      var l;
      if (t == null) return null;
      const g = new Set((l = r?.previous) !== null && l !== void 0 ? l : []),
        c = r?.url;
      let D = null;
      for (const p of t) {
        const u = p.endsWith("/") ? p.slice(0, -1) : p;
        if (!g.has(p) && u !== c) {
          D = u;
          break;
        }
      }
      return D;
    }
  }
  re.NetworkFallbackResolver = b;
  function m(i, r) {
    var t;
    const l = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      r ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  re._isDomainFailure = m;
  function s(i) {
    return `statsig.network_fallback.${(0, d._DJB2)(i)}`;
  }
  function a(i, r) {
    const t = s(i);
    if (!r || Object.keys(r).length === 0) {
      h.Storage.removeItem(t);
      return;
    }
    h.Storage.setItem(t, JSON.stringify(r));
  }
  function n(i) {
    const r = s(i),
      t = h.Storage.getItem(r);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (y.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function o(i) {
    try {
      return new URL(i).pathname;
    } catch {
      return null;
    }
  }
  return re;
}
var He = {},
  zn;
function ei() {
  if (zn) return He;
  ((zn = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.SDKFlags = void 0));
  const e = {};
  return (
    (He.SDKFlags = {
      setFlags: (S, d) => {
        e[S] = d;
      },
      get: (S, d) => {
        var y, h;
        return (h = (y = e[S]) === null || y === void 0 ? void 0 : y[d]) !== null && h !== void 0
          ? h
          : !1;
      },
    }),
    He
  );
}
var Lt = {},
  Jn;
function cn() {
  return (
    Jn ||
      ((Jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const S = ue(),
          d = dt(),
          y = Q(),
          h = ce(),
          _ = ln(),
          v = 1800 * 1e3,
          b = 14400 * 1e3,
          m = {};
        ((e.SessionID = { get: (c) => e.StatsigSession.get(c).data.sessionID }),
          (e.StatsigSession = {
            get: (c) => {
              m[c] == null && (m[c] = s(c));
              const D = m[c];
              return n(D);
            },
            overrideInitialSessionID: (c, D) => {
              m[D] = a(c, D);
            },
          }));
        function s(c) {
          let D = g(c);
          const p = Date.now();
          return (
            D || (D = { sessionID: (0, _.getUUID)(), startTime: p, lastUpdate: p }),
            { data: D, sdkKey: c }
          );
        }
        function a(c, D) {
          const p = Date.now();
          return { data: { sessionID: c, startTime: p, lastUpdate: p }, sdkKey: D };
        }
        function n(c) {
          const D = Date.now(),
            p = c.data,
            u = c.sdkKey;
          if (i(p) || r(p)) {
            ((p.sessionID = (0, _.getUUID)()), (p.startTime = D));
            const k = __STATSIG__ == null ? void 0 : __STATSIG__.instance(u);
            k && k.$emt({ name: "session_expired" });
          }
          ((p.lastUpdate = D),
            l(p, c.sdkKey),
            clearTimeout(c.idleTimeoutID),
            clearTimeout(c.ageTimeoutID));
          const f = D - p.startTime;
          return ((c.idleTimeoutID = o(u, v)), (c.ageTimeoutID = o(u, b - f)), c);
        }
        function o(c, D) {
          return setTimeout(() => {
            var p;
            const u =
              (p = (0, S._getStatsigGlobal)()) === null || p === void 0 ? void 0 : p.instance(c);
            u && u.$emt({ name: "session_expired" });
          }, D);
        }
        function i({ lastUpdate: c }) {
          return Date.now() - c > v;
        }
        function r({ startTime: c }) {
          return Date.now() - c > b;
        }
        function t(c) {
          return `statsig.session_id.${(0, d._getStorageKey)(c)}`;
        }
        function l(c, D) {
          const p = t(D);
          try {
            (0, h._setObjectInStorage)(p, c);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function g(c) {
          const D = t(c);
          return (0, h._getObjectFromStorage)(D);
        }
      })(Lt)),
    Lt
  );
}
var Qe = {},
  xn;
function ti() {
  return (
    xn ||
      ((xn = 1),
      Object.defineProperty(Qe, "__esModule", { value: !0 }),
      (Qe.ErrorTag = void 0),
      (Qe.ErrorTag = { NetworkError: "NetworkError" })),
    Qe
  );
}
var Wn;
function Si() {
  if (Wn) return Ee;
  Wn = 1;
  var e =
    (Ee && Ee.__awaiter) ||
    function (O, E, I, T) {
      function U(R) {
        return R instanceof I
          ? R
          : new I(function (P) {
              P(R);
            });
      }
      return new (I || (I = Promise))(function (R, P) {
        function $(A) {
          try {
            F(T.next(A));
          } catch (j) {
            P(j);
          }
        }
        function q(A) {
          try {
            F(T.throw(A));
          } catch (j) {
            P(j);
          }
        }
        function F(A) {
          A.done ? R(A.value) : U(A.value).then($, q);
        }
        F((T = T.apply(O, E || [])).next());
      });
    };
  (Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.NetworkCore = void 0), ue());
  const S = ue(),
    d = rn(),
    y = Q(),
    h = _t(),
    _ = mi(),
    v = ei(),
    b = un(),
    m = Ne(),
    s = cn(),
    a = ft(),
    n = ti(),
    o = ut(),
    i = gt(),
    r = an(),
    t = 1e4,
    l = 500,
    g = 3e4,
    c = 1e3,
    D = 50,
    p = D / c,
    u = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class f {
    constructor(E, I) {
      ((this._emitter = I),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        E && (this._options = E),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new _.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(E)));
    }
    setLogEventCompressionMode(E) {
      this._options.logEventCompressionMode = E;
    }
    setErrorBoundary(E) {
      ((this._errorBoundary = E),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(E));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const E = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), E);
    }
    beacon(E) {
      if (!k(E)) return !1;
      const I = this._getInternalRequestArgs("POST", E),
        T = this._getPopulatedURL(I),
        U = navigator;
      return U.sendBeacon.bind(U)(T, I.body);
    }
    post(E) {
      return e(this, void 0, void 0, function* () {
        const I = this._getInternalRequestArgs("POST", E);
        return (this._tryEncodeBody(I), yield this._tryToCompressBody(I), this._sendRequest(I));
      });
    }
    get(E) {
      const I = this._getInternalRequestArgs("GET", E);
      return this._sendRequest(I);
    }
    _sendRequest(E) {
      return e(this, void 0, void 0, function* () {
        var I, T, U, R;
        if (!k(E) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: $, retries: q, attempt: F } = E,
          A = E.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            y.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1,
          V = typeof AbortController < "u" ? new AbortController() : null,
          x = setTimeout(() => {
            V?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          K = this._getPopulatedURL(E);
        let Z = null;
        const le = (0, r._isUnloading)();
        try {
          const J = {
            method: P,
            body: $,
            headers: Object.assign({}, E.headers),
            signal: V?.signal,
            priority: E.priority,
            keepalive: le,
          };
          B(E, j);
          const ee = this._leakyBucket[A];
          if (
            (ee && ((ee.lastRequestTime = Date.now()), (this._leakyBucket[A] = ee)),
            (Z = yield (
              (I = this._netConfig.networkOverrideFunc) !== null && I !== void 0 ? I : fetch
            )(K, J)),
            clearTimeout(x),
            !Z.ok)
          ) {
            const _e = yield Z.text().catch(() => "No Text"),
              ge = new Error(`NetworkError: ${K} ${_e}`);
            throw ((ge.name = "NetworkError"), ge);
          }
          const te = yield Z.text();
          return (
            G(E, Z, j, te),
            this._fallbackResolver.tryBumpExpiryTime(E.sdkKey, E.urlConfig),
            { body: te, code: Z.status }
          );
        } catch (J) {
          const ee = L(V, J),
            Fe = M(V);
          if (
            (G(E, Z, j, "", J),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              E.sdkKey,
              E.urlConfig,
              ee,
              Fe,
            )) &&
              (E.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(E.sdkKey, E.urlConfig)),
            !q || j > q || !u.has((T = Z?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (U = this._emitter) === null ||
              U === void 0 ||
              U.call(this, {
                name: "error",
                error: J,
                tag: n.ErrorTag.NetworkError,
                requestArgs: E,
              });
            const _e = `A networking error occurred during ${P} request to ${K}.`;
            return (
              y.Log.error(_e, ee, J),
              (R = this._errorBoundary) === null || R === void 0 || R.attachErrorIfNoneExists(_e),
              null
            );
          }
          return (
            yield N(j),
            this._sendRequest(Object.assign(Object.assign({}, E), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(E) {
      let I = E?.logEventCompressionMode;
      return (
        !I && E?.disableCompression === !0 && (I = i.LogEventCompressionMode.Disabled),
        I || (I = i.LogEventCompressionMode.Enabled),
        I
      );
    }
    _isRateLimited(E) {
      var I;
      const T = Date.now(),
        U =
          (I = this._leakyBucket[E]) !== null && I !== void 0
            ? I
            : { count: 0, lastRequestTime: T },
        R = T - U.lastRequestTime,
        P = Math.floor(R * p);
      return (
        (U.count = Math.max(0, U.count - P)),
        U.count >= D
          ? !0
          : ((U.count += 1), (U.lastRequestTime = T), (this._leakyBucket[E] = U), !1)
      );
    }
    _getPopulatedURL(E) {
      var I;
      const T = (I = E.fallbackUrl) !== null && I !== void 0 ? I : E.urlConfig.getUrl();
      (E.urlConfig.endpoint === h.Endpoint._initialize ||
        E.urlConfig.endpoint === h.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const U = Object.assign(
          {
            [h.NetworkParam.SdkKey]: E.sdkKey,
            [h.NetworkParam.SdkType]: b.SDKType._get(E.sdkKey),
            [h.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [h.NetworkParam.Time]: String(Date.now()),
            [h.NetworkParam.SessionID]: s.SessionID.get(E.sdkKey),
          },
          E.params,
        ),
        R = Object.keys(U)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(U[P])}`)
          .join("&");
      return `${T}${R ? `?${R}` : ""}`;
    }
    _tryEncodeBody(E) {
      var I;
      const T = (0, m._getWindowSafe)(),
        U = E.body;
      if (
        !(
          !E.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof U != "string" ||
          (0, S._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((E.body = T.btoa(U).split("").reverse().join("")),
            (E.params = Object.assign(
              Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
              { [h.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (R) {
          y.Log.warn(`Request encoding failed for ${E.urlConfig.getUrl()}`, R);
        }
    }
    _tryToCompressBody(E) {
      return e(this, void 0, void 0, function* () {
        var I;
        const T = E.body;
        if (!(typeof T != "string" || !C(E, this._options)))
          try {
            const U = new TextEncoder().encode(T),
              R = new CompressionStream("gzip"),
              P = R.writable.getWriter();
            (P.write(U).catch(y.Log.error), P.close().catch(y.Log.error));
            const $ = R.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const A = q.reduce((x, K) => x + K.length, 0),
              j = new Uint8Array(A);
            let V = 0;
            for (const x of q) (j.set(x, V), (V += x.length));
            ((E.body = j),
              (E.params = Object.assign(
                Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
                { [h.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (U) {
            y.Log.warn(`Request compression failed for ${E.urlConfig.getUrl()}`, U);
          }
      });
    }
    _getInternalRequestArgs(E, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        U = Object.assign(Object.assign({}, I), { method: E, fallbackUrl: T });
      return ("data" in I && w(U, I.data), U);
    }
  }
  Ee.NetworkCore = f;
  const k = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    w = (O, E) => {
      const { sdkKey: I, fallbackUrl: T } = O,
        U = a.StableID.get(I),
        R = s.SessionID.get(I),
        P = b.SDKType._get(I);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, E), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: U,
            sessionID: R,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(O, E) {
    if (
      !O.isCompressable ||
      (0, S._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = v.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (E.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(I && !T);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function L(O, E) {
    return O?.signal.aborted && typeof O.signal.reason == "string"
      ? O.signal.reason
      : typeof E == "string"
        ? E
        : E instanceof Error
          ? `${E.name}: ${E.message}`
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
  function B(O, E) {
    O.urlConfig.endpoint === h.Endpoint._initialize &&
      d.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: E });
  }
  function G(O, E, I, T, U) {
    O.urlConfig.endpoint === h.Endpoint._initialize &&
      d.Diagnostics._markInitNetworkReqEnd(O.sdkKey, d.Diagnostics._getDiagnosticsData(E, I, T, U));
  }
  function N(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((E) => setTimeout(E, Math.min(l * (O * O), g)));
    });
  }
  return Ee;
}
var Pt = {},
  Hn;
function bi() {
  return (Hn || ((Hn = 1), Object.defineProperty(Pt, "__esModule", { value: !0 })), Pt);
}
var At = {},
  Qn;
function Ei() {
  return (Qn || ((Qn = 1), Object.defineProperty(At, "__esModule", { value: !0 })), At);
}
var De = {},
  Xn;
function pi() {
  if (Xn) return De;
  Xn = 1;
  var e =
    (De && De.__awaiter) ||
    function (r, t, l, g) {
      function c(D) {
        return D instanceof l
          ? D
          : new l(function (p) {
              p(D);
            });
      }
      return new (l || (l = Promise))(function (D, p) {
        function u(w) {
          try {
            k(g.next(w));
          } catch (C) {
            p(C);
          }
        }
        function f(w) {
          try {
            k(g.throw(w));
          } catch (C) {
            p(C);
          }
        }
        function k(w) {
          w.done ? D(w.value) : c(w.value).then(u, f);
        }
        k((g = g.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(De, "__esModule", { value: !0 }), (De.StatsigClientBase = void 0), ue());
  const S = ue(),
    d = Zr(),
    y = Qr(),
    h = Q(),
    _ = $r(),
    v = Ne(),
    b = cn(),
    m = ft(),
    s = gt(),
    a = ce(),
    n = 3e3;
  class o {
    constructor(t, l, g, c) {
      var D, p, u, f;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const k = this.$emt.bind(this);
      (c?.logLevel != null && (h.Log.level = c.logLevel),
        c?.disableStorage && a.Storage._setDisabled(!0),
        c?.initialSessionID && b.StatsigSession.overrideInitialSessionID(c.initialSessionID, t),
        c?.storageProvider && a.Storage._setProvider(c.storageProvider),
        c?.enableCookies && m.StableID._setCookiesEnabled(t, c.enableCookies),
        c?.disableStableID && m.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = c ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (D = c?.overrideAdapter) !== null && D !== void 0 ? D : null),
        (this._logger = new y.EventLogger(t, k, g, c)),
        (this._errorBoundary = new d.ErrorBoundary(t, c, k)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, c, g),
        (this.storageProvider = a.Storage),
        (f =
          (u = (p = this.overrideAdapter) === null || p === void 0 ? void 0 : p.loadFromStorage) ===
            null || u === void 0
            ? void 0
            : u.call(p)) === null ||
          f === void 0 ||
          f.catch((w) => this._errorBoundary.logError("OA::loadFromStorage", w)),
        this._primeReadyRipcord(),
        i(t, this));
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
          m.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        const g = this._listeners[t].indexOf(l);
        g !== -1 && this._listeners[t].splice(g, 1);
      }
    }
    $on(t, l) {
      ((l.__isInternal = !0), this.on(t, l));
    }
    $emt(t) {
      var l;
      const g = (c) => {
        try {
          c(t);
        } catch (D) {
          if (c.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, D);
            return;
          }
          h.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((c) => g(c)),
        (l = this._listeners["*"]) === null || l === void 0 || l.forEach(g));
    }
    _setStatus(t, l) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: l }));
    }
    _enqueueExposure(t, l, g) {
      if (g?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(l);
    }
    _memoize(t, l) {
      return (g, c) => {
        if (this._options.disableEvaluationMemoization) return l(g, c);
        const D = (0, _.createMemoKey)(t, g, c);
        return D
          ? (D in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[D] = l(g, c))),
            this._memoCache[D])
          : l(g, c);
      };
    }
  }
  De.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, v._isServerEnv)()) return;
    const g = (0, S._getStatsigGlobal)(),
      c = (l = g.instances) !== null && l !== void 0 ? l : {},
      D = t;
    (c[r] != null &&
      h.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (c[r] = D),
      g.firstInstance || (g.firstInstance = D),
      (g.instances = c),
      (__STATSIG__ = g));
  }
  return De;
}
var Xe = {},
  Yn;
function Di() {
  return (
    Yn ||
      ((Yn = 1),
      Object.defineProperty(Xe, "__esModule", { value: !0 }),
      (Xe.DataAdapterCachePrefix = void 0),
      (Xe.DataAdapterCachePrefix = "statsig.cached")),
    Xe
  );
}
var jt = {},
  Zn;
function ki() {
  return (Zn || ((Zn = 1), Object.defineProperty(jt, "__esModule", { value: !0 })), jt);
}
var W = {},
  $n;
function wi() {
  if ($n) return W;
  (($n = 1),
    Object.defineProperty(W, "__esModule", { value: !0 }),
    (W._makeTypedGet =
      W._mergeOverride =
      W._makeLayer =
      W._makeExperiment =
      W._makeDynamicConfig =
      W._makeFeatureGate =
        void 0));
  const e = Q(),
    S = sn();
  function d(s, a, n, o) {
    var i;
    return {
      name: s,
      details: a,
      ruleID: (i = n?.rule_id) !== null && i !== void 0 ? i : "",
      __evaluation: n,
      value: o,
    };
  }
  function y(s, a, n) {
    var o;
    return Object.assign(Object.assign({}, d(s, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  W._makeFeatureGate = y;
  function h(s, a, n) {
    var o;
    const i = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, d(s, a, n, i)), { get: m(s, n?.value) });
  }
  W._makeDynamicConfig = h;
  function _(s, a, n) {
    var o;
    const i = h(s, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  W._makeExperiment = _;
  function v(s, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, d(s, a, n, void 0)), {
      get: m(s, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  W._makeLayer = v;
  function b(s, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, s), a), { get: m(s.name, n, o) });
  }
  W._mergeOverride = b;
  function m(s, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, S._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${s}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((W._makeTypedGet = m), W);
}
var Nt = {},
  er;
function Ii() {
  return (er || ((er = 1), Object.defineProperty(Nt, "__esModule", { value: !0 })), Nt);
}
var ke = {},
  tr;
function Oi() {
  if (tr) return ke;
  ((tr = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.UPDATE_DETAIL_ERROR_MESSAGES = ke.createUpdateDetails = void 0));
  const e = (S, d, y, h, _, v) => ({
    duration: y,
    source: d,
    success: S,
    error: h,
    sourceUrl: _,
    warnings: v,
  });
  return (
    (ke.createUpdateDetails = e),
    (ke.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    ke
  );
}
var nr;
function Hi() {
  return (
    nr ||
      ((nr = 1),
      (function (e) {
        var S =
            (fe && fe.__createBinding) ||
            (Object.create
              ? function (s, a, n, o) {
                  o === void 0 && (o = n);
                  var i = Object.getOwnPropertyDescriptor(a, n);
                  ((!i || ("get" in i ? !a.__esModule : i.writable || i.configurable)) &&
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(s, o, i));
                }
              : function (s, a, n, o) {
                  (o === void 0 && (o = n), (s[o] = a[n]));
                }),
          d =
            (fe && fe.__exportStar) ||
            function (s, a) {
              for (var n in s)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && S(a, s, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          ue());
        const y = ue(),
          h = rn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return h.Diagnostics;
          },
        });
        const _ = Qr();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const v = Q();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return v.Log;
          },
        });
        const b = ut(),
          m = ce();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return m.Storage;
          },
        }),
          d(ue(), e),
          d(dt(), e),
          d(di(), e),
          d(_i(), e),
          d(rn(), e),
          d(gi(), e),
          d(Zr(), e),
          d(fi(), e),
          d(vi(), e),
          d(Ke(), e),
          d(hi(), e),
          d(Q(), e),
          d($r(), e),
          d(_t(), e),
          d(Si(), e),
          d(bi(), e),
          d(Ei(), e),
          d(Ne(), e),
          d(un(), e),
          d(cn(), e),
          d(ft(), e),
          d(pi(), e),
          d(ti(), e),
          d(Di(), e),
          d(Wr(), e),
          d(ut(), e),
          d(gt(), e),
          d(ki(), e),
          d(wi(), e),
          d(Ii(), e),
          d(Xr(), e),
          d(ce(), e),
          d(Yr(), e),
          d(sn(), e),
          d(Hr(), e),
          d(ln(), e),
          d(an(), e),
          d(Oi(), e),
          d(ei(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: v.Log, SDK_VERSION: b.SDK_VERSION }));
      })(fe)),
    fe
  );
}
var we = {},
  Ft = {},
  qt = {},
  rr;
function z() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const S = " DEBUG ",
          d = "  INFO ",
          y = "  WARN ",
          h = " ERROR ";
        function _(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class v {
          static info(...m) {
            v.level >= e.LogLevel.Info && console.info(d, ..._(m));
          }
          static debug(...m) {
            v.level >= e.LogLevel.Debug && console.debug(S, ..._(m));
          }
          static warn(...m) {
            v.level >= e.LogLevel.Warn && console.warn(y, ..._(m));
          }
          static error(...m) {
            v.level >= e.LogLevel.Error && console.error(h, ..._(m));
          }
        }
        ((e.Log = v), (v.level = e.LogLevel.Warn));
      })(qt)),
    qt
  );
}
var ir;
function je() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        var S, d, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const h = z(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = _;
        const v = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = v;
        const b = (i) => {
          const r = (0, e._getStatsigGlobal)();
          return i
            ? r.instances && r.instances[i]
            : (r.instances &&
                Object.keys(r.instances).length > 1 &&
                h.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              r.firstInstance);
        };
        e._getInstance = b;
        const m = "__STATSIG__",
          s = typeof window < "u" ? window : {},
          a = typeof lt < "u" ? lt : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (d = (S = s[m]) !== null && S !== void 0 ? S : a[m]) !== null && d !== void 0
                ? d
                : n[m]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((s[m] = o), (a[m] = o), (n[m] = o));
      })(Ft)),
    Ft
  );
}
var Kt = {},
  or;
function on() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const S = new Map(),
          d = "start",
          y = "end",
          h = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (s) => S.get(s),
          _markInitOverallStart: (s) => {
            b(s, _({}, d, "overall"));
          },
          _markInitOverallEnd: (s, a, n) => {
            b(
              s,
              _(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: n,
                },
                y,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (s, a) => {
            b(s, _(a, d, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (s, a) => {
            b(s, _(a, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (s) => {
            b(s, _({}, d, "initialize", "process"));
          },
          _markInitProcessEnd: (s, a) => {
            b(s, _(a, y, "initialize", "process"));
          },
          _clearMarkers: (s) => {
            S.delete(s);
          },
          _formatError(s) {
            if (s && typeof s == "object")
              return { code: m(s, "code"), name: m(s, "name"), message: m(s, "message") };
          },
          _getDiagnosticsData(s, a, n, o) {
            var i;
            return {
              success: s?.ok === !0,
              statusCode: s?.status,
              sdkRegion:
                (i = s?.headers) === null || i === void 0 ? void 0 : i.get("x-statsig-region"),
              isDelta: n.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: e.Diagnostics._formatError(o),
            };
          },
          _enqueueDiagnosticsEvent(s, a, n, o) {
            const i = e.Diagnostics._getMarkers(n);
            if (i == null || i.length <= 0) return -1;
            const r = i[i.length - 1].timestamp - i[0].timestamp;
            e.Diagnostics._clearMarkers(n);
            const t = v(s, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function _(s, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, s);
        }
        function v(s, a) {
          return { eventName: h, user: s, value: null, metadata: a, time: Date.now() };
        }
        function b(s, a) {
          var n;
          const o = (n = S.get(s)) !== null && n !== void 0 ? n : [];
          (o.push(a), S.set(s, o));
        }
        function m(s, a) {
          if (a in s) return s[a];
        }
      })(Kt)),
    Kt
  );
}
var Ie = {},
  Oe = {},
  Bt = {},
  Ce = {},
  sr;
function dn() {
  if (sr) return Ce;
  ((sr = 1),
    Object.defineProperty(Ce, "__esModule", { value: !0 }),
    (Ce._isTypeMatch = Ce._typeOf = void 0));
  function e(d) {
    return Array.isArray(d) ? "array" : typeof d;
  }
  Ce._typeOf = e;
  function S(d, y) {
    const h = (_) => (Array.isArray(_) ? "array" : _ === null ? "null" : typeof _);
    return h(d) === h(y);
  }
  return ((Ce._isTypeMatch = S), Ce);
}
var ar;
function Be() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const S = dn(),
          d = (_) => {
            let v = 0;
            for (let b = 0; b < _.length; b++) {
              const m = _.charCodeAt(b);
              ((v = (v << 5) - v + m), (v = v & v));
            }
            return String(v >>> 0);
          };
        e._DJB2 = d;
        const y = (_, v) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, v)));
        e._DJB2Object = y;
        const h = (_, v) => {
          if (_ == null) return null;
          const b = Object.keys(_).sort(),
            m = {};
          return (
            b.forEach((s) => {
              const a = _[s];
              if (v === 0 || (0, S._typeOf)(a) !== "object") {
                m[s] = a;
                return;
              }
              m[s] = (0, e._getSortedObject)(a, v != null ? v - 1 : v);
            }),
            m
          );
        };
        e._getSortedObject = h;
      })(Bt)),
    Bt
  );
}
var lr;
function vt() {
  if (lr) return Oe;
  ((lr = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe._getStorageKey = Oe._getUserStorageKey = void 0));
  const e = Be();
  function S(y, h, _) {
    var v;
    if (_) return _(y, h);
    const b = h && h.customIDs ? h.customIDs : {},
      m = [
        `uid:${(v = h?.userID) !== null && v !== void 0 ? v : ""}`,
        `cids:${Object.keys(b)
          .sort((s, a) => s.localeCompare(a))
          .map((s) => `${s}-${b[s]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(m.join("|"));
  }
  Oe._getUserStorageKey = S;
  function d(y, h, _) {
    return h ? S(y, h, _) : (0, e._DJB2)(`k:${y}`);
  }
  return ((Oe._getStorageKey = d), Oe);
}
var Gt = {},
  ur;
function ht() {
  return (
    ur ||
      ((ur = 1),
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
      })(Gt)),
    Gt
  );
}
var Vt = {},
  cr;
function ae() {
  return (
    cr ||
      ((cr = 1),
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
        const S = z(),
          d = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = d;
        const y = () => {
          var a;
          const n = (0, e._getWindowSafe)();
          return (a = n?.document) !== null && a !== void 0 ? a : null;
        };
        e._getDocumentSafe = y;
        const h = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const a =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || a;
        };
        e._isServerEnv = h;
        const _ = (a, n) => {
          const o = (0, e._getWindowSafe)();
          typeof o?.addEventListener == "function" && o.addEventListener(a, n);
        };
        e._addWindowEventListenerSafe = _;
        const v = (a, n) => {
          const o = (0, e._getDocumentSafe)();
          typeof o?.addEventListener == "function" && o.addEventListener(a, n);
        };
        e._addDocumentEventListenerSafe = v;
        const b = () => {
          var a;
          try {
            return (a = (0, e._getWindowSafe)()) === null || a === void 0
              ? void 0
              : a.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = b;
        const m = () => {
          const a = (0, e._getWindowSafe)();
          return a && "onpagehide" in a ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = m;
        const s = (a, n) => {
          try {
            return JSON.parse(JSON.stringify(n));
          } catch {
            return (S.Log.error(`Failed to clone object ${a}`), null);
          }
        };
        e._cloneObject = s;
      })(Vt)),
    Vt
  );
}
var zt = {},
  Jt = {},
  dr;
function de() {
  return (
    dr ||
      ((dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const S = z(),
          d = ae(),
          y = {},
          h = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (n) => (y[n] ? y[n] : null),
            setItem: (n, o) => {
              y[n] = o;
            },
            removeItem: (n) => {
              delete y[n];
            },
            getAllKeys: () => Object.keys(y),
          };
        let _ = null;
        try {
          const n = (0, d._getWindowSafe)();
          n &&
            n.localStorage &&
            typeof n.localStorage.getItem == "function" &&
            (_ = {
              isReady: () => !0,
              isReadyResolver: () => null,
              getProviderName: () => "LocalStorage",
              getItem: (o) => n.localStorage.getItem(o),
              setItem: (o, i) => n.localStorage.setItem(o, i),
              removeItem: (o) => n.localStorage.removeItem(o),
              getAllKeys: () => Object.keys(n.localStorage),
            });
        } catch {
          S.Log.warn("Failed to setup localStorageProvider.");
        }
        let v = _ ?? h,
          b = v;
        function m(n) {
          try {
            return n();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(h), null);
            throw o;
          }
        }
        e.Storage = {
          isReady: () => b.isReady(),
          isReadyResolver: () => b.isReadyResolver(),
          getProviderName: () => b.getProviderName(),
          getItem: (n) => m(() => b.getItem(n)),
          setItem: (n, o) => m(() => b.setItem(n, o)),
          removeItem: (n) => b.removeItem(n),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (n) => {
            ((v = n), (b = n));
          },
          _setDisabled: (n) => {
            n ? (b = h) : (b = v);
          },
        };
        function s(n) {
          const o = e.Storage.getItem(n);
          try {
            return JSON.parse(o ?? "null");
          } catch {
            return (S.Log.error(`Failed to parse value for key "${n}"`), null);
          }
        }
        e._getObjectFromStorage = s;
        function a(n, o) {
          e.Storage.setItem(n, JSON.stringify(o));
        }
        e._setObjectInStorage = a;
      })(Jt)),
    Jt
  );
}
var Ye = {},
  _r;
function _n() {
  if (_r) return Ye;
  ((_r = 1), Object.defineProperty(Ye, "__esModule", { value: !0 }), (Ye.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let S = new Date().getTime(),
      d = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (h) => {
        let _ = Math.random() * 16;
        return (
          S > 0
            ? ((_ = ((S + _) % 16) | 0), (S = Math.floor(S / 16)))
            : ((_ = ((d + _) % 16) | 0), (d = Math.floor(d / 16))),
          (h === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ye.getUUID = e), Ye);
}
var xt = {},
  gr;
function yt() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const S = ae(),
          d = "foreground",
          y = "background",
          h = [];
        let _ = d,
          v = !1;
        const b = () => _ === d;
        e._isCurrentlyVisible = b;
        const m = () => v;
        e._isUnloading = m;
        const s = (n) => {
          h.unshift(n);
        };
        e._subscribeToVisiblityChanged = s;
        const a = (n) => {
          n !== _ && ((_ = n), h.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, S._addWindowEventListenerSafe)("focus", () => {
            ((v = !1), (0, e._notifyVisibilityChanged)(d));
          }),
          (0, S._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, S._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? d : y);
          }),
          (0, S._addWindowEventListenerSafe)((0, S._getUnloadEvent)(), () => {
            ((v = !0), (0, e._notifyVisibilityChanged)(y));
          }));
      })(xt)),
    xt
  );
}
var fr;
function st() {
  return (
    fr ||
      ((fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const S = vt(),
          d = z(),
          y = de(),
          h = _n(),
          _ = yt(),
          v = 1800 * 1e3,
          b = 14400 * 1e3,
          m = 15e3,
          s = {};
        ((0, _._subscribeToVisiblityChanged)((p) => {
          p === "background" && Object.values(s).forEach((u) => t(u));
        }),
          (e.SessionID = { get: (p) => e.StatsigSession.get(p).data.sessionID }),
          (e.StatsigSession = {
            get: (p, u = !0) => {
              s[p] == null && (s[p] = c(p));
              const f = s[p];
              return a(f, u);
            },
            overrideInitialSessionID: (p, u) => {
              const f = Date.now(),
                k = {
                  data: { sessionID: p, startTime: f, lastUpdate: f },
                  sdkKey: u,
                  lastPersistedAt: Date.now(),
                  storageKey: r(u),
                };
              (t(k), (s[u] = k));
            },
            checkForIdleSession: (p) => {
              const u = s[p];
              if (!u) return;
              n(u) && t(u);
            },
          }));
        function a(p, u) {
          const f = Date.now();
          return (n(p) ? t(p) : u && ((p.data.lastUpdate = f), l(p)), p);
        }
        function n(p) {
          var u;
          const f = p.data,
            k = o(f) || i(f);
          return (
            k &&
              ((p.data = D()),
              (u = __STATSIG__ == null ? void 0 : __STATSIG__.instance(p.sdkKey)) === null ||
                u === void 0 ||
                u.$emt({ name: "session_expired" })),
            k
          );
        }
        function o({ lastUpdate: p }) {
          return Date.now() - p > v;
        }
        function i({ startTime: p }) {
          return Date.now() - p > b;
        }
        function r(p) {
          return `statsig.session_id.${(0, S._getStorageKey)(p)}`;
        }
        function t(p) {
          try {
            ((0, y._setObjectInStorage)(p.storageKey, p.data), (p.lastPersistedAt = Date.now()));
          } catch {
            d.Log.warn("Failed to save SessionID");
          }
        }
        function l(p) {
          Date.now() - p.lastPersistedAt > m && t(p);
        }
        function g(p) {
          return (0, y._getObjectFromStorage)(p);
        }
        function c(p) {
          const u = r(p),
            f = g(u);
          return f && f.sessionID && f.startTime && f.lastUpdate
            ? { data: f, sdkKey: p, lastPersistedAt: 0, storageKey: u }
            : { data: D(), sdkKey: p, lastPersistedAt: 0, storageKey: u };
        }
        function D() {
          return { sessionID: (0, h.getUUID)(), startTime: Date.now(), lastUpdate: Date.now() };
        }
      })(zt)),
    zt
  );
}
var Y = {},
  vr;
function ni() {
  if (vr) return Y;
  ((vr = 1),
    Object.defineProperty(Y, "__esModule", { value: !0 }),
    (Y._createLayerParameterExposure =
      Y._createConfigExposure =
      Y._mapExposures =
      Y._createGateExposure =
      Y._isExposureEvent =
        void 0));
  const e = "statsig::config_exposure",
    S = "statsig::gate_exposure",
    d = "statsig::layer_exposure",
    y = (a, n, o, i, r) => (
      o.bootstrapMetadata && (i.bootstrapMetadata = o.bootstrapMetadata),
      {
        eventName: a,
        user: n,
        value: null,
        metadata: s(o, i),
        secondaryExposures: r,
        time: Date.now(),
      }
    ),
    h = ({ eventName: a }) => a === S || a === e || a === d;
  Y._isExposureEvent = h;
  const _ = (a, n, o) => {
    var i, r, t;
    const l = { gate: n.name, gateValue: String(n.value), ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (l.configVersion = n.__evaluation.version),
      y(
        S,
        a,
        n.details,
        l,
        v(
          (t = (r = n.__evaluation) === null || r === void 0 ? void 0 : r.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          o,
        ),
      )
    );
  };
  Y._createGateExposure = _;
  function v(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  Y._mapExposures = v;
  const b = (a, n, o) => {
    var i, r, t, l;
    const g = { config: n.name, ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (g.configVersion = n.__evaluation.version),
      ((r = n.__evaluation) === null || r === void 0 ? void 0 : r.passed) != null &&
        (g.rulePassed = String(n.__evaluation.passed)),
      y(
        e,
        a,
        n.details,
        g,
        v(
          (l = (t = n.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && l !== void 0
            ? l
            : [],
          o,
        ),
      )
    );
  };
  Y._createConfigExposure = b;
  const m = (a, n, o, i) => {
    var r, t, l, g, c, D, p;
    const u = n.__evaluation,
      f = ((r = u?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let k = "",
      w = (t = u?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    f &&
      ((k = (l = u.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (w = (g = u.secondary_exposures) !== null && g !== void 0 ? g : []));
    const C = (c = n.__evaluation) === null || c === void 0 ? void 0 : c.parameter_rule_ids,
      L = {
        config: n.name,
        parameterName: o,
        ruleID: (D = C?.[o]) !== null && D !== void 0 ? D : n.ruleID,
        allocatedExperiment: k,
        isExplicitParameter: String(f),
      };
    return (
      ((p = n.__evaluation) === null || p === void 0 ? void 0 : p.version) != null &&
        (L.configVersion = n.__evaluation.version),
      y(d, a, n.details, L, v(w, i))
    );
  };
  Y._createLayerParameterExposure = m;
  const s = (a, n) => (
    (n.reason = a.reason),
    a.lcut && (n.lcut = String(a.lcut)),
    a.receivedAt && (n.receivedAt = String(a.receivedAt)),
    n
  );
  return Y;
}
var Te = {},
  hr;
function mt() {
  return (
    hr ||
      ((hr = 1),
      Object.defineProperty(Te, "__esModule", { value: !0 }),
      (Te.LoggingEnabledOption = Te.LogEventCompressionMode = void 0),
      (Te.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (Te.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    Te
  );
}
var Ze = {},
  yr;
function ri() {
  if (yr) return Ze;
  ((yr = 1),
    Object.defineProperty(Ze, "__esModule", { value: !0 }),
    (Ze.UrlConfiguration = void 0));
  const e = Be(),
    S = ht(),
    d = {
      [S.Endpoint._initialize]: "i",
      [S.Endpoint._rgstr]: "e",
      [S.Endpoint._download_config_specs]: "d",
    };
  let y = class {
    constructor(_, v, b, m) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = d[_]),
        v && (this.customUrl = v),
        !v && b && (this.customUrl = b.endsWith("/") ? `${b}${_}` : `${b}/${_}`),
        m && (this.fallbackUrls = m));
      const s = S.NetworkDefault[_];
      this.defaultUrl = `${s}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const v = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + v);
    }
  };
  return ((Ze.UrlConfiguration = y), Ze);
}
var mr;
function ii() {
  if (mr) return Ie;
  mr = 1;
  var e =
    (Ie && Ie.__awaiter) ||
    function (p, u, f, k) {
      function w(C) {
        return C instanceof f
          ? C
          : new f(function (L) {
              L(C);
            });
      }
      return new (f || (f = Promise))(function (C, L) {
        function M(N) {
          try {
            G(k.next(N));
          } catch (O) {
            L(O);
          }
        }
        function B(N) {
          try {
            G(k.throw(N));
          } catch (O) {
            L(O);
          }
        }
        function G(N) {
          N.done ? C(N.value) : w(N.value).then(M, B);
        }
        G((k = k.apply(p, u || [])).next());
      });
    };
  (Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.EventLogger = void 0));
  const S = vt(),
    d = Be(),
    y = z(),
    h = ht(),
    _ = ae(),
    v = st(),
    b = ni(),
    m = mt(),
    s = de(),
    a = ri(),
    n = yt(),
    o = 100,
    i = 1e4,
    r = 1e3,
    t = 6e5,
    l = 500,
    g = 200,
    c = {};
  let D = class qe {
    static _safeFlushAndForget(u) {
      var f;
      (f = c[u]) === null || f === void 0 || f.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(u) {
      var f;
      (f = c[u]) === null || f === void 0 || f._retryFailedLogs();
    }
    constructor(u, f, k, w) {
      var C, L;
      ((this._sdkKey = u),
        (this._emitter = f),
        (this._network = k),
        (this._options = w),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = w?.loggingEnabled) !== null && C !== void 0
            ? C
            : w?.disableLogging === !0
              ? m.LoggingEnabledOption.disabled
              : m.LoggingEnabledOption.browserOnly),
        w?.loggingEnabled &&
          w.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = w?.loggingBufferMaxSize) !== null && L !== void 0 ? L : o));
      const M = w?.networkConfig;
      this._logEventUrlConfig = new a.UrlConfiguration(
        h.Endpoint._rgstr,
        M?.logEventUrl,
        M?.api,
        M?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(u) {
      this._network.setLogEventCompressionMode(u);
    }
    setLoggingEnabled(u) {
      if (this._loggingEnabled === "disabled" && u !== "disabled") {
        const f = this._getStorageKey(),
          k = (0, s._getObjectFromStorage)(f);
        (k && this._queue.push(...k), s.Storage.removeItem(f));
      }
      this._loggingEnabled = u;
    }
    enqueue(u) {
      this._shouldLogEvent(u) &&
        (this._normalizeAndAppendEvent(u),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && qe._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(u) {
      var f;
      const k = (f = this._nonExposedChecks[u]) !== null && f !== void 0 ? f : 0;
      this._nonExposedChecks[u] = k + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var u;
      const f = (0, _._isServerEnv)();
      (f &&
        ((u = this._options) === null || u === void 0 ? void 0 : u.loggingEnabled) !== "always") ||
        ((c[this._sdkKey] = this),
        f ||
          (0, n._subscribeToVisiblityChanged)((k) => {
            k === "background"
              ? qe._safeFlushAndForget(this._sdkKey)
              : k === "foreground" && qe._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete c[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const u = this._queue;
        ((this._queue = []), yield this._sendEvents(u));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > g) &&
          setTimeout(() => qe._safeFlushAndForget(this._sdkKey), g));
    }
    _shouldLogEvent(u) {
      var f;
      if (
        ((f = this._options) === null || f === void 0 ? void 0 : f.loggingEnabled) !== "always" &&
        (0, _._isServerEnv)()
      )
        return !1;
      if (!(0, b._isExposureEvent)(u)) return !0;
      const k = u.user ? u.user : { statsigEnvironment: void 0 },
        w = (0, S._getUserStorageKey)(this._sdkKey, k),
        C = u.metadata ? u.metadata : {},
        L = [
          u.eventName,
          w,
          C.gate,
          C.config,
          C.ruleID,
          C.allocatedExperiment,
          C.parameterName,
          String(C.isExplicitParameter),
          C.reason,
        ].join("|"),
        M = this._lastExposureTimeMap[L],
        B = Date.now();
      return M && B - M < t
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > r && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[L] = B),
          !0);
    }
    _sendEvents(u) {
      return e(this, void 0, void 0, function* () {
        var f, k;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(u), !1);
        try {
          const C =
            (0, n._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((k = (f = this._options) === null || f === void 0 ? void 0 : f.networkConfig) ===
              null || k === void 0
              ? void 0
              : k.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: u }),
            (C ? this._sendEventsViaBeacon(u) : yield this._sendEventsViaPost(u)).success
              ? (this._emitter({ name: "logs_flushed", events: u }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(u), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(u) {
      return e(this, void 0, void 0, function* () {
        var f;
        const k = yield this._network.post(this._getRequestData(u)),
          w = (f = k?.code) !== null && f !== void 0 ? f : -1;
        return { success: w >= 200 && w < 300 };
      });
    }
    _sendEventsViaBeacon(u) {
      return { success: this._network.beacon(this._getRequestData(u)) };
    }
    _getRequestData(u) {
      return {
        sdkKey: this._sdkKey,
        data: { events: u },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [h.NetworkParam.EventCount]: String(u.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(u) {
      for (; u.length > l; ) u.shift();
      const f = this._getStorageKey();
      try {
        const k = this._getFailedLogsFromStorage(f);
        (0, s._setObjectInStorage)(f, [...k, ...u]);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _getFailedLogsFromStorage(u) {
      let f = [];
      try {
        const k = (0, s._getObjectFromStorage)(u);
        return (Array.isArray(k) && (f = k), f);
      } catch {
        return [];
      }
    }
    _retryFailedLogs() {
      const u = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        s.Storage.isReady() || (yield s.Storage.isReadyResolver());
        const f = (0, s._getObjectFromStorage)(u);
        f && (s.Storage.removeItem(u), yield this._sendEvents(f));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, d._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(u) {
      u.user && ((u.user = Object.assign({}, u.user)), delete u.user.privateAttributes);
      const f = {},
        k = this._getCurrentPageUrl();
      k && (f.statsigMetadata = { currentPage: k });
      const w = Object.assign(Object.assign({}, u), f);
      (y.Log.debug("Enqueued Event:", w), this._queue.push(w));
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
      var u;
      if (
        ((u = this._options) === null || u === void 0
          ? void 0
          : u.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, _._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var u, f;
      const k =
          (f = (u = this._options) === null || u === void 0 ? void 0 : u.loggingIntervalMs) !==
            null && f !== void 0
            ? f
            : i,
        w = setInterval(() => {
          const C = c[this._sdkKey];
          !C || C._flushIntervalId !== w
            ? clearInterval(w)
            : (qe._safeFlushAndForget(this._sdkKey),
              v.StatsigSession.checkForIdleSession(this._sdkKey));
        }, k);
      this._flushIntervalId = w;
    }
  };
  return ((Ie.EventLogger = D), Ie);
}
var Wt = {},
  Sr;
function ct() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.31.2"));
        let S = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => S,
          add: (d) => {
            S = Object.assign(Object.assign({}, S), d);
          },
        };
      })(Wt)),
    Wt
  );
}
var $e = {},
  Ue = {},
  br;
function at() {
  if (br) return Ue;
  ((br = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.getCookieName = Ue.StableID = void 0));
  const e = vt(),
    S = z(),
    d = ae(),
    y = de(),
    h = _n(),
    _ = {},
    v = {},
    b = {};
  Ue.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (r) => {
      if (b[r]) return null;
      if (_[r] != null) return _[r];
      let t = null;
      return (
        (t = n(r)),
        t != null
          ? ((_[r] = t), s(t, r), t)
          : ((t = a(r)), t == null && (t = (0, h.getUUID)()), s(t, r), o(t, r), (_[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((_[t] = r), s(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      v[r] = t;
    },
    _setDisabled: (r, t) => {
      b[r] = t;
    },
  };
  function m(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function s(r, t) {
    const l = m(t);
    try {
      (0, y._setObjectInStorage)(l, r);
    } catch {
      S.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(r) {
    const t = m(r);
    return (0, y._getObjectFromStorage)(t);
  }
  function n(r) {
    if (!v[r] || (0, d._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [g, c] = l.trim().split("=");
      if (g === i(r)) return decodeURIComponent(c);
    }
    return null;
  }
  function o(r, t) {
    if (!v[t] || (0, d._getDocumentSafe)() == null) return;
    const l = new Date();
    (l.setFullYear(l.getFullYear() + 1),
      (document.cookie = `${i(t)}=${encodeURIComponent(r)}; expires=${l.toUTCString()}; path=/`));
  }
  function i(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  return ((Ue.getCookieName = i), Ue);
}
var Er;
function Ci() {
  if (Er) return $e;
  ((Er = 1),
    Object.defineProperty($e, "__esModule", { value: !0 }),
    ($e.PrecomputedEvaluationsContextHandle = void 0));
  const e = z(),
    S = ae(),
    d = st(),
    y = at();
  class h {
    constructor(v, b, m, s, a, n) {
      ((this._sdkKey = v),
        (this._getOptions = b),
        (this._getErrorBoundary = m),
        (this._getValues = s),
        (this._getUser = a),
        (this._getSdkInstanceID = n));
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
      let v = (0, S._cloneObject)("StatsigUser", this._getUser());
      return (v == null && (e.Log.error("Failed to clone user"), (v = {})), v);
    }
    getSession(v = !0) {
      return d.StatsigSession.get(this._sdkKey, v);
    }
    get stableID() {
      return y.StableID.get(this._sdkKey);
    }
    get sdkInstanceID() {
      return this._getSdkInstanceID();
    }
    toContext(v = !0) {
      return {
        sdkKey: this.sdkKey,
        options: this.options,
        values: this.values,
        user: this.user,
        errorBoundary: this.errorBoundary,
        session: this.getSession(v),
        stableID: this.stableID,
        sdkInstanceID: this.sdkInstanceID,
      };
    }
  }
  return (($e.PrecomputedEvaluationsContextHandle = h), $e);
}
var ie = {},
  oe = {},
  pr;
function oi() {
  if (pr) return oe;
  ((pr = 1),
    Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe._getUnitIDFromUser = oe._getFullUserHash = oe._normalizeUser = void 0));
  const e = Be(),
    S = z(),
    d = ae();
  function y(v, b, m) {
    const s = (0, d._cloneObject)("StatsigUser", v);
    return s == null
      ? (S.Log.error("Failed to clone user"), { statsigEnvironment: void 0 })
      : (b != null && b.environment != null
          ? (s.statsigEnvironment = b.environment)
          : m != null && (s.statsigEnvironment = { tier: m }),
        s);
  }
  oe._normalizeUser = y;
  function h(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  oe._getFullUserHash = h;
  function _(v, b) {
    var m, s, a;
    if (typeof b != "string") return v.userID;
    const n = b.toLowerCase();
    return n !== "userid"
      ? (s = (m = v.customIDs) === null || m === void 0 ? void 0 : m[b]) !== null && s !== void 0
        ? s
        : (a = v.customIDs) === null || a === void 0
          ? void 0
          : a[n]
      : v.userID;
  }
  return ((oe._getUnitIDFromUser = _), oe);
}
var et = {},
  Dr;
function si() {
  if (Dr) return et;
  ((Dr = 1), Object.defineProperty(et, "__esModule", { value: !0 }), (et._typedJsonParse = void 0));
  const e = z();
  function S(d, y, h) {
    try {
      const _ = JSON.parse(d);
      if (_ && typeof _ == "object" && y in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${h}`), null);
  }
  return ((et._typedJsonParse = S), et);
}
var kr;
function Ti() {
  if (kr) return ie;
  kr = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (o, i, r, t) {
      function l(g) {
        return g instanceof r
          ? g
          : new r(function (c) {
              c(g);
            });
      }
      return new (r || (r = Promise))(function (g, c) {
        function D(f) {
          try {
            u(t.next(f));
          } catch (k) {
            c(k);
          }
        }
        function p(f) {
          try {
            u(t.throw(f));
          } catch (k) {
            c(k);
          }
        }
        function u(f) {
          f.done ? g(f.value) : l(f.value).then(D, p);
        }
        u((t = t.apply(o, i || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie._makeDataAdapterResult = ie.DataAdapterCore = void 0));
  const S = z(),
    d = at(),
    y = oi(),
    h = de(),
    _ = si(),
    v = 10,
    b = 8;
  let m = class {
    constructor(i, r) {
      ((this._adapterName = i),
        (this._cacheSuffix = r),
        (this._options = null),
        (this._sdkKey = null),
        (this._cacheLimit = v),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${r}`),
        (this._inMemoryCache = new a()));
    }
    attach(i, r, t) {
      ((this._sdkKey = i), (this._options = r));
    }
    getDataSync(i) {
      const r = i && (0, y._normalizeUser)(i, this._options),
        t = this._getCacheKey(r),
        l = this._inMemoryCache.get(t, r);
      if (l && this._getIsCacheValueValid(l)) return l;
      const g = this._loadFromCache(t);
      return g && this._getIsCacheValueValid(g)
        ? (this._inMemoryCache.add(t, g, this._cacheLimit), this._inMemoryCache.get(t, r))
        : null;
    }
    setData(i, r) {
      const t = r && (0, y._normalizeUser)(r, this._options),
        l = this._getCacheKey(t);
      this._inMemoryCache.add(l, s("Bootstrap", i, null, t), this._cacheLimit);
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === d.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, r, t) {
      return e(this, void 0, void 0, function* () {
        h.Storage.isReady() || (yield h.Storage.isReadyResolver());
        const l = i ?? this.getDataSync(r),
          g = [this._fetchAndPrepFromNetwork(l, r, t)];
        return (
          t?.timeoutMs &&
            g.push(
              new Promise((c) => setTimeout(c, t.timeoutMs)).then(
                () => (S.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(g)
        );
      });
    }
    _prefetchDataImpl(i, r) {
      return e(this, void 0, void 0, function* () {
        const t = i && (0, y._normalizeUser)(i, this._options),
          l = this._getCacheKey(t),
          g = yield this._getDataAsyncImpl(null, t, r);
        g &&
          this._inMemoryCache.add(
            l,
            Object.assign(Object.assign({}, g), { source: "Prefetch" }),
            this._cacheLimit,
          );
      });
    }
    _fetchAndPrepFromNetwork(i, r, t) {
      return e(this, void 0, void 0, function* () {
        var l;
        const g = (l = i?.data) !== null && l !== void 0 ? l : null,
          c = i != null && this._isCachedResultValidFor204(i, r),
          D = yield this._fetchFromNetwork(g, r, t, c);
        if (!D) return (S.Log.debug("No response returned for latest value"), null);
        const p = (0, _._typedJsonParse)(D, "has_updates", "Response"),
          u = this._getSdkKey(),
          f = d.StableID.get(u);
        let k = null;
        if (p?.has_updates === !0) k = s("Network", D, f, r);
        else if (g && p?.has_updates === !1) k = s("NetworkNotModified", g, f, r);
        else return null;
        const w = this._getCacheKey(r);
        return (this._inMemoryCache.add(w, k, this._cacheLimit), this._writeToCache(w, k), k);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (S.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var r;
      const t = (r = h.Storage.getItem) === null || r === void 0 ? void 0 : r.call(h.Storage, i);
      if (t == null) return null;
      const l = (0, _._typedJsonParse)(t, "source", "Cached Result");
      return l ? Object.assign(Object.assign({}, l), { source: "Cache" }) : null;
    }
    _writeToCache(i, r) {
      const t = JSON.stringify(r);
      for (let l = 0; l < b; l++)
        try {
          h.Storage.setItem(i, t);
          break;
        } catch (g) {
          if (
            !(g instanceof Error) ||
            !(
              g.toString().includes("QuotaExceededError") ||
              g.toString().includes("QUOTA_EXCEEDED_ERR")
            ) ||
            this._cacheLimit <= 1
          )
            throw g;
          ((this._cacheLimit = Math.ceil(this._cacheLimit / 2)),
            this._runLocalStorageCacheEviction(i, this._cacheLimit - 1));
        }
      this._runLocalStorageCacheEviction(i);
    }
    _runLocalStorageCacheEviction(i, r = this._cacheLimit) {
      var t;
      const l =
        (t = (0, h._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && t !== void 0
          ? t
          : {};
      l[i] = Date.now();
      const g = n(l, r);
      for (const c of g) (delete l[c], h.Storage.removeItem(c));
      (0, h._setObjectInStorage)(this._lastModifiedStoreKey, l);
    }
  };
  ie.DataAdapterCore = m;
  function s(o, i, r, t) {
    return {
      source: o,
      data: i,
      receivedAt: Date.now(),
      stableID: r,
      fullUserHash: (0, y._getFullUserHash)(t),
    };
  }
  ie._makeDataAdapterResult = s;
  class a {
    constructor() {
      this._data = {};
    }
    get(i, r) {
      var t;
      const l = this._data[i],
        g = l?.stableID,
        c = (t = r?.customIDs) === null || t === void 0 ? void 0 : t.stableID;
      return c && g && c !== g
        ? (S.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : l;
    }
    add(i, r, t) {
      const l = n(this._data, t - 1);
      for (const g of l) delete this._data[g];
      this._data[i] = r;
    }
    merge(i) {
      this._data = Object.assign(Object.assign({}, this._data), i);
    }
  }
  function n(o, i) {
    const r = Object.keys(o);
    return r.length <= i
      ? []
      : i === 0
        ? r
        : r
            .sort((t, l) => {
              const g = o[t],
                c = o[l];
              return typeof g == "object" && typeof c == "object"
                ? g.receivedAt - c.receivedAt
                : g - c;
            })
            .slice(0, r.length - i);
  }
  return ie;
}
var Ht = {},
  wr;
function Ui() {
  return (wr || ((wr = 1), Object.defineProperty(Ht, "__esModule", { value: !0 })), Ht);
}
var tt = {},
  nt = {},
  Ir;
function gn() {
  if (Ir) return nt;
  ((Ir = 1), Object.defineProperty(nt, "__esModule", { value: !0 }), (nt.SDKType = void 0));
  const e = {};
  let S;
  return (
    (nt.SDKType = {
      _get: (d) => {
        var y;
        return ((y = e[d]) !== null && y !== void 0 ? y : "js-mono") + (S ?? "");
      },
      _setClientType(d, y) {
        e[d] = y;
      },
      _setBindingType(d) {
        (!S || S === "-react") && (S = "-" + d);
      },
    }),
    nt
  );
}
var Or;
function ai() {
  return (
    Or ||
      ((Or = 1),
      (function (e) {
        var S =
          (tt && tt.__awaiter) ||
          function (n, o, i, r) {
            function t(l) {
              return l instanceof i
                ? l
                : new i(function (g) {
                    g(l);
                  });
            }
            return new (i || (i = Promise))(function (l, g) {
              function c(u) {
                try {
                  p(r.next(u));
                } catch (f) {
                  g(f);
                }
              }
              function D(u) {
                try {
                  p(r.throw(u));
                } catch (f) {
                  g(f);
                }
              }
              function p(u) {
                u.done ? l(u.value) : t(u.value).then(c, D);
              }
              p((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const d = z(),
          y = gn(),
          h = ct();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        let v = class {
          constructor(o, i, r, t) {
            ((this._sdkKey = o),
              (this._options = i),
              (this._emitter = r),
              (this._lastSeenError = t),
              (this._seen = new Set()));
          }
          wrap(o, i) {
            try {
              const r = o;
              s(r).forEach((t) => {
                const l = r[t];
                "$EB" in l ||
                  ((r[t] = (...g) => this._capture(i ? `${i}:${t}` : t, () => l.apply(o, g))),
                  (r[t].$EB = !0));
              });
            } catch (r) {
              this._onError("eb:wrap", r);
            }
          }
          logError(o, i) {
            this._onError(o, i);
          }
          getLastSeenErrorAndReset() {
            const o = this._lastSeenError;
            return ((this._lastSeenError = void 0), o ?? null);
          }
          attachErrorIfNoneExists(o) {
            this._lastSeenError || (this._lastSeenError = b(o));
          }
          _capture(o, i) {
            try {
              const r = i();
              return r && r instanceof Promise ? r.catch((t) => this._onError(o, t)) : r;
            } catch (r) {
              return (this._onError(o, r), null);
            }
          }
          _onError(o, i) {
            try {
              (d.Log.warn(`Caught error in ${o}`, { error: i }),
                S(this, void 0, void 0, function* () {
                  var t, l, g, c, D, p, u;
                  const f = i || Error(_),
                    k = f instanceof Error,
                    w = k ? f.name : "No Name",
                    C = b(f);
                  if (((this._lastSeenError = C), this._seen.has(w))) return;
                  if (
                    (this._seen.add(w),
                    !(
                      (l =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || l === void 0
                    ) && l.preventAllNetworkTraffic)
                  ) {
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const L = y.SDKType._get(this._sdkKey),
                    M = h.StatsigMetadataProvider.get(),
                    B = k ? f.stack : m(f),
                    G = Object.assign(
                      { tag: o, exception: w, info: B, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, M), { sdkType: L }),
                    );
                  (yield (
                    (p =
                      (D =
                        (c = this._options) === null || c === void 0 ? void 0 : c.networkConfig) ===
                        null || D === void 0
                        ? void 0
                        : D.networkOverrideFunc) !== null && p !== void 0
                      ? p
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(L),
                      "STATSIG-SDK-VERSION": String(M.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(G),
                  }),
                    (u = this._emitter) === null ||
                      u === void 0 ||
                      u.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = v;
        function b(n) {
          return n instanceof Error
            ? n
            : typeof n == "string"
              ? new Error(n)
              : new Error("An unknown error occurred.");
        }
        function m(n) {
          try {
            return JSON.stringify(n);
          } catch {
            return _;
          }
        }
        function s(n) {
          const o = new Set();
          let i = Object.getPrototypeOf(n);
          for (; i && i !== Object.prototype; )
            (Object.getOwnPropertyNames(i)
              .filter((r) => typeof i?.[r] == "function")
              .forEach((r) => o.add(r)),
              (i = Object.getPrototypeOf(i)));
          return Array.from(o);
        }
        function a(n) {
          if (!n) return {};
          const o = {};
          return (
            Object.keys(n).forEach((i) => {
              const r = i,
                t = n[r];
              switch (typeof t) {
                case "number":
                case "bigint":
                case "boolean":
                  o[String(r)] = t;
                  break;
                case "string":
                  t.length < 50 ? (o[String(r)] = t) : (o[String(r)] = "set");
                  break;
                case "object":
                  r === "environment"
                    ? (o.environment = t)
                    : r === "networkConfig"
                      ? (o.networkConfig = t)
                      : (o[String(r)] = t != null ? "set" : "unset");
                  break;
              }
            }),
            o
          );
        }
      })(tt)),
    tt
  );
}
var Qt = {},
  Cr;
function Ri() {
  return (Cr || ((Cr = 1), Object.defineProperty(Qt, "__esModule", { value: !0 })), Qt);
}
var Xt = {},
  Tr;
function Mi() {
  return (Tr || ((Tr = 1), Object.defineProperty(Xt, "__esModule", { value: !0 })), Xt);
}
var Yt = {},
  Ur;
function Li() {
  return (Ur || ((Ur = 1), Object.defineProperty(Yt, "__esModule", { value: !0 })), Yt);
}
var Re = {},
  Rr;
function li() {
  if (Rr) return Re;
  ((Rr = 1),
    Object.defineProperty(Re, "__esModule", { value: !0 }),
    (Re.createMemoKey = Re.MemoPrefix = void 0),
    (Re.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    S = new Set(["userPersistedValues"]);
  function d(y, h, _) {
    let v = `${y}|${h}`;
    if (!_) return v;
    for (const b of Object.keys(_)) {
      if (S.has(b)) return;
      e.has(b) ? (v += `|${b}=true`) : (v += `|${b}=${_[b]}`);
    }
    return v;
  }
  return ((Re.createMemoKey = d), Re);
}
var Me = {},
  se = {},
  Le = {},
  Mr;
function Pi() {
  if (Mr) return Le;
  Mr = 1;
  var e =
    (Le && Le.__awaiter) ||
    function (b, m, s, a) {
      function n(o) {
        return o instanceof s
          ? o
          : new s(function (i) {
              i(o);
            });
      }
      return new (s || (s = Promise))(function (o, i) {
        function r(g) {
          try {
            l(a.next(g));
          } catch (c) {
            i(c);
          }
        }
        function t(g) {
          try {
            l(a.throw(g));
          } catch (c) {
            i(c);
          }
        }
        function l(g) {
          g.done ? o(g.value) : n(g.value).then(r, t);
        }
        l((a = a.apply(b, m || [])).next());
      });
    };
  (Object.defineProperty(Le, "__esModule", { value: !0 }), (Le._fetchTxtRecords = void 0));
  const S = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    d = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    h = 200;
  function _(b) {
    return e(this, void 0, void 0, function* () {
      const m = yield b(d, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: S,
      });
      if (!m.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const s = yield m.arrayBuffer(),
        a = new Uint8Array(s);
      return v(a);
    });
  }
  Le._fetchTxtRecords = _;
  function v(b) {
    const m = b.findIndex(
      (a, n) =>
        n < h && String.fromCharCode(a) === "=" && y.includes(String.fromCharCode(b[n - 1])),
    );
    if (m === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let s = "";
    for (let a = m - 1; a < b.length; a++) s += String.fromCharCode(b[a]);
    return s.split(",");
  }
  return Le;
}
var Lr;
function Ai() {
  if (Lr) return se;
  Lr = 1;
  var e =
    (se && se.__awaiter) ||
    function (i, r, t, l) {
      function g(c) {
        return c instanceof t
          ? c
          : new t(function (D) {
              D(c);
            });
      }
      return new (t || (t = Promise))(function (c, D) {
        function p(k) {
          try {
            f(l.next(k));
          } catch (w) {
            D(w);
          }
        }
        function u(k) {
          try {
            f(l.throw(k));
          } catch (w) {
            D(w);
          }
        }
        function f(k) {
          k.done ? c(k.value) : g(k.value).then(p, u);
        }
        f((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }),
    (se._isDomainFailure = se.NetworkFallbackResolver = void 0));
  const S = Pi(),
    d = Be(),
    y = z(),
    h = de(),
    _ = 10080 * 60 * 1e3,
    v = 14400 * 1e3;
  let b = class {
    constructor(r) {
      var t;
      ((this._fallbackInfo = null),
        (this._errorBoundary = null),
        (this._dnsQueryCooldowns = {}),
        (this._networkOverrideFunc =
          (t = r.networkConfig) === null || t === void 0 ? void 0 : t.networkOverrideFunc));
    }
    setErrorBoundary(r) {
      this._errorBoundary = r;
    }
    tryBumpExpiryTime(r, t) {
      var l;
      const g = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      g &&
        ((g.expiryTime = Date.now() + _),
        a(r, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: g })));
    }
    getActiveFallbackUrl(r, t) {
      var l, g;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let c = this._fallbackInfo;
      c == null && ((c = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = c));
      const D = c[t.endpoint];
      return !D ||
        Date.now() > ((g = D.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== D.urlConfigChecksum
        ? (delete c[t.endpoint], (this._fallbackInfo = c), a(r, this._fallbackInfo), null)
        : D.url
          ? D.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, g) {
      return e(this, void 0, void 0, function* () {
        var c, D;
        try {
          if (!m(l, g)) return !1;
          const u =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            f = this._pickNewFallbackUrl(
              (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[t.endpoint],
              u,
            );
          return f ? (this._updateFallbackInfoWithNewUrl(r, t, f), !0) : !1;
        } catch (p) {
          return (
            (D = this._errorBoundary) === null ||
              D === void 0 ||
              D.logError("tryFetchUpdatedFallbackInfo", p),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(r, t, l) {
      var g, c, D;
      const p = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + _,
          previous: [],
        },
        u = t.endpoint,
        f = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[u];
      (f && p.previous.push(...f.previous), p.previous.length > 10 && (p.previous = []));
      const k =
        (D = (c = this._fallbackInfo) === null || c === void 0 ? void 0 : c[u]) === null ||
        D === void 0
          ? void 0
          : D.url;
      (k != null && p.previous.push(k),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [u]: p })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + v;
        const g = [],
          c = yield (0, S._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          D = o(r.defaultUrl);
        for (const p of c) {
          if (!p.startsWith(r.endpointDnsKey + "=")) continue;
          const u = p.split("=");
          if (u.length > 1) {
            let f = u[1];
            (f.endsWith("/") && (f = f.slice(0, -1)), g.push(`https://${f}${D}`));
          }
        }
        return g;
      });
    }
    _pickNewFallbackUrl(r, t) {
      var l;
      if (t == null) return null;
      const g = new Set((l = r?.previous) !== null && l !== void 0 ? l : []),
        c = r?.url;
      let D = null;
      for (const p of t) {
        const u = p.endsWith("/") ? p.slice(0, -1) : p;
        if (!g.has(p) && u !== c) {
          D = u;
          break;
        }
      }
      return D;
    }
  };
  se.NetworkFallbackResolver = b;
  function m(i, r) {
    var t;
    const l = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      r ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  se._isDomainFailure = m;
  function s(i) {
    return `statsig.network_fallback.${(0, d._DJB2)(i)}`;
  }
  function a(i, r) {
    const t = s(i);
    if (!r || Object.keys(r).length === 0) {
      h.Storage.removeItem(t);
      return;
    }
    h.Storage.setItem(t, JSON.stringify(r));
  }
  function n(i) {
    const r = s(i),
      t = h.Storage.getItem(r);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (y.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function o(i) {
    try {
      return new URL(i).pathname;
    } catch {
      return null;
    }
  }
  return se;
}
var rt = {},
  Pr;
function ui() {
  if (Pr) return rt;
  ((Pr = 1), Object.defineProperty(rt, "__esModule", { value: !0 }), (rt.SDKFlags = void 0));
  const e = {};
  return (
    (rt.SDKFlags = {
      setFlags: (S, d) => {
        e[S] = d;
      },
      get: (S, d) => {
        var y, h;
        return (h = (y = e[S]) === null || y === void 0 ? void 0 : y[d]) !== null && h !== void 0
          ? h
          : !1;
      },
    }),
    rt
  );
}
var it = {},
  Ar;
function ci() {
  return (
    Ar ||
      ((Ar = 1),
      Object.defineProperty(it, "__esModule", { value: !0 }),
      (it.ErrorTag = void 0),
      (it.ErrorTag = { NetworkError: "NetworkError" })),
    it
  );
}
var jr;
function ji() {
  if (jr) return Me;
  jr = 1;
  var e =
    (Me && Me.__awaiter) ||
    function (O, E, I, T) {
      function U(R) {
        return R instanceof I
          ? R
          : new I(function (P) {
              P(R);
            });
      }
      return new (I || (I = Promise))(function (R, P) {
        function $(A) {
          try {
            F(T.next(A));
          } catch (j) {
            P(j);
          }
        }
        function q(A) {
          try {
            F(T.throw(A));
          } catch (j) {
            P(j);
          }
        }
        function F(A) {
          A.done ? R(A.value) : U(A.value).then($, q);
        }
        F((T = T.apply(O, E || [])).next());
      });
    };
  (Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.NetworkCore = void 0), je());
  const S = je(),
    d = on(),
    y = z(),
    h = ht(),
    _ = Ai(),
    v = ui(),
    b = gn(),
    m = ae(),
    s = st(),
    a = at(),
    n = ci(),
    o = ct(),
    i = mt(),
    r = yt(),
    t = 1e4,
    l = 500,
    g = 3e4,
    c = 1e3,
    D = 50,
    p = D / c,
    u = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let f = class {
    constructor(E, I) {
      ((this._emitter = I),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        E && (this._options = E),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new _.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(E)));
    }
    setLogEventCompressionMode(E) {
      this._options.logEventCompressionMode = E;
    }
    setErrorBoundary(E) {
      ((this._errorBoundary = E),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(E));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const E = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), E);
    }
    beacon(E) {
      if (!k(E)) return !1;
      const I = this._getInternalRequestArgs("POST", E),
        T = this._getPopulatedURL(I),
        U = navigator;
      return U.sendBeacon.bind(U)(T, I.body);
    }
    post(E) {
      return e(this, void 0, void 0, function* () {
        const I = this._getInternalRequestArgs("POST", E);
        return (this._tryEncodeBody(I), yield this._tryToCompressBody(I), this._sendRequest(I));
      });
    }
    get(E) {
      const I = this._getInternalRequestArgs("GET", E);
      return this._sendRequest(I);
    }
    _sendRequest(E) {
      return e(this, void 0, void 0, function* () {
        var I, T, U, R;
        if (!k(E) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: P, body: $, retries: q, attempt: F } = E,
          A = E.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            y.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1;
        let V = !1;
        const x = this._getPopulatedURL(E);
        let K = null;
        const Z = (0, r._isUnloading)();
        try {
          const le = {
            method: P,
            body: $,
            headers: Object.assign({}, E.headers),
            priority: E.priority,
            keepalive: Z,
          };
          B(E, j);
          const J = this._leakyBucket[A];
          J && ((J.lastRequestTime = Date.now()), (this._leakyBucket[A] = J));
          const ee = (I = this._netConfig.networkOverrideFunc) !== null && I !== void 0 ? I : fetch;
          let Fe;
          if (
            ((K = yield Promise.race([
              ee(x, le).finally(() => clearTimeout(Fe)),
              new Promise((_e, ge) => {
                Fe = setTimeout(() => {
                  ((V = !0), ge(new Error(`Timeout of ${this._timeout}ms expired.`)));
                }, this._timeout);
              }),
            ])),
            !K.ok)
          ) {
            const _e = yield K.text().catch(() => "No Text"),
              ge = new Error(`NetworkError: ${x} ${_e}`);
            throw ((ge.name = "NetworkError"), ge);
          }
          const te = yield K.text();
          return (
            G(E, K, j, te),
            this._fallbackResolver.tryBumpExpiryTime(E.sdkKey, E.urlConfig),
            { body: te, code: K.status }
          );
        } catch (le) {
          const J = L(le),
            ee = M(J ?? "", V);
          if (
            (G(E, K, j, "", le),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              E.sdkKey,
              E.urlConfig,
              J,
              ee,
            )) &&
              (E.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(E.sdkKey, E.urlConfig)),
            !q || j > q || !u.has((T = K?.status) !== null && T !== void 0 ? T : 500))
          ) {
            (U = this._emitter) === null ||
              U === void 0 ||
              U.call(this, {
                name: "error",
                error: le,
                tag: n.ErrorTag.NetworkError,
                requestArgs: E,
              });
            const te = `A networking error occurred during ${P} request to ${x}.`;
            return (
              y.Log.error(te, J, le),
              (R = this._errorBoundary) === null || R === void 0 || R.attachErrorIfNoneExists(te),
              null
            );
          }
          return (
            yield N(j),
            this._sendRequest(Object.assign(Object.assign({}, E), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(E) {
      let I = E?.logEventCompressionMode;
      return (
        !I && E?.disableCompression === !0 && (I = i.LogEventCompressionMode.Disabled),
        I || (I = i.LogEventCompressionMode.Enabled),
        I
      );
    }
    _isRateLimited(E) {
      var I;
      const T = Date.now(),
        U =
          (I = this._leakyBucket[E]) !== null && I !== void 0
            ? I
            : { count: 0, lastRequestTime: T },
        R = T - U.lastRequestTime,
        P = Math.floor(R * p);
      return (
        (U.count = Math.max(0, U.count - P)),
        U.count >= D
          ? !0
          : ((U.count += 1), (U.lastRequestTime = T), (this._leakyBucket[E] = U), !1)
      );
    }
    _getPopulatedURL(E) {
      var I;
      const T = (I = E.fallbackUrl) !== null && I !== void 0 ? I : E.urlConfig.getUrl();
      (E.urlConfig.endpoint === h.Endpoint._initialize ||
        E.urlConfig.endpoint === h.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const U = Object.assign(
          {
            [h.NetworkParam.SdkKey]: E.sdkKey,
            [h.NetworkParam.SdkType]: b.SDKType._get(E.sdkKey),
            [h.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [h.NetworkParam.Time]: String(Date.now()),
            [h.NetworkParam.SessionID]: s.SessionID.get(E.sdkKey),
          },
          E.params,
        ),
        R = Object.keys(U)
          .map((P) => `${encodeURIComponent(P)}=${encodeURIComponent(U[P])}`)
          .join("&");
      return `${T}${R ? `?${R}` : ""}`;
    }
    _tryEncodeBody(E) {
      var I;
      const T = (0, m._getWindowSafe)(),
        U = E.body;
      if (
        !(
          !E.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof U != "string" ||
          (0, S._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((E.body = T.btoa(U).split("").reverse().join("")),
            (E.params = Object.assign(
              Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
              { [h.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (R) {
          y.Log.warn(`Request encoding failed for ${E.urlConfig.getUrl()}`, R);
        }
    }
    _tryToCompressBody(E) {
      return e(this, void 0, void 0, function* () {
        var I;
        const T = E.body;
        if (!(typeof T != "string" || !C(E, this._options)))
          try {
            const U = new TextEncoder().encode(T),
              R = new CompressionStream("gzip"),
              P = R.writable.getWriter();
            (P.write(U).catch(y.Log.error), P.close().catch(y.Log.error));
            const $ = R.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const A = q.reduce((x, K) => x + K.length, 0),
              j = new Uint8Array(A);
            let V = 0;
            for (const x of q) (j.set(x, V), (V += x.length));
            ((E.body = j),
              (E.params = Object.assign(
                Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
                { [h.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (U) {
            y.Log.warn(`Request compression failed for ${E.urlConfig.getUrl()}`, U);
          }
      });
    }
    _getInternalRequestArgs(E, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        U = Object.assign(Object.assign({}, I), { method: E, fallbackUrl: T });
      return ("data" in I && w(U, I.data), U);
    }
  };
  Me.NetworkCore = f;
  const k = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    w = (O, E) => {
      const { sdkKey: I, fallbackUrl: T } = O,
        U = a.StableID.get(I),
        R = s.SessionID.get(I),
        P = b.SDKType._get(I);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, E), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: U,
            sessionID: R,
            sdkType: P,
            fallbackUrl: T,
          }),
        }),
      );
    };
  function C(O, E) {
    if (
      !O.isCompressable ||
      (0, S._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = v.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (E.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(I && !T);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function L(O) {
    return typeof O == "string"
      ? O
      : O instanceof Error
        ? `${O.name}: ${O.message}`
        : "Unknown Error";
  }
  function M(O, E) {
    return O.includes("Timeout") || E;
  }
  function B(O, E) {
    O.urlConfig.endpoint === h.Endpoint._initialize &&
      d.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: E });
  }
  function G(O, E, I, T, U) {
    O.urlConfig.endpoint === h.Endpoint._initialize &&
      d.Diagnostics._markInitNetworkReqEnd(O.sdkKey, d.Diagnostics._getDiagnosticsData(E, I, T, U));
  }
  function N(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((E) => setTimeout(E, Math.min(l * (O * O), g)));
    });
  }
  return Me;
}
var Zt = {},
  Nr;
function Ni() {
  return (Nr || ((Nr = 1), Object.defineProperty(Zt, "__esModule", { value: !0 })), Zt);
}
var $t = {},
  Fr;
function Fi() {
  return (Fr || ((Fr = 1), Object.defineProperty($t, "__esModule", { value: !0 })), $t);
}
var en = {},
  qr;
function qi() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e._fastApproxSizeOf = void 0));
        const S = 2,
          d = 1,
          y = (h, _) => {
            let v = 0;
            const b = Object.keys(h);
            for (let m = 0; m < b.length; m++) {
              const s = b[m],
                a = h[s];
              if (
                ((v += s.length),
                typeof a == "object" && a !== null
                  ? (v += (0, e._fastApproxSizeOf)(a, _) + S)
                  : (v += String(a).length + d),
                v >= _)
              )
                return v;
            }
            return v;
          };
        e._fastApproxSizeOf = y;
      })(en)),
    en
  );
}
var Pe = {},
  Kr;
function Ki() {
  if (Kr) return Pe;
  Kr = 1;
  var e =
    (Pe && Pe.__awaiter) ||
    function (r, t, l, g) {
      function c(D) {
        return D instanceof l
          ? D
          : new l(function (p) {
              p(D);
            });
      }
      return new (l || (l = Promise))(function (D, p) {
        function u(w) {
          try {
            k(g.next(w));
          } catch (C) {
            p(C);
          }
        }
        function f(w) {
          try {
            k(g.throw(w));
          } catch (C) {
            p(C);
          }
        }
        function k(w) {
          w.done ? D(w.value) : c(w.value).then(u, f);
        }
        k((g = g.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.StatsigClientBase = void 0), je());
  const S = je(),
    d = ai(),
    y = ii(),
    h = z(),
    _ = li(),
    v = ae(),
    b = st(),
    m = at(),
    s = mt(),
    a = de(),
    n = 3e3;
  let o = class {
    constructor(t, l, g, c) {
      var D, p, u, f;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const k = this.$emt.bind(this);
      (c?.logLevel != null && (h.Log.level = c.logLevel),
        c?.disableStorage && a.Storage._setDisabled(!0),
        c?.initialSessionID && b.StatsigSession.overrideInitialSessionID(c.initialSessionID, t),
        c?.storageProvider && a.Storage._setProvider(c.storageProvider),
        c?.enableCookies && m.StableID._setCookiesEnabled(t, c.enableCookies),
        c?.disableStableID && m.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = c ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (D = c?.overrideAdapter) !== null && D !== void 0 ? D : null),
        (this._logger = new y.EventLogger(t, k, g, c)),
        (this._errorBoundary = new d.ErrorBoundary(t, c, k)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, c, g),
        (this.storageProvider = a.Storage),
        (f =
          (u = (p = this.overrideAdapter) === null || p === void 0 ? void 0 : p.loadFromStorage) ===
            null || u === void 0
            ? void 0
            : u.call(p)) === null ||
          f === void 0 ||
          f.catch((w) => this._errorBoundary.logError("OA::loadFromStorage", w)),
        this._primeReadyRipcord(),
        i(t, this));
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
          m.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        const g = this._listeners[t].indexOf(l);
        g !== -1 && this._listeners[t].splice(g, 1);
      }
    }
    $on(t, l) {
      ((l.__isInternal = !0), this.on(t, l));
    }
    $emt(t) {
      var l;
      const g = (c) => {
        try {
          c(t);
        } catch (D) {
          if (c.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, D);
            return;
          }
          h.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((c) => g(c)),
        (l = this._listeners["*"]) === null || l === void 0 || l.forEach(g));
    }
    _setStatus(t, l) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: l }));
    }
    _enqueueExposure(t, l, g) {
      if (g?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(l);
    }
    _memoize(t, l) {
      return (g, c) => {
        if (this._options.disableEvaluationMemoization) return l(g, c);
        const D = (0, _.createMemoKey)(t, g, c);
        return D
          ? (D in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[D] = l(g, c))),
            this._memoCache[D])
          : l(g, c);
      };
    }
  };
  Pe.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, v._isServerEnv)()) return;
    const g = (0, S._getStatsigGlobal)(),
      c = (l = g.instances) !== null && l !== void 0 ? l : {},
      D = t;
    (c[r] != null &&
      h.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (c[r] = D),
      g.firstInstance || (g.firstInstance = D),
      (g.instances = c),
      (__STATSIG__ = g));
  }
  return Pe;
}
var ot = {},
  Br;
function Bi() {
  return (
    Br ||
      ((Br = 1),
      Object.defineProperty(ot, "__esModule", { value: !0 }),
      (ot.DataAdapterCachePrefix = void 0),
      (ot.DataAdapterCachePrefix = "statsig.cached")),
    ot
  );
}
var tn = {},
  Gr;
function Gi() {
  return (Gr || ((Gr = 1), Object.defineProperty(tn, "__esModule", { value: !0 })), tn);
}
var H = {},
  Vr;
function Vi() {
  if (Vr) return H;
  ((Vr = 1),
    Object.defineProperty(H, "__esModule", { value: !0 }),
    (H._makeTypedGet =
      H._mergeOverride =
      H._makeLayer =
      H._makeExperiment =
      H._makeDynamicConfig =
      H._makeFeatureGate =
        void 0));
  const e = z(),
    S = dn();
  function d(s, a, n, o) {
    var i;
    return {
      name: s,
      details: a,
      ruleID: (i = n?.rule_id) !== null && i !== void 0 ? i : "",
      __evaluation: n,
      value: o,
    };
  }
  function y(s, a, n) {
    var o;
    return Object.assign(Object.assign({}, d(s, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeFeatureGate = y;
  function h(s, a, n) {
    var o, i;
    const r = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, d(s, a, n, r)), {
      idType: (i = n?.id_type) !== null && i !== void 0 ? i : null,
      get: m(s, n?.value),
    });
  }
  H._makeDynamicConfig = h;
  function _(s, a, n) {
    var o;
    const i = h(s, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeExperiment = _;
  function v(s, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, d(s, a, n, void 0)), {
      get: m(s, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  H._makeLayer = v;
  function b(s, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, s), a), { get: m(s.name, n, o) });
  }
  H._mergeOverride = b;
  function m(s, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, S._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${s}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((H._makeTypedGet = m), H);
}
var nn = {},
  zr;
function zi() {
  return (zr || ((zr = 1), Object.defineProperty(nn, "__esModule", { value: !0 })), nn);
}
var Ae = {},
  Jr;
function Ji() {
  if (Jr) return Ae;
  ((Jr = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.UPDATE_DETAIL_ERROR_MESSAGES = Ae.createUpdateDetails = void 0));
  const e = (S, d, y, h, _, v) => ({
    duration: y,
    source: d,
    success: S,
    error: h,
    sourceUrl: _,
    warnings: v,
  });
  return (
    (Ae.createUpdateDetails = e),
    (Ae.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    Ae
  );
}
var xr;
function xi() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        var S =
            (we && we.__createBinding) ||
            (Object.create
              ? function (s, a, n, o) {
                  o === void 0 && (o = n);
                  var i = Object.getOwnPropertyDescriptor(a, n);
                  ((!i || ("get" in i ? !a.__esModule : i.writable || i.configurable)) &&
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(s, o, i));
                }
              : function (s, a, n, o) {
                  (o === void 0 && (o = n), (s[o] = a[n]));
                }),
          d =
            (we && we.__exportStar) ||
            function (s, a) {
              for (var n in s)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && S(a, s, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          je());
        const y = je(),
          h = on();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return h.Diagnostics;
          },
        });
        const _ = ii();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const v = z();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return v.Log;
          },
        });
        const b = ct(),
          m = de();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return m.Storage;
          },
        }),
          d(je(), e),
          d(vt(), e),
          d(Ci(), e),
          d(Ti(), e),
          d(on(), e),
          d(Ui(), e),
          d(ai(), e),
          d(Ri(), e),
          d(Mi(), e),
          d(Be(), e),
          d(Li(), e),
          d(z(), e),
          d(li(), e),
          d(ht(), e),
          d(ji(), e),
          d(Ni(), e),
          d(Fi(), e),
          d(ae(), e),
          d(gn(), e),
          d(st(), e),
          d(qi(), e),
          d(at(), e),
          d(Ki(), e),
          d(ci(), e),
          d(Bi(), e),
          d(ni(), e),
          d(ct(), e),
          d(mt(), e),
          d(Gi(), e),
          d(Vi(), e),
          d(zi(), e),
          d(oi(), e),
          d(de(), e),
          d(si(), e),
          d(dn(), e),
          d(ri(), e),
          d(_n(), e),
          d(yt(), e),
          d(Ji(), e),
          d(ui(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: v.Log, SDK_VERSION: b.SDK_VERSION }));
      })(we)),
    we
  );
}
var to = xi();
export { xi as a, Hi as r, to as s };
