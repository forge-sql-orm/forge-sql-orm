var at =
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
  var S = e.default;
  if (typeof S == "function") {
    var c = function y() {
      var v = !1;
      try {
        v = this instanceof y;
      } catch {}
      return v ? Reflect.construct(S, arguments, this.constructor) : S.apply(this, arguments);
    };
    c.prototype = S.prototype;
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
var ve = {},
  mt = {},
  St = {},
  fn;
function Q() {
  return (
    fn ||
      ((fn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const S = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function g(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class h {
          static info(...m) {
            h.level >= e.LogLevel.Info && console.info(c, ...g(m));
          }
          static debug(...m) {
            h.level >= e.LogLevel.Debug && console.debug(S, ...g(m));
          }
          static warn(...m) {
            h.level >= e.LogLevel.Warn && console.warn(y, ...g(m));
          }
          static error(...m) {
            h.level >= e.LogLevel.Error && console.error(v, ...g(m));
          }
        }
        ((e.Log = h), (h.level = e.LogLevel.Warn));
      })(St)),
    St
  );
}
var vn;
function ue() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        var S, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = Q(),
          g = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = g;
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
        const m = "__STATSIG__",
          u = typeof window < "u" ? window : {},
          a = typeof at < "u" ? at : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (S = u[m]) !== null && S !== void 0 ? S : a[m]) !== null && c !== void 0
                ? c
                : n[m]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((u[m] = o), (a[m] = o), (n[m] = o));
      })(mt)),
    mt
  );
}
var bt = {},
  hn;
