const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-BCqYYRNo.js",
      "./lodash-vendor-Dv-o4pqD.js",
      "./custom-theme-PjTJAMS-.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./client-core-vendor-KlielV5i.js",
      "./body-dAzMf0vo.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as Rr, a as si, c as Ub } from "./react-dom-vendor--YlRhZCI.js";
import { g as ur, a as tv, r as qb } from "./lodash-vendor-Dv-o4pqD.js";
import { r as Mt, s as it } from "./client-core-vendor-KlielV5i.js";
function $b(e, t) {
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
var $i = { exports: {} },
  mn = {};
var yu;
function zb() {
  if (yu) return mn;
  yu = 1;
  var e = Rr(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, u) {
    var l,
      d = {},
      v = null,
      p = null;
    (u !== void 0 && (v = "" + u),
      c.key !== void 0 && (v = "" + c.key),
      c.ref !== void 0 && (p = c.ref));
    for (l in c) n.call(c, l) && !o.hasOwnProperty(l) && (d[l] = c[l]);
    if (s && s.defaultProps) for (l in ((c = s.defaultProps), c)) d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: t, type: s, key: v, ref: p, props: d, _owner: a.current };
  }
  return ((mn.Fragment = r), (mn.jsx = i), (mn.jsxs = i), mn);
}
var _u;
function Vb() {
  return (_u || ((_u = 1), ($i.exports = zb())), $i.exports);
}
var x = Vb(),
  _ = Rr();
const S = ur(_),
  wu = $b({ __proto__: null, default: S }, [_]);
