const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-JJ6DjNTc.js",
      "./client-core-vendor-DC5q1RXn.js",
      "./body-BvWIqrS5.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./lodash-vendor-B0QWQanV.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as Er, a as Yo, c as Ug } from "./react-dom-vendor--YlRhZCI.js";
import { g as ir, a as yv, r as ar, b as jt, s as et } from "./client-core-vendor-DC5q1RXn.js";
import { r as qg } from "./lodash-vendor-B0QWQanV.js";
function zg(e, t) {
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
var Ri = { exports: {} },
  dn = {};
var Zc;
function $g() {
  if (Zc) return dn;
  Zc = 1;
  var e = Er(),
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
var Qc;
function Vg() {
  return (Qc || ((Qc = 1), (Ri.exports = $g())), Ri.exports);
}
var E = Vg(),
  m = Er();
const O = ir(m),
  eu = zg({ __proto__: null, default: O }, [m]);
var Pi = {},
  Bs = function (e, t) {
    return (
      (Bs =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Bs(e, t)
    );
  };
function wv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Bs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Ao = function () {
  return (
    (Ao =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Ao.apply(this, arguments)
  );
};
function kv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Ov(e, t, r, n) {
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
function Sv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Ev(e, t, r, n, a, o) {
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
function xv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Cv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Rv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Pv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Av(e, t, r, n) {
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
function Iv(e, t) {
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
var Xo = Object.create
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
function Dv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Xo(t, e, r);
}
function Io(e) {
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
function bc(e, t) {
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
function jv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(bc(arguments[t]));
  return e;
}
function Tv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function Mv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Jr(e) {
  return this instanceof Jr ? ((this.v = e), this) : new Jr(e);
}
function Nv(e, t, r) {
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
    v.value instanceof Jr ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
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
function Fv(e) {
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
          return (r = !r) ? { value: Jr(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function Bv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Io == "function" ? Io(e) : e[Symbol.iterator]()),
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
function Lv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Gg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Ls = function (e) {
    return (
      (Ls =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Ls(e)
    );
  };
function Uv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Ls(e), n = 0; n < r.length; n++) r[n] !== "default" && Xo(t, e, r[n]);
  return (Gg(t, e), t);
}
function qv(e) {
  return e && e.__esModule ? e : { default: e };
}
function zv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function $v(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Vv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Gv(e, t, r) {
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
var Hg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Hv(e) {
  function t(o) {
    ((e.error = e.hasError ? new Hg(o, e.error, "An error was suppressed during disposal.") : o),
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
function Kv(e, t) {
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
const Kg = {
    __extends: wv,
    __assign: Ao,
    __rest: kv,
    __decorate: Ov,
    __param: Sv,
    __esDecorate: Ev,
    __runInitializers: xv,
    __propKey: Cv,
    __setFunctionName: Rv,
    __metadata: Pv,
    __awaiter: Av,
    __generator: Iv,
    __createBinding: Xo,
    __exportStar: Dv,
    __values: Io,
    __read: bc,
    __spread: jv,
    __spreadArrays: Tv,
    __spreadArray: Mv,
    __await: Jr,
    __asyncGenerator: Nv,
    __asyncDelegator: Fv,
    __asyncValues: Bv,
    __makeTemplateObject: Lv,
    __importStar: Uv,
    __importDefault: qv,
    __classPrivateFieldGet: zv,
    __classPrivateFieldSet: $v,
    __classPrivateFieldIn: Vv,
    __addDisposableResource: Gv,
    __disposeResources: Hv,
    __rewriteRelativeImportExtension: Kv,
  },
  Wg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Gv,
        get __assign() {
          return Ao;
        },
        __asyncDelegator: Fv,
        __asyncGenerator: Nv,
        __asyncValues: Bv,
        __await: Jr,
        __awaiter: Av,
        __classPrivateFieldGet: zv,
        __classPrivateFieldIn: Vv,
        __classPrivateFieldSet: $v,
        __createBinding: Xo,
        __decorate: Ov,
        __disposeResources: Hv,
        __esDecorate: Ev,
        __exportStar: Dv,
        __extends: wv,
        __generator: Iv,
        __importDefault: qv,
        __importStar: Uv,
        __makeTemplateObject: Lv,
        __metadata: Pv,
        __param: Sv,
        __propKey: Cv,
        __read: bc,
        __rest: kv,
        __rewriteRelativeImportExtension: Kv,
        __runInitializers: xv,
        __setFunctionName: Rv,
        __spread: jv,
        __spreadArray: Mv,
        __spreadArrays: Tv,
        __values: Io,
        default: Kg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  dt = yv(Wg);
var fn = {},
  tu;
function Jg() {
  return (
    tu ||
      ((tu = 1),
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
var Ai = {},
  Ii = {},
  vn = {},
  pn = {},
  ru;
function ye() {
  if (ru) return pn;
  ((ru = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((pn.BridgeAPIError = e), pn);
}
var nu;
function de() {
  if (nu) return vn;
  ((nu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.getCallBridge = void 0));
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
  return ((vn.getCallBridge = r), vn);
}
var hn = {},
  au;
function Zo() {
  if (au) return hn;
  ((au = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.withRateLimiter = void 0));
  const e = ye(),
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
var ou;
function Yg() {
  return (
    ou ||
      ((ou = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = de(),
          r = ye(),
          n = Zo(),
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
      })(Ii)),
    Ii
  );
}
var iu;
function Ka() {
  return (
    iu ||
      ((iu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), dt.__exportStar(Yg(), e));
      })(Ai)),
    Ai
  );
}
var Di = {},
  gn = {},
  ji = {},
  su;
function Wv() {
  return (
    su ||
      ((su = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = de(),
          r = ye(),
          n = Zo(),
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
      })(ji)),
    ji
  );
}
var cu;
function Xg() {
  if (cu) return gn;
  ((cu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.invokeRemote = void 0));
  const e = Wv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((gn.invokeRemote = t), gn);
}
var bn = {},
  uu;
function Zg() {
  if (uu) return bn;
  ((uu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.invokeService = void 0));
  const e = Wv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((bn.invokeService = t), bn);
}
var lu;
function Qg() {
  return (
    lu ||
      ((lu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = dt;
        (t.__exportStar(Xg(), e), t.__exportStar(Zg(), e));
      })(Di)),
    Di
  );
}
var Ti = {},
  _n = {},
  mn = {},
  du;
function eb() {
  if (du) return mn;
  ((du = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.submit = void 0));
  const e = de(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((mn.submit = n), mn);
}
var yn = {},
  fu;
function tb() {
  if (fu) return yn;
  ((fu = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.close = void 0));
  const e = de(),
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
  return ((yn.close = n), yn);
}
var wn = {},
  vu;
function rb() {
  if (vu) return wn;
  ((vu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.open = void 0));
  const e = de(),
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
  return ((wn.open = n), wn);
}
var kn = {},
  pu;
function nb() {
  if (pu) return kn;
  ((pu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.refresh = void 0));
  const e = de(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((kn.refresh = n), kn);
}
var On = {},
  hu;
function ab() {
  if (hu) return On;
  ((hu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.createHistory = void 0));
  const t = (0, de().getCallBridge)(),
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
  Mi = {},
  Ut = {},
  gu;
function Jv() {
  return (
    gu ||
      ((gu = 1),
      Object.defineProperty(Ut, "__esModule", { value: !0 }),
      (Ut.FORGE_SUPPORTED_LOCALE_CODES =
        Ut.I18N_BUNDLE_FOLDER_NAME =
        Ut.I18N_INFO_FILE_NAME =
          void 0),
      (Ut.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Ut.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Ut.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Ut
  );
}
var ur = {},
  bu;
function ob() {
  if (bu) return ur;
  ((bu = 1),
    Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.TranslationsGetter = ur.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  ur.TranslationGetterError = t;
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
  return ((ur.TranslationsGetter = r), ur);
}
var En = {},
  Ni = {},
  _u;
function Yv() {
  return (
    _u ||
      ((_u = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = dt.__importDefault(qg()),
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
      })(Ni)),
    Ni
  );
}
var mu;
function ib() {
  if (mu) return En;
  ((mu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.Translator = void 0));
  const e = Yv();
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
  yu;
function sb() {
  if (yu) return xn;
  ((yu = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.ensureLocale = void 0));
  const e = Jv(),
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
var Fi = {},
  wu;
function cb() {
  return (
    wu ||
      ((wu = 1),
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
      })(Fi)),
    Fi
  );
}
var Bi = {},
  ku;
function ub() {
  return (ku || ((ku = 1), Object.defineProperty(Bi, "__esModule", { value: !0 })), Bi);
}
var Ou;
function Xv() {
  return (
    Ou ||
      ((Ou = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = dt;
        (t.__exportStar(Jv(), e),
          t.__exportStar(ob(), e),
          t.__exportStar(ib(), e),
          t.__exportStar(sb(), e));
        var r = Yv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = cb();
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
          t.__exportStar(ub(), e));
      })(Mi)),
    Mi
  );
}
var Su;
function lb() {
  if (Su) return Sn;
  ((Su = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.getContext = void 0));
  const e = de(),
    t = Xv(),
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
  Eu;
function db() {
  if (Eu) return Cn;
  ((Eu = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.changeWindowTitle = void 0));
  const e = de(),
    t = ye(),
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
var Rn = {},
  xu;
function fb() {
  if (xu) return Rn;
  ((xu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.theme = void 0));
  const t = (0, de().getCallBridge)();
  return ((Rn.theme = { enable: () => t("enableTheming") }), Rn);
}
var Pn = {},
  An = {},
  Li = {},
  lr = {},
  Cu;
function Zv() {
  if (Cu) return lr;
  ((Cu = 1),
    Object.defineProperty(lr, "__esModule", { value: !0 }),
    (lr.blobToBase64 = lr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let s = 0; s < o.length; s++) i[s] = o.charCodeAt(s);
    const c = new Uint8Array(i);
    return new Blob([c], { type: n });
  };
  lr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, a) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        n(o.result);
      }),
        (o.onerror = a),
        o.readAsDataURL(r));
    });
  return ((lr.blobToBase64 = t), lr);
}
var Ru;
function vb() {
  return (
    Ru ||
      ((Ru = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Zv(),
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
      })(Li)),
    Li
  );
}
var Pu;
function Qv() {
  if (Pu) return An;
  ((Pu = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.events = void 0));
  const e = de(),
    t = vb(),
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
var Au;
function pb() {
  if (Au) return Pn;
  ((Au = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.emitReadyEvent = void 0));
  const e = Qv(),
    t = ap(),
    r = "EXTENSION_READY",
    n = async () => {
      const a = await t.view.getContext();
      await e.events.emit(r, { localId: a.localId });
    };
  return ((Pn.emitReadyEvent = n), Pn);
}
const hb = "modulepreload",
  gb = function (e, t) {
    return new URL(e, t).href;
  },
  Iu = {},
  ep = function (t, r, n) {
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
          if (((l = gb(l, n)), l in Iu)) return;
          Iu[l] = !0;
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
            ((v.rel = d ? "stylesheet" : hb),
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
var In = {},
  Ui = {},
  Dn = {},
  ao = {},
  Du;
function tp() {
  if (Du) return ao;
  ((Du = 1), Object.defineProperty(ao, "__esModule", { value: !0 }), (ao.default = r));
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
  return ao;
}
var Dr = {},
  jn = {},
  Tn = {},
  ju;
function bb() {
  if (ju) return Tn;
  ((ju = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Tn.default = e), Tn);
}
var Tu;
function Qo() {
  if (Tu) return jn;
  ((Tu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = t(bb());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((jn.default = n), jn);
}
var Mu;
function ei() {
  if (Mu) return Dr;
  ((Mu = 1),
    Object.defineProperty(Dr, "__esModule", { value: !0 }),
    (Dr.default = void 0),
    (Dr.unsafeStringify = n));
  var e = t(Qo());
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
  return ((Dr.default = o), Dr);
}
var Nu;
function _b() {
  if (Nu) return Dn;
  ((Nu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = r(tp()),
    t = ei();
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
  return ((Dn.default = s), Dn);
}
var Mn = {},
  Zt = {},
  Nn = {},
  Fu;
function rp() {
  if (Fu) return Nn;
  ((Fu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = t(Qo());
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
  return ((Nn.default = n), Nn);
}
var Bu;
function np() {
  if (Bu) return Zt;
  ((Bu = 1),
    Object.defineProperty(Zt, "__esModule", { value: !0 }),
    (Zt.URL = Zt.DNS = void 0),
    (Zt.default = i));
  var e = ei(),
    t = r(rp());
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
  Zt.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Zt.URL = o;
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
  return Zt;
}
var Fn = {},
  Lu;
function mb() {
  if (Lu) return Fn;
  ((Lu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
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
        x = _;
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
  return ((Fn.default = p), Fn);
}
var Uu;
function yb() {
  if (Uu) return Mn;
  ((Uu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
  var e = r(np()),
    t = r(mb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((Mn.default = a), Mn);
}
var Bn = {},
  Ln = {},
  qu;
function wb() {
  if (qu) return Ln;
  ((qu = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Ln.default = t), Ln);
}
var zu;
function kb() {
  if (zu) return Bn;
  ((zu = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = n(wb()),
    t = n(tp()),
    r = ei();
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
  return ((Bn.default = o), Bn);
}
var Un = {},
  qn = {},
  $u;
function Ob() {
  if ($u) return qn;
  (($u = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
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
  return ((qn.default = n), qn);
}
var Vu;
function Sb() {
  if (Vu) return Un;
  ((Vu = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var e = r(np()),
    t = r(Ob());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Un.default = a), Un);
}
var zn = {},
  Gu;
function Eb() {
  if (Gu) return zn;
  ((Gu = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((zn.default = e), zn);
}
var $n = {},
  Hu;
function xb() {
  if (Hu) return $n;
  ((Hu = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = t(Qo());
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
var Ku;
function Cb() {
  return (
    Ku ||
      ((Ku = 1),
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
        var t = l(_b()),
          r = l(yb()),
          n = l(kb()),
          a = l(Sb()),
          o = l(Eb()),
          i = l(xb()),
          c = l(Qo()),
          s = l(ei()),
          u = l(rp());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(Ui)),
    Ui
  );
}
var Wu;
function Rb() {
  if (Wu) return In;
  ((Wu = 1),
    Object.defineProperty(In, "__esModule", { value: !0 }),
    (In.createAdfRendererIframeProps = void 0));
  const e = Cb(),
    t = async (r, n) => {
      const a = await ep(
          () => import("./index-JJ6DjNTc.js").then((l) => l.i),
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
  return ((In.createAdfRendererIframeProps = t), In);
}
var Ju;
function ap() {
  if (Ju) return _n;
  ((Ju = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.view = void 0));
  const e = eb(),
    t = tb(),
    r = rb(),
    n = nb(),
    a = ab(),
    o = lb(),
    i = db(),
    c = fb(),
    s = pb(),
    u = Rb();
  return (
    (_n.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: a.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: i.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
      createAdfRendererIframeProps: u.createAdfRendererIframeProps,
    }),
    _n
  );
}
var Yu;
function _c() {
  return (
    Yu ||
      ((Yu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), dt.__exportStar(ap(), e));
      })(Ti)),
    Ti
  );
}
var qi = {},
  Vn = {},
  Xu;
function Pb() {
  if (Xu) return Vn;
  ((Xu = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.router = void 0));
  const t = (0, de().getCallBridge)(),
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
var Zu;
function Ab() {
  return (
    Zu ||
      ((Zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), dt.__exportStar(Pb(), e));
      })(qi)),
    qi
  );
}
var zi = {},
  Gn = {},
  Qu;
function Ib() {
  if (Qu) return Gn;
  ((Qu = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.Modal = void 0));
  const e = de(),
    t = ye(),
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
        (this.closeOnOverlayClick =
          (s = i?.closeOnOverlayClick) !== null && s !== void 0 ? s : !0));
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
var el;
function Db() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), dt.__exportStar(Ib(), e));
      })(zi)),
    zi
  );
}
var pt = {},
  dr = {},
  tl;
function jb() {
  if (tl) return dr;
  ((tl = 1),
    Object.defineProperty(dr, "__esModule", { value: !0 }),
    (dr.productFetchApi = dr.remoteFetchApi = void 0));
  const e = Zv(),
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
            isAttachment: y,
          } = await i("fetchRemote", g),
          k = y ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(k || null, { headers: h, status: _, statusText: b });
      };
      return { requestRemote: (s, u) => c(s, u) };
    };
  dr.remoteFetchApi = a;
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
  return ((dr.productFetchApi = o), dr);
}
var rl;
function Tb() {
  if (rl) return pt;
  rl = 1;
  var e;
  (Object.defineProperty(pt, "__esModule", { value: !0 }),
    (pt.requestRemote = pt.requestBitbucket = pt.requestJira = pt.requestConfluence = void 0));
  const t = de(),
    r = jb();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (pt.requestConfluence = e.requestConfluence),
    (pt.requestJira = e.requestJira),
    (pt.requestBitbucket = e.requestBitbucket),
    (pt.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    pt
  );
}
var $i = {},
  Hn = {},
  nl;
function Mb() {
  if (nl) return Hn;
  ((nl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.showFlag = void 0));
  const e = de(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((Hn.showFlag = n), Hn);
}
var al;
function Nb() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Mb();
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
  ol;
function Fb() {
  return (
    ol ||
      ((ol = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), dt.__exportStar(Qv(), e));
      })(Vi)),
    Vi
  );
}
var Gi = {},
  Kn = {},
  il;
function Bb() {
  if (il) return Kn;
  ((il = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.realtime = void 0));
  const t = (0, de().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((Kn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Kn);
}
var Hi = {},
  sl;
function Lb() {
  return (
    sl ||
      ((sl = 1),
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
var cl;
function Ub() {
  return (
    cl ||
      ((cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Bb();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Lb();
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
var Ki = {},
  Wn = {},
  Wi = {},
  ul;
function qb() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = de(),
          r = ye(),
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
      })(Wi)),
    Wi
  );
}
var ll;
function zb() {
  if (ll) return Wn;
  ((ll = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.rovo = void 0));
  const e = qb();
  return ((Wn.rovo = { open: e.open }), Wn);
}
var dl;
function $b() {
  return (
    dl ||
      ((dl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), dt.__exportStar(zb(), e));
      })(Ki)),
    Ki
  );
}
var qt = {},
  fl;
function Vb() {
  if (fl) return qt;
  ((fl = 1),
    Object.defineProperty(qt, "__esModule", { value: !0 }),
    (qt.createTranslationFunction = qt.getTranslations = qt.resetTranslationsCache = void 0));
  const e = Xv(),
    t = _c(),
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
  qt.resetTranslationsCache = a;
  const o = async (c = null, s = { fallback: !0 }) => {
    let u = c;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, s));
  };
  qt.getTranslations = o;
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
  return ((qt.createTranslationFunction = i), qt);
}
var Ji = {},
  Jn = {},
  vl;
function Gb() {
  if (vl) return Jn;
  ((vl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.permissions = void 0));
  const t = (0, de().getCallBridge)(),
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
var pl;
function Hb() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), dt.__exportStar(Gb(), e));
      })(Ji)),
    Ji
  );
}
var Yi = {},
  Xi = {},
  Zi = {},
  Yn = {},
  Xn = {},
  hl;
function op() {
  return (
    hl ||
      ((hl = 1),
      Object.defineProperty(Xn, "__esModule", { value: !0 }),
      (Xn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Xn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Xn
  );
}
var gl;
function ti() {
  if (gl) return Yn;
  ((gl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.checkRestrictedEnvironment = void 0));
  const e = ye(),
    t = _c(),
    r = op(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Yn.checkRestrictedEnvironment = n), Yn);
}
var bl;
function Kb() {
  return (
    bl ||
      ((bl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ka(),
          r = ye(),
          n = ti(),
          o = (0, de().getCallBridge)(),
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
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const D = await fetch(_, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: D.ok,
                              key: k,
                              status: D.status,
                              error: D.ok ? void 0 : `Upload failed with status ${D.status}`,
                            };
                          } catch (D) {
                            return {
                              success: !1,
                              key: k,
                              status: 503,
                              error: D instanceof Error ? D.message : "Upload failed",
                            };
                          }
                        })(),
                        index: x,
                        objectType: S.type,
                        objectSize: S.size,
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
      })(Zi)),
    Zi
  );
}
var Zn = {},
  _l;
function Wb() {
  if (_l) return Zn;
  ((_l = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.deleteObjects = void 0));
  const e = Ka(),
    t = ye(),
    r = ti(),
    a = (0, de().getCallBridge)(),
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
  return ((Zn.deleteObjects = o), Zn);
}
var Qn = {},
  ml;
function Jb() {
  if (ml) return Qn;
  ((ml = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.download = void 0));
  const e = Ka(),
    t = ye(),
    r = ti(),
    a = (0, de().getCallBridge)(),
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
  return ((Qn.download = o), Qn);
}
var ea = {},
  yl;
function Yb() {
  if (yl) return ea;
  ((yl = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.getMetadata = void 0));
  const e = Ka(),
    t = ye(),
    r = ti(),
    a = (0, de().getCallBridge)(),
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
  return ((ea.getMetadata = o), ea);
}
var wl;
function Xb() {
  return (
    wl ||
      ((wl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = Kb();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = Wb(),
          n = Jb(),
          a = Yb();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(Xi)),
    Xi
  );
}
var kl;
function Zb() {
  return (
    kl ||
      ((kl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = dt;
        (t.__exportStar(Xb(), e), t.__exportStar(op(), e));
      })(Yi)),
    Yi
  );
}
var Qi = {},
  ta = {},
  fr = {},
  jr = {},
  oo = {},
  Ol;
function Qb() {
  if (Ol) return oo;
  ((Ol = 1), Object.defineProperty(oo, "__esModule", { value: !0 }));
  const e = ar();
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
  return ((oo.default = t), oo);
}
var Tr = {},
  ra = {},
  Sl;
function e_() {
  if (Sl) return ra;
  ((Sl = 1),
    Object.defineProperty(ra, "__esModule", { value: !0 }),
    (ra._resolveDeltasResponse = void 0));
  const e = ar(),
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
  ra._resolveDeltasResponse = r;
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
  return ra;
}
var El;
function ip() {
  if (El) return Tr;
  El = 1;
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
  const t = ar(),
    r = e_();
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
var na = {},
  xl;
function t_() {
  if (xl) return na;
  ((xl = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na._makeParamStoreGetter = void 0));
  const e = ar(),
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
  return ((na._makeParamStoreGetter = u), na);
}
var vr = {},
  Cl;
function r_() {
  if (Cl) return vr;
  Cl = 1;
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
  (Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.StatsigEvaluationsDataAdapter = void 0));
  const t = ar(),
    r = ip();
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
  return ((vr.StatsigEvaluationsDataAdapter = n), vr);
}
var Rl;
function n_() {
  if (Rl) return jr;
  Rl = 1;
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
  Object.defineProperty(jr, "__esModule", { value: !0 });
  const t = ar(),
    r = Qb(),
    n = ip(),
    a = t_(),
    o = r_();
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
  return ((jr.default = i), jr);
}
var Pl;
function a_() {
  return (
    Pl ||
      ((Pl = 1),
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
        const n = ar(),
          a = n_();
        ((e.StatsigClient = a.default), r(ar(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(fr)),
    fr
  );
}
var aa = {},
  oa = {},
  Al;
function o_() {
  if (Al) return oa;
  ((Al = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa.initFeatureFlags = void 0));
  const e = de(),
    t = ye(),
    r = Zo(),
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
    (oa.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    oa
  );
}
var Il;
function i_() {
  if (Il) return aa;
  ((Il = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.ForgeDataAdapter = void 0));
  const e = o_();
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
  return ((aa.ForgeDataAdapter = t), aa);
}
var es = {},
  Dl;
function sp() {
  return (
    Dl ||
      ((Dl = 1),
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
      })(es)),
    es
  );
}
var ia = {},
  jl;
function s_() {
  if (jl) return ia;
  ((jl = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia.trackFeatureFlagEvent = void 0));
  const e = de(),
    t = ye(),
    r = sp(),
    n = Zo(),
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
    (ia.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    ia
  );
}
var Tl;
function c_() {
  if (Tl) return ta;
  ((Tl = 1),
    Object.defineProperty(ta, "__esModule", { value: !0 }),
    (ta.ForgeFeatureFlags = void 0));
  const e = a_(),
    t = i_(),
    r = sp(),
    n = s_();
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
  return ((ta.ForgeFeatureFlags = a), ta);
}
var Ml;
function u_() {
  return (
    Ml ||
      ((Ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = c_();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(Qi)),
    Qi
  );
}
var Nl;
function l_() {
  return (
    Nl ||
      ((Nl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = dt;
        var r = Jg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ka(), e),
          t.__exportStar(Qg(), e),
          t.__exportStar(_c(), e),
          t.__exportStar(Ab(), e),
          t.__exportStar(Db(), e),
          t.__exportStar(Tb(), e),
          t.__exportStar(Nb(), e),
          t.__exportStar(Fb(), e),
          t.__exportStar(Ub(), e),
          t.__exportStar($b(), e),
          (e.i18n = t.__importStar(Vb())),
          t.__exportStar(Hb(), e),
          t.__exportStar(Zb(), e),
          t.__exportStar(u_(), e));
      })(Pi)),
    Pi
  );
}
var Ma = l_();
function W(e) {
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
var d_ = {};
function ri() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : d_;
}
var cp = Object.assign,
  Do = Object.getOwnPropertyDescriptor,
  Rt = Object.defineProperty,
  ni = Object.prototype,
  Us = [];
Object.freeze(Us);
var up = {};
Object.freeze(up);
var f_ = typeof Proxy < "u",
  v_ = Object.toString();
function lp() {
  f_ || W("Proxy not available");
}
function dp(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Gr = function () {};
function _t(e) {
  return typeof e == "function";
}
function mr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function ai(e) {
  return e !== null && typeof e == "object";
}
function or(e) {
  if (!ai(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === v_;
}
function fp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function oi(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function vp(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function xr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return ai(n) && n[r] === !0;
    }
  );
}
function an(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function p_(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Gt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var pp = typeof Object.getOwnPropertySymbols < "u";
function h_(e) {
  var t = Object.keys(e);
  if (!pp) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return ni.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var ii =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : pp
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function hp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Wt(e, t) {
  return ni.hasOwnProperty.call(e, t);
}
var g_ =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      ii(t).forEach(function (n) {
        r[n] = Do(t, n);
      }),
      r
    );
  };
function He(e, t) {
  return !!(e & t);
}
function Ke(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function b_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, m_(n.key), n));
  }
}
function on(e, t, r) {
  return (t && b_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Hr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = y_(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yr() {
  return (
    (yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    yr.apply(null, arguments)
  );
}
function gp(e, t) {
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
function __(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function m_(e) {
  var t = __(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function y_(e, t) {
  if (e) {
    if (typeof e == "string") return Fl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Fl(e, t)
          : void 0
    );
  }
}
var Ct = Symbol("mobx-stored-annotations");
function Pt(e) {
  function t(r, n) {
    if (Ja(n)) return e.decorate_20223_(r, n);
    Wa(r, n, e);
  }
  return Object.assign(t, e);
}
function Wa(e, t, r) {
  (Wt(e, Ct) || oi(e, Ct, yr({}, e[Ct])), C_(r) || (e[Ct][t] = r));
}
function w_(e) {
  return (Wt(e, Ct) || oi(e, Ct, yr({}, e[Ct])), e[Ct]);
}
function Ja(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var F = Symbol("mobx administration"),
  sr = (function () {
    function e(r) {
      (r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Y.NOT_TRACKING_),
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
        return Dp(this);
      }),
      (t.reportChanged = function () {
        (ot(), jp(this), it());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      on(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return He(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return He(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return He(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
sr.isBeingObservedMask_ = 1;
sr.isPendingUnobservationMask_ = 2;
sr.diffValueMask_ = 4;
var mc = xr("Atom", sr);
function bp(e, t, r) {
  (t === void 0 && (t = Gr), r === void 0 && (r = Gr));
  var n = new sr(e);
  return (t !== Gr && Dm(n, t), r !== Gr && Bp(n, r), n);
}
function k_(e, t) {
  return Xp(e, t);
}
function O_(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var jo = { structural: k_, default: O_ };
function wr(e, t, r) {
  return zp(e)
    ? e
    : Array.isArray(e)
      ? ae.array(e, { name: r })
      : or(e)
        ? ae.object(e, void 0, { name: r })
        : an(e)
          ? ae.map(e, { name: r })
          : Gt(e)
            ? ae.set(e, { name: r })
            : typeof e == "function" && !Yr(e) && !Fa(e)
              ? fp(e)
                ? Xr(e)
                : Na(r, e)
              : e;
}
function S_(e, t, r) {
  if (e == null || pi(e) || vi(e) || Rr(e) || xt(e)) return e;
  if (Array.isArray(e)) return ae.array(e, { name: r, deep: !1 });
  if (or(e)) return ae.object(e, void 0, { name: r, deep: !1 });
  if (an(e)) return ae.map(e, { name: r, deep: !1 });
  if (Gt(e)) return ae.set(e, { name: r, deep: !1 });
}
function si(e) {
  return e;
}
function E_(e, t) {
  return Xp(e, t) ? t : e;
}
var x_ = "override";
function C_(e) {
  return e.annotationType_ === x_;
}
function Ya(e, t) {
  return { annotationType_: e, options_: t, make_: R_, extend_: P_, decorate_20223_: A_ };
}
function R_(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Yr(r.value)) return 1;
  var o = _p(e, this, t, r, !1);
  return (Rt(n, t, o), 2);
}
function P_(e, t, r, n) {
  var a = _p(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function A_(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, p, v;
      return kr(
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
        Yr(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      Yr(e) || (e = i(e)),
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
  W(
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
function I_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function _p(e, t, r, n, a) {
  var o, i, c, s, u, l, d;
  (a === void 0 && (a = I.safeDescriptors), I_(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: kr(
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
function mp(e, t) {
  return { annotationType_: e, options_: t, make_: D_, extend_: j_, decorate_20223_: T_ };
}
function D_(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Wt(e.target_, t) || !Fa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Fa(r.value)) return 1;
  var o = yp(e, this, t, r, !1, !1);
  return (Rt(n, t, o), 2);
}
function j_(e, t, r, n) {
  var a,
    o = yp(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function T_(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Fa(e) || (e = Xr(e)),
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
function M_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function yp(e, t, r, n, a, o) {
  (o === void 0 && (o = I.safeDescriptors), M_(e, t, r, n));
  var i = n.value;
  if ((Fa(i) || (i = Xr(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function yc(e, t) {
  return { annotationType_: e, options_: t, make_: N_, extend_: F_, decorate_20223_: B_ };
}
function N_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function F_(e, t, r, n) {
  return (
    L_(e, this, t, r),
    e.defineComputedProperty_(t, yr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function B_(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = sn(this)[F],
        i = yr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new mt(i)));
    }),
    function () {
      return this[F].getObservablePropValue_(n);
    }
  );
}
function L_(e, t, r, n) {
  (t.annotationType_, n.get);
}
function ci(e, t) {
  return { annotationType_: e, options_: t, make_: U_, extend_: q_, decorate_20223_: z_ };
}
function U_(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function q_(e, t, r, n) {
  var a, o;
  return (
    $_(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : wr,
      n,
    )
  );
}
function z_(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var u,
      l,
      d = sn(c)[F],
      p = new br(
        s,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : wr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, p), o.add(c));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[F].getObservablePropValue_(a));
      },
      set: function (s) {
        return (o.has(this) || i(this, s), this[F].setObservablePropValue_(a, s));
      },
      init: function (s) {
        return (o.has(this) || i(this, s), s);
      },
    };
}
function $_(e, t, r, n) {
  t.annotationType_;
}
var V_ = "true",
  G_ = wp();
function wp(e) {
  return { annotationType_: V_, options_: e, make_: H_, extend_: K_, decorate_20223_: W_ };
}
function H_(e, t, r, n) {
  var a, o;
  if (r.get) return ui.make_(e, t, r, n);
  if (r.set) {
    var i = Yr(r.set) ? r.set : kr(t.toString(), r.set);
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
    if (fp(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? Xr.bound : Xr;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? Na.bound : Na;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ae.ref : ae;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function K_(e, t, r, n) {
  var a, o;
  if (r.get) return ui.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: I.safeDescriptors ? e.isPlainObject_ : !0, set: kr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ae.ref : ae;
  return c.extend_(e, t, r, n);
}
function W_(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var J_ = "observable",
  Y_ = "observable.ref",
  X_ = "observable.shallow",
  Z_ = "observable.struct",
  kp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(kp);
function io(e) {
  return e || kp;
}
var zs = ci(J_),
  Q_ = ci(Y_, { enhancer: si }),
  em = ci(X_, { enhancer: S_ }),
  tm = ci(Z_, { enhancer: E_ }),
  Op = Pt(zs);
function so(e) {
  return e.deep === !0 ? wr : e.deep === !1 ? si : nm(e.defaultDecorator);
}
function rm(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : wp(e)) : void 0;
}
function nm(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : wr;
}
function Sp(e, t, r) {
  if (Ja(t)) return zs.decorate_20223_(e, t);
  if (mr(t)) {
    Wa(e, t, zs);
    return;
  }
  return zp(e)
    ? e
    : or(e)
      ? ae.object(e, t, r)
      : Array.isArray(e)
        ? ae.array(e, t)
        : an(e)
          ? ae.map(e, t)
          : Gt(e)
            ? ae.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ae.box(e, t);
}
cp(Sp, Op);
var am = {
    box: function (t, r) {
      var n = io(r);
      return new br(t, so(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = io(r);
      return (I.useProxies === !1 || n.proxy === !1 ? ry : Hm)(t, so(n), n.name);
    },
    map: function (t, r) {
      var n = io(r);
      return new Gp(t, so(n), n.name);
    },
    set: function (t, r) {
      var n = io(r);
      return new Hp(t, so(n), n.name);
    },
    object: function (t, r, n) {
      return Pr(function () {
        return Nm(I.useProxies === !1 || n?.proxy === !1 ? sn({}, n) : $m({}, n), t, r);
      });
    },
    ref: Pt(Q_),
    shallow: Pt(em),
    deep: Op,
    struct: Pt(tm),
  },
  ae = cp(Sp, am),
  Ep = "computed",
  om = "computed.struct",
  $s = yc(Ep),
  im = yc(om, { equals: jo.structural }),
  ui = function (t, r) {
    if (Ja(r)) return $s.decorate_20223_(t, r);
    if (mr(r)) return Wa(t, r, $s);
    if (or(t)) return Pt(yc(Ep, t));
    var n = or(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new mt(n));
  };
Object.assign(ui, $s);
ui.struct = Pt(im);
var Bl,
  Ll,
  To = 0,
  sm = 1,
  cm =
    (Bl = (Ll = Do(function () {}, "name")) == null ? void 0 : Ll.configurable) != null ? Bl : !1,
  Ul = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function kr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return um(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    cm && ((Ul.value = e), Rt(a, "name", Ul)),
    a
  );
}
function um(e, t, r, n, a) {
  var o = lm(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    dm(o);
  }
}
function lm(e, t, r, n) {
  var a = !1,
    o = 0,
    i = I.trackingDerivation,
    c = !t || !i;
  ot();
  var s = I.allowStateChanges;
  c && (Cr(), (s = li(!0)));
  var u = wc(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: sm++,
      parentActionId_: To,
    };
  return ((To = l.actionId_), l);
}
function dm(e) {
  (To !== e.actionId_ && W(30),
    (To = e.parentActionId_),
    e.error_ !== void 0 && (I.suppressReactionErrors = !0),
    di(e.prevAllowStateChanges_),
    Ca(e.prevAllowStateReads_),
    it(),
    e.runAsAction_ && Jt(e.prevDerivation_),
    (I.suppressReactionErrors = !1));
}
function fm(e, t) {
  var r = li(e);
  try {
    return t();
  } finally {
    di(r);
  }
}
function li(e) {
  var t = I.allowStateChanges;
  return ((I.allowStateChanges = e), t);
}
function di(e) {
  I.allowStateChanges = e;
}
var br = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = jo.default),
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
    gp(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== I.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (rt(this)) {
          var o = nt(this, { object: this, type: At, newValue: a });
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
          gt(this) && bt(this, { type: At, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Xa(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: At,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Za(this, a)
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
        return hp(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(sr),
  mt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Y.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Y.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new No(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Mo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = kr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? jo.structural : jo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        bm(this);
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
          (this.isComputing && W(32, this.name_, this.derivation),
          I.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Vs(this) &&
            (this.warnAboutUntrackedRead_(), ot(), (this.value_ = this.computeValue_(!1)), it());
        else if ((Dp(this), Vs(this))) {
          var n = I.trackingContext;
          (this.keepAlive_ && !n && (I.trackingContext = this),
            this.trackAndCompute() && gm(this),
            (I.trackingContext = n));
        }
        var a = this.value_;
        if (wo(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && W(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else W(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === Y.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || wo(n) || wo(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = li(!1),
          o;
        if (n) o = xp(this, this.derivation, this.scope_);
        else if (I.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new No(i);
          }
        return (di(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Gs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return Cm(function () {
          var s = o.get();
          if (!i || a) {
            var u = Cr();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: At,
              object: o,
              newValue: s,
              oldValue: c,
            }),
              Jt(u));
          }
          ((i = !1), (c = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return hp(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      on(e, [
        {
          key: "isComputing",
          get: function () {
            return He(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return He(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return He(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return He(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return He(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
mt.isComputingMask_ = 1;
mt.isRunningSetterMask_ = 2;
mt.isBeingObservedMask_ = 4;
mt.isPendingUnobservationMask_ = 8;
mt.diffValueMask_ = 16;
var fi = xr("ComputedValue", mt),
  Y;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Y || (Y = {}));
var Mo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Mo || (Mo = {}));
var No = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function wo(e) {
  return e instanceof No;
}
function Vs(e) {
  switch (e.dependenciesState_) {
    case Y.UP_TO_DATE_:
      return !1;
    case Y.NOT_TRACKING_:
    case Y.STALE_:
      return !0;
    case Y.POSSIBLY_STALE_: {
      for (var t = wc(!0), r = Cr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (fi(i)) {
          if (I.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Jt(r), Ca(t), !0);
            }
          if (e.dependenciesState_ === Y.STALE_) return (Jt(r), Ca(t), !0);
        }
      }
      return (Rp(e), Jt(r), Ca(t), !1);
    }
  }
}
function xp(e, t, r) {
  var n = wc(!0);
  (Rp(e),
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
      o = new No(i);
    }
  return (I.inBatch--, (I.trackingDerivation = a), vm(e), Ca(n), o);
}
function vm(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = Y.UP_TO_DATE_,
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
    (s.diffValue === 0 && Ap(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), hm(u, e));
  }
  n !== Y.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Gs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Ap(t[r], e);
  e.dependenciesState_ = Y.NOT_TRACKING_;
}
function Cp(e) {
  var t = Cr();
  try {
    return e();
  } finally {
    Jt(t);
  }
}
function Cr() {
  var e = I.trackingDerivation;
  return ((I.trackingDerivation = null), e);
}
function Jt(e) {
  I.trackingDerivation = e;
}
function wc(e) {
  var t = I.allowStateReads;
  return ((I.allowStateReads = e), t);
}
function Ca(e) {
  I.allowStateReads = e;
}
function Rp(e) {
  if (e.dependenciesState_ !== Y.UP_TO_DATE_) {
    e.dependenciesState_ = Y.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Y.UP_TO_DATE_;
  }
}
var ko = function () {
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
  Oo = !0,
  Pp = !1,
  I = (function () {
    var e = ri();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Oo = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ko().version && (Oo = !1),
      Oo
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ko()))
        : (setTimeout(function () {
            Pp || W(35);
          }, 1),
          new ko())
    );
  })();
function pm() {
  if (((I.pendingReactions.length || I.inBatch || I.isRunningReactions) && W(36), (Pp = !0), Oo)) {
    var e = ri();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (I = new ko()));
  }
}
function hm(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Ap(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Ip(e));
}
function Ip(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), I.pendingUnobservations.push(e));
}
function ot() {
  I.inBatch++;
}
function it() {
  if (--I.inBatch === 0) {
    Tp();
    for (var e = I.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof mt && r.suspend_()));
    }
    I.pendingUnobservations = [];
  }
}
function Dp(e) {
  var t = I.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && I.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && I.inBatch > 0 && Ip(e), !1);
}
function jp(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Y.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Y.STALE_));
    }));
}
function gm(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Y.STALE_)
        : t.dependenciesState_ === Y.UP_TO_DATE_ && (e.lowestObserverState_ = Y.UP_TO_DATE_);
    }));
}
function bm(e) {
  e.lowestObserverState_ === Y.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Y.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Y.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Tt = (function () {
  function e(r, n, a, o) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = Y.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Mo.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), I.pendingReactions.push(this), Tp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (ot(), (this.isScheduled = !1));
        var n = I.trackingContext;
        if (((I.trackingContext = this), Vs(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((I.trackingContext = n), it());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (ot(), (this.isRunning = !0));
        var a = I.trackingContext;
        I.trackingContext = this;
        var o = xp(this, n, void 0);
        ((I.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Gs(this),
          wo(o) && this.reportExceptionInDerivation_(o.cause),
          it());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (ot(), Gs(this), it()));
    }),
    (t.getDisposer_ = function (n) {
      var a = this,
        o = function i() {
          (a.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", i));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", o),
        (o[F] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (o[Symbol.dispose] = o),
        o
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    on(e, [
      {
        key: "isDisposed",
        get: function () {
          return He(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return He(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return He(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return He(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return He(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ke(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
Tt.isDisposedMask_ = 1;
Tt.isScheduledMask_ = 2;
Tt.isTrackPendingMask_ = 4;
Tt.isRunningMask_ = 8;
Tt.diffValueMask_ = 16;
var _m = 100,
  Hs = function (t) {
    return t();
  };
function Tp() {
  I.inBatch > 0 || I.isRunningReactions || Hs(mm);
}
function mm() {
  I.isRunningReactions = !0;
  for (var e = I.pendingReactions, t = 0; e.length > 0; ) {
    ++t === _m && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  I.isRunningReactions = !1;
}
var Fo = xr("Reaction", Tt);
function ym(e) {
  var t = Hs;
  Hs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Ra() {
  return !1;
}
function wm(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Mp = "action",
  km = "action.bound",
  Np = "autoAction",
  Om = "autoAction.bound",
  Sm = "<unnamed action>",
  Ks = Ya(Mp),
  Em = Ya(km, { bound: !0 }),
  Ws = Ya(Np, { autoAction: !0 }),
  xm = Ya(Om, { autoAction: !0, bound: !0 });
function Fp(e) {
  var t = function (n, a) {
    if (_t(n)) return kr(n.name || Sm, n, e);
    if (_t(a)) return kr(n, a, e);
    if (Ja(a)) return (e ? Ws : Ks).decorate_20223_(n, a);
    if (mr(a)) return Wa(n, a, e ? Ws : Ks);
    if (mr(n)) return Pt(Ya(e ? Np : Mp, { name: n, autoAction: e }));
  };
  return t;
}
var st = Fp(!1);
Object.assign(st, Ks);
var Na = Fp(!0);
Object.assign(Na, Ws);
st.bound = Pt(Em);
Na.bound = Pt(xm);
function Yr(e) {
  return _t(e) && e.isMobxAction === !0;
}
function Cm(e, t) {
  var r, n, a, o;
  t === void 0 && (t = up);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    c = !t.scheduler && !t.delay,
    s;
  if (c)
    s = new Tt(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Pm(t),
      l = !1;
    s = new Tt(
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
var Rm = function (t) {
  return t();
};
function Pm(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Rm;
}
var Am = "onBO",
  Im = "onBUO";
function Dm(e, t, r) {
  return Lp(Am, e, t, r);
}
function Bp(e, t, r) {
  return Lp(Im, e, t, r);
}
function Lp(e, t, r, n) {
  var a = Uo(t),
    o = _t(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var c = a[i];
      c && (c.delete(o), c.size === 0 && delete a[i]);
    }
  );
}
var jm = "never",
  co = "always",
  Tm = "observed";
function Mm(e) {
  e.isolateGlobalState === !0 && pm();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (I.useProxies = t === co ? !0 : t === jm ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (I.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === co ? co : r === Tm;
    ((I.enforceActions = n), (I.allowStateChanges = !(n === !0 || n === co)));
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
    e.reactionScheduler && ym(e.reactionScheduler));
}
function Nm(e, t, r, n) {
  var a = g_(t);
  return (
    Pr(function () {
      var o = sn(e, n)[F];
      ii(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function Fm(e, t) {
  return Up(Uo(e, t));
}
function Up(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Bm(e.observing_).map(Up)),
    t
  );
}
function Bm(e) {
  return Array.from(new Set(e));
}
var Lm = 0;
function qp() {
  this.message = "FLOW_CANCELLED";
}
qp.prototype = Object.create(Error.prototype);
var ts = mp("flow"),
  Um = mp("flow.bound", { bound: !0 }),
  Xr = Object.assign(function (t, r) {
    if (Ja(r)) return ts.decorate_20223_(t, r);
    if (mr(r)) return Wa(t, r, ts);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          u = ++Lm,
          l = st(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              p = void 0;
              var w;
              try {
                w = st(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function _(k) {
              p = void 0;
              var w;
              try {
                w = st(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function y(k) {
              if (_t(k?.then)) {
                k.then(y, f);
                return;
              }
              return k.done ? g(k.value) : ((p = Promise.resolve(k.value)), p.then(b, _));
            }
            b(void 0);
          });
        return (
          (v.cancel = st(a + " - runid: " + u + " - cancel", function () {
            try {
              p && ql(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Gr, Gr), ql(f), d(new qp()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, ts);
Xr.bound = Pt(Um);
function ql(e) {
  _t(e.cancel) && e.cancel();
}
function Fa(e) {
  return e?.isMobXFlow === !0;
}
function qm(e, t) {
  return e ? pi(e) || !!e[F] || mc(e) || Fo(e) || fi(e) : !1;
}
function zp(e) {
  return qm(e);
}
function Ht(e, t) {
  (t === void 0 && (t = void 0), ot());
  try {
    return e.apply(t);
  } finally {
    it();
  }
}
function Mr(e) {
  return e[F];
}
var zm = {
  has: function (t, r) {
    return Mr(t).has_(r);
  },
  get: function (t, r) {
    return Mr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return mr(r) ? ((a = Mr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return mr(r) ? ((n = Mr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Mr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Mr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function $m(e, t) {
  var r, n;
  return (
    lp(),
    (e = sn(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, zm))
  );
}
function rt(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Xa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    dp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function nt(e, t) {
  var r = Cr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && W(14), !!t);
      a++
    );
    return t;
  } finally {
    Jt(r);
  }
}
function gt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Za(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    dp(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function bt(e, t) {
  var r = Cr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Jt(r);
  }
}
function $p(e, t, r) {
  return (
    Pr(function () {
      var n,
        a = sn(e, r)[F];
      ((n = t) != null || (t = w_(e)),
        ii(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var zl = "splice",
  At = "update",
  Vm = 1e4,
  Gm = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Wt(Bo, r)
              ? Bo[r]
              : t[r];
    },
    set: function (t, r, n) {
      var a = t[F];
      return (
        r === "length" && a.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : a.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      W(15);
    },
  },
  kc = (function () {
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
        (this.atom_ = new sr(r)),
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
        return Xa(this, n);
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
          Za(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && W("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && W(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Yp(n + a + 1));
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
          o === void 0 && (o = Us),
          rt(this))
        ) {
          var s = nt(this, { object: this.proxy_, type: zl, index: n, removedCount: a, added: o });
          if (!s) return Us;
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
        if (o.length < Vm) {
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
          c = gt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: At,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), c && bt(this, s));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && Ra(),
          c = gt(this),
          s =
            c || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: zl,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), c && bt(this, s));
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
        if ((this.legacyMode_ && n > o.length && W(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (rt(this)) {
            var c = nt(this, { type: At, object: this.proxy_, index: n, newValue: a });
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
function Hm(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    lp(),
    Pr(function () {
      var a = new kc(r, t, n, !1);
      vp(a.values_, F, a);
      var o = new Proxy(a.values_, Gm);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Bo = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[F];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      a[o - 2] = arguments[o];
    var i = this[F];
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
    return this[F].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[F].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (I.trackingDerivation && W(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    I.trackingDerivation && W(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[F],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
se("at", Ye);
se("concat", Ye);
se("flat", Ye);
se("includes", Ye);
se("indexOf", Ye);
se("join", Ye);
se("lastIndexOf", Ye);
se("slice", Ye);
se("toString", Ye);
se("toLocaleString", Ye);
se("toSorted", Ye);
se("toSpliced", Ye);
se("with", Ye);
se("every", yt);
se("filter", yt);
se("find", yt);
se("findIndex", yt);
se("findLast", yt);
se("findLastIndex", yt);
se("flatMap", yt);
se("forEach", yt);
se("map", yt);
se("some", yt);
se("toReversed", yt);
se("reduce", Vp);
se("reduceRight", Vp);
function se(e, t) {
  typeof Array.prototype[e] == "function" && (Bo[e] = t(e));
}
function Ye(e) {
  return function () {
    var t = this[F];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function yt(e) {
  return function (t, r) {
    var n = this,
      a = this[F];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, c) {
      return t.call(r, i, c, n);
    });
  };
}
function Vp(e) {
  return function () {
    var t = this,
      r = this[F];
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
var Km = xr("ObservableArrayAdministration", kc);
function vi(e) {
  return ai(e) && Km(e[F]);
}
var Wm = {},
  rr = "add",
  Lo = "delete",
  Gp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = wr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = Wm),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        _t(Map) || W(18),
        Pr(function () {
          ((o.keysAtom_ = bp("ObservableMap.keys()")),
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
          var i = (o = new br(this.has_(n), si, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Bp(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (rt(this)) {
          var i = nt(this, { type: o ? At : rr, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, rt(this))) {
          var o = nt(this, { type: Lo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Ra(),
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Lo,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Ht(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            c && bt(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var i = Ra(),
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: At,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && bt(this, s));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Ht(function () {
            var u,
              l = new br(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = Ra(),
          c = gt(this),
          s =
            c || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: rr,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        c && bt(this, s);
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
        return $l({
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
        return $l({
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
          Rr(n) && (n = new Map(n)),
          Ht(function () {
            or(n)
              ? h_(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : an(n)
                  ? (p_(n) || W(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && W(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Ht(function () {
          Cp(function () {
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
          Ht(function () {
            for (
              var o = Jm(n), i = new Map(), c = !1, s = Hr(a.data_.keys()), u;
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
            for (var v = Hr(o.entries()), g; !(g = v()).done; ) {
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
                for (var k = a.data_.keys(), w = i.keys(), S = k.next(), x = w.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = k.next()), (x = w.next()));
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
        return Za(this, n);
      }),
      (t.intercept_ = function (n) {
        return Xa(this, n);
      }),
      on(e, [
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
  Rr = xr("ObservableMap", Gp);
function $l(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Sc(e));
}
function Jm(e) {
  if (an(e) || Rr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (or(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var Ym = {},
  Hp = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = wr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = Ym),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        _t(Set) || W(22),
        (this.enhancer_ = function (i, c) {
          return n(i, c, a);
        }),
        Pr(function () {
          ((o.atom_ = bp(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Ht(function () {
          Cp(function () {
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
        if ((this.atom_, rt(this))) {
          var o = nt(this, { type: rr, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Ht(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: rr,
                    object: this,
                    newValue: n,
                  }
                : null;
          c && bt(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (rt(this)) {
          var o = nt(this, { type: Lo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            c = gt(this),
            s =
              c || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Lo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Ht(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            c && bt(this, s),
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
        return Vl({
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
        return Vl({
          next: function () {
            var i = a.next(),
              c = i.value,
              s = i.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(c), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Gt(n) && !xt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Gt(n) && !xt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Gt(n) && !xt(n)) return n.symmetricDifference(this);
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
        if (Gt(n) && !xt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          xt(n) && (n = new Set(n)),
          Ht(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Gt(n)
                ? (a.clear(),
                  n.forEach(function (o) {
                    return a.add(o);
                  }))
                : n != null && W("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return Za(this, n);
      }),
      (t.intercept_ = function (n) {
        return Xa(this, n);
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
      on(e, [
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
  xt = xr("ObservableSet", Hp);
function Vl(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Sc(e));
}
var Gl = Object.create(null),
  Hl = "remove",
  Kp = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = G_),
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
        (this.keysAtom_ = new sr("ObservableObject.keys")),
        (this.isPlainObject_ = or(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, a) {
        var o = this.values_.get(n);
        if (o instanceof mt) return (o.set(a), !0);
        if (rt(this)) {
          var i = nt(this, { type: At, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== I.UNCHANGED)) {
          var c = gt(this),
            s = !1,
            u =
              c || s
                ? {
                    type: At,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), c && bt(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (I.trackingDerivation && !Wt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Wt(this.target_, n)
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
            ((a = new br(n in this.target_, si, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Ct]) != null && o[n]) return;
            W(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== ni; ) {
            var c = Do(i, n);
            if (c) {
              var s = a.make_(this, n, c, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          Wl(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var c = o.extend_(this, n, a, i);
        return (c && Wl(this, o, n), c);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          ot();
          var i = this.delete_(n);
          if (!i) return i;
          if (rt(this)) {
            var c = nt(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: rr,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = yr({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Rt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          it();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          ot();
          var c = this.delete_(n);
          if (!c) return c;
          if (rt(this)) {
            var s = nt(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: rr,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var u = Kl(n),
            l = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Rt(this.target_, n, l);
          var d = new br(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          it();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          ot();
          var i = this.delete_(n);
          if (!i) return i;
          if (rt(this)) {
            var c = nt(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: rr,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = Kl(n),
            u = {
              configurable: I.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else Rt(this.target_, n, u);
          (this.values_.set(n, new mt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          it();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Wt(this.target_, n))) return !0;
        if (rt(this)) {
          var o = nt(this, { object: this.proxy_ || this.target_, name: n, type: Hl });
          if (!o) return null;
        }
        try {
          var i;
          ot();
          var c = gt(this),
            s = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (c || s)) {
            var d;
            l = (d = Do(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof br && (l = u.value_), jp(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var p = {
              type: Hl,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && bt(this, p);
          }
        } finally {
          it();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return Za(this, n);
      }),
      (t.intercept_ = function (n) {
        return Xa(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = gt(this),
          c = !1;
        if (i || c) {
          var s =
            i || c
              ? {
                  type: rr,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && bt(this, s);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), ii(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function sn(e, t) {
  var r;
  if (Wt(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Kp(e, new Map(), String(n), rm(t));
  return (oi(e, F, a), e);
}
var Xm = xr("ObservableObjectAdministration", Kp);
function Kl(e) {
  return (
    Gl[e] ||
    (Gl[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function pi(e) {
  return ai(e) ? Xm(e[F]) : !1;
}
function Wl(e, t, r) {
  var n;
  (n = e.target_[Ct]) == null || delete n[r];
}
var Zm = Jp(0),
  Qm = (function () {
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
  rs = 0,
  Wp = function () {};
function ey(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
ey(Wp, Array.prototype);
var Oc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Pr(function () {
        var s = new kc(o, a, i, !0);
        ((s.proxy_ = c),
          vp(c, F, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          Qm && Object.defineProperty(c, "0", Zm));
      }),
      c
    );
  }
  gp(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return vi(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Sc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    on(t, [
      {
        key: "length",
        get: function () {
          return this[F].getArrayLength_();
        },
        set: function (a) {
          this[F].setArrayLength_(a);
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
})(Wp);
Object.entries(Bo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && oi(Oc.prototype, t, r);
});
function Jp(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[F].get_(e);
    },
    set: function (r) {
      this[F].set_(e, r);
    },
  };
}
function ty(e) {
  Rt(Oc.prototype, "" + e, Jp(e));
}
function Yp(e) {
  if (e > rs) {
    for (var t = rs; t < e + 100; t++) ty(t);
    rs = e;
  }
}
Yp(1e3);
function ry(e, t, r) {
  return new Oc(e, t, r);
}
function Uo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (vi(e)) return (t !== void 0 && W(23), e[F].atom_);
    if (xt(e)) return e.atom_;
    if (Rr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, Js(e)), r);
    }
    if (pi(e)) {
      if (!t) return W(26);
      var n = e[F].values_.get(t);
      return (n || W(27, t, Js(e)), n);
    }
    if (mc(e) || fi(e) || Fo(e)) return e;
  } else if (_t(e) && Fo(e[F])) return e[F];
  W(28);
}
function ny(e, t) {
  if ((e || W(29), mc(e) || fi(e) || Fo(e) || Rr(e) || xt(e))) return e;
  if (e[F]) return e[F];
  W(24, e);
}
function Js(e, t) {
  var r;
  if (t !== void 0) r = Uo(e, t);
  else {
    if (Yr(e)) return e.name;
    pi(e) || Rr(e) || xt(e) ? (r = ny(e)) : (r = Uo(e));
  }
  return r.name_;
}
function Pr(e) {
  var t = Cr(),
    r = li(!0);
  ot();
  try {
    return e();
  } finally {
    (it(), di(r), Jt(t));
  }
}
var Jl = ni.toString;
function Xp(e, t, r) {
  return (r === void 0 && (r = -1), Ys(e, t, r));
}
function Ys(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = Jl.call(e);
  if (i !== Jl.call(t)) return !1;
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
  ((e = Yl(e)), (t = Yl(t)));
  var c = i === "[object Array]";
  if (!c) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(_t(s) && s instanceof s && _t(u) && u instanceof u) &&
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
    for (; l--; ) if (!Ys(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!(Wt(t, g) && Ys(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function Yl(e) {
  return vi(e) ? e.slice() : an(e) || Rr(e) || Gt(e) || xt(e) ? Array.from(e.entries()) : e;
}
var Xl,
  ay = ((Xl = ri().Iterator) == null ? void 0 : Xl.prototype) || {};
function Sc(e) {
  return ((e[Symbol.iterator] = oy), Object.assign(Object.create(ay), e));
}
function oy() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = ri();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: wm, extras: { getDebugName: Js }, $mobx: F });
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!$p) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function iy(e) {
  e();
}
function sy(e) {
  (e || (e = iy), Mm({ reactionScheduler: e }));
}
function cy(e) {
  return Fm(e);
}
var uy = 1e4,
  ly = 1e4,
  dy = (function () {
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
            (n === void 0 && (n = uy), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, ly));
        },
      }),
      e
    );
  })(),
  fy = typeof FinalizationRegistry < "u" ? FinalizationRegistry : dy,
  Ba = new fy(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  ns = { exports: {} },
  as = {};
var Zl;
function vy() {
  if (Zl) return as;
  Zl = 1;
  var e = Er();
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
    (as.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    as
  );
}
var Ql;
function py() {
  return (Ql || ((Ql = 1), (ns.exports = vy())), ns.exports);
}
var hy = py();
function ed(e) {
  e.reaction = new Tt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function gy(e, t) {
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
          Ba.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (ed(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (ed(a), Ba.register(r, a, a)),
    O.useDebugValue(a.reaction, cy),
    hy.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var os,
  is,
  Zp = typeof Symbol == "function" && Symbol.for,
  by =
    (is =
      (os = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || os === void 0
        ? void 0
        : os.configurable) !== null && is !== void 0
      ? is
      : !1,
  td = Zp
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  rd = Zp
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function _y(e, t) {
  var r;
  if (rd && e.$$typeof === rd)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (td && e.$$typeof === td && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return gy(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    by && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = m.forwardRef(i)),
    (i = m.memo(i)),
    yy(e, i),
    i
  );
}
var my = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function yy(e, t) {
  Object.keys(e).forEach(function (r) {
    my[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var ss;
sy(Yo.unstable_batchedUpdates);
ss = Ba.finalizeAllImmediately;
function wy(e, t) {
  if (nd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !nd(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function nd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ad = Symbol("patchMixins"),
  Qp = Symbol("patchedDefinition");
function ky(e, t) {
  var r = (e[ad] = e[ad] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function od(e, t) {
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
function id(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    od.call.apply(od, [this, e, t].concat(o));
  };
  return r;
}
function Oy(e, t, r) {
  var n = ky(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Qp])) {
    var o = e[t],
      i = eh(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function eh(e, t, r, n, a) {
  var o,
    i = id(a, n);
  return (
    (o = {}),
    (o[Qp] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = id(s, n);
      else {
        var u = eh(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var sd = Symbol("ObserverAdministration"),
  cd = Symbol("isMobXReactObserver");
function Xs(e) {
  var t;
  return (t = e[sd]) != null
    ? t
    : (e[sd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Zs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Sy(e) {
  var t = e.prototype;
  if (e[cd]) {
    var r = Zs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[cd] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = ud;
    else if (t.shouldComponentUpdate !== ud)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = Zs(e);
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
        value: Ey.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = Xs(this);
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
    Oy(t, "componentWillUnmount", function () {
      var i,
        c = Xs(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Zs(e) {
  return e.displayName || e.name || "<component>";
}
function Ey(e) {
  var t = e.bind(this),
    r = Xs(this);
  function n() {
    r.reaction || ((r.reaction = xy(r)), r.mounted || Ba.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = fm(!1, t);
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
function xy(e) {
  return new Tt(e.name + ".render()", function () {
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
function ud(e, t) {
  return this.state !== t ? !0 : !wy(this.props, e);
}
function hi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? Sy(e)
      : _y(e)
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
function Cy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ry = ["children"],
  ld = O.createContext({});
function th(e) {
  var t = e.children,
    r = Cy(e, Ry),
    n = O.useContext(ld),
    a = O.useRef(Qs({}, n, r)),
    o = a.current;
  return O.createElement(ld.Provider, { value: o }, t);
}
th.displayName = "MobXProvider";
O.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!ae) throw new Error("mobx-react requires mobx to be available");
var Py = Object.defineProperty,
  Ay = Object.getOwnPropertyDescriptor,
  xe = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? Ay(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && Py(t, r, a), a);
  };
const cs = "Loading ...";
class we {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = cs),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      $p(this));
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
    ((this.isLoading = !0), (this.message = t ?? cs));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = cs));
  }
}
xe([ae], we.prototype, "state", 2);
xe([ae], we.prototype, "isLoading", 2);
xe([ae], we.prototype, "message", 2);
xe([ae], we.prototype, "testData", 2);
xe([ae], we.prototype, "testDataOptimisticNumber", 2);
xe([ae], we.prototype, "testDataOptimisticDateId", 2);
xe([ae], we.prototype, "testDataOptimisticTimeStampId", 2);
xe([ae], we.prototype, "testNonVersioningData", 2);
xe([ae], we.prototype, "testNumberVersioningData", 2);
xe([ae], we.prototype, "testDateVersioningData", 2);
xe([ae], we.prototype, "testTimestampVersioningData", 2);
xe([st.bound], we.prototype, "saveState", 1);
xe([st.bound], we.prototype, "saveResponse", 1);
xe([st.bound], we.prototype, "saveUpdateResponse", 1);
xe([st.bound], we.prototype, "clearStates", 1);
xe([st], we.prototype, "loading", 1);
xe([st], we.prototype, "stopLoading", 1);
const Iy = new we();
class Dy {
  constructor() {
    this.stateStore = Iy;
  }
}
const rh = new Dy(),
  jy = m.createContext(rh),
  gi = () => m.useContext(jy);
function ge(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function je(e) {
  "@babel/helpers - typeof";
  return (
    (je =
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
    je(e)
  );
}
function Ty(e, t) {
  if (je(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (je(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nh(e) {
  var t = Ty(e, "string");
  return je(t) == "symbol" ? t : t + "";
}
function dd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, nh(n.key), n));
  }
}
function be(e, t, r) {
  return (
    t && dd(e.prototype, t),
    r && dd(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function My(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xe(e, t) {
  if (t && (je(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return My(e);
}
function X(e) {
  return (
    (X = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    X(e)
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
function Ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && La(e, t));
}
function C(e, t, r) {
  return (
    (t = nh(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ae() {}
function ah(e) {
  if (Array.isArray(e)) return e;
}
function Ny(e, t) {
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
function ec(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ec(e, t) {
  if (e) {
    if (typeof e == "string") return ec(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ec(e, t)
          : void 0
    );
  }
}
function oh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J(e, t) {
  return ah(e) || Ny(e, t) || Ec(e, t) || oh();
}
var ih = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Fy = function (t) {
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
  qo = function (t, r) {
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
  By = function (t, r, n) {
    return t ? { width: r } : {};
  },
  fd = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Ly = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = fd(i, n, a),
      s = fd(o.index, n, a),
      u = r.slice(),
      l = u.splice(c, 1),
      d = J(l, 1),
      p = d[0];
    return (u.splice(s, 0, p), u);
  };
function ee() {
  return (
    (ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ee.apply(null, arguments)
  );
}
function Uy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function te(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = Uy(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function vd(e, t) {
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
      ? vd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var qy = (function () {
  function e(t) {
    var r = this;
    (ge(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = us({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return be(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          je(r) === "object" && (this.payload = us(us({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function zy(e) {
  if (Array.isArray(e)) return ec(e);
}
function sh(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function $y() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(e) {
  return zy(e) || sh(e) || Ec(e) || $y();
}
function Vy(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function zo() {
  return (
    (zo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Vy(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    zo.apply(null, arguments)
  );
}
function Gy(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, ch() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function ch() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ch = function () {
    return !!e;
  })();
}
function Hy(e, t, r, n) {
  var a = zo(X(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Ky = (function (e) {
    function t(r) {
      var n;
      return (
        ge(this, t),
        (n = Gy(this, t, [r])),
        C(n, "_isUIAnalyticsEvent", !0),
        C(n, "clone", function () {
          if (n.hasFired) return null;
          var a = Ge(n.context),
            o = Ge(n.handlers),
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
      Ze(t, e),
      be(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : Hy(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(qy),
  Wy = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Jy = function () {
    return m.useContext(Wy);
  },
  $o = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function Yy(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Xy(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    a = m.useRef(r),
    o = n.current || !!(t && a.current.inputs && Yy(t, a.current.inputs)),
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
function Zy(e, t) {
  return Xy(function () {
    return e;
  }, t);
}
function uh() {
  var e = Jy(),
    t = Zy(
      function (r) {
        return new Ky({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function pd(e, t) {
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
function Qy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Zr(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = uh(),
    u = s.createAnalyticsEvent,
    l = $o(c),
    d = $o(t),
    p = m.useCallback(
      function (v) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = Qy({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
}
function hd(e, t) {
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
function e0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gd(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = uh(),
    s = c.createAnalyticsEvent,
    u = $o(i),
    l = $o(t),
    d = m.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = e0({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, s, u, l],
    );
  return d;
}
var Or = "ASC",
  Vo = "DESC",
  t0 = "small",
  Go = "large",
  lh = 0.22;
const r0 = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, r0) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function tr(e, t, r) {
  return e ?? "var(--c-, )";
}
var n0 = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  a0 = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = te(e, n0);
    return m.createElement(
      "table",
      ee(
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
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  o0 = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  i0 = function (t) {
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
  s0 = function (t) {
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
  c0 = function (t) {
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
  u0 = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function bd(e, t) {
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
function _d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function l0(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, dh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function dh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dh = function () {
    return !!e;
  })();
}
var md = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  d0 = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Or ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = md(s.cells, t, n),
        d = md(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (je(l) !== je(d)) {
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
function f0(e) {
  var t = (function (r) {
    function n() {
      var a;
      ge(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = l0(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      Ze(n, r),
      be(
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
                s = te(o, u0);
              return O.createElement(
                e,
                ee({ pageRows: this.state.pageRows, head: i }, s, { ref: c }),
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
              qo(u, s);
              var g, f;
              return (
                v ? ((g = c), (f = c)) : ((g = d0(s, c, u, l) || []), (f = ih(g, d, p))),
                _d(_d({}, i), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(O.Component);
  return O.forwardRef(function (r, n) {
    return O.createElement(t, ee({}, r, { forwardedRef: n }));
  });
}
var v0 = "--local-dynamic-table-width",
  fh = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, v0, "".concat(r, "%")) : void 0;
  },
  p0 = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  h0 = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = te(t, p0);
    return m.createElement(
      "td",
      ee(
        {
          style: fh({ width: r }),
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
  g0 = ["isHighlighted", "children", "style", "testId", "className"],
  b0 = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = te(e, g0);
    return m.createElement(
      "tr",
      ee(
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
  _0 = ["cells"],
  m0 = ["content", "testId"],
  y0 = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = te(r, _0);
    return O.createElement(
      b0,
      ee(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (u, l) {
        var d = u.content,
          p = u.testId,
          v = te(u, m0),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return O.createElement(
          h0,
          ee({ "data-testid": p || (a && "".concat(a, "--cell-").concat(l)) }, v, {
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
function w0(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, vh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function vh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vh = function () {
    return !!e;
  })();
}
var k0 = (function (e) {
    function t() {
      return (ge(this, t), w0(this, t, arguments));
    }
    return (
      Ze(t, e),
      be(t, [
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
                return O.createElement(y0, {
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
  O0 = f0(
    O.forwardRef(function (e, t) {
      return O.createElement(k0, ee({}, e, { forwardedRef: t }));
    }),
  );
function S0(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, ph() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var E0 = (function (e) {
  function t(r) {
    var n;
    return (ge(this, t), (n = S0(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ze(t, e),
    be(
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
const xc = m.createContext(null);
var ls = "#0052CC",
  x0 = "#0747A6",
  C0 = "#FFFFFF",
  R0 = "#EBECF0",
  Ho = "#42526E",
  P0 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function A0(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Ho, ")")
    : "var(--ds-icon-inverse, ".concat(C0, ")");
}
var uo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  I0 = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  Cc = O.memo(
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
        p = typeof l == "number" ? l : P0[l],
        v = "".concat(i, "ms"),
        g = A0(a),
        f = m.useContext(xc);
      return (
        I0(
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
            className: R([uo.wrapperStyles, uo.rotateStyles]),
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
              className: R([uo.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: R([uo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function yd(e, t) {
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
function wd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var kd = "--contents-opacity",
  D0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  j0 = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: wd(wd({}, C({}, kd, n)), {}, { "--_cnddr8": tr("var(".concat(kd, ")")) }),
      },
      r,
    );
  },
  T0 = function (t) {
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
function M0(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, hh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function hh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (hh = function () {
    return !!e;
  })();
}
var gh = (function (e) {
  function t() {
    return (ge(this, t), M0(this, t, arguments));
  }
  return (
    Ze(t, e),
    be(t, [
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
            D0,
            { testId: s },
            o ? O.createElement(j0, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              O.createElement(
                T0,
                { testId: s },
                O.createElement(Cc, {
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
C(gh, "defaultProps", {
  isLoading: !0,
  spinnerSize: Go,
  contentsOpacity: lh,
  loadingLabel: "Loading table",
});
var N0 = ["children", "testId"],
  F0 = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = te(e, N0);
    return m.createElement(
      "div",
      ee({}, a, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  B0 = function (t) {
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
  L0 = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function U0(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, bh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function bh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (bh = function () {
    return !!e;
  })();
}
var _h = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = U0(this, t, [].concat(a))),
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
          je(i.style) === "object" &&
          ((i.style.pointerEvents = s ? "none" : ""), (i.style.opacity = s ? u.toString() : ""));
      }),
      r
    );
  }
  return (
    Ze(t, e),
    be(t, [
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
              var x = S.getBoundingClientRect().top,
                A = (p - x) / 2;
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
            F0,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                B0,
                { testId: c },
                O.createElement(
                  L0,
                  { ref: this.spinnerRef },
                  O.createElement(Cc, {
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
C(_h, "defaultProps", {
  isLoading: !0,
  spinnerSize: Go,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(lh), ")"),
  loadingLabel: "Loading table",
});
function q0(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    a = J(n, 2),
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
var sa = {};
function Od(e, t, r, n, a, o, i) {
  try {
    var c = e[o](i),
      s = c.value;
  } catch (u) {
    return void r(u);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, a);
}
function he(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(s) {
        Od(o, n, a, i, c, "next", s);
      }
      function c(s) {
        Od(o, n, a, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var ds = { exports: {} },
  fs = { exports: {} },
  Sd;
function mh() {
  return (
    Sd ||
      ((Sd = 1),
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
  Ed;
function yh() {
  return (
    Ed ||
      ((Ed = 1),
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
      })(ps)),
    ps.exports
  );
}
var xd;
function wh() {
  return (
    xd ||
      ((xd = 1),
      (function (e) {
        var t = yh();
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
                (function (S, x, A) {
                  var D,
                    P,
                    M,
                    q = 0,
                    L = A || [],
                    $ = !1,
                    z = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (K, B) {
                        return ((D = K), (P = 0), (M = n), (z.n = B), u);
                      },
                    };
                  function V(G, K) {
                    for (P = G, M = K, a = 0; !$ && q && !B && a < L.length; a++) {
                      var B,
                        j = L[a],
                        _e = z.p,
                        ie = j[2];
                      G > 3
                        ? (B = ie === K) &&
                          ((M = j[(P = j[4]) ? 5 : ((P = 3), 3)]), (j[4] = j[5] = n))
                        : j[0] <= _e &&
                          ((B = G < 2 && _e < j[1])
                            ? ((P = 0), (z.v = K), (z.n = j[1]))
                            : _e < ie &&
                              (B = G < 3 || j[0] > K || K > ie) &&
                              ((j[4] = G), (j[5] = K), (z.n = ie), (P = 0)));
                    }
                    if (B || G > 1) return u;
                    throw (($ = !0), K);
                  }
                  return function (G, K, B) {
                    if (q > 1) throw TypeError("Generator is already running");
                    for ($ && K === 1 && V(K, B), P = K, M = B; (a = P < 2 ? n : M) || !$; ) {
                      D || (P ? (P < 3 ? (P > 1 && (z.n = -1), V(P, M)) : (z.n = M)) : (z.v = M));
                      try {
                        if (((q = 2), D)) {
                          if ((P || (G = "next"), (a = D[G]))) {
                            if (!(a = a.call(D, M)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((M = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = D.return) && a.call(D),
                              P < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + G + "' method",
                                )),
                                (P = 1)));
                          D = n;
                        } else if ((a = ($ = z.n < 0) ? M : S.call(x, z)) !== u) break;
                      } catch (j) {
                        ((D = n), (P = 1), (M = j));
                      } finally {
                        q = 1;
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
      })(vs)),
    vs.exports
  );
}
var hs = { exports: {} },
  gs = { exports: {} },
  bs = { exports: {} },
  Cd;
function kh() {
  return (
    Cd ||
      ((Cd = 1),
      (function (e) {
        var t = mh(),
          r = yh();
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
      })(bs)),
    bs.exports
  );
}
var Rd;
function Oh() {
  return (
    Rd ||
      ((Rd = 1),
      (function (e) {
        var t = wh(),
          r = kh();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(gs)),
    gs.exports
  );
}
var Pd;
function z0() {
  return (
    Pd ||
      ((Pd = 1),
      (function (e) {
        var t = Oh();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (u) {
            return u.done ? u.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(hs)),
    hs.exports
  );
}
var _s = { exports: {} },
  Ad;
function $0() {
  return (
    Ad ||
      ((Ad = 1),
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
  Id;
function V0() {
  return (
    Id ||
      ((Id = 1),
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
var Dd;
function G0() {
  return (
    Dd ||
      ((Dd = 1),
      (function (e) {
        var t = V0().default;
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
var jd;
function H0() {
  return (
    jd ||
      ((jd = 1),
      (function (e) {
        var t = mh(),
          r = wh(),
          n = z0(),
          a = Oh(),
          o = kh(),
          i = $0(),
          c = G0();
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
      })(ds)),
    ds.exports
  );
}
var ws, Td;
function K0() {
  if (Td) return ws;
  Td = 1;
  var e = H0()();
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
var W0 = K0();
const U = ir(W0);
var pr = {},
  Nr = {},
  lo = {},
  ca = {},
  Md;
function J0() {
  if (Md) return ca;
  ((Md = 1),
    Object.defineProperty(ca, "__esModule", { value: !0 }),
    (ca.V1InitializeContainer = void 0));
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
  return ((ca.V1InitializeContainer = t), ca);
}
var ua = {},
  Nd;
function Y0() {
  if (Nd) return ua;
  ((Nd = 1),
    Object.defineProperty(ua, "__esModule", { value: !0 }),
    (ua.V2InitializeContainer = void 0));
  const e = jt();
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
  return ((ua.V2InitializeContainer = t), ua);
}
var Fd;
function X0() {
  if (Fd) return lo;
  ((Fd = 1), Object.defineProperty(lo, "__esModule", { value: !0 }));
  const e = jt(),
    t = J0(),
    r = Y0();
  let n = class {
    constructor(o) {
      ((this._sdkKey = o),
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
      var c, s;
      const u = e.StableID.get(this._sdkKey);
      if (
        ((c = o.customIDs) === null || c === void 0 ? void 0 : c.stableID) !== u &&
        ((!((s = o.customIDs) === null || s === void 0) && s.stableID) || u)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const l = i.user,
          d = Object.assign(Object.assign({}, o), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (0, e._getFullUserHash)(d) !== (0, e._getFullUserHash)(l) &&
          this._warnings.add("PartialUserMatch");
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
var Fr = {},
  la = {},
  Bd;
function Z0() {
  if (Bd) return la;
  ((Bd = 1),
    Object.defineProperty(la, "__esModule", { value: !0 }),
    (la._resolveDeltasResponse = void 0));
  const e = jt(),
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
  la._resolveDeltasResponse = r;
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
  return la;
}
var Ld;
function Sh() {
  if (Ld) return Fr;
  Ld = 1;
  var e =
    (Fr && Fr.__awaiter) ||
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
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  const t = jt(),
    r = Z0();
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
  return ((Fr.default = n), Fr);
}
var da = {},
  Ud;
function Q0() {
  if (Ud) return da;
  ((Ud = 1),
    Object.defineProperty(da, "__esModule", { value: !0 }),
    (da._makeParamStoreGetter = void 0));
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
  return ((da._makeParamStoreGetter = u), da);
}
var hr = {},
  qd;
function ew() {
  if (qd) return hr;
  qd = 1;
  var e =
    (hr && hr.__awaiter) ||
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
  (Object.defineProperty(hr, "__esModule", { value: !0 }),
    (hr.StatsigEvaluationsDataAdapter = void 0));
  const t = jt(),
    r = Sh();
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
  return ((hr.StatsigEvaluationsDataAdapter = n), hr);
}
var zd;
function tw() {
  if (zd) return Nr;
  zd = 1;
  var e =
    (Nr && Nr.__awaiter) ||
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
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  const t = jt(),
    r = X0(),
    n = Sh(),
    a = Q0(),
    o = ew();
  let i = class tc extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof tc
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new tc(s ?? "", {}));
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
  };
  return ((Nr.default = i), Nr);
}
var $d;
function rw() {
  return (
    $d ||
      (($d = 1),
      (function (e) {
        var t =
            (pr && pr.__createBinding) ||
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
            (pr && pr.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = jt(),
          a = tw();
        ((e.StatsigClient = a.default), r(jt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(pr)),
    pr
  );
}
var ht = rw(),
  ks = { exports: {} },
  Vd;
function nw() {
  return (
    Vd ||
      ((Vd = 1),
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
      })(ks)),
    ks.exports
  );
}
var aw = nw();
const ow = ir(aw);
function Gd(e, t) {
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
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fo = "@all-features",
  iw = (function () {
    function e() {
      (ge(this, e), C(this, "eventToValue", new Map()), (this.emitter = new ow()));
    }
    return be(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            c = a(r, Qt(Qt({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, c);
          var s = function () {
            var l = a(r, Qt(Qt({}, o), {}, { fireGateExposure: !1 })),
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
            l = i(r, n, a, Qt(Qt({}, c), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var v = i(r, n, a, Qt(Qt({}, c), {}, { fireExperimentExposure: !1 })),
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
  sw = "fedramp-moderate";
function cw() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === sw;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Rc = (function (e) {
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
  Sa = (function (e) {
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
  uw = [
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
function Hd(e, t) {
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
function rc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vo = function (t) {
    return rc({ perimeter: cw() ? Ua.FEDRAMP_MODERATE : Ua.COMMERCIAL }, t);
  },
  fa = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (p, v) {
      var g = J(p, 1),
        f = g[0],
        h = J(v, 1),
        b = h[0];
      return f.localeCompare(b);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var c = J(n[i], 2),
        s = c[1],
        u = J(a[i], 2),
        l = u[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  Kd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  lw = function (t) {
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
    var p = te(t, uw);
    return rc(
      rc({}, p),
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
  dw = Object.entries(Rc).map(function (e) {
    var t = J(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Eh = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = dw.find(function (i) {
            var c = J(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Rc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  nc = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Wd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (ge(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = c));
    }
    return be(
      e,
      [
        {
          key: "get",
          value: function (r, n, a) {
            var o,
              i = this.getValue(r, n);
            if (i == null) return n;
            var c = Array.isArray(n) ? "array" : je(n),
              s = Array.isArray(i) ? "array" : je(i);
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
                Eh(r.details),
                nc(
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
  Jd = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (ge(this, e),
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
    return be(
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
              : n == null || (je(i) === je(n) && Array.isArray(n) === Array.isArray(i))
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
                Eh(r.details),
                function (l, d) {
                  return r.get(d);
                },
                nc(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                nc(
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
  Kr = "0.0.0-development";
function fw(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function xh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (xh = function () {
    return !!e;
  })();
}
function vw(e, t, r) {
  if (xh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && La(a, r.prototype), a);
}
function ac(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (ac = function (n) {
      if (n === null || !fw(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return vw(n, arguments, X(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        La(a, n)
      );
    }),
    ac(e)
  );
}
function pw(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Ch() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Ch() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ch = function () {
    return !!e;
  })();
}
var Yd = (function (e) {
  function t(r) {
    return (ge(this, t), pw(this, t, [r]));
  }
  return (Ze(t, e), be(t));
})(ac(Error));
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
function hw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var gw = 5e3,
  bw = "https://api.atlassian.com/flags",
  _w = "https://api.stg.atlassian.com/flags",
  mw = "https://api.dev.atlassian.com/flags",
  yw = "https://api.stg.atlassian-us-gov-mod.com/flags",
  ww = "https://api.atlassian-us-gov-mod.com/flags",
  kw = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Ow = "oasis-stg.com/flags",
  Sw = "atlassian-isolated.net/flags",
  Ew = "/gateway/api/flags",
  Os = (function () {
    function e() {
      ge(this, e);
    }
    return be(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = he(
            U.mark(function n(a) {
              var o, i;
              return U.wrap(
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
          var t = he(
            U.mark(function n(a, o, i) {
              var c;
              return U.wrap(
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
          var t = he(
            U.mark(function n(a) {
              var o;
              return U.wrap(function (c) {
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
                        new Yd(
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
                      throw new Yd("Unexpected 204 response");
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
          var t = he(
            U.mark(function n(a) {
              var o;
              return U.wrap(function (c) {
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
          if (n) return Ew;
          if (a === Ua.FEDRAMP_MODERATE)
            switch (r) {
              case Sa.Production:
                return ww;
              case Sa.Staging:
                return yw;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Ua.COMMERCIAL)
            switch (r) {
              case Sa.Development:
                return mw;
              case Sa.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : _w;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : bw;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = he(
            U.mark(function n(a, o, i, c) {
              var s, u, l, d, p;
              return U.wrap(
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
                          (u = i.fetchTimeoutMs || gw),
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
                            hw(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Kr,
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
          if (n === void 0) return r ? kw.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Ow);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(Sw) : null;
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
function va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function xw(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Rh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function Cw(e, t, r, n) {
  var a = zo(X(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Rw = (function (e) {
  function t() {
    var r;
    return (
      ge(this, t),
      (r = xw(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ze(t, e),
    be(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: ht.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = he(
            U.mark(function a(o, i) {
              return U.wrap(function (s) {
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
          var r = he(
            U.mark(function a(o, i, c) {
              return U.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            va(
                              va({}, this.bootstrapResult),
                              {},
                              { fullUserHash: ht._getFullUserHash(i) },
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
            va(va({}, this.bootstrapResult), {}, { fullUserHash: ht._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = he(
            U.mark(function a(o, i, c) {
              return U.wrap(function (u) {
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
          var a = ht._getStorageKey(this._getSdkKey(), n);
          return "".concat(ht.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          Cw(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = va({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ht.DataAdapterCore);
function Qd(e, t) {
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
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Pw(e, t) {
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
function Aw(e, t) {
  if (e) {
    if (typeof e == "string") return ef(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ef(e, t)
          : void 0
    );
  }
}
function ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ss = "LocalOverride:Recognized",
  Iw = "STATSIG_OVERRIDES",
  tf = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Br = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  tt = function (t, r) {
    return r + ":" + t;
  },
  Dw = (function () {
    function e(t) {
      (ge(this, e),
        (this._overrides = Br()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return be(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Br();
          } catch {
            return Br();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Br(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
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
                p = J(l[u], 2),
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
                _ = J(h[f], 2),
                y = _[0],
                k = _[1];
              r.configs[y] = k;
            }
            for (
              var w = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              w < S.length;
              w++
            ) {
              var x,
                A = J(S[w], 2),
                D = A[0],
                P = A[1];
              r.layers[D] = P;
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
            this.parseStoredOverrides(tf),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(tf);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = Pw(i),
              s;
            try {
              for (c.s(); !(s = c.n()).done; ) {
                var u = s.value,
                  l = et._DJB2(u);
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
          var n = Be(Be({}, Br()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = J(o[a], 2), c = i[0], s = i[1], u = 0, l = Object.entries(s);
              u < l.length;
              u++
            ) {
              var d = J(l[u], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(tt(et._DJB2(p), c), v);
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
            this._djb2Map.set(tt(et._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(tt(et._DJB2(r), "gates")),
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
                : this._djb2Map.get(tt(r.name, "gates"));
          return o == null
            ? null
            : Be(Be({}, r), {}, { value: o, details: Be(Be({}, r.details), {}, { reason: Ss }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(tt(et._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(tt(et._DJB2(r), "configs")),
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
            this._djb2Map.set(tt(et._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(tt(et._DJB2(r), "configs")),
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
            this._djb2Map.set(tt(et._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(tt(et._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Br();
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
                : this._djb2Map.get(tt(r.name, "layers"));
          return o == null
            ? null
            : Be(
                Be({}, r),
                {},
                {
                  __value: o,
                  get: et._makeTypedGet(r.name, o),
                  details: Be(Be({}, r.details), {}, { reason: Ss }),
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
                : this._djb2Map.get(tt(r.name, "configs"));
          return o == null
            ? null
            : Be(
                Be({}, r),
                {},
                {
                  value: o,
                  get: et._makeTypedGet(r.name, o),
                  details: Be(Be({}, r.details), {}, { reason: Ss }),
                },
              );
        },
      },
    ]);
  })(),
  jw = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function rf(e, t) {
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
function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var nf = "client-default-key",
  Tw = "https://xp.atlassian.com/v1/rgstr",
  Mw = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Iw : n,
        o = r.overrideAdapter;
      (ge(this, e),
        C(this, "initPromise", null),
        C(this, "initCompleted", !1),
        C(this, "initWithDefaults", !1),
        C(this, "hasCheckGateErrorOccurred", !1),
        C(this, "hasGetExperimentErrorOccurred", !1),
        C(this, "hasGetExperimentValueErrorOccurred", !1),
        C(this, "hasGetLayerErrorOccurred", !1),
        C(this, "hasGetLayerValueErrorOccurred", !1),
        C(this, "subscriptions", new iw()),
        C(this, "dataAdapter", new Rw()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new Dw(a)));
    }
    return be(e, [
      {
        key: "initialize",
        value: (function () {
          var t = he(
            U.mark(function n(a, o, i) {
              var c = this,
                s,
                u;
              return U.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = vo(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          fa(s, this.initOptions) ||
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
          var t = he(
            U.mark(function n(a, o, i, c) {
              var s = this,
                u,
                l;
              return U.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((u = vo(a)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          fa(u, this.initOptions) ||
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
                          this.provider.setClientVersion(Kr),
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
                var l = er(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: Kr,
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
                c.initOptions.environment !== Sa.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = he(
            U.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l,
                d = arguments;
              return U.wrap(
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
                          fa(u, this.initOptions) ||
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
          var t = he(
            U.mark(function n(a, o, i) {
              var c, s;
              return U.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = vo(a)),
                          (s = function () {
                            return Os.fetchExperimentValues(c, o, i).then(function (p) {
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
          var t = he(
            U.mark(function n(a, o) {
              var i = this;
              return U.wrap(
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
          var t = he(
            U.mark(function n(a, o) {
              var i,
                c,
                s = arguments;
              return U.wrap(
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
          var t = he(
            U.mark(function n() {
              return U.wrap(
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
            return Wd.fromExperiment(
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
              new Wd(r, {}, "", { time: Date.now(), reason: Rc.Error })
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
          return fa(this.currentIdentifiers, r) && fa(this.currentAttributes, n);
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
          var t = he(
            U.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g;
              return U.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = er({}, a)),
                          (h.prev = 1),
                          (l = Os.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = Os.fetchExperimentValues(a, o, i)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = J(p, 2)),
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
          var t = he(
            U.mark(function n(a, o, i, c) {
              var s, u, l, d, p, v, g, f;
              return U.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (s = er(er({}, a), {}, { disableCurrentPageLogging: !0 })),
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
                          (g = J(v, 2)),
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
          var t = he(
            U.mark(function n(a, o, i) {
              var c,
                s,
                u,
                l,
                d,
                p,
                v,
                g = arguments;
              return U.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = g.length > 3 && g[3] !== void 0 ? g[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = lw(a)),
                          u.sdkKey || (u.sdkKey = nf),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = er(
                              er({}, u.networkConfig),
                              {},
                              { logEventUrl: Tw },
                            )),
                          u.perimeter === Ua.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = te(u, jw)),
                          (this.user = Kd(o, i)),
                          (v = er(
                            er({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: ht.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? ht.StableID.setOverride(o.stableId, l)
                            : (v.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new ht.StatsigClient(l, this.user, v)),
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
                          (this.statsigClient = new ht.StatsigClient(nf, this.user, v)),
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
          var t = he(
            U.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l;
              return U.wrap(
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
                            he(
                              U.mark(function v() {
                                return U.wrap(function (f) {
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
          var t = he(
            U.mark(function n(a, o, i) {
              var c, s, u, l, d, p, v, g, f;
              return U.wrap(
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
                        ((u = b.sent), (l = Kd(o, u.customAttributesFromFetch)), (b.next = 13));
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
          return Kr;
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
            return Jd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Jd.fromLayer(ht._makeLayer(r, { reason: "Error" }, null))
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
  T,
  H = (function () {
    function e() {
      ge(this, e);
    }
    return be(e, null, [
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
T = H;
C(H, "client", new Mw());
C(H, "hasCheckGateErrorOccurred", !1);
C(H, "hasGetExperimentValueErrorOccurred", !1);
C(H, "checkGate", function (e, t) {
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
    T.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (T.hasCheckGateErrorOccurred = !0));
  }
  return T.client.checkGate(e, t);
});
C(H, "getExperimentValue", function (e, t, r, n) {
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
      T.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: o,
        }),
        (T.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return T.client.getExperimentValue(e, t, r, n);
});
C(H, "initializeCalled", T.client.initializeCalled.bind(T.client));
C(H, "initializeCompleted", T.client.initializeCompleted.bind(T.client));
C(H, "waitUntilInitializeCompleted", T.client.waitUntilInitializeCompleted.bind(T.client));
C(H, "initialize", T.client.initialize.bind(T.client));
C(H, "initializeWithProvider", T.client.initializeWithProvider.bind(T.client));
C(H, "initializeFromValues", T.client.initializeFromValues.bind(T.client));
C(H, "manuallyLogGateExposure", T.client.manuallyLogGateExposure.bind(T.client));
C(H, "getExperiment", T.client.getExperiment.bind(T.client));
C(H, "manuallyLogExperimentExposure", T.client.manuallyLogExperimentExposure.bind(T.client));
C(H, "manuallyLogLayerExposure", T.client.manuallyLogLayerExposure.bind(T.client));
C(H, "shutdownStatsig", T.client.shutdownStatsig.bind(T.client));
C(H, "overrideGate", T.client.overrideGate.bind(T.client));
C(H, "clearGateOverride", T.client.clearGateOverride.bind(T.client));
C(H, "overrideConfig", T.client.overrideConfig.bind(T.client));
C(H, "clearConfigOverride", T.client.clearConfigOverride.bind(T.client));
C(H, "setOverrides", T.client.setOverrides.bind(T.client));
C(H, "getOverrides", T.client.getOverrides.bind(T.client));
C(H, "clearAllOverrides", T.client.clearAllOverrides.bind(T.client));
C(H, "isCurrentUser", T.client.isCurrentUser.bind(T.client));
C(H, "onGateUpdated", T.client.onGateUpdated.bind(T.client));
C(H, "onExperimentValueUpdated", T.client.onExperimentValueUpdated.bind(T.client));
C(H, "onAnyUpdated", T.client.onAnyUpdated.bind(T.client));
C(H, "updateUser", T.client.updateUser.bind(T.client));
C(H, "updateUserWithProvider", T.client.updateUserWithProvider.bind(T.client));
C(H, "updateUserWithValues", T.client.updateUserWithValues.bind(T.client));
C(H, "getPackageVersion", T.client.getPackageVersion.bind(T.client));
C(H, "getLayer", T.client.getLayer.bind(T.client));
C(H, "getLayerValue", T.client.getLayerValue.bind(T.client));
var oc = H;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = H;
  else {
    var po, Es;
    oc = window.__FEATUREGATES_JS__;
    var af =
      ((po = oc) === null || po === void 0 || (Es = po.getPackageVersion) === null || Es === void 0
        ? void 0
        : Es.call(po)) || "4.10.0 or earlier";
    if (af !== Kr) {
      var Nw = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(af, " when module version ")
        .concat(Kr, " was loading.");
      console.warn(Nw);
    }
  }
var Lr,
  Ur,
  Fw =
    (globalThis == null ||
    (Lr = globalThis.process) === null ||
    Lr === void 0 ||
    (Lr = Lr.env) === null ||
    Lr === void 0
      ? void 0
      : Lr.JEST_WORKER_ID) !== void 0,
  Bw =
    !Fw &&
    (globalThis == null ||
    (Ur = globalThis.process) === null ||
    Ur === void 0 ||
    (Ur = Ur.env) === null ||
    Ur === void 0
      ? void 0
      : Ur.NODE_ENV) !== "production",
  Lw = function () {
    var t;
    Bw && (t = console).debug.apply(t, arguments);
  },
  Pc = {},
  Uw = "@atlaskit/platform-feature-flags",
  Pa = "__PLATFORM_FEATURE_FLAGS__",
  Ph = typeof process < "u" && typeof Pc < "u",
  qw = Ph ? Pc.ENABLE_PLATFORM_FF === "true" : !1,
  zw = Ph ? Pc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  $w = qw || zw,
  Vw = { booleanResolver: void 0 },
  Aa = typeof window < "u" ? window : globalThis;
Aa[Pa] = Aa[Pa] || Vw;
function Gw(e) {
  if ($w)
    return (
      Lw(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Uw,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Aa[Pa]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Aa[Pa]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return oc.checkGate(e);
    var a = (n = Aa[Pa]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function at(e) {
  return Gw(e);
}
var Hw = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Kw = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Ww = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  of = m.memo(function (t) {
    var r = t,
      n = r.color,
      a = n === void 0 ? "currentColor" : n,
      o = r.testId,
      i = r.label,
      c = r.LEGACY_primaryColor,
      s = r.LEGACY_secondaryColor,
      u = r.LEGACY_size,
      l = r.LEGACY_fallbackIcon,
      d = r.dangerouslySetGlyph,
      p = r.shouldScale,
      v = r.LEGACY_margin,
      g = r.spacing,
      f = g === void 0 ? "none" : g,
      h = r.name,
      b = d ? { __html: d } : void 0;
    if (l && !at("platform-visual-refresh-icons"))
      return m.createElement(l, {
        primaryColor: c ?? a,
        secondaryColor: s,
        size: u,
        label: i,
        testId: o,
        UNSAFE_margin: v,
      });
    var _ = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") _ = t.size === "small" || t.size === "medium" ? t.size : _;
      else if (h) {
        var y = t.size(h);
        _ = y === "small" || y === "medium" ? y : _;
      }
    }
    var k = 16,
      w = Ww[_][f],
      S = k + 2 * w;
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
          p && "_1bsb1kw7 _4t3i1kw7",
          _ === "small" && "_vwz4utpp",
        ]),
      },
      m.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - w, " ")
          .concat(0 - w, " ")
          .concat(S, " ")
          .concat(S),
        role: "presentation",
        dangerouslySetInnerHTML: b,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : _ === "small" ? Kw[f] : Hw[f],
        ]),
      }),
    );
  });
const Jw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: of, default: of }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  bi = yv(Jw);
var sf;
function Yw() {
  if (sf) return sa;
  ((sf = 1), Object.defineProperty(sa, "__esModule", { value: !0 }), (sa.default = void 0));
  var e = r(Er()),
    t = r(bi);
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
  return ((n.displayName = "ChevronLeftIcon"), (sa.default = n), sa);
}
var Xw = Yw();
const Zw = ir(Xw);
var pa = {},
  cf;
function Qw() {
  if (cf) return pa;
  ((cf = 1), Object.defineProperty(pa, "__esModule", { value: !0 }), (pa.default = void 0));
  var e = r(Er()),
    t = r(bi);
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
  return ((n.displayName = "ChevronRightIcon"), (pa.default = n), pa);
}
var e1 = Qw();
const t1 = ir(e1);
var Ac = m.createContext("elevation.surface"),
  r1 = function () {
    return m.useContext(Ac);
  };
Ac.displayName = "SurfaceProvider";
var n1 = [
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
  a1 = ["className"],
  o1 = {
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
  Ah = {
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
  i1 = {
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
  s1 = {
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
  c1 = {
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
  u1 = {
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
  _i = m.forwardRef(function (e, t) {
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
      S = te(e, n1);
    S.className;
    var x = te(S, a1),
      A = m.createElement(
        n,
        ee(
          {
            style: y,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              o && o1[o],
              o && l1(o) && Ah[o],
              l && i1[l],
              p && s1[p],
              h && c1[h],
              _ && u1[_],
              w,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? m.createElement(Ac.Provider, { value: o }, A) : A;
  });
function l1(e) {
  return e in Ah;
}
const xs = () =>
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
  Ih = (...e) => R(e);
function d1() {
  return {
    css() {
      throw xs();
    },
    cssMap() {
      throw xs();
    },
    cx: Ih,
    XCSSProp() {
      throw xs();
    },
  };
}
var f1 = d1(),
  Dh = f1.cx,
  v1 = [
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
  uf = {
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
  lf = {
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
  p1 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  h1 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  g1 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  b1 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  _1 = { root: "_1e0c1txw _vchhusvi" },
  Ko = m.memo(
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
        f = te(e, v1);
      return m.createElement(
        n,
        ee({}, f, {
          role: a,
          className: R([
            _1.root,
            c && lf[c],
            s && lf[s],
            c && uf[c],
            u && uf[u],
            o && b1[o],
            p && h1[p],
            i && p1[i],
            v && g1[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Ko.displayName = "Flex";
var m1 = [
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
  y1 = function (t) {
    var r = t.children;
    return m.createElement("span", { className: R([ic.separator]) }, r);
  },
  So = m.memo(
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
        b = te(e, m1),
        _ = typeof p == "string" ? m.createElement(y1, null, p) : p,
        y = _
          ? m.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return m.createElement(m.Fragment, { key: w }, p && w > 0 ? _ : null, k);
              })
          : h;
      return m.createElement(
        Ko,
        ee({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: Dh(u === "hug" && ic.hug, u === "fill" && ic.fill, v),
          testId: g,
          ref: t,
        }),
        y,
      );
    }),
  );
So.displayName = "Inline";
var w1 = "Invariant failed";
function k1(e, t) {
  if (!e) throw new Error(w1);
}
var jh = m.createContext(!1),
  O1 = function () {
    return m.useContext(jh);
  },
  S1 = jh.Provider,
  E1 = ["span", "p", "strong", "em"],
  x1 = function (t, r) {
    var n = r1();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return df.hasOwnProperty(n) ? df[n] : "color.text";
    }
  },
  qr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  C1 = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  R1 = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  P1 = {
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
  df = {
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
  Th = m.forwardRef(function (e, t) {
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
    k1(E1.includes(n));
    var v = O1(),
      g = x1(a, v);
    !s && !v && (s = "medium");
    var f = m.createElement(
      n,
      {
        id: c,
        className: R([
          qr.root,
          s && C1[s],
          g && P1[g],
          l && qr.truncation,
          l === 1 && qr.breakAll,
          o && qr["textAlign.".concat(o)],
          u && R1[u],
          n === "em" && qr["as.em"],
          n === "strong" && qr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      p,
    );
    return v ? f : m.createElement(S1, { value: !0 }, f);
  });
function A1() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var I1 = ["as", "children", "isInset", "testId", "style", "xcss"],
  D1 = ["className"],
  Ic = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      u = te(e, I1);
    u.className;
    var l = te(u, D1);
    return m.createElement(
      n,
      ee({}, l, {
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
  j1 = [
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
  T1 = ["className"],
  ff = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Mh = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Ae : i,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = te(e, j1),
      h = m.useContext(xc),
      b = m.useCallback(
        function (k, w) {
          (h && h.tracePress(s, k.timeStamp), c(k, w));
        },
        [c, h, s],
      ),
      _ = Zr({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = te(f, T1);
    return m.createElement(
      Ic,
      ee({ as: "button", tabIndex: g ?? (A1() && !n ? 0 : void 0), style: d }, y, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: Ih(ff.root, n && ff.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  Cs = {},
  ha = {},
  vf;
function Nh() {
  if (vf) return ha;
  ((vf = 1), Object.defineProperty(ha, "__esModule", { value: !0 }), (ha.bind = void 0));
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
  return ((ha.bind = e), ha);
}
var gr = {},
  pf;
function M1() {
  if (pf) return gr;
  pf = 1;
  var e =
    (gr && gr.__assign) ||
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
  (Object.defineProperty(gr, "__esModule", { value: !0 }), (gr.bindAll = void 0));
  var t = Nh();
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
  return ((gr.bindAll = a), gr);
}
var hf;
function N1() {
  return (
    hf ||
      ((hf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Nh();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = M1();
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
var mi = N1(),
  F1 = {
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
    "utility.UNSAFE.textTransformUppercase": "--ds-UNSAFE-textTransformUppercase",
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
  B1 = "ds",
  L1 = "--".concat(B1, "-token-not-found");
function zt(e, t) {
  var r = F1[e];
  r || (r = L1);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var U1 = function () {
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
  Fh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: U1() });
  },
  q1 = Fh(),
  z1 = m.createContext(Fh()),
  $1 = function (e) {
    return e.value++;
  },
  V1 = function (e) {
    return e ? e.prefix : "";
  },
  G1 = function (e) {
    var t = e || q1,
      r = V1(t),
      n = $1(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  Bh = function () {
    var e = m.useContext(z1),
      t = m.useState(function () {
        return G1(e);
      })[0];
    return t;
  },
  H1 = function () {
    var e = Bh().uid;
    return e;
  },
  K1 = function () {
    var e = Bh().gen;
    return e;
  },
  Rs,
  Eo = (Rs = O.useId) !== null && Rs !== void 0 ? Rs : void 0;
function Lh() {
  return Eo && at("platform-dst-react-18-use-id")
    ? at("platform-dst-react-18-use-id-selector-safe")
      ? Eo().replace(/[:«»]/g, "_")
      : Eo()
    : "uid".concat(H1());
}
function W1() {
  if (Eo && at("platform-dst-react-18-use-id")) {
    var e = Lh();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return K1();
}
var yi = function (t) {
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
yi.displayName = "VisuallyHidden";
var J1 = {
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
  Y1 = ["children"];
function X1(e) {
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
      s = te(i, Y1),
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
var Z1 = X1(function () {
    return { mode: "light" };
  }),
  Q1 = Z1.useTheme;
function ek(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function tk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var rk = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(tk(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = ek(a);
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
  Pe = "-ms-",
  Wo = "-moz-",
  Z = "-webkit-",
  Uh = "comm",
  Dc = "rule",
  jc = "decl",
  nk = "@import",
  qh = "@keyframes",
  ak = "@layer",
  ok = Math.abs,
  wi = String.fromCharCode,
  ik = Object.assign;
function sk(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^ Ee(e, 3)
    : 0;
}
function zh(e) {
  return e.trim();
}
function ck(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function sc(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function qa(e, t, r) {
  return e.slice(t, r);
}
function St(e) {
  return e.length;
}
function Tc(e) {
  return e.length;
}
function ho(e, t) {
  return (t.push(e), e);
}
function uk(e, t) {
  return e.map(t).join("");
}
var ki = 1,
  Qr = 1,
  $h = 0,
  ze = 0,
  me = 0,
  cn = "";
function Oi(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: ki,
    column: Qr,
    length: i,
    return: "",
  };
}
function ga(e, t) {
  return ik(Oi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function lk() {
  return me;
}
function dk() {
  return ((me = ze > 0 ? Ee(cn, --ze) : 0), Qr--, me === 10 && ((Qr = 1), ki--), me);
}
function We() {
  return ((me = ze < $h ? Ee(cn, ze++) : 0), Qr++, me === 10 && ((Qr = 1), ki++), me);
}
function It() {
  return Ee(cn, ze);
}
function xo() {
  return ze;
}
function Qa(e, t) {
  return qa(cn, e, t);
}
function za(e) {
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
function Vh(e) {
  return ((ki = Qr = 1), ($h = St((cn = e))), (ze = 0), []);
}
function Gh(e) {
  return ((cn = ""), e);
}
function Co(e) {
  return zh(Qa(ze - 1, cc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fk(e) {
  for (; (me = It()) && me < 33; ) We();
  return za(e) > 2 || za(me) > 3 ? "" : " ";
}
function vk(e, t) {
  for (; --t && We() && !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97)); );
  return Qa(e, xo() + (t < 6 && It() == 32 && We() == 32));
}
function cc(e) {
  for (; We(); )
    switch (me) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cc(me);
        break;
      case 40:
        e === 41 && cc(e);
        break;
      case 92:
        We();
        break;
    }
  return ze;
}
function pk(e, t) {
  for (; We() && e + me !== 57; ) if (e + me === 84 && It() === 47) break;
  return "/*" + Qa(t, ze - 1) + "*" + wi(e === 47 ? e : We());
}
function hk(e) {
  for (; !za(It()); ) We();
  return Qa(e, ze);
}
function gk(e) {
  return Gh(Ro("", null, null, null, [""], (e = Vh(e)), 0, [0], e));
}
function Ro(e, t, r, n, a, o, i, c, s) {
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
      x = y;
    h;
  )
    switch (((g = _), (_ = We()))) {
      case 40:
        if (g != 108 && Ee(x, d - 1) == 58) {
          sc((x += Q(Co(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Co(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += fk(g);
        break;
      case 92:
        x += vk(xo() - 1, 7);
        continue;
      case 47:
        switch (It()) {
          case 42:
          case 47:
            ho(bk(pk(We(), xo()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        c[u++] = St(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (b == -1 && (x = Q(x, /\f/g, "")),
              v > 0 &&
                St(x) - d &&
                ho(v > 32 ? bf(x + ";", n, r, d - 1) : bf(Q(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((ho((S = gf(x, t, r, u, l, a, c, y, (k = []), (w = []), d)), o), _ === 123))
              if (l === 0) Ro(x, t, S, S, k, o, d, c, w);
              else
                switch (p === 99 && Ee(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ro(
                      e,
                      S,
                      S,
                      n && ho(gf(e, S, S, 0, 0, a, c, y, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      c,
                      n ? k : w,
                    );
                    break;
                  default:
                    Ro(x, S, S, S, [""], w, 0, c, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (y = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + St(x)), (v = g));
      default:
        if (f < 1) {
          if (_ == 123) --f;
          else if (_ == 125 && f++ == 0 && dk() == 125) continue;
        }
        switch (((x += wi(_)), _ * f)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((c[u++] = (St(x) - 1) * b), (b = 1));
            break;
          case 64:
            (It() === 45 && (x += Co(We())), (p = It()), (l = d = St((y = x += hk(xo())))), _++);
            break;
          case 45:
            g === 45 && St(x) == 2 && (f = 0);
        }
    }
  return o;
}
function gf(e, t, r, n, a, o, i, c, s, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = Tc(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, _ = qa(e, d + 1, (d = ok((f = i[g])))), y = e; b < v; ++b)
      (y = zh(f > 0 ? p[b] + " " + _ : Q(_, /&\f/g, p[b]))) && (s[h++] = y);
  return Oi(e, t, r, a === 0 ? Dc : c, s, u, l);
}
function bk(e, t, r) {
  return Oi(e, t, r, Uh, wi(lk()), qa(e, 2, -2), 0);
}
function bf(e, t, r, n) {
  return Oi(e, t, r, jc, qa(e, 0, n), qa(e, n + 1, -1), n);
}
function Wr(e, t) {
  for (var r = "", n = Tc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function _k(e, t, r, n) {
  switch (e.type) {
    case ak:
      if (e.children.length) break;
    case nk:
    case jc:
      return (e.return = e.return || e.value);
    case Uh:
      return "";
    case qh:
      return (e.return = e.value + "{" + Wr(e.children, n) + "}");
    case Dc:
      e.value = e.props.join(",");
  }
  return St((r = Wr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function mk(e) {
  var t = Tc(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function yk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function wk(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var kk = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = It()), a === 38 && o === 12 && (r[n] = 1), !za(o); ) We();
    return Qa(t, ze);
  },
  Ok = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (za(a)) {
        case 0:
          (a === 38 && It() === 12 && (r[n] = 1), (t[n] += kk(ze - 1, r, n)));
          break;
        case 2:
          t[n] += Co(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = It() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += wi(a);
      }
    while ((a = We()));
    return t;
  },
  Sk = function (t, r) {
    return Gh(Ok(Vh(t), r));
  },
  _f = new WeakMap(),
  Ek = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !_f.get(n)) && !a) {
        _f.set(t, !0);
        for (var o = [], i = Sk(r, o), c = n.props, s = 0, u = 0; s < i.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = o[s] ? i[s].replace(/&\f/g, c[l]) : c[l] + " " + i[s];
      }
    }
  },
  xk = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Hh(e, t) {
  switch (sk(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
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
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Wo + e + Pe + e + e;
    case 6828:
    case 4268:
      return Z + e + Pe + e + e;
    case 6165:
      return Z + e + Pe + "flex-" + e + e;
    case 5187:
      return Z + e + Q(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + Pe + "flex-$1$2") + e;
    case 5443:
      return Z + e + Pe + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + Pe + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + Pe + Q(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + Pe + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + Q(e, "-grow", "") + Z + e + Pe + Q(e, "grow", "positive") + e;
    case 4554:
      return Z + Q(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        Q(
          Q(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + Pe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
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
      if (St(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + Wo + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~sc(e, "stretch") ? Hh(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, St(e) - 3 - (~sc(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + Z) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                (Ee(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Z +
                "$2$3$1" +
                Pe +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return Z + e + Pe + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + Pe + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + Pe + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + Pe + e + e;
  }
  return e;
}
var Ck = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case jc:
          t.return = Hh(t.value, t.length);
          break;
        case qh:
          return Wr([ga(t, { value: Q(t.value, "@", "@" + Z) })], a);
        case Dc:
          if (t.length)
            return uk(t.props, function (o) {
              switch (ck(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Wr([ga(t, { props: [Q(o, /:(read-\w+)/, ":" + Wo + "$1")] })], a);
                case "::placeholder":
                  return Wr(
                    [
                      ga(t, { props: [Q(o, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      ga(t, { props: [Q(o, /:(plac\w+)/, ":" + Wo + "$1")] }),
                      ga(t, { props: [Q(o, /:(plac\w+)/, Pe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  Rk = [Ck],
  Pk = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Rk,
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
      u = [Ek, xk];
    {
      var l,
        d = [
          _k,
          yk(function (f) {
            l.insert(f);
          }),
        ],
        p = mk(u.concat(a, d)),
        v = function (h) {
          return Wr(gk(h), p);
        };
      s = function (h, b, _, y) {
        ((l = _), v(h ? h + "{" + b.styles + "}" : b.styles), y && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new rk({
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
  Ps = { exports: {} },
  ne = {};
var mf;
function Ak() {
  if (mf) return ne;
  mf = 1;
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
    (ne.AsyncMode = s),
    (ne.ConcurrentMode = u),
    (ne.ContextConsumer = c),
    (ne.ContextProvider = i),
    (ne.Element = t),
    (ne.ForwardRef = l),
    (ne.Fragment = n),
    (ne.Lazy = g),
    (ne.Memo = v),
    (ne.Portal = r),
    (ne.Profiler = o),
    (ne.StrictMode = a),
    (ne.Suspense = d),
    (ne.isAsyncMode = function (w) {
      return k(w) || y(w) === s;
    }),
    (ne.isConcurrentMode = k),
    (ne.isContextConsumer = function (w) {
      return y(w) === c;
    }),
    (ne.isContextProvider = function (w) {
      return y(w) === i;
    }),
    (ne.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (ne.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (ne.isFragment = function (w) {
      return y(w) === n;
    }),
    (ne.isLazy = function (w) {
      return y(w) === g;
    }),
    (ne.isMemo = function (w) {
      return y(w) === v;
    }),
    (ne.isPortal = function (w) {
      return y(w) === r;
    }),
    (ne.isProfiler = function (w) {
      return y(w) === o;
    }),
    (ne.isStrictMode = function (w) {
      return y(w) === a;
    }),
    (ne.isSuspense = function (w) {
      return y(w) === d;
    }),
    (ne.isValidElementType = function (w) {
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
    (ne.typeOf = y),
    ne
  );
}
var yf;
function Ik() {
  return (yf || ((yf = 1), (Ps.exports = Ak())), Ps.exports);
}
var As, wf;
function Dk() {
  if (wf) return As;
  wf = 1;
  var e = Ik(),
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
          var x = l(f, S);
          try {
            c(g, S, x);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((As = v), As);
}
Dk();
var jk = !0;
function Kh(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Mc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || jk === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Wh = function (t, r, n) {
    Mc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function Tk(e) {
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
var Mk = {
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
  Nk = /[A-Z]|^ms/g,
  Fk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Jh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  kf = function (t) {
    return t != null && typeof t != "boolean";
  },
  Is = wk(function (e) {
    return Jh(e) ? e : e.replace(Nk, "-$&").toLowerCase();
  }),
  Of = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Fk, function (n, a, o) {
            return ((Et = { name: a, styles: o, next: Et }), a);
          });
    }
    return Mk[t] !== 1 && !Jh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
      if (a.anim === 1) return ((Et = { name: a.name, styles: a.styles, next: Et }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Et = { name: i.name, styles: i.styles, next: Et }), (i = i.next));
        var c = o.styles + ";";
        return c;
      }
      return Bk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = Et,
          u = r(e);
        return ((Et = s), $a(e, t, u));
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
          : kf(c) && (n += Is(o) + ":" + Of(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) kf(i[s]) && (n += Is(o) + ":" + Of(o, i[s]) + ";");
      else {
        var u = $a(e, t, i);
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
var Sf = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Et;
function Nc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Et = void 0;
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
  Sf.lastIndex = 0;
  for (var u = "", l; (l = Sf.exec(a)) !== null; ) u += "-" + l[1];
  var d = Tk(a) + u;
  return { name: d, styles: a, next: Et };
}
var Lk = function (t) {
    return t();
  },
  Uk = eu.useInsertionEffect ? eu.useInsertionEffect : !1,
  Yh = Uk || Lk,
  Xh = m.createContext(typeof HTMLElement < "u" ? Pk({ key: "css" }) : null);
Xh.Provider;
var Zh = function (t) {
    return m.forwardRef(function (r, n) {
      var a = m.useContext(Xh);
      return t(r, a, n);
    });
  },
  Qh = m.createContext({}),
  Fc = {}.hasOwnProperty,
  uc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  qk = function (t, r) {
    var n = {};
    for (var a in r) Fc.call(r, a) && (n[a] = r[a]);
    return ((n[uc] = t), n);
  },
  zk = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Mc(r, n, a),
      Yh(function () {
        return Wh(r, n, a);
      }),
      null
    );
  },
  $k = Zh(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[uc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Kh(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = Nc(o, void 0, m.useContext(Qh));
    i += t.key + "-" + c.name;
    var s = {};
    for (var u in e) Fc.call(e, u) && u !== "css" && u !== uc && (s[u] = e[u]);
    return (
      (s.className = i),
      r && (s.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(zk, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        m.createElement(a, s),
      )
    );
  }),
  Vk = $k,
  Kt = function (t, r) {
    var n = arguments;
    if (r == null || !Fc.call(r, "css")) return m.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = Vk), (o[1] = qk(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return m.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Kt || (Kt = {}));
function Nt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Nc(t);
}
var Gk = function e(t) {
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
function Hk(e, t, r) {
  var n = [],
    a = Kh(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var Kk = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Yh(function () {
        for (var a = 0; a < n.length; a++) Wh(r, n[a], !1);
      }),
      null
    );
  },
  Wk = Zh(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = Nc(u, t.registered);
        return (r.push(d), Mc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return Hk(t.registered, n, Gk(u));
      },
      o = { css: n, cx: a, theme: m.useContext(Qh) },
      i = e.children(o);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(Kk, { cache: t, serializedArr: r }),
      i,
    );
  });
function eg(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var tg = 2,
  lc = Nt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: tg,
  }),
  dc = Nt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -tg,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  Jk = Nt({
    "&:focus": lc,
    "&:focus-visible": lc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  Yk = Nt({
    "&:focus": dc,
    "&:focus-visible": dc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  rg = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? dc : lc,
      o = r ? Yk : Jk,
      i = typeof n > "u" ? o : n === "on" && a;
    return Kt(Wk, null, function (c) {
      var s = c.css,
        u = c.cx;
      return m.Children.only(
        i ? m.cloneElement(t, { className: u([s(i), t.props.className]) }) : t,
      );
    });
  });
rg.displayName = "FocusRing";
function $t(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Xk = 9;
function Ef(e) {
  e.keyCode !== Xk && $t(e);
}
var Zk = {
    onMouseDownCapture: $t,
    onMouseUpCapture: $t,
    onKeyDownCapture: Ef,
    onKeyUpCapture: Ef,
    onTouchStartCapture: $t,
    onTouchEndCapture: $t,
    onPointerDownCapture: $t,
    onPointerUpCapture: $t,
    onClickCapture: $t,
    onClick: $t,
  },
  Qk = {};
function eO(e) {
  var t = e.isInteractive;
  return t ? Qk : Zk;
}
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
function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var nr = 8,
  Ds = ["default", "primary", "danger", "warning"],
  fc = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  tO = { default: fc.default, compact: fc.compact, none: "inherit" },
  rO = {
    default: "0 ".concat(nr + nr / 4, "px"),
    compact: "0 ".concat(nr + nr / 4, "px"),
    none: "0",
  },
  nO = { compact: "0 ".concat(nr / 4, "px"), default: "0 ".concat(nr / 4, "px"), none: "0" },
  aO = { default: "middle", compact: "middle", none: "baseline" },
  ng = { content: "0 ".concat(nr / 4, "px"), icon: "0 ".concat(nr / 4, "px") },
  ag = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  oO = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Le(Le({}, ag), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  iO = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  sO = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  cO = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  uO = {
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
  lO = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  dO = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  fO = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Le(
      Le({}, ag),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  vO = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function pO(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return Le(
    Le(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: at("platform-dst-shape-theme-default")
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
        height: fc[r],
        lineHeight: tO[r],
        padding: o ? nO[r] : rO[r],
        verticalAlign: aO[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? fO
        : Le(
            Le(
              Le(
                Le(
                  Le(
                    Le(
                      Le(Le({}, t === "default" && oO), t === "primary" && iO),
                      t === "link" && sO,
                    ),
                    t === "subtle" && cO,
                  ),
                  t === "subtle-link" && uO,
                ),
                t === "warning" && lO,
              ),
              t === "danger" && dO,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Ds.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Ds.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Ds.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            vO,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Cf(e) {
  var t = e.spacing;
  return Nt({
    display: "flex",
    margin: t === "none" ? 0 : ng.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function hO(e) {
  var t = e.spacing;
  return Nt({
    margin: t === "none" ? 0 : ng.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function gO(e) {
  var t = e.hasOverlay;
  return Nt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var bO = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Bc = function (t) {
    return t && m.isValidElement(t) && t.type === yi;
  },
  _O = [
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
  mO = { "> *": { pointerEvents: "none" } },
  yO = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  wO = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Rf = function (t, r) {
    return !t || Bc(t) ? null : r;
  },
  kO = function (t, r) {
    return Bc(t) ? t : t ? Kt("span", { css: r }, t) : null;
  },
  OO = O.forwardRef(function (t, r) {
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
      x = S === void 0 ? Ae : S,
      A = t.onFocus,
      D = t.onMouseDown,
      P = D === void 0 ? Ae : D,
      M = t.overlay;
    t.shouldFitContainer;
    var q = t.spacing,
      L = q === void 0 ? "default" : q,
      $ = t.tabIndex,
      z = $ === void 0 ? 0 : $,
      V = t.type,
      G = V === void 0 ? (d ? void 0 : "button") : V,
      K = t.testId,
      B = te(t, _O),
      j = m.useRef(),
      _e = m.useCallback(
        function (ve) {
          if (((j.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [j, r],
      );
    eg(j, c);
    var ie = m.useContext(xc),
      ce = m.useCallback(
        function (ve, Ne) {
          (ie && ie.tracePress(h, ve.timeStamp), x(ve, Ne));
        },
        [x, ie, h],
      ),
      fe = Zr({
        fn: ce,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      pe = m.useCallback(
        function (ve) {
          (ve.preventDefault(), P(ve));
        },
        [P],
      );
    m.useEffect(
      function () {
        var ve = j.current;
        _ && ve && ve === document.activeElement && ve.blur();
      },
      [_],
    );
    var ue = !!M,
      Te = Nt(gO({ hasOverlay: ue })),
      ke = !_ && !ue,
      Me = {};
    return (
      (k || _ || o === "warning") &&
        (Me = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || _
                ? "var(--ds-icon-subtle, ".concat(Ho, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Ho, ")"),
              " !important",
            ),
          },
        }),
      Kt(
        rg,
        null,
        Kt(
          v,
          ee(
            {},
            B,
            {
              ref: _e,
              className: l,
              css: [s, ke ? null : mO],
              "data-has-overlay": ue ? !0 : void 0,
              "data-testid": K,
              disabled: _,
              href: ke ? d : void 0,
              onBlur: w,
              onClick: fe,
              onFocus: A,
              onMouseDown: pe,
              tabIndex: _ ? -1 : z,
              type: G,
            },
            eO({ isInteractive: ke }),
          ),
          f ? Kt("span", { css: [Te, Cf({ spacing: L }), Rf(u, yO)] }, f) : null,
          kO(u, [Te, hO({ spacing: L })]),
          g ? Kt("span", { css: [Te, Cf({ spacing: L }), Rf(u, wO)] }, g) : null,
          M ? Kt("span", { css: [bO, Me] }, M) : null,
        ),
      )
    );
  });
function SO(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Bc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var EO = [
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
  Lc = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? Ae : l,
        p = t.onMouseUp,
        v = p === void 0 ? Ae : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        _ = te(t, EO),
        y = Q1(),
        k = y.mode,
        w = SO({ children: o, iconBefore: i, iconAfter: c }),
        S = m.useState(!1),
        x = J(S, 2),
        A = x[0],
        D = x[1],
        P = m.useCallback(
          function (L) {
            (d(L), Pf && D(!0));
          },
          [d, D],
        ),
        M = m.useCallback(
          function (L) {
            (v(L), Pf && D(!1));
          },
          [v, D],
        ),
        q = m.useMemo(
          function () {
            return pO({
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
        OO,
        ee({}, _, {
          ref: r,
          appearance: a,
          buttonCss: q,
          children: o,
          "data-firefox-is-active": A ? !0 : void 0,
          iconAfter: c,
          iconBefore: i,
          isSelected: u,
          onMouseDown: P,
          onMouseUp: M,
          spacing: b,
        }),
      );
    }),
  );
Lc.displayName = "Button";
function Af(e) {
  return O.createElement(Lc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function xO(e) {
  return O.createElement(Lc, ee({}, e, { appearance: "subtle" }));
}
var CO = { container: "_1e0c1txw _kqswh2mm" };
function RO(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    _i,
    { as: "li", testId: r, key: t, xcss: CO.container, paddingInline: "space.100" },
    O.createElement(
      Th,
      { testId: r && "".concat(r, "-text") },
      O.createElement(yi, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var If = {},
  Df =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function PO(e, t) {
  return !!(e === t || (Df(e) && Df(t)));
}
function AO(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!PO(e[r], t[r])) return !1;
  return !0;
}
function IO(e, t) {
  t === void 0 && (t = AO);
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
var DO = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > o,
    l = u && o - 4 < r,
    d = u && r < s - o + 3,
    p = IO(function () {
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
      Ge(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - v })],
      Ge(p(s - v)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Ge(p(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: s - 1 })],
      Ge(p(s - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Ge(p(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Ge(p(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Ge(p(s - 1)),
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
function jO(e) {
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
var vc = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  TO = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function Tf(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Zw : t1;
  return O.createElement(
    _i,
    { as: "span", xcss: vc.navigatorIconWrapper },
    O.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function MO(e, t) {
  var r = e.components,
    n = r === void 0 ? If : r,
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
    h = f === void 0 ? If : f,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    y = e.onChange,
    k = y === void 0 ? Ae : y,
    w = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    A = x === void 0 ? RO : x,
    D = e.analyticsContext,
    P = e.testId,
    M = e.isDisabled,
    q = q0(i, function () {
      return o || 0;
    }),
    L = J(q, 2),
    $ = L[0],
    z = L[1],
    V = Zr(
      jO(
        {
          fn: function (B, j) {
            var _e = B.event,
              ie = B.selectedPageIndex;
            (i === void 0 && z(ie), k && k(_e, w[ie], j));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: D,
        },
        TO,
      ),
    ),
    G = function (B, j, _e) {
      var ie = w[$],
        ce = "".concat(l, " ").concat(S ? S(B, j) : B),
        fe = B === ie;
      return O.createElement(
        So,
        { as: "li", xcss: vc.paginationMenuItem, key: "page-".concat(S ? S(B, j) : j) },
        O.createElement(
          xO,
          {
            component: n.Page,
            onClick: function (ue) {
              return V({ event: ue, selectedPageIndex: j });
            },
            "aria-current": fe ? "page" : void 0,
            "aria-label": ce,
            isSelected: fe,
            isDisabled: M,
            page: B,
            testId:
              _e &&
              ""
                .concat(_e, "--")
                .concat(fe ? "current-" : "", "page-")
                .concat(j),
          },
          S ? S(B, j) : B,
        ),
      );
    };
  return O.createElement(
    _i,
    { testId: P, style: h, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      So,
      { space: "space.0", alignBlock: "center" },
      O.createElement(Af, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (B) {
          return V({ event: B, selectedPageIndex: $ - 1 });
        },
        isDisabled: M || $ === 0,
        iconBefore: O.createElement(Tf, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      O.createElement(
        So,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: vc.paginationMenu },
        DO(w, $, { max: _, ellipsis: A, transform: G }, P),
      ),
      O.createElement(Af, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (B) {
          return V({ event: B, selectedPageIndex: $ + 1 });
        },
        isDisabled: M || $ === w.length - 1,
        iconBefore: O.createElement(Tf, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var NO = m.memo(m.forwardRef(MO));
function FO(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, og() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function og() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (og = function () {
    return !!e;
  })();
}
var BO = (function (e) {
    function t() {
      var r;
      ge(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = FO(this, t, [].concat(a))),
        C(r, "onChange", function (i, c, s) {
          r.props.onChange(c, s);
        }),
        r
      );
    }
    return (
      Ze(t, e),
      be(t, [
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
              l = Ge(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return O.createElement(NO, {
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
  LO = ["isRanking", "testId"],
  UO = [
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
function ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Nf = "--local-dynamic-table-text-color",
  qO = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = te(t, LO);
    return m.createElement(
      "thead",
      ee({ "data-testid": n }, a, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  zO = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      u = te(e, UO),
      l = ba(
        ba(ba({}, c), r && fh({ width: r })),
        {},
        C({}, Nf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === Or,
      p = a === Vo,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return m.createElement(
      g,
      ee({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, u, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ba(
          ba({}, l),
          {},
          { "--_17ckjys": tr("var(--ds-text-subtle, ".concat("var(".concat(Nf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function $O(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, ig() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function VO(e) {
  return (function (t) {
    function r() {
      var n;
      ge(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = $O(this, r, [].concat(o))),
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
      Ze(r, t),
      be(r, [
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
              ee({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(O.Component);
}
var _a = {},
  Ff;
function GO() {
  if (Ff) return _a;
  ((Ff = 1), Object.defineProperty(_a, "__esModule", { value: !0 }), (_a.default = void 0));
  var e = r(Er()),
    t = r(bi);
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
  return ((n.displayName = "ArrowDownIcon"), (_a.default = n), _a);
}
var HO = GO();
const KO = ir(HO);
var ma = {},
  Bf;
function WO() {
  if (Bf) return ma;
  ((Bf = 1), Object.defineProperty(ma, "__esModule", { value: !0 }), (ma.default = void 0));
  var e = r(Er()),
    t = r(bi);
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
  return ((n.displayName = "ArrowUpIcon"), (ma.default = n), ma);
}
var JO = WO();
const YO = ir(JO);
var XO = "Escape";
function ZO(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    a = m.useCallback(
      function (i) {
        r || n.current || i.key !== XO || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return mi.bindAll(
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
function ya(e) {
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
var QO = m.createContext(null),
  eS = m.createContext(null);
function tS() {
  var e = m.useContext(eS);
  return e;
}
function rS(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = m.useContext(QO),
    o = tS();
  m.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var Ea = { none: 0, small: 100, medium: 350, large: 700 },
  js = 0.5,
  nS = { none: Ea.none, small: Ea.small * js, medium: Ea.medium * js, large: Ea.large * js },
  aS = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  oS = function () {
    if (!aS()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  iS = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  sS = function () {
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
      }, iS(t)),
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
  sg = { appear: !0, isExiting: !1 },
  cg = m.createContext(sg),
  Lf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : sg;
    return O.createElement(cg.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Uf = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  cS = function (t, r) {
    for (var n = r.concat([]), a = uS(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  uS = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  lS = function (t, r) {
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
  ug = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = m.useState([null, n]),
      i = J(o, 2),
      c = i[0],
      s = i[1],
      u = m.useState([]),
      l = J(u, 2),
      d = l[0],
      p = l[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = J(v, 2),
      f = g[0],
      h = g[1];
    if (
      (m.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof c == "boolean")
    )
      return n;
    var b = J(c, 2),
      _ = b[0],
      y = b[1],
      k = Uf(_),
      w = Uf(y);
    y !== n && s([y, n]);
    var S = lS(w, k),
      x = !!S.size,
      A = w;
    if ((x && (A = cS(w, k)), a))
      if (d.length) A = d;
      else {
        var D = A.filter(function (P) {
          return S.has(P.key);
        });
        D.length && p(D);
      }
    return (
      S.size
        ? (A = A.map(function (P) {
            var M = S.has(P.key);
            return Lf(P, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (A = A.map(function (P) {
            return Lf(P, f);
          })),
      A
    );
  }),
  dS = function () {
    return m.useContext(cg);
  };
ug.displayName = "ExitingPersistence";
function fS() {
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
var vS = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ae };
  }),
  pS = function () {
    var t = fS(),
      r = m.useContext(vS);
    return r(t);
  },
  hS = function (t) {
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
      v = pS(),
      g = dS(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      _ = sS(),
      y = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(b),
      x = J(S, 2),
      A = x[0],
      D = x[1];
    return (
      m.useEffect(
        function () {
          var P = !1;
          if (!y) {
            if (!b) {
              l && l(w);
              return;
            }
            var M = function () {
              (w === "exiting" && h?.(), P || D(!1), l?.(w));
            };
            if (oS()) {
              M();
              return;
            }
            return (
              D(!0),
              _(M, f ? nS[p] : Ea[p] + k),
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
  gS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  bS = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? gS[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      hS,
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
  _S = m.createContext();
m.createContext();
var mS = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  yS = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  wS = function (t, r) {
    if (typeof t == "function") return yS(t, r);
    t != null && (t.current = r);
  },
  qf = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  zf =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  Ue = "top",
  ut = "bottom",
  lt = "right",
  qe = "left",
  Uc = "auto",
  eo = [Ue, ut, lt, qe],
  en = "start",
  Va = "end",
  kS = "clippingParents",
  lg = "viewport",
  wa = "popper",
  OS = "reference",
  $f = eo.reduce(function (e, t) {
    return e.concat([t + "-" + en, t + "-" + Va]);
  }, []),
  dg = [].concat(eo, [Uc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + en, t + "-" + Va]);
  }, []),
  SS = "beforeRead",
  ES = "read",
  xS = "afterRead",
  CS = "beforeMain",
  RS = "main",
  PS = "afterMain",
  AS = "beforeWrite",
  IS = "write",
  DS = "afterWrite",
  jS = [SS, ES, xS, CS, RS, PS, AS, IS, DS];
function Mt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Je(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Sr(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function ct(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function TS(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !ct(o) ||
      !Mt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function MS(e) {
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
        !ct(a) ||
          !Mt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const NS = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: TS,
  effect: MS,
  requires: ["computeStyles"],
};
function Dt(e) {
  return e.split("-")[0];
}
var _r = Math.max,
  Jo = Math.min,
  tn = Math.round;
function pc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function fg() {
  return !/^((?!chrome|android).)*safari/i.test(pc());
}
function rn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    ct(e) &&
    ((a = (e.offsetWidth > 0 && tn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && tn(n.height) / e.offsetHeight) || 1));
  var i = Sr(e) ? Je(e) : window,
    c = i.visualViewport,
    s = !fg() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function zc(e) {
  var t = rn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function vg(e, t) {
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
function Yt(e) {
  return Je(e).getComputedStyle(e);
}
function FS(e) {
  return ["table", "td", "th"].indexOf(Mt(e)) >= 0;
}
function cr(e) {
  return ((Sr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Si(e) {
  return Mt(e) === "html" ? e : e.assignedSlot || e.parentNode || (qc(e) ? e.host : null) || cr(e);
}
function Vf(e) {
  return !ct(e) || Yt(e).position === "fixed" ? null : e.offsetParent;
}
function BS(e) {
  var t = /firefox/i.test(pc()),
    r = /Trident/i.test(pc());
  if (r && ct(e)) {
    var n = Yt(e);
    if (n.position === "fixed") return null;
  }
  var a = Si(e);
  for (qc(a) && (a = a.host); ct(a) && ["html", "body"].indexOf(Mt(a)) < 0; ) {
    var o = Yt(a);
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
function to(e) {
  for (var t = Je(e), r = Vf(e); r && FS(r) && Yt(r).position === "static"; ) r = Vf(r);
  return r && (Mt(r) === "html" || (Mt(r) === "body" && Yt(r).position === "static"))
    ? t
    : r || BS(e) || t;
}
function $c(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ia(e, t, r) {
  return _r(e, Jo(t, r));
}
function LS(e, t, r) {
  var n = Ia(e, t, r);
  return n > r ? r : n;
}
function pg() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function hg(e) {
  return Object.assign({}, pg(), e);
}
function gg(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var US = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    hg(typeof t != "number" ? t : gg(t, eo))
  );
};
function qS(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = Dt(r.placement),
    s = $c(c),
    u = [qe, lt].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = US(a.padding, r),
      p = zc(o),
      v = s === "y" ? Ue : qe,
      g = s === "y" ? ut : lt,
      f = r.rects.reference[l] + r.rects.reference[s] - i[s] - r.rects.popper[l],
      h = i[s] - r.rects.reference[s],
      b = to(o),
      _ = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - h / 2,
      k = d[v],
      w = _ - p[l] - d[g],
      S = _ / 2 - p[l] / 2 + y,
      x = Ia(k, S, w),
      A = s;
    r.modifiersData[n] = ((t = {}), (t[A] = x), (t.centerOffset = x - S), t);
  }
}
function zS(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (vg(t.elements.popper, a) && (t.elements.arrow = a)));
}
const $S = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: qS,
  effect: zS,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function nn(e) {
  return e.split("-")[1];
}
var VS = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function GS(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: tn(r * a) / a || 0, y: tn(n * a) / a || 0 };
}
function Gf(e) {
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
    y = qe,
    k = Ue,
    w = window;
  if (u) {
    var S = to(r),
      x = "clientHeight",
      A = "clientWidth";
    if (
      (S === Je(r) &&
        ((S = cr(r)),
        Yt(S).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (A = "scrollWidth"))),
      (S = S),
      a === Ue || ((a === qe || a === lt) && o === Va))
    ) {
      k = ut;
      var D = d && S === w && w.visualViewport ? w.visualViewport.height : S[x];
      ((f -= D - n.height), (f *= s ? 1 : -1));
    }
    if (a === qe || ((a === Ue || a === ut) && o === Va)) {
      y = lt;
      var P = d && S === w && w.visualViewport ? w.visualViewport.width : S[A];
      ((v -= P - n.width), (v *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: c }, u && VS),
    q = l === !0 ? GS({ x: v, y: f }, Je(r)) : { x: v, y: f };
  if (((v = q.x), (f = q.y), s)) {
    var L;
    return Object.assign(
      {},
      M,
      ((L = {}),
      (L[k] = _ ? "0" : ""),
      (L[y] = b ? "0" : ""),
      (L.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      L),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[k] = _ ? f + "px" : ""), (t[y] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function HS(e) {
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
      variation: nn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Gf(
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
        Gf(
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
const KS = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: HS, data: {} };
var go = { passive: !0 };
function WS(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = Je(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, go);
      }),
    c && s.addEventListener("resize", r.update, go),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, go);
        }),
        c && s.removeEventListener("resize", r.update, go));
    }
  );
}
const JS = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: WS,
  data: {},
};
var YS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Po(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return YS[t];
  });
}
var XS = { start: "end", end: "start" };
function Hf(e) {
  return e.replace(/start|end/g, function (t) {
    return XS[t];
  });
}
function Vc(e) {
  var t = Je(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Gc(e) {
  return rn(cr(e)).left + Vc(e).scrollLeft;
}
function ZS(e, t) {
  var r = Je(e),
    n = cr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = fg();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + Gc(e), y: s };
}
function QS(e) {
  var t,
    r = cr(e),
    n = Vc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = _r(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = _r(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + Gc(e),
    s = -n.scrollTop;
  return (
    Yt(a || r).direction === "rtl" && (c += _r(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function Hc(e) {
  var t = Yt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function bg(e) {
  return ["html", "body", "#document"].indexOf(Mt(e)) >= 0
    ? e.ownerDocument.body
    : ct(e) && Hc(e)
      ? e
      : bg(Si(e));
}
function Da(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = bg(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Je(n),
    i = a ? [o].concat(o.visualViewport || [], Hc(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(Da(Si(i)));
}
function hc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function eE(e, t) {
  var r = rn(e, !1, t === "fixed");
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
  return t === lg ? hc(ZS(e, r)) : Sr(t) ? eE(t, r) : hc(QS(cr(e)));
}
function tE(e) {
  var t = Da(Si(e)),
    r = ["absolute", "fixed"].indexOf(Yt(e).position) >= 0,
    n = r && ct(e) ? to(e) : e;
  return Sr(n)
    ? t.filter(function (a) {
        return Sr(a) && vg(a, n) && Mt(a) !== "body";
      })
    : [];
}
function rE(e, t, r, n) {
  var a = t === "clippingParents" ? tE(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, u) {
        var l = Kf(e, u, n);
        return (
          (s.top = _r(l.top, s.top)),
          (s.right = Jo(l.right, s.right)),
          (s.bottom = Jo(l.bottom, s.bottom)),
          (s.left = _r(l.left, s.left)),
          s
        );
      },
      Kf(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function _g(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Dt(n) : null,
    o = n ? nn(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case Ue:
      s = { x: i, y: t.y - r.height };
      break;
    case ut:
      s = { x: i, y: t.y + t.height };
      break;
    case lt:
      s = { x: t.x + t.width, y: c };
      break;
    case qe:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? $c(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case en:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case Va:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ga(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? kS : c,
    u = r.rootBoundary,
    l = u === void 0 ? lg : u,
    d = r.elementContext,
    p = d === void 0 ? wa : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = hg(typeof h != "number" ? h : gg(h, eo)),
    _ = p === wa ? OS : wa,
    y = e.rects.popper,
    k = e.elements[g ? _ : p],
    w = rE(Sr(k) ? k : k.contextElement || cr(e.elements.popper), s, l, i),
    S = rn(e.elements.reference),
    x = _g({ reference: S, element: y, placement: a }),
    A = hc(Object.assign({}, y, x)),
    D = p === wa ? A : S,
    P = {
      top: w.top - D.top + b.top,
      bottom: D.bottom - w.bottom + b.bottom,
      left: w.left - D.left + b.left,
      right: D.right - w.right + b.right,
    },
    M = e.modifiersData.offset;
  if (p === wa && M) {
    var q = M[a];
    Object.keys(P).forEach(function (L) {
      var $ = [lt, ut].indexOf(L) >= 0 ? 1 : -1,
        z = [Ue, ut].indexOf(L) >= 0 ? "y" : "x";
      P[L] += q[z] * $;
    });
  }
  return P;
}
function nE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? dg : s,
    l = nn(n),
    d = l
      ? c
        ? $f
        : $f.filter(function (g) {
            return nn(g) === l;
          })
      : eo,
    p = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = Ga(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[Dt(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function aE(e) {
  if (Dt(e) === Uc) return [];
  var t = Po(e);
  return [Hf(e), t, Hf(t)];
}
function oE(e) {
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
        y = s || (_ || !g ? [Po(h)] : aE(h)),
        k = [h].concat(y).reduce(function (fe, pe) {
          return fe.concat(
            Dt(pe) === Uc
              ? nE(t, {
                  placement: pe,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : pe,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        A = !0,
        D = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var M = k[P],
        q = Dt(M),
        L = nn(M) === en,
        $ = [Ue, ut].indexOf(q) >= 0,
        z = $ ? "width" : "height",
        V = Ga(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        G = $ ? (L ? lt : qe) : L ? ut : Ue;
      w[z] > S[z] && (G = Po(G));
      var K = Po(G),
        B = [];
      if (
        (o && B.push(V[q] <= 0),
        c && B.push(V[G] <= 0, V[K] <= 0),
        B.every(function (fe) {
          return fe;
        }))
      ) {
        ((D = M), (A = !1));
        break;
      }
      x.set(M, B);
    }
    if (A)
      for (
        var j = g ? 3 : 1,
          _e = function (pe) {
            var ue = k.find(function (Te) {
              var ke = x.get(Te);
              if (ke)
                return ke.slice(0, pe).every(function (Me) {
                  return Me;
                });
            });
            if (ue) return ((D = ue), "break");
          },
          ie = j;
        ie > 0;
        ie--
      ) {
        var ce = _e(ie);
        if (ce === "break") break;
      }
    t.placement !== D && ((t.modifiersData[n]._skip = !0), (t.placement = D), (t.reset = !0));
  }
}
const iE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: oE,
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
function Jf(e) {
  return [Ue, lt, ut, qe].some(function (t) {
    return e[t] >= 0;
  });
}
function sE(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = Ga(t, { elementContext: "reference" }),
    c = Ga(t, { altBoundary: !0 }),
    s = Wf(i, n),
    u = Wf(c, a, o),
    l = Jf(s),
    d = Jf(u);
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
const cE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sE,
};
function uE(e, t, r) {
  var n = Dt(e),
    a = [qe, Ue].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [qe, lt].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function lE(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = dg.reduce(function (l, d) {
      return ((l[d] = uE(d, t.rects, o)), l);
    }, {}),
    c = i[t.placement],
    s = c.x,
    u = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const dE = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: lE };
function fE(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = _g({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const vE = { name: "popperOffsets", enabled: !0, phase: "read", fn: fE, data: {} };
function pE(e) {
  return e === "x" ? "y" : "x";
}
function hE(e) {
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
    h = Ga(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = Dt(t.placement),
    _ = nn(t.placement),
    y = !_,
    k = $c(b),
    w = pE(k),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    A = t.rects.popper,
    D = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    q = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var L,
        $ = k === "y" ? Ue : qe,
        z = k === "y" ? ut : lt,
        V = k === "y" ? "height" : "width",
        G = S[k],
        K = G + h[$],
        B = G - h[z],
        j = v ? -A[V] / 2 : 0,
        _e = _ === en ? x[V] : A[V],
        ie = _ === en ? -A[V] : -x[V],
        ce = t.elements.arrow,
        fe = v && ce ? zc(ce) : { width: 0, height: 0 },
        pe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : pg(),
        ue = pe[$],
        Te = pe[z],
        ke = Ia(0, x[V], fe[V]),
        Me = y ? x[V] / 2 - j - ke - ue - P.mainAxis : _e - ke - ue - P.mainAxis,
        ve = y ? -x[V] / 2 + j + ke + Te + P.mainAxis : ie + ke + Te + P.mainAxis,
        Ne = t.elements.arrow && to(t.elements.arrow),
        Xt = Ne ? (k === "y" ? Ne.clientTop || 0 : Ne.clientLeft || 0) : 0,
        ft = (L = M?.[k]) != null ? L : 0,
        Ce = G + Me - ft - Xt,
        Re = G + ve - ft,
        wt = Ia(v ? Jo(K, Ce) : K, G, v ? _r(B, Re) : B);
      ((S[k] = wt), (q[k] = wt - G));
    }
    if (c) {
      var Qe,
        $e = k === "x" ? Ue : qe,
        Fe = k === "x" ? ut : lt,
        Ie = S[w],
        re = w === "y" ? "height" : "width",
        Oe = Ie + h[$e],
        De = Ie - h[Fe],
        kt = [Ue, qe].indexOf(b) !== -1,
        Ar = (Qe = M?.[w]) != null ? Qe : 0,
        le = kt ? Oe : Ie - x[re] - A[re] - Ar + P.altAxis,
        Ft = kt ? Ie + x[re] + A[re] - Ar - P.altAxis : De,
        Ve = v && kt ? LS(le, Ie, Ft) : Ia(v ? le : Oe, Ie, v ? Ft : De);
      ((S[w] = Ve), (q[w] = Ve - Ie));
    }
    t.modifiersData[n] = q;
  }
}
const gE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hE,
  requiresIfExists: ["offset"],
};
function bE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function _E(e) {
  return e === Je(e) || !ct(e) ? Vc(e) : bE(e);
}
function mE(e) {
  var t = e.getBoundingClientRect(),
    r = tn(t.width) / e.offsetWidth || 1,
    n = tn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function yE(e, t, r) {
  r === void 0 && (r = !1);
  var n = ct(t),
    a = ct(t) && mE(t),
    o = cr(t),
    i = rn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Mt(t) !== "body" || Hc(o)) && (c = _E(t)),
      ct(t) ? ((s = rn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = Gc(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function wE(e) {
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
function kE(e) {
  var t = wE(e);
  return jS.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function OE(e) {
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
function SE(e) {
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
var Yf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function EE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Yf : a;
  return function (c, s, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Yf, o),
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
              reference: Sr(c) ? Da(c) : c.contextElement ? Da(c.contextElement) : [],
              popper: Da(s),
            }));
          var y = kE(SE([].concat(n, l.options.modifiers)));
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
            if (Xf(_, y)) {
              ((l.rects = {
                reference: yE(_, to(y), l.options.strategy === "fixed"),
                popper: zc(y),
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
                  x = w.options,
                  A = x === void 0 ? {} : x,
                  D = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: A, name: D, instance: v }) || l);
              }
            }
          }
        },
        update: OE(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!Xf(c, s)) return v;
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
var xE = [JS, vE, KS, NS, dE, iE, gE, $S, cE],
  CE = EE({ defaultModifiers: xE }),
  Ts,
  Zf;
function RE() {
  if (Zf) return Ts;
  Zf = 1;
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
    (Ts = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Ts
  );
}
var PE = RE();
const AE = ir(PE);
var IE = [],
  DE = function (t, r, n) {
    n === void 0 && (n = {});
    var a = m.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || IE,
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
            Yo.flushSync(function () {
              s({
                styles: qf(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: qf(
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
          return AE(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = m.useRef();
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
            var p = n.createPopper || CE,
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
  jE = function () {},
  TE = function () {
    return Promise.resolve(null);
  },
  ME = [];
function NE(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? ME : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = m.useContext(_S),
    p = m.useState(null),
    v = p[0],
    g = p[1],
    f = m.useState(null),
    h = f[0],
    b = f[1];
  m.useEffect(
    function () {
      wS(u, v);
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
    y = DE(c || d, v, _),
    k = y.state,
    w = y.styles,
    S = y.forceUpdate,
    x = y.update,
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
          forceUpdate: S || jE,
          update: x || TE,
        };
      },
      [g, b, r, k, w, x, S],
    );
  return mS(l)(A);
}
function FE(e) {
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
            g = J(v, 1),
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
var gc = 5,
  BE = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: gc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function LE() {
  return null;
}
var UE = [0, 8];
function qE(e) {
  var t = e.children,
    r = t === void 0 ? LE : t,
    n = e.offset,
    a = n === void 0 ? UE : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    g = J(a, 2),
    f = g[0],
    h = g[1],
    b = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: gc, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = v ? FE({ viewportPadding: gc }) : [];
        return [].concat(BE, [y, k], Ge(w));
      },
      [f, h, v],
    ),
    _ = m.useMemo(
      function () {
        return u == null ? b : [].concat(Ge(b), Ge(u));
      },
      [b, u],
    );
  return O.createElement(NE, { modifiers: _, placement: i, strategy: d, referenceElement: s }, r);
}
var mg = "atlaskit-portal-container",
  yg = "body > .atlaskit-portal-container",
  wg = "atlaskit-portal",
  zE = function (t) {
    var r = document.createElement("div");
    return ((r.className = wg), (r.style.zIndex = "".concat(t)), r);
  },
  kg = function () {
    return document.body;
  },
  Og = function () {
    var t = document.querySelector(yg);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = mg),
        (n.style.display = "flex"),
        (r = kg()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  $E = function (t) {
    Og().removeChild(t);
  },
  VE = function (t) {
    t.parentElement || Og().appendChild(t);
  },
  Sg = function () {
    return document !== void 0;
  },
  GE = function (t) {
    if (Sg()) {
      var r = document.createElement("div");
      return ((r.className = wg), (r.style.zIndex = "".concat(t)), r);
    }
  },
  HE = function () {
    if (Sg()) {
      var t = document.querySelector(yg);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = mg),
          (n.style.display = "flex"),
          (r = kg()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function KE(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return zE(t);
      },
      [t],
    );
  return (
    VE(n),
    m.useEffect(
      function () {
        return function () {
          $E(n);
        };
      },
      [n],
    ),
    Yo.createPortal(r, n)
  );
}
var Eg = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function WE(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    a = J(n, 2),
    o = a[0],
    i = a[1];
  Eg(
    function () {
      var s = GE(t);
      i(s);
      var u = HE();
      if (!(!s || !u))
        return (
          u.appendChild(s),
          function () {
            (s && u.removeChild(s), i(null));
          }
        );
    },
    [t],
  );
  var c = O.createElement(m.Suspense, { fallback: null }, r);
  return o ? Yo.createPortal(c, o) : null;
}
var JE = function (t) {
    var r = m.useState(!1),
      n = J(r, 2),
      a = n[0],
      o = n[1],
      i = m.useState(function () {
        return t === "layoutEffect" ? Eg : m.useEffect;
      }),
      c = J(i, 1),
      s = c[0];
    return (
      s(function () {
        o(!0);
      }, []),
      a
    );
  },
  YE = "akPortalMount",
  XE = "akPortalUnmount",
  Qf = {
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
  ZE = function (t) {
    return Qf.hasOwnProperty(t) ? Qf[t] : null;
  },
  QE = function (t, r) {
    var n = { layer: ZE(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function ev(e, t) {
  var r = QE(e, t);
  window.dispatchEvent(r);
}
var ex = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        ev(YE, r),
        function () {
          ev(XE, r);
        }
      );
    },
    [r],
  );
};
function tx(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = JE(o);
  return (
    ex(r),
    at("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(WE, { zIndex: r }, n)
      : i
        ? O.createElement(KE, { zIndex: r }, n)
        : null
  );
}
var ja = new Set(),
  Ha = null;
function tv() {
  if (!Ha) {
    Ha = mi.bindAll(window, [
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
    var e = Array.from(ja);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Ms() {
  var e;
  ((e = Ha) === null || e === void 0 || e(), (Ha = null));
  var t = Array.from(ja);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function rx() {
  return mi.bindAll(window, [
    { type: "dragstart", listener: tv },
    { type: "dragenter", listener: tv },
  ]);
}
var bo = null;
function nx(e) {
  return (
    bo || (bo = rx()),
    ja.add(e),
    e.onRegister({ isDragging: Ha !== null }),
    function () {
      if ((ja.delete(e), ja.size === 0)) {
        var r;
        ((r = bo) === null || r === void 0 || r(), (bo = null));
      }
    }
  );
}
var Ta = null;
function xa() {
  Ta != null && (window.clearTimeout(Ta), (Ta = null));
}
function rv(e, t) {
  (xa(),
    (Ta = window.setTimeout(function () {
      ((Ta = null), e());
    }, t)));
}
var Ot = null;
function ax(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(Ot && Ot.entry === e);
  }
  function n() {
    r() && (xa(), (Ot = null));
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
          rv(function () {
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
    var v = !!(Ot && Ot.isVisible());
    (Ot && (xa(), Ot.entry.hide({ isImmediate: !0 }), Ot.entry.done(), (Ot = null)),
      (Ot = { entry: e, isVisible: u }));
    function g() {
      ((t = "shown"), e.show({ isImmediate: v }));
    }
    if (v) {
      g();
      return;
    }
    ((t = "waiting-to-show"), rv(g, e.delay));
  }
  d();
  var p = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return p;
}
function ox(e, t) {
  var r = W1();
  return t ? "".concat(r(e)) : void 0;
}
var nv = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81o8v _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  ix = function (t) {
    var r = t.shortcut;
    return m.createElement(
      "div",
      { className: R([nv.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return m.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: R([nv.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  xg = m.forwardRef(function (t, r) {
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
        d && m.createElement(ix, { shortcut: d }),
      ),
    );
  });
xg.displayName = "TooltipPrimitive";
var av = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Cg = m.forwardRef(function (t, r) {
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
      xg,
      {
        ref: r,
        style: n,
        className: R([av.base, i && av.truncate, a]),
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
Cg.displayName = "TooltipContainer";
function ov(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function iv(e, t) {
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
function zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? iv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : iv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var sx = J1.tooltip(),
  sv = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  cx = { top: "bottom", bottom: "top", left: "right", right: "left" },
  ux = function (t) {
    return t.split("-")[0];
  };
function lx(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? Cg : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Ae : h,
    _ = e.onHide,
    y = _ === void 0 ? Ae : _,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    A = x === void 0 ? !1 : x,
    D = e.analyticsContext,
    P = e.strategy,
    M = P === void 0 ? "fixed" : P,
    q = e.ignoreTooltipPointerEvents,
    L = q === void 0 ? !1 : q,
    $ = e.isScreenReaderAnnouncementDisabled,
    z = $ === void 0 ? !1 : $,
    V = e.shortcut,
    G = n === "mouse" ? o : n,
    K = gd(zr({ fn: b, action: "displayed", analyticsData: D }, sv)),
    B = gd(zr({ fn: y, action: "hidden", analyticsData: D }, sv)),
    j = m.useRef(null),
    _e = m.useState("hide"),
    ie = J(_e, 2),
    ce = ie[0],
    fe = ie[1],
    pe = m.useRef(null),
    ue = m.useRef(null),
    Te = function (oe) {
      ((ue.current = oe), (pe.current = oe ? oe.firstElementChild : null));
    },
    ke = m.useCallback(function (N) {
      pe.current = N;
    }, []),
    Me = ya(ce),
    ve = ya(K),
    Ne = ya(B),
    Xt = ya(f),
    ft = ya(k),
    Ce = m.useRef(!1),
    Re = m.useCallback(function (N) {
      ((j.current = N), (Ce.current = !1));
    }, []),
    wt = m.useCallback(
      function () {
        j.current &&
          (Ce.current && Ne.current(), (j.current = null), (Ce.current = !1), fe("hide"));
      },
      [Ne],
    ),
    Qe = m.useCallback(
      function () {
        j.current && (j.current.abort(), Ce.current && Ne.current(), (j.current = null));
      },
      [Ne],
    );
  m.useEffect(
    function () {
      return function () {
        j.current && Qe();
      };
    },
    [Qe],
  );
  var $e = m.useRef(!1);
  m.useEffect(function () {
    return nx({
      onRegister: function (oe) {
        var Lt = oe.isDragging;
        $e.current = Lt;
      },
      onDragStart: function () {
        var oe;
        ((oe = j.current) === null || oe === void 0 || oe.requestHide({ isImmediate: !0 }),
          ($e.current = !0));
      },
      onDragEnd: function () {
        $e.current = !1;
      },
    });
  }, []);
  var Fe = m.useCallback(
      function (N) {
        var oe;
        if (!$e.current) {
          if ((j.current && !j.current.isActive() && Qe(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(ft.current && !((oe = ft.current) !== null && oe !== void 0 && oe.call(ft)))) {
            var Lt = {
                source: N,
                delay: Xt.current,
                show: function (Ir) {
                  var ln = Ir.isImmediate;
                  (Ce.current || ((Ce.current = !0), ve.current()),
                    fe(ln ? "show-immediate" : "fade-in"));
                },
                hide: function (Ir) {
                  var ln = Ir.isImmediate;
                  fe(ln ? "hide" : "before-fade-out");
                },
                done: wt,
              },
              xi = ax(Lt);
            Re(xi);
          }
        }
      },
      [ft, Xt, wt, Re, Qe, ve],
    ),
    Ie = m.useCallback(
      function () {
        var N;
        (N = j.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (ZO({ onClose: Ie, isDisabled: ce === "hide" || ce === "fade-out" }),
    m.useEffect(
      function () {
        if (ce === "hide") return Ae;
        ce === "before-fade-out" && fe("fade-out");
        var N = mi.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return N;
      },
      [ce],
    ));
  var re = m.useCallback(
      function () {
        A && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [A],
    ),
    Oe = m.useCallback(
      function () {
        S && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    De = m.useCallback(
      function (N) {
        if (!(ue.current && N.target === ue.current) && !N.defaultPrevented) {
          N.preventDefault();
          var oe =
            n === "mouse"
              ? { type: "mouse", mouse: ov({ left: N.clientX, top: N.clientY }) }
              : { type: "keyboard" };
          Fe(oe);
        }
      },
      [n, Fe],
    ),
    kt = m.useCallback(function (N) {
      (ue.current && N.target === ue.current) ||
        N.defaultPrevented ||
        (N.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ar =
      n === "mouse"
        ? function (N) {
            var oe;
            (oe = j.current) !== null &&
              oe !== void 0 &&
              oe.isActive() &&
              (j.current.mousePosition = ov({ left: N.clientX, top: N.clientY }));
          }
        : void 0,
    le = m.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    Ft = m.useCallback(
      function (N) {
        try {
          if (!N.target.matches(":focus-visible")) return;
        } catch {}
        Fe({ type: "keyboard" });
      },
      [Fe],
    ),
    Ve = m.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    Bt = m.useCallback(
      function (N) {
        N === "exiting" &&
          Me.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [Me],
    ),
    ro = p,
    vt = ce !== "hide" && !!i,
    no = !z && vt,
    Wc = ce !== "hide" && ce !== "fade-out",
    Bg = m.useCallback(function () {
      var N;
      (N = j.current) === null || N === void 0 || N.requestHide({ isImmediate: !0 });
    }, []);
  rS({ isOpen: vt && Wc, onClose: Bg });
  var Jc = function () {
      var oe;
      if (n === "mouse" && (oe = j.current) !== null && oe !== void 0 && oe.mousePosition) {
        var Lt;
        return (Lt = j.current) === null || Lt === void 0 ? void 0 : Lt.mousePosition;
      }
      return pe.current || void 0;
    },
    un = ox("tooltip", no),
    Ei = {
      onMouseOver: De,
      onMouseOut: kt,
      onMouseMove: Ar,
      onMouseDown: re,
      onClick: Oe,
      onFocus: Ft,
      onBlur: Ve,
    };
  v && (Ei["data-testid"] = "".concat(v, "--container"));
  var Yc = typeof t == "function";
  m.useEffect(
    function () {
      if (!Yc) {
        var N = pe.current;
        if (!(!N || !un))
          return (
            N.setAttribute("aria-describedby", un),
            function () {
              return N.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Yc, un],
  );
  var Xc = no
    ? O.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: un },
        typeof i == "function" ? i({}) : i,
      )
    : null;
  return O.createElement(
    O.Fragment,
    null,
    typeof t == "function"
      ? O.createElement(
          O.Fragment,
          null,
          t(zr(zr({}, Ei), {}, { "aria-describedby": un, ref: ke })),
          Xc,
        )
      : O.createElement(ro, ee({}, Ei, { ref: Te, role: "presentation" }), t, Xc),
    vt
      ? O.createElement(
          tx,
          { zIndex: sx },
          O.createElement(qE, { placement: G, referenceElement: Jc(), strategy: M }, function (N) {
            var oe = N.ref,
              Lt = N.style,
              xi = N.update,
              Ci = N.placement,
              Ir = n === "mouse" ? void 0 : cx[ux(Ci)];
            return O.createElement(
              ug,
              { appear: !0 },
              Wc &&
                O.createElement(
                  bS,
                  {
                    distance: "constant",
                    entranceDirection: Ir,
                    exitDirection: Ir,
                    onFinish: Bt,
                    duration: ce !== "show-immediate" ? "medium" : "none",
                  },
                  function (ln) {
                    var Lg = ln.className;
                    return O.createElement(
                      l,
                      {
                        ref: oe,
                        className: "Tooltip ".concat(Lg),
                        style: zr(zr({}, Lt), L && { pointerEvents: "none" }),
                        truncate: s,
                        placement: G,
                        testId: Jc() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: kt,
                        onMouseOver: le,
                        shortcut: V,
                      },
                      typeof i == "function" ? i({ update: xi }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var dx = [
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
  ka = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  cv = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  Rg = function (t) {
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
      _ = te(t, dx),
      y = m.useState(!1),
      k = J(y, 2),
      w = k[0],
      S = k[1],
      x = m.useState(!1),
      A = J(x, 2),
      D = A[0],
      P = A[1],
      M = u === l || c !== void 0,
      q = w || M || D,
      L = q && b,
      $ = !b || q || (b && !D),
      z = m.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      V = m.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      G = m.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      K = m.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      B = O.createElement(
        _i,
        { xcss: cv.headCellContainer, onMouseEnter: G, onMouseLeave: K, onFocus: z, onBlur: V },
        O.createElement(
          lx,
          { content: c === Or ? p : g },
          O.createElement(
            Mh,
            { onClick: s, xcss: ka.buttonWrapper, "aria-roledescription": h },
            O.createElement(
              Ko,
              { xcss: L ? ka.hideIconHeaderWrapper : ka.visibleHeaderWrapper },
              O.createElement("span", { className: R([cv.text]) }, r),
            ),
            $ &&
              O.createElement(
                Ko,
                { xcss: q ? ka.sortIconVisibleWrapper : ka.sortIconHiddenWrapper },
                c === Or
                  ? O.createElement(YO, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(KO, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      zO,
      ee(
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
  fx = ["isRanking", "refHeight", "refWidth"];
function vx(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Pg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Pg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pg = function () {
    return !!e;
  })();
}
var px = (function (e) {
    function t() {
      return (ge(this, t), vx(this, t, arguments));
    }
    return (
      Ze(t, e),
      be(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = te(n, fx),
              c = By(a, o);
            return O.createElement(Rg, ee({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(O.Component),
  hx = VO(px),
  gx = ["cells"],
  bx = [
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
function _x(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Ag() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Ag() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ag = function () {
    return !!e;
  })();
}
var mx = (function (e) {
    function t(r) {
      var n;
      return (ge(this, t), (n = _x(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ze(t, e),
      be(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            qo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              qo(n.sortKey, n.head);
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
            var g = d ? hx : Rg,
              f = o.cells,
              h = te(o, gx);
            return O.createElement(
              qO,
              ee({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              O.createElement(
                "tr",
                null,
                f.map(function (b, _) {
                  var y = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    S = b.content,
                    x = b.descendingSortTooltip,
                    A = b.isIconOnlyHeader,
                    D = b.isSortable,
                    P = b.key,
                    M = b.shouldTruncate,
                    q = b.testId,
                    L = b.width,
                    $ = te(b, bx),
                    z = "head-cell-".concat(_),
                    V = function () {
                      (n.setState({ activeSortButtonId: z }), D && u(b)());
                    };
                  return O.createElement(
                    g,
                    ee(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: A,
                        isSortable: !!D,
                        isRanking: l,
                        key: P || _,
                        headCellId: z,
                        activeSortButtonId: v,
                        onClick: V,
                        testId: q || p,
                        shouldTruncate: M,
                        sortOrder: P === i ? c : void 0,
                        width: L,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: x,
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
  yx = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function wx(e) {
  switch (e) {
    case Vo:
      return Or;
    case Or:
      return Vo;
    default:
      return e;
  }
}
var kx = function (t) {
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
      k = y === void 0 ? Ae : y,
      w = t.onSort,
      S = w === void 0 ? Ae : w,
      x = t.page,
      A = x === void 0 ? 1 : x,
      D = t.emptyView,
      P = t.isRankable,
      M = P === void 0 ? !1 : P,
      q = t.isRankingDisabled,
      L = q === void 0 ? !1 : q,
      $ = t.onRankStart,
      z = $ === void 0 ? Ae : $,
      V = t.onRankEnd,
      G = V === void 0 ? Ae : V,
      K = t.loadingSpinnerSize,
      B = t.paginationi18n,
      j =
        B === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : B,
      _e = m.useState(!1),
      ie = J(_e, 2),
      ce = ie[0],
      fe = ie[1],
      pe = m.useRef(null),
      ue = Zr({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Te = Zr({
        fn: G,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    m.useEffect(
      function () {
        (qo(i, n), Fy(n));
      },
      [i, n],
    );
    var ke = function (Oe) {
        return function () {
          var De = Oe.key;
          if (De) {
            if (ue && M && De === i && c === Vo) {
              ue({ key: null, sortOrder: null, item: Oe });
              return;
            }
            var kt = De !== i ? Or : wx(c);
            ue && ue({ key: De, item: Oe, sortOrder: kt });
          }
        };
      },
      Me = function (Oe, De) {
        k(Oe, De);
      },
      ve = function (Oe) {
        (fe(!0), z(Oe));
      },
      Ne = function (Oe) {
        (fe(!1), Te(Oe));
      },
      Xt = function () {
        return K || (ih(o || [], A, _).length > 2 ? Go : t0);
      },
      ft = function () {
        return g ? O.createElement(s0, { testId: l }) : D && O.createElement(c0, { testId: l }, D);
      },
      Ce = o && o.length,
      Re,
      wt = !1;
    (d && Number.isInteger(d) && _ && Ce && Ce <= d
      ? ((Re = Math.ceil(d / _)), (wt = !0))
      : (Re = Ce && _ ? Math.ceil(Ce / _) : 0),
      (Re = Re < 1 ? 1 : Re));
    var Qe = A > Re ? Re : A,
      $e = !!Ce,
      Fe = Xt(),
      Ie = ft();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        _h,
        {
          isLoading: g && $e,
          spinnerSize: Fe,
          targetRef: function () {
            return pe.current;
          },
          testId: l,
          loadingLabel: s,
        },
        O.createElement(
          a0,
          { isFixedSize: h, "aria-label": p, hasDataRow: $e, testId: l, isLoading: g },
          !!r && O.createElement(o0, null, r),
          n &&
            O.createElement(mx, {
              head: n,
              onSort: ke,
              sortKey: i,
              sortOrder: c,
              isRanking: ce,
              isRankable: M,
              testId: l,
            }),
          $e &&
            O.createElement(Sx, {
              ref: pe,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: c,
              rowsPerPage: _,
              page: Qe,
              isFixedSize: h || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: wt,
              testId: l,
              isRankable: M,
              isRanking: ce,
              onRankStart: ve,
              onRankEnd: Ne,
              isRankingDisabled: L || g || !1,
            }),
        ),
      ),
      Re <= 1
        ? null
        : O.createElement(
            i0,
            { testId: l },
            O.createElement(BO, {
              value: Qe,
              onChange: Me,
              total: Re,
              i18n: j,
              isDisabled: g,
              testId: l,
            }),
          ),
      !$e &&
        Ie &&
        O.createElement(gh, { isLoading: g, spinnerSize: Go, testId: l, loadingLabel: s }, Ie),
    );
  },
  Ox = m.lazy(function () {
    return ep(
      () => import("./body-BvWIqrS5.js"),
      __vite__mapDeps([2, 3, 1, 4, 5]),
      import.meta.url,
    );
  }),
  Sx = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = te(t, yx),
      l = a && !u.sortKey,
      d = m.useState(!1),
      p = J(d, 2),
      v = p[0],
      g = p[1];
    m.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = O.createElement(O0, ee({ ref: r }, u));
    return l && v
      ? O.createElement(
          E0,
          { fallback: f },
          O.createElement(
            m.Suspense,
            { fallback: f },
            O.createElement(
              Ox,
              ee({ ref: r }, u, {
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
function Ex(e, t, r) {
  return (
    (t = X(t)),
    Xe(e, Ig() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function Ig() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ig = function () {
    return !!e;
  })();
}
var Dg = (function (e) {
  function t() {
    var r;
    ge(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Ex(this, t, [].concat(a))),
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
        var p = Ly(i, u, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    Ze(t, e),
    be(t, [
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
            x = s.testId,
            A = s.label;
          return O.createElement(kx, {
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
            testId: x,
            label: A,
          });
        },
      },
    ])
  );
})(O.Component);
C(Dg, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ae,
  onSort: Ae,
  rowsPerPage: 1 / 0,
});
const xx = (e) => {
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
  Cx = (e) => ({ cells: xx() });
function Rx(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && je(r) === "object" && (r.current = t);
    });
  };
}
var jg = m.createContext(void 0),
  Px = function () {
    var t = m.useContext(jg);
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
function Vt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Ax = 9;
function uv(e) {
  e.keyCode !== Ax && Vt(e);
}
function Ix(e, t) {
  return e
    ? {
        onMouseDownCapture: Vt,
        onMouseUpCapture: Vt,
        onKeyDownCapture: uv,
        onKeyUpCapture: uv,
        onTouchStartCapture: Vt,
        onTouchEndCapture: Vt,
        onPointerDownCapture: Vt,
        onPointerUpCapture: Vt,
        onClickCapture: Vt,
        onClick: Vt,
      }
    : t;
}
function Dx(e) {
  return e === "compact" ? "small" : "medium";
}
function jx(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function Tx(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(Cc, {
    size: Dx(r),
    appearance: jx({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var Mx = [
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
  Nx = ["className", "css", "as", "style"],
  lv = ", Loading",
  Se = {
    base: "_2rkofajl _11c82smr _v5649dqc _189eidpf _1rjc12x7 _1e0c116y _vchhusvi _1bsb1wug _p12f1osq _kqswh2mm _4cvr1q9y _1bah1h6o _gy1p1b66 _1o9zidpf _4t3iviql _k48p1wq8 _y4tiutpp _bozgutpp _y3gn1h6o _s7n4nkob _14mj1kw7 _9v7aze3t _1tv3nqa1 _39yqe4h9 _11fnglyw _18postnw",
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
    buttonIconBefore: "_bozgu2gc",
    buttonIconAfter: "_y4tiu2gc",
    splitButton: "_g0pbb4wl",
    loadingOverlay:
      "_1reo15vq _18m915vq _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _u7coze3t _152tze3t _rjxpze3t _1e02ze3t",
    navigationSplitButton: "_1bsb1tcg _bfhksm61 _y4ti12x7 _bozg12x7",
  },
  Ns = {
    root: "_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr31dpa _30l3azsu _1di6fcek _9h8hazsu",
    disabled: "_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28",
  },
  dv = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  fv = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  vv = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  pv = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  hv = {
    root: "_bfhkqtfy _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr34mfv _30l3azsu _1di619qy _9h8hazsu",
  },
  $r = {
    root: "_bfhk15s3 _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  Fx = O.forwardRef(function (e, t) {
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
      x = e.ariaLabel,
      A = e.ariaLabelledBy,
      D = e.children,
      P = e.interactionName,
      M = e.onClick,
      q = e.onMouseDown,
      L = e.onMouseDownCapture,
      $ = e.onMouseUp,
      z = e.onMouseUpCapture,
      V = e.onKeyDown,
      G = e.onKeyDownCapture,
      K = e.onKeyUp,
      B = e.onKeyUpCapture,
      j = e.onTouchStart,
      _e = e.onTouchStartCapture,
      ie = e.onTouchEnd,
      ce = e.onTouchEndCapture,
      fe = e.onPointerDown,
      pe = e.onPointerDownCapture,
      ue = e.onPointerUp,
      Te = e.onPointerUpCapture,
      ke = e.onClickCapture,
      Me = e.testId,
      ve = e.analyticsContext,
      Ne = e.componentName,
      Xt = e.role,
      ft = e.onMouseOver,
      Ce = e.onMouseOut,
      Re = e.onFocus,
      wt = e.onBlur,
      Qe = e.onMouseMove,
      $e = e.type,
      Fe = te(e, Mx),
      Ie = m.useRef(null),
      re = Px(),
      Oe = Lh(),
      De = !!re,
      kt = re?.isNavigationSplitButton || !1,
      Ar = re?.appearance === "default",
      le = Ar ? "subtle" : r || re?.appearance || "default",
      Ft = re?.spacing || S,
      Ve = re?.isDisabled || i,
      Bt = !Ve && !s,
      ro = Ve || s,
      vt = l && !Ve;
    (eg(Ie, a), Fe.className, Fe.css, Fe.as, Fe.style);
    var no = te(Fe, Nx);
    return O.createElement(
      Mh,
      ee(
        {},
        no,
        {
          componentName: Ne || "button",
          analyticsContext: ve,
          role: Xt,
          ref: Rx([Ie, t]),
          xcss: Dh(
            Se.base,
            at("platform-dst-shape-theme-default") && Se.baseT26Shape,
            le === "default" && Ns.root,
            le === "default" && Bt && Ns.interactive,
            le === "primary" && dv.root,
            le === "primary" && Bt && dv.interactive,
            le === "warning" && fv.root,
            le === "warning" && Bt && fv.interactive,
            le === "danger" && vv.root,
            le === "danger" && Bt && vv.interactive,
            le === "discovery" && pv.root,
            le === "discovery" && Bt && pv.interactive,
            le === "subtle" && hv.root,
            le === "subtle" && Bt && hv.interactive,
            Se.linkDecorationUnset,
            vt && $r.root,
            vt && De && $r.insideSplitButton,
            vt && Bt && $r.interactive,
            vt && le === "danger" && $r.danger,
            vt && le === "warning" && $r.warning,
            vt && le === "discovery" && $r.discovery,
            Ve && Se.disabled,
            Ve && le !== "default" && le !== "subtle" && Se.sharedDisabled,
            Ve && le === "default" && Ns.disabled,
            g && !De && Se.circle,
            Ft === "compact" && Se.spacingCompact,
            Ft === "compact" && at("platform-dst-shape-theme-default") && Se.spacingCompactT26Shape,
            h && Se.buttonIconBefore,
            k && Se.fullWidth,
            _ && Se.buttonIconAfter,
            p && Se.iconButton,
            p && Ft === "compact" && Se.iconButtonCompact,
            s && Se.loading,
            De && Se.splitButton,
            kt && Se.navigationSplitButton,
          ),
          isDisabled: at("platform-dst_fix_not_focusable_loading_button") ? Ve : ro,
        },
        at("platform-dst_fix_not_focusable_loading_button") && { "aria-live": "polite" },
        s && at("platform-dst_fix_not_focusable_loading_button") && { "aria-disabled": !0 },
        {
          "aria-label": s && x && !A ? "".concat(x, " ").concat(lv) : x,
          "aria-labelledby": s && A ? "".concat(A, " ").concat(Oe) : A,
          onClick: M,
        },
        Ix(ro, {
          onMouseDownCapture: L,
          onMouseUpCapture: z,
          onKeyDownCapture: G,
          onKeyUpCapture: B,
          onTouchStartCapture: _e,
          onTouchEndCapture: ce,
          onPointerDownCapture: pe,
          onPointerUpCapture: Te,
          onClickCapture: ke,
        }),
        {
          testId: Me,
          onMouseOver: ft,
          onFocus: Re,
          onMouseMove: Qe,
          onBlur: wt,
          type: $e,
          interactionName: P,
          onMouseDown: q,
          onMouseUp: $,
          onKeyDown: V,
          onMouseOut: Ce,
          onKeyUp: K,
          onTouchStart: j,
          onTouchEnd: ie,
          onPointerDown: fe,
          onPointerUp: ue,
        },
      ),
      O.createElement(
        jg.Provider,
        { value: void 0 },
        D,
        s &&
          O.createElement(
            "span",
            { className: R([Se.loadingOverlay]) },
            Tx({ spacing: Ft, appearance: le, isDisabled: Ve, isSelected: vt, testId: Me }),
          ),
        s && (A || !x) && O.createElement(yi, { id: Oe }, lv),
      ),
    );
  }),
  Vr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  Fs = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: R([
          Vr.common,
          a === "text" && Vr.text,
          a === "icon" && Vr.icon,
          o && Vr.fade,
          i === "before" && Vr.beforeIcon,
          i === "after" && Vr.afterIcon,
        ]),
      },
      r,
    );
  };
function Bx(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var gv = function (t) {
    var r = t.icon,
      n = Bx(r),
      a = {
        label: "",
        color: "currentColor",
        size: at("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  Lx = [
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
  Ux = ["className", "css", "as", "style"],
  Kc = O.memo(
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
        x = t.onPointerUpCapture,
        A = t.onTouchEndCapture,
        D = t.onTouchStartCapture,
        P = t.shouldFitContainer,
        M = t.spacing,
        q = t.testId,
        L = t.type,
        $ = L === void 0 ? "button" : L,
        z = te(t, Lx);
      (z.className, z.css, z.as, z.style);
      var V = te(z, Ux);
      return O.createElement(
        Fx,
        ee(
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
            spacing: M,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: h,
            onClickCapture: b,
            onKeyDownCapture: _,
            onKeyUpCapture: y,
            onMouseDownCapture: k,
            onMouseUpCapture: w,
            onPointerDownCapture: S,
            onPointerUpCapture: x,
            onTouchStartCapture: D,
            onTouchEndCapture: A,
            testId: q,
            componentName: "Button",
            type: $,
            interactionName: d,
          },
          V,
        ),
        O.createElement(
          m.Fragment,
          null,
          l &&
            O.createElement(
              Fs,
              { type: "icon", position: "before", isLoading: g },
              O.createElement(gv, { icon: l }),
            ),
          s && O.createElement(Fs, { isLoading: g }, s),
          u &&
            O.createElement(
              Fs,
              { type: "icon", position: "after", isLoading: g },
              O.createElement(gv, { icon: u }),
            ),
        ),
      );
    }),
  );
Kc.displayName = "Button";
const _o = hi((e) => {
  const { stateStore: t } = gi(),
    r = Cx();
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
      return E.jsxs("div", { children: ["Unsupported $", e.type] });
  }
  return n
    ? E.jsx("div", {
        children: E.jsxs("div", {
          children: [
            E.jsx(Dg, {
              head: r,
              rows: [n].map((a, o) => {
                const i = [
                  { key: "id", content: a.id },
                  { key: "testDateColumn", content: String(a.testDateColumn) },
                  { key: "testNameColumn", content: a.testNameColumn },
                  { key: "version", content: a.version !== void 0 ? String(a.version) : "EMPTY" },
                  {
                    key: "action",
                    content: E.jsx("div", {
                      children: E.jsx(Kc, {
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
              emptyView: E.jsx("div", { children: "Table is EMPTY" }),
              isRankable: !0,
            }),
            E.jsx("br", {}),
            E.jsx("br", {}),
          ],
        }),
      })
    : E.jsx("div", { children: "Try update first" });
});
function qx(e) {
  return ah(e) || sh(e) || Ec(e) || oh();
}
var Tg = m.createContext(null),
  Mg = m.createContext(null),
  Ng = m.createContext(null);
function bv(e, t) {
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
function zx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bv(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $x = { componentName: "tabs", packageName: "@atlaskit/tabs", packageVersion: "18.3.0" },
  _v = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      m.createElement(
        Ng.Provider,
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
  Vx = function (t) {
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
      p = J(d, 2),
      v = p[0],
      g = p[1],
      f = a === void 0 ? v : a,
      h = m.Children.toArray(u).filter(function (A) {
        return !!A;
      }),
      b = qx(h),
      _ = b[0],
      y = b.slice(1),
      k = m.useRef(new Set([f]));
    k.current.has(f) || k.current.add(f);
    var w = m.useCallback(
        function (A, D) {
          (i && i(A, D), g(A));
        },
        [i],
      ),
      S = Zr(zx({ fn: w, action: "clicked", analyticsData: s }, $x)),
      x = n
        ? _v({ tabPanel: y[f], index: f, isSelected: !0, tabsId: c })
        : Array.from(k.current).map(function (A) {
            return _v({ tabPanel: y[A], index: A, isSelected: A === f, tabsId: c });
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
      m.createElement(Mg.Provider, { value: { selected: f, onChange: S, tabsId: c } }, _),
      m.createElement(m.Fragment, null, x),
    );
  },
  Gx = function () {
    var t = m.useContext(Tg);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  Hx = function () {
    var t = m.useContext(Mg);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  Kx = function () {
    var t = m.useContext(Ng);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  Oa = function (t) {
    var r = t.children,
      n = t.testId,
      a = Kx(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      u = a.tabIndex;
    return O.createElement(
      Ic,
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
  mo = m.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = Gx(),
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
      Ic,
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
      O.createElement(Th, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  Wx = function (t) {
    var r = t.children,
      n = Hx(),
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
            Tg.Provider,
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
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1mrt _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1mrt _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz12s7 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": tr("var(--ds-text-subtle, ".concat(Ho, ")")),
          "--_kkbq40": tr("var(--ds-text-subtle, ".concat(ls, ")")),
          "--_71dbsd": tr("var(--ds-text, ".concat(x0, ")")),
          "--_1hfkvbo": tr("var(--ds-text-selected, ".concat(ls, ")")),
          "--_1c11uqn": tr("3px solid ".concat("var(--ds-border-selected, ".concat(ls, ")"))),
          "--_lvpq93": tr("var(--ds-border, ".concat(R0, ")")),
        },
      },
      s.map(function (v, g) {
        return p({ tab: v, index: g, isSelected: g === o });
      }),
    );
  },
  Fg = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(Fg || {});
const Jx = Object.keys(Fg).filter((e) => isNaN(Number(e))),
  yo = ({ children: e, testId: t }) =>
    E.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: zt("color.background.neutral"),
        borderRadius: "3px",
        color: zt("color.text.subtlest"),
        font: zt("font.heading.xxlarge"),
        marginBlockEnd: zt("space.100", "8px"),
        marginBlockStart: zt("space.200", "16px"),
        paddingBlockEnd: zt("space.400", "32px"),
        paddingBlockStart: zt("space.400", "32px"),
        paddingInlineEnd: zt("space.400", "32px"),
        paddingInlineStart: zt("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function Yx() {
  const { stateStore: e } = gi();
  return e.isLoading
    ? "loading...."
    : E.jsxs("div", {
        children: [
          E.jsxs("div", {
            className: "reset-section",
            children: [
              E.jsx("h2", { children: "Reset All" }),
              E.jsx("p", {
                children:
                  "Click the button below to revert all test entities to their initial state. This removes any changes you've made during testing.",
              }),
              E.jsx("br", {}),
              E.jsxs(Kc, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await Ma.invoke("clearAll", {
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
          E.jsx("br", {}),
          E.jsx("p", {
            children:
              "Use the tabs below to navigate between different examples of optimistic locking. Each tab demonstrates a different versioning approach, along with instructions on how to test the locking behavior.",
          }),
          E.jsx("br", {}),
          E.jsxs(Vx, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              E.jsxs(Wx, {
                children: [
                  " ",
                  Jx.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return E.jsx(
                          mo,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return E.jsx(mo, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return E.jsx(
                          mo,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return E.jsx(
                          mo,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              E.jsx(Oa, { children: E.jsx(E.Fragment, {}) }),
              E.jsx(Oa, {
                children: E.jsx(yo, {
                  children: E.jsxs("div", {
                    children: [
                      E.jsx("h2", { children: "Entity Without Version Column (No Locking)" }),
                      E.jsx("p", {
                        children:
                          "This entity does not use any versioning or optimistic locking mechanism. When two users open the same record in different browser tabs and both make changes, the last update simply overwrites the previous changes. There is no conflict detection in place.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the second tab, also change a field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ".",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "Both updates will succeed, and the second update will overwrite the first one.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(_o, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              E.jsx(Oa, {
                children: E.jsx(yo, {
                  children: E.jsxs("div", {
                    className: "entity-section",
                    children: [
                      E.jsx("h2", { children: "Entity with Numeric Version Column" }),
                      E.jsx("p", {
                        children:
                          "This entity uses an integer field for optimistic locking. When a user updates the record, the version number increments. A second user with an outdated version will encounter an error upon saving.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ". This succeeds and increments the version number.",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "In the second tab, attempt to update the record without refreshing.",
                          }),
                          E.jsx("li", {
                            children:
                              "The update will fail with an optimistic locking error, indicating the record was modified elsewhere.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(_o, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              E.jsx(Oa, {
                children: E.jsx(yo, {
                  children: E.jsxs("div", {
                    className: "entity-section",
                    children: [
                      E.jsx("h2", { children: "Entity with DateTime-Based Version Column" }),
                      E.jsx("p", {
                        children:
                          "This entity uses a datetime field for optimistic locking. Whenever the record is updated, the date-based version changes. Any subsequent update with the old date value will fail.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, change any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ". This sets or updates the date-based version.",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "In the second tab, try to update the record without refreshing.",
                          }),
                          E.jsx("li", {
                            children:
                              "The second update will fail with an optimistic locking error because the version date has changed.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(_o, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              E.jsx(Oa, {
                children: E.jsx(yo, {
                  children: E.jsxs("div", {
                    className: "entity-section",
                    children: [
                      E.jsx("h2", { children: "Entity with Timestamp-Based Version Column" }),
                      E.jsx("p", {
                        children:
                          "This entity uses a timestamp column for optimistic locking. Whenever the record is updated, the timestamp is refreshed. Any subsequent update attempts with an outdated timestamp will fail.",
                      }),
                      E.jsx("h3", { children: "How to Test" }),
                      E.jsxs("ol", {
                        children: [
                          E.jsx("li", {
                            children:
                              "Open this entity's update form in two separate browser tabs.",
                          }),
                          E.jsxs("li", {
                            children: [
                              "In the first tab, modify any field and click ",
                              E.jsx("strong", { children: "Update" }),
                              ". This refreshes the timestamp.",
                            ],
                          }),
                          E.jsx("li", {
                            children:
                              "In the second tab, try to update the record without reloading the page.",
                          }),
                          E.jsx("li", {
                            children:
                              "The second update will fail, indicating that another process has already changed the record.",
                          }),
                        ],
                      }),
                      E.jsx("br", {}),
                      E.jsx(_o, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const Xx = hi(Yx),
  Zx = hi((e) => {
    const { stateStore: t } = gi(),
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
        const d = await Ma.invoke("update", { data: l, objectName: e.type });
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
        return E.jsxs("div", { children: ["Unsupported $", e.type] });
    }
    return E.jsxs("div", {
      children: [
        E.jsx("div", {
          children: E.jsx("button", {
            onClick: async () => {
              try {
                t.loading();
                const u = await Ma.invoke("fetchOrCreateIfNotExists");
                t.saveResponse(u);
              } finally {
                t.stopLoading();
              }
              t.saveState("ROOT");
            },
            children: "Back to main",
          }),
        }),
        E.jsx("br", {}),
        E.jsxs("form", {
          onSubmit: c,
          children: [
            E.jsxs(
              "div",
              {
                children: [
                  E.jsx("label", { htmlFor: "testNameColumn", children: "Name" }),
                  E.jsx("br", {}),
                  E.jsx("input", {
                    type: "text",
                    id: "testNameColumn",
                    name: "testNameColumn",
                    defaultValue: s.testNameColumn,
                    onChange: i,
                  }),
                  E.jsx("br", {}),
                ],
              },
              "testNameColumn",
            ),
            E.jsxs(
              "div",
              {
                children: [
                  E.jsx("label", { htmlFor: "testDateColumn", children: "dateTime" }),
                  E.jsx("br", {}),
                  E.jsx("input", {
                    type: "datetime-local",
                    id: "testDateColumn",
                    name: "testDateColumn",
                    defaultValue: String(s.testDateColumn),
                    onChange: i,
                  }),
                  E.jsx("br", {}),
                ],
              },
              "testDateColumn",
            ),
            E.jsx("br", {}),
            E.jsx("input", {
              type: "submit",
              value: "Submit",
              disabled: Object.keys(a).length === 0,
            }),
          ],
        }),
        E.jsx("br", {}),
        E.jsx("br", {}),
        r
          ? E.jsxs("div", {
              children: [E.jsx("p", { children: "STATUS:" }), E.jsxs("b", { children: [" ", r] })],
            })
          : null,
      ],
    });
  });
function Qx() {
  const { stateStore: e } = gi();
  if (
    (m.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await Ma.invoke("fetchOrCreateIfNotExists");
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
      return E.jsx(Xx, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return E.jsx(Zx, { type: e.state });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const eC = hi(Qx),
  tC = document.getElementById("root"),
  rC = Ug.createRoot(tC),
  mv = () => {
    rC.render(E.jsx(th, { ...rh, children: E.jsx(eC, {}) }));
  };
Ma.view.theme
  .enable()
  .then(() => {
    mv();
  })
  .catch((e) => {
    (console.error(e.message), mv());
  });
export {
  O as R,
  b0 as T,
  Ze as _,
  be as a,
  ac as b,
  ge as c,
  Xe as d,
  X as e,
  J as f,
  C as g,
  te as h,
  mi as i,
  Ge as j,
  ee as k,
  k1 as l,
  Kt as m,
  Nt as n,
  R as o,
  h0 as p,
  By as q,
  m as r,
  f0 as s,
  VO as w,
};
