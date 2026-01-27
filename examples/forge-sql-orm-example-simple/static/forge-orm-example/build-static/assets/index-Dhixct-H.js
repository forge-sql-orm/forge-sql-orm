const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-BCqYYRNo.js",
      "./lodash-vendor-Dv-o4pqD.js",
      "./custom-theme-BU0Fwus2.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./client-core-vendor-DqdHMQxw.js",
      "./body-Dwti04fJ.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as wr, a as Xo, c as hb } from "./react-dom-vendor--YlRhZCI.js";
import { g as Qt, a as Lv, r as gb } from "./lodash-vendor-Dv-o4pqD.js";
import { r as Xt, a as Pt, s as Je } from "./client-core-vendor-DqdHMQxw.js";
function bb(e, t) {
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
var Ai = { exports: {} },
  ln = {};
var ou;
function _b() {
  if (ou) return ln;
  ou = 1;
  var e = wr(),
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
  return ((ln.Fragment = r), (ln.jsx = i), (ln.jsxs = i), ln);
}
var iu;
function mb() {
  return (iu || ((iu = 1), (Ai.exports = _b())), Ai.exports);
}
var L = mb(),
  y = wr();
const E = Qt(y),
  su = bb({ __proto__: null, default: E }, [y]);
var Ii = {},
  Ns = function (e, t) {
    return (
      (Ns =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ns(e, t)
    );
  };
function Uv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ns(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var jo = function () {
  return (
    (jo =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    jo.apply(this, arguments)
  );
};
function Nv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Bv(e, t, r, n) {
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
function qv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function $v(e, t, r, n, a, o) {
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
function zv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Vv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Gv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Hv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Wv(e, t, r, n) {
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
function Kv(e, t) {
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
function Jv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Zo(t, e, r);
}
function Do(e) {
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
function yc(e, t) {
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
function Yv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(yc(arguments[t]));
  return e;
}
function Xv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function Zv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Kr(e) {
  return this instanceof Kr ? ((this.v = e), this) : new Kr(e);
}
function Qv(e, t, r) {
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
    v.value instanceof Kr ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
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
function ep(e) {
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
function tp(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Do == "function" ? Do(e) : e[Symbol.iterator]()),
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
function rp(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var yb = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Bs = function (e) {
    return (
      (Bs =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Bs(e)
    );
  };
function np(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Bs(e), n = 0; n < r.length; n++) r[n] !== "default" && Zo(t, e, r[n]);
  return (yb(t, e), t);
}
function ap(e) {
  return e && e.__esModule ? e : { default: e };
}
function op(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function ip(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function sp(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function cp(e, t, r) {
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
var wb =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function up(e) {
  function t(o) {
    ((e.error = e.hasError ? new wb(o, e.error, "An error was suppressed during disposal.") : o),
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
function lp(e, t) {
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
const kb = {
    __extends: Uv,
    __assign: jo,
    __rest: Nv,
    __decorate: Bv,
    __param: qv,
    __esDecorate: $v,
    __runInitializers: zv,
    __propKey: Vv,
    __setFunctionName: Gv,
    __metadata: Hv,
    __awaiter: Wv,
    __generator: Kv,
    __createBinding: Zo,
    __exportStar: Jv,
    __values: Do,
    __read: yc,
    __spread: Yv,
    __spreadArrays: Xv,
    __spreadArray: Zv,
    __await: Kr,
    __asyncGenerator: Qv,
    __asyncDelegator: ep,
    __asyncValues: tp,
    __makeTemplateObject: rp,
    __importStar: np,
    __importDefault: ap,
    __classPrivateFieldGet: op,
    __classPrivateFieldSet: ip,
    __classPrivateFieldIn: sp,
    __addDisposableResource: cp,
    __disposeResources: up,
    __rewriteRelativeImportExtension: lp,
  },
  Ob = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: cp,
        get __assign() {
          return jo;
        },
        __asyncDelegator: ep,
        __asyncGenerator: Qv,
        __asyncValues: tp,
        __await: Kr,
        __awaiter: Wv,
        __classPrivateFieldGet: op,
        __classPrivateFieldIn: sp,
        __classPrivateFieldSet: ip,
        __createBinding: Zo,
        __decorate: Bv,
        __disposeResources: up,
        __esDecorate: $v,
        __exportStar: Jv,
        __extends: Uv,
        __generator: Kv,
        __importDefault: ap,
        __importStar: np,
        __makeTemplateObject: rp,
        __metadata: Hv,
        __param: qv,
        __propKey: Vv,
        __read: yc,
        __rest: Nv,
        __rewriteRelativeImportExtension: lp,
        __runInitializers: zv,
        __setFunctionName: Gv,
        __spread: Yv,
        __spreadArray: Zv,
        __spreadArrays: Xv,
        __values: Do,
        default: kb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ue = Lv(Ob);
var dn = {},
  cu;
function Eb() {
  return (
    cu ||
      ((cu = 1),
      Object.defineProperty(dn, "__esModule", { value: !0 }),
      (dn.NavigationTarget = void 0),
      (dn.NavigationTarget = {
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
    dn
  );
}
var ji = {},
  Di = {},
  fn = {},
  vn = {},
  uu;
function be() {
  if (uu) return vn;
  ((uu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((vn.BridgeAPIError = e), vn);
}
var lu;
function ue() {
  if (lu) return fn;
  ((lu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.getCallBridge = void 0));
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
  return ((fn.getCallBridge = r), fn);
}
var pn = {},
  du;
function Qo() {
  if (du) return pn;
  ((du = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.withRateLimiter = void 0));
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
  return ((pn.withRateLimiter = t), pn);
}
var fu;
function Sb() {
  return (
    fu ||
      ((fu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ue(),
          r = be(),
          n = Qo(),
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
      })(Di)),
    Di
  );
}
var vu;
function Ja() {
  return (
    vu ||
      ((vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ue.__exportStar(Sb(), e));
      })(ji)),
    ji
  );
}
var Mi = {},
  hn = {},
  Ti = {},
  pu;
function dp() {
  return (
    pu ||
      ((pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ue(),
          r = be(),
          n = Qo(),
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
      })(Ti)),
    Ti
  );
}
var hu;
function xb() {
  if (hu) return hn;
  ((hu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.invokeRemote = void 0));
  const e = dp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((hn.invokeRemote = t), hn);
}
var gn = {},
  gu;
function Cb() {
  if (gu) return gn;
  ((gu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.invokeService = void 0));
  const e = dp(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((gn.invokeService = t), gn);
}
var bu;
function Pb() {
  return (
    bu ||
      ((bu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ue;
        (t.__exportStar(xb(), e), t.__exportStar(Cb(), e));
      })(Mi)),
    Mi
  );
}
var Fi = {},
  bn = {},
  _n = {},
  _u;
function Rb() {
  if (_u) return _n;
  ((_u = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.submit = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((_n.submit = n), _n);
}
var mn = {},
  mu;
function Ab() {
  if (mu) return mn;
  ((mu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.close = void 0));
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
  return ((mn.close = n), mn);
}
var yn = {},
  yu;
function Ib() {
  if (yu) return yn;
  ((yu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.open = void 0));
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
  return ((yn.open = n), yn);
}
var wn = {},
  wu;
function jb() {
  if (wu) return wn;
  ((wu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.refresh = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((wn.refresh = n), wn);
}
var kn = {},
  ku;
function Db() {
  if (ku) return kn;
  ((ku = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.createHistory = void 0));
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
  return ((kn.createHistory = r), kn);
}
var On = {},
  Li = {},
  Mt = {},
  Ou;
function fp() {
  return (
    Ou ||
      ((Ou = 1),
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
  Eu;
function Mb() {
  if (Eu) return ar;
  ((Eu = 1),
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
  return ((ar.TranslationsGetter = r), ar);
}
var En = {},
  Ui = {},
  Su;
function vp() {
  return (
    Su ||
      ((Su = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ue.__importDefault(gb()),
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
      })(Ui)),
    Ui
  );
}
var xu;
function Tb() {
  if (xu) return En;
  ((xu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.Translator = void 0));
  const e = vp();
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
var Sn = {},
  Cu;
function Fb() {
  if (Cu) return Sn;
  ((Cu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.ensureLocale = void 0));
  const e = fp(),
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
  return ((Sn.ensureLocale = a), Sn);
}
var Ni = {},
  Pu;
function Lb() {
  return (
    Pu ||
      ((Pu = 1),
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
      })(Ni)),
    Ni
  );
}
var Bi = {},
  Ru;
function Ub() {
  return (Ru || ((Ru = 1), Object.defineProperty(Bi, "__esModule", { value: !0 })), Bi);
}
var Au;
function pp() {
  return (
    Au ||
      ((Au = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Ue;
        (t.__exportStar(fp(), e),
          t.__exportStar(Mb(), e),
          t.__exportStar(Tb(), e),
          t.__exportStar(Fb(), e));
        var r = vp();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Lb();
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
      })(Li)),
    Li
  );
}
var Iu;
function Nb() {
  if (Iu) return On;
  ((Iu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.getContext = void 0));
  const e = ue(),
    t = pp(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((On.getContext = n), On);
}
var xn = {},
  ju;
function Bb() {
  if (ju) return xn;
  ((ju = 1),
    Object.defineProperty(xn, "__esModule", { value: !0 }),
    (xn.changeWindowTitle = void 0));
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
  return ((xn.changeWindowTitle = n), xn);
}
var Cn = {},
  Du;
function qb() {
  if (Du) return Cn;
  ((Du = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.theme = void 0));
  const t = (0, ue().getCallBridge)();
  return ((Cn.theme = { enable: () => t("enableTheming") }), Cn);
}
var Pn = {},
  Rn = {},
  qi = {},
  or = {},
  Mu;
function hp() {
  if (Mu) return or;
  ((Mu = 1),
    Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.blobToBase64 = or.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
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
var Tu;
function $b() {
  return (
    Tu ||
      ((Tu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = hp(),
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
      })(qi)),
    qi
  );
}
var Fu;
function gp() {
  if (Fu) return Rn;
  ((Fu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.events = void 0));
  const e = ue(),
    t = $b(),
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
  return ((Rn.events = { emit: n, on: a }), Rn);
}
var Lu;
function zb() {
  if (Lu) return Pn;
  ((Lu = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.emitReadyEvent = void 0));
  const e = gp(),
    t = yp(),
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
  return ((Pn.emitReadyEvent = i), Pn);
}
const Vb = "modulepreload",
  Gb = function (e, t) {
    return new URL(e, t).href;
  },
  Uu = {},
  De = function (t, r, n) {
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
          if (((l = Gb(l, n)), l in Uu)) return;
          Uu[l] = !0;
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
            ((v.rel = d ? "stylesheet" : Vb),
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
var An = {},
  $i = {},
  In = {},
  so = {},
  Nu;
function bp() {
  if (Nu) return so;
  ((Nu = 1), Object.defineProperty(so, "__esModule", { value: !0 }), (so.default = r));
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
  return so;
}
var Ar = {},
  jn = {},
  Dn = {},
  Bu;
function Hb() {
  if (Bu) return Dn;
  ((Bu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Dn.default = e), Dn);
}
var qu;
function ei() {
  if (qu) return jn;
  ((qu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = t(Hb());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((jn.default = n), jn);
}
var $u;
function ti() {
  if ($u) return Ar;
  (($u = 1),
    Object.defineProperty(Ar, "__esModule", { value: !0 }),
    (Ar.default = void 0),
    (Ar.unsafeStringify = n));
  var e = t(ei());
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
  return ((Ar.default = o), Ar);
}
var zu;
function Wb() {
  if (zu) return In;
  ((zu = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
  var e = r(bp()),
    t = ti();
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
  var s = c;
  return ((In.default = s), In);
}
var Mn = {},
  Ht = {},
  Tn = {},
  Vu;
function _p() {
  if (Vu) return Tn;
  ((Vu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = t(ei());
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
  return ((Tn.default = n), Tn);
}
var Gu;
function mp() {
  if (Gu) return Ht;
  ((Gu = 1),
    Object.defineProperty(Ht, "__esModule", { value: !0 }),
    (Ht.URL = Ht.DNS = void 0),
    (Ht.default = i));
  var e = ti(),
    t = r(_p());
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
  Ht.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Ht.URL = o;
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
  return Ht;
}
var Fn = {},
  Hu;
function Kb() {
  if (Hu) return Fn;
  ((Hu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
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
      ((f = s(f, h, b, _, v[m], 7, -680876936)),
        (_ = s(_, f, h, b, v[m + 1], 12, -389564586)),
        (b = s(b, _, f, h, v[m + 2], 17, 606105819)),
        (h = s(h, b, _, f, v[m + 3], 22, -1044525330)),
        (f = s(f, h, b, _, v[m + 4], 7, -176418897)),
        (_ = s(_, f, h, b, v[m + 5], 12, 1200080426)),
        (b = s(b, _, f, h, v[m + 6], 17, -1473231341)),
        (h = s(h, b, _, f, v[m + 7], 22, -45705983)),
        (f = s(f, h, b, _, v[m + 8], 7, 1770035416)),
        (_ = s(_, f, h, b, v[m + 9], 12, -1958414417)),
        (b = s(b, _, f, h, v[m + 10], 17, -42063)),
        (h = s(h, b, _, f, v[m + 11], 22, -1990404162)),
        (f = s(f, h, b, _, v[m + 12], 7, 1804603682)),
        (_ = s(_, f, h, b, v[m + 13], 12, -40341101)),
        (b = s(b, _, f, h, v[m + 14], 17, -1502002290)),
        (h = s(h, b, _, f, v[m + 15], 22, 1236535329)),
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
  function c(v, g, f, h, b, _) {
    return o(i(o(o(g, v), o(h, _)), b), f);
  }
  function s(v, g, f, h, b, _, m) {
    return c((g & f) | (~g & h), v, g, b, _, m);
  }
  function u(v, g, f, h, b, _, m) {
    return c((g & h) | (f & ~h), v, g, b, _, m);
  }
  function l(v, g, f, h, b, _, m) {
    return c(g ^ f ^ h, v, g, b, _, m);
  }
  function d(v, g, f, h, b, _, m) {
    return c(f ^ (g | ~h), v, g, b, _, m);
  }
  var p = e;
  return ((Fn.default = p), Fn);
}
var Wu;
function Jb() {
  if (Wu) return Mn;
  ((Wu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = r(mp()),
    t = r(Kb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((Mn.default = a), Mn);
}
var Ln = {},
  Un = {},
  Ku;
function Yb() {
  if (Ku) return Un;
  ((Ku = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Un.default = t), Un);
}
var Ju;
function Xb() {
  if (Ju) return Ln;
  ((Ju = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = n(Yb()),
    t = n(bp()),
    r = ti();
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
  return ((Ln.default = o), Ln);
}
var Nn = {},
  Bn = {},
  Yu;
function Zb() {
  if (Yu) return Bn;
  ((Yu = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
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
  return ((Bn.default = n), Bn);
}
var Xu;
function Qb() {
  if (Xu) return Nn;
  ((Xu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = r(mp()),
    t = r(Zb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Nn.default = a), Nn);
}
var qn = {},
  Zu;
function e_() {
  if (Zu) return qn;
  ((Zu = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((qn.default = e), qn);
}
var $n = {},
  Qu;
function t_() {
  if (Qu) return $n;
  ((Qu = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = t(ei());
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
var el;
function r_() {
  return (
    el ||
      ((el = 1),
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
        var t = l(Wb()),
          r = l(Jb()),
          n = l(Xb()),
          a = l(Qb()),
          o = l(e_()),
          i = l(t_()),
          c = l(ei()),
          s = l(ti()),
          u = l(_p());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })($i)),
    $i
  );
}
var tl;
function n_() {
  if (tl) return An;
  ((tl = 1),
    Object.defineProperty(An, "__esModule", { value: !0 }),
    (An.createAdfRendererIframeProps = void 0));
  const e = r_(),
    t = async (r, n) => {
      const a = await De(
          () => import("./index-BCqYYRNo.js").then((l) => l.i),
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
        { id: s, src: c, onLoad: u }
      );
    };
  return ((An.createAdfRendererIframeProps = t), An);
}
var zn = {},
  rl;
function a_() {
  if (rl) return zn;
  ((rl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.onClose = void 0));
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
  return ((zn.onClose = n), zn);
}
var nl;
function yp() {
  if (nl) return bn;
  ((nl = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.view = void 0));
  const e = Rb(),
    t = Ab(),
    r = Ib(),
    n = jb(),
    a = Db(),
    o = Nb(),
    i = Bb(),
    c = qb(),
    s = zb(),
    u = n_(),
    l = a_();
  return (
    (bn.view = {
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
    bn
  );
}
var al;
function ri() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ue.__exportStar(yp(), e));
      })(Fi)),
    Fi
  );
}
var zi = {},
  Vn = {},
  ol;
function o_() {
  if (ol) return Vn;
  ((ol = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.router = void 0));
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
  return ((Vn.router = { getUrl: r, navigate: n, open: a, reload: o }), Vn);
}
var il;
function i_() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ue.__exportStar(o_(), e));
      })(zi)),
    zi
  );
}
var Vi = {},
  Gn = {},
  sl;
function s_() {
  if (sl) return Gn;
  ((sl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.Modal = void 0));
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
  return ((Gn.Modal = a), Gn);
}
var cl;
function c_() {
  return (
    cl ||
      ((cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ue.__exportStar(s_(), e));
      })(Vi)),
    Vi
  );
}
var it = {},
  ir = {},
  ul;
function u_() {
  if (ul) return ir;
  ((ul = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.productFetchApi = ir.remoteFetchApi = void 0));
  const e = hp(),
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
            isAttachment: m,
          } = await i("fetchRemote", g),
          k = m ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(k || null, { headers: h, status: _, statusText: b });
      };
      return { requestRemote: (s, u) => c(s, u) };
    };
  ir.remoteFetchApi = a;
  const o = (i) => {
    const c = async (s, u, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: g } = await n(d);
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
          status: m,
          isAttachment: k,
        } = await i("fetchProduct", f),
        w = k ? (0, e.base64ToBlob)(h, b["content-type"]) : h;
      return new Response(w || null, { headers: b, status: m, statusText: _ });
    };
    return {
      requestConfluence: (s, u) => c("confluence", s, u),
      requestJira: (s, u) => c("jira", s, u),
      requestBitbucket: (s, u) => c("bitbucket", s, u),
    };
  };
  return ((ir.productFetchApi = o), ir);
}
var ll;
function l_() {
  if (ll) return it;
  ll = 1;
  var e;
  (Object.defineProperty(it, "__esModule", { value: !0 }),
    (it.requestRemote = it.requestBitbucket = it.requestJira = it.requestConfluence = void 0));
  const t = ue(),
    r = u_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (it.requestConfluence = e.requestConfluence),
    (it.requestJira = e.requestJira),
    (it.requestBitbucket = e.requestBitbucket),
    (it.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    it
  );
}
var Gi = {},
  Hn = {},
  dl;
function d_() {
  if (dl) return Hn;
  ((dl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.showFlag = void 0));
  const e = ue(),
    t = be(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((Hn.showFlag = n), Hn);
}
var fl;
function f_() {
  return (
    fl ||
      ((fl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = d_();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Gi)),
    Gi
  );
}
var Hi = {},
  vl;
function v_() {
  return (
    vl ||
      ((vl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ue.__exportStar(gp(), e));
      })(Hi)),
    Hi
  );
}
var Wi = {},
  Wn = {},
  pl;
function p_() {
  if (pl) return Wn;
  ((pl = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.realtime = void 0));
  const t = (0, ue().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((Wn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Wn);
}
var Ki = {},
  hl;
function h_() {
  return (
    hl ||
      ((hl = 1),
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
      })(Ki)),
    Ki
  );
}
var gl;
function g_() {
  return (
    gl ||
      ((gl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = p_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = h_();
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
      })(Wi)),
    Wi
  );
}
var Ji = {},
  Kn = {},
  Yi = {},
  bl;
function b_() {
  return (
    bl ||
      ((bl = 1),
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
      })(Yi)),
    Yi
  );
}
var _l;
function __() {
  if (_l) return Kn;
  ((_l = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.rovo = void 0));
  const e = b_();
  return ((Kn.rovo = { open: e.open }), Kn);
}
var ml;
function m_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ue.__exportStar(__(), e));
      })(Ji)),
    Ji
  );
}
var Tt = {},
  yl;
function y_() {
  if (yl) return Tt;
  ((yl = 1),
    Object.defineProperty(Tt, "__esModule", { value: !0 }),
    (Tt.createTranslationFunction = Tt.getTranslations = Tt.resetTranslationsCache = void 0));
  const e = pp(),
    t = ri(),
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
  Tt.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let u = c;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, s));
  };
  Tt.getTranslations = o;
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
  return ((Tt.createTranslationFunction = i), Tt);
}
var Xi = {},
  Jn = {},
  wl;
function w_() {
  if (wl) return Jn;
  ((wl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.permissions = void 0));
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
var sr = {},
  Zi = {},
  Qi = {},
  Yn = {},
  Xn = {},
  kl;
function wc() {
  if (kl) return Xn;
  ((kl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.parseUrl = void 0));
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
  return ((Xn.parseUrl = e), Xn);
}
var es = {},
  Ol;
function wp() {
  return (
    Ol ||
      ((Ol = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const t = wc();
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
      })(es)),
    es
  );
}
var El;
function k_() {
  if (El) return Yn;
  ((El = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.EgressFilteringService = void 0));
  const e = wc(),
    t = wp();
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
  return ((Yn.EgressFilteringService = r), Yn);
}
var Sl;
function O_() {
  return (
    Sl ||
      ((Sl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ue;
        (t.__exportStar(k_(), e), t.__exportStar(wc(), e), t.__exportStar(wp(), e));
      })(Qi)),
    Qi
  );
}
var xl;
function E_() {
  return (
    xl ||
      ((xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ue.__exportStar(O_(), e));
      })(Zi)),
    Zi
  );
}
var Cl;
function S_() {
  if (Cl) return sr;
  ((Cl = 1),
    Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.checkPermissions = sr.createPermissionUtils = void 0));
  const e = E_(),
    t = ri();
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
    const m = u(d.external, f);
    return (m && ((h.external = m), (b = !1)), { granted: b, missing: b ? null : h });
  }
  return ((sr.checkPermissions = l), sr);
}
var Pl;
function x_() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ue;
        (t.__exportStar(w_(), e), t.__exportStar(S_(), e));
      })(Xi)),
    Xi
  );
}
var ts = {},
  rs = {},
  ns = {},
  Zn = {},
  Qn = {},
  Rl;
function kp() {
  return (
    Rl ||
      ((Rl = 1),
      Object.defineProperty(Qn, "__esModule", { value: !0 }),
      (Qn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Qn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Qn
  );
}
var Al;
function ni() {
  if (Al) return Zn;
  ((Al = 1),
    Object.defineProperty(Zn, "__esModule", { value: !0 }),
    (Zn.checkRestrictedEnvironment = void 0));
  const e = be(),
    t = ri(),
    r = kp(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Zn.checkRestrictedEnvironment = n), Zn);
}
var Il;
function C_() {
  return (
    Il ||
      ((Il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ja(),
          r = be(),
          n = ni(),
          o = (0, ue().getCallBridge)(),
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
              v = await Promise.all(p.map((_) => c(_))),
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
                            const R = await fetch(_, {
                              method: "PUT",
                              body: O,
                              headers: {
                                "Content-Type": O.type || "application/octet-stream",
                                "Content-Length": O.size.toString(),
                              },
                            });
                            return {
                              success: R.ok,
                              key: k,
                              status: R.status,
                              error: R.ok ? void 0 : `Upload failed with status ${R.status}`,
                            };
                          } catch (R) {
                            return {
                              success: !1,
                              key: k,
                              status: 503,
                              error: R instanceof Error ? R.message : "Upload failed",
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
          return await Promise.all(p.map((g) => g.promise));
        };
        e.upload = u;
      })(ns)),
    ns
  );
}
var ea = {},
  jl;
function P_() {
  if (jl) return ea;
  ((jl = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.deleteObjects = void 0));
  const e = Ja(),
    t = be(),
    r = ni(),
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
  return ((ea.deleteObjects = o), ea);
}
var ta = {},
  Dl;
function R_() {
  if (Dl) return ta;
  ((Dl = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.download = void 0));
  const e = Ja(),
    t = be(),
    r = ni(),
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
  return ((ta.download = o), ta);
}
var ra = {},
  Ml;
function A_() {
  if (Ml) return ra;
  ((Ml = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.getMetadata = void 0));
  const e = Ja(),
    t = be(),
    r = ni(),
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
  return ((ra.getMetadata = o), ra);
}
var Tl;
function I_() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = C_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = P_(),
          n = R_(),
          a = A_();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(rs)),
    rs
  );
}
var Fl;
function j_() {
  return (
    Fl ||
      ((Fl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ue;
        (t.__exportStar(I_(), e), t.__exportStar(kp(), e));
      })(ts)),
    ts
  );
}
var as = {},
  na = {},
  cr = {},
  Ir = {},
  co = {},
  Ll;
function D_() {
  if (Ll) return co;
  ((Ll = 1), Object.defineProperty(co, "__esModule", { value: !0 }));
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
  return ((co.default = t), co);
}
var jr = {},
  aa = {},
  Ul;
function M_() {
  if (Ul) return aa;
  ((Ul = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa._resolveDeltasResponse = void 0));
  const e = Xt(),
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
  aa._resolveDeltasResponse = r;
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
  return aa;
}
var Nl;
function Op() {
  if (Nl) return jr;
  Nl = 1;
  var e =
    (jr && jr.__awaiter) ||
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
  Object.defineProperty(jr, "__esModule", { value: !0 });
  const t = Xt(),
    r = M_();
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
  return ((jr.default = n), jr);
}
var oa = {},
  Bl;
function T_() {
  if (Bl) return oa;
  ((Bl = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa._makeParamStoreGetter = void 0));
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
  return ((oa._makeParamStoreGetter = u), oa);
}
var ur = {},
  ql;
function F_() {
  if (ql) return ur;
  ql = 1;
  var e =
    (ur && ur.__awaiter) ||
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
  (Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.StatsigEvaluationsDataAdapter = void 0));
  const t = Xt(),
    r = Op();
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
  return ((ur.StatsigEvaluationsDataAdapter = n), ur);
}
var $l;
function L_() {
  if ($l) return Ir;
  $l = 1;
  var e =
    (Ir && Ir.__awaiter) ||
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
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  const t = Xt(),
    r = D_(),
    n = Op(),
    a = T_(),
    o = F_();
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
  return ((Ir.default = i), Ir);
}
var zl;
function U_() {
  return (
    zl ||
      ((zl = 1),
      (function (e) {
        var t =
            (cr && cr.__createBinding) ||
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
            (cr && cr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Xt(),
          a = L_();
        ((e.StatsigClient = a.default), r(Xt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(cr)),
    cr
  );
}
var ia = {},
  sa = {},
  Vl;
function N_() {
  if (Vl) return sa;
  ((Vl = 1),
    Object.defineProperty(sa, "__esModule", { value: !0 }),
    (sa.initFeatureFlags = void 0));
  const e = ue(),
    t = be(),
    r = Qo(),
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
    (sa.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    sa
  );
}
var Gl;
function B_() {
  if (Gl) return ia;
  ((Gl = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia.ForgeDataAdapter = void 0));
  const e = N_();
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
  return ((ia.ForgeDataAdapter = t), ia);
}
var os = {},
  Hl;
function Ep() {
  return (
    Hl ||
      ((Hl = 1),
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
      })(os)),
    os
  );
}
var ca = {},
  Wl;
function q_() {
  if (Wl) return ca;
  ((Wl = 1),
    Object.defineProperty(ca, "__esModule", { value: !0 }),
    (ca.trackFeatureFlagEvent = void 0));
  const e = ue(),
    t = be(),
    r = Ep(),
    n = Qo(),
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
    (ca.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    ca
  );
}
var Kl;
function $_() {
  if (Kl) return na;
  ((Kl = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na.ForgeFeatureFlags = void 0));
  const e = U_(),
    t = B_(),
    r = Ep(),
    n = q_();
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
  return ((na.ForgeFeatureFlags = a), na);
}
var Jl;
function z_() {
  return (
    Jl ||
      ((Jl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = $_();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(as)),
    as
  );
}
var Yl;
function V_() {
  return (
    Yl ||
      ((Yl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ue;
        var r = Eb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ja(), e),
          t.__exportStar(Pb(), e),
          t.__exportStar(ri(), e),
          t.__exportStar(i_(), e),
          t.__exportStar(c_(), e),
          t.__exportStar(l_(), e),
          t.__exportStar(f_(), e),
          t.__exportStar(v_(), e),
          t.__exportStar(g_(), e),
          t.__exportStar(m_(), e),
          (e.i18n = t.__importStar(y_())),
          t.__exportStar(x_(), e),
          t.__exportStar(j_(), e),
          t.__exportStar(z_(), e));
      })(Ii)),
    Ii
  );
}
var Bt = V_();
function pe(e, t) {
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
function G_(e, t) {
  if (xe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Sp(e) {
  var t = G_(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function Xl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Sp(n.key), n));
  }
}
function he(e, t, r) {
  return (
    t && Xl(e.prototype, t),
    r && Xl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function H_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function He(e, t) {
  if (t && (xe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return H_(e);
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
function Fa(e, t) {
  return (
    (Fa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Fa(e, t)
  );
}
function We(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Fa(e, t));
}
function S(e, t, r) {
  return (
    (t = Sp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Se() {}
function W_(e) {
  if (Array.isArray(e)) return e;
}
function K_(e, t) {
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
function qs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xp(e, t) {
  if (e) {
    if (typeof e == "string") return qs(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? qs(e, t)
          : void 0
    );
  }
}
function J_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return W_(e) || K_(e, t) || xp(e, t) || J_();
}
var Cp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Y_ = function (t) {
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
  Mo = function (t, r) {
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
  X_ = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Zl = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Z_ = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = Zl(i, n, a),
      s = Zl(o.index, n, a),
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
function Q_(e, t) {
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
    a = Q_(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Ql(e, t) {
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
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ql(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ql(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var em = (function () {
  function e(t) {
    var r = this;
    (pe(this, e),
      S(this, "_isAnalyticsEvent", !0),
      S(this, "clone", function () {
        var n = is({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return he(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          xe(r) === "object" && (this.payload = is(is({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function tm(e) {
  if (Array.isArray(e)) return qs(e);
}
function rm(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function nm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e) {
  return tm(e) || rm(e) || xp(e) || nm();
}
function am(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Q(e)) !== null; );
  return e;
}
function To() {
  return (
    (To =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = am(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    To.apply(null, arguments)
  );
}
function om(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Pp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Pp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pp = function () {
    return !!e;
  })();
}
function im(e, t, r, n) {
  var a = To(Q(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var sm = (function (e) {
    function t(r) {
      var n;
      return (
        pe(this, t),
        (n = om(this, t, [r])),
        S(n, "_isUIAnalyticsEvent", !0),
        S(n, "clone", function () {
          if (n.hasFired) return null;
          var a = Ee(n.context),
            o = Ee(n.handlers),
            i = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: a, handlers: o, payload: i });
        }),
        S(n, "fire", function (a) {
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
      We(t, e),
      he(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : im(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(em),
  cm = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  um = function () {
    return y.useContext(cm);
  },
  Fo = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function lm(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function dm(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    a = y.useRef(r),
    o = n.current || !!(t && a.current.inputs && lm(t, a.current.inputs)),
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
function fm(e, t) {
  return dm(function () {
    return e;
  }, t);
}
function Rp() {
  var e = um(),
    t = fm(
      function (r) {
        return new sm({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function ed(e, t) {
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
function vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ed(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ed(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function La(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = Rp(),
    u = s.createAnalyticsEvent,
    l = Fo(c),
    d = Fo(t),
    p = y.useCallback(
      function (v) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = vm({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
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
function pm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rd(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = Rp(),
    s = c.createAnalyticsEvent,
    u = Fo(i),
    l = Fo(t),
    d = y.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = pm({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, s, u, l],
    );
  return d;
}
var hr = "ASC",
  Lo = "DESC",
  hm = "small",
  Uo = "large",
  Ap = 0.22;
const gm = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, gm) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Ip(e, t, r) {
  return e ?? "var(--c-, )";
}
var bm = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  _m = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = se(e, bm);
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
  mm = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: P(["_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  ym = function (t) {
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
  wm = function (t) {
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
  km = function (t) {
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
  Om = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function ad(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nd(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Em(e, t, r) {
  return (
    (t = Q(t)),
    He(e, jp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function jp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jp = function () {
    return !!e;
  })();
}
var od = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  Sm = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === hr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = od(s.cells, t, n),
        d = od(u.cells, t, n);
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
function xm(e) {
  var t = (function (r) {
    function n() {
      var a;
      pe(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = Em(this, n, [].concat(i))), S(a, "state", { pageRows: [] }), a);
    }
    return (
      We(n, r),
      he(
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
                s = se(o, Om);
              return E.createElement(
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
              Mo(u, s);
              var g, f;
              return (
                v ? ((g = c), (f = c)) : ((g = Sm(s, c, u, l) || []), (f = Cp(g, d, p))),
                ad(ad({}, i), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(E.Component);
  return E.forwardRef(function (r, n) {
    return E.createElement(t, ne({}, r, { forwardedRef: n }));
  });
}
var Cm = "--local-dynamic-table-width",
  Dp = function (t) {
    var r = t.width;
    return typeof r < "u" ? S({}, Cm, "".concat(r, "%")) : void 0;
  },
  Pm = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Rm = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = se(t, Pm);
    return y.createElement(
      "td",
      ne(
        {
          style: Dp({ width: r }),
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
  Am = ["isHighlighted", "children", "style", "testId", "className"],
  Im = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = se(e, Am);
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
        c,
        { ref: t, "data-testid": o },
      ),
      n,
    );
  }),
  jm = ["cells"],
  Dm = ["content", "testId"],
  Mm = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = se(r, jm);
    return E.createElement(
      Im,
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
          v = se(u, Dm),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return E.createElement(
          Rm,
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
function Tm(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Mp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Fm = (function (e) {
    function t() {
      return (pe(this, t), Tm(this, t, arguments));
    }
    return (
      We(t, e),
      he(t, [
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
            return E.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: u },
              a.map(function (l, d) {
                return E.createElement(Mm, {
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
  })(E.Component),
  Lm = xm(
    E.forwardRef(function (e, t) {
      return E.createElement(Fm, ne({}, e, { forwardedRef: t }));
    }),
  );
function Um(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Tp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Tp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Tp = function () {
    return !!e;
  })();
}
var Nm = (function (e) {
  function t(r) {
    var n;
    return (pe(this, t), (n = Um(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    We(t, e),
    he(
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
})(E.Component);
const kc = y.createContext(null);
var Bm = "#FFFFFF",
  $s = "#42526E",
  qm = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function $m(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat($s, ")")
    : "var(--ds-icon-inverse, ".concat(Bm, ")");
}
var uo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  zm = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  Fp = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        c = t.interactionName,
        s = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        p = typeof l == "number" ? l : qm[l],
        v = "".concat(i, "ms"),
        g = $m(a),
        f = y.useContext(kc);
      return (
        zm(
          function () {
            if (f != null) return f.hold(c);
          },
          [f, c],
        ),
        E.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: P([uo.wrapperStyles, uo.rotateStyles]),
          },
          E.createElement(
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
              className: P([uo.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: P([uo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function id(e, t) {
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
function sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? id(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var cd = "--contents-opacity",
  Vm = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  Gm = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: P(["_tzy47hfw _lcxvglyw"]),
        style: sd(sd({}, S({}, cd, n)), {}, { "--_cnddr8": Ip("var(".concat(cd, ")")) }),
      },
      r,
    );
  },
  Hm = function (t) {
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
function Wm(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Lp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Up = (function (e) {
  function t() {
    return (pe(this, t), Wm(this, t, arguments));
  }
  return (
    We(t, e),
    he(t, [
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
          return E.createElement(
            Vm,
            { testId: s },
            o ? E.createElement(Gm, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              E.createElement(
                Hm,
                { testId: s },
                E.createElement(Fp, {
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
})(E.Component);
S(Up, "defaultProps", {
  isLoading: !0,
  spinnerSize: Uo,
  contentsOpacity: Ap,
  loadingLabel: "Loading table",
});
var Km = ["children", "testId"],
  Jm = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = se(e, Km);
    return y.createElement(
      "div",
      ne({}, a, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Ym = function (t) {
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
  Xm = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function Zm(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Np() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
    var r;
    pe(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Zm(this, t, [].concat(a))),
      S(r, "spinnerRef", E.createRef()),
      S(r, "containerRef", E.createRef()),
      S(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      S(r, "UNSAFE_componentWillReceiveProps", function (i) {
        !i.isLoading || !r.hasTargetNode(i)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      S(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      S(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      S(r, "getTargetNode", function () {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          c = i.targetRef,
          s = c?.();
        return s || r.containerRef.current;
      }),
      S(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      S(r, "isVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return u <= 0 ? !1 : s < c;
      }),
      S(r, "isFullyVerticallyVisible", function (i, c) {
        var s = i.top,
          u = i.bottom;
        return s >= 0 && u <= c;
      }),
      S(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      S(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      S(r, "translateSpinner", function (i, c, s) {
        ((i.style.position = s ? "fixed" : ""),
          (i.style.transform = c !== 0 ? "translate3d(0, ".concat(c, "px, 0)") : ""));
      }),
      S(r, "updateTargetAppearance", function () {
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
    We(t, e),
    he(t, [
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
                  var m = o / 2 - l / 2;
                  this.translateSpinner(c, m, !0);
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
                I = (p - x) / 2;
              this.translateSpinner(c, I, !1);
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
          return E.createElement(
            Jm,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              E.createElement(
                Ym,
                { testId: c },
                E.createElement(
                  Xm,
                  { ref: this.spinnerRef },
                  E.createElement(Fp, {
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
})(E.Component);
S(Bp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Uo,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Ap), ")"),
  loadingLabel: "Loading table",
});
function Qm(e) {
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
var ua = {},
  ey = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ty = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  ry = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  ud = y.memo(function (t) {
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
      h = ry[v][l],
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
          s && "_1bsb1kw7 _4t3i1kw7",
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
          s ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? ty[l] : ey[l],
        ]),
      }),
    );
  });
const ny = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ud, default: ud }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  ai = Lv(ny);
var ld;
function ay() {
  if (ld) return ua;
  ((ld = 1), Object.defineProperty(ua, "__esModule", { value: !0 }), (ua.default = void 0));
  var e = r(wr()),
    t = r(ai);
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
  return ((n.displayName = "ChevronLeftIcon"), (ua.default = n), ua);
}
var oy = ay();
const iy = Qt(oy);
var la = {},
  dd;
function sy() {
  if (dd) return la;
  ((dd = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.default = void 0));
  var e = r(wr()),
    t = r(ai);
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
  return ((n.displayName = "ChevronRightIcon"), (la.default = n), la);
}
var cy = sy();
const uy = Qt(cy);
var Oc = y.createContext("elevation.surface"),
  ly = function () {
    return y.useContext(Oc);
  };
Oc.displayName = "SurfaceProvider";
var dy = [
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
  fy = ["className"],
  vy = {
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
  qp = {
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
  py = {
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
  hy = {
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
  gy = {
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
  by = {
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
  oi = y.forwardRef(function (e, t) {
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
      m = e.style,
      k = e.testId,
      w = e.xcss,
      O = se(e, dy);
    O.className;
    var x = se(O, fy),
      I = y.createElement(
        n,
        ne(
          {
            style: m,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              o && vy[o],
              o && _y(o) && qp[o],
              l && py[l],
              p && hy[p],
              h && gy[h],
              _ && by[_],
              w,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? y.createElement(Oc.Provider, { value: o }, I) : I;
  });
function _y(e) {
  return e in qp;
}
const ss = () =>
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
  $p = (...e) => P(e);
function my() {
  return {
    css() {
      throw ss();
    },
    cssMap() {
      throw ss();
    },
    cx: $p,
    XCSSProp() {
      throw ss();
    },
  };
}
var yy = my(),
  wy = yy.cx,
  ky = [
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
  fd = {
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
  vd = {
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
  Oy = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Ey = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Sy = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  xy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Cy = { root: "_1e0c1txw _vchhusvi" },
  No = y.memo(
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
        g = e.xcss,
        f = se(e, ky);
      return y.createElement(
        n,
        ne({}, f, {
          role: a,
          className: P([
            Cy.root,
            c && vd[c],
            s && vd[s],
            c && fd[c],
            u && fd[u],
            o && xy[o],
            p && Ey[p],
            i && Oy[i],
            v && Sy[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
No.displayName = "Flex";
var Py = [
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
  zs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Ry = function (t) {
    var r = t.children;
    return y.createElement("span", { className: P([zs.separator]) }, r);
  },
  Oo = y.memo(
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
        g = e.testId,
        f = e.role,
        h = e.children,
        b = se(e, Py),
        _ = typeof p == "string" ? y.createElement(Ry, null, p) : p,
        m = _
          ? y.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return y.createElement(y.Fragment, { key: w }, p && w > 0 ? _ : null, k);
              })
          : h;
      return y.createElement(
        No,
        ne({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: wy(u === "hug" && zs.hug, u === "fill" && zs.fill, v),
          testId: g,
          ref: t,
        }),
        m,
      );
    }),
  );
Oo.displayName = "Inline";
var Ay = "Invariant failed";
function Iy(e, t) {
  if (!e) throw new Error(Ay);
}
var zp = y.createContext(!1),
  jy = function () {
    return y.useContext(zp);
  },
  Dy = zp.Provider,
  My = ["span", "p", "strong", "em"],
  Ty = function (t, r) {
    var n = ly();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return pd.hasOwnProperty(n) ? pd[n] : "color.text";
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
  Fy = { medium: "_11c8fhey", UNSAFE_small: "_11c8rymc", large: "_11c81d4k", small: "_11c8wadc" },
  Ly = { bold: "_k48pwu06", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Uy = {
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
  pd = {
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
  Ny = y.forwardRef(function (e, t) {
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
    Iy(My.includes(n));
    var v = jy(),
      g = Ty(a, v);
    !s && !v && (s = "medium");
    var f = y.createElement(
      n,
      {
        id: c,
        className: P([
          Dr.root,
          s && Fy[s],
          g && Uy[g],
          l && Dr.truncation,
          l === 1 && Dr.breakAll,
          o && Dr["textAlign.".concat(o)],
          u && Ly[u],
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
    return v ? f : y.createElement(Dy, { value: !0 }, f);
  });
function By() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var qy = ["as", "children", "isInset", "testId", "style", "xcss"],
  $y = ["className"],
  zy = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      u = se(e, qy);
    u.className;
    var l = se(u, $y);
    return y.createElement(
      n,
      ne({}, l, {
        ref: t,
        className: P([
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
  Vy = [
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
  Gy = ["className"],
  hd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Hy = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Se : i,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = se(e, Vy),
      h = y.useContext(kc),
      b = y.useCallback(
        function (k, w) {
          (h && h.tracePress(s, k.timeStamp), c(k, w));
        },
        [c, h, s],
      ),
      _ = La({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "17.1.0",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var m = se(f, Gy);
    return y.createElement(
      zy,
      ne({ as: "button", tabIndex: g ?? (By() && !n ? 0 : void 0), style: d }, m, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: $p(hd.root, n && hd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  Wy = y.createContext(!1),
  Ky = function () {
    return y.useContext(Wy);
  };
function gd(e, t, r, n, a, o, i) {
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
        gd(o, n, a, i, c, "next", s);
      }
      function c(s) {
        gd(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var cs = { exports: {} },
  us = { exports: {} },
  bd;
function Vp() {
  return (
    bd ||
      ((bd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(us)),
    us.exports
  );
}
var ls = { exports: {} },
  ds = { exports: {} },
  _d;
function Gp() {
  return (
    _d ||
      ((_d = 1),
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
      })(ds)),
    ds.exports
  );
}
var md;
function Hp() {
  return (
    md ||
      ((md = 1),
      (function (e) {
        var t = Gp();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            c = o.toStringTag || "@@toStringTag";
          function s(h, b, _, m) {
            var k = b && b.prototype instanceof l ? b : l,
              w = Object.create(k.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (O, x, I) {
                  var R,
                    C,
                    j,
                    U = 0,
                    q = I || [],
                    W = !1,
                    $ = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: H,
                      f: H.bind(n, 4),
                      d: function (N, B) {
                        return ((R = N), (C = 0), (j = n), ($.n = B), u);
                      },
                    };
                  function H(K, N) {
                    for (C = K, j = N, a = 0; !W && U && !B && a < q.length; a++) {
                      var B,
                        V = q[a],
                        ae = $.p,
                        ie = V[2];
                      K > 3
                        ? (B = ie === N) &&
                          ((j = V[(C = V[4]) ? 5 : ((C = 3), 3)]), (V[4] = V[5] = n))
                        : V[0] <= ae &&
                          ((B = K < 2 && ae < V[1])
                            ? ((C = 0), ($.v = N), ($.n = V[1]))
                            : ae < ie &&
                              (B = K < 3 || V[0] > N || N > ie) &&
                              ((V[4] = K), (V[5] = N), ($.n = ie), (C = 0)));
                    }
                    if (B || K > 1) return u;
                    throw ((W = !0), N);
                  }
                  return function (K, N, B) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (W && N === 1 && H(N, B), C = N, j = B; (a = C < 2 ? n : j) || !W; ) {
                      R || (C ? (C < 3 ? (C > 1 && ($.n = -1), H(C, j)) : ($.n = j)) : ($.v = j));
                      try {
                        if (((U = 2), R)) {
                          if ((C || (K = "next"), (a = R[K]))) {
                            if (!(a = a.call(R, j)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((j = a.value), C < 2 && (C = 0));
                          } else
                            (C === 1 && (a = R.return) && a.call(R),
                              C < 2 &&
                                ((j = TypeError(
                                  "The iterator does not provide a '" + K + "' method",
                                )),
                                (C = 1)));
                          R = n;
                        } else if ((a = (W = $.n < 0) ? j : O.call(x, $)) !== u) break;
                      } catch (V) {
                        ((R = n), (C = 1), (j = V));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: a, done: W };
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
      })(ls)),
    ls.exports
  );
}
var fs = { exports: {} },
  vs = { exports: {} },
  ps = { exports: {} },
  yd;
function Wp() {
  return (
    yd ||
      ((yd = 1),
      (function (e) {
        var t = Vp(),
          r = Gp();
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
        var t = Hp(),
          r = Wp();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(vs)),
    vs.exports
  );
}
var kd;
function Jy() {
  return (
    kd ||
      ((kd = 1),
      (function (e) {
        var t = Kp();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (u) {
            return u.done ? u.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(fs)),
    fs.exports
  );
}
var hs = { exports: {} },
  Od;
function Yy() {
  return (
    Od ||
      ((Od = 1),
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
      })(hs)),
    hs.exports
  );
}
var gs = { exports: {} },
  bs = { exports: {} },
  Ed;
function Xy() {
  return (
    Ed ||
      ((Ed = 1),
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
      })(bs)),
    bs.exports
  );
}
var Sd;
function Zy() {
  return (
    Sd ||
      ((Sd = 1),
      (function (e) {
        var t = Xy().default;
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
      })(gs)),
    gs.exports
  );
}
var xd;
function Qy() {
  return (
    xd ||
      ((xd = 1),
      (function (e) {
        var t = Vp(),
          r = Hp(),
          n = Jy(),
          a = Kp(),
          o = Wp(),
          i = Yy(),
          c = Zy();
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
                  delegateYield: function (k, w, O) {
                    return ((h.resultName = w), b(_.d, c(k), O));
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
          return ((e.exports = s =
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
                values: c,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(cs)),
    cs.exports
  );
}
var _s, Cd;
function e0() {
  if (Cd) return _s;
  Cd = 1;
  var e = Qy()();
  _s = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return _s;
}
var t0 = e0();
const D = Qt(t0);
var ms = {},
  da = {},
  Pd;
function Jp() {
  if (Pd) return da;
  ((Pd = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.bind = void 0));
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
  return ((da.bind = e), da);
}
var lr = {},
  Rd;
function r0() {
  if (Rd) return lr;
  Rd = 1;
  var e =
    (lr && lr.__assign) ||
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
  (Object.defineProperty(lr, "__esModule", { value: !0 }), (lr.bindAll = void 0));
  var t = Jp();
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
  return ((lr.bindAll = a), lr);
}
var Ad;
function n0() {
  return (
    Ad ||
      ((Ad = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Jp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = r0();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(ms)),
    ms
  );
}
var kr = n0(),
  dr = {},
  Mr = {},
  lo = {},
  fa = {},
  Id;
function a0() {
  if (Id) return fa;
  ((Id = 1),
    Object.defineProperty(fa, "__esModule", { value: !0 }),
    (fa.V1InitializeContainer = void 0));
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
  return ((fa.V1InitializeContainer = t), fa);
}
var va = {},
  jd;
function o0() {
  if (jd) return va;
  ((jd = 1),
    Object.defineProperty(va, "__esModule", { value: !0 }),
    (va.V2InitializeContainer = void 0));
  const e = Pt();
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
  return ((va.V2InitializeContainer = t), va);
}
var Dd;
function i0() {
  if (Dd) return lo;
  ((Dd = 1), Object.defineProperty(lo, "__esModule", { value: !0 }));
  const e = Pt(),
    t = a0(),
    r = o0();
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
  return ((lo.default = n), lo);
}
var Tr = {},
  pa = {},
  Md;
function s0() {
  if (Md) return pa;
  ((Md = 1),
    Object.defineProperty(pa, "__esModule", { value: !0 }),
    (pa._resolveDeltasResponse = void 0));
  const e = Pt(),
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
  pa._resolveDeltasResponse = r;
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
  return pa;
}
var Td;
function Yp() {
  if (Td) return Tr;
  Td = 1;
  var e =
    (Tr && Tr.__awaiter) ||
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
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  const t = Pt(),
    r = s0();
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
  return ((Tr.default = n), Tr);
}
var ha = {},
  Fd;
function c0() {
  if (Fd) return ha;
  ((Fd = 1),
    Object.defineProperty(ha, "__esModule", { value: !0 }),
    (ha._makeParamStoreGetter = void 0));
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
  return ((ha._makeParamStoreGetter = u), ha);
}
var fr = {},
  Ld;
function u0() {
  if (Ld) return fr;
  Ld = 1;
  var e =
    (fr && fr.__awaiter) ||
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
  (Object.defineProperty(fr, "__esModule", { value: !0 }),
    (fr.StatsigEvaluationsDataAdapter = void 0));
  const t = Pt(),
    r = Yp();
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
  return ((fr.StatsigEvaluationsDataAdapter = n), fr);
}
var Ud;
function l0() {
  if (Ud) return Mr;
  Ud = 1;
  var e =
    (Mr && Mr.__awaiter) ||
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
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  const t = Pt(),
    r = i0(),
    n = Yp(),
    a = c0(),
    o = u0();
  let i = class Vs extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof Vs
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Vs(s ?? "", {}));
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
  return ((Mr.default = i), Mr);
}
var Nd;
function d0() {
  return (
    Nd ||
      ((Nd = 1),
      (function (e) {
        var t =
            (dr && dr.__createBinding) ||
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
            (dr && dr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Pt(),
          a = l0();
        ((e.StatsigClient = a.default), r(Pt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(dr)),
    dr
  );
}
var st = d0(),
  ys = { exports: {} },
  Bd;
function f0() {
  return (
    Bd ||
      ((Bd = 1),
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
      })(ys)),
    ys.exports
  );
}
var v0 = f0();
const p0 = Qt(v0);
function qd(e, t) {
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
      ? qd(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fo = "@all-features",
  h0 = (function () {
    function e() {
      (pe(this, e), S(this, "eventToValue", new Map()), (this.emitter = new p0()));
    }
    return he(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, Wt(Wt({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var l = a(r, Wt(Wt({}, o), {}, { fireGateExposure: !1 })),
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
            l = i(r, n, a, Wt(Wt({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var v = i(r, n, a, Wt(Wt({}, c), {}, { fireExperimentExposure: !1 })),
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
            this.emitter.on(fo, r),
            function () {
              n.emitter.off(fo, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(fo),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== fo;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  g0 = "fedramp-moderate";
function b0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === g0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Ec = (function (e) {
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
  Ua = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  _0 = [
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
function $d(e, t) {
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
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $d(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vo = function (t) {
    return Gs({ perimeter: b0() ? Ua.FEDRAMP_MODERATE : Ua.COMMERCIAL }, t);
  },
  ga = function (t, r) {
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
      var c = G(n[i], 2),
        s = c[1],
        u = G(a[i], 2),
        l = u[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  zd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  m0 = function (t) {
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
    var p = se(t, _0);
    return Gs(
      Gs({}, p),
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
  y0 = Object.entries(Ec).map(function (e) {
    var t = G(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Xp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = y0.find(function (i) {
            var c = G(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Ec.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  Hs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Vd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (pe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c));
    }
    return he(
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
                Xp(r.details),
                Hs(
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
  Gd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (pe(this, e),
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
    return he(
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
                Xp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Hs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Hs(
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
  Hr = "0.0.0-development";
function w0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Zp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zp = function () {
    return !!e;
  })();
}
function k0(e, t, r) {
  if (Zp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && Fa(a, r.prototype), a);
}
function Ws(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Ws = function (n) {
      if (n === null || !w0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return k0(n, arguments, Q(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Fa(a, n)
      );
    }),
    Ws(e)
  );
}
function O0(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Qp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qp = function () {
    return !!e;
  })();
}
var Hd = (function (e) {
  function t(r) {
    return (pe(this, t), O0(this, t, [r]));
  }
  return (We(t, e), he(t));
})(Ws(Error));
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
function E0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wd(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var S0 = 5e3,
  x0 = "https://api.atlassian.com/flags",
  C0 = "https://api.stg.atlassian.com/flags",
  P0 = "https://api.dev.atlassian.com/flags",
  R0 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  A0 = "https://api.atlassian-us-gov-mod.com/flags",
  I0 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  j0 = "oasis-stg.com/flags",
  D0 = "atlassian-isolated.net/flags",
  M0 = "/gateway/api/flags",
  ws = (function () {
    function e() {
      pe(this, e);
    }
    return he(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = X(
            D.mark(function n(a) {
              var o, i;
              return D.wrap(
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
            D.mark(function n(a, o, i) {
              var c;
              return D.wrap(
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
            D.mark(function n(a) {
              var o;
              return D.wrap(function (c) {
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
                        new Hd(
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
                      throw new Hd("Unexpected 204 response");
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
            D.mark(function n(a) {
              var o;
              return D.wrap(function (c) {
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
          if (n) return M0;
          if (a === Ua.FEDRAMP_MODERATE)
            switch (r) {
              case Ea.Production:
                return A0;
              case Ea.Staging:
                return R0;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Ua.COMMERCIAL)
            switch (r) {
              case Ea.Development:
                return P0;
              case Ea.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : C0;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : x0;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = X(
            D.mark(function n(a, o, i, c) {
              var s, u, l, d, p;
              return D.wrap(
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
                          (u = i.fetchTimeoutMs || S0),
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
                            E0(
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
          if (n === void 0) return r ? I0.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(j0);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(D0) : null;
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
function Kd(e, t) {
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
function ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kd(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function T0(e, t, r) {
  return (
    (t = Q(t)),
    He(e, eh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function eh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (eh = function () {
    return !!e;
  })();
}
function F0(e, t, r, n) {
  var a = To(Q(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var L0 = (function (e) {
  function t() {
    var r;
    return (
      pe(this, t),
      (r = T0(this, t, ["NoFetchDataAdapter", "nofetch"])),
      S(r, "bootstrapResult", null),
      r
    );
  }
  return (
    We(t, e),
    he(t, [
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
              return D.wrap(function (s) {
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
            D.mark(function a(o, i, c) {
              return D.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ba(
                              ba({}, this.bootstrapResult),
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
            ba(ba({}, this.bootstrapResult), {}, { fullUserHash: st._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = X(
            D.mark(function a(o, i, c) {
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
          F0(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ba({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(st.DataAdapterCore);
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
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jd(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function U0(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = N0(e)) || t) {
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
function N0(e, t) {
  if (e) {
    if (typeof e == "string") return Yd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Yd(e, t)
          : void 0
    );
  }
}
function Yd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ks = "LocalOverride:Recognized",
  B0 = "STATSIG_OVERRIDES",
  Xd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Fr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ye = function (t, r) {
    return r + ":" + t;
  },
  q0 = (function () {
    function e(t) {
      (pe(this, e),
        (this._overrides = Fr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return he(e, [
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
                g = p[1];
              r.gates[v] = g;
            }
            for (
              var f = 0, h = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
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
              var w = 0, O = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              w < O.length;
              w++
            ) {
              var x,
                I = G(O[w], 2),
                R = I[0],
                C = I[1];
              r.layers[R] = C;
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
            this.parseStoredOverrides(Xd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Xd);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = U0(i),
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
          var n = je(je({}, Fr()), r);
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
              this._djb2Map.set(Ye(Je._DJB2(p), c), v);
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
            this._djb2Map.set(Ye(Je._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Ye(Je._DJB2(r), "gates")),
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
                : this._djb2Map.get(Ye(r.name, "gates"));
          return o == null
            ? null
            : je(je({}, r), {}, { value: o, details: je(je({}, r.details), {}, { reason: ks }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Ye(Je._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ye(Je._DJB2(r), "configs")),
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
            this._djb2Map.set(Ye(Je._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ye(Je._DJB2(r), "configs")),
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
            this._djb2Map.set(Ye(Je._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Ye(Je._DJB2(r), "layers")),
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
                : this._djb2Map.get(Ye(r.name, "layers"));
          return o == null
            ? null
            : je(
                je({}, r),
                {},
                {
                  __value: o,
                  get: Je._makeTypedGet(r.name, o),
                  details: je(je({}, r.details), {}, { reason: ks }),
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
                : this._djb2Map.get(Ye(r.name, "configs"));
          return o == null
            ? null
            : je(
                je({}, r),
                {},
                {
                  value: o,
                  get: Je._makeTypedGet(r.name, o),
                  details: je(je({}, r.details), {}, { reason: ks }),
                },
              );
        },
      },
    ]);
  })(),
  $0 = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Zd(e, t) {
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
      ? Zd(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Qd = "client-default-key",
  z0 = "https://xp.atlassian.com/v1/rgstr",
  V0 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? B0 : n,
        o = r.overrideAdapter;
      (pe(this, e),
        S(this, "initPromise", null),
        S(this, "initCompleted", !1),
        S(this, "initWithDefaults", !1),
        S(this, "hasCheckGateErrorOccurred", !1),
        S(this, "hasGetExperimentErrorOccurred", !1),
        S(this, "hasGetExperimentValueErrorOccurred", !1),
        S(this, "hasGetLayerErrorOccurred", !1),
        S(this, "hasGetLayerValueErrorOccurred", !1),
        S(this, "subscriptions", new h0()),
        S(this, "dataAdapter", new L0()),
        S(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new q0(a)));
    }
    return he(e, [
      {
        key: "initialize",
        value: (function () {
          var t = X(
            D.mark(function n(a, o, i) {
              var c = this,
                s,
                u;
              return D.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = vo(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ga(s, this.initOptions) ||
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
            D.mark(function n(a, o, i, c) {
              var s = this,
                u,
                l;
              return D.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((u = vo(a)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ga(u, this.initOptions) ||
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
                var l = Kt(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: Hr,
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
            D.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l,
                d = arguments;
              return D.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = vo(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ga(u, this.initOptions) ||
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
          var t = X(
            D.mark(function n(a, o, i) {
              var c, s;
              return D.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = vo(a)),
                          (s = function () {
                            return ws.fetchExperimentValues(c, o, i).then(function (p) {
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
          var t = X(
            D.mark(function n(a, o) {
              var i = this;
              return D.wrap(
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
            D.mark(function n(a, o) {
              var i,
                c,
                s = arguments;
              return D.wrap(
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
            return Vd.fromExperiment(
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
              new Vd(r, {}, "", { time: Date.now(), reason: Ec.Error })
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
          return ga(this.currentIdentifiers, r) && ga(this.currentAttributes, n);
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
            D.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g;
              return D.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = Kt({}, a)),
                          (h.prev = 1),
                          (l = ws.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = ws.fetchExperimentValues(a, o, i)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = G(p, 2)),
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
          var t = X(
            D.mark(function n(a, o, i, c) {
              var s, u, l, d, p, v, g, f;
              return D.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = Kt(Kt({}, a), {}, { disableCurrentPageLogging: !0 })),
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
            D.mark(function n(a, o, i) {
              var c,
                s,
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
                          (s = g.length > 3 && g[3] !== void 0 ? g[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = m0(a)),
                          u.sdkKey || (u.sdkKey = Qd),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = Kt(
                              Kt({}, u.networkConfig),
                              {},
                              { logEventUrl: z0 },
                            )),
                          u.perimeter === Ua.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = se(u, $0)),
                          (this.user = zd(o, i)),
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
                          (this.statsigClient = new st.StatsigClient(Qd, this.user, v)),
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
              var c = this,
                s,
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
                              D.mark(function v() {
                                return D.wrap(function (f) {
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
            D.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g, f;
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
                        ((u = b.sent), (l = zd(o, u.customAttributesFromFetch)), (b.next = 13));
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
            return Gd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Gd.fromLayer(st._makeLayer(r, { reason: "Error" }, null))
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
  J = (function () {
    function e() {
      pe(this, e);
    }
    return he(e, null, [
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
M = J;
S(J, "client", new V0());
S(J, "hasCheckGateErrorOccurred", !1);
S(J, "hasGetExperimentValueErrorOccurred", !1);
S(J, "checkGate", function (e, t) {
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
S(J, "getExperimentValue", function (e, t, r, n) {
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
S(J, "initializeCalled", M.client.initializeCalled.bind(M.client));
S(J, "initializeCompleted", M.client.initializeCompleted.bind(M.client));
S(J, "waitUntilInitializeCompleted", M.client.waitUntilInitializeCompleted.bind(M.client));
S(J, "initialize", M.client.initialize.bind(M.client));
S(J, "initializeWithProvider", M.client.initializeWithProvider.bind(M.client));
S(J, "initializeFromValues", M.client.initializeFromValues.bind(M.client));
S(J, "manuallyLogGateExposure", M.client.manuallyLogGateExposure.bind(M.client));
S(J, "getExperiment", M.client.getExperiment.bind(M.client));
S(J, "manuallyLogExperimentExposure", M.client.manuallyLogExperimentExposure.bind(M.client));
S(J, "manuallyLogLayerExposure", M.client.manuallyLogLayerExposure.bind(M.client));
S(J, "shutdownStatsig", M.client.shutdownStatsig.bind(M.client));
S(J, "overrideGate", M.client.overrideGate.bind(M.client));
S(J, "clearGateOverride", M.client.clearGateOverride.bind(M.client));
S(J, "overrideConfig", M.client.overrideConfig.bind(M.client));
S(J, "clearConfigOverride", M.client.clearConfigOverride.bind(M.client));
S(J, "setOverrides", M.client.setOverrides.bind(M.client));
S(J, "getOverrides", M.client.getOverrides.bind(M.client));
S(J, "clearAllOverrides", M.client.clearAllOverrides.bind(M.client));
S(J, "isCurrentUser", M.client.isCurrentUser.bind(M.client));
S(J, "onGateUpdated", M.client.onGateUpdated.bind(M.client));
S(J, "onExperimentValueUpdated", M.client.onExperimentValueUpdated.bind(M.client));
S(J, "onAnyUpdated", M.client.onAnyUpdated.bind(M.client));
S(J, "updateUser", M.client.updateUser.bind(M.client));
S(J, "updateUserWithProvider", M.client.updateUserWithProvider.bind(M.client));
S(J, "updateUserWithValues", M.client.updateUserWithValues.bind(M.client));
S(J, "getPackageVersion", M.client.getPackageVersion.bind(M.client));
S(J, "getLayer", M.client.getLayer.bind(M.client));
S(J, "getLayerValue", M.client.getLayerValue.bind(M.client));
var Ks = J;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = J;
  else {
    var po, Os;
    Ks = window.__FEATUREGATES_JS__;
    var ef =
      ((po = Ks) === null || po === void 0 || (Os = po.getPackageVersion) === null || Os === void 0
        ? void 0
        : Os.call(po)) || "4.10.0 or earlier";
    if (ef !== Hr) {
      var G0 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(ef, " when module version ")
        .concat(Hr, " was loading.");
      console.warn(G0);
    }
  }
var Lr,
  Ur,
  H0 =
    (globalThis == null ||
    (Lr = globalThis.process) === null ||
    Lr === void 0 ||
    (Lr = Lr.env) === null ||
    Lr === void 0
      ? void 0
      : Lr.JEST_WORKER_ID) !== void 0,
  W0 =
    !H0 &&
    (globalThis == null ||
    (Ur = globalThis.process) === null ||
    Ur === void 0 ||
    (Ur = Ur.env) === null ||
    Ur === void 0
      ? void 0
      : Ur.NODE_ENV) !== "production",
  K0 = function () {
    var t;
    W0 && (t = console).debug.apply(t, arguments);
  },
  Sc = {},
  J0 = "@atlaskit/platform-feature-flags",
  Ca = "__PLATFORM_FEATURE_FLAGS__",
  th = typeof process < "u" && typeof Sc < "u",
  Y0 = th ? Sc.ENABLE_PLATFORM_FF === "true" : !1,
  X0 = th ? Sc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Z0 = Y0 || X0,
  Q0 = { booleanResolver: void 0 },
  Pa = typeof window < "u" ? window : globalThis;
Pa[Ca] = Pa[Ca] || Q0;
function ew(e) {
  if (Z0)
    return (
      K0(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        J0,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Pa[Ca]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Pa[Ca]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Ks.checkGate(e);
    var a = (n = Pa[Ca]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function de(e) {
  return ew(e);
}
var tw = ["light", "dark", "auto"],
  rw = [
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
  nw = {
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
  aw = {
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
  ow = "data-subtree-theme",
  ii = "data-color-mode",
  rh = "data-contrast-mode",
  si = "data-custom-theme",
  iw = ["light", "dark", "spacing", "typography", "shape"],
  Js = "UNSAFE_themeOptions",
  nh = function (t) {
    return (
      iw.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  ah = function (t) {
    return (
      rw.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  oh = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  sw = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = G(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && oh(i) && (r[o] = i), nh(o) && ah(i) && (r[o] = i), o === Js))
          try {
            r[Js] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  cw = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = G(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && oh(i)) ||
        (o === Js && xe(i) === "object") ||
        (nh(o) && typeof i == "string" && ah(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(xe(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
function tf(e, t) {
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
function rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tf(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var uw = function (t) {
    return (
      tw.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  xc = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(ii) || "",
      n = t.getAttribute(Or) || "";
    return rf(rf({}, sw(n)), uw(r) && { colorMode: r });
  },
  ih = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  Na = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function _P(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function lw(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function mP(e) {
  if (!Na(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, lw(e)]
  );
}
function nf(e) {
  if (!Na(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function yP(e) {
  if (!Na(e)) throw new Error("Invalid HEX");
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
function wP(e, t, r) {
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
function af(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    c = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    s = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * c + 0.0722 * s;
  return u;
}
function kP(e, t) {
  if (!Na(e) || !Na(t)) throw new Error("Invalid HEX");
  var r = nf(e),
    n = nf(t),
    a = af(r[0], r[1], r[2]),
    o = af(n[0], n[1], n[2]),
    i = Math.max(a, o),
    c = Math.min(a, o);
  return (i + 0.05) / (c + 0.05);
}
function OP(e, t) {
  var r = of(e),
    n = of(t),
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
function of(e) {
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
var sh = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
function sf(e, t) {
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
function cf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sf(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var dw = "light",
  fw = "no-preference",
  ch = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.colorMode,
      n = r === void 0 ? _e.colorMode : r,
      a = t.dark,
      o = a === void 0 ? _e.dark : a,
      i = t.light,
      c = i === void 0 ? _e.light : i,
      s = t.contrastMode,
      u = s === void 0 ? _e.contrastMode : s,
      l = t.shape,
      d = l === void 0 ? _e.shape() : l,
      p = t.spacing,
      v = p === void 0 ? _e.spacing : p,
      g = t.typography,
      f = g === void 0 ? _e.typography : g,
      h = t.UNSAFE_themeOptions,
      b = h === void 0 ? _e.UNSAFE_themeOptions : h,
      _ = cw({ dark: o, light: c, shape: d, spacing: v, typography: f }),
      m = S(S({}, Or, _), ii, n === "auto" ? dw : n);
    if (
      (de("platform_increased-contrast-themes") &&
        (m = cf(cf({}, m), {}, S({}, rh, u === "auto" ? fw : u))),
      b && ih(b.brandColor))
    ) {
      var k = JSON.stringify(b),
        w = sh(k);
      m[si] = w;
    }
    return m;
  },
  uh = {
    light: function () {
      return De(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return De(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return De(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return De(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return De(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return De(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    "legacy-light": function () {
      return De(() => import("./atlassian-legacy-light-ChQmBoUT.js"), [], import.meta.url);
    },
    "legacy-dark": function () {
      return De(() => import("./atlassian-legacy-dark-OVXC1RdQ.js"), [], import.meta.url);
    },
    spacing: function () {
      return De(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return De(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    shape: function () {
      return De(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
  },
  vw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(Or, '="').concat(r, '"]:not([').concat(si, "])"),
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
                return ((i.next = 6), pw(r));
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
  pw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), uh[r]());
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
  hw = "(prefers-color-scheme: dark)",
  gw = "(prefers-contrast: more)",
  bw = typeof window < "u" && "matchMedia" in window;
function _w(e) {
  var t = document.documentElement;
  t.setAttribute(ii, e.matches ? "dark" : "light");
}
var Nr = bw && window.matchMedia(hw),
  mw = (function () {
    function e() {
      (pe(this, e), S(this, "unbindThemeChangeListener", null));
    }
    return he(e, [
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
            (this.unbindThemeChangeListener = kr.bind(Nr, { type: "change", listener: _w }));
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
  ho = new mw(),
  yw = typeof window < "u" && "matchMedia" in window;
function ww(e) {
  var t = document.documentElement;
  t.setAttribute(rh, e.matches ? "more" : "no-preference");
}
var Br = yw && window.matchMedia(gw),
  kw = (function () {
    function e() {
      (pe(this, e), S(this, "unbindContrastChangeListener", null));
    }
    return he(e, [
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
            (this.unbindContrastChangeListener = kr.bind(Br, { type: "change", listener: ww }));
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
  go = new kw();
function Ow(e) {
  (e.colorMode === "auto" ? ((e.colorMode = ho.getColorMode()), ho.bind()) : ho.unbind(),
    de("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = go.getContrastMode()), go.bind())
        : go.unbind()));
  var t = ch(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = G(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (ho.unbind(), de("platform_increased-contrast-themes") && go.unbind());
    }
  );
}
function Ew(e, t) {
  var r = JSON.stringify(e),
    n = sh(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(si, '="').concat(n, '"][').concat(Or, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function EP(e) {
  var t = Ee(Array.from(document.head.querySelectorAll("style[".concat(si, "][").concat(Or, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function SP(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = G(n, 2),
      o = a[0],
      i = a[1],
      c = aw[o];
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
function uf(e) {
  var t;
  return (t = Object.entries(nw).find(function (r) {
    var n = G(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var Sw = function (t) {
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
          var v = uf(p);
          v && u.push(v);
        }),
        l.push.apply(l, u));
    else if ((l.push(t[r]), n !== "no-preference" && de("platform_increased-contrast-themes"))) {
      var d = uf(t[r]);
      d && l.push(d);
    }
    return (
      [i, c, s].forEach(function (p) {
        p && l.push(p);
      }),
      Ee(new Set(l))
    );
  },
  xw = function (t) {
    var r = [];
    return Ee(new Set(r));
  };
function Cw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Pw(e)) || t) {
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
function Pw(e, t) {
  if (e) {
    if (typeof e == "string") return lf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? lf(e, t)
          : void 0
    );
  }
}
function lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function df(e, t) {
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
function ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? df(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : df(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Rw = (function () {
    var e = X(
      D.mark(function t() {
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
          m,
          k,
          w,
          O,
          x,
          I,
          R,
          C,
          j,
          U,
          q,
          W,
          $,
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
                            ff(
                              ff({}, _e),
                              {},
                              { typography: _e.typography, shape: _e.shape() },
                              xc(),
                            ),
                          )
                        : r),
                    (o = a.colorMode),
                    (i = o === void 0 ? _e.colorMode : o),
                    (c = a.contrastMode),
                    (s = c === void 0 ? _e.contrastMode : c),
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
                      contrastMode: s,
                      dark: l,
                      light: p,
                      shape: g,
                      spacing: h,
                      typography: _,
                      UNSAFE_themeOptions: n ? void 0 : k,
                    }),
                    (O = Sw(w)),
                    (x = n || vw),
                    (I = O.map(
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
                      ih(k?.brandColor) &&
                      ((R = i || _e.colorMode),
                      (C = Ew(k, R)),
                      C.length > 0 &&
                        I.push(
                          X(
                            D.mark(function B() {
                              var V, ae;
                              return D.wrap(function (ce) {
                                for (;;)
                                  switch ((ce.prev = ce.next)) {
                                    case 0:
                                      return (
                                        (ce.next = 2),
                                        De(
                                          () => import("./custom-theme-BU0Fwus2.js"),
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
                    Promise.all(I)
                  );
                case 11:
                  ((j = xw()), (U = Cw(j)), (N.prev = 13), U.s());
                case 15:
                  if ((q = U.n()).done) {
                    N.next = 21;
                    break;
                  }
                  return ((W = q.value), (N.next = 19), x(W));
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
                  return (($ = Ow(w)), N.abrupt("return", $));
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
  Cc = (function () {
    function e(t) {
      (pe(this, e), S(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return he(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = xc();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Or, ii] }));
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
S(Cc, "observer", null);
S(Cc, "callbacks", new Set());
var lh = y.createContext(void 0),
  Aw = y.createContext(void 0),
  dh = y.createContext(!1),
  Iw = y.createContext(void 0),
  jw = y.createContext(void 0),
  Dw = function () {
    var t;
    return (t = y.useContext(dh)) !== null && t !== void 0 ? t : !1;
  },
  fh = function () {
    return typeof document < "u" ? document : null;
  };
function vh(e) {
  var t = fh();
  return t ? t.head.querySelector("style[".concat(Or, '="').concat(e, '"]')) : !1;
}
var Mw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!vh(r)) {
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
                return ((i.next = 6), uh[r]());
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
  Tw = (function () {
    var e = X(
      D.mark(function t(r, n) {
        var a, o;
        return D.wrap(function (c) {
          for (;;)
            switch ((c.prev = c.next)) {
              case 0:
                if (((a = fh()), a)) {
                  c.next = 3;
                  break;
                }
                return c.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !vh(n))
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
  Fw = (function () {
    var e = X(
      D.mark(function t(r) {
        var n;
        return D.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), Mw(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                Tw(n, r);
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
  Lw = (function () {
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
                  n.forEach(Fw));
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
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vf(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Uw = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  Nw = typeof window < "u" && "matchMedia" in window,
  Ra = Nw ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function pf(e) {
  return e === "auto" ? (Ra != null && Ra.matches ? "dark" : "light") : e;
}
var Bw = { body: "_1e0c1bgi" };
function ph(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = y.useState(n),
    i = G(o, 2),
    c = i[0],
    s = i[1],
    u = y.useState(pf(n)),
    l = G(u, 2),
    d = l[0],
    p = l[1],
    v = y.useState(function () {
      return bt(bt({}, Uw), a);
    }),
    g = G(v, 2),
    f = g[0],
    h = g[1],
    b = y.useCallback(function (R) {
      (s(R), p(pf(R)));
    }, []),
    _ = y.useCallback(function (R) {
      h(function (C) {
        return bt(bt({}, C), R);
      });
    }, []),
    m = y.useRef(null),
    k = Ky(),
    w = Dw(),
    O = k && !w,
    x = (!de("platform_dst_subtree_theming") && !k && !w) || O;
  (y.useEffect(
    function () {
      if (x) {
        var R = (function () {
            var j = X(
              D.mark(function U() {
                var q;
                return D.wrap(function ($) {
                  for (;;)
                    switch (($.prev = $.next)) {
                      case 0:
                        if (!m.current) {
                          $.next = 6;
                          break;
                        }
                        return (($.next = 3), m.current);
                      case 3:
                        ((q = $.sent), q(), (m.current = null));
                      case 6:
                      case "end":
                        return $.stop();
                    }
                }, U);
              }),
            );
            return function () {
              return j.apply(this, arguments);
            };
          })(),
          C = (function () {
            var j = X(
              D.mark(function U() {
                var q;
                return D.wrap(function ($) {
                  for (;;)
                    switch (($.prev = $.next)) {
                      case 0:
                        return (($.next = 2), R());
                      case 2:
                        ((q = Rw(bt(bt({}, f), {}, { colorMode: d }))), (m.current = q));
                      case 4:
                      case "end":
                        return $.stop();
                    }
                }, U);
              }),
            );
            return function () {
              return j.apply(this, arguments);
            };
          })();
        return (
          C(),
          function () {
            R();
          }
        );
      } else Lw(f);
    },
    [k, w, O, d, x, f],
  ),
    y.useEffect(
      function () {
        if (Ra) {
          var R = kr.bind(Ra, {
            type: "change",
            listener: function (j) {
              c === "auto" && p(j.matches ? "dark" : "light");
            },
          });
          return R;
        }
      },
      [c],
    ));
  var I = bt(bt({}, ch(bt(bt({}, f), {}, { colorMode: d }))), {}, S({}, ow, !0));
  return E.createElement(
    dh.Provider,
    { value: !0 },
    E.createElement(
      lh.Provider,
      { value: d },
      E.createElement(
        Aw.Provider,
        { value: b },
        E.createElement(
          Iw.Provider,
          { value: f },
          E.createElement(
            jw.Provider,
            { value: _ },
            !x && de("platform_dst_subtree_theming")
              ? E.createElement("div", ne({}, I, { className: P([Bw.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function hh() {
  var e = y.useContext(lh),
    t = xc(),
    r = y.useState(t?.colorMode || "light"),
    n = G(r, 2),
    a = n[0],
    o = n[1];
  return (
    y.useEffect(
      function () {
        if (!e) {
          var i = new Cc(function (c) {
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
var qw = function () {
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
  gh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: qw() });
  },
  $w = gh(),
  zw = y.createContext(gh()),
  Vw = function (e) {
    return e.value++;
  },
  Gw = function (e) {
    return e ? e.prefix : "";
  },
  Hw = function (e) {
    var t = e || $w,
      r = Gw(t),
      n = Vw(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  bh = function () {
    var e = y.useContext(zw),
      t = y.useState(function () {
        return Hw(e);
      })[0];
    return t;
  },
  Ww = function () {
    var e = bh().uid;
    return e;
  },
  Kw = function () {
    var e = bh().gen;
    return e;
  },
  Es,
  Eo = (Es = E.useId) !== null && Es !== void 0 ? Es : void 0;
function Jw() {
  return Eo && de("platform-dst-react-18-use-id")
    ? de("platform-dst-react-18-use-id-selector-safe")
      ? Eo().replace(/[:«»]/g, "_")
      : Eo()
    : "uid".concat(Ww());
}
function Yw() {
  if (Eo && de("platform-dst-react-18-use-id")) {
    var e = Jw();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Kw();
}
var Pc = function (t) {
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
Pc.displayName = "VisuallyHidden";
var Xw = {
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
  Zw = ["children"];
function Qw(e) {
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
      s = se(i, Zw),
      u = n(s);
    return E.createElement(E.Fragment, null, c(u));
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
    return E.createElement(r.Provider, { value: u }, i.children);
  }
  return { Consumer: a, Provider: o, useTheme: n };
}
var ek = Qw(function () {
    return { mode: "light" };
  }),
  tk = ek.useTheme;
function rk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function nk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var ak = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(nk(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = rk(a);
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
  Bo = "-moz-",
  ee = "-webkit-",
  _h = "comm",
  Rc = "rule",
  Ac = "decl",
  ok = "@import",
  mh = "@keyframes",
  ik = "@layer",
  sk = Math.abs,
  ci = String.fromCharCode,
  ck = Object.assign;
function uk(e, t) {
  return ke(e, 0) ^ 45
    ? (((((((t << 2) ^ ke(e, 0)) << 2) ^ ke(e, 1)) << 2) ^ ke(e, 2)) << 2) ^ ke(e, 3)
    : 0;
}
function yh(e) {
  return e.trim();
}
function lk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function Ys(e, t) {
  return e.indexOf(t);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ba(e, t, r) {
  return e.slice(t, r);
}
function mt(e) {
  return e.length;
}
function Ic(e) {
  return e.length;
}
function bo(e, t) {
  return (t.push(e), e);
}
function dk(e, t) {
  return e.map(t).join("");
}
var ui = 1,
  Jr = 1,
  wh = 0,
  Le = 0,
  me = 0,
  rn = "";
function li(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: ui,
    column: Jr,
    length: i,
    return: "",
  };
}
function _a(e, t) {
  return ck(li("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function fk() {
  return me;
}
function vk() {
  return ((me = Le > 0 ? ke(rn, --Le) : 0), Jr--, me === 10 && ((Jr = 1), ui--), me);
}
function Ve() {
  return ((me = Le < wh ? ke(rn, Le++) : 0), Jr++, me === 10 && ((Jr = 1), ui++), me);
}
function Ot() {
  return ke(rn, Le);
}
function So() {
  return Le;
}
function Ya(e, t) {
  return Ba(rn, e, t);
}
function qa(e) {
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
function kh(e) {
  return ((ui = Jr = 1), (wh = mt((rn = e))), (Le = 0), []);
}
function Oh(e) {
  return ((rn = ""), e);
}
function xo(e) {
  return yh(Ya(Le - 1, Xs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pk(e) {
  for (; (me = Ot()) && me < 33; ) Ve();
  return qa(e) > 2 || qa(me) > 3 ? "" : " ";
}
function hk(e, t) {
  for (; --t && Ve() && !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97)); );
  return Ya(e, So() + (t < 6 && Ot() == 32 && Ve() == 32));
}
function Xs(e) {
  for (; Ve(); )
    switch (me) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xs(me);
        break;
      case 40:
        e === 41 && Xs(e);
        break;
      case 92:
        Ve();
        break;
    }
  return Le;
}
function gk(e, t) {
  for (; Ve() && e + me !== 57; ) if (e + me === 84 && Ot() === 47) break;
  return "/*" + Ya(t, Le - 1) + "*" + ci(e === 47 ? e : Ve());
}
function bk(e) {
  for (; !qa(Ot()); ) Ve();
  return Ya(e, Le);
}
function _k(e) {
  return Oh(Co("", null, null, null, [""], (e = kh(e)), 0, [0], e));
}
function Co(e, t, r, n, a, o, i, c, s) {
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
    switch (((g = _), (_ = Ve()))) {
      case 40:
        if (g != 108 && ke(x, d - 1) == 58) {
          Ys((x += te(xo(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += xo(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += pk(g);
        break;
      case 92:
        x += hk(So() - 1, 7);
        continue;
      case 47:
        switch (Ot()) {
          case 42:
          case 47:
            bo(mk(gk(Ve(), So()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        c[u++] = mt(x) * b;
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
                bo(v > 32 ? gf(x + ";", n, r, d - 1) : gf(te(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((bo((O = hf(x, t, r, u, l, a, c, m, (k = []), (w = []), d)), o), _ === 123))
              if (l === 0) Co(x, t, O, O, k, o, d, c, w);
              else
                switch (p === 99 && ke(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Co(
                      e,
                      O,
                      O,
                      n && bo(hf(e, O, O, 0, 0, a, c, m, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      c,
                      n ? k : w,
                    );
                    break;
                  default:
                    Co(x, O, O, O, [""], w, 0, c, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (m = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + mt(x)), (v = g));
      default:
        if (f < 1) {
          if (_ == 123) --f;
          else if (_ == 125 && f++ == 0 && vk() == 125) continue;
        }
        switch (((x += ci(_)), _ * f)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((c[u++] = (mt(x) - 1) * b), (b = 1));
            break;
          case 64:
            (Ot() === 45 && (x += xo(Ve())), (p = Ot()), (l = d = mt((m = x += bk(So())))), _++);
            break;
          case 45:
            g === 45 && mt(x) == 2 && (f = 0);
        }
    }
  return o;
}
function hf(e, t, r, n, a, o, i, c, s, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = Ic(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, _ = Ba(e, d + 1, (d = sk((f = i[g])))), m = e; b < v; ++b)
      (m = yh(f > 0 ? p[b] + " " + _ : te(_, /&\f/g, p[b]))) && (s[h++] = m);
  return li(e, t, r, a === 0 ? Rc : c, s, u, l);
}
function mk(e, t, r) {
  return li(e, t, r, _h, ci(fk()), Ba(e, 2, -2), 0);
}
function gf(e, t, r, n) {
  return li(e, t, r, Ac, Ba(e, 0, n), Ba(e, n + 1, -1), n);
}
function Wr(e, t) {
  for (var r = "", n = Ic(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function yk(e, t, r, n) {
  switch (e.type) {
    case ik:
      if (e.children.length) break;
    case ok:
    case Ac:
      return (e.return = e.return || e.value);
    case _h:
      return "";
    case mh:
      return (e.return = e.value + "{" + Wr(e.children, n) + "}");
    case Rc:
      e.value = e.props.join(",");
  }
  return mt((r = Wr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function wk(e) {
  var t = Ic(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function kk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Ok(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Ek = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Ot()), a === 38 && o === 12 && (r[n] = 1), !qa(o); ) Ve();
    return Ya(t, Le);
  },
  Sk = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (qa(a)) {
        case 0:
          (a === 38 && Ot() === 12 && (r[n] = 1), (t[n] += Ek(Le - 1, r, n)));
          break;
        case 2:
          t[n] += xo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Ot() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += ci(a);
      }
    while ((a = Ve()));
    return t;
  },
  xk = function (t, r) {
    return Oh(Sk(kh(t), r));
  },
  bf = new WeakMap(),
  Ck = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !bf.get(n)) && !a) {
        bf.set(t, !0);
        for (var o = [], i = xk(r, o), c = n.props, s = 0, u = 0; s < i.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = o[s] ? i[s].replace(/&\f/g, c[l]) : c[l] + " " + i[s];
      }
    }
  },
  Pk = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Eh(e, t) {
  switch (uk(e, t)) {
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
      return ee + e + Bo + e + Oe + e + e;
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
                "$1" + ee + "$2-$3$1" + Bo + (ke(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ys(e, "stretch") ? Eh(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ke(e, t + 1) !== 115) break;
    case 6444:
      switch (ke(e, mt(e) - 3 - (~Ys(e, "!important") && 10))) {
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
var Rk = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ac:
          t.return = Eh(t.value, t.length);
          break;
        case mh:
          return Wr([_a(t, { value: te(t.value, "@", "@" + ee) })], a);
        case Rc:
          if (t.length)
            return dk(t.props, function (o) {
              switch (lk(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Wr([_a(t, { props: [te(o, /:(read-\w+)/, ":" + Bo + "$1")] })], a);
                case "::placeholder":
                  return Wr(
                    [
                      _a(t, { props: [te(o, /:(plac\w+)/, ":" + ee + "input-$1")] }),
                      _a(t, { props: [te(o, /:(plac\w+)/, ":" + Bo + "$1")] }),
                      _a(t, { props: [te(o, /:(plac\w+)/, Oe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Ak = [Rk],
  Ik = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Ak,
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
      u = [Ck, Pk];
    {
      var l,
        d = [
          yk,
          kk(function (f) {
            l.insert(f);
          }),
        ],
        p = wk(u.concat(a, d)),
        v = function (h) {
          return Wr(_k(h), p);
        };
      s = function (h, b, _, m) {
        ((l = _), v(h ? h + "{" + b.styles + "}" : b.styles), m && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new ak({
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
  Ss = { exports: {} },
  re = {};
var _f;
function jk() {
  if (_f) return re;
  _f = 1;
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
  function m(w) {
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
    (re.AsyncMode = s),
    (re.ConcurrentMode = u),
    (re.ContextConsumer = c),
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
      return k(w) || m(w) === s;
    }),
    (re.isConcurrentMode = k),
    (re.isContextConsumer = function (w) {
      return m(w) === c;
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
            w.$$typeof === c ||
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
var mf;
function Dk() {
  return (mf || ((mf = 1), (Ss.exports = jk())), Ss.exports);
}
var xs, yf;
function Mk() {
  if (yf) return xs;
  yf = 1;
  var e = Dk(),
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
      for (var m = i(g), k = i(f), w = 0; w < _.length; ++w) {
        var O = _[w];
        if (!r[O] && !(h && h[O]) && !(k && k[O]) && !(m && m[O])) {
          var x = l(f, O);
          try {
            c(g, O, x);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((xs = v), xs);
}
Mk();
var Tk = !0;
function Sh(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var jc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || Tk === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  xh = function (t, r, n) {
    jc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function Fk(e) {
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
var Lk = {
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
  Uk = /[A-Z]|^ms/g,
  Nk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ch = function (t) {
    return t.charCodeAt(1) === 45;
  },
  wf = function (t) {
    return t != null && typeof t != "boolean";
  },
  Cs = Ok(function (e) {
    return Ch(e) ? e : e.replace(Uk, "-$&").toLowerCase();
  }),
  kf = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Nk, function (n, a, o) {
            return ((yt = { name: a, styles: o, next: yt }), a);
          });
    }
    return Lk[t] !== 1 && !Ch(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function $a(e, t, r) {
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
        var c = o.styles + ";";
        return c;
      }
      return Bk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = yt,
          u = r(e);
        return ((yt = s), $a(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Bk(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += $a(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : wf(c) && (n += Cs(o) + ":" + kf(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) wf(i[s]) && (n += Cs(o) + ":" + kf(o, i[s]) + ";");
      else {
        var u = $a(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Cs(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var Of = /label:\s*([^\s;{]+)\s*(;|$)/g,
  yt;
function Dc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  yt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += $a(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += $a(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  Of.lastIndex = 0;
  for (var u = "", l; (l = Of.exec(a)) !== null; ) u += "-" + l[1];
  var d = Fk(a) + u;
  return { name: d, styles: a, next: yt };
}
var qk = function (t) {
    return t();
  },
  $k = su.useInsertionEffect ? su.useInsertionEffect : !1,
  Ph = $k || qk,
  Rh = y.createContext(typeof HTMLElement < "u" ? Ik({ key: "css" }) : null);
Rh.Provider;
var Ah = function (t) {
    return y.forwardRef(function (r, n) {
      var a = y.useContext(Rh);
      return t(r, a, n);
    });
  },
  Ih = y.createContext({}),
  Mc = {}.hasOwnProperty,
  Zs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  zk = function (t, r) {
    var n = {};
    for (var a in r) Mc.call(r, a) && (n[a] = r[a]);
    return ((n[Zs] = t), n);
  },
  Vk = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      jc(r, n, a),
      Ph(function () {
        return xh(r, n, a);
      }),
      null
    );
  },
  Gk = Ah(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Zs],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Sh(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = Dc(o, void 0, y.useContext(Ih));
    i += t.key + "-" + c.name;
    var s = {};
    for (var u in e) Mc.call(e, u) && u !== "css" && u !== Zs && (s[u] = e[u]);
    return (
      (s.className = i),
      r && (s.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(Vk, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        y.createElement(a, s),
      )
    );
  }),
  Hk = Gk,
  Lt = function (t, r) {
    var n = arguments;
    if (r == null || !Mc.call(r, "css")) return y.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = Hk), (o[1] = zk(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return y.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Lt || (Lt = {}));
function It() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Dc(t);
}
var Wk = function e(t) {
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
function Kk(e, t, r) {
  var n = [],
    a = Sh(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var Jk = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Ph(function () {
        for (var a = 0; a < n.length; a++) xh(r, n[a], !1);
      }),
      null
    );
  },
  Yk = Ah(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = Dc(u, t.registered);
        return (r.push(d), jc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return Kk(t.registered, n, Wk(u));
      },
      o = { css: n, cx: a, theme: y.useContext(Ih) },
      i = e.children(o);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(Jk, { cache: t, serializedArr: r }),
      i,
    );
  });
function Xk(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var jh = 2,
  Qs = It({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: jh,
  }),
  ec = It({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -jh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  Zk = It({
    "&:focus": Qs,
    "&:focus-visible": Qs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  Qk = It({
    "&:focus": ec,
    "&:focus-visible": ec,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Dh = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? ec : Qs,
      o = r ? Qk : Zk,
      i = typeof n > "u" ? o : n === "on" && a;
    return Lt(Yk, null, function (c) {
      var s = c.css,
        u = c.cx;
      return y.Children.only(
        i ? y.cloneElement(t, { className: u([s(i), t.props.className]) }) : t,
      );
    });
  });
Dh.displayName = "FocusRing";
function Ft(e) {
  (e.preventDefault(), e.stopPropagation());
}
var e1 = 9;
function Ef(e) {
  e.keyCode !== e1 && Ft(e);
}
var t1 = {
    onMouseDownCapture: Ft,
    onMouseUpCapture: Ft,
    onKeyDownCapture: Ef,
    onKeyUpCapture: Ef,
    onTouchStartCapture: Ft,
    onTouchEndCapture: Ft,
    onPointerDownCapture: Ft,
    onPointerUpCapture: Ft,
    onClickCapture: Ft,
    onClick: Ft,
  },
  r1 = {};
function n1(e) {
  var t = e.isInteractive;
  return t ? r1 : t1;
}
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
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sf(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jt = 8,
  Ps = ["default", "primary", "danger", "warning"],
  tc = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  a1 = { default: tc.default, compact: tc.compact, none: "inherit" },
  o1 = {
    default: "0 ".concat(Jt + Jt / 4, "px"),
    compact: "0 ".concat(Jt + Jt / 4, "px"),
    none: "0",
  },
  i1 = { compact: "0 ".concat(Jt / 4, "px"), default: "0 ".concat(Jt / 4, "px"), none: "0" },
  s1 = { default: "middle", compact: "middle", none: "baseline" },
  Mh = { content: "0 ".concat(Jt / 4, "px"), icon: "0 ".concat(Jt / 4, "px") },
  Th = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  c1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Me(Me({}, Th), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  u1 = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  l1 = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  d1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  f1 = {
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
  v1 = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  p1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  h1 = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Me(
      Me({}, Th),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  g1 = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function b1(e) {
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
        height: tc[r],
        lineHeight: a1[r],
        padding: o ? i1[r] : o1[r],
        verticalAlign: s1[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? h1
        : Me(
            Me(
              Me(
                Me(
                  Me(
                    Me(
                      Me(Me({}, t === "default" && c1), t === "primary" && u1),
                      t === "link" && l1,
                    ),
                    t === "subtle" && d1,
                  ),
                  t === "subtle-link" && f1,
                ),
                t === "warning" && v1,
              ),
              t === "danger" && p1,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Ps.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Ps.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Ps.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            g1,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function xf(e) {
  var t = e.spacing;
  return It({
    display: "flex",
    margin: t === "none" ? 0 : Mh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function _1(e) {
  var t = e.spacing;
  return It({
    margin: t === "none" ? 0 : Mh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function m1(e) {
  var t = e.hasOverlay;
  return It({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var y1 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Tc = function (t) {
    return t && y.isValidElement(t) && t.type === Pc;
  },
  w1 = [
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
  k1 = { "> *": { pointerEvents: "none" } },
  O1 = It({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  E1 = It({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Cf = function (t, r) {
    return !t || Tc(t) ? null : r;
  },
  S1 = function (t, r) {
    return Tc(t) ? t : t ? Lt("span", { css: r }, t) : null;
  },
  x1 = E.forwardRef(function (t, r) {
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
      m = t.isSelected,
      k = m === void 0 ? !1 : m,
      w = t.onBlur,
      O = t.onClick,
      x = O === void 0 ? Se : O,
      I = t.onFocus,
      R = t.onMouseDown,
      C = R === void 0 ? Se : R,
      j = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      q = U === void 0 ? "default" : U,
      W = t.tabIndex,
      $ = W === void 0 ? 0 : W,
      H = t.type,
      K = H === void 0 ? (d ? void 0 : "button") : H,
      N = t.testId,
      B = se(t, w1),
      V = y.useRef(),
      ae = y.useCallback(
        function (ve) {
          if (((V.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [V, r],
      );
    Xk(V, c);
    var ie = y.useContext(kc),
      ce = y.useCallback(
        function (ve, Be) {
          (ie && ie.tracePress(h, ve.timeStamp), x(ve, Be));
        },
        [x, ie, h],
      ),
      we = La({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      T = y.useCallback(
        function (ve) {
          (ve.preventDefault(), C(ve));
        },
        [C],
      );
    y.useEffect(
      function () {
        var ve = V.current;
        _ && ve && ve === document.activeElement && ve.blur();
      },
      [_],
    );
    var ye = !!j,
      Ne = It(m1({ hasOverlay: ye })),
      fe = !_ && !ye,
      Pe = {};
    return (
      (k || _ || o === "warning") &&
        (Pe = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || _
                ? "var(--ds-icon-subtle, ".concat($s, ")")
                : "var(--ds-icon-warning-inverse, ".concat($s, ")"),
              " !important",
            ),
          },
        }),
      Lt(
        Dh,
        null,
        Lt(
          v,
          ne(
            {},
            B,
            {
              ref: ae,
              className: l,
              css: [s, fe ? null : k1],
              "data-has-overlay": ye ? !0 : void 0,
              "data-testid": N,
              disabled: _,
              href: fe ? d : void 0,
              onBlur: w,
              onClick: we,
              onFocus: I,
              onMouseDown: T,
              tabIndex: _ ? -1 : $,
              type: K,
            },
            n1({ isInteractive: fe }),
          ),
          f ? Lt("span", { css: [Ne, xf({ spacing: q }), Cf(u, O1)] }, f) : null,
          S1(u, [Ne, _1({ spacing: q })]),
          g ? Lt("span", { css: [Ne, xf({ spacing: q }), Cf(u, E1)] }, g) : null,
          j ? Lt("span", { css: [y1, Pe] }, j) : null,
        ),
      )
    );
  });
function C1(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Tc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var P1 = [
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
  Pf = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Fc = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? Se : l,
        p = t.onMouseUp,
        v = p === void 0 ? Se : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        _ = se(t, P1),
        m = tk(),
        k = m.mode,
        w = C1({ children: o, iconBefore: i, iconAfter: c }),
        O = y.useState(!1),
        x = G(O, 2),
        I = x[0],
        R = x[1],
        C = y.useCallback(
          function (q) {
            (d(q), Pf && R(!0));
          },
          [d, R],
        ),
        j = y.useCallback(
          function (q) {
            (v(q), Pf && R(!1));
          },
          [v, R],
        ),
        U = y.useMemo(
          function () {
            return b1({
              appearance: a,
              spacing: b,
              isSelected: u,
              shouldFitContainer: f,
              isOnlySingleIcon: w,
            });
          },
          [a, b, k, u, f, w],
        );
      return E.createElement(
        x1,
        ne({}, _, {
          ref: r,
          appearance: a,
          buttonCss: U,
          children: o,
          "data-firefox-is-active": I ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: u,
          onMouseDown: C,
          onMouseUp: j,
          spacing: b,
        }),
      );
    }),
  );
Fc.displayName = "Button";
function Rf(e) {
  return E.createElement(Fc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function R1(e) {
  return E.createElement(Fc, ne({}, e, { appearance: "subtle" }));
}
var A1 = { container: "_1e0c1txw _kqswh2mm" };
function I1(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return E.createElement(
    oi,
    { as: "li", testId: r, key: t, xcss: A1.container, paddingInline: "space.100" },
    E.createElement(
      Ny,
      { testId: r && "".concat(r, "-text") },
      E.createElement(Pc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Af = {},
  If =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function j1(e, t) {
  return !!(e === t || (If(e) && If(t)));
}
function D1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!j1(e[r], t[r])) return !1;
  return !0;
}
function M1(e, t) {
  t === void 0 && (t = D1);
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
var T1 = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > o,
    l = u && o - 4 < r,
    d = u && r < s - o + 3,
    p = M1(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(h, b).map(function (_, m) {
        return c(_, h + m, a);
      });
    });
  if (!u) return p(0, s);
  if (l && !d) {
    var v = o - 2;
    return [].concat(
      Ee(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - v })],
      Ee(p(s - v)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Ee(p(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: s - 1 })],
      Ee(p(s - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Ee(p(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Ee(p(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Ee(p(s - 1)),
  );
};
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
function F1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jf(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var rc = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect4ttxp",
    navigatorIconWrapper: "_18zr12x7",
  },
  L1 = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function Df(e) {
  var t = e.chevronDirection,
    r = t === "left" ? iy : uy;
  return E.createElement(
    oi,
    { as: "span", xcss: rc.navigatorIconWrapper },
    E.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function U1(e, t) {
  var r = e.components,
    n = r === void 0 ? Af : r,
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
    h = f === void 0 ? Af : f,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    m = e.onChange,
    k = m === void 0 ? Se : m,
    w = e.pages,
    O = e.getPageLabel,
    x = e.renderEllipsis,
    I = x === void 0 ? I1 : x,
    R = e.analyticsContext,
    C = e.testId,
    j = e.isDisabled,
    U = Qm(i, function () {
      return o || 0;
    }),
    q = G(U, 2),
    W = q[0],
    $ = q[1],
    H = La(
      F1(
        {
          fn: function (B, V) {
            var ae = B.event,
              ie = B.selectedPageIndex;
            (i === void 0 && $(ie), k && k(ae, w[ie], V));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: R,
        },
        L1,
      ),
    ),
    K = function (B, V, ae) {
      var ie = w[W],
        ce = "".concat(l, " ").concat(O ? O(B, V) : B),
        we = B === ie;
      return E.createElement(
        Oo,
        { as: "li", xcss: rc.paginationMenuItem, key: "page-".concat(O ? O(B, V) : V) },
        E.createElement(
          R1,
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
  return E.createElement(
    oi,
    { testId: C, style: h, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      Oo,
      { space: "space.0", alignBlock: "center" },
      E.createElement(Rf, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (B) {
          return H({ event: B, selectedPageIndex: W - 1 });
        },
        isDisabled: j || W === 0,
        iconBefore: E.createElement(Df, { chevronDirection: "left" }),
        "aria-label": p,
        testId: C && "".concat(C, "--left-navigator"),
      }),
      E.createElement(
        Oo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: rc.paginationMenu },
        T1(w, W, { max: _, ellipsis: I, transform: K }, C),
      ),
      E.createElement(Rf, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (B) {
          return H({ event: B, selectedPageIndex: W + 1 });
        },
        isDisabled: j || W === w.length - 1,
        iconBefore: E.createElement(Df, { chevronDirection: "right" }),
        "aria-label": g,
        testId: C && "".concat(C, "--right-navigator"),
      }),
    ),
  );
}
var N1 = y.memo(y.forwardRef(U1));
function B1(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Fh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Fh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Fh = function () {
    return !!e;
  })();
}
var q1 = (function (e) {
    function t() {
      var r;
      pe(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = B1(this, t, [].concat(a))),
        S(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      We(t, e),
      he(t, [
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
              l = Ee(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return E.createElement(N1, {
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
  })(E.Component),
  $1 = ["isRanking", "testId"],
  z1 = [
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
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mf(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Tf = "--local-dynamic-table-text-color",
  V1 = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = se(t, $1);
    return y.createElement(
      "thead",
      ne({ "data-testid": n }, a, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  G1 = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      u = se(e, z1),
      l = ma(
        ma(ma({}, c), r && Dp({ width: r })),
        {},
        S({}, Tf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === hr,
      p = a === Lo,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return y.createElement(
      g,
      ne({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, u, {
        className: P([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ma(
          ma({}, l),
          {},
          { "--_17ckjys": Ip("var(--ds-text-subtle, ".concat("var(".concat(Tf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function H1(e, t, r) {
  return (
    (t = Q(t)),
    He(e, Lh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
function W1(e) {
  return (function (t) {
    function r() {
      var n;
      pe(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = H1(this, r, [].concat(o))),
        S(n, "state", { refWidth: 0, refHeight: 0 }),
        S(n, "innerRef", function (c) {
          c && !n.props.isRanking && (n.ref = c);
        }),
        S(n, "updateDimensions", function () {
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
      We(r, t),
      he(r, [
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
            return E.createElement(
              e,
              ne({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(E.Component);
}
var ya = {},
  Ff;
function K1() {
  if (Ff) return ya;
  ((Ff = 1), Object.defineProperty(ya, "__esModule", { value: !0 }), (ya.default = void 0));
  var e = r(wr()),
    t = r(ai);
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
  return ((n.displayName = "ArrowDownIcon"), (ya.default = n), ya);
}
var J1 = K1();
const Y1 = Qt(J1);
var wa = {},
  Lf;
function X1() {
  if (Lf) return wa;
  ((Lf = 1), Object.defineProperty(wa, "__esModule", { value: !0 }), (wa.default = void 0));
  var e = r(wr()),
    t = r(ai);
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
  return ((n.displayName = "ArrowUpIcon"), (wa.default = n), wa);
}
var Z1 = X1();
const Q1 = Qt(Z1);
var eO = "Escape";
function tO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    a = y.useCallback(
      function (i) {
        r || n.current || i.key !== eO || ((n.current = !0), t(i));
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
var rO = y.createContext(null),
  nO = y.createContext(null);
function aO() {
  var e = y.useContext(nO);
  return e;
}
function oO(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = y.useContext(rO),
    o = aO();
  y.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var Sa = { none: 0, small: 100, medium: 350, large: 700 },
  Rs = 0.5,
  iO = { none: Sa.none, small: Sa.small * Rs, medium: Sa.medium * Rs, large: Sa.large * Rs },
  sO = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  cO = function () {
    if (!sO()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  uO = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  lO = function () {
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
      }, uO(t)),
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
  Uh = { appear: !0, isExiting: !1 },
  Nh = y.createContext(Uh),
  Uf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Uh;
    return E.createElement(Nh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Nf = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  dO = function (t, r) {
    for (var n = r.concat([]), a = fO(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  fO = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  vO = function (t, r) {
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
  Bh = y.memo(function (e) {
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
      g = G(v, 2),
      f = g[0],
      h = g[1];
    if (
      (y.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof c == "boolean")
    )
      return n;
    var b = G(c, 2),
      _ = b[0],
      m = b[1],
      k = Nf(_),
      w = Nf(m);
    m !== n && s([m, n]);
    var O = vO(w, k),
      x = !!O.size,
      I = w;
    if ((x && (I = dO(w, k)), a))
      if (d.length) I = d;
      else {
        var R = I.filter(function (C) {
          return O.has(C.key);
        });
        R.length && p(R);
      }
    return (
      O.size
        ? (I = I.map(function (C) {
            var j = O.has(C.key);
            return Uf(C, {
              appear: !0,
              isExiting: j,
              onFinish: j
                ? function () {
                    (O.delete(C.key), O.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (I = I.map(function (C) {
            return Uf(C, f);
          })),
      I
    );
  }),
  pO = function () {
    return y.useContext(Nh);
  };
Bh.displayName = "ExitingPersistence";
function hO() {
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
var gO = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: Se };
  }),
  bO = function () {
    var t = hO(),
      r = y.useContext(gO);
    return r(t);
  },
  _O = function (t) {
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
      v = bO(),
      g = pO(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      _ = lO(),
      m = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      O = y.useState(b),
      x = G(O, 2),
      I = x[0],
      R = x[1];
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
              (w === "exiting" && h?.(), C || R(!1), l?.(w));
            };
            if (cO()) {
              j();
              return;
            }
            return (
              R(!0),
              _(j, f ? iO[p] : Sa[p] + k),
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
          className: I
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
                ((!f && i === "fade-in") || (f && s === "fade-in")) && P(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && s === "fade-out")) && P(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && s === "zoom-in")) && P(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && s === "zoom-out")) && P(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && s === "slide-in-from-top")) &&
                  P(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && s === "slide-out-from-top")) &&
                  P(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && s === "slide-in-from-right")) &&
                  P(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && s === "slide-out-from-right")) &&
                  P(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && s === "slide-in-from-bottom")) &&
                  P(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && s === "slide-out-from-bottom")) &&
                  P(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && s === "slide-in-from-left")) &&
                  P(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && s === "slide-out-from-left")) &&
                  P(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && s === "fade-in-from-top")) &&
                  P(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && s === "fade-out-from-top")) &&
                  P(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && s === "fade-in-from-left")) &&
                  P(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && s === "fade-out-from-left")) &&
                  P(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && s === "fade-in-from-bottom")) &&
                  P(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && s === "fade-out-from-bottom")) &&
                  P(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && s === "fade-in-from-right")) &&
                  P(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && s === "fade-out-from-right")) &&
                  P(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && s === "fade-in-from-top-constant")) &&
                  P(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && s === "fade-out-from-top-constant")) &&
                  P(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && s === "fade-in-from-left-constant")) &&
                  P(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && s === "fade-out-from-left-constant")) &&
                  P(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && s === "fade-in-from-bottom-constant")) &&
                  P(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && s === "fade-out-from-bottom-constant")) &&
                  P(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && s === "fade-in-from-right-constant")) &&
                  P(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && s === "fade-out-from-right-constant")) &&
                  P(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  mO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  yO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? mO[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      _O,
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
  wO = y.createContext();
y.createContext();
var kO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  OO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  EO = function (t, r) {
    if (typeof t == "function") return OO(t, r);
    t != null && (t.current = r);
  },
  Bf = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  qf =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Te = "top",
  nt = "bottom",
  at = "right",
  Fe = "left",
  Lc = "auto",
  Xa = [Te, nt, at, Fe],
  Yr = "start",
  za = "end",
  SO = "clippingParents",
  qh = "viewport",
  ka = "popper",
  xO = "reference",
  $f = Xa.reduce(function (e, t) {
    return e.concat([t + "-" + Yr, t + "-" + za]);
  }, []),
  $h = [].concat(Xa, [Lc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Yr, t + "-" + za]);
  }, []),
  CO = "beforeRead",
  PO = "read",
  RO = "afterRead",
  AO = "beforeMain",
  IO = "main",
  jO = "afterMain",
  DO = "beforeWrite",
  MO = "write",
  TO = "afterWrite",
  FO = [CO, PO, RO, AO, IO, jO, DO, MO, TO];
function Rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ge(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function gr(e) {
  var t = Ge(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = Ge(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Uc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ge(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function LO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !rt(o) ||
      !Rt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function UO(e) {
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
        !rt(a) ||
          !Rt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const NO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: LO,
  effect: UO,
  requires: ["computeStyles"],
};
function Et(e) {
  return e.split("-")[0];
}
var vr = Math.max,
  qo = Math.min,
  Xr = Math.round;
function nc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function zh() {
  return !/^((?!chrome|android).)*safari/i.test(nc());
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
  var i = gr(e) ? Ge(e) : window,
    c = i.visualViewport,
    s = !zh() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function Nc(e) {
  var t = Zr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Vh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Uc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function zt(e) {
  return Ge(e).getComputedStyle(e);
}
function BO(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function er(e) {
  return ((gr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function di(e) {
  return Rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Uc(e) ? e.host : null) || er(e);
}
function zf(e) {
  return !rt(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function qO(e) {
  var t = /firefox/i.test(nc()),
    r = /Trident/i.test(nc());
  if (r && rt(e)) {
    var n = zt(e);
    if (n.position === "fixed") return null;
  }
  var a = di(e);
  for (Uc(a) && (a = a.host); rt(a) && ["html", "body"].indexOf(Rt(a)) < 0; ) {
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
function Za(e) {
  for (var t = Ge(e), r = zf(e); r && BO(r) && zt(r).position === "static"; ) r = zf(r);
  return r && (Rt(r) === "html" || (Rt(r) === "body" && zt(r).position === "static"))
    ? t
    : r || qO(e) || t;
}
function Bc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Aa(e, t, r) {
  return vr(e, qo(t, r));
}
function $O(e, t, r) {
  var n = Aa(e, t, r);
  return n > r ? r : n;
}
function Gh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Hh(e) {
  return Object.assign({}, Gh(), e);
}
function Wh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var zO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Hh(typeof t != "number" ? t : Wh(t, Xa))
  );
};
function VO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = Et(r.placement),
    s = Bc(c),
    u = [Fe, at].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = zO(a.padding, r),
      p = Nc(o),
      v = s === "y" ? Te : Fe,
      g = s === "y" ? nt : at,
      f = r.rects.reference[l] + r.rects.reference[s] - i[s] - r.rects.popper[l],
      h = i[s] - r.rects.reference[s],
      b = Za(o),
      _ = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      m = f / 2 - h / 2,
      k = d[v],
      w = _ - p[l] - d[g],
      O = _ / 2 - p[l] / 2 + m,
      x = Aa(k, O, w),
      I = s;
    r.modifiersData[n] = ((t = {}), (t[I] = x), (t.centerOffset = x - O), t);
  }
}
function GO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Vh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const HO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: VO,
  effect: GO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Qr(e) {
  return e.split("-")[1];
}
var WO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function KO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Xr(r * a) / a || 0, y: Xr(n * a) / a || 0 };
}
function Vf(e) {
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
    m = Fe,
    k = Te,
    w = window;
  if (u) {
    var O = Za(r),
      x = "clientHeight",
      I = "clientWidth";
    if (
      (O === Ge(r) &&
        ((O = er(r)),
        zt(O).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (I = "scrollWidth"))),
      (O = O),
      a === Te || ((a === Fe || a === at) && o === za))
    ) {
      k = nt;
      var R = d && O === w && w.visualViewport ? w.visualViewport.height : O[x];
      ((f -= R - n.height), (f *= s ? 1 : -1));
    }
    if (a === Fe || ((a === Te || a === nt) && o === za)) {
      m = at;
      var C = d && O === w && w.visualViewport ? w.visualViewport.width : O[I];
      ((v -= C - n.width), (v *= s ? 1 : -1));
    }
  }
  var j = Object.assign({ position: c }, u && WO),
    U = l === !0 ? KO({ x: v, y: f }, Ge(r)) : { x: v, y: f };
  if (((v = U.x), (f = U.y), s)) {
    var q;
    return Object.assign(
      {},
      j,
      ((q = {}),
      (q[k] = _ ? "0" : ""),
      (q[m] = b ? "0" : ""),
      (q.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      q),
    );
  }
  return Object.assign(
    {},
    j,
    ((t = {}), (t[k] = _ ? f + "px" : ""), (t[m] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function JO(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    c = r.roundOffsets,
    s = c === void 0 ? !0 : c,
    u = {
      placement: Et(t.placement),
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
      Vf(
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
        Vf(
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
const YO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: JO, data: {} };
var _o = { passive: !0 };
function XO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = Ge(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, _o);
      }),
    c && s.addEventListener("resize", r.update, _o),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, _o);
        }),
        c && s.removeEventListener("resize", r.update, _o));
    }
  );
}
const ZO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: XO,
  data: {},
};
var QO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Po(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return QO[t];
  });
}
var eE = { start: "end", end: "start" };
function Gf(e) {
  return e.replace(/start|end/g, function (t) {
    return eE[t];
  });
}
function qc(e) {
  var t = Ge(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function $c(e) {
  return Zr(er(e)).left + qc(e).scrollLeft;
}
function tE(e, t) {
  var r = Ge(e),
    n = er(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = zh();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + $c(e), y: s };
}
function rE(e) {
  var t,
    r = er(e),
    n = qc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = vr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = vr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + $c(e),
    s = -n.scrollTop;
  return (
    zt(a || r).direction === "rtl" && (c += vr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function zc(e) {
  var t = zt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Kh(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0
    ? e.ownerDocument.body
    : rt(e) && zc(e)
      ? e
      : Kh(di(e));
}
function Ia(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Kh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Ge(n),
    i = a ? [o].concat(o.visualViewport || [], zc(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Ia(di(i)));
}
function ac(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function nE(e, t) {
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
function Hf(e, t, r) {
  return t === qh ? ac(tE(e, r)) : gr(t) ? nE(t, r) : ac(rE(er(e)));
}
function aE(e) {
  var t = Ia(di(e)),
    r = ["absolute", "fixed"].indexOf(zt(e).position) >= 0,
    n = r && rt(e) ? Za(e) : e;
  return gr(n)
    ? t.filter(function (a) {
        return gr(a) && Vh(a, n) && Rt(a) !== "body";
      })
    : [];
}
function oE(e, t, r, n) {
  var a = t === "clippingParents" ? aE(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, u) {
        var l = Hf(e, u, n);
        return (
          (s.top = vr(l.top, s.top)),
          (s.right = qo(l.right, s.right)),
          (s.bottom = qo(l.bottom, s.bottom)),
          (s.left = vr(l.left, s.left)),
          s
        );
      },
      Hf(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function Jh(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Et(n) : null,
    o = n ? Qr(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Te:
      s = { x: i, y: t.y - r.height };
      break;
    case nt:
      s = { x: i, y: t.y + t.height };
      break;
    case at:
      s = { x: t.x + t.width, y: c };
      break;
    case Fe:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? Bc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case Yr:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case za:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Va(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? SO : c,
    u = r.rootBoundary,
    l = u === void 0 ? qh : u,
    d = r.elementContext,
    p = d === void 0 ? ka : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = Hh(typeof h != "number" ? h : Wh(h, Xa)),
    _ = p === ka ? xO : ka,
    m = e.rects.popper,
    k = e.elements[g ? _ : p],
    w = oE(gr(k) ? k : k.contextElement || er(e.elements.popper), s, l, i),
    O = Zr(e.elements.reference),
    x = Jh({ reference: O, element: m, placement: a }),
    I = ac(Object.assign({}, m, x)),
    R = p === ka ? I : O,
    C = {
      top: w.top - R.top + b.top,
      bottom: R.bottom - w.bottom + b.bottom,
      left: w.left - R.left + b.left,
      right: R.right - w.right + b.right,
    },
    j = e.modifiersData.offset;
  if (p === ka && j) {
    var U = j[a];
    Object.keys(C).forEach(function (q) {
      var W = [at, nt].indexOf(q) >= 0 ? 1 : -1,
        $ = [Te, nt].indexOf(q) >= 0 ? "y" : "x";
      C[q] += U[$] * W;
    });
  }
  return C;
}
function iE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? $h : s,
    l = Qr(n),
    d = l
      ? c
        ? $f
        : $f.filter(function (g) {
            return Qr(g) === l;
          })
      : Xa,
    p = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = Va(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[Et(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function sE(e) {
  if (Et(e) === Lc) return [];
  var t = Po(e);
  return [Gf(e), t, Gf(t)];
}
function cE(e) {
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
        b = Et(h),
        _ = b === h,
        m = s || (_ || !g ? [Po(h)] : sE(h)),
        k = [h].concat(m).reduce(function (we, T) {
          return we.concat(
            Et(T) === Lc
              ? iE(t, {
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
        I = !0,
        R = k[0],
        C = 0;
      C < k.length;
      C++
    ) {
      var j = k[C],
        U = Et(j),
        q = Qr(j) === Yr,
        W = [Te, nt].indexOf(U) >= 0,
        $ = W ? "width" : "height",
        H = Va(t, { placement: j, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        K = W ? (q ? at : Fe) : q ? nt : Te;
      w[$] > O[$] && (K = Po(K));
      var N = Po(K),
        B = [];
      if (
        (o && B.push(H[U] <= 0),
        c && B.push(H[K] <= 0, H[N] <= 0),
        B.every(function (we) {
          return we;
        }))
      ) {
        ((R = j), (I = !1));
        break;
      }
      x.set(j, B);
    }
    if (I)
      for (
        var V = g ? 3 : 1,
          ae = function (T) {
            var ye = k.find(function (Ne) {
              var fe = x.get(Ne);
              if (fe)
                return fe.slice(0, T).every(function (Pe) {
                  return Pe;
                });
            });
            if (ye) return ((R = ye), "break");
          },
          ie = V;
        ie > 0;
        ie--
      ) {
        var ce = ae(ie);
        if (ce === "break") break;
      }
    t.placement !== R && ((t.modifiersData[n]._skip = !0), (t.placement = R), (t.reset = !0));
  }
}
const uE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cE,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Wf(e, t, r) {
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
function Kf(e) {
  return [Te, at, nt, Fe].some(function (t) {
    return e[t] >= 0;
  });
}
function lE(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Va(t, { elementContext: "reference" }),
    c = Va(t, { altBoundary: !0 }),
    s = Wf(i, n),
    u = Wf(c, a, o),
    l = Kf(s),
    d = Kf(u);
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
const dE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: lE,
};
function fE(e, t, r) {
  var n = Et(e),
    a = [Fe, Te].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [Fe, at].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function vE(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = $h.reduce(function (l, d) {
      return ((l[d] = fE(d, t.rects, o)), l);
    }, {}),
    c = i[t.placement],
    s = c.x,
    u = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const pE = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: vE };
function hE(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Jh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const gE = { name: "popperOffsets", enabled: !0, phase: "read", fn: hE, data: {} };
function bE(e) {
  return e === "x" ? "y" : "x";
}
function _E(e) {
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
    h = Va(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = Et(t.placement),
    _ = Qr(t.placement),
    m = !_,
    k = Bc(b),
    w = bE(k),
    O = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    I = t.rects.popper,
    R = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    C =
      typeof R == "number"
        ? { mainAxis: R, altAxis: R }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, R),
    j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (O) {
    if (o) {
      var q,
        W = k === "y" ? Te : Fe,
        $ = k === "y" ? nt : at,
        H = k === "y" ? "height" : "width",
        K = O[k],
        N = K + h[W],
        B = K - h[$],
        V = v ? -I[H] / 2 : 0,
        ae = _ === Yr ? x[H] : I[H],
        ie = _ === Yr ? -I[H] : -x[H],
        ce = t.elements.arrow,
        we = v && ce ? Nc(ce) : { width: 0, height: 0 },
        T = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Gh(),
        ye = T[W],
        Ne = T[$],
        fe = Aa(0, x[H], we[H]),
        Pe = m ? x[H] / 2 - V - fe - ye - C.mainAxis : ae - fe - ye - C.mainAxis,
        ve = m ? -x[H] / 2 + V + fe + Ne + C.mainAxis : ie + fe + Ne + C.mainAxis,
        Be = t.elements.arrow && Za(t.elements.arrow),
        sn = Be ? (k === "y" ? Be.clientTop || 0 : Be.clientLeft || 0) : 0,
        Pr = (q = j?.[k]) != null ? q : 0,
        vt = K + Pe - Pr - sn,
        Re = K + ve - Pr,
        pt = Aa(v ? qo(N, vt) : N, K, v ? vr(B, Re) : B);
      ((O[k] = pt), (U[k] = pt - K));
    }
    if (c) {
      var Gt,
        ot = k === "x" ? Te : Fe,
        ht = k === "x" ? nt : at,
        qe = O[w],
        Ae = w === "y" ? "height" : "width",
        Ce = qe + h[ot],
        Ie = qe - h[ht],
        gt = [Te, Fe].indexOf(b) !== -1,
        rr = (Gt = j?.[w]) != null ? Gt : 0,
        ao = gt ? Ce : qe - x[Ae] - I[Ae] - rr + C.altAxis,
        oo = gt ? qe + x[Ae] + I[Ae] - rr - C.altAxis : Ie,
        io = v && gt ? $O(ao, qe, oo) : Aa(v ? ao : Ce, qe, v ? oo : Ie);
      ((O[w] = io), (U[w] = io - qe));
    }
    t.modifiersData[n] = U;
  }
}
const mE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: _E,
  requiresIfExists: ["offset"],
};
function yE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function wE(e) {
  return e === Ge(e) || !rt(e) ? qc(e) : yE(e);
}
function kE(e) {
  var t = e.getBoundingClientRect(),
    r = Xr(t.width) / e.offsetWidth || 1,
    n = Xr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function OE(e, t, r) {
  r === void 0 && (r = !1);
  var n = rt(t),
    a = rt(t) && kE(t),
    o = er(t),
    i = Zr(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Rt(t) !== "body" || zc(o)) && (c = wE(t)),
      rt(t) ? ((s = Zr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = $c(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function EE(e) {
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
function SE(e) {
  var t = EE(e);
  return FO.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function xE(e) {
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
function CE(e) {
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
var Jf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Yf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function PE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Jf : a;
  return function (c, s, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Jf, o),
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
              reference: gr(c) ? Ia(c) : c.contextElement ? Ia(c.contextElement) : [],
              popper: Ia(s),
            }));
          var m = SE(CE([].concat(n, l.options.modifiers)));
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
            if (Yf(_, m)) {
              ((l.rects = {
                reference: OE(_, Za(m), l.options.strategy === "fixed"),
                popper: Nc(m),
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
                  I = x === void 0 ? {} : x,
                  R = w.name;
                typeof O == "function" &&
                  (l = O({ state: l, options: I, name: R, instance: v }) || l);
              }
            }
          }
        },
        update: xE(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!Yf(c, s)) return v;
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
var RE = [ZO, gE, YO, NO, pE, uE, mE, HO, dE],
  AE = PE({ defaultModifiers: RE }),
  As,
  Xf;
function IE() {
  if (Xf) return As;
  Xf = 1;
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
    (As = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    As
  );
}
var jE = IE();
const DE = Qt(jE);
var ME = [],
  TE = function (t, r, n) {
    n === void 0 && (n = {});
    var a = y.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || ME,
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
            var g = v.state,
              f = Object.keys(g.elements);
            Xo.flushSync(function () {
              s({
                styles: Bf(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: Bf(
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
          return DE(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = y.useRef();
    return (
      qf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      qf(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || AE,
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
  FE = function () {},
  LE = function () {
    return Promise.resolve(null);
  },
  UE = [];
function NE(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? UE : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = y.useContext(wO),
    p = y.useState(null),
    v = p[0],
    g = p[1],
    f = y.useState(null),
    h = f[0],
    b = f[1];
  y.useEffect(
    function () {
      EO(u, v);
    },
    [u, v],
  );
  var _ = y.useMemo(
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
    m = TE(c || d, v, _),
    k = m.state,
    w = m.styles,
    O = m.forceUpdate,
    x = m.update,
    I = y.useMemo(
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
          forceUpdate: O || FE,
          update: x || LE,
        };
      },
      [g, b, r, k, w, x, O],
    );
  return kO(l)(I);
}
function BE(e) {
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
            g = G(v, 1),
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
var oc = 5,
  qE = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: oc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function $E() {
  return null;
}
var zE = [0, 8];
function VE(e) {
  var t = e.children,
    r = t === void 0 ? $E : t,
    n = e.offset,
    a = n === void 0 ? zE : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
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
            options: { padding: oc, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = v ? BE({ viewportPadding: oc }) : [];
        return [].concat(qE, [m, k], Ee(w));
      },
      [f, h, v],
    ),
    _ = y.useMemo(
      function () {
        return u == null ? b : [].concat(Ee(b), Ee(u));
      },
      [b, u],
    );
  return E.createElement(NE, { modifiers: _, placement: i, strategy: d, referenceElement: s }, r);
}
var Yh = "atlaskit-portal-container",
  Xh = "body > .atlaskit-portal-container",
  Zh = "atlaskit-portal",
  GE = function (t) {
    var r = document.createElement("div");
    return ((r.className = Zh), (r.style.zIndex = "".concat(t)), r);
  },
  Qh = function () {
    return document.body;
  },
  eg = function () {
    var t = document.querySelector(Xh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Yh),
        (n.style.display = "flex"),
        (r = Qh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  HE = function (t) {
    eg().removeChild(t);
  },
  WE = function (t) {
    t.parentElement || eg().appendChild(t);
  },
  tg = function () {
    return document !== void 0;
  },
  KE = function (t) {
    if (tg()) {
      var r = document.createElement("div");
      return ((r.className = Zh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  JE = function () {
    if (tg()) {
      var t = document.querySelector(Xh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Yh),
          (n.style.display = "flex"),
          (r = Qh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function YE(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return GE(t);
      },
      [t],
    ),
    a = hh();
  return (
    WE(n),
    y.useEffect(
      function () {
        return function () {
          HE(n);
        };
      },
      [n],
    ),
    Xo.createPortal(
      a && de("platform_dst_subtree_theming") ? E.createElement(ph, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var rg = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function XE(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    a = G(n, 2),
    o = a[0],
    i = a[1],
    c = hh();
  rg(
    function () {
      var u = KE(t);
      i(u);
      var l = JE();
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
  var s = E.createElement(
    y.Suspense,
    { fallback: null },
    c && de("platform_dst_subtree_theming") ? E.createElement(ph, { defaultColorMode: c }, r) : r,
  );
  return o ? Xo.createPortal(s, o) : null;
}
var ZE = function (t) {
    var r = y.useState(!1),
      n = G(r, 2),
      a = n[0],
      o = n[1],
      i = y.useState(function () {
        return t === "layoutEffect" ? rg : y.useEffect;
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
  QE = "akPortalMount",
  eS = "akPortalUnmount",
  Zf = {
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
  tS = function (t) {
    return Zf.hasOwnProperty(t) ? Zf[t] : null;
  },
  rS = function (t, r) {
    var n = { layer: tS(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Qf(e, t) {
  var r = rS(e, t);
  window.dispatchEvent(r);
}
var nS = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        Qf(QE, r),
        function () {
          Qf(eS, r);
        }
      );
    },
    [r],
  );
};
function aS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = ZE(o);
  return (
    nS(r),
    de("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(XE, { zIndex: r }, n)
      : i
        ? E.createElement(YE, { zIndex: r }, n)
        : null
  );
}
var ja = new Set(),
  Ga = null;
function ev() {
  if (!Ga) {
    Ga = kr.bindAll(window, [
      { type: "dragend", listener: Is },
      { type: "pointerdown", listener: Is },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Is();
          };
        })(),
      },
    ]);
    var e = Array.from(ja);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Is() {
  var e;
  ((e = Ga) === null || e === void 0 || e(), (Ga = null));
  var t = Array.from(ja);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function oS() {
  return kr.bindAll(window, [
    { type: "dragstart", listener: ev },
    { type: "dragenter", listener: ev },
  ]);
}
var mo = null;
function iS(e) {
  return (
    mo || (mo = oS()),
    ja.add(e),
    e.onRegister({ isDragging: Ga !== null }),
    function () {
      if ((ja.delete(e), ja.size === 0)) {
        var r;
        ((r = mo) === null || r === void 0 || r(), (mo = null));
      }
    }
  );
}
var Da = null;
function xa() {
  Da != null && (window.clearTimeout(Da), (Da = null));
}
function tv(e, t) {
  (xa(),
    (Da = window.setTimeout(function () {
      ((Da = null), e());
    }, t)));
}
var _t = null;
function sS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(_t && _t.entry === e);
  }
  function n() {
    r() && (xa(), (_t = null));
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
        ((t = "shown"), xa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), xa(), e.show({ isImmediate: !1 }));
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
          tv(function () {
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
      g = !!(_t && _t.isVisible()) && !v;
    (_t && (xa(), _t.entry.hide({ isImmediate: !0 }), _t.entry.done(), (_t = null)),
      (_t = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: g }));
    }
    if (g) {
      f();
      return;
    }
    ((t = "waiting-to-show"), tv(f, e.delay));
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
function cS(e, t) {
  var r = Yw();
  return t ? "".concat(r(e)) : void 0;
}
var rv = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  uS = function (t) {
    var r = t.shortcut;
    return y.createElement(
      "div",
      { className: P([rv.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return y.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: P([rv.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  ng = y.forwardRef(function (t, r) {
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
          className: P(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": c,
          id: l,
        },
        o,
        d && y.createElement(uS, { shortcut: d }),
      ),
    );
  });
ng.displayName = "TooltipPrimitive";
var nv = {
    base: "_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  ag = y.forwardRef(function (t, r) {
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
      ng,
      {
        ref: r,
        style: n,
        className: P([nv.base, i && nv.truncate, a]),
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
ag.displayName = "TooltipContainer";
function av(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function lS(e, t) {
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
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ov(Object(r), !0).forEach(function (n) {
          S(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ov(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var dS = Xw.tooltip(),
  iv = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.14.1" },
  fS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  vS = function (t) {
    return t.split("-")[0];
  };
function pS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? ag : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Se : h,
    _ = e.onHide,
    m = _ === void 0 ? Se : _,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    O = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    I = x === void 0 ? !1 : x,
    R = e.analyticsContext,
    C = e.strategy,
    j = C === void 0 ? "fixed" : C,
    U = e.ignoreTooltipPointerEvents,
    q = U === void 0 ? !1 : U,
    W = e.isScreenReaderAnnouncementDisabled,
    $ = W === void 0 ? !1 : W,
    H = e.shortcut,
    K = e.UNSAFE_shouldAlwaysFadeIn,
    N = K === void 0 ? !1 : K,
    B = e.UNSAFE_shouldRenderToParent,
    V = B === void 0 ? !1 : B,
    ae = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    ie = ae ? o : n,
    ce = rd($r({ fn: b, action: "displayed", analyticsData: R }, iv)),
    we = rd($r({ fn: m, action: "hidden", analyticsData: R }, iv)),
    T = y.useRef(null),
    ye = y.useState("hide"),
    Ne = G(ye, 2),
    fe = Ne[0],
    Pe = Ne[1],
    ve = y.useRef(null),
    Be = y.useRef(null),
    sn = function (oe) {
      ((Be.current = oe), (ve.current = oe ? oe.firstElementChild : null));
    },
    Pr = y.useCallback(function (F) {
      ve.current = F;
    }, []),
    vt = qr(fe),
    Re = qr(ce),
    pt = qr(we),
    Gt = qr(f),
    ot = qr(k),
    ht = y.useRef(!1),
    qe = qr(N),
    Ae = y.useCallback(function (F) {
      ((T.current = F), (ht.current = !1));
    }, []),
    Ce = y.useCallback(
      function () {
        T.current &&
          (ht.current && pt.current(), (T.current = null), (ht.current = !1), Pe("hide"));
      },
      [pt],
    ),
    Ie = y.useCallback(
      function () {
        T.current && (T.current.abort(), ht.current && pt.current(), (T.current = null));
      },
      [pt],
    );
  y.useEffect(
    function () {
      return function () {
        T.current && Ie();
      };
    },
    [Ie],
  );
  var gt = y.useRef(!1);
  y.useEffect(function () {
    return iS({
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
          if ((T.current && !T.current.isActive() && Ie(), T.current && T.current.isActive())) {
            T.current.keep();
            return;
          }
          if (!(ot.current && !((oe = ot.current) !== null && oe !== void 0 && oe.call(ot)))) {
            var Dt = {
                source: F,
                delay: Gt.current,
                show: function (Rr) {
                  var un = Rr.isImmediate;
                  (ht.current || ((ht.current = !0), Re.current()),
                    Pe(un ? "show-immediate" : "fade-in"));
                },
                hide: function (Rr) {
                  var un = Rr.isImmediate;
                  Pe(un ? "hide" : "before-fade-out");
                },
                done: Ce,
                shouldAlwaysFadeIn: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? qe.current
                  : !1,
              },
              nr = sS(Dt);
            Ae(nr);
          }
        }
      },
      [ot, Gt, Ce, Ae, Ie, Re, qe],
    ),
    ao = y.useCallback(
      function () {
        var F;
        (F = T.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
      },
      [T],
    );
  (tO({ onClose: ao, isDisabled: fe === "hide" || fe === "fade-out" }),
    y.useEffect(
      function () {
        if (fe === "hide") return Se;
        fe === "before-fade-out" && Pe("fade-out");
        var F = kr.bind(window, {
          type: "scroll",
          listener: function () {
            T.current && T.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return F;
      },
      [fe],
    ));
  var oo = y.useCallback(
      function () {
        I && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [I],
    ),
    io = y.useCallback(
      function () {
        O && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [O],
    ),
    ob = y.useCallback(
      function (F) {
        if (!(Be.current && F.target === Be.current) && !F.defaultPrevented) {
          F.preventDefault();
          var oe = ae
            ? {
                type: "mouse",
                mouse: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : av({ left: F.clientX, top: F.clientY }),
                clientX: F.clientX,
                clientY: F.clientY,
              }
            : { type: "keyboard" };
          rr(oe);
        }
      },
      [ae, rr],
    ),
    Qc = y.useCallback(function (F) {
      (Be.current && F.target === Be.current) ||
        F.defaultPrevented ||
        (F.preventDefault(), T.current && T.current.requestHide({ isImmediate: !1 }));
    }, []),
    ib = ae
      ? function (F) {
          var oe;
          (oe = T.current) !== null &&
            oe !== void 0 &&
            oe.isActive() &&
            (de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (T.current.mousePosition = av({ left: F.clientX, top: F.clientY })),
            (T.current.mousePos = { clientX: F.clientX, clientY: F.clientY }));
        }
      : void 0,
    sb = y.useCallback(function () {
      if (T.current && T.current.isActive()) {
        T.current.keep();
        return;
      }
    }, []),
    cb = y.useCallback(
      function (F) {
        try {
          if (!F.target.matches(":focus-visible")) return;
        } catch {}
        rr({ type: "keyboard" });
      },
      [rr],
    ),
    ub = y.useCallback(function () {
      T.current && T.current.requestHide({ isImmediate: !1 });
    }, []),
    lb = y.useCallback(
      function (F) {
        F === "exiting" &&
          vt.current === "fade-out" &&
          T.current &&
          T.current.finishHideAnimation();
      },
      [vt],
    ),
    db = p,
    Ci = fe !== "hide" && !!i,
    eu = !$ && Ci,
    tu = fe !== "hide" && fe !== "fade-out",
    fb = y.useCallback(function () {
      var F;
      (F = T.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
    }, []);
  oO({ isOpen: Ci && tu, onClose: fb });
  var ru = function () {
      var oe, Dt;
      if (
        ae &&
        (oe = T.current) !== null &&
        oe !== void 0 &&
        oe.mousePos &&
        ve.current &&
        de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return lS(T.current.mousePos, { targetElement: ve.current, tooltipPosition: n });
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
      return ve.current || void 0;
    },
    cn = cS("tooltip", eu),
    Pi = {
      onMouseOver: ob,
      onMouseOut: Qc,
      onMouseMove: ib,
      onMouseDown: oo,
      onClick: io,
      onFocus: cb,
      onBlur: ub,
    };
  v && (Pi["data-testid"] = "".concat(v, "--container"));
  var nu = typeof t == "function";
  y.useEffect(
    function () {
      if (!nu) {
        var F = ve.current;
        if (!(!F || !cn))
          return (
            F.setAttribute("aria-describedby", cn),
            function () {
              return F.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [nu, cn],
  );
  var au = eu
      ? E.createElement(
          "span",
          { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: cn },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    vb = V && de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? y.Fragment : hS;
  return E.createElement(
    E.Fragment,
    null,
    typeof t == "function"
      ? E.createElement(
          E.Fragment,
          null,
          t($r($r({}, Pi), {}, { "aria-describedby": cn, ref: Pr })),
          au,
        )
      : E.createElement(db, ne({}, Pi, { ref: sn, role: "presentation" }), t, au),
    Ci
      ? E.createElement(
          vb,
          null,
          E.createElement(VE, { placement: ie, referenceElement: ru(), strategy: j }, function (F) {
            var oe = F.ref,
              Dt = F.style,
              nr = F.update,
              Ri = F.placement,
              Rr = ae ? void 0 : fS[vS(Ri)];
            return E.createElement(
              Bh,
              { appear: !0 },
              tu &&
                E.createElement(
                  yO,
                  {
                    distance: "constant",
                    entranceDirection: Rr,
                    exitDirection: Rr,
                    onFinish: lb,
                    duration: fe !== "show-immediate" ? "medium" : "none",
                  },
                  function (un) {
                    var pb = un.className;
                    return E.createElement(
                      l,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(pb),
                        style: $r($r({}, Dt), q && { pointerEvents: "none" }),
                        truncate: s,
                        placement: ie,
                        testId: ru() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Qc,
                        onMouseOver: sb,
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
var hS = function (t) {
    var r = t.children;
    return E.createElement(aS, { zIndex: dS }, r);
  },
  gS = [
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
  Oa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  sv = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c8wadc _syazazsu _k48pwu06" },
  og = function (t) {
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
      _ = se(t, gS),
      m = y.useState(!1),
      k = G(m, 2),
      w = k[0],
      O = k[1],
      x = y.useState(!1),
      I = G(x, 2),
      R = I[0],
      C = I[1],
      j = u === l || c !== void 0,
      U = w || j || R,
      q = U && b,
      W = !b || U || (b && !R),
      $ = y.useCallback(
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
      K = y.useCallback(
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
      B = E.createElement(
        oi,
        { xcss: sv.headCellContainer, onMouseEnter: K, onMouseLeave: N, onFocus: $, onBlur: H },
        E.createElement(
          pS,
          { content: c === hr ? p : g },
          E.createElement(
            Hy,
            { onClick: s, xcss: Oa.buttonWrapper, "aria-roledescription": h },
            E.createElement(
              No,
              { xcss: q ? Oa.hideIconHeaderWrapper : Oa.visibleHeaderWrapper },
              E.createElement("span", { className: P([sv.text]) }, r),
            ),
            W &&
              E.createElement(
                No,
                { xcss: U ? Oa.sortIconVisibleWrapper : Oa.sortIconHiddenWrapper },
                c === hr
                  ? E.createElement(Q1, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : E.createElement(Y1, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      G1,
      ne(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        _,
        { isSortable: i, sortOrder: c },
      ),
      i ? B : r,
    );
  },
  bS = ["isRanking", "refHeight", "refWidth"];
function _S(e, t, r) {
  return (
    (t = Q(t)),
    He(e, ig() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function ig() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ig = function () {
    return !!e;
  })();
}
var mS = (function (e) {
    function t() {
      return (pe(this, t), _S(this, t, arguments));
    }
    return (
      We(t, e),
      he(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = se(n, bS),
              c = X_(a, o);
            return E.createElement(og, ne({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(E.Component),
  yS = W1(mS),
  wS = ["cells"],
  kS = [
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
function OS(e, t, r) {
  return (
    (t = Q(t)),
    He(e, sg() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function sg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sg = function () {
    return !!e;
  })();
}
var ES = (function (e) {
    function t(r) {
      var n;
      return (pe(this, t), (n = OS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      We(t, e),
      he(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Mo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Mo(n.sortKey, n.head);
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
            var g = d ? yS : og,
              f = o.cells,
              h = se(o, wS);
            return E.createElement(
              V1,
              ne({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (b, _) {
                  var m = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    O = b.content,
                    x = b.descendingSortTooltip,
                    I = b.isIconOnlyHeader,
                    R = b.isSortable,
                    C = b.key,
                    j = b.shouldTruncate,
                    U = b.testId,
                    q = b.width,
                    W = se(b, kS),
                    $ = "head-cell-".concat(_),
                    H = function () {
                      (n.setState({ activeSortButtonId: $ }), R && u(b)());
                    };
                  return E.createElement(
                    g,
                    ne(
                      {
                        colSpan: w,
                        content: O,
                        isFixedSize: s,
                        isIconOnlyHeader: I,
                        isSortable: !!R,
                        isRanking: l,
                        key: C || _,
                        headCellId: $,
                        activeSortButtonId: v,
                        onClick: H,
                        testId: U || p,
                        shouldTruncate: j,
                        sortOrder: C === i ? c : void 0,
                        width: q,
                        ascendingSortTooltip: m,
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
  })(E.Component),
  SS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function xS(e) {
  switch (e) {
    case Lo:
      return hr;
    case hr:
      return Lo;
    default:
      return e;
  }
}
var CS = function (t) {
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
      m = t.onSetPage,
      k = m === void 0 ? Se : m,
      w = t.onSort,
      O = w === void 0 ? Se : w,
      x = t.page,
      I = x === void 0 ? 1 : x,
      R = t.emptyView,
      C = t.isRankable,
      j = C === void 0 ? !1 : C,
      U = t.isRankingDisabled,
      q = U === void 0 ? !1 : U,
      W = t.onRankStart,
      $ = W === void 0 ? Se : W,
      H = t.onRankEnd,
      K = H === void 0 ? Se : H,
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
      ye = La({
        fn: O,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ne = La({
        fn: K,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    y.useEffect(
      function () {
        (Mo(i, n), Y_(n));
      },
      [i, n],
    );
    var fe = function (Ce) {
        return function () {
          var Ie = Ce.key;
          if (Ie) {
            if (ye && j && Ie === i && c === Lo) {
              ye({ key: null, sortOrder: null, item: Ce });
              return;
            }
            var gt = Ie !== i ? hr : xS(c);
            ye && ye({ key: Ie, item: Ce, sortOrder: gt });
          }
        };
      },
      Pe = function (Ce, Ie) {
        k(Ce, Ie);
      },
      ve = function (Ce) {
        (we(!0), $(Ce));
      },
      Be = function (Ce) {
        (we(!1), Ne(Ce));
      },
      sn = function () {
        return N || (Cp(o || [], I, _).length > 2 ? Uo : hm);
      },
      Pr = function () {
        return g ? E.createElement(wm, { testId: l }) : R && E.createElement(km, { testId: l }, R);
      },
      vt = o && o.length,
      Re,
      pt = !1;
    (d && Number.isInteger(d) && _ && vt && vt <= d
      ? ((Re = Math.ceil(d / _)), (pt = !0))
      : (Re = vt && _ ? Math.ceil(vt / _) : 0),
      (Re = Re < 1 ? 1 : Re));
    var Gt = I > Re ? Re : I,
      ot = !!vt,
      ht = sn(),
      qe = Pr();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        Bp,
        {
          isLoading: g && ot,
          spinnerSize: ht,
          targetRef: function () {
            return T.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          _m,
          { isFixedSize: h, "aria-label": p, hasDataRow: ot, testId: l, isLoading: g },
          !!r && E.createElement(mm, null, r),
          n &&
            E.createElement(ES, {
              head: n,
              onSort: fe,
              sortKey: i,
              sortOrder: c,
              isRanking: ce,
              isRankable: j,
              testId: l,
            }),
          ot &&
            E.createElement(RS, {
              ref: T,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: _,
              page: Gt,
              isFixedSize: h || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: pt,
              testId: l,
              isRankable: j,
              isRanking: ce,
              onRankStart: ve,
              onRankEnd: Be,
              isRankingDisabled: q || g || !1,
            }),
        ),
      ),
      Re <= 1
        ? null
        : E.createElement(
            ym,
            { testId: l },
            E.createElement(q1, {
              value: Gt,
              onChange: Pe,
              total: Re,
              i18n: V,
              isDisabled: g,
              testId: l,
            }),
          ),
      !ot &&
        qe &&
        E.createElement(Up, { isLoading: g, spinnerSize: Uo, testId: l, loadingLabel: s }, qe),
    );
  },
  PS = y.lazy(function () {
    return De(
      () => import("./body-Dwti04fJ.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  RS = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = se(t, SS),
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
    var f = E.createElement(Lm, ne({ ref: r }, u));
    return l && v
      ? E.createElement(
          Nm,
          { fallback: f },
          E.createElement(
            y.Suspense,
            { fallback: f },
            E.createElement(
              PS,
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
function AS(e, t, r) {
  return (
    (t = Q(t)),
    He(e, cg() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Vc = (function (e) {
  function t() {
    var r;
    pe(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = AS(this, t, [].concat(a))),
      S(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      S(r, "onSetPageHandler", function (i, c) {
        var s = r.props.onSetPage;
        s && (s(i, c), r.setState({ page: i }));
      }),
      S(r, "onSortHandler", function (i, c) {
        var s = i.key,
          u = i.item,
          l = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: u, sortOrder: l }, c), r.setState({ sortKey: s, sortOrder: l }));
      }),
      S(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      S(r, "onRankEndHandler", function (i) {
        var c = i.destination,
          s = r.state,
          u = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!c || !u) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var p = Z_(i, u, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    We(t, e),
    he(t, [
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
            m = s.rowsPerPage,
            k = s.paginationi18n,
            w = s.onRankStart,
            O = s.onPageRowsUpdate,
            x = s.testId,
            I = s.label;
          return E.createElement(CS, {
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
            rowsPerPage: m,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: _,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: O,
            testId: x,
            label: I,
          });
        },
      },
    ])
  );
})(E.Component);
S(Vc, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Se,
  onSort: Se,
  rowsPerPage: 1 / 0,
});
const IS = (e, t, r) => {
    const n = [];
    switch (r) {
      case "USER": {
        (n.push({ key: "id", content: "ID", isSortable: !0, width: 25 }),
          n.push({ key: "name", content: "NAME", isSortable: !0, width: 25 }),
          n.push({ key: "email", content: "EMAIL", isSortable: !0, width: 25 }));
        break;
      }
      case "DUPLICATE":
        (n.push({ key: "name", content: "NAME", isSortable: !0, width: 25 }),
          n.push({ key: "email", content: "EMAIL", isSortable: !0, width: 25 }),
          n.push({ key: "count", content: "COUNT", isSortable: !0, width: 25 }));
    }
    return (t && n.push({ key: "delete", content: "Delete", isSortable: !1, width: 25 }), n);
  },
  ug = (e, t, r) => ({ cells: IS(e, t, r) });
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
var jS = {};
function fi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : jS;
}
var lg = Object.assign,
  $o = Object.getOwnPropertyDescriptor,
  St = Object.defineProperty,
  vi = Object.prototype,
  ic = [];
Object.freeze(ic);
var dg = {};
Object.freeze(dg);
var DS = typeof Proxy < "u",
  MS = Object.toString();
function fg() {
  DS || Y("Proxy not available");
}
function vg(e) {
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
function pi(e) {
  return e !== null && typeof e == "object";
}
function Zt(e) {
  if (!pi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === MS;
}
function pg(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function hi(e, t, r) {
  St(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function hg(e, t, r) {
  St(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Er(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return pi(n) && n[r] === !0;
    }
  );
}
function nn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function TS(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Ut(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var gg = typeof Object.getOwnPropertySymbols < "u";
function FS(e) {
  var t = Object.keys(e);
  if (!gg) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return vi.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var gi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : gg
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function bg(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function qt(e, t) {
  return vi.hasOwnProperty.call(e, t);
}
var LS =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      gi(t).forEach(function (n) {
        r[n] = $o(t, n);
      }),
      r
    );
  };
function $e(e, t) {
  return !!(e & t);
}
function ze(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function cv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function US(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, BS(n.key), n));
  }
}
function an(e, t, r) {
  return (t && US(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Gr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = qS(e)) || t) {
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
function _g(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), sc(e, t));
}
function sc(e, t) {
  return (
    (sc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    sc(e, t)
  );
}
function NS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function BS(e) {
  var t = NS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qS(e, t) {
  if (e) {
    if (typeof e == "string") return cv(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? cv(e, t)
          : void 0
    );
  }
}
var kt = Symbol("mobx-stored-annotations");
function xt(e) {
  function t(r, n) {
    if (eo(n)) return e.decorate_20223_(r, n);
    Qa(r, n, e);
  }
  return Object.assign(t, e);
}
function Qa(e, t, r) {
  (qt(e, kt) || hi(e, kt, _r({}, e[kt])), KS(r) || (e[kt][t] = r));
}
function $S(e) {
  return (qt(e, kt) || hi(e, kt, _r({}, e[kt])), e[kt]);
}
function eo(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var z = Symbol("mobx administration"),
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
        return Mg(this);
      }),
      (t.reportChanged = function () {
        (Qe(), Tg(this), et());
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
            this.flags_ = ze(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = ze(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = ze(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
tr.isBeingObservedMask_ = 1;
tr.isPendingUnobservationMask_ = 2;
tr.diffValueMask_ = 4;
var Gc = Er("Atom", tr);
function mg(e, t, r) {
  (t === void 0 && (t = Vr), r === void 0 && (r = Vr));
  var n = new tr(e);
  return (t !== Vr && Qx(n, t), r !== Vr && Bg(n, r), n);
}
function zS(e, t) {
  return Zg(e, t);
}
function VS(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var zo = { structural: zS, default: VS };
function mr(e, t, r) {
  return Vg(e)
    ? e
    : Array.isArray(e)
      ? ge.array(e, { name: r })
      : Zt(e)
        ? ge.object(e, void 0, { name: r })
        : nn(e)
          ? ge.map(e, { name: r })
          : Ut(e)
            ? ge.set(e, { name: r })
            : typeof e == "function" && !en(e) && !Wa(e)
              ? pg(e)
                ? tn(e)
                : Ha(r, e)
              : e;
}
function GS(e, t, r) {
  if (e == null || Ei(e) || Oi(e) || xr(e) || wt(e)) return e;
  if (Array.isArray(e)) return ge.array(e, { name: r, deep: !1 });
  if (Zt(e)) return ge.object(e, void 0, { name: r, deep: !1 });
  if (nn(e)) return ge.map(e, { name: r, deep: !1 });
  if (Ut(e)) return ge.set(e, { name: r, deep: !1 });
}
function bi(e) {
  return e;
}
function HS(e, t) {
  return Zg(e, t) ? t : e;
}
var WS = "override";
function KS(e) {
  return e.annotationType_ === WS;
}
function to(e, t) {
  return { annotationType_: e, options_: t, make_: JS, extend_: YS, decorate_20223_: XS };
}
function JS(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (en(r.value)) return 1;
  var o = yg(e, this, t, r, !1);
  return (St(n, t, o), 2);
}
function YS(e, t, r, n) {
  var a = yg(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function XS(e, t) {
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
    return function (s) {
      var u,
        l = s;
      return (
        en(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      en(e) || (e = i(e)),
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
function ZS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function yg(e, t, r, n, a) {
  var o, i, c, s, u, l, d;
  (a === void 0 && (a = A.safeDescriptors), ZS(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: yr(
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
function wg(e, t) {
  return { annotationType_: e, options_: t, make_: QS, extend_: ex, decorate_20223_: tx };
}
function QS(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!qt(e.target_, t) || !Wa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Wa(r.value)) return 1;
  var o = kg(e, this, t, r, !1, !1);
  return (St(n, t, o), 2);
}
function ex(e, t, r, n) {
  var a,
    o = kg(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function tx(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Wa(e) || (e = tn(e)),
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
function rx(e, t, r, n) {
  (t.annotationType_, n.value);
}
function kg(e, t, r, n, a, o) {
  (o === void 0 && (o = A.safeDescriptors), rx(e, t, r, n));
  var i = n.value;
  if ((Wa(i) || (i = tn(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Hc(e, t) {
  return { annotationType_: e, options_: t, make_: nx, extend_: ax, decorate_20223_: ox };
}
function nx(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ax(e, t, r, n) {
  return (
    ix(e, this, t, r),
    e.defineComputedProperty_(t, _r({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function ox(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = on(this)[z],
        i = _r({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new dt(i)));
    }),
    function () {
      return this[z].getObservablePropValue_(n);
    }
  );
}
function ix(e, t, r, n) {
  (t.annotationType_, n.get);
}
function _i(e, t) {
  return { annotationType_: e, options_: t, make_: sx, extend_: cx, decorate_20223_: ux };
}
function sx(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function cx(e, t, r, n) {
  var a, o;
  return (
    lx(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : mr,
      n,
    )
  );
}
function ux(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var u,
      l,
      d = on(c)[z],
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
        return (o.has(this) || i(this, e.get.call(this)), this[z].getObservablePropValue_(a));
      },
      set: function (s) {
        return (o.has(this) || i(this, s), this[z].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (o.has(this) || i(this, s), s);
      },
    };
}
function lx(e, t, r, n) {
  t.annotationType_;
}
var dx = "true",
  fx = Og();
function Og(e) {
  return { annotationType_: dx, options_: e, make_: vx, extend_: px, decorate_20223_: hx };
}
function vx(e, t, r, n) {
  var a, o;
  if (r.get) return mi.make_(e, t, r, n);
  if (r.set) {
    var i = en(r.set) ? r.set : yr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (St(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (pg(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? tn.bound : tn;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? Ha.bound : Ha;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ge.ref : ge;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function px(e, t, r, n) {
  var a, o;
  if (r.get) return mi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: yr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ge.ref : ge;
  return c.extend_(e, t, r, n);
}
function hx(e, t) {
  Y("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var gx = "observable",
  bx = "observable.ref",
  _x = "observable.shallow",
  mx = "observable.struct",
  Eg = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Eg);
function yo(e) {
  return e || Eg;
}
var cc = _i(gx),
  yx = _i(bx, { enhancer: bi }),
  wx = _i(_x, { enhancer: GS }),
  kx = _i(mx, { enhancer: HS }),
  Sg = xt(cc);
function wo(e) {
  return e.deep === !0 ? mr : e.deep === !1 ? bi : Ex(e.defaultDecorator);
}
function Ox(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Og(e)) : void 0;
}
function Ex(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : mr;
}
function xg(e, t, r) {
  if (eo(t)) return cc.decorate_20223_(e, t);
  if (br(t)) {
    Qa(e, t, cc);
    return;
  }
  return Vg(e)
    ? e
    : Zt(e)
      ? ge.object(e, t, r)
      : Array.isArray(e)
        ? ge.array(e, t)
        : nn(e)
          ? ge.map(e, t)
          : Ut(e)
            ? ge.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ge.box(e, t);
}
lg(xg, Sg);
var Sx = {
    box: function (t, r) {
      var n = yo(r);
      return new pr(t, wo(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = yo(r);
      return (A.useProxies === !1 || n.proxy === !1 ? OC : vC)(t, wo(n), n.name);
    },
    map: function (t, r) {
      var n = yo(r);
      return new Hg(t, wo(n), n.name);
    },
    set: function (t, r) {
      var n = yo(r);
      return new Wg(t, wo(n), n.name);
    },
    object: function (t, r, n) {
      return Cr(function () {
        return nC(A.useProxies === !1 || n?.proxy === !1 ? on({}, n) : lC({}, n), t, r);
      });
    },
    ref: xt(yx),
    shallow: xt(wx),
    deep: Sg,
    struct: xt(kx),
  },
  ge = lg(xg, Sx),
  Cg = "computed",
  xx = "computed.struct",
  uc = Hc(Cg),
  Cx = Hc(xx, { equals: zo.structural }),
  mi = function (t, r) {
    if (eo(r)) return uc.decorate_20223_(t, r);
    if (br(r)) return Qa(t, r, uc);
    if (Zt(t)) return xt(Hc(Cg, t));
    var n = Zt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new dt(n));
  };
Object.assign(mi, uc);
mi.struct = xt(Cx);
var uv,
  lv,
  Vo = 0,
  Px = 1,
  Rx =
    (uv = (lv = $o(function () {}, "name")) == null ? void 0 : lv.configurable) != null ? uv : !1,
  dv = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function yr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Ax(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Rx && ((dv.value = e), St(a, "name", dv)),
    a
  );
}
function Ax(e, t, r, n, a) {
  var o = Ix(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    jx(o);
  }
}
function Ix(e, t, r, n) {
  var a = !1,
    o = 0,
    i = A.trackingDerivation,
    c = !t || !i;
  Qe();
  var s = A.allowStateChanges;
  c && (Sr(), (s = yi(!0)));
  var u = Wc(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: Px++,
      parentActionId_: Vo,
    };
  return ((Vo = l.actionId_), l);
}
function jx(e) {
  (Vo !== e.actionId_ && Y(30),
    (Vo = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    wi(e.prevAllowStateChanges_),
    Ma(e.prevAllowStateReads_),
    et(),
    e.runAsAction_ && $t(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function Dx(e, t) {
  var r = yi(e);
  try {
    return t();
  } finally {
    wi(r);
  }
}
function yi(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function wi(e) {
  A.allowStateChanges = e;
}
var pr = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = zo.default),
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
    _g(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== A.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Xe(this)) {
          var o = Ze(this, { object: this, type: Ct, newValue: a });
          if (!o) return A.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? A.UNCHANGED : a
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
        return ro(this, a);
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
          no(this, a)
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
        return bg(this.get());
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
        (this.value_ = new Ho(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Go.NONE),
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
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? zo.structural : zo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Ux(this);
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
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          lc(this) &&
            (this.warnAboutUntrackedRead_(), Qe(), (this.value_ = this.computeValue_(!1)), et());
        else if ((Mg(this), lc(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && Lx(this),
            (A.trackingContext = n));
        }
        var a = this.value_;
        if (Ro(a)) throw a.cause;
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
          i = a || Ro(n) || Ro(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = yi(!1),
          o;
        if (n) o = Pg(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Ho(i);
          }
        return (wi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (dc(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return Kx(function () {
          var s = o.get();
          if (!i || a) {
            var u = Sr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Ct,
              object: o,
              newValue: s,
              oldValue: c,
            }),
              $t(u));
          }
          ((i = !1), (c = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return bg(this.get());
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
            this.flags_ = ze(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return $e(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = ze(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return $e(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = ze(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return $e(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = ze(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = ze(this.flags_, e.diffValueMask_, n === 1);
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
var ki = Er("ComputedValue", dt),
  Z;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Z || (Z = {}));
var Go;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Go || (Go = {}));
var Ho = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Ro(e) {
  return e instanceof Ho;
}
function lc(e) {
  switch (e.dependenciesState_) {
    case Z.UP_TO_DATE_:
      return !1;
    case Z.NOT_TRACKING_:
    case Z.STALE_:
      return !0;
    case Z.POSSIBLY_STALE_: {
      for (var t = Wc(!0), r = Sr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (ki(i)) {
          if (A.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return ($t(r), Ma(t), !0);
            }
          if (e.dependenciesState_ === Z.STALE_) return ($t(r), Ma(t), !0);
        }
      }
      return (Ag(e), $t(r), Ma(t), !1);
    }
  }
}
function Pg(e, t, r) {
  var n = Wc(!0);
  (Ag(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++A.runId));
  var a = A.trackingDerivation;
  ((A.trackingDerivation = e), A.inBatch++);
  var o;
  if (A.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new Ho(i);
    }
  return (A.inBatch--, (A.trackingDerivation = a), Mx(e), Ma(n), o);
}
function Mx(e) {
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
    var c = r[i];
    (c.diffValue === 0 && ((c.diffValue = 1), a !== i && (r[a] = c), a++),
      c.dependenciesState_ > n && (n = c.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, o = t.length; o--; ) {
    var s = t[o];
    (s.diffValue === 0 && jg(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), Fx(u, e));
  }
  n !== Z.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function dc(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) jg(t[r], e);
  e.dependenciesState_ = Z.NOT_TRACKING_;
}
function Rg(e) {
  var t = Sr();
  try {
    return e();
  } finally {
    $t(t);
  }
}
function Sr() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function $t(e) {
  A.trackingDerivation = e;
}
function Wc(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function Ma(e) {
  A.allowStateReads = e;
}
function Ag(e) {
  if (e.dependenciesState_ !== Z.UP_TO_DATE_) {
    e.dependenciesState_ = Z.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Z.UP_TO_DATE_;
  }
}
var Ao = function () {
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
  Io = !0,
  Ig = !1,
  A = (function () {
    var e = fi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Io = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Ao().version && (Io = !1),
      Io
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Ao()))
        : (setTimeout(function () {
            Ig || Y(35);
          }, 1),
          new Ao())
    );
  })();
function Tx() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && Y(36), (Ig = !0), Io)) {
    var e = fi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new Ao()));
  }
}
function Fx(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function jg(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Dg(e));
}
function Dg(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Qe() {
  A.inBatch++;
}
function et() {
  if (--A.inBatch === 0) {
    Fg();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof dt && r.suspend_()));
    }
    A.pendingUnobservations = [];
  }
}
function Mg(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && Dg(e), !1);
}
function Tg(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Z.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Z.STALE_));
    }));
}
function Lx(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Z.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Z.STALE_)
        : t.dependenciesState_ === Z.UP_TO_DATE_ && (e.lowestObserverState_ = Z.UP_TO_DATE_);
    }));
}
function Ux(e) {
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
      (this.isTracing_ = Go.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), Fg());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Qe(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), lc(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((A.trackingContext = n), et());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Qe(), (this.isRunning = !0));
        var a = A.trackingContext;
        A.trackingContext = this;
        var o = Pg(this, n, void 0);
        ((A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && dc(this),
          Ro(o) && this.reportExceptionInDerivation_(o.cause),
          et());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (A.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      (A.suppressReactionErrors || console.error(o, n),
        A.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Qe(), dc(this), et()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        o = function i() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", i));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", o),
        (o[z] = this),
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
          this.flags_ = ze(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return $e(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = ze(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return $e(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = ze(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return $e(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = ze(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return $e(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = ze(this.flags_, e.diffValueMask_, n === 1);
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
var Nx = 100,
  fc = function (t) {
    return t();
  };
function Fg() {
  A.inBatch > 0 || A.isRunningReactions || fc(Bx);
}
function Bx() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Nx && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var Wo = Er("Reaction", At);
function qx(e) {
  var t = fc;
  fc = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Ta() {
  return !1;
}
function $x(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Lg = "action",
  zx = "action.bound",
  Ug = "autoAction",
  Vx = "autoAction.bound",
  Gx = "<unnamed action>",
  vc = to(Lg),
  Hx = to(zx, { bound: !0 }),
  pc = to(Ug, { autoAction: !0 }),
  Wx = to(Vx, { autoAction: !0, bound: !0 });
function Ng(e) {
  var t = function (n, a) {
    if (lt(n)) return yr(n.name || Gx, n, e);
    if (lt(a)) return yr(n, a, e);
    if (eo(a)) return (e ? pc : vc).decorate_20223_(n, a);
    if (br(a)) return Qa(n, a, e ? pc : vc);
    if (br(n)) return xt(to(e ? Ug : Lg, { name: n, autoAction: e }));
  };
  return t;
}
var tt = Ng(!1);
Object.assign(tt, vc);
var Ha = Ng(!0);
Object.assign(Ha, pc);
tt.bound = xt(Hx);
Ha.bound = xt(Wx);
function en(e) {
  return lt(e) && e.isMobxAction === !0;
}
function Kx(e, t) {
  var r, n, a, o;
  t === void 0 && (t = dg);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new At(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Yx(t),
      l = !1;
    s = new At(
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
var Jx = function (t) {
  return t();
};
function Yx(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Jx;
}
var Xx = "onBO",
  Zx = "onBUO";
function Qx(e, t, r) {
  return qg(Xx, e, t, r);
}
function Bg(e, t, r) {
  return qg(Zx, e, t, r);
}
function qg(e, t, r, n) {
  var a = Yo(t),
    o = lt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var eC = "never",
  ko = "always",
  tC = "observed";
function rC(e) {
  e.isolateGlobalState === !0 && Tx();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === ko ? !0 : t === eC ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === ko ? ko : r === tC;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === ko)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (A[a] = !!e[a]);
  }),
    (A.allowStateReads = !A.observableRequiresReaction),
    e.reactionScheduler && qx(e.reactionScheduler));
}
function nC(e, t, r, n) {
  var a = LS(t);
  return (
    Cr(function () {
      var o = on(e, n)[z];
      gi(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function aC(e, t) {
  return $g(Yo(e, t));
}
function $g(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = oC(e.observing_).map($g)),
    t
  );
}
function oC(e) {
  return Array.from(new Set(e));
}
var iC = 0;
function zg() {
  this.message = "FLOW_CANCELLED";
}
zg.prototype = Object.create(Error.prototype);
var js = wg("flow"),
  sC = wg("flow.bound", { bound: !0 }),
  tn = Object.assign(function (t, r) {
    if (eo(r)) return js.decorate_20223_(t, r);
    if (br(r)) return Qa(t, r, js);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          u = ++iC,
          l = tt(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              p = void 0;
              var w;
              try {
                w = tt(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (O) {
                return f(O);
              }
              m(w);
            }
            function _(k) {
              p = void 0;
              var w;
              try {
                w = tt(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
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
          (v.cancel = tt(a + " - runid: " + u + " - cancel", function () {
            try {
              p && fv(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Vr, Vr), fv(f), d(new zg()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, js);
tn.bound = xt(sC);
function fv(e) {
  lt(e.cancel) && e.cancel();
}
function Wa(e) {
  return e?.isMobXFlow === !0;
}
function cC(e, t) {
  return e ? Ei(e) || !!e[z] || Gc(e) || Wo(e) || ki(e) : !1;
}
function Vg(e) {
  return cC(e);
}
function Nt(e, t) {
  (t === void 0 && (t = void 0), Qe());
  try {
    return e.apply(t);
  } finally {
    et();
  }
}
function zr(e) {
  return e[z];
}
var uC = {
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
function lC(e, t) {
  var r, n;
  return (
    fg(),
    (e = on(e, t)),
    (n = (r = e[z]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, uC))
  );
}
function Xe(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function ro(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    vg(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ze(e, t) {
  var r = Sr();
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
function no(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    vg(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ut(e, t) {
  var r = Sr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    $t(r);
  }
}
function Kc(e, t, r) {
  return (
    Cr(function () {
      var n,
        a = on(e, r)[z];
      ((n = t) != null || (t = $S(e)),
        gi(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var vv = "splice",
  Ct = "update",
  dC = 1e4,
  fC = {
    get: function (t, r) {
      var n = t[z];
      return r === z
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : qt(Ko, r)
              ? Ko[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[z];
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
  Jc = (function () {
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
        return ro(this, n);
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
          no(this, n)
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
          this.legacyMode_ && a > 0 && Xg(n + a + 1));
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
          o === void 0 && (o = ic),
          Xe(this))
        ) {
          var s = Ze(this, { object: this.proxy_, type: vv, index: n, removedCount: a, added: o });
          if (!s) return ic;
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
        if (o.length < dC) {
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
        var i = !this.owned_ && Ta(),
          c = ct(this),
          s =
            c || i
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
        (this.atom_.reportChanged(), c && ut(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && Ta(),
          c = ct(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: vv,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), c && ut(this, s));
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
          if (Xe(this)) {
            var c = Ze(this, { type: Ct, object: this.proxy_, index: n, newValue: a });
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
function vC(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    fg(),
    Cr(function () {
      var a = new Jc(r, t, n, !1);
      hg(a.values_, z, a);
      var o = new Proxy(a.values_, fC);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Ko = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[z];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      a[o - 2] = arguments[o];
    var i = this[z];
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
    return this[z].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[z], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[z].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[z], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (A.trackingDerivation && Y(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && Y(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[z],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
le("at", Ke);
le("concat", Ke);
le("flat", Ke);
le("includes", Ke);
le("indexOf", Ke);
le("join", Ke);
le("lastIndexOf", Ke);
le("slice", Ke);
le("toString", Ke);
le("toLocaleString", Ke);
le("toSorted", Ke);
le("toSpliced", Ke);
le("with", Ke);
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
le("reduce", Gg);
le("reduceRight", Gg);
function le(e, t) {
  typeof Array.prototype[e] == "function" && (Ko[e] = t(e));
}
function Ke(e) {
  return function () {
    var t = this[z];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ft(e) {
  return function (t, r) {
    var n = this,
      a = this[z];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, c) {
      return t.call(r, i, c, n);
    });
  };
}
function Gg(e) {
  return function () {
    var t = this,
      r = this[z];
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
var pC = Er("ObservableArrayAdministration", Jc);
function Oi(e) {
  return pi(e) && pC(e[z]);
}
var hC = {},
  Yt = "add",
  Jo = "delete",
  Hg = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[z] = hC),
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
          ((o.keysAtom_ = mg("ObservableMap.keys()")),
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
        if (!A.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new pr(this.has_(n), bi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Bg(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (Xe(this)) {
          var i = Ze(this, { type: o ? Ct : Yt, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Xe(this))) {
          var o = Ze(this, { type: Jo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Ta(),
            c = ct(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Jo,
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
            c && ut(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var i = Ta(),
            c = ct(this),
            s =
              c || i
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
          (o.setNewValue_(a), c && ut(this, s));
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
        var i = Ta(),
          c = ct(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Yt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && ut(this, s);
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
        return pv({
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
        return pv({
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
        for (var o = Gr(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            u = c[1];
          n.call(a, u, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          xr(n) && (n = new Map(n)),
          Nt(function () {
            Zt(n)
              ? FS(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : nn(n)
                  ? (TS(n) || Y(19, n),
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
          Rg(function () {
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
              var o = gC(n), i = new Map(), c = !1, s = Gr(a.data_.keys()), u;
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
            for (var v = Gr(o.entries()), g; !(g = v()).done; ) {
              var f = g.value,
                h = f[0],
                b = f[1],
                _ = a.data_.has(h);
              if ((a.set(h, b), a.data_.has(h))) {
                var m = a.data_.get(h);
                (i.set(h, m), _ || (c = !0));
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
        return no(this, n);
      }),
      (t.intercept_ = function (n) {
        return ro(this, n);
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
  xr = Er("ObservableMap", Hg);
function pv(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Xc(e));
}
function gC(e) {
  if (nn(e) || xr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Zt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return Y(21, e);
}
var bC = {},
  Wg = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = mr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[z] = bC),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        lt(Set) || Y(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        Cr(function () {
          ((o.atom_ = mg(o.name_)), r && o.replace(r));
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
          Rg(function () {
            for (var a = Gr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Gr(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, Xe(this))) {
          var o = Ze(this, { type: Yt, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Nt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            c = ct(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Yt,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && ut(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Xe(this)) {
          var o = Ze(this, { type: Jo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = ct(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Jo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Nt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            c && ut(this, s),
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
        return hv({
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
        return hv({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
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
        return no(this, n);
      }),
      (t.intercept_ = function (n) {
        return ro(this, n);
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
  wt = Er("ObservableSet", Wg);
function hv(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Xc(e));
}
var gv = Object.create(null),
  bv = "remove",
  Kg = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = fx),
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
        if (Xe(this)) {
          var i = Ze(this, { type: Ct, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var c = ct(this),
            s = !1,
            u =
              c || s
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
          (o.setNewValue_(a), c && ut(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !qt(this.target_, n) && this.has_(n), this.target_[n]);
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
        if (!A.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new pr(n in this.target_, bi, "ObservableObject.key?", !1)),
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
          for (var i = this.target_; i && i !== vi; ) {
            var c = $o(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          mv(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && mv(this, o, n), c);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Qe();
          var i = this.delete_(n);
          if (!i) return i;
          if (Xe(this)) {
            var c = Ze(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Yt,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = _r({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else St(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          et();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          Qe();
          var c = this.delete_(n);
          if (!c) return c;
          if (Xe(this)) {
            var s = Ze(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Yt,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var u = _v(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else St(this.target_, n, l);
          var d = new pr(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          et();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Qe();
          var i = this.delete_(n);
          if (!i) return i;
          if (Xe(this)) {
            var c = Ze(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Yt,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = _v(n),
            u = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else St(this.target_, n, u);
          (this.values_.set(n, new dt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          et();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !qt(this.target_, n))) return !0;
        if (Xe(this)) {
          var o = Ze(this, { object: this.proxy_ || this.target_, name: n, type: bv });
          if (!o) return null;
        }
        try {
          var i;
          Qe();
          var c = ct(this),
            s = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (c || s)) {
            var d;
            l = (d = $o(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof pr && (l = u.value_), Tg(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var p = {
              type: bv,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && ut(this, p);
          }
        } finally {
          et();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return no(this, n);
      }),
      (t.intercept_ = function (n) {
        return ro(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = ct(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: Yt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && ut(this, s);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), gi(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function on(e, t) {
  var r;
  if (qt(e, z)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Kg(e, new Map(), String(n), Ox(t));
  return (hi(e, z, a), e);
}
var _C = Er("ObservableObjectAdministration", Kg);
function _v(e) {
  return (
    gv[e] ||
    (gv[e] = {
      get: function () {
        return this[z].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[z].setObservablePropValue_(e, r);
      },
    })
  );
}
function Ei(e) {
  return pi(e) ? _C(e[z]) : !1;
}
function mv(e, t, r) {
  var n;
  (n = e.target_[kt]) == null || delete n[r];
}
var mC = Yg(0),
  yC = (function () {
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
  Ds = 0,
  Jg = function () {};
function wC(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
wC(Jg, Array.prototype);
var Yc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Cr(function () {
        var s = new Jc(o, a, i, !0);
        ((s.proxy_ = c),
          hg(c, z, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          yC && Object.defineProperty(c, "0", mC));
      }),
      c
    );
  }
  _g(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[z].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return Oi(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Xc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    an(t, [
      {
        key: "length",
        get: function () {
          return this[z].getArrayLength_();
        },
        set: function (a) {
          this[z].setArrayLength_(a);
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
})(Jg);
Object.entries(Ko).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && hi(Yc.prototype, t, r);
});
function Yg(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[z].get_(e);
    },
    set: function (r) {
      this[z].set_(e, r);
    },
  };
}
function kC(e) {
  St(Yc.prototype, "" + e, Yg(e));
}
function Xg(e) {
  if (e > Ds) {
    for (var t = Ds; t < e + 100; t++) kC(t);
    Ds = e;
  }
}
Xg(1e3);
function OC(e, t, r) {
  return new Yc(e, t, r);
}
function Yo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Oi(e)) return (t !== void 0 && Y(23), e[z].atom_);
    if (wt(e)) return e.atom_;
    if (xr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || Y(25, t, hc(e)), r);
    }
    if (Ei(e)) {
      if (!t) return Y(26);
      var n = e[z].values_.get(t);
      return (n || Y(27, t, hc(e)), n);
    }
    if (Gc(e) || ki(e) || Wo(e)) return e;
  } else if (lt(e) && Wo(e[z])) return e[z];
  Y(28);
}
function EC(e, t) {
  if ((e || Y(29), Gc(e) || ki(e) || Wo(e) || xr(e) || wt(e))) return e;
  if (e[z]) return e[z];
  Y(24, e);
}
function hc(e, t) {
  var r;
  if (t !== void 0) r = Yo(e, t);
  else {
    if (en(e)) return e.name;
    Ei(e) || xr(e) || wt(e) ? (r = EC(e)) : (r = Yo(e));
  }
  return r.name_;
}
function Cr(e) {
  var t = Sr(),
    r = yi(!0);
  Qe();
  try {
    return e();
  } finally {
    (et(), wi(r), $t(t));
  }
}
var yv = vi.toString;
function Zg(e, t, r) {
  return (r === void 0 && (r = -1), gc(e, t, r));
}
function gc(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = yv.call(e);
  if (i !== yv.call(t)) return !1;
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
  ((e = wv(e)), (t = wv(t)));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(lt(s) && s instanceof s && lt(u) && u instanceof u) &&
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
    for (; l--; ) if (!gc(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!(qt(t, g) && gc(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function wv(e) {
  return Oi(e) ? e.slice() : nn(e) || xr(e) || Ut(e) || wt(e) ? Array.from(e.entries()) : e;
}
var kv,
  SC = ((kv = fi().Iterator) == null ? void 0 : kv.prototype) || {};
function Xc(e) {
  return ((e[Symbol.iterator] = xC), Object.assign(Object.create(SC), e));
}
function xC() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = fi();
  typeof t[e] > "u" && Y("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: $x, extras: { getDebugName: hc }, $mobx: z });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Kc) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function CC(e) {
  e();
}
function PC(e) {
  (e || (e = CC), rC({ reactionScheduler: e }));
}
function RC(e) {
  return aC(e);
}
var AC = 1e4,
  IC = 1e4,
  jC = (function () {
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
            (n === void 0 && (n = AC), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, IC));
        },
      }),
      e
    );
  })(),
  DC = typeof FinalizationRegistry < "u" ? FinalizationRegistry : jC,
  Ka = new DC(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Ms = { exports: {} },
  Ts = {};
var Ov;
function MC() {
  if (Ov) return Ts;
  Ov = 1;
  var e = wr();
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
    (Ts.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Ts
  );
}
var Ev;
function TC() {
  return (Ev || ((Ev = 1), (Ms.exports = MC())), Ms.exports);
}
var FC = TC();
function Sv(e) {
  e.reaction = new At("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function LC(e, t) {
  t === void 0 && (t = "observed");
  var r = E.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (c) {
        return (
          Ka.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (Sv(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (Sv(a), Ka.register(r, a, a)),
    E.useDebugValue(a.reaction, RC),
    FC.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Fs,
  Ls,
  Qg = typeof Symbol == "function" && Symbol.for,
  UC =
    (Ls =
      (Fs = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Fs === void 0
        ? void 0
        : Fs.configurable) !== null && Ls !== void 0
      ? Ls
      : !1,
  xv = Qg
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Cv = Qg
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function NC(e, t) {
  var r;
  if (Cv && e.$$typeof === Cv)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (xv && e.$$typeof === xv && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return LC(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    UC && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = y.forwardRef(i)),
    (i = y.memo(i)),
    qC(e, i),
    i
  );
}
var BC = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function qC(e, t) {
  Object.keys(e).forEach(function (r) {
    BC[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Us;
PC(Xo.unstable_batchedUpdates);
Us = Ka.finalizeAllImmediately;
function $C(e, t) {
  if (Pv(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Pv(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Pv(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Rv = Symbol("patchMixins"),
  eb = Symbol("patchedDefinition");
function zC(e, t) {
  var r = (e[Rv] = e[Rv] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Av(e, t) {
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
function Iv(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    Av.call.apply(Av, [this, e, t].concat(o));
  };
  return r;
}
function VC(e, t, r) {
  var n = zC(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[eb])) {
    var o = e[t],
      i = tb(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function tb(e, t, r, n, a) {
  var o,
    i = Iv(a, n);
  return (
    (o = {}),
    (o[eb] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = Iv(s, n);
      else {
        var u = tb(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var jv = Symbol("ObserverAdministration"),
  Dv = Symbol("isMobXReactObserver");
function bc(e) {
  var t;
  return (t = e[jv]) != null
    ? t
    : (e[jv] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: _c(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function GC(e) {
  var t = e.prototype;
  if (e[Dv]) {
    var r = _c(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Dv] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Mv;
    else if (t.shouldComponentUpdate !== Mv)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = _c(e);
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
        value: HC.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = bc(this);
      return (
        (c.mounted = !0),
        Ka.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    VC(t, "componentWillUnmount", function () {
      var i,
        c = bc(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function _c(e) {
  return e.displayName || e.name || "<component>";
}
function HC(e) {
  var t = e.bind(this),
    r = bc(this);
  function n() {
    r.reaction || ((r.reaction = WC(r)), r.mounted || Ka.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = Dx(!1, t);
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
function WC(e) {
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
function Mv(e, t) {
  return this.state !== t ? !0 : !$C(this.props, e);
}
function Si(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? GC(e)
      : NC(e)
  );
}
function mc() {
  return (
    (mc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    mc.apply(null, arguments)
  );
}
function KC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var JC = ["children"],
  Tv = E.createContext({});
function rb(e) {
  var t = e.children,
    r = KC(e, JC),
    n = E.useContext(Tv),
    a = E.useRef(mc({}, n, r)),
    o = a.current;
  return E.createElement(Tv.Provider, { value: o }, t);
}
rb.displayName = "MobXProvider";
E.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!ge) throw new Error("mobx-react requires mobx to be available");
var YC = Object.defineProperty,
  XC = Object.getOwnPropertyDescriptor,
  Vt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? XC(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && YC(t, r, a), a);
  };
class jt {
  constructor() {
    ((this.isLoading = !0), Kc(this));
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
}
Vt([ge], jt.prototype, "isLoading", 2);
Vt([ge], jt.prototype, "users", 2);
Vt([ge], jt.prototype, "duplicates", 2);
Vt([ge], jt.prototype, "sort", 2);
Vt([tt.bound], jt.prototype, "saveUsers", 1);
Vt([tt.bound], jt.prototype, "saveSort", 1);
Vt([tt.bound], jt.prototype, "saveDuplicates", 1);
Vt([tt], jt.prototype, "loading", 1);
Vt([tt], jt.prototype, "stopLoading", 1);
const ZC = new jt();
var QC = Object.defineProperty,
  eP = Object.getOwnPropertyDescriptor,
  nb = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? eP(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && QC(t, r, a), a);
  };
class Zc {
  constructor() {
    ((this.state = "ROOT"), Kc(this));
  }
  saveState(t) {
    this.state = t;
  }
}
nb([ge], Zc.prototype, "state", 2);
nb([tt.bound], Zc.prototype, "saveState", 1);
const tP = new Zc();
class rP {
  constructor() {
    ((this.usersStore = ZC), (this.stateStore = tP));
  }
}
const ab = new rP(),
  nP = y.createContext(ab),
  xi = () => y.useContext(nP),
  aP = Si(() => {
    const { usersStore: e, stateStore: t } = xi(),
      r = ug(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? L.jsx("div", { children: "User Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Vc, {
                head: r,
                onSort: async (a) => {
                  let o = { name: a.key, sortType: a.sortOrder };
                  e.loading();
                  try {
                    const i = await Bt.invoke("fetch", { sortType: o });
                    (e.saveUsers(i), e.saveSort(o));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: n.map((a, o) => {
                  const i = [
                    { key: "id", content: a.id },
                    { key: "name", content: a.name },
                    { key: "email", content: a.email },
                    {
                      key: "delete",
                      content: L.jsx("div", {
                        children: L.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Bt.invoke("delete", { id: a.id }));
                              const c = await Bt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(c);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    },
                  ];
                  return { key: `row-${o}-${a.id}`, cells: i };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: L.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              L.jsx("br", {}),
              L.jsx("br", {}),
              L.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const a = await Bt.invoke("duplicate", { sortType: e.sort });
                    (e.saveDuplicates(a), t.saveState("DUPLICATE"));
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
  oP = Si(() => {
    const { usersStore: e, stateStore: t } = xi(),
      [r, n] = y.useState({}),
      a = (i) => {
        const { name: c, value: s, type: u } = i.target;
        n((l) => ({ ...l, [c]: u === "number" ? Number(s) : s }));
      },
      o = async (i) => {
        (i.preventDefault(), await Bt.invoke("create", { data: r }), e.loading());
        try {
          (e.saveUsers(await Bt.invoke("fetch", { sortType: e.sort })), t.saveState("ROOT"));
        } finally {
          e.stopLoading();
        }
      };
    return L.jsx("div", {
      children: L.jsxs("form", {
        onSubmit: o,
        children: [
          L.jsxs(
            "div",
            {
              children: [
                L.jsx("label", { htmlFor: "name", children: "Name" }),
                L.jsx("br", {}),
                L.jsx("input", { type: "text", id: "name", name: "name", onChange: a }),
                L.jsx("br", {}),
              ],
            },
            "name",
          ),
          L.jsxs(
            "div",
            {
              children: [
                L.jsx("label", { htmlFor: "email", children: "Email" }),
                L.jsx("br", {}),
                L.jsx("input", { type: "text", id: "email", name: "email", onChange: a }),
                L.jsx("br", {}),
              ],
            },
            "email",
          ),
          L.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  iP = Si(() => {
    const { usersStore: e } = xi(),
      t = ug(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? L.jsx("div", { children: "Duplicate Table is EMPTY" })
      : L.jsx("div", {
          children: L.jsxs("div", {
            children: [
              L.jsx(Vc, {
                head: t,
                onSort: async (n) => {
                  let a = { name: n.key, sortType: n.sortOrder };
                  e.loading();
                  try {
                    const o = await Bt.invoke("duplicate", { sortType: a });
                    e.saveDuplicates(o);
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: r.map((n, a) => {
                  const o = [
                    { key: "name", content: n.name },
                    { key: "email", content: n.email },
                    { key: "count", content: n.count },
                  ];
                  return { key: `row-${a}`, cells: o };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: L.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              L.jsx("br", {}),
              L.jsx("br", {}),
            ],
          }),
        });
  });
function sP() {
  const { usersStore: e, stateStore: t } = xi();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          const n = await Bt.invoke("fetch", { type: "USER", sortType: e.sort });
          e.saveUsers(n);
        } finally {
          e.stopLoading();
        }
      })().catch(console.error);
    }, []),
    e.isLoading)
  )
    return "loading....";
  switch (t.state) {
    case "ROOT":
      return L.jsx("div", {
        children: L.jsxs("div", {
          children: [
            L.jsx("button", { onClick: () => t.saveState("ADD_USER"), children: "Add a new User" }),
            L.jsx("br", {}),
            L.jsx("br", {}),
            L.jsx(aP, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return L.jsx("div", {
        children: L.jsxs("div", {
          children: [
            L.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            L.jsx("br", {}),
            L.jsx("br", {}),
            L.jsx(iP, {}),
          ],
        }),
      });
    case "ADD_USER":
      return L.jsx("div", {
        children: L.jsxs("div", {
          children: [
            L.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            L.jsx("br", {}),
            L.jsx("br", {}),
            L.jsx(oP, {}),
          ],
        }),
      });
    default:
      return L.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const cP = Si(sP),
  uP = document.getElementById("root"),
  lP = hb.createRoot(uP),
  Fv = () => {
    lP.render(L.jsx(rb, { ...ab, children: L.jsx(cP, {}) }));
  };
Bt.view.theme
  .enable()
  .then(() => {
    Fv();
  })
  .catch((e) => {
    (console.error(e.message), Fv());
  });
export {
  af as A,
  _e as B,
  sh as C,
  si as D,
  ii as E,
  SP as F,
  EP as G,
  wP as H,
  E as R,
  Im as T,
  We as _,
  he as a,
  Ws as b,
  pe as c,
  Q as d,
  He as e,
  G as f,
  S as g,
  se as h,
  kr as i,
  Ee as j,
  ne as k,
  Iy as l,
  Lt as m,
  It as n,
  P as o,
  Rm as p,
  X_ as q,
  y as r,
  xm as s,
  kP as t,
  yP as u,
  mP as v,
  W1 as w,
  _P as x,
  OP as y,
  nf as z,
};
