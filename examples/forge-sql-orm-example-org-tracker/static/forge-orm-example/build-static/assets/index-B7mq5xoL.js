const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-CT8OtY7f.js", "./lodash-vendor-Cp37rRJM.js"]),
) => i.map((i) => d[i]);
import { r as Tn, c as wi } from "./react-dom-vendor-BXC0oJZi.js";
import { g as Ei, r as Oi } from "./lodash-vendor-Cp37rRJM.js";
import { r as F } from "./client-core-vendor-BNfihzwH.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const t of i.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
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
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = o(n);
    fetch(n.href, i);
  }
})();
var nt = { exports: {} },
  K = {};
var Nt;
function Si() {
  if (Nt) return K;
  Nt = 1;
  var e = Tn(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, s) {
    var u,
      d = {},
      v = null,
      f = null;
    (s !== void 0 && (v = "" + s),
      l.key !== void 0 && (v = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (u in l) a.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: r, type: c, key: v, ref: f, props: d, _owner: n.current };
  }
  return ((K.Fragment = o), (K.jsx = t), (K.jsxs = t), K);
}
var Lt;
function Ri() {
  return (Lt || ((Lt = 1), (nt.exports = Si())), nt.exports);
}
var w = Ri(),
  A = Tn(),
  it = {},
  Tt = function (e, r) {
    return (
      (Tt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, a) {
            o.__proto__ = a;
          }) ||
        function (o, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (o[n] = a[n]);
        }),
      Tt(e, r)
    );
  };
