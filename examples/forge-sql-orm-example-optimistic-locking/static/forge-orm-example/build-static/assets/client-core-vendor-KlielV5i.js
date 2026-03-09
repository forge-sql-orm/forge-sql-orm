import { c as gt } from "./lodash-vendor-Dv-o4pqD.js";
var $ = {},
  Ge = {},
  ze = {},
  ft;
function R() {
  return (
    ft ||
      ((ft = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Log = t.LogLevel = void 0));
        const f = " DEBUG ",
          d = "  INFO ",
          E = "  WARN ",
          v = " ERROR ";
        function _(y) {
          return (y.unshift("[Statsig]"), y);
        }
        t.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
        class l {
          static info(...S) {
            l.level >= t.LogLevel.Info && console.info(d, ..._(S));
          }
          static debug(...S) {
            l.level >= t.LogLevel.Debug && console.debug(f, ..._(S));
          }
          static warn(...S) {
            l.level >= t.LogLevel.Warn && console.warn(E, ..._(S));
          }
          static error(...S) {
            l.level >= t.LogLevel.Error && console.error(v, ..._(S));
          }
        }
        ((t.Log = l), (l.level = t.LogLevel.Warn));
      })(ze)),
    ze
  );
}
var vt;
function de() {
  return (
    vt ||
      ((vt = 1),
      (function (t) {
        var f, d, E;
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t._getInstance = t._getStatsigGlobalFlag = t._getStatsigGlobal = void 0));
        const v = R(),
          _ = () => {
            try {
              return typeof __STATSIG__ < "u" ? __STATSIG__ : r;
            } catch {
              return r;
            }
          };
        t._getStatsigGlobal = _;
        const l = (i) => (0, t._getStatsigGlobal)()[i];
        t._getStatsigGlobalFlag = l;
        const y = (i) => {
          const n = (0, t._getStatsigGlobal)();
          return i
            ? n.instances && n.instances[i]
            : (n.instances &&
                Object.keys(n.instances).length > 1 &&
                v.Log.warn(
                  "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.",
                ),
              n.firstInstance);
        };
        t._getInstance = y;
        const S = "__STATSIG__",
          s = typeof window < "u" ? window : {},
          a = typeof gt < "u" ? gt : {},
          o = typeof globalThis < "u" ? globalThis : {},
          r =
            (E =
              (d = (f = s[S]) !== null && f !== void 0 ? f : a[S]) !== null && d !== void 0
                ? d
                : o[S]) !== null && E !== void 0
              ? E
              : { instance: t._getInstance };
        ((s[S] = r), (a[S] = r), (o[S] = r));
      })(Ge)),
    Ge
  );
}
var Ve = {},
  mt;
function lt() {
  return (
    mt ||
      ((mt = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Diagnostics = void 0));
        const f = new Map(),
          d = "start",
          E = "end",
          v = "statsig::diagnostics";
        t.Diagnostics = {
          _getMarkers: (s) => f.get(s),
          _markInitOverallStart: (s) => {
            y(s, _({}, d, "overall"));
          },
          _markInitOverallEnd: (s, a, o) => {
            y(
              s,
              _(
                {
                  success: a,
                  error: a ? void 0 : { name: "InitializeError", message: "Failed to initialize" },
                  evaluationDetails: o,
                },
                E,
                "overall",
              ),
            );
          },
          _markInitNetworkReqStart: (s, a) => {
            y(s, _(a, d, "initialize", "network_request"));
          },
          _markInitNetworkReqEnd: (s, a) => {
            y(s, _(a, E, "initialize", "network_request"));
          },
          _markInitProcessStart: (s) => {
            y(s, _({}, d, "initialize", "process"));
          },
          _markInitProcessEnd: (s, a) => {
            y(s, _(a, E, "initialize", "process"));
          },
          _clearMarkers: (s) => {
            f.delete(s);
          },
          _formatError(s) {
            if (s && typeof s == "object")
              return { code: S(s, "code"), name: S(s, "name"), message: S(s, "message") };
          },
          _getDiagnosticsData(s, a, o, r) {
            var i;
            return {
              success: s?.ok === !0,
              statusCode: s?.status,
              sdkRegion:
                (i = s?.headers) === null || i === void 0 ? void 0 : i.get("x-statsig-region"),
              isDelta: o.includes('"is_delta":true') === !0 ? !0 : void 0,
              attempt: a,
              error: t.Diagnostics._formatError(r),
            };
          },
          _enqueueDiagnosticsEvent(s, a, o, r) {
            const i = t.Diagnostics._getMarkers(o);
            if (i == null || i.length <= 0) return -1;
            const n = i[i.length - 1].timestamp - i[0].timestamp;
            t.Diagnostics._clearMarkers(o);
            const e = l(s, { context: "initialize", markers: i.slice(), statsigOptions: r });
            return (a.enqueue(e), n);
          },
        };
        function _(s, a, o, r) {
          return Object.assign({ key: o, action: a, step: r, timestamp: Date.now() }, s);
        }
        function l(s, a) {
          return { eventName: v, user: s, value: null, metadata: a, time: Date.now() };
        }
        function y(s, a) {
          var o;
          const r = (o = f.get(s)) !== null && o !== void 0 ? o : [];
          (r.push(a), f.set(s, r));
        }
        function S(s, a) {
          if (a in s) return s[a];
        }
      })(Ve)),
    Ve
  );
}
var ee = {},
  me = {},
  ye = {},
  yt;
function Dn() {
  if (yt) return ye;
  ((yt = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.EventBatch = void 0));
  let t = class {
    constructor(d) {
      ((this.attempts = 0), (this.createdAt = Date.now()), (this.events = d));
    }
    incrementAttempts() {
      this.attempts++;
    }
  };
  return ((ye.EventBatch = t), ye);
}
var Se = {},
  St;
function ut() {
  return (
    St ||
      ((St = 1),
      Object.defineProperty(Se, "__esModule", { value: !0 }),
      (Se.EventRetryConstants = void 0),
      (Se.EventRetryConstants = {
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
    Se
  );
}
var Et;
function kn() {
  if (Et) return me;
  ((Et = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.BatchQueue = void 0));
  const t = Dn(),
    f = ut();
  class d {
    constructor(v = f.EventRetryConstants.DEFAULT_BATCH_SIZE) {
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
        l = 0;
      for (; _ < v.length; ) {
        const y = v.slice(_, _ + this._batchSize);
        ((l += this._enqueueBatch(new t.EventBatch(y))), (_ += this._batchSize));
      }
      return l;
    }
    _enqueueBatch(v) {
      this._batches.push(v);
      let _ = 0;
      for (; this._batches.length > f.EventRetryConstants.MAX_PENDING_BATCHES; ) {
        const l = this._batches.shift();
        l && (_ += l.events.length);
      }
      return _;
    }
  }
  return ((me.BatchQueue = d), me);
}
var te = {},
  Qe = {},
  ne = {},
  pt;
function ct() {
  if (pt) return ne;
  ((pt = 1),
    Object.defineProperty(ne, "__esModule", { value: !0 }),
    (ne._isTypeMatch = ne._typeOf = void 0));
  function t(d) {
    return Array.isArray(d) ? "array" : typeof d;
  }
  ne._typeOf = t;
  function f(d, E) {
    const v = (_) => (Array.isArray(_) ? "array" : _ === null ? "null" : typeof _);
    return v(d) === v(E);
  }
  return ((ne._isTypeMatch = f), ne);
}
var bt;
function _e() {
  return (
    bt ||
      ((bt = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t._getSortedObject = t._DJB2Object = t._DJB2 = void 0));
        const f = ct(),
          d = (_) => {
            let l = 0;
            for (let y = 0; y < _.length; y++) {
              const S = _.charCodeAt(y);
              ((l = (l << 5) - l + S), (l = l & l));
            }
            return String(l >>> 0);
          };
        t._DJB2 = d;
        const E = (_, l) => (0, t._DJB2)(JSON.stringify((0, t._getSortedObject)(_, l)));
        t._DJB2Object = E;
        const v = (_, l) => {
          if (_ == null) return null;
          const y = Object.keys(_).sort(),
            S = {};
          return (
            y.forEach((s) => {
              const a = _[s];
              if (l === 0 || (0, f._typeOf)(a) !== "object") {
                S[s] = a;
                return;
              }
              S[s] = (0, t._getSortedObject)(a, l != null ? l - 1 : l);
            }),
            S
          );
        };
        t._getSortedObject = v;
      })(Qe)),
    Qe
  );
}
var wt;
function Be() {
  if (wt) return te;
  ((wt = 1),
    Object.defineProperty(te, "__esModule", { value: !0 }),
    (te._getStorageKey = te._getUserStorageKey = void 0));
  const t = _e();
  function f(E, v, _) {
    var l;
    if (_) return _(E, v);
    const y = v && v.customIDs ? v.customIDs : {},
      S = [
        `uid:${(l = v?.userID) !== null && l !== void 0 ? l : ""}`,
        `cids:${Object.keys(y)
          .sort((s, a) => s.localeCompare(a))
          .map((s) => `${s}-${y[s]}`)
          .join(",")}`,
        `k:${E}`,
      ];
    return (0, t._DJB2)(S.join("|"));
  }
  te._getUserStorageKey = f;
  function d(E, v, _) {
    return v ? f(E, v, _) : (0, t._DJB2)(`k:${E}`);
  }
  return ((te._getStorageKey = d), te);
}
var re = {},
  ie = {},
  Je = {},
  Ct;
function Re() {
  return (
    Ct ||
      ((Ct = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NetworkParam = t.NetworkDefault = t.Endpoint = void 0),
          (t.Endpoint = {
            _initialize: "initialize",
            _rgstr: "rgstr",
            _download_config_specs: "download_config_specs",
          }),
          (t.NetworkDefault = {
            [t.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
            [t.Endpoint._initialize]: "https://featureassets.org/v1",
            [t.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1",
          }),
          (t.NetworkParam = {
            EventCount: "ec",
            SdkKey: "k",
            SdkType: "st",
            SdkVersion: "sv",
            Time: "t",
            SessionID: "sid",
            StatsigEncoded: "se",
            IsGzipped: "gz",
          }));
      })(Je)),
    Je
  );
}
var We = {},
  He = {},
  It;