var zi = {},
  tc = function (e, t) {
    return (
      (tc =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      tc(e, t)
    );
  };
function rv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  tc(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var Uo = function () {
  return (
    (Uo =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    Uo.apply(this, arguments)
  );
};
function nv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function av(e, t, r, n) {
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
function ov(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function iv(e, t, r, n, a, o) {
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
      v = !1,
      p = r.length - 1;
    p >= 0;
    p--
  ) {
    var g = {};
    for (var f in n) g[f] = f === "access" ? {} : n[f];
    for (var f in n.access) g.access[f] = n.access[f];
    g.addInitializer = function (b) {
      if (v) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(i(b || null));
    };
    var h = (0, r[p])(s === "accessor" ? { get: l.get, set: l.set } : l[c], g);
    if (s === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = i(h.get)) && (l.get = d),
        (d = i(h.set)) && (l.set = d),
        (d = i(h.init)) && a.unshift(d));
    } else (d = i(h)) && (s === "field" ? a.unshift(d) : (l[c] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (v = !0));
}
function sv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function cv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function uv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function lv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function dv(e, t, r, n) {
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
function fv(e, t) {
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
var ci = Object.create
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
function pv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ci(t, e, r);
}
function qo(e) {
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
function Mc(e, t) {
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
function vv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Mc(arguments[t]));
  return e;
}
function hv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i];
  return n;
}
function gv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function tn(e) {
  return this instanceof tn ? ((this.v = e), this) : new tn(e);
}
function bv(e, t, r) {
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
  function i(p) {
    return function (g) {
      return Promise.resolve(g).then(p, d);
    };
  }
  function s(p, g) {
    n[p] &&
      ((a[p] = function (f) {
        return new Promise(function (h, b) {
          o.push([p, f, h, b]) > 1 || c(p, f);
        });
      }),
      g && (a[p] = g(a[p])));
  }
  function c(p, g) {
    try {
      u(n[p](g));
    } catch (f) {
      v(o[0][3], f);
    }
  }
  function u(p) {
    p.value instanceof tn ? Promise.resolve(p.value.v).then(l, d) : v(o[0][2], p);
  }
  function l(p) {
    c("next", p);
  }
  function d(p) {
    c("throw", p);
  }
  function v(p, g) {
    (p(g), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function mv(e) {
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
          return (r = !r) ? { value: tn(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function yv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof qo == "function" ? qo(e) : e[Symbol.iterator]()),
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
function _v(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Gb = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  rc = function (e) {
    return (
      (rc =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      rc(e)
    );
  };
function wv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = rc(e), n = 0; n < r.length; n++) r[n] !== "default" && ci(t, e, r[n]);
  return (Gb(t, e), t);
}
function kv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ov(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Sv(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function Ev(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function xv(e, t, r) {
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
var Hb =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Cv(e) {
  function t(o) {
    ((e.error = e.hasError ? new Hb(o, e.error, "An error was suppressed during disposal.") : o),
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
function Pv(e, t) {
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
const Wb = {
    __extends: rv,
    __assign: Uo,
    __rest: nv,
    __decorate: av,
    __param: ov,
    __esDecorate: iv,
    __runInitializers: sv,
    __propKey: cv,
    __setFunctionName: uv,
    __metadata: lv,
    __awaiter: dv,
    __generator: fv,
    __createBinding: ci,
    __exportStar: pv,
    __values: qo,
    __read: Mc,
    __spread: vv,
    __spreadArrays: hv,
    __spreadArray: gv,
    __await: tn,
    __asyncGenerator: bv,
    __asyncDelegator: mv,
    __asyncValues: yv,
    __makeTemplateObject: _v,
    __importStar: wv,
    __importDefault: kv,
    __classPrivateFieldGet: Ov,
    __classPrivateFieldSet: Sv,
    __classPrivateFieldIn: Ev,
    __addDisposableResource: xv,
    __disposeResources: Cv,
    __rewriteRelativeImportExtension: Pv,
  },
  Kb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: xv,
        get __assign() {
          return Uo;
        },
        __asyncDelegator: mv,
        __asyncGenerator: bv,
        __asyncValues: yv,
        __await: tn,
        __awaiter: dv,
        __classPrivateFieldGet: Ov,
        __classPrivateFieldIn: Ev,
        __classPrivateFieldSet: Sv,
        __createBinding: ci,
        __decorate: av,
        __disposeResources: Cv,
        __esDecorate: iv,
        __exportStar: pv,
        __extends: rv,
        __generator: fv,
        __importDefault: kv,
        __importStar: wv,
        __makeTemplateObject: _v,
        __metadata: lv,
        __param: ov,
        __propKey: cv,
        __read: Mc,
        __rest: nv,
        __rewriteRelativeImportExtension: Pv,
        __runInitializers: sv,
        __setFunctionName: uv,
        __spread: vv,
        __spreadArray: gv,
        __spreadArrays: hv,
        __values: qo,
        default: Wb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  He = tv(Kb);
var yn = {},
  ku;
function Jb() {
  return (
    ku ||
      ((ku = 1),
      Object.defineProperty(yn, "__esModule", { value: !0 }),
      (yn.NavigationTarget = void 0),
      (yn.NavigationTarget = {
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
    yn
  );
}
var Vi = {},
  Gi = {},
  _n = {},
  wn = {},
  Ou;
function Se() {
  if (Ou) return wn;
  ((Ou = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((wn.BridgeAPIError = e), wn);
}
var Su;
function fe() {
  if (Su) return _n;
  ((Su = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.getCallBridge = void 0));
  const e = Se();
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
  return ((_n.getCallBridge = r), _n);
}
var kn = {},
  Eu;
function ui() {
  if (Eu) return kn;
  ((Eu = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.withRateLimiter = void 0));
  const e = Se(),
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
  return ((kn.withRateLimiter = t), kn);
}
var xu;
function Yb() {
  return (
    xu ||
      ((xu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = fe(),
          r = Se(),
          n = ui(),
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
      })(Gi)),
    Gi
  );
}
var Cu;
function ao() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), He.__exportStar(Yb(), e));
      })(Vi)),
    Vi
  );
}
var Hi = {},
  On = {},
  Wi = {},
  Pu;
function Rv() {
  return (
    Pu ||
      ((Pu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = fe(),
          r = Se(),
          n = ui(),
          a = 500,
          o = 25,
          i = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const s = (0, t.getCallBridge)(),
          c = (d) => {
            if (d && Object.values(d).some((v) => typeof v == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          u = (d) => async (v) => {
            c(v);
            const p = { ...v, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await s("invoke", p),
              { success: f, payload: h, error: b } = g ?? {},
              m = { ...(f ? h : b) };
            if (m && m.headers)
              for (const y in m.headers)
                Array.isArray(m.headers[y]) && (m.headers[y] = m.headers[y].join(","));
            return m;
          },
          l = (d) => {
            const v = u(d);
            return (0, n.withRateLimiter)(
              v,
              a,
              i,
              `${d} invocation calls are rate limited at ${a}/${o}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(Wi)),
    Wi
  );
}
var Ru;
function Xb() {
  if (Ru) return On;
  ((Ru = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.invokeRemote = void 0));
  const e = Rv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((On.invokeRemote = t), On);
}
var Sn = {},
  Au;
function Zb() {
  if (Au) return Sn;
  ((Au = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.invokeService = void 0));
  const e = Rv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((Sn.invokeService = t), Sn);
}
var Iu;
function Qb() {
  return (
    Iu ||
      ((Iu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = He;
        (t.__exportStar(Xb(), e), t.__exportStar(Zb(), e));
      })(Hi)),
    Hi
  );
}
var Ki = {},
  En = {},
  xn = {},
  ju;
function em() {
  if (ju) return xn;
  ((ju = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.submit = void 0));
  const e = fe(),
    t = Se(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((xn.submit = n), xn);
}
var Cn = {},
  Tu;
function tm() {
  if (Tu) return Cn;
  ((Tu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.close = void 0));
  const e = fe(),
    t = Se(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        if ((await r("close", a)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((Cn.close = n), Cn);
}
var Pn = {},
  Du;
function rm() {
  if (Du) return Pn;
  ((Du = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.open = void 0));
  const e = fe(),
    t = Se(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Pn.open = n), Pn);
}
var Rn = {},
  Mu;
function nm() {
  if (Mu) return Rn;
  ((Mu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.refresh = void 0));
  const e = fe(),
    t = Se(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Rn.refresh = n), Rn);
}
var An = {},
  Fu;
function am() {
  if (Fu) return An;
  ((Fu = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.createHistory = void 0));
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
  return ((An.createHistory = r), An);
}
var In = {},
  Ji = {},
  Vt = {},
  Bu;
function Av() {
  return (
    Bu ||
      ((Bu = 1),
      Object.defineProperty(Vt, "__esModule", { value: !0 }),
      (Vt.FORGE_SUPPORTED_LOCALE_CODES =
        Vt.I18N_BUNDLE_FOLDER_NAME =
        Vt.I18N_INFO_FILE_NAME =
          void 0),
      (Vt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Vt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Vt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Vt
  );
}
var vr = {},
  Nu;
function om() {
  if (Nu) return vr;
  ((Nu = 1),
    Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.TranslationsGetter = vr.TranslationGetterError = void 0));
  const e = (n, a) => {
    n.includes(a) || n.push(a);
  };
  class t extends Error {
    constructor(a) {
      (super(a), (this.name = "TranslationGetterError"));
    }
  }
  vr.TranslationGetterError = t;
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
  return ((vr.TranslationsGetter = r), vr);
}
var jn = {},
  Yi = {},
  Lu;
function Iv() {
  return (
    Lu ||
      ((Lu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = He.__importDefault(qb()),
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
      })(Yi)),
    Yi
  );
}
var Uu;
function im() {
  if (Uu) return jn;
  ((Uu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.Translator = void 0));
  const e = Iv();
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
  return ((jn.Translator = t), jn);
}
var Tn = {},
  qu;
function sm() {
  if (qu) return Tn;
  ((qu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.ensureLocale = void 0));
  const e = Av(),
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
  return ((Tn.ensureLocale = a), Tn);
}
var Xi = {},
  $u;
function cm() {
  return (
    $u ||
      (($u = 1),
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
              d = (v, p) =>
                !t(v) || l.has(v)
                  ? []
                  : (l.add(v),
                    Object.entries(v).flatMap(([g, f]) => {
                      const h = [...p, g];
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
              !n(l) && !a(l) && d && Array.isArray(d) && d.length > 0 ? d.map((v) => [v, l]) : [],
            );
        e.getI18nSupportedModuleEntries = i;
        const s = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const v = o(d[0]);
            for (const { key: p } of v) l.add(p);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = s;
        const c = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const v = o(d[0]);
            for (const p of v) l.push({ moduleName: d[1], ...p });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = c;
      })(Xi)),
    Xi
  );
}
var Zi = {},
  zu;
function um() {
  return (zu || ((zu = 1), Object.defineProperty(Zi, "__esModule", { value: !0 })), Zi);
}
var Vu;
function jv() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = He;
        (t.__exportStar(Av(), e),
          t.__exportStar(om(), e),
          t.__exportStar(im(), e),
          t.__exportStar(sm(), e));
        var r = Iv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = cm();
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
          t.__exportStar(um(), e));
      })(Ji)),
    Ji
  );
}
var Gu;
function lm() {
  if (Gu) return In;
  ((Gu = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.getContext = void 0));
  const e = fe(),
    t = jv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((In.getContext = n), In);
}
var Dn = {},
  Hu;
function dm() {
  if (Hu) return Dn;
  ((Hu = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn.changeWindowTitle = void 0));
  const e = fe(),
    t = Se(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Dn.changeWindowTitle = n), Dn);
}
var Mn = {},
  Wu;
function fm() {
  if (Wu) return Mn;
  ((Wu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.theme = void 0));
  const t = (0, fe().getCallBridge)();
  return ((Mn.theme = { enable: () => t("enableTheming") }), Mn);
}
var Fn = {},
  Bn = {},
  Qi = {},
  hr = {},
  Ku;
function Tv() {
  if (Ku) return hr;
  ((Ku = 1),
    Object.defineProperty(hr, "__esModule", { value: !0 }),
    (hr.blobToBase64 = hr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const a = r.includes(";base64") ? r.split(",")[1] : r,
      o = atob(a),
      i = new Array(o.length);
    for (let c = 0; c < o.length; c++) i[c] = o.charCodeAt(c);
    const s = new Uint8Array(i);
    return new Blob([s], { type: n });
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
var Ju;
function pm() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Tv(),
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
                Object.entries(u).map(async ([d, v]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(v),
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
            for (const [d, v] of Object.entries(u)) l[d] = (0, e.deserialiseBlobsInPayload)(v);
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
      })(Qi)),
    Qi
  );
}
var Yu;
function Dv() {
  if (Yu) return Bn;
  ((Yu = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.events = void 0));
  const e = fe(),
    t = pm(),
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
  return ((Bn.events = { emit: a, on: o, emitPublic: i, onPublic: s }), Bn);
}
var Xu;
function vm() {
  if (Xu) return Fn;
  ((Xu = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.emitReadyEvent = void 0));
  const e = Dv(),
    t = Nv(),
    n = (0, fe().getCallBridge)(),
    a = "EXTENSION_READY",
    o = async () => {
      const i = await t.view.getContext();
      await e.events.emit(a, { localId: i.localId });
      try {
        await n("emitReadyEvent");
      } catch {}
    };
  return ((Fn.emitReadyEvent = o), Fn);
}
const hm = "modulepreload",
  gm = function (e, t) {
    return new URL(e, t).href;
  },
  Zu = {},
  Je = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      let u = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      const i = document.getElementsByTagName("link"),
        s = document.querySelector("meta[property=csp-nonce]"),
        c = s?.nonce || s?.getAttribute("nonce");
      a = u(
        r.map((l) => {
          if (((l = gm(l, n)), l in Zu)) return;
          Zu[l] = !0;
          const d = l.endsWith(".css"),
            v = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let g = i.length - 1; g >= 0; g--) {
              const f = i[g];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${v}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = d ? "stylesheet" : hm),
            d || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = l),
            c && p.setAttribute("nonce", c),
            document.head.appendChild(p),
            d)
          )
            return new Promise((g, f) => {
              (p.addEventListener("load", g),
                p.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`))));
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
var Nn = {},
  es = {},
  Ln = {},
  vo = {},
  Qu;
function Mv() {
  if (Qu) return vo;
  ((Qu = 1), Object.defineProperty(vo, "__esModule", { value: !0 }), (vo.default = r));
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
  return vo;
}
var Br = {},
  Un = {},
  qn = {},
  el;
function bm() {
  if (el) return qn;
  ((el = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((qn.default = e), qn);
}
var tl;
function li() {
  if (tl) return Un;
  ((tl = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.default = void 0));
  var e = t(bm());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return ((Un.default = n), Un);
}
var rl;
function di() {
  if (rl) return Br;
  ((rl = 1),
    Object.defineProperty(Br, "__esModule", { value: !0 }),
    (Br.default = void 0),
    (Br.unsafeStringify = n));
  var e = t(li());
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
  return ((Br.default = o), Br);
}
var nl;
function mm() {
  if (nl) return Ln;
  ((nl = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.default = void 0));
  var e = r(Mv()),
    t = di();
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  let n,
    a,
    o = 0,
    i = 0;
  function s(u, l, d) {
    let v = (l && d) || 0;
    const p = l || new Array(16);
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
    ((p[v++] = (y >>> 24) & 255),
      (p[v++] = (y >>> 16) & 255),
      (p[v++] = (y >>> 8) & 255),
      (p[v++] = y & 255));
    const k = ((h / 4294967296) * 1e4) & 268435455;
    ((p[v++] = (k >>> 8) & 255),
      (p[v++] = k & 255),
      (p[v++] = ((k >>> 24) & 15) | 16),
      (p[v++] = (k >>> 16) & 255),
      (p[v++] = (f >>> 8) | 128),
      (p[v++] = f & 255));
    for (let w = 0; w < 6; ++w) p[v + w] = g[w];
    return l || (0, t.unsafeStringify)(p);
  }
  var c = s;
  return ((Ln.default = c), Ln);
}
var $n = {},
  rr = {},
  zn = {},
  al;
function Fv() {
  if (al) return zn;
  ((al = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = t(li());
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
  return ((zn.default = n), zn);
}
var ol;
function Bv() {
  if (ol) return rr;
  ((ol = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.URL = rr.DNS = void 0),
    (rr.default = i));
  var e = di(),
    t = r(Fv());
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
  rr.DNS = a;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  rr.URL = o;
  function i(s, c, u) {
    function l(d, v, p, g) {
      var f;
      if (
        (typeof d == "string" && (d = n(d)),
        typeof v == "string" && (v = (0, t.default)(v)),
        ((f = v) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let h = new Uint8Array(16 + d.length);
      if (
        (h.set(v),
        h.set(d, v.length),
        (h = u(h)),
        (h[6] = (h[6] & 15) | c),
        (h[8] = (h[8] & 63) | 128),
        p)
      ) {
        g = g || 0;
        for (let b = 0; b < 16; ++b) p[g + b] = h[b];
        return p;
      }
      return (0, e.unsafeStringify)(h);
    }
    try {
      l.name = s;
    } catch {}
    return ((l.DNS = a), (l.URL = o), l);
  }
  return rr;
}
var Vn = {},
  il;
function ym() {
  if (il) return Vn;
  ((il = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  function e(p) {
    if (typeof p == "string") {
      const g = unescape(encodeURIComponent(p));
      p = new Uint8Array(g.length);
      for (let f = 0; f < g.length; ++f) p[f] = g.charCodeAt(f);
    }
    return t(n(a(p), p.length * 8));
  }
  function t(p) {
    const g = [],
      f = p.length * 32,
      h = "0123456789abcdef";
    for (let b = 0; b < f; b += 8) {
      const m = (p[b >> 5] >>> (b % 32)) & 255,
        y = parseInt(h.charAt((m >>> 4) & 15) + h.charAt(m & 15), 16);
      g.push(y);
    }
    return g;
  }
  function r(p) {
    return (((p + 64) >>> 9) << 4) + 14 + 1;
  }
  function n(p, g) {
    ((p[g >> 5] |= 128 << (g % 32)), (p[r(g) - 1] = g));
    let f = 1732584193,
      h = -271733879,
      b = -1732584194,
      m = 271733878;
    for (let y = 0; y < p.length; y += 16) {
      const k = f,
        w = h,
        O = b,
        E = m;
      ((f = c(f, h, b, m, p[y], 7, -680876936)),
        (m = c(m, f, h, b, p[y + 1], 12, -389564586)),
        (b = c(b, m, f, h, p[y + 2], 17, 606105819)),
        (h = c(h, b, m, f, p[y + 3], 22, -1044525330)),
        (f = c(f, h, b, m, p[y + 4], 7, -176418897)),
        (m = c(m, f, h, b, p[y + 5], 12, 1200080426)),
        (b = c(b, m, f, h, p[y + 6], 17, -1473231341)),
        (h = c(h, b, m, f, p[y + 7], 22, -45705983)),
        (f = c(f, h, b, m, p[y + 8], 7, 1770035416)),
        (m = c(m, f, h, b, p[y + 9], 12, -1958414417)),
        (b = c(b, m, f, h, p[y + 10], 17, -42063)),
        (h = c(h, b, m, f, p[y + 11], 22, -1990404162)),
        (f = c(f, h, b, m, p[y + 12], 7, 1804603682)),
        (m = c(m, f, h, b, p[y + 13], 12, -40341101)),
        (b = c(b, m, f, h, p[y + 14], 17, -1502002290)),
        (h = c(h, b, m, f, p[y + 15], 22, 1236535329)),
        (f = u(f, h, b, m, p[y + 1], 5, -165796510)),
        (m = u(m, f, h, b, p[y + 6], 9, -1069501632)),
        (b = u(b, m, f, h, p[y + 11], 14, 643717713)),
        (h = u(h, b, m, f, p[y], 20, -373897302)),
        (f = u(f, h, b, m, p[y + 5], 5, -701558691)),
        (m = u(m, f, h, b, p[y + 10], 9, 38016083)),
        (b = u(b, m, f, h, p[y + 15], 14, -660478335)),
        (h = u(h, b, m, f, p[y + 4], 20, -405537848)),
        (f = u(f, h, b, m, p[y + 9], 5, 568446438)),
        (m = u(m, f, h, b, p[y + 14], 9, -1019803690)),
        (b = u(b, m, f, h, p[y + 3], 14, -187363961)),
        (h = u(h, b, m, f, p[y + 8], 20, 1163531501)),
        (f = u(f, h, b, m, p[y + 13], 5, -1444681467)),
        (m = u(m, f, h, b, p[y + 2], 9, -51403784)),
        (b = u(b, m, f, h, p[y + 7], 14, 1735328473)),
        (h = u(h, b, m, f, p[y + 12], 20, -1926607734)),
        (f = l(f, h, b, m, p[y + 5], 4, -378558)),
        (m = l(m, f, h, b, p[y + 8], 11, -2022574463)),
        (b = l(b, m, f, h, p[y + 11], 16, 1839030562)),
        (h = l(h, b, m, f, p[y + 14], 23, -35309556)),
        (f = l(f, h, b, m, p[y + 1], 4, -1530992060)),
        (m = l(m, f, h, b, p[y + 4], 11, 1272893353)),
        (b = l(b, m, f, h, p[y + 7], 16, -155497632)),
        (h = l(h, b, m, f, p[y + 10], 23, -1094730640)),
        (f = l(f, h, b, m, p[y + 13], 4, 681279174)),
        (m = l(m, f, h, b, p[y], 11, -358537222)),
        (b = l(b, m, f, h, p[y + 3], 16, -722521979)),
        (h = l(h, b, m, f, p[y + 6], 23, 76029189)),
        (f = l(f, h, b, m, p[y + 9], 4, -640364487)),
        (m = l(m, f, h, b, p[y + 12], 11, -421815835)),
        (b = l(b, m, f, h, p[y + 15], 16, 530742520)),
        (h = l(h, b, m, f, p[y + 2], 23, -995338651)),
        (f = d(f, h, b, m, p[y], 6, -198630844)),
        (m = d(m, f, h, b, p[y + 7], 10, 1126891415)),
        (b = d(b, m, f, h, p[y + 14], 15, -1416354905)),
        (h = d(h, b, m, f, p[y + 5], 21, -57434055)),
        (f = d(f, h, b, m, p[y + 12], 6, 1700485571)),
        (m = d(m, f, h, b, p[y + 3], 10, -1894986606)),
        (b = d(b, m, f, h, p[y + 10], 15, -1051523)),
        (h = d(h, b, m, f, p[y + 1], 21, -2054922799)),
        (f = d(f, h, b, m, p[y + 8], 6, 1873313359)),
        (m = d(m, f, h, b, p[y + 15], 10, -30611744)),
        (b = d(b, m, f, h, p[y + 6], 15, -1560198380)),
        (h = d(h, b, m, f, p[y + 13], 21, 1309151649)),
        (f = d(f, h, b, m, p[y + 4], 6, -145523070)),
        (m = d(m, f, h, b, p[y + 11], 10, -1120210379)),
        (b = d(b, m, f, h, p[y + 2], 15, 718787259)),
        (h = d(h, b, m, f, p[y + 9], 21, -343485551)),
        (f = o(f, k)),
        (h = o(h, w)),
        (b = o(b, O)),
        (m = o(m, E)));
    }
    return [f, h, b, m];
  }
  function a(p) {
    if (p.length === 0) return [];
    const g = p.length * 8,
      f = new Uint32Array(r(g));
    for (let h = 0; h < g; h += 8) f[h >> 5] |= (p[h / 8] & 255) << (h % 32);
    return f;
  }
  function o(p, g) {
    const f = (p & 65535) + (g & 65535);
    return (((p >> 16) + (g >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function i(p, g) {
    return (p << g) | (p >>> (32 - g));
  }
  function s(p, g, f, h, b, m) {
    return o(i(o(o(g, p), o(h, m)), b), f);
  }
  function c(p, g, f, h, b, m, y) {
    return s((g & f) | (~g & h), p, g, b, m, y);
  }
  function u(p, g, f, h, b, m, y) {
    return s((g & h) | (f & ~h), p, g, b, m, y);
  }
  function l(p, g, f, h, b, m, y) {
    return s(g ^ f ^ h, p, g, b, m, y);
  }
  function d(p, g, f, h, b, m, y) {
    return s(f ^ (g | ~h), p, g, b, m, y);
  }
  var v = e;
  return ((Vn.default = v), Vn);
}
var sl;
function _m() {
  if (sl) return $n;
  ((sl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = r(Bv()),
    t = r(ym());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return (($n.default = a), $n);
}
var Gn = {},
  Hn = {},
  cl;
function wm() {
  if (cl) return Hn;
  ((cl = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Hn.default = t), Hn);
}
var ul;
function km() {
  if (ul) return Gn;
  ((ul = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e = n(wm()),
    t = n(Mv()),
    r = di();
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
  return ((Gn.default = o), Gn);
}
var Wn = {},
  Kn = {},
  ll;
function Om() {
  if (ll) return Kn;
  ((ll = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
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
      for (let v = 0; v < 16; ++v)
        d[v] =
          (a[l * 64 + v * 4] << 24) |
          (a[l * 64 + v * 4 + 1] << 16) |
          (a[l * 64 + v * 4 + 2] << 8) |
          a[l * 64 + v * 4 + 3];
      u[l] = d;
    }
    ((u[c - 1][14] = ((a.length - 1) * 8) / Math.pow(2, 32)),
      (u[c - 1][14] = Math.floor(u[c - 1][14])),
      (u[c - 1][15] = ((a.length - 1) * 8) & 4294967295));
    for (let l = 0; l < c; ++l) {
      const d = new Uint32Array(80);
      for (let b = 0; b < 16; ++b) d[b] = u[l][b];
      for (let b = 16; b < 80; ++b) d[b] = t(d[b - 3] ^ d[b - 8] ^ d[b - 14] ^ d[b - 16], 1);
      let v = i[0],
        p = i[1],
        g = i[2],
        f = i[3],
        h = i[4];
      for (let b = 0; b < 80; ++b) {
        const m = Math.floor(b / 20),
          y = (t(v, 5) + e(m, p, g, f) + h + o[m] + d[b]) >>> 0;
        ((h = f), (f = g), (g = t(p, 30) >>> 0), (p = v), (v = y));
      }
      ((i[0] = (i[0] + v) >>> 0),
        (i[1] = (i[1] + p) >>> 0),
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
  return ((Kn.default = n), Kn);
}
var dl;
function Sm() {
  if (dl) return Wn;
  ((dl = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.default = void 0));
  var e = r(Bv()),
    t = r(Om());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Wn.default = a), Wn);
}
var Jn = {},
  fl;
function Em() {
  if (fl) return Jn;
  ((fl = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Jn.default = e), Jn);
}
var Yn = {},
  pl;
function xm() {
  if (pl) return Yn;
  ((pl = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
  var e = t(li());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var n = r;
  return ((Yn.default = n), Yn);
}
var vl;
function Cm() {
  return (
    vl ||
      ((vl = 1),
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
        var t = l(mm()),
          r = l(_m()),
          n = l(km()),
          a = l(Sm()),
          o = l(Em()),
          i = l(xm()),
          s = l(li()),
          c = l(di()),
          u = l(Fv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(es)),
    es
  );
}
var hl;
function Pm() {
  if (hl) return Nn;
  ((hl = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn.createAdfRendererIframeProps = void 0));
  const e = Cm(),
    t = async (r, n) => {
      const a = await Je(
          () => import("./index-BCqYYRNo.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = a.default || a,
        i = new URL(document.referrer).origin,
        s = `${i}/forge-apps/adf-renderer`,
        c = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var l, d, v, p, g, f;
          const h = document.getElementById(c),
            b = {
              type: "adf-document",
              document: (l = r.extension.macro) === null || l === void 0 ? void 0 : l.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: r.localId,
              isEditing:
                (v = (d = r.extension) === null || d === void 0 ? void 0 : d.isEditing) !== null &&
                v !== void 0
                  ? v
                  : !1,
              contentId:
                (g = (p = r.extension) === null || p === void 0 ? void 0 : p.content) === null ||
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
  return ((Nn.createAdfRendererIframeProps = t), Nn);
}
var Xn = {},
  gl;
function Rm() {
  if (gl) return Xn;
  ((gl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.onClose = void 0));
  const e = fe(),
    t = Se(),
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
  return ((Xn.onClose = n), Xn);
}
var bl;
function Nv() {
  if (bl) return En;
  ((bl = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.view = void 0));
  const e = em(),
    t = tm(),
    r = rm(),
    n = nm(),
    a = am(),
    o = lm(),
    i = dm(),
    s = fm(),
    c = vm(),
    u = Pm(),
    l = Rm();
  return (
    (En.view = {
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
    En
  );
}
var ml;
function fi() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), He.__exportStar(Nv(), e));
      })(Ki)),
    Ki
  );
}
var ts = {},
  Zn = {},
  yl;
function Am() {
  if (yl) return Zn;
  ((yl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.router = void 0));
  const t = (0, fe().getCallBridge)(),
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
  return ((Zn.router = { getUrl: r, navigate: n, open: a, reload: o }), Zn);
}
var _l;
function Im() {
  return (
    _l ||
      ((_l = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), He.__exportStar(Am(), e));
      })(ts)),
    ts
  );
}
var rs = {},
  Qn = {},
  wl;
function jm() {
  if (wl) return Qn;
  ((wl = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.Modal = void 0));
  const e = fe(),
    t = Se(),
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
  return ((Qn.Modal = a), Qn);
}
var kl;
function Tm() {
  return (
    kl ||
      ((kl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), He.__exportStar(jm(), e));
      })(rs)),
    rs
  );
}
var gt = {},
  gr = {},
  Ol;
function Dm() {
  if (Ol) return gr;
  ((Ol = 1),
    Object.defineProperty(gr, "__esModule", { value: !0 }),
    (gr.productFetchApi = gr.remoteFetchApi = void 0));
  const e = Tv(),
    t = async (i, s = !1) => {
      const c = {};
      for (const [u, l] of i.entries())
        if (s ? u.startsWith("file") : u === "file") {
          const v = l.name,
            p = l.type;
          ((c[u] = await (0, e.blobToBase64)(l)), (c[`__${u}Name`] = v), (c[`__${u}Type`] = p));
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
          { body: d, headers: v, isMultipartFormData: p } = await n("remote", l),
          g = {
            remoteKey: c,
            fetchRequestInit: { ...l, body: d, headers: [...v.entries()] },
            isMultipartFormData: p,
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
  gr.remoteFetchApi = a;
  const o = (i) => {
    const s = async (c, u, l) => {
      const d = r(l),
        { body: v, headers: p, isMultipartFormData: g } = await n("product", d);
      p.has("X-Atlassian-Token") || p.set("X-Atlassian-Token", "no-check");
      const f = {
          product: c,
          restPath: u,
          fetchRequestInit: { ...d, body: v, headers: [...p.entries()] },
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
  return ((gr.productFetchApi = o), gr);
}
var Sl;
function Mm() {
  if (Sl) return gt;
  Sl = 1;
  var e;
  (Object.defineProperty(gt, "__esModule", { value: !0 }),
    (gt.requestRemote = gt.requestBitbucket = gt.requestJira = gt.requestConfluence = void 0));
  const t = fe(),
    r = Dm();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (gt.requestConfluence = e.requestConfluence),
    (gt.requestJira = e.requestJira),
    (gt.requestBitbucket = e.requestBitbucket),
    (gt.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    gt
  );
}
var ns = {},
  ea = {},
  El;
function Fm() {
  if (El) return ea;
  ((El = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.showFlag = void 0));
  const e = fe(),
    t = Se(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((ea.showFlag = n), ea);
}
var xl;
function Bm() {
  return (
    xl ||
      ((xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = Fm();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(ns)),
    ns
  );
}
var as = {},
  Cl;
function Nm() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), He.__exportStar(Dv(), e));
      })(as)),
    as
  );
}
var os = {},
  ta = {},
  Pl;
function Lm() {
  if (Pl) return ta;
  ((Pl = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.realtime = void 0));
  const t = (0, fe().getCallBridge)(),
    r = (i, s, c) => t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c }),
    n = (i, s, c) => t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c }),
    a = (i, s, c) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: s, options: c, isGlobal: !0 }),
    o = (i, s, c) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: s, options: c, isGlobal: !0 });
  return ((ta.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), ta);
}
var is = {},
  Rl;
function Um() {
  return (
    Rl ||
      ((Rl = 1),
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
      })(is)),
    is
  );
}
var Al;
function qm() {
  return (
    Al ||
      ((Al = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = Lm();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = Um();
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
      })(os)),
    os
  );
}
var ss = {},
  ra = {},
  cs = {},
  Il;
function $m() {
  return (
    Il ||
      ((Il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = fe(),
          r = Se(),
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
      })(cs)),
    cs
  );
}
var na = {},
  jl;
function zm() {
  if (jl) return na;
  ((jl = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.isEnabled = void 0));
  const t = (0, fe().getCallBridge)(),
    r = () => t("isRovoEnabled");
  return ((na.isEnabled = r), na);
}
var Tl;
function Vm() {
  if (Tl) return ra;
  ((Tl = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.rovo = void 0));
  const e = $m(),
    t = zm();
  return ((ra.rovo = { open: e.open, isEnabled: t.isEnabled }), ra);
}
var Dl;
function Gm() {
  return (
    Dl ||
      ((Dl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), He.__exportStar(Vm(), e));
      })(ss)),
    ss
  );
}
var Gt = {},
  Ml;
function Hm() {
  if (Ml) return Gt;
  ((Ml = 1),
    Object.defineProperty(Gt, "__esModule", { value: !0 }),
    (Gt.createTranslationFunction = Gt.getTranslations = Gt.resetTranslationsCache = void 0));
  const e = jv(),
    t = fi(),
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
  Gt.resetTranslationsCache = a;
  const o = async (s = null, c = { fallback: !0 }) => {
    let u = s;
    return (u || (u = (await t.view.getContext()).locale), await n.getTranslations(u, c));
  };
  Gt.getTranslations = o;
  const i = async (s = null) => {
    let c = s;
    c || (c = (await t.view.getContext()).locale);
    const u = new e.Translator(c, n);
    return (
      await u.init(),
      (l, d) => {
        var v, p;
        return (p = (v = u.translate(l)) !== null && v !== void 0 ? v : d) !== null && p !== void 0
          ? p
          : l;
      }
    );
  };
  return ((Gt.createTranslationFunction = i), Gt);
}
var us = {},
  aa = {},
  Fl;
function Wm() {
  if (Fl) return aa;
  ((Fl = 1), Object.defineProperty(aa, "__esModule", { value: !0 }), (aa.permissions = void 0));
  const t = (0, fe().getCallBridge)(),
    r = async (c) => t("__permission__egressGet", c),
    n = async (c) => t("__permission__egressSet", c),
    a = async (c) => t("__permission__egressDeleteDomain", c),
    o = async (c) => t("__permission__egressDeleteGroup", c),
    i = async (c) => t("__permission__remoteGet", c),
    s = async (c) => t("__permission__remoteSet", c);
  return (
    (aa.permissions = {
      egress: { get: r, set: n, deleteDomain: a, deleteGroup: o },
      remote: { get: i, set: s },
    }),
    aa
  );
}
var br = {},
  ls = {},
  ds = {},
  oa = {},
  ia = {},
  Bl;
function Fc() {
  if (Bl) return ia;
  ((Bl = 1), Object.defineProperty(ia, "__esModule", { value: !0 }), (ia.parseUrl = void 0));
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
  return ((ia.parseUrl = e), ia);
}
var fs = {},
  Nl;
function Lv() {
  return (
    Nl ||
      ((Nl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const t = Fc();
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
                v = (0, t.parseUrl)(d);
              v.hostname.startsWith("*")
                ? (c.add(v.hostname.substring(2)), u.push(r(v.hostname)))
                : c.add(v.hostname);
            }),
            [...c].sort().reduce((l, d) => (u.some((v) => v.test(d)) || l.push(d), l), [])
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
                    (v) => v.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
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
      })(fs)),
    fs
  );
}
var Ll;
function Km() {
  if (Ll) return oa;
  ((Ll = 1),
    Object.defineProperty(oa, "__esModule", { value: !0 }),
    (oa.EgressFilteringService = void 0));
  const e = Fc(),
    t = Lv();
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
  return ((oa.EgressFilteringService = r), oa);
}
var Ul;
function Jm() {
  return (
    Ul ||
      ((Ul = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = He;
        (t.__exportStar(Km(), e), t.__exportStar(Fc(), e), t.__exportStar(Lv(), e));
      })(ds)),
    ds
  );
}
var ql;
function Ym() {
  return (
    ql ||
      ((ql = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), He.__exportStar(Jm(), e));
      })(ls)),
    ls
  );
}
var $l;
function Xm() {
  if ($l) return br;
  (($l = 1),
    Object.defineProperty(br, "__esModule", { value: !0 }),
    (br.checkPermissions = br.createPermissionUtils = void 0));
  const e = Ym(),
    t = fi();
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
        const O = w.map(r).filter((I) => I.length > 0);
        if (O.length === 0) return !1;
        const E = new e.EgressFilteringService(O);
        return m === "client" ? E.isValidUrlCSP(y) : E.isValidUrl(y);
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
  br.createPermissionUtils = o;
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
  function v(g) {
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
  async function p(g, f) {
    var h;
    if (!g) return { granted: !1, missing: null };
    if ((v(g), !(!((h = g.scopes) === null || h === void 0) && h.length) && !g.external))
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
  return ((br.checkPermissions = p), br);
}
var zl;
function Zm() {
  return (
    zl ||
      ((zl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = He;
        (t.__exportStar(Wm(), e), t.__exportStar(Xm(), e));
      })(us)),
    us
  );
}
var ps = {},
  vs = {},
  hs = {},
  sa = {},
  ca = {},
  Vl;
function Uv() {
  return (
    Vl ||
      ((Vl = 1),
      Object.defineProperty(ca, "__esModule", { value: !0 }),
      (ca.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (ca.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    ca
  );
}
var Gl;
function pi() {
  if (Gl) return sa;
  ((Gl = 1),
    Object.defineProperty(sa, "__esModule", { value: !0 }),
    (sa.checkRestrictedEnvironment = void 0));
  const e = Se(),
    t = fi(),
    r = Uv(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((sa.checkRestrictedEnvironment = n), sa);
}
var Hl;
function Qm() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = ao(),
          r = Se(),
          n = pi(),
          o = (0, fe().getCallBridge)(),
          i = (l, d) => {
            const v = atob(l),
              p = new Array(v.length);
            for (let f = 0; f < v.length; f++) p[f] = v.charCodeAt(f);
            const g = new Uint8Array(p);
            return new Blob([g], { type: d || "application/octet-stream" });
          },
          s = async (l) => {
            const d = l.size,
              v = await l.arrayBuffer(),
              p = await crypto.subtle.digest("SHA-256", v),
              g = new Uint8Array(p),
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
            const v = d.map((m, y) => {
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
              p = await Promise.all(v.map((m) => s(m))),
              g = await (0, t.invoke)(l, { allObjectMetadata: p });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              v.forEach((m, y) => {
                const k = p[y];
                (f.set(k.checksum, m), h.set(k.checksum, y));
              }),
              Object.entries(g).map(([m, y]) => {
                const { key: k, checksum: w } = y,
                  O = f.get(w),
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
                        index: E,
                        objectType: O.type,
                        objectSize: O.size,
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
        e.createUploadPromises = c;
        const u = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const v = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(v.map((g) => g.promise));
        };
        e.upload = u;
      })(hs)),
    hs
  );
}
var ua = {},
  Wl;
function ey() {
  if (Wl) return ua;
  ((Wl = 1), Object.defineProperty(ua, "__esModule", { value: !0 }), (ua.deleteObjects = void 0));
  const e = ao(),
    t = Se(),
    r = pi(),
    a = (0, fe().getCallBridge)(),
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
  return ((ua.deleteObjects = o), ua);
}
var la = {},
  Kl;
function ty() {
  if (Kl) return la;
  ((Kl = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.download = void 0));
  const e = ao(),
    t = Se(),
    r = pi(),
    a = (0, fe().getCallBridge)(),
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
      const u = Object.entries(c).map(async ([d, v]) => {
        try {
          const p = await fetch(d, { method: "GET" });
          if (!p.ok)
            return {
              success: !1,
              key: v,
              status: p.status,
              error: `Download failed with status ${p.status}`,
            };
          const g = await p.blob();
          return { success: !0, key: v, blob: g, status: p.status };
        } catch (p) {
          return {
            success: !1,
            key: v,
            status: 503,
            error: p instanceof Error ? p.message : "Download failed",
          };
        }
      });
      return await Promise.all(u);
    };
  return ((la.download = o), la);
}
var da = {},
  Jl;
function ry() {
  if (Jl) return da;
  ((Jl = 1), Object.defineProperty(da, "__esModule", { value: !0 }), (da.getMetadata = void 0));
  const e = ao(),
    t = Se(),
    r = pi(),
    a = (0, fe().getCallBridge)(),
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
  return ((da.getMetadata = o), da);
}
var Yl;
function ny() {
  return (
    Yl ||
      ((Yl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = Qm();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = ey(),
          n = ty(),
          a = ry();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(vs)),
    vs
  );
}
var Xl;
function ay() {
  return (
    Xl ||
      ((Xl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = He;
        (t.__exportStar(ny(), e), t.__exportStar(Uv(), e));
      })(ps)),
    ps
  );
}
var gs = {},
  fa = {},
  pa = {},
  Zl;
function oy() {
  if (Zl) return pa;
  ((Zl = 1), Object.defineProperty(pa, "__esModule", { value: !0 }), (pa.Evaluator = void 0));
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
  return ((pa.Evaluator = e), pa);
}
var va = {},
  bs = {},
  Ql;
function qv() {
  return (
    Ql ||
      ((Ql = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = void 0),
          (function (t) {
            t.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(bs)),
    bs
  );
}
var ed;
function iy() {
  if (ed) return va;
  ((ed = 1),
    Object.defineProperty(va, "__esModule", { value: !0 }),
    (va.trackFeatureFlagEvent = void 0));
  const e = fe(),
    t = Se(),
    r = ui(),
    n = qv(),
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
    (va.trackFeatureFlagEvent = (0, r.withRateLimiter)(
      c,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    va
  );
}
var ha = {},
  td;
function sy() {
  if (td) return ha;
  ((td = 1),
    Object.defineProperty(ha, "__esModule", { value: !0 }),
    (ha.initFeatureFlags = void 0));
  const e = fe(),
    t = Se(),
    r = ui(),
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
    (ha.initFeatureFlags = (0, r.withRateLimiter)(
      s,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    ha
  );
}
var rd;
function cy() {
  if (rd) return fa;
  ((rd = 1), Object.defineProperty(fa, "__esModule", { value: !0 }), (fa.FeatureFlags = void 0));
  const e = oy(),
    t = iy(),
    r = sy(),
    n = qv();
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
  return ((fa.FeatureFlags = a), fa);
}
var nd;
function uy() {
  return (
    nd ||
      ((nd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FeatureFlags = void 0));
        var t = cy();
        Object.defineProperty(e, "FeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.FeatureFlags;
          },
        });
      })(gs)),
    gs
  );
}
var ad;
function ly() {
  return (
    ad ||
      ((ad = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = He;
        var r = Jb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(ao(), e),
          t.__exportStar(Qb(), e),
          t.__exportStar(fi(), e),
          t.__exportStar(Im(), e),
          t.__exportStar(Tm(), e),
          t.__exportStar(Mm(), e),
          t.__exportStar(Bm(), e),
          t.__exportStar(Nm(), e),
          t.__exportStar(qm(), e),
          t.__exportStar(Gm(), e),
          (e.i18n = t.__importStar(Hm())),
          t.__exportStar(Zm(), e),
          t.__exportStar(ay(), e),
          t.__exportStar(uy(), e));
      })(zi)),
    zi
  );
}
var Ga = ly();
function Z(e) {
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
var dy = {};
function vi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : dy;
}
var $v = Object.assign,
  $o = Object.getOwnPropertyDescriptor,
  At = Object.defineProperty,
  hi = Object.prototype,
  nc = [];
Object.freeze(nc);
var zv = {};
Object.freeze(zv);
var fy = typeof Proxy < "u",
  py = Object.toString();
function Vv() {
  fy || Z("Proxy not available");
}
function Gv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Xr = function () {};
function _t(e) {
  return typeof e == "function";
}
function Or(e) {
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
function cr(e) {
  if (!gi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === py;
}
function Hv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function bi(e, t, r) {
  At(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Wv(e, t, r) {
  At(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Ar(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return gi(n) && n[r] === !0;
    }
  );
}
function dn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function vy(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Jt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Kv = typeof Object.getOwnPropertySymbols < "u";
function hy(e) {
  var t = Object.keys(e);
  if (!Kv) return t;
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
var mi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Kv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Jv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Zt(e, t) {
  return hi.hasOwnProperty.call(e, t);
}
var gy =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      mi(t).forEach(function (n) {
        r[n] = $o(t, n);
      }),
      r
    );
  };
function Ye(e, t) {
  return !!(e & t);
}
function Xe(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function by(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, yy(n.key), n));
  }
}
function fn(e, t, r) {
  return (t && by(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Zr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = _y(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr() {
  return (
    (Sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Sr.apply(null, arguments)
  );
}
function Yv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ac(e, t));
}
function ac(e, t) {
  return (
    (ac = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ac(e, t)
  );
}
function my(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function yy(e) {
  var t = my(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _y(e, t) {
  if (e) {
    if (typeof e == "string") return od(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? od(e, t)
          : void 0
    );
  }
}
var Rt = Symbol("mobx-stored-annotations");
function It(e) {
  function t(r, n) {
    if (io(n)) return e.decorate_20223_(r, n);
    oo(r, n, e);
  }
  return Object.assign(t, e);
}
function oo(e, t, r) {
  (Zt(e, Rt) || bi(e, Rt, Sr({}, e[Rt])), Cy(r) || (e[Rt][t] = r));
}
function wy(e) {
  return (Zt(e, Rt) || bi(e, Rt, Sr({}, e[Rt])), e[Rt]);
}
function io(e) {
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
        (this.lowestObserverState_ = te.NOT_TRACKING_),
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
        return fh(this);
      }),
      (t.reportChanged = function () {
        (lt(), ph(this), dt());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      fn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ye(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ye(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ye(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
lr.isBeingObservedMask_ = 1;
lr.isPendingUnobservationMask_ = 2;
lr.diffValueMask_ = 4;
var Bc = Ar("Atom", lr);
function Xv(e, t, r) {
  (t === void 0 && (t = Xr), r === void 0 && (r = Xr));
  var n = new lr(e);
  return (t !== Xr && j_(n, t), r !== Xr && mh(n, r), n);
}
function ky(e, t) {
  return Ih(e, t);
}
function Oy(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var zo = { structural: ky, default: Oy };
function Er(e, t, r) {
  return kh(e)
    ? e
    : Array.isArray(e)
      ? le.array(e, { name: r })
      : cr(e)
        ? le.object(e, void 0, { name: r })
        : dn(e)
          ? le.map(e, { name: r })
          : Jt(e)
            ? le.set(e, { name: r })
            : typeof e == "function" && !rn(e) && !Wa(e)
              ? Hv(e)
                ? nn(e)
                : Ha(r, e)
              : e;
}
function Sy(e, t, r) {
  if (e == null || xi(e) || Ei(e) || jr(e) || Pt(e)) return e;
  if (Array.isArray(e)) return le.array(e, { name: r, deep: !1 });
  if (cr(e)) return le.object(e, void 0, { name: r, deep: !1 });
  if (dn(e)) return le.map(e, { name: r, deep: !1 });
  if (Jt(e)) return le.set(e, { name: r, deep: !1 });
}
function yi(e) {
  return e;
}
function Ey(e, t) {
  return Ih(e, t) ? t : e;
}
var xy = "override";
function Cy(e) {
  return e.annotationType_ === xy;
}
function so(e, t) {
  return { annotationType_: e, options_: t, make_: Py, extend_: Ry, decorate_20223_: Ay };
}
function Py(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (rn(r.value)) return 1;
  var o = Zv(e, this, t, r, !1);
  return (At(n, t, o), 2);
}
function Ry(e, t, r, n) {
  var a = Zv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Ay(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, v, p;
      return xr(
        (l = (d = o.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (v = (p = o.options_) == null ? void 0 : p.autoAction) != null ? v : !1,
      );
    };
  if (r == "field")
    return function (c) {
      var u,
        l = c;
      return (
        rn(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var s;
    return (
      rn(e) || (e = i(e)),
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
  Z(
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
function Iy(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Zv(e, t, r, n, a) {
  var o, i, s, c, u, l, d;
  (a === void 0 && (a = A.safeDescriptors), Iy(e, t, r, n));
  var v = n.value;
  if ((o = t.options_) != null && o.bound) {
    var p;
    v = v.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: xr(
      (i = (s = t.options_) == null ? void 0 : s.name) != null ? i : r.toString(),
      v,
      (c = (u = t.options_) == null ? void 0 : u.autoAction) != null ? c : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Qv(e, t) {
  return { annotationType_: e, options_: t, make_: jy, extend_: Ty, decorate_20223_: Dy };
}
function jy(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Zt(e.target_, t) || !Wa(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Wa(r.value)) return 1;
  var o = eh(e, this, t, r, !1, !1);
  return (At(n, t, o), 2);
}
function Ty(e, t, r, n) {
  var a,
    o = eh(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Dy(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Wa(e) || (e = nn(e)),
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
function My(e, t, r, n) {
  (t.annotationType_, n.value);
}
function eh(e, t, r, n, a, o) {
  (o === void 0 && (o = A.safeDescriptors), My(e, t, r, n));
  var i = n.value;
  if ((Wa(i) || (i = nn(i)), a)) {
    var s;
    ((i = i.bind((s = e.proxy_) != null ? s : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Nc(e, t) {
  return { annotationType_: e, options_: t, make_: Fy, extend_: By, decorate_20223_: Ny };
}
function Fy(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function By(e, t, r, n) {
  return (
    Ly(e, this, t, r),
    e.defineComputedProperty_(t, Sr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Ny(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = pn(this)[V],
        i = Sr({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new wt(i)));
    }),
    function () {
      return this[V].getObservablePropValue_(n);
    }
  );
}
function Ly(e, t, r, n) {
  (t.annotationType_, n.get);
}
function _i(e, t) {
  return { annotationType_: e, options_: t, make_: Uy, extend_: qy, decorate_20223_: $y };
}
function Uy(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function qy(e, t, r, n) {
  var a, o;
  return (
    zy(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : Er,
      n,
    )
  );
}
function $y(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(s, c) {
    var u,
      l,
      d = pn(s)[V],
      v = new wr(
        c,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : Er,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, v), o.add(s));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (o.has(this) || i(this, e.get.call(this)), this[V].getObservablePropValue_(a));
      },
      set: function (c) {
        return (o.has(this) || i(this, c), this[V].setObservablePropValue_(a, c));
      },
      init: function (c) {
        return (o.has(this) || i(this, c), c);
      },
    };
}
function zy(e, t, r, n) {
  t.annotationType_;
}
var Vy = "true",
  Gy = th();
function th(e) {
  return { annotationType_: Vy, options_: e, make_: Hy, extend_: Wy, decorate_20223_: Ky };
}
function Hy(e, t, r, n) {
  var a, o;
  if (r.get) return wi.make_(e, t, r, n);
  if (r.set) {
    var i = rn(r.set) ? r.set : xr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (At(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (Hv(r.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? nn.bound : nn;
      return u.make_(e, t, r, n);
    }
    var l = (s = this.options_) != null && s.autoBind ? Ha.bound : Ha;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? le.ref : le;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var v;
    r.value = r.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return d.make_(e, t, r, n);
}
function Wy(e, t, r, n) {
  var a, o;
  if (r.get) return wi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: xr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? le.ref : le;
  return s.extend_(e, t, r, n);
}
function Ky(e, t) {
  Z("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Jy = "observable",
  Yy = "observable.ref",
  Xy = "observable.shallow",
  Zy = "observable.struct",
  rh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(rh);
function ho(e) {
  return e || rh;
}
var oc = _i(Jy),
  Qy = _i(Yy, { enhancer: yi }),
  e_ = _i(Xy, { enhancer: Sy }),
  t_ = _i(Zy, { enhancer: Ey }),
  nh = It(oc);
function go(e) {
  return e.deep === !0 ? Er : e.deep === !1 ? yi : n_(e.defaultDecorator);
}
function r_(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : th(e)) : void 0;
}
function n_(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Er;
}
function ah(e, t, r) {
  if (io(t)) return oc.decorate_20223_(e, t);
  if (Or(t)) {
    oo(e, t, oc);
    return;
  }
  return kh(e)
    ? e
    : cr(e)
      ? le.object(e, t, r)
      : Array.isArray(e)
        ? le.array(e, t)
        : dn(e)
          ? le.map(e, t)
          : Jt(e)
            ? le.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : le.box(e, t);
}
$v(ah, nh);
var a_ = {
    box: function (t, r) {
      var n = ho(r);
      return new wr(t, go(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = ho(r);
      return (A.useProxies === !1 || n.proxy === !1 ? r0 : H_)(t, go(n), n.name);
    },
    map: function (t, r) {
      var n = ho(r);
      return new Eh(t, go(n), n.name);
    },
    set: function (t, r) {
      var n = ho(r);
      return new xh(t, go(n), n.name);
    },
    object: function (t, r, n) {
      return Tr(function () {
        return F_(A.useProxies === !1 || n?.proxy === !1 ? pn({}, n) : z_({}, n), t, r);
      });
    },
    ref: It(Qy),
    shallow: It(e_),
    deep: nh,
    struct: It(t_),
  },
  le = $v(ah, a_),
  oh = "computed",
  o_ = "computed.struct",
  ic = Nc(oh),
  i_ = Nc(o_, { equals: zo.structural }),
  wi = function (t, r) {
    if (io(r)) return ic.decorate_20223_(t, r);
    if (Or(r)) return oo(t, r, ic);
    if (cr(t)) return It(Nc(oh, t));
    var n = cr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new wt(n));
  };
Object.assign(wi, ic);
wi.struct = It(i_);
var id,
  sd,
  Vo = 0,
  s_ = 1,
  c_ =
    (id = (sd = $o(function () {}, "name")) == null ? void 0 : sd.configurable) != null ? id : !1,
  cd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function xr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return u_(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    c_ && ((cd.value = e), At(a, "name", cd)),
    a
  );
}
function u_(e, t, r, n, a) {
  var o = l_(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    d_(o);
  }
}
function l_(e, t, r, n) {
  var a = !1,
    o = 0,
    i = A.trackingDerivation,
    s = !t || !i;
  lt();
  var c = A.allowStateChanges;
  s && (Ir(), (c = ki(!0)));
  var u = Lc(!0),
    l = {
      runAsAction_: s,
      prevDerivation_: i,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: s_++,
      parentActionId_: Vo,
    };
  return ((Vo = l.actionId_), l);
}
function d_(e) {
  (Vo !== e.actionId_ && Z(30),
    (Vo = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Oi(e.prevAllowStateChanges_),
    Ma(e.prevAllowStateReads_),
    dt(),
    e.runAsAction_ && Qt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function f_(e, t) {
  var r = ki(e);
  try {
    return t();
  } finally {
    Oi(r);
  }
}
function ki(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function Oi(e) {
  A.allowStateChanges = e;
}
var wr = (function (e) {
    function t(n, a, o, i, s) {
      var c;
      return (
        o === void 0 && (o = "ObservableValue"),
        s === void 0 && (s = zo.default),
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
    Yv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== A.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (ct(this)) {
          var o = ut(this, { object: this, type: jt, newValue: a });
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
          mt(this) && yt(this, { type: jt, object: this, newValue: a, oldValue: o }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (a) {
        return co(this, a);
      }),
      (r.observe_ = function (a, o) {
        return (
          o &&
            a({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: jt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          uo(this, a)
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
        return Jv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(lr),
  wt = (function () {
    function e(r) {
      ((this.dependenciesState_ = te.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = te.UP_TO_DATE_),
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
        r.get || Z(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = xr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? zo.structural : zo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        b_(this);
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
          (this.isComputing && Z(32, this.name_, this.derivation),
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          sc(this) &&
            (this.warnAboutUntrackedRead_(), lt(), (this.value_ = this.computeValue_(!1)), dt());
        else if ((fh(this), sc(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && g_(this),
            (A.trackingContext = n));
        }
        var a = this.value_;
        if (Io(a)) throw a.cause;
        return a;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && Z(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else Z(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          a = this.dependenciesState_ === te.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || Io(n) || Io(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = ki(!1),
          o;
        if (n) o = ih(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Ho(i);
          }
        return (Oi(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (cc(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          s = void 0;
        return C_(function () {
          var c = o.get();
          if (!i || a) {
            var u = Ir();
            (n({
              observableKind: "computed",
              debugObjectName: o.name_,
              type: jt,
              object: o,
              newValue: c,
              oldValue: s,
            }),
              Qt(u));
          }
          ((i = !1), (s = c));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Jv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      fn(e, [
        {
          key: "isComputing",
          get: function () {
            return Ye(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ye(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ye(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ye(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ye(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Xe(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
wt.isComputingMask_ = 1;
wt.isRunningSetterMask_ = 2;
wt.isBeingObservedMask_ = 4;
wt.isPendingUnobservationMask_ = 8;
wt.diffValueMask_ = 16;
var Si = Ar("ComputedValue", wt),
  te;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(te || (te = {}));
var Go;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Go || (Go = {}));
var Ho = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function Io(e) {
  return e instanceof Ho;
}
function sc(e) {
  switch (e.dependenciesState_) {
    case te.UP_TO_DATE_:
      return !1;
    case te.NOT_TRACKING_:
    case te.STALE_:
      return !0;
    case te.POSSIBLY_STALE_: {
      for (var t = Lc(!0), r = Ir(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Si(i)) {
          if (A.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Qt(r), Ma(t), !0);
            }
          if (e.dependenciesState_ === te.STALE_) return (Qt(r), Ma(t), !0);
        }
      }
      return (ch(e), Qt(r), Ma(t), !1);
    }
  }
}
function ih(e, t, r) {
  var n = Lc(!0);
  (ch(e),
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
  return (A.inBatch--, (A.trackingDerivation = a), p_(e), Ma(n), o);
}
function p_(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = te.UP_TO_DATE_,
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
    (c.diffValue === 0 && lh(c, e), (c.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), h_(u, e));
  }
  n !== te.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function cc(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) lh(t[r], e);
  e.dependenciesState_ = te.NOT_TRACKING_;
}
function sh(e) {
  var t = Ir();
  try {
    return e();
  } finally {
    Qt(t);
  }
}
function Ir() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Qt(e) {
  A.trackingDerivation = e;
}
function Lc(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function Ma(e) {
  A.allowStateReads = e;
}
function ch(e) {
  if (e.dependenciesState_ !== te.UP_TO_DATE_) {
    e.dependenciesState_ = te.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = te.UP_TO_DATE_;
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
  To = !0,
  uh = !1,
  A = (function () {
    var e = vi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (To = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new jo().version && (To = !1),
      To
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new jo()))
        : (setTimeout(function () {
            uh || Z(35);
          }, 1),
          new jo())
    );
  })();
function v_() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && Z(36), (uh = !0), To)) {
    var e = vi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new jo()));
  }
}
function h_(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function lh(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && dh(e));
}
function dh(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function lt() {
  A.inBatch++;
}
function dt() {
  if (--A.inBatch === 0) {
    vh();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof wt && r.suspend_()));
    }
    A.pendingUnobservations = [];
  }
}
function fh(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && dh(e), !1);
}
function ph(e) {
  e.lowestObserverState_ !== te.STALE_ &&
    ((e.lowestObserverState_ = te.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === te.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = te.STALE_));
    }));
}
function g_(e) {
  e.lowestObserverState_ !== te.STALE_ &&
    ((e.lowestObserverState_ = te.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === te.POSSIBLY_STALE_
        ? (t.dependenciesState_ = te.STALE_)
        : t.dependenciesState_ === te.UP_TO_DATE_ && (e.lowestObserverState_ = te.UP_TO_DATE_);
    }));
}
function b_(e) {
  e.lowestObserverState_ === te.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = te.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === te.UP_TO_DATE_ &&
        ((t.dependenciesState_ = te.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Ft = (function () {
  function e(r, n, a, o) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = te.NOT_TRACKING_),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), vh());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (lt(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), sc(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((A.trackingContext = n), dt());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (lt(), (this.isRunning = !0));
        var a = A.trackingContext;
        A.trackingContext = this;
        var o = ih(this, n, void 0);
        ((A.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && cc(this),
          Io(o) && this.reportExceptionInDerivation_(o.cause),
          dt());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (lt(), cc(this), dt()));
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
    fn(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ye(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Xe(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ye(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Xe(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ye(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Xe(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ye(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Xe(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ye(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Xe(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
Ft.isDisposedMask_ = 1;
Ft.isScheduledMask_ = 2;
Ft.isTrackPendingMask_ = 4;
Ft.isRunningMask_ = 8;
Ft.diffValueMask_ = 16;
var m_ = 100,
  uc = function (t) {
    return t();
  };
function vh() {
  A.inBatch > 0 || A.isRunningReactions || uc(y_);
}
function y_() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === m_ && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var Wo = Ar("Reaction", Ft);
function __(e) {
  var t = uc;
  uc = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Fa() {
  return !1;
}
function w_(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var hh = "action",
  k_ = "action.bound",
  gh = "autoAction",
  O_ = "autoAction.bound",
  S_ = "<unnamed action>",
  lc = so(hh),
  E_ = so(k_, { bound: !0 }),
  dc = so(gh, { autoAction: !0 }),
  x_ = so(O_, { autoAction: !0, bound: !0 });
function bh(e) {
  var t = function (n, a) {
    if (_t(n)) return xr(n.name || S_, n, e);
    if (_t(a)) return xr(n, a, e);
    if (io(a)) return (e ? dc : lc).decorate_20223_(n, a);
    if (Or(a)) return oo(n, a, e ? dc : lc);
    if (Or(n)) return It(so(e ? gh : hh, { name: n, autoAction: e }));
  };
  return t;
}
var ft = bh(!1);
Object.assign(ft, lc);
var Ha = bh(!0);
Object.assign(Ha, dc);
ft.bound = It(E_);
Ha.bound = It(x_);
function rn(e) {
  return _t(e) && e.isMobxAction === !0;
}
function C_(e, t) {
  var r, n, a, o;
  t === void 0 && (t = zv);
  var i = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    s = !t.scheduler && !t.delay,
    c;
  if (s)
    c = new Ft(
      i,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = R_(t),
      l = !1;
    c = new Ft(
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
var P_ = function (t) {
  return t();
};
function R_(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : P_;
}
var A_ = "onBO",
  I_ = "onBUO";
function j_(e, t, r) {
  return yh(A_, e, t, r);
}
function mh(e, t, r) {
  return yh(I_, e, t, r);
}
function yh(e, t, r, n) {
  var a = Yo(t),
    o = _t(n) ? n : r,
    i = e + "L";
  return (
    a[i] ? a[i].add(o) : (a[i] = new Set([o])),
    function () {
      var s = a[i];
      s && (s.delete(o), s.size === 0 && delete a[i]);
    }
  );
}
var T_ = "never",
  bo = "always",
  D_ = "observed";
function M_(e) {
  e.isolateGlobalState === !0 && v_();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === bo ? !0 : t === T_ ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === bo ? bo : r === D_;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === bo)));
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
    e.reactionScheduler && __(e.reactionScheduler));
}
function F_(e, t, r, n) {
  var a = gy(t);
  return (
    Tr(function () {
      var o = pn(e, n)[V];
      mi(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function B_(e, t) {
  return _h(Yo(e, t));
}
function _h(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = N_(e.observing_).map(_h)),
    t
  );
}
function N_(e) {
  return Array.from(new Set(e));
}
var L_ = 0;
function wh() {
  this.message = "FLOW_CANCELLED";
}
wh.prototype = Object.create(Error.prototype);
var ms = Qv("flow"),
  U_ = Qv("flow.bound", { bound: !0 }),
  nn = Object.assign(function (t, r) {
    if (io(r)) return ms.decorate_20223_(t, r);
    if (Or(r)) return oo(t, r, ms);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var s = this,
          c = arguments,
          u = ++L_,
          l = ft(a + " - runid: " + u + " - init", n).apply(s, c),
          d,
          v = void 0,
          p = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              v = void 0;
              var w;
              try {
                w = ft(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (O) {
                return f(O);
              }
              y(w);
            }
            function m(k) {
              v = void 0;
              var w;
              try {
                w = ft(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
              } catch (O) {
                return f(O);
              }
              y(w);
            }
            function y(k) {
              if (_t(k?.then)) {
                k.then(y, f);
                return;
              }
              return k.done ? g(k.value) : ((v = Promise.resolve(k.value)), v.then(b, m));
            }
            b(void 0);
          });
        return (
          (p.cancel = ft(a + " - runid: " + u + " - cancel", function () {
            try {
              v && ud(v);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Xr, Xr), ud(f), d(new wh()));
            } catch (h) {
              d(h);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, ms);
nn.bound = It(U_);
function ud(e) {
  _t(e.cancel) && e.cancel();
}
function Wa(e) {
  return e?.isMobXFlow === !0;
}
function q_(e, t) {
  return e ? xi(e) || !!e[V] || Bc(e) || Wo(e) || Si(e) : !1;
}
function kh(e) {
  return q_(e);
}
function Yt(e, t) {
  (t === void 0 && (t = void 0), lt());
  try {
    return e.apply(t);
  } finally {
    dt();
  }
}
function Nr(e) {
  return e[V];
}
var $_ = {
  has: function (t, r) {
    return Nr(t).has_(r);
  },
  get: function (t, r) {
    return Nr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return Or(r) ? ((a = Nr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return Or(r) ? ((n = Nr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = Nr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return Nr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    Z(13);
  },
};
function z_(e, t) {
  var r, n;
  return (
    Vv(),
    (e = pn(e, t)),
    (n = (r = e[V]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, $_))
  );
}
function ct(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function co(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Gv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ut(e, t) {
  var r = Ir();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), a = 0, o = n.length;
      a < o && ((t = n[a](t)), t && !t.type && Z(14), !!t);
      a++
    );
    return t;
  } finally {
    Qt(r);
  }
}
function mt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function uo(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Gv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function yt(e, t) {
  var r = Ir(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Qt(r);
  }
}
function Oh(e, t, r) {
  return (
    Tr(function () {
      var n,
        a = pn(e, r)[V];
      ((n = t) != null || (t = wy(e)),
        mi(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var ld = "splice",
  jt = "update",
  V_ = 1e4,
  G_ = {
    get: function (t, r) {
      var n = t[V];
      return r === V
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Zt(Ko, r)
              ? Ko[r]
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
      Z(15);
    },
  },
  Uc = (function () {
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
        return co(this, n);
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
          uo(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && Z("Out of range: " + n);
        var a = this.values_.length;
        if (n !== a)
          if (n > a) {
            for (var o = new Array(n - a), i = 0; i < n - a; i++) o[i] = void 0;
            this.spliceWithArray_(a, 0, o);
          } else this.spliceWithArray_(n, a - n);
      }),
      (t.updateArrayLength_ = function (n, a) {
        (n !== this.lastKnownLength_ && Z(16),
          (this.lastKnownLength_ += a),
          this.legacyMode_ && a > 0 && Ah(n + a + 1));
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
          o === void 0 && (o = nc),
          ct(this))
        ) {
          var c = ut(this, { object: this.proxy_, type: ld, index: n, removedCount: a, added: o });
          if (!c) return nc;
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
        if (o.length < V_) {
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
          s = mt(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: jt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: a,
                  oldValue: o,
                }
              : null;
        (this.atom_.reportChanged(), s && yt(this, c));
      }),
      (t.notifyArraySplice_ = function (n, a, o) {
        var i = !this.owned_ && Fa(),
          s = mt(this),
          c =
            s || i
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: ld,
                  index: n,
                  removed: o,
                  added: a,
                  removedCount: o.length,
                  addedCount: a.length,
                }
              : null;
        (this.atom_.reportChanged(), s && yt(this, c));
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
        if ((this.legacyMode_ && n > o.length && Z(17, n, o.length), n < o.length)) {
          this.atom_;
          var i = o[n];
          if (ct(this)) {
            var s = ut(this, { type: jt, object: this.proxy_, index: n, newValue: a });
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
function H_(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Vv(),
    Tr(function () {
      var a = new Uc(r, t, n, !1);
      Wv(a.values_, V, a);
      var o = new Proxy(a.values_, G_);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Ko = {
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
    return (A.trackingDerivation && Z(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && Z(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[V],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
he("at", et);
he("concat", et);
he("flat", et);
he("includes", et);
he("indexOf", et);
he("join", et);
he("lastIndexOf", et);
he("slice", et);
he("toString", et);
he("toLocaleString", et);
he("toSorted", et);
he("toSpliced", et);
he("with", et);
he("every", kt);
he("filter", kt);
he("find", kt);
he("findIndex", kt);
he("findLast", kt);
he("findLastIndex", kt);
he("flatMap", kt);
he("forEach", kt);
he("map", kt);
he("some", kt);
he("toReversed", kt);
he("reduce", Sh);
he("reduceRight", Sh);
function he(e, t) {
  typeof Array.prototype[e] == "function" && (Ko[e] = t(e));
}
function et(e) {
  return function () {
    var t = this[V];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function kt(e) {
  return function (t, r) {
    var n = this,
      a = this[V];
    a.atom_.reportObserved();
    var o = a.dehanceValues_(a.values_);
    return o[e](function (i, s) {
      return t.call(r, i, s, n);
    });
  };
}
function Sh(e) {
  return function () {
    var t = this,
      r = this[V];
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
var W_ = Ar("ObservableArrayAdministration", Uc);
function Ei(e) {
  return gi(e) && W_(e[V]);
}
var K_ = {},
  ir = "add",
  Jo = "delete",
  Eh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Er),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[V] = K_),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        _t(Map) || Z(18),
        Tr(function () {
          ((o.keysAtom_ = Xv("ObservableMap.keys()")),
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
          var i = (o = new wr(this.has_(n), yi, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            mh(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (ct(this)) {
          var i = ut(this, { type: o ? jt : ir, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, ct(this))) {
          var o = ut(this, { type: Jo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Fa(),
            s = mt(this),
            c =
              s || i
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
            Yt(function () {
              var u;
              (a.keysAtom_.reportChanged(), (u = a.hasMap_.get(n)) == null || u.setNewValue_(!1));
              var l = a.data_.get(n);
              (l.setNewValue_(void 0), a.data_.delete(n));
            }),
            s && yt(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, a) {
        var o = this.data_.get(n);
        if (((a = o.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var i = Fa(),
            s = mt(this),
            c =
              s || i
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: jt,
                    object: this,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), s && yt(this, c));
        }
      }),
      (t.addValue_ = function (n, a) {
        var o = this;
        (this.keysAtom_,
          Yt(function () {
            var u,
              l = new wr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = Fa(),
          s = mt(this),
          c =
            s || i
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: ir,
                  object: this,
                  name: n,
                  newValue: a,
                }
              : null;
        s && yt(this, c);
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
        return dd({
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
        return dd({
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
        for (var o = Zr(this), i; !(i = o()).done; ) {
          var s = i.value,
            c = s[0],
            u = s[1];
          n.call(a, u, c, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          jr(n) && (n = new Map(n)),
          Yt(function () {
            cr(n)
              ? hy(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      s = o[1];
                    return a.set(i, s);
                  })
                : dn(n)
                  ? (vy(n) || Z(19, n),
                    n.forEach(function (o, i) {
                      return a.set(i, o);
                    }))
                  : n != null && Z(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Yt(function () {
          sh(function () {
            for (var a = Zr(n.keys()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Yt(function () {
            for (
              var o = J_(n), i = new Map(), s = !1, c = Zr(a.data_.keys()), u;
              !(u = c()).done;
            ) {
              var l = u.value;
              if (!o.has(l)) {
                var d = a.delete(l);
                if (d) s = !0;
                else {
                  var v = a.data_.get(l);
                  i.set(l, v);
                }
              }
            }
            for (var p = Zr(o.entries()), g; !(g = p()).done; ) {
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
                for (var k = a.data_.keys(), w = i.keys(), O = k.next(), E = w.next(); !O.done; ) {
                  if (O.value !== E.value) {
                    a.keysAtom_.reportChanged();
                    break;
                  }
                  ((O = k.next()), (E = w.next()));
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
        return uo(this, n);
      }),
      (t.intercept_ = function (n) {
        return co(this, n);
      }),
      fn(e, [
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
  jr = Ar("ObservableMap", Eh);
function dd(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), $c(e));
}
function J_(e) {
  if (dn(e) || jr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (cr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return Z(21, e);
}
var Y_ = {},
  xh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = Er),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[V] = Y_),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = a),
        _t(Set) || Z(22),
        (this.enhancer_ = function (i, s) {
          return n(i, s, a);
        }),
        Tr(function () {
          ((o.atom_ = Xv(o.name_)), r && o.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Yt(function () {
          sh(function () {
            for (var a = Zr(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = Zr(this), i; !(i = o()).done; ) {
          var s = i.value;
          n.call(a, s, s, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, ct(this))) {
          var o = ut(this, { type: ir, object: this, newValue: n });
          if (!o) return this;
          n = o.newValue;
        }
        if (!this.has(n)) {
          Yt(function () {
            (a.data_.add(a.enhancer_(n, void 0)), a.atom_.reportChanged());
          });
          var i = !1,
            s = mt(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ir,
                    object: this,
                    newValue: n,
                  }
                : null;
          s && yt(this, c);
        }
        return this;
      }),
      (t.delete = function (n) {
        var a = this;
        if (ct(this)) {
          var o = ut(this, { type: Jo, object: this, oldValue: n });
          if (!o) return !1;
        }
        if (this.has(n)) {
          var i = !1,
            s = mt(this),
            c =
              s || i
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Jo,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Yt(function () {
              (a.atom_.reportChanged(), a.data_.delete(n));
            }),
            s && yt(this, c),
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
        return fd({
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
        return fd({
          next: function () {
            var i = a.next(),
              s = i.value,
              c = i.done;
            return c ? { value: void 0, done: c } : { value: n.dehanceValue_(s), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Jt(n) && !Pt(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Jt(n) && !Pt(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Jt(n) && !Pt(n)) return n.symmetricDifference(this);
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
        if (Jt(n) && !Pt(n)) return n.isDisjointFrom(this);
        var a = new Set(this);
        return a.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var a = this;
        return (
          Pt(n) && (n = new Set(n)),
          Yt(function () {
            Array.isArray(n)
              ? (a.clear(),
                n.forEach(function (o) {
                  return a.add(o);
                }))
              : Jt(n)
                ? (a.clear(),
                  n.forEach(function (o) {
                    return a.add(o);
                  }))
                : n != null && Z("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, a) {
        return uo(this, n);
      }),
      (t.intercept_ = function (n) {
        return co(this, n);
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
      fn(e, [
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
  Pt = Ar("ObservableSet", xh);
function fd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), $c(e));
}
var pd = Object.create(null),
  vd = "remove",
  Ch = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = Gy),
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
        if (o instanceof wt) return (o.set(a), !0);
        if (ct(this)) {
          var i = ut(this, { type: jt, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== A.UNCHANGED)) {
          var s = mt(this),
            c = !1,
            u =
              s || c
                ? {
                    type: jt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: o.value_,
                    name: n,
                    newValue: a,
                  }
                : null;
          (o.setNewValue_(a), s && yt(this, u));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !Zt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Zt(this.target_, n)
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
            ((a = new wr(n in this.target_, yi, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, a)),
          a.get()
        );
      }),
      (t.make_ = function (n, a) {
        if ((a === !0 && (a = this.defaultAnnotation_), a !== !1)) {
          if (!(n in this.target_)) {
            var o;
            if ((o = this.target_[Rt]) != null && o[n]) return;
            Z(1, a.annotationType_, this.name_ + "." + n.toString());
          }
          for (var i = this.target_; i && i !== hi; ) {
            var s = $o(i, n);
            if (s) {
              var c = a.make_(this, n, s, i);
              if (c === 0) return;
              if (c === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          gd(this, a, n);
        }
      }),
      (t.extend_ = function (n, a, o, i) {
        if ((i === void 0 && (i = !1), o === !0 && (o = this.defaultAnnotation_), o === !1))
          return this.defineProperty_(n, a, i);
        var s = o.extend_(this, n, a, i);
        return (s && gd(this, o, n), s);
      }),
      (t.defineProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          lt();
          var i = this.delete_(n);
          if (!i) return i;
          if (ct(this)) {
            var s = ut(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: a.value,
            });
            if (!s) return null;
            var c = s.newValue;
            a.value !== c && (a = Sr({}, a, { value: c }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else At(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          dt();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          lt();
          var s = this.delete_(n);
          if (!s) return s;
          if (ct(this)) {
            var c = ut(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: a,
            });
            if (!c) return null;
            a = c.newValue;
          }
          var u = hd(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else At(this.target_, n, l);
          var d = new wr(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          dt();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          lt();
          var i = this.delete_(n);
          if (!i) return i;
          if (ct(this)) {
            var s = ut(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: ir,
              newValue: void 0,
            });
            if (!s) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var c = hd(n),
            u = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else At(this.target_, n, u);
          (this.values_.set(n, new wt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          dt();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Zt(this.target_, n))) return !0;
        if (ct(this)) {
          var o = ut(this, { object: this.proxy_ || this.target_, name: n, type: vd });
          if (!o) return null;
        }
        try {
          var i;
          lt();
          var s = mt(this),
            c = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (s || c)) {
            var d;
            l = (d = $o(this.target_, n)) == null ? void 0 : d.value;
          }
          if (a) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u && (this.values_.delete(n), u instanceof wr && (l = u.value_), ph(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            s || c)
          ) {
            var v = {
              type: vd,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            s && yt(this, v);
          }
        } finally {
          dt();
        }
        return !0;
      }),
      (t.observe_ = function (n, a) {
        return uo(this, n);
      }),
      (t.intercept_ = function (n) {
        return co(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, a) {
        var o,
          i = mt(this),
          s = !1;
        if (i || s) {
          var c =
            i || s
              ? {
                  type: ir,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: a,
                }
              : null;
          i && yt(this, c);
        }
        ((o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), mi(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function pn(e, t) {
  var r;
  if (Zt(e, V)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new Ch(e, new Map(), String(n), r_(t));
  return (bi(e, V, a), e);
}
var X_ = Ar("ObservableObjectAdministration", Ch);
function hd(e) {
  return (
    pd[e] ||
    (pd[e] = {
      get: function () {
        return this[V].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[V].setObservablePropValue_(e, r);
      },
    })
  );
}
function xi(e) {
  return gi(e) ? X_(e[V]) : !1;
}
function gd(e, t, r) {
  var n;
  (n = e.target_[Rt]) == null || delete n[r];
}
var Z_ = Rh(0),
  Q_ = (function () {
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
  ys = 0,
  Ph = function () {};
function e0(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
e0(Ph, Array.prototype);
var qc = (function (e) {
  function t(n, a, o, i) {
    var s;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (s = e.call(this) || this),
      Tr(function () {
        var c = new Uc(o, a, i, !0);
        ((c.proxy_ = s),
          Wv(s, V, c),
          n && n.length && s.spliceWithArray(0, 0, n),
          Q_ && Object.defineProperty(s, "0", Z_));
      }),
      s
    );
  }
  Yv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[V].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (s) {
          return Ei(s) ? s.slice() : s;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return $c({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    fn(t, [
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
})(Ph);
Object.entries(Ko).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && bi(qc.prototype, t, r);
});
function Rh(e) {
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
function t0(e) {
  At(qc.prototype, "" + e, Rh(e));
}
function Ah(e) {
  if (e > ys) {
    for (var t = ys; t < e + 100; t++) t0(t);
    ys = e;
  }
}
Ah(1e3);
function r0(e, t, r) {
  return new qc(e, t, r);
}
function Yo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ei(e)) return (t !== void 0 && Z(23), e[V].atom_);
    if (Pt(e)) return e.atom_;
    if (jr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || Z(25, t, fc(e)), r);
    }
    if (xi(e)) {
      if (!t) return Z(26);
      var n = e[V].values_.get(t);
      return (n || Z(27, t, fc(e)), n);
    }
    if (Bc(e) || Si(e) || Wo(e)) return e;
  } else if (_t(e) && Wo(e[V])) return e[V];
  Z(28);
}
function n0(e, t) {
  if ((e || Z(29), Bc(e) || Si(e) || Wo(e) || jr(e) || Pt(e))) return e;
  if (e[V]) return e[V];
  Z(24, e);
}
function fc(e, t) {
  var r;
  if (t !== void 0) r = Yo(e, t);
  else {
    if (rn(e)) return e.name;
    xi(e) || jr(e) || Pt(e) ? (r = n0(e)) : (r = Yo(e));
  }
  return r.name_;
}
function Tr(e) {
  var t = Ir(),
    r = ki(!0);
  lt();
  try {
    return e();
  } finally {
    (dt(), Oi(r), Qt(t));
  }
}
var bd = hi.toString;
function Ih(e, t, r) {
  return (r === void 0 && (r = -1), pc(e, t, r));
}
function pc(e, t, r, n, a) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object") return !1;
  var i = bd.call(e);
  if (i !== bd.call(t)) return !1;
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
  ((e = md(e)), (t = md(t)));
  var s = i === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      u = t.constructor;
    if (
      c !== u &&
      !(_t(c) && c instanceof c && _t(u) && u instanceof u) &&
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
    for (; l--; ) if (!pc(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      v = d.length;
    if (Object.keys(t).length !== v) return !1;
    for (var p = 0; p < v; p++) {
      var g = d[p];
      if (!(Zt(t, g) && pc(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function md(e) {
  return Ei(e) ? e.slice() : dn(e) || jr(e) || Jt(e) || Pt(e) ? Array.from(e.entries()) : e;
}
var yd,
  a0 = ((yd = vi().Iterator) == null ? void 0 : yd.prototype) || {};
function $c(e) {
  return ((e[Symbol.iterator] = o0), Object.assign(Object.create(a0), e));
}
function o0() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = vi();
  typeof t[e] > "u" && Z("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: w_, extras: { getDebugName: fc }, $mobx: V });
if (!_.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!Oh) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function i0(e) {
  e();
}
function s0(e) {
  (e || (e = i0), M_({ reactionScheduler: e }));
}
function c0(e) {
  return B_(e);
}
var u0 = 1e4,
  l0 = 1e4,
  d0 = (function () {
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
            (n === void 0 && (n = u0), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, l0));
        },
      }),
      e
    );
  })(),
  f0 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : d0,
  Ka = new f0(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  _s = { exports: {} },
  ws = {};
var _d;
function p0() {
  if (_d) return ws;
  _d = 1;
  var e = Rr();
  function t(d, v) {
    return (d === v && (d !== 0 || 1 / d === 1 / v)) || (d !== d && v !== v);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function s(d, v) {
    var p = v(),
      g = n({ inst: { value: p, getSnapshot: v } }),
      f = g[0].inst,
      h = g[1];
    return (
      o(
        function () {
          ((f.value = p), (f.getSnapshot = v), c(f) && h({ inst: f }));
        },
        [d, p, v],
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
      i(p),
      p
    );
  }
  function c(d) {
    var v = d.getSnapshot;
    d = d.value;
    try {
      var p = v();
      return !r(d, p);
    } catch {
      return !0;
    }
  }
  function u(d, v) {
    return v();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : s;
  return (
    (ws.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    ws
  );
}
var wd;
function v0() {
  return (wd || ((wd = 1), (_s.exports = p0())), _s.exports);
}
var h0 = v0();
function kd(e) {
  e.reaction = new Ft("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function g0(e, t) {
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
          Ka.unregister(n),
          (n.onStoreChange = s),
          n.reaction || (kd(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (kd(a), Ka.register(r, a, a)),
    S.useDebugValue(a.reaction, c0),
    h0.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var ks,
  Os,
  jh = typeof Symbol == "function" && Symbol.for,
  b0 =
    (Os =
      (ks = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || ks === void 0
        ? void 0
        : ks.configurable) !== null && Os !== void 0
      ? Os
      : !1,
  Od = jh
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      _.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Sd = jh
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      _.memo(function (e) {
        return null;
      }).$$typeof;
function m0(e, t) {
  var r;
  if (Sd && e.$$typeof === Sd)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (Od && e.$$typeof === Od && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (s, c) {
    return g0(function () {
      return a(s, c);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    b0 && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = _.forwardRef(i)),
    (i = _.memo(i)),
    _0(e, i),
    i
  );
}
var y0 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function _0(e, t) {
  Object.keys(e).forEach(function (r) {
    y0[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Ss;
s0(si.unstable_batchedUpdates);
Ss = Ka.finalizeAllImmediately;
function w0(e, t) {
  if (Ed(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !Ed(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function Ed(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var xd = Symbol("patchMixins"),
  Th = Symbol("patchedDefinition");
function k0(e, t) {
  var r = (e[xd] = e[xd] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Cd(e, t) {
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
function Pd(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    Cd.call.apply(Cd, [this, e, t].concat(o));
  };
  return r;
}
function O0(e, t, r) {
  var n = k0(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Th])) {
    var o = e[t],
      i = Dh(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function Dh(e, t, r, n, a) {
  var o,
    i = Pd(a, n);
  return (
    (o = {}),
    (o[Th] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (c) {
      if (this === e) i = Pd(c, n);
      else {
        var u = Dh(this, t, r, n, c);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var Rd = Symbol("ObserverAdministration"),
  Ad = Symbol("isMobXReactObserver");
function vc(e) {
  var t;
  return (t = e[Rd]) != null
    ? t
    : (e[Rd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: hc(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function S0(e) {
  var t = e.prototype;
  if (e[Ad]) {
    var r = hc(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Ad] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== _.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Id;
    else if (t.shouldComponentUpdate !== Id)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = hc(e);
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
        value: E0.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        s = vc(this);
      return (
        (s.mounted = !0),
        Ka.unregister(this),
        (s.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    O0(t, "componentWillUnmount", function () {
      var i,
        s = vc(this);
      ((i = s.reaction) == null || i.dispose(),
        (s.reaction = null),
        (s.forceUpdate = null),
        (s.mounted = !1),
        (s.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function hc(e) {
  return e.displayName || e.name || "<component>";
}
function E0(e) {
  var t = e.bind(this),
    r = vc(this);
  function n() {
    r.reaction || ((r.reaction = x0(r)), r.mounted || Ka.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = f_(!1, t);
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
function x0(e) {
  return new Ft(e.name + ".render()", function () {
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
function Id(e, t) {
  return this.state !== t ? !0 : !w0(this.props, e);
}
function Ci(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, e) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, e)
      ? S0(e)
      : m0(e)
  );
}
function gc() {
  return (
    (gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gc.apply(null, arguments)
  );
}
function C0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var P0 = ["children"],
  jd = S.createContext({});
function Mh(e) {
  var t = e.children,
    r = C0(e, P0),
    n = S.useContext(jd),
    a = S.useRef(gc({}, n, r)),
    o = a.current;
  return S.createElement(jd.Provider, { value: o }, t);
}
Mh.displayName = "MobXProvider";
S.version.split(".")[0];
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!le) throw new Error("mobx-react requires mobx to be available");
var R0 = Object.defineProperty,
  A0 = Object.getOwnPropertyDescriptor,
  Te = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? A0(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && R0(t, r, a), a);
  };
const Es = "Loading ...";
class Ae {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = Es),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      Oh(this));
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
    ((this.isLoading = !0), (this.message = t ?? Es));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = Es));
  }
}
Te([le], Ae.prototype, "state", 2);
Te([le], Ae.prototype, "isLoading", 2);
Te([le], Ae.prototype, "message", 2);
Te([le], Ae.prototype, "testData", 2);
Te([le], Ae.prototype, "testDataOptimisticNumber", 2);
Te([le], Ae.prototype, "testDataOptimisticDateId", 2);
Te([le], Ae.prototype, "testDataOptimisticTimeStampId", 2);
Te([le], Ae.prototype, "testNonVersioningData", 2);
Te([le], Ae.prototype, "testNumberVersioningData", 2);
Te([le], Ae.prototype, "testDateVersioningData", 2);
Te([le], Ae.prototype, "testTimestampVersioningData", 2);
Te([ft.bound], Ae.prototype, "saveState", 1);
Te([ft.bound], Ae.prototype, "saveResponse", 1);
Te([ft.bound], Ae.prototype, "saveUpdateResponse", 1);
Te([ft.bound], Ae.prototype, "clearStates", 1);
Te([ft], Ae.prototype, "loading", 1);
Te([ft], Ae.prototype, "stopLoading", 1);
const I0 = new Ae();
class j0 {
  constructor() {
    this.stateStore = I0;
  }
}
const Fh = new j0(),
  T0 = _.createContext(Fh),
  Pi = () => _.useContext(T0);
function be(e, t) {
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
function D0(e, t) {
  if (xe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xe(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Bh(e) {
  var t = D0(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function Td(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Bh(n.key), n));
  }
}
function me(e, t, r) {
  return (
    t && Td(e.prototype, t),
    r && Td(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function M0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tt(e, t) {
  if (t && (xe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return M0(e);
}
function re(e) {
  return (
    (re = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    re(e)
  );
}
function Ja(e, t) {
  return (
    (Ja = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ja(e, t)
  );
}
function rt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ja(e, t));
}
function C(e, t, r) {
  return (
    (t = Bh(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ne() {}
function Nh(e) {
  if (Array.isArray(e)) return e;
}
function F0(e, t) {
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
function bc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zc(e, t) {
  if (e) {
    if (typeof e == "string") return bc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? bc(e, t)
          : void 0
    );
  }
}
function Lh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e, t) {
  return Nh(e) || F0(e, t) || zc(e, t) || Lh();
}
var Uh = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  B0 = function (t) {
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
  Xo = function (t, r) {
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
  N0 = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Dd = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  L0 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var s = Dd(i, n, a),
      c = Dd(o.index, n, a),
      u = r.slice(),
      l = u.splice(s, 1),
      d = H(l, 1),
      v = d[0];
    return (u.splice(c, 0, v), u);
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
function U0(e, t) {
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
    a = U0(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
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
function xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Md(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Md(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var q0 = (function () {
  function e(t) {
    var r = this;
    (be(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = xs({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return me(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          xe(r) === "object" && (this.payload = xs(xs({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function $0(e) {
  if (Array.isArray(e)) return bc(e);
}
function qh(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function z0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Re(e) {
  return $0(e) || qh(e) || zc(e) || z0();
}
function V0(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = re(e)) !== null; );
  return e;
}
function Zo() {
  return (
    (Zo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = V0(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Zo.apply(null, arguments)
  );
}
function G0(e, t, r) {
  return (
    (t = re(t)),
    tt(e, $h() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function $h() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($h = function () {
    return !!e;
  })();
}
function H0(e, t, r, n) {
  var a = Zo(re(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var W0 = (function (e) {
  function t(r) {
    var n;
    return (
      be(this, t),
      (n = G0(this, t, [r])),
      C(n, "_isUIAnalyticsEvent", !0),
      C(n, "clone", function () {
        if (n.hasFired) return null;
        var a = Re(n.context),
          o = Re(n.handlers),
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
    rt(t, e),
    me(t, [
      {
        key: "update",
        value: function (n) {
          return this.hasFired ? this : H0(t, "update", this, 3)([n]);
        },
      },
    ])
  );
})(q0);
function Fd(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i),
      c = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, a);
}
function ee(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, a) {
      var o = e.apply(t, r);
      function i(c) {
        Fd(o, n, a, i, s, "next", c);
      }
      function s(c) {
        Fd(o, n, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var Cs = { exports: {} },
  Ps = { exports: {} },
  Bd;
function zh() {
  return (
    Bd ||
      ((Bd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ps)),
    Ps.exports
  );
}
var Rs = { exports: {} },
  As = { exports: {} },
  Nd;
function Vh() {
  return (
    Nd ||
      ((Nd = 1),
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
              function v(p, g) {
                t(c, p, function (f) {
                  return this._invoke(p, g, f);
                });
              }
              u
                ? i
                  ? i(c, u, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (c[u] = l)
                : (v("next", 0), v("throw", 1), v("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(As)),
    As.exports
  );
}
var Ld;
function Gh() {
  return (
    Ld ||
      ((Ld = 1),
      (function (e) {
        var t = Vh();
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
                (function (O, E, R) {
                  var I,
                    P,
                    j,
                    U = 0,
                    $ = R || [],
                    q = !1,
                    G = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: B,
                      f: B.bind(n, 4),
                      d: function (K, z) {
                        return ((I = K), (P = 0), (j = n), (G.n = z), u);
                      },
                    };
                  function B(W, K) {
                    for (P = W, j = K, a = 0; !q && U && !z && a < $.length; a++) {
                      var z,
                        F = $[a],
                        se = G.p,
                        X = F[2];
                      W > 3
                        ? (z = X === K) &&
                          ((j = F[(P = F[4]) ? 5 : ((P = 3), 3)]), (F[4] = F[5] = n))
                        : F[0] <= se &&
                          ((z = W < 2 && se < F[1])
                            ? ((P = 0), (G.v = K), (G.n = F[1]))
                            : se < X &&
                              (z = W < 3 || F[0] > K || K > X) &&
                              ((F[4] = W), (F[5] = K), (G.n = X), (P = 0)));
                    }
                    if (z || W > 1) return u;
                    throw ((q = !0), K);
                  }
                  return function (W, K, z) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (q && K === 1 && B(K, z), P = K, j = z; (a = P < 2 ? n : j) || !q; ) {
                      I || (P ? (P < 3 ? (P > 1 && (G.n = -1), B(P, j)) : (G.n = j)) : (G.v = j));
                      try {
                        if (((U = 2), I)) {
                          if ((P || (W = "next"), (a = I[W]))) {
                            if (!(a = a.call(I, j)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((j = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = I.return) && a.call(I),
                              P < 2 &&
                                ((j = TypeError(
                                  "The iterator does not provide a '" + W + "' method",
                                )),
                                (P = 1)));
                          I = n;
                        } else if ((a = (q = G.n < 0) ? j : O.call(E, G)) !== u) break;
                      } catch (F) {
                        ((I = n), (P = 1), (j = F));
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
          function v() {}
          a = Object.getPrototypeOf;
          var p = [][i]
              ? a(a([][i]()))
              : (t((a = {}), i, function () {
                  return this;
                }),
                a),
            g = (v.prototype = l.prototype = Object.create(p));
          function f(h) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(h, v)
                : ((h.__proto__ = v), t(h, s, "GeneratorFunction")),
              (h.prototype = Object.create(g)),
              h
            );
          }
          return (
            (d.prototype = v),
            t(g, "constructor", v),
            t(v, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(v, s, "GeneratorFunction"),
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
      })(Rs)),
    Rs.exports
  );
}
var Is = { exports: {} },
  js = { exports: {} },
  Ts = { exports: {} },
  Ud;
function Hh() {
  return (
    Ud ||
      ((Ud = 1),
      (function (e) {
        var t = zh(),
          r = Vh();
        function n(a, o) {
          function i(c, u, l, d) {
            try {
              var v = a[c](u),
                p = v.value;
              return p instanceof t
                ? o.resolve(p.v).then(
                    function (g) {
                      i("next", g, l, d);
                    },
                    function (g) {
                      i("throw", g, l, d);
                    },
                  )
                : o.resolve(p).then(
                    function (g) {
                      ((v.value = g), l(v));
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
                  return new o(function (v, p) {
                    i(c, l, v, p);
                  });
                }
                return (s = s ? s.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ts)),
    Ts.exports
  );
}
var qd;
function Wh() {
  return (
    qd ||
      ((qd = 1),
      (function (e) {
        var t = Gh(),
          r = Hh();
        function n(a, o, i, s, c) {
          return new r(t().w(a, o, i, s), c || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(js)),
    js.exports
  );
}
var $d;
function K0() {
  return (
    $d ||
      (($d = 1),
      (function (e) {
        var t = Wh();
        function r(n, a, o, i, s) {
          var c = t(n, a, o, i, s);
          return c.next().then(function (u) {
            return u.done ? u.value : c.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Is)),
    Is.exports
  );
}
var Ds = { exports: {} },
  zd;
function J0() {
  return (
    zd ||
      ((zd = 1),
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
      })(Ds)),
    Ds.exports
  );
}
var Ms = { exports: {} },
  Fs = { exports: {} },
  Vd;
function Y0() {
  return (
    Vd ||
      ((Vd = 1),
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
      })(Fs)),
    Fs.exports
  );
}
var Gd;
function X0() {
  return (
    Gd ||
      ((Gd = 1),
      (function (e) {
        var t = Y0().default;
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
      })(Ms)),
    Ms.exports
  );
}
var Hd;
function Z0() {
  return (
    Hd ||
      ((Hd = 1),
      (function (e) {
        var t = zh(),
          r = Gh(),
          n = K0(),
          a = Wh(),
          o = Hh(),
          i = J0(),
          s = X0();
        function c() {
          var u = r(),
            l = u.m(c),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function v(f) {
            var h = typeof f == "function" && f.constructor;
            return !!h && (h === d || (h.displayName || h.name) === "GeneratorFunction");
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
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
                    return b(m.a, p[k], w);
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
                isGeneratorFunction: v,
                mark: u.m,
                awrap: function (b, m) {
                  return new t(b, m);
                },
                AsyncIterator: o,
                async: function (b, m, y, k, w) {
                  return (v(m) ? a : n)(g(b), m, y, k, w);
                },
                keys: i,
                values: s,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = c), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Cs)),
    Cs.exports
  );
}
var Bs, Wd;
function Q0() {
  if (Wd) return Bs;
  Wd = 1;
  var e = Z0()();
  Bs = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Bs;
}
var ew = Q0();
const D = ur(ew);
var mr = {},
  Lr = {},
  mo = {},
  ga = {},
  Kd;
function tw() {
  if (Kd) return ga;
  ((Kd = 1),
    Object.defineProperty(ga, "__esModule", { value: !0 }),
    (ga.V1InitializeContainer = void 0));
  const e = Mt();
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
  return ((ga.V1InitializeContainer = t), ga);
}
var ba = {},
  Jd;
function rw() {
  if (Jd) return ba;
  ((Jd = 1),
    Object.defineProperty(ba, "__esModule", { value: !0 }),
    (ba.V2InitializeContainer = void 0));
  const e = Mt();
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
  return ((ba.V2InitializeContainer = t), ba);
}
var Yd;
function nw() {
  if (Yd) return mo;
  ((Yd = 1), Object.defineProperty(mo, "__esModule", { value: !0 }));
  const e = Mt(),
    t = tw(),
    r = rw();
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
          v = Object.assign(Object.assign({}, o), {
            analyticsOnlyMetadata: void 0,
            privateAttributes: void 0,
          });
        (!((u = this._options) === null || u === void 0) &&
          u.disableStableID &&
          ((v = Object.assign(Object.assign({}, v), {
            customIDs: Object.assign(Object.assign({}, v.customIDs), { stableID: void 0 }),
          })),
          (d = Object.assign(Object.assign({}, d), {
            customIDs: Object.assign(Object.assign({}, d.customIDs), { stableID: void 0 }),
          }))),
          (0, e._getFullUserHash)(v) !== (0, e._getFullUserHash)(d) &&
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
  return ((mo.default = n), mo);
}
var Ur = {},
  ma = {},
  Xd;
function aw() {
  if (Xd) return ma;
  ((Xd = 1),
    Object.defineProperty(ma, "__esModule", { value: !0 }),
    (ma._resolveDeltasResponse = void 0));
  const e = Mt(),
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
  ma._resolveDeltasResponse = r;
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
  return ma;
}
var Zd;
function Kh() {
  if (Zd) return Ur;
  Zd = 1;
  var e =
    (Ur && Ur.__awaiter) ||
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
            p(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          try {
            p(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          g.done ? u(g.value) : c(g.value).then(d, v);
        }
        p((s = s.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Ur, "__esModule", { value: !0 });
  const t = Mt(),
    r = aw();
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
        var l, d, v, p, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: c,
          hash:
            (v =
              (d = (l = this._option) === null || l === void 0 ? void 0 : l.networkConfig) ===
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
            ((f =
              (g = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
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
        const v = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof v == "string"
          ? v
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, s), v), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return ((Ur.default = n), Ur);
}
var ya = {},
  Qd;
function ow() {
  if (Qd) return ya;
  ((Qd = 1),
    Object.defineProperty(ya, "__esModule", { value: !0 }),
    (ya._makeParamStoreGetter = void 0));
  const e = Mt(),
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
  function o(l, d, v) {
    return l.getFeatureGate(d.gate_name, r(v) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, v, p) {
    const f = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(f, v) ? v : f;
  }
  function s(l, d, v, p) {
    const f = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(f, v) ? v : f;
  }
  function c(l, d, v, p) {
    const f = l.getLayer(d.layer_name, r(p) ? void 0 : t).get(d.param_name);
    return n(f, v) ? v : f;
  }
  function u(l, d, v) {
    return (p, g) => {
      if (d == null) return g;
      const f = d[p];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return a(f);
        case "gate":
          return o(l, f, v);
        case "dynamic_config":
          return i(l, f, g, v);
        case "experiment":
          return s(l, f, g, v);
        case "layer":
          return c(l, f, g, v);
        default:
          return g;
      }
    };
  }
  return ((ya._makeParamStoreGetter = u), ya);
}
var yr = {},
  ef;
function iw() {
  if (ef) return yr;
  ef = 1;
  var e =
    (yr && yr.__awaiter) ||
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
            p(s.next(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          try {
            p(s.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          g.done ? u(g.value) : c(g.value).then(d, v);
        }
        p((s = s.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(yr, "__esModule", { value: !0 }),
    (yr.StatsigEvaluationsDataAdapter = void 0));
  const t = Mt(),
    r = Kh();
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
  return ((yr.StatsigEvaluationsDataAdapter = n), yr);
}
var tf;
function sw() {
  if (tf) return Lr;
  tf = 1;
  var e =
    (Lr && Lr.__awaiter) ||
    function (s, c, u, l) {
      function d(v) {
        return v instanceof u
          ? v
          : new u(function (p) {
              p(v);
            });
      }
      return new (u || (u = Promise))(function (v, p) {
        function g(b) {
          try {
            h(l.next(b));
          } catch (m) {
            p(m);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (m) {
            p(m);
          }
        }
        function h(b) {
          b.done ? v(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(s, c || [])).next());
      });
    };
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  const t = Mt(),
    r = nw(),
    n = Kh(),
    a = ow(),
    o = iw();
  let i = class mc extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof mc
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new mc(c ?? "", {}));
    }
    constructor(c, u, l = null) {
      var d, v;
      t.SDKType._setClientType(c, "javascript-client");
      const p = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        c,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        p,
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
        (this._network = p),
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
      const g = (v = l?.plugins) !== null && v !== void 0 ? v : [];
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
        const v = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(v, l);
      }
    }
    _updateUserSyncImpl(c, u, l) {
      var d;
      const v = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(c);
      const p = this.dataAdapter.getDataSync(this._user);
      (p == null && v.push("NoCachedValues"),
        this._store.setValues(p, this._user),
        this._finalizeUpdate(p));
      const g = u?.disableBackgroundCacheRefresh;
      return g === !0 || (g == null && p?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            v,
          )
        : (this._runPostUpdate(p ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - l,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            v,
          ));
    }
    updateUserAsync(c, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(c, u);
        } catch (d) {
          const v = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(v, l);
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
        let v = !1;
        (d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (v = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: v })),
          this._finalizeUpdate(d),
          v ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            v,
            this._store.getCurrentSourceDetails(),
          ));
        const p = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          v,
          this._store.getSource(),
          p,
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
      var l, d, v;
      const p = (0, t._normalizeUser)(c, u),
        g = (l = p.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      if (g) {
        const f =
          (v = (d = this.storageProvider).isReadyResolver) === null || v === void 0
            ? void 0
            : v.call(d);
        f
          ? f.then(
              () => t.StableID.setOverride(g, this._sdkKey),
              () => t.StableID.setOverride(g, this._sdkKey),
            )
          : t.StableID.setOverride(g, this._sdkKey);
      }
      return (
        Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
          (p.analyticsOnlyMetadata = Object.assign(
            Object.assign({}, p.analyticsOnlyMetadata),
            this._possibleFirstTouchMetadata,
          )),
        p
      );
    }
    _getFeatureGateImpl(c, u) {
      var l, d;
      const { result: v, details: p } = this._store.getGate(c);
      (this._checkUserHasIdForEvaluation(v?.id_type, c, "Gate"),
        this._checkInitializationStatus(p.reason));
      const g = (0, t._makeFeatureGate)(c, p, v),
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
      const { result: v, details: p } = this._store.getConfig(c);
      (this._checkUserHasIdForEvaluation(v?.id_type, c, "Dynamic config"),
        this._checkInitializationStatus(p.reason));
      const g = (0, t._makeDynamicConfig)(c, p, v),
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
      var l, d, v, p;
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
          (p =
            (v = this.overrideAdapter) === null || v === void 0
              ? void 0
              : v.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(v, h, this._user, u),
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
      var l, d, v;
      const { result: p, details: g } = this._store.getLayer(c),
        f = (0, t._makeLayer)(c, g, p),
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
        (v = h?.__value) !== null && v !== void 0 ? v : f.__value,
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
      const { result: v, details: p } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const g = {
          name: c,
          details: p,
          __configuration: v,
          get: (0, a._makeParamStoreGetter)(this, v, u),
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
  return ((Lr.default = i), Lr);
}
var rf;
function cw() {
  return (
    rf ||
      ((rf = 1),
      (function (e) {
        var t =
            (mr && mr.__createBinding) ||
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
            (mr && mr.__exportStar) ||
            function (i, s) {
              for (var c in i)
                c !== "default" && !Object.prototype.hasOwnProperty.call(s, c) && t(s, i, c);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Mt(),
          a = sw();
        ((e.StatsigClient = a.default), r(Mt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(mr)),
    mr
  );
}
var bt = cw(),
  Ns = { exports: {} },
  nf;
function uw() {
  return (
    nf ||
      ((nf = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function a(c, u, l) {
          ((this.fn = c), (this.context = u), (this.once = l || !1));
        }
        function o(c, u, l, d, v) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var p = new a(l, d || c, v),
            g = r ? r + u : u;
          return (
            c._events[g]
              ? c._events[g].fn
                ? (c._events[g] = [c._events[g], p])
                : c._events[g].push(p)
              : ((c._events[g] = p), c._eventsCount++),
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
            for (var v = 0, p = d.length, g = new Array(p); v < p; v++) g[v] = d[v].fn;
            return g;
          }),
          (s.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (s.prototype.emit = function (u, l, d, v, p, g) {
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
                  return (h.fn.call(h.context, l, d, v), !0);
                case 5:
                  return (h.fn.call(h.context, l, d, v, p), !0);
                case 6:
                  return (h.fn.call(h.context, l, d, v, p, g), !0);
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
                    h[y].fn.call(h[y].context, l, d, v);
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
          (s.prototype.removeListener = function (u, l, d, v) {
            var p = r ? r + u : u;
            if (!this._events[p]) return this;
            if (!l) return (i(this, p), this);
            var g = this._events[p];
            if (g.fn) g.fn === l && (!v || g.once) && (!d || g.context === d) && i(this, p);
            else {
              for (var f = 0, h = [], b = g.length; f < b; f++)
                (g[f].fn !== l || (v && !g[f].once) || (d && g[f].context !== d)) && h.push(g[f]);
              h.length ? (this._events[p] = h.length === 1 ? h[0] : h) : i(this, p);
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
      })(Ns)),
    Ns.exports
  );
}
var lw = uw();
const dw = ur(lw);
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
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? af(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : af(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var yo = "@all-features",
  fw = (function () {
    function e() {
      (be(this, e), C(this, "eventToValue", new Map()), (this.emitter = new dw()));
    }
    return me(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, a, o) {
          var i = this,
            s = a(r, nr(nr({}, o), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, s);
          var c = function () {
            var l = a(r, nr(nr({}, o), {}, { fireGateExposure: !1 })),
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
            l = i(r, n, a, nr(nr({}, s), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(o) === void 0 && this.eventToValue.set(o, l);
          var d = function () {
            var p = i(r, n, a, nr(nr({}, s), {}, { fireExperimentExposure: !1 })),
              g = c.eventToValue.get(o);
            g !== p && (c.eventToValue.set(o, p), o(p));
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
            this.emitter.on(yo, r),
            function () {
              n.emitter.off(yo, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(yo),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== yo;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  pw = "fedramp-moderate";
function vw() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === pw;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Vc = {
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
  ja = { Development: "development", Staging: "staging", Production: "production" },
  Ya = { COMMERCIAL: "commercial", FEDRAMP_MODERATE: "fedramp-moderate" },
  hw = [
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
function of(e, t) {
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
function yc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? of(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : of(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var _o = function (t) {
    return yc({ perimeter: vw() ? Ya.FEDRAMP_MODERATE : Ya.COMMERCIAL }, t);
  },
  _a = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (v, p) {
      var g = H(v, 1),
        f = g[0],
        h = H(p, 1),
        b = h[0];
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
  sf = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  };
function Ba(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (!r.length) return e;
  var a = r.shift();
  if (a == null) return Ba.apply(void 0, [e].concat(Re(r)));
  for (var o = 0, i = Object.entries(a); o < i.length; o++) {
    var s = H(i[o], 2),
      c = s[0],
      u = s[1],
      l = e[c],
      d = u && xe(u) === "object" && !Array.isArray(u),
      v = l && xe(l) === "object" && !Array.isArray(l);
    d && v ? (e[c] = Ba(l, u)) : (e[c] = u);
  }
  return Ba.apply(void 0, [e].concat(Re(r)));
}
var gw = function (t) {
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
    var v = ue(t, hw);
    return yc(
      yc({}, v),
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
  bw = Object.entries(Vc).map(function (e) {
    var t = H(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  Jh = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = bw.find(function (i) {
            var s = H(i, 1),
              c = s[0];
            return o.includes(c);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Vc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  _c = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  cf = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (be(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = o),
        (this._allocatedExperimentName = i),
        (this._evaluationDetails = a),
        (this._onDefaultValueFallback = s));
    }
    return me(
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
                Jh(r.details),
                _c(
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
  uf = (function () {
    function e(t, r, n, a) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (be(this, e),
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
    return me(
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
                Jh(r.details),
                function (l, d) {
                  return r.get(d);
                },
                _c(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                _c(
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
  Qr = "0.0.0-development";
function mw(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Yh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Yh = function () {
    return !!e;
  })();
}
function yw(e, t, r) {
  if (Yh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && Ja(a, r.prototype), a);
}
function wc(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (wc = function (n) {
      if (n === null || !mw(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return yw(n, arguments, re(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Ja(a, n)
      );
    }),
    wc(e)
  );
}
function _w(e, t, r) {
  return (
    (t = re(t)),
    tt(e, Xh() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
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
var lf = (function (e) {
  function t(r) {
    return (be(this, t), _w(this, t, [r]));
  }
  return (rt(t, e), me(t));
})(wc(Error));
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
function ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? df(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : df(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var kw = 5e3,
  Ow = "https://api.atlassian.com/flags",
  Sw = "https://api.stg.atlassian.com/flags",
  Ew = "https://api.dev.atlassian.com/flags",
  xw = "https://api.stg.atlassian-us-gov-mod.com/flags",
  Cw = "https://api.atlassian-us-gov-mod.com/flags",
  Pw = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  Rw = "oasis-stg.com/flags",
  Aw = "atlassian-isolated.net/flags",
  Iw = "/gateway/api/flags",
  Ls = (function () {
    function e() {
      be(this, e);
    }
    return me(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = ee(
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
          var t = ee(
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
          var t = ee(
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
                        new lf(
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
                      throw new lf("Unexpected 204 response");
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
          var t = ee(
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
          if (n) return Iw;
          if (a === Ya.FEDRAMP_MODERATE)
            switch (r) {
              case ja.Production:
                return Cw;
              case ja.Staging:
                return xw;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Ya.COMMERCIAL)
            switch (r) {
              case ja.Development:
                return Ew;
              case ja.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : Sw;
              default:
                var s = this.getApiUrl(o);
                return s !== null ? s : Ow;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = ee(
            D.mark(function n(a, o, i, s) {
              var c, u, l, d, v;
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
                          (u = i.fetchTimeoutMs || kw),
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
                            ww(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Qr,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              s && { body: JSON.stringify(s) },
                            ),
                          )
                        );
                      case 5:
                        return ((v = g.sent), (g.next = 8), this.handleResponseError(v));
                      case 8:
                        return ((g.next = 10), this.extractResponseBody(v));
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
          if (n === void 0) return r ? Pw.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(Rw);
          var s = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return s ? "".concat(a, "//api.").concat(s[1], ".").concat(Aw) : null;
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
function ff(e, t) {
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
function wa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ff(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ff(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jw(e, t, r) {
  return (
    (t = re(t)),
    tt(e, Zh() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
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
function Tw(e, t, r, n) {
  var a = Zo(re(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var Dw = (function (e) {
  function t() {
    var r;
    return (
      be(this, t),
      (r = jw(this, t, ["NoFetchDataAdapter", "nofetch"])),
      C(r, "bootstrapResult", null),
      r
    );
  }
  return (
    rt(t, e),
    me(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: bt.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = ee(
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
          var r = ee(
            D.mark(function a(o, i, s) {
              return D.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            wa(
                              wa({}, this.bootstrapResult),
                              {},
                              { fullUserHash: bt._getFullUserHash(i) },
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
            wa(wa({}, this.bootstrapResult), {}, { fullUserHash: bt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = ee(
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
          var a = bt._getStorageKey(this._getSdkKey(), n);
          return "".concat(bt.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(a);
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
          Tw(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = wa({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(bt.DataAdapterCore);
function pf(e, t) {
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
      ? pf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Mw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Fw(e)) || t) {
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
function Fw(e, t) {
  if (e) {
    if (typeof e == "string") return vf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? vf(e, t)
          : void 0
    );
  }
}
function vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Us = "LocalOverride:Recognized",
  Bw = "STATSIG_OVERRIDES",
  hf = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  qr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  st = function (t, r) {
    return r + ":" + t;
  },
  Nw = (function () {
    function e(t) {
      (be(this, e),
        (this._overrides = qr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return me(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : qr();
          } catch {
            return qr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = qr(), n = arguments.length, a = new Array(n), o = 0; o < n; o++)
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
                v = H(l[u], 2),
                p = v[0],
                g = v[1];
              r.gates[p] = g;
            }
            for (
              var f = 0, h = Object.entries((b = c.configs) !== null && b !== void 0 ? b : {});
              f < h.length;
              f++
            ) {
              var b,
                m = H(h[f], 2),
                y = m[0],
                k = m[1];
              r.configs[y] = k;
            }
            for (
              var w = 0, O = Object.entries((E = c.layers) !== null && E !== void 0 ? E : {});
              w < O.length;
              w++
            ) {
              var E,
                R = H(O[w], 2),
                I = R[0],
                P = R[1];
              r.layers[I] = P;
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
            this.parseStoredOverrides(hf),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(hf);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              s = Mw(i),
              c;
            try {
              for (s.s(); !(c = s.n()).done; ) {
                var u = c.value,
                  l = it._DJB2(u);
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
          var n = qe(qe({}, qr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = H(o[a], 2), s = i[0], c = i[1], u = 0, l = Object.entries(c);
              u < l.length;
              u++
            ) {
              var d = H(l[u], 2),
                v = d[0],
                p = d[1];
              this._djb2Map.set(st(it._DJB2(v), s), p);
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
            this._djb2Map.set(st(it._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(st(it._DJB2(r), "gates")),
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
                : this._djb2Map.get(st(r.name, "gates"));
          return o == null
            ? null
            : qe(qe({}, r), {}, { value: o, details: qe(qe({}, r.details), {}, { reason: Us }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(st(it._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(st(it._DJB2(r), "configs")),
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
            this._djb2Map.set(st(it._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(st(it._DJB2(r), "configs")),
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
            this._djb2Map.set(st(it._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(st(it._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = qr();
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
                : this._djb2Map.get(st(r.name, "layers"));
          return o == null
            ? null
            : qe(
                qe({}, r),
                {},
                {
                  __value: o,
                  get: it._makeTypedGet(r.name, o),
                  details: qe(qe({}, r.details), {}, { reason: Us }),
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
                : this._djb2Map.get(st(r.name, "configs"));
          return o == null
            ? null
            : qe(
                qe({}, r),
                {},
                {
                  value: o,
                  get: it._makeTypedGet(r.name, o),
                  details: qe(qe({}, r.details), {}, { reason: Us }),
                },
              );
        },
      },
    ]);
  })(),
  Lw = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function gf(e, t) {
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
function ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bf = "client-default-key",
  Uw = "https://xp.atlassian.com/v1/rgstr",
  qw = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? Bw : n,
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
        C(this, "subscriptions", new fw()),
        C(this, "dataAdapter", new Dw()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new Nw(a)));
    }
    return me(e, [
      {
        key: "initialize",
        value: (function () {
          var t = ee(
            D.mark(function n(a, o, i) {
              var s = this,
                c,
                u;
              return D.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((c = _o(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          _a(c, this.initOptions) ||
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
                              var v = performance.now(),
                                p = v - u;
                              s.fireClientEvent(u, p, "initialize", s.initCompleted, c.apiKey);
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
          var t = ee(
            D.mark(function n(a, o, i, s) {
              var c = this,
                u,
                l;
              return D.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (((u = _o(a)), !this.initPromise)) {
                          v.next = 4;
                          break;
                        }
                        return (
                          _a(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          v.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = u),
                          (this.provider = o),
                          this.provider.setClientVersion(Qr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, o, i, s)
                            .then(function () {
                              ((c.initCompleted = !0), (c.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                g = p - l;
                              c.fireClientEvent(
                                l,
                                g,
                                "initializeWithProvider",
                                c.initCompleted,
                                o.getApiKey ? o.getApiKey() : void 0,
                              );
                            })),
                          v.abrupt("return", this.initPromise)
                        );
                      case 11:
                      case "end":
                        return v.stop();
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
                var l = ar(
                  {
                    targetApp: s.initOptions.targetApp,
                    clientVersion: Qr,
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
                s.initOptions.environment !== ja.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = ee(
            D.mark(function n(a, o, i) {
              var s = this,
                c,
                u,
                l,
                d = arguments;
              return D.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((c = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = _o(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          _a(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
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
                          p.abrupt("return", this.initPromise)
                        );
                      case 10:
                      case "end":
                        return p.stop();
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
          var t = ee(
            D.mark(function n(a, o, i) {
              var s, c;
              return D.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (s = _o(a)),
                          (c = function () {
                            return Ls.fetchExperimentValues(s, o, i).then(function (v) {
                              var p = v.experimentValues,
                                g = v.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: g };
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
          var t = ee(
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
          var t = ee(
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
          var t = ee(
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
            return cf.fromExperiment(
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
              new cf(r, {}, "", { time: Date.now(), reason: Vc.Error })
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
          return _a(this.currentIdentifiers, r) && _a(this.currentAttributes, n);
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
                v = d === void 0 ? !0 : d;
              v && i.manuallyLogExperimentExposure(r);
              try {
                o(l);
              } catch (p) {
                console.warn(
                  "Error calling callback for experiment ".concat(r, " with value ").concat(l),
                  p,
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
          var t = ee(
            D.mark(function n(a, o, i) {
              var s, c, u, l, d, v, p, g;
              return D.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        if (((s = ar({}, a)), !a.localMode)) {
                          h.next = 5;
                          break;
                        }
                        return ((h.next = 4), this.initFromValues(s, o, i));
                      case 4:
                        return h.abrupt("return");
                      case 5:
                        return (
                          (h.prev = 5),
                          (l = Ls.fetchClientSdk(a).then(function (b) {
                            return (s.sdkKey = b.clientSdkKey);
                          })),
                          (d = Ls.fetchExperimentValues(a, o, i)),
                          (h.next = 10),
                          Promise.all([l, d])
                        );
                      case 10:
                        ((v = h.sent),
                          (p = H(v, 2)),
                          (g = p[1]),
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
          var t = ee(
            D.mark(function n(a, o, i, s) {
              var c, u, l, d, v, p, g, f;
              return D.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (c = ar(ar({}, a), {}, { disableCurrentPageLogging: !0 })),
                          (b.prev = 1),
                          (b.next = 4),
                          o.setProfile(a, i, s)
                        );
                      case 4:
                        return (
                          (d = o.getClientSdkKey().then(function (m) {
                            return (c.sdkKey = m);
                          })),
                          (v = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, v])
                        );
                      case 8:
                        ((p = b.sent),
                          (g = H(p, 2)),
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
          var t = ee(
            D.mark(function n(a, o, i) {
              var s,
                c,
                u,
                l,
                d,
                v,
                p,
                g,
                f = arguments;
              return D.wrap(
                function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (
                          (c = f.length > 3 && f[3] !== void 0 ? f[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = o),
                          (this.currentAttributes = i),
                          (u = gw(a)),
                          u.sdkKey || (u.sdkKey = bf),
                          ((s = u.networkConfig) !== null && s !== void 0 && s.logEventUrl) ||
                            (u.networkConfig = ar(
                              ar({}, u.networkConfig),
                              {},
                              { logEventUrl: Uw },
                            )),
                          u.perimeter === Ya.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (v = ue(u, Lw)),
                          (p = sf(o, i)),
                          (this.user = Ba({}, c.user, p)),
                          (g = ar(
                            ar({}, v),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: bt.LogEventCompressionMode.Forced,
                            },
                          )),
                          o.stableId
                            ? bt.StableID.setOverride(o.stableId, l)
                            : (g.disableStableID = !0),
                          (b.prev = 13),
                          (this.statsigClient = new bt.StatsigClient(l, this.user, g)),
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
                          (this.statsigClient = new bt.StatsigClient(bf, this.user, g)),
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
          var t = ee(
            D.mark(function n(a, o, i) {
              var s = this,
                c,
                u,
                l;
              return D.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.initPromise)) {
                          v.next = 3;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can update the user.",
                        );
                      case 3:
                        if (!this.isCurrentUser(o, i)) {
                          v.next = 5;
                          break;
                        }
                        return v.abrupt("return", this.initPromise);
                      case 5:
                        return (
                          (c = this.initPromise),
                          (v.prev = 6),
                          (v.next = 9),
                          this.initPromise
                        );
                      case 9:
                        v.next = 13;
                        break;
                      case 11:
                        ((v.prev = 11), (v.t0 = v.catch(6)));
                      case 13:
                        return (
                          (u = a()),
                          (l = this.updateStatsigClientUser(u, o, i)),
                          (this.initPromise = l.catch(
                            ee(
                              D.mark(function p() {
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
                                }, p);
                              }),
                            ),
                          )),
                          v.abrupt("return", l)
                        );
                      case 17:
                      case "end":
                        return v.stop();
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
          var t = ee(
            D.mark(function n(a, o, i) {
              var s, c, u, l, d, v, p, g, f, h;
              return D.wrap(
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
                          (d = sf(o, u.customAttributesFromFetch)),
                          (l = Ba({}, u.experimentValues.user, d)),
                          (m.next = 14));
                        break;
                      case 9:
                        throw (
                          (m.prev = 9),
                          (m.t0 = m.catch(1)),
                          (g = m.t0 instanceof Error ? m.t0.message : JSON.stringify(m.t0)),
                          (v = (p = this.initOptions).updateUserCompletionCallback) === null ||
                            v === void 0 ||
                            v.call(p, !1, g),
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
          return Qr;
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
            return uf.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              uf.fromLayer(bt._makeLayer(r, { reason: "Error" }, null))
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
  Y = (function () {
    function e() {
      be(this, e);
    }
    return me(e, null, [
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
C(Y, "client", new qw());
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
var kc = Y;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = Y;
  else {
    var wo, qs;
    kc = window.__FEATUREGATES_JS__;
    var mf =
      ((wo = kc) === null || wo === void 0 || (qs = wo.getPackageVersion) === null || qs === void 0
        ? void 0
        : qs.call(wo)) || "4.10.0 or earlier";
    if (mf !== Qr) {
      var $w = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(mf, " when module version ")
        .concat(Qr, " was loading.");
      console.warn($w);
    }
  }
var $r,
  zr,
  zw =
    (globalThis == null ||
    ($r = globalThis.process) === null ||
    $r === void 0 ||
    ($r = $r.env) === null ||
    $r === void 0
      ? void 0
      : $r.JEST_WORKER_ID) !== void 0,
  Vw =
    !zw &&
    (globalThis == null ||
    (zr = globalThis.process) === null ||
    zr === void 0 ||
    (zr = zr.env) === null ||
    zr === void 0
      ? void 0
      : zr.NODE_ENV) !== "production",
  Gw = function () {
    var t;
    Vw && (t = console).debug.apply(t, arguments);
  },
  Gc = {},
  Hw = "@atlaskit/platform-feature-flags",
  Na = "__PLATFORM_FEATURE_FLAGS__",
  Qh = typeof process < "u" && typeof Gc < "u",
  Ww = Qh ? Gc.ENABLE_PLATFORM_FF === "true" : !1,
  Kw = Qh ? Gc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Jw = Ww || Kw,
  Yw = { booleanResolver: void 0 },
  La = typeof window < "u" ? window : globalThis;
La[Na] = La[Na] || Yw;
function Xw(e) {
  if (Jw)
    return (
      Gw(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Hw,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = La[Na]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = La[Na]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return kc.checkGate(e);
    var a = (n = La[Na]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function J(e) {
  return Xw(e);
}
var Zw = _.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Qw = function () {
    return _.useContext(Zw);
  },
  Qo = function (t) {
    var r = _.useRef(t);
    return ((r.current = t), r);
  };
function e1(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function t1(e, t) {
  var r = _.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = _.useRef(!0),
    a = _.useRef(r),
    o = n.current || !!(t && a.current.inputs && e1(t, a.current.inputs)),
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
function r1(e, t) {
  return t1(function () {
    return e;
  }, t);
}
function eg() {
  var e = Qw(),
    t = r1(
      function (r) {
        return new W0({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
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
function n1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function an(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    s = e.analyticsData,
    c = eg(),
    u = c.createAnalyticsEvent,
    l = Qo(s),
    d = Qo(t),
    v = _.useCallback(
      function (p) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = n1({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(p, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return v;
}
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
function a1(e) {
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
function wf(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    s = eg(),
    c = s.createAnalyticsEvent,
    u = Qo(i),
    l = Qo(t),
    d = _.useCallback(
      function () {
        var v = c({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          p = a1({ componentName: n, packageName: a, packageVersion: o }, u.current);
        v.context.push(p);
        var g = v.clone();
        (g && g.fire("atlaskit"), l.current(v));
      },
      [r, n, a, o, c, u, l],
    );
  return d;
}
var Cr = "ASC",
  ei = "DESC",
  o1 = "small",
  ti = "large",
  tg = 0.22;
const i1 = 5;
function Q(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, i1) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function or(e, t, r) {
  return e ?? "var(--c-, )";
}
var s1 = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  c1 = _.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      s = ue(e, s1);
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
          className: Q([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  u1 = function (t) {
    var r = t.children;
    return _.createElement(
      "caption",
      { className: Q(["_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  l1 = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: Q(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  d1 = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: Q(["_4t3i1jdh"]),
      },
      r,
    );
  },
  f1 = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: Q([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  p1 = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function kf(e, t) {
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
function Of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function v1(e, t, r) {
  return (
    (t = re(t)),
    tt(e, rg() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function rg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rg = function () {
    return !!e;
  })();
}
var Sf = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  h1 = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Cr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      s = Array.from(r);
    return s.sort(function (c, u) {
      var l = Sf(c.cells, t, n),
        d = Sf(u.cells, t, n);
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
function g1(e) {
  var t = (function (r) {
    function n() {
      var a;
      be(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return ((a = v1(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
    }
    return (
      rt(n, r),
      me(
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
                c = ue(o, p1);
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
                v = o.rowsPerPage,
                p = o.isTotalPagesControlledExternally;
              Xo(u, c);
              var g, f;
              return (
                p ? ((g = s), (f = s)) : ((g = h1(c, s, u, l) || []), (f = Uh(g, d, v))),
                Of(Of({}, i), {}, { pageRows: f })
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
var b1 = "--local-dynamic-table-width",
  ng = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, b1, "".concat(r, "%")) : void 0;
  },
  m1 = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  y1 = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = ue(t, m1);
    return _.createElement(
      "td",
      ne(
        {
          style: ng({ width: r }),
          ref: o,
          className: Q([
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
  _1 = ["isHighlighted", "children", "style", "testId", "className"],
  w1 = _.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      s = ue(e, _1);
    return _.createElement(
      "tr",
      ne(
        {
          style: a,
          className: Q([
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
  k1 = ["cells"],
  O1 = ["content", "testId"],
  S1 = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      s = r.cells,
      c = ue(r, k1);
    return S.createElement(
      w1,
      ne(
        {},
        c,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(c.key)) },
      ),
      s.map(function (u, l) {
        var d = u.content,
          v = u.testId,
          p = ue(u, O1),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return S.createElement(
          y1,
          ne({ "data-testid": v || (a && "".concat(a, "--cell-").concat(l)) }, p, {
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
function E1(e, t, r) {
  return (
    (t = re(t)),
    tt(e, ag() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function ag() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ag = function () {
    return !!e;
  })();
}
var x1 = (function (e) {
    function t() {
      return (be(this, t), E1(this, t, arguments));
    }
    return (
      rt(t, e),
      me(t, [
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
                return S.createElement(S1, {
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
  C1 = g1(
    S.forwardRef(function (e, t) {
      return S.createElement(x1, ne({}, e, { forwardedRef: t }));
    }),
  );
function P1(e, t, r) {
  return (
    (t = re(t)),
    tt(e, og() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
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
var R1 = (function (e) {
  function t(r) {
    var n;
    return (be(this, t), (n = P1(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    rt(t, e),
    me(
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
const Hc = _.createContext(null);
var $s = "#0052CC",
  A1 = "#0747A6",
  I1 = "#FFFFFF",
  j1 = "#EBECF0",
  ri = "#42526E",
  T1 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function D1(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ri, ")")
    : "var(--ds-icon-inverse, ".concat(I1, ")");
}
var ko = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  M1 = typeof window > "u" ? _.useEffect : _.useLayoutEffect,
  Wc = S.memo(
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
        v = typeof l == "number" ? l : T1[l],
        p = "".concat(i, "ms"),
        g = D1(a),
        f = _.useContext(Hc);
      return (
        M1(
          function () {
            if (f != null) return f.hold(s);
          },
          [f, s],
        ),
        S.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: v, height: v },
            className: Q([ko.wrapperStyles, ko.rotateStyles]),
          },
          S.createElement(
            "svg",
            {
              height: v,
              width: v,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": c || void 0,
              style: { animationDelay: p },
              role: c ? "img" : "none",
              className: Q([ko.loadInStyles]),
            },
            S.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: Q([ko.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
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
function xf(e) {
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
var Cf = "--contents-opacity",
  F1 = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: Q(["_kqswh2mm"]) },
      r,
    );
  },
  B1 = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: Q(["_tzy47hfw _lcxvglyw"]),
        style: xf(xf({}, C({}, Cf, n)), {}, { "--_cnddr8": or("var(".concat(Cf, ")")) }),
      },
      r,
    );
  },
  N1 = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: Q(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function L1(e, t, r) {
  return (
    (t = re(t)),
    tt(e, ig() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
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
var sg = (function (e) {
  function t() {
    return (be(this, t), L1(this, t, arguments));
  }
  return (
    rt(t, e),
    me(t, [
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
            F1,
            { testId: c },
            o ? S.createElement(B1, { contentsOpacity: s, testId: c }, a) : a,
            o &&
              S.createElement(
                N1,
                { testId: c },
                S.createElement(Wc, {
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
C(sg, "defaultProps", {
  isLoading: !0,
  spinnerSize: ti,
  contentsOpacity: tg,
  loadingLabel: "Loading table",
});
var U1 = ["children", "testId"],
  q1 = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ue(e, U1);
    return _.createElement(
      "div",
      ne({}, a, { "data-testid": n, ref: t, className: Q(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  $1 = function (t) {
    var r = t.children,
      n = t.testId;
    return _.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: Q(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  z1 = _.forwardRef(function (e, t) {
    var r = e.children;
    return _.createElement("div", { ref: t, className: Q(["_kqswh2mm _152tidpf"]) }, r);
  });
function V1(e, t, r) {
  return (
    (t = re(t)),
    tt(e, cg() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
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
var ug = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = V1(this, t, [].concat(a))),
      C(r, "spinnerRef", S.createRef()),
      C(r, "containerRef", S.createRef()),
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
          s = i.targetRef,
          c = s?.();
        return c || r.containerRef.current;
      }),
      C(r, "hasTargetNode", function (i) {
        return !!r.getTargetNode(i);
      }),
      C(r, "isVerticallyVisible", function (i, s) {
        var c = i.top,
          u = i.bottom;
        return u <= 0 ? !1 : c < s;
      }),
      C(r, "isFullyVerticallyVisible", function (i, s) {
        var c = i.top,
          u = i.bottom;
        return c >= 0 && u <= s;
      }),
      C(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      C(r, "translateSpinner", function (i, s, c) {
        ((i.style.position = c ? "fixed" : ""),
          (i.style.transform = s !== 0 ? "translate3d(0, ".concat(s, "px, 0)") : ""));
      }),
      C(r, "updateTargetAppearance", function () {
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
    rt(t, e),
    me(t, [
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
              v = c.top,
              p = c.bottom,
              g = c.height;
            if (d) {
              var f = g >= l * 3;
              if (f && !this.isFullyVerticallyVisible(c, o)) {
                if (v >= 0) {
                  var h = o - v,
                    b = h / 2 + v - l / 2,
                    m = h < l * 3 ? v + l : b;
                  this.translateSpinner(s, m, !0);
                } else if (v < 0 && p > o) {
                  var y = o / 2 - l / 2;
                  this.translateSpinner(s, y, !0);
                } else {
                  var k = p / 2 - l / 2,
                    w = k < l ? k - (l - k) : k;
                  this.translateSpinner(s, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, o)) return;
            var O = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (O && typeof O.getBoundingClientRect == "function") {
              var E = O.getBoundingClientRect().top,
                R = (v - E) / 2;
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
          return S.createElement(
            q1,
            { testId: s && "".concat(s, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              S.createElement(
                $1,
                { testId: s },
                S.createElement(
                  z1,
                  { ref: this.spinnerRef },
                  S.createElement(Wc, {
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
C(ug, "defaultProps", {
  isLoading: !0,
  spinnerSize: ti,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(tg), ")"),
  loadingLabel: "Loading table",
});
function G1(e) {
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
var ka = {},
  H1 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  W1 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  K1 = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  Pf = _.memo(function (t) {
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
      v = s ? { __html: s } : void 0,
      p = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") p = t.size === "small" || t.size === "medium" ? t.size : p;
      else if (d) {
        var g = t.size(d);
        p = g === "small" || g === "medium" ? g : p;
      }
    }
    var f = 16,
      h = K1[p][l],
      b = f + 2 * h;
    return _.createElement(
      "span",
      {
        "data-testid": o,
        role: i ? "img" : void 0,
        "aria-label": i || void 0,
        "aria-hidden": i ? void 0 : !0,
        style: { color: a },
        className: Q([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          c && "_1bsb1kw7 _4t3i1kw7",
          p === "small" && "_vwz4utpp",
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
        dangerouslySetInnerHTML: v,
        className: Q([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          c ? "_1bsb1kw7 _4t3i1kw7" : p === "small" ? W1[l] : H1[l],
        ]),
      }),
    );
  });
const J1 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Pf, default: Pf }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ri = tv(J1);
var Rf;
function Y1() {
  if (Rf) return ka;
  ((Rf = 1), Object.defineProperty(ka, "__esModule", { value: !0 }), (ka.default = void 0));
  var e = r(Rr()),
    t = r(Ri);
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
  return ((n.displayName = "ChevronLeftIcon"), (ka.default = n), ka);
}
var X1 = Y1();
const Z1 = ur(X1);
var Oa = {},
  Af;
function Q1() {
  if (Af) return Oa;
  ((Af = 1), Object.defineProperty(Oa, "__esModule", { value: !0 }), (Oa.default = void 0));
  var e = r(Rr()),
    t = r(Ri);
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
  return ((n.displayName = "ChevronRightIcon"), (Oa.default = n), Oa);
}
var ek = Q1();
const tk = ur(ek);
var Kc = _.createContext("elevation.surface"),
  rk = function () {
    return _.useContext(Kc);
  };
Kc.displayName = "SurfaceProvider";
var nk = [
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
  ak = ["className"],
  ok = {
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
  lg = {
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
  ik = {
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
  sk = {
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
  ck = {
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
  uk = {
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
  Ai = _.forwardRef(function (e, t) {
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
      v = d === void 0 ? c : d,
      p = e.paddingInline,
      g = p === void 0 ? i : p,
      f = e.paddingInlineStart,
      h = f === void 0 ? g : f,
      b = e.paddingInlineEnd,
      m = b === void 0 ? g : b,
      y = e.style,
      k = e.testId,
      w = e.xcss,
      O = ue(e, nk);
    O.className;
    var E = ue(O, ak),
      R = _.createElement(
        n,
        ne(
          {
            style: y,
            ref: t,
            className: Q([
              "_19itglyw _vchhusvi _r06hglyw",
              o && ok[o],
              o && lk(o) && lg[o],
              l && ik[l],
              v && sk[v],
              h && ck[h],
              m && uk[m],
              w,
            ]),
          },
          E,
          { "data-testid": k },
        ),
        a,
      );
    return o ? _.createElement(Kc.Provider, { value: o }, R) : R;
  });
function lk(e) {
  return e in lg;
}
const zs = () =>
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
  dg = (...e) => Q(e);
function dk() {
  return {
    css() {
      throw zs();
    },
    cssMap() {
      throw zs();
    },
    cx: dg,
    XCSSProp() {
      throw zs();
    },
  };
}
var fk = dk(),
  fg = fk.cx,
  pk = [
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
  If = {
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
  jf = {
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
  vk = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  hk = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  gk = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  bk = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  mk = { root: "_1e0c1txw _vchhusvi" },
  ni = _.memo(
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
        v = e.direction,
        p = e.wrap,
        g = e.xcss,
        f = ue(e, pk);
      return _.createElement(
        n,
        ne({}, f, {
          role: a,
          className: Q([
            mk.root,
            s && jf[s],
            c && jf[c],
            s && If[s],
            u && If[u],
            o && bk[o],
            v && hk[v],
            i && vk[i],
            p && gk[p],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ni.displayName = "Flex";
var yk = [
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
  Oc = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  _k = function (t) {
    var r = t.children;
    return _.createElement("span", { className: Q([Oc.separator]) }, r);
  },
  Do = _.memo(
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
        v = e.separator,
        p = e.xcss,
        g = e.testId,
        f = e.role,
        h = e.children,
        b = ue(e, yk),
        m = typeof v == "string" ? _.createElement(_k, null, v) : v,
        y = m
          ? _.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return _.createElement(_.Fragment, { key: w }, v && w > 0 ? m : null, k);
              })
          : h;
      return _.createElement(
        ni,
        ne({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: c || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: s ? "wrap" : void 0,
          xcss: fg(u === "hug" && Oc.hug, u === "fill" && Oc.fill, p),
          testId: g,
          ref: t,
        }),
        y,
      );
    }),
  );
Do.displayName = "Inline";
var wk = "Invariant failed";
function kk(e, t) {
  if (!e) throw new Error(wk);
}
var pg = _.createContext(!1),
  Ok = function () {
    return _.useContext(pg);
  },
  Sk = pg.Provider,
  Ek = ["span", "p", "strong", "em"],
  xk = function (t, r) {
    var n = rk();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Tf.hasOwnProperty(n) ? Tf[n] : "color.text";
    }
  },
  Vr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pwu06",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Ck = { medium: "_11c8fhey", UNSAFE_small: "_11c8rymc", large: "_11c81d4k", small: "_11c8wadc" },
  Pk = { bold: "_k48pwu06", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Rk = {
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
  Tf = {
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
  vg = _.forwardRef(function (e, t) {
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
      v = e.children;
    kk(Ek.includes(n));
    var p = Ok(),
      g = xk(a, p);
    !c && !p && (c = "medium");
    var f = _.createElement(
      n,
      {
        id: s,
        className: Q([
          Vr.root,
          c && Ck[c],
          g && Rk[g],
          l && Vr.truncation,
          l === 1 && Vr.breakAll,
          o && Vr["textAlign.".concat(o)],
          u && Pk[u],
          n === "em" && Vr["as.em"],
          n === "strong" && Vr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      v,
    );
    return p ? f : _.createElement(Sk, { value: !0 }, f);
  });
function Ak() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Ik = ["as", "children", "isInset", "testId", "style", "xcss"],
  jk = ["className"],
  Jc = _.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      s = e.style,
      c = e.xcss,
      u = ue(e, Ik);
    u.className;
    var l = ue(u, jk);
    return _.createElement(
      n,
      ne({}, l, {
        ref: t,
        className: Q([
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
  Tk = [
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
  Dk = ["className"],
  Df = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  hg = _.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      s = i === void 0 ? Ne : i,
      c = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      v = e.testId,
      p = e.xcss,
      g = e.tabIndex,
      f = ue(e, Tk),
      h = _.useContext(Hc),
      b = _.useCallback(
        function (k, w) {
          (h && h.tracePress(c, k.timeStamp), s(k, w));
        },
        [s, h, c],
      ),
      m = an({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ue(f, Dk);
    return _.createElement(
      Jc,
      ne({ as: "button", tabIndex: g ?? (Ak() && !n ? 0 : void 0), style: d }, y, {
        type: o,
        onClick: m,
        disabled: n,
        xcss: dg(Df.root, n && Df.disabled, p),
        testId: v,
        ref: t,
      }),
      r,
    );
  }),
  Mk = _.createContext(!1),
  Fk = function () {
    return _.useContext(Mk);
  },
  Bk = _.createContext(!1),
  Nk = function () {
    return _.useContext(Bk);
  },
  Vs = {},
  Sa = {},
  Mf;
function gg() {
  if (Mf) return Sa;
  ((Mf = 1), Object.defineProperty(Sa, "__esModule", { value: !0 }), (Sa.bind = void 0));
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
  return ((Sa.bind = e), Sa);
}
var _r = {},
  Ff;
function Lk() {
  if (Ff) return _r;
  Ff = 1;
  var e =
    (_r && _r.__assign) ||
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
  (Object.defineProperty(_r, "__esModule", { value: !0 }), (_r.bindAll = void 0));
  var t = gg();
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
  return ((_r.bindAll = a), _r);
}
var Bf;
function Uk() {
  return (
    Bf ||
      ((Bf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = gg();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Lk();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Vs)),
    Vs
  );
}
var Dr = Uk(),
  qk = ["light", "dark", "auto"],
  $k = [
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
  zk = {
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
    motion: function () {
      if (J("platform-dst-motion-theme-default")) return "motion";
    },
    UNSAFE_themeOptions: void 0,
  },
  bg = {
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
  Mr = "data-theme",
  Vk = "data-subtree-theme",
  Ii = "data-color-mode",
  mg = "data-contrast-mode",
  ji = "data-custom-theme",
  Gk = "ds",
  Hk = "--".concat(Gk, "-token-not-found");
function Ht(e, t) {
  var r = bg[e];
  r || (r = Hk);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var Wk = ["light", "dark", "spacing", "typography", "shape", "motion"],
  Sc = "UNSAFE_themeOptions",
  yg = function (t) {
    return (
      Wk.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  _g = function (t) {
    return (
      $k.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  wg = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  Kk = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = H(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && wg(i) && (r[o] = i), yg(o) && _g(i) && (r[o] = i), o === Sc))
          try {
            r[Sc] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  Jk = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = H(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && wg(i)) ||
        (o === Sc && xe(i) === "object") ||
        (yg(o) && typeof i == "string" && _g(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(xe(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
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
var Yk = function (t) {
    return (
      qk.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Yc = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(Ii) || "",
      n = t.getAttribute(Mr) || "";
    return Lf(Lf({}, Kk(n)), Yk(r) && { colorMode: r });
  },
  kg = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  Xa = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function ZP(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function Xk(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function QP(e) {
  if (!Xa(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, Xk(e)]
  );
}
function Uf(e) {
  if (!Xa(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function eR(e) {
  if (!Xa(e)) throw new Error("Invalid HEX");
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
function tR(e, t, r) {
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
function qf(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    s = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    c = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * s + 0.0722 * c;
  return u;
}
function rR(e, t) {
  if (!Xa(e) || !Xa(t)) throw new Error("Invalid HEX");
  var r = Uf(e),
    n = Uf(t),
    a = qf(r[0], r[1], r[2]),
    o = qf(n[0], n[1], n[2]),
    i = Math.max(a, o),
    s = Math.min(a, o);
  return (i + 0.05) / (s + 0.05);
}
function nR(e, t) {
  var r = $f(e),
    n = $f(t),
    a = r[0] - n[0],
    o = r[1] - n[1],
    i = r[2] - n[2],
    s = Math.sqrt(r[1] * r[1] + r[2] * r[2]),
    c = Math.sqrt(n[1] * n[1] + n[2] * n[2]),
    u = s - c,
    l = o * o + i * i - u * u;
  l = l < 0 ? 0 : Math.sqrt(l);
  var d = 1 + 0.045 * s,
    v = 1 + 0.015 * s,
    p = a / 1,
    g = u / d,
    f = l / v,
    h = p * p + g * g + f * f;
  return h < 0 ? 0 : Math.sqrt(h);
}
function $f(e) {
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
var Og = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
function zf(e, t) {
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
      ? zf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zk = "light",
  Qk = "no-preference",
  Sg = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.colorMode,
      n = r === void 0 ? ye.colorMode : r,
      a = t.dark,
      o = a === void 0 ? ye.dark : a,
      i = t.light,
      s = i === void 0 ? ye.light : i,
      c = t.contrastMode,
      u = c === void 0 ? ye.contrastMode : c,
      l = t.motion,
      d = l === void 0 ? ye.motion() : l,
      v = t.shape,
      p = v === void 0 ? ye.shape() : v,
      g = t.spacing,
      f = g === void 0 ? ye.spacing : g,
      h = t.typography,
      b = h === void 0 ? ye.typography : h,
      m = t.UNSAFE_themeOptions,
      y = m === void 0 ? ye.UNSAFE_themeOptions : m,
      k = Jk({ dark: o, light: s, motion: d, shape: p, spacing: f, typography: b }),
      w = C(C({}, Mr, k), Ii, n === "auto" ? Zk : n);
    if (
      (J("platform_increased-contrast-themes") &&
        (w = Vf(Vf({}, w), {}, C({}, mg, u === "auto" ? Qk : u))),
      y && kg(y.brandColor))
    ) {
      var O = JSON.stringify(y),
        E = Og(O);
      w[ji] = E;
    }
    return w;
  },
  Eg = {
    light: function () {
      return Je(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return Je(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return Je(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return Je(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return Je(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return Je(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return Je(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return Je(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    shape: function () {
      return Je(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
    motion: function () {
      return Je(() => import("./atlassian-motion-Dc6J6xcy.js"), [], import.meta.url);
    },
  },
  eO = (function () {
    var e = ee(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(Mr, '="').concat(r, '"]:not([').concat(ji, "])"),
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
                return ((i.next = 6), tO(r));
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
  tO = (function () {
    var e = ee(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), Eg[r]());
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
  rO = "(prefers-color-scheme: dark)",
  nO = "(prefers-contrast: more)",
  aO = typeof window < "u" && "matchMedia" in window;
function oO(e) {
  var t = document.documentElement;
  t.setAttribute(Ii, e.matches ? "dark" : "light");
}
var Gr = aO && window.matchMedia(rO),
  iO = (function () {
    function e() {
      (be(this, e), C(this, "unbindThemeChangeListener", null));
    }
    return me(e, [
      {
        key: "getColorMode",
        value: function () {
          return Gr && Gr != null && Gr.matches ? "dark" : "light";
        },
      },
      {
        key: "bind",
        value: function () {
          Gr &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = Dr.bind(Gr, { type: "change", listener: oO }));
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
  Oo = new iO(),
  sO = typeof window < "u" && "matchMedia" in window;
function cO(e) {
  var t = document.documentElement;
  t.setAttribute(mg, e.matches ? "more" : "no-preference");
}
var Hr = sO && window.matchMedia(nO),
  uO = (function () {
    function e() {
      (be(this, e), C(this, "unbindContrastChangeListener", null));
    }
    return me(e, [
      {
        key: "getContrastMode",
        value: function () {
          return Hr && Hr != null && Hr.matches ? "more" : "no-preference";
        },
      },
      {
        key: "bind",
        value: function () {
          Hr &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = Dr.bind(Hr, { type: "change", listener: cO }));
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
  So = new uO();
function lO(e) {
  (e.colorMode === "auto" ? ((e.colorMode = Oo.getColorMode()), Oo.bind()) : Oo.unbind(),
    J("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = So.getContrastMode()), So.bind())
        : So.unbind()));
  var t = Sg(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = H(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (Oo.unbind(), J("platform_increased-contrast-themes") && So.unbind());
    }
  );
}
function dO(e, t) {
  var r = JSON.stringify(e),
    n = Og(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(ji, '="').concat(n, '"][').concat(Mr, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function aR(e) {
  var t = Re(Array.from(document.head.querySelectorAll("style[".concat(ji, "][").concat(Mr, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function oR(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = H(n, 2),
      o = a[0],
      i = a[1],
      s = bg[o];
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
function Gf(e) {
  var t;
  return (t = Object.entries(zk).find(function (r) {
    var n = H(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var fO = function (t) {
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
        J("platform_increased-contrast-themes") &&
        l.forEach(function (p) {
          var g = Gf(p);
          g && l.push(g);
        }),
        d.push.apply(d, l));
    else if ((d.push(t[r]), n !== "no-preference" && J("platform_increased-contrast-themes"))) {
      var v = Gf(t[r]);
      v && d.push(v);
    }
    return (
      [i, s, c, u].forEach(function (p) {
        p && d.push(p);
      }),
      Re(new Set(d))
    );
  },
  pO = function (t) {
    var r = [];
    return Re(new Set(r));
  };
function vO(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = hO(e)) || t) {
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
function hO(e, t) {
  if (e) {
    if (typeof e == "string") return Hf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Hf(e, t)
          : void 0
    );
  }
}
function Hf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Wf(e, t) {
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
function Kf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var gO = (function () {
    var e = ee(
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
          v,
          p,
          g,
          f,
          h,
          b,
          m,
          y,
          k,
          w,
          O,
          E,
          R,
          I,
          P,
          j,
          U,
          $,
          q,
          G,
          B,
          W,
          K = arguments;
        return D.wrap(
          function (F) {
            for (;;)
              switch ((F.prev = F.next)) {
                case 0:
                  return (
                    (r = K.length > 0 && K[0] !== void 0 ? K[0] : {}),
                    (n = K.length > 1 ? K[1] : void 0),
                    (a =
                      typeof r == "function"
                        ? r(
                            Kf(
                              Kf({}, ye),
                              {},
                              { typography: ye.typography, shape: ye.shape(), motion: ye.motion() },
                              Yc(),
                            ),
                          )
                        : r),
                    (o = a.colorMode),
                    (i = o === void 0 ? ye.colorMode : o),
                    (s = a.contrastMode),
                    (c = s === void 0 ? ye.contrastMode : s),
                    (u = a.dark),
                    (l = u === void 0 ? ye.dark : u),
                    (d = a.light),
                    (v = d === void 0 ? ye.light : d),
                    (p = a.shape),
                    (g = p === void 0 ? ye.shape() : p),
                    (f = a.spacing),
                    (h = f === void 0 ? ye.spacing : f),
                    (b = a.typography),
                    (m = b === void 0 ? ye.typography : b),
                    (y = a.motion),
                    (k = y === void 0 ? ye.motion() : y),
                    (w = a.UNSAFE_themeOptions),
                    (O = w === void 0 ? ye.UNSAFE_themeOptions : w),
                    J("platform_increased-contrast-themes") ||
                      (v === "light-increased-contrast" && (v = "light"),
                      l === "dark-increased-contrast" && (l = "dark")),
                    (E = {
                      colorMode: i,
                      contrastMode: c,
                      dark: l,
                      light: v,
                      shape: g,
                      spacing: h,
                      typography: m,
                      motion: k,
                      UNSAFE_themeOptions: n ? void 0 : O,
                    }),
                    (R = fO(E)),
                    (I = n || eO),
                    (P = R.map(
                      (function () {
                        var se = ee(
                          D.mark(function X(we) {
                            return D.wrap(function (T) {
                              for (;;)
                                switch ((T.prev = T.next)) {
                                  case 0:
                                    return ((T.next = 2), I(we));
                                  case 2:
                                    return T.abrupt("return", T.sent);
                                  case 3:
                                  case "end":
                                    return T.stop();
                                }
                            }, X);
                          }),
                        );
                        return function (X) {
                          return se.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      O &&
                      kg(O?.brandColor) &&
                      ((j = i || ye.colorMode),
                      (U = dO(O, j)),
                      U.length > 0 &&
                        P.push(
                          ee(
                            D.mark(function se() {
                              var X, we;
                              return D.wrap(function (T) {
                                for (;;)
                                  switch ((T.prev = T.next)) {
                                    case 0:
                                      return (
                                        (T.next = 2),
                                        Je(
                                          () => import("./custom-theme-PjTJAMS-.js"),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((X = T.sent),
                                        (we = X.loadAndAppendCustomThemeCss),
                                        we({
                                          colorMode: U.length === 2 ? "auto" : U[0],
                                          UNSAFE_themeOptions: O,
                                        }));
                                    case 5:
                                    case "end":
                                      return T.stop();
                                  }
                              }, se);
                            }),
                          )(),
                        )),
                    (F.next = 11),
                    Promise.all(P)
                  );
                case 11:
                  (($ = pO()), (q = vO($)), (F.prev = 13), q.s());
                case 15:
                  if ((G = q.n()).done) {
                    F.next = 21;
                    break;
                  }
                  return ((B = G.value), (F.next = 19), I(B));
                case 19:
                  F.next = 15;
                  break;
                case 21:
                  F.next = 26;
                  break;
                case 23:
                  ((F.prev = 23), (F.t0 = F.catch(13)), q.e(F.t0));
                case 26:
                  return ((F.prev = 26), q.f(), F.finish(26));
                case 29:
                  return ((W = lO(E)), F.abrupt("return", W));
                case 31:
                case "end":
                  return F.stop();
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
  Xc = (function () {
    function e(t) {
      (be(this, e), C(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return me(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = Yc();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Mr, Ii] }));
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
C(Xc, "observer", null);
C(Xc, "callbacks", new Set());
var xg = _.createContext(void 0),
  bO = _.createContext(void 0),
  Cg = _.createContext(!1),
  mO = _.createContext(void 0),
  yO = _.createContext(void 0),
  _O = function () {
    var t;
    return (t = _.useContext(Cg)) !== null && t !== void 0 ? t : !1;
  },
  Pg = function () {
    return typeof document < "u" ? document : null;
  };
function Rg(e) {
  var t = Pg();
  return t ? t.head.querySelector("style[".concat(Mr, '="').concat(e, '"]')) : !1;
}
var wO = (function () {
    var e = ee(
      D.mark(function t(r) {
        var n, a;
        return D.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!Rg(r)) {
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
                return ((i.next = 6), Eg[r]());
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
  kO = (function () {
    var e = ee(
      D.mark(function t(r, n) {
        var a, o;
        return D.wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                if (((a = Pg()), a)) {
                  s.next = 3;
                  break;
                }
                return s.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !Rg(n))
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
  OO = (function () {
    var e = ee(
      D.mark(function t(r) {
        var n;
        return D.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), wO(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                kO(n, r);
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
  SO = (function () {
    var e = ee(
      D.mark(function t(r) {
        var n;
        return D.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                ((n = Object.values(r).filter(function (i) {
                  return !!i;
                })),
                  n.forEach(OO));
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
function Jf(e, t) {
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
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var EO = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  xO = typeof window < "u" && "matchMedia" in window,
  Ua = xO ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function Yf(e) {
  return e === "auto" ? (Ua != null && Ua.matches ? "dark" : "light") : e;
}
var CO = { body: "_1e0c1bgi" };
function Ag(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = _.useState(n),
    i = H(o, 2),
    s = i[0],
    c = i[1],
    u = _.useState(Yf(n)),
    l = H(u, 2),
    d = l[0],
    v = l[1],
    p = _.useState(function () {
      return St(St({}, EO), a);
    }),
    g = H(p, 2),
    f = g[0],
    h = g[1],
    b = _.useCallback(function (P) {
      (c(P), v(Yf(P)));
    }, []),
    m = _.useCallback(function (P) {
      h(function (j) {
        return St(St({}, j), P);
      });
    }, []),
    y = _.useRef(null),
    k = Fk(),
    w = Nk(),
    O = _O(),
    E = k && !O && w,
    R = (!J("platform_dst_subtree_theming") && !k && !O) || E;
  (_.useEffect(
    function () {
      if (R) {
        var P = (function () {
            var U = ee(
              D.mark(function $() {
                var q;
                return D.wrap(function (B) {
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
                }, $);
              }),
            );
            return function () {
              return U.apply(this, arguments);
            };
          })(),
          j = (function () {
            var U = ee(
              D.mark(function $() {
                var q;
                return D.wrap(function (B) {
                  for (;;)
                    switch ((B.prev = B.next)) {
                      case 0:
                        return ((B.next = 2), P());
                      case 2:
                        ((q = gO(St(St({}, f), {}, { colorMode: d }))), (y.current = q));
                      case 4:
                      case "end":
                        return B.stop();
                    }
                }, $);
              }),
            );
            return function () {
              return U.apply(this, arguments);
            };
          })();
        return (
          j(),
          function () {
            P();
          }
        );
      } else SO(f);
    },
    [k, O, E, d, R, f],
  ),
    _.useEffect(
      function () {
        if (Ua) {
          var P = Dr.bind(Ua, {
            type: "change",
            listener: function (U) {
              s === "auto" && v(U.matches ? "dark" : "light");
            },
          });
          return P;
        }
      },
      [s],
    ));
  var I = St(St({}, Sg(St(St({}, f), {}, { colorMode: d }))), {}, C({}, Vk, !0));
  return S.createElement(
    Cg.Provider,
    { value: !0 },
    S.createElement(
      xg.Provider,
      { value: d },
      S.createElement(
        bO.Provider,
        { value: b },
        S.createElement(
          mO.Provider,
          { value: f },
          S.createElement(
            yO.Provider,
            { value: m },
            !R && J("platform_dst_subtree_theming")
              ? S.createElement("div", ne({}, I, { className: Q([CO.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function Ig() {
  var e = _.useContext(xg),
    t = Yc(),
    r = _.useState(t?.colorMode || "light"),
    n = H(r, 2),
    a = n[0],
    o = n[1];
  return (
    _.useEffect(
      function () {
        if (!e) {
          var i = new Xc(function (s) {
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
var PO = function () {
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
  jg = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: PO() });
  },
  RO = jg(),
  AO = _.createContext(jg()),
  IO = function (e) {
    return e.value++;
  },
  jO = function (e) {
    return e ? e.prefix : "";
  },
  TO = function (e) {
    var t = e || RO,
      r = jO(t),
      n = IO(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  Tg = function () {
    var e = _.useContext(AO),
      t = _.useState(function () {
        return TO(e);
      })[0];
    return t;
  },
  DO = function () {
    var e = Tg().uid;
    return e;
  },
  MO = function () {
    var e = Tg().gen;
    return e;
  },
  Gs,
  Mo = (Gs = S.useId) !== null && Gs !== void 0 ? Gs : void 0;
function Dg() {
  return Mo && J("platform-dst-react-18-use-id")
    ? J("platform-dst-react-18-use-id-selector-safe")
      ? Mo().replace(/[:«»]/g, "_")
      : Mo()
    : "uid".concat(DO());
}
function FO() {
  if (Mo && J("platform-dst-react-18-use-id")) {
    var e = Dg();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return MO();
}
var Ti = function (t) {
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
      className: Q([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
Ti.displayName = "VisuallyHidden";
function BO(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function NO(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var LO = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(NO(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = BO(a);
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
  Be = "-ms-",
  ai = "-moz-",
  oe = "-webkit-",
  Mg = "comm",
  Zc = "rule",
  Qc = "decl",
  UO = "@import",
  Fg = "@keyframes",
  qO = "@layer",
  $O = Math.abs,
  Di = String.fromCharCode,
  zO = Object.assign;
function VO(e, t) {
  return je(e, 0) ^ 45
    ? (((((((t << 2) ^ je(e, 0)) << 2) ^ je(e, 1)) << 2) ^ je(e, 2)) << 2) ^ je(e, 3)
    : 0;
}
function Bg(e) {
  return e.trim();
}
function GO(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, r) {
  return e.replace(t, r);
}
function Ec(e, t) {
  return e.indexOf(t);
}
function je(e, t) {
  return e.charCodeAt(t) | 0;
}
function Za(e, t, r) {
  return e.slice(t, r);
}
function xt(e) {
  return e.length;
}
function eu(e) {
  return e.length;
}
function Eo(e, t) {
  return (t.push(e), e);
}
function HO(e, t) {
  return e.map(t).join("");
}
var Mi = 1,
  on = 1,
  Ng = 0,
  Ge = 0,
  Oe = 0,
  vn = "";
function Fi(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: Mi,
    column: on,
    length: i,
    return: "",
  };
}
function Ea(e, t) {
  return zO(Fi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function WO() {
  return Oe;
}
function KO() {
  return ((Oe = Ge > 0 ? je(vn, --Ge) : 0), on--, Oe === 10 && ((on = 1), Mi--), Oe);
}
function Ze() {
  return ((Oe = Ge < Ng ? je(vn, Ge++) : 0), on++, Oe === 10 && ((on = 1), Mi++), Oe);
}
function Tt() {
  return je(vn, Ge);
}
function Fo() {
  return Ge;
}
function lo(e, t) {
  return Za(vn, e, t);
}
function Qa(e) {
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
function Lg(e) {
  return ((Mi = on = 1), (Ng = xt((vn = e))), (Ge = 0), []);
}
function Ug(e) {
  return ((vn = ""), e);
}
function Bo(e) {
  return Bg(lo(Ge - 1, xc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function JO(e) {
  for (; (Oe = Tt()) && Oe < 33; ) Ze();
  return Qa(e) > 2 || Qa(Oe) > 3 ? "" : " ";
}
function YO(e, t) {
  for (; --t && Ze() && !(Oe < 48 || Oe > 102 || (Oe > 57 && Oe < 65) || (Oe > 70 && Oe < 97)); );
  return lo(e, Fo() + (t < 6 && Tt() == 32 && Ze() == 32));
}
function xc(e) {
  for (; Ze(); )
    switch (Oe) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xc(Oe);
        break;
      case 40:
        e === 41 && xc(e);
        break;
      case 92:
        Ze();
        break;
    }
  return Ge;
}
function XO(e, t) {
  for (; Ze() && e + Oe !== 57; ) if (e + Oe === 84 && Tt() === 47) break;
  return "/*" + lo(t, Ge - 1) + "*" + Di(e === 47 ? e : Ze());
}
function ZO(e) {
  for (; !Qa(Tt()); ) Ze();
  return lo(e, Ge);
}
function QO(e) {
  return Ug(No("", null, null, null, [""], (e = Lg(e)), 0, [0], e));
}
function No(e, t, r, n, a, o, i, s, c) {
  for (
    var u = 0,
      l = 0,
      d = i,
      v = 0,
      p = 0,
      g = 0,
      f = 1,
      h = 1,
      b = 1,
      m = 0,
      y = "",
      k = a,
      w = o,
      O = n,
      E = y;
    h;
  )
    switch (((g = m), (m = Ze()))) {
      case 40:
        if (g != 108 && je(E, d - 1) == 58) {
          Ec((E += ie(Bo(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Bo(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += JO(g);
        break;
      case 92:
        E += YO(Fo() - 1, 7);
        continue;
      case 47:
        switch (Tt()) {
          case 42:
          case 47:
            Eo(eS(XO(Ze(), Fo()), t, r), c);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * f:
        s[u++] = xt(E) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (b == -1 && (E = ie(E, /\f/g, "")),
              p > 0 &&
                xt(E) - d &&
                Eo(p > 32 ? Zf(E + ";", n, r, d - 1) : Zf(ie(E, " ", "") + ";", n, r, d - 2), c));
            break;
          case 59:
            E += ";";
          default:
            if ((Eo((O = Xf(E, t, r, u, l, a, s, y, (k = []), (w = []), d)), o), m === 123))
              if (l === 0) No(E, t, O, O, k, o, d, s, w);
              else
                switch (v === 99 && je(E, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    No(
                      e,
                      O,
                      O,
                      n && Eo(Xf(e, O, O, 0, 0, a, s, y, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      s,
                      n ? k : w,
                    );
                    break;
                  default:
                    No(E, O, O, O, [""], w, 0, s, w);
                }
        }
        ((u = l = p = 0), (f = b = 1), (y = E = ""), (d = i));
        break;
      case 58:
        ((d = 1 + xt(E)), (p = g));
      default:
        if (f < 1) {
          if (m == 123) --f;
          else if (m == 125 && f++ == 0 && KO() == 125) continue;
        }
        switch (((E += Di(m)), m * f)) {
          case 38:
            b = l > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            ((s[u++] = (xt(E) - 1) * b), (b = 1));
            break;
          case 64:
            (Tt() === 45 && (E += Bo(Ze())), (v = Tt()), (l = d = xt((y = E += ZO(Fo())))), m++);
            break;
          case 45:
            g === 45 && xt(E) == 2 && (f = 0);
        }
    }
  return o;
}
function Xf(e, t, r, n, a, o, i, s, c, u, l) {
  for (var d = a - 1, v = a === 0 ? o : [""], p = eu(v), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, m = Za(e, d + 1, (d = $O((f = i[g])))), y = e; b < p; ++b)
      (y = Bg(f > 0 ? v[b] + " " + m : ie(m, /&\f/g, v[b]))) && (c[h++] = y);
  return Fi(e, t, r, a === 0 ? Zc : s, c, u, l);
}
function eS(e, t, r) {
  return Fi(e, t, r, Mg, Di(WO()), Za(e, 2, -2), 0);
}
function Zf(e, t, r, n) {
  return Fi(e, t, r, Qc, Za(e, 0, n), Za(e, n + 1, -1), n);
}
function en(e, t) {
  for (var r = "", n = eu(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function tS(e, t, r, n) {
  switch (e.type) {
    case qO:
      if (e.children.length) break;
    case UO:
    case Qc:
      return (e.return = e.return || e.value);
    case Mg:
      return "";
    case Fg:
      return (e.return = e.value + "{" + en(e.children, n) + "}");
    case Zc:
      e.value = e.props.join(",");
  }
  return xt((r = en(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function rS(e) {
  var t = eu(e);
  return function (r, n, a, o) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, n, a, o) || "";
    return i;
  };
}
function nS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function aS(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var oS = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = Tt()), a === 38 && o === 12 && (r[n] = 1), !Qa(o); ) Ze();
    return lo(t, Ge);
  },
  iS = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Qa(a)) {
        case 0:
          (a === 38 && Tt() === 12 && (r[n] = 1), (t[n] += oS(Ge - 1, r, n)));
          break;
        case 2:
          t[n] += Bo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = Tt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Di(a);
      }
    while ((a = Ze()));
    return t;
  },
  sS = function (t, r) {
    return Ug(iS(Lg(t), r));
  },
  Qf = new WeakMap(),
  cS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Qf.get(n)) && !a) {
        Qf.set(t, !0);
        for (var o = [], i = sS(r, o), s = n.props, c = 0, u = 0; c < i.length; c++)
          for (var l = 0; l < s.length; l++, u++)
            t.props[u] = o[c] ? i[c].replace(/&\f/g, s[l]) : s[l] + " " + i[c];
      }
    }
  },
  uS = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function qg(e, t) {
  switch (VO(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
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
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + ai + e + Be + e + e;
    case 6828:
    case 4268:
      return oe + e + Be + e + e;
    case 6165:
      return oe + e + Be + "flex-" + e + e;
    case 5187:
      return oe + e + ie(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + Be + "flex-$1$2") + e;
    case 5443:
      return oe + e + Be + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + Be + "flex-line-pack" + ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + Be + ie(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + Be + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ie(e, "-grow", "") + oe + e + Be + ie(e, "grow", "positive") + e;
    case 4554:
      return oe + ie(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return (
        ie(
          ie(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + Be + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        oe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
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
      if (xt(e) - 1 - t > 6)
        switch (je(e, t + 1)) {
          case 109:
            if (je(e, t + 4) !== 45) break;
          case 102:
            return (
              ie(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + oe + "$2-$3$1" + ai + (je(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Ec(e, "stretch") ? qg(ie(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (je(e, t + 1) !== 115) break;
    case 6444:
      switch (je(e, xt(e) - 3 - (~Ec(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + oe) + e;
        case 101:
          return (
            ie(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                oe +
                (je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                oe +
                "$2$3$1" +
                Be +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (je(e, t + 11)) {
        case 114:
          return oe + e + Be + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + Be + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + Be + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + Be + e + e;
  }
  return e;
}
var lS = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Qc:
          t.return = qg(t.value, t.length);
          break;
        case Fg:
          return en([Ea(t, { value: ie(t.value, "@", "@" + oe) })], a);
        case Zc:
          if (t.length)
            return HO(t.props, function (o) {
              switch (GO(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return en([Ea(t, { props: [ie(o, /:(read-\w+)/, ":" + ai + "$1")] })], a);
                case "::placeholder":
                  return en(
                    [
                      Ea(t, { props: [ie(o, /:(plac\w+)/, ":" + oe + "input-$1")] }),
                      Ea(t, { props: [ie(o, /:(plac\w+)/, ":" + ai + "$1")] }),
                      Ea(t, { props: [ie(o, /:(plac\w+)/, Be + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  dS = [lS],
  fS = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || dS,
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
      u = [cS, uS];
    {
      var l,
        d = [
          tS,
          nS(function (f) {
            l.insert(f);
          }),
        ],
        v = rS(u.concat(a, d)),
        p = function (h) {
          return en(QO(h), v);
        };
      c = function (h, b, m, y) {
        ((l = m), p(h ? h + "{" + b.styles + "}" : b.styles), y && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new LO({
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
  Hs = { exports: {} },
  ce = {};
var ep;
function pS() {
  if (ep) return ce;
  ep = 1;
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
    v = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
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
                case p:
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
    (ce.AsyncMode = c),
    (ce.ConcurrentMode = u),
    (ce.ContextConsumer = s),
    (ce.ContextProvider = i),
    (ce.Element = t),
    (ce.ForwardRef = l),
    (ce.Fragment = n),
    (ce.Lazy = g),
    (ce.Memo = p),
    (ce.Portal = r),
    (ce.Profiler = o),
    (ce.StrictMode = a),
    (ce.Suspense = d),
    (ce.isAsyncMode = function (w) {
      return k(w) || y(w) === c;
    }),
    (ce.isConcurrentMode = k),
    (ce.isContextConsumer = function (w) {
      return y(w) === s;
    }),
    (ce.isContextProvider = function (w) {
      return y(w) === i;
    }),
    (ce.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (ce.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (ce.isFragment = function (w) {
      return y(w) === n;
    }),
    (ce.isLazy = function (w) {
      return y(w) === g;
    }),
    (ce.isMemo = function (w) {
      return y(w) === p;
    }),
    (ce.isPortal = function (w) {
      return y(w) === r;
    }),
    (ce.isProfiler = function (w) {
      return y(w) === o;
    }),
    (ce.isStrictMode = function (w) {
      return y(w) === a;
    }),
    (ce.isSuspense = function (w) {
      return y(w) === d;
    }),
    (ce.isValidElementType = function (w) {
      return (
        typeof w == "string" ||
        typeof w == "function" ||
        w === n ||
        w === u ||
        w === o ||
        w === a ||
        w === d ||
        w === v ||
        (typeof w == "object" &&
          w !== null &&
          (w.$$typeof === g ||
            w.$$typeof === p ||
            w.$$typeof === i ||
            w.$$typeof === s ||
            w.$$typeof === l ||
            w.$$typeof === h ||
            w.$$typeof === b ||
            w.$$typeof === m ||
            w.$$typeof === f))
      );
    }),
    (ce.typeOf = y),
    ce
  );
}
var tp;
function vS() {
  return (tp || ((tp = 1), (Hs.exports = pS())), Hs.exports);
}
var Ws, rp;
function hS() {
  if (rp) return Ws;
  rp = 1;
  var e = vS(),
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
    v = Object.prototype;
  function p(g, f, h) {
    if (typeof f != "string") {
      if (v) {
        var b = d(f);
        b && b !== v && p(g, b, h);
      }
      var m = c(f);
      u && (m = m.concat(u(f)));
      for (var y = i(g), k = i(f), w = 0; w < m.length; ++w) {
        var O = m[w];
        if (!r[O] && !(h && h[O]) && !(k && k[O]) && !(y && y[O])) {
          var E = l(f, O);
          try {
            s(g, O, E);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((Ws = p), Ws);
}
hS();
var gS = !0;
function $g(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var tu = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || gS === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  zg = function (t, r, n) {
    tu(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function bS(e) {
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
var mS = {
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
  yS = /[A-Z]|^ms/g,
  _S = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Vg = function (t) {
    return t.charCodeAt(1) === 45;
  },
  np = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ks = aS(function (e) {
    return Vg(e) ? e : e.replace(yS, "-$&").toLowerCase();
  }),
  ap = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(_S, function (n, a, o) {
            return ((Ct = { name: a, styles: o, next: Ct }), a);
          });
    }
    return mS[t] !== 1 && !Vg(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function eo(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1) return ((Ct = { name: a.name, styles: a.styles, next: Ct }), a.name);
      var o = r;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ((Ct = { name: i.name, styles: i.styles, next: Ct }), (i = i.next));
        var s = o.styles + ";";
        return s;
      }
      return wS(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ct,
          u = r(e);
        return ((Ct = c), eo(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function wS(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += eo(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0
          ? (n += o + "{" + t[s] + "}")
          : np(s) && (n += Ks(o) + ":" + ap(o, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++) np(i[c]) && (n += Ks(o) + ":" + ap(o, i[c]) + ";");
      else {
        var u = eo(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Ks(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var op = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ct;
function ru(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  Ct = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += eo(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((a += eo(r, t, e[s])), n)) {
      var c = o;
      a += c[s];
    }
  op.lastIndex = 0;
  for (var u = "", l; (l = op.exec(a)) !== null; ) u += "-" + l[1];
  var d = bS(a) + u;
  return { name: d, styles: a, next: Ct };
}
var kS = function (t) {
    return t();
  },
  OS = wu.useInsertionEffect ? wu.useInsertionEffect : !1,
  Gg = OS || kS,
  Hg = _.createContext(typeof HTMLElement < "u" ? fS({ key: "css" }) : null);
Hg.Provider;
var Wg = function (t) {
    return _.forwardRef(function (r, n) {
      var a = _.useContext(Hg);
      return t(r, a, n);
    });
  },
  Kg = _.createContext({}),
  nu = {}.hasOwnProperty,
  Cc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  SS = function (t, r) {
    var n = {};
    for (var a in r) nu.call(r, a) && (n[a] = r[a]);
    return ((n[Cc] = t), n);
  },
  ES = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      tu(r, n, a),
      Gg(function () {
        return zg(r, n, a);
      }),
      null
    );
  },
  xS = Wg(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Cc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = $g(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var s = ru(o, void 0, _.useContext(Kg));
    i += t.key + "-" + s.name;
    var c = {};
    for (var u in e) nu.call(e, u) && u !== "css" && u !== Cc && (c[u] = e[u]);
    return (
      (c.className = i),
      r && (c.ref = r),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(ES, { cache: t, serialized: s, isStringTag: typeof a == "string" }),
        _.createElement(a, c),
      )
    );
  }),
  CS = xS,
  Xt = function (t, r) {
    var n = arguments;
    if (r == null || !nu.call(r, "css")) return _.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = CS), (o[1] = SS(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return _.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Xt || (Xt = {}));
function Nt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return ru(t);
}
var PS = function e(t) {
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
function RS(e, t, r) {
  var n = [],
    a = $g(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var AS = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Gg(function () {
        for (var a = 0; a < n.length; a++) zg(r, n[a], !1);
      }),
      null
    );
  },
  IS = Wg(function (e, t) {
    var r = [],
      n = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        var d = ru(u, t.registered);
        return (r.push(d), tu(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        return RS(t.registered, n, PS(u));
      },
      o = { css: n, cx: a, theme: _.useContext(Kg) },
      i = e.children(o);
    return _.createElement(
      _.Fragment,
      null,
      _.createElement(AS, { cache: t, serializedArr: r }),
      i,
    );
  });
function Jg(e, t) {
  var r = _.useRef(!0);
  _.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Yg = 2,
  Pc = Nt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Yg,
  }),
  Rc = Nt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Yg,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  jS = Nt({
    "&:focus": Pc,
    "&:focus-visible": Pc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  TS = Nt({
    "&:focus": Rc,
    "&:focus-visible": Rc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Xg = _.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Rc : Pc,
      o = r ? TS : jS,
      i = typeof n > "u" ? o : n === "on" && a;
    return Xt(IS, null, function (s) {
      var c = s.css,
        u = s.cx;
      return _.Children.only(
        i ? _.cloneElement(t, { className: u([c(i), t.props.className]) }) : t,
      );
    });
  });
Xg.displayName = "FocusRing";
function Wt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var DS = 9;
function ip(e) {
  e.keyCode !== DS && Wt(e);
}
var MS = {
    onMouseDownCapture: Wt,
    onMouseUpCapture: Wt,
    onKeyDownCapture: ip,
    onKeyUpCapture: ip,
    onTouchStartCapture: Wt,
    onTouchEndCapture: Wt,
    onPointerDownCapture: Wt,
    onPointerUpCapture: Wt,
    onClickCapture: Wt,
    onClick: Wt,
  },
  FS = {};
function BS(e) {
  var t = e.isInteractive;
  return t ? FS : MS;
}
function sp(e, t) {
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
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var sr = 8,
  Js = ["default", "primary", "danger", "warning"],
  Ac = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  NS = { default: Ac.default, compact: Ac.compact, none: "inherit" },
  LS = {
    default: "0 ".concat(sr + sr / 4, "px"),
    compact: "0 ".concat(sr + sr / 4, "px"),
    none: "0",
  },
  US = { compact: "0 ".concat(sr / 4, "px"), default: "0 ".concat(sr / 4, "px"), none: "0" },
  qS = { default: "middle", compact: "middle", none: "baseline" },
  Zg = { content: "0 ".concat(sr / 4, "px"), icon: "0 ".concat(sr / 4, "px") },
  Qg = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  $S = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": $e($e({}, Qg), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  zS = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  VS = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  GS = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  HS = {
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
  WS = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  KS = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  JS = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": $e(
      $e({}, Qg),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  YS = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function XS(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return $e(
    $e(
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
        height: Ac[r],
        lineHeight: NS[r],
        padding: o ? US[r] : LS[r],
        verticalAlign: qS[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? JS
        : $e(
            $e(
              $e(
                $e(
                  $e(
                    $e(
                      $e($e({}, t === "default" && $S), t === "primary" && zS),
                      t === "link" && VS,
                    ),
                    t === "subtle" && GS,
                  ),
                  t === "subtle-link" && HS,
                ),
                t === "warning" && WS,
              ),
              t === "danger" && KS,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Js.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Js.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Js.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            YS,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function cp(e) {
  var t = e.spacing;
  return Nt({
    display: "flex",
    margin: t === "none" ? 0 : Zg.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function ZS(e) {
  var t = e.spacing;
  return Nt({
    margin: t === "none" ? 0 : Zg.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function QS(e) {
  var t = e.hasOverlay;
  return Nt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var eE = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  au = function (t) {
    return t && _.isValidElement(t) && t.type === Ti;
  },
  tE = [
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
  rE = { "> *": { pointerEvents: "none" } },
  nE = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  aE = Nt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  up = function (t, r) {
    return !t || au(t) ? null : r;
  },
  oE = function (t, r) {
    return au(t) ? t : t ? Xt("span", { css: r }, t) : null;
  },
  iE = S.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      s = i === void 0 ? !1 : i,
      c = t.buttonCss,
      u = t.children,
      l = t.className,
      d = t.href,
      v = t.component,
      p = v === void 0 ? (d ? "a" : "button") : v,
      g = t.iconAfter,
      f = t.iconBefore,
      h = t.interactionName,
      b = t.isDisabled,
      m = b === void 0 ? !1 : b,
      y = t.isSelected,
      k = y === void 0 ? !1 : y,
      w = t.onBlur,
      O = t.onClick,
      E = O === void 0 ? Ne : O,
      R = t.onFocus,
      I = t.onMouseDown,
      P = I === void 0 ? Ne : I,
      j = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      $ = U === void 0 ? "default" : U,
      q = t.tabIndex,
      G = q === void 0 ? 0 : q,
      B = t.type,
      W = B === void 0 ? (d ? void 0 : "button") : B,
      K = t.testId,
      z = ue(t, tE),
      F = _.useRef(),
      se = _.useCallback(
        function (ve) {
          if (((F.current = ve), r != null)) {
            if (typeof r == "function") {
              r(ve);
              return;
            }
            r.current = ve;
          }
        },
        [F, r],
      );
    Jg(F, s);
    var X = _.useContext(Hc),
      we = _.useCallback(
        function (ve, Ue) {
          (X && X.tracePress(h, ve.timeStamp), E(ve, Ue));
        },
        [E, X, h],
      ),
      _e = an({
        fn: we,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      T = _.useCallback(
        function (ve) {
          (ve.preventDefault(), P(ve));
        },
        [P],
      );
    _.useEffect(
      function () {
        var ve = F.current;
        m && ve && ve === document.activeElement && ve.blur();
      },
      [m],
    );
    var ke = !!j,
      Le = Nt(QS({ hasOverlay: ke })),
      pe = !m && !ke,
      Ie = {};
    return (
      (k || m || o === "warning") &&
        (Ie = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || m
                ? "var(--ds-icon-subtle, ".concat(ri, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ri, ")"),
              " !important",
            ),
          },
        }),
      Xt(
        Xg,
        null,
        Xt(
          p,
          ne(
            {},
            z,
            {
              ref: se,
              className: l,
              css: [c, pe ? null : rE],
              "data-has-overlay": ke ? !0 : void 0,
              "data-testid": K,
              disabled: m,
              href: pe ? d : void 0,
              onBlur: w,
              onClick: _e,
              onFocus: R,
              onMouseDown: T,
              tabIndex: m ? -1 : G,
              type: W,
            },
            BS({ isInteractive: pe }),
          ),
          f ? Xt("span", { css: [Le, cp({ spacing: $ }), up(u, nE)] }, f) : null,
          oE(u, [Le, ZS({ spacing: $ })]),
          g ? Xt("span", { css: [Le, cp({ spacing: $ }), up(u, aE)] }, g) : null,
          j ? Xt("span", { css: [eE, Ie] }, j) : null,
        ),
      )
    );
  });
function sE(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return au(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var cE = [
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
  lp = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  ou = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        s = t.iconAfter,
        c = t.isSelected,
        u = c === void 0 ? !1 : c,
        l = t.onMouseDown,
        d = l === void 0 ? Ne : l,
        v = t.onMouseUp,
        p = v === void 0 ? Ne : v,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        m = ue(t, cE),
        y = sE({ children: o, iconBefore: i, iconAfter: s }),
        k = _.useState(!1),
        w = H(k, 2),
        O = w[0],
        E = w[1],
        R = _.useCallback(
          function (j) {
            (d(j), lp && E(!0));
          },
          [d, E],
        ),
        I = _.useCallback(
          function (j) {
            (p(j), lp && E(!1));
          },
          [p, E],
        ),
        P = _.useMemo(
          function () {
            return XS({
              appearance: a,
              spacing: b,
              isSelected: u,
              shouldFitContainer: f,
              isOnlySingleIcon: y,
            });
          },
          [a, b, u, f, y],
        );
      return S.createElement(
        iE,
        ne({}, m, {
          ref: r,
          appearance: a,
          buttonCss: P,
          children: o,
          "data-firefox-is-active": O ? !0 : void 0,
          iconAfter: s,
          iconBefore: i,
          isSelected: u,
          onMouseDown: R,
          onMouseUp: I,
          spacing: b,
        }),
      );
    }),
  );
ou.displayName = "Button";
function dp(e) {
  return S.createElement(ou, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function uE(e) {
  return S.createElement(ou, ne({}, e, { appearance: "subtle" }));
}
var lE = { container: "_1e0c1txw _kqswh2mm" };
function dE(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return S.createElement(
    Ai,
    { as: "li", testId: r, key: t, xcss: lE.container, paddingInline: "space.100" },
    S.createElement(
      vg,
      { testId: r && "".concat(r, "-text") },
      S.createElement(Ti, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var fp = {},
  pp =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function fE(e, t) {
  return !!(e === t || (pp(e) && pp(t)));
}
function pE(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!fE(e[r], t[r])) return !1;
  return !0;
}
function vE(e, t) {
  t === void 0 && (t = pE);
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
var hE = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    s = n.transform,
    c = t.length,
    u = c > o,
    l = u && o - 4 < r,
    d = u && r < c - o + 3,
    v = vE(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      return t.slice(h, b).map(function (m, y) {
        return s(m, h + y, a);
      });
    });
  if (!u) return v(0, c);
  if (l && !d) {
    var p = o - 2;
    return [].concat(
      Re(v(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: c - p })],
      Re(v(c - p)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Re(v(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: c - 1 })],
      Re(v(c - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Re(v(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Re(v(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: c - 1 })],
    Re(v(c - 1)),
  );
};
function vp(e, t) {
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
function gE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ic = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect4ttxp",
    navigatorIconWrapper: "_18zr12x7",
  },
  bE = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function hp(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Z1 : tk;
  return S.createElement(
    Ai,
    { as: "span", xcss: Ic.navigatorIconWrapper },
    S.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function mE(e, t) {
  var r = e.components,
    n = r === void 0 ? fp : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? "pagination" : s,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    v = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    g = p === void 0 ? "next" : p,
    f = e.style,
    h = f === void 0 ? fp : f,
    b = e.max,
    m = b === void 0 ? 7 : b,
    y = e.onChange,
    k = y === void 0 ? Ne : y,
    w = e.pages,
    O = e.getPageLabel,
    E = e.renderEllipsis,
    R = E === void 0 ? dE : E,
    I = e.analyticsContext,
    P = e.testId,
    j = e.isDisabled,
    U = G1(i, function () {
      return o || 0;
    }),
    $ = H(U, 2),
    q = $[0],
    G = $[1],
    B = an(
      gE(
        {
          fn: function (z, F) {
            var se = z.event,
              X = z.selectedPageIndex;
            (i === void 0 && G(X), k && k(se, w[X], F));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        bE,
      ),
    ),
    W = function (z, F, se) {
      var X = w[q],
        we = "".concat(l, " ").concat(O ? O(z, F) : z),
        _e = z === X;
      return S.createElement(
        Do,
        { as: "li", xcss: Ic.paginationMenuItem, key: "page-".concat(O ? O(z, F) : F) },
        S.createElement(
          uE,
          {
            component: n.Page,
            onClick: function (ke) {
              return B({ event: ke, selectedPageIndex: F });
            },
            "aria-current": _e ? "page" : void 0,
            "aria-label": we,
            isSelected: _e,
            isDisabled: j,
            page: z,
            testId:
              se &&
              ""
                .concat(se, "--")
                .concat(_e ? "current-" : "", "page-")
                .concat(F),
          },
          O ? O(z, F) : z,
        ),
      );
    };
  return S.createElement(
    Ai,
    { testId: P, style: h, ref: t, "aria-label": c, as: "nav" },
    S.createElement(
      Do,
      { space: "space.0", alignBlock: "center" },
      S.createElement(dp, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (z) {
          return B({ event: z, selectedPageIndex: q - 1 });
        },
        isDisabled: j || q === 0,
        iconBefore: S.createElement(hp, { chevronDirection: "left" }),
        "aria-label": v,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      S.createElement(
        Do,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ic.paginationMenu },
        hE(w, q, { max: m, ellipsis: R, transform: W }, P),
      ),
      S.createElement(dp, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (z) {
          return B({ event: z, selectedPageIndex: q + 1 });
        },
        isDisabled: j || q === w.length - 1,
        iconBefore: S.createElement(hp, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var yE = _.memo(_.forwardRef(mE));
function _E(e, t, r) {
  return (
    (t = re(t)),
    tt(e, eb() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function eb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (eb = function () {
    return !!e;
  })();
}
var wE = (function (e) {
    function t() {
      var r;
      be(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = _E(this, t, [].concat(a))),
        C(r, "onChange", function (i, s, c) {
          r.props.onChange(s, c);
        }),
        r
      );
    }
    return (
      rt(t, e),
      me(t, [
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
              l = Re(Array(a)).map(function (v, p) {
                return p + 1;
              }),
              d = i - 1;
            return S.createElement(yE, {
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
  kE = ["isRanking", "testId"],
  OE = [
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
function gp(e, t) {
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
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var bp = "--local-dynamic-table-text-color",
  SE = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ue(t, kE);
    return _.createElement(
      "thead",
      ne({ "data-testid": n }, a, { className: Q(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  EE = _.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      u = ue(e, OE),
      l = xa(
        xa(xa({}, s), r && ng({ width: r })),
        {},
        C({}, bp, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === Cr,
      v = a === ei,
      p = function () {
        if (d) return "ascending";
        if (v) return "descending";
      },
      g = n ? "th" : "td";
    return _.createElement(
      g,
      ne({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": c }, u, {
        className: Q([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: xa(
          xa({}, l),
          {},
          { "--_17ckjys": or("var(--ds-text-subtle, ".concat("var(".concat(bp, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function xE(e, t, r) {
  return (
    (t = re(t)),
    tt(e, tb() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function tb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tb = function () {
    return !!e;
  })();
}
function CE(e) {
  return (function (t) {
    function r() {
      var n;
      be(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = xE(this, r, [].concat(o))),
        C(n, "state", { refWidth: 0, refHeight: 0 }),
        C(n, "innerRef", function (s) {
          s && !n.props.isRanking && (n.ref = s);
        }),
        C(n, "updateDimensions", function () {
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
      rt(r, t),
      me(r, [
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
var Ca = {},
  mp;
function PE() {
  if (mp) return Ca;
  ((mp = 1), Object.defineProperty(Ca, "__esModule", { value: !0 }), (Ca.default = void 0));
  var e = r(Rr()),
    t = r(Ri);
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
  return ((n.displayName = "ArrowDownIcon"), (Ca.default = n), Ca);
}
var RE = PE();
const AE = ur(RE);
var Pa = {},
  yp;
function IE() {
  if (yp) return Pa;
  ((yp = 1), Object.defineProperty(Pa, "__esModule", { value: !0 }), (Pa.default = void 0));
  var e = r(Rr()),
    t = r(Ri);
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
  return ((n.displayName = "ArrowUpIcon"), (Pa.default = n), Pa);
}
var jE = IE();
const TE = ur(jE);
var DE = "Escape";
function ME(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = _.useRef(!1),
    a = _.useCallback(
      function (i) {
        r || n.current || i.key !== DE || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = _.useCallback(function () {
      n.current = !1;
    }, []);
  _.useEffect(
    function () {
      if (!r)
        return Dr.bindAll(
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
function Wr(e) {
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
var FE = _.createContext(null),
  BE = _.createContext(null);
function NE() {
  var e = _.useContext(BE);
  return e;
}
function LE(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = _.useContext(FE),
    o = NE();
  _.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var Ta = { none: 0, small: 100, medium: 350, large: 700 },
  Ys = 0.5,
  UE = { none: Ta.none, small: Ta.small * Ys, medium: Ta.medium * Ys, large: Ta.large * Ys },
  qE = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  $E = function () {
    if (!qE()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  };
const zE = 5;
function N(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, zE) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
var VE = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  GE = function () {
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
      }, VE(t)),
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
  rb = { appear: !0, isExiting: !1 },
  nb = _.createContext(rb),
  _p = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rb;
    return S.createElement(nb.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  wp = function (t) {
    var r = [];
    return (
      _.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  HE = function (t, r) {
    for (var n = r.concat([]), a = WE(r), o = 0; o < t.length; o++) {
      var i = t[o],
        s = !a[i.key];
      s && n.splice(o + 1, 0, i);
    }
    return n;
  },
  WE = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  KE = function (t, r) {
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
  ab = _.memo(function (e) {
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
      v = l[1],
      p = _.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = H(p, 2),
      f = g[0],
      h = g[1];
    if (
      (_.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof s == "boolean")
    )
      return n;
    var b = H(s, 2),
      m = b[0],
      y = b[1],
      k = wp(m),
      w = wp(y);
    y !== n && c([y, n]);
    var O = KE(w, k),
      E = !!O.size,
      R = w;
    if ((E && (R = HE(w, k)), a))
      if (d.length) R = d;
      else {
        var I = R.filter(function (P) {
          return O.has(P.key);
        });
        I.length && v(I);
      }
    return (
      O.size
        ? (R = R.map(function (P) {
            var j = O.has(P.key);
            return _p(P, {
              appear: !0,
              isExiting: j,
              onFinish: j
                ? function () {
                    (O.delete(P.key), O.size === 0 && (c([null, n]), v([])));
                  }
                : void 0,
            });
          }))
        : (R = R.map(function (P) {
            return _p(P, f);
          })),
      R
    );
  }),
  JE = function () {
    return _.useContext(nb);
  };
ab.displayName = "ExitingPersistence";
function YE() {
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
var XE = _.createContext(function () {
    return { isReady: !0, delay: 0, ref: Ne };
  }),
  ZE = function () {
    var t = YE(),
      r = _.useContext(XE);
    return r(t);
  },
  QE = function (t) {
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
      v = d === void 0 ? "large" : d,
      p = ZE(),
      g = JE(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      m = GE(),
      y = u || !p.isReady,
      k = f ? 0 : p.delay,
      w = f ? "exiting" : "entering",
      O = _.useState(b),
      E = H(O, 2),
      R = E[0],
      I = E[1];
    return (
      _.useEffect(
        function () {
          var P = !1;
          if (!y) {
            if (!b) {
              l && l(w);
              return;
            }
            var j = function () {
              (w === "exiting" && h?.(), P || I(!1), l?.(w));
            };
            if ($E()) {
              j();
              return;
            }
            return (
              I(!0),
              m(j, f ? UE[v] : Ta[v] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [h, w, f, v, k, y, m],
      ),
      r(
        {
          ref: p.ref,
          className: R
            ? N([
                N(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && N(["_1y0ctrqk"]),
                v === "small" && N(["_5sag1yx9"]),
                v === "medium" && N(["_5sag1ttt"]),
                v === "large" && N(["_5sagpwmj"]),
                f && v === "small" && N(["_5sag14ed"]),
                f && v === "medium" && N(["_5sagluct"]),
                f && v === "large" && N(["_5sag1ttt"]),
                f && N(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && N(["_1pglp3kn"]),
                !f && n === "ease-out" && N(["_1pgldkwg"]),
                !f && n === "ease-in" && N(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && N(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && N(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && N(["_1pglannl"]),
                !f && n === "ease-in-out" && N(["_1pgl1fu8"]),
                f && n === "linear" && N(["_1pglp3kn"]),
                f && o === "ease-out" && N(["_1pgldkwg"]),
                f && o === "ease-in" && N(["_1pgl1nzg"]),
                f && o === "ease-in-40-out" && N(["_1pgl5y64"]),
                f && o === "ease-in-60-out" && N(["_1pgl1ddy"]),
                f && o === "ease-in-80-out" && N(["_1pglannl"]),
                f && o === "ease-in-out" && N(["_1pgl1fu8"]),
                ((!f && i === "fade-in") || (f && c === "fade-in")) && N(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && c === "fade-out")) && N(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && c === "zoom-in")) && N(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && c === "zoom-out")) && N(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && c === "slide-in-from-top")) &&
                  N(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && c === "slide-out-from-top")) &&
                  N(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && c === "slide-in-from-right")) &&
                  N(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && c === "slide-out-from-right")) &&
                  N(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && c === "slide-in-from-bottom")) &&
                  N(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && c === "slide-out-from-bottom")) &&
                  N(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && c === "slide-in-from-left")) &&
                  N(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && c === "slide-out-from-left")) &&
                  N(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && c === "fade-in-from-top")) &&
                  N(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && c === "fade-out-from-top")) &&
                  N(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && c === "fade-in-from-left")) &&
                  N(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && c === "fade-out-from-left")) &&
                  N(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && c === "fade-in-from-bottom")) &&
                  N(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && c === "fade-out-from-bottom")) &&
                  N(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && c === "fade-in-from-right")) &&
                  N(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && c === "fade-out-from-right")) &&
                  N(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && c === "fade-in-from-top-constant")) &&
                  N(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && c === "fade-out-from-top-constant")) &&
                  N(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && c === "fade-in-from-left-constant")) &&
                  N(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && c === "fade-out-from-left-constant")) &&
                  N(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && c === "fade-in-from-bottom-constant")) &&
                  N(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && c === "fade-out-from-bottom-constant")) &&
                  N(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && c === "fade-in-from-right-constant")) &&
                  N(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && c === "fade-out-from-right-constant")) &&
                  N(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  ex = { top: "bottom", bottom: "top", left: "right", right: "left" },
  tx = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      s = t.distance,
      c = s === void 0 ? "proportional" : s,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? ex[o] : void 0,
      v =
        i || d
          ? "fade-out-from-".concat(i || d).concat(c === "proportional" ? "" : "-constant")
          : "fade-out";
    return S.createElement(
      QE,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(c === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: v,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  rx = _.createContext();
_.createContext();
var nx = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  ax = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  ox = function (t, r) {
    if (typeof t == "function") return ax(t, r);
    t != null && (t.current = r);
  },
  kp = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  Op =
    typeof window < "u" && window.document && window.document.createElement
      ? _.useLayoutEffect
      : _.useEffect,
  ze = "top",
  vt = "bottom",
  ht = "right",
  Ve = "left",
  iu = "auto",
  fo = [ze, vt, ht, Ve],
  sn = "start",
  to = "end",
  ix = "clippingParents",
  ob = "viewport",
  Ra = "popper",
  sx = "reference",
  Sp = fo.reduce(function (e, t) {
    return e.concat([t + "-" + sn, t + "-" + to]);
  }, []),
  ib = [].concat(fo, [iu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + sn, t + "-" + to]);
  }, []),
  cx = "beforeRead",
  ux = "read",
  lx = "afterRead",
  dx = "beforeMain",
  fx = "main",
  px = "afterMain",
  vx = "beforeWrite",
  hx = "write",
  gx = "afterWrite",
  bx = [cx, ux, lx, dx, fx, px, vx, hx, gx];
function Bt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Pr(e) {
  var t = Qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function pt(e) {
  var t = Qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function su(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function mx(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !pt(o) ||
      !Bt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var s = a[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function yx(e) {
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
        !pt(a) ||
          !Bt(a) ||
          (Object.assign(a.style, s),
          Object.keys(o).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
const _x = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: mx,
  effect: yx,
  requires: ["computeStyles"],
};
function Dt(e) {
  return e.split("-")[0];
}
var kr = Math.max,
  oi = Math.min,
  cn = Math.round;
function jc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function sb() {
  return !/^((?!chrome|android).)*safari/i.test(jc());
}
function un(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    pt(e) &&
    ((a = (e.offsetWidth > 0 && cn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && cn(n.height) / e.offsetHeight) || 1));
  var i = Pr(e) ? Qe(e) : window,
    s = i.visualViewport,
    c = !sb() && r,
    u = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    l = (n.top + (c && s ? s.offsetTop : 0)) / o,
    d = n.width / a,
    v = n.height / o;
  return { width: d, height: v, top: l, right: u + d, bottom: l + v, left: u, x: u, y: l };
}
function cu(e) {
  var t = un(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function cb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && su(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function er(e) {
  return Qe(e).getComputedStyle(e);
}
function wx(e) {
  return ["table", "td", "th"].indexOf(Bt(e)) >= 0;
}
function dr(e) {
  return ((Pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Bi(e) {
  return Bt(e) === "html" ? e : e.assignedSlot || e.parentNode || (su(e) ? e.host : null) || dr(e);
}
function Ep(e) {
  return !pt(e) || er(e).position === "fixed" ? null : e.offsetParent;
}
function kx(e) {
  var t = /firefox/i.test(jc()),
    r = /Trident/i.test(jc());
  if (r && pt(e)) {
    var n = er(e);
    if (n.position === "fixed") return null;
  }
  var a = Bi(e);
  for (su(a) && (a = a.host); pt(a) && ["html", "body"].indexOf(Bt(a)) < 0; ) {
    var o = er(a);
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
function po(e) {
  for (var t = Qe(e), r = Ep(e); r && wx(r) && er(r).position === "static"; ) r = Ep(r);
  return r && (Bt(r) === "html" || (Bt(r) === "body" && er(r).position === "static"))
    ? t
    : r || kx(e) || t;
}
function uu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qa(e, t, r) {
  return kr(e, oi(t, r));
}
function Ox(e, t, r) {
  var n = qa(e, t, r);
  return n > r ? r : n;
}
function ub() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function lb(e) {
  return Object.assign({}, ub(), e);
}
function db(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var Sx = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    lb(typeof t != "number" ? t : db(t, fo))
  );
};
function Ex(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    s = Dt(r.placement),
    c = uu(s),
    u = [Ve, ht].indexOf(s) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = Sx(a.padding, r),
      v = cu(o),
      p = c === "y" ? ze : Ve,
      g = c === "y" ? vt : ht,
      f = r.rects.reference[l] + r.rects.reference[c] - i[c] - r.rects.popper[l],
      h = i[c] - r.rects.reference[c],
      b = po(o),
      m = b ? (c === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - h / 2,
      k = d[p],
      w = m - v[l] - d[g],
      O = m / 2 - v[l] / 2 + y,
      E = qa(k, O, w),
      R = c;
    r.modifiersData[n] = ((t = {}), (t[R] = E), (t.centerOffset = E - O), t);
  }
}
function xx(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (cb(t.elements.popper, a) && (t.elements.arrow = a)));
}
const Cx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ex,
  effect: xx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ln(e) {
  return e.split("-")[1];
}
var Px = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Rx(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: cn(r * a) / a || 0, y: cn(n * a) / a || 0 };
}
function xp(e) {
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
    v = i.x,
    p = v === void 0 ? 0 : v,
    g = i.y,
    f = g === void 0 ? 0 : g,
    h = typeof l == "function" ? l({ x: p, y: f }) : { x: p, y: f };
  ((p = h.x), (f = h.y));
  var b = i.hasOwnProperty("x"),
    m = i.hasOwnProperty("y"),
    y = Ve,
    k = ze,
    w = window;
  if (u) {
    var O = po(r),
      E = "clientHeight",
      R = "clientWidth";
    if (
      (O === Qe(r) &&
        ((O = dr(r)),
        er(O).position !== "static" &&
          s === "absolute" &&
          ((E = "scrollHeight"), (R = "scrollWidth"))),
      (O = O),
      a === ze || ((a === Ve || a === ht) && o === to))
    ) {
      k = vt;
      var I = d && O === w && w.visualViewport ? w.visualViewport.height : O[E];
      ((f -= I - n.height), (f *= c ? 1 : -1));
    }
    if (a === Ve || ((a === ze || a === vt) && o === to)) {
      y = ht;
      var P = d && O === w && w.visualViewport ? w.visualViewport.width : O[R];
      ((p -= P - n.width), (p *= c ? 1 : -1));
    }
  }
  var j = Object.assign({ position: s }, u && Px),
    U = l === !0 ? Rx({ x: p, y: f }, Qe(r)) : { x: p, y: f };
  if (((p = U.x), (f = U.y), c)) {
    var $;
    return Object.assign(
      {},
      j,
      (($ = {}),
      ($[k] = m ? "0" : ""),
      ($[y] = b ? "0" : ""),
      ($.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + f + "px)"
          : "translate3d(" + p + "px, " + f + "px, 0)"),
      $),
    );
  }
  return Object.assign(
    {},
    j,
    ((t = {}), (t[k] = m ? f + "px" : ""), (t[y] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function Ax(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    o = r.adaptive,
    i = o === void 0 ? !0 : o,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    u = {
      placement: Dt(t.placement),
      variation: ln(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      xp(
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
        xp(
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
const Ix = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ax, data: {} };
var xo = { passive: !0 };
function jx(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    c = Qe(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, xo);
      }),
    s && c.addEventListener("resize", r.update, xo),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, xo);
        }),
        s && c.removeEventListener("resize", r.update, xo));
    }
  );
}
const Tx = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: jx,
  data: {},
};
var Dx = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Lo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Dx[t];
  });
}
var Mx = { start: "end", end: "start" };
function Cp(e) {
  return e.replace(/start|end/g, function (t) {
    return Mx[t];
  });
}
function lu(e) {
  var t = Qe(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function du(e) {
  return un(dr(e)).left + lu(e).scrollLeft;
}
function Fx(e, t) {
  var r = Qe(e),
    n = dr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = sb();
    (u || (!u && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: o, height: i, x: s + du(e), y: c };
}
function Bx(e) {
  var t,
    r = dr(e),
    n = lu(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = kr(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = kr(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    s = -n.scrollLeft + du(e),
    c = -n.scrollTop;
  return (
    er(a || r).direction === "rtl" && (s += kr(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: c }
  );
}
function fu(e) {
  var t = er(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function fb(e) {
  return ["html", "body", "#document"].indexOf(Bt(e)) >= 0
    ? e.ownerDocument.body
    : pt(e) && fu(e)
      ? e
      : fb(Bi(e));
}
function $a(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = fb(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Qe(n),
    i = a ? [o].concat(o.visualViewport || [], fu(n) ? n : []) : n,
    s = t.concat(i);
  return a ? s : s.concat($a(Bi(i)));
}
function Tc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Nx(e, t) {
  var r = un(e, !1, t === "fixed");
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
function Pp(e, t, r) {
  return t === ob ? Tc(Fx(e, r)) : Pr(t) ? Nx(t, r) : Tc(Bx(dr(e)));
}
function Lx(e) {
  var t = $a(Bi(e)),
    r = ["absolute", "fixed"].indexOf(er(e).position) >= 0,
    n = r && pt(e) ? po(e) : e;
  return Pr(n)
    ? t.filter(function (a) {
        return Pr(a) && cb(a, n) && Bt(a) !== "body";
      })
    : [];
}
function Ux(e, t, r, n) {
  var a = t === "clippingParents" ? Lx(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    s = o.reduce(
      function (c, u) {
        var l = Pp(e, u, n);
        return (
          (c.top = kr(l.top, c.top)),
          (c.right = oi(l.right, c.right)),
          (c.bottom = oi(l.bottom, c.bottom)),
          (c.left = kr(l.left, c.left)),
          c
        );
      },
      Pp(e, i, n),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function pb(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Dt(n) : null,
    o = n ? ln(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case ze:
      c = { x: i, y: t.y - r.height };
      break;
    case vt:
      c = { x: i, y: t.y + t.height };
      break;
    case ht:
      c = { x: t.x + t.width, y: s };
      break;
    case Ve:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = a ? uu(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case sn:
        c[u] = c[u] - (t[l] / 2 - r[l] / 2);
        break;
      case to:
        c[u] = c[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return c;
}
function ro(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    s = r.boundary,
    c = s === void 0 ? ix : s,
    u = r.rootBoundary,
    l = u === void 0 ? ob : u,
    d = r.elementContext,
    v = d === void 0 ? Ra : d,
    p = r.altBoundary,
    g = p === void 0 ? !1 : p,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = lb(typeof h != "number" ? h : db(h, fo)),
    m = v === Ra ? sx : Ra,
    y = e.rects.popper,
    k = e.elements[g ? m : v],
    w = Ux(Pr(k) ? k : k.contextElement || dr(e.elements.popper), c, l, i),
    O = un(e.elements.reference),
    E = pb({ reference: O, element: y, placement: a }),
    R = Tc(Object.assign({}, y, E)),
    I = v === Ra ? R : O,
    P = {
      top: w.top - I.top + b.top,
      bottom: I.bottom - w.bottom + b.bottom,
      left: w.left - I.left + b.left,
      right: I.right - w.right + b.right,
    },
    j = e.modifiersData.offset;
  if (v === Ra && j) {
    var U = j[a];
    Object.keys(P).forEach(function ($) {
      var q = [ht, vt].indexOf($) >= 0 ? 1 : -1,
        G = [ze, vt].indexOf($) >= 0 ? "y" : "x";
      P[$] += U[G] * q;
    });
  }
  return P;
}
function qx(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    u = c === void 0 ? ib : c,
    l = ln(n),
    d = l
      ? s
        ? Sp
        : Sp.filter(function (g) {
            return ln(g) === l;
          })
      : fo,
    v = d.filter(function (g) {
      return u.indexOf(g) >= 0;
    });
  v.length === 0 && (v = d);
  var p = v.reduce(function (g, f) {
    return ((g[f] = ro(e, { placement: f, boundary: a, rootBoundary: o, padding: i })[Dt(f)]), g);
  }, {});
  return Object.keys(p).sort(function (g, f) {
    return p[g] - p[f];
  });
}
function $x(e) {
  if (Dt(e) === iu) return [];
  var t = Lo(e);
  return [Cp(e), t, Cp(t)];
}
function zx(e) {
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
        v = r.altBoundary,
        p = r.flipVariations,
        g = p === void 0 ? !0 : p,
        f = r.allowedAutoPlacements,
        h = t.options.placement,
        b = Dt(h),
        m = b === h,
        y = c || (m || !g ? [Lo(h)] : $x(h)),
        k = [h].concat(y).reduce(function (_e, T) {
          return _e.concat(
            Dt(T) === iu
              ? qx(t, {
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
        E = new Map(),
        R = !0,
        I = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var j = k[P],
        U = Dt(j),
        $ = ln(j) === sn,
        q = [ze, vt].indexOf(U) >= 0,
        G = q ? "width" : "height",
        B = ro(t, { placement: j, boundary: l, rootBoundary: d, altBoundary: v, padding: u }),
        W = q ? ($ ? ht : Ve) : $ ? vt : ze;
      w[G] > O[G] && (W = Lo(W));
      var K = Lo(W),
        z = [];
      if (
        (o && z.push(B[U] <= 0),
        s && z.push(B[W] <= 0, B[K] <= 0),
        z.every(function (_e) {
          return _e;
        }))
      ) {
        ((I = j), (R = !1));
        break;
      }
      E.set(j, z);
    }
    if (R)
      for (
        var F = g ? 3 : 1,
          se = function (T) {
            var ke = k.find(function (Le) {
              var pe = E.get(Le);
              if (pe)
                return pe.slice(0, T).every(function (Ie) {
                  return Ie;
                });
            });
            if (ke) return ((I = ke), "break");
          },
          X = F;
        X > 0;
        X--
      ) {
        var we = se(X);
        if (we === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const Vx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: zx,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Rp(e, t, r) {
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
function Ap(e) {
  return [ze, ht, vt, Ve].some(function (t) {
    return e[t] >= 0;
  });
}
function Gx(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = ro(t, { elementContext: "reference" }),
    s = ro(t, { altBoundary: !0 }),
    c = Rp(i, n),
    u = Rp(s, a, o),
    l = Ap(c),
    d = Ap(u);
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
const Hx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Gx,
};
function Wx(e, t, r) {
  var n = Dt(e),
    a = [Ve, ze].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * a),
    [Ve, ht].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function Kx(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = ib.reduce(function (l, d) {
      return ((l[d] = Wx(d, t.rects, o)), l);
    }, {}),
    s = i[t.placement],
    c = s.x,
    u = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const Jx = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Kx };
function Yx(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = pb({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Xx = { name: "popperOffsets", enabled: !0, phase: "read", fn: Yx, data: {} };
function Zx(e) {
  return e === "x" ? "y" : "x";
}
function Qx(e) {
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
    v = r.tether,
    p = v === void 0 ? !0 : v,
    g = r.tetherOffset,
    f = g === void 0 ? 0 : g,
    h = ro(t, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }),
    b = Dt(t.placement),
    m = ln(t.placement),
    y = !m,
    k = uu(b),
    w = Zx(k),
    O = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    R = t.rects.popper,
    I = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (O) {
    if (o) {
      var $,
        q = k === "y" ? ze : Ve,
        G = k === "y" ? vt : ht,
        B = k === "y" ? "height" : "width",
        W = O[k],
        K = W + h[q],
        z = W - h[G],
        F = p ? -R[B] / 2 : 0,
        se = m === sn ? E[B] : R[B],
        X = m === sn ? -R[B] : -E[B],
        we = t.elements.arrow,
        _e = p && we ? cu(we) : { width: 0, height: 0 },
        T = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ub(),
        ke = T[q],
        Le = T[G],
        pe = qa(0, E[B], _e[B]),
        Ie = y ? E[B] / 2 - F - pe - ke - P.mainAxis : se - pe - ke - P.mainAxis,
        ve = y ? -E[B] / 2 + F + pe + Le + P.mainAxis : X + pe + Le + P.mainAxis,
        Ue = t.elements.arrow && po(t.elements.arrow),
        fr = Ue ? (k === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0) : 0,
        tr = ($ = j?.[k]) != null ? $ : 0,
        nt = W + Ie - tr - fr,
        De = W + ve - tr,
        at = qa(p ? oi(K, nt) : K, W, p ? kr(z, De) : z);
      ((O[k] = at), (U[k] = at - W));
    }
    if (s) {
      var Ot,
        We = k === "x" ? ze : Ve,
        Me = k === "x" ? vt : ht,
        Fe = O[w],
        ae = w === "y" ? "height" : "width",
        Ce = Fe + h[We],
        Pe = Fe - h[Me],
        ot = [ze, Ve].indexOf(b) !== -1,
        Lt = (Ot = j?.[w]) != null ? Ot : 0,
        ge = ot ? Ce : Fe - E[ae] - R[ae] - Lt + P.altAxis,
        Ut = ot ? Fe + E[ae] + R[ae] - Lt - P.altAxis : Pe,
        Ke = p && ot ? Ox(ge, Fe, Ut) : qa(p ? ge : Ce, Fe, p ? Ut : Pe);
      ((O[w] = Ke), (U[w] = Ke - Fe));
    }
    t.modifiersData[n] = U;
  }
}
const eC = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Qx,
  requiresIfExists: ["offset"],
};
function tC(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function rC(e) {
  return e === Qe(e) || !pt(e) ? lu(e) : tC(e);
}
function nC(e) {
  var t = e.getBoundingClientRect(),
    r = cn(t.width) / e.offsetWidth || 1,
    n = cn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function aC(e, t, r) {
  r === void 0 && (r = !1);
  var n = pt(t),
    a = pt(t) && nC(t),
    o = dr(t),
    i = un(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Bt(t) !== "body" || fu(o)) && (s = rC(t)),
      pt(t) ? ((c = un(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : o && (c.x = du(o))),
    {
      x: i.left + s.scrollLeft - c.x,
      y: i.top + s.scrollTop - c.y,
      width: i.width,
      height: i.height,
    }
  );
}
function oC(e) {
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
function iC(e) {
  var t = oC(e);
  return bx.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function sC(e) {
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
function cC(e) {
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
var Ip = { placement: "bottom", modifiers: [], strategy: "absolute" };
function jp() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function uC(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? Ip : a;
  return function (s, c, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ip, o),
        modifiersData: {},
        elements: { reference: s, popper: c },
        attributes: {},
        styles: {},
      },
      d = [],
      v = !1,
      p = {
        state: l,
        setOptions: function (b) {
          var m = typeof b == "function" ? b(l.options) : b;
          (f(),
            (l.options = Object.assign({}, o, l.options, m)),
            (l.scrollParents = {
              reference: Pr(s) ? $a(s) : s.contextElement ? $a(s.contextElement) : [],
              popper: $a(c),
            }));
          var y = iC(cC([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = y.filter(function (k) {
              return k.enabled;
            })),
            g(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!v) {
            var b = l.elements,
              m = b.reference,
              y = b.popper;
            if (jp(m, y)) {
              ((l.rects = {
                reference: aC(m, po(y), l.options.strategy === "fixed"),
                popper: cu(y),
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
                  E = w.options,
                  R = E === void 0 ? {} : E,
                  I = w.name;
                typeof O == "function" &&
                  (l = O({ state: l, options: R, name: I, instance: p }) || l);
              }
            }
          }
        },
        update: sC(function () {
          return new Promise(function (h) {
            (p.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (v = !0));
        },
      };
    if (!jp(s, c)) return p;
    p.setOptions(u).then(function (h) {
      !v && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var b = h.name,
          m = h.options,
          y = m === void 0 ? {} : m,
          k = h.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: p, options: y }),
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
    return p;
  };
}
var lC = [Tx, Xx, Ix, _x, Jx, Vx, eC, Cx, Hx],
  dC = uC({ defaultModifiers: lC }),
  Xs,
  Tp;
function fC() {
  if (Tp) return Xs;
  Tp = 1;
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
    (Xs = function (i, s) {
      try {
        return a(i, s);
      } catch (c) {
        if ((c.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw c;
      }
    }),
    Xs
  );
}
var pC = fC();
const vC = ur(pC);
var hC = [],
  gC = function (t, r, n) {
    n === void 0 && (n = {});
    var a = _.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || hC,
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
          fn: function (p) {
            var g = p.state,
              f = Object.keys(g.elements);
            si.flushSync(function () {
              c({
                styles: kp(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: kp(
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
          var v = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return vC(a.current, v) ? a.current || v : ((a.current = v), v);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = _.useRef();
    return (
      Op(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Op(
        function () {
          if (!(t == null || r == null)) {
            var v = n.createPopper || dC,
              p = v(t, r, l);
            return (
              (d.current = p),
              function () {
                (p.destroy(), (d.current = null));
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
  bC = function () {},
  mC = function () {
    return Promise.resolve(null);
  },
  yC = [];
function _C(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? yC : o,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = _.useContext(rx),
    v = _.useState(null),
    p = v[0],
    g = v[1],
    f = _.useState(null),
    h = f[0],
    b = f[1];
  _.useEffect(
    function () {
      ox(u, p);
    },
    [u, p],
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
    y = gC(s || d, p, m),
    k = y.state,
    w = y.styles,
    O = y.forceUpdate,
    E = y.update,
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
          forceUpdate: O || bC,
          update: E || mC,
        };
      },
      [g, b, r, k, w, E, O],
    );
  return nx(l)(R);
}
function wC(e) {
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
            v = d === void 0 ? { x: 0, y: 0 } : d,
            p = c.placement.split("-"),
            g = H(p, 1),
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
            f === "bottom" && (m = l.height - v.y - t),
            f === "left" && (b = c.rects.reference.x + h.x - t),
            f === "right" && (b = l.width - v.x - t),
            (c.styles.popper.maxWidth = "".concat(b, "px")),
            (c.styles.popper.maxHeight = "".concat(m, "px")));
        }
      },
    },
  ];
}
var Dc = 5,
  kC = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Dc,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function OC() {
  return null;
}
var SC = [0, 8];
function EC(e) {
  var t = e.children,
    r = t === void 0 ? OC : t,
    n = e.offset,
    a = n === void 0 ? SC : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    v = e.shouldFitViewport,
    p = v === void 0 ? !1 : v,
    g = H(a, 2),
    f = g[0],
    h = g[1],
    b = _.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: Dc, rootBoundary: p ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = p ? wC({ viewportPadding: Dc }) : [];
        return [].concat(kC, [y, k], Re(w));
      },
      [f, h, p],
    ),
    m = _.useMemo(
      function () {
        return u == null ? b : [].concat(Re(b), Re(u));
      },
      [b, u],
    );
  return S.createElement(_C, { modifiers: m, placement: i, strategy: d, referenceElement: c }, r);
}
var vb = "atlaskit-portal-container",
  hb = "body > .atlaskit-portal-container",
  gb = "atlaskit-portal",
  xC = function (t) {
    var r = document.createElement("div");
    return ((r.className = gb), (r.style.zIndex = "".concat(t)), r);
  },
  bb = function () {
    return document.body;
  },
  mb = function () {
    var t = document.querySelector(hb);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = vb),
        (n.style.display = "flex"),
        (r = bb()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  CC = function (t) {
    mb().removeChild(t);
  },
  PC = function (t) {
    t.parentElement || mb().appendChild(t);
  },
  yb = function () {
    return document !== void 0;
  },
  RC = function (t) {
    if (yb()) {
      var r = document.createElement("div");
      return ((r.className = gb), (r.style.zIndex = "".concat(t)), r);
    }
  },
  AC = function () {
    if (yb()) {
      var t = document.querySelector(hb);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = vb),
          (n.style.display = "flex"),
          (r = bb()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function IC(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useMemo(
      function () {
        return xC(t);
      },
      [t],
    ),
    a = Ig();
  return (
    PC(n),
    _.useEffect(
      function () {
        return function () {
          CC(n);
        };
      },
      [n],
    ),
    si.createPortal(
      a && J("platform_dst_subtree_theming") ? S.createElement(Ag, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var _b = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function jC(e) {
  var t = e.zIndex,
    r = e.children,
    n = _.useState(null),
    a = H(n, 2),
    o = a[0],
    i = a[1],
    s = Ig();
  _b(
    function () {
      var u = RC(t);
      i(u);
      var l = AC();
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
    _.Suspense,
    { fallback: null },
    s && J("platform_dst_subtree_theming") ? S.createElement(Ag, { defaultColorMode: s }, r) : r,
  );
  return o ? si.createPortal(c, o) : null;
}
var TC = function (t) {
    var r = _.useState(!1),
      n = H(r, 2),
      a = n[0],
      o = n[1],
      i = _.useState(function () {
        return t === "layoutEffect" ? _b : _.useEffect;
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
  DC = "akPortalMount",
  MC = "akPortalUnmount",
  Dp = {
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
  FC = function (t) {
    return Dp.hasOwnProperty(t) ? Dp[t] : null;
  },
  BC = function (t, r) {
    var n = { layer: FC(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Mp(e, t) {
  var r = BC(e, t);
  window.dispatchEvent(r);
}
var NC = function (t) {
  var r = Number(t);
  _.useEffect(
    function () {
      return (
        Mp(DC, r),
        function () {
          Mp(MC, r);
        }
      );
    },
    [r],
  );
};
function LC(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = TC(o);
  return (
    NC(r),
    J("platform_design_system_team_portal_logic_r18_fix")
      ? S.createElement(jC, { zIndex: r }, n)
      : i
        ? S.createElement(IC, { zIndex: r }, n)
        : null
  );
}
var UC = {
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
  za = new Set(),
  no = null;
function Fp() {
  if (!no) {
    no = Dr.bindAll(window, [
      { type: "dragend", listener: Zs },
      { type: "pointerdown", listener: Zs },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Zs();
          };
        })(),
      },
    ]);
    var e = Array.from(za);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Zs() {
  var e;
  ((e = no) === null || e === void 0 || e(), (no = null));
  var t = Array.from(za);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function qC() {
  return Dr.bindAll(window, [
    { type: "dragstart", listener: Fp },
    { type: "dragenter", listener: Fp },
  ]);
}
var Co = null;
function $C(e) {
  return (
    Co || (Co = qC()),
    za.add(e),
    e.onRegister({ isDragging: no !== null }),
    function () {
      if ((za.delete(e), za.size === 0)) {
        var r;
        ((r = Co) === null || r === void 0 || r(), (Co = null));
      }
    }
  );
}
var Va = null;
function Da() {
  Va != null && (window.clearTimeout(Va), (Va = null));
}
function Bp(e, t) {
  (Da(),
    (Va = window.setTimeout(function () {
      ((Va = null), e());
    }, t)));
}
var Et = null;
function zC(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(Et && Et.entry === e);
  }
  function n() {
    r() && (Da(), (Et = null));
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
        ((t = "shown"), Da());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Da(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function s(p) {
    var g = p.isImmediate;
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
          Bp(function () {
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
    var p = J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? e.shouldAlwaysFadeIn : !1,
      g = !!(Et && Et.isVisible()) && !p;
    (Et && (Da(), Et.entry.hide({ isImmediate: !0 }), Et.entry.done(), (Et = null)),
      (Et = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: g }));
    }
    if (g) {
      f();
      return;
    }
    ((t = "waiting-to-show"), Bp(f, e.delay));
  }
  d();
  var v = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: s,
    finishHideAnimation: c,
    mousePosition: J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return v;
}
function VC(e, t) {
  var r = FO();
  return t ? "".concat(r(e)) : void 0;
}
const GC = 5;
function ii(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, GC) : o;
      t[i] = o;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
var Np = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  HC = function (t) {
    var r = t.shortcut;
    return _.createElement(
      "div",
      { className: ii([Np.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return _.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: ii([Np.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  wb = _.forwardRef(function (t, r) {
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
          className: ii(["_80om73ad", a]),
          onMouseOut: c,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": s,
          id: l,
        },
        o,
        d && _.createElement(HC, { shortcut: d }),
      ),
    );
  });
wb.displayName = "TooltipPrimitive";
var Lp = {
    base: "_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  kb = _.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      s = t.placement,
      c = t.testId,
      u = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      v = t.shortcut;
    return _.createElement(
      wb,
      {
        ref: r,
        style: n,
        className: ii([Lp.base, i && Lp.truncate, a]),
        placement: s,
        testId: c,
        id: d,
        onMouseOut: u,
        onMouseOver: l,
        shortcut: v,
      },
      o,
    );
  });
kb.displayName = "TooltipContainer";
function Up(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function WC(e, t) {
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
function qp(e, t) {
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
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var KC = UC.tooltip(),
  $p = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.14.5" },
  JC = { top: "bottom", bottom: "top", left: "right", right: "left" },
  YC = function (t) {
    return t.split("-")[0];
  };
function XC(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    u = e.component,
    l = u === void 0 ? kb : u,
    d = e.tag,
    v = d === void 0 ? "div" : d,
    p = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Ne : h,
    m = e.onHide,
    y = m === void 0 ? Ne : m,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    O = w === void 0 ? !1 : w,
    E = e.hideTooltipOnMouseDown,
    R = E === void 0 ? !1 : E,
    I = e.analyticsContext,
    P = e.strategy,
    j = P === void 0 ? "fixed" : P,
    U = e.ignoreTooltipPointerEvents,
    $ = U === void 0 ? !1 : U,
    q = e.isScreenReaderAnnouncementDisabled,
    G = q === void 0 ? !1 : q,
    B = e.shortcut,
    W = e.UNSAFE_shouldAlwaysFadeIn,
    K = W === void 0 ? !1 : W,
    z = e.UNSAFE_shouldRenderToParent,
    F = z === void 0 ? !1 : z,
    se = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    X = se ? o : n,
    we = wf(Kr({ fn: b, action: "displayed", analyticsData: I }, $p)),
    _e = wf(Kr({ fn: y, action: "hidden", analyticsData: I }, $p)),
    T = _.useRef(null),
    ke = _.useState("hide"),
    Le = H(ke, 2),
    pe = Le[0],
    Ie = Le[1],
    ve = _.useRef(null),
    Ue = _.useRef(null),
    fr = function (de) {
      ((Ue.current = de), (ve.current = de ? de.firstElementChild : null));
    },
    tr = _.useCallback(function (L) {
      ve.current = L;
    }, []),
    nt = Wr(pe),
    De = Wr(we),
    at = Wr(_e),
    Ot = Wr(f),
    We = Wr(k),
    Me = _.useRef(!1),
    Fe = Wr(K),
    ae = _.useCallback(function (L) {
      ((T.current = L), (Me.current = !1));
    }, []),
    Ce = _.useCallback(
      function () {
        T.current &&
          (Me.current && at.current(), (T.current = null), (Me.current = !1), Ie("hide"));
      },
      [at],
    ),
    Pe = _.useCallback(
      function () {
        T.current && (T.current.abort(), Me.current && at.current(), (T.current = null));
      },
      [at],
    );
  _.useEffect(
    function () {
      return function () {
        T.current && Pe();
      };
    },
    [Pe],
  );
  var ot = _.useRef(!1);
  _.useEffect(function () {
    return $C({
      onRegister: function (de) {
        var zt = de.isDragging;
        ot.current = zt;
      },
      onDragStart: function () {
        var de;
        ((de = T.current) === null || de === void 0 || de.requestHide({ isImmediate: !0 }),
          (ot.current = !0));
      },
      onDragEnd: function () {
        ot.current = !1;
      },
    });
  }, []);
  var Lt = _.useCallback(
      function (L) {
        var de;
        if (!ot.current) {
          if ((T.current && !T.current.isActive() && Pe(), T.current && T.current.isActive())) {
            T.current.keep();
            return;
          }
          if (!(We.current && !((de = We.current) !== null && de !== void 0 && de.call(We)))) {
            var zt = {
                source: L,
                delay: Ot.current,
                show: function (Fr) {
                  var bn = Fr.isImmediate;
                  (Me.current || ((Me.current = !0), De.current()),
                    Ie(bn ? "show-immediate" : "fade-in"));
                },
                hide: function (Fr) {
                  var bn = Fr.isImmediate;
                  Ie(bn ? "hide" : "before-fade-out");
                },
                done: Ce,
                shouldAlwaysFadeIn: J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? Fe.current
                  : !1,
              },
              pr = zC(zt);
            ae(pr);
          }
        }
      },
      [We, Ot, Ce, ae, Pe, De, Fe],
    ),
    ge = _.useCallback(
      function () {
        var L;
        (L = T.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [T],
    );
  (ME({ onClose: ge, isDisabled: pe === "hide" || pe === "fade-out" }),
    _.useEffect(
      function () {
        if (pe === "hide") return Ne;
        pe === "before-fade-out" && Ie("fade-out");
        var L = Dr.bind(window, {
          type: "scroll",
          listener: function () {
            T.current && T.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [pe],
    ));
  var Ut = _.useCallback(
      function () {
        R && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [R],
    ),
    Ke = _.useCallback(
      function () {
        O && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [O],
    ),
    qt = _.useCallback(
      function (L) {
        if (!(Ue.current && L.target === Ue.current) && !L.defaultPrevented) {
          L.preventDefault();
          var de = se
            ? {
                type: "mouse",
                mouse: J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : Up({ left: L.clientX, top: L.clientY }),
                clientX: L.clientX,
                clientY: L.clientY,
              }
            : { type: "keyboard" };
          Lt(de);
        }
      },
      [se, Lt],
    ),
    hn = _.useCallback(function (L) {
      (Ue.current && L.target === Ue.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), T.current && T.current.requestHide({ isImmediate: !1 }));
    }, []),
    $t = se
      ? function (L) {
          var de;
          (de = T.current) !== null &&
            de !== void 0 &&
            de.isActive() &&
            (J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (T.current.mousePosition = Up({ left: L.clientX, top: L.clientY })),
            (T.current.mousePos = { clientX: L.clientX, clientY: L.clientY }));
        }
      : void 0,
    Ni = _.useCallback(function () {
      if (T.current && T.current.isActive()) {
        T.current.keep();
        return;
      }
    }, []),
    Tb = _.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        Lt({ type: "keyboard" });
      },
      [Lt],
    ),
    Db = _.useCallback(function () {
      T.current && T.current.requestHide({ isImmediate: !1 });
    }, []),
    Mb = _.useCallback(
      function (L) {
        L === "exiting" &&
          nt.current === "fade-out" &&
          T.current &&
          T.current.finishHideAnimation();
      },
      [nt],
    ),
    Fb = v,
    Li = pe !== "hide" && !!i,
    vu = !G && Li,
    hu = pe !== "hide" && pe !== "fade-out",
    Bb = _.useCallback(function () {
      var L;
      (L = T.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  LE({ isOpen: Li && hu, onClose: Bb });
  var gu = function () {
      var de, zt;
      if (
        se &&
        (de = T.current) !== null &&
        de !== void 0 &&
        de.mousePos &&
        ve.current &&
        J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return WC(T.current.mousePos, { targetElement: ve.current, tooltipPosition: n });
      if (
        se &&
        (zt = T.current) !== null &&
        zt !== void 0 &&
        zt.mousePosition &&
        !J("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var pr;
        return (pr = T.current) === null || pr === void 0 ? void 0 : pr.mousePosition;
      }
      return ve.current || void 0;
    },
    gn = VC("tooltip", vu),
    Ui = {
      onMouseOver: qt,
      onMouseOut: hn,
      onMouseMove: $t,
      onMouseDown: Ut,
      onClick: Ke,
      onFocus: Tb,
      onBlur: Db,
    };
  p && (Ui["data-testid"] = "".concat(p, "--container"));
  var bu = typeof t == "function";
  _.useEffect(
    function () {
      if (!bu) {
        var L = ve.current;
        if (!(!L || !gn))
          return (
            L.setAttribute("aria-describedby", gn),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [bu, gn],
  );
  var mu = vu
      ? S.createElement(
          "span",
          { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: gn },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    Nb = F && J("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? _.Fragment : ZC;
  return S.createElement(
    S.Fragment,
    null,
    typeof t == "function"
      ? S.createElement(
          S.Fragment,
          null,
          t(Kr(Kr({}, Ui), {}, { "aria-describedby": gn, ref: tr })),
          mu,
        )
      : S.createElement(Fb, ne({}, Ui, { ref: fr, role: "presentation" }), t, mu),
    Li
      ? S.createElement(
          Nb,
          null,
          S.createElement(EC, { placement: X, referenceElement: gu(), strategy: j }, function (L) {
            var de = L.ref,
              zt = L.style,
              pr = L.update,
              qi = L.placement,
              Fr = se ? void 0 : JC[YC(qi)];
            return S.createElement(
              ab,
              { appear: !0 },
              hu &&
                S.createElement(
                  tx,
                  {
                    distance: "constant",
                    entranceDirection: Fr,
                    exitDirection: Fr,
                    onFinish: Mb,
                    duration: pe !== "show-immediate" ? "medium" : "none",
                  },
                  function (bn) {
                    var Lb = bn.className;
                    return S.createElement(
                      l,
                      {
                        ref: de,
                        className: "Tooltip ".concat(Lb),
                        style: Kr(Kr({}, zt), $ && { pointerEvents: "none" }),
                        truncate: c,
                        placement: X,
                        testId: gu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: hn,
                        onMouseOver: Ni,
                        shortcut: B,
                      },
                      typeof i == "function" ? i({ update: pr }) : i,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var ZC = function (t) {
    var r = t.children;
    return S.createElement(LC, { zIndex: KC }, r);
  },
  QC = [
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
  Aa = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  zp = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c8wadc _syazazsu _k48pwu06" },
  Ob = function (t) {
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
      v = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      g = p === void 0 ? "Sort descending" : p,
      f = t.buttonAriaRoleDescription,
      h = f === void 0 ? "Sort button" : f,
      b = t.isIconOnlyHeader,
      m = ue(t, QC),
      y = _.useState(!1),
      k = H(y, 2),
      w = k[0],
      O = k[1],
      E = _.useState(!1),
      R = H(E, 2),
      I = R[0],
      P = R[1],
      j = u === l || s !== void 0,
      U = w || j || I,
      $ = U && b,
      q = !b || U || (b && !I),
      G = _.useCallback(
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
      W = _.useCallback(
        function () {
          O(!0);
        },
        [O],
      ),
      K = _.useCallback(
        function () {
          O(!1);
        },
        [O],
      ),
      z = S.createElement(
        Ai,
        { xcss: zp.headCellContainer, onMouseEnter: W, onMouseLeave: K, onFocus: G, onBlur: B },
        S.createElement(
          XC,
          { content: s === Cr ? v : g },
          S.createElement(
            hg,
            { onClick: c, xcss: Aa.buttonWrapper, "aria-roledescription": h },
            S.createElement(
              ni,
              { xcss: $ ? Aa.hideIconHeaderWrapper : Aa.visibleHeaderWrapper },
              S.createElement("span", { className: Q([zp.text]) }, r),
            ),
            q &&
              S.createElement(
                ni,
                { xcss: U ? Aa.sortIconVisibleWrapper : Aa.sortIconHiddenWrapper },
                s === Cr
                  ? S.createElement(TE, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : S.createElement(AE, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return S.createElement(
      EE,
      ne(
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
  eP = ["isRanking", "refHeight", "refWidth"];
function tP(e, t, r) {
  return (
    (t = re(t)),
    tt(e, Sb() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function Sb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sb = function () {
    return !!e;
  })();
}
var rP = (function (e) {
    function t() {
      return (be(this, t), tP(this, t, arguments));
    }
    return (
      rt(t, e),
      me(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              a = n.isRanking;
            n.refHeight;
            var o = n.refWidth,
              i = ue(n, eP),
              s = N0(a, o);
            return S.createElement(Ob, ne({ inlineStyles: s }, i));
          },
        },
      ])
    );
  })(S.Component),
  nP = CE(rP),
  aP = ["cells"],
  oP = [
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
function iP(e, t, r) {
  return (
    (t = re(t)),
    tt(e, Eb() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function Eb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Eb = function () {
    return !!e;
  })();
}
var sP = (function (e) {
    function t(r) {
      var n;
      return (be(this, t), (n = iP(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      rt(t, e),
      me(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Xo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Xo(n.sortKey, n.head);
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
              v = a.testId,
              p = this.state.activeSortButtonId;
            if (!o) return null;
            var g = d ? nP : Ob,
              f = o.cells,
              h = ue(o, aP);
            return S.createElement(
              SE,
              ne({}, h, { isRanking: l, testId: v && "".concat(v, "--head") }),
              S.createElement(
                "tr",
                null,
                f.map(function (b, m) {
                  var y = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    O = b.content,
                    E = b.descendingSortTooltip,
                    R = b.isIconOnlyHeader,
                    I = b.isSortable,
                    P = b.key,
                    j = b.shouldTruncate,
                    U = b.testId,
                    $ = b.width,
                    q = ue(b, oP),
                    G = "head-cell-".concat(m),
                    B = function () {
                      (n.setState({ activeSortButtonId: G }), I && u(b)());
                    };
                  return S.createElement(
                    g,
                    ne(
                      {
                        colSpan: w,
                        content: O,
                        isFixedSize: c,
                        isIconOnlyHeader: R,
                        isSortable: !!I,
                        isRanking: l,
                        key: P || m,
                        headCellId: G,
                        activeSortButtonId: p,
                        onClick: B,
                        testId: U || v,
                        shouldTruncate: j,
                        sortOrder: P === i ? s : void 0,
                        width: $,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: E,
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
  })(S.Component),
  cP = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function uP(e) {
  switch (e) {
    case ei:
      return Cr;
    case Cr:
      return ei;
    default:
      return e;
  }
}
var lP = function (t) {
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
      v = t.label,
      p = t.isLoading,
      g = p === void 0 ? !1 : p,
      f = t.isFixedSize,
      h = f === void 0 ? !1 : f,
      b = t.rowsPerPage,
      m = b === void 0 ? 1 / 0 : b,
      y = t.onSetPage,
      k = y === void 0 ? Ne : y,
      w = t.onSort,
      O = w === void 0 ? Ne : w,
      E = t.page,
      R = E === void 0 ? 1 : E,
      I = t.emptyView,
      P = t.isRankable,
      j = P === void 0 ? !1 : P,
      U = t.isRankingDisabled,
      $ = U === void 0 ? !1 : U,
      q = t.onRankStart,
      G = q === void 0 ? Ne : q,
      B = t.onRankEnd,
      W = B === void 0 ? Ne : B,
      K = t.loadingSpinnerSize,
      z = t.paginationi18n,
      F =
        z === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : z,
      se = _.useState(!1),
      X = H(se, 2),
      we = X[0],
      _e = X[1],
      T = _.useRef(null),
      ke = an({
        fn: O,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      }),
      Le = an({
        fn: W,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "18.3.18",
      });
    _.useEffect(
      function () {
        (Xo(i, n), B0(n));
      },
      [i, n],
    );
    var pe = function (Ce) {
        return function () {
          var Pe = Ce.key;
          if (Pe) {
            if (ke && j && Pe === i && s === ei) {
              ke({ key: null, sortOrder: null, item: Ce });
              return;
            }
            var ot = Pe !== i ? Cr : uP(s);
            ke && ke({ key: Pe, item: Ce, sortOrder: ot });
          }
        };
      },
      Ie = function (Ce, Pe) {
        k(Ce, Pe);
      },
      ve = function (Ce) {
        (_e(!0), G(Ce));
      },
      Ue = function (Ce) {
        (_e(!1), Le(Ce));
      },
      fr = function () {
        return K || (Uh(o || [], R, m).length > 2 ? ti : o1);
      },
      tr = function () {
        return g ? S.createElement(d1, { testId: l }) : I && S.createElement(f1, { testId: l }, I);
      },
      nt = o && o.length,
      De,
      at = !1;
    (d && Number.isInteger(d) && m && nt && nt <= d
      ? ((De = Math.ceil(d / m)), (at = !0))
      : (De = nt && m ? Math.ceil(nt / m) : 0),
      (De = De < 1 ? 1 : De));
    var Ot = R > De ? De : R,
      We = !!nt,
      Me = fr(),
      Fe = tr();
    return S.createElement(
      S.Fragment,
      null,
      S.createElement(
        ug,
        {
          isLoading: g && We,
          spinnerSize: Me,
          targetRef: function () {
            return T.current;
          },
          testId: l,
          loadingLabel: c,
        },
        S.createElement(
          c1,
          { isFixedSize: h, "aria-label": v, hasDataRow: We, testId: l, isLoading: g },
          !!r && S.createElement(u1, null, r),
          n &&
            S.createElement(sP, {
              head: n,
              onSort: pe,
              sortKey: i,
              sortOrder: s,
              isRanking: we,
              isRankable: j,
              testId: l,
            }),
          We &&
            S.createElement(fP, {
              ref: T,
              highlightedRowIndex: a,
              rows: o,
              head: n,
              sortKey: i,
              sortOrder: s,
              rowsPerPage: m,
              page: Ot,
              isFixedSize: h || !1,
              onPageRowsUpdate: u,
              isTotalPagesControlledExternally: at,
              testId: l,
              isRankable: j,
              isRanking: we,
              onRankStart: ve,
              onRankEnd: Ue,
              isRankingDisabled: $ || g || !1,
            }),
        ),
      ),
      De <= 1
        ? null
        : S.createElement(
            l1,
            { testId: l },
            S.createElement(wE, {
              value: Ot,
              onChange: Ie,
              total: De,
              i18n: F,
              isDisabled: g,
              testId: l,
            }),
          ),
      !We &&
        Fe &&
        S.createElement(sg, { isLoading: g, spinnerSize: ti, testId: l, loadingLabel: c }, Fe),
    );
  },
  dP = _.lazy(function () {
    return Je(
      () => import("./body-dAzMf0vo.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  fP = _.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      s = t.onRankEnd,
      c = t.isRankingDisabled,
      u = ue(t, cP),
      l = a && !u.sortKey,
      d = _.useState(!1),
      v = H(d, 2),
      p = v[0],
      g = v[1];
    _.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = S.createElement(C1, ne({ ref: r }, u));
    return l && p
      ? S.createElement(
          R1,
          { fallback: f },
          S.createElement(
            _.Suspense,
            { fallback: f },
            S.createElement(
              dP,
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
function pP(e, t, r) {
  return (
    (t = re(t)),
    tt(e, xb() ? Reflect.construct(t, r || [], re(e).constructor) : t.apply(e, r))
  );
}
function xb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (xb = function () {
    return !!e;
  })();
}
var Cb = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = pP(this, t, [].concat(a))),
      C(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      C(r, "onSetPageHandler", function (i, s) {
        var c = r.props.onSetPage;
        c && (c(i, s), r.setState({ page: i }));
      }),
      C(r, "onSortHandler", function (i, s) {
        var c = i.key,
          u = i.item,
          l = i.sortOrder,
          d = r.props.onSort;
        d && (d({ key: c, item: u, sortOrder: l }, s), r.setState({ sortKey: c, sortOrder: l }));
      }),
      C(r, "onRankEndIfExistsHandler", function (i) {
        r.props.onRankEnd && r.props.onRankEnd(i);
      }),
      C(r, "onRankEndHandler", function (i) {
        var s = i.destination,
          c = r.state,
          u = c.rows,
          l = c.page,
          d = r.props.rowsPerPage;
        if (!s || !u) {
          r.onRankEndIfExistsHandler(i);
          return;
        }
        var v = L0(i, u, l, d);
        (r.setState({ rows: v }), r.onRankEndIfExistsHandler(i));
      }),
      r
    );
  }
  return (
    rt(t, e),
    me(t, [
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
            v = c.highlightedRowIndex,
            p = c.loadingSpinnerSize,
            g = c.isLoading,
            f = c.loadingLabel,
            h = c.isFixedSize,
            b = c.isRankable,
            m = c.isRankingDisabled,
            y = c.rowsPerPage,
            k = c.paginationi18n,
            w = c.onRankStart,
            O = c.onPageRowsUpdate,
            E = c.testId,
            R = c.label;
          return S.createElement(lP, {
            paginationi18n: k,
            caption: u,
            emptyView: l,
            head: d,
            highlightedRowIndex: v,
            loadingSpinnerSize: p,
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
            testId: E,
            label: R,
          });
        },
      },
    ])
  );
})(S.Component);
C(Cb, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Ne,
  onSort: Ne,
  rowsPerPage: 1 / 0,
});
const vP = (e) => {
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
  hP = (e) => ({ cells: vP() });
function gP(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && xe(r) === "object" && (r.current = t);
    });
  };
}
var Pb = _.createContext(void 0),
  bP = function () {
    var t = _.useContext(Pb);
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
function Kt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var mP = 9;
function Vp(e) {
  e.keyCode !== mP && Kt(e);
}
function yP(e, t) {
  return e
    ? {
        onMouseDownCapture: Kt,
        onMouseUpCapture: Kt,
        onKeyDownCapture: Vp,
        onKeyUpCapture: Vp,
        onTouchStartCapture: Kt,
        onTouchEndCapture: Kt,
        onPointerDownCapture: Kt,
        onPointerUpCapture: Kt,
        onClickCapture: Kt,
        onClick: Kt,
      }
    : t;
}
function _P(e) {
  return e === "compact" ? "small" : "medium";
}
function wP(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function kP(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return S.createElement(Wc, {
    size: _P(r),
    appearance: wP({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var OP = [
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
  SP = ["className", "css", "as", "style"],
  Gp = ", Loading",
  Ee = {
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
  Qs = {
    root: "_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr31dpa _30l3azsu _1di6fcek _9h8hazsu",
    disabled: "_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28",
  },
  Hp = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  Wp = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  Kp = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  Jp = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  Yp = {
    root: "_bfhkqtfy _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr34mfv _30l3azsu _1di619qy _9h8hazsu",
  },
  Jr = {
    root: "_bfhk15s3 _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  EP = S.forwardRef(function (e, t) {
    var r = e.appearance,
      n = e.autoFocus,
      a = n === void 0 ? !1 : n,
      o = e.isDisabled,
      i = o === void 0 ? !1 : o,
      s = e.isLoading,
      c = s === void 0 ? !1 : s,
      u = e.isSelected,
      l = u === void 0 ? !1 : u,
      d = e.isIconButton,
      v = d === void 0 ? !1 : d,
      p = e.isCircle,
      g = p === void 0 ? !1 : p,
      f = e.hasIconBefore,
      h = f === void 0 ? !1 : f,
      b = e.hasIconAfter,
      m = b === void 0 ? !1 : b,
      y = e.shouldFitContainer,
      k = y === void 0 ? !1 : y,
      w = e.spacing,
      O = w === void 0 ? "default" : w,
      E = e.ariaLabel,
      R = e.ariaLabelledBy,
      I = e.children,
      P = e.interactionName,
      j = e.onClick,
      U = e.onMouseDown,
      $ = e.onMouseDownCapture,
      q = e.onMouseUp,
      G = e.onMouseUpCapture,
      B = e.onKeyDown,
      W = e.onKeyDownCapture,
      K = e.onKeyUp,
      z = e.onKeyUpCapture,
      F = e.onTouchStart,
      se = e.onTouchStartCapture,
      X = e.onTouchEnd,
      we = e.onTouchEndCapture,
      _e = e.onPointerDown,
      T = e.onPointerDownCapture,
      ke = e.onPointerUp,
      Le = e.onPointerUpCapture,
      pe = e.onClickCapture,
      Ie = e.testId,
      ve = e.analyticsContext,
      Ue = e.componentName,
      fr = e.role,
      tr = e.onMouseOver,
      nt = e.onMouseOut,
      De = e.onFocus,
      at = e.onBlur,
      Ot = e.onMouseMove,
      We = e.type,
      Me = ue(e, OP),
      Fe = _.useRef(null),
      ae = bP(),
      Ce = Dg(),
      Pe = !!ae,
      ot = ae?.isNavigationSplitButton || !1,
      Lt = ae?.appearance === "default",
      ge = Lt ? "subtle" : r || ae?.appearance || "default",
      Ut = ae?.spacing || O,
      Ke = ae?.isDisabled || i,
      qt = !Ke && !c,
      hn = Ke || c,
      $t = l && !Ke;
    (Jg(Fe, a), Me.className, Me.css, Me.as, Me.style);
    var Ni = ue(Me, SP);
    return S.createElement(
      hg,
      ne(
        {},
        Ni,
        {
          componentName: Ue || "button",
          analyticsContext: ve,
          role: fr,
          ref: gP([Fe, t]),
          xcss: fg(
            Ee.base,
            J("platform-dst-shape-theme-default") && Ee.baseT26Shape,
            ge === "default" && Qs.root,
            ge === "default" && qt && Qs.interactive,
            ge === "primary" && Hp.root,
            ge === "primary" && qt && Hp.interactive,
            ge === "warning" && Wp.root,
            ge === "warning" && qt && Wp.interactive,
            ge === "danger" && Kp.root,
            ge === "danger" && qt && Kp.interactive,
            ge === "discovery" && Jp.root,
            ge === "discovery" && qt && Jp.interactive,
            ge === "subtle" && Yp.root,
            ge === "subtle" && qt && Yp.interactive,
            Ee.linkDecorationUnset,
            $t && Jr.root,
            $t && Pe && Jr.insideSplitButton,
            $t && qt && Jr.interactive,
            $t && ge === "danger" && Jr.danger,
            $t && ge === "warning" && Jr.warning,
            $t && ge === "discovery" && Jr.discovery,
            Ke && Ee.disabled,
            Ke && ge !== "default" && ge !== "subtle" && Ee.sharedDisabled,
            Ke && ge === "default" && Qs.disabled,
            g && !Pe && Ee.circle,
            Ut === "compact" && Ee.spacingCompact,
            Ut === "compact" && J("platform-dst-shape-theme-default") && Ee.spacingCompactT26Shape,
            k && Ee.fullWidth,
            h && !J("platform-button-icon-spacing-cleanup") && Ee.buttonIconBeforeWithHack,
            m && !J("platform-button-icon-spacing-cleanup") && Ee.buttonIconAfterWithHack,
            h && J("platform-button-icon-spacing-cleanup") && Ee.buttonIconBefore,
            m && J("platform-button-icon-spacing-cleanup") && Ee.buttonIconAfter,
            v && Ee.iconButton,
            v && Ut === "compact" && Ee.iconButtonCompact,
            c && Ee.loading,
            Pe && Ee.splitButton,
            ot && Ee.navigationSplitButton,
          ),
          isDisabled: J("platform-dst_fix_not_focusable_loading_button") ? Ke : hn,
        },
        J("platform-dst_fix_not_focusable_loading_button") && { "aria-live": "polite" },
        c && J("platform-dst_fix_not_focusable_loading_button") && { "aria-disabled": !0 },
        {
          "aria-label": c && E && !R ? "".concat(E, " ").concat(Gp) : E,
          "aria-labelledby": c && R ? "".concat(R, " ").concat(Ce) : R,
          onClick: j,
        },
        yP(hn, {
          onMouseDownCapture: $,
          onMouseUpCapture: G,
          onKeyDownCapture: W,
          onKeyUpCapture: z,
          onTouchStartCapture: se,
          onTouchEndCapture: we,
          onPointerDownCapture: T,
          onPointerUpCapture: Le,
          onClickCapture: pe,
        }),
        {
          testId: Ie,
          onMouseOver: tr,
          onFocus: De,
          onMouseMove: Ot,
          onBlur: at,
          type: We,
          interactionName: P,
          onMouseDown: U,
          onMouseUp: q,
          onKeyDown: B,
          onMouseOut: nt,
          onKeyUp: K,
          onTouchStart: F,
          onTouchEnd: X,
          onPointerDown: _e,
          onPointerUp: ke,
        },
      ),
      S.createElement(
        Pb.Provider,
        { value: void 0 },
        I,
        c &&
          S.createElement(
            "span",
            { className: Q([Ee.loadingOverlay]) },
            kP({ spacing: Ut, appearance: ge, isDisabled: Ke, isSelected: $t, testId: Ie }),
          ),
        c && (R || !E) && S.createElement(Ti, { id: Ce }, Gp),
      ),
    );
  }),
  Yr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    common: "_v564g17y",
    fade: "_tzy4idpf",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
  },
  ec = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return S.createElement(
      "span",
      {
        className: Q([
          Yr.common,
          a === "text" && Yr.text,
          a === "icon" && Yr.icon,
          o && Yr.fade,
          !J("platform-button-icon-spacing-cleanup") && i === "before" && Yr.beforeIcon,
          !J("platform-button-icon-spacing-cleanup") && i === "after" && Yr.afterIcon,
        ]),
      },
      r,
    );
  };
function xP(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var Xp = function (t) {
    var r = t.icon,
      n = xP(r),
      a = {
        label: "",
        color: "currentColor",
        size: J("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return S.createElement(S.Fragment, null, n ? r(a) : S.createElement(r, a));
  },
  CP = [
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
  PP = ["className", "css", "as", "style"],
  pu = S.memo(
    S.forwardRef(function (t, r) {
      var n = t.analyticsContext,
        a = t.appearance,
        o = t["aria-label"],
        i = t["aria-labelledby"],
        s = t.autoFocus,
        c = t.children,
        u = t.iconAfter,
        l = t.iconBefore,
        d = t.interactionName,
        v = t.isDisabled,
        p = t.isLoading,
        g = p === void 0 ? !1 : p,
        f = t.isSelected,
        h = t.onClick,
        b = t.onClickCapture,
        m = t.onKeyDownCapture,
        y = t.onKeyUpCapture,
        k = t.onMouseDownCapture,
        w = t.onMouseUpCapture,
        O = t.onPointerDownCapture,
        E = t.onPointerUpCapture,
        R = t.onTouchEndCapture,
        I = t.onTouchStartCapture,
        P = t.shouldFitContainer,
        j = t.spacing,
        U = t.testId,
        $ = t.type,
        q = $ === void 0 ? "button" : $,
        G = ue(t, CP);
      (G.className, G.css, G.as, G.style);
      var B = ue(G, PP);
      return S.createElement(
        EP,
        ne(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: s,
            isDisabled: v,
            isLoading: g,
            isSelected: f,
            hasIconBefore: !!l,
            hasIconAfter: !!u,
            shouldFitContainer: P,
            spacing: j,
            ariaLabel: o,
            ariaLabelledBy: i,
            onClick: h,
            onClickCapture: b,
            onKeyDownCapture: m,
            onKeyUpCapture: y,
            onMouseDownCapture: k,
            onMouseUpCapture: w,
            onPointerDownCapture: O,
            onPointerUpCapture: E,
            onTouchStartCapture: I,
            onTouchEndCapture: R,
            testId: U,
            componentName: "Button",
            type: q,
            interactionName: d,
          },
          B,
        ),
        l &&
          S.createElement(
            ec,
            { type: "icon", position: "before", isLoading: g },
            S.createElement(Xp, { icon: l }),
          ),
        c && S.createElement(ec, { isLoading: g }, c),
        u &&
          S.createElement(
            ec,
            { type: "icon", position: "after", isLoading: g },
            S.createElement(Xp, { icon: u }),
          ),
      );
    }),
  );
pu.displayName = "Button";
const Po = Ci((e) => {
  const { stateStore: t } = Pi(),
    r = hP();
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
            x.jsx(Cb, {
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
                      children: x.jsx(pu, {
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
function RP(e) {
  return Nh(e) || qh(e) || zc(e) || Lh();
}
var Rb = _.createContext(null),
  Ab = _.createContext(null),
  Ib = _.createContext(null);
function Zp(e, t) {
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
function AP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var IP = {
    componentName: "tabs",
    packageName: "@atlaskit/tabs",
    packageVersion: "0.0.0-development",
  },
  Qp = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      _.createElement(
        Ib.Provider,
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
  jP = function (t) {
    var r = t.shouldUnmountTabPanelOnChange,
      n = r === void 0 ? !1 : r,
      a = t.selected,
      o = t.defaultSelected,
      i = t.onChange,
      s = t.id,
      c = t.analyticsContext,
      u = t.children,
      l = t.testId,
      d = _.useState(a || o || 0),
      v = H(d, 2),
      p = v[0],
      g = v[1],
      f = a === void 0 ? p : a,
      h = _.Children.toArray(u).filter(function (R) {
        return !!R;
      }),
      b = RP(h),
      m = b[0],
      y = b.slice(1),
      k = _.useRef(new Set([f]));
    k.current.has(f) || k.current.add(f);
    var w = _.useCallback(
        function (R, I) {
          (i && i(R, I), g(R));
        },
        [i],
      ),
      O = an(AP({ fn: w, action: "clicked", analyticsData: c }, IP)),
      E = n
        ? Qp({ tabPanel: y[f], index: f, isSelected: !0, tabsId: s })
        : Array.from(k.current).map(function (R) {
            return Qp({ tabPanel: y[R], index: R, isSelected: R === f, tabsId: s });
          });
    return _.createElement(
      "div",
      {
        "data-testid": l,
        className: Q([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      _.createElement(Ab.Provider, { value: { selected: f, onChange: O, tabsId: s } }, m),
      _.createElement(_.Fragment, null, E),
    );
  },
  TP = function () {
    var t = _.useContext(Rb);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  DP = function () {
    var t = _.useContext(Ab);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  MP = function () {
    var t = _.useContext(Ib);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  Ia = function (t) {
    var r = t.children,
      n = t.testId,
      a = MP(),
      o = a.role,
      i = a.id,
      s = a.hidden,
      c = a["aria-labelledby"],
      u = a.tabIndex;
    return S.createElement(
      Jc,
      {
        as: "div",
        isInset: !0,
        testId: n,
        role: o,
        id: i,
        hidden: s,
        "aria-labelledby": c,
        tabIndex: u,
      },
      S.createElement(_.Fragment, null, r),
    );
  },
  Ro = _.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = TP(),
      i = o.onClick,
      s = o.id,
      c = o["aria-controls"],
      u = o["aria-posinset"],
      l = o["aria-selected"],
      d = o["aria-setsize"],
      v = o.onKeyDown,
      p = o.role,
      g = o.tabIndex;
    return S.createElement(
      Jc,
      {
        as: "div",
        isInset: !0,
        testId: a,
        onClick: i,
        id: s,
        "aria-controls": c,
        "aria-posinset": u,
        "aria-selected": l,
        "aria-setsize": d,
        onKeyDown: v,
        role: p,
        tabIndex: g,
        ref: r,
      },
      S.createElement(vg, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  FP = function (t) {
    var r = t.children,
      n = DP(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      s = _.createRef(),
      c = _.Children.toArray(r).filter(Boolean),
      u = c.length,
      l = _.useCallback(
        function (p) {
          var g,
            f =
              (g = s.current) === null || g === void 0
                ? void 0
                : g.querySelector("[id='".concat(a, "-").concat(p, "']"));
          (f && f.focus(), i(p));
        },
        [a, s, i],
      ),
      d = _.useCallback(
        function (p) {
          if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(p.key)) {
            p.preventDefault();
            var g = u - 1;
            if (["Home", "End"].includes(p.key)) {
              var f = p.key === "Home" ? 0 : g;
              l(f);
              return;
            }
            var h = parseInt(p.currentTarget.getAttribute("aria-posinset") || "0") - 1,
              b = p.key === "ArrowRight" ? 1 : -1,
              m = h + b;
            ((m < 0 || m >= u) && (m = m < 0 ? g : 0), l(m));
          }
        },
        [u, l],
      ),
      v = _.useCallback(
        function (p) {
          var g = p.tab,
            f = p.isSelected,
            h = p.index;
          return _.createElement(
            Rb.Provider,
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
    return _.createElement(
      "div",
      {
        role: "tablist",
        ref: s,
        className: Q([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzuokkv _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8dokkv _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz73hj _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": or("var(--ds-text-subtle, ".concat(ri, ")")),
          "--_kkbq40": or("var(--ds-text-subtle, ".concat($s, ")")),
          "--_71dbsd": or("var(--ds-text, ".concat(A1, ")")),
          "--_1hfkvbo": or("var(--ds-text-selected, ".concat($s, ")")),
          "--_1q7mpl4": or(
            "var(--ds-border-width-selected, 2px)".concat(
              " solid ",
              "var(--ds-border-selected, ".concat($s, ")"),
            ),
          ),
          "--_lvpq93": or("var(--ds-border, ".concat(j1, ")")),
        },
      },
      c.map(function (p, g) {
        return v({ tab: p, index: g, isSelected: g === o });
      }),
    );
  },
  jb = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(jb || {});
const BP = Object.keys(jb).filter((e) => isNaN(Number(e))),
  Ao = ({ children: e, testId: t }) =>
    x.jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: Ht("color.background.neutral"),
        borderRadius: "3px",
        color: Ht("color.text.subtlest"),
        font: Ht("font.heading.xxlarge"),
        marginBlockEnd: Ht("space.100", "8px"),
        marginBlockStart: Ht("space.200", "16px"),
        paddingBlockEnd: Ht("space.400", "32px"),
        paddingBlockStart: Ht("space.400", "32px"),
        paddingInlineEnd: Ht("space.400", "32px"),
        paddingInlineStart: Ht("space.400", "32px"),
      },
      "data-testid": t,
      children: e,
    });
function NP() {
  const { stateStore: e } = Pi();
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
              x.jsxs(pu, {
                appearance: "danger",
                onClick: async () => {
                  try {
                    (e.loading("Clear ..."),
                      await Ga.invoke("clearAll", {
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
          x.jsxs(jP, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              x.jsxs(FP, {
                children: [
                  " ",
                  BP.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return x.jsx(
                          Ro,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return x.jsx(Ro, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return x.jsx(
                          Ro,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return x.jsx(
                          Ro,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              x.jsx(Ia, { children: x.jsx(x.Fragment, {}) }),
              x.jsx(Ia, {
                children: x.jsx(Ao, {
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
                      x.jsx(Po, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              x.jsx(Ia, {
                children: x.jsx(Ao, {
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
                      x.jsx(Po, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              x.jsx(Ia, {
                children: x.jsx(Ao, {
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
                      x.jsx(Po, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              x.jsx(Ia, {
                children: x.jsx(Ao, {
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
                      x.jsx(Po, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const LP = Ci(NP),
  UP = Ci((e) => {
    const { stateStore: t } = Pi(),
      [r, n] = _.useState(""),
      [a, o] = _.useState({}),
      i = (u) => {
        const { name: l, value: d, type: v } = u.target;
        o((p) => ({ ...p, [l]: v === "number" ? Number(d) : d }));
      },
      s = async (u) => {
        u.preventDefault();
        const l = { ...c };
        (a.testNameColumn && (l.testNameColumn = a.testNameColumn),
          a.testDateColumn && (l.testDateColumn = new Date(a.testDateColumn)));
        const d = await Ga.invoke("update", { data: l, objectName: e.type });
        n(d);
      };
    let c;
    switch (e.type) {
      case "WITHOUT_VERSIONING": {
        c = t.testData;
        break;
      }
      case "OPTIMISTIC_NUMBER": {
        c = t.testDataOptimisticNumber;
        break;
      }
      case "OPTIMISTIC_DATE": {
        c = t.testDataOptimisticDateId;
        break;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        c = t.testDataOptimisticTimeStampId;
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
                const u = await Ga.invoke("fetchOrCreateIfNotExists");
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
          onSubmit: s,
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
                    defaultValue: c.testNameColumn,
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
                    defaultValue: String(c.testDateColumn),
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
function qP() {
  const { stateStore: e } = Pi();
  if (
    (_.useEffect(() => {
      (async () => {
        try {
          e.loading();
          const r = await Ga.invoke("fetchOrCreateIfNotExists");
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
      return x.jsx(LP, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return x.jsx(UP, { type: e.state });
    default:
      return x.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const $P = Ci(qP),
  zP = document.getElementById("root"),
  VP = Ub.createRoot(zP),
  ev = () => {
    VP.render(x.jsx(Mh, { ...Fh, children: x.jsx($P, {}) }));
  };
Ga.view.theme
  .enable()
  .then(() => {
    ev();
  })
  .catch((e) => {
    (console.error(e.message), ev());
  });
export {
  qf as A,
  ye as B,
  Og as C,
  ji as D,
  Ii as E,
  oR as F,
  aR as G,
  tR as H,
  S as R,
  w1 as T,
  rt as _,
  me as a,
  wc as b,
  be as c,
  re as d,
  tt as e,
  H as f,
  C as g,
  ue as h,
  Dr as i,
  Re as j,
  ne as k,
  kk as l,
  Xt as m,
  Nt as n,
  Q as o,
  y1 as p,
  N0 as q,
  _ as r,
  g1 as s,
  rR as t,
  eR as u,
  QP as v,
  CE as w,
  ZP as x,
  nR as y,
  Uf as z,
};
