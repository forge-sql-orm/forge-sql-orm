const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-DteJbfF-.js",
      "./client-core-vendor-DRqApKWs.js",
      "./custom-theme-DJOE3RS7.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./lodash-vendor-ChTj_7HQ.js",
      "./body-Btx83xGB.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as Ar, a as si, c as Mb } from "./react-dom-vendor--YlRhZCI.js";
import { g as ur, a as Xp, r as sr, b as Tt, s as at } from "./client-core-vendor-DRqApKWs.js";
import { r as Nb } from "./lodash-vendor-ChTj_7HQ.js";
function Fb(e, t) {
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
var qi = { exports: {} },
  wn = {};
var hu;
function Lb() {
  if (hu) return wn;
  hu = 1;
  var e = Ar(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, s, u) {
    var l,
      d = {},
      v = null,
      p = null;
    (u !== void 0 && (v = "" + u),
      s.key !== void 0 && (v = "" + s.key),
      s.ref !== void 0 && (p = s.ref));
    for (l in s) n.call(s, l) && !o.hasOwnProperty(l) && (d[l] = s[l]);
    if (c && c.defaultProps) for (l in ((s = c.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: c, key: v, ref: p, props: d, _owner: a.current };
  }
  return ((wn.Fragment = r), (wn.jsx = i), (wn.jsxs = i), wn);
}
var gu;
function Bb() {
  return (gu || ((gu = 1), (qi.exports = Lb())), qi.exports);
}
var E = Bb(),
  m = Ar();
const O = ur(m),
  bu = Fb({ __proto__: null, default: O }, [m]);
var zi = {},
  Ys = function (e, t) {
    return (
      (Ys =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Ys(e, t)
    );
  };
function Yp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ys(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var qo = function () {
  return (
    (qo =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    qo.apply(this, arguments)
  );
};
function Zp(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function Qp(e, t, r, n) {
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
function ev(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function tv(e, t, r, n, a, o) {
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
    var h = (0, r[p])(c === "accessor" ? { get: l.get, set: l.set } : l[s], g);
    if (c === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = i(h.get)) && (l.get = d),
        (d = i(h.set)) && (l.set = d),
        (d = i(h.init)) && a.unshift(d));
    } else (d = i(h)) && (c === "field" ? a.unshift(d) : (l[s] = d));
  }
  (u && Object.defineProperty(u, n.name, l), (v = !0));
}
function rv(e, t, r) {
  for (var n = arguments.length > 2, a = 0; a < t.length; a++)
    r = n ? t[a].call(e, r) : t[a].call(e);
  return n ? r : void 0;
}
function nv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function av(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function ov(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function iv(e, t, r, n) {
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
function sv(e, t) {
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
function cv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ci(t, e, r);
}
function zo(e) {
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
function Ic(e, t) {
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
function uv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ic(arguments[t]));
  return e;
}
function lv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), a = 0, t = 0; t < r; t++)
    for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) n[a] = o[i];
  return n;
}
function dv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, o; n < a; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function an(e) {
  return this instanceof an ? ((this.v = e), this) : new an(e);
}
function fv(e, t, r) {
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
  function i(p) {
    return function (g) {
      return Promise.resolve(g).then(p, d);
    };
  }
  function c(p, g) {
    n[p] &&
      ((a[p] = function (f) {
        return new Promise(function (h, b) {
          o.push([p, f, h, b]) > 1 || s(p, f);
        });
      }),
      g && (a[p] = g(a[p])));
  }
  function s(p, g) {
    try {
      u(n[p](g));
    } catch (f) {
      v(o[0][3], f);
    }
  }
  function u(p) {
    p.value instanceof an ? Promise.resolve(p.value.v).then(l, d) : v(o[0][2], p);
  }
  function l(p) {
    s("next", p);
  }
  function d(p) {
    s("throw", p);
  }
  function v(p, g) {
    (p(g), o.shift(), o.length && s(o[0][0], o[0][1]));
  }
}
function pv(e) {
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
          return (r = !r) ? { value: an(e[a](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function vv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof zo == "function" ? zo(e) : e[Symbol.iterator]()),
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
function hv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var Ub = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Zs = function (e) {
    return (
      (Zs =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Zs(e)
    );
  };
function gv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Zs(e), n = 0; n < r.length; n++) r[n] !== "default" && ci(t, e, r[n]);
  return (Ub(t, e), t);
}
function bv(e) {
  return e && e.__esModule ? e : { default: e };
}
function _v(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function mv(e, t, r, n, a) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r);
}
function yv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function wv(e, t, r) {
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
var qb =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function kv(e) {
  function t(o) {
    ((e.error = e.hasError ? new qb(o, e.error, "An error was suppressed during disposal.") : o),
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
function Ov(e, t) {
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
const zb = {
    __extends: Yp,
    __assign: qo,
    __rest: Zp,
    __decorate: Qp,
    __param: ev,
    __esDecorate: tv,
    __runInitializers: rv,
    __propKey: nv,
    __setFunctionName: av,
    __metadata: ov,
    __awaiter: iv,
    __generator: sv,
    __createBinding: ci,
    __exportStar: cv,
    __values: zo,
    __read: Ic,
    __spread: uv,
    __spreadArrays: lv,
    __spreadArray: dv,
    __await: an,
    __asyncGenerator: fv,
    __asyncDelegator: pv,
    __asyncValues: vv,
    __makeTemplateObject: hv,
    __importStar: gv,
    __importDefault: bv,
    __classPrivateFieldGet: _v,
    __classPrivateFieldSet: mv,
    __classPrivateFieldIn: yv,
    __addDisposableResource: wv,
    __disposeResources: kv,
    __rewriteRelativeImportExtension: Ov,
  },
  $b = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: wv,
        get __assign() {
          return qo;
        },
        __asyncDelegator: pv,
        __asyncGenerator: fv,
        __asyncValues: vv,
        __await: an,
        __awaiter: iv,
        __classPrivateFieldGet: _v,
        __classPrivateFieldIn: yv,
        __classPrivateFieldSet: mv,
        __createBinding: ci,
        __decorate: Qp,
        __disposeResources: kv,
        __esDecorate: tv,
        __exportStar: cv,
        __extends: Yp,
        __generator: sv,
        __importDefault: bv,
        __importStar: gv,
        __makeTemplateObject: hv,
        __metadata: ov,
        __param: ev,
        __propKey: nv,
        __read: Ic,
        __rest: Zp,
        __rewriteRelativeImportExtension: Ov,
        __runInitializers: rv,
        __setFunctionName: av,
        __spread: uv,
        __spreadArray: dv,
        __spreadArrays: lv,
        __values: zo,
        default: zb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  vt = Xp($b);
var kn = {},
  _u;
function Vb() {
  return (
    _u ||
      ((_u = 1),
      Object.defineProperty(kn, "__esModule", { value: !0 }),
      (kn.NavigationTarget = void 0),
      (kn.NavigationTarget = {
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
    kn
  );
}
var $i = {},
  Vi = {},
  On = {},
  Sn = {},
  mu;
function ke() {
  if (mu) return Sn;
  ((mu = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((Sn.BridgeAPIError = e), Sn);
}
var yu;
function he() {
  if (yu) return On;
  ((yu = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.getCallBridge = void 0));
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
  return ((On.getCallBridge = r), On);
}
var En = {},
  wu;
function ui() {
  if (wu) return En;
  ((wu = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.withRateLimiter = void 0));
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
  return ((En.withRateLimiter = t), En);
}
var ku;
function Gb() {
  return (
    ku ||
      ((ku = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = he(),
          r = ke(),
          n = ui(),
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
      })(Vi)),
    Vi
  );
}
var Ou;
function ao() {
  return (
    Ou ||
      ((Ou = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), vt.__exportStar(Gb(), e));
      })($i)),
    $i
  );
}
var Gi = {},
  xn = {},
  Hi = {},
  Su;
function Sv() {
  return (
    Su ||
      ((Su = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = he(),
          r = ke(),
          n = ui(),
          a = 500,
          o = 25,
          i = 1e3 * o;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((v) => typeof v == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          u = (d) => async (v) => {
            s(v);
            const p = { ...v, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await c("invoke", p),
              { success: f, payload: h, error: b } = g ?? {},
              _ = { ...(f ? h : b) };
            if (_ && _.headers)
              for (const y in _.headers)
                Array.isArray(_.headers[y]) && (_.headers[y] = _.headers[y].join(","));
            return _;
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
      })(Hi)),
    Hi
  );
}
var Eu;
function Hb() {
  if (Eu) return xn;
  ((Eu = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.invokeRemote = void 0));
  const e = Sv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((xn.invokeRemote = t), xn);
}
var Cn = {},
  xu;
function Kb() {
  if (xu) return Cn;
  ((xu = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.invokeService = void 0));
  const e = Sv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((Cn.invokeService = t), Cn);
}
var Cu;
function Wb() {
  return (
    Cu ||
      ((Cu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = vt;
        (t.__exportStar(Hb(), e), t.__exportStar(Kb(), e));
      })(Gi)),
    Gi
  );
}
var Ki = {},
  Pn = {},
  Rn = {},
  Pu;
function Jb() {
  if (Pu) return Rn;
  ((Pu = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.submit = void 0));
  const e = he(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("submit", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Rn.submit = n), Rn);
}
var An = {},
  Ru;
function Xb() {
  if (Ru) return An;
  ((Ru = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.close = void 0));
  const e = he(),
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
  return ((An.close = n), An);
}
var In = {},
  Au;
function Yb() {
  if (Au) return In;
  ((Au = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.open = void 0));
  const e = he(),
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
  return ((In.open = n), In);
}
var jn = {},
  Iu;
function Zb() {
  if (Iu) return jn;
  ((Iu = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.refresh = void 0));
  const e = he(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      if ((await r("refresh", a)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((jn.refresh = n), jn);
}
var Dn = {},
  ju;
function Qb() {
  if (ju) return Dn;
  ((ju = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.createHistory = void 0));
  const t = (0, he().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((a) => {
          n.location = a;
        }),
        n
      );
    };
  return ((Dn.createHistory = r), Dn);
}
var Tn = {},
  Wi = {},
  $t = {},
  Du;
function Ev() {
  return (
    Du ||
      ((Du = 1),
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
var vr = {},
  Tu;
function e_() {
  if (Tu) return vr;
  ((Tu = 1),
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
  return ((vr.TranslationsGetter = r), vr);
}
var Mn = {},
  Ji = {},
  Mu;
function xv() {
  return (
    Mu ||
      ((Mu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = vt.__importDefault(Nb()),
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
      })(Ji)),
    Ji
  );
}
var Nu;
function t_() {
  if (Nu) return Mn;
  ((Nu = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.Translator = void 0));
  const e = xv();
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
  return ((Mn.Translator = t), Mn);
}
var Nn = {},
  Fu;
function r_() {
  if (Fu) return Nn;
  ((Fu = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.ensureLocale = void 0));
  const e = Ev(),
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
var Xi = {},
  Lu;
function n_() {
  return (
    Lu ||
      ((Lu = 1),
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
        const c = (u) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const v = o(d[0]);
            for (const { key: p } of v) l.add(p);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = c;
        const s = (u) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(u)) {
            const v = o(d[0]);
            for (const p of v) l.push({ moduleName: d[1], ...p });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(Xi)),
    Xi
  );
}
var Yi = {},
  Bu;
function a_() {
  return (Bu || ((Bu = 1), Object.defineProperty(Yi, "__esModule", { value: !0 })), Yi);
}
var Uu;
function Cv() {
  return (
    Uu ||
      ((Uu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = vt;
        (t.__exportStar(Ev(), e),
          t.__exportStar(e_(), e),
          t.__exportStar(t_(), e),
          t.__exportStar(r_(), e));
        var r = xv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = n_();
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
          t.__exportStar(a_(), e));
      })(Wi)),
    Wi
  );
}
var qu;
function o_() {
  if (qu) return Tn;
  ((qu = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.getContext = void 0));
  const e = he(),
    t = Cv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var a;
      const o = await r("getContext"),
        i = o?.locale;
      return (i && (o.locale = (a = (0, t.ensureLocale)(i)) !== null && a !== void 0 ? a : i), o);
    };
  return ((Tn.getContext = n), Tn);
}
var Fn = {},
  zu;
function i_() {
  if (zu) return Fn;
  ((zu = 1),
    Object.defineProperty(Fn, "__esModule", { value: !0 }),
    (Fn.changeWindowTitle = void 0));
  const e = he(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = async (a) => {
      try {
        await r("changeWindowTitle", a);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((Fn.changeWindowTitle = n), Fn);
}
var Ln = {},
  $u;
function s_() {
  if ($u) return Ln;
  (($u = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.theme = void 0));
  const t = (0, he().getCallBridge)();
  return ((Ln.theme = { enable: () => t("enableTheming") }), Ln);
}
var Bn = {},
  Un = {},
  Zi = {},
  hr = {},
  Vu;
function Pv() {
  if (Vu) return hr;
  ((Vu = 1),
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
var Gu;
function c_() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Pv(),
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
      })(Zi)),
    Zi
  );
}
var Hu;
function Rv() {
  if (Hu) return Un;
  ((Hu = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.events = void 0));
  const e = he(),
    t = c_(),
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
  return ((Un.events = { emit: n, on: a }), Un);
}
var Ku;
function u_() {
  if (Ku) return Bn;
  ((Ku = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.emitReadyEvent = void 0));
  const e = Rv(),
    t = Dv(),
    r = he(),
    n = ke(),
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
  return ((Bn.emitReadyEvent = i), Bn);
}
const l_ = "modulepreload",
  d_ = function (e, t) {
    return new URL(e, t).href;
  },
  Wu = {},
  Re = function (t, r, n) {
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
        c = document.querySelector("meta[property=csp-nonce]"),
        s = c?.nonce || c?.getAttribute("nonce");
      a = u(
        r.map((l) => {
          if (((l = d_(l, n)), l in Wu)) return;
          Wu[l] = !0;
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
            ((p.rel = d ? "stylesheet" : l_),
            d || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = l),
            s && p.setAttribute("nonce", s),
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
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i;
    }
    return a.then((i) => {
      for (const c of i || []) c.status === "rejected" && o(c.reason);
      return t().catch(o);
    });
  };
var qn = {},
  Qi = {},
  zn = {},
  vo = {},
  Ju;
function Av() {
  if (Ju) return vo;
  ((Ju = 1), Object.defineProperty(vo, "__esModule", { value: !0 }), (vo.default = r));
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
var Lr = {},
  $n = {},
  Vn = {},
  Xu;
function f_() {
  if (Xu) return Vn;
  ((Xu = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Vn.default = e), Vn);
}
var Yu;
function li() {
  if (Yu) return $n;
  ((Yu = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.default = void 0));
  var e = t(f_());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e.default.test(a);
  }
  var n = r;
  return (($n.default = n), $n);
}
var Zu;
function di() {
  if (Zu) return Lr;
  ((Zu = 1),
    Object.defineProperty(Lr, "__esModule", { value: !0 }),
    (Lr.default = void 0),
    (Lr.unsafeStringify = n));
  var e = t(li());
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
  return ((Lr.default = o), Lr);
}
var Qu;
function p_() {
  if (Qu) return zn;
  ((Qu = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.default = void 0));
  var e = r(Av()),
    t = di();
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  let n,
    a,
    o = 0,
    i = 0;
  function c(u, l, d) {
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
    const _ = h - o + (b - i) / 1e4;
    if (
      (_ < 0 && u.clockseq === void 0 && (f = (f + 1) & 16383),
      (_ < 0 || h > o) && u.nsecs === void 0 && (b = 0),
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
  var s = c;
  return ((zn.default = s), zn);
}
var Gn = {},
  tr = {},
  Hn = {},
  el;
function Iv() {
  if (el) return Hn;
  ((el = 1), Object.defineProperty(Hn, "__esModule", { value: !0 }), (Hn.default = void 0));
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
  return ((Hn.default = n), Hn);
}
var tl;
function jv() {
  if (tl) return tr;
  ((tl = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.URL = tr.DNS = void 0),
    (tr.default = i));
  var e = di(),
    t = r(Iv());
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
        (h[6] = (h[6] & 15) | s),
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
      l.name = c;
    } catch {}
    return ((l.DNS = a), (l.URL = o), l);
  }
  return tr;
}
var Kn = {},
  rl;
function v_() {
  if (rl) return Kn;
  ((rl = 1), Object.defineProperty(Kn, "__esModule", { value: !0 }), (Kn.default = void 0));
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
      const _ = (p[b >> 5] >>> (b % 32)) & 255,
        y = parseInt(h.charAt((_ >>> 4) & 15) + h.charAt(_ & 15), 16);
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
      _ = 271733878;
    for (let y = 0; y < p.length; y += 16) {
      const k = f,
        w = h,
        S = b,
        x = _;
      ((f = s(f, h, b, _, p[y], 7, -680876936)),
        (_ = s(_, f, h, b, p[y + 1], 12, -389564586)),
        (b = s(b, _, f, h, p[y + 2], 17, 606105819)),
        (h = s(h, b, _, f, p[y + 3], 22, -1044525330)),
        (f = s(f, h, b, _, p[y + 4], 7, -176418897)),
        (_ = s(_, f, h, b, p[y + 5], 12, 1200080426)),
        (b = s(b, _, f, h, p[y + 6], 17, -1473231341)),
        (h = s(h, b, _, f, p[y + 7], 22, -45705983)),
        (f = s(f, h, b, _, p[y + 8], 7, 1770035416)),
        (_ = s(_, f, h, b, p[y + 9], 12, -1958414417)),
        (b = s(b, _, f, h, p[y + 10], 17, -42063)),
        (h = s(h, b, _, f, p[y + 11], 22, -1990404162)),
        (f = s(f, h, b, _, p[y + 12], 7, 1804603682)),
        (_ = s(_, f, h, b, p[y + 13], 12, -40341101)),
        (b = s(b, _, f, h, p[y + 14], 17, -1502002290)),
        (h = s(h, b, _, f, p[y + 15], 22, 1236535329)),
        (f = u(f, h, b, _, p[y + 1], 5, -165796510)),
        (_ = u(_, f, h, b, p[y + 6], 9, -1069501632)),
        (b = u(b, _, f, h, p[y + 11], 14, 643717713)),
        (h = u(h, b, _, f, p[y], 20, -373897302)),
        (f = u(f, h, b, _, p[y + 5], 5, -701558691)),
        (_ = u(_, f, h, b, p[y + 10], 9, 38016083)),
        (b = u(b, _, f, h, p[y + 15], 14, -660478335)),
        (h = u(h, b, _, f, p[y + 4], 20, -405537848)),
        (f = u(f, h, b, _, p[y + 9], 5, 568446438)),
        (_ = u(_, f, h, b, p[y + 14], 9, -1019803690)),
        (b = u(b, _, f, h, p[y + 3], 14, -187363961)),
        (h = u(h, b, _, f, p[y + 8], 20, 1163531501)),
        (f = u(f, h, b, _, p[y + 13], 5, -1444681467)),
        (_ = u(_, f, h, b, p[y + 2], 9, -51403784)),
        (b = u(b, _, f, h, p[y + 7], 14, 1735328473)),
        (h = u(h, b, _, f, p[y + 12], 20, -1926607734)),
        (f = l(f, h, b, _, p[y + 5], 4, -378558)),
        (_ = l(_, f, h, b, p[y + 8], 11, -2022574463)),
        (b = l(b, _, f, h, p[y + 11], 16, 1839030562)),
        (h = l(h, b, _, f, p[y + 14], 23, -35309556)),
        (f = l(f, h, b, _, p[y + 1], 4, -1530992060)),
        (_ = l(_, f, h, b, p[y + 4], 11, 1272893353)),
        (b = l(b, _, f, h, p[y + 7], 16, -155497632)),
        (h = l(h, b, _, f, p[y + 10], 23, -1094730640)),
        (f = l(f, h, b, _, p[y + 13], 4, 681279174)),
        (_ = l(_, f, h, b, p[y], 11, -358537222)),
        (b = l(b, _, f, h, p[y + 3], 16, -722521979)),
        (h = l(h, b, _, f, p[y + 6], 23, 76029189)),
        (f = l(f, h, b, _, p[y + 9], 4, -640364487)),
        (_ = l(_, f, h, b, p[y + 12], 11, -421815835)),
        (b = l(b, _, f, h, p[y + 15], 16, 530742520)),
        (h = l(h, b, _, f, p[y + 2], 23, -995338651)),
        (f = d(f, h, b, _, p[y], 6, -198630844)),
        (_ = d(_, f, h, b, p[y + 7], 10, 1126891415)),
        (b = d(b, _, f, h, p[y + 14], 15, -1416354905)),
        (h = d(h, b, _, f, p[y + 5], 21, -57434055)),
        (f = d(f, h, b, _, p[y + 12], 6, 1700485571)),
        (_ = d(_, f, h, b, p[y + 3], 10, -1894986606)),
        (b = d(b, _, f, h, p[y + 10], 15, -1051523)),
        (h = d(h, b, _, f, p[y + 1], 21, -2054922799)),
        (f = d(f, h, b, _, p[y + 8], 6, 1873313359)),
        (_ = d(_, f, h, b, p[y + 15], 10, -30611744)),
        (b = d(b, _, f, h, p[y + 6], 15, -1560198380)),
        (h = d(h, b, _, f, p[y + 13], 21, 1309151649)),
        (f = d(f, h, b, _, p[y + 4], 6, -145523070)),
        (_ = d(_, f, h, b, p[y + 11], 10, -1120210379)),
        (b = d(b, _, f, h, p[y + 2], 15, 718787259)),
        (h = d(h, b, _, f, p[y + 9], 21, -343485551)),
        (f = o(f, k)),
        (h = o(h, w)),
        (b = o(b, S)),
        (_ = o(_, x)));
    }
    return [f, h, b, _];
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
  function c(p, g, f, h, b, _) {
    return o(i(o(o(g, p), o(h, _)), b), f);
  }
  function s(p, g, f, h, b, _, y) {
    return c((g & f) | (~g & h), p, g, b, _, y);
  }
  function u(p, g, f, h, b, _, y) {
    return c((g & h) | (f & ~h), p, g, b, _, y);
  }
  function l(p, g, f, h, b, _, y) {
    return c(g ^ f ^ h, p, g, b, _, y);
  }
  function d(p, g, f, h, b, _, y) {
    return c(f ^ (g | ~h), p, g, b, _, y);
  }
  var v = e;
  return ((Kn.default = v), Kn);
}
var nl;
function h_() {
  if (nl) return Gn;
  ((nl = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.default = void 0));
  var e = r(jv()),
    t = r(v_());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v3", 48, t.default);
  return ((Gn.default = a), Gn);
}
var Wn = {},
  Jn = {},
  al;
function g_() {
  if (al) return Jn;
  ((al = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Jn.default = t), Jn);
}
var ol;
function b_() {
  if (ol) return Wn;
  ((ol = 1), Object.defineProperty(Wn, "__esModule", { value: !0 }), (Wn.default = void 0));
  var e = n(g_()),
    t = n(Av()),
    r = di();
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
  return ((Wn.default = o), Wn);
}
var Xn = {},
  Yn = {},
  il;
function __() {
  if (il) return Yn;
  ((il = 1), Object.defineProperty(Yn, "__esModule", { value: !0 }), (Yn.default = void 0));
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
      for (let v = 0; v < 16; ++v)
        d[v] =
          (a[l * 64 + v * 4] << 24) |
          (a[l * 64 + v * 4 + 1] << 16) |
          (a[l * 64 + v * 4 + 2] << 8) |
          a[l * 64 + v * 4 + 3];
      u[l] = d;
    }
    ((u[s - 1][14] = ((a.length - 1) * 8) / Math.pow(2, 32)),
      (u[s - 1][14] = Math.floor(u[s - 1][14])),
      (u[s - 1][15] = ((a.length - 1) * 8) & 4294967295));
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(80);
      for (let b = 0; b < 16; ++b) d[b] = u[l][b];
      for (let b = 16; b < 80; ++b) d[b] = t(d[b - 3] ^ d[b - 8] ^ d[b - 14] ^ d[b - 16], 1);
      let v = i[0],
        p = i[1],
        g = i[2],
        f = i[3],
        h = i[4];
      for (let b = 0; b < 80; ++b) {
        const _ = Math.floor(b / 20),
          y = (t(v, 5) + e(_, p, g, f) + h + o[_] + d[b]) >>> 0;
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
  return ((Yn.default = n), Yn);
}
var sl;
function m_() {
  if (sl) return Xn;
  ((sl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = r(jv()),
    t = r(__());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = (0, e.default)("v5", 80, t.default);
  return ((Xn.default = a), Xn);
}
var Zn = {},
  cl;
function y_() {
  if (cl) return Zn;
  ((cl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Zn.default = e), Zn);
}
var Qn = {},
  ul;
function w_() {
  if (ul) return Qn;
  ((ul = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = t(li());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e.default)(a)) throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var n = r;
  return ((Qn.default = n), Qn);
}
var ll;
function k_() {
  return (
    ll ||
      ((ll = 1),
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
        var t = l(p_()),
          r = l(h_()),
          n = l(b_()),
          a = l(m_()),
          o = l(y_()),
          i = l(w_()),
          c = l(li()),
          s = l(di()),
          u = l(Iv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(Qi)),
    Qi
  );
}
var dl;
function O_() {
  if (dl) return qn;
  ((dl = 1),
    Object.defineProperty(qn, "__esModule", { value: !0 }),
    (qn.createAdfRendererIframeProps = void 0));
  const e = k_(),
    t = async (r, n) => {
      const a = await Re(
          () => import("./index-DteJbfF-.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = a.default || a,
        i = new URL(document.referrer).origin,
        c = `${i}/forge-apps/adf-renderer`,
        s = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        u = () => {
          var l, d;
          const v = document.getElementById(s),
            p = {
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
            v || "",
          ),
            (d = v?.contentWindow) === null || d === void 0 || d.postMessage(p, i));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: s, src: c, onLoad: u }
      );
    };
  return ((qn.createAdfRendererIframeProps = t), qn);
}
var fl;
function Dv() {
  if (fl) return Pn;
  ((fl = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.view = void 0));
  const e = Jb(),
    t = Xb(),
    r = Yb(),
    n = Zb(),
    a = Qb(),
    o = o_(),
    i = i_(),
    c = s_(),
    s = u_(),
    u = O_();
  return (
    (Pn.view = {
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
    Pn
  );
}
var pl;
function jc() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), vt.__exportStar(Dv(), e));
      })(Ki)),
    Ki
  );
}
var es = {},
  ea = {},
  vl;
function S_() {
  if (vl) return ea;
  ((vl = 1), Object.defineProperty(ea, "__esModule", { value: !0 }), (ea.router = void 0));
  const t = (0, he().getCallBridge)(),
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
  return ((ea.router = { getUrl: r, navigate: n, open: a, reload: o }), ea);
}
var hl;
function E_() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), vt.__exportStar(S_(), e));
      })(es)),
    es
  );
}
var ts = {},
  ta = {},
  gl;
function x_() {
  if (gl) return ta;
  ((gl = 1), Object.defineProperty(ta, "__esModule", { value: !0 }), (ta.Modal = void 0));
  const e = he(),
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
  return ((ta.Modal = a), ta);
}
var bl;
function C_() {
  return (
    bl ||
      ((bl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), vt.__exportStar(x_(), e));
      })(ts)),
    ts
  );
}
var ht = {},
  gr = {},
  _l;
function P_() {
  if (_l) return gr;
  ((_l = 1),
    Object.defineProperty(gr, "__esModule", { value: !0 }),
    (gr.productFetchApi = gr.remoteFetchApi = void 0));
  const e = Pv(),
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
          { body: d, headers: v, isMultipartFormData: p } = await n(l),
          g = {
            remoteKey: s,
            fetchRequestInit: { ...l, body: d, headers: [...v.entries()] },
            isMultipartFormData: p,
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
        { body: v, headers: p, isMultipartFormData: g } = await n(d);
      p.has("X-Atlassian-Token") || p.set("X-Atlassian-Token", "no-check");
      const f = {
          product: s,
          restPath: u,
          fetchRequestInit: { ...d, body: v, headers: [...p.entries()] },
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
var ml;
function R_() {
  if (ml) return ht;
  ml = 1;
  var e;
  (Object.defineProperty(ht, "__esModule", { value: !0 }),
    (ht.requestRemote = ht.requestBitbucket = ht.requestJira = ht.requestConfluence = void 0));
  const t = he(),
    r = P_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (ht.requestConfluence = e.requestConfluence),
    (ht.requestJira = e.requestJira),
    (ht.requestBitbucket = e.requestBitbucket),
    (ht.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    ht
  );
}
var rs = {},
  ra = {},
  yl;
function A_() {
  if (yl) return ra;
  ((yl = 1), Object.defineProperty(ra, "__esModule", { value: !0 }), (ra.showFlag = void 0));
  const e = he(),
    t = ke(),
    r = (0, e.getCallBridge)(),
    n = (a) => {
      var o;
      if (!a.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const i = r("showFlag", { ...a, type: (o = a.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await i, r("closeFlag", { id: a.id })) };
    };
  return ((ra.showFlag = n), ra);
}
var wl;
function I_() {
  return (
    wl ||
      ((wl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = A_();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(rs)),
    rs
  );
}
var ns = {},
  kl;
function j_() {
  return (
    kl ||
      ((kl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), vt.__exportStar(Rv(), e));
      })(ns)),
    ns
  );
}
var as = {},
  na = {},
  Ol;
function D_() {
  if (Ol) return na;
  ((Ol = 1), Object.defineProperty(na, "__esModule", { value: !0 }), (na.realtime = void 0));
  const t = (0, he().getCallBridge)(),
    r = (i, c, s) => t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s }),
    n = (i, c, s) => t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s }),
    a = (i, c, s) =>
      t("publishRealtimeChannel", { channelName: i, eventPayload: c, options: s, isGlobal: !0 }),
    o = (i, c, s) =>
      t("subscribeRealtimeChannel", { channelName: i, onEvent: c, options: s, isGlobal: !0 });
  return ((na.realtime = { publish: r, subscribe: n, publishGlobal: a, subscribeGlobal: o }), na);
}
var os = {},
  Sl;
function T_() {
  return (
    Sl ||
      ((Sl = 1),
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
      })(os)),
    os
  );
}
var El;
function M_() {
  return (
    El ||
      ((El = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = D_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = T_();
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
      })(as)),
    as
  );
}
var is = {},
  aa = {},
  ss = {},
  xl;
function N_() {
  return (
    xl ||
      ((xl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = he(),
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
      })(ss)),
    ss
  );
}
var Cl;
function F_() {
  if (Cl) return aa;
  ((Cl = 1), Object.defineProperty(aa, "__esModule", { value: !0 }), (aa.rovo = void 0));
  const e = N_();
  return ((aa.rovo = { open: e.open }), aa);
}
var Pl;
function L_() {
  return (
    Pl ||
      ((Pl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), vt.__exportStar(F_(), e));
      })(is)),
    is
  );
}
var Vt = {},
  Rl;
function B_() {
  if (Rl) return Vt;
  ((Rl = 1),
    Object.defineProperty(Vt, "__esModule", { value: !0 }),
    (Vt.createTranslationFunction = Vt.getTranslations = Vt.resetTranslationsCache = void 0));
  const e = Cv(),
    t = jc(),
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
        var v, p;
        return (p = (v = u.translate(l)) !== null && v !== void 0 ? v : d) !== null && p !== void 0
          ? p
          : l;
      }
    );
  };
  return ((Vt.createTranslationFunction = i), Vt);
}
var cs = {},
  oa = {},
  Al;
function U_() {
  if (Al) return oa;
  ((Al = 1), Object.defineProperty(oa, "__esModule", { value: !0 }), (oa.permissions = void 0));
  const t = (0, he().getCallBridge)(),
    r = async (s) => t("__permission__egressGet", s),
    n = async (s) => t("__permission__egressSet", s),
    a = async (s) => t("__permission__egressDeleteDomain", s),
    o = async (s) => t("__permission__egressDeleteGroup", s),
    i = async (s) => t("__permission__remoteGet", s),
    c = async (s) => t("__permission__remoteSet", s);
  return (
    (oa.permissions = {
      egress: { get: r, set: n, deleteDomain: a, deleteGroup: o },
      remote: { get: i, set: c },
    }),
    oa
  );
}
var Il;
function q_() {
  return (
    Il ||
      ((Il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), vt.__exportStar(U_(), e));
      })(cs)),
    cs
  );
}
var us = {},
  ls = {},
  ds = {},
  ia = {},
  sa = {},
  jl;
