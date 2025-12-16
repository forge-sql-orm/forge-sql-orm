var ot =
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
    var c = function h() {
      var v = !1;
      try {
        v = this instanceof h;
      } catch {}
      return v ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    c.prototype = m.prototype;
  } else c = {};
  return (
    Object.defineProperty(c, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (h) {
      var v = Object.getOwnPropertyDescriptor(e, h);
      Object.defineProperty(
        c,
        h,
        v.get
          ? v
          : {
              enumerable: !0,
              get: function () {
                return e[h];
              },
            },
      );
    }),
    c
  );
}
var fe = {},
  ht = {},
  yt = {},
  fn;
function Q() {
  return (
    fn ||
      ((fn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          h = "  WARN ",
          v = " ERROR ";
        function d(p) {
          return (p.unshift("[Statsig]"), p);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...y) {
            S.level >= e.LogLevel.Info && console.info(c, ...d(y));
          }
          static debug(...y) {
            S.level >= e.LogLevel.Debug && console.debug(m, ...d(y));
          }
          static warn(...y) {
            S.level >= e.LogLevel.Warn && console.warn(h, ...d(y));
          }
          static error(...y) {
            S.level >= e.LogLevel.Error && console.error(v, ...d(y));
          }
        }
        ((e.Log = S), (S.level = e.LogLevel.Warn));
      })(yt)),
    yt
  );
}
var vn;
function ae() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        var m, c, h;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = Q(),
          d = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = d;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const p = (i) => {
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
        e._getInstance = p;
        const y = "__STATSIG__",
          u = typeof window < "u" ? window : {},
          a = typeof ot < "u" ? ot : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (h =
              (c = (m = u[y]) !== null && m !== void 0 ? m : a[y]) !== null && c !== void 0
                ? c
                : n[y]) !== null && h !== void 0
              ? h
              : { instance: e._getInstance };
        ((u[y] = o), (a[y] = o), (n[y] = o));
      })(ht)),
    ht
  );
}
var mt = {},
  hn;
