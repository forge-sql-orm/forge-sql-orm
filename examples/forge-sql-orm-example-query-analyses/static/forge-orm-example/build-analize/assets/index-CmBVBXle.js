const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-CT8OtY7f.js",
      "./lodash-vendor-Cp37rRJM.js",
      "./custom-theme-1f35Qmd7.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./client-core-vendor-DvNMujoU.js",
      "./body-Bsr1mGMZ.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as kr, a as Qo, c as bb } from "./react-dom-vendor--YlRhZCI.js";
import { g as qv, r as mb, a as er } from "./lodash-vendor-Cp37rRJM.js";
import { r as Qt, a as It, s as Je } from "./client-core-vendor-DvNMujoU.js";
function _b(e, t) {
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
var Di = { exports: {} },
  dn = {};
var uu;
function yb() {
  if (uu) return dn;
  uu = 1;
  var e = kr(),
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
  return ((dn.Fragment = r), (dn.jsx = i), (dn.jsxs = i), dn);
}
var lu;
function wb() {
  return (lu || ((lu = 1), (Di.exports = yb())), Di.exports);
}
var C = wb(),
  Ti = {},
  zs = function (e, t) {
    return (
      (zs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      zs(e, t)
    );
  };
function zv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  zs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Do = function () {
  return (
    (Do =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Do.apply(this, arguments)
  );
};
function $v(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Vv(e, t, r, n) {
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
function Gv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Hv(e, t, r, n, a, o) {
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
    var h = {};
    for (var f in n) h[f] = f === "access" ? {} : n[f];
    for (var f in n.access) h.access[f] = n.access[f];
    h.addInitializer = function (b) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(b || null));
    };
    var g = (0, r[v])(c === "accessor" ? { get: l.get, set: l.set } : l[s], h);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = i(g.get)) && (l.get = d),
        (d = i(g.set)) && (l.set = d),
        (d = i(g.init)) && a.unshift(d));
    } else (d = i(g)) && (c === "field" ? a.unshift(d) : (l[s] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (p = !0));
}
function Wv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Kv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Yv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Jv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Xv(e, t, r, n) {
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
function Qv(e, t) {
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
var Zo = Object.create
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
function Zv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Zo(t, e, r);
}
function To(e) {
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
function Oc(e, t) {
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
function ep() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Oc(arguments[t]));
  return e;
}
function tp() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function rp(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Yr(e) {
  return this instanceof Yr ? ((this.v = e), this) : new Yr(e);
}
function np(e, t, r) {
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
    return function (h) {
      return Promise.resolve(h).then(v, d);
    };
  }
  function c(v, h) {
    n[v] &&
      ((a[v] = function (f) {
        return new Promise(function (g, b) {
          o.push([v, f, g, b]) > 1 || s(v, f);
        });
      }),
      h && (a[v] = h(a[v])));
  }
  function s(v, h) {
    try {
      u(n[v](h));
    } catch (f) {
      p(o[0][3], f);
    }
  }
  function u(v) {
    v.value instanceof Yr ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
  }
  function l(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function p(v, h) {
    (v(h), o.shift(), o.length && s(o[0][0], o[0][1]));
  }
}
function ap(e) {
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
          return (r = !r) ? { value: Yr(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function op(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof To == "function" ? To(e) : e[Symbol.iterator]()),
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
function ip(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var kb = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  $s = function (e) {
    return (
      ($s =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      $s(e)
    );
  };
function sp(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = $s(e), n = 0; n < r.length; n++) r[n] !== "default" && Zo(t, e, r[n]);
  return (kb(t, e), t);
}
function cp(e) {
  return e && e.__esModule ? e : { default: e };
}
function up(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function lp(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function dp(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function fp(e, t, r) {
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
var Ob =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function vp(e) {
  function t(o) {
    ((e.error = e.hasError ? new Ob(o, e.error, "An error was suppressed during disposal.") : o),
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
function pp(e, t) {
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
const Sb = {
    __extends: zv,
    __assign: Do,
    __rest: $v,
    __decorate: Vv,
    __param: Gv,
    __esDecorate: Hv,
    __runInitializers: Wv,
    __propKey: Kv,
    __setFunctionName: Yv,
    __metadata: Jv,
    __awaiter: Xv,
    __generator: Qv,
    __createBinding: Zo,
    __exportStar: Zv,
    __values: To,
    __read: Oc,
    __spread: ep,
    __spreadArrays: tp,
    __spreadArray: rp,
    __await: Yr,
    __asyncGenerator: np,
    __asyncDelegator: ap,
    __asyncValues: op,
    __makeTemplateObject: ip,
    __importStar: sp,
    __importDefault: cp,
    __classPrivateFieldGet: up,
    __classPrivateFieldSet: lp,
    __classPrivateFieldIn: dp,
    __addDisposableResource: fp,
    __disposeResources: vp,
    __rewriteRelativeImportExtension: pp,
  },
  Eb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: fp,
        get __assign() {
          return Do;
        },
        __asyncDelegator: ap,
        __asyncGenerator: np,
        __asyncValues: op,
        __await: Yr,
        __awaiter: Xv,
        __classPrivateFieldGet: up,
        __classPrivateFieldIn: dp,
        __classPrivateFieldSet: lp,
        __createBinding: Zo,
        __decorate: Vv,
        __disposeResources: vp,
        __esDecorate: Hv,
        __exportStar: Zv,
        __extends: zv,
        __generator: Qv,
        __importDefault: cp,
        __importStar: sp,
        __makeTemplateObject: ip,
        __metadata: Jv,
        __param: Gv,
        __propKey: Kv,
        __read: Oc,
        __rest: $v,
        __rewriteRelativeImportExtension: pp,
        __runInitializers: Wv,
        __setFunctionName: Yv,
        __spread: ep,
        __spreadArray: rp,
        __spreadArrays: tp,
        __values: To,
        default: Sb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Be = qv(Eb);
var fn = {},
  du;
function xb() {
  return (
    du ||
      ((du = 1),
      Object.defineProperty(fn, "__esModule", { value: !0 }),
      (fn.NavigationTarget = void 0),
      (fn.NavigationTarget = {
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
    fn
  );
}
var Mi = {},
  Fi = {},
  vn = {},
  pn = {},
  fu;
function be() {
  if (fu) return pn;
  ((fu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((pn.BridgeAPIError = e), pn);
}
var vu;
function ue() {
  if (vu) return vn;
  ((vu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.getCallBridge = void 0));
  const e = be();
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
  return ((vn.getCallBridge = r), vn);
}
var hn = {},
  pu;
function ei() {
  if (pu) return hn;
  ((pu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.withRateLimiter = void 0));
  const e = be(),
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
  return ((hn.withRateLimiter = t), hn);
}
var hu;
function Cb() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ue(),
          r = be(),
          n = ei(),
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
      })(Fi)),
    Fi
  );
}
var gu;
function Ja() {
  return (
    gu ||
      ((gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Be.__exportStar(Cb(), e));
      })(Mi)),
    Mi
  );
}
var Li = {},
  gn = {},
  Ni = {},
  bu;
function hp() {
  return (
    bu ||
      ((bu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ue(),
          r = be(),
          n = ei(),
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
              h = await c("invoke", v),
              { success: f, payload: g, error: b } = h ?? {},
              m = { ...(f ? g : b) };
            if (m && m.headers)
              for (const _ in m.headers)
                Array.isArray(m.headers[_]) && (m.headers[_] = m.headers[_].join(","));
            return m;
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
      })(Ni)),
    Ni
  );
}
var mu;
function Pb() {
  if (mu) return gn;
  ((mu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.invokeRemote = void 0));
  const e = hp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((gn.invokeRemote = t), gn);
}
var bn = {},
  _u;
function Rb() {
  if (_u) return bn;
  ((_u = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.invokeService = void 0));
  const e = hp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((bn.invokeService = t), bn);
}
var yu;
function Ab() {
  return (
    yu ||
      ((yu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Be;
        (t.__exportStar(Pb(), e), t.__exportStar(Rb(), e));
      })(Li)),
    Li
  );
}
var Bi = {},
  mn = {},
  _n = {},
  wu;
function Ib() {
  if (wu) return _n;
  ((wu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.submit = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((_n.submit = n), _n);
}
var yn = {},
  ku;
function jb() {
  if (ku) return yn;
  ((ku = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.close = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((yn.close = n), yn);
}
var wn = {},
  Ou;
function Db() {
  if (Ou) return wn;
  ((Ou = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.open = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((wn.open = n), wn);
}
var kn = {},
  Su;
function Tb() {
  if (Su) return kn;
  ((Su = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.refresh = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((kn.refresh = n), kn);
}
var On = {},
  Eu;
function Mb() {
  if (Eu) return On;
  ((Eu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.createHistory = void 0));
  const t = (0, ue().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((On.createHistory = r), On);
}
var Sn = {},
  Ui = {},
  Lt = {},
  xu;
function gp() {
  return (
    xu ||
      ((xu = 1),
      Object.defineProperty(Lt, "__esModule", { value: !0 }),
      (Lt.FORGE_SUPPORTED_LOCALE_CODES =
        Lt.I18N_BUNDLE_FOLDER_NAME =
        Lt.I18N_INFO_FILE_NAME =
          void 0),
      (Lt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Lt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Lt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Lt
  );
}
var or = {},
  Cu;
function Fb() {
  if (Cu) return or;
  ((Cu = 1),
    Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.TranslationsGetter = or.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  or.TranslationGetterError = t;
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
  return ((or.TranslationsGetter = r), or);
}
var En = {},
  qi = {},
  Pu;
function bp() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Be.__importDefault(mb()),
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
      })(qi)),
    qi
  );
}
var Ru;
function Lb() {
  if (Ru) return En;
  ((Ru = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.Translator = void 0));
  const e = bp();
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
  return ((En.Translator = t), En);
}
var xn = {},
  Au;
function Nb() {
  if (Au) return xn;
  ((Au = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.ensureLocale = void 0));
  const e = gp(),
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
  return ((xn.ensureLocale = a), xn);
}
var zi = {},
  Iu;
function Bb() {
  return (
    Iu ||
      ((Iu = 1),
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
                    Object.entries(p).flatMap(([h, f]) => {
                      const g = [...v, h];
                      return r(f)
                        ? [{ propertyPath: g, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((b) => d(b, g))
                          : d(f, g);
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
      })(zi)),
    zi
  );
}
var $i = {},
  ju;
function Ub() {
  return (ju || ((ju = 1), Object.defineProperty($i, "__esModule", { value: !0 })), $i);
}
var Du;
function mp() {
  return (
    Du ||
      ((Du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Be;
        (t.__exportStar(gp(), e),
          t.__exportStar(Fb(), e),
          t.__exportStar(Lb(), e),
          t.__exportStar(Nb(), e));
        var r = bp();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Bb();
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
          t.__exportStar(Ub(), e));
      })(Ui)),
    Ui
  );
}
var Tu;
function qb() {
  if (Tu) return Sn;
  ((Tu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.getContext = void 0));
  const e = ue(),
    t = mp(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((Sn.getContext = n), Sn);
}
var Cn = {},
  Mu;
function zb() {
  if (Mu) return Cn;
  ((Mu = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.changeWindowTitle = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Cn.changeWindowTitle = n), Cn);
}
var Pn = {},
  Fu;
function $b() {
  if (Fu) return Pn;
  ((Fu = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.theme = void 0));
  const t = (0, ue().getCallBridge)();
  return ((Pn.theme = { enable: () => t("enableTheming") }), Pn);
}
var Rn = {},
  An = {},
  Vi = {},
  ir = {},
  Lu;
function _p() {
  if (Lu) return ir;
  ((Lu = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.blobToBase64 = ir.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
  };
  ir.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((ir.blobToBase64 = t), ir);
}
var Nu;
function Vb() {
  return (
    Nu ||
      ((Nu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = _p(),
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
      })(Vi)),
    Vi
  );
}
var Bu;
function yp() {
  if (Bu) return An;
  ((Bu = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.events = void 0));
  const e = ue(),
    t = Vb(),
    r = (0, e.getCallBridge)(),
    n = async (o, i) => {
      let c = i;
      return (
        (0, t.containsBlobs)(i) && (c = await (0, t.serialiseBlobsInPayload)(i)),
        r("emit", { event: o, payload: c })
      );
    },
    a = (o, i) =>
      r("on", {
        event: o,
        callback: (s) => {
          let u = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (u = (0, t.deserialiseBlobsInPayload)(s)),
            i(u)
          );
        },
      });
  return ((An.events = { emit: n, on: a }), An);
}
var Uu;
function Gb() {
  if (Uu) return Rn;
  ((Uu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.emitReadyEvent = void 0));
  const e = yp(),
    t = Sp(),
    r = ue(),
    n = be(),
    a = (0, r.getCallBridge)(),
    o = "EXTENSION_READY",
    i = async () => {
      const c = await t.view.getContext();
      await e.events.emit(o, { localId: c.localId });
      try {
        if ((await a("emitReadyEvent")) === !1)
          throw new n.BridgeAPIError("Unable to emit ready event.");
      } catch {
        throw new n.BridgeAPIError("Unable to emit ready event.");
      }
    };
  return ((Rn.emitReadyEvent = i), Rn);
}
const Hb = "modulepreload",
  Wb = function (e, t) {
    return new URL(e, t).href;
  },
  qu = {},
  Te = function (t, r, n) {
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
          if (((l = Wb(l, n)), l in qu)) return;
          qu[l] = !0;
          const d = l.endsWith(".css"),
            p = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let h = i.length - 1; h >= 0; h--) {
              const f = i[h];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : Hb),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            s && v.setAttribute("nonce", s),
            document.head.appendChild(v),
            d)
          )
            return new Promise((h, f) => {
              (v.addEventListener("load", h),
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
var In = {},
  Gi = {},
  jn = {},
  co = {},
  zu;
function wp() {
  if (zu) return co;
  ((zu = 1), Object.defineProperty(co, "__esModule", { value: !0 }), (co.default = r));
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
  return co;
}
var Ir = {},
  Dn = {},
  Tn = {},
  $u;
function Kb() {
  if ($u) return Tn;
  (($u = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Tn.default = e), Tn);
}
var Vu;
function ti() {
  if (Vu) return Dn;
  ((Vu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = t(Kb());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((Dn.default = n), Dn);
}
var Gu;
function ri() {
  if (Gu) return Ir;
  ((Gu = 1),
    Object.defineProperty(Ir, "__esModule", { value: !0 }),
    (Ir.default = void 0),
    (Ir.unsafeStringify = n));
  var e = t(ti());
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
  return ((Ir.default = o), Ir);
}
var Hu;
function Yb() {
  if (Hu) return jn;
  ((Hu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = r(wp()),
    t = ri();
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
    let h = u.node || n,
      f = u.clockseq !== void 0 ? u.clockseq : a;
    if (h == null || f == null) {
      const w = u.random || (u.rng || e.default)();
      (h == null && (h = n = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = a = ((w[6] << 8) | w[7]) & 16383));
    }
    let g = u.msecs !== void 0 ? u.msecs : Date.now(),
      b = u.nsecs !== void 0 ? u.nsecs : i + 1;
    const m = g - o + (b - i) / 1e4;
    if (
      (m < 0 && u.clockseq === void 0 && (f = (f + 1) & 16383),
      (m < 0 || g > o) && u.nsecs === void 0 && (b = 0),
      b >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = g), (i = b), (a = f), (g += 122192928e5));
    const _ = ((g & 268435455) * 1e4 + b) % 4294967296;
    ((v[p++] = (_ >>> 24) & 255),
      (v[p++] = (_ >>> 16) & 255),
      (v[p++] = (_ >>> 8) & 255),
      (v[p++] = _ & 255));
    const k = ((g / 4294967296) * 1e4) & 268435455;
    ((v[p++] = (k >>> 8) & 255),
      (v[p++] = k & 255),
      (v[p++] = ((k >>> 24) & 15) | 16),
      (v[p++] = (k >>> 16) & 255),
      (v[p++] = (f >>> 8) | 128),
      (v[p++] = f & 255));
    for (let w = 0; w < 6; ++w) v[p + w] = h[w];
    return l || (0, t.unsafeStringify)(v);
  }
  var s = c;
  return ((jn.default = s), jn);
}
var Mn = {},
  Wt = {},
  Fn = {},
  Wu;
function kp() {
  if (Wu) return Fn;
  ((Wu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = t(ti());
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
  return ((Fn.default = n), Fn);
}
var Ku;
function Op() {
  if (Ku) return Wt;
  ((Ku = 1),
    Object.defineProperty(Wt, "__esModule", { value: !0 }),
    (Wt.URL = Wt.DNS = void 0),
    (Wt.default = i));
  var e = ri(),
    t = r(kp());
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
  Wt.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Wt.URL = o;
  function i(c, s, u) {
    function l(d, p, v, h) {
      var f;
      if (
        (typeof d == "string" && (d = n(d)),
        typeof p == "string" && (p = (0, t.default)(p)),
        ((f = p) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + d.length);
      if (
        (g.set(p),
        g.set(d, p.length),
        (g = u(g)),
        (g[6] = (g[6] & 15) | s),
        (g[8] = (g[8] & 63) | 128),
        v)
      ) {
        h = h || 0;
        for (let b = 0; b < 16; ++b) v[h + b] = g[b];
        return v;
      }
      return (0, e.unsafeStringify)(g);
    }
    try {
      l.name = c;
    } catch {}
    return ((l.DNS = a), (l.URL = o), l);
  }
  return Wt;
}
var Ln = {},
  Yu;
function Jb() {
  if (Yu) return Ln;
  ((Yu = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  function e(v) {
    if (typeof v == "string") {
      const h = unescape(encodeURIComponent(v));
      v = new Uint8Array(h.length);
      for (let f = 0; f < h.length; ++f) v[f] = h.charCodeAt(f);
    }
    return t(n(a(v), v.length * 8));
  }
  function t(v) {
    const h = [],
      f = v.length * 32,
      g = "0123456789abcdef";
    for (let b = 0; b < f; b += 8) {
      const m = (v[b >> 5] >>> (b % 32)) & 255,
        _ = parseInt(g.charAt((m >>> 4) & 15) + g.charAt(m & 15), 16);
      h.push(_);
    }
    return h;
  }
  function r(v) {
    return (((v + 64) >>> 9) << 4) + 14 + 1;
  }
  function n(v, h) {
    ((v[h >> 5] |= 128 << (h % 32)), (v[r(h) - 1] = h));
    let f = 1732584193,
      g = -271733879,
      b = -1732584194,
      m = 271733878;
    for (let _ = 0; _ < v.length; _ += 16) {
      const k = f,
        w = g,
        O = b,
        x = m;
      ((f = s(f, g, b, m, v[_], 7, -680876936)),
        (m = s(m, f, g, b, v[_ + 1], 12, -389564586)),
        (b = s(b, m, f, g, v[_ + 2], 17, 606105819)),
        (g = s(g, b, m, f, v[_ + 3], 22, -1044525330)),
        (f = s(f, g, b, m, v[_ + 4], 7, -176418897)),
        (m = s(m, f, g, b, v[_ + 5], 12, 1200080426)),
        (b = s(b, m, f, g, v[_ + 6], 17, -1473231341)),
        (g = s(g, b, m, f, v[_ + 7], 22, -45705983)),
        (f = s(f, g, b, m, v[_ + 8], 7, 1770035416)),
        (m = s(m, f, g, b, v[_ + 9], 12, -1958414417)),
        (b = s(b, m, f, g, v[_ + 10], 17, -42063)),
        (g = s(g, b, m, f, v[_ + 11], 22, -1990404162)),
        (f = s(f, g, b, m, v[_ + 12], 7, 1804603682)),
        (m = s(m, f, g, b, v[_ + 13], 12, -40341101)),
        (b = s(b, m, f, g, v[_ + 14], 17, -1502002290)),
        (g = s(g, b, m, f, v[_ + 15], 22, 1236535329)),
        (f = u(f, g, b, m, v[_ + 1], 5, -165796510)),
        (m = u(m, f, g, b, v[_ + 6], 9, -1069501632)),
        (b = u(b, m, f, g, v[_ + 11], 14, 643717713)),
        (g = u(g, b, m, f, v[_], 20, -373897302)),
        (f = u(f, g, b, m, v[_ + 5], 5, -701558691)),
        (m = u(m, f, g, b, v[_ + 10], 9, 38016083)),
        (b = u(b, m, f, g, v[_ + 15], 14, -660478335)),
        (g = u(g, b, m, f, v[_ + 4], 20, -405537848)),
        (f = u(f, g, b, m, v[_ + 9], 5, 568446438)),
        (m = u(m, f, g, b, v[_ + 14], 9, -1019803690)),
        (b = u(b, m, f, g, v[_ + 3], 14, -187363961)),
        (g = u(g, b, m, f, v[_ + 8], 20, 1163531501)),
        (f = u(f, g, b, m, v[_ + 13], 5, -1444681467)),
        (m = u(m, f, g, b, v[_ + 2], 9, -51403784)),
        (b = u(b, m, f, g, v[_ + 7], 14, 1735328473)),
        (g = u(g, b, m, f, v[_ + 12], 20, -1926607734)),
        (f = l(f, g, b, m, v[_ + 5], 4, -378558)),
        (m = l(m, f, g, b, v[_ + 8], 11, -2022574463)),
        (b = l(b, m, f, g, v[_ + 11], 16, 1839030562)),
        (g = l(g, b, m, f, v[_ + 14], 23, -35309556)),
        (f = l(f, g, b, m, v[_ + 1], 4, -1530992060)),
        (m = l(m, f, g, b, v[_ + 4], 11, 1272893353)),
        (b = l(b, m, f, g, v[_ + 7], 16, -155497632)),
        (g = l(g, b, m, f, v[_ + 10], 23, -1094730640)),
        (f = l(f, g, b, m, v[_ + 13], 4, 681279174)),
        (m = l(m, f, g, b, v[_], 11, -358537222)),
        (b = l(b, m, f, g, v[_ + 3], 16, -722521979)),
        (g = l(g, b, m, f, v[_ + 6], 23, 76029189)),
        (f = l(f, g, b, m, v[_ + 9], 4, -640364487)),
        (m = l(m, f, g, b, v[_ + 12], 11, -421815835)),
        (b = l(b, m, f, g, v[_ + 15], 16, 530742520)),
        (g = l(g, b, m, f, v[_ + 2], 23, -995338651)),
        (f = d(f, g, b, m, v[_], 6, -198630844)),
        (m = d(m, f, g, b, v[_ + 7], 10, 1126891415)),
        (b = d(b, m, f, g, v[_ + 14], 15, -1416354905)),
        (g = d(g, b, m, f, v[_ + 5], 21, -57434055)),
        (f = d(f, g, b, m, v[_ + 12], 6, 1700485571)),
        (m = d(m, f, g, b, v[_ + 3], 10, -1894986606)),
        (b = d(b, m, f, g, v[_ + 10], 15, -1051523)),
        (g = d(g, b, m, f, v[_ + 1], 21, -2054922799)),
        (f = d(f, g, b, m, v[_ + 8], 6, 1873313359)),
        (m = d(m, f, g, b, v[_ + 15], 10, -30611744)),
        (b = d(b, m, f, g, v[_ + 6], 15, -1560198380)),
        (g = d(g, b, m, f, v[_ + 13], 21, 1309151649)),
        (f = d(f, g, b, m, v[_ + 4], 6, -145523070)),
        (m = d(m, f, g, b, v[_ + 11], 10, -1120210379)),
        (b = d(b, m, f, g, v[_ + 2], 15, 718787259)),
        (g = d(g, b, m, f, v[_ + 9], 21, -343485551)),
        (f = o(f, k)),
        (g = o(g, w)),
        (b = o(b, O)),
        (m = o(m, x)));
    }
    return [f, g, b, m];
  }
  function a(v) {
    if (v.length === 0) return [];
    const h = v.length * 8,
      f = new Uint32Array(r(h));
    for (let g = 0; g < h; g += 8) f[g >> 5] |= (v[g / 8] & 255) << (g % 32);
    return f;
  }
  function o(v, h) {
    const f = (v & 65535) + (h & 65535);
    return (((v >> 16) + (h >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function i(v, h) {
    return (v << h) | (v >>> (32 - h));
  }
  function c(v, h, f, g, b, m) {
    return o(i(o(o(h, v), o(g, m)), b), f);
  }
  function s(v, h, f, g, b, m, _) {
    return c((h & f) | (~h & g), v, h, b, m, _);
  }
  function u(v, h, f, g, b, m, _) {
    return c((h & g) | (f & ~g), v, h, b, m, _);
  }
  function l(v, h, f, g, b, m, _) {
    return c(h ^ f ^ g, v, h, b, m, _);
  }
  function d(v, h, f, g, b, m, _) {
    return c(f ^ (h | ~g), v, h, b, m, _);
  }
  var p = e;
  return ((Ln.default = p), Ln);
}
var Ju;
function Xb() {
  if (Ju) return Mn;
  ((Ju = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = r(Op()),
    t = r(Jb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((Mn.default = a), Mn);
}
var Nn = {},
  Bn = {},
  Xu;
function Qb() {
  if (Xu) return Bn;
  ((Xu = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Bn.default = t), Bn);
}
var Qu;
function Zb() {
  if (Qu) return Nn;
  ((Qu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = n(Qb()),
    t = n(wp()),
    r = ri();
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
  return ((Nn.default = o), Nn);
}
var Un = {},
  qn = {},
  Zu;
function em() {
  if (Zu) return qn;
  ((Zu = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
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
        h = i[2],
        f = i[3],
        g = i[4];
      for (let b = 0; b < 80; ++b) {
        const m = Math.floor(b / 20),
          _ = (t(p, 5) + e(m, v, h, f) + g + o[m] + d[b]) >>> 0;
        ((g = f), (f = h), (h = t(v, 30) >>> 0), (v = p), (p = _));
      }
      ((i[0] = (i[0] + p) >>> 0),
        (i[1] = (i[1] + v) >>> 0),
        (i[2] = (i[2] + h) >>> 0),
        (i[3] = (i[3] + f) >>> 0),
        (i[4] = (i[4] + g) >>> 0));
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
  return ((qn.default = n), qn);
}
var el;
function tm() {
  if (el) return Un;
  ((el = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var e = r(Op()),
    t = r(em());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Un.default = a), Un);
}
var zn = {},
  tl;
function rm() {
  if (tl) return zn;
  ((tl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((zn.default = e), zn);
}
var $n = {},
  rl;
function nm() {
  if (rl) return $n;
  ((rl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = t(ti());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var n = r;
  return (($n.default = n), $n);
}
var nl;
function am() {
  return (
    nl ||
      ((nl = 1),
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
        var t = l(Yb()),
          r = l(Xb()),
          n = l(Zb()),
          a = l(tm()),
          o = l(rm()),
          i = l(nm()),
          c = l(ti()),
          s = l(ri()),
          u = l(kp());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(Gi)),
    Gi
  );
}
var al;
function om() {
  if (al) return In;
  ((al = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.createAdfRendererIframeProps = void 0));
  const e = am(),
    t = async (r, n) => {
      const a = await Te(
          () => import("./index-CT8OtY7f.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = a.default || a,
        i = new URL(document.referrer).origin,
        c = `${i}/forge-apps/adf-renderer`,
        s = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var l, d;
          const p = document.getElementById(s),
            v = {
              type: "adf-document",
              document: (l = r.extension.macro) === null || l === void 0 ? void 0 : l.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: r.localId,
            };
          (o.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (h) => {
                var f;
                (f = h?.iFrameResizer) === null || f === void 0 || f.resize();
              },
            },
            p || "",
          ),
            (d = p?.contentWindow) === null || d === void 0 || d.postMessage(v, i));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: s, src: c, onLoad: u }
      );
    };
  return ((In.createAdfRendererIframeProps = t), In);
}
var Vn = {},
  ol;
function im() {
  if (ol) return Vn;
  ((ol = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.onClose = void 0));
  const e = ue(),
    t = be(),
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
  return ((Vn.onClose = n), Vn);
}
var il;
function Sp() {
  if (il) return mn;
  ((il = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.view = void 0));
  const e = Ib(),
    t = jb(),
    r = Db(),
    n = Tb(),
    a = Mb(),
    o = qb(),
    i = zb(),
    c = $b(),
    s = Gb(),
    u = om(),
    l = im();
  return (
    (mn.view = {
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
    mn
  );
}
var sl;
function ni() {
  return (
    sl ||
      ((sl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Be.__exportStar(Sp(), e));
      })(Bi)),
    Bi
  );
}
var Hi = {},
  Gn = {},
  cl;
function sm() {
  if (cl) return Gn;
  ((cl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.router = void 0));
  const t = (0, ue().getCallBridge)(),
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
  return ((Gn.router = { getUrl: r, navigate: n, open: a, reload: o }), Gn);
}
var ul;
function cm() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Be.__exportStar(sm(), e));
      })(Hi)),
    Hi
  );
}
var Wi = {},
  Hn = {},
  ll;
function um() {
  if (ll) return Hn;
  ((ll = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.Modal = void 0));
  const e = ue(),
    t = be(),
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
  return ((Hn.Modal = a), Hn);
}
var dl;
function lm() {
  return (
    dl ||
      ((dl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Be.__exportStar(um(), e));
      })(Wi)),
    Wi
  );
}
var ct = {},
  sr = {},
  fl;
function dm() {
  if (fl) return sr;
  ((fl = 1),
    Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.productFetchApi = sr.remoteFetchApi = void 0));
  const e = _p(),
    t = async (i) => {
      const c = {};
      for (const [s, u] of i.entries())
        if (s === "file") {
          const l = u.name,
            d = u.type;
          ((c.file = await (0, e.blobToBase64)(u)), (c.__fileName = l), (c.__fileType = d));
        } else c[s] = u;
      return JSON.stringify(c);
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
    n = async (i) => {
      const c = i?.body instanceof FormData,
        s = c ? await t(i?.body) : i?.body,
        u = new Request("", { body: s, method: i?.method, headers: i?.headers }),
        l = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(l),
        isMultipartFormData: c,
      };
    },
    a = (i) => {
      const c = async (s, u) => {
        const l = r(u),
          { body: d, headers: p, isMultipartFormData: v } = await n(l),
          h = {
            remoteKey: s,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: g,
            statusText: b,
            status: m,
            isAttachment: _,
          } = await i("fetchRemote", h),
          k = _ ? (0, e.base64ToBlob)(f, g["content-type"]) : f;
        return new Response(k || null, { headers: g, status: m, statusText: b });
      };
      return { requestRemote: (s, u) => c(s, u) };
    };
  sr.remoteFetchApi = a;
  const o = (i) => {
    const c = async (s, u, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: h } = await n(d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: s,
          restPath: u,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: h,
        },
        {
          body: g,
          headers: b,
          statusText: m,
          status: _,
          isAttachment: k,
        } = await i("fetchProduct", f),
        w = k ? (0, e.base64ToBlob)(g, b["content-type"]) : g;
      return new Response(w || null, { headers: b, status: _, statusText: m });
    };
    return {
      requestConfluence: (s, u) => c("confluence", s, u),
      requestJira: (s, u) => c("jira", s, u),
      requestBitbucket: (s, u) => c("bitbucket", s, u),
    };
  };
  return ((sr.productFetchApi = o), sr);
}
var vl;
function fm() {
  if (vl) return ct;
  vl = 1;
  var e;
  (Object.defineProperty(ct, "__esModule", { value: !0 }),
    (ct.requestRemote = ct.requestBitbucket = ct.requestJira = ct.requestConfluence = void 0));
  const t = ue(),
    r = dm();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (ct.requestConfluence = e.requestConfluence),
    (ct.requestJira = e.requestJira),
    (ct.requestBitbucket = e.requestBitbucket),
    (ct.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    ct
  );
}
var Ki = {},
  Wn = {},
  pl;
function vm() {
  if (pl) return Wn;
  ((pl = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.showFlag = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((Wn.showFlag = n), Wn);
}
var hl;
function pm() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = vm();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Ki)),
    Ki
  );
}
var Yi = {},
  gl;
function hm() {
  return (
    gl ||
      ((gl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Be.__exportStar(yp(), e));
      })(Yi)),
    Yi
  );
}
var Ji = {},
  Kn = {},
  bl;
function gm() {
  if (bl) return Kn;
  ((bl = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.realtime = void 0));
  const t = (0, ue().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((Kn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Kn);
}
var Xi = {},
  ml;
function bm() {
  return (
    ml ||
      ((ml = 1),
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
      })(Xi)),
    Xi
  );
}
var _l;
function mm() {
  return (
    _l ||
      ((_l = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = gm();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = bm();
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
      })(Ji)),
    Ji
  );
}
var Qi = {},
  Yn = {},
  Zi = {},
  yl;
function _m() {
  return (
    yl ||
      ((yl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = ue(),
          r = be(),
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
      })(Zi)),
    Zi
  );
}
var wl;
function ym() {
  if (wl) return Yn;
  ((wl = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.rovo = void 0));
  const e = _m();
  return ((Yn.rovo = { open: e.open }), Yn);
}
var kl;
function wm() {
  return (
    kl ||
      ((kl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Be.__exportStar(ym(), e));
      })(Qi)),
    Qi
  );
}
var Nt = {},
  Ol;
function km() {
  if (Ol) return Nt;
  ((Ol = 1),
    Object.defineProperty(Nt, "__esModule", { value: !0 }),
    (Nt.createTranslationFunction = Nt.getTranslations = Nt.resetTranslationsCache = void 0));
  const e = mp(),
    t = ni(),
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
  Nt.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let u = c;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, s));
  };
  Nt.getTranslations = o;
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
  return ((Nt.createTranslationFunction = i), Nt);
}
var es = {},
  Jn = {},
  Sl;
function Om() {
  if (Sl) return Jn;
  ((Sl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.permissions = void 0));
  const t = (0, ue().getCallBridge)(),
    r = async (s) => t("__permission__egressGet", s),
    n = async (s) => t("__permission__egressSet", s),
    a = async (s) => t("__permission__egressDeleteDomain", s),
    o = async (s) => t("__permission__egressDeleteGroup", s),
    i = async (s) => t("__permission__remoteGet", s),
    c = async (s) => t("__permission__remoteSet", s);
  return (
    (Jn.permissions = {
      egress: { get: r, set: n, deleteDomain: a, deleteGroup: o },
      remote: { get: i, set: c },
    }),
    Jn
  );
}
var cr = {},
  ts = {},
  rs = {},
  Xn = {},
  Qn = {},
  El;
function Sc() {
  if (El) return Qn;
  ((El = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.parseUrl = void 0));
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
  return ((Qn.parseUrl = e), Qn);
}
var ns = {},
  xl;
function Ep() {
  return (
    xl ||
      ((xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const t = Sc();
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
      })(ns)),
    ns
  );
}
var Cl;
function Sm() {
  if (Cl) return Xn;
  ((Cl = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.EgressFilteringService = void 0));
  const e = Sc(),
    t = Ep();
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
  return ((Xn.EgressFilteringService = r), Xn);
}
var Pl;
function Em() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Be;
        (t.__exportStar(Sm(), e), t.__exportStar(Sc(), e), t.__exportStar(Ep(), e));
      })(rs)),
    rs
  );
}
var Rl;
function xm() {
  return (
    Rl ||
      ((Rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Be.__exportStar(Em(), e));
      })(ts)),
    ts
  );
}
var Al;
function Cm() {
  if (Al) return cr;
  ((Al = 1),
    Object.defineProperty(cr, "__esModule", { value: !0 }),
    (cr.checkPermissions = cr.createPermissionUtils = void 0));
  const e = xm(),
    t = ni();
  function r(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const n = ["fonts", "styles", "frames", "images", "media", "scripts"],
    a = ["backend", "client"];
  function o(d) {
    if (!d) return null;
    const { scopes: p, external: v = {} } = d,
      h = Array.isArray(p) ? p : Object.keys(p || {});
    return {
      hasScope: (f) => h.includes(f),
      canFetchFrom: (f, g) => {
        var b;
        const m = (b = v.fetch) === null || b === void 0 ? void 0 : b[f];
        if (!m?.length) return !1;
        const _ = m.map(r).filter((O) => O.length > 0);
        if (_.length === 0) return !1;
        const k = new e.EgressFilteringService(_);
        return f === "client" ? k.isValidUrlCSP(g) : k.isValidUrl(g);
      },
      canLoadResource: (f, g) => {
        const b = v[f];
        if (!b?.length) return !1;
        const m = b.map(r).filter((w) => w.length > 0);
        return m.length === 0 ? !1 : new e.EgressFilteringService(m).isValidUrlCSP(g);
      },
      getScopes: () => h,
      getExternalPermissions: () => v,
      hasAnyPermissions: () => h.length > 0 || Object.keys(v).length > 0,
    };
  }
  cr.createPermissionUtils = o;
  function i(d, p) {
    if (!d?.length) return;
    const v = d.filter((h) => !p.hasScope(h));
    return v.length > 0 ? v : void 0;
  }
  function c(d, p) {
    if (!d?.fetch) return;
    const v = {};
    return (
      a.forEach((h) => {
        var f;
        const g = (f = d.fetch) === null || f === void 0 ? void 0 : f[h];
        if (g?.length) {
          const b = g.filter((m) => !p.canFetchFrom(h, m));
          b.length > 0 && (v[h] = b);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function s(d, p) {
    const v = {};
    return (
      n.forEach((h) => {
        const f = d?.[h];
        if (f?.length) {
          const g = f.filter((b) => !p.canLoadResource(h, b));
          g.length > 0 && (v[h] = g);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function u(d, p) {
    if (!d) return;
    const v = c(d, p),
      h = s(d, p);
    if (!v && !h) return;
    const f = {};
    return (v && (f.fetch = v), h && Object.assign(f, h), f);
  }
  async function l(d, p) {
    var v;
    if (!d) return { granted: !1, missing: null };
    if (!(!((v = d.scopes) === null || v === void 0) && v.length) && !d.external)
      return { granted: !0, missing: null };
    let h = p;
    h || (h = (await t.view.getContext()).permissions);
    const f = o(h);
    if (!f) return { granted: !1, missing: null };
    const g = {};
    let b = !0;
    const m = i(d.scopes, f);
    m && ((g.scopes = m), (b = !1));
    const _ = u(d.external, f);
    return (_ && ((g.external = _), (b = !1)), { granted: b, missing: b ? null : g });
  }
  return ((cr.checkPermissions = l), cr);
}
var Il;
function Pm() {
  return (
    Il ||
      ((Il = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Be;
        (t.__exportStar(Om(), e), t.__exportStar(Cm(), e));
      })(es)),
    es
  );
}
var as = {},
  os = {},
  is = {},
  Zn = {},
  ea = {},
  jl;
function xp() {
  return (
    jl ||
      ((jl = 1),
      Object.defineProperty(ea, "__esModule", { value: !0 }),
      (ea.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (ea.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    ea
  );
}
var Dl;
function ai() {
  if (Dl) return Zn;
  ((Dl = 1),
    Object.defineProperty(Zn, "__esModule", { value: !0 }),
    (Zn.checkRestrictedEnvironment = void 0));
  const e = be(),
    t = ni(),
    r = xp(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Zn.checkRestrictedEnvironment = n), Zn);
}
var Tl;
function Rm() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ja(),
          r = be(),
          n = ai(),
          o = (0, ue().getCallBridge)(),
          i = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const h = new Uint8Array(v);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          c = async (l) => {
            const d = l.size,
              p = await l.arrayBuffer(),
              v = await crypto.subtle.digest("SHA-256", p),
              h = new Uint8Array(v),
              f = btoa(String.fromCharCode(...h));
            return { length: d, checksum: f, checksumType: "SHA256" };
          },
          s = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new r.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new r.BridgeAPIError("objects array is required and must not be empty");
            const p = d.map((m, _) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${_}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return i(m.data, m.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${_}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((m) => c(m))),
              h = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!h || typeof h != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              g = new Map();
            return (
              p.forEach((m, _) => {
                const k = v[_];
                (f.set(k.checksum, m), g.set(k.checksum, _));
              }),
              Object.entries(h).map(([m, _]) => {
                const { key: k, checksum: w } = _,
                  O = f.get(w),
                  x = g.get(w);
                return x === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: k,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : O
                    ? {
                        promise: (async () => {
                          try {
                            const A = await fetch(m, {
                              method: "PUT",
                              body: O,
                              headers: {
                                "Content-Type": O.type || "application/octet-stream",
                                "Content-Length": O.size.toString(),
                              },
                            });
                            return {
                              success: A.ok,
                              key: k,
                              status: A.status,
                              error: A.ok ? void 0 : `Upload failed with status ${A.status}`,
                            };
                          } catch (A) {
                            return {
                              success: !1,
                              key: k,
                              status: 503,
                              error: A instanceof Error ? A.message : "Upload failed",
                            };
                          }
                        })(),
                        index: x,
                        objectType: O.type,
                        objectSize: O.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: k,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: x,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const u = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((h) => h.promise));
        };
        e.upload = u;
      })(is)),
    is
  );
}
var ta = {},
  Ml;
function Am() {
  if (Ml) return ta;
  ((Ml = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.deleteObjects = void 0));
  const e = Ja(),
    t = be(),
    r = ai(),
    a = (0, ue().getCallBridge)(),
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
  return ((ta.deleteObjects = o), ta);
}
var ra = {},
  Fl;
function Im() {
  if (Fl) return ra;
  ((Fl = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.download = void 0));
  const e = Ja(),
    t = be(),
    r = ai(),
    a = (0, ue().getCallBridge)(),
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
          const h = await v.blob();
          return { success: !0, key: p, blob: h, status: v.status };
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
  return ((ra.download = o), ra);
}
var na = {},
  Ll;
function jm() {
  if (Ll) return na;
  ((Ll = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.getMetadata = void 0));
  const e = Ja(),
    t = be(),
    r = ai(),
    a = (0, ue().getCallBridge)(),
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
  return ((na.getMetadata = o), na);
}
var Nl;
function Dm() {
  return (
    Nl ||
      ((Nl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = Rm();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = Am(),
          n = Im(),
          a = jm();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(os)),
    os
  );
}
var Bl;
function Tm() {
  return (
    Bl ||
      ((Bl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Be;
        (t.__exportStar(Dm(), e), t.__exportStar(xp(), e));
      })(as)),
    as
  );
}
var ss = {},
  aa = {},
  ur = {},
  jr = {},
  uo = {},
  Ul;
function Mm() {
  if (Ul) return uo;
  ((Ul = 1), Object.defineProperty(uo, "__esModule", { value: !0 }));
  const e = Qt();
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
  return ((uo.default = t), uo);
}
var Dr = {},
  oa = {},
  ql;
function Fm() {
  if (ql) return oa;
  ((ql = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa._resolveDeltasResponse = void 0));
  const e = Qt(),
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
  oa._resolveDeltasResponse = r;
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
  return oa;
}
var zl;
function Cp() {
  if (zl) return Dr;
  zl = 1;
  var e =
    (Dr && Dr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(c.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? u(h.value) : s(h.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  const t = Qt(),
    r = Fm();
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
        var l, d, p, v, h, f;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
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
        if (g?.has_updates) {
          const m =
            g?.hash_used !==
            ((f =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && u ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, b, c);
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
  return ((Dr.default = n), Dr);
}
var ia = {},
  $l;
function Lm() {
  if ($l) return ia;
  (($l = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia._makeParamStoreGetter = void 0));
  const e = Qt(),
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
    return (v, h) => {
      if (d == null) return h;
      const f = d[v];
      if (f == null || (h != null && (0, e._typeOf)(h) !== f.param_type)) return h;
      switch (f.ref_type) {
        case "static":
          return a(f);
        case "gate":
          return o(l, f, p);
        case "dynamic_config":
          return i(l, f, h, p);
        case "experiment":
          return c(l, f, h, p);
        case "layer":
          return s(l, f, h, p);
        default:
          return h;
      }
    };
  }
  return ((ia._makeParamStoreGetter = u), ia);
}
var lr = {},
  Vl;
function Nm() {
  if (Vl) return lr;
  Vl = 1;
  var e =
    (lr && lr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(c.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? u(h.value) : s(h.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(lr, "__esModule", { value: !0 }),
    (lr.StatsigEvaluationsDataAdapter = void 0));
  const t = Qt(),
    r = Cp();
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
  return ((lr.StatsigEvaluationsDataAdapter = n), lr);
}
var Gl;
function Bm() {
  if (Gl) return jr;
  Gl = 1;
  var e =
    (jr && jr.__awaiter) ||
    function (c, s, u, l) {
      function d(p) {
        return p instanceof u
          ? p
          : new u(function (v) {
              v(p);
            });
      }
      return new (u || (u = Promise))(function (p, v) {
        function h(b) {
          try {
            g(l.next(b));
          } catch (m) {
            v(m);
          }
        }
        function f(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            v(m);
          }
        }
        function g(b) {
          b.done ? p(b.value) : d(b.value).then(h, f);
        }
        g((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(jr, "__esModule", { value: !0 });
  const t = Qt(),
    r = Mm(),
    n = Cp(),
    a = Lm(),
    o = Nm();
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
      const h = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of h) f.bind(this);
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
      const h = u?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && v?.source === "Bootstrap")
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
        h = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, u) {
      var l, d, p, v;
      const { result: h, details: f } = this._store.getConfig(s),
        g = (0, t._makeExperiment)(s, f, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
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
            : v.call(p, g, this._user, u),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(s, u) {
      var l, d, p;
      const { result: v, details: h } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        f,
        g,
        (p = g?.__value) !== null && p !== void 0 ? p : f.__value,
        (m) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
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
      const h = {
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
            : d.call(l, h, u);
      return (
        f != null &&
          ((h.__configuration = f.config),
          (h.details = f.details),
          (h.get = (0, a._makeParamStoreGetter)(this, f.config, u))),
        h
      );
    }
  }
  return ((jr.default = i), jr);
}
var Hl;
function Um() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        var t =
            (ur && ur.__createBinding) ||
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
            (ur && ur.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Qt(),
          a = Bm();
        ((e.StatsigClient = a.default), r(Qt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(ur)),
    ur
  );
}
var sa = {},
  ca = {},
  Wl;
function qm() {
  if (Wl) return ca;
  ((Wl = 1),
    Object.defineProperty(ca, "__esModule", { value: !0 }),
    (ca.initFeatureFlags = void 0));
  const e = ue(),
    t = be(),
    r = ei(),
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
    (ca.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    ca
  );
}
var Kl;
function zm() {
  if (Kl) return sa;
  ((Kl = 1),
    Object.defineProperty(sa, "__esModule", { value: !0 }),
    (sa.ForgeDataAdapter = void 0));
  const e = qm();
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
  return ((sa.ForgeDataAdapter = t), sa);
}
var cs = {},
  Yl;
function Pp() {
  return (
    Yl ||
      ((Yl = 1),
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
      })(cs)),
    cs
  );
}
var ua = {},
  Jl;
function $m() {
  if (Jl) return ua;
  ((Jl = 1),
    Object.defineProperty(ua, "__esModule", { value: !0 }),
    (ua.trackFeatureFlagEvent = void 0));
  const e = ue(),
    t = be(),
    r = Pp(),
    n = ei(),
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
    (ua.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    ua
  );
}
var Xl;
function Vm() {
  if (Xl) return aa;
  ((Xl = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.ForgeFeatureFlags = void 0));
  const e = Um(),
    t = zm(),
    r = Pp(),
    n = $m();
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
  return ((aa.ForgeFeatureFlags = a), aa);
}
var Ql;
function Gm() {
  return (
    Ql ||
      ((Ql = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = Vm();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(ss)),
    ss
  );
}
var Zl;
function Hm() {
  return (
    Zl ||
      ((Zl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Be;
        var r = xb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ja(), e),
          t.__exportStar(Ab(), e),
          t.__exportStar(ni(), e),
          t.__exportStar(cm(), e),
          t.__exportStar(lm(), e),
          t.__exportStar(fm(), e),
          t.__exportStar(pm(), e),
          t.__exportStar(hm(), e),
          t.__exportStar(mm(), e),
          t.__exportStar(wm(), e),
          (e.i18n = t.__importStar(km())),
          t.__exportStar(Pm(), e),
          t.__exportStar(Tm(), e),
          t.__exportStar(Gm(), e));
      })(Ti)),
    Ti
  );
}
var De = Hm();
function J(e) {
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
var Wm = {};
function oi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Wm;
}
var Rp = Object.assign,
  Mo = Object.getOwnPropertyDescriptor,
  xt = Object.defineProperty,
  ii = Object.prototype,
  Vs = [];
Object.freeze(Vs);
var Ap = {};
Object.freeze(Ap);
var Km = typeof Proxy < "u",
  Ym = Object.toString();
function Ip() {
  Km || J("Proxy not available");
}
function jp(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Gr = function () {};
function ft(e) {
  return typeof e == "function";
}
function gr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function si(e) {
  return e !== null && typeof e == "object";
}
function Zt(e) {
  if (!si(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Ym;
}
function Dp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function ci(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Tp(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Or(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return si(n) && n[r] === !0;
    }
  );
}
function nn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Jm(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Ut(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Mp = typeof Object.getOwnPropertySymbols < "u";
function Xm(e) {
  var t = Object.keys(e);
  if (!Mp) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return ii.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var ui =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Mp
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Fp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function $t(e, t) {
  return ii.hasOwnProperty.call(e, t);
}
var Qm =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      ui(t).forEach(function (n) {
        r[n] = Mo(t, n);
      }),
      r
    );
  };
function $e(e, t) {
  return !!(e & t);
}
function Ve(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, t_(n.key), n));
  }
}
function an(e, t, r) {
  return (t && Zm(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Hr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = r_(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function br() {
  return (
    (br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    br.apply(null, arguments)
  );
}
function Lp(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Gs(e, t));
}
function Gs(e, t) {
  return (
    (Gs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Gs(e, t)
  );
}
function e_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function t_(e) {
  var t = e_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r_(e, t) {
  if (e) {
    if (typeof e == "string") return ed(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ed(e, t)
          : void 0
    );
  }
}
var Et = Symbol("mobx-stored-annotations");
function Ct(e) {
  function t(r, n) {
    if (Qa(n)) return e.decorate_20223_(r, n);
    Xa(r, n, e);
  }
  return Object.assign(t, e);
}
function Xa(e, t, r) {
  ($t(e, Et) || ci(e, Et, br({}, e[Et])), u_(r) || (e[Et][t] = r));
}
function n_(e) {
  return ($t(e, Et) || ci(e, Et, br({}, e[Et])), e[Et]);
}
function Qa(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var $ = Symbol("mobx administration"),
  tr = (function () {
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
        return Zp(this);
      }),
      (t.reportChanged = function () {
        (tt(), eh(this), rt());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      an(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return $e(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
tr.isBeingObservedMask_ = 1;
tr.isPendingUnobservationMask_ = 2;
tr.diffValueMask_ = 4;
var Ec = Or("Atom", tr);
function Np(e, t, r) {
  (t === void 0 && (t = Gr), r === void 0 && (r = Gr));
  var n = new tr(e);
  return (t !== Gr && py(n, t), r !== Gr && oh(n, r), n);
}
function a_(e, t) {
  return bh(e, t);
}
function o_(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Fo = { structural: a_, default: o_ };
function mr(e, t, r) {
  return uh(e)
    ? e
    : Array.isArray(e)
      ? fe.array(e, { name: r })
      : Zt(e)
        ? fe.object(e, void 0, { name: r })
        : nn(e)
          ? fe.map(e, { name: r })
          : Ut(e)
            ? fe.set(e, { name: r })
            : typeof e == "function" && !Jr(e) && !Na(e)
              ? Dp(e)
                ? Xr(e)
                : La(r, e)
              : e;
}
function i_(e, t, r) {
  if (e == null || bi(e) || gi(e) || Er(e) || St(e)) return e;
  if (Array.isArray(e)) return fe.array(e, { name: r, deep: !1 });
  if (Zt(e)) return fe.object(e, void 0, { name: r, deep: !1 });
  if (nn(e)) return fe.map(e, { name: r, deep: !1 });
  if (Ut(e)) return fe.set(e, { name: r, deep: !1 });
}
function li(e) {
  return e;
}
function s_(e, t) {
  return bh(e, t) ? t : e;
}
var c_ = "override";
function u_(e) {
  return e.annotationType_ === c_;
}
function Za(e, t) {
  return { annotationType_: e, options_: t, make_: l_, extend_: d_, decorate_20223_: f_ };
}
function l_(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Jr(r.value)) return 1;
  var o = Bp(e, this, t, r, !1);
  return (xt(n, t, o), 2);
}
function d_(e, t, r, n) {
  var a = Bp(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function f_(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, p, v;
      return _r(
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
        Jr(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      Jr(e) || (e = i(e)),
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
  J(
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
function v_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Bp(e, t, r, n, a) {
  var o, i, c, s, u, l, d;
  (a === void 0 && (a = I.safeDescriptors), v_(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: _r(
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
function Up(e, t) {
  return { annotationType_: e, options_: t, make_: p_, extend_: h_, decorate_20223_: g_ };
}
function p_(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!$t(e.target_, t) || !Na(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Na(r.value)) return 1;
  var o = qp(e, this, t, r, !1, !1);
  return (xt(n, t, o), 2);
}
function h_(e, t, r, n) {
  var a,
    o = qp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function g_(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Na(e) || (e = Xr(e)),
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
function b_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function qp(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), b_(e, t, r, n));
  var i = n.value;
  if ((Na(i) || (i = Xr(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function xc(e, t) {
  return { annotationType_: e, options_: t, make_: m_, extend_: __, decorate_20223_: y_ };
}
function m_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function __(e, t, r, n) {
  return (
    w_(e, this, t, r),
    e.defineComputedProperty_(t, br({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function y_(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = on(this)[$],
        i = br({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new vt(i)));
    }),
    function () {
      return this[$].getObservablePropValue_(n);
    }
  );
}
function w_(e, t, r, n) {
  (t.annotationType_, n.get);
}
function di(e, t) {
  return { annotationType_: e, options_: t, make_: k_, extend_: O_, decorate_20223_: S_ };
}
function k_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function O_(e, t, r, n) {
  var a, o;
  return (
    E_(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : mr,
      n,
    )
  );
}
function S_(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var u,
      l,
      d = on(c)[$],
      p = new pr(
        s,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : mr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, p), o.add(c));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[$].getObservablePropValue_(a));
      },
      set: function (s) {
        return (o.has(this) || i(this, s), this[$].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (o.has(this) || i(this, s), s);
      },
    };
}
function E_(e, t, r, n) {
  t.annotationType_;
}
var x_ = "true",
  C_ = zp();
function zp(e) {
  return { annotationType_: x_, options_: e, make_: P_, extend_: R_, decorate_20223_: A_ };
}
function P_(e, t, r, n) {
  var a, o;
  if (r.get) return fi.make_(e, t, r, n);
  if (r.set) {
    var i = Jr(r.set) ? r.set : _r(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: I.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (xt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (Dp(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? Xr.bound : Xr;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? La.bound : La;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? fe.ref : fe;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function R_(e, t, r, n) {
  var a, o;
  if (r.get) return fi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: _r(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? fe.ref : fe;
  return c.extend_(e, t, r, n);
}
function A_(e, t) {
  J("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var I_ = "observable",
  j_ = "observable.ref",
  D_ = "observable.shallow",
  T_ = "observable.struct",
  $p = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze($p);
function lo(e) {
  return e || $p;
}
var Hs = di(I_),
  M_ = di(j_, { enhancer: li }),
  F_ = di(D_, { enhancer: i_ }),
  L_ = di(T_, { enhancer: s_ }),
  Vp = Ct(Hs);
function fo(e) {
  return e.deep === !0 ? mr : e.deep === !1 ? li : B_(e.defaultDecorator);
}
function N_(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : zp(e)) : void 0;
}
function B_(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : mr;
}
function Gp(e, t, r) {
  if (Qa(t)) return Hs.decorate_20223_(e, t);
  if (gr(t)) {
    Xa(e, t, Hs);
    return;
  }
  return uh(e)
    ? e
    : Zt(e)
      ? fe.object(e, t, r)
      : Array.isArray(e)
        ? fe.array(e, t)
        : nn(e)
          ? fe.map(e, t)
          : Ut(e)
            ? fe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : fe.box(e, t);
}
Rp(Gp, Vp);
var U_ = {
    box: function (t, r) {
      var n = lo(r);
      return new pr(t, fo(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = lo(r);
      return (I.useProxies === !1 || n.proxy === !1 ? Ny : Py)(t, fo(n), n.name);
    },
    map: function (t, r) {
      var n = lo(r);
      return new dh(t, fo(n), n.name);
    },
    set: function (t, r) {
      var n = lo(r);
      return new fh(t, fo(n), n.name);
    },
    object: function (t, r, n) {
      return xr(function () {
        return my(I.useProxies === !1 || n?.proxy === !1 ? on({}, n) : Ey({}, n), t, r);
      });
    },
    ref: Ct(M_),
    shallow: Ct(F_),
    deep: Vp,
    struct: Ct(L_),
  },
  fe = Rp(Gp, U_),
  Hp = "computed",
  q_ = "computed.struct",
  Ws = xc(Hp),
  z_ = xc(q_, { equals: Fo.structural }),
  fi = function (t, r) {
    if (Qa(r)) return Ws.decorate_20223_(t, r);
    if (gr(r)) return Xa(t, r, Ws);
    if (Zt(t)) return Ct(xc(Hp, t));
    var n = Zt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new vt(n));
  };
Object.assign(fi, Ws);
fi.struct = Ct(z_);
var td,
  rd,
  Lo = 0,
  $_ = 1,
  V_ =
    (td = (rd = Mo(function () {}, "name")) == null ? void 0 : rd.configurable) != null ? td : !1,
  nd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function _r(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return G_(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    V_ && ((nd.value = e), xt(a, "name", nd)),
    a
  );
}
function G_(e, t, r, n, a) {
  var o = H_(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    W_(o);
  }
}
function H_(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    c = !t || !i;
  tt();
  var s = I.allowStateChanges;
  c && (Sr(), (s = vi(!0)));
  var u = Cc(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: $_++,
      parentActionId_: Lo,
    };
  return ((Lo = l.actionId_), l);
}
function W_(e) {
  (Lo !== e.actionId_ && J(30),
    (Lo = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    pi(e.prevAllowStateChanges_),
    Pa(e.prevAllowStateReads_),
    rt(),
    e.runAsAction_ && Vt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function K_(e, t) {
  var r = vi(e);
  try {
    return t();
  } finally {
    pi(r);
  }
}
function vi(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function pi(e) {
  I.allowStateChanges = e;
}
var pr = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = Fo.default),
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
    Lp(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== I.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ze(this)) {
          var o = et(this, { object: this, type: Pt, newValue: a });
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
          lt(this) && dt(this, { type: Pt, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return eo(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Pt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          to(this, a)
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
        return Fp(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(tr),
  vt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Q.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Q.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Bo(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = No.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || J(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = _r("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Fo.structural : Fo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Z_(this);
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
          (this.isComputing && J(32, this.name_, this.derivation),
          I.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Ks(this) &&
            (this.warnAboutUntrackedRead_(), tt(), (this.value_ = this.computeValue_(!1)), rt());
        else if ((Zp(this), Ks(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && Q_(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (So(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && J(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else J(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === Q.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || So(n) || So(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = vi(!1),
          o;
        if (n) o = Wp(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Bo(i);
          }
        return (pi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Ys(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return uy(function () {
          var s = o.get();
          if (!i || a) {
            var u = Sr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Pt,
              object: o,
              newValue: s,
              oldValue: c,
            }),
              Vt(u));
          }
          ((i = !1), (c = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Fp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      an(e, [
        {
          key: "isComputing",
          get: function () {
            return $e(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return $e(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return $e(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
vt.isComputingMask_ = 1;
vt.isRunningSetterMask_ = 2;
vt.isBeingObservedMask_ = 4;
vt.isPendingUnobservationMask_ = 8;
vt.diffValueMask_ = 16;
var hi = Or("ComputedValue", vt),
  Q;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Q || (Q = {}));
var No;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(No || (No = {}));
var Bo = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function So(e) {
  return e instanceof Bo;
}
function Ks(e) {
  switch (e.dependenciesState_) {
    case Q.UP_TO_DATE_:
      return !1;
    case Q.NOT_TRACKING_:
    case Q.STALE_:
      return !0;
    case Q.POSSIBLY_STALE_: {
      for (var t = Cc(!0), r = Sr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (hi(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Vt(r), Pa(t), !0);
            }
          if (e.dependenciesState_ === Q.STALE_) return (Vt(r), Pa(t), !0);
        }
      }
      return (Yp(e), Vt(r), Pa(t), !1);
    }
  }
}
function Wp(e, t, r) {
  var n = Cc(!0);
  (Yp(e),
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
      o = new Bo(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), Y_(e), Pa(n), o);
}
function Y_(e) {
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
    (s.diffValue === 0 && Xp(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), X_(u, e));
  }
  n !== Q.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Ys(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Xp(t[r], e);
  e.dependenciesState_ = Q.NOT_TRACKING_;
}
function Kp(e) {
  var t = Sr();
  try {
    return e();
  } finally {
    Vt(t);
  }
}
function Sr() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Vt(e) {
  I.trackingDerivation = e;
}
function Cc(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function Pa(e) {
  I.allowStateReads = e;
}
function Yp(e) {
  if (e.dependenciesState_ !== Q.UP_TO_DATE_) {
    e.dependenciesState_ = Q.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Q.UP_TO_DATE_;
  }
}
var Eo = function () {
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
  xo = !0,
  Jp = !1,
  I = (function () {
    var e = oi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (xo = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Eo().version && (xo = !1),
      xo
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Eo()))
        : (setTimeout(function () {
            Jp || J(35);
          }, 1),
          new Eo())
    );
  })();
function J_() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && J(36), (Jp = !0), xo)) {
    var e = oi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new Eo()));
  }
}
function X_(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Xp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Qp(e));
}
function Qp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function tt() {
  I.inBatch++;
}
function rt() {
  if (--I.inBatch === 0) {
    th();
    for (var e = I.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof vt && r.suspend_()));
    }
    I.pendingUnobservations = [];
  }
}
function Zp(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && Qp(e), !1);
}
function eh(e) {
  e.lowestObserverState_ !== Q.STALE_ &&
    ((e.lowestObserverState_ = Q.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Q.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Q.STALE_));
    }));
}
function Q_(e) {
  e.lowestObserverState_ !== Q.STALE_ &&
    ((e.lowestObserverState_ = Q.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Q.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Q.STALE_)
        : t.dependenciesState_ === Q.UP_TO_DATE_ && (e.lowestObserverState_ = Q.UP_TO_DATE_);
    }));
}
function Z_(e) {
  e.lowestObserverState_ === Q.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Q.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Q.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Q.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var jt = (function () {
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
      (this.isTracing_ = No.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), th());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (tt(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), Ks(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((I.trackingContext = n), rt());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (tt(), (this.isRunning = !0));
        var a = I.trackingContext;
        I.trackingContext = this;
        var o = Wp(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Ys(this),
          So(o) && this.reportExceptionInDerivation_(o.cause),
          rt());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (tt(), Ys(this), rt()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        o = function i() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", i));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", o),
        (o[$] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (o[Symbol.dispose] = o),
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    an(e, [
      {
        key: "isDisposed",
        get: function () {
          return $e(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return $e(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return $e(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return $e(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
jt.isDisposedMask_ = 1;
jt.isScheduledMask_ = 2;
jt.isTrackPendingMask_ = 4;
jt.isRunningMask_ = 8;
jt.diffValueMask_ = 16;
var ey = 100,
  Js = function (t) {
    return t();
  };
function th() {
  I.inBatch > 0 || I.isRunningReactions || Js(ty);
}
function ty() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === ey && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var Uo = Or("Reaction", jt);
function ry(e) {
  var t = Js;
  Js = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Ra() {
  return !1;
}
function ny(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var rh = "action",
  ay = "action.bound",
  nh = "autoAction",
  oy = "autoAction.bound",
  iy = "<unnamed action>",
  Xs = Za(rh),
  sy = Za(ay, { bound: !0 }),
  Qs = Za(nh, { autoAction: !0 }),
  cy = Za(oy, { autoAction: !0, bound: !0 });
function ah(e) {
  var t = function (n, a) {
    if (ft(n)) return _r(n.name || iy, n, e);
    if (ft(a)) return _r(n, a, e);
    if (Qa(a)) return (e ? Qs : Xs).decorate_20223_(n, a);
    if (gr(a)) return Xa(n, a, e ? Qs : Xs);
    if (gr(n)) return Ct(Za(e ? nh : rh, { name: n, autoAction: e }));
  };
  return t;
}
var nt = ah(!1);
Object.assign(nt, Xs);
var La = ah(!0);
Object.assign(La, Qs);
nt.bound = Ct(sy);
La.bound = Ct(cy);
function Jr(e) {
  return ft(e) && e.isMobxAction === !0;
}
function uy(e, t) {
  var r, n, a, o;
  t === void 0 && (t = Ap);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new jt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = dy(t),
      l = !1;
    s = new jt(
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
var ly = function (t) {
  return t();
};
function dy(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : ly;
}
var fy = "onBO",
  vy = "onBUO";
function py(e, t, r) {
  return ih(fy, e, t, r);
}
function oh(e, t, r) {
  return ih(vy, e, t, r);
}
function ih(e, t, r, n) {
  var a = $o(t),
    o = ft(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var hy = "never",
  vo = "always",
  gy = "observed";
function by(e) {
  e.isolateGlobalState === !0 && J_();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === vo ? !0 : t === hy ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === vo ? vo : r === gy;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === vo)));
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
    e.reactionScheduler && ry(e.reactionScheduler));
}
function my(e, t, r, n) {
  var a = Qm(t);
  return (
    xr(function () {
      var o = on(e, n)[$];
      ui(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function _y(e, t) {
  return sh($o(e, t));
}
function sh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = yy(e.observing_).map(sh)),
    t
  );
}
function yy(e) {
  return Array.from(new Set(e));
}
var wy = 0;
function ch() {
  this.message = "FLOW_CANCELLED";
}
ch.prototype = Object.create(Error.prototype);
var us = Up("flow"),
  ky = Up("flow.bound", { bound: !0 }),
  Xr = Object.assign(function (t, r) {
    if (Qa(r)) return us.decorate_20223_(t, r);
    if (gr(r)) return Xa(t, r, us);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          u = ++wy,
          l = nt(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          p = void 0,
          v = new Promise(function (h, f) {
            var g = 0;
            d = f;
            function b(k) {
              p = void 0;
              var w;
              try {
                w = nt(a + " - runid: " + u + " - yield " + g++, l.next).call(l, k);
              } catch (O) {
                return f(O);
              }
              _(w);
            }
            function m(k) {
              p = void 0;
              var w;
              try {
                w = nt(a + " - runid: " + u + " - yield " + g++, l.throw).call(l, k);
              } catch (O) {
                return f(O);
              }
              _(w);
            }
            function _(k) {
              if (ft(k?.then)) {
                k.then(_, f);
                return;
              }
              return k.done ? h(k.value) : ((p = Promise.resolve(k.value)), p.then(b, m));
            }
            b(void 0);
          });
        return (
          (v.cancel = nt(a + " - runid: " + u + " - cancel", function () {
            try {
              p && ad(p);
              var h = l.return(void 0),
                f = Promise.resolve(h.value);
              (f.then(Gr, Gr), ad(f), d(new ch()));
            } catch (g) {
              d(g);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, us);
Xr.bound = Ct(ky);
function ad(e) {
  ft(e.cancel) && e.cancel();
}
function Na(e) {
  return e?.isMobXFlow === !0;
}
function Oy(e, t) {
  return e ? bi(e) || !!e[$] || Ec(e) || Uo(e) || hi(e) : !1;
}
function uh(e) {
  return Oy(e);
}
function qt(e, t) {
  (t === void 0 && (t = void 0), tt());
  try {
    return e.apply(t);
  } finally {
    rt();
  }
}
function Tr(e) {
  return e[$];
}
var Sy = {
  has: function (t, r) {
    return Tr(t).has_(r);
  },
  get: function (t, r) {
    return Tr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return gr(r) ? ((a = Tr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return gr(r) ? ((n = Tr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Tr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Tr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    J(13);
  },
};
function Ey(e, t) {
  var r, n;
  return (
    Ip(),
    (e = on(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Sy))
  );
}
function Ze(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function eo(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    jp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function et(e, t) {
  var r = Sr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && J(14), !!t);
      a++
    );
    return t;
  } finally {
    Vt(r);
  }
}
function lt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function to(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    jp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function dt(e, t) {
  var r = Sr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Vt(r);
  }
}
function Pc(e, t, r) {
  return (
    xr(function () {
      var n,
        a = on(e, r)[$];
      ((n = t) != null || (t = n_(e)),
        ui(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var od = "splice",
  Pt = "update",
  xy = 1e4,
  Cy = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : $t(qo, r)
              ? qo[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[$];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      J(15);
    },
  },
  Rc = (function () {
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
        (this.atom_ = new tr(r)),
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
        return eo(this, n);
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
          to(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && J("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && J(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && gh(n + a + 1));
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
          o === void 0 && (o = Vs),
          Ze(this))
        ) {
          var s = et(this, { object: this.proxy_, type: od, index: n, removedCount: a, added: o });
          if (!s) return Vs;
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
        if (o.length < xy) {
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
        var i = !this.owned_ && Ra(),
          c = lt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Pt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), c && dt(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && Ra(),
          c = lt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: od,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), c && dt(this, s));
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
        if ((this.legacyMode_ && n > o.length && J(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (Ze(this)) {
            var c = et(this, { type: Pt, object: this.proxy_, index: n, newValue: a });
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
function Py(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Ip(),
    xr(function () {
      var a = new Rc(r, t, n, !1);
      Tp(a.values_, $, a);
      var o = new Proxy(a.values_, Cy);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var qo = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[$];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      a[o - 2] = arguments[o];
    var i = this[$];
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
    return this[$].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[$], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[$].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[$], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (I.trackingDerivation && J(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    I.trackingDerivation && J(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[$],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
le("at", We);
le("concat", We);
le("flat", We);
le("includes", We);
le("indexOf", We);
le("join", We);
le("lastIndexOf", We);
le("slice", We);
le("toString", We);
le("toLocaleString", We);
le("toSorted", We);
le("toSpliced", We);
le("with", We);
le("every", pt);
le("filter", pt);
le("find", pt);
le("findIndex", pt);
le("findLast", pt);
le("findLastIndex", pt);
le("flatMap", pt);
le("forEach", pt);
le("map", pt);
le("some", pt);
le("toReversed", pt);
le("reduce", lh);
le("reduceRight", lh);
function le(e, t) {
  typeof Array.prototype[e] == "function" && (qo[e] = t(e));
}
function We(e) {
  return function () {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function pt(e) {
  return function (t, r) {
    var n = this,
      a = this[$];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, c) {
      return t.call(r, i, c, n);
    });
  };
}
function lh(e) {
  return function () {
    var t = this,
      r = this[$];
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
var Ry = Or("ObservableArrayAdministration", Rc);
function gi(e) {
  return si(e) && Ry(e[$]);
}
var Ay = {},
  Jt = "add",
  zo = "delete",
  dh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = Ay),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ft(Map) || J(18),
        xr(function () {
          ((o.keysAtom_ = Np("ObservableMap.keys()")),
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
          var i = (o = new pr(this.has_(n), li, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            oh(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (Ze(this)) {
          var i = et(this, { type: o ? Pt : Jt, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ze(this))) {
          var o = et(this, { type: zo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Ra(),
            c = lt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: zo,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            qt(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            c && dt(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var i = Ra(),
            c = lt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Pt,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && dt(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          qt(function () {
            var u,
              l = new pr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = Ra(),
          c = lt(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Jt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && dt(this, s);
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
        return id({
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
        return id({
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
        for (var o = Hr(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            u = c[1];
          n.call(a, u, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Er(n) && (n = new Map(n)),
          qt(function () {
            Zt(n)
              ? Xm(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : nn(n)
                  ? (Jm(n) || J(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && J(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        qt(function () {
          Kp(function () {
            for (var a = Hr(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          qt(function () {
            for (
              var o = Iy(n), i = new Map(), c = !1, s = Hr(a.data_.keys()), u;
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
            for (var v = Hr(o.entries()), h; !(h = v()).done; ) {
              var f = h.value,
                g = f[0],
                b = f[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var _ = a.data_.get(g);
                (i.set(g, _), m || (c = !0));
              }
            }
            if (!c)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), w = i.keys(), O = k.next(), x = w.next(); !O.done; ) {
                  if (O.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((O = k.next()), (x = w.next()));
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
        return to(this, n);
      }),
      (t.intercept_ = function (n) {
        return eo(this, n);
      }),
      an(e, [
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
  Er = Or("ObservableMap", dh);
function id(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Ic(e));
}
function Iy(e) {
  if (nn(e) || Er(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Zt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return J(21, e);
}
var jy = {},
  fh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = jy),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ft(Set) || J(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        xr(function () {
          ((o.atom_ = Np(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        qt(function () {
          Kp(function () {
            for (var a = Hr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Hr(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, Ze(this))) {
          var o = et(this, { type: Jt, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          qt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            c = lt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Jt,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && dt(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ze(this)) {
          var o = et(this, { type: zo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = lt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: zo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            qt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            c && dt(this, s),
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
        return sd({
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
        return sd({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Ut(n) && !St(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Ut(n) && !St(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Ut(n) && !St(n)) return n.symmetricDifference(this);
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
        if (Ut(n) && !St(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          St(n) && (n = new Set(n)),
          qt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Ut(n)
                ? (a.clear(),
                  n.forEach(function (o) {
                    return a.add(o);
                  }))
                : n != null && J("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return to(this, n);
      }),
      (t.intercept_ = function (n) {
        return eo(this, n);
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
      an(e, [
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
  St = Or("ObservableSet", fh);
function sd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Ic(e));
}
var cd = Object.create(null),
  ud = "remove",
  vh = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = C_),
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
        (this.keysAtom_ = new tr("ObservableObject.keys")),
        (this.isPlainObject_ = Zt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof vt) return (o.set(a), !0);
        if (Ze(this)) {
          var i = et(this, { type: Pt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var c = lt(this),
            s = !1,
            u =
              c || s
                ? {
                    type: Pt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && dt(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (I.trackingDerivation && !$t(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          $t(this.target_, n)
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
            ((a = new pr(n in this.target_, li, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Et]) != null && o[n]) return;
            J(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== ii; ) {
            var c = Mo(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          dd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && dd(this, o, n), c);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          tt();
          var i = this.delete_(n);
          if (!i) return i;
          if (Ze(this)) {
            var c = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Jt,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = br({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else xt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          rt();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          tt();
          var c = this.delete_(n);
          if (!c) return c;
          if (Ze(this)) {
            var s = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Jt,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var u = ld(n),
            l = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else xt(this.target_, n, l);
          var d = new pr(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          rt();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          tt();
          var i = this.delete_(n);
          if (!i) return i;
          if (Ze(this)) {
            var c = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Jt,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = ld(n),
            u = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else xt(this.target_, n, u);
          (this.values_.set(n, new vt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          rt();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !$t(this.target_, n))) return !0;
        if (Ze(this)) {
          var o = et(this, { object: this.proxy_ || this.target_, name: n, type: ud });
          if (!o) return null;
        }
        try {
          var i;
          tt();
          var c = lt(this),
            s = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (c || s)) {
            var d;
            l = (d = Mo(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof pr && (l = u.value_), eh(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var p = {
              type: ud,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && dt(this, p);
          }
        } finally {
          rt();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return to(this, n);
      }),
      (t.intercept_ = function (n) {
        return eo(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = lt(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: Jt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && dt(this, s);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), ui(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function on(e, t) {
  var r;
  if ($t(e, $)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new vh(e, new Map(), String(n), N_(t));
  return (ci(e, $, a), e);
}
var Dy = Or("ObservableObjectAdministration", vh);
function ld(e) {
  return (
    cd[e] ||
    (cd[e] = {
      get: function () {
        return this[$].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[$].setObservablePropValue_(e, r);
      },
    })
  );
}
function bi(e) {
  return si(e) ? Dy(e[$]) : !1;
}
function dd(e, t, r) {
  var n;
  (n = e.target_[Et]) == null || delete n[r];
}
var Ty = hh(0),
  My = (function () {
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
  ls = 0,
  ph = function () {};
function Fy(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Fy(ph, Array.prototype);
var Ac = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      xr(function () {
        var s = new Rc(o, a, i, !0);
        ((s.proxy_ = c),
          Tp(c, $, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          My && Object.defineProperty(c, "0", Ty));
      }),
      c
    );
  }
  Lp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return gi(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Ic({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    an(t, [
      {
        key: "length",
        get: function () {
          return this[$].getArrayLength_();
        },
        set: function (a) {
          this[$].setArrayLength_(a);
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
})(ph);
Object.entries(qo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && ci(Ac.prototype, t, r);
});
function hh(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[$].get_(e);
    },
    set: function (r) {
      this[$].set_(e, r);
    },
  };
}
function Ly(e) {
  xt(Ac.prototype, "" + e, hh(e));
}
function gh(e) {
  if (e > ls) {
    for (var t = ls; t < e + 100; t++) Ly(t);
    ls = e;
  }
}
gh(1e3);
function Ny(e, t, r) {
  return new Ac(e, t, r);
}
function $o(e, t) {
  if (typeof e == "object" && e !== null) {
    if (gi(e)) return (t !== void 0 && J(23), e[$].atom_);
    if (St(e)) return e.atom_;
    if (Er(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || J(25, t, Zs(e)), r);
    }
    if (bi(e)) {
      if (!t) return J(26);
      var n = e[$].values_.get(t);
      return (n || J(27, t, Zs(e)), n);
    }
    if (Ec(e) || hi(e) || Uo(e)) return e;
  } else if (ft(e) && Uo(e[$])) return e[$];
  J(28);
}
function By(e, t) {
  if ((e || J(29), Ec(e) || hi(e) || Uo(e) || Er(e) || St(e))) return e;
  if (e[$]) return e[$];
  J(24, e);
}
function Zs(e, t) {
  var r;
  if (t !== void 0) r = $o(e, t);
  else {
    if (Jr(e)) return e.name;
    bi(e) || Er(e) || St(e) ? (r = By(e)) : (r = $o(e));
  }
  return r.name_;
}
function xr(e) {
  var t = Sr(),
    r = vi(!0);
  tt();
  try {
    return e();
  } finally {
    (rt(), pi(r), Vt(t));
  }
}
var fd = ii.toString;
function bh(e, t, r) {
  return (r === void 0 && (r = -1), ec(e, t, r));
}
function ec(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = fd.call(e);
  if (i !== fd.call(t)) return !1;
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
  ((e = vd(e)), (t = vd(t)));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(ft(s) && s instanceof s && ft(u) && u instanceof u) &&
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
    for (; l--; ) if (!ec(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var h = d[v];
      if (!($t(t, h) && ec(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function vd(e) {
  return gi(e) ? e.slice() : nn(e) || Er(e) || Ut(e) || St(e) ? Array.from(e.entries()) : e;
}
var pd,
  Uy = ((pd = oi().Iterator) == null ? void 0 : pd.prototype) || {};
function Ic(e) {
  return ((e[Symbol.iterator] = qy), Object.assign(Object.create(Uy), e));
}
function qy() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = oi();
  typeof t[e] > "u" && J("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: ny, extras: { getDebugName: Zs }, $mobx: $ });
var y = kr();
const S = er(y),
  hd = _b({ __proto__: null, default: S }, [y]);
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Pc) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function zy(e) {
  e();
}
function $y(e) {
  (e || (e = zy), by({ reactionScheduler: e }));
}
function Vy(e) {
  return _y(e);
}
var Gy = 1e4,
  Hy = 1e4,
  Wy = (function () {
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
            (n === void 0 && (n = Gy), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Hy));
        },
      }),
      e
    );
  })(),
  Ky = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Wy,
  Ba = new Ky(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  ds = { exports: {} },
  fs = {};
var gd;
function Yy() {
  if (gd) return fs;
  gd = 1;
  var e = kr();
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
      h = n({ inst: { value: v, getSnapshot: p } }),
      f = h[0].inst,
      g = h[1];
    return (
      o(
        function () {
          ((f.value = v), (f.getSnapshot = p), s(f) && g({ inst: f }));
        },
        [d, v, p],
      ),
      a(
        function () {
          return (
            s(f) && g({ inst: f }),
            d(function () {
              s(f) && g({ inst: f });
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
    (fs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    fs
  );
}
var bd;
function Jy() {
  return (bd || ((bd = 1), (ds.exports = Yy())), ds.exports);
}
var Xy = Jy();
function md(e) {
  e.reaction = new jt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Qy(e, t) {
  t === void 0 && (t = "observed");
  var r = S.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (c) {
        return (
          Ba.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (md(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (md(a), Ba.register(r, a, a)),
    S.useDebugValue(a.reaction, Vy),
    Xy.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var vs,
  ps,
  mh = typeof Symbol == "function" && Symbol.for,
  Zy =
    (ps =
      (vs = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || vs === void 0
        ? void 0
        : vs.configurable) !== null && ps !== void 0
      ? ps
      : !1,
  _d = mh
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  yd = mh
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function e0(e, t) {
  var r;
  if (yd && e.$$typeof === yd)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (_d && e.$$typeof === _d && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return Qy(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    Zy && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = y.forwardRef(i)),
    (i = y.memo(i)),
    r0(e, i),
    i
  );
}
var t0 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function r0(e, t) {
  Object.keys(e).forEach(function (r) {
    t0[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var hs;
$y(Qo.unstable_batchedUpdates);
hs = Ba.finalizeAllImmediately;
function n0(e, t) {
  if (wd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !wd(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function wd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var kd = Symbol("patchMixins"),
  _h = Symbol("patchedDefinition");
function a0(e, t) {
  var r = (e[kd] = e[kd] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Od(e, t) {
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
function Sd(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    Od.call.apply(Od, [this, e, t].concat(o));
  };
  return r;
}
function o0(e, t, r) {
  var n = a0(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[_h])) {
    var o = e[t],
      i = yh(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function yh(e, t, r, n, a) {
  var o,
    i = Sd(a, n);
  return (
    (o = {}),
    (o[_h] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = Sd(s, n);
      else {
        var u = yh(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var Ed = Symbol("ObserverAdministration"),
  xd = Symbol("isMobXReactObserver");
function tc(e) {
  var t;
  return (t = e[Ed]) != null
    ? t
    : (e[Ed] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: rc(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function i0(e) {
  var t = e.prototype;
  if (e[xd]) {
    var r = rc(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[xd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Cd;
    else if (t.shouldComponentUpdate !== Cd)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = rc(e);
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
        value: s0.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = tc(this);
      return (
        (c.mounted = !0),
        Ba.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    o0(t, "componentWillUnmount", function () {
      var i,
        c = tc(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function rc(e) {
  return e.displayName || e.name || "<component>";
}
function s0(e) {
  var t = e.bind(this),
    r = tc(this);
  function n() {
    r.reaction || ((r.reaction = c0(r)), r.mounted || Ba.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = K_(!1, t);
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
function c0(e) {
  return new jt(e.name + ".render()", function () {
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
function Cd(e, t) {
  return this.state !== t ? !0 : !n0(this.props, e);
}
function mi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? i0(e)
      : e0(e)
  );
}
function nc() {
  return (
    (nc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    nc.apply(null, arguments)
  );
}
function u0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var l0 = ["children"],
  Pd = S.createContext({});
function wh(e) {
  var t = e.children,
    r = u0(e, l0),
    n = S.useContext(Pd),
    a = S.useRef(nc({}, n, r)),
    o = a.current;
  return S.createElement(Pd.Provider, { value: o }, t);
}
wh.displayName = "MobXProvider";
S.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!fe) throw new Error("mobx-react requires mobx to be available");
var d0 = Object.defineProperty,
  f0 = Object.getOwnPropertyDescriptor,
  Tt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? f0(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && d0(t, r, a), a);
  };
class ht {
  constructor() {
    ((this.isLoading = !1), Pc(this));
  }
  showPlan(t, r) {
    ((this.plan = t), (this.planString = r), (this.isLoading = !1));
  }
  saveSlowQuery(t) {
    this.slowQueries = t;
  }
  saveHistory(t) {
    this.history = t;
  }
  loading() {
    this.isLoading = !0;
  }
  stopLoading() {
    this.isLoading = !1;
  }
}
Tt([fe], ht.prototype, "isLoading", 2);
Tt([fe], ht.prototype, "plan", 2);
Tt([fe], ht.prototype, "planString", 2);
Tt([fe], ht.prototype, "slowQueries", 2);
Tt([fe], ht.prototype, "history", 2);
Tt([nt.bound], ht.prototype, "showPlan", 1);
Tt([nt.bound], ht.prototype, "saveSlowQuery", 1);
Tt([nt.bound], ht.prototype, "saveHistory", 1);
Tt([nt], ht.prototype, "loading", 1);
Tt([nt], ht.prototype, "stopLoading", 1);
const v0 = new ht();
var p0 = Object.defineProperty,
  h0 = Object.getOwnPropertyDescriptor,
  jc = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? h0(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && p0(t, r, a), a);
  };
class _i {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), Pc(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
jc([fe], _i.prototype, "state", 2);
jc([fe], _i.prototype, "lastState", 2);
jc([nt.bound], _i.prototype, "saveState", 1);
const Dc = new _i();
class g0 {
  constructor() {
    ((this.usersStore = v0), (this.stateStore = Dc));
  }
}
const kh = new g0(),
  b0 = y.createContext(kh),
  yi = () => y.useContext(b0);
function he(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function xe(e) {
  "@babel/helpers - typeof";
  return (
    (xe =
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
    xe(e)
  );
}
function m0(e, t) {
  if (xe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Oh(e) {
  var t = m0(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function Rd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Oh(n.key), n));
  }
}
function ge(e, t, r) {
  return (
    t && Rd(e.prototype, t),
    r && Rd(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ke(e, t) {
  if (t && (xe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _0(e);
}
function Z(e) {
  return (
    (Z = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Z(e)
  );
}
function Ua(e, t) {
  return (
    (Ua = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ua(e, t)
  );
}
function Ye(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ua(e, t));
}
function E(e, t, r) {
  return (
    (t = Oh(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ee() {}
function y0(e) {
  if (Array.isArray(e)) return e;
}
function w0(e, t) {
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
function ac(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sh(e, t) {
  if (e) {
    if (typeof e == "string") return ac(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ac(e, t)
          : void 0
    );
  }
}
function k0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return y0(e) || w0(e, t) || Sh(e, t) || k0();
}
var Eh = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  O0 = function (t) {
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
  Vo = function (t, r) {
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
  S0 = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Ad = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  E0 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = Ad(i, n, a),
      s = Ad(o.index, n, a),
      u = r.slice(),
      l = u.splice(c, 1),
      d = G(l, 1),
      p = d[0];
    return (u.splice(s, 0, p), u);
  };
function ne() {
  return (
    (ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ne.apply(null, arguments)
  );
}
function x0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function se(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = x0(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Id(e, t) {
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
function gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Id(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var C0 = (function () {
  function e(t) {
    var r = this;
    (he(this, e),
      E(this, "_isAnalyticsEvent", !0),
      E(this, "clone", function () {
        var n = gs({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return ge(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          xe(r) === "object" && (this.payload = gs(gs({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function P0(e) {
  if (Array.isArray(e)) return ac(e);
}
function R0(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function A0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Se(e) {
  return P0(e) || R0(e) || Sh(e) || A0();
}
function I0(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Z(e)) !== null; );
  return e;
}
function Go() {
  return (
    (Go =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = I0(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Go.apply(null, arguments)
  );
}
function j0(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, xh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function xh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (xh = function () {
    return !!e;
  })();
}
function D0(e, t, r, n) {
  var a = Go(Z(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var T0 = (function (e) {
    function t(r) {
      var n;
      return (
        he(this, t),
        (n = j0(this, t, [r])),
        E(n, "_isUIAnalyticsEvent", !0),
        E(n, "clone", function () {
          if (n.hasFired) return null;
          var a = Se(n.context),
            o = Se(n.handlers),
            i = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: a, handlers: o, payload: i });
        }),
        E(n, "fire", function (a) {
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
      Ye(t, e),
      ge(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : D0(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(C0),
  M0 = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  F0 = function () {
    return y.useContext(M0);
  },
  Ho = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function L0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function N0(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    o = n.current || !!(t && a.current.inputs && L0(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    y.useEffect(
      function () {
        ((n.current = !1), (a.current = i));
      },
      [i],
    ),
    i.result
  );
}
function B0(e, t) {
  return N0(function () {
    return e;
  }, t);
}
function Ch() {
  var e = F0(),
    t = B0(
      function (r) {
        return new T0({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function jd(e, t) {
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
function U0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function qa(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = Ch(),
    u = s.createAnalyticsEvent,
    l = Ho(c),
    d = Ho(t),
    p = y.useCallback(
      function (v) {
        var h = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = U0({ componentName: n, packageName: o, packageVersion: i }, l.current);
        h.context.push(f);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(v, h));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
}
function Dd(e, t) {
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
function q0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Td(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = Ch(),
    s = c.createAnalyticsEvent,
    u = Ho(i),
    l = Ho(t),
    d = y.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = q0({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var h = p.clone();
        (h && h.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, s, u, l],
    );
  return d;
}
var yr = "ASC",
  Wo = "DESC",
  z0 = "small",
  Ko = "large",
  Ph = 0.22;
const $0 = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, $0) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Rh(e, t, r) {
  return e ?? "var(--c-, )";
}
var V0 = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  G0 = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = se(e, V0);
    return y.createElement(
      "table",
      ne(
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
  H0 = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: R(["_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  W0 = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  K0 = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Y0 = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
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
  J0 = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function Md(e, t) {
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
function Fd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Md(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Md(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function X0(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Ah() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Ah() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ah = function () {
    return !!e;
  })();
}
var Ld = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  Q0 = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === yr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = Ld(s.cells, t, n),
        d = Ld(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (xe(l) !== xe(d)) {
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
function Z0(e) {
  var t = (function (r) {
    function n() {
      var a;
      he(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = X0(this, n, [].concat(i))), E(a, "state", { pageRows: [] }), a);
    }
    return (
      Ye(n, r),
      ge(
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
                s = se(o, J0);
              return S.createElement(
                e,
                ne({ pageRows: this.state.pageRows, head: i }, s, { ref: c }),
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
              Vo(u, s);
              var h, f;
              return (
                v ? ((h = c), (f = c)) : ((h = Q0(s, c, u, l) || []), (f = Eh(h, d, p))),
                Fd(Fd({}, i), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(S.Component);
  return S.forwardRef(function (r, n) {
    return S.createElement(t, ne({}, r, { forwardedRef: n }));
  });
}
var ew = "--local-dynamic-table-width",
  Ih = function (t) {
    var r = t.width;
    return typeof r < "u" ? E({}, ew, "".concat(r, "%")) : void 0;
  },
  tw = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  rw = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = se(t, tw);
    return y.createElement(
      "td",
      ne(
        {
          style: Ih({ width: r }),
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
  nw = ["isHighlighted", "children", "style", "testId", "className"],
  aw = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = se(e, nw);
    return y.createElement(
      "tr",
      ne(
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
  ow = ["cells"],
  iw = ["content", "testId"],
  sw = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = se(r, ow);
    return S.createElement(
      aw,
      ne(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (u, l) {
        var d = u.content,
          p = u.testId,
          v = se(u, iw),
          h = (n || { cells: [] }).cells[l] || {},
          f = h.shouldTruncate,
          g = h.width;
        return S.createElement(
          rw,
          ne({ "data-testid": p || (a && "".concat(a, "--cell-").concat(l)) }, v, {
            isFixedSize: o,
            key: l,
            shouldTruncate: f,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function cw(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, jh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function jh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jh = function () {
    return !!e;
  })();
}
var uw = (function (e) {
    function t() {
      return (he(this, t), cw(this, t, arguments));
    }
    return (
      Ye(t, e),
      ge(t, [
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
            return S.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: u },
              a.map(function (l, d) {
                return S.createElement(sw, {
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
  })(S.Component),
  lw = Z0(
    S.forwardRef(function (e, t) {
      return S.createElement(uw, ne({}, e, { forwardedRef: t }));
    }),
  );
function dw(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Dh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Dh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dh = function () {
    return !!e;
  })();
}
var fw = (function (e) {
  function t(r) {
    var n;
    return (he(this, t), (n = dw(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ye(t, e),
    ge(
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
})(S.Component);
const Tc = y.createContext(null);
var vw = "#FFFFFF",
  oc = "#42526E",
  pw = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function hw(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(oc, ")")
    : "var(--ds-icon-inverse, ".concat(vw, ")");
}
var po = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  gw = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  Th = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        c = t.interactionName,
        s = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        p = typeof l == "number" ? l : pw[l],
        v = "".concat(i, "ms"),
        h = hw(a),
        f = y.useContext(Tc);
      return (
        gw(
          function () {
            if (f != null) return f.hold(c);
          },
          [f, c],
        ),
        S.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: R([po.wrapperStyles, po.rotateStyles]),
          },
          S.createElement(
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
              className: R([po.loadInStyles]),
            },
            S.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: R([po.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Nd(e, t) {
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
function Bd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ud = "--contents-opacity",
  bw = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  mw = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Bd(Bd({}, E({}, Ud, n)), {}, { "--_cnddr8": Rh("var(".concat(Ud, ")")) }),
      },
      r,
    );
  },
  _w = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function yw(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Mh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Mh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Mh = function () {
    return !!e;
  })();
}
var Fh = (function (e) {
  function t() {
    return (he(this, t), yw(this, t, arguments));
  }
  return (
    Ye(t, e),
    ge(t, [
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
          return S.createElement(
            bw,
            { testId: s },
            o ? S.createElement(mw, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              S.createElement(
                _w,
                { testId: s },
                S.createElement(Th, {
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
})(S.Component);
E(Fh, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ko,
  contentsOpacity: Ph,
  loadingLabel: "Loading table",
});
var ww = ["children", "testId"],
  kw = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = se(e, ww);
    return y.createElement(
      "div",
      ne({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Ow = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  Sw = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function Ew(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Lh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Lh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lh = function () {
    return !!e;
  })();
}
var Nh = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Ew(this, t, [].concat(a))),
      E(r, "spinnerRef", S.createRef()),
      E(r, "containerRef", S.createRef()),
      E(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      E(r, "UNSAFE_componentWillReceiveProps", function (i) {
        !i.isLoading || !r.hasTargetNode(i)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      E(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      E(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      E(r, "getTargetNode", function () {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          c = i.targetRef,
          s = c?.();
        return s || r.containerRef.current;
      }),
      E(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      E(r, "isVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return u <= 0 ? !1 : s < c;
      }),
      E(r, "isFullyVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return s >= 0 && u <= c;
      }),
      E(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "translateSpinner", function (i, c, s) {
        ((i.style.position = s ? "fixed" : ""),
          (i.style.transform = c !== 0 ? "translate3d(0, ".concat(c, "px, 0)") : ""));
      }),
      E(r, "updateTargetAppearance", function () {
        var i = r.getTargetNode(),
          c = r.props,
          s = c.isLoading,
          u = c.contentsOpacity;
        i &&
          i.style &&
          xe(i.style) === "object" &&
          ((i.style.pointerEvents = s ? "none" : ""), (i.style.opacity = s ? u.toString() : ""));
      }),
      r
    );
  }
  return (
    Ye(t, e),
    ge(t, [
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
              h = s.height;
            if (d) {
              var f = h >= l * 3;
              if (f && !this.isFullyVerticallyVisible(s, o)) {
                if (p >= 0) {
                  var g = o - p,
                    b = g / 2 + p - l / 2,
                    m = g < l * 3 ? p + l : b;
                  this.translateSpinner(c, m, !0);
                } else if (p < 0 && v > o) {
                  var _ = o / 2 - l / 2;
                  this.translateSpinner(c, _, !0);
                } else {
                  var k = v / 2 - l / 2,
                    w = k < l ? k - (l - k) : k;
                  this.translateSpinner(c, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, o)) return;
            var O = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (O && typeof O.getBoundingClientRect == "function") {
              var x = O.getBoundingClientRect().top,
                j = (p - x) / 2;
              this.translateSpinner(c, j, !1);
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
          return S.createElement(
            kw,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              S.createElement(
                Ow,
                { testId: c },
                S.createElement(
                  Sw,
                  { ref: this.spinnerRef },
                  S.createElement(Th, {
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
})(S.Component);
E(Nh, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ko,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Ph), ")"),
  loadingLabel: "Loading table",
});
function xw(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    a = G(n, 2),
    o = a[0],
    i = a[1],
    c = y.useRef(r);
  y.useEffect(
    function () {
      c.current = r;
    },
    [r],
  );
  var s = r ? e : o,
    u = y.useCallback(function (l) {
      c.current || i(l);
    }, []);
  return [s, u];
}
var la = {},
  Cw = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Pw = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Rw = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  qd = y.memo(function (t) {
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
        var h = t.size(d);
        v = h === "small" || h === "medium" ? h : v;
      }
    }
    var f = 16,
      g = Rw[v][l],
      b = f + 2 * g;
    return y.createElement(
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
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - g, " ")
          .concat(0 - g, " ")
          .concat(b, " ")
          .concat(b),
        role: "presentation",
        dangerouslySetInnerHTML: p,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          s ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? Pw[l] : Cw[l],
        ]),
      }),
    );
  });
const Aw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: qd, default: qd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  wi = qv(Aw);
var zd;
function Iw() {
  if (zd) return la;
  ((zd = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.default = void 0));
  var e = r(kr()),
    t = r(wi);
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
  return ((n.displayName = "ChevronLeftIcon"), (la.default = n), la);
}
var jw = Iw();
const Dw = er(jw);
var da = {},
  $d;
function Tw() {
  if ($d) return da;
  (($d = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.default = void 0));
  var e = r(kr()),
    t = r(wi);
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
  return ((n.displayName = "ChevronRightIcon"), (da.default = n), da);
}
var Mw = Tw();
const Fw = er(Mw);
var Mc = y.createContext("elevation.surface"),
  Lw = function () {
    return y.useContext(Mc);
  };
Mc.displayName = "SurfaceProvider";
var Nw = [
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
  Bw = ["className"],
  Uw = {
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
  Bh = {
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
  qw = {
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
  zw = {
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
  $w = {
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
  Vw = {
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
  ki = y.forwardRef(function (e, t) {
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
      h = v === void 0 ? i : v,
      f = e.paddingInlineStart,
      g = f === void 0 ? h : f,
      b = e.paddingInlineEnd,
      m = b === void 0 ? h : b,
      _ = e.style,
      k = e.testId,
      w = e.xcss,
      O = se(e, Nw);
    O.className;
    var x = se(O, Bw),
      j = y.createElement(
        n,
        ne(
          {
            style: _,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              o && Uw[o],
              o && Gw(o) && Bh[o],
              l && qw[l],
              p && zw[p],
              g && $w[g],
              m && Vw[m],
              w,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? y.createElement(Mc.Provider, { value: o }, j) : j;
  });
function Gw(e) {
  return e in Bh;
}
const bs = () =>
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
  Uh = (...e) => R(e);
function Hw() {
  return {
    css() {
      throw bs();
    },
    cssMap() {
      throw bs();
    },
    cx: Uh,
    XCSSProp() {
      throw bs();
    },
  };
}
var Ww = Hw(),
  Kw = Ww.cx,
  Yw = [
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
  Vd = {
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
  Gd = {
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
  Jw = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Xw = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Qw = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Zw = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  ek = { root: "_1e0c1txw _vchhusvi" },
  Yo = y.memo(
    y.forwardRef(function (e, t) {
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
        h = e.xcss,
        f = se(e, Yw);
      return y.createElement(
        n,
        ne({}, f, {
          role: a,
          className: R([
            ek.root,
            c && Gd[c],
            s && Gd[s],
            c && Vd[c],
            u && Vd[u],
            o && Zw[o],
            p && Xw[p],
            i && Jw[i],
            v && Qw[v],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Yo.displayName = "Flex";
var tk = [
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
  ic = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  rk = function (t) {
    var r = t.children;
    return y.createElement("span", { className: R([ic.separator]) }, r);
  },
  Co = y.memo(
    y.forwardRef(function (e, t) {
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
        h = e.testId,
        f = e.role,
        g = e.children,
        b = se(e, tk),
        m = typeof p == "string" ? y.createElement(rk, null, p) : p,
        _ = m
          ? y.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, w) {
                return y.createElement(y.Fragment, { key: w }, p && w > 0 ? m : null, k);
              })
          : g;
      return y.createElement(
        Yo,
        ne({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: Kw(u === "hug" && ic.hug, u === "fill" && ic.fill, v),
          testId: h,
          ref: t,
        }),
        _,
      );
    }),
  );
Co.displayName = "Inline";
var nk = "Invariant failed";
function ak(e, t) {
  if (!e) throw new Error(nk);
}
var qh = y.createContext(!1),
  ok = function () {
    return y.useContext(qh);
  },
  ik = qh.Provider,
  sk = ["span", "p", "strong", "em"],
  ck = function (t, r) {
    var n = Lw();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Hd.hasOwnProperty(n) ? Hd[n] : "color.text";
    }
  },
  Mr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pwu06",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  uk = { medium: "_11c8fhey", UNSAFE_small: "_11c8rymc", large: "_11c81d4k", small: "_11c8wadc" },
  lk = { bold: "_k48pwu06", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  dk = {
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
  Hd = {
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
  fk = y.forwardRef(function (e, t) {
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
    ak(sk.includes(n));
    var v = ok(),
      h = ck(a, v);
    !s && !v && (s = "medium");
    var f = y.createElement(
      n,
      {
        id: c,
        className: R([
          Mr.root,
          s && uk[s],
          h && dk[h],
          l && Mr.truncation,
          l === 1 && Mr.breakAll,
          o && Mr["textAlign.".concat(o)],
          u && lk[u],
          n === "em" && Mr["as.em"],
          n === "strong" && Mr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      p,
    );
    return v ? f : y.createElement(ik, { value: !0 }, f);
  });
function vk() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var pk = ["as", "children", "isInset", "testId", "style", "xcss"],
  hk = ["className"],
  gk = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      u = se(e, pk);
    u.className;
    var l = se(u, hk);
    return y.createElement(
      n,
      ne({}, l, {
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
  bk = [
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
  mk = ["className"],
  Wd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  _k = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Ee : i,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      h = e.tabIndex,
      f = se(e, bk),
      g = y.useContext(Tc),
      b = y.useCallback(
        function (k, w) {
          (g && g.tracePress(s, k.timeStamp), c(k, w));
        },
        [c, g, s],
      ),
      m = qa({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "17.1.0",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var _ = se(f, mk);
    return y.createElement(
      gk,
      ne({ as: "button", tabIndex: h ?? (vk() && !n ? 0 : void 0), style: d }, _, {
        type: o,
        onClick: m,
        disabled: n,
        xcss: Uh(Wd.root, n && Wd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  yk = y.createContext(!1),
  wk = function () {
    return y.useContext(yk);
  };
function Kd(e, t, r, n, a, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (u) {
    return void r(u);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, a);
}
function X(e) {
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
var ms = { exports: {} },
  _s = { exports: {} },
  Yd;
function zh() {
  return (
    Yd ||
      ((Yd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(_s)),
    _s.exports
  );
}
var ys = { exports: {} },
  ws = { exports: {} },
  Jd;
function $h() {
  return (
    Jd ||
      ((Jd = 1),
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
              function p(v, h) {
                t(s, v, function (f) {
                  return this._invoke(v, h, f);
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
      })(ws)),
    ws.exports
  );
}
var Xd;
function Vh() {
  return (
    Xd ||
      ((Xd = 1),
      (function (e) {
        var t = $h();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.toStringTag || "@@toStringTag";
          function s(g, b, m, _) {
            var k = b && b.prototype instanceof l ? b : l,
              w = Object.create(k.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (O, x, j) {
                  var A,
                    P,
                    D,
                    N = 0,
                    q = j || [],
                    W = !1,
                    z = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: H,
                      f: H.bind(n, 4),
                      d: function (B, U) {
                        return ((A = B), (P = 0), (D = n), (z.n = U), u);
                      },
                    };
                  function H(K, B) {
                    for (P = K, D = B, a = 0; !W && N && !U && a < q.length; a++) {
                      var U,
                        V = q[a],
                        ae = z.p,
                        ie = V[2];
                      K > 3
                        ? (U = ie === B) &&
                          ((D = V[(P = V[4]) ? 5 : ((P = 3), 3)]), (V[4] = V[5] = n))
                        : V[0] <= ae &&
                          ((U = K < 2 && ae < V[1])
                            ? ((P = 0), (z.v = B), (z.n = V[1]))
                            : ae < ie &&
                              (U = K < 3 || V[0] > B || B > ie) &&
                              ((V[4] = K), (V[5] = B), (z.n = ie), (P = 0)));
                    }
                    if (U || K > 1) return u;
                    throw ((W = !0), B);
                  }
                  return function (K, B, U) {
                    if (N > 1) throw TypeError("Generator is already running");
                    for (W && B === 1 && H(B, U), P = B, D = U; (a = P < 2 ? n : D) || !W; ) {
                      A || (P ? (P < 3 ? (P > 1 && (z.n = -1), H(P, D)) : (z.n = D)) : (z.v = D));
                      try {
                        if (((N = 2), A)) {
                          if ((P || (K = "next"), (a = A[K]))) {
                            if (!(a = a.call(A, D)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((D = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = A.return) && a.call(A),
                              P < 2 &&
                                ((D = TypeError(
                                  "The iterator does not provide a '" + K + "' method",
                                )),
                                (P = 1)));
                          A = n;
                        } else if ((a = (W = z.n < 0) ? D : O.call(x, z)) !== u) break;
                      } catch (V) {
                        ((A = n), (P = 1), (D = V));
                      } finally {
                        N = 1;
                      }
                    }
                    return { value: a, done: W };
                  };
                })(g, m, _),
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
            h = (p.prototype = l.prototype = Object.create(v));
          function f(g) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(g, p)
                : ((g.__proto__ = p), t(g, c, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = p),
            t(h, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, c, "GeneratorFunction"),
            t(h),
            t(h, c, "Generator"),
            t(h, i, function () {
              return this;
            }),
            t(h, "toString", function () {
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
      })(ys)),
    ys.exports
  );
}
var ks = { exports: {} },
  Os = { exports: {} },
  Ss = { exports: {} },
  Qd;
function Gh() {
  return (
    Qd ||
      ((Qd = 1),
      (function (e) {
        var t = zh(),
          r = $h();
        function n(a, o) {
          function i(s, u, l, d) {
            try {
              var p = a[s](u),
                v = p.value;
              return v instanceof t
                ? o.resolve(v.v).then(
                    function (h) {
                      i("next", h, l, d);
                    },
                    function (h) {
                      i("throw", h, l, d);
                    },
                  )
                : o.resolve(v).then(
                    function (h) {
                      ((p.value = h), l(p));
                    },
                    function (h) {
                      return i("throw", h, l, d);
                    },
                  );
            } catch (h) {
              d(h);
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
      })(Ss)),
    Ss.exports
  );
}
var Zd;
function Hh() {
  return (
    Zd ||
      ((Zd = 1),
      (function (e) {
        var t = Vh(),
          r = Gh();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Os)),
    Os.exports
  );
}
var ef;
function kk() {
  return (
    ef ||
      ((ef = 1),
      (function (e) {
        var t = Hh();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (u) {
            return u.done ? u.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ks)),
    ks.exports
  );
}
var Es = { exports: {} },
  tf;
function Ok() {
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
      })(Es)),
    Es.exports
  );
}
var xs = { exports: {} },
  Cs = { exports: {} },
  rf;
function Sk() {
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
      })(Cs)),
    Cs.exports
  );
}
var nf;
function Ek() {
  return (
    nf ||
      ((nf = 1),
      (function (e) {
        var t = Sk().default;
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
      })(xs)),
    xs.exports
  );
}
var af;
function xk() {
  return (
    af ||
      ((af = 1),
      (function (e) {
        var t = zh(),
          r = Vh(),
          n = kk(),
          a = Hh(),
          o = Gh(),
          i = Ok(),
          c = Ek();
        function s() {
          var u = r(),
            l = u.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function p(f) {
            var g = typeof f == "function" && f.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var v = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(f) {
            var g, b;
            return function (m) {
              (g ||
                ((g = {
                  stop: function () {
                    return b(m.a, 2);
                  },
                  catch: function () {
                    return m.v;
                  },
                  abrupt: function (k, w) {
                    return b(m.a, v[k], w);
                  },
                  delegateYield: function (k, w, O) {
                    return ((g.resultName = w), b(m.d, c(k), O));
                  },
                  finish: function (k) {
                    return b(m.f, k);
                  },
                }),
                (b = function (k, w, O) {
                  ((m.p = g.prev), (m.n = g.next));
                  try {
                    return k(w, O);
                  } finally {
                    g.next = m.n;
                  }
                })),
                g.resultName && ((g[g.resultName] = m.v), (g.resultName = void 0)),
                (g.sent = m.v),
                (g.next = m.n));
              try {
                return f.call(this, g);
              } finally {
                ((m.p = g.prev), (m.n = g.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (b, m, _, k) {
                  return u.w(h(b), m, _, k && k.reverse());
                },
                isGeneratorFunction: p,
                mark: u.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: o,
                async: function (b, m, _, k, w) {
                  return (p(m) ? a : n)(h(b), m, _, k, w);
                },
                keys: i,
                values: c,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ms)),
    ms.exports
  );
}
var Ps, of;
function Ck() {
  if (of) return Ps;
  of = 1;
  var e = xk()();
  Ps = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Ps;
}
var Pk = Ck();
const T = er(Pk);
var Rs = {},
  fa = {},
  sf;
function Wh() {
  if (sf) return fa;
  ((sf = 1), Object.defineProperty(fa, "__esModule", { value: !0 }), (fa.bind = void 0));
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
  return ((fa.bind = e), fa);
}
var dr = {},
  cf;
function Rk() {
  if (cf) return dr;
  cf = 1;
  var e =
    (dr && dr.__assign) ||
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
  (Object.defineProperty(dr, "__esModule", { value: !0 }), (dr.bindAll = void 0));
  var t = Wh();
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
  return ((dr.bindAll = a), dr);
}
var uf;
function Ak() {
  return (
    uf ||
      ((uf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Wh();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Rk();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Rs)),
    Rs
  );
}
var Cr = Ak(),
  fr = {},
  Fr = {},
  ho = {},
  va = {},
  lf;
function Ik() {
  if (lf) return va;
  ((lf = 1),
    Object.defineProperty(va, "__esModule", { value: !0 }),
    (va.V1InitializeContainer = void 0));
  const e = It();
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
  return ((va.V1InitializeContainer = t), va);
}
var pa = {},
  df;
function jk() {
  if (df) return pa;
  ((df = 1),
    Object.defineProperty(pa, "__esModule", { value: !0 }),
    (pa.V2InitializeContainer = void 0));
  const e = It();
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
  return ((pa.V2InitializeContainer = t), pa);
}
var ff;
function Dk() {
  if (ff) return ho;
  ((ff = 1), Object.defineProperty(ho, "__esModule", { value: !0 }));
  const e = It(),
    t = Ik(),
    r = jk();
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
  return ((ho.default = n), ho);
}
var Lr = {},
  ha = {},
  vf;
function Tk() {
  if (vf) return ha;
  ((vf = 1),
    Object.defineProperty(ha, "__esModule", { value: !0 }),
    (ha._resolveDeltasResponse = void 0));
  const e = It(),
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
  ha._resolveDeltasResponse = r;
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
  return ha;
}
var pf;
function Kh() {
  if (pf) return Lr;
  pf = 1;
  var e =
    (Lr && Lr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(c.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? u(h.value) : s(h.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  const t = It(),
    r = Tk();
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
        var l, d, p, v, h, f;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
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
        if (g?.has_updates) {
          const m =
            g?.hash_used !==
            ((f =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && u ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(o, g, b, c);
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
  return ((Lr.default = n), Lr);
}
var ga = {},
  hf;
function Mk() {
  if (hf) return ga;
  ((hf = 1),
    Object.defineProperty(ga, "__esModule", { value: !0 }),
    (ga._makeParamStoreGetter = void 0));
  const e = It(),
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
    return (v, h) => {
      if (d == null) return h;
      const f = d[v];
      if (f == null || (h != null && (0, e._typeOf)(h) !== f.param_type)) return h;
      switch (f.ref_type) {
        case "static":
          return a(f);
        case "gate":
          return o(l, f, p);
        case "dynamic_config":
          return i(l, f, h, p);
        case "experiment":
          return c(l, f, h, p);
        case "layer":
          return s(l, f, h, p);
        default:
          return h;
      }
    };
  }
  return ((ga._makeParamStoreGetter = u), ga);
}
var vr = {},
  gf;
function Fk() {
  if (gf) return vr;
  gf = 1;
  var e =
    (vr && vr.__awaiter) ||
    function (a, o, i, c) {
      function s(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(h) {
          try {
            v(c.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(c.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? u(h.value) : s(h.value).then(d, p);
        }
        v((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.StatsigEvaluationsDataAdapter = void 0));
  const t = It(),
    r = Kh();
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
  return ((vr.StatsigEvaluationsDataAdapter = n), vr);
}
var bf;
function Lk() {
  if (bf) return Fr;
  bf = 1;
  var e =
    (Fr && Fr.__awaiter) ||
    function (c, s, u, l) {
      function d(p) {
        return p instanceof u
          ? p
          : new u(function (v) {
              v(p);
            });
      }
      return new (u || (u = Promise))(function (p, v) {
        function h(b) {
          try {
            g(l.next(b));
          } catch (m) {
            v(m);
          }
        }
        function f(b) {
          try {
            g(l.throw(b));
          } catch (m) {
            v(m);
          }
        }
        function g(b) {
          b.done ? p(b.value) : d(b.value).then(h, f);
        }
        g((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  const t = It(),
    r = Dk(),
    n = Kh(),
    a = Mk(),
    o = Fk();
  let i = class sc extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof sc
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new sc(s ?? "", {}));
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
      const h = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of h) f.bind(this);
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
      const h = u?.disableBackgroundCacheRefresh;
      return h === !0 || (h == null && v?.source === "Bootstrap")
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
        h = (l = v.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (h) {
        const f =
          (p = (d = this.storageProvider).isReadyResolver) === null || p === void 0
            ? void 0
            : p.call(d);
        f
          ? f.then(
              () => t.StableID.setOverride(h, this._sdkKey),
              () => t.StableID.setOverride(h, this._sdkKey),
            )
          : t.StableID.setOverride(h, this._sdkKey);
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
      const h = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s);
      (this._checkUserHasIdForEvaluation(p?.id_type, s, "Dynamic config"),
        this._checkInitializationStatus(v.reason));
      const h = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, u) {
      var l, d, p, v;
      const { result: h, details: f } = this._store.getConfig(s);
      (this._checkUserHasIdForEvaluation(h?.id_type, s, "Experiment"),
        this._checkInitializationStatus(f.reason));
      const g = (0, t._makeExperiment)(s, f, h);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d = (l = g.__evaluation) === null || l === void 0 ? void 0 : l.secondary_exposures) !==
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
            : v.call(p, g, this._user, u),
        m = b ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(s, u) {
      var l, d, p;
      const { result: v, details: h } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const b = (0, t._mergeOverride)(
        f,
        g,
        (p = g?.__value) !== null && p !== void 0 ? p : f.__value,
        (m) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                b,
                m,
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
      const h = {
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
            : d.call(l, h, u);
      return (
        f != null &&
          ((h.__configuration = f.config),
          (h.details = f.details),
          (h.get = (0, a._makeParamStoreGetter)(this, f.config, u))),
        h
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
  return ((Fr.default = i), Fr);
}
var mf;
function Nk() {
  return (
    mf ||
      ((mf = 1),
      (function (e) {
        var t =
            (fr && fr.__createBinding) ||
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
            (fr && fr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = It(),
          a = Lk();
        ((e.StatsigClient = a.default), r(It(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(fr)),
    fr
  );
}
var ut = Nk(),
  As = { exports: {} },
  _f;
function Bk() {
  return (
    _f ||
      ((_f = 1),
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
            h = r ? r + u : u;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], v])
                : s._events[h].push(v)
              : ((s._events[h] = v), s._eventsCount++),
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
            for (var p = 0, v = d.length, h = new Array(v); p < v; p++) h[p] = d[p].fn;
            return h;
          }),
          (c.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (c.prototype.emit = function (u, l, d, p, v, h) {
            var f = r ? r + u : u;
            if (!this._events[f]) return !1;
            var g = this._events[f],
              b = arguments.length,
              m,
              _;
            if (g.fn) {
              switch ((g.once && this.removeListener(u, g.fn, void 0, !0), b)) {
                case 1:
                  return (g.fn.call(g.context), !0);
                case 2:
                  return (g.fn.call(g.context, l), !0);
                case 3:
                  return (g.fn.call(g.context, l, d), !0);
                case 4:
                  return (g.fn.call(g.context, l, d, p), !0);
                case 5:
                  return (g.fn.call(g.context, l, d, p, v), !0);
                case 6:
                  return (g.fn.call(g.context, l, d, p, v, h), !0);
              }
              for (_ = 1, m = new Array(b - 1); _ < b; _++) m[_ - 1] = arguments[_];
              g.fn.apply(g.context, m);
            } else {
              var k = g.length,
                w;
              for (_ = 0; _ < k; _++)
                switch ((g[_].once && this.removeListener(u, g[_].fn, void 0, !0), b)) {
                  case 1:
                    g[_].fn.call(g[_].context);
                    break;
                  case 2:
                    g[_].fn.call(g[_].context, l);
                    break;
                  case 3:
                    g[_].fn.call(g[_].context, l, d);
                    break;
                  case 4:
                    g[_].fn.call(g[_].context, l, d, p);
                    break;
                  default:
                    if (!m) for (w = 1, m = new Array(b - 1); w < b; w++) m[w - 1] = arguments[w];
                    g[_].fn.apply(g[_].context, m);
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
            var h = this._events[v];
            if (h.fn) h.fn === l && (!p || h.once) && (!d || h.context === d) && i(this, v);
            else {
              for (var f = 0, g = [], b = h.length; f < b; f++)
                (h[f].fn !== l || (p && !h[f].once) || (d && h[f].context !== d)) && g.push(h[f]);
              g.length ? (this._events[v] = g.length === 1 ? g[0] : g) : i(this, v);
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
      })(As)),
    As.exports
  );
}
var Uk = Bk();
const qk = er(Uk);
function yf(e, t) {
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
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var go = "@all-features",
  zk = (function () {
    function e() {
      (he(this, e), E(this, "eventToValue", new Map()), (this.emitter = new qk()));
    }
    return ge(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, Kt(Kt({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var l = a(r, Kt(Kt({}, o), {}, { fireGateExposure: !1 })),
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
            l = i(r, n, a, Kt(Kt({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var v = i(r, n, a, Kt(Kt({}, c), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(o);
            h !== v && (s.eventToValue.set(o, v), o(v));
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
            this.emitter.on(go, r),
            function () {
              n.emitter.off(go, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(go),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== go;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  $k = "fedramp-moderate";
function Vk() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === $k;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Fc = (function (e) {
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
  Ea = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  za = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Gk = [
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
function wf(e, t) {
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
function cc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bo = function (t) {
    return cc({ perimeter: Vk() ? za.FEDRAMP_MODERATE : za.COMMERCIAL }, t);
  },
  ba = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (p, v) {
      var h = G(p, 1),
        f = h[0],
        g = G(v, 1),
        b = g[0];
      return f.localeCompare(b);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var c = G(n[i], 2),
        s = c[1],
        u = G(a[i], 2),
        l = u[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  kf = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Hk = function (t) {
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
    var p = se(t, Gk);
    return cc(
      cc({}, p),
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
  Wk = Object.entries(Fc).map(function (e) {
    var t = G(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Yh = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Wk.find(function (i) {
            var c = G(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Fc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  uc = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Of = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (he(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c));
    }
    return ge(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o,
              i = this.getValue(r, n);
            if (i == null) return n;
            var c = Array.isArray(n) ? "array" : xe(n),
              s = Array.isArray(i) ? "array" : xe(i);
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
                Yh(r.details),
                uc(
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
  Sf = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (he(this, e),
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
    return ge(
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
              : n == null || (xe(i) === xe(n) && Array.isArray(n) === Array.isArray(i))
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
                Yh(r.details),
                function (l, d) {
                  return r.get(d);
                },
                uc(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                uc(
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
  Wr = "0.0.0-development";
function Kk(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Jh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Jh = function () {
    return !!e;
  })();
}
function Yk(e, t, r) {
  if (Jh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && Ua(a, r.prototype), a);
}
function lc(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (lc = function (n) {
      if (n === null || !Kk(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Yk(n, arguments, Z(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Ua(a, n)
      );
    }),
    lc(e)
  );
}
function Jk(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Xh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Xh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Xh = function () {
    return !!e;
  })();
}
var Ef = (function (e) {
  function t(r) {
    return (he(this, t), Jk(this, t, [r]));
  }
  return (Ye(t, e), ge(t));
})(lc(Error));
function xf(e, t) {
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
function Xk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Qk = 5e3,
  Zk = "https://api.atlassian.com/flags",
  e1 = "https://api.stg.atlassian.com/flags",
  t1 = "https://api.dev.atlassian.com/flags",
  r1 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  n1 = "https://api.atlassian-us-gov-mod.com/flags",
  a1 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  o1 = "oasis-stg.com/flags",
  i1 = "atlassian-isolated.net/flags",
  s1 = "/gateway/api/flags",
  Is = (function () {
    function e() {
      he(this, e);
    }
    return ge(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = X(
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
          var t = X(
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
          var t = X(
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
                        new Ef(
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
                      throw new Ef("Unexpected 204 response");
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
          var t = X(
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
          if (n) return s1;
          if (a === za.FEDRAMP_MODERATE)
            switch (r) {
              case Ea.Production:
                return n1;
              case Ea.Staging:
                return r1;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === za.COMMERCIAL)
            switch (r) {
              case Ea.Development:
                return t1;
              case Ea.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : e1;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : Zk;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = X(
            T.mark(function n(a, o, i, c) {
              var s, u, l, d, p;
              return T.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (u = i.fetchTimeoutMs || Qk),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(u))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, u)),
                          (h.next = 5),
                          fetch(
                            "".concat(s).concat(a),
                            Xk(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Wr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              c && { body: JSON.stringify(c) },
                            ),
                          )
                        );
                      case 5:
                        return ((p = h.sent), (h.next = 8), this.handleResponseError(p));
                      case 8:
                        return ((h.next = 10), this.extractResponseBody(p));
                      case 10:
                        return h.abrupt("return", h.sent);
                      case 11:
                      case "end":
                        return h.stop();
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
          if (n === void 0) return r ? a1.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(o1);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(i1) : null;
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
function Cf(e, t) {
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
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function c1(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Qh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Qh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qh = function () {
    return !!e;
  })();
}
function u1(e, t, r, n) {
  var a = Go(Z(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var l1 = (function (e) {
  function t() {
    var r;
    return (
      he(this, t),
      (r = c1(this, t, ["NoFetchDataAdapter", "nofetch"])),
      E(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ye(t, e),
    ge(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: ut.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = X(
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
          var r = X(
            T.mark(function a(o, i, c) {
              return T.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ma(
                              ma({}, this.bootstrapResult),
                              {},
                              { fullUserHash: ut._getFullUserHash(i) },
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
            ma(ma({}, this.bootstrapResult), {}, { fullUserHash: ut._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = X(
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
          var a = ut._getStorageKey(this._getSdkKey(), n);
          return "".concat(ut.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          u1(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ma({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ut.DataAdapterCore);
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
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function d1(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = f1(e)) || t) {
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
function f1(e, t) {
  if (e) {
    if (typeof e == "string") return Rf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Rf(e, t)
          : void 0
    );
  }
}
function Rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var js = "LocalOverride:Recognized",
  v1 = "STATSIG_OVERRIDES",
  Af = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Nr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Xe = function (t, r) {
    return r + ":" + t;
  },
  p1 = (function () {
    function e(t) {
      (he(this, e),
        (this._overrides = Nr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ge(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Nr();
          } catch {
            return Nr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Nr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
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
                p = G(l[u], 2),
                v = p[0],
                h = p[1];
              r.gates[v] = h;
            }
            for (
              var f = 0, g = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              f < g.length;
              f++
            ) {
              var b,
                m = G(g[f], 2),
                _ = m[0],
                k = m[1];
              r.configs[_] = k;
            }
            for (
              var w = 0, O = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              w < O.length;
              w++
            ) {
              var x,
                j = G(O[w], 2),
                A = j[0],
                P = j[1];
              r.layers[A] = P;
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
            this.parseStoredOverrides(Af),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Af);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = d1(i),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var u = s.value,
                  l = Je._DJB2(u);
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
          var n = je(je({}, Nr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = G(o[a], 2), c = i[0], s = i[1], u = 0, l = Object.entries(s);
              u < l.length;
              u++
            ) {
              var d = G(l[u], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(Xe(Je._DJB2(p), c), v);
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
            this._djb2Map.set(Xe(Je._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Xe(Je._DJB2(r), "gates")),
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
                : this._djb2Map.get(Xe(r.name, "gates"));
          return o == null
            ? null
            : je(je({}, r), {}, { value: o, details: je(je({}, r.details), {}, { reason: js }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Xe(Je._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Xe(Je._DJB2(r), "configs")),
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
            this._djb2Map.set(Xe(Je._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Xe(Je._DJB2(r), "configs")),
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
            this._djb2Map.set(Xe(Je._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Xe(Je._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Nr();
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
                : this._djb2Map.get(Xe(r.name, "layers"));
          return o == null
            ? null
            : je(
                je({}, r),
                {},
                {
                  __value: o,
                  get: Je._makeTypedGet(r.name, o),
                  details: je(je({}, r.details), {}, { reason: js }),
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
                : this._djb2Map.get(Xe(r.name, "configs"));
          return o == null
            ? null
            : je(
                je({}, r),
                {},
                {
                  value: o,
                  get: Je._makeTypedGet(r.name, o),
                  details: je(je({}, r.details), {}, { reason: js }),
                },
              );
        },
      },
    ]);
  })(),
  h1 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? If(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : If(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var jf = "client-default-key",
  g1 = "https://xp.atlassian.com/v1/rgstr",
  b1 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? v1 : n,
        o = r.overrideAdapter;
      (he(this, e),
        E(this, "initPromise", null),
        E(this, "initCompleted", !1),
        E(this, "initWithDefaults", !1),
        E(this, "hasCheckGateErrorOccurred", !1),
        E(this, "hasGetExperimentErrorOccurred", !1),
        E(this, "hasGetExperimentValueErrorOccurred", !1),
        E(this, "hasGetLayerErrorOccurred", !1),
        E(this, "hasGetLayerValueErrorOccurred", !1),
        E(this, "subscriptions", new zk()),
        E(this, "dataAdapter", new l1()),
        E(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new p1(a)));
    }
    return ge(e, [
      {
        key: "initialize",
        value: (function () {
          var t = X(
            T.mark(function n(a, o, i) {
              var c = this,
                s,
                u;
              return T.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = bo(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ba(s, this.initOptions) ||
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
          var t = X(
            T.mark(function n(a, o, i, c) {
              var s = this,
                u,
                l;
              return T.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((u = bo(a)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ba(u, this.initOptions) ||
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
                          this.provider.setClientVersion(Wr),
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
                                h = v - l;
                              s.fireClientEvent(
                                l,
                                h,
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
                var l = Yt(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: Wr,
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
                c.initOptions.environment !== Ea.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = X(
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
                          (u = bo(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ba(u, this.initOptions) ||
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
                              var h = performance.now(),
                                f = h - l;
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
          var t = X(
            T.mark(function n(a, o, i) {
              var c, s;
              return T.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = bo(a)),
                          (s = function () {
                            return Is.fetchExperimentValues(c, o, i).then(function (p) {
                              var v = p.experimentValues,
                                h = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: h };
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
          var t = X(
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
          var t = X(
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
          var t = X(
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
            return Of.fromExperiment(
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
              new Of(r, {}, "", { time: Date.now(), reason: Fc.Error })
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
          return ba(this.currentIdentifiers, r) && ba(this.currentAttributes, n);
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
          var t = X(
            T.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, h;
              return T.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (c = Yt({}, a)),
                          (g.prev = 1),
                          (l = Is.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = Is.fetchExperimentValues(a, o, i)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = g.sent),
                          (v = G(p, 2)),
                          (h = v[1]),
                          (s = h.experimentValues),
                          (u = h.customAttributes),
                          (g.next = 20));
                        break;
                      case 13:
                        return (
                          (g.prev = 13),
                          (g.t0 = g.catch(1)),
                          g.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                g.t0 === null || g.t0 === void 0 ? void 0 : g.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (g.next = 19),
                          this.initFromValues(c, o, i)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(c, o, u, s));
                      case 21:
                      case "end":
                        return g.stop();
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
          var t = X(
            T.mark(function n(a, o, i, c) {
              var s, u, l, d, p, v, h, f;
              return T.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = Yt(Yt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, c)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (m) {
                            return (s.sdkKey = m);
                          })),
                          (p = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = b.sent),
                          (h = G(v, 2)),
                          (f = h[1]),
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
          var t = X(
            T.mark(function n(a, o, i) {
              var c,
                s,
                u,
                l,
                d,
                p,
                v,
                h = arguments;
              return T.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = Hk(a)),
                          u.sdkKey || (u.sdkKey = jf),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = Yt(
                              Yt({}, u.networkConfig),
                              {},
                              { logEventUrl: g1 },
                            )),
                          u.perimeter === za.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = se(u, h1)),
                          (this.user = kf(o, i)),
                          (v = Yt(
                            Yt({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: ut.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? ut.StableID.setOverride(o.stableId, l)
                            : (v.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new ut.StatsigClient(l, this.user, v)),
                          this.dataAdapter.setBootstrapData(s),
                          (g.next = 17),
                          this.statsigClient.initializeAsync()
                        );
                      case 17:
                        g.next = 29;
                        break;
                      case 19:
                        return (
                          (g.prev = 19),
                          (g.t0 = g.catch(12)),
                          g.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to initialise the Statsig client, error: ".concat(
                                g.t0 === null || g.t0 === void 0 ? void 0 : g.t0.message,
                              ),
                            ),
                          console.warn(
                            "Initialising Statsig client with default sdk key and without values",
                          ),
                          (this.statsigClient = new ut.StatsigClient(jf, this.user, v)),
                          this.dataAdapter.setBootstrapData(),
                          (g.next = 27),
                          this.statsigClient.initializeAsync()
                        );
                      case 27:
                        throw ((this.initWithDefaults = !0), g.t0);
                      case 29:
                      case "end":
                        return g.stop();
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
          var t = X(
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
                            X(
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
          var t = X(
            T.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, h, f;
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
                        ((u = b.sent), (l = kf(o, u.customAttributesFromFetch)), (b.next = 13));
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
                          ((h = !0),
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
                        ((b.prev = 23), (b.t1 = b.catch(15)), (h = !1), (f = String(b.t1)));
                      case 27:
                        if (
                          ((c = this.initOptions) === null ||
                            c === void 0 ||
                            (s = c.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(c, h, f),
                          !h)
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
          return Wr;
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
            return Sf.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Sf.fromLayer(ut._makeLayer(r, { reason: "Error" }, null))
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
      he(this, e);
    }
    return ge(e, null, [
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
E(Y, "client", new b1());
E(Y, "hasCheckGateErrorOccurred", !1);
E(Y, "hasGetExperimentValueErrorOccurred", !1);
E(Y, "checkGate", function (e, t) {
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
E(Y, "getExperimentValue", function (e, t, r, n) {
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
E(Y, "initializeCalled", M.client.initializeCalled.bind(M.client));
E(Y, "initializeCompleted", M.client.initializeCompleted.bind(M.client));
E(Y, "waitUntilInitializeCompleted", M.client.waitUntilInitializeCompleted.bind(M.client));
E(Y, "initialize", M.client.initialize.bind(M.client));
E(Y, "initializeWithProvider", M.client.initializeWithProvider.bind(M.client));
E(Y, "initializeFromValues", M.client.initializeFromValues.bind(M.client));
E(Y, "manuallyLogGateExposure", M.client.manuallyLogGateExposure.bind(M.client));
E(Y, "getExperiment", M.client.getExperiment.bind(M.client));
E(Y, "manuallyLogExperimentExposure", M.client.manuallyLogExperimentExposure.bind(M.client));
E(Y, "manuallyLogLayerExposure", M.client.manuallyLogLayerExposure.bind(M.client));
E(Y, "shutdownStatsig", M.client.shutdownStatsig.bind(M.client));
E(Y, "overrideGate", M.client.overrideGate.bind(M.client));
E(Y, "clearGateOverride", M.client.clearGateOverride.bind(M.client));
E(Y, "overrideConfig", M.client.overrideConfig.bind(M.client));
E(Y, "clearConfigOverride", M.client.clearConfigOverride.bind(M.client));
E(Y, "setOverrides", M.client.setOverrides.bind(M.client));
E(Y, "getOverrides", M.client.getOverrides.bind(M.client));
E(Y, "clearAllOverrides", M.client.clearAllOverrides.bind(M.client));
E(Y, "isCurrentUser", M.client.isCurrentUser.bind(M.client));
E(Y, "onGateUpdated", M.client.onGateUpdated.bind(M.client));
E(Y, "onExperimentValueUpdated", M.client.onExperimentValueUpdated.bind(M.client));
E(Y, "onAnyUpdated", M.client.onAnyUpdated.bind(M.client));
E(Y, "updateUser", M.client.updateUser.bind(M.client));
E(Y, "updateUserWithProvider", M.client.updateUserWithProvider.bind(M.client));
E(Y, "updateUserWithValues", M.client.updateUserWithValues.bind(M.client));
E(Y, "getPackageVersion", M.client.getPackageVersion.bind(M.client));
E(Y, "getLayer", M.client.getLayer.bind(M.client));
E(Y, "getLayerValue", M.client.getLayerValue.bind(M.client));
var dc = Y;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = Y;
  else {
    var mo, Ds;
    dc = window.__FEATUREGATES_JS__;
    var Df =
      ((mo = dc) === null || mo === void 0 || (Ds = mo.getPackageVersion) === null || Ds === void 0
        ? void 0
        : Ds.call(mo)) || "4.10.0 or earlier";
    if (Df !== Wr) {
      var m1 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Df, " when module version ")
        .concat(Wr, " was loading.");
      console.warn(m1);
    }
  }
var Br,
  Ur,
  _1 =
    (globalThis == null ||
    (Br = globalThis.process) === null ||
    Br === void 0 ||
    (Br = Br.env) === null ||
    Br === void 0
      ? void 0
      : Br.JEST_WORKER_ID) !== void 0,
  y1 =
    !_1 &&
    (globalThis == null ||
    (Ur = globalThis.process) === null ||
    Ur === void 0 ||
    (Ur = Ur.env) === null ||
    Ur === void 0
      ? void 0
      : Ur.NODE_ENV) !== "production",
  w1 = function () {
    var t;
    y1 && (t = console).debug.apply(t, arguments);
  },
  Lc = {},
  k1 = "@atlaskit/platform-feature-flags",
  Aa = "__PLATFORM_FEATURE_FLAGS__",
  Zh = typeof process < "u" && typeof Lc < "u",
  O1 = Zh ? Lc.ENABLE_PLATFORM_FF === "true" : !1,
  S1 = Zh ? Lc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  E1 = O1 || S1,
  x1 = { booleanResolver: void 0 },
  Ia = typeof window < "u" ? window : globalThis;
Ia[Aa] = Ia[Aa] || x1;
function C1(e) {
  if (E1)
    return (
      w1(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        k1,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Ia[Aa]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Ia[Aa]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return dc.checkGate(e);
    var a = (n = Ia[Aa]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function de(e) {
  return C1(e);
}
var P1 = ["light", "dark", "auto"],
  R1 = [
    "light-increased-contrast",
    "light",
    "light-future",
    "dark",
    "dark-future",
    "dark-increased-contrast",
    "legacy-light",
    "legacy-dark",
    "spacing",
    "shape",
    "typography",
  ],
  A1 = {
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
    "atlassian-legacy-light": {
      id: "legacy-light",
      displayName: "Light Theme (legacy)",
      palette: "legacyPalette",
      attributes: { type: "color", mode: "light" },
    },
    "atlassian-legacy-dark": {
      id: "legacy-dark",
      displayName: "Dark Theme (legacy)",
      palette: "legacyPalette",
      attributes: { type: "color", mode: "dark" },
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
  me = {
    colorMode: "auto",
    contrastMode: "auto",
    dark: "dark",
    light: "light",
    shape: function () {
      if (de("platform-dst-shape-theme-default")) return "shape";
    },
    spacing: "spacing",
    typography: "typography",
    UNSAFE_themeOptions: void 0,
  },
  I1 = {
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
  Pr = "data-theme",
  j1 = "data-subtree-theme",
  Oi = "data-color-mode",
  eg = "data-contrast-mode",
  Si = "data-custom-theme",
  D1 = ["light", "dark", "spacing", "typography", "shape"],
  fc = "UNSAFE_themeOptions",
  tg = function (t) {
    return (
      D1.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  rg = function (t) {
    return (
      R1.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  ng = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  T1 = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = G(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && ng(i) && (r[o] = i), tg(o) && rg(i) && (r[o] = i), o === fc))
          try {
            r[fc] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  M1 = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = G(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && ng(i)) ||
        (o === fc && xe(i) === "object") ||
        (tg(o) && typeof i == "string" && rg(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(xe(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
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
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var F1 = function (t) {
    return (
      P1.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Nc = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(Oi) || "",
      n = t.getAttribute(Pr) || "";
    return Mf(Mf({}, T1(n)), F1(r) && { colorMode: r });
  },
  ag = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  $a = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function _P(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function L1(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function yP(e) {
  if (!$a(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, L1(e)]
  );
}
function Ff(e) {
  if (!$a(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function wP(e) {
  if (!$a(e)) throw new Error("Invalid HEX");
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
function kP(e, t, r) {
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
function Lf(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    c = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    s = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * c + 0.0722 * s;
  return u;
}
function OP(e, t) {
  if (!$a(e) || !$a(t)) throw new Error("Invalid HEX");
  var r = Ff(e),
    n = Ff(t),
    a = Lf(r[0], r[1], r[2]),
    o = Lf(n[0], n[1], n[2]),
    i = Math.max(a, o),
    c = Math.min(a, o);
  return (i + 0.05) / (c + 0.05);
}
function SP(e, t) {
  var r = Nf(e),
    n = Nf(t),
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
    h = u / d,
    f = l / p,
    g = v * v + h * h + f * f;
  return g < 0 ? 0 : Math.sqrt(g);
}
function Nf(e) {
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
var og = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
function Bf(e, t) {
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
function Uf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var N1 = "light",
  B1 = "no-preference",
  ig = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.colorMode,
      n = r === void 0 ? me.colorMode : r,
      a = t.dark,
      o = a === void 0 ? me.dark : a,
      i = t.light,
      c = i === void 0 ? me.light : i,
      s = t.contrastMode,
      u = s === void 0 ? me.contrastMode : s,
      l = t.shape,
      d = l === void 0 ? me.shape() : l,
      p = t.spacing,
      v = p === void 0 ? me.spacing : p,
      h = t.typography,
      f = h === void 0 ? me.typography : h,
      g = t.UNSAFE_themeOptions,
      b = g === void 0 ? me.UNSAFE_themeOptions : g,
      m = M1({ dark: o, light: c, shape: d, spacing: v, typography: f }),
      _ = E(E({}, Pr, m), Oi, n === "auto" ? N1 : n);
    if (
      (de("platform_increased-contrast-themes") &&
        (_ = Uf(Uf({}, _), {}, E({}, eg, u === "auto" ? B1 : u))),
      b && ag(b.brandColor))
    ) {
      var k = JSON.stringify(b),
        w = og(k);
      _[Si] = w;
    }
    return _;
  },
  sg = {
    light: function () {
      return Te(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return Te(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return Te(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return Te(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return Te(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return Te(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    "legacy-light": function () {
      return Te(() => import("./atlassian-legacy-light-ChQmBoUT.js"), [], import.meta.url);
    },
    "legacy-dark": function () {
      return Te(() => import("./atlassian-legacy-dark-OVXC1RdQ.js"), [], import.meta.url);
    },
    spacing: function () {
      return Te(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return Te(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    shape: function () {
      return Te(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
  },
  U1 = (function () {
    var e = X(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(Pr, '="').concat(r, '"]:not([').concat(Si, "])"),
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
                return ((i.next = 6), q1(r));
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
  q1 = (function () {
    var e = X(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), sg[r]());
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
  z1 = "(prefers-color-scheme: dark)",
  $1 = "(prefers-contrast: more)",
  V1 = typeof window < "u" && "matchMedia" in window;
function G1(e) {
  var t = document.documentElement;
  t.setAttribute(Oi, e.matches ? "dark" : "light");
}
var qr = V1 && window.matchMedia(z1),
  H1 = (function () {
    function e() {
      (he(this, e), E(this, "unbindThemeChangeListener", null));
    }
    return ge(e, [
      {
        key: "getColorMode",
        value: function () {
          return qr && qr != null && qr.matches ? "dark" : "light";
        },
      },
      {
        key: "bind",
        value: function () {
          qr &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = Cr.bind(qr, { type: "change", listener: G1 }));
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
  _o = new H1(),
  W1 = typeof window < "u" && "matchMedia" in window;
function K1(e) {
  var t = document.documentElement;
  t.setAttribute(eg, e.matches ? "more" : "no-preference");
}
var zr = W1 && window.matchMedia($1),
  Y1 = (function () {
    function e() {
      (he(this, e), E(this, "unbindContrastChangeListener", null));
    }
    return ge(e, [
      {
        key: "getContrastMode",
        value: function () {
          return zr && zr != null && zr.matches ? "more" : "no-preference";
        },
      },
      {
        key: "bind",
        value: function () {
          zr &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = Cr.bind(zr, { type: "change", listener: K1 }));
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
  yo = new Y1();
function J1(e) {
  (e.colorMode === "auto" ? ((e.colorMode = _o.getColorMode()), _o.bind()) : _o.unbind(),
    de("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = yo.getContrastMode()), yo.bind())
        : yo.unbind()));
  var t = ig(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = G(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (_o.unbind(), de("platform_increased-contrast-themes") && yo.unbind());
    }
  );
}
function X1(e, t) {
  var r = JSON.stringify(e),
    n = og(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(Si, '="').concat(n, '"][').concat(Pr, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function EP(e) {
  var t = Se(Array.from(document.head.querySelectorAll("style[".concat(Si, "][").concat(Pr, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function xP(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = G(n, 2),
      o = a[0],
      i = a[1],
      c = I1[o];
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
function qf(e) {
  var t;
  return (t = Object.entries(A1).find(function (r) {
    var n = G(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var Q1 = function (t) {
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
        de("platform_increased-contrast-themes") &&
        u.forEach(function (p) {
          var v = qf(p);
          v && u.push(v);
        }),
        l.push.apply(l, u));
    else if ((l.push(t[r]), n !== "no-preference" && de("platform_increased-contrast-themes"))) {
      var d = qf(t[r]);
      d && l.push(d);
    }
    return (
      [i, c, s].forEach(function (p) {
        p && l.push(p);
      }),
      Se(new Set(l))
    );
  },
  Z1 = function (t) {
    var r = [];
    return Se(new Set(r));
  };
function eO(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = tO(e)) || t) {
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
function tO(e, t) {
  if (e) {
    if (typeof e == "string") return zf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? zf(e, t)
          : void 0
    );
  }
}
function zf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $f(e, t) {
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
function Vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $f(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $f(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var rO = (function () {
    var e = X(
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
          h,
          f,
          g,
          b,
          m,
          _,
          k,
          w,
          O,
          x,
          j,
          A,
          P,
          D,
          N,
          q,
          W,
          z,
          H = arguments;
        return T.wrap(
          function (B) {
            for (;;)
              switch ((B.prev = B.next)) {
                case 0:
                  return (
                    (r = H.length > 0 && H[0] !== void 0 ? H[0] : {}),
                    (n = H.length > 1 ? H[1] : void 0),
                    (a =
                      typeof r == "function"
                        ? r(
                            Vf(
                              Vf({}, me),
                              {},
                              { typography: me.typography, shape: me.shape() },
                              Nc(),
                            ),
                          )
                        : r),
                    (o = a.colorMode),
                    (i = o === void 0 ? me.colorMode : o),
                    (c = a.contrastMode),
                    (s = c === void 0 ? me.contrastMode : c),
                    (u = a.dark),
                    (l = u === void 0 ? me.dark : u),
                    (d = a.light),
                    (p = d === void 0 ? me.light : d),
                    (v = a.shape),
                    (h = v === void 0 ? me.shape() : v),
                    (f = a.spacing),
                    (g = f === void 0 ? me.spacing : f),
                    (b = a.typography),
                    (m = b === void 0 ? me.typography : b),
                    (_ = a.UNSAFE_themeOptions),
                    (k = _ === void 0 ? me.UNSAFE_themeOptions : _),
                    de("platform_increased-contrast-themes") ||
                      (p === "light-increased-contrast" && (p = "light"),
                      l === "dark-increased-contrast" && (l = "dark")),
                    (w = {
                      colorMode: i,
                      contrastMode: s,
                      dark: l,
                      light: p,
                      shape: h,
                      spacing: g,
                      typography: m,
                      UNSAFE_themeOptions: n ? void 0 : k,
                    }),
                    (O = Q1(w)),
                    (x = n || U1),
                    (j = O.map(
                      (function () {
                        var U = X(
                          T.mark(function V(ae) {
                            return T.wrap(function (ce) {
                              for (;;)
                                switch ((ce.prev = ce.next)) {
                                  case 0:
                                    return ((ce.next = 2), x(ae));
                                  case 2:
                                    return ce.abrupt("return", ce.sent);
                                  case 3:
                                  case "end":
                                    return ce.stop();
                                }
                            }, V);
                          }),
                        );
                        return function (V) {
                          return U.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      k &&
                      ag(k?.brandColor) &&
                      ((A = i || me.colorMode),
                      (P = X1(k, A)),
                      P.length > 0 &&
                        j.push(
                          X(
                            T.mark(function U() {
                              var V, ae;
                              return T.wrap(function (ce) {
                                for (;;)
                                  switch ((ce.prev = ce.next)) {
                                    case 0:
                                      return (
                                        (ce.next = 2),
                                        Te(
                                          () => import("./custom-theme-1f35Qmd7.js"),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((V = ce.sent),
                                        (ae = V.loadAndAppendCustomThemeCss),
                                        ae({
                                          colorMode: P.length === 2 ? "auto" : P[0],
                                          UNSAFE_themeOptions: k,
                                        }));
                                    case 5:
                                    case "end":
                                      return ce.stop();
                                  }
                              }, U);
                            }),
                          )(),
                        )),
                    (B.next = 11),
                    Promise.all(j)
                  );
                case 11:
                  ((D = Z1()), (N = eO(D)), (B.prev = 13), N.s());
                case 15:
                  if ((q = N.n()).done) {
                    B.next = 21;
                    break;
                  }
                  return ((W = q.value), (B.next = 19), x(W));
                case 19:
                  B.next = 15;
                  break;
                case 21:
                  B.next = 26;
                  break;
                case 23:
                  ((B.prev = 23), (B.t0 = B.catch(13)), N.e(B.t0));
                case 26:
                  return ((B.prev = 26), N.f(), B.finish(26));
                case 29:
                  return ((z = J1(w)), B.abrupt("return", z));
                case 31:
                case "end":
                  return B.stop();
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
  Bc = (function () {
    function e(t) {
      (he(this, e), E(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return ge(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = Nc();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Pr, Oi] }));
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
E(Bc, "observer", null);
E(Bc, "callbacks", new Set());
var cg = y.createContext(void 0),
  nO = y.createContext(void 0),
  ug = y.createContext(!1),
  aO = y.createContext(void 0),
  oO = y.createContext(void 0),
  iO = function () {
    var t;
    return (t = y.useContext(ug)) !== null && t !== void 0 ? t : !1;
  },
  lg = function () {
    return typeof document < "u" ? document : null;
  };
function dg(e) {
  var t = lg();
  return t ? t.head.querySelector("style[".concat(Pr, '="').concat(e, '"]')) : !1;
}
var sO = (function () {
    var e = X(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!dg(r)) {
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
                return ((i.next = 6), sg[r]());
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
  cO = (function () {
    var e = X(
      T.mark(function t(r, n) {
        var a, o;
        return T.wrap(function (c) {
          for (;;)
            switch ((c.prev = c.next)) {
              case 0:
                if (((a = lg()), a)) {
                  c.next = 3;
                  break;
                }
                return c.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !dg(n))
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
  uO = (function () {
    var e = X(
      T.mark(function t(r) {
        var n;
        return T.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), sO(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                cO(n, r);
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
  lO = (function () {
    var e = X(
      T.mark(function t(r) {
        var n;
        return T.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                ((n = Object.values(r).filter(function (i) {
                  return !!i;
                })),
                  n.forEach(uO));
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
function Gf(e, t) {
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
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var dO = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  fO = typeof window < "u" && "matchMedia" in window,
  ja = fO ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function Hf(e) {
  return e === "auto" ? (ja != null && ja.matches ? "dark" : "light") : e;
}
var vO = { body: "_1e0c1bgi" };
function fg(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = y.useState(n),
    i = G(o, 2),
    c = i[0],
    s = i[1],
    u = y.useState(Hf(n)),
    l = G(u, 2),
    d = l[0],
    p = l[1],
    v = y.useState(function () {
      return yt(yt({}, dO), a);
    }),
    h = G(v, 2),
    f = h[0],
    g = h[1],
    b = y.useCallback(function (A) {
      (s(A), p(Hf(A)));
    }, []),
    m = y.useCallback(function (A) {
      g(function (P) {
        return yt(yt({}, P), A);
      });
    }, []),
    _ = y.useRef(null),
    k = wk(),
    w = iO(),
    O = k && !w,
    x = (!de("platform_dst_subtree_theming") && !k && !w) || O;
  (y.useEffect(
    function () {
      if (x) {
        var A = (function () {
            var D = X(
              T.mark(function N() {
                var q;
                return T.wrap(function (z) {
                  for (;;)
                    switch ((z.prev = z.next)) {
                      case 0:
                        if (!_.current) {
                          z.next = 6;
                          break;
                        }
                        return ((z.next = 3), _.current);
                      case 3:
                        ((q = z.sent), q(), (_.current = null));
                      case 6:
                      case "end":
                        return z.stop();
                    }
                }, N);
              }),
            );
            return function () {
              return D.apply(this, arguments);
            };
          })(),
          P = (function () {
            var D = X(
              T.mark(function N() {
                var q;
                return T.wrap(function (z) {
                  for (;;)
                    switch ((z.prev = z.next)) {
                      case 0:
                        return ((z.next = 2), A());
                      case 2:
                        ((q = rO(yt(yt({}, f), {}, { colorMode: d }))), (_.current = q));
                      case 4:
                      case "end":
                        return z.stop();
                    }
                }, N);
              }),
            );
            return function () {
              return D.apply(this, arguments);
            };
          })();
        return (
          P(),
          function () {
            A();
          }
        );
      } else lO(f);
    },
    [k, w, O, d, x, f],
  ),
    y.useEffect(
      function () {
        if (ja) {
          var A = Cr.bind(ja, {
            type: "change",
            listener: function (D) {
              c === "auto" && p(D.matches ? "dark" : "light");
            },
          });
          return A;
        }
      },
      [c],
    ));
  var j = yt(yt({}, ig(yt(yt({}, f), {}, { colorMode: d }))), {}, E({}, j1, !0));
  return S.createElement(
    ug.Provider,
    { value: !0 },
    S.createElement(
      cg.Provider,
      { value: d },
      S.createElement(
        nO.Provider,
        { value: b },
        S.createElement(
          aO.Provider,
          { value: f },
          S.createElement(
            oO.Provider,
            { value: m },
            !x && de("platform_dst_subtree_theming")
              ? S.createElement("div", ne({}, j, { className: R([vO.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function vg() {
  var e = y.useContext(cg),
    t = Nc(),
    r = y.useState(t?.colorMode || "light"),
    n = G(r, 2),
    a = n[0],
    o = n[1];
  return (
    y.useEffect(
      function () {
        if (!e) {
          var i = new Bc(function (c) {
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
var pO = function () {
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
  pg = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: pO() });
  },
  hO = pg(),
  gO = y.createContext(pg()),
  bO = function (e) {
    return e.value++;
  },
  mO = function (e) {
    return e ? e.prefix : "";
  },
  _O = function (e) {
    var t = e || hO,
      r = mO(t),
      n = bO(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  hg = function () {
    var e = y.useContext(gO),
      t = y.useState(function () {
        return _O(e);
      })[0];
    return t;
  },
  yO = function () {
    var e = hg().uid;
    return e;
  },
  wO = function () {
    var e = hg().gen;
    return e;
  },
  Ts,
  Po = (Ts = S.useId) !== null && Ts !== void 0 ? Ts : void 0;
function kO() {
  return Po && de("platform-dst-react-18-use-id")
    ? de("platform-dst-react-18-use-id-selector-safe")
      ? Po().replace(/[:«»]/g, "_")
      : Po()
    : "uid".concat(yO());
}
function OO() {
  if (Po && de("platform-dst-react-18-use-id")) {
    var e = kO();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return wO();
}
var Uc = function (t) {
  var r = t.children,
    n = t.testId,
    a = t.role,
    o = t.id;
  return y.createElement(
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
Uc.displayName = "VisuallyHidden";
var SO = {
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
  EO = ["children"];
function xO(e) {
  var t = function (c, s) {
      return c(s);
    },
    r = y.createContext(e);
  function n(i) {
    var c = y.useContext(r),
      s = c || t,
      u = s(i);
    return u;
  }
  function a(i) {
    var c = i.children,
      s = se(i, EO),
      u = n(s);
    return S.createElement(S.Fragment, null, c(u));
  }
  function o(i) {
    var c = y.useContext(r),
      s = i.value || t,
      u = y.useCallback(
        function (l) {
          return s(c, l);
        },
        [c, s],
      );
    return S.createElement(r.Provider, { value: u }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var CO = xO(function () {
    return { mode: "light" };
  }),
  PO = CO.useTheme;
function RO(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function AO(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var IO = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(AO(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = RO(a);
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
  Oe = "-ms-",
  Jo = "-moz-",
  ee = "-webkit-",
  gg = "comm",
  qc = "rule",
  zc = "decl",
  jO = "@import",
  bg = "@keyframes",
  DO = "@layer",
  TO = Math.abs,
  Ei = String.fromCharCode,
  MO = Object.assign;
function FO(e, t) {
  return ke(e, 0) ^ 45
    ? (((((((t << 2) ^ ke(e, 0)) << 2) ^ ke(e, 1)) << 2) ^ ke(e, 2)) << 2) ^ ke(e, 3)
    : 0;
}
function mg(e) {
  return e.trim();
}
function LO(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function vc(e, t) {
  return e.indexOf(t);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function Va(e, t, r) {
  return e.slice(t, r);
}
function kt(e) {
  return e.length;
}
function $c(e) {
  return e.length;
}
function wo(e, t) {
  return (t.push(e), e);
}
function NO(e, t) {
  return e.map(t).join("");
}
var xi = 1,
  Qr = 1,
  _g = 0,
  Ne = 0,
  _e = 0,
  sn = "";
function Ci(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: xi,
    column: Qr,
    length: i,
    return: "",
  };
}
function _a(e, t) {
  return MO(Ci("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function BO() {
  return _e;
}
function UO() {
  return ((_e = Ne > 0 ? ke(sn, --Ne) : 0), Qr--, _e === 10 && ((Qr = 1), xi--), _e);
}
function Ge() {
  return ((_e = Ne < _g ? ke(sn, Ne++) : 0), Qr++, _e === 10 && ((Qr = 1), xi++), _e);
}
function Rt() {
  return ke(sn, Ne);
}
function Ro() {
  return Ne;
}
function ro(e, t) {
  return Va(sn, e, t);
}
function Ga(e) {
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
function yg(e) {
  return ((xi = Qr = 1), (_g = kt((sn = e))), (Ne = 0), []);
}
function wg(e) {
  return ((sn = ""), e);
}
function Ao(e) {
  return mg(ro(Ne - 1, pc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qO(e) {
  for (; (_e = Rt()) && _e < 33; ) Ge();
  return Ga(e) > 2 || Ga(_e) > 3 ? "" : " ";
}
function zO(e, t) {
  for (; --t && Ge() && !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97)); );
  return ro(e, Ro() + (t < 6 && Rt() == 32 && Ge() == 32));
}
function pc(e) {
  for (; Ge(); )
    switch (_e) {
      case e:
        return Ne;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pc(_e);
        break;
      case 40:
        e === 41 && pc(e);
        break;
      case 92:
        Ge();
        break;
    }
  return Ne;
}
function $O(e, t) {
  for (; Ge() && e + _e !== 57; ) if (e + _e === 84 && Rt() === 47) break;
  return "/*" + ro(t, Ne - 1) + "*" + Ei(e === 47 ? e : Ge());
}
function VO(e) {
  for (; !Ga(Rt()); ) Ge();
  return ro(e, Ne);
}
function GO(e) {
  return wg(Io("", null, null, null, [""], (e = yg(e)), 0, [0], e));
}
function Io(e, t, r, n, a, o, i, c, s) {
  for (
    var u = 0,
      l = 0,
      d = i,
      p = 0,
      v = 0,
      h = 0,
      f = 1,
      g = 1,
      b = 1,
      m = 0,
      _ = "",
      k = a,
      w = o,
      O = n,
      x = _;
    g;
  )
    switch (((h = m), (m = Ge()))) {
      case 40:
        if (h != 108 && ke(x, d - 1) == 58) {
          vc((x += te(Ao(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Ao(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += qO(h);
        break;
      case 92:
        x += zO(Ro() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            wo(HO($O(Ge(), Ro()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        c[u++] = kt(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (x = te(x, /\f/g, "")),
              v > 0 &&
                kt(x) - d &&
                wo(v > 32 ? Kf(x + ";", n, r, d - 1) : Kf(te(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((wo((O = Wf(x, t, r, u, l, a, c, _, (k = []), (w = []), d)), o), m === 123))
              if (l === 0) Io(x, t, O, O, k, o, d, c, w);
              else
                switch (p === 99 && ke(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Io(
                      e,
                      O,
                      O,
                      n && wo(Wf(e, O, O, 0, 0, a, c, _, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      c,
                      n ? k : w,
                    );
                    break;
                  default:
                    Io(x, O, O, O, [""], w, 0, c, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (_ = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + kt(x)), (v = h));
      default:
        if (f < 1) {
          if (m == 123) --f;
          else if (m == 125 && f++ == 0 && UO() == 125) continue;
        }
        switch (((x += Ei(m)), m * f)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((c[u++] = (kt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (Rt() === 45 && (x += Ao(Ge())), (p = Rt()), (l = d = kt((_ = x += VO(Ro())))), m++);
            break;
          case 45:
            h === 45 && kt(x) == 2 && (f = 0);
        }
    }
  return o;
}
function Wf(e, t, r, n, a, o, i, c, s, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = $c(p), h = 0, f = 0, g = 0; h < n; ++h)
    for (var b = 0, m = Va(e, d + 1, (d = TO((f = i[h])))), _ = e; b < v; ++b)
      (_ = mg(f > 0 ? p[b] + " " + m : te(m, /&\f/g, p[b]))) && (s[g++] = _);
  return Ci(e, t, r, a === 0 ? qc : c, s, u, l);
}
function HO(e, t, r) {
  return Ci(e, t, r, gg, Ei(BO()), Va(e, 2, -2), 0);
}
function Kf(e, t, r, n) {
  return Ci(e, t, r, zc, Va(e, 0, n), Va(e, n + 1, -1), n);
}
function Kr(e, t) {
  for (var r = "", n = $c(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function WO(e, t, r, n) {
  switch (e.type) {
    case DO:
      if (e.children.length) break;
    case jO:
    case zc:
      return (e.return = e.return || e.value);
    case gg:
      return "";
    case bg:
      return (e.return = e.value + "{" + Kr(e.children, n) + "}");
    case qc:
      e.value = e.props.join(",");
  }
  return kt((r = Kr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function KO(e) {
  var t = $c(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function YO(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function JO(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var XO = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Rt()), a === 38 && o === 12 && (r[n] = 1), !Ga(o); ) Ge();
    return ro(t, Ne);
  },
  QO = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Ga(a)) {
        case 0:
          (a === 38 && Rt() === 12 && (r[n] = 1), (t[n] += XO(Ne - 1, r, n)));
          break;
        case 2:
          t[n] += Ao(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Rt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Ei(a);
      }
    while ((a = Ge()));
    return t;
  },
  ZO = function (t, r) {
    return wg(QO(yg(t), r));
  },
  Yf = new WeakMap(),
  eS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Yf.get(n)) && !a) {
        Yf.set(t, !0);
        for (var o = [], i = ZO(r, o), c = n.props, s = 0, u = 0; s < i.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = o[s] ? i[s].replace(/&\f/g, c[l]) : c[l] + " " + i[s];
      }
    }
  },
  tS = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function kg(e, t) {
  switch (FO(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
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
      return ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + Jo + e + Oe + e + e;
    case 6828:
    case 4268:
      return ee + e + Oe + e + e;
    case 6165:
      return ee + e + Oe + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Oe + "flex-$1$2") + e;
    case 5443:
      return ee + e + Oe + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + Oe + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + Oe + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + Oe + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Oe + te(e, "grow", "positive") + e;
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return (
        te(
          te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Oe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        ee +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
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
      if (kt(e) - 1 - t > 6)
        switch (ke(e, t + 1)) {
          case 109:
            if (ke(e, t + 4) !== 45) break;
          case 102:
            return (
              te(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ee + "$2-$3$1" + Jo + (ke(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~vc(e, "stretch") ? kg(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ke(e, t + 1) !== 115) break;
    case 6444:
      switch (ke(e, kt(e) - 3 - (~vc(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return (
            te(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ee +
                (ke(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ee +
                "$2$3$1" +
                Oe +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ke(e, t + 11)) {
        case 114:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Oe + e + e;
  }
  return e;
}
var rS = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case zc:
          t.return = kg(t.value, t.length);
          break;
        case bg:
          return Kr([_a(t, { value: te(t.value, "@", "@" + ee) })], a);
        case qc:
          if (t.length)
            return NO(t.props, function (o) {
              switch (LO(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Kr([_a(t, { props: [te(o, /:(read-\w+)/, ":" + Jo + "$1")] })], a);
                case "::placeholder":
                  return Kr(
                    [
                      _a(t, { props: [te(o, /:(plac\w+)/, ":" + ee + "input-$1")] }),
                      _a(t, { props: [te(o, /:(plac\w+)/, ":" + Jo + "$1")] }),
                      _a(t, { props: [te(o, /:(plac\w+)/, Oe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  nS = [rS],
  aS = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var g = f.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || nS,
      o = {},
      i,
      c = [];
    ((i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var g = f.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            o[g[b]] = !0;
          c.push(f);
        },
      ));
    var s,
      u = [eS, tS];
    {
      var l,
        d = [
          WO,
          YO(function (f) {
            l.insert(f);
          }),
        ],
        p = KO(u.concat(a, d)),
        v = function (g) {
          return Kr(GO(g), p);
        };
      s = function (g, b, m, _) {
        ((l = m), v(g ? g + "{" + b.styles + "}" : b.styles), _ && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new IO({
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
    return (h.sheet.hydrate(c), h);
  },
  Ms = { exports: {} },
  re = {};
var Jf;
function oS() {
  if (Jf) return re;
  Jf = 1;
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
    h = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    m = e ? Symbol.for("react.scope") : 60119;
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var O = w.$$typeof;
      switch (O) {
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
                case h:
                case v:
                case i:
                  return w;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function k(w) {
    return _(w) === u;
  }
  return (
    (re.AsyncMode = s),
    (re.ConcurrentMode = u),
    (re.ContextConsumer = c),
    (re.ContextProvider = i),
    (re.Element = t),
    (re.ForwardRef = l),
    (re.Fragment = n),
    (re.Lazy = h),
    (re.Memo = v),
    (re.Portal = r),
    (re.Profiler = o),
    (re.StrictMode = a),
    (re.Suspense = d),
    (re.isAsyncMode = function (w) {
      return k(w) || _(w) === s;
    }),
    (re.isConcurrentMode = k),
    (re.isContextConsumer = function (w) {
      return _(w) === c;
    }),
    (re.isContextProvider = function (w) {
      return _(w) === i;
    }),
    (re.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (re.isForwardRef = function (w) {
      return _(w) === l;
    }),
    (re.isFragment = function (w) {
      return _(w) === n;
    }),
    (re.isLazy = function (w) {
      return _(w) === h;
    }),
    (re.isMemo = function (w) {
      return _(w) === v;
    }),
    (re.isPortal = function (w) {
      return _(w) === r;
    }),
    (re.isProfiler = function (w) {
      return _(w) === o;
    }),
    (re.isStrictMode = function (w) {
      return _(w) === a;
    }),
    (re.isSuspense = function (w) {
      return _(w) === d;
    }),
    (re.isValidElementType = function (w) {
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
          (w.$$typeof === h ||
            w.$$typeof === v ||
            w.$$typeof === i ||
            w.$$typeof === c ||
            w.$$typeof === l ||
            w.$$typeof === g ||
            w.$$typeof === b ||
            w.$$typeof === m ||
            w.$$typeof === f))
      );
    }),
    (re.typeOf = _),
    re
  );
}
var Xf;
function iS() {
  return (Xf || ((Xf = 1), (Ms.exports = oS())), Ms.exports);
}
var Fs, Qf;
function sS() {
  if (Qf) return Fs;
  Qf = 1;
  var e = iS(),
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
  function i(h) {
    return e.isMemo(h) ? a : o[h.$$typeof] || t;
  }
  var c = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    p = Object.prototype;
  function v(h, f, g) {
    if (typeof f != "string") {
      if (p) {
        var b = d(f);
        b && b !== p && v(h, b, g);
      }
      var m = s(f);
      u && (m = m.concat(u(f)));
      for (var _ = i(h), k = i(f), w = 0; w < m.length; ++w) {
        var O = m[w];
        if (!r[O] && !(g && g[O]) && !(k && k[O]) && !(_ && _[O])) {
          var x = l(f, O);
          try {
            c(h, O, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((Fs = v), Fs);
}
sS();
var cS = !0;
function Og(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Vc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || cS === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Sg = function (t, r, n) {
    Vc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function uS(e) {
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
var lS = {
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
  dS = /[A-Z]|^ms/g,
  fS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Eg = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Zf = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ls = JO(function (e) {
    return Eg(e) ? e : e.replace(dS, "-$&").toLowerCase();
  }),
  ev = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(fS, function (n, a, o) {
            return ((Ot = { name: a, styles: o, next: Ot }), a);
          });
    }
    return lS[t] !== 1 && !Eg(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ha(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((Ot = { name: a.name, styles: a.styles, next: Ot }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Ot = { name: i.name, styles: i.styles, next: Ot }), (i = i.next));
        var c = o.styles + ";";
        return c;
      }
      return vS(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = Ot,
          u = r(e);
        return ((Ot = s), Ha(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function vS(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ha(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : Zf(c) && (n += Ls(o) + ":" + ev(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) Zf(i[s]) && (n += Ls(o) + ":" + ev(o, i[s]) + ";");
      else {
        var u = Ha(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Ls(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var tv = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ot;
function Gc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Ot = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Ha(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += Ha(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  tv.lastIndex = 0;
  for (var u = "", l; (l = tv.exec(a)) !== null; ) u += "-" + l[1];
  var d = uS(a) + u;
  return { name: d, styles: a, next: Ot };
}
var pS = function (t) {
    return t();
  },
  hS = hd.useInsertionEffect ? hd.useInsertionEffect : !1,
  xg = hS || pS,
  Cg = y.createContext(typeof HTMLElement < "u" ? aS({ key: "css" }) : null);
Cg.Provider;
var Pg = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(Cg);
      return t(r, a, n);
    });
  },
  Rg = y.createContext({}),
  Hc = {}.hasOwnProperty,
  hc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  gS = function (t, r) {
    var n = {};
    for (var a in r) Hc.call(r, a) && (n[a] = r[a]);
    return ((n[hc] = t), n);
  },
  bS = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Vc(r, n, a),
      xg(function () {
        return Sg(r, n, a);
      }),
      null
    );
  },
  mS = Pg(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[hc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Og(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = Gc(o, void 0, y.useContext(Rg));
    i += t.key + "-" + c.name;
    var s = {};
    for (var u in e) Hc.call(e, u) && u !== "css" && u !== hc && (s[u] = e[u]);
    return (
      (s.className = i),
      r && (s.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(bS, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        y.createElement(a, s),
      )
    );
  }),
  _S = mS,
  zt = function (t, r) {
    var n = arguments;
    if (r == null || !Hc.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = _S), (o[1] = gS(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return y.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(zt || (zt = {}));
function Mt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Gc(t);
}
var yS = function e(t) {
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
function wS(e, t, r) {
  var n = [],
    a = Og(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var kS = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      xg(function () {
        for (var a = 0; a < n.length; a++) Sg(r, n[a], !1);
      }),
      null
    );
  },
  OS = Pg(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = Gc(u, t.registered);
        return (r.push(d), Vc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return wS(t.registered, n, yS(u));
      },
      o = { css: n, cx: a, theme: y.useContext(Rg) },
      i = e.children(o);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(kS, { cache: t, serializedArr: r }),
      i,
    );
  });
function SS(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Ag = 2,
  gc = Mt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Ag,
  }),
  bc = Mt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Ag,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  ES = Mt({
    "&:focus": gc,
    "&:focus-visible": gc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  xS = Mt({
    "&:focus": bc,
    "&:focus-visible": bc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Ig = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? bc : gc,
      o = r ? xS : ES,
      i = typeof n > "u" ? o : n === "on" && a;
    return zt(OS, null, function (c) {
      var s = c.css,
        u = c.cx;
      return y.Children.only(
        i ? y.cloneElement(t, { className: u([s(i), t.props.className]) }) : t,
      );
    });
  });
Ig.displayName = "FocusRing";
function Bt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var CS = 9;
function rv(e) {
  e.keyCode !== CS && Bt(e);
}
var PS = {
    onMouseDownCapture: Bt,
    onMouseUpCapture: Bt,
    onKeyDownCapture: rv,
    onKeyUpCapture: rv,
    onTouchStartCapture: Bt,
    onTouchEndCapture: Bt,
    onPointerDownCapture: Bt,
    onPointerUpCapture: Bt,
    onClickCapture: Bt,
    onClick: Bt,
  },
  RS = {};
function AS(e) {
  var t = e.isInteractive;
  return t ? RS : PS;
}
function nv(e, t) {
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
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nv(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xt = 8,
  Ns = ["default", "primary", "danger", "warning"],
  mc = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  IS = { default: mc.default, compact: mc.compact, none: "inherit" },
  jS = {
    default: "0 ".concat(Xt + Xt / 4, "px"),
    compact: "0 ".concat(Xt + Xt / 4, "px"),
    none: "0",
  },
  DS = { compact: "0 ".concat(Xt / 4, "px"), default: "0 ".concat(Xt / 4, "px"), none: "0" },
  TS = { default: "middle", compact: "middle", none: "baseline" },
  jg = { content: "0 ".concat(Xt / 4, "px"), icon: "0 ".concat(Xt / 4, "px") },
  Dg = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  MS = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Me(Me({}, Dg), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  FS = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  LS = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  NS = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  BS = {
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
  US = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  qS = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  zS = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Me(
      Me({}, Dg),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  $S = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function VS(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return Me(
    Me(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: de("platform-dst-shape-theme-default")
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
        height: mc[r],
        lineHeight: IS[r],
        padding: o ? DS[r] : jS[r],
        verticalAlign: TS[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? zS
        : Me(
            Me(
              Me(
                Me(
                  Me(
                    Me(
                      Me(Me({}, t === "default" && MS), t === "primary" && FS),
                      t === "link" && LS,
                    ),
                    t === "subtle" && NS,
                  ),
                  t === "subtle-link" && BS,
                ),
                t === "warning" && US,
              ),
              t === "danger" && qS,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Ns.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Ns.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Ns.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            $S,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function av(e) {
  var t = e.spacing;
  return Mt({
    display: "flex",
    margin: t === "none" ? 0 : jg.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function GS(e) {
  var t = e.spacing;
  return Mt({
    margin: t === "none" ? 0 : jg.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function HS(e) {
  var t = e.hasOverlay;
  return Mt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var WS = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Wc = function (t) {
    return t && y.isValidElement(t) && t.type === Uc;
  },
  KS = [
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
  YS = { "> *": { pointerEvents: "none" } },
  JS = Mt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  XS = Mt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  ov = function (t, r) {
    return !t || Wc(t) ? null : r;
  },
  QS = function (t, r) {
    return Wc(t) ? t : t ? zt("span", { css: r }, t) : null;
  },
  ZS = S.forwardRef(function (t, r) {
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
      h = t.iconAfter,
      f = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      _ = t.isSelected,
      k = _ === void 0 ? !1 : _,
      w = t.onBlur,
      O = t.onClick,
      x = O === void 0 ? Ee : O,
      j = t.onFocus,
      A = t.onMouseDown,
      P = A === void 0 ? Ee : A,
      D = t.overlay;
    t.shouldFitContainer;
    var N = t.spacing,
      q = N === void 0 ? "default" : N,
      W = t.tabIndex,
      z = W === void 0 ? 0 : W,
      H = t.type,
      K = H === void 0 ? (d ? void 0 : "button") : H,
      B = t.testId,
      U = se(t, KS),
      V = y.useRef(),
      ae = y.useCallback(
        function (pe) {
          if (((V.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [V, r],
      );
    SS(V, c);
    var ie = y.useContext(Tc),
      ce = y.useCallback(
        function (pe, qe) {
          (ie && ie.tracePress(g, pe.timeStamp), x(pe, qe));
        },
        [x, ie, g],
      ),
      we = qa({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      F = y.useCallback(
        function (pe) {
          (pe.preventDefault(), P(pe));
        },
        [P],
      );
    y.useEffect(
      function () {
        var pe = V.current;
        m && pe && pe === document.activeElement && pe.blur();
      },
      [m],
    );
    var ye = !!D,
      Ue = Mt(HS({ hasOverlay: ye })),
      ve = !m && !ye,
      Pe = {};
    return (
      (k || m || o === "warning") &&
        (Pe = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || m
                ? "var(--ds-icon-subtle, ".concat(oc, ")")
                : "var(--ds-icon-warning-inverse, ".concat(oc, ")"),
              " !important",
            ),
          },
        }),
      zt(
        Ig,
        null,
        zt(
          v,
          ne(
            {},
            U,
            {
              ref: ae,
              className: l,
              css: [s, ve ? null : YS],
              "data-has-overlay": ye ? !0 : void 0,
              "data-testid": B,
              disabled: m,
              href: ve ? d : void 0,
              onBlur: w,
              onClick: we,
              onFocus: j,
              onMouseDown: F,
              tabIndex: m ? -1 : z,
              type: K,
            },
            AS({ isInteractive: ve }),
          ),
          f ? zt("span", { css: [Ue, av({ spacing: q }), ov(u, JS)] }, f) : null,
          QS(u, [Ue, GS({ spacing: q })]),
          h ? zt("span", { css: [Ue, av({ spacing: q }), ov(u, XS)] }, h) : null,
          D ? zt("span", { css: [WS, Pe] }, D) : null,
        ),
      )
    );
  });
function eE(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Wc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var tE = [
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
  iv = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Kc = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? Ee : l,
        p = t.onMouseUp,
        v = p === void 0 ? Ee : p,
        h = t.shouldFitContainer,
        f = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = se(t, tE),
        _ = PO(),
        k = _.mode,
        w = eE({ children: o, iconBefore: i, iconAfter: c }),
        O = y.useState(!1),
        x = G(O, 2),
        j = x[0],
        A = x[1],
        P = y.useCallback(
          function (q) {
            (d(q), iv && A(!0));
          },
          [d, A],
        ),
        D = y.useCallback(
          function (q) {
            (v(q), iv && A(!1));
          },
          [v, A],
        ),
        N = y.useMemo(
          function () {
            return VS({
              appearance: a,
              spacing: b,
              isSelected: u,
              shouldFitContainer: f,
              isOnlySingleIcon: w,
            });
          },
          [a, b, k, u, f, w],
        );
      return S.createElement(
        ZS,
        ne({}, m, {
          ref: r,
          appearance: a,
          buttonCss: N,
          children: o,
          "data-firefox-is-active": j ? !0 : void 0,
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
Kc.displayName = "Button";
function sv(e) {
  return S.createElement(Kc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function rE(e) {
  return S.createElement(Kc, ne({}, e, { appearance: "subtle" }));
}
var nE = { container: "_1e0c1txw _kqswh2mm" };
function aE(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return S.createElement(
    ki,
    { as: "li", testId: r, key: t, xcss: nE.container, paddingInline: "space.100" },
    S.createElement(
      fk,
      { testId: r && "".concat(r, "-text") },
      S.createElement(Uc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var cv = {},
  uv =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function oE(e, t) {
  return !!(e === t || (uv(e) && uv(t)));
}
function iE(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!oE(e[r], t[r])) return !1;
  return !0;
}
function sE(e, t) {
  t === void 0 && (t = iE);
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
var cE = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > o,
    l = u && o - 4 < r,
    d = u && r < s - o + 3,
    p = sE(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, b).map(function (m, _) {
        return c(m, g + _, a);
      });
    });
  if (!u) return p(0, s);
  if (l && !d) {
    var v = o - 2;
    return [].concat(
      Se(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - v })],
      Se(p(s - v)),
    );
  }
  if (!l && d) {
    var h = o - 2;
    return [].concat(
      Se(p(0, h)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: s - 1 })],
      Se(p(s - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Se(p(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Se(p(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Se(p(s - 1)),
  );
};
function lv(e, t) {
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
function uE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lv(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var _c = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect4ttxp",
    navigatorIconWrapper: "_18zr12x7",
  },
  lE = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function dv(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Dw : Fw;
  return S.createElement(
    ki,
    { as: "span", xcss: _c.navigatorIconWrapper },
    S.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function dE(e, t) {
  var r = e.components,
    n = r === void 0 ? cv : r,
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
    h = v === void 0 ? "next" : v,
    f = e.style,
    g = f === void 0 ? cv : f,
    b = e.max,
    m = b === void 0 ? 7 : b,
    _ = e.onChange,
    k = _ === void 0 ? Ee : _,
    w = e.pages,
    O = e.getPageLabel,
    x = e.renderEllipsis,
    j = x === void 0 ? aE : x,
    A = e.analyticsContext,
    P = e.testId,
    D = e.isDisabled,
    N = xw(i, function () {
      return o || 0;
    }),
    q = G(N, 2),
    W = q[0],
    z = q[1],
    H = qa(
      uE(
        {
          fn: function (U, V) {
            var ae = U.event,
              ie = U.selectedPageIndex;
            (i === void 0 && z(ie), k && k(ae, w[ie], V));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: A,
        },
        lE,
      ),
    ),
    K = function (U, V, ae) {
      var ie = w[W],
        ce = "".concat(l, " ").concat(O ? O(U, V) : U),
        we = U === ie;
      return S.createElement(
        Co,
        { as: "li", xcss: _c.paginationMenuItem, key: "page-".concat(O ? O(U, V) : V) },
        S.createElement(
          rE,
          {
            component: n.Page,
            onClick: function (ye) {
              return H({ event: ye, selectedPageIndex: V });
            },
            "aria-current": we ? "page" : void 0,
            "aria-label": ce,
            isSelected: we,
            isDisabled: D,
            page: U,
            testId:
              ae &&
              ""
                .concat(ae, "--")
                .concat(we ? "current-" : "", "page-")
                .concat(V),
          },
          O ? O(U, V) : U,
        ),
      );
    };
  return S.createElement(
    ki,
    { testId: P, style: g, ref: t, "aria-label": s, as: "nav" },
    S.createElement(
      Co,
      { space: "space.0", alignBlock: "center" },
      S.createElement(sv, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (U) {
          return H({ event: U, selectedPageIndex: W - 1 });
        },
        isDisabled: D || W === 0,
        iconBefore: S.createElement(dv, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      S.createElement(
        Co,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: _c.paginationMenu },
        cE(w, W, { max: m, ellipsis: j, transform: K }, P),
      ),
      S.createElement(sv, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (U) {
          return H({ event: U, selectedPageIndex: W + 1 });
        },
        isDisabled: D || W === w.length - 1,
        iconBefore: S.createElement(dv, { chevronDirection: "right" }),
        "aria-label": h,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var fE = y.memo(y.forwardRef(dE));
function vE(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Tg() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Tg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Tg = function () {
    return !!e;
  })();
}
var pE = (function (e) {
    function t() {
      var r;
      he(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = vE(this, t, [].concat(a))),
        E(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      Ye(t, e),
      ge(t, [
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
              l = Se(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return S.createElement(fE, {
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
  })(S.Component),
  hE = ["isRanking", "testId"],
  gE = [
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
function fv(e, t) {
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
function ya(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fv(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vv = "--local-dynamic-table-text-color",
  bE = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = se(t, hE);
    return y.createElement(
      "thead",
      ne({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  mE = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      u = se(e, gE),
      l = ya(
        ya(ya({}, c), r && Ih({ width: r })),
        {},
        E({}, vv, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === yr,
      p = a === Wo,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      h = n ? "th" : "td";
    return y.createElement(
      h,
      ne({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, u, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ya(
          ya({}, l),
          {},
          { "--_17ckjys": Rh("var(--ds-text-subtle, ".concat("var(".concat(vv, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function _E(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, Mg() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Mg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Mg = function () {
    return !!e;
  })();
}
function yE(e) {
  return (function (t) {
    function r() {
      var n;
      he(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = _E(this, r, [].concat(o))),
        E(n, "state", { refWidth: 0, refHeight: 0 }),
        E(n, "innerRef", function (c) {
          c && !n.props.isRanking && (n.ref = c);
        }),
        E(n, "updateDimensions", function () {
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
      Ye(r, t),
      ge(r, [
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
            return S.createElement(
              e,
              ne({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(S.Component);
}
var wa = {},
  pv;
function wE() {
  if (pv) return wa;
  ((pv = 1), Object.defineProperty(wa, "__esModule", { value: !0 }), (wa.default = void 0));
  var e = r(kr()),
    t = r(wi);
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
  return ((n.displayName = "ArrowDownIcon"), (wa.default = n), wa);
}
var kE = wE();
const OE = er(kE);
var ka = {},
  hv;
function SE() {
  if (hv) return ka;
  ((hv = 1), Object.defineProperty(ka, "__esModule", { value: !0 }), (ka.default = void 0));
  var e = r(kr()),
    t = r(wi);
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
  return ((n.displayName = "ArrowUpIcon"), (ka.default = n), ka);
}
var EE = SE();
const xE = er(EE);
var CE = "Escape";
function PE(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (i) {
        r || n.current || i.key !== CE || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!r)
        return Cr.bindAll(
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
function $r(e) {
  var t = y.useRef(e);
  return (
    y.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var RE = y.createContext(null),
  AE = y.createContext(null);
function IE() {
  var e = y.useContext(AE);
  return e;
}
function jE(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = y.useContext(RE),
    o = IE();
  y.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var xa = { none: 0, small: 100, medium: 350, large: 700 },
  Bs = 0.5,
  DE = { none: xa.none, small: xa.small * Bs, medium: xa.medium * Bs, large: xa.large * Bs },
  TE = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  ME = function () {
    if (!TE()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  FE = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  LE = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = y.useRef([]);
    return (
      y.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, FE(t)),
      y.useCallback(function (n, a) {
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
  Fg = { appear: !0, isExiting: !1 },
  Lg = y.createContext(Fg),
  gv = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fg;
    return S.createElement(Lg.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  bv = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  NE = function (t, r) {
    for (var n = r.concat([]), a = BE(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  BE = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  UE = function (t, r) {
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
  Ng = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = y.useState([null, n]),
      i = G(o, 2),
      c = i[0],
      s = i[1],
      u = y.useState([]),
      l = G(u, 2),
      d = l[0],
      p = l[1],
      v = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = G(v, 2),
      f = h[0],
      g = h[1];
    if (
      (y.useEffect(function () {
        f.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof c == "boolean")
    )
      return n;
    var b = G(c, 2),
      m = b[0],
      _ = b[1],
      k = bv(m),
      w = bv(_);
    _ !== n && s([_, n]);
    var O = UE(w, k),
      x = !!O.size,
      j = w;
    if ((x && (j = NE(w, k)), a))
      if (d.length) j = d;
      else {
        var A = j.filter(function (P) {
          return O.has(P.key);
        });
        A.length && p(A);
      }
    return (
      O.size
        ? (j = j.map(function (P) {
            var D = O.has(P.key);
            return gv(P, {
              appear: !0,
              isExiting: D,
              onFinish: D
                ? function () {
                    (O.delete(P.key), O.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (P) {
            return gv(P, f);
          })),
      j
    );
  }),
  qE = function () {
    return y.useContext(Lg);
  };
Ng.displayName = "ExitingPersistence";
function zE() {
  var e = y.useRef("");
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
var $E = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ee };
  }),
  VE = function () {
    var t = zE(),
      r = y.useContext($E);
    return r(t);
  },
  GE = function (t) {
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
      v = VE(),
      h = qE(),
      f = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = LE(),
      _ = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      O = y.useState(b),
      x = G(O, 2),
      j = x[0],
      A = x[1];
    return (
      y.useEffect(
        function () {
          var P = !1;
          if (!_) {
            if (!b) {
              l && l(w);
              return;
            }
            var D = function () {
              (w === "exiting" && g?.(), P || A(!1), l?.(w));
            };
            if (ME()) {
              D();
              return;
            }
            return (
              A(!0),
              m(D, f ? DE[p] : xa[p] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [g, w, f, p, k, _, m],
      ),
      r(
        {
          ref: v.ref,
          className: j
            ? R([
                R(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                _ && R(["_1y0ctrqk"]),
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
  HE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  WE = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? HE[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return S.createElement(
      GE,
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
  KE = y.createContext();
y.createContext();
var YE = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  JE = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  XE = function (t, r) {
    if (typeof t == "function") return JE(t, r);
    t != null && (t.current = r);
  },
  mv = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  _v =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Fe = "top",
  ot = "bottom",
  it = "right",
  Le = "left",
  Yc = "auto",
  no = [Fe, ot, it, Le],
  Zr = "start",
  Wa = "end",
  QE = "clippingParents",
  Bg = "viewport",
  Oa = "popper",
  ZE = "reference",
  yv = no.reduce(function (e, t) {
    return e.concat([t + "-" + Zr, t + "-" + Wa]);
  }, []),
  Ug = [].concat(no, [Yc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Zr, t + "-" + Wa]);
  }, []),
  ex = "beforeRead",
  tx = "read",
  rx = "afterRead",
  nx = "beforeMain",
  ax = "main",
  ox = "afterMain",
  ix = "beforeWrite",
  sx = "write",
  cx = "afterWrite",
  ux = [ex, tx, rx, nx, ax, ox, ix, sx, cx];
function Dt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function He(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function wr(e) {
  var t = He(e).Element;
  return e instanceof t || e instanceof Element;
}
function at(e) {
  var t = He(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Jc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = He(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function lx(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !at(o) ||
      !Dt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function dx(e) {
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
        !at(a) ||
          !Dt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const fx = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: lx,
  effect: dx,
  requires: ["computeStyles"],
};
function At(e) {
  return e.split("-")[0];
}
var hr = Math.max,
  Xo = Math.min,
  en = Math.round;
function yc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function qg() {
  return !/^((?!chrome|android).)*safari/i.test(yc());
}
function tn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    at(e) &&
    ((a = (e.offsetWidth > 0 && en(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && en(n.height) / e.offsetHeight) || 1));
  var i = wr(e) ? He(e) : window,
    c = i.visualViewport,
    s = !qg() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function Xc(e) {
  var t = tn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function zg(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Jc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Gt(e) {
  return He(e).getComputedStyle(e);
}
function vx(e) {
  return ["table", "td", "th"].indexOf(Dt(e)) >= 0;
}
function rr(e) {
  return ((wr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pi(e) {
  return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Jc(e) ? e.host : null) || rr(e);
}
function wv(e) {
  return !at(e) || Gt(e).position === "fixed" ? null : e.offsetParent;
}
function px(e) {
  var t = /firefox/i.test(yc()),
    r = /Trident/i.test(yc());
  if (r && at(e)) {
    var n = Gt(e);
    if (n.position === "fixed") return null;
  }
  var a = Pi(e);
  for (Jc(a) && (a = a.host); at(a) && ["html", "body"].indexOf(Dt(a)) < 0; ) {
    var o = Gt(a);
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
function ao(e) {
  for (var t = He(e), r = wv(e); r && vx(r) && Gt(r).position === "static"; ) r = wv(r);
  return r && (Dt(r) === "html" || (Dt(r) === "body" && Gt(r).position === "static"))
    ? t
    : r || px(e) || t;
}
function Qc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Da(e, t, r) {
  return hr(e, Xo(t, r));
}
function hx(e, t, r) {
  var n = Da(e, t, r);
  return n > r ? r : n;
}
function $g() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Vg(e) {
  return Object.assign({}, $g(), e);
}
function Gg(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var gx = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Vg(typeof t != "number" ? t : Gg(t, no))
  );
};
function bx(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = At(r.placement),
    s = Qc(c),
    u = [Le, it].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = gx(a.padding, r),
      p = Xc(o),
      v = s === "y" ? Fe : Le,
      h = s === "y" ? ot : it,
      f = r.rects.reference[l] + r.rects.reference[s] - i[s] - r.rects.popper[l],
      g = i[s] - r.rects.reference[s],
      b = ao(o),
      m = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      _ = f / 2 - g / 2,
      k = d[v],
      w = m - p[l] - d[h],
      O = m / 2 - p[l] / 2 + _,
      x = Da(k, O, w),
      j = s;
    r.modifiersData[n] = ((t = {}), (t[j] = x), (t.centerOffset = x - O), t);
  }
}
function mx(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (zg(t.elements.popper, a) && (t.elements.arrow = a)));
}
const _x = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bx,
  effect: mx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function rn(e) {
  return e.split("-")[1];
}
var yx = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function wx(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: en(r * a) / a || 0, y: en(n * a) / a || 0 };
}
function kv(e) {
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
    h = i.y,
    f = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = g.x), (f = g.y));
  var b = i.hasOwnProperty("x"),
    m = i.hasOwnProperty("y"),
    _ = Le,
    k = Fe,
    w = window;
  if (u) {
    var O = ao(r),
      x = "clientHeight",
      j = "clientWidth";
    if (
      (O === He(r) &&
        ((O = rr(r)),
        Gt(O).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (j = "scrollWidth"))),
      (O = O),
      a === Fe || ((a === Le || a === it) && o === Wa))
    ) {
      k = ot;
      var A = d && O === w && w.visualViewport ? w.visualViewport.height : O[x];
      ((f -= A - n.height), (f *= s ? 1 : -1));
    }
    if (a === Le || ((a === Fe || a === ot) && o === Wa)) {
      _ = it;
      var P = d && O === w && w.visualViewport ? w.visualViewport.width : O[j];
      ((v -= P - n.width), (v *= s ? 1 : -1));
    }
  }
  var D = Object.assign({ position: c }, u && yx),
    N = l === !0 ? wx({ x: v, y: f }, He(r)) : { x: v, y: f };
  if (((v = N.x), (f = N.y), s)) {
    var q;
    return Object.assign(
      {},
      D,
      ((q = {}),
      (q[k] = m ? "0" : ""),
      (q[_] = b ? "0" : ""),
      (q.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      q),
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}), (t[k] = m ? f + "px" : ""), (t[_] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function kx(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    u = {
      placement: At(t.placement),
      variation: rn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      kv(
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
        kv(
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
const Ox = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: kx, data: {} };
var ko = { passive: !0 };
function Sx(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = He(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, ko);
      }),
    c && s.addEventListener("resize", r.update, ko),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ko);
        }),
        c && s.removeEventListener("resize", r.update, ko));
    }
  );
}
const Ex = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Sx,
  data: {},
};
var xx = { left: "right", right: "left", bottom: "top", top: "bottom" };
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return xx[t];
  });
}
var Cx = { start: "end", end: "start" };
function Ov(e) {
  return e.replace(/start|end/g, function (t) {
    return Cx[t];
  });
}
function Zc(e) {
  var t = He(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function eu(e) {
  return tn(rr(e)).left + Zc(e).scrollLeft;
}
function Px(e, t) {
  var r = He(e),
    n = rr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = qg();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + eu(e), y: s };
}
function Rx(e) {
  var t,
    r = rr(e),
    n = Zc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = hr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = hr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + eu(e),
    s = -n.scrollTop;
  return (
    Gt(a || r).direction === "rtl" && (c += hr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function tu(e) {
  var t = Gt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Hg(e) {
  return ["html", "body", "#document"].indexOf(Dt(e)) >= 0
    ? e.ownerDocument.body
    : at(e) && tu(e)
      ? e
      : Hg(Pi(e));
}
function Ta(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Hg(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = He(n),
    i = a ? [o].concat(o.visualViewport || [], tu(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Ta(Pi(i)));
}
function wc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Ax(e, t) {
  var r = tn(e, !1, t === "fixed");
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
function Sv(e, t, r) {
  return t === Bg ? wc(Px(e, r)) : wr(t) ? Ax(t, r) : wc(Rx(rr(e)));
}
function Ix(e) {
  var t = Ta(Pi(e)),
    r = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0,
    n = r && at(e) ? ao(e) : e;
  return wr(n)
    ? t.filter(function (a) {
        return wr(a) && zg(a, n) && Dt(a) !== "body";
      })
    : [];
}
function jx(e, t, r, n) {
  var a = t === "clippingParents" ? Ix(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, u) {
        var l = Sv(e, u, n);
        return (
          (s.top = hr(l.top, s.top)),
          (s.right = Xo(l.right, s.right)),
          (s.bottom = Xo(l.bottom, s.bottom)),
          (s.left = hr(l.left, s.left)),
          s
        );
      },
      Sv(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function Wg(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? At(n) : null,
    o = n ? rn(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Fe:
      s = { x: i, y: t.y - r.height };
      break;
    case ot:
      s = { x: i, y: t.y + t.height };
      break;
    case it:
      s = { x: t.x + t.width, y: c };
      break;
    case Le:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? Qc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case Zr:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case Wa:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ka(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? QE : c,
    u = r.rootBoundary,
    l = u === void 0 ? Bg : u,
    d = r.elementContext,
    p = d === void 0 ? Oa : d,
    v = r.altBoundary,
    h = v === void 0 ? !1 : v,
    f = r.padding,
    g = f === void 0 ? 0 : f,
    b = Vg(typeof g != "number" ? g : Gg(g, no)),
    m = p === Oa ? ZE : Oa,
    _ = e.rects.popper,
    k = e.elements[h ? m : p],
    w = jx(wr(k) ? k : k.contextElement || rr(e.elements.popper), s, l, i),
    O = tn(e.elements.reference),
    x = Wg({ reference: O, element: _, placement: a }),
    j = wc(Object.assign({}, _, x)),
    A = p === Oa ? j : O,
    P = {
      top: w.top - A.top + b.top,
      bottom: A.bottom - w.bottom + b.bottom,
      left: w.left - A.left + b.left,
      right: A.right - w.right + b.right,
    },
    D = e.modifiersData.offset;
  if (p === Oa && D) {
    var N = D[a];
    Object.keys(P).forEach(function (q) {
      var W = [it, ot].indexOf(q) >= 0 ? 1 : -1,
        z = [Fe, ot].indexOf(q) >= 0 ? "y" : "x";
      P[q] += N[z] * W;
    });
  }
  return P;
}
function Dx(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? Ug : s,
    l = rn(n),
    d = l
      ? c
        ? yv
        : yv.filter(function (h) {
            return rn(h) === l;
          })
      : no,
    p = d.filter(function (h) {
      return u.indexOf(h) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (h, f) {
    return ((h[f] = Ka(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[At(f)]), h);
  }, {});
  return Object.keys(v).sort(function (h, f) {
    return v[h] - v[f];
  });
}
function Tx(e) {
  if (At(e) === Yc) return [];
  var t = jo(e);
  return [Ov(e), t, Ov(t)];
}
function Mx(e) {
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
        h = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        g = t.options.placement,
        b = At(g),
        m = b === g,
        _ = s || (m || !h ? [jo(g)] : Tx(g)),
        k = [g].concat(_).reduce(function (we, F) {
          return we.concat(
            At(F) === Yc
              ? Dx(t, {
                  placement: F,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: h,
                  allowedAutoPlacements: f,
                })
              : F,
          );
        }, []),
        w = t.rects.reference,
        O = t.rects.popper,
        x = new Map(),
        j = !0,
        A = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var D = k[P],
        N = At(D),
        q = rn(D) === Zr,
        W = [Fe, ot].indexOf(N) >= 0,
        z = W ? "width" : "height",
        H = Ka(t, { placement: D, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        K = W ? (q ? it : Le) : q ? ot : Fe;
      w[z] > O[z] && (K = jo(K));
      var B = jo(K),
        U = [];
      if (
        (o && U.push(H[N] <= 0),
        c && U.push(H[K] <= 0, H[B] <= 0),
        U.every(function (we) {
          return we;
        }))
      ) {
        ((A = D), (j = !1));
        break;
      }
      x.set(D, U);
    }
    if (j)
      for (
        var V = h ? 3 : 1,
          ae = function (F) {
            var ye = k.find(function (Ue) {
              var ve = x.get(Ue);
              if (ve)
                return ve.slice(0, F).every(function (Pe) {
                  return Pe;
                });
            });
            if (ye) return ((A = ye), "break");
          },
          ie = V;
        ie > 0;
        ie--
      ) {
        var ce = ae(ie);
        if (ce === "break") break;
      }
    t.placement !== A && ((t.modifiersData[n]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const Fx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Mx,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Ev(e, t, r) {
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
function xv(e) {
  return [Fe, it, ot, Le].some(function (t) {
    return e[t] >= 0;
  });
}
function Lx(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Ka(t, { elementContext: "reference" }),
    c = Ka(t, { altBoundary: !0 }),
    s = Ev(i, n),
    u = Ev(c, a, o),
    l = xv(s),
    d = xv(u);
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
const Nx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Lx,
};
function Bx(e, t, r) {
  var n = At(e),
    a = [Le, Fe].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [Le, it].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function Ux(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Ug.reduce(function (l, d) {
      return ((l[d] = Bx(d, t.rects, o)), l);
    }, {}),
    c = i[t.placement],
    s = c.x,
    u = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const qx = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Ux };
function zx(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Wg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const $x = { name: "popperOffsets", enabled: !0, phase: "read", fn: zx, data: {} };
function Vx(e) {
  return e === "x" ? "y" : "x";
}
function Gx(e) {
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
    h = r.tetherOffset,
    f = h === void 0 ? 0 : h,
    g = Ka(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = At(t.placement),
    m = rn(t.placement),
    _ = !m,
    k = Qc(b),
    w = Vx(k),
    O = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    j = t.rects.popper,
    A = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof A == "number"
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    N = { x: 0, y: 0 };
  if (O) {
    if (o) {
      var q,
        W = k === "y" ? Fe : Le,
        z = k === "y" ? ot : it,
        H = k === "y" ? "height" : "width",
        K = O[k],
        B = K + g[W],
        U = K - g[z],
        V = v ? -j[H] / 2 : 0,
        ae = m === Zr ? x[H] : j[H],
        ie = m === Zr ? -j[H] : -x[H],
        ce = t.elements.arrow,
        we = v && ce ? Xc(ce) : { width: 0, height: 0 },
        F = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : $g(),
        ye = F[W],
        Ue = F[z],
        ve = Da(0, x[H], we[H]),
        Pe = _ ? x[H] / 2 - V - ve - ye - P.mainAxis : ae - ve - ye - P.mainAxis,
        pe = _ ? -x[H] / 2 + V + ve + Ue + P.mainAxis : ie + ve + Ue + P.mainAxis,
        qe = t.elements.arrow && ao(t.elements.arrow),
        cn = qe ? (k === "y" ? qe.clientTop || 0 : qe.clientLeft || 0) : 0,
        Rr = (q = D?.[k]) != null ? q : 0,
        gt = K + Pe - Rr - cn,
        Re = K + pe - Rr,
        bt = Da(v ? Xo(B, gt) : B, K, v ? hr(U, Re) : U);
      ((O[k] = bt), (N[k] = bt - K));
    }
    if (c) {
      var Ht,
        st = k === "x" ? Fe : Le,
        mt = k === "x" ? ot : it,
        ze = O[w],
        Ae = w === "y" ? "height" : "width",
        Ce = ze + g[st],
        Ie = ze - g[mt],
        _t = [Fe, Le].indexOf(b) !== -1,
        nr = (Ht = D?.[w]) != null ? Ht : 0,
        oo = _t ? Ce : ze - x[Ae] - j[Ae] - nr + P.altAxis,
        io = _t ? ze + x[Ae] + j[Ae] - nr - P.altAxis : Ie,
        so = v && _t ? hx(oo, ze, io) : Da(v ? oo : Ce, ze, v ? io : Ie);
      ((O[w] = so), (N[w] = so - ze));
    }
    t.modifiersData[n] = N;
  }
}
const Hx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Gx,
  requiresIfExists: ["offset"],
};
function Wx(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Kx(e) {
  return e === He(e) || !at(e) ? Zc(e) : Wx(e);
}
function Yx(e) {
  var t = e.getBoundingClientRect(),
    r = en(t.width) / e.offsetWidth || 1,
    n = en(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Jx(e, t, r) {
  r === void 0 && (r = !1);
  var n = at(t),
    a = at(t) && Yx(t),
    o = rr(t),
    i = tn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Dt(t) !== "body" || tu(o)) && (c = Kx(t)),
      at(t) ? ((s = tn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = eu(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function Xx(e) {
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
function Qx(e) {
  var t = Xx(e);
  return ux.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function Zx(e) {
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
function eC(e) {
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
var Cv = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Pv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function tC(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Cv : a;
  return function (c, s, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Cv, o),
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
          var m = typeof b == "function" ? b(l.options) : b;
          (f(),
            (l.options = Object.assign({}, o, l.options, m)),
            (l.scrollParents = {
              reference: wr(c) ? Ta(c) : c.contextElement ? Ta(c.contextElement) : [],
              popper: Ta(s),
            }));
          var _ = Qx(eC([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = _.filter(function (k) {
              return k.enabled;
            })),
            h(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var b = l.elements,
              m = b.reference,
              _ = b.popper;
            if (Pv(m, _)) {
              ((l.rects = {
                reference: Jx(m, ao(_), l.options.strategy === "fixed"),
                popper: Xc(_),
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
                  O = w.fn,
                  x = w.options,
                  j = x === void 0 ? {} : x,
                  A = w.name;
                typeof O == "function" &&
                  (l = O({ state: l, options: j, name: A, instance: v }) || l);
              }
            }
          }
        },
        update: Zx(function () {
          return new Promise(function (g) {
            (v.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!Pv(c, s)) return v;
    v.setOptions(u).then(function (g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          _ = m === void 0 ? {} : m,
          k = g.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: v, options: _ }),
            O = function () {};
          d.push(w || O);
        }
      });
    }
    function f() {
      (d.forEach(function (g) {
        return g();
      }),
        (d = []));
    }
    return v;
  };
}
var rC = [Ex, $x, Ox, fx, qx, Fx, Hx, _x, Nx],
  nC = tC({ defaultModifiers: rC }),
  Us,
  Rv;
function aC() {
  if (Rv) return Us;
  Rv = 1;
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
    (Us = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Us
  );
}
var oC = aC();
const iC = er(oC);
var sC = [],
  cC = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || sC,
      },
      i = y.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      c = i[0],
      s = i[1],
      u = y.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var h = v.state,
              f = Object.keys(h.elements);
            Qo.flushSync(function () {
              s({
                styles: mv(
                  f.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: mv(
                  f.map(function (g) {
                    return [g, h.attributes[g]];
                  }),
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      l = y.useMemo(
        function () {
          var p = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return iC(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = y.useRef();
    return (
      _v(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      _v(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || nC,
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
  uC = function () {},
  lC = function () {
    return Promise.resolve(null);
  },
  dC = [];
function fC(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? dC : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = y.useContext(KE),
    p = y.useState(null),
    v = p[0],
    h = p[1],
    f = y.useState(null),
    g = f[0],
    b = f[1];
  y.useEffect(
    function () {
      XE(u, v);
    },
    [u, v],
  );
  var m = y.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: s,
          modifiers: [].concat(i, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, s, i, g],
    ),
    _ = cC(c || d, v, m),
    k = _.state,
    w = _.styles,
    O = _.forceUpdate,
    x = _.update,
    j = y.useMemo(
      function () {
        return {
          ref: h,
          style: w.popper,
          placement: k ? k.placement : r,
          hasPopperEscaped:
            k && k.modifiersData.hide ? k.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            k && k.modifiersData.hide ? k.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: w.arrow, ref: b },
          forceUpdate: O || uC,
          update: x || lC,
        };
      },
      [h, b, r, k, w, x, O],
    );
  return YE(l)(j);
}
function vC(e) {
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
            h = G(v, 1),
            f = h[0],
            g =
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
            m = l.height - 2 * t;
          (f === "top" && (m = s.rects.reference.y + g.y - t),
            f === "bottom" && (m = l.height - p.y - t),
            f === "left" && (b = s.rects.reference.x + g.x - t),
            f === "right" && (b = l.width - p.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var kc = 5,
  pC = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: kc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function hC() {
  return null;
}
var gC = [0, 8];
function bC(e) {
  var t = e.children,
    r = t === void 0 ? hC : t,
    n = e.offset,
    a = n === void 0 ? gC : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    h = G(a, 2),
    f = h[0],
    g = h[1],
    b = y.useMemo(
      function () {
        var _ = {
            name: "preventOverflow",
            options: { padding: kc, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, g] } },
          w = v ? vC({ viewportPadding: kc }) : [];
        return [].concat(pC, [_, k], Se(w));
      },
      [f, g, v],
    ),
    m = y.useMemo(
      function () {
        return u == null ? b : [].concat(Se(b), Se(u));
      },
      [b, u],
    );
  return S.createElement(fC, { modifiers: m, placement: i, strategy: d, referenceElement: s }, r);
}
var Kg = "atlaskit-portal-container",
  Yg = "body > .atlaskit-portal-container",
  Jg = "atlaskit-portal",
  mC = function (t) {
    var r = document.createElement("div");
    return ((r.className = Jg), (r.style.zIndex = "".concat(t)), r);
  },
  Xg = function () {
    return document.body;
  },
  Qg = function () {
    var t = document.querySelector(Yg);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Kg),
        (n.style.display = "flex"),
        (r = Xg()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  _C = function (t) {
    Qg().removeChild(t);
  },
  yC = function (t) {
    t.parentElement || Qg().appendChild(t);
  },
  Zg = function () {
    return document !== void 0;
  },
  wC = function (t) {
    if (Zg()) {
      var r = document.createElement("div");
      return ((r.className = Jg), (r.style.zIndex = "".concat(t)), r);
    }
  },
  kC = function () {
    if (Zg()) {
      var t = document.querySelector(Yg);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Kg),
          (n.style.display = "flex"),
          (r = Xg()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function OC(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return mC(t);
      },
      [t],
    ),
    a = vg();
  return (
    yC(n),
    y.useEffect(
      function () {
        return function () {
          _C(n);
        };
      },
      [n],
    ),
    Qo.createPortal(
      a && de("platform_dst_subtree_theming") ? S.createElement(fg, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var eb = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function SC(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = G(n, 2),
    o = a[0],
    i = a[1],
    c = vg();
  eb(
    function () {
      var u = wC(t);
      i(u);
      var l = kC();
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
  var s = S.createElement(
    y.Suspense,
    { fallback: null },
    c && de("platform_dst_subtree_theming") ? S.createElement(fg, { defaultColorMode: c }, r) : r,
  );
  return o ? Qo.createPortal(s, o) : null;
}
var EC = function (t) {
    var r = y.useState(!1),
      n = G(r, 2),
      a = n[0],
      o = n[1],
      i = y.useState(function () {
        return t === "layoutEffect" ? eb : y.useEffect;
      }),
      c = G(i, 1),
      s = c[0];
    return (
      s(function () {
        o(!0);
      }, []),
      a
    );
  },
  xC = "akPortalMount",
  CC = "akPortalUnmount",
  Av = {
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
  PC = function (t) {
    return Av.hasOwnProperty(t) ? Av[t] : null;
  },
  RC = function (t, r) {
    var n = { layer: PC(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Iv(e, t) {
  var r = RC(e, t);
  window.dispatchEvent(r);
}
var AC = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        Iv(xC, r),
        function () {
          Iv(CC, r);
        }
      );
    },
    [r],
  );
};
function IC(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = EC(o);
  return (
    AC(r),
    de("platform_design_system_team_portal_logic_r18_fix")
      ? S.createElement(SC, { zIndex: r }, n)
      : i
        ? S.createElement(OC, { zIndex: r }, n)
        : null
  );
}
var Ma = new Set(),
  Ya = null;
function jv() {
  if (!Ya) {
    Ya = Cr.bindAll(window, [
      { type: "dragend", listener: qs },
      { type: "pointerdown", listener: qs },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            qs();
          };
        })(),
      },
    ]);
    var e = Array.from(Ma);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function qs() {
  var e;
  ((e = Ya) === null || e === void 0 || e(), (Ya = null));
  var t = Array.from(Ma);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function jC() {
  return Cr.bindAll(window, [
    { type: "dragstart", listener: jv },
    { type: "dragenter", listener: jv },
  ]);
}
var Oo = null;
function DC(e) {
  return (
    Oo || (Oo = jC()),
    Ma.add(e),
    e.onRegister({ isDragging: Ya !== null }),
    function () {
      if ((Ma.delete(e), Ma.size === 0)) {
        var r;
        ((r = Oo) === null || r === void 0 || r(), (Oo = null));
      }
    }
  );
}
var Fa = null;
function Ca() {
  Fa != null && (window.clearTimeout(Fa), (Fa = null));
}
function Dv(e, t) {
  (Ca(),
    (Fa = window.setTimeout(function () {
      ((Fa = null), e());
    }, t)));
}
var wt = null;
function TC(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(wt && wt.entry === e);
  }
  function n() {
    r() && (Ca(), (wt = null));
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
        ((t = "shown"), Ca());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Ca(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function c(v) {
    var h = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        o();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (h) {
          o();
          return;
        }
        ((t = "waiting-to-hide"),
          Dv(function () {
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
    var v = de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? e.shouldAlwaysFadeIn : !1,
      h = !!(wt && wt.isVisible()) && !v;
    (wt && (Ca(), wt.entry.hide({ isImmediate: !0 }), wt.entry.done(), (wt = null)),
      (wt = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: h }));
    }
    if (h) {
      f();
      return;
    }
    ((t = "waiting-to-show"), Dv(f, e.delay));
  }
  d();
  var p = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return p;
}
function MC(e, t) {
  var r = OO();
  return t ? "".concat(r(e)) : void 0;
}
var Tv = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  FC = function (t) {
    var r = t.shortcut;
    return y.createElement(
      "div",
      { className: R([Tv.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return y.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: R([Tv.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  tb = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      c = t.testId,
      s = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return y.createElement(
      "div",
      { ref: r, style: n, "data-testid": c ? "".concat(c, "--wrapper") : void 0 },
      y.createElement(
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
        d && y.createElement(FC, { shortcut: d }),
      ),
    );
  });
tb.displayName = "TooltipPrimitive";
var Mv = {
    base: "_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  rb = y.forwardRef(function (t, r) {
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
    return y.createElement(
      tb,
      {
        ref: r,
        style: n,
        className: R([Mv.base, i && Mv.truncate, a]),
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
rb.displayName = "TooltipContainer";
function Fv(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function LC(e, t) {
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
function Lv(e, t) {
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
function Vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lv(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var NC = SO.tooltip(),
  Nv = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.14.1" },
  BC = { top: "bottom", bottom: "top", left: "right", right: "left" },
  UC = function (t) {
    return t.split("-")[0];
  };
function qC(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? rb : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    h = e.delay,
    f = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? Ee : g,
    m = e.onHide,
    _ = m === void 0 ? Ee : m,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    O = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    j = x === void 0 ? !1 : x,
    A = e.analyticsContext,
    P = e.strategy,
    D = P === void 0 ? "fixed" : P,
    N = e.ignoreTooltipPointerEvents,
    q = N === void 0 ? !1 : N,
    W = e.isScreenReaderAnnouncementDisabled,
    z = W === void 0 ? !1 : W,
    H = e.shortcut,
    K = e.UNSAFE_shouldAlwaysFadeIn,
    B = K === void 0 ? !1 : K,
    U = e.UNSAFE_shouldRenderToParent,
    V = U === void 0 ? !1 : U,
    ae = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    ie = ae ? o : n,
    ce = Td(Vr({ fn: b, action: "displayed", analyticsData: A }, Nv)),
    we = Td(Vr({ fn: _, action: "hidden", analyticsData: A }, Nv)),
    F = y.useRef(null),
    ye = y.useState("hide"),
    Ue = G(ye, 2),
    ve = Ue[0],
    Pe = Ue[1],
    pe = y.useRef(null),
    qe = y.useRef(null),
    cn = function (oe) {
      ((qe.current = oe), (pe.current = oe ? oe.firstElementChild : null));
    },
    Rr = y.useCallback(function (L) {
      pe.current = L;
    }, []),
    gt = $r(ve),
    Re = $r(ce),
    bt = $r(we),
    Ht = $r(f),
    st = $r(k),
    mt = y.useRef(!1),
    ze = $r(B),
    Ae = y.useCallback(function (L) {
      ((F.current = L), (mt.current = !1));
    }, []),
    Ce = y.useCallback(
      function () {
        F.current &&
          (mt.current && bt.current(), (F.current = null), (mt.current = !1), Pe("hide"));
      },
      [bt],
    ),
    Ie = y.useCallback(
      function () {
        F.current && (F.current.abort(), mt.current && bt.current(), (F.current = null));
      },
      [bt],
    );
  y.useEffect(
    function () {
      return function () {
        F.current && Ie();
      };
    },
    [Ie],
  );
  var _t = y.useRef(!1);
  y.useEffect(function () {
    return DC({
      onRegister: function (oe) {
        var Ft = oe.isDragging;
        _t.current = Ft;
      },
      onDragStart: function () {
        var oe;
        ((oe = F.current) === null || oe === void 0 || oe.requestHide({ isImmediate: !0 }),
          (_t.current = !0));
      },
      onDragEnd: function () {
        _t.current = !1;
      },
    });
  }, []);
  var nr = y.useCallback(
      function (L) {
        var oe;
        if (!_t.current) {
          if ((F.current && !F.current.isActive() && Ie(), F.current && F.current.isActive())) {
            F.current.keep();
            return;
          }
          if (!(st.current && !((oe = st.current) !== null && oe !== void 0 && oe.call(st)))) {
            var Ft = {
                source: L,
                delay: Ht.current,
                show: function (Ar) {
                  var ln = Ar.isImmediate;
                  (mt.current || ((mt.current = !0), Re.current()),
                    Pe(ln ? "show-immediate" : "fade-in"));
                },
                hide: function (Ar) {
                  var ln = Ar.isImmediate;
                  Pe(ln ? "hide" : "before-fade-out");
                },
                done: Ce,
                shouldAlwaysFadeIn: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? ze.current
                  : !1,
              },
              ar = TC(Ft);
            Ae(ar);
          }
        }
      },
      [st, Ht, Ce, Ae, Ie, Re, ze],
    ),
    oo = y.useCallback(
      function () {
        var L;
        (L = F.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [F],
    );
  (PE({ onClose: oo, isDisabled: ve === "hide" || ve === "fade-out" }),
    y.useEffect(
      function () {
        if (ve === "hide") return Ee;
        ve === "before-fade-out" && Pe("fade-out");
        var L = Cr.bind(window, {
          type: "scroll",
          listener: function () {
            F.current && F.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ve],
    ));
  var io = y.useCallback(
      function () {
        j && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    so = y.useCallback(
      function () {
        O && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [O],
    ),
    sb = y.useCallback(
      function (L) {
        if (!(qe.current && L.target === qe.current) && !L.defaultPrevented) {
          L.preventDefault();
          var oe = ae
            ? {
                type: "mouse",
                mouse: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : Fv({ left: L.clientX, top: L.clientY }),
                clientX: L.clientX,
                clientY: L.clientY,
              }
            : { type: "keyboard" };
          nr(oe);
        }
      },
      [ae, nr],
    ),
    nu = y.useCallback(function (L) {
      (qe.current && L.target === qe.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), F.current && F.current.requestHide({ isImmediate: !1 }));
    }, []),
    cb = ae
      ? function (L) {
          var oe;
          (oe = F.current) !== null &&
            oe !== void 0 &&
            oe.isActive() &&
            (de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (F.current.mousePosition = Fv({ left: L.clientX, top: L.clientY })),
            (F.current.mousePos = { clientX: L.clientX, clientY: L.clientY }));
        }
      : void 0,
    ub = y.useCallback(function () {
      if (F.current && F.current.isActive()) {
        F.current.keep();
        return;
      }
    }, []),
    lb = y.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        nr({ type: "keyboard" });
      },
      [nr],
    ),
    db = y.useCallback(function () {
      F.current && F.current.requestHide({ isImmediate: !1 });
    }, []),
    fb = y.useCallback(
      function (L) {
        L === "exiting" &&
          gt.current === "fade-out" &&
          F.current &&
          F.current.finishHideAnimation();
      },
      [gt],
    ),
    vb = p,
    Ai = ve !== "hide" && !!i,
    au = !z && Ai,
    ou = ve !== "hide" && ve !== "fade-out",
    pb = y.useCallback(function () {
      var L;
      (L = F.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  jE({ isOpen: Ai && ou, onClose: pb });
  var iu = function () {
      var oe, Ft;
      if (
        ae &&
        (oe = F.current) !== null &&
        oe !== void 0 &&
        oe.mousePos &&
        pe.current &&
        de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return LC(F.current.mousePos, { targetElement: pe.current, tooltipPosition: n });
      if (
        ae &&
        (Ft = F.current) !== null &&
        Ft !== void 0 &&
        Ft.mousePosition &&
        !de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var ar;
        return (ar = F.current) === null || ar === void 0 ? void 0 : ar.mousePosition;
      }
      return pe.current || void 0;
    },
    un = MC("tooltip", au),
    Ii = {
      onMouseOver: sb,
      onMouseOut: nu,
      onMouseMove: cb,
      onMouseDown: io,
      onClick: so,
      onFocus: lb,
      onBlur: db,
    };
  v && (Ii["data-testid"] = "".concat(v, "--container"));
  var su = typeof t == "function";
  y.useEffect(
    function () {
      if (!su) {
        var L = pe.current;
        if (!(!L || !un))
          return (
            L.setAttribute("aria-describedby", un),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [su, un],
  );
  var cu = au
      ? S.createElement(
          "span",
          { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: un },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    hb = V && de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? y.Fragment : zC;
  return S.createElement(
    S.Fragment,
    null,
    typeof t == "function"
      ? S.createElement(
          S.Fragment,
          null,
          t(Vr(Vr({}, Ii), {}, { "aria-describedby": un, ref: Rr })),
          cu,
        )
      : S.createElement(vb, ne({}, Ii, { ref: cn, role: "presentation" }), t, cu),
    Ai
      ? S.createElement(
          hb,
          null,
          S.createElement(bC, { placement: ie, referenceElement: iu(), strategy: D }, function (L) {
            var oe = L.ref,
              Ft = L.style,
              ar = L.update,
              ji = L.placement,
              Ar = ae ? void 0 : BC[UC(ji)];
            return S.createElement(
              Ng,
              { appear: !0 },
              ou &&
                S.createElement(
                  WE,
                  {
                    distance: "constant",
                    entranceDirection: Ar,
                    exitDirection: Ar,
                    onFinish: fb,
                    duration: ve !== "show-immediate" ? "medium" : "none",
                  },
                  function (ln) {
                    var gb = ln.className;
                    return S.createElement(
                      l,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(gb),
                        style: Vr(Vr({}, Ft), q && { pointerEvents: "none" }),
                        truncate: s,
                        placement: ie,
                        testId: iu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: nu,
                        onMouseOver: ub,
                        shortcut: H,
                      },
                      typeof i == "function" ? i({ update: ar }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var zC = function (t) {
    var r = t.children;
    return S.createElement(IC, { zIndex: NC }, r);
  },
  $C = [
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
  Sa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Bv = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c8wadc _syazazsu _k48pwu06" },
  nb = function (t) {
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
      h = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      g = f === void 0 ? "Sort button" : f,
      b = t.isIconOnlyHeader,
      m = se(t, $C),
      _ = y.useState(!1),
      k = G(_, 2),
      w = k[0],
      O = k[1],
      x = y.useState(!1),
      j = G(x, 2),
      A = j[0],
      P = j[1],
      D = u === l || c !== void 0,
      N = w || D || A,
      q = N && b,
      W = !b || N || (b && !A),
      z = y.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      H = y.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      K = y.useCallback(
        function () {
          O(!0);
        },
        [O],
      ),
      B = y.useCallback(
        function () {
          O(!1);
        },
        [O],
      ),
      U = S.createElement(
        ki,
        { xcss: Bv.headCellContainer, onMouseEnter: K, onMouseLeave: B, onFocus: z, onBlur: H },
        S.createElement(
          qC,
          { content: c === yr ? p : h },
          S.createElement(
            _k,
            { onClick: s, xcss: Sa.buttonWrapper, "aria-roledescription": g },
            S.createElement(
              Yo,
              { xcss: q ? Sa.hideIconHeaderWrapper : Sa.visibleHeaderWrapper },
              S.createElement("span", { className: R([Bv.text]) }, r),
            ),
            W &&
              S.createElement(
                Yo,
                { xcss: N ? Sa.sortIconVisibleWrapper : Sa.sortIconHiddenWrapper },
                c === yr
                  ? S.createElement(xE, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : S.createElement(OE, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return S.createElement(
      mE,
      ne(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        m,
        { isSortable: i, sortOrder: c },
      ),
      i ? U : r,
    );
  },
  VC = ["isRanking", "refHeight", "refWidth"];
function GC(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, ab() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function ab() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ab = function () {
    return !!e;
  })();
}
var HC = (function (e) {
    function t() {
      return (he(this, t), GC(this, t, arguments));
    }
    return (
      Ye(t, e),
      ge(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = se(n, VC),
              c = S0(a, o);
            return S.createElement(nb, ne({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(S.Component),
  WC = yE(HC),
  KC = ["cells"],
  YC = [
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
function JC(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, ob() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function ob() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ob = function () {
    return !!e;
  })();
}
var XC = (function (e) {
    function t(r) {
      var n;
      return (he(this, t), (n = JC(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ye(t, e),
      ge(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Vo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Vo(n.sortKey, n.head);
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
            var h = d ? WC : nb,
              f = o.cells,
              g = se(o, KC);
            return S.createElement(
              bE,
              ne({}, g, { isRanking: l, testId: p && "".concat(p, "--head") }),
              S.createElement(
                "tr",
                null,
                f.map(function (b, m) {
                  var _ = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    O = b.content,
                    x = b.descendingSortTooltip,
                    j = b.isIconOnlyHeader,
                    A = b.isSortable,
                    P = b.key,
                    D = b.shouldTruncate,
                    N = b.testId,
                    q = b.width,
                    W = se(b, YC),
                    z = "head-cell-".concat(m),
                    H = function () {
                      (n.setState({ activeSortButtonId: z }), A && u(b)());
                    };
                  return S.createElement(
                    h,
                    ne(
                      {
                        colSpan: w,
                        content: O,
                        isFixedSize: s,
                        isIconOnlyHeader: j,
                        isSortable: !!A,
                        isRanking: l,
                        key: P || m,
                        headCellId: z,
                        activeSortButtonId: v,
                        onClick: H,
                        testId: N || p,
                        shouldTruncate: D,
                        sortOrder: P === i ? c : void 0,
                        width: q,
                        ascendingSortTooltip: _,
                        descendingSortTooltip: x,
                        buttonAriaRoleDescription: k,
                      },
                      W,
                    ),
                  );
                }),
              ),
            );
          },
        },
      ])
    );
  })(S.Component),
  QC = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function ZC(e) {
  switch (e) {
    case Wo:
      return yr;
    case yr:
      return Wo;
    default:
      return e;
  }
}
var eP = function (t) {
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
      h = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      g = f === void 0 ? !1 : f,
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      _ = t.onSetPage,
      k = _ === void 0 ? Ee : _,
      w = t.onSort,
      O = w === void 0 ? Ee : w,
      x = t.page,
      j = x === void 0 ? 1 : x,
      A = t.emptyView,
      P = t.isRankable,
      D = P === void 0 ? !1 : P,
      N = t.isRankingDisabled,
      q = N === void 0 ? !1 : N,
      W = t.onRankStart,
      z = W === void 0 ? Ee : W,
      H = t.onRankEnd,
      K = H === void 0 ? Ee : H,
      B = t.loadingSpinnerSize,
      U = t.paginationi18n,
      V =
        U === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : U,
      ae = y.useState(!1),
      ie = G(ae, 2),
      ce = ie[0],
      we = ie[1],
      F = y.useRef(null),
      ye = qa({
        fn: O,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ue = qa({
        fn: K,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    y.useEffect(
      function () {
        (Vo(i, n), O0(n));
      },
      [i, n],
    );
    var ve = function (Ce) {
        return function () {
          var Ie = Ce.key;
          if (Ie) {
            if (ye && D && Ie === i && c === Wo) {
              ye({ key: null, sortOrder: null, item: Ce });
              return;
            }
            var _t = Ie !== i ? yr : ZC(c);
            ye && ye({ key: Ie, item: Ce, sortOrder: _t });
          }
        };
      },
      Pe = function (Ce, Ie) {
        k(Ce, Ie);
      },
      pe = function (Ce) {
        (we(!0), z(Ce));
      },
      qe = function (Ce) {
        (we(!1), Ue(Ce));
      },
      cn = function () {
        return B || (Eh(o || [], j, m).length > 2 ? Ko : z0);
      },
      Rr = function () {
        return h ? S.createElement(K0, { testId: l }) : A && S.createElement(Y0, { testId: l }, A);
      },
      gt = o && o.length,
      Re,
      bt = !1;
    (d && Number.isInteger(d) && m && gt && gt <= d
      ? ((Re = Math.ceil(d / m)), (bt = !0))
      : (Re = gt && m ? Math.ceil(gt / m) : 0),
      (Re = Re < 1 ? 1 : Re));
    var Ht = j > Re ? Re : j,
      st = !!gt,
      mt = cn(),
      ze = Rr();
    return S.createElement(
      S.Fragment,
      null,
      S.createElement(
        Nh,
        {
          isLoading: h && st,
          spinnerSize: mt,
          targetRef: function () {
            return F.current;
          },
          testId: l,
          loadingLabel: s,
        },
        S.createElement(
          G0,
          { isFixedSize: g, "aria-label": p, hasDataRow: st, testId: l, isLoading: h },
          !!r && S.createElement(H0, null, r),
          n &&
            S.createElement(XC, {
              head: n,
              onSort: ve,
              sortKey: i,
              sortOrder: c,
              isRanking: ce,
              isRankable: D,
              testId: l,
            }),
          st &&
            S.createElement(rP, {
              ref: F,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: m,
              page: Ht,
              isFixedSize: g || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: bt,
              testId: l,
              isRankable: D,
              isRanking: ce,
              onRankStart: pe,
              onRankEnd: qe,
              isRankingDisabled: q || h || !1,
            }),
        ),
      ),
      Re <= 1
        ? null
        : S.createElement(
            W0,
            { testId: l },
            S.createElement(pE, {
              value: Ht,
              onChange: Pe,
              total: Re,
              i18n: V,
              isDisabled: h,
              testId: l,
            }),
          ),
      !st &&
        ze &&
        S.createElement(Fh, { isLoading: h, spinnerSize: Ko, testId: l, loadingLabel: s }, ze),
    );
  },
  tP = y.lazy(function () {
    return Te(
      () => import("./body-Bsr1mGMZ.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  rP = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = se(t, QC),
      l = a && !u.sortKey,
      d = y.useState(!1),
      p = G(d, 2),
      v = p[0],
      h = p[1];
    y.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var f = S.createElement(lw, ne({ ref: r }, u));
    return l && v
      ? S.createElement(
          fw,
          { fallback: f },
          S.createElement(
            y.Suspense,
            { fallback: f },
            S.createElement(
              tP,
              ne({ ref: r }, u, {
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
function nP(e, t, r) {
  return (
    (t = Z(t)),
    Ke(e, ib() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function ib() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ib = function () {
    return !!e;
  })();
}
var Ri = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = nP(this, t, [].concat(a))),
      E(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      E(r, "onSetPageHandler", function (i, c) {
        var s = r.props.onSetPage;
        s && (s(i, c), r.setState({ page: i }));
      }),
      E(r, "onSortHandler", function (i, c) {
        var s = i.key,
          u = i.item,
          l = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: u, sortOrder: l }, c), r.setState({ sortKey: s, sortOrder: l }));
      }),
      E(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      E(r, "onRankEndHandler", function (i) {
        var c = i.destination,
          s = r.state,
          u = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!c || !u) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var p = E0(i, u, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    Ye(t, e),
    ge(t, [
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
            h = s.isLoading,
            f = s.loadingLabel,
            g = s.isFixedSize,
            b = s.isRankable,
            m = s.isRankingDisabled,
            _ = s.rowsPerPage,
            k = s.paginationi18n,
            w = s.onRankStart,
            O = s.onPageRowsUpdate,
            x = s.testId,
            j = s.label;
          return S.createElement(eP, {
            paginationi18n: k,
            caption: u,
            emptyView: l,
            head: d,
            highlightedRowIndex: p,
            loadingSpinnerSize: v,
            isLoading: h,
            loadingLabel: f,
            isFixedSize: g,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: a,
            rows: c,
            rowsPerPage: _,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: O,
            testId: x,
            label: j,
          });
        },
      },
    ])
  );
})(S.Component);
E(Ri, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ee,
  onSort: Ee,
  rowsPerPage: 1 / 0,
});
const aP = (e, t) => {
    const r = [];
    switch (t) {
      case "SLOW_QUERY": {
        (r.push({ key: "time", content: "Time", isSortable: !0, width: 10 }),
          r.push({ key: "query", content: "QUERY", isSortable: !0, width: 10 }),
          r.push({ key: "queryTime", content: "TIME", isSortable: !0, width: 10 }),
          r.push({ key: "resultRows", content: "ROWS", isSortable: !0, width: 10 }),
          r.push({ key: "plan", content: "PLAN", isSortable: !0, width: 25 }));
        break;
      }
      case "HISTORY": {
        (r.push({
          key: "summaryBeginTime",
          content: "summaryBeginTime",
          isSortable: !0,
          width: 10,
        }),
          r.push({ key: "summaryEndTime", content: "summaryEndTime", isSortable: !0, width: 10 }),
          r.push({ key: "stmtType", content: "stmtType", isSortable: !0, width: 10 }),
          r.push({ key: "digestText", content: "digestText", isSortable: !0, width: 10 }),
          r.push({ key: "tableNames", content: "tableNames", isSortable: !0, width: 10 }),
          r.push({ key: "planHint", content: "planHint", isSortable: !0, width: 10 }),
          r.push({ key: "plan", content: "PLAN", isSortable: !0, width: 25 }));
        break;
      }
      case "PLAN":
        (r.push({ key: "id", content: "Id", isSortable: !0, width: 10 }),
          r.push({ key: "estRows", content: "estRows", isSortable: !0, width: 10 }),
          r.push({ key: "estCost", content: "estCost", isSortable: !0, width: 10 }),
          r.push({ key: "actRows", content: "actRows", isSortable: !0, width: 10 }),
          r.push({ key: "task", content: "task", isSortable: !0, width: 10 }),
          r.push({ key: "accessObject", content: "accessObject", isSortable: !0, width: 10 }),
          r.push({ key: "executionInfo", content: "executionInfo", isSortable: !0, width: 10 }),
          r.push({ key: "operatorInfo", content: "operatorInfo", isSortable: !0, width: 10 }),
          r.push({ key: "memory", content: "memory", isSortable: !0, width: 10 }),
          r.push({ key: "disk", content: "disk", isSortable: !0, width: 10 }));
    }
    return r;
  },
  ru = (e, t) => ({ cells: aP(e, t) }),
  oP = mi(() => {
    const { usersStore: e } = yi(),
      t = ru(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? C.jsx("div", { children: "SlowQuery is EMPTY" })
      : C.jsx("div", {
          children: C.jsxs("div", {
            children: [
              C.jsx(Ri, {
                head: t,
                rows: r.map((n, a) => {
                  const o = [
                    { key: "time", content: n.time },
                    { key: "query", content: n.query },
                    { key: "queryTime", content: n.queryTime },
                    { key: "resultRows", content: n.resultRows },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? C.jsx(C.Fragment, {
                            children: C.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Dc.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : C.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${a}`, cells: o };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: C.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              C.jsx("br", {}),
              C.jsx("br", {}),
            ],
          }),
        });
  }),
  iP = mi(() => {
    const { usersStore: e } = yi(),
      t = ru(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? C.jsxs("div", { children: ["$", e.planString] })
      : C.jsx("div", {
          children: C.jsxs("div", {
            children: [
              C.jsx(Ri, {
                head: t,
                rows: r.map((n, a) => {
                  const o = [
                    { key: "id", content: n.id },
                    { key: "estRows", content: n.estRows },
                    { key: "estCost", content: n.estCost },
                    { key: "actRows", content: n.actRows },
                    { key: "task", content: n.task },
                    { key: "accessObject", content: n.accessObject },
                    { key: "executionInfo", content: n.executionInfo },
                    { key: "operatorInfo", content: n.operatorInfo },
                    { key: "memory", content: n.memory },
                    { key: "disk", content: n.disk },
                  ];
                  return { key: `row-${a}`, cells: o };
                }),
                rowsPerPage: 200,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: C.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              C.jsx("br", {}),
              C.jsx("br", {}),
            ],
          }),
        });
  }),
  sP = mi(() => {
    const { usersStore: e } = yi(),
      t = ru(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? C.jsx("div", { children: "Query history is EMPTY" })
      : C.jsx("div", {
          children: C.jsxs("div", {
            children: [
              C.jsx(Ri, {
                head: t,
                rows: r.map((n, a) => {
                  const o = [
                    { key: "summaryBeginTime", content: n.summaryBeginTime },
                    { key: "summaryEndTime", content: n.summaryEndTime },
                    { key: "digestText", content: n.digestText },
                    { key: "stmtType", content: n.stmtType },
                    { key: "tableNames", content: n.tableNames },
                    { key: "planHint", content: n.planHint },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? C.jsx(C.Fragment, {
                            children: C.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Dc.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : C.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${a}`, cells: o };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: C.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              C.jsx("br", {}),
              C.jsx("br", {}),
            ],
          }),
        });
  }),
  Qe = (e, t) => {
    De.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function cP() {
  const { usersStore: e, stateStore: t } = yi();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const h = await De.invoke("explain");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Qe("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const h = await De.invoke("explainWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Qe("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const h = await De.invoke("explainAnalyze");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Qe("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        const h = await De.invoke("explainAnalyzeWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Qe("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        await De.invoke("executeQuery");
      } catch (h) {
        (console.error(h), Qe("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await De.invoke("executeQueryWith");
      } catch (h) {
        (console.error(h), Qe("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await De.invoke("optimizeQuery");
      } catch (h) {
        (console.error(h), Qe("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await De.invoke("optimizeQueryCTE");
      } catch (h) {
        (console.error(h), Qe("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await De.invoke("dropStats");
      } catch (h) {
        (console.error(h), Qe("dropStats error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await De.invoke("deOptimizeQuery");
      } catch (h) {
        (console.error(h), Qe("deoptimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    p = async () => {
      e.loading();
      try {
        const h = await De.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(h), t.saveState("HISTORY"));
      } catch (h) {
        (console.error(h), Qe("History error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    v = async () => {
      e.loading();
      try {
        const h = await De.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(h), t.saveState("SLOW_QUERY"));
      } catch (h) {
        (console.error(h), Qe("Slowquery error", h.message));
      } finally {
        e.stopLoading();
      }
    };
  switch (t.state) {
    case "ROOT":
      return C.jsxs("div", {
        className: "query-analysis-container",
        children: [
          C.jsx("div", { className: "section-spacer" }),
          C.jsxs("section", {
            className: "analysis-section",
            children: [
              C.jsx("h2", { children: "Stage 1: Initial Query Analysis" }),
              C.jsx("div", {
                className: "query-example",
                children: C.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              C.jsx("div", {
                className: "button-group",
                children: C.jsxs("div", {
                  className: "button-row",
                  children: [
                    C.jsx("button", { onClick: i, children: "1. Execute SQL" }),
                    C.jsx("button", { onClick: r, children: "2. Explain (optional) " }),
                    C.jsx("button", { onClick: a, children: "3. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          C.jsxs("section", {
            className: "analysis-section",
            children: [
              C.jsx("h2", { children: "Stage 2: Adding Indexes — Better but Not Yet Great" }),
              C.jsx("div", {
                className: "query-example",
                children: C.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              C.jsx("div", {
                className: "button-group",
                children: C.jsxs("div", {
                  className: "button-row",
                  children: [
                    C.jsx("button", { onClick: s, children: "4. Add optimization indexes" }),
                    C.jsx("button", { onClick: i, children: "5. Execute SQL" }),
                    C.jsx("button", { onClick: r, children: "6. Explain (optional) " }),
                    C.jsx("button", { onClick: a, children: "7. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          C.jsxs("section", {
            className: "analysis-section",
            children: [
              C.jsx("h2", {
                children: "Stage 3: Optimizing with WITH Clause — Smarter Pagination",
              }),
              C.jsx("div", {
                className: "query-example",
                children: C.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              C.jsx("div", {
                className: "button-group",
                children: C.jsxs("div", {
                  className: "button-row",
                  children: [
                    C.jsx("button", { onClick: c, children: "8. Execute CTE" }),
                    C.jsx("button", { onClick: n, children: "9. Explain CTE (optional)" }),
                    C.jsx("button", { onClick: o, children: "10. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          C.jsxs("section", {
            className: "analysis-section",
            children: [
              C.jsx("h2", { children: "Stage 4: Final Optimization — Goodbye Full Table Scans" }),
              C.jsx("div", {
                className: "query-example",
                children: C.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              C.jsx("div", {
                className: "button-group",
                children: C.jsxs("div", {
                  className: "button-row",
                  children: [
                    C.jsx("button", {
                      onClick: u,
                      children: "9. Add optimization indexes for CTE",
                    }),
                    C.jsx("button", { onClick: c, children: "10. Execute CTE" }),
                    C.jsx("button", { onClick: n, children: "11. Explain CTE (optional)" }),
                    C.jsx("button", { onClick: o, children: "12. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          C.jsxs("section", {
            className: "analysis-section",
            children: [
              C.jsx("h2", { children: "Additional action" }),
              C.jsx("div", {
                className: "button-group",
                children: C.jsxs("div", {
                  className: "button-row",
                  children: [
                    C.jsx("button", { onClick: d, children: "Drop indexes(back to Stage 1)" }),
                    C.jsx("button", { onClick: l, children: "DROP STATS from all tables" }),
                  ],
                }),
              }),
            ],
          }),
          C.jsx("div", { className: "section-spacer" }),
          C.jsxs("section", {
            className: "analysis-section",
            children: [
              C.jsx("h2", { children: "Query History Analysis" }),
              C.jsx("div", {
                className: "button-group",
                children: C.jsx("button", { onClick: p, children: "Show Query History" }),
              }),
            ],
          }),
          C.jsx("div", { className: "section-spacer" }),
          C.jsxs("section", {
            className: "analysis-section",
            children: [
              C.jsx("h2", { children: "Slow Query Analysis" }),
              C.jsx("div", {
                className: "button-group",
                children: C.jsx("button", { onClick: v, children: "Analyze Slow Queries" }),
              }),
            ],
          }),
        ],
      });
    case "SLOW_QUERY":
      return C.jsxs("div", {
        className: "analysis-results",
        children: [
          C.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          C.jsx("div", { className: "results-spacer" }),
          C.jsx(oP, {}),
        ],
      });
    case "HISTORY":
      return C.jsxs("div", {
        className: "analysis-results",
        children: [
          C.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          C.jsx("div", { className: "results-spacer" }),
          C.jsx(sP, {}),
        ],
      });
    case "PLAN":
      return C.jsxs("div", {
        className: "analysis-results",
        children: [
          C.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState(t.lastState),
            children: "Back to Analysis",
          }),
          C.jsx("div", { className: "results-spacer" }),
          C.jsx(iP, {}),
        ],
      });
    default:
      return C.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const uP = mi(cP),
  lP = document.getElementById("root"),
  dP = bb.createRoot(lP),
  Uv = () => {
    dP.render(C.jsx(wh, { ...kh, children: C.jsx(uP, {}) }));
  };
De.view.theme
  .enable()
  .then(() => {
    Uv();
  })
  .catch((e) => {
    (console.error(e.message), Uv());
  });
export {
  Lf as A,
  me as B,
  og as C,
  Si as D,
  Oi as E,
  xP as F,
  EP as G,
  kP as H,
  S as R,
  aw as T,
  Ye as _,
  ge as a,
  lc as b,
  he as c,
  Z as d,
  Ke as e,
  G as f,
  E as g,
  se as h,
  Cr as i,
  Se as j,
  ne as k,
  ak as l,
  zt as m,
  Mt as n,
  R as o,
  rw as p,
  S0 as q,
  y as r,
  Z0 as s,
  OP as t,
  wP as u,
  yP as v,
  yE as w,
  _P as x,
  SP as y,
  Ff as z,
};