function Dn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Tt(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var Ye = function () {
  return (
    (Ye =
      Object.assign ||
      function (r) {
        for (var o, a = 1, n = arguments.length; a < n; a++) {
          o = arguments[a];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }),
    Ye.apply(this, arguments)
  );
};
function Fn(e, r) {
  var o = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      r.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (o[a[n]] = e[a[n]]);
  return o;
}
function Bn(e, r, o, a) {
  var n = arguments.length,
    i = n < 3 ? r : a === null ? (a = Object.getOwnPropertyDescriptor(r, o)) : a,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, o, a);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (i = (n < 3 ? t(i) : n > 3 ? t(r, o, i) : t(r, o)) || i);
  return (n > 3 && i && Object.defineProperty(r, o, i), i);
}
function Un(e, r) {
  return function (o, a) {
    r(o, a, e);
  };
}
function kn(e, r, o, a, n, i) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var c = a.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      s = !r && e ? (a.static ? e : e.prototype) : null,
      u = r || (s ? Object.getOwnPropertyDescriptor(s, a.name) : {}),
      d,
      v = !1,
      f = o.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var _ in a) p[_] = _ === "access" ? {} : a[_];
    for (var _ in a.access) p.access[_] = a.access[_];
    p.addInitializer = function (g) {
      if (v) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(g || null));
    };
    var h = (0, o[f])(c === "accessor" ? { get: u.get, set: u.set } : u[l], p);
    if (c === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = t(h.get)) && (u.get = d),
        (d = t(h.set)) && (u.set = d),
        (d = t(h.init)) && n.unshift(d));
    } else (d = t(h)) && (c === "field" ? n.unshift(d) : (u[l] = d));
  }
  (s && Object.defineProperty(s, a.name, u), (v = !0));
}
function Nn(e, r, o) {
  for (var a = arguments.length > 2, n = 0; n < r.length; n++)
    o = a ? r[n].call(e, o) : r[n].call(e);
  return a ? o : void 0;
}
function Ln(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function xn(e, r, o) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", r) : r })
  );
}
function Gn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Vn(e, r, o, a) {
  function n(i) {
    return i instanceof o
      ? i
      : new o(function (t) {
          t(i);
        });
  }
  return new (o || (o = Promise))(function (i, t) {
    function c(u) {
      try {
        s(a.next(u));
      } catch (d) {
        t(d);
      }
    }
    function l(u) {
      try {
        s(a.throw(u));
      } catch (d) {
        t(d);
      }
    }
    function s(u) {
      u.done ? i(u.value) : n(u.value).then(c, l);
    }
    s((a = a.apply(e, r || [])).next());
  });
}
function zn(e, r) {
  var o = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    a,
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
    return function (u) {
      return l([s, u]);
    };
  }
  function l(s) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), s[0] && (o = 0)), o; )
      try {
        if (
          ((a = 1),
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
            return (o.label++, { value: s[1], done: !1 });
          case 5:
            (o.label++, (n = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((i = o.trys), !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
              o.label = s[1];
              break;
            }
            if (s[0] === 6 && o.label < i[1]) {
              ((o.label = i[1]), (i = s));
              break;
            }
            if (i && o.label < i[2]) {
              ((o.label = i[2]), o.ops.push(s));
              break;
            }
            (i[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        s = r.call(e, o);
      } catch (u) {
        ((s = [6, u]), (n = 0));
      } finally {
        a = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var Ze = Object.create
  ? function (e, r, o, a) {
      a === void 0 && (a = o);
      var n = Object.getOwnPropertyDescriptor(r, o);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[o];
          },
        }),
        Object.defineProperty(e, a, n));
    }
  : function (e, r, o, a) {
      (a === void 0 && (a = o), (e[a] = r[o]));
    };
function Wn(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && Ze(r, e, o);
}
function Xe(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    o = r && e[r],
    a = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && a >= e.length && (e = void 0), { value: e && e[a++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bt(e, r) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var a = o.call(e),
    n,
    i = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = a.next()).done; ) i.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (o = a.return) && o.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return i;
}
function Kn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Bt(arguments[r]));
  return e;
}
function Hn() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var a = Array(e), n = 0, r = 0; r < o; r++)
    for (var i = arguments[r], t = 0, c = i.length; t < c; t++, n++) a[n] = i[t];
  return a;
}
function Jn(e, r, o) {
  if (o || arguments.length === 2)
    for (var a = 0, n = r.length, i; a < n; a++)
      (i || !(a in r)) && (i || (i = Array.prototype.slice.call(r, 0, a)), (i[a] = r[a]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function W(e) {
  return this instanceof W ? ((this.v = e), this) : new W(e);
}
function Yn(e, r, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = o.apply(e, r || []),
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
    a[f] &&
      ((n[f] = function (_) {
        return new Promise(function (h, g) {
          i.push([f, _, h, g]) > 1 || l(f, _);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function l(f, p) {
    try {
      s(a[f](p));
    } catch (_) {
      v(i[0][3], _);
    }
  }
  function s(f) {
    f.value instanceof W ? Promise.resolve(f.value.v).then(u, d) : v(i[0][2], f);
  }
  function u(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function v(f, p) {
    (f(p), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function Xn(e) {
  var r, o;
  return (
    (r = {}),
    a("next"),
    a("throw", function (n) {
      throw n;
    }),
    a("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function a(n, i) {
    r[n] = e[n]
      ? function (t) {
          return (o = !o) ? { value: W(e[n](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Zn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    o;
  return r
    ? r.call(e)
    : ((e = typeof Xe == "function" ? Xe(e) : e[Symbol.iterator]()),
      (o = {}),
      a("next"),
      a("throw"),
      a("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function a(i) {
    o[i] =
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
function Qn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var Pi = Object.create
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
          var o = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (o[o.length] = a);
          return o;
        }),
      Dt(e)
    );
  };
function $n(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o = Dt(e), a = 0; a < o.length; a++) o[a] !== "default" && Ze(r, e, o[a]);
  return (Pi(r, e), r);
}
function ei(e) {
  return e && e.__esModule ? e : { default: e };
}
function ti(e, r, o, a) {
  if (o === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? a : o === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function ri(e, r, o, a, n) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? n.call(e, o) : n ? (n.value = o) : r.set(e, o), o);
}
function ni(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function ii(e, r, o) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var a, n;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      a = r[Symbol.asyncDispose];
    }
    if (a === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((a = r[Symbol.dispose]), o && (n = a));
    }
    if (typeof a != "function") throw new TypeError("Object not disposable.");
    (n &&
      (a = function () {
        try {
          n.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: r, dispose: a, async: o }));
  } else o && e.stack.push({ async: !0 });
  return r;
}
var Ii =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, o) {
        var a = new Error(o);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function si(e) {
  function r(i) {
    ((e.error = e.hasError ? new Ii(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var o,
    a = 0;
  function n() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && a === 1) return ((a = 0), e.stack.push(o), Promise.resolve().then(n));
        if (o.dispose) {
          var i = o.dispose.call(o.value);
          if (o.async)
            return (
              (a |= 2),
              Promise.resolve(i).then(n, function (t) {
                return (r(t), n());
              })
            );
        } else a |= 1;
      } catch (t) {
        r(t);
      }
    if (a === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function oi(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, a, n, i, t) {
        return a
          ? r
            ? ".jsx"
            : ".js"
          : n && (!i || !t)
            ? o
            : n + i + "." + t.toLowerCase() + "js";
      })
    : e;
}
const Ci = {
    __extends: Dn,
    __assign: Ye,
    __rest: Fn,
    __decorate: Bn,
    __param: Un,
    __esDecorate: kn,
    __runInitializers: Nn,
    __propKey: Ln,
    __setFunctionName: xn,
    __metadata: Gn,
    __awaiter: Vn,
    __generator: zn,
    __createBinding: Ze,
    __exportStar: Wn,
    __values: Xe,
    __read: Bt,
    __spread: Kn,
    __spreadArrays: Hn,
    __spreadArray: Jn,
    __await: W,
    __asyncGenerator: Yn,
    __asyncDelegator: Xn,
    __asyncValues: Zn,
    __makeTemplateObject: Qn,
    __importStar: $n,
    __importDefault: ei,
    __classPrivateFieldGet: ti,
    __classPrivateFieldSet: ri,
    __classPrivateFieldIn: ni,
    __addDisposableResource: ii,
    __disposeResources: si,
    __rewriteRelativeImportExtension: oi,
  },
  Ai = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: ii,
        get __assign() {
          return Ye;
        },
        __asyncDelegator: Xn,
        __asyncGenerator: Yn,
        __asyncValues: Zn,
        __await: W,
        __awaiter: Vn,
        __classPrivateFieldGet: ti,
        __classPrivateFieldIn: ni,
        __classPrivateFieldSet: ri,
        __createBinding: Ze,
        __decorate: Bn,
        __disposeResources: si,
        __esDecorate: kn,
        __exportStar: Wn,
        __extends: Dn,
        __generator: zn,
        __importDefault: ei,
        __importStar: $n,
        __makeTemplateObject: Qn,
        __metadata: Gn,
        __param: Un,
        __propKey: Ln,
        __read: Bt,
        __rest: Fn,
        __rewriteRelativeImportExtension: oi,
        __runInitializers: Nn,
        __setFunctionName: xn,
        __spread: Kn,
        __spreadArray: Jn,
        __spreadArrays: Hn,
        __values: Xe,
        default: Ci,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I = Ei(Ai);
var H = {},
  xt;
function ji() {
  return (
    xt ||
      ((xt = 1),
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
var st = {},
  ot = {},
  J = {},
  Y = {},
  Gt;
function R() {
  if (Gt) return Y;
  ((Gt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Y.BridgeAPIError = e), Y);
}
var Vt;
function S() {
  if (Vt) return J;
  ((Vt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.getCallBridge = void 0));
  const e = R();
  function r(a) {
    return !!a?.callBridge;
  }
  const o = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((J.getCallBridge = o), J);
}
var X = {},
  zt;
function Qe() {
  if (zt) return X;
  ((zt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.withRateLimiter = void 0));
  const e = R(),
    r = (o, a, n, i) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const s = Date.now();
        if ((s - t > n && ((t = s), (c = 0)), c >= a))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), o(...l));
      };
    };
  return ((X.withRateLimiter = r), X);
}
var Wt;
function Mi() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = S(),
          o = R(),
          a = Qe(),
          n = (0, r.getCallBridge)(),
          i = (l) => {
            if (l && Object.values(l).some((s) => typeof s == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, s) => {
            if (typeof l != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (i(s), n("invoke", { functionKey: l, payload: s }));
          };
        e.invoke = (0, a.withRateLimiter)(
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
var Kt;
function Ke() {
  return (
    Kt ||
      ((Kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Mi(), e));
      })(st)),
    st
  );
}
var at = {},
  Z = {},
  ut = {},
  Ht;
function ai() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = S(),
          o = R(),
          a = Qe(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((v) => typeof v == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (d) => async (v) => {
            l(v);
            const f = { ...v, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await c("invoke", f),
              { success: _, payload: h, error: g } = p ?? {},
              m = { ...(_ ? h : g) };
            if (m && m.headers)
              for (const y in m.headers)
                Array.isArray(m.headers[y]) && (m.headers[y] = m.headers[y].join(","));
            return m;
          },
          u = (d) => {
            const v = s(d);
            return (0, a.withRateLimiter)(
              v,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(ut)),
    ut
  );
}
var Jt;
function qi() {
  if (Jt) return Z;
  ((Jt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.invokeRemote = void 0));
  const e = ai(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((Z.invokeRemote = r), Z);
}
var Q = {},
  Yt;
function Ti() {
  if (Yt) return Q;
  ((Yt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeService = void 0));
  const e = ai(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((Q.invokeService = r), Q);
}
var Xt;
function Di() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(qi(), e), r.__exportStar(Ti(), e));
      })(at)),
    at
  );
}
var lt = {},
  $ = {},
  ee = {},
  Zt;
function Fi() {
  if (Zt) return ee;
  ((Zt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.submit = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await o("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((ee.submit = a), ee);
}
var te = {},
  Qt;
function Bi() {
  if (Qt) return te;
  ((Qt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.close = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await o("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((te.close = a), te);
}
var re = {},
  $t;
function Ui() {
  if ($t) return re;
  (($t = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.open = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async () => {
      try {
        if ((await o("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((re.open = a), re);
}
var ne = {},
  er;
function ki() {
  if (er) return ne;
  ((er = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.refresh = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await o("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((ne.refresh = a), ne);
}
var ie = {},
  tr;
function Ni() {
  if (tr) return ie;
  ((tr = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.createHistory = void 0));
  const r = (0, S().getCallBridge)(),
    o = async () => {
      const a = await r("createHistory");
      return (
        a.listen((n) => {
          a.location = n;
        }),
        a
      );
    };
  return ((ie.createHistory = o), ie);
}
var se = {},
  ct = {},
  M = {},
  rr;
function ui() {
  return (
    rr ||
      ((rr = 1),
      Object.defineProperty(M, "__esModule", { value: !0 }),
      (M.FORGE_SUPPORTED_LOCALE_CODES = M.I18N_BUNDLE_FOLDER_NAME = M.I18N_INFO_FILE_NAME = void 0),
      (M.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (M.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (M.FORGE_SUPPORTED_LOCALE_CODES = [
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
    M
  );
}
var B = {},
  nr;
function Li() {
  if (nr) return B;
  ((nr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.TranslationsGetter = B.TranslationGetterError = void 0));
  const e = (a, n) => {
    a.includes(n) || a.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  B.TranslationGetterError = r;
  class o {
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
        l.filter((u) => t.includes(u))
      );
    }
  }
  return ((B.TranslationsGetter = o), B);
}
var oe = {},
  dt = {},
  ir;
function li() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = I.__importDefault(Oi()),
          a = (i, t, c) => {
            const l = i[c];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = a;
        const n = (i, t) => {
          let c = i[t];
          if (!c) {
            const l = t.split(".");
            l.length > 1 && (c = (0, o.default)(i, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(dt)),
    dt
  );
}
var sr;
function xi() {
  if (sr) return oe;
  ((sr = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.Translator = void 0));
  const e = li();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(a, n) {
      ((this.locale = a), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(a) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(a);
      if (n === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(i, a);
          if (t !== null) {
            n = t;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(a, n));
      }
      return n;
    }
  }
  return ((oe.Translator = r), oe);
}
var ae = {},
  or;
function Gi() {
  if (or) return ae;
  ((or = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.ensureLocale = void 0));
  const e = ui(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    a = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, t) => {
        const [c] = t.split("-");
        return (i[c] || (i[c] = t), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const t = i.replace("_", "-");
      return r.has(t) ? t : (a[t] ?? o[t] ?? null);
    };
  return ((ae.ensureLocale = n), ae);
}
var ft = {},
  ar;
function Vi() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          o = (s) => typeof s?.i18n == "string",
          a = (s) => s.startsWith("connect-"),
          n = (s) => s.startsWith("core:"),
          i = (s) => {
            const u = new Set(),
              d = (v, f) =>
                !r(v) || u.has(v)
                  ? []
                  : (u.add(v),
                    Object.entries(v).flatMap(([p, _]) => {
                      const h = [...f, p];
                      return o(_)
                        ? [{ propertyPath: h, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((g) => d(g, h))
                          : d(_, h);
                    }));
            return d(s, []);
          },
          t = (s) =>
            Object.entries(s).flatMap(([u, d]) =>
              !a(u) && !n(u) && d && Array.isArray(d) && d.length > 0 ? d.map((v) => [v, u]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (s) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const v = i(d[0]);
            for (const { key: f } of v) u.add(f);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (s) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(s)) {
            const v = i(d[0]);
            for (const f of v) u.push({ moduleName: d[1], ...f });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(ft)),
    ft
  );
}
var _t = {},
  ur;
function zi() {
  return (ur || ((ur = 1), Object.defineProperty(_t, "__esModule", { value: !0 })), _t);
}
var lr;
function ci() {
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
        const r = I;
        (r.__exportStar(ui(), e),
          r.__exportStar(Li(), e),
          r.__exportStar(xi(), e),
          r.__exportStar(Gi(), e));
        var o = li();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var a = Vi();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return a.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return a.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return a.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(zi(), e));
      })(ct)),
    ct
  );
}
var cr;
function Wi() {
  if (cr) return se;
  ((cr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.getContext = void 0));
  const e = S(),
    r = ci(),
    o = (0, e.getCallBridge)(),
    a = async () => {
      var n;
      const i = await o("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((se.getContext = a), se);
}
var ue = {},
  dr;
function Ki() {
  if (dr) return ue;
  ((dr = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.changeWindowTitle = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        await o("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ue.changeWindowTitle = a), ue);
}
var le = {},
  fr;
function Hi() {
  if (fr) return le;
  ((fr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.theme = void 0));
  const r = (0, S().getCallBridge)();
  return ((le.theme = { enable: () => r("enableTheming") }), le);
}
var ce = {},
  de = {},
  ht = {},
  U = {},
  _r;
function di() {
  if (_r) return U;
  ((_r = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.blobToBase64 = U.base64ToBlob = void 0));
  const e = (o, a) => {
    if (!o) return null;
    const n = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(n),
      t = new Array(i.length);
    for (let l = 0; l < i.length; l++) t[l] = i.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: a });
  };
  U.base64ToBlob = e;
  const r = (o) =>
    new Promise((a, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        a(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(o));
    });
  return ((U.blobToBase64 = r), U);
}
var hr;
function Ji() {
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
        const r = di(),
          o = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(s);
            if (u === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(s)
            );
          },
          a = async (s) => ({ data: await (0, r.blobToBase64)(s), type: s.type }),
          n = (s) => (0, r.base64ToBlob)(s.data, s.type),
          i = async (s) => {
            if (s instanceof Blob) return { ...(await a(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (s && o(s)) {
              const u = await Promise.all(
                Object.entries(s).map(async ([d, v]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(v),
                ]),
              );
              return Object.fromEntries(u);
            }
            return s;
          };
        e.serialiseBlobsInPayload = i;
        const t = (s) => {
          if (s && o(s) && "__isBlobData" in s) {
            const u = s;
            return n({ data: u.data, type: u.type });
          }
          if (Array.isArray(s)) return s.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (s && o(s)) {
            const u = {};
            for (const [d, v] of Object.entries(s)) u[d] = (0, e.deserialiseBlobsInPayload)(v);
            return u;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsBlobs)(u))
              : s && o(s)
                ? Object.values(s).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (s) =>
          s && o(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((u) => (0, e.containsSerialisedBlobs)(u))
              : s && o(s)
                ? Object.values(s).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(ht)),
    ht
  );
}
var vr;
function fi() {
  if (vr) return de;
  ((vr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.events = void 0));
  const e = S(),
    r = Ji(),
    o = (0, e.getCallBridge)(),
    a = async (i, t) => {
      let c = t;
      return (
        (0, r.containsBlobs)(t) && (c = await (0, r.serialiseBlobsInPayload)(t)),
        o("emit", { event: i, payload: c })
      );
    },
    n = (i, t) =>
      o("on", {
        event: i,
        callback: (l) => {
          let s = l;
          return (
            (0, r.containsSerialisedBlobs)(l) && (s = (0, r.deserialiseBlobsInPayload)(l)),
            t(s)
          );
        },
      });
  return ((de.events = { emit: a, on: n }), de);
}
var gr;
function Yi() {
  if (gr) return ce;
  ((gr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.emitReadyEvent = void 0));
  const e = fi(),
    r = gi(),
    o = S(),
    a = R(),
    n = (0, o.getCallBridge)(),
    i = "EXTENSION_READY",
    t = async () => {
      const c = await r.view.getContext();
      await e.events.emit(i, { localId: c.localId });
      try {
        if ((await n("emitReadyEvent")) === !1)
          throw new a.BridgeAPIError("Unable to emit ready event.");
      } catch {
        throw new a.BridgeAPIError("Unable to emit ready event.");
      }
    };
  return ((ce.emitReadyEvent = t), ce);
}
const Xi = "modulepreload",
  Zi = function (e, r) {
    return new URL(e, r).href;
  },
  pr = {},
  Qi = function (r, o, a) {
    let n = Promise.resolve();
    if (o && o.length > 0) {
      let s = function (u) {
        return Promise.all(
          u.map((d) =>
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
      n = s(
        o.map((u) => {
          if (((u = Zi(u, a)), u in pr)) return;
          pr[u] = !0;
          const d = u.endsWith(".css"),
            v = d ? '[rel="stylesheet"]' : "";
          if (a)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === u && (!d || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${v}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = d ? "stylesheet" : Xi),
            d || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = u),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            d)
          )
            return new Promise((p, _) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${u}`))));
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
  vt = {},
  _e = {},
  He = {},
  mr;
function _i() {
  if (mr) return He;
  ((mr = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.default = o));
  let e;
  const r = new Uint8Array(16);
  function o() {
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
var G = {},
  he = {},
  ve = {},
  yr;
function $i() {
  if (yr) return ve;
  ((yr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ve.default = e), ve);
}
var br;
function $e() {
  if (br) return he;
  ((br = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = r($i());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var a = o;
  return ((he.default = a), he);
}
var wr;
function et() {
  if (wr) return G;
  ((wr = 1),
    Object.defineProperty(G, "__esModule", { value: !0 }),
    (G.default = void 0),
    (G.unsafeStringify = a));
  var e = r($e());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const o = [];
  for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
  function a(t, c = 0) {
    return (
      o[t[c + 0]] +
      o[t[c + 1]] +
      o[t[c + 2]] +
      o[t[c + 3]] +
      "-" +
      o[t[c + 4]] +
      o[t[c + 5]] +
      "-" +
      o[t[c + 6]] +
      o[t[c + 7]] +
      "-" +
      o[t[c + 8]] +
      o[t[c + 9]] +
      "-" +
      o[t[c + 10]] +
      o[t[c + 11]] +
      o[t[c + 12]] +
      o[t[c + 13]] +
      o[t[c + 14]] +
      o[t[c + 15]]
    );
  }
  function n(t, c = 0) {
    const l = a(t, c);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var i = n;
  return ((G.default = i), G);
}
var Er;
function es() {
  if (Er) return _e;
  ((Er = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = o(_i()),
    r = et();
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  let a,
    n,
    i = 0,
    t = 0;
  function c(s, u, d) {
    let v = (u && d) || 0;
    const f = u || new Array(16);
    s = s || {};
    let p = s.node || a,
      _ = s.clockseq !== void 0 ? s.clockseq : n;
    if (p == null || _ == null) {
      const E = s.random || (s.rng || e.default)();
      (p == null && (p = a = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        _ == null && (_ = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let h = s.msecs !== void 0 ? s.msecs : Date.now(),
      g = s.nsecs !== void 0 ? s.nsecs : t + 1;
    const m = h - i + (g - t) / 1e4;
    if (
      (m < 0 && s.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (m < 0 || h > i) && s.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = h), (t = g), (n = _), (h += 122192928e5));
    const y = ((h & 268435455) * 1e4 + g) % 4294967296;
    ((f[v++] = (y >>> 24) & 255),
      (f[v++] = (y >>> 16) & 255),
      (f[v++] = (y >>> 8) & 255),
      (f[v++] = y & 255));
    const O = ((h / 4294967296) * 1e4) & 268435455;
    ((f[v++] = (O >>> 8) & 255),
      (f[v++] = O & 255),
      (f[v++] = ((O >>> 24) & 15) | 16),
      (f[v++] = (O >>> 16) & 255),
      (f[v++] = (_ >>> 8) | 128),
      (f[v++] = _ & 255));
    for (let E = 0; E < 6; ++E) f[v + E] = p[E];
    return u || (0, r.unsafeStringify)(f);
  }
  var l = c;
  return ((_e.default = l), _e);
}
var ge = {},
  D = {},
  pe = {},
  Or;
function hi() {
  if (Or) return pe;
  ((Or = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = r($e());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
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
  var a = o;
  return ((pe.default = a), pe);
}
var Sr;
function vi() {
  if (Sr) return D;
  ((Sr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.URL = D.DNS = void 0),
    (D.default = t));
  var e = et(),
    r = o(hi());
  function o(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function a(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let s = 0; s < c.length; ++s) l.push(c.charCodeAt(s));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  D.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  D.URL = i;
  function t(c, l, s) {
    function u(d, v, f, p) {
      var _;
      if (
        (typeof d == "string" && (d = a(d)),
        typeof v == "string" && (v = (0, r.default)(v)),
        ((_ = v) === null || _ === void 0 ? void 0 : _.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let h = new Uint8Array(16 + d.length);
      if (
        (h.set(v),
        h.set(d, v.length),
        (h = s(h)),
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
      u.name = c;
    } catch {}
    return ((u.DNS = n), (u.URL = i), u);
  }
  return D;
}
var me = {},
  Rr;
function ts() {
  if (Rr) return me;
  ((Rr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  function e(f) {
    if (typeof f == "string") {
      const p = unescape(encodeURIComponent(f));
      f = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) f[_] = p.charCodeAt(_);
    }
    return r(a(n(f), f.length * 8));
  }
  function r(f) {
    const p = [],
      _ = f.length * 32,
      h = "0123456789abcdef";
    for (let g = 0; g < _; g += 8) {
      const m = (f[g >> 5] >>> (g % 32)) & 255,
        y = parseInt(h.charAt((m >>> 4) & 15) + h.charAt(m & 15), 16);
      p.push(y);
    }
    return p;
  }
  function o(f) {
    return (((f + 64) >>> 9) << 4) + 14 + 1;
  }
  function a(f, p) {
    ((f[p >> 5] |= 128 << (p % 32)), (f[o(p) - 1] = p));
    let _ = 1732584193,
      h = -271733879,
      g = -1732584194,
      m = 271733878;
    for (let y = 0; y < f.length; y += 16) {
      const O = _,
        E = h,
        C = g,
        T = m;
      ((_ = l(_, h, g, m, f[y], 7, -680876936)),
        (m = l(m, _, h, g, f[y + 1], 12, -389564586)),
        (g = l(g, m, _, h, f[y + 2], 17, 606105819)),
        (h = l(h, g, m, _, f[y + 3], 22, -1044525330)),
        (_ = l(_, h, g, m, f[y + 4], 7, -176418897)),
        (m = l(m, _, h, g, f[y + 5], 12, 1200080426)),
        (g = l(g, m, _, h, f[y + 6], 17, -1473231341)),
        (h = l(h, g, m, _, f[y + 7], 22, -45705983)),
        (_ = l(_, h, g, m, f[y + 8], 7, 1770035416)),
        (m = l(m, _, h, g, f[y + 9], 12, -1958414417)),
        (g = l(g, m, _, h, f[y + 10], 17, -42063)),
        (h = l(h, g, m, _, f[y + 11], 22, -1990404162)),
        (_ = l(_, h, g, m, f[y + 12], 7, 1804603682)),
        (m = l(m, _, h, g, f[y + 13], 12, -40341101)),
        (g = l(g, m, _, h, f[y + 14], 17, -1502002290)),
        (h = l(h, g, m, _, f[y + 15], 22, 1236535329)),
        (_ = s(_, h, g, m, f[y + 1], 5, -165796510)),
        (m = s(m, _, h, g, f[y + 6], 9, -1069501632)),
        (g = s(g, m, _, h, f[y + 11], 14, 643717713)),
        (h = s(h, g, m, _, f[y], 20, -373897302)),
        (_ = s(_, h, g, m, f[y + 5], 5, -701558691)),
        (m = s(m, _, h, g, f[y + 10], 9, 38016083)),
        (g = s(g, m, _, h, f[y + 15], 14, -660478335)),
        (h = s(h, g, m, _, f[y + 4], 20, -405537848)),
        (_ = s(_, h, g, m, f[y + 9], 5, 568446438)),
        (m = s(m, _, h, g, f[y + 14], 9, -1019803690)),
        (g = s(g, m, _, h, f[y + 3], 14, -187363961)),
        (h = s(h, g, m, _, f[y + 8], 20, 1163531501)),
        (_ = s(_, h, g, m, f[y + 13], 5, -1444681467)),
        (m = s(m, _, h, g, f[y + 2], 9, -51403784)),
        (g = s(g, m, _, h, f[y + 7], 14, 1735328473)),
        (h = s(h, g, m, _, f[y + 12], 20, -1926607734)),
        (_ = u(_, h, g, m, f[y + 5], 4, -378558)),
        (m = u(m, _, h, g, f[y + 8], 11, -2022574463)),
        (g = u(g, m, _, h, f[y + 11], 16, 1839030562)),
        (h = u(h, g, m, _, f[y + 14], 23, -35309556)),
        (_ = u(_, h, g, m, f[y + 1], 4, -1530992060)),
        (m = u(m, _, h, g, f[y + 4], 11, 1272893353)),
        (g = u(g, m, _, h, f[y + 7], 16, -155497632)),
        (h = u(h, g, m, _, f[y + 10], 23, -1094730640)),
        (_ = u(_, h, g, m, f[y + 13], 4, 681279174)),
        (m = u(m, _, h, g, f[y], 11, -358537222)),
        (g = u(g, m, _, h, f[y + 3], 16, -722521979)),
        (h = u(h, g, m, _, f[y + 6], 23, 76029189)),
        (_ = u(_, h, g, m, f[y + 9], 4, -640364487)),
        (m = u(m, _, h, g, f[y + 12], 11, -421815835)),
        (g = u(g, m, _, h, f[y + 15], 16, 530742520)),
        (h = u(h, g, m, _, f[y + 2], 23, -995338651)),
        (_ = d(_, h, g, m, f[y], 6, -198630844)),
        (m = d(m, _, h, g, f[y + 7], 10, 1126891415)),
        (g = d(g, m, _, h, f[y + 14], 15, -1416354905)),
        (h = d(h, g, m, _, f[y + 5], 21, -57434055)),
        (_ = d(_, h, g, m, f[y + 12], 6, 1700485571)),
        (m = d(m, _, h, g, f[y + 3], 10, -1894986606)),
        (g = d(g, m, _, h, f[y + 10], 15, -1051523)),
        (h = d(h, g, m, _, f[y + 1], 21, -2054922799)),
        (_ = d(_, h, g, m, f[y + 8], 6, 1873313359)),
        (m = d(m, _, h, g, f[y + 15], 10, -30611744)),
        (g = d(g, m, _, h, f[y + 6], 15, -1560198380)),
        (h = d(h, g, m, _, f[y + 13], 21, 1309151649)),
        (_ = d(_, h, g, m, f[y + 4], 6, -145523070)),
        (m = d(m, _, h, g, f[y + 11], 10, -1120210379)),
        (g = d(g, m, _, h, f[y + 2], 15, 718787259)),
        (h = d(h, g, m, _, f[y + 9], 21, -343485551)),
        (_ = i(_, O)),
        (h = i(h, E)),
        (g = i(g, C)),
        (m = i(m, T)));
    }
    return [_, h, g, m];
  }
  function n(f) {
    if (f.length === 0) return [];
    const p = f.length * 8,
      _ = new Uint32Array(o(p));
    for (let h = 0; h < p; h += 8) _[h >> 5] |= (f[h / 8] & 255) << (h % 32);
    return _;
  }
  function i(f, p) {
    const _ = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, _, h, g, m) {
    return i(t(i(i(p, f), i(h, m)), g), _);
  }
  function l(f, p, _, h, g, m, y) {
    return c((p & _) | (~p & h), f, p, g, m, y);
  }
  function s(f, p, _, h, g, m, y) {
    return c((p & h) | (_ & ~h), f, p, g, m, y);
  }
  function u(f, p, _, h, g, m, y) {
    return c(p ^ _ ^ h, f, p, g, m, y);
  }
  function d(f, p, _, h, g, m, y) {
    return c(_ ^ (p | ~h), f, p, g, m, y);
  }
  var v = e;
  return ((me.default = v), me);
}
var Pr;
function rs() {
  if (Pr) return ge;
  ((Pr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = o(vi()),
    r = o(ts());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ge.default = n), ge);
}
var ye = {},
  be = {},
  Ir;
function ns() {
  if (Ir) return be;
  ((Ir = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((be.default = r), be);
}
var Cr;
function is() {
  if (Cr) return ye;
  ((Cr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = a(ns()),
    r = a(_i()),
    o = et();
  function a(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, l) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const s = t.random || (t.rng || r.default)();
    if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), c)) {
      l = l || 0;
      for (let u = 0; u < 16; ++u) c[l + u] = s[u];
      return c;
    }
    return (0, o.unsafeStringify)(s);
  }
  var i = n;
  return ((ye.default = i), ye);
}
var we = {},
  Ee = {},
  Ar;
function ss() {
  if (Ar) return Ee;
  ((Ar = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
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
  function o(n) {
    const i = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const u = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < u.length; ++d) n.push(u.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      l = Math.ceil(c / 16),
      s = new Array(l);
    for (let u = 0; u < l; ++u) {
      const d = new Uint32Array(16);
      for (let v = 0; v < 16; ++v)
        d[v] =
          (n[u * 64 + v * 4] << 24) |
          (n[u * 64 + v * 4 + 1] << 16) |
          (n[u * 64 + v * 4 + 2] << 8) |
          n[u * 64 + v * 4 + 3];
      s[u] = d;
    }
    ((s[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (s[l - 1][14] = Math.floor(s[l - 1][14])),
      (s[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let u = 0; u < l; ++u) {
      const d = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) d[g] = s[u][g];
      for (let g = 16; g < 80; ++g) d[g] = r(d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16], 1);
      let v = t[0],
        f = t[1],
        p = t[2],
        _ = t[3],
        h = t[4];
      for (let g = 0; g < 80; ++g) {
        const m = Math.floor(g / 20),
          y = (r(v, 5) + e(m, f, p, _) + h + i[m] + d[g]) >>> 0;
        ((h = _), (_ = p), (p = r(f, 30) >>> 0), (f = v), (v = y));
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
  var a = o;
  return ((Ee.default = a), Ee);
}
var jr;
function os() {
  if (jr) return we;
  ((jr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = o(vi()),
    r = o(ss());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((we.default = n), we);
}
var Oe = {},
  Mr;
function as() {
  if (Mr) return Oe;
  ((Mr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Oe.default = e), Oe);
}
var Se = {},
  qr;
function us() {
  if (qr) return Se;
  ((qr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.default = void 0));
  var e = r($e());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var a = o;
  return ((Se.default = a), Se);
}
var Tr;
function ls() {
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
              return o.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return a.default;
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
        var r = u(es()),
          o = u(rs()),
          a = u(is()),
          n = u(os()),
          i = u(as()),
          t = u(us()),
          c = u($e()),
          l = u(et()),
          s = u(hi());
        function u(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(vt)),
    vt
  );
}
var Dr;
function cs() {
  if (Dr) return fe;
  ((Dr = 1),
    Object.defineProperty(fe, "__esModule", { value: !0 }),
    (fe.createAdfRendererIframeProps = void 0));
  const e = ls(),
    r = async (o, a) => {
      const n = await Qi(
          () => import("./index-CT8OtY7f.js").then((u) => u.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        s = () => {
          var u, d;
          const v = document.getElementById(l),
            f = {
              type: "adf-document",
              document: (u = o.extension.macro) === null || u === void 0 ? void 0 : u.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: o.localId,
            };
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (p) => {
                var _;
                (_ = p?.iFrameResizer) === null || _ === void 0 || _.resize();
              },
            },
            v || "",
          ),
            (d = v?.contentWindow) === null || d === void 0 || d.postMessage(f, t));
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
  Fr;
function ds() {
  if (Fr) return Re;
  ((Fr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.onClose = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await o("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((Re.onClose = a), Re);
}
var Br;
function gi() {
  if (Br) return $;
  ((Br = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.view = void 0));
  const e = Fi(),
    r = Bi(),
    o = Ui(),
    a = ki(),
    n = Ni(),
    i = Wi(),
    t = Ki(),
    c = Hi(),
    l = Yi(),
    s = cs(),
    u = ds();
  return (
    ($.view = {
      submit: e.submit,
      close: r.close,
      onClose: u.onClose,
      open: o.open,
      refresh: a.refresh,
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
var Ur;
function tt() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(gi(), e));
      })(lt)),
    lt
  );
}
var gt = {},
  Pe = {},
  kr;
function fs() {
  if (kr) return Pe;
  ((kr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.router = void 0));
  const r = (0, S().getCallBridge)(),
    o = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const c = await r("getUrl", t);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
      }
    },
    a = (t) => {
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
  return ((Pe.router = { getUrl: o, navigate: a, open: n, reload: i }), Pe);
}
var Nr;
function _s() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(fs(), e));
      })(gt)),
    gt
  );
}
var pt = {},
  Ie = {},
  Lr;
function hs() {
  if (Lr) return Ie;
  ((Lr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.Modal = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = () => {};
  class n {
    constructor(t) {
      var c, l;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || a),
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
          (await o("openModal", {
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
var xr;
function vs() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(hs(), e));
      })(pt)),
    pt
  );
}
var j = {},
  k = {},
  Gr;
function gs() {
  if (Gr) return k;
  ((Gr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.productFetchApi = k.remoteFetchApi = void 0));
  const e = di(),
    r = async (t) => {
      const c = {};
      for (const [l, s] of t.entries())
        if (l === "file") {
          const u = s.name,
            d = s.type;
          ((c.file = await (0, e.blobToBase64)(s)), (c.__fileName = u), (c.__fileType = d));
        } else c[l] = s;
      return JSON.stringify(c);
    },
    o = (t) => {
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
    a = async (t) => {
      const c = t?.body instanceof FormData,
        l = c ? await r(t?.body) : t?.body,
        s = new Request("", { body: l, method: t?.method, headers: t?.headers }),
        u = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(u),
        isMultipartFormData: c,
      };
    },
    n = (t) => {
      const c = async (l, s) => {
        const u = o(s),
          { body: d, headers: v, isMultipartFormData: f } = await a(u),
          p = {
            remoteKey: l,
            fetchRequestInit: { ...u, body: d, headers: [...v.entries()] },
            isMultipartFormData: f,
          },
          {
            body: _,
            headers: h,
            statusText: g,
            status: m,
            isAttachment: y,
          } = await t("fetchRemote", p),
          O = y ? (0, e.base64ToBlob)(_, h["content-type"]) : _;
        return new Response(O || null, { headers: h, status: m, statusText: g });
      };
      return { requestRemote: (l, s) => c(l, s) };
    };
  k.remoteFetchApi = n;
  const i = (t) => {
    const c = async (l, s, u) => {
      const d = o(u),
        { body: v, headers: f, isMultipartFormData: p } = await a(d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: l,
          restPath: s,
          fetchRequestInit: { ...d, body: v, headers: [...f.entries()] },
          isMultipartFormData: p,
        },
        {
          body: h,
          headers: g,
          statusText: m,
          status: y,
          isAttachment: O,
        } = await t("fetchProduct", _),
        E = O ? (0, e.base64ToBlob)(h, g["content-type"]) : h;
      return new Response(E || null, { headers: g, status: y, statusText: m });
    };
    return {
      requestConfluence: (l, s) => c("confluence", l, s),
      requestJira: (l, s) => c("jira", l, s),
      requestBitbucket: (l, s) => c("bitbucket", l, s),
    };
  };
  return ((k.productFetchApi = i), k);
}
var Vr;
function ps() {
  if (Vr) return j;
  Vr = 1;
  var e;
  (Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.requestRemote = j.requestBitbucket = j.requestJira = j.requestConfluence = void 0));
  const r = S(),
    o = gs();
  return (
    (e = (0, o.productFetchApi)((0, r.getCallBridge)())),
    (j.requestConfluence = e.requestConfluence),
    (j.requestJira = e.requestJira),
    (j.requestBitbucket = e.requestBitbucket),
    (j.requestRemote = (0, o.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    j
  );
}
var mt = {},
  Ce = {},
  zr;
function ms() {
  if (zr) return Ce;
  ((zr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.showFlag = void 0));
  const e = S(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = o("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, o("closeFlag", { id: n.id })) };
    };
  return ((Ce.showFlag = a), Ce);
}
var Wr;
function ys() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = ms();
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
var yt = {},
  Kr;
function bs() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(fi(), e));
      })(yt)),
    yt
  );
}
var bt = {},
  Ae = {},
  Hr;
function ws() {
  if (Hr) return Ae;
  ((Hr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.realtime = void 0));
  const r = (0, S().getCallBridge)(),
    o = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    a = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    i = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Ae.realtime = { publish: o, subscribe: a, publishGlobal: n, subscribeGlobal: i }), Ae);
}
var wt = {},
  Jr;
function Es() {
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
      })(wt)),
    wt
  );
}
var Yr;
function Os() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = ws();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var o = Es();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return o.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return o.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return o.Bitbucket;
            },
          }));
      })(bt)),
    bt
  );
}
var Et = {},
  je = {},
  Ot = {},
  Xr;
function Ss() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = S(),
          o = R(),
          a = 30,
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
              if (c.agentName.length > a) throw new Error("rovo agent name too long");
              if (c.agentKey.length > a) throw new Error("rovo agent key too long");
            }
            const l = i(c);
            if ((await n("openRovo", l)) === !1)
              throw new o.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(Ot)),
    Ot
  );
}
var Zr;
function Rs() {
  if (Zr) return je;
  ((Zr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.rovo = void 0));
  const e = Ss();
  return ((je.rovo = { open: e.open }), je);
}
var Qr;
function Ps() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Rs(), e));
      })(Et)),
    Et
  );
}
var q = {},
  $r;
function Is() {
  if ($r) return q;
  (($r = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.createTranslationFunction = q.getTranslations = q.resetTranslationsCache = void 0));
  const e = ci(),
    r = tt(),
    o = {
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
    a = new e.TranslationsGetter(o),
    n = () => {
      a.reset();
    };
  q.resetTranslationsCache = n;
  const i = async (c = null, l = { fallback: !0 }) => {
    let s = c;
    return (s || (s = (await r.view.getContext()).locale), await a.getTranslations(s, l));
  };
  q.getTranslations = i;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const s = new e.Translator(l, a);
    return (
      await s.init(),
      (u, d) => {
        var v, f;
        return (f = (v = s.translate(u)) !== null && v !== void 0 ? v : d) !== null && f !== void 0
          ? f
          : u;
      }
    );
  };
  return ((q.createTranslationFunction = t), q);
}
var St = {},
  Me = {},
  en;
function Cs() {
  if (en) return Me;
  ((en = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.permissions = void 0));
  const r = (0, S().getCallBridge)(),
    o = async (l) => r("__permission__egressGet", l),
    a = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    i = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (Me.permissions = {
      egress: { get: o, set: a, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: c },
    }),
    Me
  );
}
var N = {},
  Rt = {},
  Pt = {},
  qe = {},
  Te = {},
  tn;
function Ut() {
  if (tn) return Te;
  ((tn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.parseUrl = void 0));
  function e(r) {
    var o, a;
    const n =
        (a = (o = r.match(/^(.*?:)/)) === null || o === void 0 ? void 0 : o[0]) !== null &&
        a !== void 0
          ? a
          : "https:",
      i = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = i.split("/")[0],
      c = i.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: c };
  }
  return ((Te.parseUrl = e), Te);
}
var It = {},
  rn;
function pi() {
  return (
    rn ||
      ((rn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = Ut();
        function o(t) {
          const l = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${l}$`);
        }
        e.globToRegex = o;
        const a = (t) => {
          if (t?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            l = new Set(),
            s = [];
          return (
            t.forEach((u) => {
              const d = c.test(u) ? u : `https://${u}`,
                v = (0, r.parseUrl)(d);
              v.hostname.startsWith("*")
                ? (l.add(v.hostname.substring(2)), s.push(o(v.hostname)))
                : l.add(v.hostname);
            }),
            [...l].sort().reduce((u, d) => (s.some((v) => v.test(d)) || u.push(d), u), [])
          );
        };
        ((e.sortAndGroupEgressPermissionsByDomain = a),
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
              var u;
              if (
                ((u = s.category) === null || u === void 0 ? void 0 : u.toUpperCase()) ===
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
          for (const s of c)
            (l.has(s.type) || l.set(s.type, s.addresses),
              l.set(s.type, [...l.get(s.type), ...s.addresses]));
          return [...l.entries()].map(([s, u]) => ({ type: s, addresses: [...new Set(u)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(It)),
    It
  );
}
var nn;
function As() {
  if (nn) return qe;
  ((nn = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe.EgressFilteringService = void 0));
  const e = Ut(),
    r = pi();
  class o {
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
  return ((qe.EgressFilteringService = o), qe);
}
var sn;
function js() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(As(), e), r.__exportStar(Ut(), e), r.__exportStar(pi(), e));
      })(Pt)),
    Pt
  );
}
var on;
function Ms() {
  return (
    on ||
      ((on = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(js(), e));
      })(Rt)),
    Rt
  );
}
var an;
function qs() {
  if (an) return N;
  ((an = 1),
    Object.defineProperty(N, "__esModule", { value: !0 }),
    (N.checkPermissions = N.createPermissionUtils = void 0));
  const e = Ms(),
    r = tt();
  function o(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const a = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(d) {
    if (!d) return null;
    const { scopes: v, external: f = {} } = d,
      p = Array.isArray(v) ? v : Object.keys(v || {});
    return {
      hasScope: (_) => p.includes(_),
      canFetchFrom: (_, h) => {
        var g;
        const m = (g = f.fetch) === null || g === void 0 ? void 0 : g[_];
        if (!m?.length) return !1;
        const y = m.map(o).filter((C) => C.length > 0);
        if (y.length === 0) return !1;
        const O = new e.EgressFilteringService(y);
        return _ === "client" ? O.isValidUrlCSP(h) : O.isValidUrl(h);
      },
      canLoadResource: (_, h) => {
        const g = f[_];
        if (!g?.length) return !1;
        const m = g.map(o).filter((E) => E.length > 0);
        return m.length === 0 ? !1 : new e.EgressFilteringService(m).isValidUrlCSP(h);
      },
      getScopes: () => p,
      getExternalPermissions: () => f,
      hasAnyPermissions: () => p.length > 0 || Object.keys(f).length > 0,
    };
  }
  N.createPermissionUtils = i;
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
          const g = h.filter((m) => !v.canFetchFrom(p, m));
          g.length > 0 && (f[p] = g);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function l(d, v) {
    const f = {};
    return (
      a.forEach((p) => {
        const _ = d?.[p];
        if (_?.length) {
          const h = _.filter((g) => !v.canLoadResource(p, g));
          h.length > 0 && (f[p] = h);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function s(d, v) {
    if (!d) return;
    const f = c(d, v),
      p = l(d, v);
    if (!f && !p) return;
    const _ = {};
    return (f && (_.fetch = f), p && Object.assign(_, p), _);
  }
  async function u(d, v) {
    var f;
    if (!d) return { granted: !1, missing: null };
    if (!(!((f = d.scopes) === null || f === void 0) && f.length) && !d.external)
      return { granted: !0, missing: null };
    let p = v;
    p || (p = (await r.view.getContext()).permissions);
    const _ = i(p);
    if (!_) return { granted: !1, missing: null };
    const h = {};
    let g = !0;
    const m = t(d.scopes, _);
    m && ((h.scopes = m), (g = !1));
    const y = s(d.external, _);
    return (y && ((h.external = y), (g = !1)), { granted: g, missing: g ? null : h });
  }
  return ((N.checkPermissions = u), N);
}
var un;
function Ts() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(Cs(), e), r.__exportStar(qs(), e));
      })(St)),
    St
  );
}
var Ct = {},
  At = {},
  jt = {},
  De = {},
  Fe = {},
  ln;
function mi() {
  return (
    ln ||
      ((ln = 1),
      Object.defineProperty(Fe, "__esModule", { value: !0 }),
      (Fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Fe
  );
}
var cn;
function rt() {
  if (cn) return De;
  ((cn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = tt(),
    o = mi(),
    a = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(o.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((De.checkRestrictedEnvironment = a), De);
}
var dn;
function Ds() {
  return (
    dn ||
      ((dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Ke(),
          o = R(),
          a = rt(),
          i = (0, S().getCallBridge)(),
          t = (u, d) => {
            const v = atob(u),
              f = new Array(v.length);
            for (let _ = 0; _ < v.length; _++) f[_] = v.charCodeAt(_);
            const p = new Uint8Array(f);
            return new Blob([p], { type: d || "application/octet-stream" });
          },
          c = async (u) => {
            const d = u.size,
              v = await u.arrayBuffer(),
              f = await crypto.subtle.digest("SHA-256", v),
              p = new Uint8Array(f),
              _ = btoa(String.fromCharCode(...p));
            return { length: d, checksum: _, checksumType: "SHA256" };
          },
          l = async ({ functionKey: u, objects: d }) => {
            if (!u || u.length === 0)
              throw new o.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new o.BridgeAPIError("objects array is required and must not be empty");
            const v = d.map((m, y) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new o.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(m.data, m.mimeType);
                } catch {
                  throw new o.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              f = await Promise.all(v.map((m) => c(m))),
              p = await (0, r.invoke)(u, { allObjectMetadata: f });
            if (!p || typeof p != "object")
              throw new o.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              h = new Map();
            return (
              v.forEach((m, y) => {
                const O = f[y];
                (_.set(O.checksum, m), h.set(O.checksum, y));
              }),
              Object.entries(p).map(([m, y]) => {
                const { key: O, checksum: E } = y,
                  C = _.get(E),
                  T = h.get(E);
                return T === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: O,
                        error: `Index not found for checksum ${E}`,
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
                              key: O,
                              status: b.status,
                              error: b.ok ? void 0 : `Upload failed with status ${b.status}`,
                            };
                          } catch (b) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: b instanceof Error ? b.message : "Upload failed",
                            };
                          }
                        })(),
                        index: T,
                        objectType: C.type,
                        objectSize: C.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: T,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const s = async ({ functionKey: u, objects: d }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const v = await (0, e.createUploadPromises)({ functionKey: u, objects: d });
          return await Promise.all(v.map((p) => p.promise));
        };
        e.upload = s;
      })(jt)),
    jt
  );
}
var Be = {},
  fn;
function Fs() {
  if (fn) return Be;
  ((fn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.deleteObjects = void 0));
  const e = Ke(),
    r = R(),
    o = rt(),
    n = (0, S().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
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
  return ((Be.deleteObjects = i), Be);
}
var Ue = {},
  _n;
function Bs() {
  if (_n) return Ue;
  ((_n = 1), Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.download = void 0));
  const e = Ke(),
    r = R(),
    o = rt(),
    n = (0, S().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(t, { keys: c });
      if (!l || typeof l != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const s = Object.entries(l).map(async ([d, v]) => {
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
      return await Promise.all(s);
    };
  return ((Ue.download = i), Ue);
}
var ke = {},
  hn;
function Us() {
  if (hn) return ke;
  ((hn = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.getMetadata = void 0));
  const e = Ke(),
    r = R(),
    o = rt(),
    n = (0, S().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
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
          const u = await (0, e.invoke)(t, { key: s });
          return !u || typeof u != "object"
            ? { key: s, error: "Invalid response from functionKey" }
            : u;
        }),
      );
    };
  return ((ke.getMetadata = i), ke);
}
var vn;
function ks() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = Ds();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const o = Fs(),
          a = Bs(),
          n = Us();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: n.getMetadata,
          delete: o.deleteObjects,
        };
      })(At)),
    At
  );
}
var gn;
function Ns() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(ks(), e), r.__exportStar(mi(), e));
      })(Ct)),
    Ct
  );
}
var Mt = {},
  Ne = {},
  L = {},
  V = {},
  Je = {},
  pn;
function Ls() {
  if (pn) return Je;
  ((pn = 1), Object.defineProperty(Je, "__esModule", { value: !0 }));
  const e = F();
  let r = class {
    constructor(a) {
      ((this._sdkKey = a),
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
    setValues(a, n) {
      var i;
      if (!a) return !1;
      const t = (0, e._typedJsonParse)(a.data, "has_updates", "EvaluationResponse");
      return t == null
        ? !1
        : ((this._source = a.source),
          t?.has_updates !== !0 ||
            ((this._rawValues = a.data),
            (this._lcut = t.time),
            (this._receivedAt = a.receivedAt),
            (this._values = t),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(a.source, t)),
            a.source && t.user && this._setWarningState(n, t),
            e.SDKFlags.setFlags(this._sdkKey, (i = t.sdk_flags) !== null && i !== void 0 ? i : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.feature_gates,
        a,
      );
    }
    getConfig(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.dynamic_configs,
        a,
      );
    }
    getLayer(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.layer_configs,
        a,
      );
    }
    getParamStore(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.param_stores,
        a,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var a;
      return (a = this._values) === null || a === void 0 ? void 0 : a.exposures;
    }
    _extractBootstrapMetadata(a, n) {
      if (a !== "Bootstrap") return null;
      const i = {};
      return (
        n.user && (i.user = n.user),
        n.sdkInfo && (i.generatorSDKInfo = n.sdkInfo),
        (i.lcut = n.time),
        i
      );
    }
    _getDetailedStoreResult(a, n) {
      let i = null;
      return (
        a && (i = a[n] ? a[n] : a[(0, e._DJB2)(n)]),
        { result: i, details: this._getDetails(i == null) }
      );
    }
    _setWarningState(a, n) {
      var i, t;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((i = a.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== c &&
        ((!((t = a.customIDs) === null || t === void 0) && t.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const l = n.user;
        (0, e._getFullUserHash)(a) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const a = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (a.warnings = Array.from(this._warnings)), a);
    }
    _getDetails(a) {
      var n, i;
      const t = this.getCurrentSourceDetails();
      let c = t.reason;
      const l = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const s =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (s && (t.bootstrapMetadata = s), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((Je.default = r), Je);
}
var z = {},
  Le = {},
  mn;
function xs() {
  if (mn) return Le;
  ((mn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le._resolveDeltasResponse = void 0));
  const e = F(),
    r = 2;
  function o(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const s = a(t, l),
      u = n(s),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        r,
      );
    return d === l.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
          badFullResponse: l.deltas_full_response,
        };
  }
  Le._resolveDeltasResponse = o;
  function a(t, c) {
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
  return Le;
}
var yn;
function yi() {
  if (yn) return z;
  yn = 1;
  var e =
    (z && z.__awaiter) ||
    function (n, i, t, c) {
      function l(s) {
        return s instanceof t
          ? s
          : new t(function (u) {
              u(s);
            });
      }
      return new (t || (t = Promise))(function (s, u) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            u(_);
          }
        }
        function v(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function f(p) {
          p.done ? s(p.value) : l(p.value).then(d, v);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(z, "__esModule", { value: !0 });
  const r = F(),
    o = xs();
  class a extends r.NetworkCore {
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
        var u, d, v, f, p, _;
        const h = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let g = {
          user: l,
          hash:
            (v =
              (d = (u = this._option) === null || u === void 0 ? void 0 : u.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && v !== void 0
              ? v
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const m =
            h?.hash_used !==
            ((_ =
              (p = (f = this._option) === null || f === void 0 ? void 0 : f.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2");
          g = Object.assign(Object.assign({}, g), {
            sinceTime: s && !m ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && s ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: m ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(i, h, g, c);
      });
    }
    _fetchEvaluations(i, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var s, u;
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
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const v = (0, o._resolveDeltasResponse)(t, d.body);
        return typeof v == "string"
          ? v
          : this._fetchEvaluations(
              i,
              t,
              Object.assign(Object.assign(Object.assign({}, c), v), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((z.default = a), z);
}
var xe = {},
  bn;
function Gs() {
  if (bn) return xe;
  ((bn = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe._makeParamStoreGetter = void 0));
  const e = F(),
    r = { disableExposureLog: !0 };
  function o(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function a(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function n(u, d) {
    return u.value;
  }
  function i(u, d, v) {
    return u.getFeatureGate(d.gate_name, o(v) ? void 0 : r).value ? d.pass_value : d.fail_value;
  }
  function t(u, d, v, f) {
    const _ = u.getDynamicConfig(d.config_name, o(f) ? void 0 : r).get(d.param_name);
    return a(_, v) ? v : _;
  }
  function c(u, d, v, f) {
    const _ = u.getExperiment(d.experiment_name, o(f) ? void 0 : r).get(d.param_name);
    return a(_, v) ? v : _;
  }
  function l(u, d, v, f) {
    const _ = u.getLayer(d.layer_name, o(f) ? void 0 : r).get(d.param_name);
    return a(_, v) ? v : _;
  }
  function s(u, d, v) {
    return (f, p) => {
      if (d == null) return p;
      const _ = d[f];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return n(_);
        case "gate":
          return i(u, _, v);
        case "dynamic_config":
          return t(u, _, p, v);
        case "experiment":
          return c(u, _, p, v);
        case "layer":
          return l(u, _, p, v);
        default:
          return p;
      }
    };
  }
  return ((xe._makeParamStoreGetter = s), xe);
}
var x = {},
  wn;
function Vs() {
  if (wn) return x;
  wn = 1;
  var e =
    (x && x.__awaiter) ||
    function (n, i, t, c) {
      function l(s) {
        return s instanceof t
          ? s
          : new t(function (u) {
              u(s);
            });
      }
      return new (t || (t = Promise))(function (s, u) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            u(_);
          }
        }
        function v(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function f(p) {
          p.done ? s(p.value) : l(p.value).then(d, v);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.StatsigEvaluationsDataAdapter = void 0));
  const r = F(),
    o = yi();
  let a = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, t, c) {
      (super.attach(i, t, c),
        c !== null && c instanceof o.default
          ? (this._network = c)
          : (this._network = new o.default(t ?? {})));
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
        const u = yield (s = this._network) === null || s === void 0
          ? void 0
          : s.fetchEvaluations(this._getSdkKey(), i, c?.priority, t, l);
        return u ?? null;
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
  return ((x.StatsigEvaluationsDataAdapter = a), x);
}
var En;
function zs() {
  if (En) return V;
  En = 1;
  var e =
    (V && V.__awaiter) ||
    function (c, l, s, u) {
      function d(v) {
        return v instanceof s
          ? v
          : new s(function (f) {
              f(v);
            });
      }
      return new (s || (s = Promise))(function (v, f) {
        function p(g) {
          try {
            h(u.next(g));
          } catch (m) {
            f(m);
          }
        }
        function _(g) {
          try {
            h(u.throw(g));
          } catch (m) {
            f(m);
          }
        }
        function h(g) {
          g.done ? v(g.value) : d(g.value).then(p, _);
        }
        h((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(V, "__esModule", { value: !0 });
  const r = F(),
    o = Ls(),
    a = yi(),
    n = Gs(),
    i = Vs();
  let t = class Ft extends r.StatsigClientBase {
    static instance(l) {
      const s = (0, r._getStatsigGlobal)().instance(l);
      return s instanceof Ft
        ? s
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ft(l ?? "", {}));
    }
    constructor(l, s, u = null) {
      var d, v;
      r.SDKType._setClientType(l, "javascript-client");
      const f = new a.default(u, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (d = u?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
        f,
        u,
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
        (this._store = new o.default(l)),
        (this._network = f),
        (this._user = this._configureUser(s, u)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (v = u?.plugins) !== null && v !== void 0 ? v : [];
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
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(l, s, u);
      } catch (d) {
        const v = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(v, u);
      }
    }
    _updateUserSyncImpl(l, s, u) {
      var d;
      const v = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && v.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = s?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && f?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            v,
          )
        : (this._runPostUpdate(f ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            v,
          ));
    }
    updateUserAsync(l, s) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, s);
        } catch (d) {
          const v = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(v, u);
        }
      });
    }
    _updateUserAsyncImpl(l, s) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const u = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, s)),
          u !== this._user)
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
    checkGate(l, s) {
      return this.getFeatureGate(l, s).value;
    }
    logEvent(l, s, u) {
      const d = typeof l == "string" ? { eventName: l, value: s, metadata: u } : l;
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
      var u;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - s,
        l,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, s) {
      this.dataAdapter.getDataAsync(l, s, { priority: "low" }).catch((u) => {
        r.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, s) {
      var u;
      const d = (0, r._normalizeUser)(l, s),
        v = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (v && r.StableID.setOverride(v, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, s) {
      var u, d;
      const { result: v, details: f } = this._store.getGate(l),
        p = (0, r._makeFeatureGate)(l, f, v),
        _ =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, p, this._user, s),
        h = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(l, s) {
      var u, d;
      const { result: v, details: f } = this._store.getConfig(l),
        p = (0, r._makeDynamicConfig)(l, f, v),
        _ =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, p, this._user, s),
        h = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          s,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(l, s) {
      var u, d, v, f;
      const { result: p, details: _ } = this._store.getConfig(l),
        h = (0, r._makeExperiment)(l, _, p);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (d = (u = h.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
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
            : f.call(v, h, this._user, s),
        m = g ?? h;
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
      var u, d, v;
      const { result: f, details: p } = this._store.getLayer(l),
        _ = (0, r._makeLayer)(l, p, f),
        h =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, _, this._user, s);
      s?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const g = (0, r._mergeOverride)(
        _,
        h,
        (v = h?.__value) !== null && v !== void 0 ? v : _.__value,
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
      var u, d;
      const { result: v, details: f } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const p = {
          name: l,
          details: f,
          __configuration: v,
          get: (0, n._makeParamStoreGetter)(this, v, s),
        },
        _ =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, p, s);
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
var On;
function Ws() {
  return (
    On ||
      ((On = 1),
      (function (e) {
        var r =
            (L && L.__createBinding) ||
            (Object.create
              ? function (t, c, l, s) {
                  s === void 0 && (s = l);
                  var u = Object.getOwnPropertyDescriptor(c, l);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(t, s, u));
                }
              : function (t, c, l, s) {
                  (s === void 0 && (s = l), (t[s] = c[l]));
                }),
          o =
            (L && L.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const a = F(),
          n = zs();
        ((e.StatsigClient = n.default), o(F(), e));
        const i = Object.assign((0, a._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(L)),
    L
  );
}
var Ge = {},
  Ve = {},
  Sn;
function Ks() {
  if (Sn) return Ve;
  ((Sn = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.initFeatureFlags = void 0));
  const e = S(),
    r = R(),
    o = Qe(),
    a = 500,
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
    (Ve.initFeatureFlags = (0, o.withRateLimiter)(
      c,
      a,
      n,
      `Feature flags initialisation calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    Ve
  );
}
var Rn;
function Hs() {
  if (Rn) return Ge;
  ((Rn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.ForgeDataAdapter = void 0));
  const e = Ks();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(a, n, i) {
      var t;
      if (a) return a;
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
    getDataSync(a) {
      return this.cache;
    }
    async attach(a, n, i) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(a) {}
    async setDataLegacy(a) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Ge.ForgeDataAdapter = r), Ge);
}
var qt = {},
  Pn;
function bi() {
  return (
    Pn ||
      ((Pn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (o) {
            ((o.DEVELOPMENT = "DEVELOPMENT"),
              (o.STAGING = "STAGING"),
              (o.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var r;
        ((function (o) {
          o.USER_ACCESS = "USER_ACCESS";
        })(r || (r = {})),
          (function (o) {
            o.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(qt)),
    qt
  );
}
var ze = {},
  In;
function Js() {
  if (In) return ze;
  ((In = 1),
    Object.defineProperty(ze, "__esModule", { value: !0 }),
    (ze.trackFeatureFlagEvent = void 0));
  const e = S(),
    r = R(),
    o = bi(),
    a = Qe(),
    n = 500,
    i = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (s) => {
      if (!s || !s.type || !s.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(s.type.toUpperCase() in o.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(s).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (s) => (c(s), t("trackFeatureFlagEvent", s));
  return (
    (ze.trackFeatureFlagEvent = (0, a.withRateLimiter)(
      l,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    ze
  );
}
var Cn;
function Ys() {
  if (Cn) return Ne;
  ((Cn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.ForgeFeatureFlags = void 0));
  const e = Ws(),
    r = Hs(),
    o = bi(),
    a = Js();
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
        type: o.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: c,
        },
      };
      (0, a.trackFeatureFlagEvent)(l);
    }
  }
  return ((Ne.ForgeFeatureFlags = n), Ne);
}
var An;
function Xs() {
  return (
    An ||
      ((An = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Ys();
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
var jn;
function Zs() {
  return (
    jn ||
      ((jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = I;
        var o = ji();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          r.__exportStar(Ke(), e),
          r.__exportStar(Di(), e),
          r.__exportStar(tt(), e),
          r.__exportStar(_s(), e),
          r.__exportStar(vs(), e),
          r.__exportStar(ps(), e),
          r.__exportStar(ys(), e),
          r.__exportStar(bs(), e),
          r.__exportStar(Os(), e),
          r.__exportStar(Ps(), e),
          (e.i18n = r.__importStar(Is())),
          r.__exportStar(Ts(), e),
          r.__exportStar(Ns(), e),
          r.__exportStar(Xs(), e));
      })(it)),
    it
  );
}
var We = Zs();
const Qs = "_container_16ann_1",
  $s = "_header_16ann_9",
  eo = "_controls_16ann_20",
  to = "_searchSection_16ann_28",
  ro = "_searchInput_16ann_34",
  no = "_orgSelect_16ann_35",
  io = "_input_16ann_36",
  so = "_select_16ann_37",
  oo = "_addButton_16ann_63",
  ao = "_addForm_16ann_79",
  uo = "_submitButton_16ann_88",
  lo = "_spinner_16ann_108",
  co = "_spinnerInner_16ann_113",
  fo = "_tableContainer_16ann_117",
  _o = "_table_16ann_117",
  ho = "_stats_16ann_146",
  vo = "_loadingContainer_16ann_155",
  P = {
    container: Qs,
    header: $s,
    controls: eo,
    searchSection: to,
    searchInput: ro,
    orgSelect: no,
    input: io,
    select: so,
    addButton: oo,
    addForm: ao,
    submitButton: uo,
    spinner: lo,
    spinnerInner: co,
    tableContainer: fo,
    table: _o,
    stats: ho,
    loadingContainer: vo,
  },
  Mn = () =>
    w.jsx("div", { className: P.spinner, children: w.jsx("div", { className: P.spinnerInner }) });
function go() {
  const [e, r] = A.useState([]),
    [o, a] = A.useState([]),
    [n, i] = A.useState(""),
    [t, c] = A.useState(null),
    [l, s] = A.useState(null),
    [u, d] = A.useState(""),
    [v, f] = A.useState(null),
    [p, _] = A.useState(!1),
    [h, g] = A.useState(!0),
    [m, y] = A.useState(!1),
    O = async () => {
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
    E = async () => {
      try {
        const b = await We.invoke("getOrganizations");
        a(b);
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
    T = async () => {
      g(!0);
      try {
        await Promise.all([O(), E(), C()]);
      } finally {
        g(!1);
      }
    };
  A.useEffect(() => {
    T();
  }, [n, t]);
  const kt = async () => {
    if (!(!u || !v)) {
      y(!0);
      try {
        (await We.invoke("createUser", { name: u, organizationId: v }),
          d(""),
          f(null),
          _(!1),
          await T());
      } catch (b) {
        console.error("Error adding user:", b);
      } finally {
        y(!1);
      }
    }
  };
  return h
    ? w.jsxs("div", {
        className: P.loadingContainer,
        children: [w.jsx(Mn, {}), w.jsx("p", { children: "Loading data..." })],
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
                      o.map((b) =>
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
                  value: u,
                  onChange: (b) => d(b.target.value),
                  className: P.input,
                  disabled: m,
                }),
                w.jsxs("select", {
                  value: v || "",
                  onChange: (b) => f(Number(b.target.value)),
                  className: P.select,
                  disabled: m,
                  children: [
                    w.jsx("option", { value: "", children: "Select Organization" }),
                    o.map((b) => w.jsx("option", { value: b.id, children: b.name }, b.id)),
                  ],
                }),
                w.jsx("button", {
                  onClick: kt,
                  className: P.submitButton,
                  disabled: !u || !v || m,
                  style: {
                    opacity: !u || !v || m ? 0.5 : 1,
                    cursor: !u || !v || m ? "not-allowed" : "pointer",
                  },
                  children: m
                    ? w.jsxs(w.Fragment, {
                        children: [
                          w.jsx(Mn, {}),
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
const po = document.getElementById("root"),
  mo = wi.createRoot(po),
  qn = () => {
    mo.render(w.jsx(go, {}));
  };
We.view.theme
  .enable()
  .then(() => {
    qn();
  })
  .catch((e) => {
    (console.error(e.message), qn());
  });
