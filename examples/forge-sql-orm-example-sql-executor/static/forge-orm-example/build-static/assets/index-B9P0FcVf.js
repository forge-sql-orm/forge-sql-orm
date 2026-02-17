const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-CT8OtY7f.js", "./lodash-vendor-Cp37rRJM.js"]),
) => i.map((i) => d[i]);
import { r as qn, c as bi } from "./react-dom-vendor-BXC0oJZi.js";
import { g as wi, r as Ei } from "./lodash-vendor-Cp37rRJM.js";
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
var nt = { exports: {} },
  H = {};
var Ut;
function Ri() {
  if (Ut) return H;
  Ut = 1;
  var e = qn(),
    r = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, o) {
    var s,
      d = {},
      v = null,
      f = null;
    (o !== void 0 && (v = "" + o),
      l.key !== void 0 && (v = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (s in l) u.call(l, s) && !i.hasOwnProperty(s) && (d[s] = l[s]);
    if (c && c.defaultProps) for (s in ((l = c.defaultProps), l)) d[s] === void 0 && (d[s] = l[s]);
    return { $$typeof: r, type: c, key: v, ref: f, props: d, _owner: n.current };
  }
  return ((H.Fragment = a), (H.jsx = t), (H.jsxs = t), H);
}
var xt;
function Oi() {
  return (xt || ((xt = 1), (nt.exports = Ri())), nt.exports);
}
var w = Oi(),
  F = qn(),
  it = {},
  Mt = function (e, r) {
    return (
      (Mt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, u) {
            a.__proto__ = u;
          }) ||
        function (a, u) {
          for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (a[n] = u[n]);
        }),
      Mt(e, r)
    );
  };