function Tv() {
  return (
    jl ||
      ((jl = 1),
      Object.defineProperty(sa, "__esModule", { value: !0 }),
      (sa.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (sa.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    sa
  );
}
var Dl;
function fi() {
  if (Dl) return ia;
  ((Dl = 1),
    Object.defineProperty(ia, "__esModule", { value: !0 }),
    (ia.checkRestrictedEnvironment = void 0));
  const e = ke(),
    t = jc(),
    r = Tv(),
    n = async () => {
      const { environmentType: a } = await t.view.getContext();
      if (a === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((ia.checkRestrictedEnvironment = n), ia);
}
var Tl;
function z_() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = ao(),
          r = ke(),
          n = fi(),
          o = (0, he().getCallBridge)(),
          i = (l, d) => {
            const v = atob(l),
              p = new Array(v.length);
            for (let f = 0; f < v.length; f++) p[f] = v.charCodeAt(f);
            const g = new Uint8Array(p);
            return new Blob([g], { type: d || "application/octet-stream" });
          },
          c = async (l) => {
            const d = l.size,
              v = await l.arrayBuffer(),
              p = await crypto.subtle.digest("SHA-256", v),
              g = new Uint8Array(p),
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
            const v = d.map((_, y) => {
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
              p = await Promise.all(v.map((_) => c(_))),
              g = await (0, t.invoke)(l, { allObjectMetadata: p });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              v.forEach((_, y) => {
                const k = p[y];
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
                            const I = await fetch(_, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
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
          const v = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(v.map((g) => g.promise));
        };
        e.upload = u;
      })(ds)),
    ds
  );
}
var ca = {},
  Ml;
function $_() {
  if (Ml) return ca;
  ((Ml = 1), Object.defineProperty(ca, "__esModule", { value: !0 }), (ca.deleteObjects = void 0));
  const e = ao(),
    t = ke(),
    r = fi(),
    a = (0, he().getCallBridge)(),
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
  return ((ca.deleteObjects = o), ca);
}
var ua = {},
  Nl;
function V_() {
  if (Nl) return ua;
  ((Nl = 1), Object.defineProperty(ua, "__esModule", { value: !0 }), (ua.download = void 0));
  const e = ao(),
    t = ke(),
    r = fi(),
    a = (0, he().getCallBridge)(),
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
      const u = Object.entries(s).map(async ([d, v]) => {
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
  return ((ua.download = o), ua);
}
var la = {},
  Fl;
function G_() {
  if (Fl) return la;
  ((Fl = 1), Object.defineProperty(la, "__esModule", { value: !0 }), (la.getMetadata = void 0));
  const e = ao(),
    t = ke(),
    r = fi(),
    a = (0, he().getCallBridge)(),
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
  return ((la.getMetadata = o), la);
}
var Ll;
function H_() {
  return (
    Ll ||
      ((Ll = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = z_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = $_(),
          n = V_(),
          a = G_();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: a.getMetadata,
          delete: r.deleteObjects,
        };
      })(ls)),
    ls
  );
}
var Bl;
function K_() {
  return (
    Bl ||
      ((Bl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = vt;
        (t.__exportStar(H_(), e), t.__exportStar(Tv(), e));
      })(us)),
    us
  );
}
var fs = {},
  da = {},
  br = {},
  Br = {},
  ho = {},
  Ul;
function W_() {
  if (Ul) return ho;
  ((Ul = 1), Object.defineProperty(ho, "__esModule", { value: !0 }));
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
  return ((ho.default = t), ho);
}
var Ur = {},
  fa = {},
  ql;
function J_() {
  if (ql) return fa;
  ((ql = 1),
    Object.defineProperty(fa, "__esModule", { value: !0 }),
    (fa._resolveDeltasResponse = void 0));
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
  fa._resolveDeltasResponse = r;
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
  return fa;
}
var zl;
function Mv() {
  if (zl) return Ur;
  zl = 1;
  var e =
    (Ur && Ur.__awaiter) ||
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
            p(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          try {
            p(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          g.done ? u(g.value) : s(g.value).then(d, v);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Ur, "__esModule", { value: !0 });
  const t = sr(),
    r = J_();
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
        var l, d, v, p, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
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
          const _ =
            h?.hash_used !==
            ((f =
              (g = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
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
        const v = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof v == "string"
          ? v
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), v), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Ur.default = n), Ur);
}
var pa = {},
  $l;
function X_() {
  if ($l) return pa;
  (($l = 1),
    Object.defineProperty(pa, "__esModule", { value: !0 }),
    (pa._makeParamStoreGetter = void 0));
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
  function o(l, d, v) {
    return l.getFeatureGate(d.gate_name, r(v) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, v, p) {
    const f = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(f, v) ? v : f;
  }
  function c(l, d, v, p) {
    const f = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(f, v) ? v : f;
  }
  function s(l, d, v, p) {
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
          return c(l, f, g, v);
        case "layer":
          return s(l, f, g, v);
        default:
          return g;
      }
    };
  }
  return ((pa._makeParamStoreGetter = u), pa);
}
var _r = {},
  Vl;
function Y_() {
  if (Vl) return _r;
  Vl = 1;
  var e =
    (_r && _r.__awaiter) ||
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
            p(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          try {
            p(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          g.done ? u(g.value) : s(g.value).then(d, v);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(_r, "__esModule", { value: !0 }),
    (_r.StatsigEvaluationsDataAdapter = void 0));
  const t = sr(),
    r = Mv();
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
  return ((_r.StatsigEvaluationsDataAdapter = n), _r);
}
var Gl;
function Z_() {
  if (Gl) return Br;
  Gl = 1;
  var e =
    (Br && Br.__awaiter) ||
    function (c, s, u, l) {
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
          } catch (_) {
            p(_);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (_) {
            p(_);
          }
        }
        function h(b) {
          b.done ? v(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty(Br, "__esModule", { value: !0 });
  const t = sr(),
    r = W_(),
    n = Mv(),
    a = X_(),
    o = Y_();
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
      var d, v;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new o.StatsigEvaluationsDataAdapter(),
        p,
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
        (this._network = p),
        (this._user = this._configureUser(u, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (v = l?.plugins) !== null && v !== void 0 ? v : [];
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
        const v = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(v, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const v = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
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
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const v = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(v, l);
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
        v = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (v && t.StableID.setOverride(v, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: v, details: p } = this._store.getGate(s),
        g = (0, t._makeFeatureGate)(s, p, v),
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
      const { result: v, details: p } = this._store.getConfig(s),
        g = (0, t._makeDynamicConfig)(s, p, v),
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
      var l, d, v, p;
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
          (p =
            (v = this.overrideAdapter) === null || v === void 0
              ? void 0
              : v.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(v, h, this._user, u),
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
      var l, d, v;
      const { result: p, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, p),
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
        (v = h?.__value) !== null && v !== void 0 ? v : f.__value,
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
      const { result: v, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
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
  }
  return ((Br.default = i), Br);
}
var Hl;
function Q_() {
  return (
    Hl ||
      ((Hl = 1),
      (function (e) {
        var t =
            (br && br.__createBinding) ||
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
            (br && br.__exportStar) ||
            function (i, c) {
              for (var s in i)
                s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, i, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = sr(),
          a = Z_();
        ((e.StatsigClient = a.default), r(sr(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(br)),
    br
  );
}
var va = {},
  ha = {},
  Kl;
function em() {
  if (Kl) return ha;
  ((Kl = 1),
    Object.defineProperty(ha, "__esModule", { value: !0 }),
    (ha.initFeatureFlags = void 0));
  const e = he(),
    t = ke(),
    r = ui(),
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
    (ha.initFeatureFlags = (0, r.withRateLimiter)(
      c,
      n,
      a,
      `Feature flags initialisation calls are rate limited at ${n}req/${a / 1e3}s`,
    )),
    ha
  );
}
var Wl;
function tm() {
  if (Wl) return va;
  ((Wl = 1),
    Object.defineProperty(va, "__esModule", { value: !0 }),
    (va.ForgeDataAdapter = void 0));
  const e = em();
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
  return ((va.ForgeDataAdapter = t), va);
}
var ps = {},
  Jl;
function Nv() {
  return (
    Jl ||
      ((Jl = 1),
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
      })(ps)),
    ps
  );
}
var ga = {},
  Xl;
function rm() {
  if (Xl) return ga;
  ((Xl = 1),
    Object.defineProperty(ga, "__esModule", { value: !0 }),
    (ga.trackFeatureFlagEvent = void 0));
  const e = he(),
    t = ke(),
    r = Nv(),
    n = ui(),
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
    (ga.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    )),
    ga
  );
}
var Yl;
function nm() {
  if (Yl) return da;
  ((Yl = 1),
    Object.defineProperty(da, "__esModule", { value: !0 }),
    (da.ForgeFeatureFlags = void 0));
  const e = Q_(),
    t = tm(),
    r = Nv(),
    n = rm();
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
  return ((da.ForgeFeatureFlags = a), da);
}
var Zl;
function am() {
  return (
    Zl ||
      ((Zl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = nm();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(fs)),
    fs
  );
}
var Ql;
function om() {
  return (
    Ql ||
      ((Ql = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = vt;
        var r = Vb();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(ao(), e),
          t.__exportStar(Wb(), e),
          t.__exportStar(jc(), e),
          t.__exportStar(E_(), e),
          t.__exportStar(C_(), e),
          t.__exportStar(R_(), e),
          t.__exportStar(I_(), e),
          t.__exportStar(j_(), e),
          t.__exportStar(M_(), e),
          t.__exportStar(L_(), e),
          (e.i18n = t.__importStar(B_())),
          t.__exportStar(q_(), e),
          t.__exportStar(K_(), e),
          t.__exportStar(am(), e));
      })(zi)),
    zi
  );
}
var Ga = om();
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
var im = {};
function pi() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : im;
}
var Fv = Object.assign,
  $o = Object.getOwnPropertyDescriptor,
  Rt = Object.defineProperty,
  vi = Object.prototype,
  Qs = [];
Object.freeze(Qs);
var Lv = {};
Object.freeze(Lv);
var sm = typeof Proxy < "u",
  cm = Object.toString();
function Bv() {
  sm || X("Proxy not available");
}
function Uv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var en = function () {};
function mt(e) {
  return typeof e == "function";
}
function Sr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function hi(e) {
  return e !== null && typeof e == "object";
}
function cr(e) {
  if (!hi(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === cm;
}
function qv(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function gi(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function zv(e, t, r) {
  Rt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Ir(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return hi(n) && n[r] === !0;
    }
  );
}
function vn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function um(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Wt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var $v = typeof Object.getOwnPropertySymbols < "u";
function lm(e) {
  var t = Object.keys(e);
  if (!$v) return t;
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
var bi =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : $v
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Vv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Yt(e, t) {
  return vi.hasOwnProperty.call(e, t);
}
var dm =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      bi(t).forEach(function (n) {
        r[n] = $o(t, n);
      }),
      r
    );
  };
function We(e, t) {
  return !!(e & t);
}
function Je(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, vm(n.key), n));
  }
}
function hn(e, t, r) {
  return (t && fm(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function tn(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = hm(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Er() {
  return (
    (Er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Er.apply(null, arguments)
  );
}
function Gv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ec(e, t));
}
function ec(e, t) {
  return (
    (ec = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ec(e, t)
  );
}
function pm(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function vm(e) {
  var t = pm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hm(e, t) {
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
var Pt = Symbol("mobx-stored-annotations");
function At(e) {
  function t(r, n) {
    if (io(n)) return e.decorate_20223_(r, n);
    oo(r, n, e);
  }
  return Object.assign(t, e);
}
function oo(e, t, r) {
  (Yt(e, Pt) || gi(e, Pt, Er({}, e[Pt])), km(r) || (e[Pt][t] = r));
}
function gm(e) {
  return (Yt(e, Pt) || gi(e, Pt, Er({}, e[Pt])), e[Pt]);
}
function io(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var $ = Symbol("mobx administration"),
  lr = (function () {
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
        return sh(this);
      }),
      (t.reportChanged = function () {
        (ct(), ch(this), ut());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      hn(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return We(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return We(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return We(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var Dc = Ir("Atom", lr);
function Hv(e, t, r) {
  (t === void 0 && (t = en), r === void 0 && (r = en));
  var n = new lr(e);
  return (t !== en && Cy(n, t), r !== en && ph(n, r), n);
}
function bm(e, t) {
  return xh(e, t);
}
function _m(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Vo = { structural: bm, default: _m };
function xr(e, t, r) {
  return bh(e)
    ? e
    : Array.isArray(e)
      ? ue.array(e, { name: r })
      : cr(e)
        ? ue.object(e, void 0, { name: r })
        : vn(e)
          ? ue.map(e, { name: r })
          : Wt(e)
            ? ue.set(e, { name: r })
            : typeof e == "function" && !on(e) && !Ka(e)
              ? qv(e)
                ? sn(e)
                : Ha(r, e)
              : e;
}
function mm(e, t, r) {
  if (e == null || Ei(e) || Si(e) || Dr(e) || Ct(e)) return e;
  if (Array.isArray(e)) return ue.array(e, { name: r, deep: !1 });
  if (cr(e)) return ue.object(e, void 0, { name: r, deep: !1 });
  if (vn(e)) return ue.map(e, { name: r, deep: !1 });
  if (Wt(e)) return ue.set(e, { name: r, deep: !1 });
}
function _i(e) {
  return e;
}
function ym(e, t) {
  return xh(e, t) ? t : e;
}
var wm = "override";
function km(e) {
  return e.annotationType_ === wm;
}
function so(e, t) {
  return { annotationType_: e, options_: t, make_: Om, extend_: Sm, decorate_20223_: Em };
}
function Om(e, t, r, n) {
  var a;
  if ((a = this.options_) != null && a.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (on(r.value)) return 1;
  var o = Kv(e, this, t, r, !1);
  return (Rt(n, t, o), 2);
}
function Sm(e, t, r, n) {
  var a = Kv(e, this, t, r);
  return e.defineProperty_(t, a, n);
}
function Em(e, t) {
  var r = t.kind,
    n = t.name,
    a = t.addInitializer,
    o = this,
    i = function (u) {
      var l, d, v, p;
      return Cr(
        (l = (d = o.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        u,
        (v = (p = o.options_) == null ? void 0 : p.autoAction) != null ? v : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var u,
        l = s;
      return (
        on(l) || (l = i(l)),
        (u = o.options_) != null && u.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var c;
    return (
      on(e) || (e = i(e)),
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
function xm(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Kv(e, t, r, n, a) {
  var o, i, c, s, u, l, d;
  (a === void 0 && (a = j.safeDescriptors), xm(e, t, r, n));
  var v = n.value;
  if ((o = t.options_) != null && o.bound) {
    var p;
    v = v.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return {
    value: Cr(
      (i = (c = t.options_) == null ? void 0 : c.name) != null ? i : r.toString(),
      v,
      (s = (u = t.options_) == null ? void 0 : u.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: a ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !a,
  };
}
function Wv(e, t) {
  return { annotationType_: e, options_: t, make_: Cm, extend_: Pm, decorate_20223_: Rm };
}
function Cm(e, t, r, n) {
  var a;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (a = this.options_) != null &&
    a.bound &&
    (!Yt(e.target_, t) || !Ka(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ka(r.value)) return 1;
  var o = Jv(e, this, t, r, !1, !1);
  return (Rt(n, t, o), 2);
}
function Pm(e, t, r, n) {
  var a,
    o = Jv(e, this, t, r, (a = this.options_) == null ? void 0 : a.bound);
  return e.defineProperty_(t, o, n);
}
function Rm(e, t) {
  var r,
    n = t.name,
    a = t.addInitializer;
  return (
    Ka(e) || (e = sn(e)),
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
function Am(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Jv(e, t, r, n, a, o) {
  (o === void 0 && (o = j.safeDescriptors), Am(e, t, r, n));
  var i = n.value;
  if ((Ka(i) || (i = sn(i)), a)) {
    var c;
    ((i = i.bind((c = e.proxy_) != null ? c : e.target_)), (i.isMobXFlow = !0));
  }
  return { value: i, configurable: o ? e.isPlainObject_ : !0, enumerable: !1, writable: !o };
}
function Tc(e, t) {
  return { annotationType_: e, options_: t, make_: Im, extend_: jm, decorate_20223_: Dm };
}
function Im(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function jm(e, t, r, n) {
  return (
    Tm(e, this, t, r),
    e.defineComputedProperty_(t, Er({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function Dm(e, t) {
  var r = this,
    n = t.name,
    a = t.addInitializer;
  return (
    a(function () {
      var o = gn(this)[$],
        i = Er({}, r.options_, { get: e, context: this });
      (i.name || (i.name = "ObservableObject." + n.toString()), o.values_.set(n, new yt(i)));
    }),
    function () {
      return this[$].getObservablePropValue_(n);
    }
  );
}
function Tm(e, t, r, n) {
  (t.annotationType_, n.get);
}
function mi(e, t) {
  return { annotationType_: e, options_: t, make_: Mm, extend_: Nm, decorate_20223_: Fm };
}
function Mm(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Nm(e, t, r, n) {
  var a, o;
  return (
    Lm(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (a = (o = this.options_) == null ? void 0 : o.enhancer) != null ? a : xr,
      n,
    )
  );
}
function Fm(e, t) {
  var r = this,
    n = t.kind,
    a = t.name,
    o = new WeakSet();
  function i(c, s) {
    var u,
      l,
      d = gn(c)[$],
      v = new kr(
        s,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : xr,
        "ObservableObject." + a.toString(),
        !1,
      );
    (d.values_.set(a, v), o.add(c));
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
function Lm(e, t, r, n) {
  t.annotationType_;
}
var Bm = "true",
  Um = Xv();
function Xv(e) {
  return { annotationType_: Bm, options_: e, make_: qm, extend_: zm, decorate_20223_: $m };
}
function qm(e, t, r, n) {
  var a, o;
  if (r.get) return yi.make_(e, t, r, n);
  if (r.set) {
    var i = on(r.set) ? r.set : Cr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: j.safeDescriptors ? e.isPlainObject_ : !0,
          set: i,
        }) === null
        ? 0
        : 2
      : (Rt(n, t, { configurable: !0, set: i }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var c;
    if (qv(r.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? sn.bound : sn;
      return u.make_(e, t, r, n);
    }
    var l = (c = this.options_) != null && c.autoBind ? Ha.bound : Ha;
    return l.make_(e, t, r, n);
  }
  var d = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? ue.ref : ue;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var v;
    r.value = r.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return d.make_(e, t, r, n);
}
function zm(e, t, r, n) {
  var a, o;
  if (r.get) return yi.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: j.safeDescriptors ? e.isPlainObject_ : !0, set: Cr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var i;
    r.value = r.value.bind((i = e.proxy_) != null ? i : e.target_);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ue.ref : ue;
  return c.extend_(e, t, r, n);
}
function $m(e, t) {
  X("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Vm = "observable",
  Gm = "observable.ref",
  Hm = "observable.shallow",
  Km = "observable.struct",
  Yv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Yv);
function go(e) {
  return e || Yv;
}
var tc = mi(Vm),
  Wm = mi(Gm, { enhancer: _i }),
  Jm = mi(Hm, { enhancer: mm }),
  Xm = mi(Km, { enhancer: ym }),
  Zv = At(tc);
function bo(e) {
  return e.deep === !0 ? xr : e.deep === !1 ? _i : Zm(e.defaultDecorator);
}
function Ym(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Xv(e)) : void 0;
}
function Zm(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : xr;
}
function Qv(e, t, r) {
  if (io(t)) return tc.decorate_20223_(e, t);
  if (Sr(t)) {
    oo(e, t, tc);
    return;
  }
  return bh(e)
    ? e
    : cr(e)
      ? ue.object(e, t, r)
      : Array.isArray(e)
        ? ue.array(e, t)
        : vn(e)
          ? ue.map(e, t)
          : Wt(e)
            ? ue.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : ue.box(e, t);
}
Fv(Qv, Zv);
var Qm = {
    box: function (t, r) {
      var n = go(r);
      return new kr(t, bo(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = go(r);
      return (j.useProxies === !1 || n.proxy === !1 ? Yy : qy)(t, bo(n), n.name);
    },
    map: function (t, r) {
      var n = go(r);
      return new yh(t, bo(n), n.name);
    },
    set: function (t, r) {
      var n = go(r);
      return new wh(t, bo(n), n.name);
    },
    object: function (t, r, n) {
      return Tr(function () {
        return Iy(j.useProxies === !1 || n?.proxy === !1 ? gn({}, n) : Ly({}, n), t, r);
      });
    },
    ref: At(Wm),
    shallow: At(Jm),
    deep: Zv,
    struct: At(Xm),
  },
  ue = Fv(Qv, Qm),
  eh = "computed",
  ey = "computed.struct",
  rc = Tc(eh),
  ty = Tc(ey, { equals: Vo.structural }),
  yi = function (t, r) {
    if (io(r)) return rc.decorate_20223_(t, r);
    if (Sr(r)) return oo(t, r, rc);
    if (cr(t)) return At(Tc(eh, t));
    var n = cr(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new yt(n));
  };
Object.assign(yi, rc);
yi.struct = At(ty);
var td,
  rd,
  Go = 0,
  ry = 1,
  ny =
    (td = (rd = $o(function () {}, "name")) == null ? void 0 : rd.configurable) != null ? td : !1,
  nd = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function Cr(e, t, r, n) {
  r === void 0 && (r = !1);
  function a() {
    return ay(e, r, t, n || this, arguments);
  }
  return (
    (a.isMobxAction = !0),
    (a.toString = function () {
      return t.toString();
    }),
    ny && ((nd.value = e), Rt(a, "name", nd)),
    a
  );
}
function ay(e, t, r, n, a) {
  var o = oy(e, t);
  try {
    return r.apply(n, a);
  } catch (i) {
    throw ((o.error_ = i), i);
  } finally {
    iy(o);
  }
}
function oy(e, t, r, n) {
  var a = !1,
    o = 0,
    i = j.trackingDerivation,
    c = !t || !i;
  ct();
  var s = j.allowStateChanges;
  c && (jr(), (s = wi(!0)));
  var u = Mc(!0),
    l = {
      runAsAction_: c,
      prevDerivation_: i,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: a,
      startTime_: o,
      actionId_: ry++,
      parentActionId_: Go,
    };
  return ((Go = l.actionId_), l);
}
function iy(e) {
  (Go !== e.actionId_ && X(30),
    (Go = e.parentActionId_),
    e.error_ !== void 0 && (j.suppressReactionErrors = !0),
    ki(e.prevAllowStateChanges_),
    Na(e.prevAllowStateReads_),
    ut(),
    e.runAsAction_ && Zt(e.prevDerivation_),
    (j.suppressReactionErrors = !1));
}
function sy(e, t) {
  var r = wi(e);
  try {
    return t();
  } finally {
    ki(r);
  }
}
function wi(e) {
  var t = j.allowStateChanges;
  return ((j.allowStateChanges = e), t);
}
function ki(e) {
  j.allowStateChanges = e;
}
var kr = (function (e) {
    function t(n, a, o, i, c) {
      var s;
      return (
        o === void 0 && (o = "ObservableValue"),
        c === void 0 && (c = Vo.default),
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
    Gv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a;
      }),
      (r.set = function (a) {
        (this.value_, (a = this.prepareNewValue_(a)), a !== j.UNCHANGED && this.setNewValue_(a));
      }),
      (r.prepareNewValue_ = function (a) {
        if (it(this)) {
          var o = st(this, { object: this, type: It, newValue: a });
          if (!o) return j.UNCHANGED;
          a = o.newValue;
        }
        return (
          (a = this.enhancer(a, this.value_, this.name_)),
          this.equals(this.value_, a) ? j.UNCHANGED : a
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
        return co(this, a);
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
        return Vv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(lr),
  yt = (function () {
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
        (this.isTracing_ = Ho.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || X(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = Cr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Vo.structural : Vo.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        fy(this);
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
          j.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          nc(this) &&
            (this.warnAboutUntrackedRead_(), ct(), (this.value_ = this.computeValue_(!1)), ut());
        else if ((sh(this), nc(this))) {
          var n = j.trackingContext;
          (this.keepAlive_ && !n && (j.trackingContext = this),
            this.trackAndCompute() && dy(this),
            (j.trackingContext = n));
        }
        var a = this.value_;
        if (jo(a)) throw a.cause;
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
          a = this.dependenciesState_ === Z.NOT_TRACKING_,
          o = this.computeValue_(!0),
          i = a || jo(n) || jo(o) || !this.equals_(n, o);
        return (i && (this.value_ = o), i);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var a = wi(!1),
          o;
        if (n) o = th(this, this.derivation, this.scope_);
        else if (j.disableErrorBoundaries === !0) o = this.derivation.call(this.scope_);
        else
          try {
            o = this.derivation.call(this.scope_);
          } catch (i) {
            o = new Ko(i);
          }
        return (ki(a), (this.isComputing = !1), o);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ac(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, a) {
        var o = this,
          i = !0,
          c = void 0;
        return ky(function () {
          var s = o.get();
          if (!i || a) {
            var u = jr();
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
        return Vv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      hn(e, [
        {
          key: "isComputing",
          get: function () {
            return We(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return We(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return We(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return We(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Je(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return We(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var Oi = Ir("ComputedValue", yt),
  Z;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Z || (Z = {}));
var Ho;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Ho || (Ho = {}));
var Ko = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function jo(e) {
  return e instanceof Ko;
}
function nc(e) {
  switch (e.dependenciesState_) {
    case Z.UP_TO_DATE_:
      return !1;
    case Z.NOT_TRACKING_:
    case Z.STALE_:
      return !0;
    case Z.POSSIBLY_STALE_: {
      for (var t = Mc(!0), r = jr(), n = e.observing_, a = n.length, o = 0; o < a; o++) {
        var i = n[o];
        if (Oi(i)) {
          if (j.disableErrorBoundaries) i.get();
          else
            try {
              i.get();
            } catch {
              return (Zt(r), Na(t), !0);
            }
          if (e.dependenciesState_ === Z.STALE_) return (Zt(r), Na(t), !0);
        }
      }
      return (nh(e), Zt(r), Na(t), !1);
    }
  }
}
function th(e, t, r) {
  var n = Mc(!0);
  (nh(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++j.runId));
  var a = j.trackingDerivation;
  ((j.trackingDerivation = e), j.inBatch++);
  var o;
  if (j.disableErrorBoundaries === !0) o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (i) {
      o = new Ko(i);
    }
  return (j.inBatch--, (j.trackingDerivation = a), cy(e), Na(n), o);
}
function cy(e) {
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
    (s.diffValue === 0 && oh(s, e), (s.diffValue = 0));
  }
  for (; a--; ) {
    var u = r[a];
    u.diffValue === 1 && ((u.diffValue = 0), ly(u, e));
  }
  n !== Z.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ac(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) oh(t[r], e);
  e.dependenciesState_ = Z.NOT_TRACKING_;
}
function rh(e) {
  var t = jr();
  try {
    return e();
  } finally {
    Zt(t);
  }
}
function jr() {
  var e = j.trackingDerivation;
  return ((j.trackingDerivation = null), e);
}
function Zt(e) {
  j.trackingDerivation = e;
}
function Mc(e) {
  var t = j.allowStateReads;
  return ((j.allowStateReads = e), t);
}
function Na(e) {
  j.allowStateReads = e;
}
function nh(e) {
  if (e.dependenciesState_ !== Z.UP_TO_DATE_) {
    e.dependenciesState_ = Z.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Z.UP_TO_DATE_;
  }
}
var Do = function () {
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
  ah = !1,
  j = (function () {
    var e = pi();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (To = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new Do().version && (To = !1),
      To
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Do()))
        : (setTimeout(function () {
            ah || X(35);
          }, 1),
          new Do())
    );
  })();
function uy() {
  if (((j.pendingReactions.length || j.inBatch || j.isRunningReactions) && X(36), (ah = !0), To)) {
    var e = pi();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (j = new Do()));
  }
}
function ly(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function oh(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && ih(e));
}
function ih(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), j.pendingUnobservations.push(e));
}
function ct() {
  j.inBatch++;
}
function ut() {
  if (--j.inBatch === 0) {
    uh();
    for (var e = j.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof yt && r.suspend_()));
    }
    j.pendingUnobservations = [];
  }
}
function sh(e) {
  var t = j.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && j.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && j.inBatch > 0 && ih(e), !1);
}
function ch(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Z.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Z.STALE_));
    }));
}
function dy(e) {
  e.lowestObserverState_ !== Z.STALE_ &&
    ((e.lowestObserverState_ = Z.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Z.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Z.STALE_)
        : t.dependenciesState_ === Z.UP_TO_DATE_ && (e.lowestObserverState_ = Z.UP_TO_DATE_);
    }));
}
function fy(e) {
  e.lowestObserverState_ === Z.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Z.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Z.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Z.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = Z.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Ho.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), j.pendingReactions.push(this), uh());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (ct(), (this.isScheduled = !1));
        var n = j.trackingContext;
        if (((j.trackingContext = this), nc(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (a) {
            this.reportExceptionInDerivation_(a);
          }
        }
        ((j.trackingContext = n), ut());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (ct(), (this.isRunning = !0));
        var a = j.trackingContext;
        j.trackingContext = this;
        var o = th(this, n, void 0);
        ((j.trackingContext = a),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ac(this),
          jo(o) && this.reportExceptionInDerivation_(o.cause),
          ut());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var a = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (j.disableErrorBoundaries) throw n;
      var o = "[mobx] uncaught error in '" + this + "'";
      (j.suppressReactionErrors || console.error(o, n),
        j.globalReactionErrorHandlers.forEach(function (i) {
          return i(n, a);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (ct(), ac(this), ut()));
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
    hn(e, [
      {
        key: "isDisposed",
        get: function () {
          return We(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return We(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return We(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return We(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Je(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return We(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var py = 100,
  oc = function (t) {
    return t();
  };
function uh() {
  j.inBatch > 0 || j.isRunningReactions || oc(vy);
}
function vy() {
  j.isRunningReactions = !0;
  for (var e = j.pendingReactions, t = 0; e.length > 0; ) {
    ++t === py && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, a = r.length; n < a; n++) r[n].runReaction_();
  }
  j.isRunningReactions = !1;
}
var Wo = Ir("Reaction", Mt);
function hy(e) {
  var t = oc;
  oc = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Fa() {
  return !1;
}
function gy(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var lh = "action",
  by = "action.bound",
  dh = "autoAction",
  _y = "autoAction.bound",
  my = "<unnamed action>",
  ic = so(lh),
  yy = so(by, { bound: !0 }),
  sc = so(dh, { autoAction: !0 }),
  wy = so(_y, { autoAction: !0, bound: !0 });
function fh(e) {
  var t = function (n, a) {
    if (mt(n)) return Cr(n.name || my, n, e);
    if (mt(a)) return Cr(n, a, e);
    if (io(a)) return (e ? sc : ic).decorate_20223_(n, a);
    if (Sr(a)) return oo(n, a, e ? sc : ic);
    if (Sr(n)) return At(so(e ? dh : lh, { name: n, autoAction: e }));
  };
  return t;
}
var lt = fh(!1);
Object.assign(lt, ic);
var Ha = fh(!0);
Object.assign(Ha, sc);
lt.bound = At(yy);
Ha.bound = At(wy);
function on(e) {
  return mt(e) && e.isMobxAction === !0;
}
function ky(e, t) {
  var r, n, a, o;
  t === void 0 && (t = Lv);
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
    var u = Sy(t),
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
var Oy = function (t) {
  return t();
};
function Sy(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Oy;
}
var Ey = "onBO",
  xy = "onBUO";
function Cy(e, t, r) {
  return vh(Ey, e, t, r);
}
function ph(e, t, r) {
  return vh(xy, e, t, r);
}
function vh(e, t, r, n) {
  var a = Yo(t),
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
var Py = "never",
  _o = "always",
  Ry = "observed";
function Ay(e) {
  e.isolateGlobalState === !0 && uy();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (j.useProxies = t === _o ? !0 : t === Py ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (j.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === _o ? _o : r === Ry;
    ((j.enforceActions = n), (j.allowStateChanges = !(n === !0 || n === _o)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (a) {
    a in e && (j[a] = !!e[a]);
  }),
    (j.allowStateReads = !j.observableRequiresReaction),
    e.reactionScheduler && hy(e.reactionScheduler));
}
function Iy(e, t, r, n) {
  var a = dm(t);
  return (
    Tr(function () {
      var o = gn(e, n)[$];
      bi(a).forEach(function (i) {
        o.extend_(i, a[i], r && i in r ? r[i] : !0);
      });
    }),
    e
  );
}
function jy(e, t) {
  return hh(Yo(e, t));
}
function hh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = Dy(e.observing_).map(hh)),
    t
  );
}
function Dy(e) {
  return Array.from(new Set(e));
}
var Ty = 0;
function gh() {
  this.message = "FLOW_CANCELLED";
}
gh.prototype = Object.create(Error.prototype);
var vs = Wv("flow"),
  My = Wv("flow.bound", { bound: !0 }),
  sn = Object.assign(function (t, r) {
    if (io(r)) return vs.decorate_20223_(t, r);
    if (Sr(r)) return oo(t, r, vs);
    var n = t,
      a = n.name || "<unnamed flow>",
      o = function () {
        var c = this,
          s = arguments,
          u = ++Ty,
          l = lt(a + " - runid: " + u + " - init", n).apply(c, s),
          d,
          v = void 0,
          p = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function b(k) {
              v = void 0;
              var w;
              try {
                w = lt(a + " - runid: " + u + " - yield " + h++, l.next).call(l, k);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function _(k) {
              v = void 0;
              var w;
              try {
                w = lt(a + " - runid: " + u + " - yield " + h++, l.throw).call(l, k);
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
              return k.done ? g(k.value) : ((v = Promise.resolve(k.value)), v.then(b, _));
            }
            b(void 0);
          });
        return (
          (p.cancel = lt(a + " - runid: " + u + " - cancel", function () {
            try {
              v && ad(v);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(en, en), ad(f), d(new gh()));
            } catch (h) {
              d(h);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, vs);
sn.bound = At(My);
function ad(e) {
  mt(e.cancel) && e.cancel();
}
function Ka(e) {
  return e?.isMobXFlow === !0;
}
function Ny(e, t) {
  return e ? Ei(e) || !!e[$] || Dc(e) || Wo(e) || Oi(e) : !1;
}
function bh(e) {
  return Ny(e);
}
function Jt(e, t) {
  (t === void 0 && (t = void 0), ct());
  try {
    return e.apply(t);
  } finally {
    ut();
  }
}
function qr(e) {
  return e[$];
}
var Fy = {
  has: function (t, r) {
    return qr(t).has_(r);
  },
  get: function (t, r) {
    return qr(t).get_(r);
  },
  set: function (t, r, n) {
    var a;
    return Sr(r) ? ((a = qr(t).set_(r, n, !0)) != null ? a : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return Sr(r) ? ((n = qr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var a;
    return (a = qr(t).defineProperty_(r, n)) != null ? a : !0;
  },
  ownKeys: function (t) {
    return qr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    X(13);
  },
};
function Ly(e, t) {
  var r, n;
  return (
    Bv(),
    (e = gn(e, t)),
    (n = (r = e[$]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, Fy))
  );
}
function it(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function co(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Uv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function st(e, t) {
  var r = jr();
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
function uo(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Uv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function _t(e, t) {
  var r = jr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var a = 0, o = n.length; a < o; a++) n[a](t);
    Zt(r);
  }
}
function _h(e, t, r) {
  return (
    Tr(function () {
      var n,
        a = gn(e, r)[$];
      ((n = t) != null || (t = gm(e)),
        bi(t).forEach(function (o) {
          return a.make_(o, t[o]);
        }));
    }),
    e
  );
}
var od = "splice",
  It = "update",
  By = 1e4,
  Uy = {
    get: function (t, r) {
      var n = t[$];
      return r === $
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Yt(Jo, r)
              ? Jo[r]
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
      X(15);
    },
  },
  Nc = (function () {
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
          this.legacyMode_ && a > 0 && Eh(n + a + 1));
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
          o === void 0 && (o = Qs),
          it(this))
        ) {
          var s = st(this, { object: this.proxy_, type: od, index: n, removedCount: a, added: o });
          if (!s) return Qs;
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
        if (o.length < By) {
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
        var i = !this.owned_ && Fa(),
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
        var i = !this.owned_ && Fa(),
          c = bt(this),
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
          if (it(this)) {
            var c = st(this, { type: It, object: this.proxy_, index: n, newValue: a });
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
function qy(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    Bv(),
    Tr(function () {
      var a = new Nc(r, t, n, !1);
      zv(a.values_, $, a);
      var o = new Proxy(a.values_, Uy);
      return ((a.proxy_ = o), e && e.length && a.spliceWithArray_(0, 0, e), o);
    })
  );
}
var Jo = {
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
    return (j.trackingDerivation && X(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    j.trackingDerivation && X(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[$],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ve("at", Ze);
ve("concat", Ze);
ve("flat", Ze);
ve("includes", Ze);
ve("indexOf", Ze);
ve("join", Ze);
ve("lastIndexOf", Ze);
ve("slice", Ze);
ve("toString", Ze);
ve("toLocaleString", Ze);
ve("toSorted", Ze);
ve("toSpliced", Ze);
ve("with", Ze);
ve("every", wt);
ve("filter", wt);
ve("find", wt);
ve("findIndex", wt);
ve("findLast", wt);
ve("findLastIndex", wt);
ve("flatMap", wt);
ve("forEach", wt);
ve("map", wt);
ve("some", wt);
ve("toReversed", wt);
ve("reduce", mh);
ve("reduceRight", mh);
function ve(e, t) {
  typeof Array.prototype[e] == "function" && (Jo[e] = t(e));
}
function Ze(e) {
  return function () {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function wt(e) {
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
function mh(e) {
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
var zy = Ir("ObservableArrayAdministration", Nc);
function Si(e) {
  return hi(e) && zy(e[$]);
}
var $y = {},
  or = "add",
  Xo = "delete",
  yh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = xr),
        a === void 0 && (a = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$] = $y),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = a),
        mt(Map) || X(18),
        Tr(function () {
          ((o.keysAtom_ = Hv("ObservableMap.keys()")),
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
        if (!j.trackingDerivation) return this.has_(n);
        var o = this.hasMap_.get(n);
        if (!o) {
          var i = (o = new kr(this.has_(n), _i, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, i),
            ph(i, function () {
              return a.hasMap_.delete(n);
            }));
        }
        return o.get();
      }),
      (t.set = function (n, a) {
        var o = this.has_(n);
        if (it(this)) {
          var i = st(this, { type: o ? It : or, object: this, newValue: a, name: n });
          if (!i) return this;
          a = i.newValue;
        }
        return (o ? this.updateValue_(n, a) : this.addValue_(n, a), this);
      }),
      (t.delete = function (n) {
        var a = this;
        if ((this.keysAtom_, it(this))) {
          var o = st(this, { type: Xo, object: this, name: n });
          if (!o) return !1;
        }
        if (this.has_(n)) {
          var i = Fa(),
            c = bt(this),
            s =
              c || i
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
        if (((a = o.prepareNewValue_(a)), a !== j.UNCHANGED)) {
          var i = Fa(),
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
              l = new kr(a, o.enhancer_, "ObservableMap.key", !1);
            (o.data_.set(n, l),
              (a = l.value_),
              (u = o.hasMap_.get(n)) == null || u.setNewValue_(!0),
              o.keysAtom_.reportChanged());
          }));
        var i = Fa(),
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
        for (var o = tn(this), i; !(i = o()).done; ) {
          var c = i.value,
            s = c[0],
            u = c[1];
          n.call(a, u, s, this);
        }
      }),
      (t.merge = function (n) {
        var a = this;
        return (
          Dr(n) && (n = new Map(n)),
          Jt(function () {
            cr(n)
              ? lm(n).forEach(function (o) {
                  return a.set(o, n[o]);
                })
              : Array.isArray(n)
                ? n.forEach(function (o) {
                    var i = o[0],
                      c = o[1];
                    return a.set(i, c);
                  })
                : vn(n)
                  ? (um(n) || X(19, n),
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
          rh(function () {
            for (var a = tn(n.keys()), o; !(o = a()).done; ) {
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
              var o = Vy(n), i = new Map(), c = !1, s = tn(a.data_.keys()), u;
              !(u = s()).done;
            ) {
              var l = u.value;
              if (!o.has(l)) {
                var d = a.delete(l);
                if (d) c = !0;
                else {
                  var v = a.data_.get(l);
                  i.set(l, v);
                }
              }
            }
            for (var p = tn(o.entries()), g; !(g = p()).done; ) {
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
        return uo(this, n);
      }),
      (t.intercept_ = function (n) {
        return co(this, n);
      }),
      hn(e, [
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
  Dr = Ir("ObservableMap", yh);
function id(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Lc(e));
}
function Vy(e) {
  if (vn(e) || Dr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (cr(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return X(21, e);
}
var Gy = {},
  wh = (function () {
    function e(r, n, a) {
      var o = this;
      (n === void 0 && (n = xr),
        a === void 0 && (a = "ObservableSet"),
        (this.name_ = void 0),
        (this[$] = Gy),
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
        Tr(function () {
          ((o.atom_ = Hv(o.name_)), r && o.replace(r));
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
          rh(function () {
            for (var a = tn(n.data_.values()), o; !(o = a()).done; ) {
              var i = o.value;
              n.delete(i);
            }
          });
        });
      }),
      (t.forEach = function (n, a) {
        for (var o = tn(this), i; !(i = o()).done; ) {
          var c = i.value;
          n.call(a, c, c, this);
        }
      }),
      (t.add = function (n) {
        var a = this;
        if ((this.atom_, it(this))) {
          var o = st(this, { type: or, object: this, newValue: n });
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
        if (it(this)) {
          var o = st(this, { type: Xo, object: this, oldValue: n });
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
                    type: Xo,
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
        if (Wt(n) && !Ct(n)) return n.intersection(this);
        var a = new Set(this);
        return a.intersection(n);
      }),
      (t.union = function (n) {
        if (Wt(n) && !Ct(n)) return n.union(this);
        var a = new Set(this);
        return a.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Wt(n) && !Ct(n)) return n.symmetricDifference(this);
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
        if (Wt(n) && !Ct(n)) return n.isDisjointFrom(this);
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
              : Wt(n)
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
      hn(e, [
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
  Ct = Ir("ObservableSet", wh);
function sd(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Lc(e));
}
var cd = Object.create(null),
  ud = "remove",
  kh = (function () {
    function e(r, n, a, o) {
      (n === void 0 && (n = new Map()),
        o === void 0 && (o = Um),
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
        if (it(this)) {
          var i = st(this, { type: It, object: this.proxy_ || this.target_, name: n, newValue: a });
          if (!i) return null;
          a = i.newValue;
        }
        if (((a = o.prepareNewValue_(a)), a !== j.UNCHANGED)) {
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
        return (j.trackingDerivation && !Yt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, a, o) {
        return (
          o === void 0 && (o = !1),
          Yt(this.target_, n)
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
        if (!j.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var a = this.pendingKeys_.get(n);
        return (
          a ||
            ((a = new kr(n in this.target_, _i, "ObservableObject.key?", !1)),
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
          for (var i = this.target_; i && i !== vi; ) {
            var c = $o(i, n);
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
          ct();
          var i = this.delete_(n);
          if (!i) return i;
          if (it(this)) {
            var c = st(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: or,
              newValue: a.value,
            });
            if (!c) return null;
            var s = c.newValue;
            a.value !== s && (a = Er({}, a, { value: s }));
          }
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, a)) return !1;
          } else Rt(this.target_, n, a);
          this.notifyPropertyAddition_(n, a.value);
        } finally {
          ut();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, a, o, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          ct();
          var c = this.delete_(n);
          if (!c) return c;
          if (it(this)) {
            var s = st(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: or,
              newValue: a,
            });
            if (!s) return null;
            a = s.newValue;
          }
          var u = ld(n),
            l = {
              configurable: j.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else Rt(this.target_, n, l);
          var d = new kr(a, o, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          ut();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          ct();
          var i = this.delete_(n);
          if (!i) return i;
          if (it(this)) {
            var c = st(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: or,
              newValue: void 0,
            });
            if (!c) return null;
          }
          (a.name || (a.name = "ObservableObject.key"), (a.context = this.proxy_ || this.target_));
          var s = ld(n),
            u = {
              configurable: j.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else Rt(this.target_, n, u);
          (this.values_.set(n, new yt(a)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          ut();
        }
        return !0;
      }),
      (t.delete_ = function (n, a) {
        if ((a === void 0 && (a = !1), this.keysAtom_, !Yt(this.target_, n))) return !0;
        if (it(this)) {
          var o = st(this, { object: this.proxy_ || this.target_, name: n, type: ud });
          if (!o) return null;
        }
        try {
          var i;
          ct();
          var c = bt(this),
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
            (u && (this.values_.delete(n), u instanceof kr && (l = u.value_), ch(u)),
            this.keysAtom_.reportChanged(),
            (i = this.pendingKeys_) == null || (i = i.get(n)) == null || i.set(n in this.target_),
            c || s)
          ) {
            var v = {
              type: ud,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            c && _t(this, v);
          }
        } finally {
          ut();
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
        return (this.keysAtom_.reportObserved(), bi(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function gn(e, t) {
  var r;
  if (Yt(e, $)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    a = new kh(e, new Map(), String(n), Ym(t));
  return (gi(e, $, a), e);
}
var Hy = Ir("ObservableObjectAdministration", kh);
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
function Ei(e) {
  return hi(e) ? Hy(e[$]) : !1;
}
function dd(e, t, r) {
  var n;
  (n = e.target_[Pt]) == null || delete n[r];
}
var Ky = Sh(0),
  Wy = (function () {
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
  hs = 0,
  Oh = function () {};
function Jy(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Jy(Oh, Array.prototype);
var Fc = (function (e) {
  function t(n, a, o, i) {
    var c;
    return (
      o === void 0 && (o = "ObservableArray"),
      i === void 0 && (i = !1),
      (c = e.call(this) || this),
      Tr(function () {
        var s = new Nc(o, a, i, !0);
        ((s.proxy_ = c),
          zv(c, $, s),
          n && n.length && c.spliceWithArray(0, 0, n),
          Wy && Object.defineProperty(c, "0", Ky));
      }),
      c
    );
  }
  Gv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[$].atom_.reportObserved();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return Array.prototype.concat.apply(
        this.slice(),
        o.map(function (c) {
          return Si(c) ? c.slice() : c;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        a = 0;
      return Lc({
        next: function () {
          return a < n.length ? { value: n[a++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    hn(t, [
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
})(Oh);
Object.entries(Jo).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && gi(Fc.prototype, t, r);
});
function Sh(e) {
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
function Xy(e) {
  Rt(Fc.prototype, "" + e, Sh(e));
}
function Eh(e) {
  if (e > hs) {
    for (var t = hs; t < e + 100; t++) Xy(t);
    hs = e;
  }
}
Eh(1e3);
function Yy(e, t, r) {
  return new Fc(e, t, r);
}
function Yo(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Si(e)) return (t !== void 0 && X(23), e[$].atom_);
    if (Ct(e)) return e.atom_;
    if (Dr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || X(25, t, cc(e)), r);
    }
    if (Ei(e)) {
      if (!t) return X(26);
      var n = e[$].values_.get(t);
      return (n || X(27, t, cc(e)), n);
    }
    if (Dc(e) || Oi(e) || Wo(e)) return e;
  } else if (mt(e) && Wo(e[$])) return e[$];
  X(28);
}
function Zy(e, t) {
  if ((e || X(29), Dc(e) || Oi(e) || Wo(e) || Dr(e) || Ct(e))) return e;
  if (e[$]) return e[$];
  X(24, e);
}
function cc(e, t) {
  var r;
  if (t !== void 0) r = Yo(e, t);
  else {
    if (on(e)) return e.name;
    Ei(e) || Dr(e) || Ct(e) ? (r = Zy(e)) : (r = Yo(e));
  }
  return r.name_;
}
function Tr(e) {
  var t = jr(),
    r = wi(!0);
  ct();
  try {
    return e();
  } finally {
    (ut(), ki(r), Zt(t));
  }
}
var fd = vi.toString;
function xh(e, t, r) {
  return (r === void 0 && (r = -1), uc(e, t, r));
}
function uc(e, t, r, n, a) {
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
  ((e = pd(e)), (t = pd(t)));
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
    for (; l--; ) if (!uc(e[l], t[l], r - 1, n, a)) return !1;
  } else {
    var d = Object.keys(e),
      v = d.length;
    if (Object.keys(t).length !== v) return !1;
    for (var p = 0; p < v; p++) {
      var g = d[p];
      if (!(Yt(t, g) && uc(e[g], t[g], r - 1, n, a))) return !1;
    }
  }
  return (n.pop(), a.pop(), !0);
}
function pd(e) {
  return Si(e) ? e.slice() : vn(e) || Dr(e) || Wt(e) || Ct(e) ? Array.from(e.entries()) : e;
}
var vd,
  Qy = ((vd = pi().Iterator) == null ? void 0 : vd.prototype) || {};
function Lc(e) {
  return ((e[Symbol.iterator] = e0), Object.assign(Object.create(Qy), e));
}
function e0() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = pi();
  typeof t[e] > "u" && X("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: gy, extras: { getDebugName: cc }, $mobx: $ });
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!_h) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function t0(e) {
  e();
}
function r0(e) {
  (e || (e = t0), Ay({ reactionScheduler: e }));
}
function n0(e) {
  return jy(e);
}
var a0 = 1e4,
  o0 = 1e4,
  i0 = (function () {
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
            (n === void 0 && (n = a0), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, o0));
        },
      }),
      e
    );
  })(),
  s0 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : i0,
  Wa = new s0(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  gs = { exports: {} },
  bs = {};
var hd;
function c0() {
  if (hd) return bs;
  hd = 1;
  var e = Ar();
  function t(d, v) {
    return (d === v && (d !== 0 || 1 / d === 1 / v)) || (d !== d && v !== v);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    a = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function c(d, v) {
    var p = v(),
      g = n({ inst: { value: p, getSnapshot: v } }),
      f = g[0].inst,
      h = g[1];
    return (
      o(
        function () {
          ((f.value = p), (f.getSnapshot = v), s(f) && h({ inst: f }));
        },
        [d, p, v],
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
      i(p),
      p
    );
  }
  function s(d) {
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
      : c;
  return (
    (bs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    bs
  );
}
var gd;
function u0() {
  return (gd || ((gd = 1), (gs.exports = c0())), gs.exports);
}
var l0 = u0();
function bd(e) {
  e.reaction = new Mt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function d0(e, t) {
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
          Wa.unregister(n),
          (n.onStoreChange = c),
          n.reaction || (bd(n), (n.stateVersion = Symbol())),
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
  (a.reaction || (bd(a), Wa.register(r, a, a)),
    O.useDebugValue(a.reaction, n0),
    l0.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot));
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
var _s,
  ms,
  Ch = typeof Symbol == "function" && Symbol.for,
  f0 =
    (ms =
      (_s = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || _s === void 0
        ? void 0
        : _s.configurable) !== null && ms !== void 0
      ? ms
      : !1,
  _d = Ch
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  md = Ch
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function p0(e, t) {
  var r;
  if (md && e.$$typeof === md)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    a = e,
    o = e.displayName || e.name;
  if (_d && e.$$typeof === _d && ((n = !0), (a = e.render), typeof a != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function (c, s) {
    return d0(function () {
      return a(c, s);
    }, o);
  };
  return (
    (i.displayName = e.displayName),
    f0 && Object.defineProperty(i, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (i.contextTypes = e.contextTypes),
    n && (i = m.forwardRef(i)),
    (i = m.memo(i)),
    h0(e, i),
    i
  );
}
var v0 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function h0(e, t) {
  Object.keys(e).forEach(function (r) {
    v0[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var ys;
r0(si.unstable_batchedUpdates);
ys = Wa.finalizeAllImmediately;
function g0(e, t) {
  if (yd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.hasOwnProperty.call(t, r[a]) || !yd(e[r[a]], t[r[a]])) return !1;
  return !0;
}
function yd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var wd = Symbol("patchMixins"),
  Ph = Symbol("patchedDefinition");
function b0(e, t) {
  var r = (e[wd] = e[wd] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function kd(e, t) {
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
function Od(e, t) {
  var r = function () {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    kd.call.apply(kd, [this, e, t].concat(o));
  };
  return r;
}
function _0(e, t, r) {
  var n = b0(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a[Ph])) {
    var o = e[t],
      i = Rh(e, t, a ? a.enumerable : void 0, n, o);
    Object.defineProperty(e, t, i);
  }
}
function Rh(e, t, r, n, a) {
  var o,
    i = Od(a, n);
  return (
    (o = {}),
    (o[Ph] = !0),
    (o.get = function () {
      return i;
    }),
    (o.set = function (s) {
      if (this === e) i = Od(s, n);
      else {
        var u = Rh(this, t, r, n, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (o.configurable = !0),
    (o.enumerable = r),
    o
  );
}
var Sd = Symbol("ObserverAdministration"),
  Ed = Symbol("isMobXReactObserver");
function lc(e) {
  var t;
  return (t = e[Sd]) != null
    ? t
    : (e[Sd] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: dc(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function m0(e) {
  var t = e.prototype;
  if (e[Ed]) {
    var r = dc(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Ed] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = xd;
    else if (t.shouldComponentUpdate !== xd)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var a = dc(e);
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
        value: y0.call(this, n),
      }),
      this.render()
    );
  };
  var o = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var i = this,
        c = lc(this);
      return (
        (c.mounted = !0),
        Wa.unregister(this),
        (c.forceUpdate = function () {
          return i.forceUpdate();
        }),
        (!c.reaction || c.reactionInvalidatedBeforeMount) && c.forceUpdate(),
        o?.apply(this, arguments)
      );
    }),
    _0(t, "componentWillUnmount", function () {
      var i,
        c = lc(this);
      ((i = c.reaction) == null || i.dispose(),
        (c.reaction = null),
        (c.forceUpdate = null),
        (c.mounted = !1),
        (c.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function dc(e) {
  return e.displayName || e.name || "<component>";
}
function y0(e) {
  var t = e.bind(this),
    r = lc(this);
  function n() {
    r.reaction || ((r.reaction = w0(r)), r.mounted || Wa.register(this, r, this));
    var a = void 0,
      o = void 0;
    if (
      (r.reaction.track(function () {
        try {
          o = sy(!1, t);
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
function w0(e) {
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
function xd(e, t) {
  return this.state !== t ? !0 : !g0(this.props, e);
}
function xi(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? m0(e)
      : p0(e)
  );
}
function fc() {
  return (
    (fc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fc.apply(null, arguments)
  );
}
function k0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var O0 = ["children"],
  Cd = O.createContext({});
function Ah(e) {
  var t = e.children,
    r = k0(e, O0),
    n = O.useContext(Cd),
    a = O.useRef(fc({}, n, r)),
    o = a.current;
  return O.createElement(Cd.Provider, { value: o }, t);
}
Ah.displayName = "MobXProvider";
O.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!ue) throw new Error("mobx-react requires mobx to be available");
var S0 = Object.defineProperty,
  E0 = Object.getOwnPropertyDescriptor,
  je = (e, t, r, n) => {
    for (var a = n > 1 ? void 0 : n ? E0(t, r) : t, o = e.length - 1, i; o >= 0; o--)
      (i = e[o]) && (a = (n ? i(t, r, a) : i(a)) || a);
    return (n && a && S0(t, r, a), a);
  };
const ws = "Loading ...";
class xe {
  constructor() {
    ((this.state = "ROOT"),
      (this.isLoading = !0),
      (this.message = ws),
      (this.testNonVersioningData = ""),
      (this.testNumberVersioningData = ""),
      (this.testDateVersioningData = ""),
      (this.testTimestampVersioningData = ""),
      _h(this));
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
    ((this.isLoading = !0), (this.message = t ?? ws));
  }
  stopLoading() {
    ((this.isLoading = !1), (this.message = ws));
  }
}
je([ue], xe.prototype, "state", 2);
je([ue], xe.prototype, "isLoading", 2);
je([ue], xe.prototype, "message", 2);
je([ue], xe.prototype, "testData", 2);
je([ue], xe.prototype, "testDataOptimisticNumber", 2);
je([ue], xe.prototype, "testDataOptimisticDateId", 2);
je([ue], xe.prototype, "testDataOptimisticTimeStampId", 2);
je([ue], xe.prototype, "testNonVersioningData", 2);
je([ue], xe.prototype, "testNumberVersioningData", 2);
je([ue], xe.prototype, "testDateVersioningData", 2);
je([ue], xe.prototype, "testTimestampVersioningData", 2);
je([lt.bound], xe.prototype, "saveState", 1);
je([lt.bound], xe.prototype, "saveResponse", 1);
je([lt.bound], xe.prototype, "saveUpdateResponse", 1);
je([lt.bound], xe.prototype, "clearStates", 1);
je([lt], xe.prototype, "loading", 1);
je([lt], xe.prototype, "stopLoading", 1);
const x0 = new xe();
class C0 {
  constructor() {
    this.stateStore = x0;
  }
}
const Ih = new C0(),
  P0 = m.createContext(Ih),
  Ci = () => m.useContext(P0);
function be(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ie(e) {
  "@babel/helpers - typeof";
  return (
    (Ie =
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
    Ie(e)
  );
}
function R0(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ie(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jh(e) {
  var t = R0(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function Pd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, jh(n.key), n));
  }
}
function _e(e, t, r) {
  return (
    t && Pd(e.prototype, t),
    r && Pd(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function A0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qe(e, t) {
  if (t && (Ie(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return A0(e);
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
function et(e, t) {
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
    (t = jh(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Le() {}
function Dh(e) {
  if (Array.isArray(e)) return e;
}
function I0(e, t) {
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
function pc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Bc(e, t) {
  if (e) {
    if (typeof e == "string") return pc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? pc(e, t)
          : void 0
    );
  }
}
function Th() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Dh(e) || I0(e, t) || Bc(e, t) || Th();
}
var Mh = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  j0 = function (t) {
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
  Zo = function (t, r) {
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
  D0 = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Rd = function (t, r, n) {
    var a = n && isFinite(n) ? (r - 1) * n : 0;
    return t + a;
  },
  T0 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = t.destination,
      i = t.sourceIndex;
    if (!o) return r;
    var c = Rd(i, n, a),
      s = Rd(o.index, n, a),
      u = r.slice(),
      l = u.splice(c, 1),
      d = K(l, 1),
      v = d[0];
    return (u.splice(s, 0, v), u);
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
function M0(e, t) {
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
    a = M0(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      ((r = o[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
  }
  return a;
}
function Ad(e, t) {
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
function ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ad(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ad(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var N0 = (function () {
  function e(t) {
    var r = this;
    (be(this, e),
      C(this, "_isAnalyticsEvent", !0),
      C(this, "clone", function () {
        var n = ks({}, r.payload);
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
          Ie(r) === "object" && (this.payload = ks(ks({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function F0(e) {
  if (Array.isArray(e)) return pc(e);
}
function Nh(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function L0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fe(e) {
  return F0(e) || Nh(e) || Bc(e) || L0();
}
function B0(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Q(e)) !== null; );
  return e;
}
function Qo() {
  return (
    (Qo =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = B0(e, t);
            if (n) {
              var a = Object.getOwnPropertyDescriptor(n, t);
              return a.get ? a.get.call(arguments.length < 3 ? e : r) : a.value;
            }
          }),
    Qo.apply(null, arguments)
  );
}
function U0(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, Fh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
function q0(e, t, r, n) {
  var a = Qo(Q(e.prototype), t, r);
  return 2 & n && typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var z0 = (function (e) {
    function t(r) {
      var n;
      return (
        be(this, t),
        (n = U0(this, t, [r])),
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
            return this.hasFired ? this : q0(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(N0),
  $0 = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  V0 = function () {
    return m.useContext($0);
  },
  ei = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function G0(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function H0(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    a = m.useRef(r),
    o = n.current || !!(t && a.current.inputs && G0(t, a.current.inputs)),
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
function K0(e, t) {
  return H0(function () {
    return e;
  }, t);
}
function Lh() {
  var e = V0(),
    t = K0(
      function (r) {
        return new z0({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
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
function W0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Id(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cn(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.actionSubject,
    o = e.packageName,
    i = e.packageVersion,
    c = e.analyticsData,
    s = Lh(),
    u = s.createAnalyticsEvent,
    l = ei(c),
    d = ei(t),
    v = m.useCallback(
      function (p) {
        var g = u({
            action: r,
            actionSubject: a || n,
            attributes: { componentName: n, packageName: o, packageVersion: i },
          }),
          f = W0({ componentName: n, packageName: o, packageVersion: i }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(p, g));
      },
      [r, n, a, o, i, u, l, d],
    );
  return v;
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
function J0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Dd(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    a = e.packageName,
    o = e.packageVersion,
    i = e.analyticsData,
    c = Lh(),
    s = c.createAnalyticsEvent,
    u = ei(i),
    l = ei(t),
    d = m.useCallback(
      function () {
        var v = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          p = J0({ componentName: n, packageName: a, packageVersion: o }, u.current);
        v.context.push(p);
        var g = v.clone();
        (g && g.fire("atlaskit"), l.current(v));
      },
      [r, n, a, o, s, u, l],
    );
  return d;
}
var Pr = "ASC",
  ti = "DESC",
  X0 = "small",
  ri = "large",
  Bh = 0.22;
const Y0 = 5;
function A(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const a = n.split(" ");
    for (const o of a) {
      const i = o.startsWith("_") ? o.slice(0, Y0) : o;
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
var Z0 = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Q0 = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      a = e.children,
      o = e.testId,
      i = e.isLoading,
      c = ie(e, Z0);
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
          className: A([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      a,
    );
  }),
  ew = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: A(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  tw = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: A(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  rw = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: A(["_4t3i1jdh"]),
      },
      r,
    );
  },
  nw = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-container"),
        className: A([
          "_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o",
        ]),
      },
      r,
    );
  },
  aw = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function Md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Td(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ow(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, Uh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Nd = function (t, r, n) {
    for (var a = 0; a < t.length; a++) {
      var o;
      if (r.cells[a] && ((o = r.cells[a]) === null || o === void 0 ? void 0 : o.key) === n) {
        var i;
        return (i = t[a]) === null || i === void 0 ? void 0 : i.key;
      }
    }
  },
  iw = function (t, r, n, a) {
    if (!n || !t) return r;
    if (!r) return [];
    var o = a === Pr ? 1 : -1,
      i = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      c = Array.from(r);
    return c.sort(function (s, u) {
      var l = Nd(s.cells, t, n),
        d = Nd(u.cells, t, n);
      if (l === void 0 || d === void 0) return o;
      if (Ie(l) !== Ie(d)) {
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
function sw(e) {
  var t = (function (r) {
    function n() {
      var a;
      be(this, n);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return ((a = ow(this, n, [].concat(i))), C(a, "state", { pageRows: [] }), a);
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
                s = ie(o, aw);
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
                v = o.rowsPerPage,
                p = o.isTotalPagesControlledExternally;
              Zo(u, s);
              var g, f;
              return (
                p ? ((g = c), (f = c)) : ((g = iw(s, c, u, l) || []), (f = Mh(g, d, v))),
                Md(Md({}, i), {}, { pageRows: f })
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
var cw = "--local-dynamic-table-width",
  qh = function (t) {
    var r = t.width;
    return typeof r < "u" ? C({}, cw, "".concat(r, "%")) : void 0;
  },
  uw = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  lw = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      a = t.shouldTruncate,
      o = t.innerRef,
      i = ie(t, uw);
    return m.createElement(
      "td",
      ee(
        {
          style: qh({ width: r }),
          ref: o,
          className: A([
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
  dw = ["isHighlighted", "children", "style", "testId", "className"],
  fw = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      a = e.style,
      o = e.testId,
      i = e.className,
      c = ie(e, dw);
    return m.createElement(
      "tr",
      ee(
        {
          style: a,
          className: A([
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
  pw = ["cells"],
  vw = ["content", "testId"],
  hw = function (t) {
    var r = t.row,
      n = t.head,
      a = t.testId,
      o = t.isFixedSize,
      i = t.isHighlighted,
      c = r.cells,
      s = ie(r, pw);
    return O.createElement(
      fw,
      ee(
        {},
        s,
        { isHighlighted: i },
        i ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (a && "".concat(a, "--row-").concat(s.key)) },
      ),
      c.map(function (u, l) {
        var d = u.content,
          v = u.testId,
          p = ie(u, vw),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return O.createElement(
          lw,
          ee({ "data-testid": v || (a && "".concat(a, "--cell-").concat(l)) }, p, {
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
function gw(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, zh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function zh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (zh = function () {
    return !!e;
  })();
}
var bw = (function (e) {
    function t() {
      return (be(this, t), gw(this, t, arguments));
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
                return O.createElement(hw, {
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
  _w = sw(
    O.forwardRef(function (e, t) {
      return O.createElement(bw, ee({}, e, { forwardedRef: t }));
    }),
  );
function mw(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, $h() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var yw = (function (e) {
  function t(r) {
    var n;
    return (be(this, t), (n = mw(this, t, [r])), (n.state = { hasError: !1 }), n);
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
const Uc = m.createContext(null);
var Os = "#0052CC",
  ww = "#0747A6",
  kw = "#FFFFFF",
  Ow = "#EBECF0",
  ni = "#42526E",
  Sw = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Ew(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(ni, ")")
    : "var(--ds-icon-inverse, ".concat(kw, ")");
}
var mo = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  xw = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  qc = O.memo(
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
        v = typeof l == "number" ? l : Sw[l],
        p = "".concat(i, "ms"),
        g = Ew(a),
        f = m.useContext(Uc);
      return (
        xw(
          function () {
            if (f != null) return f.hold(c);
          },
          [f, c],
        ),
        O.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: p, width: v, height: v },
            className: A([mo.wrapperStyles, mo.rotateStyles]),
          },
          O.createElement(
            "svg",
            {
              height: v,
              width: v,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              "data-testid": d,
              ref: r,
              "aria-label": s || void 0,
              style: { animationDelay: p },
              role: s ? "img" : "none",
              className: A([mo.loadInStyles]),
            },
            O.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: A([mo.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Fd(e, t) {
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
function Ld(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fd(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Bd = "--contents-opacity",
  Cw = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: A(["_kqswh2mm"]) },
      r,
    );
  },
  Pw = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      a = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": a && "".concat(a, "--contents--container"),
        className: A(["_tzy47hfw _lcxvglyw"]),
        style: Ld(Ld({}, C({}, Bd, n)), {}, { "--_cnddr8": ar("var(".concat(Bd, ")")) }),
      },
      r,
    );
  },
  Rw = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: A(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function Aw(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, Vh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Vh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vh = function () {
    return !!e;
  })();
}
var Gh = (function (e) {
  function t() {
    return (be(this, t), Aw(this, t, arguments));
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
            Cw,
            { testId: s },
            o ? O.createElement(Pw, { contentsOpacity: c, testId: s }, a) : a,
            o &&
              O.createElement(
                Rw,
                { testId: s },
                O.createElement(qc, {
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
C(Gh, "defaultProps", {
  isLoading: !0,
  spinnerSize: ri,
  contentsOpacity: Bh,
  loadingLabel: "Loading table",
});
var Iw = ["children", "testId"],
  jw = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      a = ie(e, Iw);
    return m.createElement(
      "div",
      ee({}, a, { "data-testid": n, ref: t, className: A(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Dw = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: A(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  Tw = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: A(["_kqswh2mm _152tidpf"]) }, r);
  });
function Mw(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, Hh() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Hh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Hh = function () {
    return !!e;
  })();
}
var Kh = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = Mw(this, t, [].concat(a))),
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
          Ie(i.style) === "object" &&
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
              v = s.top,
              p = s.bottom,
              g = s.height;
            if (d) {
              var f = g >= l * 3;
              if (f && !this.isFullyVerticallyVisible(s, o)) {
                if (v >= 0) {
                  var h = o - v,
                    b = h / 2 + v - l / 2,
                    _ = h < l * 3 ? v + l : b;
                  this.translateSpinner(c, _, !0);
                } else if (v < 0 && p > o) {
                  var y = o / 2 - l / 2;
                  this.translateSpinner(c, y, !0);
                } else {
                  var k = p / 2 - l / 2,
                    w = k < l ? k - (l - k) : k;
                  this.translateSpinner(c, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(u, o)) return;
            var S = (a = this.containerRef) === null || a === void 0 ? void 0 : a.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var x = S.getBoundingClientRect().top,
                R = (v - x) / 2;
              this.translateSpinner(c, R, !1);
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
            jw,
            { testId: c && "".concat(c, "--loading--container--advanced"), ref: this.containerRef },
            a,
            o &&
              O.createElement(
                Dw,
                { testId: c },
                O.createElement(
                  Tw,
                  { ref: this.spinnerRef },
                  O.createElement(qc, {
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
C(Kh, "defaultProps", {
  isLoading: !0,
  spinnerSize: ri,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Bh), ")"),
  loadingLabel: "Loading table",
});
function Nw(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    a = K(n, 2),
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
var ba = {},
  Fw = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Lw = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Bw = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  Ud = m.memo(function (t) {
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
      v = c ? { __html: c } : void 0,
      p = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") p = t.size === "small" || t.size === "medium" ? t.size : p;
      else if (d) {
        var g = t.size(d);
        p = g === "small" || g === "medium" ? g : p;
      }
    }
    var f = 16,
      h = Bw[p][l],
      b = f + 2 * h;
    return m.createElement(
      "span",
      {
        "data-testid": o,
        role: i ? "img" : void 0,
        "aria-label": i || void 0,
        "aria-hidden": i ? void 0 : !0,
        style: { color: a },
        className: A([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          s && "_1bsb1kw7 _4t3i1kw7",
          p === "small" && "_vwz4utpp",
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
        dangerouslySetInnerHTML: v,
        className: A([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          s ? "_1bsb1kw7 _4t3i1kw7" : p === "small" ? Lw[l] : Fw[l],
        ]),
      }),
    );
  });
const Uw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Ud, default: Ud }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Pi = Xp(Uw);
var qd;
function qw() {
  if (qd) return ba;
  ((qd = 1), Object.defineProperty(ba, "__esModule", { value: !0 }), (ba.default = void 0));
  var e = r(Ar()),
    t = r(Pi);
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
  return ((n.displayName = "ChevronLeftIcon"), (ba.default = n), ba);
}
var zw = qw();
const $w = ur(zw);
var _a = {},
  zd;
function Vw() {
  if (zd) return _a;
  ((zd = 1), Object.defineProperty(_a, "__esModule", { value: !0 }), (_a.default = void 0));
  var e = r(Ar()),
    t = r(Pi);
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
  return ((n.displayName = "ChevronRightIcon"), (_a.default = n), _a);
}
var Gw = Vw();
const Hw = ur(Gw);
var zc = m.createContext("elevation.surface"),
  Kw = function () {
    return m.useContext(zc);
  };
zc.displayName = "SurfaceProvider";
var Ww = [
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
  Jw = ["className"],
  Xw = {
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
  Wh = {
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
  Yw = {
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
  Zw = {
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
  Qw = {
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
  e1 = {
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
  Ri = m.forwardRef(function (e, t) {
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
      v = d === void 0 ? s : d,
      p = e.paddingInline,
      g = p === void 0 ? i : p,
      f = e.paddingInlineStart,
      h = f === void 0 ? g : f,
      b = e.paddingInlineEnd,
      _ = b === void 0 ? g : b,
      y = e.style,
      k = e.testId,
      w = e.xcss,
      S = ie(e, Ww);
    S.className;
    var x = ie(S, Jw),
      R = m.createElement(
        n,
        ee(
          {
            style: y,
            ref: t,
            className: A([
              "_19itglyw _vchhusvi _r06hglyw",
              o && Xw[o],
              o && t1(o) && Wh[o],
              l && Yw[l],
              v && Zw[v],
              h && Qw[h],
              _ && e1[_],
              w,
            ]),
          },
          x,
          { "data-testid": k },
        ),
        a,
      );
    return o ? m.createElement(zc.Provider, { value: o }, R) : R;
  });
function t1(e) {
  return e in Wh;
}
const Ss = () =>
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
  Jh = (...e) => A(e);
function r1() {
  return {
    css() {
      throw Ss();
    },
    cssMap() {
      throw Ss();
    },
    cx: Jh,
    XCSSProp() {
      throw Ss();
    },
  };
}
var n1 = r1(),
  Xh = n1.cx,
  a1 = [
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
  $d = {
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
  Vd = {
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
  o1 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  i1 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  s1 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  c1 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  u1 = { root: "_1e0c1txw _vchhusvi" },
  ai = m.memo(
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
        v = e.direction,
        p = e.wrap,
        g = e.xcss,
        f = ie(e, a1);
      return m.createElement(
        n,
        ee({}, f, {
          role: a,
          className: A([
            u1.root,
            c && Vd[c],
            s && Vd[s],
            c && $d[c],
            u && $d[u],
            o && c1[o],
            v && i1[v],
            i && o1[i],
            p && s1[p],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ai.displayName = "Flex";
var l1 = [
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
  vc = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  d1 = function (t) {
    var r = t.children;
    return m.createElement("span", { className: A([vc.separator]) }, r);
  },
  Mo = m.memo(
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
        v = e.separator,
        p = e.xcss,
        g = e.testId,
        f = e.role,
        h = e.children,
        b = ie(e, l1),
        _ = typeof v == "string" ? m.createElement(d1, null, v) : v,
        y = _
          ? m.Children.toArray(h)
              .filter(Boolean)
              .map(function (k, w) {
                return m.createElement(m.Fragment, { key: w }, v && w > 0 ? _ : null, k);
              })
          : h;
      return m.createElement(
        ai,
        ee({}, b, {
          as: r,
          role: f,
          alignItems: o,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: c ? "wrap" : void 0,
          xcss: Xh(u === "hug" && vc.hug, u === "fill" && vc.fill, p),
          testId: g,
          ref: t,
        }),
        y,
      );
    }),
  );
Mo.displayName = "Inline";
var f1 = "Invariant failed";
function p1(e, t) {
  if (!e) throw new Error(f1);
}
var Yh = m.createContext(!1),
  v1 = function () {
    return m.useContext(Yh);
  },
  h1 = Yh.Provider,
  g1 = ["span", "p", "strong", "em"],
  b1 = function (t, r) {
    var n = Kw();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Gd.hasOwnProperty(n) ? Gd[n] : "color.text";
    }
  },
  zr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  _1 = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  m1 = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  y1 = {
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
  Gd = {
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
  Zh = m.forwardRef(function (e, t) {
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
      v = e.children;
    p1(g1.includes(n));
    var p = v1(),
      g = b1(a, p);
    !s && !p && (s = "medium");
    var f = m.createElement(
      n,
      {
        id: c,
        className: A([
          zr.root,
          s && _1[s],
          g && y1[g],
          l && zr.truncation,
          l === 1 && zr.breakAll,
          o && zr["textAlign.".concat(o)],
          u && m1[u],
          n === "em" && zr["as.em"],
          n === "strong" && zr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": i,
        ref: t,
      },
      v,
    );
    return p ? f : m.createElement(h1, { value: !0 }, f);
  });
function w1() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var k1 = ["as", "children", "isInset", "testId", "style", "xcss"],
  O1 = ["className"],
  $c = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      a = e.children,
      o = e.isInset,
      i = e.testId,
      c = e.style,
      s = e.xcss,
      u = ie(e, k1);
    u.className;
    var l = ie(u, O1);
    return m.createElement(
      n,
      ee({}, l, {
        ref: t,
        className: A([
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
  S1 = [
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
  E1 = ["className"],
  Hd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  Qh = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      a = e.type,
      o = a === void 0 ? "button" : a,
      i = e.onClick,
      c = i === void 0 ? Le : i,
      s = e.interactionName,
      u = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      v = e.testId,
      p = e.xcss,
      g = e.tabIndex,
      f = ie(e, S1),
      h = m.useContext(Uc),
      b = m.useCallback(
        function (k, w) {
          (h && h.tracePress(s, k.timeStamp), c(k, w));
        },
        [c, h, s],
      ),
      _ = cn({
        fn: b,
        action: "clicked",
        componentName: u || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ie(f, E1);
    return m.createElement(
      $c,
      ee({ as: "button", tabIndex: g ?? (w1() && !n ? 0 : void 0), style: d }, y, {
        type: o,
        onClick: _,
        disabled: n,
        xcss: Jh(Hd.root, n && Hd.disabled, p),
        testId: v,
        ref: t,
      }),
      r,
    );
  }),
  x1 = m.createContext(!1),
  C1 = function () {
    return m.useContext(x1);
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
function Y(e) {
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
var Es = { exports: {} },
  xs = { exports: {} },
  Wd;
function eg() {
  return (
    Wd ||
      ((Wd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(xs)),
    xs.exports
  );
}
var Cs = { exports: {} },
  Ps = { exports: {} },
  Jd;
function tg() {
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
              function v(p, g) {
                t(s, p, function (f) {
                  return this._invoke(p, g, f);
                });
              }
              u
                ? i
                  ? i(s, u, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[u] = l)
                : (v("next", 0), v("throw", 1), v("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, a, o));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ps)),
    Ps.exports
  );
}
var Xd;
function rg() {
  return (
    Xd ||
      ((Xd = 1),
      (function (e) {
        var t = tg();
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
                (function (S, x, R) {
                  var I,
                    P,
                    D,
                    L = 0,
                    z = R || [],
                    F = !1,
                    H = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: V,
                      f: V.bind(n, 4),
                      d: function (U, q) {
                        return ((I = U), (P = 0), (D = n), (H.n = q), u);
                      },
                    };
                  function V(W, U) {
                    for (P = W, D = U, a = 0; !F && L && !q && a < z.length; a++) {
                      var q,
                        G = z[a],
                        te = H.p,
                        ce = G[2];
                      W > 3
                        ? (q = ce === U) &&
                          ((D = G[(P = G[4]) ? 5 : ((P = 3), 3)]), (G[4] = G[5] = n))
                        : G[0] <= te &&
                          ((q = W < 2 && te < G[1])
                            ? ((P = 0), (H.v = U), (H.n = G[1]))
                            : te < ce &&
                              (q = W < 3 || G[0] > U || U > ce) &&
                              ((G[4] = W), (G[5] = U), (H.n = ce), (P = 0)));
                    }
                    if (q || W > 1) return u;
                    throw ((F = !0), U);
                  }
                  return function (W, U, q) {
                    if (L > 1) throw TypeError("Generator is already running");
                    for (F && U === 1 && V(U, q), P = U, D = q; (a = P < 2 ? n : D) || !F; ) {
                      I || (P ? (P < 3 ? (P > 1 && (H.n = -1), V(P, D)) : (H.n = D)) : (H.v = D));
                      try {
                        if (((L = 2), I)) {
                          if ((P || (W = "next"), (a = I[W]))) {
                            if (!(a = a.call(I, D)))
                              throw TypeError("iterator result is not an object");
                            if (!a.done) return a;
                            ((D = a.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (a = I.return) && a.call(I),
                              P < 2 &&
                                ((D = TypeError(
                                  "The iterator does not provide a '" + W + "' method",
                                )),
                                (P = 1)));
                          I = n;
                        } else if ((a = (F = H.n < 0) ? D : S.call(x, H)) !== u) break;
                      } catch (G) {
                        ((I = n), (P = 1), (D = G));
                      } finally {
                        L = 1;
                      }
                    }
                    return { value: a, done: F };
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
                : ((h.__proto__ = v), t(h, c, "GeneratorFunction")),
              (h.prototype = Object.create(g)),
              h
            );
          }
          return (
            (d.prototype = v),
            t(g, "constructor", v),
            t(v, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(v, c, "GeneratorFunction"),
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
      })(Cs)),
    Cs.exports
  );
}
var Rs = { exports: {} },
  As = { exports: {} },
  Is = { exports: {} },
  Yd;
function ng() {
  return (
    Yd ||
      ((Yd = 1),
      (function (e) {
        var t = eg(),
          r = tg();
        function n(a, o) {
          function i(s, u, l, d) {
            try {
              var v = a[s](u),
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
                  return new o(function (v, p) {
                    i(s, l, v, p);
                  });
                }
                return (c = c ? c.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Is)),
    Is.exports
  );
}
var Zd;
function ag() {
  return (
    Zd ||
      ((Zd = 1),
      (function (e) {
        var t = rg(),
          r = ng();
        function n(a, o, i, c, s) {
          return new r(t().w(a, o, i, c), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(As)),
    As.exports
  );
}
var Qd;
function P1() {
  return (
    Qd ||
      ((Qd = 1),
      (function (e) {
        var t = ag();
        function r(n, a, o, i, c) {
          var s = t(n, a, o, i, c);
          return s.next().then(function (u) {
            return u.done ? u.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Rs)),
    Rs.exports
  );
}
var js = { exports: {} },
  ef;
function R1() {
  return (
    ef ||
      ((ef = 1),
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
      })(js)),
    js.exports
  );
}
var Ds = { exports: {} },
  Ts = { exports: {} },
  tf;
function A1() {
  return (
    tf ||
      ((tf = 1),
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
      })(Ts)),
    Ts.exports
  );
}
var rf;
function I1() {
  return (
    rf ||
      ((rf = 1),
      (function (e) {
        var t = A1().default;
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
      })(Ds)),
    Ds.exports
  );
}
var nf;
function j1() {
  return (
    nf ||
      ((nf = 1),
      (function (e) {
        var t = eg(),
          r = rg(),
          n = P1(),
          a = ag(),
          o = ng(),
          i = R1(),
          c = I1();
        function s() {
          var u = r(),
            l = u.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function v(f) {
            var h = typeof f == "function" && f.constructor;
            return !!h && (h === d || (h.displayName || h.name) === "GeneratorFunction");
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
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
                    return b(_.a, p[k], w);
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
                isGeneratorFunction: v,
                mark: u.m,
                awrap: function (b, _) {
                  return new t(b, _);
                },
                AsyncIterator: o,
                async: function (b, _, y, k, w) {
                  return (v(_) ? a : n)(g(b), _, y, k, w);
                },
                keys: i,
                values: c,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Es)),
    Es.exports
  );
}
var Ms, af;
function D1() {
  if (af) return Ms;
  af = 1;
  var e = j1()();
  Ms = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Ms;
}
var T1 = D1();
const T = ur(T1);
var Ns = {},
  ma = {},
  of;
function og() {
  if (of) return ma;
  ((of = 1), Object.defineProperty(ma, "__esModule", { value: !0 }), (ma.bind = void 0));
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
  return ((ma.bind = e), ma);
}
var mr = {},
  sf;
function M1() {
  if (sf) return mr;
  sf = 1;
  var e =
    (mr && mr.__assign) ||
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
  (Object.defineProperty(mr, "__esModule", { value: !0 }), (mr.bindAll = void 0));
  var t = og();
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
  return ((mr.bindAll = a), mr);
}
var cf;
function N1() {
  return (
    cf ||
      ((cf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = og();
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
      })(Ns)),
    Ns
  );
}
var Mr = N1(),
  yr = {},
  $r = {},
  yo = {},
  ya = {},
  uf;
function F1() {
  if (uf) return ya;
  ((uf = 1),
    Object.defineProperty(ya, "__esModule", { value: !0 }),
    (ya.V1InitializeContainer = void 0));
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
  return ((ya.V1InitializeContainer = t), ya);
}
var wa = {},
  lf;
function L1() {
  if (lf) return wa;
  ((lf = 1),
    Object.defineProperty(wa, "__esModule", { value: !0 }),
    (wa.V2InitializeContainer = void 0));
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
  return ((wa.V2InitializeContainer = t), wa);
}
var df;
function B1() {
  if (df) return yo;
  ((df = 1), Object.defineProperty(yo, "__esModule", { value: !0 }));
  const e = Tt(),
    t = F1(),
    r = L1();
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
  return ((yo.default = n), yo);
}
var Vr = {},
  ka = {},
  ff;
function U1() {
  if (ff) return ka;
  ((ff = 1),
    Object.defineProperty(ka, "__esModule", { value: !0 }),
    (ka._resolveDeltasResponse = void 0));
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
  ka._resolveDeltasResponse = r;
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
  return ka;
}
var pf;
function ig() {
  if (pf) return Vr;
  pf = 1;
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
            p(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          try {
            p(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          g.done ? u(g.value) : s(g.value).then(d, v);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  const t = Tt(),
    r = U1();
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
        var l, d, v, p, g, f;
        const h = i ? (0, t._typedJsonParse)(i, "has_updates", "InitializeResponse") : null;
        let b = {
          user: s,
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
          const _ =
            h?.hash_used !==
            ((f =
              (g = (p = this._option) === null || p === void 0 ? void 0 : p.networkConfig) ===
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
        const v = (0, r._resolveDeltasResponse)(i, d.body);
        return typeof v == "string"
          ? v
          : this._fetchEvaluations(
              o,
              i,
              Object.assign(Object.assign(Object.assign({}, c), v), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Vr.default = n), Vr);
}
var Oa = {},
  vf;
function q1() {
  if (vf) return Oa;
  ((vf = 1),
    Object.defineProperty(Oa, "__esModule", { value: !0 }),
    (Oa._makeParamStoreGetter = void 0));
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
  function o(l, d, v) {
    return l.getFeatureGate(d.gate_name, r(v) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function i(l, d, v, p) {
    const f = l.getDynamicConfig(d.config_name, r(p) ? void 0 : t).get(d.param_name);
    return n(f, v) ? v : f;
  }
  function c(l, d, v, p) {
    const f = l.getExperiment(d.experiment_name, r(p) ? void 0 : t).get(d.param_name);
    return n(f, v) ? v : f;
  }
  function s(l, d, v, p) {
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
          return c(l, f, g, v);
        case "layer":
          return s(l, f, g, v);
        default:
          return g;
      }
    };
  }
  return ((Oa._makeParamStoreGetter = u), Oa);
}
var wr = {},
  hf;
function z1() {
  if (hf) return wr;
  hf = 1;
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
            p(c.next(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          try {
            p(c.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          g.done ? u(g.value) : s(g.value).then(d, v);
        }
        p((c = c.apply(a, o || [])).next());
      });
    };
  (Object.defineProperty(wr, "__esModule", { value: !0 }),
    (wr.StatsigEvaluationsDataAdapter = void 0));
  const t = Tt(),
    r = ig();
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
var gf;
function $1() {
  if (gf) return $r;
  gf = 1;
  var e =
    ($r && $r.__awaiter) ||
    function (c, s, u, l) {
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
          } catch (_) {
            p(_);
          }
        }
        function f(b) {
          try {
            h(l.throw(b));
          } catch (_) {
            p(_);
          }
        }
        function h(b) {
          b.done ? v(b.value) : d(b.value).then(g, f);
        }
        h((l = l.apply(c, s || [])).next());
      });
    };
  Object.defineProperty($r, "__esModule", { value: !0 });
  const t = Tt(),
    r = B1(),
    n = ig(),
    a = q1(),
    o = z1();
  let i = class hc extends t.StatsigClientBase {
    static instance(s) {
      const u = (0, t._getStatsigGlobal)().instance(s);
      return u instanceof hc
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new hc(s ?? "", {}));
    }
    constructor(s, u, l = null) {
      var d, v;
      t.SDKType._setClientType(s, "javascript-client");
      const p = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
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
        (this._store = new r.default(s, l ?? null)),
        (this._network = p),
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
      const g = (v = l?.plugins) !== null && v !== void 0 ? v : [];
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
        const v = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(v, l);
      }
    }
    _updateUserSyncImpl(s, u, l) {
      var d;
      const v = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
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
    updateUserAsync(s, u) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, u);
        } catch (d) {
          const v = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(v, l);
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
      var l, d, v;
      const p = (0, t._normalizeUser)(s, u),
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
    _getFeatureGateImpl(s, u) {
      var l, d;
      const { result: v, details: p } = this._store.getGate(s);
      (this._checkUserHasIdForEvaluation(v?.id_type, s, "Gate"),
        this._checkInitializationStatus(p.reason));
      const g = (0, t._makeFeatureGate)(s, p, v),
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
      const { result: v, details: p } = this._store.getConfig(s);
      (this._checkUserHasIdForEvaluation(v?.id_type, s, "Dynamic config"),
        this._checkInitializationStatus(p.reason));
      const g = (0, t._makeDynamicConfig)(s, p, v),
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
      var l, d, v, p;
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
          (p =
            (v = this.overrideAdapter) === null || v === void 0
              ? void 0
              : v.getExperimentOverride) === null || p === void 0
            ? void 0
            : p.call(v, h, this._user, u),
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
      var l, d, v;
      const { result: p, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, p),
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
        (v = h?.__value) !== null && v !== void 0 ? v : f.__value,
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
      const { result: v, details: p } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
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
var bf;
function V1() {
  return (
    bf ||
      ((bf = 1),
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
          a = $1();
        ((e.StatsigClient = a.default), r(Tt(), e));
        const o = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: a.default });
        e.default = o;
      })(yr)),
    yr
  );
}
var gt = V1(),
  Fs = { exports: {} },
  _f;
function G1() {
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
        function o(s, u, l, d, v) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var p = new a(l, d || s, v),
            g = r ? r + u : u;
          return (
            s._events[g]
              ? s._events[g].fn
                ? (s._events[g] = [s._events[g], p])
                : s._events[g].push(p)
              : ((s._events[g] = p), s._eventsCount++),
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
            for (var v = 0, p = d.length, g = new Array(p); v < p; v++) g[v] = d[v].fn;
            return g;
          }),
          (c.prototype.listenerCount = function (u) {
            var l = r ? r + u : u,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (c.prototype.emit = function (u, l, d, v, p, g) {
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
                  return (h.fn.call(h.context, l, d, v), !0);
                case 5:
                  return (h.fn.call(h.context, l, d, v, p), !0);
                case 6:
                  return (h.fn.call(h.context, l, d, v, p, g), !0);
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
                    h[y].fn.call(h[y].context, l, d, v);
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
          (c.prototype.removeListener = function (u, l, d, v) {
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
      })(Fs)),
    Fs.exports
  );
}
var H1 = G1();
const K1 = ur(H1);
function mf(e, t) {
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
      ? mf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var wo = "@all-features",
  W1 = (function () {
    function e() {
      (be(this, e), C(this, "eventToValue", new Map()), (this.emitter = new K1()));
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
            var p = i(r, n, a, rr(rr({}, c), {}, { fireExperimentExposure: !1 })),
              g = s.eventToValue.get(o);
            g !== p && (s.eventToValue.set(o, p), o(p));
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
            this.emitter.on(wo, r),
            function () {
              n.emitter.off(wo, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(wo),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== wo;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  J1 = "fedramp-moderate";
function X1() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === J1;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var Vc = (function (e) {
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
  Da = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Xa = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Y1 = [
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
function gc(e) {
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
var ko = function (t) {
    return gc({ perimeter: X1() ? Xa.FEDRAMP_MODERATE : Xa.COMMERCIAL }, t);
  },
  Sa = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      a = Object.entries(r);
    if (n.length !== a.length) return !1;
    var o = function (v, p) {
      var g = K(v, 1),
        f = g[0],
        h = K(p, 1),
        b = h[0];
      return f.localeCompare(b);
    };
    (n.sort(o), a.sort(o));
    for (var i = 0; i < n.length; i++) {
      var c = K(n[i], 2),
        s = c[1],
        u = K(a[i], 2),
        l = u[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  wf = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Z1 = function (t) {
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
    var v = ie(t, Y1);
    return gc(
      gc({}, v),
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
  Q1 = Object.entries(Vc).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  sg = function (t) {
    var r,
      n,
      a,
      o = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Q1.find(function (i) {
            var c = K(i, 1),
              s = c[0];
            return o.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : Vc.Unknown,
      time: (a = t.receivedAt) !== null && a !== void 0 ? a : Date.now(),
    };
  },
  bc = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  kf = (function () {
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
            var c = Array.isArray(n) ? "array" : Ie(n),
              s = Array.isArray(i) ? "array" : Ie(i);
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
                sg(r.details),
                bc(
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
  Of = (function () {
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
              : n == null || (Ie(i) === Ie(n) && Array.isArray(n) === Array.isArray(i))
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
                sg(r.details),
                function (l, d) {
                  return r.get(d);
                },
                bc(
                  (n =
                    (a = r.__evaluation) === null || a === void 0
                      ? void 0
                      : a.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                bc(
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
  rn = "0.0.0-development";
function ek(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function cg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cg = function () {
    return !!e;
  })();
}
function tk(e, t, r) {
  if (cg()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return (r && Ja(a, r.prototype), a);
}
function _c(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (_c = function (n) {
      if (n === null || !ek(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return tk(n, arguments, Q(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Ja(a, n)
      );
    }),
    _c(e)
  );
}
function rk(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, ug() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
var Sf = (function (e) {
  function t(r) {
    return (be(this, t), rk(this, t, [r]));
  }
  return (et(t, e), _e(t));
})(_c(Error));
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
function nk(e) {
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
var ak = 5e3,
  ok = "https://api.atlassian.com/flags",
  ik = "https://api.stg.atlassian.com/flags",
  sk = "https://api.dev.atlassian.com/flags",
  ck = "https://api.stg.atlassian-us-gov-mod.com/flags",
  uk = "https://api.atlassian-us-gov-mod.com/flags",
  lk = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  dk = "oasis-stg.com/flags",
  fk = "atlassian-isolated.net/flags",
  pk = "/gateway/api/flags",
  Ls = (function () {
    function e() {
      be(this, e);
    }
    return _e(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = Y(
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
          var t = Y(
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
          var t = Y(
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
                        new Sf(
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
                      throw new Sf("Unexpected 204 response");
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
          var t = Y(
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
          if (n) return pk;
          if (a === Xa.FEDRAMP_MODERATE)
            switch (r) {
              case Da.Production:
                return uk;
              case Da.Staging:
                return ck;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(a, '" perimeter'),
                );
            }
          else if (a === Xa.COMMERCIAL)
            switch (r) {
              case Da.Development:
                return sk;
              case Da.Staging:
                var i = this.getApiUrl(o);
                return i !== null ? i : ik;
              default:
                var c = this.getApiUrl(o);
                return c !== null ? c : ok;
            }
          else throw new Error('Invalid perimeter "'.concat(a, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = Y(
            T.mark(function n(a, o, i, c) {
              var s, u, l, d, v;
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
                          (u = i.fetchTimeoutMs || ak),
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
                            nk(
                              {
                                method: o,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": rn,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: l,
                              },
                              c && { body: JSON.stringify(c) },
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
          if (n === void 0) return r ? lk.replace("%s", r) : null;
          var a = n.protocol,
            o = n.hostname,
            i = o.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return "".concat(a, "//api.").concat(i[1], ".").concat(dk);
          var c = o.match(/([^.]+)\.atlassian-isolated\.net$/);
          return c ? "".concat(a, "//api.").concat(c[1], ".").concat(fk) : null;
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
function Ea(e) {
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
function vk(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, lg() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
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
function hk(e, t, r, n) {
  var a = Qo(Q(e.prototype), t, r);
  return typeof a == "function"
    ? function (o) {
        return a.apply(r, o);
      }
    : a;
}
var gk = (function (e) {
  function t() {
    var r;
    return (
      be(this, t),
      (r = vk(this, t, ["NoFetchDataAdapter", "nofetch"])),
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
          var r = Y(
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
          var r = Y(
            T.mark(function a(o, i, c) {
              return T.wrap(
                function (u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return u.abrupt(
                          "return",
                          this.bootstrapResult &&
                            Ea(
                              Ea({}, this.bootstrapResult),
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
            Ea(Ea({}, this.bootstrapResult), {}, { fullUserHash: gt._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = Y(
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
          hk(t, "setData", this)([n, a]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = Ea({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(gt.DataAdapterCore);
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
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bk(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = _k(e)) || t) {
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
function _k(e, t) {
  if (e) {
    if (typeof e == "string") return Pf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Pf(e, t)
          : void 0
    );
  }
}
function Pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Bs = "LocalOverride:Recognized",
  mk = "STATSIG_OVERRIDES",
  Rf = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Gr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  ot = function (t, r) {
    return r + ":" + t;
  },
  yk = (function () {
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
                v = K(l[u], 2),
                p = v[0],
                g = v[1];
              r.gates[p] = g;
            }
            for (
              var f = 0, h = Object.entries((b = s.configs) !== null && b !== void 0 ? b : {});
              f < h.length;
              f++
            ) {
              var b,
                _ = K(h[f], 2),
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
                R = K(S[w], 2),
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
            this.parseStoredOverrides(Rf),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Rf);
          } catch {}
          for (var n = 0, a = Object.values(r); n < a.length; n++) {
            var o = a[n],
              i = new Set(Object.keys(o)),
              c = bk(i),
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
          var n = qe(qe({}, Gr()), r);
          this._djb2Map.clear();
          for (var a = 0, o = Object.entries(n); a < o.length; a++)
            for (
              var i = K(o[a], 2), c = i[0], s = i[1], u = 0, l = Object.entries(s);
              u < l.length;
              u++
            ) {
              var d = K(l[u], 2),
                v = d[0],
                p = d[1];
              this._djb2Map.set(ot(at._DJB2(v), c), p);
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
            : qe(qe({}, r), {}, { value: o, details: qe(qe({}, r.details), {}, { reason: Bs }) });
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
            : qe(
                qe({}, r),
                {},
                {
                  __value: o,
                  get: at._makeTypedGet(r.name, o),
                  details: qe(qe({}, r.details), {}, { reason: Bs }),
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
            : qe(
                qe({}, r),
                {},
                {
                  value: o,
                  get: at._makeTypedGet(r.name, o),
                  details: qe(qe({}, r.details), {}, { reason: Bs }),
                },
              );
        },
      },
    ]);
  })(),
  wk = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Af(e, t) {
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
      ? Af(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Af(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var If = "client-default-key",
  kk = "https://xp.atlassian.com/v1/rgstr",
  Ok = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        a = n === void 0 ? mk : n,
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
        C(this, "subscriptions", new W1()),
        C(this, "dataAdapter", new gk()),
        C(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = o || new yk(a)));
    }
    return _e(e, [
      {
        key: "initialize",
        value: (function () {
          var t = Y(
            T.mark(function n(a, o, i) {
              var c = this,
                s,
                u;
              return T.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = ko(a)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          Sa(s, this.initOptions) ||
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
                              var v = performance.now(),
                                p = v - u;
                              c.fireClientEvent(u, p, "initialize", c.initCompleted, s.apiKey);
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
          var t = Y(
            T.mark(function n(a, o, i, c) {
              var s = this,
                u,
                l;
              return T.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (((u = ko(a)), !this.initPromise)) {
                          v.next = 4;
                          break;
                        }
                        return (
                          Sa(u, this.initOptions) ||
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
                          this.provider.setClientVersion(rn),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(u, o, i, c)
                            .then(function () {
                              ((s.initCompleted = !0), (s.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                g = p - l;
                              s.fireClientEvent(
                                l,
                                g,
                                "initializeWithProvider",
                                s.initCompleted,
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
            c = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (i = this.initOptions.analyticsWebClient) === null ||
            i === void 0 ||
            i
              .then(function (u) {
                var l = nr(
                  {
                    targetApp: c.initOptions.targetApp,
                    clientVersion: rn,
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
                c.initOptions.environment !== Da.Production &&
                  console.error("Analytics web client promise did not resolve", u);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = Y(
            T.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l,
                d = arguments;
              return T.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (u = ko(a)),
                          !this.initPromise)
                        ) {
                          p.next = 5;
                          break;
                        }
                        return (
                          Sa(u, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
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
          var t = Y(
            T.mark(function n(a, o, i) {
              var c, s;
              return T.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (c = ko(a)),
                          (s = function () {
                            return Ls.fetchExperimentValues(c, o, i).then(function (v) {
                              var p = v.experimentValues,
                                g = v.customAttributes;
                              return { experimentValues: p, customAttributesFromFetch: g };
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
          var t = Y(
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
          var t = Y(
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
          var t = Y(
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
            return kf.fromExperiment(
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
              new kf(r, {}, "", { time: Date.now(), reason: Vc.Error })
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
          return Sa(this.currentIdentifiers, r) && Sa(this.currentAttributes, n);
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
          var t = Y(
            T.mark(function n(a, o, i) {
              var c, s, u, l, d, v, p, g;
              return T.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (c = nr({}, a)),
                          (h.prev = 1),
                          (l = Ls.fetchClientSdk(a).then(function (b) {
                            return (c.sdkKey = b.clientSdkKey);
                          })),
                          (d = Ls.fetchExperimentValues(a, o, i)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((v = h.sent),
                          (p = K(v, 2)),
                          (g = p[1]),
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
          var t = Y(
            T.mark(function n(a, o, i, c) {
              var s, u, l, d, v, p, g, f;
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
                          (v = o.getExperimentValues()),
                          (b.next = 8),
                          Promise.all([d, v])
                        );
                      case 8:
                        ((p = b.sent),
                          (g = K(p, 2)),
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
          var t = Y(
            T.mark(function n(a, o, i) {
              var c,
                s,
                u,
                l,
                d,
                v,
                p,
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
                          (u = Z1(a)),
                          u.sdkKey || (u.sdkKey = If),
                          ((c = u.networkConfig) !== null && c !== void 0 && c.logEventUrl) ||
                            (u.networkConfig = nr(
                              nr({}, u.networkConfig),
                              {},
                              { logEventUrl: kk },
                            )),
                          u.perimeter === Xa.FEDRAMP_MODERATE && (u.disableLogging = !0),
                          (l = u.sdkKey),
                          (d = u.environment),
                          u.updateUserCompletionCallback,
                          u.perimeter,
                          (v = ie(u, wk)),
                          (this.user = wf(o, i)),
                          (p = nr(
                            nr({}, v),
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
                            : (p.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new gt.StatsigClient(l, this.user, p)),
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
                          (this.statsigClient = new gt.StatsigClient(If, this.user, p)),
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
          var t = Y(
            T.mark(function n(a, o, i) {
              var c = this,
                s,
                u,
                l;
              return T.wrap(
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
                          (s = this.initPromise),
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
                            Y(
                              T.mark(function p() {
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
          var t = Y(
            T.mark(function n(a, o, i) {
              var c, s, u, l, d, v, p, g, f;
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
                        ((u = b.sent), (l = wf(o, u.customAttributesFromFetch)), (b.next = 13));
                        break;
                      case 8:
                        throw (
                          (b.prev = 8),
                          (b.t0 = b.catch(1)),
                          (p = b.t0 instanceof Error ? b.t0.message : JSON.stringify(b.t0)),
                          (d = (v = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(v, !1, p),
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
          return rn;
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
            return Of.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !o }));
          } catch (i) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: i,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Of.fromLayer(gt._makeLayer(r, { reason: "Error" }, null))
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
M = J;
C(J, "client", new Ok());
C(J, "hasCheckGateErrorOccurred", !1);
C(J, "hasGetExperimentValueErrorOccurred", !1);
C(J, "checkGate", function (e, t) {
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
C(J, "getExperimentValue", function (e, t, r, n) {
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
C(J, "initializeCalled", M.client.initializeCalled.bind(M.client));
C(J, "initializeCompleted", M.client.initializeCompleted.bind(M.client));
C(J, "waitUntilInitializeCompleted", M.client.waitUntilInitializeCompleted.bind(M.client));
C(J, "initialize", M.client.initialize.bind(M.client));
C(J, "initializeWithProvider", M.client.initializeWithProvider.bind(M.client));
C(J, "initializeFromValues", M.client.initializeFromValues.bind(M.client));
C(J, "manuallyLogGateExposure", M.client.manuallyLogGateExposure.bind(M.client));
C(J, "getExperiment", M.client.getExperiment.bind(M.client));
C(J, "manuallyLogExperimentExposure", M.client.manuallyLogExperimentExposure.bind(M.client));
C(J, "manuallyLogLayerExposure", M.client.manuallyLogLayerExposure.bind(M.client));
C(J, "shutdownStatsig", M.client.shutdownStatsig.bind(M.client));
C(J, "overrideGate", M.client.overrideGate.bind(M.client));
C(J, "clearGateOverride", M.client.clearGateOverride.bind(M.client));
C(J, "overrideConfig", M.client.overrideConfig.bind(M.client));
C(J, "clearConfigOverride", M.client.clearConfigOverride.bind(M.client));
C(J, "setOverrides", M.client.setOverrides.bind(M.client));
C(J, "getOverrides", M.client.getOverrides.bind(M.client));
C(J, "clearAllOverrides", M.client.clearAllOverrides.bind(M.client));
C(J, "isCurrentUser", M.client.isCurrentUser.bind(M.client));
C(J, "onGateUpdated", M.client.onGateUpdated.bind(M.client));
C(J, "onExperimentValueUpdated", M.client.onExperimentValueUpdated.bind(M.client));
C(J, "onAnyUpdated", M.client.onAnyUpdated.bind(M.client));
C(J, "updateUser", M.client.updateUser.bind(M.client));
C(J, "updateUserWithProvider", M.client.updateUserWithProvider.bind(M.client));
C(J, "updateUserWithValues", M.client.updateUserWithValues.bind(M.client));
C(J, "getPackageVersion", M.client.getPackageVersion.bind(M.client));
C(J, "getLayer", M.client.getLayer.bind(M.client));
C(J, "getLayerValue", M.client.getLayerValue.bind(M.client));
var mc = J;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = J;
  else {
    var Oo, Us;
    mc = window.__FEATUREGATES_JS__;
    var jf =
      ((Oo = mc) === null || Oo === void 0 || (Us = Oo.getPackageVersion) === null || Us === void 0
        ? void 0
        : Us.call(Oo)) || "4.10.0 or earlier";
    if (jf !== rn) {
      var Sk = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(jf, " when module version ")
        .concat(rn, " was loading.");
      console.warn(Sk);
    }
  }
var Hr,
  Kr,
  Ek =
    (globalThis == null ||
    (Hr = globalThis.process) === null ||
    Hr === void 0 ||
    (Hr = Hr.env) === null ||
    Hr === void 0
      ? void 0
      : Hr.JEST_WORKER_ID) !== void 0,
  xk =
    !Ek &&
    (globalThis == null ||
    (Kr = globalThis.process) === null ||
    Kr === void 0 ||
    (Kr = Kr.env) === null ||
    Kr === void 0
      ? void 0
      : Kr.NODE_ENV) !== "production",
  Ck = function () {
    var t;
    xk && (t = console).debug.apply(t, arguments);
  },
  Gc = {},
  Pk = "@atlaskit/platform-feature-flags",
  La = "__PLATFORM_FEATURE_FLAGS__",
  dg = typeof process < "u" && typeof Gc < "u",
  Rk = dg ? Gc.ENABLE_PLATFORM_FF === "true" : !1,
  Ak = dg ? Gc.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Ik = Rk || Ak,
  jk = { booleanResolver: void 0 },
  Ba = typeof window < "u" ? window : globalThis;
Ba[La] = Ba[La] || jk;
function Dk(e) {
  if (Ik)
    return (
      Ck(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Pk,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = Ba[La]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = Ba[La]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return mc.checkGate(e);
    var a = (n = Ba[La]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof a != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : a;
  } catch {
    return !1;
  }
}
function oe(e) {
  return Dk(e);
}
var Tk = ["light", "dark", "auto"],
  Mk = [
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
    "typography-adg3",
    "typography-modernized",
    "typography-refreshed",
  ],
  Nk = {
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
    "atlassian-typography-adg3": {
      id: "typography-adg3",
      displayName: "ADG3 Typography",
      palette: "typographyPalette",
      attributes: { type: "typography" },
    },
    "atlassian-shape": {
      id: "shape",
      displayName: "Shape",
      palette: "shapePalette",
      attributes: { type: "shape" },
    },
    "atlassian-typography-modernized": {
      id: "typography-modernized",
      displayName: "Atlassian Typography (Modernized)",
      palette: "typographyPalette",
      attributes: { type: "typography" },
    },
    "atlassian-typography-refreshed": {
      id: "typography-refreshed",
      displayName: "Atlassian Typography (Refreshed)",
      palette: "typographyPalette",
      attributes: { type: "typography" },
    },
  },
  ye = {
    colorMode: "auto",
    contrastMode: "auto",
    dark: "dark",
    light: "light",
    shape: function () {
      if (oe("platform-dst-shape-theme-default")) return "shape";
    },
    spacing: "spacing",
    typography: "typography",
    UNSAFE_themeOptions: void 0,
  },
  fg = {
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
  Nr = "data-theme",
  Fk = "data-subtree-theme",
  Ai = "data-color-mode",
  pg = "data-contrast-mode",
  Ii = "data-custom-theme",
  Lk = "ds",
  Bk = "--".concat(Lk, "-token-not-found");
function Gt(e, t) {
  var r = fg[e];
  r || (r = Bk);
  var n = t ? "var(".concat(r, ", ").concat(t, ")") : "var(".concat(r, ")");
  return n;
}
var Uk = ["light", "dark", "spacing", "typography", "shape"],
  yc = "UNSAFE_themeOptions",
  vg = function (t) {
    return (
      Uk.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  hg = function (t) {
    return (
      Mk.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  gg = function (t) {
    return ["light", "dark", "auto"].includes(t);
  },
  qk = function (t) {
    return t
      .split(" ")
      .map(function (r) {
        return r.split(/:([^]*)/);
      })
      .reduce(function (r, n) {
        var a = K(n, 2),
          o = a[0],
          i = a[1];
        if ((o === "colorMode" && gg(i) && (r[o] = i), vg(o) && hg(i) && (r[o] = i), o === yc))
          try {
            r[yc] = JSON.parse(i);
          } catch {}
        return r;
      }, {});
  },
  zk = function (t) {
    return Object.entries(t).reduce(function (r, n) {
      var a = K(n, 2),
        o = a[0],
        i = a[1];
      return (o === "colorMode" && typeof i == "string" && gg(i)) ||
        (o === yc && Ie(i) === "object") ||
        (vg(o) && typeof i == "string" && hg(i))
        ? r +
            "".concat(r ? " " : "") +
            "".concat(o, ":").concat(Ie(i) === "object" ? JSON.stringify(i) : i)
        : r;
    }, "");
  };
function Df(e, t) {
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
      ? Df(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Df(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $k = function (t) {
    return (
      Tk.find(function (r) {
        return r === t;
      }) !== void 0
    );
  },
  Hc = function () {
    if (typeof document > "u") return {};
    var t = document.documentElement,
      r = t.getAttribute(Ai) || "",
      n = t.getAttribute(Nr) || "";
    return Tf(Tf({}, qk(n)), $k(r) && { colorMode: r });
  },
  bg = function (t) {
    return /^#[0-9A-F]{6}$/i.test(t);
  },
  Ya = function (t) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(t);
  };
function KP(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function Vk(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function WP(e) {
  if (!Ya(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, Vk(e)]
  );
}
function Mf(e) {
  if (!Ya(e)) throw new Error("Invalid HEX");
  var t;
  return (
    (t = e.substring(1).split("")),
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = "0x" + t.join("")),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function JP(e) {
  if (!Ya(e)) throw new Error("Invalid HEX");
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
function XP(e, t, r) {
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
function Nf(e, t, r) {
  var n = e / 255,
    a = t / 255,
    o = r / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    c = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4),
    s = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4),
    u = 0.2126 * i + 0.7152 * c + 0.0722 * s;
  return u;
}
function YP(e, t) {
  if (!Ya(e) || !Ya(t)) throw new Error("Invalid HEX");
  var r = Mf(e),
    n = Mf(t),
    a = Nf(r[0], r[1], r[2]),
    o = Nf(n[0], n[1], n[2]),
    i = Math.max(a, o),
    c = Math.min(a, o);
  return (i + 0.05) / (c + 0.05);
}
function ZP(e, t) {
  var r = Ff(e),
    n = Ff(t),
    a = r[0] - n[0],
    o = r[1] - n[1],
    i = r[2] - n[2],
    c = Math.sqrt(r[1] * r[1] + r[2] * r[2]),
    s = Math.sqrt(n[1] * n[1] + n[2] * n[2]),
    u = c - s,
    l = o * o + i * i - u * u;
  l = l < 0 ? 0 : Math.sqrt(l);
  var d = 1 + 0.045 * c,
    v = 1 + 0.015 * c,
    p = a / 1,
    g = u / d,
    f = l / v,
    h = p * p + g * g + f * f;
  return h < 0 ? 0 : Math.sqrt(h);
}
function Ff(e) {
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
var _g = function (t) {
  for (var r = 0, n = 0; n < t.length; n++) {
    var a = t.charCodeAt(n);
    ((r = (r << 5) - r + a), (r &= r));
  }
  return new Uint32Array([r])[0].toString(36);
};
function Lf(e, t) {
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
function Bf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Gk = "light",
  Hk = "no-preference",
  mg = function () {
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
      v = t.spacing,
      p = v === void 0 ? ye.spacing : v,
      g = t.typography,
      f = g === void 0 ? ye.typography : g,
      h = t.UNSAFE_themeOptions,
      b = h === void 0 ? ye.UNSAFE_themeOptions : h,
      _ = zk({ dark: o, light: c, shape: d, spacing: p, typography: f }),
      y = C(C({}, Nr, _), Ai, n === "auto" ? Gk : n);
    if (
      (oe("platform_increased-contrast-themes") &&
        (y = Bf(Bf({}, y), {}, C({}, pg, u === "auto" ? Hk : u))),
      b && bg(b.brandColor))
    ) {
      var k = JSON.stringify(b),
        w = _g(k);
      y[Ii] = w;
    }
    return y;
  },
  yg = {
    light: function () {
      return Re(() => import("./atlassian-light-iTW-otmN.js"), [], import.meta.url);
    },
    "light-future": function () {
      return Re(() => import("./atlassian-light-future-haVDxNsm.js"), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return Re(
        () => import("./atlassian-light-increased-contrast-Bee8ji68.js"),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return Re(() => import("./atlassian-dark-4gKENQbc.js"), [], import.meta.url);
    },
    "dark-future": function () {
      return Re(() => import("./atlassian-dark-future-CCJR4psC.js"), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return Re(
        () => import("./atlassian-dark-increased-contrast-Dbe5SQSy.js"),
        [],
        import.meta.url,
      );
    },
    "legacy-light": function () {
      return Re(() => import("./atlassian-legacy-light-ChQmBoUT.js"), [], import.meta.url);
    },
    "legacy-dark": function () {
      return Re(() => import("./atlassian-legacy-dark-OVXC1RdQ.js"), [], import.meta.url);
    },
    spacing: function () {
      return Re(() => import("./atlassian-spacing-1f3oj8Ec.js"), [], import.meta.url);
    },
    typography: function () {
      return Re(() => import("./atlassian-typography-CYPetdyb.js"), [], import.meta.url);
    },
    "typography-adg3": function () {
      return Re(() => import("./atlassian-typography-adg3-sSgQ5NYs.js"), [], import.meta.url);
    },
    shape: function () {
      return Re(() => import("./atlassian-shape-Bf-lgf8R.js"), [], import.meta.url);
    },
    "typography-modernized": function () {
      return Re(() => import("./atlassian-typography-modernized-Cir9UX9U.js"), [], import.meta.url);
    },
    "typography-refreshed": function () {
      return Re(() => import("./atlassian-typography-refreshed-Bo1x59mK.js"), [], import.meta.url);
    },
  },
  Kk = (function () {
    var e = Y(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  !document.head.querySelector(
                    "style[".concat(Nr, '="').concat(r, '"]:not([').concat(Ii, "])"),
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
                return ((i.next = 6), Wk(r));
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
  Wk = (function () {
    var e = Y(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), yg[r]());
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
  Jk = "(prefers-color-scheme: dark)",
  Xk = "(prefers-contrast: more)",
  Yk = typeof window < "u" && "matchMedia" in window;
function Zk(e) {
  var t = document.documentElement;
  t.setAttribute(Ai, e.matches ? "dark" : "light");
}
var Wr = Yk && window.matchMedia(Jk),
  Qk = (function () {
    function e() {
      (be(this, e), C(this, "unbindThemeChangeListener", null));
    }
    return _e(e, [
      {
        key: "getColorMode",
        value: function () {
          return Wr && Wr != null && Wr.matches ? "dark" : "light";
        },
      },
      {
        key: "bind",
        value: function () {
          Wr &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = Mr.bind(Wr, { type: "change", listener: Zk }));
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
  So = new Qk(),
  eO = typeof window < "u" && "matchMedia" in window;
function tO(e) {
  var t = document.documentElement;
  t.setAttribute(pg, e.matches ? "more" : "no-preference");
}
var Jr = eO && window.matchMedia(Xk),
  rO = (function () {
    function e() {
      (be(this, e), C(this, "unbindContrastChangeListener", null));
    }
    return _e(e, [
      {
        key: "getContrastMode",
        value: function () {
          return Jr && Jr != null && Jr.matches ? "more" : "no-preference";
        },
      },
      {
        key: "bind",
        value: function () {
          Jr &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = Mr.bind(Jr, { type: "change", listener: tO }));
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
  Eo = new rO();
function nO(e) {
  (e.colorMode === "auto" ? ((e.colorMode = So.getColorMode()), So.bind()) : So.unbind(),
    oe("platform_increased-contrast-themes") &&
      (e.contrastMode === "auto"
        ? ((e.contrastMode = Eo.getContrastMode()), Eo.bind())
        : Eo.unbind()));
  var t = mg(e);
  return (
    Object.entries(t).forEach(function (r) {
      var n = K(r, 2),
        a = n[0],
        o = n[1];
      document.documentElement.setAttribute(a, o);
    }),
    function () {
      (So.unbind(), oe("platform_increased-contrast-themes") && Eo.unbind());
    }
  );
}
function aO(e, t) {
  var r = JSON.stringify(e),
    n = _g(r),
    a = [];
  return (
    (t === "auto" ? ["light", "dark"] : [t]).forEach(function (o) {
      var i = document.head.querySelector(
        "style[".concat(Ii, '="').concat(n, '"][').concat(Nr, '="').concat(o, '"]'),
      );
      i ? document.head.appendChild(i) : a.push(o);
    }),
    a
  );
}
function QP(e) {
  var t = Fe(Array.from(document.head.querySelectorAll("style[".concat(Ii, "][").concat(Nr, "]"))));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (r) {
      return r.remove();
    });
}
function eR(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var a = K(n, 2),
      o = a[0],
      i = a[1],
      c = fg[o];
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
function Uf(e) {
  var t;
  return (t = Object.entries(Nk).find(function (r) {
    var n = K(r, 2),
      a = n[1].increasesContrastFor;
    return a === e;
  })) === null || t === void 0
    ? void 0
    : t[1].id;
}
var oO = function (t) {
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
        oe("platform_increased-contrast-themes") &&
        u.forEach(function (v) {
          var p = Uf(v);
          p && u.push(p);
        }),
        l.push.apply(l, u));
    else if ((l.push(t[r]), n !== "no-preference" && oe("platform_increased-contrast-themes"))) {
      var d = Uf(t[r]);
      d && l.push(d);
    }
    return (
      [i, c, s].forEach(function (v) {
        v && l.push(v);
      }),
      Fe(new Set(l))
    );
  },
  iO = function (t) {
    var r = [];
    return Fe(new Set(r));
  };
function sO(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = cO(e)) || t) {
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
function cO(e, t) {
  if (e) {
    if (typeof e == "string") return qf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? qf(e, t)
          : void 0
    );
  }
}
function qf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
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
function $f(e) {
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
var uO = (function () {
    var e = Y(
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
          v,
          p,
          g,
          f,
          h,
          b,
          _,
          y,
          k,
          w,
          S,
          x,
          R,
          I,
          P,
          D,
          L,
          z,
          F,
          H,
          V = arguments;
        return T.wrap(
          function (U) {
            for (;;)
              switch ((U.prev = U.next)) {
                case 0:
                  return (
                    (r = V.length > 0 && V[0] !== void 0 ? V[0] : {}),
                    (n = V.length > 1 ? V[1] : void 0),
                    (a =
                      typeof r == "function"
                        ? r(
                            $f(
                              $f({}, ye),
                              {},
                              { typography: ye.typography, shape: ye.shape() },
                              Hc(),
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
                    (v = d === void 0 ? ye.light : d),
                    (p = a.shape),
                    (g = p === void 0 ? ye.shape() : p),
                    (f = a.spacing),
                    (h = f === void 0 ? ye.spacing : f),
                    (b = a.typography),
                    (_ = b === void 0 ? ye.typography : b),
                    (y = a.UNSAFE_themeOptions),
                    (k = y === void 0 ? ye.UNSAFE_themeOptions : y),
                    oe("platform_increased-contrast-themes") ||
                      (v === "light-increased-contrast" && (v = "light"),
                      l === "dark-increased-contrast" && (l = "dark")),
                    (w = {
                      colorMode: i,
                      contrastMode: s,
                      dark: l,
                      light: v,
                      shape: g,
                      spacing: h,
                      typography: _,
                      UNSAFE_themeOptions: n ? void 0 : k,
                    }),
                    (S = oO(w)),
                    (x = n || Kk),
                    (R = S.map(
                      (function () {
                        var q = Y(
                          T.mark(function G(te) {
                            return T.wrap(function (le) {
                              for (;;)
                                switch ((le.prev = le.next)) {
                                  case 0:
                                    return ((le.next = 2), x(te));
                                  case 2:
                                    return le.abrupt("return", le.sent);
                                  case 3:
                                  case "end":
                                    return le.stop();
                                }
                            }, G);
                          }),
                        );
                        return function (G) {
                          return q.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      k &&
                      bg(k?.brandColor) &&
                      ((I = i || ye.colorMode),
                      (P = aO(k, I)),
                      P.length > 0 &&
                        R.push(
                          Y(
                            T.mark(function q() {
                              var G, te;
                              return T.wrap(function (le) {
                                for (;;)
                                  switch ((le.prev = le.next)) {
                                    case 0:
                                      return (
                                        (le.next = 2),
                                        Re(
                                          () => import("./custom-theme-DJOE3RS7.js"),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((G = le.sent),
                                        (te = G.loadAndAppendCustomThemeCss),
                                        te({
                                          colorMode: P.length === 2 ? "auto" : P[0],
                                          UNSAFE_themeOptions: k,
                                        }));
                                    case 5:
                                    case "end":
                                      return le.stop();
                                  }
                              }, q);
                            }),
                          )(),
                        )),
                    (U.next = 11),
                    Promise.all(R)
                  );
                case 11:
                  ((D = iO()), (L = sO(D)), (U.prev = 13), L.s());
                case 15:
                  if ((z = L.n()).done) {
                    U.next = 21;
                    break;
                  }
                  return ((F = z.value), (U.next = 19), x(F));
                case 19:
                  U.next = 15;
                  break;
                case 21:
                  U.next = 26;
                  break;
                case 23:
                  ((U.prev = 23), (U.t0 = U.catch(13)), L.e(U.t0));
                case 26:
                  return ((U.prev = 26), L.f(), U.finish(26));
                case 29:
                  return ((H = nO(w)), U.abrupt("return", H));
                case 31:
                case "end":
                  return U.stop();
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
  Kc = (function () {
    function e(t) {
      (be(this, e), C(this, "legacyObserver", null), (this.callback = t), e.callbacks.add(t));
    }
    return _e(e, [
      {
        key: "observe",
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var r = Hc();
              e.callbacks.forEach(function (n) {
                return n(r);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [Nr, Ai] }));
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
C(Kc, "observer", null);
C(Kc, "callbacks", new Set());
var wg = m.createContext(void 0),
  lO = m.createContext(void 0),
  kg = m.createContext(!1),
  dO = m.createContext(void 0),
  fO = m.createContext(void 0),
  pO = function () {
    var t;
    return (t = m.useContext(kg)) !== null && t !== void 0 ? t : !1;
  },
  Og = function () {
    return typeof document < "u" ? document : null;
  };
function Sg(e) {
  var t = Og();
  return t ? t.head.querySelector("style[".concat(Nr, '="').concat(e, '"]')) : !1;
}
var vO = (function () {
    var e = Y(
      T.mark(function t(r) {
        var n, a;
        return T.wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (!Sg(r)) {
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
                return ((i.next = 6), yg[r]());
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
  hO = (function () {
    var e = Y(
      T.mark(function t(r, n) {
        var a, o;
        return T.wrap(function (c) {
          for (;;)
            switch ((c.prev = c.next)) {
              case 0:
                if (((a = Og()), a)) {
                  c.next = 3;
                  break;
                }
                return c.abrupt("return");
              case 3:
                if (
                  ((o = a.createElement("style")),
                  (o.textContent = r),
                  (o.dataset.theme = n),
                  !Sg(n))
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
  gO = (function () {
    var e = Y(
      T.mark(function t(r) {
        var n;
        return T.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return ((o.next = 2), vO(r));
              case 2:
                if (((n = o.sent), n)) {
                  o.next = 5;
                  break;
                }
                return o.abrupt("return");
              case 5:
                hO(n, r);
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
  bO = (function () {
    var e = Y(
      T.mark(function t(r) {
        var n;
        return T.wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                ((n = Object.values(r).filter(function (i) {
                  return !!i;
                })),
                  n.forEach(gO));
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
function Vf(e, t) {
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
      ? Vf(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var _O = { dark: "dark", light: "light", spacing: "spacing", typography: "typography" },
  mO = typeof window < "u" && "matchMedia" in window,
  Ua = mO ? window.matchMedia("(prefers-color-scheme: dark)") : void 0;
function Gf(e) {
  return e === "auto" ? (Ua != null && Ua.matches ? "dark" : "light") : e;
}
var yO = { body: "_1e0c1bgi" };
function Eg(e) {
  var t = e.children,
    r = e.defaultColorMode,
    n = r === void 0 ? "auto" : r,
    a = e.defaultTheme,
    o = m.useState(n),
    i = K(o, 2),
    c = i[0],
    s = i[1],
    u = m.useState(Gf(n)),
    l = K(u, 2),
    d = l[0],
    v = l[1],
    p = m.useState(function () {
      return Ot(Ot({}, _O), a);
    }),
    g = K(p, 2),
    f = g[0],
    h = g[1],
    b = m.useCallback(function (R) {
      (s(R), v(Gf(R)));
    }, []),
    _ = m.useCallback(function (R) {
      h(function (I) {
        return Ot(Ot({}, I), R);
      });
    }, []),
    y = m.useRef(null),
    k = C1(),
    w = pO(),
    S = k && !w;
  (m.useEffect(
    function () {
      if (S || (!k && !w && !oe("platform_dst_subtree_theming"))) {
        var R = (function () {
            var P = Y(
              T.mark(function D() {
                var L;
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
                        ((L = F.sent), L(), (y.current = null));
                      case 6:
                      case "end":
                        return F.stop();
                    }
                }, D);
              }),
            );
            return function () {
              return P.apply(this, arguments);
            };
          })(),
          I = (function () {
            var P = Y(
              T.mark(function D() {
                var L;
                return T.wrap(function (F) {
                  for (;;)
                    switch ((F.prev = F.next)) {
                      case 0:
                        return ((F.next = 2), R());
                      case 2:
                        ((L = uO(Ot(Ot({}, f), {}, { colorMode: d }))), (y.current = L));
                      case 4:
                      case "end":
                        return F.stop();
                    }
                }, D);
              }),
            );
            return function () {
              return P.apply(this, arguments);
            };
          })();
        return (
          I(),
          function () {
            R();
          }
        );
      } else bO(f);
    },
    [k, w, S, d, f],
  ),
    m.useEffect(
      function () {
        if (Ua) {
          var R = Mr.bind(Ua, {
            type: "change",
            listener: function (P) {
              c === "auto" && v(P.matches ? "dark" : "light");
            },
          });
          return R;
        }
      },
      [c],
    ));
  var x = Ot(Ot({}, mg(Ot(Ot({}, f), {}, { colorMode: d }))), {}, C({}, Fk, !0));
  return O.createElement(
    kg.Provider,
    { value: !0 },
    O.createElement(
      wg.Provider,
      { value: d },
      O.createElement(
        lO.Provider,
        { value: b },
        O.createElement(
          dO.Provider,
          { value: f },
          O.createElement(
            fO.Provider,
            { value: _ },
            oe("platform_dst_subtree_theming")
              ? O.createElement("div", ee({}, x, { className: A([yO.body]) }), t)
              : t,
          ),
        ),
      ),
    ),
  );
}
function xg() {
  var e = m.useContext(wg),
    t = Hc(),
    r = m.useState(t?.colorMode || "light"),
    n = K(r, 2),
    a = n[0],
    o = n[1];
  return (
    m.useEffect(
      function () {
        if (!e) {
          var i = new Kc(function (c) {
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
var wO = function () {
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
  Cg = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: wO() });
  },
  kO = Cg(),
  OO = m.createContext(Cg()),
  SO = function (e) {
    return e.value++;
  },
  EO = function (e) {
    return e ? e.prefix : "";
  },
  xO = function (e) {
    var t = e || kO,
      r = EO(t),
      n = SO(t),
      a = r + n,
      o = function (i) {
        return a + t.uid(i);
      };
    return { uid: a, gen: o };
  },
  Pg = function () {
    var e = m.useContext(OO),
      t = m.useState(function () {
        return xO(e);
      })[0];
    return t;
  },
  CO = function () {
    var e = Pg().uid;
    return e;
  },
  PO = function () {
    var e = Pg().gen;
    return e;
  },
  qs,
  No = (qs = O.useId) !== null && qs !== void 0 ? qs : void 0;
function Rg() {
  return No && oe("platform-dst-react-18-use-id")
    ? oe("platform-dst-react-18-use-id-selector-safe")
      ? No().replace(/[:«»]/g, "_")
      : No()
    : "uid".concat(CO());
}
function RO() {
  if (No && oe("platform-dst-react-18-use-id")) {
    var e = Rg();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return PO();
}
var ji = function (t) {
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
      className: A([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
ji.displayName = "VisuallyHidden";
var AO = {
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
  IO = ["children"];
function jO(e) {
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
      s = ie(i, IO),
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
var DO = jO(function () {
    return { mode: "light" };
  }),
  TO = DO.useTheme;
function MO(e) {
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
var FO = (function () {
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
          var o = MO(a);
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
  Ne = "-ms-",
  oi = "-moz-",
  ne = "-webkit-",
  Ag = "comm",
  Wc = "rule",
  Jc = "decl",
  LO = "@import",
  Ig = "@keyframes",
  BO = "@layer",
  UO = Math.abs,
  Di = String.fromCharCode,
  qO = Object.assign;
function zO(e, t) {
  return Ae(e, 0) ^ 45
    ? (((((((t << 2) ^ Ae(e, 0)) << 2) ^ Ae(e, 1)) << 2) ^ Ae(e, 2)) << 2) ^ Ae(e, 3)
    : 0;
}
function jg(e) {
  return e.trim();
}
function $O(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, r) {
  return e.replace(t, r);
}
function wc(e, t) {
  return e.indexOf(t);
}
function Ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function Za(e, t, r) {
  return e.slice(t, r);
}
function Et(e) {
  return e.length;
}
function Xc(e) {
  return e.length;
}
function xo(e, t) {
  return (t.push(e), e);
}
function VO(e, t) {
  return e.map(t).join("");
}
var Ti = 1,
  un = 1,
  Dg = 0,
  Ge = 0,
  we = 0,
  bn = "";
function Mi(e, t, r, n, a, o, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: o,
    line: Ti,
    column: un,
    length: i,
    return: "",
  };
}
function xa(e, t) {
  return qO(Mi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function GO() {
  return we;
}
function HO() {
  return ((we = Ge > 0 ? Ae(bn, --Ge) : 0), un--, we === 10 && ((un = 1), Ti--), we);
}
function Xe() {
  return ((we = Ge < Dg ? Ae(bn, Ge++) : 0), un++, we === 10 && ((un = 1), Ti++), we);
}
function jt() {
  return Ae(bn, Ge);
}
function Fo() {
  return Ge;
}
function lo(e, t) {
  return Za(bn, e, t);
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
function Tg(e) {
  return ((Ti = un = 1), (Dg = Et((bn = e))), (Ge = 0), []);
}
function Mg(e) {
  return ((bn = ""), e);
}
function Lo(e) {
  return jg(lo(Ge - 1, kc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function KO(e) {
  for (; (we = jt()) && we < 33; ) Xe();
  return Qa(e) > 2 || Qa(we) > 3 ? "" : " ";
}
function WO(e, t) {
  for (; --t && Xe() && !(we < 48 || we > 102 || (we > 57 && we < 65) || (we > 70 && we < 97)); );
  return lo(e, Fo() + (t < 6 && jt() == 32 && Xe() == 32));
}
function kc(e) {
  for (; Xe(); )
    switch (we) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && kc(we);
        break;
      case 40:
        e === 41 && kc(e);
        break;
      case 92:
        Xe();
        break;
    }
  return Ge;
}
function JO(e, t) {
  for (; Xe() && e + we !== 57; ) if (e + we === 84 && jt() === 47) break;
  return "/*" + lo(t, Ge - 1) + "*" + Di(e === 47 ? e : Xe());
}
function XO(e) {
  for (; !Qa(jt()); ) Xe();
  return lo(e, Ge);
}
function YO(e) {
  return Mg(Bo("", null, null, null, [""], (e = Tg(e)), 0, [0], e));
}
function Bo(e, t, r, n, a, o, i, c, s) {
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
      _ = 0,
      y = "",
      k = a,
      w = o,
      S = n,
      x = y;
    h;
  )
    switch (((g = _), (_ = Xe()))) {
      case 40:
        if (g != 108 && Ae(x, d - 1) == 58) {
          wc((x += ae(Lo(_), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Lo(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += KO(g);
        break;
      case 92:
        x += WO(Fo() - 1, 7);
        continue;
      case 47:
        switch (jt()) {
          case 42:
          case 47:
            xo(ZO(JO(Xe(), Fo()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        c[u++] = Et(x) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (b == -1 && (x = ae(x, /\f/g, "")),
              p > 0 &&
                Et(x) - d &&
                xo(p > 32 ? Kf(x + ";", n, r, d - 1) : Kf(ae(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((xo((S = Hf(x, t, r, u, l, a, c, y, (k = []), (w = []), d)), o), _ === 123))
              if (l === 0) Bo(x, t, S, S, k, o, d, c, w);
              else
                switch (v === 99 && Ae(x, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bo(
                      e,
                      S,
                      S,
                      n && xo(Hf(e, S, S, 0, 0, a, c, y, a, (k = []), d), w),
                      a,
                      w,
                      d,
                      c,
                      n ? k : w,
                    );
                    break;
                  default:
                    Bo(x, S, S, S, [""], w, 0, c, w);
                }
        }
        ((u = l = p = 0), (f = b = 1), (y = x = ""), (d = i));
        break;
      case 58:
        ((d = 1 + Et(x)), (p = g));
      default:
        if (f < 1) {
          if (_ == 123) --f;
          else if (_ == 125 && f++ == 0 && HO() == 125) continue;
        }
        switch (((x += Di(_)), _ * f)) {
          case 38:
            b = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((c[u++] = (Et(x) - 1) * b), (b = 1));
            break;
          case 64:
            (jt() === 45 && (x += Lo(Xe())), (v = jt()), (l = d = Et((y = x += XO(Fo())))), _++);
            break;
          case 45:
            g === 45 && Et(x) == 2 && (f = 0);
        }
    }
  return o;
}
function Hf(e, t, r, n, a, o, i, c, s, u, l) {
  for (var d = a - 1, v = a === 0 ? o : [""], p = Xc(v), g = 0, f = 0, h = 0; g < n; ++g)
    for (var b = 0, _ = Za(e, d + 1, (d = UO((f = i[g])))), y = e; b < p; ++b)
      (y = jg(f > 0 ? v[b] + " " + _ : ae(_, /&\f/g, v[b]))) && (s[h++] = y);
  return Mi(e, t, r, a === 0 ? Wc : c, s, u, l);
}
function ZO(e, t, r) {
  return Mi(e, t, r, Ag, Di(GO()), Za(e, 2, -2), 0);
}
function Kf(e, t, r, n) {
  return Mi(e, t, r, Jc, Za(e, 0, n), Za(e, n + 1, -1), n);
}
function nn(e, t) {
  for (var r = "", n = Xc(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function QO(e, t, r, n) {
  switch (e.type) {
    case BO:
      if (e.children.length) break;
    case LO:
    case Jc:
      return (e.return = e.return || e.value);
    case Ag:
      return "";
    case Ig:
      return (e.return = e.value + "{" + nn(e.children, n) + "}");
    case Wc:
      e.value = e.props.join(",");
  }
  return Et((r = nn(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function eS(e) {
  var t = Xc(e);
  return function (r, n, a, o) {
    for (var i = "", c = 0; c < t; c++) i += e[c](r, n, a, o) || "";
    return i;
  };
}
function tS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function rS(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var nS = function (t, r, n) {
    for (var a = 0, o = 0; (a = o), (o = jt()), a === 38 && o === 12 && (r[n] = 1), !Qa(o); ) Xe();
    return lo(t, Ge);
  },
  aS = function (t, r) {
    var n = -1,
      a = 44;
    do
      switch (Qa(a)) {
        case 0:
          (a === 38 && jt() === 12 && (r[n] = 1), (t[n] += nS(Ge - 1, r, n)));
          break;
        case 2:
          t[n] += Lo(a);
          break;
        case 4:
          if (a === 44) {
            ((t[++n] = jt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Di(a);
      }
    while ((a = Xe()));
    return t;
  },
  oS = function (t, r) {
    return Mg(aS(Tg(t), r));
  },
  Wf = new WeakMap(),
  iS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Wf.get(n)) && !a) {
        Wf.set(t, !0);
        for (var o = [], i = oS(r, o), c = n.props, s = 0, u = 0; s < i.length; s++)
          for (var l = 0; l < c.length; l++, u++)
            t.props[u] = o[s] ? i[s].replace(/&\f/g, c[l]) : c[l] + " " + i[s];
      }
    }
  },
  sS = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function Ng(e, t) {
  switch (zO(e, t)) {
    case 5103:
      return ne + "print-" + e + e;
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
      return ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ne + e + oi + e + Ne + e + e;
    case 6828:
    case 4268:
      return ne + e + Ne + e + e;
    case 6165:
      return ne + e + Ne + "flex-" + e + e;
    case 5187:
      return ne + e + ae(e, /(\w+).+(:[^]+)/, ne + "box-$1$2" + Ne + "flex-$1$2") + e;
    case 5443:
      return ne + e + Ne + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return ne + e + Ne + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ne + e + Ne + ae(e, "shrink", "negative") + e;
    case 5292:
      return ne + e + Ne + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return ne + "box-" + ae(e, "-grow", "") + ne + e + Ne + ae(e, "grow", "positive") + e;
    case 4554:
      return ne + ae(e, /([^-])(transform)/g, "$1" + ne + "$2") + e;
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, ne + "$1$`$1");
    case 4968:
      return (
        ae(
          ae(e, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + Ne + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        ne +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, ne + "$1$2") + e;
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
        switch (Ae(e, t + 1)) {
          case 109:
            if (Ae(e, t + 4) !== 45) break;
          case 102:
            return (
              ae(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + ne + "$2-$3$1" + oi + (Ae(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~wc(e, "stretch") ? Ng(ae(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ae(e, t + 1) !== 115) break;
    case 6444:
      switch (Ae(e, Et(e) - 3 - (~wc(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + ne) + e;
        case 101:
          return (
            ae(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ne +
                (Ae(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ne +
                "$2$3$1" +
                Ne +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ae(e, t + 11)) {
        case 114:
          return ne + e + Ne + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ne + e + Ne + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ne + e + Ne + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ne + e + Ne + e + e;
  }
  return e;
}
var cS = function (t, r, n, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Jc:
          t.return = Ng(t.value, t.length);
          break;
        case Ig:
          return nn([xa(t, { value: ae(t.value, "@", "@" + ne) })], a);
        case Wc:
          if (t.length)
            return VO(t.props, function (o) {
              switch ($O(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return nn([xa(t, { props: [ae(o, /:(read-\w+)/, ":" + oi + "$1")] })], a);
                case "::placeholder":
                  return nn(
                    [
                      xa(t, { props: [ae(o, /:(plac\w+)/, ":" + ne + "input-$1")] }),
                      xa(t, { props: [ae(o, /:(plac\w+)/, ":" + oi + "$1")] }),
                      xa(t, { props: [ae(o, /:(plac\w+)/, Ne + "input-$1")] }),
                    ],
                    a,
                  );
              }
              return "";
            });
      }
  },
  uS = [cS],
  lS = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || uS,
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
      u = [iS, sS];
    {
      var l,
        d = [
          QO,
          tS(function (f) {
            l.insert(f);
          }),
        ],
        v = eS(u.concat(a, d)),
        p = function (h) {
          return nn(YO(h), v);
        };
      s = function (h, b, _, y) {
        ((l = _), p(h ? h + "{" + b.styles + "}" : b.styles), y && (g.inserted[b.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new FO({
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
  zs = { exports: {} },
  se = {};
var Jf;
function dS() {
  if (Jf) return se;
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
    v = e ? Symbol.for("react.suspense_list") : 60120,
    p = e ? Symbol.for("react.memo") : 60115,
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
                case p:
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
    (se.Memo = p),
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
      return y(w) === p;
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
        w === v ||
        (typeof w == "object" &&
          w !== null &&
          (w.$$typeof === g ||
            w.$$typeof === p ||
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
var Xf;
function fS() {
  return (Xf || ((Xf = 1), (zs.exports = dS())), zs.exports);
}
var $s, Yf;
function pS() {
  if (Yf) return $s;
  Yf = 1;
  var e = fS(),
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
    v = Object.prototype;
  function p(g, f, h) {
    if (typeof f != "string") {
      if (v) {
        var b = d(f);
        b && b !== v && p(g, b, h);
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
  return (($s = p), $s);
}
pS();
var vS = !0;
function Fg(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }),
    n
  );
}
var Yc = function (t, r, n) {
    var a = t.key + "-" + r.name;
    (n === !1 || vS === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  },
  Lg = function (t, r, n) {
    Yc(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do (t.insert(r === o ? "." + a : "", o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function hS(e) {
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
var gS = {
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
  bS = /[A-Z]|^ms/g,
  _S = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Bg = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Zf = function (t) {
    return t != null && typeof t != "boolean";
  },
  Vs = rS(function (e) {
    return Bg(e) ? e : e.replace(bS, "-$&").toLowerCase();
  }),
  Qf = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(_S, function (n, a, o) {
            return ((xt = { name: a, styles: o, next: xt }), a);
          });
    }
    return gS[t] !== 1 && !Bg(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
      return mS(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = xt,
          u = r(e);
        return ((xt = s), eo(e, t, u));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function mS(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += eo(e, t, r[a]) + ";";
  else
    for (var o in r) {
      var i = r[o];
      if (typeof i != "object") {
        var c = i;
        t != null && t[c] !== void 0
          ? (n += o + "{" + t[c] + "}")
          : Zf(c) && (n += Vs(o) + ":" + Qf(o, c) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++) Zf(i[s]) && (n += Vs(o) + ":" + Qf(o, i[s]) + ";");
      else {
        var u = eo(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Vs(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var ep = /label:\s*([^\s;{]+)\s*(;|$)/g,
  xt;
function Zc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    a = "";
  xt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (a += eo(r, t, o)));
  else {
    var i = o;
    a += i[0];
  }
  for (var c = 1; c < e.length; c++)
    if (((a += eo(r, t, e[c])), n)) {
      var s = o;
      a += s[c];
    }
  ep.lastIndex = 0;
  for (var u = "", l; (l = ep.exec(a)) !== null; ) u += "-" + l[1];
  var d = hS(a) + u;
  return { name: d, styles: a, next: xt };
}
var yS = function (t) {
    return t();
  },
  wS = bu.useInsertionEffect ? bu.useInsertionEffect : !1,
  Ug = wS || yS,
  qg = m.createContext(typeof HTMLElement < "u" ? lS({ key: "css" }) : null);
qg.Provider;
var zg = function (t) {
    return m.forwardRef(function (r, n) {
      var a = m.useContext(qg);
      return t(r, a, n);
    });
  },
  $g = m.createContext({}),
  Qc = {}.hasOwnProperty,
  Oc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  kS = function (t, r) {
    var n = {};
    for (var a in r) Qc.call(r, a) && (n[a] = r[a]);
    return ((n[Oc] = t), n);
  },
  OS = function (t) {
    var r = t.cache,
      n = t.serialized,
      a = t.isStringTag;
    return (
      Yc(r, n, a),
      Ug(function () {
        return Lg(r, n, a);
      }),
      null
    );
  },
  SS = zg(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Oc],
      o = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Fg(t.registered, o, e.className))
      : e.className != null && (i = e.className + " ");
    var c = Zc(o, void 0, m.useContext($g));
    i += t.key + "-" + c.name;
    var s = {};
    for (var u in e) Qc.call(e, u) && u !== "css" && u !== Oc && (s[u] = e[u]);
    return (
      (s.className = i),
      r && (s.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(OS, { cache: t, serialized: c, isStringTag: typeof a == "string" }),
        m.createElement(a, s),
      )
    );
  }),
  ES = SS,
  Xt = function (t, r) {
    var n = arguments;
    if (r == null || !Qc.call(r, "css")) return m.createElement.apply(void 0, n);
    var a = n.length,
      o = new Array(a);
    ((o[0] = ES), (o[1] = kS(t, r)));
    for (var i = 2; i < a; i++) o[i] = n[i];
    return m.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Xt || (Xt = {}));
function Ft() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Zc(t);
}
var xS = function e(t) {
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
function CS(e, t, r) {
  var n = [],
    a = Fg(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var PS = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Ug(function () {
        for (var a = 0; a < n.length; a++) Lg(r, n[a], !1);
      }),
      null
    );
  },
  RS = zg(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        var d = Zc(u, t.registered);
        return (r.push(d), Yc(t, d, !1), t.key + "-" + d.name);
      },
      a = function () {
        for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
        return CS(t.registered, n, xS(u));
      },
      o = { css: n, cx: a, theme: m.useContext($g) },
      i = e.children(o);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(PS, { cache: t, serializedArr: r }),
      i,
    );
  });
function Vg(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Gg = 2,
  Sc = Ft({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Gg,
  }),
  Ec = Ft({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Gg,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  AS = Ft({
    "&:focus": Sc,
    "&:focus-visible": Sc,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  IS = Ft({
    "&:focus": Ec,
    "&:focus-visible": Ec,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Hg = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      a = r ? Ec : Sc,
      o = r ? IS : AS,
      i = typeof n > "u" ? o : n === "on" && a;
    return Xt(RS, null, function (c) {
      var s = c.css,
        u = c.cx;
      return m.Children.only(
        i ? m.cloneElement(t, { className: u([s(i), t.props.className]) }) : t,
      );
    });
  });
Hg.displayName = "FocusRing";
function Ht(e) {
  (e.preventDefault(), e.stopPropagation());
}
var jS = 9;
function tp(e) {
  e.keyCode !== jS && Ht(e);
}
var DS = {
    onMouseDownCapture: Ht,
    onMouseUpCapture: Ht,
    onKeyDownCapture: tp,
    onKeyUpCapture: tp,
    onTouchStartCapture: Ht,
    onTouchEndCapture: Ht,
    onPointerDownCapture: Ht,
    onPointerUpCapture: Ht,
    onClickCapture: Ht,
    onClick: Ht,
  },
  TS = {};
function MS(e) {
  var t = e.isInteractive;
  return t ? TS : DS;
}
function rp(e, t) {
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
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ir = 8,
  Gs = ["default", "primary", "danger", "warning"],
  xc = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  NS = { default: xc.default, compact: xc.compact, none: "inherit" },
  FS = {
    default: "0 ".concat(ir + ir / 4, "px"),
    compact: "0 ".concat(ir + ir / 4, "px"),
    none: "0",
  },
  LS = { compact: "0 ".concat(ir / 4, "px"), default: "0 ".concat(ir / 4, "px"), none: "0" },
  BS = { default: "middle", compact: "middle", none: "baseline" },
  Kg = { content: "0 ".concat(ir / 4, "px"), icon: "0 ".concat(ir / 4, "px") },
  Wg = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  US = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": ze(ze({}, Wg), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  qS = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  zS = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  $S = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  VS = {
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
  GS = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  HS = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  KS = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": ze(
      ze({}, Wg),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  WS = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function JS(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    a = e.shouldFitContainer,
    o = e.isOnlySingleIcon;
  return ze(
    ze(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: oe("platform-dst-shape-theme-default")
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
        height: xc[r],
        lineHeight: NS[r],
        padding: o ? LS[r] : FS[r],
        verticalAlign: BS[r],
        width: a ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? KS
        : ze(
            ze(
              ze(
                ze(
                  ze(
                    ze(
                      ze(ze({}, t === "default" && US), t === "primary" && qS),
                      t === "link" && zS,
                    ),
                    t === "subtle" && $S,
                  ),
                  t === "subtle-link" && VS,
                ),
                t === "warning" && GS,
              ),
              t === "danger" && HS,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: Gs.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: Gs.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: Gs.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            WS,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function np(e) {
  var t = e.spacing;
  return Ft({
    display: "flex",
    margin: t === "none" ? 0 : Kg.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function XS(e) {
  var t = e.spacing;
  return Ft({
    margin: t === "none" ? 0 : Kg.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function YS(e) {
  var t = e.hasOverlay;
  return Ft({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var ZS = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  eu = function (t) {
    return t && m.isValidElement(t) && t.type === ji;
  },
  QS = [
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
  eE = { "> *": { pointerEvents: "none" } },
  tE = Ft({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  rE = Ft({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  ap = function (t, r) {
    return !t || eu(t) ? null : r;
  },
  nE = function (t, r) {
    return eu(t) ? t : t ? Xt("span", { css: r }, t) : null;
  },
  aE = O.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      a = t.appearance,
      o = a === void 0 ? "default" : a,
      i = t.autoFocus,
      c = i === void 0 ? !1 : i,
      s = t.buttonCss,
      u = t.children,
      l = t.className,
      d = t.href,
      v = t.component,
      p = v === void 0 ? (d ? "a" : "button") : v,
      g = t.iconAfter,
      f = t.iconBefore,
      h = t.interactionName,
      b = t.isDisabled,
      _ = b === void 0 ? !1 : b,
      y = t.isSelected,
      k = y === void 0 ? !1 : y,
      w = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? Le : S,
      R = t.onFocus,
      I = t.onMouseDown,
      P = I === void 0 ? Le : I,
      D = t.overlay;
    t.shouldFitContainer;
    var L = t.spacing,
      z = L === void 0 ? "default" : L,
      F = t.tabIndex,
      H = F === void 0 ? 0 : F,
      V = t.type,
      W = V === void 0 ? (d ? void 0 : "button") : V,
      U = t.testId,
      q = ie(t, QS),
      G = m.useRef(),
      te = m.useCallback(
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
    Vg(G, c);
    var ce = m.useContext(Uc),
      le = m.useCallback(
        function (pe, Ue) {
          (ce && ce.tracePress(h, pe.timeStamp), x(pe, Ue));
        },
        [x, ce, h],
      ),
      Oe = cn({
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
        var pe = G.current;
        _ && pe && pe === document.activeElement && pe.blur();
      },
      [_],
    );
    var me = !!D,
      Be = Ft(YS({ hasOverlay: me })),
      fe = !_ && !me,
      Ce = {};
    return (
      (k || _ || o === "warning") &&
        (Ce = {
          "[data-theme] & circle": {
            stroke: "".concat(
              k || _
                ? "var(--ds-icon-subtle, ".concat(ni, ")")
                : "var(--ds-icon-warning-inverse, ".concat(ni, ")"),
              " !important",
            ),
          },
        }),
      Xt(
        Hg,
        null,
        Xt(
          p,
          ee(
            {},
            q,
            {
              ref: te,
              className: l,
              css: [s, fe ? null : eE],
              "data-has-overlay": me ? !0 : void 0,
              "data-testid": U,
              disabled: _,
              href: fe ? d : void 0,
              onBlur: w,
              onClick: Oe,
              onFocus: R,
              onMouseDown: N,
              tabIndex: _ ? -1 : H,
              type: W,
            },
            MS({ isInteractive: fe }),
          ),
          f ? Xt("span", { css: [Be, np({ spacing: z }), ap(u, tE)] }, f) : null,
          nE(u, [Be, XS({ spacing: z })]),
          g ? Xt("span", { css: [Be, np({ spacing: z }), ap(u, rE)] }, g) : null,
          D ? Xt("span", { css: [ZS, Ce] }, D) : null,
        ),
      )
    );
  });
function oE(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return eu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var iE = [
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
  op = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  tu = O.memo(
    O.forwardRef(function (t, r) {
      var n = t.appearance,
        a = n === void 0 ? "default" : n,
        o = t.children,
        i = t.iconBefore,
        c = t.iconAfter,
        s = t.isSelected,
        u = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? Le : l,
        v = t.onMouseUp,
        p = v === void 0 ? Le : v,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        b = h === void 0 ? "default" : h,
        _ = ie(t, iE),
        y = TO(),
        k = y.mode,
        w = oE({ children: o, iconBefore: i, iconAfter: c }),
        S = m.useState(!1),
        x = K(S, 2),
        R = x[0],
        I = x[1],
        P = m.useCallback(
          function (z) {
            (d(z), op && I(!0));
          },
          [d, I],
        ),
        D = m.useCallback(
          function (z) {
            (p(z), op && I(!1));
          },
          [p, I],
        ),
        L = m.useMemo(
          function () {
            return JS({
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
        aE,
        ee({}, _, {
          ref: r,
          appearance: a,
          buttonCss: L,
          children: o,
          "data-firefox-is-active": R ? !0 : void 0,
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
tu.displayName = "Button";
function ip(e) {
  return O.createElement(tu, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function sE(e) {
  return O.createElement(tu, ee({}, e, { appearance: "subtle" }));
}
var cE = { container: "_1e0c1txw _kqswh2mm" };
function uE(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    a = e.to;
  return O.createElement(
    Ri,
    { as: "li", testId: r, key: t, xcss: cE.container, paddingInline: "space.100" },
    O.createElement(
      Zh,
      { testId: r && "".concat(r, "-text") },
      O.createElement(ji, null, "Skipped pages from ", n, " to ", a),
      "…",
    ),
  );
}
var sp = {},
  cp =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function lE(e, t) {
  return !!(e === t || (cp(e) && cp(t)));
}
function dE(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!lE(e[r], t[r])) return !1;
  return !0;
}
function fE(e, t) {
  t === void 0 && (t = dE);
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
var pE = function (t, r, n, a) {
  var o = n.max,
    i = n.ellipsis,
    c = n.transform,
    s = t.length,
    u = s > o,
    l = u && o - 4 < r,
    d = u && r < s - o + 3,
    v = fE(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(h, b).map(function (_, y) {
        return c(_, h + y, a);
      });
    });
  if (!u) return v(0, s);
  if (l && !d) {
    var p = o - 2;
    return [].concat(
      Fe(v(0, 1)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: 2, to: s - p })],
      Fe(v(s - p)),
    );
  }
  if (!l && d) {
    var g = o - 2;
    return [].concat(
      Fe(v(0, g)),
      [i({ key: "ellipsis-1", testId: a && "".concat(a, "-ellipsis"), from: g + 1, to: s - 1 })],
      Fe(v(s - 1)),
    );
  }
  var f = o - 4;
  return [].concat(
    Fe(v(0, 1)),
    [
      i({
        key: "ellipsis-1",
        testId: a && "".concat(a, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Fe(v(r - Math.floor(f / 2), r + f - 1)),
    [i({ key: "ellipsis-2", testId: a && "".concat(a, "-ellipsis"), from: r + 3, to: s - 1 })],
    Fe(v(s - 1)),
  );
};
function up(e, t) {
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
function vE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? up(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : up(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Cc = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  hE = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.2.0",
  };
function lp(e) {
  var t = e.chevronDirection,
    r = t === "left" ? $w : Hw;
  return O.createElement(
    Ri,
    { as: "span", xcss: Cc.navigatorIconWrapper },
    O.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function gE(e, t) {
  var r = e.components,
    n = r === void 0 ? sp : r,
    a = e.defaultSelectedIndex,
    o = a === void 0 ? 0 : a,
    i = e.selectedIndex,
    c = e.label,
    s = c === void 0 ? "pagination" : c,
    u = e.pageLabel,
    l = u === void 0 ? "page" : u,
    d = e.previousLabel,
    v = d === void 0 ? "previous" : d,
    p = e.nextLabel,
    g = p === void 0 ? "next" : p,
    f = e.style,
    h = f === void 0 ? sp : f,
    b = e.max,
    _ = b === void 0 ? 7 : b,
    y = e.onChange,
    k = y === void 0 ? Le : y,
    w = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    R = x === void 0 ? uE : x,
    I = e.analyticsContext,
    P = e.testId,
    D = e.isDisabled,
    L = Nw(i, function () {
      return o || 0;
    }),
    z = K(L, 2),
    F = z[0],
    H = z[1],
    V = cn(
      vE(
        {
          fn: function (q, G) {
            var te = q.event,
              ce = q.selectedPageIndex;
            (i === void 0 && H(ce), k && k(te, w[ce], G));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        hE,
      ),
    ),
    W = function (q, G, te) {
      var ce = w[F],
        le = "".concat(l, " ").concat(S ? S(q, G) : q),
        Oe = q === ce;
      return O.createElement(
        Mo,
        { as: "li", xcss: Cc.paginationMenuItem, key: "page-".concat(S ? S(q, G) : G) },
        O.createElement(
          sE,
          {
            component: n.Page,
            onClick: function (me) {
              return V({ event: me, selectedPageIndex: G });
            },
            "aria-current": Oe ? "page" : void 0,
            "aria-label": le,
            isSelected: Oe,
            isDisabled: D,
            page: q,
            testId:
              te &&
              ""
                .concat(te, "--")
                .concat(Oe ? "current-" : "", "page-")
                .concat(G),
          },
          S ? S(q, G) : q,
        ),
      );
    };
  return O.createElement(
    Ri,
    { testId: P, style: h, ref: t, "aria-label": s, as: "nav" },
    O.createElement(
      Mo,
      { space: "space.0", alignBlock: "center" },
      O.createElement(ip, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (q) {
          return V({ event: q, selectedPageIndex: F - 1 });
        },
        isDisabled: D || F === 0,
        iconBefore: O.createElement(lp, { chevronDirection: "left" }),
        "aria-label": v,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      O.createElement(
        Mo,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Cc.paginationMenu },
        pE(w, F, { max: _, ellipsis: R, transform: W }, P),
      ),
      O.createElement(ip, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (q) {
          return V({ event: q, selectedPageIndex: F + 1 });
        },
        isDisabled: D || F === w.length - 1,
        iconBefore: O.createElement(lp, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var bE = m.memo(m.forwardRef(gE));
function _E(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, Jg() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Jg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Jg = function () {
    return !!e;
  })();
}
var mE = (function (e) {
    function t() {
      var r;
      be(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return (
        (r = _E(this, t, [].concat(a))),
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
              l = Fe(Array(a)).map(function (v, p) {
                return p + 1;
              }),
              d = i - 1;
            return O.createElement(bE, {
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
  yE = ["isRanking", "testId"],
  wE = [
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
function dp(e, t) {
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
      ? dp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fp = "--local-dynamic-table-text-color",
  kE = function (t) {
    var r = t.isRanking,
      n = t.testId,
      a = ie(t, yE);
    return m.createElement(
      "thead",
      ee({ "data-testid": n }, a, { className: A(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  OE = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var a = e.sortOrder,
      o = e.isFixedSize,
      i = e.shouldTruncate;
    e.onClick;
    var c = e.style,
      s = e.testId,
      u = ie(e, wE),
      l = Ca(
        Ca(Ca({}, c), r && qh({ width: r })),
        {},
        C({}, fp, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = a === Pr,
      v = a === ti,
      p = function () {
        if (d) return "ascending";
        if (v) return "descending";
      },
      g = n ? "th" : "td";
    return m.createElement(
      g,
      ee({ "aria-sort": p(), onClick: void 0, ref: t, "data-testid": s }, u, {
        className: A([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          o && i && "_1bto1l2s _o5721q9c",
          o && "_1reo15vq _18m915vq",
        ]),
        style: Ca(
          Ca({}, l),
          {},
          { "--_17ckjys": ar("var(--ds-text-subtle, ".concat("var(".concat(fp, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function SE(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, Xg() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function Xg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Xg = function () {
    return !!e;
  })();
}
function EE(e) {
  return (function (t) {
    function r() {
      var n;
      be(this, r);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      return (
        (n = SE(this, r, [].concat(o))),
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
              ee({ refWidth: o, refHeight: i, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(O.Component);
}
var Pa = {},
  pp;
function xE() {
  if (pp) return Pa;
  ((pp = 1), Object.defineProperty(Pa, "__esModule", { value: !0 }), (Pa.default = void 0));
  var e = r(Ar()),
    t = r(Pi);
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
  return ((n.displayName = "ArrowDownIcon"), (Pa.default = n), Pa);
}
var CE = xE();
const PE = ur(CE);
var Ra = {},
  vp;
function RE() {
  if (vp) return Ra;
  ((vp = 1), Object.defineProperty(Ra, "__esModule", { value: !0 }), (Ra.default = void 0));
  var e = r(Ar()),
    t = r(Pi);
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
  return ((n.displayName = "ArrowUpIcon"), (Ra.default = n), Ra);
}
var AE = RE();
const IE = ur(AE);
var jE = "Escape";
function DE(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    a = m.useCallback(
      function (i) {
        r || n.current || i.key !== jE || ((n.current = !0), t(i));
      },
      [t, r],
    ),
    o = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return Mr.bindAll(
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
var TE = m.createContext(null),
  ME = m.createContext(null);
function NE() {
  var e = m.useContext(ME);
  return e;
}
function FE(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    a = m.useContext(TE),
    o = NE();
  m.useEffect(
    function () {
      if (a !== null && t) return a.onClose(n, { namespace: o, type: r });
    },
    [a, t, o, n, r],
  );
}
var Ta = { none: 0, small: 100, medium: 350, large: 700 },
  Hs = 0.5,
  LE = { none: Ta.none, small: Ta.small * Hs, medium: Ta.medium * Hs, large: Ta.large * Hs },
  BE = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  UE = function () {
    if (!BE()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  qE = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  zE = function () {
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
      }, qE(t)),
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
  Yg = { appear: !0, isExiting: !1 },
  Zg = m.createContext(Yg),
  hp = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yg;
    return O.createElement(Zg.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  gp = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  $E = function (t, r) {
    for (var n = r.concat([]), a = VE(r), o = 0; o < t.length; o++) {
      var i = t[o],
        c = !a[i.key];
      c && n.splice(o + 1, 0, i);
    }
    return n;
  },
  VE = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  GE = function (t, r) {
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
  Qg = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      a = e.exitThenEnter,
      o = m.useState([null, n]),
      i = K(o, 2),
      c = i[0],
      s = i[1],
      u = m.useState([]),
      l = K(u, 2),
      d = l[0],
      v = l[1],
      p = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = K(p, 2),
      f = g[0],
      h = g[1];
    if (
      (m.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof c == "boolean")
    )
      return n;
    var b = K(c, 2),
      _ = b[0],
      y = b[1],
      k = gp(_),
      w = gp(y);
    y !== n && s([y, n]);
    var S = GE(w, k),
      x = !!S.size,
      R = w;
    if ((x && (R = $E(w, k)), a))
      if (d.length) R = d;
      else {
        var I = R.filter(function (P) {
          return S.has(P.key);
        });
        I.length && v(I);
      }
    return (
      S.size
        ? (R = R.map(function (P) {
            var D = S.has(P.key);
            return hp(P, {
              appear: !0,
              isExiting: D,
              onFinish: D
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), v([])));
                  }
                : void 0,
            });
          }))
        : (R = R.map(function (P) {
            return hp(P, f);
          })),
      R
    );
  }),
  HE = function () {
    return m.useContext(Zg);
  };
Qg.displayName = "ExitingPersistence";
function KE() {
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
var WE = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: Le };
  }),
  JE = function () {
    var t = KE(),
      r = m.useContext(WE);
    return r(t);
  },
  XE = function (t) {
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
      v = d === void 0 ? "large" : d,
      p = JE(),
      g = HE(),
      f = g.isExiting,
      h = g.onFinish,
      b = g.appear,
      _ = zE(),
      y = u || !p.isReady,
      k = f ? 0 : p.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(b),
      x = K(S, 2),
      R = x[0],
      I = x[1];
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
              (w === "exiting" && h?.(), P || I(!1), l?.(w));
            };
            if (UE()) {
              D();
              return;
            }
            return (
              I(!0),
              _(D, f ? LE[v] : Ta[v] + k),
              function () {
                P = !0;
              }
            );
          }
        },
        [h, w, f, v, k, y, _],
      ),
      r(
        {
          ref: p.ref,
          className: R
            ? A([
                A(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && A(["_1y0ctrqk"]),
                v === "small" && A(["_5sag1yx9"]),
                v === "medium" && A(["_5sag1ttt"]),
                v === "large" && A(["_5sagpwmj"]),
                f && v === "small" && A(["_5sag14ed"]),
                f && v === "medium" && A(["_5sagluct"]),
                f && v === "large" && A(["_5sag1ttt"]),
                f && A(["_ju255cps _1o51q7pw"]),
                !f && n === "linear" && A(["_1pglp3kn"]),
                !f && n === "ease-out" && A(["_1pgldkwg"]),
                !f && n === "ease-in" && A(["_1pgl1nzg"]),
                !f && n === "ease-in-40-out" && A(["_1pgl5y64"]),
                !f && n === "ease-in-60-out" && A(["_1pgl1ddy"]),
                !f && n === "ease-in-80-out" && A(["_1pglannl"]),
                !f && n === "ease-in-out" && A(["_1pgl1fu8"]),
                f && n === "linear" && A(["_1pglp3kn"]),
                f && o === "ease-out" && A(["_1pgldkwg"]),
                f && o === "ease-in" && A(["_1pgl1nzg"]),
                f && o === "ease-in-40-out" && A(["_1pgl5y64"]),
                f && o === "ease-in-60-out" && A(["_1pgl1ddy"]),
                f && o === "ease-in-80-out" && A(["_1pglannl"]),
                f && o === "ease-in-out" && A(["_1pgl1fu8"]),
                ((!f && i === "fade-in") || (f && s === "fade-in")) && A(["_j7hq1cgr"]),
                ((!f && i === "fade-out") || (f && s === "fade-out")) && A(["_j7hq1lln"]),
                ((!f && i === "zoom-in") || (f && s === "zoom-in")) && A(["_j7hqe8p0"]),
                ((!f && i === "zoom-out") || (f && s === "zoom-out")) && A(["_j7hqy6ql"]),
                ((!f && i === "slide-in-from-top") || (f && s === "slide-in-from-top")) &&
                  A(["_j7hqqshu"]),
                ((!f && i === "slide-out-from-top") || (f && s === "slide-out-from-top")) &&
                  A(["_j7hq7ri4"]),
                ((!f && i === "slide-in-from-right") || (f && s === "slide-in-from-right")) &&
                  A(["_j7hqdfjr"]),
                ((!f && i === "slide-out-from-right") || (f && s === "slide-out-from-right")) &&
                  A(["_j7hqonfj"]),
                ((!f && i === "slide-in-from-bottom") || (f && s === "slide-in-from-bottom")) &&
                  A(["_j7hq1liq"]),
                ((!f && i === "slide-out-from-bottom") || (f && s === "slide-out-from-bottom")) &&
                  A(["_j7hqhnf1"]),
                ((!f && i === "slide-in-from-left") || (f && s === "slide-in-from-left")) &&
                  A(["_j7hq1bh1"]),
                ((!f && i === "slide-out-from-left") || (f && s === "slide-out-from-left")) &&
                  A(["_j7hqj08w"]),
                ((!f && i === "fade-in-from-top") || (f && s === "fade-in-from-top")) &&
                  A(["_j7hq2iua"]),
                ((!f && i === "fade-out-from-top") || (f && s === "fade-out-from-top")) &&
                  A(["_j7hq39va"]),
                ((!f && i === "fade-in-from-left") || (f && s === "fade-in-from-left")) &&
                  A(["_j7hq15m2"]),
                ((!f && i === "fade-out-from-left") || (f && s === "fade-out-from-left")) &&
                  A(["_j7hq1yiv"]),
                ((!f && i === "fade-in-from-bottom") || (f && s === "fade-in-from-bottom")) &&
                  A(["_j7hq1w00"]),
                ((!f && i === "fade-out-from-bottom") || (f && s === "fade-out-from-bottom")) &&
                  A(["_j7hqzy3z"]),
                ((!f && i === "fade-in-from-right") || (f && s === "fade-in-from-right")) &&
                  A(["_j7hqpqak"]),
                ((!f && i === "fade-out-from-right") || (f && s === "fade-out-from-right")) &&
                  A(["_j7hq1ebg"]),
                ((!f && i === "fade-in-from-top-constant") ||
                  (f && s === "fade-in-from-top-constant")) &&
                  A(["_j7hqm2e2"]),
                ((!f && i === "fade-out-from-top-constant") ||
                  (f && s === "fade-out-from-top-constant")) &&
                  A(["_j7hq97jn"]),
                ((!f && i === "fade-in-from-left-constant") ||
                  (f && s === "fade-in-from-left-constant")) &&
                  A(["_j7hqovgq"]),
                ((!f && i === "fade-out-from-left-constant") ||
                  (f && s === "fade-out-from-left-constant")) &&
                  A(["_j7hq15do"]),
                ((!f && i === "fade-in-from-bottom-constant") ||
                  (f && s === "fade-in-from-bottom-constant")) &&
                  A(["_j7hq797a"]),
                ((!f && i === "fade-out-from-bottom-constant") ||
                  (f && s === "fade-out-from-bottom-constant")) &&
                  A(["_j7hqwo7r"]),
                ((!f && i === "fade-in-from-right-constant") ||
                  (f && s === "fade-in-from-right-constant")) &&
                  A(["_j7hqt8u5"]),
                ((!f && i === "fade-out-from-right-constant") ||
                  (f && s === "fade-out-from-right-constant")) &&
                  A(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(k, "ms") },
        },
        w,
      )
    );
  },
  YE = { top: "bottom", bottom: "top", left: "right", right: "left" },
  ZE = function (t) {
    var r = t.children,
      n = t.duration,
      a = n === void 0 ? "large" : n,
      o = t.entranceDirection,
      i = t.exitDirection,
      c = t.distance,
      s = c === void 0 ? "proportional" : c,
      u = t.onFinish,
      l = t.isPaused,
      d = o !== void 0 ? YE[o] : void 0,
      v =
        i || d
          ? "fade-out-from-".concat(i || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return O.createElement(
      XE,
      {
        duration: a,
        enteringAnimation: o
          ? "fade-in-from-".concat(o).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: v,
        animationTimingFunction: "ease-in-out",
        onFinish: u,
        isPaused: l,
      },
      r,
    );
  },
  QE = m.createContext();
m.createContext();
var ex = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  tx = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      return t.apply(void 0, n);
    }
  },
  rx = function (t, r) {
    if (typeof t == "function") return tx(t, r);
    t != null && (t.current = r);
  },
  bp = function (t) {
    return t.reduce(function (r, n) {
      var a = n[0],
        o = n[1];
      return ((r[a] = o), r);
    }, {});
  },
  _p =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  $e = "top",
  ft = "bottom",
  pt = "right",
  Ve = "left",
  ru = "auto",
  fo = [$e, ft, pt, Ve],
  ln = "start",
  to = "end",
  nx = "clippingParents",
  eb = "viewport",
  Aa = "popper",
  ax = "reference",
  mp = fo.reduce(function (e, t) {
    return e.concat([t + "-" + ln, t + "-" + to]);
  }, []),
  tb = [].concat(fo, [ru]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ln, t + "-" + to]);
  }, []),
  ox = "beforeRead",
  ix = "read",
  sx = "afterRead",
  cx = "beforeMain",
  ux = "main",
  lx = "afterMain",
  dx = "beforeWrite",
  fx = "write",
  px = "afterWrite",
  vx = [ox, ix, sx, cx, ux, lx, dx, fx, px];
function Nt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ye(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Rr(e) {
  var t = Ye(e).Element;
  return e instanceof t || e instanceof Element;
}
function dt(e) {
  var t = Ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function nu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function hx(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      o = t.elements[r];
    !dt(o) ||
      !Nt(o) ||
      (Object.assign(o.style, n),
      Object.keys(a).forEach(function (i) {
        var c = a[i];
        c === !1 ? o.removeAttribute(i) : o.setAttribute(i, c === !0 ? "" : c);
      }));
  });
}
function gx(e) {
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
        !dt(a) ||
          !Nt(a) ||
          (Object.assign(a.style, c),
          Object.keys(o).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const bx = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: hx,
  effect: gx,
  requires: ["computeStyles"],
};
function Dt(e) {
  return e.split("-")[0];
}
var Or = Math.max,
  ii = Math.min,
  dn = Math.round;
function Pc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function rb() {
  return !/^((?!chrome|android).)*safari/i.test(Pc());
}
function fn(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    a = 1,
    o = 1;
  t &&
    dt(e) &&
    ((a = (e.offsetWidth > 0 && dn(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && dn(n.height) / e.offsetHeight) || 1));
  var i = Rr(e) ? Ye(e) : window,
    c = i.visualViewport,
    s = !rb() && r,
    u = (n.left + (s && c ? c.offsetLeft : 0)) / a,
    l = (n.top + (s && c ? c.offsetTop : 0)) / o,
    d = n.width / a,
    v = n.height / o;
  return { width: d, height: v, top: l, right: u + d, bottom: l + v, left: u, x: u, y: l };
}
function au(e) {
  var t = fn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function nb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && nu(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Qt(e) {
  return Ye(e).getComputedStyle(e);
}
function _x(e) {
  return ["table", "td", "th"].indexOf(Nt(e)) >= 0;
}
function dr(e) {
  return ((Rr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ni(e) {
  return Nt(e) === "html" ? e : e.assignedSlot || e.parentNode || (nu(e) ? e.host : null) || dr(e);
}
function yp(e) {
  return !dt(e) || Qt(e).position === "fixed" ? null : e.offsetParent;
}
function mx(e) {
  var t = /firefox/i.test(Pc()),
    r = /Trident/i.test(Pc());
  if (r && dt(e)) {
    var n = Qt(e);
    if (n.position === "fixed") return null;
  }
  var a = Ni(e);
  for (nu(a) && (a = a.host); dt(a) && ["html", "body"].indexOf(Nt(a)) < 0; ) {
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
function po(e) {
  for (var t = Ye(e), r = yp(e); r && _x(r) && Qt(r).position === "static"; ) r = yp(r);
  return r && (Nt(r) === "html" || (Nt(r) === "body" && Qt(r).position === "static"))
    ? t
    : r || mx(e) || t;
}
function ou(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qa(e, t, r) {
  return Or(e, ii(t, r));
}
function yx(e, t, r) {
  var n = qa(e, t, r);
  return n > r ? r : n;
}
function ab() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ob(e) {
  return Object.assign({}, ab(), e);
}
function ib(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var wx = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    ob(typeof t != "number" ? t : ib(t, fo))
  );
};
function kx(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    o = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    c = Dt(r.placement),
    s = ou(c),
    u = [Ve, pt].indexOf(c) >= 0,
    l = u ? "height" : "width";
  if (!(!o || !i)) {
    var d = wx(a.padding, r),
      v = au(o),
      p = s === "y" ? $e : Ve,
      g = s === "y" ? ft : pt,
      f = r.rects.reference[l] + r.rects.reference[s] - i[s] - r.rects.popper[l],
      h = i[s] - r.rects.reference[s],
      b = po(o),
      _ = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - h / 2,
      k = d[p],
      w = _ - v[l] - d[g],
      S = _ / 2 - v[l] / 2 + y,
      x = qa(k, S, w),
      R = s;
    r.modifiersData[n] = ((t = {}), (t[R] = x), (t.centerOffset = x - S), t);
  }
}
function Ox(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (nb(t.elements.popper, a) && (t.elements.arrow = a)));
}
const Sx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kx,
  effect: Ox,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function pn(e) {
  return e.split("-")[1];
}
var Ex = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function xx(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: dn(r * a) / a || 0, y: dn(n * a) / a || 0 };
}
function wp(e) {
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
    v = i.x,
    p = v === void 0 ? 0 : v,
    g = i.y,
    f = g === void 0 ? 0 : g,
    h = typeof l == "function" ? l({ x: p, y: f }) : { x: p, y: f };
  ((p = h.x), (f = h.y));
  var b = i.hasOwnProperty("x"),
    _ = i.hasOwnProperty("y"),
    y = Ve,
    k = $e,
    w = window;
  if (u) {
    var S = po(r),
      x = "clientHeight",
      R = "clientWidth";
    if (
      (S === Ye(r) &&
        ((S = dr(r)),
        Qt(S).position !== "static" &&
          c === "absolute" &&
          ((x = "scrollHeight"), (R = "scrollWidth"))),
      (S = S),
      a === $e || ((a === Ve || a === pt) && o === to))
    ) {
      k = ft;
      var I = d && S === w && w.visualViewport ? w.visualViewport.height : S[x];
      ((f -= I - n.height), (f *= s ? 1 : -1));
    }
    if (a === Ve || ((a === $e || a === ft) && o === to)) {
      y = pt;
      var P = d && S === w && w.visualViewport ? w.visualViewport.width : S[R];
      ((p -= P - n.width), (p *= s ? 1 : -1));
    }
  }
  var D = Object.assign({ position: c }, u && Ex),
    L = l === !0 ? xx({ x: p, y: f }, Ye(r)) : { x: p, y: f };
  if (((p = L.x), (f = L.y), s)) {
    var z;
    return Object.assign(
      {},
      D,
      ((z = {}),
      (z[k] = _ ? "0" : ""),
      (z[y] = b ? "0" : ""),
      (z.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + f + "px)"
          : "translate3d(" + p + "px, " + f + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}), (t[k] = _ ? f + "px" : ""), (t[y] = b ? p + "px" : ""), (t.transform = ""), t),
  );
}
function Cx(e) {
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
      wp(
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
        wp(
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
const Px = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Cx, data: {} };
var Co = { passive: !0 };
function Rx(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    o = a === void 0 ? !0 : a,
    i = n.resize,
    c = i === void 0 ? !0 : i,
    s = Ye(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (l) {
        l.addEventListener("scroll", r.update, Co);
      }),
    c && s.addEventListener("resize", r.update, Co),
    function () {
      (o &&
        u.forEach(function (l) {
          l.removeEventListener("scroll", r.update, Co);
        }),
        c && s.removeEventListener("resize", r.update, Co));
    }
  );
}
const Ax = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Rx,
  data: {},
};
var Ix = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Uo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Ix[t];
  });
}
var jx = { start: "end", end: "start" };
function kp(e) {
  return e.replace(/start|end/g, function (t) {
    return jx[t];
  });
}
function iu(e) {
  var t = Ye(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function su(e) {
  return fn(dr(e)).left + iu(e).scrollLeft;
}
function Dx(e, t) {
  var r = Ye(e),
    n = dr(e),
    a = r.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    c = 0,
    s = 0;
  if (a) {
    ((o = a.width), (i = a.height));
    var u = rb();
    (u || (!u && t === "fixed")) && ((c = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: o, height: i, x: c + su(e), y: s };
}
function Tx(e) {
  var t,
    r = dr(e),
    n = iu(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Or(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    i = Or(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    c = -n.scrollLeft + su(e),
    s = -n.scrollTop;
  return (
    Qt(a || r).direction === "rtl" && (c += Or(r.clientWidth, a ? a.clientWidth : 0) - o),
    { width: o, height: i, x: c, y: s }
  );
}
function cu(e) {
  var t = Qt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function sb(e) {
  return ["html", "body", "#document"].indexOf(Nt(e)) >= 0
    ? e.ownerDocument.body
    : dt(e) && cu(e)
      ? e
      : sb(Ni(e));
}
function za(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = sb(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Ye(n),
    i = a ? [o].concat(o.visualViewport || [], cu(n) ? n : []) : n,
    c = t.concat(i);
  return a ? c : c.concat(za(Ni(i)));
}
function Rc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Mx(e, t) {
  var r = fn(e, !1, t === "fixed");
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
function Op(e, t, r) {
  return t === eb ? Rc(Dx(e, r)) : Rr(t) ? Mx(t, r) : Rc(Tx(dr(e)));
}
function Nx(e) {
  var t = za(Ni(e)),
    r = ["absolute", "fixed"].indexOf(Qt(e).position) >= 0,
    n = r && dt(e) ? po(e) : e;
  return Rr(n)
    ? t.filter(function (a) {
        return Rr(a) && nb(a, n) && Nt(a) !== "body";
      })
    : [];
}
function Fx(e, t, r, n) {
  var a = t === "clippingParents" ? Nx(e) : [].concat(t),
    o = [].concat(a, [r]),
    i = o[0],
    c = o.reduce(
      function (s, u) {
        var l = Op(e, u, n);
        return (
          (s.top = Or(l.top, s.top)),
          (s.right = ii(l.right, s.right)),
          (s.bottom = ii(l.bottom, s.bottom)),
          (s.left = Or(l.left, s.left)),
          s
        );
      },
      Op(e, i, n),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function cb(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Dt(n) : null,
    o = n ? pn(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case $e:
      s = { x: i, y: t.y - r.height };
      break;
    case ft:
      s = { x: i, y: t.y + t.height };
      break;
    case pt:
      s = { x: t.x + t.width, y: c };
      break;
    case Ve:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = a ? ou(a) : null;
  if (u != null) {
    var l = u === "y" ? "height" : "width";
    switch (o) {
      case ln:
        s[u] = s[u] - (t[l] / 2 - r[l] / 2);
        break;
      case to:
        s[u] = s[u] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function ro(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    o = r.strategy,
    i = o === void 0 ? e.strategy : o,
    c = r.boundary,
    s = c === void 0 ? nx : c,
    u = r.rootBoundary,
    l = u === void 0 ? eb : u,
    d = r.elementContext,
    v = d === void 0 ? Aa : d,
    p = r.altBoundary,
    g = p === void 0 ? !1 : p,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    b = ob(typeof h != "number" ? h : ib(h, fo)),
    _ = v === Aa ? ax : Aa,
    y = e.rects.popper,
    k = e.elements[g ? _ : v],
    w = Fx(Rr(k) ? k : k.contextElement || dr(e.elements.popper), s, l, i),
    S = fn(e.elements.reference),
    x = cb({ reference: S, element: y, placement: a }),
    R = Rc(Object.assign({}, y, x)),
    I = v === Aa ? R : S,
    P = {
      top: w.top - I.top + b.top,
      bottom: I.bottom - w.bottom + b.bottom,
      left: w.left - I.left + b.left,
      right: I.right - w.right + b.right,
    },
    D = e.modifiersData.offset;
  if (v === Aa && D) {
    var L = D[a];
    Object.keys(P).forEach(function (z) {
      var F = [pt, ft].indexOf(z) >= 0 ? 1 : -1,
        H = [$e, ft].indexOf(z) >= 0 ? "y" : "x";
      P[z] += L[H] * F;
    });
  }
  return P;
}
function Lx(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    o = r.rootBoundary,
    i = r.padding,
    c = r.flipVariations,
    s = r.allowedAutoPlacements,
    u = s === void 0 ? tb : s,
    l = pn(n),
    d = l
      ? c
        ? mp
        : mp.filter(function (g) {
            return pn(g) === l;
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
function Bx(e) {
  if (Dt(e) === ru) return [];
  var t = Uo(e);
  return [kp(e), t, kp(t)];
}
function Ux(e) {
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
        v = r.altBoundary,
        p = r.flipVariations,
        g = p === void 0 ? !0 : p,
        f = r.allowedAutoPlacements,
        h = t.options.placement,
        b = Dt(h),
        _ = b === h,
        y = s || (_ || !g ? [Uo(h)] : Bx(h)),
        k = [h].concat(y).reduce(function (Oe, N) {
          return Oe.concat(
            Dt(N) === ru
              ? Lx(t, {
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
        x = new Map(),
        R = !0,
        I = k[0],
        P = 0;
      P < k.length;
      P++
    ) {
      var D = k[P],
        L = Dt(D),
        z = pn(D) === ln,
        F = [$e, ft].indexOf(L) >= 0,
        H = F ? "width" : "height",
        V = ro(t, { placement: D, boundary: l, rootBoundary: d, altBoundary: v, padding: u }),
        W = F ? (z ? pt : Ve) : z ? ft : $e;
      w[H] > S[H] && (W = Uo(W));
      var U = Uo(W),
        q = [];
      if (
        (o && q.push(V[L] <= 0),
        c && q.push(V[W] <= 0, V[U] <= 0),
        q.every(function (Oe) {
          return Oe;
        }))
      ) {
        ((I = D), (R = !1));
        break;
      }
      x.set(D, q);
    }
    if (R)
      for (
        var G = g ? 3 : 1,
          te = function (N) {
            var me = k.find(function (Be) {
              var fe = x.get(Be);
              if (fe)
                return fe.slice(0, N).every(function (Ce) {
                  return Ce;
                });
            });
            if (me) return ((I = me), "break");
          },
          ce = G;
        ce > 0;
        ce--
      ) {
        var le = te(ce);
        if (le === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const qx = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ux,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Sp(e, t, r) {
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
function Ep(e) {
  return [$e, pt, ft, Ve].some(function (t) {
    return e[t] >= 0;
  });
}
function zx(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    i = ro(t, { elementContext: "reference" }),
    c = ro(t, { altBoundary: !0 }),
    s = Sp(i, n),
    u = Sp(c, a, o),
    l = Ep(s),
    d = Ep(u);
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
const $x = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: zx,
};
function Vx(e, t, r) {
  var n = Dt(e),
    a = [Ve, $e].indexOf(n) >= 0 ? -1 : 1,
    o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = o[0],
    c = o[1];
  return (
    (i = i || 0),
    (c = (c || 0) * a),
    [Ve, pt].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c }
  );
}
function Gx(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    o = a === void 0 ? [0, 0] : a,
    i = tb.reduce(function (l, d) {
      return ((l[d] = Vx(d, t.rects, o)), l);
    }, {}),
    c = i[t.placement],
    s = c.x,
    u = c.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = i));
}
const Hx = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Gx };
function Kx(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = cb({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const Wx = { name: "popperOffsets", enabled: !0, phase: "read", fn: Kx, data: {} };
function Jx(e) {
  return e === "x" ? "y" : "x";
}
function Xx(e) {
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
    v = r.tether,
    p = v === void 0 ? !0 : v,
    g = r.tetherOffset,
    f = g === void 0 ? 0 : g,
    h = ro(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: l }),
    b = Dt(t.placement),
    _ = pn(t.placement),
    y = !_,
    k = ou(b),
    w = Jx(k),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    R = t.rects.popper,
    I = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    L = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var z,
        F = k === "y" ? $e : Ve,
        H = k === "y" ? ft : pt,
        V = k === "y" ? "height" : "width",
        W = S[k],
        U = W + h[F],
        q = W - h[H],
        G = p ? -R[V] / 2 : 0,
        te = _ === ln ? x[V] : R[V],
        ce = _ === ln ? -R[V] : -x[V],
        le = t.elements.arrow,
        Oe = p && le ? au(le) : { width: 0, height: 0 },
        N = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ab(),
        me = N[F],
        Be = N[H],
        fe = qa(0, x[V], Oe[V]),
        Ce = y ? x[V] / 2 - G - fe - me - P.mainAxis : te - fe - me - P.mainAxis,
        pe = y ? -x[V] / 2 + G + fe + Be + P.mainAxis : ce + fe + Be + P.mainAxis,
        Ue = t.elements.arrow && po(t.elements.arrow),
        fr = Ue ? (k === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0) : 0,
        er = (z = D?.[k]) != null ? z : 0,
        tt = W + Ce - er - fr,
        De = W + pe - er,
        rt = qa(p ? ii(U, tt) : U, W, p ? Or(q, De) : q);
      ((S[k] = rt), (L[k] = rt - W));
    }
    if (c) {
      var kt,
        He = k === "x" ? $e : Ve,
        Te = k === "x" ? ft : pt,
        Me = S[w],
        re = w === "y" ? "height" : "width",
        Se = Me + h[He],
        Ee = Me - h[Te],
        nt = [$e, Ve].indexOf(b) !== -1,
        Lt = (kt = D?.[w]) != null ? kt : 0,
        ge = nt ? Se : Me - x[re] - R[re] - Lt + P.altAxis,
        Bt = nt ? Me + x[re] + R[re] - Lt - P.altAxis : Ee,
        Ke = p && nt ? yx(ge, Me, Bt) : qa(p ? ge : Se, Me, p ? Bt : Ee);
      ((S[w] = Ke), (L[w] = Ke - Me));
    }
    t.modifiersData[n] = L;
  }
}
const Yx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Xx,
  requiresIfExists: ["offset"],
};
function Zx(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Qx(e) {
  return e === Ye(e) || !dt(e) ? iu(e) : Zx(e);
}
function eC(e) {
  var t = e.getBoundingClientRect(),
    r = dn(t.width) / e.offsetWidth || 1,
    n = dn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function tC(e, t, r) {
  r === void 0 && (r = !1);
  var n = dt(t),
    a = dt(t) && eC(t),
    o = dr(t),
    i = fn(e, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Nt(t) !== "body" || cu(o)) && (c = Qx(t)),
      dt(t) ? ((s = fn(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : o && (s.x = su(o))),
    {
      x: i.left + c.scrollLeft - s.x,
      y: i.top + c.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function rC(e) {
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
function nC(e) {
  var t = rC(e);
  return vx.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function aC(e) {
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
function oC(e) {
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
var xp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Cp() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function iC(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    o = a === void 0 ? xp : a;
  return function (c, s, u) {
    u === void 0 && (u = o);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, xp, o),
        modifiersData: {},
        elements: { reference: c, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      v = !1,
      p = {
        state: l,
        setOptions: function (b) {
          var _ = typeof b == "function" ? b(l.options) : b;
          (f(),
            (l.options = Object.assign({}, o, l.options, _)),
            (l.scrollParents = {
              reference: Rr(c) ? za(c) : c.contextElement ? za(c.contextElement) : [],
              popper: za(s),
            }));
          var y = nC(oC([].concat(n, l.options.modifiers)));
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
              _ = b.reference,
              y = b.popper;
            if (Cp(_, y)) {
              ((l.rects = {
                reference: tC(_, po(y), l.options.strategy === "fixed"),
                popper: au(y),
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
                  R = x === void 0 ? {} : x,
                  I = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: R, name: I, instance: p }) || l);
              }
            }
          }
        },
        update: aC(function () {
          return new Promise(function (h) {
            (p.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (v = !0));
        },
      };
    if (!Cp(c, s)) return p;
    p.setOptions(u).then(function (h) {
      !v && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var b = h.name,
          _ = h.options,
          y = _ === void 0 ? {} : _,
          k = h.effect;
        if (typeof k == "function") {
          var w = k({ state: l, name: b, instance: p, options: y }),
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
    return p;
  };
}
var sC = [Ax, Wx, Px, bx, Hx, qx, Yx, Sx, $x],
  cC = iC({ defaultModifiers: sC }),
  Ks,
  Pp;
function uC() {
  if (Pp) return Ks;
  Pp = 1;
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
    (Ks = function (i, c) {
      try {
        return a(i, c);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    Ks
  );
}
var lC = uC();
const dC = ur(lC);
var fC = [],
  pC = function (t, r, n) {
    n === void 0 && (n = {});
    var a = m.useRef(null),
      o = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || fC,
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
          fn: function (p) {
            var g = p.state,
              f = Object.keys(g.elements);
            si.flushSync(function () {
              s({
                styles: bp(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: bp(
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
          var v = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
          };
          return dC(a.current, v) ? a.current || v : ((a.current = v), v);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
      ),
      d = m.useRef();
    return (
      _p(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      _p(
        function () {
          if (!(t == null || r == null)) {
            var v = n.createPopper || cC,
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
        styles: c.styles,
        attributes: c.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  vC = function () {},
  hC = function () {
    return Promise.resolve(null);
  },
  gC = [];
function bC(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    a = n === void 0 ? "absolute" : n,
    o = e.modifiers,
    i = o === void 0 ? gC : o,
    c = e.referenceElement,
    s = e.onFirstUpdate,
    u = e.innerRef,
    l = e.children,
    d = m.useContext(QE),
    v = m.useState(null),
    p = v[0],
    g = v[1],
    f = m.useState(null),
    h = f[0],
    b = f[1];
  m.useEffect(
    function () {
      rx(u, p);
    },
    [u, p],
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
    y = pC(c || d, p, _),
    k = y.state,
    w = y.styles,
    S = y.forceUpdate,
    x = y.update,
    R = m.useMemo(
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
          forceUpdate: S || vC,
          update: x || hC,
        };
      },
      [g, b, r, k, w, x, S],
    );
  return ex(l)(R);
}
function _C(e) {
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
            v = d === void 0 ? { x: 0, y: 0 } : d,
            p = s.placement.split("-"),
            g = K(p, 1),
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
            f === "bottom" && (_ = l.height - v.y - t),
            f === "left" && (b = s.rects.reference.x + h.x - t),
            f === "right" && (b = l.width - v.x - t),
            (s.styles.popper.maxWidth = "".concat(b, "px")),
            (s.styles.popper.maxHeight = "".concat(_, "px")));
        }
      },
    },
  ];
}
var Ac = 5,
  mC = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Ac,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function yC() {
  return null;
}
var wC = [0, 8];
function kC(e) {
  var t = e.children,
    r = t === void 0 ? yC : t,
    n = e.offset,
    a = n === void 0 ? wC : n,
    o = e.placement,
    i = o === void 0 ? "bottom-start" : o,
    c = e.referenceElement,
    s = c === void 0 ? void 0 : c,
    u = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    v = e.shouldFitViewport,
    p = v === void 0 ? !1 : v,
    g = K(a, 2),
    f = g[0],
    h = g[1],
    b = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: Ac, rootBoundary: p ? "viewport" : "document" },
          },
          k = { name: "offset", options: { offset: [f, h] } },
          w = p ? _C({ viewportPadding: Ac }) : [];
        return [].concat(mC, [y, k], Fe(w));
      },
      [f, h, p],
    ),
    _ = m.useMemo(
      function () {
        return u == null ? b : [].concat(Fe(b), Fe(u));
      },
      [b, u],
    );
  return O.createElement(bC, { modifiers: _, placement: i, strategy: d, referenceElement: s }, r);
}
var ub = "atlaskit-portal-container",
  lb = "body > .atlaskit-portal-container",
  db = "atlaskit-portal",
  OC = function (t) {
    var r = document.createElement("div");
    return ((r.className = db), (r.style.zIndex = "".concat(t)), r);
  },
  fb = function () {
    return document.body;
  },
  pb = function () {
    var t = document.querySelector(lb);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = ub),
        (n.style.display = "flex"),
        (r = fb()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  SC = function (t) {
    pb().removeChild(t);
  },
  EC = function (t) {
    t.parentElement || pb().appendChild(t);
  },
  vb = function () {
    return document !== void 0;
  },
  xC = function (t) {
    if (vb()) {
      var r = document.createElement("div");
      return ((r.className = db), (r.style.zIndex = "".concat(t)), r);
    }
  },
  CC = function () {
    if (vb()) {
      var t = document.querySelector(lb);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = ub),
          (n.style.display = "flex"),
          (r = fb()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function PC(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return OC(t);
      },
      [t],
    ),
    a = xg();
  return (
    EC(n),
    m.useEffect(
      function () {
        return function () {
          SC(n);
        };
      },
      [n],
    ),
    si.createPortal(
      a && oe("platform_dst_subtree_theming") ? O.createElement(Eg, { defaultColorMode: a }, r) : r,
      n,
    )
  );
}
var hb = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function RC(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    a = K(n, 2),
    o = a[0],
    i = a[1],
    c = xg();
  hb(
    function () {
      var u = xC(t);
      i(u);
      var l = CC();
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
    c && oe("platform_dst_subtree_theming") ? O.createElement(Eg, { defaultColorMode: c }, r) : r,
  );
  return o ? si.createPortal(s, o) : null;
}
var AC = function (t) {
    var r = m.useState(!1),
      n = K(r, 2),
      a = n[0],
      o = n[1],
      i = m.useState(function () {
        return t === "layoutEffect" ? hb : m.useEffect;
      }),
      c = K(i, 1),
      s = c[0];
    return (
      s(function () {
        o(!0);
      }, []),
      a
    );
  },
  IC = "akPortalMount",
  jC = "akPortalUnmount",
  Rp = {
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
  DC = function (t) {
    return Rp.hasOwnProperty(t) ? Rp[t] : null;
  },
  TC = function (t, r) {
    var n = { layer: DC(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function Ap(e, t) {
  var r = TC(e, t);
  window.dispatchEvent(r);
}
var MC = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        Ap(IC, r),
        function () {
          Ap(jC, r);
        }
      );
    },
    [r],
  );
};
function NC(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    a = e.mountStrategy,
    o = a === void 0 ? "effect" : a,
    i = AC(o);
  return (
    MC(r),
    oe("platform_design_system_team_portal_logic_r18_fix")
      ? O.createElement(RC, { zIndex: r }, n)
      : i
        ? O.createElement(PC, { zIndex: r }, n)
        : null
  );
}
var $a = new Set(),
  no = null;
function Ip() {
  if (!no) {
    no = Mr.bindAll(window, [
      { type: "dragend", listener: Ws },
      { type: "pointerdown", listener: Ws },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            Ws();
          };
        })(),
      },
    ]);
    var e = Array.from($a);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function Ws() {
  var e;
  ((e = no) === null || e === void 0 || e(), (no = null));
  var t = Array.from($a);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function FC() {
  return Mr.bindAll(window, [
    { type: "dragstart", listener: Ip },
    { type: "dragenter", listener: Ip },
  ]);
}
var Po = null;
function LC(e) {
  return (
    Po || (Po = FC()),
    $a.add(e),
    e.onRegister({ isDragging: no !== null }),
    function () {
      if (($a.delete(e), $a.size === 0)) {
        var r;
        ((r = Po) === null || r === void 0 || r(), (Po = null));
      }
    }
  );
}
var Va = null;
function Ma() {
  Va != null && (window.clearTimeout(Va), (Va = null));
}
function jp(e, t) {
  (Ma(),
    (Va = window.setTimeout(function () {
      ((Va = null), e());
    }, t)));
}
var St = null;
function BC(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(St && St.entry === e);
  }
  function n() {
    r() && (Ma(), (St = null));
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
        ((t = "shown"), Ma());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), Ma(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function c(p) {
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
          jp(function () {
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
    var p = oe("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? e.shouldAlwaysFadeIn : !1,
      g = !!(St && St.isVisible()) && !p;
    (St && (Ma(), St.entry.hide({ isImmediate: !0 }), St.entry.done(), (St = null)),
      (St = { entry: e, isVisible: u }));
    function f() {
      ((t = "shown"), e.show({ isImmediate: g }));
    }
    if (g) {
      f();
      return;
    }
    ((t = "waiting-to-show"), jp(f, e.delay));
  }
  d();
  var v = {
    keep: i,
    abort: n,
    isActive: r,
    requestHide: c,
    finishHideAnimation: s,
    mousePosition: oe("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && oe("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return v;
}
function UC(e, t) {
  var r = RO();
  return t ? "".concat(r(e)) : void 0;
}
var Dp = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81o8v _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  qC = function (t) {
    var r = t.shortcut;
    return m.createElement(
      "div",
      { className: A([Dp.shortcutSegmentsContainer]) },
      r.map(function (n, a) {
        return m.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(a), className: A([Dp.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  gb = m.forwardRef(function (t, r) {
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
          className: A(["_80om73ad", a]),
          onMouseOut: s,
          onMouseOver: u,
          "data-placement": i,
          "data-testid": c,
          id: l,
        },
        o,
        d && m.createElement(qC, { shortcut: d }),
      ),
    );
  });
gb.displayName = "TooltipPrimitive";
var Tp = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  bb = m.forwardRef(function (t, r) {
    var n = t.style,
      a = t.className,
      o = t.children,
      i = t.truncate,
      c = t.placement,
      s = t.testId,
      u = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      v = t.shortcut;
    return m.createElement(
      gb,
      {
        ref: r,
        style: n,
        className: A([Tp.base, i && Tp.truncate, a]),
        placement: c,
        testId: s,
        id: d,
        onMouseOut: u,
        onMouseOver: l,
        shortcut: v,
      },
      o,
    );
  });
bb.displayName = "TooltipContainer";
function Mp(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function zC(e, t) {
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
function Np(e, t) {
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
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Np(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Np(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var $C = AO.tooltip(),
  Fp = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.13.0" },
  VC = { top: "bottom", bottom: "top", left: "right", right: "left" },
  GC = function (t) {
    return t.split("-")[0];
  };
function HC(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    a = e.mousePosition,
    o = a === void 0 ? "bottom" : a,
    i = e.content,
    c = e.truncate,
    s = c === void 0 ? !1 : c,
    u = e.component,
    l = u === void 0 ? bb : u,
    d = e.tag,
    v = d === void 0 ? "div" : d,
    p = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    b = h === void 0 ? Le : h,
    _ = e.onHide,
    y = _ === void 0 ? Le : _,
    k = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    R = x === void 0 ? !1 : x,
    I = e.analyticsContext,
    P = e.strategy,
    D = P === void 0 ? "fixed" : P,
    L = e.ignoreTooltipPointerEvents,
    z = L === void 0 ? !1 : L,
    F = e.isScreenReaderAnnouncementDisabled,
    H = F === void 0 ? !1 : F,
    V = e.shortcut,
    W = e.UNSAFE_shouldAlwaysFadeIn,
    U = W === void 0 ? !1 : W,
    q = e.UNSAFE_shouldRenderToParent,
    G = q === void 0 ? !1 : q,
    te = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    ce = te ? o : n,
    le = Dd(Yr({ fn: b, action: "displayed", analyticsData: I }, Fp)),
    Oe = Dd(Yr({ fn: y, action: "hidden", analyticsData: I }, Fp)),
    N = m.useRef(null),
    me = m.useState("hide"),
    Be = K(me, 2),
    fe = Be[0],
    Ce = Be[1],
    pe = m.useRef(null),
    Ue = m.useRef(null),
    fr = function (de) {
      ((Ue.current = de), (pe.current = de ? de.firstElementChild : null));
    },
    er = m.useCallback(function (B) {
      pe.current = B;
    }, []),
    tt = Xr(fe),
    De = Xr(le),
    rt = Xr(Oe),
    kt = Xr(f),
    He = Xr(k),
    Te = m.useRef(!1),
    Me = Xr(U),
    re = m.useCallback(function (B) {
      ((N.current = B), (Te.current = !1));
    }, []),
    Se = m.useCallback(
      function () {
        N.current &&
          (Te.current && rt.current(), (N.current = null), (Te.current = !1), Ce("hide"));
      },
      [rt],
    ),
    Ee = m.useCallback(
      function () {
        N.current && (N.current.abort(), Te.current && rt.current(), (N.current = null));
      },
      [rt],
    );
  m.useEffect(
    function () {
      return function () {
        N.current && Ee();
      };
    },
    [Ee],
  );
  var nt = m.useRef(!1);
  m.useEffect(function () {
    return LC({
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
      function (B) {
        var de;
        if (!nt.current) {
          if ((N.current && !N.current.isActive() && Ee(), N.current && N.current.isActive())) {
            N.current.keep();
            return;
          }
          if (!(He.current && !((de = He.current) !== null && de !== void 0 && de.call(He)))) {
            var zt = {
                source: B,
                delay: kt.current,
                show: function (Fr) {
                  var yn = Fr.isImmediate;
                  (Te.current || ((Te.current = !0), De.current()),
                    Ce(yn ? "show-immediate" : "fade-in"));
                },
                hide: function (Fr) {
                  var yn = Fr.isImmediate;
                  Ce(yn ? "hide" : "before-fade-out");
                },
                done: Se,
                shouldAlwaysFadeIn: oe("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? Me.current
                  : !1,
              },
              pr = BC(zt);
            re(pr);
          }
        }
      },
      [He, kt, Se, re, Ee, De, Me],
    ),
    ge = m.useCallback(
      function () {
        var B;
        (B = N.current) === null || B === void 0 || B.requestHide({ isImmediate: !0 });
      },
      [N],
    );
  (DE({ onClose: ge, isDisabled: fe === "hide" || fe === "fade-out" }),
    m.useEffect(
      function () {
        if (fe === "hide") return Le;
        fe === "before-fade-out" && Ce("fade-out");
        var B = Mr.bind(window, {
          type: "scroll",
          listener: function () {
            N.current && N.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return B;
      },
      [fe],
    ));
  var Bt = m.useCallback(
      function () {
        R && N.current && N.current.requestHide({ isImmediate: !0 });
      },
      [R],
    ),
    Ke = m.useCallback(
      function () {
        S && N.current && N.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    Ut = m.useCallback(
      function (B) {
        if (!(Ue.current && B.target === Ue.current) && !B.defaultPrevented) {
          B.preventDefault();
          var de = te
            ? {
                type: "mouse",
                mouse: oe("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : Mp({ left: B.clientX, top: B.clientY }),
                clientX: B.clientX,
                clientY: B.clientY,
              }
            : { type: "keyboard" };
          Lt(de);
        }
      },
      [te, Lt],
    ),
    _n = m.useCallback(function (B) {
      (Ue.current && B.target === Ue.current) ||
        B.defaultPrevented ||
        (B.preventDefault(), N.current && N.current.requestHide({ isImmediate: !1 }));
    }, []),
    qt = te
      ? function (B) {
          var de;
          (de = N.current) !== null &&
            de !== void 0 &&
            de.isActive() &&
            (oe("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (N.current.mousePosition = Mp({ left: B.clientX, top: B.clientY })),
            (N.current.mousePos = { clientX: B.clientX, clientY: B.clientY }));
        }
      : void 0,
    Fi = m.useCallback(function () {
      if (N.current && N.current.isActive()) {
        N.current.keep();
        return;
      }
    }, []),
    Pb = m.useCallback(
      function (B) {
        try {
          if (!B.target.matches(":focus-visible")) return;
        } catch {}
        Lt({ type: "keyboard" });
      },
      [Lt],
    ),
    Rb = m.useCallback(function () {
      N.current && N.current.requestHide({ isImmediate: !1 });
    }, []),
    Ab = m.useCallback(
      function (B) {
        B === "exiting" &&
          tt.current === "fade-out" &&
          N.current &&
          N.current.finishHideAnimation();
      },
      [tt],
    ),
    Ib = v,
    Li = fe !== "hide" && !!i,
    lu = !H && Li,
    du = fe !== "hide" && fe !== "fade-out",
    jb = m.useCallback(function () {
      var B;
      (B = N.current) === null || B === void 0 || B.requestHide({ isImmediate: !0 });
    }, []);
  FE({ isOpen: Li && du, onClose: jb });
  var fu = function () {
      var de, zt;
      if (
        te &&
        (de = N.current) !== null &&
        de !== void 0 &&
        de.mousePos &&
        pe.current &&
        oe("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return zC(N.current.mousePos, { targetElement: pe.current, tooltipPosition: n });
      if (
        te &&
        (zt = N.current) !== null &&
        zt !== void 0 &&
        zt.mousePosition &&
        !oe("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var pr;
        return (pr = N.current) === null || pr === void 0 ? void 0 : pr.mousePosition;
      }
      return pe.current || void 0;
    },
    mn = UC("tooltip", lu),
    Bi = {
      onMouseOver: Ut,
      onMouseOut: _n,
      onMouseMove: qt,
      onMouseDown: Bt,
      onClick: Ke,
      onFocus: Pb,
      onBlur: Rb,
    };
  p && (Bi["data-testid"] = "".concat(p, "--container"));
  var pu = typeof t == "function";
  m.useEffect(
    function () {
      if (!pu) {
        var B = pe.current;
        if (!(!B || !mn))
          return (
            B.setAttribute("aria-describedby", mn),
            function () {
              return B.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [pu, mn],
  );
  var vu = lu
      ? O.createElement(
          "span",
          { "data-testid": p ? "".concat(p, "-hidden") : void 0, hidden: !0, id: mn },
          typeof i == "function" ? i({}) : i,
        )
      : null,
    Db = G && oe("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? m.Fragment : KC;
  return O.createElement(
    O.Fragment,
    null,
    typeof t == "function"
      ? O.createElement(
          O.Fragment,
          null,
          t(Yr(Yr({}, Bi), {}, { "aria-describedby": mn, ref: er })),
          vu,
        )
      : O.createElement(Ib, ee({}, Bi, { ref: fr, role: "presentation" }), t, vu),
    Li
      ? O.createElement(
          Db,
          null,
          O.createElement(kC, { placement: ce, referenceElement: fu(), strategy: D }, function (B) {
            var de = B.ref,
              zt = B.style,
              pr = B.update,
              Ui = B.placement,
              Fr = te ? void 0 : VC[GC(Ui)];
            return O.createElement(
              Qg,
              { appear: !0 },
              du &&
                O.createElement(
                  ZE,
                  {
                    distance: "constant",
                    entranceDirection: Fr,
                    exitDirection: Fr,
                    onFinish: Ab,
                    duration: fe !== "show-immediate" ? "medium" : "none",
                  },
                  function (yn) {
                    var Tb = yn.className;
                    return O.createElement(
                      l,
                      {
                        ref: de,
                        className: "Tooltip ".concat(Tb),
                        style: Yr(Yr({}, zt), z && { pointerEvents: "none" }),
                        truncate: s,
                        placement: ce,
                        testId: fu() ? p : p && "".concat(p, "--unresolved"),
                        onMouseOut: _n,
                        onMouseOver: Fi,
                        shortcut: V,
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
var KC = function (t) {
    var r = t.children;
    return O.createElement(NC, { zIndex: $C }, r);
  },
  WC = [
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
  Ia = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Lp = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  _b = function (t) {
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
      v = d === void 0 ? "Sort ascending" : d,
      p = t.descendingSortTooltip,
      g = p === void 0 ? "Sort descending" : p,
      f = t.buttonAriaRoleDescription,
      h = f === void 0 ? "Sort button" : f,
      b = t.isIconOnlyHeader,
      _ = ie(t, WC),
      y = m.useState(!1),
      k = K(y, 2),
      w = k[0],
      S = k[1],
      x = m.useState(!1),
      R = K(x, 2),
      I = R[0],
      P = R[1],
      D = u === l || c !== void 0,
      L = w || D || I,
      z = L && b,
      F = !b || L || (b && !I),
      H = m.useCallback(
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
      W = m.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      U = m.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      q = O.createElement(
        Ri,
        { xcss: Lp.headCellContainer, onMouseEnter: W, onMouseLeave: U, onFocus: H, onBlur: V },
        O.createElement(
          HC,
          { content: c === Pr ? v : g },
          O.createElement(
            Qh,
            { onClick: s, xcss: Ia.buttonWrapper, "aria-roledescription": h },
            O.createElement(
              ai,
              { xcss: z ? Ia.hideIconHeaderWrapper : Ia.visibleHeaderWrapper },
              O.createElement("span", { className: A([Lp.text]) }, r),
            ),
            F &&
              O.createElement(
                ai,
                { xcss: L ? Ia.sortIconVisibleWrapper : Ia.sortIconHiddenWrapper },
                c === Pr
                  ? O.createElement(IE, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--up--icon"),
                    })
                  : O.createElement(PE, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: a && "".concat(a, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return O.createElement(
      OE,
      ee(
        {
          style: n,
          testId: a && "".concat(a, "--head--cell"),
          ref: typeof o != "string" ? o : null,
        },
        _,
        { isSortable: i, sortOrder: c },
      ),
      i ? q : r,
    );
  },
  JC = ["isRanking", "refHeight", "refWidth"];
function XC(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, mb() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function mb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (mb = function () {
    return !!e;
  })();
}
var YC = (function (e) {
    function t() {
      return (be(this, t), XC(this, t, arguments));
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
              i = ie(n, JC),
              c = D0(a, o);
            return O.createElement(_b, ee({ inlineStyles: c }, i));
          },
        },
      ])
    );
  })(O.Component),
  ZC = EE(YC),
  QC = ["cells"],
  eP = [
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
function tP(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, yb() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function yb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (yb = function () {
    return !!e;
  })();
}
var rP = (function (e) {
    function t(r) {
      var n;
      return (be(this, t), (n = tP(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      et(t, e),
      _e(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Zo(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Zo(n.sortKey, n.head);
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
              v = a.testId,
              p = this.state.activeSortButtonId;
            if (!o) return null;
            var g = d ? ZC : _b,
              f = o.cells,
              h = ie(o, QC);
            return O.createElement(
              kE,
              ee({}, h, { isRanking: l, testId: v && "".concat(v, "--head") }),
              O.createElement(
                "tr",
                null,
                f.map(function (b, _) {
                  var y = b.ascendingSortTooltip,
                    k = b.buttonAriaRoleDescription,
                    w = b.colSpan,
                    S = b.content,
                    x = b.descendingSortTooltip,
                    R = b.isIconOnlyHeader,
                    I = b.isSortable,
                    P = b.key,
                    D = b.shouldTruncate,
                    L = b.testId,
                    z = b.width,
                    F = ie(b, eP),
                    H = "head-cell-".concat(_),
                    V = function () {
                      (n.setState({ activeSortButtonId: H }), I && u(b)());
                    };
                  return O.createElement(
                    g,
                    ee(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: R,
                        isSortable: !!I,
                        isRanking: l,
                        key: P || _,
                        headCellId: H,
                        activeSortButtonId: p,
                        onClick: V,
                        testId: L || v,
                        shouldTruncate: D,
                        sortOrder: P === i ? c : void 0,
                        width: z,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: x,
                        buttonAriaRoleDescription: k,
                      },
                      F,
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
  nP = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function aP(e) {
  switch (e) {
    case ti:
      return Pr;
    case Pr:
      return ti;
    default:
      return e;
  }
}
var oP = function (t) {
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
      v = t.label,
      p = t.isLoading,
      g = p === void 0 ? !1 : p,
      f = t.isFixedSize,
      h = f === void 0 ? !1 : f,
      b = t.rowsPerPage,
      _ = b === void 0 ? 1 / 0 : b,
      y = t.onSetPage,
      k = y === void 0 ? Le : y,
      w = t.onSort,
      S = w === void 0 ? Le : w,
      x = t.page,
      R = x === void 0 ? 1 : x,
      I = t.emptyView,
      P = t.isRankable,
      D = P === void 0 ? !1 : P,
      L = t.isRankingDisabled,
      z = L === void 0 ? !1 : L,
      F = t.onRankStart,
      H = F === void 0 ? Le : F,
      V = t.onRankEnd,
      W = V === void 0 ? Le : V,
      U = t.loadingSpinnerSize,
      q = t.paginationi18n,
      G =
        q === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : q,
      te = m.useState(!1),
      ce = K(te, 2),
      le = ce[0],
      Oe = ce[1],
      N = m.useRef(null),
      me = cn({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Be = cn({
        fn: W,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    m.useEffect(
      function () {
        (Zo(i, n), j0(n));
      },
      [i, n],
    );
    var fe = function (Se) {
        return function () {
          var Ee = Se.key;
          if (Ee) {
            if (me && D && Ee === i && c === ti) {
              me({ key: null, sortOrder: null, item: Se });
              return;
            }
            var nt = Ee !== i ? Pr : aP(c);
            me && me({ key: Ee, item: Se, sortOrder: nt });
          }
        };
      },
      Ce = function (Se, Ee) {
        k(Se, Ee);
      },
      pe = function (Se) {
        (Oe(!0), H(Se));
      },
      Ue = function (Se) {
        (Oe(!1), Be(Se));
      },
      fr = function () {
        return U || (Mh(o || [], R, _).length > 2 ? ri : X0);
      },
      er = function () {
        return g ? O.createElement(rw, { testId: l }) : I && O.createElement(nw, { testId: l }, I);
      },
      tt = o && o.length,
      De,
      rt = !1;
    (d && Number.isInteger(d) && _ && tt && tt <= d
      ? ((De = Math.ceil(d / _)), (rt = !0))
      : (De = tt && _ ? Math.ceil(tt / _) : 0),
      (De = De < 1 ? 1 : De));
    var kt = R > De ? De : R,
      He = !!tt,
      Te = fr(),
      Me = er();
    return O.createElement(
      O.Fragment,
      null,
      O.createElement(
        Kh,
        {
          isLoading: g && He,
          spinnerSize: Te,
          targetRef: function () {
            return N.current;
          },
          testId: l,
          loadingLabel: s,
        },
        O.createElement(
          Q0,
          { isFixedSize: h, "aria-label": v, hasDataRow: He, testId: l, isLoading: g },
          !!r && O.createElement(ew, null, r),
          n &&
            O.createElement(rP, {
              head: n,
              onSort: fe,
              sortKey: i,
              sortOrder: c,
              isRanking: le,
              isRankable: D,
              testId: l,
            }),
          He &&
            O.createElement(sP, {
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
              onRankEnd: Ue,
              isRankingDisabled: z || g || !1,
            }),
        ),
      ),
      De <= 1
        ? null
        : O.createElement(
            tw,
            { testId: l },
            O.createElement(mE, {
              value: kt,
              onChange: Ce,
              total: De,
              i18n: G,
              isDisabled: g,
              testId: l,
            }),
          ),
      !He &&
        Me &&
        O.createElement(Gh, { isLoading: g, spinnerSize: ri, testId: l, loadingLabel: s }, Me),
    );
  },
  iP = m.lazy(function () {
    return Re(
      () => import("./body-Btx83xGB.js"),
      __vite__mapDeps([5, 3, 1, 4, 6]),
      import.meta.url,
    );
  }),
  sP = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      a = n === void 0 ? !1 : n,
      o = t.isRanking,
      i = t.onRankStart,
      c = t.onRankEnd,
      s = t.isRankingDisabled,
      u = ie(t, nP),
      l = a && !u.sortKey,
      d = m.useState(!1),
      v = K(d, 2),
      p = v[0],
      g = v[1];
    m.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = O.createElement(_w, ee({ ref: r }, u));
    return l && p
      ? O.createElement(
          yw,
          { fallback: f },
          O.createElement(
            m.Suspense,
            { fallback: f },
            O.createElement(
              iP,
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
function cP(e, t, r) {
  return (
    (t = Q(t)),
    Qe(e, wb() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r))
  );
}
function wb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (wb = function () {
    return !!e;
  })();
}
var kb = (function (e) {
  function t() {
    var r;
    be(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return (
      (r = cP(this, t, [].concat(a))),
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
        var v = T0(i, u, l, d);
        (r.setState({ rows: v }), r.onRankEndIfExistsHandler(i));
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
            v = s.highlightedRowIndex,
            p = s.loadingSpinnerSize,
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
            R = s.label;
          return O.createElement(oP, {
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
            label: R,
          });
        },
      },
    ])
  );
})(O.Component);
C(kb, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Le,
  onSort: Le,
  rowsPerPage: 1 / 0,
});
const uP = (e) => {
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
  lP = (e) => ({ cells: uP() });
function dP(e) {
  return function (t) {
    e.forEach(function (r) {
      typeof r == "function" ? r(t) : r !== null && Ie(r) === "object" && (r.current = t);
    });
  };
}
var Ob = m.createContext(void 0),
  fP = function () {
    var t = m.useContext(Ob);
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
var pP = 9;
function Bp(e) {
  e.keyCode !== pP && Kt(e);
}
function vP(e, t) {
  return e
    ? {
        onMouseDownCapture: Kt,
        onMouseUpCapture: Kt,
        onKeyDownCapture: Bp,
        onKeyUpCapture: Bp,
        onTouchStartCapture: Kt,
        onTouchEndCapture: Kt,
        onPointerDownCapture: Kt,
        onPointerUpCapture: Kt,
        onClickCapture: Kt,
        onClick: Kt,
      }
    : t;
}
function hP(e) {
  return e === "compact" ? "small" : "medium";
}
function gP(e) {
  var t = e.appearance,
    r = e.isDisabled,
    n = e.isSelected;
  return r || n
    ? "inherit"
    : t === "primary" || t === "danger" || t === "discovery"
      ? "invert"
      : "inherit";
}
function bP(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isDisabled,
    a = e.isSelected,
    o = e.testId;
  return O.createElement(qc, {
    size: hP(r),
    appearance: gP({ appearance: t, isDisabled: n, isSelected: a }),
    testId: o ? "".concat(o, "--loading-spinner") : void 0,
  });
}
var _P = [
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
  mP = ["className", "css", "as", "style"],
  Up = ", Loading",
  Pe = {
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
  Js = {
    root: "_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr31dpa _30l3azsu _1di6fcek _9h8hazsu",
    disabled: "_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28",
  },
  qp = {
    root: "_bfhkomb0 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31wqm _9h8h15cr _1di617hq",
  },
  zp = {
    root: "_bfhk1ikc _syazal3n _1053al3n _f8pjal3n _30l3al3n _9h8hal3n",
    interactive: "_30l3al3n _irr31j43 _9h8hal3n _1di6h4op",
  },
  $p = {
    root: "_bfhk1v7l _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr31rwk _9h8h15cr _1di6yycf",
  },
  Vp = {
    root: "_bfhk1vbi _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr",
    interactive: "_30l315cr _irr37gr8 _9h8h15cr _1di61wu2",
  },
  Gp = {
    root: "_bfhkqtfy _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu",
    interactive: "_irr34mfv _30l3azsu _1di619qy _9h8hazsu",
  },
  Zr = {
    root: "_bfhk15s3 _syaz1ldt _8l3mcoux _aetrb3bt _10531ldt _f8pj1ldt _30l31ldt _9h8h1ldt",
    insideSplitButton: "_1pbycs5v",
    interactive: "_irr3t71w _30l31pke _1di6yssv _9h8h1pke",
    warning: "_bfhkvdtc _syaz16q2 _30l31pke _irr3vdtc _9h8h1pke _1di6vdtc",
    danger: "_bfhkbeib _syaz1pke _30l31pke _irr3beib _9h8h1pke _1di6beib",
    discovery: "_bfhk1g49 _syaz1pke _30l31pke _irr31g49 _9h8h1pke _1di61g49",
  },
  yP = O.forwardRef(function (e, t) {
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
      v = d === void 0 ? !1 : d,
      p = e.isCircle,
      g = p === void 0 ? !1 : p,
      f = e.hasIconBefore,
      h = f === void 0 ? !1 : f,
      b = e.hasIconAfter,
      _ = b === void 0 ? !1 : b,
      y = e.shouldFitContainer,
      k = y === void 0 ? !1 : y,
      w = e.spacing,
      S = w === void 0 ? "default" : w,
      x = e.ariaLabel,
      R = e.ariaLabelledBy,
      I = e.children,
      P = e.interactionName,
      D = e.onClick,
      L = e.onMouseDown,
      z = e.onMouseDownCapture,
      F = e.onMouseUp,
      H = e.onMouseUpCapture,
      V = e.onKeyDown,
      W = e.onKeyDownCapture,
      U = e.onKeyUp,
      q = e.onKeyUpCapture,
      G = e.onTouchStart,
      te = e.onTouchStartCapture,
      ce = e.onTouchEnd,
      le = e.onTouchEndCapture,
      Oe = e.onPointerDown,
      N = e.onPointerDownCapture,
      me = e.onPointerUp,
      Be = e.onPointerUpCapture,
      fe = e.onClickCapture,
      Ce = e.testId,
      pe = e.analyticsContext,
      Ue = e.componentName,
      fr = e.role,
      er = e.onMouseOver,
      tt = e.onMouseOut,
      De = e.onFocus,
      rt = e.onBlur,
      kt = e.onMouseMove,
      He = e.type,
      Te = ie(e, _P),
      Me = m.useRef(null),
      re = fP(),
      Se = Rg(),
      Ee = !!re,
      nt = re?.isNavigationSplitButton || !1,
      Lt = re?.appearance === "default",
      ge = Lt ? "subtle" : r || re?.appearance || "default",
      Bt = re?.spacing || S,
      Ke = re?.isDisabled || i,
      Ut = !Ke && !s,
      _n = Ke || s,
      qt = l && !Ke;
    (Vg(Me, a), Te.className, Te.css, Te.as, Te.style);
    var Fi = ie(Te, mP);
    return O.createElement(
      Qh,
      ee(
        {},
        Fi,
        {
          componentName: Ue || "button",
          analyticsContext: pe,
          role: fr,
          ref: dP([Me, t]),
          xcss: Xh(
            Pe.base,
            oe("platform-dst-shape-theme-default") && Pe.baseT26Shape,
            ge === "default" && Js.root,
            ge === "default" && Ut && Js.interactive,
            ge === "primary" && qp.root,
            ge === "primary" && Ut && qp.interactive,
            ge === "warning" && zp.root,
            ge === "warning" && Ut && zp.interactive,
            ge === "danger" && $p.root,
            ge === "danger" && Ut && $p.interactive,
            ge === "discovery" && Vp.root,
            ge === "discovery" && Ut && Vp.interactive,
            ge === "subtle" && Gp.root,
            ge === "subtle" && Ut && Gp.interactive,
            Pe.linkDecorationUnset,
            qt && Zr.root,
            qt && Ee && Zr.insideSplitButton,
            qt && Ut && Zr.interactive,
            qt && ge === "danger" && Zr.danger,
            qt && ge === "warning" && Zr.warning,
            qt && ge === "discovery" && Zr.discovery,
            Ke && Pe.disabled,
            Ke && ge !== "default" && ge !== "subtle" && Pe.sharedDisabled,
            Ke && ge === "default" && Js.disabled,
            g && !Ee && Pe.circle,
            Bt === "compact" && Pe.spacingCompact,
            Bt === "compact" && oe("platform-dst-shape-theme-default") && Pe.spacingCompactT26Shape,
            h && Pe.buttonIconBefore,
            k && Pe.fullWidth,
            _ && Pe.buttonIconAfter,
            v && Pe.iconButton,
            v && Bt === "compact" && Pe.iconButtonCompact,
            s && Pe.loading,
            Ee && Pe.splitButton,
            nt && Pe.navigationSplitButton,
          ),
          isDisabled: oe("platform-dst_fix_not_focusable_loading_button") ? Ke : _n,
        },
        oe("platform-dst_fix_not_focusable_loading_button") && { "aria-live": "polite" },
        s && oe("platform-dst_fix_not_focusable_loading_button") && { "aria-disabled": !0 },
        {
          "aria-label": s && x && !R ? "".concat(x, " ").concat(Up) : x,
          "aria-labelledby": s && R ? "".concat(R, " ").concat(Se) : R,
          onClick: D,
        },
        vP(_n, {
          onMouseDownCapture: z,
          onMouseUpCapture: H,
          onKeyDownCapture: W,
          onKeyUpCapture: q,
          onTouchStartCapture: te,
          onTouchEndCapture: le,
          onPointerDownCapture: N,
          onPointerUpCapture: Be,
          onClickCapture: fe,
        }),
        {
          testId: Ce,
          onMouseOver: er,
          onFocus: De,
          onMouseMove: kt,
          onBlur: rt,
          type: He,
          interactionName: P,
          onMouseDown: L,
          onMouseUp: F,
          onKeyDown: V,
          onMouseOut: tt,
          onKeyUp: U,
          onTouchStart: G,
          onTouchEnd: ce,
          onPointerDown: Oe,
          onPointerUp: me,
        },
      ),
      O.createElement(
        Ob.Provider,
        { value: void 0 },
        I,
        s &&
          O.createElement(
            "span",
            { className: A([Pe.loadingOverlay]) },
            bP({ spacing: Bt, appearance: ge, isDisabled: Ke, isSelected: qt, testId: Ce }),
          ),
        s && (R || !x) && O.createElement(ji, { id: Se }, Up),
      ),
    );
  }),
  Qr = {
    text: "_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c",
    icon: "_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw",
    beforeIcon: "_1he91b66 _w795v77o",
    afterIcon: "_1he9v77o _w7951b66",
    common: "_v564g17y",
    fade: "_tzy4idpf",
  },
  Xs = function (t) {
    var r = t.children,
      n = t.type,
      a = n === void 0 ? "text" : n,
      o = t.isLoading,
      i = t.position;
    return O.createElement(
      "span",
      {
        className: A([
          Qr.common,
          a === "text" && Qr.text,
          a === "icon" && Qr.icon,
          o && Qr.fade,
          i === "before" && Qr.beforeIcon,
          i === "after" && Qr.afterIcon,
        ]),
      },
      r,
    );
  };
function wP(e) {
  return !e.displayName && !e.render && typeof e == "function";
}
var Hp = function (t) {
    var r = t.icon,
      n = wP(r),
      a = {
        label: "",
        color: "currentColor",
        size: oe("platform_dst_button_chevron_sizing")
          ? function (o) {
              return o.startsWith("Chevron") ? "small" : "medium";
            }
          : void 0,
      };
    return O.createElement(O.Fragment, null, n ? r(a) : O.createElement(r, a));
  },
  kP = [
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
  OP = ["className", "css", "as", "style"],
  uu = O.memo(
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
        v = t.isDisabled,
        p = t.isLoading,
        g = p === void 0 ? !1 : p,
        f = t.isSelected,
        h = t.onClick,
        b = t.onClickCapture,
        _ = t.onKeyDownCapture,
        y = t.onKeyUpCapture,
        k = t.onMouseDownCapture,
        w = t.onMouseUpCapture,
        S = t.onPointerDownCapture,
        x = t.onPointerUpCapture,
        R = t.onTouchEndCapture,
        I = t.onTouchStartCapture,
        P = t.shouldFitContainer,
        D = t.spacing,
        L = t.testId,
        z = t.type,
        F = z === void 0 ? "button" : z,
        H = ie(t, kP);
      (H.className, H.css, H.as, H.style);
      var V = ie(H, OP);
      return O.createElement(
        yP,
        ee(
          {
            analyticsContext: n,
            ref: r,
            appearance: a,
            autoFocus: c,
            isDisabled: v,
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
            onPointerUpCapture: x,
            onTouchStartCapture: I,
            onTouchEndCapture: R,
            testId: L,
            componentName: "Button",
            type: F,
            interactionName: d,
          },
          V,
        ),
        O.createElement(
          m.Fragment,
          null,
          l &&
            O.createElement(
              Xs,
              { type: "icon", position: "before", isLoading: g },
              O.createElement(Hp, { icon: l }),
            ),
          s && O.createElement(Xs, { isLoading: g }, s),
          u &&
            O.createElement(
              Xs,
              { type: "icon", position: "after", isLoading: g },
              O.createElement(Hp, { icon: u }),
            ),
        ),
      );
    }),
  );
uu.displayName = "Button";
const Ro = xi((e) => {
  const { stateStore: t } = Ci(),
    r = lP();
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
            E.jsx(kb, {
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
                      children: E.jsx(uu, {
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
function SP(e) {
  return Dh(e) || Nh(e) || Bc(e) || Th();
}
var Sb = m.createContext(null),
  Eb = m.createContext(null),
  xb = m.createContext(null);
function Kp(e, t) {
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
function EP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kp(Object(r), !0).forEach(function (n) {
          C(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var xP = {
    componentName: "tabs",
    packageName: "@atlaskit/tabs",
    packageVersion: "0.0.0-development",
  },
  Wp = function (t) {
    var r = t.tabPanel,
      n = t.index,
      a = t.isSelected,
      o = t.tabsId;
    return (
      r &&
      m.createElement(
        xb.Provider,
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
  CP = function (t) {
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
      v = K(d, 2),
      p = v[0],
      g = v[1],
      f = a === void 0 ? p : a,
      h = m.Children.toArray(u).filter(function (R) {
        return !!R;
      }),
      b = SP(h),
      _ = b[0],
      y = b.slice(1),
      k = m.useRef(new Set([f]));
    k.current.has(f) || k.current.add(f);
    var w = m.useCallback(
        function (R, I) {
          (i && i(R, I), g(R));
        },
        [i],
      ),
      S = cn(EP({ fn: w, action: "clicked", analyticsData: s }, xP)),
      x = n
        ? Wp({ tabPanel: y[f], index: f, isSelected: !0, tabsId: c })
        : Array.from(k.current).map(function (R) {
            return Wp({ tabPanel: y[R], index: R, isSelected: R === f, tabsId: c });
          });
    return m.createElement(
      "div",
      {
        "data-testid": l,
        className: A([
          "_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n",
          "_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw",
        ]),
      },
      m.createElement(Eb.Provider, { value: { selected: f, onChange: S, tabsId: c } }, _),
      m.createElement(m.Fragment, null, x),
    );
  },
  PP = function () {
    var t = m.useContext(Sb);
    if (t == null || typeof t > "u")
      throw Error("@atlaskit/tabs: A Tab must have a TabList parent.");
    return t;
  },
  RP = function () {
    var t = m.useContext(Eb);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs: A TabList must have a Tabs parent.");
    return t;
  },
  AP = function () {
    var t = m.useContext(xb);
    if (t === null || typeof t > "u")
      throw Error("@atlaskit/tabs:  A TabPanel must have a Tabs parent.");
    return t;
  },
  ja = function (t) {
    var r = t.children,
      n = t.testId,
      a = AP(),
      o = a.role,
      i = a.id,
      c = a.hidden,
      s = a["aria-labelledby"],
      u = a.tabIndex;
    return O.createElement(
      $c,
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
  Ao = m.forwardRef(function (t, r) {
    var n = t.children,
      a = t.testId,
      o = PP(),
      i = o.onClick,
      c = o.id,
      s = o["aria-controls"],
      u = o["aria-posinset"],
      l = o["aria-selected"],
      d = o["aria-setsize"],
      v = o.onKeyDown,
      p = o.role,
      g = o.tabIndex;
    return O.createElement(
      $c,
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
        onKeyDown: v,
        role: p,
        tabIndex: g,
        ref: r,
      },
      O.createElement(Zh, { weight: "medium", color: "inherit", maxLines: 1 }, n),
    );
  }),
  IP = function (t) {
    var r = t.children,
      n = RP(),
      a = n.tabsId,
      o = n.selected,
      i = n.onChange,
      c = m.createRef(),
      s = m.Children.toArray(r).filter(Boolean),
      u = s.length,
      l = m.useCallback(
        function (p) {
          var g,
            f =
              (g = c.current) === null || g === void 0
                ? void 0
                : g.querySelector("[id='".concat(a, "-").concat(p, "']"));
          (f && f.focus(), i(p));
        },
        [a, c, i],
      ),
      d = m.useCallback(
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
              _ = h + b;
            ((_ < 0 || _ >= u) && (_ = _ < 0 ? g : 0), l(_));
          }
        },
        [u, l],
      ),
      v = m.useCallback(
        function (p) {
          var g = p.tab,
            f = p.isSelected,
            h = p.index;
          return m.createElement(
            Sb.Provider,
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
        className: A([
          "_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t",
          "_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quz1425 _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzuokkv _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oaz1fgx _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8dokkv _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i2072d1 _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmz73hj _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiemln51 _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1russudh _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc",
        ]),
        style: {
          "--_13a5t4u": ar("var(--ds-text-subtle, ".concat(ni, ")")),
          "--_kkbq40": ar("var(--ds-text-subtle, ".concat(Os, ")")),
          "--_71dbsd": ar("var(--ds-text, ".concat(ww, ")")),
          "--_1hfkvbo": ar("var(--ds-text-selected, ".concat(Os, ")")),
          "--_1q7mpl4": ar(
            "var(--ds-border-width-selected, 2px)".concat(
              " solid ",
              "var(--ds-border-selected, ".concat(Os, ")"),
            ),
          ),
          "--_lvpq93": ar("var(--ds-border, ".concat(Ow, ")")),
        },
      },
      s.map(function (p, g) {
        return v({ tab: p, index: g, isSelected: g === o });
      }),
    );
  },
  Cb = ((e) => (
    (e[(e.WITHOUT_VERSIONING = 0)] = "WITHOUT_VERSIONING"),
    (e[(e.OPTIMISTIC_NUMBER = 1)] = "OPTIMISTIC_NUMBER"),
    (e[(e.OPTIMISTIC_DATE = 2)] = "OPTIMISTIC_DATE"),
    (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = "OPTIMISTIC_TIMESTAMP"),
    e
  ))(Cb || {});
const jP = Object.keys(Cb).filter((e) => isNaN(Number(e))),
  Io = ({ children: e, testId: t }) =>
    E.jsx("div", {
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
function DP() {
  const { stateStore: e } = Ci();
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
              E.jsxs(uu, {
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
          E.jsx("br", {}),
          E.jsx("p", {
            children:
              "Use the tabs below to navigate between different examples of optimistic locking. Each tab demonstrates a different versioning approach, along with instructions on how to test the locking behavior.",
          }),
          E.jsx("br", {}),
          E.jsxs(CP, {
            onChange: (t) => console.log("Selected Tab", t + 1),
            defaultSelected: 1,
            id: "default",
            children: [
              E.jsxs(IP, {
                children: [
                  " ",
                  jP.map((t) => {
                    switch (t) {
                      case "WITHOUT_VERSIONING":
                        return E.jsx(
                          Ao,
                          { children: "Entity Without Version Column (No Locking)" },
                          t,
                        );
                      case "OPTIMISTIC_NUMBER":
                        return E.jsx(Ao, { children: "Entity with Numeric Version Column" }, t);
                      case "OPTIMISTIC_DATE":
                        return E.jsx(
                          Ao,
                          { children: "Entity with Datetime-Based Version Column" },
                          t,
                        );
                      case "OPTIMISTIC_TIMESTAMP":
                        return E.jsx(
                          Ao,
                          { children: "Entity with Timestamp-BasedVersion Column" },
                          t,
                        );
                    }
                  }),
                ],
              }),
              E.jsx(ja, { children: E.jsx(E.Fragment, {}) }),
              E.jsx(ja, {
                children: E.jsx(Io, {
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
                      E.jsx(Ro, { type: "WITHOUT_VERSIONING" }),
                    ],
                  }),
                }),
              }),
              E.jsx(ja, {
                children: E.jsx(Io, {
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
                      E.jsx(Ro, { type: "OPTIMISTIC_NUMBER" }),
                    ],
                  }),
                }),
              }),
              E.jsx(ja, {
                children: E.jsx(Io, {
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
                      E.jsx(Ro, { type: "OPTIMISTIC_DATE" }),
                    ],
                  }),
                }),
              }),
              E.jsx(ja, {
                children: E.jsx(Io, {
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
                      E.jsx(Ro, { type: "OPTIMISTIC_TIMESTAMP" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const TP = xi(DP),
  MP = xi((e) => {
    const { stateStore: t } = Ci(),
      [r, n] = m.useState(""),
      [a, o] = m.useState({}),
      i = (u) => {
        const { name: l, value: d, type: v } = u.target;
        o((p) => ({ ...p, [l]: v === "number" ? Number(d) : d }));
      },
      c = async (u) => {
        u.preventDefault();
        const l = { ...s };
        (a.testNameColumn && (l.testNameColumn = a.testNameColumn),
          a.testDateColumn && (l.testDateColumn = new Date(a.testDateColumn)));
        const d = await Ga.invoke("update", { data: l, objectName: e.type });
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
function NP() {
  const { stateStore: e } = Ci();
  if (
    (m.useEffect(() => {
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
      return E.jsx(TP, {});
    case "WITHOUT_VERSIONING":
    case "OPTIMISTIC_TIMESTAMP":
    case "OPTIMISTIC_DATE":
    case "OPTIMISTIC_NUMBER":
      return E.jsx(MP, { type: e.state });
    default:
      return E.jsxs("div", { children: ["ERROR: unsupprted state $", e.state] });
  }
}
const FP = xi(NP),
  LP = document.getElementById("root"),
  BP = Mb.createRoot(LP),
  Jp = () => {
    BP.render(E.jsx(Ah, { ...Ih, children: E.jsx(FP, {}) }));
  };
Ga.view.theme
  .enable()
  .then(() => {
    Jp();
  })
  .catch((e) => {
    (console.error(e.message), Jp());
  });
export {
  Nf as A,
  ye as B,
  _g as C,
  Ii as D,
  Ai as E,
  eR as F,
  QP as G,
  XP as H,
  O as R,
  fw as T,
  et as _,
  _e as a,
  _c as b,
  be as c,
  Qe as d,
  Q as e,
  K as f,
  C as g,
  ie as h,
  Mr as i,
  Fe as j,
  ee as k,
  p1 as l,
  Xt as m,
  Ft as n,
  A as o,
  lw as p,
  D0 as q,
  m as r,
  sw as s,
  YP as t,
  JP as u,
  WP as v,
  EE as w,
  KP as x,
  ZP as y,
  Mf as z,
};
