const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-BCqYYRNo.js",
      "./lodash-vendor-Dv-o4pqD.js",
      "./custom-theme-BNcP7vBe.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./client-core-vendor-KlielV5i.js",
      "./body-BLJn5Eu_.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as yr, a as Yo, c as ib } from "./react-dom-vendor--YlRhZCI.js";
import { g as Qt, a as Rv, r as sb } from "./lodash-vendor-Dv-o4pqD.js";
import { r as Rt, s as Xe } from "./client-core-vendor-KlielV5i.js";
function cb(e, t) {
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
  sn = {};
var nu;
function ub() {
  if (nu) return sn;
  nu = 1;
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
  return ((sn.Fragment = r), (sn.jsx = i), (sn.jsxs = i), sn);
}
var au;
function lb() {
  return (au || ((au = 1), (Ri.exports = ub())), Ri.exports);
}
var N = lb(),
  _ = yr();
const E = Qt(_),
  ou = cb({ __proto__: null, default: E }, [_]);
var Ai = {},
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
function Av(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Bs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Ro = function () {
  return (
    (Ro =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Ro.apply(this, arguments)
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
function jv(e, t, r, n) {
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
function Tv(e, t, r, n, a, o) {
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
function Dv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function Fv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Lv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function Bv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Nv(e, t, r, n) {
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
var Jo = Object.create
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
function qv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Jo(t, e, r);
}
function Ao(e) {
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
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(yc(arguments[t]));
  return e;
}
function zv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
  return n;
}
function Vv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Vr(e) {
  return this instanceof Vr ? ((this.v = e), this) : new Vr(e);
}
function Gv(e, t, r) {
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
    v.value instanceof Vr ? Promise.resolve(v.value.v).then(l, d) : p(o[0][2], v);
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
function Hv(e) {
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
function Wv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof Ao == "function" ? Ao(e) : e[Symbol.iterator]()),
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
function Kv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var db = Object.create
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
function Yv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Ns(e), n = 0; n < r.length; n++) r[n] !== "default" && Jo(t, e, r[n]);
  return (db(t, e), t);
}
function Jv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xv(e, t, r, n) {
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
function Qv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function ep(e, t, r) {
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
var fb =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function tp(e) {
  function t(o) {
    ((e.error = e.hasError ? new fb(o, e.error, "An error was suppressed during disposal.") : o),
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
function rp(e, t) {
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
const vb = {
    __extends: Av,
    __assign: Ro,
    __rest: Iv,
    __decorate: jv,
    __param: Mv,
    __esDecorate: Tv,
    __runInitializers: Dv,
    __propKey: Fv,
    __setFunctionName: Lv,
    __metadata: Bv,
    __awaiter: Nv,
    __generator: Uv,
    __createBinding: Jo,
    __exportStar: qv,
    __values: Ao,
    __read: yc,
    __spread: $v,
    __spreadArrays: zv,
    __spreadArray: Vv,
    __await: Vr,
    __asyncGenerator: Gv,
    __asyncDelegator: Hv,
    __asyncValues: Wv,
    __makeTemplateObject: Kv,
    __importStar: Yv,
    __importDefault: Jv,
    __classPrivateFieldGet: Xv,
    __classPrivateFieldSet: Zv,
    __classPrivateFieldIn: Qv,
    __addDisposableResource: ep,
    __disposeResources: tp,
    __rewriteRelativeImportExtension: rp,
  },
  pb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: ep,
        get __assign() {
          return Ro;
        },
        __asyncDelegator: Hv,
        __asyncGenerator: Gv,
        __asyncValues: Wv,
        __await: Vr,
        __awaiter: Nv,
        __classPrivateFieldGet: Xv,
        __classPrivateFieldIn: Qv,
        __classPrivateFieldSet: Zv,
        __createBinding: Jo,
        __decorate: jv,
        __disposeResources: tp,
        __esDecorate: Tv,
        __exportStar: qv,
        __extends: Av,
        __generator: Uv,
        __importDefault: Jv,
        __importStar: Yv,
        __makeTemplateObject: Kv,
        __metadata: Bv,
        __param: Mv,
        __propKey: Fv,
        __read: yc,
        __rest: Iv,
        __rewriteRelativeImportExtension: rp,
        __runInitializers: Dv,
        __setFunctionName: Lv,
        __spread: $v,
        __spreadArray: Vv,
        __spreadArrays: zv,
        __values: Ao,
        default: vb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ne = Rv(pb);
var cn = {},
  iu;
function hb() {
  return (
    iu ||
      ((iu = 1),
      Object.defineProperty(cn, "__esModule", { value: !0 }),
      (cn.NavigationTarget = void 0),
      (cn.NavigationTarget = {
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
    cn
  );
}
var Ii = {},
  ji = {},
  un = {},
  ln = {},
  su;
function ye() {
  if (su) return ln;
  ((su = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.BridgeAPIError = void 0));
  class e extends Error {}
  return ((ln.BridgeAPIError = e), ln);
}
var cu;
function ce() {
  if (cu) return un;
  ((cu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.getCallBridge = void 0));
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
  return ((un.getCallBridge = r), un);
}
var dn = {},
  uu;
function Xo() {
  if (uu) return dn;
  ((uu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.withRateLimiter = void 0));
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
  return ((dn.withRateLimiter = t), dn);
}
var lu;
function gb() {
  return (
    lu ||
      ((lu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ce(),
          r = ye(),
          n = Xo(),
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
function Ha() {
  return (
    du ||
      ((du = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(gb(), e));
      })(Ii)),
    Ii
  );
}
var Mi = {},
  fn = {},
  Ti = {},
  fu;
function np() {
  return (
    fu ||
      ((fu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ce(),
          r = ye(),
          n = Xo(),
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
              m = { ...(f ? h : b) };
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
function bb() {
  if (vu) return fn;
  ((vu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.invokeRemote = void 0));
  const e = np(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((fn.invokeRemote = t), fn);
}
var vn = {},
  pu;
function mb() {
  if (pu) return vn;
  ((pu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.invokeService = void 0));
  const e = np(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((vn.invokeService = t), vn);
}
var hu;
function yb() {
  return (
    hu ||
      ((hu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(bb(), e), t.__exportStar(mb(), e));
      })(Mi)),
    Mi
  );
}
var Di = {},
  pn = {},
  hn = {},
  gu;
function _b() {
  if (gu) return hn;
  ((gu = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.submit = void 0));
  const e = ce(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((hn.submit = n), hn);
}
var gn = {},
  bu;
function wb() {
  if (bu) return gn;
  ((bu = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.close = void 0));
  const e = ce(),
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
  return ((gn.close = n), gn);
}
var bn = {},
  mu;
function kb() {
  if (mu) return bn;
  ((mu = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.open = void 0));
  const e = ce(),
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
  return ((bn.open = n), bn);
}
var mn = {},
  yu;
function Ob() {
  if (yu) return mn;
  ((yu = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.refresh = void 0));
  const e = ce(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((mn.refresh = n), mn);
}
var yn = {},
  _u;
function Eb() {
  if (_u) return yn;
  ((_u = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.createHistory = void 0));
  const t = (0, ce().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((yn.createHistory = r), yn);
}
var _n = {},
  Fi = {},
  Dt = {},
  wu;
function ap() {
  return (
    wu ||
      ((wu = 1),
      Object.defineProperty(Dt, "__esModule", { value: !0 }),
      (Dt.FORGE_SUPPORTED_LOCALE_CODES =
        Dt.I18N_BUNDLE_FOLDER_NAME =
        Dt.I18N_INFO_FILE_NAME =
          void 0),
      (Dt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Dt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Dt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Dt
  );
}
var ar = {},
  ku;
function Sb() {
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
var wn = {},
  Li = {},
  Ou;
function op() {
  return (
    Ou ||
      ((Ou = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Ne.__importDefault(sb()),
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
      })(Li)),
    Li
  );
}
var Eu;
function xb() {
  if (Eu) return wn;
  ((Eu = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.Translator = void 0));
  const e = op();
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
  return ((wn.Translator = t), wn);
}
var kn = {},
  Su;
function Pb() {
  if (Su) return kn;
  ((Su = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.ensureLocale = void 0));
  const e = ap(),
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
  return ((kn.ensureLocale = a), kn);
}
var Bi = {},
  xu;
function Cb() {
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
      })(Bi)),
    Bi
  );
}
var Ni = {},
  Pu;
function Rb() {
  return (Pu || ((Pu = 1), Object.defineProperty(Ni, "__esModule", { value: !0 })), Ni);
}
var Cu;
function ip() {
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
        (t.__exportStar(ap(), e),
          t.__exportStar(Sb(), e),
          t.__exportStar(xb(), e),
          t.__exportStar(Pb(), e));
        var r = op();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Cb();
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
          t.__exportStar(Rb(), e));
      })(Fi)),
    Fi
  );
}
var Ru;
function Ab() {
  if (Ru) return _n;
  ((Ru = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.getContext = void 0));
  const e = ce(),
    t = ip(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((_n.getContext = n), _n);
}
var On = {},
  Au;
function Ib() {
  if (Au) return On;
  ((Au = 1),
    Object.defineProperty(On, "__esModule", { value: !0 }),
    (On.changeWindowTitle = void 0));
  const e = ce(),
    t = ye(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((On.changeWindowTitle = n), On);
}
var En = {},
  Iu;
function jb() {
  if (Iu) return En;
  ((Iu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.theme = void 0));
  const t = (0, ce().getCallBridge)();
  return ((En.theme = { enable: () => t("enableTheming") }), En);
}
var Sn = {},
  xn = {},
  Ui = {},
  or = {},
  ju;
function sp() {
  if (ju) return or;
  ((ju = 1),
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
var Mu;
function Mb() {
  return (
    Mu ||
      ((Mu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = sp(),
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
      })(Ui)),
    Ui
  );
}
var Tu;
function cp() {
  if (Tu) return xn;
  ((Tu = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.events = void 0));
  const e = ce(),
    t = Mb(),
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
  return ((xn.events = { emit: a, on: o, emitPublic: i, onPublic: s }), xn);
}
var Du;
function Tb() {
  if (Du) return Sn;
  ((Du = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.emitReadyEvent = void 0));
  const e = cp(),
    t = fp(),
    n = (0, ce().getCallBridge)(),
    a = "EXTENSION_READY",
    o = async () => {
      const i = await t.view.getContext();
      await e.events.emit(a, { localId: i.localId });
      try {
        await n("emitReadyEvent");
      } catch {}
    };
  return ((Sn.emitReadyEvent = o), Sn);
}
const Db = "modulepreload",
  Fb = function (e, t) {
    return new URL(e, t).href;
  },
  Fu = {},
  ze = function (t, r, n) {
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
          if (((l = Fb(l, n)), l in Fu)) return;
          Fu[l] = !0;
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
            ((v.rel = d ? "stylesheet" : Db),
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
var Pn = {},
  qi = {},
  Cn = {},
  oo = {},
  Lu;
function up() {
  if (Lu) return oo;
  ((Lu = 1), Object.defineProperty(oo, "__esModule", { value: !0 }), (oo.default = r));
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
  return oo;
}
var Cr = {},
  Rn = {},
  An = {},
  Bu;
function Lb() {
  if (Bu) return An;
  ((Bu = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((An.default = e), An);
}
var Nu;
function Zo() {
  if (Nu) return Rn;
  ((Nu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
  var e = t(Lb());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((Rn.default = n), Rn);
}
var Uu;
function Qo() {
  if (Uu) return Cr;
  ((Uu = 1),
    Object.defineProperty(Cr, "__esModule", { value: !0 }),
    (Cr.default = void 0),
    (Cr.unsafeStringify = n));
  var e = t(Zo());
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
var qu;
function Bb() {
  if (qu) return Cn;
  ((qu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  var e = r(up()),
    t = Qo();
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
    const m = h - o + (b - i) / 1e4;
    if (
      (m < 0 && u.clockseq === void 0 && (f = (f + 1) & 16383),
      (m < 0 || h > o) && u.nsecs === void 0 && (b = 0),
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
  var c = s;
  return ((Cn.default = c), Cn);
}
var In = {},
  Wt = {},
  jn = {},
  $u;
function lp() {
  if ($u) return jn;
  (($u = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = t(Zo());
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
var zu;
function dp() {
  if (zu) return Wt;
  ((zu = 1),
    Object.defineProperty(Wt, "__esModule", { value: !0 }),
    (Wt.URL = Wt.DNS = void 0),
    (Wt.default = i));
  var e = Qo(),
    t = r(lp());
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
  return Wt;
}
var Mn = {},
  Vu;
function Nb() {
  if (Vu) return Mn;
  ((Vu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.default = void 0));
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
      const m = (v[b >> 5] >>> (b % 32)) & 255,
        y = parseInt(h.charAt((m >>> 4) & 15) + h.charAt(m & 15), 16);
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
      m = 271733878;
    for (let y = 0; y < v.length; y += 16) {
      const k = f,
        w = h,
        O = b,
        S = m;
      ((f = c(f, h, b, m, v[y], 7, -680876936)),
        (m = c(m, f, h, b, v[y + 1], 12, -389564586)),
        (b = c(b, m, f, h, v[y + 2], 17, 606105819)),
        (h = c(h, b, m, f, v[y + 3], 22, -1044525330)),
        (f = c(f, h, b, m, v[y + 4], 7, -176418897)),
        (m = c(m, f, h, b, v[y + 5], 12, 1200080426)),
        (b = c(b, m, f, h, v[y + 6], 17, -1473231341)),
        (h = c(h, b, m, f, v[y + 7], 22, -45705983)),
        (f = c(f, h, b, m, v[y + 8], 7, 1770035416)),
        (m = c(m, f, h, b, v[y + 9], 12, -1958414417)),
        (b = c(b, m, f, h, v[y + 10], 17, -42063)),
        (h = c(h, b, m, f, v[y + 11], 22, -1990404162)),
        (f = c(f, h, b, m, v[y + 12], 7, 1804603682)),
        (m = c(m, f, h, b, v[y + 13], 12, -40341101)),
        (b = c(b, m, f, h, v[y + 14], 17, -1502002290)),
        (h = c(h, b, m, f, v[y + 15], 22, 1236535329)),
        (f = u(f, h, b, m, v[y + 1], 5, -165796510)),
        (m = u(m, f, h, b, v[y + 6], 9, -1069501632)),
        (b = u(b, m, f, h, v[y + 11], 14, 643717713)),
        (h = u(h, b, m, f, v[y], 20, -373897302)),
        (f = u(f, h, b, m, v[y + 5], 5, -701558691)),
        (m = u(m, f, h, b, v[y + 10], 9, 38016083)),
        (b = u(b, m, f, h, v[y + 15], 14, -660478335)),
        (h = u(h, b, m, f, v[y + 4], 20, -405537848)),
        (f = u(f, h, b, m, v[y + 9], 5, 568446438)),
        (m = u(m, f, h, b, v[y + 14], 9, -1019803690)),
        (b = u(b, m, f, h, v[y + 3], 14, -187363961)),
        (h = u(h, b, m, f, v[y + 8], 20, 1163531501)),
        (f = u(f, h, b, m, v[y + 13], 5, -1444681467)),
        (m = u(m, f, h, b, v[y + 2], 9, -51403784)),
        (b = u(b, m, f, h, v[y + 7], 14, 1735328473)),
        (h = u(h, b, m, f, v[y + 12], 20, -1926607734)),
        (f = l(f, h, b, m, v[y + 5], 4, -378558)),
        (m = l(m, f, h, b, v[y + 8], 11, -2022574463)),
        (b = l(b, m, f, h, v[y + 11], 16, 1839030562)),
        (h = l(h, b, m, f, v[y + 14], 23, -35309556)),
        (f = l(f, h, b, m, v[y + 1], 4, -1530992060)),
        (m = l(m, f, h, b, v[y + 4], 11, 1272893353)),
        (b = l(b, m, f, h, v[y + 7], 16, -155497632)),
        (h = l(h, b, m, f, v[y + 10], 23, -1094730640)),
        (f = l(f, h, b, m, v[y + 13], 4, 681279174)),
        (m = l(m, f, h, b, v[y], 11, -358537222)),
        (b = l(b, m, f, h, v[y + 3], 16, -722521979)),
        (h = l(h, b, m, f, v[y + 6], 23, 76029189)),
        (f = l(f, h, b, m, v[y + 9], 4, -640364487)),
        (m = l(m, f, h, b, v[y + 12], 11, -421815835)),
        (b = l(b, m, f, h, v[y + 15], 16, 530742520)),
        (h = l(h, b, m, f, v[y + 2], 23, -995338651)),
        (f = d(f, h, b, m, v[y], 6, -198630844)),
        (m = d(m, f, h, b, v[y + 7], 10, 1126891415)),
        (b = d(b, m, f, h, v[y + 14], 15, -1416354905)),
        (h = d(h, b, m, f, v[y + 5], 21, -57434055)),
        (f = d(f, h, b, m, v[y + 12], 6, 1700485571)),
        (m = d(m, f, h, b, v[y + 3], 10, -1894986606)),
        (b = d(b, m, f, h, v[y + 10], 15, -1051523)),
        (h = d(h, b, m, f, v[y + 1], 21, -2054922799)),
        (f = d(f, h, b, m, v[y + 8], 6, 1873313359)),
        (m = d(m, f, h, b, v[y + 15], 10, -30611744)),
        (b = d(b, m, f, h, v[y + 6], 15, -1560198380)),
        (h = d(h, b, m, f, v[y + 13], 21, 1309151649)),
        (f = d(f, h, b, m, v[y + 4], 6, -145523070)),
        (m = d(m, f, h, b, v[y + 11], 10, -1120210379)),
        (b = d(b, m, f, h, v[y + 2], 15, 718787259)),
        (h = d(h, b, m, f, v[y + 9], 21, -343485551)),
        (f = o(f, k)),
        (h = o(h, w)),
        (b = o(b, O)),
        (m = o(m, S)));
    }
    return [f, h, b, m];
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
  function s(v, g, f, h, b, m) {
    return o(i(o(o(g, v), o(h, m)), b), f);
  }
  function c(v, g, f, h, b, m, y) {
    return s((g & f) | (~g & h), v, g, b, m, y);
  }
  function u(v, g, f, h, b, m, y) {
    return s((g & h) | (f & ~h), v, g, b, m, y);
  }
  function l(v, g, f, h, b, m, y) {
    return s(g ^ f ^ h, v, g, b, m, y);
  }
  function d(v, g, f, h, b, m, y) {
    return s(f ^ (g | ~h), v, g, b, m, y);
  }
  var p = e;
  return ((Mn.default = p), Mn);
}
var Gu;
function Ub() {
  if (Gu) return In;
  ((Gu = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
  var e = r(dp()),
    t = r(Nb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((In.default = a), In);
}
var Tn = {},
  Dn = {},
  Hu;
function qb() {
  if (Hu) return Dn;
  ((Hu = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Dn.default = t), Dn);
}
var Wu;
function $b() {
  if (Wu) return Tn;
  ((Wu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = n(qb()),
    t = n(up()),
    r = Qo();
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
var Fn = {},
  Ln = {},
  Ku;
function zb() {
  if (Ku) return Ln;
  ((Ku = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
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
        const m = Math.floor(b / 20),
          y = (t(p, 5) + e(m, v, g, f) + h + o[m] + d[b]) >>> 0;
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
  return ((Ln.default = n), Ln);
}
var Yu;
function Vb() {
  if (Yu) return Fn;
  ((Yu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.default = void 0));
  var e = r(dp()),
    t = r(zb());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Fn.default = a), Fn);
}
var Bn = {},
  Ju;
function Gb() {
  if (Ju) return Bn;
  ((Ju = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Bn.default = e), Bn);
}
var Nn = {},
  Xu;
function Hb() {
  if (Xu) return Nn;
  ((Xu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.default = void 0));
  var e = t(Zo());
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
var Zu;
function Wb() {
  return (
    Zu ||
      ((Zu = 1),
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
        var t = l(Bb()),
          r = l(Ub()),
          n = l($b()),
          a = l(Vb()),
          o = l(Gb()),
          i = l(Hb()),
          s = l(Zo()),
          c = l(Qo()),
          u = l(lp());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(qi)),
    qi
  );
}
var Qu;
function Kb() {
  if (Qu) return Pn;
  ((Qu = 1),
    Object.defineProperty(Pn, "__esModule", { value: !0 }),
    (Pn.createAdfRendererIframeProps = void 0));
  const e = Wb(),
    t = async (r, n) => {
      const a = await ze(
          () => import("./index-BCqYYRNo.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = a.default || a,
        i = new URL(document.referrer).origin,
        s = `${i}/forge-apps/adf-renderer`,
        c = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var l, d, p, v, g, f;
          const h = document.getElementById(c),
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
                (g = (v = r.extension) === null || v === void 0 ? void 0 : v.content) === null ||
                g === void 0
                  ? void 0
                  : g.id,
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
            h || "",
          ),
            (f = h?.contentWindow) === null || f === void 0 || f.postMessage(b, i));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: c, src: s, onLoad: u }
      );
    };
  return ((Pn.createAdfRendererIframeProps = t), Pn);
}
var Un = {},
  el;
function Yb() {
  if (el) return Un;
  ((el = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.onClose = void 0));
  const e = ce(),
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
  return ((Un.onClose = n), Un);
}
var tl;
function fp() {
  if (tl) return pn;
  ((tl = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.view = void 0));
  const e = _b(),
    t = wb(),
    r = kb(),
    n = Ob(),
    a = Eb(),
    o = Ab(),
    i = Ib(),
    s = jb(),
    c = Tb(),
    u = Kb(),
    l = Yb();
  return (
    (pn.view = {
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
    pn
  );
}
var rl;
function ei() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(fp(), e));
      })(Di)),
    Di
  );
}
var $i = {},
  qn = {},
  nl;
function Jb() {
  if (nl) return qn;
  ((nl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.router = void 0));
  const t = (0, ce().getCallBridge)(),
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
function Xb() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(Jb(), e));
      })($i)),
    $i
  );
}
var zi = {},
  $n = {},
  ol;
function Zb() {
  if (ol) return $n;
  ((ol = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.Modal = void 0));
  const e = ce(),
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
  return (($n.Modal = a), $n);
}
var il;
function Qb() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(Zb(), e));
      })(zi)),
    zi
  );
}
var st = {},
  ir = {},
  sl;
function em() {
  if (sl) return ir;
  ((sl = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.productFetchApi = ir.remoteFetchApi = void 0));
  const e = sp(),
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
          g = {
            remoteKey: c,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: h,
            statusText: b,
            status: m,
            isAttachment: y,
          } = await i("fetchRemote", g),
          k = y ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(k || null, { headers: h, status: m, statusText: b });
      };
      return { requestRemote: (c, u) => s(c, u) };
    };
  ir.remoteFetchApi = a;
  const o = (i) => {
    const s = async (c, u, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: g } = await n("product", d);
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
          statusText: m,
          status: y,
          isAttachment: k,
        } = await i("fetchProduct", f),
        w = k ? (0, e.base64ToBlob)(h, b["content-type"]) : h;
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
function tm() {
  if (cl) return st;
  cl = 1;
  var e;
  (Object.defineProperty(st, "__esModule", { value: !0 }),
    (st.requestRemote = st.requestBitbucket = st.requestJira = st.requestConfluence = void 0));
  const t = ce(),
    r = em();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (st.requestConfluence = e.requestConfluence),
    (st.requestJira = e.requestJira),
    (st.requestBitbucket = e.requestBitbucket),
    (st.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    st
  );
}
var Vi = {},
  zn = {},
  ul;
function rm() {
  if (ul) return zn;
  ((ul = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.showFlag = void 0));
  const e = ce(),
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
function nm() {
  return (
    ll ||
      ((ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = rm();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Vi)),
    Vi
  );
}
var Gi = {},
  dl;
function am() {
  return (
    dl ||
      ((dl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(cp(), e));
      })(Gi)),
    Gi
  );
}
var Hi = {},
  Vn = {},
  fl;
function om() {
  if (fl) return Vn;
  ((fl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.realtime = void 0));
  const t = (0, ce().getCallBridge)(),
    r = (i, s, c) => t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c }),
    n = (i, s, c) => t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c }),
    a = (i, s, c) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c, isGlobal: !0 }),
    o = (i, s, c) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c, isGlobal: !0 });
  return ((Vn.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), Vn);
}
var Wi = {},
  vl;
function im() {
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
      })(Wi)),
    Wi
  );
}
var pl;
function sm() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = om();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = im();
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
      })(Hi)),
    Hi
  );
}
var Ki = {},
  Gn = {},
  Yi = {},
  hl;
function cm() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = ce(),
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
      })(Yi)),
    Yi
  );
}
var Hn = {},
  gl;
function um() {
  if (gl) return Hn;
  ((gl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.isEnabled = void 0));
  const t = (0, ce().getCallBridge)(),
    r = () => t("isRovoEnabled");
  return ((Hn.isEnabled = r), Hn);
}
var bl;
function lm() {
  if (bl) return Gn;
  ((bl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.rovo = void 0));
  const e = cm(),
    t = um();
  return ((Gn.rovo = { open: e.open, isEnabled: t.isEnabled }), Gn);
}
var ml;
function dm() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(lm(), e));
      })(Ki)),
    Ki
  );
}
var Ft = {},
  yl;
function fm() {
  if (yl) return Ft;
  ((yl = 1),
    Object.defineProperty(Ft, "__esModule", { value: !0 }),
    (Ft.createTranslationFunction = Ft.getTranslations = Ft.resetTranslationsCache = void 0));
  const e = ip(),
    t = ei(),
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
  Ft.resetTranslationsCache = a;
  const o = async (s = null, c = { fallback: !0 }) => {
    let u = s;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, c));
  };
  Ft.getTranslations = o;
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
  return ((Ft.createTranslationFunction = i), Ft);
}
var Ji = {},
  Wn = {},
  _l;
function vm() {
  if (_l) return Wn;
  ((_l = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.permissions = void 0));
  const t = (0, ce().getCallBridge)(),
    r = async (c) => t("__permission__egressGet", c),
    n = async (c) => t("__permission__egressSet", c),
    a = async (c) => t("__permission__egressDeleteDomain", c),
    o = async (c) => t("__permission__egressDeleteGroup", c),
    i = async (c) => t("__permission__remoteGet", c),
    s = async (c) => t("__permission__remoteSet", c);
  return (
    (Wn.permissions = {
      egress: { get: r, set: n, deleteDomain: a, deleteGroup: o },
      remote: { get: i, set: s },
    }),
    Wn
  );
}
var sr = {},
  Xi = {},
  Zi = {},
  Kn = {},
  Yn = {},
  wl;
function _c() {
  if (wl) return Yn;
  ((wl = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.parseUrl = void 0));
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
  return ((Yn.parseUrl = e), Yn);
}
var Qi = {},
  kl;