function tn() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          c = "start",
          h = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (u) => m.get(u),
          _markInitOverallStart: (u) => {
            p(u, d({}, c, "overall"));
          },
          _markInitOverallEnd: (u, a, n) => {
            p(
              u,
              d(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: n,
                },
                h,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (u, a) => {
            p(u, d(a, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (u, a) => {
            p(u, d(a, h, "initialize", "network_request"));
          },
          _markInitProcessStart: (u) => {
            p(u, d({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (u, a) => {
            p(u, d(a, h, "initialize", "process"));
          },
          _clearMarkers: (u) => {
            m.delete(u);
          },
          _formatError(u) {
            if (u && typeof u == "object")
              return { code: y(u, "code"), name: y(u, "name"), message: y(u, "message") };
          },
          _getDiagnosticsData(u, a, n, o) {
            var i;
            return {
              success: u?.ok === !0,
              statusCode: u?.status,
              sdkRegion:
                (i = u?.headers) === null || i === void 0 ? void 0 : i.get("x-statsig-region"),
              isDelta: n.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: e.Diagnostics._formatError(o),
            };
          },
          _enqueueDiagnosticsEvent(u, a, n, o) {
            const i = e.Diagnostics._getMarkers(n);
            if (i == null || i.length <= 0) return -1;
            const r = i[i.length - 1].timestamp - i[0].timestamp;
            e.Diagnostics._clearMarkers(n);
            const t = S(u, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function d(u, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, u);
        }
        function S(u, a) {
          return { eventName: v, user: u, value: null, metadata: a, time: Date.now() };
        }
        function p(u, a) {
          var n;
          const o = (n = m.get(u)) !== null && n !== void 0 ? n : [];
          (o.push(a), m.set(u, o));
        }
        function y(u, a) {
          if (a in u) return u[a];
        }
      })(mt)),
    mt
  );
}
var ve = {},
  he = {},
  St = {},
  ye = {},
  yn;
function rn() {
  if (yn) return ye;
  ((yn = 1),
    Object.defineProperty(ye, "__esModule", { value: !0 }),
    (ye._isTypeMatch = ye._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  ye._typeOf = e;
  function m(c, h) {
    const v = (d) => (Array.isArray(d) ? "array" : typeof d);
    return v(c) === v(h);
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
        const m = rn(),
          c = (d) => {
            let S = 0;
            for (let p = 0; p < d.length; p++) {
              const y = d.charCodeAt(p);
              ((S = (S << 5) - S + y), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const h = (d, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(d, S)));
        e._DJB2Object = h;
        const v = (d, S) => {
          if (d == null) return null;
          const p = Object.keys(d).sort(),
            y = {};
          return (
            p.forEach((u) => {
              const a = d[u];
              if (S === 0 || (0, m._typeOf)(a) !== "object") {
                y[u] = a;
                return;
              }
              y[u] = (0, e._getSortedObject)(a, S != null ? S - 1 : S);
            }),
            y
          );
        };
        e._getSortedObject = v;
      })(St)),
    St
  );
}
var Sn;
function lt() {
  if (Sn) return he;
  ((Sn = 1),
    Object.defineProperty(he, "__esModule", { value: !0 }),
    (he._getStorageKey = he._getUserStorageKey = void 0));
  const e = Ke();
  function m(h, v, d) {
    var S;
    if (d) return d(h, v);
    const p = v && v.customIDs ? v.customIDs : {},
      y = [
        `uid:${(S = v?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(p)
          .sort((u, a) => u.localeCompare(a))
          .map((u) => `${u}-${p[u]}`)
          .join(",")}`,
        `k:${h}`,
      ];
    return (0, e._DJB2)(y.join("|"));
  }
  he._getUserStorageKey = m;
  function c(h, v, d) {
    return v ? m(h, v, d) : (0, e._DJB2)(`k:${h}`);
  }
  return ((he._getStorageKey = c), he);
}
var bt = {},
  bn;
function ut() {
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
      })(bt)),
    bt
  );
}
var Et = {},
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
          var y;
          const u = (0, e._getWindowSafe)();
          return (y = u?.document) !== null && y !== void 0 ? y : null;
        };
        e._getDocumentSafe = c;
        const h = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const y =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || y;
        };
        e._isServerEnv = h;
        const v = (y, u) => {
          const a = (0, e._getWindowSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(y, u);
        };
        e._addWindowEventListenerSafe = v;
        const d = (y, u) => {
          const a = (0, e._getDocumentSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(y, u);
        };
        e._addDocumentEventListenerSafe = d;
        const S = () => {
          var y;
          try {
            return (y = (0, e._getWindowSafe)()) === null || y === void 0
              ? void 0
              : y.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = S;
        const p = () => {
          const y = (0, e._getWindowSafe)();
          return y && "onpagehide" in y ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = p;
      })(Et)),
    Et
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
    h = (a, n, o, i, r) => (
      o.bootstrapMetadata && (i.bootstrapMetadata = o.bootstrapMetadata),
      {
        eventName: a,
        user: n,
        value: null,
        metadata: u(o, i),
        secondaryExposures: r,
        time: Date.now(),
      }
    ),
    v = ({ eventName: a }) => a === m || a === e || a === c;
  X._isExposureEvent = v;
  const d = (a, n, o) => {
    var i, r, t;
    const l = { gate: n.name, gateValue: String(n.value), ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (l.configVersion = n.__evaluation.version),
      h(
        m,
        a,
        n.details,
        l,
        S(
          (t = (r = n.__evaluation) === null || r === void 0 ? void 0 : r.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          o,
        ),
      )
    );
  };
  X._createGateExposure = d;
  function S(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  X._mapExposures = S;
  const p = (a, n, o) => {
    var i, r, t, l;
    const _ = { config: n.name, ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (_.configVersion = n.__evaluation.version),
      ((r = n.__evaluation) === null || r === void 0 ? void 0 : r.passed) != null &&
        (_.rulePassed = String(n.__evaluation.passed)),
      h(
        e,
        a,
        n.details,
        _,
        S(
          (l = (t = n.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && l !== void 0
            ? l
            : [],
          o,
        ),
      )
    );
  };
  X._createConfigExposure = p;
  const y = (a, n, o, i) => {
    var r, t, l, _, s, b;
    const f = n.__evaluation,
      g = ((r = f?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let E = "",
      D = (t = f?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    g &&
      ((E = (l = f.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (D = f.secondary_exposures));
    const I = (_ = n.__evaluation) === null || _ === void 0 ? void 0 : _.parameter_rule_ids,
      R = {
        config: n.name,
        parameterName: o,
        ruleID: (s = I?.[o]) !== null && s !== void 0 ? s : n.ruleID,
        allocatedExperiment: E,
        isExplicitParameter: String(g),
      };
    return (
      ((b = n.__evaluation) === null || b === void 0 ? void 0 : b.version) != null &&
        (R.configVersion = n.__evaluation.version),
      h(c, a, n.details, R, S(D, i))
    );
  };
  X._createLayerParameterExposure = y;
  const u = (a, n) => (
    (n.reason = a.reason),
    a.lcut && (n.lcut = String(a.lcut)),
    a.receivedAt && (n.receivedAt = String(a.receivedAt)),
    n
  );
  return X;
}
var me = {},
  wn;
function ct() {
  return (
    wn ||
      ((wn = 1),
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
var pt = {},
  Dn;
function ue() {
  return (
    Dn ||
      ((Dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = Q(),
          c = Ne(),
          h = {},
          v = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (n) => (h[n] ? h[n] : null),
            setItem: (n, o) => {
              h[n] = o;
            },
            removeItem: (n) => {
              delete h[n];
            },
            getAllKeys: () => Object.keys(h),
          };
        let d = null;
        try {
          const n = (0, c._getWindowSafe)();
          n &&
            n.localStorage &&
            typeof n.localStorage.getItem == "function" &&
            (d = {
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
        let S = d ?? v,
          p = S;
        function y(n) {
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
          isReady: () => p.isReady(),
          isReadyResolver: () => p.isReadyResolver(),
          getProviderName: () => p.getProviderName(),
          getItem: (n) => y(() => p.getItem(n)),
          setItem: (n, o) => y(() => p.setItem(n, o)),
          removeItem: (n) => p.removeItem(n),
          getAllKeys: () => p.getAllKeys(),
          _setProvider: (n) => {
            ((S = n), (p = n));
          },
          _setDisabled: (n) => {
            n ? (p = v) : (p = S);
          },
        };
        function u(n) {
          const o = e.Storage.getItem(n);
          return JSON.parse(o ?? "null");
        }
        e._getObjectFromStorage = u;
        function a(n, o) {
          e.Storage.setItem(n, JSON.stringify(o));
        }
        e._setObjectInStorage = a;
      })(pt)),
    pt
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
    m = ut(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  class h {
    constructor(d, S, p, y) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = d),
        (this.endpointDnsKey = c[d]),
        S && (this.customUrl = S),
        !S && p && (this.customUrl = p.endsWith("/") ? `${p}${d}` : `${p}/${d}`),
        y && (this.fallbackUrls = y));
      const u = m.NetworkDefault[d];
      this.defaultUrl = `${u}/${d}`;
    }
    getUrl() {
      var d;
      return (d = this.customUrl) !== null && d !== void 0 ? d : this.defaultUrl;
    }
    getChecksum() {
      var d;
      const S = ((d = this.fallbackUrls) !== null && d !== void 0 ? d : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  }
  return ((Ge.UrlConfiguration = h), Ge);
}
var wt = {},
  In;
function on() {
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
          h = "background",
          v = [];
        let d = c,
          S = !1;
        const p = () => d === c;
        e._isCurrentlyVisible = p;
        const y = () => S;
        e._isUnloading = y;
        const u = (n) => {
          v.unshift(n);
        };
        e._subscribeToVisiblityChanged = u;
        const a = (n) => {
          n !== d && ((d = n), v.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((S = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(h)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : h);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((S = !0), (0, e._notifyVisibilityChanged)(h));
          }));
      })(wt)),
    wt
  );
}
var On;
function Qr() {
  if (On) return ve;
  On = 1;
  var e =
    (ve && ve.__awaiter) ||
    function (f, g, E, D) {
      function I(R) {
        return R instanceof E
          ? R
          : new E(function (U) {
              U(R);
            });
      }
      return new (E || (E = Promise))(function (R, U) {
        function P(B) {
          try {
            N(D.next(B));
          } catch (O) {
            U(O);
          }
        }
        function V(B) {
          try {
            N(D.throw(B));
          } catch (O) {
            U(O);
          }
        }
        function N(B) {
          B.done ? R(B.value) : I(B.value).then(P, V);
        }
        N((D = D.apply(f, g || [])).next());
      });
    };
  (Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.EventLogger = void 0));
  const m = lt(),
    c = Ke(),
    h = Q(),
    v = ut(),
    d = Ne(),
    S = xr(),
    p = ct(),
    y = ue(),
    u = Hr(),
    a = on(),
    n = 100,
    o = 1e4,
    i = 1e3,
    r = 6e5,
    t = 500,
    l = 200,
    _ = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  class b {
    static _safeFlushAndForget(g) {
      var E;
      (E = _[g]) === null || E === void 0 || E.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(g) {
      var E;
      (E = _[g]) === null || E === void 0 || E._retryFailedLogs(s.GainedFocus);
    }
    constructor(g, E, D, I) {
      var R, U;
      ((this._sdkKey = g),
        (this._emitter = E),
        (this._network = D),
        (this._options = I),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (R = I?.loggingEnabled) !== null && R !== void 0
            ? R
            : I?.disableLogging === !0
              ? p.LoggingEnabledOption.disabled
              : p.LoggingEnabledOption.browserOnly),
        I?.loggingEnabled &&
          I.disableLogging !== void 0 &&
          h.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (U = I?.loggingBufferMaxSize) !== null && U !== void 0 ? U : n));
      const P = I?.networkConfig;
      this._logEventUrlConfig = new u.UrlConfiguration(
        v.Endpoint._rgstr,
        P?.logEventUrl,
        P?.api,
        P?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(g) {
      this._network.setLogEventCompressionMode(g);
    }
    setLoggingEnabled(g) {
      this._loggingEnabled = g;
    }
    enqueue(g) {
      this._shouldLogEvent(g) &&
        (this._normalizeAndAppendEvent(g),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && b._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(g) {
      var E;
      const D = (E = this._nonExposedChecks[g]) !== null && E !== void 0 ? E : 0;
      this._nonExposedChecks[g] = D + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var g;
      const E = (0, d._isServerEnv)();
      (E &&
        ((g = this._options) === null || g === void 0 ? void 0 : g.loggingEnabled) !== "always") ||
        ((_[this._sdkKey] = this),
        E ||
          (0, a._subscribeToVisiblityChanged)((D) => {
            D === "background"
              ? b._safeFlushAndForget(this._sdkKey)
              : D === "foreground" && b._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(s.Startup),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete _[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const g = this._queue;
        ((this._queue = []), yield this._sendEvents(g));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > l) &&
          setTimeout(() => b._safeFlushAndForget(this._sdkKey), l));
    }
    _shouldLogEvent(g) {
      var E;
      if (
        ((E = this._options) === null || E === void 0 ? void 0 : E.loggingEnabled) !== "always" &&
        (0, d._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(g)) return !0;
      const D = g.user ? g.user : { statsigEnvironment: void 0 },
        I = (0, m._getUserStorageKey)(this._sdkKey, D),
        R = g.metadata ? g.metadata : {},
        U = [
          g.eventName,
          I,
          R.gate,
          R.config,
          R.ruleID,
          R.allocatedExperiment,
          R.parameterName,
          String(R.isExplicitParameter),
          R.reason,
        ].join("|"),
        P = this._lastExposureTimeMap[U],
        V = Date.now();
      return P && V - P < r
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[U] = V),
          !0);
    }
    _sendEvents(g) {
      return e(this, void 0, void 0, function* () {
        var E, D;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(g), !1);
        try {
          const R =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((D = (E = this._options) === null || E === void 0 ? void 0 : E.networkConfig) ===
              null || D === void 0
              ? void 0
              : D.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: g }),
            (R ? this._sendEventsViaBeacon(g) : yield this._sendEventsViaPost(g)).success
              ? (this._emitter({ name: "logs_flushed", events: g }), !0)
              : (h.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(g), !1)
          );
        } catch {
          return (h.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(g) {
      return e(this, void 0, void 0, function* () {
        var E;
        const D = yield this._network.post(this._getRequestData(g)),
          I = (E = D?.code) !== null && E !== void 0 ? E : -1;
        return { success: I >= 200 && I < 300 };
      });
    }
    _sendEventsViaBeacon(g) {
      return { success: this._network.beacon(this._getRequestData(g)) };
    }
    _getRequestData(g) {
      return {
        sdkKey: this._sdkKey,
        data: { events: g },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [v.NetworkParam.EventCount]: String(g.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(g) {
      for (; g.length > t; ) g.shift();
      const E = this._getStorageKey();
      try {
        (0, y._setObjectInStorage)(E, g);
      } catch {
        h.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(g) {
      const E = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        y.Storage.isReady() || (yield y.Storage.isReadyResolver());
        const D = (0, y._getObjectFromStorage)(E);
        if (!D) return;
        (g === s.Startup && y.Storage.removeItem(E),
          (yield this._sendEvents(D)) && g === s.GainedFocus && y.Storage.removeItem(E));
      }).catch(() => {
        h.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(g) {
      g.user && ((g.user = Object.assign({}, g.user)), delete g.user.privateAttributes);
      const E = {},
        D = this._getCurrentPageUrl();
      D && (E.statsigMetadata = { currentPage: D });
      const I = Object.assign(Object.assign({}, g), E);
      (h.Log.debug("Enqueued Event:", I), this._queue.push(I));
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
      var g;
      if (
        ((g = this._options) === null || g === void 0
          ? void 0
          : g.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, d._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var g, E;
      const D =
          (E = (g = this._options) === null || g === void 0 ? void 0 : g.loggingIntervalMs) !==
            null && E !== void 0
            ? E
            : o,
        I = setInterval(() => {
          const R = _[this._sdkKey];
          !R || R._flushIntervalId !== I ? clearInterval(I) : b._safeFlushAndForget(this._sdkKey);
        }, D);
      this._flushIntervalId = I;
    }
  }
  return ((ve.EventLogger = b), ve);
}
var Dt = {},
  Cn;
function st() {
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
      })(Dt)),
    Dt
  );
}
var kt = {},
  Tn;
function di() {
  return (Tn || ((Tn = 1), Object.defineProperty(kt, "__esModule", { value: !0 })), kt);
}
var ne = {},
  Ve = {},
  ze = {},
  Rn;
function sn() {
  if (Rn) return ze;
  ((Rn = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let d = Math.random() * 16;
        return (
          m > 0
            ? ((d = ((m + d) % 16) | 0), (m = Math.floor(m / 16)))
            : ((d = ((c + d) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? d : (d & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((ze.getUUID = e), ze);
}
var Mn;
function dt() {
  if (Mn) return Ve;
  ((Mn = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.StableID = void 0));
  const e = lt(),
    m = Q(),
    c = Ne(),
    h = ue(),
    v = sn(),
    d = {},
    S = {},
    p = {};
  Ve.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (r) => {
      if (p[r]) return null;
      if (d[r] != null) return d[r];
      let t = null;
      return (
        (t = n(r)),
        t != null
          ? ((d[r] = t), u(t, r), t)
          : ((t = a(r)), t == null && (t = (0, v.getUUID)()), u(t, r), o(t, r), (d[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((d[t] = r), u(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      S[r] = t;
    },
    _setDisabled: (r, t) => {
      p[r] = t;
    },
  };
  function y(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function u(r, t) {
    const l = y(t);
    try {
      (0, h._setObjectInStorage)(l, r);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(r) {
    const t = y(r);
    return (0, h._getObjectFromStorage)(t);
  }
  function n(r) {
    if (!S[r] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [_, s] = l.trim().split("=");
      if (_ === i(r)) return decodeURIComponent(s);
    }
    return null;
  }
  function o(r, t) {
    if (!S[t] || !document) return;
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
  Un;
function Xr() {
  if (Un) return Se;
  ((Un = 1),
    Object.defineProperty(Se, "__esModule", { value: !0 }),
    (Se._getFullUserHash = Se._normalizeUser = void 0));
  const e = Ke(),
    m = Q();
  function c(v, d, S) {
    try {
      const p = JSON.parse(JSON.stringify(v));
      return (
        d != null && d.environment != null
          ? (p.statsigEnvironment = d.environment)
          : S != null && (p.statsigEnvironment = { tier: S }),
        p
      );
    } catch {
      return (m.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  Se._normalizeUser = c;
  function h(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  return ((Se._getFullUserHash = h), Se);
}
var Je = {},
  Ln;
function Yr() {
  if (Ln) return Je;
  ((Ln = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je._typedJsonParse = void 0));
  const e = Q();
  function m(c, h, v) {
    try {
      const d = JSON.parse(c);
      if (d && typeof d == "object" && h in d) return d;
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
          : new i(function (_) {
              _(l);
            });
      }
      return new (i || (i = Promise))(function (l, _) {
        function s(g) {
          try {
            f(r.next(g));
          } catch (E) {
            _(E);
          }
        }
        function b(g) {
          try {
            f(r.throw(g));
          } catch (E) {
            _(E);
          }
        }
        function f(g) {
          g.done ? l(g.value) : t(g.value).then(s, b);
        }
        f((r = r.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._makeDataAdapterResult = ne.DataAdapterCore = void 0));
  const m = Q(),
    c = dt(),
    h = Xr(),
    v = ue(),
    d = Yr(),
    S = 10;
  class p {
    constructor(o, i) {
      ((this._adapterName = o),
        (this._cacheSuffix = i),
        (this._options = null),
        (this._sdkKey = null),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${i}`),
        (this._inMemoryCache = new u()));
    }
    attach(o, i, r) {
      ((this._sdkKey = o), (this._options = i));
    }
    getDataSync(o) {
      const i = o && (0, h._normalizeUser)(o, this._options),
        r = this._getCacheKey(i),
        t = this._inMemoryCache.get(r, i);
      if (t && this._getIsCacheValueValid(t)) return t;
      const l = this._loadFromCache(r);
      return l && this._getIsCacheValueValid(l)
        ? (this._inMemoryCache.add(r, l), this._inMemoryCache.get(r, i))
        : null;
    }
    setData(o, i) {
      const r = i && (0, h._normalizeUser)(i, this._options),
        t = this._getCacheKey(r);
      this._inMemoryCache.add(t, y("Bootstrap", o, null, r));
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
              new Promise((_) => setTimeout(_, r.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(l)
        );
      });
    }
    _prefetchDataImpl(o, i) {
      return e(this, void 0, void 0, function* () {
        const r = o && (0, h._normalizeUser)(o, this._options),
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
          _ = o != null && this._isCachedResultValidFor204(o, i),
          s = yield this._fetchFromNetwork(l, i, r, _);
        if (!s) return (m.Log.debug("No response returned for latest value"), null);
        const b = (0, d._typedJsonParse)(s, "has_updates", "Response"),
          f = this._getSdkKey(),
          g = c.StableID.get(f);
        let E = null;
        if (b?.has_updates === !0) E = y("Network", s, g, i);
        else if (l && b?.has_updates === !1) E = y("NetworkNotModified", l, g, i);
        else return null;
        const D = this._getCacheKey(i);
        return (this._inMemoryCache.add(D, E), this._writeToCache(D, E), E);
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
      const t = (0, d._typedJsonParse)(r, "source", "Cached Result");
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
      const t = a(r, S);
      (t && (delete r[t], v.Storage.removeItem(t)),
        (0, v._setObjectInStorage)(this._lastModifiedStoreKey, r));
    }
  }
  ne.DataAdapterCore = p;
  function y(n, o, i, r) {
    return {
      source: n,
      data: o,
      receivedAt: Date.now(),
      stableID: i,
      fullUserHash: (0, h._getFullUserHash)(r),
    };
  }
  ne._makeDataAdapterResult = y;
  class u {
    constructor() {
      this._data = {};
    }
    get(o, i) {
      var r;
      const t = this._data[o],
        l = t?.stableID,
        _ = (r = i?.customIDs) === null || r === void 0 ? void 0 : r.stableID;
      return _ && l && _ !== l
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : t;
    }
    add(o, i) {
      const r = a(this._data, S - 1);
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
            _ = n[t];
          return typeof l == "object" && typeof _ == "object"
            ? _.receivedAt < l.receivedAt
              ? t
              : r
            : _ < l
              ? t
              : r;
        });
  }
  return ne;
}
var It = {},
  An;
function gi() {
  return (An || ((An = 1), Object.defineProperty(It, "__esModule", { value: !0 })), It);
}
var We = {},
  xe = {},
  jn;
function an() {
  if (jn) return xe;
  ((jn = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.SDKType = void 0));
  const e = {};
  let m;
  return (
    (xe.SDKType = {
      _get: (c) => {
        var h;
        return ((h = e[c]) !== null && h !== void 0 ? h : "js-mono") + (m ?? "");
      },
      _setClientType(c, h) {
        e[c] = h;
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
                : new i(function (_) {
                    _(l);
                  });
            }
            return new (i || (i = Promise))(function (l, _) {
              function s(g) {
                try {
                  f(r.next(g));
                } catch (E) {
                  _(E);
                }
              }
              function b(g) {
                try {
                  f(r.throw(g));
                } catch (E) {
                  _(E);
                }
              }
              function f(g) {
                g.done ? l(g.value) : t(g.value).then(s, b);
              }
              f((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = Q(),
          h = an(),
          v = st();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const d = "[Statsig] UnknownError";
        class S {
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
              u(i).forEach((r) => {
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
            this._lastSeenError || (this._lastSeenError = p(o));
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
                  var t, l, _, s, b, f, g;
                  const E = i || Error(d),
                    D = E instanceof Error,
                    I = D ? E.name : "No Name",
                    R = p(E);
                  if (((this._lastSeenError = R), this._seen.has(I))) return;
                  if (
                    (this._seen.add(I),
                    !(
                      (l =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || l === void 0
                    ) && l.preventAllNetworkTraffic)
                  ) {
                    (_ = this._emitter) === null ||
                      _ === void 0 ||
                      _.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const U = h.SDKType._get(this._sdkKey),
                    P = v.StatsigMetadataProvider.get(),
                    V = D ? E.stack : y(E),
                    N = Object.assign(
                      { tag: o, exception: I, info: V, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, P), { sdkType: U }),
                    );
                  (yield (
                    (f =
                      (b =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || b === void 0
                        ? void 0
                        : b.networkOverrideFunc) !== null && f !== void 0
                      ? f
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(U),
                      "STATSIG-SDK-VERSION": String(P.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(N),
                  }),
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        }
        e.ErrorBoundary = S;
        function p(n) {
          return n instanceof Error
            ? n
            : typeof n == "string"
              ? new Error(n)
              : new Error("An unknown error occurred.");
        }
        function y(n) {
          try {
            return JSON.stringify(n);
          } catch {
            return d;
          }
        }
        function u(n) {
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
var Ot = {},
  Fn;
function fi() {
  return (Fn || ((Fn = 1), Object.defineProperty(Ot, "__esModule", { value: !0 })), Ot);
}
var Ct = {},
  qn;
function vi() {
  return (qn || ((qn = 1), Object.defineProperty(Ct, "__esModule", { value: !0 })), Ct);
}
var Tt = {},
  Kn;
function hi() {
  return (Kn || ((Kn = 1), Object.defineProperty(Tt, "__esModule", { value: !0 })), Tt);
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
  function c(h, v, d) {
    let S = `${h}|${v}`;
    if (!d) return S;
    for (const p of Object.keys(d)) {
      if (m.has(p)) return;
      e.has(p) ? (S += `|${p}=true`) : (S += `|${p}=${d[p]}`);
    }
    return S;
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
    function (p, y, u, a) {
      function n(o) {
        return o instanceof u
          ? o
          : new u(function (i) {
              i(o);
            });
      }
      return new (u || (u = Promise))(function (o, i) {
        function r(_) {
          try {
            l(a.next(_));
          } catch (s) {
            i(s);
          }
        }
        function t(_) {
          try {
            l(a.throw(_));
          } catch (s) {
            i(s);
          }
        }
        function l(_) {
          _.done ? o(_.value) : n(_.value).then(r, t);
        }
        l((a = a.apply(p, y || [])).next());
      });
    };
  (Object.defineProperty(pe, "__esModule", { value: !0 }), (pe._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    h = ["i", "e", "d"],
    v = 200;
  function d(p) {
    return e(this, void 0, void 0, function* () {
      const y = yield p(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!y.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const u = yield y.arrayBuffer(),
        a = new Uint8Array(u);
      return S(a);
    });
  }
  pe._fetchTxtRecords = d;
  function S(p) {
    const y = p.findIndex(
      (a, n) =>
        n < v && String.fromCharCode(a) === "=" && h.includes(String.fromCharCode(p[n - 1])),
    );
    if (y === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let u = "";
    for (let a = y - 1; a < p.length; a++) u += String.fromCharCode(p[a]);
    return u.split(",");
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
      function _(s) {
        return s instanceof t
          ? s
          : new t(function (b) {
              b(s);
            });
      }
      return new (t || (t = Promise))(function (s, b) {
        function f(D) {
          try {
            E(l.next(D));
          } catch (I) {
            b(I);
          }
        }
        function g(D) {
          try {
            E(l.throw(D));
          } catch (I) {
            b(I);
          }
        }
        function E(D) {
          D.done ? s(D.value) : _(D.value).then(f, g);
        }
        E((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._isDomainFailure = re.NetworkFallbackResolver = void 0));
  const m = yi(),
    c = Ke(),
    h = Q(),
    v = ue(),
    d = 10080 * 60 * 1e3,
    S = 14400 * 1e3;
  class p {
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
      const _ = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      _ &&
        ((_.expiryTime = Date.now() + d),
        a(r, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: _ })));
    }
    getActiveFallbackUrl(r, t) {
      var l, _;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = s));
      const b = s[t.endpoint];
      return !b ||
        Date.now() > ((_ = b.expiryTime) !== null && _ !== void 0 ? _ : 0) ||
        t.getChecksum() !== b.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), a(r, this._fallbackInfo), null)
        : b.url
          ? b.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, _) {
      return e(this, void 0, void 0, function* () {
        var s, b;
        try {
          if (!y(l, _)) return !1;
          const g =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            E = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              g,
            );
          return E ? (this._updateFallbackInfoWithNewUrl(r, t, E), !0) : !1;
        } catch (f) {
          return (
            (b = this._errorBoundary) === null ||
              b === void 0 ||
              b.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(r, t, l) {
      var _, s, b;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + d,
          previous: [],
        },
        g = t.endpoint,
        E = (_ = this._fallbackInfo) === null || _ === void 0 ? void 0 : _[g];
      (E && f.previous.push(...E.previous), f.previous.length > 10 && (f.previous = []));
      const D =
        (b = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[g]) === null ||
        b === void 0
          ? void 0
          : b.url;
      (D != null && f.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [g]: f })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + S;
        const _ = [],
          s = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          b = o(r.defaultUrl);
        for (const f of s) {
          if (!f.startsWith(r.endpointDnsKey + "=")) continue;
          const g = f.split("=");
          if (g.length > 1) {
            let E = g[1];
            (E.endsWith("/") && (E = E.slice(0, -1)), _.push(`https://${E}${b}`));
          }
        }
        return _;
      });
    }
    _pickNewFallbackUrl(r, t) {
      var l;
      if (t == null) return null;
      const _ = new Set((l = r?.previous) !== null && l !== void 0 ? l : []),
        s = r?.url;
      let b = null;
      for (const f of t) {
        const g = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!_.has(f) && g !== s) {
          b = g;
          break;
        }
      }
      return b;
    }
  }
  re.NetworkFallbackResolver = p;
  function y(i, r) {
    var t;
    const l = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      r ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  re._isDomainFailure = y;
  function u(i) {
    return `statsig.network_fallback.${(0, c._DJB2)(i)}`;
  }
  function a(i, r) {
    const t = u(i);
    if (!r || Object.keys(r).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(r));
  }
  function n(i) {
    const r = u(i),
      t = v.Storage.getItem(r);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (h.Log.error("Failed to parse FallbackInfo"), null);
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
        var h, v;
        return (v = (h = e[m]) === null || h === void 0 ? void 0 : h[c]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    He
  );
}
var Rt = {},
  Jn;
function ln() {
  return (
    Jn ||
      ((Jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = ae(),
          c = lt(),
          h = Q(),
          v = ue(),
          d = sn(),
          S = 1800 * 1e3,
          p = 14400 * 1e3,
          y = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              y[s] == null && (y[s] = u(s));
              const b = y[s];
              return n(b);
            },
            overrideInitialSessionID: (s, b) => {
              y[b] = a(s, b);
            },
          }));
        function u(s) {
          let b = _(s);
          const f = Date.now();
          return (
            b || (b = { sessionID: (0, d.getUUID)(), startTime: f, lastUpdate: f }),
            { data: b, sdkKey: s }
          );
        }
        function a(s, b) {
          const f = Date.now();
          return { data: { sessionID: s, startTime: f, lastUpdate: f }, sdkKey: b };
        }
        function n(s) {
          const b = Date.now(),
            f = s.data,
            g = s.sdkKey;
          if (i(f) || r(f)) {
            ((f.sessionID = (0, d.getUUID)()), (f.startTime = b));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(g);
            D && D.$emt({ name: "session_expired" });
          }
          ((f.lastUpdate = b),
            l(f, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const E = b - f.startTime;
          return ((s.idleTimeoutID = o(g, S)), (s.ageTimeoutID = o(g, p - E)), s);
        }
        function o(s, b) {
          return setTimeout(() => {
            var f;
            const g =
              (f = (0, m._getStatsigGlobal)()) === null || f === void 0 ? void 0 : f.instance(s);
            g && g.$emt({ name: "session_expired" });
          }, b);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > S;
        }
        function r({ startTime: s }) {
          return Date.now() - s > p;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function l(s, b) {
          const f = t(b);
          try {
            (0, v._setObjectInStorage)(f, s);
          } catch {
            h.Log.warn("Failed to save SessionID");
          }
        }
        function _(s) {
          const b = t(s);
          return (0, v._getObjectFromStorage)(b);
        }
      })(Rt)),
    Rt
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
    function (O, w, k, C) {
      function T(M) {
        return M instanceof k
          ? M
          : new k(function (L) {
              L(M);
            });
      }
      return new (k || (k = Promise))(function (M, L) {
        function $(A) {
          try {
            F(C.next(A));
          } catch (j) {
            L(j);
          }
        }
        function q(A) {
          try {
            F(C.throw(A));
          } catch (j) {
            L(j);
          }
        }
        function F(A) {
          A.done ? M(A.value) : T(A.value).then($, q);
        }
        F((C = C.apply(O, w || [])).next());
      });
    };
  (Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.NetworkCore = void 0), ae());
  const m = ae(),
    c = tn(),
    h = Q(),
    v = ut(),
    d = mi(),
    S = ei(),
    p = an(),
    y = Ne(),
    u = ln(),
    a = dt(),
    n = ti(),
    o = st(),
    i = ct(),
    r = on(),
    t = 1e4,
    l = 500,
    _ = 3e4,
    s = 1e3,
    b = 50,
    f = b / s,
    g = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class E {
    constructor(w, k) {
      ((this._emitter = k),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        w && (this._options = w),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new d.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(w)));
    }
    setLogEventCompressionMode(w) {
      this._options.logEventCompressionMode = w;
    }
    setErrorBoundary(w) {
      ((this._errorBoundary = w),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(w));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const w = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), w);
    }
    beacon(w) {
      if (!D(w)) return !1;
      const k = this._getInternalRequestArgs("POST", w),
        C = this._getPopulatedURL(k),
        T = navigator;
      return T.sendBeacon.bind(T)(C, k.body);
    }
    post(w) {
      return e(this, void 0, void 0, function* () {
        const k = this._getInternalRequestArgs("POST", w);
        return (this._tryEncodeBody(k), yield this._tryToCompressBody(k), this._sendRequest(k));
      });
    }
    get(w) {
      const k = this._getInternalRequestArgs("GET", w);
      return this._sendRequest(k);
    }
    _sendRequest(w) {
      return e(this, void 0, void 0, function* () {
        var k, C, T, M;
        if (!D(w) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: L, body: $, retries: q, attempt: F } = w,
          A = w.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            h.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1,
          G = typeof AbortController < "u" ? new AbortController() : null,
          W = setTimeout(() => {
            G?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          K = this._getPopulatedURL(w);
        let Z = null;
        const se = (0, r._isUnloading)();
        try {
          const z = {
            method: L,
            body: $,
            headers: Object.assign({}, w.headers),
            signal: G?.signal,
            priority: w.priority,
            keepalive: se,
          };
          V(w, j);
          const ee = this._leakyBucket[A];
          if (
            (ee && ((ee.lastRequestTime = Date.now()), (this._leakyBucket[A] = ee)),
            (Z = yield (
              (k = this._netConfig.networkOverrideFunc) !== null && k !== void 0 ? k : fetch
            )(K, z)),
            clearTimeout(W),
            !Z.ok)
          ) {
            const _e = yield Z.text().catch(() => "No Text"),
              ge = new Error(`NetworkError: ${K} ${_e}`);
            throw ((ge.name = "NetworkError"), ge);
          }
          const te = yield Z.text();
          return (
            N(w, Z, j, te),
            this._fallbackResolver.tryBumpExpiryTime(w.sdkKey, w.urlConfig),
            { body: te, code: Z.status }
          );
        } catch (z) {
          const ee = U(G, z),
            Fe = P(G);
          if (
            (N(w, Z, j, "", z),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              w.sdkKey,
              w.urlConfig,
              ee,
              Fe,
            )) &&
              (w.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(w.sdkKey, w.urlConfig)),
            !q || j > q || !g.has((C = Z?.status) !== null && C !== void 0 ? C : 500))
          ) {
            (T = this._emitter) === null ||
              T === void 0 ||
              T.call(this, {
                name: "error",
                error: z,
                tag: n.ErrorTag.NetworkError,
                requestArgs: w,
              });
            const _e = `A networking error occurred during ${L} request to ${K}.`;
            return (
              h.Log.error(_e, ee, z),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(_e),
              null
            );
          }
          return (
            yield B(j),
            this._sendRequest(Object.assign(Object.assign({}, w), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(w) {
      let k = w?.logEventCompressionMode;
      return (
        !k && w?.disableCompression === !0 && (k = i.LogEventCompressionMode.Disabled),
        k || (k = i.LogEventCompressionMode.Enabled),
        k
      );
    }
    _isRateLimited(w) {
      var k;
      const C = Date.now(),
        T =
          (k = this._leakyBucket[w]) !== null && k !== void 0
            ? k
            : { count: 0, lastRequestTime: C },
        M = C - T.lastRequestTime,
        L = Math.floor(M * f);
      return (
        (T.count = Math.max(0, T.count - L)),
        T.count >= b
          ? !0
          : ((T.count += 1), (T.lastRequestTime = C), (this._leakyBucket[w] = T), !1)
      );
    }
    _getPopulatedURL(w) {
      var k;
      const C = (k = w.fallbackUrl) !== null && k !== void 0 ? k : w.urlConfig.getUrl();
      (w.urlConfig.endpoint === v.Endpoint._initialize ||
        w.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = C);
      const T = Object.assign(
          {
            [v.NetworkParam.SdkKey]: w.sdkKey,
            [v.NetworkParam.SdkType]: p.SDKType._get(w.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: u.SessionID.get(w.sdkKey),
          },
          w.params,
        ),
        M = Object.keys(T)
          .map((L) => `${encodeURIComponent(L)}=${encodeURIComponent(T[L])}`)
          .join("&");
      return `${C}${M ? `?${M}` : ""}`;
    }
    _tryEncodeBody(w) {
      var k;
      const C = (0, y._getWindowSafe)(),
        T = w.body;
      if (
        !(
          !w.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof T != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !C?.btoa
        )
      )
        try {
          ((w.body = C.btoa(T).split("").reverse().join("")),
            (w.params = Object.assign(
              Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          h.Log.warn(`Request encoding failed for ${w.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(w) {
      return e(this, void 0, void 0, function* () {
        var k;
        const C = w.body;
        if (!(typeof C != "string" || !R(w, this._options)))
          try {
            const T = new TextEncoder().encode(C),
              M = new CompressionStream("gzip"),
              L = M.writable.getWriter();
            (L.write(T).catch(h.Log.error), L.close().catch(h.Log.error));
            const $ = M.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const A = q.reduce((W, K) => W + K.length, 0),
              j = new Uint8Array(A);
            let G = 0;
            for (const W of q) (j.set(W, G), (G += W.length));
            ((w.body = j),
              (w.params = Object.assign(
                Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (T) {
            h.Log.warn(`Request compression failed for ${w.urlConfig.getUrl()}`, T);
          }
      });
    }
    _getInternalRequestArgs(w, k) {
      const C = this._fallbackResolver.getActiveFallbackUrl(k.sdkKey, k.urlConfig),
        T = Object.assign(Object.assign({}, k), { method: w, fallbackUrl: C });
      return ("data" in k && I(T, k.data), T);
    }
  }
  Ee.NetworkCore = E;
  const D = (O) => (O.sdkKey ? !0 : (h.Log.warn("Unable to make request without an SDK key"), !1)),
    I = (O, w) => {
      const { sdkKey: k, fallbackUrl: C } = O,
        T = a.StableID.get(k),
        M = u.SessionID.get(k),
        L = p.SDKType._get(k);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, w), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: T,
            sessionID: M,
            sdkType: L,
            fallbackUrl: C,
          }),
        }),
      );
    };
  function R(O, w) {
    if (
      !O.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const k = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      C = S.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (w.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(k && !C);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function U(O, w) {
    return O?.signal.aborted && typeof O.signal.reason == "string"
      ? O.signal.reason
      : typeof w == "string"
        ? w
        : w instanceof Error
          ? `${w.name}: ${w.message}`
          : "Unknown Error";
  }
  function P(O) {
    return (
      (O?.signal.aborted &&
        typeof O.signal.reason == "string" &&
        O.signal.reason.includes("Timeout")) ||
      !1
    );
  }
  function V(O, w) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: w });
  }
  function N(O, w, k, C, T) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(w, k, C, T));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((w) => setTimeout(w, Math.min(l * (O * O), _)));
    });
  }
  return Ee;
}
var Mt = {},
  Hn;
function bi() {
  return (Hn || ((Hn = 1), Object.defineProperty(Mt, "__esModule", { value: !0 })), Mt);
}
var Ut = {},
  Qn;
function Ei() {
  return (Qn || ((Qn = 1), Object.defineProperty(Ut, "__esModule", { value: !0 })), Ut);
}
var we = {},
  Xn;
function pi() {
  if (Xn) return we;
  Xn = 1;
  var e =
    (we && we.__awaiter) ||
    function (r, t, l, _) {
      function s(b) {
        return b instanceof l
          ? b
          : new l(function (f) {
              f(b);
            });
      }
      return new (l || (l = Promise))(function (b, f) {
        function g(I) {
          try {
            D(_.next(I));
          } catch (R) {
            f(R);
          }
        }
        function E(I) {
          try {
            D(_.throw(I));
          } catch (R) {
            f(R);
          }
        }
        function D(I) {
          I.done ? b(I.value) : s(I.value).then(g, E);
        }
        D((_ = _.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(we, "__esModule", { value: !0 }), (we.StatsigClientBase = void 0), ae());
  const m = ae(),
    c = Zr(),
    h = Qr(),
    v = Q(),
    d = $r(),
    S = Ne(),
    p = ln(),
    y = dt(),
    u = ct(),
    a = ue(),
    n = 3e3;
  class o {
    constructor(t, l, _, s) {
      var b, f, g, E;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && a.Storage._setDisabled(!0),
        s?.initialSessionID && p.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && a.Storage._setProvider(s.storageProvider),
        s?.enableCookies && y.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && y.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (b = s?.overrideAdapter) !== null && b !== void 0 ? b : null),
        (this._logger = new h.EventLogger(t, D, _, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        _.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, s, _),
        (this.storageProvider = a.Storage),
        (E =
          (g = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || g === void 0
            ? void 0
            : g.call(f)) === null ||
          E === void 0 ||
          E.catch((I) => this._errorBoundary.logError("OA::loadFromStorage", I)),
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
          y.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
        t.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode)
          : t.disableCompression &&
            this._logger.setLogEventCompressionMode(u.LogEventCompressionMode.Disabled));
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
        const _ = this._listeners[t].indexOf(l);
        _ !== -1 && this._listeners[t].splice(_, 1);
      }
    }
    $on(t, l) {
      ((l.__isInternal = !0), this.on(t, l));
    }
    $emt(t) {
      var l;
      const _ = (s) => {
        try {
          s(t);
        } catch (b) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, b);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => _(s)),
        (l = this._listeners["*"]) === null || l === void 0 || l.forEach(_));
    }
    _setStatus(t, l) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: l }));
    }
    _enqueueExposure(t, l, _) {
      if (_?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(l);
    }
    _memoize(t, l) {
      return (_, s) => {
        if (this._options.disableEvaluationMemoization) return l(_, s);
        const b = (0, d.createMemoKey)(t, _, s);
        return b
          ? (b in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[b] = l(_, s))),
            this._memoCache[b])
          : l(_, s);
      };
    }
  }
  we.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, S._isServerEnv)()) return;
    const _ = (0, m._getStatsigGlobal)(),
      s = (l = _.instances) !== null && l !== void 0 ? l : {},
      b = t;
    (s[r] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[r] = b),
      _.firstInstance || (_.firstInstance = b),
      (_.instances = s),
      (__STATSIG__ = _));
  }
  return we;
}
var Xe = {},
  Yn;
function wi() {
  return (
    Yn ||
      ((Yn = 1),
      Object.defineProperty(Xe, "__esModule", { value: !0 }),
      (Xe.DataAdapterCachePrefix = void 0),
      (Xe.DataAdapterCachePrefix = "statsig.cached")),
    Xe
  );
}
var Lt = {},
  Zn;
function Di() {
  return (Zn || ((Zn = 1), Object.defineProperty(Lt, "__esModule", { value: !0 })), Lt);
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
    m = rn();
  function c(u, a, n, o) {
    var i;
    return {
      name: u,
      details: a,
      ruleID: (i = n?.rule_id) !== null && i !== void 0 ? i : "",
      __evaluation: n,
      value: o,
    };
  }
  function h(u, a, n) {
    var o;
    return Object.assign(Object.assign({}, c(u, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  x._makeFeatureGate = h;
  function v(u, a, n) {
    var o;
    const i = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(u, a, n, i)), { get: y(u, n?.value) });
  }
  x._makeDynamicConfig = v;
  function d(u, a, n) {
    var o;
    const i = v(u, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  x._makeExperiment = d;
  function S(u, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, c(u, a, n, void 0)), {
      get: y(u, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  x._makeLayer = S;
  function p(u, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, u), a), { get: y(u.name, n, o) });
  }
  x._mergeOverride = p;
  function y(u, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, m._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${u}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((x._makeTypedGet = y), x);
}
var Pt = {},
  er;
function Ii() {
  return (er || ((er = 1), Object.defineProperty(Pt, "__esModule", { value: !0 })), Pt);
}
var De = {},
  tr;
function Oi() {
  if (tr) return De;
  ((tr = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.UPDATE_DETAIL_ERROR_MESSAGES = De.createUpdateDetails = void 0));
  const e = (m, c, h, v, d, S) => ({
    duration: h,
    source: c,
    success: m,
    error: v,
    sourceUrl: d,
    warnings: S,
  });
  return (
    (De.createUpdateDetails = e),
    (De.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    De
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
              ? function (u, a, n, o) {
                  o === void 0 && (o = n);
                  var i = Object.getOwnPropertyDescriptor(a, n);
                  ((!i || ("get" in i ? !a.__esModule : i.writable || i.configurable)) &&
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(u, o, i));
                }
              : function (u, a, n, o) {
                  (o === void 0 && (o = n), (u[o] = a[n]));
                }),
          c =
            (fe && fe.__exportStar) ||
            function (u, a) {
              for (var n in u)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && m(a, u, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          ae());
        const h = ae(),
          v = tn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const d = Qr();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return d.EventLogger;
          },
        });
        const S = Q();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return S.Log;
          },
        });
        const p = st(),
          y = ue();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return y.Storage;
          },
        }),
          c(ae(), e),
          c(lt(), e),
          c(di(), e),
          c(_i(), e),
          c(tn(), e),
          c(gi(), e),
          c(Zr(), e),
          c(fi(), e),
          c(vi(), e),
          c(Ke(), e),
          c(hi(), e),
          c(Q(), e),
          c($r(), e),
          c(ut(), e),
          c(Si(), e),
          c(bi(), e),
          c(Ei(), e),
          c(Ne(), e),
          c(an(), e),
          c(ln(), e),
          c(dt(), e),
          c(pi(), e),
          c(ti(), e),
          c(wi(), e),
          c(xr(), e),
          c(st(), e),
          c(ct(), e),
          c(Di(), e),
          c(ki(), e),
          c(Ii(), e),
          c(Xr(), e),
          c(ue(), e),
          c(Yr(), e),
          c(rn(), e),
          c(Hr(), e),
          c(sn(), e),
          c(on(), e),
          c(Oi(), e),
          c(ei(), e),
          Object.assign((0, h._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: p.SDK_VERSION }));
      })(fe)),
    fe
  );
}
var ke = {},
  At = {},
  jt = {},
  rr;
function J() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const m = " DEBUG ",
          c = "  INFO ",
          h = "  WARN ",
          v = " ERROR ";
        function d(p) {
          return (p.unshift("[Statsig]"), p);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class S {
          static info(...y) {
            S.level >= e.LogLevel.Info && console.info(c, ...d(y));
          }
          static debug(...y) {
            S.level >= e.LogLevel.Debug && console.debug(m, ...d(y));
          }
          static warn(...y) {
            S.level >= e.LogLevel.Warn && console.warn(h, ...d(y));
          }
          static error(...y) {
            S.level >= e.LogLevel.Error && console.error(v, ...d(y));
          }
        }
        ((e.Log = S), (S.level = e.LogLevel.Warn));
      })(jt)),
    jt
  );
}
var ir;
function le() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        var m, c, h;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = J(),
          d = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = d;
        const S = (i) => (0, e._getStatsigGlobal)()[i];
        e._getStatsigGlobalFlag = S;
        const p = (i) => {
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
        e._getInstance = p;
        const y = "__STATSIG__",
          u = typeof window < "u" ? window : {},
          a = typeof ot < "u" ? ot : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (h =
              (c = (m = u[y]) !== null && m !== void 0 ? m : a[y]) !== null && c !== void 0
                ? c
                : n[y]) !== null && h !== void 0
              ? h
              : { instance: e._getInstance };
        ((u[y] = o), (a[y] = o), (n[y] = o));
      })(At)),
    At
  );
}
var Nt = {},
  or;
function nn() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const m = new Map(),
          c = "start",
          h = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (u) => m.get(u),
          _markInitOverallStart: (u) => {
            p(u, d({}, c, "overall"));
          },
          _markInitOverallEnd: (u, a, n) => {
            p(
              u,
              d(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: n,
                },
                h,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (u, a) => {
            p(u, d(a, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (u, a) => {
            p(u, d(a, h, "initialize", "network_request"));
          },
          _markInitProcessStart: (u) => {
            p(u, d({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (u, a) => {
            p(u, d(a, h, "initialize", "process"));
          },
          _clearMarkers: (u) => {
            m.delete(u);
          },
          _formatError(u) {
            if (u && typeof u == "object")
              return { code: y(u, "code"), name: y(u, "name"), message: y(u, "message") };
          },
          _getDiagnosticsData(u, a, n, o) {
            var i;
            return {
              success: u?.ok === !0,
              statusCode: u?.status,
              sdkRegion:
                (i = u?.headers) === null || i === void 0 ? void 0 : i.get("x-statsig-region"),
              isDelta: n.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: e.Diagnostics._formatError(o),
            };
          },
          _enqueueDiagnosticsEvent(u, a, n, o) {
            const i = e.Diagnostics._getMarkers(n);
            if (i == null || i.length <= 0) return -1;
            const r = i[i.length - 1].timestamp - i[0].timestamp;
            e.Diagnostics._clearMarkers(n);
            const t = S(u, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function d(u, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, u);
        }
        function S(u, a) {
          return { eventName: v, user: u, value: null, metadata: a, time: Date.now() };
        }
        function p(u, a) {
          var n;
          const o = (n = m.get(u)) !== null && n !== void 0 ? n : [];
          (o.push(a), m.set(u, o));
        }
        function y(u, a) {
          if (a in u) return u[a];
        }
      })(Nt)),
    Nt
  );
}
var Ie = {},
  Oe = {},
  Ft = {},
  Ce = {},
  sr;
function un() {
  if (sr) return Ce;
  ((sr = 1),
    Object.defineProperty(Ce, "__esModule", { value: !0 }),
    (Ce._isTypeMatch = Ce._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  Ce._typeOf = e;
  function m(c, h) {
    const v = (d) => (Array.isArray(d) ? "array" : d === null ? "null" : typeof d);
    return v(c) === v(h);
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
        const m = un(),
          c = (d) => {
            let S = 0;
            for (let p = 0; p < d.length; p++) {
              const y = d.charCodeAt(p);
              ((S = (S << 5) - S + y), (S = S & S));
            }
            return String(S >>> 0);
          };
        e._DJB2 = c;
        const h = (d, S) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(d, S)));
        e._DJB2Object = h;
        const v = (d, S) => {
          if (d == null) return null;
          const p = Object.keys(d).sort(),
            y = {};
          return (
            p.forEach((u) => {
              const a = d[u];
              if (S === 0 || (0, m._typeOf)(a) !== "object") {
                y[u] = a;
                return;
              }
              y[u] = (0, e._getSortedObject)(a, S != null ? S - 1 : S);
            }),
            y
          );
        };
        e._getSortedObject = v;
      })(Ft)),
    Ft
  );
}
var lr;
function _t() {
  if (lr) return Oe;
  ((lr = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe._getStorageKey = Oe._getUserStorageKey = void 0));
  const e = Be();
  function m(h, v, d) {
    var S;
    if (d) return d(h, v);
    const p = v && v.customIDs ? v.customIDs : {},
      y = [
        `uid:${(S = v?.userID) !== null && S !== void 0 ? S : ""}`,
        `cids:${Object.keys(p)
          .sort((u, a) => u.localeCompare(a))
          .map((u) => `${u}-${p[u]}`)
          .join(",")}`,
        `k:${h}`,
      ];
    return (0, e._DJB2)(y.join("|"));
  }
  Oe._getUserStorageKey = m;
  function c(h, v, d) {
    return v ? m(h, v, d) : (0, e._DJB2)(`k:${h}`);
  }
  return ((Oe._getStorageKey = c), Oe);
}
var qt = {},
  ur;
function gt() {
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
      })(qt)),
    qt
  );
}
var Kt = {},
  cr;
function de() {
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
        const m = J(),
          c = () => (typeof window < "u" ? window : null);
        e._getWindowSafe = c;
        const h = () => {
          var a;
          const n = (0, e._getWindowSafe)();
          return (a = n?.document) !== null && a !== void 0 ? a : null;
        };
        e._getDocumentSafe = h;
        const v = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const a =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || a;
        };
        e._isServerEnv = v;
        const d = (a, n) => {
          const o = (0, e._getWindowSafe)();
          typeof o?.addEventListener == "function" && o.addEventListener(a, n);
        };
        e._addWindowEventListenerSafe = d;
        const S = (a, n) => {
          const o = (0, e._getDocumentSafe)();
          typeof o?.addEventListener == "function" && o.addEventListener(a, n);
        };
        e._addDocumentEventListenerSafe = S;
        const p = () => {
          var a;
          try {
            return (a = (0, e._getWindowSafe)()) === null || a === void 0
              ? void 0
              : a.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = p;
        const y = () => {
          const a = (0, e._getWindowSafe)();
          return a && "onpagehide" in a ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = y;
        const u = (a, n) => {
          try {
            return JSON.parse(JSON.stringify(n));
          } catch {
            return (m.Log.error(`Failed to clone object ${a}`), null);
          }
        };
        e._cloneObject = u;
      })(Kt)),
    Kt
  );
}
var Y = {},
  dr;
function ni() {
  if (dr) return Y;
  ((dr = 1),
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
    h = (a, n, o, i, r) => (
      o.bootstrapMetadata && (i.bootstrapMetadata = o.bootstrapMetadata),
      {
        eventName: a,
        user: n,
        value: null,
        metadata: u(o, i),
        secondaryExposures: r,
        time: Date.now(),
      }
    ),
    v = ({ eventName: a }) => a === m || a === e || a === c;
  Y._isExposureEvent = v;
  const d = (a, n, o) => {
    var i, r, t;
    const l = { gate: n.name, gateValue: String(n.value), ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (l.configVersion = n.__evaluation.version),
      h(
        m,
        a,
        n.details,
        l,
        S(
          (t = (r = n.__evaluation) === null || r === void 0 ? void 0 : r.secondary_exposures) !==
            null && t !== void 0
            ? t
            : [],
          o,
        ),
      )
    );
  };
  Y._createGateExposure = d;
  function S(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  Y._mapExposures = S;
  const p = (a, n, o) => {
    var i, r, t, l;
    const _ = { config: n.name, ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (_.configVersion = n.__evaluation.version),
      ((r = n.__evaluation) === null || r === void 0 ? void 0 : r.passed) != null &&
        (_.rulePassed = String(n.__evaluation.passed)),
      h(
        e,
        a,
        n.details,
        _,
        S(
          (l = (t = n.__evaluation) === null || t === void 0 ? void 0 : t.secondary_exposures) !==
            null && l !== void 0
            ? l
            : [],
          o,
        ),
      )
    );
  };
  Y._createConfigExposure = p;
  const y = (a, n, o, i) => {
    var r, t, l, _, s, b, f;
    const g = n.__evaluation,
      E = ((r = g?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let D = "",
      I = (t = g?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    E &&
      ((D = (l = g.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (I = (_ = g.secondary_exposures) !== null && _ !== void 0 ? _ : []));
    const R = (s = n.__evaluation) === null || s === void 0 ? void 0 : s.parameter_rule_ids,
      U = {
        config: n.name,
        parameterName: o,
        ruleID: (b = R?.[o]) !== null && b !== void 0 ? b : n.ruleID,
        allocatedExperiment: D,
        isExplicitParameter: String(E),
      };
    return (
      ((f = n.__evaluation) === null || f === void 0 ? void 0 : f.version) != null &&
        (U.configVersion = n.__evaluation.version),
      h(c, a, n.details, U, S(I, i))
    );
  };
  Y._createLayerParameterExposure = y;
  const u = (a, n) => (
    (n.reason = a.reason),
    a.lcut && (n.lcut = String(a.lcut)),
    a.receivedAt && (n.receivedAt = String(a.receivedAt)),
    n
  );
  return Y;
}
var Te = {},
  _r;
function ft() {
  return (
    _r ||
      ((_r = 1),
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
var Bt = {},
  gr;
function ce() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const m = J(),
          c = de(),
          h = {},
          v = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (n) => (h[n] ? h[n] : null),
            setItem: (n, o) => {
              h[n] = o;
            },
            removeItem: (n) => {
              delete h[n];
            },
            getAllKeys: () => Object.keys(h),
          };
        let d = null;
        try {
          const n = (0, c._getWindowSafe)();
          n &&
            n.localStorage &&
            typeof n.localStorage.getItem == "function" &&
            (d = {
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
        let S = d ?? v,
          p = S;
        function y(n) {
          try {
            return n();
          } catch (o) {
            if (o instanceof Error && o.name === "SecurityError")
              return (e.Storage._setProvider(v), null);
            throw o;
          }
        }
        e.Storage = {
          isReady: () => p.isReady(),
          isReadyResolver: () => p.isReadyResolver(),
          getProviderName: () => p.getProviderName(),
          getItem: (n) => y(() => p.getItem(n)),
          setItem: (n, o) => y(() => p.setItem(n, o)),
          removeItem: (n) => p.removeItem(n),
          getAllKeys: () => p.getAllKeys(),
          _setProvider: (n) => {
            ((S = n), (p = n));
          },
          _setDisabled: (n) => {
            n ? (p = v) : (p = S);
          },
        };
        function u(n) {
          const o = e.Storage.getItem(n);
          try {
            return JSON.parse(o ?? "null");
          } catch {
            return (m.Log.error(`Failed to parse value for key "${n}"`), null);
          }
        }
        e._getObjectFromStorage = u;
        function a(n, o) {
          e.Storage.setItem(n, JSON.stringify(o));
        }
        e._setObjectInStorage = a;
      })(Bt)),
    Bt
  );
}
var Ye = {},
  fr;
function ri() {
  if (fr) return Ye;
  ((fr = 1),
    Object.defineProperty(Ye, "__esModule", { value: !0 }),
    (Ye.UrlConfiguration = void 0));
  const e = Be(),
    m = gt(),
    c = {
      [m.Endpoint._initialize]: "i",
      [m.Endpoint._rgstr]: "e",
      [m.Endpoint._download_config_specs]: "d",
    };
  let h = class {
    constructor(d, S, p, y) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = d),
        (this.endpointDnsKey = c[d]),
        S && (this.customUrl = S),
        !S && p && (this.customUrl = p.endsWith("/") ? `${p}${d}` : `${p}/${d}`),
        y && (this.fallbackUrls = y));
      const u = m.NetworkDefault[d];
      this.defaultUrl = `${u}/${d}`;
    }
    getUrl() {
      var d;
      return (d = this.customUrl) !== null && d !== void 0 ? d : this.defaultUrl;
    }
    getChecksum() {
      var d;
      const S = ((d = this.fallbackUrls) !== null && d !== void 0 ? d : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + S);
    }
  };
  return ((Ye.UrlConfiguration = h), Ye);
}
var Gt = {},
  vr;
function cn() {
  return (
    vr ||
      ((vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._notifyVisibilityChanged =
            e._subscribeToVisiblityChanged =
            e._isUnloading =
            e._isCurrentlyVisible =
              void 0));
        const m = de(),
          c = "foreground",
          h = "background",
          v = [];
        let d = c,
          S = !1;
        const p = () => d === c;
        e._isCurrentlyVisible = p;
        const y = () => S;
        e._isUnloading = y;
        const u = (n) => {
          v.unshift(n);
        };
        e._subscribeToVisiblityChanged = u;
        const a = (n) => {
          n !== d && ((d = n), v.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, m._addWindowEventListenerSafe)("focus", () => {
            ((S = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, m._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(h)),
          (0, m._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : h);
          }),
          (0, m._addWindowEventListenerSafe)((0, m._getUnloadEvent)(), () => {
            ((S = !0), (0, e._notifyVisibilityChanged)(h));
          }));
      })(Gt)),
    Gt
  );
}
var hr;
function ii() {
  if (hr) return Ie;
  hr = 1;
  var e =
    (Ie && Ie.__awaiter) ||
    function (b, f, g, E) {
      function D(I) {
        return I instanceof g
          ? I
          : new g(function (R) {
              R(I);
            });
      }
      return new (g || (g = Promise))(function (I, R) {
        function U(N) {
          try {
            V(E.next(N));
          } catch (B) {
            R(B);
          }
        }
        function P(N) {
          try {
            V(E.throw(N));
          } catch (B) {
            R(B);
          }
        }
        function V(N) {
          N.done ? I(N.value) : D(N.value).then(U, P);
        }
        V((E = E.apply(b, f || [])).next());
      });
    };
  (Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.EventLogger = void 0));
  const m = _t(),
    c = Be(),
    h = J(),
    v = gt(),
    d = de(),
    S = ni(),
    p = ft(),
    y = ce(),
    u = ri(),
    a = cn(),
    n = 100,
    o = 1e4,
    i = 1e3,
    r = 6e5,
    t = 500,
    l = 200,
    _ = {};
  let s = class qe {
    static _safeFlushAndForget(f) {
      var g;
      (g = _[f]) === null || g === void 0 || g.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(f) {
      var g;
      (g = _[f]) === null || g === void 0 || g._retryFailedLogs();
    }
    constructor(f, g, E, D) {
      var I, R;
      ((this._sdkKey = f),
        (this._emitter = g),
        (this._network = E),
        (this._options = D),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (I = D?.loggingEnabled) !== null && I !== void 0
            ? I
            : D?.disableLogging === !0
              ? p.LoggingEnabledOption.disabled
              : p.LoggingEnabledOption.browserOnly),
        D?.loggingEnabled &&
          D.disableLogging !== void 0 &&
          h.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (R = D?.loggingBufferMaxSize) !== null && R !== void 0 ? R : n));
      const U = D?.networkConfig;
      this._logEventUrlConfig = new u.UrlConfiguration(
        v.Endpoint._rgstr,
        U?.logEventUrl,
        U?.api,
        U?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(f) {
      this._network.setLogEventCompressionMode(f);
    }
    setLoggingEnabled(f) {
      if (this._loggingEnabled === "disabled" && f !== "disabled") {
        const g = this._getStorageKey(),
          E = (0, y._getObjectFromStorage)(g);
        (E && this._queue.push(...E), y.Storage.removeItem(g));
      }
      this._loggingEnabled = f;
    }
    enqueue(f) {
      this._shouldLogEvent(f) &&
        (this._normalizeAndAppendEvent(f),
        this._quickFlushIfNeeded(),
        this._queue.length > this._maxQueueSize && qe._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(f) {
      var g;
      const E = (g = this._nonExposedChecks[f]) !== null && g !== void 0 ? g : 0;
      this._nonExposedChecks[f] = E + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var f;
      const g = (0, d._isServerEnv)();
      (g &&
        ((f = this._options) === null || f === void 0 ? void 0 : f.loggingEnabled) !== "always") ||
        ((_[this._sdkKey] = this),
        g ||
          (0, a._subscribeToVisiblityChanged)((E) => {
            E === "background"
              ? qe._safeFlushAndForget(this._sdkKey)
              : E === "foreground" && qe._safeRetryFailedLogs(this._sdkKey);
          }),
        this._retryFailedLogs(),
        this._startBackgroundFlushInterval());
    }
    stop() {
      return e(this, void 0, void 0, function* () {
        (this._flushIntervalId &&
          (clearInterval(this._flushIntervalId), (this._flushIntervalId = null)),
          delete _[this._sdkKey],
          yield this.flush());
      });
    }
    flush() {
      return e(this, void 0, void 0, function* () {
        if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
        const f = this._queue;
        ((this._queue = []), yield this._sendEvents(f));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > l) &&
          setTimeout(() => qe._safeFlushAndForget(this._sdkKey), l));
    }
    _shouldLogEvent(f) {
      var g;
      if (
        ((g = this._options) === null || g === void 0 ? void 0 : g.loggingEnabled) !== "always" &&
        (0, d._isServerEnv)()
      )
        return !1;
      if (!(0, S._isExposureEvent)(f)) return !0;
      const E = f.user ? f.user : { statsigEnvironment: void 0 },
        D = (0, m._getUserStorageKey)(this._sdkKey, E),
        I = f.metadata ? f.metadata : {},
        R = [
          f.eventName,
          D,
          I.gate,
          I.config,
          I.ruleID,
          I.allocatedExperiment,
          I.parameterName,
          String(I.isExplicitParameter),
          I.reason,
        ].join("|"),
        U = this._lastExposureTimeMap[R],
        P = Date.now();
      return U && P - U < r
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[R] = P),
          !0);
    }
    _sendEvents(f) {
      return e(this, void 0, void 0, function* () {
        var g, E;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(f), !1);
        try {
          const I =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((E = (g = this._options) === null || g === void 0 ? void 0 : g.networkConfig) ===
              null || E === void 0
              ? void 0
              : E.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: f }),
            (I ? this._sendEventsViaBeacon(f) : yield this._sendEventsViaPost(f)).success
              ? (this._emitter({ name: "logs_flushed", events: f }), !0)
              : (h.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(f), !1)
          );
        } catch {
          return (h.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(f) {
      return e(this, void 0, void 0, function* () {
        var g;
        const E = yield this._network.post(this._getRequestData(f)),
          D = (g = E?.code) !== null && g !== void 0 ? g : -1;
        return { success: D >= 200 && D < 300 };
      });
    }
    _sendEventsViaBeacon(f) {
      return { success: this._network.beacon(this._getRequestData(f)) };
    }
    _getRequestData(f) {
      return {
        sdkKey: this._sdkKey,
        data: { events: f },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [v.NetworkParam.EventCount]: String(f.length) },
        credentials: "same-origin",
      };
    }
    _saveFailedLogsToStorage(f) {
      for (; f.length > t; ) f.shift();
      const g = this._getStorageKey();
      try {
        const E = this._getFailedLogsFromStorage(g);
        (0, y._setObjectInStorage)(g, [...E, ...f]);
      } catch {
        h.Log.warn("Unable to save failed logs to storage");
      }
    }
    _getFailedLogsFromStorage(f) {
      let g = [];
      try {
        const E = (0, y._getObjectFromStorage)(f);
        return (Array.isArray(E) && (g = E), g);
      } catch {
        return [];
      }
    }
    _retryFailedLogs() {
      const f = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        y.Storage.isReady() || (yield y.Storage.isReadyResolver());
        const g = (0, y._getObjectFromStorage)(f);
        g && (y.Storage.removeItem(f), yield this._sendEvents(g));
      }).catch(() => {
        h.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(f) {
      f.user && ((f.user = Object.assign({}, f.user)), delete f.user.privateAttributes);
      const g = {},
        E = this._getCurrentPageUrl();
      E && (g.statsigMetadata = { currentPage: E });
      const D = Object.assign(Object.assign({}, f), g);
      (h.Log.debug("Enqueued Event:", D), this._queue.push(D));
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
      var f;
      if (
        ((f = this._options) === null || f === void 0
          ? void 0
          : f.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, d._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var f, g;
      const E =
          (g = (f = this._options) === null || f === void 0 ? void 0 : f.loggingIntervalMs) !==
            null && g !== void 0
            ? g
            : o,
        D = setInterval(() => {
          const I = _[this._sdkKey];
          !I || I._flushIntervalId !== D ? clearInterval(D) : qe._safeFlushAndForget(this._sdkKey);
        }, E);
      this._flushIntervalId = D;
    }
  };
  return ((Ie.EventLogger = s), Ie);
}
var Vt = {},
  yr;
function at() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.31.0"));
        let m = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => m,
          add: (c) => {
            m = Object.assign(Object.assign({}, m), c);
          },
        };
      })(Vt)),
    Vt
  );
}
var zt = {},
  mr;
function Ci() {
  return (mr || ((mr = 1), Object.defineProperty(zt, "__esModule", { value: !0 })), zt);
}
var ie = {},
  Re = {},
  Ze = {},
  Sr;
function dn() {
  if (Sr) return Ze;
  ((Sr = 1), Object.defineProperty(Ze, "__esModule", { value: !0 }), (Ze.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let m = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let d = Math.random() * 16;
        return (
          m > 0
            ? ((d = ((m + d) % 16) | 0), (m = Math.floor(m / 16)))
            : ((d = ((c + d) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? d : (d & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ze.getUUID = e), Ze);
}
var br;
function vt() {
  if (br) return Re;
  ((br = 1),
    Object.defineProperty(Re, "__esModule", { value: !0 }),
    (Re.getCookieName = Re.StableID = void 0));
  const e = _t(),
    m = J(),
    c = de(),
    h = ce(),
    v = dn(),
    d = {},
    S = {},
    p = {};
  Re.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (r) => {
      if (p[r]) return null;
      if (d[r] != null) return d[r];
      let t = null;
      return (
        (t = n(r)),
        t != null
          ? ((d[r] = t), u(t, r), t)
          : ((t = a(r)), t == null && (t = (0, v.getUUID)()), u(t, r), o(t, r), (d[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((d[t] = r), u(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      S[r] = t;
    },
    _setDisabled: (r, t) => {
      p[r] = t;
    },
  };
  function y(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function u(r, t) {
    const l = y(t);
    try {
      (0, h._setObjectInStorage)(l, r);
    } catch {
      m.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(r) {
    const t = y(r);
    return (0, h._getObjectFromStorage)(t);
  }
  function n(r) {
    if (!S[r] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [_, s] = l.trim().split("=");
      if (_ === i(r)) return decodeURIComponent(s);
    }
    return null;
  }
  function o(r, t) {
    if (!S[t] || (0, c._getDocumentSafe)() == null) return;
    const l = new Date();
    (l.setFullYear(l.getFullYear() + 1),
      (document.cookie = `${i(t)}=${encodeURIComponent(r)}; expires=${l.toUTCString()}; path=/`));
  }
  function i(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  return ((Re.getCookieName = i), Re);
}
var Me = {},
  Er;
function oi() {
  if (Er) return Me;
  ((Er = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me._getFullUserHash = Me._normalizeUser = void 0));
  const e = Be(),
    m = J(),
    c = de();
  function h(d, S, p) {
    const y = (0, c._cloneObject)("StatsigUser", d);
    return y == null
      ? (m.Log.error("Failed to clone user"), { statsigEnvironment: void 0 })
      : (S != null && S.environment != null
          ? (y.statsigEnvironment = S.environment)
          : p != null && (y.statsigEnvironment = { tier: p }),
        y);
  }
  Me._normalizeUser = h;
  function v(d) {
    return d ? (0, e._DJB2Object)(d) : null;
  }
  return ((Me._getFullUserHash = v), Me);
}
var $e = {},
  pr;
function si() {
  if (pr) return $e;
  ((pr = 1), Object.defineProperty($e, "__esModule", { value: !0 }), ($e._typedJsonParse = void 0));
  const e = J();
  function m(c, h, v) {
    try {
      const d = JSON.parse(c);
      if (d && typeof d == "object" && h in d) return d;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
  }
  return (($e._typedJsonParse = m), $e);
}
var wr;
function Ti() {
  if (wr) return ie;
  wr = 1;
  var e =
    (ie && ie.__awaiter) ||
    function (o, i, r, t) {
      function l(_) {
        return _ instanceof r
          ? _
          : new r(function (s) {
              s(_);
            });
      }
      return new (r || (r = Promise))(function (_, s) {
        function b(E) {
          try {
            g(t.next(E));
          } catch (D) {
            s(D);
          }
        }
        function f(E) {
          try {
            g(t.throw(E));
          } catch (D) {
            s(D);
          }
        }
        function g(E) {
          E.done ? _(E.value) : l(E.value).then(b, f);
        }
        g((t = t.apply(o, i || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie._makeDataAdapterResult = ie.DataAdapterCore = void 0));
  const m = J(),
    c = vt(),
    h = oi(),
    v = ce(),
    d = si(),
    S = 10,
    p = 8;
  let y = class {
    constructor(i, r) {
      ((this._adapterName = i),
        (this._cacheSuffix = r),
        (this._options = null),
        (this._sdkKey = null),
        (this._cacheLimit = S),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${r}`),
        (this._inMemoryCache = new a()));
    }
    attach(i, r, t) {
      ((this._sdkKey = i), (this._options = r));
    }
    getDataSync(i) {
      const r = i && (0, h._normalizeUser)(i, this._options),
        t = this._getCacheKey(r),
        l = this._inMemoryCache.get(t, r);
      if (l && this._getIsCacheValueValid(l)) return l;
      const _ = this._loadFromCache(t);
      return _ && this._getIsCacheValueValid(_)
        ? (this._inMemoryCache.add(t, _, this._cacheLimit), this._inMemoryCache.get(t, r))
        : null;
    }
    setData(i, r) {
      const t = r && (0, h._normalizeUser)(r, this._options),
        l = this._getCacheKey(t);
      this._inMemoryCache.add(l, u("Bootstrap", i, null, t), this._cacheLimit);
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === c.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, r, t) {
      return e(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const l = i ?? this.getDataSync(r),
          _ = [this._fetchAndPrepFromNetwork(l, r, t)];
        return (
          t?.timeoutMs &&
            _.push(
              new Promise((s) => setTimeout(s, t.timeoutMs)).then(
                () => (m.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(_)
        );
      });
    }
    _prefetchDataImpl(i, r) {
      return e(this, void 0, void 0, function* () {
        const t = i && (0, h._normalizeUser)(i, this._options),
          l = this._getCacheKey(t),
          _ = yield this._getDataAsyncImpl(null, t, r);
        _ &&
          this._inMemoryCache.add(
            l,
            Object.assign(Object.assign({}, _), { source: "Prefetch" }),
            this._cacheLimit,
          );
      });
    }
    _fetchAndPrepFromNetwork(i, r, t) {
      return e(this, void 0, void 0, function* () {
        var l;
        const _ = (l = i?.data) !== null && l !== void 0 ? l : null,
          s = i != null && this._isCachedResultValidFor204(i, r),
          b = yield this._fetchFromNetwork(_, r, t, s);
        if (!b) return (m.Log.debug("No response returned for latest value"), null);
        const f = (0, d._typedJsonParse)(b, "has_updates", "Response"),
          g = this._getSdkKey(),
          E = c.StableID.get(g);
        let D = null;
        if (f?.has_updates === !0) D = u("Network", b, E, r);
        else if (_ && f?.has_updates === !1) D = u("NetworkNotModified", _, E, r);
        else return null;
        const I = this._getCacheKey(r);
        return (this._inMemoryCache.add(I, D, this._cacheLimit), this._writeToCache(I, D), D);
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
      const l = (0, d._typedJsonParse)(t, "source", "Cached Result");
      return l ? Object.assign(Object.assign({}, l), { source: "Cache" }) : null;
    }
    _writeToCache(i, r) {
      const t = JSON.stringify(r);
      for (let l = 0; l < p; l++)
        try {
          v.Storage.setItem(i, t);
          break;
        } catch (_) {
          if (
            !(_ instanceof Error) ||
            !(
              _.toString().includes("QuotaExceededError") ||
              _.toString().includes("QUOTA_EXCEEDED_ERR")
            ) ||
            this._cacheLimit <= 1
          )
            throw _;
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
      const _ = n(l, r);
      for (const s of _) (delete l[s], v.Storage.removeItem(s));
      (0, v._setObjectInStorage)(this._lastModifiedStoreKey, l);
    }
  };
  ie.DataAdapterCore = y;
  function u(o, i, r, t) {
    return {
      source: o,
      data: i,
      receivedAt: Date.now(),
      stableID: r,
      fullUserHash: (0, h._getFullUserHash)(t),
    };
  }
  ie._makeDataAdapterResult = u;
  class a {
    constructor() {
      this._data = {};
    }
    get(i, r) {
      var t;
      const l = this._data[i],
        _ = l?.stableID,
        s = (t = r?.customIDs) === null || t === void 0 ? void 0 : t.stableID;
      return s && _ && s !== _
        ? (m.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : l;
    }
    add(i, r, t) {
      const l = n(this._data, t - 1);
      for (const _ of l) delete this._data[_];
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
              const _ = o[t],
                s = o[l];
              return typeof _ == "object" && typeof s == "object"
                ? _.receivedAt - s.receivedAt
                : _ - s;
            })
            .slice(0, r.length - i);
  }
  return ie;
}
var Jt = {},
  Dr;
function Ri() {
  return (Dr || ((Dr = 1), Object.defineProperty(Jt, "__esModule", { value: !0 })), Jt);
}
var et = {},
  tt = {},
  kr;
function _n() {
  if (kr) return tt;
  ((kr = 1), Object.defineProperty(tt, "__esModule", { value: !0 }), (tt.SDKType = void 0));
  const e = {};
  let m;
  return (
    (tt.SDKType = {
      _get: (c) => {
        var h;
        return ((h = e[c]) !== null && h !== void 0 ? h : "js-mono") + (m ?? "");
      },
      _setClientType(c, h) {
        e[c] = h;
      },
      _setBindingType(c) {
        (!m || m === "-react") && (m = "-" + c);
      },
    }),
    tt
  );
}
var Ir;
function ai() {
  return (
    Ir ||
      ((Ir = 1),
      (function (e) {
        var m =
          (et && et.__awaiter) ||
          function (n, o, i, r) {
            function t(l) {
              return l instanceof i
                ? l
                : new i(function (_) {
                    _(l);
                  });
            }
            return new (i || (i = Promise))(function (l, _) {
              function s(g) {
                try {
                  f(r.next(g));
                } catch (E) {
                  _(E);
                }
              }
              function b(g) {
                try {
                  f(r.throw(g));
                } catch (E) {
                  _(E);
                }
              }
              function f(g) {
                g.done ? l(g.value) : t(g.value).then(s, b);
              }
              f((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = J(),
          h = _n(),
          v = at();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const d = "[Statsig] UnknownError";
        let S = class {
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
              u(r).forEach((t) => {
                const l = r[t];
                "$EB" in l ||
                  ((r[t] = (..._) => this._capture(i ? `${i}:${t}` : t, () => l.apply(o, _))),
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
            this._lastSeenError || (this._lastSeenError = p(o));
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
                  var t, l, _, s, b, f, g;
                  const E = i || Error(d),
                    D = E instanceof Error,
                    I = D ? E.name : "No Name",
                    R = p(E);
                  if (((this._lastSeenError = R), this._seen.has(I))) return;
                  if (
                    (this._seen.add(I),
                    !(
                      (l =
                        (t = this._options) === null || t === void 0 ? void 0 : t.networkConfig) ===
                        null || l === void 0
                    ) && l.preventAllNetworkTraffic)
                  ) {
                    (_ = this._emitter) === null ||
                      _ === void 0 ||
                      _.call(this, { name: "error", error: i, tag: o });
                    return;
                  }
                  const U = h.SDKType._get(this._sdkKey),
                    P = v.StatsigMetadataProvider.get(),
                    V = D ? E.stack : y(E),
                    N = Object.assign(
                      { tag: o, exception: I, info: V, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, P), { sdkType: U }),
                    );
                  (yield (
                    (f =
                      (b =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || b === void 0
                        ? void 0
                        : b.networkOverrideFunc) !== null && f !== void 0
                      ? f
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(U),
                      "STATSIG-SDK-VERSION": String(P.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(N),
                  }),
                    (g = this._emitter) === null ||
                      g === void 0 ||
                      g.call(this, { name: "error", error: i, tag: o }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        e.ErrorBoundary = S;
        function p(n) {
          return n instanceof Error
            ? n
            : typeof n == "string"
              ? new Error(n)
              : new Error("An unknown error occurred.");
        }
        function y(n) {
          try {
            return JSON.stringify(n);
          } catch {
            return d;
          }
        }
        function u(n) {
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
      })(et)),
    et
  );
}
var Wt = {},
  Or;
function Mi() {
  return (Or || ((Or = 1), Object.defineProperty(Wt, "__esModule", { value: !0 })), Wt);
}
var xt = {},
  Cr;
function Ui() {
  return (Cr || ((Cr = 1), Object.defineProperty(xt, "__esModule", { value: !0 })), xt);
}
var Ht = {},
  Tr;
function Li() {
  return (Tr || ((Tr = 1), Object.defineProperty(Ht, "__esModule", { value: !0 })), Ht);
}
var Ue = {},
  Rr;
function li() {
  if (Rr) return Ue;
  ((Rr = 1),
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
  function c(h, v, d) {
    let S = `${h}|${v}`;
    if (!d) return S;
    for (const p of Object.keys(d)) {
      if (m.has(p)) return;
      e.has(p) ? (S += `|${p}=true`) : (S += `|${p}=${d[p]}`);
    }
    return S;
  }
  return ((Ue.createMemoKey = c), Ue);
}
var Le = {},
  oe = {},
  Pe = {},
  Mr;
function Pi() {
  if (Mr) return Pe;
  Mr = 1;
  var e =
    (Pe && Pe.__awaiter) ||
    function (p, y, u, a) {
      function n(o) {
        return o instanceof u
          ? o
          : new u(function (i) {
              i(o);
            });
      }
      return new (u || (u = Promise))(function (o, i) {
        function r(_) {
          try {
            l(a.next(_));
          } catch (s) {
            i(s);
          }
        }
        function t(_) {
          try {
            l(a.throw(_));
          } catch (s) {
            i(s);
          }
        }
        function l(_) {
          _.done ? o(_.value) : n(_.value).then(r, t);
        }
        l((a = a.apply(p, y || [])).next());
      });
    };
  (Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe._fetchTxtRecords = void 0));
  const m = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    h = ["i", "e", "d"],
    v = 200;
  function d(p) {
    return e(this, void 0, void 0, function* () {
      const y = yield p(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: m,
      });
      if (!y.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const u = yield y.arrayBuffer(),
        a = new Uint8Array(u);
      return S(a);
    });
  }
  Pe._fetchTxtRecords = d;
  function S(p) {
    const y = p.findIndex(
      (a, n) =>
        n < v && String.fromCharCode(a) === "=" && h.includes(String.fromCharCode(p[n - 1])),
    );
    if (y === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let u = "";
    for (let a = y - 1; a < p.length; a++) u += String.fromCharCode(p[a]);
    return u.split(",");
  }
  return Pe;
}
var Ur;
function Ai() {
  if (Ur) return oe;
  Ur = 1;
  var e =
    (oe && oe.__awaiter) ||
    function (i, r, t, l) {
      function _(s) {
        return s instanceof t
          ? s
          : new t(function (b) {
              b(s);
            });
      }
      return new (t || (t = Promise))(function (s, b) {
        function f(D) {
          try {
            E(l.next(D));
          } catch (I) {
            b(I);
          }
        }
        function g(D) {
          try {
            E(l.throw(D));
          } catch (I) {
            b(I);
          }
        }
        function E(D) {
          D.done ? s(D.value) : _(D.value).then(f, g);
        }
        E((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe._isDomainFailure = oe.NetworkFallbackResolver = void 0));
  const m = Pi(),
    c = Be(),
    h = J(),
    v = ce(),
    d = 10080 * 60 * 1e3,
    S = 14400 * 1e3;
  let p = class {
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
      const _ = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      _ &&
        ((_.expiryTime = Date.now() + d),
        a(r, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: _ })));
    }
    getActiveFallbackUrl(r, t) {
      var l, _;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = s));
      const b = s[t.endpoint];
      return !b ||
        Date.now() > ((_ = b.expiryTime) !== null && _ !== void 0 ? _ : 0) ||
        t.getChecksum() !== b.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), a(r, this._fallbackInfo), null)
        : b.url
          ? b.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, _) {
      return e(this, void 0, void 0, function* () {
        var s, b;
        try {
          if (!y(l, _)) return !1;
          const g =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            E = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              g,
            );
          return E ? (this._updateFallbackInfoWithNewUrl(r, t, E), !0) : !1;
        } catch (f) {
          return (
            (b = this._errorBoundary) === null ||
              b === void 0 ||
              b.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(r, t, l) {
      var _, s, b;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + d,
          previous: [],
        },
        g = t.endpoint,
        E = (_ = this._fallbackInfo) === null || _ === void 0 ? void 0 : _[g];
      (E && f.previous.push(...E.previous), f.previous.length > 10 && (f.previous = []));
      const D =
        (b = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[g]) === null ||
        b === void 0
          ? void 0
          : b.url;
      (D != null && f.previous.push(D),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [g]: f })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + S;
        const _ = [],
          s = yield (0, m._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          b = o(r.defaultUrl);
        for (const f of s) {
          if (!f.startsWith(r.endpointDnsKey + "=")) continue;
          const g = f.split("=");
          if (g.length > 1) {
            let E = g[1];
            (E.endsWith("/") && (E = E.slice(0, -1)), _.push(`https://${E}${b}`));
          }
        }
        return _;
      });
    }
    _pickNewFallbackUrl(r, t) {
      var l;
      if (t == null) return null;
      const _ = new Set((l = r?.previous) !== null && l !== void 0 ? l : []),
        s = r?.url;
      let b = null;
      for (const f of t) {
        const g = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!_.has(f) && g !== s) {
          b = g;
          break;
        }
      }
      return b;
    }
  };
  oe.NetworkFallbackResolver = p;
  function y(i, r) {
    var t;
    const l = (t = i?.toLowerCase()) !== null && t !== void 0 ? t : "";
    return (
      r ||
      l.includes("uncaught exception") ||
      l.includes("failed to fetch") ||
      l.includes("networkerror when attempting to fetch resource")
    );
  }
  oe._isDomainFailure = y;
  function u(i) {
    return `statsig.network_fallback.${(0, c._DJB2)(i)}`;
  }
  function a(i, r) {
    const t = u(i);
    if (!r || Object.keys(r).length === 0) {
      v.Storage.removeItem(t);
      return;
    }
    v.Storage.setItem(t, JSON.stringify(r));
  }
  function n(i) {
    const r = u(i),
      t = v.Storage.getItem(r);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return (h.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function o(i) {
    try {
      return new URL(i).pathname;
    } catch {
      return null;
    }
  }
  return oe;
}
var nt = {},
  Lr;
function ui() {
  if (Lr) return nt;
  ((Lr = 1), Object.defineProperty(nt, "__esModule", { value: !0 }), (nt.SDKFlags = void 0));
  const e = {};
  return (
    (nt.SDKFlags = {
      setFlags: (m, c) => {
        e[m] = c;
      },
      get: (m, c) => {
        var h, v;
        return (v = (h = e[m]) === null || h === void 0 ? void 0 : h[c]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    nt
  );
}
var Qt = {},
  Pr;
function gn() {
  return (
    Pr ||
      ((Pr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const m = le(),
          c = _t(),
          h = J(),
          v = ce(),
          d = dn(),
          S = 1800 * 1e3,
          p = 14400 * 1e3,
          y = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              y[s] == null && (y[s] = u(s));
              const b = y[s];
              return n(b);
            },
            overrideInitialSessionID: (s, b) => {
              y[b] = a(s, b);
            },
          }));
        function u(s) {
          let b = _(s);
          const f = Date.now();
          return (
            b || (b = { sessionID: (0, d.getUUID)(), startTime: f, lastUpdate: f }),
            { data: b, sdkKey: s }
          );
        }
        function a(s, b) {
          const f = Date.now();
          return { data: { sessionID: s, startTime: f, lastUpdate: f }, sdkKey: b };
        }
        function n(s) {
          const b = Date.now(),
            f = s.data,
            g = s.sdkKey;
          if (i(f) || r(f)) {
            ((f.sessionID = (0, d.getUUID)()), (f.startTime = b));
            const D = __STATSIG__ == null ? void 0 : __STATSIG__.instance(g);
            D && D.$emt({ name: "session_expired" });
          }
          ((f.lastUpdate = b),
            l(f, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const E = b - f.startTime;
          return ((s.idleTimeoutID = o(g, S)), (s.ageTimeoutID = o(g, p - E)), s);
        }
        function o(s, b) {
          return setTimeout(() => {
            var f;
            const g =
              (f = (0, m._getStatsigGlobal)()) === null || f === void 0 ? void 0 : f.instance(s);
            g && g.$emt({ name: "session_expired" });
          }, b);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > S;
        }
        function r({ startTime: s }) {
          return Date.now() - s > p;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function l(s, b) {
          const f = t(b);
          try {
            (0, v._setObjectInStorage)(f, s);
          } catch {
            h.Log.warn("Failed to save SessionID");
          }
        }
        function _(s) {
          const b = t(s);
          return (0, v._getObjectFromStorage)(b);
        }
      })(Qt)),
    Qt
  );
}
var rt = {},
  Ar;
function ci() {
  return (
    Ar ||
      ((Ar = 1),
      Object.defineProperty(rt, "__esModule", { value: !0 }),
      (rt.ErrorTag = void 0),
      (rt.ErrorTag = { NetworkError: "NetworkError" })),
    rt
  );
}
var jr;
function ji() {
  if (jr) return Le;
  jr = 1;
  var e =
    (Le && Le.__awaiter) ||
    function (O, w, k, C) {
      function T(M) {
        return M instanceof k
          ? M
          : new k(function (L) {
              L(M);
            });
      }
      return new (k || (k = Promise))(function (M, L) {
        function $(A) {
          try {
            F(C.next(A));
          } catch (j) {
            L(j);
          }
        }
        function q(A) {
          try {
            F(C.throw(A));
          } catch (j) {
            L(j);
          }
        }
        function F(A) {
          A.done ? M(A.value) : T(A.value).then($, q);
        }
        F((C = C.apply(O, w || [])).next());
      });
    };
  (Object.defineProperty(Le, "__esModule", { value: !0 }), (Le.NetworkCore = void 0), le());
  const m = le(),
    c = nn(),
    h = J(),
    v = gt(),
    d = Ai(),
    S = ui(),
    p = _n(),
    y = de(),
    u = gn(),
    a = vt(),
    n = ci(),
    o = at(),
    i = ft(),
    r = cn(),
    t = 1e4,
    l = 500,
    _ = 3e4,
    s = 1e3,
    b = 50,
    f = b / s,
    g = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let E = class {
    constructor(w, k) {
      ((this._emitter = k),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        w && (this._options = w),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new d.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(w)));
    }
    setLogEventCompressionMode(w) {
      this._options.logEventCompressionMode = w;
    }
    setErrorBoundary(w) {
      ((this._errorBoundary = w),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(w));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const w = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), w);
    }
    beacon(w) {
      if (!D(w)) return !1;
      const k = this._getInternalRequestArgs("POST", w),
        C = this._getPopulatedURL(k),
        T = navigator;
      return T.sendBeacon.bind(T)(C, k.body);
    }
    post(w) {
      return e(this, void 0, void 0, function* () {
        const k = this._getInternalRequestArgs("POST", w);
        return (this._tryEncodeBody(k), yield this._tryToCompressBody(k), this._sendRequest(k));
      });
    }
    get(w) {
      const k = this._getInternalRequestArgs("GET", w);
      return this._sendRequest(k);
    }
    _sendRequest(w) {
      return e(this, void 0, void 0, function* () {
        var k, C, T, M;
        if (!D(w) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: L, body: $, retries: q, attempt: F } = w,
          A = w.urlConfig.endpoint;
        if (this._isRateLimited(A))
          return (
            h.Log.warn(
              `Request to ${A} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const j = F ?? 1;
        let G = !1;
        const W = this._getPopulatedURL(w);
        let K = null;
        const Z = (0, r._isUnloading)();
        try {
          const se = {
            method: L,
            body: $,
            headers: Object.assign({}, w.headers),
            priority: w.priority,
            keepalive: Z,
          };
          V(w, j);
          const z = this._leakyBucket[A];
          z && ((z.lastRequestTime = Date.now()), (this._leakyBucket[A] = z));
          const ee = (k = this._netConfig.networkOverrideFunc) !== null && k !== void 0 ? k : fetch;
          let Fe;
          if (
            ((K = yield Promise.race([
              ee(W, se).finally(() => clearTimeout(Fe)),
              new Promise((_e, ge) => {
                Fe = setTimeout(() => {
                  ((G = !0), ge(new Error(`Timeout of ${this._timeout}ms expired.`)));
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
            N(w, K, j, te),
            this._fallbackResolver.tryBumpExpiryTime(w.sdkKey, w.urlConfig),
            { body: te, code: K.status }
          );
        } catch (se) {
          const z = U(se),
            ee = P(z ?? "", G);
          if (
            (N(w, K, j, "", se),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              w.sdkKey,
              w.urlConfig,
              z,
              ee,
            )) &&
              (w.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(w.sdkKey, w.urlConfig)),
            !q || j > q || !g.has((C = K?.status) !== null && C !== void 0 ? C : 500))
          ) {
            (T = this._emitter) === null ||
              T === void 0 ||
              T.call(this, {
                name: "error",
                error: se,
                tag: n.ErrorTag.NetworkError,
                requestArgs: w,
              });
            const te = `A networking error occurred during ${L} request to ${W}.`;
            return (
              h.Log.error(te, z, se),
              (M = this._errorBoundary) === null || M === void 0 || M.attachErrorIfNoneExists(te),
              null
            );
          }
          return (
            yield B(j),
            this._sendRequest(Object.assign(Object.assign({}, w), { retries: q, attempt: j + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(w) {
      let k = w?.logEventCompressionMode;
      return (
        !k && w?.disableCompression === !0 && (k = i.LogEventCompressionMode.Disabled),
        k || (k = i.LogEventCompressionMode.Enabled),
        k
      );
    }
    _isRateLimited(w) {
      var k;
      const C = Date.now(),
        T =
          (k = this._leakyBucket[w]) !== null && k !== void 0
            ? k
            : { count: 0, lastRequestTime: C },
        M = C - T.lastRequestTime,
        L = Math.floor(M * f);
      return (
        (T.count = Math.max(0, T.count - L)),
        T.count >= b
          ? !0
          : ((T.count += 1), (T.lastRequestTime = C), (this._leakyBucket[w] = T), !1)
      );
    }
    _getPopulatedURL(w) {
      var k;
      const C = (k = w.fallbackUrl) !== null && k !== void 0 ? k : w.urlConfig.getUrl();
      (w.urlConfig.endpoint === v.Endpoint._initialize ||
        w.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = C);
      const T = Object.assign(
          {
            [v.NetworkParam.SdkKey]: w.sdkKey,
            [v.NetworkParam.SdkType]: p.SDKType._get(w.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: u.SessionID.get(w.sdkKey),
          },
          w.params,
        ),
        M = Object.keys(T)
          .map((L) => `${encodeURIComponent(L)}=${encodeURIComponent(T[L])}`)
          .join("&");
      return `${C}${M ? `?${M}` : ""}`;
    }
    _tryEncodeBody(w) {
      var k;
      const C = (0, y._getWindowSafe)(),
        T = w.body;
      if (
        !(
          !w.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof T != "string" ||
          (0, m._getStatsigGlobalFlag)("no-encode") != null ||
          !C?.btoa
        )
      )
        try {
          ((w.body = C.btoa(T).split("").reverse().join("")),
            (w.params = Object.assign(
              Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (M) {
          h.Log.warn(`Request encoding failed for ${w.urlConfig.getUrl()}`, M);
        }
    }
    _tryToCompressBody(w) {
      return e(this, void 0, void 0, function* () {
        var k;
        const C = w.body;
        if (!(typeof C != "string" || !R(w, this._options)))
          try {
            const T = new TextEncoder().encode(C),
              M = new CompressionStream("gzip"),
              L = M.writable.getWriter();
            (L.write(T).catch(h.Log.error), L.close().catch(h.Log.error));
            const $ = M.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const A = q.reduce((W, K) => W + K.length, 0),
              j = new Uint8Array(A);
            let G = 0;
            for (const W of q) (j.set(W, G), (G += W.length));
            ((w.body = j),
              (w.params = Object.assign(
                Object.assign({}, (k = w.params) !== null && k !== void 0 ? k : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (T) {
            h.Log.warn(`Request compression failed for ${w.urlConfig.getUrl()}`, T);
          }
      });
    }
    _getInternalRequestArgs(w, k) {
      const C = this._fallbackResolver.getActiveFallbackUrl(k.sdkKey, k.urlConfig),
        T = Object.assign(Object.assign({}, k), { method: w, fallbackUrl: C });
      return ("data" in k && I(T, k.data), T);
    }
  };
  Le.NetworkCore = E;
  const D = (O) => (O.sdkKey ? !0 : (h.Log.warn("Unable to make request without an SDK key"), !1)),
    I = (O, w) => {
      const { sdkKey: k, fallbackUrl: C } = O,
        T = a.StableID.get(k),
        M = u.SessionID.get(k),
        L = p.SDKType._get(k);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, w), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: T,
            sessionID: M,
            sdkType: L,
            fallbackUrl: C,
          }),
        }),
      );
    };
  function R(O, w) {
    if (
      !O.isCompressable ||
      (0, m._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const k = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      C = S.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (w.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(k && !C);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function U(O) {
    return typeof O == "string"
      ? O
      : O instanceof Error
        ? `${O.name}: ${O.message}`
        : "Unknown Error";
  }
  function P(O, w) {
    return O.includes("Timeout") || w;
  }
  function V(O, w) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: w });
  }
  function N(O, w, k, C, T) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(w, k, C, T));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((w) => setTimeout(w, Math.min(l * (O * O), _)));
    });
  }
  return Le;
}
var Xt = {},
  Nr;
function Ni() {
  return (Nr || ((Nr = 1), Object.defineProperty(Xt, "__esModule", { value: !0 })), Xt);
}
var Yt = {},
  Fr;
function Fi() {
  return (Fr || ((Fr = 1), Object.defineProperty(Yt, "__esModule", { value: !0 })), Yt);
}
var Zt = {},
  qr;
function qi() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e._fastApproxSizeOf = void 0));
        const m = 2,
          c = 1,
          h = (v, d) => {
            let S = 0;
            const p = Object.keys(v);
            for (let y = 0; y < p.length; y++) {
              const u = p[y],
                a = v[u];
              if (
                ((S += u.length),
                typeof a == "object" && a !== null
                  ? (S += (0, e._fastApproxSizeOf)(a, d) + m)
                  : (S += String(a).length + c),
                S >= d)
              )
                return S;
            }
            return S;
          };
        e._fastApproxSizeOf = h;
      })(Zt)),
    Zt
  );
}
var Ae = {},
  Kr;
function Ki() {
  if (Kr) return Ae;
  Kr = 1;
  var e =
    (Ae && Ae.__awaiter) ||
    function (r, t, l, _) {
      function s(b) {
        return b instanceof l
          ? b
          : new l(function (f) {
              f(b);
            });
      }
      return new (l || (l = Promise))(function (b, f) {
        function g(I) {
          try {
            D(_.next(I));
          } catch (R) {
            f(R);
          }
        }
        function E(I) {
          try {
            D(_.throw(I));
          } catch (R) {
            f(R);
          }
        }
        function D(I) {
          I.done ? b(I.value) : s(I.value).then(g, E);
        }
        D((_ = _.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.StatsigClientBase = void 0), le());
  const m = le(),
    c = ai(),
    h = ii(),
    v = J(),
    d = li(),
    S = de(),
    p = gn(),
    y = vt(),
    u = ft(),
    a = ce(),
    n = 3e3;
  let o = class {
    constructor(t, l, _, s) {
      var b, f, g, E;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const D = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && a.Storage._setDisabled(!0),
        s?.initialSessionID && p.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && a.Storage._setProvider(s.storageProvider),
        s?.enableCookies && y.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && y.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (b = s?.overrideAdapter) !== null && b !== void 0 ? b : null),
        (this._logger = new h.EventLogger(t, D, _, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, D)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        _.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, s, _),
        (this.storageProvider = a.Storage),
        (E =
          (g = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || g === void 0
            ? void 0
            : g.call(f)) === null ||
          E === void 0 ||
          E.catch((I) => this._errorBoundary.logError("OA::loadFromStorage", I)),
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
          y.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
        t.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode)
          : t.disableCompression &&
            this._logger.setLogEventCompressionMode(u.LogEventCompressionMode.Disabled));
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
        const _ = this._listeners[t].indexOf(l);
        _ !== -1 && this._listeners[t].splice(_, 1);
      }
    }
    $on(t, l) {
      ((l.__isInternal = !0), this.on(t, l));
    }
    $emt(t) {
      var l;
      const _ = (s) => {
        try {
          s(t);
        } catch (b) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, b);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            t,
          );
        }
      };
      (this._listeners[t.name] && this._listeners[t.name].forEach((s) => _(s)),
        (l = this._listeners["*"]) === null || l === void 0 || l.forEach(_));
    }
    _setStatus(t, l) {
      ((this.loadingStatus = t),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: t, values: l }));
    }
    _enqueueExposure(t, l, _) {
      if (_?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(l);
    }
    _memoize(t, l) {
      return (_, s) => {
        if (this._options.disableEvaluationMemoization) return l(_, s);
        const b = (0, d.createMemoKey)(t, _, s);
        return b
          ? (b in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[b] = l(_, s))),
            this._memoCache[b])
          : l(_, s);
      };
    }
  };
  Ae.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, S._isServerEnv)()) return;
    const _ = (0, m._getStatsigGlobal)(),
      s = (l = _.instances) !== null && l !== void 0 ? l : {},
      b = t;
    (s[r] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[r] = b),
      _.firstInstance || (_.firstInstance = b),
      (_.instances = s),
      (__STATSIG__ = _));
  }
  return Ae;
}
var it = {},
  Br;
function Bi() {
  return (
    Br ||
      ((Br = 1),
      Object.defineProperty(it, "__esModule", { value: !0 }),
      (it.DataAdapterCachePrefix = void 0),
      (it.DataAdapterCachePrefix = "statsig.cached")),
    it
  );
}
var $t = {},
  Gr;
function Gi() {
  return (Gr || ((Gr = 1), Object.defineProperty($t, "__esModule", { value: !0 })), $t);
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
  const e = J(),
    m = un();
  function c(u, a, n, o) {
    var i;
    return {
      name: u,
      details: a,
      ruleID: (i = n?.rule_id) !== null && i !== void 0 ? i : "",
      __evaluation: n,
      value: o,
    };
  }
  function h(u, a, n) {
    var o;
    return Object.assign(Object.assign({}, c(u, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeFeatureGate = h;
  function v(u, a, n) {
    var o, i;
    const r = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(u, a, n, r)), {
      idType: (i = n?.id_type) !== null && i !== void 0 ? i : null,
      get: y(u, n?.value),
    });
  }
  H._makeDynamicConfig = v;
  function d(u, a, n) {
    var o;
    const i = v(u, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeExperiment = d;
  function S(u, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, c(u, a, n, void 0)), {
      get: y(u, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  H._makeLayer = S;
  function p(u, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, u), a), { get: y(u.name, n, o) });
  }
  H._mergeOverride = p;
  function y(u, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, m._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${u}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((H._makeTypedGet = y), H);
}
var en = {},
  zr;
function zi() {
  return (zr || ((zr = 1), Object.defineProperty(en, "__esModule", { value: !0 })), en);
}
var je = {},
  Jr;
function Ji() {
  if (Jr) return je;
  ((Jr = 1),
    Object.defineProperty(je, "__esModule", { value: !0 }),
    (je.UPDATE_DETAIL_ERROR_MESSAGES = je.createUpdateDetails = void 0));
  const e = (m, c, h, v, d, S) => ({
    duration: h,
    source: c,
    success: m,
    error: v,
    sourceUrl: d,
    warnings: S,
  });
  return (
    (je.createUpdateDetails = e),
    (je.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    je
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
              ? function (u, a, n, o) {
                  o === void 0 && (o = n);
                  var i = Object.getOwnPropertyDescriptor(a, n);
                  ((!i || ("get" in i ? !a.__esModule : i.writable || i.configurable)) &&
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(u, o, i));
                }
              : function (u, a, n, o) {
                  (o === void 0 && (o = n), (u[o] = a[n]));
                }),
          c =
            (ke && ke.__exportStar) ||
            function (u, a) {
              for (var n in u)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && m(a, u, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          le());
        const h = le(),
          v = nn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const d = ii();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return d.EventLogger;
          },
        });
        const S = J();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return S.Log;
          },
        });
        const p = at(),
          y = ce();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return y.Storage;
          },
        }),
          c(le(), e),
          c(_t(), e),
          c(Ci(), e),
          c(Ti(), e),
          c(nn(), e),
          c(Ri(), e),
          c(ai(), e),
          c(Mi(), e),
          c(Ui(), e),
          c(Be(), e),
          c(Li(), e),
          c(J(), e),
          c(li(), e),
          c(gt(), e),
          c(ji(), e),
          c(Ni(), e),
          c(Fi(), e),
          c(de(), e),
          c(_n(), e),
          c(gn(), e),
          c(qi(), e),
          c(vt(), e),
          c(Ki(), e),
          c(ci(), e),
          c(Bi(), e),
          c(ni(), e),
          c(at(), e),
          c(ft(), e),
          c(Gi(), e),
          c(Vi(), e),
          c(zi(), e),
          c(oi(), e),
          c(ce(), e),
          c(si(), e),
          c(un(), e),
          c(ri(), e),
          c(dn(), e),
          c(cn(), e),
          c(Ji(), e),
          c(ui(), e),
          Object.assign((0, h._getStatsigGlobal)(), { Log: S.Log, SDK_VERSION: p.SDK_VERSION }));
      })(ke)),
    ke
  );
}
var no = Wi();
export { xi as a, Wi as b, ot as c, Hi as g, Qi as r, no as s };
