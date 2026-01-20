const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-BCqYYRNo.js", "./lodash-vendor-Dv-o4pqD.js"]),
) => i.map((i) => d[i]);
import { r as In, c as mi } from "./react-dom-vendor-BXC0oJZi.js";
import { g as yi, a as bi, r as wi } from "./lodash-vendor-Dv-o4pqD.js";
import { r as F } from "./client-core-vendor-CP5_oPjo.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const t of i.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
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
    const i = s(n);
    fetch(n.href, i);
  }
})();
var rt = { exports: {} },
  W = {};
var Tt;
function Ei() {
  if (Tt) return W;
  Tt = 1;
  var e = In(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, u, o) {
    var l,
      d = {},
      _ = null,
      f = null;
    (o !== void 0 && (_ = "" + o),
      u.key !== void 0 && (_ = "" + u.key),
      u.ref !== void 0 && (f = u.ref));
    for (l in u) a.call(u, l) && !i.hasOwnProperty(l) && (d[l] = u[l]);
    if (c && c.defaultProps) for (l in ((u = c.defaultProps), u)) d[l] === void 0 && (d[l] = u[l]);
    return { $$typeof: r, type: c, key: _, ref: f, props: d, _owner: n.current };
  }
  return ((W.Fragment = s), (W.jsx = t), (W.jsxs = t), W);
}
var kt;
function Ri() {
  return (kt || ((kt = 1), (rt.exports = Ei())), rt.exports);
}
var y = Ri(),
  I = In();
const Oi = yi(I);
var nt = {},
  Ft = function (e, r) {
    return (
      (Ft =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, a) {
            s.__proto__ = a;
          }) ||
        function (s, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (s[n] = a[n]);
        }),
      Ft(e, r)
    );
  };
