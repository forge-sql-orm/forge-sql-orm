const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-CT8OtY7f.js", "./lodash-vendor-Cp37rRJM.js"]),
) => i.map((i) => d[i]);
import { r as Fn, c as Ei } from "./react-dom-vendor-BXC0oJZi.js";
import { g as Oi, r as Ri } from "./lodash-vendor-Cp37rRJM.js";
import { r as q } from "./client-core-vendor-BNfihzwH.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) u(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && u(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(n) {
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
    const o = a(n);
    fetch(n.href, o);
  }
})();
var it = { exports: {} },
  z = {};
var Lt;
function Pi() {
  if (Lt) return z;
  Lt = 1;
  var e = Fn(),
    r = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, i) {
    var s,
      d = {},
      v = null,
      f = null;
    (i !== void 0 && (v = "" + i),
      l.key !== void 0 && (v = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (s in l) u.call(l, s) && !o.hasOwnProperty(s) && (d[s] = l[s]);
    if (c && c.defaultProps) for (s in ((l = c.defaultProps), l)) d[s] === void 0 && (d[s] = l[s]);
    return { $$typeof: r, type: c, key: v, ref: f, props: d, _owner: n.current };
  }
  return ((z.Fragment = a), (z.jsx = t), (z.jsxs = t), z);
}
var Nt;
function Si() {
  return (Nt || ((Nt = 1), (it.exports = Pi())), it.exports);
}
var R = Si(),
  Ke = Fn(),
  ot = {},
  Ft = function (e, r) {
    return (
      (Ft =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, u) {
            a.__proto__ = u;
          }) ||
        function (a, u) {
          for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (a[n] = u[n]);
        }),
      Ft(e, r)
    );
  };
function Tn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ft(e, r);
  function a() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
}
var Ye = function () {
  return (
    (Ye =
      Object.assign ||
      function (r) {
        for (var a, u = 1, n = arguments.length; u < n; u++) {
          a = arguments[u];
          for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
        }
        return r;
      }),
    Ye.apply(this, arguments)
  );
};
function kn(e, r) {
  var a = {};
  for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && r.indexOf(u) < 0 && (a[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, u = Object.getOwnPropertySymbols(e); n < u.length; n++)
      r.indexOf(u[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, u[n]) &&
        (a[u[n]] = e[u[n]]);
  return a;
}
function Bn(e, r, a, u) {
  var n = arguments.length,
    o = n < 3 ? r : u === null ? (u = Object.getOwnPropertyDescriptor(r, a)) : u,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, r, a, u);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (o = (n < 3 ? t(o) : n > 3 ? t(r, a, o) : t(r, a)) || o);
  return (n > 3 && o && Object.defineProperty(r, a, o), o);
}
function Un(e, r) {
  return function (a, u) {
    r(a, u, e);
  };
}
function Ln(e, r, a, u, n, o) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var c = u.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      i = !r && e ? (u.static ? e : e.prototype) : null,
      s = r || (i ? Object.getOwnPropertyDescriptor(i, u.name) : {}),
      d,
      v = !1,
      f = a.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var _ in u) p[_] = _ === "access" ? {} : u[_];
    for (var _ in u.access) p.access[_] = u.access[_];
    p.addInitializer = function (g) {
      if (v) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(t(g || null));
    };
    var h = (0, a[f])(c === "accessor" ? { get: s.get, set: s.set } : s[l], p);
    if (c === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = t(h.get)) && (s.get = d),
        (d = t(h.set)) && (s.set = d),
        (d = t(h.init)) && n.unshift(d));
    } else (d = t(h)) && (c === "field" ? n.unshift(d) : (s[l] = d));
  }
  (i && Object.defineProperty(i, u.name, s), (v = !0));
}
function Nn(e, r, a) {
  for (var u = arguments.length > 2, n = 0; n < r.length; n++)
    a = u ? r[n].call(e, a) : r[n].call(e);
  return u ? a : void 0;
}
function Gn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Vn(e, r, a) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", r) : r })
  );
}
function xn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function zn(e, r, a, u) {
  function n(o) {
    return o instanceof a
      ? o
      : new a(function (t) {
          t(o);
        });
  }
  return new (a || (a = Promise))(function (o, t) {
    function c(s) {
      try {
        i(u.next(s));
      } catch (d) {
        t(d);
      }
    }
    function l(s) {
      try {
        i(u.throw(s));
      } catch (d) {
        t(d);
      }
    }
    function i(s) {
      s.done ? o(s.value) : n(s.value).then(c, l);
    }
    i((u = u.apply(e, r || [])).next());
  });
}
function Wn(e, r) {
  var a = {
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
    return function (s) {
      return l([i, s]);
    };
  }
  function l(i) {
    if (u) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), i[0] && (a = 0)), a; )
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
            return (a.label++, { value: i[1], done: !1 });
          case 5:
            (a.label++, (n = i[1]), (i = [0]));
            continue;
          case 7:
            ((i = a.ops.pop()), a.trys.pop());
            continue;
          default:
            if (
              ((o = a.trys), !(o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2))
            ) {
              a = 0;
              continue;
            }
            if (i[0] === 3 && (!o || (i[1] > o[0] && i[1] < o[3]))) {
              a.label = i[1];
              break;
            }
            if (i[0] === 6 && a.label < o[1]) {
              ((a.label = o[1]), (o = i));
              break;
            }
            if (o && a.label < o[2]) {
              ((a.label = o[2]), a.ops.push(i));
              break;
            }
            (o[2] && a.ops.pop(), a.trys.pop());
            continue;
        }
        i = r.call(e, a);
      } catch (s) {
        ((i = [6, s]), (n = 0));
      } finally {
        u = o = 0;
      }
    if (i[0] & 5) throw i[1];
    return { value: i[0] ? i[1] : void 0, done: !0 };
  }
}
var $e = Object.create
  ? function (e, r, a, u) {
      u === void 0 && (u = a);
      var n = Object.getOwnPropertyDescriptor(r, a);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[a];
          },
        }),
        Object.defineProperty(e, u, n));
    }
  : function (e, r, a, u) {
      (u === void 0 && (u = a), (e[u] = r[a]));
    };
function Kn(e, r) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(r, a) && $e(r, e, a);
}
function Xe(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    a = r && e[r],
    u = 0;
  if (a) return a.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && u >= e.length && (e = void 0), { value: e && e[u++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bt(e, r) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var u = a.call(e),
    n,
    o = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = u.next()).done; ) o.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (a = u.return) && a.call(u);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function Hn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Bt(arguments[r]));
  return e;
}
function Jn() {
  for (var e = 0, r = 0, a = arguments.length; r < a; r++) e += arguments[r].length;
  for (var u = Array(e), n = 0, r = 0; r < a; r++)
    for (var o = arguments[r], t = 0, c = o.length; t < c; t++, n++) u[n] = o[t];
  return u;
}
function Yn(e, r, a) {
  if (a || arguments.length === 2)
    for (var u = 0, n = r.length, o; u < n; u++)
      (o || !(u in r)) && (o || (o = Array.prototype.slice.call(r, 0, u)), (o[u] = r[u]));
  return e.concat(o || Array.prototype.slice.call(r));
}
function V(e) {
  return this instanceof V ? ((this.v = e), this) : new V(e);
}
function Xn(e, r, a) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = a.apply(e, r || []),
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
        return new Promise(function (h, g) {
          o.push([f, _, h, g]) > 1 || l(f, _);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function l(f, p) {
    try {
      i(u[f](p));
    } catch (_) {
      v(o[0][3], _);
    }
  }
  function i(f) {
    f.value instanceof V ? Promise.resolve(f.value.v).then(s, d) : v(o[0][2], f);
  }
  function s(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function v(f, p) {
    (f(p), o.shift(), o.length && l(o[0][0], o[0][1]));
  }
}
function Zn(e) {
  var r, a;
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
          return (a = !a) ? { value: V(e[n](t)), done: !1 } : o ? o(t) : t;
        }
      : o;
  }
}
function $n(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    a;
  return r
    ? r.call(e)
    : ((e = typeof Xe == "function" ? Xe(e) : e[Symbol.iterator]()),
      (a = {}),
      u("next"),
      u("throw"),
      u("return"),
      (a[Symbol.asyncIterator] = function () {
        return this;
      }),
      a);
  function u(o) {
    a[o] =
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
function Qn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var Ii = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Tt = function (e) {
    return (
      (Tt =
        Object.getOwnPropertyNames ||
        function (r) {
          var a = [];
          for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (a[a.length] = u);
          return a;
        }),
      Tt(e)
    );
  };
function ei(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var a = Tt(e), u = 0; u < a.length; u++) a[u] !== "default" && $e(r, e, a[u]);
  return (Ii(r, e), r);
}
function ti(e) {
  return e && e.__esModule ? e : { default: e };
}
function ri(e, r, a, u) {
  if (a === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !u : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? u : a === "a" ? u.call(e) : u ? u.value : r.get(e);
}
function ni(e, r, a, u, n) {
  if (u === "m") throw new TypeError("Private method is not writable");
  if (u === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (u === "a" ? n.call(e, a) : n ? (n.value = a) : r.set(e, a), a);
}
function ii(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function oi(e, r, a) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var u, n;
    if (a) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      u = r[Symbol.asyncDispose];
    }
    if (u === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((u = r[Symbol.dispose]), a && (n = u));
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
      e.stack.push({ value: r, dispose: u, async: a }));
  } else a && e.stack.push({ async: !0 });
  return r;
}
var Ci =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, a) {
        var u = new Error(a);
        return ((u.name = "SuppressedError"), (u.error = e), (u.suppressed = r), u);
      };