function Mn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Mt(e, r);
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
          for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
        }
        return r;
      }),
    Ye.apply(this, arguments)
  );
};
function Fn(e, r) {
  var a = {};
  for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && r.indexOf(u) < 0 && (a[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, u = Object.getOwnPropertySymbols(e); n < u.length; n++)
      r.indexOf(u[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, u[n]) &&
        (a[u[n]] = e[u[n]]);
  return a;
}
function Tn(e, r, a, u) {
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
function Bn(e, r) {
  return function (a, u) {
    r(a, u, e);
  };
}
function kn(e, r, a, u, n, i) {
  function t(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var c = u.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      o = !r && e ? (u.static ? e : e.prototype) : null,
      s = r || (o ? Object.getOwnPropertyDescriptor(o, u.name) : {}),
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
      i.push(t(g || null));
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
  (o && Object.defineProperty(o, u.name, s), (v = !0));
}
function Un(e, r, a) {
  for (var u = arguments.length > 2, n = 0; n < r.length; n++)
    a = u ? r[n].call(e, a) : r[n].call(e);
  return u ? a : void 0;
}
function xn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Ln(e, r, a) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: a ? "".concat(a, " ", r) : r })
  );
}
function Nn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Gn(e, r, a, u) {
  function n(i) {
    return i instanceof a
      ? i
      : new a(function (t) {
          t(i);
        });
  }
  return new (a || (a = Promise))(function (i, t) {
    function c(s) {
      try {
        o(u.next(s));
      } catch (d) {
        t(d);
      }
    }
    function l(s) {
      try {
        o(u.throw(s));
      } catch (d) {
        t(d);
      }
    }
    function o(s) {
      s.done ? i(s.value) : n(s.value).then(c, l);
    }
    o((u = u.apply(e, r || [])).next());
  });
}
function Vn(e, r) {
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
  function c(o) {
    return function (s) {
      return l([o, s]);
    };
  }
  function l(o) {
    if (u) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), o[0] && (a = 0)), a; )
      try {
        if (
          ((u = 1),
          n &&
            (i =
              o[0] & 2 ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
            !(i = i.call(n, o[1])).done)
        )
          return i;
        switch (((n = 0), i && (o = [o[0] & 2, i.value]), o[0])) {
          case 0:
          case 1:
            i = o;
            break;
          case 4:
            return (a.label++, { value: o[1], done: !1 });
          case 5:
            (a.label++, (n = o[1]), (o = [0]));
            continue;
          case 7:
            ((o = a.ops.pop()), a.trys.pop());
            continue;
          default:
            if (
              ((i = a.trys), !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2))
            ) {
              a = 0;
              continue;
            }
            if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
              a.label = o[1];
              break;
            }
            if (o[0] === 6 && a.label < i[1]) {
              ((a.label = i[1]), (i = o));
              break;
            }
            if (i && a.label < i[2]) {
              ((a.label = i[2]), a.ops.push(o));
              break;
            }
            (i[2] && a.ops.pop(), a.trys.pop());
            continue;
        }
        o = r.call(e, a);
      } catch (s) {
        ((o = [6, s]), (n = 0));
      } finally {
        u = i = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
var Xe = Object.create
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
function zn(e, r) {
  for (var a in e) a !== "default" && !Object.prototype.hasOwnProperty.call(r, a) && Xe(r, e, a);
}
function Qe(e) {
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
function Hn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Bt(arguments[r]));
  return e;
}
function Wn() {
  for (var e = 0, r = 0, a = arguments.length; r < a; r++) e += arguments[r].length;
  for (var u = Array(e), n = 0, r = 0; r < a; r++)
    for (var i = arguments[r], t = 0, c = i.length; t < c; t++, n++) u[n] = i[t];
  return u;
}
function Kn(e, r, a) {
  if (a || arguments.length === 2)
    for (var u = 0, n = r.length, i; u < n; u++)
      (i || !(u in r)) && (i || (i = Array.prototype.slice.call(r, 0, u)), (i[u] = r[u]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function z(e) {
  return this instanceof z ? ((this.v = e), this) : new z(e);
}
function Jn(e, r, a) {
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
        return new Promise(function (h, g) {
          i.push([f, _, h, g]) > 1 || l(f, _);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function l(f, p) {
    try {
      o(u[f](p));
    } catch (_) {
      v(i[0][3], _);
    }
  }
  function o(f) {
    f.value instanceof z ? Promise.resolve(f.value.v).then(s, d) : v(i[0][2], f);
  }
  function s(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function v(f, p) {
    (f(p), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function Yn(e) {
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
          return (a = !a) ? { value: z(e[n](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Qn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    a;
  return r
    ? r.call(e)
    : ((e = typeof Qe == "function" ? Qe(e) : e[Symbol.iterator]()),
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
    Promise.resolve(l).then(function (o) {
      i({ value: o, done: c });
    }, t);
  }
}
function Xn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var Pi = Object.create
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
          var a = [];
          for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (a[a.length] = u);
          return a;
        }),
      Ft(e)
    );
  };
function Zn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var a = Ft(e), u = 0; u < a.length; u++) a[u] !== "default" && Xe(r, e, a[u]);
  return (Pi(r, e), r);
}
function $n(e) {
  return e && e.__esModule ? e : { default: e };
}
function ei(e, r, a, u) {
  if (a === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !u : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return a === "m" ? u : a === "a" ? u.call(e) : u ? u.value : r.get(e);
}
function ti(e, r, a, u, n) {
  if (u === "m") throw new TypeError("Private method is not writable");
  if (u === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (u === "a" ? n.call(e, a) : n ? (n.value = a) : r.set(e, a), a);
}
function ri(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function ni(e, r, a) {
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
var Si =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, a) {
        var u = new Error(a);
        return ((u.name = "SuppressedError"), (u.error = e), (u.suppressed = r), u);
      };
function ii(e) {
  function r(i) {
    ((e.error = e.hasError ? new Si(i, e.error, "An error was suppressed during disposal.") : i),
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
function oi(e, r) {
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
const Ii = {
    __extends: Mn,
    __assign: Ye,
    __rest: Fn,
    __decorate: Tn,
    __param: Bn,
    __esDecorate: kn,
    __runInitializers: Un,
    __propKey: xn,
    __setFunctionName: Ln,
    __metadata: Nn,
    __awaiter: Gn,
    __generator: Vn,
    __createBinding: Xe,
    __exportStar: zn,
    __values: Qe,
    __read: Bt,
    __spread: Hn,
    __spreadArrays: Wn,
    __spreadArray: Kn,
    __await: z,
    __asyncGenerator: Jn,
    __asyncDelegator: Yn,
    __asyncValues: Qn,
    __makeTemplateObject: Xn,
    __importStar: Zn,
    __importDefault: $n,
    __classPrivateFieldGet: ei,
    __classPrivateFieldSet: ti,
    __classPrivateFieldIn: ri,
    __addDisposableResource: ni,
    __disposeResources: ii,
    __rewriteRelativeImportExtension: oi,
  },
  Ci = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: ni,
        get __assign() {
          return Ye;
        },
        __asyncDelegator: Yn,
        __asyncGenerator: Jn,
        __asyncValues: Qn,
        __await: z,
        __awaiter: Gn,
        __classPrivateFieldGet: ei,
        __classPrivateFieldIn: ri,
        __classPrivateFieldSet: ti,
        __createBinding: Xe,
        __decorate: Tn,
        __disposeResources: ii,
        __esDecorate: kn,
        __exportStar: zn,
        __extends: Mn,
        __generator: Vn,
        __importDefault: $n,
        __importStar: Zn,
        __makeTemplateObject: Xn,
        __metadata: Nn,
        __param: Bn,
        __propKey: xn,
        __read: Bt,
        __rest: Fn,
        __rewriteRelativeImportExtension: oi,
        __runInitializers: Un,
        __setFunctionName: Ln,
        __spread: Hn,
        __spreadArray: Kn,
        __spreadArrays: Wn,
        __values: Qe,
        default: Ii,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = wi(Ci);
var W = {},
  Lt;
function Ai() {
  return (
    Lt ||
      ((Lt = 1),
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
var ot = {},
  st = {},
  K = {},
  J = {},
  Nt;
function O() {
  if (Nt) return J;
  ((Nt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.BridgeAPIError = void 0));
  class e extends Error {}
  return ((J.BridgeAPIError = e), J);
}
var Gt;
function R() {
  if (Gt) return K;
  ((Gt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
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
var Y = {},
  Vt;
function Ze() {
  if (Vt) return Y;
  ((Vt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.withRateLimiter = void 0));
  const e = O(),
    r = (a, u, n, i) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const o = Date.now();
        if ((o - t > n && ((t = o), (c = 0)), c >= u))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), a(...l));
      };
    };
  return ((Y.withRateLimiter = r), Y);
}
var zt;
function ji() {
  return (
    zt ||
      ((zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = R(),
          a = O(),
          u = Ze(),
          n = (0, r.getCallBridge)(),
          i = (l) => {
            if (l && Object.values(l).some((o) => typeof o == "function"))
              throw new a.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, o) => {
            if (typeof l != "string") throw new a.BridgeAPIError("functionKey must be a string!");
            return (i(o), n("invoke", { functionKey: l, payload: o }));
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
      })(st)),
    st
  );
}
var Ht;
function He() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(ji(), e));
      })(ot)),
    ot
  );
}
var at = {},
  Q = {},
  ut = {},
  Wt;
function si() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = R(),
          a = O(),
          u = Ze(),
          n = 500,
          i = 25,
          t = 1e3 * i;
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
          o = (d) => async (v) => {
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
            const v = o(d);
            return (0, u.withRateLimiter)(
              v,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = s;
      })(ut)),
    ut
  );
}
var Kt;
function Di() {
  if (Kt) return Q;
  ((Kt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = si(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(a);
  return ((Q.invokeRemote = r), Q);
}
var X = {},
  Jt;
function qi() {
  if (Jt) return X;
  ((Jt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = si(),
    r = (a) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(a);
  return ((X.invokeService = r), X);
}
var Yt;
function Mi() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Di(), e), r.__exportStar(qi(), e));
      })(at)),
    at
  );
}
var lt = {},
  Z = {},
  $ = {},
  Qt;
function Fi() {
  if (Qt) return $;
  ((Qt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.submit = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await a("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return (($.submit = u), $);
}
var ee = {},
  Xt;
function Ti() {
  if (Xt) return ee;
  ((Xt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.close = void 0));
  const e = R(),
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
  return ((ee.close = u), ee);
}
var te = {},
  Zt;
function Bi() {
  if (Zt) return te;
  ((Zt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.open = void 0));
  const e = R(),
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
  return ((te.open = u), te);
}
var re = {},
  $t;
function ki() {
  if ($t) return re;
  (($t = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.refresh = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      if ((await a("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((re.refresh = u), re);
}
var ne = {},
  er;
function Ui() {
  if (er) return ne;
  ((er = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.createHistory = void 0));
  const r = (0, R().getCallBridge)(),
    a = async () => {
      const u = await r("createHistory");
      return (
        u.listen((n) => {
          u.location = n;
        }),
        u
      );
    };
  return ((ne.createHistory = a), ne);
}
var ie = {},
  ct = {},
  C = {},
  tr;
function ai() {
  return (
    tr ||
      ((tr = 1),
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
var T = {},
  rr;
function xi() {
  if (rr) return T;
  ((rr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.TranslationsGetter = T.TranslationGetterError = void 0));
  const e = (u, n) => {
    u.includes(n) || u.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  T.TranslationGetterError = r;
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
        const o = await this.getTranslationResource(l);
        if (o) return { translations: o, locale: l };
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
        o = c[n];
      return (
        o && Array.isArray(o) && o.length > 0 && l.push(...o),
        e(l, i.fallback.default),
        l.filter((s) => t.includes(s))
      );
    }
  }
  return ((T.TranslationsGetter = a), T);
}
var oe = {},
  dt = {},
  nr;
function ui() {
  return (
    nr ||
      ((nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const a = P.__importDefault(Ei()),
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
      })(dt)),
    dt
  );
}
var ir;
function Li() {
  if (ir) return oe;
  ((ir = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.Translator = void 0));
  const e = ui();
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
var se = {},
  or;
function Ni() {
  if (or) return se;
  ((or = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.ensureLocale = void 0));
  const e = ai(),
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
  return ((se.ensureLocale = n), se);
}
var ft = {},
  sr;
function Gi() {
  return (
    sr ||
      ((sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (o) => typeof o == "object" && o !== null && !Array.isArray(o),
          a = (o) => typeof o?.i18n == "string",
          u = (o) => o.startsWith("connect-"),
          n = (o) => o.startsWith("core:"),
          i = (o) => {
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
            return d(o, []);
          },
          t = (o) =>
            Object.entries(o).flatMap(([s, d]) =>
              !u(s) && !n(s) && d && Array.isArray(d) && d.length > 0 ? d.map((v) => [v, s]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (o) => {
          const s = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const v = i(d[0]);
            for (const { key: f } of v) s.add(f);
          }
          return s.size > 0 ? Array.from(s) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (o) => {
          const s = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const v = i(d[0]);
            for (const f of v) s.push({ moduleName: d[1], ...f });
          }
          return s;
        };
        e.extractI18nPropertiesFromModules = l;
      })(ft)),
    ft
  );
}
var _t = {},
  ar;
function Vi() {
  return (ar || ((ar = 1), Object.defineProperty(_t, "__esModule", { value: !0 })), _t);
}
var ur;
function li() {
  return (
    ur ||
      ((ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = P;
        (r.__exportStar(ai(), e),
          r.__exportStar(xi(), e),
          r.__exportStar(Li(), e),
          r.__exportStar(Ni(), e));
        var a = ui();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return a.getTranslationValue;
          },
        });
        var u = Gi();
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
          r.__exportStar(Vi(), e));
      })(ct)),
    ct
  );
}
var lr;
function zi() {
  if (lr) return ie;
  ((lr = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.getContext = void 0));
  const e = R(),
    r = li(),
    a = (0, e.getCallBridge)(),
    u = async () => {
      var n;
      const i = await a("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((ie.getContext = u), ie);
}
var ae = {},
  cr;
function Hi() {
  if (cr) return ae;
  ((cr = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.changeWindowTitle = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = async (n) => {
      try {
        await a("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ae.changeWindowTitle = u), ae);
}
var ue = {},
  dr;
function Wi() {
  if (dr) return ue;
  ((dr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.theme = void 0));
  const r = (0, R().getCallBridge)();
  return ((ue.theme = { enable: () => r("enableTheming") }), ue);
}
var le = {},
  ce = {},
  ht = {},
  B = {},
  fr;
function ci() {
  if (fr) return B;
  ((fr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.blobToBase64 = B.base64ToBlob = void 0));
  const e = (a, u) => {
    if (!a) return null;
    const n = a.includes(";base64") ? a.split(",")[1] : a,
      i = atob(n),
      t = new Array(i.length);
    for (let l = 0; l < i.length; l++) t[l] = i.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: u });
  };
  B.base64ToBlob = e;
  const r = (a) =>
    new Promise((u, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        u(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(a));
    });
  return ((B.blobToBase64 = r), B);
}
var _r;
function Ki() {
  return (
    _r ||
      ((_r = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = ci(),
          a = (o) => {
            if (
              typeof o != "object" ||
              o === null ||
              Object.prototype.toString.call(o) !== "[object Object]"
            )
              return !1;
            const s = Object.getPrototypeOf(o);
            if (s === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(s, "constructor") && s.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(o)
            );
          },
          u = async (o) => ({ data: await (0, r.blobToBase64)(o), type: o.type }),
          n = (o) => (0, r.base64ToBlob)(o.data, o.type),
          i = async (o) => {
            if (o instanceof Blob) return { ...(await u(o)), __isBlobData: !0 };
            if (Array.isArray(o))
              return Promise.all(o.map((s) => (0, e.serialiseBlobsInPayload)(s)));
            if (o && a(o)) {
              const s = await Promise.all(
                Object.entries(o).map(async ([d, v]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(v),
                ]),
              );
              return Object.fromEntries(s);
            }
            return o;
          };
        e.serialiseBlobsInPayload = i;
        const t = (o) => {
          if (o && a(o) && "__isBlobData" in o) {
            const s = o;
            return n({ data: s.data, type: s.type });
          }
          if (Array.isArray(o)) return o.map((s) => (0, e.deserialiseBlobsInPayload)(s));
          if (o && a(o)) {
            const s = {};
            for (const [d, v] of Object.entries(o)) s[d] = (0, e.deserialiseBlobsInPayload)(v);
            return s;
          }
          return o;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (o) =>
          o instanceof Blob
            ? !0
            : Array.isArray(o)
              ? o.some((s) => (0, e.containsBlobs)(s))
              : o && a(o)
                ? Object.values(o).some((s) => (0, e.containsBlobs)(s))
                : !1;
        e.containsBlobs = c;
        const l = (o) =>
          o && a(o) && "__isBlobData" in o
            ? !0
            : Array.isArray(o)
              ? o.some((s) => (0, e.containsSerialisedBlobs)(s))
              : o && a(o)
                ? Object.values(o).some((s) => (0, e.containsSerialisedBlobs)(s))
                : !1;
        e.containsSerialisedBlobs = l;
      })(ht)),
    ht
  );
}
var hr;
function di() {
  if (hr) return ce;
  ((hr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.events = void 0));
  const e = R(),
    r = Ki(),
    a = (0, e.getCallBridge)(),
    u = (l) => (o) => {
      let s = o;
      return ((0, r.containsSerialisedBlobs)(o) && (s = (0, r.deserialiseBlobsInPayload)(o)), l(s));
    },
    n = async (l, o) => {
      let s = o;
      return (
        (0, r.containsBlobs)(o) && (s = await (0, r.serialiseBlobsInPayload)(o)),
        a("emit", { event: l, payload: s })
      );
    },
    i = (l, o) => a("on", { event: l, callback: u(o) }),
    t = async (l, o) => {
      let s = o;
      return (
        (0, r.containsBlobs)(o) && (s = await (0, r.serialiseBlobsInPayload)(o)),
        a("emitPublic", { event: l, payload: s })
      );
    },
    c = (l, o) => a("onPublic", { event: l, callback: u(o) });
  return ((ce.events = { emit: n, on: i, emitPublic: t, onPublic: c }), ce);
}
var vr;
function Ji() {
  if (vr) return le;
  ((vr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.emitReadyEvent = void 0));
  const e = di(),
    r = vi(),
    u = (0, R().getCallBridge)(),
    n = "EXTENSION_READY",
    i = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await u("emitReadyEvent");
      } catch {}
    };
  return ((le.emitReadyEvent = i), le);
}
const Yi = "modulepreload",
  Qi = function (e, r) {
    return new URL(e, r).href;
  },
  gr = {},
  Xi = function (r, a, u) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      let o = function (s) {
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
      n = o(
        a.map((s) => {
          if (((s = Qi(s, u)), s in gr)) return;
          gr[s] = !0;
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
            ((f.rel = d ? "stylesheet" : Yi),
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
    function i(t) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = t), window.dispatchEvent(c), !c.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const c of t || []) c.status === "rejected" && i(c.reason);
      return r().catch(i);
    });
  };
var de = {},
  vt = {},
  fe = {},
  We = {},
  pr;
function fi() {
  if (pr) return We;
  ((pr = 1), Object.defineProperty(We, "__esModule", { value: !0 }), (We.default = a));
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
  return We;
}
var N = {},
  _e = {},
  he = {},
  yr;
function Zi() {
  if (yr) return he;
  ((yr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((he.default = e), he);
}
var mr;
function $e() {
  if (mr) return _e;
  ((mr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = r(Zi());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var u = a;
  return ((_e.default = u), _e);
}
var br;
function et() {
  if (br) return N;
  ((br = 1),
    Object.defineProperty(N, "__esModule", { value: !0 }),
    (N.default = void 0),
    (N.unsafeStringify = u));
  var e = r($e());
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
  return ((N.default = i), N);
}
var wr;
function $i() {
  if (wr) return fe;
  ((wr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = a(fi()),
    r = et();
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  let u,
    n,
    i = 0,
    t = 0;
  function c(o, s, d) {
    let v = (s && d) || 0;
    const f = s || new Array(16);
    o = o || {};
    let p = o.node || u,
      _ = o.clockseq !== void 0 ? o.clockseq : n;
    if (p == null || _ == null) {
      const E = o.random || (o.rng || e.default)();
      (p == null && (p = u = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        _ == null && (_ = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let h = o.msecs !== void 0 ? o.msecs : Date.now(),
      g = o.nsecs !== void 0 ? o.nsecs : t + 1;
    const y = h - i + (g - t) / 1e4;
    if (
      (y < 0 && o.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || h > i) && o.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = h), (t = g), (n = _), (h += 122192928e5));
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
  return ((fe.default = l), fe);
}
var ve = {},
  j = {},
  ge = {},
  Er;
function _i() {
  if (Er) return ge;
  ((Er = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = r($e());
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
  return ((ge.default = u), ge);
}
var Rr;
function hi() {
  if (Rr) return j;
  ((Rr = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.URL = j.DNS = void 0),
    (j.default = t));
  var e = et(),
    r = a(_i());
  function a(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function u(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let o = 0; o < c.length; ++o) l.push(c.charCodeAt(o));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  j.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  j.URL = i;
  function t(c, l, o) {
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
        (h = o(h)),
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
    return ((s.DNS = n), (s.URL = i), s);
  }
  return j;
}
var pe = {},
  Or;
function eo() {
  if (Or) return pe;
  ((Or = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
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
        S = g,
        q = y;
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
        (_ = o(_, h, g, y, f[m + 1], 5, -165796510)),
        (y = o(y, _, h, g, f[m + 6], 9, -1069501632)),
        (g = o(g, y, _, h, f[m + 11], 14, 643717713)),
        (h = o(h, g, y, _, f[m], 20, -373897302)),
        (_ = o(_, h, g, y, f[m + 5], 5, -701558691)),
        (y = o(y, _, h, g, f[m + 10], 9, 38016083)),
        (g = o(g, y, _, h, f[m + 15], 14, -660478335)),
        (h = o(h, g, y, _, f[m + 4], 20, -405537848)),
        (_ = o(_, h, g, y, f[m + 9], 5, 568446438)),
        (y = o(y, _, h, g, f[m + 14], 9, -1019803690)),
        (g = o(g, y, _, h, f[m + 3], 14, -187363961)),
        (h = o(h, g, y, _, f[m + 8], 20, 1163531501)),
        (_ = o(_, h, g, y, f[m + 13], 5, -1444681467)),
        (y = o(y, _, h, g, f[m + 2], 9, -51403784)),
        (g = o(g, y, _, h, f[m + 7], 14, 1735328473)),
        (h = o(h, g, y, _, f[m + 12], 20, -1926607734)),
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
        (_ = i(_, b)),
        (h = i(h, E)),
        (g = i(g, S)),
        (y = i(y, q)));
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
  function i(f, p) {
    const _ = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, _, h, g, y) {
    return i(t(i(i(p, f), i(h, y)), g), _);
  }
  function l(f, p, _, h, g, y, m) {
    return c((p & _) | (~p & h), f, p, g, y, m);
  }
  function o(f, p, _, h, g, y, m) {
    return c((p & h) | (_ & ~h), f, p, g, y, m);
  }
  function s(f, p, _, h, g, y, m) {
    return c(p ^ _ ^ h, f, p, g, y, m);
  }
  function d(f, p, _, h, g, y, m) {
    return c(_ ^ (p | ~h), f, p, g, y, m);
  }
  var v = e;
  return ((pe.default = v), pe);
}
var Pr;
function to() {
  if (Pr) return ve;
  ((Pr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = a(hi()),
    r = a(eo());
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ve.default = n), ve);
}
var ye = {},
  me = {},
  Sr;
function ro() {
  if (Sr) return me;
  ((Sr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((me.default = r), me);
}
var Ir;
function no() {
  if (Ir) return ye;
  ((Ir = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = u(ro()),
    r = u(fi()),
    a = et();
  function u(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, l) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const o = t.random || (t.rng || r.default)();
    if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), c)) {
      l = l || 0;
      for (let s = 0; s < 16; ++s) c[l + s] = o[s];
      return c;
    }
    return (0, a.unsafeStringify)(o);
  }
  var i = n;
  return ((ye.default = i), ye);
}
var be = {},
  we = {},
  Cr;
function io() {
  if (Cr) return we;
  ((Cr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
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
      const s = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < s.length; ++d) n.push(s.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      l = Math.ceil(c / 16),
      o = new Array(l);
    for (let s = 0; s < l; ++s) {
      const d = new Uint32Array(16);
      for (let v = 0; v < 16; ++v)
        d[v] =
          (n[s * 64 + v * 4] << 24) |
          (n[s * 64 + v * 4 + 1] << 16) |
          (n[s * 64 + v * 4 + 2] << 8) |
          n[s * 64 + v * 4 + 3];
      o[s] = d;
    }
    ((o[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (o[l - 1][14] = Math.floor(o[l - 1][14])),
      (o[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let s = 0; s < l; ++s) {
      const d = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) d[g] = o[s][g];
      for (let g = 16; g < 80; ++g) d[g] = r(d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16], 1);
      let v = t[0],
        f = t[1],
        p = t[2],
        _ = t[3],
        h = t[4];
      for (let g = 0; g < 80; ++g) {
        const y = Math.floor(g / 20),
          m = (r(v, 5) + e(y, f, p, _) + h + i[y] + d[g]) >>> 0;
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
  return ((we.default = u), we);
}
var Ar;
function oo() {
  if (Ar) return be;
  ((Ar = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = a(hi()),
    r = a(io());
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((be.default = n), be);
}
var Ee = {},
  jr;
function so() {
  if (jr) return Ee;
  ((jr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Ee.default = e), Ee);
}
var Re = {},
  Dr;
function ao() {
  if (Dr) return Re;
  ((Dr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.default = void 0));
  var e = r($e());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var u = a;
  return ((Re.default = u), Re);
}
var qr;
function uo() {
  return (
    qr ||
      ((qr = 1),
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
              return o.default;
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
        var r = s($i()),
          a = s(to()),
          u = s(no()),
          n = s(oo()),
          i = s(so()),
          t = s(ao()),
          c = s($e()),
          l = s(et()),
          o = s(_i());
        function s(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(vt)),
    vt
  );
}
var Mr;
function lo() {
  if (Mr) return de;
  ((Mr = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de.createAdfRendererIframeProps = void 0));
  const e = uo(),
    r = async (a, u) => {
      const n = await Xi(
          () => import("./index-CT8OtY7f.js").then((s) => s.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = u || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        o = () => {
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
          (i.iframeResizer(
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
        { id: l, src: c, onLoad: o }
      );
    };
  return ((de.createAdfRendererIframeProps = r), de);
}
var Oe = {},
  Fr;
function co() {
  if (Fr) return Oe;
  ((Fr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.onClose = void 0));
  const e = R(),
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
var Tr;
function vi() {
  if (Tr) return Z;
  ((Tr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.view = void 0));
  const e = Fi(),
    r = Ti(),
    a = Bi(),
    u = ki(),
    n = Ui(),
    i = zi(),
    t = Hi(),
    c = Wi(),
    l = Ji(),
    o = lo(),
    s = co();
  return (
    (Z.view = {
      submit: e.submit,
      close: r.close,
      onClose: s.onClose,
      open: a.open,
      refresh: u.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: o.createAdfRendererIframeProps,
    }),
    Z
  );
}
var Br;
function tt() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(vi(), e));
      })(lt)),
    lt
  );
}
var gt = {},
  Pe = {},
  kr;
function fo() {
  if (kr) return Pe;
  ((kr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.router = void 0));
  const r = (0, R().getCallBridge)(),
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
var Ur;
function _o() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(fo(), e));
      })(gt)),
    gt
  );
}
var pt = {},
  Se = {},
  xr;
function ho() {
  if (xr) return Se;
  ((xr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.Modal = void 0));
  const e = R(),
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
  return ((Se.Modal = n), Se);
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
var I = {},
  k = {},
  Nr;
function go() {
  if (Nr) return k;
  ((Nr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.productFetchApi = k.remoteFetchApi = void 0));
  const e = ci(),
    r = async (t, c = !1) => {
      const l = {};
      for (const [o, s] of t.entries())
        if (c ? o.startsWith("file") : o === "file") {
          const v = s.name,
            f = s.type;
          ((l[o] = await (0, e.blobToBase64)(s)), (l[`__${o}Name`] = v), (l[`__${o}Type`] = f));
        } else l[o] = s;
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
        o = l ? await r(c?.body, t === "remote") : c?.body,
        s = new Request("", { body: o, method: c?.method, headers: c?.headers }),
        d = Object.fromEntries(s.headers.entries());
      return {
        body: s.method !== "GET" ? await s.text() : null,
        headers: new Headers(d),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const c = async (l, o) => {
        const s = a(o),
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
      return { requestRemote: (l, o) => c(l, o) };
    };
  k.remoteFetchApi = n;
  const i = (t) => {
    const c = async (l, o, s) => {
      const d = a(s),
        { body: v, headers: f, isMultipartFormData: p } = await u("product", d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: l,
          restPath: o,
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
      requestConfluence: (l, o) => c("confluence", l, o),
      requestJira: (l, o) => c("jira", l, o),
      requestBitbucket: (l, o) => c("bitbucket", l, o),
    };
  };
  return ((k.productFetchApi = i), k);
}
var Gr;
function po() {
  if (Gr) return I;
  Gr = 1;
  var e;
  (Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.requestRemote = I.requestBitbucket = I.requestJira = I.requestConfluence = void 0));
  const r = R(),
    a = go();
  return (
    (e = (0, a.productFetchApi)((0, r.getCallBridge)())),
    (I.requestConfluence = e.requestConfluence),
    (I.requestJira = e.requestJira),
    (I.requestBitbucket = e.requestBitbucket),
    (I.requestRemote = (0, a.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    I
  );
}
var yt = {},
  Ie = {},
  Vr;
function yo() {
  if (Vr) return Ie;
  ((Vr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.showFlag = void 0));
  const e = R(),
    r = O(),
    a = (0, e.getCallBridge)(),
    u = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = a("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, a("closeFlag", { id: n.id })) };
    };
  return ((Ie.showFlag = u), Ie);
}
var zr;
function mo() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = yo();
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
var mt = {},
  Hr;
function bo() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(di(), e));
      })(mt)),
    mt
  );
}
var bt = {},
  Ce = {},
  Wr;
function wo() {
  if (Wr) return Ce;
  ((Wr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.realtime = void 0));
  const r = (0, R().getCallBridge)(),
    a = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    u = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    i = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Ce.realtime = { publish: a, subscribe: u, publishGlobal: n, subscribeGlobal: i }), Ce);
}
var wt = {},
  Kr;
function Eo() {
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
      })(wt)),
    wt
  );
}
var Jr;
function Ro() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = wo();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var a = Eo();
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
      })(bt)),
    bt
  );
}
var Et = {},
  Ae = {},
  Rt = {},
  Yr;
function Oo() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = R(),
          a = O(),
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
      })(Rt)),
    Rt
  );
}
var je = {},
  Qr;
function Po() {
  if (Qr) return je;
  ((Qr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.isEnabled = void 0));
  const r = (0, R().getCallBridge)(),
    a = () => r("isRovoEnabled");
  return ((je.isEnabled = a), je);
}
var Xr;
function So() {
  if (Xr) return Ae;
  ((Xr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.rovo = void 0));
  const e = Oo(),
    r = Po();
  return ((Ae.rovo = { open: e.open, isEnabled: r.isEnabled }), Ae);
}
var Zr;
function Io() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(So(), e));
      })(Et)),
    Et
  );
}
var A = {},
  $r;
function Co() {
  if ($r) return A;
  (($r = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.createTranslationFunction = A.getTranslations = A.resetTranslationsCache = void 0));
  const e = li(),
    r = tt(),
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
  const i = async (c = null, l = { fallback: !0 }) => {
    let o = c;
    return (o || (o = (await r.view.getContext()).locale), await u.getTranslations(o, l));
  };
  A.getTranslations = i;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const o = new e.Translator(l, u);
    return (
      await o.init(),
      (s, d) => {
        var v, f;
        return (f = (v = o.translate(s)) !== null && v !== void 0 ? v : d) !== null && f !== void 0
          ? f
          : s;
      }
    );
  };
  return ((A.createTranslationFunction = t), A);
}
var Ot = {},
  De = {},
  en;
function Ao() {
  if (en) return De;
  ((en = 1), Object.defineProperty(De, "__esModule", { value: !0 }), (De.permissions = void 0));
  const r = (0, R().getCallBridge)(),
    a = async (l) => r("__permission__egressGet", l),
    u = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    i = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (De.permissions = {
      egress: { get: a, set: u, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: c },
    }),
    De
  );
}
var U = {},
  Pt = {},
  St = {},
  qe = {},
  Me = {},
  tn;
function kt() {
  if (tn) return Me;
  ((tn = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.parseUrl = void 0));
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
  return ((Me.parseUrl = e), Me);
}
var It = {},
  rn;
function gi() {
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
            o = [];
          return (
            t.forEach((s) => {
              const d = c.test(s) ? s : `https://${s}`,
                v = (0, r.parseUrl)(d);
              v.hostname.startsWith("*")
                ? (l.add(v.hostname.substring(2)), o.push(a(v.hostname)))
                : l.add(v.hostname);
            }),
            [...l].sort().reduce((s, d) => (o.some((v) => v.test(d)) || s.push(d), s), [])
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
          const c = t.egress.filter((o) => {
              var s;
              if (
                ((s = o.category) === null || s === void 0 ? void 0 : s.toUpperCase()) ===
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
          for (const o of c)
            (l.has(o.type) || l.set(o.type, o.addresses),
              l.set(o.type, [...l.get(o.type), ...o.addresses]));
          return [...l.entries()].map(([o, s]) => ({ type: o, addresses: [...new Set(s)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(It)),
    It
  );
}
var nn;
function jo() {
  if (nn) return qe;
  ((nn = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe.EgressFilteringService = void 0));
  const e = kt(),
    r = gi();
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
  return ((qe.EgressFilteringService = a), qe);
}
var on;
function Do() {
  return (
    on ||
      ((on = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(jo(), e), r.__exportStar(kt(), e), r.__exportStar(gi(), e));
      })(St)),
    St
  );
}
var sn;
function qo() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Do(), e));
      })(Pt)),
    Pt
  );
}
var an;
function Mo() {
  if (an) return U;
  ((an = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.checkPermissions = U.createPermissionUtils = void 0));
  const e = qo(),
    r = tt();
  function a(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const u = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(d) {
    if (!d) return null;
    const { scopes: v, external: f = {} } = d,
      p = Array.isArray(v) ? v : Object.keys(v || {});
    return {
      hasScope: (_) => p.includes(_),
      canFetchFrom: (_, h) => {
        var g;
        const y = (g = f.fetch) === null || g === void 0 ? void 0 : g[_];
        if (!y?.length) return !1;
        const m = y.map(a).filter((S) => S.length > 0);
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
  U.createPermissionUtils = i;
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
  function o(d, v) {
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
    const _ = i(p);
    if (!_) return { granted: !1, missing: null };
    const h = {};
    let g = !0;
    const y = t(d.scopes, _);
    y && ((h.scopes = y), (g = !1));
    const m = o(d.external, _);
    return (m && ((h.external = m), (g = !1)), { granted: g, missing: g ? null : h });
  }
  return ((U.checkPermissions = s), U);
}
var un;
function Fo() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Ao(), e), r.__exportStar(Mo(), e));
      })(Ot)),
    Ot
  );
}
var Ct = {},
  At = {},
  jt = {},
  Fe = {},
  Te = {},
  ln;