function W() {
  return (
    It ||
      ((It = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t._cloneObject =
            t._getUnloadEvent =
            t._getCurrentPageUrlSafe =
            t._addDocumentEventListenerSafe =
            t._addWindowEventListenerSafe =
            t._isServerEnv =
            t._getDocumentSafe =
            t._getWindowSafe =
              void 0));
        const f = R(),
          d = () => (typeof window < "u" ? window : null);
        t._getWindowSafe = d;
        const E = () => {
          var a;
          const o = (0, t._getWindowSafe)();
          return (a = o?.document) !== null && a !== void 0 ? a : null;
        };
        t._getDocumentSafe = E;
        const v = () => {
          if ((0, t._getDocumentSafe)() !== null) return !1;
          const a =
            typeof process < "u" && process.versions != null && process.versions.node != null;
          return typeof EdgeRuntime == "string" || a;
        };
        t._isServerEnv = v;
        const _ = (a, o) => {
          const r = (0, t._getWindowSafe)();
          typeof r?.addEventListener == "function" && r.addEventListener(a, o);
        };
        t._addWindowEventListenerSafe = _;
        const l = (a, o) => {
          const r = (0, t._getDocumentSafe)();
          typeof r?.addEventListener == "function" && r.addEventListener(a, o);
        };
        t._addDocumentEventListenerSafe = l;
        const y = () => {
          var a;
          try {
            return (a = (0, t._getWindowSafe)()) === null || a === void 0
              ? void 0
              : a.location.href.split(/[?#]/)[0];
          } catch {
            return;
          }
        };
        t._getCurrentPageUrlSafe = y;
        const S = () => {
          const a = (0, t._getWindowSafe)();
          return a && "onpagehide" in a ? "pagehide" : "beforeunload";
        };
        t._getUnloadEvent = S;
        const s = (a, o) => {
          try {
            return JSON.parse(JSON.stringify(o));
          } catch {
            return (f.Log.error(`Failed to clone object ${a}`), null);
          }
        };
        t._cloneObject = s;
      })(He)),
    He
  );
}
var Dt;
function Ae() {
  return (
    Dt ||
      ((Dt = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t._notifyVisibilityChanged =
            t._subscribeToVisiblityChanged =
            t._isUnloading =
            t._isCurrentlyVisible =
              void 0));
        const f = W(),
          d = "foreground",
          E = "background",
          v = [];
        let _ = d,
          l = !1;
        const y = () => _ === d;
        t._isCurrentlyVisible = y;
        const S = () => l;
        t._isUnloading = S;
        const s = (o) => {
          v.unshift(o);
        };
        t._subscribeToVisiblityChanged = s;
        const a = (o) => {
          o !== _ && ((_ = o), v.forEach((r) => r(o)));
        };
        ((t._notifyVisibilityChanged = a),
          (0, f._addWindowEventListenerSafe)("focus", () => {
            ((l = !1), (0, t._notifyVisibilityChanged)(d));
          }),
          (0, f._addWindowEventListenerSafe)("blur", () => (0, t._notifyVisibilityChanged)(E)),
          (0, f._addDocumentEventListenerSafe)("visibilitychange", () => {
            (0, t._notifyVisibilityChanged)(document.visibilityState === "visible" ? d : E);
          }),
          (0, f._addWindowEventListenerSafe)((0, f._getUnloadEvent)(), () => {
            ((l = !0), (0, t._notifyVisibilityChanged)(E));
          }));
      })(We)),
    We
  );
}
var kt;
function On() {
  if (kt) return ie;
  kt = 1;
  var t =
    (ie && ie.__awaiter) ||
    function (_, l, y, S) {
      function s(a) {
        return a instanceof y
          ? a
          : new y(function (o) {
              o(a);
            });
      }
      return new (y || (y = Promise))(function (a, o) {
        function r(e) {
          try {
            n(S.next(e));
          } catch (u) {
            o(u);
          }
        }
        function i(e) {
          try {
            n(S.throw(e));
          } catch (u) {
            o(u);
          }
        }
        function n(e) {
          e.done ? a(e.value) : s(e.value).then(r, i);
        }
        n((S = S.apply(_, l || [])).next());
      });
    };
  (Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.EventSender = void 0));
  const f = R(),
    d = Re(),
    E = Ae();
  let v = class {
    constructor(l, y, S, s, a, o) {
      ((this._sdkKey = l),
        (this._network = y),
        (this._emitter = S),
        (this._options = a),
        (this._logEventUrlConfig = s),
        (this._loggingEnabled = o));
    }
    setLogEventCompressionMode(l) {
      this._network.setLogEventCompressionMode(l);
    }
    setLoggingEnabled(l) {
      this._loggingEnabled = l;
    }
    sendBatch(l) {
      return t(this, void 0, void 0, function* () {
        var y, S;
        try {
          const a =
            (0, E._isUnloading)() &&
            this._network.isBeaconSupported() &&
            ((S = (y = this._options) === null || y === void 0 ? void 0 : y.networkConfig) ===
              null || S === void 0
              ? void 0
              : S.networkOverrideFunc) == null;
          this._emitter({ name: "pre_logs_flushed", events: l.events });
          const o = a ? this._sendEventsViaBeacon(l) : yield this._sendEventsViaPost(l);
          return o.success
            ? (this._emitter({ name: "logs_flushed", events: l.events }), o)
            : { success: !1, statusCode: o.statusCode };
        } catch (s) {
          return (f.Log.warn("Failed to send batch:", s), { success: !1, statusCode: -1 });
        }
      });
    }
    _sendEventsViaPost(l) {
      return t(this, void 0, void 0, function* () {
        var y;
        const S = yield this._network.post(this._getRequestData(l)),
          s = (y = S?.code) !== null && y !== void 0 ? y : -1;
        return { success: s >= 200 && s < 300, statusCode: s };
      });
    }
    _sendEventsViaBeacon(l) {
      const y = this._network.beacon(this._getRequestData(l));
      return { success: y, statusCode: y ? 200 : -1 };
    }
    _getRequestData(l) {
      return {
        sdkKey: this._sdkKey,
        data: { events: l.events },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: { [d.NetworkParam.EventCount]: String(l.events.length) },
        headers: {
          "statsig-event-count": String(l.events.length),
          "statsig-retry-count": String(l.attempts),
        },
        credentials: "same-origin",
      };
    }
  };
  return ((ie.EventSender = v), ie);
}
var Ee = {},
  Ot;
function Tn() {
  if (Ot) return Ee;
  ((Ot = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.FlushInterval = void 0));
  const t = 1e3,
    f = 6e4;
  let d = class {
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
      return this.getTimeSinceLastAttempt() >= f;
    }
    getTimeTillMaxInterval() {
      return f - this.getTimeSinceLastAttempt();
    }
    hasCompletelyRecoveredFromBackoff() {
      return this._currentIntervalMs <= t;
    }
    adjustForSuccess() {
      const v = this._currentIntervalMs;
      v !== t && (this._currentIntervalMs = Math.max(t, Math.floor(v / 2)));
    }
    adjustForFailure() {
      const v = this._currentIntervalMs;
      this._currentIntervalMs = Math.min(f, v * 2);
    }
    getTimeUntilNextFlush() {
      return this.getCurrentIntervalMs() - this.getTimeSinceLastAttempt();
    }
  };
  return ((Ee.FlushInterval = d), Ee);
}
var pe = {},
  Tt;
function Fn() {
  if (Tt) return pe;
  ((Tt = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.FlushType = void 0));
  var t;
  return (
    (function (f) {
      ((f.ScheduledMaxTime = "scheduled:max_time"),
        (f.ScheduledFullBatch = "scheduled:full_batch"),
        (f.Limit = "limit"),
        (f.Manual = "manual"),
        (f.Shutdown = "shutdown"));
    })(t || (pe.FlushType = t = {})),
    pe
  );
}
var be = {},
  z = {},
  oe = {},
  Ft;
function Mn() {
  if (Ft) return oe;
  Ft = 1;
  var t =
    (oe && oe.__awaiter) ||
    function (y, S, s, a) {
      function o(r) {
        return r instanceof s
          ? r
          : new s(function (i) {
              i(r);
            });
      }
      return new (s || (s = Promise))(function (r, i) {
        function n(h) {
          try {
            u(a.next(h));
          } catch (m) {
            i(m);
          }
        }
        function e(h) {
          try {
            u(a.throw(h));
          } catch (m) {
            i(m);
          }
        }
        function u(h) {
          h.done ? r(h.value) : o(h.value).then(n, e);
        }
        u((a = a.apply(y, S || [])).next());
      });
    };
  (Object.defineProperty(oe, "__esModule", { value: !0 }), (oe._fetchTxtRecords = void 0));
  const f = new Uint8Array([
      0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
      116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
    ]),
    d = "https://cloudflare-dns.com/dns-query",
    E = ["i", "e", "d"],
    v = 200;
  function _(y) {
    return t(this, void 0, void 0, function* () {
      const S = yield y(d, {
        method: "POST",
        headers: { "Content-Type": "application/dns-message", Accept: "application/dns-message" },
        body: f,
      });
      if (!S.ok) {
        const o = new Error("Failed to fetch TXT records from DNS");
        throw ((o.name = "DnsTxtFetchError"), o);
      }
      const s = yield S.arrayBuffer(),
        a = new Uint8Array(s);
      return l(a);
    });
  }
  oe._fetchTxtRecords = _;
  function l(y) {
    const S = y.findIndex(
      (a, o) =>
        o < v && String.fromCharCode(a) === "=" && E.includes(String.fromCharCode(y[o - 1])),
    );
    if (S === -1) {
      const a = new Error("Failed to parse TXT records from DNS");
      throw ((a.name = "DnsTxtParseError"), a);
    }
    let s = "";
    for (let a = S - 1; a < y.length; a++) s += String.fromCharCode(y[a]);
    return s.split(",");
  }
  return oe;
}
var Xe = {},
  Mt;
function J() {
  return (
    Mt ||
      ((Mt = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t._setObjectInStorage = t._getObjectFromStorage = t.Storage = void 0));
        const f = R(),
          d = W(),
          E = {},
          v = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (o) => (E[o] ? E[o] : null),
            setItem: (o, r) => {
              E[o] = r;
            },
            removeItem: (o) => {
              delete E[o];
            },
            getAllKeys: () => Object.keys(E),
          };
        let _ = null;
        try {
          const o = (0, d._getWindowSafe)();
          o &&
            o.localStorage &&
            typeof o.localStorage.getItem == "function" &&
            (_ = {
              isReady: () => !0,
              isReadyResolver: () => null,
              getProviderName: () => "LocalStorage",
              getItem: (r) => o.localStorage.getItem(r),
              setItem: (r, i) => o.localStorage.setItem(r, i),
              removeItem: (r) => o.localStorage.removeItem(r),
              getAllKeys: () => Object.keys(o.localStorage),
            });
        } catch {
          f.Log.warn("Failed to setup localStorageProvider.");
        }
        let l = _ ?? v,
          y = l;
        function S(o) {
          try {
            return o();
          } catch (r) {
            if (r instanceof Error && r.name === "SecurityError")
              return (t.Storage._setProvider(v), null);
            throw r;
          }
        }
        t.Storage = {
          isReady: () => y.isReady(),
          isReadyResolver: () => y.isReadyResolver(),
          getProviderName: () => y.getProviderName(),
          getItem: (o) => S(() => y.getItem(o)),
          setItem: (o, r) => S(() => y.setItem(o, r)),
          removeItem: (o) => y.removeItem(o),
          getAllKeys: () => y.getAllKeys(),
          _setProvider: (o) => {
            ((l = o), (y = o));
          },
          _setDisabled: (o) => {
            o ? (y = v) : (y = l);
          },
        };
        function s(o) {
          const r = t.Storage.getItem(o);
          try {
            return JSON.parse(r ?? "null");
          } catch {
            return (f.Log.error(`Failed to parse value for key "${o}"`), null);
          }
        }
        t._getObjectFromStorage = s;
        function a(o, r) {
          t.Storage.setItem(o, JSON.stringify(r));
        }
        t._setObjectInStorage = a;
      })(Xe)),
    Xe
  );
}
var Lt;
function Ln() {
  if (Lt) return z;
  Lt = 1;
  var t =
    (z && z.__awaiter) ||
    function (i, n, e, u) {
      function h(m) {
        return m instanceof e
          ? m
          : new e(function (C) {
              C(m);
            });
      }
      return new (e || (e = Promise))(function (m, C) {
        function c(w) {
          try {
            p(u.next(w));
          } catch (D) {
            C(D);
          }
        }
        function g(w) {
          try {
            p(u.throw(w));
          } catch (D) {
            C(D);
          }
        }
        function p(w) {
          w.done ? m(w.value) : h(w.value).then(c, g);
        }
        p((u = u.apply(i, n || [])).next());
      });
    };
  (Object.defineProperty(z, "__esModule", { value: !0 }),
    (z._isDomainFailure = z.NetworkFallbackResolver = void 0));
  const f = Mn(),
    d = _e(),
    E = R(),
    v = J(),
    _ = 10080 * 60 * 1e3,
    l = 14400 * 1e3;
  let y = class {
    constructor(n) {
      var e;
      ((this._fallbackInfo = null),
        (this._errorBoundary = null),
        (this._dnsQueryCooldowns = {}),
        (this._networkOverrideFunc =
          (e = n.networkConfig) === null || e === void 0 ? void 0 : e.networkOverrideFunc));
    }
    setErrorBoundary(n) {
      this._errorBoundary = n;
    }
    tryBumpExpiryTime(n, e) {
      var u;
      const h = (u = this._fallbackInfo) === null || u === void 0 ? void 0 : u[e.endpoint];
      h &&
        ((h.expiryTime = Date.now() + _),
        a(n, Object.assign(Object.assign({}, this._fallbackInfo), { [e.endpoint]: h })));
    }
    getActiveFallbackUrl(n, e) {
      var u, h;
      if (e.customUrl != null && e.fallbackUrls != null) return null;
      let m = this._fallbackInfo;
      m == null && ((m = (u = o(n)) !== null && u !== void 0 ? u : {}), (this._fallbackInfo = m));
      const C = m[e.endpoint];
      return !C ||
        Date.now() > ((h = C.expiryTime) !== null && h !== void 0 ? h : 0) ||
        e.getChecksum() !== C.urlConfigChecksum
        ? (delete m[e.endpoint], (this._fallbackInfo = m), a(n, this._fallbackInfo), null)
        : C.url
          ? C.url
          : null;
    }
    tryFetchUpdatedFallbackInfo(n, e, u, h) {
      return t(this, void 0, void 0, function* () {
        var m, C;
        try {
          if (!S(u, h)) return !1;
          const g =
              e.customUrl == null && e.fallbackUrls == null
                ? yield this._tryFetchFallbackUrlsFromNetwork(e)
                : e.fallbackUrls,
            p = this._pickNewFallbackUrl(
              (m = this._fallbackInfo) === null || m === void 0 ? void 0 : m[e.endpoint],
              g,
            );
          return p ? (this._updateFallbackInfoWithNewUrl(n, e, p), !0) : !1;
        } catch (c) {
          return (
            (C = this._errorBoundary) === null ||
              C === void 0 ||
              C.logError("tryFetchUpdatedFallbackInfo", c),
            !1
          );
        }
      });
    }
    _updateFallbackInfoWithNewUrl(n, e, u) {
      var h, m, C;
      const c = {
          urlConfigChecksum: e.getChecksum(),
          url: u,
          expiryTime: Date.now() + _,
          previous: [],
        },
        g = e.endpoint,
        p = (h = this._fallbackInfo) === null || h === void 0 ? void 0 : h[g];
      (p && c.previous.push(...p.previous), c.previous.length > 10 && (c.previous = []));
      const w =
        (C = (m = this._fallbackInfo) === null || m === void 0 ? void 0 : m[g]) === null ||
        C === void 0
          ? void 0
          : C.url;
      (w != null && c.previous.push(w),
        (this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [g]: c })),
        a(n, this._fallbackInfo));
    }
    _tryFetchFallbackUrlsFromNetwork(n) {
      return t(this, void 0, void 0, function* () {
        var e;
        const u = this._dnsQueryCooldowns[n.endpoint];
        if (u && Date.now() < u) return null;
        this._dnsQueryCooldowns[n.endpoint] = Date.now() + l;
        const h = [],
          m = yield (0, f._fetchTxtRecords)(
            (e = this._networkOverrideFunc) !== null && e !== void 0 ? e : fetch,
          ),
          C = r(n.defaultUrl);
        for (const c of m) {
          if (!c.startsWith(n.endpointDnsKey + "=")) continue;
          const g = c.split("=");
          if (g.length > 1) {
            let p = g[1];
            (p.endsWith("/") && (p = p.slice(0, -1)), h.push(`https://${p}${C}`));
          }
        }
        return h;
      });
    }
    _pickNewFallbackUrl(n, e) {
      var u;
      if (e == null) return null;
      const h = new Set((u = n?.previous) !== null && u !== void 0 ? u : []),
        m = n?.url;
      let C = null;
      for (const c of e) {
        const g = c.endsWith("/") ? c.slice(0, -1) : c;
        if (!h.has(c) && g !== m) {
          C = g;
          break;
        }
      }
      return C;
    }
  };
  z.NetworkFallbackResolver = y;
  function S(i, n) {
    var e;
    const u = (e = i?.toLowerCase()) !== null && e !== void 0 ? e : "";
    return (
      n ||
      u.includes("uncaught exception") ||
      u.includes("failed to fetch") ||
      u.includes("networkerror when attempting to fetch resource")
    );
  }
  z._isDomainFailure = S;
  function s(i) {
    return `statsig.network_fallback.${(0, d._DJB2)(i)}`;
  }
  function a(i, n) {
    const e = s(i);
    if (!n || Object.keys(n).length === 0) {
      v.Storage.removeItem(e);
      return;
    }
    v.Storage.setItem(e, JSON.stringify(n));
  }
  function o(i) {
    const n = s(i),
      e = v.Storage.getItem(n);
    if (!e) return null;
    try {
      return JSON.parse(e);
    } catch {
      return (E.Log.error("Failed to parse FallbackInfo"), null);
    }
  }
  function r(i) {
    try {
      return new URL(i).pathname;
    } catch {
      return null;
    }
  }
  return z;
}
var we = {},
  Rt;
