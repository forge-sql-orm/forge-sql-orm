const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-BCqYYRNo.js", "./lodash-vendor-Dv-o4pqD.js"]),
) => i.map((i) => d[i]);
import { r as Mn, c as bi } from "./react-dom-vendor-BXC0oJZi.js";
import { g as wi, a as Ei, r as Oi } from "./lodash-vendor-Dv-o4pqD.js";
import { r as M } from "./client-core-vendor-CP5_oPjo.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) u(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && u(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function u(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = s(n);
    fetch(n.href, o);
  }
})();
var rt = { exports: {} },
  z = {};
var kt;
function Ri() {
  if (kt) return z;
  kt = 1;
  var e = Mn(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, i) {
    var a,
      d = {},
      h = null,
      f = null;
    (i !== void 0 && (h = "" + i),
      l.key !== void 0 && (h = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (a in l) u.call(l, a) && !o.hasOwnProperty(a) && (d[a] = l[a]);
    if (c && c.defaultProps) for (a in ((l = c.defaultProps), l)) d[a] === void 0 && (d[a] = l[a]);
    return { $$typeof: r, type: c, key: h, ref: f, props: d, _owner: n.current };
  }
  return ((z.Fragment = s), (z.jsx = t), (z.jsxs = t), z);
}
var Ut;
function Si() {
  return (Ut || ((Ut = 1), (rt.exports = Ri())), rt.exports);
}
var b = Si(),
  ze = Mn();
const Pi = wi(ze);
var nt = {},
  qt = function (e, r) {
    return (
      (qt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, u) {
            s.__proto__ = u;
          }) ||
        function (s, u) {
          for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (s[n] = u[n]);
        }),
      qt(e, r)
    );
  };