function nn() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const S = new Map(),
          c = "start",
          y = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (u) => S.get(u),
          _markInitOverallStart: (u) => {
            b(u, g({}, c, "overall"));
          },
          _markInitOverallEnd: (u, a, n) => {
            b(
              u,
              g(
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
          _markInitNetworkReqStart: (u, a) => {
            b(u, g(a, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (u, a) => {
            b(u, g(a, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (u) => {
            b(u, g({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (u, a) => {
            b(u, g(a, y, "initialize", "process"));
          },
          _clearMarkers: (u) => {
            S.delete(u);
          },
          _formatError(u) {
            if (u && typeof u == "object")
              return { code: m(u, "code"), name: m(u, "name"), message: m(u, "message") };
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
            const t = h(u, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function g(u, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, u);
        }
        function h(u, a) {
          return { eventName: v, user: u, value: null, metadata: a, time: Date.now() };
        }
        function b(u, a) {
          var n;
          const o = (n = S.get(u)) !== null && n !== void 0 ? n : [];
          (o.push(a), S.set(u, o));
        }
        function m(u, a) {
          if (a in u) return u[a];
        }
      })(bt)),
    bt
  );
}
var he = {},
  ye = {},
  Et = {},
  me = {},
  yn;
function on() {
  if (yn) return me;
  ((yn = 1),
    Object.defineProperty(me, "__esModule", { value: !0 }),
    (me._isTypeMatch = me._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  me._typeOf = e;
  function S(c, y) {
    const v = (g) => (Array.isArray(g) ? "array" : typeof g);
    return v(c) === v(y);
  }
  return ((me._isTypeMatch = S), me);
}
var mn;
function Ke() {
  return (
    mn ||
      ((mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const S = on(),
          c = (g) => {
            let h = 0;
            for (let b = 0; b < g.length; b++) {
              const m = g.charCodeAt(b);
              ((h = (h << 5) - h + m), (h = h & h));
            }
            return String(h >>> 0);
          };
        e._DJB2 = c;
        const y = (g, h) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(g, h)));
        e._DJB2Object = y;
        const v = (g, h) => {
          if (g == null) return null;
          const b = Object.keys(g).sort(),
            m = {};
          return (
            b.forEach((u) => {
              const a = g[u];
              if (h === 0 || (0, S._typeOf)(a) !== "object") {
                m[u] = a;
                return;
              }
              m[u] = (0, e._getSortedObject)(a, h != null ? h - 1 : h);
            }),
            m
          );
        };
        e._getSortedObject = v;
      })(Et)),
    Et
  );
}
var Sn;
function ct() {
  if (Sn) return ye;
  ((Sn = 1),
    Object.defineProperty(ye, "__esModule", { value: !0 }),
    (ye._getStorageKey = ye._getUserStorageKey = void 0));
  const e = Ke();
  function S(y, v, g) {
    var h;
    if (g) return g(y, v);
    const b = v && v.customIDs ? v.customIDs : {},
      m = [
        `uid:${(h = v?.userID) !== null && h !== void 0 ? h : ""}`,
        `cids:${Object.keys(b)
          .sort((u, a) => u.localeCompare(a))
          .map((u) => `${u}-${b[u]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(m.join("|"));
  }
  ye._getUserStorageKey = S;
  function c(y, v, g) {
    return v ? S(y, v, g) : (0, e._DJB2)(`k:${y}`);
  }
  return ((ye._getStorageKey = c), ye);
}
var pt = {},
  bn;
function dt() {
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
      })(pt)),
    pt
  );
}
var Dt = {},
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
        const c = () => {
          var m;
          const u = (0, e._getWindowSafe)();
          return (m = u?.document) !== null && m !== void 0 ? m : null;
        };
        e._getDocumentSafe = c;
        const y = () => {
          if ((0, e._getDocumentSafe)() !== null) return !1;
          const m =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || m;
        };
        e._isServerEnv = y;
        const v = (m, u) => {
          const a = (0, e._getWindowSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(m, u);
        };
        e._addWindowEventListenerSafe = v;
        const g = (m, u) => {
          const a = (0, e._getDocumentSafe)();
          typeof a?.addEventListener == "function" && a.addEventListener(m, u);
        };
        e._addDocumentEventListenerSafe = g;
        const h = () => {
          var m;
          try {
            return (m = (0, e._getWindowSafe)()) === null || m === void 0
              ? void 0
              : m.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        e._getCurrentPageUrlSafe = h;
        const b = () => {
          const m = (0, e._getWindowSafe)();
          return m && "onpagehide" in m ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = b;
      })(Dt)),
    Dt
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
    S = "statsig::gate_exposure",
    c = "statsig::layer_exposure",
    y = (a, n, o, i, r) => (
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
    v = ({ eventName: a }) => a === S || a === e || a === c;
  X._isExposureEvent = v;
  const g = (a, n, o) => {
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
  X._createGateExposure = g;
  function h(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  X._mapExposures = h;
  const b = (a, n, o) => {
    var i, r, t, l;
    const _ = { config: n.name, ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (_.configVersion = n.__evaluation.version),
      ((r = n.__evaluation) === null || r === void 0 ? void 0 : r.passed) != null &&
        (_.rulePassed = String(n.__evaluation.passed)),
      y(
        e,
        a,
        n.details,
        _,
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
  const m = (a, n, o, i) => {
    var r, t, l, _, s, p;
    const f = n.__evaluation,
      d = ((r = f?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let E = "",
      k = (t = f?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    d &&
      ((E = (l = f.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (k = f.secondary_exposures));
    const I = (_ = n.__evaluation) === null || _ === void 0 ? void 0 : _.parameter_rule_ids,
      U = {
        config: n.name,
        parameterName: o,
        ruleID: (s = I?.[o]) !== null && s !== void 0 ? s : n.ruleID,
        allocatedExperiment: E,
        isExplicitParameter: String(d),
      };
    return (
      ((p = n.__evaluation) === null || p === void 0 ? void 0 : p.version) != null &&
        (U.configVersion = n.__evaluation.version),
      y(c, a, n.details, U, h(k, i))
    );
  };
  X._createLayerParameterExposure = m;
  const u = (a, n) => (
    (n.reason = a.reason),
    a.lcut && (n.lcut = String(a.lcut)),
    a.receivedAt && (n.receivedAt = String(a.receivedAt)),
    n
  );
  return X;
}
var Se = {},
  Dn;
function _t() {
  return (
    Dn ||
      ((Dn = 1),
      Object.defineProperty(Se, "__esModule", { value: !0 }),
      (Se.LoggingEnabledOption = Se.LogEventCompressionMode = void 0),
      (Se.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (Se.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    Se
  );
}
var kt = {},
  kn;
function de() {
  return (
    kn ||
      ((kn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const S = Q(),
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
        let g = null;
        try {
          const n = (0, c._getWindowSafe)();
          n &&
            n.localStorage &&
            typeof n.localStorage.getItem == "function" &&
            (g = {
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
        let h = g ?? v,
          b = h;
        function m(n) {
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
          getItem: (n) => m(() => b.getItem(n)),
          setItem: (n, o) => m(() => b.setItem(n, o)),
          removeItem: (n) => b.removeItem(n),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (n) => {
            ((h = n), (b = n));
          },
          _setDisabled: (n) => {
            n ? (b = v) : (b = h);
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
      })(kt)),
    kt
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
    S = dt(),
    c = {
      [S.Endpoint._initialize]: "i",
      [S.Endpoint._rgstr]: "e",
      [S.Endpoint._download_config_specs]: "d",
    };
  class y {
    constructor(g, h, b, m) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = g),
        (this.endpointDnsKey = c[g]),
        h && (this.customUrl = h),
        !h && b && (this.customUrl = b.endsWith("/") ? `${b}${g}` : `${b}/${g}`),
        m && (this.fallbackUrls = m));
      const u = S.NetworkDefault[g];
      this.defaultUrl = `${u}/${g}`;
    }
    getUrl() {
      var g;
      return (g = this.customUrl) !== null && g !== void 0 ? g : this.defaultUrl;
    }
    getChecksum() {
      var g;
      const h = ((g = this.fallbackUrls) !== null && g !== void 0 ? g : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + h);
    }
  }
  return ((Ge.UrlConfiguration = y), Ge);
}
var wt = {},
  In;
function sn() {
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
          c = "foreground",
          y = "background",
          v = [];
        let g = c,
          h = !1;
        const b = () => g === c;
        e._isCurrentlyVisible = b;
        const m = () => h;
        e._isUnloading = m;
        const u = (n) => {
          v.unshift(n);
        };
        e._subscribeToVisiblityChanged = u;
        const a = (n) => {
          n !== g && ((g = n), v.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, S._addWindowEventListenerSafe)("focus", () => {
            ((h = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, S._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, S._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : y);
          }),
          (0, S._addWindowEventListenerSafe)((0, S._getUnloadEvent)(), () => {
            ((h = !0), (0, e._notifyVisibilityChanged)(y));
          }));
      })(wt)),
    wt
  );
}
var On;
function Qr() {
  if (On) return he;
  On = 1;
  var e =
    (he && he.__awaiter) ||
    function (f, d, E, k) {
      function I(U) {
        return U instanceof E
          ? U
          : new E(function (M) {
              M(U);
            });
      }
      return new (E || (E = Promise))(function (U, M) {
        function P(B) {
          try {
            N(k.next(B));
          } catch (O) {
            M(O);
          }
        }
        function z(B) {
          try {
            N(k.throw(B));
          } catch (O) {
            M(O);
          }
        }
        function N(B) {
          B.done ? U(B.value) : I(B.value).then(P, z);
        }
        N((k = k.apply(f, d || [])).next());
      });
    };
  (Object.defineProperty(he, "__esModule", { value: !0 }), (he.EventLogger = void 0));
  const S = ct(),
    c = Ke(),
    y = Q(),
    v = dt(),
    g = Ne(),
    h = xr(),
    b = _t(),
    m = de(),
    u = Hr(),
    a = sn(),
    n = 100,
    o = 1e4,
    i = 1e3,
    r = 6e5,
    t = 500,
    l = 200,
    _ = {},
    s = { Startup: "startup", GainedFocus: "gained_focus" };
  class p {
    static _safeFlushAndForget(d) {
      var E;
      (E = _[d]) === null || E === void 0 || E.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(d) {
      var E;
      (E = _[d]) === null || E === void 0 || E._retryFailedLogs(s.GainedFocus);
    }
    constructor(d, E, k, I) {
      var U, M;
      ((this._sdkKey = d),
        (this._emitter = E),
        (this._network = k),
        (this._options = I),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (U = I?.loggingEnabled) !== null && U !== void 0
            ? U
            : I?.disableLogging === !0
              ? b.LoggingEnabledOption.disabled
              : b.LoggingEnabledOption.browserOnly),
        I?.loggingEnabled &&
          I.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (M = I?.loggingBufferMaxSize) !== null && M !== void 0 ? M : n));
      const P = I?.networkConfig;
      this._logEventUrlConfig = new u.UrlConfiguration(
        v.Endpoint._rgstr,
        P?.logEventUrl,
        P?.api,
        P?.logEventFallbackUrls,
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
        this._queue.length > this._maxQueueSize && p._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(d) {
      var E;
      const k = (E = this._nonExposedChecks[d]) !== null && E !== void 0 ? E : 0;
      this._nonExposedChecks[d] = k + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var d;
      const E = (0, g._isServerEnv)();
      (E &&
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always") ||
        ((_[this._sdkKey] = this),
        E ||
          (0, a._subscribeToVisiblityChanged)((k) => {
            k === "background"
              ? p._safeFlushAndForget(this._sdkKey)
              : k === "foreground" && p._safeRetryFailedLogs(this._sdkKey);
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
        const d = this._queue;
        ((this._queue = []), yield this._sendEvents(d));
      });
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush ||
        ((this._hasRunQuickFlush = !0),
        !(Date.now() - this._creationTime > l) &&
          setTimeout(() => p._safeFlushAndForget(this._sdkKey), l));
    }
    _shouldLogEvent(d) {
      var E;
      if (
        ((E = this._options) === null || E === void 0 ? void 0 : E.loggingEnabled) !== "always" &&
        (0, g._isServerEnv)()
      )
        return !1;
      if (!(0, h._isExposureEvent)(d)) return !0;
      const k = d.user ? d.user : { statsigEnvironment: void 0 },
        I = (0, S._getUserStorageKey)(this._sdkKey, k),
        U = d.metadata ? d.metadata : {},
        M = [
          d.eventName,
          I,
          U.gate,
          U.config,
          U.ruleID,
          U.allocatedExperiment,
          U.parameterName,
          String(U.isExplicitParameter),
          U.reason,
        ].join("|"),
        P = this._lastExposureTimeMap[M],
        z = Date.now();
      return P && z - P < r
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[M] = z),
          !0);
    }
    _sendEvents(d) {
      return e(this, void 0, void 0, function* () {
        var E, k;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(d), !1);
        try {
          const U =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((k = (E = this._options) === null || E === void 0 ? void 0 : E.networkConfig) ===
              null || k === void 0
              ? void 0
              : k.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: d }),
            (U ? this._sendEventsViaBeacon(d) : yield this._sendEventsViaPost(d)).success
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
        var E;
        const k = yield this._network.post(this._getRequestData(d)),
          I = (E = k?.code) !== null && E !== void 0 ? E : -1;
        return { success: I >= 200 && I < 300 };
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
      const E = this._getStorageKey();
      try {
        (0, m._setObjectInStorage)(E, d);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(d) {
      const E = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        m.Storage.isReady() || (yield m.Storage.isReadyResolver());
        const k = (0, m._getObjectFromStorage)(E);
        if (!k) return;
        (d === s.Startup && m.Storage.removeItem(E),
          (yield this._sendEvents(k)) && d === s.GainedFocus && m.Storage.removeItem(E));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(d) {
      d.user && ((d.user = Object.assign({}, d.user)), delete d.user.privateAttributes);
      const E = {},
        k = this._getCurrentPageUrl();
      k && (E.statsigMetadata = { currentPage: k });
      const I = Object.assign(Object.assign({}, d), E);
      (y.Log.debug("Enqueued Event:", I), this._queue.push(I));
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
        return (0, g._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var d, E;
      const k =
          (E = (d = this._options) === null || d === void 0 ? void 0 : d.loggingIntervalMs) !==
            null && E !== void 0
            ? E
            : o,
        I = setInterval(() => {
          const U = _[this._sdkKey];
          !U || U._flushIntervalId !== I ? clearInterval(I) : p._safeFlushAndForget(this._sdkKey);
        }, k);
      this._flushIntervalId = I;
    }
  }
  return ((he.EventLogger = p), he);
}
var It = {},
  Cn;
function lt() {
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
          add: (c) => {
            S = Object.assign(Object.assign({}, S), c);
          },
        };
      })(It)),
    It
  );
}
var Ot = {},
  Tn;
function di() {
  return (Tn || ((Tn = 1), Object.defineProperty(Ot, "__esModule", { value: !0 })), Ot);
}
var ne = {},
  Ve = {},
  ze = {},
  Un;
function an() {
  if (Un) return ze;
  ((Un = 1), Object.defineProperty(ze, "__esModule", { value: !0 }), (ze.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let S = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let g = Math.random() * 16;
        return (
          S > 0
            ? ((g = ((S + g) % 16) | 0), (S = Math.floor(S / 16)))
            : ((g = ((c + g) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? g : (g & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((ze.getUUID = e), ze);
}
var Rn;
function gt() {
  if (Rn) return Ve;
  ((Rn = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.StableID = void 0));
  const e = ct(),
    S = Q(),
    c = Ne(),
    y = de(),
    v = an(),
    g = {},
    h = {},
    b = {};
  Ve.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (r) => {
      if (b[r]) return null;
      if (g[r] != null) return g[r];
      let t = null;
      return (
        (t = n(r)),
        t != null
          ? ((g[r] = t), u(t, r), t)
          : ((t = a(r)), t == null && (t = (0, v.getUUID)()), u(t, r), o(t, r), (g[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((g[t] = r), u(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      h[r] = t;
    },
    _setDisabled: (r, t) => {
      b[r] = t;
    },
  };
  function m(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function u(r, t) {
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
    if (!h[r] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [_, s] = l.trim().split("=");
      if (_ === i(r)) return decodeURIComponent(s);
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
var be = {},
  Mn;
function Xr() {
  if (Mn) return be;
  ((Mn = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be._getFullUserHash = be._normalizeUser = void 0));
  const e = Ke(),
    S = Q();
  function c(v, g, h) {
    try {
      const b = JSON.parse(JSON.stringify(v));
      return (
        g != null && g.environment != null
          ? (b.statsigEnvironment = g.environment)
          : h != null && (b.statsigEnvironment = { tier: h }),
        b
      );
    } catch {
      return (S.Log.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 });
    }
  }
  be._normalizeUser = c;
  function y(v) {
    return v ? (0, e._DJB2Object)(v) : null;
  }
  return ((be._getFullUserHash = y), be);
}
var Je = {},
  Ln;
function Yr() {
  if (Ln) return Je;
  ((Ln = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je._typedJsonParse = void 0));
  const e = Q();
  function S(c, y, v) {
    try {
      const g = JSON.parse(c);
      if (g && typeof g == "object" && y in g) return g;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
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
          : new i(function (_) {
              _(l);
            });
      }
      return new (i || (i = Promise))(function (l, _) {
        function s(d) {
          try {
            f(r.next(d));
          } catch (E) {
            _(E);
          }
        }
        function p(d) {
          try {
            f(r.throw(d));
          } catch (E) {
            _(E);
          }
        }
        function f(d) {
          d.done ? l(d.value) : t(d.value).then(s, p);
        }
        f((r = r.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._makeDataAdapterResult = ne.DataAdapterCore = void 0));
  const S = Q(),
    c = gt(),
    y = Xr(),
    v = de(),
    g = Yr(),
    h = 10;
  class b {
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
          _ = o != null && this._isCachedResultValidFor204(o, i),
          s = yield this._fetchFromNetwork(l, i, r, _);
        if (!s) return (S.Log.debug("No response returned for latest value"), null);
        const p = (0, g._typedJsonParse)(s, "has_updates", "Response"),
          f = this._getSdkKey(),
          d = c.StableID.get(f);
        let E = null;
        if (p?.has_updates === !0) E = m("Network", s, d, i);
        else if (l && p?.has_updates === !1) E = m("NetworkNotModified", l, d, i);
        else return null;
        const k = this._getCacheKey(i);
        return (this._inMemoryCache.add(k, E), this._writeToCache(k, E), E);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (S.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(o) {
      var i;
      const r = (i = v.Storage.getItem) === null || i === void 0 ? void 0 : i.call(v.Storage, o);
      if (r == null) return null;
      const t = (0, g._typedJsonParse)(r, "source", "Cached Result");
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
        ? (S.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
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
var Ct = {},
  jn;
function gi() {
  return (jn || ((jn = 1), Object.defineProperty(Ct, "__esModule", { value: !0 })), Ct);
}
var We = {},
  xe = {},
  An;
function ln() {
  if (An) return xe;
  ((An = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.SDKType = void 0));
  const e = {};
  let S;
  return (
    (xe.SDKType = {
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
    xe
  );
}
var Nn;
function Zr() {
  return (
    Nn ||
      ((Nn = 1),
      (function (e) {
        var S =
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
              function s(d) {
                try {
                  f(r.next(d));
                } catch (E) {
                  _(E);
                }
              }
              function p(d) {
                try {
                  f(r.throw(d));
                } catch (E) {
                  _(E);
                }
              }
              function f(d) {
                d.done ? l(d.value) : t(d.value).then(s, p);
              }
              f((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = Q(),
          y = ln(),
          v = lt();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const g = "[Statsig] UnknownError";
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
                S(this, void 0, void 0, function* () {
                  var t, l, _, s, p, f, d;
                  const E = i || Error(g),
                    k = E instanceof Error,
                    I = k ? E.name : "No Name",
                    U = b(E);
                  if (((this._lastSeenError = U), this._seen.has(I))) return;
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
                  const M = y.SDKType._get(this._sdkKey),
                    P = v.StatsigMetadataProvider.get(),
                    z = k ? E.stack : m(E),
                    N = Object.assign(
                      { tag: o, exception: I, info: z, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, P), { sdkType: M }),
                    );
                  (yield (
                    (f =
                      (p =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || p === void 0
                        ? void 0
                        : p.networkOverrideFunc) !== null && f !== void 0
                      ? f
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(M),
                      "STATSIG-SDK-VERSION": String(P.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(N),
                  }),
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: i, tag: o }));
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
        function m(n) {
          try {
            return JSON.stringify(n);
          } catch {
            return g;
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
var Tt = {},
  Fn;
function fi() {
  return (Fn || ((Fn = 1), Object.defineProperty(Tt, "__esModule", { value: !0 })), Tt);
}
var Ut = {},
  qn;
function vi() {
  return (qn || ((qn = 1), Object.defineProperty(Ut, "__esModule", { value: !0 })), Ut);
}
var Rt = {},
  Kn;
function hi() {
  return (Kn || ((Kn = 1), Object.defineProperty(Rt, "__esModule", { value: !0 })), Rt);
}
var Ee = {},
  Bn;
function $r() {
  if (Bn) return Ee;
  ((Bn = 1),
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
    S = new Set(["userPersistedValues"]);
  function c(y, v, g) {
    let h = `${y}|${v}`;
    if (!g) return h;
    for (const b of Object.keys(g)) {
      if (S.has(b)) return;
      e.has(b) ? (h += `|${b}=true`) : (h += `|${b}=${g[b]}`);
    }
    return h;
  }
  return ((Ee.createMemoKey = c), Ee);
}
var pe = {},
  re = {},
  De = {},
  Gn;
function yi() {
  if (Gn) return De;
  Gn = 1;
  var e =
    (De && De.__awaiter) ||
    function (b, m, u, a) {
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
        l((a = a.apply(b, m || [])).next());
      });
    };
  (Object.defineProperty(De, "__esModule", { value: !0 }), (De._fetchTxtRecords = void 0));
  const S = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    v = 200;
  function g(b) {
    return e(this, void 0, void 0, function* () {
      const m = yield b(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: S,
      });
      if (!m.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const u = yield m.arrayBuffer(),
        a = new Uint8Array(u);
      return h(a);
    });
  }
  De._fetchTxtRecords = g;
  function h(b) {
    const m = b.findIndex(
      (a, n) =>
        n < v && String.fromCharCode(a) === "=" && y.includes(String.fromCharCode(b[n - 1])),
    );
    if (m === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let u = "";
    for (let a = m - 1; a < b.length; a++) u += String.fromCharCode(b[a]);
    return u.split(",");
  }
  return De;
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
          : new t(function (p) {
              p(s);
            });
      }
      return new (t || (t = Promise))(function (s, p) {
        function f(k) {
          try {
            E(l.next(k));
          } catch (I) {
            p(I);
          }
        }
        function d(k) {
          try {
            E(l.throw(k));
          } catch (I) {
            p(I);
          }
        }
        function E(k) {
          k.done ? s(k.value) : _(k.value).then(f, d);
        }
        E((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }),
    (re._isDomainFailure = re.NetworkFallbackResolver = void 0));
  const S = yi(),
    c = Ke(),
    y = Q(),
    v = de(),
    g = 10080 * 60 * 1e3,
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
      const _ = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      _ &&
        ((_.expiryTime = Date.now() + g),
        a(r, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: _ })));
    }
    getActiveFallbackUrl(r, t) {
      var l, _;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = s));
      const p = s[t.endpoint];
      return !p ||
        Date.now() > ((_ = p.expiryTime) !== null && _ !== void 0 ? _ : 0) ||
        t.getChecksum() !== p.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), a(r, this._fallbackInfo), null)
        : p.url
          ? p.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, _) {
      return e(this, void 0, void 0, function* () {
        var s, p;
        try {
          if (!m(l, _)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            E = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              d,
            );
          return E ? (this._updateFallbackInfoWithNewUrl(r, t, E), !0) : !1;
        } catch (f) {
          return (
            (p = this._errorBoundary) === null ||
              p === void 0 ||
              p.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(r, t, l) {
      var _, s, p;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + g,
          previous: [],
        },
        d = t.endpoint,
        E = (_ = this._fallbackInfo) === null || _ === void 0 ? void 0 : _[d];
      (E && f.previous.push(...E.previous), f.previous.length > 10 && (f.previous = []));
      const k =
        (p = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[d]) === null ||
        p === void 0
          ? void 0
          : p.url;
      (k != null && f.previous.push(k),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: f })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + h;
        const _ = [],
          s = yield (0, S._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          p = o(r.defaultUrl);
        for (const f of s) {
          if (!f.startsWith(r.endpointDnsKey + "=")) continue;
          const d = f.split("=");
          if (d.length > 1) {
            let E = d[1];
            (E.endsWith("/") && (E = E.slice(0, -1)), _.push(`https://${E}${p}`));
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
      let p = null;
      for (const f of t) {
        const d = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!_.has(f) && d !== s) {
          p = d;
          break;
        }
      }
      return p;
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
    He
  );
}
var Mt = {},
  Jn;
function un() {
  return (
    Jn ||
      ((Jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const S = ue(),
          c = ct(),
          y = Q(),
          v = de(),
          g = an(),
          h = 1800 * 1e3,
          b = 14400 * 1e3,
          m = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s) => {
              m[s] == null && (m[s] = u(s));
              const p = m[s];
              return n(p);
            },
            overrideInitialSessionID: (s, p) => {
              m[p] = a(s, p);
            },
          }));
        function u(s) {
          let p = _(s);
          const f = Date.now();
          return (
            p || (p = { sessionID: (0, g.getUUID)(), startTime: f, lastUpdate: f }),
            { data: p, sdkKey: s }
          );
        }
        function a(s, p) {
          const f = Date.now();
          return { data: { sessionID: s, startTime: f, lastUpdate: f }, sdkKey: p };
        }
        function n(s) {
          const p = Date.now(),
            f = s.data,
            d = s.sdkKey;
          if (i(f) || r(f)) {
            ((f.sessionID = (0, g.getUUID)()), (f.startTime = p));
            const k = __STATSIG__ == null ? void 0 : __STATSIG__.instance(d);
            k && k.$emt({ name: "session_expired" });
          }
          ((f.lastUpdate = p),
            l(f, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const E = p - f.startTime;
          return ((s.idleTimeoutID = o(d, h)), (s.ageTimeoutID = o(d, b - E)), s);
        }
        function o(s, p) {
          return setTimeout(() => {
            var f;
            const d =
              (f = (0, S._getStatsigGlobal)()) === null || f === void 0 ? void 0 : f.instance(s);
            d && d.$emt({ name: "session_expired" });
          }, p);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > h;
        }
        function r({ startTime: s }) {
          return Date.now() - s > b;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function l(s, p) {
          const f = t(p);
          try {
            (0, v._setObjectInStorage)(f, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function _(s) {
          const p = t(s);
          return (0, v._getObjectFromStorage)(p);
        }
      })(Mt)),
    Mt
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
  if (xn) return pe;
  xn = 1;
  var e =
    (pe && pe.__awaiter) ||
    function (O, D, w, C) {
      function T(R) {
        return R instanceof w
          ? R
          : new w(function (L) {
              L(R);
            });
      }
      return new (w || (w = Promise))(function (R, L) {
        function $(j) {
          try {
            F(C.next(j));
          } catch (A) {
            L(A);
          }
        }
        function q(j) {
          try {
            F(C.throw(j));
          } catch (A) {
            L(A);
          }
        }
        function F(j) {
          j.done ? R(j.value) : T(j.value).then($, q);
        }
        F((C = C.apply(O, D || [])).next());
      });
    };
  (Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.NetworkCore = void 0), ue());
  const S = ue(),
    c = nn(),
    y = Q(),
    v = dt(),
    g = mi(),
    h = ei(),
    b = ln(),
    m = Ne(),
    u = un(),
    a = gt(),
    n = ti(),
    o = lt(),
    i = _t(),
    r = sn(),
    t = 1e4,
    l = 500,
    _ = 3e4,
    s = 1e3,
    p = 50,
    f = p / s,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class E {
    constructor(D, w) {
      ((this._emitter = w),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        D && (this._options = D),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new g.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(D)));
    }
    setLogEventCompressionMode(D) {
      this._options.logEventCompressionMode = D;
    }
    setErrorBoundary(D) {
      ((this._errorBoundary = D),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(D));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const D = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), D);
    }
    beacon(D) {
      if (!k(D)) return !1;
      const w = this._getInternalRequestArgs("POST", D),
        C = this._getPopulatedURL(w),
        T = navigator;
      return T.sendBeacon.bind(T)(C, w.body);
    }
    post(D) {
      return e(this, void 0, void 0, function* () {
        const w = this._getInternalRequestArgs("POST", D);
        return (this._tryEncodeBody(w), yield this._tryToCompressBody(w), this._sendRequest(w));
      });
    }
    get(D) {
      const w = this._getInternalRequestArgs("GET", D);
      return this._sendRequest(w);
    }
    _sendRequest(D) {
      return e(this, void 0, void 0, function* () {
        var w, C, T, R;
        if (!k(D) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: L, body: $, retries: q, attempt: F } = D,
          j = D.urlConfig.endpoint;
        if (this._isRateLimited(j))
          return (
            y.Log.warn(
              `Request to ${j} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const A = F ?? 1,
          G = typeof AbortController < "u" ? new AbortController() : null,
          W = setTimeout(() => {
            G?.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          K = this._getPopulatedURL(D);
        let Z = null;
        const le = (0, r._isUnloading)();
        try {
          const J = {
            method: L,
            body: $,
            headers: Object.assign({}, D.headers),
            signal: G?.signal,
            priority: D.priority,
            keepalive: le,
          };
          z(D, A);
          const ee = this._leakyBucket[j];
          if (
            (ee && ((ee.lastRequestTime = Date.now()), (this._leakyBucket[j] = ee)),
            (Z = yield (
              (w = this._netConfig.networkOverrideFunc) !== null && w !== void 0 ? w : fetch
            )(K, J)),
            clearTimeout(W),
            !Z.ok)
          ) {
            const ge = yield Z.text().catch(() => "No Text"),
              fe = new Error(`NetworkError: ${K} ${ge}`);
            throw ((fe.name = "NetworkError"), fe);
          }
          const te = yield Z.text();
          return (
            N(D, Z, A, te),
            this._fallbackResolver.tryBumpExpiryTime(D.sdkKey, D.urlConfig),
            { body: te, code: Z.status }
          );
        } catch (J) {
          const ee = M(G, J),
            Fe = P(G);
          if (
            (N(D, Z, A, "", J),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              D.sdkKey,
              D.urlConfig,
              ee,
              Fe,
            )) &&
              (D.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(D.sdkKey, D.urlConfig)),
            !q || A > q || !d.has((C = Z?.status) !== null && C !== void 0 ? C : 500))
          ) {
            (T = this._emitter) === null ||
              T === void 0 ||
              T.call(this, {
                name: "error",
                error: J,
                tag: n.ErrorTag.NetworkError,
                requestArgs: D,
              });
            const ge = `A networking error occurred during ${L} request to ${K}.`;
            return (
              y.Log.error(ge, ee, J),
              (R = this._errorBoundary) === null || R === void 0 || R.attachErrorIfNoneExists(ge),
              null
            );
          }
          return (
            yield B(A),
            this._sendRequest(Object.assign(Object.assign({}, D), { retries: q, attempt: A + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(D) {
      let w = D?.logEventCompressionMode;
      return (
        !w && D?.disableCompression === !0 && (w = i.LogEventCompressionMode.Disabled),
        w || (w = i.LogEventCompressionMode.Enabled),
        w
      );
    }
    _isRateLimited(D) {
      var w;
      const C = Date.now(),
        T =
          (w = this._leakyBucket[D]) !== null && w !== void 0
            ? w
            : { count: 0, lastRequestTime: C },
        R = C - T.lastRequestTime,
        L = Math.floor(R * f);
      return (
        (T.count = Math.max(0, T.count - L)),
        T.count >= p
          ? !0
          : ((T.count += 1), (T.lastRequestTime = C), (this._leakyBucket[D] = T), !1)
      );
    }
    _getPopulatedURL(D) {
      var w;
      const C = (w = D.fallbackUrl) !== null && w !== void 0 ? w : D.urlConfig.getUrl();
      (D.urlConfig.endpoint === v.Endpoint._initialize ||
        D.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = C);
      const T = Object.assign(
          {
            [v.NetworkParam.SdkKey]: D.sdkKey,
            [v.NetworkParam.SdkType]: b.SDKType._get(D.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: u.SessionID.get(D.sdkKey),
          },
          D.params,
        ),
        R = Object.keys(T)
          .map((L) => `${encodeURIComponent(L)}=${encodeURIComponent(T[L])}`)
          .join("&");
      return `${C}${R ? `?${R}` : ""}`;
    }
    _tryEncodeBody(D) {
      var w;
      const C = (0, m._getWindowSafe)(),
        T = D.body;
      if (
        !(
          !D.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof T != "string" ||
          (0, S._getStatsigGlobalFlag)("no-encode") != null ||
          !C?.btoa
        )
      )
        try {
          ((D.body = C.btoa(T).split("").reverse().join("")),
            (D.params = Object.assign(
              Object.assign({}, (w = D.params) !== null && w !== void 0 ? w : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (R) {
          y.Log.warn(`Request encoding failed for ${D.urlConfig.getUrl()}`, R);
        }
    }
    _tryToCompressBody(D) {
      return e(this, void 0, void 0, function* () {
        var w;
        const C = D.body;
        if (!(typeof C != "string" || !U(D, this._options)))
          try {
            const T = new TextEncoder().encode(C),
              R = new CompressionStream("gzip"),
              L = R.writable.getWriter();
            (L.write(T).catch(y.Log.error), L.close().catch(y.Log.error));
            const $ = R.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const j = q.reduce((W, K) => W + K.length, 0),
              A = new Uint8Array(j);
            let G = 0;
            for (const W of q) (A.set(W, G), (G += W.length));
            ((D.body = A),
              (D.params = Object.assign(
                Object.assign({}, (w = D.params) !== null && w !== void 0 ? w : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (T) {
            y.Log.warn(`Request compression failed for ${D.urlConfig.getUrl()}`, T);
          }
      });
    }
    _getInternalRequestArgs(D, w) {
      const C = this._fallbackResolver.getActiveFallbackUrl(w.sdkKey, w.urlConfig),
        T = Object.assign(Object.assign({}, w), { method: D, fallbackUrl: C });
      return ("data" in w && I(T, w.data), T);
    }
  }
  pe.NetworkCore = E;
  const k = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    I = (O, D) => {
      const { sdkKey: w, fallbackUrl: C } = O,
        T = a.StableID.get(w),
        R = u.SessionID.get(w),
        L = b.SDKType._get(w);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, D), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: T,
            sessionID: R,
            sdkType: L,
            fallbackUrl: C,
          }),
        }),
      );
    };
  function U(O, D) {
    if (
      !O.isCompressable ||
      (0, S._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const w = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      C = h.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (D.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(w && !C);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function M(O, D) {
    return O?.signal.aborted && typeof O.signal.reason == "string"
      ? O.signal.reason
      : typeof D == "string"
        ? D
        : D instanceof Error
          ? `${D.name}: ${D.message}`
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
  function z(O, D) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: D });
  }
  function N(O, D, w, C, T) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(D, w, C, T));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((D) => setTimeout(D, Math.min(l * (O * O), _)));
    });
  }
  return pe;
}
var Lt = {},
  Hn;
function bi() {
  return (Hn || ((Hn = 1), Object.defineProperty(Lt, "__esModule", { value: !0 })), Lt);
}
var Pt = {},
  Qn;
function Ei() {
  return (Qn || ((Qn = 1), Object.defineProperty(Pt, "__esModule", { value: !0 })), Pt);
}
var ke = {},
  Xn;
function pi() {
  if (Xn) return ke;
  Xn = 1;
  var e =
    (ke && ke.__awaiter) ||
    function (r, t, l, _) {
      function s(p) {
        return p instanceof l
          ? p
          : new l(function (f) {
              f(p);
            });
      }
      return new (l || (l = Promise))(function (p, f) {
        function d(I) {
          try {
            k(_.next(I));
          } catch (U) {
            f(U);
          }
        }
        function E(I) {
          try {
            k(_.throw(I));
          } catch (U) {
            f(U);
          }
        }
        function k(I) {
          I.done ? p(I.value) : s(I.value).then(d, E);
        }
        k((_ = _.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.StatsigClientBase = void 0), ue());
  const S = ue(),
    c = Zr(),
    y = Qr(),
    v = Q(),
    g = $r(),
    h = Ne(),
    b = un(),
    m = gt(),
    u = _t(),
    a = de(),
    n = 3e3;
  class o {
    constructor(t, l, _, s) {
      var p, f, d, E;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const k = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && a.Storage._setDisabled(!0),
        s?.initialSessionID && b.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && a.Storage._setProvider(s.storageProvider),
        s?.enableCookies && m.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && m.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (p = s?.overrideAdapter) !== null && p !== void 0 ? p : null),
        (this._logger = new y.EventLogger(t, k, _, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, k)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        _.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, s, _),
        (this.storageProvider = a.Storage),
        (E =
          (d = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(f)) === null ||
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
          m.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        } catch (p) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, p);
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
        const p = (0, g.createMemoKey)(t, _, s);
        return p
          ? (p in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[p] = l(_, s))),
            this._memoCache[p])
          : l(_, s);
      };
    }
  }
  ke.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, h._isServerEnv)()) return;
    const _ = (0, S._getStatsigGlobal)(),
      s = (l = _.instances) !== null && l !== void 0 ? l : {},
      p = t;
    (s[r] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[r] = p),
      _.firstInstance || (_.firstInstance = p),
      (_.instances = s),
      (__STATSIG__ = _));
  }
  return ke;
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
var x = {},
  $n;
function wi() {
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
    S = on();
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
  function y(u, a, n) {
    var o;
    return Object.assign(Object.assign({}, c(u, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  x._makeFeatureGate = y;
  function v(u, a, n) {
    var o;
    const i = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(u, a, n, i)), { get: m(u, n?.value) });
  }
  x._makeDynamicConfig = v;
  function g(u, a, n) {
    var o;
    const i = v(u, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  x._makeExperiment = g;
  function h(u, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, c(u, a, n, void 0)), {
      get: m(u, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  x._makeLayer = h;
  function b(u, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, u), a), { get: m(u.name, n, o) });
  }
  x._mergeOverride = b;
  function m(u, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, S._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${u}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((x._makeTypedGet = m), x);
}
var At = {},
  er;
function Ii() {
  return (er || ((er = 1), Object.defineProperty(At, "__esModule", { value: !0 })), At);
}
var we = {},
  tr;
function Oi() {
  if (tr) return we;
  ((tr = 1),
    Object.defineProperty(we, "__esModule", { value: !0 }),
    (we.UPDATE_DETAIL_ERROR_MESSAGES = we.createUpdateDetails = void 0));
  const e = (S, c, y, v, g, h) => ({
    duration: y,
    source: c,
    success: S,
    error: v,
    sourceUrl: g,
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
        var S =
            (ve && ve.__createBinding) ||
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
            (ve && ve.__exportStar) ||
            function (u, a) {
              for (var n in u)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && S(a, u, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          ue());
        const y = ue(),
          v = nn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const g = Qr();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return g.EventLogger;
          },
        });
        const h = Q();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return h.Log;
          },
        });
        const b = lt(),
          m = de();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return m.Storage;
          },
        }),
          c(ue(), e),
          c(ct(), e),
          c(di(), e),
          c(_i(), e),
          c(nn(), e),
          c(gi(), e),
          c(Zr(), e),
          c(fi(), e),
          c(vi(), e),
          c(Ke(), e),
          c(hi(), e),
          c(Q(), e),
          c($r(), e),
          c(dt(), e),
          c(Si(), e),
          c(bi(), e),
          c(Ei(), e),
          c(Ne(), e),
          c(ln(), e),
          c(un(), e),
          c(gt(), e),
          c(pi(), e),
          c(ti(), e),
          c(Di(), e),
          c(xr(), e),
          c(lt(), e),
          c(_t(), e),
          c(ki(), e),
          c(wi(), e),
          c(Ii(), e),
          c(Xr(), e),
          c(de(), e),
          c(Yr(), e),
          c(on(), e),
          c(Hr(), e),
          c(an(), e),
          c(sn(), e),
          c(Oi(), e),
          c(ei(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: h.Log, SDK_VERSION: b.SDK_VERSION }));
      })(ve)),
    ve
  );
}
var Ie = {},
  Nt = {},
  Ft = {},
  rr;
function V() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Log = e.LogLevel = void 0));
        const S = " DEBUG ",
          c = "  INFO ",
          y = "  WARN ",
          v = " ERROR ";
        function g(b) {
          return (b.unshift("[Statsig]"), b);
        }
        e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class h {
          static info(...m) {
            h.level >= e.LogLevel.Info && console.info(c, ...g(m));
          }
          static debug(...m) {
            h.level >= e.LogLevel.Debug && console.debug(S, ...g(m));
          }
          static warn(...m) {
            h.level >= e.LogLevel.Warn && console.warn(y, ...g(m));
          }
          static error(...m) {
            h.level >= e.LogLevel.Error && console.error(v, ...g(m));
          }
        }
        ((e.Log = h), (h.level = e.LogLevel.Warn));
      })(Ft)),
    Ft
  );
}
var ir;
function ce() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        var S, c, y;
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getInstance = e._getStatsigGlobalFlag = e._getStatsigGlobal = void 0));
        const v = V(),
          g = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : o;
            } catch {
              return o;
            }
          };
        e._getStatsigGlobal = g;
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
        const m = "__STATSIG__",
          u = typeof window < "u" ? window : {},
          a = typeof at < "u" ? at : {},
          n = typeof globalThis < "u" ? globalThis : {},
          o =
            (y =
              (c = (S = u[m]) !== null && S !== void 0 ? S : a[m]) !== null && c !== void 0
                ? c
                : n[m]) !== null && y !== void 0
              ? y
              : { instance: e._getInstance };
        ((u[m] = o), (a[m] = o), (n[m] = o));
      })(Nt)),
    Nt
  );
}
var qt = {},
  or;
function rn() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diagnostics = void 0));
        const S = new Map(),
          c = "start",
          y = "end",
          v = "statsig::diagnostics";
        e.Diagnostics = {
          _getMarkers: (u) => S.get(u),
          _markInitOverallStart: (u) => {
            b(u, g({}, c, "overall"));
          },
          _markInitOverallEnd: (u, a, n) => {
            b(
              u,
              g(
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
          _markInitNetworkReqStart: (u, a) => {
            b(u, g(a, c, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (u, a) => {
            b(u, g(a, y, "initialize", "network_request"));
          },
          _markInitProcessStart: (u) => {
            b(u, g({}, c, "initialize", "process"));
          },
          _markInitProcessEnd: (u, a) => {
            b(u, g(a, y, "initialize", "process"));
          },
          _clearMarkers: (u) => {
            S.delete(u);
          },
          _formatError(u) {
            if (u && typeof u == "object")
              return { code: m(u, "code"), name: m(u, "name"), message: m(u, "message") };
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
            const t = h(u, { context: "initialize", markers: i.slice(), statsigOptions: o });
            return (a.enqueue(t), r);
          },
        };
        function g(u, a, n, o) {
          return Object.assign({ key: n, action: a, step: o, timestamp: Date.now() }, u);
        }
        function h(u, a) {
          return { eventName: v, user: u, value: null, metadata: a, time: Date.now() };
        }
        function b(u, a) {
          var n;
          const o = (n = S.get(u)) !== null && n !== void 0 ? n : [];
          (o.push(a), S.set(u, o));
        }
        function m(u, a) {
          if (a in u) return u[a];
        }
      })(qt)),
    qt
  );
}
var Oe = {},
  Ce = {},
  Kt = {},
  Te = {},
  sr;
function cn() {
  if (sr) return Te;
  ((sr = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te._isTypeMatch = Te._typeOf = void 0));
  function e(c) {
    return Array.isArray(c) ? "array" : typeof c;
  }
  Te._typeOf = e;
  function S(c, y) {
    const v = (g) => (Array.isArray(g) ? "array" : g === null ? "null" : typeof g);
    return v(c) === v(y);
  }
  return ((Te._isTypeMatch = S), Te);
}
var ar;
function Be() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0));
        const S = cn(),
          c = (g) => {
            let h = 0;
            for (let b = 0; b < g.length; b++) {
              const m = g.charCodeAt(b);
              ((h = (h << 5) - h + m), (h = h & h));
            }
            return String(h >>> 0);
          };
        e._DJB2 = c;
        const y = (g, h) => (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(g, h)));
        e._DJB2Object = y;
        const v = (g, h) => {
          if (g == null) return null;
          const b = Object.keys(g).sort(),
            m = {};
          return (
            b.forEach((u) => {
              const a = g[u];
              if (h === 0 || (0, S._typeOf)(a) !== "object") {
                m[u] = a;
                return;
              }
              m[u] = (0, e._getSortedObject)(a, h != null ? h - 1 : h);
            }),
            m
          );
        };
        e._getSortedObject = v;
      })(Kt)),
    Kt
  );
}
var lr;
function ft() {
  if (lr) return Ce;
  ((lr = 1),
    Object.defineProperty(Ce, "__esModule", { value: !0 }),
    (Ce._getStorageKey = Ce._getUserStorageKey = void 0));
  const e = Be();
  function S(y, v, g) {
    var h;
    if (g) return g(y, v);
    const b = v && v.customIDs ? v.customIDs : {},
      m = [
        `uid:${(h = v?.userID) !== null && h !== void 0 ? h : ""}`,
        `cids:${Object.keys(b)
          .sort((u, a) => u.localeCompare(a))
          .map((u) => `${u}-${b[u]}`)
          .join(",")}`,
        `k:${y}`,
      ];
    return (0, e._DJB2)(m.join("|"));
  }
  Ce._getUserStorageKey = S;
  function c(y, v, g) {
    return v ? S(y, v, g) : (0, e._DJB2)(`k:${y}`);
  }
  return ((Ce._getStorageKey = c), Ce);
}
var Bt = {},
  ur;
function vt() {
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
      })(Bt)),
    Bt
  );
}
var Gt = {},
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
        const S = V(),
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
        const g = (a, n) => {
          const o = (0, e._getWindowSafe)();
          typeof o?.addEventListener == "function" && o.addEventListener(a, n);
        };
        e._addWindowEventListenerSafe = g;
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
        const m = () => {
          const a = (0, e._getWindowSafe)();
          return a && "onpagehide" in a ? "pagehide" : "beforeunload";
        };
        e._getUnloadEvent = m;
        const u = (a, n) => {
          try {
            return JSON.parse(JSON.stringify(n));
          } catch {
            return (S.Log.error(`Failed to clone object ${a}`), null);
          }
        };
        e._cloneObject = u;
      })(Gt)),
    Gt
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
    S = "statsig::gate_exposure",
    c = "statsig::layer_exposure",
    y = (a, n, o, i, r) => (
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
    v = ({ eventName: a }) => a === S || a === e || a === c;
  Y._isExposureEvent = v;
  const g = (a, n, o) => {
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
  Y._createGateExposure = g;
  function h(a, n) {
    return a.map((o) => (typeof o == "string" ? (n ?? {})[o] : o)).filter((o) => o != null);
  }
  Y._mapExposures = h;
  const b = (a, n, o) => {
    var i, r, t, l;
    const _ = { config: n.name, ruleID: n.ruleID };
    return (
      ((i = n.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (_.configVersion = n.__evaluation.version),
      ((r = n.__evaluation) === null || r === void 0 ? void 0 : r.passed) != null &&
        (_.rulePassed = String(n.__evaluation.passed)),
      y(
        e,
        a,
        n.details,
        _,
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
  const m = (a, n, o, i) => {
    var r, t, l, _, s, p, f;
    const d = n.__evaluation,
      E = ((r = d?.explicit_parameters) === null || r === void 0 ? void 0 : r.includes(o)) === !0;
    let k = "",
      I = (t = d?.undelegated_secondary_exposures) !== null && t !== void 0 ? t : [];
    E &&
      ((k = (l = d.allocated_experiment_name) !== null && l !== void 0 ? l : ""),
      (I = (_ = d.secondary_exposures) !== null && _ !== void 0 ? _ : []));
    const U = (s = n.__evaluation) === null || s === void 0 ? void 0 : s.parameter_rule_ids,
      M = {
        config: n.name,
        parameterName: o,
        ruleID: (p = U?.[o]) !== null && p !== void 0 ? p : n.ruleID,
        allocatedExperiment: k,
        isExplicitParameter: String(E),
      };
    return (
      ((f = n.__evaluation) === null || f === void 0 ? void 0 : f.version) != null &&
        (M.configVersion = n.__evaluation.version),
      y(c, a, n.details, M, h(I, i))
    );
  };
  Y._createLayerParameterExposure = m;
  const u = (a, n) => (
    (n.reason = a.reason),
    a.lcut && (n.lcut = String(a.lcut)),
    a.receivedAt && (n.receivedAt = String(a.receivedAt)),
    n
  );
  return Y;
}
var Ue = {},
  _r;
function ht() {
  return (
    _r ||
      ((_r = 1),
      Object.defineProperty(Ue, "__esModule", { value: !0 }),
      (Ue.LoggingEnabledOption = Ue.LogEventCompressionMode = void 0),
      (Ue.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (Ue.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    Ue
  );
}
var Vt = {},
  gr;
function _e() {
  return (
    gr ||
      ((gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0));
        const S = V(),
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
        let g = null;
        try {
          const n = (0, c._getWindowSafe)();
          n &&
            n.localStorage &&
            typeof n.localStorage.getItem == "function" &&
            (g = {
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
        let h = g ?? v,
          b = h;
        function m(n) {
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
          getItem: (n) => m(() => b.getItem(n)),
          setItem: (n, o) => m(() => b.setItem(n, o)),
          removeItem: (n) => b.removeItem(n),
          getAllKeys: () => b.getAllKeys(),
          _setProvider: (n) => {
            ((h = n), (b = n));
          },
          _setDisabled: (n) => {
            n ? (b = v) : (b = h);
          },
        };
        function u(n) {
          const o = e.Storage.getItem(n);
          try {
            return JSON.parse(o ?? "null");
          } catch {
            return (S.Log.error(`Failed to parse value for key "${n}"`), null);
          }
        }
        e._getObjectFromStorage = u;
        function a(n, o) {
          e.Storage.setItem(n, JSON.stringify(o));
        }
        e._setObjectInStorage = a;
      })(Vt)),
    Vt
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
    S = vt(),
    c = {
      [S.Endpoint._initialize]: "i",
      [S.Endpoint._rgstr]: "e",
      [S.Endpoint._download_config_specs]: "d",
    };
  let y = class {
    constructor(g, h, b, m) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = g),
        (this.endpointDnsKey = c[g]),
        h && (this.customUrl = h),
        !h && b && (this.customUrl = b.endsWith("/") ? `${b}${g}` : `${b}/${g}`),
        m && (this.fallbackUrls = m));
      const u = S.NetworkDefault[g];
      this.defaultUrl = `${u}/${g}`;
    }
    getUrl() {
      var g;
      return (g = this.customUrl) !== null && g !== void 0 ? g : this.defaultUrl;
    }
    getChecksum() {
      var g;
      const h = ((g = this.fallbackUrls) !== null && g !== void 0 ? g : []).sort().join(",");
      return (0, e._DJB2)(this.customUrl + h);
    }
  };
  return ((Ye.UrlConfiguration = y), Ye);
}
var zt = {},
  vr;
function dn() {
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
        const S = ae(),
          c = "foreground",
          y = "background",
          v = [];
        let g = c,
          h = !1;
        const b = () => g === c;
        e._isCurrentlyVisible = b;
        const m = () => h;
        e._isUnloading = m;
        const u = (n) => {
          v.unshift(n);
        };
        e._subscribeToVisiblityChanged = u;
        const a = (n) => {
          n !== g && ((g = n), v.forEach((o) => o(n)));
        };
        ((e._notifyVisibilityChanged = a),
          (0, S._addWindowEventListenerSafe)("focus", () => {
            ((h = !1), (0, e._notifyVisibilityChanged)(c));
          }),
          (0, S._addWindowEventListenerSafe)("blur", () => (0, e._notifyVisibilityChanged)(y)),
          (0, S._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, e._notifyVisibilityChanged)(document.visibilityState === "visible" ? c : y);
          }),
          (0, S._addWindowEventListenerSafe)((0, S._getUnloadEvent)(), () => {
            ((h = !0), (0, e._notifyVisibilityChanged)(y));
          }));
      })(zt)),
    zt
  );
}
var hr;
function ii() {
  if (hr) return Oe;
  hr = 1;
  var e =
    (Oe && Oe.__awaiter) ||
    function (p, f, d, E) {
      function k(I) {
        return I instanceof d
          ? I
          : new d(function (U) {
              U(I);
            });
      }
      return new (d || (d = Promise))(function (I, U) {
        function M(N) {
          try {
            z(E.next(N));
          } catch (B) {
            U(B);
          }
        }
        function P(N) {
          try {
            z(E.throw(N));
          } catch (B) {
            U(B);
          }
        }
        function z(N) {
          N.done ? I(N.value) : k(N.value).then(M, P);
        }
        z((E = E.apply(p, f || [])).next());
      });
    };
  (Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.EventLogger = void 0));
  const S = ft(),
    c = Be(),
    y = V(),
    v = vt(),
    g = ae(),
    h = ni(),
    b = ht(),
    m = _e(),
    u = ri(),
    a = dn(),
    n = 100,
    o = 1e4,
    i = 1e3,
    r = 6e5,
    t = 500,
    l = 200,
    _ = {};
  let s = class qe {
    static _safeFlushAndForget(f) {
      var d;
      (d = _[f]) === null || d === void 0 || d.flush().catch(() => {});
    }
    static _safeRetryFailedLogs(f) {
      var d;
      (d = _[f]) === null || d === void 0 || d._retryFailedLogs();
    }
    constructor(f, d, E, k) {
      var I, U;
      ((this._sdkKey = f),
        (this._emitter = d),
        (this._network = E),
        (this._options = k),
        (this._queue = []),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._hasRunQuickFlush = !1),
        (this._creationTime = Date.now()),
        (this._loggingEnabled =
          (I = k?.loggingEnabled) !== null && I !== void 0
            ? I
            : k?.disableLogging === !0
              ? b.LoggingEnabledOption.disabled
              : b.LoggingEnabledOption.browserOnly),
        k?.loggingEnabled &&
          k.disableLogging !== void 0 &&
          y.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ),
        (this._maxQueueSize = (U = k?.loggingBufferMaxSize) !== null && U !== void 0 ? U : n));
      const M = k?.networkConfig;
      this._logEventUrlConfig = new u.UrlConfiguration(
        v.Endpoint._rgstr,
        M?.logEventUrl,
        M?.api,
        M?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(f) {
      this._network.setLogEventCompressionMode(f);
    }
    setLoggingEnabled(f) {
      if (this._loggingEnabled === "disabled" && f !== "disabled") {
        const d = this._getStorageKey(),
          E = (0, m._getObjectFromStorage)(d);
        (E && this._queue.push(...E), m.Storage.removeItem(d));
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
      var d;
      const E = (d = this._nonExposedChecks[f]) !== null && d !== void 0 ? d : 0;
      this._nonExposedChecks[f] = E + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var f;
      const d = (0, g._isServerEnv)();
      (d &&
        ((f = this._options) === null || f === void 0 ? void 0 : f.loggingEnabled) !== "always") ||
        ((_[this._sdkKey] = this),
        d ||
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
      var d;
      if (
        ((d = this._options) === null || d === void 0 ? void 0 : d.loggingEnabled) !== "always" &&
        (0, g._isServerEnv)()
      )
        return !1;
      if (!(0, h._isExposureEvent)(f)) return !0;
      const E = f.user ? f.user : { statsigEnvironment: void 0 },
        k = (0, S._getUserStorageKey)(this._sdkKey, E),
        I = f.metadata ? f.metadata : {},
        U = [
          f.eventName,
          k,
          I.gate,
          I.config,
          I.ruleID,
          I.allocatedExperiment,
          I.parameterName,
          String(I.isExplicitParameter),
          I.reason,
        ].join("|"),
        M = this._lastExposureTimeMap[U],
        P = Date.now();
      return M && P - M < r
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > i && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[U] = P),
          !0);
    }
    _sendEvents(f) {
      return e(this, void 0, void 0, function* () {
        var d, E;
        if (this._loggingEnabled === "disabled") return (this._saveFailedLogsToStorage(f), !1);
        try {
          const I =
            (0, a._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((E = (d = this._options) === null || d === void 0 ? void 0 : d.networkConfig) ===
              null || E === void 0
              ? void 0
              : E.networkOverrideFunc) == null;
          return (
            this._emitter({ name: "pre_logs_flushed", events: f }),
            (I ? this._sendEventsViaBeacon(f) : yield this._sendEventsViaPost(f)).success
              ? (this._emitter({ name: "logs_flushed", events: f }), !0)
              : (y.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(f), !1)
          );
        } catch {
          return (y.Log.warn("Failed to flush events."), !1);
        }
      });
    }
    _sendEventsViaPost(f) {
      return e(this, void 0, void 0, function* () {
        var d;
        const E = yield this._network.post(this._getRequestData(f)),
          k = (d = E?.code) !== null && d !== void 0 ? d : -1;
        return { success: k >= 200 && k < 300 };
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
      const d = this._getStorageKey();
      try {
        const E = this._getFailedLogsFromStorage(d);
        (0, m._setObjectInStorage)(d, [...E, ...f]);
      } catch {
        y.Log.warn("Unable to save failed logs to storage");
      }
    }
    _getFailedLogsFromStorage(f) {
      let d = [];
      try {
        const E = (0, m._getObjectFromStorage)(f);
        return (Array.isArray(E) && (d = E), d);
      } catch {
        return [];
      }
    }
    _retryFailedLogs() {
      const f = this._getStorageKey();
      e(this, void 0, void 0, function* () {
        m.Storage.isReady() || (yield m.Storage.isReadyResolver());
        const d = (0, m._getObjectFromStorage)(f);
        d && (m.Storage.removeItem(f), yield this._sendEvents(d));
      }).catch(() => {
        y.Log.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${(0, c._DJB2)(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(f) {
      f.user && ((f.user = Object.assign({}, f.user)), delete f.user.privateAttributes);
      const d = {},
        E = this._getCurrentPageUrl();
      E && (d.statsigMetadata = { currentPage: E });
      const k = Object.assign(Object.assign({}, f), d);
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
      var f;
      if (
        ((f = this._options) === null || f === void 0
          ? void 0
          : f.includeCurrentPageUrlWithEvents) !== !1
      )
        return (0, g._getCurrentPageUrlSafe)();
    }
    _startBackgroundFlushInterval() {
      var f, d;
      const E =
          (d = (f = this._options) === null || f === void 0 ? void 0 : f.loggingIntervalMs) !==
            null && d !== void 0
            ? d
            : o,
        k = setInterval(() => {
          const I = _[this._sdkKey];
          !I || I._flushIntervalId !== k ? clearInterval(k) : qe._safeFlushAndForget(this._sdkKey);
        }, E);
      this._flushIntervalId = k;
    }
  };
  return ((Oe.EventLogger = s), Oe);
}
var Jt = {},
  yr;
function ut() {
  return (
    yr ||
      ((yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
          (e.SDK_VERSION = "3.31.1"));
        let S = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
        e.StatsigMetadataProvider = {
          get: () => S,
          add: (c) => {
            S = Object.assign(Object.assign({}, S), c);
          },
        };
      })(Jt)),
    Jt
  );
}
var Ze = {},
  Wt = {},
  $e = {},
  mr;
function _n() {
  if (mr) return $e;
  ((mr = 1), Object.defineProperty($e, "__esModule", { value: !0 }), ($e.getUUID = void 0));
  function e() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let S = new Date().getTime(),
      c = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let g = Math.random() * 16;
        return (
          S > 0
            ? ((g = ((S + g) % 16) | 0), (S = Math.floor(S / 16)))
            : ((g = ((c + g) % 16) | 0), (c = Math.floor(c / 16))),
          (v === "x" ? g : (g & 7) | 8).toString(16)
        );
      },
    );
  }
  return (($e.getUUID = e), $e);
}
var Sr;
function yt() {
  return (
    Sr ||
      ((Sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigSession = e.SessionID = void 0));
        const S = ce(),
          c = ft(),
          y = V(),
          v = _e(),
          g = _n(),
          h = 1800 * 1e3,
          b = 14400 * 1e3,
          m = {};
        ((e.SessionID = { get: (s) => e.StatsigSession.get(s).data.sessionID }),
          (e.StatsigSession = {
            get: (s, p = !0) => {
              m[s] == null && (m[s] = u(s));
              const f = m[s];
              return p ? n(f) : f;
            },
            overrideInitialSessionID: (s, p) => {
              m[p] = a(s, p);
            },
          }));
        function u(s) {
          let p = _(s);
          const f = Date.now();
          return (
            p || (p = { sessionID: (0, g.getUUID)(), startTime: f, lastUpdate: f }),
            { data: p, sdkKey: s }
          );
        }
        function a(s, p) {
          const f = Date.now();
          return { data: { sessionID: s, startTime: f, lastUpdate: f }, sdkKey: p };
        }
        function n(s) {
          var p;
          const f = Date.now(),
            d = s.data,
            E = s.sdkKey,
            k = i(d) || r(d);
          (k && ((d.sessionID = (0, g.getUUID)()), (d.startTime = f)),
            (d.lastUpdate = f),
            l(d, s.sdkKey),
            clearTimeout(s.idleTimeoutID),
            clearTimeout(s.ageTimeoutID));
          const I = f - d.startTime;
          return (
            (s.idleTimeoutID = o(E, h)),
            (s.ageTimeoutID = o(E, b - I)),
            k &&
              ((p = __STATSIG__ == null ? void 0 : __STATSIG__.instance(E)) === null ||
                p === void 0 ||
                p.$emt({ name: "session_expired" })),
            s
          );
        }
        function o(s, p) {
          return setTimeout(() => {
            var f;
            const d =
              (f = (0, S._getStatsigGlobal)()) === null || f === void 0 ? void 0 : f.instance(s);
            d && d.$emt({ name: "session_expired" });
          }, p);
        }
        function i({ lastUpdate: s }) {
          return Date.now() - s > h;
        }
        function r({ startTime: s }) {
          return Date.now() - s > b;
        }
        function t(s) {
          return `statsig.session_id.${(0, c._getStorageKey)(s)}`;
        }
        function l(s, p) {
          const f = t(p);
          try {
            (0, v._setObjectInStorage)(f, s);
          } catch {
            y.Log.warn("Failed to save SessionID");
          }
        }
        function _(s) {
          const p = t(s);
          return (0, v._getObjectFromStorage)(p);
        }
      })(Wt)),
    Wt
  );
}
var Re = {},
  br;
function st() {
  if (br) return Re;
  ((br = 1),
    Object.defineProperty(Re, "__esModule", { value: !0 }),
    (Re.getCookieName = Re.StableID = void 0));
  const e = ft(),
    S = V(),
    c = ae(),
    y = _e(),
    v = _n(),
    g = {},
    h = {},
    b = {};
  Re.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (r) => {
      if (b[r]) return null;
      if (g[r] != null) return g[r];
      let t = null;
      return (
        (t = n(r)),
        t != null
          ? ((g[r] = t), u(t, r), t)
          : ((t = a(r)), t == null && (t = (0, v.getUUID)()), u(t, r), o(t, r), (g[r] = t), t)
      );
    },
    setOverride: (r, t) => {
      ((g[t] = r), u(r, t), o(r, t));
    },
    _setCookiesEnabled: (r, t) => {
      h[r] = t;
    },
    _setDisabled: (r, t) => {
      b[r] = t;
    },
  };
  function m(r) {
    return `statsig.stable_id.${(0, e._getStorageKey)(r)}`;
  }
  function u(r, t) {
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
    if (!h[r] || (0, c._getDocumentSafe)() == null) return null;
    const t = document.cookie.split(";");
    for (const l of t) {
      const [_, s] = l.trim().split("=");
      if (_ === i(r)) return decodeURIComponent(s);
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
  return ((Re.getCookieName = i), Re);
}
var Er;
function Ci() {
  if (Er) return Ze;
  ((Er = 1),
    Object.defineProperty(Ze, "__esModule", { value: !0 }),
    (Ze.PrecomputedEvaluationsContextHandle = void 0));
  const e = V(),
    S = ae(),
    c = yt(),
    y = st();
  class v {
    constructor(h, b, m, u, a, n) {
      ((this._sdkKey = h),
        (this._getOptions = b),
        (this._getErrorBoundary = m),
        (this._getValues = u),
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
      let h = (0, S._cloneObject)("StatsigUser", this._getUser());
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
  return ((Ze.PrecomputedEvaluationsContextHandle = v), Ze);
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
    S = V(),
    c = ae();
  function y(h, b, m) {
    const u = (0, c._cloneObject)("StatsigUser", h);
    return u == null
      ? (S.Log.error("Failed to clone user"), { statsigEnvironment: void 0 })
      : (b != null && b.environment != null
          ? (u.statsigEnvironment = b.environment)
          : m != null && (u.statsigEnvironment = { tier: m }),
        u);
  }
  oe._normalizeUser = y;
  function v(h) {
    return h ? (0, e._DJB2Object)(h) : null;
  }
  oe._getFullUserHash = v;
  function g(h, b) {
    var m, u, a;
    if (typeof b != "string") return h.userID;
    const n = b.toLowerCase();
    return n !== "userid"
      ? (u = (m = h.customIDs) === null || m === void 0 ? void 0 : m[b]) !== null && u !== void 0
        ? u
        : (a = h.customIDs) === null || a === void 0
          ? void 0
          : a[n]
      : h.userID;
  }
  return ((oe._getUnitIDFromUser = g), oe);
}
var et = {},
  Dr;
function si() {
  if (Dr) return et;
  ((Dr = 1), Object.defineProperty(et, "__esModule", { value: !0 }), (et._typedJsonParse = void 0));
  const e = V();
  function S(c, y, v) {
    try {
      const g = JSON.parse(c);
      if (g && typeof g == "object" && y in g) return g;
    } catch {}
    return (e.Log.error(`Failed to parse ${v}`), null);
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
      function l(_) {
        return _ instanceof r
          ? _
          : new r(function (s) {
              s(_);
            });
      }
      return new (r || (r = Promise))(function (_, s) {
        function p(E) {
          try {
            d(t.next(E));
          } catch (k) {
            s(k);
          }
        }
        function f(E) {
          try {
            d(t.throw(E));
          } catch (k) {
            s(k);
          }
        }
        function d(E) {
          E.done ? _(E.value) : l(E.value).then(p, f);
        }
        d((t = t.apply(o, i || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie._makeDataAdapterResult = ie.DataAdapterCore = void 0));
  const S = V(),
    c = st(),
    y = oi(),
    v = _e(),
    g = si(),
    h = 10,
    b = 8;
  let m = class {
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
      const _ = this._loadFromCache(t);
      return _ && this._getIsCacheValueValid(_)
        ? (this._inMemoryCache.add(t, _, this._cacheLimit), this._inMemoryCache.get(t, r))
        : null;
    }
    setData(i, r) {
      const t = r && (0, y._normalizeUser)(r, this._options),
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
                () => (S.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(_)
        );
      });
    }
    _prefetchDataImpl(i, r) {
      return e(this, void 0, void 0, function* () {
        const t = i && (0, y._normalizeUser)(i, this._options),
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
          p = yield this._fetchFromNetwork(_, r, t, s);
        if (!p) return (S.Log.debug("No response returned for latest value"), null);
        const f = (0, g._typedJsonParse)(p, "has_updates", "Response"),
          d = this._getSdkKey(),
          E = c.StableID.get(d);
        let k = null;
        if (f?.has_updates === !0) k = u("Network", p, E, r);
        else if (_ && f?.has_updates === !1) k = u("NetworkNotModified", _, E, r);
        else return null;
        const I = this._getCacheKey(r);
        return (this._inMemoryCache.add(I, k, this._cacheLimit), this._writeToCache(I, k), k);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (S.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var r;
      const t = (r = v.Storage.getItem) === null || r === void 0 ? void 0 : r.call(v.Storage, i);
      if (t == null) return null;
      const l = (0, g._typedJsonParse)(t, "source", "Cached Result");
      return l ? Object.assign(Object.assign({}, l), { source: "Cache" }) : null;
    }
    _writeToCache(i, r) {
      const t = JSON.stringify(r);
      for (let l = 0; l < b; l++)
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
  ie.DataAdapterCore = m;
  function u(o, i, r, t) {
    return {
      source: o,
      data: i,
      receivedAt: Date.now(),
      stableID: r,
      fullUserHash: (0, y._getFullUserHash)(t),
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
        ? (S.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
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
var xt = {},
  wr;
function Ui() {
  return (wr || ((wr = 1), Object.defineProperty(xt, "__esModule", { value: !0 })), xt);
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
                : new i(function (_) {
                    _(l);
                  });
            }
            return new (i || (i = Promise))(function (l, _) {
              function s(d) {
                try {
                  f(r.next(d));
                } catch (E) {
                  _(E);
                }
              }
              function p(d) {
                try {
                  f(r.throw(d));
                } catch (E) {
                  _(E);
                }
              }
              function f(d) {
                d.done ? l(d.value) : t(d.value).then(s, p);
              }
              f((r = r.apply(n, o || [])).next());
            });
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0));
        const c = V(),
          y = gn(),
          v = ut();
        e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const g = "[Statsig] UnknownError";
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
                S(this, void 0, void 0, function* () {
                  var t, l, _, s, p, f, d;
                  const E = i || Error(g),
                    k = E instanceof Error,
                    I = k ? E.name : "No Name",
                    U = b(E);
                  if (((this._lastSeenError = U), this._seen.has(I))) return;
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
                  const M = y.SDKType._get(this._sdkKey),
                    P = v.StatsigMetadataProvider.get(),
                    z = k ? E.stack : m(E),
                    N = Object.assign(
                      { tag: o, exception: I, info: z, statsigOptions: a(this._options) },
                      Object.assign(Object.assign({}, P), { sdkType: M }),
                    );
                  (yield (
                    (f =
                      (p =
                        (s = this._options) === null || s === void 0 ? void 0 : s.networkConfig) ===
                        null || p === void 0
                        ? void 0
                        : p.networkOverrideFunc) !== null && f !== void 0
                      ? f
                      : fetch
                  )(e.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(M),
                      "STATSIG-SDK-VERSION": String(P.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(N),
                  }),
                    (d = this._emitter) === null ||
                      d === void 0 ||
                      d.call(this, { name: "error", error: i, tag: o }));
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
        function m(n) {
          try {
            return JSON.stringify(n);
          } catch {
            return g;
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
      })(tt)),
    tt
  );
}
var Ht = {},
  Cr;
function Ri() {
  return (Cr || ((Cr = 1), Object.defineProperty(Ht, "__esModule", { value: !0 })), Ht);
}
var Qt = {},
  Tr;
function Mi() {
  return (Tr || ((Tr = 1), Object.defineProperty(Qt, "__esModule", { value: !0 })), Qt);
}
var Xt = {},
  Ur;
function Li() {
  return (Ur || ((Ur = 1), Object.defineProperty(Xt, "__esModule", { value: !0 })), Xt);
}
var Me = {},
  Rr;
function li() {
  if (Rr) return Me;
  ((Rr = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.createMemoKey = Me.MemoPrefix = void 0),
    (Me.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const e = new Set([]),
    S = new Set(["userPersistedValues"]);
  function c(y, v, g) {
    let h = `${y}|${v}`;
    if (!g) return h;
    for (const b of Object.keys(g)) {
      if (S.has(b)) return;
      e.has(b) ? (h += `|${b}=true`) : (h += `|${b}=${g[b]}`);
    }
    return h;
  }
  return ((Me.createMemoKey = c), Me);
}
var Le = {},
  se = {},
  Pe = {},
  Mr;
function Pi() {
  if (Mr) return Pe;
  Mr = 1;
  var e =
    (Pe && Pe.__awaiter) ||
    function (b, m, u, a) {
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
        l((a = a.apply(b, m || [])).next());
      });
    };
  (Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe._fetchTxtRecords = void 0));
  const S = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    c = "https://cloudflare-dns.com/dns-query",
    y = ["i", "e", "d"],
    v = 200;
  function g(b) {
    return e(this, void 0, void 0, function* () {
      const m = yield b(c, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: S,
      });
      if (!m.ok) {
        const n = new Error("Failed to fetch TXT records from DNS");
        throw ((n.name = "DnsTxtFetchError"), n);
      }
      const u = yield m.arrayBuffer(),
        a = new Uint8Array(u);
      return h(a);
    });
  }
  Pe._fetchTxtRecords = g;
  function h(b) {
    const m = b.findIndex(
      (a, n) =>
        n < v && String.fromCharCode(a) === "=" && y.includes(String.fromCharCode(b[n - 1])),
    );
    if (m === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let u = "";
    for (let a = m - 1; a < b.length; a++) u += String.fromCharCode(b[a]);
    return u.split(",");
  }
  return Pe;
}
var Lr;
function ji() {
  if (Lr) return se;
  Lr = 1;
  var e =
    (se && se.__awaiter) ||
    function (i, r, t, l) {
      function _(s) {
        return s instanceof t
          ? s
          : new t(function (p) {
              p(s);
            });
      }
      return new (t || (t = Promise))(function (s, p) {
        function f(k) {
          try {
            E(l.next(k));
          } catch (I) {
            p(I);
          }
        }
        function d(k) {
          try {
            E(l.throw(k));
          } catch (I) {
            p(I);
          }
        }
        function E(k) {
          k.done ? s(k.value) : _(k.value).then(f, d);
        }
        E((l = l.apply(i, r || [])).next());
      });
    };
  (Object.defineProperty(se, "__esModule", { value: !0 }),
    (se._isDomainFailure = se.NetworkFallbackResolver = void 0));
  const S = Pi(),
    c = Be(),
    y = V(),
    v = _e(),
    g = 10080 * 60 * 1e3,
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
      const _ = (l = this._fallbackInfo) === null || l === void 0 ? void 0 : l[t.endpoint];
      _ &&
        ((_.expiryTime = Date.now() + g),
        a(r, Object.assign(Object.assign({}, this._fallbackInfo), { [t.endpoint]: _ })));
    }
    getActiveFallbackUrl(r, t) {
      var l, _;
      if (t.customUrl != null && t.fallbackUrls != null) return null;
      let s = this._fallbackInfo;
      s == null && ((s = (l = n(r)) !== null && l !== void 0 ? l : {}), (this._fallbackInfo = s));
      const p = s[t.endpoint];
      return !p ||
        Date.now() > ((_ = p.expiryTime) !== null && _ !== void 0 ? _ : 0) ||
        t.getChecksum() !== p.urlConfigChecksum
        ? (delete s[t.endpoint], (this._fallbackInfo = s), a(r, this._fallbackInfo), null)
        : p.url
          ? p.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(r, t, l, _) {
      return e(this, void 0, void 0, function* () {
        var s, p;
        try {
          if (!m(l, _)) return !1;
          const d =
              t.customUrl == null && t.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(t)
                : t.fallbackUrls,
            E = this._pickNewFallbackUrl(
              (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[t.endpoint],
              d,
            );
          return E ? (this._updateFallbackInfoWithNewUrl(r, t, E), !0) : !1;
        } catch (f) {
          return (
            (p = this._errorBoundary) === null ||
              p === void 0 ||
              p.logError("tryFetchUpdatedFallbackInfo", f),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(r, t, l) {
      var _, s, p;
      const f = {
          urlConfigChecksum: t.getChecksum(),
          url: l,
          expiryTime: Date.now() + g,
          previous: [],
        },
        d = t.endpoint,
        E = (_ = this._fallbackInfo) === null || _ === void 0 ? void 0 : _[d];
      (E && f.previous.push(...E.previous), f.previous.length > 10 && (f.previous = []));
      const k =
        (p = (s = this._fallbackInfo) === null || s === void 0 ? void 0 : s[d]) === null ||
        p === void 0
          ? void 0
          : p.url;
      (k != null && f.previous.push(k),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [d]: f })),
        a(r, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(r) {
      return e(this, void 0, void 0, function* () {
        var t;
        const l = this._dnsQueryCooldowns[r.endpoint];
        if (l && Date.now() < l) return null;
        this._dnsQueryCooldowns[r.endpoint] = Date.now() + h;
        const _ = [],
          s = yield (0, S._fetchTxtRecords)(
            (t = this._networkOverrideFunc) !== null && t !== void 0 ? t : fetch,
          ),
          p = o(r.defaultUrl);
        for (const f of s) {
          if (!f.startsWith(r.endpointDnsKey + "=")) continue;
          const d = f.split("=");
          if (d.length > 1) {
            let E = d[1];
            (E.endsWith("/") && (E = E.slice(0, -1)), _.push(`https://${E}${p}`));
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
      let p = null;
      for (const f of t) {
        const d = f.endsWith("/") ? f.slice(0, -1) : f;
        if (!_.has(f) && d !== s) {
          p = d;
          break;
        }
      }
      return p;
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
    rt
  );
}
var it = {},
  jr;
function ci() {
  return (
    jr ||
      ((jr = 1),
      Object.defineProperty(it, "__esModule", { value: !0 }),
      (it.ErrorTag = void 0),
      (it.ErrorTag = { NetworkError: "NetworkError" })),
    it
  );
}
var Ar;
function Ai() {
  if (Ar) return Le;
  Ar = 1;
  var e =
    (Le && Le.__awaiter) ||
    function (O, D, w, C) {
      function T(R) {
        return R instanceof w
          ? R
          : new w(function (L) {
              L(R);
            });
      }
      return new (w || (w = Promise))(function (R, L) {
        function $(j) {
          try {
            F(C.next(j));
          } catch (A) {
            L(A);
          }
        }
        function q(j) {
          try {
            F(C.throw(j));
          } catch (A) {
            L(A);
          }
        }
        function F(j) {
          j.done ? R(j.value) : T(j.value).then($, q);
        }
        F((C = C.apply(O, D || [])).next());
      });
    };
  (Object.defineProperty(Le, "__esModule", { value: !0 }), (Le.NetworkCore = void 0), ce());
  const S = ce(),
    c = rn(),
    y = V(),
    v = vt(),
    g = ji(),
    h = ui(),
    b = gn(),
    m = ae(),
    u = yt(),
    a = st(),
    n = ci(),
    o = ut(),
    i = ht(),
    r = dn(),
    t = 1e4,
    l = 500,
    _ = 3e4,
    s = 1e3,
    p = 50,
    f = p / s,
    d = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  let E = class {
    constructor(D, w) {
      ((this._emitter = w),
        (this._errorBoundary = null),
        (this._timeout = t),
        (this._netConfig = {}),
        (this._options = {}),
        (this._leakyBucket = {}),
        (this._lastUsedInitUrl = null),
        D && (this._options = D),
        this._options.networkConfig && (this._netConfig = this._options.networkConfig),
        this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs),
        (this._fallbackResolver = new g.NetworkFallbackResolver(this._options)),
        this.setLogEventCompressionMode(this._getLogEventCompressionMode(D)));
    }
    setLogEventCompressionMode(D) {
      this._options.logEventCompressionMode = D;
    }
    setErrorBoundary(D) {
      ((this._errorBoundary = D),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(this._fallbackResolver),
        this._fallbackResolver.setErrorBoundary(D));
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const D = this._lastUsedInitUrl;
      return ((this._lastUsedInitUrl = null), D);
    }
    beacon(D) {
      if (!k(D)) return !1;
      const w = this._getInternalRequestArgs("POST", D),
        C = this._getPopulatedURL(w),
        T = navigator;
      return T.sendBeacon.bind(T)(C, w.body);
    }
    post(D) {
      return e(this, void 0, void 0, function* () {
        const w = this._getInternalRequestArgs("POST", D);
        return (this._tryEncodeBody(w), yield this._tryToCompressBody(w), this._sendRequest(w));
      });
    }
    get(D) {
      const w = this._getInternalRequestArgs("GET", D);
      return this._sendRequest(w);
    }
    _sendRequest(D) {
      return e(this, void 0, void 0, function* () {
        var w, C, T, R;
        if (!k(D) || this._netConfig.preventAllNetworkTraffic) return null;
        const { method: L, body: $, retries: q, attempt: F } = D,
          j = D.urlConfig.endpoint;
        if (this._isRateLimited(j))
          return (
            y.Log.warn(
              `Request to ${j} was blocked because you are making requests too frequently.`,
            ),
            null
          );
        const A = F ?? 1;
        let G = !1;
        const W = this._getPopulatedURL(D);
        let K = null;
        const Z = (0, r._isUnloading)();
        try {
          const le = {
            method: L,
            body: $,
            headers: Object.assign({}, D.headers),
            priority: D.priority,
            keepalive: Z,
          };
          z(D, A);
          const J = this._leakyBucket[j];
          J && ((J.lastRequestTime = Date.now()), (this._leakyBucket[j] = J));
          const ee = (w = this._netConfig.networkOverrideFunc) !== null && w !== void 0 ? w : fetch;
          let Fe;
          if (
            ((K = yield Promise.race([
              ee(W, le).finally(() => clearTimeout(Fe)),
              new Promise((ge, fe) => {
                Fe = setTimeout(() => {
                  ((G = !0), fe(new Error(`Timeout of ${this._timeout}ms expired.`)));
                }, this._timeout);
              }),
            ])),
            !K.ok)
          ) {
            const ge = yield K.text().catch(() => "No Text"),
              fe = new Error(`NetworkError: ${W} ${ge}`);
            throw ((fe.name = "NetworkError"), fe);
          }
          const te = yield K.text();
          return (
            N(D, K, A, te),
            this._fallbackResolver.tryBumpExpiryTime(D.sdkKey, D.urlConfig),
            { body: te, code: K.status }
          );
        } catch (le) {
          const J = M(le),
            ee = P(J ?? "", G);
          if (
            (N(D, K, A, "", le),
            (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
              D.sdkKey,
              D.urlConfig,
              J,
              ee,
            )) &&
              (D.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(D.sdkKey, D.urlConfig)),
            !q || A > q || !d.has((C = K?.status) !== null && C !== void 0 ? C : 500))
          ) {
            (T = this._emitter) === null ||
              T === void 0 ||
              T.call(this, {
                name: "error",
                error: le,
                tag: n.ErrorTag.NetworkError,
                requestArgs: D,
              });
            const te = `A networking error occurred during ${L} request to ${W}.`;
            return (
              y.Log.error(te, J, le),
              (R = this._errorBoundary) === null || R === void 0 || R.attachErrorIfNoneExists(te),
              null
            );
          }
          return (
            yield B(A),
            this._sendRequest(Object.assign(Object.assign({}, D), { retries: q, attempt: A + 1 }))
          );
        }
      });
    }
    _getLogEventCompressionMode(D) {
      let w = D?.logEventCompressionMode;
      return (
        !w && D?.disableCompression === !0 && (w = i.LogEventCompressionMode.Disabled),
        w || (w = i.LogEventCompressionMode.Enabled),
        w
      );
    }
    _isRateLimited(D) {
      var w;
      const C = Date.now(),
        T =
          (w = this._leakyBucket[D]) !== null && w !== void 0
            ? w
            : { count: 0, lastRequestTime: C },
        R = C - T.lastRequestTime,
        L = Math.floor(R * f);
      return (
        (T.count = Math.max(0, T.count - L)),
        T.count >= p
          ? !0
          : ((T.count += 1), (T.lastRequestTime = C), (this._leakyBucket[D] = T), !1)
      );
    }
    _getPopulatedURL(D) {
      var w;
      const C = (w = D.fallbackUrl) !== null && w !== void 0 ? w : D.urlConfig.getUrl();
      (D.urlConfig.endpoint === v.Endpoint._initialize ||
        D.urlConfig.endpoint === v.Endpoint._download_config_specs) &&
        (this._lastUsedInitUrl = C);
      const T = Object.assign(
          {
            [v.NetworkParam.SdkKey]: D.sdkKey,
            [v.NetworkParam.SdkType]: b.SDKType._get(D.sdkKey),
            [v.NetworkParam.SdkVersion]: o.SDK_VERSION,
            [v.NetworkParam.Time]: String(Date.now()),
            [v.NetworkParam.SessionID]: u.SessionID.get(D.sdkKey),
          },
          D.params,
        ),
        R = Object.keys(T)
          .map((L) => `${encodeURIComponent(L)}=${encodeURIComponent(T[L])}`)
          .join("&");
      return `${C}${R ? `?${R}` : ""}`;
    }
    _tryEncodeBody(D) {
      var w;
      const C = (0, m._getWindowSafe)(),
        T = D.body;
      if (
        !(
          !D.isStatsigEncodable ||
          this._options.disableStatsigEncoding ||
          typeof T != "string" ||
          (0, S._getStatsigGlobalFlag)("no-encode") != null ||
          !C?.btoa
        )
      )
        try {
          ((D.body = C.btoa(T).split("").reverse().join("")),
            (D.params = Object.assign(
              Object.assign({}, (w = D.params) !== null && w !== void 0 ? w : {}),
              { [v.NetworkParam.StatsigEncoded]: "1" },
            )));
        } catch (R) {
          y.Log.warn(`Request encoding failed for ${D.urlConfig.getUrl()}`, R);
        }
    }
    _tryToCompressBody(D) {
      return e(this, void 0, void 0, function* () {
        var w;
        const C = D.body;
        if (!(typeof C != "string" || !U(D, this._options)))
          try {
            const T = new TextEncoder().encode(C),
              R = new CompressionStream("gzip"),
              L = R.writable.getWriter();
            (L.write(T).catch(y.Log.error), L.close().catch(y.Log.error));
            const $ = R.readable.getReader(),
              q = [];
            let F;
            for (; !(F = yield $.read()).done; ) q.push(F.value);
            const j = q.reduce((W, K) => W + K.length, 0),
              A = new Uint8Array(j);
            let G = 0;
            for (const W of q) (A.set(W, G), (G += W.length));
            ((D.body = A),
              (D.params = Object.assign(
                Object.assign({}, (w = D.params) !== null && w !== void 0 ? w : {}),
                { [v.NetworkParam.IsGzipped]: "1" },
              )));
          } catch (T) {
            y.Log.warn(`Request compression failed for ${D.urlConfig.getUrl()}`, T);
          }
      });
    }
    _getInternalRequestArgs(D, w) {
      const C = this._fallbackResolver.getActiveFallbackUrl(w.sdkKey, w.urlConfig),
        T = Object.assign(Object.assign({}, w), { method: D, fallbackUrl: C });
      return ("data" in w && I(T, w.data), T);
    }
  };
  Le.NetworkCore = E;
  const k = (O) => (O.sdkKey ? !0 : (y.Log.warn("Unable to make request without an SDK key"), !1)),
    I = (O, D) => {
      const { sdkKey: w, fallbackUrl: C } = O,
        T = a.StableID.get(w),
        R = u.SessionID.get(w),
        L = b.SDKType._get(w);
      O.body = JSON.stringify(
        Object.assign(Object.assign({}, D), {
          statsigMetadata: Object.assign(Object.assign({}, o.StatsigMetadataProvider.get()), {
            stableID: T,
            sessionID: R,
            sdkType: L,
            fallbackUrl: C,
          }),
        }),
      );
    };
  function U(O, D) {
    if (
      !O.isCompressable ||
      (0, S._getStatsigGlobalFlag)("no-compress") != null ||
      typeof CompressionStream > "u" ||
      typeof TextEncoder > "u"
    )
      return !1;
    const w = O.urlConfig.customUrl != null || O.urlConfig.fallbackUrls != null,
      C = h.SDKFlags.get(O.sdkKey, "enable_log_event_compression") === !0;
    switch (D.logEventCompressionMode) {
      case i.LogEventCompressionMode.Disabled:
        return !1;
      case i.LogEventCompressionMode.Enabled:
        return !(w && !C);
      case i.LogEventCompressionMode.Forced:
        return !0;
      default:
        return !1;
    }
  }
  function M(O) {
    return typeof O == "string"
      ? O
      : O instanceof Error
        ? `${O.name}: ${O.message}`
        : "Unknown Error";
  }
  function P(O, D) {
    return O.includes("Timeout") || D;
  }
  function z(O, D) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqStart(O.sdkKey, { attempt: D });
  }
  function N(O, D, w, C, T) {
    O.urlConfig.endpoint === v.Endpoint._initialize &&
      c.Diagnostics._markInitNetworkReqEnd(O.sdkKey, c.Diagnostics._getDiagnosticsData(D, w, C, T));
  }
  function B(O) {
    return e(this, void 0, void 0, function* () {
      yield new Promise((D) => setTimeout(D, Math.min(l * (O * O), _)));
    });
  }
  return Le;
}
var Yt = {},
  Nr;
function Ni() {
  return (Nr || ((Nr = 1), Object.defineProperty(Yt, "__esModule", { value: !0 })), Yt);
}
var Zt = {},
  Fr;
function Fi() {
  return (Fr || ((Fr = 1), Object.defineProperty(Zt, "__esModule", { value: !0 })), Zt);
}
var $t = {},
  qr;
function qi() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e._fastApproxSizeOf = void 0));
        const S = 2,
          c = 1,
          y = (v, g) => {
            let h = 0;
            const b = Object.keys(v);
            for (let m = 0; m < b.length; m++) {
              const u = b[m],
                a = v[u];
              if (
                ((h += u.length),
                typeof a == "object" && a !== null
                  ? (h += (0, e._fastApproxSizeOf)(a, g) + S)
                  : (h += String(a).length + c),
                h >= g)
              )
                return h;
            }
            return h;
          };
        e._fastApproxSizeOf = y;
      })($t)),
    $t
  );
}
var je = {},
  Kr;
function Ki() {
  if (Kr) return je;
  Kr = 1;
  var e =
    (je && je.__awaiter) ||
    function (r, t, l, _) {
      function s(p) {
        return p instanceof l
          ? p
          : new l(function (f) {
              f(p);
            });
      }
      return new (l || (l = Promise))(function (p, f) {
        function d(I) {
          try {
            k(_.next(I));
          } catch (U) {
            f(U);
          }
        }
        function E(I) {
          try {
            k(_.throw(I));
          } catch (U) {
            f(U);
          }
        }
        function k(I) {
          I.done ? p(I.value) : s(I.value).then(d, E);
        }
        k((_ = _.apply(r, t || [])).next());
      });
    };
  (Object.defineProperty(je, "__esModule", { value: !0 }), (je.StatsigClientBase = void 0), ce());
  const S = ce(),
    c = ai(),
    y = ii(),
    v = V(),
    g = li(),
    h = ae(),
    b = yt(),
    m = st(),
    u = ht(),
    a = _e(),
    n = 3e3;
  let o = class {
    constructor(t, l, _, s) {
      var p, f, d, E;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const k = this.$emt.bind(this);
      (s?.logLevel != null && (v.Log.level = s.logLevel),
        s?.disableStorage && a.Storage._setDisabled(!0),
        s?.initialSessionID && b.StatsigSession.overrideInitialSessionID(s.initialSessionID, t),
        s?.storageProvider && a.Storage._setProvider(s.storageProvider),
        s?.enableCookies && m.StableID._setCookiesEnabled(t, s.enableCookies),
        s?.disableStableID && m.StableID._setDisabled(t, !0),
        (this._sdkKey = t),
        (this._options = s ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (p = s?.overrideAdapter) !== null && p !== void 0 ? p : null),
        (this._logger = new y.EventLogger(t, k, _, s)),
        (this._errorBoundary = new c.ErrorBoundary(t, s, k)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(l),
        this._errorBoundary.wrap(this._logger),
        _.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = l),
        this.dataAdapter.attach(t, s, _),
        (this.storageProvider = a.Storage),
        (E =
          (d = (f = this.overrideAdapter) === null || f === void 0 ? void 0 : f.loadFromStorage) ===
            null || d === void 0
            ? void 0
            : d.call(f)) === null ||
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
          m.StableID._setCookiesEnabled(this._sdkKey, t.enableCookies)),
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
        } catch (p) {
          if (s.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${t.name}`, p);
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
        const p = (0, g.createMemoKey)(t, _, s);
        return p
          ? (p in this._memoCache ||
              (Object.keys(this._memoCache).length >= n && (this._memoCache = {}),
              (this._memoCache[p] = l(_, s))),
            this._memoCache[p])
          : l(_, s);
      };
    }
  };
  je.StatsigClientBase = o;
  function i(r, t) {
    var l;
    if ((0, h._isServerEnv)()) return;
    const _ = (0, S._getStatsigGlobal)(),
      s = (l = _.instances) !== null && l !== void 0 ? l : {},
      p = t;
    (s[r] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (s[r] = p),
      _.firstInstance || (_.firstInstance = p),
      (_.instances = s),
      (__STATSIG__ = _));
  }
  return je;
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
var en = {},
  Gr;
function Gi() {
  return (Gr || ((Gr = 1), Object.defineProperty(en, "__esModule", { value: !0 })), en);
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
  const e = V(),
    S = cn();
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
  function y(u, a, n) {
    var o;
    return Object.assign(Object.assign({}, c(u, a, n, n?.value === !0)), {
      idType: (o = n?.id_type) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeFeatureGate = y;
  function v(u, a, n) {
    var o, i;
    const r = (o = n?.value) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, c(u, a, n, r)), {
      idType: (i = n?.id_type) !== null && i !== void 0 ? i : null,
      get: m(u, n?.value),
    });
  }
  H._makeDynamicConfig = v;
  function g(u, a, n) {
    var o;
    const i = v(u, a, n);
    return Object.assign(Object.assign({}, i), {
      groupName: (o = n?.group_name) !== null && o !== void 0 ? o : null,
    });
  }
  H._makeExperiment = g;
  function h(u, a, n, o) {
    var i, r;
    return Object.assign(Object.assign({}, c(u, a, n, void 0)), {
      get: m(u, n?.value, o),
      groupName: (i = n?.group_name) !== null && i !== void 0 ? i : null,
      __value: (r = n?.value) !== null && r !== void 0 ? r : {},
    });
  }
  H._makeLayer = h;
  function b(u, a, n, o) {
    return Object.assign(Object.assign(Object.assign({}, u), a), { get: m(u.name, n, o) });
  }
  H._mergeOverride = b;
  function m(u, a, n) {
    return (o, i) => {
      var r;
      const t = (r = a?.[o]) !== null && r !== void 0 ? r : null;
      return t == null
        ? (i ?? null)
        : i != null && !(0, S._isTypeMatch)(t, i)
          ? (e.Log.warn(
              `Parameter type mismatch. '${u}.${o}' was found to be type '${typeof t}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (n?.(o), t);
    };
  }
  return ((H._makeTypedGet = m), H);
}
var tn = {},
  zr;
function zi() {
  return (zr || ((zr = 1), Object.defineProperty(tn, "__esModule", { value: !0 })), tn);
}
var Ae = {},
  Jr;
function Ji() {
  if (Jr) return Ae;
  ((Jr = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.UPDATE_DETAIL_ERROR_MESSAGES = Ae.createUpdateDetails = void 0));
  const e = (S, c, y, v, g, h) => ({
    duration: y,
    source: c,
    success: S,
    error: v,
    sourceUrl: g,
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
        var S =
            (Ie && Ie.__createBinding) ||
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
            (Ie && Ie.__exportStar) ||
            function (u, a) {
              for (var n in u)
                n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && S(a, u, n);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
          ce());
        const y = ce(),
          v = rn();
        Object.defineProperty(e, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const g = ii();
        Object.defineProperty(e, "EventLogger", {
          enumerable: !0,
          get: function () {
            return g.EventLogger;
          },
        });
        const h = V();
        Object.defineProperty(e, "Log", {
          enumerable: !0,
          get: function () {
            return h.Log;
          },
        });
        const b = ut(),
          m = _e();
        (Object.defineProperty(e, "Storage", {
          enumerable: !0,
          get: function () {
            return m.Storage;
          },
        }),
          c(ce(), e),
          c(ft(), e),
          c(Ci(), e),
          c(Ti(), e),
          c(rn(), e),
          c(Ui(), e),
          c(ai(), e),
          c(Ri(), e),
          c(Mi(), e),
          c(Be(), e),
          c(Li(), e),
          c(V(), e),
          c(li(), e),
          c(vt(), e),
          c(Ai(), e),
          c(Ni(), e),
          c(Fi(), e),
          c(ae(), e),
          c(gn(), e),
          c(yt(), e),
          c(qi(), e),
          c(st(), e),
          c(Ki(), e),
          c(ci(), e),
          c(Bi(), e),
          c(ni(), e),
          c(ut(), e),
          c(ht(), e),
          c(Gi(), e),
          c(Vi(), e),
          c(zi(), e),
          c(oi(), e),
          c(_e(), e),
          c(si(), e),
          c(cn(), e),
          c(ri(), e),
          c(_n(), e),
          c(dn(), e),
          c(Ji(), e),
          c(ui(), e),
          Object.assign((0, y._getStatsigGlobal)(), { Log: h.Log, SDK_VERSION: b.SDK_VERSION }));
      })(Ie)),
    Ie
  );
}
var no = Wi();
export { xi as a, Wi as b, at as c, Hi as g, Qi as r, no as s };
