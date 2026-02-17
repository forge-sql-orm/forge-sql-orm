const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-CT8OtY7f.js", "./lodash-vendor-Cp37rRJM.js"]),
) => i.map((i) => d[i]);
import { r as Dn, c as Oi } from "./react-dom-vendor-BXC0oJZi.js";
import { g as Si, r as Ri } from "./lodash-vendor-Cp37rRJM.js";
import { r as D } from "./client-core-vendor-BNfihzwH.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) u(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const t of i.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && u(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function u(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = a(n);
    fetch(n.href, i);
  }
})();
var it = { exports: {} },
  W = {};
var Lt;
function Pi() {
  if (Lt) return W;
  Lt = 1;
  var e = Dn(),
    r = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, s) {
    var o,
      d = {},
      h = null,
      f = null;
    (s !== void 0 && (h = "" + s),
      l.key !== void 0 && (h = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (o in l) u.call(l, o) && !i.hasOwnProperty(o) && (d[o] = l[o]);
    if (c && c.defaultProps) for (o in ((l = c.defaultProps), l)) d[o] === void 0 && (d[o] = l[o]);
    return { $$typeof: r, type: c, key: h, ref: f, props: d, _owner: n.current };
  }
  return ((W.Fragment = a), (W.jsx = t), (W.jsxs = t), W);
}
var xt;
function Ii() {
  return (xt || ((xt = 1), (it.exports = Pi())), it.exports);
}
var w = Ii(),
  A = Dn(),
  st = {},
  Tt = function (e, r) {
    return (
      (Tt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, u) {
            a.__proto__ = u;
          }) ||
        function (a, u) {
          for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (a[n] = u[n]);
        }),
      Tt(e, r)
    );
  };