function vp() {
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
        const t = _c();
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
function pm() {
  if (Ol) return Kn;
  ((Ol = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.EgressFilteringService = void 0));
  const e = _c(),
    t = vp();
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
  return ((Kn.EgressFilteringService = r), Kn);
}
var El;
function hm() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(pm(), e), t.__exportStar(_c(), e), t.__exportStar(vp(), e));
      })(Zi)),
    Zi
  );
}
var Sl;
function gm() {
  return (
    Sl ||
      ((Sl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Ne.__exportStar(hm(), e));
      })(Xi)),
    Xi
  );
}
var xl;
function bm() {
  if (xl) return sr;
  ((xl = 1),
    Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.checkPermissions = sr.createPermissionUtils = void 0));
  const e = gm(),
    t = ei();
  function r(g) {
    return typeof g == "string" ? g : "address" in g && g.address ? g.address : g.remote || "";
  }
  const n = ["fonts", "styles", "frames", "images", "media", "scripts"],
    a = ["backend", "client"];
  function o(g) {
    if (!g) return null;
    const { scopes: f, external: h = {} } = g,
      b = Array.isArray(f) ? f : Object.keys(f || {});
    return {
      hasScope: (m) => b.includes(m),
      canFetchFrom: (m, y) => {
        var k;
        const w = (k = h.fetch) === null || k === void 0 ? void 0 : k[m];
        if (!w?.length) return !1;
        const O = w.map(r).filter((A) => A.length > 0);
        if (O.length === 0) return !1;
        const S = new e.EgressFilteringService(O);
        return m === "client" ? S.isValidUrlCSP(y) : S.isValidUrl(y);
      },
      canLoadResource: (m, y) => {
        const k = h[m];
        if (!k?.length) return !1;
        const w = k.map(r).filter((R) => R.length > 0);
        return w.length === 0 ? !1 : new e.EgressFilteringService(w).isValidUrlCSP(y);
      },
      getScopes: () => b,
      getExternalPermissions: () => h,
      hasAnyPermissions: () => b.length > 0 || Object.keys(h).length > 0,
    };
  }
  sr.createPermissionUtils = o;
  function i(g, f) {
    if (!g?.length) return;
    const h = g.filter((b) => !f.hasScope(b));
    return h.length > 0 ? h : void 0;
  }
  function s(g, f) {
    if (!g?.fetch) return;
    const h = {};
    return (
      a.forEach((b) => {
        var m;
        const y = (m = g.fetch) === null || m === void 0 ? void 0 : m[b];
        if (y?.length) {
          const k = y.filter((w) => !f.canFetchFrom(b, w));
          k.length > 0 && (h[b] = k);
        }
      }),
      Object.keys(h).length > 0 ? h : void 0
    );
  }
  function c(g, f) {
    const h = {};
    return (
      n.forEach((b) => {
        const m = g?.[b];
        if (m?.length) {
          const y = m.filter((k) => !f.canLoadResource(b, k));
          y.length > 0 && (h[b] = y);
        }
      }),
      Object.keys(h).length > 0 ? h : void 0
    );
  }
  function u(g, f) {
    if (!g) return;
    const h = s(g, f),
      b = c(g, f);
    if (!h && !b) return;
    const m = {};
    return (h && (m.fetch = h), b && Object.assign(m, b), m);
  }
  function l(g, f) {
    if (g !== void 0 && (typeof g != "object" || g === null || Array.isArray(g)))
      throw new TypeError(
        `${f} should be an object, not ${Array.isArray(g) ? "an array" : `a ${typeof g}`}`,
      );
  }
  function d(g, f) {
    if (g !== void 0 && !Array.isArray(g))
      throw new TypeError(`${f} should be an array, not a ${typeof g}`);
  }
  function p(g) {
    d(g.scopes, "scopes");
    const f = g.external;
    if (f !== void 0) {
      if ((l(f, "external"), f.fetch !== void 0)) {
        l(f.fetch, "external.fetch");
        for (const h of a) d(f.fetch[h], `external.fetch.${h}`);
      }
      for (const h of n) d(f[h], `external.${h}`);
    }
  }
  async function v(g, f) {
    var h;
    if (!g) return { granted: !1, missing: null };
    if ((p(g), !(!((h = g.scopes) === null || h === void 0) && h.length) && !g.external))
      return { granted: !0, missing: null };
    let b = f;
    b || (b = (await t.view.getContext()).permissions);
    const m = o(b);
    if (!m) return { granted: !1, missing: null };
    const y = {};
    let k = !0;
    const w = i(g.scopes, m);
    w && ((y.scopes = w), (k = !1));
    const O = u(g.external, m);
    return (O && ((y.external = O), (k = !1)), { granted: k, missing: k ? null : y });
  }
  return ((sr.checkPermissions = v), sr);
}
var Pl;
function mm() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(vm(), e), t.__exportStar(bm(), e));
      })(Ji)),
    Ji
  );
}
var es = {},
  ts = {},
  rs = {},
  Jn = {},
  Xn = {},
  Cl;
function pp() {
  return (
    Cl ||
      ((Cl = 1),
      Object.defineProperty(Xn, "__esModule", { value: !0 }),
      (Xn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Xn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Xn
  );
}
var Rl;
function ti() {
  if (Rl) return Jn;
  ((Rl = 1),
    Object.defineProperty(Jn, "__esModule", { value: !0 }),
    (Jn.checkRestrictedEnvironment = void 0));
  const e = ye(),
    t = ei(),
    r = pp(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Jn.checkRestrictedEnvironment = n), Jn);
}
var Al;
function ym() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ha(),
          r = ye(),
          n = ti(),
          o = (0, ce().getCallBridge)(),
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
              g = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              p.forEach((m, y) => {
                const k = v[y];
                (f.set(k.checksum, m), h.set(k.checksum, y));
              }),
              Object.entries(g).map(([m, y]) => {
                const { key: k, checksum: w } = y,
                  O = f.get(w),
                  S = h.get(w);
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
          return await Promise.all(p.map((g) => g.promise));
        };
        e.upload = u;
      })(rs)),
    rs
  );
}
var Zn = {},
  Il;
function _m() {
  if (Il) return Zn;
  ((Il = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.deleteObjects = void 0));
  const e = Ha(),
    t = ye(),
    r = ti(),
    a = (0, ce().getCallBridge)(),
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
  return ((Zn.deleteObjects = o), Zn);
}
var Qn = {},
  jl;
function wm() {
  if (jl) return Qn;
  ((jl = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.download = void 0));
  const e = Ha(),
    t = ye(),
    r = ti(),
    a = (0, ce().getCallBridge)(),
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
  return ((Qn.download = o), Qn);
}
var ea = {},
  Ml;
function km() {
  if (Ml) return ea;
  ((Ml = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.getMetadata = void 0));
  const e = Ha(),
    t = ye(),
    r = ti(),
    a = (0, ce().getCallBridge)(),
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
  return ((ea.getMetadata = o), ea);
}
var Tl;
function Om() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = ym();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = _m(),
          n = wm(),
          a = km();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(ts)),
    ts
  );
}
var Dl;
function Em() {
  return (
    Dl ||
      ((Dl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Ne;
        (t.__exportStar(Om(), e), t.__exportStar(pp(), e));
      })(es)),
    es
  );
}
var ns = {},
  ta = {},
  ra = {},
  Fl;
function Sm() {
  if (Fl) return ra;
  ((Fl = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.Evaluator = void 0));
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
  return ((ra.Evaluator = e), ra);
}
var na = {},
  as = {},
  Ll;
