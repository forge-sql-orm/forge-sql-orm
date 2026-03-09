const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-CT8OtY7f.js",
      "./lodash-vendor-Cp37rRJM.js",
      "./custom-theme-BZBdu_h7.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./client-core-vendor-CMohoSFF.js",
      "./body-Czvrr-1C.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as yr, a as Wo, c as ob } from "./react-dom-vendor--YlRhZCI.js";
import { g as Av, r as ib, a as Zt } from "./lodash-vendor-Cp37rRJM.js";
import { r as jt, s as Ye } from "./client-core-vendor-CMohoSFF.js";
function sb(e, t) {
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
var Ci = { exports: {} },
  on = {};
var au;
function cb() {
  if (au) return on;
  au = 1;
  var e = yr(),
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
  return ((on.Fragment = r), (on.jsx = i), (on.jsxs = i), on);
}
var ou;
function ub() {
  return (ou || ((ou = 1), (Ci.exports = cb())), Ci.exports);
}
var P = ub(),
  Ri = {},
  Ls = function (e, t) {
    return (
      (Ls =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ls(e, t)
    );
  };
function jv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ls(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Po = function () {
  return (
    (Po =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Po.apply(this, arguments)
  );
};
function Iv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Tv(e, t, r, n) {
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
function Mv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Dv(e, t, r, n, a, o) {
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
    var h = {};
    for (var f in n) h[f] = f === "access" ? {} : n[f];
    for (var f in n.access) h.access[f] = n.access[f];
    h.addInitializer = function (b) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(b || null));
    };
    var g = (0, r[v])(s === "accessor" ? { get: l.get, set: l.set } : l[c], h);
    if (s === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = i(g.get)) && (l.get = d),
        (d = i(g.set)) && (l.set = d),
        (d = i(g.init)) && a.unshift(d));
    } else (d = i(g)) && (s === "field" ? a.unshift(d) : (l[c] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (p = !0));
}
function Fv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Lv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Nv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Bv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function qv(e, t, r, n) {
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
function Uv(e, t) {
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
var Ko = Object.create
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
function zv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ko(t, e, r);
}
function Co(e) {
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
function mc(e, t) {
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
function $v() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(mc(arguments[t]));
  return e;
}
function Vv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
  return n;
}
function Gv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Vr(e) {
  return this instanceof Vr ? ((this.v = e), this) : new Vr(e);
}
function Hv(e, t, r) {
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
    return function (h) {
      return Promise.resolve(h).then(v, d);
    };
  }
  function s(v, h) {
    n[v] &&
      ((a[v] = function (f) {
        return new Promise(function (g, b) {
          o.push([v, f, g, b]) > 1 || c(v, f);
        });
      }),
      h && (a[v] = h(a[v])));
  }
  function c(v, h) {
    try {
      u(n[v](h));
    } catch (f) {
      p(o[0][3], f);
    }
  }
  function u(v) {
    v.value instanceof Vr ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
  }
  function l(v) {
    c("next", v);
  }
  function d(v) {
    c("throw", v);
  }
  function p(v, h) {
    (v(h), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function Wv(e) {
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
          return (r = !r) ? { value: Vr(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function Kv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Co == "function" ? Co(e) : e[Symbol.iterator]()),
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
function Yv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var lb = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Ns = function (e) {
    return (
      (Ns =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Ns(e)
    );
  };
function Jv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Ns(e), n = 0; n < r.length; n++) r[n] !== "default" && Ko(t, e, r[n]);
  return (lb(t, e), t);
}
function Xv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Zv(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function ep(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function tp(e, t, r) {
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
var db =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function rp(e) {
  function t(o) {
    ((e.error = e.hasError ? new db(o, e.error, "An error was suppressed during disposal.") : o),
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
function np(e, t) {
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
const fb = {
    __extends: jv,
    __assign: Po,
    __rest: Iv,
    __decorate: Tv,
    __param: Mv,
    __esDecorate: Dv,
    __runInitializers: Fv,
    __propKey: Lv,
    __setFunctionName: Nv,
    __metadata: Bv,
    __awaiter: qv,
    __generator: Uv,
    __createBinding: Ko,
    __exportStar: zv,
    __values: Co,
    __read: mc,
    __spread: $v,
    __spreadArrays: Vv,
    __spreadArray: Gv,
    __await: Vr,
    __asyncGenerator: Hv,
    __asyncDelegator: Wv,
    __asyncValues: Kv,
    __makeTemplateObject: Yv,
    __importStar: Jv,
    __importDefault: Xv,
    __classPrivateFieldGet: Qv,
    __classPrivateFieldSet: Zv,
    __classPrivateFieldIn: ep,
    __addDisposableResource: tp,
    __disposeResources: rp,
    __rewriteRelativeImportExtension: np,
  },
  vb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: tp,
        get __assign() {
          return Po;
        },
        __asyncDelegator: Wv,
        __asyncGenerator: Hv,
        __asyncValues: Kv,
        __await: Vr,
        __awaiter: qv,
        __classPrivateFieldGet: Qv,
        __classPrivateFieldIn: ep,
        __classPrivateFieldSet: Zv,
        __createBinding: Ko,
        __decorate: Tv,
        __disposeResources: rp,
        __esDecorate: Dv,
        __exportStar: zv,
        __extends: jv,
        __generator: Uv,
        __importDefault: Xv,
        __importStar: Jv,
        __makeTemplateObject: Yv,
        __metadata: Bv,
        __param: Mv,
        __propKey: Lv,
        __read: mc,
        __rest: Iv,
        __rewriteRelativeImportExtension: np,
        __runInitializers: Fv,
        __setFunctionName: Nv,
        __spread: $v,
        __spreadArray: Gv,
        __spreadArrays: Vv,
        __values: Co,
        default: fb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ne = Av(vb);
var sn = {},
  iu;
function pb() {
  return (
    iu ||
      ((iu = 1),
      Object.defineProperty(sn, "__esModule", { value: !0 }),
      (sn.NavigationTarget = void 0),
      (sn.NavigationTarget = {
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
    sn
  );
}
var Ai = {},
  ji = {},
  cn = {},
  un = {},
  su;
function ye() {
  if (su) return un;
  ((su = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.BridgeAPIError = void 0));
  class e extends Error {}
  return ((un.BridgeAPIError = e), un);
}
var cu;
function se() {
  if (cu) return cn;
  ((cu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.getCallBridge = void 0));
  const e = ye();
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
  return ((cn.getCallBridge = r), cn);
}
var ln = {},
  uu;
function Yo() {
  if (uu) return ln;
  ((uu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.withRateLimiter = void 0));
  const e = ye(),
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
  return ((ln.withRateLimiter = t), ln);
}
var lu;
function hb() {
  return (
    lu ||
      ((lu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = se(),
          r = ye(),
          n = Yo(),
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
      })(ji)),
    ji
  );
}
var du;
function Ga() {
  return (
    du ||
      ((du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(hb(), e));
      })(Ai)),
    Ai
  );
}
var Ii = {},
  dn = {},
  Ti = {},
  fu;
function ap() {
  return (
    fu ||
      ((fu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = se(),
          r = ye(),
          n = Yo(),
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
              h = await s("invoke", v),
              { success: f, payload: g, error: b } = h ?? {},
              m = { ...(f ? g : b) };
            if (m && m.headers)
              for (const y in m.headers)
                Array.isArray(m.headers[y]) && (m.headers[y] = m.headers[y].join(","));
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
      })(Ti)),
    Ti
  );
}
var vu;
function gb() {
  if (vu) return dn;
  ((vu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.invokeRemote = void 0));
  const e = ap(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((dn.invokeRemote = t), dn);
}
var fn = {},
  pu;
function bb() {
  if (pu) return fn;
  ((pu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.invokeService = void 0));
  const e = ap(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((fn.invokeService = t), fn);
}
var hu;
function mb() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(gb(), e), t.__exportStar(bb(), e));
      })(Ii)),
    Ii
  );
}
var Mi = {},
  vn = {},
  pn = {},
  gu;
function yb() {
  if (gu) return pn;
  ((gu = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.submit = void 0));
  const e = se(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((pn.submit = n), pn);
}
var hn = {},
  bu;
function _b() {
  if (bu) return hn;
  ((bu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.close = void 0));
  const e = se(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((hn.close = n), hn);
}
var gn = {},
  mu;
function wb() {
  if (mu) return gn;
  ((mu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.open = void 0));
  const e = se(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((gn.open = n), gn);
}
var bn = {},
  yu;
function kb() {
  if (yu) return bn;
  ((yu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.refresh = void 0));
  const e = se(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((bn.refresh = n), bn);
}
var mn = {},
  _u;
function Ob() {
  if (_u) return mn;
  ((_u = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.createHistory = void 0));
  const t = (0, se().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((mn.createHistory = r), mn);
}
var yn = {},
  Di = {},
  Lt = {},
  wu;
function op() {
  return (
    wu ||
      ((wu = 1),
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
var ar = {},
  ku;
function Eb() {
  if (ku) return ar;
  ((ku = 1),
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
var _n = {},
  Fi = {},
  Ou;
function ip() {
  return (
    Ou ||
      ((Ou = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ne.__importDefault(ib()),
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
      })(Fi)),
    Fi
  );
}
var Eu;
function Sb() {
  if (Eu) return _n;
  ((Eu = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.Translator = void 0));
  const e = ip();
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
  return ((_n.Translator = t), _n);
}
var wn = {},
  Su;
function xb() {
  if (Su) return wn;
  ((Su = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.ensureLocale = void 0));
  const e = op(),
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
  return ((wn.ensureLocale = a), wn);
}
var Li = {},
  xu;
function Pb() {
  return (
    xu ||
      ((xu = 1),
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
      })(Li)),
    Li
  );
}
var Ni = {},
  Pu;
function Cb() {
  return (Pu || ((Pu = 1), Object.defineProperty(Ni, "__esModule", { value: !0 })), Ni);
}
var Cu;
function sp() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = Ne;
        (t.__exportStar(op(), e),
          t.__exportStar(Eb(), e),
          t.__exportStar(Sb(), e),
          t.__exportStar(xb(), e));
        var r = ip();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Pb();
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
          t.__exportStar(Cb(), e));
      })(Di)),
    Di
  );
}
var Ru;
function Rb() {
  if (Ru) return yn;
  ((Ru = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.getContext = void 0));
  const e = se(),
    t = sp(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((yn.getContext = n), yn);
}
var kn = {},
  Au;
function Ab() {
  if (Au) return kn;
  ((Au = 1),
    Object.defineProperty(kn, "__esModule", { value: !0 }),
    (kn.changeWindowTitle = void 0));
  const e = se(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((kn.changeWindowTitle = n), kn);
}
var On = {},
  ju;
function jb() {
  if (ju) return On;
  ((ju = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.theme = void 0));
  const t = (0, se().getCallBridge)();
  return ((On.theme = { enable: () => t("enableTheming") }), On);
}
var En = {},
  Sn = {},
  Bi = {},
  or = {},
  Iu;
function cp() {
  if (Iu) return or;
  ((Iu = 1),
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
var Tu;
function Ib() {
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
        const t = cp(),
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
      })(Bi)),
    Bi
  );
}
var Mu;
function up() {
  if (Mu) return Sn;
  ((Mu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.events = void 0));
  const e = se(),
    t = Ib(),
    r = (0, e.getCallBridge)(),
    n = (c) => (u) => {
      let l = u;
      return ((0, t.containsSerialisedBlobs)(u) && (l = (0, t.deserialiseBlobsInPayload)(u)), c(l));
    },
    a = async (c, u) => {
      let l = u;
      return (
        (0, t.containsBlobs)(u) && (l = await (0, t.serialiseBlobsInPayload)(u)),
        r("emit", { event: c, payload: l })
      );
    },
    o = (c, u) => r("on", { event: c, callback: n(u) }),
    i = async (c, u) => {
      let l = u;
      return (
        (0, t.containsBlobs)(u) && (l = await (0, t.serialiseBlobsInPayload)(u)),
        r("emitPublic", { event: c, payload: l })
      );
    },
    s = (c, u) => r("onPublic", { event: c, callback: n(u) });
  return ((Sn.events = { emit: a, on: o, emitPublic: i, onPublic: s }), Sn);
}
var Du;
function Tb() {
  if (Du) return En;
  ((Du = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.emitReadyEvent = void 0));
  const e = up(),
    t = vp(),
    n = (0, se().getCallBridge)(),
    a = "EXTENSION_READY",
    o = async () => {
      const i = await t.view.getContext();
      await e.events.emit(a, { localId: i.localId });
      try {
        await n("emitReadyEvent");
      } catch {}
    };
  return ((En.emitReadyEvent = o), En);
}
const Mb = "modulepreload",
  Db = function (e, t) {
    return new URL(e, t).href;
  },
  Fu = {},
  Qe = function (t, r, n) {
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
          if (((l = Db(l, n)), l in Fu)) return;
          Fu[l] = !0;
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
            ((v.rel = d ? "stylesheet" : Mb),
            d || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = l),
            c && v.setAttribute("nonce", c),
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
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented)) throw i;
    }
    return a.then((i) => {
      for (const s of i || []) s.status === "rejected" && o(s.reason);
      return t().catch(o);
    });
  };
var xn = {},
  qi = {},
  Pn = {},
  no = {},
  Lu;
function lp() {
  if (Lu) return no;
  ((Lu = 1), Object.defineProperty(no, "__esModule", { value: !0 }), (no.default = r));
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
  return no;
}
var Cr = {},
  Cn = {},
  Rn = {},
  Nu;
function Fb() {
  if (Nu) return Rn;
  ((Nu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Rn.default = e), Rn);
}
var Bu;
function Jo() {
  if (Bu) return Cn;
  ((Bu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  var e = t(Fb());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((Cn.default = n), Cn);
}
var qu;
function Xo() {
  if (qu) return Cr;
  ((qu = 1),
    Object.defineProperty(Cr, "__esModule", { value: !0 }),
    (Cr.default = void 0),
    (Cr.unsafeStringify = n));
  var e = t(Jo());
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
  return ((Cr.default = o), Cr);
}
var Uu;
function Lb() {
  if (Uu) return Pn;
  ((Uu = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.default = void 0));
  var e = r(lp()),
    t = Xo();
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
    const y = ((g & 268435455) * 1e4 + b) % 4294967296;
    ((v[p++] = (y >>> 24) & 255),
      (v[p++] = (y >>> 16) & 255),
      (v[p++] = (y >>> 8) & 255),
      (v[p++] = y & 255));
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
  var c = s;
  return ((Pn.default = c), Pn);
}
var An = {},
  Wt = {},
  jn = {},
  zu;
function dp() {
  if (zu) return jn;
  ((zu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = t(Jo());
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
  return ((jn.default = n), jn);
}
var $u;
function fp() {
  if ($u) return Wt;
  (($u = 1),
    Object.defineProperty(Wt, "__esModule", { value: !0 }),
    (Wt.URL = Wt.DNS = void 0),
    (Wt.default = i));
  var e = Xo(),
    t = r(dp());
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
  Wt.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Wt.URL = o;
  function i(s, c, u) {
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
        (g[6] = (g[6] & 15) | c),
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
      l.name = s;
    } catch {}
    return ((l.DNS = a), (l.URL = o), l);
  }
  return Wt;
}
var In = {},
  Vu;
function Nb() {
  if (Vu) return In;
  ((Vu = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
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
        y = parseInt(g.charAt((m >>> 4) & 15) + g.charAt(m & 15), 16);
      h.push(y);
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
    for (let y = 0; y < v.length; y += 16) {
      const k = f,
        w = g,
        O = b,
        S = m;
      ((f = c(f, g, b, m, v[y], 7, -680876936)),
        (m = c(m, f, g, b, v[y + 1], 12, -389564586)),
        (b = c(b, m, f, g, v[y + 2], 17, 606105819)),
        (g = c(g, b, m, f, v[y + 3], 22, -1044525330)),
        (f = c(f, g, b, m, v[y + 4], 7, -176418897)),
        (m = c(m, f, g, b, v[y + 5], 12, 1200080426)),
        (b = c(b, m, f, g, v[y + 6], 17, -1473231341)),
        (g = c(g, b, m, f, v[y + 7], 22, -45705983)),
        (f = c(f, g, b, m, v[y + 8], 7, 1770035416)),
        (m = c(m, f, g, b, v[y + 9], 12, -1958414417)),
        (b = c(b, m, f, g, v[y + 10], 17, -42063)),
        (g = c(g, b, m, f, v[y + 11], 22, -1990404162)),
        (f = c(f, g, b, m, v[y + 12], 7, 1804603682)),
        (m = c(m, f, g, b, v[y + 13], 12, -40341101)),
        (b = c(b, m, f, g, v[y + 14], 17, -1502002290)),
        (g = c(g, b, m, f, v[y + 15], 22, 1236535329)),
        (f = u(f, g, b, m, v[y + 1], 5, -165796510)),
        (m = u(m, f, g, b, v[y + 6], 9, -1069501632)),
        (b = u(b, m, f, g, v[y + 11], 14, 643717713)),
        (g = u(g, b, m, f, v[y], 20, -373897302)),
        (f = u(f, g, b, m, v[y + 5], 5, -701558691)),
        (m = u(m, f, g, b, v[y + 10], 9, 38016083)),
        (b = u(b, m, f, g, v[y + 15], 14, -660478335)),
        (g = u(g, b, m, f, v[y + 4], 20, -405537848)),
        (f = u(f, g, b, m, v[y + 9], 5, 568446438)),
        (m = u(m, f, g, b, v[y + 14], 9, -1019803690)),
        (b = u(b, m, f, g, v[y + 3], 14, -187363961)),
        (g = u(g, b, m, f, v[y + 8], 20, 1163531501)),
        (f = u(f, g, b, m, v[y + 13], 5, -1444681467)),
        (m = u(m, f, g, b, v[y + 2], 9, -51403784)),
        (b = u(b, m, f, g, v[y + 7], 14, 1735328473)),
        (g = u(g, b, m, f, v[y + 12], 20, -1926607734)),
        (f = l(f, g, b, m, v[y + 5], 4, -378558)),
        (m = l(m, f, g, b, v[y + 8], 11, -2022574463)),
        (b = l(b, m, f, g, v[y + 11], 16, 1839030562)),
        (g = l(g, b, m, f, v[y + 14], 23, -35309556)),
        (f = l(f, g, b, m, v[y + 1], 4, -1530992060)),
        (m = l(m, f, g, b, v[y + 4], 11, 1272893353)),
        (b = l(b, m, f, g, v[y + 7], 16, -155497632)),
        (g = l(g, b, m, f, v[y + 10], 23, -1094730640)),
        (f = l(f, g, b, m, v[y + 13], 4, 681279174)),
        (m = l(m, f, g, b, v[y], 11, -358537222)),
        (b = l(b, m, f, g, v[y + 3], 16, -722521979)),
        (g = l(g, b, m, f, v[y + 6], 23, 76029189)),
        (f = l(f, g, b, m, v[y + 9], 4, -640364487)),
        (m = l(m, f, g, b, v[y + 12], 11, -421815835)),
        (b = l(b, m, f, g, v[y + 15], 16, 530742520)),
        (g = l(g, b, m, f, v[y + 2], 23, -995338651)),
        (f = d(f, g, b, m, v[y], 6, -198630844)),
        (m = d(m, f, g, b, v[y + 7], 10, 1126891415)),
        (b = d(b, m, f, g, v[y + 14], 15, -1416354905)),
        (g = d(g, b, m, f, v[y + 5], 21, -57434055)),
        (f = d(f, g, b, m, v[y + 12], 6, 1700485571)),
        (m = d(m, f, g, b, v[y + 3], 10, -1894986606)),
        (b = d(b, m, f, g, v[y + 10], 15, -1051523)),
        (g = d(g, b, m, f, v[y + 1], 21, -2054922799)),
        (f = d(f, g, b, m, v[y + 8], 6, 1873313359)),
        (m = d(m, f, g, b, v[y + 15], 10, -30611744)),
        (b = d(b, m, f, g, v[y + 6], 15, -1560198380)),
        (g = d(g, b, m, f, v[y + 13], 21, 1309151649)),
        (f = d(f, g, b, m, v[y + 4], 6, -145523070)),
        (m = d(m, f, g, b, v[y + 11], 10, -1120210379)),
        (b = d(b, m, f, g, v[y + 2], 15, 718787259)),
        (g = d(g, b, m, f, v[y + 9], 21, -343485551)),
        (f = o(f, k)),
        (g = o(g, w)),
        (b = o(b, O)),
        (m = o(m, S)));
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
  function s(v, h, f, g, b, m) {
    return o(i(o(o(h, v), o(g, m)), b), f);
  }
  function c(v, h, f, g, b, m, y) {
    return s((h & f) | (~h & g), v, h, b, m, y);
  }
  function u(v, h, f, g, b, m, y) {
    return s((h & g) | (f & ~g), v, h, b, m, y);
  }
  function l(v, h, f, g, b, m, y) {
    return s(h ^ f ^ g, v, h, b, m, y);
  }
  function d(v, h, f, g, b, m, y) {
    return s(f ^ (h | ~g), v, h, b, m, y);
  }
  var p = e;
  return ((In.default = p), In);
}
var Gu;
function Bb() {
  if (Gu) return An;
  ((Gu = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
  var e = r(fp()),
    t = r(Nb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((An.default = a), An);
}
var Tn = {},
  Mn = {},
  Hu;
function qb() {
  if (Hu) return Mn;
  ((Hu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Mn.default = t), Mn);
}
var Wu;
function Ub() {
  if (Wu) return Tn;
  ((Wu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = n(qb()),
    t = n(lp()),
    r = Xo();
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
  return ((Tn.default = o), Tn);
}
var Dn = {},
  Fn = {},
  Ku;
function zb() {
  if (Ku) return Fn;
  ((Ku = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
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
        h = i[2],
        f = i[3],
        g = i[4];
      for (let b = 0; b < 80; ++b) {
        const m = Math.floor(b / 20),
          y = (t(p, 5) + e(m, v, h, f) + g + o[m] + d[b]) >>> 0;
        ((g = f), (f = h), (h = t(v, 30) >>> 0), (v = p), (p = y));
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
  return ((Fn.default = n), Fn);
}
var Yu;
function $b() {
  if (Yu) return Dn;
  ((Yu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = r(fp()),
    t = r(zb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Dn.default = a), Dn);
}
var Ln = {},
  Ju;
function Vb() {
  if (Ju) return Ln;
  ((Ju = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Ln.default = e), Ln);
}
var Nn = {},
  Xu;
function Gb() {
  if (Xu) return Nn;
  ((Xu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = t(Jo());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var n = r;
  return ((Nn.default = n), Nn);
}
var Qu;
function Hb() {
  return (
    Qu ||
      ((Qu = 1),
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
        var t = l(Lb()),
          r = l(Bb()),
          n = l(Ub()),
          a = l($b()),
          o = l(Vb()),
          i = l(Gb()),
          s = l(Jo()),
          c = l(Xo()),
          u = l(dp());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(qi)),
    qi
  );
}
var Zu;
function Wb() {
  if (Zu) return xn;
  ((Zu = 1),
    Object.defineProperty(xn, "__esModule", { value: !0 }),
    (xn.createAdfRendererIframeProps = void 0));
  const e = Hb(),
    t = async (r, n) => {
      const a = await Qe(
          () => import("./index-CT8OtY7f.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = a.default || a,
        i = new URL(document.referrer).origin,
        s = `${i}/forge-apps/adf-renderer`,
        c = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var l, d, p, v, h, f;
          const g = document.getElementById(c),
            b = {
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
                (h = (v = r.extension) === null || v === void 0 ? void 0 : v.content) === null ||
                h === void 0
                  ? void 0
                  : h.id,
            };
          (o.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (m) => {
                var y;
                (y = m?.iFrameResizer) === null || y === void 0 || y.resize();
              },
            },
            g || "",
          ),
            (f = g?.contentWindow) === null || f === void 0 || f.postMessage(b, i));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: c, src: s, onLoad: u }
      );
    };
  return ((xn.createAdfRendererIframeProps = t), xn);
}
var Bn = {},
  el;
function Kb() {
  if (el) return Bn;
  ((el = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.onClose = void 0));
  const e = se(),
    t = ye(),
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
  return ((Bn.onClose = n), Bn);
}
var tl;
function vp() {
  if (tl) return vn;
  ((tl = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.view = void 0));
  const e = yb(),
    t = _b(),
    r = wb(),
    n = kb(),
    a = Ob(),
    o = Rb(),
    i = Ab(),
    s = jb(),
    c = Tb(),
    u = Wb(),
    l = Kb();
  return (
    (vn.view = {
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
    vn
  );
}
var rl;
function Qo() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(vp(), e));
      })(Mi)),
    Mi
  );
}
var Ui = {},
  qn = {},
  nl;
function Yb() {
  if (nl) return qn;
  ((nl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.router = void 0));
  const t = (0, se().getCallBridge)(),
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
  return ((qn.router = { getUrl: r, navigate: n, open: a, reload: o }), qn);
}
var al;
function Jb() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(Yb(), e));
      })(Ui)),
    Ui
  );
}
var zi = {},
  Un = {},
  ol;
function Xb() {
  if (ol) return Un;
  ((ol = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.Modal = void 0));
  const e = se(),
    t = ye(),
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
  return ((Un.Modal = a), Un);
}
var il;
function Qb() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(Xb(), e));
      })(zi)),
    zi
  );
}
var ct = {},
  ir = {},
  sl;
function Zb() {
  if (sl) return ir;
  ((sl = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.productFetchApi = ir.remoteFetchApi = void 0));
  const e = cp(),
    t = async (i, s = !1) => {
      const c = {};
      for (const [u, l] of i.entries())
        if (s ? u.startsWith("file") : u === "file") {
          const p = l.name,
            v = l.type;
          ((c[u] = await (0, e.blobToBase64)(l)), (c[`__${u}Name`] = p), (c[`__${u}Type`] = v));
        } else c[u] = l;
      return JSON.stringify(c);
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
    n = async (i, s) => {
      const c = s?.body instanceof FormData,
        u = c ? await t(s?.body, i === "remote") : s?.body,
        l = new Request("", { body: u, method: s?.method, headers: s?.headers }),
        d = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(d),
        isMultipartFormData: c,
      };
    },
    a = (i) => {
      const s = async (c, u) => {
        const l = r(u),
          { body: d, headers: p, isMultipartFormData: v } = await n("remote", l),
          h = {
            remoteKey: c,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: g,
            statusText: b,
            status: m,
            isAttachment: y,
          } = await i("fetchRemote", h),
          k = y ? (0, e.base64ToBlob)(f, g["content-type"]) : f;
        return new Response(k || null, { headers: g, status: m, statusText: b });
      };
      return { requestRemote: (c, u) => s(c, u) };
    };
  ir.remoteFetchApi = a;
  const o = (i) => {
    const s = async (c, u, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: h } = await n("product", d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: c,
          restPath: u,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: h,
        },
        {
          body: g,
          headers: b,
          statusText: m,
          status: y,
          isAttachment: k,
        } = await i("fetchProduct", f),
        w = k ? (0, e.base64ToBlob)(g, b["content-type"]) : g;
      return new Response(w || null, { headers: b, status: y, statusText: m });
    };
    return {
      requestConfluence: (c, u) => s("confluence", c, u),
      requestJira: (c, u) => s("jira", c, u),
      requestBitbucket: (c, u) => s("bitbucket", c, u),
    };
  };
  return ((ir.productFetchApi = o), ir);
}
var cl;
function em() {
  if (cl) return ct;
  cl = 1;
  var e;
  (Object.defineProperty(ct, "__esModule", { value: !0 }),
    (ct.requestRemote = ct.requestBitbucket = ct.requestJira = ct.requestConfluence = void 0));
  const t = se(),
    r = Zb();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (ct.requestConfluence = e.requestConfluence),
    (ct.requestJira = e.requestJira),
    (ct.requestBitbucket = e.requestBitbucket),
    (ct.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    ct
  );
}
var $i = {},
  zn = {},
  ul;
function tm() {
  if (ul) return zn;
  ((ul = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.showFlag = void 0));
  const e = se(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((zn.showFlag = n), zn);
}
var ll;
function rm() {
  return (
    ll ||
      ((ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = tm();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })($i)),
    $i
  );
}
var Vi = {},
  dl;
function nm() {
  return (
    dl ||
      ((dl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(up(), e));
      })(Vi)),
    Vi
  );
}
var Gi = {},
  $n = {},
  fl;
function am() {
  if (fl) return $n;
  ((fl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.realtime = void 0));
  const t = (0, se().getCallBridge)(),
    r = (i, s, c) => t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c }),
    n = (i, s, c) => t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c }),
    a = (i, s, c) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c, isGlobal: !0 }),
    o = (i, s, c) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c, isGlobal: !0 });
  return (($n.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), $n);
}
var Hi = {},
  vl;
function om() {
  return (
    vl ||
      ((vl = 1),
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
      })(Hi)),
    Hi
  );
}
var pl;
function im() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = am();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = om();
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
      })(Gi)),
    Gi
  );
}
var Wi = {},
  Vn = {},
  Ki = {},
  hl;