function An(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ft(e, r);
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
        for (var s, a = 1, n = arguments.length; a < n; a++) {
          s = arguments[a];
          for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i]);
        }
        return r;
      }),
    Je.apply(this, arguments)
  );
};
function Fn(e, r) {
  var s = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (s[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      r.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (s[a[n]] = e[a[n]]);
  return s;
}
function Bn(e, r, s, a) {
  var n = arguments.length,
    i = n < 3 ? r : a === null ? (a = Object.getOwnPropertyDescriptor(r, s)) : a,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, s, a);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (i = (n < 3 ? t(i) : n > 3 ? t(r, s, i) : t(r, s)) || i);
  return (n > 3 && i && Object.defineProperty(r, s, i), i);
}
function Mn(e, r) {
  return function (s, a) {
    r(s, a, e);
  };
}
function Dn(e, r, s, a, n, i) {
  function t(v) {
    if (v !== void 0 && typeof v != "function") throw new TypeError("Function expected");
    return v;
  }
  for (
    var c = a.kind,
      u = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      o = !r && e ? (a.static ? e : e.prototype) : null,
      l = r || (o ? Object.getOwnPropertyDescriptor(o, a.name) : {}),
      d,
      _ = !1,
      f = s.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var h in a) p[h] = h === "access" ? {} : a[h];
    for (var h in a.access) p.access[h] = a.access[h];
    p.addInitializer = function (v) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(v || null));
    };
    var g = (0, s[f])(c === "accessor" ? { get: l.get, set: l.set } : l[u], p);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = t(g.get)) && (l.get = d),
        (d = t(g.set)) && (l.set = d),
        (d = t(g.init)) && n.unshift(d));
    } else (d = t(g)) && (c === "field" ? n.unshift(d) : (l[u] = d));
  }
  (o && Object.defineProperty(o, a.name, l), (_ = !0));
}
function qn(e, r, s) {
  for (var a = arguments.length > 2, n = 0; n < r.length; n++)
    s = a ? r[n].call(e, s) : r[n].call(e);
  return a ? s : void 0;
}
function Tn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function kn(e, r, s) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", r) : r })
  );
}
function Un(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Ln(e, r, s, a) {
  function n(i) {
    return i instanceof s
      ? i
      : new s(function (t) {
          t(i);
        });
  }
  return new (s || (s = Promise))(function (i, t) {
    function c(l) {
      try {
        o(a.next(l));
      } catch (d) {
        t(d);
      }
    }
    function u(l) {
      try {
        o(a.throw(l));
      } catch (d) {
        t(d);
      }
    }
    function o(l) {
      l.done ? i(l.value) : n(l.value).then(c, u);
    }
    o((a = a.apply(e, r || [])).next());
  });
}
function Nn(e, r) {
  var s = {
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
  function c(o) {
    return function (l) {
      return u([o, l]);
    };
  }
  function u(o) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), o[0] && (s = 0)), s; )
      try {
        if (
          ((a = 1),
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
            return (s.label++, { value: o[1], done: !1 });
          case 5:
            (s.label++, (n = o[1]), (o = [0]));
            continue;
          case 7:
            ((o = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((i = s.trys), !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
              s.label = o[1];
              break;
            }
            if (o[0] === 6 && s.label < i[1]) {
              ((s.label = i[1]), (i = o));
              break;
            }
            if (i && s.label < i[2]) {
              ((s.label = i[2]), s.ops.push(o));
              break;
            }
            (i[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        o = r.call(e, s);
      } catch (l) {
        ((o = [6, l]), (n = 0));
      } finally {
        a = i = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
var Qe = Object.create
  ? function (e, r, s, a) {
      a === void 0 && (a = s);
      var n = Object.getOwnPropertyDescriptor(r, s);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[s];
          },
        }),
        Object.defineProperty(e, a, n));
    }
  : function (e, r, s, a) {
      (a === void 0 && (a = s), (e[a] = r[s]));
    };
function Gn(e, r) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && Qe(r, e, s);
}
function Ye(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    s = r && e[r],
    a = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && a >= e.length && (e = void 0), { value: e && e[a++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Dt(e, r) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var a = s.call(e),
    n,
    i = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = a.next()).done; ) i.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (s = a.return) && s.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return i;
}
function Vn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Dt(arguments[r]));
  return e;
}
function zn() {
  for (var e = 0, r = 0, s = arguments.length; r < s; r++) e += arguments[r].length;
  for (var a = Array(e), n = 0, r = 0; r < s; r++)
    for (var i = arguments[r], t = 0, c = i.length; t < c; t++, n++) a[n] = i[t];
  return a;
}
function Wn(e, r, s) {
  if (s || arguments.length === 2)
    for (var a = 0, n = r.length, i; a < n; a++)
      (i || !(a in r)) && (i || (i = Array.prototype.slice.call(r, 0, a)), (i[a] = r[a]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function V(e) {
  return this instanceof V ? ((this.v = e), this) : new V(e);
}
function Hn(e, r, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = s.apply(e, r || []),
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
      ((n[f] = function (h) {
        return new Promise(function (g, v) {
          i.push([f, h, g, v]) > 1 || u(f, h);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function u(f, p) {
    try {
      o(a[f](p));
    } catch (h) {
      _(i[0][3], h);
    }
  }
  function o(f) {
    f.value instanceof V ? Promise.resolve(f.value.v).then(l, d) : _(i[0][2], f);
  }
  function l(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function _(f, p) {
    (f(p), i.shift(), i.length && u(i[0][0], i[0][1]));
  }
}
function Kn(e) {
  var r, s;
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
          return (s = !s) ? { value: V(e[n](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Jn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    s;
  return r
    ? r.call(e)
    : ((e = typeof Ye == "function" ? Ye(e) : e[Symbol.iterator]()),
      (s = {}),
      a("next"),
      a("throw"),
      a("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function a(i) {
    s[i] =
      e[i] &&
      function (t) {
        return new Promise(function (c, u) {
          ((t = e[i](t)), n(c, u, t.done, t.value));
        });
      };
  }
  function n(i, t, c, u) {
    Promise.resolve(u).then(function (o) {
      i({ value: o, done: c });
    }, t);
  }
}
function Yn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var Pi = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Bt = function (e) {
    return (
      (Bt =
        Object.getOwnPropertyNames ||
        function (r) {
          var s = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (s[s.length] = a);
          return s;
        }),
      Bt(e)
    );
  };
function Qn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var s = Bt(e), a = 0; a < s.length; a++) s[a] !== "default" && Qe(r, e, s[a]);
  return (Pi(r, e), r);
}
function Xn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Zn(e, r, s, a) {
  if (s === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? a : s === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function $n(e, r, s, a, n) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? n.call(e, s) : n ? (n.value = s) : r.set(e, s), s);
}
function ei(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function ti(e, r, s) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var a, n;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      a = r[Symbol.asyncDispose];
    }
    if (a === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((a = r[Symbol.dispose]), s && (n = a));
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
      e.stack.push({ value: r, dispose: a, async: s }));
  } else s && e.stack.push({ async: !0 });
  return r;
}
var Si =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, s) {
        var a = new Error(s);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function ri(e) {
  function r(i) {
    ((e.error = e.hasError ? new Si(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var s,
    a = 0;
  function n() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && a === 1) return ((a = 0), e.stack.push(s), Promise.resolve().then(n));
        if (s.dispose) {
          var i = s.dispose.call(s.value);
          if (s.async)
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
function ni(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, a, n, i, t) {
        return a
          ? r
            ? ".jsx"
            : ".js"
          : n && (!i || !t)
            ? s
            : n + i + "." + t.toLowerCase() + "js";
      })
    : e;
}
const ji = {
    __extends: An,
    __assign: Je,
    __rest: Fn,
    __decorate: Bn,
    __param: Mn,
    __esDecorate: Dn,
    __runInitializers: qn,
    __propKey: Tn,
    __setFunctionName: kn,
    __metadata: Un,
    __awaiter: Ln,
    __generator: Nn,
    __createBinding: Qe,
    __exportStar: Gn,
    __values: Ye,
    __read: Dt,
    __spread: Vn,
    __spreadArrays: zn,
    __spreadArray: Wn,
    __await: V,
    __asyncGenerator: Hn,
    __asyncDelegator: Kn,
    __asyncValues: Jn,
    __makeTemplateObject: Yn,
    __importStar: Qn,
    __importDefault: Xn,
    __classPrivateFieldGet: Zn,
    __classPrivateFieldSet: $n,
    __classPrivateFieldIn: ei,
    __addDisposableResource: ti,
    __disposeResources: ri,
    __rewriteRelativeImportExtension: ni,
  },
  xi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: ti,
        get __assign() {
          return Je;
        },
        __asyncDelegator: Kn,
        __asyncGenerator: Hn,
        __asyncValues: Jn,
        __await: V,
        __awaiter: Ln,
        __classPrivateFieldGet: Zn,
        __classPrivateFieldIn: ei,
        __classPrivateFieldSet: $n,
        __createBinding: Qe,
        __decorate: Bn,
        __disposeResources: ri,
        __esDecorate: Dn,
        __exportStar: Gn,
        __extends: An,
        __generator: Nn,
        __importDefault: Xn,
        __importStar: Qn,
        __makeTemplateObject: Yn,
        __metadata: Un,
        __param: Mn,
        __propKey: Tn,
        __read: Dt,
        __rest: Fn,
        __rewriteRelativeImportExtension: ni,
        __runInitializers: qn,
        __setFunctionName: kn,
        __spread: Vn,
        __spreadArray: Wn,
        __spreadArrays: zn,
        __values: Ye,
        default: ji,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = bi(xi);
var H = {},
  Ut;
function Ci() {
  return (
    Ut ||
      ((Ut = 1),
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
var it = {},
  ot = {},
  K = {},
  J = {},
  Lt;
function O() {
  if (Lt) return J;
  ((Lt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.BridgeAPIError = void 0));
  class e extends Error {}
  return ((J.BridgeAPIError = e), J);
}
var Nt;
function R() {
  if (Nt) return K;
  ((Nt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
  const e = O();
  function r(a) {
    return !!a?.callBridge;
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
var Y = {},
  Gt;
function Xe() {
  if (Gt) return Y;
  ((Gt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.withRateLimiter = void 0));
  const e = O(),
    r = (s, a, n, i) => {
      let t = Date.now(),
        c = 0;
      return async (...u) => {
        const o = Date.now();
        if ((o - t > n && ((t = o), (c = 0)), c >= a))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), s(...u));
      };
    };
  return ((Y.withRateLimiter = r), Y);
}
var Vt;
function Ii() {
  return (
    Vt ||
      ((Vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = R(),
          s = O(),
          a = Xe(),
          n = (0, r.getCallBridge)(),
          i = (u) => {
            if (u && Object.values(u).some((o) => typeof o == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (u, o) => {
            if (typeof u != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (i(o), n("invoke", { functionKey: u, payload: o }));
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
var zt;
function We() {
  return (
    zt ||
      ((zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Ii(), e));
      })(it)),
    it
  );
}
var st = {},
  Q = {},
  at = {},
  Wt;
function ii() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = R(),
          s = O(),
          a = Xe(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((_) => typeof _ == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (d) => async (_) => {
            u(_);
            const f = { ..._, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await c("invoke", f),
              { success: h, payload: g, error: v } = p ?? {},
              m = { ...(h ? g : v) };
            if (m && m.headers)
              for (const b in m.headers)
                Array.isArray(m.headers[b]) && (m.headers[b] = m.headers[b].join(","));
            return m;
          },
          l = (d) => {
            const _ = o(d);
            return (0, a.withRateLimiter)(
              _,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(at)),
    at
  );
}
var Ht;
function Ai() {
  if (Ht) return Q;
  ((Ht = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = ii(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((Q.invokeRemote = r), Q);
}
var X = {},
  Kt;
function Fi() {
  if (Kt) return X;
  ((Kt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = ii(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((X.invokeService = r), X);
}
var Jt;
function Bi() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Ai(), e), r.__exportStar(Fi(), e));
      })(st)),
    st
  );
}
var lt = {},
  Z = {},
  $ = {},
  Yt;
function Mi() {
  if (Yt) return $;
  ((Yt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.submit = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await s("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return (($.submit = a), $);
}
var ee = {},
  Qt;
function Di() {
  if (Qt) return ee;
  ((Qt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.close = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await s("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((ee.close = a), ee);
}
var te = {},
  Xt;
function qi() {
  if (Xt) return te;
  ((Xt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.open = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = async () => {
      try {
        if ((await s("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((te.open = a), te);
}
var re = {},
  Zt;
function Ti() {
  if (Zt) return re;
  ((Zt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.refresh = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await s("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((re.refresh = a), re);
}
var ne = {},
  $t;
function ki() {
  if ($t) return ne;
  (($t = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.createHistory = void 0));
  const r = (0, R().getCallBridge)(),
    s = async () => {
      const a = await r("createHistory");
      return (
        a.listen((n) => {
          a.location = n;
        }),
        a
      );
    };
  return ((ne.createHistory = s), ne);
}
var ie = {},
  ut = {},
  x = {},
  er;
function oi() {
  return (
    er ||
      ((er = 1),
      Object.defineProperty(x, "__esModule", { value: !0 }),
      (x.FORGE_SUPPORTED_LOCALE_CODES = x.I18N_BUNDLE_FOLDER_NAME = x.I18N_INFO_FILE_NAME = void 0),
      (x.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (x.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (x.FORGE_SUPPORTED_LOCALE_CODES = [
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
    x
  );
}
var M = {},
  tr;
function Ui() {
  if (tr) return M;
  ((tr = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.TranslationsGetter = M.TranslationGetterError = void 0));
  const e = (a, n) => {
    a.includes(n) || a.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  M.TranslationGetterError = r;
  class s {
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
        let u;
        return (
          t.locales.includes(n) && (u = await this.getTranslationResource(n)),
          { translations: u ?? null, locale: n }
        );
      }
      for (const u of this.getLocaleLookupOrder(n, t)) {
        const o = await this.getTranslationResource(u);
        if (o) return { translations: o, locale: u };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const i = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, i);
      return await Promise.all(
        t.map(async (c) => {
          const u = await this.getTranslationResource(c);
          return { locale: c, translations: u };
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
        u = [n],
        o = c[n];
      return (
        o && Array.isArray(o) && o.length > 0 && u.push(...o),
        e(u, i.fallback.default),
        u.filter((l) => t.includes(l))
      );
    }
  }
  return ((M.TranslationsGetter = s), M);
}
var oe = {},
  ct = {},
  rr;
function si() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = P.__importDefault(wi()),
          a = (i, t, c) => {
            const u = i[c];
            return u ? (0, e.getTranslationValueFromContent)(u, t) : null;
          };
        e.getTranslationValue = a;
        const n = (i, t) => {
          let c = i[t];
          if (!c) {
            const u = t.split(".");
            u.length > 1 && (c = (0, s.default)(i, u, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(ct)),
    ct
  );
}
var nr;
function Li() {
  if (nr) return oe;
  ((nr = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.Translator = void 0));
  const e = si();
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
var se = {},
  ir;
function Ni() {
  if (ir) return se;
  ((ir = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.ensureLocale = void 0));
  const e = oi(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    a = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, t) => {
        const [c] = t.split("-");
        return (i[c] || (i[c] = t), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const t = i.replace("_", "-");
      return r.has(t) ? t : (a[t] ?? s[t] ?? null);
    };
  return ((se.ensureLocale = n), se);
}
var dt = {},
  or;
function Gi() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (o) => typeof o == "object" && o !== null && !Array.isArray(o),
          s = (o) => typeof o?.i18n == "string",
          a = (o) => o.startsWith("connect-"),
          n = (o) => o.startsWith("core:"),
          i = (o) => {
            const l = new Set(),
              d = (_, f) =>
                !r(_) || l.has(_)
                  ? []
                  : (l.add(_),
                    Object.entries(_).flatMap(([p, h]) => {
                      const g = [...f, p];
                      return s(h)
                        ? [{ propertyPath: g, key: h.i18n }]
                        : Array.isArray(h)
                          ? h.flatMap((v) => d(v, g))
                          : d(h, g);
                    }));
            return d(o, []);
          },
          t = (o) =>
            Object.entries(o).flatMap(([l, d]) =>
              !a(l) && !n(l) && d && Array.isArray(d) && d.length > 0 ? d.map((_) => [_, l]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (o) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const _ = i(d[0]);
            for (const { key: f } of _) l.add(f);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const u = (o) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const _ = i(d[0]);
            for (const f of _) l.push({ moduleName: d[1], ...f });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = u;
      })(dt)),
    dt
  );
}
var ft = {},
  sr;
function Vi() {
  return (sr || ((sr = 1), Object.defineProperty(ft, "__esModule", { value: !0 })), ft);
}
var ar;
function ai() {
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
        const r = P;
        (r.__exportStar(oi(), e),
          r.__exportStar(Ui(), e),
          r.__exportStar(Li(), e),
          r.__exportStar(Ni(), e));
        var s = si();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var a = Gi();
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
          r.__exportStar(Vi(), e));
      })(ut)),
    ut
  );
}
var lr;
function zi() {
  if (lr) return ie;
  ((lr = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.getContext = void 0));
  const e = R(),
    r = ai(),
    s = (0, e.getCallBridge)(),
    a = async () => {
      var n;
      const i = await s("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((ie.getContext = a), ie);
}
var ae = {},
  ur;
function Wi() {
  if (ur) return ae;
  ((ur = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.changeWindowTitle = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        await s("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ae.changeWindowTitle = a), ae);
}
var le = {},
  cr;
function Hi() {
  if (cr) return le;
  ((cr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.theme = void 0));
  const r = (0, R().getCallBridge)();
  return ((le.theme = { enable: () => r("enableTheming") }), le);
}
var ue = {},
  ce = {},
  ht = {},
  D = {},
  dr;
function li() {
  if (dr) return D;
  ((dr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.blobToBase64 = D.base64ToBlob = void 0));
  const e = (s, a) => {
    if (!s) return null;
    const n = s.includes(";base64") ? s.split(",")[1] : s,
      i = atob(n),
      t = new Array(i.length);
    for (let u = 0; u < i.length; u++) t[u] = i.charCodeAt(u);
    const c = new Uint8Array(t);
    return new Blob([c], { type: a });
  };
  D.base64ToBlob = e;
  const r = (s) =>
    new Promise((a, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        a(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(s));
    });
  return ((D.blobToBase64 = r), D);
}
var fr;
function Ki() {
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
          s = (o) => {
            if (
              typeof o != "object" ||
              o === null ||
              Object.prototype.toString.call(o) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(o);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(o)
            );
          },
          a = async (o) => ({ data: await (0, r.blobToBase64)(o), type: o.type }),
          n = (o) => (0, r.base64ToBlob)(o.data, o.type),
          i = async (o) => {
            if (o instanceof Blob) return { ...(await a(o)), __isBlobData: !0 };
            if (Array.isArray(o))
              return Promise.all(o.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (o && s(o)) {
              const l = await Promise.all(
                Object.entries(o).map(async ([d, _]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(_),
                ]),
              );
              return Object.fromEntries(l);
            }
            return o;
          };
        e.serialiseBlobsInPayload = i;
        const t = (o) => {
          if (o && s(o) && "__isBlobData" in o) {
            const l = o;
            return n({ data: l.data, type: l.type });
          }
          if (Array.isArray(o)) return o.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (o && s(o)) {
            const l = {};
            for (const [d, _] of Object.entries(o)) l[d] = (0, e.deserialiseBlobsInPayload)(_);
            return l;
          }
          return o;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (o) =>
          o instanceof Blob
            ? !0
            : Array.isArray(o)
              ? o.some((l) => (0, e.containsBlobs)(l))
              : o && s(o)
                ? Object.values(o).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = c;
        const u = (o) =>
          o && s(o) && "__isBlobData" in o
            ? !0
            : Array.isArray(o)
              ? o.some((l) => (0, e.containsSerialisedBlobs)(l))
              : o && s(o)
                ? Object.values(o).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = u;
      })(ht)),
    ht
  );
}
var hr;
function ui() {
  if (hr) return ce;
  ((hr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.events = void 0));
  const e = R(),
    r = Ki(),
    s = (0, e.getCallBridge)(),
    a = async (i, t) => {
      let c = t;
      return (
        (0, r.containsBlobs)(t) && (c = await (0, r.serialiseBlobsInPayload)(t)),
        s("emit", { event: i, payload: c })
      );
    },
    n = (i, t) =>
      s("on", {
        event: i,
        callback: (u) => {
          let o = u;
          return (
            (0, r.containsSerialisedBlobs)(u) && (o = (0, r.deserialiseBlobsInPayload)(u)),
            t(o)
          );
        },
      });
  return ((ce.events = { emit: a, on: n }), ce);
}
var gr;
function Ji() {
  if (gr) return ue;
  ((gr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = ui(),
    r = hi(),
    s = R(),
    a = O(),
    n = (0, s.getCallBridge)(),
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
  return ((ue.emitReadyEvent = t), ue);
}
const Yi = "modulepreload",
  Qi = function (e, r) {
    return new URL(e, r).href;
  },
  _r = {},
  Xi = function (r, s, a) {
    let n = Promise.resolve();
    if (s && s.length > 0) {
      let o = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (_) => ({ status: "fulfilled", value: _ }),
              (_) => ({ status: "rejected", reason: _ }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        u = c?.nonce || c?.getAttribute("nonce");
      n = o(
        s.map((l) => {
          if (((l = Qi(l, a)), l in _r)) return;
          _r[l] = !0;
          const d = l.endsWith(".css"),
            _ = d ? '[rel="stylesheet"]' : "";
          if (a)
            for (let p = t.length - 1; p >= 0; p--) {
              const h = t[p];
              if (h.href === l && (!d || h.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${_}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = d ? "stylesheet" : Yi),
            d || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            u && f.setAttribute("nonce", u),
            document.head.appendChild(f),
            d)
          )
            return new Promise((p, h) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${l}`))));
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
  gt = {},
  fe = {},
  He = {},
  vr;
function ci() {
  if (vr) return He;
  ((vr = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.default = s));
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
  return He;
}
var L = {},
  he = {},
  ge = {},
  pr;
function Zi() {
  if (pr) return ge;
  ((pr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ge.default = e), ge);
}
var mr;
function Ze() {
  if (mr) return he;
  ((mr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = r(Zi());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var a = s;
  return ((he.default = a), he);
}
var yr;
function $e() {
  if (yr) return L;
  ((yr = 1),
    Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.default = void 0),
    (L.unsafeStringify = a));
  var e = r(Ze());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const s = [];
  for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
  function a(t, c = 0) {
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
    const u = a(t, c);
    if (!(0, e.default)(u)) throw TypeError("Stringified UUID is invalid");
    return u;
  }
  var i = n;
  return ((L.default = i), L);
}
var br;
function $i() {
  if (br) return fe;
  ((br = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = s(ci()),
    r = $e();
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  let a,
    n,
    i = 0,
    t = 0;
  function c(o, l, d) {
    let _ = (l && d) || 0;
    const f = l || new Array(16);
    o = o || {};
    let p = o.node || a,
      h = o.clockseq !== void 0 ? o.clockseq : n;
    if (p == null || h == null) {
      const E = o.random || (o.rng || e.default)();
      (p == null && (p = a = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        h == null && (h = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let g = o.msecs !== void 0 ? o.msecs : Date.now(),
      v = o.nsecs !== void 0 ? o.nsecs : t + 1;
    const m = g - i + (v - t) / 1e4;
    if (
      (m < 0 && o.clockseq === void 0 && (h = (h + 1) & 16383),
      (m < 0 || g > i) && o.nsecs === void 0 && (v = 0),
      v >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = g), (t = v), (n = h), (g += 122192928e5));
    const b = ((g & 268435455) * 1e4 + v) % 4294967296;
    ((f[_++] = (b >>> 24) & 255),
      (f[_++] = (b >>> 16) & 255),
      (f[_++] = (b >>> 8) & 255),
      (f[_++] = b & 255));
    const w = ((g / 4294967296) * 1e4) & 268435455;
    ((f[_++] = (w >>> 8) & 255),
      (f[_++] = w & 255),
      (f[_++] = ((w >>> 24) & 15) | 16),
      (f[_++] = (w >>> 16) & 255),
      (f[_++] = (h >>> 8) | 128),
      (f[_++] = h & 255));
    for (let E = 0; E < 6; ++E) f[_ + E] = p[E];
    return l || (0, r.unsafeStringify)(f);
  }
  var u = c;
  return ((fe.default = u), fe);
}
var _e = {},
  A = {},
  ve = {},
  wr;
function di() {
  if (wr) return ve;
  ((wr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = r(Ze());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
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
  var a = s;
  return ((ve.default = a), ve);
}
var Er;
function fi() {
  if (Er) return A;
  ((Er = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.URL = A.DNS = void 0),
    (A.default = t));
  var e = $e(),
    r = s(di());
  function s(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function a(c) {
    c = unescape(encodeURIComponent(c));
    const u = [];
    for (let o = 0; o < c.length; ++o) u.push(c.charCodeAt(o));
    return u;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  A.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  A.URL = i;
  function t(c, u, o) {
    function l(d, _, f, p) {
      var h;
      if (
        (typeof d == "string" && (d = a(d)),
        typeof _ == "string" && (_ = (0, r.default)(_)),
        ((h = _) === null || h === void 0 ? void 0 : h.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + d.length);
      if (
        (g.set(_),
        g.set(d, _.length),
        (g = o(g)),
        (g[6] = (g[6] & 15) | u),
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
      l.name = c;
    } catch {}
    return ((l.DNS = n), (l.URL = i), l);
  }
  return A;
}
var pe = {},
  Rr;
function eo() {
  if (Rr) return pe;
  ((Rr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  function e(f) {
    if (typeof f == "string") {
      const p = unescape(encodeURIComponent(f));
      f = new Uint8Array(p.length);
      for (let h = 0; h < p.length; ++h) f[h] = p.charCodeAt(h);
    }
    return r(a(n(f), f.length * 8));
  }
  function r(f) {
    const p = [],
      h = f.length * 32,
      g = "0123456789abcdef";
    for (let v = 0; v < h; v += 8) {
      const m = (f[v >> 5] >>> (v % 32)) & 255,
        b = parseInt(g.charAt((m >>> 4) & 15) + g.charAt(m & 15), 16);
      p.push(b);
    }
    return p;
  }
  function s(f) {
    return (((f + 64) >>> 9) << 4) + 14 + 1;
  }
  function a(f, p) {
    ((f[p >> 5] |= 128 << (p % 32)), (f[s(p) - 1] = p));
    let h = 1732584193,
      g = -271733879,
      v = -1732584194,
      m = 271733878;
    for (let b = 0; b < f.length; b += 16) {
      const w = h,
        E = g,
        j = v,
        z = m;
      ((h = u(h, g, v, m, f[b], 7, -680876936)),
        (m = u(m, h, g, v, f[b + 1], 12, -389564586)),
        (v = u(v, m, h, g, f[b + 2], 17, 606105819)),
        (g = u(g, v, m, h, f[b + 3], 22, -1044525330)),
        (h = u(h, g, v, m, f[b + 4], 7, -176418897)),
        (m = u(m, h, g, v, f[b + 5], 12, 1200080426)),
        (v = u(v, m, h, g, f[b + 6], 17, -1473231341)),
        (g = u(g, v, m, h, f[b + 7], 22, -45705983)),
        (h = u(h, g, v, m, f[b + 8], 7, 1770035416)),
        (m = u(m, h, g, v, f[b + 9], 12, -1958414417)),
        (v = u(v, m, h, g, f[b + 10], 17, -42063)),
        (g = u(g, v, m, h, f[b + 11], 22, -1990404162)),
        (h = u(h, g, v, m, f[b + 12], 7, 1804603682)),
        (m = u(m, h, g, v, f[b + 13], 12, -40341101)),
        (v = u(v, m, h, g, f[b + 14], 17, -1502002290)),
        (g = u(g, v, m, h, f[b + 15], 22, 1236535329)),
        (h = o(h, g, v, m, f[b + 1], 5, -165796510)),
        (m = o(m, h, g, v, f[b + 6], 9, -1069501632)),
        (v = o(v, m, h, g, f[b + 11], 14, 643717713)),
        (g = o(g, v, m, h, f[b], 20, -373897302)),
        (h = o(h, g, v, m, f[b + 5], 5, -701558691)),
        (m = o(m, h, g, v, f[b + 10], 9, 38016083)),
        (v = o(v, m, h, g, f[b + 15], 14, -660478335)),
        (g = o(g, v, m, h, f[b + 4], 20, -405537848)),
        (h = o(h, g, v, m, f[b + 9], 5, 568446438)),
        (m = o(m, h, g, v, f[b + 14], 9, -1019803690)),
        (v = o(v, m, h, g, f[b + 3], 14, -187363961)),
        (g = o(g, v, m, h, f[b + 8], 20, 1163531501)),
        (h = o(h, g, v, m, f[b + 13], 5, -1444681467)),
        (m = o(m, h, g, v, f[b + 2], 9, -51403784)),
        (v = o(v, m, h, g, f[b + 7], 14, 1735328473)),
        (g = o(g, v, m, h, f[b + 12], 20, -1926607734)),
        (h = l(h, g, v, m, f[b + 5], 4, -378558)),
        (m = l(m, h, g, v, f[b + 8], 11, -2022574463)),
        (v = l(v, m, h, g, f[b + 11], 16, 1839030562)),
        (g = l(g, v, m, h, f[b + 14], 23, -35309556)),
        (h = l(h, g, v, m, f[b + 1], 4, -1530992060)),
        (m = l(m, h, g, v, f[b + 4], 11, 1272893353)),
        (v = l(v, m, h, g, f[b + 7], 16, -155497632)),
        (g = l(g, v, m, h, f[b + 10], 23, -1094730640)),
        (h = l(h, g, v, m, f[b + 13], 4, 681279174)),
        (m = l(m, h, g, v, f[b], 11, -358537222)),
        (v = l(v, m, h, g, f[b + 3], 16, -722521979)),
        (g = l(g, v, m, h, f[b + 6], 23, 76029189)),
        (h = l(h, g, v, m, f[b + 9], 4, -640364487)),
        (m = l(m, h, g, v, f[b + 12], 11, -421815835)),
        (v = l(v, m, h, g, f[b + 15], 16, 530742520)),
        (g = l(g, v, m, h, f[b + 2], 23, -995338651)),
        (h = d(h, g, v, m, f[b], 6, -198630844)),
        (m = d(m, h, g, v, f[b + 7], 10, 1126891415)),
        (v = d(v, m, h, g, f[b + 14], 15, -1416354905)),
        (g = d(g, v, m, h, f[b + 5], 21, -57434055)),
        (h = d(h, g, v, m, f[b + 12], 6, 1700485571)),
        (m = d(m, h, g, v, f[b + 3], 10, -1894986606)),
        (v = d(v, m, h, g, f[b + 10], 15, -1051523)),
        (g = d(g, v, m, h, f[b + 1], 21, -2054922799)),
        (h = d(h, g, v, m, f[b + 8], 6, 1873313359)),
        (m = d(m, h, g, v, f[b + 15], 10, -30611744)),
        (v = d(v, m, h, g, f[b + 6], 15, -1560198380)),
        (g = d(g, v, m, h, f[b + 13], 21, 1309151649)),
        (h = d(h, g, v, m, f[b + 4], 6, -145523070)),
        (m = d(m, h, g, v, f[b + 11], 10, -1120210379)),
        (v = d(v, m, h, g, f[b + 2], 15, 718787259)),
        (g = d(g, v, m, h, f[b + 9], 21, -343485551)),
        (h = i(h, w)),
        (g = i(g, E)),
        (v = i(v, j)),
        (m = i(m, z)));
    }
    return [h, g, v, m];
  }
  function n(f) {
    if (f.length === 0) return [];
    const p = f.length * 8,
      h = new Uint32Array(s(p));
    for (let g = 0; g < p; g += 8) h[g >> 5] |= (f[g / 8] & 255) << (g % 32);
    return h;
  }
  function i(f, p) {
    const h = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (h >> 16)) << 16) | (h & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, h, g, v, m) {
    return i(t(i(i(p, f), i(g, m)), v), h);
  }
  function u(f, p, h, g, v, m, b) {
    return c((p & h) | (~p & g), f, p, v, m, b);
  }
  function o(f, p, h, g, v, m, b) {
    return c((p & g) | (h & ~g), f, p, v, m, b);
  }
  function l(f, p, h, g, v, m, b) {
    return c(p ^ h ^ g, f, p, v, m, b);
  }
  function d(f, p, h, g, v, m, b) {
    return c(h ^ (p | ~g), f, p, v, m, b);
  }
  var _ = e;
  return ((pe.default = _), pe);
}
var Or;
function to() {
  if (Or) return _e;
  ((Or = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = s(fi()),
    r = s(eo());
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((_e.default = n), _e);
}
var me = {},
  ye = {},
  Pr;
function ro() {
  if (Pr) return ye;
  ((Pr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ye.default = r), ye);
}
var Sr;
function no() {
  if (Sr) return me;
  ((Sr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = a(ro()),
    r = a(ci()),
    s = $e();
  function a(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, u) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const o = t.random || (t.rng || r.default)();
    if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), c)) {
      u = u || 0;
      for (let l = 0; l < 16; ++l) c[u + l] = o[l];
      return c;
    }
    return (0, s.unsafeStringify)(o);
  }
  var i = n;
  return ((me.default = i), me);
}
var be = {},
  we = {},
  jr;
function io() {
  if (jr) return we;
  ((jr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
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
  function s(n) {
    const i = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const l = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < l.length; ++d) n.push(l.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      u = Math.ceil(c / 16),
      o = new Array(u);
    for (let l = 0; l < u; ++l) {
      const d = new Uint32Array(16);
      for (let _ = 0; _ < 16; ++_)
        d[_] =
          (n[l * 64 + _ * 4] << 24) |
          (n[l * 64 + _ * 4 + 1] << 16) |
          (n[l * 64 + _ * 4 + 2] << 8) |
          n[l * 64 + _ * 4 + 3];
      o[l] = d;
    }
    ((o[u - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (o[u - 1][14] = Math.floor(o[u - 1][14])),
      (o[u - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let l = 0; l < u; ++l) {
      const d = new Uint32Array(80);
      for (let v = 0; v < 16; ++v) d[v] = o[l][v];
      for (let v = 16; v < 80; ++v) d[v] = r(d[v - 3] ^ d[v - 8] ^ d[v - 14] ^ d[v - 16], 1);
      let _ = t[0],
        f = t[1],
        p = t[2],
        h = t[3],
        g = t[4];
      for (let v = 0; v < 80; ++v) {
        const m = Math.floor(v / 20),
          b = (r(_, 5) + e(m, f, p, h) + g + i[m] + d[v]) >>> 0;
        ((g = h), (h = p), (p = r(f, 30) >>> 0), (f = _), (_ = b));
      }
      ((t[0] = (t[0] + _) >>> 0),
        (t[1] = (t[1] + f) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + h) >>> 0),
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
  var a = s;
  return ((we.default = a), we);
}
var xr;
function oo() {
  if (xr) return be;
  ((xr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = s(fi()),
    r = s(io());
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((be.default = n), be);
}
var Ee = {},
  Cr;
function so() {
  if (Cr) return Ee;
  ((Cr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Ee.default = e), Ee);
}
var Re = {},
  Ir;
function ao() {
  if (Ir) return Re;
  ((Ir = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.default = void 0));
  var e = r(Ze());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var a = s;
  return ((Re.default = a), Re);
}
var Ar;
function lo() {
  return (
    Ar ||
      ((Ar = 1),
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
              return u.default;
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
        var r = l($i()),
          s = l(to()),
          a = l(no()),
          n = l(oo()),
          i = l(so()),
          t = l(ao()),
          c = l(Ze()),
          u = l($e()),
          o = l(di());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(gt)),
    gt
  );
}
var Fr;
function uo() {
  if (Fr) return de;
  ((Fr = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de.createAdfRendererIframeProps = void 0));
  const e = lo(),
    r = async (s, a) => {
      const n = await Xi(
          () => import("./index-BCqYYRNo.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        u = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        o = () => {
          var l, d;
          const _ = document.getElementById(u),
            f = {
              type: "adf-document",
              document: (l = s.extension.macro) === null || l === void 0 ? void 0 : l.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: s.localId,
            };
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (p) => {
                var h;
                (h = p?.iFrameResizer) === null || h === void 0 || h.resize();
              },
            },
            _ || "",
          ),
            (d = _?.contentWindow) === null || d === void 0 || d.postMessage(f, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: u, src: c, onLoad: o }
      );
    };
  return ((de.createAdfRendererIframeProps = r), de);
}
var Oe = {},
  Br;
function co() {
  if (Br) return Oe;
  ((Br = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.onClose = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await s("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((Oe.onClose = a), Oe);
}
var Mr;
function hi() {
  if (Mr) return Z;
  ((Mr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.view = void 0));
  const e = Mi(),
    r = Di(),
    s = qi(),
    a = Ti(),
    n = ki(),
    i = zi(),
    t = Wi(),
    c = Hi(),
    u = Ji(),
    o = uo(),
    l = co();
  return (
    (Z.view = {
      submit: e.submit,
      close: r.close,
      onClose: l.onClose,
      open: s.open,
      refresh: a.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
      createAdfRendererIframeProps: o.createAdfRendererIframeProps,
    }),
    Z
  );
}
var Dr;
function et() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(hi(), e));
      })(lt)),
    lt
  );
}
var _t = {},
  Pe = {},
  qr;
function fo() {
  if (qr) return Pe;
  ((qr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.router = void 0));
  const r = (0, R().getCallBridge)(),
    s = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const c = await r("getUrl", t);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${c} (${u})`);
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
  return ((Pe.router = { getUrl: s, navigate: a, open: n, reload: i }), Pe);
}
var Tr;
function ho() {
  return (
    Tr ||
      ((Tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(fo(), e));
      })(_t)),
    _t
  );
}
var vt = {},
  Se = {},
  kr;
function go() {
  if (kr) return Se;
  ((kr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.Modal = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = () => {};
  class n {
    constructor(t) {
      var c, u;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || a),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (c = t?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick = (u = t?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0),
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
var Ur;
function _o() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(go(), e));
      })(vt)),
    vt
  );
}
var S = {},
  q = {},
  Lr;
function vo() {
  if (Lr) return q;
  ((Lr = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.productFetchApi = q.remoteFetchApi = void 0));
  const e = li(),
    r = async (t) => {
      const c = {};
      for (const [u, o] of t.entries())
        if (u === "file") {
          const l = o.name,
            d = o.type;
          ((c.file = await (0, e.blobToBase64)(o)), (c.__fileName = l), (c.__fileType = d));
        } else c[u] = o;
      return JSON.stringify(c);
    },
    s = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: c, ...u } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          u
        );
      }
      return t;
    },
    a = async (t) => {
      const c = t?.body instanceof FormData,
        u = c ? await r(t?.body) : t?.body,
        o = new Request("", { body: u, method: t?.method, headers: t?.headers }),
        l = Object.fromEntries(o.headers.entries());
      return {
        body: o.method !== "GET" ? await o.text() : null,
        headers: new Headers(l),
        isMultipartFormData: c,
      };
    },
    n = (t) => {
      const c = async (u, o) => {
        const l = s(o),
          { body: d, headers: _, isMultipartFormData: f } = await a(l),
          p = {
            remoteKey: u,
            fetchRequestInit: { ...l, body: d, headers: [..._.entries()] },
            isMultipartFormData: f,
          },
          {
            body: h,
            headers: g,
            statusText: v,
            status: m,
            isAttachment: b,
          } = await t("fetchRemote", p),
          w = b ? (0, e.base64ToBlob)(h, g["content-type"]) : h;
        return new Response(w || null, { headers: g, status: m, statusText: v });
      };
      return { requestRemote: (u, o) => c(u, o) };
    };
  q.remoteFetchApi = n;
  const i = (t) => {
    const c = async (u, o, l) => {
      const d = s(l),
        { body: _, headers: f, isMultipartFormData: p } = await a(d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const h = {
          product: u,
          restPath: o,
          fetchRequestInit: { ...d, body: _, headers: [...f.entries()] },
          isMultipartFormData: p,
        },
        {
          body: g,
          headers: v,
          statusText: m,
          status: b,
          isAttachment: w,
        } = await t("fetchProduct", h),
        E = w ? (0, e.base64ToBlob)(g, v["content-type"]) : g;
      return new Response(E || null, { headers: v, status: b, statusText: m });
    };
    return {
      requestConfluence: (u, o) => c("confluence", u, o),
      requestJira: (u, o) => c("jira", u, o),
      requestBitbucket: (u, o) => c("bitbucket", u, o),
    };
  };
  return ((q.productFetchApi = i), q);
}
var Nr;
function po() {
  if (Nr) return S;
  Nr = 1;
  var e;
  (Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.requestRemote = S.requestBitbucket = S.requestJira = S.requestConfluence = void 0));
  const r = R(),
    s = vo();
  return (
    (e = (0, s.productFetchApi)((0, r.getCallBridge)())),
    (S.requestConfluence = e.requestConfluence),
    (S.requestJira = e.requestJira),
    (S.requestBitbucket = e.requestBitbucket),
    (S.requestRemote = (0, s.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    S
  );
}
var pt = {},
  je = {},
  Gr;
function mo() {
  if (Gr) return je;
  ((Gr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.showFlag = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    a = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = s("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, s("closeFlag", { id: n.id })) };
    };
  return ((je.showFlag = a), je);
}
var Vr;
function yo() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = mo();
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
var mt = {},
  zr;
function bo() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(ui(), e));
      })(mt)),
    mt
  );
}
var yt = {},
  xe = {},
  Wr;
function wo() {
  if (Wr) return xe;
  ((Wr = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.realtime = void 0));
  const r = (0, R().getCallBridge)(),
    s = (t, c, u) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: u }),
    a = (t, c, u) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: u }),
    n = (t, c, u) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: u, isGlobal: !0 }),
    i = (t, c, u) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: u, isGlobal: !0 });
  return ((xe.realtime = { publish: s, subscribe: a, publishGlobal: n, subscribeGlobal: i }), xe);
}
var bt = {},
  Hr;
function Eo() {
  return (
    Hr ||
      ((Hr = 1),
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
var Kr;
function Ro() {
  return (
    Kr ||
      ((Kr = 1),
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
        var s = Eo();
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
      })(yt)),
    yt
  );
}
var wt = {},
  Ce = {},
  Et = {},
  Jr;
function Oo() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = R(),
          s = O(),
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
            const u = i(c);
            if ((await n("openRovo", u)) === !1)
              throw new s.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(Et)),
    Et
  );
}
var Yr;
function Po() {
  if (Yr) return Ce;
  ((Yr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.rovo = void 0));
  const e = Oo();
  return ((Ce.rovo = { open: e.open }), Ce);
}
var Qr;
function So() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Po(), e));
      })(wt)),
    wt
  );
}
var C = {},
  Xr;
function jo() {
  if (Xr) return C;
  ((Xr = 1),
    Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.createTranslationFunction = C.getTranslations = C.resetTranslationsCache = void 0));
  const e = ai(),
    r = et(),
    s = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return u.json();
      },
    },
    a = new e.TranslationsGetter(s),
    n = () => {
      a.reset();
    };
  C.resetTranslationsCache = n;
  const i = async (c = null, u = { fallback: !0 }) => {
    let o = c;
    return (o || (o = (await r.view.getContext()).locale), await a.getTranslations(o, u));
  };
  C.getTranslations = i;
  const t = async (c = null) => {
    let u = c;
    u || (u = (await r.view.getContext()).locale);
    const o = new e.Translator(u, a);
    return (
      await o.init(),
      (l, d) => {
        var _, f;
        return (f = (_ = o.translate(l)) !== null && _ !== void 0 ? _ : d) !== null && f !== void 0
          ? f
          : l;
      }
    );
  };
  return ((C.createTranslationFunction = t), C);
}
var Rt = {},
  Ie = {},
  Zr;
function xo() {
  if (Zr) return Ie;
  ((Zr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.permissions = void 0));
  const r = (0, R().getCallBridge)(),
    s = async (u) => r("__permission__egressGet", u),
    a = async (u) => r("__permission__egressSet", u),
    n = async (u) => r("__permission__egressDeleteDomain", u),
    i = async (u) => r("__permission__egressDeleteGroup", u),
    t = async (u) => r("__permission__remoteGet", u),
    c = async (u) => r("__permission__remoteSet", u);
  return (
    (Ie.permissions = {
      egress: { get: s, set: a, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: c },
    }),
    Ie
  );
}
var T = {},
  Ot = {},
  Pt = {},
  Ae = {},
  Fe = {},
  $r;
function qt() {
  if ($r) return Fe;
  (($r = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.parseUrl = void 0));
  function e(r) {
    var s, a;
    const n =
        (a = (s = r.match(/^(.*?:)/)) === null || s === void 0 ? void 0 : s[0]) !== null &&
        a !== void 0
          ? a
          : "https:",
      i = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = i.split("/")[0],
      c = i.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: c };
  }
  return ((Fe.parseUrl = e), Fe);
}
var St = {},
  en;
function gi() {
  return (
    en ||
      ((en = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = qt();
        function s(t) {
          const u = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${u}$`);
        }
        e.globToRegex = s;
        const a = (t) => {
          if (t?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            u = new Set(),
            o = [];
          return (
            t.forEach((l) => {
              const d = c.test(l) ? l : `https://${l}`,
                _ = (0, r.parseUrl)(d);
              _.hostname.startsWith("*")
                ? (u.add(_.hostname.substring(2)), o.push(s(_.hostname)))
                : u.add(_.hostname);
            }),
            [...u].sort().reduce((l, d) => (o.some((_) => _.test(d)) || l.push(d), l), [])
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
          const c = t.egress.filter((o) => {
              var l;
              if (
                ((l = o.category) === null || l === void 0 ? void 0 : l.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const d = t.installationConfig.find(
                    (_) => _.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return d?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            u = new Map();
          for (const o of c)
            (u.has(o.type) || u.set(o.type, o.addresses),
              u.set(o.type, [...u.get(o.type), ...o.addresses]));
          return [...u.entries()].map(([o, l]) => ({ type: o, addresses: [...new Set(l)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(St)),
    St
  );
}
var tn;
function Co() {
  if (tn) return Ae;
  ((tn = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.EgressFilteringService = void 0));
  const e = qt(),
    r = gi();
  class s {
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
  return ((Ae.EgressFilteringService = s), Ae);
}
var rn;
function Io() {
  return (
    rn ||
      ((rn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Co(), e), r.__exportStar(qt(), e), r.__exportStar(gi(), e));
      })(Pt)),
    Pt
  );
}
var nn;
function Ao() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Io(), e));
      })(Ot)),
    Ot
  );
}
var on;
function Fo() {
  if (on) return T;
  ((on = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.checkPermissions = T.createPermissionUtils = void 0));
  const e = Ao(),
    r = et();
  function s(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const a = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(d) {
    if (!d) return null;
    const { scopes: _, external: f = {} } = d,
      p = Array.isArray(_) ? _ : Object.keys(_ || {});
    return {
      hasScope: (h) => p.includes(h),
      canFetchFrom: (h, g) => {
        var v;
        const m = (v = f.fetch) === null || v === void 0 ? void 0 : v[h];
        if (!m?.length) return !1;
        const b = m.map(s).filter((j) => j.length > 0);
        if (b.length === 0) return !1;
        const w = new e.EgressFilteringService(b);
        return h === "client" ? w.isValidUrlCSP(g) : w.isValidUrl(g);
      },
      canLoadResource: (h, g) => {
        const v = f[h];
        if (!v?.length) return !1;
        const m = v.map(s).filter((E) => E.length > 0);
        return m.length === 0 ? !1 : new e.EgressFilteringService(m).isValidUrlCSP(g);
      },
      getScopes: () => p,
      getExternalPermissions: () => f,
      hasAnyPermissions: () => p.length > 0 || Object.keys(f).length > 0,
    };
  }
  T.createPermissionUtils = i;
  function t(d, _) {
    if (!d?.length) return;
    const f = d.filter((p) => !_.hasScope(p));
    return f.length > 0 ? f : void 0;
  }
  function c(d, _) {
    if (!d?.fetch) return;
    const f = {};
    return (
      n.forEach((p) => {
        var h;
        const g = (h = d.fetch) === null || h === void 0 ? void 0 : h[p];
        if (g?.length) {
          const v = g.filter((m) => !_.canFetchFrom(p, m));
          v.length > 0 && (f[p] = v);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function u(d, _) {
    const f = {};
    return (
      a.forEach((p) => {
        const h = d?.[p];
        if (h?.length) {
          const g = h.filter((v) => !_.canLoadResource(p, v));
          g.length > 0 && (f[p] = g);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function o(d, _) {
    if (!d) return;
    const f = c(d, _),
      p = u(d, _);
    if (!f && !p) return;
    const h = {};
    return (f && (h.fetch = f), p && Object.assign(h, p), h);
  }
  async function l(d, _) {
    var f;
    if (!d) return { granted: !1, missing: null };
    if (!(!((f = d.scopes) === null || f === void 0) && f.length) && !d.external)
      return { granted: !0, missing: null };
    let p = _;
    p || (p = (await r.view.getContext()).permissions);
    const h = i(p);
    if (!h) return { granted: !1, missing: null };
    const g = {};
    let v = !0;
    const m = t(d.scopes, h);
    m && ((g.scopes = m), (v = !1));
    const b = o(d.external, h);
    return (b && ((g.external = b), (v = !1)), { granted: v, missing: v ? null : g });
  }
  return ((T.checkPermissions = l), T);
}
var sn;
function Bo() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(xo(), e), r.__exportStar(Fo(), e));
      })(Rt)),
    Rt
  );
}
var jt = {},
  xt = {},
  Ct = {},
  Be = {},
  Me = {},
  an;
function _i() {
  return (
    an ||
      ((an = 1),
      Object.defineProperty(Me, "__esModule", { value: !0 }),
      (Me.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Me.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Me
  );
}
var ln;
function tt() {
  if (ln) return Be;
  ((ln = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = et(),
    s = _i(),
    a = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Be.checkRestrictedEnvironment = a), Be);
}
var un;
function Mo() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = We(),
          s = O(),
          a = tt(),
          i = (0, R().getCallBridge)(),
          t = (l, d) => {
            const _ = atob(l),
              f = new Array(_.length);
            for (let h = 0; h < _.length; h++) f[h] = _.charCodeAt(h);
            const p = new Uint8Array(f);
            return new Blob([p], { type: d || "application/octet-stream" });
          },
          c = async (l) => {
            const d = l.size,
              _ = await l.arrayBuffer(),
              f = await crypto.subtle.digest("SHA-256", _),
              p = new Uint8Array(f),
              h = btoa(String.fromCharCode(...p));
            return { length: d, checksum: h, checksumType: "SHA256" };
          },
          u = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new s.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new s.BridgeAPIError("objects array is required and must not be empty");
            const _ = d.map((m, b) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new s.BridgeAPIError(
                    `Invalid object type at index ${b}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(m.data, m.mimeType);
                } catch {
                  throw new s.BridgeAPIError(
                    `Invalid base64 data at index ${b}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              f = await Promise.all(_.map((m) => c(m))),
              p = await (0, r.invoke)(l, { allObjectMetadata: f });
            if (!p || typeof p != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const h = new Map(),
              g = new Map();
            return (
              _.forEach((m, b) => {
                const w = f[b];
                (h.set(w.checksum, m), g.set(w.checksum, b));
              }),
              Object.entries(p).map(([m, b]) => {
                const { key: w, checksum: E } = b,
                  j = h.get(E),
                  z = g.get(E);
                return z === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: w,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : j
                    ? {
                        promise: (async () => {
                          try {
                            const B = await fetch(m, {
                              method: "PUT",
                              body: j,
                              headers: {
                                "Content-Type": j.type || "application/octet-stream",
                                "Content-Length": j.size.toString(),
                              },
                            });
                            return {
                              success: B.ok,
                              key: w,
                              status: B.status,
                              error: B.ok ? void 0 : `Upload failed with status ${B.status}`,
                            };
                          } catch (B) {
                            return {
                              success: !1,
                              key: w,
                              status: 503,
                              error: B instanceof Error ? B.message : "Upload failed",
                            };
                          }
                        })(),
                        index: z,
                        objectType: j.type,
                        objectSize: j.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: w,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: z,
                      };
              })
            );
          };
        e.createUploadPromises = u;
        const o = async ({ functionKey: l, objects: d }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const _ = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(_.map((p) => p.promise));
        };
        e.upload = o;
      })(Ct)),
    Ct
  );
}
var De = {},
  cn;
function Do() {
  if (cn) return De;
  ((cn = 1), Object.defineProperty(De, "__esModule", { value: !0 }), (De.deleteObjects = void 0));
  const e = We(),
    r = O(),
    s = tt(),
    n = (0, R().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "delete" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (u) => {
          await (0, e.invoke)(t, { key: u });
        }),
      );
    };
  return ((De.deleteObjects = i), De);
}
var qe = {},
  dn;
function qo() {
  if (dn) return qe;
  ((dn = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.download = void 0));
  const e = We(),
    r = O(),
    s = tt(),
    n = (0, R().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const u = await (0, e.invoke)(t, { keys: c });
      if (!u || typeof u != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const o = Object.entries(u).map(async ([d, _]) => {
        try {
          const f = await fetch(d, { method: "GET" });
          if (!f.ok)
            return {
              success: !1,
              key: _,
              status: f.status,
              error: `Download failed with status ${f.status}`,
            };
          const p = await f.blob();
          return { success: !0, key: _, blob: p, status: f.status };
        } catch (f) {
          return {
            success: !1,
            key: _,
            status: 503,
            error: f instanceof Error ? f.message : "Download failed",
          };
        }
      });
      return await Promise.all(o);
    };
  return ((qe.download = i), qe);
}
var Te = {},
  fn;
function To() {
  if (fn) return Te;
  ((fn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.getMetadata = void 0));
  const e = We(),
    r = O(),
    s = tt(),
    n = (0, R().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
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
        c.map(async (o) => {
          const l = await (0, e.invoke)(t, { key: o });
          return !l || typeof l != "object"
            ? { key: o, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((Te.getMetadata = i), Te);
}
var hn;
function ko() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = Mo();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const s = Do(),
          a = qo(),
          n = To();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: n.getMetadata,
          delete: s.deleteObjects,
        };
      })(xt)),
    xt
  );
}
var gn;
function Uo() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(ko(), e), r.__exportStar(_i(), e));
      })(jt)),
    jt
  );
}
var It = {},
  ke = {},
  k = {},
  N = {},
  Ke = {},
  _n;
function Lo() {
  if (_n) return Ke;
  ((_n = 1), Object.defineProperty(Ke, "__esModule", { value: !0 }));
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
        const u = n.user;
        (0, e._getFullUserHash)(a) !== (0, e._getFullUserHash)(u) &&
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
      const u = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && u.length > 0 && (c = c + u[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const o =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (o && (t.bootstrapMetadata = o), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((Ke.default = r), Ke);
}
var G = {},
  Ue = {},
  vn;
function No() {
  if (vn) return Ue;
  ((vn = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue._resolveDeltasResponse = void 0));
  const e = F(),
    r = 2;
  function s(t, c) {
    const u = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const o = a(t, u),
      l = n(o),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        r,
      );
    return d === u.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: u.deltas_full_response,
        };
  }
  Ue._resolveDeltasResponse = s;
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
    t?.forEach((u) => {
      delete c[u];
    });
  }
  return Ue;
}
var pn;
function vi() {
  if (pn) return G;
  pn = 1;
  var e =
    (G && G.__awaiter) ||
    function (n, i, t, c) {
      function u(o) {
        return o instanceof t
          ? o
          : new t(function (l) {
              l(o);
            });
      }
      return new (t || (t = Promise))(function (o, l) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (h) {
            l(h);
          }
        }
        function _(p) {
          try {
            f(c.throw(p));
          } catch (h) {
            l(h);
          }
        }
        function f(p) {
          p.done ? o(p.value) : u(p.value).then(d, _);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = F(),
    s = No();
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
    fetchEvaluations(i, t, c, u, o) {
      return e(this, void 0, void 0, function* () {
        var l, d, _, f, p, h;
        const g = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let v = {
          user: u,
          hash:
            (_ =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g?.has_updates) {
          const m =
            g?.hash_used !==
            ((h =
              (p = (f = this._option) === null || f === void 0 ? void 0 : f.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2");
          v = Object.assign(Object.assign({}, v), {
            sinceTime: o && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && o ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, v, c);
      });
    }
    _fetchEvaluations(i, t, c, u) {
      return e(this, void 0, void 0, function* () {
        var o, l;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: u,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (o = d?.body) !== null && o !== void 0 ? o : null;
        if (
          t?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const _ = (0, s._resolveDeltasResponse)(t, d.body);
        return typeof _ == "string"
          ? _
          : this._fetchEvaluations(
              i,
              t,
              Object.assign(Object.assign(Object.assign({}, c), _), {
                deltasResponseRequested: !1,
              }),
              u,
            );
      });
    }
  }
  return ((G.default = a), G);
}
var Le = {},
  mn;
function Go() {
  if (mn) return Le;
  ((mn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le._makeParamStoreGetter = void 0));
  const e = F(),
    r = { disableExposureLog: !0 };
  function s(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function a(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function n(l, d) {
    return l.value;
  }
  function i(l, d, _) {
    return l.getFeatureGate(d.gate_name, s(_) ? void 0 : r).value ? d.pass_value : d.fail_value;
  }
  function t(l, d, _, f) {
    const h = l.getDynamicConfig(d.config_name, s(f) ? void 0 : r).get(d.param_name);
    return a(h, _) ? _ : h;
  }
  function c(l, d, _, f) {
    const h = l.getExperiment(d.experiment_name, s(f) ? void 0 : r).get(d.param_name);
    return a(h, _) ? _ : h;
  }
  function u(l, d, _, f) {
    const h = l.getLayer(d.layer_name, s(f) ? void 0 : r).get(d.param_name);
    return a(h, _) ? _ : h;
  }
  function o(l, d, _) {
    return (f, p) => {
      if (d == null) return p;
      const h = d[f];
      if (h == null || (p != null && (0, e._typeOf)(p) !== h.param_type)) return p;
      switch (h.ref_type) {
        case "static":
          return n(h);
        case "gate":
          return i(l, h, _);
        case "dynamic_config":
          return t(l, h, p, _);
        case "experiment":
          return c(l, h, p, _);
        case "layer":
          return u(l, h, p, _);
        default:
          return p;
      }
    };
  }
  return ((Le._makeParamStoreGetter = o), Le);
}
var U = {},
  yn;
function Vo() {
  if (yn) return U;
  yn = 1;
  var e =
    (U && U.__awaiter) ||
    function (n, i, t, c) {
      function u(o) {
        return o instanceof t
          ? o
          : new t(function (l) {
              l(o);
            });
      }
      return new (t || (t = Promise))(function (o, l) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (h) {
            l(h);
          }
        }
        function _(p) {
          try {
            f(c.throw(p));
          } catch (h) {
            l(h);
          }
        }
        function f(p) {
          p.done ? o(p.value) : u(p.value).then(d, _);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.StatsigEvaluationsDataAdapter = void 0));
  const r = F(),
    s = vi();
  let a = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, t, c) {
      (super.attach(i, t, c),
        c !== null && c instanceof s.default
          ? (this._network = c)
          : (this._network = new s.default(t ?? {})));
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
    _fetchFromNetwork(i, t, c, u) {
      return e(this, void 0, void 0, function* () {
        var o;
        const l = yield (o = this._network) === null || o === void 0
          ? void 0
          : o.fetchEvaluations(this._getSdkKey(), i, c?.priority, t, u);
        return l ?? null;
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
  return ((U.StatsigEvaluationsDataAdapter = a), U);
}
var bn;
function zo() {
  if (bn) return N;
  bn = 1;
  var e =
    (N && N.__awaiter) ||
    function (c, u, o, l) {
      function d(_) {
        return _ instanceof o
          ? _
          : new o(function (f) {
              f(_);
            });
      }
      return new (o || (o = Promise))(function (_, f) {
        function p(v) {
          try {
            g(l.next(v));
          } catch (m) {
            f(m);
          }
        }
        function h(v) {
          try {
            g(l.throw(v));
          } catch (m) {
            f(m);
          }
        }
        function g(v) {
          v.done ? _(v.value) : d(v.value).then(p, h);
        }
        g((l = l.apply(c, u || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = F(),
    s = Lo(),
    a = vi(),
    n = Go(),
    i = Vo();
  let t = class Mt extends r.StatsigClientBase {
    static instance(u) {
      const o = (0, r._getStatsigGlobal)().instance(u);
      return o instanceof Mt
        ? o
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Mt(u ?? "", {}));
    }
    constructor(u, o, l = null) {
      var d, _;
      r.SDKType._setClientType(u, "javascript-client");
      const f = new a.default(l, (h) => {
        this.$emt(h);
      });
      (super(
        u,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
        f,
        l,
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
        (this._store = new s.default(u)),
        (this._network = f),
        (this._user = this._configureUser(o, l)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (_ = l?.plugins) !== null && _ !== void 0 ? _ : [];
      for (const h of p) h.bind(this);
    }
    initializeSync(u) {
      var o;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((o = this._store.getWarnings()) !== null && o !== void 0 ? o : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, u));
    }
    initializeAsync(u) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(u)), this._initializePromise);
      });
    }
    updateUserSync(u, o) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(u, o, l);
      } catch (d) {
        const _ = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(_, l);
      }
    }
    _updateUserSyncImpl(u, o, l) {
      var d;
      const _ = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(u);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && _.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = o?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && f?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            _,
          )
        : (this._runPostUpdate(f ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            _,
          ));
    }
    updateUserAsync(u, o) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(u, o);
        } catch (d) {
          const _ = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(_, l);
        }
      });
    }
    _updateUserAsyncImpl(u, o) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(u);
        const l = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, o)),
          l !== this._user)
        )
          return (0, r.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let _ = !1;
        (d != null &&
          (r.Diagnostics._markInitProcessStart(this._sdkKey),
          (_ = this._store.setValues(d, this._user)),
          r.Diagnostics._markInitProcessEnd(this._sdkKey, { success: _ })),
          this._finalizeUpdate(d),
          _ ||
            (this._errorBoundary.attachErrorIfNoneExists(
              r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          r.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            _,
            this._store.getCurrentSourceDetails(),
          ));
        const f = r.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, r.createUpdateDetails)(
          _,
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
    checkGate(u, o) {
      return this.getFeatureGate(u, o).value;
    }
    logEvent(u, o, l) {
      const d = typeof u == "string" ? { eventName: u, value: o, metadata: l } : u;
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
    _initializeAsyncImpl(u) {
      return e(this, void 0, void 0, function* () {
        return (
          r.Storage.isReady() || (yield r.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, u)
        );
      });
    }
    _createErrorUpdateDetails(u, o) {
      var l;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - o,
        u,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(u) {
      (this._store.finalize(), this._setStatus("Ready", u));
    }
    _runPostUpdate(u, o) {
      this.dataAdapter.getDataAsync(u, o, { priority: "low" }).catch((l) => {
        r.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(u) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(u, this._options)));
    }
    _configureUser(u, o) {
      var l;
      const d = (0, r._normalizeUser)(u, o),
        _ = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (_ && r.StableID.setOverride(_, this._sdkKey), d);
    }
    _getFeatureGateImpl(u, o) {
      var l, d;
      const { result: _, details: f } = this._store.getGate(u),
        p = (0, r._makeFeatureGate)(u, f, _),
        h =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, p, this._user, o),
        g = h ?? p;
      return (
        this._enqueueExposure(
          u,
          (0, r._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(u, o) {
      var l, d;
      const { result: _, details: f } = this._store.getConfig(u),
        p = (0, r._makeDynamicConfig)(u, f, _),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, p, this._user, o),
        g = h ?? p;
      return (
        this._enqueueExposure(
          u,
          (0, r._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(u, o) {
      var l, d, _, f;
      const { result: p, details: h } = this._store.getConfig(u),
        g = (0, r._makeExperiment)(u, h, p);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const v =
          (f =
            (_ = this.overrideAdapter) === null || _ === void 0
              ? void 0
              : _.getExperimentOverride) === null || f === void 0
            ? void 0
            : f.call(_, g, this._user, o),
        m = v ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, r._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(u, o) {
      var l, d, _;
      const { result: f, details: p } = this._store.getLayer(u),
        h = (0, r._makeLayer)(u, p, f),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, o);
      o?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const v = (0, r._mergeOverride)(
        h,
        g,
        (_ = g?.__value) !== null && _ !== void 0 ? _ : h.__value,
        (m) => {
          o?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, r._createLayerParameterExposure)(
                this._user,
                v,
                m,
                this._store.getExposureMapping(),
              ),
              o,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: v }), v);
    }
    _getParameterStoreImpl(u, o) {
      var l, d;
      const { result: _, details: f } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const p = {
          name: u,
          details: f,
          __configuration: _,
          get: (0, n._makeParamStoreGetter)(this, _, o),
        },
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, p, o);
      return (
        h != null &&
          ((p.__configuration = h.config),
          (p.details = h.details),
          (p.get = (0, n._makeParamStoreGetter)(this, h.config, o))),
        p
      );
    }
  };
  return ((N.default = t), N);
}
var wn;
function Wo() {
  return (
    wn ||
      ((wn = 1),
      (function (e) {
        var r =
            (k && k.__createBinding) ||
            (Object.create
              ? function (t, c, u, o) {
                  o === void 0 && (o = u);
                  var l = Object.getOwnPropertyDescriptor(c, u);
                  ((!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[u];
                      },
                    }),
                    Object.defineProperty(t, o, l));
                }
              : function (t, c, u, o) {
                  (o === void 0 && (o = u), (t[o] = c[u]));
                }),
          s =
            (k && k.__exportStar) ||
            function (t, c) {
              for (var u in t)
                u !== "default" && !Object.prototype.hasOwnProperty.call(c, u) && r(c, t, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const a = F(),
          n = zo();
        ((e.StatsigClient = n.default), s(F(), e));
        const i = Object.assign((0, a._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(k)),
    k
  );
}
var Ne = {},
  Ge = {},
  En;
function Ho() {
  if (En) return Ge;
  ((En = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.initFeatureFlags = void 0));
  const e = R(),
    r = O(),
    s = Xe(),
    a = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (u) => {
      if (!u || !u.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(u).some((o) => typeof o == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (u) => (t(u), i("initFeatureFlags", { user: u.user }));
  return (
    (Ge.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      a,
      n,
      `Feature flags initialisation calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    Ge
  );
}
var Rn;
function Ko() {
  if (Rn) return Ne;
  ((Rn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.ForgeDataAdapter = void 0));
  const e = Ho();
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
        u = await (0, e.initFeatureFlags)({ user: c }),
        o = {
          source: "Network",
          data: JSON.stringify(u),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = o), o);
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
  return ((Ne.ForgeDataAdapter = r), Ne);
}
var At = {},
  On;
function pi() {
  return (
    On ||
      ((On = 1),
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
      })(At)),
    At
  );
}
var Ve = {},
  Pn;
function Jo() {
  if (Pn) return Ve;
  ((Pn = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.trackFeatureFlagEvent = void 0));
  const e = R(),
    r = O(),
    s = pi(),
    a = Xe(),
    n = 500,
    i = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (o) => {
      if (!o || !o.type || !o.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(o.type.toUpperCase() in s.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(o).some((l) => typeof l == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (o) => (c(o), t("trackFeatureFlagEvent", o));
  return (
    (Ve.trackFeatureFlagEvent = (0, a.withRateLimiter)(
      u,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Ve
  );
}
var Sn;
function Yo() {
  if (Sn) return ke;
  ((Sn = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.ForgeFeatureFlags = void 0));
  const e = Wo(),
    r = Ko(),
    s = pi(),
    a = Jo();
  class n {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(t, c = {}) {
      var u;
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
        (u = o.environment) === null || u === void 0 ? void 0 : u.tier),
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
      const u = {
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: c,
        },
      };
      (0, a.trackFeatureFlagEvent)(u);
    }
  }
  return ((ke.ForgeFeatureFlags = n), ke);
}
var jn;
function Qo() {
  return (
    jn ||
      ((jn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Yo();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(It)),
    It
  );
}
var xn;
function Xo() {
  return (
    xn ||
      ((xn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = P;
        var s = Ci();
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
          r.__exportStar(_o(), e),
          r.__exportStar(po(), e),
          r.__exportStar(yo(), e),
          r.__exportStar(bo(), e),
          r.__exportStar(Ro(), e),
          r.__exportStar(So(), e),
          (e.i18n = r.__importStar(jo())),
          r.__exportStar(Bo(), e),
          r.__exportStar(Uo(), e),
          r.__exportStar(Qo(), e));
      })(nt)),
    nt
  );
}
var ze = Xo();
const Zo = () => {
    const [e, r] = I.useState(null),
      [s, a] = I.useState(null),
      [n, i] = I.useState(!1),
      [t, c] = I.useState(null),
      [u, o] = I.useState(null),
      [l, d] = I.useState(null),
      [_, f] = I.useState(null),
      [p, h] = I.useState({ userName: "", product: "" }),
      g = async (w) => {
        (i(!0), c(null));
        try {
          const E = await ze.invoke("fetch", { action: w });
          r(E);
        } catch (E) {
          c(E instanceof Error ? E.message : "Unknown error occurred");
        } finally {
          i(!1);
        }
      },
      v = async () => {
        if (!p.userName.trim() || !p.product.trim()) {
          o("Please fill in all fields");
          return;
        }
        (i(!0), o(null));
        try {
          (await ze.invoke("insertUserOrOrder", p), o(null), h({ userName: "", product: "" }));
        } catch (w) {
          o(w instanceof Error ? w.message : "Failed to insert user/order");
        } finally {
          i(!1);
        }
      },
      m = async () => {
        (i(!0), d(null));
        try {
          (await ze.invoke("clearCache"), d(null));
        } catch (w) {
          d(w instanceof Error ? w.message : "Failed to clear cache");
        } finally {
          i(!1);
        }
      },
      b = async () => {
        (i(!0), f(null));
        try {
          const w = await ze.invoke("runPerformanceAnalyze");
          (a(w?.DML), f(null));
        } catch (w) {
          f(w instanceof Error ? w.message : "Failed to run performance analysis");
        } finally {
          i(!1);
        }
      };
    return y.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        y.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        y.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            y.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            y.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Timeout:" }),
                    " Tests query timeout behavior with 10-second sleep",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Out of Memory:" }),
                    " Tests memory limit with large data operations",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    y.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        y.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            y.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            y.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            y.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "10px",
                marginBottom: "20px",
              },
              children: [
                y.jsx("button", {
                  onClick: () => g("slow"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "🚫 Non-Cached",
                }),
                y.jsx("button", {
                  onClick: () => g("cacheable"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#36B37E",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "✅ Cached",
                }),
                y.jsx("button", {
                  onClick: () => g("timeout"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "⏱️ Timeout",
                }),
                y.jsx("button", {
                  onClick: () => g("outOfMemory"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#C43E37",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "💥 Out of Memory",
                }),
              ],
            }),
            t &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", t],
              }),
            e &&
              !t &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  y.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  y.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  y.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: y.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        y.jsx("thead", {
                          children: y.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              y.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              y.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              y.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              y.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product ID",
                              }),
                            ],
                          }),
                        }),
                        y.jsx("tbody", {
                          children: e.rows.map((w, E) =>
                            y.jsxs(
                              "tr",
                              {
                                children: [
                                  y.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userId,
                                  }),
                                  y.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userName,
                                  }),
                                  y.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.product || "N/A",
                                  }),
                                  y.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.productId || "N/A",
                                  }),
                                ],
                              },
                              E,
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
        y.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            y.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            y.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            y.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    y.jsx("input", {
                      type: "number",
                      value: p.userId || "",
                      onChange: (w) =>
                        h({ ...p, userId: w.target.value ? parseInt(w.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    y.jsx("input", {
                      type: "text",
                      value: p.userName,
                      onChange: (w) => h({ ...p, userName: w.target.value }),
                      placeholder: "Enter user name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    y.jsx("input", {
                      type: "number",
                      value: p.productId || "",
                      onChange: (w) =>
                        h({ ...p, productId: w.target.value ? parseInt(w.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    y.jsx("input", {
                      type: "text",
                      value: p.product,
                      onChange: (w) => h({ ...p, product: w.target.value }),
                      placeholder: "Enter product name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
              ],
            }),
            y.jsx("button", {
              onClick: v,
              disabled: n,
              style: {
                padding: "12px 24px",
                backgroundColor: "#0052CC",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: n ? "not-allowed" : "pointer",
                opacity: n ? 0.6 : 1,
                fontSize: "16px",
                fontWeight: "bold",
              },
              children: n ? "Processing..." : "➕ Add User & Order",
            }),
            u &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", u],
              }),
          ],
        }),
        y.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            y.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            y.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            y.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                y.jsx("button", {
                  onClick: m,
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "🗑️ Clear Cache",
                }),
                y.jsx("button", {
                  onClick: b,
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "📊 Run Performance Analysis",
                }),
              ],
            }),
            l &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", l],
              }),
            _ &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", _],
              }),
          ],
        }),
        s &&
          !_ &&
          y.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              y.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  y.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      y.jsxs("div", {
                        children: [y.jsx("strong", { children: "Window:" }), " ", s.window],
                      }),
                      y.jsxs("div", {
                        children: [y.jsx("strong", { children: "Top Queries:" }), " ", s.top],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          s.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (s.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(s.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  s.rows.length > 0
                    ? y.jsxs("div", {
                        children: [
                          y.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", s.rows.length, ")"],
                          }),
                          s.rows.map((w, E) =>
                            y.jsxs(
                              "div",
                              {
                                style: {
                                  marginBottom: "20px",
                                  padding: "15px",
                                  backgroundColor: "#FFF2CC",
                                  border: "1px solid #FFD700",
                                  borderRadius: "4px",
                                },
                                children: [
                                  y.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          w.rank,
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Type:" }),
                                          " ",
                                          w.stmtType,
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          w.execCount,
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          w.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          w.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          w.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          w.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          w.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  y.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      y.jsx("strong", { children: "SQL Query:" }),
                                      y.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "12px",
                                          overflow: "auto",
                                          marginTop: "5px",
                                        },
                                        children: w.digestText,
                                      }),
                                    ],
                                  }),
                                  y.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      y.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      y.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "11px",
                                          overflow: "auto",
                                          marginTop: "10px",
                                          whiteSpace: "pre-wrap",
                                        },
                                        children: w.plan,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              E,
                            ),
                          ),
                        ],
                      })
                    : y.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          y.jsx("strong", { children: "✅ No slow queries found!" }),
                          y.jsx("br", {}),
                          "All queries are performing within the specified thresholds.",
                        ],
                      }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  $o = document.getElementById("root"),
  es = mi.createRoot($o),
  Cn = () => {
    es.render(y.jsx(Oi.StrictMode, { children: y.jsx(Zo, {}) }));
  };
ze.view.theme
  .enable()
  .then(() => {
    Cn();
  })
  .catch((e) => {
    (console.error(e.message), Cn());
  });
