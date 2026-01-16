var lt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Hi(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var m = e.default;
  if (typeof m == "function") {
    var c = function y() {
      var v = !1;
      try {
        v = this instanceof y;
      } catch {}
      return v ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    c.prototype = m.prototype;
  } else c = {};
  return (
    Object.defineProperty(c, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (y) {
      var v = Object.getOwnPropertyDescriptor(e, y);
      Object.defineProperty(
        c,
        y,
        v.get
          ? v
          : {
              enumerable: !0,
              get: function () {
                return e[y];
              },
            },
      );
    }),
    c
  );
}
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
        const m = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function _(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class h {
          static info(...S) {
            h.level >= e.LogLevel.Info && console.info(c, ..._(S));
          }
          static debug(...S) {
            h.level >= e.LogLevel.Debug && console.debug(m, ..._(S));
          }
          static warn(...S) {
            h.level >= e.LogLevel.Warn && console.warn(y, ..._(S));
          }
          static error(...S) {
            h.level >= e.LogLevel.Error && console.error(v, ..._(S));
          }
        }
        ((e.Log = h), (h.level = e.LogLevel.Warn));
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
        var m, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = Q(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = _;
        const h = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = h;
        const b = (i) => {
          const r = (0, e._getStatsigGlobal)();
          return i
            ? r.instances && r.instances[i]
            : (r.instances &&
                Object.keys(r.instances).length > 1 &&
                v.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              r.firstInstance);
        };
        e._getInstance = b;
        const S = "__STATSIG__",
          s = typeof window < "u" ? window : {},
          a = typeof lt < "u" ? lt : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (m = s[S]) !== null && m !== void 0 ? m : a[S]) !== null && c !== void 0
                ? c
                : n[S]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((s[S] = o), (a[S] = o), (n[S] = o));
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
        const m = new Map(),
          c = "start",
          y = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (s) => m.get(s),
          _markInitOverallStart: (s) => {
            b(s, _({}, c, "overall"));
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
            b(s, _(a, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (s, a) => {
            b(s, _(a, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (s) => {
            b(s, _({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (s, a) => {
            b(s, _(a, y, "initialize", "process"));
          },
          _clearMarkers: (s) => {
            m.delete(s);
          },
          _formatError(s) {
            if (s && typeof s == "object")
              return { code: S(s, "code"), name: S(s, "name"), message: S(s, "message") };
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
            const t = h(s, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function _(s, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, s);
        }
        function h(s, a) {
          return { eventName: v, user: s, value: null, metadata: a, time: Date.now() };
        }
        function b(s, a) {
          var n;
          const o = (n = m.get(s)) !== null && n !== void 0 ? n : [];
          (o.push(a), m.set(s, o));
        }
        function S(s, a) {
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
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  ye._typeOf = e;
  function m(c, y) {
    const v = (_) => (Array.isArray(_) ? "array" : typeof _);
    return v(c) === v(y);
  }
  return ((ye._isTypeMatch = m), ye);
}
var mn;
function Ke() {
  return (
    mn ||
      ((mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = sn(),
          c = (_) => {
            let h = 0;
            for (let b = 0; b < _.length; b++) {
              const S = _.charCodeAt(b);
              ((h = (h << 5) - h + S), (h = h & h));
            }
            return String(h >>> 0);
          };
        e._DJB2 = c;
        const y = (_, h) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, h)));
        e._DJB2Object = y;
        const v = (_, h) => {
          if (_ == null) return null;
          const b = Object.keys(_).sort(),
            S = {};
          return (
            b.forEach((s) => {
              const a = _[s];
              if (h === 0 || (0, m._typeOf)(a) !== "object") {
                S[s] = a;
                return;
              }
              S[s] = (0, e._getSortedObject)(a, h != null ? h - 1 : h);
            }),
            S
          );
        };
        e._getSortedObject = v;
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
  function m(y, v, _) {
    var h;
    if (_) return _(y, v);
    const b = v && v.customIDs ? v.customIDs : {},
      S = [
        `uid:${(h = v?.userID) !== null && h !== void 0 ? h : ""}`,
        `cids:${Object.keys(b)
          .sort((s, a) => s.localeCompare(a))
          .map((s) => `${s}-${b[s]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(S.join("|"));
  }
  he._getUserStorageKey = m;
  function c(y, v, _) {
    return v ? m(y, v, _) : (0, e._DJB2)(`k:${y}`);
  }
  return ((he._getStorageKey = c), he);
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
var wt = {},
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
        const m = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = m;
        const c = () => {
          var S;
          const s = (0, e._getWindowSafe)();
          return (S = s?.document) !== null && S !== void 0 ? S : null;
        };
        e._getDocumentSafe = c;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const S =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || S;
        };
        e._isServerEnv = y;
        const v = (S, s) => {
          const a = (0, e._getWindowSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(S, s);
        };
        e._addWindowEventListenerSafe = v;
        const _ = (S, s) => {
          const a = (0, e._getDocumentSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(S, s);
        };
        e._addDocumentEventListenerSafe = _;
        const h = () => {
          var S;
          try {
            return (S = (0, e._getWindowSafe)()) === null || S === void 0
              ? void 0
              : S.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = h;
        const b = () => {
          const S = (0, e._getWindowSafe)();
          return S && "onpagehide" in S ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = b;
      })(wt)),
    wt
  );
}
var X = {},
  pn;
function xr() {
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
    m = "statsig::gate_exposure",
    c = "statsig::layer_exposure",
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
    v = ({ eventName: a }) => a === m || a === e || a === c;
  X._isExposureEvent = v;
  const _ = (a, n, o) => {
    var i, r, t;
    const l = { gate: n.name, gateValue: String(n.value), ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (l.configVersion = n.__evaluation.version),
      y(
        m,
        a,
        n.details,
        l,
        h(
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
  function h(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  X._mapExposures = h;
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
        h(
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
  const S = (a, n, o, i) => {
    var r, t, l, g, d, D;
    const p = n.__evaluation,
      u = ((r = p?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let f = "",
      w = (t = p?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    u &&
      ((f = (l = p.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (w = p.secondary_exposures));
    const k = (g = n.__evaluation) === null || g === void 0 ? void 0 : g.parameter_rule_ids,
      C = {
        config: n.name,
        parameterName: o,
        ruleID: (d = k?.[o]) !== null && d !== void 0 ? d : n.ruleID,
        allocatedExperiment: f,
        isExplicitParameter: String(u),
      };
    return (
      ((D = n.__evaluation) === null || D === void 0 ? void 0 : D.version) != null &&
        (C.configVersion = n.__evaluation.version),
      y(c, a, n.details, C, h(w, i))
    );
  };
  X._createLayerParameterExposure = S;
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
var kt = {},
  wn;
function ce() {
  return (
    wn ||
      ((wn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = Q(),
          c = Ne(),
          y = {},
          v = {
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
          const n = (0, c._getWindowSafe)();
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
          m.Log.warn("Failed to setup localStorageProvider.");
        }
        let h = _ ?? v,
          b = h;
        function S(n) {
          try {
            return n();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
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
          getItem: (n) => S(() => b.getItem(n)),
          setItem: (n, o) => S(() => b.setItem(n, o)),
          removeItem: (n) => b.removeItem(n),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (n) => {
            ((h = n), (b = n));
          },
          _setDisabled: (n) => {
            n ? (b = v) : (b = h);
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
      })(kt)),
    kt
  );
}
var Ge = {},
  kn;
function Hr() {
  if (kn) return Ge;
  ((kn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.UrlConfiguration = void 0));
  const e = Ke(),
    m = _t(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  class y {
    constructor(_, h, b, S) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = c[_]),
        h && (this.customUrl = h),
        !h && b && (this.customUrl = b.endsWith("/") ? `${b}${_}` : `${b}/${_}`),
        S && (this.fallbackUrls = S));
      const s = m.NetworkDefault[_];
      this.defaultUrl = `${s}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const h = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + h);
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
        const m = Ne(),
          c = "foreground",
          y = "background",
          v = [];
        let _ = c,
          h = !1;
        const b = () => _ === c;
        e._isCurrentlyVisible = b;
        const S = () => h;
        e._isUnloading = S;
        const s = (n) => {
          v.unshift(n);
        };
        e._subscribeToVisiblityChanged = s;
        const a = (n) => {
          n !== _ && ((_ = n), v.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((h = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : y);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((h = !0), (0, e._notifyVisibilityChanged)(y));
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
    function (p, u, f, w) {
      function k(C) {
        return C instanceof f
          ? C
          : new f(function (L) {
              L(C);
            });
      }
      return new (f || (f = Promise))(function (C, L) {
        function M(N) {
          try {
            G(w.next(N));
          } catch (O) {
            L(O);
          }
        }
        function B(N) {
          try {
            G(w.throw(N));
          } catch (O) {
            L(O);
          }
        }
        function G(N) {
          N.done ? C(N.value) : k(N.value).then(M, B);
        }
        G((w = w.apply(p, u || [])).next());
      });
    };
  (Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.EventLogger = void 0));
  const m = dt(),
    c = Ke(),
    y = Q(),
    v = _t(),
    _ = Ne(),
    h = xr(),
    b = gt(),
    S = ce(),
    s = Hr(),
    a = an(),
    n = 100,
    o = 1e4,
    i = 1e3,
    r = 6e5,
    t = 500,
    l = 200,
    g = {},
    d = { Startup: "startup", GainedFocus: "gained_focus" };
  class D {
    static _safeFlushAndForget(u) {
      var f;
      (f = g[u]) === null || f === void 0 || f.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(u) {
      var f;
      (f = g[u]) === null || f === void 0 || f._retryFailedLogs(d.GainedFocus);
    }
    constructor(u, f, w, k) {
      var C, L;
      ((this._sdkKey = u),
        (this._emitter = f),
        (this._network = w),
        (this._options = k),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = k?.loggingEnabled) !== null && C !== void 0
            ? C
            : k?.disableLogging === !0
              ? b.LoggingEnabledOption.disabled
              : b.LoggingEnabledOption.browserOnly),
        k?.loggingEnabled &&
          k.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = k?.loggingBufferMaxSize) !== null && L !== void 0 ? L : n));
      const M = k?.networkConfig;
      this._logEventUrlConfig = new s.UrlConfiguration(
        v.Endpoint._rgstr,
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
      const w = (f = this._nonExposedChecks[u]) !== null && f !== void 0 ? f : 0;
      this._nonExposedChecks[u] = w + 1;
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
          (0, a._subscribeToVisiblityChanged)((w) => {
            w === "background"
              ? D._safeFlushAndForget(this._sdkKey)
              : w === "foreground" && D._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(d.Startup),
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
      if (!(0, h._isExposureEvent)(u)) return !0;
      const w = u.user ? u.user : { statsigEnvironment: void 0 },
        k = (0, m._getUserStorageKey)(this._sdkKey, w),
        C = u.metadata ? u.metadata : {},
        L = [
          u.eventName,
          k,
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
        var f, w;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(u), !1);
        try {
          const C =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((w = (f = this._options) === null || f === void 0 ? void 0 : f.networkConfig) ===
              null || w === void 0
              ? void 0
              : w.networkOverrideFunc) == null;
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
        const w = yield this._network.post(this._getRequestData(u)),
          k = (f = w?.code) !== null && f !== void 0 ? f : -1;
        return { success: k >= 200 && k < 300 };
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
        params: { [v.NetworkParam.EventCount]: String(u.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(u) {
      for (; u.length > t; ) u.shift();
      const f = this._getStorageKey();
      try {
        (0, S._setObjectInStorage)(f, u);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(u) {
      const f = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        S.Storage.isReady() || (yield S.Storage.isReadyResolver());
        const w = (0, S._getObjectFromStorage)(f);
        if (!w) return;
        (u === d.Startup && S.Storage.removeItem(f),
          (yield this._sendEvents(w)) && u === d.GainedFocus && S.Storage.removeItem(f));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(u) {
      u.user && ((u.user = Object.assign({}, u.user)), delete u.user.privateAttributes);
      const f = {},
        w = this._getCurrentPageUrl();
      w && (f.statsigMetadata = { currentPage: w });
      const k = Object.assign(Object.assign({}, u), f);
      (y.Log.debug("Enqueued Event:", k), this._queue.push(k));
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
      const w =
          (f = (u = this._options) === null || u === void 0 ? void 0 : u.loggingIntervalMs) !==
            null && f !== void 0
            ? f
            : o,
        k = setInterval(() => {
          const C = g[this._sdkKey];
          !C || C._flushIntervalId !== k ? clearInterval(k) : D._safeFlushAndForget(this._sdkKey);
        }, w);
      this._flushIntervalId = k;
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
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
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
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          m > 0
            ? ((_ = ((m + _) % 16) | 0), (m = Math.floor(m / 16)))
            : ((_ = ((c + _) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
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
    m = Q(),
    c = Ne(),
    y = ce(),
    v = ln(),
    _ = {},
    h = {},
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
          : ((t = a(r)), t == null && (t = (0, v.getUUID)()), s(t, r), o(t, r), (_[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((_[t] = r), s(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      h[r] = t;
    },
    _setDisabled: (r, t) => {
      b[r] = t;
    },
  };
  function S(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function s(r, t) {
    const l = S(t);
    try {
      (0, y._setObjectInStorage)(l, r);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(r) {
    const t = S(r);
    return (0, y._getObjectFromStorage)(t);
  }
  function n(r) {
    if (!h[r] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [g, d] = l.trim().split("=");
      if (g === i(r)) return decodeURIComponent(d);
    }
    return null;
  }
  function o(r, t) {
    if (!h[t] || !document) return;
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
    m = Q();
  function c(v, _, h) {
    try {
      const b = JSON.parse(JSON.stringify(v));
      return (
        _ != null && _.environment != null
          ? (b.statsigEnvironment = _.environment)
          : h != null && (b.statsigEnvironment = { tier: h }),
        b
      );
    } catch {
      return (m.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  Se._normalizeUser = c;
  function y(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  return ((Se._getFullUserHash = y), Se);
}
var Je = {},
  Ln;
function Yr() {
  if (Ln) return Je;
  ((Ln = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je._typedJsonParse = void 0));
  const e = Q();
  function m(c, y, v) {
    try {
      const _ = JSON.parse(c);
      if (_ && typeof _ == "object" && y in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((Je._typedJsonParse = m), Je);
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
        function d(u) {
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
          u.done ? l(u.value) : t(u.value).then(d, D);
        }
        p((r = r.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._makeDataAdapterResult = ne.DataAdapterCore = void 0));
  const m = Q(),
    c = ft(),
    y = Xr(),
    v = ce(),
    _ = Yr(),
    h = 10;
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
      this._inMemoryCache.add(t, S("Bootstrap", o, null, r));
    }
    _getIsCacheValueValid(o) {
      return o.stableID == null || o.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(o, i, r) {
      return e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const t = o ?? this.getDataSync(i),
          l = [this._fetchAndPrepFromNetwork(t, i, r)];
        return (
          r?.timeoutMs &&
            l.push(
              new Promise((g) => setTimeout(g, r.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
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
          d = yield this._fetchFromNetwork(l, i, r, g);
        if (!d) return (m.Log.debug("No response returned for latest value"), null);
        const D = (0, _._typedJsonParse)(d, "has_updates", "Response"),
          p = this._getSdkKey(),
          u = c.StableID.get(p);
        let f = null;
        if (D?.has_updates === !0) f = S("Network", d, u, i);
        else if (l && D?.has_updates === !1) f = S("NetworkNotModified", l, u, i);
        else return null;
        const w = this._getCacheKey(i);
        return (this._inMemoryCache.add(w, f), this._writeToCache(w, f), f);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(o) {
      var i;
      const r = (i = v.Storage.getItem) === null || i === void 0 ? void 0 : i.call(v.Storage, o);
      if (r == null) return null;
      const t = (0, _._typedJsonParse)(r, "source", "Cached Result");
      return t ? Object.assign(Object.assign({}, t), { source: "Cache" }) : null;
    }
    _writeToCache(o, i) {
      (v.Storage.setItem(o, JSON.stringify(i)), this._runLocalStorageCacheEviction(o));
    }
    _runLocalStorageCacheEviction(o) {
      var i;
      const r =
        (i = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && i !== void 0
          ? i
          : {};
      r[o] = Date.now();
      const t = a(r, h);
      (t && (delete r[t], v.Storage.removeItem(t)),
        (0, v._setObjectInStorage)(this._lastModifiedStoreKey, r));
    }
  }
  ne.DataAdapterCore = b;
  function S(n, o, i, r) {
    return {
      source: n,
      data: o,
      receivedAt: Date.now(),
      stableID: i,
      fullUserHash: (0, y._getFullUserHash)(r),
    };
  }
  ne._makeDataAdapterResult = S;
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
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(o, i) {
      const r = a(this._data, h - 1);
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
var We = {},
  xe = {},
  jn;
function un() {
  if (jn) return xe;
  ((jn = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.SDKType = void 0));
  const e = {};
  let m;
  return (
    (xe.SDKType = {
      _get: (c) => {
        var y;
        return ((y = e[c]) !== null && y !== void 0 ? y : "js-mono") + (m ?? "");
      },
      _setClientType(c, y) {
        e[c] = y;
      },
      _setBindingType(c) {
        (!m || m === "-react") && (m = "-" + c);
      },
    }),
    xe
  );
}
var Nn;
function Zr() {
  return (
    Nn ||
      ((Nn = 1),
      (function (e) {
        var m =
          (We && We.__awaiter) ||
          function (n, o, i, r) {
            function t(l) {
              return l instanceof i
                ? l
                : new i(function (g) {
                    g(l);
                  });
            }
            return new (i || (i = Promise))(function (l, g) {
              function d(u) {
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
                u.done ? l(u.value) : t(u.value).then(d, D);
              }
              p((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = Q(),
          y = un(),
          v = ut();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        class h {
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
              (c.Log.warn(`Caught error in ${o}`, { error: i }),
                m(this, void 0, void 0, function* () {
                  var t, l, g, d, D, p, u;
                  const f = i || Error(_),
                    w = f instanceof Error,
                    k = w ? f.name : "No Name",
                    C = b(f);
                  if (((this._lastSeenError = C), this._seen.has(k))) return;
                  if (
                    (this._seen.add(k),
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
                    M = v.StatsigMetadataProvider.get(),
                    B = w ? f.stack : S(f),
                    G = Object.assign(
                      { tag: o, exception: k, info: B, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, M), { sdkType: L }),
                    );
                  (yield (
                    (p =
                      (D =
                        (d = this._options) === null || d === void 0 ? void 0 : d.networkConfig) ===
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
        e.ErrorBoundary = h;
        function b(n) {
          return n instanceof Error
            ? n
            : typeof n == "string"
              ? new Error(n)
              : new Error("An unknown error occurred.");
        }
        function S(n) {
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
      })(We)),
    We
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
    m = new Set(["userPersistedValues"]);
  function c(y, v, _) {
    let h = `${y}|${v}`;
    if (!_) return h;
    for (const b of Object.keys(_)) {
      if (m.has(b)) return;
      e.has(b) ? (h += `|${b}=true`) : (h += `|${b}=${_[b]}`);
    }
    return h;
  }
  return ((be.createMemoKey = c), be);
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
    function (b, S, s, a) {
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
          } catch (d) {
            i(d);
          }
        }
        function t(g) {
          try {
            l(a.throw(g));
          } catch (d) {
            i(d);
          }
        }
        function l(g) {
          g.done ? o(g.value) : n(g.value).then(r, t);
        }
        l((a = a.apply(b, S || [])).next());
      });
    };
  (Object.defineProperty(pe, "__esModule", { value: !0 }), (pe._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    v = 200;
  function _(b) {
    return e(this, void 0, void 0, function* () {
      const S = yield b(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!S.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const s = yield S.arrayBuffer(),
        a = new Uint8Array(s);
      return h(a);
    });
  }
  pe._fetchTxtRecords = _;
  function h(b) {
    const S = b.findIndex(
      (a, n) =>
        n < v && String.fromCharCode(a) === "=" && y.includes(String.fromCharCode(b[n - 1])),
    );
    if (S === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let s = "";
    for (let a = S - 1; a < b.length; a++) s += String.fromCharCode(b[a]);
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
      function g(d) {
        return d instanceof t
          ? d
          : new t(function (D) {
              D(d);
            });
      }
      return new (t || (t = Promise))(function (d, D) {
        function p(w) {
          try {
            f(l.next(w));
          } catch (k) {
            D(k);
          }
        }
        function u(w) {
          try {
            f(l.throw(w));
          } catch (k) {
            D(k);
          }
        }
        function f(w) {
          w.done ? d(w.value) : g(w.value).then(p, u);
        }
        f((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._isDomainFailure = re.NetworkFallbackResolver = void 0));
  const m = yi(),
    c = Ke(),
    y = Q(),
    v = ce(),
    _ = 10080 * 60 * 1e3,
    h = 14400 * 1e3;
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
      let d = this._fallbackInfo;
      d == null && ((d = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = d));
      const D = d[t.endpoint];
      return !D ||
        Date.now() > ((g = D.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== D.urlConfigChecksum
        ? (delete d[t.endpoint], (this._fallbackInfo = d), a(r, this._fallbackInfo), null)
        : D.url
          ? D.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, g) {
      return e(this, void 0, void 0, function* () {
        var d, D;
        try {
          if (!S(l, g)) return !1;
          const u =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            f = this._pickNewFallbackUrl(
              (d = this._fallbackInfo) === null || d === void 0 ? void 0 : d[t.endpoint],
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
      var g, d, D;
      const p = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + _,
          previous: [],
        },
        u = t.endpoint,
        f = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[u];
      (f && p.previous.push(...f.previous), p.previous.length > 10 && (p.previous = []));
      const w =
        (D = (d = this._fallbackInfo) === null || d === void 0 ? void 0 : d[u]) === null ||
        D === void 0
          ? void 0
          : D.url;
      (w != null && p.previous.push(w),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [u]: p })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + h;
        const g = [],
          d = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          D = o(r.defaultUrl);
        for (const p of d) {
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
        d = r?.url;
      let D = null;
      for (const p of t) {
        const u = p.endsWith("/") ? p.slice(0, -1) : p;
        if (!g.has(p) && u !== d) {
          D = u;
          break;
        }
      }
      return D;
    }
  }
  re.NetworkFallbackResolver = b;
  function S(i, r) {
    var t;
    const l = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      r ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  re._isDomainFailure = S;
  function s(i) {
    return `statsig.network_fallback.${(0, c._DJB2)(i)}`;
  }
  function a(i, r) {
    const t = s(i);
    if (!r || Object.keys(r).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(r));
  }
  function n(i) {
    const r = s(i),
      t = v.Storage.getItem(r);
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
      setFlags: (m, c) => {
        e[m] = c;
      },
      get: (m, c) => {
        var y, v;
        return (v = (y = e[m]) === null || y === void 0 ? void 0 : y[c]) !== null && v !== void 0
          ? v
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
        const m = ue(),
          c = dt(),
          y = Q(),
          v = ce(),
          _ = ln(),
          h = 1800 * 1e3,
          b = 14400 * 1e3,
          S = {};
        ((e.SessionID = { get: (d) => e.StatsigSession.get(d).data.sessionID }),
          (e.StatsigSession = {
            get: (d) => {
              S[d] == null && (S[d] = s(d));
              const D = S[d];
              return n(D);
            },
            overrideInitialSessionID: (d, D) => {
              S[D] = a(d, D);
            },
          }));
        function s(d) {
          let D = g(d);
          const p = Date.now();
          return (
            D || (D = { sessionID: (0, _.getUUID)(), startTime: p, lastUpdate: p }),
            { data: D, sdkKey: d }
          );
        }
        function a(d, D) {
          const p = Date.now();
          return { data: { sessionID: d, startTime: p, lastUpdate: p }, sdkKey: D };
        }
        function n(d) {
          const D = Date.now(),
            p = d.data,
            u = d.sdkKey;
          if (i(p) || r(p)) {
            ((p.sessionID = (0, _.getUUID)()), (p.startTime = D));
            const w = __STATSIG__ == null ? void 0 : __STATSIG__.instance(u);
            w && w.$emt({ name: "session_expired" });
          }
          ((p.lastUpdate = D),
            l(p, d.sdkKey),
            clearTimeout(d.idleTimeoutID),
            clearTimeout(d.ageTimeoutID));
          const f = D - p.startTime;
          return ((d.idleTimeoutID = o(u, h)), (d.ageTimeoutID = o(u, b - f)), d);
        }
        function o(d, D) {
          return setTimeout(() => {
            var p;
            const u =
              (p = (0, m._getStatsigGlobal)()) === null || p === void 0 ? void 0 : p.instance(d);
            u && u.$emt({ name: "session_expired" });
          }, D);
        }
        function i({ lastUpdate: d }) {
          return Date.now() - d > h;
        }
        function r({ startTime: d }) {
          return Date.now() - d > b;
        }
        function t(d) {
          return `statsig.session_id.${(0, c._getStorageKey)(d)}`;
        }
        function l(d, D) {
          const p = t(D);
          try {
            (0, v._setObjectInStorage)(p, d);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function g(d) {
          const D = t(d);
          return (0, v._getObjectFromStorage)(D);
        }
      })(Lt)),
    Lt
  );
}
var Qe = {},
  Wn;
function ti() {
  return (
    Wn ||
      ((Wn = 1),
      Object.defineProperty(Qe, "__esModule", { value: !0 }),
      (Qe.ErrorTag = void 0),
      (Qe.ErrorTag = { NetworkError: "NetworkError" })),
    Qe
  );
}
var xn;
function Si() {
  if (xn) return Ee;
  xn = 1;
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
  const m = ue(),
    c = rn(),
    y = Q(),
    v = _t(),
    _ = mi(),
    h = ei(),
    b = un(),
    S = Ne(),
    s = cn(),
    a = ft(),
    n = ti(),
    o = ut(),
    i = gt(),
    r = an(),
    t = 1e4,
    l = 500,
    g = 3e4,
    d = 1e3,
    D = 50,
    p = D / d,
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
      if (!w(E)) return !1;
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
        if (!w(E) || this._netConfig.preventAllNetworkTraffic) return null;
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
          W = setTimeout(() => {
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
            clearTimeout(W),
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
      (E.urlConfig.endpoint === v.Endpoint._initialize ||
        E.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const U = Object.assign(
          {
            [v.NetworkParam.SdkKey]: E.sdkKey,
            [v.NetworkParam.SdkType]: b.SDKType._get(E.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: s.SessionID.get(E.sdkKey),
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
      const T = (0, S._getWindowSafe)(),
        U = E.body;
      if (
        !(
          !E.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof U != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((E.body = T.btoa(U).split("").reverse().join("")),
            (E.params = Object.assign(
              Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
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
            const A = q.reduce((W, K) => W + K.length, 0),
              j = new Uint8Array(A);
            let V = 0;
            for (const W of q) (j.set(W, V), (V += W.length));
            ((E.body = j),
              (E.params = Object.assign(
                Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (U) {
            y.Log.warn(`Request compression failed for ${E.urlConfig.getUrl()}`, U);
          }
      });
    }
    _getInternalRequestArgs(E, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        U = Object.assign(Object.assign({}, I), { method: E, fallbackUrl: T });
      return ("data" in I && k(U, I.data), U);
    }
  }
  Ee.NetworkCore = f;
  const w = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    k = (O, E) => {
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
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = h.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
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
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: E });
  }
  function G(O, E, I, T, U) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(E, I, T, U));
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
      function d(D) {
        return D instanceof l
          ? D
          : new l(function (p) {
              p(D);
            });
      }
      return new (l || (l = Promise))(function (D, p) {
        function u(k) {
          try {
            w(g.next(k));
          } catch (C) {
            p(C);
          }
        }
        function f(k) {
          try {
            w(g.throw(k));
          } catch (C) {
            p(C);
          }
        }
        function w(k) {
          k.done ? D(k.value) : d(k.value).then(u, f);
        }
        w((g = g.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(De, "__esModule", { value: !0 }), (De.StatsigClientBase = void 0), ue());
  const m = ue(),
    c = Zr(),
    y = Qr(),
    v = Q(),
    _ = $r(),
    h = Ne(),
    b = cn(),
    S = ft(),
    s = gt(),
    a = ce(),
    n = 3e3;
  class o {
    constructor(t, l, g, d) {
      var D, p, u, f;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const w = this.$emt.bind(this);
      (d?.logLevel != null && (v.Log.level = d.logLevel),
        d?.disableStorage && a.Storage._setDisabled(!0),
        d?.initialSessionID && b.StatsigSession.overrideInitialSessionID(d.initialSessionID, t),
        d?.storageProvider && a.Storage._setProvider(d.storageProvider),
        d?.enableCookies && S.StableID._setCookiesEnabled(t, d.enableCookies),
        d?.disableStableID && S.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = d ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (D = d?.overrideAdapter) !== null && D !== void 0 ? D : null),
        (this._logger = new y.EventLogger(t, w, g, d)),
        (this._errorBoundary = new c.ErrorBoundary(t, d, w)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, d, g),
        (this.storageProvider = a.Storage),
        (f =
          (u = (p = this.overrideAdapter) === null || p === void 0 ? void 0 : p.loadFromStorage) ===
            null || u === void 0
            ? void 0
            : u.call(p)) === null ||
          f === void 0 ||
          f.catch((k) => this._errorBoundary.logError("OA::loadFromStorage", k)),
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
          S.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
      const g = (d) => {
        try {
          d(t);
        } catch (D) {
          if (d.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, D);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((d) => g(d)),
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
      return (g, d) => {
        if (this._options.disableEvaluationMemoization) return l(g, d);
        const D = (0, _.createMemoKey)(t, g, d);
        return D
          ? (D in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[D] = l(g, d))),
            this._memoCache[D])
          : l(g, d);
      };
    }
  }
  De.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, h._isServerEnv)()) return;
    const g = (0, m._getStatsigGlobal)(),
      d = (l = g.instances) !== null && l !== void 0 ? l : {},
      D = t;
    (d[r] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (d[r] = D),
      g.firstInstance || (g.firstInstance = D),
      (g.instances = d),
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
function wi() {
  return (Zn || ((Zn = 1), Object.defineProperty(jt, "__esModule", { value: !0 })), jt);
}
var x = {},
  $n;
function ki() {
  if ($n) return x;
  (($n = 1),
    Object.defineProperty(x, "__esModule", { value: !0 }),
    (x._makeTypedGet =
      x._mergeOverride =
      x._makeLayer =
      x._makeExperiment =
      x._makeDynamicConfig =
      x._makeFeatureGate =
        void 0));
  const e = Q(),
    m = sn();
  function c(s, a, n, o) {
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
    return Object.assign(Object.assign({}, c(s, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  x._makeFeatureGate = y;
  function v(s, a, n) {
    var o;
    const i = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(s, a, n, i)), { get: S(s, n?.value) });
  }
  x._makeDynamicConfig = v;
  function _(s, a, n) {
    var o;
    const i = v(s, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  x._makeExperiment = _;
  function h(s, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, c(s, a, n, void 0)), {
      get: S(s, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  x._makeLayer = h;
  function b(s, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, s), a), { get: S(s.name, n, o) });
  }
  x._mergeOverride = b;
  function S(s, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, m._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${s}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((x._makeTypedGet = S), x);
}
var Nt = {},
  er;
function Ii() {
  return (er || ((er = 1), Object.defineProperty(Nt, "__esModule", { value: !0 })), Nt);
}
var we = {},
  tr;
function Oi() {
  if (tr) return we;
  ((tr = 1),
    Object.defineProperty(we, "__esModule", { value: !0 }),
    (we.UPDATE_DETAIL_ERROR_MESSAGES = we.createUpdateDetails = void 0));
  const e = (m, c, y, v, _, h) => ({
    duration: y,
    source: c,
    success: m,
    error: v,
    sourceUrl: _,
    warnings: h,
  });
  return (
    (we.createUpdateDetails = e),
    (we.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    we
  );
}
var nr;
function Qi() {
  return (
    nr ||
      ((nr = 1),
      (function (e) {
        var m =
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
          c =
            (fe && fe.__exportStar) ||
            function (s, a) {
              for (var n in s)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && m(a, s, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          ue());
        const y = ue(),
          v = rn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = Qr();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const h = Q();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return h.Log;
          },
        });
        const b = ut(),
          S = ce();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return S.Storage;
          },
        }),
          c(ue(), e),
          c(dt(), e),
          c(di(), e),
          c(_i(), e),
          c(rn(), e),
          c(gi(), e),
          c(Zr(), e),
          c(fi(), e),
          c(vi(), e),
          c(Ke(), e),
          c(hi(), e),
          c(Q(), e),
          c($r(), e),
          c(_t(), e),
          c(Si(), e),
          c(bi(), e),
          c(Ei(), e),
          c(Ne(), e),
          c(un(), e),
          c(cn(), e),
          c(ft(), e),
          c(pi(), e),
          c(ti(), e),
          c(Di(), e),
          c(xr(), e),
          c(ut(), e),
          c(gt(), e),
          c(wi(), e),
          c(ki(), e),
          c(Ii(), e),
          c(Xr(), e),
          c(ce(), e),
          c(Yr(), e),
          c(sn(), e),
          c(Hr(), e),
          c(ln(), e),
          c(an(), e),
          c(Oi(), e),
          c(ei(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: h.Log, SDK_VERSION: b.SDK_VERSION }));
      })(fe)),
    fe
  );
}
var ke = {},
  Ft = {},
  qt = {},
  rr;
function z() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function _(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class h {
          static info(...S) {
            h.level >= e.LogLevel.Info && console.info(c, ..._(S));
          }
          static debug(...S) {
            h.level >= e.LogLevel.Debug && console.debug(m, ..._(S));
          }
          static warn(...S) {
            h.level >= e.LogLevel.Warn && console.warn(y, ..._(S));
          }
          static error(...S) {
            h.level >= e.LogLevel.Error && console.error(v, ..._(S));
          }
        }
        ((e.Log = h), (h.level = e.LogLevel.Warn));
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
        var m, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = z(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = _;
        const h = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = h;
        const b = (i) => {
          const r = (0, e._getStatsigGlobal)();
          return i
            ? r.instances && r.instances[i]
            : (r.instances &&
                Object.keys(r.instances).length > 1 &&
                v.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              r.firstInstance);
        };
        e._getInstance = b;
        const S = "__STATSIG__",
          s = typeof window < "u" ? window : {},
          a = typeof lt < "u" ? lt : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (m = s[S]) !== null && m !== void 0 ? m : a[S]) !== null && c !== void 0
                ? c
                : n[S]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((s[S] = o), (a[S] = o), (n[S] = o));
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
        const m = new Map(),
          c = "start",
          y = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (s) => m.get(s),
          _markInitOverallStart: (s) => {
            b(s, _({}, c, "overall"));
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
            b(s, _(a, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (s, a) => {
            b(s, _(a, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (s) => {
            b(s, _({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (s, a) => {
            b(s, _(a, y, "initialize", "process"));
          },
          _clearMarkers: (s) => {
            m.delete(s);
          },
          _formatError(s) {
            if (s && typeof s == "object")
              return { code: S(s, "code"), name: S(s, "name"), message: S(s, "message") };
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
            const t = h(s, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function _(s, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, s);
        }
        function h(s, a) {
          return { eventName: v, user: s, value: null, metadata: a, time: Date.now() };
        }
        function b(s, a) {
          var n;
          const o = (n = m.get(s)) !== null && n !== void 0 ? n : [];
          (o.push(a), m.set(s, o));
        }
        function S(s, a) {
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
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  Ce._typeOf = e;
  function m(c, y) {
    const v = (_) => (Array.isArray(_) ? "array" : _ === null ? "null" : typeof _);
    return v(c) === v(y);
  }
  return ((Ce._isTypeMatch = m), Ce);
}
var ar;
function Be() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const m = dn(),
          c = (_) => {
            let h = 0;
            for (let b = 0; b < _.length; b++) {
              const S = _.charCodeAt(b);
              ((h = (h << 5) - h + S), (h = h & h));
            }
            return String(h >>> 0);
          };
        e._DJB2 = c;
        const y = (_, h) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(_, h)));
        e._DJB2Object = y;
        const v = (_, h) => {
          if (_ == null) return null;
          const b = Object.keys(_).sort(),
            S = {};
          return (
            b.forEach((s) => {
              const a = _[s];
              if (h === 0 || (0, m._typeOf)(a) !== "object") {
                S[s] = a;
                return;
              }
              S[s] = (0, e._getSortedObject)(a, h != null ? h - 1 : h);
            }),
            S
          );
        };
        e._getSortedObject = v;
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
  function m(y, v, _) {
    var h;
    if (_) return _(y, v);
    const b = v && v.customIDs ? v.customIDs : {},
      S = [
        `uid:${(h = v?.userID) !== null && h !== void 0 ? h : ""}`,
        `cids:${Object.keys(b)
          .sort((s, a) => s.localeCompare(a))
          .map((s) => `${s}-${b[s]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(S.join("|"));
  }
  Oe._getUserStorageKey = m;
  function c(y, v, _) {
    return v ? m(y, v, _) : (0, e._DJB2)(`k:${y}`);
  }
  return ((Oe._getStorageKey = c), Oe);
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
        const m = z(),
          c = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = c;
        const y = () => {
          var a;
          const n = (0, e._getWindowSafe)();
          return (a = n?.document) !== null && a !== void 0 ? a : null;
        };
        e._getDocumentSafe = y;
        const v = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const a =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || a;
        };
        e._isServerEnv = v;
        const _ = (a, n) => {
          const o = (0, e._getWindowSafe)();
          typeof o?.addEventListener == "function" && o.addEventListener(a, n);
        };
        e._addWindowEventListenerSafe = _;
        const h = (a, n) => {
          const o = (0, e._getDocumentSafe)();
          typeof o?.addEventListener == "function" && o.addEventListener(a, n);
        };
        e._addDocumentEventListenerSafe = h;
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
        const S = () => {
          const a = (0, e._getWindowSafe)();
          return a && "onpagehide" in a ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = S;
        const s = (a, n) => {
          try {
            return JSON.parse(JSON.stringify(n));
          } catch {
            return (m.Log.error(`Failed to clone object ${a}`), null);
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
        const m = z(),
          c = ae(),
          y = {},
          v = {
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
          const n = (0, c._getWindowSafe)();
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
          m.Log.warn("Failed to setup localStorageProvider.");
        }
        let h = _ ?? v,
          b = h;
        function S(n) {
          try {
            return n();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            throw o;
          }
        }
        e.Storage = {
          isReady: () => b.isReady(),
          isReadyResolver: () => b.isReadyResolver(),
          getProviderName: () => b.getProviderName(),
          getItem: (n) => S(() => b.getItem(n)),
          setItem: (n, o) => S(() => b.setItem(n, o)),
          removeItem: (n) => b.removeItem(n),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (n) => {
            ((h = n), (b = n));
          },
          _setDisabled: (n) => {
            n ? (b = v) : (b = h);
          },
        };
        function s(n) {
          const o = e.Storage.getItem(n);
          try {
            return JSON.parse(o ?? "null");
          } catch {
            return (m.Log.error(`Failed to parse value for key "${n}"`), null);
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
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          m > 0
            ? ((_ = ((m + _) % 16) | 0), (m = Math.floor(m / 16)))
            : ((_ = ((c + _) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ye.getUUID = e), Ye);
}
var Wt = {},
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
        const m = ae(),
          c = "foreground",
          y = "background",
          v = [];
        let _ = c,
          h = !1;
        const b = () => _ === c;
        e._isCurrentlyVisible = b;
        const S = () => h;
        e._isUnloading = S;
        const s = (n) => {
          v.unshift(n);
        };
        e._subscribeToVisiblityChanged = s;
        const a = (n) => {
          n !== _ && ((_ = n), v.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((h = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : y);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((h = !0), (0, e._notifyVisibilityChanged)(y));
          }));
      })(Wt)),
    Wt
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
        const m = vt(),
          c = z(),
          y = de(),
          v = _n(),
          _ = yt(),
          h = 1800 * 1e3,
          b = 14400 * 1e3,
          S = 15e3,
          s = {};
        ((0, _._subscribeToVisiblityChanged)((p) => {
          p === "background" && Object.values(s).forEach((u) => t(u));
        }),
          (e.SessionID = { get: (p) => e.StatsigSession.get(p).data.sessionID }),
          (e.StatsigSession = {
            get: (p, u = !0) => {
              s[p] == null && (s[p] = d(p));
              const f = s[p];
              return a(f, u);
            },
            overrideInitialSessionID: (p, u) => {
              const f = Date.now(),
                w = {
                  data: { sessionID: p, startTime: f, lastUpdate: f },
                  sdkKey: u,
                  lastPersistedAt: Date.now(),
                  storageKey: r(u),
                };
              (t(w), (s[u] = w));
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
            w = o(f) || i(f);
          return (
            w &&
              ((p.data = D()),
              (u = __STATSIG__ == null ? void 0 : __STATSIG__.instance(p.sdkKey)) === null ||
                u === void 0 ||
                u.$emt({ name: "session_expired" })),
            w
          );
        }
        function o({ lastUpdate: p }) {
          return Date.now() - p > h;
        }
        function i({ startTime: p }) {
          return Date.now() - p > b;
        }
        function r(p) {
          return `statsig.session_id.${(0, m._getStorageKey)(p)}`;
        }
        function t(p) {
          try {
            ((0, y._setObjectInStorage)(p.storageKey, p.data), (p.lastPersistedAt = Date.now()));
          } catch {
            c.Log.warn("Failed to save SessionID");
          }
        }
        function l(p) {
          Date.now() - p.lastPersistedAt > S && t(p);
        }
        function g(p) {
          return (0, y._getObjectFromStorage)(p);
        }
        function d(p) {
          const u = r(p),
            f = g(u);
          return f && f.sessionID && f.startTime && f.lastUpdate
            ? { data: f, sdkKey: p, lastPersistedAt: 0, storageKey: u }
            : { data: D(), sdkKey: p, lastPersistedAt: 0, storageKey: u };
        }
        function D() {
          return { sessionID: (0, v.getUUID)(), startTime: Date.now(), lastUpdate: Date.now() };
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
    m = "statsig::gate_exposure",
    c = "statsig::layer_exposure",
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
    v = ({ eventName: a }) => a === m || a === e || a === c;
  Y._isExposureEvent = v;
  const _ = (a, n, o) => {
    var i, r, t;
    const l = { gate: n.name, gateValue: String(n.value), ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (l.configVersion = n.__evaluation.version),
      y(
        m,
        a,
        n.details,
        l,
        h(
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
  function h(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  Y._mapExposures = h;
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
        h(
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
  const S = (a, n, o, i) => {
    var r, t, l, g, d, D, p;
    const u = n.__evaluation,
      f = ((r = u?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let w = "",
      k = (t = u?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    f &&
      ((w = (l = u.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (k = (g = u.secondary_exposures) !== null && g !== void 0 ? g : []));
    const C = (d = n.__evaluation) === null || d === void 0 ? void 0 : d.parameter_rule_ids,
      L = {
        config: n.name,
        parameterName: o,
        ruleID: (D = C?.[o]) !== null && D !== void 0 ? D : n.ruleID,
        allocatedExperiment: w,
        isExplicitParameter: String(f),
      };
    return (
      ((p = n.__evaluation) === null || p === void 0 ? void 0 : p.version) != null &&
        (L.configVersion = n.__evaluation.version),
      y(c, a, n.details, L, h(k, i))
    );
  };
  Y._createLayerParameterExposure = S;
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
    m = ht(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  let y = class {
    constructor(_, h, b, S) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = c[_]),
        h && (this.customUrl = h),
        !h && b && (this.customUrl = b.endsWith("/") ? `${b}${_}` : `${b}/${_}`),
        S && (this.fallbackUrls = S));
      const s = m.NetworkDefault[_];
      this.defaultUrl = `${s}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const h = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + h);
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
    function (p, u, f, w) {
      function k(C) {
        return C instanceof f
          ? C
          : new f(function (L) {
              L(C);
            });
      }
      return new (f || (f = Promise))(function (C, L) {
        function M(N) {
          try {
            G(w.next(N));
          } catch (O) {
            L(O);
          }
        }
        function B(N) {
          try {
            G(w.throw(N));
          } catch (O) {
            L(O);
          }
        }
        function G(N) {
          N.done ? C(N.value) : k(N.value).then(M, B);
        }
        G((w = w.apply(p, u || [])).next());
      });
    };
  (Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.EventLogger = void 0));
  const m = vt(),
    c = Be(),
    y = z(),
    v = ht(),
    _ = ae(),
    h = st(),
    b = ni(),
    S = mt(),
    s = de(),
    a = ri(),
    n = yt(),
    o = 100,
    i = 1e4,
    r = 1e3,
    t = 6e5,
    l = 500,
    g = 200,
    d = {};
  let D = class qe {
    static _safeFlushAndForget(u) {
      var f;
      (f = d[u]) === null || f === void 0 || f.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(u) {
      var f;
      (f = d[u]) === null || f === void 0 || f._retryFailedLogs();
    }
    constructor(u, f, w, k) {
      var C, L;
      ((this._sdkKey = u),
        (this._emitter = f),
        (this._network = w),
        (this._options = k),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (C = k?.loggingEnabled) !== null && C !== void 0
            ? C
            : k?.disableLogging === !0
              ? S.LoggingEnabledOption.disabled
              : S.LoggingEnabledOption.browserOnly),
        k?.loggingEnabled &&
          k.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (L = k?.loggingBufferMaxSize) !== null && L !== void 0 ? L : o));
      const M = k?.networkConfig;
      this._logEventUrlConfig = new a.UrlConfiguration(
        v.Endpoint._rgstr,
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
          w = (0, s._getObjectFromStorage)(f);
        (w && this._queue.push(...w), s.Storage.removeItem(f));
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
      const w = (f = this._nonExposedChecks[u]) !== null && f !== void 0 ? f : 0;
      this._nonExposedChecks[u] = w + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var u;
      const f = (0, _._isServerEnv)();
      (f &&
        ((u = this._options) === null || u === void 0 ? void 0 : u.loggingEnabled) !== "always") ||
        ((d[this._sdkKey] = this),
        f ||
          (0, n._subscribeToVisiblityChanged)((w) => {
            w === "background"
              ? qe._safeFlushAndForget(this._sdkKey)
              : w === "foreground" && qe._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete d[this._sdkKey],
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
      const w = u.user ? u.user : { statsigEnvironment: void 0 },
        k = (0, m._getUserStorageKey)(this._sdkKey, w),
        C = u.metadata ? u.metadata : {},
        L = [
          u.eventName,
          k,
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
        var f, w;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(u), !1);
        try {
          const C =
            (0, n._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((w = (f = this._options) === null || f === void 0 ? void 0 : f.networkConfig) ===
              null || w === void 0
              ? void 0
              : w.networkOverrideFunc) == null;
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
        const w = yield this._network.post(this._getRequestData(u)),
          k = (f = w?.code) !== null && f !== void 0 ? f : -1;
        return { success: k >= 200 && k < 300 };
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
        params: { [v.NetworkParam.EventCount]: String(u.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(u) {
      for (; u.length > l; ) u.shift();
      const f = this._getStorageKey();
      try {
        const w = this._getFailedLogsFromStorage(f);
        (0, s._setObjectInStorage)(f, [...w, ...u]);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _getFailedLogsFromStorage(u) {
      let f = [];
      try {
        const w = (0, s._getObjectFromStorage)(u);
        return (Array.isArray(w) && (f = w), f);
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
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(u) {
      u.user && ((u.user = Object.assign({}, u.user)), delete u.user.privateAttributes);
      const f = {},
        w = this._getCurrentPageUrl();
      w && (f.statsigMetadata = { currentPage: w });
      const k = Object.assign(Object.assign({}, u), f);
      (y.Log.debug("Enqueued Event:", k), this._queue.push(k));
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
      const w =
          (f = (u = this._options) === null || u === void 0 ? void 0 : u.loggingIntervalMs) !==
            null && f !== void 0
            ? f
            : i,
        k = setInterval(() => {
          const C = d[this._sdkKey];
          !C || C._flushIntervalId !== k
            ? clearInterval(k)
            : (qe._safeFlushAndForget(this._sdkKey),
              h.StatsigSession.checkForIdleSession(this._sdkKey));
        }, w);
      this._flushIntervalId = k;
    }
  };
  return ((Ie.EventLogger = D), Ie);
}
var xt = {},
  Sr;
function ct() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.31.2"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
          },
        };
      })(xt)),
    xt
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
    m = z(),
    c = ae(),
    y = de(),
    v = _n(),
    _ = {},
    h = {},
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
          : ((t = a(r)), t == null && (t = (0, v.getUUID)()), s(t, r), o(t, r), (_[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((_[t] = r), s(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      h[r] = t;
    },
    _setDisabled: (r, t) => {
      b[r] = t;
    },
  };
  function S(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function s(r, t) {
    const l = S(t);
    try {
      (0, y._setObjectInStorage)(l, r);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(r) {
    const t = S(r);
    return (0, y._getObjectFromStorage)(t);
  }
  function n(r) {
    if (!h[r] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [g, d] = l.trim().split("=");
      if (g === i(r)) return decodeURIComponent(d);
    }
    return null;
  }
  function o(r, t) {
    if (!h[t] || (0, c._getDocumentSafe)() == null) return;
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
    m = ae(),
    c = st(),
    y = at();
  class v {
    constructor(h, b, S, s, a, n) {
      ((this._sdkKey = h),
        (this._getOptions = b),
        (this._getErrorBoundary = S),
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
      let h = (0, m._cloneObject)("StatsigUser", this._getUser());
      return (h == null && (e.Log.error("Failed to clone user"), (h = {})), h);
    }
    getSession(h = !0) {
      return c.StatsigSession.get(this._sdkKey, h);
    }
    get stableID() {
      return y.StableID.get(this._sdkKey);
    }
    get sdkInstanceID() {
      return this._getSdkInstanceID();
    }
    toContext(h = !0) {
      return {
        sdkKey: this.sdkKey,
        options: this.options,
        values: this.values,
        user: this.user,
        errorBoundary: this.errorBoundary,
        session: this.getSession(h),
        stableID: this.stableID,
        sdkInstanceID: this.sdkInstanceID,
      };
    }
  }
  return (($e.PrecomputedEvaluationsContextHandle = v), $e);
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
    m = z(),
    c = ae();
  function y(h, b, S) {
    const s = (0, c._cloneObject)("StatsigUser", h);
    return s == null
      ? (m.Log.error("Failed to clone user"), { statsigEnvironment: void 0 })
      : (b != null && b.environment != null
          ? (s.statsigEnvironment = b.environment)
          : S != null && (s.statsigEnvironment = { tier: S }),
        s);
  }
  oe._normalizeUser = y;
  function v(h) {
    return h ? (0, e._DJB2Object)(h) : null;
  }
  oe._getFullUserHash = v;
  function _(h, b) {
    var S, s, a;
    if (typeof b != "string") return h.userID;
    const n = b.toLowerCase();
    return n !== "userid"
      ? (s = (S = h.customIDs) === null || S === void 0 ? void 0 : S[b]) !== null && s !== void 0
        ? s
        : (a = h.customIDs) === null || a === void 0
          ? void 0
          : a[n]
      : h.userID;
  }
  return ((oe._getUnitIDFromUser = _), oe);
}
var et = {},
  Dr;
function si() {
  if (Dr) return et;
  ((Dr = 1), Object.defineProperty(et, "__esModule", { value: !0 }), (et._typedJsonParse = void 0));
  const e = z();
  function m(c, y, v) {
    try {
      const _ = JSON.parse(c);
      if (_ && typeof _ == "object" && y in _) return _;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return ((et._typedJsonParse = m), et);
}
var wr;
function Ti() {
  if (wr) return ie;
  wr = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (o, i, r, t) {
      function l(g) {
        return g instanceof r
          ? g
          : new r(function (d) {
              d(g);
            });
      }
      return new (r || (r = Promise))(function (g, d) {
        function D(f) {
          try {
            u(t.next(f));
          } catch (w) {
            d(w);
          }
        }
        function p(f) {
          try {
            u(t.throw(f));
          } catch (w) {
            d(w);
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
  const m = z(),
    c = at(),
    y = oi(),
    v = de(),
    _ = si(),
    h = 10,
    b = 8;
  let S = class {
    constructor(i, r) {
      ((this._adapterName = i),
        (this._cacheSuffix = r),
        (this._options = null),
        (this._sdkKey = null),
        (this._cacheLimit = h),
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
      return i.stableID == null || i.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, r, t) {
      return e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const l = i ?? this.getDataSync(r),
          g = [this._fetchAndPrepFromNetwork(l, r, t)];
        return (
          t?.timeoutMs &&
            g.push(
              new Promise((d) => setTimeout(d, t.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
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
          d = i != null && this._isCachedResultValidFor204(i, r),
          D = yield this._fetchFromNetwork(g, r, t, d);
        if (!D) return (m.Log.debug("No response returned for latest value"), null);
        const p = (0, _._typedJsonParse)(D, "has_updates", "Response"),
          u = this._getSdkKey(),
          f = c.StableID.get(u);
        let w = null;
        if (p?.has_updates === !0) w = s("Network", D, f, r);
        else if (g && p?.has_updates === !1) w = s("NetworkNotModified", g, f, r);
        else return null;
        const k = this._getCacheKey(r);
        return (this._inMemoryCache.add(k, w, this._cacheLimit), this._writeToCache(k, w), w);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (m.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var r;
      const t = (r = v.Storage.getItem) === null || r === void 0 ? void 0 : r.call(v.Storage, i);
      if (t == null) return null;
      const l = (0, _._typedJsonParse)(t, "source", "Cached Result");
      return l ? Object.assign(Object.assign({}, l), { source: "Cache" }) : null;
    }
    _writeToCache(i, r) {
      const t = JSON.stringify(r);
      for (let l = 0; l < b; l++)
        try {
          v.Storage.setItem(i, t);
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
        (t = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && t !== void 0
          ? t
          : {};
      l[i] = Date.now();
      const g = n(l, r);
      for (const d of g) (delete l[d], v.Storage.removeItem(d));
      (0, v._setObjectInStorage)(this._lastModifiedStoreKey, l);
    }
  };
  ie.DataAdapterCore = S;
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
        d = (t = r?.customIDs) === null || t === void 0 ? void 0 : t.stableID;
      return d && g && d !== g
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
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
                d = o[l];
              return typeof g == "object" && typeof d == "object"
                ? g.receivedAt - d.receivedAt
                : g - d;
            })
            .slice(0, r.length - i);
  }
  return ie;
}
var Ht = {},
  kr;
function Ui() {
  return (kr || ((kr = 1), Object.defineProperty(Ht, "__esModule", { value: !0 })), Ht);
}
var tt = {},
  nt = {},
  Ir;
function gn() {
  if (Ir) return nt;
  ((Ir = 1), Object.defineProperty(nt, "__esModule", { value: !0 }), (nt.SDKType = void 0));
  const e = {};
  let m;
  return (
    (nt.SDKType = {
      _get: (c) => {
        var y;
        return ((y = e[c]) !== null && y !== void 0 ? y : "js-mono") + (m ?? "");
      },
      _setClientType(c, y) {
        e[c] = y;
      },
      _setBindingType(c) {
        (!m || m === "-react") && (m = "-" + c);
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
        var m =
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
              function d(u) {
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
                u.done ? l(u.value) : t(u.value).then(d, D);
              }
              p((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = z(),
          y = gn(),
          v = ct();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        let h = class {
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
              (c.Log.warn(`Caught error in ${o}`, { error: i }),
                m(this, void 0, void 0, function* () {
                  var t, l, g, d, D, p, u;
                  const f = i || Error(_),
                    w = f instanceof Error,
                    k = w ? f.name : "No Name",
                    C = b(f);
                  if (((this._lastSeenError = C), this._seen.has(k))) return;
                  if (
                    (this._seen.add(k),
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
                    M = v.StatsigMetadataProvider.get(),
                    B = w ? f.stack : S(f),
                    G = Object.assign(
                      { tag: o, exception: k, info: B, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, M), { sdkType: L }),
                    );
                  (yield (
                    (p =
                      (D =
                        (d = this._options) === null || d === void 0 ? void 0 : d.networkConfig) ===
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
        e.ErrorBoundary = h;
        function b(n) {
          return n instanceof Error
            ? n
            : typeof n == "string"
              ? new Error(n)
              : new Error("An unknown error occurred.");
        }
        function S(n) {
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
    m = new Set(["userPersistedValues"]);
  function c(y, v, _) {
    let h = `${y}|${v}`;
    if (!_) return h;
    for (const b of Object.keys(_)) {
      if (m.has(b)) return;
      e.has(b) ? (h += `|${b}=true`) : (h += `|${b}=${_[b]}`);
    }
    return h;
  }
  return ((Re.createMemoKey = c), Re);
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
    function (b, S, s, a) {
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
          } catch (d) {
            i(d);
          }
        }
        function t(g) {
          try {
            l(a.throw(g));
          } catch (d) {
            i(d);
          }
        }
        function l(g) {
          g.done ? o(g.value) : n(g.value).then(r, t);
        }
        l((a = a.apply(b, S || [])).next());
      });
    };
  (Object.defineProperty(Le, "__esModule", { value: !0 }), (Le._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    v = 200;
  function _(b) {
    return e(this, void 0, void 0, function* () {
      const S = yield b(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!S.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const s = yield S.arrayBuffer(),
        a = new Uint8Array(s);
      return h(a);
    });
  }
  Le._fetchTxtRecords = _;
  function h(b) {
    const S = b.findIndex(
      (a, n) =>
        n < v && String.fromCharCode(a) === "=" && y.includes(String.fromCharCode(b[n - 1])),
    );
    if (S === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let s = "";
    for (let a = S - 1; a < b.length; a++) s += String.fromCharCode(b[a]);
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
      function g(d) {
        return d instanceof t
          ? d
          : new t(function (D) {
              D(d);
            });
      }
      return new (t || (t = Promise))(function (d, D) {
        function p(w) {
          try {
            f(l.next(w));
          } catch (k) {
            D(k);
          }
        }
        function u(w) {
          try {
            f(l.throw(w));
          } catch (k) {
            D(k);
          }
        }
        function f(w) {
          w.done ? d(w.value) : g(w.value).then(p, u);
        }
        f((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }),
    (se._isDomainFailure = se.NetworkFallbackResolver = void 0));
  const m = Pi(),
    c = Be(),
    y = z(),
    v = de(),
    _ = 10080 * 60 * 1e3,
    h = 14400 * 1e3;
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
      let d = this._fallbackInfo;
      d == null && ((d = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = d));
      const D = d[t.endpoint];
      return !D ||
        Date.now() > ((g = D.expiryTime) !== null && g !== void 0 ? g : 0) ||
        t.getChecksum() !== D.urlConfigChecksum
        ? (delete d[t.endpoint], (this._fallbackInfo = d), a(r, this._fallbackInfo), null)
        : D.url
          ? D.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, g) {
      return e(this, void 0, void 0, function* () {
        var d, D;
        try {
          if (!S(l, g)) return !1;
          const u =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            f = this._pickNewFallbackUrl(
              (d = this._fallbackInfo) === null || d === void 0 ? void 0 : d[t.endpoint],
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
      var g, d, D;
      const p = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + _,
          previous: [],
        },
        u = t.endpoint,
        f = (g = this._fallbackInfo) === null || g === void 0 ? void 0 : g[u];
      (f && p.previous.push(...f.previous), p.previous.length > 10 && (p.previous = []));
      const w =
        (D = (d = this._fallbackInfo) === null || d === void 0 ? void 0 : d[u]) === null ||
        D === void 0
          ? void 0
          : D.url;
      (w != null && p.previous.push(w),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [u]: p })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + h;
        const g = [],
          d = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          D = o(r.defaultUrl);
        for (const p of d) {
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
        d = r?.url;
      let D = null;
      for (const p of t) {
        const u = p.endsWith("/") ? p.slice(0, -1) : p;
        if (!g.has(p) && u !== d) {
          D = u;
          break;
        }
      }
      return D;
    }
  };
  se.NetworkFallbackResolver = b;
  function S(i, r) {
    var t;
    const l = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      r ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  se._isDomainFailure = S;
  function s(i) {
    return `statsig.network_fallback.${(0, c._DJB2)(i)}`;
  }
  function a(i, r) {
    const t = s(i);
    if (!r || Object.keys(r).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(r));
  }
  function n(i) {
    const r = s(i),
      t = v.Storage.getItem(r);
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
      setFlags: (m, c) => {
        e[m] = c;
      },
      get: (m, c) => {
        var y, v;
        return (v = (y = e[m]) === null || y === void 0 ? void 0 : y[c]) !== null && v !== void 0
          ? v
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
  const m = je(),
    c = on(),
    y = z(),
    v = ht(),
    _ = Ai(),
    h = ui(),
    b = gn(),
    S = ae(),
    s = st(),
    a = at(),
    n = ci(),
    o = ct(),
    i = mt(),
    r = yt(),
    t = 1e4,
    l = 500,
    g = 3e4,
    d = 1e3,
    D = 50,
    p = D / d,
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
      if (!w(E)) return !1;
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
        if (!w(E) || this._netConfig.preventAllNetworkTraffic) return null;
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
        const W = this._getPopulatedURL(E);
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
              ee(W, le).finally(() => clearTimeout(Fe)),
              new Promise((_e, ge) => {
                Fe = setTimeout(() => {
                  ((V = !0), ge(new Error(`Timeout of ${this._timeout}ms expired.`)));
                }, this._timeout);
              }),
            ])),
            !K.ok)
          ) {
            const _e = yield K.text().catch(() => "No Text"),
              ge = new Error(`NetworkError: ${W} ${_e}`);
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
            const te = `A networking error occurred during ${P} request to ${W}.`;
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
      (E.urlConfig.endpoint === v.Endpoint._initialize ||
        E.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = T);
      const U = Object.assign(
          {
            [v.NetworkParam.SdkKey]: E.sdkKey,
            [v.NetworkParam.SdkType]: b.SDKType._get(E.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: s.SessionID.get(E.sdkKey),
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
      const T = (0, S._getWindowSafe)(),
        U = E.body;
      if (
        !(
          !E.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof U != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !T?.btoa
        )
      )
        try {
          ((E.body = T.btoa(U).split("").reverse().join("")),
            (E.params = Object.assign(
              Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
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
            const A = q.reduce((W, K) => W + K.length, 0),
              j = new Uint8Array(A);
            let V = 0;
            for (const W of q) (j.set(W, V), (V += W.length));
            ((E.body = j),
              (E.params = Object.assign(
                Object.assign({}, (I = E.params) !== null && I !== void 0 ? I : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (U) {
            y.Log.warn(`Request compression failed for ${E.urlConfig.getUrl()}`, U);
          }
      });
    }
    _getInternalRequestArgs(E, I) {
      const T = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
        U = Object.assign(Object.assign({}, I), { method: E, fallbackUrl: T });
      return ("data" in I && k(U, I.data), U);
    }
  };
  Me.NetworkCore = f;
  const w = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    k = (O, E) => {
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
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const I = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      T = h.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
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
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: E });
  }
  function G(O, E, I, T, U) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(E, I, T, U));
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
        const m = 2,
          c = 1,
          y = (v, _) => {
            let h = 0;
            const b = Object.keys(v);
            for (let S = 0; S < b.length; S++) {
              const s = b[S],
                a = v[s];
              if (
                ((h += s.length),
                typeof a == "object" && a !== null
                  ? (h += (0, e._fastApproxSizeOf)(a, _) + m)
                  : (h += String(a).length + c),
                h >= _)
              )
                return h;
            }
            return h;
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
      function d(D) {
        return D instanceof l
          ? D
          : new l(function (p) {
              p(D);
            });
      }
      return new (l || (l = Promise))(function (D, p) {
        function u(k) {
          try {
            w(g.next(k));
          } catch (C) {
            p(C);
          }
        }
        function f(k) {
          try {
            w(g.throw(k));
          } catch (C) {
            p(C);
          }
        }
        function w(k) {
          k.done ? D(k.value) : d(k.value).then(u, f);
        }
        w((g = g.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.StatsigClientBase = void 0), je());
  const m = je(),
    c = ai(),
    y = ii(),
    v = z(),
    _ = li(),
    h = ae(),
    b = st(),
    S = at(),
    s = mt(),
    a = de(),
    n = 3e3;
  let o = class {
    constructor(t, l, g, d) {
      var D, p, u, f;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const w = this.$emt.bind(this);
      (d?.logLevel != null && (v.Log.level = d.logLevel),
        d?.disableStorage && a.Storage._setDisabled(!0),
        d?.initialSessionID && b.StatsigSession.overrideInitialSessionID(d.initialSessionID, t),
        d?.storageProvider && a.Storage._setProvider(d.storageProvider),
        d?.enableCookies && S.StableID._setCookiesEnabled(t, d.enableCookies),
        d?.disableStableID && S.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = d ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (D = d?.overrideAdapter) !== null && D !== void 0 ? D : null),
        (this._logger = new y.EventLogger(t, w, g, d)),
        (this._errorBoundary = new c.ErrorBoundary(t, d, w)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        g.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, d, g),
        (this.storageProvider = a.Storage),
        (f =
          (u = (p = this.overrideAdapter) === null || p === void 0 ? void 0 : p.loadFromStorage) ===
            null || u === void 0
            ? void 0
            : u.call(p)) === null ||
          f === void 0 ||
          f.catch((k) => this._errorBoundary.logError("OA::loadFromStorage", k)),
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
          S.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
      const g = (d) => {
        try {
          d(t);
        } catch (D) {
          if (d.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, D);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((d) => g(d)),
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
      return (g, d) => {
        if (this._options.disableEvaluationMemoization) return l(g, d);
        const D = (0, _.createMemoKey)(t, g, d);
        return D
          ? (D in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[D] = l(g, d))),
            this._memoCache[D])
          : l(g, d);
      };
    }
  };
  Pe.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, h._isServerEnv)()) return;
    const g = (0, m._getStatsigGlobal)(),
      d = (l = g.instances) !== null && l !== void 0 ? l : {},
      D = t;
    (d[r] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (d[r] = D),
      g.firstInstance || (g.firstInstance = D),
      (g.instances = d),
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
    m = dn();
  function c(s, a, n, o) {
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
    return Object.assign(Object.assign({}, c(s, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeFeatureGate = y;
  function v(s, a, n) {
    var o, i;
    const r = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(s, a, n, r)), {
      idType: (i = n?.id_type) !== null && i !== void 0 ? i : null,
      get: S(s, n?.value),
    });
  }
  H._makeDynamicConfig = v;
  function _(s, a, n) {
    var o;
    const i = v(s, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeExperiment = _;
  function h(s, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, c(s, a, n, void 0)), {
      get: S(s, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  H._makeLayer = h;
  function b(s, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, s), a), { get: S(s.name, n, o) });
  }
  H._mergeOverride = b;
  function S(s, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, m._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${s}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((H._makeTypedGet = S), H);
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
  const e = (m, c, y, v, _, h) => ({
    duration: y,
    source: c,
    success: m,
    error: v,
    sourceUrl: _,
    warnings: h,
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
var Wr;
function Wi() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        var m =
            (ke && ke.__createBinding) ||
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
          c =
            (ke && ke.__exportStar) ||
            function (s, a) {
              for (var n in s)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && m(a, s, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          je());
        const y = je(),
          v = on();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = ii();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const h = z();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return h.Log;
          },
        });
        const b = ct(),
          S = de();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return S.Storage;
          },
        }),
          c(je(), e),
          c(vt(), e),
          c(Ci(), e),
          c(Ti(), e),
          c(on(), e),
          c(Ui(), e),
          c(ai(), e),
          c(Ri(), e),
          c(Mi(), e),
          c(Be(), e),
          c(Li(), e),
          c(z(), e),
          c(li(), e),
          c(ht(), e),
          c(ji(), e),
          c(Ni(), e),
          c(Fi(), e),
          c(ae(), e),
          c(gn(), e),
          c(st(), e),
          c(qi(), e),
          c(at(), e),
          c(Ki(), e),
          c(ci(), e),
          c(Bi(), e),
          c(ni(), e),
          c(ct(), e),
          c(mt(), e),
          c(Gi(), e),
          c(Vi(), e),
          c(zi(), e),
          c(oi(), e),
          c(de(), e),
          c(si(), e),
          c(dn(), e),
          c(ri(), e),
          c(_n(), e),
          c(yt(), e),
          c(Ji(), e),
          c(ui(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: h.Log, SDK_VERSION: b.SDK_VERSION }));
      })(ke)),
    ke
  );
}
var no = Wi();
export { xi as a, Wi as b, lt as c, Hi as g, Qi as r, no as s };