function pi() {
  return (
    ln ||
      ((ln = 1),
      Object.defineProperty(Te, "__esModule", { value: !0 }),
      (Te.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Te.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Te
  );
}
var cn;
function rt() {
  if (cn) return Fe;
  ((cn = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = tt(),
    a = pi(),
    u = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(a.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Fe.checkRestrictedEnvironment = u), Fe);
}
var dn;
function To() {
  return (
    dn ||
      ((dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = He(),
          a = O(),
          u = rt(),
          i = (0, R().getCallBridge)(),
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
                  S = _.get(E),
                  q = h.get(E);
                return q === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: b,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const M = await fetch(y, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: M.ok,
                              key: b,
                              status: M.status,
                              error: M.ok ? void 0 : `Upload failed with status ${M.status}`,
                            };
                          } catch (M) {
                            return {
                              success: !1,
                              key: b,
                              status: 503,
                              error: M instanceof Error ? M.message : "Upload failed",
                            };
                          }
                        })(),
                        index: q,
                        objectType: S.type,
                        objectSize: S.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: b,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: q,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const o = async ({ functionKey: s, objects: d }) => {
          (await (0, u.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const v = await (0, e.createUploadPromises)({ functionKey: s, objects: d });
          return await Promise.all(v.map((p) => p.promise));
        };
        e.upload = o;
      })(jt)),
    jt
  );
}
var Be = {},
  fn;
function Bo() {
  if (fn) return Be;
  ((fn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.deleteObjects = void 0));
  const e = He(),
    r = O(),
    a = rt(),
    n = (0, R().getCallBridge)(),
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
  return ((Be.deleteObjects = i), Be);
}
var ke = {},
  _n;
function ko() {
  if (_n) return ke;
  ((_n = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.download = void 0));
  const e = He(),
    r = O(),
    a = rt(),
    n = (0, R().getCallBridge)(),
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
      const o = Object.entries(l).map(async ([d, v]) => {
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
      return await Promise.all(o);
    };
  return ((ke.download = i), ke);
}
var Ue = {},
  hn;
function Uo() {
  if (hn) return Ue;
  ((hn = 1), Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.getMetadata = void 0));
  const e = He(),
    r = O(),
    a = rt(),
    n = (0, R().getCallBridge)(),
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
        c.map(async (o) => {
          const s = await (0, e.invoke)(t, { key: o });
          return !s || typeof s != "object"
            ? { key: o, error: "Invalid response from functionKey" }
            : s;
        }),
      );
    };
  return ((Ue.getMetadata = i), Ue);
}
var vn;
function xo() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = To();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const a = Bo(),
          u = ko(),
          n = Uo();
        e.objectStore = {
          upload: r.upload,
          download: u.download,
          getMetadata: n.getMetadata,
          delete: a.deleteObjects,
        };
      })(At)),
    At
  );
}
var gn;
function Lo() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(xo(), e), r.__exportStar(pi(), e));
      })(Ct)),
    Ct
  );
}
var Dt = {},
  xe = {},
  x = {},
  G = {},
  Ke = {},
  pn;