function hp() {
  return (
    Ll ||
      ((Ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = void 0),
          (function (t) {
            t.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(as)),
    as
  );
}
var Bl;
function xm() {
  if (Bl) return na;
  ((Bl = 1),
    Object.defineProperty(na, "__esModule", { value: !0 }),
    (na.trackFeatureFlagEvent = void 0));
  const e = ce(),
    t = ye(),
    r = Xo(),
    n = hp(),
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
    (na.trackFeatureFlagEvent = (0, r.withRateLimiter)(
      c,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    na
  );
}
var aa = {},
  Nl;
function Pm() {
  if (Nl) return aa;
  ((Nl = 1),
    Object.defineProperty(aa, "__esModule", { value: !0 }),
    (aa.initFeatureFlags = void 0));
  const e = ce(),
    t = ye(),
    r = Xo(),
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
    (aa.initFeatureFlags = (0, r.withRateLimiter)(
      s,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    aa
  );
}
var Ul;
function Cm() {
  if (Ul) return ta;
  ((Ul = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.FeatureFlags = void 0));
  const e = Sm(),
    t = xm(),
    r = Pm(),
    n = hp();
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
  return ((ta.FeatureFlags = a), ta);
}
var ql;
function Rm() {
  return (
    ql ||
      ((ql = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FeatureFlags = void 0));
        var t = Cm();
        Object.defineProperty(e, "FeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.FeatureFlags;
          },
        });
      })(ns)),
    ns
  );
}
var $l;
function Am() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Ne;
        var r = hb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ha(), e),
          t.__exportStar(yb(), e),
          t.__exportStar(ei(), e),
          t.__exportStar(Xb(), e),
          t.__exportStar(Qb(), e),
          t.__exportStar(tm(), e),
          t.__exportStar(nm(), e),
          t.__exportStar(am(), e),
          t.__exportStar(sm(), e),
          t.__exportStar(dm(), e),
          (e.i18n = t.__importStar(fm())),
          t.__exportStar(mm(), e),
          t.__exportStar(Em(), e),
          t.__exportStar(Rm(), e));
      })(Ai)),
    Ai
  );
}
var qt = Am();
function he(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ee(e) {
  "@babel/helpers - typeof";
  return (
    (Ee =
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
    Ee(e)
  );
}
function Im(e, t) {
  if (Ee(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ee(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function gp(e) {
  var t = Im(e, "string");
  return Ee(t) == "symbol" ? t : t + "";
}
function zl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, gp(n.key), n));
  }
}
function ge(e, t, r) {
  return (
    t && zl(e.prototype, t),
    r && zl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function jm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ke(e, t) {
  if (t && (Ee(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return jm(e);
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
function Ma(e, t) {
  return (
    (Ma = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ma(e, t)
  );
}
function Ye(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ma(e, t));
}
function x(e, t, r) {
  return (
    (t = gp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Pe() {}
function Mm(e) {
  if (Array.isArray(e)) return e;
}
function Tm(e, t) {
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
function Us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bp(e, t) {
  if (e) {
    if (typeof e == "string") return Us(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Us(e, t)
          : void 0
    );
  }
}
function Dm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return Mm(e) || Tm(e, t) || bp(e, t) || Dm();
}
var mp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  Fm = function (t) {
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
  Io = function (t, r) {
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
  Lm = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Vl = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  Bm = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var s = Vl(i, n, a),
      c = Vl(o.index, n, a),
      u = r.slice(),
      l = u.splice(s, 1),
      d = G(l, 1),
      p = d[0];
    return (u.splice(c, 0, p), u);
  };
function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ae.apply(null, arguments)
  );
}
function Nm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function le(e, t) {
  if (e == null) return {};
  var r,
    n,
    a = Nm(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Gl(e, t) {
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
function os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Um = (function () {
  function e(t) {
    var r = this;
    (he(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = os({}, r.payload);
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
          Ee(r) === "object" && (this.payload = os(os({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function qm(e) {
  if (Array.isArray(e)) return Us(e);
}
function $m(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function zm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oe(e) {
  return qm(e) || $m(e) || bp(e) || zm();
}
function Vm(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Q(e)) !== null; );
  return e;
}
function jo() {
  return (
    (jo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = Vm(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    jo.apply(null, arguments)
  );
}
function Gm(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, yp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function yp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (yp = function () {
    return !!e;
  })();
}
function Hm(e, t, r, n) {
  var a = jo(Q(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Wm = (function (e) {
  function t(r) {
    var n;
    return (
      he(this, t),
      (n = Gm(this, t, [r])),
      x(n, "_isUIAnalyticsEvent", !0),
      x(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Oe(n.context),
          o = Oe(n.handlers),
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
    Ye(t, e),
    ge(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : Hm(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(Um);
function Hl(e, t, r, n, a, o, i) {
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
        Hl(o, n, a, i, s, "next", c);
      }
      function s(c) {
        Hl(o, n, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var is = { exports: {} },
  ss = { exports: {} },
  Wl;
function _p() {
  return (
    Wl ||
      ((Wl = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ss)),
    ss.exports
  );
}
var cs = { exports: {} },
  us = { exports: {} },
  Kl;
function wp() {
  return (
    Kl ||
      ((Kl = 1),
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
      })(us)),
    us.exports
  );
}
var Yl;
function kp() {
  return (
    Yl ||
      ((Yl = 1),
      (function (e) {
        var t = wp();
        function r() {
          var n,
            a,
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.toStringTag || "@@toStringTag";
          function c(h, b, m, y) {
            var k = b && b.prototype instanceof l ? b : l,
              w = Object.create(k.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (O, S, R) {
                  var A,
                    P,
                    I,
                    U = 0,
                    V = R || [],
                    q = !1,
                    K = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: B,
                      f: B.bind(n, 4),
                      d: function (W, z) {
                        return ((A = W), (P = 0), (I = n), (K.n = z), u);
                      },
                    };
                  function B(H, W) {
                    for (P = H, I = W, a = 0; !q && U && !z && a < V.length; a++) {
                      var z,
                        D = V[a],
                        ie = K.p,
                        ee = D[2];
                      H > 3
                        ? (z = ee === W) &&
                          ((I = D[(P = D[4]) ? 5 : ((P = 3), 3)]), (D[4] = D[5] = n))
                        : D[0] <= ie &&
                          ((z = H < 2 && ie < D[1])
                            ? ((P = 0), (K.v = W), (K.n = D[1]))
                            : ie < ee &&
                              (z = H < 3 || D[0] > W || W > ee) &&
                              ((D[4] = H), (D[5] = W), (K.n = ee), (P = 0)));
                    }
                    if (z || H > 1) return u;
                    throw ((q = !0), W);
                  }
                  return function (H, W, z) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (q && W === 1 && B(W, z), P = W, I = z; (a = P < 2 ? n : I) || !q; ) {
                      A || (P ? (P < 3 ? (P > 1 && (K.n = -1), B(P, I)) : (K.n = I)) : (K.v = I));
                      try {
                        if (((U = 2), A)) {
                          if ((P || (H = "next"), (a = A[H]))) {
                            if (!(a = a.call(A, I)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((I = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = A.return) && a.call(A),
                              P < 2 &&
                                ((I = TypeError(
                                  "The iterator does not provide a '" + H + "' method",
                                )),
                                (P = 1)));
                          A = n;
                        } else if ((a = (q = K.n < 0) ? I : O.call(S, K)) !== u) break;
                      } catch (D) {
                        ((A = n), (P = 1), (I = D));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: a, done: q };
                  };
                })(h, m, y),
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
      })(cs)),
    cs.exports
  );
}
var ls = { exports: {} },
  ds = { exports: {} },
  fs = { exports: {} },
  Jl;
function Op() {
  return (
    Jl ||
      ((Jl = 1),
      (function (e) {
        var t = _p(),
          r = wp();
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
      })(fs)),
    fs.exports
  );
}
var Xl;
function Ep() {
  return (
    Xl ||
      ((Xl = 1),
      (function (e) {
        var t = kp(),
          r = Op();
        function n(a, o, i, s, c) {
          return new r(t().w(a, o, i, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ds)),
    ds.exports
  );
}
var Zl;
function Km() {
  return (
    Zl ||
      ((Zl = 1),
      (function (e) {
        var t = Ep();
        function r(n, a, o, i, s) {
          var c = t(n, a, o, i, s);
          return c.next().then(function (u) {
            return u.done ? u.value : c.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ls)),
    ls.exports
  );
}
var vs = { exports: {} },
  Ql;
function Ym() {
  return (
    Ql ||
      ((Ql = 1),
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
      })(vs)),
    vs.exports
  );
}
var ps = { exports: {} },
  hs = { exports: {} },
  ed;
function Jm() {
  return (
    ed ||
      ((ed = 1),
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
      })(hs)),
    hs.exports
  );
}
var td;
function Xm() {
  return (
    td ||
      ((td = 1),
      (function (e) {
        var t = Jm().default;
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
      })(ps)),
    ps.exports
  );
}
var rd;
function Zm() {
  return (
    rd ||
      ((rd = 1),
      (function (e) {
        var t = _p(),
          r = kp(),
          n = Km(),
          a = Ep(),
          o = Op(),
          i = Ym(),
          s = Xm();
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
            return function (m) {
              (h ||
                ((h = {
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
                    return ((h.resultName = w), b(m.d, s(k), O));
                  },
                  finish: function (k) {
                    return b(m.f, k);
                  },
                }),
                (b = function (k, w, O) {
                  ((m.p = h.prev), (m.n = h.next));
                  try {
                    return k(w, O);
                  } finally {
                    h.next = m.n;
                  }
                })),
                h.resultName && ((h[h.resultName] = m.v), (h.resultName = void 0)),
                (h.sent = m.v),
                (h.next = m.n));
              try {
                return f.call(this, h);
              } finally {
                ((m.p = h.prev), (m.n = h.next));
              }
            };
          }
          return ((e.exports = c =
            function () {
              return {
                wrap: function (b, m, y, k) {
                  return u.w(g(b), m, y, k && k.reverse());
                },
                isGeneratorFunction: p,
                mark: u.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: o,
                async: function (b, m, y, k, w) {
                  return (p(m) ? a : n)(g(b), m, y, k, w);
                },
                keys: i,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = c), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(is)),
    is.exports
  );
}
var gs, nd;
function Qm() {
  if (nd) return gs;
  nd = 1;
  var e = Zm()();
  gs = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return gs;
}
var ey = Qm();
const M = Qt(ey);
var cr = {},
  Rr = {},
  io = {},
  oa = {},
  ad;
function ty() {
  if (ad) return oa;
  ((ad = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa.V1InitializeContainer = void 0));
  const e = Rt();
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
  return ((oa.V1InitializeContainer = t), oa);
}
var ia = {},
  od;
function ry() {
  if (od) return ia;
  ((od = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia.V2InitializeContainer = void 0));
  const e = Rt();
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
  return ((ia.V2InitializeContainer = t), ia);
}
var id;
function ny() {
  if (id) return io;
  ((id = 1), Object.defineProperty(io, "__esModule", { value: !0 }));
  const e = Rt(),
    t = ty(),
    r = ry();
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
  return ((io.default = n), io);
}
var Ar = {},
  sa = {},
  sd;
function ay() {
  if (sd) return sa;
  ((sd = 1),
    Object.defineProperty(sa, "__esModule", { value: !0 }),
    (sa._resolveDeltasResponse = void 0));
  const e = Rt(),
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
  sa._resolveDeltasResponse = r;
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
  return sa;
}
var cd;
function Sp() {
  if (cd) return Ar;
  cd = 1;
  var e =
    (Ar && Ar.__awaiter) ||
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
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  const t = Rt(),
    r = ay();
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
          const m =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          b = Object.assign(Object.assign({}, b), {
            sinceTime: u && !m ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && u ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: m ? 0 : h.time,
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
  return ((Ar.default = n), Ar);
}
var ca = {},
  ud;
function oy() {
  if (ud) return ca;
  ((ud = 1),
    Object.defineProperty(ca, "__esModule", { value: !0 }),
    (ca._makeParamStoreGetter = void 0));
  const e = Rt(),
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
  return ((ca._makeParamStoreGetter = u), ca);
}
var ur = {},
  ld;
function iy() {
  if (ld) return ur;
  ld = 1;
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
  const t = Rt(),
    r = Sp();
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
var dd;
function sy() {
  if (dd) return Rr;
  dd = 1;
  var e =
    (Rr && Rr.__awaiter) ||
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
          } catch (m) {
            v(m);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (m) {
            v(m);
          }
        }
        function h(b) {
          b.done ? p(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(s, c || [])).next());
      });
    };
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  const t = Rt(),
    r = ny(),
    n = Sp(),
    a = oy(),
    o = iy();
  let i = class qs extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof qs
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new qs(c ?? "", {}));
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
        m = b ?? h;
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
  return ((Rr.default = i), Rr);
}
var fd;
function cy() {
  return (
    fd ||
      ((fd = 1),
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
        const n = Rt(),
          a = sy();
        ((e.StatsigClient = a.default), r(Rt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(cr)),
    cr
  );
}
var ct = cy(),
  bs = { exports: {} },
  vd;
function uy() {
  return (
    vd ||
      ((vd = 1),
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
              m,
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
              for (y = 1, m = new Array(b - 1); y < b; y++) m[y - 1] = arguments[y];
              h.fn.apply(h.context, m);
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
                    if (!m) for (w = 1, m = new Array(b - 1); w < b; w++) m[w - 1] = arguments[w];
                    h[y].fn.apply(h[y].context, m);
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
      })(bs)),
    bs.exports
  );
}
var ly = uy();
const dy = Qt(ly);
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
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var so = "@all-features",
  fy = (function () {
    function e() {
      (he(this, e), x(this, "eventToValue", new Map()), (this.emitter = new dy()));
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
            this.emitter.on(so, r),
            function () {
              n.emitter.off(so, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(so),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== so;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  vy = "fedramp-moderate";
function py() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === vy;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var wc = {
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
  _a = { Development: "development", Staging: "staging", Production: "production" },
  Ta = { COMMERCIAL: "commercial", FEDRAMP_MODERATE: "fedramp-moderate" },
  hy = [
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
function $s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var co = function (t) {
    return $s({ perimeter: py() ? Ta.FEDRAMP_MODERATE : Ta.COMMERCIAL }, t);
  },
  ua = function (t, r) {
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
  gd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  };
function Oa(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (!r.length) return e;
  var a = r.shift();
  if (a == null) return Oa.apply(void 0, [e].concat(Oe(r)));
  for (var o = 0, i = Object.entries(a); o < i.length; o++) {
    var s = G(i[o], 2),
      c = s[0],
      u = s[1],
      l = e[c],
      d = u && Ee(u) === "object" && !Array.isArray(u),
      p = l && Ee(l) === "object" && !Array.isArray(l);
    d && p ? (e[c] = Oa(l, u)) : (e[c] = u);
  }
  return Oa.apply(void 0, [e].concat(Oe(r)));
}
var gy = function (t) {
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
    var p = le(t, hy);
    return $s(
      $s({}, p),
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
  by = Object.entries(wc).map(function (e) {
    var t = G(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  xp = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = by.find(function (i) {
            var s = G(i, 1),
              c = s[0];
            return o.includes(c);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : wc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  zs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  bd = (function () {
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
            var s = Array.isArray(n) ? "array" : Ee(n),
              c = Array.isArray(i) ? "array" : Ee(i);
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
                xp(r.details),
                zs(
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
  md = (function () {
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
              : n == null || (Ee(i) === Ee(n) && Array.isArray(n) === Array.isArray(i))
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
                xp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                zs(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                zs(
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
  $r = "0.0.0-development";
function my(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Pp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Pp = function () {
    return !!e;
  })();
}
function yy(e, t, r) {
  if (Pp()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && Ma(a, r.prototype), a);
}
function Vs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Vs = function (n) {
      if (n === null || !my(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return yy(n, arguments, Q(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Ma(a, n)
      );
    }),
    Vs(e)
  );
}
function _y(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Cp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Cp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Cp = function () {
    return !!e;
  })();
}
var yd = (function (e) {
  function t(r) {
    return (he(this, t), _y(this, t, [r]));
  }
  return (Ye(t, e), ge(t));
})(Vs(Error));
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
function wy(e) {
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
var ky = 5e3,
  Oy = "https://api.atlassian.com/flags",
  Ey = "https://api.stg.atlassian.com/flags",
  Sy = "https://api.dev.atlassian.com/flags",
  xy = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Py = "https://api.atlassian-us-gov-mod.com/flags",
  Cy = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Ry = "oasis-stg.com/flags",
  Ay = "atlassian-isolated.net/flags",
  Iy = "/gateway/api/flags",
  ms = (function () {
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
                        new yd(
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
                      throw new yd("Unexpected 204 response");
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
          if (n) return Iy;
          if (a === Ta.FEDRAMP_MODERATE)
            switch (r) {
              case _a.Production:
                return Py;
              case _a.Staging:
                return xy;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Ta.COMMERCIAL)
            switch (r) {
              case _a.Development:
                return Sy;
              case _a.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : Ey;
              default:
                var s = this.getApiUrl(o);
                return s !== null ? s : Oy;
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
                          (u = i.fetchTimeoutMs || ky),
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
                            wy(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": $r,
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
          if (n === void 0) return r ? Cy.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Ry);
          var s = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Ay) : null;
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
function wd(e, t) {
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
function la(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jy(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Rp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Rp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Rp = function () {
    return !!e;
  })();
}
function My(e, t, r, n) {
  var a = jo(Q(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Ty = (function (e) {
  function t() {
    var r;
    return (
      he(this, t),
      (r = jy(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
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
                stableID: ct.StableID.get(this._getSdkKey()),
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
                            la(
                              la({}, this.bootstrapResult),
                              {},
                              { fullUserHash: ct._getFullUserHash(i) },
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
            la(la({}, this.bootstrapResult), {}, { fullUserHash: ct._getFullUserHash(n) })
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
          var a = ct._getStorageKey(this._getSdkKey(), n);
          return "".concat(ct.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          My(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = la({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(ct.DataAdapterCore);
function kd(e, t) {
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
      ? kd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Dy(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Fy(e)) || t) {
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
function Fy(e, t) {
  if (e) {
    if (typeof e == "string") return Od(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Od(e, t)
          : void 0
    );
  }
}
function Od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ys = "LocalOverride:Recognized",
  Ly = "STATSIG_OVERRIDES",
  Ed = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Ir = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ze = function (t, r) {
    return r + ":" + t;
  },
  By = (function () {
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
                m = G(h[f], 2),
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
                R = G(O[w], 2),
                A = R[0],
                P = R[1];
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
            this.parseStoredOverrides(Ed),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Ed);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              s = Dy(i),
              c;
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var u = c.value,
                  l = Xe._DJB2(u);
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
          var n = Te(Te({}, Ir()), r);
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
              this._djb2Map.set(Ze(Xe._DJB2(p), s), v);
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
            this._djb2Map.set(Ze(Xe._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Ze(Xe._DJB2(r), "gates")),
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
                : this._djb2Map.get(Ze(r.name, "gates"));
          return o == null
            ? null
            : Te(Te({}, r), {}, { value: o, details: Te(Te({}, r.details), {}, { reason: ys }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Ze(Xe._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ze(Xe._DJB2(r), "configs")),
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
            this._djb2Map.set(Ze(Xe._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ze(Xe._DJB2(r), "configs")),
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
            this._djb2Map.set(Ze(Xe._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Ze(Xe._DJB2(r), "layers")),
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
                : this._djb2Map.get(Ze(r.name, "layers"));
          return o == null
            ? null
            : Te(
                Te({}, r),
                {},
                {
                  __value: o,
                  get: Xe._makeTypedGet(r.name, o),
                  details: Te(Te({}, r.details), {}, { reason: ys }),
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
                : this._djb2Map.get(Ze(r.name, "configs"));
          return o == null
            ? null
            : Te(
                Te({}, r),
                {},
                {
                  value: o,
                  get: Xe._makeTypedGet(r.name, o),
                  details: Te(Te({}, r.details), {}, { reason: ys }),
                },
              );
        },
      },
    ]);
  })(),
  Ny = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Sd(e, t) {
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
      ? Sd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var xd = "client-default-key",
  Uy = "https://xp.atlassian.com/v1/rgstr",
  qy = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Ly : n,
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
        x(this, "subscriptions", new fy()),
        x(this, "dataAdapter", new Ty()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new By(a)));
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
                        if (((c = co(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ua(c, this.initOptions) ||
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
                        if (((u = co(a)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ua(u, this.initOptions) ||
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
                          this.provider.setClientVersion($r),
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
                var l = Yt(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: $r,
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
                s.initOptions.environment !== _a.Production &&
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
                          (u = co(a)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ua(u, this.initOptions) ||
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
            M.mark(function n(a, o, i) {
              var s, c;
              return M.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = co(a)),
                          (c = function () {
                            return ms.fetchExperimentValues(s, o, i).then(function (p) {
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
            return bd.fromExperiment(
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
              new bd(r, {}, "", { time: Date.now(), reason: wc.Error })
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
          return ua(this.currentIdentifiers, r) && ua(this.currentAttributes, n);
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
              var s, c, u, l, d, p, v, g;
              return M.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        if (((s = Yt({}, a)), !a.localMode)) {
                          h.next = 5;
                          break;
                        }
                        return ((h.next = 4), this.initFromValues(s, o, i));
                      case 4:
                        return h.abrupt("return");
                      case 5:
                        return (
                          (h.prev = 5),
                          (l = ms.fetchClientSdk(a).then(function (b) {
                            return (s.sdkKey = b.clientSdkKey);
                          })),
                          (d = ms.fetchExperimentValues(a, o, i)),
                          (h.next = 10),
                          Promise.all([l, d])
                        );
                      case 10:
                        ((p = h.sent),
                          (v = G(p, 2)),
                          (g = v[1]),
                          (c = g.experimentValues),
                          (u = g.customAttributes),
                          (h.next = 24));
                        break;
                      case 17:
                        return (
                          (h.prev = 17),
                          (h.t0 = h.catch(5)),
                          h.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                h.t0 === null || h.t0 === void 0 ? void 0 : h.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (h.next = 23),
                          this.initFromValues(s, o, i)
                        );
                      case 23:
                        throw h.t0;
                      case 24:
                        return h.abrupt("return", this.initFromValues(s, o, u, c));
                      case 25:
                      case "end":
                        return h.stop();
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
              var c, u, l, d, p, v, g, f;
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
            M.mark(function n(a, o, i) {
              var s,
                c,
                u,
                l,
                d,
                p,
                v,
                g,
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
                          (u = gy(a)),
                          u.sdkKey || (u.sdkKey = xd),
                          ((s = u.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (u.networkConfig = Yt(
                              Yt({}, u.networkConfig),
                              {},
                              { logEventUrl: Uy },
                            )),
                          u.perimeter === Ta.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (p = le(u, Ny)),
                          (v = gd(o, i)),
                          (this.user = Oa({}, c.user, v)),
                          (g = Yt(
                            Yt({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: ct.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? ct.StableID.setOverride(o.stableId, l)
                            : (g.disableStableID = !0),
                          (b.prev = 13),
                          (this.statsigClient = new ct.StatsigClient(l, this.user, g)),
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
                          (this.statsigClient = new ct.StatsigClient(xd, this.user, g)),
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
              var s, c, u, l, d, p, v, g, f, h;
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
                          (d = gd(o, u.customAttributesFromFetch)),
                          (l = Oa({}, u.experimentValues.user, d)),
                          (m.next = 14));
                        break;
                      case 9:
                        throw (
                          (m.prev = 9),
                          (m.t0 = m.catch(1)),
                          (g = m.t0 instanceof Error ? m.t0.message : JSON.stringify(m.t0)),
                          (p = (v = this.initOptions).updateUserCompletionCallback) === null ||
                            p === void 0 ||
                            p.call(v, !1, g),
                          m.t0
                        );
                      case 14:
                        if (
                          ((f = !0),
                          (h = null),
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
                        ((m.prev = 24), (m.t1 = m.catch(16)), (f = !1), (h = String(m.t1)));
                      case 28:
                        if (
                          ((s = this.initOptions) === null ||
                            s === void 0 ||
                            (c = s.updateUserCompletionCallback) === null ||
                            c === void 0 ||
                            c.call(s, f, h),
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
          return $r;
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
            return md.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              md.fromLayer(ct._makeLayer(r, { reason: "Error" }, null))
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
  T,
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
T = Y;
x(Y, "client", new qy());
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
x(Y, "initializeCalled", T.client.initializeCalled.bind(T.client));
x(Y, "initializeCompleted", T.client.initializeCompleted.bind(T.client));
x(Y, "waitUntilInitializeCompleted", T.client.waitUntilInitializeCompleted.bind(T.client));
x(Y, "initialize", T.client.initialize.bind(T.client));
x(Y, "initializeWithProvider", T.client.initializeWithProvider.bind(T.client));
x(Y, "initializeFromValues", T.client.initializeFromValues.bind(T.client));
x(Y, "manuallyLogGateExposure", T.client.manuallyLogGateExposure.bind(T.client));
x(Y, "getExperiment", T.client.getExperiment.bind(T.client));
x(Y, "manuallyLogExperimentExposure", T.client.manuallyLogExperimentExposure.bind(T.client));
x(Y, "manuallyLogLayerExposure", T.client.manuallyLogLayerExposure.bind(T.client));
x(Y, "shutdownStatsig", T.client.shutdownStatsig.bind(T.client));
x(Y, "overrideGate", T.client.overrideGate.bind(T.client));
x(Y, "clearGateOverride", T.client.clearGateOverride.bind(T.client));
x(Y, "overrideConfig", T.client.overrideConfig.bind(T.client));
x(Y, "clearConfigOverride", T.client.clearConfigOverride.bind(T.client));
x(Y, "setOverrides", T.client.setOverrides.bind(T.client));
x(Y, "getOverrides", T.client.getOverrides.bind(T.client));
x(Y, "clearAllOverrides", T.client.clearAllOverrides.bind(T.client));
x(Y, "isCurrentUser", T.client.isCurrentUser.bind(T.client));
x(Y, "onGateUpdated", T.client.onGateUpdated.bind(T.client));
x(Y, "onExperimentValueUpdated", T.client.onExperimentValueUpdated.bind(T.client));
x(Y, "onAnyUpdated", T.client.onAnyUpdated.bind(T.client));
x(Y, "updateUser", T.client.updateUser.bind(T.client));
x(Y, "updateUserWithProvider", T.client.updateUserWithProvider.bind(T.client));
x(Y, "updateUserWithValues", T.client.updateUserWithValues.bind(T.client));
x(Y, "getPackageVersion", T.client.getPackageVersion.bind(T.client));
x(Y, "getLayer", T.client.getLayer.bind(T.client));
x(Y, "getLayerValue", T.client.getLayerValue.bind(T.client));
var Gs = Y;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = Y;
  else {
    var uo, _s;
    Gs = window.__FEATUREGATES_JS__;
    var Pd =
      ((uo = Gs) === null || uo === void 0 || (_s = uo.getPackageVersion) === null || _s === void 0
        ? void 0
        : _s.call(uo)) || "4.10.0 or earlier";
    if (Pd !== $r) {
      var $y = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Pd, " when module version ")
        .concat($r, " was loading.");
      console.warn($y);
    }
  }
var jr,
  Mr,
  zy =
    (globalThis == null ||
    (jr = globalThis.process) === null ||
    jr === void 0 ||
    (jr = jr.env) === null ||
    jr === void 0
      ? void 0
      : jr.JEST_WORKER_ID) !== void 0,
  Vy =
    !zy &&
    (globalThis == null ||
    (Mr = globalThis.process) === null ||
    Mr === void 0 ||
    (Mr = Mr.env) === null ||
    Mr === void 0
      ? void 0
      : Mr.NODE_ENV) !== "production",
  Gy = function () {
    var t;
    Vy && (t = console).debug.apply(t, arguments);
  },
  kc = {},
  Hy = "@atlaskit/platform-feature-flags",
  Ea = "__PLATFORM_FEATURE_FLAGS__",
  Ap = typeof process < "u" && typeof kc < "u",
  Wy = Ap ? kc.ENABLE_PLATFORM_FF === "true" : !1,
  Ky = Ap ? kc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Yy = Wy || Ky,
  Jy = { booleanResolver: void 0 },
  Sa = typeof window < "u" ? window : globalThis;
Sa[Ea] = Sa[Ea] || Jy;
function Xy(e) {
  if (Yy)
    return (
      Gy(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Hy,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Sa[Ea]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Sa[Ea]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Gs.checkGate(e);
    var a = (n = Sa[Ea]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function ue(e) {
  return Xy(e);
}
var Zy = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Qy = function () {
    return _.useContext(Zy);
  },
  Mo = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function e_(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function t_(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    o = n.current || !!(t && a.current.inputs && e_(t, a.current.inputs)),
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
function r_(e, t) {
  return t_(function () {
    return e;
  }, t);
}
function Ip() {
  var e = Qy(),
    t = r_(
      function (r) {
        return new Wm({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Cd(e, t) {
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
function n_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Da(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    s = e.analyticsData,
    c = Ip(),
    u = c.createAnalyticsEvent,
    l = Mo(s),
    d = Mo(t),
    p = _.useCallback(
      function (v) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = n_({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return p;
}
function Rd(e, t) {
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
function a_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ad(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    s = Ip(),
    c = s.createAnalyticsEvent,
    u = Mo(i),
    l = Mo(t),
    d = _.useCallback(
      function () {
        var p = c({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          v = a_({ componentName: n, packageName: a, packageVersion: o }, u.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, a, o, c, u, l],
    );
  return d;
}
var vr = "ASC",
  To = "DESC",
  o_ = "small",
  Do = "large",
  jp = 0.22;
const i_ = 5;
function oe(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, i_) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Mp(e, t, r) {
  return e ?? "var(--c-, )";
}
var s_ = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  c_ = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      s = le(e, s_);
    return _.createElement(
      "table",
      ae(
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
          className: oe([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  u_ = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: oe(["_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  l_ = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: oe(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  d_ = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: oe(["_4t3i1jdh"]),
      },
      r,
    );
  },
  f_ = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: oe([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  v_ = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function jd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Id(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function p_(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Tp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Md = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  h_ = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === vr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, u) {
      var l = Md(c.cells, t, n),
        d = Md(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (Ee(l) !== Ee(d)) {
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
function g_(e) {
  var t = (function (r) {
    function n() {
      var a;
      he(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return ((a = p_(this, n, [].concat(i))), x(a, "state", { pageRows: [] }), a);
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
              var s = o.forwardedRef,
                c = le(o, v_);
              return E.createElement(
                e,
                ae({ pageRows: this.state.pageRows, head: i }, c, { ref: s }),
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
              Io(u, c);
              var g, f;
              return (
                v ? ((g = s), (f = s)) : ((g = h_(c, s, u, l) || []), (f = mp(g, d, p))),
                jd(jd({}, i), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(E.Component);
  return E.forwardRef(function (r, n) {
    return E.createElement(t, ae({}, r, { forwardedRef: n }));
  });
}
var b_ = "--local-dynamic-table-width",
  Dp = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, b_, "".concat(r, "%")) : void 0;
  },
  m_ = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  y_ = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = le(t, m_);
    return _.createElement(
      "td",
      ae(
        {
          style: Dp({ width: r }),
          ref: o,
          className: oe([
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
  __ = ["isHighlighted", "children", "style", "testId", "className"],
  w_ = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      s = le(e, __);
    return _.createElement(
      "tr",
      ae(
        {
          style: a,
          className: oe([
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
  k_ = ["cells"],
  O_ = ["content", "testId"],
  E_ = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      s = r.cells,
      c = le(r, k_);
    return E.createElement(
      w_,
      ae(
        {},
        c,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(c.key)) },
      ),
      s.map(function (u, l) {
        var d = u.content,
          p = u.testId,
          v = le(u, O_),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return E.createElement(
          y_,
          ae({ "data-testid": p || (a && "".concat(a, "--cell-").concat(l)) }, v, {
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
function S_(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Fp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var x_ = (function (e) {
    function t() {
      return (he(this, t), S_(this, t, arguments));
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
              s = n.highlightedRowIndex,
              c = n.testId,
              u = n.forwardedRef;
            return E.createElement(
              "tbody",
              { "data-testid": c && "".concat(c, "--body"), ref: u },
              a.map(function (l, d) {
                return E.createElement(E_, {
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
  P_ = g_(
    E.forwardRef(function (e, t) {
      return E.createElement(x_, ae({}, e, { forwardedRef: t }));
    }),
  );
function C_(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Lp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var R_ = (function (e) {
  function t(r) {
    var n;
    return (he(this, t), (n = C_(this, t, [r])), (n.state = { hasError: !1 }), n);
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
})(E.Component);
const Oc = _.createContext(null);
var A_ = "#FFFFFF",
  Hs = "#42526E",
  I_ = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function j_(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Hs, ")")
    : "var(--ds-icon-inverse, ".concat(A_, ")");
}
var lo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  M_ = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  Bp = E.memo(
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
        p = typeof l == "number" ? l : I_[l],
        v = "".concat(i, "ms"),
        g = j_(a),
        f = _.useContext(Oc);
      return (
        M_(
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
            className: oe([lo.wrapperStyles, lo.rotateStyles]),
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
              className: oe([lo.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: oe([lo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Td(e, t) {
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
function Dd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Td(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Fd = "--contents-opacity",
  T_ = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: oe(["_kqswh2mm"]) },
      r,
    );
  },
  D_ = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: oe(["_tzy47hfw _lcxvglyw"]),
        style: Dd(Dd({}, x({}, Fd, n)), {}, { "--_cnddr8": Mp("var(".concat(Fd, ")")) }),
      },
      r,
    );
  },
  F_ = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: oe(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function L_(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Np() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Up = (function (e) {
  function t() {
    return (he(this, t), L_(this, t, arguments));
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
            s = n.contentsOpacity,
            c = n.testId,
            u = n.loadingLabel;
          return E.createElement(
            T_,
            { testId: c },
            o ? E.createElement(D_, { contentsOpacity: s, testId: c }, a) : a,
            o &&
              E.createElement(
                F_,
                { testId: c },
                E.createElement(Bp, {
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
x(Up, "defaultProps", {
  isLoading: !0,
  spinnerSize: Do,
  contentsOpacity: jp,
  loadingLabel: "Loading table",
});
var B_ = ["children", "testId"],
  N_ = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = le(e, B_);
    return _.createElement(
      "div",
      ae({}, a, { "data-testid": n, ref: t, className: oe(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  U_ = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: oe(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  q_ = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: oe(["_kqswh2mm _152tidpf"]) }, r);
  });
function $_(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, qp() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
      (r = $_(this, t, [].concat(a))),
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
          Ee(i.style) === "object" &&
          ((i.style.pointerEvents = c ? "none" : ""), (i.style.opacity = c ? u.toString() : ""));
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
                    m = h < l * 3 ? p + l : b;
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
                R = (p - S) / 2;
              this.translateSpinner(s, R, !1);
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
            N_,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              E.createElement(
                U_,
                { testId: s },
                E.createElement(
                  q_,
                  { ref: this.spinnerRef },
                  E.createElement(Bp, {
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
x($p, "defaultProps", {
  isLoading: !0,
  spinnerSize: Do,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(jp), ")"),
  loadingLabel: "Loading table",
});
function z_(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = _.useState(t),
    a = G(n, 2),
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
var da = {},
  V_ = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  G_ = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  H_ = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  Ld = _.memo(function (t) {
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
      h = H_[v][l],
      b = f + 2 * h;
    return _.createElement(
      "span",
      {
        "data-testid": o,
        role: i ? "img" : void 0,
        "aria-label": i || void 0,
        "aria-hidden": i ? void 0 : !0,
        style: { color: a },
        className: oe([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          c && "_1bsb1kw7 _4t3i1kw7",
          v === "small" && "_vwz4utpp",
        ]),
      },
      _.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - h, " ")
          .concat(0 - h, " ")
          .concat(b, " ")
          .concat(b),
        role: "presentation",
        dangerouslySetInnerHTML: p,
        className: oe([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          c ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? G_[l] : V_[l],
        ]),
      }),
    );
  });
const W_ = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Ld, default: Ld }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  ri = Rv(W_);
var Bd;
function K_() {
  if (Bd) return da;
  ((Bd = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.default = void 0));
  var e = r(yr()),
    t = r(ri);
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
  return ((n.displayName = "ChevronLeftIcon"), (da.default = n), da);
}
var Y_ = K_();
const J_ = Qt(Y_);
var fa = {},
  Nd;
function X_() {
  if (Nd) return fa;
  ((Nd = 1), Object.defineProperty(fa, "__esModule", { value: !0 }), (fa.default = void 0));
  var e = r(yr()),
    t = r(ri);
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
  return ((n.displayName = "ChevronRightIcon"), (fa.default = n), fa);
}
var Z_ = X_();
const Q_ = Qt(Z_);
var Ec = _.createContext("elevation.surface"),
  e0 = function () {
    return _.useContext(Ec);
  };
Ec.displayName = "SurfaceProvider";
var t0 = [
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
  r0 = ["className"],
  n0 = {
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
  a0 = {
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
  o0 = {
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
  i0 = {
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
  s0 = {
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
  ni = _.forwardRef(function (e, t) {
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
      m = b === void 0 ? g : b,
      y = e.style,
      k = e.testId,
      w = e.xcss,
      O = le(e, t0);
    O.className;
    var S = le(O, r0),
      R = _.createElement(
        n,
        ae(
          {
            style: y,
            ref: t,
            className: oe([
              "_19itglyw _vchhusvi _r06hglyw",
              o && n0[o],
              o && c0(o) && zp[o],
              l && a0[l],
              p && o0[p],
              h && i0[h],
              m && s0[m],
              w,
            ]),
          },
          S,
          { "data-testid": k },
        ),
        a,
      );
    return o ? _.createElement(Ec.Provider, { value: o }, R) : R;
  });
function c0(e) {
  return e in zp;
}
const ws = () =>
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
  Vp = (...e) => oe(e);
function u0() {
  return {
    css() {
      throw ws();
    },
    cssMap() {
      throw ws();
    },
    cx: Vp,
    XCSSProp() {
      throw ws();
    },
  };
}
var l0 = u0(),
  d0 = l0.cx,
  f0 = [
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
  Ud = {
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
  qd = {
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
  v0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  p0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  h0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  g0 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  b0 = { root: "_1e0c1txw _vchhusvi" },
  Fo = _.memo(
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
        g = e.xcss,
        f = le(e, f0);
      return _.createElement(
        n,
        ae({}, f, {
          role: a,
          className: oe([
            b0.root,
            s && qd[s],
            c && qd[c],
            s && Ud[s],
            u && Ud[u],
            o && g0[o],
            p && p0[p],
            i && v0[i],
            v && h0[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Fo.displayName = "Flex";
var m0 = [
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
  Ws = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  y0 = function (t) {
    var r = t.children;
    return _.createElement("span", { className: oe([Ws.separator]) }, r);
  },
  _o = _.memo(
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
        g = e.testId,
        f = e.role,
        h = e.children,
        b = le(e, m0),
        m = typeof p == "string" ? _.createElement(y0, null, p) : p,
        y = m
          ? _.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return _.createElement(_.Fragment, { key: w }, p && w > 0 ? m : null, k);
              })
          : h;
      return _.createElement(
        Fo,
        ae({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: c || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: d0(u === "hug" && Ws.hug, u === "fill" && Ws.fill, v),
          testId: g,
          ref: t,
        }),
        y,
      );
    }),
  );
_o.displayName = "Inline";
var _0 = "Invariant failed";
function w0(e, t) {
  if (!e) throw new Error(_0);
}
var Gp = _.createContext(!1),
  k0 = function () {
    return _.useContext(Gp);
  },
  O0 = Gp.Provider,
  E0 = ["span", "p", "strong", "em"],
  S0 = function (t, r) {
    var n = e0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return $d.hasOwnProperty(n) ? $d[n] : "color.text";
    }
  },
  Tr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pwu06",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  x0 = { medium: "_11c8fhey", UNSAFE_small: "_11c8rymc", large: "_11c81d4k", small: "_11c8wadc" },
  P0 = { bold: "_k48pwu06", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  C0 = {
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
  $d = {
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
  R0 = _.forwardRef(function (e, t) {
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
    w0(E0.includes(n));
    var v = k0(),
      g = S0(a, v);
    !c && !v && (c = "medium");
    var f = _.createElement(
      n,
      {
        id: s,
        className: oe([
          Tr.root,
          c && x0[c],
          g && C0[g],
          l && Tr.truncation,
          l === 1 && Tr.breakAll,
          o && Tr["textAlign.".concat(o)],
          u && P0[u],
          n === "em" && Tr["as.em"],
          n === "strong" && Tr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      p,
    );
    return v ? f : _.createElement(O0, { value: !0 }, f);
  });
function A0() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var I0 = ["as", "children", "isInset", "testId", "style", "xcss"],
  j0 = ["className"],
  M0 = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      s = e.style,
      c = e.xcss,
      u = le(e, I0);
    u.className;
    var l = le(u, j0);
    return _.createElement(
      n,
      ae({}, l, {
        ref: t,
        className: oe([
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
  T0 = [
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
  D0 = ["className"],
  zd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  F0 = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      s = i === void 0 ? Pe : i,
      c = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = le(e, T0),
      h = _.useContext(Oc),
      b = _.useCallback(
        function (k, w) {
          (h && h.tracePress(c, k.timeStamp), s(k, w));
        },
        [s, h, c],
      ),
      m = Da({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = le(f, D0);
    return _.createElement(
      M0,
      ae({ as: "button", tabIndex: g ?? (A0() && !n ? 0 : void 0), style: d }, y, {
        type: o,
        onClick: m,
        disabled: n,
        xcss: Vp(zd.root, n && zd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  L0 = _.createContext(!1),
  B0 = function () {
    return _.useContext(L0);
  },
  N0 = _.createContext(!1),
  U0 = function () {
    return _.useContext(N0);
  },
  ks = {},
  va = {},
  Vd;
function Hp() {
  if (Vd) return va;
  ((Vd = 1), Object.defineProperty(va, "__esModule", { value: !0 }), (va.bind = void 0));
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
  return ((va.bind = e), va);
}
var lr = {},
  Gd;
function q0() {
  if (Gd) return lr;
  Gd = 1;
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
  var t = Hp();
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
var Hd;
function $0() {
  return (
    Hd ||
      ((Hd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = Hp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = q0();
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
var _r = $0(),
  z0 = ["light", "dark", "auto"],
  V0 = [
    "light-increased-contrast",
    "light",
    "light-future",
    "dark",
    "dark-future",
    "dark-increased-contrast",
    "spacing",
    "shape",
    "typography",
    "motion",
  ],
  G0 = {
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
    "atlassian-motion": {
      id: "motion",
      displayName: "Motion",
      palette: "motionPalette",
      attributes: { type: "motion" },
    },
  },
  be = {
    colorMode: "auto",
    contrastMode: "auto",
    dark: "dark",
    light: "light",
    shape: function () {
      if (ue("platform-dst-shape-theme-default")) return "shape";
    },
    spacing: "spacing",
    typography: "typography",
    motion: function () {
      if (ue("platform-dst-motion-theme-default")) return "motion";
    },
    UNSAFE_themeOptions: void 0,
  },
  H0 = {
    "motion.content.enter.long": "--ds-content-enter-long",
    "motion.content.enter.medium": "--ds-content-enter-medium",
    "motion.content.enter.short": "--ds-content-enter-short",
    "motion.content.exit.long": "--ds-content-exit-long",
    "motion.content.exit.medium": "--ds-content-exit-medium",
    "motion.content.exit.short": "--ds-content-exit-short",
    "motion.dialog.enter": "--ds-dialog-enter",
    "motion.dialog.exit": "--ds-dialog-exit",
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
  wr = "data-theme",
  W0 = "data-subtree-theme",
  ai = "data-color-mode",
  Wp = "data-contrast-mode",
  oi = "data-custom-theme",
  K0 = ["light", "dark", "spacing", "typography", "shape", "motion"],
  Ks = "UNSAFE_themeOptions",
  Kp = function (t) {
    return (
      K0.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Yp = function (t) {
    return (
      V0.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Jp = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  Y0 = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = G(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && Jp(i) && (r[o] = i), Kp(o) && Yp(i) && (r[o] = i), o === Ks))
          try {
            r[Ks] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  J0 = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = G(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && Jp(i)) ||
        (o === Ks && Ee(i) === "object") ||
        (Kp(o) && typeof i == "string" && Yp(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(Ee(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
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
function Kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var X0 = function (t) {
    return (
      z0.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Sc = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(ai) || "",
      n = t.getAttribute(wr) || "";
    return Kd(Kd({}, Y0(n)), X0(r) && { colorMode: r });
  },
  Xp = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  Fa = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function sC(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function Z0(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function cC(e) {
  if (!Fa(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, Z0(e)]
  );
}
function Yd(e) {
  if (!Fa(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function uC(e) {
  if (!Fa(e)) throw new Error("Invalid HEX");
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
function lC(e, t, r) {
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
function Jd(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    s = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    c = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * s + 0.0722 * c;
  return u;
}
function dC(e, t) {
  if (!Fa(e) || !Fa(t)) throw new Error("Invalid HEX");
  var r = Yd(e),
    n = Yd(t),
    a = Jd(r[0], r[1], r[2]),
    o = Jd(n[0], n[1], n[2]),
    i = Math.max(a, o),
    s = Math.min(a, o);
  return (i + 0.05) / (s + 0.05);
}
function fC(e, t) {
  var r = Xd(e),
    n = Xd(t),
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
function Xd(e) {
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
var Zp = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
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
function Qd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Q0 = "light",
  ew = "no-preference",
  Qp = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.colorMode,
      n = r === void 0 ? be.colorMode : r,
      a = t.dark,
      o = a === void 0 ? be.dark : a,
      i = t.light,
      s = i === void 0 ? be.light : i,
      c = t.contrastMode,
      u = c === void 0 ? be.contrastMode : c,
      l = t.motion,
      d = l === void 0 ? be.motion() : l,
      p = t.shape,
      v = p === void 0 ? be.shape() : p,
      g = t.spacing,
      f = g === void 0 ? be.spacing : g,
      h = t.typography,
      b = h === void 0 ? be.typography : h,
      m = t.UNSAFE_themeOptions,
      y = m === void 0 ? be.UNSAFE_themeOptions : m,
      k = J0({ dark: o, light: s, motion: d, shape: v, spacing: f, typography: b }),
      w = x(x({}, wr, k), ai, n === "auto" ? Q0 : n);
    if (
      (ue("platform_increased-contrast-themes") &&
        (w = Qd(Qd({}, w), {}, x({}, Wp, u === "auto" ? ew : u))),
      y && Xp(y.brandColor))
    ) {
      var O = JSON.stringify(y),
        S = Zp(O);
      w[oi] = S;
    }
    return w;
  },
  eh = {
    light: function () {
      return ze(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return ze(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return ze(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return ze(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return ze(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return ze(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return ze(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return ze(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    shape: function () {
      return ze(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
    motion: function () {
      return ze(() => import("./atlassian-motion-Dc6J6xcy.js"), [], import.meta.url);
    },
  },
  tw = (function () {
    var e = X(
      M.mark(function t(r) {
        var n, a;
        return M.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(wr, '="').concat(r, '"]:not([').concat(oi, "])"),
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
                return ((i.next = 6), rw(r));
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
  rw = (function () {
    var e = X(
      M.mark(function t(r) {
        var n, a;
        return M.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), eh[r]());
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
  nw = "(prefers-color-scheme: dark)",
  aw = "(prefers-contrast: more)",
  ow = typeof window < "u" && "matchMedia" in window;
function iw(e) {
  var t = document.documentElement;
  t.setAttribute(ai, e.matches ? "dark" : "light");
}
var Dr = ow && window.matchMedia(nw),
  sw = (function () {
    function e() {
      (he(this, e), x(this, "unbindThemeChangeListener", null));
    }
    return ge(e, [
      {
        key: "getColorMode",
        value: function () {
          return Dr && Dr != null && Dr.matches ? "dark" : "light";
        },
      },
      {
        key: "bind",
        value: function () {
          Dr &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = _r.bind(Dr, { type: "change", listener: iw }));
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
  fo = new sw(),
  cw = typeof window < "u" && "matchMedia" in window;
function uw(e) {
  var t = document.documentElement;
  t.setAttribute(Wp, e.matches ? "more" : "no-preference");
}
var Fr = cw && window.matchMedia(aw),
  lw = (function () {
    function e() {
      (he(this, e), x(this, "unbindContrastChangeListener", null));
    }
    return ge(e, [
      {
        key: "getContrastMode",
        value: function () {
          return Fr && Fr != null && Fr.matches ? "more" : "no-preference";
        },
      },
      {
        key: "bind",
        value: function () {
          Fr &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = _r.bind(Fr, { type: "change", listener: uw }));
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
  vo = new lw();
function dw(e) {
  (e.colorMode === "auto" ? ((e.colorMode = fo.getColorMode()), fo.bind()) : fo.unbind(),
    ue("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = vo.getContrastMode()), vo.bind())
        : vo.unbind()));
  var t = Qp(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = G(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (fo.unbind(), ue("platform_increased-contrast-themes") && vo.unbind());
    }
  );
}
function fw(e, t) {
  var r = JSON.stringify(e),
    n = Zp(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(oi, '="').concat(n, '"][').concat(wr, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function vC(e) {
  var t = Oe(Array.from(document.head.querySelectorAll("style[".concat(oi, "][").concat(wr, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function pC(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = G(n, 2),
      o = a[0],
      i = a[1],
      s = H0[o];
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
function ef(e) {
  var t;
  return (t = Object.entries(G0).find(function (r) {
    var n = G(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var vw = function (t) {
    var r = t.colorMode,
      n = t.contrastMode,
      a = t.dark,
      o = t.light,
      i = t.shape,
      s = t.spacing,
      c = t.typography,
      u = t.motion,
      l = [o, a],
      d = [];
    if (r === "auto")
      (n !== "no-preference" &&
        ue("platform_increased-contrast-themes") &&
        l.forEach(function (v) {
          var g = ef(v);
          g && l.push(g);
        }),
        d.push.apply(d, l));
    else if ((d.push(t[r]), n !== "no-preference" && ue("platform_increased-contrast-themes"))) {
      var p = ef(t[r]);
      p && d.push(p);
    }
    return (
      [i, s, c, u].forEach(function (v) {
        v && d.push(v);
      }),
      Oe(new Set(d))
    );
  },
  pw = function (t) {
    var r = [];
    return Oe(new Set(r));
  };
function hw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = gw(e)) || t) {
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
function gw(e, t) {
  if (e) {
    if (typeof e == "string") return tf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? tf(e, t)
          : void 0
    );
  }
}
function tf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
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
function nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bw = (function () {
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
          g,
          f,
          h,
          b,
          m,
          y,
          k,
          w,
          O,
          S,
          R,
          A,
          P,
          I,
          U,
          V,
          q,
          K,
          B,
          H,
          W = arguments;
        return M.wrap(
          function (D) {
            for (;;)
              switch ((D.prev = D.next)) {
                case 0:
                  return (
                    (r = W.length > 0 && W[0] !== void 0 ? W[0] : {}),
                    (n = W.length > 1 ? W[1] : void 0),
                    (a =
                      typeof r == "function"
                        ? r(
                            nf(
                              nf({}, be),
                              {},
                              { typography: be.typography, shape: be.shape(), motion: be.motion() },
                              Sc(),
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
                    (g = v === void 0 ? be.shape() : v),
                    (f = a.spacing),
                    (h = f === void 0 ? be.spacing : f),
                    (b = a.typography),
                    (m = b === void 0 ? be.typography : b),
                    (y = a.motion),
                    (k = y === void 0 ? be.motion() : y),
                    (w = a.UNSAFE_themeOptions),
                    (O = w === void 0 ? be.UNSAFE_themeOptions : w),
                    ue("platform_increased-contrast-themes") ||
                      (p === "light-increased-contrast" && (p = "light"),
                      l === "dark-increased-contrast" && (l = "dark")),
                    (S = {
                      colorMode: i,
                      contrastMode: c,
                      dark: l,
                      light: p,
                      shape: g,
                      spacing: h,
                      typography: m,
                      motion: k,
                      UNSAFE_themeOptions: n ? void 0 : O,
                    }),
                    (R = vw(S)),
                    (A = n || tw),
                    (P = R.map(
                      (function () {
                        var ie = X(
                          M.mark(function ee(we) {
                            return M.wrap(function (j) {
                              for (;;)
                                switch ((j.prev = j.next)) {
                                  case 0:
                                    return ((j.next = 2), A(we));
                                  case 2:
                                    return j.abrupt("return", j.sent);
                                  case 3:
                                  case "end":
                                    return j.stop();
                                }
                            }, ee);
                          }),
                        );
                        return function (ee) {
                          return ie.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      O &&
                      Xp(O?.brandColor) &&
                      ((I = i || be.colorMode),
                      (U = fw(O, I)),
                      U.length > 0 &&
                        P.push(
                          X(
                            M.mark(function ie() {
                              var ee, we;
                              return M.wrap(function (j) {
                                for (;;)
                                  switch ((j.prev = j.next)) {
                                    case 0:
                                      return (
                                        (j.next = 2),
                                        ze(
                                          () => import("./custom-theme-BNcP7vBe.js"),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((ee = j.sent),
                                        (we = ee.loadAndAppendCustomThemeCss),
                                        we({
                                          colorMode: U.length === 2 ? "auto" : U[0],
                                          UNSAFE_themeOptions: O,
                                        }));
                                    case 5:
                                    case "end":
                                      return j.stop();
                                  }
                              }, ie);
                            }),
                          )(),
                        )),
                    (D.next = 11),
                    Promise.all(P)
                  );
                case 11:
                  ((V = pw()), (q = hw(V)), (D.prev = 13), q.s());
                case 15:
                  if ((K = q.n()).done) {
                    D.next = 21;
                    break;
                  }
                  return ((B = K.value), (D.next = 19), A(B));
                case 19:
                  D.next = 15;
                  break;
                case 21:
                  D.next = 26;
                  break;
                case 23:
                  ((D.prev = 23), (D.t0 = D.catch(13)), q.e(D.t0));
                case 26:
                  return ((D.prev = 26), q.f(), D.finish(26));
                case 29:
                  return ((H = dw(S)), D.abrupt("return", H));
                case 31:
                case "end":
                  return D.stop();
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
  xc = (function () {
    function e(t) {
      (he(this, e), x(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return ge(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = Sc();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [wr, ai] }));
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
x(xc, "observer", null);
x(xc, "callbacks", new Set());
var th = _.createContext(void 0),
  mw = _.createContext(void 0),
  rh = _.createContext(!1),
  yw = _.createContext(void 0),
  _w = _.createContext(void 0),
  ww = function () {
    var t;
    return (t = _.useContext(rh)) !== null && t !== void 0 ? t : !1;
  },
  nh = function () {
    return typeof document < "u" ? document : null;
  };
function ah(e) {
  var t = nh();
  return t ? t.head.querySelector("style[".concat(wr, '="').concat(e, '"]')) : !1;
}
var kw = (function () {
    var e = X(
      M.mark(function t(r) {
        var n, a;
        return M.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!ah(r)) {
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
                return ((i.next = 6), eh[r]());
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
  Ow = (function () {
    var e = X(
      M.mark(function t(r, n) {
        var a, o;
        return M.wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                if (((a = nh()), a)) {
                  s.next = 3;
                  break;
                }
                return s.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !ah(n))
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
  Ew = (function () {
    var e = X(
      M.mark(function t(r) {
        var n;
        return M.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), kw(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                Ow(n, r);
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
  Sw = (function () {
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
                  n.forEach(Ew));
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
function mt(e) {
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
var xw = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  Pw = typeof window < "u" && "matchMedia" in window,
  xa = Pw ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function of(e) {
  return e === "auto" ? (xa != null && xa.matches ? "dark" : "light") : e;
}
var Cw = { body: "_1e0c1bgi" };
function oh(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = _.useState(n),
    i = G(o, 2),
    s = i[0],
    c = i[1],
    u = _.useState(of(n)),
    l = G(u, 2),
    d = l[0],
    p = l[1],
    v = _.useState(function () {
      return mt(mt({}, xw), a);
    }),
    g = G(v, 2),
    f = g[0],
    h = g[1],
    b = _.useCallback(function (P) {
      (c(P), p(of(P)));
    }, []),
    m = _.useCallback(function (P) {
      h(function (I) {
        return mt(mt({}, I), P);
      });
    }, []),
    y = _.useRef(null),
    k = B0(),
    w = U0(),
    O = ww(),
    S = k && !O && w,
    R = (!ue("platform_dst_subtree_theming") && !k && !O) || S;
  (_.useEffect(
    function () {
      if (R) {
        var P = (function () {
            var U = X(
              M.mark(function V() {
                var q;
                return M.wrap(function (B) {
                  for (;;)
                    switch ((B.prev = B.next)) {
                      case 0:
                        if (!y.current) {
                          B.next = 6;
                          break;
                        }
                        return ((B.next = 3), y.current);
                      case 3:
                        ((q = B.sent), q(), (y.current = null));
                      case 6:
                      case "end":
                        return B.stop();
                    }
                }, V);
              }),
            );
            return function () {
              return U.apply(this, arguments);
            };
          })(),
          I = (function () {
            var U = X(
              M.mark(function V() {
                var q;
                return M.wrap(function (B) {
                  for (;;)
                    switch ((B.prev = B.next)) {
                      case 0:
                        return ((B.next = 2), P());
                      case 2:
                        ((q = bw(mt(mt({}, f), {}, { colorMode: d }))), (y.current = q));
                      case 4:
                      case "end":
                        return B.stop();
                    }
                }, V);
              }),
            );
            return function () {
              return U.apply(this, arguments);
            };
          })();
        return (
          I(),
          function () {
            P();
          }
        );
      } else Sw(f);
    },
    [k, O, S, d, R, f],
  ),
    _.useEffect(
      function () {
        if (xa) {
          var P = _r.bind(xa, {
            type: "change",
            listener: function (U) {
              s === "auto" && p(U.matches ? "dark" : "light");
            },
          });
          return P;
        }
      },
      [s],
    ));
  var A = mt(mt({}, Qp(mt(mt({}, f), {}, { colorMode: d }))), {}, x({}, W0, !0));
  return E.createElement(
    rh.Provider,
    { value: !0 },
    E.createElement(
      th.Provider,
      { value: d },
      E.createElement(
        mw.Provider,
        { value: b },
        E.createElement(
          yw.Provider,
          { value: f },
          E.createElement(
            _w.Provider,
            { value: m },
            !R && ue("platform_dst_subtree_theming")
              ? E.createElement("div", ae({}, A, { className: oe([Cw.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function ih() {
  var e = _.useContext(th),
    t = Sc(),
    r = _.useState(t?.colorMode || "light"),
    n = G(r, 2),
    a = n[0],
    o = n[1];
  return (
    _.useEffect(
      function () {
        if (!e) {
          var i = new xc(function (s) {
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
var Rw = function () {
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
  sh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Rw() });
  },
  Aw = sh(),
  Iw = _.createContext(sh()),
  jw = function (e) {
    return e.value++;
  },
  Mw = function (e) {
    return e ? e.prefix : "";
  },
  Tw = function (e) {
    var t = e || Aw,
      r = Mw(t),
      n = jw(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  ch = function () {
    var e = _.useContext(Iw),
      t = _.useState(function () {
        return Tw(e);
      })[0];
    return t;
  },
  Dw = function () {
    var e = ch().uid;
    return e;
  },
  Fw = function () {
    var e = ch().gen;
    return e;
  },
  Os,
  wo = (Os = E.useId) !== null && Os !== void 0 ? Os : void 0;
function Lw() {
  return wo && ue("platform-dst-react-18-use-id")
    ? ue("platform-dst-react-18-use-id-selector-safe")
      ? wo().replace(/[:«»]/g, "_")
      : wo()
    : "uid".concat(Dw());
}
function Bw() {
  if (wo && ue("platform-dst-react-18-use-id")) {
    var e = Lw();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Fw();
}
var Pc = function (t) {
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
      className: oe([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
Pc.displayName = "VisuallyHidden";
function Nw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Uw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var qw = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Uw(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Nw(a);
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
  xe = "-ms-",
  Lo = "-moz-",
  te = "-webkit-",
  uh = "comm",
  Cc = "rule",
  Rc = "decl",
  $w = "@import",
  lh = "@keyframes",
  zw = "@layer",
  Vw = Math.abs,
  ii = String.fromCharCode,
  Gw = Object.assign;
function Hw(e, t) {
  return Se(e, 0) ^ 45
    ? (((((((t << 2) ^ Se(e, 0)) << 2) ^ Se(e, 1)) << 2) ^ Se(e, 2)) << 2) ^ Se(e, 3)
    : 0;
}
function dh(e) {
  return e.trim();
}
function Ww(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function re(e, t, r) {
  return e.replace(t, r);
}
function Ys(e, t) {
  return e.indexOf(t);
}
function Se(e, t) {
  return e.charCodeAt(t) | 0;
}
function La(e, t, r) {
  return e.slice(t, r);
}
function _t(e) {
  return e.length;
}
function Ac(e) {
  return e.length;
}
function po(e, t) {
  return (t.push(e), e);
}
function Kw(e, t) {
  return e.map(t).join("");
}
var si = 1,
  Gr = 1,
  fh = 0,
  Be = 0,
  me = 0,
  Zr = "";
function ci(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: si,
    column: Gr,
    length: i,
    return: "",
  };
}
function pa(e, t) {
  return Gw(ci("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Yw() {
  return me;
}
function Jw() {
  return ((me = Be > 0 ? Se(Zr, --Be) : 0), Gr--, me === 10 && ((Gr = 1), si--), me);
}
function He() {
  return ((me = Be < fh ? Se(Zr, Be++) : 0), Gr++, me === 10 && ((Gr = 1), si++), me);
}
function Et() {
  return Se(Zr, Be);
}
function ko() {
  return Be;
}
function Wa(e, t) {
  return La(Zr, e, t);
}
function Ba(e) {
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
function vh(e) {
  return ((si = Gr = 1), (fh = _t((Zr = e))), (Be = 0), []);
}
function ph(e) {
  return ((Zr = ""), e);
}
function Oo(e) {
  return dh(Wa(Be - 1, Js(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xw(e) {
  for (; (me = Et()) && me < 33; ) He();
  return Ba(e) > 2 || Ba(me) > 3 ? "" : " ";
}
function Zw(e, t) {
  for (; --t && He() && !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97)); );
  return Wa(e, ko() + (t < 6 && Et() == 32 && He() == 32));
}
function Js(e) {
  for (; He(); )
    switch (me) {
      case e:
        return Be;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Js(me);
        break;
      case 40:
        e === 41 && Js(e);
        break;
      case 92:
        He();
        break;
    }
  return Be;
}
function Qw(e, t) {
  for (; He() && e + me !== 57; ) if (e + me === 84 && Et() === 47) break;
  return "/*" + Wa(t, Be - 1) + "*" + ii(e === 47 ? e : He());
}
function e1(e) {
  for (; !Ba(Et()); ) He();
  return Wa(e, Be);
}
function t1(e) {
  return ph(Eo("", null, null, null, [""], (e = vh(e)), 0, [0], e));
}
function Eo(e, t, r, n, a, o, i, s, c) {
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
      m = 0,
      y = "",
      k = a,
      w = o,
      O = n,
      S = y;
    h;
  )
    switch (((g = m), (m = He()))) {
      case 40:
        if (g != 108 && Se(S, d - 1) == 58) {
          Ys((S += re(Oo(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Oo(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Xw(g);
        break;
      case 92:
        S += Zw(ko() - 1, 7);
        continue;
      case 47:
        switch (Et()) {
          case 42:
          case 47:
            po(r1(Qw(He(), ko()), t, r), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * f:
        s[u++] = _t(S) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (b == -1 && (S = re(S, /\f/g, "")),
              v > 0 &&
                _t(S) - d &&
                po(v > 32 ? cf(S + ";", n, r, d - 1) : cf(re(S, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            S += ";";
          default:
            if ((po((O = sf(S, t, r, u, l, a, s, y, (k = []), (w = []), d)), o), m === 123))
              if (l === 0) Eo(S, t, O, O, k, o, d, s, w);
              else
                switch (p === 99 && Se(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Eo(
                      e,
                      O,
                      O,
                      n && po(sf(e, O, O, 0, 0, a, s, y, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      s,
                      n ? k : w,
                    );
                    break;
                  default:
                    Eo(S, O, O, O, [""], w, 0, s, w);
                }
        }
        ((u = l = v = 0), (f = b = 1), (y = S = ""), (d = i));
        break;
      case 58:
        ((d = 1 + _t(S)), (v = g));
      default:
        if (f < 1) {
          if (m == 123) --f;
          else if (m == 125 && f++ == 0 && Jw() == 125) continue;
        }
        switch (((S += ii(m)), m * f)) {
          case 38:
            b = l > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            ((s[u++] = (_t(S) - 1) * b), (b = 1));
            break;
          case 64:
            (Et() === 45 && (S += Oo(He())), (p = Et()), (l = d = _t((y = S += e1(ko())))), m++);
            break;
          case 45:
            g === 45 && _t(S) == 2 && (f = 0);
        }
    }
  return o;
}
function sf(e, t, r, n, a, o, i, s, c, u, l) {
  for (var d = a - 1, p = a === 0 ? o : [""], v = Ac(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, m = La(e, d + 1, (d = Vw((f = i[g])))), y = e; b < v; ++b)
      (y = dh(f > 0 ? p[b] + " " + m : re(m, /&\f/g, p[b]))) && (c[h++] = y);
  return ci(e, t, r, a === 0 ? Cc : s, c, u, l);
}
function r1(e, t, r) {
  return ci(e, t, r, uh, ii(Yw()), La(e, 2, -2), 0);
}
function cf(e, t, r, n) {
  return ci(e, t, r, Rc, La(e, 0, n), La(e, n + 1, -1), n);
}
function zr(e, t) {
  for (var r = "", n = Ac(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function n1(e, t, r, n) {
  switch (e.type) {
    case zw:
      if (e.children.length) break;
    case $w:
    case Rc:
      return (e.return = e.return || e.value);
    case uh:
      return "";
    case lh:
      return (e.return = e.value + "{" + zr(e.children, n) + "}");
    case Cc:
      e.value = e.props.join(",");
  }
  return _t((r = zr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function a1(e) {
  var t = Ac(e);
  return function (r, n, a, o) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, n, a, o) || "";
    return i;
  };
}
function o1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function i1(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var s1 = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Et()), a === 38 && o === 12 && (r[n] = 1), !Ba(o); ) He();
    return Wa(t, Be);
  },
  c1 = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Ba(a)) {
        case 0:
          (a === 38 && Et() === 12 && (r[n] = 1), (t[n] += s1(Be - 1, r, n)));
          break;
        case 2:
          t[n] += Oo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Et() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += ii(a);
      }
    while ((a = He()));
    return t;
  },
  u1 = function (t, r) {
    return ph(c1(vh(t), r));
  },
  uf = new WeakMap(),
  l1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !uf.get(n)) && !a) {
        uf.set(t, !0);
        for (var o = [], i = u1(r, o), s = n.props, c = 0, u = 0; c < i.length; c++)
          for (var l = 0; l < s.length; l++, u++)
            t.props[u] = o[c] ? i[c].replace(/&\f/g, s[l]) : s[l] + " " + i[c];
      }
    }
  },
  d1 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function hh(e, t) {
  switch (Hw(e, t)) {
    case 5103:
      return te + "print-" + e + e;
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
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + Lo + e + xe + e + e;
    case 6828:
    case 4268:
      return te + e + xe + e + e;
    case 6165:
      return te + e + xe + "flex-" + e + e;
    case 5187:
      return te + e + re(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + xe + "flex-$1$2") + e;
    case 5443:
      return te + e + xe + "flex-item-" + re(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + xe + "flex-line-pack" + re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + xe + re(e, "shrink", "negative") + e;
    case 5292:
      return te + e + xe + re(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + re(e, "-grow", "") + te + e + xe + re(e, "grow", "positive") + e;
    case 4554:
      return te + re(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return re(re(re(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return re(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return (
        re(
          re(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + xe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        te +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return re(e, /(.+)-inline(.+)/, te + "$1$2") + e;
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
      if (_t(e) - 1 - t > 6)
        switch (Se(e, t + 1)) {
          case 109:
            if (Se(e, t + 4) !== 45) break;
          case 102:
            return (
              re(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + te + "$2-$3$1" + Lo + (Se(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ys(e, "stretch") ? hh(re(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Se(e, t + 1) !== 115) break;
    case 6444:
      switch (Se(e, _t(e) - 3 - (~Ys(e, "!important") && 10))) {
        case 107:
          return re(e, ":", ":" + te) + e;
        case 101:
          return (
            re(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                te +
                (Se(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                te +
                "$2$3$1" +
                xe +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Se(e, t + 11)) {
        case 114:
          return te + e + xe + re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + xe + re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + xe + re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + xe + e + e;
  }
  return e;
}
var f1 = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Rc:
          t.return = hh(t.value, t.length);
          break;
        case lh:
          return zr([pa(t, { value: re(t.value, "@", "@" + te) })], a);
        case Cc:
          if (t.length)
            return Kw(t.props, function (o) {
              switch (Ww(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return zr([pa(t, { props: [re(o, /:(read-\w+)/, ":" + Lo + "$1")] })], a);
                case "::placeholder":
                  return zr(
                    [
                      pa(t, { props: [re(o, /:(plac\w+)/, ":" + te + "input-$1")] }),
                      pa(t, { props: [re(o, /:(plac\w+)/, ":" + Lo + "$1")] }),
                      pa(t, { props: [re(o, /:(plac\w+)/, xe + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  v1 = [f1],
  p1 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || v1,
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
      u = [l1, d1];
    {
      var l,
        d = [
          n1,
          o1(function (f) {
            l.insert(f);
          }),
        ],
        p = a1(u.concat(a, d)),
        v = function (h) {
          return zr(t1(h), p);
        };
      c = function (h, b, m, y) {
        ((l = m), v(h ? h + "{" + b.styles + "}" : b.styles), y && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new qw({
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
  Es = { exports: {} },
  ne = {};
var lf;
function h1() {
  if (lf) return ne;
  lf = 1;
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
    return y(w) === u;
  }
  return (
    (ne.AsyncMode = c),
    (ne.ConcurrentMode = u),
    (ne.ContextConsumer = s),
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
      return k(w) || y(w) === c;
    }),
    (ne.isConcurrentMode = k),
    (ne.isContextConsumer = function (w) {
      return y(w) === s;
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
            w.$$typeof === s ||
            w.$$typeof === l ||
            w.$$typeof === h ||
            w.$$typeof === b ||
            w.$$typeof === m ||
            w.$$typeof === f))
      );
    }),
    (ne.typeOf = y),
    ne
  );
}
var df;
function g1() {
  return (df || ((df = 1), (Es.exports = h1())), Es.exports);
}
var Ss, ff;
function b1() {
  if (ff) return Ss;
  ff = 1;
  var e = g1(),
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
      var m = c(f);
      u && (m = m.concat(u(f)));
      for (var y = i(g), k = i(f), w = 0; w < m.length; ++w) {
        var O = m[w];
        if (!r[O] && !(h && h[O]) && !(k && k[O]) && !(y && y[O])) {
          var S = l(f, O);
          try {
            s(g, O, S);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((Ss = v), Ss);
}
b1();
var m1 = !0;
function gh(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Ic = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || m1 === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  bh = function (t, r, n) {
    Ic(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function y1(e) {
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
var _1 = {
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
  w1 = /[A-Z]|^ms/g,
  k1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  mh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  vf = function (t) {
    return t != null && typeof t != "boolean";
  },
  xs = i1(function (e) {
    return mh(e) ? e : e.replace(w1, "-$&").toLowerCase();
  }),
  pf = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(k1, function (n, a, o) {
            return ((wt = { name: a, styles: o, next: wt }), a);
          });
    }
    return _1[t] !== 1 && !mh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Na(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((wt = { name: a.name, styles: a.styles, next: wt }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((wt = { name: i.name, styles: i.styles, next: wt }), (i = i.next));
        var s = o.styles + ";";
        return s;
      }
      return O1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = wt,
          u = r(e);
        return ((wt = c), Na(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function O1(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += Na(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0
          ? (n += o + "{" + t[s] + "}")
          : vf(s) && (n += xs(o) + ":" + pf(o, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++) vf(i[c]) && (n += xs(o) + ":" + pf(o, i[c]) + ";");
      else {
        var u = Na(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += xs(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var hf = /label:\s*([^\s;{]+)\s*(;|$)/g,
  wt;
function jc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  wt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += Na(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += Na(r, t, e[s])), n)) {
      var c = o;
      a += c[s];
    }
  hf.lastIndex = 0;
  for (var u = "", l; (l = hf.exec(a)) !== null; ) u += "-" + l[1];
  var d = y1(a) + u;
  return { name: d, styles: a, next: wt };
}
var E1 = function (t) {
    return t();
  },
  S1 = ou.useInsertionEffect ? ou.useInsertionEffect : !1,
  yh = S1 || E1,
  _h = _.createContext(typeof HTMLElement < "u" ? p1({ key: "css" }) : null);
_h.Provider;
var wh = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(_h);
      return t(r, a, n);
    });
  },
  kh = _.createContext({}),
  Mc = {}.hasOwnProperty,
  Xs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  x1 = function (t, r) {
    var n = {};
    for (var a in r) Mc.call(r, a) && (n[a] = r[a]);
    return ((n[Xs] = t), n);
  },
  P1 = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Ic(r, n, a),
      yh(function () {
        return bh(r, n, a);
      }),
      null
    );
  },
  C1 = wh(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Xs],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = gh(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var s = jc(o, void 0, _.useContext(kh));
    i += t.key + "-" + s.name;
    var c = {};
    for (var u in e) Mc.call(e, u) && u !== "css" && u !== Xs && (c[u] = e[u]);
    return (
      (c.className = i),
      r && (c.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(P1, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        _.createElement(a, c),
      )
    );
  }),
  R1 = C1,
  Bt = function (t, r) {
    var n = arguments;
    if (r == null || !Mc.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = R1), (o[1] = x1(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return _.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Bt || (Bt = {}));
function jt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return jc(t);
}
var A1 = function e(t) {
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
function I1(e, t, r) {
  var n = [],
    a = gh(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var j1 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      yh(function () {
        for (var a = 0; a < n.length; a++) bh(r, n[a], !1);
      }),
      null
    );
  },
  M1 = wh(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        var d = jc(u, t.registered);
        return (r.push(d), Ic(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        return I1(t.registered, n, A1(u));
      },
      o = { css: n, cx: a, theme: _.useContext(kh) },
      i = e.children(o);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(j1, { cache: t, serializedArr: r }),
      i,
    );
  });
function T1(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Oh = 2,
  Zs = jt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Oh,
  }),
  Qs = jt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Oh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  D1 = jt({
    "&:focus": Zs,
    "&:focus-visible": Zs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  F1 = jt({
    "&:focus": Qs,
    "&:focus-visible": Qs,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Eh = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Qs : Zs,
      o = r ? F1 : D1,
      i = typeof n > "u" ? o : n === "on" && a;
    return Bt(M1, null, function (s) {
      var c = s.css,
        u = s.cx;
      return _.Children.only(
        i ? _.cloneElement(t, { className: u([c(i), t.props.className]) }) : t,
      );
    });
  });
Eh.displayName = "FocusRing";
function Lt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var L1 = 9;
function gf(e) {
  e.keyCode !== L1 && Lt(e);
}
var B1 = {
    onMouseDownCapture: Lt,
    onMouseUpCapture: Lt,
    onKeyDownCapture: gf,
    onKeyUpCapture: gf,
    onTouchStartCapture: Lt,
    onTouchEndCapture: Lt,
    onPointerDownCapture: Lt,
    onPointerUpCapture: Lt,
    onClickCapture: Lt,
    onClick: Lt,
  },
  N1 = {};
function U1(e) {
  var t = e.isInteractive;
  return t ? N1 : B1;
}
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
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Jt = 8,
  Ps = ["default", "primary", "danger", "warning"],
  ec = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  q1 = { default: ec.default, compact: ec.compact, none: "inherit" },
  $1 = {
    default: "0 ".concat(Jt + Jt / 4, "px"),
    compact: "0 ".concat(Jt + Jt / 4, "px"),
    none: "0",
  },
  z1 = { compact: "0 ".concat(Jt / 4, "px"), default: "0 ".concat(Jt / 4, "px"), none: "0" },
  V1 = { default: "middle", compact: "middle", none: "baseline" },
  Sh = { content: "0 ".concat(Jt / 4, "px"), icon: "0 ".concat(Jt / 4, "px") },
  xh = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  G1 = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": De(De({}, xh), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  H1 = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  W1 = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  K1 = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  Y1 = {
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
  J1 = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  X1 = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  Z1 = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": De(
      De({}, xh),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  Q1 = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function ek(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return De(
    De(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: ue("platform-dst-shape-theme-default")
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
        height: ec[r],
        lineHeight: q1[r],
        padding: o ? z1[r] : $1[r],
        verticalAlign: V1[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? Z1
        : De(
            De(
              De(
                De(
                  De(
                    De(
                      De(De({}, t === "default" && G1), t === "primary" && H1),
                      t === "link" && W1,
                    ),
                    t === "subtle" && K1,
                  ),
                  t === "subtle-link" && Y1,
                ),
                t === "warning" && J1,
              ),
              t === "danger" && X1,
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
            Q1,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function mf(e) {
  var t = e.spacing;
  return jt({
    display: "flex",
    margin: t === "none" ? 0 : Sh.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function tk(e) {
  var t = e.spacing;
  return jt({
    margin: t === "none" ? 0 : Sh.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function rk(e) {
  var t = e.hasOverlay;
  return jt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var nk = {
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
    return t && _.isValidElement(t) && t.type === Pc;
  },
  ak = [
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
  ok = { "> *": { pointerEvents: "none" } },
  ik = jt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  sk = jt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  yf = function (t, r) {
    return !t || Tc(t) ? null : r;
  },
  ck = function (t, r) {
    return Tc(t) ? t : t ? Bt("span", { css: r }, t) : null;
  },
  uk = E.forwardRef(function (t, r) {
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
      m = b === void 0 ? !1 : b,
      y = t.isSelected,
      k = y === void 0 ? !1 : y,
      w = t.onBlur,
      O = t.onClick,
      S = O === void 0 ? Pe : O,
      R = t.onFocus,
      A = t.onMouseDown,
      P = A === void 0 ? Pe : A,
      I = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      V = U === void 0 ? "default" : U,
      q = t.tabIndex,
      K = q === void 0 ? 0 : q,
      B = t.type,
      H = B === void 0 ? (d ? void 0 : "button") : B,
      W = t.testId,
      z = le(t, ak),
      D = _.useRef(),
      ie = _.useCallback(
        function (pe) {
          if (((D.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [D, r],
      );
    T1(D, s);
    var ee = _.useContext(Oc),
      we = _.useCallback(
        function (pe, qe) {
          (ee && ee.tracePress(h, pe.timeStamp), S(pe, qe));
        },
        [S, ee, h],
      ),
      _e = Da({
        fn: we,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      j = _.useCallback(
        function (pe) {
          (pe.preventDefault(), P(pe));
        },
        [P],
      );
    _.useEffect(
      function () {
        var pe = D.current;
        m && pe && pe === document.activeElement && pe.blur();
      },
      [m],
    );
    var ke = !!I,
      Ue = jt(rk({ hasOverlay: ke })),
      ve = !m && !ke,
      Ae = {};
    return (
      (k || m || o === "warning") &&
        (Ae = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || m
                ? "var(--ds-icon-subtle, ".concat(Hs, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Hs, ")"),
              " !important",
            ),
          },
        }),
      Bt(
        Eh,
        null,
        Bt(
          v,
          ae(
            {},
            z,
            {
              ref: ie,
              className: l,
              css: [c, ve ? null : ok],
              "data-has-overlay": ke ? !0 : void 0,
              "data-testid": W,
              disabled: m,
              href: ve ? d : void 0,
              onBlur: w,
              onClick: _e,
              onFocus: R,
              onMouseDown: j,
              tabIndex: m ? -1 : K,
              type: H,
            },
            U1({ isInteractive: ve }),
          ),
          f ? Bt("span", { css: [Ue, mf({ spacing: V }), yf(u, ik)] }, f) : null,
          ck(u, [Ue, tk({ spacing: V })]),
          g ? Bt("span", { css: [Ue, mf({ spacing: V }), yf(u, sk)] }, g) : null,
          I ? Bt("span", { css: [nk, Ae] }, I) : null,
        ),
      )
    );
  });
function lk(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Tc(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var dk = [
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
  _f = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  Dc = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        u = c === void 0 ? !1 : c,
        l = t.onMouseDown,
        d = l === void 0 ? Pe : l,
        p = t.onMouseUp,
        v = p === void 0 ? Pe : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        m = le(t, dk),
        y = lk({ children: o, iconBefore: i, iconAfter: s }),
        k = _.useState(!1),
        w = G(k, 2),
        O = w[0],
        S = w[1],
        R = _.useCallback(
          function (I) {
            (d(I), _f && S(!0));
          },
          [d, S],
        ),
        A = _.useCallback(
          function (I) {
            (v(I), _f && S(!1));
          },
          [v, S],
        ),
        P = _.useMemo(
          function () {
            return ek({
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
        uk,
        ae({}, m, {
          ref: r,
          appearance: a,
          buttonCss: P,
          children: o,
          "data-firefox-is-active": O ? !0 : void 0,
          iconAfter: s,
          iconBefore: i,
          isSelected: u,
          onMouseDown: R,
          onMouseUp: A,
          spacing: b,
        }),
      );
    }),
  );
Dc.displayName = "Button";
function wf(e) {
  return E.createElement(Dc, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function fk(e) {
  return E.createElement(Dc, ae({}, e, { appearance: "subtle" }));
}
var vk = { container: "_1e0c1txw _kqswh2mm" };
function pk(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return E.createElement(
    ni,
    { as: "li", testId: r, key: t, xcss: vk.container, paddingInline: "space.100" },
    E.createElement(
      R0,
      { testId: r && "".concat(r, "-text") },
      E.createElement(Pc, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var kf = {},
  Of =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function hk(e, t) {
  return !!(e === t || (Of(e) && Of(t)));
}
function gk(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!hk(e[r], t[r])) return !1;
  return !0;
}
function bk(e, t) {
  t === void 0 && (t = gk);
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
var mk = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    s = n.transform,
    c = t.length,
    u = c > o,
    l = u && o - 4 < r,
    d = u && r < c - o + 3,
    p = bk(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      return t.slice(h, b).map(function (m, y) {
        return s(m, h + y, a);
      });
    });
  if (!u) return p(0, c);
  if (l && !d) {
    var v = o - 2;
    return [].concat(
      Oe(p(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - v })],
      Oe(p(c - v)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Oe(p(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: c - 1 })],
      Oe(p(c - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Oe(p(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Oe(p(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    Oe(p(c - 1)),
  );
};
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
function yk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ef(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ef(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var tc = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect4ttxp",
    navigatorIconWrapper: "_18zr12x7",
  },
  _k = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function Sf(e) {
  var t = e.chevronDirection,
    r = t === "left" ? J_ : Q_;
  return E.createElement(
    ni,
    { as: "span", xcss: tc.navigatorIconWrapper },
    E.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function wk(e, t) {
  var r = e.components,
    n = r === void 0 ? kf : r,
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
    h = f === void 0 ? kf : f,
    b = e.max,
    m = b === void 0 ? 7 : b,
    y = e.onChange,
    k = y === void 0 ? Pe : y,
    w = e.pages,
    O = e.getPageLabel,
    S = e.renderEllipsis,
    R = S === void 0 ? pk : S,
    A = e.analyticsContext,
    P = e.testId,
    I = e.isDisabled,
    U = z_(i, function () {
      return o || 0;
    }),
    V = G(U, 2),
    q = V[0],
    K = V[1],
    B = Da(
      yk(
        {
          fn: function (z, D) {
            var ie = z.event,
              ee = z.selectedPageIndex;
            (i === void 0 && K(ee), k && k(ie, w[ee], D));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: A,
        },
        _k,
      ),
    ),
    H = function (z, D, ie) {
      var ee = w[q],
        we = "".concat(l, " ").concat(O ? O(z, D) : z),
        _e = z === ee;
      return E.createElement(
        _o,
        { as: "li", xcss: tc.paginationMenuItem, key: "page-".concat(O ? O(z, D) : D) },
        E.createElement(
          fk,
          {
            component: n.Page,
            onClick: function (ke) {
              return B({ event: ke, selectedPageIndex: D });
            },
            "aria-current": _e ? "page" : void 0,
            "aria-label": we,
            isSelected: _e,
            isDisabled: I,
            page: z,
            testId:
              ie &&
              ""
                .concat(ie, "--")
                .concat(_e ? "current-" : "", "page-")
                .concat(D),
          },
          O ? O(z, D) : z,
        ),
      );
    };
  return E.createElement(
    ni,
    { testId: P, style: h, ref: t, "aria-label": c, as: "nav" },
    E.createElement(
      _o,
      { space: "space.0", alignBlock: "center" },
      E.createElement(wf, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (z) {
          return B({ event: z, selectedPageIndex: q - 1 });
        },
        isDisabled: I || q === 0,
        iconBefore: E.createElement(Sf, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      E.createElement(
        _o,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: tc.paginationMenu },
        mk(w, q, { max: m, ellipsis: R, transform: H }, P),
      ),
      E.createElement(wf, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (z) {
          return B({ event: z, selectedPageIndex: q + 1 });
        },
        isDisabled: I || q === w.length - 1,
        iconBefore: E.createElement(Sf, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var kk = _.memo(_.forwardRef(wk));
function Ok(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Ph() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Ph() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ph = function () {
    return !!e;
  })();
}
var Ek = (function (e) {
    function t() {
      var r;
      he(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = Ok(this, t, [].concat(a))),
        x(r, "onChange", function (i, s, c) {
          r.props.onChange(s, c);
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
              s = n.i18n,
              c = n.testId,
              u = n.isDisabled,
              l = Oe(Array(a)).map(function (p, v) {
                return v + 1;
              }),
              d = i - 1;
            return E.createElement(kk, {
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
  Sk = ["isRanking", "testId"],
  xk = [
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
function ha(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Pf = "--local-dynamic-table-text-color",
  Pk = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = le(t, Sk);
    return _.createElement(
      "thead",
      ae({ "data-testid": n }, a, { className: oe(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  Ck = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      u = le(e, xk),
      l = ha(
        ha(ha({}, s), r && Dp({ width: r })),
        {},
        x({}, Pf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === vr,
      p = a === To,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return _.createElement(
      g,
      ae({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": c }, u, {
        className: oe([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: ha(
          ha({}, l),
          {},
          { "--_17ckjys": Mp("var(--ds-text-subtle, ".concat("var(".concat(Pf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function Rk(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Ch() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
function Ak(e) {
  return (function (t) {
    function r() {
      var n;
      he(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = Rk(this, r, [].concat(o))),
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
            return E.createElement(
              e,
              ae({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(E.Component);
}
var ga = {},
  Cf;
function Ik() {
  if (Cf) return ga;
  ((Cf = 1), Object.defineProperty(ga, "__esModule", { value: !0 }), (ga.default = void 0));
  var e = r(yr()),
    t = r(ri);
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
  return ((n.displayName = "ArrowDownIcon"), (ga.default = n), ga);
}
var jk = Ik();
const Mk = Qt(jk);
var ba = {},
  Rf;
function Tk() {
  if (Rf) return ba;
  ((Rf = 1), Object.defineProperty(ba, "__esModule", { value: !0 }), (ba.default = void 0));
  var e = r(yr()),
    t = r(ri);
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
  return ((n.displayName = "ArrowUpIcon"), (ba.default = n), ba);
}
var Dk = Tk();
const Fk = Qt(Dk);
var Lk = "Escape";
function Bk(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (i) {
        r || n.current || i.key !== Lk || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!r)
        return _r.bindAll(
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
function Lr(e) {
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
var Nk = _.createContext(null),
  Uk = _.createContext(null);
function qk() {
  var e = _.useContext(Uk);
  return e;
}
function $k(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = _.useContext(Nk),
    o = qk();
  _.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var wa = { none: 0, small: 100, medium: 350, large: 700 },
  Cs = 0.5,
  zk = { none: wa.none, small: wa.small * Cs, medium: wa.medium * Cs, large: wa.large * Cs },
  Vk = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  Gk = function () {
    if (!Vk()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  };
const Hk = 5;
function F(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, Hk) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
var Wk = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  Kk = function () {
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
      }, Wk(t)),
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
  Rh = { appear: !0, isExiting: !1 },
  Ah = _.createContext(Rh),
  Af = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rh;
    return E.createElement(Ah.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  If = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  Yk = function (t, r) {
    for (var n = r.concat([]), a = Jk(r), o = 0; o < t.length; o++) {
      var i = t[o],
        s = !a[i.key];
      s && n.splice(o + 1, 0, i);
    }
    return n;
  },
  Jk = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  Xk = function (t, r) {
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
  Ih = _.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = _.useState([null, n]),
      i = G(o, 2),
      s = i[0],
      c = i[1],
      u = _.useState([]),
      l = G(u, 2),
      d = l[0],
      p = l[1],
      v = _.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = G(v, 2),
      f = g[0],
      h = g[1];
    if (
      (_.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = G(s, 2),
      m = b[0],
      y = b[1],
      k = If(m),
      w = If(y);
    y !== n && c([y, n]);
    var O = Xk(w, k),
      S = !!O.size,
      R = w;
    if ((S && (R = Yk(w, k)), a))
      if (d.length) R = d;
      else {
        var A = R.filter(function (P) {
          return O.has(P.key);
        });
        A.length && p(A);
      }
    return (
      O.size
        ? (R = R.map(function (P) {
            var I = O.has(P.key);
            return Af(P, {
              appear: !0,
              isExiting: I,
              onFinish: I
                ? function () {
                    (O.delete(P.key), O.size === 0 && (c([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (R = R.map(function (P) {
            return Af(P, f);
          })),
      R
    );
  }),
  Zk = function () {
    return _.useContext(Ah);
  };
Ih.displayName = "ExitingPersistence";
function Qk() {
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
var eO = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: Pe };
  }),
  tO = function () {
    var t = Qk(),
      r = _.useContext(eO);
    return r(t);
  },
  rO = function (t) {
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
      v = tO(),
      g = Zk(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      m = Kk(),
      y = u || !v.isReady,
      k = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      O = _.useState(b),
      S = G(O, 2),
      R = S[0],
      A = S[1];
    return (
      _.useEffect(
        function () {
          var P = !1;
          if (!y) {
            if (!b) {
              l && l(w);
              return;
            }
            var I = function () {
              (w === "exiting" && h?.(), P || A(!1), l?.(w));
            };
            if (Gk()) {
              I();
              return;
            }
            return (
              A(!0),
              m(I, f ? zk[p] : wa[p] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [h, w, f, p, k, y, m],
      ),
      r(
        {
          ref: v.ref,
          className: R
            ? F([
                F(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && F(["_1y0ctrqk"]),
                p === "small" && F(["_5sag1yx9"]),
                p === "medium" && F(["_5sag1ttt"]),
                p === "large" && F(["_5sagpwmj"]),
                f && p === "small" && F(["_5sag14ed"]),
                f && p === "medium" && F(["_5sagluct"]),
                f && p === "large" && F(["_5sag1ttt"]),
                f && F(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && F(["_1pglp3kn"]),
                !f && n === "ease-out" && F(["_1pgldkwg"]),
                !f && n === "ease-in" && F(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && F(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && F(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && F(["_1pglannl"]),
                !f && n === "ease-in-out" && F(["_1pgl1fu8"]),
                f && n === "linear" && F(["_1pglp3kn"]),
                f && o === "ease-out" && F(["_1pgldkwg"]),
                f && o === "ease-in" && F(["_1pgl1nzg"]),
                f && o === "ease-in-40-out" && F(["_1pgl5y64"]),
                f && o === "ease-in-60-out" && F(["_1pgl1ddy"]),
                f && o === "ease-in-80-out" && F(["_1pglannl"]),
                f && o === "ease-in-out" && F(["_1pgl1fu8"]),
                ((!f && i === "fade-in") || (f && c === "fade-in")) && F(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && c === "fade-out")) && F(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && c === "zoom-in")) && F(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && c === "zoom-out")) && F(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && c === "slide-in-from-top")) &&
                  F(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && c === "slide-out-from-top")) &&
                  F(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && c === "slide-in-from-right")) &&
                  F(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && c === "slide-out-from-right")) &&
                  F(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && c === "slide-in-from-bottom")) &&
                  F(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && c === "slide-out-from-bottom")) &&
                  F(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && c === "slide-in-from-left")) &&
                  F(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && c === "slide-out-from-left")) &&
                  F(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && c === "fade-in-from-top")) &&
                  F(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && c === "fade-out-from-top")) &&
                  F(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && c === "fade-in-from-left")) &&
                  F(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && c === "fade-out-from-left")) &&
                  F(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && c === "fade-in-from-bottom")) &&
                  F(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && c === "fade-out-from-bottom")) &&
                  F(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && c === "fade-in-from-right")) &&
                  F(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && c === "fade-out-from-right")) &&
                  F(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && c === "fade-in-from-top-constant")) &&
                  F(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && c === "fade-out-from-top-constant")) &&
                  F(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && c === "fade-in-from-left-constant")) &&
                  F(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && c === "fade-out-from-left-constant")) &&
                  F(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && c === "fade-in-from-bottom-constant")) &&
                  F(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && c === "fade-out-from-bottom-constant")) &&
                  F(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && c === "fade-in-from-right-constant")) &&
                  F(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && c === "fade-out-from-right-constant")) &&
                  F(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  nO = { top: "bottom", bottom: "top", left: "right", right: "left" },
  aO = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? nO[o] : void 0,
      p =
        i || d
          ? "fade-out-from-".concat(i || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      rO,
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
  oO = _.createContext();
_.createContext();
var iO = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  sO = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  cO = function (t, r) {
    if (typeof t == "function") return sO(t, r);
    t != null && (t.current = r);
  },
  jf = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  Mf =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  Fe = "top",
  at = "bottom",
  ot = "right",
  Le = "left",
  Fc = "auto",
  Ka = [Fe, at, ot, Le],
  Hr = "start",
  Ua = "end",
  uO = "clippingParents",
  jh = "viewport",
  ma = "popper",
  lO = "reference",
  Tf = Ka.reduce(function (e, t) {
    return e.concat([t + "-" + Hr, t + "-" + Ua]);
  }, []),
  Mh = [].concat(Ka, [Fc]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Hr, t + "-" + Ua]);
  }, []),
  dO = "beforeRead",
  fO = "read",
  vO = "afterRead",
  pO = "beforeMain",
  hO = "main",
  gO = "afterMain",
  bO = "beforeWrite",
  mO = "write",
  yO = "afterWrite",
  _O = [dO, fO, vO, pO, hO, gO, bO, mO, yO];
function At(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function We(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function pr(e) {
  var t = We(e).Element;
  return e instanceof t || e instanceof Element;
}
function nt(e) {
  var t = We(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Lc(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = We(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !nt(o) ||
      !At(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var s = a[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function kO(e) {
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
        !nt(a) ||
          !At(a) ||
          (Object.assign(a.style, s),
          Object.keys(o).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const OO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wO,
  effect: kO,
  requires: ["computeStyles"],
};
function St(e) {
  return e.split("-")[0];
}
var dr = Math.max,
  Bo = Math.min,
  Wr = Math.round;
function rc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Th() {
  return !/^((?!chrome|android).)*safari/i.test(rc());
}
function Kr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    nt(e) &&
    ((a = (e.offsetWidth > 0 && Wr(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && Wr(n.height) / e.offsetHeight) || 1));
  var i = pr(e) ? We(e) : window,
    s = i.visualViewport,
    c = !Th() && r,
    u = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (c && s ? s.offsetTop : 0)) / o,
    d = n.width / a,
    p = n.height / o;
  return { width: d, height: p, top: l, right: u + d, bottom: l + p, left: u, x: u, y: l };
}
function Bc(e) {
  var t = Kr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Dh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Lc(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Vt(e) {
  return We(e).getComputedStyle(e);
}
function EO(e) {
  return ["table", "td", "th"].indexOf(At(e)) >= 0;
}
function er(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ui(e) {
  return At(e) === "html" ? e : e.assignedSlot || e.parentNode || (Lc(e) ? e.host : null) || er(e);
}
function Df(e) {
  return !nt(e) || Vt(e).position === "fixed" ? null : e.offsetParent;
}
function SO(e) {
  var t = /firefox/i.test(rc()),
    r = /Trident/i.test(rc());
  if (r && nt(e)) {
    var n = Vt(e);
    if (n.position === "fixed") return null;
  }
  var a = ui(e);
  for (Lc(a) && (a = a.host); nt(a) && ["html", "body"].indexOf(At(a)) < 0; ) {
    var o = Vt(a);
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
function Ya(e) {
  for (var t = We(e), r = Df(e); r && EO(r) && Vt(r).position === "static"; ) r = Df(r);
  return r && (At(r) === "html" || (At(r) === "body" && Vt(r).position === "static"))
    ? t
    : r || SO(e) || t;
}
function Nc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pa(e, t, r) {
  return dr(e, Bo(t, r));
}
function xO(e, t, r) {
  var n = Pa(e, t, r);
  return n > r ? r : n;
}
function Fh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Lh(e) {
  return Object.assign({}, Fh(), e);
}
function Bh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var PO = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    Lh(typeof t != "number" ? t : Bh(t, Ka))
  );
};
function CO(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    s = St(r.placement),
    c = Nc(s),
    u = [Le, ot].indexOf(s) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = PO(a.padding, r),
      p = Bc(o),
      v = c === "y" ? Fe : Le,
      g = c === "y" ? at : ot,
      f = r.rects.reference[l] + r.rects.reference[c] - i[c] - r.rects.popper[l],
      h = i[c] - r.rects.reference[c],
      b = Ya(o),
      m = b ? (c === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - h / 2,
      k = d[v],
      w = m - p[l] - d[g],
      O = m / 2 - p[l] / 2 + y,
      S = Pa(k, O, w),
      R = c;
    r.modifiersData[n] = ((t = {}), (t[R] = S), (t.centerOffset = S - O), t);
  }
}
function RO(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Dh(t.elements.popper, a) && (t.elements.arrow = a)));
}
const AO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: CO,
  effect: RO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Yr(e) {
  return e.split("-")[1];
}
var IO = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function jO(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Wr(r * a) / a || 0, y: Wr(n * a) / a || 0 };
}
function Ff(e) {
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
    m = i.hasOwnProperty("y"),
    y = Le,
    k = Fe,
    w = window;
  if (u) {
    var O = Ya(r),
      S = "clientHeight",
      R = "clientWidth";
    if (
      (O === We(r) &&
        ((O = er(r)),
        Vt(O).position !== "static" &&
          s === "absolute" &&
          ((S = "scrollHeight"), (R = "scrollWidth"))),
      (O = O),
      a === Fe || ((a === Le || a === ot) && o === Ua))
    ) {
      k = at;
      var A = d && O === w && w.visualViewport ? w.visualViewport.height : O[S];
      ((f -= A - n.height), (f *= c ? 1 : -1));
    }
    if (a === Le || ((a === Fe || a === at) && o === Ua)) {
      y = ot;
      var P = d && O === w && w.visualViewport ? w.visualViewport.width : O[R];
      ((v -= P - n.width), (v *= c ? 1 : -1));
    }
  }
  var I = Object.assign({ position: s }, u && IO),
    U = l === !0 ? jO({ x: v, y: f }, We(r)) : { x: v, y: f };
  if (((v = U.x), (f = U.y), c)) {
    var V;
    return Object.assign(
      {},
      I,
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
    I,
    ((t = {}), (t[k] = m ? f + "px" : ""), (t[y] = b ? v + "px" : ""), (t.transform = ""), t),
  );
}
function MO(e) {
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
      variation: Yr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Ff(
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
        Ff(
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
const TO = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: MO, data: {} };
var ho = { passive: !0 };
function DO(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    c = We(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, ho);
      }),
    s && c.addEventListener("resize", r.update, ho),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ho);
        }),
        s && c.removeEventListener("resize", r.update, ho));
    }
  );
}
const FO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: DO,
  data: {},
};
var LO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function So(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return LO[t];
  });
}
var BO = { start: "end", end: "start" };
function Lf(e) {
  return e.replace(/start|end/g, function (t) {
    return BO[t];
  });
}
function Uc(e) {
  var t = We(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function qc(e) {
  return Kr(er(e)).left + Uc(e).scrollLeft;
}
function NO(e, t) {
  var r = We(e),
    n = er(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = Th();
    (u || (!u && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: o, height: i, x: s + qc(e), y: c };
}
function UO(e) {
  var t,
    r = er(e),
    n = Uc(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = dr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = dr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + qc(e),
    c = -n.scrollTop;
  return (
    Vt(a || r).direction === "rtl" && (s += dr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: c }
  );
}
function $c(e) {
  var t = Vt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Nh(e) {
  return ["html", "body", "#document"].indexOf(At(e)) >= 0
    ? e.ownerDocument.body
    : nt(e) && $c(e)
      ? e
      : Nh(ui(e));
}
function Ca(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Nh(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = We(n),
    i = a ? [o].concat(o.visualViewport || [], $c(n) ? n : []) : n,
    s = t.concat(i);
  return a ? s : s.concat(Ca(ui(i)));
}
function nc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function qO(e, t) {
  var r = Kr(e, !1, t === "fixed");
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
function Bf(e, t, r) {
  return t === jh ? nc(NO(e, r)) : pr(t) ? qO(t, r) : nc(UO(er(e)));
}
function $O(e) {
  var t = Ca(ui(e)),
    r = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0,
    n = r && nt(e) ? Ya(e) : e;
  return pr(n)
    ? t.filter(function (a) {
        return pr(a) && Dh(a, n) && At(a) !== "body";
      })
    : [];
}
function zO(e, t, r, n) {
  var a = t === "clippingParents" ? $O(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    s = o.reduce(
      function (c, u) {
        var l = Bf(e, u, n);
        return (
          (c.top = dr(l.top, c.top)),
          (c.right = Bo(l.right, c.right)),
          (c.bottom = Bo(l.bottom, c.bottom)),
          (c.left = dr(l.left, c.left)),
          c
        );
      },
      Bf(e, i, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Uh(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? St(n) : null,
    o = n ? Yr(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case Fe:
      c = { x: i, y: t.y - r.height };
      break;
    case at:
      c = { x: i, y: t.y + t.height };
      break;
    case ot:
      c = { x: t.x + t.width, y: s };
      break;
    case Le:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = a ? Nc(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case Hr:
        c[u] = c[u] - (t[l] / 2 - r[l] / 2);
        break;
      case Ua:
        c[u] = c[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return c;
}
function qa(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    s = r.boundary,
    c = s === void 0 ? uO : s,
    u = r.rootBoundary,
    l = u === void 0 ? jh : u,
    d = r.elementContext,
    p = d === void 0 ? ma : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = Lh(typeof h != "number" ? h : Bh(h, Ka)),
    m = p === ma ? lO : ma,
    y = e.rects.popper,
    k = e.elements[g ? m : p],
    w = zO(pr(k) ? k : k.contextElement || er(e.elements.popper), c, l, i),
    O = Kr(e.elements.reference),
    S = Uh({ reference: O, element: y, placement: a }),
    R = nc(Object.assign({}, y, S)),
    A = p === ma ? R : O,
    P = {
      top: w.top - A.top + b.top,
      bottom: A.bottom - w.bottom + b.bottom,
      left: w.left - A.left + b.left,
      right: A.right - w.right + b.right,
    },
    I = e.modifiersData.offset;
  if (p === ma && I) {
    var U = I[a];
    Object.keys(P).forEach(function (V) {
      var q = [ot, at].indexOf(V) >= 0 ? 1 : -1,
        K = [Fe, at].indexOf(V) >= 0 ? "y" : "x";
      P[V] += U[K] * q;
    });
  }
  return P;
}
function VO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    u = c === void 0 ? Mh : c,
    l = Yr(n),
    d = l
      ? s
        ? Tf
        : Tf.filter(function (g) {
            return Yr(g) === l;
          })
      : Ka,
    p = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = qa(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[St(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function GO(e) {
  if (St(e) === Fc) return [];
  var t = So(e);
  return [Lf(e), t, Lf(t)];
}
function HO(e) {
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
        m = b === h,
        y = c || (m || !g ? [So(h)] : GO(h)),
        k = [h].concat(y).reduce(function (_e, j) {
          return _e.concat(
            St(j) === Fc
              ? VO(t, {
                  placement: j,
                  boundary: l,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : j,
          );
        }, []),
        w = t.rects.reference,
        O = t.rects.popper,
        S = new Map(),
        R = !0,
        A = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var I = k[P],
        U = St(I),
        V = Yr(I) === Hr,
        q = [Fe, at].indexOf(U) >= 0,
        K = q ? "width" : "height",
        B = qa(t, { placement: I, boundary: l, rootBoundary: d, altBoundary: p, padding: u }),
        H = q ? (V ? ot : Le) : V ? at : Fe;
      w[K] > O[K] && (H = So(H));
      var W = So(H),
        z = [];
      if (
        (o && z.push(B[U] <= 0),
        s && z.push(B[H] <= 0, B[W] <= 0),
        z.every(function (_e) {
          return _e;
        }))
      ) {
        ((A = I), (R = !1));
        break;
      }
      S.set(I, z);
    }
    if (R)
      for (
        var D = g ? 3 : 1,
          ie = function (j) {
            var ke = k.find(function (Ue) {
              var ve = S.get(Ue);
              if (ve)
                return ve.slice(0, j).every(function (Ae) {
                  return Ae;
                });
            });
            if (ke) return ((A = ke), "break");
          },
          ee = D;
        ee > 0;
        ee--
      ) {
        var we = ie(ee);
        if (we === "break") break;
      }
    t.placement !== A && ((t.modifiersData[n]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const WO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: HO,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Nf(e, t, r) {
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
function Uf(e) {
  return [Fe, ot, at, Le].some(function (t) {
    return e[t] >= 0;
  });
}
function KO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = qa(t, { elementContext: "reference" }),
    s = qa(t, { altBoundary: !0 }),
    c = Nf(i, n),
    u = Nf(s, a, o),
    l = Uf(c),
    d = Uf(u);
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
const YO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: KO,
};
function JO(e, t, r) {
  var n = St(e),
    a = [Le, Fe].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * a),
    [Le, ot].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function XO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = Mh.reduce(function (l, d) {
      return ((l[d] = JO(d, t.rects, o)), l);
    }, {}),
    s = i[t.placement],
    c = s.x,
    u = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const ZO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: XO };
function QO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Uh({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const eE = { name: "popperOffsets", enabled: !0, phase: "read", fn: QO, data: {} };
function tE(e) {
  return e === "x" ? "y" : "x";
}
function rE(e) {
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
    h = qa(t, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }),
    b = St(t.placement),
    m = Yr(t.placement),
    y = !m,
    k = Nc(b),
    w = tE(k),
    O = t.modifiersData.popperOffsets,
    S = t.rects.reference,
    R = t.rects.popper,
    A = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof A == "number"
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (O) {
    if (o) {
      var V,
        q = k === "y" ? Fe : Le,
        K = k === "y" ? at : ot,
        B = k === "y" ? "height" : "width",
        H = O[k],
        W = H + h[q],
        z = H - h[K],
        D = v ? -R[B] / 2 : 0,
        ie = m === Hr ? S[B] : R[B],
        ee = m === Hr ? -R[B] : -S[B],
        we = t.elements.arrow,
        _e = v && we ? Bc(we) : { width: 0, height: 0 },
        j = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Fh(),
        ke = j[q],
        Ue = j[K],
        ve = Pa(0, S[B], _e[B]),
        Ae = y ? S[B] / 2 - D - ve - ke - P.mainAxis : ie - ve - ke - P.mainAxis,
        pe = y ? -S[B] / 2 + D + ve + Ue + P.mainAxis : ee + ve + Ue + P.mainAxis,
        qe = t.elements.arrow && Ya(t.elements.arrow),
        nn = qe ? (k === "y" ? qe.clientTop || 0 : qe.clientLeft || 0) : 0,
        xr = (V = I?.[k]) != null ? V : 0,
        pt = H + Ae - xr - nn,
        Ie = H + pe - xr,
        ht = Pa(v ? Bo(W, pt) : W, H, v ? dr(z, Ie) : z);
      ((O[k] = ht), (U[k] = ht - H));
    }
    if (s) {
      var Ht,
        it = k === "x" ? Fe : Le,
        gt = k === "x" ? at : ot,
        $e = O[w],
        je = w === "y" ? "height" : "width",
        Ce = $e + h[it],
        Me = $e - h[gt],
        bt = [Fe, Le].indexOf(b) !== -1,
        rr = (Ht = I?.[w]) != null ? Ht : 0,
        ro = bt ? Ce : $e - S[je] - R[je] - rr + P.altAxis,
        no = bt ? $e + S[je] + R[je] - rr - P.altAxis : Me,
        ao = v && bt ? xO(ro, $e, no) : Pa(v ? ro : Ce, $e, v ? no : Me);
      ((O[w] = ao), (U[w] = ao - $e));
    }
    t.modifiersData[n] = U;
  }
}
const nE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: rE,
  requiresIfExists: ["offset"],
};
function aE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function oE(e) {
  return e === We(e) || !nt(e) ? Uc(e) : aE(e);
}
function iE(e) {
  var t = e.getBoundingClientRect(),
    r = Wr(t.width) / e.offsetWidth || 1,
    n = Wr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function sE(e, t, r) {
  r === void 0 && (r = !1);
  var n = nt(t),
    a = nt(t) && iE(t),
    o = er(t),
    i = Kr(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((At(t) !== "body" || $c(o)) && (s = oE(t)),
      nt(t) ? ((c = Kr(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : o && (c.x = qc(o))),
    {
      x: i.left + s.scrollLeft - c.x,
      y: i.top + s.scrollTop - c.y,
      width: i.width,
      height: i.height,
    }
  );
}
function cE(e) {
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
function uE(e) {
  var t = cE(e);
  return _O.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function lE(e) {
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
function dE(e) {
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
var qf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $f() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function fE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? qf : a;
  return function (s, c, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, qf, o),
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
              reference: pr(s) ? Ca(s) : s.contextElement ? Ca(s.contextElement) : [],
              popper: Ca(c),
            }));
          var y = uE(dE([].concat(n, l.options.modifiers)));
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
              m = b.reference,
              y = b.popper;
            if ($f(m, y)) {
              ((l.rects = {
                reference: sE(m, Ya(y), l.options.strategy === "fixed"),
                popper: Bc(y),
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
                  S = w.options,
                  R = S === void 0 ? {} : S,
                  A = w.name;
                typeof O == "function" &&
                  (l = O({ state: l, options: R, name: A, instance: v }) || l);
              }
            }
          }
        },
        update: lE(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!$f(s, c)) return v;
    v.setOptions(u).then(function (h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var b = h.name,
          m = h.options,
          y = m === void 0 ? {} : m,
          k = h.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: v, options: y }),
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
var vE = [FO, eE, TO, OO, ZO, WO, nE, AO, YO],
  pE = fE({ defaultModifiers: vE }),
  Rs,
  zf;
function hE() {
  if (zf) return Rs;
  zf = 1;
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
    (Rs = function (i, s) {
      try {
        return a(i, s);
      } catch (c) {
        if ((c.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw c;
      }
    }),
    Rs
  );
}
var gE = hE();
const bE = Qt(gE);
var mE = [],
  yE = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || mE,
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
            var g = v.state,
              f = Object.keys(g.elements);
            Yo.flushSync(function () {
              c({
                styles: jf(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: jf(
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
      l = _.useMemo(
        function () {
          var p = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return bE(a.current, p) ? a.current || p : ((a.current = p), p);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = _.useRef();
    return (
      Mf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Mf(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || pE,
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
  _E = function () {},
  wE = function () {
    return Promise.resolve(null);
  },
  kE = [];
function OE(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? kE : o,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = _.useContext(oO),
    p = _.useState(null),
    v = p[0],
    g = p[1],
    f = _.useState(null),
    h = f[0],
    b = f[1];
  _.useEffect(
    function () {
      cO(u, v);
    },
    [u, v],
  );
  var m = _.useMemo(
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
    y = yE(s || d, v, m),
    k = y.state,
    w = y.styles,
    O = y.forceUpdate,
    S = y.update,
    R = _.useMemo(
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
          forceUpdate: O || _E,
          update: S || wE,
        };
      },
      [g, b, r, k, w, S, O],
    );
  return iO(l)(R);
}
function EE(e) {
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
            m = l.height - 2 * t;
          (f === "top" && (m = c.rects.reference.y + h.y - t),
            f === "bottom" && (m = l.height - p.y - t),
            f === "left" && (b = c.rects.reference.x + h.x - t),
            f === "right" && (b = l.width - p.x - t),
            (c.styles.popper.maxWidth = "".concat(b, "px")),
            (c.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var ac = 5,
  SE = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: ac,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function xE() {
  return null;
}
var PE = [0, 8];
function CE(e) {
  var t = e.children,
    r = t === void 0 ? xE : t,
    n = e.offset,
    a = n === void 0 ? PE : n,
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
    b = _.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: ac, rootBoundary: v ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = v ? EE({ viewportPadding: ac }) : [];
        return [].concat(SE, [y, k], Oe(w));
      },
      [f, h, v],
    ),
    m = _.useMemo(
      function () {
        return u == null ? b : [].concat(Oe(b), Oe(u));
      },
      [b, u],
    );
  return E.createElement(OE, { modifiers: m, placement: i, strategy: d, referenceElement: c }, r);
}
var qh = "atlaskit-portal-container",
  $h = "body > .atlaskit-portal-container",
  zh = "atlaskit-portal",
  RE = function (t) {
    var r = document.createElement("div");
    return ((r.className = zh), (r.style.zIndex = "".concat(t)), r);
  },
  Vh = function () {
    return document.body;
  },
  Gh = function () {
    var t = document.querySelector($h);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = qh),
        (n.style.display = "flex"),
        (r = Vh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  AE = function (t) {
    Gh().removeChild(t);
  },
  IE = function (t) {
    t.parentElement || Gh().appendChild(t);
  },
  Hh = function () {
    return document !== void 0;
  },
  jE = function (t) {
    if (Hh()) {
      var r = document.createElement("div");
      return ((r.className = zh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  ME = function () {
    if (Hh()) {
      var t = document.querySelector($h);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = qh),
          (n.style.display = "flex"),
          (r = Vh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function TE(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return RE(t);
      },
      [t],
    ),
    a = ih();
  return (
    IE(n),
    _.useEffect(
      function () {
        return function () {
          AE(n);
        };
      },
      [n],
    ),
    Yo.createPortal(
      a && ue("platform_dst_subtree_theming") ? E.createElement(oh, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var Wh = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function DE(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = G(n, 2),
    o = a[0],
    i = a[1],
    s = ih();
  Wh(
    function () {
      var u = jE(t);
      i(u);
      var l = ME();
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
    s && ue("platform_dst_subtree_theming") ? E.createElement(oh, { defaultColorMode: s }, r) : r,
  );
  return o ? Yo.createPortal(c, o) : null;
}
var FE = function (t) {
    var r = _.useState(!1),
      n = G(r, 2),
      a = n[0],
      o = n[1],
      i = _.useState(function () {
        return t === "layoutEffect" ? Wh : _.useEffect;
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
  LE = "akPortalMount",
  BE = "akPortalUnmount",
  Vf = {
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
  NE = function (t) {
    return Vf.hasOwnProperty(t) ? Vf[t] : null;
  },
  UE = function (t, r) {
    var n = { layer: NE(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Gf(e, t) {
  var r = UE(e, t);
  window.dispatchEvent(r);
}
var qE = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        Gf(LE, r),
        function () {
          Gf(BE, r);
        }
      );
    },
    [r],
  );
};
function $E(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = FE(o);
  return (
    qE(r),
    ue("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(DE, { zIndex: r }, n)
      : i
        ? E.createElement(TE, { zIndex: r }, n)
        : null
  );
}
var zE = {
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
  Ra = new Set(),
  $a = null;
function Hf() {
  if (!$a) {
    $a = _r.bindAll(window, [
      { type: "dragend", listener: As },
      { type: "pointerdown", listener: As },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            As();
          };
        })(),
      },
    ]);
    var e = Array.from(Ra);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function As() {
  var e;
  ((e = $a) === null || e === void 0 || e(), ($a = null));
  var t = Array.from(Ra);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function VE() {
  return _r.bindAll(window, [
    { type: "dragstart", listener: Hf },
    { type: "dragenter", listener: Hf },
  ]);
}
var go = null;
function GE(e) {
  return (
    go || (go = VE()),
    Ra.add(e),
    e.onRegister({ isDragging: $a !== null }),
    function () {
      if ((Ra.delete(e), Ra.size === 0)) {
        var r;
        ((r = go) === null || r === void 0 || r(), (go = null));
      }
    }
  );
}
var Aa = null;
function ka() {
  Aa != null && (window.clearTimeout(Aa), (Aa = null));
}
function Wf(e, t) {
  (ka(),
    (Aa = window.setTimeout(function () {
      ((Aa = null), e());
    }, t)));
}
var yt = null;
function HE(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(yt && yt.entry === e);
  }
  function n() {
    r() && (ka(), (yt = null));
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
        ((t = "shown"), ka());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), ka(), e.show({ isImmediate: !1 }));
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
          Wf(function () {
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
    var v = ue("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? e.shouldAlwaysFadeIn : !1,
      g = !!(yt && yt.isVisible()) && !v;
    (yt && (ka(), yt.entry.hide({ isImmediate: !0 }), yt.entry.done(), (yt = null)),
      (yt = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: g }));
    }
    if (g) {
      f();
      return;
    }
    ((t = "waiting-to-show"), Wf(f, e.delay));
  }
  d();
  var p = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: s,
    finishHideAnimation: c,
    mousePosition: ue("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && ue("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return p;
}
function WE(e, t) {
  var r = Bw();
  return t ? "".concat(r(e)) : void 0;
}
const KE = 5;
function No(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, KE) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
var Kf = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  YE = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: No([Kf.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: No([Kf.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Kh = _.forwardRef(function (t, r) {
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
          className: No(["_80om73ad", a]),
          onMouseOut: c,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": s,
          id: l,
        },
        o,
        d && _.createElement(YE, { shortcut: d }),
      ),
    );
  });
Kh.displayName = "TooltipPrimitive";
var Yf = {
    base: "_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Yh = _.forwardRef(function (t, r) {
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
      Kh,
      {
        ref: r,
        style: n,
        className: No([Yf.base, i && Yf.truncate, a]),
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
Yh.displayName = "TooltipContainer";
function Jf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function JE(e, t) {
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
function Xf(e, t) {
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
      ? Xf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var XE = zE.tooltip(),
  Zf = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.14.5" },
  ZE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  QE = function (t) {
    return t.split("-")[0];
  };
function eS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    u = e.component,
    l = u === void 0 ? Yh : u,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Pe : h,
    m = e.onHide,
    y = m === void 0 ? Pe : m,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    O = w === void 0 ? !1 : w,
    S = e.hideTooltipOnMouseDown,
    R = S === void 0 ? !1 : S,
    A = e.analyticsContext,
    P = e.strategy,
    I = P === void 0 ? "fixed" : P,
    U = e.ignoreTooltipPointerEvents,
    V = U === void 0 ? !1 : U,
    q = e.isScreenReaderAnnouncementDisabled,
    K = q === void 0 ? !1 : q,
    B = e.shortcut,
    H = e.UNSAFE_shouldAlwaysFadeIn,
    W = H === void 0 ? !1 : H,
    z = e.UNSAFE_shouldRenderToParent,
    D = z === void 0 ? !1 : z,
    ie = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    ee = ie ? o : n,
    we = Ad(Br({ fn: b, action: "displayed", analyticsData: A }, Zf)),
    _e = Ad(Br({ fn: y, action: "hidden", analyticsData: A }, Zf)),
    j = _.useRef(null),
    ke = _.useState("hide"),
    Ue = G(ke, 2),
    ve = Ue[0],
    Ae = Ue[1],
    pe = _.useRef(null),
    qe = _.useRef(null),
    nn = function (se) {
      ((qe.current = se), (pe.current = se ? se.firstElementChild : null));
    },
    xr = _.useCallback(function (L) {
      pe.current = L;
    }, []),
    pt = Lr(ve),
    Ie = Lr(we),
    ht = Lr(_e),
    Ht = Lr(f),
    it = Lr(k),
    gt = _.useRef(!1),
    $e = Lr(W),
    je = _.useCallback(function (L) {
      ((j.current = L), (gt.current = !1));
    }, []),
    Ce = _.useCallback(
      function () {
        j.current &&
          (gt.current && ht.current(), (j.current = null), (gt.current = !1), Ae("hide"));
      },
      [ht],
    ),
    Me = _.useCallback(
      function () {
        j.current && (j.current.abort(), gt.current && ht.current(), (j.current = null));
      },
      [ht],
    );
  _.useEffect(
    function () {
      return function () {
        j.current && Me();
      };
    },
    [Me],
  );
  var bt = _.useRef(!1);
  _.useEffect(function () {
    return GE({
      onRegister: function (se) {
        var Tt = se.isDragging;
        bt.current = Tt;
      },
      onDragStart: function () {
        var se;
        ((se = j.current) === null || se === void 0 || se.requestHide({ isImmediate: !0 }),
          (bt.current = !0));
      },
      onDragEnd: function () {
        bt.current = !1;
      },
    });
  }, []);
  var rr = _.useCallback(
      function (L) {
        var se;
        if (!bt.current) {
          if ((j.current && !j.current.isActive() && Me(), j.current && j.current.isActive())) {
            j.current.keep();
            return;
          }
          if (!(it.current && !((se = it.current) !== null && se !== void 0 && se.call(it)))) {
            var Tt = {
                source: L,
                delay: Ht.current,
                show: function (Pr) {
                  var on = Pr.isImmediate;
                  (gt.current || ((gt.current = !0), Ie.current()),
                    Ae(on ? "show-immediate" : "fade-in"));
                },
                hide: function (Pr) {
                  var on = Pr.isImmediate;
                  Ae(on ? "hide" : "before-fade-out");
                },
                done: Ce,
                shouldAlwaysFadeIn: ue("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? $e.current
                  : !1,
              },
              nr = HE(Tt);
            je(nr);
          }
        }
      },
      [it, Ht, Ce, je, Me, Ie, $e],
    ),
    ro = _.useCallback(
      function () {
        var L;
        (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [j],
    );
  (Bk({ onClose: ro, isDisabled: ve === "hide" || ve === "fade-out" }),
    _.useEffect(
      function () {
        if (ve === "hide") return Pe;
        ve === "before-fade-out" && Ae("fade-out");
        var L = _r.bind(window, {
          type: "scroll",
          listener: function () {
            j.current && j.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ve],
    ));
  var no = _.useCallback(
      function () {
        R && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [R],
    ),
    ao = _.useCallback(
      function () {
        O && j.current && j.current.requestHide({ isImmediate: !0 });
      },
      [O],
    ),
    Jg = _.useCallback(
      function (L) {
        if (!(qe.current && L.target === qe.current) && !L.defaultPrevented) {
          L.preventDefault();
          var se = ie
            ? {
                type: "mouse",
                mouse: ue("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : Jf({ left: L.clientX, top: L.clientY }),
                clientX: L.clientX,
                clientY: L.clientY,
              }
            : { type: "keyboard" };
          rr(se);
        }
      },
      [ie, rr],
    ),
    Xc = _.useCallback(function (L) {
      (qe.current && L.target === qe.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), j.current && j.current.requestHide({ isImmediate: !1 }));
    }, []),
    Xg = ie
      ? function (L) {
          var se;
          (se = j.current) !== null &&
            se !== void 0 &&
            se.isActive() &&
            (ue("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (j.current.mousePosition = Jf({ left: L.clientX, top: L.clientY })),
            (j.current.mousePos = { clientX: L.clientX, clientY: L.clientY }));
        }
      : void 0,
    Zg = _.useCallback(function () {
      if (j.current && j.current.isActive()) {
        j.current.keep();
        return;
      }
    }, []),
    Qg = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        rr({ type: "keyboard" });
      },
      [rr],
    ),
    eb = _.useCallback(function () {
      j.current && j.current.requestHide({ isImmediate: !1 });
    }, []),
    tb = _.useCallback(
      function (L) {
        L === "exiting" &&
          pt.current === "fade-out" &&
          j.current &&
          j.current.finishHideAnimation();
      },
      [pt],
    ),
    rb = p,
    xi = ve !== "hide" && !!i,
    Zc = !K && xi,
    Qc = ve !== "hide" && ve !== "fade-out",
    nb = _.useCallback(function () {
      var L;
      (L = j.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  $k({ isOpen: xi && Qc, onClose: nb });
  var eu = function () {
      var se, Tt;
      if (
        ie &&
        (se = j.current) !== null &&
        se !== void 0 &&
        se.mousePos &&
        pe.current &&
        ue("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return JE(j.current.mousePos, { targetElement: pe.current, tooltipPosition: n });
      if (
        ie &&
        (Tt = j.current) !== null &&
        Tt !== void 0 &&
        Tt.mousePosition &&
        !ue("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var nr;
        return (nr = j.current) === null || nr === void 0 ? void 0 : nr.mousePosition;
      }
      return pe.current || void 0;
    },
    an = WE("tooltip", Zc),
    Pi = {
      onMouseOver: Jg,
      onMouseOut: Xc,
      onMouseMove: Xg,
      onMouseDown: no,
      onClick: ao,
      onFocus: Qg,
      onBlur: eb,
    };
  v && (Pi["data-testid"] = "".concat(v, "--container"));
  var tu = typeof t == "function";
  _.useEffect(
    function () {
      if (!tu) {
        var L = pe.current;
        if (!(!L || !an))
          return (
            L.setAttribute("aria-describedby", an),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [tu, an],
  );
  var ru = Zc
      ? E.createElement(
          "span",
          { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: an },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    ab = D && ue("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? _.Fragment : tS;
  return E.createElement(
    E.Fragment,
    null,
    typeof t == "function"
      ? E.createElement(
          E.Fragment,
          null,
          t(Br(Br({}, Pi), {}, { "aria-describedby": an, ref: xr })),
          ru,
        )
      : E.createElement(rb, ae({}, Pi, { ref: nn, role: "presentation" }), t, ru),
    xi
      ? E.createElement(
          ab,
          null,
          E.createElement(CE, { placement: ee, referenceElement: eu(), strategy: I }, function (L) {
            var se = L.ref,
              Tt = L.style,
              nr = L.update,
              Ci = L.placement,
              Pr = ie ? void 0 : ZE[QE(Ci)];
            return E.createElement(
              Ih,
              { appear: !0 },
              Qc &&
                E.createElement(
                  aO,
                  {
                    distance: "constant",
                    entranceDirection: Pr,
                    exitDirection: Pr,
                    onFinish: tb,
                    duration: ve !== "show-immediate" ? "medium" : "none",
                  },
                  function (on) {
                    var ob = on.className;
                    return E.createElement(
                      l,
                      {
                        ref: se,
                        className: "Tooltip ".concat(ob),
                        style: Br(Br({}, Tt), V && { pointerEvents: "none" }),
                        truncate: c,
                        placement: ee,
                        testId: eu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Xc,
                        onMouseOver: Zg,
                        shortcut: B,
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
var tS = function (t) {
    var r = t.children;
    return E.createElement($E, { zIndex: XE }, r);
  },
  rS = [
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
  ya = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Qf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c8wadc _syazazsu _k48pwu06" },
  Jh = function (t) {
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
      m = le(t, rS),
      y = _.useState(!1),
      k = G(y, 2),
      w = k[0],
      O = k[1],
      S = _.useState(!1),
      R = G(S, 2),
      A = R[0],
      P = R[1],
      I = u === l || s !== void 0,
      U = w || I || A,
      V = U && b,
      q = !b || U || (b && !A),
      K = _.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      B = _.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      H = _.useCallback(
        function () {
          O(!0);
        },
        [O],
      ),
      W = _.useCallback(
        function () {
          O(!1);
        },
        [O],
      ),
      z = E.createElement(
        ni,
        { xcss: Qf.headCellContainer, onMouseEnter: H, onMouseLeave: W, onFocus: K, onBlur: B },
        E.createElement(
          eS,
          { content: s === vr ? p : g },
          E.createElement(
            F0,
            { onClick: c, xcss: ya.buttonWrapper, "aria-roledescription": h },
            E.createElement(
              Fo,
              { xcss: V ? ya.hideIconHeaderWrapper : ya.visibleHeaderWrapper },
              E.createElement("span", { className: oe([Qf.text]) }, r),
            ),
            q &&
              E.createElement(
                Fo,
                { xcss: U ? ya.sortIconVisibleWrapper : ya.sortIconHiddenWrapper },
                s === vr
                  ? E.createElement(Fk, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : E.createElement(Mk, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      Ck,
      ae(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        m,
        { isSortable: i, sortOrder: s },
      ),
      i ? z : r,
    );
  },
  nS = ["isRanking", "refHeight", "refWidth"];
function aS(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Xh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var oS = (function (e) {
    function t() {
      return (he(this, t), aS(this, t, arguments));
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
              i = le(n, nS),
              s = Lm(a, o);
            return E.createElement(Jh, ae({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(E.Component),
  iS = Ak(oS),
  sS = ["cells"],
  cS = [
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
function uS(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Zh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Zh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Zh = function () {
    return !!e;
  })();
}
var lS = (function (e) {
    function t(r) {
      var n;
      return (he(this, t), (n = uS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ye(t, e),
      ge(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Io(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Io(n.sortKey, n.head);
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
            var g = d ? iS : Jh,
              f = o.cells,
              h = le(o, sS);
            return E.createElement(
              Pk,
              ae({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (b, m) {
                  var y = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    O = b.content,
                    S = b.descendingSortTooltip,
                    R = b.isIconOnlyHeader,
                    A = b.isSortable,
                    P = b.key,
                    I = b.shouldTruncate,
                    U = b.testId,
                    V = b.width,
                    q = le(b, cS),
                    K = "head-cell-".concat(m),
                    B = function () {
                      (n.setState({ activeSortButtonId: K }), A && u(b)());
                    };
                  return E.createElement(
                    g,
                    ae(
                      {
                        colSpan: w,
                        content: O,
                        isFixedSize: c,
                        isIconOnlyHeader: R,
                        isSortable: !!A,
                        isRanking: l,
                        key: P || m,
                        headCellId: K,
                        activeSortButtonId: v,
                        onClick: B,
                        testId: U || p,
                        shouldTruncate: I,
                        sortOrder: P === i ? s : void 0,
                        width: V,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: S,
                        buttonAriaRoleDescription: k,
                      },
                      q,
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
  dS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function fS(e) {
  switch (e) {
    case To:
      return vr;
    case vr:
      return To;
    default:
      return e;
  }
}
var vS = function (t) {
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
      m = b === void 0 ? 1 / 0 : b,
      y = t.onSetPage,
      k = y === void 0 ? Pe : y,
      w = t.onSort,
      O = w === void 0 ? Pe : w,
      S = t.page,
      R = S === void 0 ? 1 : S,
      A = t.emptyView,
      P = t.isRankable,
      I = P === void 0 ? !1 : P,
      U = t.isRankingDisabled,
      V = U === void 0 ? !1 : U,
      q = t.onRankStart,
      K = q === void 0 ? Pe : q,
      B = t.onRankEnd,
      H = B === void 0 ? Pe : B,
      W = t.loadingSpinnerSize,
      z = t.paginationi18n,
      D =
        z === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : z,
      ie = _.useState(!1),
      ee = G(ie, 2),
      we = ee[0],
      _e = ee[1],
      j = _.useRef(null),
      ke = Da({
        fn: O,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      }),
      Ue = Da({
        fn: H,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      });
    _.useEffect(
      function () {
        (Io(i, n), Fm(n));
      },
      [i, n],
    );
    var ve = function (Ce) {
        return function () {
          var Me = Ce.key;
          if (Me) {
            if (ke && I && Me === i && s === To) {
              ke({ key: null, sortOrder: null, item: Ce });
              return;
            }
            var bt = Me !== i ? vr : fS(s);
            ke && ke({ key: Me, item: Ce, sortOrder: bt });
          }
        };
      },
      Ae = function (Ce, Me) {
        k(Ce, Me);
      },
      pe = function (Ce) {
        (_e(!0), K(Ce));
      },
      qe = function (Ce) {
        (_e(!1), Ue(Ce));
      },
      nn = function () {
        return W || (mp(o || [], R, m).length > 2 ? Do : o_);
      },
      xr = function () {
        return g ? E.createElement(d_, { testId: l }) : A && E.createElement(f_, { testId: l }, A);
      },
      pt = o && o.length,
      Ie,
      ht = !1;
    (d && Number.isInteger(d) && m && pt && pt <= d
      ? ((Ie = Math.ceil(d / m)), (ht = !0))
      : (Ie = pt && m ? Math.ceil(pt / m) : 0),
      (Ie = Ie < 1 ? 1 : Ie));
    var Ht = R > Ie ? Ie : R,
      it = !!pt,
      gt = nn(),
      $e = xr();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        $p,
        {
          isLoading: g && it,
          spinnerSize: gt,
          targetRef: function () {
            return j.current;
          },
          testId: l,
          loadingLabel: c,
        },
        E.createElement(
          c_,
          { isFixedSize: h, "aria-label": p, hasDataRow: it, testId: l, isLoading: g },
          !!r && E.createElement(u_, null, r),
          n &&
            E.createElement(lS, {
              head: n,
              onSort: ve,
              sortKey: i,
              sortOrder: s,
              isRanking: we,
              isRankable: I,
              testId: l,
            }),
          it &&
            E.createElement(hS, {
              ref: j,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: s,
              rowsPerPage: m,
              page: Ht,
              isFixedSize: h || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: ht,
              testId: l,
              isRankable: I,
              isRanking: we,
              onRankStart: pe,
              onRankEnd: qe,
              isRankingDisabled: V || g || !1,
            }),
        ),
      ),
      Ie <= 1
        ? null
        : E.createElement(
            l_,
            { testId: l },
            E.createElement(Ek, {
              value: Ht,
              onChange: Ae,
              total: Ie,
              i18n: D,
              isDisabled: g,
              testId: l,
            }),
          ),
      !it &&
        $e &&
        E.createElement(Up, { isLoading: g, spinnerSize: Do, testId: l, loadingLabel: c }, $e),
    );
  },
  pS = _.lazy(function () {
    return ze(
      () => import("./body-BLJn5Eu_.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  hS = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      s = t.onRankEnd,
      c = t.isRankingDisabled,
      u = le(t, dS),
      l = a && !u.sortKey,
      d = _.useState(!1),
      p = G(d, 2),
      v = p[0],
      g = p[1];
    _.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = E.createElement(P_, ae({ ref: r }, u));
    return l && v
      ? E.createElement(
          R_,
          { fallback: f },
          E.createElement(
            _.Suspense,
            { fallback: f },
            E.createElement(
              pS,
              ae({ ref: r }, u, {
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
function gS(e, t, r) {
  return (
    (t = Q(t)),
    Ke(e, Qh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var zc = (function (e) {
  function t() {
    var r;
    he(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = gS(this, t, [].concat(a))),
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
        var p = Bm(i, u, l, d);
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
            m = c.isRankingDisabled,
            y = c.rowsPerPage,
            k = c.paginationi18n,
            w = c.onRankStart,
            O = c.onPageRowsUpdate,
            S = c.testId,
            R = c.label;
          return E.createElement(vS, {
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
            rowsPerPage: y,
            sortKey: o,
            sortOrder: i,
            isRankable: b,
            isRankingDisabled: m,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: O,
            testId: S,
            label: R,
          });
        },
      },
    ])
  );
})(E.Component);
x(zc, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Pe,
  onSort: Pe,
  rowsPerPage: 1 / 0,
});
const bS = (e, t, r, n) => {
    const a = Object.keys(n).map((o) => ({ key: o, content: o, isSortable: t, width: 25 }));
    return (r && a.push({ key: "delete", content: "Delete", isSortable: t, width: 25 }), a);
  },
  eg = (e, t, r, n) => ({ cells: bS(e, t, r, n) });
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
var mS = {};
function li() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : mS;
}
var tg = Object.assign,
  Uo = Object.getOwnPropertyDescriptor,
  xt = Object.defineProperty,
  di = Object.prototype,
  oc = [];
Object.freeze(oc);
var rg = {};
Object.freeze(rg);
var yS = typeof Proxy < "u",
  _S = Object.toString();
function ng() {
  yS || J("Proxy not available");
}
function ag(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Ur = function () {};
function dt(e) {
  return typeof e == "function";
}
function hr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function fi(e) {
  return e !== null && typeof e == "object";
}
function Zt(e) {
  if (!fi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === _S;
}
function og(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function vi(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function ig(e, t, r) {
  xt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function kr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return fi(n) && n[r] === !0;
    }
  );
}
function Qr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function wS(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Nt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var sg = typeof Object.getOwnPropertySymbols < "u";
function kS(e) {
  var t = Object.keys(e);
  if (!sg) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return di.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var pi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : sg
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function cg(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function $t(e, t) {
  return di.hasOwnProperty.call(e, t);
}
var OS =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      pi(t).forEach(function (n) {
        r[n] = Uo(t, n);
      }),
      r
    );
  };
function Ve(e, t) {
  return !!(e & t);
}
function Ge(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function ev(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ES(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xS(n.key), n));
  }
}
function en(e, t, r) {
  return (t && ES(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function qr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = PS(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gr() {
  return (
    (gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gr.apply(null, arguments)
  );
}
function ug(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ic(e, t));
}
function ic(e, t) {
  return (
    (ic = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ic(e, t)
  );
}
function SS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function xS(e) {
  var t = SS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PS(e, t) {
  if (e) {
    if (typeof e == "string") return ev(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ev(e, t)
          : void 0
    );
  }
}
var Ot = Symbol("mobx-stored-annotations");
function Pt(e) {
  function t(r, n) {
    if (Xa(n)) return e.decorate_20223_(r, n);
    Ja(r, n, e);
  }
  return Object.assign(t, e);
}
function Ja(e, t, r) {
  ($t(e, Ot) || vi(e, Ot, gr({}, e[Ot])), TS(r) || (e[Ot][t] = r));
}
function CS(e) {
  return ($t(e, Ot) || vi(e, Ot, gr({}, e[Ot])), e[Ot]);
}
function Xa(e) {
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
        return Sg(this);
      }),
      (t.reportChanged = function () {
        (tt(), xg(this), rt());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      en(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ve(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ve(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ve(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
tr.isBeingObservedMask_ = 1;
tr.isPendingUnobservationMask_ = 2;
tr.diffValueMask_ = 4;
var Vc = kr("Atom", tr);
function lg(e, t, r) {
  (t === void 0 && (t = Ur), r === void 0 && (r = Ur));
  var n = new tr(e);
  return (t !== Ur && Nx(n, t), r !== Ur && Ig(n, r), n);
}
function RS(e, t) {
  return zg(e, t);
}
function AS(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var qo = { structural: RS, default: AS };
function br(e, t, r) {
  return Dg(e)
    ? e
    : Array.isArray(e)
      ? fe.array(e, { name: r })
      : Zt(e)
        ? fe.object(e, void 0, { name: r })
        : Qr(e)
          ? fe.map(e, { name: r })
          : Nt(e)
            ? fe.set(e, { name: r })
            : typeof e == "function" && !Jr(e) && !Va(e)
              ? og(e)
                ? Xr(e)
                : za(r, e)
              : e;
}
function IS(e, t, r) {
  if (e == null || Oi(e) || ki(e) || Er(e) || kt(e)) return e;
  if (Array.isArray(e)) return fe.array(e, { name: r, deep: !1 });
  if (Zt(e)) return fe.object(e, void 0, { name: r, deep: !1 });
  if (Qr(e)) return fe.map(e, { name: r, deep: !1 });
  if (Nt(e)) return fe.set(e, { name: r, deep: !1 });
}
function hi(e) {
  return e;
}
function jS(e, t) {
  return zg(e, t) ? t : e;
}
var MS = "override";
function TS(e) {
  return e.annotationType_ === MS;
}
function Za(e, t) {
  return { annotationType_: e, options_: t, make_: DS, extend_: FS, decorate_20223_: LS };
}
function DS(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Jr(r.value)) return 1;
  var o = dg(e, this, t, r, !1);
  return (xt(n, t, o), 2);
}
function FS(e, t, r, n) {
  var a = dg(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function LS(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, p, v;
      return mr(
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
        Jr(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      Jr(e) || (e = i(e)),
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
function BS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function dg(e, t, r, n, a) {
  var o, i, s, c, u, l, d;
  (a === void 0 && (a = C.safeDescriptors), BS(e, t, r, n));
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: mr(
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
function fg(e, t) {
  return { annotationType_: e, options_: t, make_: NS, extend_: US, decorate_20223_: qS };
}
function NS(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!$t(e.target_, t) || !Va(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Va(r.value)) return 1;
  var o = vg(e, this, t, r, !1, !1);
  return (xt(n, t, o), 2);
}
function US(e, t, r, n) {
  var a,
    o = vg(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function qS(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Va(e) || (e = Xr(e)),
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
function $S(e, t, r, n) {
  (t.annotationType_, n.value);
}
function vg(e, t, r, n, a, o) {
  (o === void 0 && (o = C.safeDescriptors), $S(e, t, r, n));
  var i = n.value;
  if ((Va(i) || (i = Xr(i)), a)) {
    var s;
    ((i = i.bind((s = e.proxy_) != null ? s : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Gc(e, t) {
  return { annotationType_: e, options_: t, make_: zS, extend_: VS, decorate_20223_: GS };
}
function zS(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function VS(e, t, r, n) {
  return (
    HS(e, this, t, r),
    e.defineComputedProperty_(t, gr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function GS(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = tn(this)[$],
        i = gr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new ft(i)));
    }),
    function () {
      return this[$].getObservablePropValue_(n);
    }
  );
}
function HS(e, t, r, n) {
  (t.annotationType_, n.get);
}
function gi(e, t) {
  return { annotationType_: e, options_: t, make_: WS, extend_: KS, decorate_20223_: YS };
}
function WS(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function KS(e, t, r, n) {
  var a, o;
  return (
    JS(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : br,
      n,
    )
  );
}
function YS(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(s, c) {
    var u,
      l,
      d = tn(s)[$],
      p = new fr(
        c,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : br,
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
function JS(e, t, r, n) {
  t.annotationType_;
}
var XS = "true",
  ZS = pg();
function pg(e) {
  return { annotationType_: XS, options_: e, make_: QS, extend_: ex, decorate_20223_: tx };
}
function QS(e, t, r, n) {
  var a, o;
  if (r.get) return bi.make_(e, t, r, n);
  if (r.set) {
    var i = Jr(r.set) ? r.set : mr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: C.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (xt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (og(r.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? Xr.bound : Xr;
      return u.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? za.bound : za;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? fe.ref : fe;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function ex(e, t, r, n) {
  var a, o;
  if (r.get) return bi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: C.safeDescriptors ? e.isPlainObject_ : !0, set: mr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? fe.ref : fe;
  return s.extend_(e, t, r, n);
}
function tx(e, t) {
  J("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var rx = "observable",
  nx = "observable.ref",
  ax = "observable.shallow",
  ox = "observable.struct",
  hg = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(hg);
function bo(e) {
  return e || hg;
}
var sc = gi(rx),
  ix = gi(nx, { enhancer: hi }),
  sx = gi(ax, { enhancer: IS }),
  cx = gi(ox, { enhancer: jS }),
  gg = Pt(sc);
function mo(e) {
  return e.deep === !0 ? br : e.deep === !1 ? hi : lx(e.defaultDecorator);
}
function ux(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : pg(e)) : void 0;
}
function lx(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : br;
}
function bg(e, t, r) {
  if (Xa(t)) return sc.decorate_20223_(e, t);
  if (hr(t)) {
    Ja(e, t, sc);
    return;
  }
  return Dg(e)
    ? e
    : Zt(e)
      ? fe.object(e, t, r)
      : Array.isArray(e)
        ? fe.array(e, t)
        : Qr(e)
          ? fe.map(e, t)
          : Nt(e)
            ? fe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : fe.box(e, t);
}
tg(bg, gg);
var dx = {
    box: function (t, r) {
      var n = bo(r);
      return new fr(t, mo(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = bo(r);
      return (C.useProxies === !1 || n.proxy === !1 ? uP : Qx)(t, mo(n), n.name);
    },
    map: function (t, r) {
      var n = bo(r);
      return new Lg(t, mo(n), n.name);
    },
    set: function (t, r) {
      var n = bo(r);
      return new Bg(t, mo(n), n.name);
    },
    object: function (t, r, n) {
      return Sr(function () {
        return zx(C.useProxies === !1 || n?.proxy === !1 ? tn({}, n) : Jx({}, n), t, r);
      });
    },
    ref: Pt(ix),
    shallow: Pt(sx),
    deep: gg,
    struct: Pt(cx),
  },
  fe = tg(bg, dx),
  mg = "computed",
  fx = "computed.struct",
  cc = Gc(mg),
  vx = Gc(fx, { equals: qo.structural }),
  bi = function (t, r) {
    if (Xa(r)) return cc.decorate_20223_(t, r);
    if (hr(r)) return Ja(t, r, cc);
    if (Zt(t)) return Pt(Gc(mg, t));
    var n = Zt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ft(n));
  };
Object.assign(bi, cc);
bi.struct = Pt(vx);
var tv,
  rv,
  $o = 0,
  px = 1,
  hx =
    (tv = (rv = Uo(function () {}, "name")) == null ? void 0 : rv.configurable) != null ? tv : !1,
  nv = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function mr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return gx(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    hx && ((nv.value = e), xt(a, "name", nv)),
    a
  );
}
function gx(e, t, r, n, a) {
  var o = bx(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    mx(o);
  }
}
function bx(e, t, r, n) {
  var a = !1,
    o = 0,
    i = C.trackingDerivation,
    s = !t || !i;
  tt();
  var c = C.allowStateChanges;
  s && (Or(), (c = mi(!0)));
  var u = Hc(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: i,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: px++,
      parentActionId_: $o,
    };
  return (($o = l.actionId_), l);
}
function mx(e) {
  ($o !== e.actionId_ && J(30),
    ($o = e.parentActionId_),
    e.error_ !== void 0 && (C.suppressReactionErrors = !0),
    yi(e.prevAllowStateChanges_),
    Ia(e.prevAllowStateReads_),
    rt(),
    e.runAsAction_ && zt(e.prevDerivation_),
    (C.suppressReactionErrors = !1));
}
function yx(e, t) {
  var r = mi(e);
  try {
    return t();
  } finally {
    yi(r);
  }
}
function mi(e) {
  var t = C.allowStateChanges;
  return ((C.allowStateChanges = e), t);
}
function yi(e) {
  C.allowStateChanges = e;
}
var fr = (function (e) {
    function t(n, a, o, i, s) {
      var c;
      return (
        o === void 0 && (o = "ObservableValue"),
        s === void 0 && (s = qo.default),
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
    ug(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== C.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (Qe(this)) {
          var o = et(this, { object: this, type: Ct, newValue: a });
          if (!o) return C.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? C.UNCHANGED : a
        );
      }),
      (r.setNewValue_ = function (a) {
        var o = this.value_;
        ((this.value_ = a),
          this.reportChanged(),
          ut(this) && lt(this, { type: Ct, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return Qa(this, a);
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
          eo(this, a)
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
        return cg(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(tr),
  ft = (function () {
    function e(r) {
      ((this.dependenciesState_ = Z.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Z.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Vo(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = zo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || J(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = mr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? qo.structural : qo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Ex(this);
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
          C.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          uc(this) &&
            (this.warnAboutUntrackedRead_(), tt(), (this.value_ = this.computeValue_(!1)), rt());
        else if ((Sg(this), uc(this))) {
          var n = C.trackingContext;
          (this.keepAlive_ && !n && (C.trackingContext = this),
            this.trackAndCompute() && Ox(this),
            (C.trackingContext = n));
        }
        var a = this.value_;
        if (xo(a)) throw a.cause;
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
          a = this.dependenciesState_ === Z.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || xo(n) || xo(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = mi(!1),
          o;
        if (n) o = yg(this, this.derivation, this.scope_);
        else if (C.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Vo(i);
          }
        return (yi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (lc(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          s = void 0;
        return Tx(function () {
          var c = o.get();
          if (!i || a) {
            var u = Or();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: Ct,
              object: o,
              newValue: c,
              oldValue: s,
            }),
              zt(u));
          }
          ((i = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return cg(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      en(e, [
        {
          key: "isComputing",
          get: function () {
            return Ve(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ve(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ve(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ve(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ve(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Ge(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
ft.isComputingMask_ = 1;
ft.isRunningSetterMask_ = 2;
ft.isBeingObservedMask_ = 4;
ft.isPendingUnobservationMask_ = 8;
ft.diffValueMask_ = 16;
var _i = kr("ComputedValue", ft),
  Z;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Z || (Z = {}));
var zo;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(zo || (zo = {}));
var Vo = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function xo(e) {
  return e instanceof Vo;
}
function uc(e) {
  switch (e.dependenciesState_) {
    case Z.UP_TO_DATE_:
      return !1;
    case Z.NOT_TRACKING_:
    case Z.STALE_:
      return !0;
    case Z.POSSIBLY_STALE_: {
      for (var t = Hc(!0), r = Or(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (_i(i)) {
          if (C.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (zt(r), Ia(t), !0);
            }
          if (e.dependenciesState_ === Z.STALE_) return (zt(r), Ia(t), !0);
        }
      }
      return (wg(e), zt(r), Ia(t), !1);
    }
  }
}
function yg(e, t, r) {
  var n = Hc(!0);
  (wg(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++C.runId));
  var a = C.trackingDerivation;
  ((C.trackingDerivation = e), C.inBatch++);
  var o;
  if (C.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new Vo(i);
    }
  return (C.inBatch--, (C.trackingDerivation = a), _x(e), Ia(n), o);
}
function _x(e) {
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
    (c.diffValue === 0 && Og(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), kx(u, e));
  }
  n !== Z.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function lc(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Og(t[r], e);
  e.dependenciesState_ = Z.NOT_TRACKING_;
}
function _g(e) {
  var t = Or();
  try {
    return e();
  } finally {
    zt(t);
  }
}
function Or() {
  var e = C.trackingDerivation;
  return ((C.trackingDerivation = null), e);
}
function zt(e) {
  C.trackingDerivation = e;
}
function Hc(e) {
  var t = C.allowStateReads;
  return ((C.allowStateReads = e), t);
}
function Ia(e) {
  C.allowStateReads = e;
}
function wg(e) {
  if (e.dependenciesState_ !== Z.UP_TO_DATE_) {
    e.dependenciesState_ = Z.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Z.UP_TO_DATE_;
  }
}
var Po = function () {
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
  Co = !0,
  kg = !1,
  C = (function () {
    var e = li();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Co = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Po().version && (Co = !1),
      Co
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Po()))
        : (setTimeout(function () {
            kg || J(35);
          }, 1),
          new Po())
    );
  })();
function wx() {
  if (((C.pendingReactions.length || C.inBatch || C.isRunningReactions) && J(36), (kg = !0), Co)) {
    var e = li();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (C = new Po()));
  }
}
function kx(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Og(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Eg(e));
}
function Eg(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), C.pendingUnobservations.push(e));
}
function tt() {
  C.inBatch++;
}
function rt() {
  if (--C.inBatch === 0) {
    Pg();
    for (var e = C.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ft && r.suspend_()));
    }
    C.pendingUnobservations = [];
  }
}
function Sg(e) {
  var t = C.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && C.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && C.inBatch > 0 && Eg(e), !1);
}
function xg(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Z.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Z.STALE_));
    }));
}
function Ox(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Z.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Z.STALE_)
        : t.dependenciesState_ === Z.UP_TO_DATE_ && (e.lowestObserverState_ = Z.UP_TO_DATE_);
    }));
}
function Ex(e) {
  e.lowestObserverState_ === Z.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Z.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Z.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Z.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = Z.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = zo.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), C.pendingReactions.push(this), Pg());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (tt(), (this.isScheduled = !1));
        var n = C.trackingContext;
        if (((C.trackingContext = this), uc(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((C.trackingContext = n), rt());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (tt(), (this.isRunning = !0));
        var a = C.trackingContext;
        C.trackingContext = this;
        var o = yg(this, n, void 0);
        ((C.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && lc(this),
          xo(o) && this.reportExceptionInDerivation_(o.cause),
          rt());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (C.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      (C.suppressReactionErrors || console.error(o, n),
        C.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (tt(), lc(this), rt()));
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
    en(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ve(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Ge(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ve(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Ge(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ve(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Ge(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ve(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Ge(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ve(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Ge(this.flags_, e.diffValueMask_, n === 1);
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
var Sx = 100,
  dc = function (t) {
    return t();
  };
function Pg() {
  C.inBatch > 0 || C.isRunningReactions || dc(xx);
}
function xx() {
  C.isRunningReactions = !0;
  for (var e = C.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Sx && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  C.isRunningReactions = !1;
}
var Go = kr("Reaction", It);
function Px(e) {
  var t = dc;
  dc = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function ja() {
  return !1;
}
function Cx(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Cg = "action",
  Rx = "action.bound",
  Rg = "autoAction",
  Ax = "autoAction.bound",
  Ix = "<unnamed action>",
  fc = Za(Cg),
  jx = Za(Rx, { bound: !0 }),
  vc = Za(Rg, { autoAction: !0 }),
  Mx = Za(Ax, { autoAction: !0, bound: !0 });
function Ag(e) {
  var t = function (n, a) {
    if (dt(n)) return mr(n.name || Ix, n, e);
    if (dt(a)) return mr(n, a, e);
    if (Xa(a)) return (e ? vc : fc).decorate_20223_(n, a);
    if (hr(a)) return Ja(n, a, e ? vc : fc);
    if (hr(n)) return Pt(Za(e ? Rg : Cg, { name: n, autoAction: e }));
  };
  return t;
}
var Re = Ag(!1);
Object.assign(Re, fc);
var za = Ag(!0);
Object.assign(za, vc);
Re.bound = Pt(jx);
za.bound = Pt(Mx);
function Jr(e) {
  return dt(e) && e.isMobxAction === !0;
}
function Tx(e, t) {
  var r, n, a, o;
  t === void 0 && (t = rg);
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
    var u = Fx(t),
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
var Dx = function (t) {
  return t();
};
function Fx(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Dx;
}
var Lx = "onBO",
  Bx = "onBUO";
function Nx(e, t, r) {
  return jg(Lx, e, t, r);
}
function Ig(e, t, r) {
  return jg(Bx, e, t, r);
}
function jg(e, t, r, n) {
  var a = Ko(t),
    o = dt(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var s = a[i];
      s && (s.delete(o), s.size === 0 && delete a[i]);
    }
  );
}
var Ux = "never",
  yo = "always",
  qx = "observed";
function $x(e) {
  e.isolateGlobalState === !0 && wx();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (C.useProxies = t === yo ? !0 : t === Ux ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (C.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === yo ? yo : r === qx;
    ((C.enforceActions = n), (C.allowStateChanges = !(n === !0 || n === yo)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (C[a] = !!e[a]);
  }),
    (C.allowStateReads = !C.observableRequiresReaction),
    e.reactionScheduler && Px(e.reactionScheduler));
}
function zx(e, t, r, n) {
  var a = OS(t);
  return (
    Sr(function () {
      var o = tn(e, n)[$];
      pi(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function Vx(e, t) {
  return Mg(Ko(e, t));
}
function Mg(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Gx(e.observing_).map(Mg)),
    t
  );
}
function Gx(e) {
  return Array.from(new Set(e));
}
var Hx = 0;
function Tg() {
  this.message = "FLOW_CANCELLED";
}
Tg.prototype = Object.create(Error.prototype);
var Is = fg("flow"),
  Wx = fg("flow.bound", { bound: !0 }),
  Xr = Object.assign(function (t, r) {
    if (Xa(r)) return Is.decorate_20223_(t, r);
    if (hr(r)) return Ja(t, r, Is);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          c = arguments,
          u = ++Hx,
          l = Re(a + " - runid: " + u + " - init", n).apply(s, c),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              p = void 0;
              var w;
              try {
                w = Re(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (O) {
                return f(O);
              }
              y(w);
            }
            function m(k) {
              p = void 0;
              var w;
              try {
                w = Re(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
              } catch (O) {
                return f(O);
              }
              y(w);
            }
            function y(k) {
              if (dt(k?.then)) {
                k.then(y, f);
                return;
              }
              return k.done ? g(k.value) : ((p = Promise.resolve(k.value)), p.then(b, m));
            }
            b(void 0);
          });
        return (
          (v.cancel = Re(a + " - runid: " + u + " - cancel", function () {
            try {
              p && av(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Ur, Ur), av(f), d(new Tg()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, Is);
Xr.bound = Pt(Wx);
function av(e) {
  dt(e.cancel) && e.cancel();
}
function Va(e) {
  return e?.isMobXFlow === !0;
}
function Kx(e, t) {
  return e ? Oi(e) || !!e[$] || Vc(e) || Go(e) || _i(e) : !1;
}
function Dg(e) {
  return Kx(e);
}
function Ut(e, t) {
  (t === void 0 && (t = void 0), tt());
  try {
    return e.apply(t);
  } finally {
    rt();
  }
}
function Nr(e) {
  return e[$];
}
var Yx = {
  has: function (t, r) {
    return Nr(t).has_(r);
  },
  get: function (t, r) {
    return Nr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return hr(r) ? ((a = Nr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return hr(r) ? ((n = Nr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Nr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Nr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    J(13);
  },
};
function Jx(e, t) {
  var r, n;
  return (
    ng(),
    (e = tn(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Yx))
  );
}
function Qe(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Qa(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    ag(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function et(e, t) {
  var r = Or();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && J(14), !!t);
      a++
    );
    return t;
  } finally {
    zt(r);
  }
}
function ut(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function eo(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    ag(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function lt(e, t) {
  var r = Or(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    zt(r);
  }
}
function wi(e, t, r) {
  return (
    Sr(function () {
      var n,
        a = tn(e, r)[$];
      ((n = t) != null || (t = CS(e)),
        pi(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var ov = "splice",
  Ct = "update",
  Xx = 1e4,
  Zx = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : $t(Ho, r)
              ? Ho[r]
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
  Wc = (function () {
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
        return Qa(this, n);
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
          eo(this, n)
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
          this.legacyMode_ && a > 0 && $g(n + a + 1));
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
          o === void 0 && (o = oc),
          Qe(this))
        ) {
          var c = et(this, { object: this.proxy_, type: ov, index: n, removedCount: a, added: o });
          if (!c) return oc;
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
        if (o.length < Xx) {
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
        var i = !this.owned_ && ja(),
          s = ut(this),
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
        (this.atom_.reportChanged(), s && lt(this, c));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && ja(),
          s = ut(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: ov,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && lt(this, c));
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
          if (Qe(this)) {
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
function Qx(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    ng(),
    Sr(function () {
      var a = new Wc(r, t, n, !1);
      ig(a.values_, $, a);
      var o = new Proxy(a.values_, Zx);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Ho = {
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
    return (C.trackingDerivation && J(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    C.trackingDerivation && J(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[$],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
de("at", Je);
de("concat", Je);
de("flat", Je);
de("includes", Je);
de("indexOf", Je);
de("join", Je);
de("lastIndexOf", Je);
de("slice", Je);
de("toString", Je);
de("toLocaleString", Je);
de("toSorted", Je);
de("toSpliced", Je);
de("with", Je);
de("every", vt);
de("filter", vt);
de("find", vt);
de("findIndex", vt);
de("findLast", vt);
de("findLastIndex", vt);
de("flatMap", vt);
de("forEach", vt);
de("map", vt);
de("some", vt);
de("toReversed", vt);
de("reduce", Fg);
de("reduceRight", Fg);
function de(e, t) {
  typeof Array.prototype[e] == "function" && (Ho[e] = t(e));
}
function Je(e) {
  return function () {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function vt(e) {
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
function Fg(e) {
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
var eP = kr("ObservableArrayAdministration", Wc);
function ki(e) {
  return fi(e) && eP(e[$]);
}
var tP = {},
  Xt = "add",
  Wo = "delete",
  Lg = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = tP),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        dt(Map) || J(18),
        Sr(function () {
          ((o.keysAtom_ = lg("ObservableMap.keys()")),
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
        if (!C.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new fr(this.has_(n), hi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            Ig(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (Qe(this)) {
          var i = et(this, { type: o ? Ct : Xt, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, Qe(this))) {
          var o = et(this, { type: Wo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = ja(),
            s = ut(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Wo,
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
            s && lt(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== C.UNCHANGED)) {
          var i = ja(),
            s = ut(this),
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
          (o.setNewValue_(a), s && lt(this, c));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Ut(function () {
            var u,
              l = new fr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = ja(),
          s = ut(this),
          c =
            s || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Xt,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        s && lt(this, c);
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
        return iv({
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
        return iv({
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
        for (var o = qr(this), i; !(i = o()).done; ) {
          var s = i.value,
            c = s[0],
            u = s[1];
          n.call(a, u, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Er(n) && (n = new Map(n)),
          Ut(function () {
            Zt(n)
              ? kS(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      s = o[1];
                    return a.set(i, s);
                  })
                : Qr(n)
                  ? (wS(n) || J(19, n),
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
          _g(function () {
            for (var a = qr(n.keys()), o; !(o = a()).done; ) {
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
              var o = rP(n), i = new Map(), s = !1, c = qr(a.data_.keys()), u;
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
            for (var v = qr(o.entries()), g; !(g = v()).done; ) {
              var f = g.value,
                h = f[0],
                b = f[1],
                m = a.data_.has(h);
              if ((a.set(h, b), a.data_.has(h))) {
                var y = a.data_.get(h);
                (i.set(h, y), m || (s = !0));
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
        return eo(this, n);
      }),
      (t.intercept_ = function (n) {
        return Qa(this, n);
      }),
      en(e, [
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
  Er = kr("ObservableMap", Lg);
function iv(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Yc(e));
}
function rP(e) {
  if (Qr(e) || Er(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Zt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return J(21, e);
}
var nP = {},
  Bg = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = br),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = nP),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        dt(Set) || J(22),
        (this.enhancer_ = function (i, s) {
          return n(i, s, a);
        }),
        Sr(function () {
          ((o.atom_ = lg(o.name_)), r && o.replace(r));
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
          _g(function () {
            for (var a = qr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = qr(this), i; !(i = o()).done; ) {
          var s = i.value;
          n.call(a, s, s, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, Qe(this))) {
          var o = et(this, { type: Xt, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Ut(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            s = ut(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Xt,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && lt(this, c);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (Qe(this)) {
          var o = et(this, { type: Wo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            s = ut(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Wo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Ut(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && lt(this, c),
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
        return sv({
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
        return sv({
          next: function () {
            var i = a.next(),
              s = i.value,
              c = i.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Nt(n) && !kt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Nt(n) && !kt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Nt(n) && !kt(n)) return n.symmetricDifference(this);
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
        if (Nt(n) && !kt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          kt(n) && (n = new Set(n)),
          Ut(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Nt(n)
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
        return eo(this, n);
      }),
      (t.intercept_ = function (n) {
        return Qa(this, n);
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
      en(e, [
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
  kt = kr("ObservableSet", Bg);
function sv(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Yc(e));
}
var cv = Object.create(null),
  uv = "remove",
  Ng = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = ZS),
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
        if (o instanceof ft) return (o.set(a), !0);
        if (Qe(this)) {
          var i = et(this, { type: Ct, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== C.UNCHANGED)) {
          var s = ut(this),
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
          (o.setNewValue_(a), s && lt(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (C.trackingDerivation && !$t(this.target_, n) && this.has_(n), this.target_[n]);
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
        if (!C.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new fr(n in this.target_, hi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Ot]) != null && o[n]) return;
            J(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== di; ) {
            var s = Uo(i, n);
            if (s) {
              var c = a.make_(this, n, s, i);
              if (c === 0) return;
              if (c === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          dv(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var s = o.extend_(this, n, a, i);
        return (s && dv(this, o, n), s);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          tt();
          var i = this.delete_(n);
          if (!i) return i;
          if (Qe(this)) {
            var s = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a.value,
            });
            if (!s) return null;
            var c = s.newValue;
            a.value !== c && (a = gr({}, a, { value: c }));
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
          if (Qe(this)) {
            var c = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var u = lv(n),
            l = {
              configurable: C.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else xt(this.target_, n, l);
          var d = new fr(a, o, "ObservableObject.key", !1);
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
          if (Qe(this)) {
            var s = et(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Xt,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var c = lv(n),
            u = {
              configurable: C.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else xt(this.target_, n, u);
          (this.values_.set(n, new ft(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          rt();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !$t(this.target_, n))) return !0;
        if (Qe(this)) {
          var o = et(this, { object: this.proxy_ || this.target_, name: n, type: uv });
          if (!o) return null;
        }
        try {
          var i;
          tt();
          var s = ut(this),
            c = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (s || c)) {
            var d;
            l = (d = Uo(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof fr && (l = u.value_), xg(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            s || c)
          ) {
            var p = {
              type: uv,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && lt(this, p);
          }
        } finally {
          rt();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return eo(this, n);
      }),
      (t.intercept_ = function (n) {
        return Qa(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = ut(this),
          s = !1;
        if (i || s) {
          var c =
            i || s
              ? {
                  type: Xt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && lt(this, c);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), pi(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function tn(e, t) {
  var r;
  if ($t(e, $)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Ng(e, new Map(), String(n), ux(t));
  return (vi(e, $, a), e);
}
var aP = kr("ObservableObjectAdministration", Ng);
function lv(e) {
  return (
    cv[e] ||
    (cv[e] = {
      get: function () {
        return this[$].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[$].setObservablePropValue_(e, r);
      },
    })
  );
}
function Oi(e) {
  return fi(e) ? aP(e[$]) : !1;
}
function dv(e, t, r) {
  var n;
  (n = e.target_[Ot]) == null || delete n[r];
}
var oP = qg(0),
  iP = (function () {
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
  js = 0,
  Ug = function () {};
function sP(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
sP(Ug, Array.prototype);
var Kc = (function (e) {
  function t(n, a, o, i) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (s = e.call(this) || this),
      Sr(function () {
        var c = new Wc(o, a, i, !0);
        ((c.proxy_ = s),
          ig(s, $, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          iP && Object.defineProperty(s, "0", oP));
      }),
      s
    );
  }
  ug(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return ki(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Yc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    en(t, [
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
})(Ug);
Object.entries(Ho).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && vi(Kc.prototype, t, r);
});
function qg(e) {
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
function cP(e) {
  xt(Kc.prototype, "" + e, qg(e));
}
function $g(e) {
  if (e > js) {
    for (var t = js; t < e + 100; t++) cP(t);
    js = e;
  }
}
$g(1e3);
function uP(e, t, r) {
  return new Kc(e, t, r);
}
function Ko(e, t) {
  if (typeof e == "object" && e !== null) {
    if (ki(e)) return (t !== void 0 && J(23), e[$].atom_);
    if (kt(e)) return e.atom_;
    if (Er(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || J(25, t, pc(e)), r);
    }
    if (Oi(e)) {
      if (!t) return J(26);
      var n = e[$].values_.get(t);
      return (n || J(27, t, pc(e)), n);
    }
    if (Vc(e) || _i(e) || Go(e)) return e;
  } else if (dt(e) && Go(e[$])) return e[$];
  J(28);
}
function lP(e, t) {
  if ((e || J(29), Vc(e) || _i(e) || Go(e) || Er(e) || kt(e))) return e;
  if (e[$]) return e[$];
  J(24, e);
}
function pc(e, t) {
  var r;
  if (t !== void 0) r = Ko(e, t);
  else {
    if (Jr(e)) return e.name;
    Oi(e) || Er(e) || kt(e) ? (r = lP(e)) : (r = Ko(e));
  }
  return r.name_;
}
function Sr(e) {
  var t = Or(),
    r = mi(!0);
  tt();
  try {
    return e();
  } finally {
    (rt(), yi(r), zt(t));
  }
}
var fv = di.toString;
function zg(e, t, r) {
  return (r === void 0 && (r = -1), hc(e, t, r));
}
function hc(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = fv.call(e);
  if (i !== fv.call(t)) return !1;
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
  ((e = vv(e)), (t = vv(t)));
  var s = i === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      u = t.constructor;
    if (
      c !== u &&
      !(dt(c) && c instanceof c && dt(u) && u instanceof u) &&
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
    for (; l--; ) if (!hc(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!($t(t, g) && hc(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function vv(e) {
  return ki(e) ? e.slice() : Qr(e) || Er(e) || Nt(e) || kt(e) ? Array.from(e.entries()) : e;
}
var pv,
  dP = ((pv = li().Iterator) == null ? void 0 : pv.prototype) || {};
function Yc(e) {
  return ((e[Symbol.iterator] = fP), Object.assign(Object.create(dP), e));
}
function fP() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = li();
  typeof t[e] > "u" && J("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Cx, extras: { getDebugName: pc }, $mobx: $ });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!wi) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function vP(e) {
  e();
}
function pP(e) {
  (e || (e = vP), $x({ reactionScheduler: e }));
}
function hP(e) {
  return Vx(e);
}
var gP = 1e4,
  bP = 1e4,
  mP = (function () {
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
            (n === void 0 && (n = gP), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, bP));
        },
      }),
      e
    );
  })(),
  yP = typeof FinalizationRegistry < "u" ? FinalizationRegistry : mP,
  Ga = new yP(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Ms = { exports: {} },
  Ts = {};
var hv;
function _P() {
  if (hv) return Ts;
  hv = 1;
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
    (Ts.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Ts
  );
}
var gv;
function wP() {
  return (gv || ((gv = 1), (Ms.exports = _P())), Ms.exports);
}
var kP = wP();
function bv(e) {
  e.reaction = new It("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function OP(e, t) {
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
          Ga.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (bv(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (bv(a), Ga.register(r, a, a)),
    E.useDebugValue(a.reaction, hP),
    kP.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var Ds,
  Fs,
  Vg = typeof Symbol == "function" && Symbol.for,
  EP =
    (Fs =
      (Ds = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Ds === void 0
        ? void 0
        : Ds.configurable) !== null && Fs !== void 0
      ? Fs
      : !1,
  mv = Vg
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  yv = Vg
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function SP(e, t) {
  var r;
  if (yv && e.$$typeof === yv)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (mv && e.$$typeof === mv && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (s, c) {
    return OP(function () {
      return a(s, c);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    EP && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = _.forwardRef(i)),
    (i = _.memo(i)),
    PP(e, i),
    i
  );
}
var xP = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function PP(e, t) {
  Object.keys(e).forEach(function (r) {
    xP[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ls;
pP(Yo.unstable_batchedUpdates);
Ls = Ga.finalizeAllImmediately;
function CP(e, t) {
  if (_v(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !_v(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function _v(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var wv = Symbol("patchMixins"),
  Gg = Symbol("patchedDefinition");
function RP(e, t) {
  var r = (e[wv] = e[wv] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function kv(e, t) {
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
function Ov(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    kv.call.apply(kv, [this, e, t].concat(o));
  };
  return r;
}
function AP(e, t, r) {
  var n = RP(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Gg])) {
    var o = e[t],
      i = Hg(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function Hg(e, t, r, n, a) {
  var o,
    i = Ov(a, n);
  return (
    (o = {}),
    (o[Gg] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (c) {
      if (this === e) i = Ov(c, n);
      else {
        var u = Hg(this, t, r, n, c);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var Ev = Symbol("ObserverAdministration"),
  Sv = Symbol("isMobXReactObserver");
function gc(e) {
  var t;
  return (t = e[Ev]) != null
    ? t
    : (e[Ev] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: bc(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function IP(e) {
  var t = e.prototype;
  if (e[Sv]) {
    var r = bc(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Sv] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = xv;
    else if (t.shouldComponentUpdate !== xv)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = bc(e);
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
        value: jP.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        s = gc(this);
      return (
        (s.mounted = !0),
        Ga.unregister(this),
        (s.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    AP(t, "componentWillUnmount", function () {
      var i,
        s = gc(this);
      ((i = s.reaction) == null || i.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function bc(e) {
  return e.displayName || e.name || "<component>";
}
function jP(e) {
  var t = e.bind(this),
    r = gc(this);
  function n() {
    r.reaction || ((r.reaction = MP(r)), r.mounted || Ga.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = yx(!1, t);
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
function MP(e) {
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
function xv(e, t) {
  return this.state !== t ? !0 : !CP(this.props, e);
}
function Ei(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? IP(e)
      : SP(e)
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
function TP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var DP = ["children"],
  Pv = E.createContext({});
function Wg(e) {
  var t = e.children,
    r = TP(e, DP),
    n = E.useContext(Pv),
    a = E.useRef(mc({}, n, r)),
    o = a.current;
  return E.createElement(Pv.Provider, { value: o }, t);
}
Wg.displayName = "MobXProvider";
E.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!fe) throw new Error("mobx-react requires mobx to be available");
var FP = Object.defineProperty,
  LP = Object.getOwnPropertyDescriptor,
  Gt = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? LP(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && FP(t, r, a), a);
  };
let Mt = class {
  constructor() {
    ((this.isLoading = !0), wi(this));
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
Gt([fe], Mt.prototype, "isLoading", 2);
Gt([fe], Mt.prototype, "users", 2);
Gt([fe], Mt.prototype, "duplicates", 2);
Gt([fe], Mt.prototype, "sort", 2);
Gt([Re.bound], Mt.prototype, "saveUsers", 1);
Gt([Re.bound], Mt.prototype, "saveSort", 1);
Gt([Re.bound], Mt.prototype, "saveDuplicates", 1);
Gt([Re], Mt.prototype, "loading", 1);
Gt([Re], Mt.prototype, "stopLoading", 1);
const BP = new Mt();
var NP = Object.defineProperty,
  UP = Object.getOwnPropertyDescriptor,
  to = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? UP(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && NP(t, r, a), a);
  };
class rn {
  constructor() {
    ((this.isLoading = !0), wi(this));
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
to([fe], rn.prototype, "isLoading", 2);
to([fe], rn.prototype, "metadata", 2);
to([Re.bound], rn.prototype, "saveMetadata", 1);
to([Re], rn.prototype, "loading", 1);
to([Re], rn.prototype, "stopLoading", 1);
const qP = new rn();
var $P = Object.defineProperty,
  zP = Object.getOwnPropertyDescriptor,
  Kg = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? zP(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && $P(t, r, a), a);
  };
class Jc {
  constructor() {
    ((this.state = "ROOT"), wi(this));
  }
  saveState(t) {
    this.state = t;
  }
}
Kg([fe], Jc.prototype, "state", 2);
Kg([Re.bound], Jc.prototype, "saveState", 1);
const VP = new Jc();
class GP {
  constructor() {
    ((this.usersStore = BP), (this.usersMetadata = qP), (this.stateStore = VP));
  }
}
const Yg = new GP(),
  HP = _.createContext(Yg),
  Si = () => _.useContext(HP),
  WP = Ei(() => {
    const { usersStore: e, usersMetadata: t, stateStore: r } = Si(),
      n = eg(!0, !0, !0, t.metadata.user.properties),
      a = e.users;
    return !a || a.length === 0
      ? N.jsx("div", { children: "User Table is EMPTY" })
      : N.jsx("div", {
          children: N.jsxs("div", {
            children: [
              N.jsx(zc, {
                head: n,
                onSort: async (o) => {
                  let i = { name: o.key, sortType: o.sortOrder };
                  e.loading();
                  try {
                    const s = await qt.invoke("fetch", { sortType: i });
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
                      content: N.jsx("div", {
                        children: N.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await qt.invoke("delete", { id: o.id }));
                              const c = await qt.invoke("fetch", { sortType: e.sort });
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
                emptyView: N.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              N.jsx("br", {}),
              N.jsx("br", {}),
              N.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const o = await qt.invoke("duplicate");
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
  KP = Ei(() => {
    const { usersMetadata: e, usersStore: t, stateStore: r } = Si(),
      [n, a] = _.useState({}),
      o = (s) => {
        const { name: c, value: u, type: l } = s.target;
        a((d) => ({ ...d, [c]: l === "number" ? Number(u) : u }));
      },
      i = async (s) => {
        (s.preventDefault(),
          console.log("Form Data:", n),
          await qt.invoke("create", { data: n }),
          t.loading());
        try {
          (t.saveUsers(await qt.invoke("fetch", { sortType: t.sort })), r.saveState("ROOT"));
        } finally {
          t.stopLoading();
        }
      };
    return N.jsx("div", {
      children: N.jsxs("form", {
        onSubmit: i,
        children: [
          Object.keys(e.metadata.user.properties).map((s) => {
            let c = e.metadata.user.properties[s];
            return N.jsxs(
              "div",
              {
                children: [
                  N.jsx("label", { htmlFor: s, children: s }),
                  N.jsx("br", {}),
                  N.jsx("input", {
                    type: c.type === "integer" || c.type === "smallint" ? "number" : "text",
                    id: s,
                    name: s,
                    onChange: o,
                  }),
                  N.jsx("br", {}),
                ],
              },
              s,
            );
          }),
          N.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  YP = Ei(() => {
    const { usersStore: e, usersMetadata: t } = Si(),
      r = eg(!0, !1, !1, t.metadata.duplicate.properties),
      n = e.duplicates;
    return !n || n.length === 0
      ? N.jsx("div", { children: "Duplicate Table is EMPTY" })
      : N.jsx("div", {
          children: N.jsxs("div", {
            children: [
              N.jsx(zc, {
                head: r,
                rows: n.map((a, o) => {
                  const i = Object.keys(a.fields).map((s) => ({ key: s, content: a.fields[s] }));
                  return { key: `row-${o}-1`, cells: i };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: N.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              N.jsx("br", {}),
              N.jsx("br", {}),
            ],
          }),
        });
  });
function JP() {
  const { usersStore: e, usersMetadata: t, stateStore: r } = Si();
  if (
    (_.useEffect(() => {
      (async () => {
        try {
          t.saveMetadata(await qt.invoke("fetchMetadata"));
          const a = await qt.invoke("fetch", { type: "USER", sortType: e.sort });
          e.saveUsers(a);
        } finally {
          (t.stopLoading(), e.stopLoading());
        }
      })().catch(console.error);
    }, []),
    e.isLoading || t.isLoading)
  )
    return "loading....";
  if (!t.metadata) return N.jsx("div", { children: "Loading Error" });
  switch (r.state) {
    case "ROOT":
      return N.jsx("div", {
        children: N.jsxs("div", {
          children: [
            N.jsx("button", { onClick: () => r.saveState("ADD_USER"), children: "Add a new User" }),
            N.jsx("br", {}),
            N.jsx("br", {}),
            N.jsx(WP, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return N.jsx("div", {
        children: N.jsxs("div", {
          children: [
            N.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            N.jsx("br", {}),
            N.jsx("br", {}),
            N.jsx(YP, {}),
          ],
        }),
      });
    case "ADD_USER":
      return N.jsx("div", {
        children: N.jsxs("div", {
          children: [
            N.jsx("button", { onClick: () => r.saveState("ROOT"), children: "back" }),
            N.jsx("br", {}),
            N.jsx("br", {}),
            N.jsx(KP, {}),
          ],
        }),
      });
    default:
      return N.jsxs("div", { children: ["ERROR: unsupprted state $", r.state] });
  }
}
const XP = Ei(JP),
  ZP = document.getElementById("root"),
  QP = ib.createRoot(ZP),
  Cv = () => {
    QP.render(N.jsx(Wg, { ...Yg, children: N.jsx(XP, {}) }));
  };
qt.view.theme
  .enable()
  .then(() => {
    Cv();
  })
  .catch((e) => {
    (console.error(e.message), Cv());
  });
export {
  Jd as A,
  be as B,
  Zp as C,
  oi as D,
  ai as E,
  pC as F,
  vC as G,
  lC as H,
  E as R,
  w_ as T,
  Ye as _,
  ge as a,
  Vs as b,
  he as c,
  Q as d,
  Ke as e,
  G as f,
  x as g,
  le as h,
  _r as i,
  Oe as j,
  ae as k,
  w0 as l,
  Bt as m,
  jt as n,
  oe as o,
  y_ as p,
  Lm as q,
  _ as r,
  g_ as s,
  dC as t,
  uC as u,
  cC as v,
  Ak as w,
  sC as x,
  fC as y,
  Yd as z,
};