function si(e) {
  function r(o) {
    ((e.error = e.hasError ? new Ci(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var a,
    u = 0;
  function n() {
    for (; (a = e.stack.pop()); )
      try {
        if (!a.async && u === 1) return ((u = 0), e.stack.push(a), Promise.resolve().then(n));
        if (a.dispose) {
          var o = a.dispose.call(a.value);
          if (a.async)
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
function ai(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, u, n, o, t) {
        return u
          ? r
            ? ".jsx"
            : ".js"
          : n && (!o || !t)
            ? a
            : n + o + "." + t.toLowerCase() + "js";
      })
    : e;
}
const Ai = {
    __extends: Tn,
    __assign: Ye,
    __rest: kn,
    __decorate: Bn,
    __param: Un,
    __esDecorate: Ln,
    __runInitializers: Nn,
    __propKey: Gn,
    __setFunctionName: Vn,
    __metadata: xn,
    __awaiter: zn,
    __generator: Wn,
    __createBinding: $e,
    __exportStar: Kn,
    __values: Xe,
    __read: Bt,
    __spread: Hn,
    __spreadArrays: Jn,
    __spreadArray: Yn,
    __await: V,
    __asyncGenerator: Xn,
    __asyncDelegator: Zn,
    __asyncValues: $n,
    __makeTemplateObject: Qn,
    __importStar: ei,
    __importDefault: ti,
    __classPrivateFieldGet: ri,
    __classPrivateFieldSet: ni,
    __classPrivateFieldIn: ii,
    __addDisposableResource: oi,
    __disposeResources: si,
    __rewriteRelativeImportExtension: ai,
  },
  Mi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: oi,
        get __assign() {
          return Ye;
        },
        __asyncDelegator: Zn,
        __asyncGenerator: Xn,
        __asyncValues: $n,
        __await: V,
        __awaiter: zn,
        __classPrivateFieldGet: ri,
        __classPrivateFieldIn: ii,
        __classPrivateFieldSet: ni,
        __createBinding: $e,
        __decorate: Bn,
        __disposeResources: si,
        __esDecorate: Ln,
        __exportStar: Kn,
        __extends: Tn,
        __generator: Wn,
        __importDefault: ti,
        __importStar: ei,
        __makeTemplateObject: Qn,
        __metadata: xn,
        __param: Un,
        __propKey: Gn,
        __read: Bt,
        __rest: kn,
        __rewriteRelativeImportExtension: ai,
        __runInitializers: Nn,
        __setFunctionName: Vn,
        __spread: Hn,
        __spreadArray: Yn,
        __spreadArrays: Jn,
        __values: Xe,
        default: Ai,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = Oi(Mi);
var W = {},
  Gt;
function qi() {
  return (
    Gt ||
      ((Gt = 1),
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
var st = {},
  at = {},
  K = {},
  H = {},
  Vt;
function O() {
  if (Vt) return H;
  ((Vt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.BridgeAPIError = void 0));
  class e extends Error {}
  return ((H.BridgeAPIError = e), H);
}
var xt;
function w() {
  if (xt) return K;
  ((xt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
  const e = O();
  function r(u) {
    return !!u?.callBridge;
  }
  const a = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((K.getCallBridge = a), K);
}
var J = {},
  zt;
function Qe() {
  if (zt) return J;
  ((zt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.withRateLimiter = void 0));
  const e = O(),
    r = (a, u, n, o) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const i = Date.now();
        if ((i - t > n && ((t = i), (c = 0)), c >= u))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((c = c + 1), a(...l));
      };
    };
  return ((J.withRateLimiter = r), J);
}
var Wt;
function ji() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = w(),
          a = O(),
          u = Qe(),
          n = (0, r.getCallBridge)(),
          o = (l) => {
            if (l && Object.values(l).some((i) => typeof i == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, i) => {
            if (typeof l != "string") throw new a.BridgeAPIError("functionKey must be a string!");
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
      })(at)),
    at
  );
}
var Kt;
function We() {
  return (
    Kt ||
      ((Kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(ji(), e));
      })(st)),
    st
  );
}
var ut = {},
  Y = {},
  lt = {},
  Ht;
function ui() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = w(),
          a = O(),
          u = Qe(),
          n = 500,
          o = 25,
          t = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((v) => typeof v == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (d) => async (v) => {
            l(v);
            const f = { ...v, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await c("invoke", f),
              { success: _, payload: h, error: g } = p ?? {},
              y = { ...(_ ? h : g) };
            if (y && y.headers)
              for (const m in y.headers)
                Array.isArray(y.headers[m]) && (y.headers[m] = y.headers[m].join(","));
            return y;
          },
          s = (d) => {
            const v = i(d);
            return (0, u.withRateLimiter)(
              v,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${o}s`,
            );
          };
        e._invokeEndpointFn = s;
      })(lt)),
    lt
  );
}
var Jt;
function Di() {
  if (Jt) return Y;
  ((Jt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.invokeRemote = void 0));
  const e = ui(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((Y.invokeRemote = r), Y);
}
var X = {},
  Yt;
function Fi() {
  if (Yt) return X;
  ((Yt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = ui(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((X.invokeService = r), X);
}
var Xt;
function Ti() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Di(), e), r.__exportStar(Fi(), e));
      })(ut)),
    ut
  );
}
var ct = {},
  Z = {},
  $ = {},
  Zt;
function ki() {
  if (Zt) return $;
  ((Zt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.submit = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await a("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return (($.submit = u), $);
}
var Q = {},
  $t;
function Bi() {
  if ($t) return Q;
  (($t = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.close = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        if ((await a("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((Q.close = u), Q);
}
var ee = {},
  Qt;
function Ui() {
  if (Qt) return ee;
  ((Qt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.open = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async () => {
      try {
        if ((await a("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((ee.open = u), ee);
}
var te = {},
  er;
function Li() {
  if (er) return te;
  ((er = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.refresh = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await a("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((te.refresh = u), te);
}
var re = {},
  tr;
function Ni() {
  if (tr) return re;
  ((tr = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.createHistory = void 0));
  const r = (0, w().getCallBridge)(),
    a = async () => {
      const u = await r("createHistory");
      return (
        u.listen((n) => {
          u.location = n;
        }),
        u
      );
    };
  return ((re.createHistory = a), re);
}
var ne = {},
  dt = {},
  C = {},
  rr;
function li() {
  return (
    rr ||
      ((rr = 1),
      Object.defineProperty(C, "__esModule", { value: !0 }),
      (C.FORGE_SUPPORTED_LOCALE_CODES = C.I18N_BUNDLE_FOLDER_NAME = C.I18N_INFO_FILE_NAME = void 0),
      (C.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (C.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (C.FORGE_SUPPORTED_LOCALE_CODES = [
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
    C
  );
}
var D = {},
  nr;
function Gi() {
  if (nr) return D;
  ((nr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.TranslationsGetter = D.TranslationGetterError = void 0));
  const e = (u, n) => {
    u.includes(n) || u.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  D.TranslationGetterError = r;
  class a {
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
        l.filter((s) => t.includes(s))
      );
    }
  }
  return ((D.TranslationsGetter = a), D);
}
var ie = {},
  ft = {},
  ir;
function ci() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = P.__importDefault(Ri()),
          u = (o, t, c) => {
            const l = o[c];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = u;
        const n = (o, t) => {
          let c = o[t];
          if (!c) {
            const l = t.split(".");
            l.length > 1 && (c = (0, a.default)(o, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(ft)),
    ft
  );
}
var or;
function Vi() {
  if (or) return ie;
  ((or = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.Translator = void 0));
  const e = ci();
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
  sr;
function xi() {
  if (sr) return oe;
  ((sr = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = li(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    a = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    u = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, t) => {
        const [c] = t.split("-");
        return (o[c] || (o[c] = t), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (o) => {
      const t = o.replace("_", "-");
      return r.has(t) ? t : (u[t] ?? a[t] ?? null);
    };
  return ((oe.ensureLocale = n), oe);
}
var _t = {},
  ar;
function zi() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (i) => typeof i == "object" && i !== null && !Array.isArray(i),
          a = (i) => typeof i?.i18n == "string",
          u = (i) => i.startsWith("connect-"),
          n = (i) => i.startsWith("core:"),
          o = (i) => {
            const s = new Set(),
              d = (v, f) =>
                !r(v) || s.has(v)
                  ? []
                  : (s.add(v),
                    Object.entries(v).flatMap(([p, _]) => {
                      const h = [...f, p];
                      return a(_)
                        ? [{ propertyPath: h, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((g) => d(g, h))
                          : d(_, h);
                    }));
            return d(i, []);
          },
          t = (i) =>
            Object.entries(i).flatMap(([s, d]) =>
              !u(s) && !n(s) && d && Array.isArray(d) && d.length > 0 ? d.map((v) => [v, s]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (i) => {
          const s = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(i)) {
            const v = o(d[0]);
            for (const { key: f } of v) s.add(f);
          }
          return s.size > 0 ? Array.from(s) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (i) => {
          const s = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(i)) {
            const v = o(d[0]);
            for (const f of v) s.push({ moduleName: d[1], ...f });
          }
          return s;
        };
        e.extractI18nPropertiesFromModules = l;
      })(_t)),
    _t
  );
}
var ht = {},
  ur;
function Wi() {
  return (ur || ((ur = 1), Object.defineProperty(ht, "__esModule", { value: !0 })), ht);
}
var lr;
function di() {
  return (
    lr ||
      ((lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = P;
        (r.__exportStar(li(), e),
          r.__exportStar(Gi(), e),
          r.__exportStar(Vi(), e),
          r.__exportStar(xi(), e));
        var a = ci();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
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
      })(dt)),
    dt
  );
}
var cr;
function Ki() {
  if (cr) return ne;
  ((cr = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.getContext = void 0));
  const e = w(),
    r = di(),
    a = (0, e.getCallBridge)(),
    u = async () => {
      var n;
      const o = await a("getContext"),
        t = o?.locale;
      return (t && (o.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), o);
    };
  return ((ne.getContext = u), ne);
}
var se = {},
  dr;
function Hi() {
  if (dr) return se;
  ((dr = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.changeWindowTitle = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        await a("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((se.changeWindowTitle = u), se);
}
var ae = {},
  fr;
function Ji() {
  if (fr) return ae;
  ((fr = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.theme = void 0));
  const r = (0, w().getCallBridge)();
  return ((ae.theme = { enable: () => r("enableTheming") }), ae);
}
var ue = {},
  le = {},
  vt = {},
  F = {},
  _r;
function fi() {
  if (_r) return F;
  ((_r = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.blobToBase64 = F.base64ToBlob = void 0));
  const e = (a, u) => {
    if (!a) return null;
    const n = a.includes(";base64") ? a.split(",")[1] : a,
      o = atob(n),
      t = new Array(o.length);
    for (let l = 0; l < o.length; l++) t[l] = o.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: u });
  };
  F.base64ToBlob = e;
  const r = (a) =>
    new Promise((u, n) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        u(o.result);
      }),
        (o.onerror = n),
        o.readAsDataURL(a));
    });
  return ((F.blobToBase64 = r), F);
}
var hr;
function Yi() {
  return (
    hr ||
      ((hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = fi(),
          a = (i) => {
            if (
              typeof i != "object" ||
              i === null ||
              Object.prototype.toString.call(i) !== "[object Object]"
            )
              return !1;
            const s = Object.getPrototypeOf(i);
            if (s === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(s, "constructor") && s.constructor;
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
              return Promise.all(i.map((s) => (0, e.serialiseBlobsInPayload)(s)));
            if (i && a(i)) {
              const s = await Promise.all(
                Object.entries(i).map(async ([d, v]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(v),
                ]),
              );
              return Object.fromEntries(s);
            }
            return i;
          };
        e.serialiseBlobsInPayload = o;
        const t = (i) => {
          if (i && a(i) && "__isBlobData" in i) {
            const s = i;
            return n({ data: s.data, type: s.type });
          }
          if (Array.isArray(i)) return i.map((s) => (0, e.deserialiseBlobsInPayload)(s));
          if (i && a(i)) {
            const s = {};
            for (const [d, v] of Object.entries(i)) s[d] = (0, e.deserialiseBlobsInPayload)(v);
            return s;
          }
          return i;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (i) =>
          i instanceof Blob
            ? !0
            : Array.isArray(i)
              ? i.some((s) => (0, e.containsBlobs)(s))
              : i && a(i)
                ? Object.values(i).some((s) => (0, e.containsBlobs)(s))
                : !1;
        e.containsBlobs = c;
        const l = (i) =>
          i && a(i) && "__isBlobData" in i
            ? !0
            : Array.isArray(i)
              ? i.some((s) => (0, e.containsSerialisedBlobs)(s))
              : i && a(i)
                ? Object.values(i).some((s) => (0, e.containsSerialisedBlobs)(s))
                : !1;
        e.containsSerialisedBlobs = l;
      })(vt)),
    vt
  );
}
var vr;
function _i() {
  if (vr) return le;
  ((vr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.events = void 0));
  const e = w(),
    r = Yi(),
    a = (0, e.getCallBridge)(),
    u = (l) => (i) => {
      let s = i;
      return ((0, r.containsSerialisedBlobs)(i) && (s = (0, r.deserialiseBlobsInPayload)(i)), l(s));
    },
    n = async (l, i) => {
      let s = i;
      return (
        (0, r.containsBlobs)(i) && (s = await (0, r.serialiseBlobsInPayload)(i)),
        a("emit", { event: l, payload: s })
      );
    },
    o = (l, i) => a("on", { event: l, callback: u(i) }),
    t = async (l, i) => {
      let s = i;
      return (
        (0, r.containsBlobs)(i) && (s = await (0, r.serialiseBlobsInPayload)(i)),
        a("emitPublic", { event: l, payload: s })
      );
    },
    c = (l, i) => a("onPublic", { event: l, callback: u(i) });
  return ((le.events = { emit: n, on: o, emitPublic: t, onPublic: c }), le);
}
var gr;
function Xi() {
  if (gr) return ue;
  ((gr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = _i(),
    r = pi(),
    u = (0, w().getCallBridge)(),
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
const Zi = "modulepreload",
  $i = function (e, r) {
    return new URL(e, r).href;
  },
  pr = {},
  Qi = function (r, a, u) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      let i = function (s) {
        return Promise.all(
          s.map((d) =>
            Promise.resolve(d).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        l = c?.nonce || c?.getAttribute("nonce");
      n = i(
        a.map((s) => {
          if (((s = $i(s, u)), s in pr)) return;
          pr[s] = !0;
          const d = s.endsWith(".css"),
            v = d ? '[rel="stylesheet"]' : "";
          if (u)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === s && (!d || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${s}"]${v}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = d ? "stylesheet" : Zi),
            d || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = s),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            d)
          )
            return new Promise((p, _) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${s}`))));
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
  He = {},
  yr;
function hi() {
  if (yr) return He;
  ((yr = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.default = a));
  let e;
  const r = new Uint8Array(16);
  function a() {
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
  return He;
}
var L = {},
  fe = {},
  _e = {},
  mr;
function eo() {
  if (mr) return _e;
  ((mr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((_e.default = e), _e);
}
var br;
function et() {
  if (br) return fe;
  ((br = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = r(eo());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var u = a;
  return ((fe.default = u), fe);
}
var wr;
function tt() {
  if (wr) return L;
  ((wr = 1),
    Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.default = void 0),
    (L.unsafeStringify = u));
  var e = r(et());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const a = [];
  for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
  function u(t, c = 0) {
    return (
      a[t[c + 0]] +
      a[t[c + 1]] +
      a[t[c + 2]] +
      a[t[c + 3]] +
      "-" +
      a[t[c + 4]] +
      a[t[c + 5]] +
      "-" +
      a[t[c + 6]] +
      a[t[c + 7]] +
      "-" +
      a[t[c + 8]] +
      a[t[c + 9]] +
      "-" +
      a[t[c + 10]] +
      a[t[c + 11]] +
      a[t[c + 12]] +
      a[t[c + 13]] +
      a[t[c + 14]] +
      a[t[c + 15]]
    );
  }
  function n(t, c = 0) {
    const l = u(t, c);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var o = n;
  return ((L.default = o), L);
}
var Er;
function to() {
  if (Er) return de;
  ((Er = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = a(hi()),
    r = tt();
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  let u,
    n,
    o = 0,
    t = 0;
  function c(i, s, d) {
    let v = (s && d) || 0;
    const f = s || new Array(16);
    i = i || {};
    let p = i.node || u,
      _ = i.clockseq !== void 0 ? i.clockseq : n;
    if (p == null || _ == null) {
      const E = i.random || (i.rng || e.default)();
      (p == null && (p = u = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        _ == null && (_ = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let h = i.msecs !== void 0 ? i.msecs : Date.now(),
      g = i.nsecs !== void 0 ? i.nsecs : t + 1;
    const y = h - o + (g - t) / 1e4;
    if (
      (y < 0 && i.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || h > o) && i.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = h), (t = g), (n = _), (h += 122192928e5));
    const m = ((h & 268435455) * 1e4 + g) % 4294967296;
    ((f[v++] = (m >>> 24) & 255),
      (f[v++] = (m >>> 16) & 255),
      (f[v++] = (m >>> 8) & 255),
      (f[v++] = m & 255));
    const b = ((h / 4294967296) * 1e4) & 268435455;
    ((f[v++] = (b >>> 8) & 255),
      (f[v++] = b & 255),
      (f[v++] = ((b >>> 24) & 15) | 16),
      (f[v++] = (b >>> 16) & 255),
      (f[v++] = (_ >>> 8) | 128),
      (f[v++] = _ & 255));
    for (let E = 0; E < 6; ++E) f[v + E] = p[E];
    return s || (0, r.unsafeStringify)(f);
  }
  var l = c;
  return ((de.default = l), de);
}
var he = {},
  M = {},
  ve = {},
  Or;
function vi() {
  if (Or) return ve;
  ((Or = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = r(et());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
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
  var u = a;
  return ((ve.default = u), ve);
}
var Rr;
function gi() {
  if (Rr) return M;
  ((Rr = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.URL = M.DNS = void 0),
    (M.default = t));
  var e = tt(),
    r = a(vi());
  function a(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function u(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let i = 0; i < c.length; ++i) l.push(c.charCodeAt(i));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  M.DNS = n;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  M.URL = o;
  function t(c, l, i) {
    function s(d, v, f, p) {
      var _;
      if (
        (typeof d == "string" && (d = u(d)),
        typeof v == "string" && (v = (0, r.default)(v)),
        ((_ = v) === null || _ === void 0 ? void 0 : _.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let h = new Uint8Array(16 + d.length);
      if (
        (h.set(v),
        h.set(d, v.length),
        (h = i(h)),
        (h[6] = (h[6] & 15) | l),
        (h[8] = (h[8] & 63) | 128),
        f)
      ) {
        p = p || 0;
        for (let g = 0; g < 16; ++g) f[p + g] = h[g];
        return f;
      }
      return (0, e.unsafeStringify)(h);
    }
    try {
      s.name = c;
    } catch {}
    return ((s.DNS = n), (s.URL = o), s);
  }
  return M;
}
var ge = {},
  Pr;
function ro() {
  if (Pr) return ge;
  ((Pr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
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
      h = "0123456789abcdef";
    for (let g = 0; g < _; g += 8) {
      const y = (f[g >> 5] >>> (g % 32)) & 255,
        m = parseInt(h.charAt((y >>> 4) & 15) + h.charAt(y & 15), 16);
      p.push(m);
    }
    return p;
  }
  function a(f) {
    return (((f + 64) >>> 9) << 4) + 14 + 1;
  }
  function u(f, p) {
    ((f[p >> 5] |= 128 << (p % 32)), (f[a(p) - 1] = p));
    let _ = 1732584193,
      h = -271733879,
      g = -1732584194,
      y = 271733878;
    for (let m = 0; m < f.length; m += 16) {
      const b = _,
        E = h,
        I = g,
        x = y;
      ((_ = l(_, h, g, y, f[m], 7, -680876936)),
        (y = l(y, _, h, g, f[m + 1], 12, -389564586)),
        (g = l(g, y, _, h, f[m + 2], 17, 606105819)),
        (h = l(h, g, y, _, f[m + 3], 22, -1044525330)),
        (_ = l(_, h, g, y, f[m + 4], 7, -176418897)),
        (y = l(y, _, h, g, f[m + 5], 12, 1200080426)),
        (g = l(g, y, _, h, f[m + 6], 17, -1473231341)),
        (h = l(h, g, y, _, f[m + 7], 22, -45705983)),
        (_ = l(_, h, g, y, f[m + 8], 7, 1770035416)),
        (y = l(y, _, h, g, f[m + 9], 12, -1958414417)),
        (g = l(g, y, _, h, f[m + 10], 17, -42063)),
        (h = l(h, g, y, _, f[m + 11], 22, -1990404162)),
        (_ = l(_, h, g, y, f[m + 12], 7, 1804603682)),
        (y = l(y, _, h, g, f[m + 13], 12, -40341101)),
        (g = l(g, y, _, h, f[m + 14], 17, -1502002290)),
        (h = l(h, g, y, _, f[m + 15], 22, 1236535329)),
        (_ = i(_, h, g, y, f[m + 1], 5, -165796510)),
        (y = i(y, _, h, g, f[m + 6], 9, -1069501632)),
        (g = i(g, y, _, h, f[m + 11], 14, 643717713)),
        (h = i(h, g, y, _, f[m], 20, -373897302)),
        (_ = i(_, h, g, y, f[m + 5], 5, -701558691)),
        (y = i(y, _, h, g, f[m + 10], 9, 38016083)),
        (g = i(g, y, _, h, f[m + 15], 14, -660478335)),
        (h = i(h, g, y, _, f[m + 4], 20, -405537848)),
        (_ = i(_, h, g, y, f[m + 9], 5, 568446438)),
        (y = i(y, _, h, g, f[m + 14], 9, -1019803690)),
        (g = i(g, y, _, h, f[m + 3], 14, -187363961)),
        (h = i(h, g, y, _, f[m + 8], 20, 1163531501)),
        (_ = i(_, h, g, y, f[m + 13], 5, -1444681467)),
        (y = i(y, _, h, g, f[m + 2], 9, -51403784)),
        (g = i(g, y, _, h, f[m + 7], 14, 1735328473)),
        (h = i(h, g, y, _, f[m + 12], 20, -1926607734)),
        (_ = s(_, h, g, y, f[m + 5], 4, -378558)),
        (y = s(y, _, h, g, f[m + 8], 11, -2022574463)),
        (g = s(g, y, _, h, f[m + 11], 16, 1839030562)),
        (h = s(h, g, y, _, f[m + 14], 23, -35309556)),
        (_ = s(_, h, g, y, f[m + 1], 4, -1530992060)),
        (y = s(y, _, h, g, f[m + 4], 11, 1272893353)),
        (g = s(g, y, _, h, f[m + 7], 16, -155497632)),
        (h = s(h, g, y, _, f[m + 10], 23, -1094730640)),
        (_ = s(_, h, g, y, f[m + 13], 4, 681279174)),
        (y = s(y, _, h, g, f[m], 11, -358537222)),
        (g = s(g, y, _, h, f[m + 3], 16, -722521979)),
        (h = s(h, g, y, _, f[m + 6], 23, 76029189)),
        (_ = s(_, h, g, y, f[m + 9], 4, -640364487)),
        (y = s(y, _, h, g, f[m + 12], 11, -421815835)),
        (g = s(g, y, _, h, f[m + 15], 16, 530742520)),
        (h = s(h, g, y, _, f[m + 2], 23, -995338651)),
        (_ = d(_, h, g, y, f[m], 6, -198630844)),
        (y = d(y, _, h, g, f[m + 7], 10, 1126891415)),
        (g = d(g, y, _, h, f[m + 14], 15, -1416354905)),
        (h = d(h, g, y, _, f[m + 5], 21, -57434055)),
        (_ = d(_, h, g, y, f[m + 12], 6, 1700485571)),
        (y = d(y, _, h, g, f[m + 3], 10, -1894986606)),
        (g = d(g, y, _, h, f[m + 10], 15, -1051523)),
        (h = d(h, g, y, _, f[m + 1], 21, -2054922799)),
        (_ = d(_, h, g, y, f[m + 8], 6, 1873313359)),
        (y = d(y, _, h, g, f[m + 15], 10, -30611744)),
        (g = d(g, y, _, h, f[m + 6], 15, -1560198380)),
        (h = d(h, g, y, _, f[m + 13], 21, 1309151649)),
        (_ = d(_, h, g, y, f[m + 4], 6, -145523070)),
        (y = d(y, _, h, g, f[m + 11], 10, -1120210379)),
        (g = d(g, y, _, h, f[m + 2], 15, 718787259)),
        (h = d(h, g, y, _, f[m + 9], 21, -343485551)),
        (_ = o(_, b)),
        (h = o(h, E)),
        (g = o(g, I)),
        (y = o(y, x)));
    }
    return [_, h, g, y];
  }
  function n(f) {
    if (f.length === 0) return [];
    const p = f.length * 8,
      _ = new Uint32Array(a(p));
    for (let h = 0; h < p; h += 8) _[h >> 5] |= (f[h / 8] & 255) << (h % 32);
    return _;
  }
  function o(f, p) {
    const _ = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, _, h, g, y) {
    return o(t(o(o(p, f), o(h, y)), g), _);
  }
  function l(f, p, _, h, g, y, m) {
    return c((p & _) | (~p & h), f, p, g, y, m);
  }
  function i(f, p, _, h, g, y, m) {
    return c((p & h) | (_ & ~h), f, p, g, y, m);
  }
  function s(f, p, _, h, g, y, m) {
    return c(p ^ _ ^ h, f, p, g, y, m);
  }
  function d(f, p, _, h, g, y, m) {
    return c(_ ^ (p | ~h), f, p, g, y, m);
  }
  var v = e;
  return ((ge.default = v), ge);
}
var Sr;
function no() {
  if (Sr) return he;
  ((Sr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = a(gi()),
    r = a(ro());
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((he.default = n), he);
}
var pe = {},
  ye = {},
  Ir;
function io() {
  if (Ir) return ye;
  ((Ir = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ye.default = r), ye);
}
var Cr;
function oo() {
  if (Cr) return pe;
  ((Cr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = u(io()),
    r = u(hi()),
    a = tt();
  function u(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, l) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const i = t.random || (t.rng || r.default)();
    if (((i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), c)) {
      l = l || 0;
      for (let s = 0; s < 16; ++s) c[l + s] = i[s];
      return c;
    }
    return (0, a.unsafeStringify)(i);
  }
  var o = n;
  return ((pe.default = o), pe);
}
var me = {},
  be = {},
  Ar;
function so() {
  if (Ar) return be;
  ((Ar = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
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
  function a(n) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const s = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < s.length; ++d) n.push(s.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      l = Math.ceil(c / 16),
      i = new Array(l);
    for (let s = 0; s < l; ++s) {
      const d = new Uint32Array(16);
      for (let v = 0; v < 16; ++v)
        d[v] =
          (n[s * 64 + v * 4] << 24) |
          (n[s * 64 + v * 4 + 1] << 16) |
          (n[s * 64 + v * 4 + 2] << 8) |
          n[s * 64 + v * 4 + 3];
      i[s] = d;
    }
    ((i[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (i[l - 1][14] = Math.floor(i[l - 1][14])),
      (i[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let s = 0; s < l; ++s) {
      const d = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) d[g] = i[s][g];
      for (let g = 16; g < 80; ++g) d[g] = r(d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16], 1);
      let v = t[0],
        f = t[1],
        p = t[2],
        _ = t[3],
        h = t[4];
      for (let g = 0; g < 80; ++g) {
        const y = Math.floor(g / 20),
          m = (r(v, 5) + e(y, f, p, _) + h + o[y] + d[g]) >>> 0;
        ((h = _), (_ = p), (p = r(f, 30) >>> 0), (f = v), (v = m));
      }
      ((t[0] = (t[0] + v) >>> 0),
        (t[1] = (t[1] + f) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + _) >>> 0),
        (t[4] = (t[4] + h) >>> 0));
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
  var u = a;
  return ((be.default = u), be);
}
var Mr;
function ao() {
  if (Mr) return me;
  ((Mr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = a(gi()),
    r = a(so());
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((me.default = n), me);
}
var we = {},
  qr;
function uo() {
  if (qr) return we;
  ((qr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((we.default = e), we);
}
var Ee = {},
  jr;
function lo() {
  if (jr) return Ee;
  ((jr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = r(et());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var u = a;
  return ((Ee.default = u), Ee);
}
var Dr;
function co() {
  return (
    Dr ||
      ((Dr = 1),
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
              return a.default;
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
        var r = s(to()),
          a = s(no()),
          u = s(oo()),
          n = s(ao()),
          o = s(uo()),
          t = s(lo()),
          c = s(et()),
          l = s(tt()),
          i = s(vi());
        function s(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(gt)),
    gt
  );
}
var Fr;
function fo() {
  if (Fr) return ce;
  ((Fr = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.createAdfRendererIframeProps = void 0));
  const e = co(),
    r = async (a, u) => {
      const n = await Qi(
          () => import("./index-CT8OtY7f.js").then((s) => s.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = u || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        i = () => {
          var s, d, v, f, p, _, h;
          const g = document.getElementById(l),
            y = {
              type: "adf-document",
              document: (s = a.extension.macro) === null || s === void 0 ? void 0 : s.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: a.localId,
              isEditing:
                (v = (d = a.extension) === null || d === void 0 ? void 0 : d.isEditing) !== null &&
                v !== void 0
                  ? v
                  : !1,
              contentId:
                (_ =
                  (p = (f = a.extension) === null || f === void 0 ? void 0 : f.macro) === null ||
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
                var b;
                (b = m?.iFrameResizer) === null || b === void 0 || b.resize();
              },
            },
            g || "",
          ),
            (h = g?.contentWindow) === null || h === void 0 || h.postMessage(y, t));
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
  Tr;
function _o() {
  if (Tr) return Oe;
  ((Tr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.onClose = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        if ((await a("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((Oe.onClose = u), Oe);
}
var kr;
function pi() {
  if (kr) return Z;
  ((kr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.view = void 0));
  const e = ki(),
    r = Bi(),
    a = Ui(),
    u = Li(),
    n = Ni(),
    o = Ki(),
    t = Hi(),
    c = Ji(),
    l = Xi(),
    i = fo(),
    s = _o();
  return (
    (Z.view = {
      submit: e.submit,
      close: r.close,
      onClose: s.onClose,
      open: a.open,
      refresh: u.refresh,
      createHistory: n.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: i.createAdfRendererIframeProps,
    }),
    Z
  );
}
var Br;
function rt() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(pi(), e));
      })(ct)),
    ct
  );
}
var pt = {},
  Re = {},
  Ur;
function ho() {
  if (Ur) return Re;
  ((Ur = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.router = void 0));
  const r = (0, w().getCallBridge)(),
    a = async (t) => {
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
  return ((Re.router = { getUrl: a, navigate: u, open: n, reload: o }), Re);
}
var Lr;
function vo() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(ho(), e));
      })(pt)),
    pt
  );
}
var yt = {},
  Pe = {},
  Nr;
function go() {
  if (Nr) return Pe;
  ((Nr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.Modal = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
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
          (await a("openModal", {
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
  return ((Pe.Modal = n), Pe);
}
var Gr;
function po() {
  return (
    Gr ||
      ((Gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(go(), e));
      })(yt)),
    yt
  );
}
var S = {},
  T = {},
  Vr;
function yo() {
  if (Vr) return T;
  ((Vr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.productFetchApi = T.remoteFetchApi = void 0));
  const e = fi(),
    r = async (t, c = !1) => {
      const l = {};
      for (const [i, s] of t.entries())
        if (c ? i.startsWith("file") : i === "file") {
          const v = s.name,
            f = s.type;
          ((l[i] = await (0, e.blobToBase64)(s)), (l[`__${i}Name`] = v), (l[`__${i}Type`] = f));
        } else l[i] = s;
      return JSON.stringify(l);
    },
    a = (t) => {
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
        s = new Request("", { body: i, method: c?.method, headers: c?.headers }),
        d = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(d),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const c = async (l, i) => {
        const s = a(i),
          { body: d, headers: v, isMultipartFormData: f } = await u("remote", s),
          p = {
            remoteKey: l,
            fetchRequestInit: { ...s, body: d, headers: [...v.entries()] },
            isMultipartFormData: f,
          },
          {
            body: _,
            headers: h,
            statusText: g,
            status: y,
            isAttachment: m,
          } = await t("fetchRemote", p),
          b = m ? (0, e.base64ToBlob)(_, h["content-type"]) : _;
        return new Response(b || null, { headers: h, status: y, statusText: g });
      };
      return { requestRemote: (l, i) => c(l, i) };
    };
  T.remoteFetchApi = n;
  const o = (t) => {
    const c = async (l, i, s) => {
      const d = a(s),
        { body: v, headers: f, isMultipartFormData: p } = await u("product", d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: l,
          restPath: i,
          fetchRequestInit: { ...d, body: v, headers: [...f.entries()] },
          isMultipartFormData: p,
        },
        {
          body: h,
          headers: g,
          statusText: y,
          status: m,
          isAttachment: b,
        } = await t("fetchProduct", _),
        E = b ? (0, e.base64ToBlob)(h, g["content-type"]) : h;
      return new Response(E || null, { headers: g, status: m, statusText: y });
    };
    return {
      requestConfluence: (l, i) => c("confluence", l, i),
      requestJira: (l, i) => c("jira", l, i),
      requestBitbucket: (l, i) => c("bitbucket", l, i),
    };
  };
  return ((T.productFetchApi = o), T);
}
var xr;
function mo() {
  if (xr) return S;
  xr = 1;
  var e;
  (Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.requestRemote = S.requestBitbucket = S.requestJira = S.requestConfluence = void 0));
  const r = w(),
    a = yo();
  return (
    (e = (0, a.productFetchApi)((0, r.getCallBridge)())),
    (S.requestConfluence = e.requestConfluence),
    (S.requestJira = e.requestJira),
    (S.requestBitbucket = e.requestBitbucket),
    (S.requestRemote = (0, a.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    S
  );
}
var mt = {},
  Se = {},
  zr;
function bo() {
  if (zr) return Se;
  ((zr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.showFlag = void 0));
  const e = w(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = (n) => {
      var o;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = a("showFlag", { ...n, type: (o = n.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await t, a("closeFlag", { id: n.id })) };
    };
  return ((Se.showFlag = u), Se);
}
var Wr;
function wo() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = bo();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(mt)),
    mt
  );
}
var bt = {},
  Kr;
function Eo() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(_i(), e));
      })(bt)),
    bt
  );
}
var wt = {},
  Ie = {},
  Hr;
function Oo() {
  if (Hr) return Ie;
  ((Hr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.realtime = void 0));
  const r = (0, w().getCallBridge)(),
    a = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    u = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    o = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Ie.realtime = { publish: a, subscribe: u, publishGlobal: n, subscribeGlobal: o }), Ie);
}
var Et = {},
  Jr;
function Ro() {
  return (
    Jr ||
      ((Jr = 1),
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
      })(Et)),
    Et
  );
}
var Yr;
function Po() {
  return (
    Yr ||
      ((Yr = 1),
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
        var a = Ro();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return a.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return a.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return a.Bitbucket;
            },
          }));
      })(wt)),
    wt
  );
}
var Ot = {},
  Ce = {},
  Rt = {},
  Xr;
function So() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = w(),
          a = O(),
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
              throw new a.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(Rt)),
    Rt
  );
}
var Ae = {},
  Zr;
function Io() {
  if (Zr) return Ae;
  ((Zr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.isEnabled = void 0));
  const r = (0, w().getCallBridge)(),
    a = () => r("isRovoEnabled");
  return ((Ae.isEnabled = a), Ae);
}
var $r;
function Co() {
  if ($r) return Ce;
  (($r = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.rovo = void 0));
  const e = So(),
    r = Io();
  return ((Ce.rovo = { open: e.open, isEnabled: r.isEnabled }), Ce);
}
var Qr;
function Ao() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Co(), e));
      })(Ot)),
    Ot
  );
}
var A = {},
  en;
function Mo() {
  if (en) return A;
  ((en = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.createTranslationFunction = A.getTranslations = A.resetTranslationsCache = void 0));
  const e = di(),
    r = rt(),
    a = {
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
    u = new e.TranslationsGetter(a),
    n = () => {
      u.reset();
    };
  A.resetTranslationsCache = n;
  const o = async (c = null, l = { fallback: !0 }) => {
    let i = c;
    return (i || (i = (await r.view.getContext()).locale), await u.getTranslations(i, l));
  };
  A.getTranslations = o;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const i = new e.Translator(l, u);
    return (
      await i.init(),
      (s, d) => {
        var v, f;
        return (f = (v = i.translate(s)) !== null && v !== void 0 ? v : d) !== null && f !== void 0
          ? f
          : s;
      }
    );
  };
  return ((A.createTranslationFunction = t), A);
}
var Pt = {},
  Me = {},
  tn;
function qo() {
  if (tn) return Me;
  ((tn = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.permissions = void 0));
  const r = (0, w().getCallBridge)(),
    a = async (l) => r("__permission__egressGet", l),
    u = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    o = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (Me.permissions = {
      egress: { get: a, set: u, deleteDomain: n, deleteGroup: o },
      remote: { get: t, set: c },
    }),
    Me
  );
}
var k = {},
  St = {},
  It = {},
  qe = {},
  je = {},
  rn;
function Ut() {
  if (rn) return je;
  ((rn = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.parseUrl = void 0));
  function e(r) {
    var a, u;
    const n =
        (u = (a = r.match(/^(.*?:)/)) === null || a === void 0 ? void 0 : a[0]) !== null &&
        u !== void 0
          ? u
          : "https:",
      o = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = o.split("/")[0],
      c = o.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: c };
  }
  return ((je.parseUrl = e), je);
}
var Ct = {},
  nn;
function yi() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = Ut();
        function a(t) {
          const l = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${l}$`);
        }
        e.globToRegex = a;
        const u = (t) => {
          if (t?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            l = new Set(),
            i = [];
          return (
            t.forEach((s) => {
              const d = c.test(s) ? s : `https://${s}`,
                v = (0, r.parseUrl)(d);
              v.hostname.startsWith("*")
                ? (l.add(v.hostname.substring(2)), i.push(a(v.hostname)))
                : l.add(v.hostname);
            }),
            [...l].sort().reduce((s, d) => (i.some((v) => v.test(d)) || s.push(d), s), [])
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
              var s;
              if (
                ((s = i.category) === null || s === void 0 ? void 0 : s.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const d = t.installationConfig.find(
                    (v) => v.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return d?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            l = new Map();
          for (const i of c)
            (l.has(i.type) || l.set(i.type, i.addresses),
              l.set(i.type, [...l.get(i.type), ...i.addresses]));
          return [...l.entries()].map(([i, s]) => ({ type: i, addresses: [...new Set(s)] }));
        };
        e.getEgressesBasedOnToggles = o;
      })(Ct)),
    Ct
  );
}
var on;
function jo() {
  if (on) return qe;
  ((on = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe.EgressFilteringService = void 0));
  const e = Ut(),
    r = yi();
  class a {
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
  return ((qe.EgressFilteringService = a), qe);
}
var sn;
function Do() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(jo(), e), r.__exportStar(Ut(), e), r.__exportStar(yi(), e));
      })(It)),
    It
  );
}
var an;
function Fo() {
  return (
    an ||
      ((an = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Do(), e));
      })(St)),
    St
  );
}
var un;
function To() {
  if (un) return k;
  ((un = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.checkPermissions = k.createPermissionUtils = void 0));
  const e = Fo(),
    r = rt();
  function a(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const u = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function o(d) {
    if (!d) return null;
    const { scopes: v, external: f = {} } = d,
      p = Array.isArray(v) ? v : Object.keys(v || {});
    return {
      hasScope: (_) => p.includes(_),
      canFetchFrom: (_, h) => {
        var g;
        const y = (g = f.fetch) === null || g === void 0 ? void 0 : g[_];
        if (!y?.length) return !1;
        const m = y.map(a).filter((I) => I.length > 0);
        if (m.length === 0) return !1;
        const b = new e.EgressFilteringService(m);
        return _ === "client" ? b.isValidUrlCSP(h) : b.isValidUrl(h);
      },
      canLoadResource: (_, h) => {
        const g = f[_];
        if (!g?.length) return !1;
        const y = g.map(a).filter((E) => E.length > 0);
        return y.length === 0 ? !1 : new e.EgressFilteringService(y).isValidUrlCSP(h);
      },
      getScopes: () => p,
      getExternalPermissions: () => f,
      hasAnyPermissions: () => p.length > 0 || Object.keys(f).length > 0,
    };
  }
  k.createPermissionUtils = o;
  function t(d, v) {
    if (!d?.length) return;
    const f = d.filter((p) => !v.hasScope(p));
    return f.length > 0 ? f : void 0;
  }
  function c(d, v) {
    if (!d?.fetch) return;
    const f = {};
    return (
      n.forEach((p) => {
        var _;
        const h = (_ = d.fetch) === null || _ === void 0 ? void 0 : _[p];
        if (h?.length) {
          const g = h.filter((y) => !v.canFetchFrom(p, y));
          g.length > 0 && (f[p] = g);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function l(d, v) {
    const f = {};
    return (
      u.forEach((p) => {
        const _ = d?.[p];
        if (_?.length) {
          const h = _.filter((g) => !v.canLoadResource(p, g));
          h.length > 0 && (f[p] = h);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function i(d, v) {
    if (!d) return;
    const f = c(d, v),
      p = l(d, v);
    if (!f && !p) return;
    const _ = {};
    return (f && (_.fetch = f), p && Object.assign(_, p), _);
  }
  async function s(d, v) {
    var f;
    if (!d) return { granted: !1, missing: null };
    if (!(!((f = d.scopes) === null || f === void 0) && f.length) && !d.external)
      return { granted: !0, missing: null };
    let p = v;
    p || (p = (await r.view.getContext()).permissions);
    const _ = o(p);
    if (!_) return { granted: !1, missing: null };
    const h = {};
    let g = !0;
    const y = t(d.scopes, _);
    y && ((h.scopes = y), (g = !1));
    const m = i(d.external, _);
    return (m && ((h.external = m), (g = !1)), { granted: g, missing: g ? null : h });
  }
  return ((k.checkPermissions = s), k);
}
var ln;
function ko() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(qo(), e), r.__exportStar(To(), e));
      })(Pt)),
    Pt
  );
}
var At = {},
  Mt = {},
  qt = {},
  De = {},
  Fe = {},
  cn;
function mi() {
  return (
    cn ||
      ((cn = 1),
      Object.defineProperty(Fe, "__esModule", { value: !0 }),
      (Fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Fe
  );
}
var dn;
function nt() {
  if (dn) return De;
  ((dn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = rt(),
    a = mi(),
    u = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(a.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((De.checkRestrictedEnvironment = u), De);
}
var fn;
function Bo() {
  return (
    fn ||
      ((fn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = We(),
          a = O(),
          u = nt(),
          o = (0, w().getCallBridge)(),
          t = (s, d) => {
            const v = atob(s),
              f = new Array(v.length);
            for (let _ = 0; _ < v.length; _++) f[_] = v.charCodeAt(_);
            const p = new Uint8Array(f);
            return new Blob([p], { type: d || "application/octet-stream" });
          },
          c = async (s) => {
            const d = s.size,
              v = await s.arrayBuffer(),
              f = await crypto.subtle.digest("SHA-256", v),
              p = new Uint8Array(f),
              _ = btoa(String.fromCharCode(...p));
            return { length: d, checksum: _, checksumType: "SHA256" };
          },
          l = async ({ functionKey: s, objects: d }) => {
            if (!s || s.length === 0)
              throw new a.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new a.BridgeAPIError("objects array is required and must not be empty");
            const v = d.map((y, m) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new a.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(y.data, y.mimeType);
                } catch {
                  throw new a.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              f = await Promise.all(v.map((y) => c(y))),
              p = await (0, r.invoke)(s, { allObjectMetadata: f });
            if (!p || typeof p != "object")
              throw new a.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              h = new Map();
            return (
              v.forEach((y, m) => {
                const b = f[m];
                (_.set(b.checksum, y), h.set(b.checksum, m));
              }),
              Object.entries(p).map(([y, m]) => {
                const { key: b, checksum: E } = m,
                  I = _.get(E),
                  x = h.get(E);
                return x === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: b,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : I
                    ? {
                        promise: (async () => {
                          try {
                            const j = await fetch(y, {
                              method: "PUT",
                              body: I,
                              headers: {
                                "Content-Type": I.type || "application/octet-stream",
                                "Content-Length": I.size.toString(),
                              },
                            });
                            return {
                              success: j.ok,
                              key: b,
                              status: j.status,
                              error: j.ok ? void 0 : `Upload failed with status ${j.status}`,
                            };
                          } catch (j) {
                            return {
                              success: !1,
                              key: b,
                              status: 503,
                              error: j instanceof Error ? j.message : "Upload failed",
                            };
                          }
                        })(),
                        index: x,
                        objectType: I.type,
                        objectSize: I.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: b,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: x,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const i = async ({ functionKey: s, objects: d }) => {
          (await (0, u.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const v = await (0, e.createUploadPromises)({ functionKey: s, objects: d });
          return await Promise.all(v.map((p) => p.promise));
        };
        e.upload = i;
      })(qt)),
    qt
  );
}
var Te = {},
  _n;
function Uo() {
  if (_n) return Te;
  ((_n = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.deleteObjects = void 0));
  const e = We(),
    r = O(),
    a = nt(),
    n = (0, w().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
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
  return ((Te.deleteObjects = o), Te);
}
var ke = {},
  hn;
function Lo() {
  if (hn) return ke;
  ((hn = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.download = void 0));
  const e = We(),
    r = O(),
    a = nt(),
    n = (0, w().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(t, { keys: c });
      if (!l || typeof l != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const i = Object.entries(l).map(async ([d, v]) => {
        try {
          const f = await fetch(d, { method: "GET" });
          if (!f.ok)
            return {
              success: !1,
              key: v,
              status: f.status,
              error: `Download failed with status ${f.status}`,
            };
          const p = await f.blob();
          return { success: !0, key: v, blob: p, status: f.status };
        } catch (f) {
          return {
            success: !1,
            key: v,
            status: 503,
            error: f instanceof Error ? f.message : "Download failed",
          };
        }
      });
      return await Promise.all(i);
    };
  return ((ke.download = o), ke);
}
var Be = {},
  vn;
function No() {
  if (vn) return Be;
  ((vn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.getMetadata = void 0));
  const e = We(),
    r = O(),
    a = nt(),
    n = (0, w().getCallBridge)(),
    o = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, a.checkRestrictedEnvironment)(),
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
          const s = await (0, e.invoke)(t, { key: i });
          return !s || typeof s != "object"
            ? { key: i, error: "Invalid response from functionKey" }
            : s;
        }),
      );
    };
  return ((Be.getMetadata = o), Be);
}
var gn;
function Go() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = Bo();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const a = Uo(),
          u = Lo(),
          n = No();
        e.objectStore = {
          upload: r.upload,
          download: u.download,
          getMetadata: n.getMetadata,
          delete: a.deleteObjects,
        };
      })(Mt)),
    Mt
  );
}
var pn;
function Vo() {
  return (
    pn ||
      ((pn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Go(), e), r.__exportStar(mi(), e));
      })(At)),
    At
  );
}
var jt = {},
  Ue = {},
  B = {},
  N = {},
  Je = {},
  yn;
function xo() {
  if (yn) return Je;
  ((yn = 1), Object.defineProperty(Je, "__esModule", { value: !0 }));
  const e = q();
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
  return ((Je.default = r), Je);
}
var G = {},
  Le = {},
  mn;
function zo() {
  if (mn) return Le;
  ((mn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le._resolveDeltasResponse = void 0));
  const e = q(),
    r = 2;
  function a(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const i = u(t, l),
      s = n(i),
      d = (0, e._DJB2Object)(
        {
          feature_gates: s.feature_gates,
          dynamic_configs: s.dynamic_configs,
          layer_configs: s.layer_configs,
        },
        r,
      );
    return d === l.checksumV2
      ? JSON.stringify(s)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: s,
          badFullResponse: l.deltas_full_response,
        };
  }
  Le._resolveDeltasResponse = a;
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
  return Le;
}
var bn;
function bi() {
  if (bn) return G;
  bn = 1;
  var e =
    (G && G.__awaiter) ||
    function (n, o, t, c) {
      function l(i) {
        return i instanceof t
          ? i
          : new t(function (s) {
              s(i);
            });
      }
      return new (t || (t = Promise))(function (i, s) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            s(_);
          }
        }
        function v(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            s(_);
          }
        }
        function f(p) {
          p.done ? i(p.value) : l(p.value).then(d, v);
        }
        f((c = c.apply(n, o || [])).next());
      });
    };
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = q(),
    a = zo();
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
        var s, d, v, f, p, _;
        const h = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let g = {
          user: l,
          hash:
            (v =
              (d = (s = this._option) === null || s === void 0 ? void 0 : s.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const y =
            h?.hash_used !==
            ((_ =
              (p = (f = this._option) === null || f === void 0 ? void 0 : f.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2");
          g = Object.assign(Object.assign({}, g), {
            sinceTime: i && !y ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && i ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: y ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(o, h, g, c);
      });
    }
    _fetchEvaluations(o, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var i, s;
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
          ((s = d.body) === null || s === void 0 ? void 0 : s.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const v = (0, a._resolveDeltasResponse)(t, d.body);
        return typeof v == "string"
          ? v
          : this._fetchEvaluations(
              o,
              t,
              Object.assign(Object.assign(Object.assign({}, c), v), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((G.default = u), G);
}
var Ne = {},
  wn;
function Wo() {
  if (wn) return Ne;
  ((wn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne._makeParamStoreGetter = void 0));
  const e = q(),
    r = { disableExposureLog: !0 };
  function a(s) {
    return s == null || s.disableExposureLog === !1;
  }
  function u(s, d) {
    return d != null && !(0, e._isTypeMatch)(s, d);
  }
  function n(s, d) {
    return s.value;
  }
  function o(s, d, v) {
    return s.getFeatureGate(d.gate_name, a(v) ? void 0 : r).value ? d.pass_value : d.fail_value;
  }
  function t(s, d, v, f) {
    const _ = s.getDynamicConfig(d.config_name, a(f) ? void 0 : r).get(d.param_name);
    return u(_, v) ? v : _;
  }
  function c(s, d, v, f) {
    const _ = s.getExperiment(d.experiment_name, a(f) ? void 0 : r).get(d.param_name);
    return u(_, v) ? v : _;
  }
  function l(s, d, v, f) {
    const _ = s.getLayer(d.layer_name, a(f) ? void 0 : r).get(d.param_name);
    return u(_, v) ? v : _;
  }
  function i(s, d, v) {
    return (f, p) => {
      if (d == null) return p;
      const _ = d[f];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return n(_);
        case "gate":
          return o(s, _, v);
        case "dynamic_config":
          return t(s, _, p, v);
        case "experiment":
          return c(s, _, p, v);
        case "layer":
          return l(s, _, p, v);
        default:
          return p;
      }
    };
  }
  return ((Ne._makeParamStoreGetter = i), Ne);
}
var U = {},
  En;
function Ko() {
  if (En) return U;
  En = 1;
  var e =
    (U && U.__awaiter) ||
    function (n, o, t, c) {
      function l(i) {
        return i instanceof t
          ? i
          : new t(function (s) {
              s(i);
            });
      }
      return new (t || (t = Promise))(function (i, s) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            s(_);
          }
        }
        function v(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            s(_);
          }
        }
        function f(p) {
          p.done ? i(p.value) : l(p.value).then(d, v);
        }
        f((c = c.apply(n, o || [])).next());
      });
    };
  (Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.StatsigEvaluationsDataAdapter = void 0));
  const r = q(),
    a = bi();
  let u = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, t, c) {
      (super.attach(o, t, c),
        c !== null && c instanceof a.default
          ? (this._network = c)
          : (this._network = new a.default(t ?? {})));
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
        const s = yield (i = this._network) === null || i === void 0
          ? void 0
          : i.fetchEvaluations(this._getSdkKey(), o, c?.priority, t, l);
        return s ?? null;
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
var On;
function Ho() {
  if (On) return N;
  On = 1;
  var e =
    (N && N.__awaiter) ||
    function (c, l, i, s) {
      function d(v) {
        return v instanceof i
          ? v
          : new i(function (f) {
              f(v);
            });
      }
      return new (i || (i = Promise))(function (v, f) {
        function p(g) {
          try {
            h(s.next(g));
          } catch (y) {
            f(y);
          }
        }
        function _(g) {
          try {
            h(s.throw(g));
          } catch (y) {
            f(y);
          }
        }
        function h(g) {
          g.done ? v(g.value) : d(g.value).then(p, _);
        }
        h((s = s.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = q(),
    a = xo(),
    u = bi(),
    n = Wo(),
    o = Ko();
  let t = class kt extends r.StatsigClientBase {
    static instance(l) {
      const i = (0, r._getStatsigGlobal)().instance(l);
      return i instanceof kt
        ? i
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new kt(l ?? "", {}));
    }
    constructor(l, i, s = null) {
      var d, v;
      r.SDKType._setClientType(l, "javascript-client");
      const f = new u.default(s, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (d = s?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        f,
        s,
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
        (this._store = new a.default(l)),
        (this._network = f),
        (this._user = this._configureUser(i, s)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (v = s?.plugins) !== null && v !== void 0 ? v : [];
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
      const s = performance.now();
      try {
        return this._updateUserSyncImpl(l, i, s);
      } catch (d) {
        const v = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(v, s);
      }
    }
    _updateUserSyncImpl(l, i, s) {
      var d;
      const v = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && v.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = i?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && f?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - s,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            v,
          )
        : (this._runPostUpdate(f ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - s,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            v,
          ));
    }
    updateUserAsync(l, i) {
      return e(this, void 0, void 0, function* () {
        const s = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, i);
        } catch (d) {
          const v = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(v, s);
        }
      });
    }
    _updateUserAsyncImpl(l, i) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const s = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(s);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, s, i)),
          s !== this._user)
        )
          return (0, r.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let v = !1;
        (d != null &&
          (r.Diagnostics._markInitProcessStart(this._sdkKey),
          (v = this._store.setValues(d, this._user)),
          r.Diagnostics._markInitProcessEnd(this._sdkKey, { success: v })),
          this._finalizeUpdate(d),
          v ||
            (this._errorBoundary.attachErrorIfNoneExists(
              r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          r.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            v,
            this._store.getCurrentSourceDetails(),
          ));
        const f = r.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, r.createUpdateDetails)(
          v,
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
    logEvent(l, i, s) {
      const d = typeof l == "string" ? { eventName: l, value: i, metadata: s } : l;
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
      var s;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - i,
        l,
        null,
        [...((s = this._store.getWarnings()) !== null && s !== void 0 ? s : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, i) {
      this.dataAdapter.getDataAsync(l, i, { priority: "low" }).catch((s) => {
        r.Log.error("An error occurred after update.", s);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, i) {
      var s;
      const d = (0, r._normalizeUser)(l, i),
        v = (s = d.customIDs) === null || s === void 0 ? void 0 : s.stableID;
      return (v && r.StableID.setOverride(v, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, i) {
      var s, d;
      const { result: v, details: f } = this._store.getGate(l),
        p = (0, r._makeFeatureGate)(l, f, v),
        _ =
          (d = (s = this.overrideAdapter) === null || s === void 0 ? void 0 : s.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(s, p, this._user, i),
        h = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(l, i) {
      var s, d;
      const { result: v, details: f } = this._store.getConfig(l),
        p = (0, r._makeDynamicConfig)(l, f, v),
        _ =
          (d =
            (s = this.overrideAdapter) === null || s === void 0
              ? void 0
              : s.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(s, p, this._user, i),
        h = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          i,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(l, i) {
      var s, d, v, f;
      const { result: p, details: _ } = this._store.getConfig(l),
        h = (0, r._makeExperiment)(l, _, p);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (d = (s = h.__evaluation) === null || s === void 0 ? void 0 : s.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const g =
          (f =
            (v = this.overrideAdapter) === null || v === void 0
              ? void 0
              : v.getExperimentOverride) === null || f === void 0
            ? void 0
            : f.call(v, h, this._user, i),
        y = g ?? h;
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
      var s, d, v;
      const { result: f, details: p } = this._store.getLayer(l),
        _ = (0, r._makeLayer)(l, p, f),
        h =
          (d =
            (s = this.overrideAdapter) === null || s === void 0 ? void 0 : s.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(s, _, this._user, i);
      i?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const g = (0, r._mergeOverride)(
        _,
        h,
        (v = h?.__value) !== null && v !== void 0 ? v : _.__value,
        (y) => {
          i?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, r._createLayerParameterExposure)(
                this._user,
                g,
                y,
                this._store.getExposureMapping(),
              ),
              i,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: g }), g);
    }
    _getParameterStoreImpl(l, i) {
      var s, d;
      const { result: v, details: f } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const p = {
          name: l,
          details: f,
          __configuration: v,
          get: (0, n._makeParamStoreGetter)(this, v, i),
        },
        _ =
          (d =
            (s = this.overrideAdapter) === null || s === void 0
              ? void 0
              : s.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(s, p, i);
      return (
        _ != null &&
          ((p.__configuration = _.config),
          (p.details = _.details),
          (p.get = (0, n._makeParamStoreGetter)(this, _.config, i))),
        p
      );
    }
  };
  return ((N.default = t), N);
}
var Rn;
function Jo() {
  return (
    Rn ||
      ((Rn = 1),
      (function (e) {
        var r =
            (B && B.__createBinding) ||
            (Object.create
              ? function (t, c, l, i) {
                  i === void 0 && (i = l);
                  var s = Object.getOwnPropertyDescriptor(c, l);
                  ((!s || ("get" in s ? !c.__esModule : s.writable || s.configurable)) &&
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(t, i, s));
                }
              : function (t, c, l, i) {
                  (i === void 0 && (i = l), (t[i] = c[l]));
                }),
          a =
            (B && B.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const u = q(),
          n = Ho();
        ((e.StatsigClient = n.default), a(q(), e));
        const o = Object.assign((0, u._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = o;
      })(B)),
    B
  );
}
var Ge = {},
  Ve = {},
  Pn;
function Yo() {
  if (Pn) return Ve;
  ((Pn = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.initFeatureFlags = void 0));
  const e = w(),
    r = O(),
    a = Qe(),
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
    (Ve.initFeatureFlags = (0, a.withRateLimiter)(
      c,
      u,
      n,
      `Feature flags initialisation calls are rate limited at ${u}req/${n / 1e3}s`,
    )),
    Ve
  );
}
var Sn;
function Xo() {
  if (Sn) return Ge;
  ((Sn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.ForgeDataAdapter = void 0));
  const e = Yo();
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
  return ((Ge.ForgeDataAdapter = r), Ge);
}
var Dt = {},
  In;
function wi() {
  return (
    In ||
      ((In = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (a) {
            ((a.DEVELOPMENT = "DEVELOPMENT"),
              (a.STAGING = "STAGING"),
              (a.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var r;
        ((function (a) {
          a.USER_ACCESS = "USER_ACCESS";
        })(r || (r = {})),
          (function (a) {
            a.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Dt)),
    Dt
  );
}
var xe = {},
  Cn;
function Zo() {
  if (Cn) return xe;
  ((Cn = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.trackFeatureFlagEvent = void 0));
  const e = w(),
    r = O(),
    a = wi(),
    u = Qe(),
    n = 500,
    o = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (i) => {
      if (!i || !i.type || !i.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(i.type.toUpperCase() in a.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(i).some((s) => typeof s == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (i) => (c(i), t("trackFeatureFlagEvent", i));
  return (
    (xe.trackFeatureFlagEvent = (0, u.withRateLimiter)(
      l,
      n,
      o,
      `Feature flags calls are rate limited at ${n}req/${o / 1e3}s`,
    )),
    xe
  );
}
var An;
function $o() {
  if (An) return Ue;
  ((An = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.ForgeFeatureFlags = void 0));
  const e = Jo(),
    r = Xo(),
    a = wi(),
    u = Zo();
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
        type: a.FeatureFlagEventType.CHECKFLAG,
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
var Mn;
function Qo() {
  return (
    Mn ||
      ((Mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = $o();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(jt)),
    jt
  );
}
var qn;
function es() {
  return (
    qn ||
      ((qn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = P;
        var a = qi();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          r.__exportStar(We(), e),
          r.__exportStar(Ti(), e),
          r.__exportStar(rt(), e),
          r.__exportStar(vo(), e),
          r.__exportStar(po(), e),
          r.__exportStar(mo(), e),
          r.__exportStar(wo(), e),
          r.__exportStar(Eo(), e),
          r.__exportStar(Po(), e),
          r.__exportStar(Ao(), e),
          (e.i18n = r.__importStar(Mo())),
          r.__exportStar(ko(), e),
          r.__exportStar(Vo(), e),
          r.__exportStar(Qo(), e));
      })(ot)),
    ot
  );
}
var Ze = es();
async function ze(e, r, a) {
  await Ze.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: a,
    description: r,
    isAutoDismiss: !0,
  });
}
function ts(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function jn() {
  return R.jsx("div", {
    className: "loading-overlay",
    children: R.jsx("div", { className: "loading-spinner" }),
  });
}
function rs() {
  const [e, r] = Ke.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [a, u] = Ke.useState(!0),
    [n, o] = Ke.useState(!1);
  Ke.useEffect(() => {
    t();
  }, []);
  const t = async () => {
      try {
        const i = await Ze.invoke("getCheckList");
        r(i);
      } catch {
        await ze(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        u(!1);
      }
    },
    c = async (i) => {
      try {
        o(!0);
        const s = await Ze.invoke(i ? "updateWithOptimisticLocking" : "update", e);
        s.error
          ? s.concurrent
            ? (await ze(
                "Concurrent Modification Detected",
                `User ${s.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await t())
            : await ze(
                "Update Failed",
                s.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : s.data &&
            (r(s.data),
            await ze(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await ze(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        o(!1);
      }
    },
    l = (i) => {
      const s = [...JSON.parse(e.checkList)];
      ((s[i] = { ...s[i], done: !s[i].done }), r({ ...e, checkList: JSON.stringify(s) }));
    };
  return a
    ? R.jsx("div", { className: "checklist-container", children: R.jsx(jn, {}) })
    : R.jsxs("div", {
        className: "checklist-container",
        children: [
          n && R.jsx(jn, {}),
          R.jsxs("div", {
            className: "checklist-header",
            children: [
              R.jsx("h2", { children: "Issue Checklist" }),
              R.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", ts(e.updatedAt)],
              }),
            ],
          }),
          R.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((i, s) =>
              R.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    R.jsx("input", { type: "checkbox", checked: i.done, onChange: () => l(s) }),
                    R.jsx("span", { children: i.label }),
                  ],
                },
                s,
              ),
            ),
          }),
          R.jsxs("div", {
            className: "buttons",
            children: [
              R.jsx("button", { onClick: () => c(!0), children: "Update with Locking" }),
              R.jsx("button", { onClick: () => c(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const ns = document.getElementById("root"),
  is = Ei.createRoot(ns),
  Dn = () => {
    is.render(R.jsx(rs, {}));
  };
Ze.view.theme
  .enable()
  .then(() => {
    Dn();
  })
  .catch((e) => {
    (console.error(e.message), Dn());
  });
