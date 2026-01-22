const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-BCqYYRNo.js",
      "./lodash-vendor-Dv-o4pqD.js",
      "./custom-theme-BOM4tTPp.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./client-core-vendor-DqdHMQxw.js",
      "./body-DCkjI6Oz.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as wr, a as Qo, c as bb } from "./react-dom-vendor--YlRhZCI.js";
import { g as Qt, a as Nv, r as _b } from "./lodash-vendor-Dv-o4pqD.js";
import { r as Xt, a as Pt, s as Ye } from "./client-core-vendor-DqdHMQxw.js";
function mb(e, t) {
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
var su;
function yb() {
  if (su) return dn;
  su = 1;
  var e = wr(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, u) {
    var l,
      d = {},
      p = null,
      v = null;
    (u !== void 0 && (p = "" + u),
      c.key !== void 0 && (p = "" + c.key),
      c.ref !== void 0 && (v = c.ref));
    for (l in c) n.call(c, l) && !o.hasOwnProperty(l) && (d[l] = c[l]);
    if (s && s.defaultProps) for (l in ((c = s.defaultProps), c)) d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: t, type: s, key: p, ref: v, props: d, _owner: a.current };
  }
  return ((dn.Fragment = r), (dn.jsx = i), (dn.jsxs = i), dn);
}
var cu;
function wb() {
  return (cu || ((cu = 1), (Di.exports = yb())), Di.exports);
}
var q = wb(),
  y = wr();
const S = Qt(y),
  uu = mb({ __proto__: null, default: S }, [y]);