function qn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  qt(e, r);
  function s() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
}
var Je = function () {
  return (
    (Je =
      Object.assign ||
      function (r) {
        for (var s, u = 1, n = arguments.length; u < n; u++) {
          s = arguments[u];
          for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o]);
        }
        return r;
      }),
    Je.apply(this, arguments)
  );
};
function Fn(e, r) {
  var s = {};
  for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && r.indexOf(u) < 0 && (s[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, u = Object.getOwnPropertySymbols(e); n < u.length; n++)
      r.indexOf(u[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, u[n]) &&
        (s[u[n]] = e[u[n]]);
  return s;
}
function Dn(e, r, s, u) {
  var n = arguments.length,
    o = n < 3 ? r : u === null ? (u = Object.getOwnPropertyDescriptor(r, s)) : u,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, r, s, u);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (o = (n < 3 ? t(o) : n > 3 ? t(r, s, o) : t(r, s)) || o);
  return (n > 3 && o && Object.defineProperty(r, s, o), o);
}
function Bn(e, r) {
  return function (s, u) {
    r(s, u, e);
  };
}
function Tn(e, r, s, u, n, o) {
  function t(v) {
    if (v !== void 0 && typeof v != "function") throw new TypeError("Function expected");
    return v;
  }
  for (
    var c = u.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      i = !r && e ? (u.static ? e : e.prototype) : null,
      a = r || (i ? Object.getOwnPropertyDescriptor(i, u.name) : {}),
      d,
      h = !1,
      f = s.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var _ in u) p[_] = _ === "access" ? {} : u[_];
    for (var _ in u.access) p.access[_] = u.access[_];
    p.addInitializer = function (v) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(t(v || null));
    };
    var g = (0, s[f])(c === "accessor" ? { get: a.get, set: a.set } : a[l], p);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = t(g.get)) && (a.get = d),
        (d = t(g.set)) && (a.set = d),
        (d = t(g.init)) && n.unshift(d));
    } else (d = t(g)) && (c === "field" ? n.unshift(d) : (a[l] = d));
  }
  (i && Object.defineProperty(i, u.name, a), (h = !0));
}
function kn(e, r, s) {
  for (var u = arguments.length > 2, n = 0; n < r.length; n++)
    s = u ? r[n].call(e, s) : r[n].call(e);
  return u ? s : void 0;
}
function Un(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function xn(e, r, s) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", r) : r })
  );
}
function Ln(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Nn(e, r, s, u) {
  function n(o) {
    return o instanceof s
      ? o
      : new s(function (t) {
          t(o);
        });
  }
  return new (s || (s = Promise))(function (o, t) {
    function c(a) {
      try {
        i(u.next(a));
      } catch (d) {
        t(d);
      }
    }
    function l(a) {
      try {
        i(u.throw(a));
      } catch (d) {
        t(d);
      }
    }
    function i(a) {
      a.done ? o(a.value) : n(a.value).then(c, l);
    }
    i((u = u.apply(e, r || [])).next());
  });
}
function Gn(e, r) {
  var s = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    u,
    n,
    o,
    t = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (t.next = c(0)),
    (t.throw = c(1)),
    (t.return = c(2)),
    typeof Symbol == "function" &&
      (t[Symbol.iterator] = function () {
        return this;
      }),
    t
  );
  function c(i) {
    return function (a) {
      return l([i, a]);
    };
  }
  function l(i) {
    if (u) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), i[0] && (s = 0)), s; )
      try {
        if (
          ((u = 1),
          n &&
            (o =
              i[0] & 2 ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
            !(o = o.call(n, i[1])).done)
        )
          return o;
        switch (((n = 0), o && (i = [i[0] & 2, o.value]), i[0])) {
          case 0:
          case 1:
            o = i;
            break;
          case 4:
            return (s.label++, { value: i[1], done: !1 });
          case 5:
            (s.label++, (n = i[1]), (i = [0]));
            continue;
          case 7:
            ((i = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((o = s.trys), !(o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (i[0] === 3 && (!o || (i[1] > o[0] && i[1] < o[3]))) {
              s.label = i[1];
              break;
            }
            if (i[0] === 6 && s.label < o[1]) {
              ((s.label = o[1]), (o = i));
              break;
            }
            if (o && s.label < o[2]) {
              ((s.label = o[2]), s.ops.push(i));
              break;
            }
            (o[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        i = r.call(e, s);
      } catch (a) {
        ((i = [6, a]), (n = 0));
      } finally {
        u = o = 0;
      }
    if (i[0] & 5) throw i[1];
    return { value: i[0] ? i[1] : void 0, done: !0 };
  }
}
var Ye = Object.create
  ? function (e, r, s, u) {
      u === void 0 && (u = s);
      var n = Object.getOwnPropertyDescriptor(r, s);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[s];
          },
        }),
        Object.defineProperty(e, u, n));
    }
  : function (e, r, s, u) {
      (u === void 0 && (u = s), (e[u] = r[s]));
    };
function Vn(e, r) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && Ye(r, e, s);
}
function Qe(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    s = r && e[r],
    u = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && u >= e.length && (e = void 0), { value: e && e[u++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bt(e, r) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var u = s.call(e),
    n,
    o = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = u.next()).done; ) o.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (s = u.return) && s.call(u);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function zn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Bt(arguments[r]));
  return e;
}
function Wn() {
  for (var e = 0, r = 0, s = arguments.length; r < s; r++) e += arguments[r].length;
  for (var u = Array(e), n = 0, r = 0; r < s; r++)
    for (var o = arguments[r], t = 0, c = o.length; t < c; t++, n++) u[n] = o[t];
  return u;
}
function Kn(e, r, s) {
  if (s || arguments.length === 2)
    for (var u = 0, n = r.length, o; u < n; u++)
      (o || !(u in r)) && (o || (o = Array.prototype.slice.call(r, 0, u)), (o[u] = r[u]));
  return e.concat(o || Array.prototype.slice.call(r));
}
function G(e) {
  return this instanceof G ? ((this.v = e), this) : new G(e);
}
function Hn(e, r, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = s.apply(e, r || []),
    n,
    o = [];
  return (
    (n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", t),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function t(f) {
    return function (p) {
      return Promise.resolve(p).then(f, d);
    };
  }
  function c(f, p) {
    u[f] &&
      ((n[f] = function (_) {
        return new Promise(function (g, v) {
          o.push([f, _, g, v]) > 1 || l(f, _);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function l(f, p) {
    try {
      i(u[f](p));
    } catch (_) {
      h(o[0][3], _);
    }
  }
  function i(f) {
    f.value instanceof G ? Promise.resolve(f.value.v).then(a, d) : h(o[0][2], f);
  }
  function a(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function h(f, p) {
    (f(p), o.shift(), o.length && l(o[0][0], o[0][1]));
  }
}
function Jn(e) {
  var r, s;
  return (
    (r = {}),
    u("next"),
    u("throw", function (n) {
      throw n;
    }),
    u("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function u(n, o) {
    r[n] = e[n]
      ? function (t) {
          return (s = !s) ? { value: G(e[n](t)), done: !1 } : o ? o(t) : t;
        }
      : o;
  }
}
function Qn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    s;
  return r
    ? r.call(e)
    : ((e = typeof Qe == "function" ? Qe(e) : e[Symbol.iterator]()),
      (s = {}),
      u("next"),
      u("throw"),
      u("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function u(o) {
    s[o] =
      e[o] &&
      function (t) {
        return new Promise(function (c, l) {
          ((t = e[o](t)), n(c, l, t.done, t.value));
        });
      };
  }
  function n(o, t, c, l) {
    Promise.resolve(l).then(function (i) {
      o({ value: i, done: c });
    }, t);
  }
}
function Yn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var Ci = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Ft = function (e) {
    return (
      (Ft =
        Object.getOwnPropertyNames ||
        function (r) {
          var s = [];
          for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (s[s.length] = u);
          return s;
        }),
      Ft(e)
    );
  };
function Xn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var s = Ft(e), u = 0; u < s.length; u++) s[u] !== "default" && Ye(r, e, s[u]);
  return (Ci(r, e), r);
}
function Zn(e) {
  return e && e.__esModule ? e : { default: e };
}
function $n(e, r, s, u) {
  if (s === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !u : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? u : s === "a" ? u.call(e) : u ? u.value : r.get(e);
}
function ei(e, r, s, u, n) {
  if (u === "m") throw new TypeError("Private method is not writable");
  if (u === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (u === "a" ? n.call(e, s) : n ? (n.value = s) : r.set(e, s), s);
}
function ti(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function ri(e, r, s) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var u, n;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      u = r[Symbol.asyncDispose];
    }
    if (u === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((u = r[Symbol.dispose]), s && (n = u));
    }
    if (typeof u != "function") throw new TypeError("Object not disposable.");
    (n &&
      (u = function () {
        try {
          n.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: r, dispose: u, async: s }));
  } else s && e.stack.push({ async: !0 });
  return r;
}
var Ii =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, s) {
        var u = new Error(s);
        return ((u.name = "SuppressedError"), (u.error = e), (u.suppressed = r), u);
      };
function ni(e) {
  function r(o) {
    ((e.error = e.hasError ? new Ii(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var s,
    u = 0;
  function n() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && u === 1) return ((u = 0), e.stack.push(s), Promise.resolve().then(n));
        if (s.dispose) {
          var o = s.dispose.call(s.value);
          if (s.async)
            return (
              (u |= 2),
              Promise.resolve(o).then(n, function (t) {
                return (r(t), n());
              })
            );
        } else u |= 1;
      } catch (t) {
        r(t);
      }
    if (u === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function ii(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, u, n, o, t) {
        return u
          ? r
            ? ".jsx"
            : ".js"
          : n && (!o || !t)
            ? s
            : n + o + "." + t.toLowerCase() + "js";
      })
    : e;
}
const ji = {
    __extends: qn,
    __assign: Je,
    __rest: Fn,
    __decorate: Dn,
    __param: Bn,
    __esDecorate: Tn,
    __runInitializers: kn,
    __propKey: Un,
    __setFunctionName: xn,
    __metadata: Ln,
    __awaiter: Nn,
    __generator: Gn,
    __createBinding: Ye,
    __exportStar: Vn,
    __values: Qe,
    __read: Bt,
    __spread: zn,
    __spreadArrays: Wn,
    __spreadArray: Kn,
    __await: G,
    __asyncGenerator: Hn,
    __asyncDelegator: Jn,
    __asyncValues: Qn,
    __makeTemplateObject: Yn,
    __importStar: Xn,
    __importDefault: Zn,
    __classPrivateFieldGet: $n,
    __classPrivateFieldSet: ei,
    __classPrivateFieldIn: ti,
    __addDisposableResource: ri,
    __disposeResources: ni,
    __rewriteRelativeImportExtension: ii,
  },
  Ai = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: ri,
        get __assign() {
          return Je;
        },
        __asyncDelegator: Jn,
        __asyncGenerator: Hn,
        __asyncValues: Qn,
        __await: G,
        __awaiter: Nn,
        __classPrivateFieldGet: $n,
        __classPrivateFieldIn: ti,
        __classPrivateFieldSet: ei,
        __createBinding: Ye,
        __decorate: Dn,
        __disposeResources: ni,
        __esDecorate: Tn,
        __exportStar: Vn,
        __extends: qn,
        __generator: Gn,
        __importDefault: Zn,
        __importStar: Xn,
        __makeTemplateObject: Yn,
        __metadata: Ln,
        __param: Bn,
        __propKey: Un,
        __read: Bt,
        __rest: Fn,
        __rewriteRelativeImportExtension: ii,
        __runInitializers: kn,
        __setFunctionName: xn,
        __spread: zn,
        __spreadArray: Kn,
        __spreadArrays: Wn,
        __values: Qe,
        default: ji,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S = Ei(Ai);
var W = {},
  xt;
function Mi() {
  return (
    xt ||
      ((xt = 1),
      Object.defineProperty(W, "__esModule", { value: !0 }),
      (W.NavigationTarget = void 0),
      (W.NavigationTarget = {
        ContentView: "contentView",
        ContentEdit: "contentEdit",
        ContentList: "contentList",
        SpaceView: "spaceView",
        Module: "module",
        UserProfile: "userProfile",
        Dashboard: "dashboard",
        Issue: "issue",
        ProjectSettingsDetails: "projectSettingsDetails",
      })),
    W
  );
}
var it = {},
  ot = {},
  K = {},
  H = {},
  Lt;
function R() {
  if (Lt) return H;
  ((Lt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.BridgeAPIError = void 0));
  class e extends Error {}
  return ((H.BridgeAPIError = e), H);
}
var Nt;
function E() {
  if (Nt) return K;
  ((Nt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
  const e = R();
  function r(u) {
    return !!u?.callBridge;
  }
  const s = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((K.getCallBridge = s), K);
}
var J = {},
  Gt;
function Xe() {
  if (Gt) return J;
  ((Gt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.withRateLimiter = void 0));
  const e = R(),
    r = (s, u, n, o) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const i = Date.now();
        if ((i - t > n && ((t = i), (c = 0)), c >= u))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((c = c + 1), s(...l));
      };
    };
  return ((J.withRateLimiter = r), J);
}
var Vt;
function qi() {
  return (
    Vt ||
      ((Vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = E(),
          s = R(),
          u = Xe(),
          n = (0, r.getCallBridge)(),
          o = (l) => {
            if (l && Object.values(l).some((i) => typeof i == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, i) => {
            if (typeof l != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (o(i), n("invoke", { functionKey: l, payload: i }));
          };
        e.invoke = (0, u.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(ot)),
    ot
  );
}
var zt;
function We() {
  return (
    zt ||
      ((zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(qi(), e));
      })(it)),
    it
  );
}
var st = {},
  Q = {},
  at = {},
  Wt;
function oi() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = E(),
          s = R(),
          u = Xe(),
          n = 500,
          o = 25,
          t = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((h) => typeof h == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (d) => async (h) => {
            l(h);
            const f = { ...h, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await c("invoke", f),
              { success: _, payload: g, error: v } = p ?? {},
              y = { ...(_ ? g : v) };
            if (y && y.headers)
              for (const m in y.headers)
                Array.isArray(y.headers[m]) && (y.headers[m] = y.headers[m].join(","));
            return y;
          },
          a = (d) => {
            const h = i(d);
            return (0, u.withRateLimiter)(
              h,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${o}s`,
            );
          };
        e._invokeEndpointFn = a;
      })(at)),
    at
  );
}
var Kt;
function Fi() {
  if (Kt) return Q;
  ((Kt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = oi(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((Q.invokeRemote = r), Q);
}
var Y = {},
  Ht;
function Di() {
  if (Ht) return Y;
  ((Ht = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.invokeService = void 0));
  const e = oi(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((Y.invokeService = r), Y);
}
var Jt;
function Bi() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(Fi(), e), r.__exportStar(Di(), e));
      })(st)),
    st
  );
}
var ut = {},
  X = {},
  Z = {},
  Qt;
function Ti() {
  if (Qt) return Z;
  ((Qt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.submit = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await s("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Z.submit = u), Z);
}
var $ = {},
  Yt;
function ki() {
  if (Yt) return $;
  ((Yt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.close = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        if ((await s("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (($.close = u), $);
}
var ee = {},
  Xt;
function Ui() {
  if (Xt) return ee;
  ((Xt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.open = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = async () => {
      try {
        if ((await s("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((ee.open = u), ee);
}
var te = {},
  Zt;
function xi() {
  if (Zt) return te;
  ((Zt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.refresh = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await s("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((te.refresh = u), te);
}
var re = {},
  $t;
function Li() {
  if ($t) return re;
  (($t = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.createHistory = void 0));
  const r = (0, E().getCallBridge)(),
    s = async () => {
      const u = await r("createHistory");
      return (
        u.listen((n) => {
          u.location = n;
        }),
        u
      );
    };
  return ((re.createHistory = s), re);
}
var ne = {},
  lt = {},
  I = {},
  er;
function si() {
  return (
    er ||
      ((er = 1),
      Object.defineProperty(I, "__esModule", { value: !0 }),
      (I.FORGE_SUPPORTED_LOCALE_CODES = I.I18N_BUNDLE_FOLDER_NAME = I.I18N_INFO_FILE_NAME = void 0),
      (I.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (I.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (I.FORGE_SUPPORTED_LOCALE_CODES = [
        "zh-CN",
        "zh-TW",
        "cs-CZ",
        "da-DK",
        "nl-NL",
        "en-US",
        "en-GB",
        "et-EE",
        "fi-FI",
        "fr-FR",
        "de-DE",
        "hu-HU",
        "is-IS",
        "it-IT",
        "ja-JP",
        "ko-KR",
        "no-NO",
        "pl-PL",
        "pt-BR",
        "pt-PT",
        "ro-RO",
        "ru-RU",
        "sk-SK",
        "tr-TR",
        "es-ES",
        "sv-SE",
      ])),
    I
  );
}
var F = {},
  tr;
function Ni() {
  if (tr) return F;
  ((tr = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.TranslationsGetter = F.TranslationGetterError = void 0));
  const e = (u, n) => {
    u.includes(n) || u.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  F.TranslationGetterError = r;
  class s {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, o = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: c } = o;
      if (!c) {
        let l;
        return (
          t.locales.includes(n) && (l = await this.getTranslationResource(n)),
          { translations: l ?? null, locale: n }
        );
      }
      for (const l of this.getLocaleLookupOrder(n, t)) {
        const i = await this.getTranslationResource(l);
        if (i) return { translations: i, locale: l };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const o = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, o);
      return await Promise.all(
        t.map(async (c) => {
          const l = await this.getTranslationResource(c);
          return { locale: c, translations: l };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(n) {
      let o = this.translationResources.get(n);
      if (!o)
        try {
          ((o = await this.resourcesAccessor.getTranslationResource(n)),
            this.translationResources.set(n, o));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${n}`);
        }
      return o;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (n) {
          throw n instanceof r ? n : new r("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(n, o) {
      const { locales: t, fallback: c } = o,
        l = [n],
        i = c[n];
      return (
        i && Array.isArray(i) && i.length > 0 && l.push(...i),
        e(l, o.fallback.default),
        l.filter((a) => t.includes(a))
      );
    }
  }
  return ((F.TranslationsGetter = s), F);
}
var ie = {},
  ct = {},
  rr;
function ai() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = S.__importDefault(Oi()),
          u = (o, t, c) => {
            const l = o[c];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = u;
        const n = (o, t) => {
          let c = o[t];
          if (!c) {
            const l = t.split(".");
            l.length > 1 && (c = (0, s.default)(o, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(ct)),
    ct
  );
}
var nr;
function Gi() {
  if (nr) return ie;
  ((nr = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.Translator = void 0));
  const e = ai();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(u, n) {
      ((this.locale = u), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(u) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(u);
      if (n === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(o, u);
          if (t !== null) {
            n = t;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(u, n));
      }
      return n;
    }
  }
  return ((ie.Translator = r), ie);
}
var oe = {},
  ir;
function Vi() {
  if (ir) return oe;
  ((ir = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = si(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    u = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, t) => {
        const [c] = t.split("-");
        return (o[c] || (o[c] = t), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (o) => {
      const t = o.replace("_", "-");
      return r.has(t) ? t : (u[t] ?? s[t] ?? null);
    };
  return ((oe.ensureLocale = n), oe);
}
var dt = {},
  or;
function zi() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (i) => typeof i == "object" && i !== null && !Array.isArray(i),
          s = (i) => typeof i?.i18n == "string",
          u = (i) => i.startsWith("connect-"),
          n = (i) => i.startsWith("core:"),
          o = (i) => {
            const a = new Set(),
              d = (h, f) =>
                !r(h) || a.has(h)
                  ? []
                  : (a.add(h),
                    Object.entries(h).flatMap(([p, _]) => {
                      const g = [...f, p];
                      return s(_)
                        ? [{ propertyPath: g, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((v) => d(v, g))
                          : d(_, g);
                    }));
            return d(i, []);
          },
          t = (i) =>
            Object.entries(i).flatMap(([a, d]) =>
              !u(a) && !n(a) && d && Array.isArray(d) && d.length > 0 ? d.map((h) => [h, a]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (i) => {
          const a = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = o(d[0]);
            for (const { key: f } of h) a.add(f);
          }
          return a.size > 0 ? Array.from(a) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (i) => {
          const a = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(i)) {
            const h = o(d[0]);
            for (const f of h) a.push({ moduleName: d[1], ...f });
          }
          return a;
        };
        e.extractI18nPropertiesFromModules = l;
      })(dt)),
    dt
  );
}
var ft = {},
  sr;
function Wi() {
  return (sr || ((sr = 1), Object.defineProperty(ft, "__esModule", { value: !0 })), ft);
}
var ar;
function ui() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = S;
        (r.__exportStar(si(), e),
          r.__exportStar(Ni(), e),
          r.__exportStar(Gi(), e),
          r.__exportStar(Vi(), e));
        var s = ai();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var u = zi();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return u.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return u.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return u.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(Wi(), e));
      })(lt)),
    lt
  );
}
var ur;
function Ki() {
  if (ur) return ne;
  ((ur = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.getContext = void 0));
  const e = E(),
    r = ui(),
    s = (0, e.getCallBridge)(),
    u = async () => {
      var n;
      const o = await s("getContext"),
        t = o?.locale;
      return (t && (o.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), o);
    };
  return ((ne.getContext = u), ne);
}
var se = {},
  lr;
function Hi() {
  if (lr) return se;
  ((lr = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.changeWindowTitle = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        await s("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((se.changeWindowTitle = u), se);
}
var ae = {},
  cr;
function Ji() {
  if (cr) return ae;
  ((cr = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.theme = void 0));
  const r = (0, E().getCallBridge)();
  return ((ae.theme = { enable: () => r("enableTheming") }), ae);
}
var ue = {},
  le = {},
  _t = {},
  D = {},
  dr;
function li() {
  if (dr) return D;
  ((dr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.blobToBase64 = D.base64ToBlob = void 0));
  const e = (s, u) => {
    if (!s) return null;
    const n = s.includes(";base64") ? s.split(",")[1] : s,
      o = atob(n),
      t = new Array(o.length);
    for (let l = 0; l < o.length; l++) t[l] = o.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: u });
  };
  D.base64ToBlob = e;
  const r = (s) =>
    new Promise((u, n) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        u(o.result);
      }),
        (o.onerror = n),
        o.readAsDataURL(s));
    });
  return ((D.blobToBase64 = r), D);
}
var fr;
function Qi() {
  return (
    fr ||
      ((fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = li(),
          s = (i) => {
            if (
              typeof i != "object" ||
              i === null ||
              Object.prototype.toString.call(i) !== "[object Object]"
            )
              return !1;
            const a = Object.getPrototypeOf(i);
            if (a === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(a, "constructor") && a.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(i)
            );
          },
          u = async (i) => ({ data: await (0, r.blobToBase64)(i), type: i.type }),
          n = (i) => (0, r.base64ToBlob)(i.data, i.type),
          o = async (i) => {
            if (i instanceof Blob) return { ...(await u(i)), __isBlobData: !0 };
            if (Array.isArray(i))
              return Promise.all(i.map((a) => (0, e.serialiseBlobsInPayload)(a)));
            if (i && s(i)) {
              const a = await Promise.all(
                Object.entries(i).map(async ([d, h]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(a);
            }
            return i;
          };
        e.serialiseBlobsInPayload = o;
        const t = (i) => {
          if (i && s(i) && "__isBlobData" in i) {
            const a = i;
            return n({ data: a.data, type: a.type });
          }
          if (Array.isArray(i)) return i.map((a) => (0, e.deserialiseBlobsInPayload)(a));
          if (i && s(i)) {
            const a = {};
            for (const [d, h] of Object.entries(i)) a[d] = (0, e.deserialiseBlobsInPayload)(h);
            return a;
          }
          return i;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (i) =>
          i instanceof Blob
            ? !0
            : Array.isArray(i)
              ? i.some((a) => (0, e.containsBlobs)(a))
              : i && s(i)
                ? Object.values(i).some((a) => (0, e.containsBlobs)(a))
                : !1;
        e.containsBlobs = c;
        const l = (i) =>
          i && s(i) && "__isBlobData" in i
            ? !0
            : Array.isArray(i)
              ? i.some((a) => (0, e.containsSerialisedBlobs)(a))
              : i && s(i)
                ? Object.values(i).some((a) => (0, e.containsSerialisedBlobs)(a))
                : !1;
        e.containsSerialisedBlobs = l;
      })(_t)),
    _t
  );
}
var _r;
function ci() {
  if (_r) return le;
  ((_r = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.events = void 0));
  const e = E(),
    r = Qi(),
    s = (0, e.getCallBridge)(),
    u = (l) => (i) => {
      let a = i;
      return ((0, r.containsSerialisedBlobs)(i) && (a = (0, r.deserialiseBlobsInPayload)(i)), l(a));
    },
    n = async (l, i) => {
      let a = i;
      return (
        (0, r.containsBlobs)(i) && (a = await (0, r.serialiseBlobsInPayload)(i)),
        s("emit", { event: l, payload: a })
      );
    },
    o = (l, i) => s("on", { event: l, callback: u(i) }),
    t = async (l, i) => {
      let a = i;
      return (
        (0, r.containsBlobs)(i) && (a = await (0, r.serialiseBlobsInPayload)(i)),
        s("emitPublic", { event: l, payload: a })
      );
    },
    c = (l, i) => s("onPublic", { event: l, callback: u(i) });
  return ((le.events = { emit: n, on: o, emitPublic: t, onPublic: c }), le);
}
var gr;
function Yi() {
  if (gr) return ue;
  ((gr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = ci(),
    r = gi(),
    u = (0, E().getCallBridge)(),
    n = "EXTENSION_READY",
    o = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await u("emitReadyEvent");
      } catch {}
    };
  return ((ue.emitReadyEvent = o), ue);
}
const Xi = "modulepreload",
  Zi = function (e, r) {
    return new URL(e, r).href;
  },
  hr = {},
  $i = function (r, s, u) {
    let n = Promise.resolve();
    if (s && s.length > 0) {
      let i = function (a) {
        return Promise.all(
          a.map((d) =>
            Promise.resolve(d).then(
              (h) => ({ status: "fulfilled", value: h }),
              (h) => ({ status: "rejected", reason: h }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        l = c?.nonce || c?.getAttribute("nonce");
      n = i(
        s.map((a) => {
          if (((a = Zi(a, u)), a in hr)) return;
          hr[a] = !0;
          const d = a.endsWith(".css"),
            h = d ? '[rel="stylesheet"]' : "";
          if (u)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === a && (!d || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${a}"]${h}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = d ? "stylesheet" : Xi),
            d || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = a),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            d)
          )
            return new Promise((p, _) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${a}`))));
            });
        }),
      );
    }
    function o(t) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = t), window.dispatchEvent(c), !c.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const c of t || []) c.status === "rejected" && o(c.reason);
      return r().catch(o);
    });
  };
var ce = {},
  gt = {},
  de = {},
  Ke = {},
  vr;
function di() {
  if (vr) return Ke;
  ((vr = 1), Object.defineProperty(Ke, "__esModule", { value: !0 }), (Ke.default = s));
  let e;
  const r = new Uint8Array(16);
  function s() {
    if (
      !e &&
      ((e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !e)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return e(r);
  }
  return Ke;
}
var x = {},
  fe = {},
  _e = {},
  pr;
function eo() {
  if (pr) return _e;
  ((pr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((_e.default = e), _e);
}
var yr;
function Ze() {
  if (yr) return fe;
  ((yr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = r(eo());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var u = s;
  return ((fe.default = u), fe);
}
var mr;
function $e() {
  if (mr) return x;
  ((mr = 1),
    Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.default = void 0),
    (x.unsafeStringify = u));
  var e = r(Ze());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const s = [];
  for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
  function u(t, c = 0) {
    return (
      s[t[c + 0]] +
      s[t[c + 1]] +
      s[t[c + 2]] +
      s[t[c + 3]] +
      "-" +
      s[t[c + 4]] +
      s[t[c + 5]] +
      "-" +
      s[t[c + 6]] +
      s[t[c + 7]] +
      "-" +
      s[t[c + 8]] +
      s[t[c + 9]] +
      "-" +
      s[t[c + 10]] +
      s[t[c + 11]] +
      s[t[c + 12]] +
      s[t[c + 13]] +
      s[t[c + 14]] +
      s[t[c + 15]]
    );
  }
  function n(t, c = 0) {
    const l = u(t, c);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var o = n;
  return ((x.default = o), x);
}
var br;
function to() {
  if (br) return de;
  ((br = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = s(di()),
    r = $e();
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  let u,
    n,
    o = 0,
    t = 0;
  function c(i, a, d) {
    let h = (a && d) || 0;
    const f = a || new Array(16);
    i = i || {};
    let p = i.node || u,
      _ = i.clockseq !== void 0 ? i.clockseq : n;
    if (p == null || _ == null) {
      const O = i.random || (i.rng || e.default)();
      (p == null && (p = u = [O[0] | 1, O[1], O[2], O[3], O[4], O[5]]),
        _ == null && (_ = n = ((O[6] << 8) | O[7]) & 16383));
    }
    let g = i.msecs !== void 0 ? i.msecs : Date.now(),
      v = i.nsecs !== void 0 ? i.nsecs : t + 1;
    const y = g - o + (v - t) / 1e4;
    if (
      (y < 0 && i.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || g > o) && i.nsecs === void 0 && (v = 0),
      v >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = g), (t = v), (n = _), (g += 122192928e5));
    const m = ((g & 268435455) * 1e4 + v) % 4294967296;
    ((f[h++] = (m >>> 24) & 255),
      (f[h++] = (m >>> 16) & 255),
      (f[h++] = (m >>> 8) & 255),
      (f[h++] = m & 255));
    const w = ((g / 4294967296) * 1e4) & 268435455;
    ((f[h++] = (w >>> 8) & 255),
      (f[h++] = w & 255),
      (f[h++] = ((w >>> 24) & 15) | 16),
      (f[h++] = (w >>> 16) & 255),
      (f[h++] = (_ >>> 8) | 128),
      (f[h++] = _ & 255));
    for (let O = 0; O < 6; ++O) f[h + O] = p[O];
    return a || (0, r.unsafeStringify)(f);
  }
  var l = c;
  return ((de.default = l), de);
}
var ge = {},
  A = {},
  he = {},
  wr;
function fi() {
  if (wr) return he;
  ((wr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = r(Ze());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    let o;
    const t = new Uint8Array(16);
    return (
      (t[0] = (o = parseInt(n.slice(0, 8), 16)) >>> 24),
      (t[1] = (o >>> 16) & 255),
      (t[2] = (o >>> 8) & 255),
      (t[3] = o & 255),
      (t[4] = (o = parseInt(n.slice(9, 13), 16)) >>> 8),
      (t[5] = o & 255),
      (t[6] = (o = parseInt(n.slice(14, 18), 16)) >>> 8),
      (t[7] = o & 255),
      (t[8] = (o = parseInt(n.slice(19, 23), 16)) >>> 8),
      (t[9] = o & 255),
      (t[10] = ((o = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (o / 4294967296) & 255),
      (t[12] = (o >>> 24) & 255),
      (t[13] = (o >>> 16) & 255),
      (t[14] = (o >>> 8) & 255),
      (t[15] = o & 255),
      t
    );
  }
  var u = s;
  return ((he.default = u), he);
}
var Er;
function _i() {
  if (Er) return A;
  ((Er = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.URL = A.DNS = void 0),
    (A.default = t));
  var e = $e(),
    r = s(fi());
  function s(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function u(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let i = 0; i < c.length; ++i) l.push(c.charCodeAt(i));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  A.DNS = n;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  A.URL = o;
  function t(c, l, i) {
    function a(d, h, f, p) {
      var _;
      if (
        (typeof d == "string" && (d = u(d)),
        typeof h == "string" && (h = (0, r.default)(h)),
        ((_ = h) === null || _ === void 0 ? void 0 : _.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + d.length);
      if (
        (g.set(h),
        g.set(d, h.length),
        (g = i(g)),
        (g[6] = (g[6] & 15) | l),
        (g[8] = (g[8] & 63) | 128),
        f)
      ) {
        p = p || 0;
        for (let v = 0; v < 16; ++v) f[p + v] = g[v];
        return f;
      }
      return (0, e.unsafeStringify)(g);
    }
    try {
      a.name = c;
    } catch {}
    return ((a.DNS = n), (a.URL = o), a);
  }
  return A;
}
var ve = {},
  Or;
function ro() {
  if (Or) return ve;
  ((Or = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  function e(f) {
    if (typeof f == "string") {
      const p = unescape(encodeURIComponent(f));
      f = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) f[_] = p.charCodeAt(_);
    }
    return r(u(n(f), f.length * 8));
  }
  function r(f) {
    const p = [],
      _ = f.length * 32,
      g = "0123456789abcdef";
    for (let v = 0; v < _; v += 8) {
      const y = (f[v >> 5] >>> (v % 32)) & 255,
        m = parseInt(g.charAt((y >>> 4) & 15) + g.charAt(y & 15), 16);
      p.push(m);
    }
    return p;
  }
  function s(f) {
    return (((f + 64) >>> 9) << 4) + 14 + 1;
  }
  function u(f, p) {
    ((f[p >> 5] |= 128 << (p % 32)), (f[s(p) - 1] = p));
    let _ = 1732584193,
      g = -271733879,
      v = -1732584194,
      y = 271733878;
    for (let m = 0; m < f.length; m += 16) {
      const w = _,
        O = g,
        C = v,
        V = y;
      ((_ = l(_, g, v, y, f[m], 7, -680876936)),
        (y = l(y, _, g, v, f[m + 1], 12, -389564586)),
        (v = l(v, y, _, g, f[m + 2], 17, 606105819)),
        (g = l(g, v, y, _, f[m + 3], 22, -1044525330)),
        (_ = l(_, g, v, y, f[m + 4], 7, -176418897)),
        (y = l(y, _, g, v, f[m + 5], 12, 1200080426)),
        (v = l(v, y, _, g, f[m + 6], 17, -1473231341)),
        (g = l(g, v, y, _, f[m + 7], 22, -45705983)),
        (_ = l(_, g, v, y, f[m + 8], 7, 1770035416)),
        (y = l(y, _, g, v, f[m + 9], 12, -1958414417)),
        (v = l(v, y, _, g, f[m + 10], 17, -42063)),
        (g = l(g, v, y, _, f[m + 11], 22, -1990404162)),
        (_ = l(_, g, v, y, f[m + 12], 7, 1804603682)),
        (y = l(y, _, g, v, f[m + 13], 12, -40341101)),
        (v = l(v, y, _, g, f[m + 14], 17, -1502002290)),
        (g = l(g, v, y, _, f[m + 15], 22, 1236535329)),
        (_ = i(_, g, v, y, f[m + 1], 5, -165796510)),
        (y = i(y, _, g, v, f[m + 6], 9, -1069501632)),
        (v = i(v, y, _, g, f[m + 11], 14, 643717713)),
        (g = i(g, v, y, _, f[m], 20, -373897302)),
        (_ = i(_, g, v, y, f[m + 5], 5, -701558691)),
        (y = i(y, _, g, v, f[m + 10], 9, 38016083)),
        (v = i(v, y, _, g, f[m + 15], 14, -660478335)),
        (g = i(g, v, y, _, f[m + 4], 20, -405537848)),
        (_ = i(_, g, v, y, f[m + 9], 5, 568446438)),
        (y = i(y, _, g, v, f[m + 14], 9, -1019803690)),
        (v = i(v, y, _, g, f[m + 3], 14, -187363961)),
        (g = i(g, v, y, _, f[m + 8], 20, 1163531501)),
        (_ = i(_, g, v, y, f[m + 13], 5, -1444681467)),
        (y = i(y, _, g, v, f[m + 2], 9, -51403784)),
        (v = i(v, y, _, g, f[m + 7], 14, 1735328473)),
        (g = i(g, v, y, _, f[m + 12], 20, -1926607734)),
        (_ = a(_, g, v, y, f[m + 5], 4, -378558)),
        (y = a(y, _, g, v, f[m + 8], 11, -2022574463)),
        (v = a(v, y, _, g, f[m + 11], 16, 1839030562)),
        (g = a(g, v, y, _, f[m + 14], 23, -35309556)),
        (_ = a(_, g, v, y, f[m + 1], 4, -1530992060)),
        (y = a(y, _, g, v, f[m + 4], 11, 1272893353)),
        (v = a(v, y, _, g, f[m + 7], 16, -155497632)),
        (g = a(g, v, y, _, f[m + 10], 23, -1094730640)),
        (_ = a(_, g, v, y, f[m + 13], 4, 681279174)),
        (y = a(y, _, g, v, f[m], 11, -358537222)),
        (v = a(v, y, _, g, f[m + 3], 16, -722521979)),
        (g = a(g, v, y, _, f[m + 6], 23, 76029189)),
        (_ = a(_, g, v, y, f[m + 9], 4, -640364487)),
        (y = a(y, _, g, v, f[m + 12], 11, -421815835)),
        (v = a(v, y, _, g, f[m + 15], 16, 530742520)),
        (g = a(g, v, y, _, f[m + 2], 23, -995338651)),
        (_ = d(_, g, v, y, f[m], 6, -198630844)),
        (y = d(y, _, g, v, f[m + 7], 10, 1126891415)),
        (v = d(v, y, _, g, f[m + 14], 15, -1416354905)),
        (g = d(g, v, y, _, f[m + 5], 21, -57434055)),
        (_ = d(_, g, v, y, f[m + 12], 6, 1700485571)),
        (y = d(y, _, g, v, f[m + 3], 10, -1894986606)),
        (v = d(v, y, _, g, f[m + 10], 15, -1051523)),
        (g = d(g, v, y, _, f[m + 1], 21, -2054922799)),
        (_ = d(_, g, v, y, f[m + 8], 6, 1873313359)),
        (y = d(y, _, g, v, f[m + 15], 10, -30611744)),
        (v = d(v, y, _, g, f[m + 6], 15, -1560198380)),
        (g = d(g, v, y, _, f[m + 13], 21, 1309151649)),
        (_ = d(_, g, v, y, f[m + 4], 6, -145523070)),
        (y = d(y, _, g, v, f[m + 11], 10, -1120210379)),
        (v = d(v, y, _, g, f[m + 2], 15, 718787259)),
        (g = d(g, v, y, _, f[m + 9], 21, -343485551)),
        (_ = o(_, w)),
        (g = o(g, O)),
        (v = o(v, C)),
        (y = o(y, V)));
    }
    return [_, g, v, y];
  }
  function n(f) {
    if (f.length === 0) return [];
    const p = f.length * 8,
      _ = new Uint32Array(s(p));
    for (let g = 0; g < p; g += 8) _[g >> 5] |= (f[g / 8] & 255) << (g % 32);
    return _;
  }
  function o(f, p) {
    const _ = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, _, g, v, y) {
    return o(t(o(o(p, f), o(g, y)), v), _);
  }
  function l(f, p, _, g, v, y, m) {
    return c((p & _) | (~p & g), f, p, v, y, m);
  }
  function i(f, p, _, g, v, y, m) {
    return c((p & g) | (_ & ~g), f, p, v, y, m);
  }
  function a(f, p, _, g, v, y, m) {
    return c(p ^ _ ^ g, f, p, v, y, m);
  }
  function d(f, p, _, g, v, y, m) {
    return c(_ ^ (p | ~g), f, p, v, y, m);
  }
  var h = e;
  return ((ve.default = h), ve);
}
var Rr;
function no() {
  if (Rr) return ge;
  ((Rr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = s(_i()),
    r = s(ro());
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ge.default = n), ge);
}
var pe = {},
  ye = {},
  Sr;
function io() {
  if (Sr) return ye;
  ((Sr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ye.default = r), ye);
}
var Pr;
function oo() {
  if (Pr) return pe;
  ((Pr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = u(io()),
    r = u(di()),
    s = $e();
  function u(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, l) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const i = t.random || (t.rng || r.default)();
    if (((i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), c)) {
      l = l || 0;
      for (let a = 0; a < 16; ++a) c[l + a] = i[a];
      return c;
    }
    return (0, s.unsafeStringify)(i);
  }
  var o = n;
  return ((pe.default = o), pe);
}
var me = {},
  be = {},
  Cr;
function so() {
  if (Cr) return be;
  ((Cr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  function e(n, o, t, c) {
    switch (n) {
      case 0:
        return (o & t) ^ (~o & c);
      case 1:
        return o ^ t ^ c;
      case 2:
        return (o & t) ^ (o & c) ^ (t & c);
      case 3:
        return o ^ t ^ c;
    }
  }
  function r(n, o) {
    return (n << o) | (n >>> (32 - o));
  }
  function s(n) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const a = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < a.length; ++d) n.push(a.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      l = Math.ceil(c / 16),
      i = new Array(l);
    for (let a = 0; a < l; ++a) {
      const d = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        d[h] =
          (n[a * 64 + h * 4] << 24) |
          (n[a * 64 + h * 4 + 1] << 16) |
          (n[a * 64 + h * 4 + 2] << 8) |
          n[a * 64 + h * 4 + 3];
      i[a] = d;
    }
    ((i[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (i[l - 1][14] = Math.floor(i[l - 1][14])),
      (i[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let a = 0; a < l; ++a) {
      const d = new Uint32Array(80);
      for (let v = 0; v < 16; ++v) d[v] = i[a][v];
      for (let v = 16; v < 80; ++v) d[v] = r(d[v - 3] ^ d[v - 8] ^ d[v - 14] ^ d[v - 16], 1);
      let h = t[0],
        f = t[1],
        p = t[2],
        _ = t[3],
        g = t[4];
      for (let v = 0; v < 80; ++v) {
        const y = Math.floor(v / 20),
          m = (r(h, 5) + e(y, f, p, _) + g + o[y] + d[v]) >>> 0;
        ((g = _), (_ = p), (p = r(f, 30) >>> 0), (f = h), (h = m));
      }
      ((t[0] = (t[0] + h) >>> 0),
        (t[1] = (t[1] + f) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + _) >>> 0),
        (t[4] = (t[4] + g) >>> 0));
    }
    return [
      (t[0] >> 24) & 255,
      (t[0] >> 16) & 255,
      (t[0] >> 8) & 255,
      t[0] & 255,
      (t[1] >> 24) & 255,
      (t[1] >> 16) & 255,
      (t[1] >> 8) & 255,
      t[1] & 255,
      (t[2] >> 24) & 255,
      (t[2] >> 16) & 255,
      (t[2] >> 8) & 255,
      t[2] & 255,
      (t[3] >> 24) & 255,
      (t[3] >> 16) & 255,
      (t[3] >> 8) & 255,
      t[3] & 255,
      (t[4] >> 24) & 255,
      (t[4] >> 16) & 255,
      (t[4] >> 8) & 255,
      t[4] & 255,
    ];
  }
  var u = s;
  return ((be.default = u), be);
}
var Ir;
function ao() {
  if (Ir) return me;
  ((Ir = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = s(_i()),
    r = s(so());
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((me.default = n), me);
}
var we = {},
  jr;
function uo() {
  if (jr) return we;
  ((jr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((we.default = e), we);
}
var Ee = {},
  Ar;
function lo() {
  if (Ar) return Ee;
  ((Ar = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = r(Ze());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var u = s;
  return ((Ee.default = u), Ee);
}
var Mr;
function co() {
  return (
    Mr ||
      ((Mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(e, "parse", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(e, "v1", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(e, "v3", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(e, "v5", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(e, "validate", {
            enumerable: !0,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }));
        var r = a(to()),
          s = a(no()),
          u = a(oo()),
          n = a(ao()),
          o = a(uo()),
          t = a(lo()),
          c = a(Ze()),
          l = a($e()),
          i = a(fi());
        function a(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(gt)),
    gt
  );
}
var qr;
function fo() {
  if (qr) return ce;
  ((qr = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.createAdfRendererIframeProps = void 0));
  const e = co(),
    r = async (s, u) => {
      const n = await $i(
          () => import("./index-BCqYYRNo.js").then((a) => a.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = u || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        i = () => {
          var a, d, h, f, p, _, g;
          const v = document.getElementById(l),
            y = {
              type: "adf-document",
              document: (a = s.extension.macro) === null || a === void 0 ? void 0 : a.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: s.localId,
              isEditing:
                (h = (d = s.extension) === null || d === void 0 ? void 0 : d.isEditing) !== null &&
                h !== void 0
                  ? h
                  : !1,
              contentId:
                (_ =
                  (p = (f = s.extension) === null || f === void 0 ? void 0 : f.macro) === null ||
                  p === void 0
                    ? void 0
                    : p.content) === null || _ === void 0
                  ? void 0
                  : _.id,
            };
          (o.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (m) => {
                var w;
                (w = m?.iFrameResizer) === null || w === void 0 || w.resize();
              },
            },
            v || "",
          ),
            (g = v?.contentWindow) === null || g === void 0 || g.postMessage(y, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: c, onLoad: i }
      );
    };
  return ((ce.createAdfRendererIframeProps = r), ce);
}
var Oe = {},
  Fr;
function _o() {
  if (Fr) return Oe;
  ((Fr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.onClose = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        if ((await s("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((Oe.onClose = u), Oe);
}
var Dr;
function gi() {
  if (Dr) return X;
  ((Dr = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.view = void 0));
  const e = Ti(),
    r = ki(),
    s = Ui(),
    u = xi(),
    n = Li(),
    o = Ki(),
    t = Hi(),
    c = Ji(),
    l = Yi(),
    i = fo(),
    a = _o();
  return (
    (X.view = {
      submit: e.submit,
      close: r.close,
      onClose: a.onClose,
      open: s.open,
      refresh: u.refresh,
      createHistory: n.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: i.createAdfRendererIframeProps,
    }),
    X
  );
}
var Br;
function et() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(gi(), e));
      })(ut)),
    ut
  );
}
var ht = {},
  Re = {},
  Tr;
function go() {
  if (Tr) return Re;
  ((Tr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.router = void 0));
  const r = (0, E().getCallBridge)(),
    s = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const c = await r("getUrl", t);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    u = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "same-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "same-tab" });
    },
    n = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "new-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "new-tab" });
    },
    o = async () => r("reload");
  return ((Re.router = { getUrl: s, navigate: u, open: n, reload: o }), Re);
}
var kr;
function ho() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(go(), e));
      })(ht)),
    ht
  );
}
var vt = {},
  Se = {},
  Ur;
function vo() {
  if (Ur) return Se;
  ((Ur = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.Modal = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = () => {};
  class n {
    constructor(t) {
      var c, l;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || u),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (c = t?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick = (l = t?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0),
        (this.title = t?.title || ""),
        (this.icon = t?.icon || ""));
    }
    async open() {
      try {
        if (
          (await s("openModal", {
            resource: this.resource,
            onClose: this.onClose,
            size: this.size,
            context: this.context,
            closeOnEscape: this.closeOnEscape,
            closeOnOverlayClick: this.closeOnOverlayClick,
            title: this.title,
            icon: this.icon,
          })) === !1
        )
          throw new r.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new r.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((Se.Modal = n), Se);
}
var xr;
function po() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(vo(), e));
      })(vt)),
    vt
  );
}
var P = {},
  B = {},
  Lr;
function yo() {
  if (Lr) return B;
  ((Lr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.productFetchApi = B.remoteFetchApi = void 0));
  const e = li(),
    r = async (t, c = !1) => {
      const l = {};
      for (const [i, a] of t.entries())
        if (c ? i.startsWith("file") : i === "file") {
          const h = a.name,
            f = a.type;
          ((l[i] = await (0, e.blobToBase64)(a)), (l[`__${i}Name`] = h), (l[`__${i}Type`] = f));
        } else l[i] = a;
      return JSON.stringify(l);
    },
    s = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: c, ...l } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          l
        );
      }
      return t;
    },
    u = async (t, c) => {
      const l = c?.body instanceof FormData,
        i = l ? await r(c?.body, t === "remote") : c?.body,
        a = new Request("", { body: i, method: c?.method, headers: c?.headers }),
        d = Object.fromEntries(a.headers.entries());
      return {
        body: a.method !== "GET" ? await a.text() : null,
        headers: new Headers(d),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const c = async (l, i) => {
        const a = s(i),
          { body: d, headers: h, isMultipartFormData: f } = await u("remote", a),
          p = {
            remoteKey: l,
            fetchRequestInit: { ...a, body: d, headers: [...h.entries()] },
            isMultipartFormData: f,
          },
          {
            body: _,
            headers: g,
            statusText: v,
            status: y,
            isAttachment: m,
          } = await t("fetchRemote", p),
          w = m ? (0, e.base64ToBlob)(_, g["content-type"]) : _;
        return new Response(w || null, { headers: g, status: y, statusText: v });
      };
      return { requestRemote: (l, i) => c(l, i) };
    };
  B.remoteFetchApi = n;
  const o = (t) => {
    const c = async (l, i, a) => {
      const d = s(a),
        { body: h, headers: f, isMultipartFormData: p } = await u("product", d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: l,
          restPath: i,
          fetchRequestInit: { ...d, body: h, headers: [...f.entries()] },
          isMultipartFormData: p,
        },
        {
          body: g,
          headers: v,
          statusText: y,
          status: m,
          isAttachment: w,
        } = await t("fetchProduct", _),
        O = w ? (0, e.base64ToBlob)(g, v["content-type"]) : g;
      return new Response(O || null, { headers: v, status: m, statusText: y });
    };
    return {
      requestConfluence: (l, i) => c("confluence", l, i),
      requestJira: (l, i) => c("jira", l, i),
      requestBitbucket: (l, i) => c("bitbucket", l, i),
    };
  };
  return ((B.productFetchApi = o), B);
}
var Nr;
function mo() {
  if (Nr) return P;
  Nr = 1;
  var e;
  (Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestRemote = P.requestBitbucket = P.requestJira = P.requestConfluence = void 0));
  const r = E(),
    s = yo();
  return (
    (e = (0, s.productFetchApi)((0, r.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    (P.requestRemote = (0, s.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    P
  );
}
var pt = {},
  Pe = {},
  Gr;
function bo() {
  if (Gr) return Pe;
  ((Gr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
  const e = E(),
    r = R(),
    s = (0, e.getCallBridge)(),
    u = (n) => {
      var o;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = s("showFlag", { ...n, type: (o = n.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await t, s("closeFlag", { id: n.id })) };
    };
  return ((Pe.showFlag = u), Pe);
}
var Vr;
function wo() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = bo();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(pt)),
    pt
  );
}
var yt = {},
  zr;
function Eo() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(ci(), e));
      })(yt)),
    yt
  );
}
var mt = {},
  Ce = {},
  Wr;
function Oo() {
  if (Wr) return Ce;
  ((Wr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.realtime = void 0));
  const r = (0, E().getCallBridge)(),
    s = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    u = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    o = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Ce.realtime = { publish: s, subscribe: u, publishGlobal: n, subscribeGlobal: o }), Ce);
}
var bt = {},
  Kr;
function Ro() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = void 0),
          (function (r) {
            ((r.Board = "board"), (r.Issue = "issue"), (r.Project = "project"));
          })(e.Jira || (e.Jira = {})),
          (function (r) {
            ((r.Content = "content"), (r.Space = "space"));
          })(e.Confluence || (e.Confluence = {})),
          (function (r) {
            ((r.Repository = "repository"), (r.PullRequest = "pullRequest"));
          })(e.Bitbucket || (e.Bitbucket = {})));
      })(bt)),
    bt
  );
}
var Hr;
function So() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = Oo();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var s = Ro();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return s.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return s.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return s.Bitbucket;
            },
          }));
      })(mt)),
    mt
  );
}
var wt = {},
  Ie = {},
  Et = {},
  Jr;
function Po() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = E(),
          s = R(),
          u = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const o = (c) => {
            switch (c.type) {
              case "forge":
                return { agentName: c.agentName, agentKey: c.agentKey, prompt: c.prompt };
              case "atlassian":
                return { agentName: c.agentName, prompt: c.prompt };
              default:
                return { prompt: c.prompt };
            }
          },
          t = async (c) => {
            if (c.type === "forge") {
              if (c.agentName.length > u) throw new Error("rovo agent name too long");
              if (c.agentKey.length > u) throw new Error("rovo agent key too long");
            }
            const l = o(c);
            if ((await n("openRovo", l)) === !1)
              throw new s.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(Et)),
    Et
  );
}
var je = {},
  Qr;
function Co() {
  if (Qr) return je;
  ((Qr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.isEnabled = void 0));
  const r = (0, E().getCallBridge)(),
    s = () => r("isRovoEnabled");
  return ((je.isEnabled = s), je);
}
var Yr;
function Io() {
  if (Yr) return Ie;
  ((Yr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.rovo = void 0));
  const e = Po(),
    r = Co();
  return ((Ie.rovo = { open: e.open, isEnabled: r.isEnabled }), Ie);
}
var Xr;
function jo() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Io(), e));
      })(wt)),
    wt
  );
}
var j = {},
  Zr;
function Ao() {
  if (Zr) return j;
  ((Zr = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.createTranslationFunction = j.getTranslations = j.resetTranslationsCache = void 0));
  const e = ui(),
    r = et(),
    s = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!l.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return l.json();
      },
    },
    u = new e.TranslationsGetter(s),
    n = () => {
      u.reset();
    };
  j.resetTranslationsCache = n;
  const o = async (c = null, l = { fallback: !0 }) => {
    let i = c;
    return (i || (i = (await r.view.getContext()).locale), await u.getTranslations(i, l));
  };
  j.getTranslations = o;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const i = new e.Translator(l, u);
    return (
      await i.init(),
      (a, d) => {
        var h, f;
        return (f = (h = i.translate(a)) !== null && h !== void 0 ? h : d) !== null && f !== void 0
          ? f
          : a;
      }
    );
  };
  return ((j.createTranslationFunction = t), j);
}
var Ot = {},
  Ae = {},
  $r;
function Mo() {
  if ($r) return Ae;
  (($r = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.permissions = void 0));
  const r = (0, E().getCallBridge)(),
    s = async (l) => r("__permission__egressGet", l),
    u = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    o = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (Ae.permissions = {
      egress: { get: s, set: u, deleteDomain: n, deleteGroup: o },
      remote: { get: t, set: c },
    }),
    Ae
  );
}
var T = {},
  Rt = {},
  St = {},
  Me = {},
  qe = {},
  en;
function Tt() {
  if (en) return qe;
  ((en = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.parseUrl = void 0));
  function e(r) {
    var s, u;
    const n =
        (u = (s = r.match(/^(.*?:)/)) === null || s === void 0 ? void 0 : s[0]) !== null &&
        u !== void 0
          ? u
          : "https:",
      o = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = o.split("/")[0],
      c = o.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: c };
  }
  return ((qe.parseUrl = e), qe);
}
var Pt = {},
  tn;
function hi() {
  return (
    tn ||
      ((tn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = Tt();
        function s(t) {
          const l = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${l}$`);
        }
        e.globToRegex = s;
        const u = (t) => {
          if (t?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            l = new Set(),
            i = [];
          return (
            t.forEach((a) => {
              const d = c.test(a) ? a : `https://${a}`,
                h = (0, r.parseUrl)(d);
              h.hostname.startsWith("*")
                ? (l.add(h.hostname.substring(2)), i.push(s(h.hostname)))
                : l.add(h.hostname);
            }),
            [...l].sort().reduce((a, d) => (i.some((h) => h.test(d)) || a.push(d), a), [])
          );
        };
        ((e.sortAndGroupEgressPermissionsByDomain = u),
          (function (t) {
            ((t.FetchBackendSide = "FETCH_BACKEND_SIDE"),
              (t.FetchClientSide = "FETCH_CLIENT_SIDE"),
              (t.Fonts = "FONTS"),
              (t.Frames = "FRAMES"),
              (t.Images = "IMAGES"),
              (t.Media = "MEDIA"),
              (t.Navigation = "NAVIGATION"),
              (t.Scripts = "SCRIPTS"),
              (t.Styles = "STYLES"));
          })(e.EgressType || (e.EgressType = {})));
        var n;
        (function (t) {
          t.ANALYTICS = "ANALYTICS";
        })((n = e.EgressCategory || (e.EgressCategory = {})));
        const o = (t) => {
          const c = t.egress.filter((i) => {
              var a;
              if (
                ((a = i.category) === null || a === void 0 ? void 0 : a.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const d = t.installationConfig.find(
                    (h) => h.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return d?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            l = new Map();
          for (const i of c)
            (l.has(i.type) || l.set(i.type, i.addresses),
              l.set(i.type, [...l.get(i.type), ...i.addresses]));
          return [...l.entries()].map(([i, a]) => ({ type: i, addresses: [...new Set(a)] }));
        };
        e.getEgressesBasedOnToggles = o;
      })(Pt)),
    Pt
  );
}
var rn;
function qo() {
  if (rn) return Me;
  ((rn = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.EgressFilteringService = void 0));
  const e = Tt(),
    r = hi();
  class s {
    constructor(n) {
      ((this.URLs = n.filter((o) => !o.startsWith("*")).map((o) => this.parseUrl(o))),
        (this.wildcardDomains = n
          .filter((o) => o !== "*")
          .map((o) => this.parseUrl(o))
          .filter((o) => decodeURIComponent(o.hostname).startsWith("*"))
          .map((o) => ({ ...o, regex: (0, r.globToRegex)(decodeURIComponent(o.hostname)) }))),
        (this.allowsEverything = n.includes("*")));
    }
    parseUrl(n) {
      return (0, e.parseUrl)(n);
    }
    containsWildCardEgress() {
      return this.allowsEverything;
    }
    isValidUrl(n) {
      if (this.allowsEverything) return !0;
      const o = this.parseUrl(n);
      return (
        this.allowedDomainExact(o, this.URLs) || this.allowedDomainPattern(o, this.wildcardDomains)
      );
    }
    isValidUrlCSP(n) {
      if (this.allowsEverything) return !0;
      const o = this.parseUrl(n);
      return (
        this.allowedDomainExactAndPath(o, this.URLs) ||
        this.allowedDomainPatternAndPath(o, this.wildcardDomains)
      );
    }
    allowedDomainExact(n, o) {
      return o.filter((t) => t.protocol === n.protocol).some((t) => t.hostname === n.hostname);
    }
    allowedDomainExactAndPath(n, o) {
      return o
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.hostname === n.hostname)
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    allowedDomainPattern(n, o) {
      return o.filter((t) => t.protocol === n.protocol).some((t) => t.regex.test(n.hostname));
    }
    allowedDomainPatternAndPath(n, o) {
      return o
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.regex.test(n.hostname))
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    protocolMatchesCSP(n, o) {
      return n === o || (n === "http:" && o === "https:") || (n === "ws:" && o === "wss:");
    }
    pathMatches(n, o) {
      return n === "/" ? !0 : n.endsWith("/") ? o.startsWith(n) : o === n;
    }
  }
  return ((Me.EgressFilteringService = s), Me);
}
var nn;
function Fo() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(qo(), e), r.__exportStar(Tt(), e), r.__exportStar(hi(), e));
      })(St)),
    St
  );
}
var on;
function Do() {
  return (
    on ||
      ((on = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Fo(), e));
      })(Rt)),
    Rt
  );
}
var sn;
function Bo() {
  if (sn) return T;
  ((sn = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.checkPermissions = T.createPermissionUtils = void 0));
  const e = Do(),
    r = et();
  function s(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const u = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function o(d) {
    if (!d) return null;
    const { scopes: h, external: f = {} } = d,
      p = Array.isArray(h) ? h : Object.keys(h || {});
    return {
      hasScope: (_) => p.includes(_),
      canFetchFrom: (_, g) => {
        var v;
        const y = (v = f.fetch) === null || v === void 0 ? void 0 : v[_];
        if (!y?.length) return !1;
        const m = y.map(s).filter((C) => C.length > 0);
        if (m.length === 0) return !1;
        const w = new e.EgressFilteringService(m);
        return _ === "client" ? w.isValidUrlCSP(g) : w.isValidUrl(g);
      },
      canLoadResource: (_, g) => {
        const v = f[_];
        if (!v?.length) return !1;
        const y = v.map(s).filter((O) => O.length > 0);
        return y.length === 0 ? !1 : new e.EgressFilteringService(y).isValidUrlCSP(g);
      },
      getScopes: () => p,
      getExternalPermissions: () => f,
      hasAnyPermissions: () => p.length > 0 || Object.keys(f).length > 0,
    };
  }
  T.createPermissionUtils = o;
  function t(d, h) {
    if (!d?.length) return;
    const f = d.filter((p) => !h.hasScope(p));
    return f.length > 0 ? f : void 0;
  }
  function c(d, h) {
    if (!d?.fetch) return;
    const f = {};
    return (
      n.forEach((p) => {
        var _;
        const g = (_ = d.fetch) === null || _ === void 0 ? void 0 : _[p];
        if (g?.length) {
          const v = g.filter((y) => !h.canFetchFrom(p, y));
          v.length > 0 && (f[p] = v);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function l(d, h) {
    const f = {};
    return (
      u.forEach((p) => {
        const _ = d?.[p];
        if (_?.length) {
          const g = _.filter((v) => !h.canLoadResource(p, v));
          g.length > 0 && (f[p] = g);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function i(d, h) {
    if (!d) return;
    const f = c(d, h),
      p = l(d, h);
    if (!f && !p) return;
    const _ = {};
    return (f && (_.fetch = f), p && Object.assign(_, p), _);
  }
  async function a(d, h) {
    var f;
    if (!d) return { granted: !1, missing: null };
    if (!(!((f = d.scopes) === null || f === void 0) && f.length) && !d.external)
      return { granted: !0, missing: null };
    let p = h;
    p || (p = (await r.view.getContext()).permissions);
    const _ = o(p);
    if (!_) return { granted: !1, missing: null };
    const g = {};
    let v = !0;
    const y = t(d.scopes, _);
    y && ((g.scopes = y), (v = !1));
    const m = i(d.external, _);
    return (m && ((g.external = m), (v = !1)), { granted: v, missing: v ? null : g });
  }
  return ((T.checkPermissions = a), T);
}
var an;
function To() {
  return (
    an ||
      ((an = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(Mo(), e), r.__exportStar(Bo(), e));
      })(Ot)),
    Ot
  );
}
var Ct = {},
  It = {},
  jt = {},
  Fe = {},
  De = {},
  un;
function vi() {
  return (
    un ||
      ((un = 1),
      Object.defineProperty(De, "__esModule", { value: !0 }),
      (De.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (De.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    De
  );
}
var ln;
function tt() {
  if (ln) return Fe;
  ((ln = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = et(),
    s = vi(),
    u = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Fe.checkRestrictedEnvironment = u), Fe);
}
var cn;
function ko() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = We(),
          s = R(),
          u = tt(),
          o = (0, E().getCallBridge)(),
          t = (a, d) => {
            const h = atob(a),
              f = new Array(h.length);
            for (let _ = 0; _ < h.length; _++) f[_] = h.charCodeAt(_);
            const p = new Uint8Array(f);
            return new Blob([p], { type: d || "application/octet-stream" });
          },
          c = async (a) => {
            const d = a.size,
              h = await a.arrayBuffer(),
              f = await crypto.subtle.digest("SHA-256", h),
              p = new Uint8Array(f),
              _ = btoa(String.fromCharCode(...p));
            return { length: d, checksum: _, checksumType: "SHA256" };
          },
          l = async ({ functionKey: a, objects: d }) => {
            if (!a || a.length === 0)
              throw new s.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new s.BridgeAPIError("objects array is required and must not be empty");
            const h = d.map((y, m) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new s.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(y.data, y.mimeType);
                } catch {
                  throw new s.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              f = await Promise.all(h.map((y) => c(y))),
              p = await (0, r.invoke)(a, { allObjectMetadata: f });
            if (!p || typeof p != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              g = new Map();
            return (
              h.forEach((y, m) => {
                const w = f[m];
                (_.set(w.checksum, y), g.set(w.checksum, m));
              }),
              Object.entries(p).map(([y, m]) => {
                const { key: w, checksum: O } = m,
                  C = _.get(O),
                  V = g.get(O);
                return V === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: w,
                        error: `Index not found for checksum ${O}`,
                      }),
                      index: -1,
                    }
                  : C
                    ? {
                        promise: (async () => {
                          try {
                            const q = await fetch(y, {
                              method: "PUT",
                              body: C,
                              headers: {
                                "Content-Type": C.type || "application/octet-stream",
                                "Content-Length": C.size.toString(),
                              },
                            });
                            return {
                              success: q.ok,
                              key: w,
                              status: q.status,
                              error: q.ok ? void 0 : `Upload failed with status ${q.status}`,
                            };
                          } catch (q) {
                            return {
                              success: !1,
                              key: w,
                              status: 503,
                              error: q instanceof Error ? q.message : "Upload failed",
                            };
                          }
                        })(),
                        index: V,
                        objectType: C.type,
                        objectSize: C.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: w,
                          error: `Blob not found for checksum ${O}`,
                        }),
                        index: V,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const i = async ({ functionKey: a, objects: d }) => {
          (await (0, u.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: a, objects: d });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = i;
      })(jt)),
    jt
  );
}
var Be = {},
  dn;
function Uo() {
  if (dn) return Be;
  ((dn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.deleteObjects = void 0));
  const e = We(),
    r = R(),
    s = tt(),
    n = (0, E().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "delete" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (l) => {
          await (0, e.invoke)(t, { key: l });
        }),
      );
    };
  return ((Be.deleteObjects = o), Be);
}
var Te = {},
  fn;
function xo() {
  if (fn) return Te;
  ((fn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.download = void 0));
  const e = We(),
    r = R(),
    s = tt(),
    n = (0, E().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(t, { keys: c });
      if (!l || typeof l != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const i = Object.entries(l).map(async ([d, h]) => {
        try {
          const f = await fetch(d, { method: "GET" });
          if (!f.ok)
            return {
              success: !1,
              key: h,
              status: f.status,
              error: `Download failed with status ${f.status}`,
            };
          const p = await f.blob();
          return { success: !0, key: h, blob: p, status: f.status };
        } catch (f) {
          return {
            success: !1,
            key: h,
            status: 503,
            error: f instanceof Error ? f.message : "Download failed",
          };
        }
      });
      return await Promise.all(i);
    };
  return ((Te.download = o), Te);
}
var ke = {},
  _n;
function Lo() {
  if (_n) return ke;
  ((_n = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.getMetadata = void 0));
  const e = We(),
    r = R(),
    s = tt(),
    n = (0, E().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "getMetadata" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (i) => {
          const a = await (0, e.invoke)(t, { key: i });
          return !a || typeof a != "object"
            ? { key: i, error: "Invalid response from functionKey" }
            : a;
        }),
      );
    };
  return ((ke.getMetadata = o), ke);
}
var gn;
function No() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = ko();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const s = Uo(),
          u = xo(),
          n = Lo();
        e.objectStore = {
          upload: r.upload,
          download: u.download,
          getMetadata: n.getMetadata,
          delete: s.deleteObjects,
        };
      })(It)),
    It
  );
}
var hn;
function Go() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(No(), e), r.__exportStar(vi(), e));
      })(Ct)),
    Ct
  );
}
var At = {},
  Ue = {},
  k = {},
  L = {},
  He = {},
  vn;
function Vo() {
  if (vn) return He;
  ((vn = 1), Object.defineProperty(He, "__esModule", { value: !0 }));
  const e = M();
  let r = class {
    constructor(u) {
      ((this._sdkKey = u),
        (this._rawValues = null),
        (this._values = null),
        (this._source = "Uninitialized"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        (this._warnings = new Set()));
    }
    reset() {
      ((this._values = null),
        (this._rawValues = null),
        (this._source = "Loading"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null));
    }
    finalize() {
      this._values || (this._source = "NoValues");
    }
    getValues() {
      return this._rawValues
        ? (0, e._typedJsonParse)(this._rawValues, "has_updates", "EvaluationStoreValues")
        : null;
    }
    setValues(u, n) {
      var o;
      if (!u) return !1;
      const t = (0, e._typedJsonParse)(u.data, "has_updates", "EvaluationResponse");
      return t == null
        ? !1
        : ((this._source = u.source),
          t?.has_updates !== !0 ||
            ((this._rawValues = u.data),
            (this._lcut = t.time),
            (this._receivedAt = u.receivedAt),
            (this._values = t),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(u.source, t)),
            u.source && t.user && this._setWarningState(n, t),
            e.SDKFlags.setFlags(this._sdkKey, (o = t.sdk_flags) !== null && o !== void 0 ? o : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(u) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.feature_gates,
        u,
      );
    }
    getConfig(u) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.dynamic_configs,
        u,
      );
    }
    getLayer(u) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.layer_configs,
        u,
      );
    }
    getParamStore(u) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.param_stores,
        u,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var u;
      return (u = this._values) === null || u === void 0 ? void 0 : u.exposures;
    }
    _extractBootstrapMetadata(u, n) {
      if (u !== "Bootstrap") return null;
      const o = {};
      return (
        n.user && (o.user = n.user),
        n.sdkInfo && (o.generatorSDKInfo = n.sdkInfo),
        (o.lcut = n.time),
        o
      );
    }
    _getDetailedStoreResult(u, n) {
      let o = null;
      return (
        u && (o = u[n] ? u[n] : u[(0, e._DJB2)(n)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(u, n) {
      var o, t;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((o = u.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== c &&
        ((!((t = u.customIDs) === null || t === void 0) && t.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const l = n.user;
        (0, e._getFullUserHash)(u) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const u = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (u.warnings = Array.from(this._warnings)), u);
    }
    _getDetails(u) {
      var n, o;
      const t = this.getCurrentSourceDetails();
      let c = t.reason;
      const l = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${u ? "Unrecognized" : "Recognized"}`));
      const i =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (i && (t.bootstrapMetadata = i), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((He.default = r), He);
}
var N = {},
  xe = {},
  pn;
function zo() {
  if (pn) return xe;
  ((pn = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe._resolveDeltasResponse = void 0));
  const e = M(),
    r = 2;
  function s(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const i = u(t, l),
      a = n(i),
      d = (0, e._DJB2Object)(
        {
          feature_gates: a.feature_gates,
          dynamic_configs: a.dynamic_configs,
          layer_configs: a.layer_configs,
        },
        r,
      );
    return d === l.checksumV2
      ? JSON.stringify(a)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: a,
          badFullResponse: l.deltas_full_response,
        };
  }
  xe._resolveDeltasResponse = s;
  function u(t, c) {
    return Object.assign(Object.assign(Object.assign({}, t), c), {
      feature_gates: Object.assign(Object.assign({}, t.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, t.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, t.dynamic_configs), c.dynamic_configs),
    });
  }
  function n(t) {
    const c = t;
    return (
      o(t.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      o(t.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      o(t.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function o(t, c) {
    t?.forEach((l) => {
      delete c[l];
    });
  }
  return xe;
}
var yn;
function pi() {
  if (yn) return N;
  yn = 1;
  var e =
    (N && N.__awaiter) ||
    function (n, o, t, c) {
      function l(i) {
        return i instanceof t
          ? i
          : new t(function (a) {
              a(i);
            });
      }
      return new (t || (t = Promise))(function (i, a) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            a(_);
          }
        }
        function h(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            a(_);
          }
        }
        function f(p) {
          p.done ? i(p.value) : l(p.value).then(d, h);
        }
        f((c = c.apply(n, o || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = M(),
    s = zo();
  class u extends r.NetworkCore {
    constructor(o, t) {
      super(o, t);
      const c = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new r.UrlConfiguration(
          r.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, t, c, l, i) {
      return e(this, void 0, void 0, function* () {
        var a, d, h, f, p, _;
        const g = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let v = {
          user: l,
          hash:
            (h =
              (d = (a = this._option) === null || a === void 0 ? void 0 : a.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g?.has_updates) {
          const y =
            g?.hash_used !==
            ((_ =
              (p = (f = this._option) === null || f === void 0 ? void 0 : f.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2");
          v = Object.assign(Object.assign({}, v), {
            sinceTime: i && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && i ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, v, c);
      });
    }
    _fetchEvaluations(o, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var i, a;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (i = d?.body) !== null && i !== void 0 ? i : null;
        if (
          t?.has_updates !== !0 ||
          ((a = d.body) === null || a === void 0 ? void 0 : a.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const h = (0, s._resolveDeltasResponse)(t, d.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              o,
              t,
              Object.assign(Object.assign(Object.assign({}, c), h), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((N.default = u), N);
}
var Le = {},
  mn;
function Wo() {
  if (mn) return Le;
  ((mn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le._makeParamStoreGetter = void 0));
  const e = M(),
    r = { disableExposureLog: !0 };
  function s(a) {
    return a == null || a.disableExposureLog === !1;
  }
  function u(a, d) {
    return d != null && !(0, e._isTypeMatch)(a, d);
  }
  function n(a, d) {
    return a.value;
  }
  function o(a, d, h) {
    return a.getFeatureGate(d.gate_name, s(h) ? void 0 : r).value ? d.pass_value : d.fail_value;
  }
  function t(a, d, h, f) {
    const _ = a.getDynamicConfig(d.config_name, s(f) ? void 0 : r).get(d.param_name);
    return u(_, h) ? h : _;
  }
  function c(a, d, h, f) {
    const _ = a.getExperiment(d.experiment_name, s(f) ? void 0 : r).get(d.param_name);
    return u(_, h) ? h : _;
  }
  function l(a, d, h, f) {
    const _ = a.getLayer(d.layer_name, s(f) ? void 0 : r).get(d.param_name);
    return u(_, h) ? h : _;
  }
  function i(a, d, h) {
    return (f, p) => {
      if (d == null) return p;
      const _ = d[f];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return n(_);
        case "gate":
          return o(a, _, h);
        case "dynamic_config":
          return t(a, _, p, h);
        case "experiment":
          return c(a, _, p, h);
        case "layer":
          return l(a, _, p, h);
        default:
          return p;
      }
    };
  }
  return ((Le._makeParamStoreGetter = i), Le);
}
var U = {},
  bn;
function Ko() {
  if (bn) return U;
  bn = 1;
  var e =
    (U && U.__awaiter) ||
    function (n, o, t, c) {
      function l(i) {
        return i instanceof t
          ? i
          : new t(function (a) {
              a(i);
            });
      }
      return new (t || (t = Promise))(function (i, a) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            a(_);
          }
        }
        function h(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            a(_);
          }
        }
        function f(p) {
          p.done ? i(p.value) : l(p.value).then(d, h);
        }
        f((c = c.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.StatsigEvaluationsDataAdapter = void 0));
  const r = M(),
    s = pi();
  let u = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, t, c) {
      (super.attach(o, t, c),
        c !== null && c instanceof s.default
          ? (this._network = c)
          : (this._network = new s.default(t ?? {})));
    }
    getDataAsync(o, t, c) {
      return this._getDataAsyncImpl(o, (0, r._normalizeUser)(t, this._options), c);
    }
    prefetchData(o, t) {
      return this._prefetchDataImpl(o, t);
    }
    setData(o) {
      const t = (0, r._typedJsonParse)(o, "has_updates", "data");
      t && "user" in t
        ? super.setData(o, t.user)
        : r.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(o, t) {
      super.setData(o, t);
    }
    _fetchFromNetwork(o, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var i;
        const a = yield (i = this._network) === null || i === void 0
          ? void 0
          : i.fetchEvaluations(this._getSdkKey(), o, c?.priority, t, l);
        return a ?? null;
      });
    }
    _getCacheKey(o) {
      var t;
      const c = (0, r._getStorageKey)(
        this._getSdkKey(),
        o,
        (t = this._options) === null || t === void 0 ? void 0 : t.customUserCacheKeyFunc,
      );
      return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(o, t) {
      return o.fullUserHash != null && o.fullUserHash === (0, r._getFullUserHash)(t);
    }
  };
  return ((U.StatsigEvaluationsDataAdapter = u), U);
}
var wn;
function Ho() {
  if (wn) return L;
  wn = 1;
  var e =
    (L && L.__awaiter) ||
    function (c, l, i, a) {
      function d(h) {
        return h instanceof i
          ? h
          : new i(function (f) {
              f(h);
            });
      }
      return new (i || (i = Promise))(function (h, f) {
        function p(v) {
          try {
            g(a.next(v));
          } catch (y) {
            f(y);
          }
        }
        function _(v) {
          try {
            g(a.throw(v));
          } catch (y) {
            f(y);
          }
        }
        function g(v) {
          v.done ? h(v.value) : d(v.value).then(p, _);
        }
        g((a = a.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(L, "__esModule", { value: !0 });
  const r = M(),
    s = Vo(),
    u = pi(),
    n = Wo(),
    o = Ko();
  let t = class Dt extends r.StatsigClientBase {
    static instance(l) {
      const i = (0, r._getStatsigGlobal)().instance(l);
      return i instanceof Dt
        ? i
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Dt(l ?? "", {}));
    }
    constructor(l, i, a = null) {
      var d, h;
      r.SDKType._setClientType(l, "javascript-client");
      const f = new u.default(a, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (d = a?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        f,
        a,
      ),
        (this.getFeatureGate = this._memoize(
          r.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          r.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          r.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getLayer = this._memoize(r.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          r.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new s.default(l)),
        (this._network = f),
        (this._user = this._configureUser(i, a)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (h = a?.plugins) !== null && h !== void 0 ? h : [];
      for (const _ of p) _.bind(this);
    }
    initializeSync(l) {
      var i;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((i = this._store.getWarnings()) !== null && i !== void 0 ? i : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, l));
    }
    initializeAsync(l) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(l)), this._initializePromise);
      });
    }
    updateUserSync(l, i) {
      const a = performance.now();
      try {
        return this._updateUserSyncImpl(l, i, a);
      } catch (d) {
        const h = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(h, a);
      }
    }
    _updateUserSyncImpl(l, i, a) {
      var d;
      const h = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && h.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = i?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && f?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - a,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          )
        : (this._runPostUpdate(f ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - a,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          ));
    }
    updateUserAsync(l, i) {
      return e(this, void 0, void 0, function* () {
        const a = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, i);
        } catch (d) {
          const h = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(h, a);
        }
      });
    }
    _updateUserAsyncImpl(l, i) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const a = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(a);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, a, i)),
          a !== this._user)
        )
          return (0, r.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let h = !1;
        (d != null &&
          (r.Diagnostics._markInitProcessStart(this._sdkKey),
          (h = this._store.setValues(d, this._user)),
          r.Diagnostics._markInitProcessEnd(this._sdkKey, { success: h })),
          this._finalizeUpdate(d),
          h ||
            (this._errorBoundary.attachErrorIfNoneExists(
              r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          r.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            h,
            this._store.getCurrentSourceDetails(),
          ));
        const f = r.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, r.createUpdateDetails)(
          h,
          this._store.getSource(),
          f,
          this._errorBoundary.getLastSeenErrorAndReset(),
          this._network.getLastUsedInitUrlAndReset(),
          this._store.getWarnings(),
        );
      });
    }
    getContext() {
      return {
        sdkKey: this._sdkKey,
        options: this._options,
        values: this._store.getValues(),
        user: JSON.parse(JSON.stringify(this._user)),
        errorBoundary: this._errorBoundary,
        session: r.StatsigSession.get(this._sdkKey),
        stableID: r.StableID.get(this._sdkKey),
        sdkInstanceID: this._sdkInstanceID,
      };
    }
    checkGate(l, i) {
      return this.getFeatureGate(l, i).value;
    }
    logEvent(l, i, a) {
      const d = typeof l == "string" ? { eventName: l, value: i, metadata: a } : l;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        ));
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(l) {
      return e(this, void 0, void 0, function* () {
        return (
          r.Storage.isReady() || (yield r.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, l)
        );
      });
    }
    _createErrorUpdateDetails(l, i) {
      var a;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - i,
        l,
        null,
        [...((a = this._store.getWarnings()) !== null && a !== void 0 ? a : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, i) {
      this.dataAdapter.getDataAsync(l, i, { priority: "low" }).catch((a) => {
        r.Log.error("An error occurred after update.", a);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, i) {
      var a;
      const d = (0, r._normalizeUser)(l, i),
        h = (a = d.customIDs) === null || a === void 0 ? void 0 : a.stableID;
      return (h && r.StableID.setOverride(h, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, i) {
      var a, d;
      const { result: h, details: f } = this._store.getGate(l),
        p = (0, r._makeFeatureGate)(l, f, h),
        _ =
          (d = (a = this.overrideAdapter) === null || a === void 0 ? void 0 : a.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(a, p, this._user, i),
        g = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(l, i) {
      var a, d;
      const { result: h, details: f } = this._store.getConfig(l),
        p = (0, r._makeDynamicConfig)(l, f, h),
        _ =
          (d =
            (a = this.overrideAdapter) === null || a === void 0
              ? void 0
              : a.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(a, p, this._user, i),
        g = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(l, i) {
      var a, d, h, f;
      const { result: p, details: _ } = this._store.getConfig(l),
        g = (0, r._makeExperiment)(l, _, p);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (d = (a = g.__evaluation) === null || a === void 0 ? void 0 : a.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const v =
          (f =
            (h = this.overrideAdapter) === null || h === void 0
              ? void 0
              : h.getExperimentOverride) === null || f === void 0
            ? void 0
            : f.call(h, g, this._user, i),
        y = v ?? g;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(l, i) {
      var a, d, h;
      const { result: f, details: p } = this._store.getLayer(l),
        _ = (0, r._makeLayer)(l, p, f),
        g =
          (d =
            (a = this.overrideAdapter) === null || a === void 0 ? void 0 : a.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(a, _, this._user, i);
      i?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const v = (0, r._mergeOverride)(
        _,
        g,
        (h = g?.__value) !== null && h !== void 0 ? h : _.__value,
        (y) => {
          i?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, r._createLayerParameterExposure)(
                this._user,
                v,
                y,
                this._store.getExposureMapping(),
              ),
              i,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: v }), v);
    }
    _getParameterStoreImpl(l, i) {
      var a, d;
      const { result: h, details: f } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const p = {
          name: l,
          details: f,
          __configuration: h,
          get: (0, n._makeParamStoreGetter)(this, h, i),
        },
        _ =
          (d =
            (a = this.overrideAdapter) === null || a === void 0
              ? void 0
              : a.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(a, p, i);
      return (
        _ != null &&
          ((p.__configuration = _.config),
          (p.details = _.details),
          (p.get = (0, n._makeParamStoreGetter)(this, _.config, i))),
        p
      );
    }
  };
  return ((L.default = t), L);
}
var En;
function Jo() {
  return (
    En ||
      ((En = 1),
      (function (e) {
        var r =
            (k && k.__createBinding) ||
            (Object.create
              ? function (t, c, l, i) {
                  i === void 0 && (i = l);
                  var a = Object.getOwnPropertyDescriptor(c, l);
                  ((!a || ("get" in a ? !c.__esModule : a.writable || a.configurable)) &&
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(t, i, a));
                }
              : function (t, c, l, i) {
                  (i === void 0 && (i = l), (t[i] = c[l]));
                }),
          s =
            (k && k.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const u = M(),
          n = Ho();
        ((e.StatsigClient = n.default), s(M(), e));
        const o = Object.assign((0, u._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = o;
      })(k)),
    k
  );
}
var Ne = {},
  Ge = {},
  On;
function Qo() {
  if (On) return Ge;
  ((On = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.initFeatureFlags = void 0));
  const e = E(),
    r = R(),
    s = Xe(),
    u = 500,
    n = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((i) => typeof i == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (t(l), o("initFeatureFlags", { user: l.user }));
  return (
    (Ge.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      u,
      n,
      `Feature flags initialisation calls are rate limited at ${u}req/${n / 1e3}s`,
    )),
    Ge
  );
}
var Rn;
function Yo() {
  if (Rn) return Ne;
  ((Rn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.ForgeDataAdapter = void 0));
  const e = Qo();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(u, n, o) {
      var t;
      if (u) return u;
      this.environment = ((t = this.options) === null || t === void 0 ? void 0 : t.environment) || {
        tier: "development",
      };
      const c = { ...n, statsigEnvironment: this.environment },
        l = await (0, e.initFeatureFlags)({ user: c }),
        i = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = i), i);
    }
    getDataSync(u) {
      return this.cache;
    }
    async attach(u, n, o) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(u) {}
    async setDataLegacy(u) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Ne.ForgeDataAdapter = r), Ne);
}
var Mt = {},
  Sn;
function yi() {
  return (
    Sn ||
      ((Sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (s) {
            ((s.DEVELOPMENT = "DEVELOPMENT"),
              (s.STAGING = "STAGING"),
              (s.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var r;
        ((function (s) {
          s.USER_ACCESS = "USER_ACCESS";
        })(r || (r = {})),
          (function (s) {
            s.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Mt)),
    Mt
  );
}
var Ve = {},
  Pn;
function Xo() {
  if (Pn) return Ve;
  ((Pn = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.trackFeatureFlagEvent = void 0));
  const e = E(),
    r = R(),
    s = yi(),
    u = Xe(),
    n = 500,
    o = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (i) => {
      if (!i || !i.type || !i.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(i.type.toUpperCase() in s.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(i).some((a) => typeof a == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (i) => (c(i), t("trackFeatureFlagEvent", i));
  return (
    (Ve.trackFeatureFlagEvent = (0, u.withRateLimiter)(
      l,
      n,
      o,
      `Feature flags calls are rate limited at ${n}req/${o / 1e3}s`,
    )),
    Ve
  );
}
var Cn;
function Zo() {
  if (Cn) return Ue;
  ((Cn = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.ForgeFeatureFlags = void 0));
  const e = Jo(),
    r = Yo(),
    s = yi(),
    u = Xo();
  class n {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(t, c = {}) {
      var l;
      if (this.isInitialized()) return;
      this.dataAdapter = new r.ForgeDataAdapter();
      const i = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (l = i.environment) === null || l === void 0 ? void 0 : l.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(t), i)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(t) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(t, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(t, !0), this.client.checkGate(t, { disableExposureLog: !0 }));
    }
    async shutdown() {
      !this.isInitialized() ||
        !this.client ||
        (await this.client.shutdown(),
        this.dataAdapter && (await this.dataAdapter.shutdown()),
        (this.initialized = !1));
    }
    isInitialized() {
      return this.initialized;
    }
    convertUser(t) {
      return {
        userID: t.userId,
        custom: { ...(t.custom || {}), ...(t.attributes || {}) },
        customIDs: t.identifiers || {},
      };
    }
    sendCheckFlagEvent(t, c) {
      const l = {
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: c,
        },
      };
      (0, u.trackFeatureFlagEvent)(l);
    }
  }
  return ((Ue.ForgeFeatureFlags = n), Ue);
}
var In;
function $o() {
  return (
    In ||
      ((In = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Zo();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(At)),
    At
  );
}
var jn;
function es() {
  return (
    jn ||
      ((jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = S;
        var s = Mi();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          r.__exportStar(We(), e),
          r.__exportStar(Bi(), e),
          r.__exportStar(et(), e),
          r.__exportStar(ho(), e),
          r.__exportStar(po(), e),
          r.__exportStar(mo(), e),
          r.__exportStar(wo(), e),
          r.__exportStar(Eo(), e),
          r.__exportStar(So(), e),
          r.__exportStar(jo(), e),
          (e.i18n = r.__importStar(Ao())),
          r.__exportStar(To(), e),
          r.__exportStar(Go(), e),
          r.__exportStar($o(), e));
      })(nt)),
    nt
  );
}
var mi = es();
const ts = () => {
    const [e, r] = ze.useState(null),
      [s, u] = ze.useState(!1),
      [n, o] = ze.useState(null),
      [t, c] = ze.useState(null),
      l = async (i) => {
        (u(!0), o(null), r(null), c(i));
        try {
          const a = await mi.invoke(i);
          (r(a || []), o(null));
        } catch (a) {
          const d = a instanceof Error ? a.message : "Unknown error occurred";
          (o(d), r(null));
        } finally {
          u(!1);
        }
      };
    return b.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        b.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Query Demo",
        }),
        b.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            b.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "Query Types:",
            }),
            b.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "Timeout Error:" }),
                    " Executes a query with SLEEP(10) to test timeout behavior",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "OOM Error:" }),
                    " Executes a complex query with subquery that may cause Out of Memory",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "Optimized Query:" }),
                    " Uses cached permissions for better performance",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "Cached Query:" }),
                    " Uses cached permissions with optimized query structure",
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            b.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Execute Queries",
            }),
            b.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Click on a button to execute the corresponding query and see the results or errors.",
            }),
            b.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                b.jsx("button", {
                  onClick: () => l("getTimeOutError"),
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getTimeOutError" ? "#FF8B00" : "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getTimeOutError" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getTimeOutError" ? "Loading..." : "⏱️ Timeout Error",
                }),
                b.jsx("button", {
                  onClick: () => l("getOOMError"),
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getOOMError" ? "#C43E37" : "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getOOMError" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getOOMError" ? "Loading..." : "💥 OOM Error",
                }),
                b.jsx("button", {
                  onClick: () => l("getQueryResult"),
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getQueryResult" ? "#36B37E" : "#0052CC",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getQueryResult" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getQueryResult" ? "Loading..." : "✅ Optimized Query",
                }),
                b.jsx("button", {
                  onClick: () => l("getQueryResultCache"),
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getQueryResultCache" ? "#36B37E" : "#0052CC",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getQueryResultCache" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getQueryResultCache" ? "Loading..." : "💾 Cached Query",
                }),
              ],
            }),
            n &&
              b.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [b.jsx("strong", { children: "Error:" }), " ", n],
              }),
            e &&
              !n &&
              b.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  b.jsx("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: "Query Results",
                  }),
                  b.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.length, " record(s)"],
                  }),
                  b.jsx("div", {
                    style: { maxHeight: "400px", overflowY: "auto" },
                    children: b.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        b.jsx("thead", {
                          children: b.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "ID",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Title",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Created At",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Document ID",
                              }),
                            ],
                          }),
                        }),
                        b.jsx("tbody", {
                          children: e.map((i, a) =>
                            b.jsxs(
                              "tr",
                              {
                                children: [
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(i.id).substring(0, 8), "..."],
                                  }),
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(i.userId).substring(0, 8), "..."],
                                  }),
                                  b.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children:
                                      i.title.length > 50
                                        ? `${i.title.substring(0, 50)}...`
                                        : i.title,
                                  }),
                                  b.jsx("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: new Date(i.createdAt).toLocaleString(),
                                  }),
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(i.documentId).substring(0, 8), "..."],
                                  }),
                                ],
                              },
                              a,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  rs = document.getElementById("root"),
  ns = bi.createRoot(rs),
  An = () => {
    ns.render(b.jsx(Pi.StrictMode, { children: b.jsx(ts, {}) }));
  };
mi.view.theme
  .enable()
  .then(() => {
    An();
  })
  .catch((e) => {
    (console.error(e.message), An());
  });