function sm() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = se(),
          r = ye(),
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
      })(Ki)),
    Ki
  );
}
var Gn = {},
  gl;
function cm() {
  if (gl) return Gn;
  ((gl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.isEnabled = void 0));
  const t = (0, se().getCallBridge)(),
    r = () => t("isRovoEnabled");
  return ((Gn.isEnabled = r), Gn);
}
var bl;
function um() {
  if (bl) return Vn;
  ((bl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.rovo = void 0));
  const e = sm(),
    t = cm();
  return ((Vn.rovo = { open: e.open, isEnabled: t.isEnabled }), Vn);
}
var ml;
function lm() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(um(), e));
      })(Wi)),
    Wi
  );
}
var Nt = {},
  yl;
function dm() {
  if (yl) return Nt;
  ((yl = 1),
    Object.defineProperty(Nt, "__esModule", { value: !0 }),
    (Nt.createTranslationFunction = Nt.getTranslations = Nt.resetTranslationsCache = void 0));
  const e = sp(),
    t = Qo(),
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
  Nt.resetTranslationsCache = a;
  const o = async (s = null, c = { fallback: !0 }) => {
    let u = s;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, c));
  };
  Nt.getTranslations = o;
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
  return ((Nt.createTranslationFunction = i), Nt);
}
var Yi = {},
  Hn = {},
  _l;
function fm() {
  if (_l) return Hn;
  ((_l = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.permissions = void 0));
  const t = (0, se().getCallBridge)(),
    r = async (c) => t("__permission__egressGet", c),
    n = async (c) => t("__permission__egressSet", c),
    a = async (c) => t("__permission__egressDeleteDomain", c),
    o = async (c) => t("__permission__egressDeleteGroup", c),
    i = async (c) => t("__permission__remoteGet", c),
    s = async (c) => t("__permission__remoteSet", c);
  return (
    (Hn.permissions = {
      egress: { get: r, set: n, deleteDomain: a, deleteGroup: o },
      remote: { get: i, set: s },
    }),
    Hn
  );
}
var sr = {},
  Ji = {},
  Xi = {},
  Wn = {},
  Kn = {},
  wl;
function yc() {
  if (wl) return Kn;
  ((wl = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.parseUrl = void 0));
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
  return ((Kn.parseUrl = e), Kn);
}
var Qi = {},
  kl;
function pp() {
  return (
    kl ||
      ((kl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const t = yc();
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
      })(Qi)),
    Qi
  );
}
var Ol;
function vm() {
  if (Ol) return Wn;
  ((Ol = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn.EgressFilteringService = void 0));
  const e = yc(),
    t = pp();
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
  return ((Wn.EgressFilteringService = r), Wn);
}
var El;
function pm() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(vm(), e), t.__exportStar(yc(), e), t.__exportStar(pp(), e));
      })(Xi)),
    Xi
  );
}
var Sl;
function hm() {
  return (
    Sl ||
      ((Sl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(pm(), e));
      })(Ji)),
    Ji
  );
}
var xl;
function gm() {
  if (xl) return sr;
  ((xl = 1),
    Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.checkPermissions = sr.createPermissionUtils = void 0));
  const e = hm(),
    t = Qo();
  function r(h) {
    return typeof h == "string" ? h : "address" in h && h.address ? h.address : h.remote || "";
  }
  const n = ["fonts", "styles", "frames", "images", "media", "scripts"],
    a = ["backend", "client"];
  function o(h) {
    if (!h) return null;
    const { scopes: f, external: g = {} } = h,
      b = Array.isArray(f) ? f : Object.keys(f || {});
    return {
      hasScope: (m) => b.includes(m),
      canFetchFrom: (m, y) => {
        var k;
        const w = (k = g.fetch) === null || k === void 0 ? void 0 : k[m];
        if (!w?.length) return !1;
        const O = w.map(r).filter((I) => I.length > 0);
        if (O.length === 0) return !1;
        const S = new e.EgressFilteringService(O);
        return m === "client" ? S.isValidUrlCSP(y) : S.isValidUrl(y);
      },
      canLoadResource: (m, y) => {
        const k = g[m];
        if (!k?.length) return !1;
        const w = k.map(r).filter((j) => j.length > 0);
        return w.length === 0 ? !1 : new e.EgressFilteringService(w).isValidUrlCSP(y);
      },
      getScopes: () => b,
      getExternalPermissions: () => g,
      hasAnyPermissions: () => b.length > 0 || Object.keys(g).length > 0,
    };
  }
  sr.createPermissionUtils = o;
  function i(h, f) {
    if (!h?.length) return;
    const g = h.filter((b) => !f.hasScope(b));
    return g.length > 0 ? g : void 0;
  }
  function s(h, f) {
    if (!h?.fetch) return;
    const g = {};
    return (
      a.forEach((b) => {
        var m;
        const y = (m = h.fetch) === null || m === void 0 ? void 0 : m[b];
        if (y?.length) {
          const k = y.filter((w) => !f.canFetchFrom(b, w));
          k.length > 0 && (g[b] = k);
        }
      }),
      Object.keys(g).length > 0 ? g : void 0
    );
  }
  function c(h, f) {
    const g = {};
    return (
      n.forEach((b) => {
        const m = h?.[b];
        if (m?.length) {
          const y = m.filter((k) => !f.canLoadResource(b, k));
          y.length > 0 && (g[b] = y);
        }
      }),
      Object.keys(g).length > 0 ? g : void 0
    );
  }
  function u(h, f) {
    if (!h) return;
    const g = s(h, f),
      b = c(h, f);
    if (!g && !b) return;
    const m = {};
    return (g && (m.fetch = g), b && Object.assign(m, b), m);
  }
  function l(h, f) {
    if (h !== void 0 && (typeof h != "object" || h === null || Array.isArray(h)))
      throw new TypeError(
        `${f} should be an object, not ${Array.isArray(h) ? "an array" : `a ${typeof h}`}`,
      );
  }
  function d(h, f) {
    if (h !== void 0 && !Array.isArray(h))
      throw new TypeError(`${f} should be an array, not a ${typeof h}`);
  }
  function p(h) {
    d(h.scopes, "scopes");
    const f = h.external;
    if (f !== void 0) {
      if ((l(f, "external"), f.fetch !== void 0)) {
        l(f.fetch, "external.fetch");
        for (const g of a) d(f.fetch[g], `external.fetch.${g}`);
      }
      for (const g of n) d(f[g], `external.${g}`);
    }
  }
  async function v(h, f) {
    var g;
    if (!h) return { granted: !1, missing: null };
    if ((p(h), !(!((g = h.scopes) === null || g === void 0) && g.length) && !h.external))
      return { granted: !0, missing: null };
    let b = f;
    b || (b = (await t.view.getContext()).permissions);
    const m = o(b);
    if (!m) return { granted: !1, missing: null };
    const y = {};
    let k = !0;
    const w = i(h.scopes, m);
    w && ((y.scopes = w), (k = !1));
    const O = u(h.external, m);
    return (O && ((y.external = O), (k = !1)), { granted: k, missing: k ? null : y });
  }
  return ((sr.checkPermissions = v), sr);
}
var Pl;
function bm() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(fm(), e), t.__exportStar(gm(), e));
      })(Yi)),
    Yi
  );
}
var Zi = {},
  es = {},
  ts = {},
  Yn = {},
  Jn = {},
  Cl;
function hp() {
  return (
    Cl ||
      ((Cl = 1),
      Object.defineProperty(Jn, "__esModule", { value: !0 }),
      (Jn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Jn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Jn
  );
}
var Rl;
function Zo() {
  if (Rl) return Yn;
  ((Rl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.checkRestrictedEnvironment = void 0));
  const e = ye(),
    t = Qo(),
    r = hp(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Yn.checkRestrictedEnvironment = n), Yn);
}
var Al;
function mm() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ga(),
          r = ye(),
          n = Zo(),
          o = (0, se().getCallBridge)(),
          i = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const h = new Uint8Array(v);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          s = async (l) => {
            const d = l.size,
              p = await l.arrayBuffer(),
              v = await crypto.subtle.digest("SHA-256", p),
              h = new Uint8Array(v),
              f = btoa(String.fromCharCode(...h));
            return { length: d, checksum: f, checksumType: "SHA256" };
          },
          c = async ({ functionKey: l, objects: d }) => {
            if (!l || l.length === 0)
              throw new r.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new r.BridgeAPIError("objects array is required and must not be empty");
            const p = d.map((m, y) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return i(m.data, m.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((m) => s(m))),
              h = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!h || typeof h != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              g = new Map();
            return (
              p.forEach((m, y) => {
                const k = v[y];
                (f.set(k.checksum, m), g.set(k.checksum, y));
              }),
              Object.entries(h).map(([m, y]) => {
                const { key: k, checksum: w } = y,
                  O = f.get(w),
                  S = g.get(w);
                return S === void 0
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
                            const I = await fetch(m, {
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
                        index: S,
                        objectType: O.type,
                        objectSize: O.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: k,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: S,
                      };
              })
            );
          };
        e.createUploadPromises = c;
        const u = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((h) => h.promise));
        };
        e.upload = u;
      })(ts)),
    ts
  );
}
var Xn = {},
  jl;
function ym() {
  if (jl) return Xn;
  ((jl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.deleteObjects = void 0));
  const e = Ga(),
    t = ye(),
    r = Zo(),
    a = (0, se().getCallBridge)(),
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
  return ((Xn.deleteObjects = o), Xn);
}
var Qn = {},
  Il;
function _m() {
  if (Il) return Qn;
  ((Il = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.download = void 0));
  const e = Ga(),
    t = ye(),
    r = Zo(),
    a = (0, se().getCallBridge)(),
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
  return ((Qn.download = o), Qn);
}
var Zn = {},
  Tl;
function wm() {
  if (Tl) return Zn;
  ((Tl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.getMetadata = void 0));
  const e = Ga(),
    t = ye(),
    r = Zo(),
    a = (0, se().getCallBridge)(),
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
  return ((Zn.getMetadata = o), Zn);
}
var Ml;
function km() {
  return (
    Ml ||
      ((Ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = mm();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = ym(),
          n = _m(),
          a = wm();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(es)),
    es
  );
}
var Dl;
function Om() {
  return (
    Dl ||
      ((Dl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(km(), e), t.__exportStar(hp(), e));
      })(Zi)),
    Zi
  );
}
var rs = {},
  ea = {},
  ta = {},
  Fl;
function Em() {
  if (Fl) return ta;
  ((Fl = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.Evaluator = void 0));
  class e {
    constructor(r) {
      this.results = r;
    }
    checkFlag(r, n) {
      if (!this.results || !this.results.feature_flags) return n;
      const a = this.results.feature_flags;
      let o = "";
      try {
        o = this.getHashedValue(r);
      } catch (s) {
        return (console.error("Unexpected error occurred while evaluating flag ", s), n);
      }
      if (!o) return n;
      const i = a[o];
      return i ? (i.disabled ? !1 : i.value) : n;
    }
    shutDown() {
      this.results = void 0;
    }
    getHashedValue(r) {
      if (typeof r != "string") return "";
      const n = r.trim();
      if (n.length === 0) return "";
      let a = 5381;
      for (let o = 0; o < n.length; o += 1) {
        const i = n.charCodeAt(o);
        ((a = (a << 5) + a + i), (a |= 0));
      }
      return (a >>> 0).toString();
    }
  }
  return ((ta.Evaluator = e), ta);
}
var ra = {},
  ns = {},
  Ll;