function gn() {
  if (Rt) return we;
  ((Rt = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.SDKFlags = void 0));
  const t = {};
  return (
    (we.SDKFlags = {
      setFlags: (f, d) => {
        t[f] = d;
      },
      get: (f, d) => {
        var E, v;
        return (v = (E = t[f]) === null || E === void 0 ? void 0 : E[d]) !== null && v !== void 0
          ? v
          : !1;
      },
    }),
    we
  );
}
var Ce = {},
  At;
function dt() {
  if (At) return Ce;
  ((At = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.SDKType = void 0));
  const t = {};
  let f;
  return (
    (Ce.SDKType = {
      _get: (d) => {
        var E;
        return ((E = t[d]) !== null && E !== void 0 ? E : "js-mono") + (f ?? "");
      },
      _setClientType(d, E) {
        t[d] = E;
      },
      _setBindingType(d) {
        (!f || f === "-react") && (f = "-" + d);
      },
    }),
    Ce
  );
}
var Ye = {},
  Ie = {},
  Pt;
function _t() {
  if (Pt) return Ie;
  ((Pt = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.getUUID = void 0));
  function t() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
    let f = new Date().getTime(),
      d = (typeof performance < "u" && performance.now && performance.now() * 1e3) || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (v) => {
        let _ = Math.random() * 16;
        return (
          f > 0
            ? ((_ = ((f + _) % 16) | 0), (f = Math.floor(f / 16)))
            : ((_ = ((d + _) % 16) | 0), (d = Math.floor(d / 16))),
          (v === "x" ? _ : (_ & 7) | 8).toString(16)
        );
      },
    );
  }
  return ((Ie.getUUID = t), Ie);
}
var Ut;
function Pe() {
  return (
    Ut ||
      ((Ut = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StatsigSession = t.SessionID = void 0));
        const f = Be(),
          d = R(),
          E = J(),
          v = _t(),
          _ = Ae(),
          l = 1800 * 1e3,
          y = 14400 * 1e3,
          S = 15e3,
          s = {};
        ((0, _._subscribeToVisiblityChanged)((c) => {
          c === "background" && Object.values(s).forEach((g) => e(g));
        }),
          (t.SessionID = { get: (c) => t.StatsigSession.get(c).data.sessionID }),
          (t.StatsigSession = {
            get: (c, g = !0) => {
              s[c] == null && (s[c] = m(c));
              const p = s[c];
              return a(p, g);
            },
            overrideInitialSessionID: (c, g) => {
              const p = Date.now(),
                w = {
                  data: { sessionID: c, startTime: p, lastUpdate: p },
                  sdkKey: g,
                  lastPersistedAt: Date.now(),
                  storageKey: n(g),
                };
              (e(w), (s[g] = w));
            },
            checkForIdleSession: (c) => {
              const g = s[c];
              if (!g) return;
              o(g) && e(g);
            },
          }));
        function a(c, g) {
          const p = Date.now();
          return (o(c) ? e(c) : g && ((c.data.lastUpdate = p), u(c)), c);
        }
        function o(c) {
          var g;
          const p = c.data,
            w = r(p) || i(p);
          return (
            w &&
              ((c.data = C()),
              (g = __STATSIG__ == null ? void 0 : __STATSIG__.instance(c.sdkKey)) === null ||
                g === void 0 ||
                g.$emt({ name: "session_expired" })),
            w
          );
        }
        function r({ lastUpdate: c }) {
          return Date.now() - c > l;
        }
        function i({ startTime: c }) {
          return Date.now() - c > y;
        }
        function n(c) {
          return `statsig.session_id.${(0, f._getStorageKey)(c)}`;
        }
        function e(c) {
          try {
            ((0, E._setObjectInStorage)(c.storageKey, c.data), (c.lastPersistedAt = Date.now()));
          } catch {
            d.Log.warn("Failed to save SessionID");
          }
        }
        function u(c) {
          Date.now() - c.lastPersistedAt > S && e(c);
        }
        function h(c) {
          return (0, E._getObjectFromStorage)(c);
        }
        function m(c) {
          const g = n(c),
            p = h(g);
          return p && p.sessionID && p.startTime && p.lastUpdate
            ? { data: p, sdkKey: c, lastPersistedAt: 0, storageKey: g }
            : { data: C(), sdkKey: c, lastPersistedAt: 0, storageKey: g };
        }
        function C() {
          return { sessionID: (0, v.getUUID)(), startTime: Date.now(), lastUpdate: Date.now() };
        }
      })(Ye)),
    Ye
  );
}
var se = {},
  Nt;
function Ue() {
  if (Nt) return se;
  ((Nt = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.getCookieName = se.StableID = void 0));
  const t = Be(),
    f = R(),
    d = W(),
    E = J(),
    v = _t(),
    _ = {},
    l = {},
    y = {};
  se.StableID = {
    cookiesEnabled: !1,
    randomID: Math.random().toString(36),
    get: (n) => {
      if (y[n]) return null;
      if (_[n] != null) return _[n];
      let e = null;
      return (
        (e = o(n)),
        e != null
          ? ((_[n] = e), s(e, n), e)
          : ((e = a(n)), e == null && (e = (0, v.getUUID)()), s(e, n), r(e, n), (_[n] = e), e)
      );
    },
    setOverride: (n, e) => {
      ((_[e] = n), s(n, e), r(n, e));
    },
    _setCookiesEnabled: (n, e) => {
      l[n] = e;
    },
    _setDisabled: (n, e) => {
      y[n] = e;
    },
  };
  function S(n) {
    return `statsig.stable_id.${(0, t._getStorageKey)(n)}`;
  }
  function s(n, e) {
    const u = S(e);
    try {
      (0, E._setObjectInStorage)(u, n);
    } catch {
      f.Log.warn("Failed to save StableID to storage");
    }
  }
  function a(n) {
    const e = S(n);
    return (0, E._getObjectFromStorage)(e);
  }
  function o(n) {
    if (!l[n] || (0, d._getDocumentSafe)() == null) return null;
    const e = document.cookie.split(";");
    for (const u of e) {
      const [h, m] = u.trim().split("=");
      if (h === i(n)) return decodeURIComponent(m);
    }
    return null;
  }
  function r(n, e) {
    if (!l[e] || (0, d._getDocumentSafe)() == null) return;
    const u = new Date();
    (u.setFullYear(u.getFullYear() + 1),
      (document.cookie = `${i(e)}=${encodeURIComponent(n)}; expires=${u.toUTCString()}; path=/`));
  }
  function i(n) {
    return `statsig.stable_id.${(0, t._getStorageKey)(n)}`;
  }
  return ((se.getCookieName = i), se);
}
var De = {},
  jt;
function fn() {
  return (
    jt ||
      ((jt = 1),
      Object.defineProperty(De, "__esModule", { value: !0 }),
      (De.ErrorTag = void 0),
      (De.ErrorTag = { NetworkError: "NetworkError" })),
    De
  );
}
var Ze = {},
  Bt;
function je() {
  return (
    Bt ||
      ((Bt = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StatsigMetadataProvider = t.SDK_VERSION = void 0),
          (t.SDK_VERSION = "3.32.0"));
        let f = { sdkVersion: t.SDK_VERSION, sdkType: "js-mono" };
        t.StatsigMetadataProvider = {
          get: () => f,
          add: (d) => {
            f = Object.assign(Object.assign({}, f), d);
          },
        };
      })(Ze)),
    Ze
  );
}
var ae = {},
  qt;