var Mi = {},
  $s = function (e, t) {
    return (
      ($s =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      $s(e, t)
    );
  };
function Bv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  $s(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Mo = function () {
  return (
    (Mo =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Mo.apply(this, arguments)
  );
};
function qv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function $v(e, t, r, n) {
  var a = arguments.length,
    o = a < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, r, n);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
  return (a > 3 && o && Object.defineProperty(t, r, o), o);
}
function zv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Vv(e, t, r, n, a, o) {
  function i(b) {
    if (b !== void 0 && typeof b != "function") throw new TypeError("Function expected");
    return b;
  }
  for (
    var s = n.kind,
      c = s === "getter" ? "get" : s === "setter" ? "set" : "value",
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
    var h = (0, r[v])(s === "accessor" ? { get: l.get, set: l.set } : l[c], g);
    if (s === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = i(h.get)) && (l.get = d),
        (d = i(h.set)) && (l.set = d),
        (d = i(h.init)) && a.unshift(d));
    } else (d = i(h)) && (s === "field" ? a.unshift(d) : (l[c] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (p = !0));
}
function Gv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Hv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Wv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Kv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Jv(e, t, r, n) {
  function a(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (d) {
        i(d);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (d) {
        i(d);
      }
    }
    function u(l) {
      l.done ? o(l.value) : a(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function Yv(e, t) {
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
    (i.next = s(0)),
    (i.throw = s(1)),
    (i.return = s(2)),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function s(u) {
    return function (l) {
      return c([u, l]);
    };
  }
  function c(u) {
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
var ei = Object.create
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
function Xv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ei(t, e, r);
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
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function Zv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Oc(arguments[t]));
  return e;
}
function Qv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
  return n;
}
function ep(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Kr(e) {
  return this instanceof Kr ? ((this.v = e), this) : new Kr(e);
}
function tp(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    a,
    o = [];
  return (
    (a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    s("next"),
    s("throw"),
    s("return", i),
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
  function s(v, g) {
    n[v] &&
      ((a[v] = function (f) {
        return new Promise(function (h, b) {
          o.push([v, f, h, b]) > 1 || c(v, f);
        });
      }),
      g && (a[v] = g(a[v])));
  }
  function c(v, g) {
    try {
      u(n[v](g));
    } catch (f) {
      p(o[0][3], f);
    }
  }
  function u(v) {
    v.value instanceof Kr ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
  }
  function l(v) {
    c("next", v);
  }
  function d(v) {
    c("throw", v);
  }
  function p(v, g) {
    (v(g), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function rp(e) {
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
          return (r = !r) ? { value: Kr(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function np(e) {
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
        return new Promise(function (s, c) {
          ((i = e[o](i)), a(s, c, i.done, i.value));
        });
      };
  }
  function a(o, i, s, c) {
    Promise.resolve(c).then(function (u) {
      o({ value: u, done: s });
    }, i);
  }
}
function ap(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var kb = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  zs = function (e) {
    return (
      (zs =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      zs(e)
    );
  };
function op(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = zs(e), n = 0; n < r.length; n++) r[n] !== "default" && ei(t, e, r[n]);
  return (kb(t, e), t);
}
function ip(e) {
  return e && e.__esModule ? e : { default: e };
}
function sp(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function cp(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function up(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function lp(e, t, r) {
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
function dp(e) {
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
function fp(e, t) {
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
    __extends: Bv,
    __assign: Mo,
    __rest: qv,
    __decorate: $v,
    __param: zv,
    __esDecorate: Vv,
    __runInitializers: Gv,
    __propKey: Hv,
    __setFunctionName: Wv,
    __metadata: Kv,
    __awaiter: Jv,
    __generator: Yv,
    __createBinding: ei,
    __exportStar: Xv,
    __values: To,
    __read: Oc,
    __spread: Zv,
    __spreadArrays: Qv,
    __spreadArray: ep,
    __await: Kr,
    __asyncGenerator: tp,
    __asyncDelegator: rp,
    __asyncValues: np,
    __makeTemplateObject: ap,
    __importStar: op,
    __importDefault: ip,
    __classPrivateFieldGet: sp,
    __classPrivateFieldSet: cp,
    __classPrivateFieldIn: up,
    __addDisposableResource: lp,
    __disposeResources: dp,
    __rewriteRelativeImportExtension: fp,
  },
  Eb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: lp,
        get __assign() {
          return Mo;
        },
        __asyncDelegator: rp,
        __asyncGenerator: tp,
        __asyncValues: np,
        __await: Kr,
        __awaiter: Jv,
        __classPrivateFieldGet: sp,
        __classPrivateFieldIn: up,
        __classPrivateFieldSet: cp,
        __createBinding: ei,
        __decorate: $v,
        __disposeResources: dp,
        __esDecorate: Vv,
        __exportStar: Xv,
        __extends: Bv,
        __generator: Yv,
        __importDefault: ip,
        __importStar: op,
        __makeTemplateObject: ap,
        __metadata: Kv,
        __param: zv,
        __propKey: Hv,
        __read: Oc,
        __rest: qv,
        __rewriteRelativeImportExtension: fp,
        __runInitializers: Gv,
        __setFunctionName: Wv,
        __spread: Zv,
        __spreadArray: ep,
        __spreadArrays: Qv,
        __values: To,
        default: Sb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ne = Nv(Eb);
var fn = {},
  lu;
function xb() {
  return (
    lu ||
      ((lu = 1),
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
var Ti = {},
  Fi = {},
  vn = {},
  pn = {},
  du;
function be() {
  if (du) return pn;
  ((du = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((pn.BridgeAPIError = e), pn);
}
var fu;
function ue() {
  if (fu) return vn;
  ((fu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.getCallBridge = void 0));
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
  vu;
function ti() {
  if (vu) return hn;
  ((vu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.withRateLimiter = void 0));
  const e = be(),
    t = (r, n, a, o) => {
      let i = Date.now(),
        s = 0;
      return async (...c) => {
        const u = Date.now();
        if ((u - i > a && ((i = u), (s = 0)), s >= n))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((s = s + 1), r(...c));
      };
    };
  return ((hn.withRateLimiter = t), hn);
}
var pu;
function Cb() {
  return (
    pu ||
      ((pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ue(),
          r = be(),
          n = ti(),
          a = (0, t.getCallBridge)(),
          o = (c) => {
            if (c && Object.values(c).some((u) => typeof u == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          i = (c, u) => {
            if (typeof c != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (o(u), a("invoke", { functionKey: c, payload: u }));
          };
        e.invoke = (0, n.withRateLimiter)(
          i,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function s() {
          return e.invoke;
        }
        e.makeInvoke = s;
      })(Fi)),
    Fi
  );
}
var hu;
function Ya() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(Cb(), e));
      })(Ti)),
    Ti
  );
}
var Li = {},
  gn = {},
  Ui = {},
  gu;
function vp() {
  return (
    gu ||
      ((gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ue(),
          r = be(),
          n = ti(),
          a = 500,
          o = 25,
          i = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const s = (0, t.getCallBridge)(),
          c = (d) => {
            if (d && Object.values(d).some((p) => typeof p == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          u = (d) => async (p) => {
            c(p);
            const v = { ...p, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await s("invoke", v),
              { success: f, payload: h, error: b } = g ?? {},
              _ = { ...(f ? h : b) };
            if (_ && _.headers)
              for (const m in _.headers)
                Array.isArray(_.headers[m]) && (_.headers[m] = _.headers[m].join(","));
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
      })(Ui)),
    Ui
  );
}
var bu;
function Pb() {
  if (bu) return gn;
  ((bu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.invokeRemote = void 0));
  const e = vp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((gn.invokeRemote = t), gn);
}
var bn = {},
  _u;
function Rb() {
  if (_u) return bn;
  ((_u = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.invokeService = void 0));
  const e = vp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((bn.invokeService = t), bn);
}
var mu;
function Ab() {
  return (
    mu ||
      ((mu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(Pb(), e), t.__exportStar(Rb(), e));
      })(Li)),
    Li
  );
}
var Ni = {},
  _n = {},
  mn = {},
  yu;
function Ib() {
  if (yu) return mn;
  ((yu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.submit = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((mn.submit = n), mn);
}
var yn = {},
  wu;
function jb() {
  if (wu) return yn;
  ((wu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.close = void 0));
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
  ku;
function Db() {
  if (ku) return wn;
  ((ku = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.open = void 0));
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
  Ou;
function Mb() {
  if (Ou) return kn;
  ((Ou = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.refresh = void 0));
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
  Su;
function Tb() {
  if (Su) return On;
  ((Su = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.createHistory = void 0));
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
  Bi = {},
  Mt = {},
  Eu;
function pp() {
  return (
    Eu ||
      ((Eu = 1),
      Object.defineProperty(Mt, "__esModule", { value: !0 }),
      (Mt.FORGE_SUPPORTED_LOCALE_CODES =
        Mt.I18N_BUNDLE_FOLDER_NAME =
        Mt.I18N_INFO_FILE_NAME =
          void 0),
      (Mt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Mt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Mt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Mt
  );
}
var ar = {},
  xu;
function Fb() {
  if (xu) return ar;
  ((xu = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.TranslationsGetter = ar.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  ar.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(a) {
      this.resourcesAccessor = a;
    }
    async getTranslations(a, o = { fallback: !0 }) {
      const i = await this.getI18nInfoConfig(),
        { fallback: s } = o;
      if (!s) {
        let c;
        return (
          i.locales.includes(a) && (c = await this.getTranslationResource(a)),
          { translations: c ?? null, locale: a }
        );
      }
      for (const c of this.getLocaleLookupOrder(a, i)) {
        const u = await this.getTranslationResource(c);
        if (u) return { translations: u, locale: c };
      }
      return { translations: null, locale: a };
    }
    async getTranslationsByLocaleLookupOrder(a) {
      const o = await this.getI18nInfoConfig(),
        i = this.getLocaleLookupOrder(a, o);
      return await Promise.all(
        i.map(async (s) => {
          const c = await this.getTranslationResource(s);
          return { locale: s, translations: c };
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
      const { locales: i, fallback: s } = o,
        c = [a],
        u = s[a];
      return (
        u && Array.isArray(u) && u.length > 0 && c.push(...u),
        e(c, o.fallback.default),
        c.filter((l) => i.includes(l))
      );
    }
  }
  return ((ar.TranslationsGetter = r), ar);
}
var En = {},
  qi = {},
  Cu;
function hp() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ne.__importDefault(_b()),
          n = (o, i, s) => {
            const c = o[s];
            return c ? (0, e.getTranslationValueFromContent)(c, i) : null;
          };
        e.getTranslationValue = n;
        const a = (o, i) => {
          let s = o[i];
          if (!s) {
            const c = i.split(".");
            c.length > 1 && (s = (0, r.default)(o, c, null));
          }
          return typeof s == "string" ? s : null;
        };
        e.getTranslationValueFromContent = a;
      })(qi)),
    qi
  );
}
var Pu;
function Lb() {
  if (Pu) return En;
  ((Pu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.Translator = void 0));
  const e = hp();
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
  Ru;
function Ub() {
  if (Ru) return xn;
  ((Ru = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.ensureLocale = void 0));
  const e = pp(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, i) => {
        const [s] = i.split("-");
        return (o[s] || (o[s] = i), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    a = (o) => {
      const i = o.replace("_", "-");
      return t.has(i) ? i : (n[i] ?? r[i] ?? null);
    };
  return ((xn.ensureLocale = a), xn);
}
var $i = {},
  Au;
function Nb() {
  return (
    Au ||
      ((Au = 1),
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
        const s = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const p = o(d[0]);
            for (const { key: v } of p) l.add(v);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = s;
        const c = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const p = o(d[0]);
            for (const v of p) l.push({ moduleName: d[1], ...v });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = c;
      })($i)),
    $i
  );
}
var zi = {},
  Iu;
function Bb() {
  return (Iu || ((Iu = 1), Object.defineProperty(zi, "__esModule", { value: !0 })), zi);
}
var ju;
function gp() {
  return (
    ju ||
      ((ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Ne;
        (t.__exportStar(pp(), e),
          t.__exportStar(Fb(), e),
          t.__exportStar(Lb(), e),
          t.__exportStar(Ub(), e));
        var r = hp();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Nb();
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
          t.__exportStar(Bb(), e));
      })(Bi)),
    Bi
  );
}
var Du;
function qb() {
  if (Du) return Sn;
  ((Du = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.getContext = void 0));
  const e = ue(),
    t = gp(),
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
function $b() {
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
  Tu;
function zb() {
  if (Tu) return Pn;
  ((Tu = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.theme = void 0));
  const t = (0, ue().getCallBridge)();
  return ((Pn.theme = { enable: () => t("enableTheming") }), Pn);
}
var Rn = {},
  An = {},
  Vi = {},
  or = {},
  Fu;
function bp() {
  if (Fu) return or;
  ((Fu = 1),
    Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.blobToBase64 = or.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let c = 0; c < o.length; c++) i[c] = o.charCodeAt(c);
    const s = new Uint8Array(i);
    return new Blob([s], { type: n });
  };
  or.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((or.blobToBase64 = t), or);
}
var Lu;
function Vb() {
  return (
    Lu ||
      ((Lu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = bp(),
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
        const s = (u) =>
          u instanceof Blob
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = s;
        const c = (u) =>
          u && r(u) && "__isBlobData" in u
            ? !0
            : Array.isArray(u)
              ? u.some((l) => (0, e.containsSerialisedBlobs)(l))
              : u && r(u)
                ? Object.values(u).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = c;
      })(Vi)),
    Vi
  );
}
var Uu;
function _p() {
  if (Uu) return An;
  ((Uu = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.events = void 0));
  const e = ue(),
    t = Vb(),
    r = (0, e.getCallBridge)(),
    n = async (o, i) => {
      let s = i;
      return (
        (0, t.containsBlobs)(i) && (s = await (0, t.serialiseBlobsInPayload)(i)),
        r("emit", { event: o, payload: s })
      );
    },
    a = (o, i) =>
      r("on", {
        event: o,
        callback: (c) => {
          let u = c;
          return (
            (0, t.containsSerialisedBlobs)(c) && (u = (0, t.deserialiseBlobsInPayload)(c)),
            i(u)
          );
        },
      });
  return ((An.events = { emit: n, on: a }), An);
}
var Nu;
function Gb() {
  if (Nu) return Rn;
  ((Nu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.emitReadyEvent = void 0));
  const e = _p(),
    t = kp(),
    r = ue(),
    n = be(),
    a = (0, r.getCallBridge)(),
    o = "EXTENSION_READY",
    i = async () => {
      const s = await t.view.getContext();
      await e.events.emit(o, { localId: s.localId });
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
  Bu = {},
  Me = function (t, r, n) {
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
        s = document.querySelector("meta[property=csp-nonce]"),
        c = s?.nonce || s?.getAttribute("nonce");
      a = u(
        r.map((l) => {
          if (((l = Wb(l, n)), l in Bu)) return;
          Bu[l] = !0;
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
            ((v.rel = d ? "stylesheet" : Hb),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            c && v.setAttribute("nonce", c),
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
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented)) throw i;
    }
    return a.then((i) => {
      for (const s of i || []) s.status === "rejected" && o(s.reason);
      return t().catch(o);
    });
  };
var In = {},
  Gi = {},
  jn = {},
  uo = {},
  qu;
function mp() {
  if (qu) return uo;
  ((qu = 1), Object.defineProperty(uo, "__esModule", { value: !0 }), (uo.default = r));
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
  return uo;
}
var Ar = {},
  Dn = {},
  Mn = {},
  $u;
function Kb() {
  if ($u) return Mn;
  (($u = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Mn.default = e), Mn);
}
var zu;
function ri() {
  if (zu) return Dn;
  ((zu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
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
var Vu;
function ni() {
  if (Vu) return Ar;
  ((Vu = 1),
    Object.defineProperty(Ar, "__esModule", { value: !0 }),
    (Ar.default = void 0),
    (Ar.unsafeStringify = n));
  var e = t(ri());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const r = [];
  for (let i = 0; i < 256; ++i) r.push((i + 256).toString(16).slice(1));
  function n(i, s = 0) {
    return (
      r[i[s + 0]] +
      r[i[s + 1]] +
      r[i[s + 2]] +
      r[i[s + 3]] +
      "-" +
      r[i[s + 4]] +
      r[i[s + 5]] +
      "-" +
      r[i[s + 6]] +
      r[i[s + 7]] +
      "-" +
      r[i[s + 8]] +
      r[i[s + 9]] +
      "-" +
      r[i[s + 10]] +
      r[i[s + 11]] +
      r[i[s + 12]] +
      r[i[s + 13]] +
      r[i[s + 14]] +
      r[i[s + 15]]
    );
  }
  function a(i, s = 0) {
    const c = n(i, s);
    if (!(0, e.default)(c)) throw TypeError("Stringified UUID is invalid");
    return c;
  }
  var o = a;
  return ((Ar.default = o), Ar);
}
var Gu;
function Jb() {
  if (Gu) return jn;
  ((Gu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = r(mp()),
    t = ni();
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  let n,
    a,
    o = 0,
    i = 0;
  function s(u, l, d) {
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
    const m = ((h & 268435455) * 1e4 + b) % 4294967296;
    ((v[p++] = (m >>> 24) & 255),
      (v[p++] = (m >>> 16) & 255),
      (v[p++] = (m >>> 8) & 255),
      (v[p++] = m & 255));
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
  var c = s;
  return ((jn.default = c), jn);
}
var Tn = {},
  Ht = {},
  Fn = {},
  Hu;
function yp() {
  if (Hu) return Fn;
  ((Hu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = t(ri());
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
var Wu;
function wp() {
  if (Wu) return Ht;
  ((Wu = 1),
    Object.defineProperty(Ht, "__esModule", { value: !0 }),
    (Ht.URL = Ht.DNS = void 0),
    (Ht.default = i));
  var e = ni(),
    t = r(yp());
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function n(s) {
    s = unescape(encodeURIComponent(s));
    const c = [];
    for (let u = 0; u < s.length; ++u) c.push(s.charCodeAt(u));
    return c;
  }
  const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  Ht.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Ht.URL = o;
  function i(s, c, u) {
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
        (h[6] = (h[6] & 15) | c),
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
      l.name = s;
    } catch {}
    return ((l.DNS = a), (l.URL = o), l);
  }
  return Ht;
}
var Ln = {},
  Ku;
function Yb() {
  if (Ku) return Ln;
  ((Ku = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
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
        m = parseInt(h.charAt((_ >>> 4) & 15) + h.charAt(_ & 15), 16);
      g.push(m);
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
    for (let m = 0; m < v.length; m += 16) {
      const k = f,
        w = h,
        O = b,
        x = _;
      ((f = c(f, h, b, _, v[m], 7, -680876936)),
        (_ = c(_, f, h, b, v[m + 1], 12, -389564586)),
        (b = c(b, _, f, h, v[m + 2], 17, 606105819)),
        (h = c(h, b, _, f, v[m + 3], 22, -1044525330)),
        (f = c(f, h, b, _, v[m + 4], 7, -176418897)),
        (_ = c(_, f, h, b, v[m + 5], 12, 1200080426)),
        (b = c(b, _, f, h, v[m + 6], 17, -1473231341)),
        (h = c(h, b, _, f, v[m + 7], 22, -45705983)),
        (f = c(f, h, b, _, v[m + 8], 7, 1770035416)),
        (_ = c(_, f, h, b, v[m + 9], 12, -1958414417)),
        (b = c(b, _, f, h, v[m + 10], 17, -42063)),
        (h = c(h, b, _, f, v[m + 11], 22, -1990404162)),
        (f = c(f, h, b, _, v[m + 12], 7, 1804603682)),
        (_ = c(_, f, h, b, v[m + 13], 12, -40341101)),
        (b = c(b, _, f, h, v[m + 14], 17, -1502002290)),
        (h = c(h, b, _, f, v[m + 15], 22, 1236535329)),
        (f = u(f, h, b, _, v[m + 1], 5, -165796510)),
        (_ = u(_, f, h, b, v[m + 6], 9, -1069501632)),
        (b = u(b, _, f, h, v[m + 11], 14, 643717713)),
        (h = u(h, b, _, f, v[m], 20, -373897302)),
        (f = u(f, h, b, _, v[m + 5], 5, -701558691)),
        (_ = u(_, f, h, b, v[m + 10], 9, 38016083)),
        (b = u(b, _, f, h, v[m + 15], 14, -660478335)),
        (h = u(h, b, _, f, v[m + 4], 20, -405537848)),
        (f = u(f, h, b, _, v[m + 9], 5, 568446438)),
        (_ = u(_, f, h, b, v[m + 14], 9, -1019803690)),
        (b = u(b, _, f, h, v[m + 3], 14, -187363961)),
        (h = u(h, b, _, f, v[m + 8], 20, 1163531501)),
        (f = u(f, h, b, _, v[m + 13], 5, -1444681467)),
        (_ = u(_, f, h, b, v[m + 2], 9, -51403784)),
        (b = u(b, _, f, h, v[m + 7], 14, 1735328473)),
        (h = u(h, b, _, f, v[m + 12], 20, -1926607734)),
        (f = l(f, h, b, _, v[m + 5], 4, -378558)),
        (_ = l(_, f, h, b, v[m + 8], 11, -2022574463)),
        (b = l(b, _, f, h, v[m + 11], 16, 1839030562)),
        (h = l(h, b, _, f, v[m + 14], 23, -35309556)),
        (f = l(f, h, b, _, v[m + 1], 4, -1530992060)),
        (_ = l(_, f, h, b, v[m + 4], 11, 1272893353)),
        (b = l(b, _, f, h, v[m + 7], 16, -155497632)),
        (h = l(h, b, _, f, v[m + 10], 23, -1094730640)),
        (f = l(f, h, b, _, v[m + 13], 4, 681279174)),
        (_ = l(_, f, h, b, v[m], 11, -358537222)),
        (b = l(b, _, f, h, v[m + 3], 16, -722521979)),
        (h = l(h, b, _, f, v[m + 6], 23, 76029189)),
        (f = l(f, h, b, _, v[m + 9], 4, -640364487)),
        (_ = l(_, f, h, b, v[m + 12], 11, -421815835)),
        (b = l(b, _, f, h, v[m + 15], 16, 530742520)),
        (h = l(h, b, _, f, v[m + 2], 23, -995338651)),
        (f = d(f, h, b, _, v[m], 6, -198630844)),
        (_ = d(_, f, h, b, v[m + 7], 10, 1126891415)),
        (b = d(b, _, f, h, v[m + 14], 15, -1416354905)),
        (h = d(h, b, _, f, v[m + 5], 21, -57434055)),
        (f = d(f, h, b, _, v[m + 12], 6, 1700485571)),
        (_ = d(_, f, h, b, v[m + 3], 10, -1894986606)),
        (b = d(b, _, f, h, v[m + 10], 15, -1051523)),
        (h = d(h, b, _, f, v[m + 1], 21, -2054922799)),
        (f = d(f, h, b, _, v[m + 8], 6, 1873313359)),
        (_ = d(_, f, h, b, v[m + 15], 10, -30611744)),
        (b = d(b, _, f, h, v[m + 6], 15, -1560198380)),
        (h = d(h, b, _, f, v[m + 13], 21, 1309151649)),
        (f = d(f, h, b, _, v[m + 4], 6, -145523070)),
        (_ = d(_, f, h, b, v[m + 11], 10, -1120210379)),
        (b = d(b, _, f, h, v[m + 2], 15, 718787259)),
        (h = d(h, b, _, f, v[m + 9], 21, -343485551)),
        (f = o(f, k)),
        (h = o(h, w)),
        (b = o(b, O)),
        (_ = o(_, x)));
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
  function s(v, g, f, h, b, _) {
    return o(i(o(o(g, v), o(h, _)), b), f);
  }
  function c(v, g, f, h, b, _, m) {
    return s((g & f) | (~g & h), v, g, b, _, m);
  }
  function u(v, g, f, h, b, _, m) {
    return s((g & h) | (f & ~h), v, g, b, _, m);
  }
  function l(v, g, f, h, b, _, m) {
    return s(g ^ f ^ h, v, g, b, _, m);
  }
  function d(v, g, f, h, b, _, m) {
    return s(f ^ (g | ~h), v, g, b, _, m);
  }
  var p = e;
  return ((Ln.default = p), Ln);
}
var Ju;
function Xb() {
  if (Ju) return Tn;
  ((Ju = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = r(wp()),
    t = r(Yb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((Tn.default = a), Tn);
}
var Un = {},
  Nn = {},
  Yu;
function Zb() {
  if (Yu) return Nn;
  ((Yu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Nn.default = t), Nn);
}
var Xu;
function Qb() {
  if (Xu) return Un;
  ((Xu = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var e = n(Zb()),
    t = n(mp()),
    r = ni();
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i, s, c) {
    if (e.default.randomUUID && !s && !i) return e.default.randomUUID();
    i = i || {};
    const u = i.random || (i.rng || t.default)();
    if (((u[6] = (u[6] & 15) | 64), (u[8] = (u[8] & 63) | 128), s)) {
      c = c || 0;
      for (let l = 0; l < 16; ++l) s[c + l] = u[l];
      return s;
    }
    return (0, r.unsafeStringify)(u);
  }
  var o = a;
  return ((Un.default = o), Un);
}
var Bn = {},
  qn = {},
  Zu;
function e_() {
  if (Zu) return qn;
  ((Zu = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  function e(a, o, i, s) {
    switch (a) {
      case 0:
        return (o & i) ^ (~o & s);
      case 1:
        return o ^ i ^ s;
      case 2:
        return (o & i) ^ (o & s) ^ (i & s);
      case 3:
        return o ^ i ^ s;
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
    const s = a.length / 4 + 2,
      c = Math.ceil(s / 16),
      u = new Array(c);
    for (let l = 0; l < c; ++l) {
      const d = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        d[p] =
          (a[l * 64 + p * 4] << 24) |
          (a[l * 64 + p * 4 + 1] << 16) |
          (a[l * 64 + p * 4 + 2] << 8) |
          a[l * 64 + p * 4 + 3];
      u[l] = d;
    }
    ((u[c - 1][14] = ((a.length - 1) * 8) / Math.pow(2, 32)),
      (u[c - 1][14] = Math.floor(u[c - 1][14])),
      (u[c - 1][15] = ((a.length - 1) * 8) & 4294967295));
    for (let l = 0; l < c; ++l) {
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
          m = (t(p, 5) + e(_, v, g, f) + h + o[_] + d[b]) >>> 0;
        ((h = f), (f = g), (g = t(v, 30) >>> 0), (v = p), (p = m));
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
  return ((qn.default = n), qn);
}
var Qu;
function t_() {
  if (Qu) return Bn;
  ((Qu = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = r(wp()),
    t = r(e_());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Bn.default = a), Bn);
}
var $n = {},
  el;
function r_() {
  if (el) return $n;
  ((el = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return (($n.default = e), $n);
}
var zn = {},
  tl;
function n_() {
  if (tl) return zn;
  ((tl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = t(ri());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var n = r;
  return ((zn.default = n), zn);
}
var rl;
function a_() {
  return (
    rl ||
      ((rl = 1),
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
              return c.default;
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
              return s.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }));
        var t = l(Jb()),
          r = l(Xb()),
          n = l(Qb()),
          a = l(t_()),
          o = l(r_()),
          i = l(n_()),
          s = l(ri()),
          c = l(ni()),
          u = l(yp());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(Gi)),
    Gi
  );
}
var nl;
function o_() {
  if (nl) return In;
  ((nl = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.createAdfRendererIframeProps = void 0));
  const e = a_(),
    t = async (r, n) => {
      const a = await Me(
          () => import("./index-BCqYYRNo.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = a.default || a,
        i = new URL(document.referrer).origin,
        s = `${i}/forge-apps/adf-renderer`,
        c = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var l, d;
          const p = document.getElementById(c),
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
              initCallback: (g) => {
                var f;
                (f = g?.iFrameResizer) === null || f === void 0 || f.resize();
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
        { id: c, src: s, onLoad: u }
      );
    };
  return ((In.createAdfRendererIframeProps = t), In);
}
var Vn = {},
  al;
function i_() {
  if (al) return Vn;
  ((al = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.onClose = void 0));
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
var ol;
function kp() {
  if (ol) return _n;
  ((ol = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.view = void 0));
  const e = Ib(),
    t = jb(),
    r = Db(),
    n = Mb(),
    a = Tb(),
    o = qb(),
    i = $b(),
    s = zb(),
    c = Gb(),
    u = o_(),
    l = i_();
  return (
    (_n.view = {
      submit: e.submit,
      close: t.close,
      onClose: l.onClose,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: o.getContext,
      theme: s.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
      createAdfRendererIframeProps: u.createAdfRendererIframeProps,
    }),
    _n
  );
}
var il;
function ai() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(kp(), e));
      })(Ni)),
    Ni
  );
}
var Hi = {},
  Gn = {},
  sl;
function s_() {
  if (sl) return Gn;
  ((sl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.router = void 0));
  const t = (0, ue().getCallBridge)(),
    r = async (i) => {
      if (!i?.target) throw new Error("target is required for getUrl");
      const s = await t("getUrl", i);
      if (!s) throw new Error("Failed to get URL");
      try {
        return new URL(s);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${s} (${c})`);
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
var cl;
function c_() {
  return (
    cl ||
      ((cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(s_(), e));
      })(Hi)),
    Hi
  );
}
var Wi = {},
  Hn = {},
  ul;
function u_() {
  if (ul) return Hn;
  ((ul = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.Modal = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class a {
    constructor(i) {
      var s, c;
      ((this.resource = i?.resource || null),
        (this.onClose = i?.onClose || n),
        (this.size = i?.size || "medium"),
        (this.context = i?.context || {}),
        (this.closeOnEscape = (s = i?.closeOnEscape) !== null && s !== void 0 ? s : !0),
        (this.closeOnOverlayClick = (c = i?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0),
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
var ll;
function l_() {
  return (
    ll ||
      ((ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(u_(), e));
      })(Wi)),
    Wi
  );
}
var it = {},
  ir = {},
  dl;
function d_() {
  if (dl) return ir;
  ((dl = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.productFetchApi = ir.remoteFetchApi = void 0));
  const e = bp(),
    t = async (i) => {
      const s = {};
      for (const [c, u] of i.entries())
        if (c === "file") {
          const l = u.name,
            d = u.type;
          ((s.file = await (0, e.blobToBase64)(u)), (s.__fileName = l), (s.__fileType = d));
        } else s[c] = u;
      return JSON.stringify(s);
    },
    r = (i) => {
      if (!i) return i;
      if ("signal" in i) {
        const { signal: s, ...c } = i;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return i;
    },
    n = async (i) => {
      const s = i?.body instanceof FormData,
        c = s ? await t(i?.body) : i?.body,
        u = new Request("", { body: c, method: i?.method, headers: i?.headers }),
        l = Object.fromEntries(u.headers.entries());
      return {
        body: u.method !== "GET" ? await u.text() : null,
        headers: new Headers(l),
        isMultipartFormData: s,
      };
    },
    a = (i) => {
      const s = async (c, u) => {
        const l = r(u),
          { body: d, headers: p, isMultipartFormData: v } = await n(l),
          g = {
            remoteKey: c,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: h,
            statusText: b,
            status: _,
            isAttachment: m,
          } = await i("fetchRemote", g),
          k = m ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(k || null, { headers: h, status: _, statusText: b });
      };
      return { requestRemote: (c, u) => s(c, u) };
    };
  ir.remoteFetchApi = a;
  const o = (i) => {
    const s = async (c, u, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: g } = await n(d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: c,
          restPath: u,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: g,
        },
        {
          body: h,
          headers: b,
          statusText: _,
          status: m,
          isAttachment: k,
        } = await i("fetchProduct", f),
        w = k ? (0, e.base64ToBlob)(h, b["content-type"]) : h;
      return new Response(w || null, { headers: b, status: m, statusText: _ });
    };
    return {
      requestConfluence: (c, u) => s("confluence", c, u),
      requestJira: (c, u) => s("jira", c, u),
      requestBitbucket: (c, u) => s("bitbucket", c, u),
    };
  };
  return ((ir.productFetchApi = o), ir);
}
var fl;
function f_() {
  if (fl) return it;
  fl = 1;
  var e;
  (Object.defineProperty(it, "__esModule", { value: !0 }),
    (it.requestRemote = it.requestBitbucket = it.requestJira = it.requestConfluence = void 0));
  const t = ue(),
    r = d_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (it.requestConfluence = e.requestConfluence),
    (it.requestJira = e.requestJira),
    (it.requestBitbucket = e.requestBitbucket),
    (it.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    it
  );
}
var Ki = {},
  Wn = {},
  vl;
function v_() {
  if (vl) return Wn;
  ((vl = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.showFlag = void 0));
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
var pl;
function p_() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = v_();
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
var Ji = {},
  hl;
function h_() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(_p(), e));
      })(Ji)),
    Ji
  );
}
var Yi = {},
  Kn = {},
  gl;
function g_() {
  if (gl) return Kn;
  ((gl = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.realtime = void 0));
  const t = (0, ue().getCallBridge)(),
    r = (i, s, c) => t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c }),
    n = (i, s, c) => t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c }),
    a = (i, s, c) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c, isGlobal: !0 }),
    o = (i, s, c) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c, isGlobal: !0 });
  return ((Kn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Kn);
}
var Xi = {},
  bl;
function b_() {
  return (
    bl ||
      ((bl = 1),
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
function __() {
  return (
    _l ||
      ((_l = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = g_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = b_();
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
      })(Yi)),
    Yi
  );
}
var Zi = {},
  Jn = {},
  Qi = {},
  ml;
function m_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = ue(),
          r = be(),
          n = 30,
          a = (0, t.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const o = (s) => {
            switch (s.type) {
              case "forge":
                return { agentName: s.agentName, agentKey: s.agentKey, prompt: s.prompt };
              case "atlassian":
                return { agentName: s.agentName, prompt: s.prompt };
              default:
                return { prompt: s.prompt };
            }
          },
          i = async (s) => {
            if (s.type === "forge") {
              if (s.agentName.length > n) throw new Error("rovo agent name too long");
              if (s.agentKey.length > n) throw new Error("rovo agent key too long");
            }
            const c = o(s);
            if ((await a("openRovo", c)) === !1)
              throw new r.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = i;
      })(Qi)),
    Qi
  );
}
var yl;
function y_() {
  if (yl) return Jn;
  ((yl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.rovo = void 0));
  const e = m_();
  return ((Jn.rovo = { open: e.open }), Jn);
}
var wl;
function w_() {
  return (
    wl ||
      ((wl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(y_(), e));
      })(Zi)),
    Zi
  );
}
var Tt = {},
  kl;
function k_() {
  if (kl) return Tt;
  ((kl = 1),
    Object.defineProperty(Tt, "__esModule", { value: !0 }),
    (Tt.createTranslationFunction = Tt.getTranslations = Tt.resetTranslationsCache = void 0));
  const e = gp(),
    t = ai(),
    r = {
      getI18nInfoConfig: async () => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!s.ok) throw new Error("Failed to get i18n info config: " + s.statusText);
        return (await s.json()).config;
      },
      getTranslationResource: async (s) => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${s}.json`);
        if (!c.ok) throw new Error(`Failed to get translation resource for locale: ${s}`);
        return c.json();
      },
    },
    n = new e.TranslationsGetter(r),
    a = () => {
      n.reset();
    };
  Tt.resetTranslationsCache = a;
  const o = async (s = null, c = { fallback: !0 }) => {
    let u = s;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, c));
  };
  Tt.getTranslations = o;
  const i = async (s = null) => {
    let c = s;
    c || (c = (await t.view.getContext()).locale);
    const u = new e.Translator(c, n);
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
  return ((Tt.createTranslationFunction = i), Tt);
}
var es = {},
  Yn = {},
  Ol;
function O_() {
  if (Ol) return Yn;
  ((Ol = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.permissions = void 0));
  const t = (0, ue().getCallBridge)(),
    r = async (c) => t("__permission__egressGet", c),
    n = async (c) => t("__permission__egressSet", c),
    a = async (c) => t("__permission__egressDeleteDomain", c),
    o = async (c) => t("__permission__egressDeleteGroup", c),
    i = async (c) => t("__permission__remoteGet", c),
    s = async (c) => t("__permission__remoteSet", c);
  return (
    (Yn.permissions = {
      egress: { get: r, set: n, deleteDomain: a, deleteGroup: o },
      remote: { get: i, set: s },
    }),
    Yn
  );
}
var sr = {},
  ts = {},
  rs = {},
  Xn = {},
  Zn = {},
  Sl;
function Sc() {
  if (Sl) return Zn;
  ((Sl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.parseUrl = void 0));
  function e(t) {
    var r, n;
    const a =
        (n = (r = t.match(/^(.*?:)/)) === null || r === void 0 ? void 0 : r[0]) !== null &&
        n !== void 0
          ? n
          : "https:",
      o = t.replace(a, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      i = o.split("/")[0],
      s = o.slice(i.length) || "/";
    return { protocol: a, hostname: i, pathname: s };
  }
  return ((Zn.parseUrl = e), Zn);
}
var ns = {},
  El;
function Op() {
  return (
    El ||
      ((El = 1),
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
          const c = i.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${c}$`);
        }
        e.globToRegex = r;
        const n = (i) => {
          if (i?.length === 0) return [];
          const s = /^(.*?:\/\/)/,
            c = new Set(),
            u = [];
          return (
            i.forEach((l) => {
              const d = s.test(l) ? l : `https://${l}`,
                p = (0, t.parseUrl)(d);
              p.hostname.startsWith("*")
                ? (c.add(p.hostname.substring(2)), u.push(r(p.hostname)))
                : c.add(p.hostname);
            }),
            [...c].sort().reduce((l, d) => (u.some((p) => p.test(d)) || l.push(d), l), [])
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
          const s = i.egress.filter((u) => {
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
            c = new Map();
          for (const u of s)
            (c.has(u.type) || c.set(u.type, u.addresses),
              c.set(u.type, [...c.get(u.type), ...u.addresses]));
          return [...c.entries()].map(([u, l]) => ({ type: u, addresses: [...new Set(l)] }));
        };
        e.getEgressesBasedOnToggles = o;
      })(ns)),
    ns
  );
}
var xl;
function S_() {
  if (xl) return Xn;
  ((xl = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.EgressFilteringService = void 0));
  const e = Sc(),
    t = Op();
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
var Cl;
function E_() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(S_(), e), t.__exportStar(Sc(), e), t.__exportStar(Op(), e));
      })(rs)),
    rs
  );
}
var Pl;
function x_() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(E_(), e));
      })(ts)),
    ts
  );
}
var Rl;
function C_() {
  if (Rl) return sr;
  ((Rl = 1),
    Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.checkPermissions = sr.createPermissionUtils = void 0));
  const e = x_(),
    t = ai();
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
        const m = _.map(r).filter((O) => O.length > 0);
        if (m.length === 0) return !1;
        const k = new e.EgressFilteringService(m);
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
  sr.createPermissionUtils = o;
  function i(d, p) {
    if (!d?.length) return;
    const v = d.filter((g) => !p.hasScope(g));
    return v.length > 0 ? v : void 0;
  }
  function s(d, p) {
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
  function c(d, p) {
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
    const v = s(d, p),
      g = c(d, p);
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
    const m = u(d.external, f);
    return (m && ((h.external = m), (b = !1)), { granted: b, missing: b ? null : h });
  }
  return ((sr.checkPermissions = l), sr);
}
var Al;
function P_() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(O_(), e), t.__exportStar(C_(), e));
      })(es)),
    es
  );
}
var as = {},
  os = {},
  is = {},
  Qn = {},
  ea = {},
  Il;
function Sp() {
  return (
    Il ||
      ((Il = 1),
      Object.defineProperty(ea, "__esModule", { value: !0 }),
      (ea.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (ea.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    ea
  );
}
var jl;
function oi() {
  if (jl) return Qn;
  ((jl = 1),
    Object.defineProperty(Qn, "__esModule", { value: !0 }),
    (Qn.checkRestrictedEnvironment = void 0));
  const e = be(),
    t = ai(),
    r = Sp(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Qn.checkRestrictedEnvironment = n), Qn);
}
var Dl;
function R_() {
  return (
    Dl ||
      ((Dl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ya(),
          r = be(),
          n = oi(),
          o = (0, ue().getCallBridge)(),
          i = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const g = new Uint8Array(v);
            return new Blob([g], { type: d || "application/octet-stream" });
          },
          s = async (l) => {
            const d = l.size,
              p = await l.arrayBuffer(),
              v = await crypto.subtle.digest("SHA-256", p),
              g = new Uint8Array(v),
              f = btoa(String.fromCharCode(...g));
            return { length: d, checksum: f, checksumType: "SHA256" };
          },
          c = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new r.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new r.BridgeAPIError("objects array is required and must not be empty");
            const p = d.map((_, m) => {
                if (_ instanceof Blob) return _;
                if (!(_ && typeof _ == "object" && "data" in _ && typeof _.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return i(_.data, _.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((_) => s(_))),
              g = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              p.forEach((_, m) => {
                const k = v[m];
                (f.set(k.checksum, _), h.set(k.checksum, m));
              }),
              Object.entries(g).map(([_, m]) => {
                const { key: k, checksum: w } = m,
                  O = f.get(w),
                  x = h.get(w);
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
                            const I = await fetch(_, {
                              method: "PUT",
                              body: O,
                              headers: {
                                "Content-Type": O.type || "application/octet-stream",
                                "Content-Length": O.size.toString(),
                              },
                            });
                            return {
                              success: I.ok,
                              key: k,
                              status: I.status,
                              error: I.ok ? void 0 : `Upload failed with status ${I.status}`,
                            };
                          } catch (I) {
                            return {
                              success: !1,
                              key: k,
                              status: 503,
                              error: I instanceof Error ? I.message : "Upload failed",
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
        e.createUploadPromises = c;
        const u = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((g) => g.promise));
        };
        e.upload = u;
      })(is)),
    is
  );
}
var ta = {},
  Ml;
function A_() {
  if (Ml) return ta;
  ((Ml = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.deleteObjects = void 0));
  const e = Ya(),
    t = be(),
    r = oi(),
    a = (0, ue().getCallBridge)(),
    o = async ({ functionKey: i, keys: s }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "delete" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(s) || s.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        s.map(async (c) => {
          await (0, e.invoke)(i, { key: c });
        }),
      );
    };
  return ((ta.deleteObjects = o), ta);
}
var ra = {},
  Tl;
function I_() {
  if (Tl) return ra;
  ((Tl = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.download = void 0));
  const e = Ya(),
    t = be(),
    r = oi(),
    a = (0, ue().getCallBridge)(),
    o = async ({ functionKey: i, keys: s }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "download" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(s) || s.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const c = await (0, e.invoke)(i, { keys: s });
      if (!c || typeof c != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const u = Object.entries(c).map(async ([d, p]) => {
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
  return ((ra.download = o), ra);
}
var na = {},
  Fl;
function j_() {
  if (Fl) return na;
  ((Fl = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.getMetadata = void 0));
  const e = Ya(),
    t = be(),
    r = oi(),
    a = (0, ue().getCallBridge)(),
    o = async ({ functionKey: i, keys: s }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        a("trackObjectStoreAction", { action: "getMetadata" }),
        !i || i.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(s) || s.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        s.map(async (u) => {
          const l = await (0, e.invoke)(i, { key: u });
          return !l || typeof l != "object"
            ? { key: u, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((na.getMetadata = o), na);
}
var Ll;
function D_() {
  return (
    Ll ||
      ((Ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = R_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = A_(),
          n = I_(),
          a = j_();
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
var Ul;
function M_() {
  return (
    Ul ||
      ((Ul = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(D_(), e), t.__exportStar(Sp(), e));
      })(as)),
    as
  );
}
var ss = {},
  aa = {},
  cr = {},
  Ir = {},
  lo = {},
  Nl;
function T_() {
  if (Nl) return lo;
  ((Nl = 1), Object.defineProperty(lo, "__esModule", { value: !0 }));
  const e = Xt();
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
      const s = e.StableID.get(this._sdkKey);
      if (
        ((o = n.customIDs) === null || o === void 0 ? void 0 : o.stableID) !== s &&
        ((!((i = n.customIDs) === null || i === void 0) && i.stableID) || s)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in a) {
        const c = a.user;
        (0, e._getFullUserHash)(n) !== (0, e._getFullUserHash)(c) &&
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
      let s = i.reason;
      const c = (a = i.warnings) !== null && a !== void 0 ? a : [];
      (this._source === "Bootstrap" && c.length > 0 && (s = s + c[0]),
        s !== "Uninitialized" &&
          s !== "NoValues" &&
          (s = `${s}:${n ? "Unrecognized" : "Recognized"}`));
      const u =
        this._source === "Bootstrap" && (o = this._bootstrapMetadata) !== null && o !== void 0
          ? o
          : void 0;
      return (u && (i.bootstrapMetadata = u), Object.assign(Object.assign({}, i), { reason: s }));
    }
  }
  return ((lo.default = t), lo);
}
var jr = {},
  oa = {},
  Bl;
function F_() {
  if (Bl) return oa;
  ((Bl = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa._resolveDeltasResponse = void 0));
  const e = Xt(),
    t = 2;
  function r(i, s) {
    const c = (0, e._typedJsonParse)(s, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const u = n(i, c),
      l = a(u),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === c.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: c.deltas_full_response,
        };
  }
  oa._resolveDeltasResponse = r;
  function n(i, s) {
    return Object.assign(Object.assign(Object.assign({}, i), s), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), s.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), s.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), s.dynamic_configs),
    });
  }
  function a(i) {
    const s = i;
    return (
      o(i.deleted_gates, s.feature_gates),
      delete s.deleted_gates,
      o(i.deleted_configs, s.dynamic_configs),
      delete s.deleted_configs,
      o(i.deleted_layers, s.layer_configs),
      delete s.deleted_layers,
      s
    );
  }
  function o(i, s) {
    i?.forEach((c) => {
      delete s[c];
    });
  }
  return oa;
}
var ql;
function Ep() {
  if (ql) return jr;
  ql = 1;
  var e =
    (jr && jr.__awaiter) ||
    function (a, o, i, s) {
      function c(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : c(g.value).then(d, p);
        }
        v((s = s.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(jr, "__esModule", { value: !0 });
  const t = Xt(),
    r = F_();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const s = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          s?.initializeUrl,
          s?.api,
          s?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, i, s, c, u) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: c,
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
        return this._fetchEvaluations(o, h, b, s);
      });
    }
    _fetchEvaluations(o, i, s, c) {
      return e(this, void 0, void 0, function* () {
        var u, l;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: s,
          retries: 2,
          isStatsigEncodable: !0,
          priority: c,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (u = d?.body) !== null && u !== void 0 ? u : null;
        if (
          i?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          s.deltasResponseRequested !== !0
        )
          return d.body;
        const p = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, s), p), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return ((jr.default = n), jr);
}
var ia = {},
  $l;
function L_() {
  if ($l) return ia;
  (($l = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia._makeParamStoreGetter = void 0));
  const e = Xt(),
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
  function s(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p, v) {
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
          return s(l, f, g, p);
        case "layer":
          return c(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((ia._makeParamStoreGetter = u), ia);
}
var ur = {},
  zl;
function U_() {
  if (zl) return ur;
  zl = 1;
  var e =
    (ur && ur.__awaiter) ||
    function (a, o, i, s) {
      function c(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : c(g.value).then(d, p);
        }
        v((s = s.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.StatsigEvaluationsDataAdapter = void 0));
  const t = Xt(),
    r = Ep();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, i, s) {
      (super.attach(o, i, s),
        s !== null && s instanceof r.default
          ? (this._network = s)
          : (this._network = new r.default(i ?? {})));
    }
    getDataAsync(o, i, s) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), s);
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
    _fetchFromNetwork(o, i, s, c) {
      return e(this, void 0, void 0, function* () {
        var u;
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), o, s?.priority, i, c);
        return l ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const s = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${s}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  }
  return ((ur.StatsigEvaluationsDataAdapter = n), ur);
}
var Vl;
function N_() {
  if (Vl) return Ir;
  Vl = 1;
  var e =
    (Ir && Ir.__awaiter) ||
    function (s, c, u, l) {
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
        h((l = l.apply(s, c || [])).next());
      });
    };
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  const t = Xt(),
    r = T_(),
    n = Ep(),
    a = L_(),
    o = U_();
  class i extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof i
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new i(c ?? "", {}));
    }
    constructor(c, u, l = null) {
      var d, p;
      t.SDKType._setClientType(c, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        c,
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
        (this._store = new r.default(c)),
        (this._network = v),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
    }
    initializeSync(c) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, c));
    }
    initializeAsync(c) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(c)), this._initializePromise);
      });
    }
    updateUserSync(c, u) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(c, u, l);
      } catch (d) {
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(c, u, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(c);
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
    updateUserAsync(c, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, u);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
        }
      });
    }
    _updateUserAsyncImpl(c, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
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
    checkGate(c, u) {
      return this.getFeatureGate(c, u).value;
    }
    logEvent(c, u, l) {
      const d = typeof c == "string" ? { eventName: c, value: u, metadata: l } : c;
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
    _initializeAsyncImpl(c) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, c)
        );
      });
    }
    _createErrorUpdateDetails(c, u) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - u,
        c,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(c) {
      (this._store.finalize(), this._setStatus("Ready", c));
    }
    _runPostUpdate(c, u) {
      this.dataAdapter.getDataAsync(c, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(c) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options)));
    }
    _configureUser(c, u) {
      var l;
      const d = (0, t._normalizeUser)(c, u),
        p = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (p && t.StableID.setOverride(p, this._sdkKey), d);
    }
    _getFeatureGateImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(c),
        g = (0, t._makeFeatureGate)(c, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          c,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(c),
        g = (0, t._makeDynamicConfig)(c, v, p),
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
          c,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(c, u) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(c),
        h = (0, t._makeExperiment)(c, f, g);
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
          c,
          (0, t._createConfigExposure)(this._user, _, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: _ }),
        _
      );
    }
    _getLayerImpl(c, u) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(c),
        f = (0, t._makeLayer)(c, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const b = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (_) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              c,
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
    _getParameterStoreImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const g = {
          name: c,
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
  return ((Ir.default = i), Ir);
}
var Gl;
function B_() {
  return (
    Gl ||
      ((Gl = 1),
      (function (e) {
        var t =
            (cr && cr.__createBinding) ||
            (Object.create
              ? function (i, s, c, u) {
                  u === void 0 && (u = c);
                  var l = Object.getOwnPropertyDescriptor(s, c);
                  ((!l || ("get" in l ? !s.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return s[c];
                      },
                    }),
                    Object.defineProperty(i, u, l));
                }
              : function (i, s, c, u) {
                  (u === void 0 && (u = c), (i[u] = s[c]));
                }),
          r =
            (cr && cr.__exportStar) ||
            function (i, s) {
              for (var c in i)
                c !== "default" && !Object.prototype.hasOwnProperty.call(s, c) && t(s, i, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Xt(),
          a = N_();
        ((e.StatsigClient = a.default), r(Xt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(cr)),
    cr
  );
}
var sa = {},
  ca = {},
  Hl;
function q_() {
  if (Hl) return ca;
  ((Hl = 1),
    Object.defineProperty(ca, "__esModule", { value: !0 }),
    (ca.initFeatureFlags = void 0));
  const e = ue(),
    t = be(),
    r = ti(),
    n = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    i = (c) => {
      if (!c || !c.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(c).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (c) => (i(c), o("initFeatureFlags", { user: c.user }));
  return (
    (ca.initFeatureFlags = (0, r.withRateLimiter)(
      s,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    ca
  );
}
var Wl;
function $_() {
  if (Wl) return sa;
  ((Wl = 1),
    Object.defineProperty(sa, "__esModule", { value: !0 }),
    (sa.ForgeDataAdapter = void 0));
  const e = q_();
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
      const s = { ...a, statsigEnvironment: this.environment },
        c = await (0, e.initFeatureFlags)({ user: s }),
        u = {
          source: "Network",
          data: JSON.stringify(c),
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
  Kl;
function xp() {
  return (
    Kl ||
      ((Kl = 1),
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
function z_() {
  if (Jl) return ua;
  ((Jl = 1),
    Object.defineProperty(ua, "__esModule", { value: !0 }),
    (ua.trackFeatureFlagEvent = void 0));
  const e = ue(),
    t = be(),
    r = xp(),
    n = ti(),
    a = 500,
    o = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    s = (u) => {
      if (!u || !u.type || !u.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(u.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(u).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (u) => (s(u), i("trackFeatureFlagEvent", u));
  return (
    (ua.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      c,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    ua
  );
}
var Yl;
function V_() {
  if (Yl) return aa;
  ((Yl = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.ForgeFeatureFlags = void 0));
  const e = B_(),
    t = $_(),
    r = xp(),
    n = z_();
  class a {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(i, s = {}) {
      var c;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const u = {
        environment: { tier: s.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (c = u.environment) === null || c === void 0 ? void 0 : c.tier),
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
    sendCheckFlagEvent(i, s) {
      const c = {
        type: r.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: i,
          success: s,
        },
      };
      (0, n.trackFeatureFlagEvent)(c);
    }
  }
  return ((aa.ForgeFeatureFlags = a), aa);
}
var Xl;
function G_() {
  return (
    Xl ||
      ((Xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = V_();
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
function H_() {
  return (
    Zl ||
      ((Zl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ne;
        var r = xb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ya(), e),
          t.__exportStar(Ab(), e),
          t.__exportStar(ai(), e),
          t.__exportStar(c_(), e),
          t.__exportStar(l_(), e),
          t.__exportStar(f_(), e),
          t.__exportStar(p_(), e),
          t.__exportStar(h_(), e),
          t.__exportStar(__(), e),
          t.__exportStar(w_(), e),
          (e.i18n = t.__importStar(k_())),
          t.__exportStar(P_(), e),
          t.__exportStar(M_(), e),
          t.__exportStar(G_(), e));
      })(Mi)),
    Mi
  );
}
var Bt = H_();
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
function W_(e, t) {
  if (xe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Cp(e) {
  var t = W_(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function Ql(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Cp(n.key), n));
  }
}
function ge(e, t, r) {
  return (
    t && Ql(e.prototype, t),
    r && Ql(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function K_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function We(e, t) {
  if (t && (xe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return K_(e);
}
function Q(e) {
  return (
    (Q = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Q(e)
  );
}
function La(e, t) {
  return (
    (La = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    La(e, t)
  );
}
function Ke(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && La(e, t));
}
function E(e, t, r) {
  return (
    (t = Cp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ee() {}
function J_(e) {
  if (Array.isArray(e)) return e;
}
function Y_(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      o,
      i,
      s = [],
      c = !0,
      u = !1;
    try {
      if (((o = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
    } catch (l) {
      ((u = !0), (a = l));
    } finally {
      try {
        if (!c && r.return != null && ((i = r.return()), Object(i) !== i)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function Vs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pp(e, t) {
  if (e) {
    if (typeof e == "string") return Vs(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Vs(e, t)
          : void 0
    );
  }
}
function X_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return J_(e) || Y_(e, t) || Pp(e, t) || X_();
}
var Rp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Z_ = function (t) {
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
  Fo = function (t, r) {
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
  Q_ = function (t, r, n) {
    return t ? { width: r } : {};
  },
  ed = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  em = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var s = ed(i, n, a),
      c = ed(o.index, n, a),
      u = r.slice(),
      l = u.splice(s, 1),
      d = G(l, 1),
      p = d[0];
    return (u.splice(c, 0, p), u);
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
function tm(e, t) {
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
    a = tm(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function td(e, t) {
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
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var rm = (function () {
  function e(t) {
    var r = this;
    (he(this, e),
      E(this, "_isAnalyticsEvent", !0),
      E(this, "clone", function () {
        var n = us({}, r.payload);
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
          xe(r) === "object" && (this.payload = us(us({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function nm(e) {
  if (Array.isArray(e)) return Vs(e);
}
function am(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function om() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Se(e) {
  return nm(e) || am(e) || Pp(e) || om();
}
function im(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Q(e)) !== null; );
  return e;
}
function Lo() {
  return (
    (Lo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = im(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Lo.apply(null, arguments)
  );
}
function sm(e, t, r) {
  return (
    (t = Q(t)),
    We(e, Ap() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Ap() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ap = function () {
    return !!e;
  })();
}
function cm(e, t, r, n) {
  var a = Lo(Q(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var um = (function (e) {
    function t(r) {
      var n;
      return (
        he(this, t),
        (n = sm(this, t, [r])),
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
      Ke(t, e),
      ge(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : cm(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(rm),
  lm = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  dm = function () {
    return y.useContext(lm);
  },
  Uo = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function fm(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function vm(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    o = n.current || !!(t && a.current.inputs && fm(t, a.current.inputs)),
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
function pm(e, t) {
  return vm(function () {
    return e;
  }, t);
}
function Ip() {
  var e = dm(),
    t = pm(
      function (r) {
        return new um({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function rd(e, t) {
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
function hm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ua(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    s = e.analyticsData,
    c = Ip(),
    u = c.createAnalyticsEvent,
    l = Uo(s),
    d = Uo(t),
    p = y.useCallback(
      function (v) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = hm({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
}
function nd(e, t) {
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
function gm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ad(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    s = Ip(),
    c = s.createAnalyticsEvent,
    u = Uo(i),
    l = Uo(t),
    d = y.useCallback(
      function () {
        var p = c({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = gm({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, c, u, l],
    );
  return d;
}
var hr = "ASC",
  No = "DESC",
  bm = "small",
  Bo = "large",
  jp = 0.22;
const _m = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, _m) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Dp(e, t, r) {
  return e ?? "var(--c-, )";
}
var mm = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  ym = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      s = se(e, mm);
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
        s,
        {
          "data-testid": o && "".concat(o, "--table"),
          className: P([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  wm = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: P(["_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  km = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: P(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Om = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: P(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Sm = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: P([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  Em = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function od(e, t) {
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
function id(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? od(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : od(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function xm(e, t, r) {
  return (
    (t = Q(t)),
    We(e, Mp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Mp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Mp = function () {
    return !!e;
  })();
}
var sd = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  Cm = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === hr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, u) {
      var l = sd(c.cells, t, n),
        d = sd(u.cells, t, n);
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
function Pm(e) {
  var t = (function (r) {
    function n() {
      var a;
      he(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return ((a = xm(this, n, [].concat(i))), E(a, "state", { pageRows: [] }), a);
    }
    return (
      Ke(n, r),
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
              var s = o.forwardedRef,
                c = se(o, Em);
              return S.createElement(
                e,
                ne({ pageRows: this.state.pageRows, head: i }, c, { ref: s }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (o, i) {
              var s = o.rows,
                c = o.head,
                u = o.sortKey,
                l = o.sortOrder,
                d = o.page,
                p = o.rowsPerPage,
                v = o.isTotalPagesControlledExternally;
              Fo(u, c);
              var g, f;
              return (
                v ? ((g = s), (f = s)) : ((g = Cm(c, s, u, l) || []), (f = Rp(g, d, p))),
                id(id({}, i), {}, { pageRows: f })
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
var Rm = "--local-dynamic-table-width",
  Tp = function (t) {
    var r = t.width;
    return typeof r < "u" ? E({}, Rm, "".concat(r, "%")) : void 0;
  },
  Am = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Im = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = se(t, Am);
    return y.createElement(
      "td",
      ne(
        {
          style: Tp({ width: r }),
          ref: o,
          className: P([
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
  jm = ["isHighlighted", "children", "style", "testId", "className"],
  Dm = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      s = se(e, jm);
    return y.createElement(
      "tr",
      ne(
        {
          style: a,
          className: P([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            i,
          ]),
        },
        s,
        { ref: t, "data-testid": o },
      ),
      n,
    );
  }),
  Mm = ["cells"],
  Tm = ["content", "testId"],
  Fm = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      s = r.cells,
      c = se(r, Mm);
    return S.createElement(
      Dm,
      ne(
        {},
        c,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(c.key)) },
      ),
      s.map(function (u, l) {
        var d = u.content,
          p = u.testId,
          v = se(u, Tm),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return S.createElement(
          Im,
          ne({ "data-testid": p || (a && "".concat(a, "--cell-").concat(l)) }, v, {
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
function Lm(e, t, r) {
  return (
    (t = Q(t)),
    We(e, Fp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Fp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Fp = function () {
    return !!e;
  })();
}
var Um = (function (e) {
    function t() {
      return (he(this, t), Lm(this, t, arguments));
    }
    return (
      Ke(t, e),
      ge(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.pageRows,
              o = n.head,
              i = n.isFixedSize,
              s = n.highlightedRowIndex,
              c = n.testId,
              u = n.forwardedRef;
            return S.createElement(
              "tbody",
              { "data-testid": c && "".concat(c, "--body"), ref: u },
              a.map(function (l, d) {
                return S.createElement(Fm, {
                  head: o,
                  isFixedSize: i,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!s && (typeof s == "number" ? s === d : s.indexOf(d) > -1)),
                  testId: c,
                });
              }),
            );
          },
        },
      ])
    );
  })(S.Component),
  Nm = Pm(
    S.forwardRef(function (e, t) {
      return S.createElement(Um, ne({}, e, { forwardedRef: t }));
    }),
  );
function Bm(e, t, r) {
  return (
    (t = Q(t)),
    We(e, Lp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Lp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lp = function () {
    return !!e;
  })();
}
var qm = (function (e) {
  function t(r) {
    var n;
    return (he(this, t), (n = Bm(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ke(t, e),
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
const Ec = y.createContext(null);
var $m = "#FFFFFF",
  Gs = "#42526E",
  zm = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Vm(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Gs, ")")
    : "var(--ds-icon-inverse, ".concat($m, ")");
}
var fo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Gm = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  Up = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        s = t.interactionName,
        c = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        p = typeof l == "number" ? l : zm[l],
        v = "".concat(i, "ms"),
        g = Vm(a),
        f = y.useContext(Ec);
      return (
        Gm(
          function () {
            if (f != null) return f.hold(s);
          },
          [f, s],
        ),
        S.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: P([fo.wrapperStyles, fo.rotateStyles]),
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
              "aria-label": c || void 0,
              style: { animationDelay: v },
              role: c ? "img" : "none",
              className: P([fo.loadInStyles]),
            },
            S.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: P([fo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function cd(e, t) {
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
function ud(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ld = "--contents-opacity",
  Hm = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  Wm = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: P(["_tzy47hfw _lcxvglyw"]),
        style: ud(ud({}, E({}, ld, n)), {}, { "--_cnddr8": Dp("var(".concat(ld, ")")) }),
      },
      r,
    );
  },
  Km = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function Jm(e, t, r) {
  return (
    (t = Q(t)),
    We(e, Np() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Np() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Np = function () {
    return !!e;
  })();
}
var Bp = (function (e) {
  function t() {
    return (he(this, t), Jm(this, t, arguments));
  }
  return (
    Ke(t, e),
    ge(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            a = n.children,
            o = n.isLoading,
            i = n.spinnerSize,
            s = n.contentsOpacity,
            c = n.testId,
            u = n.loadingLabel;
          return S.createElement(
            Hm,
            { testId: c },
            o ? S.createElement(Wm, { contentsOpacity: s, testId: c }, a) : a,
            o &&
              S.createElement(
                Km,
                { testId: c },
                S.createElement(Up, {
                  size: i,
                  testId: c && "".concat(c, "--loadingSpinner"),
                  label: u,
                }),
              ),
          );
        },
      },
    ])
  );
})(S.Component);
E(Bp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Bo,
  contentsOpacity: jp,
  loadingLabel: "Loading table",
});
var Ym = ["children", "testId"],
  Xm = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = se(e, Ym);
    return y.createElement(
      "div",
      ne({}, a, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Zm = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  Qm = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function ey(e, t, r) {
  return (
    (t = Q(t)),
    We(e, qp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (qp = function () {
    return !!e;
  })();
}
var $p = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = ey(this, t, [].concat(a))),
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
          s = i.targetRef,
          c = s?.();
        return c || r.containerRef.current;
      }),
      E(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      E(r, "isVerticallyVisible", function (i, s) {
        var c = i.top,
          u = i.bottom;
        return u <= 0 ? !1 : c < s;
      }),
      E(r, "isFullyVerticallyVisible", function (i, s) {
        var c = i.top,
          u = i.bottom;
        return c >= 0 && u <= s;
      }),
      E(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      E(r, "translateSpinner", function (i, s, c) {
        ((i.style.position = c ? "fixed" : ""),
          (i.style.transform = s !== 0 ? "translate3d(0, ".concat(s, "px, 0)") : ""));
      }),
      E(r, "updateTargetAppearance", function () {
        var i = r.getTargetNode(),
          s = r.props,
          c = s.isLoading,
          u = s.contentsOpacity;
        i &&
          i.style &&
          xe(i.style) === "object" &&
          ((i.style.pointerEvents = c ? "none" : ""), (i.style.opacity = c ? u.toString() : ""));
      }),
      r
    );
  }
  return (
    Ke(t, e),
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
            s = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!i || typeof i.getBoundingClientRect != "function" || !s)) {
            var c = i.getBoundingClientRect(),
              u = s.getBoundingClientRect(),
              l = u.height,
              d = this.isVerticallyVisible(c, o),
              p = c.top,
              v = c.bottom,
              g = c.height;
            if (d) {
              var f = g >= l * 3;
              if (f && !this.isFullyVerticallyVisible(c, o)) {
                if (p >= 0) {
                  var h = o - p,
                    b = h / 2 + p - l / 2,
                    _ = h < l * 3 ? p + l : b;
                  this.translateSpinner(s, _, !0);
                } else if (p < 0 && v > o) {
                  var m = o / 2 - l / 2;
                  this.translateSpinner(s, m, !0);
                } else {
                  var k = v / 2 - l / 2,
                    w = k < l ? k - (l - k) : k;
                  this.translateSpinner(s, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, o)) return;
            var O = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (O && typeof O.getBoundingClientRect == "function") {
              var x = O.getBoundingClientRect().top,
                A = (p - x) / 2;
              this.translateSpinner(s, A, !1);
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
            s = n.testId,
            c = n.loadingLabel;
          return S.createElement(
            Xm,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              S.createElement(
                Zm,
                { testId: s },
                S.createElement(
                  Qm,
                  { ref: this.spinnerRef },
                  S.createElement(Up, {
                    size: i,
                    testId: s && "".concat(s, "--loadingSpinner"),
                    label: c,
                  }),
                ),
              ),
          );
        },
      },
    ])
  );
})(S.Component);
E($p, "defaultProps", {
  isLoading: !0,
  spinnerSize: Bo,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(jp), ")"),
  loadingLabel: "Loading table",
});
function ty(e) {
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
    s = y.useRef(r);
  y.useEffect(
    function () {
      s.current = r;
    },
    [r],
  );
  var c = r ? e : o,
    u = y.useCallback(function (l) {
      s.current || i(l);
    }, []);
  return [c, u];
}
var la = {},
  ry = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ny = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ay = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  dd = y.memo(function (t) {
    var r = t,
      n = r.color,
      a = n === void 0 ? "currentColor" : n,
      o = r.testId,
      i = r.label,
      s = r.dangerouslySetGlyph,
      c = r.shouldScale,
      u = r.spacing,
      l = u === void 0 ? "none" : u,
      d = r.name,
      p = s ? { __html: s } : void 0,
      v = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") v = t.size === "small" || t.size === "medium" ? t.size : v;
      else if (d) {
        var g = t.size(d);
        v = g === "small" || g === "medium" ? g : v;
      }
    }
    var f = 16,
      h = ay[v][l],
      b = f + 2 * h;
    return y.createElement(
      "span",
      {
        "data-testid": o,
        role: i ? "img" : void 0,
        "aria-label": i || void 0,
        "aria-hidden": i ? void 0 : !0,
        style: { color: a },
        className: P([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          c && "_1bsb1kw7 _4t3i1kw7",
          v === "small" && "_vwz4utpp",
        ]),
      },
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - h, " ")
          .concat(0 - h, " ")
          .concat(b, " ")
          .concat(b),
        role: "presentation",
        dangerouslySetInnerHTML: p,
        className: P([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          c ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? ny[l] : ry[l],
        ]),
      }),
    );
  });
const oy = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: dd, default: dd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  ii = Nv(oy);
var fd;
function iy() {
  if (fd) return la;
  ((fd = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.default = void 0));
  var e = r(wr()),
    t = r(ii);
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
var sy = iy();
const cy = Qt(sy);
var da = {},
  vd;
function uy() {
  if (vd) return da;
  ((vd = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.default = void 0));
  var e = r(wr()),
    t = r(ii);
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
var ly = uy();
const dy = Qt(ly);
var xc = y.createContext("elevation.surface"),
  fy = function () {
    return y.useContext(xc);
  };
xc.displayName = "SurfaceProvider";
var vy = [
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
  py = ["className"],
  hy = {
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
  zp = {
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
  gy = {
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
  by = {
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
  _y = {
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
  my = {
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
  si = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      a = e.children,
      o = e.backgroundColor,
      i = e.padding,
      s = e.paddingBlock,
      c = s === void 0 ? i : s,
      u = e.paddingBlockStart,
      l = u === void 0 ? c : u,
      d = e.paddingBlockEnd,
      p = d === void 0 ? c : d,
      v = e.paddingInline,
      g = v === void 0 ? i : v,
      f = e.paddingInlineStart,
      h = f === void 0 ? g : f,
      b = e.paddingInlineEnd,
      _ = b === void 0 ? g : b,
      m = e.style,
      k = e.testId,
      w = e.xcss,
      O = se(e, vy);
    O.className;
    var x = se(O, py),
      A = y.createElement(
        n,
        ne(
          {
            style: m,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              o && hy[o],
              o && yy(o) && zp[o],
              l && gy[l],
              p && by[p],
              h && _y[h],
              _ && my[_],
              w,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? y.createElement(xc.Provider, { value: o }, A) : A;
  });
function yy(e) {
  return e in zp;
}
const ls = () =>
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
  Vp = (...e) => P(e);
function wy() {
  return {
    css() {
      throw ls();
    },
    cssMap() {
      throw ls();
    },
    cx: Vp,
    XCSSProp() {
      throw ls();
    },
  };
}
var ky = wy(),
  Oy = ky.cx,
  Sy = [
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
  pd = {
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
  hd = {
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
  Ey = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  xy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Cy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Py = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Ry = { root: "_1e0c1txw _vchhusvi" },
  qo = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        a = e.role,
        o = e.alignItems,
        i = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        u = e.rowGap,
        l = e.children,
        d = e.testId,
        p = e.direction,
        v = e.wrap,
        g = e.xcss,
        f = se(e, Sy);
      return y.createElement(
        n,
        ne({}, f, {
          role: a,
          className: P([
            Ry.root,
            s && hd[s],
            c && hd[c],
            s && pd[s],
            u && pd[u],
            o && Py[o],
            p && xy[p],
            i && Ey[i],
            v && Cy[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
qo.displayName = "Flex";
var Ay = [
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
  Hs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Iy = function (t) {
    var r = t.children;
    return y.createElement("span", { className: P([Hs.separator]) }, r);
  },
  Eo = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        a = e.alignBlock,
        o = a === void 0 ? "start" : a,
        i = e.shouldWrap,
        s = i === void 0 ? !1 : i,
        c = e.spread,
        u = e.grow,
        l = e.space,
        d = e.rowSpace,
        p = e.separator,
        v = e.xcss,
        g = e.testId,
        f = e.role,
        h = e.children,
        b = se(e, Ay),
        _ = typeof p == "string" ? y.createElement(Iy, null, p) : p,
        m = _
          ? y.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return y.createElement(y.Fragment, { key: w }, p && w > 0 ? _ : null, k);
              })
          : h;
      return y.createElement(
        qo,
        ne({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: c || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Oy(u === "hug" && Hs.hug, u === "fill" && Hs.fill, v),
          testId: g,
          ref: t,
        }),
        m,
      );
    }),
  );
Eo.displayName = "Inline";
var jy = "Invariant failed";
function Dy(e, t) {
  if (!e) throw new Error(jy);
}
var Gp = y.createContext(!1),
  My = function () {
    return y.useContext(Gp);
  },
  Ty = Gp.Provider,
  Fy = ["span", "p", "strong", "em"],
  Ly = function (t, r) {
    var n = fy();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return gd.hasOwnProperty(n) ? gd[n] : "color.text";
    }
  },
  Dr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pwu06",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Uy = { medium: "_11c8fhey", UNSAFE_small: "_11c8rymc", large: "_11c81d4k", small: "_11c8wadc" },
  Ny = { bold: "_k48pwu06", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  By = {
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
  gd = {
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
  qy = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      a = e.color,
      o = e.align,
      i = e.testId,
      s = e.id,
      c = e.size,
      u = e.weight,
      l = e.maxLines,
      d = e.xcss,
      p = e.children;
    Dy(Fy.includes(n));
    var v = My(),
      g = Ly(a, v);
    !c && !v && (c = "medium");
    var f = y.createElement(
      n,
      {
        id: s,
        className: P([
          Dr.root,
          c && Uy[c],
          g && By[g],
          l && Dr.truncation,
          l === 1 && Dr.breakAll,
          o && Dr["textAlign.".concat(o)],
          u && Ny[u],
          n === "em" && Dr["as.em"],
          n === "strong" && Dr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      p,
    );
    return v ? f : y.createElement(Ty, { value: !0 }, f);
  });
function $y() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var zy = ["as", "children", "isInset", "testId", "style", "xcss"],
  Vy = ["className"],
  Gy = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      s = e.style,
      c = e.xcss,
      u = se(e, zy);
    u.className;
    var l = se(u, Vy);
    return y.createElement(
      n,
      ne({}, l, {
        ref: t,
        className: P([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          o && "_1ah31gjf _2mwq1gjf",
          c,
        ]),
        style: s,
        "data-testid": i,
      }),
      a,
    );
  }),
  Hy = [
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
  Wy = ["className"],
  bd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Ky = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      s = i === void 0 ? Ee : i,
      c = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = se(e, Hy),
      h = y.useContext(Ec),
      b = y.useCallback(
        function (k, w) {
          (h && h.tracePress(c, k.timeStamp), s(k, w));
        },
        [s, h, c],
      ),
      _ = Ua({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "17.1.0",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var m = se(f, Wy);
    return y.createElement(
      Gy,
      ne({ as: "button", tabIndex: g ?? ($y() && !n ? 0 : void 0), style: d }, m, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: Vp(bd.root, n && bd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  Jy = y.createContext(!1),
  Yy = function () {
    return y.useContext(Jy);
  };
function _d(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i),
      c = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, a);
}
function X(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(c) {
        _d(o, n, a, i, s, "next", c);
      }
      function s(c) {
        _d(o, n, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var ds = { exports: {} },
  fs = { exports: {} },
  md;
function Hp() {
  return (
    md ||
      ((md = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(fs)),
    fs.exports
  );
}
var vs = { exports: {} },
  ps = { exports: {} },
  yd;
function Wp() {
  return (
    yd ||
      ((yd = 1),
      (function (e) {
        function t(r, n, a, o) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch {
            i = 0;
          }
          ((e.exports = t =
            function (c, u, l, d) {
              function p(v, g) {
                t(c, v, function (f) {
                  return this._invoke(v, g, f);
                });
              }
              u
                ? i
                  ? i(c, u, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (c[u] = l)
                : (p("next", 0), p("throw", 1), p("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ps)),
    ps.exports
  );
}
var wd;
function Kp() {
  return (
    wd ||
      ((wd = 1),
      (function (e) {
        var t = Wp();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.toStringTag || "@@toStringTag";
          function c(h, b, _, m) {
            var k = b && b.prototype instanceof l ? b : l,
              w = Object.create(k.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (O, x, A) {
                  var I,
                    C,
                    j,
                    U = 0,
                    z = A || [],
                    L = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: H,
                      f: H.bind(n, 4),
                      d: function (N, B) {
                        return ((I = N), (C = 0), (j = n), (J.n = B), u);
                      },
                    };
                  function H(W, N) {
                    for (C = W, j = N, a = 0; !L && U && !B && a < z.length; a++) {
                      var B,
                        V = z[a],
                        ae = J.p,
                        ie = V[2];
                      W > 3
                        ? (B = ie === N) &&
                          ((j = V[(C = V[4]) ? 5 : ((C = 3), 3)]), (V[4] = V[5] = n))
                        : V[0] <= ae &&
                          ((B = W < 2 && ae < V[1])
                            ? ((C = 0), (J.v = N), (J.n = V[1]))
                            : ae < ie &&
                              (B = W < 3 || V[0] > N || N > ie) &&
                              ((V[4] = W), (V[5] = N), (J.n = ie), (C = 0)));
                    }
                    if (B || W > 1) return u;
                    throw ((L = !0), N);
                  }
                  return function (W, N, B) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (L && N === 1 && H(N, B), C = N, j = B; (a = C < 2 ? n : j) || !L; ) {
                      I || (C ? (C < 3 ? (C > 1 && (J.n = -1), H(C, j)) : (J.n = j)) : (J.v = j));
                      try {
                        if (((U = 2), I)) {
                          if ((C || (W = "next"), (a = I[W]))) {
                            if (!(a = a.call(I, j)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((j = a.value), C < 2 && (C = 0));
                          } else
                            (C === 1 && (a = I.return) && a.call(I),
                              C < 2 &&
                                ((j = TypeError(
                                  "The iterator does not provide a '" + W + "' method",
                                )),
                                (C = 1)));
                          I = n;
                        } else if ((a = (L = J.n < 0) ? j : O.call(x, J)) !== u) break;
                      } catch (V) {
                        ((I = n), (C = 1), (j = V));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: a, done: L };
                  };
                })(h, _, m),
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
                : ((h.__proto__ = p), t(h, s, "GeneratorFunction")),
              (h.prototype = Object.create(g)),
              h
            );
          }
          return (
            (d.prototype = p),
            t(g, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, s, "GeneratorFunction"),
            t(g),
            t(g, s, "Generator"),
            t(g, i, function () {
              return this;
            }),
            t(g, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = r =
              function () {
                return { w: c, m: f };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(vs)),
    vs.exports
  );
}
var hs = { exports: {} },
  gs = { exports: {} },
  bs = { exports: {} },
  kd;
function Jp() {
  return (
    kd ||
      ((kd = 1),
      (function (e) {
        var t = Hp(),
          r = Wp();
        function n(a, o) {
          function i(c, u, l, d) {
            try {
              var p = a[c](u),
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
          var s;
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
              function (c, u, l) {
                function d() {
                  return new o(function (p, v) {
                    i(c, l, p, v);
                  });
                }
                return (s = s ? s.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(bs)),
    bs.exports
  );
}
var Od;
function Yp() {
  return (
    Od ||
      ((Od = 1),
      (function (e) {
        var t = Kp(),
          r = Jp();
        function n(a, o, i, s, c) {
          return new r(t().w(a, o, i, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(gs)),
    gs.exports
  );
}
var Sd;
function Xy() {
  return (
    Sd ||
      ((Sd = 1),
      (function (e) {
        var t = Yp();
        function r(n, a, o, i, s) {
          var c = t(n, a, o, i, s);
          return c.next().then(function (u) {
            return u.done ? u.value : c.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(hs)),
    hs.exports
  );
}
var _s = { exports: {} },
  Ed;
function Zy() {
  return (
    Ed ||
      ((Ed = 1),
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
      })(_s)),
    _s.exports
  );
}
var ms = { exports: {} },
  ys = { exports: {} },
  xd;
function Qy() {
  return (
    xd ||
      ((xd = 1),
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
      })(ys)),
    ys.exports
  );
}
var Cd;
function e0() {
  return (
    Cd ||
      ((Cd = 1),
      (function (e) {
        var t = Qy().default;
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
      })(ms)),
    ms.exports
  );
}
var Pd;
function t0() {
  return (
    Pd ||
      ((Pd = 1),
      (function (e) {
        var t = Hp(),
          r = Kp(),
          n = Xy(),
          a = Yp(),
          o = Jp(),
          i = Zy(),
          s = e0();
        function c() {
          var u = r(),
            l = u.m(c),
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
                  delegateYield: function (k, w, O) {
                    return ((h.resultName = w), b(_.d, s(k), O));
                  },
                  finish: function (k) {
                    return b(_.f, k);
                  },
                }),
                (b = function (k, w, O) {
                  ((_.p = h.prev), (_.n = h.next));
                  try {
                    return k(w, O);
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
          return ((e.exports = c =
            function () {
              return {
                wrap: function (b, _, m, k) {
                  return u.w(g(b), _, m, k && k.reverse());
                },
                isGeneratorFunction: p,
                mark: u.m,
                awrap: function (b, _) {
                  return new t(b, _);
                },
                AsyncIterator: o,
                async: function (b, _, m, k, w) {
                  return (p(_) ? a : n)(g(b), _, m, k, w);
                },
                keys: i,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = c), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ds)),
    ds.exports
  );
}
var ws, Rd;
function r0() {
  if (Rd) return ws;
  Rd = 1;
  var e = t0()();
  ws = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ws;
}
var n0 = r0();
const D = Qt(n0);
var ks = {},
  fa = {},
  Ad;
function Xp() {
  if (Ad) return fa;
  ((Ad = 1), Object.defineProperty(fa, "__esModule", { value: !0 }), (fa.bind = void 0));
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
var lr = {},
  Id;
function a0() {
  if (Id) return lr;
  Id = 1;
  var e =
    (lr && lr.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (o) {
            for (var i, s = 1, c = arguments.length; s < c; s++) {
              i = arguments[s];
              for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (o[u] = i[u]);
            }
            return o;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(lr, "__esModule", { value: !0 }), (lr.bindAll = void 0));
  var t = Xp();
  function r(o) {
    if (!(typeof o > "u")) return typeof o == "boolean" ? { capture: o } : o;
  }
  function n(o, i) {
    if (i == null) return o;
    var s = e(e({}, o), { options: e(e({}, r(i)), r(o.options)) });
    return s;
  }
  function a(o, i, s) {
    var c = i.map(function (u) {
      var l = n(u, s);
      return (0, t.bind)(o, l);
    });
    return function () {
      c.forEach(function (l) {
        return l();
      });
    };
  }
  return ((lr.bindAll = a), lr);
}
var jd;
function o0() {
  return (
    jd ||
      ((jd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Xp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = a0();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(ks)),
    ks
  );
}
var kr = o0(),
  dr = {},
  Mr = {},
  vo = {},
  va = {},
  Dd;
function i0() {
  if (Dd) return va;
  ((Dd = 1),
    Object.defineProperty(va, "__esModule", { value: !0 }),
    (va.V1InitializeContainer = void 0));
  const e = Pt();
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
  Md;
function s0() {
  if (Md) return pa;
  ((Md = 1),
    Object.defineProperty(pa, "__esModule", { value: !0 }),
    (pa.V2InitializeContainer = void 0));
  const e = Pt();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var a, o, i;
      const s = this._getResultFromLookup(this._values.feature_gates, n);
      return s
        ? {
            name: n,
            value: s.v === !0,
            rule_id: (a = s.r) !== null && a !== void 0 ? a : "default",
            secondary_exposures: (o = s.s) !== null && o !== void 0 ? o : [],
            id_type: (i = s.i) !== null && i !== void 0 ? i : "",
          }
        : null;
    }
    getConfig(n) {
      var a, o, i, s;
      const c = this._getResultFromLookup(this._values.dynamic_configs, n);
      return c
        ? {
            name: n,
            value: (a = this._values.values[c.v]) !== null && a !== void 0 ? a : {},
            rule_id: c.r,
            secondary_exposures: (o = c.s) !== null && o !== void 0 ? o : [],
            id_type: (i = c.i) !== null && i !== void 0 ? i : "",
            is_user_in_experiment: c.ue === !0,
            passed: c.p === !0,
            group_name: (s = c.gn) !== null && s !== void 0 ? s : void 0,
            is_experiment_active: c.ea === !0,
            group: c.r,
            is_device_based: c.i === "stableID",
          }
        : null;
    }
    getLayer(n) {
      var a, o, i, s, c, u;
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
            allocated_experiment_name: (s = l.ae) !== null && s !== void 0 ? s : "",
            explicit_parameters: (c = l.ep) !== null && c !== void 0 ? c : [],
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
var Td;
function c0() {
  if (Td) return vo;
  ((Td = 1), Object.defineProperty(vo, "__esModule", { value: !0 }));
  const e = Pt(),
    t = i0(),
    r = s0();
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
      var s, c;
      if (!o) return !1;
      const u = (0, e._typedJsonParse)(o.data, "has_updates", "EvaluationResponse");
      return u == null
        ? !1
        : ((this._source = o.source),
          u?.has_updates !== !0 ||
            ((s = u.time) !== null && s !== void 0 ? s : 0) < this._lcut ||
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
            e.SDKFlags.setFlags(this._sdkKey, (c = u.sdk_flags) !== null && c !== void 0 ? c : {})),
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
      const s = {};
      return (
        i.user && (s.user = i.user),
        i.sdkInfo && (s.generatorSDKInfo = i.sdkInfo),
        (s.lcut = i.time),
        s
      );
    }
    _getDetailedStoreResult(o) {
      return { result: o, details: this._getDetails(o == null) };
    }
    _setWarningState(o, i) {
      var s, c, u;
      const l = e.StableID.get(this._sdkKey);
      if (
        ((s = o.customIDs) === null || s === void 0 ? void 0 : s.stableID) !== l &&
        ((!((c = o.customIDs) === null || c === void 0) && c.stableID) || l)
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
      var i, s;
      const c = this.getCurrentSourceDetails();
      let u = c.reason;
      const l = (i = c.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && l.length > 0 && (u = u + l[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${o ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (s = this._bootstrapMetadata) !== null && s !== void 0
          ? s
          : void 0;
      return (d && (c.bootstrapMetadata = d), Object.assign(Object.assign({}, c), { reason: u }));
    }
  };
  return ((vo.default = n), vo);
}
var Tr = {},
  ha = {},
  Fd;
function u0() {
  if (Fd) return ha;
  ((Fd = 1),
    Object.defineProperty(ha, "__esModule", { value: !0 }),
    (ha._resolveDeltasResponse = void 0));
  const e = Pt(),
    t = 2;
  function r(i, s) {
    const c = (0, e._typedJsonParse)(s, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const u = n(i, c),
      l = a(u),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === c.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: c.deltas_full_response,
        };
  }
  ha._resolveDeltasResponse = r;
  function n(i, s) {
    return Object.assign(Object.assign(Object.assign({}, i), s), {
      feature_gates: Object.assign(Object.assign({}, i.feature_gates), s.feature_gates),
      layer_configs: Object.assign(Object.assign({}, i.layer_configs), s.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, i.dynamic_configs), s.dynamic_configs),
    });
  }
  function a(i) {
    const s = i;
    return (
      o(i.deleted_gates, s.feature_gates),
      delete s.deleted_gates,
      o(i.deleted_configs, s.dynamic_configs),
      delete s.deleted_configs,
      o(i.deleted_layers, s.layer_configs),
      delete s.deleted_layers,
      s
    );
  }
  function o(i, s) {
    i?.forEach((c) => {
      delete s[c];
    });
  }
  return ha;
}
var Ld;
function Zp() {
  if (Ld) return Tr;
  Ld = 1;
  var e =
    (Tr && Tr.__awaiter) ||
    function (a, o, i, s) {
      function c(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : c(g.value).then(d, p);
        }
        v((s = s.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  const t = Pt(),
    r = u0();
  class n extends t.NetworkCore {
    constructor(o, i) {
      super(o, i);
      const s = o?.networkConfig;
      ((this._option = o),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          s?.initializeUrl,
          s?.api,
          s?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(o, i, s, c, u) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: c,
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
        return this._fetchEvaluations(o, h, b, s);
      });
    }
    _fetchEvaluations(o, i, s, c) {
      return e(this, void 0, void 0, function* () {
        var u, l;
        const d = yield this.post({
          sdkKey: o,
          urlConfig: this._initializeUrlConfig,
          data: s,
          retries: 2,
          isStatsigEncodable: !0,
          priority: c,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (u = d?.body) !== null && u !== void 0 ? u : null;
        if (
          i?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          s.deltasResponseRequested !== !0
        )
          return d.body;
        const p = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, s), p), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return ((Tr.default = n), Tr);
}
var ga = {},
  Ud;
function l0() {
  if (Ud) return ga;
  ((Ud = 1),
    Object.defineProperty(ga, "__esModule", { value: !0 }),
    (ga._makeParamStoreGetter = void 0));
  const e = Pt(),
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
  function s(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p, v) {
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
          return s(l, f, g, p);
        case "layer":
          return c(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((ga._makeParamStoreGetter = u), ga);
}
var fr = {},
  Nd;
function d0() {
  if (Nd) return fr;
  Nd = 1;
  var e =
    (fr && fr.__awaiter) ||
    function (a, o, i, s) {
      function c(u) {
        return u instanceof i
          ? u
          : new i(function (l) {
              l(u);
            });
      }
      return new (i || (i = Promise))(function (u, l) {
        function d(g) {
          try {
            v(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? u(g.value) : c(g.value).then(d, p);
        }
        v((s = s.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(fr, "__esModule", { value: !0 }),
    (fr.StatsigEvaluationsDataAdapter = void 0));
  const t = Pt(),
    r = Zp();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(o, i, s) {
      (super.attach(o, i, s),
        s !== null && s instanceof r.default
          ? (this._network = s)
          : (this._network = new r.default(i ?? {})));
    }
    getDataAsync(o, i, s) {
      return this._getDataAsyncImpl(o, (0, t._normalizeUser)(i, this._options), s);
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
    _fetchFromNetwork(o, i, s, c) {
      return e(this, void 0, void 0, function* () {
        var u;
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), o, s?.priority, i, c);
        return l ?? null;
      });
    }
    _getCacheKey(o) {
      var i;
      const s = (0, t._getStorageKey)(
        this._getSdkKey(),
        o,
        (i = this._options) === null || i === void 0 ? void 0 : i.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${s}`;
    }
    _isCachedResultValidFor204(o, i) {
      return o.fullUserHash != null && o.fullUserHash === (0, t._getFullUserHash)(i);
    }
  };
  return ((fr.StatsigEvaluationsDataAdapter = n), fr);
}
var Bd;
function f0() {
  if (Bd) return Mr;
  Bd = 1;
  var e =
    (Mr && Mr.__awaiter) ||
    function (s, c, u, l) {
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
        h((l = l.apply(s, c || [])).next());
      });
    };
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  const t = Pt(),
    r = c0(),
    n = Zp(),
    a = l0(),
    o = d0();
  let i = class Ws extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof Ws
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ws(c ?? "", {}));
    }
    constructor(c, u, l = null) {
      var d, p;
      t.SDKType._setClientType(c, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        c,
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
        (this._store = new r.default(c, l ?? null)),
        (this._network = v),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()),
        (this._contextHandle = new t.PrecomputedEvaluationsContextHandle(
          c,
          () => this._options,
          () => this._errorBoundary,
          () => this._store.getValues(),
          () => this._user,
          () => this._sdkInstanceID,
        )));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
    }
    initializeSync(c) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, c));
    }
    initializeAsync(c) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(c)), this._initializePromise);
      });
    }
    updateUserSync(c, u) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(c, u, l);
      } catch (d) {
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(c, u, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(c);
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
    updateUserAsync(c, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, u);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
        }
      });
    }
    _updateUserAsyncImpl(c, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
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
      let c = (0, t._cloneObject)("StatsigUser", this._user);
      return (
        c == null && (t.Log.error("Failed to clone user"), (c = {})),
        {
          sdkKey: this._sdkKey,
          options: this._options,
          values: this._store.getValues(),
          user: c,
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
    checkGate(c, u) {
      return this.getFeatureGate(c, u).value;
    }
    logEvent(c, u, l) {
      const d = typeof c == "string" ? { eventName: c, value: u, metadata: l } : c;
      (this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), { user: this._user, time: Date.now() }),
        ));
    }
    updateUserWithAnalyticsOnlyMetadata(c) {
      this._user = this._configureUser(
        Object.assign(Object.assign({}, this._user), { analyticsOnlyMetadata: c }),
        this._options,
      );
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(c) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, c)
        );
      });
    }
    _createErrorUpdateDetails(c, u) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - u,
        c,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(c) {
      (this._store.finalize(), this._setStatus("Ready", c));
    }
    _runPostUpdate(c, u) {
      this.dataAdapter.getDataAsync(c, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(c) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options)));
    }
    _configureUser(c, u) {
      var l, d, p;
      const v = (0, t._normalizeUser)(c, u),
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
    _getFeatureGateImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(c);
      (this._checkUserHasIdForEvaluation(p?.id_type, c, "Gate"),
        this._checkInitializationStatus(v.reason));
      const g = (0, t._makeFeatureGate)(c, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, u),
        h = f ?? g;
      return (
        this._enqueueExposure(
          c,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(c);
      (this._checkUserHasIdForEvaluation(p?.id_type, c, "Dynamic config"),
        this._checkInitializationStatus(v.reason));
      const g = (0, t._makeDynamicConfig)(c, v, p),
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
          c,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(c, u) {
      var l, d, p, v;
      const { result: g, details: f } = this._store.getConfig(c);
      (this._checkUserHasIdForEvaluation(g?.id_type, c, "Experiment"),
        this._checkInitializationStatus(f.reason));
      const h = (0, t._makeExperiment)(c, f, g);
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
          c,
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
    _getLayerImpl(c, u) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(c),
        f = (0, t._makeLayer)(c, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const b = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (_) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              c,
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
    _getParameterStoreImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const g = {
          name: c,
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
    _checkUserHasIdForEvaluation(c, u, l) {
      c &&
        ((0, t._getUnitIDFromUser)(this._user, c) ||
          t.Log.warn(`The user does not have the required id_type "${c}" for ${l} "${u}"`));
    }
    _checkInitializationStatus(c) {
      (c === "Uninitialized" || c.startsWith("Loading")) &&
        t.Log.warn(`SDK initialization has not completed. Reason: ${c}`);
    }
  };
  return ((Mr.default = i), Mr);
}
var qd;
function v0() {
  return (
    qd ||
      ((qd = 1),
      (function (e) {
        var t =
            (dr && dr.__createBinding) ||
            (Object.create
              ? function (i, s, c, u) {
                  u === void 0 && (u = c);
                  var l = Object.getOwnPropertyDescriptor(s, c);
                  ((!l || ("get" in l ? !s.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return s[c];
                      },
                    }),
                    Object.defineProperty(i, u, l));
                }
              : function (i, s, c, u) {
                  (u === void 0 && (u = c), (i[u] = s[c]));
                }),
          r =
            (dr && dr.__exportStar) ||
            function (i, s) {
              for (var c in i)
                c !== "default" && !Object.prototype.hasOwnProperty.call(s, c) && t(s, i, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Pt(),
          a = f0();
        ((e.StatsigClient = a.default), r(Pt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(dr)),
    dr
  );
}
var st = v0(),
  Os = { exports: {} },
  $d;
function p0() {
  return (
    $d ||
      (($d = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(c, u, l) {
          ((this.fn = c), (this.context = u), (this.once = l || !1));
        }
        function o(c, u, l, d, p) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var v = new a(l, d || c, p),
            g = r ? r + u : u;
          return (
            c._events[g]
              ? c._events[g].fn
                ? (c._events[g] = [c._events[g], v])
                : c._events[g].push(v)
              : ((c._events[g] = v), c._eventsCount++),
            c
          );
        }
        function i(c, u) {
          --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[u];
        }
        function s() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((s.prototype.eventNames = function () {
          var u = [],
            l,
            d;
          if (this._eventsCount === 0) return u;
          for (d in (l = this._events)) t.call(l, d) && u.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
        }),
          (s.prototype.listeners = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var p = 0, v = d.length, g = new Array(v); p < v; p++) g[p] = d[p].fn;
            return g;
          }),
          (s.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (s.prototype.emit = function (u, l, d, p, v, g) {
            var f = r ? r + u : u;
            if (!this._events[f]) return !1;
            var h = this._events[f],
              b = arguments.length,
              _,
              m;
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
              for (m = 1, _ = new Array(b - 1); m < b; m++) _[m - 1] = arguments[m];
              h.fn.apply(h.context, _);
            } else {
              var k = h.length,
                w;
              for (m = 0; m < k; m++)
                switch ((h[m].once && this.removeListener(u, h[m].fn, void 0, !0), b)) {
                  case 1:
                    h[m].fn.call(h[m].context);
                    break;
                  case 2:
                    h[m].fn.call(h[m].context, l);
                    break;
                  case 3:
                    h[m].fn.call(h[m].context, l, d);
                    break;
                  case 4:
                    h[m].fn.call(h[m].context, l, d, p);
                    break;
                  default:
                    if (!_) for (w = 1, _ = new Array(b - 1); w < b; w++) _[w - 1] = arguments[w];
                    h[m].fn.apply(h[m].context, _);
                }
            }
            return !0;
          }),
          (s.prototype.on = function (u, l, d) {
            return o(this, u, l, d, !1);
          }),
          (s.prototype.once = function (u, l, d) {
            return o(this, u, l, d, !0);
          }),
          (s.prototype.removeListener = function (u, l, d, p) {
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
          (s.prototype.removeAllListeners = function (u) {
            var l;
            return (
              u
                ? ((l = r ? r + u : u), this._events[l] && i(this, l))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (s.prototype.off = s.prototype.removeListener),
          (s.prototype.addListener = s.prototype.on),
          (s.prefixed = r),
          (s.EventEmitter = s),
          (e.exports = s));
      })(Os)),
    Os.exports
  );
}
var h0 = p0();
const g0 = Qt(h0);
function zd(e, t) {
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
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var po = "@all-features",
  b0 = (function () {
    function e() {
      (he(this, e), E(this, "eventToValue", new Map()), (this.emitter = new g0()));
    }
    return ge(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            s = a(r, Wt(Wt({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var c = function () {
            var l = a(r, Wt(Wt({}, o), {}, { fireGateExposure: !1 })),
              d = i.eventToValue.get(n);
            d !== l && (i.eventToValue.set(n, l), n(l));
          };
          return (
            this.emitter.on(r, c),
            function () {
              i.emitter.off(r, c);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, a, o, i, s) {
          var c = this,
            u = "".concat(r, ".").concat(n),
            l = i(r, n, a, Wt(Wt({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var v = i(r, n, a, Wt(Wt({}, s), {}, { fireExperimentExposure: !1 })),
              g = c.eventToValue.get(o);
            g !== v && (c.eventToValue.set(o, v), o(v));
          };
          return (
            this.emitter.on(u, d),
            function () {
              c.emitter.off(u, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(po, r),
            function () {
              n.emitter.off(po, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(po),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== po;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  _0 = "fedramp-moderate";
function m0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === _0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Cc = (function (e) {
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
  Na = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  y0 = [
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
function Vd(e, t) {
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
function Ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ho = function (t) {
    return Ks({ perimeter: m0() ? Na.FEDRAMP_MODERATE : Na.COMMERCIAL }, t);
  },
  ba = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (p, v) {
      var g = G(p, 1),
        f = g[0],
        h = G(v, 1),
        b = h[0];
      return f.localeCompare(b);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var s = G(n[i], 2),
        c = s[1],
        u = G(a[i], 2),
        l = u[1];
      if (c !== l) return !1;
    }
    return !0;
  },
  Gd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  w0 = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      a = t.loggingIntervalMillis,
      o = t.loggingBufferMaxSize,
      i = t.localMode,
      s = t.eventLoggingApi,
      c = t.eventLoggingApiForRetries,
      u = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var p = se(t, y0);
    return Ks(
      Ks({}, p),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: s ? s + "rgstr" : void 0,
          logEventFallbackUrls: c ? [c] : void 0,
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
  k0 = Object.entries(Cc).map(function (e) {
    var t = G(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Qp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = k0.find(function (i) {
            var s = G(i, 1),
              c = s[0];
            return o.includes(c);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Cc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Js = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Hd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (he(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = s));
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
            var s = Array.isArray(n) ? "array" : xe(n),
              c = Array.isArray(i) ? "array" : xe(i);
            if (a) {
              var u;
              return a(i)
                ? (this.fireExposure(r), i)
                : ((u = this._onDefaultValueFallback) === null ||
                    u === void 0 ||
                    u.call(this, this, r, s, c),
                  n);
            }
            return n == null || s === c
              ? (this.fireExposure(r), i)
              : ((o = this._onDefaultValueFallback) === null ||
                  o === void 0 ||
                  o.call(this, this, r, s, c),
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
                Qp(r.details),
                Js(
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
  Wd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (he(this, e),
        (this._logParameterFunction = o),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = a),
        (this._secondaryExposures = i),
        (this._undelegatedSecondaryExposures = s),
        (this._allocatedExperimentName = c),
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
            var s = function () {
              return (o._logLayerParameterExposure(r), i);
            };
            return a
              ? a(i)
                ? s()
                : n
              : n == null || (xe(i) === xe(n) && Array.isArray(n) === Array.isArray(i))
                ? s()
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
              s,
              c,
              u = new e(
                r.name,
                r.__value,
                r.ruleID,
                Qp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Js(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Js(
                  (o =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.undelegated_secondary_exposures) !== null && o !== void 0
                    ? o
                    : [],
                ),
                (s = r.__evaluation) === null || s === void 0
                  ? void 0
                  : s.allocated_experiment_name,
                (c = r.__evaluation) === null || c === void 0 ? void 0 : c.explicit_parameters,
              );
            return u;
          },
        },
      ],
    );
  })(),
  Hr = "0.0.0-development";
function O0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function eh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (eh = function () {
    return !!e;
  })();
}
function S0(e, t, r) {
  if (eh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && La(a, r.prototype), a);
}
function Ys(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Ys = function (n) {
      if (n === null || !O0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return S0(n, arguments, Q(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        La(a, n)
      );
    }),
    Ys(e)
  );
}
function E0(e, t, r) {
  return (
    (t = Q(t)),
    We(e, th() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function th() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (th = function () {
    return !!e;
  })();
}
var Kd = (function (e) {
  function t(r) {
    return (he(this, t), E0(this, t, [r]));
  }
  return (Ke(t, e), ge(t));
})(Ys(Error));
function Jd(e, t) {
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
function x0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var C0 = 5e3,
  P0 = "https://api.atlassian.com/flags",
  R0 = "https://api.stg.atlassian.com/flags",
  A0 = "https://api.dev.atlassian.com/flags",
  I0 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  j0 = "https://api.atlassian-us-gov-mod.com/flags",
  D0 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  M0 = "oasis-stg.com/flags",
  T0 = "atlassian-isolated.net/flags",
  F0 = "/gateway/api/flags",
  Ss = (function () {
    function e() {
      he(this, e);
    }
    return ge(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = X(
            D.mark(function n(a) {
              var o, i;
              return D.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (o = a.targetApp),
                          (i = "/api/v2/frontend/clientSdkKey/".concat(o)),
                          (c.prev = 2),
                          (c.next = 5),
                          this.fetchRequest(i, "GET", a)
                        );
                      case 5:
                        return c.abrupt("return", c.sent);
                      case 8:
                        if (((c.prev = 8), (c.t0 = c.catch(2)), !(c.t0 instanceof Error))) {
                          c.next = 12;
                          break;
                        }
                        throw c.t0;
                      case 12:
                        throw Error("Failed to retrieve client sdk key");
                      case 13:
                      case "end":
                        return c.stop();
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
            D.mark(function n(a, o, i) {
              var s;
              return D.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (s = { identifiers: o, customAttributes: i, targetApp: a.targetApp }),
                          (u.prev = 1),
                          (u.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", a, s)
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
            D.mark(function n(a) {
              var o;
              return D.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      if (a.ok) {
                        s.next = 5;
                        break;
                      }
                      return ((s.next = 3), a.text());
                    case 3:
                      throw (
                        (o = s.sent),
                        new Kd(
                          "Non 2xx response status received, status: "
                            .concat(a.status, ", body: ")
                            .concat(JSON.stringify(o)),
                        )
                      );
                    case 5:
                      if (a.status !== 204) {
                        s.next = 7;
                        break;
                      }
                      throw new Kd("Unexpected 204 response");
                    case 7:
                    case "end":
                      return s.stop();
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
            D.mark(function n(a) {
              var o;
              return D.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return ((s.next = 2), a.text());
                    case 2:
                      return ((o = s.sent), s.abrupt("return", JSON.parse(o)));
                    case 4:
                    case "end":
                      return s.stop();
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
          if (n) return F0;
          if (a === Na.FEDRAMP_MODERATE)
            switch (r) {
              case Ea.Production:
                return j0;
              case Ea.Staging:
                return I0;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Na.COMMERCIAL)
            switch (r) {
              case Ea.Development:
                return A0;
              case Ea.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : R0;
              default:
                var s = this.getApiUrl(o);
                return s !== null ? s : P0;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = X(
            D.mark(function n(a, o, i, s) {
              var c, u, l, d, p;
              return D.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (c = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (u = i.fetchTimeoutMs || C0),
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
                            "".concat(c).concat(a),
                            x0(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Hr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              s && { body: JSON.stringify(s) },
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
          if (n === void 0) return r ? D0.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(M0);
          var s = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(T0) : null;
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
function Yd(e, t) {
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
function _a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function L0(e, t, r) {
  return (
    (t = Q(t)),
    We(e, rh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function rh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rh = function () {
    return !!e;
  })();
}
function U0(e, t, r, n) {
  var a = Lo(Q(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var N0 = (function (e) {
  function t() {
    var r;
    return (
      he(this, t),
      (r = L0(this, t, ["NoFetchDataAdapter", "nofetch"])),
      E(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ke(t, e),
    ge(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: st.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = X(
            D.mark(function a(o, i) {
              return D.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                    case "end":
                      return c.stop();
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
            D.mark(function a(o, i, s) {
              return D.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            _a(
                              _a({}, this.bootstrapResult),
                              {},
                              { fullUserHash: st._getFullUserHash(i) },
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
            _a(_a({}, this.bootstrapResult), {}, { fullUserHash: st._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = X(
            D.mark(function a(o, i, s) {
              return D.wrap(function (u) {
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
          var a = st._getStorageKey(this._getSdkKey(), n);
          return "".concat(st.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          U0(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = _a({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(st.DataAdapterCore);
function Xd(e, t) {
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
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xd(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function B0(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = q0(e)) || t) {
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
    s = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((s = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (s) throw o;
      }
    },
  };
}
function q0(e, t) {
  if (e) {
    if (typeof e == "string") return Zd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Zd(e, t)
          : void 0
    );
  }
}
function Zd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Es = "LocalOverride:Recognized",
  $0 = "STATSIG_OVERRIDES",
  Qd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Fr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Xe = function (t, r) {
    return r + ":" + t;
  },
  z0 = (function () {
    function e(t) {
      (he(this, e),
        (this._overrides = Fr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ge(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Fr();
          } catch {
            return Fr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Fr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
            a[o] = arguments[o];
          for (var i = 0, s = a; i < s.length; i++) {
            for (
              var c = s[i],
                u = 0,
                l = Object.entries((d = c.gates) !== null && d !== void 0 ? d : {});
              u < l.length;
              u++
            ) {
              var d,
                p = G(l[u], 2),
                v = p[0],
                g = p[1];
              r.gates[v] = g;
            }
            for (
              var f = 0, h = Object.entries((b = c.configs) !== null && b !== void 0 ? b : {});
              f < h.length;
              f++
            ) {
              var b,
                _ = G(h[f], 2),
                m = _[0],
                k = _[1];
              r.configs[m] = k;
            }
            for (
              var w = 0, O = Object.entries((x = c.layers) !== null && x !== void 0 ? x : {});
              w < O.length;
              w++
            ) {
              var x,
                A = G(O[w], 2),
                I = A[0],
                C = A[1];
              r.layers[I] = C;
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
            this.parseStoredOverrides(Qd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Qd);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              s = B0(i),
              c;
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var u = c.value,
                  l = Ye._DJB2(u);
                i.has(l) && delete o[l];
              }
            } catch (d) {
              s.e(d);
            } finally {
              s.f();
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
          var n = De(De({}, Fr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = G(o[a], 2), s = i[0], c = i[1], u = 0, l = Object.entries(c);
              u < l.length;
              u++
            ) {
              var d = G(l[u], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(Xe(Ye._DJB2(p), s), v);
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
            this._djb2Map.set(Xe(Ye._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Xe(Ye._DJB2(r), "gates")),
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
            : De(De({}, r), {}, { value: o, details: De(De({}, r.details), {}, { reason: Es }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Xe(Ye._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Xe(Ye._DJB2(r), "configs")),
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
            this._djb2Map.set(Xe(Ye._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Xe(Ye._DJB2(r), "configs")),
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
            this._djb2Map.set(Xe(Ye._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Xe(Ye._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Fr();
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
            : De(
                De({}, r),
                {},
                {
                  __value: o,
                  get: Ye._makeTypedGet(r.name, o),
                  details: De(De({}, r.details), {}, { reason: Es }),
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
            : De(
                De({}, r),
                {},
                {
                  value: o,
                  get: Ye._makeTypedGet(r.name, o),
                  details: De(De({}, r.details), {}, { reason: Es }),
                },
              );
        },
      },
    ]);
  })(),
  V0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function ef(e, t) {
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
      ? ef(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ef(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var tf = "client-default-key",
  G0 = "https://xp.atlassian.com/v1/rgstr",
  H0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? $0 : n,
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
        E(this, "subscriptions", new b0()),
        E(this, "dataAdapter", new N0()),
        E(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new z0(a)));
    }
    return ge(e, [
      {
        key: "initialize",
        value: (function () {
          var t = X(
            D.mark(function n(a, o, i) {
              var s = this,
                c,
                u;
              return D.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((c = ho(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ba(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (u = performance.now()),
                          (this.initOptions = c),
                          (this.initPromise = this.init(c, o, i)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                v = p - u;
                              s.fireClientEvent(u, v, "initialize", s.initCompleted, c.apiKey);
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
            D.mark(function n(a, o, i, s) {
              var c = this,
                u,
                l;
              return D.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((u = ho(a)), !this.initPromise)) {
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
                          this.provider.setClientVersion(Hr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, o, i, s)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var v = performance.now(),
                                g = v - l;
                              c.fireClientEvent(
                                l,
                                g,
                                "initializeWithProvider",
                                c.initCompleted,
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
            s = this,
            c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (i = this.initOptions.analyticsWebClient) === null ||
            i === void 0 ||
            i
              .then(function (u) {
                var l = Kt(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: Hr,
                    success: o,
                    startTime: r,
                    totalTime: n,
                  },
                  c && { apiKey: c },
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
                s.initOptions.environment !== Ea.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = X(
            D.mark(function n(a, o, i) {
              var s = this,
                c,
                u,
                l,
                d = arguments;
              return D.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((c = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = ho(a)),
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
                          Object.prototype.hasOwnProperty.call(c, "has_updates") ||
                            (c.has_updates = !0),
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.initPromise = this.initFromValues(u, o, i, c)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var g = performance.now(),
                                f = g - l;
                              s.fireClientEvent(l, f, "initializeFromValues", s.initCompleted);
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
            D.mark(function n(a, o, i) {
              var s, c;
              return D.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = ho(a)),
                          (c = function () {
                            return Ss.fetchExperimentValues(s, o, i).then(function (p) {
                              var v = p.experimentValues,
                                g = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: g };
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(c, o, i)
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
            D.mark(function n(a, o) {
              var i = this;
              return D.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.provider)) {
                          c.next = 3;
                          break;
                        }
                        throw new Error(
                          "Cannot update user using provider as the client was not initialised with a provider",
                        );
                      case 3:
                        return ((c.next = 5), this.provider.setProfile(this.initOptions, a, o));
                      case 5:
                        return (
                          (c.next = 7),
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
                        return c.stop();
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
            D.mark(function n(a, o) {
              var i,
                s,
                c = arguments;
              return D.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (i = c.length > 2 && c[2] !== void 0 ? c[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (s = function () {
                            return Promise.resolve({
                              experimentValues: i,
                              customAttributesFromFetch: o,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(s, a, o)
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
            D.mark(function n() {
              return D.wrap(
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
            return Hd.fromExperiment(
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
              new Hd(r, {}, "", { time: Date.now(), reason: Cc.Error })
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
            var s = o.typeGuard;
            return i.get(n, a, s);
          } catch (c) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: a,
                  options: o,
                  error: c,
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
            i = function (c) {
              var u = o.fireGateExposure,
                l = u === void 0 ? !0 : u;
              l && a.manuallyLogGateExposure(r);
              try {
                n(c);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(c),
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
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            c = function (l) {
              var d = s.fireExperimentExposure,
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
            c,
            this.getExperimentValue.bind(this),
            s,
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
            D.mark(function n(a, o, i) {
              var s, c, u, l, d, p, v, g;
              return D.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = Kt({}, a)),
                          (h.prev = 1),
                          (l = Ss.fetchClientSdk(a).then(function (b) {
                            return (s.sdkKey = b.clientSdkKey);
                          })),
                          (d = Ss.fetchExperimentValues(a, o, i)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = G(p, 2)),
                          (g = v[1]),
                          (c = g.experimentValues),
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
                          this.initFromValues(s, o, i)
                        );
                      case 19:
                        throw h.t0;
                      case 20:
                        return h.abrupt("return", this.initFromValues(s, o, u, c));
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
          var t = X(
            D.mark(function n(a, o, i, s) {
              var c, u, l, d, p, v, g, f;
              return D.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (c = Kt(Kt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, s)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (_) {
                            return (c.sdkKey = _);
                          })),
                          (p = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = b.sent),
                          (g = G(v, 2)),
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
                          this.initFromValues(c, i, s)
                        );
                      case 21:
                        throw b.t0;
                      case 22:
                        return b.abrupt("return", this.initFromValues(c, i, l, u));
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
            D.mark(function n(a, o, i) {
              var s,
                c,
                u,
                l,
                d,
                p,
                v,
                g = arguments;
              return D.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = g.length > 3 && g[3] !== void 0 ? g[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = w0(a)),
                          u.sdkKey || (u.sdkKey = tf),
                          ((s = u.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (u.networkConfig = Kt(
                              Kt({}, u.networkConfig),
                              {},
                              { logEventUrl: G0 },
                            )),
                          u.perimeter === Na.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = se(u, V0)),
                          (this.user = Gd(o, i)),
                          (v = Kt(
                            Kt({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: st.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? st.StableID.setOverride(o.stableId, l)
                            : (v.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new st.StatsigClient(l, this.user, v)),
                          this.dataAdapter.setBootstrapData(c),
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
                          (this.statsigClient = new st.StatsigClient(tf, this.user, v)),
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
          var t = X(
            D.mark(function n(a, o, i) {
              var s = this,
                c,
                u,
                l;
              return D.wrap(
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
                          (c = this.initPromise),
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
                              D.mark(function v() {
                                return D.wrap(function (f) {
                                  for (;;)
                                    switch ((f.prev = f.next)) {
                                      case 0:
                                        if (((s.initPromise = c), !s.provider)) {
                                          f.next = 4;
                                          break;
                                        }
                                        return (
                                          (f.next = 4),
                                          s.provider.setProfile(
                                            s.initOptions,
                                            s.currentIdentifiers,
                                            s.currentAttributes,
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
            D.mark(function n(a, o, i) {
              var s, c, u, l, d, p, v, g, f;
              return D.wrap(
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
                        ((u = b.sent), (l = Gd(o, u.customAttributesFromFetch)), (b.next = 13));
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
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (c = s.updateUserCompletionCallback) === null ||
                            c === void 0 ||
                            c.call(s, g, f),
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
          return Hr;
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
            return Wd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Wd.fromLayer(st._makeLayer(r, { reason: "Error" }, null))
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
            var s = o.typeGuard;
            return i.get(n, a, s);
          } catch (c) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: a,
                  options: o,
                  error: c,
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
  K = (function () {
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
M = K;
E(K, "client", new H0());
E(K, "hasCheckGateErrorOccurred", !1);
E(K, "hasGetExperimentValueErrorOccurred", !1);
E(K, "checkGate", function (e, t) {
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
E(K, "getExperimentValue", function (e, t, r, n) {
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
E(K, "initializeCalled", M.client.initializeCalled.bind(M.client));
E(K, "initializeCompleted", M.client.initializeCompleted.bind(M.client));
E(K, "waitUntilInitializeCompleted", M.client.waitUntilInitializeCompleted.bind(M.client));
E(K, "initialize", M.client.initialize.bind(M.client));
E(K, "initializeWithProvider", M.client.initializeWithProvider.bind(M.client));
E(K, "initializeFromValues", M.client.initializeFromValues.bind(M.client));
E(K, "manuallyLogGateExposure", M.client.manuallyLogGateExposure.bind(M.client));
E(K, "getExperiment", M.client.getExperiment.bind(M.client));
E(K, "manuallyLogExperimentExposure", M.client.manuallyLogExperimentExposure.bind(M.client));
E(K, "manuallyLogLayerExposure", M.client.manuallyLogLayerExposure.bind(M.client));
E(K, "shutdownStatsig", M.client.shutdownStatsig.bind(M.client));
E(K, "overrideGate", M.client.overrideGate.bind(M.client));
E(K, "clearGateOverride", M.client.clearGateOverride.bind(M.client));
E(K, "overrideConfig", M.client.overrideConfig.bind(M.client));
E(K, "clearConfigOverride", M.client.clearConfigOverride.bind(M.client));
E(K, "setOverrides", M.client.setOverrides.bind(M.client));
E(K, "getOverrides", M.client.getOverrides.bind(M.client));
E(K, "clearAllOverrides", M.client.clearAllOverrides.bind(M.client));
E(K, "isCurrentUser", M.client.isCurrentUser.bind(M.client));
E(K, "onGateUpdated", M.client.onGateUpdated.bind(M.client));
E(K, "onExperimentValueUpdated", M.client.onExperimentValueUpdated.bind(M.client));
E(K, "onAnyUpdated", M.client.onAnyUpdated.bind(M.client));
E(K, "updateUser", M.client.updateUser.bind(M.client));
E(K, "updateUserWithProvider", M.client.updateUserWithProvider.bind(M.client));
E(K, "updateUserWithValues", M.client.updateUserWithValues.bind(M.client));
E(K, "getPackageVersion", M.client.getPackageVersion.bind(M.client));
E(K, "getLayer", M.client.getLayer.bind(M.client));
E(K, "getLayerValue", M.client.getLayerValue.bind(M.client));
var Xs = K;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = K;
  else {
    var go, xs;
    Xs = window.__FEATUREGATES_JS__;
    var rf =
      ((go = Xs) === null || go === void 0 || (xs = go.getPackageVersion) === null || xs === void 0
        ? void 0
        : xs.call(go)) || "4.10.0 or earlier";
    if (rf !== Hr) {
      var W0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(rf, " when module version ")
        .concat(Hr, " was loading.");
      console.warn(W0);
    }
  }
var Lr,
  Ur,
  K0 =
    (globalThis == null ||
    (Lr = globalThis.process) === null ||
    Lr === void 0 ||
    (Lr = Lr.env) === null ||
    Lr === void 0
      ? void 0
      : Lr.JEST_WORKER_ID) !== void 0,
  J0 =
    !K0 &&
    (globalThis == null ||
    (Ur = globalThis.process) === null ||
    Ur === void 0 ||
    (Ur = Ur.env) === null ||
    Ur === void 0
      ? void 0
      : Ur.NODE_ENV) !== "production",
  Y0 = function () {
    var t;
    J0 && (t = console).debug.apply(t, arguments);
  },
  Pc = {},
  X0 = "@atlaskit/platform-feature-flags",
  Pa = "__PLATFORM_FEATURE_FLAGS__",
  nh = typeof process < "u" && typeof Pc < "u",
  Z0 = nh ? Pc.ENABLE_PLATFORM_FF === "true" : !1,
  Q0 = nh ? Pc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  ew = Z0 || Q0,
  tw = { booleanResolver: void 0 },
  Ra = typeof window < "u" ? window : globalThis;
Ra[Pa] = Ra[Pa] || tw;
function rw(e) {
  if (ew)
    return (
      Y0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        X0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Ra[Pa]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Ra[Pa]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Xs.checkGate(e);
    var a = (n = Ra[Pa]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function de(e) {
  return rw(e);
}
var nw = ["light", "dark", "auto"],
  aw = [
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
  ow = {
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
  _e = {
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
  iw = {
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
  Or = "data-theme",
  sw = "data-subtree-theme",
  ci = "data-color-mode",
  ah = "data-contrast-mode",
  ui = "data-custom-theme",
  cw = ["light", "dark", "spacing", "typography", "shape"],
  Zs = "UNSAFE_themeOptions",
  oh = function (t) {
    return (
      cw.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  ih = function (t) {
    return (
      aw.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  sh = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  uw = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = G(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && sh(i) && (r[o] = i), oh(o) && ih(i) && (r[o] = i), o === Zs))
          try {
            r[Zs] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  lw = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = G(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && sh(i)) ||
        (o === Zs && xe(i) === "object") ||
        (oh(o) && typeof i == "string" && ih(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(xe(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
function nf(e, t) {
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
function af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var dw = function (t) {
    return (
      nw.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Rc = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(ci) || "",
      n = t.getAttribute(Or) || "";
    return af(af({}, uw(n)), dw(r) && { colorMode: r });
  },
  ch = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  Ba = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function OP(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function fw(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function SP(e) {
  if (!Ba(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, fw(e)]
  );
}
function of(e) {
  if (!Ba(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function EP(e) {
  if (!Ba(e)) throw new Error("Invalid HEX");
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
    s = 0,
    c = 0,
    u = 0;
  return (
    i === 0
      ? (s = 0)
      : o === t
        ? (s = ((r - n) / i) % 6)
        : o === r
          ? (s = (n - t) / i + 2)
          : (s = (t - r) / i + 4),
    (s = Math.round(s * 60)),
    s < 0 && (s += 360),
    (u = (o + a) / 2),
    (c = i === 0 ? 0 : i / (1 - Math.abs(2 * u - 1))),
    (c = +(c * 100).toFixed(1)),
    (u = +(u * 100).toFixed(1)),
    [s, c, u]
  );
}
function xP(e, t, r) {
  ((t /= 100), (r /= 100));
  var n = function (s) {
      return (s + e / 30) % 12;
    },
    a = t * Math.min(r, 1 - r),
    o = function (s) {
      return r - a * Math.max(-1, Math.min(n(s) - 3, Math.min(9 - n(s), 1)));
    };
  return [255 * o(0), 255 * o(8), 255 * o(4)];
}
function sf(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    s = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    c = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * s + 0.0722 * c;
  return u;
}
function CP(e, t) {
  if (!Ba(e) || !Ba(t)) throw new Error("Invalid HEX");
  var r = of(e),
    n = of(t),
    a = sf(r[0], r[1], r[2]),
    o = sf(n[0], n[1], n[2]),
    i = Math.max(a, o),
    s = Math.min(a, o);
  return (i + 0.05) / (s + 0.05);
}
function PP(e, t) {
  var r = cf(e),
    n = cf(t),
    a = r[0] - n[0],
    o = r[1] - n[1],
    i = r[2] - n[2],
    s = Math.sqrt(r[1] * r[1] + r[2] * r[2]),
    c = Math.sqrt(n[1] * n[1] + n[2] * n[2]),
    u = s - c,
    l = o * o + i * i - u * u;
  l = l < 0 ? 0 : Math.sqrt(l);
  var d = 1 + 0.045 * s,
    p = 1 + 0.015 * s,
    v = a / 1,
    g = u / d,
    f = l / p,
    h = v * v + g * g + f * f;
  return h < 0 ? 0 : Math.sqrt(h);
}
function cf(e) {
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
var uh = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
function uf(e, t) {
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
function lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : uf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vw = "light",
  pw = "no-preference",
  lh = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.colorMode,
      n = r === void 0 ? _e.colorMode : r,
      a = t.dark,
      o = a === void 0 ? _e.dark : a,
      i = t.light,
      s = i === void 0 ? _e.light : i,
      c = t.contrastMode,
      u = c === void 0 ? _e.contrastMode : c,
      l = t.shape,
      d = l === void 0 ? _e.shape() : l,
      p = t.spacing,
      v = p === void 0 ? _e.spacing : p,
      g = t.typography,
      f = g === void 0 ? _e.typography : g,
      h = t.UNSAFE_themeOptions,
      b = h === void 0 ? _e.UNSAFE_themeOptions : h,
      _ = lw({ dark: o, light: s, shape: d, spacing: v, typography: f }),
      m = E(E({}, Or, _), ci, n === "auto" ? vw : n);
    if (
      (de("platform_increased-contrast-themes") &&
        (m = lf(lf({}, m), {}, E({}, ah, u === "auto" ? pw : u))),
      b && ch(b.brandColor))
    ) {
      var k = JSON.stringify(b),
        w = uh(k);
      m[ui] = w;
    }
    return m;
  },
  dh = {
    light: function () {
      return Me(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return Me(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return Me(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return Me(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return Me(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return Me(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    "legacy-light": function () {
      return Me(() => import("./atlassian-legacy-light-ChQmBoUT.js"), [], import.meta.url);
    },
    "legacy-dark": function () {
      return Me(() => import("./atlassian-legacy-dark-OVXC1RdQ.js"), [], import.meta.url);
    },
    spacing: function () {
      return Me(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return Me(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    shape: function () {
      return Me(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
  },
  hw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(Or, '="').concat(r, '"]:not([').concat(ui, "])"),
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
                return ((i.next = 6), gw(r));
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
  gw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), dh[r]());
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
  bw = "(prefers-color-scheme: dark)",
  _w = "(prefers-contrast: more)",
  mw = typeof window < "u" && "matchMedia" in window;
function yw(e) {
  var t = document.documentElement;
  t.setAttribute(ci, e.matches ? "dark" : "light");
}
var Nr = mw && window.matchMedia(bw),
  ww = (function () {
    function e() {
      (he(this, e), E(this, "unbindThemeChangeListener", null));
    }
    return ge(e, [
      {
        key: "getColorMode",
        value: function () {
          return Nr && Nr != null && Nr.matches ? "dark" : "light";
        },
      },
      {
        key: "bind",
        value: function () {
          Nr &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = kr.bind(Nr, { type: "change", listener: yw }));
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
  bo = new ww(),
  kw = typeof window < "u" && "matchMedia" in window;
function Ow(e) {
  var t = document.documentElement;
  t.setAttribute(ah, e.matches ? "more" : "no-preference");
}
var Br = kw && window.matchMedia(_w),
  Sw = (function () {
    function e() {
      (he(this, e), E(this, "unbindContrastChangeListener", null));
    }
    return ge(e, [
      {
        key: "getContrastMode",
        value: function () {
          return Br && Br != null && Br.matches ? "more" : "no-preference";
        },
      },
      {
        key: "bind",
        value: function () {
          Br &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = kr.bind(Br, { type: "change", listener: Ow }));
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
  _o = new Sw();
function Ew(e) {
  (e.colorMode === "auto" ? ((e.colorMode = bo.getColorMode()), bo.bind()) : bo.unbind(),
    de("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = _o.getContrastMode()), _o.bind())
        : _o.unbind()));
  var t = lh(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = G(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (bo.unbind(), de("platform_increased-contrast-themes") && _o.unbind());
    }
  );
}
function xw(e, t) {
  var r = JSON.stringify(e),
    n = uh(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(ui, '="').concat(n, '"][').concat(Or, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function RP(e) {
  var t = Se(Array.from(document.head.querySelectorAll("style[".concat(ui, "][").concat(Or, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function AP(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = G(n, 2),
      o = a[0],
      i = a[1],
      s = iw[o];
    return s
      ? ""
          .concat(
            r,
            `
  `,
          )
          .concat(s, ": ")
          .concat(typeof i == "string" ? i : t[i], ";")
      : r;
  }, "");
}
function df(e) {
  var t;
  return (t = Object.entries(ow).find(function (r) {
    var n = G(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var Cw = function (t) {
    var r = t.colorMode,
      n = t.contrastMode,
      a = t.dark,
      o = t.light,
      i = t.shape,
      s = t.spacing,
      c = t.typography,
      u = [o, a],
      l = [];
    if (r === "auto")
      (n !== "no-preference" &&
        de("platform_increased-contrast-themes") &&
        u.forEach(function (p) {
          var v = df(p);
          v && u.push(v);
        }),
        l.push.apply(l, u));
    else if ((l.push(t[r]), n !== "no-preference" && de("platform_increased-contrast-themes"))) {
      var d = df(t[r]);
      d && l.push(d);
    }
    return (
      [i, s, c].forEach(function (p) {
        p && l.push(p);
      }),
      Se(new Set(l))
    );
  },
  Pw = function (t) {
    var r = [];
    return Se(new Set(r));
  };
function Rw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Aw(e)) || t) {
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
    s = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var u = r.next();
      return ((i = u.done), u);
    },
    e: function (u) {
      ((s = !0), (o = u));
    },
    f: function () {
      try {
        i || r.return == null || r.return();
      } finally {
        if (s) throw o;
      }
    },
  };
}
function Aw(e, t) {
  if (e) {
    if (typeof e == "string") return ff(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ff(e, t)
          : void 0
    );
  }
}
function ff(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vf(e, t) {
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
function pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Iw = (function () {
    var e = X(
      D.mark(function t() {
        var r,
          n,
          a,
          o,
          i,
          s,
          c,
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
          m,
          k,
          w,
          O,
          x,
          A,
          I,
          C,
          j,
          U,
          z,
          L,
          J,
          H = arguments;
        return D.wrap(
          function (N) {
            for (;;)
              switch ((N.prev = N.next)) {
                case 0:
                  return (
                    (r = H.length > 0 && H[0] !== void 0 ? H[0] : {}),
                    (n = H.length > 1 ? H[1] : void 0),
                    (a =
                      typeof r == "function"
                        ? r(
                            pf(
                              pf({}, _e),
                              {},
                              { typography: _e.typography, shape: _e.shape() },
                              Rc(),
                            ),
                          )
                        : r),
                    (o = a.colorMode),
                    (i = o === void 0 ? _e.colorMode : o),
                    (s = a.contrastMode),
                    (c = s === void 0 ? _e.contrastMode : s),
                    (u = a.dark),
                    (l = u === void 0 ? _e.dark : u),
                    (d = a.light),
                    (p = d === void 0 ? _e.light : d),
                    (v = a.shape),
                    (g = v === void 0 ? _e.shape() : v),
                    (f = a.spacing),
                    (h = f === void 0 ? _e.spacing : f),
                    (b = a.typography),
                    (_ = b === void 0 ? _e.typography : b),
                    (m = a.UNSAFE_themeOptions),
                    (k = m === void 0 ? _e.UNSAFE_themeOptions : m),
                    de("platform_increased-contrast-themes") ||
                      (p === "light-increased-contrast" && (p = "light"),
                      l === "dark-increased-contrast" && (l = "dark")),
                    (w = {
                      colorMode: i,
                      contrastMode: c,
                      dark: l,
                      light: p,
                      shape: g,
                      spacing: h,
                      typography: _,
                      UNSAFE_themeOptions: n ? void 0 : k,
                    }),
                    (O = Cw(w)),
                    (x = n || hw),
                    (A = O.map(
                      (function () {
                        var B = X(
                          D.mark(function V(ae) {
                            return D.wrap(function (ce) {
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
                          return B.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      k &&
                      ch(k?.brandColor) &&
                      ((I = i || _e.colorMode),
                      (C = xw(k, I)),
                      C.length > 0 &&
                        A.push(
                          X(
                            D.mark(function B() {
                              var V, ae;
                              return D.wrap(function (ce) {
                                for (;;)
                                  switch ((ce.prev = ce.next)) {
                                    case 0:
                                      return (
                                        (ce.next = 2),
                                        Me(
                                          () => import("./custom-theme-BOM4tTPp.js"),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((V = ce.sent),
                                        (ae = V.loadAndAppendCustomThemeCss),
                                        ae({
                                          colorMode: C.length === 2 ? "auto" : C[0],
                                          UNSAFE_themeOptions: k,
                                        }));
                                    case 5:
                                    case "end":
                                      return ce.stop();
                                  }
                              }, B);
                            }),
                          )(),
                        )),
                    (N.next = 11),
                    Promise.all(A)
                  );
                case 11:
                  ((j = Pw()), (U = Rw(j)), (N.prev = 13), U.s());
                case 15:
                  if ((z = U.n()).done) {
                    N.next = 21;
                    break;
                  }
                  return ((L = z.value), (N.next = 19), x(L));
                case 19:
                  N.next = 15;
                  break;
                case 21:
                  N.next = 26;
                  break;
                case 23:
                  ((N.prev = 23), (N.t0 = N.catch(13)), U.e(N.t0));
                case 26:
                  return ((N.prev = 26), U.f(), N.finish(26));
                case 29:
                  return ((J = Ew(w)), N.abrupt("return", J));
                case 31:
                case "end":
                  return N.stop();
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
  Ac = (function () {
    function e(t) {
      (he(this, e), E(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return ge(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = Rc();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Or, ci] }));
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
E(Ac, "observer", null);
E(Ac, "callbacks", new Set());
var fh = y.createContext(void 0),
  jw = y.createContext(void 0),
  vh = y.createContext(!1),
  Dw = y.createContext(void 0),
  Mw = y.createContext(void 0),
  Tw = function () {
    var t;
    return (t = y.useContext(vh)) !== null && t !== void 0 ? t : !1;
  },
  ph = function () {
    return typeof document < "u" ? document : null;
  };
function hh(e) {
  var t = ph();
  return t ? t.head.querySelector("style[".concat(Or, '="').concat(e, '"]')) : !1;
}
var Fw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!hh(r)) {
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
                return ((i.next = 6), dh[r]());
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
  Lw = (function () {
    var e = X(
      D.mark(function t(r, n) {
        var a, o;
        return D.wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                if (((a = ph()), a)) {
                  s.next = 3;
                  break;
                }
                return s.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !hh(n))
                ) {
                  s.next = 8;
                  break;
                }
                return s.abrupt("return");
              case 8:
                a.head.appendChild(o);
              case 9:
              case "end":
                return s.stop();
            }
        }, t);
      }),
    );
    return function (r, n) {
      return e.apply(this, arguments);
    };
  })(),
  Uw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n;
        return D.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), Fw(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                Lw(n, r);
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
  Nw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n;
        return D.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                ((n = Object.values(r).filter(function (i) {
                  return !!i;
                })),
                  n.forEach(Uw));
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
function hf(e, t) {
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
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Bw = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  qw = typeof window < "u" && "matchMedia" in window,
  Aa = qw ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function gf(e) {
  return e === "auto" ? (Aa != null && Aa.matches ? "dark" : "light") : e;
}
var $w = { body: "_1e0c1bgi" };
function gh(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = y.useState(n),
    i = G(o, 2),
    s = i[0],
    c = i[1],
    u = y.useState(gf(n)),
    l = G(u, 2),
    d = l[0],
    p = l[1],
    v = y.useState(function () {
      return bt(bt({}, Bw), a);
    }),
    g = G(v, 2),
    f = g[0],
    h = g[1],
    b = y.useCallback(function (A) {
      (c(A), p(gf(A)));
    }, []),
    _ = y.useCallback(function (A) {
      h(function (I) {
        return bt(bt({}, I), A);
      });
    }, []),
    m = y.useRef(null),
    k = Yy(),
    w = Tw(),
    O = k && !w;
  (y.useEffect(
    function () {
      if (O || (!k && !w && !de("platform_dst_subtree_theming"))) {
        var A = (function () {
            var C = X(
              D.mark(function j() {
                var U;
                return D.wrap(function (L) {
                  for (;;)
                    switch ((L.prev = L.next)) {
                      case 0:
                        if (!m.current) {
                          L.next = 6;
                          break;
                        }
                        return ((L.next = 3), m.current);
                      case 3:
                        ((U = L.sent), U(), (m.current = null));
                      case 6:
                      case "end":
                        return L.stop();
                    }
                }, j);
              }),
            );
            return function () {
              return C.apply(this, arguments);
            };
          })(),
          I = (function () {
            var C = X(
              D.mark(function j() {
                var U;
                return D.wrap(function (L) {
                  for (;;)
                    switch ((L.prev = L.next)) {
                      case 0:
                        return ((L.next = 2), A());
                      case 2:
                        ((U = Iw(bt(bt({}, f), {}, { colorMode: d }))), (m.current = U));
                      case 4:
                      case "end":
                        return L.stop();
                    }
                }, j);
              }),
            );
            return function () {
              return C.apply(this, arguments);
            };
          })();
        return (
          I(),
          function () {
            A();
          }
        );
      } else Nw(f);
    },
    [k, w, O, d, f],
  ),
    y.useEffect(
      function () {
        if (Aa) {
          var A = kr.bind(Aa, {
            type: "change",
            listener: function (C) {
              s === "auto" && p(C.matches ? "dark" : "light");
            },
          });
          return A;
        }
      },
      [s],
    ));
  var x = bt(bt({}, lh(bt(bt({}, f), {}, { colorMode: d }))), {}, E({}, sw, !0));
  return S.createElement(
    vh.Provider,
    { value: !0 },
    S.createElement(
      fh.Provider,
      { value: d },
      S.createElement(
        jw.Provider,
        { value: b },
        S.createElement(
          Dw.Provider,
          { value: f },
          S.createElement(
            Mw.Provider,
            { value: _ },
            de("platform_dst_subtree_theming")
              ? S.createElement("div", ne({}, x, { className: P([$w.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function bh() {
  var e = y.useContext(fh),
    t = Rc(),
    r = y.useState(t?.colorMode || "light"),
    n = G(r, 2),
    a = n[0],
    o = n[1];
  return (
    y.useEffect(
      function () {
        if (!e) {
          var i = new Ac(function (s) {
            o(s?.colorMode || "light");
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
var zw = function () {
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
  _h = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: zw() });
  },
  Vw = _h(),
  Gw = y.createContext(_h()),
  Hw = function (e) {
    return e.value++;
  },
  Ww = function (e) {
    return e ? e.prefix : "";
  },
  Kw = function (e) {
    var t = e || Vw,
      r = Ww(t),
      n = Hw(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  mh = function () {
    var e = y.useContext(Gw),
      t = y.useState(function () {
        return Kw(e);
      })[0];
    return t;
  },
  Jw = function () {
    var e = mh().uid;
    return e;
  },
  Yw = function () {
    var e = mh().gen;
    return e;
  },
  Cs,
  xo = (Cs = S.useId) !== null && Cs !== void 0 ? Cs : void 0;
function Xw() {
  return xo && de("platform-dst-react-18-use-id")
    ? de("platform-dst-react-18-use-id-selector-safe")
      ? xo().replace(/[:«»]/g, "_")
      : xo()
    : "uid".concat(Jw());
}
function Zw() {
  if (xo && de("platform-dst-react-18-use-id")) {
    var e = Xw();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Yw();
}
var Ic = function (t) {
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
      className: P([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
Ic.displayName = "VisuallyHidden";
var Qw = {
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
  e1 = ["children"];
function t1(e) {
  var t = function (s, c) {
      return s(c);
    },
    r = y.createContext(e);
  function n(i) {
    var s = y.useContext(r),
      c = s || t,
      u = c(i);
    return u;
  }
  function a(i) {
    var s = i.children,
      c = se(i, e1),
      u = n(c);
    return S.createElement(S.Fragment, null, s(u));
  }
  function o(i) {
    var s = y.useContext(r),
      c = i.value || t,
      u = y.useCallback(
        function (l) {
          return c(s, l);
        },
        [s, c],
      );
    return S.createElement(r.Provider, { value: u }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var r1 = t1(function () {
    return { mode: "light" };
  }),
  n1 = r1.useTheme;
function a1(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function o1(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var i1 = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(o1(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = a1(a);
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
  $o = "-moz-",
  ee = "-webkit-",
  yh = "comm",
  jc = "rule",
  Dc = "decl",
  s1 = "@import",
  wh = "@keyframes",
  c1 = "@layer",
  u1 = Math.abs,
  li = String.fromCharCode,
  l1 = Object.assign;
function d1(e, t) {
  return ke(e, 0) ^ 45
    ? (((((((t << 2) ^ ke(e, 0)) << 2) ^ ke(e, 1)) << 2) ^ ke(e, 2)) << 2) ^ ke(e, 3)
    : 0;
}
function kh(e) {
  return e.trim();
}
function f1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function Qs(e, t) {
  return e.indexOf(t);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function qa(e, t, r) {
  return e.slice(t, r);
}
function mt(e) {
  return e.length;
}
function Mc(e) {
  return e.length;
}
function mo(e, t) {
  return (t.push(e), e);
}
function v1(e, t) {
  return e.map(t).join("");
}
var di = 1,
  Jr = 1,
  Oh = 0,
  Ue = 0,
  me = 0,
  rn = "";
function fi(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: di,
    column: Jr,
    length: i,
    return: "",
  };
}
function ma(e, t) {
  return l1(fi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function p1() {
  return me;
}
function h1() {
  return ((me = Ue > 0 ? ke(rn, --Ue) : 0), Jr--, me === 10 && ((Jr = 1), di--), me);
}
function Ge() {
  return ((me = Ue < Oh ? ke(rn, Ue++) : 0), Jr++, me === 10 && ((Jr = 1), di++), me);
}
function Ot() {
  return ke(rn, Ue);
}
function Co() {
  return Ue;
}
function Xa(e, t) {
  return qa(rn, e, t);
}
function $a(e) {
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
function Sh(e) {
  return ((di = Jr = 1), (Oh = mt((rn = e))), (Ue = 0), []);
}
function Eh(e) {
  return ((rn = ""), e);
}
function Po(e) {
  return kh(Xa(Ue - 1, ec(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function g1(e) {
  for (; (me = Ot()) && me < 33; ) Ge();
  return $a(e) > 2 || $a(me) > 3 ? "" : " ";
}
function b1(e, t) {
  for (; --t && Ge() && !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97)); );
  return Xa(e, Co() + (t < 6 && Ot() == 32 && Ge() == 32));
}
function ec(e) {
  for (; Ge(); )
    switch (me) {
      case e:
        return Ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ec(me);
        break;
      case 40:
        e === 41 && ec(e);
        break;
      case 92:
        Ge();
        break;
    }
  return Ue;
}
function _1(e, t) {
  for (; Ge() && e + me !== 57; ) if (e + me === 84 && Ot() === 47) break;
  return "/*" + Xa(t, Ue - 1) + "*" + li(e === 47 ? e : Ge());
}
function m1(e) {
  for (; !$a(Ot()); ) Ge();
  return Xa(e, Ue);
}
function y1(e) {
  return Eh(Ro("", null, null, null, [""], (e = Sh(e)), 0, [0], e));
}
function Ro(e, t, r, n, a, o, i, s, c) {
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
      m = "",
      k = a,
      w = o,
      O = n,
      x = m;
    h;
  )
    switch (((g = _), (_ = Ge()))) {
      case 40:
        if (g != 108 && ke(x, d - 1) == 58) {
          Qs((x += te(Po(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Po(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += g1(g);
        break;
      case 92:
        x += b1(Co() - 1, 7);
        continue;
      case 47:
        switch (Ot()) {
          case 42:
          case 47:
            mo(w1(_1(Ge(), Co()), t, r), c);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        s[u++] = mt(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (b == -1 && (x = te(x, /\f/g, "")),
              v > 0 &&
                mt(x) - d &&
                mo(v > 32 ? _f(x + ";", n, r, d - 1) : _f(te(x, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            x += ";";
          default:
            if ((mo((O = bf(x, t, r, u, l, a, s, m, (k = []), (w = []), d)), o), _ === 123))
              if (l === 0) Ro(x, t, O, O, k, o, d, s, w);
              else
                switch (p === 99 && ke(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ro(
                      e,
                      O,
                      O,
                      n && mo(bf(e, O, O, 0, 0, a, s, m, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      s,
                      n ? k : w,
                    );
                    break;
                  default:
                    Ro(x, O, O, O, [""], w, 0, s, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (m = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + mt(x)), (v = g));
      default:
        if (f < 1) {
          if (_ == 123) --f;
          else if (_ == 125 && f++ == 0 && h1() == 125) continue;
        }
        switch (((x += li(_)), _ * f)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((s[u++] = (mt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (Ot() === 45 && (x += Po(Ge())), (p = Ot()), (l = d = mt((m = x += m1(Co())))), _++);
            break;
          case 45:
            g === 45 && mt(x) == 2 && (f = 0);
        }
    }
  return o;
}
function bf(e, t, r, n, a, o, i, s, c, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = Mc(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, _ = qa(e, d + 1, (d = u1((f = i[g])))), m = e; b < v; ++b)
      (m = kh(f > 0 ? p[b] + " " + _ : te(_, /&\f/g, p[b]))) && (c[h++] = m);
  return fi(e, t, r, a === 0 ? jc : s, c, u, l);
}
function w1(e, t, r) {
  return fi(e, t, r, yh, li(p1()), qa(e, 2, -2), 0);
}
function _f(e, t, r, n) {
  return fi(e, t, r, Dc, qa(e, 0, n), qa(e, n + 1, -1), n);
}
function Wr(e, t) {
  for (var r = "", n = Mc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function k1(e, t, r, n) {
  switch (e.type) {
    case c1:
      if (e.children.length) break;
    case s1:
    case Dc:
      return (e.return = e.return || e.value);
    case yh:
      return "";
    case wh:
      return (e.return = e.value + "{" + Wr(e.children, n) + "}");
    case jc:
      e.value = e.props.join(",");
  }
  return mt((r = Wr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function O1(e) {
  var t = Mc(e);
  return function (r, n, a, o) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, n, a, o) || "";
    return i;
  };
}
function S1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function E1(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var x1 = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Ot()), a === 38 && o === 12 && (r[n] = 1), !$a(o); ) Ge();
    return Xa(t, Ue);
  },
  C1 = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch ($a(a)) {
        case 0:
          (a === 38 && Ot() === 12 && (r[n] = 1), (t[n] += x1(Ue - 1, r, n)));
          break;
        case 2:
          t[n] += Po(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Ot() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += li(a);
      }
    while ((a = Ge()));
    return t;
  },
  P1 = function (t, r) {
    return Eh(C1(Sh(t), r));
  },
  mf = new WeakMap(),
  R1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !mf.get(n)) && !a) {
        mf.set(t, !0);
        for (var o = [], i = P1(r, o), s = n.props, c = 0, u = 0; c < i.length; c++)
          for (var l = 0; l < s.length; l++, u++)
            t.props[u] = o[c] ? i[c].replace(/&\f/g, s[l]) : s[l] + " " + i[c];
      }
    }
  },
  A1 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function xh(e, t) {
  switch (d1(e, t)) {
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
      return ee + e + $o + e + Oe + e + e;
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
      if (mt(e) - 1 - t > 6)
        switch (ke(e, t + 1)) {
          case 109:
            if (ke(e, t + 4) !== 45) break;
          case 102:
            return (
              te(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ee + "$2-$3$1" + $o + (ke(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Qs(e, "stretch") ? xh(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ke(e, t + 1) !== 115) break;
    case 6444:
      switch (ke(e, mt(e) - 3 - (~Qs(e, "!important") && 10))) {
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
var I1 = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Dc:
          t.return = xh(t.value, t.length);
          break;
        case wh:
          return Wr([ma(t, { value: te(t.value, "@", "@" + ee) })], a);
        case jc:
          if (t.length)
            return v1(t.props, function (o) {
              switch (f1(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Wr([ma(t, { props: [te(o, /:(read-\w+)/, ":" + $o + "$1")] })], a);
                case "::placeholder":
                  return Wr(
                    [
                      ma(t, { props: [te(o, /:(plac\w+)/, ":" + ee + "input-$1")] }),
                      ma(t, { props: [te(o, /:(plac\w+)/, ":" + $o + "$1")] }),
                      ma(t, { props: [te(o, /:(plac\w+)/, Oe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  j1 = [I1],
  D1 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || j1,
      o = {},
      i,
      s = [];
    ((i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var h = f.getAttribute("data-emotion").split(" "), b = 1; b < h.length; b++)
            o[h[b]] = !0;
          s.push(f);
        },
      ));
    var c,
      u = [R1, A1];
    {
      var l,
        d = [
          k1,
          S1(function (f) {
            l.insert(f);
          }),
        ],
        p = O1(u.concat(a, d)),
        v = function (h) {
          return Wr(y1(h), p);
        };
      c = function (h, b, _, m) {
        ((l = _), v(h ? h + "{" + b.styles + "}" : b.styles), m && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new i1({
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
      insert: c,
    };
    return (g.sheet.hydrate(s), g);
  },
  Ps = { exports: {} },
  re = {};
var yf;
function M1() {
  if (yf) return re;
  yf = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    o = e ? Symbol.for("react.profiler") : 60114,
    i = e ? Symbol.for("react.provider") : 60109,
    s = e ? Symbol.for("react.context") : 60110,
    c = e ? Symbol.for("react.async_mode") : 60111,
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
  function m(w) {
    if (typeof w == "object" && w !== null) {
      var O = w.$$typeof;
      switch (O) {
        case t:
          switch (((w = w.type), w)) {
            case c:
            case u:
            case n:
            case o:
            case a:
            case d:
              return w;
            default:
              switch (((w = w && w.$$typeof), w)) {
                case s:
                case l:
                case g:
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
    return m(w) === u;
  }
  return (
    (re.AsyncMode = c),
    (re.ConcurrentMode = u),
    (re.ContextConsumer = s),
    (re.ContextProvider = i),
    (re.Element = t),
    (re.ForwardRef = l),
    (re.Fragment = n),
    (re.Lazy = g),
    (re.Memo = v),
    (re.Portal = r),
    (re.Profiler = o),
    (re.StrictMode = a),
    (re.Suspense = d),
    (re.isAsyncMode = function (w) {
      return k(w) || m(w) === c;
    }),
    (re.isConcurrentMode = k),
    (re.isContextConsumer = function (w) {
      return m(w) === s;
    }),
    (re.isContextProvider = function (w) {
      return m(w) === i;
    }),
    (re.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (re.isForwardRef = function (w) {
      return m(w) === l;
    }),
    (re.isFragment = function (w) {
      return m(w) === n;
    }),
    (re.isLazy = function (w) {
      return m(w) === g;
    }),
    (re.isMemo = function (w) {
      return m(w) === v;
    }),
    (re.isPortal = function (w) {
      return m(w) === r;
    }),
    (re.isProfiler = function (w) {
      return m(w) === o;
    }),
    (re.isStrictMode = function (w) {
      return m(w) === a;
    }),
    (re.isSuspense = function (w) {
      return m(w) === d;
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
          (w.$$typeof === g ||
            w.$$typeof === v ||
            w.$$typeof === i ||
            w.$$typeof === s ||
            w.$$typeof === l ||
            w.$$typeof === h ||
            w.$$typeof === b ||
            w.$$typeof === _ ||
            w.$$typeof === f))
      );
    }),
    (re.typeOf = m),
    re
  );
}
var wf;
function T1() {
  return (wf || ((wf = 1), (Ps.exports = M1())), Ps.exports);
}
var Rs, kf;
function F1() {
  if (kf) return Rs;
  kf = 1;
  var e = T1(),
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
  var s = Object.defineProperty,
    c = Object.getOwnPropertyNames,
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
      var _ = c(f);
      u && (_ = _.concat(u(f)));
      for (var m = i(g), k = i(f), w = 0; w < _.length; ++w) {
        var O = _[w];
        if (!r[O] && !(h && h[O]) && !(k && k[O]) && !(m && m[O])) {
          var x = l(f, O);
          try {
            s(g, O, x);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((Rs = v), Rs);
}
F1();
var L1 = !0;
function Ch(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Tc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || L1 === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Ph = function (t, r, n) {
    Tc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function U1(e) {
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
var N1 = {
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
  B1 = /[A-Z]|^ms/g,
  q1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Rh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Of = function (t) {
    return t != null && typeof t != "boolean";
  },
  As = E1(function (e) {
    return Rh(e) ? e : e.replace(B1, "-$&").toLowerCase();
  }),
  Sf = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(q1, function (n, a, o) {
            return ((yt = { name: a, styles: o, next: yt }), a);
          });
    }
    return N1[t] !== 1 && !Rh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function za(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((yt = { name: a.name, styles: a.styles, next: yt }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((yt = { name: i.name, styles: i.styles, next: yt }), (i = i.next));
        var s = o.styles + ";";
        return s;
      }
      return $1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = yt,
          u = r(e);
        return ((yt = c), za(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function $1(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += za(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0
          ? (n += o + "{" + t[s] + "}")
          : Of(s) && (n += As(o) + ":" + Sf(o, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++) Of(i[c]) && (n += As(o) + ":" + Sf(o, i[c]) + ";");
      else {
        var u = za(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += As(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var Ef = /label:\s*([^\s;{]+)\s*(;|$)/g,
  yt;
function Fc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  yt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += za(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += za(r, t, e[s])), n)) {
      var c = o;
      a += c[s];
    }
  Ef.lastIndex = 0;
  for (var u = "", l; (l = Ef.exec(a)) !== null; ) u += "-" + l[1];
  var d = U1(a) + u;
  return { name: d, styles: a, next: yt };
}
var z1 = function (t) {
    return t();
  },
  V1 = uu.useInsertionEffect ? uu.useInsertionEffect : !1,
  Ah = V1 || z1,
  Ih = y.createContext(typeof HTMLElement < "u" ? D1({ key: "css" }) : null);
Ih.Provider;
var jh = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(Ih);
      return t(r, a, n);
    });
  },
  Dh = y.createContext({}),
  Lc = {}.hasOwnProperty,
  tc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  G1 = function (t, r) {
    var n = {};
    for (var a in r) Lc.call(r, a) && (n[a] = r[a]);
    return ((n[tc] = t), n);
  },
  H1 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Tc(r, n, a),
      Ah(function () {
        return Ph(r, n, a);
      }),
      null
    );
  },
  W1 = jh(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[tc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Ch(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var s = Fc(o, void 0, y.useContext(Dh));
    i += t.key + "-" + s.name;
    var c = {};
    for (var u in e) Lc.call(e, u) && u !== "css" && u !== tc && (c[u] = e[u]);
    return (
      (c.className = i),
      r && (c.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(H1, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        y.createElement(a, c),
      )
    );
  }),
  K1 = W1,
  Lt = function (t, r) {
    var n = arguments;
    if (r == null || !Lc.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = K1), (o[1] = G1(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return y.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Lt || (Lt = {}));
function It() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Fc(t);
}
var J1 = function e(t) {
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
            for (var s in o) o[s] && s && (i && (i += " "), (i += s));
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
function Y1(e, t, r) {
  var n = [],
    a = Ch(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var X1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Ah(function () {
        for (var a = 0; a < n.length; a++) Ph(r, n[a], !1);
      }),
      null
    );
  },
  Z1 = jh(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        var d = Fc(u, t.registered);
        return (r.push(d), Tc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        return Y1(t.registered, n, J1(u));
      },
      o = { css: n, cx: a, theme: y.useContext(Dh) },
      i = e.children(o);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(X1, { cache: t, serializedArr: r }),
      i,
    );
  });
function Q1(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Mh = 2,
  rc = It({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Mh,
  }),
  nc = It({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Mh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  ek = It({
    "&:focus": rc,
    "&:focus-visible": rc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  tk = It({
    "&:focus": nc,
    "&:focus-visible": nc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Th = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? nc : rc,
      o = r ? tk : ek,
      i = typeof n > "u" ? o : n === "on" && a;
    return Lt(Z1, null, function (s) {
      var c = s.css,
        u = s.cx;
      return y.Children.only(
        i ? y.cloneElement(t, { className: u([c(i), t.props.className]) }) : t,
      );
    });
  });
Th.displayName = "FocusRing";
function Ft(e) {
  (e.preventDefault(), e.stopPropagation());
}
var rk = 9;
function xf(e) {
  e.keyCode !== rk && Ft(e);
}
var nk = {
    onMouseDownCapture: Ft,
    onMouseUpCapture: Ft,
    onKeyDownCapture: xf,
    onKeyUpCapture: xf,
    onTouchStartCapture: Ft,
    onTouchEndCapture: Ft,
    onPointerDownCapture: Ft,
    onPointerUpCapture: Ft,
    onClickCapture: Ft,
    onClick: Ft,
  },
  ak = {};
function ok(e) {
  var t = e.isInteractive;
  return t ? ak : nk;
}
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
function Te(e) {
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
var Jt = 8,
  Is = ["default", "primary", "danger", "warning"],
  ac = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  ik = { default: ac.default, compact: ac.compact, none: "inherit" },
  sk = {
    default: "0 ".concat(Jt + Jt / 4, "px"),
    compact: "0 ".concat(Jt + Jt / 4, "px"),
    none: "0",
  },
  ck = { compact: "0 ".concat(Jt / 4, "px"), default: "0 ".concat(Jt / 4, "px"), none: "0" },
  uk = { default: "middle", compact: "middle", none: "baseline" },
  Fh = { content: "0 ".concat(Jt / 4, "px"), icon: "0 ".concat(Jt / 4, "px") },
  Lh = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  lk = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Te(Te({}, Lh), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  dk = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  fk = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  vk = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  pk = {
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
  hk = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  gk = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  bk = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Te(
      Te({}, Lh),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  _k = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function mk(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return Te(
    Te(
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
        height: ac[r],
        lineHeight: ik[r],
        padding: o ? ck[r] : sk[r],
        verticalAlign: uk[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? bk
        : Te(
            Te(
              Te(
                Te(
                  Te(
                    Te(
                      Te(Te({}, t === "default" && lk), t === "primary" && dk),
                      t === "link" && fk,
                    ),
                    t === "subtle" && vk,
                  ),
                  t === "subtle-link" && pk,
                ),
                t === "warning" && hk,
              ),
              t === "danger" && gk,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Is.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Is.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Is.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            _k,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Pf(e) {
  var t = e.spacing;
  return It({
    display: "flex",
    margin: t === "none" ? 0 : Fh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function yk(e) {
  var t = e.spacing;
  return It({
    margin: t === "none" ? 0 : Fh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function wk(e) {
  var t = e.hasOverlay;
  return It({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var kk = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Uc = function (t) {
    return t && y.isValidElement(t) && t.type === Ic;
  },
  Ok = [
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
  Sk = { "> *": { pointerEvents: "none" } },
  Ek = It({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  xk = It({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Rf = function (t, r) {
    return !t || Uc(t) ? null : r;
  },
  Ck = function (t, r) {
    return Uc(t) ? t : t ? Lt("span", { css: r }, t) : null;
  },
  Pk = S.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      s = i === void 0 ? !1 : i,
      c = t.buttonCss,
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
      m = t.isSelected,
      k = m === void 0 ? !1 : m,
      w = t.onBlur,
      O = t.onClick,
      x = O === void 0 ? Ee : O,
      A = t.onFocus,
      I = t.onMouseDown,
      C = I === void 0 ? Ee : I,
      j = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      z = U === void 0 ? "default" : U,
      L = t.tabIndex,
      J = L === void 0 ? 0 : L,
      H = t.type,
      W = H === void 0 ? (d ? void 0 : "button") : H,
      N = t.testId,
      B = se(t, Ok),
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
    Q1(V, s);
    var ie = y.useContext(Ec),
      ce = y.useCallback(
        function (pe, qe) {
          (ie && ie.tracePress(h, pe.timeStamp), x(pe, qe));
        },
        [x, ie, h],
      ),
      we = Ua({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "23.9.3",
        analyticsData: n,
      }),
      T = y.useCallback(
        function (pe) {
          (pe.preventDefault(), C(pe));
        },
        [C],
      );
    y.useEffect(
      function () {
        var pe = V.current;
        _ && pe && pe === document.activeElement && pe.blur();
      },
      [_],
    );
    var ye = !!j,
      Be = It(wk({ hasOverlay: ye })),
      ve = !_ && !ye,
      Re = {};
    return (
      (k || _ || o === "warning") &&
        (Re = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || _
                ? "var(--ds-icon-subtle, ".concat(Gs, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Gs, ")"),
              " !important",
            ),
          },
        }),
      Lt(
        Th,
        null,
        Lt(
          v,
          ne(
            {},
            B,
            {
              ref: ae,
              className: l,
              css: [c, ve ? null : Sk],
              "data-has-overlay": ye ? !0 : void 0,
              "data-testid": N,
              disabled: _,
              href: ve ? d : void 0,
              onBlur: w,
              onClick: we,
              onFocus: A,
              onMouseDown: T,
              tabIndex: _ ? -1 : J,
              type: W,
            },
            ok({ isInteractive: ve }),
          ),
          f ? Lt("span", { css: [Be, Pf({ spacing: z }), Rf(u, Ek)] }, f) : null,
          Ck(u, [Be, yk({ spacing: z })]),
          g ? Lt("span", { css: [Be, Pf({ spacing: z }), Rf(u, xk)] }, g) : null,
          j ? Lt("span", { css: [kk, Re] }, j) : null,
        ),
      )
    );
  });
function Rk(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Uc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var Ak = [
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
  Af = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Nc = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        u = c === void 0 ? !1 : c,
        l = t.onMouseDown,
        d = l === void 0 ? Ee : l,
        p = t.onMouseUp,
        v = p === void 0 ? Ee : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        _ = se(t, Ak),
        m = n1(),
        k = m.mode,
        w = Rk({ children: o, iconBefore: i, iconAfter: s }),
        O = y.useState(!1),
        x = G(O, 2),
        A = x[0],
        I = x[1],
        C = y.useCallback(
          function (z) {
            (d(z), Af && I(!0));
          },
          [d, I],
        ),
        j = y.useCallback(
          function (z) {
            (v(z), Af && I(!1));
          },
          [v, I],
        ),
        U = y.useMemo(
          function () {
            return mk({
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
        Pk,
        ne({}, _, {
          ref: r,
          appearance: a,
          buttonCss: U,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: s,
          iconBefore: i,
          isSelected: u,
          onMouseDown: C,
          onMouseUp: j,
          spacing: b,
        }),
      );
    }),
  );
Nc.displayName = "Button";
function If(e) {
  return S.createElement(Nc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function Ik(e) {
  return S.createElement(Nc, ne({}, e, { appearance: "subtle" }));
}
var jk = { container: "_1e0c1txw _kqswh2mm" };
function Dk(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return S.createElement(
    si,
    { as: "li", testId: r, key: t, xcss: jk.container, paddingInline: "space.100" },
    S.createElement(
      qy,
      { testId: r && "".concat(r, "-text") },
      S.createElement(Ic, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var jf = {},
  Df =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function Mk(e, t) {
  return !!(e === t || (Df(e) && Df(t)));
}
function Tk(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Mk(e[r], t[r])) return !1;
  return !0;
}
function Fk(e, t) {
  t === void 0 && (t = Tk);
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
var Lk = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    s = n.transform,
    c = t.length,
    u = c > o,
    l = u && o - 4 < r,
    d = u && r < c - o + 3,
    p = Fk(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      return t.slice(h, b).map(function (_, m) {
        return s(_, h + m, a);
      });
    });
  if (!u) return p(0, c);
  if (l && !d) {
    var v = o - 2;
    return [].concat(
      Se(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - v })],
      Se(p(c - v)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Se(p(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: c - 1 })],
      Se(p(c - 1)),
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
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    Se(p(c - 1)),
  );
};
function Mf(e, t) {
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
function Uk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mf(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var oc = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect4ttxp",
    navigatorIconWrapper: "_18zr12x7",
  },
  Nk = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function Tf(e) {
  var t = e.chevronDirection,
    r = t === "left" ? cy : dy;
  return S.createElement(
    si,
    { as: "span", xcss: oc.navigatorIconWrapper },
    S.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function Bk(e, t) {
  var r = e.components,
    n = r === void 0 ? jf : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? "pagination" : s,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    p = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    g = v === void 0 ? "next" : v,
    f = e.style,
    h = f === void 0 ? jf : f,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    m = e.onChange,
    k = m === void 0 ? Ee : m,
    w = e.pages,
    O = e.getPageLabel,
    x = e.renderEllipsis,
    A = x === void 0 ? Dk : x,
    I = e.analyticsContext,
    C = e.testId,
    j = e.isDisabled,
    U = ty(i, function () {
      return o || 0;
    }),
    z = G(U, 2),
    L = z[0],
    J = z[1],
    H = Ua(
      Uk(
        {
          fn: function (B, V) {
            var ae = B.event,
              ie = B.selectedPageIndex;
            (i === void 0 && J(ie), k && k(ae, w[ie], V));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        Nk,
      ),
    ),
    W = function (B, V, ae) {
      var ie = w[L],
        ce = "".concat(l, " ").concat(O ? O(B, V) : B),
        we = B === ie;
      return S.createElement(
        Eo,
        { as: "li", xcss: oc.paginationMenuItem, key: "page-".concat(O ? O(B, V) : V) },
        S.createElement(
          Ik,
          {
            component: n.Page,
            onClick: function (ye) {
              return H({ event: ye, selectedPageIndex: V });
            },
            "aria-current": we ? "page" : void 0,
            "aria-label": ce,
            isSelected: we,
            isDisabled: j,
            page: B,
            testId:
              ae &&
              ""
                .concat(ae, "--")
                .concat(we ? "current-" : "", "page-")
                .concat(V),
          },
          O ? O(B, V) : B,
        ),
      );
    };
  return S.createElement(
    si,
    { testId: C, style: h, ref: t, "aria-label": c, as: "nav" },
    S.createElement(
      Eo,
      { space: "space.0", alignBlock: "center" },
      S.createElement(If, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (B) {
          return H({ event: B, selectedPageIndex: L - 1 });
        },
        isDisabled: j || L === 0,
        iconBefore: S.createElement(Tf, { chevronDirection: "left" }),
        "aria-label": p,
        testId: C && "".concat(C, "--left-navigator"),
      }),
      S.createElement(
        Eo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: oc.paginationMenu },
        Lk(w, L, { max: _, ellipsis: A, transform: W }, C),
      ),
      S.createElement(If, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (B) {
          return H({ event: B, selectedPageIndex: L + 1 });
        },
        isDisabled: j || L === w.length - 1,
        iconBefore: S.createElement(Tf, { chevronDirection: "right" }),
        "aria-label": g,
        testId: C && "".concat(C, "--right-navigator"),
      }),
    ),
  );
}
var qk = y.memo(y.forwardRef(Bk));
function $k(e, t, r) {
  return (
    (t = Q(t)),
    We(e, Uh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Uh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Uh = function () {
    return !!e;
  })();
}
var zk = (function (e) {
    function t() {
      var r;
      he(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = $k(this, t, [].concat(a))),
        E(r, "onChange", function (i, s, c) {
          r.props.onChange(s, c);
        }),
        r
      );
    }
    return (
      Ke(t, e),
      ge(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.total,
              o = n.value,
              i = o === void 0 ? 1 : o,
              s = n.i18n,
              c = n.testId,
              u = n.isDisabled,
              l = Se(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return S.createElement(qk, {
              selectedIndex: d,
              isDisabled: u,
              label: s?.label,
              nextLabel: s?.next,
              previousLabel: s?.prev,
              pageLabel: s?.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: c && "".concat(c, "--pagination"),
            });
          },
        },
      ])
    );
  })(S.Component),
  Vk = ["isRanking", "testId"],
  Gk = [
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
function Ff(e, t) {
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
      ? Ff(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ff(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Lf = "--local-dynamic-table-text-color",
  Hk = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = se(t, Vk);
    return y.createElement(
      "thead",
      ne({ "data-testid": n }, a, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Wk = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      u = se(e, Gk),
      l = ya(
        ya(ya({}, s), r && Tp({ width: r })),
        {},
        E({}, Lf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === hr,
      p = a === No,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return y.createElement(
      g,
      ne({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": c }, u, {
        className: P([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ya(
          ya({}, l),
          {},
          { "--_17ckjys": Dp("var(--ds-text-subtle, ".concat("var(".concat(Lf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function Kk(e, t, r) {
  return (
    (t = Q(t)),
    We(e, Nh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Nh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Nh = function () {
    return !!e;
  })();
}
function Jk(e) {
  return (function (t) {
    function r() {
      var n;
      he(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = Kk(this, r, [].concat(o))),
        E(n, "state", { refWidth: 0, refHeight: 0 }),
        E(n, "innerRef", function (s) {
          s && !n.props.isRanking && (n.ref = s);
        }),
        E(n, "updateDimensions", function () {
          if (n.ref) {
            var s = n.ref.getBoundingClientRect(),
              c = s.width,
              u = s.height;
            (c !== n.state.refWidth || u !== n.state.refHeight) &&
              n.setState({ refWidth: c, refHeight: u });
          }
        }),
        n
      );
    }
    return (
      Ke(r, t),
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
  Uf;
function Yk() {
  if (Uf) return wa;
  ((Uf = 1), Object.defineProperty(wa, "__esModule", { value: !0 }), (wa.default = void 0));
  var e = r(wr()),
    t = r(ii);
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
var Xk = Yk();
const Zk = Qt(Xk);
var ka = {},
  Nf;
function Qk() {
  if (Nf) return ka;
  ((Nf = 1), Object.defineProperty(ka, "__esModule", { value: !0 }), (ka.default = void 0));
  var e = r(wr()),
    t = r(ii);
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
var eO = Qk();
const tO = Qt(eO);
var rO = "Escape";
function nO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (i) {
        r || n.current || i.key !== rO || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!r)
        return kr.bindAll(
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
function qr(e) {
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
var aO = y.createContext(null),
  oO = y.createContext(null);
function iO() {
  var e = y.useContext(oO);
  return e;
}
function sO(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = y.useContext(aO),
    o = iO();
  y.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var xa = { none: 0, small: 100, medium: 350, large: 700 },
  js = 0.5,
  cO = { none: xa.none, small: xa.small * js, medium: xa.medium * js, large: xa.large * js },
  uO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  lO = function () {
    if (!uO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  dO = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  fO = function () {
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
      }, dO(t)),
      y.useCallback(function (n, a) {
        for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
          i[s - 2] = arguments[s];
        var c = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (u) {
                return u !== c;
              })),
                n());
            },
            a,
          ].concat(i),
        );
        r.current.push(c);
      }, [])
    );
  },
  Bh = { appear: !0, isExiting: !1 },
  qh = y.createContext(Bh),
  Bf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Bh;
    return S.createElement(qh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  qf = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  vO = function (t, r) {
    for (var n = r.concat([]), a = pO(r), o = 0; o < t.length; o++) {
      var i = t[o],
        s = !a[i.key];
      s && n.splice(o + 1, 0, i);
    }
    return n;
  },
  pO = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  hO = function (t, r) {
    for (
      var n = new Set(
          t.map(function (c) {
            return c.key;
          }),
        ),
        a = new Set(),
        o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o],
        s = i.key;
      n.has(s) || a.add(s);
    }
    return a;
  },
  $h = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = y.useState([null, n]),
      i = G(o, 2),
      s = i[0],
      c = i[1],
      u = y.useState([]),
      l = G(u, 2),
      d = l[0],
      p = l[1],
      v = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = G(v, 2),
      f = g[0],
      h = g[1];
    if (
      (y.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = G(s, 2),
      _ = b[0],
      m = b[1],
      k = qf(_),
      w = qf(m);
    m !== n && c([m, n]);
    var O = hO(w, k),
      x = !!O.size,
      A = w;
    if ((x && (A = vO(w, k)), a))
      if (d.length) A = d;
      else {
        var I = A.filter(function (C) {
          return O.has(C.key);
        });
        I.length && p(I);
      }
    return (
      O.size
        ? (A = A.map(function (C) {
            var j = O.has(C.key);
            return Bf(C, {
              appear: !0,
              isExiting: j,
              onFinish: j
                ? function () {
                    (O.delete(C.key), O.size === 0 && (c([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (C) {
            return Bf(C, f);
          })),
      A
    );
  }),
  gO = function () {
    return y.useContext(qh);
  };
$h.displayName = "ExitingPersistence";
function bO() {
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
var _O = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ee };
  }),
  mO = function () {
    var t = bO(),
      r = y.useContext(_O);
    return r(t);
  },
  yO = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      a = t.animationTimingFunctionExiting,
      o = a === void 0 ? n : a,
      i = t.enteringAnimation,
      s = t.exitingAnimation,
      c = s === void 0 ? i : s,
      u = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      p = d === void 0 ? "large" : d,
      v = mO(),
      g = gO(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      _ = fO(),
      m = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      O = y.useState(b),
      x = G(O, 2),
      A = x[0],
      I = x[1];
    return (
      y.useEffect(
        function () {
          var C = !1;
          if (!m) {
            if (!b) {
              l && l(w);
              return;
            }
            var j = function () {
              (w === "exiting" && h?.(), C || I(!1), l?.(w));
            };
            if (lO()) {
              j();
              return;
            }
            return (
              I(!0),
              _(j, f ? cO[p] : xa[p] + k),
              function () {
                C = !0;
              }
            );
          }
        },
        [h, w, f, p, k, m, _],
      ),
      r(
        {
          ref: v.ref,
          className: A
            ? P([
                P(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                m && P(["_1y0ctrqk"]),
                p === "small" && P(["_5sag1yx9"]),
                p === "medium" && P(["_5sag1ttt"]),
                p === "large" && P(["_5sagpwmj"]),
                f && p === "small" && P(["_5sag14ed"]),
                f && p === "medium" && P(["_5sagluct"]),
                f && p === "large" && P(["_5sag1ttt"]),
                f && P(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && P(["_1pglp3kn"]),
                !f && n === "ease-out" && P(["_1pgldkwg"]),
                !f && n === "ease-in" && P(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && P(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && P(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && P(["_1pglannl"]),
                !f && n === "ease-in-out" && P(["_1pgl1fu8"]),
                f && n === "linear" && P(["_1pglp3kn"]),
                f && o === "ease-out" && P(["_1pgldkwg"]),
                f && o === "ease-in" && P(["_1pgl1nzg"]),
                f && o === "ease-in-40-out" && P(["_1pgl5y64"]),
                f && o === "ease-in-60-out" && P(["_1pgl1ddy"]),
                f && o === "ease-in-80-out" && P(["_1pglannl"]),
                f && o === "ease-in-out" && P(["_1pgl1fu8"]),
                ((!f && i === "fade-in") || (f && c === "fade-in")) && P(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && c === "fade-out")) && P(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && c === "zoom-in")) && P(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && c === "zoom-out")) && P(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && c === "slide-in-from-top")) &&
                  P(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && c === "slide-out-from-top")) &&
                  P(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && c === "slide-in-from-right")) &&
                  P(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && c === "slide-out-from-right")) &&
                  P(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && c === "slide-in-from-bottom")) &&
                  P(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && c === "slide-out-from-bottom")) &&
                  P(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && c === "slide-in-from-left")) &&
                  P(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && c === "slide-out-from-left")) &&
                  P(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && c === "fade-in-from-top")) &&
                  P(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && c === "fade-out-from-top")) &&
                  P(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && c === "fade-in-from-left")) &&
                  P(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && c === "fade-out-from-left")) &&
                  P(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && c === "fade-in-from-bottom")) &&
                  P(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && c === "fade-out-from-bottom")) &&
                  P(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && c === "fade-in-from-right")) &&
                  P(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && c === "fade-out-from-right")) &&
                  P(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && c === "fade-in-from-top-constant")) &&
                  P(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && c === "fade-out-from-top-constant")) &&
                  P(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && c === "fade-in-from-left-constant")) &&
                  P(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && c === "fade-out-from-left-constant")) &&
                  P(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && c === "fade-in-from-bottom-constant")) &&
                  P(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && c === "fade-out-from-bottom-constant")) &&
                  P(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && c === "fade-in-from-right-constant")) &&
                  P(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && c === "fade-out-from-right-constant")) &&
                  P(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  wO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  kO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? wO[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return S.createElement(
      yO,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(c === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: p,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  OO = y.createContext();
y.createContext();
var SO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  EO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  xO = function (t, r) {
    if (typeof t == "function") return EO(t, r);
    t != null && (t.current = r);
  },
  $f = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  zf =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Fe = "top",
  nt = "bottom",
  at = "right",
  Le = "left",
  Bc = "auto",
  Za = [Fe, nt, at, Le],
  Yr = "start",
  Va = "end",
  CO = "clippingParents",
  zh = "viewport",
  Oa = "popper",
  PO = "reference",
  Vf = Za.reduce(function (e, t) {
    return e.concat([t + "-" + Yr, t + "-" + Va]);
  }, []),
  Vh = [].concat(Za, [Bc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Yr, t + "-" + Va]);
  }, []),
  RO = "beforeRead",
  AO = "read",
  IO = "afterRead",
  jO = "beforeMain",
  DO = "main",
  MO = "afterMain",
  TO = "beforeWrite",
  FO = "write",
  LO = "afterWrite",
  UO = [RO, AO, IO, jO, DO, MO, TO, FO, LO];
function Rt(e) {
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
function gr(e) {
  var t = He(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = He(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = He(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function NO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !rt(o) ||
      !Rt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var s = a[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function BO(e) {
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
          s = i.reduce(function (c, u) {
            return ((c[u] = ""), c);
          }, {});
        !rt(a) ||
          !Rt(a) ||
          (Object.assign(a.style, s),
          Object.keys(o).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const qO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: NO,
  effect: BO,
  requires: ["computeStyles"],
};
function St(e) {
  return e.split("-")[0];
}
var vr = Math.max,
  zo = Math.min,
  Xr = Math.round;
function ic() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Gh() {
  return !/^((?!chrome|android).)*safari/i.test(ic());
}
function Zr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    rt(e) &&
    ((a = (e.offsetWidth > 0 && Xr(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && Xr(n.height) / e.offsetHeight) || 1));
  var i = gr(e) ? He(e) : window,
    s = i.visualViewport,
    c = !Gh() && r,
    u = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (c && s ? s.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function $c(e) {
  var t = Zr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Hh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && qc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function zt(e) {
  return He(e).getComputedStyle(e);
}
function $O(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function er(e) {
  return ((gr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vi(e) {
  return Rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (qc(e) ? e.host : null) || er(e);
}
function Gf(e) {
  return !rt(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function zO(e) {
  var t = /firefox/i.test(ic()),
    r = /Trident/i.test(ic());
  if (r && rt(e)) {
    var n = zt(e);
    if (n.position === "fixed") return null;
  }
  var a = vi(e);
  for (qc(a) && (a = a.host); rt(a) && ["html", "body"].indexOf(Rt(a)) < 0; ) {
    var o = zt(a);
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
function Qa(e) {
  for (var t = He(e), r = Gf(e); r && $O(r) && zt(r).position === "static"; ) r = Gf(r);
  return r && (Rt(r) === "html" || (Rt(r) === "body" && zt(r).position === "static"))
    ? t
    : r || zO(e) || t;
}
function zc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ia(e, t, r) {
  return vr(e, zo(t, r));
}
function VO(e, t, r) {
  var n = Ia(e, t, r);
  return n > r ? r : n;
}
function Wh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Kh(e) {
  return Object.assign({}, Wh(), e);
}
function Jh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var GO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Kh(typeof t != "number" ? t : Jh(t, Za))
  );
};
function HO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    s = St(r.placement),
    c = zc(s),
    u = [Le, at].indexOf(s) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = GO(a.padding, r),
      p = $c(o),
      v = c === "y" ? Fe : Le,
      g = c === "y" ? nt : at,
      f = r.rects.reference[l] + r.rects.reference[c] - i[c] - r.rects.popper[l],
      h = i[c] - r.rects.reference[c],
      b = Qa(o),
      _ = b ? (c === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      m = f / 2 - h / 2,
      k = d[v],
      w = _ - p[l] - d[g],
      O = _ / 2 - p[l] / 2 + m,
      x = Ia(k, O, w),
      A = c;
    r.modifiersData[n] = ((t = {}), (t[A] = x), (t.centerOffset = x - O), t);
  }
}
function WO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Hh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const KO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: HO,
  effect: WO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Qr(e) {
  return e.split("-")[1];
}
var JO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function YO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Xr(r * a) / a || 0, y: Xr(n * a) / a || 0 };
}
function Hf(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    o = e.variation,
    i = e.offsets,
    s = e.position,
    c = e.gpuAcceleration,
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
    m = Le,
    k = Fe,
    w = window;
  if (u) {
    var O = Qa(r),
      x = "clientHeight",
      A = "clientWidth";
    if (
      (O === He(r) &&
        ((O = er(r)),
        zt(O).position !== "static" &&
          s === "absolute" &&
          ((x = "scrollHeight"), (A = "scrollWidth"))),
      (O = O),
      a === Fe || ((a === Le || a === at) && o === Va))
    ) {
      k = nt;
      var I = d && O === w && w.visualViewport ? w.visualViewport.height : O[x];
      ((f -= I - n.height), (f *= c ? 1 : -1));
    }
    if (a === Le || ((a === Fe || a === nt) && o === Va)) {
      m = at;
      var C = d && O === w && w.visualViewport ? w.visualViewport.width : O[A];
      ((v -= C - n.width), (v *= c ? 1 : -1));
    }
  }
  var j = Object.assign({ position: s }, u && JO),
    U = l === !0 ? YO({ x: v, y: f }, He(r)) : { x: v, y: f };
  if (((v = U.x), (f = U.y), c)) {
    var z;
    return Object.assign(
      {},
      j,
      ((z = {}),
      (z[k] = _ ? "0" : ""),
      (z[m] = b ? "0" : ""),
      (z.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    j,
    ((t = {}), (t[k] = _ ? f + "px" : ""), (t[m] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function XO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    u = {
      placement: St(t.placement),
      variation: Qr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Hf(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: c,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Hf(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    })));
}
const ZO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: XO, data: {} };
var yo = { passive: !0 };
function QO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    c = He(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, yo);
      }),
    s && c.addEventListener("resize", r.update, yo),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, yo);
        }),
        s && c.removeEventListener("resize", r.update, yo));
    }
  );
}
const eS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: QO,
  data: {},
};
var tS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ao(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return tS[t];
  });
}
var rS = { start: "end", end: "start" };
function Wf(e) {
  return e.replace(/start|end/g, function (t) {
    return rS[t];
  });
}
function Vc(e) {
  var t = He(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Gc(e) {
  return Zr(er(e)).left + Vc(e).scrollLeft;
}
function nS(e, t) {
  var r = He(e),
    n = er(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = Gh();
    (u || (!u && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: o, height: i, x: s + Gc(e), y: c };
}
function aS(e) {
  var t,
    r = er(e),
    n = Vc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = vr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = vr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + Gc(e),
    c = -n.scrollTop;
  return (
    zt(a || r).direction === "rtl" && (s += vr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: c }
  );
}
function Hc(e) {
  var t = zt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Yh(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0
    ? e.ownerDocument.body
    : rt(e) && Hc(e)
      ? e
      : Yh(vi(e));
}
function ja(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Yh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = He(n),
    i = a ? [o].concat(o.visualViewport || [], Hc(n) ? n : []) : n,
    s = t.concat(i);
  return a ? s : s.concat(ja(vi(i)));
}
function sc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function oS(e, t) {
  var r = Zr(e, !1, t === "fixed");
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
function Kf(e, t, r) {
  return t === zh ? sc(nS(e, r)) : gr(t) ? oS(t, r) : sc(aS(er(e)));
}
function iS(e) {
  var t = ja(vi(e)),
    r = ["absolute", "fixed"].indexOf(zt(e).position) >= 0,
    n = r && rt(e) ? Qa(e) : e;
  return gr(n)
    ? t.filter(function (a) {
        return gr(a) && Hh(a, n) && Rt(a) !== "body";
      })
    : [];
}
function sS(e, t, r, n) {
  var a = t === "clippingParents" ? iS(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    s = o.reduce(
      function (c, u) {
        var l = Kf(e, u, n);
        return (
          (c.top = vr(l.top, c.top)),
          (c.right = zo(l.right, c.right)),
          (c.bottom = zo(l.bottom, c.bottom)),
          (c.left = vr(l.left, c.left)),
          c
        );
      },
      Kf(e, i, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Xh(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? St(n) : null,
    o = n ? Qr(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case Fe:
      c = { x: i, y: t.y - r.height };
      break;
    case nt:
      c = { x: i, y: t.y + t.height };
      break;
    case at:
      c = { x: t.x + t.width, y: s };
      break;
    case Le:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = a ? zc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case Yr:
        c[u] = c[u] - (t[l] / 2 - r[l] / 2);
        break;
      case Va:
        c[u] = c[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return c;
}
function Ga(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    s = r.boundary,
    c = s === void 0 ? CO : s,
    u = r.rootBoundary,
    l = u === void 0 ? zh : u,
    d = r.elementContext,
    p = d === void 0 ? Oa : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = Kh(typeof h != "number" ? h : Jh(h, Za)),
    _ = p === Oa ? PO : Oa,
    m = e.rects.popper,
    k = e.elements[g ? _ : p],
    w = sS(gr(k) ? k : k.contextElement || er(e.elements.popper), c, l, i),
    O = Zr(e.elements.reference),
    x = Xh({ reference: O, element: m, placement: a }),
    A = sc(Object.assign({}, m, x)),
    I = p === Oa ? A : O,
    C = {
      top: w.top - I.top + b.top,
      bottom: I.bottom - w.bottom + b.bottom,
      left: w.left - I.left + b.left,
      right: I.right - w.right + b.right,
    },
    j = e.modifiersData.offset;
  if (p === Oa && j) {
    var U = j[a];
    Object.keys(C).forEach(function (z) {
      var L = [at, nt].indexOf(z) >= 0 ? 1 : -1,
        J = [Fe, nt].indexOf(z) >= 0 ? "y" : "x";
      C[z] += U[J] * L;
    });
  }
  return C;
}
function cS(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    u = c === void 0 ? Vh : c,
    l = Qr(n),
    d = l
      ? s
        ? Vf
        : Vf.filter(function (g) {
            return Qr(g) === l;
          })
      : Za,
    p = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = Ga(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[St(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function uS(e) {
  if (St(e) === Bc) return [];
  var t = Ao(e);
  return [Wf(e), t, Wf(t)];
}
function lS(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        o = a === void 0 ? !0 : a,
        i = r.altAxis,
        s = i === void 0 ? !0 : i,
        c = r.fallbackPlacements,
        u = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        p = r.altBoundary,
        v = r.flipVariations,
        g = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        h = t.options.placement,
        b = St(h),
        _ = b === h,
        m = c || (_ || !g ? [Ao(h)] : uS(h)),
        k = [h].concat(m).reduce(function (we, T) {
          return we.concat(
            St(T) === Bc
              ? cS(t, {
                  placement: T,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : T,
          );
        }, []),
        w = t.rects.reference,
        O = t.rects.popper,
        x = new Map(),
        A = !0,
        I = k[0],
        C = 0;
      C < k.length;
      C++
    ) {
      var j = k[C],
        U = St(j),
        z = Qr(j) === Yr,
        L = [Fe, nt].indexOf(U) >= 0,
        J = L ? "width" : "height",
        H = Ga(t, { placement: j, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        W = L ? (z ? at : Le) : z ? nt : Fe;
      w[J] > O[J] && (W = Ao(W));
      var N = Ao(W),
        B = [];
      if (
        (o && B.push(H[U] <= 0),
        s && B.push(H[W] <= 0, H[N] <= 0),
        B.every(function (we) {
          return we;
        }))
      ) {
        ((I = j), (A = !1));
        break;
      }
      x.set(j, B);
    }
    if (A)
      for (
        var V = g ? 3 : 1,
          ae = function (T) {
            var ye = k.find(function (Be) {
              var ve = x.get(Be);
              if (ve)
                return ve.slice(0, T).every(function (Re) {
                  return Re;
                });
            });
            if (ye) return ((I = ye), "break");
          },
          ie = V;
        ie > 0;
        ie--
      ) {
        var ce = ae(ie);
        if (ce === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const dS = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: lS,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Jf(e, t, r) {
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
function Yf(e) {
  return [Fe, at, nt, Le].some(function (t) {
    return e[t] >= 0;
  });
}
function fS(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Ga(t, { elementContext: "reference" }),
    s = Ga(t, { altBoundary: !0 }),
    c = Jf(i, n),
    u = Jf(s, a, o),
    l = Yf(c),
    d = Yf(u);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    })));
}
const vS = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: fS,
};
function pS(e, t, r) {
  var n = St(e),
    a = [Le, Fe].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * a),
    [Le, at].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function hS(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Vh.reduce(function (l, d) {
      return ((l[d] = pS(d, t.rects, o)), l);
    }, {}),
    s = i[t.placement],
    c = s.x,
    u = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const gS = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: hS };
function bS(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Xh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const _S = { name: "popperOffsets", enabled: !0, phase: "read", fn: bS, data: {} };
function mS(e) {
  return e === "x" ? "y" : "x";
}
function yS(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    o = a === void 0 ? !0 : a,
    i = r.altAxis,
    s = i === void 0 ? !1 : i,
    c = r.boundary,
    u = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    p = r.tether,
    v = p === void 0 ? !0 : p,
    g = r.tetherOffset,
    f = g === void 0 ? 0 : g,
    h = Ga(t, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }),
    b = St(t.placement),
    _ = Qr(t.placement),
    m = !_,
    k = zc(b),
    w = mS(k),
    O = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    A = t.rects.popper,
    I = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    C =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (O) {
    if (o) {
      var z,
        L = k === "y" ? Fe : Le,
        J = k === "y" ? nt : at,
        H = k === "y" ? "height" : "width",
        W = O[k],
        N = W + h[L],
        B = W - h[J],
        V = v ? -A[H] / 2 : 0,
        ae = _ === Yr ? x[H] : A[H],
        ie = _ === Yr ? -A[H] : -x[H],
        ce = t.elements.arrow,
        we = v && ce ? $c(ce) : { width: 0, height: 0 },
        T = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Wh(),
        ye = T[L],
        Be = T[J],
        ve = Ia(0, x[H], we[H]),
        Re = m ? x[H] / 2 - V - ve - ye - C.mainAxis : ae - ve - ye - C.mainAxis,
        pe = m ? -x[H] / 2 + V + ve + Be + C.mainAxis : ie + ve + Be + C.mainAxis,
        qe = t.elements.arrow && Qa(t.elements.arrow),
        cn = qe ? (k === "y" ? qe.clientTop || 0 : qe.clientLeft || 0) : 0,
        Pr = (z = j?.[k]) != null ? z : 0,
        vt = W + Re - Pr - cn,
        Ae = W + pe - Pr,
        pt = Ia(v ? zo(N, vt) : N, W, v ? vr(B, Ae) : B);
      ((O[k] = pt), (U[k] = pt - W));
    }
    if (s) {
      var Gt,
        ot = k === "x" ? Fe : Le,
        ht = k === "x" ? nt : at,
        $e = O[w],
        Ie = w === "y" ? "height" : "width",
        Ce = $e + h[ot],
        je = $e - h[ht],
        gt = [Fe, Le].indexOf(b) !== -1,
        rr = (Gt = j?.[w]) != null ? Gt : 0,
        io = gt ? Ce : $e - x[Ie] - A[Ie] - rr + C.altAxis,
        so = gt ? $e + x[Ie] + A[Ie] - rr - C.altAxis : je,
        co = v && gt ? VO(io, $e, so) : Ia(v ? io : Ce, $e, v ? so : je);
      ((O[w] = co), (U[w] = co - $e));
    }
    t.modifiersData[n] = U;
  }
}
const wS = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: yS,
  requiresIfExists: ["offset"],
};
function kS(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function OS(e) {
  return e === He(e) || !rt(e) ? Vc(e) : kS(e);
}
function SS(e) {
  var t = e.getBoundingClientRect(),
    r = Xr(t.width) / e.offsetWidth || 1,
    n = Xr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ES(e, t, r) {
  r === void 0 && (r = !1);
  var n = rt(t),
    a = rt(t) && SS(t),
    o = er(t),
    i = Zr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Rt(t) !== "body" || Hc(o)) && (s = OS(t)),
      rt(t) ? ((c = Zr(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : o && (c.x = Gc(o))),
    {
      x: i.left + s.scrollLeft - c.x,
      y: i.top + s.scrollTop - c.y,
      width: i.width,
      height: i.height,
    }
  );
}
function xS(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    (i.forEach(function (s) {
      if (!r.has(s)) {
        var c = t.get(s);
        c && a(c);
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
function CS(e) {
  var t = xS(e);
  return UO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function PS(e) {
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
function RS(e) {
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
var Xf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Zf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function AS(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Xf : a;
  return function (s, c, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Xf, o),
        modifiersData: {},
        elements: { reference: s, popper: c },
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
              reference: gr(s) ? ja(s) : s.contextElement ? ja(s.contextElement) : [],
              popper: ja(c),
            }));
          var m = CS(RS([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = m.filter(function (k) {
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
              m = b.popper;
            if (Zf(_, m)) {
              ((l.rects = {
                reference: ES(_, Qa(m), l.options.strategy === "fixed"),
                popper: $c(m),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (C) {
                  return (l.modifiersData[C.name] = Object.assign({}, C.data));
                }));
              for (var k = 0; k < l.orderedModifiers.length; k++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (k = -1));
                  continue;
                }
                var w = l.orderedModifiers[k],
                  O = w.fn,
                  x = w.options,
                  A = x === void 0 ? {} : x,
                  I = w.name;
                typeof O == "function" &&
                  (l = O({ state: l, options: A, name: I, instance: v }) || l);
              }
            }
          }
        },
        update: PS(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!Zf(s, c)) return v;
    v.setOptions(u).then(function (h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var b = h.name,
          _ = h.options,
          m = _ === void 0 ? {} : _,
          k = h.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: v, options: m }),
            O = function () {};
          d.push(w || O);
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
var IS = [eS, _S, ZO, qO, gS, dS, wS, KO, vS],
  jS = AS({ defaultModifiers: IS }),
  Ds,
  Qf;
function DS() {
  if (Qf) return Ds;
  Qf = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(o, i) {
    if (o === i) return !0;
    if (o && i && typeof o == "object" && typeof i == "object") {
      if (o.constructor !== i.constructor) return !1;
      var s, c, u;
      if (Array.isArray(o)) {
        if (((s = o.length), s != i.length)) return !1;
        for (c = s; c-- !== 0; ) if (!a(o[c], i[c])) return !1;
        return !0;
      }
      var l;
      if (t && o instanceof Map && i instanceof Map) {
        if (o.size !== i.size) return !1;
        for (l = o.entries(); !(c = l.next()).done; ) if (!i.has(c.value[0])) return !1;
        for (l = o.entries(); !(c = l.next()).done; )
          if (!a(c.value[1], i.get(c.value[0]))) return !1;
        return !0;
      }
      if (r && o instanceof Set && i instanceof Set) {
        if (o.size !== i.size) return !1;
        for (l = o.entries(); !(c = l.next()).done; ) if (!i.has(c.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(o) && ArrayBuffer.isView(i)) {
        if (((s = o.length), s != i.length)) return !1;
        for (c = s; c-- !== 0; ) if (o[c] !== i[c]) return !1;
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
      if (((u = Object.keys(o)), (s = u.length), s !== Object.keys(i).length)) return !1;
      for (c = s; c-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(i, u[c])) return !1;
      if (e && o instanceof Element) return !1;
      for (c = s; c-- !== 0; )
        if (
          !((u[c] === "_owner" || u[c] === "__v" || u[c] === "__o") && o.$$typeof) &&
          !a(o[u[c]], i[u[c]])
        )
          return !1;
      return !0;
    }
    return o !== o && i !== i;
  }
  return (
    (Ds = function (i, s) {
      try {
        return a(i, s);
      } catch (c) {
        if ((c.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw c;
      }
    }),
    Ds
  );
}
var MS = DS();
const TS = Qt(MS);
var FS = [],
  LS = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || FS,
      },
      i = y.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = i[0],
      c = i[1],
      u = y.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var g = v.state,
              f = Object.keys(g.elements);
            Qo.flushSync(function () {
              c({
                styles: $f(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: $f(
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
      l = y.useMemo(
        function () {
          var p = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return TS(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = y.useRef();
    return (
      zf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      zf(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || jS,
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
        styles: s.styles,
        attributes: s.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  US = function () {},
  NS = function () {
    return Promise.resolve(null);
  },
  BS = [];
function qS(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? BS : o,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = y.useContext(OO),
    p = y.useState(null),
    v = p[0],
    g = p[1],
    f = y.useState(null),
    h = f[0],
    b = f[1];
  y.useEffect(
    function () {
      xO(u, v);
    },
    [u, v],
  );
  var _ = y.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: c,
          modifiers: [].concat(i, [{ name: "arrow", enabled: h != null, options: { element: h } }]),
        };
      },
      [r, a, c, i, h],
    ),
    m = LS(s || d, v, _),
    k = m.state,
    w = m.styles,
    O = m.forceUpdate,
    x = m.update,
    A = y.useMemo(
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
          forceUpdate: O || US,
          update: x || NS,
        };
      },
      [g, b, r, k, w, x, O],
    );
  return SO(l)(A);
}
function $S(e) {
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
          s,
          c = n.state,
          u = c.modifiersData.maxSizeData;
        if (
          !(
            typeof (u == null || (a = u.viewport) === null || a === void 0 ? void 0 : a.width) !=
              "number" ||
            typeof (u == null || (o = u.viewport) === null || o === void 0 ? void 0 : o.height) !=
              "number"
          )
        ) {
          var l = u.viewport,
            d = c.modifiersData.popperOffsets,
            p = d === void 0 ? { x: 0, y: 0 } : d,
            v = c.placement.split("-"),
            g = G(v, 1),
            f = g[0],
            h =
              (i =
                (s = c.modifiersData) === null ||
                s === void 0 ||
                (s = s.offset) === null ||
                s === void 0
                  ? void 0
                  : s[c.placement]) !== null && i !== void 0
                ? i
                : { x: 0, y: 0 },
            b = l.width - 2 * t,
            _ = l.height - 2 * t;
          (f === "top" && (_ = c.rects.reference.y + h.y - t),
            f === "bottom" && (_ = l.height - p.y - t),
            f === "left" && (b = c.rects.reference.x + h.x - t),
            f === "right" && (b = l.width - p.x - t),
            (c.styles.popper.maxWidth = "".concat(b, "px")),
            (c.styles.popper.maxHeight = "".concat(_, "px")));
        }
      },
    },
  ];
}
var cc = 5,
  zS = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: cc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function VS() {
  return null;
}
var GS = [0, 8];
function HS(e) {
  var t = e.children,
    r = t === void 0 ? VS : t,
    n = e.offset,
    a = n === void 0 ? GS : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    g = G(a, 2),
    f = g[0],
    h = g[1],
    b = y.useMemo(
      function () {
        var m = {
            name: "preventOverflow",
            options: { padding: cc, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = v ? $S({ viewportPadding: cc }) : [];
        return [].concat(zS, [m, k], Se(w));
      },
      [f, h, v],
    ),
    _ = y.useMemo(
      function () {
        return u == null ? b : [].concat(Se(b), Se(u));
      },
      [b, u],
    );
  return S.createElement(qS, { modifiers: _, placement: i, strategy: d, referenceElement: c }, r);
}
var Zh = "atlaskit-portal-container",
  Qh = "body > .atlaskit-portal-container",
  eg = "atlaskit-portal",
  WS = function (t) {
    var r = document.createElement("div");
    return ((r.className = eg), (r.style.zIndex = "".concat(t)), r);
  },
  tg = function () {
    return document.body;
  },
  rg = function () {
    var t = document.querySelector(Qh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Zh),
        (n.style.display = "flex"),
        (r = tg()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  KS = function (t) {
    rg().removeChild(t);
  },
  JS = function (t) {
    t.parentElement || rg().appendChild(t);
  },
  ng = function () {
    return document !== void 0;
  },
  YS = function (t) {
    if (ng()) {
      var r = document.createElement("div");
      return ((r.className = eg), (r.style.zIndex = "".concat(t)), r);
    }
  },
  XS = function () {
    if (ng()) {
      var t = document.querySelector(Qh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Zh),
          (n.style.display = "flex"),
          (r = tg()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function ZS(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return WS(t);
      },
      [t],
    ),
    a = bh();
  return (
    JS(n),
    y.useEffect(
      function () {
        return function () {
          KS(n);
        };
      },
      [n],
    ),
    Qo.createPortal(
      a && de("platform_dst_subtree_theming") ? S.createElement(gh, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var ag = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function QS(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = G(n, 2),
    o = a[0],
    i = a[1],
    s = bh();
  ag(
    function () {
      var u = YS(t);
      i(u);
      var l = XS();
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
  var c = S.createElement(
    y.Suspense,
    { fallback: null },
    s && de("platform_dst_subtree_theming") ? S.createElement(gh, { defaultColorMode: s }, r) : r,
  );
  return o ? Qo.createPortal(c, o) : null;
}
var eE = function (t) {
    var r = y.useState(!1),
      n = G(r, 2),
      a = n[0],
      o = n[1],
      i = y.useState(function () {
        return t === "layoutEffect" ? ag : y.useEffect;
      }),
      s = G(i, 1),
      c = s[0];
    return (
      c(function () {
        o(!0);
      }, []),
      a
    );
  },
  tE = "akPortalMount",
  rE = "akPortalUnmount",
  ev = {
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
  nE = function (t) {
    return ev.hasOwnProperty(t) ? ev[t] : null;
  },
  aE = function (t, r) {
    var n = { layer: nE(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function tv(e, t) {
  var r = aE(e, t);
  window.dispatchEvent(r);
}
var oE = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        tv(tE, r),
        function () {
          tv(rE, r);
        }
      );
    },
    [r],
  );
};
function iE(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = eE(o);
  return (
    oE(r),
    de("platform_design_system_team_portal_logic_r18_fix")
      ? S.createElement(QS, { zIndex: r }, n)
      : i
        ? S.createElement(ZS, { zIndex: r }, n)
        : null
  );
}
var Da = new Set(),
  Ha = null;
function rv() {
  if (!Ha) {
    Ha = kr.bindAll(window, [
      { type: "dragend", listener: Ms },
      { type: "pointerdown", listener: Ms },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Ms();
          };
        })(),
      },
    ]);
    var e = Array.from(Da);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Ms() {
  var e;
  ((e = Ha) === null || e === void 0 || e(), (Ha = null));
  var t = Array.from(Da);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function sE() {
  return kr.bindAll(window, [
    { type: "dragstart", listener: rv },
    { type: "dragenter", listener: rv },
  ]);
}
var wo = null;
function cE(e) {
  return (
    wo || (wo = sE()),
    Da.add(e),
    e.onRegister({ isDragging: Ha !== null }),
    function () {
      if ((Da.delete(e), Da.size === 0)) {
        var r;
        ((r = wo) === null || r === void 0 || r(), (wo = null));
      }
    }
  );
}
var Ma = null;
function Ca() {
  Ma != null && (window.clearTimeout(Ma), (Ma = null));
}
function nv(e, t) {
  (Ca(),
    (Ma = window.setTimeout(function () {
      ((Ma = null), e());
    }, t)));
}
var _t = null;
function uE(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(_t && _t.entry === e);
  }
  function n() {
    r() && (Ca(), (_t = null));
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
  function s(v) {
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
          nv(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function c() {
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
      g = !!(_t && _t.isVisible()) && !v;
    (_t && (Ca(), _t.entry.hide({ isImmediate: !0 }), _t.entry.done(), (_t = null)),
      (_t = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: g }));
    }
    if (g) {
      f();
      return;
    }
    ((t = "waiting-to-show"), nv(f, e.delay));
  }
  d();
  var p = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: s,
    finishHideAnimation: c,
    mousePosition: de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return p;
}
function lE(e, t) {
  var r = Zw();
  return t ? "".concat(r(e)) : void 0;
}
var av = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  dE = function (t) {
    var r = t.shortcut;
    return y.createElement(
      "div",
      { className: P([av.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return y.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: P([av.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  og = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return y.createElement(
      "div",
      { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
      y.createElement(
        "div",
        {
          role: "tooltip",
          className: P(["_80om73ad", a]),
          onMouseOut: c,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": s,
          id: l,
        },
        o,
        d && y.createElement(dE, { shortcut: d }),
      ),
    );
  });
og.displayName = "TooltipPrimitive";
var ov = {
    base: "_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  ig = y.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      s = t.placement,
      c = t.testId,
      u = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      p = t.shortcut;
    return y.createElement(
      og,
      {
        ref: r,
        style: n,
        className: P([ov.base, i && ov.truncate, a]),
        placement: s,
        testId: c,
        id: d,
        onMouseOut: u,
        onMouseOver: l,
        shortcut: p,
      },
      o,
    );
  });
ig.displayName = "TooltipContainer";
function iv(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function fE(e, t) {
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
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sv(Object(r), !0).forEach(function (n) {
          E(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vE = Qw.tooltip(),
  cv = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.14.1" },
  pE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  hE = function (t) {
    return t.split("-")[0];
  };
function gE(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    u = e.component,
    l = u === void 0 ? ig : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Ee : h,
    _ = e.onHide,
    m = _ === void 0 ? Ee : _,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    O = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    A = x === void 0 ? !1 : x,
    I = e.analyticsContext,
    C = e.strategy,
    j = C === void 0 ? "fixed" : C,
    U = e.ignoreTooltipPointerEvents,
    z = U === void 0 ? !1 : U,
    L = e.isScreenReaderAnnouncementDisabled,
    J = L === void 0 ? !1 : L,
    H = e.shortcut,
    W = e.UNSAFE_shouldAlwaysFadeIn,
    N = W === void 0 ? !1 : W,
    B = e.UNSAFE_shouldRenderToParent,
    V = B === void 0 ? !1 : B,
    ae = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    ie = ae ? o : n,
    ce = ad($r({ fn: b, action: "displayed", analyticsData: I }, cv)),
    we = ad($r({ fn: m, action: "hidden", analyticsData: I }, cv)),
    T = y.useRef(null),
    ye = y.useState("hide"),
    Be = G(ye, 2),
    ve = Be[0],
    Re = Be[1],
    pe = y.useRef(null),
    qe = y.useRef(null),
    cn = function (oe) {
      ((qe.current = oe), (pe.current = oe ? oe.firstElementChild : null));
    },
    Pr = y.useCallback(function (F) {
      pe.current = F;
    }, []),
    vt = qr(ve),
    Ae = qr(ce),
    pt = qr(we),
    Gt = qr(f),
    ot = qr(k),
    ht = y.useRef(!1),
    $e = qr(N),
    Ie = y.useCallback(function (F) {
      ((T.current = F), (ht.current = !1));
    }, []),
    Ce = y.useCallback(
      function () {
        T.current &&
          (ht.current && pt.current(), (T.current = null), (ht.current = !1), Re("hide"));
      },
      [pt],
    ),
    je = y.useCallback(
      function () {
        T.current && (T.current.abort(), ht.current && pt.current(), (T.current = null));
      },
      [pt],
    );
  y.useEffect(
    function () {
      return function () {
        T.current && je();
      };
    },
    [je],
  );
  var gt = y.useRef(!1);
  y.useEffect(function () {
    return cE({
      onRegister: function (oe) {
        var Dt = oe.isDragging;
        gt.current = Dt;
      },
      onDragStart: function () {
        var oe;
        ((oe = T.current) === null || oe === void 0 || oe.requestHide({ isImmediate: !0 }),
          (gt.current = !0));
      },
      onDragEnd: function () {
        gt.current = !1;
      },
    });
  }, []);
  var rr = y.useCallback(
      function (F) {
        var oe;
        if (!gt.current) {
          if ((T.current && !T.current.isActive() && je(), T.current && T.current.isActive())) {
            T.current.keep();
            return;
          }
          if (!(ot.current && !((oe = ot.current) !== null && oe !== void 0 && oe.call(ot)))) {
            var Dt = {
                source: F,
                delay: Gt.current,
                show: function (Rr) {
                  var ln = Rr.isImmediate;
                  (ht.current || ((ht.current = !0), Ae.current()),
                    Re(ln ? "show-immediate" : "fade-in"));
                },
                hide: function (Rr) {
                  var ln = Rr.isImmediate;
                  Re(ln ? "hide" : "before-fade-out");
                },
                done: Ce,
                shouldAlwaysFadeIn: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? $e.current
                  : !1,
              },
              nr = uE(Dt);
            Ie(nr);
          }
        }
      },
      [ot, Gt, Ce, Ie, je, Ae, $e],
    ),
    io = y.useCallback(
      function () {
        var F;
        (F = T.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
      },
      [T],
    );
  (nO({ onClose: io, isDisabled: ve === "hide" || ve === "fade-out" }),
    y.useEffect(
      function () {
        if (ve === "hide") return Ee;
        ve === "before-fade-out" && Re("fade-out");
        var F = kr.bind(window, {
          type: "scroll",
          listener: function () {
            T.current && T.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return F;
      },
      [ve],
    ));
  var so = y.useCallback(
      function () {
        A && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    co = y.useCallback(
      function () {
        O && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [O],
    ),
    sb = y.useCallback(
      function (F) {
        if (!(qe.current && F.target === qe.current) && !F.defaultPrevented) {
          F.preventDefault();
          var oe = ae
            ? {
                type: "mouse",
                mouse: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : iv({ left: F.clientX, top: F.clientY }),
                clientX: F.clientX,
                clientY: F.clientY,
              }
            : { type: "keyboard" };
          rr(oe);
        }
      },
      [ae, rr],
    ),
    tu = y.useCallback(function (F) {
      (qe.current && F.target === qe.current) ||
        F.defaultPrevented ||
        (F.preventDefault(), T.current && T.current.requestHide({ isImmediate: !1 }));
    }, []),
    cb = ae
      ? function (F) {
          var oe;
          (oe = T.current) !== null &&
            oe !== void 0 &&
            oe.isActive() &&
            (de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (T.current.mousePosition = iv({ left: F.clientX, top: F.clientY })),
            (T.current.mousePos = { clientX: F.clientX, clientY: F.clientY }));
        }
      : void 0,
    ub = y.useCallback(function () {
      if (T.current && T.current.isActive()) {
        T.current.keep();
        return;
      }
    }, []),
    lb = y.useCallback(
      function (F) {
        try {
          if (!F.target.matches(":focus-visible")) return;
        } catch {}
        rr({ type: "keyboard" });
      },
      [rr],
    ),
    db = y.useCallback(function () {
      T.current && T.current.requestHide({ isImmediate: !1 });
    }, []),
    fb = y.useCallback(
      function (F) {
        F === "exiting" &&
          vt.current === "fade-out" &&
          T.current &&
          T.current.finishHideAnimation();
      },
      [vt],
    ),
    vb = p,
    Ai = ve !== "hide" && !!i,
    ru = !J && Ai,
    nu = ve !== "hide" && ve !== "fade-out",
    pb = y.useCallback(function () {
      var F;
      (F = T.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
    }, []);
  sO({ isOpen: Ai && nu, onClose: pb });
  var au = function () {
      var oe, Dt;
      if (
        ae &&
        (oe = T.current) !== null &&
        oe !== void 0 &&
        oe.mousePos &&
        pe.current &&
        de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return fE(T.current.mousePos, { targetElement: pe.current, tooltipPosition: n });
      if (
        ae &&
        (Dt = T.current) !== null &&
        Dt !== void 0 &&
        Dt.mousePosition &&
        !de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var nr;
        return (nr = T.current) === null || nr === void 0 ? void 0 : nr.mousePosition;
      }
      return pe.current || void 0;
    },
    un = lE("tooltip", ru),
    Ii = {
      onMouseOver: sb,
      onMouseOut: tu,
      onMouseMove: cb,
      onMouseDown: so,
      onClick: co,
      onFocus: lb,
      onBlur: db,
    };
  v && (Ii["data-testid"] = "".concat(v, "--container"));
  var ou = typeof t == "function";
  y.useEffect(
    function () {
      if (!ou) {
        var F = pe.current;
        if (!(!F || !un))
          return (
            F.setAttribute("aria-describedby", un),
            function () {
              return F.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [ou, un],
  );
  var iu = ru
      ? S.createElement(
          "span",
          { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: un },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    hb = V && de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? y.Fragment : bE;
  return S.createElement(
    S.Fragment,
    null,
    typeof t == "function"
      ? S.createElement(
          S.Fragment,
          null,
          t($r($r({}, Ii), {}, { "aria-describedby": un, ref: Pr })),
          iu,
        )
      : S.createElement(vb, ne({}, Ii, { ref: cn, role: "presentation" }), t, iu),
    Ai
      ? S.createElement(
          hb,
          null,
          S.createElement(HS, { placement: ie, referenceElement: au(), strategy: j }, function (F) {
            var oe = F.ref,
              Dt = F.style,
              nr = F.update,
              ji = F.placement,
              Rr = ae ? void 0 : pE[hE(ji)];
            return S.createElement(
              $h,
              { appear: !0 },
              nu &&
                S.createElement(
                  kO,
                  {
                    distance: "constant",
                    entranceDirection: Rr,
                    exitDirection: Rr,
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
                        style: $r($r({}, Dt), z && { pointerEvents: "none" }),
                        truncate: c,
                        placement: ie,
                        testId: au() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: tu,
                        onMouseOver: ub,
                        shortcut: H,
                      },
                      typeof i == "function" ? i({ update: nr }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var bE = function (t) {
    var r = t.children;
    return S.createElement(iE, { zIndex: vE }, r);
  },
  _E = [
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
  uv = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c8wadc _syazazsu _k48pwu06" },
  sg = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      a = t.testId;
    t.isRanking;
    var o = t.innerRef,
      i = t.isSortable,
      s = t.sortOrder,
      c = t.onClick,
      u = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      p = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      g = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      h = f === void 0 ? "Sort button" : f,
      b = t.isIconOnlyHeader,
      _ = se(t, _E),
      m = y.useState(!1),
      k = G(m, 2),
      w = k[0],
      O = k[1],
      x = y.useState(!1),
      A = G(x, 2),
      I = A[0],
      C = A[1],
      j = u === l || s !== void 0,
      U = w || j || I,
      z = U && b,
      L = !b || U || (b && !I),
      J = y.useCallback(
        function () {
          C?.(!0);
        },
        [C],
      ),
      H = y.useCallback(
        function () {
          C?.(!1);
        },
        [C],
      ),
      W = y.useCallback(
        function () {
          O(!0);
        },
        [O],
      ),
      N = y.useCallback(
        function () {
          O(!1);
        },
        [O],
      ),
      B = S.createElement(
        si,
        { xcss: uv.headCellContainer, onMouseEnter: W, onMouseLeave: N, onFocus: J, onBlur: H },
        S.createElement(
          gE,
          { content: s === hr ? p : g },
          S.createElement(
            Ky,
            { onClick: c, xcss: Sa.buttonWrapper, "aria-roledescription": h },
            S.createElement(
              qo,
              { xcss: z ? Sa.hideIconHeaderWrapper : Sa.visibleHeaderWrapper },
              S.createElement("span", { className: P([uv.text]) }, r),
            ),
            L &&
              S.createElement(
                qo,
                { xcss: U ? Sa.sortIconVisibleWrapper : Sa.sortIconHiddenWrapper },
                s === hr
                  ? S.createElement(tO, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : S.createElement(Zk, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return S.createElement(
      Wk,
      ne(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        _,
        { isSortable: i, sortOrder: s },
      ),
      i ? B : r,
    );
  },
  mE = ["isRanking", "refHeight", "refWidth"];
function yE(e, t, r) {
  return (
    (t = Q(t)),
    We(e, cg() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function cg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cg = function () {
    return !!e;
  })();
}
var wE = (function (e) {
    function t() {
      return (he(this, t), yE(this, t, arguments));
    }
    return (
      Ke(t, e),
      ge(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = se(n, mE),
              s = Q_(a, o);
            return S.createElement(sg, ne({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(S.Component),
  kE = Jk(wE),
  OE = ["cells"],
  SE = [
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
function EE(e, t, r) {
  return (
    (t = Q(t)),
    We(e, ug() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function ug() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ug = function () {
    return !!e;
  })();
}
var xE = (function (e) {
    function t(r) {
      var n;
      return (he(this, t), (n = EE(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ke(t, e),
      ge(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Fo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Fo(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              a = this.props,
              o = a.head,
              i = a.sortKey,
              s = a.sortOrder,
              c = a.isFixedSize,
              u = a.onSort,
              l = a.isRanking,
              d = a.isRankable,
              p = a.testId,
              v = this.state.activeSortButtonId;
            if (!o) return null;
            var g = d ? kE : sg,
              f = o.cells,
              h = se(o, OE);
            return S.createElement(
              Hk,
              ne({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              S.createElement(
                "tr",
                null,
                f.map(function (b, _) {
                  var m = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    O = b.content,
                    x = b.descendingSortTooltip,
                    A = b.isIconOnlyHeader,
                    I = b.isSortable,
                    C = b.key,
                    j = b.shouldTruncate,
                    U = b.testId,
                    z = b.width,
                    L = se(b, SE),
                    J = "head-cell-".concat(_),
                    H = function () {
                      (n.setState({ activeSortButtonId: J }), I && u(b)());
                    };
                  return S.createElement(
                    g,
                    ne(
                      {
                        colSpan: w,
                        content: O,
                        isFixedSize: c,
                        isIconOnlyHeader: A,
                        isSortable: !!I,
                        isRanking: l,
                        key: C || _,
                        headCellId: J,
                        activeSortButtonId: v,
                        onClick: H,
                        testId: U || p,
                        shouldTruncate: j,
                        sortOrder: C === i ? s : void 0,
                        width: z,
                        ascendingSortTooltip: m,
                        descendingSortTooltip: x,
                        buttonAriaRoleDescription: k,
                      },
                      L,
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
  CE = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function PE(e) {
  switch (e) {
    case No:
      return hr;
    case hr:
      return No;
    default:
      return e;
  }
}
var RE = function (t) {
    var r = t.caption,
      n = t.head,
      a = t.highlightedRowIndex,
      o = t.rows,
      i = t.sortKey,
      s = t.sortOrder,
      c = t.loadingLabel,
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
      m = t.onSetPage,
      k = m === void 0 ? Ee : m,
      w = t.onSort,
      O = w === void 0 ? Ee : w,
      x = t.page,
      A = x === void 0 ? 1 : x,
      I = t.emptyView,
      C = t.isRankable,
      j = C === void 0 ? !1 : C,
      U = t.isRankingDisabled,
      z = U === void 0 ? !1 : U,
      L = t.onRankStart,
      J = L === void 0 ? Ee : L,
      H = t.onRankEnd,
      W = H === void 0 ? Ee : H,
      N = t.loadingSpinnerSize,
      B = t.paginationi18n,
      V =
        B === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : B,
      ae = y.useState(!1),
      ie = G(ae, 2),
      ce = ie[0],
      we = ie[1],
      T = y.useRef(null),
      ye = Ua({
        fn: O,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.13",
      }),
      Be = Ua({
        fn: W,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.13",
      });
    y.useEffect(
      function () {
        (Fo(i, n), Z_(n));
      },
      [i, n],
    );
    var ve = function (Ce) {
        return function () {
          var je = Ce.key;
          if (je) {
            if (ye && j && je === i && s === No) {
              ye({ key: null, sortOrder: null, item: Ce });
              return;
            }
            var gt = je !== i ? hr : PE(s);
            ye && ye({ key: je, item: Ce, sortOrder: gt });
          }
        };
      },
      Re = function (Ce, je) {
        k(Ce, je);
      },
      pe = function (Ce) {
        (we(!0), J(Ce));
      },
      qe = function (Ce) {
        (we(!1), Be(Ce));
      },
      cn = function () {
        return N || (Rp(o || [], A, _).length > 2 ? Bo : bm);
      },
      Pr = function () {
        return g ? S.createElement(Om, { testId: l }) : I && S.createElement(Sm, { testId: l }, I);
      },
      vt = o && o.length,
      Ae,
      pt = !1;
    (d && Number.isInteger(d) && _ && vt && vt <= d
      ? ((Ae = Math.ceil(d / _)), (pt = !0))
      : (Ae = vt && _ ? Math.ceil(vt / _) : 0),
      (Ae = Ae < 1 ? 1 : Ae));
    var Gt = A > Ae ? Ae : A,
      ot = !!vt,
      ht = cn(),
      $e = Pr();
    return S.createElement(
      S.Fragment,
      null,
      S.createElement(
        $p,
        {
          isLoading: g && ot,
          spinnerSize: ht,
          targetRef: function () {
            return T.current;
          },
          testId: l,
          loadingLabel: c,
        },
        S.createElement(
          ym,
          { isFixedSize: h, "aria-label": p, hasDataRow: ot, testId: l, isLoading: g },
          !!r && S.createElement(wm, null, r),
          n &&
            S.createElement(xE, {
              head: n,
              onSort: ve,
              sortKey: i,
              sortOrder: s,
              isRanking: ce,
              isRankable: j,
              testId: l,
            }),
          ot &&
            S.createElement(IE, {
              ref: T,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: s,
              rowsPerPage: _,
              page: Gt,
              isFixedSize: h || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: pt,
              testId: l,
              isRankable: j,
              isRanking: ce,
              onRankStart: pe,
              onRankEnd: qe,
              isRankingDisabled: z || g || !1,
            }),
        ),
      ),
      Ae <= 1
        ? null
        : S.createElement(
            km,
            { testId: l },
            S.createElement(zk, {
              value: Gt,
              onChange: Re,
              total: Ae,
              i18n: V,
              isDisabled: g,
              testId: l,
            }),
          ),
      !ot &&
        $e &&
        S.createElement(Bp, { isLoading: g, spinnerSize: Bo, testId: l, loadingLabel: c }, $e),
    );
  },
  AE = y.lazy(function () {
    return Me(
      () => import("./body-DCkjI6Oz.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  IE = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      s = t.onRankEnd,
      c = t.isRankingDisabled,
      u = se(t, CE),
      l = a && !u.sortKey,
      d = y.useState(!1),
      p = G(d, 2),
      v = p[0],
      g = p[1];
    y.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = S.createElement(Nm, ne({ ref: r }, u));
    return l && v
      ? S.createElement(
          qm,
          { fallback: f },
          S.createElement(
            y.Suspense,
            { fallback: f },
            S.createElement(
              AE,
              ne({ ref: r }, u, {
                isRanking: o,
                onRankStart: i,
                onRankEnd: s,
                isRankingDisabled: c,
              }),
            ),
          ),
        )
      : f;
  });
function jE(e, t, r) {
  return (
    (t = Q(t)),
    We(e, lg() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Wc = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = jE(this, t, [].concat(a))),
      E(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      E(r, "onSetPageHandler", function (i, s) {
        var c = r.props.onSetPage;
        c && (c(i, s), r.setState({ page: i }));
      }),
      E(r, "onSortHandler", function (i, s) {
        var c = i.key,
          u = i.item,
          l = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: c, item: u, sortOrder: l }, s), r.setState({ sortKey: c, sortOrder: l }));
      }),
      E(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      E(r, "onRankEndHandler", function (i) {
        var s = i.destination,
          c = r.state,
          u = c.rows,
          l = c.page,
          d = r.props.rowsPerPage;
        if (!s || !u) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var p = em(i, u, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    Ke(t, e),
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
            s = n.rows,
            c = this.props,
            u = c.caption,
            l = c.emptyView,
            d = c.head,
            p = c.highlightedRowIndex,
            v = c.loadingSpinnerSize,
            g = c.isLoading,
            f = c.loadingLabel,
            h = c.isFixedSize,
            b = c.isRankable,
            _ = c.isRankingDisabled,
            m = c.rowsPerPage,
            k = c.paginationi18n,
            w = c.onRankStart,
            O = c.onPageRowsUpdate,
            x = c.testId,
            A = c.label;
          return S.createElement(RE, {
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
            rows: s,
            rowsPerPage: m,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: _,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: O,
            testId: x,
            label: A,
          });
        },
      },
    ])
  );
})(S.Component);
E(Wc, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ee,
  onSort: Ee,
  rowsPerPage: 1 / 0,
});
const DE = (e, t, r, n) => {
    const a = Object.keys(n).map((o) => ({ key: o, content: o, isSortable: t, width: 25 }));
    return (r && a.push({ key: "delete", content: "Delete", isSortable: t, width: 25 }), a);
  },
  dg = (e, t, r, n) => ({ cells: DE(e, t, r, n) });
function Y(e) {
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
var ME = {};
function pi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : ME;
}
var fg = Object.assign,
  Vo = Object.getOwnPropertyDescriptor,
  Et = Object.defineProperty,
  hi = Object.prototype,
  uc = [];
Object.freeze(uc);
var vg = {};
Object.freeze(vg);
var TE = typeof Proxy < "u",
  FE = Object.toString();
function pg() {
  TE || Y("Proxy not available");
}
function hg(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Vr = function () {};
function lt(e) {
  return typeof e == "function";
}
function br(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function gi(e) {
  return e !== null && typeof e == "object";
}
function Zt(e) {
  if (!gi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === FE;
}
function gg(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function bi(e, t, r) {
  Et(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function bg(e, t, r) {
  Et(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Sr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return gi(n) && n[r] === !0;
    }
  );
}
function nn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function LE(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Ut(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var _g = typeof Object.getOwnPropertySymbols < "u";
function UE(e) {
  var t = Object.keys(e);
  if (!_g) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return hi.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var _i =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : _g
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function mg(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function qt(e, t) {
  return hi.hasOwnProperty.call(e, t);
}
var NE =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      _i(t).forEach(function (n) {
        r[n] = Vo(t, n);
      }),
      r
    );
  };
function ze(e, t) {
  return !!(e & t);
}
function Ve(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function lv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function BE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $E(n.key), n));
  }
}
function an(e, t, r) {
  return (t && BE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Gr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = zE(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _r() {
  return (
    (_r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _r.apply(null, arguments)
  );
}
function yg(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), lc(e, t));
}
function lc(e, t) {
  return (
    (lc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    lc(e, t)
  );
}
function qE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $E(e) {
  var t = qE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zE(e, t) {
  if (e) {
    if (typeof e == "string") return lv(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? lv(e, t)
          : void 0
    );
  }
}
var kt = Symbol("mobx-stored-annotations");
function xt(e) {
  function t(r, n) {
    if (to(n)) return e.decorate_20223_(r, n);
    eo(r, n, e);
  }
  return Object.assign(t, e);
}
function eo(e, t, r) {
  (qt(e, kt) || bi(e, kt, _r({}, e[kt])), YE(r) || (e[kt][t] = r));
}
function VE(e) {
  return (qt(e, kt) || bi(e, kt, _r({}, e[kt])), e[kt]);
}
function to(e) {
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
        (this.lowestObserverState_ = Z.NOT_TRACKING_),
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
        return Fg(this);
      }),
      (t.reportChanged = function () {
        (et(), Lg(this), tt());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      an(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return ze(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return ze(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return ze(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var Kc = Sr("Atom", tr);
function wg(e, t, r) {
  (t === void 0 && (t = Vr), r === void 0 && (r = Vr));
  var n = new tr(e);
  return (t !== Vr && tC(n, t), r !== Vr && $g(n, r), n);
}
function GE(e, t) {
  return eb(e, t);
}
function HE(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Go = { structural: GE, default: HE };
function mr(e, t, r) {
  return Hg(e)
    ? e
    : Array.isArray(e)
      ? fe.array(e, { name: r })
      : Zt(e)
        ? fe.object(e, void 0, { name: r })
        : nn(e)
          ? fe.map(e, { name: r })
          : Ut(e)
            ? fe.set(e, { name: r })
            : typeof e == "function" && !en(e) && !Ka(e)
              ? gg(e)
                ? tn(e)
                : Wa(r, e)
              : e;
}
function WE(e, t, r) {
  if (e == null || Ci(e) || xi(e) || xr(e) || wt(e)) return e;
  if (Array.isArray(e)) return fe.array(e, { name: r, deep: !1 });
  if (Zt(e)) return fe.object(e, void 0, { name: r, deep: !1 });
  if (nn(e)) return fe.map(e, { name: r, deep: !1 });
  if (Ut(e)) return fe.set(e, { name: r, deep: !1 });
}
function mi(e) {
  return e;
}
function KE(e, t) {
  return eb(e, t) ? t : e;
}
var JE = "override";
function YE(e) {
  return e.annotationType_ === JE;
}
function ro(e, t) {
  return { annotationType_: e, options_: t, make_: XE, extend_: ZE, decorate_20223_: QE };
}
function XE(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (en(r.value)) return 1;
  var o = kg(e, this, t, r, !1);
  return (Et(n, t, o), 2);
}
function ZE(e, t, r, n) {
  var a = kg(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function QE(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, p, v;
      return yr(
        (l = (d = o.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (p = (v = o.options_) == null ? void 0 : v.autoAction) != null ? p : !1,
      );
    };
  if (r == "field")
    return function (c) {
      var u,
        l = c;
      return (
        en(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      en(e) || (e = i(e)),
      (s = this.options_) != null &&
        s.bound &&
        a(function () {
          var c = this,
            u = c[n].bind(c);
          ((u.isMobxAction = !0), (c[n] = u));
        }),
      e
    );
  }
  Y(
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
function ex(e, t, r, n) {
  (t.annotationType_, n.value);
}
function kg(e, t, r, n, a) {
  var o, i, s, c, u, l, d;
  (a === void 0 && (a = R.safeDescriptors), ex(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: yr(
      (i = (s = t.options_) == null ? void 0 : s.name) != null ? i : r.toString(),
      p,
      (c = (u = t.options_) == null ? void 0 : u.autoAction) != null ? c : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Og(e, t) {
  return { annotationType_: e, options_: t, make_: tx, extend_: rx, decorate_20223_: nx };
}
function tx(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!qt(e.target_, t) || !Ka(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ka(r.value)) return 1;
  var o = Sg(e, this, t, r, !1, !1);
  return (Et(n, t, o), 2);
}
function rx(e, t, r, n) {
  var a,
    o = Sg(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function nx(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Ka(e) || (e = tn(e)),
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
function ax(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Sg(e, t, r, n, a, o) {
  (o === void 0 && (o = R.safeDescriptors), ax(e, t, r, n));
  var i = n.value;
  if ((Ka(i) || (i = tn(i)), a)) {
    var s;
    ((i = i.bind((s = e.proxy_) != null ? s : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Jc(e, t) {
  return { annotationType_: e, options_: t, make_: ox, extend_: ix, decorate_20223_: sx };
}
function ox(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ix(e, t, r, n) {
  return (
    cx(e, this, t, r),
    e.defineComputedProperty_(t, _r({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function sx(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = on(this)[$],
        i = _r({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new dt(i)));
    }),
    function () {
      return this[$].getObservablePropValue_(n);
    }
  );
}
function cx(e, t, r, n) {
  (t.annotationType_, n.get);
}
function yi(e, t) {
  return { annotationType_: e, options_: t, make_: ux, extend_: lx, decorate_20223_: dx };
}
function ux(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function lx(e, t, r, n) {
  var a, o;
  return (
    fx(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : mr,
      n,
    )
  );
}
function dx(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(s, c) {
    var u,
      l,
      d = on(s)[$],
      p = new pr(
        c,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : mr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, p), o.add(s));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[$].getObservablePropValue_(a));
      },
      set: function (c) {
        return (o.has(this) || i(this, c), this[$].setObservablePropValue_(a, c));
      },
      init: function (c) {
        return (o.has(this) || i(this, c), c);
      },
    };
}
function fx(e, t, r, n) {
  t.annotationType_;
}
var vx = "true",
  px = Eg();
function Eg(e) {
  return { annotationType_: vx, options_: e, make_: hx, extend_: gx, decorate_20223_: bx };
}
function hx(e, t, r, n) {
  var a, o;
  if (r.get) return wi.make_(e, t, r, n);
  if (r.set) {
    var i = en(r.set) ? r.set : yr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: R.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (Et(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (gg(r.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? tn.bound : tn;
      return u.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? Wa.bound : Wa;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? fe.ref : fe;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function gx(e, t, r, n) {
  var a, o;
  if (r.get) return wi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: R.safeDescriptors ? e.isPlainObject_ : !0, set: yr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? fe.ref : fe;
  return s.extend_(e, t, r, n);
}
function bx(e, t) {
  Y("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var _x = "observable",
  mx = "observable.ref",
  yx = "observable.shallow",
  wx = "observable.struct",
  xg = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(xg);
function ko(e) {
  return e || xg;
}
var dc = yi(_x),
  kx = yi(mx, { enhancer: mi }),
  Ox = yi(yx, { enhancer: WE }),
  Sx = yi(wx, { enhancer: KE }),
  Cg = xt(dc);
function Oo(e) {
  return e.deep === !0 ? mr : e.deep === !1 ? mi : xx(e.defaultDecorator);
}
function Ex(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Eg(e)) : void 0;
}
function xx(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : mr;
}
function Pg(e, t, r) {
  if (to(t)) return dc.decorate_20223_(e, t);
  if (br(t)) {
    eo(e, t, dc);
    return;
  }
  return Hg(e)
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
fg(Pg, Cg);
var Cx = {
    box: function (t, r) {
      var n = ko(r);
      return new pr(t, Oo(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = ko(r);
      return (R.useProxies === !1 || n.proxy === !1 ? EC : hC)(t, Oo(n), n.name);
    },
    map: function (t, r) {
      var n = ko(r);
      return new Kg(t, Oo(n), n.name);
    },
    set: function (t, r) {
      var n = ko(r);
      return new Jg(t, Oo(n), n.name);
    },
    object: function (t, r, n) {
      return Cr(function () {
        return oC(R.useProxies === !1 || n?.proxy === !1 ? on({}, n) : fC({}, n), t, r);
      });
    },
    ref: xt(kx),
    shallow: xt(Ox),
    deep: Cg,
    struct: xt(Sx),
  },
  fe = fg(Pg, Cx),
  Rg = "computed",
  Px = "computed.struct",
  fc = Jc(Rg),
  Rx = Jc(Px, { equals: Go.structural }),
  wi = function (t, r) {
    if (to(r)) return fc.decorate_20223_(t, r);
    if (br(r)) return eo(t, r, fc);
    if (Zt(t)) return xt(Jc(Rg, t));
    var n = Zt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new dt(n));
  };
Object.assign(wi, fc);
wi.struct = xt(Rx);
var dv,
  fv,
  Ho = 0,
  Ax = 1,
  Ix =
    (dv = (fv = Vo(function () {}, "name")) == null ? void 0 : fv.configurable) != null ? dv : !1,
  vv = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return jx(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Ix && ((vv.value = e), Et(a, "name", vv)),
    a
  );
}
function jx(e, t, r, n, a) {
  var o = Dx(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    Mx(o);
  }
}
function Dx(e, t, r, n) {
  var a = !1,
    o = 0,
    i = R.trackingDerivation,
    s = !t || !i;
  et();
  var c = R.allowStateChanges;
  s && (Er(), (c = ki(!0)));
  var u = Yc(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: i,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: Ax++,
      parentActionId_: Ho,
    };
  return ((Ho = l.actionId_), l);
}
function Mx(e) {
  (Ho !== e.actionId_ && Y(30),
    (Ho = e.parentActionId_),
    e.error_ !== void 0 && (R.suppressReactionErrors = !0),
    Oi(e.prevAllowStateChanges_),
    Ta(e.prevAllowStateReads_),
    tt(),
    e.runAsAction_ && $t(e.prevDerivation_),
    (R.suppressReactionErrors = !1));
}
function Tx(e, t) {
  var r = ki(e);
  try {
    return t();
  } finally {
    Oi(r);
  }
}
function ki(e) {
  var t = R.allowStateChanges;
  return ((R.allowStateChanges = e), t);
}
function Oi(e) {
  R.allowStateChanges = e;
}
var pr = (function (e) {
    function t(n, a, o, i, s) {
      var c;
      return (
        o === void 0 && (o = "ObservableValue"),
        s === void 0 && (s = Go.default),
        (c = e.call(this, o) || this),
        (c.enhancer = void 0),
        (c.name_ = void 0),
        (c.equals = void 0),
        (c.hasUnreportedChange_ = !1),
        (c.interceptors_ = void 0),
        (c.changeListeners_ = void 0),
        (c.value_ = void 0),
        (c.dehancer = void 0),
        (c.enhancer = a),
        (c.name_ = o),
        (c.equals = s),
        (c.value_ = a(n, void 0, o)),
        c
      );
    }
    yg(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== R.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ze(this)) {
          var o = Qe(this, { object: this, type: Ct, newValue: a });
          if (!o) return R.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? R.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var o = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          ct(this) && ut(this, { type: Ct, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return no(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Ct,
              newValue: this.value_,
              oldValue: void 0,
            }),
          ao(this, a)
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
        return mg(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(tr),
  dt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Z.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Z.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Ko(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Wo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || Y(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = yr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Go.structural : Go.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Bx(this);
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
          (this.isComputing && Y(32, this.name_, this.derivation),
          R.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          vc(this) &&
            (this.warnAboutUntrackedRead_(), et(), (this.value_ = this.computeValue_(!1)), tt());
        else if ((Fg(this), vc(this))) {
          var n = R.trackingContext;
          (this.keepAlive_ && !n && (R.trackingContext = this),
            this.trackAndCompute() && Nx(this),
            (R.trackingContext = n));
        }
        var a = this.value_;
        if (Io(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && Y(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else Y(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === Z.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || Io(n) || Io(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = ki(!1),
          o;
        if (n) o = Ag(this, this.derivation, this.scope_);
        else if (R.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Ko(i);
          }
        return (Oi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (pc(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          s = void 0;
        return Yx(function () {
          var c = o.get();
          if (!i || a) {
            var u = Er();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Ct,
              object: o,
              newValue: c,
              oldValue: s,
            }),
              $t(u));
          }
          ((i = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return mg(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      an(e, [
        {
          key: "isComputing",
          get: function () {
            return ze(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return ze(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return ze(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return ze(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return ze(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ve(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
dt.isComputingMask_ = 1;
dt.isRunningSetterMask_ = 2;
dt.isBeingObservedMask_ = 4;
dt.isPendingUnobservationMask_ = 8;
dt.diffValueMask_ = 16;
var Si = Sr("ComputedValue", dt),
  Z;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Z || (Z = {}));
var Wo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Wo || (Wo = {}));
var Ko = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Io(e) {
  return e instanceof Ko;
}
function vc(e) {
  switch (e.dependenciesState_) {
    case Z.UP_TO_DATE_:
      return !1;
    case Z.NOT_TRACKING_:
    case Z.STALE_:
      return !0;
    case Z.POSSIBLY_STALE_: {
      for (var t = Yc(!0), r = Er(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Si(i)) {
          if (R.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return ($t(r), Ta(t), !0);
            }
          if (e.dependenciesState_ === Z.STALE_) return ($t(r), Ta(t), !0);
        }
      }
      return (jg(e), $t(r), Ta(t), !1);
    }
  }
}
function Ag(e, t, r) {
  var n = Yc(!0);
  (jg(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++R.runId));
  var a = R.trackingDerivation;
  ((R.trackingDerivation = e), R.inBatch++);
  var o;
  if (R.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new Ko(i);
    }
  return (R.inBatch--, (R.trackingDerivation = a), Fx(e), Ta(n), o);
}
function Fx(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = Z.UP_TO_DATE_,
      a = 0,
      o = e.unboundDepsCount_,
      i = 0;
    i < o;
    i++
  ) {
    var s = r[i];
    (s.diffValue === 0 && ((s.diffValue = 1), a !== i && (r[a] = s), a++),
      s.dependenciesState_ > n && (n = s.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, o = t.length; o--; ) {
    var c = t[o];
    (c.diffValue === 0 && Mg(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), Ux(u, e));
  }
  n !== Z.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function pc(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Mg(t[r], e);
  e.dependenciesState_ = Z.NOT_TRACKING_;
}
function Ig(e) {
  var t = Er();
  try {
    return e();
  } finally {
    $t(t);
  }
}
function Er() {
  var e = R.trackingDerivation;
  return ((R.trackingDerivation = null), e);
}
function $t(e) {
  R.trackingDerivation = e;
}
function Yc(e) {
  var t = R.allowStateReads;
  return ((R.allowStateReads = e), t);
}
function Ta(e) {
  R.allowStateReads = e;
}
function jg(e) {
  if (e.dependenciesState_ !== Z.UP_TO_DATE_) {
    e.dependenciesState_ = Z.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Z.UP_TO_DATE_;
  }
}
var jo = function () {
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
  Do = !0,
  Dg = !1,
  R = (function () {
    var e = pi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Do = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new jo().version && (Do = !1),
      Do
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new jo()))
        : (setTimeout(function () {
            Dg || Y(35);
          }, 1),
          new jo())
    );
  })();
function Lx() {
  if (((R.pendingReactions.length || R.inBatch || R.isRunningReactions) && Y(36), (Dg = !0), Do)) {
    var e = pi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (R = new jo()));
  }
}
function Ux(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Mg(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Tg(e));
}
function Tg(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), R.pendingUnobservations.push(e));
}
function et() {
  R.inBatch++;
}
function tt() {
  if (--R.inBatch === 0) {
    Ug();
    for (var e = R.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof dt && r.suspend_()));
    }
    R.pendingUnobservations = [];
  }
}
function Fg(e) {
  var t = R.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && R.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && R.inBatch > 0 && Tg(e), !1);
}
function Lg(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Z.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Z.STALE_));
    }));
}
function Nx(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Z.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Z.STALE_)
        : t.dependenciesState_ === Z.UP_TO_DATE_ && (e.lowestObserverState_ = Z.UP_TO_DATE_);
    }));
}
function Bx(e) {
  e.lowestObserverState_ === Z.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Z.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Z.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Z.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var At = (function () {
  function e(r, n, a, o) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = Z.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Wo.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), R.pendingReactions.push(this), Ug());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (et(), (this.isScheduled = !1));
        var n = R.trackingContext;
        if (((R.trackingContext = this), vc(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((R.trackingContext = n), tt());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (et(), (this.isRunning = !0));
        var a = R.trackingContext;
        R.trackingContext = this;
        var o = Ag(this, n, void 0);
        ((R.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && pc(this),
          Io(o) && this.reportExceptionInDerivation_(o.cause),
          tt());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (R.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      (R.suppressReactionErrors || console.error(o, n),
        R.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (et(), pc(this), tt()));
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
          return ze(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return ze(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return ze(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return ze(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return ze(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ve(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
At.isDisposedMask_ = 1;
At.isScheduledMask_ = 2;
At.isTrackPendingMask_ = 4;
At.isRunningMask_ = 8;
At.diffValueMask_ = 16;
var qx = 100,
  hc = function (t) {
    return t();
  };
function Ug() {
  R.inBatch > 0 || R.isRunningReactions || hc($x);
}
function $x() {
  R.isRunningReactions = !0;
  for (var e = R.pendingReactions, t = 0; e.length > 0; ) {
    ++t === qx && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  R.isRunningReactions = !1;
}
var Jo = Sr("Reaction", At);
function zx(e) {
  var t = hc;
  hc = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Fa() {
  return !1;
}
function Vx(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Ng = "action",
  Gx = "action.bound",
  Bg = "autoAction",
  Hx = "autoAction.bound",
  Wx = "<unnamed action>",
  gc = ro(Ng),
  Kx = ro(Gx, { bound: !0 }),
  bc = ro(Bg, { autoAction: !0 }),
  Jx = ro(Hx, { autoAction: !0, bound: !0 });
function qg(e) {
  var t = function (n, a) {
    if (lt(n)) return yr(n.name || Wx, n, e);
    if (lt(a)) return yr(n, a, e);
    if (to(a)) return (e ? bc : gc).decorate_20223_(n, a);
    if (br(a)) return eo(n, a, e ? bc : gc);
    if (br(n)) return xt(ro(e ? Bg : Ng, { name: n, autoAction: e }));
  };
  return t;
}
var Pe = qg(!1);
Object.assign(Pe, gc);
var Wa = qg(!0);
Object.assign(Wa, bc);
Pe.bound = xt(Kx);
Wa.bound = xt(Jx);
function en(e) {
  return lt(e) && e.isMobxAction === !0;
}
function Yx(e, t) {
  var r, n, a, o;
  t === void 0 && (t = vg);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new At(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Zx(t),
      l = !1;
    c = new At(
      i,
      function () {
        l ||
          ((l = !0),
          u(function () {
            ((l = !1), c.isDisposed || c.track(d));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function d() {
    e(c);
  }
  return (
    ((a = t) != null && (a = a.signal) != null && a.aborted) || c.schedule_(),
    c.getDisposer_((o = t) == null ? void 0 : o.signal)
  );
}
var Xx = function (t) {
  return t();
};
function Zx(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Xx;
}
var Qx = "onBO",
  eC = "onBUO";
function tC(e, t, r) {
  return zg(Qx, e, t, r);
}
function $g(e, t, r) {
  return zg(eC, e, t, r);
}
function zg(e, t, r, n) {
  var a = Zo(t),
    o = lt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var s = a[i];
      s && (s.delete(o), s.size === 0 && delete a[i]);
    }
  );
}
var rC = "never",
  So = "always",
  nC = "observed";
function aC(e) {
  e.isolateGlobalState === !0 && Lx();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (R.useProxies = t === So ? !0 : t === rC ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (R.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === So ? So : r === nC;
    ((R.enforceActions = n), (R.allowStateChanges = !(n === !0 || n === So)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (R[a] = !!e[a]);
  }),
    (R.allowStateReads = !R.observableRequiresReaction),
    e.reactionScheduler && zx(e.reactionScheduler));
}
function oC(e, t, r, n) {
  var a = NE(t);
  return (
    Cr(function () {
      var o = on(e, n)[$];
      _i(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function iC(e, t) {
  return Vg(Zo(e, t));
}
function Vg(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = sC(e.observing_).map(Vg)),
    t
  );
}
function sC(e) {
  return Array.from(new Set(e));
}
var cC = 0;
function Gg() {
  this.message = "FLOW_CANCELLED";
}
Gg.prototype = Object.create(Error.prototype);
var Ts = Og("flow"),
  uC = Og("flow.bound", { bound: !0 }),
  tn = Object.assign(function (t, r) {
    if (to(r)) return Ts.decorate_20223_(t, r);
    if (br(r)) return eo(t, r, Ts);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          c = arguments,
          u = ++cC,
          l = Pe(a + " - runid: " + u + " - init", n).apply(s, c),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              p = void 0;
              var w;
              try {
                w = Pe(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (O) {
                return f(O);
              }
              m(w);
            }
            function _(k) {
              p = void 0;
              var w;
              try {
                w = Pe(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
              } catch (O) {
                return f(O);
              }
              m(w);
            }
            function m(k) {
              if (lt(k?.then)) {
                k.then(m, f);
                return;
              }
              return k.done ? g(k.value) : ((p = Promise.resolve(k.value)), p.then(b, _));
            }
            b(void 0);
          });
        return (
          (v.cancel = Pe(a + " - runid: " + u + " - cancel", function () {
            try {
              p && pv(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Vr, Vr), pv(f), d(new Gg()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, Ts);
tn.bound = xt(uC);
function pv(e) {
  lt(e.cancel) && e.cancel();
}
function Ka(e) {
  return e?.isMobXFlow === !0;
}
function lC(e, t) {
  return e ? Ci(e) || !!e[$] || Kc(e) || Jo(e) || Si(e) : !1;
}
function Hg(e) {
  return lC(e);
}
function Nt(e, t) {
  (t === void 0 && (t = void 0), et());
  try {
    return e.apply(t);
  } finally {
    tt();
  }
}
function zr(e) {
  return e[$];
}
var dC = {
  has: function (t, r) {
    return zr(t).has_(r);
  },
  get: function (t, r) {
    return zr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return br(r) ? ((a = zr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return br(r) ? ((n = zr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = zr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return zr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    Y(13);
  },
};
function fC(e, t) {
  var r, n;
  return (
    pg(),
    (e = on(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, dC))
  );
}
function Ze(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function no(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    hg(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Qe(e, t) {
  var r = Er();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && Y(14), !!t);
      a++
    );
    return t;
  } finally {
    $t(r);
  }
}
function ct(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function ao(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    hg(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ut(e, t) {
  var r = Er(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    $t(r);
  }
}
function Ei(e, t, r) {
  return (
    Cr(function () {
      var n,
        a = on(e, r)[$];
      ((n = t) != null || (t = VE(e)),
        _i(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var hv = "splice",
  Ct = "update",
  vC = 1e4,
  pC = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : qt(Yo, r)
              ? Yo[r]
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
      Y(15);
    },
  },
  Xc = (function () {
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
        (this.enhancer_ = function (i, s) {
          return n(i, s, "ObservableArray[..]");
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
        return no(this, n);
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
          ao(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && Y("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && Y(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Qg(n + a + 1));
      }),
      (t.spliceWithArray_ = function (n, a, o) {
        var i = this;
        this.atom_;
        var s = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > s ? (n = s) : n < 0 && (n = Math.max(0, s + n)),
          arguments.length === 1
            ? (a = s - n)
            : a == null
              ? (a = 0)
              : (a = Math.max(0, Math.min(a, s - n))),
          o === void 0 && (o = uc),
          Ze(this))
        ) {
          var c = Qe(this, { object: this.proxy_, type: hv, index: n, removedCount: a, added: o });
          if (!c) return uc;
          ((a = c.removedCount), (o = c.added));
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
          this.updateArrayLength_(s, u);
        }
        var l = this.spliceItemsIntoValues_(n, a, o);
        return (
          (a !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, a, o) {
        if (o.length < vC) {
          var i;
          return (i = this.values_).splice.apply(i, [n, a].concat(o));
        } else {
          var s = this.values_.slice(n, n + a),
            c = this.values_.slice(n + a);
          this.values_.length += o.length - a;
          for (var u = 0; u < o.length; u++) this.values_[n + u] = o[u];
          for (var l = 0; l < c.length; l++) this.values_[n + o.length + l] = c[l];
          return s;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, a, o) {
        var i = !this.owned_ && Fa(),
          s = ct(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Ct,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), s && ut(this, c));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && Fa(),
          s = ct(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: hv,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && ut(this, c));
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
        if ((this.legacyMode_ && n > o.length && Y(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (Ze(this)) {
            var s = Qe(this, { type: Ct, object: this.proxy_, index: n, newValue: a });
            if (!s) return;
            a = s.newValue;
          }
          a = this.enhancer_(a, i);
          var c = a !== i;
          c && ((o[n] = a), this.notifyArrayChildUpdate_(n, a, i));
        } else {
          for (var u = new Array(n + 1 - o.length), l = 0; l < u.length - 1; l++) u[l] = void 0;
          ((u[u.length - 1] = a), this.spliceWithArray_(o.length, 0, u));
        }
      }),
      e
    );
  })();
function hC(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    pg(),
    Cr(function () {
      var a = new Xc(r, t, n, !1);
      bg(a.values_, $, a);
      var o = new Proxy(a.values_, pC);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Yo = {
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
    return (R.trackingDerivation && Y(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    R.trackingDerivation && Y(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[$],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
le("at", Je);
le("concat", Je);
le("flat", Je);
le("includes", Je);
le("indexOf", Je);
le("join", Je);
le("lastIndexOf", Je);
le("slice", Je);
le("toString", Je);
le("toLocaleString", Je);
le("toSorted", Je);
le("toSpliced", Je);
le("with", Je);
le("every", ft);
le("filter", ft);
le("find", ft);
le("findIndex", ft);
le("findLast", ft);
le("findLastIndex", ft);
le("flatMap", ft);
le("forEach", ft);
le("map", ft);
le("some", ft);
le("toReversed", ft);
le("reduce", Wg);
le("reduceRight", Wg);
function le(e, t) {
  typeof Array.prototype[e] == "function" && (Yo[e] = t(e));
}
function Je(e) {
  return function () {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ft(e) {
  return function (t, r) {
    var n = this,
      a = this[$];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, s) {
      return t.call(r, i, s, n);
    });
  };
}
function Wg(e) {
  return function () {
    var t = this,
      r = this[$];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      a = arguments[0];
    return (
      (arguments[0] = function (o, i, s) {
        return a(o, i, s, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var gC = Sr("ObservableArrayAdministration", Xc);
function xi(e) {
  return gi(e) && gC(e[$]);
}
var bC = {},
  Yt = "add",
  Xo = "delete",
  Kg = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = bC),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        lt(Map) || Y(18),
        Cr(function () {
          ((o.keysAtom_ = wg("ObservableMap.keys()")),
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
        if (!R.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new pr(this.has_(n), mi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            $g(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (Ze(this)) {
          var i = Qe(this, { type: o ? Ct : Yt, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ze(this))) {
          var o = Qe(this, { type: Xo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Fa(),
            s = ct(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Xo,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Nt(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            s && ut(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== R.UNCHANGED)) {
          var i = Fa(),
            s = ct(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ct,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), s && ut(this, c));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Nt(function () {
            var u,
              l = new pr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = Fa(),
          s = ct(this),
          c =
            s || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Yt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        s && ut(this, c);
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
        return gv({
          next: function () {
            var i = a.next(),
              s = i.done,
              c = i.value;
            return { done: s, value: s ? void 0 : n.get(c) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          a = this.keys();
        return gv({
          next: function () {
            var i = a.next(),
              s = i.done,
              c = i.value;
            return { done: s, value: s ? void 0 : [c, n.get(c)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, a) {
        for (var o = Gr(this), i; !(i = o()).done; ) {
          var s = i.value,
            c = s[0],
            u = s[1];
          n.call(a, u, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          xr(n) && (n = new Map(n)),
          Nt(function () {
            Zt(n)
              ? UE(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      s = o[1];
                    return a.set(i, s);
                  })
                : nn(n)
                  ? (LE(n) || Y(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && Y(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Nt(function () {
          Ig(function () {
            for (var a = Gr(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Nt(function () {
            for (
              var o = _C(n), i = new Map(), s = !1, c = Gr(a.data_.keys()), u;
              !(u = c()).done;
            ) {
              var l = u.value;
              if (!o.has(l)) {
                var d = a.delete(l);
                if (d) s = !0;
                else {
                  var p = a.data_.get(l);
                  i.set(l, p);
                }
              }
            }
            for (var v = Gr(o.entries()), g; !(g = v()).done; ) {
              var f = g.value,
                h = f[0],
                b = f[1],
                _ = a.data_.has(h);
              if ((a.set(h, b), a.data_.has(h))) {
                var m = a.data_.get(h);
                (i.set(h, m), _ || (s = !0));
              }
            }
            if (!s)
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
        return ao(this, n);
      }),
      (t.intercept_ = function (n) {
        return no(this, n);
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
  xr = Sr("ObservableMap", Kg);
function gv(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Qc(e));
}
function _C(e) {
  if (nn(e) || xr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Zt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return Y(21, e);
}
var mC = {},
  Jg = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = mC),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        lt(Set) || Y(22),
        (this.enhancer_ = function (i, s) {
          return n(i, s, a);
        }),
        Cr(function () {
          ((o.atom_ = wg(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Nt(function () {
          Ig(function () {
            for (var a = Gr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Gr(this), i; !(i = o()).done; ) {
          var s = i.value;
          n.call(a, s, s, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, Ze(this))) {
          var o = Qe(this, { type: Yt, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Nt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            s = ct(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Yt,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && ut(this, c);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ze(this)) {
          var o = Qe(this, { type: Xo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            s = ct(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Xo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Nt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && ut(this, c),
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
        return bv({
          next: function () {
            var o = n.next(),
              i = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: [i, i], done: s };
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
        return bv({
          next: function () {
            var i = a.next(),
              s = i.value,
              c = i.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Ut(n) && !wt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Ut(n) && !wt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Ut(n) && !wt(n)) return n.symmetricDifference(this);
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
        if (Ut(n) && !wt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          wt(n) && (n = new Set(n)),
          Nt(function () {
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
                : n != null && Y("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return ao(this, n);
      }),
      (t.intercept_ = function (n) {
        return no(this, n);
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
  wt = Sr("ObservableSet", Jg);
function bv(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Qc(e));
}
var _v = Object.create(null),
  mv = "remove",
  Yg = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = px),
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
        if (o instanceof dt) return (o.set(a), !0);
        if (Ze(this)) {
          var i = Qe(this, { type: Ct, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== R.UNCHANGED)) {
          var s = ct(this),
            c = !1,
            u =
              s || c
                ? {
                    type: Ct,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), s && ut(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (R.trackingDerivation && !qt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          qt(this.target_, n)
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
        if (!R.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new pr(n in this.target_, mi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[kt]) != null && o[n]) return;
            Y(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== hi; ) {
            var s = Vo(i, n);
            if (s) {
              var c = a.make_(this, n, s, i);
              if (c === 0) return;
              if (c === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          wv(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var s = o.extend_(this, n, a, i);
        return (s && wv(this, o, n), s);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          et();
          var i = this.delete_(n);
          if (!i) return i;
          if (Ze(this)) {
            var s = Qe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Yt,
              newValue: a.value,
            });
            if (!s) return null;
            var c = s.newValue;
            a.value !== c && (a = _r({}, a, { value: c }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Et(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          tt();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          et();
          var s = this.delete_(n);
          if (!s) return s;
          if (Ze(this)) {
            var c = Qe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Yt,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var u = yv(n),
            l = {
              configurable: R.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Et(this.target_, n, l);
          var d = new pr(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          tt();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          et();
          var i = this.delete_(n);
          if (!i) return i;
          if (Ze(this)) {
            var s = Qe(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Yt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var c = yv(n),
            u = {
              configurable: R.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else Et(this.target_, n, u);
          (this.values_.set(n, new dt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          tt();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !qt(this.target_, n))) return !0;
        if (Ze(this)) {
          var o = Qe(this, { object: this.proxy_ || this.target_, name: n, type: mv });
          if (!o) return null;
        }
        try {
          var i;
          et();
          var s = ct(this),
            c = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (s || c)) {
            var d;
            l = (d = Vo(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof pr && (l = u.value_), Lg(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            s || c)
          ) {
            var p = {
              type: mv,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && ut(this, p);
          }
        } finally {
          tt();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return ao(this, n);
      }),
      (t.intercept_ = function (n) {
        return no(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = ct(this),
          s = !1;
        if (i || s) {
          var c =
            i || s
              ? {
                  type: Yt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && ut(this, c);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), _i(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function on(e, t) {
  var r;
  if (qt(e, $)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Yg(e, new Map(), String(n), Ex(t));
  return (bi(e, $, a), e);
}
var yC = Sr("ObservableObjectAdministration", Yg);
function yv(e) {
  return (
    _v[e] ||
    (_v[e] = {
      get: function () {
        return this[$].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[$].setObservablePropValue_(e, r);
      },
    })
  );
}
function Ci(e) {
  return gi(e) ? yC(e[$]) : !1;
}
function wv(e, t, r) {
  var n;
  (n = e.target_[kt]) == null || delete n[r];
}
var wC = Zg(0),
  kC = (function () {
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
  Fs = 0,
  Xg = function () {};
function OC(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
OC(Xg, Array.prototype);
var Zc = (function (e) {
  function t(n, a, o, i) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (s = e.call(this) || this),
      Cr(function () {
        var c = new Xc(o, a, i, !0);
        ((c.proxy_ = s),
          bg(s, $, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          kC && Object.defineProperty(s, "0", wC));
      }),
      s
    );
  }
  yg(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return xi(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Qc({
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
})(Xg);
Object.entries(Yo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && bi(Zc.prototype, t, r);
});
function Zg(e) {
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
function SC(e) {
  Et(Zc.prototype, "" + e, Zg(e));
}
function Qg(e) {
  if (e > Fs) {
    for (var t = Fs; t < e + 100; t++) SC(t);
    Fs = e;
  }
}
Qg(1e3);
function EC(e, t, r) {
  return new Zc(e, t, r);
}
function Zo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (xi(e)) return (t !== void 0 && Y(23), e[$].atom_);
    if (wt(e)) return e.atom_;
    if (xr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || Y(25, t, _c(e)), r);
    }
    if (Ci(e)) {
      if (!t) return Y(26);
      var n = e[$].values_.get(t);
      return (n || Y(27, t, _c(e)), n);
    }
    if (Kc(e) || Si(e) || Jo(e)) return e;
  } else if (lt(e) && Jo(e[$])) return e[$];
  Y(28);
}
function xC(e, t) {
  if ((e || Y(29), Kc(e) || Si(e) || Jo(e) || xr(e) || wt(e))) return e;
  if (e[$]) return e[$];
  Y(24, e);
}
function _c(e, t) {
  var r;
  if (t !== void 0) r = Zo(e, t);
  else {
    if (en(e)) return e.name;
    Ci(e) || xr(e) || wt(e) ? (r = xC(e)) : (r = Zo(e));
  }
  return r.name_;
}
function Cr(e) {
  var t = Er(),
    r = ki(!0);
  et();
  try {
    return e();
  } finally {
    (tt(), Oi(r), $t(t));
  }
}
var kv = hi.toString;
function eb(e, t, r) {
  return (r === void 0 && (r = -1), mc(e, t, r));
}
function mc(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = kv.call(e);
  if (i !== kv.call(t)) return !1;
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
  ((e = Ov(e)), (t = Ov(t)));
  var s = i === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      u = t.constructor;
    if (
      c !== u &&
      !(lt(c) && c instanceof c && lt(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (a = a || []));
  for (var l = n.length; l--; ) if (n[l] === e) return a[l] === t;
  if ((n.push(e), a.push(t), s)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!mc(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!(qt(t, g) && mc(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Ov(e) {
  return xi(e) ? e.slice() : nn(e) || xr(e) || Ut(e) || wt(e) ? Array.from(e.entries()) : e;
}
var Sv,
  CC = ((Sv = pi().Iterator) == null ? void 0 : Sv.prototype) || {};
function Qc(e) {
  return ((e[Symbol.iterator] = PC), Object.assign(Object.create(CC), e));
}
function PC() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = pi();
  typeof t[e] > "u" && Y("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Vx, extras: { getDebugName: _c }, $mobx: $ });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Ei) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function RC(e) {
  e();
}
function AC(e) {
  (e || (e = RC), aC({ reactionScheduler: e }));
}
function IC(e) {
  return iC(e);
}
var jC = 1e4,
  DC = 1e4,
  MC = (function () {
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
            (n === void 0 && (n = jC), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, DC));
        },
      }),
      e
    );
  })(),
  TC = typeof FinalizationRegistry < "u" ? FinalizationRegistry : MC,
  Ja = new TC(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Ls = { exports: {} },
  Us = {};
var Ev;
function FC() {
  if (Ev) return Us;
  Ev = 1;
  var e = wr();
  function t(d, p) {
    return (d === p && (d !== 0 || 1 / d === 1 / p)) || (d !== d && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function s(d, p) {
    var v = p(),
      g = n({ inst: { value: v, getSnapshot: p } }),
      f = g[0].inst,
      h = g[1];
    return (
      o(
        function () {
          ((f.value = v), (f.getSnapshot = p), c(f) && h({ inst: f }));
        },
        [d, v, p],
      ),
      a(
        function () {
          return (
            c(f) && h({ inst: f }),
            d(function () {
              c(f) && h({ inst: f });
            })
          );
        },
        [d],
      ),
      i(v),
      v
    );
  }
  function c(d) {
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
      : s;
  return (
    (Us.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Us
  );
}
var xv;
function LC() {
  return (xv || ((xv = 1), (Ls.exports = FC())), Ls.exports);
}
var UC = LC();
function Cv(e) {
  e.reaction = new At("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function NC(e, t) {
  t === void 0 && (t = "observed");
  var r = S.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          Ja.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (Cv(n), (n.stateVersion = Symbol())),
          function () {
            var c;
            ((n.onStoreChange = null),
              (c = n.reaction) === null || c === void 0 || c.dispose(),
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
  (a.reaction || (Cv(a), Ja.register(r, a, a)),
    S.useDebugValue(a.reaction, IC),
    UC.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
  var o, i;
  if (
    (a.reaction.track(function () {
      try {
        o = e();
      } catch (s) {
        i = s;
      }
    }),
    i)
  )
    throw i;
  return o;
}
var Ns,
  Bs,
  tb = typeof Symbol == "function" && Symbol.for,
  BC =
    (Bs =
      (Ns = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ns === void 0
        ? void 0
        : Ns.configurable) !== null && Bs !== void 0
      ? Bs
      : !1,
  Pv = tb
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Rv = tb
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function qC(e, t) {
  var r;
  if (Rv && e.$$typeof === Rv)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (Pv && e.$$typeof === Pv && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (s, c) {
    return NC(function () {
      return a(s, c);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    BC && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = y.forwardRef(i)),
    (i = y.memo(i)),
    zC(e, i),
    i
  );
}
var $C = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function zC(e, t) {
  Object.keys(e).forEach(function (r) {
    $C[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var qs;
AC(Qo.unstable_batchedUpdates);
qs = Ja.finalizeAllImmediately;
function VC(e, t) {
  if (Av(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Av(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Av(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Iv = Symbol("patchMixins"),
  rb = Symbol("patchedDefinition");
function GC(e, t) {
  var r = (e[Iv] = e[Iv] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function jv(e, t) {
  for (var r = this, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  t.locks++;
  try {
    var i;
    return (e != null && (i = e.apply(this, a)), i);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(r, a);
        }));
  }
}
function Dv(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    jv.call.apply(jv, [this, e, t].concat(o));
  };
  return r;
}
function HC(e, t, r) {
  var n = GC(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[rb])) {
    var o = e[t],
      i = nb(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function nb(e, t, r, n, a) {
  var o,
    i = Dv(a, n);
  return (
    (o = {}),
    (o[rb] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (c) {
      if (this === e) i = Dv(c, n);
      else {
        var u = nb(this, t, r, n, c);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var Mv = Symbol("ObserverAdministration"),
  Tv = Symbol("isMobXReactObserver");
function yc(e) {
  var t;
  return (t = e[Mv]) != null
    ? t
    : (e[Mv] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: wc(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function WC(e) {
  var t = e.prototype;
  if (e[Tv]) {
    var r = wc(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Tv] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Fv;
    else if (t.shouldComponentUpdate !== Fv)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = wc(e);
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
        value: KC.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        s = yc(this);
      return (
        (s.mounted = !0),
        Ja.unregister(this),
        (s.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    HC(t, "componentWillUnmount", function () {
      var i,
        s = yc(this);
      ((i = s.reaction) == null || i.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function wc(e) {
  return e.displayName || e.name || "<component>";
}
function KC(e) {
  var t = e.bind(this),
    r = yc(this);
  function n() {
    r.reaction || ((r.reaction = JC(r)), r.mounted || Ja.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = Tx(!1, t);
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
function JC(e) {
  return new At(e.name + ".render()", function () {
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
function Fv(e, t) {
  return this.state !== t ? !0 : !VC(this.props, e);
}
function Pi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? WC(e)
      : qC(e)
  );
}
function kc() {
  return (
    (kc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    kc.apply(null, arguments)
  );
}
function YC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var XC = ["children"],
  Lv = S.createContext({});
function ab(e) {
  var t = e.children,
    r = YC(e, XC),
    n = S.useContext(Lv),
    a = S.useRef(kc({}, n, r)),
    o = a.current;
  return S.createElement(Lv.Provider, { value: o }, t);
}
ab.displayName = "MobXProvider";
S.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!fe) throw new Error("mobx-react requires mobx to be available");
var ZC = Object.defineProperty,
  QC = Object.getOwnPropertyDescriptor,
  Vt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? QC(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && ZC(t, r, a), a);
  };
let jt = class {
  constructor() {
    ((this.isLoading = !0), Ei(this));
  }
  saveUsers(t) {
    ((this.users = t), (this.isLoading = !1));
  }
  saveSort(t) {
    this.sort = t;
  }
  saveDuplicates(t) {
    this.duplicates = t;
  }
  loading() {
    this.isLoading = !0;
  }
  stopLoading() {
    this.isLoading = !1;
  }
};
Vt([fe], jt.prototype, "isLoading", 2);
Vt([fe], jt.prototype, "users", 2);
Vt([fe], jt.prototype, "duplicates", 2);
Vt([fe], jt.prototype, "sort", 2);
Vt([Pe.bound], jt.prototype, "saveUsers", 1);
Vt([Pe.bound], jt.prototype, "saveSort", 1);
Vt([Pe.bound], jt.prototype, "saveDuplicates", 1);
Vt([Pe], jt.prototype, "loading", 1);
Vt([Pe], jt.prototype, "stopLoading", 1);
const eP = new jt();
var tP = Object.defineProperty,
  rP = Object.getOwnPropertyDescriptor,
  oo = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? rP(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && tP(t, r, a), a);
  };
class sn {
  constructor() {
    ((this.isLoading = !0), Ei(this));
  }
  saveMetadata(t) {
    ((this.metadata = t), (this.isLoading = !1));
  }
  loading() {
    this.isLoading = !0;
  }
  stopLoading() {
    this.isLoading = !1;
  }
}
oo([fe], sn.prototype, "isLoading", 2);
oo([fe], sn.prototype, "metadata", 2);
oo([Pe.bound], sn.prototype, "saveMetadata", 1);
oo([Pe], sn.prototype, "loading", 1);
oo([Pe], sn.prototype, "stopLoading", 1);
const nP = new sn();
var aP = Object.defineProperty,
  oP = Object.getOwnPropertyDescriptor,
  ob = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? oP(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && aP(t, r, a), a);
  };
class eu {
  constructor() {
    ((this.state = "ROOT"), Ei(this));
  }
  saveState(t) {
    this.state = t;
  }
}
ob([fe], eu.prototype, "state", 2);
ob([Pe.bound], eu.prototype, "saveState", 1);
const iP = new eu();
class sP {
  constructor() {
    ((this.usersStore = eP), (this.usersMetadata = nP), (this.stateStore = iP));
  }
}
const ib = new sP(),
  cP = y.createContext(ib),
  Ri = () => y.useContext(cP),
  uP = Pi(() => {
    const { usersStore: e, usersMetadata: t, stateStore: r } = Ri(),
      n = dg(!0, !0, !0, t.metadata.user.properties),
      a = e.users;
    return !a || a.length === 0
      ? q.jsx("div", { children: "User Table is EMPTY" })
      : q.jsx("div", {
          children: q.jsxs("div", {
            children: [
              q.jsx(Wc, {
                head: n,
                onSort: async (o) => {
                  let i = { name: o.key, sortType: o.sortOrder };
                  e.loading();
                  try {
                    const s = await Bt.invoke("fetch", { sortType: i });
                    (e.saveUsers(s), e.saveSort(i));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: a.map((o, i) => {
                  const s = Object.keys(o.fields).map((c) => ({ key: c, content: o.fields[c] }));
                  return (
                    s.push({
                      key: "delete",
                      content: q.jsx("div", {
                        children: q.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Bt.invoke("delete", { id: o.id }));
                              const c = await Bt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(c);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    }),
                    { key: `row-${i}-${o.id}`, cells: s }
                  );
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: q.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              q.jsx("br", {}),
              q.jsx("br", {}),
              q.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const o = await Bt.invoke("duplicate");
                    (e.saveDuplicates(o), r.saveState("DUPLICATE"));
                  } finally {
                    e.stopLoading();
                  }
                },
                children: "Search Duplicates",
              }),
            ],
          }),
        });
  }),
  lP = Pi(() => {
    const { usersMetadata: e, usersStore: t, stateStore: r } = Ri(),
      [n, a] = y.useState({}),
      o = (s) => {
        const { name: c, value: u, type: l } = s.target;
        a((d) => ({ ...d, [c]: l === "number" ? Number(u) : u }));
      },
      i = async (s) => {
        (s.preventDefault(),
          console.log("Form Data:", n),
          await Bt.invoke("create", { data: n }),
          t.loading());
        try {
          (t.saveUsers(await Bt.invoke("fetch", { sortType: t.sort })), r.saveState("ROOT"));
        } finally {
          t.stopLoading();
        }
      };
    return q.jsx("div", {
      children: q.jsxs("form", {
        onSubmit: i,
        children: [
          Object.keys(e.metadata.user.properties).map((s) => {
            let c = e.metadata.user.properties[s];
            return q.jsxs(
              "div",
              {
                children: [
                  q.jsx("label", { htmlFor: s, children: s }),
                  q.jsx("br", {}),
                  q.jsx("input", {
                    type: c.type === "integer" || c.type === "smallint" ? "number" : "text",
                    id: s,
                    name: s,
                    onChange: o,
                  }),
                  q.jsx("br", {}),
                ],
              },
              s,
            );
          }),
          q.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  dP = Pi(() => {
    const { usersStore: e, usersMetadata: t } = Ri(),
      r = dg(!0, !1, !1, t.metadata.duplicate.properties),
      n = e.duplicates;
    return !n || n.length === 0
      ? q.jsx("div", { children: "Duplicate Table is EMPTY" })
      : q.jsx("div", {
          children: q.jsxs("div", {
            children: [
              q.jsx(Wc, {
                head: r,
                rows: n.map((a, o) => {
                  const i = Object.keys(a.fields).map((s) => ({ key: s, content: a.fields[s] }));
                  return { key: `row-${o}-1`, cells: i };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: q.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              q.jsx("br", {}),
              q.jsx("br", {}),
            ],
          }),
        });
  });
function fP() {
  const { usersStore: e, usersMetadata: t, stateStore: r } = Ri();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          t.saveMetadata(await Bt.invoke("fetchMetadata"));
          const a = await Bt.invoke("fetch", { type: "USER", sortType: e.sort });
          e.saveUsers(a);
        } finally {
          (t.stopLoading(), e.stopLoading());
        }
      })().catch(console.error);
    }, []),
    e.isLoading || t.isLoading)
  )
    return "loading....";
  if (!t.metadata) return q.jsx("div", { children: "Loading Error" });
  switch (r.state) {
    case "ROOT":
      return q.jsx("div", {
        children: q.jsxs("div", {
          children: [
            q.jsx("button", { onClick: () => r.saveState("ADD_USER"), children: "Add a new User" }),
            q.jsx("br", {}),
            q.jsx("br", {}),
            q.jsx(uP, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return q.jsx("div", {
        children: q.jsxs("div", {
          children: [
            q.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            q.jsx("br", {}),
            q.jsx("br", {}),
            q.jsx(dP, {}),
          ],
        }),
      });
    case "ADD_USER":
      return q.jsx("div", {
        children: q.jsxs("div", {
          children: [
            q.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            q.jsx("br", {}),
            q.jsx("br", {}),
            q.jsx(lP, {}),
          ],
        }),
      });
    default:
      return q.jsxs("div", { children: ["ERROR: unsupprted state $", r.state] });
  }
}
const vP = Pi(fP),
  pP = document.getElementById("root"),
  hP = bb.createRoot(pP),
  Uv = () => {
    hP.render(q.jsx(ab, { ...ib, children: q.jsx(vP, {}) }));
  };
Bt.view.theme
  .enable()
  .then(() => {
    Uv();
  })
  .catch((e) => {
    (console.error(e.message), Uv());
  });
export {
  sf as A,
  _e as B,
  uh as C,
  ui as D,
  ci as E,
  AP as F,
  RP as G,
  xP as H,
  S as R,
  Dm as T,
  Ke as _,
  ge as a,
  Ys as b,
  he as c,
  Q as d,
  We as e,
  G as f,
  E as g,
  se as h,
  kr as i,
  Se as j,
  ne as k,
  Dy as l,
  Lt as m,
  It as n,
  P as o,
  Im as p,
  Q_ as q,
  y as r,
  Pm as s,
  CP as t,
  EP as u,
  SP as v,
  Jk as w,
  OP as x,
  PP as y,
  of as z,
};