function gp() {
  return (
    Ll ||
      ((Ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = void 0),
          (function (t) {
            t.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(ns)),
    ns
  );
}
var Nl;
function Sm() {
  if (Nl) return ra;
  ((Nl = 1),
    Object.defineProperty(ra, "__esModule", { value: !0 }),
    (ra.trackFeatureFlagEvent = void 0));
  const e = se(),
    t = ye(),
    r = Yo(),
    n = gp(),
    a = 500,
    o = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    s = (u) => {
      if (!u || !u.type || !u.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(u.type.toUpperCase() in n.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(u).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (u) => (s(u), i("trackFeatureFlagEvent", u));
  return (
    (ra.trackFeatureFlagEvent = (0, r.withRateLimiter)(
      c,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    ra
  );
}
var na = {},
  Bl;
function xm() {
  if (Bl) return na;
  ((Bl = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na.initFeatureFlags = void 0));
  const e = se(),
    t = ye(),
    r = Yo(),
    n = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    i = (c) => {
      if (!c || !c.user || !c.config)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(c).some((u) => typeof u == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (c) => (i(c), o("initFeatureFlags", { user: c.user, config: c.config }));
  return (
    (na.initFeatureFlags = (0, r.withRateLimiter)(
      s,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    na
  );
}
var ql;
function Pm() {
  if (ql) return ea;
  ((ql = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.FeatureFlags = void 0));
  const e = Em(),
    t = Sm(),
    r = xm(),
    n = gp();
  class a {
    constructor() {
      ((this.initialized = !1), (this.eventProps = {}));
    }
    async initialize(i, s = { environment: "development" }) {
      if (this.isInitialized()) return;
      this.eventProps.environment = s.environment;
      const c = await (0, r.initFeatureFlags)({ user: i, config: s });
      ((this.initialized = !0), (this.evaluator = new e.Evaluator(c)));
    }
    checkFlag(i, s = !1) {
      if (!this.isInitialized() || !this.evaluator)
        throw (
          this.sendCheckFlagEvent(i, !1),
          new Error("FeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(i, !0), this.evaluator.checkFlag(i, s));
    }
    shutdown() {
      this.isInitialized() && ((this.initialized = !1), this.evaluator.shutDown());
    }
    isInitialized() {
      return this.initialized;
    }
    sendCheckFlagEvent(i, s) {
      const c = {
        type: n.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: i,
          success: s,
        },
      };
      (0, t.trackFeatureFlagEvent)(c);
    }
  }
  return ((ea.FeatureFlags = a), ea);
}
var Ul;
function Cm() {
  return (
    Ul ||
      ((Ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FeatureFlags = void 0));
        var t = Pm();
        Object.defineProperty(e, "FeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.FeatureFlags;
          },
        });
      })(rs)),
    rs
  );
}
var zl;
function Rm() {
  return (
    zl ||
      ((zl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ne;
        var r = pb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ga(), e),
          t.__exportStar(mb(), e),
          t.__exportStar(Qo(), e),
          t.__exportStar(Jb(), e),
          t.__exportStar(Qb(), e),
          t.__exportStar(em(), e),
          t.__exportStar(rm(), e),
          t.__exportStar(nm(), e),
          t.__exportStar(im(), e),
          t.__exportStar(lm(), e),
          (e.i18n = t.__importStar(dm())),
          t.__exportStar(bm(), e),
          t.__exportStar(Om(), e),
          t.__exportStar(Cm(), e));
      })(Ri)),
    Ri
  );
}
var Te = Rm();
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
var Am = {};
function ei() {
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
var bp = Object.assign,
  Ro = Object.getOwnPropertyDescriptor,
  xt = Object.defineProperty,
  ti = Object.prototype,
  Bs = [];
Object.freeze(Bs);
var mp = {};
Object.freeze(mp);
var jm = typeof Proxy < "u",
  Im = Object.toString();
function yp() {
  jm || J("Proxy not available");
}
function _p(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var qr = function () {};
function ft(e) {
  return typeof e == "function";
}
function vr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function ri(e) {
  return e !== null && typeof e == "object";
}
function Qt(e) {
  if (!ri(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Im;
}
function wp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function ni(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function kp(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function _r(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return ri(n) && n[r] === !0;
    }
  );
}
function Qr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function Tm(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function qt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Op = typeof Object.getOwnPropertySymbols < "u";
function Mm(e) {
  var t = Object.keys(e);
  if (!Op) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return ti.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var ai =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Op
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Ep(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function $t(e, t) {
  return ti.hasOwnProperty.call(e, t);
}
var Dm =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      ai(t).forEach(function (n) {
        r[n] = Ro(t, n);
      }),
      r
    );
  };
function ze(e, t) {
  return !!(e & t);
}
function $e(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function $l(e, t) {
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
      Object.defineProperty(e, Nm(n.key), n));
  }
}
function Zr(e, t, r) {
  return (t && Fm(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Ur(e, t) {
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
function pr() {
  return (
    (pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pr.apply(null, arguments)
  );
}
function Sp(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), qs(e, t));
}
function qs(e, t) {
  return (
    (qs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    qs(e, t)
  );
}
function Lm(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Nm(e) {
  var t = Lm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Bm(e, t) {
  if (e) {
    if (typeof e == "string") return $l(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? $l(e, t)
          : void 0
    );
  }
}
var St = Symbol("mobx-stored-annotations");
function Pt(e) {
  function t(r, n) {
    if (Wa(n)) return e.decorate_20223_(r, n);
    Ha(r, n, e);
  }
  return Object.assign(t, e);
}
function Ha(e, t, r) {
  ($t(e, St) || ni(e, St, pr({}, e[St])), Hm(r) || (e[St][t] = r));
}
function qm(e) {
  return ($t(e, St) || ni(e, St, pr({}, e[St])), e[St]);
}
function Wa(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var z = Symbol("mobx administration"),
  er = (function () {
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
        return Up(this);
      }),
      (t.reportChanged = function () {
        (tt(), zp(this), rt());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Zr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return ze(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return ze(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return ze(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
er.isBeingObservedMask_ = 1;
er.isPendingUnobservationMask_ = 2;
er.diffValueMask_ = 4;
var _c = _r("Atom", er);
function xp(e, t, r) {
  (t === void 0 && (t = qr), r === void 0 && (r = qr));
  var n = new er(e);
  return (t !== qr && Xy(n, t), r !== qr && Wp(n, r), n);
}
function Um(e, t) {
  return oh(e, t);
}
function zm(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ao = { structural: Um, default: zm };
function hr(e, t, r) {
  return Xp(e)
    ? e
    : Array.isArray(e)
      ? fe.array(e, { name: r })
      : Qt(e)
        ? fe.object(e, void 0, { name: r })
        : Qr(e)
          ? fe.map(e, { name: r })
          : qt(e)
            ? fe.set(e, { name: r })
            : typeof e == "function" && !Gr(e) && !Ta(e)
              ? wp(e)
                ? Hr(e)
                : Ia(r, e)
              : e;
}
function $m(e, t, r) {
  if (e == null || fi(e) || di(e) || kr(e) || Et(e)) return e;
  if (Array.isArray(e)) return fe.array(e, { name: r, deep: !1 });
  if (Qt(e)) return fe.object(e, void 0, { name: r, deep: !1 });
  if (Qr(e)) return fe.map(e, { name: r, deep: !1 });
  if (qt(e)) return fe.set(e, { name: r, deep: !1 });
}
function oi(e) {
  return e;
}
function Vm(e, t) {
  return oh(e, t) ? t : e;
}
var Gm = "override";
function Hm(e) {
  return e.annotationType_ === Gm;
}
function Ka(e, t) {
  return { annotationType_: e, options_: t, make_: Wm, extend_: Km, decorate_20223_: Ym };
}
function Wm(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Gr(r.value)) return 1;
  var o = Pp(e, this, t, r, !1);
  return (xt(n, t, o), 2);
}
function Km(e, t, r, n) {
  var a = Pp(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Ym(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, p, v;
      return gr(
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
        Gr(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      Gr(e) || (e = i(e)),
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
function Jm(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Pp(e, t, r, n, a) {
  var o, i, s, c, u, l, d;
  (a === void 0 && (a = A.safeDescriptors), Jm(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: gr(
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
function Cp(e, t) {
  return { annotationType_: e, options_: t, make_: Xm, extend_: Qm, decorate_20223_: Zm };
}
function Xm(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!$t(e.target_, t) || !Ta(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ta(r.value)) return 1;
  var o = Rp(e, this, t, r, !1, !1);
  return (xt(n, t, o), 2);
}
function Qm(e, t, r, n) {
  var a,
    o = Rp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Zm(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Ta(e) || (e = Hr(e)),
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
function Rp(e, t, r, n, a, o) {
  (o === void 0 && (o = A.safeDescriptors), ey(e, t, r, n));
  var i = n.value;
  if ((Ta(i) || (i = Hr(i)), a)) {
    var s;
    ((i = i.bind((s = e.proxy_) != null ? s : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function wc(e, t) {
  return { annotationType_: e, options_: t, make_: ty, extend_: ry, decorate_20223_: ny };
}
function ty(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ry(e, t, r, n) {
  return (
    ay(e, this, t, r),
    e.defineComputedProperty_(t, pr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function ny(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = en(this)[z],
        i = pr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new vt(i)));
    }),
    function () {
      return this[z].getObservablePropValue_(n);
    }
  );
}
function ay(e, t, r, n) {
  (t.annotationType_, n.get);
}
function ii(e, t) {
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
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : hr,
      n,
    )
  );
}
function sy(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(s, c) {
    var u,
      l,
      d = en(s)[z],
      p = new dr(
        c,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : hr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, p), o.add(s));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[z].getObservablePropValue_(a));
      },
      set: function (c) {
        return (o.has(this) || i(this, c), this[z].setObservablePropValue_(a, c));
      },
      init: function (c) {
        return (o.has(this) || i(this, c), c);
      },
    };
}
function cy(e, t, r, n) {
  t.annotationType_;
}
var uy = "true",
  ly = Ap();
function Ap(e) {
  return { annotationType_: uy, options_: e, make_: dy, extend_: fy, decorate_20223_: vy };
}
function dy(e, t, r, n) {
  var a, o;
  if (r.get) return si.make_(e, t, r, n);
  if (r.set) {
    var i = Gr(r.set) ? r.set : gr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (xt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (wp(r.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? Hr.bound : Hr;
      return u.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? Ia.bound : Ia;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? fe.ref : fe;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function fy(e, t, r, n) {
  var a, o;
  if (r.get) return si.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: gr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? fe.ref : fe;
  return s.extend_(e, t, r, n);
}
function vy(e, t) {
  J("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var py = "observable",
  hy = "observable.ref",
  gy = "observable.shallow",
  by = "observable.struct",
  jp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(jp);
function ao(e) {
  return e || jp;
}
var Us = ii(py),
  my = ii(hy, { enhancer: oi }),
  yy = ii(gy, { enhancer: $m }),
  _y = ii(by, { enhancer: Vm }),
  Ip = Pt(Us);
function oo(e) {
  return e.deep === !0 ? hr : e.deep === !1 ? oi : ky(e.defaultDecorator);
}
function wy(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Ap(e)) : void 0;
}
function ky(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : hr;
}
function Tp(e, t, r) {
  if (Wa(t)) return Us.decorate_20223_(e, t);
  if (vr(t)) {
    Ha(e, t, Us);
    return;
  }
  return Xp(e)
    ? e
    : Qt(e)
      ? fe.object(e, t, r)
      : Array.isArray(e)
        ? fe.array(e, t)
        : Qr(e)
          ? fe.map(e, t)
          : qt(e)
            ? fe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : fe.box(e, t);
}
bp(Tp, Ip);
var Oy = {
    box: function (t, r) {
      var n = ao(r);
      return new dr(t, oo(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = ao(r);
      return (A.useProxies === !1 || n.proxy === !1 ? w_ : d_)(t, oo(n), n.name);
    },
    map: function (t, r) {
      var n = ao(r);
      return new Zp(t, oo(n), n.name);
    },
    set: function (t, r) {
      var n = ao(r);
      return new eh(t, oo(n), n.name);
    },
    object: function (t, r, n) {
      return Or(function () {
        return t_(A.useProxies === !1 || n?.proxy === !1 ? en({}, n) : c_({}, n), t, r);
      });
    },
    ref: Pt(my),
    shallow: Pt(yy),
    deep: Ip,
    struct: Pt(_y),
  },
  fe = bp(Tp, Oy),
  Mp = "computed",
  Ey = "computed.struct",
  zs = wc(Mp),
  Sy = wc(Ey, { equals: Ao.structural }),
  si = function (t, r) {
    if (Wa(r)) return zs.decorate_20223_(t, r);
    if (vr(r)) return Ha(t, r, zs);
    if (Qt(t)) return Pt(wc(Mp, t));
    var n = Qt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new vt(n));
  };
Object.assign(si, zs);
si.struct = Pt(Sy);
var Vl,
  Gl,
  jo = 0,
  xy = 1,
  Py =
    (Vl = (Gl = Ro(function () {}, "name")) == null ? void 0 : Gl.configurable) != null ? Vl : !1,
  Hl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function gr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return Cy(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    Py && ((Hl.value = e), xt(a, "name", Hl)),
    a
  );
}
function Cy(e, t, r, n, a) {
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
    i = A.trackingDerivation,
    s = !t || !i;
  tt();
  var c = A.allowStateChanges;
  s && (wr(), (c = ci(!0)));
  var u = kc(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: i,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: xy++,
      parentActionId_: jo,
    };
  return ((jo = l.actionId_), l);
}
function Ay(e) {
  (jo !== e.actionId_ && J(30),
    (jo = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    ui(e.prevAllowStateChanges_),
    ka(e.prevAllowStateReads_),
    rt(),
    e.runAsAction_ && Vt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function jy(e, t) {
  var r = ci(e);
  try {
    return t();
  } finally {
    ui(r);
  }
}
function ci(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function ui(e) {
  A.allowStateChanges = e;
}
var dr = (function (e) {
    function t(n, a, o, i, s) {
      var c;
      return (
        o === void 0 && (o = "ObservableValue"),
        s === void 0 && (s = Ao.default),
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
    Sp(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== A.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Ze(this)) {
          var o = et(this, { object: this, type: Ct, newValue: a });
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
          lt(this) && dt(this, { type: Ct, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Ya(this, a);
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
          Ja(this, a)
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
        return Ep(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(er),
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
        (this.value_ = new To(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Io.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || J(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = gr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Ao.structural : Ao.default)),
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
          (this.isComputing && J(32, this.name_, this.derivation),
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          $s(this) &&
            (this.warnAboutUntrackedRead_(), tt(), (this.value_ = this.computeValue_(!1)), rt());
        else if ((Up(this), $s(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && Dy(this),
            (A.trackingContext = n));
        }
        var a = this.value_;
        if (mo(a)) throw a.cause;
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
          i = a || mo(n) || mo(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = ci(!1),
          o;
        if (n) o = Dp(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new To(i);
          }
        return (ui(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Vs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          s = void 0;
        return Hy(function () {
          var c = o.get();
          if (!i || a) {
            var u = wr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Ct,
              object: o,
              newValue: c,
              oldValue: s,
            }),
              Vt(u));
          }
          ((i = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Ep(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Zr(e, [
        {
          key: "isComputing",
          get: function () {
            return ze(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return ze(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return ze(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return ze(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return ze(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = $e(this.flags_, e.diffValueMask_, n === 1);
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
var li = _r("ComputedValue", vt),
  Q;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Q || (Q = {}));
var Io;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Io || (Io = {}));
var To = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function mo(e) {
  return e instanceof To;
}
function $s(e) {
  switch (e.dependenciesState_) {
    case Q.UP_TO_DATE_:
      return !1;
    case Q.NOT_TRACKING_:
    case Q.STALE_:
      return !0;
    case Q.POSSIBLY_STALE_: {
      for (var t = kc(!0), r = wr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (li(i)) {
          if (A.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Vt(r), ka(t), !0);
            }
          if (e.dependenciesState_ === Q.STALE_) return (Vt(r), ka(t), !0);
        }
      }
      return (Lp(e), Vt(r), ka(t), !1);
    }
  }
}
function Dp(e, t, r) {
  var n = kc(!0);
  (Lp(e),
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
      o = new To(i);
    }
  return (A.inBatch--, (A.trackingDerivation = a), Iy(e), ka(n), o);
}
function Iy(e) {
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
    var s = r[i];
    (s.diffValue === 0 && ((s.diffValue = 1), a !== i && (r[a] = s), a++),
      s.dependenciesState_ > n && (n = s.dependenciesState_));
  }
  for (r.length = a, e.newObserving_ = null, o = t.length; o--; ) {
    var c = t[o];
    (c.diffValue === 0 && Bp(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), My(u, e));
  }
  n !== Q.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Vs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Bp(t[r], e);
  e.dependenciesState_ = Q.NOT_TRACKING_;
}
function Fp(e) {
  var t = wr();
  try {
    return e();
  } finally {
    Vt(t);
  }
}
function wr() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Vt(e) {
  A.trackingDerivation = e;
}
function kc(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function ka(e) {
  A.allowStateReads = e;
}
function Lp(e) {
  if (e.dependenciesState_ !== Q.UP_TO_DATE_) {
    e.dependenciesState_ = Q.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Q.UP_TO_DATE_;
  }
}
var yo = function () {
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
  _o = !0,
  Np = !1,
  A = (function () {
    var e = ei();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (_o = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new yo().version && (_o = !1),
      _o
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new yo()))
        : (setTimeout(function () {
            Np || J(35);
          }, 1),
          new yo())
    );
  })();
function Ty() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && J(36), (Np = !0), _o)) {
    var e = ei();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new yo()));
  }
}
function My(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Bp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && qp(e));
}
function qp(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function tt() {
  A.inBatch++;
}
function rt() {
  if (--A.inBatch === 0) {
    $p();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof vt && r.suspend_()));
    }
    A.pendingUnobservations = [];
  }
}
function Up(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && qp(e), !1);
}
function zp(e) {
  e.lowestObserverState_ !== Q.STALE_ &&
    ((e.lowestObserverState_ = Q.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Q.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Q.STALE_));
    }));
}
function Dy(e) {
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
var It = (function () {
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
      (this.isTracing_ = Io.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), $p());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (tt(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), $s(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((A.trackingContext = n), rt());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (tt(), (this.isRunning = !0));
        var a = A.trackingContext;
        A.trackingContext = this;
        var o = Dp(this, n, void 0);
        ((A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Vs(this),
          mo(o) && this.reportExceptionInDerivation_(o.cause),
          rt());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (tt(), Vs(this), rt()));
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
    Zr(e, [
      {
        key: "isDisposed",
        get: function () {
          return ze(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return ze(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return ze(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return ze(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return ze(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = $e(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
It.isDisposedMask_ = 1;
It.isScheduledMask_ = 2;
It.isTrackPendingMask_ = 4;
It.isRunningMask_ = 8;
It.diffValueMask_ = 16;
var Ly = 100,
  Gs = function (t) {
    return t();
  };
function $p() {
  A.inBatch > 0 || A.isRunningReactions || Gs(Ny);
}
function Ny() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Ly && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var Mo = _r("Reaction", It);
function By(e) {
  var t = Gs;
  Gs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Oa() {
  return !1;
}
function qy(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Vp = "action",
  Uy = "action.bound",
  Gp = "autoAction",
  zy = "autoAction.bound",
  $y = "<unnamed action>",
  Hs = Ka(Vp),
  Vy = Ka(Uy, { bound: !0 }),
  Ws = Ka(Gp, { autoAction: !0 }),
  Gy = Ka(zy, { autoAction: !0, bound: !0 });
function Hp(e) {
  var t = function (n, a) {
    if (ft(n)) return gr(n.name || $y, n, e);
    if (ft(a)) return gr(n, a, e);
    if (Wa(a)) return (e ? Ws : Hs).decorate_20223_(n, a);
    if (vr(a)) return Ha(n, a, e ? Ws : Hs);
    if (vr(n)) return Pt(Ka(e ? Gp : Vp, { name: n, autoAction: e }));
  };
  return t;
}
var nt = Hp(!1);
Object.assign(nt, Hs);
var Ia = Hp(!0);
Object.assign(Ia, Ws);
nt.bound = Pt(Vy);
Ia.bound = Pt(Gy);
function Gr(e) {
  return ft(e) && e.isMobxAction === !0;
}
function Hy(e, t) {
  var r, n, a, o;
  t === void 0 && (t = mp);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new It(
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
    c = new It(
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
var Yy = "onBO",
  Jy = "onBUO";
function Xy(e, t, r) {
  return Kp(Yy, e, t, r);
}
function Wp(e, t, r) {
  return Kp(Jy, e, t, r);
}
function Kp(e, t, r, n) {
  var a = Lo(t),
    o = ft(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var s = a[i];
      s && (s.delete(o), s.size === 0 && delete a[i]);
    }
  );
}
var Qy = "never",
  io = "always",
  Zy = "observed";
function e_(e) {
  e.isolateGlobalState === !0 && Ty();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === io ? !0 : t === Qy ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === io ? io : r === Zy;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === io)));
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
    e.reactionScheduler && By(e.reactionScheduler));
}
function t_(e, t, r, n) {
  var a = Dm(t);
  return (
    Or(function () {
      var o = en(e, n)[z];
      ai(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function r_(e, t) {
  return Yp(Lo(e, t));
}
function Yp(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = n_(e.observing_).map(Yp)),
    t
  );
}
function n_(e) {
  return Array.from(new Set(e));
}
var a_ = 0;
function Jp() {
  this.message = "FLOW_CANCELLED";
}
Jp.prototype = Object.create(Error.prototype);
var as = Cp("flow"),
  o_ = Cp("flow.bound", { bound: !0 }),
  Hr = Object.assign(function (t, r) {
    if (Wa(r)) return as.decorate_20223_(t, r);
    if (vr(r)) return Ha(t, r, as);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          c = arguments,
          u = ++a_,
          l = nt(a + " - runid: " + u + " - init", n).apply(s, c),
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
              y(w);
            }
            function m(k) {
              p = void 0;
              var w;
              try {
                w = nt(a + " - runid: " + u + " - yield " + g++, l.throw).call(l, k);
              } catch (O) {
                return f(O);
              }
              y(w);
            }
            function y(k) {
              if (ft(k?.then)) {
                k.then(y, f);
                return;
              }
              return k.done ? h(k.value) : ((p = Promise.resolve(k.value)), p.then(b, m));
            }
            b(void 0);
          });
        return (
          (v.cancel = nt(a + " - runid: " + u + " - cancel", function () {
            try {
              p && Wl(p);
              var h = l.return(void 0),
                f = Promise.resolve(h.value);
              (f.then(qr, qr), Wl(f), d(new Jp()));
            } catch (g) {
              d(g);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, as);
Hr.bound = Pt(o_);
function Wl(e) {
  ft(e.cancel) && e.cancel();
}
function Ta(e) {
  return e?.isMobXFlow === !0;
}
function i_(e, t) {
  return e ? fi(e) || !!e[z] || _c(e) || Mo(e) || li(e) : !1;
}
function Xp(e) {
  return i_(e);
}
function Ut(e, t) {
  (t === void 0 && (t = void 0), tt());
  try {
    return e.apply(t);
  } finally {
    rt();
  }
}
function Rr(e) {
  return e[z];
}
var s_ = {
  has: function (t, r) {
    return Rr(t).has_(r);
  },
  get: function (t, r) {
    return Rr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return vr(r) ? ((a = Rr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return vr(r) ? ((n = Rr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Rr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Rr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    J(13);
  },
};
function c_(e, t) {
  var r, n;
  return (
    yp(),
    (e = en(e, t)),
    (n = (r = e[z]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, s_))
  );
}
function Ze(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ya(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    _p(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function et(e, t) {
  var r = wr();
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
function Ja(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    _p(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function dt(e, t) {
  var r = wr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Vt(r);
  }
}
function Oc(e, t, r) {
  return (
    Or(function () {
      var n,
        a = en(e, r)[z];
      ((n = t) != null || (t = qm(e)),
        ai(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var Kl = "splice",
  Ct = "update",
  u_ = 1e4,
  l_ = {
    get: function (t, r) {
      var n = t[z];
      return r === z
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : $t(Do, r)
              ? Do[r]
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
      J(15);
    },
  },
  Ec = (function () {
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
        (this.atom_ = new er(r)),
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
        return Ya(this, n);
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
          Ja(this, n)
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
          this.legacyMode_ && a > 0 && ah(n + a + 1));
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
          o === void 0 && (o = Bs),
          Ze(this))
        ) {
          var c = et(this, { object: this.proxy_, type: Kl, index: n, removedCount: a, added: o });
          if (!c) return Bs;
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
        if (o.length < u_) {
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
        var i = !this.owned_ && Oa(),
          s = lt(this),
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
        (this.atom_.reportChanged(), s && dt(this, c));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && Oa(),
          s = lt(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Kl,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && dt(this, c));
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
            var s = et(this, { type: Ct, object: this.proxy_, index: n, newValue: a });
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
function d_(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    yp(),
    Or(function () {
      var a = new Ec(r, t, n, !1);
      kp(a.values_, z, a);
      var o = new Proxy(a.values_, l_);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Do = {
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
    return (A.trackingDerivation && J(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && J(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[z],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
le("at", He);
le("concat", He);
le("flat", He);
le("includes", He);
le("indexOf", He);
le("join", He);
le("lastIndexOf", He);
le("slice", He);
le("toString", He);
le("toLocaleString", He);
le("toSorted", He);
le("toSpliced", He);
le("with", He);
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
le("reduce", Qp);
le("reduceRight", Qp);
function le(e, t) {
  typeof Array.prototype[e] == "function" && (Do[e] = t(e));
}
function He(e) {
  return function () {
    var t = this[z];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function pt(e) {
  return function (t, r) {
    var n = this,
      a = this[z];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, s) {
      return t.call(r, i, s, n);
    });
  };
}
function Qp(e) {
  return function () {
    var t = this,
      r = this[z];
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
var f_ = _r("ObservableArrayAdministration", Ec);
function di(e) {
  return ri(e) && f_(e[z]);
}
var v_ = {},
  Jt = "add",
  Fo = "delete",
  Zp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = hr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[z] = v_),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        ft(Map) || J(18),
        Or(function () {
          ((o.keysAtom_ = xp("ObservableMap.keys()")),
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
          var i = (o = new dr(this.has_(n), oi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Wp(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (Ze(this)) {
          var i = et(this, { type: o ? Ct : Jt, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Ze(this))) {
          var o = et(this, { type: Fo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Oa(),
            s = lt(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Fo,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Ut(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            s && dt(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var i = Oa(),
            s = lt(this),
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
          (o.setNewValue_(a), s && dt(this, c));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Ut(function () {
            var u,
              l = new dr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = Oa(),
          s = lt(this),
          c =
            s || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Jt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        s && dt(this, c);
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
        return Yl({
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
        return Yl({
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
        for (var o = Ur(this), i; !(i = o()).done; ) {
          var s = i.value,
            c = s[0],
            u = s[1];
          n.call(a, u, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          kr(n) && (n = new Map(n)),
          Ut(function () {
            Qt(n)
              ? Mm(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      s = o[1];
                    return a.set(i, s);
                  })
                : Qr(n)
                  ? (Tm(n) || J(19, n),
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
        Ut(function () {
          Fp(function () {
            for (var a = Ur(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Ut(function () {
            for (
              var o = p_(n), i = new Map(), s = !1, c = Ur(a.data_.keys()), u;
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
            for (var v = Ur(o.entries()), h; !(h = v()).done; ) {
              var f = h.value,
                g = f[0],
                b = f[1],
                m = a.data_.has(g);
              if ((a.set(g, b), a.data_.has(g))) {
                var y = a.data_.get(g);
                (i.set(g, y), m || (s = !0));
              }
            }
            if (!s)
              if (a.data_.size !== i.size) a.keysAtom_.reportChanged();
              else
                for (var k = a.data_.keys(), w = i.keys(), O = k.next(), S = w.next(); !O.done; ) {
                  if (O.value !== S.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((O = k.next()), (S = w.next()));
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
        return Ja(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ya(this, n);
      }),
      Zr(e, [
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
  kr = _r("ObservableMap", Zp);
function Yl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), xc(e));
}
function p_(e) {
  if (Qr(e) || kr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Qt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return J(21, e);
}
var h_ = {},
  eh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = hr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[z] = h_),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        ft(Set) || J(22),
        (this.enhancer_ = function (i, s) {
          return n(i, s, a);
        }),
        Or(function () {
          ((o.atom_ = xp(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Ut(function () {
          Fp(function () {
            for (var a = Ur(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Ur(this), i; !(i = o()).done; ) {
          var s = i.value;
          n.call(a, s, s, this);
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
          Ut(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            s = lt(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Jt,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && dt(this, c);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Ze(this)) {
          var o = et(this, { type: Fo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            s = lt(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Fo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Ut(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && dt(this, c),
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
        return Jl({
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
        return Jl({
          next: function () {
            var i = a.next(),
              s = i.value,
              c = i.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (qt(n) && !Et(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (qt(n) && !Et(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (qt(n) && !Et(n)) return n.symmetricDifference(this);
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
        if (qt(n) && !Et(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Et(n) && (n = new Set(n)),
          Ut(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : qt(n)
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
        return Ja(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ya(this, n);
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
      Zr(e, [
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
  Et = _r("ObservableSet", eh);
function Jl(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), xc(e));
}
var Xl = Object.create(null),
  Ql = "remove",
  th = (function () {
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
        (this.keysAtom_ = new er("ObservableObject.keys")),
        (this.isPlainObject_ = Qt(this.target_)));
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
          var i = et(this, { type: Ct, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var s = lt(this),
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
          (o.setNewValue_(a), s && dt(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !$t(this.target_, n) && this.has_(n), this.target_[n]);
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
        if (!A.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new dr(n in this.target_, oi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[St]) != null && o[n]) return;
            J(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== ti; ) {
            var s = Ro(i, n);
            if (s) {
              var c = a.make_(this, n, s, i);
              if (c === 0) return;
              if (c === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          ed(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var s = o.extend_(this, n, a, i);
        return (s && ed(this, o, n), s);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          tt();
          var i = this.delete_(n);
          if (!i) return i;
          if (Ze(this)) {
            var s = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Jt,
              newValue: a.value,
            });
            if (!s) return null;
            var c = s.newValue;
            a.value !== c && (a = pr({}, a, { value: c }));
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
          var s = this.delete_(n);
          if (!s) return s;
          if (Ze(this)) {
            var c = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Jt,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var u = Zl(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else xt(this.target_, n, l);
          var d = new dr(a, o, "ObservableObject.key", !1);
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
            var s = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Jt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var c = Zl(n),
            u = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
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
          var o = et(this, { object: this.proxy_ || this.target_, name: n, type: Ql });
          if (!o) return null;
        }
        try {
          var i;
          tt();
          var s = lt(this),
            c = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (s || c)) {
            var d;
            l = (d = Ro(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof dr && (l = u.value_), zp(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            s || c)
          ) {
            var p = {
              type: Ql,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && dt(this, p);
          }
        } finally {
          rt();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Ja(this, n);
      }),
      (t.intercept_ = function (n) {
        return Ya(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = lt(this),
          s = !1;
        if (i || s) {
          var c =
            i || s
              ? {
                  type: Jt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && dt(this, c);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), ai(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function en(e, t) {
  var r;
  if ($t(e, z)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new th(e, new Map(), String(n), wy(t));
  return (ni(e, z, a), e);
}
var g_ = _r("ObservableObjectAdministration", th);
function Zl(e) {
  return (
    Xl[e] ||
    (Xl[e] = {
      get: function () {
        return this[z].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[z].setObservablePropValue_(e, r);
      },
    })
  );
}
function fi(e) {
  return ri(e) ? g_(e[z]) : !1;
}
function ed(e, t, r) {
  var n;
  (n = e.target_[St]) == null || delete n[r];
}
var b_ = nh(0),
  m_ = (function () {
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
  os = 0,
  rh = function () {};
function y_(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
y_(rh, Array.prototype);
var Sc = (function (e) {
  function t(n, a, o, i) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (s = e.call(this) || this),
      Or(function () {
        var c = new Ec(o, a, i, !0);
        ((c.proxy_ = s),
          kp(s, z, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          m_ && Object.defineProperty(s, "0", b_));
      }),
      s
    );
  }
  Sp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[z].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return di(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return xc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Zr(t, [
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
})(rh);
Object.entries(Do).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && ni(Sc.prototype, t, r);
});
function nh(e) {
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
function __(e) {
  xt(Sc.prototype, "" + e, nh(e));
}
function ah(e) {
  if (e > os) {
    for (var t = os; t < e + 100; t++) __(t);
    os = e;
  }
}
ah(1e3);
function w_(e, t, r) {
  return new Sc(e, t, r);
}
function Lo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (di(e)) return (t !== void 0 && J(23), e[z].atom_);
    if (Et(e)) return e.atom_;
    if (kr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || J(25, t, Ks(e)), r);
    }
    if (fi(e)) {
      if (!t) return J(26);
      var n = e[z].values_.get(t);
      return (n || J(27, t, Ks(e)), n);
    }
    if (_c(e) || li(e) || Mo(e)) return e;
  } else if (ft(e) && Mo(e[z])) return e[z];
  J(28);
}
function k_(e, t) {
  if ((e || J(29), _c(e) || li(e) || Mo(e) || kr(e) || Et(e))) return e;
  if (e[z]) return e[z];
  J(24, e);
}
function Ks(e, t) {
  var r;
  if (t !== void 0) r = Lo(e, t);
  else {
    if (Gr(e)) return e.name;
    fi(e) || kr(e) || Et(e) ? (r = k_(e)) : (r = Lo(e));
  }
  return r.name_;
}
function Or(e) {
  var t = wr(),
    r = ci(!0);
  tt();
  try {
    return e();
  } finally {
    (rt(), ui(r), Vt(t));
  }
}
var td = ti.toString;
function oh(e, t, r) {
  return (r === void 0 && (r = -1), Ys(e, t, r));
}
function Ys(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = td.call(e);
  if (i !== td.call(t)) return !1;
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
  ((e = rd(e)), (t = rd(t)));
  var s = i === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      u = t.constructor;
    if (
      c !== u &&
      !(ft(c) && c instanceof c && ft(u) && u instanceof u) &&
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
    for (; l--; ) if (!Ys(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var h = d[v];
      if (!($t(t, h) && Ys(e[h], t[h], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function rd(e) {
  return di(e) ? e.slice() : Qr(e) || kr(e) || qt(e) || Et(e) ? Array.from(e.entries()) : e;
}
var nd,
  O_ = ((nd = ei().Iterator) == null ? void 0 : nd.prototype) || {};
function xc(e) {
  return ((e[Symbol.iterator] = E_), Object.assign(Object.create(O_), e));
}
function E_() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = ei();
  typeof t[e] > "u" && J("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: qy, extras: { getDebugName: Ks }, $mobx: z });
var _ = yr();
const E = Zt(_),
  ad = sb({ __proto__: null, default: E }, [_]);
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Oc) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function S_(e) {
  e();
}
function x_(e) {
  (e || (e = S_), e_({ reactionScheduler: e }));
}
function P_(e) {
  return r_(e);
}
var C_ = 1e4,
  R_ = 1e4,
  A_ = (function () {
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
            (n === void 0 && (n = C_), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, R_));
        },
      }),
      e
    );
  })(),
  j_ = typeof FinalizationRegistry < "u" ? FinalizationRegistry : A_,
  Ma = new j_(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  is = { exports: {} },
  ss = {};
var od;
function I_() {
  if (od) return ss;
  od = 1;
  var e = yr();
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
      h = n({ inst: { value: v, getSnapshot: p } }),
      f = h[0].inst,
      g = h[1];
    return (
      o(
        function () {
          ((f.value = v), (f.getSnapshot = p), c(f) && g({ inst: f }));
        },
        [d, v, p],
      ),
      a(
        function () {
          return (
            c(f) && g({ inst: f }),
            d(function () {
              c(f) && g({ inst: f });
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
    (ss.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    ss
  );
}
var id;
function T_() {
  return (id || ((id = 1), (is.exports = I_())), is.exports);
}
var M_ = T_();
function sd(e) {
  e.reaction = new It("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function D_(e, t) {
  t === void 0 && (t = "observed");
  var r = E.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          Ma.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (sd(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (sd(a), Ma.register(r, a, a)),
    E.useDebugValue(a.reaction, P_),
    M_.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var cs,
  us,
  ih = typeof Symbol == "function" && Symbol.for,
  F_ =
    (us =
      (cs = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || cs === void 0
        ? void 0
        : cs.configurable) !== null && us !== void 0
      ? us
      : !1,
  cd = ih
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  ud = ih
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function L_(e, t) {
  var r;
  if (ud && e.$$typeof === ud)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (cd && e.$$typeof === cd && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (s, c) {
    return D_(function () {
      return a(s, c);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    F_ && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = _.forwardRef(i)),
    (i = _.memo(i)),
    B_(e, i),
    i
  );
}
var N_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function B_(e, t) {
  Object.keys(e).forEach(function (r) {
    N_[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var ls;
x_(Wo.unstable_batchedUpdates);
ls = Ma.finalizeAllImmediately;
function q_(e, t) {
  if (ld(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !ld(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function ld(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var dd = Symbol("patchMixins"),
  sh = Symbol("patchedDefinition");
function U_(e, t) {
  var r = (e[dd] = e[dd] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function fd(e, t) {
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
function vd(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    fd.call.apply(fd, [this, e, t].concat(o));
  };
  return r;
}
function z_(e, t, r) {
  var n = U_(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[sh])) {
    var o = e[t],
      i = ch(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function ch(e, t, r, n, a) {
  var o,
    i = vd(a, n);
  return (
    (o = {}),
    (o[sh] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (c) {
      if (this === e) i = vd(c, n);
      else {
        var u = ch(this, t, r, n, c);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var pd = Symbol("ObserverAdministration"),
  hd = Symbol("isMobXReactObserver");
function Js(e) {
  var t;
  return (t = e[pd]) != null
    ? t
    : (e[pd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Xs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function $_(e) {
  var t = e.prototype;
  if (e[hd]) {
    var r = Xs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[hd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = gd;
    else if (t.shouldComponentUpdate !== gd)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Xs(e);
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
        value: V_.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        s = Js(this);
      return (
        (s.mounted = !0),
        Ma.unregister(this),
        (s.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    z_(t, "componentWillUnmount", function () {
      var i,
        s = Js(this);
      ((i = s.reaction) == null || i.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Xs(e) {
  return e.displayName || e.name || "<component>";
}
function V_(e) {
  var t = e.bind(this),
    r = Js(this);
  function n() {
    r.reaction || ((r.reaction = G_(r)), r.mounted || Ma.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = jy(!1, t);
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
function G_(e) {
  return new It(e.name + ".render()", function () {
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
function gd(e, t) {
  return this.state !== t ? !0 : !q_(this.props, e);
}
function vi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? $_(e)
      : L_(e)
  );
}
function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Qs.apply(null, arguments)
  );
}
function H_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var W_ = ["children"],
  bd = E.createContext({});
function uh(e) {
  var t = e.children,
    r = H_(e, W_),
    n = E.useContext(bd),
    a = E.useRef(Qs({}, n, r)),
    o = a.current;
  return E.createElement(bd.Provider, { value: o }, t);
}
uh.displayName = "MobXProvider";
E.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!fe) throw new Error("mobx-react requires mobx to be available");
var K_ = Object.defineProperty,
  Y_ = Object.getOwnPropertyDescriptor,
  Mt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Y_(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && K_(t, r, a), a);
  };
class ht {
  constructor() {
    ((this.isLoading = !1), Oc(this));
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
Mt([fe], ht.prototype, "isLoading", 2);
Mt([fe], ht.prototype, "plan", 2);
Mt([fe], ht.prototype, "planString", 2);
Mt([fe], ht.prototype, "slowQueries", 2);
Mt([fe], ht.prototype, "history", 2);
Mt([nt.bound], ht.prototype, "showPlan", 1);
Mt([nt.bound], ht.prototype, "saveSlowQuery", 1);
Mt([nt.bound], ht.prototype, "saveHistory", 1);
Mt([nt], ht.prototype, "loading", 1);
Mt([nt], ht.prototype, "stopLoading", 1);
const J_ = new ht();
var X_ = Object.defineProperty,
  Q_ = Object.getOwnPropertyDescriptor,
  Pc = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Q_(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && X_(t, r, a), a);
  };
class pi {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), Oc(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
Pc([fe], pi.prototype, "state", 2);
Pc([fe], pi.prototype, "lastState", 2);
Pc([nt.bound], pi.prototype, "saveState", 1);
const Cc = new pi();
class Z_ {
  constructor() {
    ((this.usersStore = J_), (this.stateStore = Cc));
  }
}
const lh = new Z_(),
  e0 = _.createContext(lh),
  hi = () => _.useContext(e0);
function he(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ke(e) {
  "@babel/helpers - typeof";
  return (
    (ke =
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
    ke(e)
  );
}
function t0(e, t) {
  if (ke(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ke(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function dh(e) {
  var t = t0(e, "string");
  return ke(t) == "symbol" ? t : t + "";
}
function md(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, dh(n.key), n));
  }
}
function ge(e, t, r) {
  return (
    t && md(e.prototype, t),
    r && md(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function r0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function We(e, t) {
  if (t && (ke(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return r0(e);
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
function Da(e, t) {
  return (
    (Da = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Da(e, t)
  );
}
function Ke(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Da(e, t));
}
function x(e, t, r) {
  return (
    (t = dh(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function xe() {}
function n0(e) {
  if (Array.isArray(e)) return e;
}
function a0(e, t) {
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
function Zs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fh(e, t) {
  if (e) {
    if (typeof e == "string") return Zs(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Zs(e, t)
          : void 0
    );
  }
}
function o0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e, t) {
  return n0(e) || a0(e, t) || fh(e, t) || o0();
}
var vh = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  i0 = function (t) {
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
  No = function (t, r) {
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
  s0 = function (t, r, n) {
    return t ? { width: r } : {};
  },
  yd = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  c0 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var s = yd(i, n, a),
      c = yd(o.index, n, a),
      u = r.slice(),
      l = u.splice(s, 1),
      d = H(l, 1),
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
function u0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function ue(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = u0(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function _d(e, t) {
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
function ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _d(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var l0 = (function () {
  function e(t) {
    var r = this;
    (he(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = ds({}, r.payload);
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
          ke(r) === "object" && (this.payload = ds(ds({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function d0(e) {
  if (Array.isArray(e)) return Zs(e);
}
function f0(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function v0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function we(e) {
  return d0(e) || f0(e) || fh(e) || v0();
}
function p0(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Z(e)) !== null; );
  return e;
}
function Bo() {
  return (
    (Bo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = p0(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Bo.apply(null, arguments)
  );
}
function h0(e, t, r) {
  return (
    (t = Z(t)),
    We(e, ph() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function ph() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ph = function () {
    return !!e;
  })();
}
function g0(e, t, r, n) {
  var a = Bo(Z(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var b0 = (function (e) {
  function t(r) {
    var n;
    return (
      he(this, t),
      (n = h0(this, t, [r])),
      x(n, "_isUIAnalyticsEvent", !0),
      x(n, "clone", function () {
        if (n.hasFired) return null;
        var a = we(n.context),
          o = we(n.handlers),
          i = JSON.parse(JSON.stringify(n.payload));
        return new t({ context: a, handlers: o, payload: i });
      }),
      x(n, "fire", function (a) {
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
          return this.hasFired ? this : g0(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(l0);
function wd(e, t, r, n, a, o, i) {
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
        wd(o, n, a, i, s, "next", c);
      }
      function s(c) {
        wd(o, n, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var fs = { exports: {} },
  vs = { exports: {} },
  kd;
function hh() {
  return (
    kd ||
      ((kd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(vs)),
    vs.exports
  );
}
var ps = { exports: {} },
  hs = { exports: {} },
  Od;
function gh() {
  return (
    Od ||
      ((Od = 1),
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
              function p(v, h) {
                t(c, v, function (f) {
                  return this._invoke(v, h, f);
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
      })(hs)),
    hs.exports
  );
}
var Ed;
function bh() {
  return (
    Ed ||
      ((Ed = 1),
      (function (e) {
        var t = gh();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.toStringTag || "@@toStringTag";
          function c(g, b, m, y) {
            var k = b && b.prototype instanceof l ? b : l,
              w = Object.create(k.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (O, S, j) {
                  var I,
                    C,
                    T,
                    q = 0,
                    V = j || [],
                    $ = !1,
                    W = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: L,
                      f: L.bind(n, 4),
                      d: function (B, U) {
                        return ((I = B), (C = 0), (T = n), (W.n = U), u);
                      },
                    };
                  function L(K, B) {
                    for (C = K, T = B, a = 0; !$ && q && !U && a < V.length; a++) {
                      var U,
                        G = V[a],
                        ae = W.p,
                        ie = G[2];
                      K > 3
                        ? (U = ie === B) &&
                          ((T = G[(C = G[4]) ? 5 : ((C = 3), 3)]), (G[4] = G[5] = n))
                        : G[0] <= ae &&
                          ((U = K < 2 && ae < G[1])
                            ? ((C = 0), (W.v = B), (W.n = G[1]))
                            : ae < ie &&
                              (U = K < 3 || G[0] > B || B > ie) &&
                              ((G[4] = K), (G[5] = B), (W.n = ie), (C = 0)));
                    }
                    if (U || K > 1) return u;
                    throw (($ = !0), B);
                  }
                  return function (K, B, U) {
                    if (q > 1) throw TypeError("Generator is already running");
                    for ($ && B === 1 && L(B, U), C = B, T = U; (a = C < 2 ? n : T) || !$; ) {
                      I || (C ? (C < 3 ? (C > 1 && (W.n = -1), L(C, T)) : (W.n = T)) : (W.v = T));
                      try {
                        if (((q = 2), I)) {
                          if ((C || (K = "next"), (a = I[K]))) {
                            if (!(a = a.call(I, T)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((T = a.value), C < 2 && (C = 0));
                          } else
                            (C === 1 && (a = I.return) && a.call(I),
                              C < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + K + "' method",
                                )),
                                (C = 1)));
                          I = n;
                        } else if ((a = ($ = W.n < 0) ? T : O.call(S, W)) !== u) break;
                      } catch (G) {
                        ((I = n), (C = 1), (T = G));
                      } finally {
                        q = 1;
                      }
                    }
                    return { value: a, done: $ };
                  };
                })(g, m, y),
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
                : ((g.__proto__ = p), t(g, s, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = p),
            t(h, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, s, "GeneratorFunction"),
            t(h),
            t(h, s, "Generator"),
            t(h, i, function () {
              return this;
            }),
            t(h, "toString", function () {
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
      })(ps)),
    ps.exports
  );
}
var gs = { exports: {} },
  bs = { exports: {} },
  ms = { exports: {} },
  Sd;
function mh() {
  return (
    Sd ||
      ((Sd = 1),
      (function (e) {
        var t = hh(),
          r = gh();
        function n(a, o) {
          function i(c, u, l, d) {
            try {
              var p = a[c](u),
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
      })(ms)),
    ms.exports
  );
}
var xd;
function yh() {
  return (
    xd ||
      ((xd = 1),
      (function (e) {
        var t = bh(),
          r = mh();
        function n(a, o, i, s, c) {
          return new r(t().w(a, o, i, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(bs)),
    bs.exports
  );
}
var Pd;
function m0() {
  return (
    Pd ||
      ((Pd = 1),
      (function (e) {
        var t = yh();
        function r(n, a, o, i, s) {
          var c = t(n, a, o, i, s);
          return c.next().then(function (u) {
            return u.done ? u.value : c.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(gs)),
    gs.exports
  );
}
var ys = { exports: {} },
  Cd;
function y0() {
  return (
    Cd ||
      ((Cd = 1),
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
      })(ys)),
    ys.exports
  );
}
var _s = { exports: {} },
  ws = { exports: {} },
  Rd;
function _0() {
  return (
    Rd ||
      ((Rd = 1),
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
      })(ws)),
    ws.exports
  );
}
var Ad;
function w0() {
  return (
    Ad ||
      ((Ad = 1),
      (function (e) {
        var t = _0().default;
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
      })(_s)),
    _s.exports
  );
}
var jd;
function k0() {
  return (
    jd ||
      ((jd = 1),
      (function (e) {
        var t = hh(),
          r = bh(),
          n = m0(),
          a = yh(),
          o = mh(),
          i = y0(),
          s = w0();
        function c() {
          var u = r(),
            l = u.m(c),
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
                    return ((g.resultName = w), b(m.d, s(k), O));
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
          return ((e.exports = c =
            function () {
              return {
                wrap: function (b, m, y, k) {
                  return u.w(h(b), m, y, k && k.reverse());
                },
                isGeneratorFunction: p,
                mark: u.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: o,
                async: function (b, m, y, k, w) {
                  return (p(m) ? a : n)(h(b), m, y, k, w);
                },
                keys: i,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = c), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(fs)),
    fs.exports
  );
}
var ks, Id;
function O0() {
  if (Id) return ks;
  Id = 1;
  var e = k0()();
  ks = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ks;
}
var E0 = O0();
const M = Zt(E0);
var cr = {},
  Ar = {},
  so = {},
  aa = {},
  Td;
function S0() {
  if (Td) return aa;
  ((Td = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.V1InitializeContainer = void 0));
  const e = jt();
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
  return ((aa.V1InitializeContainer = t), aa);
}
var oa = {},
  Md;
function x0() {
  if (Md) return oa;
  ((Md = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa.V2InitializeContainer = void 0));
  const e = jt();
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
  return ((oa.V2InitializeContainer = t), oa);
}
var Dd;
function P0() {
  if (Dd) return so;
  ((Dd = 1), Object.defineProperty(so, "__esModule", { value: !0 }));
  const e = jt(),
    t = S0(),
    r = x0();
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
  return ((so.default = n), so);
}
var jr = {},
  ia = {},
  Fd;
function C0() {
  if (Fd) return ia;
  ((Fd = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia._resolveDeltasResponse = void 0));
  const e = jt(),
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
  ia._resolveDeltasResponse = r;
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
  return ia;
}
var Ld;
function _h() {
  if (Ld) return jr;
  Ld = 1;
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
        function d(h) {
          try {
            v(s.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(s.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? u(h.value) : c(h.value).then(d, p);
        }
        v((s = s.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(jr, "__esModule", { value: !0 });
  const t = jt(),
    r = C0();
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
        var l, d, p, v, h, f;
        const g = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
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
        return this._fetchEvaluations(o, g, b, s);
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
var sa = {},
  Nd;
function R0() {
  if (Nd) return sa;
  ((Nd = 1),
    Object.defineProperty(sa, "__esModule", { value: !0 }),
    (sa._makeParamStoreGetter = void 0));
  const e = jt(),
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
          return s(l, f, h, p);
        case "layer":
          return c(l, f, h, p);
        default:
          return h;
      }
    };
  }
  return ((sa._makeParamStoreGetter = u), sa);
}
var ur = {},
  Bd;
function A0() {
  if (Bd) return ur;
  Bd = 1;
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
        function d(h) {
          try {
            v(s.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(s.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? u(h.value) : c(h.value).then(d, p);
        }
        v((s = s.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.StatsigEvaluationsDataAdapter = void 0));
  const t = jt(),
    r = _h();
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
  return ((ur.StatsigEvaluationsDataAdapter = n), ur);
}
var qd;
function j0() {
  if (qd) return Ar;
  qd = 1;
  var e =
    (Ar && Ar.__awaiter) ||
    function (s, c, u, l) {
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
        g((l = l.apply(s, c || [])).next());
      });
    };
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  const t = jt(),
    r = P0(),
    n = _h(),
    a = R0(),
    o = A0();
  let i = class ec extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof ec
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new ec(c ?? "", {}));
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
      const h = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of h) f.bind(this);
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
    _getFeatureGateImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(c);
      (this._checkUserHasIdForEvaluation(p?.id_type, c, "Gate"),
        this._checkInitializationStatus(v.reason));
      const h = (0, t._makeFeatureGate)(c, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, u),
        g = f ?? h;
      return (
        this._enqueueExposure(
          c,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(c);
      (this._checkUserHasIdForEvaluation(p?.id_type, c, "Dynamic config"),
        this._checkInitializationStatus(v.reason));
      const h = (0, t._makeDynamicConfig)(c, v, p),
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
          c,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(c, u) {
      var l, d, p, v;
      const { result: h, details: f } = this._store.getConfig(c);
      (this._checkUserHasIdForEvaluation(h?.id_type, c, "Experiment"),
        this._checkInitializationStatus(f.reason));
      const g = (0, t._makeExperiment)(c, f, h);
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
          c,
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
    _getLayerImpl(c, u) {
      var l, d, p;
      const { result: v, details: h } = this._store.getLayer(c),
        f = (0, t._makeLayer)(c, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const b = (0, t._mergeOverride)(
        f,
        g,
        (p = g?.__value) !== null && p !== void 0 ? p : f.__value,
        (m) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              c,
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
    _getParameterStoreImpl(c, u) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const h = {
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
            : d.call(l, h, u);
      return (
        f != null &&
          ((h.__configuration = f.config),
          (h.details = f.details),
          (h.get = (0, a._makeParamStoreGetter)(this, f.config, u))),
        h
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
  return ((Ar.default = i), Ar);
}
var Ud;
function I0() {
  return (
    Ud ||
      ((Ud = 1),
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
        const n = jt(),
          a = j0();
        ((e.StatsigClient = a.default), r(jt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(cr)),
    cr
  );
}
var ut = I0(),
  Os = { exports: {} },
  zd;
function T0() {
  return (
    zd ||
      ((zd = 1),
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
            h = r ? r + u : u;
          return (
            c._events[h]
              ? c._events[h].fn
                ? (c._events[h] = [c._events[h], v])
                : c._events[h].push(v)
              : ((c._events[h] = v), c._eventsCount++),
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
            for (var p = 0, v = d.length, h = new Array(v); p < v; p++) h[p] = d[p].fn;
            return h;
          }),
          (s.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (s.prototype.emit = function (u, l, d, p, v, h) {
            var f = r ? r + u : u;
            if (!this._events[f]) return !1;
            var g = this._events[f],
              b = arguments.length,
              m,
              y;
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
              for (y = 1, m = new Array(b - 1); y < b; y++) m[y - 1] = arguments[y];
              g.fn.apply(g.context, m);
            } else {
              var k = g.length,
                w;
              for (y = 0; y < k; y++)
                switch ((g[y].once && this.removeListener(u, g[y].fn, void 0, !0), b)) {
                  case 1:
                    g[y].fn.call(g[y].context);
                    break;
                  case 2:
                    g[y].fn.call(g[y].context, l);
                    break;
                  case 3:
                    g[y].fn.call(g[y].context, l, d);
                    break;
                  case 4:
                    g[y].fn.call(g[y].context, l, d, p);
                    break;
                  default:
                    if (!m) for (w = 1, m = new Array(b - 1); w < b; w++) m[w - 1] = arguments[w];
                    g[y].fn.apply(g[y].context, m);
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
            var h = this._events[v];
            if (h.fn) h.fn === l && (!p || h.once) && (!d || h.context === d) && i(this, v);
            else {
              for (var f = 0, g = [], b = h.length; f < b; f++)
                (h[f].fn !== l || (p && !h[f].once) || (d && h[f].context !== d)) && g.push(h[f]);
              g.length ? (this._events[v] = g.length === 1 ? g[0] : g) : i(this, v);
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
var M0 = T0();
const D0 = Zt(M0);
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
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $d(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var co = "@all-features",
  F0 = (function () {
    function e() {
      (he(this, e), x(this, "eventToValue", new Map()), (this.emitter = new D0()));
    }
    return ge(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            s = a(r, Kt(Kt({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var c = function () {
            var l = a(r, Kt(Kt({}, o), {}, { fireGateExposure: !1 })),
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
            l = i(r, n, a, Kt(Kt({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var v = i(r, n, a, Kt(Kt({}, s), {}, { fireExperimentExposure: !1 })),
              h = c.eventToValue.get(o);
            h !== v && (c.eventToValue.set(o, v), o(v));
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
            this.emitter.on(co, r),
            function () {
              n.emitter.off(co, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(co),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== co;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  L0 = "fedramp-moderate";
function N0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === L0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Rc = {
    Error: "Error",
    LocalOverride: "LocalOverride",
    Unrecognized: "Unrecognized",
    Uninitialized: "Uninitialized",
    NetworkNotModified: "NetworkNotModified",
    Network: "Network",
    InvalidBootstrap: "InvalidBootstrap",
    Bootstrap: "Bootstrap",
    Cache: "Cache",
    Unknown: "Unknown",
  },
  ya = { Development: "development", Staging: "staging", Production: "production" },
  Fa = { COMMERCIAL: "commercial", FEDRAMP_MODERATE: "fedramp-moderate" },
  B0 = [
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
function tc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var uo = function (t) {
    return tc({ perimeter: N0() ? Fa.FEDRAMP_MODERATE : Fa.COMMERCIAL }, t);
  },
  ca = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (p, v) {
      var h = H(p, 1),
        f = h[0],
        g = H(v, 1),
        b = g[0];
      return f.localeCompare(b);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var s = H(n[i], 2),
        c = s[1],
        u = H(a[i], 2),
        l = u[1];
      if (c !== l) return !1;
    }
    return !0;
  },
  Gd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  };
function Ea(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (!r.length) return e;
  var a = r.shift();
  if (a == null) return Ea.apply(void 0, [e].concat(we(r)));
  for (var o = 0, i = Object.entries(a); o < i.length; o++) {
    var s = H(i[o], 2),
      c = s[0],
      u = s[1],
      l = e[c],
      d = u && ke(u) === "object" && !Array.isArray(u),
      p = l && ke(l) === "object" && !Array.isArray(l);
    d && p ? (e[c] = Ea(l, u)) : (e[c] = u);
  }
  return Ea.apply(void 0, [e].concat(we(r)));
}
var q0 = function (t) {
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
    var p = ue(t, B0);
    return tc(
      tc({}, p),
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
  U0 = Object.entries(Rc).map(function (e) {
    var t = H(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  wh = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = U0.find(function (i) {
            var s = H(i, 1),
              c = s[0];
            return o.includes(c);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Rc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  rc = function (t) {
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
            var s = Array.isArray(n) ? "array" : ke(n),
              c = Array.isArray(i) ? "array" : ke(i);
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
                wh(r.details),
                rc(
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
              : n == null || (ke(i) === ke(n) && Array.isArray(n) === Array.isArray(i))
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
                wh(r.details),
                function (l, d) {
                  return r.get(d);
                },
                rc(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                rc(
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
  zr = "0.0.0-development";
function z0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function kh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (kh = function () {
    return !!e;
  })();
}
function $0(e, t, r) {
  if (kh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && Da(a, r.prototype), a);
}
function nc(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (nc = function (n) {
      if (n === null || !z0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return $0(n, arguments, Z(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Da(a, n)
      );
    }),
    nc(e)
  );
}
function V0(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Oh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Oh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Oh = function () {
    return !!e;
  })();
}
var Kd = (function (e) {
  function t(r) {
    return (he(this, t), V0(this, t, [r]));
  }
  return (Ke(t, e), ge(t));
})(nc(Error));
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
function G0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var H0 = 5e3,
  W0 = "https://api.atlassian.com/flags",
  K0 = "https://api.stg.atlassian.com/flags",
  Y0 = "https://api.dev.atlassian.com/flags",
  J0 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  X0 = "https://api.atlassian-us-gov-mod.com/flags",
  Q0 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Z0 = "oasis-stg.com/flags",
  ew = "atlassian-isolated.net/flags",
  tw = "/gateway/api/flags",
  Es = (function () {
    function e() {
      he(this, e);
    }
    return ge(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = X(
            M.mark(function n(a) {
              var o, i;
              return M.wrap(
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
            M.mark(function n(a, o, i) {
              var s;
              return M.wrap(
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
            M.mark(function n(a) {
              var o;
              return M.wrap(function (s) {
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
            M.mark(function n(a) {
              var o;
              return M.wrap(function (s) {
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
          if (n) return tw;
          if (a === Fa.FEDRAMP_MODERATE)
            switch (r) {
              case ya.Production:
                return X0;
              case ya.Staging:
                return J0;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Fa.COMMERCIAL)
            switch (r) {
              case ya.Development:
                return Y0;
              case ya.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : K0;
              default:
                var s = this.getApiUrl(o);
                return s !== null ? s : W0;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = X(
            M.mark(function n(a, o, i, s) {
              var c, u, l, d, p;
              return M.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (u = i.fetchTimeoutMs || H0),
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
                            "".concat(c).concat(a),
                            G0(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": zr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              s && { body: JSON.stringify(s) },
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
          if (n === void 0) return r ? Q0.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Z0);
          var s = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(ew) : null;
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
function ua(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rw(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Eh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Eh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Eh = function () {
    return !!e;
  })();
}
function nw(e, t, r, n) {
  var a = Bo(Z(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var aw = (function (e) {
  function t() {
    var r;
    return (
      he(this, t),
      (r = rw(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
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
            M.mark(function a(o, i) {
              return M.wrap(function (c) {
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
            M.mark(function a(o, i, s) {
              return M.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ua(
                              ua({}, this.bootstrapResult),
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
            ua(ua({}, this.bootstrapResult), {}, { fullUserHash: ut._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = X(
            M.mark(function a(o, i, s) {
              return M.wrap(function (u) {
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
          nw(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ua({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ut.DataAdapterCore);
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
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ow(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = iw(e)) || t) {
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
function iw(e, t) {
  if (e) {
    if (typeof e == "string") return Qd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Qd(e, t)
          : void 0
    );
  }
}
function Qd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ss = "LocalOverride:Recognized",
  sw = "STATSIG_OVERRIDES",
  Zd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Ir = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Je = function (t, r) {
    return r + ":" + t;
  },
  cw = (function () {
    function e(t) {
      (he(this, e),
        (this._overrides = Ir()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ge(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Ir();
          } catch {
            return Ir();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Ir(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
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
                p = H(l[u], 2),
                v = p[0],
                h = p[1];
              r.gates[v] = h;
            }
            for (
              var f = 0, g = Object.entries((b = c.configs) !== null && b !== void 0 ? b : {});
              f < g.length;
              f++
            ) {
              var b,
                m = H(g[f], 2),
                y = m[0],
                k = m[1];
              r.configs[y] = k;
            }
            for (
              var w = 0, O = Object.entries((S = c.layers) !== null && S !== void 0 ? S : {});
              w < O.length;
              w++
            ) {
              var S,
                j = H(O[w], 2),
                I = j[0],
                C = j[1];
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
            this.parseStoredOverrides(Zd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Zd);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              s = ow(i),
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
          var n = Ie(Ie({}, Ir()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = H(o[a], 2), s = i[0], c = i[1], u = 0, l = Object.entries(c);
              u < l.length;
              u++
            ) {
              var d = H(l[u], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(Je(Ye._DJB2(p), s), v);
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
            this._djb2Map.set(Je(Ye._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Je(Ye._DJB2(r), "gates")),
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
                : this._djb2Map.get(Je(r.name, "gates"));
          return o == null
            ? null
            : Ie(Ie({}, r), {}, { value: o, details: Ie(Ie({}, r.details), {}, { reason: Ss }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Je(Ye._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Je(Ye._DJB2(r), "configs")),
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
            this._djb2Map.set(Je(Ye._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Je(Ye._DJB2(r), "configs")),
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
            this._djb2Map.set(Je(Ye._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Je(Ye._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Ir();
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
                : this._djb2Map.get(Je(r.name, "layers"));
          return o == null
            ? null
            : Ie(
                Ie({}, r),
                {},
                {
                  __value: o,
                  get: Ye._makeTypedGet(r.name, o),
                  details: Ie(Ie({}, r.details), {}, { reason: Ss }),
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
                : this._djb2Map.get(Je(r.name, "configs"));
          return o == null
            ? null
            : Ie(
                Ie({}, r),
                {},
                {
                  value: o,
                  get: Ye._makeTypedGet(r.name, o),
                  details: Ie(Ie({}, r.details), {}, { reason: Ss }),
                },
              );
        },
      },
    ]);
  })(),
  uw = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ef(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
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
  lw = "https://xp.atlassian.com/v1/rgstr",
  dw = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? sw : n,
        o = r.overrideAdapter;
      (he(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new F0()),
        x(this, "dataAdapter", new aw()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new cw(a)));
    }
    return ge(e, [
      {
        key: "initialize",
        value: (function () {
          var t = X(
            M.mark(function n(a, o, i) {
              var s = this,
                c,
                u;
              return M.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((c = uo(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ca(c, this.initOptions) ||
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
            M.mark(function n(a, o, i, s) {
              var c = this,
                u,
                l;
              return M.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((u = uo(a)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ca(u, this.initOptions) ||
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
                          this.provider.setClientVersion(zr),
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
                                h = v - l;
                              c.fireClientEvent(
                                l,
                                h,
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
                var l = Yt(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: zr,
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
                s.initOptions.environment !== ya.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = X(
            M.mark(function n(a, o, i) {
              var s = this,
                c,
                u,
                l,
                d = arguments;
              return M.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((c = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = uo(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ca(u, this.initOptions) ||
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
                              var h = performance.now(),
                                f = h - l;
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
            M.mark(function n(a, o, i) {
              var s, c;
              return M.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = uo(a)),
                          (c = function () {
                            return Es.fetchExperimentValues(s, o, i).then(function (p) {
                              var v = p.experimentValues,
                                h = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: h };
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
            M.mark(function n(a, o) {
              var i = this;
              return M.wrap(
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
            M.mark(function n(a, o) {
              var i,
                s,
                c = arguments;
              return M.wrap(
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
            M.mark(function n() {
              return M.wrap(
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
              new Hd(r, {}, "", { time: Date.now(), reason: Rc.Error })
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
          return ca(this.currentIdentifiers, r) && ca(this.currentAttributes, n);
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
            M.mark(function n(a, o, i) {
              var s, c, u, l, d, p, v, h;
              return M.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        if (((s = Yt({}, a)), !a.localMode)) {
                          g.next = 5;
                          break;
                        }
                        return ((g.next = 4), this.initFromValues(s, o, i));
                      case 4:
                        return g.abrupt("return");
                      case 5:
                        return (
                          (g.prev = 5),
                          (l = Es.fetchClientSdk(a).then(function (b) {
                            return (s.sdkKey = b.clientSdkKey);
                          })),
                          (d = Es.fetchExperimentValues(a, o, i)),
                          (g.next = 10),
                          Promise.all([l, d])
                        );
                      case 10:
                        ((p = g.sent),
                          (v = H(p, 2)),
                          (h = v[1]),
                          (c = h.experimentValues),
                          (u = h.customAttributes),
                          (g.next = 24));
                        break;
                      case 17:
                        return (
                          (g.prev = 17),
                          (g.t0 = g.catch(5)),
                          g.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                g.t0 === null || g.t0 === void 0 ? void 0 : g.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (g.next = 23),
                          this.initFromValues(s, o, i)
                        );
                      case 23:
                        throw g.t0;
                      case 24:
                        return g.abrupt("return", this.initFromValues(s, o, u, c));
                      case 25:
                      case "end":
                        return g.stop();
                    }
                },
                n,
                this,
                [[5, 17]],
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
            M.mark(function n(a, o, i, s) {
              var c, u, l, d, p, v, h, f;
              return M.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (c = Yt(Yt({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, s)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (m) {
                            return (c.sdkKey = m);
                          })),
                          (p = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = b.sent),
                          (h = H(v, 2)),
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
            M.mark(function n(a, o, i) {
              var s,
                c,
                u,
                l,
                d,
                p,
                v,
                h,
                f = arguments;
              return M.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (c = f.length > 3 && f[3] !== void 0 ? f[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = q0(a)),
                          u.sdkKey || (u.sdkKey = tf),
                          ((s = u.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (u.networkConfig = Yt(
                              Yt({}, u.networkConfig),
                              {},
                              { logEventUrl: lw },
                            )),
                          u.perimeter === Fa.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = ue(u, uw)),
                          (v = Gd(o, i)),
                          (this.user = Ea({}, c.user, v)),
                          (h = Yt(
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
                            : (h.disableStableID = !0),
                          (b.prev = 13),
                          (this.statsigClient = new ut.StatsigClient(l, this.user, h)),
                          this.dataAdapter.setBootstrapData(c),
                          (b.next = 18),
                          this.statsigClient.initializeAsync()
                        );
                      case 18:
                        b.next = 30;
                        break;
                      case 20:
                        return (
                          (b.prev = 20),
                          (b.t0 = b.catch(13)),
                          b.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to initialise the Statsig client, error: ".concat(
                                b.t0 === null || b.t0 === void 0 ? void 0 : b.t0.message,
                              ),
                            ),
                          console.warn(
                            "Initialising Statsig client with default sdk key and without values",
                          ),
                          (this.statsigClient = new ut.StatsigClient(tf, this.user, h)),
                          this.dataAdapter.setBootstrapData(),
                          (b.next = 28),
                          this.statsigClient.initializeAsync()
                        );
                      case 28:
                        throw ((this.initWithDefaults = !0), b.t0);
                      case 30:
                      case "end":
                        return b.stop();
                    }
                },
                n,
                this,
                [[13, 20]],
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
            M.mark(function n(a, o, i) {
              var s = this,
                c,
                u,
                l;
              return M.wrap(
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
                              M.mark(function v() {
                                return M.wrap(function (f) {
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
            M.mark(function n(a, o, i) {
              var s, c, u, l, d, p, v, h, f, g;
              return M.wrap(
                function (m) {
                  for (;;)
                    switch ((m.prev = m.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (m.prev = 1),
                          (m.next = 4),
                          a
                        );
                      case 4:
                        ((u = m.sent),
                          (d = Gd(o, u.customAttributesFromFetch)),
                          (l = Ea({}, u.experimentValues.user, d)),
                          (m.next = 14));
                        break;
                      case 9:
                        throw (
                          (m.prev = 9),
                          (m.t0 = m.catch(1)),
                          (h = m.t0 instanceof Error ? m.t0.message : JSON.stringify(m.t0)),
                          (p = (v = this.initOptions).updateUserCompletionCallback) === null ||
                            p === void 0 ||
                            p.call(v, !1, h),
                          m.t0
                        );
                      case 14:
                        if (
                          ((f = !0),
                          (g = null),
                          (m.prev = 16),
                          this.dataAdapter.setBootstrapData(u.experimentValues),
                          (this.user = l),
                          !this.user)
                        ) {
                          m.next = 22;
                          break;
                        }
                        return ((m.next = 22), this.statsigClient.updateUserAsync(this.user));
                      case 22:
                        m.next = 28;
                        break;
                      case 24:
                        ((m.prev = 24), (m.t1 = m.catch(16)), (f = !1), (g = String(m.t1)));
                      case 28:
                        if (
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (c = s.updateUserCompletionCallback) === null ||
                            c === void 0 ||
                            c.call(s, f, g),
                          !f)
                        ) {
                          m.next = 35;
                          break;
                        }
                        ((this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          this.subscriptions.anyUpdated(),
                          (m.next = 36));
                        break;
                      case 35:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 36:
                      case "end":
                        return m.stop();
                    }
                },
                n,
                this,
                [
                  [1, 9],
                  [16, 24],
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
          return zr;
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
              Wd.fromLayer(ut._makeLayer(r, { reason: "Error" }, null))
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
  D,
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
D = Y;
x(Y, "client", new dw());
x(Y, "hasCheckGateErrorOccurred", !1);
x(Y, "hasGetExperimentValueErrorOccurred", !1);
x(Y, "checkGate", function (e, t) {
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
    D.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (D.hasCheckGateErrorOccurred = !0));
  }
  return D.client.checkGate(e, t);
});
x(Y, "getExperimentValue", function (e, t, r, n) {
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
      D.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: o,
        }),
        (D.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return D.client.getExperimentValue(e, t, r, n);
});
x(Y, "initializeCalled", D.client.initializeCalled.bind(D.client));
x(Y, "initializeCompleted", D.client.initializeCompleted.bind(D.client));
x(Y, "waitUntilInitializeCompleted", D.client.waitUntilInitializeCompleted.bind(D.client));
x(Y, "initialize", D.client.initialize.bind(D.client));
x(Y, "initializeWithProvider", D.client.initializeWithProvider.bind(D.client));
x(Y, "initializeFromValues", D.client.initializeFromValues.bind(D.client));
x(Y, "manuallyLogGateExposure", D.client.manuallyLogGateExposure.bind(D.client));
x(Y, "getExperiment", D.client.getExperiment.bind(D.client));
x(Y, "manuallyLogExperimentExposure", D.client.manuallyLogExperimentExposure.bind(D.client));
x(Y, "manuallyLogLayerExposure", D.client.manuallyLogLayerExposure.bind(D.client));
x(Y, "shutdownStatsig", D.client.shutdownStatsig.bind(D.client));
x(Y, "overrideGate", D.client.overrideGate.bind(D.client));
x(Y, "clearGateOverride", D.client.clearGateOverride.bind(D.client));
x(Y, "overrideConfig", D.client.overrideConfig.bind(D.client));
x(Y, "clearConfigOverride", D.client.clearConfigOverride.bind(D.client));
x(Y, "setOverrides", D.client.setOverrides.bind(D.client));
x(Y, "getOverrides", D.client.getOverrides.bind(D.client));
x(Y, "clearAllOverrides", D.client.clearAllOverrides.bind(D.client));
x(Y, "isCurrentUser", D.client.isCurrentUser.bind(D.client));
x(Y, "onGateUpdated", D.client.onGateUpdated.bind(D.client));
x(Y, "onExperimentValueUpdated", D.client.onExperimentValueUpdated.bind(D.client));
x(Y, "onAnyUpdated", D.client.onAnyUpdated.bind(D.client));
x(Y, "updateUser", D.client.updateUser.bind(D.client));
x(Y, "updateUserWithProvider", D.client.updateUserWithProvider.bind(D.client));
x(Y, "updateUserWithValues", D.client.updateUserWithValues.bind(D.client));
x(Y, "getPackageVersion", D.client.getPackageVersion.bind(D.client));
x(Y, "getLayer", D.client.getLayer.bind(D.client));
x(Y, "getLayerValue", D.client.getLayerValue.bind(D.client));
var ac = Y;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = Y;
  else {
    var lo, xs;
    ac = window.__FEATUREGATES_JS__;
    var rf =
      ((lo = ac) === null || lo === void 0 || (xs = lo.getPackageVersion) === null || xs === void 0
        ? void 0
        : xs.call(lo)) || "4.10.0 or earlier";
    if (rf !== zr) {
      var fw = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(rf, " when module version ")
        .concat(zr, " was loading.");
      console.warn(fw);
    }
  }
var Tr,
  Mr,
  vw =
    (globalThis == null ||
    (Tr = globalThis.process) === null ||
    Tr === void 0 ||
    (Tr = Tr.env) === null ||
    Tr === void 0
      ? void 0
      : Tr.JEST_WORKER_ID) !== void 0,
  pw =
    !vw &&
    (globalThis == null ||
    (Mr = globalThis.process) === null ||
    Mr === void 0 ||
    (Mr = Mr.env) === null ||
    Mr === void 0
      ? void 0
      : Mr.NODE_ENV) !== "production",
  hw = function () {
    var t;
    pw && (t = console).debug.apply(t, arguments);
  },
  Ac = {},
  gw = "@atlaskit/platform-feature-flags",
  Sa = "__PLATFORM_FEATURE_FLAGS__",
  Sh = typeof process < "u" && typeof Ac < "u",
  bw = Sh ? Ac.ENABLE_PLATFORM_FF === "true" : !1,
  mw = Sh ? Ac.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  yw = bw || mw,
  _w = { booleanResolver: void 0 },
  xa = typeof window < "u" ? window : globalThis;
xa[Sa] = xa[Sa] || _w;
function ww(e) {
  if (yw)
    return (
      hw(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        gw,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = xa[Sa]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = xa[Sa]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return ac.checkGate(e);
    var a = (n = xa[Sa]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function de(e) {
  return ww(e);
}
var kw = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Ow = function () {
    return _.useContext(kw);
  },
  qo = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function Ew(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Sw(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    o = n.current || !!(t && a.current.inputs && Ew(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    _.useEffect(
      function () {
        ((n.current = !1), (a.current = i));
      },
      [i],
    ),
    i.result
  );
}
function xw(e, t) {
  return Sw(function () {
    return e;
  }, t);
}
function xh() {
  var e = Ow(),
    t = xw(
      function (r) {
        return new b0({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
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
function Pw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nf(Object(r)).forEach(function (n) {
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
    s = e.analyticsData,
    c = xh(),
    u = c.createAnalyticsEvent,
    l = qo(s),
    d = qo(t),
    p = _.useCallback(
      function (v) {
        var h = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = Pw({ componentName: n, packageName: o, packageVersion: i }, l.current);
        h.context.push(f);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(v, h));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
}
function af(e, t) {
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
function Cw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? af(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : af(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function of(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    s = xh(),
    c = s.createAnalyticsEvent,
    u = qo(i),
    l = qo(t),
    d = _.useCallback(
      function () {
        var p = c({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = Cw({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var h = p.clone();
        (h && h.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, c, u, l],
    );
  return d;
}
var br = "ASC",
  Uo = "DESC",
  Rw = "small",
  zo = "large",
  Ph = 0.22;
const Aw = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, Aw) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Ch(e, t, r) {
  return e ?? "var(--c-, )";
}
var jw = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Iw = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      s = ue(e, jw);
    return _.createElement(
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
  Tw = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: R(["_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Mw = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: R(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Dw = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: R(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Fw = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
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
  Lw = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Nw(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Rh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Rh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Rh = function () {
    return !!e;
  })();
}
var uf = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  Bw = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === br ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, u) {
      var l = uf(c.cells, t, n),
        d = uf(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (ke(l) !== ke(d)) {
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
function qw(e) {
  var t = (function (r) {
    function n() {
      var a;
      he(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return ((a = Nw(this, n, [].concat(i))), x(a, "state", { pageRows: [] }), a);
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
                c = ue(o, Lw);
              return E.createElement(
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
              No(u, c);
              var h, f;
              return (
                v ? ((h = s), (f = s)) : ((h = Bw(c, s, u, l) || []), (f = vh(h, d, p))),
                cf(cf({}, i), {}, { pageRows: f })
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
var Uw = "--local-dynamic-table-width",
  Ah = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, Uw, "".concat(r, "%")) : void 0;
  },
  zw = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  $w = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = ue(t, zw);
    return _.createElement(
      "td",
      ne(
        {
          style: Ah({ width: r }),
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
  Vw = ["isHighlighted", "children", "style", "testId", "className"],
  Gw = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      s = ue(e, Vw);
    return _.createElement(
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
        s,
        { ref: t, "data-testid": o },
      ),
      n,
    );
  }),
  Hw = ["cells"],
  Ww = ["content", "testId"],
  Kw = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      s = r.cells,
      c = ue(r, Hw);
    return E.createElement(
      Gw,
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
          v = ue(u, Ww),
          h = (n || { cells: [] }).cells[l] || {},
          f = h.shouldTruncate,
          g = h.width;
        return E.createElement(
          $w,
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
function Yw(e, t, r) {
  return (
    (t = Z(t)),
    We(e, jh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
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
var Jw = (function (e) {
    function t() {
      return (he(this, t), Yw(this, t, arguments));
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
            return E.createElement(
              "tbody",
              { "data-testid": c && "".concat(c, "--body"), ref: u },
              a.map(function (l, d) {
                return E.createElement(Kw, {
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
  })(E.Component),
  Xw = qw(
    E.forwardRef(function (e, t) {
      return E.createElement(Jw, ne({}, e, { forwardedRef: t }));
    }),
  );
function Qw(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Ih() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Ih() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ih = function () {
    return !!e;
  })();
}
var Zw = (function (e) {
  function t(r) {
    var n;
    return (he(this, t), (n = Qw(this, t, [r])), (n.state = { hasError: !1 }), n);
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
})(E.Component);
const jc = _.createContext(null);
var ek = "#FFFFFF",
  oc = "#42526E",
  tk = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function rk(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(oc, ")")
    : "var(--ds-icon-inverse, ".concat(ek, ")");
}
var fo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  nk = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  Th = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "inherit" : n,
        o = t.delay,
        i = o === void 0 ? 0 : o,
        s = t.interactionName,
        c = t.label,
        u = t.size,
        l = u === void 0 ? "medium" : u,
        d = t.testId,
        p = typeof l == "number" ? l : tk[l],
        v = "".concat(i, "ms"),
        h = rk(a),
        f = _.useContext(jc);
      return (
        nk(
          function () {
            if (f != null) return f.hold(s);
          },
          [f, s],
        ),
        E.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: R([fo.wrapperStyles, fo.rotateStyles]),
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
              "aria-label": c || void 0,
              style: { animationDelay: v },
              role: c ? "img" : "none",
              className: R([fo.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: R([fo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function lf(e, t) {
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
function df(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ff = "--contents-opacity",
  ak = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  ok = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: df(df({}, x({}, ff, n)), {}, { "--_cnddr8": Ch("var(".concat(ff, ")")) }),
      },
      r,
    );
  },
  ik = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function sk(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Mh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
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
var Dh = (function (e) {
  function t() {
    return (he(this, t), sk(this, t, arguments));
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
          return E.createElement(
            ak,
            { testId: c },
            o ? E.createElement(ok, { contentsOpacity: s, testId: c }, a) : a,
            o &&
              E.createElement(
                ik,
                { testId: c },
                E.createElement(Th, {
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
})(E.Component);
x(Dh, "defaultProps", {
  isLoading: !0,
  spinnerSize: zo,
  contentsOpacity: Ph,
  loadingLabel: "Loading table",
});
var ck = ["children", "testId"],
  uk = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ue(e, ck);
    return _.createElement(
      "div",
      ne({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  lk = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: R(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  dk = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function fk(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Fh() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
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
var Lh = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = fk(this, t, [].concat(a))),
      x(r, "spinnerRef", E.createRef()),
      x(r, "containerRef", E.createRef()),
      x(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      x(r, "UNSAFE_componentWillReceiveProps", function (i) {
        !i.isLoading || !r.hasTargetNode(i)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      x(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      x(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      x(r, "getTargetNode", function () {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          s = i.targetRef,
          c = s?.();
        return c || r.containerRef.current;
      }),
      x(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      x(r, "isVerticallyVisible", function (i, s) {
        var c = i.top,
          u = i.bottom;
        return u <= 0 ? !1 : c < s;
      }),
      x(r, "isFullyVerticallyVisible", function (i, s) {
        var c = i.top,
          u = i.bottom;
        return c >= 0 && u <= s;
      }),
      x(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "translateSpinner", function (i, s, c) {
        ((i.style.position = c ? "fixed" : ""),
          (i.style.transform = s !== 0 ? "translate3d(0, ".concat(s, "px, 0)") : ""));
      }),
      x(r, "updateTargetAppearance", function () {
        var i = r.getTargetNode(),
          s = r.props,
          c = s.isLoading,
          u = s.contentsOpacity;
        i &&
          i.style &&
          ke(i.style) === "object" &&
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
              h = c.height;
            if (d) {
              var f = h >= l * 3;
              if (f && !this.isFullyVerticallyVisible(c, o)) {
                if (p >= 0) {
                  var g = o - p,
                    b = g / 2 + p - l / 2,
                    m = g < l * 3 ? p + l : b;
                  this.translateSpinner(s, m, !0);
                } else if (p < 0 && v > o) {
                  var y = o / 2 - l / 2;
                  this.translateSpinner(s, y, !0);
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
              var S = O.getBoundingClientRect().top,
                j = (p - S) / 2;
              this.translateSpinner(s, j, !1);
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
          return E.createElement(
            uk,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              E.createElement(
                lk,
                { testId: s },
                E.createElement(
                  dk,
                  { ref: this.spinnerRef },
                  E.createElement(Th, {
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
})(E.Component);
x(Lh, "defaultProps", {
  isLoading: !0,
  spinnerSize: zo,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Ph), ")"),
  loadingLabel: "Loading table",
});
function vk(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = _.useState(t),
    a = H(n, 2),
    o = a[0],
    i = a[1],
    s = _.useRef(r);
  _.useEffect(
    function () {
      s.current = r;
    },
    [r],
  );
  var c = r ? e : o,
    u = _.useCallback(function (l) {
      s.current || i(l);
    }, []);
  return [c, u];
}
var la = {},
  pk = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  hk = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  gk = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  vf = _.memo(function (t) {
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
        var h = t.size(d);
        v = h === "small" || h === "medium" ? h : v;
      }
    }
    var f = 16,
      g = gk[v][l],
      b = f + 2 * g;
    return _.createElement(
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
          c && "_1bsb1kw7 _4t3i1kw7",
          v === "small" && "_vwz4utpp",
        ]),
      },
      _.createElement("svg", {
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
          c ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? hk[l] : pk[l],
        ]),
      }),
    );
  });
const bk = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: vf, default: vf }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  gi = Av(bk);
var pf;
function mk() {
  if (pf) return la;
  ((pf = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.default = void 0));
  var e = r(yr()),
    t = r(gi);
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
var yk = mk();
const _k = Zt(yk);
var da = {},
  hf;
function wk() {
  if (hf) return da;
  ((hf = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.default = void 0));
  var e = r(yr()),
    t = r(gi);
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
var kk = wk();
const Ok = Zt(kk);
var Ic = _.createContext("elevation.surface"),
  Ek = function () {
    return _.useContext(Ic);
  };
Ic.displayName = "SurfaceProvider";
var Sk = [
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
  xk = ["className"],
  Pk = {
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
  Nh = {
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
  Ck = {
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
  Rk = {
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
  Ak = {
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
  jk = {
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
  bi = _.forwardRef(function (e, t) {
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
      h = v === void 0 ? i : v,
      f = e.paddingInlineStart,
      g = f === void 0 ? h : f,
      b = e.paddingInlineEnd,
      m = b === void 0 ? h : b,
      y = e.style,
      k = e.testId,
      w = e.xcss,
      O = ue(e, Sk);
    O.className;
    var S = ue(O, xk),
      j = _.createElement(
        n,
        ne(
          {
            style: y,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              o && Pk[o],
              o && Ik(o) && Nh[o],
              l && Ck[l],
              p && Rk[p],
              g && Ak[g],
              m && jk[m],
              w,
            ]),
          },
          S,
          { "data-testid": k },
        ),
        a,
      );
    return o ? _.createElement(Ic.Provider, { value: o }, j) : j;
  });
function Ik(e) {
  return e in Nh;
}
const Ps = () =>
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
  Bh = (...e) => R(e);
function Tk() {
  return {
    css() {
      throw Ps();
    },
    cssMap() {
      throw Ps();
    },
    cx: Bh,
    XCSSProp() {
      throw Ps();
    },
  };
}
var Mk = Tk(),
  Dk = Mk.cx,
  Fk = [
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
  gf = {
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
  bf = {
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
  Lk = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  Nk = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  Bk = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  qk = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  Uk = { root: "_1e0c1txw _vchhusvi" },
  $o = _.memo(
    _.forwardRef(function (e, t) {
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
        h = e.xcss,
        f = ue(e, Fk);
      return _.createElement(
        n,
        ne({}, f, {
          role: a,
          className: R([
            Uk.root,
            s && bf[s],
            c && bf[c],
            s && gf[s],
            u && gf[u],
            o && qk[o],
            p && Nk[p],
            i && Lk[i],
            v && Bk[v],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
$o.displayName = "Flex";
var zk = [
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
  $k = function (t) {
    var r = t.children;
    return _.createElement("span", { className: R([ic.separator]) }, r);
  },
  wo = _.memo(
    _.forwardRef(function (e, t) {
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
        h = e.testId,
        f = e.role,
        g = e.children,
        b = ue(e, zk),
        m = typeof p == "string" ? _.createElement($k, null, p) : p,
        y = m
          ? _.Children.toArray(g)
              .filter(Boolean)
              .map(function (k, w) {
                return _.createElement(_.Fragment, { key: w }, p && w > 0 ? m : null, k);
              })
          : g;
      return _.createElement(
        $o,
        ne({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: c || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: Dk(u === "hug" && ic.hug, u === "fill" && ic.fill, v),
          testId: h,
          ref: t,
        }),
        y,
      );
    }),
  );
wo.displayName = "Inline";
var Vk = "Invariant failed";
function Gk(e, t) {
  if (!e) throw new Error(Vk);
}
var qh = _.createContext(!1),
  Hk = function () {
    return _.useContext(qh);
  },
  Wk = qh.Provider,
  Kk = ["span", "p", "strong", "em"],
  Yk = function (t, r) {
    var n = Ek();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return mf.hasOwnProperty(n) ? mf[n] : "color.text";
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
  Jk = { medium: "_11c8fhey", UNSAFE_small: "_11c8rymc", large: "_11c81d4k", small: "_11c8wadc" },
  Xk = { bold: "_k48pwu06", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Qk = {
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
  mf = {
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
  Zk = _.forwardRef(function (e, t) {
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
    Gk(Kk.includes(n));
    var v = Hk(),
      h = Yk(a, v);
    !c && !v && (c = "medium");
    var f = _.createElement(
      n,
      {
        id: s,
        className: R([
          Dr.root,
          c && Jk[c],
          h && Qk[h],
          l && Dr.truncation,
          l === 1 && Dr.breakAll,
          o && Dr["textAlign.".concat(o)],
          u && Xk[u],
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
    return v ? f : _.createElement(Wk, { value: !0 }, f);
  });
function e1() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var t1 = ["as", "children", "isInset", "testId", "style", "xcss"],
  r1 = ["className"],
  n1 = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      s = e.style,
      c = e.xcss,
      u = ue(e, t1);
    u.className;
    var l = ue(u, r1);
    return _.createElement(
      n,
      ne({}, l, {
        ref: t,
        className: R([
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
  a1 = [
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
  o1 = ["className"],
  yf = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  i1 = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      s = i === void 0 ? xe : i,
      c = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      h = e.tabIndex,
      f = ue(e, a1),
      g = _.useContext(jc),
      b = _.useCallback(
        function (k, w) {
          (g && g.tracePress(c, k.timeStamp), s(k, w));
        },
        [s, g, c],
      ),
      m = La({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ue(f, o1);
    return _.createElement(
      n1,
      ne({ as: "button", tabIndex: h ?? (e1() && !n ? 0 : void 0), style: d }, y, {
        type: o,
        onClick: m,
        disabled: n,
        xcss: Bh(yf.root, n && yf.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  s1 = _.createContext(!1),
  c1 = function () {
    return _.useContext(s1);
  },
  u1 = _.createContext(!1),
  l1 = function () {
    return _.useContext(u1);
  },
  Cs = {},
  fa = {},
  _f;
function Uh() {
  if (_f) return fa;
  ((_f = 1), Object.defineProperty(fa, "__esModule", { value: !0 }), (fa.bind = void 0));
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
  wf;
function d1() {
  if (wf) return lr;
  wf = 1;
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
  var t = Uh();
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
var kf;
function f1() {
  return (
    kf ||
      ((kf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Uh();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = d1();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Cs)),
    Cs
  );
}
var Er = f1(),
  v1 = ["light", "dark", "auto"],
  p1 = [
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
  h1 = {
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
  be = {
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
  g1 = {
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
  Sr = "data-theme",
  b1 = "data-subtree-theme",
  mi = "data-color-mode",
  zh = "data-contrast-mode",
  yi = "data-custom-theme",
  m1 = ["light", "dark", "spacing", "typography", "shape"],
  sc = "UNSAFE_themeOptions",
  $h = function (t) {
    return (
      m1.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Vh = function (t) {
    return (
      p1.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Gh = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  y1 = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = H(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && Gh(i) && (r[o] = i), $h(o) && Vh(i) && (r[o] = i), o === sc))
          try {
            r[sc] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  _1 = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = H(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && Gh(i)) ||
        (o === sc && ke(i) === "object") ||
        ($h(o) && typeof i == "string" && Vh(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(ke(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
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
function Ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Of(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Of(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var w1 = function (t) {
    return (
      v1.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Tc = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(mi) || "",
      n = t.getAttribute(Sr) || "";
    return Ef(Ef({}, y1(n)), w1(r) && { colorMode: r });
  },
  Hh = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  Na = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function tC(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function k1(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function rC(e) {
  if (!Na(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, k1(e)]
  );
}
function Sf(e) {
  if (!Na(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function nC(e) {
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
function aC(e, t, r) {
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
function xf(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    s = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    c = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * s + 0.0722 * c;
  return u;
}
function oC(e, t) {
  if (!Na(e) || !Na(t)) throw new Error("Invalid HEX");
  var r = Sf(e),
    n = Sf(t),
    a = xf(r[0], r[1], r[2]),
    o = xf(n[0], n[1], n[2]),
    i = Math.max(a, o),
    s = Math.min(a, o);
  return (i + 0.05) / (s + 0.05);
}
function iC(e, t) {
  var r = Pf(e),
    n = Pf(t),
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
    h = u / d,
    f = l / p,
    g = v * v + h * h + f * f;
  return g < 0 ? 0 : Math.sqrt(g);
}
function Pf(e) {
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
var Wh = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
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
function Rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var O1 = "light",
  E1 = "no-preference",
  Kh = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.colorMode,
      n = r === void 0 ? be.colorMode : r,
      a = t.dark,
      o = a === void 0 ? be.dark : a,
      i = t.light,
      s = i === void 0 ? be.light : i,
      c = t.contrastMode,
      u = c === void 0 ? be.contrastMode : c,
      l = t.shape,
      d = l === void 0 ? be.shape() : l,
      p = t.spacing,
      v = p === void 0 ? be.spacing : p,
      h = t.typography,
      f = h === void 0 ? be.typography : h,
      g = t.UNSAFE_themeOptions,
      b = g === void 0 ? be.UNSAFE_themeOptions : g,
      m = _1({ dark: o, light: s, shape: d, spacing: v, typography: f }),
      y = x(x({}, Sr, m), mi, n === "auto" ? O1 : n);
    if (
      (de("platform_increased-contrast-themes") &&
        (y = Rf(Rf({}, y), {}, x({}, zh, u === "auto" ? E1 : u))),
      b && Hh(b.brandColor))
    ) {
      var k = JSON.stringify(b),
        w = Wh(k);
      y[yi] = w;
    }
    return y;
  },
  Yh = {
    light: function () {
      return Qe(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return Qe(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return Qe(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return Qe(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return Qe(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return Qe(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return Qe(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return Qe(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    shape: function () {
      return Qe(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
  },
  S1 = (function () {
    var e = X(
      M.mark(function t(r) {
        var n, a;
        return M.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(Sr, '="').concat(r, '"]:not([').concat(yi, "])"),
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
                return ((i.next = 6), x1(r));
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
  x1 = (function () {
    var e = X(
      M.mark(function t(r) {
        var n, a;
        return M.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), Yh[r]());
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
  P1 = "(prefers-color-scheme: dark)",
  C1 = "(prefers-contrast: more)",
  R1 = typeof window < "u" && "matchMedia" in window;
function A1(e) {
  var t = document.documentElement;
  t.setAttribute(mi, e.matches ? "dark" : "light");
}
var Fr = R1 && window.matchMedia(P1),
  j1 = (function () {
    function e() {
      (he(this, e), x(this, "unbindThemeChangeListener", null));
    }
    return ge(e, [
      {
        key: "getColorMode",
        value: function () {
          return Fr && Fr != null && Fr.matches ? "dark" : "light";
        },
      },
      {
        key: "bind",
        value: function () {
          Fr &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = Er.bind(Fr, { type: "change", listener: A1 }));
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
  vo = new j1(),
  I1 = typeof window < "u" && "matchMedia" in window;
function T1(e) {
  var t = document.documentElement;
  t.setAttribute(zh, e.matches ? "more" : "no-preference");
}
var Lr = I1 && window.matchMedia(C1),
  M1 = (function () {
    function e() {
      (he(this, e), x(this, "unbindContrastChangeListener", null));
    }
    return ge(e, [
      {
        key: "getContrastMode",
        value: function () {
          return Lr && Lr != null && Lr.matches ? "more" : "no-preference";
        },
      },
      {
        key: "bind",
        value: function () {
          Lr &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = Er.bind(Lr, { type: "change", listener: T1 }));
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
  po = new M1();
function D1(e) {
  (e.colorMode === "auto" ? ((e.colorMode = vo.getColorMode()), vo.bind()) : vo.unbind(),
    de("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = po.getContrastMode()), po.bind())
        : po.unbind()));
  var t = Kh(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = H(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (vo.unbind(), de("platform_increased-contrast-themes") && po.unbind());
    }
  );
}
function F1(e, t) {
  var r = JSON.stringify(e),
    n = Wh(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(yi, '="').concat(n, '"][').concat(Sr, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function sC(e) {
  var t = we(Array.from(document.head.querySelectorAll("style[".concat(yi, "][").concat(Sr, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function cC(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = H(n, 2),
      o = a[0],
      i = a[1],
      s = g1[o];
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
function Af(e) {
  var t;
  return (t = Object.entries(h1).find(function (r) {
    var n = H(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var L1 = function (t) {
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
          var v = Af(p);
          v && u.push(v);
        }),
        l.push.apply(l, u));
    else if ((l.push(t[r]), n !== "no-preference" && de("platform_increased-contrast-themes"))) {
      var d = Af(t[r]);
      d && l.push(d);
    }
    return (
      [i, s, c].forEach(function (p) {
        p && l.push(p);
      }),
      we(new Set(l))
    );
  },
  N1 = function (t) {
    var r = [];
    return we(new Set(r));
  };
function B1(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = q1(e)) || t) {
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
function q1(e, t) {
  if (e) {
    if (typeof e == "string") return jf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? jf(e, t)
          : void 0
    );
  }
}
function jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? If(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : If(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var U1 = (function () {
    var e = X(
      M.mark(function t() {
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
          h,
          f,
          g,
          b,
          m,
          y,
          k,
          w,
          O,
          S,
          j,
          I,
          C,
          T,
          q,
          V,
          $,
          W,
          L = arguments;
        return M.wrap(
          function (B) {
            for (;;)
              switch ((B.prev = B.next)) {
                case 0:
                  return (
                    (r = L.length > 0 && L[0] !== void 0 ? L[0] : {}),
                    (n = L.length > 1 ? L[1] : void 0),
                    (a =
                      typeof r == "function"
                        ? r(
                            Tf(
                              Tf({}, be),
                              {},
                              { typography: be.typography, shape: be.shape() },
                              Tc(),
                            ),
                          )
                        : r),
                    (o = a.colorMode),
                    (i = o === void 0 ? be.colorMode : o),
                    (s = a.contrastMode),
                    (c = s === void 0 ? be.contrastMode : s),
                    (u = a.dark),
                    (l = u === void 0 ? be.dark : u),
                    (d = a.light),
                    (p = d === void 0 ? be.light : d),
                    (v = a.shape),
                    (h = v === void 0 ? be.shape() : v),
                    (f = a.spacing),
                    (g = f === void 0 ? be.spacing : f),
                    (b = a.typography),
                    (m = b === void 0 ? be.typography : b),
                    (y = a.UNSAFE_themeOptions),
                    (k = y === void 0 ? be.UNSAFE_themeOptions : y),
                    de("platform_increased-contrast-themes") ||
                      (p === "light-increased-contrast" && (p = "light"),
                      l === "dark-increased-contrast" && (l = "dark")),
                    (w = {
                      colorMode: i,
                      contrastMode: c,
                      dark: l,
                      light: p,
                      shape: h,
                      spacing: g,
                      typography: m,
                      UNSAFE_themeOptions: n ? void 0 : k,
                    }),
                    (O = L1(w)),
                    (S = n || S1),
                    (j = O.map(
                      (function () {
                        var U = X(
                          M.mark(function G(ae) {
                            return M.wrap(function (ce) {
                              for (;;)
                                switch ((ce.prev = ce.next)) {
                                  case 0:
                                    return ((ce.next = 2), S(ae));
                                  case 2:
                                    return ce.abrupt("return", ce.sent);
                                  case 3:
                                  case "end":
                                    return ce.stop();
                                }
                            }, G);
                          }),
                        );
                        return function (G) {
                          return U.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      k &&
                      Hh(k?.brandColor) &&
                      ((I = i || be.colorMode),
                      (C = F1(k, I)),
                      C.length > 0 &&
                        j.push(
                          X(
                            M.mark(function U() {
                              var G, ae;
                              return M.wrap(function (ce) {
                                for (;;)
                                  switch ((ce.prev = ce.next)) {
                                    case 0:
                                      return (
                                        (ce.next = 2),
                                        Qe(
                                          () => import("./custom-theme-BZBdu_h7.js"),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((G = ce.sent),
                                        (ae = G.loadAndAppendCustomThemeCss),
                                        ae({
                                          colorMode: C.length === 2 ? "auto" : C[0],
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
                  ((T = N1()), (q = B1(T)), (B.prev = 13), q.s());
                case 15:
                  if ((V = q.n()).done) {
                    B.next = 21;
                    break;
                  }
                  return (($ = V.value), (B.next = 19), S($));
                case 19:
                  B.next = 15;
                  break;
                case 21:
                  B.next = 26;
                  break;
                case 23:
                  ((B.prev = 23), (B.t0 = B.catch(13)), q.e(B.t0));
                case 26:
                  return ((B.prev = 26), q.f(), B.finish(26));
                case 29:
                  return ((W = D1(w)), B.abrupt("return", W));
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
  Mc = (function () {
    function e(t) {
      (he(this, e), x(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return ge(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = Tc();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Sr, mi] }));
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
x(Mc, "observer", null);
x(Mc, "callbacks", new Set());
var Jh = _.createContext(void 0),
  z1 = _.createContext(void 0),
  Xh = _.createContext(!1),
  $1 = _.createContext(void 0),
  V1 = _.createContext(void 0),
  G1 = function () {
    var t;
    return (t = _.useContext(Xh)) !== null && t !== void 0 ? t : !1;
  },
  Qh = function () {
    return typeof document < "u" ? document : null;
  };
function Zh(e) {
  var t = Qh();
  return t ? t.head.querySelector("style[".concat(Sr, '="').concat(e, '"]')) : !1;
}
var H1 = (function () {
    var e = X(
      M.mark(function t(r) {
        var n, a;
        return M.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!Zh(r)) {
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
                return ((i.next = 6), Yh[r]());
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
  W1 = (function () {
    var e = X(
      M.mark(function t(r, n) {
        var a, o;
        return M.wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                if (((a = Qh()), a)) {
                  s.next = 3;
                  break;
                }
                return s.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !Zh(n))
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
  K1 = (function () {
    var e = X(
      M.mark(function t(r) {
        var n;
        return M.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), H1(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                W1(n, r);
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
  Y1 = (function () {
    var e = X(
      M.mark(function t(r) {
        var n;
        return M.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                ((n = Object.values(r).filter(function (i) {
                  return !!i;
                })),
                  n.forEach(K1));
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
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var J1 = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  X1 = typeof window < "u" && "matchMedia" in window,
  Pa = X1 ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function Df(e) {
  return e === "auto" ? (Pa != null && Pa.matches ? "dark" : "light") : e;
}
var Q1 = { body: "_1e0c1bgi" };
function eg(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = _.useState(n),
    i = H(o, 2),
    s = i[0],
    c = i[1],
    u = _.useState(Df(n)),
    l = H(u, 2),
    d = l[0],
    p = l[1],
    v = _.useState(function () {
      return _t(_t({}, J1), a);
    }),
    h = H(v, 2),
    f = h[0],
    g = h[1],
    b = _.useCallback(function (C) {
      (c(C), p(Df(C)));
    }, []),
    m = _.useCallback(function (C) {
      g(function (T) {
        return _t(_t({}, T), C);
      });
    }, []),
    y = _.useRef(null),
    k = c1(),
    w = l1(),
    O = G1(),
    S = k && !O && w,
    j = (!de("platform_dst_subtree_theming") && !k && !O) || S;
  (_.useEffect(
    function () {
      if (j) {
        var C = (function () {
            var q = X(
              M.mark(function V() {
                var $;
                return M.wrap(function (L) {
                  for (;;)
                    switch ((L.prev = L.next)) {
                      case 0:
                        if (!y.current) {
                          L.next = 6;
                          break;
                        }
                        return ((L.next = 3), y.current);
                      case 3:
                        (($ = L.sent), $(), (y.current = null));
                      case 6:
                      case "end":
                        return L.stop();
                    }
                }, V);
              }),
            );
            return function () {
              return q.apply(this, arguments);
            };
          })(),
          T = (function () {
            var q = X(
              M.mark(function V() {
                var $;
                return M.wrap(function (L) {
                  for (;;)
                    switch ((L.prev = L.next)) {
                      case 0:
                        return ((L.next = 2), C());
                      case 2:
                        (($ = U1(_t(_t({}, f), {}, { colorMode: d }))), (y.current = $));
                      case 4:
                      case "end":
                        return L.stop();
                    }
                }, V);
              }),
            );
            return function () {
              return q.apply(this, arguments);
            };
          })();
        return (
          T(),
          function () {
            C();
          }
        );
      } else Y1(f);
    },
    [k, O, S, d, j, f],
  ),
    _.useEffect(
      function () {
        if (Pa) {
          var C = Er.bind(Pa, {
            type: "change",
            listener: function (q) {
              s === "auto" && p(q.matches ? "dark" : "light");
            },
          });
          return C;
        }
      },
      [s],
    ));
  var I = _t(_t({}, Kh(_t(_t({}, f), {}, { colorMode: d }))), {}, x({}, b1, !0));
  return E.createElement(
    Xh.Provider,
    { value: !0 },
    E.createElement(
      Jh.Provider,
      { value: d },
      E.createElement(
        z1.Provider,
        { value: b },
        E.createElement(
          $1.Provider,
          { value: f },
          E.createElement(
            V1.Provider,
            { value: m },
            !j && de("platform_dst_subtree_theming")
              ? E.createElement("div", ne({}, I, { className: R([Q1.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function tg() {
  var e = _.useContext(Jh),
    t = Tc(),
    r = _.useState(t?.colorMode || "light"),
    n = H(r, 2),
    a = n[0],
    o = n[1];
  return (
    _.useEffect(
      function () {
        if (!e) {
          var i = new Mc(function (s) {
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
var Z1 = function () {
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
  rg = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Z1() });
  },
  eO = rg(),
  tO = _.createContext(rg()),
  rO = function (e) {
    return e.value++;
  },
  nO = function (e) {
    return e ? e.prefix : "";
  },
  aO = function (e) {
    var t = e || eO,
      r = nO(t),
      n = rO(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  ng = function () {
    var e = _.useContext(tO),
      t = _.useState(function () {
        return aO(e);
      })[0];
    return t;
  },
  oO = function () {
    var e = ng().uid;
    return e;
  },
  iO = function () {
    var e = ng().gen;
    return e;
  },
  Rs,
  ko = (Rs = E.useId) !== null && Rs !== void 0 ? Rs : void 0;
function sO() {
  return ko && de("platform-dst-react-18-use-id")
    ? de("platform-dst-react-18-use-id-selector-safe")
      ? ko().replace(/[:«»]/g, "_")
      : ko()
    : "uid".concat(oO());
}
function cO() {
  if (ko && de("platform-dst-react-18-use-id")) {
    var e = sO();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return iO();
}
var Dc = function (t) {
  var r = t.children,
    n = t.testId,
    a = t.role,
    o = t.id;
  return _.createElement(
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
Dc.displayName = "VisuallyHidden";
function uO(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function lO(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var dO = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(lO(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = uO(a);
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
  Se = "-ms-",
  Vo = "-moz-",
  ee = "-webkit-",
  ag = "comm",
  Fc = "rule",
  Lc = "decl",
  fO = "@import",
  og = "@keyframes",
  vO = "@layer",
  pO = Math.abs,
  _i = String.fromCharCode,
  hO = Object.assign;
function gO(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3)
    : 0;
}
function ig(e) {
  return e.trim();
}
function bO(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function cc(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ba(e, t, r) {
  return e.slice(t, r);
}
function kt(e) {
  return e.length;
}
function Nc(e) {
  return e.length;
}
function ho(e, t) {
  return (t.push(e), e);
}
function mO(e, t) {
  return e.map(t).join("");
}
var wi = 1,
  Wr = 1,
  sg = 0,
  Le = 0,
  me = 0,
  tn = "";
function ki(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: wi,
    column: Wr,
    length: i,
    return: "",
  };
}
function va(e, t) {
  return hO(ki("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function yO() {
  return me;
}
function _O() {
  return ((me = Le > 0 ? Ee(tn, --Le) : 0), Wr--, me === 10 && ((Wr = 1), wi--), me);
}
function Ve() {
  return ((me = Le < sg ? Ee(tn, Le++) : 0), Wr++, me === 10 && ((Wr = 1), wi++), me);
}
function Rt() {
  return Ee(tn, Le);
}
function Oo() {
  return Le;
}
function Xa(e, t) {
  return Ba(tn, e, t);
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
function cg(e) {
  return ((wi = Wr = 1), (sg = kt((tn = e))), (Le = 0), []);
}
function ug(e) {
  return ((tn = ""), e);
}
function Eo(e) {
  return ig(Xa(Le - 1, uc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wO(e) {
  for (; (me = Rt()) && me < 33; ) Ve();
  return qa(e) > 2 || qa(me) > 3 ? "" : " ";
}
function kO(e, t) {
  for (; --t && Ve() && !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97)); );
  return Xa(e, Oo() + (t < 6 && Rt() == 32 && Ve() == 32));
}
function uc(e) {
  for (; Ve(); )
    switch (me) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uc(me);
        break;
      case 40:
        e === 41 && uc(e);
        break;
      case 92:
        Ve();
        break;
    }
  return Le;
}
function OO(e, t) {
  for (; Ve() && e + me !== 57; ) if (e + me === 84 && Rt() === 47) break;
  return "/*" + Xa(t, Le - 1) + "*" + _i(e === 47 ? e : Ve());
}
function EO(e) {
  for (; !qa(Rt()); ) Ve();
  return Xa(e, Le);
}
function SO(e) {
  return ug(So("", null, null, null, [""], (e = cg(e)), 0, [0], e));
}
function So(e, t, r, n, a, o, i, s, c) {
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
      y = "",
      k = a,
      w = o,
      O = n,
      S = y;
    g;
  )
    switch (((h = m), (m = Ve()))) {
      case 40:
        if (h != 108 && Ee(S, d - 1) == 58) {
          cc((S += te(Eo(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Eo(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += wO(h);
        break;
      case 92:
        S += kO(Oo() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            ho(xO(OO(Ve(), Oo()), t, r), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * f:
        s[u++] = kt(S) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (b == -1 && (S = te(S, /\f/g, "")),
              v > 0 &&
                kt(S) - d &&
                ho(v > 32 ? Lf(S + ";", n, r, d - 1) : Lf(te(S, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            S += ";";
          default:
            if ((ho((O = Ff(S, t, r, u, l, a, s, y, (k = []), (w = []), d)), o), m === 123))
              if (l === 0) So(S, t, O, O, k, o, d, s, w);
              else
                switch (p === 99 && Ee(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    So(
                      e,
                      O,
                      O,
                      n && ho(Ff(e, O, O, 0, 0, a, s, y, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      s,
                      n ? k : w,
                    );
                    break;
                  default:
                    So(S, O, O, O, [""], w, 0, s, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (y = S = ""), (d = i));
        break;
      case 58:
        ((d = 1 + kt(S)), (v = h));
      default:
        if (f < 1) {
          if (m == 123) --f;
          else if (m == 125 && f++ == 0 && _O() == 125) continue;
        }
        switch (((S += _i(m)), m * f)) {
          case 38:
            b = l > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            ((s[u++] = (kt(S) - 1) * b), (b = 1));
            break;
          case 64:
            (Rt() === 45 && (S += Eo(Ve())), (p = Rt()), (l = d = kt((y = S += EO(Oo())))), m++);
            break;
          case 45:
            h === 45 && kt(S) == 2 && (f = 0);
        }
    }
  return o;
}
function Ff(e, t, r, n, a, o, i, s, c, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = Nc(p), h = 0, f = 0, g = 0; h < n; ++h)
    for (var b = 0, m = Ba(e, d + 1, (d = pO((f = i[h])))), y = e; b < v; ++b)
      (y = ig(f > 0 ? p[b] + " " + m : te(m, /&\f/g, p[b]))) && (c[g++] = y);
  return ki(e, t, r, a === 0 ? Fc : s, c, u, l);
}
function xO(e, t, r) {
  return ki(e, t, r, ag, _i(yO()), Ba(e, 2, -2), 0);
}
function Lf(e, t, r, n) {
  return ki(e, t, r, Lc, Ba(e, 0, n), Ba(e, n + 1, -1), n);
}
function $r(e, t) {
  for (var r = "", n = Nc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function PO(e, t, r, n) {
  switch (e.type) {
    case vO:
      if (e.children.length) break;
    case fO:
    case Lc:
      return (e.return = e.return || e.value);
    case ag:
      return "";
    case og:
      return (e.return = e.value + "{" + $r(e.children, n) + "}");
    case Fc:
      e.value = e.props.join(",");
  }
  return kt((r = $r(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function CO(e) {
  var t = Nc(e);
  return function (r, n, a, o) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, n, a, o) || "";
    return i;
  };
}
function RO(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function AO(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var jO = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Rt()), a === 38 && o === 12 && (r[n] = 1), !qa(o); ) Ve();
    return Xa(t, Le);
  },
  IO = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (qa(a)) {
        case 0:
          (a === 38 && Rt() === 12 && (r[n] = 1), (t[n] += jO(Le - 1, r, n)));
          break;
        case 2:
          t[n] += Eo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Rt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += _i(a);
      }
    while ((a = Ve()));
    return t;
  },
  TO = function (t, r) {
    return ug(IO(cg(t), r));
  },
  Nf = new WeakMap(),
  MO = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Nf.get(n)) && !a) {
        Nf.set(t, !0);
        for (var o = [], i = TO(r, o), s = n.props, c = 0, u = 0; c < i.length; c++)
          for (var l = 0; l < s.length; l++, u++)
            t.props[u] = o[c] ? i[c].replace(/&\f/g, s[l]) : s[l] + " " + i[c];
      }
    }
  },
  DO = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function lg(e, t) {
  switch (gO(e, t)) {
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
      return ee + e + Vo + e + Se + e + e;
    case 6828:
    case 4268:
      return ee + e + Se + e + e;
    case 6165:
      return ee + e + Se + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Se + "flex-$1$2") + e;
    case 5443:
      return ee + e + Se + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + Se + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + Se + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + Se + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Se + te(e, "grow", "positive") + e;
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
          te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Se + "flex-pack:$3"),
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
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return (
              te(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ee + "$2-$3$1" + Vo + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~cc(e, "stretch") ? lg(te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, kt(e) - 3 - (~cc(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return (
            te(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ee +
                (Ee(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ee +
                "$2$3$1" +
                Se +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return ee + e + Se + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + Se + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + Se + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Se + e + e;
  }
  return e;
}
var FO = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Lc:
          t.return = lg(t.value, t.length);
          break;
        case og:
          return $r([va(t, { value: te(t.value, "@", "@" + ee) })], a);
        case Fc:
          if (t.length)
            return mO(t.props, function (o) {
              switch (bO(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return $r([va(t, { props: [te(o, /:(read-\w+)/, ":" + Vo + "$1")] })], a);
                case "::placeholder":
                  return $r(
                    [
                      va(t, { props: [te(o, /:(plac\w+)/, ":" + ee + "input-$1")] }),
                      va(t, { props: [te(o, /:(plac\w+)/, ":" + Vo + "$1")] }),
                      va(t, { props: [te(o, /:(plac\w+)/, Se + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  LO = [FO],
  NO = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var g = f.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || LO,
      o = {},
      i,
      s = [];
    ((i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var g = f.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
            o[g[b]] = !0;
          s.push(f);
        },
      ));
    var c,
      u = [MO, DO];
    {
      var l,
        d = [
          PO,
          RO(function (f) {
            l.insert(f);
          }),
        ],
        p = CO(u.concat(a, d)),
        v = function (g) {
          return $r(SO(g), p);
        };
      c = function (g, b, m, y) {
        ((l = m), v(g ? g + "{" + b.styles + "}" : b.styles), y && (h.inserted[b.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new dO({
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
    return (h.sheet.hydrate(s), h);
  },
  As = { exports: {} },
  re = {};
var Bf;
function BO() {
  if (Bf) return re;
  Bf = 1;
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
    h = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    b = e ? Symbol.for("react.responder") : 60118,
    m = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
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
    return y(w) === u;
  }
  return (
    (re.AsyncMode = c),
    (re.ConcurrentMode = u),
    (re.ContextConsumer = s),
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
      return k(w) || y(w) === c;
    }),
    (re.isConcurrentMode = k),
    (re.isContextConsumer = function (w) {
      return y(w) === s;
    }),
    (re.isContextProvider = function (w) {
      return y(w) === i;
    }),
    (re.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (re.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (re.isFragment = function (w) {
      return y(w) === n;
    }),
    (re.isLazy = function (w) {
      return y(w) === h;
    }),
    (re.isMemo = function (w) {
      return y(w) === v;
    }),
    (re.isPortal = function (w) {
      return y(w) === r;
    }),
    (re.isProfiler = function (w) {
      return y(w) === o;
    }),
    (re.isStrictMode = function (w) {
      return y(w) === a;
    }),
    (re.isSuspense = function (w) {
      return y(w) === d;
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
            w.$$typeof === s ||
            w.$$typeof === l ||
            w.$$typeof === g ||
            w.$$typeof === b ||
            w.$$typeof === m ||
            w.$$typeof === f))
      );
    }),
    (re.typeOf = y),
    re
  );
}
var qf;
function qO() {
  return (qf || ((qf = 1), (As.exports = BO())), As.exports);
}
var js, Uf;
function UO() {
  if (Uf) return js;
  Uf = 1;
  var e = qO(),
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
  var s = Object.defineProperty,
    c = Object.getOwnPropertyNames,
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
      var m = c(f);
      u && (m = m.concat(u(f)));
      for (var y = i(h), k = i(f), w = 0; w < m.length; ++w) {
        var O = m[w];
        if (!r[O] && !(g && g[O]) && !(k && k[O]) && !(y && y[O])) {
          var S = l(f, O);
          try {
            s(h, O, S);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((js = v), js);
}
UO();
var zO = !0;
function dg(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Bc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || zO === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  fg = function (t, r, n) {
    Bc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function $O(e) {
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
var VO = {
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
  GO = /[A-Z]|^ms/g,
  HO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  vg = function (t) {
    return t.charCodeAt(1) === 45;
  },
  zf = function (t) {
    return t != null && typeof t != "boolean";
  },
  Is = AO(function (e) {
    return vg(e) ? e : e.replace(GO, "-$&").toLowerCase();
  }),
  $f = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(HO, function (n, a, o) {
            return ((Ot = { name: a, styles: o, next: Ot }), a);
          });
    }
    return VO[t] !== 1 && !vg(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ua(e, t, r) {
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
        var s = o.styles + ";";
        return s;
      }
      return WO(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ot,
          u = r(e);
        return ((Ot = c), Ua(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function WO(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Ua(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0
          ? (n += o + "{" + t[s] + "}")
          : zf(s) && (n += Is(o) + ":" + $f(o, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++) zf(i[c]) && (n += Is(o) + ":" + $f(o, i[c]) + ";");
      else {
        var u = Ua(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Is(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var Vf = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ot;
function qc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Ot = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Ua(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += Ua(r, t, e[s])), n)) {
      var c = o;
      a += c[s];
    }
  Vf.lastIndex = 0;
  for (var u = "", l; (l = Vf.exec(a)) !== null; ) u += "-" + l[1];
  var d = $O(a) + u;
  return { name: d, styles: a, next: Ot };
}
var KO = function (t) {
    return t();
  },
  YO = ad.useInsertionEffect ? ad.useInsertionEffect : !1,
  pg = YO || KO,
  hg = _.createContext(typeof HTMLElement < "u" ? NO({ key: "css" }) : null);
hg.Provider;
var gg = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(hg);
      return t(r, a, n);
    });
  },
  bg = _.createContext({}),
  Uc = {}.hasOwnProperty,
  lc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  JO = function (t, r) {
    var n = {};
    for (var a in r) Uc.call(r, a) && (n[a] = r[a]);
    return ((n[lc] = t), n);
  },
  XO = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Bc(r, n, a),
      pg(function () {
        return fg(r, n, a);
      }),
      null
    );
  },
  QO = gg(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[lc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = dg(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var s = qc(o, void 0, _.useContext(bg));
    i += t.key + "-" + s.name;
    var c = {};
    for (var u in e) Uc.call(e, u) && u !== "css" && u !== lc && (c[u] = e[u]);
    return (
      (c.className = i),
      r && (c.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(XO, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        _.createElement(a, c),
      )
    );
  }),
  ZO = QO,
  zt = function (t, r) {
    var n = arguments;
    if (r == null || !Uc.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = ZO), (o[1] = JO(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return _.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(zt || (zt = {}));
function Dt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return qc(t);
}
var eE = function e(t) {
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
function tE(e, t, r) {
  var n = [],
    a = dg(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var rE = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      pg(function () {
        for (var a = 0; a < n.length; a++) fg(r, n[a], !1);
      }),
      null
    );
  },
  nE = gg(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        var d = qc(u, t.registered);
        return (r.push(d), Bc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        return tE(t.registered, n, eE(u));
      },
      o = { css: n, cx: a, theme: _.useContext(bg) },
      i = e.children(o);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(rE, { cache: t, serializedArr: r }),
      i,
    );
  });
function aE(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var mg = 2,
  dc = Dt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: mg,
  }),
  fc = Dt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -mg,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  oE = Dt({
    "&:focus": dc,
    "&:focus-visible": dc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  iE = Dt({
    "&:focus": fc,
    "&:focus-visible": fc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  yg = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? fc : dc,
      o = r ? iE : oE,
      i = typeof n > "u" ? o : n === "on" && a;
    return zt(nE, null, function (s) {
      var c = s.css,
        u = s.cx;
      return _.Children.only(
        i ? _.cloneElement(t, { className: u([c(i), t.props.className]) }) : t,
      );
    });
  });
yg.displayName = "FocusRing";
function Bt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var sE = 9;
function Gf(e) {
  e.keyCode !== sE && Bt(e);
}
var cE = {
    onMouseDownCapture: Bt,
    onMouseUpCapture: Bt,
    onKeyDownCapture: Gf,
    onKeyUpCapture: Gf,
    onTouchStartCapture: Bt,
    onTouchEndCapture: Bt,
    onPointerDownCapture: Bt,
    onPointerUpCapture: Bt,
    onClickCapture: Bt,
    onClick: Bt,
  },
  uE = {};
function lE(e) {
  var t = e.isInteractive;
  return t ? uE : cE;
}
function Hf(e, t) {
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
      ? Hf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xt = 8,
  Ts = ["default", "primary", "danger", "warning"],
  vc = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  dE = { default: vc.default, compact: vc.compact, none: "inherit" },
  fE = {
    default: "0 ".concat(Xt + Xt / 4, "px"),
    compact: "0 ".concat(Xt + Xt / 4, "px"),
    none: "0",
  },
  vE = { compact: "0 ".concat(Xt / 4, "px"), default: "0 ".concat(Xt / 4, "px"), none: "0" },
  pE = { default: "middle", compact: "middle", none: "baseline" },
  _g = { content: "0 ".concat(Xt / 4, "px"), icon: "0 ".concat(Xt / 4, "px") },
  wg = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  hE = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Me(Me({}, wg), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  gE = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  bE = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  mE = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  yE = {
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
  _E = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  wE = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  kE = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Me(
      Me({}, wg),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  OE = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function EE(e) {
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
        height: vc[r],
        lineHeight: dE[r],
        padding: o ? vE[r] : fE[r],
        verticalAlign: pE[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? kE
        : Me(
            Me(
              Me(
                Me(
                  Me(
                    Me(
                      Me(Me({}, t === "default" && hE), t === "primary" && gE),
                      t === "link" && bE,
                    ),
                    t === "subtle" && mE,
                  ),
                  t === "subtle-link" && yE,
                ),
                t === "warning" && _E,
              ),
              t === "danger" && wE,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Ts.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Ts.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Ts.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            OE,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Wf(e) {
  var t = e.spacing;
  return Dt({
    display: "flex",
    margin: t === "none" ? 0 : _g.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function SE(e) {
  var t = e.spacing;
  return Dt({
    margin: t === "none" ? 0 : _g.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function xE(e) {
  var t = e.hasOverlay;
  return Dt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var PE = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  zc = function (t) {
    return t && _.isValidElement(t) && t.type === Dc;
  },
  CE = [
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
  RE = { "> *": { pointerEvents: "none" } },
  AE = Dt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  jE = Dt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Kf = function (t, r) {
    return !t || zc(t) ? null : r;
  },
  IE = function (t, r) {
    return zc(t) ? t : t ? zt("span", { css: r }, t) : null;
  },
  TE = E.forwardRef(function (t, r) {
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
      h = t.iconAfter,
      f = t.iconBefore,
      g = t.interactionName,
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      y = t.isSelected,
      k = y === void 0 ? !1 : y,
      w = t.onBlur,
      O = t.onClick,
      S = O === void 0 ? xe : O,
      j = t.onFocus,
      I = t.onMouseDown,
      C = I === void 0 ? xe : I,
      T = t.overlay;
    t.shouldFitContainer;
    var q = t.spacing,
      V = q === void 0 ? "default" : q,
      $ = t.tabIndex,
      W = $ === void 0 ? 0 : $,
      L = t.type,
      K = L === void 0 ? (d ? void 0 : "button") : L,
      B = t.testId,
      U = ue(t, CE),
      G = _.useRef(),
      ae = _.useCallback(
        function (pe) {
          if (((G.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [G, r],
      );
    aE(G, s);
    var ie = _.useContext(jc),
      ce = _.useCallback(
        function (pe, qe) {
          (ie && ie.tracePress(g, pe.timeStamp), S(pe, qe));
        },
        [S, ie, g],
      ),
      Oe = La({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      F = _.useCallback(
        function (pe) {
          (pe.preventDefault(), C(pe));
        },
        [C],
      );
    _.useEffect(
      function () {
        var pe = G.current;
        m && pe && pe === document.activeElement && pe.blur();
      },
      [m],
    );
    var _e = !!T,
      Be = Dt(xE({ hasOverlay: _e })),
      ve = !m && !_e,
      Ce = {};
    return (
      (k || m || o === "warning") &&
        (Ce = {
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
        yg,
        null,
        zt(
          v,
          ne(
            {},
            U,
            {
              ref: ae,
              className: l,
              css: [c, ve ? null : RE],
              "data-has-overlay": _e ? !0 : void 0,
              "data-testid": B,
              disabled: m,
              href: ve ? d : void 0,
              onBlur: w,
              onClick: Oe,
              onFocus: j,
              onMouseDown: F,
              tabIndex: m ? -1 : W,
              type: K,
            },
            lE({ isInteractive: ve }),
          ),
          f ? zt("span", { css: [Be, Wf({ spacing: V }), Kf(u, AE)] }, f) : null,
          IE(u, [Be, SE({ spacing: V })]),
          h ? zt("span", { css: [Be, Wf({ spacing: V }), Kf(u, jE)] }, h) : null,
          T ? zt("span", { css: [PE, Ce] }, T) : null,
        ),
      )
    );
  });
function ME(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return zc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var DE = [
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
  Yf = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  $c = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        u = c === void 0 ? !1 : c,
        l = t.onMouseDown,
        d = l === void 0 ? xe : l,
        p = t.onMouseUp,
        v = p === void 0 ? xe : p,
        h = t.shouldFitContainer,
        f = h === void 0 ? !1 : h,
        g = t.spacing,
        b = g === void 0 ? "default" : g,
        m = ue(t, DE),
        y = ME({ children: o, iconBefore: i, iconAfter: s }),
        k = _.useState(!1),
        w = H(k, 2),
        O = w[0],
        S = w[1],
        j = _.useCallback(
          function (T) {
            (d(T), Yf && S(!0));
          },
          [d, S],
        ),
        I = _.useCallback(
          function (T) {
            (v(T), Yf && S(!1));
          },
          [v, S],
        ),
        C = _.useMemo(
          function () {
            return EE({
              appearance: a,
              spacing: b,
              isSelected: u,
              shouldFitContainer: f,
              isOnlySingleIcon: y,
            });
          },
          [a, b, u, f, y],
        );
      return E.createElement(
        TE,
        ne({}, m, {
          ref: r,
          appearance: a,
          buttonCss: C,
          children: o,
          "data-firefox-is-active": O ? !0 : void 0,
          iconAfter: s,
          iconBefore: i,
          isSelected: u,
          onMouseDown: j,
          onMouseUp: I,
          spacing: b,
        }),
      );
    }),
  );
$c.displayName = "Button";
function Jf(e) {
  return E.createElement($c, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function FE(e) {
  return E.createElement($c, ne({}, e, { appearance: "subtle" }));
}
var LE = { container: "_1e0c1txw _kqswh2mm" };
function NE(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return E.createElement(
    bi,
    { as: "li", testId: r, key: t, xcss: LE.container, paddingInline: "space.100" },
    E.createElement(
      Zk,
      { testId: r && "".concat(r, "-text") },
      E.createElement(Dc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var Xf = {},
  Qf =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function BE(e, t) {
  return !!(e === t || (Qf(e) && Qf(t)));
}
function qE(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!BE(e[r], t[r])) return !1;
  return !0;
}
function UE(e, t) {
  t === void 0 && (t = qE);
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
var zE = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    s = n.transform,
    c = t.length,
    u = c > o,
    l = u && o - 4 < r,
    d = u && r < c - o + 3,
    p = UE(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      return t.slice(g, b).map(function (m, y) {
        return s(m, g + y, a);
      });
    });
  if (!u) return p(0, c);
  if (l && !d) {
    var v = o - 2;
    return [].concat(
      we(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - v })],
      we(p(c - v)),
    );
  }
  if (!l && d) {
    var h = o - 2;
    return [].concat(
      we(p(0, h)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: h + 1, to: c - 1 })],
      we(p(c - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    we(p(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    we(p(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    we(p(c - 1)),
  );
};
function Zf(e, t) {
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
function $E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var pc = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect4ttxp",
    navigatorIconWrapper: "_18zr12x7",
  },
  VE = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function ev(e) {
  var t = e.chevronDirection,
    r = t === "left" ? _k : Ok;
  return E.createElement(
    bi,
    { as: "span", xcss: pc.navigatorIconWrapper },
    E.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function GE(e, t) {
  var r = e.components,
    n = r === void 0 ? Xf : r,
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
    h = v === void 0 ? "next" : v,
    f = e.style,
    g = f === void 0 ? Xf : f,
    b = e.max,
    m = b === void 0 ? 7 : b,
    y = e.onChange,
    k = y === void 0 ? xe : y,
    w = e.pages,
    O = e.getPageLabel,
    S = e.renderEllipsis,
    j = S === void 0 ? NE : S,
    I = e.analyticsContext,
    C = e.testId,
    T = e.isDisabled,
    q = vk(i, function () {
      return o || 0;
    }),
    V = H(q, 2),
    $ = V[0],
    W = V[1],
    L = La(
      $E(
        {
          fn: function (U, G) {
            var ae = U.event,
              ie = U.selectedPageIndex;
            (i === void 0 && W(ie), k && k(ae, w[ie], G));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        VE,
      ),
    ),
    K = function (U, G, ae) {
      var ie = w[$],
        ce = "".concat(l, " ").concat(O ? O(U, G) : U),
        Oe = U === ie;
      return E.createElement(
        wo,
        { as: "li", xcss: pc.paginationMenuItem, key: "page-".concat(O ? O(U, G) : G) },
        E.createElement(
          FE,
          {
            component: n.Page,
            onClick: function (_e) {
              return L({ event: _e, selectedPageIndex: G });
            },
            "aria-current": Oe ? "page" : void 0,
            "aria-label": ce,
            isSelected: Oe,
            isDisabled: T,
            page: U,
            testId:
              ae &&
              ""
                .concat(ae, "--")
                .concat(Oe ? "current-" : "", "page-")
                .concat(G),
          },
          O ? O(U, G) : U,
        ),
      );
    };
  return E.createElement(
    bi,
    { testId: C, style: g, ref: t, "aria-label": c, as: "nav" },
    E.createElement(
      wo,
      { space: "space.0", alignBlock: "center" },
      E.createElement(Jf, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (U) {
          return L({ event: U, selectedPageIndex: $ - 1 });
        },
        isDisabled: T || $ === 0,
        iconBefore: E.createElement(ev, { chevronDirection: "left" }),
        "aria-label": p,
        testId: C && "".concat(C, "--left-navigator"),
      }),
      E.createElement(
        wo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: pc.paginationMenu },
        zE(w, $, { max: m, ellipsis: j, transform: K }, C),
      ),
      E.createElement(Jf, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (U) {
          return L({ event: U, selectedPageIndex: $ + 1 });
        },
        isDisabled: T || $ === w.length - 1,
        iconBefore: E.createElement(ev, { chevronDirection: "right" }),
        "aria-label": h,
        testId: C && "".concat(C, "--right-navigator"),
      }),
    ),
  );
}
var HE = _.memo(_.forwardRef(GE));
function WE(e, t, r) {
  return (
    (t = Z(t)),
    We(e, kg() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function kg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (kg = function () {
    return !!e;
  })();
}
var KE = (function (e) {
    function t() {
      var r;
      he(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = WE(this, t, [].concat(a))),
        x(r, "onChange", function (i, s, c) {
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
              l = we(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return E.createElement(HE, {
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
  })(E.Component),
  YE = ["isRanking", "testId"],
  JE = [
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
function pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tv(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var rv = "--local-dynamic-table-text-color",
  XE = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ue(t, YE);
    return _.createElement(
      "thead",
      ne({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  QE = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      u = ue(e, JE),
      l = pa(
        pa(pa({}, s), r && Ah({ width: r })),
        {},
        x({}, rv, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === br,
      p = a === Uo,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      h = n ? "th" : "td";
    return _.createElement(
      h,
      ne({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": c }, u, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: pa(
          pa({}, l),
          {},
          { "--_17ckjys": Ch("var(--ds-text-subtle, ".concat("var(".concat(rv, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function ZE(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Og() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Og() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Og = function () {
    return !!e;
  })();
}
function eS(e) {
  return (function (t) {
    function r() {
      var n;
      he(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = ZE(this, r, [].concat(o))),
        x(n, "state", { refWidth: 0, refHeight: 0 }),
        x(n, "innerRef", function (s) {
          s && !n.props.isRanking && (n.ref = s);
        }),
        x(n, "updateDimensions", function () {
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
var ha = {},
  nv;
function tS() {
  if (nv) return ha;
  ((nv = 1), Object.defineProperty(ha, "__esModule", { value: !0 }), (ha.default = void 0));
  var e = r(yr()),
    t = r(gi);
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
  return ((n.displayName = "ArrowDownIcon"), (ha.default = n), ha);
}
var rS = tS();
const nS = Zt(rS);
var ga = {},
  av;
function aS() {
  if (av) return ga;
  ((av = 1), Object.defineProperty(ga, "__esModule", { value: !0 }), (ga.default = void 0));
  var e = r(yr()),
    t = r(gi);
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
  return ((n.displayName = "ArrowUpIcon"), (ga.default = n), ga);
}
var oS = aS();
const iS = Zt(oS);
var sS = "Escape";
function cS(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (i) {
        r || n.current || i.key !== sS || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!r)
        return Er.bindAll(
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
function Nr(e) {
  var t = _.useRef(e);
  return (
    _.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var uS = _.createContext(null),
  lS = _.createContext(null);
function dS() {
  var e = _.useContext(lS);
  return e;
}
function fS(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = _.useContext(uS),
    o = dS();
  _.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var _a = { none: 0, small: 100, medium: 350, large: 700 },
  Ms = 0.5,
  vS = { none: _a.none, small: _a.small * Ms, medium: _a.medium * Ms, large: _a.large * Ms },
  pS = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  hS = function () {
    if (!pS()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  gS = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  bS = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: "unmount" },
      r = _.useRef([]);
    return (
      _.useEffect(function () {
        return function () {
          r.current.length &&
            (r.current.forEach(function (n) {
              return clearTimeout(n);
            }),
            (r.current = []));
        };
      }, gS(t)),
      _.useCallback(function (n, a) {
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
  Eg = { appear: !0, isExiting: !1 },
  Sg = _.createContext(Eg),
  ov = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Eg;
    return E.createElement(Sg.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  iv = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  mS = function (t, r) {
    for (var n = r.concat([]), a = yS(r), o = 0; o < t.length; o++) {
      var i = t[o],
        s = !a[i.key];
      s && n.splice(o + 1, 0, i);
    }
    return n;
  },
  yS = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  _S = function (t, r) {
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
  xg = _.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = _.useState([null, n]),
      i = H(o, 2),
      s = i[0],
      c = i[1],
      u = _.useState([]),
      l = H(u, 2),
      d = l[0],
      p = l[1],
      v = _.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = H(v, 2),
      f = h[0],
      g = h[1];
    if (
      (_.useEffect(function () {
        f.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = H(s, 2),
      m = b[0],
      y = b[1],
      k = iv(m),
      w = iv(y);
    y !== n && c([y, n]);
    var O = _S(w, k),
      S = !!O.size,
      j = w;
    if ((S && (j = mS(w, k)), a))
      if (d.length) j = d;
      else {
        var I = j.filter(function (C) {
          return O.has(C.key);
        });
        I.length && p(I);
      }
    return (
      O.size
        ? (j = j.map(function (C) {
            var T = O.has(C.key);
            return ov(C, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (O.delete(C.key), O.size === 0 && (c([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (C) {
            return ov(C, f);
          })),
      j
    );
  }),
  wS = function () {
    return _.useContext(Sg);
  };
xg.displayName = "ExitingPersistence";
function kS() {
  var e = _.useRef("");
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
var OS = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: xe };
  }),
  ES = function () {
    var t = kS(),
      r = _.useContext(OS);
    return r(t);
  },
  SS = function (t) {
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
      v = ES(),
      h = wS(),
      f = h.isExiting,
      g = h.onFinish,
      b = h.appear,
      m = bS(),
      y = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      O = _.useState(b),
      S = H(O, 2),
      j = S[0],
      I = S[1];
    return (
      _.useEffect(
        function () {
          var C = !1;
          if (!y) {
            if (!b) {
              l && l(w);
              return;
            }
            var T = function () {
              (w === "exiting" && g?.(), C || I(!1), l?.(w));
            };
            if (hS()) {
              T();
              return;
            }
            return (
              I(!0),
              m(T, f ? vS[p] : _a[p] + k),
              function () {
                C = !0;
              }
            );
          }
        },
        [g, w, f, p, k, y, m],
      ),
      r(
        {
          ref: v.ref,
          className: j
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
                ((!f && i === "fade-in") || (f && c === "fade-in")) && R(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && c === "fade-out")) && R(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && c === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && c === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && c === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && c === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && c === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && c === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && c === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && c === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && c === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && c === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && c === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && c === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && c === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && c === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && c === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && c === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && c === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && c === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && c === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && c === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && c === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && c === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && c === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && c === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && c === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && c === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  xS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  PS = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? xS[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      SS,
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
  CS = _.createContext();
_.createContext();
var RS = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  AS = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  jS = function (t, r) {
    if (typeof t == "function") return AS(t, r);
    t != null && (t.current = r);
  },
  sv = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  cv =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  De = "top",
  ot = "bottom",
  it = "right",
  Fe = "left",
  Vc = "auto",
  Qa = [De, ot, it, Fe],
  Kr = "start",
  za = "end",
  IS = "clippingParents",
  Pg = "viewport",
  ba = "popper",
  TS = "reference",
  uv = Qa.reduce(function (e, t) {
    return e.concat([t + "-" + Kr, t + "-" + za]);
  }, []),
  Cg = [].concat(Qa, [Vc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Kr, t + "-" + za]);
  }, []),
  MS = "beforeRead",
  DS = "read",
  FS = "afterRead",
  LS = "beforeMain",
  NS = "main",
  BS = "afterMain",
  qS = "beforeWrite",
  US = "write",
  zS = "afterWrite",
  $S = [MS, DS, FS, LS, NS, BS, qS, US, zS];
function Tt(e) {
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
function mr(e) {
  var t = Ge(e).Element;
  return e instanceof t || e instanceof Element;
}
function at(e) {
  var t = Ge(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ge(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function VS(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !at(o) ||
      !Tt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var s = a[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function GS(e) {
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
        !at(a) ||
          !Tt(a) ||
          (Object.assign(a.style, s),
          Object.keys(o).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const HS = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: VS,
  effect: GS,
  requires: ["computeStyles"],
};
function At(e) {
  return e.split("-")[0];
}
var fr = Math.max,
  Go = Math.min,
  Yr = Math.round;
function hc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Rg() {
  return !/^((?!chrome|android).)*safari/i.test(hc());
}
function Jr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    at(e) &&
    ((a = (e.offsetWidth > 0 && Yr(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && Yr(n.height) / e.offsetHeight) || 1));
  var i = mr(e) ? Ge(e) : window,
    s = i.visualViewport,
    c = !Rg() && r,
    u = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (c && s ? s.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function Hc(e) {
  var t = Jr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Ag(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Gc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Gt(e) {
  return Ge(e).getComputedStyle(e);
}
function WS(e) {
  return ["table", "td", "th"].indexOf(Tt(e)) >= 0;
}
function tr(e) {
  return ((mr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Oi(e) {
  return Tt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gc(e) ? e.host : null) || tr(e);
}
function lv(e) {
  return !at(e) || Gt(e).position === "fixed" ? null : e.offsetParent;
}
function KS(e) {
  var t = /firefox/i.test(hc()),
    r = /Trident/i.test(hc());
  if (r && at(e)) {
    var n = Gt(e);
    if (n.position === "fixed") return null;
  }
  var a = Oi(e);
  for (Gc(a) && (a = a.host); at(a) && ["html", "body"].indexOf(Tt(a)) < 0; ) {
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
function Za(e) {
  for (var t = Ge(e), r = lv(e); r && WS(r) && Gt(r).position === "static"; ) r = lv(r);
  return r && (Tt(r) === "html" || (Tt(r) === "body" && Gt(r).position === "static"))
    ? t
    : r || KS(e) || t;
}
function Wc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ca(e, t, r) {
  return fr(e, Go(t, r));
}
function YS(e, t, r) {
  var n = Ca(e, t, r);
  return n > r ? r : n;
}
function jg() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ig(e) {
  return Object.assign({}, jg(), e);
}
function Tg(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var JS = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Ig(typeof t != "number" ? t : Tg(t, Qa))
  );
};
function XS(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    s = At(r.placement),
    c = Wc(s),
    u = [Fe, it].indexOf(s) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = JS(a.padding, r),
      p = Hc(o),
      v = c === "y" ? De : Fe,
      h = c === "y" ? ot : it,
      f = r.rects.reference[l] + r.rects.reference[c] - i[c] - r.rects.popper[l],
      g = i[c] - r.rects.reference[c],
      b = Za(o),
      m = b ? (c === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - g / 2,
      k = d[v],
      w = m - p[l] - d[h],
      O = m / 2 - p[l] / 2 + y,
      S = Ca(k, O, w),
      j = c;
    r.modifiersData[n] = ((t = {}), (t[j] = S), (t.centerOffset = S - O), t);
  }
}
function QS(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Ag(t.elements.popper, a) && (t.elements.arrow = a)));
}
const ZS = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: XS,
  effect: QS,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Xr(e) {
  return e.split("-")[1];
}
var ex = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function tx(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Yr(r * a) / a || 0, y: Yr(n * a) / a || 0 };
}
function dv(e) {
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
    h = i.y,
    f = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = g.x), (f = g.y));
  var b = i.hasOwnProperty("x"),
    m = i.hasOwnProperty("y"),
    y = Fe,
    k = De,
    w = window;
  if (u) {
    var O = Za(r),
      S = "clientHeight",
      j = "clientWidth";
    if (
      (O === Ge(r) &&
        ((O = tr(r)),
        Gt(O).position !== "static" &&
          s === "absolute" &&
          ((S = "scrollHeight"), (j = "scrollWidth"))),
      (O = O),
      a === De || ((a === Fe || a === it) && o === za))
    ) {
      k = ot;
      var I = d && O === w && w.visualViewport ? w.visualViewport.height : O[S];
      ((f -= I - n.height), (f *= c ? 1 : -1));
    }
    if (a === Fe || ((a === De || a === ot) && o === za)) {
      y = it;
      var C = d && O === w && w.visualViewport ? w.visualViewport.width : O[j];
      ((v -= C - n.width), (v *= c ? 1 : -1));
    }
  }
  var T = Object.assign({ position: s }, u && ex),
    q = l === !0 ? tx({ x: v, y: f }, Ge(r)) : { x: v, y: f };
  if (((v = q.x), (f = q.y), c)) {
    var V;
    return Object.assign(
      {},
      T,
      ((V = {}),
      (V[k] = m ? "0" : ""),
      (V[y] = b ? "0" : ""),
      (V.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      V),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[k] = m ? f + "px" : ""), (t[y] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function rx(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    u = {
      placement: At(t.placement),
      variation: Xr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      dv(
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
        dv(
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
const nx = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: rx, data: {} };
var go = { passive: !0 };
function ax(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    c = Ge(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, go);
      }),
    s && c.addEventListener("resize", r.update, go),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, go);
        }),
        s && c.removeEventListener("resize", r.update, go));
    }
  );
}
const ox = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: ax,
  data: {},
};
var ix = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return ix[t];
  });
}
var sx = { start: "end", end: "start" };
function fv(e) {
  return e.replace(/start|end/g, function (t) {
    return sx[t];
  });
}
function Kc(e) {
  var t = Ge(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Yc(e) {
  return Jr(tr(e)).left + Kc(e).scrollLeft;
}
function cx(e, t) {
  var r = Ge(e),
    n = tr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = Rg();
    (u || (!u && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: o, height: i, x: s + Yc(e), y: c };
}
function ux(e) {
  var t,
    r = tr(e),
    n = Kc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = fr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = fr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + Yc(e),
    c = -n.scrollTop;
  return (
    Gt(a || r).direction === "rtl" && (s += fr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: c }
  );
}
function Jc(e) {
  var t = Gt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Mg(e) {
  return ["html", "body", "#document"].indexOf(Tt(e)) >= 0
    ? e.ownerDocument.body
    : at(e) && Jc(e)
      ? e
      : Mg(Oi(e));
}
function Ra(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Mg(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Ge(n),
    i = a ? [o].concat(o.visualViewport || [], Jc(n) ? n : []) : n,
    s = t.concat(i);
  return a ? s : s.concat(Ra(Oi(i)));
}
function gc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function lx(e, t) {
  var r = Jr(e, !1, t === "fixed");
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
function vv(e, t, r) {
  return t === Pg ? gc(cx(e, r)) : mr(t) ? lx(t, r) : gc(ux(tr(e)));
}
function dx(e) {
  var t = Ra(Oi(e)),
    r = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0,
    n = r && at(e) ? Za(e) : e;
  return mr(n)
    ? t.filter(function (a) {
        return mr(a) && Ag(a, n) && Tt(a) !== "body";
      })
    : [];
}
function fx(e, t, r, n) {
  var a = t === "clippingParents" ? dx(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    s = o.reduce(
      function (c, u) {
        var l = vv(e, u, n);
        return (
          (c.top = fr(l.top, c.top)),
          (c.right = Go(l.right, c.right)),
          (c.bottom = Go(l.bottom, c.bottom)),
          (c.left = fr(l.left, c.left)),
          c
        );
      },
      vv(e, i, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Dg(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? At(n) : null,
    o = n ? Xr(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case De:
      c = { x: i, y: t.y - r.height };
      break;
    case ot:
      c = { x: i, y: t.y + t.height };
      break;
    case it:
      c = { x: t.x + t.width, y: s };
      break;
    case Fe:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = a ? Wc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case Kr:
        c[u] = c[u] - (t[l] / 2 - r[l] / 2);
        break;
      case za:
        c[u] = c[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return c;
}
function $a(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    s = r.boundary,
    c = s === void 0 ? IS : s,
    u = r.rootBoundary,
    l = u === void 0 ? Pg : u,
    d = r.elementContext,
    p = d === void 0 ? ba : d,
    v = r.altBoundary,
    h = v === void 0 ? !1 : v,
    f = r.padding,
    g = f === void 0 ? 0 : f,
    b = Ig(typeof g != "number" ? g : Tg(g, Qa)),
    m = p === ba ? TS : ba,
    y = e.rects.popper,
    k = e.elements[h ? m : p],
    w = fx(mr(k) ? k : k.contextElement || tr(e.elements.popper), c, l, i),
    O = Jr(e.elements.reference),
    S = Dg({ reference: O, element: y, placement: a }),
    j = gc(Object.assign({}, y, S)),
    I = p === ba ? j : O,
    C = {
      top: w.top - I.top + b.top,
      bottom: I.bottom - w.bottom + b.bottom,
      left: w.left - I.left + b.left,
      right: I.right - w.right + b.right,
    },
    T = e.modifiersData.offset;
  if (p === ba && T) {
    var q = T[a];
    Object.keys(C).forEach(function (V) {
      var $ = [it, ot].indexOf(V) >= 0 ? 1 : -1,
        W = [De, ot].indexOf(V) >= 0 ? "y" : "x";
      C[V] += q[W] * $;
    });
  }
  return C;
}
function vx(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    u = c === void 0 ? Cg : c,
    l = Xr(n),
    d = l
      ? s
        ? uv
        : uv.filter(function (h) {
            return Xr(h) === l;
          })
      : Qa,
    p = d.filter(function (h) {
      return u.indexOf(h) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (h, f) {
    return ((h[f] = $a(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[At(f)]), h);
  }, {});
  return Object.keys(v).sort(function (h, f) {
    return v[h] - v[f];
  });
}
function px(e) {
  if (At(e) === Vc) return [];
  var t = xo(e);
  return [fv(e), t, fv(t)];
}
function hx(e) {
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
        h = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        g = t.options.placement,
        b = At(g),
        m = b === g,
        y = c || (m || !h ? [xo(g)] : px(g)),
        k = [g].concat(y).reduce(function (Oe, F) {
          return Oe.concat(
            At(F) === Vc
              ? vx(t, {
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
        S = new Map(),
        j = !0,
        I = k[0],
        C = 0;
      C < k.length;
      C++
    ) {
      var T = k[C],
        q = At(T),
        V = Xr(T) === Kr,
        $ = [De, ot].indexOf(q) >= 0,
        W = $ ? "width" : "height",
        L = $a(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        K = $ ? (V ? it : Fe) : V ? ot : De;
      w[W] > O[W] && (K = xo(K));
      var B = xo(K),
        U = [];
      if (
        (o && U.push(L[q] <= 0),
        s && U.push(L[K] <= 0, L[B] <= 0),
        U.every(function (Oe) {
          return Oe;
        }))
      ) {
        ((I = T), (j = !1));
        break;
      }
      S.set(T, U);
    }
    if (j)
      for (
        var G = h ? 3 : 1,
          ae = function (F) {
            var _e = k.find(function (Be) {
              var ve = S.get(Be);
              if (ve)
                return ve.slice(0, F).every(function (Ce) {
                  return Ce;
                });
            });
            if (_e) return ((I = _e), "break");
          },
          ie = G;
        ie > 0;
        ie--
      ) {
        var ce = ae(ie);
        if (ce === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const gx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: hx,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function pv(e, t, r) {
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
function hv(e) {
  return [De, it, ot, Fe].some(function (t) {
    return e[t] >= 0;
  });
}
function bx(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = $a(t, { elementContext: "reference" }),
    s = $a(t, { altBoundary: !0 }),
    c = pv(i, n),
    u = pv(s, a, o),
    l = hv(c),
    d = hv(u);
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
const mx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: bx,
};
function yx(e, t, r) {
  var n = At(e),
    a = [Fe, De].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * a),
    [Fe, it].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function _x(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Cg.reduce(function (l, d) {
      return ((l[d] = yx(d, t.rects, o)), l);
    }, {}),
    s = i[t.placement],
    c = s.x,
    u = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const wx = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: _x };
function kx(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Dg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Ox = { name: "popperOffsets", enabled: !0, phase: "read", fn: kx, data: {} };
function Ex(e) {
  return e === "x" ? "y" : "x";
}
function Sx(e) {
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
    h = r.tetherOffset,
    f = h === void 0 ? 0 : h,
    g = $a(t, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }),
    b = At(t.placement),
    m = Xr(t.placement),
    y = !m,
    k = Wc(b),
    w = Ex(k),
    O = t.modifiersData.popperOffsets,
    S = t.rects.reference,
    j = t.rects.popper,
    I = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    C =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    q = { x: 0, y: 0 };
  if (O) {
    if (o) {
      var V,
        $ = k === "y" ? De : Fe,
        W = k === "y" ? ot : it,
        L = k === "y" ? "height" : "width",
        K = O[k],
        B = K + g[$],
        U = K - g[W],
        G = v ? -j[L] / 2 : 0,
        ae = m === Kr ? S[L] : j[L],
        ie = m === Kr ? -j[L] : -S[L],
        ce = t.elements.arrow,
        Oe = v && ce ? Hc(ce) : { width: 0, height: 0 },
        F = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : jg(),
        _e = F[$],
        Be = F[W],
        ve = Ca(0, S[L], Oe[L]),
        Ce = y ? S[L] / 2 - G - ve - _e - C.mainAxis : ae - ve - _e - C.mainAxis,
        pe = y ? -S[L] / 2 + G + ve + Be + C.mainAxis : ie + ve + Be + C.mainAxis,
        qe = t.elements.arrow && Za(t.elements.arrow),
        rn = qe ? (k === "y" ? qe.clientTop || 0 : qe.clientLeft || 0) : 0,
        xr = (V = T?.[k]) != null ? V : 0,
        gt = K + Ce - xr - rn,
        Re = K + pe - xr,
        bt = Ca(v ? Go(B, gt) : B, K, v ? fr(U, Re) : U);
      ((O[k] = bt), (q[k] = bt - K));
    }
    if (s) {
      var Ht,
        st = k === "x" ? De : Fe,
        mt = k === "x" ? ot : it,
        Ue = O[w],
        Ae = w === "y" ? "height" : "width",
        Pe = Ue + g[st],
        je = Ue - g[mt],
        yt = [De, Fe].indexOf(b) !== -1,
        rr = (Ht = T?.[w]) != null ? Ht : 0,
        eo = yt ? Pe : Ue - S[Ae] - j[Ae] - rr + C.altAxis,
        to = yt ? Ue + S[Ae] + j[Ae] - rr - C.altAxis : je,
        ro = v && yt ? YS(eo, Ue, to) : Ca(v ? eo : Pe, Ue, v ? to : je);
      ((O[w] = ro), (q[w] = ro - Ue));
    }
    t.modifiersData[n] = q;
  }
}
const xx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sx,
  requiresIfExists: ["offset"],
};
function Px(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Cx(e) {
  return e === Ge(e) || !at(e) ? Kc(e) : Px(e);
}
function Rx(e) {
  var t = e.getBoundingClientRect(),
    r = Yr(t.width) / e.offsetWidth || 1,
    n = Yr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ax(e, t, r) {
  r === void 0 && (r = !1);
  var n = at(t),
    a = at(t) && Rx(t),
    o = tr(t),
    i = Jr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Tt(t) !== "body" || Jc(o)) && (s = Cx(t)),
      at(t) ? ((c = Jr(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : o && (c.x = Yc(o))),
    {
      x: i.left + s.scrollLeft - c.x,
      y: i.top + s.scrollTop - c.y,
      width: i.width,
      height: i.height,
    }
  );
}
function jx(e) {
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
function Ix(e) {
  var t = jx(e);
  return $S.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function Tx(e) {
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
function Mx(e) {
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
var gv = { placement: "bottom", modifiers: [], strategy: "absolute" };
function bv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Dx(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? gv : a;
  return function (s, c, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, gv, o),
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
          var m = typeof b == "function" ? b(l.options) : b;
          (f(),
            (l.options = Object.assign({}, o, l.options, m)),
            (l.scrollParents = {
              reference: mr(s) ? Ra(s) : s.contextElement ? Ra(s.contextElement) : [],
              popper: Ra(c),
            }));
          var y = Ix(Mx([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = y.filter(function (k) {
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
              y = b.popper;
            if (bv(m, y)) {
              ((l.rects = {
                reference: Ax(m, Za(y), l.options.strategy === "fixed"),
                popper: Hc(y),
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
                  S = w.options,
                  j = S === void 0 ? {} : S,
                  I = w.name;
                typeof O == "function" &&
                  (l = O({ state: l, options: j, name: I, instance: v }) || l);
              }
            }
          }
        },
        update: Tx(function () {
          return new Promise(function (g) {
            (v.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!bv(s, c)) return v;
    v.setOptions(u).then(function (g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          y = m === void 0 ? {} : m,
          k = g.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: v, options: y }),
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
var Fx = [ox, Ox, nx, HS, wx, gx, xx, ZS, mx],
  Lx = Dx({ defaultModifiers: Fx }),
  Ds,
  mv;
function Nx() {
  if (mv) return Ds;
  mv = 1;
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
var Bx = Nx();
const qx = Zt(Bx);
var Ux = [],
  zx = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || Ux,
      },
      i = _.useState({
        styles: {
          popper: { position: o.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      s = i[0],
      c = i[1],
      u = _.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var h = v.state,
              f = Object.keys(h.elements);
            Wo.flushSync(function () {
              c({
                styles: sv(
                  f.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: sv(
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
      l = _.useMemo(
        function () {
          var p = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return qx(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = _.useRef();
    return (
      cv(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      cv(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || Lx,
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
  $x = function () {},
  Vx = function () {
    return Promise.resolve(null);
  },
  Gx = [];
function Hx(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? Gx : o,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = _.useContext(CS),
    p = _.useState(null),
    v = p[0],
    h = p[1],
    f = _.useState(null),
    g = f[0],
    b = f[1];
  _.useEffect(
    function () {
      jS(u, v);
    },
    [u, v],
  );
  var m = _.useMemo(
      function () {
        return {
          placement: r,
          strategy: a,
          onFirstUpdate: c,
          modifiers: [].concat(i, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, a, c, i, g],
    ),
    y = zx(s || d, v, m),
    k = y.state,
    w = y.styles,
    O = y.forceUpdate,
    S = y.update,
    j = _.useMemo(
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
          forceUpdate: O || $x,
          update: S || Vx,
        };
      },
      [h, b, r, k, w, S, O],
    );
  return RS(l)(j);
}
function Wx(e) {
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
            h = H(v, 1),
            f = h[0],
            g =
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
            m = l.height - 2 * t;
          (f === "top" && (m = c.rects.reference.y + g.y - t),
            f === "bottom" && (m = l.height - p.y - t),
            f === "left" && (b = c.rects.reference.x + g.x - t),
            f === "right" && (b = l.width - p.x - t),
            (c.styles.popper.maxWidth = "".concat(b, "px")),
            (c.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var bc = 5,
  Kx = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: bc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function Yx() {
  return null;
}
var Jx = [0, 8];
function Xx(e) {
  var t = e.children,
    r = t === void 0 ? Yx : t,
    n = e.offset,
    a = n === void 0 ? Jx : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    h = H(a, 2),
    f = h[0],
    g = h[1],
    b = _.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: bc, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, g] } },
          w = v ? Wx({ viewportPadding: bc }) : [];
        return [].concat(Kx, [y, k], we(w));
      },
      [f, g, v],
    ),
    m = _.useMemo(
      function () {
        return u == null ? b : [].concat(we(b), we(u));
      },
      [b, u],
    );
  return E.createElement(Hx, { modifiers: m, placement: i, strategy: d, referenceElement: c }, r);
}
var Fg = "atlaskit-portal-container",
  Lg = "body > .atlaskit-portal-container",
  Ng = "atlaskit-portal",
  Qx = function (t) {
    var r = document.createElement("div");
    return ((r.className = Ng), (r.style.zIndex = "".concat(t)), r);
  },
  Bg = function () {
    return document.body;
  },
  qg = function () {
    var t = document.querySelector(Lg);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Fg),
        (n.style.display = "flex"),
        (r = Bg()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  Zx = function (t) {
    qg().removeChild(t);
  },
  eP = function (t) {
    t.parentElement || qg().appendChild(t);
  },
  Ug = function () {
    return document !== void 0;
  },
  tP = function (t) {
    if (Ug()) {
      var r = document.createElement("div");
      return ((r.className = Ng), (r.style.zIndex = "".concat(t)), r);
    }
  },
  rP = function () {
    if (Ug()) {
      var t = document.querySelector(Lg);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Fg),
          (n.style.display = "flex"),
          (r = Bg()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function nP(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return Qx(t);
      },
      [t],
    ),
    a = tg();
  return (
    eP(n),
    _.useEffect(
      function () {
        return function () {
          Zx(n);
        };
      },
      [n],
    ),
    Wo.createPortal(
      a && de("platform_dst_subtree_theming") ? E.createElement(eg, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var zg = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function aP(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = H(n, 2),
    o = a[0],
    i = a[1],
    s = tg();
  zg(
    function () {
      var u = tP(t);
      i(u);
      var l = rP();
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
  var c = E.createElement(
    _.Suspense,
    { fallback: null },
    s && de("platform_dst_subtree_theming") ? E.createElement(eg, { defaultColorMode: s }, r) : r,
  );
  return o ? Wo.createPortal(c, o) : null;
}
var oP = function (t) {
    var r = _.useState(!1),
      n = H(r, 2),
      a = n[0],
      o = n[1],
      i = _.useState(function () {
        return t === "layoutEffect" ? zg : _.useEffect;
      }),
      s = H(i, 1),
      c = s[0];
    return (
      c(function () {
        o(!0);
      }, []),
      a
    );
  },
  iP = "akPortalMount",
  sP = "akPortalUnmount",
  yv = {
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
  cP = function (t) {
    return yv.hasOwnProperty(t) ? yv[t] : null;
  },
  uP = function (t, r) {
    var n = { layer: cP(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function _v(e, t) {
  var r = uP(e, t);
  window.dispatchEvent(r);
}
var lP = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        _v(iP, r),
        function () {
          _v(sP, r);
        }
      );
    },
    [r],
  );
};
function dP(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = oP(o);
  return (
    lP(r),
    de("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(aP, { zIndex: r }, n)
      : i
        ? E.createElement(nP, { zIndex: r }, n)
        : null
  );
}
var fP = {
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
  Aa = new Set(),
  Va = null;
function wv() {
  if (!Va) {
    Va = Er.bindAll(window, [
      { type: "dragend", listener: Fs },
      { type: "pointerdown", listener: Fs },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Fs();
          };
        })(),
      },
    ]);
    var e = Array.from(Aa);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Fs() {
  var e;
  ((e = Va) === null || e === void 0 || e(), (Va = null));
  var t = Array.from(Aa);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function vP() {
  return Er.bindAll(window, [
    { type: "dragstart", listener: wv },
    { type: "dragenter", listener: wv },
  ]);
}
var bo = null;
function pP(e) {
  return (
    bo || (bo = vP()),
    Aa.add(e),
    e.onRegister({ isDragging: Va !== null }),
    function () {
      if ((Aa.delete(e), Aa.size === 0)) {
        var r;
        ((r = bo) === null || r === void 0 || r(), (bo = null));
      }
    }
  );
}
var ja = null;
function wa() {
  ja != null && (window.clearTimeout(ja), (ja = null));
}
function kv(e, t) {
  (wa(),
    (ja = window.setTimeout(function () {
      ((ja = null), e());
    }, t)));
}
var wt = null;
function hP(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(wt && wt.entry === e);
  }
  function n() {
    r() && (wa(), (wt = null));
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
        ((t = "shown"), wa());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), wa(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function s(v) {
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
          kv(function () {
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
      h = !!(wt && wt.isVisible()) && !v;
    (wt && (wa(), wt.entry.hide({ isImmediate: !0 }), wt.entry.done(), (wt = null)),
      (wt = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: h }));
    }
    if (h) {
      f();
      return;
    }
    ((t = "waiting-to-show"), kv(f, e.delay));
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
function gP(e, t) {
  var r = cO();
  return t ? "".concat(r(e)) : void 0;
}
const bP = 5;
function Ho(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, bP) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
var Ov = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  mP = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: Ho([Ov.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: Ho([Ov.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  $g = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      u = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return _.createElement(
      "div",
      { ref: r, style: n, "data-testid": s ? "".concat(s, "--wrapper") : void 0 },
      _.createElement(
        "div",
        {
          role: "tooltip",
          className: Ho(["_80om73ad", a]),
          onMouseOut: c,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": s,
          id: l,
        },
        o,
        d && _.createElement(mP, { shortcut: d }),
      ),
    );
  });
$g.displayName = "TooltipPrimitive";
var Ev = {
    base: "_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Vg = _.forwardRef(function (t, r) {
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
    return _.createElement(
      $g,
      {
        ref: r,
        style: n,
        className: Ho([Ev.base, i && Ev.truncate, a]),
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
Vg.displayName = "TooltipContainer";
function Sv(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function yP(e, t) {
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
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xv(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var _P = fP.tooltip(),
  Pv = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.14.5" },
  wP = { top: "bottom", bottom: "top", left: "right", right: "left" },
  kP = function (t) {
    return t.split("-")[0];
  };
function OP(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    u = e.component,
    l = u === void 0 ? Vg : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    h = e.delay,
    f = h === void 0 ? 300 : h,
    g = e.onShow,
    b = g === void 0 ? xe : g,
    m = e.onHide,
    y = m === void 0 ? xe : m,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    O = w === void 0 ? !1 : w,
    S = e.hideTooltipOnMouseDown,
    j = S === void 0 ? !1 : S,
    I = e.analyticsContext,
    C = e.strategy,
    T = C === void 0 ? "fixed" : C,
    q = e.ignoreTooltipPointerEvents,
    V = q === void 0 ? !1 : q,
    $ = e.isScreenReaderAnnouncementDisabled,
    W = $ === void 0 ? !1 : $,
    L = e.shortcut,
    K = e.UNSAFE_shouldAlwaysFadeIn,
    B = K === void 0 ? !1 : K,
    U = e.UNSAFE_shouldRenderToParent,
    G = U === void 0 ? !1 : U,
    ae = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    ie = ae ? o : n,
    ce = of(Br({ fn: b, action: "displayed", analyticsData: I }, Pv)),
    Oe = of(Br({ fn: y, action: "hidden", analyticsData: I }, Pv)),
    F = _.useRef(null),
    _e = _.useState("hide"),
    Be = H(_e, 2),
    ve = Be[0],
    Ce = Be[1],
    pe = _.useRef(null),
    qe = _.useRef(null),
    rn = function (oe) {
      ((qe.current = oe), (pe.current = oe ? oe.firstElementChild : null));
    },
    xr = _.useCallback(function (N) {
      pe.current = N;
    }, []),
    gt = Nr(ve),
    Re = Nr(ce),
    bt = Nr(Oe),
    Ht = Nr(f),
    st = Nr(k),
    mt = _.useRef(!1),
    Ue = Nr(B),
    Ae = _.useCallback(function (N) {
      ((F.current = N), (mt.current = !1));
    }, []),
    Pe = _.useCallback(
      function () {
        F.current &&
          (mt.current && bt.current(), (F.current = null), (mt.current = !1), Ce("hide"));
      },
      [bt],
    ),
    je = _.useCallback(
      function () {
        F.current && (F.current.abort(), mt.current && bt.current(), (F.current = null));
      },
      [bt],
    );
  _.useEffect(
    function () {
      return function () {
        F.current && je();
      };
    },
    [je],
  );
  var yt = _.useRef(!1);
  _.useEffect(function () {
    return pP({
      onRegister: function (oe) {
        var Ft = oe.isDragging;
        yt.current = Ft;
      },
      onDragStart: function () {
        var oe;
        ((oe = F.current) === null || oe === void 0 || oe.requestHide({ isImmediate: !0 }),
          (yt.current = !0));
      },
      onDragEnd: function () {
        yt.current = !1;
      },
    });
  }, []);
  var rr = _.useCallback(
      function (N) {
        var oe;
        if (!yt.current) {
          if ((F.current && !F.current.isActive() && je(), F.current && F.current.isActive())) {
            F.current.keep();
            return;
          }
          if (!(st.current && !((oe = st.current) !== null && oe !== void 0 && oe.call(st)))) {
            var Ft = {
                source: N,
                delay: Ht.current,
                show: function (Pr) {
                  var an = Pr.isImmediate;
                  (mt.current || ((mt.current = !0), Re.current()),
                    Ce(an ? "show-immediate" : "fade-in"));
                },
                hide: function (Pr) {
                  var an = Pr.isImmediate;
                  Ce(an ? "hide" : "before-fade-out");
                },
                done: Pe,
                shouldAlwaysFadeIn: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? Ue.current
                  : !1,
              },
              nr = hP(Ft);
            Ae(nr);
          }
        }
      },
      [st, Ht, Pe, Ae, je, Re, Ue],
    ),
    eo = _.useCallback(
      function () {
        var N;
        (N = F.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
      },
      [F],
    );
  (cS({ onClose: eo, isDisabled: ve === "hide" || ve === "fade-out" }),
    _.useEffect(
      function () {
        if (ve === "hide") return xe;
        ve === "before-fade-out" && Ce("fade-out");
        var N = Er.bind(window, {
          type: "scroll",
          listener: function () {
            F.current && F.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return N;
      },
      [ve],
    ));
  var to = _.useCallback(
      function () {
        j && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    ro = _.useCallback(
      function () {
        O && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [O],
    ),
    Yg = _.useCallback(
      function (N) {
        if (!(qe.current && N.target === qe.current) && !N.defaultPrevented) {
          N.preventDefault();
          var oe = ae
            ? {
                type: "mouse",
                mouse: de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : Sv({ left: N.clientX, top: N.clientY }),
                clientX: N.clientX,
                clientY: N.clientY,
              }
            : { type: "keyboard" };
          rr(oe);
        }
      },
      [ae, rr],
    ),
    Qc = _.useCallback(function (N) {
      (qe.current && N.target === qe.current) ||
        N.defaultPrevented ||
        (N.preventDefault(), F.current && F.current.requestHide({ isImmediate: !1 }));
    }, []),
    Jg = ae
      ? function (N) {
          var oe;
          (oe = F.current) !== null &&
            oe !== void 0 &&
            oe.isActive() &&
            (de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (F.current.mousePosition = Sv({ left: N.clientX, top: N.clientY })),
            (F.current.mousePos = { clientX: N.clientX, clientY: N.clientY }));
        }
      : void 0,
    Xg = _.useCallback(function () {
      if (F.current && F.current.isActive()) {
        F.current.keep();
        return;
      }
    }, []),
    Qg = _.useCallback(
      function (N) {
        try {
          if (!N.target.matches(":focus-visible")) return;
        } catch {}
        rr({ type: "keyboard" });
      },
      [rr],
    ),
    Zg = _.useCallback(function () {
      F.current && F.current.requestHide({ isImmediate: !1 });
    }, []),
    eb = _.useCallback(
      function (N) {
        N === "exiting" &&
          gt.current === "fade-out" &&
          F.current &&
          F.current.finishHideAnimation();
      },
      [gt],
    ),
    tb = p,
    Si = ve !== "hide" && !!i,
    Zc = !W && Si,
    eu = ve !== "hide" && ve !== "fade-out",
    rb = _.useCallback(function () {
      var N;
      (N = F.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
    }, []);
  fS({ isOpen: Si && eu, onClose: rb });
  var tu = function () {
      var oe, Ft;
      if (
        ae &&
        (oe = F.current) !== null &&
        oe !== void 0 &&
        oe.mousePos &&
        pe.current &&
        de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return yP(F.current.mousePos, { targetElement: pe.current, tooltipPosition: n });
      if (
        ae &&
        (Ft = F.current) !== null &&
        Ft !== void 0 &&
        Ft.mousePosition &&
        !de("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var nr;
        return (nr = F.current) === null || nr === void 0 ? void 0 : nr.mousePosition;
      }
      return pe.current || void 0;
    },
    nn = gP("tooltip", Zc),
    xi = {
      onMouseOver: Yg,
      onMouseOut: Qc,
      onMouseMove: Jg,
      onMouseDown: to,
      onClick: ro,
      onFocus: Qg,
      onBlur: Zg,
    };
  v && (xi["data-testid"] = "".concat(v, "--container"));
  var ru = typeof t == "function";
  _.useEffect(
    function () {
      if (!ru) {
        var N = pe.current;
        if (!(!N || !nn))
          return (
            N.setAttribute("aria-describedby", nn),
            function () {
              return N.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [ru, nn],
  );
  var nu = Zc
      ? E.createElement(
          "span",
          { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: nn },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    nb = G && de("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? _.Fragment : EP;
  return E.createElement(
    E.Fragment,
    null,
    typeof t == "function"
      ? E.createElement(
          E.Fragment,
          null,
          t(Br(Br({}, xi), {}, { "aria-describedby": nn, ref: xr })),
          nu,
        )
      : E.createElement(tb, ne({}, xi, { ref: rn, role: "presentation" }), t, nu),
    Si
      ? E.createElement(
          nb,
          null,
          E.createElement(Xx, { placement: ie, referenceElement: tu(), strategy: T }, function (N) {
            var oe = N.ref,
              Ft = N.style,
              nr = N.update,
              Pi = N.placement,
              Pr = ae ? void 0 : wP[kP(Pi)];
            return E.createElement(
              xg,
              { appear: !0 },
              eu &&
                E.createElement(
                  PS,
                  {
                    distance: "constant",
                    entranceDirection: Pr,
                    exitDirection: Pr,
                    onFinish: eb,
                    duration: ve !== "show-immediate" ? "medium" : "none",
                  },
                  function (an) {
                    var ab = an.className;
                    return E.createElement(
                      l,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(ab),
                        style: Br(Br({}, Ft), V && { pointerEvents: "none" }),
                        truncate: c,
                        placement: ie,
                        testId: tu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Qc,
                        onMouseOver: Xg,
                        shortcut: L,
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
var EP = function (t) {
    var r = t.children;
    return E.createElement(dP, { zIndex: _P }, r);
  },
  SP = [
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
  ma = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Cv = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c8wadc _syazazsu _k48pwu06" },
  Gg = function (t) {
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
      h = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      g = f === void 0 ? "Sort button" : f,
      b = t.isIconOnlyHeader,
      m = ue(t, SP),
      y = _.useState(!1),
      k = H(y, 2),
      w = k[0],
      O = k[1],
      S = _.useState(!1),
      j = H(S, 2),
      I = j[0],
      C = j[1],
      T = u === l || s !== void 0,
      q = w || T || I,
      V = q && b,
      $ = !b || q || (b && !I),
      W = _.useCallback(
        function () {
          C?.(!0);
        },
        [C],
      ),
      L = _.useCallback(
        function () {
          C?.(!1);
        },
        [C],
      ),
      K = _.useCallback(
        function () {
          O(!0);
        },
        [O],
      ),
      B = _.useCallback(
        function () {
          O(!1);
        },
        [O],
      ),
      U = E.createElement(
        bi,
        { xcss: Cv.headCellContainer, onMouseEnter: K, onMouseLeave: B, onFocus: W, onBlur: L },
        E.createElement(
          OP,
          { content: s === br ? p : h },
          E.createElement(
            i1,
            { onClick: c, xcss: ma.buttonWrapper, "aria-roledescription": g },
            E.createElement(
              $o,
              { xcss: V ? ma.hideIconHeaderWrapper : ma.visibleHeaderWrapper },
              E.createElement("span", { className: R([Cv.text]) }, r),
            ),
            $ &&
              E.createElement(
                $o,
                { xcss: q ? ma.sortIconVisibleWrapper : ma.sortIconHiddenWrapper },
                s === br
                  ? E.createElement(iS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : E.createElement(nS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      QE,
      ne(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        m,
        { isSortable: i, sortOrder: s },
      ),
      i ? U : r,
    );
  },
  xP = ["isRanking", "refHeight", "refWidth"];
function PP(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Hg() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Hg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hg = function () {
    return !!e;
  })();
}
var CP = (function (e) {
    function t() {
      return (he(this, t), PP(this, t, arguments));
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
              i = ue(n, xP),
              s = s0(a, o);
            return E.createElement(Gg, ne({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(E.Component),
  RP = eS(CP),
  AP = ["cells"],
  jP = [
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
function IP(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Wg() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Wg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wg = function () {
    return !!e;
  })();
}
var TP = (function (e) {
    function t(r) {
      var n;
      return (he(this, t), (n = IP(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ke(t, e),
      ge(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            No(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              No(n.sortKey, n.head);
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
            var h = d ? RP : Gg,
              f = o.cells,
              g = ue(o, AP);
            return E.createElement(
              XE,
              ne({}, g, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (b, m) {
                  var y = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    O = b.content,
                    S = b.descendingSortTooltip,
                    j = b.isIconOnlyHeader,
                    I = b.isSortable,
                    C = b.key,
                    T = b.shouldTruncate,
                    q = b.testId,
                    V = b.width,
                    $ = ue(b, jP),
                    W = "head-cell-".concat(m),
                    L = function () {
                      (n.setState({ activeSortButtonId: W }), I && u(b)());
                    };
                  return E.createElement(
                    h,
                    ne(
                      {
                        colSpan: w,
                        content: O,
                        isFixedSize: c,
                        isIconOnlyHeader: j,
                        isSortable: !!I,
                        isRanking: l,
                        key: C || m,
                        headCellId: W,
                        activeSortButtonId: v,
                        onClick: L,
                        testId: q || p,
                        shouldTruncate: T,
                        sortOrder: C === i ? s : void 0,
                        width: V,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: S,
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
  })(E.Component),
  MP = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function DP(e) {
  switch (e) {
    case Uo:
      return br;
    case br:
      return Uo;
    default:
      return e;
  }
}
var FP = function (t) {
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
      h = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      g = f === void 0 ? !1 : f,
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      y = t.onSetPage,
      k = y === void 0 ? xe : y,
      w = t.onSort,
      O = w === void 0 ? xe : w,
      S = t.page,
      j = S === void 0 ? 1 : S,
      I = t.emptyView,
      C = t.isRankable,
      T = C === void 0 ? !1 : C,
      q = t.isRankingDisabled,
      V = q === void 0 ? !1 : q,
      $ = t.onRankStart,
      W = $ === void 0 ? xe : $,
      L = t.onRankEnd,
      K = L === void 0 ? xe : L,
      B = t.loadingSpinnerSize,
      U = t.paginationi18n,
      G =
        U === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : U,
      ae = _.useState(!1),
      ie = H(ae, 2),
      ce = ie[0],
      Oe = ie[1],
      F = _.useRef(null),
      _e = La({
        fn: O,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      }),
      Be = La({
        fn: K,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      });
    _.useEffect(
      function () {
        (No(i, n), i0(n));
      },
      [i, n],
    );
    var ve = function (Pe) {
        return function () {
          var je = Pe.key;
          if (je) {
            if (_e && T && je === i && s === Uo) {
              _e({ key: null, sortOrder: null, item: Pe });
              return;
            }
            var yt = je !== i ? br : DP(s);
            _e && _e({ key: je, item: Pe, sortOrder: yt });
          }
        };
      },
      Ce = function (Pe, je) {
        k(Pe, je);
      },
      pe = function (Pe) {
        (Oe(!0), W(Pe));
      },
      qe = function (Pe) {
        (Oe(!1), Be(Pe));
      },
      rn = function () {
        return B || (vh(o || [], j, m).length > 2 ? zo : Rw);
      },
      xr = function () {
        return h ? E.createElement(Dw, { testId: l }) : I && E.createElement(Fw, { testId: l }, I);
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
      mt = rn(),
      Ue = xr();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        Lh,
        {
          isLoading: h && st,
          spinnerSize: mt,
          targetRef: function () {
            return F.current;
          },
          testId: l,
          loadingLabel: c,
        },
        E.createElement(
          Iw,
          { isFixedSize: g, "aria-label": p, hasDataRow: st, testId: l, isLoading: h },
          !!r && E.createElement(Tw, null, r),
          n &&
            E.createElement(TP, {
              head: n,
              onSort: ve,
              sortKey: i,
              sortOrder: s,
              isRanking: ce,
              isRankable: T,
              testId: l,
            }),
          st &&
            E.createElement(NP, {
              ref: F,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: s,
              rowsPerPage: m,
              page: Ht,
              isFixedSize: g || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: bt,
              testId: l,
              isRankable: T,
              isRanking: ce,
              onRankStart: pe,
              onRankEnd: qe,
              isRankingDisabled: V || h || !1,
            }),
        ),
      ),
      Re <= 1
        ? null
        : E.createElement(
            Mw,
            { testId: l },
            E.createElement(KE, {
              value: Ht,
              onChange: Ce,
              total: Re,
              i18n: G,
              isDisabled: h,
              testId: l,
            }),
          ),
      !st &&
        Ue &&
        E.createElement(Dh, { isLoading: h, spinnerSize: zo, testId: l, loadingLabel: c }, Ue),
    );
  },
  LP = _.lazy(function () {
    return Qe(
      () => import("./body-Czvrr-1C.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  NP = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      s = t.onRankEnd,
      c = t.isRankingDisabled,
      u = ue(t, MP),
      l = a && !u.sortKey,
      d = _.useState(!1),
      p = H(d, 2),
      v = p[0],
      h = p[1];
    _.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var f = E.createElement(Xw, ne({ ref: r }, u));
    return l && v
      ? E.createElement(
          Zw,
          { fallback: f },
          E.createElement(
            _.Suspense,
            { fallback: f },
            E.createElement(
              LP,
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
function BP(e, t, r) {
  return (
    (t = Z(t)),
    We(e, Kg() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r))
  );
}
function Kg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Kg = function () {
    return !!e;
  })();
}
var Ei = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = BP(this, t, [].concat(a))),
      x(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      x(r, "onSetPageHandler", function (i, s) {
        var c = r.props.onSetPage;
        c && (c(i, s), r.setState({ page: i }));
      }),
      x(r, "onSortHandler", function (i, s) {
        var c = i.key,
          u = i.item,
          l = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: c, item: u, sortOrder: l }, s), r.setState({ sortKey: c, sortOrder: l }));
      }),
      x(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      x(r, "onRankEndHandler", function (i) {
        var s = i.destination,
          c = r.state,
          u = c.rows,
          l = c.page,
          d = r.props.rowsPerPage;
        if (!s || !u) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var p = c0(i, u, l, d);
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
            h = c.isLoading,
            f = c.loadingLabel,
            g = c.isFixedSize,
            b = c.isRankable,
            m = c.isRankingDisabled,
            y = c.rowsPerPage,
            k = c.paginationi18n,
            w = c.onRankStart,
            O = c.onPageRowsUpdate,
            S = c.testId,
            j = c.label;
          return E.createElement(FP, {
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
            rows: s,
            rowsPerPage: y,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: O,
            testId: S,
            label: j,
          });
        },
      },
    ])
  );
})(E.Component);
x(Ei, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: xe,
  onSort: xe,
  rowsPerPage: 1 / 0,
});
const qP = (e, t) => {
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
  Xc = (e, t) => ({ cells: qP(e, t) }),
  UP = vi(() => {
    const { usersStore: e } = hi(),
      t = Xc(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? P.jsx("div", { children: "SlowQuery is EMPTY" })
      : P.jsx("div", {
          children: P.jsxs("div", {
            children: [
              P.jsx(Ei, {
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
                        ? P.jsx(P.Fragment, {
                            children: P.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Cc.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : P.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${a}`, cells: o };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: P.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              P.jsx("br", {}),
              P.jsx("br", {}),
            ],
          }),
        });
  }),
  zP = vi(() => {
    const { usersStore: e } = hi(),
      t = Xc(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? P.jsxs("div", { children: ["$", e.planString] })
      : P.jsx("div", {
          children: P.jsxs("div", {
            children: [
              P.jsx(Ei, {
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
                emptyView: P.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              P.jsx("br", {}),
              P.jsx("br", {}),
            ],
          }),
        });
  }),
  $P = vi(() => {
    const { usersStore: e } = hi(),
      t = Xc(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? P.jsx("div", { children: "Query history is EMPTY" })
      : P.jsx("div", {
          children: P.jsxs("div", {
            children: [
              P.jsx(Ei, {
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
                        ? P.jsx(P.Fragment, {
                            children: P.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), Cc.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : P.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${a}`, cells: o };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: P.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              P.jsx("br", {}),
              P.jsx("br", {}),
            ],
          }),
        });
  }),
  Xe = (e, t) => {
    Te.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function VP() {
  const { usersStore: e, stateStore: t } = hi();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const h = await Te.invoke("explain");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Xe("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const h = await Te.invoke("explainWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Xe("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const h = await Te.invoke("explainAnalyze");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Xe("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        const h = await Te.invoke("explainAnalyzeWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), Xe("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        await Te.invoke("executeQuery");
      } catch (h) {
        (console.error(h), Xe("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Te.invoke("executeQueryWith");
      } catch (h) {
        (console.error(h), Xe("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Te.invoke("optimizeQuery");
      } catch (h) {
        (console.error(h), Xe("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Te.invoke("optimizeQueryCTE");
      } catch (h) {
        (console.error(h), Xe("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Te.invoke("dropStats");
      } catch (h) {
        (console.error(h), Xe("dropStats error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Te.invoke("deOptimizeQuery");
      } catch (h) {
        (console.error(h), Xe("deoptimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    p = async () => {
      e.loading();
      try {
        const h = await Te.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(h), t.saveState("HISTORY"));
      } catch (h) {
        (console.error(h), Xe("History error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    v = async () => {
      e.loading();
      try {
        const h = await Te.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(h), t.saveState("SLOW_QUERY"));
      } catch (h) {
        (console.error(h), Xe("Slowquery error", h.message));
      } finally {
        e.stopLoading();
      }
    };
  switch (t.state) {
    case "ROOT":
      return P.jsxs("div", {
        className: "query-analysis-container",
        children: [
          P.jsx("div", { className: "section-spacer" }),
          P.jsxs("section", {
            className: "analysis-section",
            children: [
              P.jsx("h2", { children: "Stage 1: Initial Query Analysis" }),
              P.jsx("div", {
                className: "query-example",
                children: P.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              P.jsx("div", {
                className: "button-group",
                children: P.jsxs("div", {
                  className: "button-row",
                  children: [
                    P.jsx("button", { onClick: i, children: "1. Execute SQL" }),
                    P.jsx("button", { onClick: r, children: "2. Explain (optional) " }),
                    P.jsx("button", { onClick: a, children: "3. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          P.jsxs("section", {
            className: "analysis-section",
            children: [
              P.jsx("h2", { children: "Stage 2: Adding Indexes — Better but Not Yet Great" }),
              P.jsx("div", {
                className: "query-example",
                children: P.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              P.jsx("div", {
                className: "button-group",
                children: P.jsxs("div", {
                  className: "button-row",
                  children: [
                    P.jsx("button", { onClick: c, children: "4. Add optimization indexes" }),
                    P.jsx("button", { onClick: i, children: "5. Execute SQL" }),
                    P.jsx("button", { onClick: r, children: "6. Explain (optional) " }),
                    P.jsx("button", { onClick: a, children: "7. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          P.jsxs("section", {
            className: "analysis-section",
            children: [
              P.jsx("h2", {
                children: "Stage 3: Optimizing with WITH Clause — Smarter Pagination",
              }),
              P.jsx("div", {
                className: "query-example",
                children: P.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              P.jsx("div", {
                className: "button-group",
                children: P.jsxs("div", {
                  className: "button-row",
                  children: [
                    P.jsx("button", { onClick: s, children: "8. Execute CTE" }),
                    P.jsx("button", { onClick: n, children: "9. Explain CTE (optional)" }),
                    P.jsx("button", { onClick: o, children: "10. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          P.jsxs("section", {
            className: "analysis-section",
            children: [
              P.jsx("h2", { children: "Stage 4: Final Optimization — Goodbye Full Table Scans" }),
              P.jsx("div", {
                className: "query-example",
                children: P.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              P.jsx("div", {
                className: "button-group",
                children: P.jsxs("div", {
                  className: "button-row",
                  children: [
                    P.jsx("button", {
                      onClick: u,
                      children: "9. Add optimization indexes for CTE",
                    }),
                    P.jsx("button", { onClick: s, children: "10. Execute CTE" }),
                    P.jsx("button", { onClick: n, children: "11. Explain CTE (optional)" }),
                    P.jsx("button", { onClick: o, children: "12. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          P.jsxs("section", {
            className: "analysis-section",
            children: [
              P.jsx("h2", { children: "Additional action" }),
              P.jsx("div", {
                className: "button-group",
                children: P.jsxs("div", {
                  className: "button-row",
                  children: [
                    P.jsx("button", { onClick: d, children: "Drop indexes(back to Stage 1)" }),
                    P.jsx("button", { onClick: l, children: "DROP STATS from all tables" }),
                  ],
                }),
              }),
            ],
          }),
          P.jsx("div", { className: "section-spacer" }),
          P.jsxs("section", {
            className: "analysis-section",
            children: [
              P.jsx("h2", { children: "Query History Analysis" }),
              P.jsx("div", {
                className: "button-group",
                children: P.jsx("button", { onClick: p, children: "Show Query History" }),
              }),
            ],
          }),
          P.jsx("div", { className: "section-spacer" }),
          P.jsxs("section", {
            className: "analysis-section",
            children: [
              P.jsx("h2", { children: "Slow Query Analysis" }),
              P.jsx("div", {
                className: "button-group",
                children: P.jsx("button", { onClick: v, children: "Analyze Slow Queries" }),
              }),
            ],
          }),
        ],
      });
    case "SLOW_QUERY":
      return P.jsxs("div", {
        className: "analysis-results",
        children: [
          P.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          P.jsx("div", { className: "results-spacer" }),
          P.jsx(UP, {}),
        ],
      });
    case "HISTORY":
      return P.jsxs("div", {
        className: "analysis-results",
        children: [
          P.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          P.jsx("div", { className: "results-spacer" }),
          P.jsx($P, {}),
        ],
      });
    case "PLAN":
      return P.jsxs("div", {
        className: "analysis-results",
        children: [
          P.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState(t.lastState),
            children: "Back to Analysis",
          }),
          P.jsx("div", { className: "results-spacer" }),
          P.jsx(zP, {}),
        ],
      });
    default:
      return P.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const GP = vi(VP),
  HP = document.getElementById("root"),
  WP = ob.createRoot(HP),
  Rv = () => {
    WP.render(P.jsx(uh, { ...lh, children: P.jsx(GP, {}) }));
  };
Te.view.theme
  .enable()
  .then(() => {
    Rv();
  })
  .catch((e) => {
    (console.error(e.message), Rv());
  });
export {
  xf as A,
  be as B,
  Wh as C,
  yi as D,
  mi as E,
  cC as F,
  sC as G,
  aC as H,
  E as R,
  Gw as T,
  Ke as _,
  ge as a,
  nc as b,
  he as c,
  Z as d,
  We as e,
  H as f,
  x as g,
  ue as h,
  Er as i,
  we as j,
  ne as k,
  Gk as l,
  zt as m,
  Dt as n,
  R as o,
  $w as p,
  s0 as q,
  _ as r,
  qw as s,
  oC as t,
  nC as u,
  rC as v,
  eS as w,
  tC as x,
  iC as y,
  Sf as z,
};