function Bn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Tt(e, r);
  function a() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
}
var Xe = function () {
  return (
    (Xe =
      Object.assign ||
      function (r) {
        for (var a, u = 1, n = arguments.length; u < n; u++) {
          a = arguments[u];
          for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
        }
        return r;
      }),
    Xe.apply(this, arguments)
  );
};
function Un(e, r) {
  var a = {};
  for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && r.indexOf(u) < 0 && (a[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, u = Object.getOwnPropertySymbols(e); n < u.length; n++)
      r.indexOf(u[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, u[n]) &&
        (a[u[n]] = e[u[n]]);
  return a;
}
function kn(e, r, a, u) {
  var n = arguments.length,
    i = n < 3 ? r : u === null ? (u = Object.getOwnPropertyDescriptor(r, a)) : u,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, a, u);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (i = (n < 3 ? t(i) : n > 3 ? t(r, a, i) : t(r, a)) || i);
  return (n > 3 && i && Object.defineProperty(r, a, i), i);
}
function Nn(e, r) {
  return function (a, u) {
    r(a, u, e);
  };
}
function Ln(e, r, a, u, n, i) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var c = u.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !r && e ? (u.static ? e : e.prototype) : null,
      o = r || (s ? Object.getOwnPropertyDescriptor(s, u.name) : {}),
      d,
      h = !1,
      f = a.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var _ in u) p[_] = _ === "access" ? {} : u[_];
    for (var _ in u.access) p.access[_] = u.access[_];
    p.addInitializer = function (g) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(g || null));
    };
    var v = (0, a[f])(c === "accessor" ? { get: o.get, set: o.set } : o[l], p);
    if (c === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((d = t(v.get)) && (o.get = d),
        (d = t(v.set)) && (o.set = d),
        (d = t(v.init)) && n.unshift(d));
    } else (d = t(v)) && (c === "field" ? n.unshift(d) : (o[l] = d));
  }
  (s && Object.defineProperty(s, u.name, o), (h = !0));
}
function xn(e, r, a) {
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
function zn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Kn(e, r, a, u) {
  function n(i) {
    return i instanceof a
      ? i
      : new a(function (t) {
          t(i);
        });
  }
  return new (a || (a = Promise))(function (i, t) {
    function c(o) {
      try {
        s(u.next(o));
      } catch (d) {
        t(d);
      }
    }
    function l(o) {
      try {
        s(u.throw(o));
      } catch (d) {
        t(d);
      }
    }
    function s(o) {
      o.done ? i(o.value) : n(o.value).then(c, l);
    }
    s((u = u.apply(e, r || [])).next());
  });
}
function Wn(e, r) {
  var a = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    u,
    n,
    i,
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
  function c(s) {
    return function (o) {
      return l([s, o]);
    };
  }
  function l(s) {
    if (u) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), s[0] && (a = 0)), a; )
      try {
        if (
          ((u = 1),
          n &&
            (i =
              s[0] & 2 ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
            !(i = i.call(n, s[1])).done)
        )
          return i;
        switch (((n = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
          case 0:
          case 1:
            i = s;
            break;
          case 4:
            return (a.label++, { value: s[1], done: !1 });
          case 5:
            (a.label++, (n = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = a.ops.pop()), a.trys.pop());
            continue;
          default:
            if (
              ((i = a.trys), !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              a = 0;
              continue;
            }
            if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
              a.label = s[1];
              break;
            }
            if (s[0] === 6 && a.label < i[1]) {
              ((a.label = i[1]), (i = s));
              break;
            }
            if (i && a.label < i[2]) {
              ((a.label = i[2]), a.ops.push(s));
              break;
            }
            (i[2] && a.ops.pop(), a.trys.pop());
            continue;
        }
        s = r.call(e, a);
      } catch (o) {
        ((s = [6, o]), (n = 0));
      } finally {
        u = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var Qe = Object.create
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
function Hn(e, r) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(r, a) && Qe(r, e, a);
}
function Ze(e) {
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
function Ut(e, r) {
  var a = typeof Symbol == "function" && e[Symbol.iterator];
  if (!a) return e;
  var u = a.call(e),
    n,
    i = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = u.next()).done; ) i.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (a = u.return) && a.call(u);
    } finally {
      if (t) throw t.error;
    }
  }
  return i;
}
function Jn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Ut(arguments[r]));
  return e;
}
function Yn() {
  for (var e = 0, r = 0, a = arguments.length; r < a; r++) e += arguments[r].length;
  for (var u = Array(e), n = 0, r = 0; r < a; r++)
    for (var i = arguments[r], t = 0, c = i.length; t < c; t++, n++) u[n] = i[t];
  return u;
}
function Xn(e, r, a) {
  if (a || arguments.length === 2)
    for (var u = 0, n = r.length, i; u < n; u++)
      (i || !(u in r)) && (i || (i = Array.prototype.slice.call(r, 0, u)), (i[u] = r[u]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function K(e) {
  return this instanceof K ? ((this.v = e), this) : new K(e);
}
function Zn(e, r, a) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = a.apply(e, r || []),
    n,
    i = [];
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
        return new Promise(function (v, g) {
          i.push([f, _, v, g]) > 1 || l(f, _);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function l(f, p) {
    try {
      s(u[f](p));
    } catch (_) {
      h(i[0][3], _);
    }
  }
  function s(f) {
    f.value instanceof K ? Promise.resolve(f.value.v).then(o, d) : h(i[0][2], f);
  }
  function o(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function h(f, p) {
    (f(p), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function Qn(e) {
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
  function u(n, i) {
    r[n] = e[n]
      ? function (t) {
          return (a = !a) ? { value: K(e[n](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function $n(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    a;
  return r
    ? r.call(e)
    : ((e = typeof Ze == "function" ? Ze(e) : e[Symbol.iterator]()),
      (a = {}),
      u("next"),
      u("throw"),
      u("return"),
      (a[Symbol.asyncIterator] = function () {
        return this;
      }),
      a);
  function u(i) {
    a[i] =
      e[i] &&
      function (t) {
        return new Promise(function (c, l) {
          ((t = e[i](t)), n(c, l, t.done, t.value));
        });
      };
  }
  function n(i, t, c, l) {
    Promise.resolve(l).then(function (s) {
      i({ value: s, done: c });
    }, t);
  }
}
function ei(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var Ci = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Dt = function (e) {
    return (
      (Dt =
        Object.getOwnPropertyNames ||
        function (r) {
          var a = [];
          for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (a[a.length] = u);
          return a;
        }),
      Dt(e)
    );
  };
function ti(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var a = Dt(e), u = 0; u < a.length; u++) a[u] !== "default" && Qe(r, e, a[u]);
  return (Ci(r, e), r);
}
function ri(e) {
  return e && e.__esModule ? e : { default: e };
}
function ni(e, r, a, u) {
  if (a === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !u : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? u : a === "a" ? u.call(e) : u ? u.value : r.get(e);
}
function ii(e, r, a, u, n) {
  if (u === "m") throw new TypeError("Private method is not writable");
  if (u === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (u === "a" ? n.call(e, a) : n ? (n.value = a) : r.set(e, a), a);
}
function si(e, r) {
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
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: r, dispose: u, async: a }));
  } else a && e.stack.push({ async: !0 });
  return r;
}
var Ai =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, a) {
        var u = new Error(a);
        return ((u.name = "SuppressedError"), (u.error = e), (u.suppressed = r), u);
      };
function ai(e) {
  function r(i) {
    ((e.error = e.hasError ? new Ai(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var a,
    u = 0;
  function n() {
    for (; (a = e.stack.pop()); )
      try {
        if (!a.async && u === 1) return ((u = 0), e.stack.push(a), Promise.resolve().then(n));
        if (a.dispose) {
          var i = a.dispose.call(a.value);
          if (a.async)
            return (
              (u |= 2),
              Promise.resolve(i).then(n, function (t) {
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
function ui(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (a, u, n, i, t) {
        return u
          ? r
            ? ".jsx"
            : ".js"
          : n && (!i || !t)
            ? a
            : n + i + "." + t.toLowerCase() + "js";
      })
    : e;
}
const ji = {
    __extends: Bn,
    __assign: Xe,
    __rest: Un,
    __decorate: kn,
    __param: Nn,
    __esDecorate: Ln,
    __runInitializers: xn,
    __propKey: Gn,
    __setFunctionName: Vn,
    __metadata: zn,
    __awaiter: Kn,
    __generator: Wn,
    __createBinding: Qe,
    __exportStar: Hn,
    __values: Ze,
    __read: Ut,
    __spread: Jn,
    __spreadArrays: Yn,
    __spreadArray: Xn,
    __await: K,
    __asyncGenerator: Zn,
    __asyncDelegator: Qn,
    __asyncValues: $n,
    __makeTemplateObject: ei,
    __importStar: ti,
    __importDefault: ri,
    __classPrivateFieldGet: ni,
    __classPrivateFieldSet: ii,
    __classPrivateFieldIn: si,
    __addDisposableResource: oi,
    __disposeResources: ai,
    __rewriteRelativeImportExtension: ui,
  },
  qi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: oi,
        get __assign() {
          return Xe;
        },
        __asyncDelegator: Qn,
        __asyncGenerator: Zn,
        __asyncValues: $n,
        __await: K,
        __awaiter: Kn,
        __classPrivateFieldGet: ni,
        __classPrivateFieldIn: si,
        __classPrivateFieldSet: ii,
        __createBinding: Qe,
        __decorate: kn,
        __disposeResources: ai,
        __esDecorate: Ln,
        __exportStar: Hn,
        __extends: Bn,
        __generator: Wn,
        __importDefault: ri,
        __importStar: ti,
        __makeTemplateObject: ei,
        __metadata: zn,
        __param: Nn,
        __propKey: Gn,
        __read: Ut,
        __rest: Un,
        __rewriteRelativeImportExtension: ui,
        __runInitializers: xn,
        __setFunctionName: Vn,
        __spread: Jn,
        __spreadArray: Xn,
        __spreadArrays: Yn,
        __values: Ze,
        default: ji,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I = Si(qi);
var H = {},
  Gt;
function Mi() {
  return (
    Gt ||
      ((Gt = 1),
      Object.defineProperty(H, "__esModule", { value: !0 }),
      (H.NavigationTarget = void 0),
      (H.NavigationTarget = {
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
    H
  );
}
var ot = {},
  at = {},
  J = {},
  Y = {},
  Vt;
function R() {
  if (Vt) return Y;
  ((Vt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Y.BridgeAPIError = e), Y);
}
var zt;
function S() {
  if (zt) return J;
  ((zt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.getCallBridge = void 0));
  const e = R();
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
  return ((J.getCallBridge = a), J);
}
var X = {},
  Kt;
function $e() {
  if (Kt) return X;
  ((Kt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.withRateLimiter = void 0));
  const e = R(),
    r = (a, u, n, i) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const s = Date.now();
        if ((s - t > n && ((t = s), (c = 0)), c >= u))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), a(...l));
      };
    };
  return ((X.withRateLimiter = r), X);
}
var Wt;
function Fi() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = S(),
          a = R(),
          u = $e(),
          n = (0, r.getCallBridge)(),
          i = (l) => {
            if (l && Object.values(l).some((s) => typeof s == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, s) => {
            if (typeof l != "string") throw new a.BridgeAPIError("functionKey must be a string!");
            return (i(s), n("invoke", { functionKey: l, payload: s }));
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
var Ht;
function He() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Fi(), e));
      })(ot)),
    ot
  );
}
var ut = {},
  Z = {},
  lt = {},
  Jt;
function li() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = S(),
          a = R(),
          u = $e(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((h) => typeof h == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (d) => async (h) => {
            l(h);
            const f = { ...h, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await c("invoke", f),
              { success: _, payload: v, error: g } = p ?? {},
              m = { ...(_ ? v : g) };
            if (m && m.headers)
              for (const y in m.headers)
                Array.isArray(m.headers[y]) && (m.headers[y] = m.headers[y].join(","));
            return m;
          },
          o = (d) => {
            const h = s(d);
            return (0, u.withRateLimiter)(
              h,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = o;
      })(lt)),
    lt
  );
}
var Yt;
function Ti() {
  if (Yt) return Z;
  ((Yt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.invokeRemote = void 0));
  const e = li(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((Z.invokeRemote = r), Z);
}
var Q = {},
  Xt;
function Di() {
  if (Xt) return Q;
  ((Xt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeService = void 0));
  const e = li(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((Q.invokeService = r), Q);
}
var Zt;
function Bi() {
  return (
    Zt ||
      ((Zt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(Ti(), e), r.__exportStar(Di(), e));
      })(ut)),
    ut
  );
}
var ct = {},
  $ = {},
  ee = {},
  Qt;
function Ui() {
  if (Qt) return ee;
  ((Qt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.submit = void 0));
  const e = S(),
    r = R(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await a("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((ee.submit = u), ee);
}
var te = {},
  $t;
function ki() {
  if ($t) return te;
  (($t = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.close = void 0));
  const e = S(),
    r = R(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        if ((await a("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((te.close = u), te);
}
var re = {},
  er;
function Ni() {
  if (er) return re;
  ((er = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.open = void 0));
  const e = S(),
    r = R(),
    a = (0, e.getCallBridge)(),
    u = async () => {
      try {
        if ((await a("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((re.open = u), re);
}
var ne = {},
  tr;
function Li() {
  if (tr) return ne;
  ((tr = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.refresh = void 0));
  const e = S(),
    r = R(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await a("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((ne.refresh = u), ne);
}
var ie = {},
  rr;
function xi() {
  if (rr) return ie;
  ((rr = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.createHistory = void 0));
  const r = (0, S().getCallBridge)(),
    a = async () => {
      const u = await r("createHistory");
      return (
        u.listen((n) => {
          u.location = n;
        }),
        u
      );
    };
  return ((ie.createHistory = a), ie);
}
var se = {},
  dt = {},
  q = {},
  nr;
function ci() {
  return (
    nr ||
      ((nr = 1),
      Object.defineProperty(q, "__esModule", { value: !0 }),
      (q.FORGE_SUPPORTED_LOCALE_CODES = q.I18N_BUNDLE_FOLDER_NAME = q.I18N_INFO_FILE_NAME = void 0),
      (q.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (q.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (q.FORGE_SUPPORTED_LOCALE_CODES = [
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
    q
  );
}
var B = {},
  ir;
function Gi() {
  if (ir) return B;
  ((ir = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.TranslationsGetter = B.TranslationGetterError = void 0));
  const e = (u, n) => {
    u.includes(n) || u.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  B.TranslationGetterError = r;
  class a {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, i = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: c } = i;
      if (!c) {
        let l;
        return (
          t.locales.includes(n) && (l = await this.getTranslationResource(n)),
          { translations: l ?? null, locale: n }
        );
      }
      for (const l of this.getLocaleLookupOrder(n, t)) {
        const s = await this.getTranslationResource(l);
        if (s) return { translations: s, locale: l };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const i = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, i);
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
      let i = this.translationResources.get(n);
      if (!i)
        try {
          ((i = await this.resourcesAccessor.getTranslationResource(n)),
            this.translationResources.set(n, i));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${n}`);
        }
      return i;
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
    getLocaleLookupOrder(n, i) {
      const { locales: t, fallback: c } = i,
        l = [n],
        s = c[n];
      return (
        s && Array.isArray(s) && s.length > 0 && l.push(...s),
        e(l, i.fallback.default),
        l.filter((o) => t.includes(o))
      );
    }
  }
  return ((B.TranslationsGetter = a), B);
}
var oe = {},
  ft = {},
  sr;
function di() {
  return (
    sr ||
      ((sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = I.__importDefault(Ri()),
          u = (i, t, c) => {
            const l = i[c];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = u;
        const n = (i, t) => {
          let c = i[t];
          if (!c) {
            const l = t.split(".");
            l.length > 1 && (c = (0, a.default)(i, l, null));
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
  if (or) return oe;
  ((or = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.Translator = void 0));
  const e = di();
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
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(i, u);
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
  return ((oe.Translator = r), oe);
}
var ae = {},
  ar;
function zi() {
  if (ar) return ae;
  ((ar = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.ensureLocale = void 0));
  const e = ci(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    a = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    u = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, t) => {
        const [c] = t.split("-");
        return (i[c] || (i[c] = t), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const t = i.replace("_", "-");
      return r.has(t) ? t : (u[t] ?? a[t] ?? null);
    };
  return ((ae.ensureLocale = n), ae);
}
var _t = {},
  ur;
function Ki() {
  return (
    ur ||
      ((ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          a = (s) => typeof s?.i18n == "string",
          u = (s) => s.startsWith("connect-"),
          n = (s) => s.startsWith("core:"),
          i = (s) => {
            const o = new Set(),
              d = (h, f) =>
                !r(h) || o.has(h)
                  ? []
                  : (o.add(h),
                    Object.entries(h).flatMap(([p, _]) => {
                      const v = [...f, p];
                      return a(_)
                        ? [{ propertyPath: v, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((g) => d(g, v))
                          : d(_, v);
                    }));
            return d(s, []);
          },
          t = (s) =>
            Object.entries(s).flatMap(([o, d]) =>
              !u(o) && !n(o) && d && Array.isArray(d) && d.length > 0 ? d.map((h) => [h, o]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (s) => {
          const o = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const h = i(d[0]);
            for (const { key: f } of h) o.add(f);
          }
          return o.size > 0 ? Array.from(o) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (s) => {
          const o = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const h = i(d[0]);
            for (const f of h) o.push({ moduleName: d[1], ...f });
          }
          return o;
        };
        e.extractI18nPropertiesFromModules = l;
      })(_t)),
    _t
  );
}
var vt = {},
  lr;
function Wi() {
  return (lr || ((lr = 1), Object.defineProperty(vt, "__esModule", { value: !0 })), vt);
}
var cr;
function fi() {
  return (
    cr ||
      ((cr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = I;
        (r.__exportStar(ci(), e),
          r.__exportStar(Gi(), e),
          r.__exportStar(Vi(), e),
          r.__exportStar(zi(), e));
        var a = di();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var u = Ki();
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
var dr;
function Hi() {
  if (dr) return se;
  ((dr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.getContext = void 0));
  const e = S(),
    r = fi(),
    a = (0, e.getCallBridge)(),
    u = async () => {
      var n;
      const i = await a("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((se.getContext = u), se);
}
var ue = {},
  fr;
function Ji() {
  if (fr) return ue;
  ((fr = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.changeWindowTitle = void 0));
  const e = S(),
    r = R(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        await a("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ue.changeWindowTitle = u), ue);
}
var le = {},
  _r;
function Yi() {
  if (_r) return le;
  ((_r = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.theme = void 0));
  const r = (0, S().getCallBridge)();
  return ((le.theme = { enable: () => r("enableTheming") }), le);
}
var ce = {},
  de = {},
  ht = {},
  U = {},
  vr;
function _i() {
  if (vr) return U;
  ((vr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.blobToBase64 = U.base64ToBlob = void 0));
  const e = (a, u) => {
    if (!a) return null;
    const n = a.includes(";base64") ? a.split(",")[1] : a,
      i = atob(n),
      t = new Array(i.length);
    for (let l = 0; l < i.length; l++) t[l] = i.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: u });
  };
  U.base64ToBlob = e;
  const r = (a) =>
    new Promise((u, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        u(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(a));
    });
  return ((U.blobToBase64 = r), U);
}
var hr;
function Xi() {
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
        const r = _i(),
          a = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const o = Object.getPrototypeOf(s);
            if (o === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(o, "constructor") && o.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(s)
            );
          },
          u = async (s) => ({ data: await (0, r.blobToBase64)(s), type: s.type }),
          n = (s) => (0, r.base64ToBlob)(s.data, s.type),
          i = async (s) => {
            if (s instanceof Blob) return { ...(await u(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((o) => (0, e.serialiseBlobsInPayload)(o)));
            if (s && a(s)) {
              const o = await Promise.all(
                Object.entries(s).map(async ([d, h]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(o);
            }
            return s;
          };
        e.serialiseBlobsInPayload = i;
        const t = (s) => {
          if (s && a(s) && "__isBlobData" in s) {
            const o = s;
            return n({ data: o.data, type: o.type });
          }
          if (Array.isArray(s)) return s.map((o) => (0, e.deserialiseBlobsInPayload)(o));
          if (s && a(s)) {
            const o = {};
            for (const [d, h] of Object.entries(s)) o[d] = (0, e.deserialiseBlobsInPayload)(h);
            return o;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((o) => (0, e.containsBlobs)(o))
              : s && a(s)
                ? Object.values(s).some((o) => (0, e.containsBlobs)(o))
                : !1;
        e.containsBlobs = c;
        const l = (s) =>
          s && a(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((o) => (0, e.containsSerialisedBlobs)(o))
              : s && a(s)
                ? Object.values(s).some((o) => (0, e.containsSerialisedBlobs)(o))
                : !1;
        e.containsSerialisedBlobs = l;
      })(ht)),
    ht
  );
}
var gr;
function vi() {
  if (gr) return de;
  ((gr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.events = void 0));
  const e = S(),
    r = Xi(),
    a = (0, e.getCallBridge)(),
    u = (l) => (s) => {
      let o = s;
      return ((0, r.containsSerialisedBlobs)(s) && (o = (0, r.deserialiseBlobsInPayload)(s)), l(o));
    },
    n = async (l, s) => {
      let o = s;
      return (
        (0, r.containsBlobs)(s) && (o = await (0, r.serialiseBlobsInPayload)(s)),
        a("emit", { event: l, payload: o })
      );
    },
    i = (l, s) => a("on", { event: l, callback: u(s) }),
    t = async (l, s) => {
      let o = s;
      return (
        (0, r.containsBlobs)(s) && (o = await (0, r.serialiseBlobsInPayload)(s)),
        a("emitPublic", { event: l, payload: o })
      );
    },
    c = (l, s) => a("onPublic", { event: l, callback: u(s) });
  return ((de.events = { emit: n, on: i, emitPublic: t, onPublic: c }), de);
}
var pr;
function Zi() {
  if (pr) return ce;
  ((pr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.emitReadyEvent = void 0));
  const e = vi(),
    r = mi(),
    u = (0, S().getCallBridge)(),
    n = "EXTENSION_READY",
    i = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await u("emitReadyEvent");
      } catch {}
    };
  return ((ce.emitReadyEvent = i), ce);
}
const Qi = "modulepreload",
  $i = function (e, r) {
    return new URL(e, r).href;
  },
  mr = {},
  es = function (r, a, u) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      let s = function (o) {
        return Promise.all(
          o.map((d) =>
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
      n = s(
        a.map((o) => {
          if (((o = $i(o, u)), o in mr)) return;
          mr[o] = !0;
          const d = o.endsWith(".css"),
            h = d ? '[rel="stylesheet"]' : "";
          if (u)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === o && (!d || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${h}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = d ? "stylesheet" : Qi),
            d || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = o),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            d)
          )
            return new Promise((p, _) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${o}`))));
            });
        }),
      );
    }
    function i(t) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = t), window.dispatchEvent(c), !c.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const c of t || []) c.status === "rejected" && i(c.reason);
      return r().catch(i);
    });
  };
var fe = {},
  gt = {},
  _e = {},
  Je = {},
  yr;
function hi() {
  if (yr) return Je;
  ((yr = 1), Object.defineProperty(Je, "__esModule", { value: !0 }), (Je.default = a));
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
  return Je;
}
var G = {},
  ve = {},
  he = {},
  br;
function ts() {
  if (br) return he;
  ((br = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((he.default = e), he);
}
var wr;
function et() {
  if (wr) return ve;
  ((wr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = r(ts());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var u = a;
  return ((ve.default = u), ve);
}
var Er;
function tt() {
  if (Er) return G;
  ((Er = 1),
    Object.defineProperty(G, "__esModule", { value: !0 }),
    (G.default = void 0),
    (G.unsafeStringify = u));
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
  var i = n;
  return ((G.default = i), G);
}
var Or;
function rs() {
  if (Or) return _e;
  ((Or = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = a(hi()),
    r = tt();
  function a(s) {
    return s && s.__esModule ? s : { default: s };
  }
  let u,
    n,
    i = 0,
    t = 0;
  function c(s, o, d) {
    let h = (o && d) || 0;
    const f = o || new Array(16);
    s = s || {};
    let p = s.node || u,
      _ = s.clockseq !== void 0 ? s.clockseq : n;
    if (p == null || _ == null) {
      const O = s.random || (s.rng || e.default)();
      (p == null && (p = u = [O[0] | 1, O[1], O[2], O[3], O[4], O[5]]),
        _ == null && (_ = n = ((O[6] << 8) | O[7]) & 16383));
    }
    let v = s.msecs !== void 0 ? s.msecs : Date.now(),
      g = s.nsecs !== void 0 ? s.nsecs : t + 1;
    const m = v - i + (g - t) / 1e4;
    if (
      (m < 0 && s.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (m < 0 || v > i) && s.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = v), (t = g), (n = _), (v += 122192928e5));
    const y = ((v & 268435455) * 1e4 + g) % 4294967296;
    ((f[h++] = (y >>> 24) & 255),
      (f[h++] = (y >>> 16) & 255),
      (f[h++] = (y >>> 8) & 255),
      (f[h++] = y & 255));
    const E = ((v / 4294967296) * 1e4) & 268435455;
    ((f[h++] = (E >>> 8) & 255),
      (f[h++] = E & 255),
      (f[h++] = ((E >>> 24) & 15) | 16),
      (f[h++] = (E >>> 16) & 255),
      (f[h++] = (_ >>> 8) | 128),
      (f[h++] = _ & 255));
    for (let O = 0; O < 6; ++O) f[h + O] = p[O];
    return o || (0, r.unsafeStringify)(f);
  }
  var l = c;
  return ((_e.default = l), _e);
}
var ge = {},
  T = {},
  pe = {},
  Sr;
function gi() {
  if (Sr) return pe;
  ((Sr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = r(et());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    let i;
    const t = new Uint8Array(16);
    return (
      (t[0] = (i = parseInt(n.slice(0, 8), 16)) >>> 24),
      (t[1] = (i >>> 16) & 255),
      (t[2] = (i >>> 8) & 255),
      (t[3] = i & 255),
      (t[4] = (i = parseInt(n.slice(9, 13), 16)) >>> 8),
      (t[5] = i & 255),
      (t[6] = (i = parseInt(n.slice(14, 18), 16)) >>> 8),
      (t[7] = i & 255),
      (t[8] = (i = parseInt(n.slice(19, 23), 16)) >>> 8),
      (t[9] = i & 255),
      (t[10] = ((i = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (i / 4294967296) & 255),
      (t[12] = (i >>> 24) & 255),
      (t[13] = (i >>> 16) & 255),
      (t[14] = (i >>> 8) & 255),
      (t[15] = i & 255),
      t
    );
  }
  var u = a;
  return ((pe.default = u), pe);
}
var Rr;
function pi() {
  if (Rr) return T;
  ((Rr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.URL = T.DNS = void 0),
    (T.default = t));
  var e = tt(),
    r = a(gi());
  function a(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function u(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let s = 0; s < c.length; ++s) l.push(c.charCodeAt(s));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  T.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  T.URL = i;
  function t(c, l, s) {
    function o(d, h, f, p) {
      var _;
      if (
        (typeof d == "string" && (d = u(d)),
        typeof h == "string" && (h = (0, r.default)(h)),
        ((_ = h) === null || _ === void 0 ? void 0 : _.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let v = new Uint8Array(16 + d.length);
      if (
        (v.set(h),
        v.set(d, h.length),
        (v = s(v)),
        (v[6] = (v[6] & 15) | l),
        (v[8] = (v[8] & 63) | 128),
        f)
      ) {
        p = p || 0;
        for (let g = 0; g < 16; ++g) f[p + g] = v[g];
        return f;
      }
      return (0, e.unsafeStringify)(v);
    }
    try {
      o.name = c;
    } catch {}
    return ((o.DNS = n), (o.URL = i), o);
  }
  return T;
}
var me = {},
  Pr;
function ns() {
  if (Pr) return me;
  ((Pr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
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
      v = "0123456789abcdef";
    for (let g = 0; g < _; g += 8) {
      const m = (f[g >> 5] >>> (g % 32)) & 255,
        y = parseInt(v.charAt((m >>> 4) & 15) + v.charAt(m & 15), 16);
      p.push(y);
    }
    return p;
  }
  function a(f) {
    return (((f + 64) >>> 9) << 4) + 14 + 1;
  }
  function u(f, p) {
    ((f[p >> 5] |= 128 << (p % 32)), (f[a(p) - 1] = p));
    let _ = 1732584193,
      v = -271733879,
      g = -1732584194,
      m = 271733878;
    for (let y = 0; y < f.length; y += 16) {
      const E = _,
        O = v,
        C = g,
        F = m;
      ((_ = l(_, v, g, m, f[y], 7, -680876936)),
        (m = l(m, _, v, g, f[y + 1], 12, -389564586)),
        (g = l(g, m, _, v, f[y + 2], 17, 606105819)),
        (v = l(v, g, m, _, f[y + 3], 22, -1044525330)),
        (_ = l(_, v, g, m, f[y + 4], 7, -176418897)),
        (m = l(m, _, v, g, f[y + 5], 12, 1200080426)),
        (g = l(g, m, _, v, f[y + 6], 17, -1473231341)),
        (v = l(v, g, m, _, f[y + 7], 22, -45705983)),
        (_ = l(_, v, g, m, f[y + 8], 7, 1770035416)),
        (m = l(m, _, v, g, f[y + 9], 12, -1958414417)),
        (g = l(g, m, _, v, f[y + 10], 17, -42063)),
        (v = l(v, g, m, _, f[y + 11], 22, -1990404162)),
        (_ = l(_, v, g, m, f[y + 12], 7, 1804603682)),
        (m = l(m, _, v, g, f[y + 13], 12, -40341101)),
        (g = l(g, m, _, v, f[y + 14], 17, -1502002290)),
        (v = l(v, g, m, _, f[y + 15], 22, 1236535329)),
        (_ = s(_, v, g, m, f[y + 1], 5, -165796510)),
        (m = s(m, _, v, g, f[y + 6], 9, -1069501632)),
        (g = s(g, m, _, v, f[y + 11], 14, 643717713)),
        (v = s(v, g, m, _, f[y], 20, -373897302)),
        (_ = s(_, v, g, m, f[y + 5], 5, -701558691)),
        (m = s(m, _, v, g, f[y + 10], 9, 38016083)),
        (g = s(g, m, _, v, f[y + 15], 14, -660478335)),
        (v = s(v, g, m, _, f[y + 4], 20, -405537848)),
        (_ = s(_, v, g, m, f[y + 9], 5, 568446438)),
        (m = s(m, _, v, g, f[y + 14], 9, -1019803690)),
        (g = s(g, m, _, v, f[y + 3], 14, -187363961)),
        (v = s(v, g, m, _, f[y + 8], 20, 1163531501)),
        (_ = s(_, v, g, m, f[y + 13], 5, -1444681467)),
        (m = s(m, _, v, g, f[y + 2], 9, -51403784)),
        (g = s(g, m, _, v, f[y + 7], 14, 1735328473)),
        (v = s(v, g, m, _, f[y + 12], 20, -1926607734)),
        (_ = o(_, v, g, m, f[y + 5], 4, -378558)),
        (m = o(m, _, v, g, f[y + 8], 11, -2022574463)),
        (g = o(g, m, _, v, f[y + 11], 16, 1839030562)),
        (v = o(v, g, m, _, f[y + 14], 23, -35309556)),
        (_ = o(_, v, g, m, f[y + 1], 4, -1530992060)),
        (m = o(m, _, v, g, f[y + 4], 11, 1272893353)),
        (g = o(g, m, _, v, f[y + 7], 16, -155497632)),
        (v = o(v, g, m, _, f[y + 10], 23, -1094730640)),
        (_ = o(_, v, g, m, f[y + 13], 4, 681279174)),
        (m = o(m, _, v, g, f[y], 11, -358537222)),
        (g = o(g, m, _, v, f[y + 3], 16, -722521979)),
        (v = o(v, g, m, _, f[y + 6], 23, 76029189)),
        (_ = o(_, v, g, m, f[y + 9], 4, -640364487)),
        (m = o(m, _, v, g, f[y + 12], 11, -421815835)),
        (g = o(g, m, _, v, f[y + 15], 16, 530742520)),
        (v = o(v, g, m, _, f[y + 2], 23, -995338651)),
        (_ = d(_, v, g, m, f[y], 6, -198630844)),
        (m = d(m, _, v, g, f[y + 7], 10, 1126891415)),
        (g = d(g, m, _, v, f[y + 14], 15, -1416354905)),
        (v = d(v, g, m, _, f[y + 5], 21, -57434055)),
        (_ = d(_, v, g, m, f[y + 12], 6, 1700485571)),
        (m = d(m, _, v, g, f[y + 3], 10, -1894986606)),
        (g = d(g, m, _, v, f[y + 10], 15, -1051523)),
        (v = d(v, g, m, _, f[y + 1], 21, -2054922799)),
        (_ = d(_, v, g, m, f[y + 8], 6, 1873313359)),
        (m = d(m, _, v, g, f[y + 15], 10, -30611744)),
        (g = d(g, m, _, v, f[y + 6], 15, -1560198380)),
        (v = d(v, g, m, _, f[y + 13], 21, 1309151649)),
        (_ = d(_, v, g, m, f[y + 4], 6, -145523070)),
        (m = d(m, _, v, g, f[y + 11], 10, -1120210379)),
        (g = d(g, m, _, v, f[y + 2], 15, 718787259)),
        (v = d(v, g, m, _, f[y + 9], 21, -343485551)),
        (_ = i(_, E)),
        (v = i(v, O)),
        (g = i(g, C)),
        (m = i(m, F)));
    }
    return [_, v, g, m];
  }
  function n(f) {
    if (f.length === 0) return [];
    const p = f.length * 8,
      _ = new Uint32Array(a(p));
    for (let v = 0; v < p; v += 8) _[v >> 5] |= (f[v / 8] & 255) << (v % 32);
    return _;
  }
  function i(f, p) {
    const _ = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, _, v, g, m) {
    return i(t(i(i(p, f), i(v, m)), g), _);
  }
  function l(f, p, _, v, g, m, y) {
    return c((p & _) | (~p & v), f, p, g, m, y);
  }
  function s(f, p, _, v, g, m, y) {
    return c((p & v) | (_ & ~v), f, p, g, m, y);
  }
  function o(f, p, _, v, g, m, y) {
    return c(p ^ _ ^ v, f, p, g, m, y);
  }
  function d(f, p, _, v, g, m, y) {
    return c(_ ^ (p | ~v), f, p, g, m, y);
  }
  var h = e;
  return ((me.default = h), me);
}
var Ir;
function is() {
  if (Ir) return ge;
  ((Ir = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = a(pi()),
    r = a(ns());
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ge.default = n), ge);
}
var ye = {},
  be = {},
  Cr;
function ss() {
  if (Cr) return be;
  ((Cr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((be.default = r), be);
}
var Ar;
function os() {
  if (Ar) return ye;
  ((Ar = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = u(ss()),
    r = u(hi()),
    a = tt();
  function u(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, l) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const s = t.random || (t.rng || r.default)();
    if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), c)) {
      l = l || 0;
      for (let o = 0; o < 16; ++o) c[l + o] = s[o];
      return c;
    }
    return (0, a.unsafeStringify)(s);
  }
  var i = n;
  return ((ye.default = i), ye);
}
var we = {},
  Ee = {},
  jr;
function as() {
  if (jr) return Ee;
  ((jr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  function e(n, i, t, c) {
    switch (n) {
      case 0:
        return (i & t) ^ (~i & c);
      case 1:
        return i ^ t ^ c;
      case 2:
        return (i & t) ^ (i & c) ^ (t & c);
      case 3:
        return i ^ t ^ c;
    }
  }
  function r(n, i) {
    return (n << i) | (n >>> (32 - i));
  }
  function a(n) {
    const i = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const o = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < o.length; ++d) n.push(o.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      l = Math.ceil(c / 16),
      s = new Array(l);
    for (let o = 0; o < l; ++o) {
      const d = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        d[h] =
          (n[o * 64 + h * 4] << 24) |
          (n[o * 64 + h * 4 + 1] << 16) |
          (n[o * 64 + h * 4 + 2] << 8) |
          n[o * 64 + h * 4 + 3];
      s[o] = d;
    }
    ((s[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (s[l - 1][14] = Math.floor(s[l - 1][14])),
      (s[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let o = 0; o < l; ++o) {
      const d = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) d[g] = s[o][g];
      for (let g = 16; g < 80; ++g) d[g] = r(d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16], 1);
      let h = t[0],
        f = t[1],
        p = t[2],
        _ = t[3],
        v = t[4];
      for (let g = 0; g < 80; ++g) {
        const m = Math.floor(g / 20),
          y = (r(h, 5) + e(m, f, p, _) + v + i[m] + d[g]) >>> 0;
        ((v = _), (_ = p), (p = r(f, 30) >>> 0), (f = h), (h = y));
      }
      ((t[0] = (t[0] + h) >>> 0),
        (t[1] = (t[1] + f) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + _) >>> 0),
        (t[4] = (t[4] + v) >>> 0));
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
  return ((Ee.default = u), Ee);
}
var qr;
function us() {
  if (qr) return we;
  ((qr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = a(pi()),
    r = a(as());
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((we.default = n), we);
}
var Oe = {},
  Mr;
function ls() {
  if (Mr) return Oe;
  ((Mr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Oe.default = e), Oe);
}
var Se = {},
  Fr;
function cs() {
  if (Fr) return Se;
  ((Fr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.default = void 0));
  var e = r(et());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var u = a;
  return ((Se.default = u), Se);
}
var Tr;
function ds() {
  return (
    Tr ||
      ((Tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(e, "parse", {
            enumerable: !0,
            get: function () {
              return s.default;
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
        var r = o(rs()),
          a = o(is()),
          u = o(os()),
          n = o(us()),
          i = o(ls()),
          t = o(cs()),
          c = o(et()),
          l = o(tt()),
          s = o(gi());
        function o(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(gt)),
    gt
  );
}
var Dr;
function fs() {
  if (Dr) return fe;
  ((Dr = 1),
    Object.defineProperty(fe, "__esModule", { value: !0 }),
    (fe.createAdfRendererIframeProps = void 0));
  const e = ds(),
    r = async (a, u) => {
      const n = await es(
          () => import("./index-CT8OtY7f.js").then((o) => o.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = u || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        s = () => {
          var o, d, h, f, p, _, v;
          const g = document.getElementById(l),
            m = {
              type: "adf-document",
              document: (o = a.extension.macro) === null || o === void 0 ? void 0 : o.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: a.localId,
              isEditing:
                (h = (d = a.extension) === null || d === void 0 ? void 0 : d.isEditing) !== null &&
                h !== void 0
                  ? h
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
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (y) => {
                var E;
                (E = y?.iFrameResizer) === null || E === void 0 || E.resize();
              },
            },
            g || "",
          ),
            (v = g?.contentWindow) === null || v === void 0 || v.postMessage(m, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: c, onLoad: s }
      );
    };
  return ((fe.createAdfRendererIframeProps = r), fe);
}
var Re = {},
  Br;
function _s() {
  if (Br) return Re;
  ((Br = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.onClose = void 0));
  const e = S(),
    r = R(),
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
  return ((Re.onClose = u), Re);
}
var Ur;
function mi() {
  if (Ur) return $;
  ((Ur = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.view = void 0));
  const e = Ui(),
    r = ki(),
    a = Ni(),
    u = Li(),
    n = xi(),
    i = Hi(),
    t = Ji(),
    c = Yi(),
    l = Zi(),
    s = fs(),
    o = _s();
  return (
    ($.view = {
      submit: e.submit,
      close: r.close,
      onClose: o.onClose,
      open: a.open,
      refresh: u.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: s.createAdfRendererIframeProps,
    }),
    $
  );
}
var kr;
function rt() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(mi(), e));
      })(ct)),
    ct
  );
}
var pt = {},
  Pe = {},
  Nr;
function vs() {
  if (Nr) return Pe;
  ((Nr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.router = void 0));
  const r = (0, S().getCallBridge)(),
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
    i = async () => r("reload");
  return ((Pe.router = { getUrl: a, navigate: u, open: n, reload: i }), Pe);
}
var Lr;
function hs() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(vs(), e));
      })(pt)),
    pt
  );
}
var mt = {},
  Ie = {},
  xr;
function gs() {
  if (xr) return Ie;
  ((xr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.Modal = void 0));
  const e = S(),
    r = R(),
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
  return ((Ie.Modal = n), Ie);
}
var Gr;
function ps() {
  return (
    Gr ||
      ((Gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(gs(), e));
      })(mt)),
    mt
  );
}
var j = {},
  k = {},
  Vr;
function ms() {
  if (Vr) return k;
  ((Vr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.productFetchApi = k.remoteFetchApi = void 0));
  const e = _i(),
    r = async (t, c = !1) => {
      const l = {};
      for (const [s, o] of t.entries())
        if (c ? s.startsWith("file") : s === "file") {
          const h = o.name,
            f = o.type;
          ((l[s] = await (0, e.blobToBase64)(o)), (l[`__${s}Name`] = h), (l[`__${s}Type`] = f));
        } else l[s] = o;
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
        s = l ? await r(c?.body, t === "remote") : c?.body,
        o = new Request("", { body: s, method: c?.method, headers: c?.headers }),
        d = Object.fromEntries(o.headers.entries());
      return {
        body: o.method !== "GET" ? await o.text() : null,
        headers: new Headers(d),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const c = async (l, s) => {
        const o = a(s),
          { body: d, headers: h, isMultipartFormData: f } = await u("remote", o),
          p = {
            remoteKey: l,
            fetchRequestInit: { ...o, body: d, headers: [...h.entries()] },
            isMultipartFormData: f,
          },
          {
            body: _,
            headers: v,
            statusText: g,
            status: m,
            isAttachment: y,
          } = await t("fetchRemote", p),
          E = y ? (0, e.base64ToBlob)(_, v["content-type"]) : _;
        return new Response(E || null, { headers: v, status: m, statusText: g });
      };
      return { requestRemote: (l, s) => c(l, s) };
    };
  k.remoteFetchApi = n;
  const i = (t) => {
    const c = async (l, s, o) => {
      const d = a(o),
        { body: h, headers: f, isMultipartFormData: p } = await u("product", d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: l,
          restPath: s,
          fetchRequestInit: { ...d, body: h, headers: [...f.entries()] },
          isMultipartFormData: p,
        },
        {
          body: v,
          headers: g,
          statusText: m,
          status: y,
          isAttachment: E,
        } = await t("fetchProduct", _),
        O = E ? (0, e.base64ToBlob)(v, g["content-type"]) : v;
      return new Response(O || null, { headers: g, status: y, statusText: m });
    };
    return {
      requestConfluence: (l, s) => c("confluence", l, s),
      requestJira: (l, s) => c("jira", l, s),
      requestBitbucket: (l, s) => c("bitbucket", l, s),
    };
  };
  return ((k.productFetchApi = i), k);
}
var zr;
function ys() {
  if (zr) return j;
  zr = 1;
  var e;
  (Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.requestRemote = j.requestBitbucket = j.requestJira = j.requestConfluence = void 0));
  const r = S(),
    a = ms();
  return (
    (e = (0, a.productFetchApi)((0, r.getCallBridge)())),
    (j.requestConfluence = e.requestConfluence),
    (j.requestJira = e.requestJira),
    (j.requestBitbucket = e.requestBitbucket),
    (j.requestRemote = (0, a.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    j
  );
}
var yt = {},
  Ce = {},
  Kr;
function bs() {
  if (Kr) return Ce;
  ((Kr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.showFlag = void 0));
  const e = S(),
    r = R(),
    a = (0, e.getCallBridge)(),
    u = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = a("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, a("closeFlag", { id: n.id })) };
    };
  return ((Ce.showFlag = u), Ce);
}
var Wr;
function ws() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = bs();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(yt)),
    yt
  );
}
var bt = {},
  Hr;
function Es() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(vi(), e));
      })(bt)),
    bt
  );
}
var wt = {},
  Ae = {},
  Jr;
function Os() {
  if (Jr) return Ae;
  ((Jr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.realtime = void 0));
  const r = (0, S().getCallBridge)(),
    a = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    u = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    i = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Ae.realtime = { publish: a, subscribe: u, publishGlobal: n, subscribeGlobal: i }), Ae);
}
var Et = {},
  Yr;
function Ss() {
  return (
    Yr ||
      ((Yr = 1),
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
var Xr;
function Rs() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = Os();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var a = Ss();
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
  je = {},
  St = {},
  Zr;
function Ps() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = S(),
          a = R(),
          u = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const i = (c) => {
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
            const l = i(c);
            if ((await n("openRovo", l)) === !1)
              throw new a.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(St)),
    St
  );
}
var qe = {},
  Qr;
function Is() {
  if (Qr) return qe;
  ((Qr = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.isEnabled = void 0));
  const r = (0, S().getCallBridge)(),
    a = () => r("isRovoEnabled");
  return ((qe.isEnabled = a), qe);
}
var $r;
function Cs() {
  if ($r) return je;
  (($r = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.rovo = void 0));
  const e = Ps(),
    r = Is();
  return ((je.rovo = { open: e.open, isEnabled: r.isEnabled }), je);
}
var en;
function As() {
  return (
    en ||
      ((en = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Cs(), e));
      })(Ot)),
    Ot
  );
}
var M = {},
  tn;
function js() {
  if (tn) return M;
  ((tn = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.createTranslationFunction = M.getTranslations = M.resetTranslationsCache = void 0));
  const e = fi(),
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
  M.resetTranslationsCache = n;
  const i = async (c = null, l = { fallback: !0 }) => {
    let s = c;
    return (s || (s = (await r.view.getContext()).locale), await u.getTranslations(s, l));
  };
  M.getTranslations = i;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const s = new e.Translator(l, u);
    return (
      await s.init(),
      (o, d) => {
        var h, f;
        return (f = (h = s.translate(o)) !== null && h !== void 0 ? h : d) !== null && f !== void 0
          ? f
          : o;
      }
    );
  };
  return ((M.createTranslationFunction = t), M);
}
var Rt = {},
  Me = {},
  rn;
function qs() {
  if (rn) return Me;
  ((rn = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.permissions = void 0));
  const r = (0, S().getCallBridge)(),
    a = async (l) => r("__permission__egressGet", l),
    u = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    i = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (Me.permissions = {
      egress: { get: a, set: u, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: c },
    }),
    Me
  );
}
var N = {},
  Pt = {},
  It = {},
  Fe = {},
  Te = {},
  nn;
function kt() {
  if (nn) return Te;
  ((nn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.parseUrl = void 0));
  function e(r) {
    var a, u;
    const n =
        (u = (a = r.match(/^(.*?:)/)) === null || a === void 0 ? void 0 : a[0]) !== null &&
        u !== void 0
          ? u
          : "https:",
      i = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = i.split("/")[0],
      c = i.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: c };
  }
  return ((Te.parseUrl = e), Te);
}
var Ct = {},
  sn;
function yi() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = kt();
        function a(t) {
          const l = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${l}$`);
        }
        e.globToRegex = a;
        const u = (t) => {
          if (t?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            l = new Set(),
            s = [];
          return (
            t.forEach((o) => {
              const d = c.test(o) ? o : `https://${o}`,
                h = (0, r.parseUrl)(d);
              h.hostname.startsWith("*")
                ? (l.add(h.hostname.substring(2)), s.push(a(h.hostname)))
                : l.add(h.hostname);
            }),
            [...l].sort().reduce((o, d) => (s.some((h) => h.test(d)) || o.push(d), o), [])
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
        const i = (t) => {
          const c = t.egress.filter((s) => {
              var o;
              if (
                ((o = s.category) === null || o === void 0 ? void 0 : o.toUpperCase()) ===
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
          for (const s of c)
            (l.has(s.type) || l.set(s.type, s.addresses),
              l.set(s.type, [...l.get(s.type), ...s.addresses]));
          return [...l.entries()].map(([s, o]) => ({ type: s, addresses: [...new Set(o)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(Ct)),
    Ct
  );
}
var on;
function Ms() {
  if (on) return Fe;
  ((on = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.EgressFilteringService = void 0));
  const e = kt(),
    r = yi();
  class a {
    constructor(n) {
      ((this.URLs = n.filter((i) => !i.startsWith("*")).map((i) => this.parseUrl(i))),
        (this.wildcardDomains = n
          .filter((i) => i !== "*")
          .map((i) => this.parseUrl(i))
          .filter((i) => decodeURIComponent(i.hostname).startsWith("*"))
          .map((i) => ({ ...i, regex: (0, r.globToRegex)(decodeURIComponent(i.hostname)) }))),
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
      const i = this.parseUrl(n);
      return (
        this.allowedDomainExact(i, this.URLs) || this.allowedDomainPattern(i, this.wildcardDomains)
      );
    }
    isValidUrlCSP(n) {
      if (this.allowsEverything) return !0;
      const i = this.parseUrl(n);
      return (
        this.allowedDomainExactAndPath(i, this.URLs) ||
        this.allowedDomainPatternAndPath(i, this.wildcardDomains)
      );
    }
    allowedDomainExact(n, i) {
      return i.filter((t) => t.protocol === n.protocol).some((t) => t.hostname === n.hostname);
    }
    allowedDomainExactAndPath(n, i) {
      return i
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.hostname === n.hostname)
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    allowedDomainPattern(n, i) {
      return i.filter((t) => t.protocol === n.protocol).some((t) => t.regex.test(n.hostname));
    }
    allowedDomainPatternAndPath(n, i) {
      return i
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.regex.test(n.hostname))
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    protocolMatchesCSP(n, i) {
      return n === i || (n === "http:" && i === "https:") || (n === "ws:" && i === "wss:");
    }
    pathMatches(n, i) {
      return n === "/" ? !0 : n.endsWith("/") ? i.startsWith(n) : i === n;
    }
  }
  return ((Fe.EgressFilteringService = a), Fe);
}
var an;
function Fs() {
  return (
    an ||
      ((an = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(Ms(), e), r.__exportStar(kt(), e), r.__exportStar(yi(), e));
      })(It)),
    It
  );
}
var un;
function Ts() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Fs(), e));
      })(Pt)),
    Pt
  );
}
var ln;
function Ds() {
  if (ln) return N;
  ((ln = 1),
    Object.defineProperty(N, "__esModule", { value: !0 }),
    (N.checkPermissions = N.createPermissionUtils = void 0));
  const e = Ts(),
    r = rt();
  function a(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const u = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(d) {
    if (!d) return null;
    const { scopes: h, external: f = {} } = d,
      p = Array.isArray(h) ? h : Object.keys(h || {});
    return {
      hasScope: (_) => p.includes(_),
      canFetchFrom: (_, v) => {
        var g;
        const m = (g = f.fetch) === null || g === void 0 ? void 0 : g[_];
        if (!m?.length) return !1;
        const y = m.map(a).filter((C) => C.length > 0);
        if (y.length === 0) return !1;
        const E = new e.EgressFilteringService(y);
        return _ === "client" ? E.isValidUrlCSP(v) : E.isValidUrl(v);
      },
      canLoadResource: (_, v) => {
        const g = f[_];
        if (!g?.length) return !1;
        const m = g.map(a).filter((O) => O.length > 0);
        return m.length === 0 ? !1 : new e.EgressFilteringService(m).isValidUrlCSP(v);
      },
      getScopes: () => p,
      getExternalPermissions: () => f,
      hasAnyPermissions: () => p.length > 0 || Object.keys(f).length > 0,
    };
  }
  N.createPermissionUtils = i;
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
        const v = (_ = d.fetch) === null || _ === void 0 ? void 0 : _[p];
        if (v?.length) {
          const g = v.filter((m) => !h.canFetchFrom(p, m));
          g.length > 0 && (f[p] = g);
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
          const v = _.filter((g) => !h.canLoadResource(p, g));
          v.length > 0 && (f[p] = v);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function s(d, h) {
    if (!d) return;
    const f = c(d, h),
      p = l(d, h);
    if (!f && !p) return;
    const _ = {};
    return (f && (_.fetch = f), p && Object.assign(_, p), _);
  }
  async function o(d, h) {
    var f;
    if (!d) return { granted: !1, missing: null };
    if (!(!((f = d.scopes) === null || f === void 0) && f.length) && !d.external)
      return { granted: !0, missing: null };
    let p = h;
    p || (p = (await r.view.getContext()).permissions);
    const _ = i(p);
    if (!_) return { granted: !1, missing: null };
    const v = {};
    let g = !0;
    const m = t(d.scopes, _);
    m && ((v.scopes = m), (g = !1));
    const y = s(d.external, _);
    return (y && ((v.external = y), (g = !1)), { granted: g, missing: g ? null : v });
  }
  return ((N.checkPermissions = o), N);
}
var cn;
function Bs() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(qs(), e), r.__exportStar(Ds(), e));
      })(Rt)),
    Rt
  );
}
var At = {},
  jt = {},
  qt = {},
  De = {},
  Be = {},
  dn;
function bi() {
  return (
    dn ||
      ((dn = 1),
      Object.defineProperty(Be, "__esModule", { value: !0 }),
      (Be.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Be.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Be
  );
}
var fn;
function nt() {
  if (fn) return De;
  ((fn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = rt(),
    a = bi(),
    u = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(a.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((De.checkRestrictedEnvironment = u), De);
}
var _n;
function Us() {
  return (
    _n ||
      ((_n = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = He(),
          a = R(),
          u = nt(),
          i = (0, S().getCallBridge)(),
          t = (o, d) => {
            const h = atob(o),
              f = new Array(h.length);
            for (let _ = 0; _ < h.length; _++) f[_] = h.charCodeAt(_);
            const p = new Uint8Array(f);
            return new Blob([p], { type: d || "application/octet-stream" });
          },
          c = async (o) => {
            const d = o.size,
              h = await o.arrayBuffer(),
              f = await crypto.subtle.digest("SHA-256", h),
              p = new Uint8Array(f),
              _ = btoa(String.fromCharCode(...p));
            return { length: d, checksum: _, checksumType: "SHA256" };
          },
          l = async ({ functionKey: o, objects: d }) => {
            if (!o || o.length === 0)
              throw new a.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new a.BridgeAPIError("objects array is required and must not be empty");
            const h = d.map((m, y) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new a.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(m.data, m.mimeType);
                } catch {
                  throw new a.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              f = await Promise.all(h.map((m) => c(m))),
              p = await (0, r.invoke)(o, { allObjectMetadata: f });
            if (!p || typeof p != "object")
              throw new a.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              v = new Map();
            return (
              h.forEach((m, y) => {
                const E = f[y];
                (_.set(E.checksum, m), v.set(E.checksum, y));
              }),
              Object.entries(p).map(([m, y]) => {
                const { key: E, checksum: O } = y,
                  C = _.get(O),
                  F = v.get(O);
                return F === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: E,
                        error: `Index not found for checksum ${O}`,
                      }),
                      index: -1,
                    }
                  : C
                    ? {
                        promise: (async () => {
                          try {
                            const b = await fetch(m, {
                              method: "PUT",
                              body: C,
                              headers: {
                                "Content-Type": C.type || "application/octet-stream",
                                "Content-Length": C.size.toString(),
                              },
                            });
                            return {
                              success: b.ok,
                              key: E,
                              status: b.status,
                              error: b.ok ? void 0 : `Upload failed with status ${b.status}`,
                            };
                          } catch (b) {
                            return {
                              success: !1,
                              key: E,
                              status: 503,
                              error: b instanceof Error ? b.message : "Upload failed",
                            };
                          }
                        })(),
                        index: F,
                        objectType: C.type,
                        objectSize: C.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: E,
                          error: `Blob not found for checksum ${O}`,
                        }),
                        index: F,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const s = async ({ functionKey: o, objects: d }) => {
          (await (0, u.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: o, objects: d });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = s;
      })(qt)),
    qt
  );
}
var Ue = {},
  vn;
function ks() {
  if (vn) return Ue;
  ((vn = 1), Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.deleteObjects = void 0));
  const e = He(),
    r = R(),
    a = nt(),
    n = (0, S().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
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
  return ((Ue.deleteObjects = i), Ue);
}
var ke = {},
  hn;
function Ns() {
  if (hn) return ke;
  ((hn = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.download = void 0));
  const e = He(),
    r = R(),
    a = nt(),
    n = (0, S().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
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
      const s = Object.entries(l).map(async ([d, h]) => {
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
      return await Promise.all(s);
    };
  return ((ke.download = i), ke);
}
var Ne = {},
  gn;
function Ls() {
  if (gn) return Ne;
  ((gn = 1), Object.defineProperty(Ne, "__esModule", { value: !0 }), (Ne.getMetadata = void 0));
  const e = He(),
    r = R(),
    a = nt(),
    n = (0, S().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
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
        c.map(async (s) => {
          const o = await (0, e.invoke)(t, { key: s });
          return !o || typeof o != "object"
            ? { key: s, error: "Invalid response from functionKey" }
            : o;
        }),
      );
    };
  return ((Ne.getMetadata = i), Ne);
}
var pn;
function xs() {
  return (
    pn ||
      ((pn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = Us();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const a = ks(),
          u = Ns(),
          n = Ls();
        e.objectStore = {
          upload: r.upload,
          download: u.download,
          getMetadata: n.getMetadata,
          delete: a.deleteObjects,
        };
      })(jt)),
    jt
  );
}
var mn;
function Gs() {
  return (
    mn ||
      ((mn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(xs(), e), r.__exportStar(bi(), e));
      })(At)),
    At
  );
}
var Mt = {},
  Le = {},
  L = {},
  V = {},
  Ye = {},
  yn;
function Vs() {
  if (yn) return Ye;
  ((yn = 1), Object.defineProperty(Ye, "__esModule", { value: !0 }));
  const e = D();
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
      var i;
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
            e.SDKFlags.setFlags(this._sdkKey, (i = t.sdk_flags) !== null && i !== void 0 ? i : {})),
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
      const i = {};
      return (
        n.user && (i.user = n.user),
        n.sdkInfo && (i.generatorSDKInfo = n.sdkInfo),
        (i.lcut = n.time),
        i
      );
    }
    _getDetailedStoreResult(u, n) {
      let i = null;
      return (
        u && (i = u[n] ? u[n] : u[(0, e._DJB2)(n)]),
        { result: i, details: this._getDetails(i == null) }
      );
    }
    _setWarningState(u, n) {
      var i, t;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((i = u.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== c &&
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
      var n, i;
      const t = this.getCurrentSourceDetails();
      let c = t.reason;
      const l = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${u ? "Unrecognized" : "Recognized"}`));
      const s =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (s && (t.bootstrapMetadata = s), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((Ye.default = r), Ye);
}
var z = {},
  xe = {},
  bn;
function zs() {
  if (bn) return xe;
  ((bn = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe._resolveDeltasResponse = void 0));
  const e = D(),
    r = 2;
  function a(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const s = u(t, l),
      o = n(s),
      d = (0, e._DJB2Object)(
        {
          feature_gates: o.feature_gates,
          dynamic_configs: o.dynamic_configs,
          layer_configs: o.layer_configs,
        },
        r,
      );
    return d === l.checksumV2
      ? JSON.stringify(o)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: o,
          badFullResponse: l.deltas_full_response,
        };
  }
  xe._resolveDeltasResponse = a;
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
      i(t.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      i(t.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      i(t.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function i(t, c) {
    t?.forEach((l) => {
      delete c[l];
    });
  }
  return xe;
}
var wn;
function wi() {
  if (wn) return z;
  wn = 1;
  var e =
    (z && z.__awaiter) ||
    function (n, i, t, c) {
      function l(s) {
        return s instanceof t
          ? s
          : new t(function (o) {
              o(s);
            });
      }
      return new (t || (t = Promise))(function (s, o) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            o(_);
          }
        }
        function h(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            o(_);
          }
        }
        function f(p) {
          p.done ? s(p.value) : l(p.value).then(d, h);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(z, "__esModule", { value: !0 });
  const r = D(),
    a = zs();
  class u extends r.NetworkCore {
    constructor(i, t) {
      super(i, t);
      const c = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new r.UrlConfiguration(
          r.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, t, c, l, s) {
      return e(this, void 0, void 0, function* () {
        var o, d, h, f, p, _;
        const v = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let g = {
          user: l,
          hash:
            (h =
              (d = (o = this._option) === null || o === void 0 ? void 0 : o.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (v?.has_updates) {
          const m =
            v?.hash_used !==
            ((_ =
              (p = (f = this._option) === null || f === void 0 ? void 0 : f.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2");
          g = Object.assign(Object.assign({}, g), {
            sinceTime: s && !m ? v.time : 0,
            previousDerivedFields: "derived_fields" in v && s ? v.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: v.full_checksum,
            partialUserMatchSinceTime: m ? 0 : v.time,
          });
        }
        return this._fetchEvaluations(i, v, g, c);
      });
    }
    _fetchEvaluations(i, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var s, o;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (s = d?.body) !== null && s !== void 0 ? s : null;
        if (
          t?.has_updates !== !0 ||
          ((o = d.body) === null || o === void 0 ? void 0 : o.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const h = (0, a._resolveDeltasResponse)(t, d.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              i,
              t,
              Object.assign(Object.assign(Object.assign({}, c), h), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((z.default = u), z);
}
var Ge = {},
  En;
function Ks() {
  if (En) return Ge;
  ((En = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge._makeParamStoreGetter = void 0));
  const e = D(),
    r = { disableExposureLog: !0 };
  function a(o) {
    return o == null || o.disableExposureLog === !1;
  }
  function u(o, d) {
    return d != null && !(0, e._isTypeMatch)(o, d);
  }
  function n(o, d) {
    return o.value;
  }
  function i(o, d, h) {
    return o.getFeatureGate(d.gate_name, a(h) ? void 0 : r).value ? d.pass_value : d.fail_value;
  }
  function t(o, d, h, f) {
    const _ = o.getDynamicConfig(d.config_name, a(f) ? void 0 : r).get(d.param_name);
    return u(_, h) ? h : _;
  }
  function c(o, d, h, f) {
    const _ = o.getExperiment(d.experiment_name, a(f) ? void 0 : r).get(d.param_name);
    return u(_, h) ? h : _;
  }
  function l(o, d, h, f) {
    const _ = o.getLayer(d.layer_name, a(f) ? void 0 : r).get(d.param_name);
    return u(_, h) ? h : _;
  }
  function s(o, d, h) {
    return (f, p) => {
      if (d == null) return p;
      const _ = d[f];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return n(_);
        case "gate":
          return i(o, _, h);
        case "dynamic_config":
          return t(o, _, p, h);
        case "experiment":
          return c(o, _, p, h);
        case "layer":
          return l(o, _, p, h);
        default:
          return p;
      }
    };
  }
  return ((Ge._makeParamStoreGetter = s), Ge);
}
var x = {},
  On;
function Ws() {
  if (On) return x;
  On = 1;
  var e =
    (x && x.__awaiter) ||
    function (n, i, t, c) {
      function l(s) {
        return s instanceof t
          ? s
          : new t(function (o) {
              o(s);
            });
      }
      return new (t || (t = Promise))(function (s, o) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            o(_);
          }
        }
        function h(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            o(_);
          }
        }
        function f(p) {
          p.done ? s(p.value) : l(p.value).then(d, h);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.StatsigEvaluationsDataAdapter = void 0));
  const r = D(),
    a = wi();
  let u = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, t, c) {
      (super.attach(i, t, c),
        c !== null && c instanceof a.default
          ? (this._network = c)
          : (this._network = new a.default(t ?? {})));
    }
    getDataAsync(i, t, c) {
      return this._getDataAsyncImpl(i, (0, r._normalizeUser)(t, this._options), c);
    }
    prefetchData(i, t) {
      return this._prefetchDataImpl(i, t);
    }
    setData(i) {
      const t = (0, r._typedJsonParse)(i, "has_updates", "data");
      t && "user" in t
        ? super.setData(i, t.user)
        : r.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(i, t) {
      super.setData(i, t);
    }
    _fetchFromNetwork(i, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var s;
        const o = yield (s = this._network) === null || s === void 0
          ? void 0
          : s.fetchEvaluations(this._getSdkKey(), i, c?.priority, t, l);
        return o ?? null;
      });
    }
    _getCacheKey(i) {
      var t;
      const c = (0, r._getStorageKey)(
        this._getSdkKey(),
        i,
        (t = this._options) === null || t === void 0 ? void 0 : t.customUserCacheKeyFunc,
      );
      return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(i, t) {
      return i.fullUserHash != null && i.fullUserHash === (0, r._getFullUserHash)(t);
    }
  };
  return ((x.StatsigEvaluationsDataAdapter = u), x);
}
var Sn;
function Hs() {
  if (Sn) return V;
  Sn = 1;
  var e =
    (V && V.__awaiter) ||
    function (c, l, s, o) {
      function d(h) {
        return h instanceof s
          ? h
          : new s(function (f) {
              f(h);
            });
      }
      return new (s || (s = Promise))(function (h, f) {
        function p(g) {
          try {
            v(o.next(g));
          } catch (m) {
            f(m);
          }
        }
        function _(g) {
          try {
            v(o.throw(g));
          } catch (m) {
            f(m);
          }
        }
        function v(g) {
          g.done ? h(g.value) : d(g.value).then(p, _);
        }
        v((o = o.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(V, "__esModule", { value: !0 });
  const r = D(),
    a = Vs(),
    u = wi(),
    n = Ks(),
    i = Ws();
  let t = class Bt extends r.StatsigClientBase {
    static instance(l) {
      const s = (0, r._getStatsigGlobal)().instance(l);
      return s instanceof Bt
        ? s
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Bt(l ?? "", {}));
    }
    constructor(l, s, o = null) {
      var d, h;
      r.SDKType._setClientType(l, "javascript-client");
      const f = new u.default(o, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (d = o?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
        f,
        o,
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
        (this._user = this._configureUser(s, o)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (h = o?.plugins) !== null && h !== void 0 ? h : [];
      for (const _ of p) _.bind(this);
    }
    initializeSync(l) {
      var s;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((s = this._store.getWarnings()) !== null && s !== void 0 ? s : []),
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
    updateUserSync(l, s) {
      const o = performance.now();
      try {
        return this._updateUserSyncImpl(l, s, o);
      } catch (d) {
        const h = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(h, o);
      }
    }
    _updateUserSyncImpl(l, s, o) {
      var d;
      const h = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && h.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = s?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && f?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - o,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          )
        : (this._runPostUpdate(f ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - o,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          ));
    }
    updateUserAsync(l, s) {
      return e(this, void 0, void 0, function* () {
        const o = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, s);
        } catch (d) {
          const h = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(h, o);
        }
      });
    }
    _updateUserAsyncImpl(l, s) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const o = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(o);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, o, s)),
          o !== this._user)
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
    checkGate(l, s) {
      return this.getFeatureGate(l, s).value;
    }
    logEvent(l, s, o) {
      const d = typeof l == "string" ? { eventName: l, value: s, metadata: o } : l;
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
    _createErrorUpdateDetails(l, s) {
      var o;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - s,
        l,
        null,
        [...((o = this._store.getWarnings()) !== null && o !== void 0 ? o : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, s) {
      this.dataAdapter.getDataAsync(l, s, { priority: "low" }).catch((o) => {
        r.Log.error("An error occurred after update.", o);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, s) {
      var o;
      const d = (0, r._normalizeUser)(l, s),
        h = (o = d.customIDs) === null || o === void 0 ? void 0 : o.stableID;
      return (h && r.StableID.setOverride(h, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, s) {
      var o, d;
      const { result: h, details: f } = this._store.getGate(l),
        p = (0, r._makeFeatureGate)(l, f, h),
        _ =
          (d = (o = this.overrideAdapter) === null || o === void 0 ? void 0 : o.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(o, p, this._user, s),
        v = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createGateExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "gate_evaluation", gate: v }),
        v
      );
    }
    _getDynamicConfigImpl(l, s) {
      var o, d;
      const { result: h, details: f } = this._store.getConfig(l),
        p = (0, r._makeDynamicConfig)(l, f, h),
        _ =
          (d =
            (o = this.overrideAdapter) === null || o === void 0
              ? void 0
              : o.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(o, p, this._user, s),
        v = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, v, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: v }),
        v
      );
    }
    _getExperimentImpl(l, s) {
      var o, d, h, f;
      const { result: p, details: _ } = this._store.getConfig(l),
        v = (0, r._makeExperiment)(l, _, p);
      v.__evaluation != null &&
        (v.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (d = (o = v.__evaluation) === null || o === void 0 ? void 0 : o.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const g =
          (f =
            (h = this.overrideAdapter) === null || h === void 0
              ? void 0
              : h.getExperimentOverride) === null || f === void 0
            ? void 0
            : f.call(h, v, this._user, s),
        m = g ?? v;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(l, s) {
      var o, d, h;
      const { result: f, details: p } = this._store.getLayer(l),
        _ = (0, r._makeLayer)(l, p, f),
        v =
          (d =
            (o = this.overrideAdapter) === null || o === void 0 ? void 0 : o.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(o, _, this._user, s);
      s?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const g = (0, r._mergeOverride)(
        _,
        v,
        (h = v?.__value) !== null && h !== void 0 ? h : _.__value,
        (m) => {
          s?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, r._createLayerParameterExposure)(
                this._user,
                g,
                m,
                this._store.getExposureMapping(),
              ),
              s,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: g }), g);
    }
    _getParameterStoreImpl(l, s) {
      var o, d;
      const { result: h, details: f } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const p = {
          name: l,
          details: f,
          __configuration: h,
          get: (0, n._makeParamStoreGetter)(this, h, s),
        },
        _ =
          (d =
            (o = this.overrideAdapter) === null || o === void 0
              ? void 0
              : o.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(o, p, s);
      return (
        _ != null &&
          ((p.__configuration = _.config),
          (p.details = _.details),
          (p.get = (0, n._makeParamStoreGetter)(this, _.config, s))),
        p
      );
    }
  };
  return ((V.default = t), V);
}
var Rn;
function Js() {
  return (
    Rn ||
      ((Rn = 1),
      (function (e) {
        var r =
            (L && L.__createBinding) ||
            (Object.create
              ? function (t, c, l, s) {
                  s === void 0 && (s = l);
                  var o = Object.getOwnPropertyDescriptor(c, l);
                  ((!o || ("get" in o ? !c.__esModule : o.writable || o.configurable)) &&
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(t, s, o));
                }
              : function (t, c, l, s) {
                  (s === void 0 && (s = l), (t[s] = c[l]));
                }),
          a =
            (L && L.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const u = D(),
          n = Hs();
        ((e.StatsigClient = n.default), a(D(), e));
        const i = Object.assign((0, u._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(L)),
    L
  );
}
var Ve = {},
  ze = {},
  Pn;
function Ys() {
  if (Pn) return ze;
  ((Pn = 1),
    Object.defineProperty(ze, "__esModule", { value: !0 }),
    (ze.initFeatureFlags = void 0));
  const e = S(),
    r = R(),
    a = $e(),
    u = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((s) => typeof s == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (t(l), i("initFeatureFlags", { user: l.user }));
  return (
    (ze.initFeatureFlags = (0, a.withRateLimiter)(
      c,
      u,
      n,
      `Feature flags initialisation calls are rate limited at ${u}req/${n / 1e3}s`,
    )),
    ze
  );
}
var In;
function Xs() {
  if (In) return Ve;
  ((In = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.ForgeDataAdapter = void 0));
  const e = Ys();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(u, n, i) {
      var t;
      if (u) return u;
      this.environment = ((t = this.options) === null || t === void 0 ? void 0 : t.environment) || {
        tier: "development",
      };
      const c = { ...n, statsigEnvironment: this.environment },
        l = await (0, e.initFeatureFlags)({ user: c }),
        s = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = s), s);
    }
    getDataSync(u) {
      return this.cache;
    }
    async attach(u, n, i) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(u) {}
    async setDataLegacy(u) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Ve.ForgeDataAdapter = r), Ve);
}
var Ft = {},
  Cn;
function Ei() {
  return (
    Cn ||
      ((Cn = 1),
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
      })(Ft)),
    Ft
  );
}
var Ke = {},
  An;
function Zs() {
  if (An) return Ke;
  ((An = 1),
    Object.defineProperty(Ke, "__esModule", { value: !0 }),
    (Ke.trackFeatureFlagEvent = void 0));
  const e = S(),
    r = R(),
    a = Ei(),
    u = $e(),
    n = 500,
    i = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (s) => {
      if (!s || !s.type || !s.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(s.type.toUpperCase() in a.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(s).some((o) => typeof o == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (s) => (c(s), t("trackFeatureFlagEvent", s));
  return (
    (Ke.trackFeatureFlagEvent = (0, u.withRateLimiter)(
      l,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Ke
  );
}
var jn;
function Qs() {
  if (jn) return Le;
  ((jn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le.ForgeFeatureFlags = void 0));
  const e = Js(),
    r = Xs(),
    a = Ei(),
    u = Zs();
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
      const s = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (l = s.environment) === null || l === void 0 ? void 0 : l.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(t), s)),
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
  return ((Le.ForgeFeatureFlags = n), Le);
}
var qn;
function $s() {
  return (
    qn ||
      ((qn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Qs();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Mt)),
    Mt
  );
}
var Mn;
function eo() {
  return (
    Mn ||
      ((Mn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = I;
        var a = Mi();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          r.__exportStar(He(), e),
          r.__exportStar(Bi(), e),
          r.__exportStar(rt(), e),
          r.__exportStar(hs(), e),
          r.__exportStar(ps(), e),
          r.__exportStar(ys(), e),
          r.__exportStar(ws(), e),
          r.__exportStar(Es(), e),
          r.__exportStar(Rs(), e),
          r.__exportStar(As(), e),
          (e.i18n = r.__importStar(js())),
          r.__exportStar(Bs(), e),
          r.__exportStar(Gs(), e),
          r.__exportStar($s(), e));
      })(st)),
    st
  );
}
var We = eo();
const to = "_container_16ann_1",
  ro = "_header_16ann_9",
  no = "_controls_16ann_20",
  io = "_searchSection_16ann_28",
  so = "_searchInput_16ann_34",
  oo = "_orgSelect_16ann_35",
  ao = "_input_16ann_36",
  uo = "_select_16ann_37",
  lo = "_addButton_16ann_63",
  co = "_addForm_16ann_79",
  fo = "_submitButton_16ann_88",
  _o = "_spinner_16ann_108",
  vo = "_spinnerInner_16ann_113",
  ho = "_tableContainer_16ann_117",
  go = "_table_16ann_117",
  po = "_stats_16ann_146",
  mo = "_loadingContainer_16ann_155",
  P = {
    container: to,
    header: ro,
    controls: no,
    searchSection: io,
    searchInput: so,
    orgSelect: oo,
    input: ao,
    select: uo,
    addButton: lo,
    addForm: co,
    submitButton: fo,
    spinner: _o,
    spinnerInner: vo,
    tableContainer: ho,
    table: go,
    stats: po,
    loadingContainer: mo,
  },
  Fn = () =>
    w.jsx("div", { className: P.spinner, children: w.jsx("div", { className: P.spinnerInner }) });
function yo() {
  const [e, r] = A.useState([]),
    [a, u] = A.useState([]),
    [n, i] = A.useState(""),
    [t, c] = A.useState(null),
    [l, s] = A.useState(null),
    [o, d] = A.useState(""),
    [h, f] = A.useState(null),
    [p, _] = A.useState(!1),
    [v, g] = A.useState(!0),
    [m, y] = A.useState(!1),
    E = async () => {
      try {
        const b = await We.invoke("getUsers", {
          searchTerm: n || void 0,
          organizationId: t || void 0,
        });
        r(b);
      } catch (b) {
        console.error("Error fetching users:", b);
      }
    },
    O = async () => {
      try {
        const b = await We.invoke("getOrganizations");
        u(b);
      } catch (b) {
        console.error("Error fetching organizations:", b);
      }
    },
    C = async () => {
      try {
        const b = await We.invoke("getUserStats");
        s(b);
      } catch (b) {
        console.error("Error fetching stats:", b);
      }
    },
    F = async () => {
      g(!0);
      try {
        await Promise.all([E(), O(), C()]);
      } finally {
        g(!1);
      }
    };
  A.useEffect(() => {
    F();
  }, [n, t]);
  const Nt = async () => {
    if (!(!o || !h)) {
      y(!0);
      try {
        (await We.invoke("createUser", { name: o, organizationId: h }),
          d(""),
          f(null),
          _(!1),
          await F());
      } catch (b) {
        console.error("Error adding user:", b);
      } finally {
        y(!1);
      }
    }
  };
  return v
    ? w.jsxs("div", {
        className: P.loadingContainer,
        children: [w.jsx(Fn, {}), w.jsx("p", { children: "Loading data..." })],
      })
    : w.jsxs("div", {
        className: P.container,
        children: [
          w.jsx("header", {
            className: P.header,
            children: w.jsx("h1", { children: "OrgTracker" }),
          }),
          w.jsxs("div", {
            className: P.controls,
            children: [
              w.jsxs("div", {
                className: P.searchSection,
                children: [
                  w.jsx("input", {
                    type: "text",
                    placeholder: "🔍 Search by name...",
                    value: n,
                    onChange: (b) => i(b.target.value),
                    className: P.searchInput,
                  }),
                  w.jsxs("select", {
                    value: t || "",
                    onChange: (b) => c(b.target.value ? Number(b.target.value) : null),
                    className: P.orgSelect,
                    children: [
                      w.jsx("option", { value: "", children: "All Organizations" }),
                      a.map((b) =>
                        w.jsxs(
                          "option",
                          {
                            value: b.id,
                            children: [b.name, " (", l?.orgBreakdown[b.id] || 0, ")"],
                          },
                          b.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              w.jsx("button", {
                className: P.addButton,
                onClick: () => _(!p),
                children: p ? "Cancel" : "+ Add User",
              }),
            ],
          }),
          p &&
            w.jsxs("div", {
              className: P.addForm,
              children: [
                w.jsx("input", {
                  type: "text",
                  placeholder: "User Name",
                  value: o,
                  onChange: (b) => d(b.target.value),
                  className: P.input,
                  disabled: m,
                }),
                w.jsxs("select", {
                  value: h || "",
                  onChange: (b) => f(Number(b.target.value)),
                  className: P.select,
                  disabled: m,
                  children: [
                    w.jsx("option", { value: "", children: "Select Organization" }),
                    a.map((b) => w.jsx("option", { value: b.id, children: b.name }, b.id)),
                  ],
                }),
                w.jsx("button", {
                  onClick: Nt,
                  className: P.submitButton,
                  disabled: !o || !h || m,
                  style: {
                    opacity: !o || !h || m ? 0.5 : 1,
                    cursor: !o || !h || m ? "not-allowed" : "pointer",
                  },
                  children: m
                    ? w.jsxs(w.Fragment, {
                        children: [
                          w.jsx(Fn, {}),
                          w.jsx("span", { style: { marginLeft: "8px" }, children: "Adding..." }),
                        ],
                      })
                    : "Add User",
                }),
              ],
            }),
          w.jsx("div", {
            className: P.tableContainer,
            children: w.jsxs("table", {
              className: P.table,
              children: [
                w.jsx("thead", {
                  children: w.jsxs("tr", {
                    children: [
                      w.jsx("th", { children: "👤 User Name" }),
                      w.jsx("th", { children: "🏢 Organization" }),
                    ],
                  }),
                }),
                w.jsx("tbody", {
                  children: e.map((b) =>
                    w.jsxs(
                      "tr",
                      {
                        children: [
                          w.jsx("td", { children: b.users.name }),
                          w.jsx("td", { children: b.organization.name }),
                        ],
                      },
                      b.users.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
          w.jsx("div", {
            className: P.stats,
            children: w.jsxs("p", { children: ["Total Users: ", l?.totalUsers || 0] }),
          }),
        ],
      });
}
const bo = document.getElementById("root"),
  wo = Oi.createRoot(bo),
  Tn = () => {
    wo.render(w.jsx(yo, {}));
  };
We.view.theme
  .enable()
  .then(() => {
    Tn();
  })
  .catch((e) => {
    (console.error(e.message), Tn());
  });