function qe() {
  return (
    qt ||
      ((qt = 1),
      Object.defineProperty(ae, "__esModule", { value: !0 }),
      (ae.LoggingEnabledOption = ae.LogEventCompressionMode = void 0),
      (ae.LogEventCompressionMode = { Disabled: "d", Enabled: "e", Forced: "f" }),
      (ae.LoggingEnabledOption = {
        disabled: "disabled",
        browserOnly: "browser-only",
        always: "always",
      })),
    ae
  );
}
var Kt;
function vn() {
  return (
    Kt ||
      ((Kt = 1),
      (function (t) {
        var f =
          (be && be.__awaiter) ||
          function (T, b, I, k) {
            function O(L) {
              return L instanceof I
                ? L
                : new I(function (A) {
                    A(L);
                  });
            }
            return new (I || (I = Promise))(function (L, A) {
              function ge(U) {
                try {
                  K(k.next(U));
                } catch (j) {
                  A(j);
                }
              }
              function x(U) {
                try {
                  K(k.throw(U));
                } catch (j) {
                  A(j);
                }
              }
              function K(U) {
                U.done ? L(U.value) : O(U.value).then(ge, x);
              }
              K((k = k.apply(T, b || [])).next());
            });
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NetworkCore = t.RETRYABLE_CODES = void 0),
          de());
        const d = de(),
          E = lt(),
          v = R(),
          _ = Re(),
          l = Ln(),
          y = gn(),
          S = dt(),
          s = W(),
          a = Pe(),
          o = Ue(),
          r = fn(),
          i = je(),
          n = qe(),
          e = Ae(),
          u = 1e4,
          h = 500,
          m = 3e4,
          C = 1e3,
          c = 50,
          g = c / C;
        t.RETRYABLE_CODES = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
        let p = class {
          constructor(b, I) {
            ((this._emitter = I),
              (this._errorBoundary = null),
              (this._timeout = u),
              (this._netConfig = {}),
              (this._options = {}),
              (this._leakyBucket = {}),
              (this._lastUsedInitUrl = null),
              b && (this._options = b),
              this._options.networkConfig && (this._netConfig = this._options.networkConfig),
              this._netConfig.networkTimeoutMs &&
                (this._timeout = this._netConfig.networkTimeoutMs),
              (this._fallbackResolver = new l.NetworkFallbackResolver(this._options)),
              this.setLogEventCompressionMode(this._getLogEventCompressionMode(b)));
          }
          setLogEventCompressionMode(b) {
            this._options.logEventCompressionMode = b;
          }
          setErrorBoundary(b) {
            ((this._errorBoundary = b),
              this._errorBoundary.wrap(this),
              this._errorBoundary.wrap(this._fallbackResolver),
              this._fallbackResolver.setErrorBoundary(b));
          }
          isBeaconSupported() {
            return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
          }
          getLastUsedInitUrlAndReset() {
            const b = this._lastUsedInitUrl;
            return ((this._lastUsedInitUrl = null), b);
          }
          beacon(b) {
            if (!w(b)) return !1;
            const I = this._getInternalRequestArgs("POST", b),
              k = this._getPopulatedURL(I),
              O = navigator;
            return O.sendBeacon.bind(O)(k, I.body);
          }
          post(b) {
            return f(this, void 0, void 0, function* () {
              const I = this._getInternalRequestArgs("POST", b);
              return (
                this._tryEncodeBody(I),
                yield this._tryToCompressBody(I),
                this._sendRequest(I)
              );
            });
          }
          get(b) {
            const I = this._getInternalRequestArgs("GET", b);
            return this._sendRequest(I);
          }
          _sendRequest(b) {
            return f(this, void 0, void 0, function* () {
              var I, k, O, L;
              if (!w(b) || this._netConfig.preventAllNetworkTraffic) return null;
              const { method: A, body: ge, retries: x, attempt: K } = b,
                U = b.urlConfig.endpoint;
              if (this._isRateLimited(U))
                return (
                  v.Log.warn(
                    `Request to ${U} was blocked because you are making requests too frequently.`,
                  ),
                  null
                );
              const j = K ?? 1;
              let fe = !1;
              const Y = this._getPopulatedURL(b);
              let q = null;
              const In = (0, e._isUnloading)();
              try {
                const he = {
                  method: A,
                  body: ge,
                  headers: Object.assign({}, b.headers),
                  priority: b.priority,
                  keepalive: In,
                };
                X(b, j);
                const G = this._leakyBucket[U];
                G && ((G.lastRequestTime = Date.now()), (this._leakyBucket[U] = G));
                const Ke =
                  (I = this._netConfig.networkOverrideFunc) !== null && I !== void 0 ? I : fetch;
                let xe;
                if (
                  ((q = yield Promise.race([
                    Ke(Y, he).finally(() => clearTimeout(xe)),
                    new Promise((ht, Ne) => {
                      xe = setTimeout(() => {
                        ((fe = !0), Ne(new Error(`Timeout of ${this._timeout}ms expired.`)));
                      }, this._timeout);
                    }),
                  ])),
                  !q.ok)
                ) {
                  const ht = yield q.text().catch(() => "No Text"),
                    Ne = new Error(`NetworkError: ${Y} ${ht}`);
                  throw ((Ne.name = "NetworkError"), Ne);
                }
                const ve = yield q.text();
                return (
                  N(b, q, j, ve),
                  this._fallbackResolver.tryBumpExpiryTime(b.sdkKey, b.urlConfig),
                  { body: ve, code: q.status }
                );
              } catch (he) {
                const G = M(he),
                  Ke = H(G ?? "", fe);
                if (
                  (N(b, q, j, "", he),
                  (yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
                    b.sdkKey,
                    b.urlConfig,
                    G,
                    Ke,
                  )) &&
                    (b.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(
                      b.sdkKey,
                      b.urlConfig,
                    )),
                  !x ||
                    j > x ||
                    !t.RETRYABLE_CODES.has((k = q?.status) !== null && k !== void 0 ? k : 500))
                ) {
                  (O = this._emitter) === null ||
                    O === void 0 ||
                    O.call(this, {
                      name: "error",
                      error: he,
                      tag: r.ErrorTag.NetworkError,
                      requestArgs: b,
                    });
                  const ve = `A networking error occurred during ${A} request to ${Y}.`;
                  return (
                    v.Log.error(ve, G, he),
                    (L = this._errorBoundary) === null ||
                      L === void 0 ||
                      L.attachErrorIfNoneExists(ve),
                    null
                  );
                }
                return (
                  yield Z(j),
                  this._sendRequest(
                    Object.assign(Object.assign({}, b), { retries: x, attempt: j + 1 }),
                  )
                );
              }
            });
          }
          _getLogEventCompressionMode(b) {
            let I = b?.logEventCompressionMode;
            return (
              !I && b?.disableCompression === !0 && (I = n.LogEventCompressionMode.Disabled),
              I || (I = n.LogEventCompressionMode.Enabled),
              I
            );
          }
          _isRateLimited(b) {
            var I;
            const k = Date.now(),
              O =
                (I = this._leakyBucket[b]) !== null && I !== void 0
                  ? I
                  : { count: 0, lastRequestTime: k },
              L = k - O.lastRequestTime,
              A = Math.floor(L * g);
            return (
              (O.count = Math.max(0, O.count - A)),
              O.count >= c
                ? !0
                : ((O.count += 1), (O.lastRequestTime = k), (this._leakyBucket[b] = O), !1)
            );
          }
          _getPopulatedURL(b) {
            var I;
            const k = (I = b.fallbackUrl) !== null && I !== void 0 ? I : b.urlConfig.getUrl();
            (b.urlConfig.endpoint === _.Endpoint._initialize ||
              b.urlConfig.endpoint === _.Endpoint._download_config_specs) &&
              (this._lastUsedInitUrl = k);
            const O = Object.assign(
                {
                  [_.NetworkParam.SdkKey]: b.sdkKey,
                  [_.NetworkParam.SdkType]: S.SDKType._get(b.sdkKey),
                  [_.NetworkParam.SdkVersion]: i.SDK_VERSION,
                  [_.NetworkParam.Time]: String(Date.now()),
                  [_.NetworkParam.SessionID]: a.SessionID.get(b.sdkKey),
                },
                b.params,
              ),
              L = Object.keys(O)
                .map((A) => `${encodeURIComponent(A)}=${encodeURIComponent(O[A])}`)
                .join("&");
            return `${k}${L ? `?${L}` : ""}`;
          }
          _tryEncodeBody(b) {
            var I;
            const k = (0, s._getWindowSafe)(),
              O = b.body;
            if (
              !(
                !b.isStatsigEncodable ||
                this._options.disableStatsigEncoding ||
                typeof O != "string" ||
                (0, d._getStatsigGlobalFlag)("no-encode") != null ||
                !k?.btoa
              )
            )
              try {
                ((b.body = k.btoa(O).split("").reverse().join("")),
                  (b.params = Object.assign(
                    Object.assign({}, (I = b.params) !== null && I !== void 0 ? I : {}),
                    { [_.NetworkParam.StatsigEncoded]: "1" },
                  )));
              } catch (L) {
                v.Log.warn(`Request encoding failed for ${b.urlConfig.getUrl()}`, L);
              }
          }
          _tryToCompressBody(b) {
            return f(this, void 0, void 0, function* () {
              var I;
              const k = b.body;
              if (!(typeof k != "string" || !F(b, this._options)))
                try {
                  const O = new TextEncoder().encode(k),
                    L = new CompressionStream("gzip"),
                    A = L.writable.getWriter();
                  (A.write(O).catch(v.Log.error), A.close().catch(v.Log.error));
                  const ge = L.readable.getReader(),
                    x = [];
                  let K;
                  for (; !(K = yield ge.read()).done; ) x.push(K.value);
                  const U = x.reduce((Y, q) => Y + q.length, 0),
                    j = new Uint8Array(U);
                  let fe = 0;
                  for (const Y of x) (j.set(Y, fe), (fe += Y.length));
                  ((b.body = j),
                    (b.params = Object.assign(
                      Object.assign({}, (I = b.params) !== null && I !== void 0 ? I : {}),
                      { [_.NetworkParam.IsGzipped]: "1" },
                    )));
                } catch (O) {
                  v.Log.warn(`Request compression failed for ${b.urlConfig.getUrl()}`, O);
                }
            });
          }
          _getInternalRequestArgs(b, I) {
            const k = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig),
              O = Object.assign(Object.assign({}, I), { method: b, fallbackUrl: k });
            return ("data" in I && D(O, I.data), O);
          }
        };
        t.NetworkCore = p;
        const w = (T) =>
            T.sdkKey ? !0 : (v.Log.warn("Unable to make request without an SDK key"), !1),
          D = (T, b) => {
            const { sdkKey: I, fallbackUrl: k } = T,
              O = o.StableID.get(I),
              L = a.SessionID.get(I),
              A = S.SDKType._get(I);
            T.body = JSON.stringify(
              Object.assign(Object.assign({}, b), {
                statsigMetadata: Object.assign(Object.assign({}, i.StatsigMetadataProvider.get()), {
                  stableID: O,
                  sessionID: L,
                  sdkType: A,
                  fallbackUrl: k,
                }),
              }),
            );
          };
        function F(T, b) {
          if (
            !T.isCompressable ||
            (0, d._getStatsigGlobalFlag)("no-compress") != null ||
            typeof CompressionStream > "u" ||
            typeof TextEncoder > "u"
          )
            return !1;
          const I = T.urlConfig.customUrl != null || T.urlConfig.fallbackUrls != null,
            k = y.SDKFlags.get(T.sdkKey, "enable_log_event_compression") === !0;
          switch (b.logEventCompressionMode) {
            case n.LogEventCompressionMode.Disabled:
              return !1;
            case n.LogEventCompressionMode.Enabled:
              return !(I && !k);
            case n.LogEventCompressionMode.Forced:
              return !0;
            default:
              return !1;
          }
        }
        function M(T) {
          return typeof T == "string"
            ? T
            : T instanceof Error
              ? `${T.name}: ${T.message}`
              : "Unknown Error";
        }
        function H(T, b) {
          return T.includes("Timeout") || b;
        }
        function X(T, b) {
          T.urlConfig.endpoint === _.Endpoint._initialize &&
            E.Diagnostics._markInitNetworkReqStart(T.sdkKey, { attempt: b });
        }
        function N(T, b, I, k, O) {
          T.urlConfig.endpoint === _.Endpoint._initialize &&
            E.Diagnostics._markInitNetworkReqEnd(
              T.sdkKey,
              E.Diagnostics._getDiagnosticsData(b, I, k, O),
            );
        }
        function Z(T) {
          return f(this, void 0, void 0, function* () {
            yield new Promise((b) => setTimeout(b, Math.min(h * (T * T), m)));
          });
        }
      })(be)),
    be
  );
}
var xt;
function Rn() {
  if (xt) return re;
  xt = 1;
  var t =
    (re && re.__awaiter) ||
    function (o, r, i, n) {
      function e(u) {
        return u instanceof i
          ? u
          : new i(function (h) {
              h(u);
            });
      }
      return new (i || (i = Promise))(function (u, h) {
        function m(g) {
          try {
            c(n.next(g));
          } catch (p) {
            h(p);
          }
        }
        function C(g) {
          try {
            c(n.throw(g));
          } catch (p) {
            h(p);
          }
        }
        function c(g) {
          g.done ? u(g.value) : e(g.value).then(m, C);
        }
        c((n = n.apply(o, r || [])).next());
      });
    };
  (Object.defineProperty(re, "__esModule", { value: !0 }), (re.FlushCoordinator = void 0));
  const f = ut(),
    d = On(),
    E = Tn(),
    v = Fn(),
    _ = _e(),
    l = R(),
    y = vn(),
    S = Pe(),
    s = J();
  let a = class {
    constructor(r, i, n, e, u, h, m, C, c, g) {
      ((this._cooldownTimer = null),
        (this._maxIntervalTimer = null),
        (this._hasRunQuickFlush = !1),
        (this._currentFlushPromise = null),
        (this._creationTime = Date.now()),
        (this._isShuttingDown = !1),
        (this._storageKey = null),
        (this._flushInterval = new E.FlushInterval()),
        (this._batchQueue = r),
        (this._pendingEvents = i),
        (this._onPrepareFlush = n),
        (this._errorBoundary = g),
        (this._sdkKey = e),
        (this._eventSender = new d.EventSender(e, u, h, m, C, c)));
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
      return t(this, void 0, void 0, function* () {
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
      return t(this, void 0, void 0, function* () {
        return (
          (this._isShuttingDown = !0),
          this._clearAllTimers(),
          this._currentFlushPromise && (yield this._currentFlushPromise),
          (this._currentFlushPromise = this._executeFlush(v.FlushType.Shutdown)
            .catch((r) => {
              l.Log.error(`Error during shutdown flush: ${r}`);
            })
            .finally(() => {
              this._currentFlushPromise = null;
            })),
          this._currentFlushPromise
        );
      });
    }
    _executeFlush(r) {
      return t(this, void 0, void 0, function* () {
        this._clearAllTimers();
        try {
          this._prepareQueueForFlush(r);
          const i = this._batchQueue.takeAllBatches();
          if (i.length === 0) return;
          yield Promise.all(i.map((n) => this._processOneBatch(n, r)));
        } finally {
          this._isShuttingDown || this._scheduleNextFlush();
        }
      });
    }
    checkQuickFlush() {
      this._hasRunQuickFlush ||
        Date.now() - this._creationTime > f.EventRetryConstants.QUICK_FLUSH_WINDOW_MS ||
        ((this._hasRunQuickFlush = !0),
        setTimeout(() => {
          this.processManualFlush().catch((r) => {
            l.Log.warn("Quick flush failed:", r);
          });
        }, f.EventRetryConstants.QUICK_FLUSH_WINDOW_MS));
    }
    _attemptScheduledFlush() {
      if (this._currentFlushPromise) {
        this._scheduleNextFlush();
        return;
      }
      const r = this.containsAtLeastOneFullBatch(),
        i = this._flushInterval.hasReachedMaxInterval();
      if (!r && !i) {
        this._scheduleNoopPollTick();
        return;
      }
      this._flushInterval.markFlushAttempt();
      let n;
      (r ? (n = v.FlushType.ScheduledFullBatch) : (n = v.FlushType.ScheduledMaxTime),
        (this._currentFlushPromise = this._processNextBatch(n)
          .then(() => {})
          .catch((e) => {
            l.Log.error("Error during scheduled flush:", e);
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
              l.Log.error("Error during limit flush", r);
            })
            .finally(() => {
              ((this._currentFlushPromise = null), this._scheduleNextFlush());
            })));
    }
    _processLimitFlushInternal() {
      return t(this, void 0, void 0, function* () {
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
          S.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, r);
      const i = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
      this._maxIntervalTimer = setTimeout(() => {
        ((this._maxIntervalTimer = null),
          S.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, i);
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
          S.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, f.EventRetryConstants.TICK_INTERVAL_MS);
      const r = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
      this._maxIntervalTimer = setTimeout(() => {
        ((this._maxIntervalTimer = null),
          S.StatsigSession.checkForIdleSession(this._sdkKey),
          this._attemptScheduledFlush());
      }, r);
    }
    _processNextBatch(r) {
      return t(this, void 0, void 0, function* () {
        this._prepareQueueForFlush(r);
        const i = this._batchQueue.takeNextBatch();
        return i ? this._processOneBatch(i, r) : !1;
      });
    }
    _processOneBatch(r, i) {
      return t(this, void 0, void 0, function* () {
        const n = yield this._eventSender.sendBatch(r);
        return n.success
          ? (this._flushInterval.adjustForSuccess(), !0)
          : (this._flushInterval.adjustForFailure(), this._handleFailure(r, i, n.statusCode), !1);
      });
    }
    _prepareQueueForFlush(r) {
      this._onPrepareFlush();
      const i = this.convertPendingEventsToBatches();
      i > 0 &&
        (l.Log.warn(`Dropped ${i} events`),
        this._errorBoundary.logDroppedEvents(i, "Batch queue limit reached", {
          loggingInterval: this._flushInterval.getCurrentIntervalMs(),
          batchSize: this._batchQueue.batchSize(),
          maxPendingBatches: f.EventRetryConstants.MAX_PENDING_BATCHES,
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
    _handleFailure(r, i, n) {
      if (i === v.FlushType.Shutdown) {
        (l.Log.warn(
          `${i} flush failed during shutdown. ${r.events.length} event(s) will be saved to storage for retry in next session.`,
        ),
          this._saveShutdownFailedEventsToStorage(r.events));
        return;
      }
      if (!y.RETRYABLE_CODES.has(n)) {
        (l.Log.warn(
          `${i} flush failed after ${r.attempts} attempt(s). ${r.events.length} event(s) will be dropped. Non-retryable error: ${n}`,
        ),
          this._errorBoundary.logEventRequestFailure(
            r.events.length,
            "non-retryable error",
            i,
            n,
            r.attempts,
          ));
        return;
      }
      if (r.attempts >= f.EventRetryConstants.MAX_RETRY_ATTEMPTS) {
        (l.Log.warn(
          `${i} flush failed after ${r.attempts} attempt(s). ${r.events.length} event(s) will be dropped.`,
        ),
          this._errorBoundary.logEventRequestFailure(
            r.events.length,
            "max retry attempts exceeded",
            i,
            n,
            r.attempts,
          ));
        return;
      }
      r.incrementAttempts();
      const e = this._batchQueue.requeueBatch(r);
      e > 0 &&
        (l.Log.warn(`Failed to requeue batch : dropped ${e} events due to full queue`),
        this._errorBoundary.logDroppedEvents(e, "Batch queue limit reached", {
          loggingInterval: this._flushInterval.getCurrentIntervalMs(),
          batchSize: this._batchQueue.batchSize(),
          maxPendingBatches: f.EventRetryConstants.MAX_PENDING_BATCHES,
          flushType: i,
          retries: r.attempts,
        }));
    }
    loadAndRetryShutdownFailedEvents() {
      return t(this, void 0, void 0, function* () {
        const r = this._getStorageKey();
        try {
          s.Storage.isReady() || (yield s.Storage.isReadyResolver());
          const i = this._getShutdownFailedEventsFromStorage(r);
          if (i.length === 0) return;
          (l.Log.debug(`Loading ${i.length} failed shutdown event(s) from storage for retry`),
            s.Storage.removeItem(r),
            i.forEach((n) => {
              this.addEvent(n);
            }),
            yield this.processManualFlush());
        } catch (i) {
          l.Log.warn("Failed to load and retry failed shutdown events:", i);
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
      const i = this._getStorageKey();
      try {
        let e = [...this._getShutdownFailedEventsFromStorage(i), ...r];
        (e.length > f.EventRetryConstants.MAX_LOCAL_STORAGE &&
          (e = e.slice(-f.EventRetryConstants.MAX_LOCAL_STORAGE)),
          (0, s._setObjectInStorage)(i, e),
          l.Log.debug(
            `Saved ${r.length} failed shutdown event(s) to storage (total stored: ${e.length})`,
          ));
      } catch (n) {
        l.Log.warn("Unable to save failed shutdown events to storage:", n);
      }
    }
    _getShutdownFailedEventsFromStorage(r) {
      try {
        const i = (0, s._getObjectFromStorage)(r);
        return Array.isArray(i) ? i : [];
      } catch {
        return [];
      }
    }
  };
  return ((re.FlushCoordinator = a), re);
}
var ke = {},
  Gt;
function An() {
  if (Gt) return ke;
  ((Gt = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.PendingEvents = void 0));
  const t = R();
  let f = class {
    constructor(E) {
      ((this._pendingEvents = []), (this._batchSize = E));
    }
    addToPendingEventsQueue(E) {
      (this._pendingEvents.push(E), t.Log.debug("Enqueued Event:", E));
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
  return ((ke.PendingEvents = f), ke);
}
var B = {},
  zt;
function mn() {
  if (zt) return B;
  ((zt = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B._createLayerParameterExposure =
      B._createConfigExposure =
      B._mapExposures =
      B._createGateExposure =
      B._isExposureEvent =
        void 0));
  const t = "statsig::config_exposure",
    f = "statsig::gate_exposure",
    d = "statsig::layer_exposure",
    E = (a, o, r, i, n) => (
      r.bootstrapMetadata && (i.bootstrapMetadata = r.bootstrapMetadata),
      {
        eventName: a,
        user: o,
        value: null,
        metadata: s(r, i),
        secondaryExposures: n,
        time: Date.now(),
      }
    ),
    v = ({ eventName: a }) => a === f || a === t || a === d;
  B._isExposureEvent = v;
  const _ = (a, o, r) => {
    var i, n, e;
    const u = { gate: o.name, gateValue: String(o.value), ruleID: o.ruleID };
    return (
      ((i = o.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (u.configVersion = o.__evaluation.version),
      E(
        f,
        a,
        o.details,
        u,
        l(
          (e = (n = o.__evaluation) === null || n === void 0 ? void 0 : n.secondary_exposures) !==
            null && e !== void 0
            ? e
            : [],
          r,
        ),
      )
    );
  };
  B._createGateExposure = _;
  function l(a, o) {
    return a.map((r) => (typeof r == "string" ? (o ?? {})[r] : r)).filter((r) => r != null);
  }
  B._mapExposures = l;
  const y = (a, o, r) => {
    var i, n, e, u;
    const h = { config: o.name, ruleID: o.ruleID };
    return (
      ((i = o.__evaluation) === null || i === void 0 ? void 0 : i.version) != null &&
        (h.configVersion = o.__evaluation.version),
      ((n = o.__evaluation) === null || n === void 0 ? void 0 : n.passed) != null &&
        (h.rulePassed = String(o.__evaluation.passed)),
      E(
        t,
        a,
        o.details,
        h,
        l(
          (u = (e = o.__evaluation) === null || e === void 0 ? void 0 : e.secondary_exposures) !==
            null && u !== void 0
            ? u
            : [],
          r,
        ),
      )
    );
  };
  B._createConfigExposure = y;
  const S = (a, o, r, i) => {
    var n, e, u, h, m, C, c;
    const g = o.__evaluation,
      p = ((n = g?.explicit_parameters) === null || n === void 0 ? void 0 : n.includes(r)) === !0;
    let w = "",
      D = (e = g?.undelegated_secondary_exposures) !== null && e !== void 0 ? e : [];
    p &&
      ((w = (u = g.allocated_experiment_name) !== null && u !== void 0 ? u : ""),
      (D = (h = g.secondary_exposures) !== null && h !== void 0 ? h : []));
    const F = (m = o.__evaluation) === null || m === void 0 ? void 0 : m.parameter_rule_ids,
      M = {
        config: o.name,
        parameterName: r,
        ruleID: (C = F?.[r]) !== null && C !== void 0 ? C : o.ruleID,
        allocatedExperiment: w,
        isExplicitParameter: String(p),
      };
    return (
      ((c = o.__evaluation) === null || c === void 0 ? void 0 : c.version) != null &&
        (M.configVersion = o.__evaluation.version),
      E(d, a, o.details, M, l(D, i))
    );
  };
  B._createLayerParameterExposure = S;
  const s = (a, o) => (
    (o.reason = a.reason),
    a.lcut && (o.lcut = String(a.lcut)),
    a.receivedAt && (o.receivedAt = String(a.receivedAt)),
    o
  );
  return B;
}
var Oe = {},
  Vt;
function yn() {
  if (Vt) return Oe;
  ((Vt = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe.UrlConfiguration = void 0));
  const t = _e(),
    f = Re(),
    d = {
      [f.Endpoint._initialize]: "i",
      [f.Endpoint._rgstr]: "e",
      [f.Endpoint._download_config_specs]: "d",
    };
  let E = class {
    constructor(_, l, y, S) {
      ((this.customUrl = null),
        (this.fallbackUrls = null),
        (this.endpoint = _),
        (this.endpointDnsKey = d[_]),
        l && (this.customUrl = l),
        !l && y && (this.customUrl = y.endsWith("/") ? `${y}${_}` : `${y}/${_}`),
        S && (this.fallbackUrls = S));
      const s = f.NetworkDefault[_];
      this.defaultUrl = `${s}/${_}`;
    }
    getUrl() {
      var _;
      return (_ = this.customUrl) !== null && _ !== void 0 ? _ : this.defaultUrl;
    }
    getChecksum() {
      var _;
      const l = ((_ = this.fallbackUrls) !== null && _ !== void 0 ? _ : []).sort().join(",");
      return (0, t._DJB2)(this.customUrl + l);
    }
  };
  return ((Oe.UrlConfiguration = E), Oe);
}
var Qt;
function En() {
  if (Qt) return ee;
  Qt = 1;
  var t =
    (ee && ee.__awaiter) ||
    function (C, c, g, p) {
      function w(D) {
        return D instanceof g
          ? D
          : new g(function (F) {
              F(D);
            });
      }
      return new (g || (g = Promise))(function (D, F) {
        function M(N) {
          try {
            X(p.next(N));
          } catch (Z) {
            F(Z);
          }
        }
        function H(N) {
          try {
            X(p.throw(N));
          } catch (Z) {
            F(Z);
          }
        }
        function X(N) {
          N.done ? D(N.value) : w(N.value).then(M, H);
        }
        X((p = p.apply(C, c || [])).next());
      });
    };
  (Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.EventLogger = void 0));
  const f = kn(),
    d = Be(),
    E = ut(),
    v = Rn(),
    _ = _e(),
    l = R(),
    y = Re(),
    S = An(),
    s = W(),
    a = mn(),
    o = qe(),
    r = J(),
    i = yn(),
    n = Ae(),
    e = 1e3,
    u = 6e5,
    h = {};
  let m = class Sn {
    static _safeFlushAndForget(c) {
      var g;
      (g = h[c]) === null || g === void 0 || g.flush().catch(() => {});
    }
    constructor(c, g, p, w, D) {
      var F;
      ((this._sdkKey = c),
        (this._emitter = g),
        (this._network = p),
        (this._options = w),
        (this._errorBoundary = D),
        (this._pendingEvents = null),
        (this._batchQueue = null),
        (this._flushCoordinator = null),
        (this._lastExposureTimeMap = {}),
        (this._nonExposedChecks = {}),
        (this._isShuttingDown = !1),
        (this._storageKey = null),
        (this._pendingCompressionMode = null),
        (this._loggingEnabled =
          (F = w?.loggingEnabled) !== null && F !== void 0
            ? F
            : w?.disableLogging === !0
              ? o.LoggingEnabledOption.disabled
              : o.LoggingEnabledOption.browserOnly),
        w?.loggingEnabled &&
          w.disableLogging !== void 0 &&
          l.Log.warn(
            "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging.",
          ));
      const M = w?.networkConfig;
      this._logEventUrlConfig = new i.UrlConfiguration(
        y.Endpoint._rgstr,
        M?.logEventUrl,
        M?.api,
        M?.logEventFallbackUrls,
      );
    }
    setLogEventCompressionMode(c) {
      this._flushCoordinator
        ? this._flushCoordinator.setLogEventCompressionMode(c)
        : (this._pendingCompressionMode = c);
    }
    setLoggingEnabled(c) {
      const g = this._loggingEnabled === "disabled",
        p = c !== "disabled";
      if (
        ((this._loggingEnabled = c),
        this._flushCoordinator && this._flushCoordinator.setLoggingEnabled(c),
        g && p)
      ) {
        const w = this._loadStoredEvents();
        (l.Log.debug(`Loaded ${w.length} stored event(s) from storage`),
          w.length > 0 &&
            (w.forEach((D) => {
              this._initFlushCoordinator().addEvent(D);
            }),
            this.flush().catch((D) => {
              l.Log.warn("Failed to flush events after enabling logging:", D);
            })));
      }
    }
    enqueue(c) {
      var g;
      if (!this._shouldLogEvent(c)) return;
      const p = this._normalizeEvent(c);
      if (this._loggingEnabled === "disabled") {
        this._storeEventToStorage(p);
        return;
      }
      (this._initFlushCoordinator().addEvent(p),
        (g = this._flushCoordinator) === null || g === void 0 || g.checkQuickFlush());
    }
    incrementNonExposureCount(c) {
      var g;
      const p = (g = this._nonExposedChecks[c]) !== null && g !== void 0 ? g : 0;
      this._nonExposedChecks[c] = p + 1;
    }
    reset() {
      (this.flush().catch(() => {}), (this._lastExposureTimeMap = {}));
    }
    start() {
      var c;
      const g = (0, s._isServerEnv)();
      if (
        g &&
        ((c = this._options) === null || c === void 0 ? void 0 : c.loggingEnabled) !== "always"
      )
        return;
      const p = this._initFlushCoordinator();
      ((h[this._sdkKey] = this),
        g ||
          (0, n._subscribeToVisiblityChanged)((w) => {
            w === "background"
              ? Sn._safeFlushAndForget(this._sdkKey)
              : w === "foreground" && p.startScheduledFlushCycle();
          }),
        p.loadAndRetryShutdownFailedEvents().catch((w) => {
          l.Log.warn("Failed to load failed shutdown events:", w);
        }),
        p.startScheduledFlushCycle());
    }
    stop() {
      return t(this, void 0, void 0, function* () {
        ((this._isShuttingDown = !0),
          this._flushCoordinator && (yield this._flushCoordinator.processShutdown()),
          delete h[this._sdkKey],
          (this._flushCoordinator = null),
          (this._pendingEvents = null),
          (this._batchQueue = null));
      });
    }
    flush() {
      return t(this, void 0, void 0, function* () {
        if (this._flushCoordinator) return this._flushCoordinator.processManualFlush();
      });
    }
    appendAndResetNonExposedChecks() {
      if (Object.keys(this._nonExposedChecks).length === 0) return;
      const c = Object.assign({}, this._nonExposedChecks);
      this._nonExposedChecks = {};
      const g = this._normalizeEvent({
        eventName: "statsig::non_exposed_checks",
        user: null,
        time: Date.now(),
        metadata: { checks: c },
      });
      this._flushCoordinator && this._flushCoordinator.addEvent(g);
    }
    _shouldLogEvent(c) {
      var g;
      if (
        ((g = this._options) === null || g === void 0 ? void 0 : g.loggingEnabled) !== "always" &&
        (0, s._isServerEnv)()
      )
        return !1;
      if (!(0, a._isExposureEvent)(c)) return !0;
      const p = c.user ? c.user : { statsigEnvironment: void 0 },
        w = (0, d._getUserStorageKey)(this._sdkKey, p),
        D = c.metadata ? c.metadata : {},
        F = [
          c.eventName,
          w,
          D.gate,
          D.config,
          D.ruleID,
          D.allocatedExperiment,
          D.parameterName,
          String(D.isExplicitParameter),
          D.reason,
        ].join("|"),
        M = this._lastExposureTimeMap[F],
        H = Date.now();
      return M && H - M < u
        ? !1
        : (Object.keys(this._lastExposureTimeMap).length > e && (this._lastExposureTimeMap = {}),
          (this._lastExposureTimeMap[F] = H),
          !0);
    }
    _getCurrentPageUrl() {
      var c;
      if (
        ((c = this._options) === null || c === void 0
          ? void 0
          : c.includeCurrentPageUrlWithEvents) !== !1
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
      var c, g;
      if (this._flushCoordinator) return this._flushCoordinator;
      const p =
        (g = (c = this._options) === null || c === void 0 ? void 0 : c.loggingBufferMaxSize) !==
          null && g !== void 0
          ? g
          : E.EventRetryConstants.DEFAULT_BATCH_SIZE;
      return (
        (this._pendingEvents = new S.PendingEvents(p)),
        (this._batchQueue = new f.BatchQueue(p)),
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
    _storeEventToStorage(c) {
      const g = this._getStorageKey();
      try {
        let p = this._getEventsFromStorage(g);
        (p.push(c),
          p.length > E.EventRetryConstants.MAX_LOCAL_STORAGE &&
            (p = p.slice(-E.EventRetryConstants.MAX_LOCAL_STORAGE)),
          (0, r._setObjectInStorage)(g, p));
      } catch {
        l.Log.warn("Unable to save events to storage");
      }
    }
    _getEventsFromStorage(c) {
      try {
        const g = (0, r._getObjectFromStorage)(c);
        return Array.isArray(g) ? g : [];
      } catch {
        return [];
      }
    }
    _loadStoredEvents() {
      const c = this._getStorageKey(),
        g = this._getEventsFromStorage(c);
      return (g.length > 0 && r.Storage.removeItem(c), g);
    }
    _normalizeEvent(c) {
      c.user && ((c.user = Object.assign({}, c.user)), delete c.user.privateAttributes);
      const g = {},
        p = this._getCurrentPageUrl();
      return (
        p && (g.statsigMetadata = { currentPage: p }),
        Object.assign(Object.assign({}, c), g)
      );
    }
  };
  return ((ee.EventLogger = m), ee);
}
var Te = {},
  Jt;
function Pn() {
  if (Jt) return Te;
  ((Jt = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.PrecomputedEvaluationsContextHandle = void 0));
  const t = R(),
    f = W(),
    d = Pe(),
    E = Ue();
  class v {
    constructor(l, y, S, s, a, o) {
      ((this._sdkKey = l),
        (this._getOptions = y),
        (this._getErrorBoundary = S),
        (this._getValues = s),
        (this._getUser = a),
        (this._getSdkInstanceID = o));
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
      let l = (0, f._cloneObject)("StatsigUser", this._getUser());
      return (l == null && (t.Log.error("Failed to clone user"), (l = {})), l);
    }
    getSession(l = !0) {
      return d.StatsigSession.get(this._sdkKey, l);
    }
    get stableID() {
      return E.StableID.get(this._sdkKey);
    }
    get sdkInstanceID() {
      return this._getSdkInstanceID();
    }
    toContext(l = !0) {
      return {
        sdkKey: this.sdkKey,
        options: this.options,
        values: this.values,
        user: this.user,
        errorBoundary: this.errorBoundary,
        session: this.getSession(l),
        stableID: this.stableID,
        sdkInstanceID: this.sdkInstanceID,
      };
    }
  }
  return ((Te.PrecomputedEvaluationsContextHandle = v), Te);
}
var V = {},
  Q = {},
  Wt;
function pn() {
  if (Wt) return Q;
  ((Wt = 1),
    Object.defineProperty(Q, "__esModule", { value: !0 }),
    (Q._getUnitIDFromUser = Q._getFullUserHash = Q._normalizeUser = void 0));
  const t = _e(),
    f = R(),
    d = W();
  function E(l, y, S) {
    const s = (0, d._cloneObject)("StatsigUser", l);
    return s == null
      ? (f.Log.error("Failed to clone user"), { statsigEnvironment: void 0 })
      : (y != null && y.environment != null
          ? (s.statsigEnvironment = y.environment)
          : S != null && (s.statsigEnvironment = { tier: S }),
        s);
  }
  Q._normalizeUser = E;
  function v(l) {
    return l ? (0, t._DJB2Object)(l) : null;
  }
  Q._getFullUserHash = v;
  function _(l, y) {
    var S, s, a;
    if (typeof y != "string") return l.userID;
    const o = y.toLowerCase();
    return o !== "userid"
      ? (s = (S = l.customIDs) === null || S === void 0 ? void 0 : S[y]) !== null && s !== void 0
        ? s
        : (a = l.customIDs) === null || a === void 0
          ? void 0
          : a[o]
      : l.userID;
  }
  return ((Q._getUnitIDFromUser = _), Q);
}
var Fe = {},
  Ht;
function bn() {
  if (Ht) return Fe;
  ((Ht = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe._typedJsonParse = void 0));
  const t = R();
  function f(d, E, v) {
    try {
      const _ = JSON.parse(d);
      if (_ && typeof _ == "object" && E in _) return _;
    } catch {}
    return (t.Log.error(`Failed to parse ${v}`), null);
  }
  return ((Fe._typedJsonParse = f), Fe);
}
var Xt;
function Un() {
  if (Xt) return V;
  Xt = 1;
  var t =
    (V && V.__awaiter) ||
    function (r, i, n, e) {
      function u(h) {
        return h instanceof n
          ? h
          : new n(function (m) {
              m(h);
            });
      }
      return new (n || (n = Promise))(function (h, m) {
        function C(p) {
          try {
            g(e.next(p));
          } catch (w) {
            m(w);
          }
        }
        function c(p) {
          try {
            g(e.throw(p));
          } catch (w) {
            m(w);
          }
        }
        function g(p) {
          p.done ? h(p.value) : u(p.value).then(C, c);
        }
        g((e = e.apply(r, i || [])).next());
      });
    };
  (Object.defineProperty(V, "__esModule", { value: !0 }),
    (V._makeDataAdapterResult = V.DataAdapterCore = void 0));
  const f = R(),
    d = Ue(),
    E = pn(),
    v = J(),
    _ = bn(),
    l = 10,
    y = 8;
  let S = class {
    constructor(i, n) {
      ((this._adapterName = i),
        (this._cacheSuffix = n),
        (this._options = null),
        (this._sdkKey = null),
        (this._cacheLimit = l),
        (this._lastModifiedStoreKey = `statsig.last_modified_time.${n}`),
        (this._inMemoryCache = new a()));
    }
    attach(i, n, e) {
      ((this._sdkKey = i), (this._options = n));
    }
    getDataSync(i) {
      const n = i && (0, E._normalizeUser)(i, this._options),
        e = this._getCacheKey(n),
        u = this._inMemoryCache.get(e, n);
      if (u && this._getIsCacheValueValid(u)) return u;
      const h = this._loadFromCache(e);
      return h && this._getIsCacheValueValid(h)
        ? (this._inMemoryCache.add(e, h, this._cacheLimit), this._inMemoryCache.get(e, n))
        : null;
    }
    setData(i, n) {
      const e = n && (0, E._normalizeUser)(n, this._options),
        u = this._getCacheKey(e);
      this._inMemoryCache.add(u, s("Bootstrap", i, null, e), this._cacheLimit);
    }
    _getIsCacheValueValid(i) {
      return i.stableID == null || i.stableID === d.StableID.get(this._getSdkKey());
    }
    _getDataAsyncImpl(i, n, e) {
      return t(this, void 0, void 0, function* () {
        v.Storage.isReady() || (yield v.Storage.isReadyResolver());
        const u = i ?? this.getDataSync(n),
          h = [this._fetchAndPrepFromNetwork(u, n, e)];
        return (
          e?.timeoutMs &&
            h.push(
              new Promise((m) => setTimeout(m, e.timeoutMs)).then(
                () => (f.Log.debug("Fetching latest value timed out"), null),
              ),
            ),
          yield Promise.race(h)
        );
      });
    }
    _prefetchDataImpl(i, n) {
      return t(this, void 0, void 0, function* () {
        const e = i && (0, E._normalizeUser)(i, this._options),
          u = this._getCacheKey(e),
          h = yield this._getDataAsyncImpl(null, e, n);
        h &&
          this._inMemoryCache.add(
            u,
            Object.assign(Object.assign({}, h), { source: "Prefetch" }),
            this._cacheLimit,
          );
      });
    }
    _fetchAndPrepFromNetwork(i, n, e) {
      return t(this, void 0, void 0, function* () {
        var u;
        const h = (u = i?.data) !== null && u !== void 0 ? u : null,
          m = i != null && this._isCachedResultValidFor204(i, n),
          C = yield this._fetchFromNetwork(h, n, e, m);
        if (!C) return (f.Log.debug("No response returned for latest value"), null);
        const c = (0, _._typedJsonParse)(C, "has_updates", "Response"),
          g = this._getSdkKey(),
          p = d.StableID.get(g);
        let w = null;
        if (c?.has_updates === !0) w = s("Network", C, p, n);
        else if (h && c?.has_updates === !1) w = s("NetworkNotModified", h, p, n);
        else return null;
        const D = this._getCacheKey(n);
        return (this._inMemoryCache.add(D, w, this._cacheLimit), this._writeToCache(D, w), w);
      });
    }
    _getSdkKey() {
      return this._sdkKey != null
        ? this._sdkKey
        : (f.Log.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(i) {
      var n;
      const e = (n = v.Storage.getItem) === null || n === void 0 ? void 0 : n.call(v.Storage, i);
      if (e == null) return null;
      const u = (0, _._typedJsonParse)(e, "source", "Cached Result");
      return u ? Object.assign(Object.assign({}, u), { source: "Cache" }) : null;
    }
    _writeToCache(i, n) {
      const e = JSON.stringify(n);
      for (let u = 0; u < y; u++)
        try {
          v.Storage.setItem(i, e);
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
            this._runLocalStorageCacheEviction(i, this._cacheLimit - 1));
        }
      this._runLocalStorageCacheEviction(i);
    }
    _runLocalStorageCacheEviction(i, n = this._cacheLimit) {
      var e;
      const u =
        (e = (0, v._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && e !== void 0
          ? e
          : {};
      u[i] = Date.now();
      const h = o(u, n);
      for (const m of h) (delete u[m], v.Storage.removeItem(m));
      (0, v._setObjectInStorage)(this._lastModifiedStoreKey, u);
    }
  };
  V.DataAdapterCore = S;
  function s(r, i, n, e) {
    return {
      source: r,
      data: i,
      receivedAt: Date.now(),
      stableID: n,
      fullUserHash: (0, E._getFullUserHash)(e),
    };
  }
  V._makeDataAdapterResult = s;
  class a {
    constructor() {
      this._data = {};
    }
    get(i, n) {
      var e;
      const u = this._data[i],
        h = u?.stableID,
        m = (e = n?.customIDs) === null || e === void 0 ? void 0 : e.stableID;
      return m && h && m !== h
        ? (f.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
        : u;
    }
    add(i, n, e) {
      const u = o(this._data, e - 1);
      for (const h of u) delete this._data[h];
      this._data[i] = n;
    }
    merge(i) {
      this._data = Object.assign(Object.assign({}, this._data), i);
    }
  }
  function o(r, i) {
    const n = Object.keys(r);
    return n.length <= i
      ? []
      : i === 0
        ? n
        : n
            .sort((e, u) => {
              const h = r[e],
                m = r[u];
              return typeof h == "object" && typeof m == "object"
                ? h.receivedAt - m.receivedAt
                : h - m;
            })
            .slice(0, n.length - i);
  }
  return V;
}
var $e = {},
  Yt;
function Nn() {
  return (Yt || ((Yt = 1), Object.defineProperty($e, "__esModule", { value: !0 })), $e);
}
var Me = {},
  Zt;
function wn() {
  return (
    Zt ||
      ((Zt = 1),
      (function (t) {
        var f =
          (Me && Me.__awaiter) ||
          function (o, r, i, n) {
            function e(u) {
              return u instanceof i
                ? u
                : new i(function (h) {
                    h(u);
                  });
            }
            return new (i || (i = Promise))(function (u, h) {
              function m(g) {
                try {
                  c(n.next(g));
                } catch (p) {
                  h(p);
                }
              }
              function C(g) {
                try {
                  c(n.throw(g));
                } catch (p) {
                  h(p);
                }
              }
              function c(g) {
                g.done ? u(g.value) : e(g.value).then(m, C);
              }
              c((n = n.apply(o, r || [])).next());
            });
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ErrorBoundary = t.EXCEPTION_ENDPOINT = void 0));
        const d = R(),
          E = dt(),
          v = je();
        t.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
        const _ = "[Statsig] UnknownError";
        let l = class {
          constructor(r, i, n, e) {
            ((this._sdkKey = r),
              (this._options = i),
              (this._emitter = n),
              (this._lastSeenError = e),
              (this._seen = new Set()));
          }
          wrap(r, i) {
            try {
              const n = r;
              s(n).forEach((e) => {
                const u = n[e];
                "$EB" in u ||
                  ((n[e] = (...h) => this._capture(i ? `${i}:${e}` : e, () => u.apply(r, h))),
                  (n[e].$EB = !0));
              });
            } catch (n) {
              this._onError("eb:wrap", n);
            }
          }
          logError(r, i) {
            this._onError(r, i);
          }
          logDroppedEvents(r, i, n) {
            const e = { eventCount: String(r) };
            (n &&
              Object.keys(n).forEach((u) => {
                e[u] = String(n[u]);
              }),
              this._onError("statsig::log_event_dropped_event_count", new Error(i), !0, e));
          }
          logEventRequestFailure(r, i, n, e, u) {
            const h = {
              eventCount: String(r),
              flushType: n,
              statusCode: String(e),
              reason: i,
              retries: String(u),
            };
            this._onError("statsig::log_event_failed", new Error(i), !0, h);
          }
          getLastSeenErrorAndReset() {
            const r = this._lastSeenError;
            return ((this._lastSeenError = void 0), r ?? null);
          }
          attachErrorIfNoneExists(r) {
            this._lastSeenError || (this._lastSeenError = y(r));
          }
          _capture(r, i) {
            try {
              const n = i();
              return n && n instanceof Promise ? n.catch((e) => this._onError(r, e)) : n;
            } catch (n) {
              return (this._onError(r, n), null);
            }
          }
          _onError(r, i, n = !1, e) {
            try {
              (d.Log.warn(`Caught error in ${r}`, { error: i }),
                f(this, void 0, void 0, function* () {
                  var h, m, C, c, g, p, w;
                  const D = i || Error(_),
                    F = D instanceof Error,
                    M = F ? D.name : "No Name",
                    H = y(D);
                  if (((this._lastSeenError = H), !n && this._seen.has(M))) return;
                  if (
                    (this._seen.add(M),
                    !(
                      (m =
                        (h = this._options) === null || h === void 0 ? void 0 : h.networkConfig) ===
                        null || m === void 0
                    ) && m.preventAllNetworkTraffic)
                  ) {
                    (C = this._emitter) === null ||
                      C === void 0 ||
                      C.call(this, { name: "error", error: i, tag: r });
                    return;
                  }
                  const X = E.SDKType._get(this._sdkKey),
                    N = v.StatsigMetadataProvider.get(),
                    Z = F ? D.stack : S(D),
                    T = Object.assign(
                      Object.assign(
                        { tag: r, exception: M, info: Z, statsigOptions: a(this._options) },
                        Object.assign(Object.assign({}, N), { sdkType: X }),
                      ),
                      e ?? {},
                    );
                  (yield (
                    (p =
                      (g =
                        (c = this._options) === null || c === void 0 ? void 0 : c.networkConfig) ===
                        null || g === void 0
                        ? void 0
                        : g.networkOverrideFunc) !== null && p !== void 0
                      ? p
                      : fetch
                  )(t.EXCEPTION_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "STATSIG-API-KEY": this._sdkKey,
                      "STATSIG-SDK-TYPE": String(X),
                      "STATSIG-SDK-VERSION": String(N.sdkVersion),
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(T),
                  }),
                    (w = this._emitter) === null ||
                      w === void 0 ||
                      w.call(this, { name: "error", error: i, tag: r }));
                })
                  .then(() => {})
                  .catch(() => {}));
            } catch {}
          }
        };
        t.ErrorBoundary = l;
        function y(o) {
          return o instanceof Error
            ? o
            : typeof o == "string"
              ? new Error(o)
              : new Error("An unknown error occurred.");
        }
        function S(o) {
          try {
            return JSON.stringify(o);
          } catch {
            return _;
          }
        }
        function s(o) {
          const r = new Set();
          let i = Object.getPrototypeOf(o);
          for (; i && i !== Object.prototype; )
            (Object.getOwnPropertyNames(i)
              .filter((n) => typeof i?.[n] == "function")
              .forEach((n) => r.add(n)),
              (i = Object.getPrototypeOf(i)));
          return Array.from(r);
        }
        function a(o) {
          if (!o) return {};
          const r = {};
          return (
            Object.keys(o).forEach((i) => {
              const n = i,
                e = o[n];
              switch (typeof e) {
                case "number":
                case "bigint":
                case "boolean":
                  r[String(n)] = e;
                  break;
                case "string":
                  e.length < 50 ? (r[String(n)] = e) : (r[String(n)] = "set");
                  break;
                case "object":
                  n === "environment"
                    ? (r.environment = e)
                    : n === "networkConfig"
                      ? (r.networkConfig = e)
                      : (r[String(n)] = e != null ? "set" : "unset");
                  break;
              }
            }),
            r
          );
        }
      })(Me)),
    Me
  );
}
var et = {},
  $t;
function jn() {
  return ($t || (($t = 1), Object.defineProperty(et, "__esModule", { value: !0 })), et);
}
var tt = {},
  en;
function Bn() {
  return (en || ((en = 1), Object.defineProperty(tt, "__esModule", { value: !0 })), tt);
}
var nt = {},
  tn;
function qn() {
  return (tn || ((tn = 1), Object.defineProperty(nt, "__esModule", { value: !0 })), nt);
}
var le = {},
  nn;
function Cn() {
  if (nn) return le;
  ((nn = 1),
    Object.defineProperty(le, "__esModule", { value: !0 }),
    (le.createMemoKey = le.MemoPrefix = void 0),
    (le.MemoPrefix = {
      _gate: "g",
      _dynamicConfig: "c",
      _experiment: "e",
      _configList: "cl",
      _layer: "l",
      _paramStore: "p",
    }));
  const t = new Set([]),
    f = new Set(["userPersistedValues"]);
  function d(E, v, _) {
    let l = `${E}|${v}`;
    if (!_) return l;
    for (const y of Object.keys(_)) {
      if (f.has(y)) return;
      t.has(y) ? (l += `|${y}=true`) : (l += `|${y}=${_[y]}`);
    }
    return l;
  }
  return ((le.createMemoKey = d), le);
}
var rt = {},
  rn;
function Kn() {
  return (rn || ((rn = 1), Object.defineProperty(rt, "__esModule", { value: !0 })), rt);
}
var it = {},
  on;
function xn() {
  return (on || ((on = 1), Object.defineProperty(it, "__esModule", { value: !0 })), it);
}
var ot = {},
  sn;
function Gn() {
  return (
    sn ||
      ((sn = 1),
      (function (t) {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t._fastApproxSizeOf = void 0));
        const f = 2,
          d = 1,
          E = (v, _) => {
            let l = 0;
            const y = Object.keys(v);
            for (let S = 0; S < y.length; S++) {
              const s = y[S],
                a = v[s];
              if (
                ((l += s.length),
                typeof a == "object" && a !== null
                  ? (l += (0, t._fastApproxSizeOf)(a, _) + f)
                  : (l += String(a).length + d),
                l >= _)
              )
                return l;
            }
            return l;
          };
        t._fastApproxSizeOf = E;
      })(ot)),
    ot
  );
}
var ue = {},
  an;
function zn() {
  if (an) return ue;
  an = 1;
  var t =
    (ue && ue.__awaiter) ||
    function (n, e, u, h) {
      function m(C) {
        return C instanceof u
          ? C
          : new u(function (c) {
              c(C);
            });
      }
      return new (u || (u = Promise))(function (C, c) {
        function g(D) {
          try {
            w(h.next(D));
          } catch (F) {
            c(F);
          }
        }
        function p(D) {
          try {
            w(h.throw(D));
          } catch (F) {
            c(F);
          }
        }
        function w(D) {
          D.done ? C(D.value) : m(D.value).then(g, p);
        }
        w((h = h.apply(n, e || [])).next());
      });
    };
  (Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.StatsigClientBase = void 0), de());
  const f = de(),
    d = wn(),
    E = En(),
    v = R(),
    _ = Cn(),
    l = W(),
    y = Pe(),
    S = Ue(),
    s = qe(),
    a = J(),
    o = 3e3;
  let r = class {
    constructor(e, u, h, m) {
      var C, c, g, p;
      ((this.loadingStatus = "Uninitialized"),
        (this._initializePromise = null),
        (this._listeners = {}));
      const w = this.$emt.bind(this);
      (m?.logLevel != null && (v.Log.level = m.logLevel),
        m?.disableStorage && a.Storage._setDisabled(!0),
        m?.initialSessionID && y.StatsigSession.overrideInitialSessionID(m.initialSessionID, e),
        m?.storageProvider && a.Storage._setProvider(m.storageProvider),
        m?.enableCookies && S.StableID._setCookiesEnabled(e, m.enableCookies),
        m?.disableStableID && S.StableID._setDisabled(e, !0),
        (this._sdkKey = e),
        (this._options = m ?? {}),
        (this._memoCache = {}),
        (this.overrideAdapter = (C = m?.overrideAdapter) !== null && C !== void 0 ? C : null),
        (this._errorBoundary = new d.ErrorBoundary(e, m, w)),
        (this._logger = new E.EventLogger(e, w, h, m, this._errorBoundary)),
        this._errorBoundary.wrap(this),
        this._errorBoundary.wrap(u),
        this._errorBoundary.wrap(this._logger),
        h.setErrorBoundary(this._errorBoundary),
        (this.dataAdapter = u),
        this.dataAdapter.attach(e, m, h),
        (this.storageProvider = a.Storage),
        (p =
          (g = (c = this.overrideAdapter) === null || c === void 0 ? void 0 : c.loadFromStorage) ===
            null || g === void 0
            ? void 0
            : g.call(c)) === null ||
          p === void 0 ||
          p.catch((D) => this._errorBoundary.logError("OA::loadFromStorage", D)),
        this._primeReadyRipcord(),
        i(e, this));
    }
    updateRuntimeOptions(e) {
      (e.loggingEnabled
        ? ((this._options.loggingEnabled = e.loggingEnabled),
          this._logger.setLoggingEnabled(e.loggingEnabled))
        : e.disableLogging != null &&
          ((this._options.disableLogging = e.disableLogging),
          this._logger.setLoggingEnabled(e.disableLogging ? "disabled" : "browser-only")),
        e.disableStorage != null &&
          ((this._options.disableStorage = e.disableStorage),
          a.Storage._setDisabled(e.disableStorage)),
        e.enableCookies != null &&
          ((this._options.enableCookies = e.enableCookies),
          S.StableID._setCookiesEnabled(this._sdkKey, e.enableCookies)),
        e.logEventCompressionMode
          ? this._logger.setLogEventCompressionMode(e.logEventCompressionMode)
          : e.disableCompression &&
            this._logger.setLogEventCompressionMode(s.LogEventCompressionMode.Disabled));
    }
    flush() {
      return this._logger.flush();
    }
    shutdown() {
      return t(this, void 0, void 0, function* () {
        (this.$emt({ name: "pre_shutdown" }),
          this._setStatus("Uninitialized", null),
          (this._initializePromise = null),
          yield this._logger.stop());
      });
    }
    on(e, u) {
      (this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(u));
    }
    off(e, u) {
      if (this._listeners[e]) {
        const h = this._listeners[e].indexOf(u);
        h !== -1 && this._listeners[e].splice(h, 1);
      }
    }
    $on(e, u) {
      ((u.__isInternal = !0), this.on(e, u));
    }
    $emt(e) {
      var u;
      const h = (m) => {
        try {
          m(e);
        } catch (C) {
          if (m.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${e.name}`, C);
            return;
          }
          v.Log.error(
            "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
            e,
          );
        }
      };
      (this._listeners[e.name] && this._listeners[e.name].forEach((m) => h(m)),
        (u = this._listeners["*"]) === null || u === void 0 || u.forEach(h));
    }
    _setStatus(e, u) {
      ((this.loadingStatus = e),
        (this._memoCache = {}),
        this.$emt({ name: "values_updated", status: e, values: u }));
    }
    _enqueueExposure(e, u, h) {
      if (h?.disableExposureLog === !0) {
        this._logger.incrementNonExposureCount(e);
        return;
      }
      this._logger.enqueue(u);
    }
    _memoize(e, u) {
      return (h, m) => {
        if (this._options.disableEvaluationMemoization) return u(h, m);
        const C = (0, _.createMemoKey)(e, h, m);
        return C
          ? (C in this._memoCache ||
              (Object.keys(this._memoCache).length >= o && (this._memoCache = {}),
              (this._memoCache[C] = u(h, m))),
            this._memoCache[C])
          : u(h, m);
      };
    }
  };
  ue.StatsigClientBase = r;
  function i(n, e) {
    var u;
    if ((0, l._isServerEnv)()) return;
    const h = (0, f._getStatsigGlobal)(),
      m = (u = h.instances) !== null && u !== void 0 ? u : {},
      C = e;
    (m[n] != null &&
      v.Log.warn(
        "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.",
      ),
      (m[n] = C),
      h.firstInstance || (h.firstInstance = C),
      (h.instances = m),
      (__STATSIG__ = h));
  }
  return ue;
}
var Le = {},
  ln;
function Vn() {
  return (
    ln ||
      ((ln = 1),
      Object.defineProperty(Le, "__esModule", { value: !0 }),
      (Le.DataAdapterCachePrefix = void 0),
      (Le.DataAdapterCachePrefix = "statsig.cached")),
    Le
  );
}
var st = {},
  un;
function Qn() {
  return (un || ((un = 1), Object.defineProperty(st, "__esModule", { value: !0 })), st);
}
var P = {},
  cn;
function Jn() {
  if (cn) return P;
  ((cn = 1),
    Object.defineProperty(P, "__esModule", { value: !0 }),
    (P._makeTypedGet =
      P._mergeOverride =
      P._makeLayer =
      P._makeExperiment =
      P._makeDynamicConfig =
      P._makeFeatureGate =
        void 0));
  const t = R(),
    f = ct();
  function d(s, a, o, r) {
    var i;
    return {
      name: s,
      details: a,
      ruleID: (i = o?.rule_id) !== null && i !== void 0 ? i : "",
      __evaluation: o,
      value: r,
    };
  }
  function E(s, a, o) {
    var r;
    return Object.assign(Object.assign({}, d(s, a, o, o?.value === !0)), {
      idType: (r = o?.id_type) !== null && r !== void 0 ? r : null,
    });
  }
  P._makeFeatureGate = E;
  function v(s, a, o) {
    var r, i;
    const n = (r = o?.value) !== null && r !== void 0 ? r : {};
    return Object.assign(Object.assign({}, d(s, a, o, n)), {
      idType: (i = o?.id_type) !== null && i !== void 0 ? i : null,
      get: S(s, o?.value),
    });
  }
  P._makeDynamicConfig = v;
  function _(s, a, o) {
    var r;
    const i = v(s, a, o);
    return Object.assign(Object.assign({}, i), {
      groupName: (r = o?.group_name) !== null && r !== void 0 ? r : null,
    });
  }
  P._makeExperiment = _;
  function l(s, a, o, r) {
    var i, n;
    return Object.assign(Object.assign({}, d(s, a, o, void 0)), {
      get: S(s, o?.value, r),
      groupName: (i = o?.group_name) !== null && i !== void 0 ? i : null,
      __value: (n = o?.value) !== null && n !== void 0 ? n : {},
    });
  }
  P._makeLayer = l;
  function y(s, a, o, r) {
    return Object.assign(Object.assign(Object.assign({}, s), a), { get: S(s.name, o, r) });
  }
  P._mergeOverride = y;
  function S(s, a, o) {
    return (r, i) => {
      var n;
      const e = (n = a?.[r]) !== null && n !== void 0 ? n : null;
      return e == null
        ? (i ?? null)
        : i != null && !(0, f._isTypeMatch)(e, i)
          ? (t.Log.warn(
              `Parameter type mismatch. '${s}.${r}' was found to be type '${typeof e}' but fallback/return type is '${typeof i}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`,
            ),
            i ?? null)
          : (o?.(r), e);
    };
  }
  return ((P._makeTypedGet = S), P);
}
var at = {},
  dn;
function Wn() {
  return (dn || ((dn = 1), Object.defineProperty(at, "__esModule", { value: !0 })), at);
}
var ce = {},
  _n;
function Hn() {
  if (_n) return ce;
  ((_n = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.UPDATE_DETAIL_ERROR_MESSAGES = ce.createUpdateDetails = void 0));
  const t = (f, d, E, v, _, l) => ({
    duration: E,
    source: d,
    success: f,
    error: v,
    sourceUrl: _,
    warnings: l,
  });
  return (
    (ce.createUpdateDetails = t),
    (ce.UPDATE_DETAIL_ERROR_MESSAGES = {
      NO_NETWORK_DATA:
        "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
    }),
    ce
  );
}
var hn;
function Xn() {
  return (
    hn ||
      ((hn = 1),
      (function (t) {
        var f =
            ($ && $.__createBinding) ||
            (Object.create
              ? function (s, a, o, r) {
                  r === void 0 && (r = o);
                  var i = Object.getOwnPropertyDescriptor(a, o);
                  ((!i || ("get" in i ? !a.__esModule : i.writable || i.configurable)) &&
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return a[o];
                      },
                    }),
                    Object.defineProperty(s, r, i));
                }
              : function (s, a, o, r) {
                  (r === void 0 && (r = o), (s[r] = a[o]));
                }),
          d =
            ($ && $.__exportStar) ||
            function (s, a) {
              for (var o in s)
                o !== "default" && !Object.prototype.hasOwnProperty.call(a, o) && f(a, s, o);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Storage = t.Log = t.EventLogger = t.Diagnostics = void 0),
          de());
        const E = de(),
          v = lt();
        Object.defineProperty(t, "Diagnostics", {
          enumerable: !0,
          get: function () {
            return v.Diagnostics;
          },
        });
        const _ = En();
        Object.defineProperty(t, "EventLogger", {
          enumerable: !0,
          get: function () {
            return _.EventLogger;
          },
        });
        const l = R();
        Object.defineProperty(t, "Log", {
          enumerable: !0,
          get: function () {
            return l.Log;
          },
        });
        const y = je(),
          S = J();
        (Object.defineProperty(t, "Storage", {
          enumerable: !0,
          get: function () {
            return S.Storage;
          },
        }),
          d(de(), t),
          d(Be(), t),
          d(Pn(), t),
          d(Un(), t),
          d(lt(), t),
          d(Nn(), t),
          d(wn(), t),
          d(jn(), t),
          d(Bn(), t),
          d(_e(), t),
          d(qn(), t),
          d(R(), t),
          d(Cn(), t),
          d(Re(), t),
          d(vn(), t),
          d(Kn(), t),
          d(xn(), t),
          d(W(), t),
          d(dt(), t),
          d(Pe(), t),
          d(Gn(), t),
          d(Ue(), t),
          d(zn(), t),
          d(fn(), t),
          d(Vn(), t),
          d(mn(), t),
          d(je(), t),
          d(qe(), t),
          d(Qn(), t),
          d(Jn(), t),
          d(Wn(), t),
          d(pn(), t),
          d(J(), t),
          d(bn(), t),
          d(ct(), t),
          d(yn(), t),
          d(_t(), t),
          d(Ae(), t),
          d(Hn(), t),
          d(gn(), t),
          Object.assign((0, E._getStatsigGlobal)(), { Log: l.Log, SDK_VERSION: y.SDK_VERSION }));
      })($)),
    $
  );
}
var ur = Xn();
export { Xn as r, ur as s };
