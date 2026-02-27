const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-BCqYYRNo.js",
      "./lodash-vendor-Dv-o4pqD.js",
      "./custom-theme-DBmT3zWz.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./client-core-vendor-ByVIiDxb.js",
      "./body-BiwHCMQo.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as Ir, a as fi, c as Qb } from "./react-dom-vendor--YlRhZCI.js";
import { g as ur, a as vp, r as e_ } from "./lodash-vendor-Dv-o4pqD.js";
import { r as sr, a as Tt, s as at } from "./client-core-vendor-ByVIiDxb.js";
function t_(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o && Object.defineProperty(e, a, o.get ? o : { enumerable: !0, get: () => n[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = r(a);
    fetch(a.href, o);
  }
})();
var Wi = { exports: {} },
  kn = {};
var Su;
function r_() {
  if (Su) return kn;
  Su = 1;
  var e = Ir(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, s, u) {
    var l,
      d = {},
      p = null,
      v = null;
    (u !== void 0 && (p = "" + u),
      s.key !== void 0 && (p = "" + s.key),
      s.ref !== void 0 && (v = s.ref));
    for (l in s) n.call(s, l) && !o.hasOwnProperty(l) && (d[l] = s[l]);
    if (c && c.defaultProps) for (l in ((s = c.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: c, key: p, ref: v, props: d, _owner: a.current };
  }
  return ((kn.Fragment = r), (kn.jsx = i), (kn.jsxs = i), kn);
}
var Eu;
function n_() {
  return (Eu || ((Eu = 1), (Wi.exports = r_())), Wi.exports);
}
var x = n_(),
  m = Ir();
const O = ur(m),
  xu = t_({ __proto__: null, default: O }, [m]);
var Ki = {},
  ic = function (e, t) {
    return (
      (ic =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      ic(e, t)
    );
  };
function pp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ic(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Ho = function () {
  return (
    (Ho =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Ho.apply(this, arguments)
  );
};
function hp(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function gp(e, t, r, n) {
  var a = arguments.length,
    o = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, r, n);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (i = e[c]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
  return (a > 3 && o && Object.defineProperty(t, r, o), o);
}
function bp(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function _p(e, t, r, n, a, o) {
  function i(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var c = n.kind,
      s = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      u = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
      d,
      p = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var g = {};
    for (var f in n) g[f] = f === "access" ? {} : n[f];
    for (var f in n.access) g.access[f] = n.access[f];
    g.addInitializer = function (b) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(b || null));
    };
    var h = (0, r[v])(c === "accessor" ? { get: l.get, set: l.set } : l[s], g);
    if (c === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = i(h.get)) && (l.get = d),
        (d = i(h.set)) && (l.set = d),
        (d = i(h.init)) && a.unshift(d));
    } else (d = i(h)) && (c === "field" ? a.unshift(d) : (l[s] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (p = !0));
}
function mp(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function yp(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function wp(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function kp(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Op(e, t, r, n) {
  function a(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function c(l) {
      try {
        u(n.next(l));
      } catch (d) {
        i(d);
      }
    }
    function s(l) {
      try {
        u(n.throw(l));
      } catch (d) {
        i(d);
      }
    }
    function u(l) {
      l.done ? o(l.value) : a(l.value).then(c, s);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function Sp(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    n,
    a,
    o,
    i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (i.next = c(0)),
    (i.throw = c(1)),
    (i.return = c(2)),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function c(u) {
    return function (l) {
      return s([u, l]);
    };
  }
  function s(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; i && ((i = 0), u[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          a &&
            (o =
              u[0] & 2 ? a.return : u[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) &&
            !(o = o.call(a, u[1])).done)
        )
          return o;
        switch (((a = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return (r.label++, { value: u[1], done: !1 });
          case 5:
            (r.label++, (a = u[1]), (u = [0]));
            continue;
          case 7:
            ((u = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              ((r.label = o[1]), (o = u));
              break;
            }
            if (o && r.label < o[2]) {
              ((r.label = o[2]), r.ops.push(u));
              break;
            }
            (o[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        ((u = [6, l]), (a = 0));
      } finally {
        n = o = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var vi = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var a = Object.getOwnPropertyDescriptor(t, r);
      ((!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
        (a = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, a));
    }
  : function (e, t, r, n) {
      (n === void 0 && (n = r), (e[n] = t[r]));
    };
function Ep(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && vi(t, e, r);
}
function Wo(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e });
      },
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Uc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    a,
    o = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (c) {
    i = { error: c };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function xp() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Uc(arguments[t]));
  return e;
}
function Cp() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function Pp(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function on(e) {
  return this instanceof on ? ((this.v = e), this) : new on(e);
}
function Rp(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    o = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", i),
    (a[Symbol.asyncIterator] = function () {
      return this;
    }),
    a
  );
  function i(v) {
    return function (g) {
      return Promise.resolve(g).then(v, d);
    };
  }
  function c(v, g) {
    n[v] &&
      ((a[v] = function (f) {
        return new Promise(function (h, b) {
          o.push([v, f, h, b]) > 1 || s(v, f);
        });
      }),
      g && (a[v] = g(a[v])));
  }
  function s(v, g) {
    try {
      u(n[v](g));
    } catch (f) {
      p(o[0][3], f);
    }
  }
  function u(v) {
    v.value instanceof on ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
  }
  function l(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function p(v, g) {
    (v(g), o.shift(), o.length && s(o[0][0], o[0][1]));
  }
}
function Ap(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (a) {
      throw a;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(a, o) {
    t[a] = e[a]
      ? function (i) {
          return (r = !r) ? { value: on(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function Ip(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Wo == "function" ? Wo(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(o) {
    r[o] =
      e[o] &&
      function (i) {
        return new Promise(function (c, s) {
          ((i = e[o](i)), a(c, s, i.done, i.value));
        });
      };
  }
  function a(o, i, c, s) {
    Promise.resolve(s).then(function (u) {
      o({ value: u, done: c });
    }, i);
  }
}
function jp(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var a_ = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  sc = function (e) {
    return (
      (sc =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      sc(e)
    );
  };
function Dp(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = sc(e), n = 0; n < r.length; n++) r[n] !== "default" && vi(t, e, r[n]);
  return (a_(t, e), t);
}
function Tp(e) {
  return e && e.__esModule ? e : { default: e };
}
function Mp(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Fp(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Np(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Lp(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, a;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = t[Symbol.dispose]), r && (a = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (a &&
      (n = function () {
        try {
          a.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r }));
  } else r && e.stack.push({ async: !0 });
  return t;
}
var o_ =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Bp(e) {
  function t(o) {
    ((e.error = e.hasError ? new o_(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var r,
    n = 0;
  function a() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return ((n = 0), e.stack.push(r), Promise.resolve().then(a));
        if (r.dispose) {
          var o = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(o).then(a, function (i) {
                return (t(i), a());
              })
            );
        } else n |= 1;
      } catch (i) {
        t(i);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return a();
}
function Up(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, a, o, i) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : a && (!o || !i)
            ? r
            : a + o + "." + i.toLowerCase() + "js";
      })
    : e;
}
const i_ = {
    __extends: pp,
    __assign: Ho,
    __rest: hp,
    __decorate: gp,
    __param: bp,
    __esDecorate: _p,
    __runInitializers: mp,
    __propKey: yp,
    __setFunctionName: wp,
    __metadata: kp,
    __awaiter: Op,
    __generator: Sp,
    __createBinding: vi,
    __exportStar: Ep,
    __values: Wo,
    __read: Uc,
    __spread: xp,
    __spreadArrays: Cp,
    __spreadArray: Pp,
    __await: on,
    __asyncGenerator: Rp,
    __asyncDelegator: Ap,
    __asyncValues: Ip,
    __makeTemplateObject: jp,
    __importStar: Dp,
    __importDefault: Tp,
    __classPrivateFieldGet: Mp,
    __classPrivateFieldSet: Fp,
    __classPrivateFieldIn: Np,
    __addDisposableResource: Lp,
    __disposeResources: Bp,
    __rewriteRelativeImportExtension: Up,
  },
  s_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Lp,
        get __assign() {
          return Ho;
        },
        __asyncDelegator: Ap,
        __asyncGenerator: Rp,
        __asyncValues: Ip,
        __await: on,
        __awaiter: Op,
        __classPrivateFieldGet: Mp,
        __classPrivateFieldIn: Np,
        __classPrivateFieldSet: Fp,
        __createBinding: vi,
        __decorate: gp,
        __disposeResources: Bp,
        __esDecorate: _p,
        __exportStar: Ep,
        __extends: pp,
        __generator: Sp,
        __importDefault: Tp,
        __importStar: Dp,
        __makeTemplateObject: jp,
        __metadata: kp,
        __param: bp,
        __propKey: yp,
        __read: Uc,
        __rest: hp,
        __rewriteRelativeImportExtension: Up,
        __runInitializers: mp,
        __setFunctionName: wp,
        __spread: xp,
        __spreadArray: Pp,
        __spreadArrays: Cp,
        __values: Wo,
        default: i_,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ge = vp(s_);
var On = {},
  Cu;
function c_() {
  return (
    Cu ||
      ((Cu = 1),
      Object.defineProperty(On, "__esModule", { value: !0 }),
      (On.NavigationTarget = void 0),
      (On.NavigationTarget = {
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
    On
  );
}
var Ji = {},
  Yi = {},
  Sn = {},
  En = {},
  Pu;
function ke() {
  if (Pu) return En;
  ((Pu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.BridgeAPIError = void 0));
  class e extends Error {}
  return ((En.BridgeAPIError = e), En);
}
var Ru;
function fe() {
  if (Ru) return Sn;
  ((Ru = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.getCallBridge = void 0));
  const e = ke();
  function t(n) {
    return !!n?.callBridge;
  }
  const r = () => {
    if (!t(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((Sn.getCallBridge = r), Sn);
}
var xn = {},
  Au;
function pi() {
  if (Au) return xn;
  ((Au = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.withRateLimiter = void 0));
  const e = ke(),
    t = (r, n, a, o) => {
      let i = Date.now(),
        c = 0;
      return async (...s) => {
        const u = Date.now();
        if ((u - i > a && ((i = u), (c = 0)), c >= n))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((c = c + 1), r(...s));
      };
    };
  return ((xn.withRateLimiter = t), xn);
}
var Iu;
function u_() {
  return (
    Iu ||
      ((Iu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = fe(),
          r = ke(),
          n = pi(),
          a = (0, t.getCallBridge)(),
          o = (s) => {
            if (s && Object.values(s).some((u) => typeof u == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (s, u) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (o(u), a("invoke", { functionKey: s, payload: u }));
          };
        e.invoke = (0, n.withRateLimiter)(
          i,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(Yi)),
    Yi
  );
}
var ju;
function uo() {
  return (
    ju ||
      ((ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ge.__exportStar(u_(), e));
      })(Ji)),
    Ji
  );
}
var Xi = {},
  Cn = {},
  Zi = {},
  Du;
function qp() {
  return (
    Du ||
      ((Du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = fe(),
          r = ke(),
          n = pi(),
          a = 500,
          o = 25,
          i = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((p) => typeof p == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          u = (d) => async (p) => {
            s(p);
            const v = { ...p, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await c("invoke", v),
              { success: f, payload: h, error: b } = g ?? {},
              _ = { ...(f ? h : b) };
            if (_ && _.headers)
              for (const y in _.headers)
                Array.isArray(_.headers[y]) && (_.headers[y] = _.headers[y].join(","));
            return _;
          },
          l = (d) => {
            const p = u(d);
            return (0, n.withRateLimiter)(
              p,
              a,
              i,
              `${d} invocation calls are rate limited at ${a}/${o}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(Zi)),
    Zi
  );
}
var Tu;
function l_() {
  if (Tu) return Cn;
  ((Tu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.invokeRemote = void 0));
  const e = qp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((Cn.invokeRemote = t), Cn);
}
var Pn = {},
  Mu;
function d_() {
  if (Mu) return Pn;
  ((Mu = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.invokeService = void 0));
  const e = qp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((Pn.invokeService = t), Pn);
}
var Fu;
function f_() {
  return (
    Fu ||
      ((Fu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ge;
        (t.__exportStar(l_(), e), t.__exportStar(d_(), e));
      })(Xi)),
    Xi
  );
}
var Qi = {},
  Rn = {},
  An = {},
  Nu;
function v_() {
  if (Nu) return An;
  ((Nu = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.submit = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((An.submit = n), An);
}
var In = {},
  Lu;
function p_() {
  if (Lu) return In;
  ((Lu = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.close = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((In.close = n), In);
}
var jn = {},
  Bu;
function h_() {
  if (Bu) return jn;
  ((Bu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.open = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((jn.open = n), jn);
}
var Dn = {},
  Uu;
function g_() {
  if (Uu) return Dn;
  ((Uu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.refresh = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Dn.refresh = n), Dn);
}
var Tn = {},
  qu;
function b_() {
  if (qu) return Tn;
  ((qu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.createHistory = void 0));
  const t = (0, fe().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((Tn.createHistory = r), Tn);
}
var Mn = {},
  es = {},
  $t = {},
  zu;
function zp() {
  return (
    zu ||
      ((zu = 1),
      Object.defineProperty($t, "__esModule", { value: !0 }),
      ($t.FORGE_SUPPORTED_LOCALE_CODES =
        $t.I18N_BUNDLE_FOLDER_NAME =
        $t.I18N_INFO_FILE_NAME =
          void 0),
      ($t.I18N_INFO_FILE_NAME = "i18n-info.json"),
      ($t.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      ($t.FORGE_SUPPORTED_LOCALE_CODES = [
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
    $t
  );
}
var pr = {},
  $u;
function __() {
  if ($u) return pr;
  (($u = 1),
    Object.defineProperty(pr, "__esModule", { value: !0 }),
    (pr.TranslationsGetter = pr.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  pr.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(a) {
      this.resourcesAccessor = a;
    }
    async getTranslations(a, o = { fallback: !0 }) {
      const i = await this.getI18nInfoConfig(),
        { fallback: c } = o;
      if (!c) {
        let s;
        return (
          i.locales.includes(a) && (s = await this.getTranslationResource(a)),
          { translations: s ?? null, locale: a }
        );
      }
      for (const s of this.getLocaleLookupOrder(a, i)) {
        const u = await this.getTranslationResource(s);
        if (u) return { translations: u, locale: s };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const o = await this.getI18nInfoConfig(),
        i = this.getLocaleLookupOrder(a, o);
      return await Promise.all(
        i.map(async (c) => {
          const s = await this.getTranslationResource(c);
          return { locale: c, translations: s };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(a) {
      let o = this.translationResources.get(a);
      if (!o)
        try {
          ((o = await this.resourcesAccessor.getTranslationResource(a)),
            this.translationResources.set(a, o));
        } catch (i) {
          throw i instanceof t ? i : new t(`Failed to get translation resource for locale: ${a}`);
        }
      return o;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (a) {
          throw a instanceof t ? a : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(a, o) {
      const { locales: i, fallback: c } = o,
        s = [a],
        u = c[a];
      return (
        u && Array.isArray(u) && u.length > 0 && s.push(...u),
        e(s, o.fallback.default),
        s.filter((l) => i.includes(l))
      );
    }
  }
  return ((pr.TranslationsGetter = r), pr);
}
var Fn = {},
  ts = {},
  Vu;
function $p() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ge.__importDefault(e_()),
          n = (o, i, c) => {
            const s = o[c];
            return s ? (0, e.getTranslationValueFromContent)(s, i) : null;
          };
        e.getTranslationValue = n;
        const a = (o, i) => {
          let c = o[i];
          if (!c) {
            const s = i.split(".");
            s.length > 1 && (c = (0, r.default)(o, s, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = a;
      })(ts)),
    ts
  );
}
var Gu;
function m_() {
  if (Gu) return Fn;
  ((Gu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.Translator = void 0));
  const e = $p();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(n, a) {
      ((this.locale = n), (this.translationsGetter = a));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let a = this.cache.get(n);
      if (a === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const i = (0, e.getTranslationValueFromContent)(o, n);
          if (i !== null) {
            a = i;
            break;
          }
        }
        ((a = a ?? null), this.cache.set(n, a));
      }
      return a;
    }
  }
  return ((Fn.Translator = t), Fn);
}
var Nn = {},
  Hu;
function y_() {
  if (Hu) return Nn;
  ((Hu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.ensureLocale = void 0));
  const e = zp(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, i) => {
        const [c] = i.split("-");
        return (o[c] || (o[c] = i), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (o) => {
      const i = o.replace("_", "-");
      return t.has(i) ? i : (n[i] ?? r[i] ?? null);
    };
  return ((Nn.ensureLocale = a), Nn);
}
var rs = {},
  Wu;
function w_() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (u) => typeof u == "object" && u !== null && !Array.isArray(u),
          r = (u) => typeof u?.i18n == "string",
          n = (u) => u.startsWith("connect-"),
          a = (u) => u.startsWith("core:"),
          o = (u) => {
            const l = new Set(),
              d = (p, v) =>
                !t(p) || l.has(p)
                  ? []
                  : (l.add(p),
                    Object.entries(p).flatMap(([g, f]) => {
                      const h = [...v, g];
                      return r(f)
                        ? [{ propertyPath: h, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((b) => d(b, h))
                          : d(f, h);
                    }));
            return d(u, []);
          },
          i = (u) =>
            Object.entries(u).flatMap(([l, d]) =>
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((p) => [p, l]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const c = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const p = o(d[0]);
            for (const { key: v } of p) l.add(v);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const s = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const p = o(d[0]);
            for (const v of p) l.push({ moduleName: d[1], ...v });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(rs)),
    rs
  );
}
var ns = {},
  Ku;
function k_() {
  return (Ku || ((Ku = 1), Object.defineProperty(ns, "__esModule", { value: !0 })), ns);
}
var Ju;
function Vp() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Ge;
        (t.__exportStar(zp(), e),
          t.__exportStar(__(), e),
          t.__exportStar(m_(), e),
          t.__exportStar(y_(), e));
        var r = $p();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = w_();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return n.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return n.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return n.getI18nSupportedModuleEntries;
            },
          }),
          t.__exportStar(k_(), e));
      })(es)),
    es
  );
}
var Yu;
function O_() {
  if (Yu) return Mn;
  ((Yu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.getContext = void 0));
  const e = fe(),
    t = Vp(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((Mn.getContext = n), Mn);
}
var Ln = {},
  Xu;
function S_() {
  if (Xu) return Ln;
  ((Xu = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln.changeWindowTitle = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Ln.changeWindowTitle = n), Ln);
}
var Bn = {},
  Zu;
function E_() {
  if (Zu) return Bn;
  ((Zu = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.theme = void 0));
  const t = (0, fe().getCallBridge)();
  return ((Bn.theme = { enable: () => t("enableTheming") }), Bn);
}
var Un = {},
  qn = {},
  as = {},
  hr = {},
  Qu;
function Gp() {
  if (Qu) return hr;
  ((Qu = 1),
    Object.defineProperty(hr, "__esModule", { value: !0 }),
    (hr.blobToBase64 = hr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
  };
  hr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((hr.blobToBase64 = t), hr);
}
var el;
function x_() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Gp(),
          r = (u) => {
            if (
              typeof u != "object" ||
              u === null ||
              Object.prototype.toString.call(u) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(u);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(u)
            );
          },
          n = async (u) => ({ data: await (0, t.blobToBase64)(u), type: u.type }),
          a = (u) => (0, t.base64ToBlob)(u.data, u.type),
          o = async (u) => {
            if (u instanceof Blob) return { ...(await n(u)), __isBlobData: !0 };
            if (Array.isArray(u))
              return Promise.all(u.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (u && r(u)) {
              const l = await Promise.all(
                Object.entries(u).map(async ([d, p]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(p),
                ]),
              );
              return Object.fromEntries(l);
            }
            return u;
          };
        e.serialiseBlobsInPayload = o;
        const i = (u) => {
          if (u && r(u) && "__isBlobData" in u) {
            const l = u;
            return a({ data: l.data, type: l.type });
          }
          if (Array.isArray(u)) return u.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (u && r(u)) {
            const l = {};
            for (const [d, p] of Object.entries(u)) l[d] = (0, e.deserialiseBlobsInPayload)(p);
            return l;
          }
          return u;
        };
        e.deserialiseBlobsInPayload = i;
        const c = (u) =>
          u instanceof Blob
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = c;
        const s = (u) =>
          u && r(u) && "__isBlobData" in u
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsSerialisedBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = s;
      })(as)),
    as
  );
}
var tl;
function Hp() {
  if (tl) return qn;
  ((tl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.events = void 0));
  const e = fe(),
    t = x_(),
    r = (0, e.getCallBridge)(),
    n = (s) => (u) => {
      let l = u;
      return ((0, t.containsSerialisedBlobs)(u) && (l = (0, t.deserialiseBlobsInPayload)(u)), s(l));
    },
    a = async (s, u) => {
      let l = u;
      return (
        (0, t.containsBlobs)(u) && (l = await (0, t.serialiseBlobsInPayload)(u)),
        r("emit", { event: s, payload: l })
      );
    },
    o = (s, u) => r("on", { event: s, callback: n(u) }),
    i = async (s, u) => {
      let l = u;
      return (
        (0, t.containsBlobs)(u) && (l = await (0, t.serialiseBlobsInPayload)(u)),
        r("emitPublic", { event: s, payload: l })
      );
    },
    c = (s, u) => r("onPublic", { event: s, callback: n(u) });
  return ((qn.events = { emit: a, on: o, emitPublic: i, onPublic: c }), qn);
}
var rl;
function C_() {
  if (rl) return Un;
  ((rl = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.emitReadyEvent = void 0));
  const e = Hp(),
    t = Yp(),
    n = (0, fe().getCallBridge)(),
    a = "EXTENSION_READY",
    o = async () => {
      const i = await t.view.getContext();
      await e.events.emit(a, { localId: i.localId });
      try {
        await n("emitReadyEvent");
      } catch {}
    };
  return ((Un.emitReadyEvent = o), Un);
}
const P_ = "modulepreload",
  R_ = function (e, t) {
    return new URL(e, t).href;
  },
  nl = {},
  it = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let u = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (p) => ({ status: "fulfilled", value: p }),
              (p) => ({ status: "rejected", reason: p }),
            ),
          ),
        );
      };
      const i = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        s = c?.nonce || c?.getAttribute("nonce");
      a = u(
        r.map((l) => {
          if (((l = R_(l, n)), l in nl)) return;
          nl[l] = !0;
          const d = l.endsWith(".css"),
            p = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let g = i.length - 1; g >= 0; g--) {
              const f = i[g];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : P_),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            s && v.setAttribute("nonce", s),
            document.head.appendChild(v),
            d)
          )
            return new Promise((g, f) => {
              (v.addEventListener("load", g),
                v.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`))));
            });
        }),
      );
    }
    function o(i) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i;
    }
    return a.then((i) => {
      for (const c of i || []) c.status === "rejected" && o(c.reason);
      return t().catch(o);
    });
  };
var zn = {},
  os = {},
  $n = {},
  mo = {},
  al;
function Wp() {
  if (al) return mo;
  ((al = 1), Object.defineProperty(mo, "__esModule", { value: !0 }), (mo.default = r));
  let e;
  const t = new Uint8Array(16);
  function r() {
    if (
      !e &&
      ((e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !e)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return e(t);
  }
  return mo;
}
var Br = {},
  Vn = {},
  Gn = {},
  ol;
function A_() {
  if (ol) return Gn;
  ((ol = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Gn.default = e), Gn);
}
var il;
function hi() {
  if (il) return Vn;
  ((il = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e = t(A_());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((Vn.default = n), Vn);
}
var sl;
function gi() {
  if (sl) return Br;
  ((sl = 1),
    Object.defineProperty(Br, "__esModule", { value: !0 }),
    (Br.default = void 0),
    (Br.unsafeStringify = n));
  var e = t(hi());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const r = [];
  for (let i = 0; i < 256; ++i) r.push((i + 256).toString(16).slice(1));
  function n(i, c = 0) {
    return (
      r[i[c + 0]] +
      r[i[c + 1]] +
      r[i[c + 2]] +
      r[i[c + 3]] +
      "-" +
      r[i[c + 4]] +
      r[i[c + 5]] +
      "-" +
      r[i[c + 6]] +
      r[i[c + 7]] +
      "-" +
      r[i[c + 8]] +
      r[i[c + 9]] +
      "-" +
      r[i[c + 10]] +
      r[i[c + 11]] +
      r[i[c + 12]] +
      r[i[c + 13]] +
      r[i[c + 14]] +
      r[i[c + 15]]
    );
  }
  function a(i, c = 0) {
    const s = n(i, c);
    if (!(0, e.default)(s)) throw TypeError("Stringified UUID is invalid");
    return s;
  }
  var o = a;
  return ((Br.default = o), Br);
}
var cl;
function I_() {
  if (cl) return $n;
  ((cl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(Wp()),
    t = gi();
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  let n,
    a,
    o = 0,
    i = 0;
  function c(u, l, d) {
    let p = (l && d) || 0;
    const v = l || new Array(16);
    u = u || {};
    let g = u.node || n,
      f = u.clockseq !== void 0 ? u.clockseq : a;
    if (g == null || f == null) {
      const w = u.random || (u.rng || e.default)();
      (g == null && (g = n = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = a = ((w[6] << 8) | w[7]) & 16383));
    }
    let h = u.msecs !== void 0 ? u.msecs : Date.now(),
      b = u.nsecs !== void 0 ? u.nsecs : i + 1;
    const _ = h - o + (b - i) / 1e4;
    if (
      (_ < 0 && u.clockseq === void 0 && (f = (f + 1) & 16383),
      (_ < 0 || h > o) && u.nsecs === void 0 && (b = 0),
      b >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = h), (i = b), (a = f), (h += 122192928e5));
    const y = ((h & 268435455) * 1e4 + b) % 4294967296;
    ((v[p++] = (y >>> 24) & 255),
      (v[p++] = (y >>> 16) & 255),
      (v[p++] = (y >>> 8) & 255),
      (v[p++] = y & 255));
    const k = ((h / 4294967296) * 1e4) & 268435455;
    ((v[p++] = (k >>> 8) & 255),
      (v[p++] = k & 255),
      (v[p++] = ((k >>> 24) & 15) | 16),
      (v[p++] = (k >>> 16) & 255),
      (v[p++] = (f >>> 8) | 128),
      (v[p++] = f & 255));
    for (let w = 0; w < 6; ++w) v[p + w] = g[w];
    return l || (0, t.unsafeStringify)(v);
  }
  var s = c;
  return (($n.default = s), $n);
}
var Hn = {},
  tr = {},
  Wn = {},
  ul;
function Kp() {
  if (ul) return Wn;
  ((ul = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.default = void 0));
  var e = t(hi());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    let o;
    const i = new Uint8Array(16);
    return (
      (i[0] = (o = parseInt(a.slice(0, 8), 16)) >>> 24),
      (i[1] = (o >>> 16) & 255),
      (i[2] = (o >>> 8) & 255),
      (i[3] = o & 255),
      (i[4] = (o = parseInt(a.slice(9, 13), 16)) >>> 8),
      (i[5] = o & 255),
      (i[6] = (o = parseInt(a.slice(14, 18), 16)) >>> 8),
      (i[7] = o & 255),
      (i[8] = (o = parseInt(a.slice(19, 23), 16)) >>> 8),
      (i[9] = o & 255),
      (i[10] = ((o = parseInt(a.slice(24, 36), 16)) / 1099511627776) & 255),
      (i[11] = (o / 4294967296) & 255),
      (i[12] = (o >>> 24) & 255),
      (i[13] = (o >>> 16) & 255),
      (i[14] = (o >>> 8) & 255),
      (i[15] = o & 255),
      i
    );
  }
  var n = r;
  return ((Wn.default = n), Wn);
}
var ll;
function Jp() {
  if (ll) return tr;
  ((ll = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.URL = tr.DNS = void 0),
    (tr.default = i));
  var e = gi(),
    t = r(Kp());
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function n(c) {
    c = unescape(encodeURIComponent(c));
    const s = [];
    for (let u = 0; u < c.length; ++u) s.push(c.charCodeAt(u));
    return s;
  }
  const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  tr.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  tr.URL = o;
  function i(c, s, u) {
    function l(d, p, v, g) {
      var f;
      if (
        (typeof d == "string" && (d = n(d)),
        typeof p == "string" && (p = (0, t.default)(p)),
        ((f = p) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let h = new Uint8Array(16 + d.length);
      if (
        (h.set(p),
        h.set(d, p.length),
        (h = u(h)),
        (h[6] = (h[6] & 15) | s),
        (h[8] = (h[8] & 63) | 128),
        v)
      ) {
        g = g || 0;
        for (let b = 0; b < 16; ++b) v[g + b] = h[b];
        return v;
      }
      return (0, e.unsafeStringify)(h);
    }
    try {
      l.name = c;
    } catch {}
    return ((l.DNS = a), (l.URL = o), l);
  }
  return tr;
}
var Kn = {},
  dl;
function j_() {
  if (dl) return Kn;
  ((dl = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
  function e(v) {
    if (typeof v == "string") {
      const g = unescape(encodeURIComponent(v));
      v = new Uint8Array(g.length);
      for (let f = 0; f < g.length; ++f) v[f] = g.charCodeAt(f);
    }
    return t(n(a(v), v.length * 8));
  }
  function t(v) {
    const g = [],
      f = v.length * 32,
      h = "0123456789abcdef";
    for (let b = 0; b < f; b += 8) {
      const _ = (v[b >> 5] >>> (b % 32)) & 255,
        y = parseInt(h.charAt((_ >>> 4) & 15) + h.charAt(_ & 15), 16);
      g.push(y);
    }
    return g;
  }
  function r(v) {
    return (((v + 64) >>> 9) << 4) + 14 + 1;
  }
  function n(v, g) {
    ((v[g >> 5] |= 128 << (g % 32)), (v[r(g) - 1] = g));
    let f = 1732584193,
      h = -271733879,
      b = -1732584194,
      _ = 271733878;
    for (let y = 0; y < v.length; y += 16) {
      const k = f,
        w = h,
        S = b,
        E = _;
      ((f = s(f, h, b, _, v[y], 7, -680876936)),
        (_ = s(_, f, h, b, v[y + 1], 12, -389564586)),
        (b = s(b, _, f, h, v[y + 2], 17, 606105819)),
        (h = s(h, b, _, f, v[y + 3], 22, -1044525330)),
        (f = s(f, h, b, _, v[y + 4], 7, -176418897)),
        (_ = s(_, f, h, b, v[y + 5], 12, 1200080426)),
        (b = s(b, _, f, h, v[y + 6], 17, -1473231341)),
        (h = s(h, b, _, f, v[y + 7], 22, -45705983)),
        (f = s(f, h, b, _, v[y + 8], 7, 1770035416)),
        (_ = s(_, f, h, b, v[y + 9], 12, -1958414417)),
        (b = s(b, _, f, h, v[y + 10], 17, -42063)),
        (h = s(h, b, _, f, v[y + 11], 22, -1990404162)),
        (f = s(f, h, b, _, v[y + 12], 7, 1804603682)),
        (_ = s(_, f, h, b, v[y + 13], 12, -40341101)),
        (b = s(b, _, f, h, v[y + 14], 17, -1502002290)),
        (h = s(h, b, _, f, v[y + 15], 22, 1236535329)),
        (f = u(f, h, b, _, v[y + 1], 5, -165796510)),
        (_ = u(_, f, h, b, v[y + 6], 9, -1069501632)),
        (b = u(b, _, f, h, v[y + 11], 14, 643717713)),
        (h = u(h, b, _, f, v[y], 20, -373897302)),
        (f = u(f, h, b, _, v[y + 5], 5, -701558691)),
        (_ = u(_, f, h, b, v[y + 10], 9, 38016083)),
        (b = u(b, _, f, h, v[y + 15], 14, -660478335)),
        (h = u(h, b, _, f, v[y + 4], 20, -405537848)),
        (f = u(f, h, b, _, v[y + 9], 5, 568446438)),
        (_ = u(_, f, h, b, v[y + 14], 9, -1019803690)),
        (b = u(b, _, f, h, v[y + 3], 14, -187363961)),
        (h = u(h, b, _, f, v[y + 8], 20, 1163531501)),
        (f = u(f, h, b, _, v[y + 13], 5, -1444681467)),
        (_ = u(_, f, h, b, v[y + 2], 9, -51403784)),
        (b = u(b, _, f, h, v[y + 7], 14, 1735328473)),
        (h = u(h, b, _, f, v[y + 12], 20, -1926607734)),
        (f = l(f, h, b, _, v[y + 5], 4, -378558)),
        (_ = l(_, f, h, b, v[y + 8], 11, -2022574463)),
        (b = l(b, _, f, h, v[y + 11], 16, 1839030562)),
        (h = l(h, b, _, f, v[y + 14], 23, -35309556)),
        (f = l(f, h, b, _, v[y + 1], 4, -1530992060)),
        (_ = l(_, f, h, b, v[y + 4], 11, 1272893353)),
        (b = l(b, _, f, h, v[y + 7], 16, -155497632)),
        (h = l(h, b, _, f, v[y + 10], 23, -1094730640)),
        (f = l(f, h, b, _, v[y + 13], 4, 681279174)),
        (_ = l(_, f, h, b, v[y], 11, -358537222)),
        (b = l(b, _, f, h, v[y + 3], 16, -722521979)),
        (h = l(h, b, _, f, v[y + 6], 23, 76029189)),
        (f = l(f, h, b, _, v[y + 9], 4, -640364487)),
        (_ = l(_, f, h, b, v[y + 12], 11, -421815835)),
        (b = l(b, _, f, h, v[y + 15], 16, 530742520)),
        (h = l(h, b, _, f, v[y + 2], 23, -995338651)),
        (f = d(f, h, b, _, v[y], 6, -198630844)),
        (_ = d(_, f, h, b, v[y + 7], 10, 1126891415)),
        (b = d(b, _, f, h, v[y + 14], 15, -1416354905)),
        (h = d(h, b, _, f, v[y + 5], 21, -57434055)),
        (f = d(f, h, b, _, v[y + 12], 6, 1700485571)),
        (_ = d(_, f, h, b, v[y + 3], 10, -1894986606)),
        (b = d(b, _, f, h, v[y + 10], 15, -1051523)),
        (h = d(h, b, _, f, v[y + 1], 21, -2054922799)),
        (f = d(f, h, b, _, v[y + 8], 6, 1873313359)),
        (_ = d(_, f, h, b, v[y + 15], 10, -30611744)),
        (b = d(b, _, f, h, v[y + 6], 15, -1560198380)),
        (h = d(h, b, _, f, v[y + 13], 21, 1309151649)),
        (f = d(f, h, b, _, v[y + 4], 6, -145523070)),
        (_ = d(_, f, h, b, v[y + 11], 10, -1120210379)),
        (b = d(b, _, f, h, v[y + 2], 15, 718787259)),
        (h = d(h, b, _, f, v[y + 9], 21, -343485551)),
        (f = o(f, k)),
        (h = o(h, w)),
        (b = o(b, S)),
        (_ = o(_, E)));
    }
    return [f, h, b, _];
  }
  function a(v) {
    if (v.length === 0) return [];
    const g = v.length * 8,
      f = new Uint32Array(r(g));
    for (let h = 0; h < g; h += 8) f[h >> 5] |= (v[h / 8] & 255) << (h % 32);
    return f;
  }
  function o(v, g) {
    const f = (v & 65535) + (g & 65535);
    return (((v >> 16) + (g >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function i(v, g) {
    return (v << g) | (v >>> (32 - g));
  }
  function c(v, g, f, h, b, _) {
    return o(i(o(o(g, v), o(h, _)), b), f);
  }
  function s(v, g, f, h, b, _, y) {
    return c((g & f) | (~g & h), v, g, b, _, y);
  }
  function u(v, g, f, h, b, _, y) {
    return c((g & h) | (f & ~h), v, g, b, _, y);
  }
  function l(v, g, f, h, b, _, y) {
    return c(g ^ f ^ h, v, g, b, _, y);
  }
  function d(v, g, f, h, b, _, y) {
    return c(f ^ (g | ~h), v, g, b, _, y);
  }
  var p = e;
  return ((Kn.default = p), Kn);
}
var fl;
function D_() {
  if (fl) return Hn;
  ((fl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.default = void 0));
  var e = r(Jp()),
    t = r(j_());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((Hn.default = a), Hn);
}
var Jn = {},
  Yn = {},
  vl;
function T_() {
  if (vl) return Yn;
  ((vl = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Yn.default = t), Yn);
}
var pl;
function M_() {
  if (pl) return Jn;
  ((pl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = n(T_()),
    t = n(Wp()),
    r = gi();
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i, c, s) {
    if (e.default.randomUUID && !c && !i) return e.default.randomUUID();
    i = i || {};
    const u = i.random || (i.rng || t.default)();
    if (((u[6] = (u[6] & 15) | 64), (u[8] = (u[8] & 63) | 128), c)) {
      s = s || 0;
      for (let l = 0; l < 16; ++l) c[s + l] = u[l];
      return c;
    }
    return (0, r.unsafeStringify)(u);
  }
  var o = a;
  return ((Jn.default = o), Jn);
}
var Xn = {},
  Zn = {},
  hl;
function F_() {
  if (hl) return Zn;
  ((hl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.default = void 0));
  function e(a, o, i, c) {
    switch (a) {
      case 0:
        return (o & i) ^ (~o & c);
      case 1:
        return o ^ i ^ c;
      case 2:
        return (o & i) ^ (o & c) ^ (i & c);
      case 3:
        return o ^ i ^ c;
    }
  }
  function t(a, o) {
    return (a << o) | (a >>> (32 - o));
  }
  function r(a) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
      i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof a == "string") {
      const l = unescape(encodeURIComponent(a));
      a = [];
      for (let d = 0; d < l.length; ++d) a.push(l.charCodeAt(d));
    } else Array.isArray(a) || (a = Array.prototype.slice.call(a));
    a.push(128);
    const c = a.length / 4 + 2,
      s = Math.ceil(c / 16),
      u = new Array(s);
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        d[p] =
          (a[l * 64 + p * 4] << 24) |
          (a[l * 64 + p * 4 + 1] << 16) |
          (a[l * 64 + p * 4 + 2] << 8) |
          a[l * 64 + p * 4 + 3];
      u[l] = d;
    }
    ((u[s - 1][14] = ((a.length - 1) * 8) / Math.pow(2, 32)),
      (u[s - 1][14] = Math.floor(u[s - 1][14])),
      (u[s - 1][15] = ((a.length - 1) * 8) & 4294967295));
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(80);
      for (let b = 0; b < 16; ++b) d[b] = u[l][b];
      for (let b = 16; b < 80; ++b) d[b] = t(d[b - 3] ^ d[b - 8] ^ d[b - 14] ^ d[b - 16], 1);
      let p = i[0],
        v = i[1],
        g = i[2],
        f = i[3],
        h = i[4];
      for (let b = 0; b < 80; ++b) {
        const _ = Math.floor(b / 20),
          y = (t(p, 5) + e(_, v, g, f) + h + o[_] + d[b]) >>> 0;
        ((h = f), (f = g), (g = t(v, 30) >>> 0), (v = p), (p = y));
      }
      ((i[0] = (i[0] + p) >>> 0),
        (i[1] = (i[1] + v) >>> 0),
        (i[2] = (i[2] + g) >>> 0),
        (i[3] = (i[3] + f) >>> 0),
        (i[4] = (i[4] + h) >>> 0));
    }
    return [
      (i[0] >> 24) & 255,
      (i[0] >> 16) & 255,
      (i[0] >> 8) & 255,
      i[0] & 255,
      (i[1] >> 24) & 255,
      (i[1] >> 16) & 255,
      (i[1] >> 8) & 255,
      i[1] & 255,
      (i[2] >> 24) & 255,
      (i[2] >> 16) & 255,
      (i[2] >> 8) & 255,
      i[2] & 255,
      (i[3] >> 24) & 255,
      (i[3] >> 16) & 255,
      (i[3] >> 8) & 255,
      i[3] & 255,
      (i[4] >> 24) & 255,
      (i[4] >> 16) & 255,
      (i[4] >> 8) & 255,
      i[4] & 255,
    ];
  }
  var n = r;
  return ((Zn.default = n), Zn);
}
var gl;
function N_() {
  if (gl) return Xn;
  ((gl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = r(Jp()),
    t = r(F_());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Xn.default = a), Xn);
}
var Qn = {},
  bl;
function L_() {
  if (bl) return Qn;
  ((bl = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Qn.default = e), Qn);
}
var ea = {},
  _l;
function B_() {
  if (_l) return ea;
  ((_l = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.default = void 0));
  var e = t(hi());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var n = r;
  return ((ea.default = n), ea);
}
var ml;
function U_() {
  return (
    ml ||
      ((ml = 1),
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
              return u.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(e, "v1", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(e, "v3", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return n.default;
            },
          }),
          Object.defineProperty(e, "v5", {
            enumerable: !0,
            get: function () {
              return a.default;
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
              return i.default;
            },
          }));
        var t = l(I_()),
          r = l(D_()),
          n = l(M_()),
          a = l(N_()),
          o = l(L_()),
          i = l(B_()),
          c = l(hi()),
          s = l(gi()),
          u = l(Kp());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(os)),
    os
  );
}
var yl;
function q_() {
  if (yl) return zn;
  ((yl = 1),
    Object.defineProperty(zn, "__esModule", { value: !0 }),
    (zn.createAdfRendererIframeProps = void 0));
  const e = U_(),
    t = async (r, n) => {
      const a = await it(
          () => import("./index-BCqYYRNo.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = a.default || a,
        i = new URL(document.referrer).origin,
        c = `${i}/forge-apps/adf-renderer`,
        s = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var l, d, p, v, g, f, h;
          const b = document.getElementById(s),
            _ = {
              type: "adf-document",
              document: (l = r.extension.macro) === null || l === void 0 ? void 0 : l.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: r.localId,
              isEditing:
                (p = (d = r.extension) === null || d === void 0 ? void 0 : d.isEditing) !== null &&
                p !== void 0
                  ? p
                  : !1,
              contentId:
                (f =
                  (g = (v = r.extension) === null || v === void 0 ? void 0 : v.macro) === null ||
                  g === void 0
                    ? void 0
                    : g.content) === null || f === void 0
                  ? void 0
                  : f.id,
            };
          (o.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (y) => {
                var k;
                (k = y?.iFrameResizer) === null || k === void 0 || k.resize();
              },
            },
            b || "",
          ),
            (h = b?.contentWindow) === null || h === void 0 || h.postMessage(_, i));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: s, src: c, onLoad: u }
      );
    };
  return ((zn.createAdfRendererIframeProps = t), zn);
}
var ta = {},
  wl;
function z_() {
  if (wl) return ta;
  ((wl = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.onClose = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("onClose", a)) === !1)
          throw new t.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new t.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((ta.onClose = n), ta);
}
var kl;
function Yp() {
  if (kl) return Rn;
  ((kl = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.view = void 0));
  const e = v_(),
    t = p_(),
    r = h_(),
    n = g_(),
    a = b_(),
    o = O_(),
    i = S_(),
    c = E_(),
    s = C_(),
    u = q_(),
    l = z_();
  return (
    (Rn.view = {
      submit: e.submit,
      close: t.close,
      onClose: l.onClose,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
      createAdfRendererIframeProps: u.createAdfRendererIframeProps,
    }),
    Rn
  );
}
var Ol;
function bi() {
  return (
    Ol ||
      ((Ol = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ge.__exportStar(Yp(), e));
      })(Qi)),
    Qi
  );
}
var is = {},
  ra = {},
  Sl;
function $_() {
  if (Sl) return ra;
  ((Sl = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.router = void 0));
  const t = (0, fe().getCallBridge)(),
    r = async (i) => {
      if (!i?.target) throw new Error("target is required for getUrl");
      const c = await t("getUrl", i);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (s) {
        throw new Error(`Failed to parse URL: ${c} (${s})`);
      }
    },
    n = (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "same-tab" });
      if (!i?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "same-tab" });
    },
    a = (i) => {
      if (typeof i == "string") return t("navigate", { url: i, type: "new-tab" });
      if (!i?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...i, type: "new-tab" });
    },
    o = async () => t("reload");
  return ((ra.router = { getUrl: r, navigate: n, open: a, reload: o }), ra);
}
var El;
function V_() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ge.__exportStar($_(), e));
      })(is)),
    is
  );
}
var ss = {},
  na = {},
  xl;
function G_() {
  if (xl) return na;
  ((xl = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.Modal = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(i) {
      var c, s;
      ((this.resource = i?.resource || null),
        (this.onClose = i?.onClose || n),
        (this.size = i?.size || "medium"),
        (this.context = i?.context || {}),
        (this.closeOnEscape = (c = i?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick = (s = i?.closeOnOverlayClick) !== null && s !== void 0 ? s : !0),
        (this.title = i?.title || ""),
        (this.icon = i?.icon || ""));
    }
    async open() {
      try {
        if (
          (await r("openModal", {
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
          throw new t.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new t.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((na.Modal = a), na);
}
var Cl;
function H_() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ge.__exportStar(G_(), e));
      })(ss)),
    ss
  );
}
var ht = {},
  gr = {},
  Pl;
function W_() {
  if (Pl) return gr;
  ((Pl = 1),
    Object.defineProperty(gr, "__esModule", { value: !0 }),
    (gr.productFetchApi = gr.remoteFetchApi = void 0));
  const e = Gp(),
    t = async (i, c = !1) => {
      const s = {};
      for (const [u, l] of i.entries())
        if (c ? u.startsWith("file") : u === "file") {
          const p = l.name,
            v = l.type;
          ((s[u] = await (0, e.blobToBase64)(l)), (s[`__${u}Name`] = p), (s[`__${u}Type`] = v));
        } else s[u] = l;
      return JSON.stringify(s);
    },
    r = (i) => {
      if (!i) return i;
      if ("signal" in i) {
        const { signal: c, ...s } = i;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          s
        );
      }
      return i;
    },
    n = async (i, c) => {
      const s = c?.body instanceof FormData,
        u = s ? await t(c?.body, i === "remote") : c?.body,
        l = new Request("", { body: u, method: c?.method, headers: c?.headers }),
        d = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(d),
        isMultipartFormData: s,
      };
    },
    a = (i) => {
      const c = async (s, u) => {
        const l = r(u),
          { body: d, headers: p, isMultipartFormData: v } = await n("remote", l),
          g = {
            remoteKey: s,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: h,
            statusText: b,
            status: _,
            isAttachment: y,
          } = await i("fetchRemote", g),
          k = y ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(k || null, { headers: h, status: _, statusText: b });
      };
      return { requestRemote: (s, u) => c(s, u) };
    };
  gr.remoteFetchApi = a;
  const o = (i) => {
    const c = async (s, u, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: g } = await n("product", d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: s,
          restPath: u,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: g,
        },
        {
          body: h,
          headers: b,
          statusText: _,
          status: y,
          isAttachment: k,
        } = await i("fetchProduct", f),
        w = k ? (0, e.base64ToBlob)(h, b["content-type"]) : h;
      return new Response(w || null, { headers: b, status: y, statusText: _ });
    };
    return {
      requestConfluence: (s, u) => c("confluence", s, u),
      requestJira: (s, u) => c("jira", s, u),
      requestBitbucket: (s, u) => c("bitbucket", s, u),
    };
  };
  return ((gr.productFetchApi = o), gr);
}
var Rl;
function K_() {
  if (Rl) return ht;
  Rl = 1;
  var e;
  (Object.defineProperty(ht, "__esModule", { value: !0 }),
    (ht.requestRemote = ht.requestBitbucket = ht.requestJira = ht.requestConfluence = void 0));
  const t = fe(),
    r = W_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (ht.requestConfluence = e.requestConfluence),
    (ht.requestJira = e.requestJira),
    (ht.requestBitbucket = e.requestBitbucket),
    (ht.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    ht
  );
}
var cs = {},
  aa = {},
  Al;
function J_() {
  if (Al) return aa;
  ((Al = 1), Object.defineProperty(aa, "__esModule", { value: !0 }), (aa.showFlag = void 0));
  const e = fe(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((aa.showFlag = n), aa);
}
var Il;
function Y_() {
  return (
    Il ||
      ((Il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = J_();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(cs)),
    cs
  );
}
var us = {},
  jl;
function X_() {
  return (
    jl ||
      ((jl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ge.__exportStar(Hp(), e));
      })(us)),
    us
  );
}
var ls = {},
  oa = {},
  Dl;
function Z_() {
  if (Dl) return oa;
  ((Dl = 1), Object.defineProperty(oa, "__esModule", { value: !0 }), (oa.realtime = void 0));
  const t = (0, fe().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((oa.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), oa);
}
var ds = {},
  Tl;
function Q_() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = void 0),
          (function (t) {
            ((t.Board = "board"), (t.Issue = "issue"), (t.Project = "project"));
          })(e.Jira || (e.Jira = {})),
          (function (t) {
            ((t.Content = "content"), (t.Space = "space"));
          })(e.Confluence || (e.Confluence = {})),
          (function (t) {
            ((t.Repository = "repository"), (t.PullRequest = "pullRequest"));
          })(e.Bitbucket || (e.Bitbucket = {})));
      })(ds)),
    ds
  );
}
var Ml;
function em() {
  return (
    Ml ||
      ((Ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Z_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Q_();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return r.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return r.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return r.Bitbucket;
            },
          }));
      })(ls)),
    ls
  );
}
var fs = {},
  ia = {},
  vs = {},
  Fl;
function tm() {
  return (
    Fl ||
      ((Fl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = fe(),
          r = ke(),
          n = 30,
          a = (0, t.getCallBridge)();
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
          i = async (c) => {
            if (c.type === "forge") {
              if (c.agentName.length > n) throw new Error("rovo agent name too long");
              if (c.agentKey.length > n) throw new Error("rovo agent key too long");
            }
            const s = o(c);
            if ((await a("openRovo", s)) === !1)
              throw new r.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = i;
      })(vs)),
    vs
  );
}
var sa = {},
  Nl;
function rm() {
  if (Nl) return sa;
  ((Nl = 1), Object.defineProperty(sa, "__esModule", { value: !0 }), (sa.isEnabled = void 0));
  const t = (0, fe().getCallBridge)(),
    r = () => t("isRovoEnabled");
  return ((sa.isEnabled = r), sa);
}
var Ll;
function nm() {
  if (Ll) return ia;
  ((Ll = 1), Object.defineProperty(ia, "__esModule", { value: !0 }), (ia.rovo = void 0));
  const e = tm(),
    t = rm();
  return ((ia.rovo = { open: e.open, isEnabled: t.isEnabled }), ia);
}
var Bl;
function am() {
  return (
    Bl ||
      ((Bl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ge.__exportStar(nm(), e));
      })(fs)),
    fs
  );
}
var Vt = {},
  Ul;
function om() {
  if (Ul) return Vt;
  ((Ul = 1),
    Object.defineProperty(Vt, "__esModule", { value: !0 }),
    (Vt.createTranslationFunction = Vt.getTranslations = Vt.resetTranslationsCache = void 0));
  const e = Vp(),
    t = bi(),
    r = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!s.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return s.json();
      },
    },
    n = new e.TranslationsGetter(r),
    a = () => {
      n.reset();
    };
  Vt.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let u = c;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, s));
  };
  Vt.getTranslations = o;
  const i = async (c = null) => {
    let s = c;
    s || (s = (await t.view.getContext()).locale);
    const u = new e.Translator(s, n);
    return (
      await u.init(),
      (l, d) => {
        var p, v;
        return (v = (p = u.translate(l)) !== null && p !== void 0 ? p : d) !== null && v !== void 0
          ? v
          : l;
      }
    );
  };
  return ((Vt.createTranslationFunction = i), Vt);
}
var ps = {},
  ca = {},
  ql;
function im() {
  if (ql) return ca;
  ((ql = 1), Object.defineProperty(ca, "__esModule", { value: !0 }), (ca.permissions = void 0));
  const t = (0, fe().getCallBridge)(),
    r = async (s) => t("__permission__egressGet", s),
    n = async (s) => t("__permission__egressSet", s),
    a = async (s) => t("__permission__egressDeleteDomain", s),
    o = async (s) => t("__permission__egressDeleteGroup", s),
    i = async (s) => t("__permission__remoteGet", s),
    c = async (s) => t("__permission__remoteSet", s);
  return (
    (ca.permissions = {
      egress: { get: r, set: n, deleteDomain: a, deleteGroup: o },
      remote: { get: i, set: c },
    }),
    ca
  );
}
var br = {},
  hs = {},
  gs = {},
  ua = {},
  la = {},
  zl;
function qc() {
  if (zl) return la;
  ((zl = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.parseUrl = void 0));
  function e(t) {
    var r, n;
    const a =
        (n = (r = t.match(/^(.*?:)/)) === null || r === void 0 ? void 0 : r[0]) !== null &&
        n !== void 0
          ? n
          : "https:",
      o = t.replace(a, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      i = o.split("/")[0],
      c = o.slice(i.length) || "/";
    return { protocol: a, hostname: i, pathname: c };
  }
  return ((la.parseUrl = e), la);
}
var bs = {},
  $l;
function Xp() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const t = qc();
        function r(i) {
          const s = i.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${s}$`);
        }
        e.globToRegex = r;
        const n = (i) => {
          if (i?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            s = new Set(),
            u = [];
          return (
            i.forEach((l) => {
              const d = c.test(l) ? l : `https://${l}`,
                p = (0, t.parseUrl)(d);
              p.hostname.startsWith("*")
                ? (s.add(p.hostname.substring(2)), u.push(r(p.hostname)))
                : s.add(p.hostname);
            }),
            [...s].sort().reduce((l, d) => (u.some((p) => p.test(d)) || l.push(d), l), [])
          );
        };
        ((e.sortAndGroupEgressPermissionsByDomain = n),
          (function (i) {
            ((i.FetchBackendSide = "FETCH_BACKEND_SIDE"),
              (i.FetchClientSide = "FETCH_CLIENT_SIDE"),
              (i.Fonts = "FONTS"),
              (i.Frames = "FRAMES"),
              (i.Images = "IMAGES"),
              (i.Media = "MEDIA"),
              (i.Navigation = "NAVIGATION"),
              (i.Scripts = "SCRIPTS"),
              (i.Styles = "STYLES"));
          })(e.EgressType || (e.EgressType = {})));
        var a;
        (function (i) {
          i.ANALYTICS = "ANALYTICS";
        })((a = e.EgressCategory || (e.EgressCategory = {})));
        const o = (i) => {
          const c = i.egress.filter((u) => {
              var l;
              if (
                ((l = u.category) === null || l === void 0 ? void 0 : l.toUpperCase()) ===
                a.ANALYTICS
              )
                if (i.installationConfig) {
                  const d = i.installationConfig.find(
                    (p) => p.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return d?.value !== !1;
                } else return i.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            s = new Map();
          for (const u of c)
            (s.has(u.type) || s.set(u.type, u.addresses),
              s.set(u.type, [...s.get(u.type), ...u.addresses]));
          return [...s.entries()].map(([u, l]) => ({ type: u, addresses: [...new Set(l)] }));
        };
        e.getEgressesBasedOnToggles = o;
      })(bs)),
    bs
  );
}
var Vl;
function sm() {
  if (Vl) return ua;
  ((Vl = 1),
    Object.defineProperty(ua, "__esModule", { value: !0 }),
    (ua.EgressFilteringService = void 0));
  const e = qc(),
    t = Xp();
  class r {
    constructor(a) {
      ((this.URLs = a.filter((o) => !o.startsWith("*")).map((o) => this.parseUrl(o))),
        (this.wildcardDomains = a
          .filter((o) => o !== "*")
          .map((o) => this.parseUrl(o))
          .filter((o) => decodeURIComponent(o.hostname).startsWith("*"))
          .map((o) => ({ ...o, regex: (0, t.globToRegex)(decodeURIComponent(o.hostname)) }))),
        (this.allowsEverything = a.includes("*")));
    }
    parseUrl(a) {
      return (0, e.parseUrl)(a);
    }
    containsWildCardEgress() {
      return this.allowsEverything;
    }
    isValidUrl(a) {
      if (this.allowsEverything) return !0;
      const o = this.parseUrl(a);
      return (
        this.allowedDomainExact(o, this.URLs) || this.allowedDomainPattern(o, this.wildcardDomains)
      );
    }
    isValidUrlCSP(a) {
      if (this.allowsEverything) return !0;
      const o = this.parseUrl(a);
      return (
        this.allowedDomainExactAndPath(o, this.URLs) ||
        this.allowedDomainPatternAndPath(o, this.wildcardDomains)
      );
    }
    allowedDomainExact(a, o) {
      return o.filter((i) => i.protocol === a.protocol).some((i) => i.hostname === a.hostname);
    }
    allowedDomainExactAndPath(a, o) {
      return o
        .filter((i) => this.protocolMatchesCSP(i.protocol, a.protocol))
        .filter((i) => i.hostname === a.hostname)
        .some((i) => this.pathMatches(i.pathname, a.pathname));
    }
    allowedDomainPattern(a, o) {
      return o.filter((i) => i.protocol === a.protocol).some((i) => i.regex.test(a.hostname));
    }
    allowedDomainPatternAndPath(a, o) {
      return o
        .filter((i) => this.protocolMatchesCSP(i.protocol, a.protocol))
        .filter((i) => i.regex.test(a.hostname))
        .some((i) => this.pathMatches(i.pathname, a.pathname));
    }
    protocolMatchesCSP(a, o) {
      return a === o || (a === "http:" && o === "https:") || (a === "ws:" && o === "wss:");
    }
    pathMatches(a, o) {
      return a === "/" ? !0 : a.endsWith("/") ? o.startsWith(a) : o === a;
    }
  }
  return ((ua.EgressFilteringService = r), ua);
}
var Gl;
function cm() {
  return (
    Gl ||
      ((Gl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ge;
        (t.__exportStar(sm(), e), t.__exportStar(qc(), e), t.__exportStar(Xp(), e));
      })(gs)),
    gs
  );
}
var Hl;
function um() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ge.__exportStar(cm(), e));
      })(hs)),
    hs
  );
}
var Wl;
function lm() {
  if (Wl) return br;
  ((Wl = 1),
    Object.defineProperty(br, "__esModule", { value: !0 }),
    (br.checkPermissions = br.createPermissionUtils = void 0));
  const e = um(),
    t = bi();
  function r(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const n = ["fonts", "styles", "frames", "images", "media", "scripts"],
    a = ["backend", "client"];
  function o(d) {
    if (!d) return null;
    const { scopes: p, external: v = {} } = d,
      g = Array.isArray(p) ? p : Object.keys(p || {});
    return {
      hasScope: (f) => g.includes(f),
      canFetchFrom: (f, h) => {
        var b;
        const _ = (b = v.fetch) === null || b === void 0 ? void 0 : b[f];
        if (!_?.length) return !1;
        const y = _.map(r).filter((S) => S.length > 0);
        if (y.length === 0) return !1;
        const k = new e.EgressFilteringService(y);
        return f === "client" ? k.isValidUrlCSP(h) : k.isValidUrl(h);
      },
      canLoadResource: (f, h) => {
        const b = v[f];
        if (!b?.length) return !1;
        const _ = b.map(r).filter((w) => w.length > 0);
        return _.length === 0 ? !1 : new e.EgressFilteringService(_).isValidUrlCSP(h);
      },
      getScopes: () => g,
      getExternalPermissions: () => v,
      hasAnyPermissions: () => g.length > 0 || Object.keys(v).length > 0,
    };
  }
  br.createPermissionUtils = o;
  function i(d, p) {
    if (!d?.length) return;
    const v = d.filter((g) => !p.hasScope(g));
    return v.length > 0 ? v : void 0;
  }
  function c(d, p) {
    if (!d?.fetch) return;
    const v = {};
    return (
      a.forEach((g) => {
        var f;
        const h = (f = d.fetch) === null || f === void 0 ? void 0 : f[g];
        if (h?.length) {
          const b = h.filter((_) => !p.canFetchFrom(g, _));
          b.length > 0 && (v[g] = b);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function s(d, p) {
    const v = {};
    return (
      n.forEach((g) => {
        const f = d?.[g];
        if (f?.length) {
          const h = f.filter((b) => !p.canLoadResource(g, b));
          h.length > 0 && (v[g] = h);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function u(d, p) {
    if (!d) return;
    const v = c(d, p),
      g = s(d, p);
    if (!v && !g) return;
    const f = {};
    return (v && (f.fetch = v), g && Object.assign(f, g), f);
  }
  async function l(d, p) {
    var v;
    if (!d) return { granted: !1, missing: null };
    if (!(!((v = d.scopes) === null || v === void 0) && v.length) && !d.external)
      return { granted: !0, missing: null };
    let g = p;
    g || (g = (await t.view.getContext()).permissions);
    const f = o(g);
    if (!f) return { granted: !1, missing: null };
    const h = {};
    let b = !0;
    const _ = i(d.scopes, f);
    _ && ((h.scopes = _), (b = !1));
    const y = u(d.external, f);
    return (y && ((h.external = y), (b = !1)), { granted: b, missing: b ? null : h });
  }
  return ((br.checkPermissions = l), br);
}
var Kl;
function dm() {
  return (
    Kl ||
      ((Kl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ge;
        (t.__exportStar(im(), e), t.__exportStar(lm(), e));
      })(ps)),
    ps
  );
}
var _s = {},
  ms = {},
  ys = {},
  da = {},
  fa = {},
  Jl;
function Zp() {
  return (
    Jl ||
      ((Jl = 1),
      Object.defineProperty(fa, "__esModule", { value: !0 }),
      (fa.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (fa.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    fa
  );
}
var Yl;
function _i() {
  if (Yl) return da;
  ((Yl = 1),
    Object.defineProperty(da, "__esModule", { value: !0 }),
    (da.checkRestrictedEnvironment = void 0));
  const e = ke(),
    t = bi(),
    r = Zp(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((da.checkRestrictedEnvironment = n), da);
}
var Xl;
function fm() {
  return (
    Xl ||
      ((Xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = uo(),
          r = ke(),
          n = _i(),
          o = (0, fe().getCallBridge)(),
          i = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const g = new Uint8Array(v);
            return new Blob([g], { type: d || "application/octet-stream" });
          },
          c = async (l) => {
            const d = l.size,
              p = await l.arrayBuffer(),
              v = await crypto.subtle.digest("SHA-256", p),
              g = new Uint8Array(v),
              f = btoa(String.fromCharCode(...g));
            return { length: d, checksum: f, checksumType: "SHA256" };
          },
          s = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new r.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new r.BridgeAPIError("objects array is required and must not be empty");
            const p = d.map((_, y) => {
                if (_ instanceof Blob) return _;
                if (!(_ && typeof _ == "object" && "data" in _ && typeof _.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return i(_.data, _.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((_) => c(_))),
              g = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              p.forEach((_, y) => {
                const k = v[y];
                (f.set(k.checksum, _), h.set(k.checksum, y));
              }),
              Object.entries(g).map(([_, y]) => {
                const { key: k, checksum: w } = y,
                  S = f.get(w),
                  E = h.get(w);
                return E === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: k,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const j = await fetch(_, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: j.ok,
                              key: k,
                              status: j.status,
                              error: j.ok ? void 0 : `Upload failed with status ${j.status}`,
                            };
                          } catch (j) {
                            return {
                              success: !1,
                              key: k,
                              status: 503,
                              error: j instanceof Error ? j.message : "Upload failed",
                            };
                          }
                        })(),
                        index: E,
                        objectType: S.type,
                        objectSize: S.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: k,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: E,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const u = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((g) => g.promise));
        };
        e.upload = u;
      })(ys)),
    ys
  );
}
var va = {},
  Zl;
function vm() {
  if (Zl) return va;
  ((Zl = 1), Object.defineProperty(va, "__esModule", { value: !0 }), (va.deleteObjects = void 0));
  const e = uo(),
    t = ke(),
    r = _i(),
    a = (0, fe().getCallBridge)(),
    o = async ({ functionKey: i, keys: c }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "delete" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (s) => {
          await (0, e.invoke)(i, { key: s });
        }),
      );
    };
  return ((va.deleteObjects = o), va);
}
var pa = {},
  Ql;
function pm() {
  if (Ql) return pa;
  ((Ql = 1), Object.defineProperty(pa, "__esModule", { value: !0 }), (pa.download = void 0));
  const e = uo(),
    t = ke(),
    r = _i(),
    a = (0, fe().getCallBridge)(),
    o = async ({ functionKey: i, keys: c }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "download" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const s = await (0, e.invoke)(i, { keys: c });
      if (!s || typeof s != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const u = Object.entries(s).map(async ([d, p]) => {
        try {
          const v = await fetch(d, { method: "GET" });
          if (!v.ok)
            return {
              success: !1,
              key: p,
              status: v.status,
              error: `Download failed with status ${v.status}`,
            };
          const g = await v.blob();
          return { success: !0, key: p, blob: g, status: v.status };
        } catch (v) {
          return {
            success: !1,
            key: p,
            status: 503,
            error: v instanceof Error ? v.message : "Download failed",
          };
        }
      });
      return await Promise.all(u);
    };
  return ((pa.download = o), pa);
}
var ha = {},
  ed;
function hm() {
  if (ed) return ha;
  ((ed = 1), Object.defineProperty(ha, "__esModule", { value: !0 }), (ha.getMetadata = void 0));
  const e = uo(),
    t = ke(),
    r = _i(),
    a = (0, fe().getCallBridge)(),
    o = async ({ functionKey: i, keys: c }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "getMetadata" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (u) => {
          const l = await (0, e.invoke)(i, { key: u });
          return !l || typeof l != "object"
            ? { key: u, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((ha.getMetadata = o), ha);
}
var td;
function gm() {
  return (
    td ||
      ((td = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = fm();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = vm(),
          n = pm(),
          a = hm();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(ms)),
    ms
  );
}
var rd;
function bm() {
  return (
    rd ||
      ((rd = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ge;
        (t.__exportStar(gm(), e), t.__exportStar(Zp(), e));
      })(_s)),
    _s
  );
}
var ws = {},
  ga = {},
  _r = {},
  Ur = {},
  yo = {},
  nd;
function _m() {
  if (nd) return yo;
  ((nd = 1), Object.defineProperty(yo, "__esModule", { value: !0 }));
  const e = sr();
  class t {
    constructor(n) {
      ((this._sdkKey = n),
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
    setValues(n, a) {
      var o;
      if (!n) return !1;
      const i = (0, e._typedJsonParse)(n.data, "has_updates", "EvaluationResponse");
      return i == null
        ? !1
        : ((this._source = n.source),
          i?.has_updates !== !0 ||
            ((this._rawValues = n.data),
            (this._lcut = i.time),
            (this._receivedAt = n.receivedAt),
            (this._values = i),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(n.source, i)),
            n.source && i.user && this._setWarningState(a, i),
            e.SDKFlags.setFlags(this._sdkKey, (o = i.sdk_flags) !== null && o !== void 0 ? o : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.feature_gates,
        n,
      );
    }
    getConfig(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.dynamic_configs,
        n,
      );
    }
    getLayer(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.layer_configs,
        n,
      );
    }
    getParamStore(n) {
      var a;
      return this._getDetailedStoreResult(
        (a = this._values) === null || a === void 0 ? void 0 : a.param_stores,
        n,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var n;
      return (n = this._values) === null || n === void 0 ? void 0 : n.exposures;
    }
    _extractBootstrapMetadata(n, a) {
      if (n !== "Bootstrap") return null;
      const o = {};
      return (
        a.user && (o.user = a.user),
        a.sdkInfo && (o.generatorSDKInfo = a.sdkInfo),
        (o.lcut = a.time),
        o
      );
    }
    _getDetailedStoreResult(n, a) {
      let o = null;
      return (
        n && (o = n[a] ? n[a] : n[(0, e._DJB2)(a)]),
        { result: o, details: this._getDetails(o == null) }
      );
    }
    _setWarningState(n, a) {
      var o, i;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((o = n.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== c &&
        ((!((i = n.customIDs) === null || i === void 0) && i.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const s = a.user;
        (0, e._getFullUserHash)(n) !== (0, e._getFullUserHash)(s) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const n = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (n.warnings = Array.from(this._warnings)), n);
    }
    _getDetails(n) {
      var a, o;
      const i = this.getCurrentSourceDetails();
      let c = i.reason;
      const s = (a = i.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && s.length > 0 && (c = c + s[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${n ? "Unrecognized" : "Recognized"}`));
      const u =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (u && (i.bootstrapMetadata = u), Object.assign(Object.assign({}, i), { reason: c }));
    }
  }
  return ((yo.default = t), yo);
}
var qr = {},
  ba = {},
  ad;
function mm() {
  if (ad) return ba;
  ((ad = 1),
    Object.defineProperty(ba, "__esModule", { value: !0 }),
    (ba._resolveDeltasResponse = void 0));
  const e = sr(),
    t = 2;
  function r(i, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const u = n(i, s),
      l = a(u),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === s.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: s.deltas_full_response,
        };
  }
  ba._resolveDeltasResponse = r;
  function n(i, c) {
    return Object.assign(Object.assign(Object.assign({}, i), c), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), c.dynamic_configs),
    });
  }
  function a(i) {
    const c = i;
    return (
      o(i.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      o(i.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      o(i.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function o(i, c) {
    i?.forEach((s) => {
      delete c[s];
    });
  }
  return ba;
}
var od;
function Qp() {
  if (od) return qr;
  od = 1;
  var e =
    (qr && qr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(qr, "__esModule", { value: !0 });
  const t = sr(),
    r = mm();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const c = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, i, c, s, u) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
          hash:
            (p =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const _ =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !_ ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && u ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: _ ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(o, h, b, c);
      });
    }
    _fetchEvaluations(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u, l;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (u = d?.body) !== null && u !== void 0 ? u : null;
        if (
          i?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const p = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((qr.default = n), qr);
}
var _a = {},
  id;
function ym() {
  if (id) return _a;
  ((id = 1),
    Object.defineProperty(_a, "__esModule", { value: !0 }),
    (_a._makeParamStoreGetter = void 0));
  const e = sr(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function a(l, d) {
    return l.value;
  }
  function o(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return a(f);
        case "gate":
          return o(l, f, p);
        case "dynamic_config":
          return i(l, f, g, p);
        case "experiment":
          return c(l, f, g, p);
        case "layer":
          return s(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((_a._makeParamStoreGetter = u), _a);
}
var mr = {},
  sd;
function wm() {
  if (sd) return mr;
  sd = 1;
  var e =
    (mr && mr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(mr, "__esModule", { value: !0 }),
    (mr.StatsigEvaluationsDataAdapter = void 0));
  const t = sr(),
    r = Qp();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, i, c) {
      (super.attach(o, i, c),
        c !== null && c instanceof r.default
          ? (this._network = c)
          : (this._network = new r.default(i ?? {})));
    }
    getDataAsync(o, i, c) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), c);
    }
    prefetchData(o, i) {
      return this._prefetchDataImpl(o, i);
    }
    setData(o) {
      const i = (0, t._typedJsonParse)(o, "has_updates", "data");
      i && "user" in i
        ? super.setData(o, i.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(o, i) {
      super.setData(o, i);
    }
    _fetchFromNetwork(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u;
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), o, c?.priority, i, s);
        return l ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  }
  return ((mr.StatsigEvaluationsDataAdapter = n), mr);
}
var cd;
function km() {
  if (cd) return Ur;
  cd = 1;
  var e =
    (Ur && Ur.__awaiter) ||
    function (c, s, u, l) {
      function d(p) {
        return p instanceof u
          ? p
          : new u(function (v) {
              v(p);
            });
      }
      return new (u || (u = Promise))(function (p, v) {
        function g(b) {
          try {
            h(l.next(b));
          } catch (_) {
            v(_);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (_) {
            v(_);
          }
        }
        function h(b) {
          b.done ? p(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Ur, "__esModule", { value: !0 });
  const t = sr(),
    r = _m(),
    n = Qp(),
    a = ym(),
    o = wm();
  class i extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof i
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new i(s ?? "", {}));
    }
    constructor(s, u, l = null) {
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        v,
        l,
      ),
        (this.getFeatureGate = this._memoize(
          t.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          t.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          t.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getLayer = this._memoize(t.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          t.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new r.default(s)),
        (this._network = v),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
    }
    initializeSync(s) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, s));
    }
    initializeAsync(s) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(s)), this._initializePromise);
      });
    }
    updateUserSync(s, u) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, u, l);
      } catch (d) {
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = u?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && v?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          ));
    }
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
        }
      });
    }
    _updateUserAsyncImpl(s, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, u)),
          l !== this._user)
        )
          return (0, t.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let p = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (p = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: p })),
          this._finalizeUpdate(d),
          p ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            p,
            this._store.getCurrentSourceDetails(),
          ));
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          p,
          this._store.getSource(),
          v,
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
        session: t.StatsigSession.get(this._sdkKey),
        stableID: t.StableID.get(this._sdkKey),
        sdkInstanceID: this._sdkInstanceID,
      };
    }
    checkGate(s, u) {
      return this.getFeatureGate(s, u).value;
    }
    logEvent(s, u, l) {
      const d = typeof s == "string" ? { eventName: s, value: u, metadata: l } : s;
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
    _initializeAsyncImpl(s) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, s)
        );
      });
    }
    _createErrorUpdateDetails(s, u) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - u,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, u) {
      this.dataAdapter.getDataAsync(s, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, u) {
      var l;
      const d = (0, t._normalizeUser)(s, u),
        p = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (p && t.StableID.setOverride(p, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        g = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        g = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(s, u) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(s),
        h = (0, t._makeExperiment)(s, f, g);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = h.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, u),
        _ = b ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
      );
    }
    _getLayerImpl(s, u) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (_) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                _,
                this._store.getExposureMapping(),
              ),
              u,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
          details: v,
          __configuration: p,
          get: (0, a._makeParamStoreGetter)(this, p, u),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, u);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, a._makeParamStoreGetter)(this, f.config, u))),
        g
      );
    }
  }
  return ((Ur.default = i), Ur);
}
var ud;
function Om() {
  return (
    ud ||
      ((ud = 1),
      (function (e) {
        var t =
            (_r && _r.__createBinding) ||
            (Object.create
              ? function (i, c, s, u) {
                  u === void 0 && (u = s);
                  var l = Object.getOwnPropertyDescriptor(c, s);
                  ((!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(i, u, l));
                }
              : function (i, c, s, u) {
                  (u === void 0 && (u = s), (i[u] = c[s]));
                }),
          r =
            (_r && _r.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = sr(),
          a = km();
        ((e.StatsigClient = a.default), r(sr(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(_r)),
    _r
  );
}
var ma = {},
  ya = {},
  ld;
function Sm() {
  if (ld) return ya;
  ((ld = 1),
    Object.defineProperty(ya, "__esModule", { value: !0 }),
    (ya.initFeatureFlags = void 0));
  const e = fe(),
    t = ke(),
    r = pi(),
    n = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    i = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (s) => (i(s), o("initFeatureFlags", { user: s.user }));
  return (
    (ya.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    ya
  );
}
var dd;
function Em() {
  if (dd) return ma;
  ((dd = 1),
    Object.defineProperty(ma, "__esModule", { value: !0 }),
    (ma.ForgeDataAdapter = void 0));
  const e = Sm();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(n, a, o) {
      var i;
      if (n) return n;
      this.environment = ((i = this.options) === null || i === void 0 ? void 0 : i.environment) || {
        tier: "development",
      };
      const c = { ...a, statsigEnvironment: this.environment },
        s = await (0, e.initFeatureFlags)({ user: c }),
        u = {
          source: "Network",
          data: JSON.stringify(s),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = u), u);
    }
    getDataSync(n) {
      return this.cache;
    }
    async attach(n, a, o) {
      this.options = a;
    }
    async prefetchData() {}
    async setData(n) {}
    async setDataLegacy(n) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((ma.ForgeDataAdapter = t), ma);
}
var ks = {},
  fd;
function eh() {
  return (
    fd ||
      ((fd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (r) {
            ((r.DEVELOPMENT = "DEVELOPMENT"),
              (r.STAGING = "STAGING"),
              (r.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var t;
        ((function (r) {
          r.USER_ACCESS = "USER_ACCESS";
        })(t || (t = {})),
          (function (r) {
            r.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(ks)),
    ks
  );
}
var wa = {},
  vd;
function xm() {
  if (vd) return wa;
  ((vd = 1),
    Object.defineProperty(wa, "__esModule", { value: !0 }),
    (wa.trackFeatureFlagEvent = void 0));
  const e = fe(),
    t = ke(),
    r = eh(),
    n = pi(),
    a = 500,
    o = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    c = (u) => {
      if (!u || !u.type || !u.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(u.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(u).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (u) => (c(u), i("trackFeatureFlagEvent", u));
  return (
    (wa.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    wa
  );
}
var pd;
function Cm() {
  if (pd) return ga;
  ((pd = 1),
    Object.defineProperty(ga, "__esModule", { value: !0 }),
    (ga.ForgeFeatureFlags = void 0));
  const e = Om(),
    t = Em(),
    r = eh(),
    n = xm();
  class a {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(i, c = {}) {
      var s;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const u = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (s = u.environment) === null || s === void 0 ? void 0 : s.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(i), u)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(i) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(i, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(i, !0), this.client.checkGate(i, { disableExposureLog: !0 }));
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
    convertUser(i) {
      return {
        userID: i.userId,
        custom: { ...(i.custom || {}), ...(i.attributes || {}) },
        customIDs: i.identifiers || {},
      };
    }
    sendCheckFlagEvent(i, c) {
      const s = {
        type: r.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: i,
          success: c,
        },
      };
      (0, n.trackFeatureFlagEvent)(s);
    }
  }
  return ((ga.ForgeFeatureFlags = a), ga);
}
var hd;
function Pm() {
  return (
    hd ||
      ((hd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = Cm();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(ws)),
    ws
  );
}
var gd;
function Rm() {
  return (
    gd ||
      ((gd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ge;
        var r = c_();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(uo(), e),
          t.__exportStar(f_(), e),
          t.__exportStar(bi(), e),
          t.__exportStar(V_(), e),
          t.__exportStar(H_(), e),
          t.__exportStar(K_(), e),
          t.__exportStar(Y_(), e),
          t.__exportStar(X_(), e),
          t.__exportStar(em(), e),
          t.__exportStar(am(), e),
          (e.i18n = t.__importStar(om())),
          t.__exportStar(dm(), e),
          t.__exportStar(bm(), e),
          t.__exportStar(Pm(), e));
      })(Ki)),
    Ki
  );
}
var Ya = Rm();
function X(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
          e +
          (r.length ? " " + r.map(String).join(",") : "") +
          ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
var Am = {};
function mi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Am;
}
var th = Object.assign,
  Ko = Object.getOwnPropertyDescriptor,
  Rt = Object.defineProperty,
  yi = Object.prototype,
  cc = [];
Object.freeze(cc);
var rh = {};
Object.freeze(rh);
var Im = typeof Proxy < "u",
  jm = Object.toString();
function nh() {
  Im || X("Proxy not available");
}
function ah(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var tn = function () {};
function mt(e) {
  return typeof e == "function";
}
function Er(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function wi(e) {
  return e !== null && typeof e == "object";
}
function cr(e) {
  if (!wi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === jm;
}
function oh(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function ki(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function ih(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function jr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return wi(n) && n[r] === !0;
    }
  );
}
function hn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Dm(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Kt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var sh = typeof Object.getOwnPropertySymbols < "u";
function Tm(e) {
  var t = Object.keys(e);
  if (!sh) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return yi.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Oi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : sh
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function ch(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Xt(e, t) {
  return yi.hasOwnProperty.call(e, t);
}
var Mm =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Oi(t).forEach(function (n) {
        r[n] = Ko(t, n);
      }),
      r
    );
  };
function Ke(e, t) {
  return !!(e & t);
}
function Je(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Lm(n.key), n));
  }
}
function gn(e, t, r) {
  return (t && Fm(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function rn(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Bm(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr() {
  return (
    (xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xr.apply(null, arguments)
  );
}
function uh(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), uc(e, t));
}
function uc(e, t) {
  return (
    (uc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    uc(e, t)
  );
}
function Nm(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Lm(e) {
  var t = Nm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Bm(e, t) {
  if (e) {
    if (typeof e == "string") return bd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? bd(e, t)
          : void 0
    );
  }
}
var Pt = Symbol("mobx-stored-annotations");
function At(e) {
  function t(r, n) {
    if (fo(n)) return e.decorate_20223_(r, n);
    lo(r, n, e);
  }
  return Object.assign(t, e);
}
function lo(e, t, r) {
  (Xt(e, Pt) || ki(e, Pt, xr({}, e[Pt])), Hm(r) || (e[Pt][t] = r));
}
function Um(e) {
  return (Xt(e, Pt) || ki(e, Pt, xr({}, e[Pt])), e[Pt]);
}
function fo(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var V = Symbol("mobx administration"),
  lr = (function () {
    function e(r) {
      (r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Q.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = r));
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.reportObserved = function () {
        return Eh(this);
      }),
      (t.reportChanged = function () {
        (ut(), xh(this), lt());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      gn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ke(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ke(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ke(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
lr.isBeingObservedMask_ = 1;
lr.isPendingUnobservationMask_ = 2;
lr.diffValueMask_ = 4;
var zc = jr("Atom", lr);
function lh(e, t, r) {
  (t === void 0 && (t = tn), r === void 0 && (r = tn));
  var n = new lr(e);
  return (t !== tn && Xy(n, t), r !== tn && Ih(n, r), n);
}
function qm(e, t) {
  return Vh(e, t);
}
function zm(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Jo = { structural: qm, default: zm };
function Cr(e, t, r) {
  return Mh(e)
    ? e
    : Array.isArray(e)
      ? ue.array(e, { name: r })
      : cr(e)
        ? ue.object(e, void 0, { name: r })
        : hn(e)
          ? ue.map(e, { name: r })
          : Kt(e)
            ? ue.set(e, { name: r })
            : typeof e == "function" && !sn(e) && !Za(e)
              ? oh(e)
                ? cn(e)
                : Xa(r, e)
              : e;
}
function $m(e, t, r) {
  if (e == null || Ii(e) || Ai(e) || Tr(e) || Ct(e)) return e;
  if (Array.isArray(e)) return ue.array(e, { name: r, deep: !1 });
  if (cr(e)) return ue.object(e, void 0, { name: r, deep: !1 });
  if (hn(e)) return ue.map(e, { name: r, deep: !1 });
  if (Kt(e)) return ue.set(e, { name: r, deep: !1 });
}
function Si(e) {
  return e;
}
function Vm(e, t) {
  return Vh(e, t) ? t : e;
}
var Gm = "override";
function Hm(e) {
  return e.annotationType_ === Gm;
}
function vo(e, t) {
  return { annotationType_: e, options_: t, make_: Wm, extend_: Km, decorate_20223_: Jm };
}
function Wm(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (sn(r.value)) return 1;
  var o = dh(e, this, t, r, !1);
  return (Rt(n, t, o), 2);
}
function Km(e, t, r, n) {
  var a = dh(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Jm(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, p, v;
      return Pr(
        (l = (d = o.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (p = (v = o.options_) == null ? void 0 : v.autoAction) != null ? p : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var u,
        l = s;
      return (
        sn(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      sn(e) || (e = i(e)),
      (c = this.options_) != null &&
        c.bound &&
        a(function () {
          var s = this,
            u = s[n].bind(s);
          ((u.isMobxAction = !0), (s[n] = u));
        }),
      e
    );
  }
  X(
    "Cannot apply '" +
      o.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        o.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function Ym(e, t, r, n) {
  (t.annotationType_, n.value);
}
function dh(e, t, r, n, a) {
  var o, i, c, s, u, l, d;
  (a === void 0 && (a = I.safeDescriptors), Ym(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: Pr(
      (i = (c = t.options_) == null ? void 0 : c.name) != null ? i : r.toString(),
      p,
      (s = (u = t.options_) == null ? void 0 : u.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function fh(e, t) {
  return { annotationType_: e, options_: t, make_: Xm, extend_: Zm, decorate_20223_: Qm };
}
function Xm(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Xt(e.target_, t) || !Za(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Za(r.value)) return 1;
  var o = vh(e, this, t, r, !1, !1);
  return (Rt(n, t, o), 2);
}
function Zm(e, t, r, n) {
  var a,
    o = vh(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Qm(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Za(e) || (e = cn(e)),
    (r = this.options_) != null &&
      r.bound &&
      a(function () {
        var o = this,
          i = o[n].bind(o);
        ((i.isMobXFlow = !0), (o[n] = i));
      }),
    e
  );
}
function ey(e, t, r, n) {
  (t.annotationType_, n.value);
}
function vh(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), ey(e, t, r, n));
  var i = n.value;
  if ((Za(i) || (i = cn(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function $c(e, t) {
  return { annotationType_: e, options_: t, make_: ty, extend_: ry, decorate_20223_: ny };
}
function ty(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ry(e, t, r, n) {
  return (
    ay(e, this, t, r),
    e.defineComputedProperty_(t, xr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function ny(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = bn(this)[V],
        i = xr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new yt(i)));
    }),
    function () {
      return this[V].getObservablePropValue_(n);
    }
  );
}
function ay(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ei(e, t) {
  return { annotationType_: e, options_: t, make_: oy, extend_: iy, decorate_20223_: sy };
}
function oy(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function iy(e, t, r, n) {
  var a, o;
  return (
    cy(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : Cr,
      n,
    )
  );
}
function sy(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var u,
      l,
      d = bn(c)[V],
      p = new Or(
        s,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : Cr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, p), o.add(c));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[V].getObservablePropValue_(a));
      },
      set: function (s) {
        return (o.has(this) || i(this, s), this[V].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (o.has(this) || i(this, s), s);
      },
    };
}
function cy(e, t, r, n) {
  t.annotationType_;
}
var uy = "true",
  ly = ph();
function ph(e) {
  return { annotationType_: uy, options_: e, make_: dy, extend_: fy, decorate_20223_: vy };
}
function dy(e, t, r, n) {
  var a, o;
  if (r.get) return xi.make_(e, t, r, n);
  if (r.set) {
    var i = sn(r.set) ? r.set : Pr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: I.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (Rt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (oh(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? cn.bound : cn;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? Xa.bound : Xa;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ue.ref : ue;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function fy(e, t, r, n) {
  var a, o;
  if (r.get) return xi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: Pr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ue.ref : ue;
  return c.extend_(e, t, r, n);
}
function vy(e, t) {
  X("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var py = "observable",
  hy = "observable.ref",
  gy = "observable.shallow",
  by = "observable.struct",
  hh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(hh);
function wo(e) {
  return e || hh;
}
var lc = Ei(py),
  _y = Ei(hy, { enhancer: Si }),
  my = Ei(gy, { enhancer: $m }),
  yy = Ei(by, { enhancer: Vm }),
  gh = At(lc);
function ko(e) {
  return e.deep === !0 ? Cr : e.deep === !1 ? Si : ky(e.defaultDecorator);
}
function wy(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : ph(e)) : void 0;
}
function ky(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Cr;
}
function bh(e, t, r) {
  if (fo(t)) return lc.decorate_20223_(e, t);
  if (Er(t)) {
    lo(e, t, lc);
    return;
  }
  return Mh(e)
    ? e
    : cr(e)
      ? ue.object(e, t, r)
      : Array.isArray(e)
        ? ue.array(e, t)
        : hn(e)
          ? ue.map(e, t)
          : Kt(e)
            ? ue.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ue.box(e, t);
}
th(bh, gh);
var Oy = {
    box: function (t, r) {
      var n = wo(r);
      return new Or(t, ko(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = wo(r);
      return (I.useProxies === !1 || n.proxy === !1 ? w0 : d0)(t, ko(n), n.name);
    },
    map: function (t, r) {
      var n = wo(r);
      return new Lh(t, ko(n), n.name);
    },
    set: function (t, r) {
      var n = wo(r);
      return new Bh(t, ko(n), n.name);
    },
    object: function (t, r, n) {
      return Mr(function () {
        return t0(I.useProxies === !1 || n?.proxy === !1 ? bn({}, n) : c0({}, n), t, r);
      });
    },
    ref: At(_y),
    shallow: At(my),
    deep: gh,
    struct: At(yy),
  },
  ue = th(bh, Oy),
  _h = "computed",
  Sy = "computed.struct",
  dc = $c(_h),
  Ey = $c(Sy, { equals: Jo.structural }),
  xi = function (t, r) {
    if (fo(r)) return dc.decorate_20223_(t, r);
    if (Er(r)) return lo(t, r, dc);
    if (cr(t)) return At($c(_h, t));
    var n = cr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new yt(n));
  };
Object.assign(xi, dc);
xi.struct = At(Ey);
var _d,
  md,
  Yo = 0,
  xy = 1,
  Cy =
    (_d = (md = Ko(function () {}, "name")) == null ? void 0 : md.configurable) != null ? _d : !1,
  yd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function Pr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Py(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Cy && ((yd.value = e), Rt(a, "name", yd)),
    a
  );
}
function Py(e, t, r, n, a) {
  var o = Ry(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    Ay(o);
  }
}
function Ry(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    c = !t || !i;
  ut();
  var s = I.allowStateChanges;
  c && (Dr(), (s = Ci(!0)));
  var u = Vc(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: xy++,
      parentActionId_: Yo,
    };
  return ((Yo = l.actionId_), l);
}
function Ay(e) {
  (Yo !== e.actionId_ && X(30),
    (Yo = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    Pi(e.prevAllowStateChanges_),
    qa(e.prevAllowStateReads_),
    lt(),
    e.runAsAction_ && Zt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function Iy(e, t) {
  var r = Ci(e);
  try {
    return t();
  } finally {
    Pi(r);
  }
}
function Ci(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function Pi(e) {
  I.allowStateChanges = e;
}
var Or = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = Jo.default),
        (s = e.call(this, o) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = a),
        (s.name_ = o),
        (s.equals = c),
        (s.value_ = a(n, void 0, o)),
        s
      );
    }
    uh(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== I.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (st(this)) {
          var o = ct(this, { object: this, type: It, newValue: a });
          if (!o) return I.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? I.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var o = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          bt(this) && _t(this, { type: It, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return po(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: It,
              newValue: this.value_,
              oldValue: void 0,
            }),
          ho(this, a)
        );
      }),
      (r.raw = function () {
        return this.value_;
      }),
      (r.toJSON = function () {
        return this.get();
      }),
      (r.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (r.valueOf = function () {
        return ch(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(lr),
  yt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Q.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Q.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Zo(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Xo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || X(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = Pr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Jo.structural : Jo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Fy(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && X(32, this.name_, this.derivation),
          I.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          fc(this) &&
            (this.warnAboutUntrackedRead_(), ut(), (this.value_ = this.computeValue_(!1)), lt());
        else if ((Eh(this), fc(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && My(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (No(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && X(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else X(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === Q.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || No(n) || No(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = Ci(!1),
          o;
        if (n) o = mh(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Zo(i);
          }
        return (Pi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (vc(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return Hy(function () {
          var s = o.get();
          if (!i || a) {
            var u = Dr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: It,
              object: o,
              newValue: s,
              oldValue: c,
            }),
              Zt(u));
          }
          ((i = !1), (c = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return ch(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      gn(e, [
        {
          key: "isComputing",
          get: function () {
            return Ke(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ke(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ke(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ke(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ke(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
yt.isComputingMask_ = 1;
yt.isRunningSetterMask_ = 2;
yt.isBeingObservedMask_ = 4;
yt.isPendingUnobservationMask_ = 8;
yt.diffValueMask_ = 16;
var Ri = jr("ComputedValue", yt),
  Q;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Q || (Q = {}));
var Xo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Xo || (Xo = {}));
var Zo = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function No(e) {
  return e instanceof Zo;
}
function fc(e) {
  switch (e.dependenciesState_) {
    case Q.UP_TO_DATE_:
      return !1;
    case Q.NOT_TRACKING_:
    case Q.STALE_:
      return !0;
    case Q.POSSIBLY_STALE_: {
      for (var t = Vc(!0), r = Dr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Ri(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Zt(r), qa(t), !0);
            }
          if (e.dependenciesState_ === Q.STALE_) return (Zt(r), qa(t), !0);
        }
      }
      return (wh(e), Zt(r), qa(t), !1);
    }
  }
}
function mh(e, t, r) {
  var n = Vc(!0);
  (wh(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++I.runId));
  var a = I.trackingDerivation;
  ((I.trackingDerivation = e), I.inBatch++);
  var o;
  if (I.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new Zo(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), jy(e), qa(n), o);
}
function jy(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = Q.UP_TO_DATE_,
      a = 0,
      o = e.unboundDepsCount_,
      i = 0;
    i < o;
    i++
  ) {
    var c = r[i];
    (c.diffValue === 0 && ((c.diffValue = 1), a !== i && (r[a] = c), a++),
      c.dependenciesState_ > n && (n = c.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, o = t.length; o--; ) {
    var s = t[o];
    (s.diffValue === 0 && Oh(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), Ty(u, e));
  }
  n !== Q.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function vc(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Oh(t[r], e);
  e.dependenciesState_ = Q.NOT_TRACKING_;
}
function yh(e) {
  var t = Dr();
  try {
    return e();
  } finally {
    Zt(t);
  }
}
function Dr() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Zt(e) {
  I.trackingDerivation = e;
}
function Vc(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function qa(e) {
  I.allowStateReads = e;
}
function wh(e) {
  if (e.dependenciesState_ !== Q.UP_TO_DATE_) {
    e.dependenciesState_ = Q.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Q.UP_TO_DATE_;
  }
}
var Lo = function () {
    ((this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0));
  },
  Bo = !0,
  kh = !1,
  I = (function () {
    var e = mi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Bo = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Lo().version && (Bo = !1),
      Bo
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Lo()))
        : (setTimeout(function () {
            kh || X(35);
          }, 1),
          new Lo())
    );
  })();
function Dy() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && X(36), (kh = !0), Bo)) {
    var e = mi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new Lo()));
  }
}
function Ty(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Oh(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Sh(e));
}
function Sh(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function ut() {
  I.inBatch++;
}
function lt() {
  if (--I.inBatch === 0) {
    Ch();
    for (var e = I.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof yt && r.suspend_()));
    }
    I.pendingUnobservations = [];
  }
}
function Eh(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && Sh(e), !1);
}
function xh(e) {
  e.lowestObserverState_ !== Q.STALE_ &&
    ((e.lowestObserverState_ = Q.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Q.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Q.STALE_));
    }));
}
function My(e) {
  e.lowestObserverState_ !== Q.STALE_ &&
    ((e.lowestObserverState_ = Q.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Q.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Q.STALE_)
        : t.dependenciesState_ === Q.UP_TO_DATE_ && (e.lowestObserverState_ = Q.UP_TO_DATE_);
    }));
}
function Fy(e) {
  e.lowestObserverState_ === Q.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Q.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Q.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Q.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Mt = (function () {
  function e(r, n, a, o) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = Q.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Xo.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = a),
      (this.requiresObservable_ = o));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), Ch());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (ut(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), fc(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((I.trackingContext = n), lt());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (ut(), (this.isRunning = !0));
        var a = I.trackingContext;
        I.trackingContext = this;
        var o = mh(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && vc(this),
          No(o) && this.reportExceptionInDerivation_(o.cause),
          lt());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (I.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      (I.suppressReactionErrors || console.error(o, n),
        I.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (ut(), vc(this), lt()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        o = function i() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", i));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", o),
        (o[V] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (o[Symbol.dispose] = o),
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    gn(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ke(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ke(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ke(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ke(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ke(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
Mt.isDisposedMask_ = 1;
Mt.isScheduledMask_ = 2;
Mt.isTrackPendingMask_ = 4;
Mt.isRunningMask_ = 8;
Mt.diffValueMask_ = 16;
var Ny = 100,
  pc = function (t) {
    return t();
  };
function Ch() {
  I.inBatch > 0 || I.isRunningReactions || pc(Ly);
}
function Ly() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Ny && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var Qo = jr("Reaction", Mt);
function By(e) {
  var t = pc;
  pc = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function za() {
  return !1;
}
function Uy(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Ph = "action",
  qy = "action.bound",
  Rh = "autoAction",
  zy = "autoAction.bound",
  $y = "<unnamed action>",
  hc = vo(Ph),
  Vy = vo(qy, { bound: !0 }),
  gc = vo(Rh, { autoAction: !0 }),
  Gy = vo(zy, { autoAction: !0, bound: !0 });
function Ah(e) {
  var t = function (n, a) {
    if (mt(n)) return Pr(n.name || $y, n, e);
    if (mt(a)) return Pr(n, a, e);
    if (fo(a)) return (e ? gc : hc).decorate_20223_(n, a);
    if (Er(a)) return lo(n, a, e ? gc : hc);
    if (Er(n)) return At(vo(e ? Rh : Ph, { name: n, autoAction: e }));
  };
  return t;
}
var dt = Ah(!1);
Object.assign(dt, hc);
var Xa = Ah(!0);
Object.assign(Xa, gc);
dt.bound = At(Vy);
Xa.bound = At(Gy);
function sn(e) {
  return mt(e) && e.isMobxAction === !0;
}
function Hy(e, t) {
  var r, n, a, o;
  t === void 0 && (t = rh);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new Mt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Ky(t),
      l = !1;
    s = new Mt(
      i,
      function () {
        l ||
          ((l = !0),
          u(function () {
            ((l = !1), s.isDisposed || s.track(d));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function d() {
    e(s);
  }
  return (
    ((a = t) != null && (a = a.signal) != null && a.aborted) || s.schedule_(),
    s.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var Wy = function (t) {
  return t();
};
function Ky(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Wy;
}
var Jy = "onBO",
  Yy = "onBUO";
function Xy(e, t, r) {
  return jh(Jy, e, t, r);
}
function Ih(e, t, r) {
  return jh(Yy, e, t, r);
}
function jh(e, t, r, n) {
  var a = ri(t),
    o = mt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var Zy = "never",
  Oo = "always",
  Qy = "observed";
function e0(e) {
  e.isolateGlobalState === !0 && Dy();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === Oo ? !0 : t === Zy ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Oo ? Oo : r === Qy;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === Oo)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (I[a] = !!e[a]);
  }),
    (I.allowStateReads = !I.observableRequiresReaction),
    e.reactionScheduler && By(e.reactionScheduler));
}
function t0(e, t, r, n) {
  var a = Mm(t);
  return (
    Mr(function () {
      var o = bn(e, n)[V];
      Oi(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function r0(e, t) {
  return Dh(ri(e, t));
}
function Dh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = n0(e.observing_).map(Dh)),
    t
  );
}
function n0(e) {
  return Array.from(new Set(e));
}
var a0 = 0;
function Th() {
  this.message = "FLOW_CANCELLED";
}
Th.prototype = Object.create(Error.prototype);
var Os = fh("flow"),
  o0 = fh("flow.bound", { bound: !0 }),
  cn = Object.assign(function (t, r) {
    if (fo(r)) return Os.decorate_20223_(t, r);
    if (Er(r)) return lo(t, r, Os);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          u = ++a0,
          l = dt(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              p = void 0;
              var w;
              try {
                w = dt(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function _(k) {
              p = void 0;
              var w;
              try {
                w = dt(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function y(k) {
              if (mt(k?.then)) {
                k.then(y, f);
                return;
              }
              return k.done ? g(k.value) : ((p = Promise.resolve(k.value)), p.then(b, _));
            }
            b(void 0);
          });
        return (
          (v.cancel = dt(a + " - runid: " + u + " - cancel", function () {
            try {
              p && wd(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(tn, tn), wd(f), d(new Th()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, Os);
cn.bound = At(o0);
function wd(e) {
  mt(e.cancel) && e.cancel();
}
function Za(e) {
  return e?.isMobXFlow === !0;
}
function i0(e, t) {
  return e ? Ii(e) || !!e[V] || zc(e) || Qo(e) || Ri(e) : !1;
}
function Mh(e) {
  return i0(e);
}
function Jt(e, t) {
  (t === void 0 && (t = void 0), ut());
  try {
    return e.apply(t);
  } finally {
    lt();
  }
}
function zr(e) {
  return e[V];
}
var s0 = {
  has: function (t, r) {
    return zr(t).has_(r);
  },
  get: function (t, r) {
    return zr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return Er(r) ? ((a = zr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return Er(r) ? ((n = zr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = zr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return zr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    X(13);
  },
};
function c0(e, t) {
  var r, n;
  return (
    nh(),
    (e = bn(e, t)),
    (n = (r = e[V]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, s0))
  );
}
function st(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function po(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    ah(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ct(e, t) {
  var r = Dr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && X(14), !!t);
      a++
    );
    return t;
  } finally {
    Zt(r);
  }
}
function bt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function ho(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    ah(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function _t(e, t) {
  var r = Dr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Zt(r);
  }
}
function Fh(e, t, r) {
  return (
    Mr(function () {
      var n,
        a = bn(e, r)[V];
      ((n = t) != null || (t = Um(e)),
        Oi(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var kd = "splice",
  It = "update",
  u0 = 1e4,
  l0 = {
    get: function (t, r) {
      var n = t[V];
      return r === V
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Xt(ei, r)
              ? ei[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[V];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      X(15);
    },
  },
  Gc = (function () {
    function e(r, n, a, o) {
      (r === void 0 && (r = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = a),
        (this.legacyMode_ = o),
        (this.atom_ = new lr(r)),
        (this.enhancer_ = function (i, c) {
          return n(i, c, "ObservableArray[..]");
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.dehanceValues_ = function (n) {
        return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
      }),
      (t.intercept_ = function (n) {
        return po(this, n);
      }),
      (t.observe_ = function (n, a) {
        return (
          a === void 0 && (a = !1),
          a &&
            n({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          ho(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && X("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && X(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && $h(n + a + 1));
      }),
      (t.spliceWithArray_ = function (n, a, o) {
        var i = this;
        this.atom_;
        var c = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > c ? (n = c) : n < 0 && (n = Math.max(0, c + n)),
          arguments.length === 1
            ? (a = c - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, c - n))),
          o === void 0 && (o = cc),
          st(this))
        ) {
          var s = ct(this, { object: this.proxy_, type: kd, index: n, removedCount: a, added: o });
          if (!s) return cc;
          ((a = s.removedCount), (o = s.added));
        }
        if (
          ((o =
            o.length === 0
              ? o
              : o.map(function (d) {
                  return i.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var u = o.length - a;
          this.updateArrayLength_(c, u);
        }
        var l = this.spliceItemsIntoValues_(n, a, o);
        return (
          (a !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, o) {
        if (o.length < u0) {
          var i;
          return (i = this.values_).splice.apply(i, [n, a].concat(o));
        } else {
          var c = this.values_.slice(n, n + a),
            s = this.values_.slice(n + a);
          this.values_.length += o.length - a;
          for (var u = 0; u < o.length; u++) this.values_[n + u] = o[u];
          for (var l = 0; l < s.length; l++) this.values_[n + o.length + l] = s[l];
          return c;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, o) {
        var i = !this.owned_ && za(),
          c = bt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: It,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), c && _t(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && za(),
          c = bt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: kd,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), c && _t(this, s));
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]));
      }),
      (t.set_ = function (n, a) {
        var o = this.values_;
        if ((this.legacyMode_ && n > o.length && X(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (st(this)) {
            var c = ct(this, { type: It, object: this.proxy_, index: n, newValue: a });
            if (!c) return;
            a = c.newValue;
          }
          a = this.enhancer_(a, i);
          var s = a !== i;
          s && ((o[n] = a), this.notifyArrayChildUpdate_(n, a, i));
        } else {
          for (var u = new Array(n + 1 - o.length), l = 0; l < u.length - 1; l++) u[l] = void 0;
          ((u[u.length - 1] = a), this.spliceWithArray_(o.length, 0, u));
        }
      }),
      e
    );
  })();
function d0(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    nh(),
    Mr(function () {
      var a = new Gc(r, t, n, !1);
      ih(a.values_, V, a);
      var o = new Proxy(a.values_, l0);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var ei = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[V];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      a[o - 2] = arguments[o];
    var i = this[V];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return i.spliceWithArray_(t);
      case 2:
        return i.spliceWithArray_(t, r);
    }
    return i.spliceWithArray_(t, r, a);
  },
  spliceWithArray: function (t, r, n) {
    return this[V].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[V], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[V].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[V], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (I.trackingDerivation && X(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    I.trackingDerivation && X(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[V],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
he("at", Ze);
he("concat", Ze);
he("flat", Ze);
he("includes", Ze);
he("indexOf", Ze);
he("join", Ze);
he("lastIndexOf", Ze);
he("slice", Ze);
he("toString", Ze);
he("toLocaleString", Ze);
he("toSorted", Ze);
he("toSpliced", Ze);
he("with", Ze);
he("every", wt);
he("filter", wt);
he("find", wt);
he("findIndex", wt);
he("findLast", wt);
he("findLastIndex", wt);
he("flatMap", wt);
he("forEach", wt);
he("map", wt);
he("some", wt);
he("toReversed", wt);
he("reduce", Nh);
he("reduceRight", Nh);
function he(e, t) {
  typeof Array.prototype[e] == "function" && (ei[e] = t(e));
}
function Ze(e) {
  return function () {
    var t = this[V];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function wt(e) {
  return function (t, r) {
    var n = this,
      a = this[V];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, c) {
      return t.call(r, i, c, n);
    });
  };
}
function Nh(e) {
  return function () {
    var t = this,
      r = this[V];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (o, i, c) {
        return a(o, i, c, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var f0 = jr("ObservableArrayAdministration", Gc);
function Ai(e) {
  return wi(e) && f0(e[V]);
}
var v0 = {},
  or = "add",
  ti = "delete",
  Lh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Cr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[V] = v0),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        mt(Map) || X(18),
        Mr(function () {
          ((o.keysAtom_ = lh("ObservableMap.keys()")),
            (o.data_ = new Map()),
            (o.hasMap_ = new Map()),
            r && o.merge(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var a = this;
        if (!I.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new Or(this.has_(n), Si, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Ih(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (st(this)) {
          var i = ct(this, { type: o ? It : or, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, st(this))) {
          var o = ct(this, { type: ti, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = za(),
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: ti,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Jt(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            c && _t(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var i = za(),
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: It,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && _t(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Jt(function () {
            var u,
              l = new Or(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = za(),
          c = bt(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: or,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && _t(this, s);
      }),
      (t.get = function (n) {
        return this.has(n)
          ? this.dehanceValue_(this.data_.get(n).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.keys = function () {
        return (this.keysAtom_.reportObserved(), this.data_.keys());
      }),
      (t.values = function () {
        var n = this,
          a = this.keys();
        return Od({
          next: function () {
            var i = a.next(),
              c = i.done,
              s = i.value;
            return { done: c, value: c ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return Od({
          next: function () {
            var i = a.next(),
              c = i.done,
              s = i.value;
            return { done: c, value: c ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var o = rn(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            u = c[1];
          n.call(a, u, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Tr(n) && (n = new Map(n)),
          Jt(function () {
            cr(n)
              ? Tm(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : hn(n)
                  ? (Dm(n) || X(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && X(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Jt(function () {
          yh(function () {
            for (var a = rn(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Jt(function () {
            for (
              var o = p0(n), i = new Map(), c = !1, s = rn(a.data_.keys()), u;
              !(u = s()).done;
            ) {
              var l = u.value;
              if (!o.has(l)) {
                var d = a.delete(l);
                if (d) c = !0;
                else {
                  var p = a.data_.get(l);
                  i.set(l, p);
                }
              }
            }
            for (var v = rn(o.entries()), g; !(g = v()).done; ) {
              var f = g.value,
                h = f[0],
                b = f[1],
                _ = a.data_.has(h);
              if ((a.set(h, b), a.data_.has(h))) {
                var y = a.data_.get(h);
                (i.set(h, y), _ || (c = !0));
              }
            }
            if (!c)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), w = i.keys(), S = k.next(), E = w.next(); !S.done; ) {
                  if (S.value !== E.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (E = w.next()));
                }
            a.data_ = i;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (n, a) {
        return ho(this, n);
      }),
      (t.intercept_ = function (n) {
        return po(this, n);
      }),
      gn(e, [
        {
          key: "size",
          get: function () {
            return (this.keysAtom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  Tr = jr("ObservableMap", Lh);
function Od(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Wc(e));
}
function p0(e) {
  if (hn(e) || Tr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (cr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return X(21, e);
}
var h0 = {},
  Bh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Cr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[V] = h0),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        mt(Set) || X(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        Mr(function () {
          ((o.atom_ = lh(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Jt(function () {
          yh(function () {
            for (var a = rn(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = rn(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, st(this))) {
          var o = ct(this, { type: or, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Jt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: or,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && _t(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (st(this)) {
          var o = ct(this, { type: ti, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = bt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ti,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Jt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            c && _t(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (n) {
        return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n)));
      }),
      (t.entries = function () {
        var n = this.values();
        return Sd({
          next: function () {
            var o = n.next(),
              i = o.value,
              c = o.done;
            return c ? { value: void 0, done: c } : { value: [i, i], done: c };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var n = this,
          a = this.data_.values();
        return Sd({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Kt(n) && !Ct(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Kt(n) && !Ct(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Kt(n) && !Ct(n)) return n.symmetricDifference(this);
        var a = new Set(this);
        return a.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if (Kt(n) && !Ct(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Ct(n) && (n = new Set(n)),
          Jt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Kt(n)
                ? (a.clear(),
                  n.forEach(function (o) {
                    return a.add(o);
                  }))
                : n != null && X("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return ho(this, n);
      }),
      (t.intercept_ = function (n) {
        return po(this, n);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[Symbol.iterator] = function () {
        return this.values();
      }),
      gn(e, [
        {
          key: "size",
          get: function () {
            return (this.atom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  Ct = jr("ObservableSet", Bh);
function Sd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Wc(e));
}
var Ed = Object.create(null),
  xd = "remove",
  Uh = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = ly),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = r),
        (this.values_ = n),
        (this.name_ = a),
        (this.defaultAnnotation_ = o),
        (this.keysAtom_ = new lr("ObservableObject.keys")),
        (this.isPlainObject_ = cr(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof yt) return (o.set(a), !0);
        if (st(this)) {
          var i = ct(this, { type: It, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var c = bt(this),
            s = !1,
            u =
              c || s
                ? {
                    type: It,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && _t(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (I.trackingDerivation && !Xt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Xt(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, a)
              : o
                ? Reflect.set(this.target_, n, a)
                : ((this.target_[n] = a), !0)
            : this.extend_(
                n,
                { value: a, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                o,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!I.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new Or(n in this.target_, Si, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Pt]) != null && o[n]) return;
            X(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== yi; ) {
            var c = Ko(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          Pd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && Pd(this, o, n), c);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          ut();
          var i = this.delete_(n);
          if (!i) return i;
          if (st(this)) {
            var c = ct(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: or,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = xr({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Rt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          lt();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          ut();
          var c = this.delete_(n);
          if (!c) return c;
          if (st(this)) {
            var s = ct(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: or,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var u = Cd(n),
            l = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Rt(this.target_, n, l);
          var d = new Or(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          lt();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          ut();
          var i = this.delete_(n);
          if (!i) return i;
          if (st(this)) {
            var c = ct(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: or,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = Cd(n),
            u = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else Rt(this.target_, n, u);
          (this.values_.set(n, new yt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          lt();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Xt(this.target_, n))) return !0;
        if (st(this)) {
          var o = ct(this, { object: this.proxy_ || this.target_, name: n, type: xd });
          if (!o) return null;
        }
        try {
          var i;
          ut();
          var c = bt(this),
            s = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (c || s)) {
            var d;
            l = (d = Ko(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof Or && (l = u.value_), xh(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var p = {
              type: xd,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && _t(this, p);
          }
        } finally {
          lt();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return ho(this, n);
      }),
      (t.intercept_ = function (n) {
        return po(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = bt(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: or,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && _t(this, s);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Oi(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function bn(e, t) {
  var r;
  if (Xt(e, V)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Uh(e, new Map(), String(n), wy(t));
  return (ki(e, V, a), e);
}
var g0 = jr("ObservableObjectAdministration", Uh);
function Cd(e) {
  return (
    Ed[e] ||
    (Ed[e] = {
      get: function () {
        return this[V].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[V].setObservablePropValue_(e, r);
      },
    })
  );
}
function Ii(e) {
  return wi(e) ? g0(e[V]) : !1;
}
function Pd(e, t, r) {
  var n;
  (n = e.target_[Pt]) == null || delete n[r];
}
var b0 = zh(0),
  _0 = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  Ss = 0,
  qh = function () {};
function m0(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
m0(qh, Array.prototype);
var Hc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Mr(function () {
        var s = new Gc(o, a, i, !0);
        ((s.proxy_ = c),
          ih(c, V, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          _0 && Object.defineProperty(c, "0", b0));
      }),
      c
    );
  }
  uh(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[V].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return Ai(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Wc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    gn(t, [
      {
        key: "length",
        get: function () {
          return this[V].getArrayLength_();
        },
        set: function (a) {
          this[V].setArrayLength_(a);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(qh);
Object.entries(ei).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && ki(Hc.prototype, t, r);
});
function zh(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[V].get_(e);
    },
    set: function (r) {
      this[V].set_(e, r);
    },
  };
}
function y0(e) {
  Rt(Hc.prototype, "" + e, zh(e));
}
function $h(e) {
  if (e > Ss) {
    for (var t = Ss; t < e + 100; t++) y0(t);
    Ss = e;
  }
}
$h(1e3);
function w0(e, t, r) {
  return new Hc(e, t, r);
}
function ri(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ai(e)) return (t !== void 0 && X(23), e[V].atom_);
    if (Ct(e)) return e.atom_;
    if (Tr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || X(25, t, bc(e)), r);
    }
    if (Ii(e)) {
      if (!t) return X(26);
      var n = e[V].values_.get(t);
      return (n || X(27, t, bc(e)), n);
    }
    if (zc(e) || Ri(e) || Qo(e)) return e;
  } else if (mt(e) && Qo(e[V])) return e[V];
  X(28);
}
function k0(e, t) {
  if ((e || X(29), zc(e) || Ri(e) || Qo(e) || Tr(e) || Ct(e))) return e;
  if (e[V]) return e[V];
  X(24, e);
}
function bc(e, t) {
  var r;
  if (t !== void 0) r = ri(e, t);
  else {
    if (sn(e)) return e.name;
    Ii(e) || Tr(e) || Ct(e) ? (r = k0(e)) : (r = ri(e));
  }
  return r.name_;
}
function Mr(e) {
  var t = Dr(),
    r = Ci(!0);
  ut();
  try {
    return e();
  } finally {
    (lt(), Pi(r), Zt(t));
  }
}
var Rd = yi.toString;
function Vh(e, t, r) {
  return (r === void 0 && (r = -1), _c(e, t, r));
}
function _c(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = Rd.call(e);
  if (i !== Rd.call(t)) return !1;
  switch (i) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  ((e = Ad(e)), (t = Ad(t)));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(mt(s) && s instanceof s && mt(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var l = n.length; l--; ) if (n[l] === e) return a[l] === t;
  if ((n.push(e), a.push(t), c)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!_c(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!(Xt(t, g) && _c(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Ad(e) {
  return Ai(e) ? e.slice() : hn(e) || Tr(e) || Kt(e) || Ct(e) ? Array.from(e.entries()) : e;
}
var Id,
  O0 = ((Id = mi().Iterator) == null ? void 0 : Id.prototype) || {};
function Wc(e) {
  return ((e[Symbol.iterator] = S0), Object.assign(Object.create(O0), e));
}
function S0() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = mi();
  typeof t[e] > "u" && X("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Uy, extras: { getDebugName: bc }, $mobx: V });
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Fh) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function E0(e) {
  e();
}
function x0(e) {
  (e || (e = E0), e0({ reactionScheduler: e }));
}
function C0(e) {
  return r0(e);
}
var P0 = 1e4,
  R0 = 1e4,
  A0 = (function () {
    function e(t) {
      var r = this;
      (Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (n) {
            (n === void 0 && (n = P0), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
            var a = Date.now();
            (r.registrations.forEach(function (o, i) {
              a - o.registeredAt >= n && (r.finalize(o.value), r.registrations.delete(i));
            }),
              r.registrations.size > 0 && r.scheduleSweep());
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        }));
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, r, n) {
          (this.registrations.set(n, { value: r, registeredAt: Date.now() }), this.scheduleSweep());
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, R0));
        },
      }),
      e
    );
  })(),
  I0 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : A0,
  Qa = new I0(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Es = { exports: {} },
  xs = {};
var jd;
function j0() {
  if (jd) return xs;
  jd = 1;
  var e = Ir();
  function t(d, p) {
    return (d === p && (d !== 0 || 1 / d === 1 / p)) || (d !== d && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function c(d, p) {
    var v = p(),
      g = n({ inst: { value: v, getSnapshot: p } }),
      f = g[0].inst,
      h = g[1];
    return (
      o(
        function () {
          ((f.value = v), (f.getSnapshot = p), s(f) && h({ inst: f }));
        },
        [d, v, p],
      ),
      a(
        function () {
          return (
            s(f) && h({ inst: f }),
            d(function () {
              s(f) && h({ inst: f });
            })
          );
        },
        [d],
      ),
      i(v),
      v
    );
  }
  function s(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var v = p();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function u(d, p) {
    return p();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : c;
  return (
    (xs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    xs
  );
}
var Dd;
function D0() {
  return (Dd || ((Dd = 1), (Es.exports = j0())), Es.exports);
}
var T0 = D0();
function Td(e) {
  e.reaction = new Mt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function M0(e, t) {
  t === void 0 && (t = "observed");
  var r = O.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (c) {
        return (
          Qa.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (Td(n), (n.stateVersion = Symbol())),
          function () {
            var s;
            ((n.onStoreChange = null),
              (s = n.reaction) === null || s === void 0 || s.dispose(),
              (n.reaction = null));
          }
        );
      },
      getSnapshot: function () {
        return n.stateVersion;
      },
    };
    r.current = n;
  }
  var a = r.current;
  (a.reaction || (Td(a), Qa.register(r, a, a)),
    O.useDebugValue(a.reaction, C0),
    T0.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
  var o, i;
  if (
    (a.reaction.track(function () {
      try {
        o = e();
      } catch (c) {
        i = c;
      }
    }),
    i)
  )
    throw i;
  return o;
}
var Cs,
  Ps,
  Gh = typeof Symbol == "function" && Symbol.for,
  F0 =
    (Ps =
      (Cs = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Cs === void 0
        ? void 0
        : Cs.configurable) !== null && Ps !== void 0
      ? Ps
      : !1,
  Md = Gh
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Fd = Gh
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function N0(e, t) {
  var r;
  if (Fd && e.$$typeof === Fd)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (Md && e.$$typeof === Md && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return M0(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    F0 && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = m.forwardRef(i)),
    (i = m.memo(i)),
    B0(e, i),
    i
  );
}
var L0 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function B0(e, t) {
  Object.keys(e).forEach(function (r) {
    L0[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Rs;
x0(fi.unstable_batchedUpdates);
Rs = Qa.finalizeAllImmediately;
function U0(e, t) {
  if (Nd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Nd(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Nd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ld = Symbol("patchMixins"),
  Hh = Symbol("patchedDefinition");
function q0(e, t) {
  var r = (e[Ld] = e[Ld] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Bd(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  t.locks++;
  try {
    var i;
    return (e != null && (i = e.apply(this, a)), i);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (c) {
          c.apply(r, a);
        }));
  }
}
function Ud(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    Bd.call.apply(Bd, [this, e, t].concat(o));
  };
  return r;
}
function z0(e, t, r) {
  var n = q0(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Hh])) {
    var o = e[t],
      i = Wh(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function Wh(e, t, r, n, a) {
  var o,
    i = Ud(a, n);
  return (
    (o = {}),
    (o[Hh] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = Ud(s, n);
      else {
        var u = Wh(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var qd = Symbol("ObserverAdministration"),
  zd = Symbol("isMobXReactObserver");
function mc(e) {
  var t;
  return (t = e[qd]) != null
    ? t
    : (e[qd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: yc(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function $0(e) {
  var t = e.prototype;
  if (e[zd]) {
    var r = yc(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[zd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = $d;
    else if (t.shouldComponentUpdate !== $d)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = yc(e);
    throw new Error(
      "[mobx-react] class component (" +
        a +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: V0.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = mc(this);
      return (
        (c.mounted = !0),
        Qa.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    z0(t, "componentWillUnmount", function () {
      var i,
        c = mc(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function yc(e) {
  return e.displayName || e.name || "<component>";
}
function V0(e) {
  var t = e.bind(this),
    r = mc(this);
  function n() {
    r.reaction || ((r.reaction = G0(r)), r.mounted || Qa.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = Iy(!1, t);
        } catch (i) {
          a = i;
        }
      }),
      a)
    )
      throw a;
    return o;
  }
  return n;
}
function G0(e) {
  return new Mt(e.name + ".render()", function () {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      ((t = e.reaction) == null || t.dispose(), (e.reaction = null));
    }
  });
}
function $d(e, t) {
  return this.state !== t ? !0 : !U0(this.props, e);
}
function ji(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? $0(e)
      : N0(e)
  );
}
function wc() {
  return (
    (wc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    wc.apply(null, arguments)
  );
}
function H0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var W0 = ["children"],
  Vd = O.createContext({});
function Kh(e) {
  var t = e.children,
    r = H0(e, W0),
    n = O.useContext(Vd),
    a = O.useRef(wc({}, n, r)),
    o = a.current;
  return O.createElement(Vd.Provider, { value: o }, t);
}
Kh.displayName = "MobXProvider";
O.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!ue) throw new Error("mobx-react requires mobx to be available");
var K0 = Object.defineProperty,
  J0 = Object.getOwnPropertyDescriptor,
  Ie = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? J0(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && K0(t, r, a), a);
  };
const As = "Loading ...";
class Ce {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = As),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      Fh(this));
  }
  saveState(t) {
    this.state = t;
  }
  saveResponse(t) {
    ((this.testData = t.testDataId),
      (this.testDataOptimisticNumber = t.testDataOptimisticNumberId),
      (this.testDataOptimisticTimeStampId = t.testDataOptimisticTimeStampId),
      (this.testDataOptimisticDateId = t.testDataOptimisticDateId));
  }
  saveUpdateResponse(t, r) {
    switch (t) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = r;
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = r;
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = r;
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = r;
        return;
      }
      default:
        throw new Error("unsupported " + t);
    }
  }
  clearStates(t) {
    switch (t) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = "";
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = "";
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = "";
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = "";
        return;
      }
      default:
        throw new Error("unsupported " + t);
    }
  }
  loading(t) {
    ((this.isLoading = !0), (this.message = t ?? As));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = As));
  }
}
Ie([ue], Ce.prototype, "state", 2);
Ie([ue], Ce.prototype, "isLoading", 2);
Ie([ue], Ce.prototype, "message", 2);
Ie([ue], Ce.prototype, "testData", 2);
Ie([ue], Ce.prototype, "testDataOptimisticNumber", 2);
Ie([ue], Ce.prototype, "testDataOptimisticDateId", 2);
Ie([ue], Ce.prototype, "testDataOptimisticTimeStampId", 2);
Ie([ue], Ce.prototype, "testNonVersioningData", 2);
Ie([ue], Ce.prototype, "testNumberVersioningData", 2);
Ie([ue], Ce.prototype, "testDateVersioningData", 2);
Ie([ue], Ce.prototype, "testTimestampVersioningData", 2);
Ie([dt.bound], Ce.prototype, "saveState", 1);
Ie([dt.bound], Ce.prototype, "saveResponse", 1);
Ie([dt.bound], Ce.prototype, "saveUpdateResponse", 1);
Ie([dt.bound], Ce.prototype, "clearStates", 1);
Ie([dt], Ce.prototype, "loading", 1);
Ie([dt], Ce.prototype, "stopLoading", 1);
const Y0 = new Ce();
class X0 {
  constructor() {
    this.stateStore = Y0;
  }
}
const Jh = new X0(),
  Z0 = m.createContext(Jh),
  Di = () => m.useContext(Z0);
function be(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ae(e) {
  "@babel/helpers - typeof";
  return (
    (Ae =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ae(e)
  );
}
function Q0(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yh(e) {
  var t = Q0(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function Gd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Yh(n.key), n));
  }
}
function _e(e, t, r) {
  return (
    t && Gd(e.prototype, t),
    r && Gd(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ew(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qe(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ew(e);
}
function ee(e) {
  return (
    (ee = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ee(e)
  );
}
function eo(e, t) {
  return (
    (eo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    eo(e, t)
  );
}
function et(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && eo(e, t));
}
function C(e, t, r) {
  return (
    (t = Yh(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ne() {}
function Xh(e) {
  if (Array.isArray(e)) return e;
}
function tw(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      o,
      i,
      c = [],
      s = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = o.call(r)).done) && (c.push(n.value), c.length !== t); s = !0);
    } catch (l) {
      ((u = !0), (a = l));
    } finally {
      try {
        if (!s && r.return != null && ((i = r.return()), Object(i) !== i)) return;
      } finally {
        if (u) throw a;
      }
    }
    return c;
  }
}
function kc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Kc(e, t) {
  if (e) {
    if (typeof e == "string") return kc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? kc(e, t)
          : void 0
    );
  }
}
function Zh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W(e, t) {
  return Xh(e) || tw(e, t) || Kc(e, t) || Zh();
}
var Qh = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  rw = function (t) {
    !t ||
      !t.cells ||
      t.cells.forEach(function (r) {
        if (r.isSortable && !r.key)
          try {
            throw Error("isSortable can't be set to true, if the 'key' prop is missing.");
          } catch (n) {
            console.error(n);
          }
      });
  },
  ni = function (t, r) {
    if (t) {
      var n =
        r &&
        r.cells
          .map(function (a) {
            return a.key;
          })
          .includes(t);
      if (!n)
        try {
          throw Error("Cell with ".concat(t, " key not found in head."));
        } catch (a) {
          console.error(a);
        }
    }
  },
  nw = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Hd = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  aw = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = Hd(i, n, a),
      s = Hd(o.index, n, a),
      u = r.slice(),
      l = u.splice(c, 1),
      d = W(l, 1),
      p = d[0];
    return (u.splice(s, 0, p), u);
  };
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    te.apply(null, arguments)
  );
}
function ow(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function ie(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = ow(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Wd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var iw = (function () {
  function e(t) {
    var r = this;
    (be(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = Is({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return _e(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ae(r) === "object" && (this.payload = Is(Is({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function sw(e) {
  if (Array.isArray(e)) return kc(e);
}
function eg(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function cw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fe(e) {
  return sw(e) || eg(e) || Kc(e) || cw();
}
function uw(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = ee(e)) !== null; );
  return e;
}
function ai() {
  return (
    (ai =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = uw(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    ai.apply(null, arguments)
  );
}
function lw(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, tg() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function tg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tg = function () {
    return !!e;
  })();
}
function dw(e, t, r, n) {
  var a = ai(ee(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var fw = (function (e) {
  function t(r) {
    var n;
    return (
      be(this, t),
      (n = lw(this, t, [r])),
      C(n, "_isUIAnalyticsEvent", !0),
      C(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Fe(n.context),
          o = Fe(n.handlers),
          i = JSON.parse(JSON.stringify(n.payload));
        return new t({ context: a, handlers: o, payload: i });
      }),
      C(n, "fire", function (a) {
        n.hasFired ||
          (n.handlers.forEach(function (o) {
            return o(n, a);
          }),
          (n.hasFired = !0));
      }),
      (n.context = r.context || []),
      (n.handlers = r.handlers || []),
      (n.hasFired = !1),
      n
    );
  }
  return (
    et(t, e),
    _e(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : dw(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(iw);
function Kd(e, t, r, n, a, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (u) {
    return void r(u);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, a);
}
function Z(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(s) {
        Kd(o, n, a, i, c, "next", s);
      }
      function c(s) {
        Kd(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var js = { exports: {} },
  Ds = { exports: {} },
  Jd;
function rg() {
  return (
    Jd ||
      ((Jd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ds)),
    Ds.exports
  );
}
var Ts = { exports: {} },
  Ms = { exports: {} },
  Yd;
function ng() {
  return (
    Yd ||
      ((Yd = 1),
      (function (e) {
        function t(r, n, a, o) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch {
            i = 0;
          }
          ((e.exports = t =
            function (s, u, l, d) {
              function p(v, g) {
                t(s, v, function (f) {
                  return this._invoke(v, g, f);
                });
              }
              u
                ? i
                  ? i(s, u, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[u] = l)
                : (p("next", 0), p("throw", 1), p("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ms)),
    Ms.exports
  );
}
var Xd;
function ag() {
  return (
    Xd ||
      ((Xd = 1),
      (function (e) {
        var t = ng();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.toStringTag || "@@toStringTag";
          function s(h, b, _, y) {
            var k = b && b.prototype instanceof l ? b : l,
              w = Object.create(k.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (S, E, A) {
                  var j,
                    P,
                    D,
                    L = 0,
                    B = A || [],
                    $ = !1,
                    G = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: F,
                      f: F.bind(n, 4),
                      d: function (q, z) {
                        return ((j = q), (P = 0), (D = n), (G.n = z), u);
                      },
                    };
                  function F(K, q) {
                    for (P = K, D = q, a = 0; !$ && L && !z && a < B.length; a++) {
                      var z,
                        H = B[a],
                        re = G.p,
                        ce = H[2];
                      K > 3
                        ? (z = ce === q) &&
                          ((D = H[(P = H[4]) ? 5 : ((P = 3), 3)]), (H[4] = H[5] = n))
                        : H[0] <= re &&
                          ((z = K < 2 && re < H[1])
                            ? ((P = 0), (G.v = q), (G.n = H[1]))
                            : re < ce &&
                              (z = K < 3 || H[0] > q || q > ce) &&
                              ((H[4] = K), (H[5] = q), (G.n = ce), (P = 0)));
                    }
                    if (z || K > 1) return u;
                    throw (($ = !0), q);
                  }
                  return function (K, q, z) {
                    if (L > 1) throw TypeError("Generator is already running");
                    for ($ && q === 1 && F(q, z), P = q, D = z; (a = P < 2 ? n : D) || !$; ) {
                      j || (P ? (P < 3 ? (P > 1 && (G.n = -1), F(P, D)) : (G.n = D)) : (G.v = D));
                      try {
                        if (((L = 2), j)) {
                          if ((P || (K = "next"), (a = j[K]))) {
                            if (!(a = a.call(j, D)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((D = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = j.return) && a.call(j),
                              P < 2 &&
                                ((D = TypeError(
                                  "The iterator does not provide a '" + K + "' method",
                                )),
                                (P = 1)));
                          j = n;
                        } else if ((a = ($ = G.n < 0) ? D : S.call(E, G)) !== u) break;
                      } catch (H) {
                        ((j = n), (P = 1), (D = H));
                      } finally {
                        L = 1;
                      }
                    }
                    return { value: a, done: $ };
                  };
                })(h, _, y),
                !0,
              ),
              w
            );
          }
          var u = {};
          function l() {}
          function d() {}
          function p() {}
          a = Object.getPrototypeOf;
          var v = [][i]
              ? a(a([][i]()))
              : (t((a = {}), i, function () {
                  return this;
                }),
                a),
            g = (p.prototype = l.prototype = Object.create(v));
          function f(h) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(h, p)
                : ((h.__proto__ = p), t(h, c, "GeneratorFunction")),
              (h.prototype = Object.create(g)),
              h
            );
          }
          return (
            (d.prototype = p),
            t(g, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, c, "GeneratorFunction"),
            t(g),
            t(g, c, "Generator"),
            t(g, i, function () {
              return this;
            }),
            t(g, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: s, m: f };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ts)),
    Ts.exports
  );
}
var Fs = { exports: {} },
  Ns = { exports: {} },
  Ls = { exports: {} },
  Zd;
function og() {
  return (
    Zd ||
      ((Zd = 1),
      (function (e) {
        var t = rg(),
          r = ng();
        function n(a, o) {
          function i(s, u, l, d) {
            try {
              var p = a[s](u),
                v = p.value;
              return v instanceof t
                ? o.resolve(v.v).then(
                    function (g) {
                      i("next", g, l, d);
                    },
                    function (g) {
                      i("throw", g, l, d);
                    },
                  )
                : o.resolve(v).then(
                    function (g) {
                      ((p.value = g), l(p));
                    },
                    function (g) {
                      return i("throw", g, l, d);
                    },
                  );
            } catch (g) {
              d(g);
            }
          }
          var c;
          (this.next ||
            (r(n.prototype),
            r(
              n.prototype,
              (typeof Symbol == "function" && Symbol.asyncIterator) || "@asyncIterator",
              function () {
                return this;
              },
            )),
            r(
              this,
              "_invoke",
              function (s, u, l) {
                function d() {
                  return new o(function (p, v) {
                    i(s, l, p, v);
                  });
                }
                return (c = c ? c.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ls)),
    Ls.exports
  );
}
var Qd;
function ig() {
  return (
    Qd ||
      ((Qd = 1),
      (function (e) {
        var t = ag(),
          r = og();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ns)),
    Ns.exports
  );
}
var ef;
function vw() {
  return (
    ef ||
      ((ef = 1),
      (function (e) {
        var t = ig();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (u) {
            return u.done ? u.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Fs)),
    Fs.exports
  );
}
var Bs = { exports: {} },
  tf;
function pw() {
  return (
    tf ||
      ((tf = 1),
      (function (e) {
        function t(r) {
          var n = Object(r),
            a = [];
          for (var o in n) a.unshift(o);
          return function i() {
            for (; a.length; ) if ((o = a.pop()) in n) return ((i.value = o), (i.done = !1), i);
            return ((i.done = !0), i);
          };
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Bs)),
    Bs.exports
  );
}
var Us = { exports: {} },
  qs = { exports: {} },
  rf;
function hw() {
  return (
    rf ||
      ((rf = 1),
      (function (e) {
        function t(r) {
          "@babel/helpers - typeof";
          return (
            (e.exports = t =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      typeof Symbol == "function" &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r)
          );
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(qs)),
    qs.exports
  );
}
var nf;
function gw() {
  return (
    nf ||
      ((nf = 1),
      (function (e) {
        var t = hw().default;
        function r(n) {
          if (n != null) {
            var a = n[(typeof Symbol == "function" && Symbol.iterator) || "@@iterator"],
              o = 0;
            if (a) return a.call(n);
            if (typeof n.next == "function") return n;
            if (!isNaN(n.length))
              return {
                next: function () {
                  return (n && o >= n.length && (n = void 0), { value: n && n[o++], done: !n });
                },
              };
          }
          throw new TypeError(t(n) + " is not iterable");
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Us)),
    Us.exports
  );
}
var af;
function bw() {
  return (
    af ||
      ((af = 1),
      (function (e) {
        var t = rg(),
          r = ag(),
          n = vw(),
          a = ig(),
          o = og(),
          i = pw(),
          c = gw();
        function s() {
          var u = r(),
            l = u.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function p(f) {
            var h = typeof f == "function" && f.constructor;
            return !!h && (h === d || (h.displayName || h.name) === "GeneratorFunction");
          }
          var v = { throw: 1, return: 2, break: 3, continue: 3 };
          function g(f) {
            var h, b;
            return function (_) {
              (h ||
                ((h = {
                  stop: function () {
                    return b(_.a, 2);
                  },
                  catch: function () {
                    return _.v;
                  },
                  abrupt: function (k, w) {
                    return b(_.a, v[k], w);
                  },
                  delegateYield: function (k, w, S) {
                    return ((h.resultName = w), b(_.d, c(k), S));
                  },
                  finish: function (k) {
                    return b(_.f, k);
                  },
                }),
                (b = function (k, w, S) {
                  ((_.p = h.prev), (_.n = h.next));
                  try {
                    return k(w, S);
                  } finally {
                    h.next = _.n;
                  }
                })),
                h.resultName && ((h[h.resultName] = _.v), (h.resultName = void 0)),
                (h.sent = _.v),
                (h.next = _.n));
              try {
                return f.call(this, h);
              } finally {
                ((_.p = h.prev), (_.n = h.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (b, _, y, k) {
                  return u.w(g(b), _, y, k && k.reverse());
                },
                isGeneratorFunction: p,
                mark: u.m,
                awrap: function (b, _) {
                  return new t(b, _);
                },
                AsyncIterator: o,
                async: function (b, _, y, k, w) {
                  return (p(_) ? a : n)(g(b), _, y, k, w);
                },
                keys: i,
                values: c,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(js)),
    js.exports
  );
}
var zs, of;
function _w() {
  if (of) return zs;
  of = 1;
  var e = bw()();
  zs = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return zs;
}
var mw = _w();
const T = ur(mw);
var yr = {},
  $r = {},
  So = {},
  ka = {},
  sf;
function yw() {
  if (sf) return ka;
  ((sf = 1),
    Object.defineProperty(ka, "__esModule", { value: !0 }),
    (ka.V1InitializeContainer = void 0));
  const e = Tt();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      return this._getResultFromLookup(this._values.feature_gates, n);
    }
    getConfig(n) {
      return this._getResultFromLookup(this._values.dynamic_configs, n);
    }
    getLayer(n) {
      return this._getResultFromLookup(this._values.layer_configs, n);
    }
    getParamStore(n) {
      return this._getResultFromLookup(this._values.param_stores, n);
    }
    getConfigList() {
      return Object.keys(this._values.dynamic_configs);
    }
    getExposureMapping() {
      return this._values.exposures;
    }
    _getResultFromLookup(n, a) {
      var o, i;
      return n &&
        (i = (o = n[a]) !== null && o !== void 0 ? o : n[(0, e._DJB2)(a)]) !== null &&
        i !== void 0
        ? i
        : null;
    }
  };
  return ((ka.V1InitializeContainer = t), ka);
}
var Oa = {},
  cf;
function ww() {
  if (cf) return Oa;
  ((cf = 1),
    Object.defineProperty(Oa, "__esModule", { value: !0 }),
    (Oa.V2InitializeContainer = void 0));
  const e = Tt();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var a, o, i;
      const c = this._getResultFromLookup(this._values.feature_gates, n);
      return c
        ? {
            name: n,
            value: c.v === !0,
            rule_id: (a = c.r) !== null && a !== void 0 ? a : "default",
            secondary_exposures: (o = c.s) !== null && o !== void 0 ? o : [],
            id_type: (i = c.i) !== null && i !== void 0 ? i : "",
          }
        : null;
    }
    getConfig(n) {
      var a, o, i, c;
      const s = this._getResultFromLookup(this._values.dynamic_configs, n);
      return s
        ? {
            name: n,
            value: (a = this._values.values[s.v]) !== null && a !== void 0 ? a : {},
            rule_id: s.r,
            secondary_exposures: (o = s.s) !== null && o !== void 0 ? o : [],
            id_type: (i = s.i) !== null && i !== void 0 ? i : "",
            is_user_in_experiment: s.ue === !0,
            passed: s.p === !0,
            group_name: (c = s.gn) !== null && c !== void 0 ? c : void 0,
            is_experiment_active: s.ea === !0,
            group: s.r,
            is_device_based: s.i === "stableID",
          }
        : null;
    }
    getLayer(n) {
      var a, o, i, c, s, u;
      const l = this._getResultFromLookup(this._values.layer_configs, n);
      return l
        ? {
            name: n,
            value: (a = this._values.values[l.v]) !== null && a !== void 0 ? a : {},
            rule_id: l.r,
            secondary_exposures: (o = l.s) !== null && o !== void 0 ? o : [],
            is_user_in_experiment: l.ue === !0,
            group_name: (i = l.gn) !== null && i !== void 0 ? i : void 0,
            is_experiment_active: l.ea === !0,
            group: l.r,
            is_device_based: l.i === "stableID",
            allocated_experiment_name: (c = l.ae) !== null && c !== void 0 ? c : "",
            explicit_parameters: (s = l.ep) !== null && s !== void 0 ? s : [],
            undelegated_secondary_exposures: (u = l.us) !== null && u !== void 0 ? u : [],
            parameter_rule_ids: l.pr,
          }
        : null;
    }
    getParamStore(n) {
      return this._getResultFromLookup(this._values.param_stores, n);
    }
    getConfigList() {
      return Object.keys(this._values.dynamic_configs);
    }
    getExposureMapping() {
      return this._values.exposures;
    }
    _getResultFromLookup(n, a) {
      var o, i;
      return n &&
        (i = (o = n[a]) !== null && o !== void 0 ? o : n[(0, e._DJB2)(a)]) !== null &&
        i !== void 0
        ? i
        : null;
    }
  };
  return ((Oa.V2InitializeContainer = t), Oa);
}
var uf;
function kw() {
  if (uf) return So;
  ((uf = 1), Object.defineProperty(So, "__esModule", { value: !0 }));
  const e = Tt(),
    t = yw(),
    r = ww();
  let n = class {
    constructor(o, i) {
      ((this._sdkKey = o),
        (this._options = i),
        (this._valuesForExternalUse = null),
        (this._values = null),
        (this._source = "Uninitialized"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        (this._warnings = new Set()));
    }
    reset() {
      ((this._values = null),
        (this._valuesForExternalUse = null),
        (this._source = "Loading"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        this._warnings.clear());
    }
    finalize() {
      this._values || (this._source = "NoValues");
    }
    getValues() {
      return this._valuesForExternalUse;
    }
    setValues(o, i) {
      var c, s;
      if (!o) return !1;
      const u = (0, e._typedJsonParse)(o.data, "has_updates", "EvaluationResponse");
      return u == null
        ? !1
        : ((this._source = o.source),
          u?.has_updates !== !0 ||
            ((c = u.time) !== null && c !== void 0 ? c : 0) < this._lcut ||
            ((this._valuesForExternalUse = (0, e._typedJsonParse)(
              o.data,
              "has_updates",
              "EvaluationResponse",
            )),
            (this._lcut = u.time),
            (this._receivedAt = o.receivedAt),
            u.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(u))
              : (this._values = new t.V1InitializeContainer(u)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(o.source, u)),
            o.source && u.user && this._setWarningState(i, u),
            e.SDKFlags.setFlags(this._sdkKey, (s = u.sdk_flags) !== null && s !== void 0 ? s : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(o) {
      const i = this._values ? this._values.getGate(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getConfig(o) {
      const i = this._values ? this._values.getConfig(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getConfigList() {
      return this._values ? this._values.getConfigList() : [];
    }
    getLayer(o) {
      const i = this._values ? this._values.getLayer(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getParamStore(o) {
      const i = this._values ? this._values.getParamStore(o) : null;
      return this._getDetailedStoreResult(i);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var o;
      return (o = this._values) === null || o === void 0 ? void 0 : o.getExposureMapping();
    }
    _extractBootstrapMetadata(o, i) {
      if (o !== "Bootstrap") return null;
      const c = {};
      return (
        i.user && (c.user = i.user),
        i.sdkInfo && (c.generatorSDKInfo = i.sdkInfo),
        (c.lcut = i.time),
        c
      );
    }
    _getDetailedStoreResult(o) {
      return { result: o, details: this._getDetails(o == null) };
    }
    _setWarningState(o, i) {
      var c, s, u;
      const l = e.StableID.get(this._sdkKey);
      if (
        ((c = o.customIDs) === null || c === void 0 ? void 0 : c.stableID) !== l &&
        ((!((s = o.customIDs) === null || s === void 0) && s.stableID) || l)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        let d = i.user,
          p = Object.assign(Object.assign({}, o), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (!((u = this._options) === null || u === void 0) &&
          u.disableStableID &&
          ((p = Object.assign(Object.assign({}, p), {
            customIDs: Object.assign(Object.assign({}, p.customIDs), { stableID: void 0 }),
          })),
          (d = Object.assign(Object.assign({}, d), {
            customIDs: Object.assign(Object.assign({}, d.customIDs), { stableID: void 0 }),
          }))),
          (0, e._getFullUserHash)(p) !== (0, e._getFullUserHash)(d) &&
            this._warnings.add("PartialUserMatch"));
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const o = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (o.warnings = Array.from(this._warnings)), o);
    }
    _getDetails(o) {
      var i, c;
      const s = this.getCurrentSourceDetails();
      let u = s.reason;
      const l = (i = s.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && l.length > 0 && (u = u + l[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${o ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (c = this._bootstrapMetadata) !== null && c !== void 0
          ? c
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: u }));
    }
  };
  return ((So.default = n), So);
}
var Vr = {},
  Sa = {},
  lf;
function Ow() {
  if (lf) return Sa;
  ((lf = 1),
    Object.defineProperty(Sa, "__esModule", { value: !0 }),
    (Sa._resolveDeltasResponse = void 0));
  const e = Tt(),
    t = 2;
  function r(i, c) {
    const s = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const u = n(i, s),
      l = a(u),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === s.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: s.deltas_full_response,
        };
  }
  Sa._resolveDeltasResponse = r;
  function n(i, c) {
    return Object.assign(Object.assign(Object.assign({}, i), c), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), c.dynamic_configs),
    });
  }
  function a(i) {
    const c = i;
    return (
      o(i.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      o(i.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      o(i.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function o(i, c) {
    i?.forEach((s) => {
      delete c[s];
    });
  }
  return Sa;
}
var df;
function sg() {
  if (df) return Vr;
  df = 1;
  var e =
    (Vr && Vr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  const t = Tt(),
    r = Ow();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const c = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, i, c, s, u) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
          hash:
            (p =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (h?.has_updates) {
          const _ =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !_ ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && u ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: _ ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(o, h, b, c);
      });
    }
    _fetchEvaluations(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u, l;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (u = d?.body) !== null && u !== void 0 ? u : null;
        if (
          i?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const p = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Vr.default = n), Vr);
}
var Ea = {},
  ff;
function Sw() {
  if (ff) return Ea;
  ((ff = 1),
    Object.defineProperty(Ea, "__esModule", { value: !0 }),
    (Ea._makeParamStoreGetter = void 0));
  const e = Tt(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function a(l, d) {
    return l.value;
  }
  function o(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return a(f);
        case "gate":
          return o(l, f, p);
        case "dynamic_config":
          return i(l, f, g, p);
        case "experiment":
          return c(l, f, g, p);
        case "layer":
          return s(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((Ea._makeParamStoreGetter = u), Ea);
}
var wr = {},
  vf;
function Ew() {
  if (vf) return wr;
  vf = 1;
  var e =
    (wr && wr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : s(g.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(wr, "__esModule", { value: !0 }),
    (wr.StatsigEvaluationsDataAdapter = void 0));
  const t = Tt(),
    r = sg();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, i, c) {
      (super.attach(o, i, c),
        c !== null && c instanceof r.default
          ? (this._network = c)
          : (this._network = new r.default(i ?? {})));
    }
    getDataAsync(o, i, c) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), c);
    }
    prefetchData(o, i) {
      return this._prefetchDataImpl(o, i);
    }
    setData(o) {
      const i = (0, t._typedJsonParse)(o, "has_updates", "data");
      i && "user" in i
        ? super.setData(o, i.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(o, i) {
      super.setData(o, i);
    }
    _fetchFromNetwork(o, i, c, s) {
      return e(this, void 0, void 0, function* () {
        var u;
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), o, c?.priority, i, s);
        return l ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const c = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  };
  return ((wr.StatsigEvaluationsDataAdapter = n), wr);
}
var pf;
function xw() {
  if (pf) return $r;
  pf = 1;
  var e =
    ($r && $r.__awaiter) ||
    function (c, s, u, l) {
      function d(p) {
        return p instanceof u
          ? p
          : new u(function (v) {
              v(p);
            });
      }
      return new (u || (u = Promise))(function (p, v) {
        function g(b) {
          try {
            h(l.next(b));
          } catch (_) {
            v(_);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (_) {
            v(_);
          }
        }
        function h(b) {
          b.done ? p(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty($r, "__esModule", { value: !0 });
  const t = Tt(),
    r = kw(),
    n = sg(),
    a = Sw(),
    o = Ew();
  let i = class Oc extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof Oc
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Oc(s ?? "", {}));
    }
    constructor(s, u, l = null) {
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        v,
        l,
      ),
        (this._possibleFirstTouchMetadata = {}),
        (this.getFeatureGate = this._memoize(
          t.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          t.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          t.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getConfigList = this._memoize(
          t.MemoPrefix._configList,
          this._getConfigListImpl.bind(this),
        )),
        (this.getLayer = this._memoize(t.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          t.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new r.default(s, l ?? null)),
        (this._network = v),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()),
        (this._contextHandle = new t.PrecomputedEvaluationsContextHandle(
          s,
          () => this._options,
          () => this._errorBoundary,
          () => this._store.getValues(),
          () => this._user,
          () => this._sdkInstanceID,
        )));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
    }
    initializeSync(s) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, s));
    }
    initializeAsync(s) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(s)), this._initializePromise);
      });
    }
    updateUserSync(s, u) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, u, l);
      } catch (d) {
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = u?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && v?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          )
        : (this._runPostUpdate(v ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            p,
          ));
    }
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
        }
      });
    }
    _updateUserAsyncImpl(s, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, u)),
          l !== this._user)
        )
          return (0, t.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let p = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (p = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: p })),
          this._finalizeUpdate(d),
          p ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            p,
            this._store.getCurrentSourceDetails(),
          ));
        const v = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          p,
          this._store.getSource(),
          v,
          this._errorBoundary.getLastSeenErrorAndReset(),
          this._network.getLastUsedInitUrlAndReset(),
          this._store.getWarnings(),
        );
      });
    }
    getContext() {
      let s = (0, t._cloneObject)("StatsigUser", this._user);
      return (
        s == null && (t.Log.error("Failed to clone user"), (s = {})),
        {
          sdkKey: this._sdkKey,
          options: this._options,
          values: this._store.getValues(),
          user: s,
          errorBoundary: this._errorBoundary,
          session: t.StatsigSession.get(this._sdkKey),
          stableID: t.StableID.get(this._sdkKey),
          sdkInstanceID: this._sdkInstanceID,
        }
      );
    }
    getContextHandle() {
      return this._contextHandle;
    }
    checkGate(s, u) {
      return this.getFeatureGate(s, u).value;
    }
    logEvent(s, u, l) {
      const d = typeof s == "string" ? { eventName: s, value: u, metadata: l } : s;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        ));
    }
    updateUserWithAnalyticsOnlyMetadata(s) {
      this._user = this._configureUser(
        Object.assign(Object.assign({}, this._user), { analyticsOnlyMetadata: s }),
        this._options,
      );
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(s) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, s)
        );
      });
    }
    _createErrorUpdateDetails(s, u) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - u,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, u) {
      this.dataAdapter.getDataAsync(s, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, u) {
      var l, d, p;
      const v = (0, t._normalizeUser)(s, u),
        g = (l = v.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (g) {
        const f =
          (p = (d = this.storageProvider).isReadyResolver) === null || p === void 0
            ? void 0
            : p.call(d);
        f
          ? f.then(
              () => t.StableID.setOverride(g, this._sdkKey),
              () => t.StableID.setOverride(g, this._sdkKey),
            )
          : t.StableID.setOverride(g, this._sdkKey);
      }
      return (
        Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
          (v.analyticsOnlyMetadata = Object.assign(
            Object.assign({}, v.analyticsOnlyMetadata),
            this._possibleFirstTouchMetadata,
          )),
        v
      );
    }
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s);
      (this._checkUserHasIdForEvaluation(p?.id_type, s, "Gate"),
        this._checkInitializationStatus(v.reason));
      const g = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s);
      (this._checkUserHasIdForEvaluation(p?.id_type, s, "Dynamic config"),
        this._checkInitializationStatus(v.reason));
      const g = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(s, u) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(s);
      (this._checkUserHasIdForEvaluation(g?.id_type, s, "Experiment"),
        this._checkInitializationStatus(f.reason));
      const h = (0, t._makeExperiment)(s, f, g);
      h.__evaluation != null &&
        (h.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = h.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const b =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, u),
        _ = b ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(s, u) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (_) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                _,
                this._store.getExposureMapping(),
              ),
              u,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: b }), b);
    }
    _getParameterStoreImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
          details: v,
          __configuration: p,
          get: (0, a._makeParamStoreGetter)(this, p, u),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, u);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, a._makeParamStoreGetter)(this, f.config, u))),
        g
      );
    }
    _checkUserHasIdForEvaluation(s, u, l) {
      s &&
        ((0, t._getUnitIDFromUser)(this._user, s) ||
          t.Log.warn(`The user does not have the required id_type "${s}" for ${l} "${u}"`));
    }
    _checkInitializationStatus(s) {
      (s === "Uninitialized" || s.startsWith("Loading")) &&
        t.Log.warn(`SDK initialization has not completed. Reason: ${s}`);
    }
  };
  return (($r.default = i), $r);
}
var hf;
function Cw() {
  return (
    hf ||
      ((hf = 1),
      (function (e) {
        var t =
            (yr && yr.__createBinding) ||
            (Object.create
              ? function (i, c, s, u) {
                  u === void 0 && (u = s);
                  var l = Object.getOwnPropertyDescriptor(c, s);
                  ((!l || ("get" in l ? !c.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return c[s];
                      },
                    }),
                    Object.defineProperty(i, u, l));
                }
              : function (i, c, s, u) {
                  (u === void 0 && (u = s), (i[u] = c[s]));
                }),
          r =
            (yr && yr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Tt(),
          a = xw();
        ((e.StatsigClient = a.default), r(Tt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(yr)),
    yr
  );
}
var gt = Cw(),
  $s = { exports: {} },
  gf;
function Pw() {
  return (
    gf ||
      ((gf = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(s, u, l) {
          ((this.fn = s), (this.context = u), (this.once = l || !1));
        }
        function o(s, u, l, d, p) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var v = new a(l, d || s, p),
            g = r ? r + u : u;
          return (
            s._events[g]
              ? s._events[g].fn
                ? (s._events[g] = [s._events[g], v])
                : s._events[g].push(v)
              : ((s._events[g] = v), s._eventsCount++),
            s
          );
        }
        function i(s, u) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[u];
        }
        function c() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var u = [],
            l,
            d;
          if (this._eventsCount === 0) return u;
          for (d in (l = this._events)) t.call(l, d) && u.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
        }),
          (c.prototype.listeners = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var p = 0, v = d.length, g = new Array(v); p < v; p++) g[p] = d[p].fn;
            return g;
          }),
          (c.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (c.prototype.emit = function (u, l, d, p, v, g) {
            var f = r ? r + u : u;
            if (!this._events[f]) return !1;
            var h = this._events[f],
              b = arguments.length,
              _,
              y;
            if (h.fn) {
              switch ((h.once && this.removeListener(u, h.fn, void 0, !0), b)) {
                case 1:
                  return (h.fn.call(h.context), !0);
                case 2:
                  return (h.fn.call(h.context, l), !0);
                case 3:
                  return (h.fn.call(h.context, l, d), !0);
                case 4:
                  return (h.fn.call(h.context, l, d, p), !0);
                case 5:
                  return (h.fn.call(h.context, l, d, p, v), !0);
                case 6:
                  return (h.fn.call(h.context, l, d, p, v, g), !0);
              }
              for (y = 1, _ = new Array(b - 1); y < b; y++) _[y - 1] = arguments[y];
              h.fn.apply(h.context, _);
            } else {
              var k = h.length,
                w;
              for (y = 0; y < k; y++)
                switch ((h[y].once && this.removeListener(u, h[y].fn, void 0, !0), b)) {
                  case 1:
                    h[y].fn.call(h[y].context);
                    break;
                  case 2:
                    h[y].fn.call(h[y].context, l);
                    break;
                  case 3:
                    h[y].fn.call(h[y].context, l, d);
                    break;
                  case 4:
                    h[y].fn.call(h[y].context, l, d, p);
                    break;
                  default:
                    if (!_) for (w = 1, _ = new Array(b - 1); w < b; w++) _[w - 1] = arguments[w];
                    h[y].fn.apply(h[y].context, _);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (u, l, d) {
            return o(this, u, l, d, !1);
          }),
          (c.prototype.once = function (u, l, d) {
            return o(this, u, l, d, !0);
          }),
          (c.prototype.removeListener = function (u, l, d, p) {
            var v = r ? r + u : u;
            if (!this._events[v]) return this;
            if (!l) return (i(this, v), this);
            var g = this._events[v];
            if (g.fn) g.fn === l && (!p || g.once) && (!d || g.context === d) && i(this, v);
            else {
              for (var f = 0, h = [], b = g.length; f < b; f++)
                (g[f].fn !== l || (p && !g[f].once) || (d && g[f].context !== d)) && h.push(g[f]);
              h.length ? (this._events[v] = h.length === 1 ? h[0] : h) : i(this, v);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (u) {
            var l;
            return (
              u
                ? ((l = r ? r + u : u), this._events[l] && i(this, l))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          (e.exports = c));
      })($s)),
    $s.exports
  );
}
var Rw = Pw();
const Aw = ur(Rw);
function bf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Eo = "@all-features",
  Iw = (function () {
    function e() {
      (be(this, e), C(this, "eventToValue", new Map()), (this.emitter = new Aw()));
    }
    return _e(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, rr(rr({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var l = a(r, rr(rr({}, o), {}, { fireGateExposure: !1 })),
              d = i.eventToValue.get(n);
            d !== l && (i.eventToValue.set(n, l), n(l));
          };
          return (
            this.emitter.on(r, s),
            function () {
              i.emitter.off(r, s);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o, i, c) {
          var s = this,
            u = "".concat(r, ".").concat(n),
            l = i(r, n, a, rr(rr({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var v = i(r, n, a, rr(rr({}, c), {}, { fireExperimentExposure: !1 })),
              g = s.eventToValue.get(o);
            g !== v && (s.eventToValue.set(o, v), o(v));
          };
          return (
            this.emitter.on(u, d),
            function () {
              s.emitter.off(u, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Eo, r),
            function () {
              n.emitter.off(Eo, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Eo),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Eo;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  jw = "fedramp-moderate";
function Dw() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === jw;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Jc = (function (e) {
    return (
      (e.Error = "Error"),
      (e.LocalOverride = "LocalOverride"),
      (e.Unrecognized = "Unrecognized"),
      (e.Uninitialized = "Uninitialized"),
      (e.NetworkNotModified = "NetworkNotModified"),
      (e.Network = "Network"),
      (e.InvalidBootstrap = "InvalidBootstrap"),
      (e.Bootstrap = "Bootstrap"),
      (e.Cache = "Cache"),
      (e.Unknown = "Unknown"),
      e
    );
  })({}),
  La = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  to = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Tw = [
    "api",
    "disableCurrentPageLogging",
    "loggingIntervalMillis",
    "loggingBufferMaxSize",
    "localMode",
    "eventLoggingApi",
    "eventLoggingApiForRetries",
    "disableLocalStorage",
    "ignoreWindowUndefined",
    "disableAllLogging",
    "initTimeoutMs",
    "disableNetworkKeepalive",
    "overrideStableID",
    "disableErrorLogging",
    "disableAutoMetricsLogging",
  ];
function _f(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _f(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _f(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var xo = function (t) {
    return Sc({ perimeter: Dw() ? to.FEDRAMP_MODERATE : to.COMMERCIAL }, t);
  },
  xa = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (p, v) {
      var g = W(p, 1),
        f = g[0],
        h = W(v, 1),
        b = h[0];
      return f.localeCompare(b);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var c = W(n[i], 2),
        s = c[1],
        u = W(a[i], 2),
        l = u[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  mf = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Mw = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      o = t.loggingBufferMaxSize,
      i = t.localMode,
      c = t.eventLoggingApi,
      s = t.eventLoggingApiForRetries,
      u = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var p = ie(t, Tw);
    return Sc(
      Sc({}, p),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: c ? c + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
          preventAllNetworkTraffic: i || (!l && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: a,
        loggingBufferMaxSize: o,
        disableStorage: u === void 0 ? i : u,
        disableLogging: d === void 0 ? i : d,
      },
    );
  },
  Fw = Object.entries(Jc).map(function (e) {
    var t = W(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  cg = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Fw.find(function (i) {
            var c = W(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Jc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Ec = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  yf = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (be(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c));
    }
    return _e(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o,
              i = this.getValue(r, n);
            if (i == null) return n;
            var c = Array.isArray(n) ? "array" : Ae(n),
              s = Array.isArray(i) ? "array" : Ae(i);
            if (a) {
              var u;
              return a(i)
                ? (this.fireExposure(r), i)
                : ((u = this._onDefaultValueFallback) === null ||
                    u === void 0 ||
                    u.call(this, this, r, c, s),
                  n);
            }
            return n == null || c === s
              ? (this.fireExposure(r), i)
              : ((o = this._onDefaultValueFallback) === null ||
                  o === void 0 ||
                  o.call(this, this, r, c, s),
                n);
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            return r == null
              ? this.value
              : (n == null && (n = null),
                this.value[r] == null ? n : (this.fireExposure(r), this.value[r]));
          },
        },
        {
          key: "fireExposure",
          value: function (r) {
            this.experiment && this.experiment.get(r);
          },
        },
      ],
      [
        {
          key: "fromExperiment",
          value: function (r) {
            var n,
              a,
              o,
              i = new e(
                r.name,
                r.value,
                r.ruleID,
                cg(r.details),
                Ec(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                (o = r.groupName) !== null && o !== void 0 ? o : void 0,
              );
            return ((i.experiment = r), i);
          },
        },
      ],
    );
  })(),
  wf = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (be(this, e),
        (this._logParameterFunction = o),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = i),
        (this._undelegatedSecondaryExposures = c),
        (this._allocatedExperimentName = s),
        (this._explicitParameters = u));
    }
    return _e(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o = this,
              i = this._value[r];
            if (i == null) return n;
            var c = function () {
              return (o._logLayerParameterExposure(r), i);
            };
            return a
              ? a(i)
                ? c()
                : n
              : n == null || (Ae(i) === Ae(n) && Array.isArray(n) === Array.isArray(i))
                ? c()
                : n;
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            n == null && (n = null);
            var a = this._value[r];
            return (a != null && this._logLayerParameterExposure(r), a ?? n);
          },
        },
        {
          key: "_logLayerParameterExposure",
          value: function (r) {
            var n;
            (n = this._logParameterFunction) === null || n === void 0 || n.call(this, this, r);
          },
        },
      ],
      [
        {
          key: "fromLayer",
          value: function (r) {
            var n,
              a,
              o,
              i,
              c,
              s,
              u = new e(
                r.name,
                r.__value,
                r.ruleID,
                cg(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Ec(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Ec(
                  (o =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.undelegated_secondary_exposures) !== null && o !== void 0
                    ? o
                    : [],
                ),
                (c = r.__evaluation) === null || c === void 0
                  ? void 0
                  : c.allocated_experiment_name,
                (s = r.__evaluation) === null || s === void 0 ? void 0 : s.explicit_parameters,
              );
            return u;
          },
        },
      ],
    );
  })(),
  nn = "0.0.0-development";
function Nw(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function ug() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ug = function () {
    return !!e;
  })();
}
function Lw(e, t, r) {
  if (ug()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && eo(a, r.prototype), a);
}
function xc(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (xc = function (n) {
      if (n === null || !Nw(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Lw(n, arguments, ee(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        eo(a, n)
      );
    }),
    xc(e)
  );
}
function Bw(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, lg() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function lg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (lg = function () {
    return !!e;
  })();
}
var kf = (function (e) {
  function t(r) {
    return (be(this, t), Bw(this, t, [r]));
  }
  return (et(t, e), _e(t));
})(xc(Error));
function Of(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Uw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Of(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Of(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var qw = 5e3,
  zw = "https://api.atlassian.com/flags",
  $w = "https://api.stg.atlassian.com/flags",
  Vw = "https://api.dev.atlassian.com/flags",
  Gw = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Hw = "https://api.atlassian-us-gov-mod.com/flags",
  Ww = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Kw = "oasis-stg.com/flags",
  Jw = "atlassian-isolated.net/flags",
  Yw = "/gateway/api/flags",
  Vs = (function () {
    function e() {
      be(this, e);
    }
    return _e(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = Z(
            T.mark(function n(a) {
              var o, i;
              return T.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (o = a.targetApp),
                          (i = "/api/v2/frontend/clientSdkKey/".concat(o)),
                          (s.prev = 2),
                          (s.next = 5),
                          this.fetchRequest(i, "GET", a)
                        );
                      case 5:
                        return s.abrupt("return", s.sent);
                      case 8:
                        if (((s.prev = 8), (s.t0 = s.catch(2)), !(s.t0 instanceof Error))) {
                          s.next = 12;
                          break;
                        }
                        throw s.t0;
                      case 12:
                        throw Error("Failed to retrieve client sdk key");
                      case 13:
                      case "end":
                        return s.stop();
                    }
                },
                n,
                this,
                [[2, 8]],
              );
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "fetchExperimentValues",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c;
              return T.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (c = { identifiers: o, customAttributes: i, targetApp: a.targetApp }),
                          (u.prev = 1),
                          (u.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, c)
                        );
                      case 4:
                        return u.abrupt("return", u.sent);
                      case 7:
                        if (((u.prev = 7), (u.t0 = u.catch(1)), !(u.t0 instanceof Error))) {
                          u.next = 11;
                          break;
                        }
                        throw u.t0;
                      case 11:
                        throw Error("Failed to retrieve experiment values");
                      case 12:
                      case "end":
                        return u.stop();
                    }
                },
                n,
                this,
                [[1, 7]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "handleResponseError",
        value: (function () {
          var t = Z(
            T.mark(function n(a) {
              var o;
              return T.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      if (a.ok) {
                        c.next = 5;
                        break;
                      }
                      return ((c.next = 3), a.text());
                    case 3:
                      throw (
                        (o = c.sent),
                        new kf(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(o)),
                        )
                      );
                    case 5:
                      if (a.status !== 204) {
                        c.next = 7;
                        break;
                      }
                      throw new kf("Unexpected 204 response");
                    case 7:
                    case "end":
                      return c.stop();
                  }
              }, n);
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "extractResponseBody",
        value: (function () {
          var t = Z(
            T.mark(function n(a) {
              var o;
              return T.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return ((c.next = 2), a.text());
                    case 2:
                      return ((o = c.sent), c.abrupt("return", JSON.parse(o)));
                    case 4:
                    case "end":
                      return c.stop();
                  }
              }, n);
            }),
          );
          function r(n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getBaseUrl",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            a = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return Yw;
          if (a === to.FEDRAMP_MODERATE)
            switch (r) {
              case La.Production:
                return Hw;
              case La.Staging:
                return Gw;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === to.COMMERCIAL)
            switch (r) {
              case La.Development:
                return Vw;
              case La.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : $w;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : zw;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i, c) {
              var s, u, l, d, p;
              return T.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (u = i.fetchTimeoutMs || qw),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(u))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, u)),
                          (g.next = 5),
                          fetch(
                            "".concat(s).concat(a),
                            Uw(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": nn,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              c && { body: JSON.stringify(c) },
                            ),
                          )
                        );
                      case 5:
                        return ((p = g.sent), (g.next = 8), this.handleResponseError(p));
                      case 8:
                        return ((g.next = 10), this.extractResponseBody(p));
                      case 10:
                        return g.abrupt("return", g.sent);
                      case 11:
                      case "end":
                        return g.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getApiUrl",
        value: function (r) {
          var n = this.getWindowLocation();
          if (n === void 0) return r ? Ww.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Kw);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(Jw) : null;
        },
      },
      {
        key: "getWindowLocation",
        value: function () {
          if (typeof window < "u" && window.location) return window.location;
        },
      },
    ]);
  })();
function Sf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Xw(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, dg() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function dg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dg = function () {
    return !!e;
  })();
}
function Zw(e, t, r, n) {
  var a = ai(ee(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Qw = (function (e) {
  function t() {
    var r;
    return (
      be(this, t),
      (r = Xw(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    et(t, e),
    _e(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: gt.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = Z(
            T.mark(function a(o, i) {
              return T.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                    case "end":
                      return s.stop();
                  }
              }, a);
            }),
          );
          function n(a, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataAsync",
        value: (function () {
          var r = Z(
            T.mark(function a(o, i, c) {
              return T.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Ca(
                              Ca({}, this.bootstrapResult),
                              {},
                              { fullUserHash: gt._getFullUserHash(i) },
                            ),
                        );
                      case 1:
                      case "end":
                        return u.stop();
                    }
                },
                a,
                this,
              );
            }),
          );
          function n(a, o, i) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataSync",
        value: function (n) {
          return (
            this.bootstrapResult &&
            Ca(Ca({}, this.bootstrapResult), {}, { fullUserHash: gt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = Z(
            T.mark(function a(o, i, c) {
              return T.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return u.abrupt("return", null);
                    case 1:
                    case "end":
                      return u.stop();
                  }
              }, a);
            }),
          );
          function n(a, o, i) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "_getCacheKey",
        value: function (n) {
          var a = gt._getStorageKey(this._getSdkKey(), n);
          return "".concat(gt.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
        },
      },
      {
        key: "_isCachedResultValidFor204",
        value: function (n, a) {
          return !1;
        },
      },
      {
        key: "setDataLegacy",
        value: function (n, a) {
          Zw(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Ca({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(gt.DataAdapterCore);
function Ef(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ef(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ef(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function e1(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = t1(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o,
    i = !0,
    c = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((c = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (c) throw o;
      }
    },
  };
}
function t1(e, t) {
  if (e) {
    if (typeof e == "string") return xf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? xf(e, t)
          : void 0
    );
  }
}
function xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Gs = "LocalOverride:Recognized",
  r1 = "STATSIG_OVERRIDES",
  Cf = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Gr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  ot = function (t, r) {
    return r + ":" + t;
  },
  n1 = (function () {
    function e(t) {
      (be(this, e),
        (this._overrides = Gr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return _e(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Gr();
          } catch {
            return Gr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Gr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
            a[o] = arguments[o];
          for (var i = 0, c = a; i < c.length; i++) {
            for (
              var s = c[i],
                u = 0,
                l = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              u < l.length;
              u++
            ) {
              var d,
                p = W(l[u], 2),
                v = p[0],
                g = p[1];
              r.gates[v] = g;
            }
            for (
              var f = 0, h = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              f < h.length;
              f++
            ) {
              var b,
                _ = W(h[f], 2),
                y = _[0],
                k = _[1];
              r.configs[y] = k;
            }
            for (
              var w = 0, S = Object.entries((E = s.layers) !== null && E !== void 0 ? E : {});
              w < S.length;
              w++
            ) {
              var E,
                A = W(S[w], 2),
                j = A[0],
                P = A[1];
              r.layers[j] = P;
            }
          }
          return r;
        },
      },
      {
        key: "initFromStoredOverrides",
        value: function () {
          var r = this.mergeOverrides(
            this._overrides,
            this.parseStoredOverrides(Cf),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Cf);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = e1(i),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var u = s.value,
                  l = at._DJB2(u);
                i.has(l) && delete o[l];
              }
            } catch (d) {
              c.e(d);
            } finally {
              c.f();
            }
          }
          this.applyOverrides(r);
        },
      },
      {
        key: "saveOverrides",
        value: function () {
          try {
            window.localStorage.setItem(this._localStorageKey, JSON.stringify(this._overrides));
          } catch {}
        },
      },
      {
        key: "getOverrides",
        value: function () {
          return this.mergeOverrides(this._overrides);
        },
      },
      {
        key: "applyOverrides",
        value: function (r) {
          var n = Ue(Ue({}, Gr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = W(o[a], 2), c = i[0], s = i[1], u = 0, l = Object.entries(s);
              u < l.length;
              u++
            ) {
              var d = W(l[u], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(ot(at._DJB2(p), c), v);
            }
          this._overrides = n;
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          (this.applyOverrides(r), this.saveOverrides());
        },
      },
      {
        key: "overrideGate",
        value: function (r, n) {
          ((this._overrides.gates[r] = n),
            this._djb2Map.set(ot(at._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(ot(at._DJB2(r), "gates")),
            this.saveOverrides());
        },
      },
      {
        key: "getGateOverride",
        value: function (r, n) {
          var a,
            o =
              (a = this._overrides.gates[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(ot(r.name, "gates"));
          return o == null
            ? null
            : Ue(Ue({}, r), {}, { value: o, details: Ue(Ue({}, r.details), {}, { reason: Gs }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(ot(at._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(ot(at._DJB2(r), "configs")),
            this.saveOverrides());
        },
      },
      {
        key: "getDynamicConfigOverride",
        value: function (r, n) {
          return this._getConfigOverride(r, this._overrides.configs);
        },
      },
      {
        key: "overrideExperiment",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(ot(at._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(ot(at._DJB2(r), "configs")),
            this.saveOverrides());
        },
      },
      {
        key: "getExperimentOverride",
        value: function (r, n) {
          return this._getConfigOverride(r, this._overrides.configs);
        },
      },
      {
        key: "overrideLayer",
        value: function (r, n) {
          ((this._overrides.layers[r] = n),
            this._djb2Map.set(ot(at._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(ot(at._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Gr();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: "getLayerOverride",
        value: function (r, n) {
          var a,
            o =
              (a = this._overrides.layers[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(ot(r.name, "layers"));
          return o == null
            ? null
            : Ue(
                Ue({}, r),
                {},
                {
                  __value: o,
                  get: at._makeTypedGet(r.name, o),
                  details: Ue(Ue({}, r.details), {}, { reason: Gs }),
                },
              );
        },
      },
      {
        key: "_getConfigOverride",
        value: function (r, n) {
          var a,
            o =
              (a = n[r.name]) !== null && a !== void 0
                ? a
                : this._djb2Map.get(ot(r.name, "configs"));
          return o == null
            ? null
            : Ue(
                Ue({}, r),
                {},
                {
                  value: o,
                  get: at._makeTypedGet(r.name, o),
                  details: Ue(Ue({}, r.details), {}, { reason: Gs }),
                },
              );
        },
      },
    ]);
  })(),
  a1 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Pf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Rf = "client-default-key",
  o1 = "https://xp.atlassian.com/v1/rgstr",
  i1 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? r1 : n,
        o = r.overrideAdapter;
      (be(this, e),
        C(this, "initPromise", null),
        C(this, "initCompleted", !1),
        C(this, "initWithDefaults", !1),
        C(this, "hasCheckGateErrorOccurred", !1),
        C(this, "hasGetExperimentErrorOccurred", !1),
        C(this, "hasGetExperimentValueErrorOccurred", !1),
        C(this, "hasGetLayerErrorOccurred", !1),
        C(this, "hasGetLayerValueErrorOccurred", !1),
        C(this, "subscriptions", new Iw()),
        C(this, "dataAdapter", new Qw()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new n1(a)));
    }
    return _e(e, [
      {
        key: "initialize",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c = this,
                s,
                u;
              return T.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = xo(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          xa(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (u = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, o, i)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                v = p - u;
                              c.fireClientEvent(u, v, "initialize", c.initCompleted, s.apiKey);
                            })),
                          d.abrupt("return", this.initPromise)
                        );
                      case 8:
                      case "end":
                        return d.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i, c) {
              var s = this,
                u,
                l;
              return T.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((u = xo(a)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          xa(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.provider = o),
                          this.provider.setClientVersion(nn),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, o, i, c)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var v = performance.now(),
                                g = v - l;
                              s.fireClientEvent(
                                l,
                                g,
                                "initializeWithProvider",
                                s.initCompleted,
                                o.getApiKey ? o.getApiKey() : void 0,
                              );
                            })),
                          p.abrupt("return", this.initPromise)
                        );
                      case 11:
                      case "end":
                        return p.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "applyUpdateCallback",
        value: function (r) {
          try {
            (this.initCompleted || this.initWithDefaults) &&
              (this.assertInitialized(this.statsigClient),
              this.dataAdapter.setBootstrapData(r.experimentValues),
              this.dataAdapter.setData(JSON.stringify(r.experimentValues)),
              this.statsigValuesUpdated());
          } catch (n) {
            console.warn("Error when attempting to apply update", n);
          }
        },
      },
      {
        key: "fireClientEvent",
        value: function (r, n, a, o) {
          var i,
            c = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (i = this.initOptions.analyticsWebClient) === null ||
            i === void 0 ||
            i
              .then(function (u) {
                var l = nr(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: nn,
                    success: o,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
                );
                u.sendOperationalEvent({
                  action: a,
                  actionSubject: "featureGatesClient",
                  attributes: l,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (u) {
                c.initOptions.environment !== La.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l,
                d = arguments;
              return T.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = xo(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          xa(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          v.abrupt("return", this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(s, "has_updates") ||
                            (s.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.initPromise = this.initFromValues(u, o, i, s)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var g = performance.now(),
                                f = g - l;
                              c.fireClientEvent(l, f, "initializeFromValues", c.initCompleted);
                            })),
                          v.abrupt("return", this.initPromise)
                        );
                      case 10:
                      case "end":
                        return v.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "assertInitialized",
        value: function (r) {
          if (!r) throw new Error("Client must be initialized before using this method");
        },
      },
      {
        key: "updateUser",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c, s;
              return T.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = xo(a)),
                          (s = function () {
                            return Vs.fetchExperimentValues(c, o, i).then(function (p) {
                              var v = p.experimentValues,
                                g = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: g };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, o, i)
                        );
                      case 5:
                      case "end":
                        return l.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithProvider",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o) {
              var i = this;
              return T.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.provider)) {
                          s.next = 3;
                          break;
                        }
                        throw new Error(
                          "Cannot update user using provider as the client was not initialised with a provider",
                        );
                      case 3:
                        return ((s.next = 5), this.provider.setProfile(this.initOptions, a, o));
                      case 5:
                        return (
                          (s.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return i.provider.getExperimentValues();
                            },
                            a,
                            o,
                          )
                        );
                      case 7:
                      case "end":
                        return s.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithValues",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o) {
              var i,
                c,
                s = arguments;
              return T.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (i = s.length > 2 && s[2] !== void 0 ? s[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (c = function () {
                            return Promise.resolve({
                              experimentValues: i,
                              customAttributesFromFetch: o,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, a, o)
                        );
                      case 5:
                      case "end":
                        return l.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r(n, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeCalled",
        value: function () {
          return this.initPromise != null;
        },
      },
      {
        key: "initializeCompleted",
        value: function () {
          return this.initCompleted;
        },
      },
      {
        key: "waitUntilInitializeCompleted",
        value: (function () {
          var t = Z(
            T.mark(function n() {
              return T.wrap(
                function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (this.initPromise) {
                          o.next = 2;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can wait until initialized.",
                        );
                      case 2:
                        if (!this.initCompleted) {
                          o.next = 4;
                          break;
                        }
                        return o.abrupt("return");
                      case 4:
                        return ((o.next = 6), this.initPromise);
                      case 6:
                      case "end":
                        return o.stop();
                    }
                },
                n,
                this,
              );
            }),
          );
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "checkGate",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireGateExposure,
              o = a === void 0 ? !0 : a;
            return this.statsigClient.checkGate(r, { disableExposureLog: !o });
          } catch (i) {
            return (
              this.hasCheckGateErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred checking the feature gate. Only the first occurrence of this error is logged.",
                  gateName: r,
                  error: i,
                }),
                (this.hasCheckGateErrorOccurred = !0)),
              !1
            );
          }
        },
      },
      {
        key: "isGateExist",
        value: function (r) {
          try {
            this.assertInitialized(this.statsigClient);
            var n = this.statsigClient.getFeatureGate(r, { disableExposureLog: !0 });
            return !n.details.reason.includes("Unrecognized");
          } catch (a) {
            return (
              console.error("Error occurred when trying to check FeatureGate: ".concat(a)),
              !0
            );
          }
        },
      },
      {
        key: "isExperimentExist",
        value: function (r) {
          try {
            this.assertInitialized(this.statsigClient);
            var n = this.statsigClient.getExperiment(r, { disableExposureLog: !0 });
            return !n.details.reason.includes("Unrecognized");
          } catch (a) {
            return (
              console.error("Error occurred when trying to check Experiment: ".concat(a)),
              !0
            );
          }
        },
      },
      {
        key: "manuallyLogGateExposure",
        value: function (r) {
          (this.assertInitialized(this.statsigClient), this.statsigClient.checkGate(r));
        },
      },
      {
        key: "getExperiment",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireExperimentExposure,
              o = a === void 0 ? !0 : a;
            return yf.fromExperiment(
              this.statsigClient.getExperiment(r, { disableExposureLog: !o }),
            );
          } catch (i) {
            return (
              this.hasGetExperimentErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  error: i,
                }),
                (this.hasGetExperimentErrorOccurred = !0)),
              new yf(r, {}, "", { time: Date.now(), reason: Jc.Error })
            );
          }
        },
      },
      {
        key: "getExperimentValue",
        value: function (r, n, a) {
          var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getExperiment(r, o);
          try {
            var c = o.typeGuard;
            return i.get(n, a, c);
          } catch (s) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: o,
                  error: s,
                }),
                (this.hasGetExperimentValueErrorOccurred = !0)),
              a
            );
          }
        },
      },
      {
        key: "manuallyLogExperimentExposure",
        value: function (r) {
          (this.assertInitialized(this.statsigClient), this.statsigClient.getExperiment(r));
        },
      },
      {
        key: "manuallyLogLayerExposure",
        value: function (r, n) {
          var a;
          (this.assertInitialized(this.statsigClient),
            (a = this.statsigClient.getLayer(r)) === null || a === void 0 || a.get(n));
        },
      },
      {
        key: "shutdownStatsig",
        value: function () {
          (this.assertInitialized(this.statsigClient), this.statsigClient.shutdown());
        },
      },
      {
        key: "overrideGate",
        value: function (r, n) {
          if ((this.overrideAdapter.overrideGate(r, n), this.user)) {
            var a;
            (a = this.statsigClient) === null ||
              a === void 0 ||
              a.updateUserSync(this.user, { disableBackgroundCacheRefresh: !0 });
          }
          this.statsigValuesUpdated();
        },
      },
      {
        key: "clearGateOverride",
        value: function (r) {
          (this.overrideAdapter.removeGateOverride(r), this.statsigValuesUpdated());
        },
      },
      {
        key: "overrideConfig",
        value: function (r, n) {
          (this.overrideAdapter.overrideDynamicConfig(r, n), this.statsigValuesUpdated());
        },
      },
      {
        key: "clearConfigOverride",
        value: function (r) {
          (this.overrideAdapter.removeDynamicConfigOverride(r), this.statsigValuesUpdated());
        },
      },
      {
        key: "setOverrides",
        value: function (r) {
          (this.overrideAdapter.setOverrides(r), this.statsigValuesUpdated());
        },
      },
      {
        key: "getOverrides",
        value: function () {
          return this.overrideAdapter.getOverrides();
        },
      },
      {
        key: "clearAllOverrides",
        value: function () {
          (this.overrideAdapter.removeAllOverrides(), this.statsigValuesUpdated());
        },
      },
      {
        key: "isCurrentUser",
        value: function (r, n) {
          return xa(this.currentIdentifiers, r) && xa(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var a = this,
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = function (s) {
              var u = o.fireGateExposure,
                l = u === void 0 ? !0 : u;
              l && a.manuallyLogGateExposure(r);
              try {
                n(s);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(s),
                  d,
                );
              }
            };
          return this.subscriptions.onGateUpdated(r, i, this.checkGate.bind(this), o);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = c.fireExperimentExposure,
                p = d === void 0 ? !0 : d;
              p && i.manuallyLogExperimentExposure(r);
              try {
                o(l);
              } catch (v) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(l),
                  v,
                );
              }
            };
          return this.subscriptions.onExperimentValueUpdated(
            r,
            n,
            a,
            s,
            this.getExperimentValue.bind(this),
            c,
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          return this.subscriptions.onAnyUpdated(r);
        },
      },
      {
        key: "init",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g;
              return T.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = nr({}, a)),
                          (h.prev = 1),
                          (l = Vs.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = Vs.fetchExperimentValues(a, o, i)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = W(p, 2)),
                          (g = v[1]),
                          (s = g.experimentValues),
                          (u = g.customAttributes),
                          (h.next = 20));
                        break;
                      case 13:
                        return (
                          (h.prev = 13),
                          (h.t0 = h.catch(1)),
                          h.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                h.t0 === null || h.t0 === void 0 ? void 0 : h.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (h.next = 19),
                          this.initFromValues(c, o, i)
                        );
                      case 19:
                        throw h.t0;
                      case 20:
                        return h.abrupt("return", this.initFromValues(c, o, u, s));
                      case 21:
                      case "end":
                        return h.stop();
                    }
                },
                n,
                this,
                [[1, 13]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initWithProvider",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i, c) {
              var s, u, l, d, p, v, g, f;
              return T.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = nr(nr({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, c)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (_) {
                            return (s.sdkKey = _);
                          })),
                          (p = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = b.sent),
                          (g = W(v, 2)),
                          (f = g[1]),
                          (u = f.experimentValues),
                          (l = f.customAttributesFromFetch),
                          (b.next = 22));
                        break;
                      case 15:
                        return (
                          (b.prev = 15),
                          (b.t0 = b.catch(1)),
                          b.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                b.t0 === null || b.t0 === void 0 ? void 0 : b.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (b.next = 21),
                          this.initFromValues(s, i, c)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(s, i, l, u));
                      case 23:
                      case "end":
                        return b.stop();
                    }
                },
                n,
                this,
                [[1, 15]],
              );
            }),
          );
          function r(n, a, o, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initFromValues",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c,
                s,
                u,
                l,
                d,
                p,
                v,
                g = arguments;
              return T.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = g.length > 3 && g[3] !== void 0 ? g[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = Mw(a)),
                          u.sdkKey || (u.sdkKey = Rf),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = nr(
                              nr({}, u.networkConfig),
                              {},
                              { logEventUrl: o1 },
                            )),
                          u.perimeter === to.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = ie(u, a1)),
                          (this.user = mf(o, i)),
                          (v = nr(
                            nr({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: gt.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? gt.StableID.setOverride(o.stableId, l)
                            : (v.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new gt.StatsigClient(l, this.user, v)),
                          this.dataAdapter.setBootstrapData(s),
                          (h.next = 17),
                          this.statsigClient.initializeAsync()
                        );
                      case 17:
                        h.next = 29;
                        break;
                      case 19:
                        return (
                          (h.prev = 19),
                          (h.t0 = h.catch(12)),
                          h.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to initialise the Statsig client, error: ".concat(
                                h.t0 === null || h.t0 === void 0 ? void 0 : h.t0.message,
                              ),
                            ),
                          console.warn(
                            "Initialising Statsig client with default sdk key and without values",
                          ),
                          (this.statsigClient = new gt.StatsigClient(Rf, this.user, v)),
                          this.dataAdapter.setBootstrapData(),
                          (h.next = 27),
                          this.statsigClient.initializeAsync()
                        );
                      case 27:
                        throw ((this.initWithDefaults = !0), h.t0);
                      case 29:
                      case "end":
                        return h.stop();
                    }
                },
                n,
                this,
                [[12, 19]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserUsingInitializeValuesProducer",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l;
              return T.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.initPromise)) {
                          p.next = 3;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can update the user.",
                        );
                      case 3:
                        if (!this.isCurrentUser(o, i)) {
                          p.next = 5;
                          break;
                        }
                        return p.abrupt("return", this.initPromise);
                      case 5:
                        return (
                          (s = this.initPromise),
                          (p.prev = 6),
                          (p.next = 9),
                          this.initPromise
                        );
                      case 9:
                        p.next = 13;
                        break;
                      case 11:
                        ((p.prev = 11), (p.t0 = p.catch(6)));
                      case 13:
                        return (
                          (u = a()),
                          (l = this.updateStatsigClientUser(u, o, i)),
                          (this.initPromise = l.catch(
                            Z(
                              T.mark(function v() {
                                return T.wrap(function (f) {
                                  for (;;)
                                    switch ((f.prev = f.next)) {
                                      case 0:
                                        if (((c.initPromise = s), !c.provider)) {
                                          f.next = 4;
                                          break;
                                        }
                                        return (
                                          (f.next = 4),
                                          c.provider.setProfile(
                                            c.initOptions,
                                            c.currentIdentifiers,
                                            c.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case "end":
                                        return f.stop();
                                    }
                                }, v);
                              }),
                            ),
                          )),
                          p.abrupt("return", l)
                        );
                      case 17:
                      case "end":
                        return p.stop();
                    }
                },
                n,
                this,
                [[6, 11]],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = Z(
            T.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g, f;
              return T.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (b.prev = 1),
                          (b.next = 4),
                          a
                        );
                      case 4:
                        ((u = b.sent), (l = mf(o, u.customAttributesFromFetch)), (b.next = 13));
                        break;
                      case 8:
                        throw (
                          (b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (v = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (p = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(p, !1, v),
                          b.t0
                        );
                      case 13:
                        if (
                          ((g = !0),
                          (f = null),
                          (b.prev = 15),
                          this.dataAdapter.setBootstrapData(u.experimentValues),
                          (this.user = l),
                          !this.user)
                        ) {
                          b.next = 21;
                          break;
                        }
                        return ((b.next = 21), this.statsigClient.updateUserAsync(this.user));
                      case 21:
                        b.next = 27;
                        break;
                      case 23:
                        ((b.prev = 23), (b.t1 = b.catch(15)), (g = !1), (f = String(b.t1)));
                      case 27:
                        if (
                          ((c = this.initOptions) === null ||
                            c === void 0 ||
                            (s = c.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(c, g, f),
                          !g)
                        ) {
                          b.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          this.subscriptions.anyUpdated(),
                          (b.next = 35));
                        break;
                      case 34:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 35:
                      case "end":
                        return b.stop();
                    }
                },
                n,
                this,
                [
                  [1, 8],
                  [15, 23],
                ],
              );
            }),
          );
          function r(n, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getPackageVersion",
        value: function () {
          return nn;
        },
      },
      {
        key: "getLayer",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var a = n.fireLayerExposure,
              o = a === void 0 ? !0 : a;
            return wf.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              wf.fromLayer(gt._makeLayer(r, { reason: "Error" }, null))
            );
          }
        },
      },
      {
        key: "getLayerValue",
        value: function (r, n, a) {
          var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getLayer(r, o);
          try {
            var c = o.typeGuard;
            return i.get(n, a, c);
          } catch (s) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: o,
                  error: s,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              a
            );
          }
        },
      },
    ]);
  })(),
  M,
  Y = (function () {
    function e() {
      be(this, e);
    }
    return _e(e, null, [
      {
        key: "isGateExists",
        value: function (r) {
          return this.client.isGateExist(r);
        },
      },
      {
        key: "isExperimentExists",
        value: function (r) {
          return this.client.isExperimentExist(r);
        },
      },
    ]);
  })();
M = Y;
C(Y, "client", new i1());
C(Y, "hasCheckGateErrorOccurred", !1);
C(Y, "hasGetExperimentValueErrorOccurred", !1);
C(Y, "checkGate", function (e, t) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getFeatureFlagOverride == "function"
    ) {
      var r = window.__CRITERION__.getFeatureFlagOverride(e);
      if (r !== void 0) return r;
    }
  } catch (n) {
    M.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (M.hasCheckGateErrorOccurred = !0));
  }
  return M.client.checkGate(e, t);
});
C(Y, "getExperimentValue", function (e, t, r, n) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getExperimentValueOverride == "function"
    ) {
      var a = window.__CRITERION__.getExperimentValueOverride(e, t);
      if (a != null) return a;
    }
  } catch (o) {
    return (
      M.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: o,
        }),
        (M.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return M.client.getExperimentValue(e, t, r, n);
});
C(Y, "initializeCalled", M.client.initializeCalled.bind(M.client));
C(Y, "initializeCompleted", M.client.initializeCompleted.bind(M.client));
C(Y, "waitUntilInitializeCompleted", M.client.waitUntilInitializeCompleted.bind(M.client));
C(Y, "initialize", M.client.initialize.bind(M.client));
C(Y, "initializeWithProvider", M.client.initializeWithProvider.bind(M.client));
C(Y, "initializeFromValues", M.client.initializeFromValues.bind(M.client));
C(Y, "manuallyLogGateExposure", M.client.manuallyLogGateExposure.bind(M.client));
C(Y, "getExperiment", M.client.getExperiment.bind(M.client));
C(Y, "manuallyLogExperimentExposure", M.client.manuallyLogExperimentExposure.bind(M.client));
C(Y, "manuallyLogLayerExposure", M.client.manuallyLogLayerExposure.bind(M.client));
C(Y, "shutdownStatsig", M.client.shutdownStatsig.bind(M.client));
C(Y, "overrideGate", M.client.overrideGate.bind(M.client));
C(Y, "clearGateOverride", M.client.clearGateOverride.bind(M.client));
C(Y, "overrideConfig", M.client.overrideConfig.bind(M.client));
C(Y, "clearConfigOverride", M.client.clearConfigOverride.bind(M.client));
C(Y, "setOverrides", M.client.setOverrides.bind(M.client));
C(Y, "getOverrides", M.client.getOverrides.bind(M.client));
C(Y, "clearAllOverrides", M.client.clearAllOverrides.bind(M.client));
C(Y, "isCurrentUser", M.client.isCurrentUser.bind(M.client));
C(Y, "onGateUpdated", M.client.onGateUpdated.bind(M.client));
C(Y, "onExperimentValueUpdated", M.client.onExperimentValueUpdated.bind(M.client));
C(Y, "onAnyUpdated", M.client.onAnyUpdated.bind(M.client));
C(Y, "updateUser", M.client.updateUser.bind(M.client));
C(Y, "updateUserWithProvider", M.client.updateUserWithProvider.bind(M.client));
C(Y, "updateUserWithValues", M.client.updateUserWithValues.bind(M.client));
C(Y, "getPackageVersion", M.client.getPackageVersion.bind(M.client));
C(Y, "getLayer", M.client.getLayer.bind(M.client));
C(Y, "getLayerValue", M.client.getLayerValue.bind(M.client));
var Cc = Y;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = Y;
  else {
    var Co, Hs;
    Cc = window.__FEATUREGATES_JS__;
    var Af =
      ((Co = Cc) === null || Co === void 0 || (Hs = Co.getPackageVersion) === null || Hs === void 0
        ? void 0
        : Hs.call(Co)) || "4.10.0 or earlier";
    if (Af !== nn) {
      var s1 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Af, " when module version ")
        .concat(nn, " was loading.");
      console.warn(s1);
    }
  }
var Hr,
  Wr,
  c1 =
    (globalThis == null ||
    (Hr = globalThis.process) === null ||
    Hr === void 0 ||
    (Hr = Hr.env) === null ||
    Hr === void 0
      ? void 0
      : Hr.JEST_WORKER_ID) !== void 0,
  u1 =
    !c1 &&
    (globalThis == null ||
    (Wr = globalThis.process) === null ||
    Wr === void 0 ||
    (Wr = Wr.env) === null ||
    Wr === void 0
      ? void 0
      : Wr.NODE_ENV) !== "production",
  l1 = function () {
    var t;
    u1 && (t = console).debug.apply(t, arguments);
  },
  Yc = {},
  d1 = "@atlaskit/platform-feature-flags",
  $a = "__PLATFORM_FEATURE_FLAGS__",
  fg = typeof process < "u" && typeof Yc < "u",
  f1 = fg ? Yc.ENABLE_PLATFORM_FF === "true" : !1,
  v1 = fg ? Yc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  p1 = f1 || v1,
  h1 = { booleanResolver: void 0 },
  Va = typeof window < "u" ? window : globalThis;
Va[$a] = Va[$a] || h1;
function g1(e) {
  if (p1)
    return (
      l1(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        d1,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Va[$a]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Va[$a]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Cc.checkGate(e);
    var a = (n = Va[$a]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function J(e) {
  return g1(e);
}
var b1 = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  _1 = function () {
    return m.useContext(b1);
  },
  oi = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function m1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function y1(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    a = m.useRef(r),
    o = n.current || !!(t && a.current.inputs && m1(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    m.useEffect(
      function () {
        ((n.current = !1), (a.current = i));
      },
      [i],
    ),
    i.result
  );
}
function w1(e, t) {
  return y1(function () {
    return e;
  }, t);
}
function vg() {
  var e = _1(),
    t = w1(
      function (r) {
        return new fw({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function If(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function k1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? If(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : If(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function un(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = vg(),
    u = s.createAnalyticsEvent,
    l = oi(c),
    d = oi(t),
    p = m.useCallback(
      function (v) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = k1({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
}
function jf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function O1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Df(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = vg(),
    s = c.createAnalyticsEvent,
    u = oi(i),
    l = oi(t),
    d = m.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = O1({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, s, u, l],
    );
  return d;
}
var Rr = "ASC",
  ii = "DESC",
  S1 = "small",
  si = "large",
  pg = 0.22;
const E1 = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, E1) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function ar(e, t, r) {
  return e ?? "var(--c-, )";
}
var x1 = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  C1 = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = ie(e, x1);
    return m.createElement(
      "table",
      te(
        {
          inert: i ? "" : void 0,
          style: {
            "--local-dynamic-table-hover-bg":
              "var(--ds-background-neutral-subtle-hovered, #0515240F)",
            "--local-dynamic-table-highlighted-bg": "var(--ds-background-selected, #E9F2FE)",
            "--local-dynamic-table-hover-highlighted-bg":
              "var(--ds-background-selected-hovered, #CFE1FD)",
            "--local-dynamic-table-row-focus-outline": "var(--ds-border-focused, #4688EC)",
          },
          ref: t,
        },
        c,
        {
          "data-testid": o && "".concat(o, "--table"),
          className: R([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  P1 = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: R(["_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  R1 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  A1 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  I1 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: R([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  j1 = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Tf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Mf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function D1(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, hg() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function hg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (hg = function () {
    return !!e;
  })();
}
var Ff = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  T1 = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Rr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = Ff(s.cells, t, n),
        d = Ff(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (Ae(l) !== Ae(d)) {
        if (typeof l == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof l == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof l == "string" && typeof d == "string"
        ? o * i.compare(l, d)
        : (!l && l !== 0) || l < d
          ? -o
          : (!d && d !== 0) || l > d
            ? o
            : l === d
              ? 0
              : 1;
    });
  };
function M1(e) {
  var t = (function (r) {
    function n() {
      var a;
      be(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = D1(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      et(n, r),
      _e(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.props.onPageRowsUpdate && this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (o, i) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== i.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "render",
            value: function () {
              var o = this.props;
              o.rows;
              var i = o.head;
              (o.sortKey, o.sortOrder, o.rowsPerPage, o.page);
              var c = o.forwardedRef,
                s = ie(o, j1);
              return O.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: i }, s, { ref: c }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (o, i) {
              var c = o.rows,
                s = o.head,
                u = o.sortKey,
                l = o.sortOrder,
                d = o.page,
                p = o.rowsPerPage,
                v = o.isTotalPagesControlledExternally;
              ni(u, s);
              var g, f;
              return (
                v ? ((g = c), (f = c)) : ((g = T1(s, c, u, l) || []), (f = Qh(g, d, p))),
                Mf(Mf({}, i), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(O.Component);
  return O.forwardRef(function (r, n) {
    return O.createElement(t, te({}, r, { forwardedRef: n }));
  });
}
var F1 = "--local-dynamic-table-width",
  gg = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, F1, "".concat(r, "%")) : void 0;
  },
  N1 = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  L1 = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = ie(t, N1);
    return m.createElement(
      "td",
      te(
        {
          style: gg({ width: r }),
          ref: o,
          className: R([
            "_1bsb8a2a",
            n && a && "_1bto1l2s _o5721q9c",
            n && "_1reo15vq _18m915vq",
            "_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
            i.className,
          ]),
        },
        i,
      ),
    );
  },
  B1 = ["isHighlighted", "children", "style", "testId", "className"],
  U1 = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = ie(e, B1);
    return m.createElement(
      "tr",
      te(
        {
          style: a,
          className: R([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            i,
          ]),
        },
        c,
        { ref: t, "data-testid": o },
      ),
      n,
    );
  }),
  q1 = ["cells"],
  z1 = ["content", "testId"],
  $1 = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = ie(r, q1);
    return O.createElement(
      U1,
      te(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (u, l) {
        var d = u.content,
          p = u.testId,
          v = ie(u, z1),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return O.createElement(
          L1,
          te({ "data-testid": p || (a && "".concat(a, "--cell-").concat(l)) }, v, {
            isFixedSize: o,
            key: l,
            shouldTruncate: f,
            width: h,
          }),
          d,
        );
      }),
    );
  };
function V1(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, bg() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function bg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (bg = function () {
    return !!e;
  })();
}
var G1 = (function (e) {
    function t() {
      return (be(this, t), V1(this, t, arguments));
    }
    return (
      et(t, e),
      _e(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              o = n.head,
              i = n.isFixedSize,
              c = n.highlightedRowIndex,
              s = n.testId,
              u = n.forwardedRef;
            return O.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: u },
              a.map(function (l, d) {
                return O.createElement($1, {
                  head: o,
                  isFixedSize: i,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!c && (typeof c == "number" ? c === d : c.indexOf(d) > -1)),
                  testId: s,
                });
              }),
            );
          },
        },
      ])
    );
  })(O.Component),
  H1 = M1(
    O.forwardRef(function (e, t) {
      return O.createElement(G1, te({}, e, { forwardedRef: t }));
    }),
  );
function W1(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, _g() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function _g() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_g = function () {
    return !!e;
  })();
}
var K1 = (function (e) {
  function t(r) {
    var n;
    return (be(this, t), (n = W1(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    et(t, e),
    _e(
      t,
      [
        {
          key: "render",
          value: function () {
            return this.state.hasError ? this.props.fallback : this.props.children;
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromError",
          value: function () {
            return { hasError: !0 };
          },
        },
      ],
    )
  );
})(O.Component);
const Xc = m.createContext(null);
var Ws = "#0052CC",
  J1 = "#0747A6",
  Y1 = "#FFFFFF",
  X1 = "#EBECF0",
  ci = "#42526E",
  Z1 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Q1(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ci, ")")
    : "var(--ds-icon-inverse, ".concat(Y1, ")");
}
var Po = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  ek = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  Zc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        c = t.interactionName,
        s = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        p = typeof l == "number" ? l : Z1[l],
        v = "".concat(i, "ms"),
        g = Q1(a),
        f = m.useContext(Xc);
      return (
        ek(
          function () {
            if (f != null) return f.hold(c);
          },
          [f, c],
        ),
        O.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: R([Po.wrapperStyles, Po.rotateStyles]),
          },
          O.createElement(
            "svg",
            {
              height: p,
              width: p,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": s || void 0,
              style: { animationDelay: v },
              role: s ? "img" : "none",
              className: R([Po.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: R([Po.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Nf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Bf = "--contents-opacity",
  tk = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  rk = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Lf(Lf({}, C({}, Bf, n)), {}, { "--_cnddr8": ar("var(".concat(Bf, ")")) }),
      },
      r,
    );
  },
  nk = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function ak(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, mg() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function mg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (mg = function () {
    return !!e;
  })();
}
var yg = (function (e) {
  function t() {
    return (be(this, t), ak(this, t, arguments));
  }
  return (
    et(t, e),
    _e(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            c = n.contentsOpacity,
            s = n.testId,
            u = n.loadingLabel;
          return O.createElement(
            tk,
            { testId: s },
            o ? O.createElement(rk, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              O.createElement(
                nk,
                { testId: s },
                O.createElement(Zc, {
                  size: i,
                  testId: s && "".concat(s, "--loadingSpinner"),
                  label: u,
                }),
              ),
          );
        },
      },
    ])
  );
})(O.Component);
C(yg, "defaultProps", {
  isLoading: !0,
  spinnerSize: si,
  contentsOpacity: pg,
  loadingLabel: "Loading table",
});
var ok = ["children", "testId"],
  ik = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ie(e, ok);
    return m.createElement(
      "div",
      te({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  sk = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  ck = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function uk(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, wg() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function wg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wg = function () {
    return !!e;
  })();
}
var kg = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = uk(this, t, [].concat(a))),
      C(r, "spinnerRef", O.createRef()),
      C(r, "containerRef", O.createRef()),
      C(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      C(r, "UNSAFE_componentWillReceiveProps", function (i) {
        !i.isLoading || !r.hasTargetNode(i)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      C(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      C(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      C(r, "getTargetNode", function () {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          c = i.targetRef,
          s = c?.();
        return s || r.containerRef.current;
      }),
      C(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      C(r, "isVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return u <= 0 ? !1 : s < c;
      }),
      C(r, "isFullyVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return s >= 0 && u <= c;
      }),
      C(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "translateSpinner", function (i, c, s) {
        ((i.style.position = s ? "fixed" : ""),
          (i.style.transform = c !== 0 ? "translate3d(0, ".concat(c, "px, 0)") : ""));
      }),
      C(r, "updateTargetAppearance", function () {
        var i = r.getTargetNode(),
          c = r.props,
          s = c.isLoading,
          u = c.contentsOpacity;
        i &&
          i.style &&
          Ae(i.style) === "object" &&
          ((i.style.pointerEvents = s ? "none" : ""), (i.style.opacity = s ? u.toString() : ""));
      }),
      r
    );
  }
  return (
    et(t, e),
    _e(t, [
      {
        key: "attachListeners",
        value: function () {
          (window.addEventListener("scroll", this.handleScroll),
            window.addEventListener("resize", this.handleResize));
        },
      },
      {
        key: "detachListeners",
        value: function () {
          (window.removeEventListener("scroll", this.handleScroll),
            window.removeEventListener("resize", this.handleResize));
        },
      },
      {
        key: "updateSpinnerPosition",
        value: function () {
          var n,
            a,
            o = window.innerHeight,
            i = this.getTargetNode(),
            c = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!i || typeof i.getBoundingClientRect != "function" || !c)) {
            var s = i.getBoundingClientRect(),
              u = c.getBoundingClientRect(),
              l = u.height,
              d = this.isVerticallyVisible(s, o),
              p = s.top,
              v = s.bottom,
              g = s.height;
            if (d) {
              var f = g >= l * 3;
              if (f && !this.isFullyVerticallyVisible(s, o)) {
                if (p >= 0) {
                  var h = o - p,
                    b = h / 2 + p - l / 2,
                    _ = h < l * 3 ? p + l : b;
                  this.translateSpinner(c, _, !0);
                } else if (p < 0 && v > o) {
                  var y = o / 2 - l / 2;
                  this.translateSpinner(c, y, !0);
                } else {
                  var k = v / 2 - l / 2,
                    w = k < l ? k - (l - k) : k;
                  this.translateSpinner(c, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, o)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var E = S.getBoundingClientRect().top,
                A = (p - E) / 2;
              this.translateSpinner(c, A, !1);
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            c = n.testId,
            s = n.loadingLabel;
          return O.createElement(
            ik,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                sk,
                { testId: c },
                O.createElement(
                  ck,
                  { ref: this.spinnerRef },
                  O.createElement(Zc, {
                    size: i,
                    testId: c && "".concat(c, "--loadingSpinner"),
                    label: s,
                  }),
                ),
              ),
          );
        },
      },
    ])
  );
})(O.Component);
C(kg, "defaultProps", {
  isLoading: !0,
  spinnerSize: si,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(pg), ")"),
  loadingLabel: "Loading table",
});
function lk(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    a = W(n, 2),
    o = a[0],
    i = a[1],
    c = m.useRef(r);
  m.useEffect(
    function () {
      c.current = r;
    },
    [r],
  );
  var s = r ? e : o,
    u = m.useCallback(function (l) {
      c.current || i(l);
    }, []);
  return [s, u];
}
var Pa = {},
  dk = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  fk = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  vk = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  Uf = m.memo(function (t) {
    var r = t,
      n = r.color,
      a = n === void 0 ? "currentColor" : n,
      o = r.testId,
      i = r.label,
      c = r.dangerouslySetGlyph,
      s = r.shouldScale,
      u = r.spacing,
      l = u === void 0 ? "none" : u,
      d = r.name,
      p = c ? { __html: c } : void 0,
      v = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") v = t.size === "small" || t.size === "medium" ? t.size : v;
      else if (d) {
        var g = t.size(d);
        v = g === "small" || g === "medium" ? g : v;
      }
    }
    var f = 16,
      h = vk[v][l],
      b = f + 2 * h;
    return m.createElement(
      "span",
      {
        "data-testid": o,
        role: i ? "img" : void 0,
        "aria-label": i || void 0,
        "aria-hidden": i ? void 0 : !0,
        style: { color: a },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          s && "_1bsb1kw7 _4t3i1kw7",
          v === "small" && "_vwz4utpp",
        ]),
      },
      m.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - h, " ")
          .concat(0 - h, " ")
          .concat(b, " ")
          .concat(b),
        role: "presentation",
        dangerouslySetInnerHTML: p,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          s ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? fk[l] : dk[l],
        ]),
      }),
    );
  });
const pk = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Uf, default: Uf }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ti = vp(pk);
var qf;
function hk() {
  if (qf) return Pa;
  ((qf = 1), Object.defineProperty(Pa, "__esModule", { value: !0 }), (Pa.default = void 0));
  var e = r(Ir()),
    t = r(Ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronLeftIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m9.97 1.47-6 6a.75.75 0 0 0-.052 1.004l.052.056 6 6 1.06-1.06L5.56 8l5.47-5.47z"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronLeftIcon"), (Pa.default = n), Pa);
}
var gk = hk();
const bk = ur(gk);
var Ra = {},
  zf;
function _k() {
  if (zf) return Ra;
  ((zf = 1), Object.defineProperty(Ra, "__esModule", { value: !0 }), (Ra.default = void 0));
  var e = r(Ir()),
    t = r(Ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronRightIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m6.03 1.47 6 6a.75.75 0 0 1 .052 1.004l-.052.056-6 6-1.06-1.06L10.44 8 4.97 2.53z"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ChevronRightIcon"), (Ra.default = n), Ra);
}
var mk = _k();
const yk = ur(mk);
var Qc = m.createContext("elevation.surface"),
  wk = function () {
    return m.useContext(Qc);
  };
Qc.displayName = "SurfaceProvider";
var kk = [
    "as",
    "children",
    "backgroundColor",
    "padding",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "style",
    "testId",
    "xcss",
  ],
  Ok = ["className"],
  Sk = {
    "color.background.accent.lime.subtlest": "_bfhkm890",
    "color.background.accent.lime.subtlest.hovered": "_bfhkd4y8",
    "color.background.accent.lime.subtlest.pressed": "_bfhkkuup",
    "color.background.accent.lime.subtler": "_bfhkz2ec",
    "color.background.accent.lime.subtler.hovered": "_bfhk1gf0",
    "color.background.accent.lime.subtler.pressed": "_bfhk2kxc",
    "color.background.accent.lime.subtle": "_bfhkbq5w",
    "color.background.accent.lime.subtle.hovered": "_bfhkfoww",
    "color.background.accent.lime.subtle.pressed": "_bfhk1jbd",
    "color.background.accent.lime.bolder": "_bfhktde4",
    "color.background.accent.lime.bolder.hovered": "_bfhknzpa",
    "color.background.accent.lime.bolder.pressed": "_bfhkh0j0",
    "color.background.accent.red.subtlest": "_bfhk1vk5",
    "color.background.accent.red.subtlest.hovered": "_bfhk1i6i",
    "color.background.accent.red.subtlest.pressed": "_bfhknbir",
    "color.background.accent.red.subtler": "_bfhk1rtt",
    "color.background.accent.red.subtler.hovered": "_bfhkaffd",
    "color.background.accent.red.subtler.pressed": "_bfhk1j5a",
    "color.background.accent.red.subtle": "_bfhkkrt9",
    "color.background.accent.red.subtle.hovered": "_bfhk1sou",
    "color.background.accent.red.subtle.pressed": "_bfhk1fnn",
    "color.background.accent.red.bolder": "_bfhkuibq",
    "color.background.accent.red.bolder.hovered": "_bfhk100f",
    "color.background.accent.red.bolder.pressed": "_bfhk1cl6",
    "color.background.accent.orange.subtlest": "_bfhkf5uh",
    "color.background.accent.orange.subtlest.hovered": "_bfhk19yr",
    "color.background.accent.orange.subtlest.pressed": "_bfhkf90x",
    "color.background.accent.orange.subtler": "_bfhk165s",
    "color.background.accent.orange.subtler.hovered": "_bfhk1ei0",
    "color.background.accent.orange.subtler.pressed": "_bfhkdpo3",
    "color.background.accent.orange.subtle": "_bfhk1kkj",
    "color.background.accent.orange.subtle.hovered": "_bfhk9mfs",
    "color.background.accent.orange.subtle.pressed": "_bfhkaxpp",
    "color.background.accent.orange.bolder": "_bfhk1qg1",
    "color.background.accent.orange.bolder.hovered": "_bfhk12qo",
    "color.background.accent.orange.bolder.pressed": "_bfhk1fyq",
    "color.background.accent.yellow.subtlest": "_bfhkibhp",
    "color.background.accent.yellow.subtlest.hovered": "_bfhkaetg",
    "color.background.accent.yellow.subtlest.pressed": "_bfhk1o1l",
    "color.background.accent.yellow.subtler": "_bfhk1773",
    "color.background.accent.yellow.subtler.hovered": "_bfhk1uw7",
    "color.background.accent.yellow.subtler.pressed": "_bfhk1r9w",
    "color.background.accent.yellow.subtle": "_bfhk8y3s",
    "color.background.accent.yellow.subtle.hovered": "_bfhk819w",
    "color.background.accent.yellow.subtle.pressed": "_bfhk1jx0",
    "color.background.accent.yellow.bolder": "_bfhk1vop",
    "color.background.accent.yellow.bolder.hovered": "_bfhkkjqf",
    "color.background.accent.yellow.bolder.pressed": "_bfhk1okt",
    "color.background.accent.green.subtlest": "_bfhkn729",
    "color.background.accent.green.subtlest.hovered": "_bfhk3utz",
    "color.background.accent.green.subtlest.pressed": "_bfhkyfny",
    "color.background.accent.green.subtler": "_bfhk1wnw",
    "color.background.accent.green.subtler.hovered": "_bfhk1e2h",
    "color.background.accent.green.subtler.pressed": "_bfhkybhx",
    "color.background.accent.green.subtle": "_bfhk1rsu",
    "color.background.accent.green.subtle.hovered": "_bfhk12e3",
    "color.background.accent.green.subtle.pressed": "_bfhk1g86",
    "color.background.accent.green.bolder": "_bfhk1e5c",
    "color.background.accent.green.bolder.hovered": "_bfhka5yi",
    "color.background.accent.green.bolder.pressed": "_bfhk1j68",
    "color.background.accent.teal.subtlest": "_bfhk7xuz",
    "color.background.accent.teal.subtlest.hovered": "_bfhk108c",
    "color.background.accent.teal.subtlest.pressed": "_bfhk1cxp",
    "color.background.accent.teal.subtler": "_bfhk1a17",
    "color.background.accent.teal.subtler.hovered": "_bfhkkwwr",
    "color.background.accent.teal.subtler.pressed": "_bfhk1jb0",
    "color.background.accent.teal.subtle": "_bfhktdv8",
    "color.background.accent.teal.subtle.hovered": "_bfhkzh8h",
    "color.background.accent.teal.subtle.pressed": "_bfhk16zl",
    "color.background.accent.teal.bolder": "_bfhk2c8p",
    "color.background.accent.teal.bolder.hovered": "_bfhkl3ve",
    "color.background.accent.teal.bolder.pressed": "_bfhktor0",
    "color.background.accent.blue.subtlest": "_bfhk1s93",
    "color.background.accent.blue.subtlest.hovered": "_bfhkdaj9",
    "color.background.accent.blue.subtlest.pressed": "_bfhkxm0g",
    "color.background.accent.blue.subtler": "_bfhk1dy8",
    "color.background.accent.blue.subtler.hovered": "_bfhk815t",
    "color.background.accent.blue.subtler.pressed": "_bfhkrwxf",
    "color.background.accent.blue.subtle": "_bfhk115i",
    "color.background.accent.blue.subtle.hovered": "_bfhk9pr4",
    "color.background.accent.blue.subtle.pressed": "_bfhknpx7",
    "color.background.accent.blue.bolder": "_bfhk16e3",
    "color.background.accent.blue.bolder.hovered": "_bfhk1vbm",
    "color.background.accent.blue.bolder.pressed": "_bfhk1xwi",
    "color.background.accent.purple.subtlest": "_bfhkp2ly",
    "color.background.accent.purple.subtlest.hovered": "_bfhkkca2",
    "color.background.accent.purple.subtlest.pressed": "_bfhk1jbm",
    "color.background.accent.purple.subtler": "_bfhk1nm4",
    "color.background.accent.purple.subtler.hovered": "_bfhkattl",
    "color.background.accent.purple.subtler.pressed": "_bfhk3nfk",
    "color.background.accent.purple.subtle": "_bfhk18ah",
    "color.background.accent.purple.subtle.hovered": "_bfhk8bp1",
    "color.background.accent.purple.subtle.pressed": "_bfhk1cd2",
    "color.background.accent.purple.bolder": "_bfhkya33",
    "color.background.accent.purple.bolder.hovered": "_bfhk1af5",
    "color.background.accent.purple.bolder.pressed": "_bfhk6cze",
    "color.background.accent.magenta.subtlest": "_bfhk8tvm",
    "color.background.accent.magenta.subtlest.hovered": "_bfhkr3zd",
    "color.background.accent.magenta.subtlest.pressed": "_bfhk1ckf",
    "color.background.accent.magenta.subtler": "_bfhkv9ra",
    "color.background.accent.magenta.subtler.hovered": "_bfhk1axx",
    "color.background.accent.magenta.subtler.pressed": "_bfhk42ri",
    "color.background.accent.magenta.subtle": "_bfhk1mi6",
    "color.background.accent.magenta.subtle.hovered": "_bfhkrwyz",
    "color.background.accent.magenta.subtle.pressed": "_bfhk6c15",
    "color.background.accent.magenta.bolder": "_bfhkc3uk",
    "color.background.accent.magenta.bolder.hovered": "_bfhk1ok8",
    "color.background.accent.magenta.bolder.pressed": "_bfhkeawv",
    "color.background.accent.gray.subtlest": "_bfhkysee",
    "color.background.accent.gray.subtlest.hovered": "_bfhkwejn",
    "color.background.accent.gray.subtlest.pressed": "_bfhk18ut",
    "color.background.accent.gray.subtler": "_bfhk7qp0",
    "color.background.accent.gray.subtler.hovered": "_bfhk10ef",
    "color.background.accent.gray.subtler.pressed": "_bfhk1rk9",
    "color.background.accent.gray.subtle": "_bfhk18j9",
    "color.background.accent.gray.subtle.hovered": "_bfhk1nv3",
    "color.background.accent.gray.subtle.pressed": "_bfhkq9tj",
    "color.background.accent.gray.bolder": "_bfhk1i45",
    "color.background.accent.gray.bolder.hovered": "_bfhkbyip",
    "color.background.accent.gray.bolder.pressed": "_bfhk1van",
    "color.background.disabled": "_bfhkby5v",
    "color.background.input": "_bfhk1j9a",
    "color.background.input.hovered": "_bfhkl4ek",
    "color.background.input.pressed": "_bfhkr01l",
    "color.background.inverse.subtle": "_bfhk1vck",
    "color.background.inverse.subtle.hovered": "_bfhkmpja",
    "color.background.inverse.subtle.pressed": "_bfhk1gii",
    "color.background.neutral": "_bfhki8nm",
    "color.background.neutral.hovered": "_bfhkplhp",
    "color.background.neutral.pressed": "_bfhk1gdz",
    "color.background.neutral.subtle": "_bfhksm61",
    "color.background.neutral.subtle.hovered": "_bfhk1dpa",
    "color.background.neutral.subtle.pressed": "_bfhkfcek",
    "color.background.neutral.bold": "_bfhk1aqn",
    "color.background.neutral.bold.hovered": "_bfhk1ibz",
    "color.background.neutral.bold.pressed": "_bfhkof27",
    "color.background.selected": "_bfhk15s3",
    "color.background.selected.hovered": "_bfhkufnl",
    "color.background.selected.pressed": "_bfhknozp",
    "color.background.selected.bold": "_bfhkjmqp",
    "color.background.selected.bold.hovered": "_bfhk1q28",
    "color.background.selected.bold.pressed": "_bfhk12kk",
    "color.background.brand.subtlest": "_bfhk1gmr",
    "color.background.brand.subtlest.hovered": "_bfhk3v15",
    "color.background.brand.subtlest.pressed": "_bfhku02c",
    "color.background.brand.bold": "_bfhk1856",
    "color.background.brand.bold.hovered": "_bfhkhf2y",
    "color.background.brand.bold.pressed": "_bfhkg6ey",
    "color.background.brand.boldest": "_bfhk1o4i",
    "color.background.brand.boldest.hovered": "_bfhklefx",
    "color.background.brand.boldest.pressed": "_bfhk16k6",
    "color.background.danger": "_bfhk1gly",
    "color.background.danger.hovered": "_bfhk1yvi",
    "color.background.danger.pressed": "_bfhk1r4b",
    "color.background.danger.bold": "_bfhkybec",
    "color.background.danger.bold.hovered": "_bfhks9hg",
    "color.background.danger.bold.pressed": "_bfhk13a9",
    "color.background.warning": "_bfhk1917",
    "color.background.warning.hovered": "_bfhk19zu",
    "color.background.warning.pressed": "_bfhkzr32",
    "color.background.warning.bold": "_bfhk1kmu",
    "color.background.warning.bold.hovered": "_bfhk1spp",
    "color.background.warning.bold.pressed": "_bfhk4m4m",
    "color.background.success": "_bfhk1y9u",
    "color.background.success.hovered": "_bfhk1vfx",
    "color.background.success.pressed": "_bfhk1wl5",
    "color.background.success.bold": "_bfhkkcmj",
    "color.background.success.bold.hovered": "_bfhky7x8",
    "color.background.success.bold.pressed": "_bfhkwcbh",
    "color.background.discovery": "_bfhk6vm6",
    "color.background.discovery.hovered": "_bfhk12eq",
    "color.background.discovery.pressed": "_bfhk18vq",
    "color.background.discovery.bold": "_bfhku5tj",
    "color.background.discovery.bold.hovered": "_bfhkfqeg",
    "color.background.discovery.bold.pressed": "_bfhk1f1m",
    "color.background.information": "_bfhk19ip",
    "color.background.information.hovered": "_bfhk86z5",
    "color.background.information.pressed": "_bfhk1c1j",
    "color.background.information.bold": "_bfhkx4w0",
    "color.background.information.bold.hovered": "_bfhkq2ii",
    "color.background.information.bold.pressed": "_bfhkf89v",
    "color.blanket": "_bfhk1i5c",
    "color.blanket.selected": "_bfhk7wq0",
    "color.blanket.danger": "_bfhkrprw",
    "color.skeleton": "_bfhkizff",
    "color.skeleton.subtle": "_bfhkvkf5",
    "elevation.surface": "_bfhkvuon",
    "elevation.surface.hovered": "_bfhk19i6",
    "elevation.surface.pressed": "_bfhk13ro",
    "elevation.surface.overlay": "_bfhk1bhr",
    "elevation.surface.overlay.hovered": "_bfhk6o2t",
    "elevation.surface.overlay.pressed": "_bfhkm8nx",
    "elevation.surface.raised": "_bfhkhp5a",
    "elevation.surface.raised.hovered": "_bfhk116u",
    "elevation.surface.raised.pressed": "_bfhk14aj",
    "elevation.surface.sunken": "_bfhkhfxm",
    "utility.elevation.surface.current": "_bfhkchd4",
  },
  Og = {
    "elevation.surface": "_1q1lvuon",
    "elevation.surface.hovered": "_1q1l19i6",
    "elevation.surface.pressed": "_1q1l13ro",
    "elevation.surface.overlay": "_1q1l1bhr",
    "elevation.surface.overlay.hovered": "_1q1l6o2t",
    "elevation.surface.overlay.pressed": "_1q1lm8nx",
    "elevation.surface.raised": "_1q1lhp5a",
    "elevation.surface.raised.hovered": "_1q1l116u",
    "elevation.surface.raised.pressed": "_1q1l14aj",
    "elevation.surface.sunken": "_1q1lhfxm",
  },
  Ek = {
    "space.0": "_1q51ze3t",
    "space.025": "_1q51v77o",
    "space.050": "_1q511b66",
    "space.075": "_1q5112x7",
    "space.100": "_1q51u2gc",
    "space.150": "_1q51utpp",
    "space.200": "_1q51pxbi",
    "space.250": "_1q51v47k",
    "space.300": "_1q511ejb",
    "space.400": "_1q51xy5q",
    "space.500": "_1q511jfw",
    "space.600": "_1q51oahv",
    "space.800": "_1q51xncg",
    "space.1000": "_1q511epz",
  },
  xk = {
    "space.0": "_85i5ze3t",
    "space.025": "_85i5v77o",
    "space.050": "_85i51b66",
    "space.075": "_85i512x7",
    "space.100": "_85i5u2gc",
    "space.150": "_85i5utpp",
    "space.200": "_85i5pxbi",
    "space.250": "_85i5v47k",
    "space.300": "_85i51ejb",
    "space.400": "_85i5xy5q",
    "space.500": "_85i51jfw",
    "space.600": "_85i5oahv",
    "space.800": "_85i5xncg",
    "space.1000": "_85i51epz",
  },
  Ck = {
    "space.0": "_bozgze3t",
    "space.025": "_bozgv77o",
    "space.050": "_bozg1b66",
    "space.075": "_bozg12x7",
    "space.100": "_bozgu2gc",
    "space.150": "_bozgutpp",
    "space.200": "_bozgpxbi",
    "space.250": "_bozgv47k",
    "space.300": "_bozg1ejb",
    "space.400": "_bozgxy5q",
    "space.500": "_bozg1jfw",
    "space.600": "_bozgoahv",
    "space.800": "_bozgxncg",
    "space.1000": "_bozg1epz",
  },
  Pk = {
    "space.0": "_y4tize3t",
    "space.025": "_y4tiv77o",
    "space.050": "_y4ti1b66",
    "space.075": "_y4ti12x7",
    "space.100": "_y4tiu2gc",
    "space.150": "_y4tiutpp",
    "space.200": "_y4tipxbi",
    "space.250": "_y4tiv47k",
    "space.300": "_y4ti1ejb",
    "space.400": "_y4tixy5q",
    "space.500": "_y4ti1jfw",
    "space.600": "_y4tioahv",
    "space.800": "_y4tixncg",
    "space.1000": "_y4ti1epz",
  },
  Mi = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      o = e.backgroundColor,
      i = e.padding,
      c = e.paddingBlock,
      s = c === void 0 ? i : c,
      u = e.paddingBlockStart,
      l = u === void 0 ? s : u,
      d = e.paddingBlockEnd,
      p = d === void 0 ? s : d,
      v = e.paddingInline,
      g = v === void 0 ? i : v,
      f = e.paddingInlineStart,
      h = f === void 0 ? g : f,
      b = e.paddingInlineEnd,
      _ = b === void 0 ? g : b,
      y = e.style,
      k = e.testId,
      w = e.xcss,
      S = ie(e, kk);
    S.className;
    var E = ie(S, Ok),
      A = m.createElement(
        n,
        te(
          {
            style: y,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              o && Sk[o],
              o && Rk(o) && Og[o],
              l && Ek[l],
              p && xk[p],
              h && Ck[h],
              _ && Pk[_],
              w,
            ]),
          },
          E,
          { "data-testid": k },
        ),
        a,
      );
    return o ? m.createElement(Qc.Provider, { value: o }, A) : A;
  });
function Rk(e) {
  return e in Og;
}
const Ks = () =>
    new Error(`
 ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗██╗     ███████╗██████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║██║     ██╔════╝██╔══██╗
██║     ██║   ██║██╔████╔██║██████╔╝██║██║     █████╗  ██║  ██║
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║██║     ██╔══╝  ██║  ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║███████╗███████╗██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝

  @compiled/react

  Code was executed when it shouldn't have. To resolve make sure to:

  1. Set up Compiled.
  2. Configure importSources in your Compiled config to point to the module that exports the output of createStrictAPI().

  For more information visit https://compiledcssinjs.com/docs/installation and follow the instructions.
`),
  Sg = (...e) => R(e);
function Ak() {
  return {
    css() {
      throw Ks();
    },
    cssMap() {
      throw Ks();
    },
    cx: Sg,
    XCSSProp() {
      throw Ks();
    },
  };
}
var Ik = Ak(),
  Eg = Ik.cx,
  jk = [
    "as",
    "role",
    "alignItems",
    "justifyContent",
    "gap",
    "columnGap",
    "rowGap",
    "children",
    "testId",
    "direction",
    "wrap",
    "xcss",
  ],
  $f = {
    "space.0": "_1p57ze3t",
    "space.025": "_1p57v77o",
    "space.050": "_1p571b66",
    "space.075": "_1p5712x7",
    "space.100": "_1p57u2gc",
    "space.150": "_1p57utpp",
    "space.200": "_1p57pxbi",
    "space.250": "_1p57v47k",
    "space.300": "_1p571ejb",
    "space.400": "_1p57xy5q",
    "space.500": "_1p571jfw",
    "space.600": "_1p57oahv",
    "space.800": "_1p57xncg",
    "space.1000": "_1p571epz",
  },
  Vf = {
    "space.0": "_gy1pze3t",
    "space.025": "_gy1pv77o",
    "space.050": "_gy1p1b66",
    "space.075": "_gy1p12x7",
    "space.100": "_gy1pu2gc",
    "space.150": "_gy1putpp",
    "space.200": "_gy1ppxbi",
    "space.250": "_gy1pv47k",
    "space.300": "_gy1p1ejb",
    "space.400": "_gy1pxy5q",
    "space.500": "_gy1p1jfw",
    "space.600": "_gy1poahv",
    "space.800": "_gy1pxncg",
    "space.1000": "_gy1p1epz",
  },
  Dk = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Tk = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Mk = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Fk = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Nk = { root: "_1e0c1txw _vchhusvi" },
  ui = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        o = e.alignItems,
        i = e.justifyContent,
        c = e.gap,
        s = e.columnGap,
        u = e.rowGap,
        l = e.children,
        d = e.testId,
        p = e.direction,
        v = e.wrap,
        g = e.xcss,
        f = ie(e, jk);
      return m.createElement(
        n,
        te({}, f, {
          role: a,
          className: R([
            Nk.root,
            c && Vf[c],
            s && Vf[s],
            c && $f[c],
            u && $f[u],
            o && Fk[o],
            p && Tk[p],
            i && Dk[i],
            v && Mk[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ui.displayName = "Flex";
var Lk = [
    "as",
    "alignInline",
    "alignBlock",
    "shouldWrap",
    "spread",
    "grow",
    "space",
    "rowSpace",
    "separator",
    "xcss",
    "testId",
    "role",
    "children",
  ],
  Pc = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Bk = function (t) {
    var r = t.children;
    return m.createElement("span", { className: R([Pc.separator]) }, r);
  },
  Uo = m.memo(
    m.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        o = a === void 0 ? "start" : a,
        i = e.shouldWrap,
        c = i === void 0 ? !1 : i,
        s = e.spread,
        u = e.grow,
        l = e.space,
        d = e.rowSpace,
        p = e.separator,
        v = e.xcss,
        g = e.testId,
        f = e.role,
        h = e.children,
        b = ie(e, Lk),
        _ = typeof p == "string" ? m.createElement(Bk, null, p) : p,
        y = _
          ? m.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return m.createElement(m.Fragment, { key: w }, p && w > 0 ? _ : null, k);
              })
          : h;
      return m.createElement(
        ui,
        te({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: Eg(u === "hug" && Pc.hug, u === "fill" && Pc.fill, v),
          testId: g,
          ref: t,
        }),
        y,
      );
    }),
  );
Uo.displayName = "Inline";
var Uk = "Invariant failed";
function qk(e, t) {
  if (!e) throw new Error(Uk);
}
var xg = m.createContext(!1),
  zk = function () {
    return m.useContext(xg);
  },
  $k = xg.Provider,
  Vk = ["span", "p", "strong", "em"],
  Gk = function (t, r) {
    var n = wk();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Gf.hasOwnProperty(n) ? Gf[n] : "color.text";
    }
  },
  Kr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pwu06",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Hk = { medium: "_11c8fhey", UNSAFE_small: "_11c8rymc", large: "_11c81d4k", small: "_11c8wadc" },
  Wk = { bold: "_k48pwu06", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Kk = {
    "color.text": "_syazi7uo",
    "color.text.accent.lime": "_syaz1tco",
    "color.text.accent.lime.bolder": "_syaz1ik3",
    "color.text.accent.red": "_syaz9lu1",
    "color.text.accent.red.bolder": "_syazhwvp",
    "color.text.accent.orange": "_syazp1lv",
    "color.text.accent.orange.bolder": "_syaz7i1p",
    "color.text.accent.yellow": "_syazfb2s",
    "color.text.accent.yellow.bolder": "_syazekll",
    "color.text.accent.green": "_syazh55r",
    "color.text.accent.green.bolder": "_syaz1y78",
    "color.text.accent.teal": "_syaz17qg",
    "color.text.accent.teal.bolder": "_syaz12v7",
    "color.text.accent.blue": "_syaz16jw",
    "color.text.accent.blue.bolder": "_syaz1kyx",
    "color.text.accent.purple": "_syazqmo9",
    "color.text.accent.purple.bolder": "_syaz1mn1",
    "color.text.accent.magenta": "_syaz1s8m",
    "color.text.accent.magenta.bolder": "_syaz1qur",
    "color.text.accent.gray": "_syaz1sqi",
    "color.text.accent.gray.bolder": "_syaz1tmo",
    "color.text.disabled": "_syaz1gmx",
    "color.text.inverse": "_syaz15cr",
    "color.text.selected": "_syaz6x5g",
    "color.text.brand": "_syaz1oa5",
    "color.text.danger": "_syaz1tmw",
    "color.text.warning": "_syaz1xn9",
    "color.text.warning.inverse": "_syaz1yd3",
    "color.text.success": "_syazgsak",
    "color.text.discovery": "_syazdv2p",
    "color.text.information": "_syazu3tg",
    "color.text.subtlest": "_syaz1rpy",
    "color.text.subtle": "_syazazsu",
    "color.link": "_syaz13af",
    "color.link.pressed": "_syaz12zz",
    "color.link.visited": "_syaz1ra0",
    "color.link.visited.pressed": "_syaz17z1",
  },
  Gf = {
    "color.background.neutral.bold": "color.text.inverse",
    "color.background.neutral.bold.hovered": "color.text.inverse",
    "color.background.neutral.bold.pressed": "color.text.inverse",
    "color.background.selected.bold": "color.text.inverse",
    "color.background.selected.bold.hovered": "color.text.inverse",
    "color.background.selected.bold.pressed": "color.text.inverse",
    "color.background.brand.bold": "color.text.inverse",
    "color.background.brand.bold.hovered": "color.text.inverse",
    "color.background.brand.bold.pressed": "color.text.inverse",
    "color.background.brand.boldest": "color.text.inverse",
    "color.background.brand.boldest.hovered": "color.text.inverse",
    "color.background.brand.boldest.pressed": "color.text.inverse",
    "color.background.danger.bold": "color.text.inverse",
    "color.background.danger.bold.hovered": "color.text.inverse",
    "color.background.danger.bold.pressed": "color.text.inverse",
    "color.background.warning.bold": "color.text.warning.inverse",
    "color.background.warning.bold.hovered": "color.text.warning.inverse",
    "color.background.warning.bold.pressed": "color.text.warning.inverse",
    "color.background.success.bold": "color.text.inverse",
    "color.background.success.bold.hovered": "color.text.inverse",
    "color.background.success.bold.pressed": "color.text.inverse",
    "color.background.discovery.bold": "color.text.inverse",
    "color.background.discovery.bold.hovered": "color.text.inverse",
    "color.background.discovery.bold.pressed": "color.text.inverse",
    "color.background.information.bold": "color.text.inverse",
    "color.background.information.bold.hovered": "color.text.inverse",
    "color.background.information.bold.pressed": "color.text.inverse",
  },
  Cg = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      o = e.align,
      i = e.testId,
      c = e.id,
      s = e.size,
      u = e.weight,
      l = e.maxLines,
      d = e.xcss,
      p = e.children;
    qk(Vk.includes(n));
    var v = zk(),
      g = Gk(a, v);
    !s && !v && (s = "medium");
    var f = m.createElement(
      n,
      {
        id: c,
        className: R([
          Kr.root,
          s && Hk[s],
          g && Kk[g],
          l && Kr.truncation,
          l === 1 && Kr.breakAll,
          o && Kr["textAlign.".concat(o)],
          u && Wk[u],
          n === "em" && Kr["as.em"],
          n === "strong" && Kr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      p,
    );
    return v ? f : m.createElement($k, { value: !0 }, f);
  });
function Jk() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Yk = ["as", "children", "isInset", "testId", "style", "xcss"],
  Xk = ["className"],
  eu = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      u = ie(e, Yk);
    u.className;
    var l = ie(u, Xk);
    return m.createElement(
      n,
      te({}, l, {
        ref: t,
        className: R([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          o && "_1ah31gjf _2mwq1gjf",
          s,
        ]),
        style: c,
        "data-testid": i,
      }),
      a,
    );
  }),
  Zk = [
    "children",
    "isDisabled",
    "type",
    "onClick",
    "interactionName",
    "componentName",
    "analyticsContext",
    "style",
    "testId",
    "xcss",
    "tabIndex",
  ],
  Qk = ["className"],
  Hf = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Pg = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Ne : i,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = ie(e, Zk),
      h = m.useContext(Xc),
      b = m.useCallback(
        function (k, w) {
          (h && h.tracePress(s, k.timeStamp), c(k, w));
        },
        [c, h, s],
      ),
      _ = un({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ie(f, Qk);
    return m.createElement(
      eu,
      te({ as: "button", tabIndex: g ?? (Jk() && !n ? 0 : void 0), style: d }, y, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: Sg(Hf.root, n && Hf.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  eO = m.createContext(!1),
  tO = function () {
    return m.useContext(eO);
  },
  rO = m.createContext(!1),
  nO = function () {
    return m.useContext(rO);
  },
  Js = {},
  Aa = {},
  Wf;
function Rg() {
  if (Wf) return Aa;
  ((Wf = 1), Object.defineProperty(Aa, "__esModule", { value: !0 }), (Aa.bind = void 0));
  function e(t, r) {
    var n = r.type,
      a = r.listener,
      o = r.options;
    return (
      t.addEventListener(n, a, o),
      function () {
        t.removeEventListener(n, a, o);
      }
    );
  }
  return ((Aa.bind = e), Aa);
}
var kr = {},
  Kf;
function aO() {
  if (Kf) return kr;
  Kf = 1;
  var e =
    (kr && kr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (o) {
            for (var i, c = 1, s = arguments.length; c < s; c++) {
              i = arguments[c];
              for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (o[u] = i[u]);
            }
            return o;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(kr, "__esModule", { value: !0 }), (kr.bindAll = void 0));
  var t = Rg();
  function r(o) {
    if (!(typeof o > "u")) return typeof o == "boolean" ? { capture: o } : o;
  }
  function n(o, i) {
    if (i == null) return o;
    var c = e(e({}, o), { options: e(e({}, r(i)), r(o.options)) });
    return c;
  }
  function a(o, i, c) {
    var s = i.map(function (u) {
      var l = n(u, c);
      return (0, t.bind)(o, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return ((kr.bindAll = a), kr);
}
var Jf;
function oO() {
  return (
    Jf ||
      ((Jf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Rg();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = aO();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Js)),
    Js
  );
}
var Fr = oO(),
  iO = ["light", "dark", "auto"],
  sO = [
    "light-increased-contrast",
    "light",
    "light-future",
    "dark",
    "dark-future",
    "dark-increased-contrast",
    "spacing",
    "shape",
    "typography",
  ],
  cO = {
    "atlassian-light": {
      id: "light",
      displayName: "Light Theme",
      palette: "defaultPalette",
      attributes: { type: "color", mode: "light" },
    },
    "atlassian-light-future": {
      id: "light-future",
      displayName: "Future Light Theme",
      palette: "defaultPalette",
      attributes: { type: "color", mode: "light" },
      override: "light",
    },
    "atlassian-light-increased-contrast": {
      id: "light-increased-contrast",
      displayName: "Light Theme (increased contrast)",
      palette: "defaultPalette",
      attributes: { type: "color", mode: "light" },
      extends: "light",
      increasesContrastFor: "light",
    },
    "atlassian-dark": {
      id: "dark",
      displayName: "Dark Theme",
      palette: "defaultPalette",
      attributes: { type: "color", mode: "dark" },
    },
    "atlassian-dark-future": {
      id: "dark-future",
      displayName: "Future Dark Theme",
      palette: "defaultPalette",
      attributes: { type: "color", mode: "dark" },
      override: "light",
    },
    "atlassian-dark-increased-contrast": {
      id: "dark-increased-contrast",
      displayName: "Dark Theme (increased contrast)",
      palette: "defaultPalette",
      attributes: { type: "color", mode: "dark" },
      extends: "dark",
      increasesContrastFor: "dark",
    },
    "atlassian-spacing": {
      id: "spacing",
      displayName: "Atlassian Spacing",
      palette: "spacingScale",
      attributes: { type: "spacing" },
    },
    "atlassian-typography": {
      id: "typography",
      displayName: "Atlassian Typography",
      palette: "typographyPalette",
      attributes: { type: "typography" },
    },
    "atlassian-shape": {
      id: "shape",
      displayName: "Shape",
      palette: "shapePalette",
      attributes: { type: "shape" },
    },
  },
  ye = {
    colorMode: "auto",
    contrastMode: "auto",
    dark: "dark",
    light: "light",
    shape: function () {
      if (J("platform-dst-shape-theme-default")) return "shape";
    },
    spacing: "spacing",
    typography: "typography",
    UNSAFE_themeOptions: void 0,
  },
  Ag = {
    "color.text": "--ds-text",
    "color.text.accent.lime": "--ds-text-accent-lime",
    "color.text.accent.lime.bolder": "--ds-text-accent-lime-bolder",
    "color.text.accent.red": "--ds-text-accent-red",
    "color.text.accent.red.bolder": "--ds-text-accent-red-bolder",
    "color.text.accent.orange": "--ds-text-accent-orange",
    "color.text.accent.orange.bolder": "--ds-text-accent-orange-bolder",
    "color.text.accent.yellow": "--ds-text-accent-yellow",
    "color.text.accent.yellow.bolder": "--ds-text-accent-yellow-bolder",
    "color.text.accent.green": "--ds-text-accent-green",
    "color.text.accent.green.bolder": "--ds-text-accent-green-bolder",
    "color.text.accent.teal": "--ds-text-accent-teal",
    "color.text.accent.teal.bolder": "--ds-text-accent-teal-bolder",
    "color.text.accent.blue": "--ds-text-accent-blue",
    "color.text.accent.blue.bolder": "--ds-text-accent-blue-bolder",
    "color.text.accent.purple": "--ds-text-accent-purple",
    "color.text.accent.purple.bolder": "--ds-text-accent-purple-bolder",
    "color.text.accent.magenta": "--ds-text-accent-magenta",
    "color.text.accent.magenta.bolder": "--ds-text-accent-magenta-bolder",
    "color.text.accent.gray": "--ds-text-accent-gray",
    "color.text.accent.gray.bolder": "--ds-text-accent-gray-bolder",
    "color.text.disabled": "--ds-text-disabled",
    "color.text.inverse": "--ds-text-inverse",
    "color.text.selected": "--ds-text-selected",
    "color.text.brand": "--ds-text-brand",
    "color.text.danger": "--ds-text-danger",
    "color.text.danger.bolder": "--ds-text-danger-bolder",
    "color.text.warning": "--ds-text-warning",
    "color.text.warning.inverse": "--ds-text-warning-inverse",
    "color.text.warning.bolder": "--ds-text-warning-bolder",
    "color.text.success": "--ds-text-success",
    "color.text.success.bolder": "--ds-text-success-bolder",
    "color.text.discovery": "--ds-text-discovery",
    "color.text.discovery.bolder": "--ds-text-discovery-bolder",
    "color.text.information": "--ds-text-information",
    "color.text.information.bolder": "--ds-text-information-bolder",
    "color.text.subtlest": "--ds-text-subtlest",
    "color.text.subtle": "--ds-text-subtle",
    "color.link": "--ds-link",
    "color.link.pressed": "--ds-link-pressed",
    "color.link.visited": "--ds-link-visited",
    "color.link.visited.pressed": "--ds-link-visited-pressed",
    "color.icon": "--ds-icon",
    "color.icon.accent.lime": "--ds-icon-accent-lime",
    "color.icon.accent.red": "--ds-icon-accent-red",
    "color.icon.accent.orange": "--ds-icon-accent-orange",
    "color.icon.accent.yellow": "--ds-icon-accent-yellow",
    "color.icon.accent.green": "--ds-icon-accent-green",
    "color.icon.accent.teal": "--ds-icon-accent-teal",
    "color.icon.accent.blue": "--ds-icon-accent-blue",
    "color.icon.accent.purple": "--ds-icon-accent-purple",
    "color.icon.accent.magenta": "--ds-icon-accent-magenta",
    "color.icon.accent.gray": "--ds-icon-accent-gray",
    "color.icon.disabled": "--ds-icon-disabled",
    "color.icon.inverse": "--ds-icon-inverse",
    "color.icon.selected": "--ds-icon-selected",
    "color.icon.brand": "--ds-icon-brand",
    "color.icon.danger": "--ds-icon-danger",
    "color.icon.warning": "--ds-icon-warning",
    "color.icon.warning.inverse": "--ds-icon-warning-inverse",
    "color.icon.success": "--ds-icon-success",
    "color.icon.discovery": "--ds-icon-discovery",
    "color.icon.information": "--ds-icon-information",
    "color.icon.subtlest": "--ds-icon-subtlest",
    "color.icon.subtle": "--ds-icon-subtle",
    "color.border": "--ds-border",
    "color.border.accent.lime": "--ds-border-accent-lime",
    "color.border.accent.red": "--ds-border-accent-red",
    "color.border.accent.orange": "--ds-border-accent-orange",
    "color.border.accent.yellow": "--ds-border-accent-yellow",
    "color.border.accent.green": "--ds-border-accent-green",
    "color.border.accent.teal": "--ds-border-accent-teal",
    "color.border.accent.blue": "--ds-border-accent-blue",
    "color.border.accent.purple": "--ds-border-accent-purple",
    "color.border.accent.magenta": "--ds-border-accent-magenta",
    "color.border.accent.gray": "--ds-border-accent-gray",
    "color.border.disabled": "--ds-border-disabled",
    "color.border.focused": "--ds-border-focused",
    "color.border.input": "--ds-border-input",
    "color.border.inverse": "--ds-border-inverse",
    "color.border.selected": "--ds-border-selected",
    "color.border.brand": "--ds-border-brand",
    "color.border.danger": "--ds-border-danger",
    "color.border.warning": "--ds-border-warning",
    "color.border.success": "--ds-border-success",
    "color.border.discovery": "--ds-border-discovery",
    "color.border.information": "--ds-border-information",
    "color.border.bold": "--ds-border-bold",
    "color.background.accent.lime.subtlest": "--ds-background-accent-lime-subtlest",
    "color.background.accent.lime.subtlest.hovered": "--ds-background-accent-lime-subtlest-hovered",
    "color.background.accent.lime.subtlest.pressed": "--ds-background-accent-lime-subtlest-pressed",
    "color.background.accent.lime.subtler": "--ds-background-accent-lime-subtler",
    "color.background.accent.lime.subtler.hovered": "--ds-background-accent-lime-subtler-hovered",
    "color.background.accent.lime.subtler.pressed": "--ds-background-accent-lime-subtler-pressed",
    "color.background.accent.lime.subtle": "--ds-background-accent-lime-subtle",
    "color.background.accent.lime.subtle.hovered": "--ds-background-accent-lime-subtle-hovered",
    "color.background.accent.lime.subtle.pressed": "--ds-background-accent-lime-subtle-pressed",
    "color.background.accent.lime.bolder": "--ds-background-accent-lime-bolder",
    "color.background.accent.lime.bolder.hovered": "--ds-background-accent-lime-bolder-hovered",
    "color.background.accent.lime.bolder.pressed": "--ds-background-accent-lime-bolder-pressed",
    "color.background.accent.red.subtlest": "--ds-background-accent-red-subtlest",
    "color.background.accent.red.subtlest.hovered": "--ds-background-accent-red-subtlest-hovered",
    "color.background.accent.red.subtlest.pressed": "--ds-background-accent-red-subtlest-pressed",
    "color.background.accent.red.subtler": "--ds-background-accent-red-subtler",
    "color.background.accent.red.subtler.hovered": "--ds-background-accent-red-subtler-hovered",
    "color.background.accent.red.subtler.pressed": "--ds-background-accent-red-subtler-pressed",
    "color.background.accent.red.subtle": "--ds-background-accent-red-subtle",
    "color.background.accent.red.subtle.hovered": "--ds-background-accent-red-subtle-hovered",
    "color.background.accent.red.subtle.pressed": "--ds-background-accent-red-subtle-pressed",
    "color.background.accent.red.bolder": "--ds-background-accent-red-bolder",
    "color.background.accent.red.bolder.hovered": "--ds-background-accent-red-bolder-hovered",
    "color.background.accent.red.bolder.pressed": "--ds-background-accent-red-bolder-pressed",
    "color.background.accent.orange.subtlest": "--ds-background-accent-orange-subtlest",
    "color.background.accent.orange.subtlest.hovered":
      "--ds-background-accent-orange-subtlest-hovered",
    "color.background.accent.orange.subtlest.pressed":
      "--ds-background-accent-orange-subtlest-pressed",
    "color.background.accent.orange.subtler": "--ds-background-accent-orange-subtler",
    "color.background.accent.orange.subtler.hovered":
      "--ds-background-accent-orange-subtler-hovered",
    "color.background.accent.orange.subtler.pressed":
      "--ds-background-accent-orange-subtler-pressed",
    "color.background.accent.orange.subtle": "--ds-background-accent-orange-subtle",
    "color.background.accent.orange.subtle.hovered": "--ds-background-accent-orange-subtle-hovered",
    "color.background.accent.orange.subtle.pressed": "--ds-background-accent-orange-subtle-pressed",
    "color.background.accent.orange.bolder": "--ds-background-accent-orange-bolder",
    "color.background.accent.orange.bolder.hovered": "--ds-background-accent-orange-bolder-hovered",
    "color.background.accent.orange.bolder.pressed": "--ds-background-accent-orange-bolder-pressed",
    "color.background.accent.yellow.subtlest": "--ds-background-accent-yellow-subtlest",
    "color.background.accent.yellow.subtlest.hovered":
      "--ds-background-accent-yellow-subtlest-hovered",
    "color.background.accent.yellow.subtlest.pressed":
      "--ds-background-accent-yellow-subtlest-pressed",
    "color.background.accent.yellow.subtler": "--ds-background-accent-yellow-subtler",
    "color.background.accent.yellow.subtler.hovered":
      "--ds-background-accent-yellow-subtler-hovered",
    "color.background.accent.yellow.subtler.pressed":
      "--ds-background-accent-yellow-subtler-pressed",
    "color.background.accent.yellow.subtle": "--ds-background-accent-yellow-subtle",
    "color.background.accent.yellow.subtle.hovered": "--ds-background-accent-yellow-subtle-hovered",
    "color.background.accent.yellow.subtle.pressed": "--ds-background-accent-yellow-subtle-pressed",
    "color.background.accent.yellow.bolder": "--ds-background-accent-yellow-bolder",
    "color.background.accent.yellow.bolder.hovered": "--ds-background-accent-yellow-bolder-hovered",
    "color.background.accent.yellow.bolder.pressed": "--ds-background-accent-yellow-bolder-pressed",
    "color.background.accent.green.subtlest": "--ds-background-accent-green-subtlest",
    "color.background.accent.green.subtlest.hovered":
      "--ds-background-accent-green-subtlest-hovered",
    "color.background.accent.green.subtlest.pressed":
      "--ds-background-accent-green-subtlest-pressed",
    "color.background.accent.green.subtler": "--ds-background-accent-green-subtler",
    "color.background.accent.green.subtler.hovered": "--ds-background-accent-green-subtler-hovered",
    "color.background.accent.green.subtler.pressed": "--ds-background-accent-green-subtler-pressed",
    "color.background.accent.green.subtle": "--ds-background-accent-green-subtle",
    "color.background.accent.green.subtle.hovered": "--ds-background-accent-green-subtle-hovered",
    "color.background.accent.green.subtle.pressed": "--ds-background-accent-green-subtle-pressed",
    "color.background.accent.green.bolder": "--ds-background-accent-green-bolder",
    "color.background.accent.green.bolder.hovered": "--ds-background-accent-green-bolder-hovered",
    "color.background.accent.green.bolder.pressed": "--ds-background-accent-green-bolder-pressed",
    "color.background.accent.teal.subtlest": "--ds-background-accent-teal-subtlest",
    "color.background.accent.teal.subtlest.hovered": "--ds-background-accent-teal-subtlest-hovered",
    "color.background.accent.teal.subtlest.pressed": "--ds-background-accent-teal-subtlest-pressed",
    "color.background.accent.teal.subtler": "--ds-background-accent-teal-subtler",
    "color.background.accent.teal.subtler.hovered": "--ds-background-accent-teal-subtler-hovered",
    "color.background.accent.teal.subtler.pressed": "--ds-background-accent-teal-subtler-pressed",
    "color.background.accent.teal.subtle": "--ds-background-accent-teal-subtle",
    "color.background.accent.teal.subtle.hovered": "--ds-background-accent-teal-subtle-hovered",
    "color.background.accent.teal.subtle.pressed": "--ds-background-accent-teal-subtle-pressed",
    "color.background.accent.teal.bolder": "--ds-background-accent-teal-bolder",
    "color.background.accent.teal.bolder.hovered": "--ds-background-accent-teal-bolder-hovered",
    "color.background.accent.teal.bolder.pressed": "--ds-background-accent-teal-bolder-pressed",
    "color.background.accent.blue.subtlest": "--ds-background-accent-blue-subtlest",
    "color.background.accent.blue.subtlest.hovered": "--ds-background-accent-blue-subtlest-hovered",
    "color.background.accent.blue.subtlest.pressed": "--ds-background-accent-blue-subtlest-pressed",
    "color.background.accent.blue.subtler": "--ds-background-accent-blue-subtler",
    "color.background.accent.blue.subtler.hovered": "--ds-background-accent-blue-subtler-hovered",
    "color.background.accent.blue.subtler.pressed": "--ds-background-accent-blue-subtler-pressed",
    "color.background.accent.blue.subtle": "--ds-background-accent-blue-subtle",
    "color.background.accent.blue.subtle.hovered": "--ds-background-accent-blue-subtle-hovered",
    "color.background.accent.blue.subtle.pressed": "--ds-background-accent-blue-subtle-pressed",
    "color.background.accent.blue.bolder": "--ds-background-accent-blue-bolder",
    "color.background.accent.blue.bolder.hovered": "--ds-background-accent-blue-bolder-hovered",
    "color.background.accent.blue.bolder.pressed": "--ds-background-accent-blue-bolder-pressed",
    "color.background.accent.purple.subtlest": "--ds-background-accent-purple-subtlest",
    "color.background.accent.purple.subtlest.hovered":
      "--ds-background-accent-purple-subtlest-hovered",
    "color.background.accent.purple.subtlest.pressed":
      "--ds-background-accent-purple-subtlest-pressed",
    "color.background.accent.purple.subtler": "--ds-background-accent-purple-subtler",
    "color.background.accent.purple.subtler.hovered":
      "--ds-background-accent-purple-subtler-hovered",
    "color.background.accent.purple.subtler.pressed":
      "--ds-background-accent-purple-subtler-pressed",
    "color.background.accent.purple.subtle": "--ds-background-accent-purple-subtle",
    "color.background.accent.purple.subtle.hovered": "--ds-background-accent-purple-subtle-hovered",
    "color.background.accent.purple.subtle.pressed": "--ds-background-accent-purple-subtle-pressed",
    "color.background.accent.purple.bolder": "--ds-background-accent-purple-bolder",
    "color.background.accent.purple.bolder.hovered": "--ds-background-accent-purple-bolder-hovered",
    "color.background.accent.purple.bolder.pressed": "--ds-background-accent-purple-bolder-pressed",
    "color.background.accent.magenta.subtlest": "--ds-background-accent-magenta-subtlest",
    "color.background.accent.magenta.subtlest.hovered":
      "--ds-background-accent-magenta-subtlest-hovered",
    "color.background.accent.magenta.subtlest.pressed":
      "--ds-background-accent-magenta-subtlest-pressed",
    "color.background.accent.magenta.subtler": "--ds-background-accent-magenta-subtler",
    "color.background.accent.magenta.subtler.hovered":
      "--ds-background-accent-magenta-subtler-hovered",
    "color.background.accent.magenta.subtler.pressed":
      "--ds-background-accent-magenta-subtler-pressed",
    "color.background.accent.magenta.subtle": "--ds-background-accent-magenta-subtle",
    "color.background.accent.magenta.subtle.hovered":
      "--ds-background-accent-magenta-subtle-hovered",
    "color.background.accent.magenta.subtle.pressed":
      "--ds-background-accent-magenta-subtle-pressed",
    "color.background.accent.magenta.bolder": "--ds-background-accent-magenta-bolder",
    "color.background.accent.magenta.bolder.hovered":
      "--ds-background-accent-magenta-bolder-hovered",
    "color.background.accent.magenta.bolder.pressed":
      "--ds-background-accent-magenta-bolder-pressed",
    "color.background.accent.gray.subtlest": "--ds-background-accent-gray-subtlest",
    "color.background.accent.gray.subtlest.hovered": "--ds-background-accent-gray-subtlest-hovered",
    "color.background.accent.gray.subtlest.pressed": "--ds-background-accent-gray-subtlest-pressed",
    "color.background.accent.gray.subtler": "--ds-background-accent-gray-subtler",
    "color.background.accent.gray.subtler.hovered": "--ds-background-accent-gray-subtler-hovered",
    "color.background.accent.gray.subtler.pressed": "--ds-background-accent-gray-subtler-pressed",
    "color.background.accent.gray.subtle": "--ds-background-accent-gray-subtle",
    "color.background.accent.gray.subtle.hovered": "--ds-background-accent-gray-subtle-hovered",
    "color.background.accent.gray.subtle.pressed": "--ds-background-accent-gray-subtle-pressed",
    "color.background.accent.gray.bolder": "--ds-background-accent-gray-bolder",
    "color.background.accent.gray.bolder.hovered": "--ds-background-accent-gray-bolder-hovered",
    "color.background.accent.gray.bolder.pressed": "--ds-background-accent-gray-bolder-pressed",
    "color.background.disabled": "--ds-background-disabled",
    "color.background.input": "--ds-background-input",
    "color.background.input.hovered": "--ds-background-input-hovered",
    "color.background.input.pressed": "--ds-background-input-pressed",
    "color.background.inverse.subtle": "--ds-background-inverse-subtle",
    "color.background.inverse.subtle.hovered": "--ds-background-inverse-subtle-hovered",
    "color.background.inverse.subtle.pressed": "--ds-background-inverse-subtle-pressed",
    "color.background.neutral": "--ds-background-neutral",
    "color.background.neutral.hovered": "--ds-background-neutral-hovered",
    "color.background.neutral.pressed": "--ds-background-neutral-pressed",
    "color.background.neutral.subtle": "--ds-background-neutral-subtle",
    "color.background.neutral.subtle.hovered": "--ds-background-neutral-subtle-hovered",
    "color.background.neutral.subtle.pressed": "--ds-background-neutral-subtle-pressed",
    "color.background.neutral.bold": "--ds-background-neutral-bold",
    "color.background.neutral.bold.hovered": "--ds-background-neutral-bold-hovered",
    "color.background.neutral.bold.pressed": "--ds-background-neutral-bold-pressed",
    "color.background.selected": "--ds-background-selected",
    "color.background.selected.hovered": "--ds-background-selected-hovered",
    "color.background.selected.pressed": "--ds-background-selected-pressed",
    "color.background.selected.bold": "--ds-background-selected-bold",
    "color.background.selected.bold.hovered": "--ds-background-selected-bold-hovered",
    "color.background.selected.bold.pressed": "--ds-background-selected-bold-pressed",
    "color.background.brand.subtlest": "--ds-background-brand-subtlest",
    "color.background.brand.subtlest.hovered": "--ds-background-brand-subtlest-hovered",
    "color.background.brand.subtlest.pressed": "--ds-background-brand-subtlest-pressed",
    "color.background.brand.bold": "--ds-background-brand-bold",
    "color.background.brand.bold.hovered": "--ds-background-brand-bold-hovered",
    "color.background.brand.bold.pressed": "--ds-background-brand-bold-pressed",
    "color.background.brand.boldest": "--ds-background-brand-boldest",
    "color.background.brand.boldest.hovered": "--ds-background-brand-boldest-hovered",
    "color.background.brand.boldest.pressed": "--ds-background-brand-boldest-pressed",
    "color.background.danger": "--ds-background-danger",
    "color.background.danger.hovered": "--ds-background-danger-hovered",
    "color.background.danger.pressed": "--ds-background-danger-pressed",
    "color.background.danger.subtler": "--ds-background-danger-subtler",
    "color.background.danger.subtler.hovered": "--ds-background-danger-subtler-hovered",
    "color.background.danger.subtler.pressed": "--ds-background-danger-subtler-pressed",
    "color.background.danger.bold": "--ds-background-danger-bold",
    "color.background.danger.bold.hovered": "--ds-background-danger-bold-hovered",
    "color.background.danger.bold.pressed": "--ds-background-danger-bold-pressed",
    "color.background.warning": "--ds-background-warning",
    "color.background.warning.hovered": "--ds-background-warning-hovered",
    "color.background.warning.pressed": "--ds-background-warning-pressed",
    "color.background.warning.subtler": "--ds-background-warning-subtler",
    "color.background.warning.subtler.hovered": "--ds-background-warning-subtler-hovered",
    "color.background.warning.subtler.pressed": "--ds-background-warning-subtler-pressed",
    "color.background.warning.bold": "--ds-background-warning-bold",
    "color.background.warning.bold.hovered": "--ds-background-warning-bold-hovered",
    "color.background.warning.bold.pressed": "--ds-background-warning-bold-pressed",
    "color.background.success": "--ds-background-success",
    "color.background.success.hovered": "--ds-background-success-hovered",
    "color.background.success.pressed": "--ds-background-success-pressed",
    "color.background.success.subtler": "--ds-background-success-subtler",
    "color.background.success.subtler.hovered": "--ds-background-success-subtler-hovered",
    "color.background.success.subtler.pressed": "--ds-background-success-subtler-pressed",
    "color.background.success.bold": "--ds-background-success-bold",
    "color.background.success.bold.hovered": "--ds-background-success-bold-hovered",
    "color.background.success.bold.pressed": "--ds-background-success-bold-pressed",
    "color.background.discovery": "--ds-background-discovery",
    "color.background.discovery.hovered": "--ds-background-discovery-hovered",
    "color.background.discovery.pressed": "--ds-background-discovery-pressed",
    "color.background.discovery.subtler": "--ds-background-discovery-subtler",
    "color.background.discovery.subtler.hovered": "--ds-background-discovery-subtler-hovered",
    "color.background.discovery.subtler.pressed": "--ds-background-discovery-subtler-pressed",
    "color.background.discovery.bold": "--ds-background-discovery-bold",
    "color.background.discovery.bold.hovered": "--ds-background-discovery-bold-hovered",
    "color.background.discovery.bold.pressed": "--ds-background-discovery-bold-pressed",
    "color.background.information": "--ds-background-information",
    "color.background.information.hovered": "--ds-background-information-hovered",
    "color.background.information.pressed": "--ds-background-information-pressed",
    "color.background.information.subtler": "--ds-background-information-subtler",
    "color.background.information.subtler.hovered": "--ds-background-information-subtler-hovered",
    "color.background.information.subtler.pressed": "--ds-background-information-subtler-pressed",
    "color.background.information.bold": "--ds-background-information-bold",
    "color.background.information.bold.hovered": "--ds-background-information-bold-hovered",
    "color.background.information.bold.pressed": "--ds-background-information-bold-pressed",
    "color.blanket": "--ds-blanket",
    "color.blanket.selected": "--ds-blanket-selected",
    "color.blanket.danger": "--ds-blanket-danger",
    "color.interaction.hovered": "--ds-interaction-hovered",
    "color.interaction.pressed": "--ds-interaction-pressed",
    "color.skeleton": "--ds-skeleton",
    "color.skeleton.subtle": "--ds-skeleton-subtle",
    "color.chart.categorical.1": "--ds-chart-categorical-1",
    "color.chart.categorical.1.hovered": "--ds-chart-categorical-1-hovered",
    "color.chart.categorical.2": "--ds-chart-categorical-2",
    "color.chart.categorical.2.hovered": "--ds-chart-categorical-2-hovered",
    "color.chart.categorical.3": "--ds-chart-categorical-3",
    "color.chart.categorical.3.hovered": "--ds-chart-categorical-3-hovered",
    "color.chart.categorical.4": "--ds-chart-categorical-4",
    "color.chart.categorical.4.hovered": "--ds-chart-categorical-4-hovered",
    "color.chart.categorical.5": "--ds-chart-categorical-5",
    "color.chart.categorical.5.hovered": "--ds-chart-categorical-5-hovered",
    "color.chart.categorical.6": "--ds-chart-categorical-6",
    "color.chart.categorical.6.hovered": "--ds-chart-categorical-6-hovered",
    "color.chart.categorical.7": "--ds-chart-categorical-7",
    "color.chart.categorical.7.hovered": "--ds-chart-categorical-7-hovered",
    "color.chart.categorical.8": "--ds-chart-categorical-8",
    "color.chart.categorical.8.hovered": "--ds-chart-categorical-8-hovered",
    "color.chart.lime.bold": "--ds-chart-lime-bold",
    "color.chart.lime.bold.hovered": "--ds-chart-lime-bold-hovered",
    "color.chart.lime.bolder": "--ds-chart-lime-bolder",
    "color.chart.lime.bolder.hovered": "--ds-chart-lime-bolder-hovered",
    "color.chart.lime.boldest": "--ds-chart-lime-boldest",
    "color.chart.lime.boldest.hovered": "--ds-chart-lime-boldest-hovered",
    "color.chart.neutral": "--ds-chart-neutral",
    "color.chart.neutral.hovered": "--ds-chart-neutral-hovered",
    "color.chart.red.bold": "--ds-chart-red-bold",
    "color.chart.red.bold.hovered": "--ds-chart-red-bold-hovered",
    "color.chart.red.bolder": "--ds-chart-red-bolder",
    "color.chart.red.bolder.hovered": "--ds-chart-red-bolder-hovered",
    "color.chart.red.boldest": "--ds-chart-red-boldest",
    "color.chart.red.boldest.hovered": "--ds-chart-red-boldest-hovered",
    "color.chart.orange.bold": "--ds-chart-orange-bold",
    "color.chart.orange.bold.hovered": "--ds-chart-orange-bold-hovered",
    "color.chart.orange.bolder": "--ds-chart-orange-bolder",
    "color.chart.orange.bolder.hovered": "--ds-chart-orange-bolder-hovered",
    "color.chart.orange.boldest": "--ds-chart-orange-boldest",
    "color.chart.orange.boldest.hovered": "--ds-chart-orange-boldest-hovered",
    "color.chart.yellow.bold": "--ds-chart-yellow-bold",
    "color.chart.yellow.bold.hovered": "--ds-chart-yellow-bold-hovered",
    "color.chart.yellow.bolder": "--ds-chart-yellow-bolder",
    "color.chart.yellow.bolder.hovered": "--ds-chart-yellow-bolder-hovered",
    "color.chart.yellow.boldest": "--ds-chart-yellow-boldest",
    "color.chart.yellow.boldest.hovered": "--ds-chart-yellow-boldest-hovered",
    "color.chart.green.bold": "--ds-chart-green-bold",
    "color.chart.green.bold.hovered": "--ds-chart-green-bold-hovered",
    "color.chart.green.bolder": "--ds-chart-green-bolder",
    "color.chart.green.bolder.hovered": "--ds-chart-green-bolder-hovered",
    "color.chart.green.boldest": "--ds-chart-green-boldest",
    "color.chart.green.boldest.hovered": "--ds-chart-green-boldest-hovered",
    "color.chart.teal.bold": "--ds-chart-teal-bold",
    "color.chart.teal.bold.hovered": "--ds-chart-teal-bold-hovered",
    "color.chart.teal.bolder": "--ds-chart-teal-bolder",
    "color.chart.teal.bolder.hovered": "--ds-chart-teal-bolder-hovered",
    "color.chart.teal.boldest": "--ds-chart-teal-boldest",
    "color.chart.teal.boldest.hovered": "--ds-chart-teal-boldest-hovered",
    "color.chart.blue.bold": "--ds-chart-blue-bold",
    "color.chart.blue.bold.hovered": "--ds-chart-blue-bold-hovered",
    "color.chart.blue.bolder": "--ds-chart-blue-bolder",
    "color.chart.blue.bolder.hovered": "--ds-chart-blue-bolder-hovered",
    "color.chart.blue.boldest": "--ds-chart-blue-boldest",
    "color.chart.blue.boldest.hovered": "--ds-chart-blue-boldest-hovered",
    "color.chart.purple.bold": "--ds-chart-purple-bold",
    "color.chart.purple.bold.hovered": "--ds-chart-purple-bold-hovered",
    "color.chart.purple.bolder": "--ds-chart-purple-bolder",
    "color.chart.purple.bolder.hovered": "--ds-chart-purple-bolder-hovered",
    "color.chart.purple.boldest": "--ds-chart-purple-boldest",
    "color.chart.purple.boldest.hovered": "--ds-chart-purple-boldest-hovered",
    "color.chart.magenta.bold": "--ds-chart-magenta-bold",
    "color.chart.magenta.bold.hovered": "--ds-chart-magenta-bold-hovered",
    "color.chart.magenta.bolder": "--ds-chart-magenta-bolder",
    "color.chart.magenta.bolder.hovered": "--ds-chart-magenta-bolder-hovered",
    "color.chart.magenta.boldest": "--ds-chart-magenta-boldest",
    "color.chart.magenta.boldest.hovered": "--ds-chart-magenta-boldest-hovered",
    "color.chart.gray.bold": "--ds-chart-gray-bold",
    "color.chart.gray.bold.hovered": "--ds-chart-gray-bold-hovered",
    "color.chart.gray.bolder": "--ds-chart-gray-bolder",
    "color.chart.gray.bolder.hovered": "--ds-chart-gray-bolder-hovered",
    "color.chart.gray.boldest": "--ds-chart-gray-boldest",
    "color.chart.gray.boldest.hovered": "--ds-chart-gray-boldest-hovered",
    "color.chart.brand": "--ds-chart-brand",
    "color.chart.brand.hovered": "--ds-chart-brand-hovered",
    "color.chart.danger": "--ds-chart-danger",
    "color.chart.danger.hovered": "--ds-chart-danger-hovered",
    "color.chart.danger.bold": "--ds-chart-danger-bold",
    "color.chart.danger.bold.hovered": "--ds-chart-danger-bold-hovered",
    "color.chart.warning": "--ds-chart-warning",
    "color.chart.warning.hovered": "--ds-chart-warning-hovered",
    "color.chart.warning.bold": "--ds-chart-warning-bold",
    "color.chart.warning.bold.hovered": "--ds-chart-warning-bold-hovered",
    "color.chart.success": "--ds-chart-success",
    "color.chart.success.hovered": "--ds-chart-success-hovered",
    "color.chart.success.bold": "--ds-chart-success-bold",
    "color.chart.success.bold.hovered": "--ds-chart-success-bold-hovered",
    "color.chart.discovery": "--ds-chart-discovery",
    "color.chart.discovery.hovered": "--ds-chart-discovery-hovered",
    "color.chart.discovery.bold": "--ds-chart-discovery-bold",
    "color.chart.discovery.bold.hovered": "--ds-chart-discovery-bold-hovered",
    "color.chart.information": "--ds-chart-information",
    "color.chart.information.hovered": "--ds-chart-information-hovered",
    "color.chart.information.bold": "--ds-chart-information-bold",
    "color.chart.information.bold.hovered": "--ds-chart-information-bold-hovered",
    "elevation.surface": "--ds-surface",
    "elevation.surface.hovered": "--ds-surface-hovered",
    "elevation.surface.pressed": "--ds-surface-pressed",
    "elevation.surface.overlay": "--ds-surface-overlay",
    "elevation.surface.overlay.hovered": "--ds-surface-overlay-hovered",
    "elevation.surface.overlay.pressed": "--ds-surface-overlay-pressed",
    "elevation.surface.raised": "--ds-surface-raised",
    "elevation.surface.raised.hovered": "--ds-surface-raised-hovered",
    "elevation.surface.raised.pressed": "--ds-surface-raised-pressed",
    "elevation.surface.sunken": "--ds-surface-sunken",
    "elevation.shadow.overflow": "--ds-shadow-overflow",
    "elevation.shadow.overflow.perimeter": "--ds-shadow-overflow-perimeter",
    "elevation.shadow.overflow.spread": "--ds-shadow-overflow-spread",
    "elevation.shadow.overlay": "--ds-shadow-overlay",
    "elevation.shadow.raised": "--ds-shadow-raised",
    "opacity.disabled": "--ds-opacity-disabled",
    "opacity.loading": "--ds-opacity-loading",
    "utility.UNSAFE.transparent": "--ds-UNSAFE-transparent",
    "utility.elevation.surface.current": "--ds-elevation-surface-current",
    "space.0": "--ds-space-0",
    "space.025": "--ds-space-025",
    "space.050": "--ds-space-050",
    "space.075": "--ds-space-075",
    "space.100": "--ds-space-100",
    "space.150": "--ds-space-150",
    "space.200": "--ds-space-200",
    "space.250": "--ds-space-250",
    "space.300": "--ds-space-300",
    "space.400": "--ds-space-400",
    "space.500": "--ds-space-500",
    "space.600": "--ds-space-600",
    "space.800": "--ds-space-800",
    "space.1000": "--ds-space-1000",
    "space.negative.025": "--ds-space-negative-025",
    "space.negative.050": "--ds-space-negative-050",
    "space.negative.075": "--ds-space-negative-075",
    "space.negative.100": "--ds-space-negative-100",
    "space.negative.150": "--ds-space-negative-150",
    "space.negative.200": "--ds-space-negative-200",
    "space.negative.250": "--ds-space-negative-250",
    "space.negative.300": "--ds-space-negative-300",
    "space.negative.400": "--ds-space-negative-400",
    "font.heading.xxlarge": "--ds-font-heading-xxlarge",
    "font.heading.xlarge": "--ds-font-heading-xlarge",
    "font.heading.large": "--ds-font-heading-large",
    "font.heading.medium": "--ds-font-heading-medium",
    "font.heading.small": "--ds-font-heading-small",
    "font.heading.xsmall": "--ds-font-heading-xsmall",
    "font.heading.xxsmall": "--ds-font-heading-xxsmall",
    "font.body.large": "--ds-font-body-large",
    "font.body": "--ds-font-body",
    "font.body.small": "--ds-font-body-small",
    "font.body.UNSAFE_small": "--ds-font-body-UNSAFE_small",
    "font.metric.large": "--ds-font-metric-large",
    "font.metric.medium": "--ds-font-metric-medium",
    "font.metric.small": "--ds-font-metric-small",
    "font.code": "--ds-font-code",
    "font.weight.regular": "--ds-font-weight-regular",
    "font.weight.medium": "--ds-font-weight-medium",
    "font.weight.semibold": "--ds-font-weight-semibold",
    "font.weight.bold": "--ds-font-weight-bold",
    "font.family.heading": "--ds-font-family-heading",
    "font.family.body": "--ds-font-family-body",
    "font.family.code": "--ds-font-family-code",
    "font.family.brand.heading": "--ds-font-family-brand-heading",
    "font.family.brand.body": "--ds-font-family-brand-body",
    "radius.xsmall": "--ds-radius-xsmall",
    "radius.small": "--ds-radius-small",
    "radius.medium": "--ds-radius-medium",
    "radius.large": "--ds-radius-large",
    "radius.xlarge": "--ds-radius-xlarge",
    "radius.xxlarge": "--ds-radius-xxlarge",
    "radius.full": "--ds-radius-full",
    "radius.tile": "--ds-radius-tile",
    "border.width": "--ds-border-width",
    "border.width.selected": "--ds-border-width-selected",
    "border.width.focused": "--ds-border-width-focused",
  },
  Nr = "data-theme",
  uO = "data-subtree-theme",
  Fi = "data-color-mode",
  Ig = "data-contrast-mode",
  Ni = "data-custom-theme",
  lO = "ds",
  dO = "--".concat(lO, "-token-not-found");
function Gt(e, t) {
  var r = Ag[e];
  r || (r = dO);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var fO = ["light", "dark", "spacing", "typography", "shape"],
  Rc = "UNSAFE_themeOptions",
  jg = function (t) {
    return (
      fO.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Dg = function (t) {
    return (
      sO.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Tg = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  vO = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = W(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && Tg(i) && (r[o] = i), jg(o) && Dg(i) && (r[o] = i), o === Rc))
          try {
            r[Rc] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  pO = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = W(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && Tg(i)) ||
        (o === Rc && Ae(i) === "object") ||
        (jg(o) && typeof i == "string" && Dg(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(Ae(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
function Yf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var hO = function (t) {
    return (
      iO.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  tu = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(Fi) || "",
      n = t.getAttribute(Nr) || "";
    return Xf(Xf({}, vO(n)), hO(r) && { colorMode: r });
  },
  Mg = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  ro = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function mR(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function gO(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function yR(e) {
  if (!ro(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, gO(e)]
  );
}
function Zf(e) {
  if (!ro(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function wR(e) {
  if (!ro(e)) throw new Error("Invalid HEX");
  var t = 0,
    r = 0,
    n = 0;
  (e.length === 4
    ? ((t = "0x" + e[1] + e[1]), (r = "0x" + e[2] + e[2]), (n = "0x" + e[3] + e[3]))
    : e.length === 7 &&
      ((t = "0x" + e[1] + e[2]), (r = "0x" + e[3] + e[4]), (n = "0x" + e[5] + e[6])),
    (t /= 255),
    (r /= 255),
    (n /= 255));
  var a = Math.min(t, r, n),
    o = Math.max(t, r, n),
    i = o - a,
    c = 0,
    s = 0,
    u = 0;
  return (
    i === 0
      ? (c = 0)
      : o === t
        ? (c = ((r - n) / i) % 6)
        : o === r
          ? (c = (n - t) / i + 2)
          : (c = (t - r) / i + 4),
    (c = Math.round(c * 60)),
    c < 0 && (c += 360),
    (u = (o + a) / 2),
    (s = i === 0 ? 0 : i / (1 - Math.abs(2 * u - 1))),
    (s = +(s * 100).toFixed(1)),
    (u = +(u * 100).toFixed(1)),
    [c, s, u]
  );
}
function kR(e, t, r) {
  ((t /= 100), (r /= 100));
  var n = function (c) {
      return (c + e / 30) % 12;
    },
    a = t * Math.min(r, 1 - r),
    o = function (c) {
      return r - a * Math.max(-1, Math.min(n(c) - 3, Math.min(9 - n(c), 1)));
    };
  return [255 * o(0), 255 * o(8), 255 * o(4)];
}
function Qf(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    c = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    s = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * c + 0.0722 * s;
  return u;
}
function OR(e, t) {
  if (!ro(e) || !ro(t)) throw new Error("Invalid HEX");
  var r = Zf(e),
    n = Zf(t),
    a = Qf(r[0], r[1], r[2]),
    o = Qf(n[0], n[1], n[2]),
    i = Math.max(a, o),
    c = Math.min(a, o);
  return (i + 0.05) / (c + 0.05);
}
function SR(e, t) {
  var r = ev(e),
    n = ev(t),
    a = r[0] - n[0],
    o = r[1] - n[1],
    i = r[2] - n[2],
    c = Math.sqrt(r[1] * r[1] + r[2] * r[2]),
    s = Math.sqrt(n[1] * n[1] + n[2] * n[2]),
    u = c - s,
    l = o * o + i * i - u * u;
  l = l < 0 ? 0 : Math.sqrt(l);
  var d = 1 + 0.045 * c,
    p = 1 + 0.015 * c,
    v = a / 1,
    g = u / d,
    f = l / p,
    h = v * v + g * g + f * f;
  return h < 0 ? 0 : Math.sqrt(h);
}
function ev(e) {
  var t = e[0] / 255,
    r = e[1] / 255,
    n = e[2] / 255,
    a,
    o,
    i;
  return (
    (t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92),
    (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92),
    (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92),
    (a = (t * 0.4124 + r * 0.3576 + n * 0.1805) / 0.95047),
    (o = (t * 0.2126 + r * 0.7152 + n * 0.0722) / 1),
    (i = (t * 0.0193 + r * 0.1192 + n * 0.9505) / 1.08883),
    (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
    (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
    (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
    [116 * o - 16, 500 * (a - o), 200 * (o - i)]
  );
}
var Fg = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
function tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function rv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bO = "light",
  _O = "no-preference",
  Ng = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.colorMode,
      n = r === void 0 ? ye.colorMode : r,
      a = t.dark,
      o = a === void 0 ? ye.dark : a,
      i = t.light,
      c = i === void 0 ? ye.light : i,
      s = t.contrastMode,
      u = s === void 0 ? ye.contrastMode : s,
      l = t.shape,
      d = l === void 0 ? ye.shape() : l,
      p = t.spacing,
      v = p === void 0 ? ye.spacing : p,
      g = t.typography,
      f = g === void 0 ? ye.typography : g,
      h = t.UNSAFE_themeOptions,
      b = h === void 0 ? ye.UNSAFE_themeOptions : h,
      _ = pO({ dark: o, light: c, shape: d, spacing: v, typography: f }),
      y = C(C({}, Nr, _), Fi, n === "auto" ? bO : n);
    if (
      (J("platform_increased-contrast-themes") &&
        (y = rv(rv({}, y), {}, C({}, Ig, u === "auto" ? _O : u))),
      b && Mg(b.brandColor))
    ) {
      var k = JSON.stringify(b),
        w = Fg(k);
      y[Ni] = w;
    }
    return y;
  },
  Lg = {
    light: function () {
      return it(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return it(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return it(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return it(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return it(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return it(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return it(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return it(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    shape: function () {
      return it(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
  },
  mO = (function () {
    var e = Z(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(Nr, '="').concat(r, '"]:not([').concat(Ni, "])"),
                  )
                ) {
                  i.next = 2;
                  break;
                }
                return i.abrupt("return");
              case 2:
                if (r) {
                  i.next = 4;
                  break;
                }
                return i.abrupt("return");
              case 4:
                return ((i.next = 6), yO(r));
              case 6:
                ((n = i.sent),
                  (a = document.createElement("style")),
                  (a.textContent = n),
                  (a.dataset.theme = r),
                  document.head.appendChild(a));
              case 11:
              case "end":
                return i.stop();
            }
        }, t);
      }),
    );
    return function (r) {
      return e.apply(this, arguments);
    };
  })(),
  yO = (function () {
    var e = Z(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), Lg[r]());
              case 2:
                return ((n = i.sent), (a = n.default), i.abrupt("return", a));
              case 5:
              case "end":
                return i.stop();
            }
        }, t);
      }),
    );
    return function (r) {
      return e.apply(this, arguments);
    };
  })(),
  wO = "(prefers-color-scheme: dark)",
  kO = "(prefers-contrast: more)",
  OO = typeof window < "u" && "matchMedia" in window;
function SO(e) {
  var t = document.documentElement;
  t.setAttribute(Fi, e.matches ? "dark" : "light");
}
var Jr = OO && window.matchMedia(wO),
  EO = (function () {
    function e() {
      (be(this, e), C(this, "unbindThemeChangeListener", null));
    }
    return _e(e, [
      {
        key: "getColorMode",
        value: function () {
          return Jr && Jr != null && Jr.matches ? "dark" : "light";
        },
      },
      {
        key: "bind",
        value: function () {
          Jr &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = Fr.bind(Jr, { type: "change", listener: SO }));
        },
      },
      {
        key: "unbind",
        value: function () {
          this.unbindThemeChangeListener &&
            (this.unbindThemeChangeListener(), (this.unbindThemeChangeListener = null));
        },
      },
    ]);
  })(),
  Ro = new EO(),
  xO = typeof window < "u" && "matchMedia" in window;
function CO(e) {
  var t = document.documentElement;
  t.setAttribute(Ig, e.matches ? "more" : "no-preference");
}
var Yr = xO && window.matchMedia(kO),
  PO = (function () {
    function e() {
      (be(this, e), C(this, "unbindContrastChangeListener", null));
    }
    return _e(e, [
      {
        key: "getContrastMode",
        value: function () {
          return Yr && Yr != null && Yr.matches ? "more" : "no-preference";
        },
      },
      {
        key: "bind",
        value: function () {
          Yr &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = Fr.bind(Yr, { type: "change", listener: CO }));
        },
      },
      {
        key: "unbind",
        value: function () {
          this.unbindContrastChangeListener &&
            (this.unbindContrastChangeListener(), (this.unbindContrastChangeListener = null));
        },
      },
    ]);
  })(),
  Ao = new PO();
function RO(e) {
  (e.colorMode === "auto" ? ((e.colorMode = Ro.getColorMode()), Ro.bind()) : Ro.unbind(),
    J("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = Ao.getContrastMode()), Ao.bind())
        : Ao.unbind()));
  var t = Ng(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = W(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (Ro.unbind(), J("platform_increased-contrast-themes") && Ao.unbind());
    }
  );
}
function AO(e, t) {
  var r = JSON.stringify(e),
    n = Fg(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(Ni, '="').concat(n, '"][').concat(Nr, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function ER(e) {
  var t = Fe(Array.from(document.head.querySelectorAll("style[".concat(Ni, "][").concat(Nr, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function xR(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = W(n, 2),
      o = a[0],
      i = a[1],
      c = Ag[o];
    return c
      ? ""
          .concat(
            r,
            `
  `,
          )
          .concat(c, ": ")
          .concat(typeof i == "string" ? i : t[i], ";")
      : r;
  }, "");
}
function nv(e) {
  var t;
  return (t = Object.entries(cO).find(function (r) {
    var n = W(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var IO = function (t) {
    var r = t.colorMode,
      n = t.contrastMode,
      a = t.dark,
      o = t.light,
      i = t.shape,
      c = t.spacing,
      s = t.typography,
      u = [o, a],
      l = [];
    if (r === "auto")
      (n !== "no-preference" &&
        J("platform_increased-contrast-themes") &&
        u.forEach(function (p) {
          var v = nv(p);
          v && u.push(v);
        }),
        l.push.apply(l, u));
    else if ((l.push(t[r]), n !== "no-preference" && J("platform_increased-contrast-themes"))) {
      var d = nv(t[r]);
      d && l.push(d);
    }
    return (
      [i, c, s].forEach(function (p) {
        p && l.push(p);
      }),
      Fe(new Set(l))
    );
  },
  jO = function (t) {
    var r = [];
    return Fe(new Set(r));
  };
function DO(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = TO(e)) || t) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (u) {
          throw u;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o,
    i = !0,
    c = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((c = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (c) throw o;
      }
    },
  };
}
function TO(e, t) {
  if (e) {
    if (typeof e == "string") return av(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? av(e, t)
          : void 0
    );
  }
}
function av(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function iv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ov(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ov(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var MO = (function () {
    var e = Z(
      T.mark(function t() {
        var r,
          n,
          a,
          o,
          i,
          c,
          s,
          u,
          l,
          d,
          p,
          v,
          g,
          f,
          h,
          b,
          _,
          y,
          k,
          w,
          S,
          E,
          A,
          j,
          P,
          D,
          L,
          B,
          $,
          G,
          F = arguments;
        return T.wrap(
          function (q) {
            for (;;)
              switch ((q.prev = q.next)) {
                case 0:
                  return (
                    (r = F.length > 0 && F[0] !== void 0 ? F[0] : {}),
                    (n = F.length > 1 ? F[1] : void 0),
                    (a =
                      typeof r == "function"
                        ? r(
                            iv(
                              iv({}, ye),
                              {},
                              { typography: ye.typography, shape: ye.shape() },
                              tu(),
                            ),
                          )
                        : r),
                    (o = a.colorMode),
                    (i = o === void 0 ? ye.colorMode : o),
                    (c = a.contrastMode),
                    (s = c === void 0 ? ye.contrastMode : c),
                    (u = a.dark),
                    (l = u === void 0 ? ye.dark : u),
                    (d = a.light),
                    (p = d === void 0 ? ye.light : d),
                    (v = a.shape),
                    (g = v === void 0 ? ye.shape() : v),
                    (f = a.spacing),
                    (h = f === void 0 ? ye.spacing : f),
                    (b = a.typography),
                    (_ = b === void 0 ? ye.typography : b),
                    (y = a.UNSAFE_themeOptions),
                    (k = y === void 0 ? ye.UNSAFE_themeOptions : y),
                    J("platform_increased-contrast-themes") ||
                      (p === "light-increased-contrast" && (p = "light"),
                      l === "dark-increased-contrast" && (l = "dark")),
                    (w = {
                      colorMode: i,
                      contrastMode: s,
                      dark: l,
                      light: p,
                      shape: g,
                      spacing: h,
                      typography: _,
                      UNSAFE_themeOptions: n ? void 0 : k,
                    }),
                    (S = IO(w)),
                    (E = n || mO),
                    (A = S.map(
                      (function () {
                        var z = Z(
                          T.mark(function H(re) {
                            return T.wrap(function (le) {
                              for (;;)
                                switch ((le.prev = le.next)) {
                                  case 0:
                                    return ((le.next = 2), E(re));
                                  case 2:
                                    return le.abrupt("return", le.sent);
                                  case 3:
                                  case "end":
                                    return le.stop();
                                }
                            }, H);
                          }),
                        );
                        return function (H) {
                          return z.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      k &&
                      Mg(k?.brandColor) &&
                      ((j = i || ye.colorMode),
                      (P = AO(k, j)),
                      P.length > 0 &&
                        A.push(
                          Z(
                            T.mark(function z() {
                              var H, re;
                              return T.wrap(function (le) {
                                for (;;)
                                  switch ((le.prev = le.next)) {
                                    case 0:
                                      return (
                                        (le.next = 2),
                                        it(
                                          () => import("./custom-theme-DBmT3zWz.js"),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((H = le.sent),
                                        (re = H.loadAndAppendCustomThemeCss),
                                        re({
                                          colorMode: P.length === 2 ? "auto" : P[0],
                                          UNSAFE_themeOptions: k,
                                        }));
                                    case 5:
                                    case "end":
                                      return le.stop();
                                  }
                              }, z);
                            }),
                          )(),
                        )),
                    (q.next = 11),
                    Promise.all(A)
                  );
                case 11:
                  ((D = jO()), (L = DO(D)), (q.prev = 13), L.s());
                case 15:
                  if ((B = L.n()).done) {
                    q.next = 21;
                    break;
                  }
                  return (($ = B.value), (q.next = 19), E($));
                case 19:
                  q.next = 15;
                  break;
                case 21:
                  q.next = 26;
                  break;
                case 23:
                  ((q.prev = 23), (q.t0 = q.catch(13)), L.e(q.t0));
                case 26:
                  return ((q.prev = 26), L.f(), q.finish(26));
                case 29:
                  return ((G = RO(w)), q.abrupt("return", G));
                case 31:
                case "end":
                  return q.stop();
              }
          },
          t,
          null,
          [[13, 23, 26, 29]],
        );
      }),
    );
    return function () {
      return e.apply(this, arguments);
    };
  })(),
  ru = (function () {
    function e(t) {
      (be(this, e), C(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return _e(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = tu();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Nr, Fi] }));
        },
      },
      {
        key: "disconnect",
        value: function () {
          (this.callback && e.callbacks.delete(this.callback),
            e.callbacks.size === 0 && e.observer && (e.observer.disconnect(), (e.observer = null)));
        },
      },
    ]);
  })();
C(ru, "observer", null);
C(ru, "callbacks", new Set());
var Bg = m.createContext(void 0),
  FO = m.createContext(void 0),
  Ug = m.createContext(!1),
  NO = m.createContext(void 0),
  LO = m.createContext(void 0),
  BO = function () {
    var t;
    return (t = m.useContext(Ug)) !== null && t !== void 0 ? t : !1;
  },
  qg = function () {
    return typeof document < "u" ? document : null;
  };
function zg(e) {
  var t = qg();
  return t ? t.head.querySelector("style[".concat(Nr, '="').concat(e, '"]')) : !1;
}
var UO = (function () {
    var e = Z(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!zg(r)) {
                  i.next = 2;
                  break;
                }
                return i.abrupt("return");
              case 2:
                if (r) {
                  i.next = 4;
                  break;
                }
                return i.abrupt("return");
              case 4:
                return ((i.next = 6), Lg[r]());
              case 6:
                return ((n = i.sent), (a = n.default), i.abrupt("return", a));
              case 9:
              case "end":
                return i.stop();
            }
        }, t);
      }),
    );
    return function (r) {
      return e.apply(this, arguments);
    };
  })(),
  qO = (function () {
    var e = Z(
      T.mark(function t(r, n) {
        var a, o;
        return T.wrap(function (c) {
          for (;;)
            switch ((c.prev = c.next)) {
              case 0:
                if (((a = qg()), a)) {
                  c.next = 3;
                  break;
                }
                return c.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !zg(n))
                ) {
                  c.next = 8;
                  break;
                }
                return c.abrupt("return");
              case 8:
                a.head.appendChild(o);
              case 9:
              case "end":
                return c.stop();
            }
        }, t);
      }),
    );
    return function (r, n) {
      return e.apply(this, arguments);
    };
  })(),
  zO = (function () {
    var e = Z(
      T.mark(function t(r) {
        var n;
        return T.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), UO(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                qO(n, r);
              case 6:
              case "end":
                return o.stop();
            }
        }, t);
      }),
    );
    return function (r) {
      return e.apply(this, arguments);
    };
  })(),
  $O = (function () {
    var e = Z(
      T.mark(function t(r) {
        var n;
        return T.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                ((n = Object.values(r).filter(function (i) {
                  return !!i;
                })),
                  n.forEach(zO));
              case 2:
              case "end":
                return o.stop();
            }
        }, t);
      }),
    );
    return function (r) {
      return e.apply(this, arguments);
    };
  })();
function sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var VO = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  GO = typeof window < "u" && "matchMedia" in window,
  Ga = GO ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function cv(e) {
  return e === "auto" ? (Ga != null && Ga.matches ? "dark" : "light") : e;
}
var HO = { body: "_1e0c1bgi" };
function $g(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = m.useState(n),
    i = W(o, 2),
    c = i[0],
    s = i[1],
    u = m.useState(cv(n)),
    l = W(u, 2),
    d = l[0],
    p = l[1],
    v = m.useState(function () {
      return Ot(Ot({}, VO), a);
    }),
    g = W(v, 2),
    f = g[0],
    h = g[1],
    b = m.useCallback(function (P) {
      (s(P), p(cv(P)));
    }, []),
    _ = m.useCallback(function (P) {
      h(function (D) {
        return Ot(Ot({}, D), P);
      });
    }, []),
    y = m.useRef(null),
    k = tO(),
    w = nO(),
    S = BO(),
    E = k && !S && w,
    A = (!J("platform_dst_subtree_theming") && !k && !S) || E;
  (m.useEffect(
    function () {
      if (A) {
        var P = (function () {
            var L = Z(
              T.mark(function B() {
                var $;
                return T.wrap(function (F) {
                  for (;;)
                    switch ((F.prev = F.next)) {
                      case 0:
                        if (!y.current) {
                          F.next = 6;
                          break;
                        }
                        return ((F.next = 3), y.current);
                      case 3:
                        (($ = F.sent), $(), (y.current = null));
                      case 6:
                      case "end":
                        return F.stop();
                    }
                }, B);
              }),
            );
            return function () {
              return L.apply(this, arguments);
            };
          })(),
          D = (function () {
            var L = Z(
              T.mark(function B() {
                var $;
                return T.wrap(function (F) {
                  for (;;)
                    switch ((F.prev = F.next)) {
                      case 0:
                        return ((F.next = 2), P());
                      case 2:
                        (($ = MO(Ot(Ot({}, f), {}, { colorMode: d }))), (y.current = $));
                      case 4:
                      case "end":
                        return F.stop();
                    }
                }, B);
              }),
            );
            return function () {
              return L.apply(this, arguments);
            };
          })();
        return (
          D(),
          function () {
            P();
          }
        );
      } else $O(f);
    },
    [k, S, E, d, A, f],
  ),
    m.useEffect(
      function () {
        if (Ga) {
          var P = Fr.bind(Ga, {
            type: "change",
            listener: function (L) {
              c === "auto" && p(L.matches ? "dark" : "light");
            },
          });
          return P;
        }
      },
      [c],
    ));
  var j = Ot(Ot({}, Ng(Ot(Ot({}, f), {}, { colorMode: d }))), {}, C({}, uO, !0));
  return O.createElement(
    Ug.Provider,
    { value: !0 },
    O.createElement(
      Bg.Provider,
      { value: d },
      O.createElement(
        FO.Provider,
        { value: b },
        O.createElement(
          NO.Provider,
          { value: f },
          O.createElement(
            LO.Provider,
            { value: _ },
            !A && J("platform_dst_subtree_theming")
              ? O.createElement("div", te({}, j, { className: R([HO.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function Vg() {
  var e = m.useContext(Bg),
    t = tu(),
    r = m.useState(t?.colorMode || "light"),
    n = W(r, 2),
    a = n[0],
    o = n[1];
  return (
    m.useEffect(
      function () {
        if (!e) {
          var i = new ru(function (c) {
            o(c?.colorMode || "light");
          });
          return (
            i.observe(),
            function () {
              return i.disconnect();
            }
          );
        }
      },
      [e],
    ),
    e || a
  );
}
var WO = function () {
    var e = 1,
      t = new WeakMap(),
      r = function (n, a) {
        return typeof n == "number" || typeof n == "string"
          ? a
            ? "idx-".concat(a)
            : "val-".concat(n)
          : t.has(n)
            ? "uid" + t.get(n)
            : (t.set(n, e++), r(n));
      };
    return r;
  },
  Gg = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: WO() });
  },
  KO = Gg(),
  JO = m.createContext(Gg()),
  YO = function (e) {
    return e.value++;
  },
  XO = function (e) {
    return e ? e.prefix : "";
  },
  ZO = function (e) {
    var t = e || KO,
      r = XO(t),
      n = YO(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  Hg = function () {
    var e = m.useContext(JO),
      t = m.useState(function () {
        return ZO(e);
      })[0];
    return t;
  },
  QO = function () {
    var e = Hg().uid;
    return e;
  },
  eS = function () {
    var e = Hg().gen;
    return e;
  },
  Ys,
  qo = (Ys = O.useId) !== null && Ys !== void 0 ? Ys : void 0;
function Wg() {
  return qo && J("platform-dst-react-18-use-id")
    ? J("platform-dst-react-18-use-id-selector-safe")
      ? qo().replace(/[:«»]/g, "_")
      : qo()
    : "uid".concat(QO());
}
function tS() {
  if (qo && J("platform-dst-react-18-use-id")) {
    var e = Wg();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return eS();
}
var Li = function (t) {
  var r = t.children,
    n = t.testId,
    a = t.role,
    o = t.id;
  return m.createElement(
    "span",
    {
      id: o,
      "data-testid": n,
      role: a,
      className: R([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
Li.displayName = "VisuallyHidden";
var rS = {
    card: function () {
      return 100;
    },
    navigation: function () {
      return 200;
    },
    dialog: function () {
      return 300;
    },
    layer: function () {
      return 400;
    },
    blanket: function () {
      return 500;
    },
    modal: function () {
      return 510;
    },
    flag: function () {
      return 600;
    },
    spotlight: function () {
      return 700;
    },
    tooltip: function () {
      return 9999;
    },
  },
  nS = ["children"];
function aS(e) {
  var t = function (c, s) {
      return c(s);
    },
    r = m.createContext(e);
  function n(i) {
    var c = m.useContext(r),
      s = c || t,
      u = s(i);
    return u;
  }
  function a(i) {
    var c = i.children,
      s = ie(i, nS),
      u = n(s);
    return O.createElement(O.Fragment, null, c(u));
  }
  function o(i) {
    var c = m.useContext(r),
      s = i.value || t,
      u = m.useCallback(
        function (l) {
          return s(c, l);
        },
        [c, s],
      );
    return O.createElement(r.Provider, { value: u }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var oS = aS(function () {
    return { mode: "light" };
  }),
  iS = oS.useTheme;
function sS(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function cS(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var uS = (function () {
    function e(r) {
      var n = this;
      ((this._insertTag = function (a) {
        var o;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
              ? (o = n.container.firstChild)
              : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, o),
          n.tags.push(a));
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null));
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(cS(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = sS(a);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (n) {
          var a;
          return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  Me = "-ms-",
  li = "-moz-",
  ae = "-webkit-",
  Kg = "comm",
  nu = "rule",
  au = "decl",
  lS = "@import",
  Jg = "@keyframes",
  dS = "@layer",
  fS = Math.abs,
  Bi = String.fromCharCode,
  vS = Object.assign;
function pS(e, t) {
  return Re(e, 0) ^ 45
    ? (((((((t << 2) ^ Re(e, 0)) << 2) ^ Re(e, 1)) << 2) ^ Re(e, 2)) << 2) ^ Re(e, 3)
    : 0;
}
function Yg(e) {
  return e.trim();
}
function hS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, r) {
  return e.replace(t, r);
}
function Ac(e, t) {
  return e.indexOf(t);
}
function Re(e, t) {
  return e.charCodeAt(t) | 0;
}
function no(e, t, r) {
  return e.slice(t, r);
}
function Et(e) {
  return e.length;
}
function ou(e) {
  return e.length;
}
function Io(e, t) {
  return (t.push(e), e);
}
function gS(e, t) {
  return e.map(t).join("");
}
var Ui = 1,
  ln = 1,
  Xg = 0,
  Ve = 0,
  we = 0,
  _n = "";
function qi(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: Ui,
    column: ln,
    length: i,
    return: "",
  };
}
function Ia(e, t) {
  return vS(qi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function bS() {
  return we;
}
function _S() {
  return ((we = Ve > 0 ? Re(_n, --Ve) : 0), ln--, we === 10 && ((ln = 1), Ui--), we);
}
function Ye() {
  return ((we = Ve < Xg ? Re(_n, Ve++) : 0), ln++, we === 10 && ((ln = 1), Ui++), we);
}
function jt() {
  return Re(_n, Ve);
}
function zo() {
  return Ve;
}
function go(e, t) {
  return no(_n, e, t);
}
function ao(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Zg(e) {
  return ((Ui = ln = 1), (Xg = Et((_n = e))), (Ve = 0), []);
}
function Qg(e) {
  return ((_n = ""), e);
}
function $o(e) {
  return Yg(go(Ve - 1, Ic(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mS(e) {
  for (; (we = jt()) && we < 33; ) Ye();
  return ao(e) > 2 || ao(we) > 3 ? "" : " ";
}
function yS(e, t) {
  for (; --t && Ye() && !(we < 48 || we > 102 || (we > 57 && we < 65) || (we > 70 && we < 97)); );
  return go(e, zo() + (t < 6 && jt() == 32 && Ye() == 32));
}
function Ic(e) {
  for (; Ye(); )
    switch (we) {
      case e:
        return Ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ic(we);
        break;
      case 40:
        e === 41 && Ic(e);
        break;
      case 92:
        Ye();
        break;
    }
  return Ve;
}
function wS(e, t) {
  for (; Ye() && e + we !== 57; ) if (e + we === 84 && jt() === 47) break;
  return "/*" + go(t, Ve - 1) + "*" + Bi(e === 47 ? e : Ye());
}
function kS(e) {
  for (; !ao(jt()); ) Ye();
  return go(e, Ve);
}
function OS(e) {
  return Qg(Vo("", null, null, null, [""], (e = Zg(e)), 0, [0], e));
}
function Vo(e, t, r, n, a, o, i, c, s) {
  for (
    var u = 0,
      l = 0,
      d = i,
      p = 0,
      v = 0,
      g = 0,
      f = 1,
      h = 1,
      b = 1,
      _ = 0,
      y = "",
      k = a,
      w = o,
      S = n,
      E = y;
    h;
  )
    switch (((g = _), (_ = Ye()))) {
      case 40:
        if (g != 108 && Re(E, d - 1) == 58) {
          Ac((E += oe($o(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += $o(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += mS(g);
        break;
      case 92:
        E += yS(zo() - 1, 7);
        continue;
      case 47:
        switch (jt()) {
          case 42:
          case 47:
            Io(SS(wS(Ye(), zo()), t, r), s);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * f:
        c[u++] = Et(E) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (b == -1 && (E = oe(E, /\f/g, "")),
              v > 0 &&
                Et(E) - d &&
                Io(v > 32 ? lv(E + ";", n, r, d - 1) : lv(oe(E, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            E += ";";
          default:
            if ((Io((S = uv(E, t, r, u, l, a, c, y, (k = []), (w = []), d)), o), _ === 123))
              if (l === 0) Vo(E, t, S, S, k, o, d, c, w);
              else
                switch (p === 99 && Re(E, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vo(
                      e,
                      S,
                      S,
                      n && Io(uv(e, S, S, 0, 0, a, c, y, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      c,
                      n ? k : w,
                    );
                    break;
                  default:
                    Vo(E, S, S, S, [""], w, 0, c, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (y = E = ""), (d = i));
        break;
      case 58:
        ((d = 1 + Et(E)), (v = g));
      default:
        if (f < 1) {
          if (_ == 123) --f;
          else if (_ == 125 && f++ == 0 && _S() == 125) continue;
        }
        switch (((E += Bi(_)), _ * f)) {
          case 38:
            b = l > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((c[u++] = (Et(E) - 1) * b), (b = 1));
            break;
          case 64:
            (jt() === 45 && (E += $o(Ye())), (p = jt()), (l = d = Et((y = E += kS(zo())))), _++);
            break;
          case 45:
            g === 45 && Et(E) == 2 && (f = 0);
        }
    }
  return o;
}
function uv(e, t, r, n, a, o, i, c, s, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = ou(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, _ = no(e, d + 1, (d = fS((f = i[g])))), y = e; b < v; ++b)
      (y = Yg(f > 0 ? p[b] + " " + _ : oe(_, /&\f/g, p[b]))) && (s[h++] = y);
  return qi(e, t, r, a === 0 ? nu : c, s, u, l);
}
function SS(e, t, r) {
  return qi(e, t, r, Kg, Bi(bS()), no(e, 2, -2), 0);
}
function lv(e, t, r, n) {
  return qi(e, t, r, au, no(e, 0, n), no(e, n + 1, -1), n);
}
function an(e, t) {
  for (var r = "", n = ou(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function ES(e, t, r, n) {
  switch (e.type) {
    case dS:
      if (e.children.length) break;
    case lS:
    case au:
      return (e.return = e.return || e.value);
    case Kg:
      return "";
    case Jg:
      return (e.return = e.value + "{" + an(e.children, n) + "}");
    case nu:
      e.value = e.props.join(",");
  }
  return Et((r = an(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function xS(e) {
  var t = ou(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function CS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function PS(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var RS = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = jt()), a === 38 && o === 12 && (r[n] = 1), !ao(o); ) Ye();
    return go(t, Ve);
  },
  AS = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (ao(a)) {
        case 0:
          (a === 38 && jt() === 12 && (r[n] = 1), (t[n] += RS(Ve - 1, r, n)));
          break;
        case 2:
          t[n] += $o(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = jt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Bi(a);
      }
    while ((a = Ye()));
    return t;
  },
  IS = function (t, r) {
    return Qg(AS(Zg(t), r));
  },
  dv = new WeakMap(),
  jS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !dv.get(n)) && !a) {
        dv.set(t, !0);
        for (var o = [], i = IS(r, o), c = n.props, s = 0, u = 0; s < i.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = o[s] ? i[s].replace(/&\f/g, c[l]) : c[l] + " " + i[s];
      }
    }
  },
  DS = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function eb(e, t) {
  switch (pS(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + li + e + Me + e + e;
    case 6828:
    case 4268:
      return ae + e + Me + e + e;
    case 6165:
      return ae + e + Me + "flex-" + e + e;
    case 5187:
      return ae + e + oe(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + Me + "flex-$1$2") + e;
    case 5443:
      return ae + e + Me + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return ae + e + Me + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ae + e + Me + oe(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + Me + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return ae + "box-" + oe(e, "-grow", "") + ae + e + Me + oe(e, "grow", "positive") + e;
    case 4554:
      return ae + oe(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return (
        oe(
          oe(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + Me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        ae +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Et(e) - 1 - t > 6)
        switch (Re(e, t + 1)) {
          case 109:
            if (Re(e, t + 4) !== 45) break;
          case 102:
            return (
              oe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ae + "$2-$3$1" + li + (Re(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ac(e, "stretch") ? eb(oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Re(e, t + 1) !== 115) break;
    case 6444:
      switch (Re(e, Et(e) - 3 - (~Ac(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + ae) + e;
        case 101:
          return (
            oe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ae +
                (Re(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ae +
                "$2$3$1" +
                Me +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Re(e, t + 11)) {
        case 114:
          return ae + e + Me + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + Me + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + Me + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ae + e + Me + e + e;
  }
  return e;
}
var TS = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case au:
          t.return = eb(t.value, t.length);
          break;
        case Jg:
          return an([Ia(t, { value: oe(t.value, "@", "@" + ae) })], a);
        case nu:
          if (t.length)
            return gS(t.props, function (o) {
              switch (hS(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return an([Ia(t, { props: [oe(o, /:(read-\w+)/, ":" + li + "$1")] })], a);
                case "::placeholder":
                  return an(
                    [
                      Ia(t, { props: [oe(o, /:(plac\w+)/, ":" + ae + "input-$1")] }),
                      Ia(t, { props: [oe(o, /:(plac\w+)/, ":" + li + "$1")] }),
                      Ia(t, { props: [oe(o, /:(plac\w+)/, Me + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  MS = [TS],
  FS = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || MS,
      o = {},
      i,
      c = [];
    ((i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var h = f.getAttribute("data-emotion").split(" "), b = 1; b < h.length; b++)
            o[h[b]] = !0;
          c.push(f);
        },
      ));
    var s,
      u = [jS, DS];
    {
      var l,
        d = [
          ES,
          CS(function (f) {
            l.insert(f);
          }),
        ],
        p = xS(u.concat(a, d)),
        v = function (h) {
          return an(OS(h), p);
        };
      s = function (h, b, _, y) {
        ((l = _), v(h ? h + "{" + b.styles + "}" : b.styles), y && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new uS({
        key: r,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: s,
    };
    return (g.sheet.hydrate(c), g);
  },
  Xs = { exports: {} },
  se = {};
var fv;
function NS() {
  if (fv) return se;
  fv = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    o = e ? Symbol.for("react.profiler") : 60114,
    i = e ? Symbol.for("react.provider") : 60109,
    c = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    u = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    p = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    g = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    h = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    _ = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case t:
          switch (((w = w.type), w)) {
            case s:
            case u:
            case n:
            case o:
            case a:
            case d:
              return w;
            default:
              switch (((w = w && w.$$typeof), w)) {
                case c:
                case l:
                case g:
                case v:
                case i:
                  return w;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function k(w) {
    return y(w) === u;
  }
  return (
    (se.AsyncMode = s),
    (se.ConcurrentMode = u),
    (se.ContextConsumer = c),
    (se.ContextProvider = i),
    (se.Element = t),
    (se.ForwardRef = l),
    (se.Fragment = n),
    (se.Lazy = g),
    (se.Memo = v),
    (se.Portal = r),
    (se.Profiler = o),
    (se.StrictMode = a),
    (se.Suspense = d),
    (se.isAsyncMode = function (w) {
      return k(w) || y(w) === s;
    }),
    (se.isConcurrentMode = k),
    (se.isContextConsumer = function (w) {
      return y(w) === c;
    }),
    (se.isContextProvider = function (w) {
      return y(w) === i;
    }),
    (se.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (se.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (se.isFragment = function (w) {
      return y(w) === n;
    }),
    (se.isLazy = function (w) {
      return y(w) === g;
    }),
    (se.isMemo = function (w) {
      return y(w) === v;
    }),
    (se.isPortal = function (w) {
      return y(w) === r;
    }),
    (se.isProfiler = function (w) {
      return y(w) === o;
    }),
    (se.isStrictMode = function (w) {
      return y(w) === a;
    }),
    (se.isSuspense = function (w) {
      return y(w) === d;
    }),
    (se.isValidElementType = function (w) {
      return (
        typeof w == "string" ||
        typeof w == "function" ||
        w === n ||
        w === u ||
        w === o ||
        w === a ||
        w === d ||
        w === p ||
        (typeof w == "object" &&
          w !== null &&
          (w.$$typeof === g ||
            w.$$typeof === v ||
            w.$$typeof === i ||
            w.$$typeof === c ||
            w.$$typeof === l ||
            w.$$typeof === h ||
            w.$$typeof === b ||
            w.$$typeof === _ ||
            w.$$typeof === f))
      );
    }),
    (se.typeOf = y),
    se
  );
}
var vv;
function LS() {
  return (vv || ((vv = 1), (Xs.exports = NS())), Xs.exports);
}
var Zs, pv;
function BS() {
  if (pv) return Zs;
  pv = 1;
  var e = LS(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    r = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    n = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    o = {};
  ((o[e.ForwardRef] = n), (o[e.Memo] = a));
  function i(g) {
    return e.isMemo(g) ? a : o[g.$$typeof] || t;
  }
  var c = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    p = Object.prototype;
  function v(g, f, h) {
    if (typeof f != "string") {
      if (p) {
        var b = d(f);
        b && b !== p && v(g, b, h);
      }
      var _ = s(f);
      u && (_ = _.concat(u(f)));
      for (var y = i(g), k = i(f), w = 0; w < _.length; ++w) {
        var S = _[w];
        if (!r[S] && !(h && h[S]) && !(k && k[S]) && !(y && y[S])) {
          var E = l(f, S);
          try {
            c(g, S, E);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((Zs = v), Zs);
}
BS();
var US = !0;
function tb(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var iu = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || US === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  rb = function (t, r, n) {
    iu(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function qS(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    ((r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      ((t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var zS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  $S = /[A-Z]|^ms/g,
  VS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  nb = function (t) {
    return t.charCodeAt(1) === 45;
  },
  hv = function (t) {
    return t != null && typeof t != "boolean";
  },
  Qs = PS(function (e) {
    return nb(e) ? e : e.replace($S, "-$&").toLowerCase();
  }),
  gv = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(VS, function (n, a, o) {
            return ((xt = { name: a, styles: o, next: xt }), a);
          });
    }
    return zS[t] !== 1 && !nb(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function oo(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((xt = { name: a.name, styles: a.styles, next: xt }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((xt = { name: i.name, styles: i.styles, next: xt }), (i = i.next));
        var c = o.styles + ";";
        return c;
      }
      return GS(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = xt,
          u = r(e);
        return ((xt = s), oo(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function GS(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += oo(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : hv(c) && (n += Qs(o) + ":" + gv(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) hv(i[s]) && (n += Qs(o) + ":" + gv(o, i[s]) + ";");
      else {
        var u = oo(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Qs(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var bv = /label:\s*([^\s;{]+)\s*(;|$)/g,
  xt;
function su(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  xt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += oo(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += oo(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  bv.lastIndex = 0;
  for (var u = "", l; (l = bv.exec(a)) !== null; ) u += "-" + l[1];
  var d = qS(a) + u;
  return { name: d, styles: a, next: xt };
}
var HS = function (t) {
    return t();
  },
  WS = xu.useInsertionEffect ? xu.useInsertionEffect : !1,
  ab = WS || HS,
  ob = m.createContext(typeof HTMLElement < "u" ? FS({ key: "css" }) : null);
ob.Provider;
var ib = function (t) {
    return m.forwardRef(function (r, n) {
      var a = m.useContext(ob);
      return t(r, a, n);
    });
  },
  sb = m.createContext({}),
  cu = {}.hasOwnProperty,
  jc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  KS = function (t, r) {
    var n = {};
    for (var a in r) cu.call(r, a) && (n[a] = r[a]);
    return ((n[jc] = t), n);
  },
  JS = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      iu(r, n, a),
      ab(function () {
        return rb(r, n, a);
      }),
      null
    );
  },
  YS = ib(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[jc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = tb(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = su(o, void 0, m.useContext(sb));
    i += t.key + "-" + c.name;
    var s = {};
    for (var u in e) cu.call(e, u) && u !== "css" && u !== jc && (s[u] = e[u]);
    return (
      (s.className = i),
      r && (s.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(JS, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        m.createElement(a, s),
      )
    );
  }),
  XS = YS,
  Yt = function (t, r) {
    var n = arguments;
    if (r == null || !cu.call(r, "css")) return m.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = XS), (o[1] = KS(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return m.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Yt || (Yt = {}));
function Nt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return su(t);
}
var ZS = function e(t) {
  for (var r = t.length, n = 0, a = ""; n < r; n++) {
    var o = t[n];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o)) i = e(o);
          else {
            i = "";
            for (var c in o) o[c] && c && (i && (i += " "), (i += c));
          }
          break;
        }
        default:
          i = o;
      }
      i && (a && (a += " "), (a += i));
    }
  }
  return a;
};
function QS(e, t, r) {
  var n = [],
    a = tb(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var eE = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      ab(function () {
        for (var a = 0; a < n.length; a++) rb(r, n[a], !1);
      }),
      null
    );
  },
  tE = ib(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = su(u, t.registered);
        return (r.push(d), iu(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return QS(t.registered, n, ZS(u));
      },
      o = { css: n, cx: a, theme: m.useContext(sb) },
      i = e.children(o);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(eE, { cache: t, serializedArr: r }),
      i,
    );
  });
function cb(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var ub = 2,
  Dc = Nt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: ub,
  }),
  Tc = Nt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -ub,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  rE = Nt({
    "&:focus": Dc,
    "&:focus-visible": Dc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  nE = Nt({
    "&:focus": Tc,
    "&:focus-visible": Tc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  lb = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Tc : Dc,
      o = r ? nE : rE,
      i = typeof n > "u" ? o : n === "on" && a;
    return Yt(tE, null, function (c) {
      var s = c.css,
        u = c.cx;
      return m.Children.only(
        i ? m.cloneElement(t, { className: u([s(i), t.props.className]) }) : t,
      );
    });
  });
lb.displayName = "FocusRing";
function Ht(e) {
  (e.preventDefault(), e.stopPropagation());
}
var aE = 9;
function _v(e) {
  e.keyCode !== aE && Ht(e);
}
var oE = {
    onMouseDownCapture: Ht,
    onMouseUpCapture: Ht,
    onKeyDownCapture: _v,
    onKeyUpCapture: _v,
    onTouchStartCapture: Ht,
    onTouchEndCapture: Ht,
    onPointerDownCapture: Ht,
    onPointerUpCapture: Ht,
    onClickCapture: Ht,
    onClick: Ht,
  },
  iE = {};
function sE(e) {
  var t = e.isInteractive;
  return t ? iE : oE;
}
function mv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ir = 8,
  ec = ["default", "primary", "danger", "warning"],
  Mc = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  cE = { default: Mc.default, compact: Mc.compact, none: "inherit" },
  uE = {
    default: "0 ".concat(ir + ir / 4, "px"),
    compact: "0 ".concat(ir + ir / 4, "px"),
    none: "0",
  },
  lE = { compact: "0 ".concat(ir / 4, "px"), default: "0 ".concat(ir / 4, "px"), none: "0" },
  dE = { default: "middle", compact: "middle", none: "baseline" },
  db = { content: "0 ".concat(ir / 4, "px"), icon: "0 ".concat(ir / 4, "px") },
  fb = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  fE = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": qe(qe({}, fb), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  vE = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  pE = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  hE = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  gE = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": {
      background: "transparent",
      color: "var(--ds-text-subtle, #505258)",
      textDecoration: "underline",
    },
    "&:active": {
      background: "transparent",
      color: "var(--ds-text, #292A2E)",
      textDecoration: "underline",
    },
  },
  bE = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  _E = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  mE = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": qe(
      qe({}, fb),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  yE = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function wE(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return qe(
    qe(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: J("platform-dst-shape-theme-default")
          ? "var(--ds-radius-medium, 6px)"
          : "var(--ds-radius-small, 3px)",
        boxSizing: "border-box",
        display: "inline-flex",
        fontSize: "inherit",
        fontStyle: "normal",
        fontFamily: "inherit",
        fontWeight: "var(--ds-font-weight-medium, 500)",
        maxWidth: "100%",
        position: "relative",
        textAlign: "center",
        textDecoration: "none",
        transition:
          "background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)",
        whiteSpace: "nowrap",
        cursor: "pointer",
        height: Mc[r],
        lineHeight: cE[r],
        padding: o ? lE[r] : uE[r],
        verticalAlign: dE[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? mE
        : qe(
            qe(
              qe(
                qe(
                  qe(
                    qe(
                      qe(qe({}, t === "default" && fE), t === "primary" && vE),
                      t === "link" && pE,
                    ),
                    t === "subtle" && hE,
                  ),
                  t === "subtle-link" && gE,
                ),
                t === "warning" && bE,
              ),
              t === "danger" && _E,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: ec.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: ec.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: ec.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            yE,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function yv(e) {
  var t = e.spacing;
  return Nt({
    display: "flex",
    margin: t === "none" ? 0 : db.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function kE(e) {
  var t = e.spacing;
  return Nt({
    margin: t === "none" ? 0 : db.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function OE(e) {
  var t = e.hasOverlay;
  return Nt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var SE = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uu = function (t) {
    return t && m.isValidElement(t) && t.type === Li;
  },
  EE = [
    "analyticsContext",
    "appearance",
    "autoFocus",
    "buttonCss",
    "children",
    "className",
    "href",
    "component",
    "iconAfter",
    "iconBefore",
    "interactionName",
    "isDisabled",
    "isSelected",
    "onBlur",
    "onClick",
    "onFocus",
    "onMouseDown",
    "overlay",
    "shouldFitContainer",
    "spacing",
    "tabIndex",
    "type",
    "testId",
  ],
  xE = { "> *": { pointerEvents: "none" } },
  CE = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  PE = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  wv = function (t, r) {
    return !t || uu(t) ? null : r;
  },
  RE = function (t, r) {
    return uu(t) ? t : t ? Yt("span", { css: r }, t) : null;
  },
  AE = O.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      c = i === void 0 ? !1 : i,
      s = t.buttonCss,
      u = t.children,
      l = t.className,
      d = t.href,
      p = t.component,
      v = p === void 0 ? (d ? "a" : "button") : p,
      g = t.iconAfter,
      f = t.iconBefore,
      h = t.interactionName,
      b = t.isDisabled,
      _ = b === void 0 ? !1 : b,
      y = t.isSelected,
      k = y === void 0 ? !1 : y,
      w = t.onBlur,
      S = t.onClick,
      E = S === void 0 ? Ne : S,
      A = t.onFocus,
      j = t.onMouseDown,
      P = j === void 0 ? Ne : j,
      D = t.overlay;
    t.shouldFitContainer;
    var L = t.spacing,
      B = L === void 0 ? "default" : L,
      $ = t.tabIndex,
      G = $ === void 0 ? 0 : $,
      F = t.type,
      K = F === void 0 ? (d ? void 0 : "button") : F,
      q = t.testId,
      z = ie(t, EE),
      H = m.useRef(),
      re = m.useCallback(
        function (pe) {
          if (((H.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [H, r],
      );
    cb(H, c);
    var ce = m.useContext(Xc),
      le = m.useCallback(
        function (pe, Be) {
          (ce && ce.tracePress(h, pe.timeStamp), E(pe, Be));
        },
        [E, ce, h],
      ),
      Oe = un({
        fn: le,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      N = m.useCallback(
        function (pe) {
          (pe.preventDefault(), P(pe));
        },
        [P],
      );
    m.useEffect(
      function () {
        var pe = H.current;
        _ && pe && pe === document.activeElement && pe.blur();
      },
      [_],
    );
    var me = !!D,
      Le = Nt(OE({ hasOverlay: me })),
      ve = !_ && !me,
      Pe = {};
    return (
      (k || _ || o === "warning") &&
        (Pe = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || _
                ? "var(--ds-icon-subtle, ".concat(ci, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ci, ")"),
              " !important",
            ),
          },
        }),
      Yt(
        lb,
        null,
        Yt(
          v,
          te(
            {},
            z,
            {
              ref: re,
              className: l,
              css: [s, ve ? null : xE],
              "data-has-overlay": me ? !0 : void 0,
              "data-testid": q,
              disabled: _,
              href: ve ? d : void 0,
              onBlur: w,
              onClick: Oe,
              onFocus: A,
              onMouseDown: N,
              tabIndex: _ ? -1 : G,
              type: K,
            },
            sE({ isInteractive: ve }),
          ),
          f ? Yt("span", { css: [Le, yv({ spacing: B }), wv(u, CE)] }, f) : null,
          RE(u, [Le, kE({ spacing: B })]),
          g ? Yt("span", { css: [Le, yv({ spacing: B }), wv(u, PE)] }, g) : null,
          D ? Yt("span", { css: [SE, Pe] }, D) : null,
        ),
      )
    );
  });
function IE(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return uu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var jE = [
    "appearance",
    "children",
    "iconBefore",
    "iconAfter",
    "isSelected",
    "onMouseDown",
    "onMouseUp",
    "shouldFitContainer",
    "spacing",
  ],
  kv = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  lu = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? Ne : l,
        p = t.onMouseUp,
        v = p === void 0 ? Ne : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        _ = ie(t, jE),
        y = iS(),
        k = y.mode,
        w = IE({ children: o, iconBefore: i, iconAfter: c }),
        S = m.useState(!1),
        E = W(S, 2),
        A = E[0],
        j = E[1],
        P = m.useCallback(
          function (B) {
            (d(B), kv && j(!0));
          },
          [d, j],
        ),
        D = m.useCallback(
          function (B) {
            (v(B), kv && j(!1));
          },
          [v, j],
        ),
        L = m.useMemo(
          function () {
            return wE({
              appearance: a,
              spacing: b,
              isSelected: u,
              shouldFitContainer: f,
              isOnlySingleIcon: w,
            });
          },
          [a, b, k, u, f, w],
        );
      return O.createElement(
        AE,
        te({}, _, {
          ref: r,
          appearance: a,
          buttonCss: L,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: u,
          onMouseDown: P,
          onMouseUp: D,
          spacing: b,
        }),
      );
    }),
  );
lu.displayName = "Button";
function Ov(e) {
  return O.createElement(lu, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function DE(e) {
  return O.createElement(lu, te({}, e, { appearance: "subtle" }));
}
var TE = { container: "_1e0c1txw _kqswh2mm" };
function ME(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    Mi,
    { as: "li", testId: r, key: t, xcss: TE.container, paddingInline: "space.100" },
    O.createElement(
      Cg,
      { testId: r && "".concat(r, "-text") },
      O.createElement(Li, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Sv = {},
  Ev =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function FE(e, t) {
  return !!(e === t || (Ev(e) && Ev(t)));
}
function NE(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!FE(e[r], t[r])) return !1;
  return !0;
}
function LE(e, t) {
  t === void 0 && (t = NE);
  var r = null;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    if (r && r.lastThis === this && t(a, r.lastArgs)) return r.lastResult;
    var i = e.apply(this, a);
    return ((r = { lastResult: i, lastArgs: a, lastThis: this }), i);
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var BE = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > o,
    l = u && o - 4 < r,
    d = u && r < s - o + 3,
    p = LE(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(h, b).map(function (_, y) {
        return c(_, h + y, a);
      });
    });
  if (!u) return p(0, s);
  if (l && !d) {
    var v = o - 2;
    return [].concat(
      Fe(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - v })],
      Fe(p(s - v)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Fe(p(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: s - 1 })],
      Fe(p(s - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Fe(p(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Fe(p(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Fe(p(s - 1)),
  );
};
function xv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function UE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Fc = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect4ttxp",
    navigatorIconWrapper: "_18zr12x7",
  },
  qE = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function Cv(e) {
  var t = e.chevronDirection,
    r = t === "left" ? bk : yk;
  return O.createElement(
    Mi,
    { as: "span", xcss: Fc.navigatorIconWrapper },
    O.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function zE(e, t) {
  var r = e.components,
    n = r === void 0 ? Sv : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    c = e.label,
    s = c === void 0 ? "pagination" : c,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    p = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    g = v === void 0 ? "next" : v,
    f = e.style,
    h = f === void 0 ? Sv : f,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    y = e.onChange,
    k = y === void 0 ? Ne : y,
    w = e.pages,
    S = e.getPageLabel,
    E = e.renderEllipsis,
    A = E === void 0 ? ME : E,
    j = e.analyticsContext,
    P = e.testId,
    D = e.isDisabled,
    L = lk(i, function () {
      return o || 0;
    }),
    B = W(L, 2),
    $ = B[0],
    G = B[1],
    F = un(
      UE(
        {
          fn: function (z, H) {
            var re = z.event,
              ce = z.selectedPageIndex;
            (i === void 0 && G(ce), k && k(re, w[ce], H));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: j,
        },
        qE,
      ),
    ),
    K = function (z, H, re) {
      var ce = w[$],
        le = "".concat(l, " ").concat(S ? S(z, H) : z),
        Oe = z === ce;
      return O.createElement(
        Uo,
        { as: "li", xcss: Fc.paginationMenuItem, key: "page-".concat(S ? S(z, H) : H) },
        O.createElement(
          DE,
          {
            component: n.Page,
            onClick: function (me) {
              return F({ event: me, selectedPageIndex: H });
            },
            "aria-current": Oe ? "page" : void 0,
            "aria-label": le,
            isSelected: Oe,
            isDisabled: D,
            page: z,
            testId:
              re &&
              ""
                .concat(re, "--")
                .concat(Oe ? "current-" : "", "page-")
                .concat(H),
          },
          S ? S(z, H) : z,
        ),
      );
    };
  return O.createElement(
    Mi,
    { testId: P, style: h, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      Uo,
      { space: "space.0", alignBlock: "center" },
      O.createElement(Ov, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (z) {
          return F({ event: z, selectedPageIndex: $ - 1 });
        },
        isDisabled: D || $ === 0,
        iconBefore: O.createElement(Cv, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      O.createElement(
        Uo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Fc.paginationMenu },
        BE(w, $, { max: _, ellipsis: A, transform: K }, P),
      ),
      O.createElement(Ov, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (z) {
          return F({ event: z, selectedPageIndex: $ + 1 });
        },
        isDisabled: D || $ === w.length - 1,
        iconBefore: O.createElement(Cv, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var $E = m.memo(m.forwardRef(zE));
function VE(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, vb() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function vb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vb = function () {
    return !!e;
  })();
}
var GE = (function (e) {
    function t() {
      var r;
      be(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = VE(this, t, [].concat(a))),
        C(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      et(t, e),
      _e(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              o = n.value,
              i = o === void 0 ? 1 : o,
              c = n.i18n,
              s = n.testId,
              u = n.isDisabled,
              l = Fe(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return O.createElement($E, {
              selectedIndex: d,
              isDisabled: u,
              label: c?.label,
              nextLabel: c?.next,
              previousLabel: c?.prev,
              pageLabel: c?.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: s && "".concat(s, "--pagination"),
            });
          },
        },
      ])
    );
  })(O.Component),
  HE = ["isRanking", "testId"],
  WE = [
    "width",
    "children",
    "isSortable",
    "sortOrder",
    "isFixedSize",
    "shouldTruncate",
    "onClick",
    "style",
    "testId",
  ];
function Pv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Rv = "--local-dynamic-table-text-color",
  KE = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ie(t, HE);
    return m.createElement(
      "thead",
      te({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  JE = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      u = ie(e, WE),
      l = ja(
        ja(ja({}, c), r && gg({ width: r })),
        {},
        C({}, Rv, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === Rr,
      p = a === ii,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return m.createElement(
      g,
      te({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, u, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ja(
          ja({}, l),
          {},
          { "--_17ckjys": ar("var(--ds-text-subtle, ".concat("var(".concat(Rv, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function YE(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, pb() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function pb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pb = function () {
    return !!e;
  })();
}
function XE(e) {
  return (function (t) {
    function r() {
      var n;
      be(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = YE(this, r, [].concat(o))),
        C(n, "state", { refWidth: 0, refHeight: 0 }),
        C(n, "innerRef", function (c) {
          c && !n.props.isRanking && (n.ref = c);
        }),
        C(n, "updateDimensions", function () {
          if (n.ref) {
            var c = n.ref.getBoundingClientRect(),
              s = c.width,
              u = c.height;
            (s !== n.state.refWidth || u !== n.state.refHeight) &&
              n.setState({ refWidth: s, refHeight: u });
          }
        }),
        n
      );
    }
    return (
      et(r, t),
      _e(r, [
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (a) {
            var o = this.props.isRanking,
              i = a.isRanking;
            i && !o && this.updateDimensions();
          },
        },
        {
          key: "render",
          value: function () {
            var a = this.state,
              o = a.refWidth,
              i = a.refHeight;
            return O.createElement(
              e,
              te({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(O.Component);
}
var Da = {},
  Av;
function ZE() {
  if (Av) return Da;
  ((Av = 1), Object.defineProperty(Da, "__esModule", { value: !0 }), (Da.default = void 0));
  var e = r(Ir()),
    t = r(Ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowDownIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ArrowDownIcon"), (Da.default = n), Da);
}
var QE = ZE();
const ex = ur(QE);
var Ta = {},
  Iv;
function tx() {
  if (Iv) return Ta;
  ((Iv = 1), Object.defineProperty(Ta, "__esModule", { value: !0 }), (Ta.default = void 0));
  var e = r(Ir()),
    t = r(Ti);
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  const n = (a) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowUpIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        a,
      ),
    );
  return ((n.displayName = "ArrowUpIcon"), (Ta.default = n), Ta);
}
var rx = tx();
const nx = ur(rx);
var ax = "Escape";
function ox(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    a = m.useCallback(
      function (i) {
        r || n.current || i.key !== ax || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return Fr.bindAll(
          document,
          [
            { type: "keydown", listener: a },
            { type: "keyup", listener: o },
          ],
          { capture: !1 },
        );
    },
    [a, o, r],
  );
}
function Xr(e) {
  var t = m.useRef(e);
  return (
    m.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var ix = m.createContext(null),
  sx = m.createContext(null);
function cx() {
  var e = m.useContext(sx);
  return e;
}
function ux(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = m.useContext(ix),
    o = cx();
  m.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var Ba = { none: 0, small: 100, medium: 350, large: 700 },
  tc = 0.5,
  lx = { none: Ba.none, small: Ba.small * tc, medium: Ba.medium * tc, large: Ba.large * tc },
  dx = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  fx = function () {
    if (!dx()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  vx = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  px = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = m.useRef([]);
    return (
      m.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, vx(t)),
      m.useCallback(function (n, a) {
        for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++)
          i[c - 2] = arguments[c];
        var s = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (u) {
                return u !== s;
              })),
                n());
            },
            a,
          ].concat(i),
        );
        r.current.push(s);
      }, [])
    );
  },
  hb = { appear: !0, isExiting: !1 },
  gb = m.createContext(hb),
  jv = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : hb;
    return O.createElement(gb.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Dv = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  hx = function (t, r) {
    for (var n = r.concat([]), a = gx(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  gx = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  bx = function (t, r) {
    for (
      var n = new Set(
          t.map(function (s) {
            return s.key;
          }),
        ),
        a = new Set(),
        o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o],
        c = i.key;
      n.has(c) || a.add(c);
    }
    return a;
  },
  bb = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = m.useState([null, n]),
      i = W(o, 2),
      c = i[0],
      s = i[1],
      u = m.useState([]),
      l = W(u, 2),
      d = l[0],
      p = l[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = W(v, 2),
      f = g[0],
      h = g[1];
    if (
      (m.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof c == "boolean")
    )
      return n;
    var b = W(c, 2),
      _ = b[0],
      y = b[1],
      k = Dv(_),
      w = Dv(y);
    y !== n && s([y, n]);
    var S = bx(w, k),
      E = !!S.size,
      A = w;
    if ((E && (A = hx(w, k)), a))
      if (d.length) A = d;
      else {
        var j = A.filter(function (P) {
          return S.has(P.key);
        });
        j.length && p(j);
      }
    return (
      S.size
        ? (A = A.map(function (P) {
            var D = S.has(P.key);
            return jv(P, {
              appear: !0,
              isExiting: D,
              onFinish: D
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (P) {
            return jv(P, f);
          })),
      A
    );
  }),
  _x = function () {
    return m.useContext(gb);
  };
bb.displayName = "ExitingPersistence";
function mx() {
  var e = m.useRef("");
  return (
    e.current ||
      (e.current =
        "_" +
        (
          Number(String(Math.random()).slice(2)) +
          Date.now() +
          Math.round(performance.now())
        ).toString(36)),
    e.current
  );
}
var yx = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ne };
  }),
  wx = function () {
    var t = mx(),
      r = m.useContext(yx);
    return r(t);
  },
  kx = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      o = a === void 0 ? n : a,
      i = t.enteringAnimation,
      c = t.exitingAnimation,
      s = c === void 0 ? i : c,
      u = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      p = d === void 0 ? "large" : d,
      v = wx(),
      g = _x(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      _ = px(),
      y = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(b),
      E = W(S, 2),
      A = E[0],
      j = E[1];
    return (
      m.useEffect(
        function () {
          var P = !1;
          if (!y) {
            if (!b) {
              l && l(w);
              return;
            }
            var D = function () {
              (w === "exiting" && h?.(), P || j(!1), l?.(w));
            };
            if (fx()) {
              D();
              return;
            }
            return (
              j(!0),
              _(D, f ? lx[p] : Ba[p] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [h, w, f, p, k, y, _],
      ),
      r(
        {
          ref: v.ref,
          className: A
            ? R([
                R(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && R(["_1y0ctrqk"]),
                p === "small" && R(["_5sag1yx9"]),
                p === "medium" && R(["_5sag1ttt"]),
                p === "large" && R(["_5sagpwmj"]),
                f && p === "small" && R(["_5sag14ed"]),
                f && p === "medium" && R(["_5sagluct"]),
                f && p === "large" && R(["_5sag1ttt"]),
                f && R(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && R(["_1pglp3kn"]),
                !f && n === "ease-out" && R(["_1pgldkwg"]),
                !f && n === "ease-in" && R(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && R(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && R(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && R(["_1pglannl"]),
                !f && n === "ease-in-out" && R(["_1pgl1fu8"]),
                f && n === "linear" && R(["_1pglp3kn"]),
                f && o === "ease-out" && R(["_1pgldkwg"]),
                f && o === "ease-in" && R(["_1pgl1nzg"]),
                f && o === "ease-in-40-out" && R(["_1pgl5y64"]),
                f && o === "ease-in-60-out" && R(["_1pgl1ddy"]),
                f && o === "ease-in-80-out" && R(["_1pglannl"]),
                f && o === "ease-in-out" && R(["_1pgl1fu8"]),
                ((!f && i === "fade-in") || (f && s === "fade-in")) && R(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && s === "fade-out")) && R(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && s === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && s === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && s === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && s === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && s === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && s === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && s === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && s === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && s === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && s === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && s === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && s === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && s === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && s === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && s === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && s === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && s === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && s === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && s === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && s === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && s === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && s === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && s === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && s === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && s === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && s === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  Ox = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Sx = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? Ox[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      kx,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: p,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  Ex = m.createContext();
m.createContext();
var xx = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  Cx = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  Px = function (t, r) {
    if (typeof t == "function") return Cx(t, r);
    t != null && (t.current = r);
  },
  Tv = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  Mv =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  ze = "top",
  vt = "bottom",
  pt = "right",
  $e = "left",
  du = "auto",
  bo = [ze, vt, pt, $e],
  dn = "start",
  io = "end",
  Rx = "clippingParents",
  _b = "viewport",
  Ma = "popper",
  Ax = "reference",
  Fv = bo.reduce(function (e, t) {
    return e.concat([t + "-" + dn, t + "-" + io]);
  }, []),
  mb = [].concat(bo, [du]).reduce(function (e, t) {
    return e.concat([t, t + "-" + dn, t + "-" + io]);
  }, []),
  Ix = "beforeRead",
  jx = "read",
  Dx = "afterRead",
  Tx = "beforeMain",
  Mx = "main",
  Fx = "afterMain",
  Nx = "beforeWrite",
  Lx = "write",
  Bx = "afterWrite",
  Ux = [Ix, jx, Dx, Tx, Mx, Fx, Nx, Lx, Bx];
function Ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Xe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ar(e) {
  var t = Xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function ft(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function fu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qx(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !ft(o) ||
      !Ft(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function zx(e) {
  var t = e.state,
    r = {
      popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var a = t.elements[n],
          o = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          c = i.reduce(function (s, u) {
            return ((s[u] = ""), s);
          }, {});
        !ft(a) ||
          !Ft(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const $x = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qx,
  effect: zx,
  requires: ["computeStyles"],
};
function Dt(e) {
  return e.split("-")[0];
}
var Sr = Math.max,
  di = Math.min,
  fn = Math.round;
function Nc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function yb() {
  return !/^((?!chrome|android).)*safari/i.test(Nc());
}
function vn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    ft(e) &&
    ((a = (e.offsetWidth > 0 && fn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && fn(n.height) / e.offsetHeight) || 1));
  var i = Ar(e) ? Xe(e) : window,
    c = i.visualViewport,
    s = !yb() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function vu(e) {
  var t = vn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function wb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && fu(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Qt(e) {
  return Xe(e).getComputedStyle(e);
}
function Vx(e) {
  return ["table", "td", "th"].indexOf(Ft(e)) >= 0;
}
function dr(e) {
  return ((Ar(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zi(e) {
  return Ft(e) === "html" ? e : e.assignedSlot || e.parentNode || (fu(e) ? e.host : null) || dr(e);
}
function Nv(e) {
  return !ft(e) || Qt(e).position === "fixed" ? null : e.offsetParent;
}
function Gx(e) {
  var t = /firefox/i.test(Nc()),
    r = /Trident/i.test(Nc());
  if (r && ft(e)) {
    var n = Qt(e);
    if (n.position === "fixed") return null;
  }
  var a = zi(e);
  for (fu(a) && (a = a.host); ft(a) && ["html", "body"].indexOf(Ft(a)) < 0; ) {
    var o = Qt(a);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function _o(e) {
  for (var t = Xe(e), r = Nv(e); r && Vx(r) && Qt(r).position === "static"; ) r = Nv(r);
  return r && (Ft(r) === "html" || (Ft(r) === "body" && Qt(r).position === "static"))
    ? t
    : r || Gx(e) || t;
}
function pu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ha(e, t, r) {
  return Sr(e, di(t, r));
}
function Hx(e, t, r) {
  var n = Ha(e, t, r);
  return n > r ? r : n;
}
function kb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ob(e) {
  return Object.assign({}, kb(), e);
}
function Sb(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var Wx = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Ob(typeof t != "number" ? t : Sb(t, bo))
  );
};
function Kx(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = Dt(r.placement),
    s = pu(c),
    u = [$e, pt].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = Wx(a.padding, r),
      p = vu(o),
      v = s === "y" ? ze : $e,
      g = s === "y" ? vt : pt,
      f = r.rects.reference[l] + r.rects.reference[s] - i[s] - r.rects.popper[l],
      h = i[s] - r.rects.reference[s],
      b = _o(o),
      _ = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - h / 2,
      k = d[v],
      w = _ - p[l] - d[g],
      S = _ / 2 - p[l] / 2 + y,
      E = Ha(k, S, w),
      A = s;
    r.modifiersData[n] = ((t = {}), (t[A] = E), (t.centerOffset = E - S), t);
  }
}
function Jx(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (wb(t.elements.popper, a) && (t.elements.arrow = a)));
}
const Yx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Kx,
  effect: Jx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function pn(e) {
  return e.split("-")[1];
}
var Xx = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Zx(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: fn(r * a) / a || 0, y: fn(n * a) / a || 0 };
}
function Lv(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    o = e.variation,
    i = e.offsets,
    c = e.position,
    s = e.gpuAcceleration,
    u = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    p = i.x,
    v = p === void 0 ? 0 : p,
    g = i.y,
    f = g === void 0 ? 0 : g,
    h = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = h.x), (f = h.y));
  var b = i.hasOwnProperty("x"),
    _ = i.hasOwnProperty("y"),
    y = $e,
    k = ze,
    w = window;
  if (u) {
    var S = _o(r),
      E = "clientHeight",
      A = "clientWidth";
    if (
      (S === Xe(r) &&
        ((S = dr(r)),
        Qt(S).position !== "static" &&
          c === "absolute" &&
          ((E = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === ze || ((a === $e || a === pt) && o === io))
    ) {
      k = vt;
      var j = d && S === w && w.visualViewport ? w.visualViewport.height : S[E];
      ((f -= j - n.height), (f *= s ? 1 : -1));
    }
    if (a === $e || ((a === ze || a === vt) && o === io)) {
      y = pt;
      var P = d && S === w && w.visualViewport ? w.visualViewport.width : S[A];
      ((v -= P - n.width), (v *= s ? 1 : -1));
    }
  }
  var D = Object.assign({ position: c }, u && Xx),
    L = l === !0 ? Zx({ x: v, y: f }, Xe(r)) : { x: v, y: f };
  if (((v = L.x), (f = L.y), s)) {
    var B;
    return Object.assign(
      {},
      D,
      ((B = {}),
      (B[k] = _ ? "0" : ""),
      (B[y] = b ? "0" : ""),
      (B.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      B),
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}), (t[k] = _ ? f + "px" : ""), (t[y] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function Qx(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    u = {
      placement: Dt(t.placement),
      variation: pn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Lv(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Lv(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    })));
}
const eC = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Qx, data: {} };
var jo = { passive: !0 };
function tC(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = Xe(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, jo);
      }),
    c && s.addEventListener("resize", r.update, jo),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, jo);
        }),
        c && s.removeEventListener("resize", r.update, jo));
    }
  );
}
const rC = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: tC,
  data: {},
};
var nC = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Go(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return nC[t];
  });
}
var aC = { start: "end", end: "start" };
function Bv(e) {
  return e.replace(/start|end/g, function (t) {
    return aC[t];
  });
}
function hu(e) {
  var t = Xe(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function gu(e) {
  return vn(dr(e)).left + hu(e).scrollLeft;
}
function oC(e, t) {
  var r = Xe(e),
    n = dr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = yb();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + gu(e), y: s };
}
function iC(e) {
  var t,
    r = dr(e),
    n = hu(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Sr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = Sr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + gu(e),
    s = -n.scrollTop;
  return (
    Qt(a || r).direction === "rtl" && (c += Sr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function bu(e) {
  var t = Qt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Eb(e) {
  return ["html", "body", "#document"].indexOf(Ft(e)) >= 0
    ? e.ownerDocument.body
    : ft(e) && bu(e)
      ? e
      : Eb(zi(e));
}
function Wa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Eb(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Xe(n),
    i = a ? [o].concat(o.visualViewport || [], bu(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Wa(zi(i)));
}
function Lc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function sC(e, t) {
  var r = vn(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Uv(e, t, r) {
  return t === _b ? Lc(oC(e, r)) : Ar(t) ? sC(t, r) : Lc(iC(dr(e)));
}
function cC(e) {
  var t = Wa(zi(e)),
    r = ["absolute", "fixed"].indexOf(Qt(e).position) >= 0,
    n = r && ft(e) ? _o(e) : e;
  return Ar(n)
    ? t.filter(function (a) {
        return Ar(a) && wb(a, n) && Ft(a) !== "body";
      })
    : [];
}
function uC(e, t, r, n) {
  var a = t === "clippingParents" ? cC(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, u) {
        var l = Uv(e, u, n);
        return (
          (s.top = Sr(l.top, s.top)),
          (s.right = di(l.right, s.right)),
          (s.bottom = di(l.bottom, s.bottom)),
          (s.left = Sr(l.left, s.left)),
          s
        );
      },
      Uv(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function xb(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Dt(n) : null,
    o = n ? pn(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case ze:
      s = { x: i, y: t.y - r.height };
      break;
    case vt:
      s = { x: i, y: t.y + t.height };
      break;
    case pt:
      s = { x: t.x + t.width, y: c };
      break;
    case $e:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? pu(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case dn:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case io:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function so(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? Rx : c,
    u = r.rootBoundary,
    l = u === void 0 ? _b : u,
    d = r.elementContext,
    p = d === void 0 ? Ma : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = Ob(typeof h != "number" ? h : Sb(h, bo)),
    _ = p === Ma ? Ax : Ma,
    y = e.rects.popper,
    k = e.elements[g ? _ : p],
    w = uC(Ar(k) ? k : k.contextElement || dr(e.elements.popper), s, l, i),
    S = vn(e.elements.reference),
    E = xb({ reference: S, element: y, placement: a }),
    A = Lc(Object.assign({}, y, E)),
    j = p === Ma ? A : S,
    P = {
      top: w.top - j.top + b.top,
      bottom: j.bottom - w.bottom + b.bottom,
      left: w.left - j.left + b.left,
      right: j.right - w.right + b.right,
    },
    D = e.modifiersData.offset;
  if (p === Ma && D) {
    var L = D[a];
    Object.keys(P).forEach(function (B) {
      var $ = [pt, vt].indexOf(B) >= 0 ? 1 : -1,
        G = [ze, vt].indexOf(B) >= 0 ? "y" : "x";
      P[B] += L[G] * $;
    });
  }
  return P;
}
function lC(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? mb : s,
    l = pn(n),
    d = l
      ? c
        ? Fv
        : Fv.filter(function (g) {
            return pn(g) === l;
          })
      : bo,
    p = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = so(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[Dt(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function dC(e) {
  if (Dt(e) === du) return [];
  var t = Go(e);
  return [Bv(e), t, Bv(t)];
}
function fC(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        o = a === void 0 ? !0 : a,
        i = r.altAxis,
        c = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        u = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        p = r.altBoundary,
        v = r.flipVariations,
        g = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        h = t.options.placement,
        b = Dt(h),
        _ = b === h,
        y = s || (_ || !g ? [Go(h)] : dC(h)),
        k = [h].concat(y).reduce(function (Oe, N) {
          return Oe.concat(
            Dt(N) === du
              ? lC(t, {
                  placement: N,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : N,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        E = new Map(),
        A = !0,
        j = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var D = k[P],
        L = Dt(D),
        B = pn(D) === dn,
        $ = [ze, vt].indexOf(L) >= 0,
        G = $ ? "width" : "height",
        F = so(t, { placement: D, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        K = $ ? (B ? pt : $e) : B ? vt : ze;
      w[G] > S[G] && (K = Go(K));
      var q = Go(K),
        z = [];
      if (
        (o && z.push(F[L] <= 0),
        c && z.push(F[K] <= 0, F[q] <= 0),
        z.every(function (Oe) {
          return Oe;
        }))
      ) {
        ((j = D), (A = !1));
        break;
      }
      E.set(D, z);
    }
    if (A)
      for (
        var H = g ? 3 : 1,
          re = function (N) {
            var me = k.find(function (Le) {
              var ve = E.get(Le);
              if (ve)
                return ve.slice(0, N).every(function (Pe) {
                  return Pe;
                });
            });
            if (me) return ((j = me), "break");
          },
          ce = H;
        ce > 0;
        ce--
      ) {
        var le = re(ce);
        if (le === "break") break;
      }
    t.placement !== j && ((t.modifiersData[n]._skip = !0), (t.placement = j), (t.reset = !0));
  }
}
const vC = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fC,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function qv(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function zv(e) {
  return [ze, pt, vt, $e].some(function (t) {
    return e[t] >= 0;
  });
}
function pC(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = so(t, { elementContext: "reference" }),
    c = so(t, { altBoundary: !0 }),
    s = qv(i, n),
    u = qv(c, a, o),
    l = zv(s),
    d = zv(u);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    })));
}
const hC = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: pC,
};
function gC(e, t, r) {
  var n = Dt(e),
    a = [$e, ze].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [$e, pt].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function bC(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = mb.reduce(function (l, d) {
      return ((l[d] = gC(d, t.rects, o)), l);
    }, {}),
    c = i[t.placement],
    s = c.x,
    u = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const _C = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: bC };
function mC(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = xb({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const yC = { name: "popperOffsets", enabled: !0, phase: "read", fn: mC, data: {} };
function wC(e) {
  return e === "x" ? "y" : "x";
}
function kC(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    o = a === void 0 ? !0 : a,
    i = r.altAxis,
    c = i === void 0 ? !1 : i,
    s = r.boundary,
    u = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    p = r.tether,
    v = p === void 0 ? !0 : p,
    g = r.tetherOffset,
    f = g === void 0 ? 0 : g,
    h = so(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = Dt(t.placement),
    _ = pn(t.placement),
    y = !_,
    k = pu(b),
    w = wC(k),
    S = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    A = t.rects.popper,
    j = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof j == "number"
        ? { mainAxis: j, altAxis: j }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    L = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var B,
        $ = k === "y" ? ze : $e,
        G = k === "y" ? vt : pt,
        F = k === "y" ? "height" : "width",
        K = S[k],
        q = K + h[$],
        z = K - h[G],
        H = v ? -A[F] / 2 : 0,
        re = _ === dn ? E[F] : A[F],
        ce = _ === dn ? -A[F] : -E[F],
        le = t.elements.arrow,
        Oe = v && le ? vu(le) : { width: 0, height: 0 },
        N = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : kb(),
        me = N[$],
        Le = N[G],
        ve = Ha(0, E[F], Oe[F]),
        Pe = y ? E[F] / 2 - H - ve - me - P.mainAxis : re - ve - me - P.mainAxis,
        pe = y ? -E[F] / 2 + H + ve + Le + P.mainAxis : ce + ve + Le + P.mainAxis,
        Be = t.elements.arrow && _o(t.elements.arrow),
        fr = Be ? (k === "y" ? Be.clientTop || 0 : Be.clientLeft || 0) : 0,
        er = (B = D?.[k]) != null ? B : 0,
        tt = K + Pe - er - fr,
        je = K + pe - er,
        rt = Ha(v ? di(q, tt) : q, K, v ? Sr(z, je) : z);
      ((S[k] = rt), (L[k] = rt - K));
    }
    if (c) {
      var kt,
        He = k === "x" ? ze : $e,
        De = k === "x" ? vt : pt,
        Te = S[w],
        ne = w === "y" ? "height" : "width",
        Ee = Te + h[He],
        xe = Te - h[De],
        nt = [ze, $e].indexOf(b) !== -1,
        Lt = (kt = D?.[w]) != null ? kt : 0,
        ge = nt ? Ee : Te - E[ne] - A[ne] - Lt + P.altAxis,
        Bt = nt ? Te + E[ne] + A[ne] - Lt - P.altAxis : xe,
        We = v && nt ? Hx(ge, Te, Bt) : Ha(v ? ge : Ee, Te, v ? Bt : xe);
      ((S[w] = We), (L[w] = We - Te));
    }
    t.modifiersData[n] = L;
  }
}
const OC = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kC,
  requiresIfExists: ["offset"],
};
function SC(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function EC(e) {
  return e === Xe(e) || !ft(e) ? hu(e) : SC(e);
}
function xC(e) {
  var t = e.getBoundingClientRect(),
    r = fn(t.width) / e.offsetWidth || 1,
    n = fn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function CC(e, t, r) {
  r === void 0 && (r = !1);
  var n = ft(t),
    a = ft(t) && xC(t),
    o = dr(t),
    i = vn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Ft(t) !== "body" || bu(o)) && (c = EC(t)),
      ft(t) ? ((s = vn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = gu(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function PC(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    (i.forEach(function (c) {
      if (!r.has(c)) {
        var s = t.get(c);
        s && a(s);
      }
    }),
      n.push(o));
  }
  return (
    e.forEach(function (o) {
      r.has(o.name) || a(o);
    }),
    n
  );
}
function RC(e) {
  var t = PC(e);
  return Ux.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function AC(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            ((t = void 0), r(e()));
          });
        })),
      t
    );
  };
}
function IC(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var $v = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function jC(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? $v : a;
  return function (c, s, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, $v, o),
        modifiersData: {},
        elements: { reference: c, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      p = !1,
      v = {
        state: l,
        setOptions: function (b) {
          var _ = typeof b == "function" ? b(l.options) : b;
          (f(),
            (l.options = Object.assign({}, o, l.options, _)),
            (l.scrollParents = {
              reference: Ar(c) ? Wa(c) : c.contextElement ? Wa(c.contextElement) : [],
              popper: Wa(s),
            }));
          var y = RC(IC([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = y.filter(function (k) {
              return k.enabled;
            })),
            g(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var b = l.elements,
              _ = b.reference,
              y = b.popper;
            if (Vv(_, y)) {
              ((l.rects = {
                reference: CC(_, _o(y), l.options.strategy === "fixed"),
                popper: vu(y),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (P) {
                  return (l.modifiersData[P.name] = Object.assign({}, P.data));
                }));
              for (var k = 0; k < l.orderedModifiers.length; k++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (k = -1));
                  continue;
                }
                var w = l.orderedModifiers[k],
                  S = w.fn,
                  E = w.options,
                  A = E === void 0 ? {} : E,
                  j = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: A, name: j, instance: v }) || l);
              }
            }
          }
        },
        update: AC(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!Vv(c, s)) return v;
    v.setOptions(u).then(function (h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var b = h.name,
          _ = h.options,
          y = _ === void 0 ? {} : _,
          k = h.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: v, options: y }),
            S = function () {};
          d.push(w || S);
        }
      });
    }
    function f() {
      (d.forEach(function (h) {
        return h();
      }),
        (d = []));
    }
    return v;
  };
}
var DC = [rC, yC, eC, $x, _C, vC, OC, Yx, hC],
  TC = jC({ defaultModifiers: DC }),
  rc,
  Gv;
function MC() {
  if (Gv) return rc;
  Gv = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(o, i) {
    if (o === i) return !0;
    if (o && i && typeof o == "object" && typeof i == "object") {
      if (o.constructor !== i.constructor) return !1;
      var c, s, u;
      if (Array.isArray(o)) {
        if (((c = o.length), c != i.length)) return !1;
        for (s = c; s-- !== 0; ) if (!a(o[s], i[s])) return !1;
        return !0;
      }
      var l;
      if (t && o instanceof Map && i instanceof Map) {
        if (o.size !== i.size) return !1;
        for (l = o.entries(); !(s = l.next()).done; ) if (!i.has(s.value[0])) return !1;
        for (l = o.entries(); !(s = l.next()).done; )
          if (!a(s.value[1], i.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && o instanceof Set && i instanceof Set) {
        if (o.size !== i.size) return !1;
        for (l = o.entries(); !(s = l.next()).done; ) if (!i.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(o) && ArrayBuffer.isView(i)) {
        if (((c = o.length), c != i.length)) return !1;
        for (s = c; s-- !== 0; ) if (o[s] !== i[s]) return !1;
        return !0;
      }
      if (o.constructor === RegExp) return o.source === i.source && o.flags === i.flags;
      if (
        o.valueOf !== Object.prototype.valueOf &&
        typeof o.valueOf == "function" &&
        typeof i.valueOf == "function"
      )
        return o.valueOf() === i.valueOf();
      if (
        o.toString !== Object.prototype.toString &&
        typeof o.toString == "function" &&
        typeof i.toString == "function"
      )
        return o.toString() === i.toString();
      if (((u = Object.keys(o)), (c = u.length), c !== Object.keys(i).length)) return !1;
      for (s = c; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(i, u[s])) return !1;
      if (e && o instanceof Element) return !1;
      for (s = c; s-- !== 0; )
        if (
          !((u[s] === "_owner" || u[s] === "__v" || u[s] === "__o") && o.$$typeof) &&
          !a(o[u[s]], i[u[s]])
        )
          return !1;
      return !0;
    }
    return o !== o && i !== i;
  }
  return (
    (rc = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    rc
  );
}
var FC = MC();
const NC = ur(FC);
var LC = [],
  BC = function (t, r, n) {
    n === void 0 && (n = {});
    var a = m.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || LC,
      },
      i = m.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      c = i[0],
      s = i[1],
      u = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var g = v.state,
              f = Object.keys(g.elements);
            fi.flushSync(function () {
              s({
                styles: Tv(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: Tv(
                  f.map(function (h) {
                    return [h, g.attributes[h]];
                  }),
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      l = m.useMemo(
        function () {
          var p = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return NC(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = m.useRef();
    return (
      Mv(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Mv(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || TC,
              v = p(t, r, l);
            return (
              (d.current = v),
              function () {
                (v.destroy(), (d.current = null));
              }
            );
          }
        },
        [t, r, n.createPopper],
      ),
      {
        state: d.current ? d.current.state : null,
        styles: c.styles,
        attributes: c.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  UC = function () {},
  qC = function () {
    return Promise.resolve(null);
  },
  zC = [];
function $C(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? zC : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = m.useContext(Ex),
    p = m.useState(null),
    v = p[0],
    g = p[1],
    f = m.useState(null),
    h = f[0],
    b = f[1];
  m.useEffect(
    function () {
      Px(u, v);
    },
    [u, v],
  );
  var _ = m.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: s,
          modifiers: [].concat(i, [{ name: "arrow", enabled: h != null, options: { element: h } }]),
        };
      },
      [r, a, s, i, h],
    ),
    y = BC(c || d, v, _),
    k = y.state,
    w = y.styles,
    S = y.forceUpdate,
    E = y.update,
    A = m.useMemo(
      function () {
        return {
          ref: g,
          style: w.popper,
          placement: k ? k.placement : r,
          hasPopperEscaped:
            k && k.modifiersData.hide ? k.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            k && k.modifiersData.hide ? k.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: w.arrow, ref: b },
          forceUpdate: S || UC,
          update: E || qC,
        };
      },
      [g, b, r, k, w, E, S],
    );
  return xx(l)(A);
}
function VC(e) {
  var t = e.viewportPadding;
  return [
    {
      name: "maxSizeData",
      enabled: !0,
      phase: "read",
      fn: function (n) {
        var a = n.state,
          o = n.name;
        window.visualViewport &&
          (a.modifiersData[o] = {
            viewport: { width: window.visualViewport.width, height: window.visualViewport.height },
          });
      },
    },
    {
      name: "maxSize",
      enabled: !0,
      phase: "beforeWrite",
      requiresIfExists: ["offset", "preventOverflow", "flip"],
      fn: function (n) {
        var a,
          o,
          i,
          c,
          s = n.state,
          u = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (u == null || (a = u.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (u == null || (o = u.viewport) === null || o === void 0 ? void 0 : o.height) !=
              "number"
          )
        ) {
          var l = u.viewport,
            d = s.modifiersData.popperOffsets,
            p = d === void 0 ? { x: 0, y: 0 } : d,
            v = s.placement.split("-"),
            g = W(v, 1),
            f = g[0],
            h =
              (i =
                (c = s.modifiersData) === null ||
                c === void 0 ||
                (c = c.offset) === null ||
                c === void 0
                  ? void 0
                  : c[s.placement]) !== null && i !== void 0
                ? i
                : { x: 0, y: 0 },
            b = l.width - 2 * t,
            _ = l.height - 2 * t;
          (f === "top" && (_ = s.rects.reference.y + h.y - t),
            f === "bottom" && (_ = l.height - p.y - t),
            f === "left" && (b = s.rects.reference.x + h.x - t),
            f === "right" && (b = l.width - p.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(_, "px")));
        }
      },
    },
  ];
}
var Bc = 5,
  GC = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Bc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function HC() {
  return null;
}
var WC = [0, 8];
function KC(e) {
  var t = e.children,
    r = t === void 0 ? HC : t,
    n = e.offset,
    a = n === void 0 ? WC : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    g = W(a, 2),
    f = g[0],
    h = g[1],
    b = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: Bc, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = v ? VC({ viewportPadding: Bc }) : [];
        return [].concat(GC, [y, k], Fe(w));
      },
      [f, h, v],
    ),
    _ = m.useMemo(
      function () {
        return u == null ? b : [].concat(Fe(b), Fe(u));
      },
      [b, u],
    );
  return O.createElement($C, { modifiers: _, placement: i, strategy: d, referenceElement: s }, r);
}
var Cb = "atlaskit-portal-container",
  Pb = "body > .atlaskit-portal-container",
  Rb = "atlaskit-portal",
  JC = function (t) {
    var r = document.createElement("div");
    return ((r.className = Rb), (r.style.zIndex = "".concat(t)), r);
  },
  Ab = function () {
    return document.body;
  },
  Ib = function () {
    var t = document.querySelector(Pb);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Cb),
        (n.style.display = "flex"),
        (r = Ab()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  YC = function (t) {
    Ib().removeChild(t);
  },
  XC = function (t) {
    t.parentElement || Ib().appendChild(t);
  },
  jb = function () {
    return document !== void 0;
  },
  ZC = function (t) {
    if (jb()) {
      var r = document.createElement("div");
      return ((r.className = Rb), (r.style.zIndex = "".concat(t)), r);
    }
  },
  QC = function () {
    if (jb()) {
      var t = document.querySelector(Pb);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Cb),
          (n.style.display = "flex"),
          (r = Ab()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function eP(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return JC(t);
      },
      [t],
    ),
    a = Vg();
  return (
    XC(n),
    m.useEffect(
      function () {
        return function () {
          YC(n);
        };
      },
      [n],
    ),
    fi.createPortal(
      a && J("platform_dst_subtree_theming") ? O.createElement($g, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var Db = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function tP(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    a = W(n, 2),
    o = a[0],
    i = a[1],
    c = Vg();
  Db(
    function () {
      var u = ZC(t);
      i(u);
      var l = QC();
      if (!(!u || !l))
        return (
          l.appendChild(u),
          function () {
            (u && l.removeChild(u), i(null));
          }
        );
    },
    [t],
  );
  var s = O.createElement(
    m.Suspense,
    { fallback: null },
    c && J("platform_dst_subtree_theming") ? O.createElement($g, { defaultColorMode: c }, r) : r,
  );
  return o ? fi.createPortal(s, o) : null;
}
var rP = function (t) {
    var r = m.useState(!1),
      n = W(r, 2),
      a = n[0],
      o = n[1],
      i = m.useState(function () {
        return t === "layoutEffect" ? Db : m.useEffect;
      }),
      c = W(i, 1),
      s = c[0];
    return (
      s(function () {
        o(!0);
      }, []),
      a
    );
  },
  nP = "akPortalMount",
  aP = "akPortalUnmount",
  Hv = {
    100: "card",
    200: "navigation",
    300: "dialog",
    400: "layer",
    500: "blanket",
    510: "modal",
    600: "flag",
    700: "spotlight",
    9999: "tooltip",
  },
  oP = function (t) {
    return Hv.hasOwnProperty(t) ? Hv[t] : null;
  },
  iP = function (t, r) {
    var n = { layer: oP(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Wv(e, t) {
  var r = iP(e, t);
  window.dispatchEvent(r);
}
var sP = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        Wv(nP, r),
        function () {
          Wv(aP, r);
        }
      );
    },
    [r],
  );
};
function cP(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = rP(o);
  return (
    sP(r),
    J("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(tP, { zIndex: r }, n)
      : i
        ? O.createElement(eP, { zIndex: r }, n)
        : null
  );
}
var Ka = new Set(),
  co = null;
function Kv() {
  if (!co) {
    co = Fr.bindAll(window, [
      { type: "dragend", listener: nc },
      { type: "pointerdown", listener: nc },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            nc();
          };
        })(),
      },
    ]);
    var e = Array.from(Ka);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function nc() {
  var e;
  ((e = co) === null || e === void 0 || e(), (co = null));
  var t = Array.from(Ka);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function uP() {
  return Fr.bindAll(window, [
    { type: "dragstart", listener: Kv },
    { type: "dragenter", listener: Kv },
  ]);
}
var Do = null;
function lP(e) {
  return (
    Do || (Do = uP()),
    Ka.add(e),
    e.onRegister({ isDragging: co !== null }),
    function () {
      if ((Ka.delete(e), Ka.size === 0)) {
        var r;
        ((r = Do) === null || r === void 0 || r(), (Do = null));
      }
    }
  );
}
var Ja = null;
function Ua() {
  Ja != null && (window.clearTimeout(Ja), (Ja = null));
}
function Jv(e, t) {
  (Ua(),
    (Ja = window.setTimeout(function () {
      ((Ja = null), e());
    }, t)));
}
var St = null;
function dP(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(St && St.entry === e);
  }
  function n() {
    r() && (Ua(), (St = null));
  }
  function a() {
    (r() && e.done(), (t = "done"), n());
  }
  function o() {
    (r() && e.hide({ isImmediate: !0 }), a());
  }
  function i() {
    if (r()) {
      if (t === "waiting-to-hide") {
        ((t = "shown"), Ua());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Ua(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function c(v) {
    var g = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        o();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (g) {
          o();
          return;
        }
        ((t = "waiting-to-hide"),
          Jv(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && a();
  }
  function u() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var v = J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? e.shouldAlwaysFadeIn : !1,
      g = !!(St && St.isVisible()) && !v;
    (St && (Ua(), St.entry.hide({ isImmediate: !0 }), St.entry.done(), (St = null)),
      (St = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: g }));
    }
    if (g) {
      f();
      return;
    }
    ((t = "waiting-to-show"), Jv(f, e.delay));
  }
  d();
  var p = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return p;
}
function fP(e, t) {
  var r = tS();
  return t ? "".concat(r(e)) : void 0;
}
var Yv = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  vP = function (t) {
    var r = t.shortcut;
    return m.createElement(
      "div",
      { className: R([Yv.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return m.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: R([Yv.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Tb = m.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      c = t.testId,
      s = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return m.createElement(
      "div",
      { ref: r, style: n, "data-testid": c ? "".concat(c, "--wrapper") : void 0 },
      m.createElement(
        "div",
        {
          role: "tooltip",
          className: R(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": c,
          id: l,
        },
        o,
        d && m.createElement(vP, { shortcut: d }),
      ),
    );
  });
Tb.displayName = "TooltipPrimitive";
var Xv = {
    base: "_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Mb = m.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      c = t.placement,
      s = t.testId,
      u = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      p = t.shortcut;
    return m.createElement(
      Tb,
      {
        ref: r,
        style: n,
        className: R([Xv.base, i && Xv.truncate, a]),
        placement: c,
        testId: s,
        id: d,
        onMouseOut: u,
        onMouseOver: l,
        shortcut: p,
      },
      o,
    );
  });
Mb.displayName = "TooltipContainer";
function Zv(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function pP(e, t) {
  var r = t.targetElement,
    n = t.tooltipPosition;
  if (n === "mouse")
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: e.clientX, y: e.clientY, width: 0, height: 0 });
      },
    };
  var a = r.getBoundingClientRect();
  if (n === "mouse-x")
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: e.clientX, y: a.top, width: 0, height: a.height });
      },
    };
  if (n === "mouse-y")
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: a.left, y: e.clientY, width: a.width, height: 0 });
      },
    };
  throw new Error("Invalid tooltip position for virtual element: ".concat(n));
}
function Qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var hP = rS.tooltip(),
  ep = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  gP = { top: "bottom", bottom: "top", left: "right", right: "left" },
  bP = function (t) {
    return t.split("-")[0];
  };
function _P(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? Mb : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Ne : h,
    _ = e.onHide,
    y = _ === void 0 ? Ne : _,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    E = e.hideTooltipOnMouseDown,
    A = E === void 0 ? !1 : E,
    j = e.analyticsContext,
    P = e.strategy,
    D = P === void 0 ? "fixed" : P,
    L = e.ignoreTooltipPointerEvents,
    B = L === void 0 ? !1 : L,
    $ = e.isScreenReaderAnnouncementDisabled,
    G = $ === void 0 ? !1 : $,
    F = e.shortcut,
    K = e.UNSAFE_shouldAlwaysFadeIn,
    q = K === void 0 ? !1 : K,
    z = e.UNSAFE_shouldRenderToParent,
    H = z === void 0 ? !1 : z,
    re = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    ce = re ? o : n,
    le = Df(Zr({ fn: b, action: "displayed", analyticsData: j }, ep)),
    Oe = Df(Zr({ fn: y, action: "hidden", analyticsData: j }, ep)),
    N = m.useRef(null),
    me = m.useState("hide"),
    Le = W(me, 2),
    ve = Le[0],
    Pe = Le[1],
    pe = m.useRef(null),
    Be = m.useRef(null),
    fr = function (de) {
      ((Be.current = de), (pe.current = de ? de.firstElementChild : null));
    },
    er = m.useCallback(function (U) {
      pe.current = U;
    }, []),
    tt = Xr(ve),
    je = Xr(le),
    rt = Xr(Oe),
    kt = Xr(f),
    He = Xr(k),
    De = m.useRef(!1),
    Te = Xr(q),
    ne = m.useCallback(function (U) {
      ((N.current = U), (De.current = !1));
    }, []),
    Ee = m.useCallback(
      function () {
        N.current &&
          (De.current && rt.current(), (N.current = null), (De.current = !1), Pe("hide"));
      },
      [rt],
    ),
    xe = m.useCallback(
      function () {
        N.current && (N.current.abort(), De.current && rt.current(), (N.current = null));
      },
      [rt],
    );
  m.useEffect(
    function () {
      return function () {
        N.current && xe();
      };
    },
    [xe],
  );
  var nt = m.useRef(!1);
  m.useEffect(function () {
    return lP({
      onRegister: function (de) {
        var zt = de.isDragging;
        nt.current = zt;
      },
      onDragStart: function () {
        var de;
        ((de = N.current) === null || de === void 0 || de.requestHide({ isImmediate: !0 }),
          (nt.current = !0));
      },
      onDragEnd: function () {
        nt.current = !1;
      },
    });
  }, []);
  var Lt = m.useCallback(
      function (U) {
        var de;
        if (!nt.current) {
          if ((N.current && !N.current.isActive() && xe(), N.current && N.current.isActive())) {
            N.current.keep();
            return;
          }
          if (!(He.current && !((de = He.current) !== null && de !== void 0 && de.call(He)))) {
            var zt = {
                source: U,
                delay: kt.current,
                show: function (Lr) {
                  var wn = Lr.isImmediate;
                  (De.current || ((De.current = !0), je.current()),
                    Pe(wn ? "show-immediate" : "fade-in"));
                },
                hide: function (Lr) {
                  var wn = Lr.isImmediate;
                  Pe(wn ? "hide" : "before-fade-out");
                },
                done: Ee,
                shouldAlwaysFadeIn: J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? Te.current
                  : !1,
              },
              vr = dP(zt);
            ne(vr);
          }
        }
      },
      [He, kt, Ee, ne, xe, je, Te],
    ),
    ge = m.useCallback(
      function () {
        var U;
        (U = N.current) === null || U === void 0 || U.requestHide({ isImmediate: !0 });
      },
      [N],
    );
  (ox({ onClose: ge, isDisabled: ve === "hide" || ve === "fade-out" }),
    m.useEffect(
      function () {
        if (ve === "hide") return Ne;
        ve === "before-fade-out" && Pe("fade-out");
        var U = Fr.bind(window, {
          type: "scroll",
          listener: function () {
            N.current && N.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return U;
      },
      [ve],
    ));
  var Bt = m.useCallback(
      function () {
        A && N.current && N.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    We = m.useCallback(
      function () {
        S && N.current && N.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    Ut = m.useCallback(
      function (U) {
        if (!(Be.current && U.target === Be.current) && !U.defaultPrevented) {
          U.preventDefault();
          var de = re
            ? {
                type: "mouse",
                mouse: J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : Zv({ left: U.clientX, top: U.clientY }),
                clientX: U.clientX,
                clientY: U.clientY,
              }
            : { type: "keyboard" };
          Lt(de);
        }
      },
      [re, Lt],
    ),
    mn = m.useCallback(function (U) {
      (Be.current && U.target === Be.current) ||
        U.defaultPrevented ||
        (U.preventDefault(), N.current && N.current.requestHide({ isImmediate: !1 }));
    }, []),
    qt = re
      ? function (U) {
          var de;
          (de = N.current) !== null &&
            de !== void 0 &&
            de.isActive() &&
            (J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (N.current.mousePosition = Zv({ left: U.clientX, top: U.clientY })),
            (N.current.mousePos = { clientX: U.clientX, clientY: U.clientY }));
        }
      : void 0,
    $i = m.useCallback(function () {
      if (N.current && N.current.isActive()) {
        N.current.keep();
        return;
      }
    }, []),
    Hb = m.useCallback(
      function (U) {
        try {
          if (!U.target.matches(":focus-visible")) return;
        } catch {}
        Lt({ type: "keyboard" });
      },
      [Lt],
    ),
    Wb = m.useCallback(function () {
      N.current && N.current.requestHide({ isImmediate: !1 });
    }, []),
    Kb = m.useCallback(
      function (U) {
        U === "exiting" &&
          tt.current === "fade-out" &&
          N.current &&
          N.current.finishHideAnimation();
      },
      [tt],
    ),
    Jb = p,
    Vi = ve !== "hide" && !!i,
    mu = !G && Vi,
    yu = ve !== "hide" && ve !== "fade-out",
    Yb = m.useCallback(function () {
      var U;
      (U = N.current) === null || U === void 0 || U.requestHide({ isImmediate: !0 });
    }, []);
  ux({ isOpen: Vi && yu, onClose: Yb });
  var wu = function () {
      var de, zt;
      if (
        re &&
        (de = N.current) !== null &&
        de !== void 0 &&
        de.mousePos &&
        pe.current &&
        J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return pP(N.current.mousePos, { targetElement: pe.current, tooltipPosition: n });
      if (
        re &&
        (zt = N.current) !== null &&
        zt !== void 0 &&
        zt.mousePosition &&
        !J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var vr;
        return (vr = N.current) === null || vr === void 0 ? void 0 : vr.mousePosition;
      }
      return pe.current || void 0;
    },
    yn = fP("tooltip", mu),
    Gi = {
      onMouseOver: Ut,
      onMouseOut: mn,
      onMouseMove: qt,
      onMouseDown: Bt,
      onClick: We,
      onFocus: Hb,
      onBlur: Wb,
    };
  v && (Gi["data-testid"] = "".concat(v, "--container"));
  var ku = typeof t == "function";
  m.useEffect(
    function () {
      if (!ku) {
        var U = pe.current;
        if (!(!U || !yn))
          return (
            U.setAttribute("aria-describedby", yn),
            function () {
              return U.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [ku, yn],
  );
  var Ou = mu
      ? O.createElement(
          "span",
          { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: yn },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    Xb = H && J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? m.Fragment : mP;
  return O.createElement(
    O.Fragment,
    null,
    typeof t == "function"
      ? O.createElement(
          O.Fragment,
          null,
          t(Zr(Zr({}, Gi), {}, { "aria-describedby": yn, ref: er })),
          Ou,
        )
      : O.createElement(Jb, te({}, Gi, { ref: fr, role: "presentation" }), t, Ou),
    Vi
      ? O.createElement(
          Xb,
          null,
          O.createElement(KC, { placement: ce, referenceElement: wu(), strategy: D }, function (U) {
            var de = U.ref,
              zt = U.style,
              vr = U.update,
              Hi = U.placement,
              Lr = re ? void 0 : gP[bP(Hi)];
            return O.createElement(
              bb,
              { appear: !0 },
              yu &&
                O.createElement(
                  Sx,
                  {
                    distance: "constant",
                    entranceDirection: Lr,
                    exitDirection: Lr,
                    onFinish: Kb,
                    duration: ve !== "show-immediate" ? "medium" : "none",
                  },
                  function (wn) {
                    var Zb = wn.className;
                    return O.createElement(
                      l,
                      {
                        ref: de,
                        className: "Tooltip ".concat(Zb),
                        style: Zr(Zr({}, zt), B && { pointerEvents: "none" }),
                        truncate: s,
                        placement: ce,
                        testId: wu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: mn,
                        onMouseOver: $i,
                        shortcut: F,
                      },
                      typeof i == "function" ? i({ update: vr }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var mP = function (t) {
    var r = t.children;
    return O.createElement(cP, { zIndex: hP }, r);
  },
  yP = [
    "content",
    "inlineStyles",
    "testId",
    "isRanking",
    "innerRef",
    "isSortable",
    "sortOrder",
    "onClick",
    "headCellId",
    "activeSortButtonId",
    "ascendingSortTooltip",
    "descendingSortTooltip",
    "buttonAriaRoleDescription",
    "isIconOnlyHeader",
  ],
  Fa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  tp = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c8wadc _syazazsu _k48pwu06" },
  Fb = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      c = t.sortOrder,
      s = t.onClick,
      u = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      p = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      g = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      h = f === void 0 ? "Sort button" : f,
      b = t.isIconOnlyHeader,
      _ = ie(t, yP),
      y = m.useState(!1),
      k = W(y, 2),
      w = k[0],
      S = k[1],
      E = m.useState(!1),
      A = W(E, 2),
      j = A[0],
      P = A[1],
      D = u === l || c !== void 0,
      L = w || D || j,
      B = L && b,
      $ = !b || L || (b && !j),
      G = m.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      F = m.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      K = m.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      q = m.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      z = O.createElement(
        Mi,
        { xcss: tp.headCellContainer, onMouseEnter: K, onMouseLeave: q, onFocus: G, onBlur: F },
        O.createElement(
          _P,
          { content: c === Rr ? p : g },
          O.createElement(
            Pg,
            { onClick: s, xcss: Fa.buttonWrapper, "aria-roledescription": h },
            O.createElement(
              ui,
              { xcss: B ? Fa.hideIconHeaderWrapper : Fa.visibleHeaderWrapper },
              O.createElement("span", { className: R([tp.text]) }, r),
            ),
            $ &&
              O.createElement(
                ui,
                { xcss: L ? Fa.sortIconVisibleWrapper : Fa.sortIconHiddenWrapper },
                c === Rr
                  ? O.createElement(nx, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(ex, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      JE,
      te(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        _,
        { isSortable: i, sortOrder: c },
      ),
      i ? z : r,
    );
  },
  wP = ["isRanking", "refHeight", "refWidth"];
function kP(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, Nb() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function Nb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Nb = function () {
    return !!e;
  })();
}
var OP = (function (e) {
    function t() {
      return (be(this, t), kP(this, t, arguments));
    }
    return (
      et(t, e),
      _e(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = ie(n, wP),
              c = nw(a, o);
            return O.createElement(Fb, te({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(O.Component),
  SP = XE(OP),
  EP = ["cells"],
  xP = [
    "ascendingSortTooltip",
    "buttonAriaRoleDescription",
    "colSpan",
    "content",
    "descendingSortTooltip",
    "isIconOnlyHeader",
    "isSortable",
    "key",
    "shouldTruncate",
    "testId",
    "width",
  ];
function CP(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, Lb() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function Lb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lb = function () {
    return !!e;
  })();
}
var PP = (function (e) {
    function t(r) {
      var n;
      return (be(this, t), (n = CP(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      et(t, e),
      _e(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            ni(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              ni(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              o = a.head,
              i = a.sortKey,
              c = a.sortOrder,
              s = a.isFixedSize,
              u = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              p = a.testId,
              v = this.state.activeSortButtonId;
            if (!o) return null;
            var g = d ? SP : Fb,
              f = o.cells,
              h = ie(o, EP);
            return O.createElement(
              KE,
              te({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              O.createElement(
                "tr",
                null,
                f.map(function (b, _) {
                  var y = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    S = b.content,
                    E = b.descendingSortTooltip,
                    A = b.isIconOnlyHeader,
                    j = b.isSortable,
                    P = b.key,
                    D = b.shouldTruncate,
                    L = b.testId,
                    B = b.width,
                    $ = ie(b, xP),
                    G = "head-cell-".concat(_),
                    F = function () {
                      (n.setState({ activeSortButtonId: G }), j && u(b)());
                    };
                  return O.createElement(
                    g,
                    te(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: A,
                        isSortable: !!j,
                        isRanking: l,
                        key: P || _,
                        headCellId: G,
                        activeSortButtonId: v,
                        onClick: F,
                        testId: L || p,
                        shouldTruncate: D,
                        sortOrder: P === i ? c : void 0,
                        width: B,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: E,
                        buttonAriaRoleDescription: k,
                      },
                      $,
                    ),
                  );
                }),
              ),
            );
          },
        },
      ])
    );
  })(O.Component),
  RP = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function AP(e) {
  switch (e) {
    case ii:
      return Rr;
    case Rr:
      return ii;
    default:
      return e;
  }
}
var IP = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      o = t.rows,
      i = t.sortKey,
      c = t.sortOrder,
      s = t.loadingLabel,
      u = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      p = t.label,
      v = t.isLoading,
      g = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      h = f === void 0 ? !1 : f,
      b = t.rowsPerPage,
      _ = b === void 0 ? 1 / 0 : b,
      y = t.onSetPage,
      k = y === void 0 ? Ne : y,
      w = t.onSort,
      S = w === void 0 ? Ne : w,
      E = t.page,
      A = E === void 0 ? 1 : E,
      j = t.emptyView,
      P = t.isRankable,
      D = P === void 0 ? !1 : P,
      L = t.isRankingDisabled,
      B = L === void 0 ? !1 : L,
      $ = t.onRankStart,
      G = $ === void 0 ? Ne : $,
      F = t.onRankEnd,
      K = F === void 0 ? Ne : F,
      q = t.loadingSpinnerSize,
      z = t.paginationi18n,
      H =
        z === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : z,
      re = m.useState(!1),
      ce = W(re, 2),
      le = ce[0],
      Oe = ce[1],
      N = m.useRef(null),
      me = un({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      }),
      Le = un({
        fn: K,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      });
    m.useEffect(
      function () {
        (ni(i, n), rw(n));
      },
      [i, n],
    );
    var ve = function (Ee) {
        return function () {
          var xe = Ee.key;
          if (xe) {
            if (me && D && xe === i && c === ii) {
              me({ key: null, sortOrder: null, item: Ee });
              return;
            }
            var nt = xe !== i ? Rr : AP(c);
            me && me({ key: xe, item: Ee, sortOrder: nt });
          }
        };
      },
      Pe = function (Ee, xe) {
        k(Ee, xe);
      },
      pe = function (Ee) {
        (Oe(!0), G(Ee));
      },
      Be = function (Ee) {
        (Oe(!1), Le(Ee));
      },
      fr = function () {
        return q || (Qh(o || [], A, _).length > 2 ? si : S1);
      },
      er = function () {
        return g ? O.createElement(A1, { testId: l }) : j && O.createElement(I1, { testId: l }, j);
      },
      tt = o && o.length,
      je,
      rt = !1;
    (d && Number.isInteger(d) && _ && tt && tt <= d
      ? ((je = Math.ceil(d / _)), (rt = !0))
      : (je = tt && _ ? Math.ceil(tt / _) : 0),
      (je = je < 1 ? 1 : je));
    var kt = A > je ? je : A,
      He = !!tt,
      De = fr(),
      Te = er();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        kg,
        {
          isLoading: g && He,
          spinnerSize: De,
          targetRef: function () {
            return N.current;
          },
          testId: l,
          loadingLabel: s,
        },
        O.createElement(
          C1,
          { isFixedSize: h, "aria-label": p, hasDataRow: He, testId: l, isLoading: g },
          !!r && O.createElement(P1, null, r),
          n &&
            O.createElement(PP, {
              head: n,
              onSort: ve,
              sortKey: i,
              sortOrder: c,
              isRanking: le,
              isRankable: D,
              testId: l,
            }),
          He &&
            O.createElement(DP, {
              ref: N,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: _,
              page: kt,
              isFixedSize: h || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: rt,
              testId: l,
              isRankable: D,
              isRanking: le,
              onRankStart: pe,
              onRankEnd: Be,
              isRankingDisabled: B || g || !1,
            }),
        ),
      ),
      je <= 1
        ? null
        : O.createElement(
            R1,
            { testId: l },
            O.createElement(GE, {
              value: kt,
              onChange: Pe,
              total: je,
              i18n: H,
              isDisabled: g,
              testId: l,
            }),
          ),
      !He &&
        Te &&
        O.createElement(yg, { isLoading: g, spinnerSize: si, testId: l, loadingLabel: s }, Te),
    );
  },
  jP = m.lazy(function () {
    return it(
      () => import("./body-BiwHCMQo.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  DP = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = ie(t, RP),
      l = a && !u.sortKey,
      d = m.useState(!1),
      p = W(d, 2),
      v = p[0],
      g = p[1];
    m.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = O.createElement(H1, te({ ref: r }, u));
    return l && v
      ? O.createElement(
          K1,
          { fallback: f },
          O.createElement(
            m.Suspense,
            { fallback: f },
            O.createElement(
              jP,
              te({ ref: r }, u, {
                isRanking: o,
                onRankStart: i,
                onRankEnd: c,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : f;
  });
function TP(e, t, r) {
  return (
    (t = ee(t)),
    Qe(e, Bb() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r))
  );
}
function Bb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bb = function () {
    return !!e;
  })();
}
var Ub = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = TP(this, t, [].concat(a))),
      C(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      C(r, "onSetPageHandler", function (i, c) {
        var s = r.props.onSetPage;
        s && (s(i, c), r.setState({ page: i }));
      }),
      C(r, "onSortHandler", function (i, c) {
        var s = i.key,
          u = i.item,
          l = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: u, sortOrder: l }, c), r.setState({ sortKey: s, sortOrder: l }));
      }),
      C(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      C(r, "onRankEndHandler", function (i) {
        var c = i.destination,
          s = r.state,
          u = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!c || !u) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var p = aw(i, u, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    et(t, e),
    _e(t, [
      {
        key: "UNSAFE_componentWillReceiveProps",
        value: function (n) {
          var a = n.sortKey || this.state.sortKey,
            o = n.sortOrder || this.state.sortOrder,
            i = n.page || this.state.page;
          this.setState({ page: i, sortKey: a, sortOrder: o, rows: n.rows });
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.state,
            a = n.page,
            o = n.sortKey,
            i = n.sortOrder,
            c = n.rows,
            s = this.props,
            u = s.caption,
            l = s.emptyView,
            d = s.head,
            p = s.highlightedRowIndex,
            v = s.loadingSpinnerSize,
            g = s.isLoading,
            f = s.loadingLabel,
            h = s.isFixedSize,
            b = s.isRankable,
            _ = s.isRankingDisabled,
            y = s.rowsPerPage,
            k = s.paginationi18n,
            w = s.onRankStart,
            S = s.onPageRowsUpdate,
            E = s.testId,
            A = s.label;
          return O.createElement(IP, {
            paginationi18n: k,
            caption: u,
            emptyView: l,
            head: d,
            highlightedRowIndex: p,
            loadingSpinnerSize: v,
            isLoading: g,
            loadingLabel: f,
            isFixedSize: h,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: a,
            rows: c,
            rowsPerPage: y,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: _,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: S,
            testId: E,
            label: A,
          });
        },
      },
    ])
  );
})(O.Component);
C(Ub, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ne,
  onSort: Ne,
  rowsPerPage: 1 / 0,
});
const MP = (e) => {
    const t = [];
    return (
      t.push({ key: "id", content: "ID", isSortable: !1, width: 25 }),
      t.push({ key: "testDateColumn", content: "example Datetime", isSortable: !1, width: 25 }),
      t.push({ key: "testNameColumn", content: "Name", isSortable: !1, width: 25 }),
      t.push({ key: "version", content: "Version", isSortable: !1, width: 25 }),
      t.push({ key: "Action", content: "Action", isSortable: !1, width: 25 }),
      t
    );
  },
  FP = (e) => ({ cells: MP() });
function NP(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && Ae(r) === "object" && (r.current = t);
    });
  };
}
var qb = m.createContext(void 0),
  LP = function () {
    var t = m.useContext(qb);
    if (t) {
      if (t.appearance === "navigation") {
        var r = {
          spacing: "default",
          appearance: "subtle",
          isDisabled: !1,
          isActiveOverSelected: !1,
          isNavigationSplitButton: !0,
          isHighlighted: t.isHighlighted,
        };
        return r;
      }
      var n = {
        spacing: t.spacing,
        appearance: t.appearance,
        isDisabled: t.isDisabled,
        isActiveOverSelected: !0,
        isNavigationSplitButton: !1,
        isHighlighted: !1,
      };
      return n;
    }
  };
function Wt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var BP = 9;
function rp(e) {
  e.keyCode !== BP && Wt(e);
}
function UP(e, t) {
  return e
    ? {
        onMouseDownCapture: Wt,
        onMouseUpCapture: Wt,
        onKeyDownCapture: rp,
        onKeyUpCapture: rp,
        onTouchStartCapture: Wt,
        onTouchEndCapture: Wt,
        onPointerDownCapture: Wt,
        onPointerUpCapture: Wt,
        onClickCapture: Wt,
        onClick: Wt,
      }
    : t;
}
function qP(e) {
  return e === "compact" ? "small" : "medium";
}
function zP(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function $P(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(Zc, {
    size: qP(r),
    appearance: zP({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var VP = [
    "appearance",
    "autoFocus",
    "isDisabled",
    "isLoading",
    "isSelected",
    "isIconButton",
    "isCircle",
    "hasIconBefore",
    "hasIconAfter",
    "shouldFitContainer",
    "spacing",
    "ariaLabel",
    "ariaLabelledBy",
    "children",
    "interactionName",
    "onClick",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onClickCapture",
    "testId",
    "analyticsContext",
    "componentName",
    "role",
    "onMouseOver",
    "onMouseOut",
    "onFocus",
    "onBlur",
    "onMouseMove",
    "type",
  ],
  GP = ["className", "css", "as", "style"],
  np = ", Loading",
  Se = {
    base: "_2rkofajl _11c8fhey _v5649dqc _189eidpf _1rjc12x7 _1e0c116y _vchhusvi _1bsb1wug _p12f1osq _kqswh2mm _4cvr1q9y _1bah1h6o _gy1p1b66 _1o9zidpf _4t3iviql _k48p1wq8 _y4tiutpp _bozgutpp _y3gn1h6o _s7n4nkob _14mj1kw7 _9v7aze3t _1tv3nqa1 _39yqe4h9 _11fnglyw _18postnw",
    baseT26Shape: "_2rko1qi0",
    linkDecorationUnset:
      "_4bfu1r31 _1hmsglyw _ajmmnqa1 _1a3b1r31 _4fprglyw _5goinqa1 _9oik1r31 _1bnxglyw _jf4cnqa1 _1nrm1r31 _c2waglyw _1iohnqa1",
    disabled: "_80om13gf _syaz1gmx _30l31gmx _9h8h1gmx",
    sharedDisabled: "_bfhk1fvb _irr31fvb _1di61fvb",
    spacingCompact: "_1rjcv77o _gy1p1b66 _4t3i1k8s _y4tiutpp _bozgutpp _s7n4nkob",
    spacingCompactT26Shape: "_2rko12b0",
    circle: "_2rko1rr0",
    fullWidth: "_1bsb1osq",
    loading: "_80om15jw",
    iconButton: "_4t3iviql _1bsbviql _y4tize3t _bozgze3t",
    iconButtonCompact: "_4t3i1k8s _1bsb1k8s",
    buttonIconBeforeWithHack: "_bozgu2gc",
    buttonIconAfterWithHack: "_y4tiu2gc",
    buttonIconBefore: "_bozgutpp _gy1p12x7",
    buttonIconAfter: "_y4tiutpp _gy1p12x7",
    splitButton: "_g0pbb4wl",
    loadingOverlay:
      "_1reo15vq _18m915vq _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _u7coze3t _152tze3t _rjxpze3t _1e02ze3t",
    navigationSplitButton: "_1bsb1tcg _bfhksm61 _y4ti12x7 _bozg12x7",
  },
  ac = {
    root: "_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr31dpa _30l3azsu _1di6fcek _9h8hazsu",
    disabled: "_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28",
  },
  ap = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  op = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  ip = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  sp = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  cp = {
    root: "_bfhkqtfy _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr34mfv _30l3azsu _1di619qy _9h8hazsu",
  },
  Qr = {
    root: "_bfhk15s3 _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  HP = O.forwardRef(function (e, t) {
    var r = e.appearance,
      n = e.autoFocus,
      a = n === void 0 ? !1 : n,
      o = e.isDisabled,
      i = o === void 0 ? !1 : o,
      c = e.isLoading,
      s = c === void 0 ? !1 : c,
      u = e.isSelected,
      l = u === void 0 ? !1 : u,
      d = e.isIconButton,
      p = d === void 0 ? !1 : d,
      v = e.isCircle,
      g = v === void 0 ? !1 : v,
      f = e.hasIconBefore,
      h = f === void 0 ? !1 : f,
      b = e.hasIconAfter,
      _ = b === void 0 ? !1 : b,
      y = e.shouldFitContainer,
      k = y === void 0 ? !1 : y,
      w = e.spacing,
      S = w === void 0 ? "default" : w,
      E = e.ariaLabel,
      A = e.ariaLabelledBy,
      j = e.children,
      P = e.interactionName,
      D = e.onClick,
      L = e.onMouseDown,
      B = e.onMouseDownCapture,
      $ = e.onMouseUp,
      G = e.onMouseUpCapture,
      F = e.onKeyDown,
      K = e.onKeyDownCapture,
      q = e.onKeyUp,
      z = e.onKeyUpCapture,
      H = e.onTouchStart,
      re = e.onTouchStartCapture,
      ce = e.onTouchEnd,
      le = e.onTouchEndCapture,
      Oe = e.onPointerDown,
      N = e.onPointerDownCapture,
      me = e.onPointerUp,
      Le = e.onPointerUpCapture,
      ve = e.onClickCapture,
      Pe = e.testId,
      pe = e.analyticsContext,
      Be = e.componentName,
      fr = e.role,
      er = e.onMouseOver,
      tt = e.onMouseOut,
      je = e.onFocus,
      rt = e.onBlur,
      kt = e.onMouseMove,
      He = e.type,
      De = ie(e, VP),
      Te = m.useRef(null),
      ne = LP(),
      Ee = Wg(),
      xe = !!ne,
      nt = ne?.isNavigationSplitButton || !1,
      Lt = ne?.appearance === "default",
      ge = Lt ? "subtle" : r || ne?.appearance || "default",
      Bt = ne?.spacing || S,
      We = ne?.isDisabled || i,
      Ut = !We && !s,
      mn = We || s,
      qt = l && !We;
    (cb(Te, a), De.className, De.css, De.as, De.style);
    var $i = ie(De, GP);
    return O.createElement(
      Pg,
      te(
        {},
        $i,
        {
          componentName: Be || "button",
          analyticsContext: pe,
          role: fr,
          ref: NP([Te, t]),
          xcss: Eg(
            Se.base,
            J("platform-dst-shape-theme-default") && Se.baseT26Shape,
            ge === "default" && ac.root,
            ge === "default" && Ut && ac.interactive,
            ge === "primary" && ap.root,
            ge === "primary" && Ut && ap.interactive,
            ge === "warning" && op.root,
            ge === "warning" && Ut && op.interactive,
            ge === "danger" && ip.root,
            ge === "danger" && Ut && ip.interactive,
            ge === "discovery" && sp.root,
            ge === "discovery" && Ut && sp.interactive,
            ge === "subtle" && cp.root,
            ge === "subtle" && Ut && cp.interactive,
            Se.linkDecorationUnset,
            qt && Qr.root,
            qt && xe && Qr.insideSplitButton,
            qt && Ut && Qr.interactive,
            qt && ge === "danger" && Qr.danger,
            qt && ge === "warning" && Qr.warning,
            qt && ge === "discovery" && Qr.discovery,
            We && Se.disabled,
            We && ge !== "default" && ge !== "subtle" && Se.sharedDisabled,
            We && ge === "default" && ac.disabled,
            g && !xe && Se.circle,
            Bt === "compact" && Se.spacingCompact,
            Bt === "compact" && J("platform-dst-shape-theme-default") && Se.spacingCompactT26Shape,
            k && Se.fullWidth,
            h && !J("platform-button-icon-spacing-cleanup") && Se.buttonIconBeforeWithHack,
            _ && !J("platform-button-icon-spacing-cleanup") && Se.buttonIconAfterWithHack,
            h && J("platform-button-icon-spacing-cleanup") && Se.buttonIconBefore,
            _ && J("platform-button-icon-spacing-cleanup") && Se.buttonIconAfter,
            p && Se.iconButton,
            p && Bt === "compact" && Se.iconButtonCompact,
            s && Se.loading,
            xe && Se.splitButton,
            nt && Se.navigationSplitButton,
          ),
          isDisabled: J("platform-dst_fix_not_focusable_loading_button") ? We : mn,
        },
        J("platform-dst_fix_not_focusable_loading_button") && { "aria-live": "polite" },
        s && J("platform-dst_fix_not_focusable_loading_button") && { "aria-disabled": !0 },
        {
          "aria-label": s && E && !A ? "".concat(E, " ").concat(np) : E,
          "aria-labelledby": s && A ? "".concat(A, " ").concat(Ee) : A,
          onClick: D,
        },
        UP(mn, {
          onMouseDownCapture: B,
          onMouseUpCapture: G,
          onKeyDownCapture: K,
          onKeyUpCapture: z,
          onTouchStartCapture: re,
          onTouchEndCapture: le,
          onPointerDownCapture: N,
          onPointerUpCapture: Le,
          onClickCapture: ve,
        }),
        {
          testId: Pe,
          onMouseOver: er,
          onFocus: je,
          onMouseMove: kt,
          onBlur: rt,
          type: He,
          interactionName: P,
          onMouseDown: L,
          onMouseUp: $,
          onKeyDown: F,
          onMouseOut: tt,
          onKeyUp: q,
          onTouchStart: H,
          onTouchEnd: ce,
          onPointerDown: Oe,
          onPointerUp: me,
        },
      ),
      O.createElement(
        qb.Provider,
        { value: void 0 },
        j,
        s &&
          O.createElement(
            "span",
            { className: R([Se.loadingOverlay]) },
            $P({ spacing: Bt, appearance: ge, isDisabled: We, isSelected: qt, testId: Pe }),
          ),
        s && (A || !E) && O.createElement(Li, { id: Ee }, np),
      ),
    );
  }),
  en = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    common: "_v564g17y",
    fade: "_tzy4idpf",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
  },
  oc = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: R([
          en.common,
          a === "text" && en.text,
          a === "icon" && en.icon,
          o && en.fade,
          !J("platform-button-icon-spacing-cleanup") && i === "before" && en.beforeIcon,
          !J("platform-button-icon-spacing-cleanup") && i === "after" && en.afterIcon,
        ]),
      },
      r,
    );
  };
function WP(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var up = function (t) {
    var r = t.icon,
      n = WP(r),
      a = {
        label: "",
        color: "currentColor",
        size: J("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  KP = [
    "analyticsContext",
    "appearance",
    "aria-label",
    "aria-labelledby",
    "autoFocus",
    "children",
    "iconAfter",
    "iconBefore",
    "interactionName",
    "isDisabled",
    "isLoading",
    "isSelected",
    "onClick",
    "onClickCapture",
    "onKeyDownCapture",
    "onKeyUpCapture",
    "onMouseDownCapture",
    "onMouseUpCapture",
    "onPointerDownCapture",
    "onPointerUpCapture",
    "onTouchEndCapture",
    "onTouchStartCapture",
    "shouldFitContainer",
    "spacing",
    "testId",
    "type",
  ],
  JP = ["className", "css", "as", "style"],
  _u = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.analyticsContext,
        a = t.appearance,
        o = t["aria-label"],
        i = t["aria-labelledby"],
        c = t.autoFocus,
        s = t.children,
        u = t.iconAfter,
        l = t.iconBefore,
        d = t.interactionName,
        p = t.isDisabled,
        v = t.isLoading,
        g = v === void 0 ? !1 : v,
        f = t.isSelected,
        h = t.onClick,
        b = t.onClickCapture,
        _ = t.onKeyDownCapture,
        y = t.onKeyUpCapture,
        k = t.onMouseDownCapture,
        w = t.onMouseUpCapture,
        S = t.onPointerDownCapture,
        E = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        j = t.onTouchStartCapture,
        P = t.shouldFitContainer,
        D = t.spacing,
        L = t.testId,
        B = t.type,
        $ = B === void 0 ? "button" : B,
        G = ie(t, KP);
      (G.className, G.css, G.as, G.style);
      var F = ie(G, JP);
      return O.createElement(
        HP,
        te(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: c,
            isDisabled: p,
            isLoading: g,
            isSelected: f,
            hasIconBefore: !!l,
            hasIconAfter: !!u,
            shouldFitContainer: P,
            spacing: D,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: h,
            onClickCapture: b,
            onKeyDownCapture: _,
            onKeyUpCapture: y,
            onMouseDownCapture: k,
            onMouseUpCapture: w,
            onPointerDownCapture: S,
            onPointerUpCapture: E,
            onTouchStartCapture: j,
            onTouchEndCapture: A,
            testId: L,
            componentName: "Button",
            type: $,
            interactionName: d,
          },
          F,
        ),
        l &&
          O.createElement(
            oc,
            { type: "icon", position: "before", isLoading: g },
            O.createElement(up, { icon: l }),
          ),
        s && O.createElement(oc, { isLoading: g }, s),
        u &&
          O.createElement(
            oc,
            { type: "icon", position: "after", isLoading: g },
            O.createElement(up, { icon: u }),
          ),
      );
    }),
  );
_u.displayName = "Button";
const To = ji((e) => {
  const { stateStore: t } = Di(),
    r = FP();
  let n;
  switch (e.type) {
    case "WITHOUT_VERSIONING": {
      n = t.testData;
      break;
    }
    case "OPTIMISTIC_NUMBER": {
      n = t.testDataOptimisticNumber;
      break;
    }
    case "OPTIMISTIC_DATE": {
      n = t.testDataOptimisticDateId;
      break;
    }
    case "OPTIMISTIC_TIMESTAMP": {
      n = t.testDataOptimisticTimeStampId;
      break;
    }
    default:
      return x.jsxs("div", { children: ["Unsupported $", e.type] });
  }
  return n
    ? x.jsx("div", {
        children: x.jsxs("div", {
          children: [
            x.jsx(Ub, {
              head: r,
              rows: [n].map((a, o) => {
                const i = [
                  { key: "id", content: a.id },
                  { key: "testDateColumn", content: String(a.testDateColumn) },
                  { key: "testNameColumn", content: a.testNameColumn },
                  { key: "version", content: a.version !== void 0 ? String(a.version) : "EMPTY" },
                  {
                    key: "action",
                    content: x.jsx("div", {
                      children: x.jsx(_u, {
                        appearance: "warning",
                        onClick: () => t.saveState(e.type),
                        children: "update",
                      }),
                    }),
                  },
                ];
                return { key: `row-${o}-${a.id}`, cells: i };
              }),
              rowsPerPage: 10,
              defaultPage: 1,
              loadingSpinnerSize: "large",
              emptyView: x.jsx("div", { children: "Table is EMPTY" }),
              isRankable: !0,
            }),
            x.jsx("br", {}),
            x.jsx("br", {}),
          ],
        }),
      })
    : x.jsx("div", { children: "Try update first" });
});
function YP(e) {
  return Xh(e) || eg(e) || Kc(e) || Zh();
}
var zb = m.createContext(null),
  $b = m.createContext(null),
  Vb = m.createContext(null);
function lp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function XP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ZP = {
    componentName: "tabs",
    packageName: "@atlaskit/tabs",
    packageVersion: "0.0.0-development",
  },
  dp = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      m.createElement(
        Vb.Provider,
        {
          value: {
            role: "tabpanel",
            id: "".concat(o, "-").concat(n, "-tab"),
            hidden: a ? void 0 : !0,
            "aria-labelledby": "".concat(o, "-").concat(n),
            tabIndex: a ? 0 : -1,
          },
          key: n,
        },
        r,
      )
    );
  },
  QP = function (t) {
    var r = t.shouldUnmountTabPanelOnChange,
      n = r === void 0 ? !1 : r,
      a = t.selected,
      o = t.defaultSelected,
      i = t.onChange,
      c = t.id,
      s = t.analyticsContext,
      u = t.children,
      l = t.testId,
      d = m.useState(a || o || 0),
      p = W(d, 2),
      v = p[0],
      g = p[1],
      f = a === void 0 ? v : a,
      h = m.Children.toArray(u).filter(function (A) {
        return !!A;
      }),
      b = YP(h),
      _ = b[0],
      y = b.slice(1),
      k = m.useRef(new Set([f]));
    k.current.has(f) || k.current.add(f);
    var w = m.useCallback(
        function (A, j) {
          (i && i(A, j), g(A));
        },
        [i],
      ),
      S = un(XP({ fn: w, action: "clicked", analyticsData: s }, ZP)),
      E = n
        ? dp({ tabPanel: y[f], index: f, isSelected: !0, tabsId: c })
        : Array.from(k.current).map(function (A) {
            return dp({ tabPanel: y[A], index: A, isSelected: A === f, tabsId: c });
          });
    return m.createElement(
      "div",
      {
        "data-testid": l,
        className: R([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      m.createElement($b.Provider, { value: { selected: f, onChange: S, tabsId: c } }, _),
      m.createElement(m.Fragment, null, E),
    );
  },
  eR = function () {
    var t = m.useContext(zb);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  tR = function () {
    var t = m.useContext($b);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  rR = function () {
    var t = m.useContext(Vb);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  Na = function (t) {
    var r = t.children,
      n = t.testId,
      a = rR(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      u = a.tabIndex;
    return O.createElement(
      eu,
      {
        as: "div",
        isInset: !0,
        testId: n,
        role: o,
        id: i,
        hidden: c,
        "aria-labelledby": s,
        tabIndex: u,
      },
      O.createElement(m.Fragment, null, r),
    );
  },
  Mo = m.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = eR(),
      i = o.onClick,
      c = o.id,
      s = o["aria-controls"],
      u = o["aria-posinset"],
      l = o["aria-selected"],
      d = o["aria-setsize"],
      p = o.onKeyDown,
      v = o.role,
      g = o.tabIndex;
    return O.createElement(
      eu,
      {
        as: "div",
        isInset: !0,
        testId: a,
        onClick: i,
        id: c,
        "aria-controls": s,
        "aria-posinset": u,
        "aria-selected": l,
        "aria-setsize": d,
        onKeyDown: p,
        role: v,
        tabIndex: g,
        ref: r,
      },
      O.createElement(Cg, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  nR = function (t) {
    var r = t.children,
      n = tR(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      c = m.createRef(),
      s = m.Children.toArray(r).filter(Boolean),
      u = s.length,
      l = m.useCallback(
        function (v) {
          var g,
            f =
              (g = c.current) === null || g === void 0
                ? void 0
                : g.querySelector("[id='".concat(a, "-").concat(v, "']"));
          (f && f.focus(), i(v));
        },
        [a, c, i],
      ),
      d = m.useCallback(
        function (v) {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(v.key)) {
            v.preventDefault();
            var g = u - 1;
            if (["Home", "End"].includes(v.key)) {
              var f = v.key === "Home" ? 0 : g;
              l(f);
              return;
            }
            var h = parseInt(v.currentTarget.getAttribute("aria-posinset") || "0") - 1,
              b = v.key === "ArrowRight" ? 1 : -1,
              _ = h + b;
            ((_ < 0 || _ >= u) && (_ = _ < 0 ? g : 0), l(_));
          }
        },
        [u, l],
      ),
      p = m.useCallback(
        function (v) {
          var g = v.tab,
            f = v.isSelected,
            h = v.index;
          return m.createElement(
            zb.Provider,
            {
              value: {
                onClick: function () {
                  return i(h);
                },
                onKeyDown: d,
                "aria-setsize": u,
                role: "tab",
                id: "".concat(a, "-").concat(h),
                "aria-posinset": h + 1,
                "aria-selected": f,
                "aria-controls": "".concat(a, "-").concat(h, "-tab"),
                tabIndex: f ? 0 : -1,
              },
              key: h,
            },
            g,
          );
        },
        [u, d, i, a],
      );
    return m.createElement(
      "div",
      {
        role: "tablist",
        ref: c,
        className: R([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzuokkv _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8dokkv _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz73hj _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": ar("var(--ds-text-subtle, ".concat(ci, ")")),
          "--_kkbq40": ar("var(--ds-text-subtle, ".concat(Ws, ")")),
          "--_71dbsd": ar("var(--ds-text, ".concat(J1, ")")),
          "--_1hfkvbo": ar("var(--ds-text-selected, ".concat(Ws, ")")),
          "--_1q7mpl4": ar(
            "var(--ds-border-width-selected, 2px)".concat(
              " solid ",
              "var(--ds-border-selected, ".concat(Ws, ")"),
            ),
          ),
          "--_lvpq93": ar("var(--ds-border, ".concat(X1, ")")),
        },
      },
      s.map(function (v, g) {
        return p({ tab: v, index: g, isSelected: g === o });
      }),
    );
  },
  Gb = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(Gb || {});
const aR = Object.keys(Gb).filter((e) => isNaN(Number(e))),
  Fo = ({ children: e, testId: t }) =>
    x.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: Gt("color.background.neutral"),
        borderRadius: "3px",
        color: Gt("color.text.subtlest"),
        font: Gt("font.heading.xxlarge"),
        marginBlockEnd: Gt("space.100", "8px"),
        marginBlockStart: Gt("space.200", "16px"),
        paddingBlockEnd: Gt("space.400", "32px"),
        paddingBlockStart: Gt("space.400", "32px"),
        paddingInlineEnd: Gt("space.400", "32px"),
        paddingInlineStart: Gt("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function oR() {
  const { stateStore: e } = Di();
  return e.isLoading
    ? "loading...."
    : x.jsxs("div", {
        children: [
          x.jsxs("div", {
            className: "reset-section",
            children: [
              x.jsx("h2", { children: "Reset All" }),
              x.jsx("p", {
                children:
                  "Click the button below to revert all test entities to their initial state. This removes any changes you've made during testing.",
              }),
              x.jsx("br", {}),
              x.jsxs(_u, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await Ya.invoke("clearAll", {
                        testDataId: e.testData?.id,
                        testDataOptimisticNumberId: e.testDataOptimisticNumber?.id,
                        testDataOptimisticDateId: e.testDataOptimisticDateId?.id,
                        testDataOptimisticTimeStampId: e.testDataOptimisticTimeStampId?.id,
                      }));
                  } finally {
                    e.stopLoading();
                  }
                  window.location.reload();
                },
                children: [" ", "Reset All"],
              }),
            ],
          }),
          x.jsx("br", {}),
          x.jsx("p", {
            children:
              "Use the tabs below to navigate between different examples of optimistic locking. Each tab demonstrates a different versioning approach, along with instructions on how to test the locking behavior.",
          }),
          x.jsx("br", {}),
          x.jsxs(QP, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              x.jsxs(nR, {
                children: [
                  " ",
                  aR.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return x.jsx(
                          Mo,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return x.jsx(Mo, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return x.jsx(
                          Mo,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return x.jsx(
                          Mo,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              x.jsx(Na, { children: x.jsx(x.Fragment, {}) }),
              x.jsx(Na, {
                children: x.jsx(Fo, {
                  children: x.jsxs("div", {
                    children: [
                      x.jsx("h2", { children: "Entity Without Version Column (No Locking)" }),
                      x.jsx("p", {
                        children:
                          "This entity does not use any versioning or optimistic locking mechanism. When two users open the same record in different browser tabs and both make changes, the last update simply overwrites the previous changes. There is no conflict detection in place.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the second tab, also change a field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "Both updates will succeed, and the second update will overwrite the first one.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(To, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              x.jsx(Na, {
                children: x.jsx(Fo, {
                  children: x.jsxs("div", {
                    className: "entity-section",
                    children: [
                      x.jsx("h2", { children: "Entity with Numeric Version Column" }),
                      x.jsx("p", {
                        children:
                          "This entity uses an integer field for optimistic locking. When a user updates the record, the version number increments. A second user with an outdated version will encounter an error upon saving.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ". This succeeds and increments the version number.",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "In the second tab, attempt to update the record without refreshing.",
                          }),
                          x.jsx("li", {
                            children:
                              "The update will fail with an optimistic locking error, indicating the record was modified elsewhere.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(To, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              x.jsx(Na, {
                children: x.jsx(Fo, {
                  children: x.jsxs("div", {
                    className: "entity-section",
                    children: [
                      x.jsx("h2", { children: "Entity with DateTime-Based Version Column" }),
                      x.jsx("p", {
                        children:
                          "This entity uses a datetime field for optimistic locking. Whenever the record is updated, the date-based version changes. Any subsequent update with the old date value will fail.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ". This sets or updates the date-based version.",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "In the second tab, try to update the record without refreshing.",
                          }),
                          x.jsx("li", {
                            children:
                              "The second update will fail with an optimistic locking error because the version date has changed.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(To, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              x.jsx(Na, {
                children: x.jsx(Fo, {
                  children: x.jsxs("div", {
                    className: "entity-section",
                    children: [
                      x.jsx("h2", { children: "Entity with Timestamp-Based Version Column" }),
                      x.jsx("p", {
                        children:
                          "This entity uses a timestamp column for optimistic locking. Whenever the record is updated, the timestamp is refreshed. Any subsequent update attempts with an outdated timestamp will fail.",
                      }),
                      x.jsx("h3", { children: "How to Test" }),
                      x.jsxs("ol", {
                        children: [
                          x.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          x.jsxs("li", {
                            children: [
                              "In the first tab, modify any field and click ",
                              x.jsx("strong", { children: "Update" }),
                              ". This refreshes the timestamp.",
                            ],
                          }),
                          x.jsx("li", {
                            children:
                              "In the second tab, try to update the record without reloading the page.",
                          }),
                          x.jsx("li", {
                            children:
                              "The second update will fail, indicating that another process has already changed the record.",
                          }),
                        ],
                      }),
                      x.jsx("br", {}),
                      x.jsx(To, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const iR = ji(oR),
  sR = ji((e) => {
    const { stateStore: t } = Di(),
      [r, n] = m.useState(""),
      [a, o] = m.useState({}),
      i = (u) => {
        const { name: l, value: d, type: p } = u.target;
        o((v) => ({ ...v, [l]: p === "number" ? Number(d) : d }));
      },
      c = async (u) => {
        u.preventDefault();
        const l = { ...s };
        (a.testNameColumn && (l.testNameColumn = a.testNameColumn),
          a.testDateColumn && (l.testDateColumn = new Date(a.testDateColumn)));
        const d = await Ya.invoke("update", { data: l, objectName: e.type });
        n(d);
      };
    let s;
    switch (e.type) {
      case "WITHOUT_VERSIONING": {
        s = t.testData;
        break;
      }
      case "OPTIMISTIC_NUMBER": {
        s = t.testDataOptimisticNumber;
        break;
      }
      case "OPTIMISTIC_DATE": {
        s = t.testDataOptimisticDateId;
        break;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        s = t.testDataOptimisticTimeStampId;
        break;
      }
      default:
        return x.jsxs("div", { children: ["Unsupported $", e.type] });
    }
    return x.jsxs("div", {
      children: [
        x.jsx("div", {
          children: x.jsx("button", {
            onClick: async () => {
              try {
                t.loading();
                const u = await Ya.invoke("fetchOrCreateIfNotExists");
                t.saveResponse(u);
              } finally {
                t.stopLoading();
              }
              t.saveState("ROOT");
            },
            children: "Back to main",
          }),
        }),
        x.jsx("br", {}),
        x.jsxs("form", {
          onSubmit: c,
          children: [
            x.jsxs(
              "div",
              {
                children: [
                  x.jsx("label", { htmlFor: "testNameColumn", children: "Name" }),
                  x.jsx("br", {}),
                  x.jsx("input", {
                    type: "text",
                    id: "testNameColumn",
                    name: "testNameColumn",
                    defaultValue: s.testNameColumn,
                    onChange: i,
                  }),
                  x.jsx("br", {}),
                ],
              },
              "testNameColumn",
            ),
            x.jsxs(
              "div",
              {
                children: [
                  x.jsx("label", { htmlFor: "testDateColumn", children: "dateTime" }),
                  x.jsx("br", {}),
                  x.jsx("input", {
                    type: "datetime-local",
                    id: "testDateColumn",
                    name: "testDateColumn",
                    defaultValue: String(s.testDateColumn),
                    onChange: i,
                  }),
                  x.jsx("br", {}),
                ],
              },
              "testDateColumn",
            ),
            x.jsx("br", {}),
            x.jsx("input", {
              type: "submit",
              value: "Submit",
              disabled: Object.keys(a).length === 0,
            }),
          ],
        }),
        x.jsx("br", {}),
        x.jsx("br", {}),
        r
          ? x.jsxs("div", {
              children: [x.jsx("p", { children: "STATUS:" }), x.jsxs("b", { children: [" ", r] })],
            })
          : null,
      ],
    });
  });
function cR() {
  const { stateStore: e } = Di();
  if (
    (m.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await Ya.invoke("fetchOrCreateIfNotExists");
          e.saveResponse(r);
        } finally {
          e.stopLoading();
        }
      })().catch(console.error);
    }, []),
    e.isLoading)
  )
    return e.message;
  switch (e.state) {
    case "ROOT":
      return x.jsx(iR, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return x.jsx(sR, { type: e.state });
    default:
      return x.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const uR = ji(cR),
  lR = document.getElementById("root"),
  dR = Qb.createRoot(lR),
  fp = () => {
    dR.render(x.jsx(Kh, { ...Jh, children: x.jsx(uR, {}) }));
  };
Ya.view.theme
  .enable()
  .then(() => {
    fp();
  })
  .catch((e) => {
    (console.error(e.message), fp());
  });
export {
  Qf as A,
  ye as B,
  Fg as C,
  Ni as D,
  Fi as E,
  xR as F,
  ER as G,
  kR as H,
  O as R,
  U1 as T,
  et as _,
  _e as a,
  xc as b,
  be as c,
  ee as d,
  Qe as e,
  W as f,
  C as g,
  ie as h,
  Fr as i,
  Fe as j,
  te as k,
  qk as l,
  Yt as m,
  Nt as n,
  R as o,
  L1 as p,
  nw as q,
  m as r,
  M1 as s,
  OR as t,
  wR as u,
  yR as v,
  XE as w,
  mR as x,
  SR as y,
  Zf as z,
};