function No() {
  if (pn) return Ke;
  ((pn = 1), Object.defineProperty(Ke, "__esModule", { value: !0 }));
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
      const o =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (o && (t.bootstrapMetadata = o), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((Ke.default = r), Ke);
}
var V = {},
  Le = {},
  yn;
function Go() {
  if (yn) return Le;
  ((yn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le._resolveDeltasResponse = void 0));
  const e = D(),
    r = 2;
  function a(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const o = u(t, l),
      s = n(o),
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
var mn;
function yi() {
  if (mn) return V;
  mn = 1;
  var e =
    (V && V.__awaiter) ||
    function (n, i, t, c) {
      function l(o) {
        return o instanceof t
          ? o
          : new t(function (s) {
              s(o);
            });
      }
      return new (t || (t = Promise))(function (o, s) {
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
          p.done ? o(p.value) : l(p.value).then(d, v);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(V, "__esModule", { value: !0 });
  const r = D(),
    a = Go();
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
    fetchEvaluations(i, t, c, l, o) {
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
            sinceTime: o && !y ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && o ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: y ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(i, h, g, c);
      });
    }
    _fetchEvaluations(i, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var o, s;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (o = d?.body) !== null && o !== void 0 ? o : null;
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
  return ((V.default = u), V);
}
var Ne = {},
  bn;
function Vo() {
  if (bn) return Ne;
  ((bn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne._makeParamStoreGetter = void 0));
  const e = D(),
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
  function i(s, d, v) {
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
  function o(s, d, v) {
    return (f, p) => {
      if (d == null) return p;
      const _ = d[f];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return n(_);
        case "gate":
          return i(s, _, v);
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
  return ((Ne._makeParamStoreGetter = o), Ne);
}
var L = {},
  wn;
function zo() {
  if (wn) return L;
  wn = 1;
  var e =
    (L && L.__awaiter) ||
    function (n, i, t, c) {
      function l(o) {
        return o instanceof t
          ? o
          : new t(function (s) {
              s(o);
            });
      }
      return new (t || (t = Promise))(function (o, s) {
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
          p.done ? o(p.value) : l(p.value).then(d, v);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.StatsigEvaluationsDataAdapter = void 0));
  const r = D(),
    a = yi();
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
        var o;
        const s = yield (o = this._network) === null || o === void 0
          ? void 0
          : o.fetchEvaluations(this._getSdkKey(), i, c?.priority, t, l);
        return s ?? null;
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
  return ((L.StatsigEvaluationsDataAdapter = u), L);
}
var En;
function Ho() {
  if (En) return G;
  En = 1;
  var e =
    (G && G.__awaiter) ||
    function (c, l, o, s) {
      function d(v) {
        return v instanceof o
          ? v
          : new o(function (f) {
              f(v);
            });
      }
      return new (o || (o = Promise))(function (v, f) {
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
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = D(),
    a = No(),
    u = yi(),
    n = Vo(),
    i = zo();
  let t = class Tt extends r.StatsigClientBase {
    static instance(l) {
      const o = (0, r._getStatsigGlobal)().instance(l);
      return o instanceof Tt
        ? o
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Tt(l ?? "", {}));
    }
    constructor(l, o, s = null) {
      var d, v;
      r.SDKType._setClientType(l, "javascript-client");
      const f = new u.default(s, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (d = s?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
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
        (this._user = this._configureUser(o, s)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (v = s?.plugins) !== null && v !== void 0 ? v : [];
      for (const _ of p) _.bind(this);
    }
    initializeSync(l) {
      var o;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((o = this._store.getWarnings()) !== null && o !== void 0 ? o : []),
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
    updateUserSync(l, o) {
      const s = performance.now();
      try {
        return this._updateUserSyncImpl(l, o, s);
      } catch (d) {
        const v = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(v, s);
      }
    }
    _updateUserSyncImpl(l, o, s) {
      var d;
      const v = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && v.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = o?.disableBackgroundCacheRefresh;
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
    updateUserAsync(l, o) {
      return e(this, void 0, void 0, function* () {
        const s = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, o);
        } catch (d) {
          const v = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(v, s);
        }
      });
    }
    _updateUserAsyncImpl(l, o) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const s = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(s);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, s, o)),
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
    checkGate(l, o) {
      return this.getFeatureGate(l, o).value;
    }
    logEvent(l, o, s) {
      const d = typeof l == "string" ? { eventName: l, value: o, metadata: s } : l;
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
    _createErrorUpdateDetails(l, o) {
      var s;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - o,
        l,
        null,
        [...((s = this._store.getWarnings()) !== null && s !== void 0 ? s : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, o) {
      this.dataAdapter.getDataAsync(l, o, { priority: "low" }).catch((s) => {
        r.Log.error("An error occurred after update.", s);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, o) {
      var s;
      const d = (0, r._normalizeUser)(l, o),
        v = (s = d.customIDs) === null || s === void 0 ? void 0 : s.stableID;
      return (v && r.StableID.setOverride(v, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, o) {
      var s, d;
      const { result: v, details: f } = this._store.getGate(l),
        p = (0, r._makeFeatureGate)(l, f, v),
        _ =
          (d = (s = this.overrideAdapter) === null || s === void 0 ? void 0 : s.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(s, p, this._user, o),
        h = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(l, o) {
      var s, d;
      const { result: v, details: f } = this._store.getConfig(l),
        p = (0, r._makeDynamicConfig)(l, f, v),
        _ =
          (d =
            (s = this.overrideAdapter) === null || s === void 0
              ? void 0
              : s.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(s, p, this._user, o),
        h = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(l, o) {
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
            : f.call(v, h, this._user, o),
        y = g ?? h;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(l, o) {
      var s, d, v;
      const { result: f, details: p } = this._store.getLayer(l),
        _ = (0, r._makeLayer)(l, p, f),
        h =
          (d =
            (s = this.overrideAdapter) === null || s === void 0 ? void 0 : s.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(s, _, this._user, o);
      o?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const g = (0, r._mergeOverride)(
        _,
        h,
        (v = h?.__value) !== null && v !== void 0 ? v : _.__value,
        (y) => {
          o?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, r._createLayerParameterExposure)(
                this._user,
                g,
                y,
                this._store.getExposureMapping(),
              ),
              o,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: g }), g);
    }
    _getParameterStoreImpl(l, o) {
      var s, d;
      const { result: v, details: f } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const p = {
          name: l,
          details: f,
          __configuration: v,
          get: (0, n._makeParamStoreGetter)(this, v, o),
        },
        _ =
          (d =
            (s = this.overrideAdapter) === null || s === void 0
              ? void 0
              : s.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(s, p, o);
      return (
        _ != null &&
          ((p.__configuration = _.config),
          (p.details = _.details),
          (p.get = (0, n._makeParamStoreGetter)(this, _.config, o))),
        p
      );
    }
  };
  return ((G.default = t), G);
}
var Rn;
function Wo() {
  return (
    Rn ||
      ((Rn = 1),
      (function (e) {
        var r =
            (x && x.__createBinding) ||
            (Object.create
              ? function (t, c, l, o) {
                  o === void 0 && (o = l);
                  var s = Object.getOwnPropertyDescriptor(c, l);
                  ((!s || ("get" in s ? !c.__esModule : s.writable || s.configurable)) &&
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(t, o, s));
                }
              : function (t, c, l, o) {
                  (o === void 0 && (o = l), (t[o] = c[l]));
                }),
          a =
            (x && x.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const u = D(),
          n = Ho();
        ((e.StatsigClient = n.default), a(D(), e));
        const i = Object.assign((0, u._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(x)),
    x
  );
}
var Ge = {},
  Ve = {},
  On;
function Ko() {
  if (On) return Ve;
  ((On = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.initFeatureFlags = void 0));
  const e = R(),
    r = O(),
    a = Ze(),
    u = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((o) => typeof o == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (t(l), i("initFeatureFlags", { user: l.user }));
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
var Pn;
function Jo() {
  if (Pn) return Ge;
  ((Pn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.ForgeDataAdapter = void 0));
  const e = Ko();
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
        o = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = o), o);
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
  return ((Ge.ForgeDataAdapter = r), Ge);
}
var qt = {},
  Sn;
function mi() {
  return (
    Sn ||
      ((Sn = 1),
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
      })(qt)),
    qt
  );
}
var ze = {},
  In;
function Yo() {
  if (In) return ze;
  ((In = 1),
    Object.defineProperty(ze, "__esModule", { value: !0 }),
    (ze.trackFeatureFlagEvent = void 0));
  const e = R(),
    r = O(),
    a = mi(),
    u = Ze(),
    n = 500,
    i = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (o) => {
      if (!o || !o.type || !o.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(o.type.toUpperCase() in a.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(o).some((s) => typeof s == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (o) => (c(o), t("trackFeatureFlagEvent", o));
  return (
    (ze.trackFeatureFlagEvent = (0, u.withRateLimiter)(
      l,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    ze
  );
}
var Cn;
function Qo() {
  if (Cn) return xe;
  ((Cn = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.ForgeFeatureFlags = void 0));
  const e = Wo(),
    r = Jo(),
    a = mi(),
    u = Yo();
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
      const o = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (l = o.environment) === null || l === void 0 ? void 0 : l.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(t), o)),
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
  return ((xe.ForgeFeatureFlags = n), xe);
}
var An;
function Xo() {
  return (
    An ||
      ((An = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Qo();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Dt)),
    Dt
  );
}
var jn;
function Zo() {
  return (
    jn ||
      ((jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = P;
        var a = Ai();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return a.NavigationTarget;
          },
        }),
          r.__exportStar(He(), e),
          r.__exportStar(Mi(), e),
          r.__exportStar(tt(), e),
          r.__exportStar(_o(), e),
          r.__exportStar(vo(), e),
          r.__exportStar(po(), e),
          r.__exportStar(mo(), e),
          r.__exportStar(bo(), e),
          r.__exportStar(Ro(), e),
          r.__exportStar(Io(), e),
          (e.i18n = r.__importStar(Co())),
          r.__exportStar(Fo(), e),
          r.__exportStar(Lo(), e),
          r.__exportStar(Xo(), e));
      })(it)),
    it
  );
}
var Je = Zo();
function $o() {
  const [e, r] = F.useState(""),
    [a, u] = F.useState(""),
    [n, i] = F.useState(""),
    [t, c] = F.useState(!1),
    [l, o] = F.useState(!1),
    [s, d] = F.useState(!1),
    [v, f] = F.useState([]),
    p = (b, E, S) => {
      f((q) => [{ id: Date.now(), query: b, result: E, timestamp: new Date(), type: S }, ...q]);
    },
    _ = async () => {
      try {
        (i(""), c(!0));
        const b = await Je.invoke("execute", { query: e });
        (u(b), p(e, b, "SQL"));
      } catch (b) {
        (i(b instanceof Error ? b.message : "An error occurred"), u(""));
      } finally {
        c(!1);
      }
    },
    h = async () => {
      try {
        (i(""), o(!0));
        const b = await Je.invoke("executeDDL", { query: e });
        (u(b), p(e, b, "DDL"));
      } catch (b) {
        (i(b instanceof Error ? b.message : "An error occurred"), u(""));
      } finally {
        o(!1);
      }
    },
    g = async () => {
      try {
        (i(""), d(!0));
        const b = await Je.invoke("executeCommand", { command: e });
        (u(b), p(e, b, "COMMAND"));
      } catch (b) {
        (i(b instanceof Error ? b.message : "An error occurred"), u(""));
      } finally {
        d(!1);
      }
    },
    y = (b) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      }).format(b),
    m = (b) => {
      switch (b) {
        case "SQL":
          return "#0052CC";
        case "DDL":
          return "#36B37E";
        case "COMMAND":
          return "#FF5630";
        default:
          return "#0052CC";
      }
    };
  return w.jsxs("div", {
    style: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
    children: [
      w.jsx("h1", { children: "SQL Query Executor" }),
      w.jsxs("div", {
        style: { marginBottom: "20px" },
        children: [
          w.jsx("textarea", {
            value: e,
            onChange: (b) => r(b.target.value),
            placeholder: "Enter your SQL query here...",
            style: {
              width: "100%",
              minHeight: "150px",
              padding: "10px",
              marginBottom: "10px",
              fontFamily: "monospace",
              fontSize: "14px",
            },
          }),
          w.jsxs("div", {
            style: { display: "flex", gap: "10px" },
            children: [
              w.jsx("button", {
                onClick: _,
                disabled: t || l || s,
                style: {
                  padding: "10px 20px",
                  backgroundColor: t ? "#0052CC80" : "#0052CC",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: t ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: t
                  ? w.jsxs(w.Fragment, {
                      children: [
                        w.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Query",
              }),
              w.jsx("button", {
                onClick: h,
                disabled: t || l || s,
                style: {
                  padding: "10px 20px",
                  backgroundColor: l ? "#36B37E80" : "#36B37E",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: l ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: l
                  ? w.jsxs(w.Fragment, {
                      children: [
                        w.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute DDL",
              }),
              w.jsx("button", {
                onClick: g,
                disabled: t || l || s,
                style: {
                  padding: "10px 20px",
                  backgroundColor: s ? "#FF563080" : "#FF5630",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: s ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: s
                  ? w.jsxs(w.Fragment, {
                      children: [
                        w.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Command",
              }),
            ],
          }),
        ],
      }),
      n &&
        w.jsx("div", {
          style: {
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          },
          children: n,
        }),
      a &&
        w.jsxs("div", {
          children: [
            w.jsx("h3", { children: "Result:" }),
            w.jsx("pre", {
              style: {
                backgroundColor: "#F4F5F7",
                padding: "15px",
                borderRadius: "3px",
                overflow: "auto",
                maxHeight: "400px",
              },
              children: a,
            }),
          ],
        }),
      v.length > 0 &&
        w.jsxs("div", {
          style: { marginTop: "30px" },
          children: [
            w.jsx("h2", { children: "Query History" }),
            w.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: "20px" },
              children: v.map((b) =>
                w.jsxs(
                  "div",
                  {
                    style: { border: "1px solid #DFE1E6", borderRadius: "3px", overflow: "hidden" },
                    children: [
                      w.jsxs("div", {
                        style: {
                          padding: "10px",
                          backgroundColor: m(b.type),
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          w.jsxs("span", {
                            style: { fontWeight: "bold" },
                            children: [b.type, " Query"],
                          }),
                          w.jsx("span", { children: y(b.timestamp) }),
                        ],
                      }),
                      w.jsxs("div", {
                        style: { padding: "15px" },
                        children: [
                          w.jsxs("div", {
                            style: { marginBottom: "10px" },
                            children: [
                              w.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Query:" }),
                              w.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: b.query,
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            children: [
                              w.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Result:" }),
                              w.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: b.result,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  b.id,
                ),
              ),
            }),
          ],
        }),
      w.jsx("style", {
        children: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
      }),
    ],
  });
}
const es = document.getElementById("root"),
  ts = bi.createRoot(es),
  Dn = () => {
    ts.render(w.jsx($o, {}));
  };
Je.view.theme
  .enable()
  .then(() => {
    Dn();
  })
  .catch((e) => {
    (console.error(e.message), Dn());
  });
