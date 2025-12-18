const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-JJ6DjNTc.js",
      "./client-core-vendor-DC5q1RXn.js",
      "./body-Bdr7HoDI.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./lodash-vendor-B0QWQanV.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as hr, a as Ta, c as ag } from "./react-dom-vendor--YlRhZCI.js";
import { g as Yt, a as Wf, r as Kt, b as Ot, s as Ve } from "./client-core-vendor-DC5q1RXn.js";
import { r as og } from "./lodash-vendor-B0QWQanV.js";
function sg(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : { enumerable: !0, get: () => n[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var vo = { exports: {} },
  Zr = {};
var Mu;
function ug() {
  if (Mu) return Zr;
  Mu = 1;
  var e = hr(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l,
      d = {},
      p = null,
      v = null;
    (c !== void 0 && (p = "" + c),
      s.key !== void 0 && (p = "" + s.key),
      s.ref !== void 0 && (v = s.ref));
    for (l in s) n.call(s, l) && !a.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps) for (l in ((s = u.defaultProps), s)) d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: p, ref: v, props: d, _owner: i.current };
  }
  return ((Zr.Fragment = r), (Zr.jsx = o), (Zr.jsxs = o), Zr);
}
var Fu;
function cg() {
  return (Fu || ((Fu = 1), (vo.exports = ug())), vo.exports);
}
var M = cg(),
  y = hr();
const E = Yt(y),
  Lu = sg({ __proto__: null, default: E }, [y]);
var po = {},
  ms = function (e, t) {
    return (
      (ms =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      ms(e, t)
    );
  };
function Kf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ms(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var ha = function () {
  return (
    (ha =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    ha.apply(this, arguments)
  );
};
function Jf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function Yf(e, t, r, n) {
  var i = arguments.length,
    a = i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(e, t, r, n);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
  return (i > 3 && a && Object.defineProperty(t, r, a), a);
}
function Xf(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function Zf(e, t, r, n, i, a) {
  function o(_) {
    if (_ !== void 0 && typeof _ != "function") throw new TypeError("Function expected");
    return _;
  }
  for (
    var u = n.kind,
      s = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      c = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}),
      d,
      p = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var g = {};
    for (var f in n) g[f] = f === "access" ? {} : n[f];
    for (var f in n.access) g.access[f] = n.access[f];
    g.addInitializer = function (_) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(o(_ || null));
    };
    var h = (0, r[v])(u === "accessor" ? { get: l.get, set: l.set } : l[s], g);
    if (u === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((d = o(h.get)) && (l.get = d),
        (d = o(h.set)) && (l.set = d),
        (d = o(h.init)) && i.unshift(d));
    } else (d = o(h)) && (u === "field" ? i.unshift(d) : (l[s] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (p = !0));
}
function Qf(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function ev(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function tv(e, t, r) {
  return (
    typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t })
  );
}
function rv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function nv(e, t, r, n) {
  function i(a) {
    return a instanceof r
      ? a
      : new r(function (o) {
          o(a);
        });
  }
  return new (r || (r = Promise))(function (a, o) {
    function u(l) {
      try {
        c(n.next(l));
      } catch (d) {
        o(d);
      }
    }
    function s(l) {
      try {
        c(n.throw(l));
      } catch (d) {
        o(d);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(u, s);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function iv(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    a,
    o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (o.next = u(0)),
    (o.throw = u(1)),
    (o.return = u(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function u(c) {
    return function (l) {
      return s([c, l]);
    };
  }
  function s(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), c[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          i &&
            (a =
              c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
            !(a = a.call(i, c[1])).done)
        )
          return a;
        switch (((i = 0), a && (c = [c[0] & 2, a.value]), c[0])) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return (r.label++, { value: c[1], done: !1 });
          case 5:
            (r.label++, (i = c[1]), (c = [0]));
            continue;
          case 7:
            ((c = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((a = r.trys), !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || (c[1] > a[0] && c[1] < a[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              ((r.label = a[1]), (a = c));
              break;
            }
            if (a && r.label < a[2]) {
              ((r.label = a[2]), r.ops.push(c));
              break;
            }
            (a[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        c = t.call(e, r);
      } catch (l) {
        ((c = [6, l]), (i = 0));
      } finally {
        n = a = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var Ma = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var i = Object.getOwnPropertyDescriptor(t, r);
      ((!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function () {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, i));
    }
  : function (e, t, r, n) {
      (n === void 0 && (n = r), (e[n] = t[r]));
    };
function av(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ma(t, e, r);
}
function ga(e) {
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
function Qs(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function ov() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Qs(arguments[t]));
  return e;
}
function sv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, u = a.length; o < u; o++, i++) n[i] = a[o];
  return n;
}
function uv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Lr(e) {
  return this instanceof Lr ? ((this.v = e), this) : new Lr(e);
}
function cv(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    i,
    a = [];
  return (
    (i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(v) {
    return function (g) {
      return Promise.resolve(g).then(v, d);
    };
  }
  function u(v, g) {
    n[v] &&
      ((i[v] = function (f) {
        return new Promise(function (h, _) {
          a.push([v, f, h, _]) > 1 || s(v, f);
        });
      }),
      g && (i[v] = g(i[v])));
  }
  function s(v, g) {
    try {
      c(n[v](g));
    } catch (f) {
      p(a[0][3], f);
    }
  }
  function c(v) {
    v.value instanceof Lr ? Promise.resolve(v.value.v).then(l, d) : p(a[0][2], v);
  }
  function l(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function p(v, g) {
    (v(g), a.shift(), a.length && s(a[0][0], a[0][1]));
  }
}
function lv(e) {
  var t, r;
  return (
    (t = {}),
    n("next"),
    n("throw", function (i) {
      throw i;
    }),
    n("return"),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(i, a) {
    t[i] = e[i]
      ? function (o) {
          return (r = !r) ? { value: Lr(e[i](o)), done: !1 } : a ? a(o) : o;
        }
      : a;
  }
}
function dv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ga == "function" ? ga(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(a) {
    r[a] =
      e[a] &&
      function (o) {
        return new Promise(function (u, s) {
          ((o = e[a](o)), i(u, s, o.done, o.value));
        });
      };
  }
  function i(a, o, u, s) {
    Promise.resolve(s).then(function (c) {
      a({ value: c, done: u });
    }, o);
  }
}
function fv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var lg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  ys = function (e) {
    return (
      (ys =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      ys(e)
    );
  };
function vv(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = ys(e), n = 0; n < r.length; n++) r[n] !== "default" && Ma(t, e, r[n]);
  return (lg(t, e), t);
}
function pv(e) {
  return e && e.__esModule ? e : { default: e };
}
function hv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function gv(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r);
}
function _v(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function bv(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, i;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = t[Symbol.dispose]), r && (i = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (i &&
      (n = function () {
        try {
          i.call(this);
        } catch (a) {
          return Promise.reject(a);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r }));
  } else r && e.stack.push({ async: !0 });
  return t;
}
var dg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function mv(e) {
  function t(a) {
    ((e.error = e.hasError ? new dg(a, e.error, "An error was suppressed during disposal.") : a),
      (e.hasError = !0));
  }
  var r,
    n = 0;
  function i() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1) return ((n = 0), e.stack.push(r), Promise.resolve().then(i));
        if (r.dispose) {
          var a = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(a).then(i, function (o) {
                return (t(o), i());
              })
            );
        } else n |= 1;
      } catch (o) {
        t(o);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function yv(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, i, a, o) {
        return n
          ? t
            ? ".jsx"
            : ".js"
          : i && (!a || !o)
            ? r
            : i + a + "." + o.toLowerCase() + "js";
      })
    : e;
}
const fg = {
    __extends: Kf,
    __assign: ha,
    __rest: Jf,
    __decorate: Yf,
    __param: Xf,
    __esDecorate: Zf,
    __runInitializers: Qf,
    __propKey: ev,
    __setFunctionName: tv,
    __metadata: rv,
    __awaiter: nv,
    __generator: iv,
    __createBinding: Ma,
    __exportStar: av,
    __values: ga,
    __read: Qs,
    __spread: ov,
    __spreadArrays: sv,
    __spreadArray: uv,
    __await: Lr,
    __asyncGenerator: cv,
    __asyncDelegator: lv,
    __asyncValues: dv,
    __makeTemplateObject: fv,
    __importStar: vv,
    __importDefault: pv,
    __classPrivateFieldGet: hv,
    __classPrivateFieldSet: gv,
    __classPrivateFieldIn: _v,
    __addDisposableResource: bv,
    __disposeResources: mv,
    __rewriteRelativeImportExtension: yv,
  },
  vg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: bv,
        get __assign() {
          return ha;
        },
        __asyncDelegator: lv,
        __asyncGenerator: cv,
        __asyncValues: dv,
        __await: Lr,
        __awaiter: nv,
        __classPrivateFieldGet: hv,
        __classPrivateFieldIn: _v,
        __classPrivateFieldSet: gv,
        __createBinding: Ma,
        __decorate: Yf,
        __disposeResources: mv,
        __esDecorate: Zf,
        __exportStar: av,
        __extends: Kf,
        __generator: iv,
        __importDefault: pv,
        __importStar: vv,
        __makeTemplateObject: fv,
        __metadata: rv,
        __param: Xf,
        __propKey: ev,
        __read: Qs,
        __rest: Jf,
        __rewriteRelativeImportExtension: yv,
        __runInitializers: Qf,
        __setFunctionName: tv,
        __spread: ov,
        __spreadArray: uv,
        __spreadArrays: sv,
        __values: ga,
        default: fg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  et = Wf(vg);
var Qr = {},
  Bu;
function pg() {
  return (
    Bu ||
      ((Bu = 1),
      Object.defineProperty(Qr, "__esModule", { value: !0 }),
      (Qr.NavigationTarget = void 0),
      (Qr.NavigationTarget = {
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
    Qr
  );
}
var ho = {},
  go = {},
  en = {},
  tn = {},
  Nu;
function _e() {
  if (Nu) return tn;
  ((Nu = 1), Object.defineProperty(tn, "__esModule", { value: !0 }), (tn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((tn.BridgeAPIError = e), tn);
}
var Uu;
function oe() {
  if (Uu) return en;
  ((Uu = 1), Object.defineProperty(en, "__esModule", { value: !0 }), (en.getCallBridge = void 0));
  const e = _e();
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
  return ((en.getCallBridge = r), en);
}
var rn = {},
  qu;
function Fa() {
  if (qu) return rn;
  ((qu = 1), Object.defineProperty(rn, "__esModule", { value: !0 }), (rn.withRateLimiter = void 0));
  const e = _e(),
    t = (r, n, i, a) => {
      let o = Date.now(),
        u = 0;
      return async (...s) => {
        const c = Date.now();
        if ((c - o > i && ((o = c), (u = 0)), u >= n))
          throw new e.BridgeAPIError(a || "Too many invocations.");
        return ((u = u + 1), r(...s));
      };
    };
  return ((rn.withRateLimiter = t), rn);
}
var zu;
function hg() {
  return (
    zu ||
      ((zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = oe(),
          r = _e(),
          n = Fa(),
          i = (0, t.getCallBridge)(),
          a = (s) => {
            if (s && Object.values(s).some((c) => typeof c == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (s, c) => {
            if (typeof s != "string") throw new r.BridgeAPIError("functionKey must be a string!");
            return (a(c), i("invoke", { functionKey: s, payload: c }));
          };
        e.invoke = (0, n.withRateLimiter)(
          o,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function u() {
          return e.invoke;
        }
        e.makeInvoke = u;
      })(go)),
    go
  );
}
var $u;
function Ti() {
  return (
    $u ||
      (($u = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), et.__exportStar(hg(), e));
      })(ho)),
    ho
  );
}
var _o = {},
  nn = {},
  bo = {},
  Vu;
function wv() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = oe(),
          r = _e(),
          n = Fa(),
          i = 500,
          a = 25,
          o = 1e3 * a;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, t.getCallBridge)(),
          s = (d) => {
            if (d && Object.values(d).some((p) => typeof p == "function"))
              throw new r.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          c = (d) => async (p) => {
            s(p);
            const v = { ...p, invokeType: `ui-${d.toLowerCase()}-fetch` },
              g = await u("invoke", v),
              { success: f, payload: h, error: _ } = g ?? {},
              b = { ...(f ? h : _) };
            if (b && b.headers)
              for (const m in b.headers)
                Array.isArray(b.headers[m]) && (b.headers[m] = b.headers[m].join(","));
            return b;
          },
          l = (d) => {
            const p = c(d);
            return (0, n.withRateLimiter)(
              p,
              i,
              o,
              `${d} invocation calls are rate limited at ${i}/${a}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(bo)),
    bo
  );
}
var Gu;
function gg() {
  if (Gu) return nn;
  ((Gu = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.invokeRemote = void 0));
  const e = wv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((nn.invokeRemote = t), nn);
}
var an = {},
  Hu;
function _g() {
  if (Hu) return an;
  ((Hu = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.invokeService = void 0));
  const e = wv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((an.invokeService = t), an);
}
var Wu;
function bg() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = et;
        (t.__exportStar(gg(), e), t.__exportStar(_g(), e));
      })(_o)),
    _o
  );
}
var mo = {},
  on = {},
  sn = {},
  Ku;
function mg() {
  if (Ku) return sn;
  ((Ku = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.submit = void 0));
  const e = oe(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((sn.submit = n), sn);
}
var un = {},
  Ju;
function yg() {
  if (Ju) return un;
  ((Ju = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.close = void 0));
  const e = oe(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        if ((await r("close", i)) === !1)
          throw new t.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((un.close = n), un);
}
var cn = {},
  Yu;
function wg() {
  if (Yu) return cn;
  ((Yu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.open = void 0));
  const e = oe(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      try {
        if ((await r("open")) === !1)
          throw new t.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new t.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((cn.open = n), cn);
}
var ln = {},
  Xu;
function Og() {
  if (Xu) return ln;
  ((Xu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.refresh = void 0));
  const e = oe(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((ln.refresh = n), ln);
}
var dn = {},
  Zu;
function Sg() {
  if (Zu) return dn;
  ((Zu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.createHistory = void 0));
  const t = (0, oe().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((i) => {
          n.location = i;
        }),
        n
      );
    };
  return ((dn.createHistory = r), dn);
}
var fn = {},
  yo = {},
  Ct = {},
  Qu;
function Ov() {
  return (
    Qu ||
      ((Qu = 1),
      Object.defineProperty(Ct, "__esModule", { value: !0 }),
      (Ct.FORGE_SUPPORTED_LOCALE_CODES =
        Ct.I18N_BUNDLE_FOLDER_NAME =
        Ct.I18N_INFO_FILE_NAME =
          void 0),
      (Ct.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Ct.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Ct.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Ct
  );
}
var Qt = {},
  ec;
function Eg() {
  if (ec) return Qt;
  ((ec = 1),
    Object.defineProperty(Qt, "__esModule", { value: !0 }),
    (Qt.TranslationsGetter = Qt.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  Qt.TranslationGetterError = t;
  class r {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(i) {
      this.resourcesAccessor = i;
    }
    async getTranslations(i, a = { fallback: !0 }) {
      const o = await this.getI18nInfoConfig(),
        { fallback: u } = a;
      if (!u) {
        let s;
        return (
          o.locales.includes(i) && (s = await this.getTranslationResource(i)),
          { translations: s ?? null, locale: i }
        );
      }
      for (const s of this.getLocaleLookupOrder(i, o)) {
        const c = await this.getTranslationResource(s);
        if (c) return { translations: c, locale: s };
      }
      return { translations: null, locale: i };
    }
    async getTranslationsByLocaleLookupOrder(i) {
      const a = await this.getI18nInfoConfig(),
        o = this.getLocaleLookupOrder(i, a);
      return await Promise.all(
        o.map(async (u) => {
          const s = await this.getTranslationResource(u);
          return { locale: u, translations: s };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(i) {
      let a = this.translationResources.get(i);
      if (!a)
        try {
          ((a = await this.resourcesAccessor.getTranslationResource(i)),
            this.translationResources.set(i, a));
        } catch (o) {
          throw o instanceof t ? o : new t(`Failed to get translation resource for locale: ${i}`);
        }
      return a;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (i) {
          throw i instanceof t ? i : new t("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(i, a) {
      const { locales: o, fallback: u } = a,
        s = [i],
        c = u[i];
      return (
        c && Array.isArray(c) && c.length > 0 && s.push(...c),
        e(s, a.fallback.default),
        s.filter((l) => o.includes(l))
      );
    }
  }
  return ((Qt.TranslationsGetter = r), Qt);
}
var vn = {},
  wo = {},
  tc;
function Sv() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = et.__importDefault(og()),
          n = (a, o, u) => {
            const s = a[u];
            return s ? (0, e.getTranslationValueFromContent)(s, o) : null;
          };
        e.getTranslationValue = n;
        const i = (a, o) => {
          let u = a[o];
          if (!u) {
            const s = o.split(".");
            s.length > 1 && (u = (0, r.default)(a, s, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = i;
      })(wo)),
    wo
  );
}
var rc;
function kg() {
  if (rc) return vn;
  ((rc = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.Translator = void 0));
  const e = Sv();
  class t {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(n, i) {
      ((this.locale = n), (this.translationsGetter = i));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(n) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let i = this.cache.get(n);
      if (i === void 0) {
        for (const { translations: a } of this.localeLookupOrderedTranslations) {
          const o = (0, e.getTranslationValueFromContent)(a, n);
          if (o !== null) {
            i = o;
            break;
          }
        }
        ((i = i ?? null), this.cache.set(n, i));
      }
      return i;
    }
  }
  return ((vn.Translator = t), vn);
}
var pn = {},
  nc;
function xg() {
  if (nc) return pn;
  ((nc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.ensureLocale = void 0));
  const e = Ov(),
    t = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    r = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    n = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (a, o) => {
        const [u] = o.split("-");
        return (a[u] || (a[u] = o), a);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    i = (a) => {
      const o = a.replace("_", "-");
      return t.has(o) ? o : (n[o] ?? r[o] ?? null);
    };
  return ((pn.ensureLocale = i), pn);
}
var Oo = {},
  ic;
function Rg() {
  return (
    ic ||
      ((ic = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const t = (c) => typeof c == "object" && c !== null && !Array.isArray(c),
          r = (c) => typeof c?.i18n == "string",
          n = (c) => c.startsWith("connect-"),
          i = (c) => c.startsWith("core:"),
          a = (c) => {
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
                          ? f.flatMap((_) => d(_, h))
                          : d(f, h);
                    }));
            return d(c, []);
          },
          o = (c) =>
            Object.entries(c).flatMap(([l, d]) =>
              !n(l) && !i(l) && d && Array.isArray(d) && d.length > 0 ? d.map((p) => [p, l]) : [],
            );
        e.getI18nSupportedModuleEntries = o;
        const u = (c) => {
          const l = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const p = a(d[0]);
            for (const { key: v } of p) l.add(v);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const s = (c) => {
          const l = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(c)) {
            const p = a(d[0]);
            for (const v of p) l.push({ moduleName: d[1], ...v });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = s;
      })(Oo)),
    Oo
  );
}
var So = {},
  ac;
function Pg() {
  return (ac || ((ac = 1), Object.defineProperty(So, "__esModule", { value: !0 })), So);
}
var oc;
function Ev() {
  return (
    oc ||
      ((oc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = et;
        (t.__exportStar(Ov(), e),
          t.__exportStar(Eg(), e),
          t.__exportStar(kg(), e),
          t.__exportStar(xg(), e));
        var r = Sv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Rg();
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
          t.__exportStar(Pg(), e));
      })(yo)),
    yo
  );
}
var sc;
function Cg() {
  if (sc) return fn;
  ((sc = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.getContext = void 0));
  const e = oe(),
    t = Ev(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var i;
      const a = await r("getContext"),
        o = a?.locale;
      return (o && (a.locale = (i = (0, t.ensureLocale)(o)) !== null && i !== void 0 ? i : o), a);
    };
  return ((fn.getContext = n), fn);
}
var hn = {},
  uc;
function Ag() {
  if (uc) return hn;
  ((uc = 1),
    Object.defineProperty(hn, "__esModule", { value: !0 }),
    (hn.changeWindowTitle = void 0));
  const e = oe(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        await r("changeWindowTitle", i);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((hn.changeWindowTitle = n), hn);
}
var gn = {},
  cc;
function Ig() {
  if (cc) return gn;
  ((cc = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.theme = void 0));
  const t = (0, oe().getCallBridge)();
  return ((gn.theme = { enable: () => t("enableTheming") }), gn);
}
var _n = {},
  bn = {},
  Eo = {},
  er = {},
  lc;
function kv() {
  if (lc) return er;
  ((lc = 1),
    Object.defineProperty(er, "__esModule", { value: !0 }),
    (er.blobToBase64 = er.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  er.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((er.blobToBase64 = t), er);
}
var dc;
function jg() {
  return (
    dc ||
      ((dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = kv(),
          r = (c) => {
            if (
              typeof c != "object" ||
              c === null ||
              Object.prototype.toString.call(c) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(c);
            if (l === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(c)
            );
          },
          n = async (c) => ({ data: await (0, t.blobToBase64)(c), type: c.type }),
          i = (c) => (0, t.base64ToBlob)(c.data, c.type),
          a = async (c) => {
            if (c instanceof Blob) return { ...(await n(c)), __isBlobData: !0 };
            if (Array.isArray(c))
              return Promise.all(c.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (c && r(c)) {
              const l = await Promise.all(
                Object.entries(c).map(async ([d, p]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(p),
                ]),
              );
              return Object.fromEntries(l);
            }
            return c;
          };
        e.serialiseBlobsInPayload = a;
        const o = (c) => {
          if (c && r(c) && "__isBlobData" in c) {
            const l = c;
            return i({ data: l.data, type: l.type });
          }
          if (Array.isArray(c)) return c.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (c && r(c)) {
            const l = {};
            for (const [d, p] of Object.entries(c)) l[d] = (0, e.deserialiseBlobsInPayload)(p);
            return l;
          }
          return c;
        };
        e.deserialiseBlobsInPayload = o;
        const u = (c) =>
          c instanceof Blob
            ? !0
            : Array.isArray(c)
              ? c.some((l) => (0, e.containsBlobs)(l))
              : c && r(c)
                ? Object.values(c).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = u;
        const s = (c) =>
          c && r(c) && "__isBlobData" in c
            ? !0
            : Array.isArray(c)
              ? c.some((l) => (0, e.containsSerialisedBlobs)(l))
              : c && r(c)
                ? Object.values(c).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = s;
      })(Eo)),
    Eo
  );
}
var fc;
function xv() {
  if (fc) return bn;
  ((fc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.events = void 0));
  const e = oe(),
    t = jg(),
    r = (0, e.getCallBridge)(),
    n = async (a, o) => {
      let u = o;
      return (
        (0, t.containsBlobs)(o) && (u = await (0, t.serialiseBlobsInPayload)(o)),
        r("emit", { event: a, payload: u })
      );
    },
    i = (a, o) =>
      r("on", {
        event: a,
        callback: (s) => {
          let c = s;
          return (
            (0, t.containsSerialisedBlobs)(s) && (c = (0, t.deserialiseBlobsInPayload)(s)),
            o(c)
          );
        },
      });
  return ((bn.events = { emit: n, on: i }), bn);
}
var vc;
function Dg() {
  if (vc) return _n;
  ((vc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.emitReadyEvent = void 0));
  const e = xv(),
    t = Iv(),
    r = "EXTENSION_READY",
    n = async () => {
      const i = await t.view.getContext();
      await e.events.emit(r, { localId: i.localId });
    };
  return ((_n.emitReadyEvent = n), _n);
}
const Tg = "modulepreload",
  Mg = function (e, t) {
    return new URL(e, t).href;
  },
  pc = {},
  Rv = function (t, r, n) {
    let i = Promise.resolve();
    if (r && r.length > 0) {
      let c = function (l) {
        return Promise.all(
          l.map((d) =>
            Promise.resolve(d).then(
              (p) => ({ status: "fulfilled", value: p }),
              (p) => ({ status: "rejected", reason: p }),
            ),
          ),
        );
      };
      const o = document.getElementsByTagName("link"),
        u = document.querySelector("meta[property=csp-nonce]"),
        s = u?.nonce || u?.getAttribute("nonce");
      i = c(
        r.map((l) => {
          if (((l = Mg(l, n)), l in pc)) return;
          pc[l] = !0;
          const d = l.endsWith(".css"),
            p = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let g = o.length - 1; g >= 0; g--) {
              const f = o[g];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : Tg),
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
    function a(o) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = o), window.dispatchEvent(u), !u.defaultPrevented)) throw o;
    }
    return i.then((o) => {
      for (const u of o || []) u.status === "rejected" && a(u.reason);
      return t().catch(a);
    });
  };
var mn = {},
  ko = {},
  yn = {},
  Wi = {},
  hc;
function Pv() {
  if (hc) return Wi;
  ((hc = 1), Object.defineProperty(Wi, "__esModule", { value: !0 }), (Wi.default = r));
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
  return Wi;
}
var Or = {},
  wn = {},
  On = {},
  gc;
function Fg() {
  if (gc) return On;
  ((gc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((On.default = e), On);
}
var _c;
function La() {
  if (_c) return wn;
  ((_c = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.default = void 0));
  var e = t(Fg());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var n = r;
  return ((wn.default = n), wn);
}
var bc;
function Ba() {
  if (bc) return Or;
  ((bc = 1),
    Object.defineProperty(Or, "__esModule", { value: !0 }),
    (Or.default = void 0),
    (Or.unsafeStringify = n));
  var e = t(La());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  const r = [];
  for (let o = 0; o < 256; ++o) r.push((o + 256).toString(16).slice(1));
  function n(o, u = 0) {
    return (
      r[o[u + 0]] +
      r[o[u + 1]] +
      r[o[u + 2]] +
      r[o[u + 3]] +
      "-" +
      r[o[u + 4]] +
      r[o[u + 5]] +
      "-" +
      r[o[u + 6]] +
      r[o[u + 7]] +
      "-" +
      r[o[u + 8]] +
      r[o[u + 9]] +
      "-" +
      r[o[u + 10]] +
      r[o[u + 11]] +
      r[o[u + 12]] +
      r[o[u + 13]] +
      r[o[u + 14]] +
      r[o[u + 15]]
    );
  }
  function i(o, u = 0) {
    const s = n(o, u);
    if (!(0, e.default)(s)) throw TypeError("Stringified UUID is invalid");
    return s;
  }
  var a = i;
  return ((Or.default = a), Or);
}
var mc;
function Lg() {
  if (mc) return yn;
  ((mc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.default = void 0));
  var e = r(Pv()),
    t = Ba();
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  let n,
    i,
    a = 0,
    o = 0;
  function u(c, l, d) {
    let p = (l && d) || 0;
    const v = l || new Array(16);
    c = c || {};
    let g = c.node || n,
      f = c.clockseq !== void 0 ? c.clockseq : i;
    if (g == null || f == null) {
      const w = c.random || (c.rng || e.default)();
      (g == null && (g = n = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = i = ((w[6] << 8) | w[7]) & 16383));
    }
    let h = c.msecs !== void 0 ? c.msecs : Date.now(),
      _ = c.nsecs !== void 0 ? c.nsecs : o + 1;
    const b = h - a + (_ - o) / 1e4;
    if (
      (b < 0 && c.clockseq === void 0 && (f = (f + 1) & 16383),
      (b < 0 || h > a) && c.nsecs === void 0 && (_ = 0),
      _ >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((a = h), (o = _), (i = f), (h += 122192928e5));
    const m = ((h & 268435455) * 1e4 + _) % 4294967296;
    ((v[p++] = (m >>> 24) & 255),
      (v[p++] = (m >>> 16) & 255),
      (v[p++] = (m >>> 8) & 255),
      (v[p++] = m & 255));
    const O = ((h / 4294967296) * 1e4) & 268435455;
    ((v[p++] = (O >>> 8) & 255),
      (v[p++] = O & 255),
      (v[p++] = ((O >>> 24) & 15) | 16),
      (v[p++] = (O >>> 16) & 255),
      (v[p++] = (f >>> 8) | 128),
      (v[p++] = f & 255));
    for (let w = 0; w < 6; ++w) v[p + w] = g[w];
    return l || (0, t.unsafeStringify)(v);
  }
  var s = u;
  return ((yn.default = s), yn);
}
var Sn = {},
  $t = {},
  En = {},
  yc;
function Cv() {
  if (yc) return En;
  ((yc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.default = void 0));
  var e = t(La());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    let a;
    const o = new Uint8Array(16);
    return (
      (o[0] = (a = parseInt(i.slice(0, 8), 16)) >>> 24),
      (o[1] = (a >>> 16) & 255),
      (o[2] = (a >>> 8) & 255),
      (o[3] = a & 255),
      (o[4] = (a = parseInt(i.slice(9, 13), 16)) >>> 8),
      (o[5] = a & 255),
      (o[6] = (a = parseInt(i.slice(14, 18), 16)) >>> 8),
      (o[7] = a & 255),
      (o[8] = (a = parseInt(i.slice(19, 23), 16)) >>> 8),
      (o[9] = a & 255),
      (o[10] = ((a = parseInt(i.slice(24, 36), 16)) / 1099511627776) & 255),
      (o[11] = (a / 4294967296) & 255),
      (o[12] = (a >>> 24) & 255),
      (o[13] = (a >>> 16) & 255),
      (o[14] = (a >>> 8) & 255),
      (o[15] = a & 255),
      o
    );
  }
  var n = r;
  return ((En.default = n), En);
}
var wc;
function Av() {
  if (wc) return $t;
  ((wc = 1),
    Object.defineProperty($t, "__esModule", { value: !0 }),
    ($t.URL = $t.DNS = void 0),
    ($t.default = o));
  var e = Ba(),
    t = r(Cv());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function n(u) {
    u = unescape(encodeURIComponent(u));
    const s = [];
    for (let c = 0; c < u.length; ++c) s.push(u.charCodeAt(c));
    return s;
  }
  const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  $t.DNS = i;
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  $t.URL = a;
  function o(u, s, c) {
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
        (h = c(h)),
        (h[6] = (h[6] & 15) | s),
        (h[8] = (h[8] & 63) | 128),
        v)
      ) {
        g = g || 0;
        for (let _ = 0; _ < 16; ++_) v[g + _] = h[_];
        return v;
      }
      return (0, e.unsafeStringify)(h);
    }
    try {
      l.name = u;
    } catch {}
    return ((l.DNS = i), (l.URL = a), l);
  }
  return $t;
}
var kn = {},
  Oc;
function Bg() {
  if (Oc) return kn;
  ((Oc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.default = void 0));
  function e(v) {
    if (typeof v == "string") {
      const g = unescape(encodeURIComponent(v));
      v = new Uint8Array(g.length);
      for (let f = 0; f < g.length; ++f) v[f] = g.charCodeAt(f);
    }
    return t(n(i(v), v.length * 8));
  }
  function t(v) {
    const g = [],
      f = v.length * 32,
      h = "0123456789abcdef";
    for (let _ = 0; _ < f; _ += 8) {
      const b = (v[_ >> 5] >>> (_ % 32)) & 255,
        m = parseInt(h.charAt((b >>> 4) & 15) + h.charAt(b & 15), 16);
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
      _ = -1732584194,
      b = 271733878;
    for (let m = 0; m < v.length; m += 16) {
      const O = f,
        w = h,
        S = _,
        k = b;
      ((f = s(f, h, _, b, v[m], 7, -680876936)),
        (b = s(b, f, h, _, v[m + 1], 12, -389564586)),
        (_ = s(_, b, f, h, v[m + 2], 17, 606105819)),
        (h = s(h, _, b, f, v[m + 3], 22, -1044525330)),
        (f = s(f, h, _, b, v[m + 4], 7, -176418897)),
        (b = s(b, f, h, _, v[m + 5], 12, 1200080426)),
        (_ = s(_, b, f, h, v[m + 6], 17, -1473231341)),
        (h = s(h, _, b, f, v[m + 7], 22, -45705983)),
        (f = s(f, h, _, b, v[m + 8], 7, 1770035416)),
        (b = s(b, f, h, _, v[m + 9], 12, -1958414417)),
        (_ = s(_, b, f, h, v[m + 10], 17, -42063)),
        (h = s(h, _, b, f, v[m + 11], 22, -1990404162)),
        (f = s(f, h, _, b, v[m + 12], 7, 1804603682)),
        (b = s(b, f, h, _, v[m + 13], 12, -40341101)),
        (_ = s(_, b, f, h, v[m + 14], 17, -1502002290)),
        (h = s(h, _, b, f, v[m + 15], 22, 1236535329)),
        (f = c(f, h, _, b, v[m + 1], 5, -165796510)),
        (b = c(b, f, h, _, v[m + 6], 9, -1069501632)),
        (_ = c(_, b, f, h, v[m + 11], 14, 643717713)),
        (h = c(h, _, b, f, v[m], 20, -373897302)),
        (f = c(f, h, _, b, v[m + 5], 5, -701558691)),
        (b = c(b, f, h, _, v[m + 10], 9, 38016083)),
        (_ = c(_, b, f, h, v[m + 15], 14, -660478335)),
        (h = c(h, _, b, f, v[m + 4], 20, -405537848)),
        (f = c(f, h, _, b, v[m + 9], 5, 568446438)),
        (b = c(b, f, h, _, v[m + 14], 9, -1019803690)),
        (_ = c(_, b, f, h, v[m + 3], 14, -187363961)),
        (h = c(h, _, b, f, v[m + 8], 20, 1163531501)),
        (f = c(f, h, _, b, v[m + 13], 5, -1444681467)),
        (b = c(b, f, h, _, v[m + 2], 9, -51403784)),
        (_ = c(_, b, f, h, v[m + 7], 14, 1735328473)),
        (h = c(h, _, b, f, v[m + 12], 20, -1926607734)),
        (f = l(f, h, _, b, v[m + 5], 4, -378558)),
        (b = l(b, f, h, _, v[m + 8], 11, -2022574463)),
        (_ = l(_, b, f, h, v[m + 11], 16, 1839030562)),
        (h = l(h, _, b, f, v[m + 14], 23, -35309556)),
        (f = l(f, h, _, b, v[m + 1], 4, -1530992060)),
        (b = l(b, f, h, _, v[m + 4], 11, 1272893353)),
        (_ = l(_, b, f, h, v[m + 7], 16, -155497632)),
        (h = l(h, _, b, f, v[m + 10], 23, -1094730640)),
        (f = l(f, h, _, b, v[m + 13], 4, 681279174)),
        (b = l(b, f, h, _, v[m], 11, -358537222)),
        (_ = l(_, b, f, h, v[m + 3], 16, -722521979)),
        (h = l(h, _, b, f, v[m + 6], 23, 76029189)),
        (f = l(f, h, _, b, v[m + 9], 4, -640364487)),
        (b = l(b, f, h, _, v[m + 12], 11, -421815835)),
        (_ = l(_, b, f, h, v[m + 15], 16, 530742520)),
        (h = l(h, _, b, f, v[m + 2], 23, -995338651)),
        (f = d(f, h, _, b, v[m], 6, -198630844)),
        (b = d(b, f, h, _, v[m + 7], 10, 1126891415)),
        (_ = d(_, b, f, h, v[m + 14], 15, -1416354905)),
        (h = d(h, _, b, f, v[m + 5], 21, -57434055)),
        (f = d(f, h, _, b, v[m + 12], 6, 1700485571)),
        (b = d(b, f, h, _, v[m + 3], 10, -1894986606)),
        (_ = d(_, b, f, h, v[m + 10], 15, -1051523)),
        (h = d(h, _, b, f, v[m + 1], 21, -2054922799)),
        (f = d(f, h, _, b, v[m + 8], 6, 1873313359)),
        (b = d(b, f, h, _, v[m + 15], 10, -30611744)),
        (_ = d(_, b, f, h, v[m + 6], 15, -1560198380)),
        (h = d(h, _, b, f, v[m + 13], 21, 1309151649)),
        (f = d(f, h, _, b, v[m + 4], 6, -145523070)),
        (b = d(b, f, h, _, v[m + 11], 10, -1120210379)),
        (_ = d(_, b, f, h, v[m + 2], 15, 718787259)),
        (h = d(h, _, b, f, v[m + 9], 21, -343485551)),
        (f = a(f, O)),
        (h = a(h, w)),
        (_ = a(_, S)),
        (b = a(b, k)));
    }
    return [f, h, _, b];
  }
  function i(v) {
    if (v.length === 0) return [];
    const g = v.length * 8,
      f = new Uint32Array(r(g));
    for (let h = 0; h < g; h += 8) f[h >> 5] |= (v[h / 8] & 255) << (h % 32);
    return f;
  }
  function a(v, g) {
    const f = (v & 65535) + (g & 65535);
    return (((v >> 16) + (g >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function o(v, g) {
    return (v << g) | (v >>> (32 - g));
  }
  function u(v, g, f, h, _, b) {
    return a(o(a(a(g, v), a(h, b)), _), f);
  }
  function s(v, g, f, h, _, b, m) {
    return u((g & f) | (~g & h), v, g, _, b, m);
  }
  function c(v, g, f, h, _, b, m) {
    return u((g & h) | (f & ~h), v, g, _, b, m);
  }
  function l(v, g, f, h, _, b, m) {
    return u(g ^ f ^ h, v, g, _, b, m);
  }
  function d(v, g, f, h, _, b, m) {
    return u(f ^ (g | ~h), v, g, _, b, m);
  }
  var p = e;
  return ((kn.default = p), kn);
}
var Sc;
function Ng() {
  if (Sc) return Sn;
  ((Sc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.default = void 0));
  var e = r(Av()),
    t = r(Bg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v3", 48, t.default);
  return ((Sn.default = i), Sn);
}
var xn = {},
  Rn = {},
  Ec;
function Ug() {
  if (Ec) return Rn;
  ((Ec = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Rn.default = t), Rn);
}
var kc;
function qg() {
  if (kc) return xn;
  ((kc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.default = void 0));
  var e = n(Ug()),
    t = n(Pv()),
    r = Ba();
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o, u, s) {
    if (e.default.randomUUID && !u && !o) return e.default.randomUUID();
    o = o || {};
    const c = o.random || (o.rng || t.default)();
    if (((c[6] = (c[6] & 15) | 64), (c[8] = (c[8] & 63) | 128), u)) {
      s = s || 0;
      for (let l = 0; l < 16; ++l) u[s + l] = c[l];
      return u;
    }
    return (0, r.unsafeStringify)(c);
  }
  var a = i;
  return ((xn.default = a), xn);
}
var Pn = {},
  Cn = {},
  xc;
function zg() {
  if (xc) return Cn;
  ((xc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  function e(i, a, o, u) {
    switch (i) {
      case 0:
        return (a & o) ^ (~a & u);
      case 1:
        return a ^ o ^ u;
      case 2:
        return (a & o) ^ (a & u) ^ (o & u);
      case 3:
        return a ^ o ^ u;
    }
  }
  function t(i, a) {
    return (i << a) | (i >>> (32 - a));
  }
  function r(i) {
    const a = [1518500249, 1859775393, 2400959708, 3395469782],
      o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof i == "string") {
      const l = unescape(encodeURIComponent(i));
      i = [];
      for (let d = 0; d < l.length; ++d) i.push(l.charCodeAt(d));
    } else Array.isArray(i) || (i = Array.prototype.slice.call(i));
    i.push(128);
    const u = i.length / 4 + 2,
      s = Math.ceil(u / 16),
      c = new Array(s);
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        d[p] =
          (i[l * 64 + p * 4] << 24) |
          (i[l * 64 + p * 4 + 1] << 16) |
          (i[l * 64 + p * 4 + 2] << 8) |
          i[l * 64 + p * 4 + 3];
      c[l] = d;
    }
    ((c[s - 1][14] = ((i.length - 1) * 8) / Math.pow(2, 32)),
      (c[s - 1][14] = Math.floor(c[s - 1][14])),
      (c[s - 1][15] = ((i.length - 1) * 8) & 4294967295));
    for (let l = 0; l < s; ++l) {
      const d = new Uint32Array(80);
      for (let _ = 0; _ < 16; ++_) d[_] = c[l][_];
      for (let _ = 16; _ < 80; ++_) d[_] = t(d[_ - 3] ^ d[_ - 8] ^ d[_ - 14] ^ d[_ - 16], 1);
      let p = o[0],
        v = o[1],
        g = o[2],
        f = o[3],
        h = o[4];
      for (let _ = 0; _ < 80; ++_) {
        const b = Math.floor(_ / 20),
          m = (t(p, 5) + e(b, v, g, f) + h + a[b] + d[_]) >>> 0;
        ((h = f), (f = g), (g = t(v, 30) >>> 0), (v = p), (p = m));
      }
      ((o[0] = (o[0] + p) >>> 0),
        (o[1] = (o[1] + v) >>> 0),
        (o[2] = (o[2] + g) >>> 0),
        (o[3] = (o[3] + f) >>> 0),
        (o[4] = (o[4] + h) >>> 0));
    }
    return [
      (o[0] >> 24) & 255,
      (o[0] >> 16) & 255,
      (o[0] >> 8) & 255,
      o[0] & 255,
      (o[1] >> 24) & 255,
      (o[1] >> 16) & 255,
      (o[1] >> 8) & 255,
      o[1] & 255,
      (o[2] >> 24) & 255,
      (o[2] >> 16) & 255,
      (o[2] >> 8) & 255,
      o[2] & 255,
      (o[3] >> 24) & 255,
      (o[3] >> 16) & 255,
      (o[3] >> 8) & 255,
      o[3] & 255,
      (o[4] >> 24) & 255,
      (o[4] >> 16) & 255,
      (o[4] >> 8) & 255,
      o[4] & 255,
    ];
  }
  var n = r;
  return ((Cn.default = n), Cn);
}
var Rc;
function $g() {
  if (Rc) return Pn;
  ((Rc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.default = void 0));
  var e = r(Av()),
    t = r(zg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v5", 80, t.default);
  return ((Pn.default = i), Pn);
}
var An = {},
  Pc;
function Vg() {
  if (Pc) return An;
  ((Pc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((An.default = e), An);
}
var In = {},
  Cc;
function Gg() {
  if (Cc) return In;
  ((Cc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
  var e = t(La());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var n = r;
  return ((In.default = n), In);
}
var Ac;
function Hg() {
  return (
    Ac ||
      ((Ac = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(e, "parse", {
            enumerable: !0,
            get: function () {
              return c.default;
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
              return i.default;
            },
          }),
          Object.defineProperty(e, "validate", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          }));
        var t = l(Lg()),
          r = l(Ng()),
          n = l(qg()),
          i = l($g()),
          a = l(Vg()),
          o = l(Gg()),
          u = l(La()),
          s = l(Ba()),
          c = l(Cv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(ko)),
    ko
  );
}
var Ic;
function Wg() {
  if (Ic) return mn;
  ((Ic = 1),
    Object.defineProperty(mn, "__esModule", { value: !0 }),
    (mn.createAdfRendererIframeProps = void 0));
  const e = Hg(),
    t = async (r, n) => {
      const i = await Rv(
          () => import("./index-JJ6DjNTc.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        a = i.default || i,
        o = new URL(document.referrer).origin,
        u = `${o}/forge-apps/adf-renderer`,
        s = n || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        c = () => {
          var l, d;
          const p = document.getElementById(s),
            v = {
              type: "adf-document",
              document: (l = r.extension.macro) === null || l === void 0 ? void 0 : l.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: r.localId,
            };
          (a.iframeResizer(
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
            (d = p?.contentWindow) === null || d === void 0 || d.postMessage(v, o));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: s, src: u, onLoad: c }
      );
    };
  return ((mn.createAdfRendererIframeProps = t), mn);
}
var jc;
function Iv() {
  if (jc) return on;
  ((jc = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.view = void 0));
  const e = mg(),
    t = yg(),
    r = wg(),
    n = Og(),
    i = Sg(),
    a = Cg(),
    o = Ag(),
    u = Ig(),
    s = Dg(),
    c = Wg();
  return (
    (on.view = {
      submit: e.submit,
      close: t.close,
      open: r.open,
      refresh: n.refresh,
      createHistory: i.createHistory,
      getContext: a.getContext,
      theme: u.theme,
      changeWindowTitle: o.changeWindowTitle,
      emitReadyEvent: s.emitReadyEvent,
      createAdfRendererIframeProps: c.createAdfRendererIframeProps,
    }),
    on
  );
}
var Dc;
function eu() {
  return (
    Dc ||
      ((Dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), et.__exportStar(Iv(), e));
      })(mo)),
    mo
  );
}
var xo = {},
  jn = {},
  Tc;
function Kg() {
  if (Tc) return jn;
  ((Tc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.router = void 0));
  const t = (0, oe().getCallBridge)(),
    r = async (o) => {
      if (!o?.target) throw new Error("target is required for getUrl");
      const u = await t("getUrl", o);
      if (!u) throw new Error("Failed to get URL");
      try {
        return new URL(u);
      } catch (s) {
        throw new Error(`Failed to parse URL: ${u} (${s})`);
      }
    },
    n = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "same-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "same-tab" });
    },
    i = (o) => {
      if (typeof o == "string") return t("navigate", { url: o, type: "new-tab" });
      if (!o?.target) throw new Error("target is required for navigation");
      return t("navigate", { ...o, type: "new-tab" });
    },
    a = async () => t("reload");
  return ((jn.router = { getUrl: r, navigate: n, open: i, reload: a }), jn);
}
var Mc;
function Jg() {
  return (
    Mc ||
      ((Mc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), et.__exportStar(Kg(), e));
      })(xo)),
    xo
  );
}
var Ro = {},
  Dn = {},
  Fc;
function Yg() {
  if (Fc) return Dn;
  ((Fc = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.Modal = void 0));
  const e = oe(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = () => {};
  class i {
    constructor(o) {
      var u, s;
      ((this.resource = o?.resource || null),
        (this.onClose = o?.onClose || n),
        (this.size = o?.size || "medium"),
        (this.context = o?.context || {}),
        (this.closeOnEscape = (u = o?.closeOnEscape) !== null && u !== void 0 ? u : !0),
        (this.closeOnOverlayClick =
          (s = o?.closeOnOverlayClick) !== null && s !== void 0 ? s : !0));
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
  return ((Dn.Modal = i), Dn);
}
var Lc;
function Xg() {
  return (
    Lc ||
      ((Lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), et.__exportStar(Yg(), e));
      })(Ro)),
    Ro
  );
}
var it = {},
  tr = {},
  Bc;
function Zg() {
  if (Bc) return tr;
  ((Bc = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.productFetchApi = tr.remoteFetchApi = void 0));
  const e = kv(),
    t = async (o) => {
      const u = {};
      for (const [s, c] of o.entries())
        if (s === "file") {
          const l = c.name,
            d = c.type;
          ((u.file = await (0, e.blobToBase64)(c)), (u.__fileName = l), (u.__fileType = d));
        } else u[s] = c;
      return JSON.stringify(u);
    },
    r = (o) => {
      if (!o) return o;
      if ("signal" in o) {
        const { signal: u, ...s } = o;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          s
        );
      }
      return o;
    },
    n = async (o) => {
      const u = o?.body instanceof FormData,
        s = u ? await t(o?.body) : o?.body,
        c = new Request("", { body: s, method: o?.method, headers: o?.headers }),
        l = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(l),
        isMultipartFormData: u,
      };
    },
    i = (o) => {
      const u = async (s, c) => {
        const l = r(c),
          { body: d, headers: p, isMultipartFormData: v } = await n(l),
          g = {
            remoteKey: s,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: h,
            statusText: _,
            status: b,
            isAttachment: m,
          } = await o("fetchRemote", g),
          O = m ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(O || null, { headers: h, status: b, statusText: _ });
      };
      return { requestRemote: (s, c) => u(s, c) };
    };
  tr.remoteFetchApi = i;
  const a = (o) => {
    const u = async (s, c, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: g } = await n(d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: s,
          restPath: c,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: g,
        },
        {
          body: h,
          headers: _,
          statusText: b,
          status: m,
          isAttachment: O,
        } = await o("fetchProduct", f),
        w = O ? (0, e.base64ToBlob)(h, _["content-type"]) : h;
      return new Response(w || null, { headers: _, status: m, statusText: b });
    };
    return {
      requestConfluence: (s, c) => u("confluence", s, c),
      requestJira: (s, c) => u("jira", s, c),
      requestBitbucket: (s, c) => u("bitbucket", s, c),
    };
  };
  return ((tr.productFetchApi = a), tr);
}
var Nc;
function Qg() {
  if (Nc) return it;
  Nc = 1;
  var e;
  (Object.defineProperty(it, "__esModule", { value: !0 }),
    (it.requestRemote = it.requestBitbucket = it.requestJira = it.requestConfluence = void 0));
  const t = oe(),
    r = Zg();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (it.requestConfluence = e.requestConfluence),
    (it.requestJira = e.requestJira),
    (it.requestBitbucket = e.requestBitbucket),
    (it.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    it
  );
}
var Po = {},
  Tn = {},
  Uc;
function e_() {
  if (Uc) return Tn;
  ((Uc = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.showFlag = void 0));
  const e = oe(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = (i) => {
      var a;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await o, r("closeFlag", { id: i.id })) };
    };
  return ((Tn.showFlag = n), Tn);
}
var qc;
function t_() {
  return (
    qc ||
      ((qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = e_();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Po)),
    Po
  );
}
var Co = {},
  zc;
function r_() {
  return (
    zc ||
      ((zc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), et.__exportStar(xv(), e));
      })(Co)),
    Co
  );
}
var Ao = {},
  Mn = {},
  $c;
function n_() {
  if ($c) return Mn;
  (($c = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.realtime = void 0));
  const t = (0, oe().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    i = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    a = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((Mn.realtime = { publish: r, subscribe: n, publishGlobal: i, subscribeGlobal: a }), Mn);
}
var Io = {},
  Vc;
function i_() {
  return (
    Vc ||
      ((Vc = 1),
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
      })(Io)),
    Io
  );
}
var Gc;
function a_() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = n_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = i_();
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
      })(Ao)),
    Ao
  );
}
var jo = {},
  Fn = {},
  Do = {},
  Hc;
function o_() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = oe(),
          r = _e(),
          n = 30,
          i = (0, t.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const a = (u) => {
            switch (u.type) {
              case "forge":
                return { agentName: u.agentName, agentKey: u.agentKey, prompt: u.prompt };
              case "atlassian":
                return { agentName: u.agentName, prompt: u.prompt };
              default:
                return { prompt: u.prompt };
            }
          },
          o = async (u) => {
            if (u.type === "forge") {
              if (u.agentName.length > n) throw new Error("rovo agent name too long");
              if (u.agentKey.length > n) throw new Error("rovo agent key too long");
            }
            const s = a(u);
            if ((await i("openRovo", s)) === !1)
              throw new r.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = o;
      })(Do)),
    Do
  );
}
var Wc;
function s_() {
  if (Wc) return Fn;
  ((Wc = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.rovo = void 0));
  const e = o_();
  return ((Fn.rovo = { open: e.open }), Fn);
}
var Kc;
function u_() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), et.__exportStar(s_(), e));
      })(jo)),
    jo
  );
}
var At = {},
  Jc;
function c_() {
  if (Jc) return At;
  ((Jc = 1),
    Object.defineProperty(At, "__esModule", { value: !0 }),
    (At.createTranslationFunction = At.getTranslations = At.resetTranslationsCache = void 0));
  const e = Ev(),
    t = eu(),
    r = {
      getI18nInfoConfig: async () => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!u.ok) throw new Error("Failed to get i18n info config: " + u.statusText);
        return (await u.json()).config;
      },
      getTranslationResource: async (u) => {
        const s = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${u}.json`);
        if (!s.ok) throw new Error(`Failed to get translation resource for locale: ${u}`);
        return s.json();
      },
    },
    n = new e.TranslationsGetter(r),
    i = () => {
      n.reset();
    };
  At.resetTranslationsCache = i;
  const a = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  At.getTranslations = a;
  const o = async (u = null) => {
    let s = u;
    s || (s = (await t.view.getContext()).locale);
    const c = new e.Translator(s, n);
    return (
      await c.init(),
      (l, d) => {
        var p, v;
        return (v = (p = c.translate(l)) !== null && p !== void 0 ? p : d) !== null && v !== void 0
          ? v
          : l;
      }
    );
  };
  return ((At.createTranslationFunction = o), At);
}
var To = {},
  Ln = {},
  Yc;
function l_() {
  if (Yc) return Ln;
  ((Yc = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.permissions = void 0));
  const t = (0, oe().getCallBridge)(),
    r = async (s) => t("__permission__egressGet", s),
    n = async (s) => t("__permission__egressSet", s),
    i = async (s) => t("__permission__egressDeleteDomain", s),
    a = async (s) => t("__permission__egressDeleteGroup", s),
    o = async (s) => t("__permission__remoteGet", s),
    u = async (s) => t("__permission__remoteSet", s);
  return (
    (Ln.permissions = {
      egress: { get: r, set: n, deleteDomain: i, deleteGroup: a },
      remote: { get: o, set: u },
    }),
    Ln
  );
}
var Xc;
function d_() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), et.__exportStar(l_(), e));
      })(To)),
    To
  );
}
var Mo = {},
  Fo = {},
  Lo = {},
  Bn = {},
  Nn = {},
  Zc;
function jv() {
  return (
    Zc ||
      ((Zc = 1),
      Object.defineProperty(Nn, "__esModule", { value: !0 }),
      (Nn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Nn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Nn
  );
}
var Qc;
function Na() {
  if (Qc) return Bn;
  ((Qc = 1),
    Object.defineProperty(Bn, "__esModule", { value: !0 }),
    (Bn.checkRestrictedEnvironment = void 0));
  const e = _e(),
    t = eu(),
    r = jv(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Bn.checkRestrictedEnvironment = n), Bn);
}
var el;
function f_() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Ti(),
          r = _e(),
          n = Na(),
          a = (0, oe().getCallBridge)(),
          o = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const g = new Uint8Array(v);
            return new Blob([g], { type: d || "application/octet-stream" });
          },
          u = async (l) => {
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
            const p = d.map((b, m) => {
                if (b instanceof Blob) return b;
                if (!(b && typeof b == "object" && "data" in b && typeof b.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return o(b.data, b.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((b) => u(b))),
              g = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!g || typeof g != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              p.forEach((b, m) => {
                const O = v[m];
                (f.set(O.checksum, b), h.set(O.checksum, m));
              }),
              Object.entries(g).map(([b, m]) => {
                const { key: O, checksum: w } = m,
                  S = f.get(w),
                  k = h.get(w);
                return k === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: O,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const I = await fetch(b, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: I.ok,
                              key: O,
                              status: I.status,
                              error: I.ok ? void 0 : `Upload failed with status ${I.status}`,
                            };
                          } catch (I) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: I instanceof Error ? I.message : "Upload failed",
                            };
                          }
                        })(),
                        index: k,
                        objectType: S.type,
                        objectSize: S.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: k,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const c = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((g) => g.promise));
        };
        e.upload = c;
      })(Lo)),
    Lo
  );
}
var Un = {},
  tl;
function v_() {
  if (tl) return Un;
  ((tl = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.deleteObjects = void 0));
  const e = Ti(),
    t = _e(),
    r = Na(),
    i = (0, oe().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "delete" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        u.map(async (s) => {
          await (0, e.invoke)(o, { key: s });
        }),
      );
    };
  return ((Un.deleteObjects = a), Un);
}
var qn = {},
  rl;
function p_() {
  if (rl) return qn;
  ((rl = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.download = void 0));
  const e = Ti(),
    t = _e(),
    r = Na(),
    i = (0, oe().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "download" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      const s = await (0, e.invoke)(o, { keys: u });
      if (!s || typeof s != "object")
        throw new t.BridgeAPIError("Invalid response from functionKey");
      const c = Object.entries(s).map(async ([d, p]) => {
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
      return await Promise.all(c);
    };
  return ((qn.download = a), qn);
}
var zn = {},
  nl;
function h_() {
  if (nl) return zn;
  ((nl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.getMetadata = void 0));
  const e = Ti(),
    t = _e(),
    r = Na(),
    i = (0, oe().getCallBridge)(),
    a = async ({ functionKey: o, keys: u }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i("trackObjectStoreAction", { action: "getMetadata" }),
        !o || o.length === 0)
      )
        throw new t.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(u) || u.length === 0)
        throw new t.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        u.map(async (c) => {
          const l = await (0, e.invoke)(o, { key: c });
          return !l || typeof l != "object"
            ? { key: c, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((zn.getMetadata = a), zn);
}
var il;
function g_() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = f_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = v_(),
          n = p_(),
          i = h_();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: i.getMetadata,
          delete: r.deleteObjects,
        };
      })(Fo)),
    Fo
  );
}
var al;
function __() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = et;
        (t.__exportStar(g_(), e), t.__exportStar(jv(), e));
      })(Mo)),
    Mo
  );
}
var Bo = {},
  $n = {},
  rr = {},
  Sr = {},
  Ki = {},
  ol;
function b_() {
  if (ol) return Ki;
  ((ol = 1), Object.defineProperty(Ki, "__esModule", { value: !0 }));
  const e = Kt();
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
    setValues(n, i) {
      var a;
      if (!n) return !1;
      const o = (0, e._typedJsonParse)(n.data, "has_updates", "EvaluationResponse");
      return o == null
        ? !1
        : ((this._source = n.source),
          o?.has_updates !== !0 ||
            ((this._rawValues = n.data),
            (this._lcut = o.time),
            (this._receivedAt = n.receivedAt),
            (this._values = o),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(n.source, o)),
            n.source && o.user && this._setWarningState(i, o),
            e.SDKFlags.setFlags(this._sdkKey, (a = o.sdk_flags) !== null && a !== void 0 ? a : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.feature_gates,
        n,
      );
    }
    getConfig(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.dynamic_configs,
        n,
      );
    }
    getLayer(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.layer_configs,
        n,
      );
    }
    getParamStore(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.param_stores,
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
    _extractBootstrapMetadata(n, i) {
      if (n !== "Bootstrap") return null;
      const a = {};
      return (
        i.user && (a.user = i.user),
        i.sdkInfo && (a.generatorSDKInfo = i.sdkInfo),
        (a.lcut = i.time),
        a
      );
    }
    _getDetailedStoreResult(n, i) {
      let a = null;
      return (
        n && (a = n[i] ? n[i] : n[(0, e._DJB2)(i)]),
        { result: a, details: this._getDetails(a == null) }
      );
    }
    _setWarningState(n, i) {
      var a, o;
      const u = e.StableID.get(this._sdkKey);
      if (
        ((a = n.customIDs) === null || a === void 0 ? void 0 : a.stableID) !== u &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || u)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const s = i.user;
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
      var i, a;
      const o = this.getCurrentSourceDetails();
      let u = o.reason;
      const s = (i = o.warnings) !== null && i !== void 0 ? i : [];
      (this._source === "Bootstrap" && s.length > 0 && (u = u + s[0]),
        u !== "Uninitialized" &&
          u !== "NoValues" &&
          (u = `${u}:${n ? "Unrecognized" : "Recognized"}`));
      const c =
        this._source === "Bootstrap" && (a = this._bootstrapMetadata) !== null && a !== void 0
          ? a
          : void 0;
      return (c && (o.bootstrapMetadata = c), Object.assign(Object.assign({}, o), { reason: u }));
    }
  }
  return ((Ki.default = t), Ki);
}
var Er = {},
  Vn = {},
  sl;
function m_() {
  if (sl) return Vn;
  ((sl = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn._resolveDeltasResponse = void 0));
  const e = Kt(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = i(c),
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
  Vn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function i(o) {
    const u = o;
    return (
      a(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      a(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      a(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function a(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Vn;
}
var ul;
function Dv() {
  if (ul) return Er;
  ul = 1;
  var e =
    (Er && Er.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(u.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(u.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : s(g.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(Er, "__esModule", { value: !0 });
  const t = Kt(),
    r = m_();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const u = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
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
          const b =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && c ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: b ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(a, h, _, u);
      });
    }
    _fetchEvaluations(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
          urlConfig: this._initializeUrlConfig,
          data: u,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (c = d?.body) !== null && c !== void 0 ? c : null;
        if (
          o?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          u.deltasResponseRequested !== !0
        )
          return d.body;
        const p = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, u), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((Er.default = n), Er);
}
var Gn = {},
  cl;
function y_() {
  if (cl) return Gn;
  ((cl = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn._makeParamStoreGetter = void 0));
  const e = Kt(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function i(l, d) {
    return l.value;
  }
  function a(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function o(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, g, p);
        case "experiment":
          return u(l, f, g, p);
        case "layer":
          return s(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((Gn._makeParamStoreGetter = c), Gn);
}
var nr = {},
  ll;
function w_() {
  if (ll) return nr;
  ll = 1;
  var e =
    (nr && nr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(u.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(u.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : s(g.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.StatsigEvaluationsDataAdapter = void 0));
  const t = Kt(),
    r = Dv();
  class n extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, u) {
      (super.attach(a, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, u) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), u);
    }
    prefetchData(a, o) {
      return this._prefetchDataImpl(a, o);
    }
    setData(a) {
      const o = (0, t._typedJsonParse)(a, "has_updates", "data");
      o && "user" in o
        ? super.setData(a, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(a, o) {
      super.setData(a, o);
    }
    _fetchFromNetwork(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  }
  return ((nr.StatsigEvaluationsDataAdapter = n), nr);
}
var dl;
function O_() {
  if (dl) return Sr;
  dl = 1;
  var e =
    (Sr && Sr.__awaiter) ||
    function (u, s, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function g(_) {
          try {
            h(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            h(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function h(_) {
          _.done ? p(_.value) : d(_.value).then(g, f);
        }
        h((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  const t = Kt(),
    r = b_(),
    n = Dv(),
    i = y_(),
    a = w_();
  class o extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof o
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new o(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
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
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
    }
    initializeSync(s) {
      var c;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((c = this._store.getWarnings()) !== null && c !== void 0 ? c : []),
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
    updateUserSync(s, c) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, c, l);
      } catch (d) {
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = c?.disableBackgroundCacheRefresh;
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
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
        }
      });
    }
    _updateUserAsyncImpl(s, c) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, c)),
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
    checkGate(s, c) {
      return this.getFeatureGate(s, c).value;
    }
    logEvent(s, c, l) {
      const d = typeof s == "string" ? { eventName: s, value: c, metadata: l } : s;
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
    _createErrorUpdateDetails(s, c) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - c,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, c) {
      this.dataAdapter.getDataAsync(s, c, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, c) {
      var l;
      const d = (0, t._normalizeUser)(s, c),
        p = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return (p && t.StableID.setOverride(p, this._sdkKey), d);
    }
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        g = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        g = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(s, c) {
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
      const _ =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, c),
        b = _ ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, b, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: b }),
        b
      );
    }
    _getLayerImpl(s, c) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (b) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                _,
                b,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: _ }), _);
    }
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
          details: v,
          __configuration: p,
          get: (0, i._makeParamStoreGetter)(this, p, c),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, c);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        g
      );
    }
  }
  return ((Sr.default = o), Sr);
}
var fl;
function S_() {
  return (
    fl ||
      ((fl = 1),
      (function (e) {
        var t =
            (rr && rr.__createBinding) ||
            (Object.create
              ? function (o, u, s, c) {
                  c === void 0 && (c = s);
                  var l = Object.getOwnPropertyDescriptor(u, s);
                  ((!l || ("get" in l ? !u.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return u[s];
                      },
                    }),
                    Object.defineProperty(o, c, l));
                }
              : function (o, u, s, c) {
                  (c === void 0 && (c = s), (o[c] = u[s]));
                }),
          r =
            (rr && rr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Kt(),
          i = O_();
        ((e.StatsigClient = i.default), r(Kt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(rr)),
    rr
  );
}
var Hn = {},
  Wn = {},
  vl;
function E_() {
  if (vl) return Wn;
  ((vl = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn.initFeatureFlags = void 0));
  const e = oe(),
    t = _e(),
    r = Fa(),
    n = 500,
    i = 1e3 * 25,
    a = (0, e.getCallBridge)(),
    o = (s) => {
      if (!s || !s.user)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(s).some((c) => typeof c == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (s) => (o(s), a("initFeatureFlags", { user: s.user }));
  return (
    (Wn.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      i,
      `Feature flags initialisation calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Wn
  );
}
var pl;
function k_() {
  if (pl) return Hn;
  ((pl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn.ForgeDataAdapter = void 0));
  const e = E_();
  class t {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(n, i, a) {
      var o;
      if (n) return n;
      this.environment = ((o = this.options) === null || o === void 0 ? void 0 : o.environment) || {
        tier: "development",
      };
      const u = { ...i, statsigEnvironment: this.environment },
        s = await (0, e.initFeatureFlags)({ user: u }),
        c = {
          source: "Network",
          data: JSON.stringify(s),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = c), c);
    }
    getDataSync(n) {
      return this.cache;
    }
    async attach(n, i, a) {
      this.options = i;
    }
    async prefetchData() {}
    async setData(n) {}
    async setDataLegacy(n) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Hn.ForgeDataAdapter = t), Hn);
}
var No = {},
  hl;
function Tv() {
  return (
    hl ||
      ((hl = 1),
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
      })(No)),
    No
  );
}
var Kn = {},
  gl;
function x_() {
  if (gl) return Kn;
  ((gl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.trackFeatureFlagEvent = void 0));
  const e = oe(),
    t = _e(),
    r = Tv(),
    n = Fa(),
    i = 500,
    a = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    u = (c) => {
      if (!c || !c.type || !c.properties)
        throw new t.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(c.type.toUpperCase() in r.FeatureFlagEventType))
        throw new t.BridgeAPIError("Event type is not supported");
      if (Object.values(c).some((l) => typeof l == "function"))
        throw new t.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    s = (c) => (u(c), o("trackFeatureFlagEvent", c));
  return (
    (Kn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    Kn
  );
}
var _l;
function R_() {
  if (_l) return $n;
  ((_l = 1),
    Object.defineProperty($n, "__esModule", { value: !0 }),
    ($n.ForgeFeatureFlags = void 0));
  const e = S_(),
    t = k_(),
    r = Tv(),
    n = x_();
  class i {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(o, u = {}) {
      var s;
      if (this.isInitialized()) return;
      this.dataAdapter = new t.ForgeDataAdapter();
      const c = {
        environment: { tier: u.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (s = c.environment) === null || s === void 0 ? void 0 : s.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(o), c)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(o) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(o, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(o, !0), this.client.checkGate(o, { disableExposureLog: !0 }));
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
    convertUser(o) {
      return {
        userID: o.userId,
        custom: { ...(o.custom || {}), ...(o.attributes || {}) },
        customIDs: o.identifiers || {},
      };
    }
    sendCheckFlagEvent(o, u) {
      const s = {
        type: r.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: o,
          success: u,
        },
      };
      (0, n.trackFeatureFlagEvent)(s);
    }
  }
  return (($n.ForgeFeatureFlags = i), $n);
}
var bl;
function P_() {
  return (
    bl ||
      ((bl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = R_();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(Bo)),
    Bo
  );
}
var ml;
function C_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = et;
        var r = pg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Ti(), e),
          t.__exportStar(bg(), e),
          t.__exportStar(eu(), e),
          t.__exportStar(Jg(), e),
          t.__exportStar(Xg(), e),
          t.__exportStar(Qg(), e),
          t.__exportStar(t_(), e),
          t.__exportStar(r_(), e),
          t.__exportStar(a_(), e),
          t.__exportStar(u_(), e),
          (e.i18n = t.__importStar(c_())),
          t.__exportStar(d_(), e),
          t.__exportStar(__(), e),
          t.__exportStar(P_(), e));
      })(po)),
    po
  );
}
var Mt = C_();
function fe(e, t) {
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
function A_(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Mv(e) {
  var t = A_(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function yl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Mv(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && yl(e.prototype, t),
    r && yl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function I_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Be(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return I_(e);
}
function J(e) {
  return (
    (J = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    J(e)
  );
}
function Oi(e, t) {
  return (
    (Oi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Oi(e, t)
  );
}
function Ne(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Oi(e, t));
}
function x(e, t, r) {
  return (
    (t = Mv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function j_(e) {
  if (Array.isArray(e)) return e;
}
function D_(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (l) {
      ((c = !0), (i = l));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fv(e, t) {
  if (e) {
    if (typeof e == "string") return ws(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? ws(e, t)
          : void 0
    );
  }
}
function T_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return j_(e) || D_(e, t) || Fv(e, t) || T_();
}
var Lv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  M_ = function (t) {
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
  _a = function (t, r) {
    if (t) {
      var n =
        r &&
        r.cells
          .map(function (i) {
            return i.key;
          })
          .includes(t);
      if (!n)
        try {
          throw Error("Cell with ".concat(t, " key not found in head."));
        } catch (i) {
          console.error(i);
        }
    }
  },
  F_ = function (t, r, n) {
    return t ? { width: r } : {};
  },
  wl = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  L_ = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var u = wl(o, n, i),
      s = wl(a.index, n, i),
      c = r.slice(),
      l = c.splice(u, 1),
      d = K(l, 1),
      p = d[0];
    return (c.splice(s, 0, p), c);
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
function B_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function ne(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = B_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
  }
  return i;
}
function Ol(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ol(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var N_ = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      x(this, "_isAnalyticsEvent", !0),
      x(this, "clone", function () {
        var n = Uo({}, r.payload);
        return new e({ payload: n });
      }),
      (this.payload = t.payload));
  }
  return ve(e, [
    {
      key: "update",
      value: function (r) {
        return (
          typeof r == "function" && (this.payload = r(this.payload)),
          Ae(r) === "object" && (this.payload = Uo(Uo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function U_(e) {
  if (Array.isArray(e)) return ws(e);
}
function q_(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function z_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e) {
  return U_(e) || q_(e) || Fv(e) || z_();
}
function $_(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = J(e)) !== null; );
  return e;
}
function ba() {
  return (
    (ba =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = $_(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    ba.apply(null, arguments)
  );
}
function V_(e, t, r) {
  return (
    (t = J(t)),
    Be(e, Bv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Bv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bv = function () {
    return !!e;
  })();
}
function G_(e, t, r, n) {
  var i = ba(J(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var H_ = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = V_(this, t, [r])),
        x(n, "_isUIAnalyticsEvent", !0),
        x(n, "clone", function () {
          if (n.hasFired) return null;
          var i = De(n.context),
            a = De(n.handlers),
            o = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: i, handlers: a, payload: o });
        }),
        x(n, "fire", function (i) {
          n.hasFired ||
            (n.handlers.forEach(function (a) {
              return a(n, i);
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
      Ne(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : G_(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(N_),
  W_ = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  K_ = function () {
    return y.useContext(W_);
  },
  ma = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function J_(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Y_(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    i = y.useRef(r),
    a = n.current || !!(t && i.current.inputs && J_(t, i.current.inputs)),
    o = a ? i.current : { inputs: t, result: e() };
  return (
    y.useEffect(
      function () {
        ((n.current = !1), (i.current = o));
      },
      [o],
    ),
    o.result
  );
}
function X_(e, t) {
  return Y_(function () {
    return e;
  }, t);
}
function Nv() {
  var e = K_(),
    t = X_(
      function (r) {
        return new H_({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
function Sl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Z_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Si(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = Nv(),
    c = s.createAnalyticsEvent,
    l = ma(u),
    d = ma(t),
    p = y.useCallback(
      function (v) {
        var g = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          f = Z_({ componentName: n, packageName: a, packageVersion: o }, l.current);
        g.context.push(f);
        var h = g.clone();
        (h && h.fire("atlaskit"), d.current(v, g));
      },
      [r, n, i, a, o, c, l, d],
    );
  return p;
}
function El(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Q_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? El(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : El(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function kl(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    u = Nv(),
    s = u.createAnalyticsEvent,
    c = ma(o),
    l = ma(t),
    d = y.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          v = Q_({ componentName: n, packageName: i, packageVersion: a }, c.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, i, a, s, c, l],
    );
  return d;
}
var cr = "ASC",
  ya = "DESC",
  eb = "small",
  wa = "large",
  Uv = 0.22;
const tb = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, tb) : a;
      t[o] = a;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function qv(e, t, r) {
  return e ?? "var(--c-, )";
}
var rb = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  nb = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      u = ne(e, rb);
    return y.createElement(
      "table",
      te(
        {
          inert: o ? "" : void 0,
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
        u,
        {
          "data-testid": a && "".concat(a, "--table"),
          className: R([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      i,
    );
  }),
  ib = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  ab = function (t) {
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
  ob = function (t) {
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
  sb = function (t) {
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
  ub = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cb(e, t, r) {
  return (
    (t = J(t)),
    Be(e, zv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function zv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (zv = function () {
    return !!e;
  })();
}
var Pl = function (t, r, n) {
    for (var i = 0; i < t.length; i++) {
      var a;
      if (r.cells[i] && ((a = r.cells[i]) === null || a === void 0 ? void 0 : a.key) === n) {
        var o;
        return (o = t[i]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  lb = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === cr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = Pl(s.cells, t, n),
        d = Pl(c.cells, t, n);
      if (l === void 0 || d === void 0) return a;
      if (Ae(l) !== Ae(d)) {
        if (typeof l == "number") return -1;
        if (typeof d == "number") return 1;
        if (typeof l == "string") return -1;
        if (typeof d == "string") return 1;
      }
      return typeof l == "string" && typeof d == "string"
        ? a * o.compare(l, d)
        : (!l && l !== 0) || l < d
          ? -a
          : (!d && d !== 0) || l > d
            ? a
            : l === d
              ? 0
              : 1;
    });
  };
function db(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
      return ((i = cb(this, n, [].concat(o))), x(i, "state", { pageRows: [] }), i);
    }
    return (
      Ne(n, r),
      ve(
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
            value: function (a, o) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== o.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: "render",
            value: function () {
              var a = this.props;
              a.rows;
              var o = a.head;
              (a.sortKey, a.sortOrder, a.rowsPerPage, a.page);
              var u = a.forwardedRef,
                s = ne(a, ub);
              return E.createElement(
                e,
                te({ pageRows: this.state.pageRows, head: o }, s, { ref: u }),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (a, o) {
              var u = a.rows,
                s = a.head,
                c = a.sortKey,
                l = a.sortOrder,
                d = a.page,
                p = a.rowsPerPage,
                v = a.isTotalPagesControlledExternally;
              _a(c, s);
              var g, f;
              return (
                v ? ((g = u), (f = u)) : ((g = lb(s, u, c, l) || []), (f = Lv(g, d, p))),
                Rl(Rl({}, o), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(E.Component);
  return E.forwardRef(function (r, n) {
    return E.createElement(t, te({}, r, { forwardedRef: n }));
  });
}
var fb = "--local-dynamic-table-width",
  $v = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, fb, "".concat(r, "%")) : void 0;
  },
  vb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  pb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ne(t, vb);
    return y.createElement(
      "td",
      te(
        {
          style: $v({ width: r }),
          ref: a,
          className: R([
            "_1bsb8a2a",
            n && i && "_1bto1l2s _o5721q9c",
            n && "_1reo15vq _18m915vq",
            "_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
            o.className,
          ]),
        },
        o,
      ),
    );
  },
  hb = ["isHighlighted", "children", "style", "testId", "className"],
  gb = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      u = ne(e, hb);
    return y.createElement(
      "tr",
      te(
        {
          style: i,
          className: R([
            "_bfhkqtfy _1ygbsglb _1ah312gs",
            r ? "_bfhktkjs _irr31ae3" : "_irr3s8ts",
            o,
          ]),
        },
        u,
        { ref: t, "data-testid": a },
      ),
      n,
    );
  }),
  _b = ["cells"],
  bb = ["content", "testId"],
  mb = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ne(r, _b);
    return E.createElement(
      gb,
      te(
        {},
        s,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (i && "".concat(i, "--row-").concat(s.key)) },
      ),
      u.map(function (c, l) {
        var d = c.content,
          p = c.testId,
          v = ne(c, bb),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return E.createElement(
          pb,
          te({ "data-testid": p || (i && "".concat(i, "--cell-").concat(l)) }, v, {
            isFixedSize: a,
            key: l,
            shouldTruncate: f,
            width: h,
          }),
          d,
        );
      }),
    );
  };
function yb(e, t, r) {
  return (
    (t = J(t)),
    Be(e, Vv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Vv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Vv = function () {
    return !!e;
  })();
}
var wb = (function (e) {
    function t() {
      return (fe(this, t), yb(this, t, arguments));
    }
    return (
      Ne(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.pageRows,
              a = n.head,
              o = n.isFixedSize,
              u = n.highlightedRowIndex,
              s = n.testId,
              c = n.forwardedRef;
            return E.createElement(
              "tbody",
              { "data-testid": s && "".concat(s, "--body"), ref: c },
              i.map(function (l, d) {
                return E.createElement(mb, {
                  head: a,
                  isFixedSize: o,
                  key: l.key || d,
                  row: l,
                  isHighlighted:
                    l.isHighlighted ||
                    (!!u && (typeof u == "number" ? u === d : u.indexOf(d) > -1)),
                  testId: s,
                });
              }),
            );
          },
        },
      ])
    );
  })(E.Component),
  Ob = db(
    E.forwardRef(function (e, t) {
      return E.createElement(wb, te({}, e, { forwardedRef: t }));
    }),
  );
function Sb(e, t, r) {
  return (
    (t = J(t)),
    Be(e, Gv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Gv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gv = function () {
    return !!e;
  })();
}
var Eb = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = Sb(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ne(t, e),
    ve(
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
const tu = y.createContext(null);
var kb = "#FFFFFF",
  Os = "#42526E",
  xb = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Rb(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Os, ")")
    : "var(--ds-icon-inverse, ".concat(kb, ")");
}
var Ji = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Pb = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
  Hv = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "inherit" : n,
        a = t.delay,
        o = a === void 0 ? 0 : a,
        u = t.interactionName,
        s = t.label,
        c = t.size,
        l = c === void 0 ? "medium" : c,
        d = t.testId,
        p = typeof l == "number" ? l : xb[l],
        v = "".concat(o, "ms"),
        g = Rb(i),
        f = y.useContext(tu);
      return (
        Pb(
          function () {
            if (f != null) return f.hold(u);
          },
          [f, u],
        ),
        E.createElement(
          "span",
          {
            "data-testid": d ? "".concat(d, "-wrapper") : "spinner-wrapper",
            style: { animationDelay: v, width: p, height: p },
            className: R([Ji.wrapperStyles, Ji.rotateStyles]),
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
              className: R([Ji.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: R([Ji.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
function Cl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cl(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Il = "--contents-opacity",
  Cb = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  Ab = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      i = t.testId;
    return y.createElement(
      "div",
      {
        "data-testid": i && "".concat(i, "--contents--container"),
        className: R(["_tzy47hfw _lcxvglyw"]),
        style: Al(Al({}, x({}, Il, n)), {}, { "--_cnddr8": qv("var(".concat(Il, ")")) }),
      },
      r,
    );
  },
  Ib = function (t) {
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
function jb(e, t, r) {
  return (
    (t = J(t)),
    Be(e, Wv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Wv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wv = function () {
    return !!e;
  })();
}
var Kv = (function (e) {
  function t() {
    return (fe(this, t), jb(this, t, arguments));
  }
  return (
    Ne(t, e),
    ve(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.children,
            a = n.isLoading,
            o = n.spinnerSize,
            u = n.contentsOpacity,
            s = n.testId,
            c = n.loadingLabel;
          return E.createElement(
            Cb,
            { testId: s },
            a ? E.createElement(Ab, { contentsOpacity: u, testId: s }, i) : i,
            a &&
              E.createElement(
                Ib,
                { testId: s },
                E.createElement(Hv, {
                  size: o,
                  testId: s && "".concat(s, "--loadingSpinner"),
                  label: c,
                }),
              ),
          );
        },
      },
    ])
  );
})(E.Component);
x(Kv, "defaultProps", {
  isLoading: !0,
  spinnerSize: wa,
  contentsOpacity: Uv,
  loadingLabel: "Loading table",
});
var Db = ["children", "testId"],
  Tb = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ne(e, Db);
    return y.createElement(
      "div",
      te({}, i, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Mb = function (t) {
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
  Fb = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function Lb(e, t, r) {
  return (
    (t = J(t)),
    Be(e, Jv() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Jv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Jv = function () {
    return !!e;
  })();
}
var Yv = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = Lb(this, t, [].concat(i))),
      x(r, "spinnerRef", E.createRef()),
      x(r, "containerRef", E.createRef()),
      x(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      x(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
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
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          u = o.targetRef,
          s = u?.();
        return s || r.containerRef.current;
      }),
      x(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      x(r, "isVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : s < u;
      }),
      x(r, "isFullyVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return s >= 0 && c <= u;
      }),
      x(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      x(r, "translateSpinner", function (o, u, s) {
        ((o.style.position = s ? "fixed" : ""),
          (o.style.transform = u !== 0 ? "translate3d(0, ".concat(u, "px, 0)") : ""));
      }),
      x(r, "updateTargetAppearance", function () {
        var o = r.getTargetNode(),
          u = r.props,
          s = u.isLoading,
          c = u.contentsOpacity;
        o &&
          o.style &&
          Ae(o.style) === "object" &&
          ((o.style.pointerEvents = s ? "none" : ""), (o.style.opacity = s ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    Ne(t, e),
    ve(t, [
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
            i,
            a = window.innerHeight,
            o = this.getTargetNode(),
            u = (n = this.spinnerRef) === null || n === void 0 ? void 0 : n.current;
          if (!(!o || typeof o.getBoundingClientRect != "function" || !u)) {
            var s = o.getBoundingClientRect(),
              c = u.getBoundingClientRect(),
              l = c.height,
              d = this.isVerticallyVisible(s, a),
              p = s.top,
              v = s.bottom,
              g = s.height;
            if (d) {
              var f = g >= l * 3;
              if (f && !this.isFullyVerticallyVisible(s, a)) {
                if (p >= 0) {
                  var h = a - p,
                    _ = h / 2 + p - l / 2,
                    b = h < l * 3 ? p + l : _;
                  this.translateSpinner(u, b, !0);
                } else if (p < 0 && v > a) {
                  var m = a / 2 - l / 2;
                  this.translateSpinner(u, m, !0);
                } else {
                  var O = v / 2 - l / 2,
                    w = O < l ? O - (l - O) : O;
                  this.translateSpinner(u, w, !0);
                }
                return;
              }
            } else if (!this.isVerticallyVisible(c, a)) return;
            var S = (i = this.containerRef) === null || i === void 0 ? void 0 : i.current;
            if (S && typeof S.getBoundingClientRect == "function") {
              var k = S.getBoundingClientRect().top,
                D = (p - k) / 2;
              this.translateSpinner(u, D, !1);
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.children,
            a = n.isLoading,
            o = n.spinnerSize,
            u = n.testId,
            s = n.loadingLabel;
          return E.createElement(
            Tb,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                Mb,
                { testId: u },
                E.createElement(
                  Fb,
                  { ref: this.spinnerRef },
                  E.createElement(Hv, {
                    size: o,
                    testId: u && "".concat(u, "--loadingSpinner"),
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
x(Yv, "defaultProps", {
  isLoading: !0,
  spinnerSize: wa,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Uv), ")"),
  loadingLabel: "Loading table",
});
function Bb(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    i = K(n, 2),
    a = i[0],
    o = i[1],
    u = y.useRef(r);
  y.useEffect(
    function () {
      u.current = r;
    },
    [r],
  );
  var s = r ? e : a,
    c = y.useCallback(function (l) {
      u.current || o(l);
    }, []);
  return [s, c];
}
var Jn = {};
function jl(e, t, r, n, i, a, o) {
  try {
    var u = e[a](o),
      s = u.value;
  } catch (c) {
    return void r(c);
  }
  u.done ? t(s) : Promise.resolve(s).then(n, i);
}
function de(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, i) {
      var a = e.apply(t, r);
      function o(s) {
        jl(a, n, i, o, u, "next", s);
      }
      function u(s) {
        jl(a, n, i, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var qo = { exports: {} },
  zo = { exports: {} },
  Dl;
function Xv() {
  return (
    Dl ||
      ((Dl = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(zo)),
    zo.exports
  );
}
var $o = { exports: {} },
  Vo = { exports: {} },
  Tl;
function Zv() {
  return (
    Tl ||
      ((Tl = 1),
      (function (e) {
        function t(r, n, i, a) {
          var o = Object.defineProperty;
          try {
            o({}, "", {});
          } catch {
            o = 0;
          }
          ((e.exports = t =
            function (s, c, l, d) {
              function p(v, g) {
                t(s, v, function (f) {
                  return this._invoke(v, g, f);
                });
              }
              c
                ? o
                  ? o(s, c, { value: l, enumerable: !d, configurable: !d, writable: !d })
                  : (s[c] = l)
                : (p("next", 0), p("throw", 1), p("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n, i, a));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Vo)),
    Vo.exports
  );
}
var Ml;
function Qv() {
  return (
    Ml ||
      ((Ml = 1),
      (function (e) {
        var t = Zv();
        function r() {
          var n,
            i,
            a = typeof Symbol == "function" ? Symbol : {},
            o = a.iterator || "@@iterator",
            u = a.toStringTag || "@@toStringTag";
          function s(h, _, b, m) {
            var O = _ && _.prototype instanceof l ? _ : l,
              w = Object.create(O.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (S, k, D) {
                  var I,
                    P,
                    T,
                    q = 0,
                    U = D || [],
                    V = !1,
                    Y = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, B) {
                        return ((I = X), (P = 0), (T = n), (Y.n = B), c);
                      },
                    };
                  function G($, X) {
                    for (P = $, T = X, i = 0; !V && q && !B && i < U.length; i++) {
                      var B,
                        A = U[i],
                        be = Y.p,
                        ae = A[2];
                      $ > 3
                        ? (B = ae === X) &&
                          ((T = A[(P = A[4]) ? 5 : ((P = 3), 3)]), (A[4] = A[5] = n))
                        : A[0] <= be &&
                          ((B = $ < 2 && be < A[1])
                            ? ((P = 0), (Y.v = X), (Y.n = A[1]))
                            : be < ae &&
                              (B = $ < 3 || A[0] > X || X > ae) &&
                              ((A[4] = $), (A[5] = X), (Y.n = ae), (P = 0)));
                    }
                    if (B || $ > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function ($, X, B) {
                    if (q > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, B), P = X, T = B; (i = P < 2 ? n : T) || !V; ) {
                      I || (P ? (P < 3 ? (P > 1 && (Y.n = -1), G(P, T)) : (Y.n = T)) : (Y.v = T));
                      try {
                        if (((q = 2), I)) {
                          if ((P || ($ = "next"), (i = I[$]))) {
                            if (!(i = i.call(I, T)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((T = i.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (i = I.return) && i.call(I),
                              P < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + $ + "' method",
                                )),
                                (P = 1)));
                          I = n;
                        } else if ((i = (V = Y.n < 0) ? T : S.call(k, Y)) !== c) break;
                      } catch (A) {
                        ((I = n), (P = 1), (T = A));
                      } finally {
                        q = 1;
                      }
                    }
                    return { value: i, done: V };
                  };
                })(h, b, m),
                !0,
              ),
              w
            );
          }
          var c = {};
          function l() {}
          function d() {}
          function p() {}
          i = Object.getPrototypeOf;
          var v = [][o]
              ? i(i([][o]()))
              : (t((i = {}), o, function () {
                  return this;
                }),
                i),
            g = (p.prototype = l.prototype = Object.create(v));
          function f(h) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(h, p)
                : ((h.__proto__ = p), t(h, u, "GeneratorFunction")),
              (h.prototype = Object.create(g)),
              h
            );
          }
          return (
            (d.prototype = p),
            t(g, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, u, "GeneratorFunction"),
            t(g),
            t(g, u, "Generator"),
            t(g, o, function () {
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
      })($o)),
    $o.exports
  );
}
var Go = { exports: {} },
  Ho = { exports: {} },
  Wo = { exports: {} },
  Fl;
function ep() {
  return (
    Fl ||
      ((Fl = 1),
      (function (e) {
        var t = Xv(),
          r = Zv();
        function n(i, a) {
          function o(s, c, l, d) {
            try {
              var p = i[s](c),
                v = p.value;
              return v instanceof t
                ? a.resolve(v.v).then(
                    function (g) {
                      o("next", g, l, d);
                    },
                    function (g) {
                      o("throw", g, l, d);
                    },
                  )
                : a.resolve(v).then(
                    function (g) {
                      ((p.value = g), l(p));
                    },
                    function (g) {
                      return o("throw", g, l, d);
                    },
                  );
            } catch (g) {
              d(g);
            }
          }
          var u;
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
              function (s, c, l) {
                function d() {
                  return new a(function (p, v) {
                    o(s, l, p, v);
                  });
                }
                return (u = u ? u.then(d, d) : d());
              },
              !0,
            ));
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Wo)),
    Wo.exports
  );
}
var Ll;
function tp() {
  return (
    Ll ||
      ((Ll = 1),
      (function (e) {
        var t = Qv(),
          r = ep();
        function n(i, a, o, u, s) {
          return new r(t().w(i, a, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ho)),
    Ho.exports
  );
}
var Bl;
function Nb() {
  return (
    Bl ||
      ((Bl = 1),
      (function (e) {
        var t = tp();
        function r(n, i, a, o, u) {
          var s = t(n, i, a, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Go)),
    Go.exports
  );
}
var Ko = { exports: {} },
  Nl;
function Ub() {
  return (
    Nl ||
      ((Nl = 1),
      (function (e) {
        function t(r) {
          var n = Object(r),
            i = [];
          for (var a in n) i.unshift(a);
          return function o() {
            for (; i.length; ) if ((a = i.pop()) in n) return ((o.value = a), (o.done = !1), o);
            return ((o.done = !0), o);
          };
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ko)),
    Ko.exports
  );
}
var Jo = { exports: {} },
  Yo = { exports: {} },
  Ul;
function qb() {
  return (
    Ul ||
      ((Ul = 1),
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
      })(Yo)),
    Yo.exports
  );
}
var ql;
function zb() {
  return (
    ql ||
      ((ql = 1),
      (function (e) {
        var t = qb().default;
        function r(n) {
          if (n != null) {
            var i = n[(typeof Symbol == "function" && Symbol.iterator) || "@@iterator"],
              a = 0;
            if (i) return i.call(n);
            if (typeof n.next == "function") return n;
            if (!isNaN(n.length))
              return {
                next: function () {
                  return (n && a >= n.length && (n = void 0), { value: n && n[a++], done: !n });
                },
              };
          }
          throw new TypeError(t(n) + " is not iterable");
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Jo)),
    Jo.exports
  );
}
var zl;
function $b() {
  return (
    zl ||
      ((zl = 1),
      (function (e) {
        var t = Xv(),
          r = Qv(),
          n = Nb(),
          i = tp(),
          a = ep(),
          o = Ub(),
          u = zb();
        function s() {
          var c = r(),
            l = c.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function p(f) {
            var h = typeof f == "function" && f.constructor;
            return !!h && (h === d || (h.displayName || h.name) === "GeneratorFunction");
          }
          var v = { throw: 1, return: 2, break: 3, continue: 3 };
          function g(f) {
            var h, _;
            return function (b) {
              (h ||
                ((h = {
                  stop: function () {
                    return _(b.a, 2);
                  },
                  catch: function () {
                    return b.v;
                  },
                  abrupt: function (O, w) {
                    return _(b.a, v[O], w);
                  },
                  delegateYield: function (O, w, S) {
                    return ((h.resultName = w), _(b.d, u(O), S));
                  },
                  finish: function (O) {
                    return _(b.f, O);
                  },
                }),
                (_ = function (O, w, S) {
                  ((b.p = h.prev), (b.n = h.next));
                  try {
                    return O(w, S);
                  } finally {
                    h.next = b.n;
                  }
                })),
                h.resultName && ((h[h.resultName] = b.v), (h.resultName = void 0)),
                (h.sent = b.v),
                (h.next = b.n));
              try {
                return f.call(this, h);
              } finally {
                ((b.p = h.prev), (b.n = h.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (_, b, m, O) {
                  return c.w(g(_), b, m, O && O.reverse());
                },
                isGeneratorFunction: p,
                mark: c.m,
                awrap: function (_, b) {
                  return new t(_, b);
                },
                AsyncIterator: a,
                async: function (_, b, m, O, w) {
                  return (p(b) ? i : n)(g(_), b, m, O, w);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(qo)),
    qo.exports
  );
}
var Xo, $l;
function Vb() {
  if ($l) return Xo;
  $l = 1;
  var e = $b()();
  Xo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Xo;
}
var Gb = Vb();
const N = Yt(Gb);
var ir = {},
  kr = {},
  Yi = {},
  Yn = {},
  Vl;
function Hb() {
  if (Vl) return Yn;
  ((Vl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.V1InitializeContainer = void 0));
  const e = Ot();
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
    _getResultFromLookup(n, i) {
      var a, o;
      return n &&
        (o = (a = n[i]) !== null && a !== void 0 ? a : n[(0, e._DJB2)(i)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Yn.V1InitializeContainer = t), Yn);
}
var Xn = {},
  Gl;
function Wb() {
  if (Gl) return Xn;
  ((Gl = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.V2InitializeContainer = void 0));
  const e = Ot();
  let t = class {
    constructor(n) {
      this._values = n;
    }
    getGate(n) {
      var i, a, o;
      const u = this._getResultFromLookup(this._values.feature_gates, n);
      return u
        ? {
            name: n,
            value: u.v === !0,
            rule_id: (i = u.r) !== null && i !== void 0 ? i : "default",
            secondary_exposures: (a = u.s) !== null && a !== void 0 ? a : [],
            id_type: (o = u.i) !== null && o !== void 0 ? o : "",
          }
        : null;
    }
    getConfig(n) {
      var i, a, o, u;
      const s = this._getResultFromLookup(this._values.dynamic_configs, n);
      return s
        ? {
            name: n,
            value: (i = this._values.values[s.v]) !== null && i !== void 0 ? i : {},
            rule_id: s.r,
            secondary_exposures: (a = s.s) !== null && a !== void 0 ? a : [],
            id_type: (o = s.i) !== null && o !== void 0 ? o : "",
            is_user_in_experiment: s.ue === !0,
            passed: s.p === !0,
            group_name: (u = s.gn) !== null && u !== void 0 ? u : void 0,
            is_experiment_active: s.ea === !0,
            group: s.r,
            is_device_based: s.i === "stableID",
          }
        : null;
    }
    getLayer(n) {
      var i, a, o, u, s, c;
      const l = this._getResultFromLookup(this._values.layer_configs, n);
      return l
        ? {
            name: n,
            value: (i = this._values.values[l.v]) !== null && i !== void 0 ? i : {},
            rule_id: l.r,
            secondary_exposures: (a = l.s) !== null && a !== void 0 ? a : [],
            is_user_in_experiment: l.ue === !0,
            group_name: (o = l.gn) !== null && o !== void 0 ? o : void 0,
            is_experiment_active: l.ea === !0,
            group: l.r,
            is_device_based: l.i === "stableID",
            allocated_experiment_name: (u = l.ae) !== null && u !== void 0 ? u : "",
            explicit_parameters: (s = l.ep) !== null && s !== void 0 ? s : [],
            undelegated_secondary_exposures: (c = l.us) !== null && c !== void 0 ? c : [],
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
    _getResultFromLookup(n, i) {
      var a, o;
      return n &&
        (o = (a = n[i]) !== null && a !== void 0 ? a : n[(0, e._DJB2)(i)]) !== null &&
        o !== void 0
        ? o
        : null;
    }
  };
  return ((Xn.V2InitializeContainer = t), Xn);
}
var Hl;
function Kb() {
  if (Hl) return Yi;
  ((Hl = 1), Object.defineProperty(Yi, "__esModule", { value: !0 }));
  const e = Ot(),
    t = Hb(),
    r = Wb();
  let n = class {
    constructor(a) {
      ((this._sdkKey = a),
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
    setValues(a, o) {
      var u, s;
      if (!a) return !1;
      const c = (0, e._typedJsonParse)(a.data, "has_updates", "EvaluationResponse");
      return c == null
        ? !1
        : ((this._source = a.source),
          c?.has_updates !== !0 ||
            ((u = c.time) !== null && u !== void 0 ? u : 0) < this._lcut ||
            ((this._valuesForExternalUse = (0, e._typedJsonParse)(
              a.data,
              "has_updates",
              "EvaluationResponse",
            )),
            (this._lcut = c.time),
            (this._receivedAt = a.receivedAt),
            c.response_format === "init-v2"
              ? (this._values = new r.V2InitializeContainer(c))
              : (this._values = new t.V1InitializeContainer(c)),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(a.source, c)),
            a.source && c.user && this._setWarningState(o, c),
            e.SDKFlags.setFlags(this._sdkKey, (s = c.sdk_flags) !== null && s !== void 0 ? s : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(a) {
      const o = this._values ? this._values.getGate(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfig(a) {
      const o = this._values ? this._values.getConfig(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getConfigList() {
      return this._values ? this._values.getConfigList() : [];
    }
    getLayer(a) {
      const o = this._values ? this._values.getLayer(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getParamStore(a) {
      const o = this._values ? this._values.getParamStore(a) : null;
      return this._getDetailedStoreResult(o);
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var a;
      return (a = this._values) === null || a === void 0 ? void 0 : a.getExposureMapping();
    }
    _extractBootstrapMetadata(a, o) {
      if (a !== "Bootstrap") return null;
      const u = {};
      return (
        o.user && (u.user = o.user),
        o.sdkInfo && (u.generatorSDKInfo = o.sdkInfo),
        (u.lcut = o.time),
        u
      );
    }
    _getDetailedStoreResult(a) {
      return { result: a, details: this._getDetails(a == null) };
    }
    _setWarningState(a, o) {
      var u, s;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((u = a.customIDs) === null || u === void 0 ? void 0 : u.stableID) !== c &&
        ((!((s = a.customIDs) === null || s === void 0) && s.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in o) {
        const l = o.user,
          d = Object.assign(Object.assign({}, a), {
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
      const a = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (a.warnings = Array.from(this._warnings)), a);
    }
    _getDetails(a) {
      var o, u;
      const s = this.getCurrentSourceDetails();
      let c = s.reason;
      const l = (o = s.warnings) !== null && o !== void 0 ? o : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const d =
        this._source === "Bootstrap" && (u = this._bootstrapMetadata) !== null && u !== void 0
          ? u
          : void 0;
      return (d && (s.bootstrapMetadata = d), Object.assign(Object.assign({}, s), { reason: c }));
    }
  };
  return ((Yi.default = n), Yi);
}
var xr = {},
  Zn = {},
  Wl;
function Jb() {
  if (Wl) return Zn;
  ((Wl = 1),
    Object.defineProperty(Zn, "__esModule", { value: !0 }),
    (Zn._resolveDeltasResponse = void 0));
  const e = Ot(),
    t = 2;
  function r(o, u) {
    const s = (0, e._typedJsonParse)(u, "checksum", "DeltasEvaluationResponse");
    if (!s) return { hadBadDeltaChecksum: !0 };
    const c = n(o, s),
      l = i(c),
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
  Zn._resolveDeltasResponse = r;
  function n(o, u) {
    return Object.assign(Object.assign(Object.assign({}, o), u), {
      feature_gates: Object.assign(Object.assign({}, o.feature_gates), u.feature_gates),
      layer_configs: Object.assign(Object.assign({}, o.layer_configs), u.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, o.dynamic_configs), u.dynamic_configs),
    });
  }
  function i(o) {
    const u = o;
    return (
      a(o.deleted_gates, u.feature_gates),
      delete u.deleted_gates,
      a(o.deleted_configs, u.dynamic_configs),
      delete u.deleted_configs,
      a(o.deleted_layers, u.layer_configs),
      delete u.deleted_layers,
      u
    );
  }
  function a(o, u) {
    o?.forEach((s) => {
      delete u[s];
    });
  }
  return Zn;
}
var Kl;
function rp() {
  if (Kl) return xr;
  Kl = 1;
  var e =
    (xr && xr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(u.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(u.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : s(g.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = Ot(),
    r = Jb();
  class n extends t.NetworkCore {
    constructor(a, o) {
      super(a, o);
      const u = a?.networkConfig;
      ((this._option = a),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          u?.initializeUrl,
          u?.api,
          u?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(a, o, u, s, c) {
      return e(this, void 0, void 0, function* () {
        var l, d, p, v, g, f;
        const h = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
        let _ = {
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
          const b =
            h?.hash_used !==
            ((f =
              (g = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || g === void 0
                ? void 0
                : g.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? h.time : 0,
            previousDerivedFields: "derived_fields" in h && c ? h.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: h.full_checksum,
            partialUserMatchSinceTime: b ? 0 : h.time,
          });
        }
        return this._fetchEvaluations(a, h, _, u);
      });
    }
    _fetchEvaluations(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c, l;
        const d = yield this.post({
          sdkKey: a,
          urlConfig: this._initializeUrlConfig,
          data: u,
          retries: 2,
          isStatsigEncodable: !0,
          priority: s,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (c = d?.body) !== null && c !== void 0 ? c : null;
        if (
          o?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0 ? void 0 : l.includes('"is_delta":true')) !== !0 ||
          u.deltasResponseRequested !== !0
        )
          return d.body;
        const p = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof p == "string"
          ? p
          : this._fetchEvaluations(
              a,
              o,
              Object.assign(Object.assign(Object.assign({}, u), p), {
                deltasResponseRequested: !1,
              }),
              s,
            );
      });
    }
  }
  return ((xr.default = n), xr);
}
var Qn = {},
  Jl;
function Yb() {
  if (Jl) return Qn;
  ((Jl = 1),
    Object.defineProperty(Qn, "__esModule", { value: !0 }),
    (Qn._makeParamStoreGetter = void 0));
  const e = Ot(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function i(l, d) {
    return l.value;
  }
  function a(l, d, p) {
    return l.getFeatureGate(d.gate_name, r(p) ? void 0 : t).value ? d.pass_value : d.fail_value;
  }
  function o(l, d, p, v) {
    const f = l.getDynamicConfig(d.config_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function u(l, d, p, v) {
    const f = l.getExperiment(d.experiment_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function s(l, d, p, v) {
    const f = l.getLayer(d.layer_name, r(v) ? void 0 : t).get(d.param_name);
    return n(f, p) ? p : f;
  }
  function c(l, d, p) {
    return (v, g) => {
      if (d == null) return g;
      const f = d[v];
      if (f == null || (g != null && (0, e._typeOf)(g) !== f.param_type)) return g;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, g, p);
        case "experiment":
          return u(l, f, g, p);
        case "layer":
          return s(l, f, g, p);
        default:
          return g;
      }
    };
  }
  return ((Qn._makeParamStoreGetter = c), Qn);
}
var ar = {},
  Yl;
function Xb() {
  if (Yl) return ar;
  Yl = 1;
  var e =
    (ar && ar.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(g) {
          try {
            v(u.next(g));
          } catch (f) {
            l(f);
          }
        }
        function p(g) {
          try {
            v(u.throw(g));
          } catch (f) {
            l(f);
          }
        }
        function v(g) {
          g.done ? c(g.value) : s(g.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.StatsigEvaluationsDataAdapter = void 0));
  const t = Ot(),
    r = rp();
  let n = class extends t.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(a, o, u) {
      (super.attach(a, o, u),
        u !== null && u instanceof r.default
          ? (this._network = u)
          : (this._network = new r.default(o ?? {})));
    }
    getDataAsync(a, o, u) {
      return this._getDataAsyncImpl(a, (0, t._normalizeUser)(o, this._options), u);
    }
    prefetchData(a, o) {
      return this._prefetchDataImpl(a, o);
    }
    setData(a) {
      const o = (0, t._typedJsonParse)(a, "has_updates", "data");
      o && "user" in o
        ? super.setData(a, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(a, o) {
      super.setData(a, o);
    }
    _fetchFromNetwork(a, o, u, s) {
      return e(this, void 0, void 0, function* () {
        var c;
        const l = yield (c = this._network) === null || c === void 0
          ? void 0
          : c.fetchEvaluations(this._getSdkKey(), a, u?.priority, o, s);
        return l ?? null;
      });
    }
    _getCacheKey(a) {
      var o;
      const u = (0, t._getStorageKey)(
        this._getSdkKey(),
        a,
        (o = this._options) === null || o === void 0 ? void 0 : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${u}`;
    }
    _isCachedResultValidFor204(a, o) {
      return a.fullUserHash != null && a.fullUserHash === (0, t._getFullUserHash)(o);
    }
  };
  return ((ar.StatsigEvaluationsDataAdapter = n), ar);
}
var Xl;
function Zb() {
  if (Xl) return kr;
  Xl = 1;
  var e =
    (kr && kr.__awaiter) ||
    function (u, s, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function g(_) {
          try {
            h(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            h(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function h(_) {
          _.done ? p(_.value) : d(_.value).then(g, f);
        }
        h((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(kr, "__esModule", { value: !0 });
  const t = Ot(),
    r = Kb(),
    n = rp(),
    i = Yb(),
    a = Xb();
  let o = class Ss extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof Ss
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Ss(s ?? "", {}));
    }
    constructor(s, c, l = null) {
      var d, p;
      t.SDKType._setClientType(s, "javascript-client");
      const v = new n.default(l, (f) => {
        this.$emt(f);
      });
      (super(
        s,
        (d = l?.dataAdapter) !== null && d !== void 0 ? d : new a.StatsigEvaluationsDataAdapter(),
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
        (this._user = this._configureUser(c, l)),
        (this._sdkInstanceID = (0, t.getUUID)()));
      const g = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of g) f.bind(this);
    }
    initializeSync(s) {
      var c;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((c = this._store.getWarnings()) !== null && c !== void 0 ? c : []),
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
    updateUserSync(s, c) {
      const l = performance.now();
      try {
        return this._updateUserSyncImpl(s, c, l);
      } catch (d) {
        const p = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(p, l);
      }
    }
    _updateUserSyncImpl(s, c, l) {
      var d;
      const p = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(s);
      const v = this.dataAdapter.getDataSync(this._user);
      (v == null && p.push("NoCachedValues"),
        this._store.setValues(v, this._user),
        this._finalizeUpdate(v));
      const g = c?.disableBackgroundCacheRefresh;
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
    updateUserAsync(s, c) {
      return e(this, void 0, void 0, function* () {
        const l = performance.now();
        try {
          return yield this._updateUserAsyncImpl(s, c);
        } catch (d) {
          const p = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(p, l);
        }
      });
    }
    _updateUserAsyncImpl(s, c) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(s);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, c)),
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
    checkGate(s, c) {
      return this.getFeatureGate(s, c).value;
    }
    logEvent(s, c, l) {
      const d = typeof s == "string" ? { eventName: s, value: c, metadata: l } : s;
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
    _createErrorUpdateDetails(s, c) {
      var l;
      return (0, t.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - c,
        s,
        null,
        [...((l = this._store.getWarnings()) !== null && l !== void 0 ? l : [])],
      );
    }
    _finalizeUpdate(s) {
      (this._store.finalize(), this._setStatus("Ready", s));
    }
    _runPostUpdate(s, c) {
      this.dataAdapter.getDataAsync(s, c, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(s) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(s, this._options)));
    }
    _configureUser(s, c) {
      var l, d, p;
      const v = (0, t._normalizeUser)(s, c),
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
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        g = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: h }),
        h
      );
    }
    _getDynamicConfigImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        g = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, this._user, c),
        h = f ?? g;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, h, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: h }),
        h
      );
    }
    _getExperimentImpl(s, c) {
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
      const _ =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, h, this._user, c),
        b = _ ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, b, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: b }),
        b
      );
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(s, c) {
      var l, d, p;
      const { result: v, details: g } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, g, v),
        h =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        f,
        h,
        (p = h?.__value) !== null && p !== void 0 ? p : f.__value,
        (b) => {
          c?.disableExposureLog ||
            this._enqueueExposure(
              s,
              (0, t._createLayerParameterExposure)(
                this._user,
                _,
                b,
                this._store.getExposureMapping(),
              ),
              c,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: _ }), _);
    }
    _getParameterStoreImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getParamStore(s);
      this._logger.incrementNonExposureCount(s);
      const g = {
          name: s,
          details: v,
          __configuration: p,
          get: (0, i._makeParamStoreGetter)(this, p, c),
        },
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, g, c);
      return (
        f != null &&
          ((g.__configuration = f.config),
          (g.details = f.details),
          (g.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        g
      );
    }
  };
  return ((kr.default = o), kr);
}
var Zl;
function Qb() {
  return (
    Zl ||
      ((Zl = 1),
      (function (e) {
        var t =
            (ir && ir.__createBinding) ||
            (Object.create
              ? function (o, u, s, c) {
                  c === void 0 && (c = s);
                  var l = Object.getOwnPropertyDescriptor(u, s);
                  ((!l || ("get" in l ? !u.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return u[s];
                      },
                    }),
                    Object.defineProperty(o, c, l));
                }
              : function (o, u, s, c) {
                  (c === void 0 && (c = s), (o[c] = u[s]));
                }),
          r =
            (ir && ir.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Ot(),
          i = Zb();
        ((e.StatsigClient = i.default), r(Ot(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(ir)),
    ir
  );
}
var at = Qb(),
  Zo = { exports: {} },
  Ql;
function em() {
  return (
    Ql ||
      ((Ql = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(s, c, l) {
          ((this.fn = s), (this.context = c), (this.once = l || !1));
        }
        function a(s, c, l, d, p) {
          if (typeof l != "function") throw new TypeError("The listener must be a function");
          var v = new i(l, d || s, p),
            g = r ? r + c : c;
          return (
            s._events[g]
              ? s._events[g].fn
                ? (s._events[g] = [s._events[g], v])
                : s._events[g].push(v)
              : ((s._events[g] = v), s._eventsCount++),
            s
          );
        }
        function o(s, c) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[c];
        }
        function u() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((u.prototype.eventNames = function () {
          var c = [],
            l,
            d;
          if (this._eventsCount === 0) return c;
          for (d in (l = this._events)) t.call(l, d) && c.push(r ? d.slice(1) : d);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
        }),
          (u.prototype.listeners = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var p = 0, v = d.length, g = new Array(v); p < v; p++) g[p] = d[p].fn;
            return g;
          }),
          (u.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (u.prototype.emit = function (c, l, d, p, v, g) {
            var f = r ? r + c : c;
            if (!this._events[f]) return !1;
            var h = this._events[f],
              _ = arguments.length,
              b,
              m;
            if (h.fn) {
              switch ((h.once && this.removeListener(c, h.fn, void 0, !0), _)) {
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
              for (m = 1, b = new Array(_ - 1); m < _; m++) b[m - 1] = arguments[m];
              h.fn.apply(h.context, b);
            } else {
              var O = h.length,
                w;
              for (m = 0; m < O; m++)
                switch ((h[m].once && this.removeListener(c, h[m].fn, void 0, !0), _)) {
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
                    if (!b) for (w = 1, b = new Array(_ - 1); w < _; w++) b[w - 1] = arguments[w];
                    h[m].fn.apply(h[m].context, b);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, l, d) {
            return a(this, c, l, d, !1);
          }),
          (u.prototype.once = function (c, l, d) {
            return a(this, c, l, d, !0);
          }),
          (u.prototype.removeListener = function (c, l, d, p) {
            var v = r ? r + c : c;
            if (!this._events[v]) return this;
            if (!l) return (o(this, v), this);
            var g = this._events[v];
            if (g.fn) g.fn === l && (!p || g.once) && (!d || g.context === d) && o(this, v);
            else {
              for (var f = 0, h = [], _ = g.length; f < _; f++)
                (g[f].fn !== l || (p && !g[f].once) || (d && g[f].context !== d)) && h.push(g[f]);
              h.length ? (this._events[v] = h.length === 1 ? h[0] : h) : o(this, v);
            }
            return this;
          }),
          (u.prototype.removeAllListeners = function (c) {
            var l;
            return (
              c
                ? ((l = r ? r + c : c), this._events[l] && o(this, l))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.addListener = u.prototype.on),
          (u.prefixed = r),
          (u.EventEmitter = u),
          (e.exports = u));
      })(Zo)),
    Zo.exports
  );
}
var tm = em();
const rm = Yt(tm);
function ed(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ed(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ed(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Xi = "@all-features",
  nm = (function () {
    function e() {
      (fe(this, e), x(this, "eventToValue", new Map()), (this.emitter = new rm()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, i, a) {
          var o = this,
            u = i(r, Vt(Vt({}, a), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = i(r, Vt(Vt({}, a), {}, { fireGateExposure: !1 })),
              d = o.eventToValue.get(n);
            d !== l && (o.eventToValue.set(n, l), n(l));
          };
          return (
            this.emitter.on(r, s),
            function () {
              o.emitter.off(r, s);
            }
          );
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, i, a, o, u) {
          var s = this,
            c = "".concat(r, ".").concat(n),
            l = o(r, n, i, Vt(Vt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(a) === void 0 && this.eventToValue.set(a, l);
          var d = function () {
            var v = o(r, n, i, Vt(Vt({}, u), {}, { fireExperimentExposure: !1 })),
              g = s.eventToValue.get(a);
            g !== v && (s.eventToValue.set(a, v), a(v));
          };
          return (
            this.emitter.on(c, d),
            function () {
              s.emitter.off(c, d);
            }
          );
        },
      },
      {
        key: "onAnyUpdated",
        value: function (r) {
          var n = this;
          return (
            this.emitter.on(Xi, r),
            function () {
              n.emitter.off(Xi, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Xi),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Xi;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  im = "fedramp-moderate";
function am() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === im;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var ru = (function (e) {
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
  di = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Ei = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  om = [
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
function td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zi = function (t) {
    return Es({ perimeter: am() ? Ei.FEDRAMP_MODERATE : Ei.COMMERCIAL }, t);
  },
  ei = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (p, v) {
      var g = K(p, 1),
        f = g[0],
        h = K(v, 1),
        _ = h[0];
      return f.localeCompare(_);
    };
    (n.sort(a), i.sort(a));
    for (var o = 0; o < n.length; o++) {
      var u = K(n[o], 2),
        s = u[1],
        c = K(i[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  rd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  sm = function (t) {
    var r = t.api,
      n = t.disableCurrentPageLogging,
      i = t.loggingIntervalMillis,
      a = t.loggingBufferMaxSize,
      o = t.localMode,
      u = t.eventLoggingApi,
      s = t.eventLoggingApiForRetries,
      c = t.disableLocalStorage,
      l = t.ignoreWindowUndefined,
      d = t.disableAllLogging;
    (t.initTimeoutMs,
      t.disableNetworkKeepalive,
      t.overrideStableID,
      t.disableErrorLogging,
      t.disableAutoMetricsLogging);
    var p = ne(t, om);
    return Es(
      Es({}, p),
      {},
      {
        networkConfig: {
          api: r,
          logEventUrl: u ? u + "rgstr" : void 0,
          logEventFallbackUrls: s ? [s] : void 0,
          preventAllNetworkTraffic: o || (!l && typeof window > "u"),
        },
        includeCurrentPageUrlWithEvents: !n,
        loggingIntervalMs: i,
        loggingBufferMaxSize: a,
        disableStorage: c === void 0 ? o : c,
        disableLogging: d === void 0 ? o : d,
      },
    );
  },
  um = Object.entries(ru).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  np = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = um.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return a.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : ru.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  ks = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  nd = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "",
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (fe(this, e),
        (this.value = r),
        (this._name = t),
        (this._ruleID = n),
        (this._secondaryExposures = a),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = i),
        (this._onDefaultValueFallback = u));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, i) {
            var a,
              o = this.getValue(r, n);
            if (o == null) return n;
            var u = Array.isArray(n) ? "array" : Ae(n),
              s = Array.isArray(o) ? "array" : Ae(o);
            if (i) {
              var c;
              return i(o)
                ? (this.fireExposure(r), o)
                : ((c = this._onDefaultValueFallback) === null ||
                    c === void 0 ||
                    c.call(this, this, r, u, s),
                  n);
            }
            return n == null || u === s
              ? (this.fireExposure(r), o)
              : ((a = this._onDefaultValueFallback) === null ||
                  a === void 0 ||
                  a.call(this, this, r, u, s),
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
              i,
              a,
              o = new e(
                r.name,
                r.value,
                r.ruleID,
                np(r.details),
                ks(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                (a = r.groupName) !== null && a !== void 0 ? a : void 0,
              );
            return ((o.experiment = r), o);
          },
        },
      ],
    );
  })(),
  id = (function () {
    function e(t, r, n, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "",
        c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (fe(this, e),
        (this._logParameterFunction = a),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(r ?? {}))),
        (this._ruleID = n ?? ""),
        (this._evaluationDetails = i),
        (this._secondaryExposures = o),
        (this._undelegatedSecondaryExposures = u),
        (this._allocatedExperimentName = s),
        (this._explicitParameters = c));
    }
    return ve(
      e,
      [
        {
          key: "get",
          value: function (r, n, i) {
            var a = this,
              o = this._value[r];
            if (o == null) return n;
            var u = function () {
              return (a._logLayerParameterExposure(r), o);
            };
            return i
              ? i(o)
                ? u()
                : n
              : n == null || (Ae(o) === Ae(n) && Array.isArray(n) === Array.isArray(o))
                ? u()
                : n;
          },
        },
        {
          key: "getValue",
          value: function (r, n) {
            n == null && (n = null);
            var i = this._value[r];
            return (i != null && this._logLayerParameterExposure(r), i ?? n);
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
              i,
              a,
              o,
              u,
              s,
              c = new e(
                r.name,
                r.__value,
                r.ruleID,
                np(r.details),
                function (l, d) {
                  return r.get(d);
                },
                ks(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                ks(
                  (a =
                    (o = r.__evaluation) === null || o === void 0
                      ? void 0
                      : o.undelegated_secondary_exposures) !== null && a !== void 0
                    ? a
                    : [],
                ),
                (u = r.__evaluation) === null || u === void 0
                  ? void 0
                  : u.allocated_experiment_name,
                (s = r.__evaluation) === null || s === void 0 ? void 0 : s.explicit_parameters,
              );
            return c;
          },
        },
      ],
    );
  })(),
  Mr = "0.0.0-development";
function cm(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function ip() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ip = function () {
    return !!e;
  })();
}
function lm(e, t, r) {
  if (ip()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && Oi(i, r.prototype), i);
}
function xs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (xs = function (n) {
      if (n === null || !cm(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return lm(n, arguments, J(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Oi(i, n)
      );
    }),
    xs(e)
  );
}
function dm(e, t, r) {
  return (
    (t = J(t)),
    Be(e, ap() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function ap() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ap = function () {
    return !!e;
  })();
}
var ad = (function (e) {
  function t(r) {
    return (fe(this, t), dm(this, t, [r]));
  }
  return (Ne(t, e), ve(t));
})(xs(Error));
function od(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function fm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? od(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : od(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var vm = 5e3,
  pm = "https://api.atlassian.com/flags",
  hm = "https://api.stg.atlassian.com/flags",
  gm = "https://api.dev.atlassian.com/flags",
  _m = "https://api.stg.atlassian-us-gov-mod.com/flags",
  bm = "https://api.atlassian-us-gov-mod.com/flags",
  mm = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  ym = "oasis-stg.com/flags",
  wm = "atlassian-isolated.net/flags",
  Om = "/gateway/api/flags",
  Qo = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            N.mark(function n(i) {
              var a, o;
              return N.wrap(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          (a = i.targetApp),
                          (o = "/api/v2/frontend/clientSdkKey/".concat(a)),
                          (s.prev = 2),
                          (s.next = 5),
                          this.fetchRequest(o, "GET", i)
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
          var t = de(
            N.mark(function n(i, a, o) {
              var u;
              return N.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (u = { identifiers: a, customAttributes: o, targetApp: i.targetApp }),
                          (c.prev = 1),
                          (c.next = 4),
                          this.fetchRequest("/api/v2/frontend/experimentValues", "POST", i, u)
                        );
                      case 4:
                        return c.abrupt("return", c.sent);
                      case 7:
                        if (((c.prev = 7), (c.t0 = c.catch(1)), !(c.t0 instanceof Error))) {
                          c.next = 11;
                          break;
                        }
                        throw c.t0;
                      case 11:
                        throw Error("Failed to retrieve experiment values");
                      case 12:
                      case "end":
                        return c.stop();
                    }
                },
                n,
                this,
                [[1, 7]],
              );
            }),
          );
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "handleResponseError",
        value: (function () {
          var t = de(
            N.mark(function n(i) {
              var a;
              return N.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      if (i.ok) {
                        u.next = 5;
                        break;
                      }
                      return ((u.next = 3), i.text());
                    case 3:
                      throw (
                        (a = u.sent),
                        new ad(
                          "Non 2xx response status received, status: "
                            .concat(i.status, ", body: ")
                            .concat(JSON.stringify(a)),
                        )
                      );
                    case 5:
                      if (i.status !== 204) {
                        u.next = 7;
                        break;
                      }
                      throw new ad("Unexpected 204 response");
                    case 7:
                    case "end":
                      return u.stop();
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
          var t = de(
            N.mark(function n(i) {
              var a;
              return N.wrap(function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      return ((u.next = 2), i.text());
                    case 2:
                      return ((a = u.sent), u.abrupt("return", JSON.parse(a)));
                    case 4:
                    case "end":
                      return u.stop();
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
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (n) return Om;
          if (i === Ei.FEDRAMP_MODERATE)
            switch (r) {
              case di.Production:
                return bm;
              case di.Staging:
                return _m;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === Ei.COMMERCIAL)
            switch (r) {
              case di.Development:
                return gm;
              case di.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : hm;
              default:
                var u = this.getApiUrl(a);
                return u !== null ? u : pm;
            }
          else throw new Error('Invalid perimeter "'.concat(i, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o, u) {
              var s, c, l, d, p;
              return N.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (c = o.fetchTimeoutMs || vm),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(c))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, c)),
                          (g.next = 5),
                          fetch(
                            "".concat(s).concat(i),
                            fm(
                              {
                                method: a,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Mr,
                                  "X-API-KEY": o.apiKey,
                                },
                                signal: l,
                              },
                              u && { body: JSON.stringify(u) },
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
          function r(n, i, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getApiUrl",
        value: function (r) {
          var n = this.getWindowLocation();
          if (n === void 0) return r ? mm.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat(ym);
          var u = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(i, "//api.").concat(u[1], ".").concat(wm) : null;
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
function sd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Sm(e, t, r) {
  return (
    (t = J(t)),
    Be(e, op() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function op() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (op = function () {
    return !!e;
  })();
}
function Em(e, t, r, n) {
  var i = ba(J(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var km = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = Sm(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ne(t, e),
    ve(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: at.StableID.get(this._getSdkKey()),
                fullUserHash: null,
              }
            : null;
        },
      },
      {
        key: "prefetchData",
        value: (function () {
          var r = de(
            N.mark(function i(a, o) {
              return N.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                    case "end":
                      return s.stop();
                  }
              }, i);
            }),
          );
          function n(i, a) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "getDataAsync",
        value: (function () {
          var r = de(
            N.mark(function i(a, o, u) {
              return N.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ti(
                              ti({}, this.bootstrapResult),
                              {},
                              { fullUserHash: at._getFullUserHash(o) },
                            ),
                        );
                      case 1:
                      case "end":
                        return c.stop();
                    }
                },
                i,
                this,
              );
            }),
          );
          function n(i, a, o) {
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
            ti(ti({}, this.bootstrapResult), {}, { fullUserHash: at._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            N.mark(function i(a, o, u) {
              return N.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return c.abrupt("return", null);
                    case 1:
                    case "end":
                      return c.stop();
                  }
              }, i);
            }),
          );
          function n(i, a, o) {
            return r.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: "_getCacheKey",
        value: function (n) {
          var i = at._getStorageKey(this._getSdkKey(), n);
          return "".concat(at.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(i);
        },
      },
      {
        key: "_isCachedResultValidFor204",
        value: function (n, i) {
          return !1;
        },
      },
      {
        key: "setDataLegacy",
        value: function (n, i) {
          Em(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ti({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(at.DataAdapterCore);
function ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ud(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ud(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function xm(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Rm(e)) || t) {
      r && (e = r);
      var n = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
    o = !0,
    u = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return ((o = c.done), c);
    },
    e: function (c) {
      ((u = !0), (a = c));
    },
    f: function () {
      try {
        o || r.return == null || r.return();
      } finally {
        if (u) throw a;
      }
    },
  };
}
function Rm(e, t) {
  if (e) {
    if (typeof e == "string") return cd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? cd(e, t)
          : void 0
    );
  }
}
function cd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var es = "LocalOverride:Recognized",
  Pm = "STATSIG_OVERRIDES",
  ld = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Rr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ge = function (t, r) {
    return r + ":" + t;
  },
  Cm = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Rr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Rr();
          } catch {
            return Rr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Rr(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          for (var o = 0, u = i; o < u.length; o++) {
            for (
              var s = u[o],
                c = 0,
                l = Object.entries((d = s.gates) !== null && d !== void 0 ? d : {});
              c < l.length;
              c++
            ) {
              var d,
                p = K(l[c], 2),
                v = p[0],
                g = p[1];
              r.gates[v] = g;
            }
            for (
              var f = 0, h = Object.entries((_ = s.configs) !== null && _ !== void 0 ? _ : {});
              f < h.length;
              f++
            ) {
              var _,
                b = K(h[f], 2),
                m = b[0],
                O = b[1];
              r.configs[m] = O;
            }
            for (
              var w = 0, S = Object.entries((k = s.layers) !== null && k !== void 0 ? k : {});
              w < S.length;
              w++
            ) {
              var k,
                D = K(S[w], 2),
                I = D[0],
                P = D[1];
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
            this.parseStoredOverrides(ld),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(ld);
          } catch {}
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              u = xm(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = Ve._DJB2(c);
                o.has(l) && delete a[l];
              }
            } catch (d) {
              u.e(d);
            } finally {
              u.f();
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
          var n = xe(xe({}, Rr()), r);
          this._djb2Map.clear();
          for (var i = 0, a = Object.entries(n); i < a.length; i++)
            for (
              var o = K(a[i], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = K(l[c], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(Ge(Ve._DJB2(p), u), v);
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
            this._djb2Map.set(Ge(Ve._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "gates")),
            this.saveOverrides());
        },
      },
      {
        key: "getGateOverride",
        value: function (r, n) {
          var i,
            a =
              (i = this._overrides.gates[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(Ge(r.name, "gates"));
          return a == null
            ? null
            : xe(xe({}, r), {}, { value: a, details: xe(xe({}, r.details), {}, { reason: es }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Ge(Ve._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "configs")),
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
            this._djb2Map.set(Ge(Ve._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "configs")),
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
            this._djb2Map.set(Ge(Ve._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Ge(Ve._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Rr();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: "getLayerOverride",
        value: function (r, n) {
          var i,
            a =
              (i = this._overrides.layers[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(Ge(r.name, "layers"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  __value: a,
                  get: Ve._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: es }),
                },
              );
        },
      },
      {
        key: "_getConfigOverride",
        value: function (r, n) {
          var i,
            a =
              (i = n[r.name]) !== null && i !== void 0
                ? i
                : this._djb2Map.get(Ge(r.name, "configs"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  value: a,
                  get: Ve._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: es }),
                },
              );
        },
      },
    ]);
  })(),
  Am = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function dd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fd = "client-default-key",
  Im = "https://xp.atlassian.com/v1/rgstr",
  jm = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? Pm : n,
        a = r.overrideAdapter;
      (fe(this, e),
        x(this, "initPromise", null),
        x(this, "initCompleted", !1),
        x(this, "initWithDefaults", !1),
        x(this, "hasCheckGateErrorOccurred", !1),
        x(this, "hasGetExperimentErrorOccurred", !1),
        x(this, "hasGetExperimentValueErrorOccurred", !1),
        x(this, "hasGetLayerErrorOccurred", !1),
        x(this, "hasGetLayerValueErrorOccurred", !1),
        x(this, "subscriptions", new nm()),
        x(this, "dataAdapter", new km()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new Cm(i)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u = this,
                s,
                c;
              return N.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = Zi(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ei(s, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          d.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (c = performance.now()),
                          (this.initOptions = s),
                          (this.initPromise = this.init(s, a, o)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var p = performance.now(),
                                v = p - c;
                              u.fireClientEvent(c, v, "initialize", u.initCompleted, s.apiKey);
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initializeWithProvider",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o, u) {
              var s = this,
                c,
                l;
              return N.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((c = Zi(i)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ei(c, this.initOptions) ||
                            console.warn(
                              "Feature Gates client already initialized with different options. New options were not applied.",
                            ),
                          p.abrupt("return", this.initPromise)
                        );
                      case 4:
                        return (
                          (l = performance.now()),
                          (this.initOptions = c),
                          (this.provider = a),
                          this.provider.setClientVersion(Mr),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(c, a, o, u)
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
                                a.getApiKey ? a.getApiKey() : void 0,
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
          function r(n, i, a, o) {
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
        value: function (r, n, i, a) {
          var o,
            u = this,
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (o = this.initOptions.analyticsWebClient) === null ||
            o === void 0 ||
            o
              .then(function (c) {
                var l = Gt(
                  {
                    targetApp: u.initOptions.targetApp,
                    clientVersion: Mr,
                    success: a,
                    startTime: r,
                    totalTime: n,
                  },
                  s && { apiKey: s },
                );
                c.sendOperationalEvent({
                  action: i,
                  actionSubject: "featureGatesClient",
                  attributes: l,
                  tags: ["measurement"],
                  source: "@atlaskit/feature-gate-js-client",
                });
              })
              .catch(function (c) {
                u.initOptions.environment !== di.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return N.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = Zi(i)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ei(c, this.initOptions) ||
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
                          (this.initOptions = c),
                          (this.initPromise = this.initFromValues(c, a, o, s)
                            .then(function () {
                              ((u.initCompleted = !0), (u.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var g = performance.now(),
                                f = g - l;
                              u.fireClientEvent(l, f, "initializeFromValues", u.initCompleted);
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
          function r(n, i, a) {
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
          var t = de(
            N.mark(function n(i, a, o) {
              var u, s;
              return N.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = Zi(i)),
                          (s = function () {
                            return Qo.fetchExperimentValues(u, a, o).then(function (p) {
                              var v = p.experimentValues,
                                g = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: g };
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithProvider",
        value: (function () {
          var t = de(
            N.mark(function n(i, a) {
              var o = this;
              return N.wrap(
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
                        return ((s.next = 5), this.provider.setProfile(this.initOptions, i, a));
                      case 5:
                        return (
                          (s.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return o.provider.getExperimentValues();
                            },
                            i,
                            a,
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
          function r(n, i) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserWithValues",
        value: (function () {
          var t = de(
            N.mark(function n(i, a) {
              var o,
                u,
                s = arguments;
              return N.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (o = s.length > 2 && s[2] !== void 0 ? s[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (u = function () {
                            return Promise.resolve({
                              experimentValues: o,
                              customAttributesFromFetch: a,
                            });
                          }),
                          (l.next = 5),
                          this.updateUserUsingInitializeValuesProducer(u, i, a)
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
          function r(n, i) {
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
          var t = de(
            N.mark(function n() {
              return N.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (this.initPromise) {
                          a.next = 2;
                          break;
                        }
                        throw new Error(
                          "The client must be initialized before you can wait until initialized.",
                        );
                      case 2:
                        if (!this.initCompleted) {
                          a.next = 4;
                          break;
                        }
                        return a.abrupt("return");
                      case 4:
                        return ((a.next = 6), this.initPromise);
                      case 6:
                      case "end":
                        return a.stop();
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
            var i = n.fireGateExposure,
              a = i === void 0 ? !0 : i;
            return this.statsigClient.checkGate(r, { disableExposureLog: !a });
          } catch (o) {
            return (
              this.hasCheckGateErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred checking the feature gate. Only the first occurrence of this error is logged.",
                  gateName: r,
                  error: o,
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
          } catch (i) {
            return (
              console.error("Error occurred when trying to check FeatureGate: ".concat(i)),
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
          } catch (i) {
            return (
              console.error("Error occurred when trying to check Experiment: ".concat(i)),
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
            var i = n.fireExperimentExposure,
              a = i === void 0 ? !0 : i;
            return nd.fromExperiment(
              this.statsigClient.getExperiment(r, { disableExposureLog: !a }),
            );
          } catch (o) {
            return (
              this.hasGetExperimentErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  error: o,
                }),
                (this.hasGetExperimentErrorOccurred = !0)),
              new nd(r, {}, "", { time: Date.now(), reason: ru.Error })
            );
          }
        },
      },
      {
        key: "getExperimentValue",
        value: function (r, n, i) {
          var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getExperiment(r, a);
          try {
            var u = a.typeGuard;
            return o.get(n, i, u);
          } catch (s) {
            return (
              this.hasGetExperimentValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the experiment value. Only the first occurrence of this error is logged.",
                  experimentName: r,
                  defaultValue: i,
                  options: a,
                  error: s,
                }),
                (this.hasGetExperimentValueErrorOccurred = !0)),
              i
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
          var i;
          (this.assertInitialized(this.statsigClient),
            (i = this.statsigClient.getLayer(r)) === null || i === void 0 || i.get(n));
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
            var i;
            (i = this.statsigClient) === null ||
              i === void 0 ||
              i.updateUserSync(this.user, { disableBackgroundCacheRefresh: !0 });
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
          return ei(this.currentIdentifiers, r) && ei(this.currentAttributes, n);
        },
      },
      {
        key: "onGateUpdated",
        value: function (r, n) {
          var i = this,
            a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = function (s) {
              var c = a.fireGateExposure,
                l = c === void 0 ? !0 : c;
              l && i.manuallyLogGateExposure(r);
              try {
                n(s);
              } catch (d) {
                console.warn(
                  "Error calling callback for gate ".concat(r, " with value ").concat(s),
                  d,
                );
              }
            };
          return this.subscriptions.onGateUpdated(r, o, this.checkGate.bind(this), a);
        },
      },
      {
        key: "onExperimentValueUpdated",
        value: function (r, n, i, a) {
          var o = this,
            u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            s = function (l) {
              var d = u.fireExperimentExposure,
                p = d === void 0 ? !0 : d;
              p && o.manuallyLogExperimentExposure(r);
              try {
                a(l);
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
            i,
            s,
            this.getExperimentValue.bind(this),
            u,
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
          var t = de(
            N.mark(function n(i, a, o) {
              var u, s, c, l, d, p, v, g;
              return N.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (u = Gt({}, i)),
                          (h.prev = 1),
                          (l = Qo.fetchClientSdk(i).then(function (_) {
                            return (u.sdkKey = _.clientSdkKey);
                          })),
                          (d = Qo.fetchExperimentValues(i, a, o)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = K(p, 2)),
                          (g = v[1]),
                          (s = g.experimentValues),
                          (c = g.customAttributes),
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
                          this.initFromValues(u, a, o)
                        );
                      case 19:
                        throw h.t0;
                      case 20:
                        return h.abrupt("return", this.initFromValues(u, a, c, s));
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initWithProvider",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o, u) {
              var s, c, l, d, p, v, g, f;
              return N.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          (s = Gt(Gt({}, i), {}, { disableCurrentPageLogging: !0 })),
                          (_.prev = 1),
                          (_.next = 4),
                          a.setProfile(i, o, u)
                        );
                      case 4:
                        return (
                          (d = a.getClientSdkKey().then(function (b) {
                            return (s.sdkKey = b);
                          })),
                          (p = a.getExperimentValues()),
                          (_.next = 8),
                          Promise.all([d, p])
                        );
                      case 8:
                        ((v = _.sent),
                          (g = K(v, 2)),
                          (f = g[1]),
                          (c = f.experimentValues),
                          (l = f.customAttributesFromFetch),
                          (_.next = 22));
                        break;
                      case 15:
                        return (
                          (_.prev = 15),
                          (_.t0 = _.catch(1)),
                          _.t0 instanceof Error &&
                            console.error(
                              "Error occurred when trying to fetch the Feature Gates client values, error: ".concat(
                                _.t0 === null || _.t0 === void 0 ? void 0 : _.t0.message,
                              ),
                            ),
                          console.warn("Initialising Statsig client without values"),
                          (_.next = 21),
                          this.initFromValues(s, o, u)
                        );
                      case 21:
                        throw _.t0;
                      case 22:
                        return _.abrupt("return", this.initFromValues(s, o, l, c));
                      case 23:
                      case "end":
                        return _.stop();
                    }
                },
                n,
                this,
                [[1, 15]],
              );
            }),
          );
          function r(n, i, a, o) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "initFromValues",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u,
                s,
                c,
                l,
                d,
                p,
                v,
                g = arguments;
              return N.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = g.length > 3 && g[3] !== void 0 ? g[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          (c = sm(i)),
                          c.sdkKey || (c.sdkKey = fd),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Gt(
                              Gt({}, c.networkConfig),
                              {},
                              { logEventUrl: Im },
                            )),
                          c.perimeter === Ei.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (p = ne(c, Am)),
                          (this.user = rd(a, o)),
                          (v = Gt(
                            Gt({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: at.LogEventCompressionMode.Forced,
                            },
                          )),
                          a.stableId
                            ? at.StableID.setOverride(a.stableId, l)
                            : (v.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new at.StatsigClient(l, this.user, v)),
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
                          (this.statsigClient = new at.StatsigClient(fd, this.user, v)),
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateUserUsingInitializeValuesProducer",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l;
              return N.wrap(
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
                        if (!this.isCurrentUser(a, o)) {
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
                          (c = i()),
                          (l = this.updateStatsigClientUser(c, a, o)),
                          (this.initPromise = l.catch(
                            de(
                              N.mark(function v() {
                                return N.wrap(function (f) {
                                  for (;;)
                                    switch ((f.prev = f.next)) {
                                      case 0:
                                        if (((u.initPromise = s), !u.provider)) {
                                          f.next = 4;
                                          break;
                                        }
                                        return (
                                          (f.next = 4),
                                          u.provider.setProfile(
                                            u.initOptions,
                                            u.currentIdentifiers,
                                            u.currentAttributes,
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "updateStatsigClientUser",
        value: (function () {
          var t = de(
            N.mark(function n(i, a, o) {
              var u, s, c, l, d, p, v, g, f;
              return N.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (_.prev = 1),
                          (_.next = 4),
                          i
                        );
                      case 4:
                        ((c = _.sent), (l = rd(a, c.customAttributesFromFetch)), (_.next = 13));
                        break;
                      case 8:
                        throw (
                          (_.prev = 8),
                          (_.t0 = _.catch(1)),
                          (v = _.t0 instanceof Error ? _.t0.message : JSON.stringify(_.t0)),
                          (d = (p = this.initOptions).updateUserCompletionCallback) === null ||
                            d === void 0 ||
                            d.call(p, !1, v),
                          _.t0
                        );
                      case 13:
                        if (
                          ((g = !0),
                          (f = null),
                          (_.prev = 15),
                          this.dataAdapter.setBootstrapData(c.experimentValues),
                          (this.user = l),
                          !this.user)
                        ) {
                          _.next = 21;
                          break;
                        }
                        return ((_.next = 21), this.statsigClient.updateUserAsync(this.user));
                      case 21:
                        _.next = 27;
                        break;
                      case 23:
                        ((_.prev = 23), (_.t1 = _.catch(15)), (g = !1), (f = String(_.t1)));
                      case 27:
                        if (
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, g, f),
                          !g)
                        ) {
                          _.next = 34;
                          break;
                        }
                        ((this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          this.subscriptions.anyUpdated(),
                          (_.next = 35));
                        break;
                      case 34:
                        throw new Error("Failed to update user. An unexpected error occured.");
                      case 35:
                      case "end":
                        return _.stop();
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
          function r(n, i, a) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      {
        key: "getPackageVersion",
        value: function () {
          return Mr;
        },
      },
      {
        key: "getLayer",
        value: function (r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var i = n.fireLayerExposure,
              a = i === void 0 ? !0 : i;
            return id.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              id.fromLayer(at._makeLayer(r, { reason: "Error" }, null))
            );
          }
        },
      },
      {
        key: "getLayerValue",
        value: function (r, n, i) {
          var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            o = this.getLayer(r, a);
          try {
            var u = a.typeGuard;
            return o.get(n, i, u);
          } catch (s) {
            return (
              this.hasGetLayerValueErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer value. Only the first occurrence of this error is logged.",
                  layerName: r,
                  defaultValue: i,
                  options: a,
                  error: s,
                }),
                (this.hasGetLayerValueErrorOccurred = !0)),
              i
            );
          }
        },
      },
    ]);
  })(),
  j,
  z = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
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
j = z;
x(z, "client", new jm());
x(z, "hasCheckGateErrorOccurred", !1);
x(z, "hasGetExperimentValueErrorOccurred", !1);
x(z, "checkGate", function (e, t) {
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
    j.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (j.hasCheckGateErrorOccurred = !0));
  }
  return j.client.checkGate(e, t);
});
x(z, "getExperimentValue", function (e, t, r, n) {
  try {
    if (
      typeof window < "u" &&
      window.__CRITERION__ &&
      typeof window.__CRITERION__.getExperimentValueOverride == "function"
    ) {
      var i = window.__CRITERION__.getExperimentValueOverride(e, t);
      if (i != null) return i;
    }
  } catch (a) {
    return (
      j.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: a,
        }),
        (j.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return j.client.getExperimentValue(e, t, r, n);
});
x(z, "initializeCalled", j.client.initializeCalled.bind(j.client));
x(z, "initializeCompleted", j.client.initializeCompleted.bind(j.client));
x(z, "waitUntilInitializeCompleted", j.client.waitUntilInitializeCompleted.bind(j.client));
x(z, "initialize", j.client.initialize.bind(j.client));
x(z, "initializeWithProvider", j.client.initializeWithProvider.bind(j.client));
x(z, "initializeFromValues", j.client.initializeFromValues.bind(j.client));
x(z, "manuallyLogGateExposure", j.client.manuallyLogGateExposure.bind(j.client));
x(z, "getExperiment", j.client.getExperiment.bind(j.client));
x(z, "manuallyLogExperimentExposure", j.client.manuallyLogExperimentExposure.bind(j.client));
x(z, "manuallyLogLayerExposure", j.client.manuallyLogLayerExposure.bind(j.client));
x(z, "shutdownStatsig", j.client.shutdownStatsig.bind(j.client));
x(z, "overrideGate", j.client.overrideGate.bind(j.client));
x(z, "clearGateOverride", j.client.clearGateOverride.bind(j.client));
x(z, "overrideConfig", j.client.overrideConfig.bind(j.client));
x(z, "clearConfigOverride", j.client.clearConfigOverride.bind(j.client));
x(z, "setOverrides", j.client.setOverrides.bind(j.client));
x(z, "getOverrides", j.client.getOverrides.bind(j.client));
x(z, "clearAllOverrides", j.client.clearAllOverrides.bind(j.client));
x(z, "isCurrentUser", j.client.isCurrentUser.bind(j.client));
x(z, "onGateUpdated", j.client.onGateUpdated.bind(j.client));
x(z, "onExperimentValueUpdated", j.client.onExperimentValueUpdated.bind(j.client));
x(z, "onAnyUpdated", j.client.onAnyUpdated.bind(j.client));
x(z, "updateUser", j.client.updateUser.bind(j.client));
x(z, "updateUserWithProvider", j.client.updateUserWithProvider.bind(j.client));
x(z, "updateUserWithValues", j.client.updateUserWithValues.bind(j.client));
x(z, "getPackageVersion", j.client.getPackageVersion.bind(j.client));
x(z, "getLayer", j.client.getLayer.bind(j.client));
x(z, "getLayerValue", j.client.getLayerValue.bind(j.client));
var Rs = z;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = z;
  else {
    var Qi, ts;
    Rs = window.__FEATUREGATES_JS__;
    var vd =
      ((Qi = Rs) === null || Qi === void 0 || (ts = Qi.getPackageVersion) === null || ts === void 0
        ? void 0
        : ts.call(Qi)) || "4.10.0 or earlier";
    if (vd !== Mr) {
      var Dm = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(vd, " when module version ")
        .concat(Mr, " was loading.");
      console.warn(Dm);
    }
  }
var Pr,
  Cr,
  Tm =
    (globalThis == null ||
    (Pr = globalThis.process) === null ||
    Pr === void 0 ||
    (Pr = Pr.env) === null ||
    Pr === void 0
      ? void 0
      : Pr.JEST_WORKER_ID) !== void 0,
  Mm =
    !Tm &&
    (globalThis == null ||
    (Cr = globalThis.process) === null ||
    Cr === void 0 ||
    (Cr = Cr.env) === null ||
    Cr === void 0
      ? void 0
      : Cr.NODE_ENV) !== "production",
  Fm = function () {
    var t;
    Mm && (t = console).debug.apply(t, arguments);
  },
  nu = {},
  Lm = "@atlaskit/platform-feature-flags",
  pi = "__PLATFORM_FEATURE_FLAGS__",
  sp = typeof process < "u" && typeof nu < "u",
  Bm = sp ? nu.ENABLE_PLATFORM_FF === "true" : !1,
  Nm = sp ? nu.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Um = Bm || Nm,
  qm = { booleanResolver: void 0 },
  hi = typeof window < "u" ? window : globalThis;
hi[pi] = hi[pi] || qm;
function zm(e) {
  if (Um)
    return (
      Fm(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Lm,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = hi[pi]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = hi[pi]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Rs.checkGate(e);
    var i = (n = hi[pi]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function Br(e) {
  return zm(e);
}
var $m = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Vm = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  Gm = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  pd = y.memo(function (t) {
    var r = t,
      n = r.color,
      i = n === void 0 ? "currentColor" : n,
      a = r.testId,
      o = r.label,
      u = r.LEGACY_primaryColor,
      s = r.LEGACY_secondaryColor,
      c = r.LEGACY_size,
      l = r.LEGACY_fallbackIcon,
      d = r.dangerouslySetGlyph,
      p = r.shouldScale,
      v = r.LEGACY_margin,
      g = r.spacing,
      f = g === void 0 ? "none" : g,
      h = r.name,
      _ = d ? { __html: d } : void 0;
    if (l && !Br("platform-visual-refresh-icons"))
      return y.createElement(l, {
        primaryColor: u ?? i,
        secondaryColor: s,
        size: c,
        label: o,
        testId: a,
        UNSAFE_margin: v,
      });
    var b = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") b = t.size === "small" || t.size === "medium" ? t.size : b;
      else if (h) {
        var m = t.size(h);
        b = m === "small" || m === "medium" ? m : b;
      }
    }
    var O = 16,
      w = Gm[b][f],
      S = O + 2 * w;
    return y.createElement(
      "span",
      {
        "data-testid": a,
        role: o ? "img" : void 0,
        "aria-label": o || void 0,
        "aria-hidden": o ? void 0 : !0,
        style: { color: i },
        className: R([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          b === "small" && "_vwz4utpp",
        ]),
      },
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - w, " ")
          .concat(0 - w, " ")
          .concat(S, " ")
          .concat(S),
        role: "presentation",
        dangerouslySetInnerHTML: _,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : b === "small" ? Vm[f] : $m[f],
        ]),
      }),
    );
  });
const Hm = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: pd, default: pd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Ua = Wf(Hm);
var hd;
function Wm() {
  if (hd) return Jn;
  ((hd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(hr()),
    t = r(Ua);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronLeftIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m9.97 1.47-6 6a.75.75 0 0 0-.052 1.004l.052.056 6 6 1.06-1.06L5.56 8l5.47-5.47z"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronLeftIcon"), (Jn.default = n), Jn);
}
var Km = Wm();
const Jm = Yt(Km);
var ri = {},
  gd;
function Ym() {
  if (gd) return ri;
  ((gd = 1), Object.defineProperty(ri, "__esModule", { value: !0 }), (ri.default = void 0));
  var e = r(hr()),
    t = r(Ua);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ChevronRightIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" d="m6.03 1.47 6 6a.75.75 0 0 1 .052 1.004l-.052.056-6 6-1.06-1.06L10.44 8 4.97 2.53z"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ChevronRightIcon"), (ri.default = n), ri);
}
var Xm = Ym();
const Zm = Yt(Xm);
var iu = y.createContext("elevation.surface"),
  Qm = function () {
    return y.useContext(iu);
  };
iu.displayName = "SurfaceProvider";
var ey = [
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
  ty = ["className"],
  ry = {
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
  up = {
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
  ny = {
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
  iy = {
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
  ay = {
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
  oy = {
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
  qa = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "div" : r,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      u = e.paddingBlock,
      s = u === void 0 ? o : u,
      c = e.paddingBlockStart,
      l = c === void 0 ? s : c,
      d = e.paddingBlockEnd,
      p = d === void 0 ? s : d,
      v = e.paddingInline,
      g = v === void 0 ? o : v,
      f = e.paddingInlineStart,
      h = f === void 0 ? g : f,
      _ = e.paddingInlineEnd,
      b = _ === void 0 ? g : _,
      m = e.style,
      O = e.testId,
      w = e.xcss,
      S = ne(e, ey);
    S.className;
    var k = ne(S, ty),
      D = y.createElement(
        n,
        te(
          {
            style: m,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              a && ry[a],
              a && sy(a) && up[a],
              l && ny[l],
              p && iy[p],
              h && ay[h],
              b && oy[b],
              w,
            ]),
          },
          k,
          { "data-testid": O },
        ),
        i,
      );
    return a ? y.createElement(iu.Provider, { value: a }, D) : D;
  });
function sy(e) {
  return e in up;
}
const rs = () =>
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
  cp = (...e) => R(e);
function uy() {
  return {
    css() {
      throw rs();
    },
    cssMap() {
      throw rs();
    },
    cx: cp,
    XCSSProp() {
      throw rs();
    },
  };
}
var cy = uy(),
  ly = cy.cx,
  dy = [
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
  _d = {
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
  bd = {
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
  fy = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  vy = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  py = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  hy = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  gy = { root: "_1e0c1txw _vchhusvi" },
  Oa = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = r === void 0 ? "div" : r,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        u = e.gap,
        s = e.columnGap,
        c = e.rowGap,
        l = e.children,
        d = e.testId,
        p = e.direction,
        v = e.wrap,
        g = e.xcss,
        f = ne(e, dy);
      return y.createElement(
        n,
        te({}, f, {
          role: i,
          className: R([
            gy.root,
            u && bd[u],
            s && bd[s],
            u && _d[u],
            c && _d[c],
            a && hy[a],
            p && vy[p],
            o && fy[o],
            v && py[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Oa.displayName = "Flex";
var _y = [
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
  Ps = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  by = function (t) {
    var r = t.children;
    return y.createElement("span", { className: R([Ps.separator]) }, r);
  },
  oa = y.memo(
    y.forwardRef(function (e, t) {
      var r = e.as,
        n = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? "start" : i,
        o = e.shouldWrap,
        u = o === void 0 ? !1 : o,
        s = e.spread,
        c = e.grow,
        l = e.space,
        d = e.rowSpace,
        p = e.separator,
        v = e.xcss,
        g = e.testId,
        f = e.role,
        h = e.children,
        _ = ne(e, _y),
        b = typeof p == "string" ? y.createElement(by, null, p) : p,
        m = b
          ? y.Children.toArray(h)
              .filter(Boolean)
              .map(function (O, w) {
                return y.createElement(y.Fragment, { key: w }, p && w > 0 ? b : null, O);
              })
          : h;
      return y.createElement(
        Oa,
        te({}, _, {
          as: r,
          role: f,
          alignItems: a,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: ly(c === "hug" && Ps.hug, c === "fill" && Ps.fill, v),
          testId: g,
          ref: t,
        }),
        m,
      );
    }),
  );
oa.displayName = "Inline";
var my = "Invariant failed";
function yy(e, t) {
  if (!e) throw new Error(my);
}
var lp = y.createContext(!1),
  wy = function () {
    return y.useContext(lp);
  },
  Oy = lp.Provider,
  Sy = ["span", "p", "strong", "em"],
  Ey = function (t, r) {
    var n = Qm();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return md.hasOwnProperty(n) ? md[n] : "color.text";
    }
  },
  Ar = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  ky = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  xy = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Ry = {
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
  md = {
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
  Py = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "span" : r,
      i = e.color,
      a = e.align,
      o = e.testId,
      u = e.id,
      s = e.size,
      c = e.weight,
      l = e.maxLines,
      d = e.xcss,
      p = e.children;
    yy(Sy.includes(n));
    var v = wy(),
      g = Ey(i, v);
    !s && !v && (s = "medium");
    var f = y.createElement(
      n,
      {
        id: u,
        className: R([
          Ar.root,
          s && ky[s],
          g && Ry[g],
          l && Ar.truncation,
          l === 1 && Ar.breakAll,
          a && Ar["textAlign.".concat(a)],
          c && xy[c],
          n === "em" && Ar["as.em"],
          n === "strong" && Ar["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return v ? f : y.createElement(Oy, { value: !0 }, f);
  });
function Cy() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Ay = ["as", "children", "isInset", "testId", "style", "xcss"],
  Iy = ["className"],
  jy = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ne(e, Ay);
    c.className;
    var l = ne(c, Iy);
    return y.createElement(
      n,
      te({}, l, {
        ref: t,
        className: R([
          "_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y",
          a && "_1ah31gjf _2mwq1gjf",
          s,
        ]),
        style: u,
        "data-testid": o,
      }),
      i,
    );
  }),
  Dy = [
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
  Ty = ["className"],
  yd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  My = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      i = e.type,
      a = i === void 0 ? "button" : i,
      o = e.onClick,
      u = o === void 0 ? we : o,
      s = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = ne(e, Dy),
      h = y.useContext(tu),
      _ = y.useCallback(
        function (O, w) {
          (h && h.tracePress(s, O.timeStamp), u(O, w));
        },
        [u, h, s],
      ),
      b = Si({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "16.4.4",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var m = ne(f, Ty);
    return y.createElement(
      jy,
      te({ as: "button", tabIndex: g ?? (Cy() && !n ? 0 : void 0), style: d }, m, {
        type: a,
        onClick: b,
        disabled: n,
        xcss: cp(yd.root, n && yd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  ns = {},
  ni = {},
  wd;
function dp() {
  if (wd) return ni;
  ((wd = 1), Object.defineProperty(ni, "__esModule", { value: !0 }), (ni.bind = void 0));
  function e(t, r) {
    var n = r.type,
      i = r.listener,
      a = r.options;
    return (
      t.addEventListener(n, i, a),
      function () {
        t.removeEventListener(n, i, a);
      }
    );
  }
  return ((ni.bind = e), ni);
}
var or = {},
  Od;
function Fy() {
  if (Od) return or;
  Od = 1;
  var e =
    (or && or.__assign) ||
    function () {
      return (
        (e =
          Object.assign ||
          function (a) {
            for (var o, u = 1, s = arguments.length; u < s; u++) {
              o = arguments[u];
              for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (a[c] = o[c]);
            }
            return a;
          }),
        e.apply(this, arguments)
      );
    };
  (Object.defineProperty(or, "__esModule", { value: !0 }), (or.bindAll = void 0));
  var t = dp();
  function r(a) {
    if (!(typeof a > "u")) return typeof a == "boolean" ? { capture: a } : a;
  }
  function n(a, o) {
    if (o == null) return a;
    var u = e(e({}, a), { options: e(e({}, r(o)), r(a.options)) });
    return u;
  }
  function i(a, o, u) {
    var s = o.map(function (c) {
      var l = n(c, u);
      return (0, t.bind)(a, l);
    });
    return function () {
      s.forEach(function (l) {
        return l();
      });
    };
  }
  return ((or.bindAll = i), or);
}
var Sd;
function Ly() {
  return (
    Sd ||
      ((Sd = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = dp();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Fy();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(ns)),
    ns
  );
}
var za = Ly(),
  By = function () {
    var e = 1,
      t = new WeakMap(),
      r = function (n, i) {
        return typeof n == "number" || typeof n == "string"
          ? i
            ? "idx-".concat(i)
            : "val-".concat(n)
          : t.has(n)
            ? "uid" + t.get(n)
            : (t.set(n, e++), r(n));
      };
    return r;
  },
  fp = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: By() });
  },
  Ny = fp(),
  Uy = y.createContext(fp()),
  qy = function (e) {
    return e.value++;
  },
  zy = function (e) {
    return e ? e.prefix : "";
  },
  $y = function (e) {
    var t = e || Ny,
      r = zy(t),
      n = qy(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  vp = function () {
    var e = y.useContext(Uy),
      t = y.useState(function () {
        return $y(e);
      })[0];
    return t;
  },
  Vy = function () {
    var e = vp().uid;
    return e;
  },
  Gy = function () {
    var e = vp().gen;
    return e;
  },
  is,
  sa = (is = E.useId) !== null && is !== void 0 ? is : void 0;
function Hy() {
  return sa && Br("platform-dst-react-18-use-id")
    ? Br("platform-dst-react-18-use-id-selector-safe")
      ? sa().replace(/[:«»]/g, "_")
      : sa()
    : "uid".concat(Vy());
}
function Wy() {
  if (sa && Br("platform-dst-react-18-use-id")) {
    var e = Hy();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Gy();
}
var au = function (t) {
  var r = t.children,
    n = t.testId,
    i = t.role,
    a = t.id;
  return y.createElement(
    "span",
    {
      id: a,
      "data-testid": n,
      role: i,
      className: R([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
au.displayName = "VisuallyHidden";
var Ky = {
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
  Jy = ["children"];
function Yy(e) {
  var t = function (u, s) {
      return u(s);
    },
    r = y.createContext(e);
  function n(o) {
    var u = y.useContext(r),
      s = u || t,
      c = s(o);
    return c;
  }
  function i(o) {
    var u = o.children,
      s = ne(o, Jy),
      c = n(s);
    return E.createElement(E.Fragment, null, u(c));
  }
  function a(o) {
    var u = y.useContext(r),
      s = o.value || t,
      c = y.useCallback(
        function (l) {
          return s(u, l);
        },
        [u, s],
      );
    return E.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: i, Provider: a, useTheme: n };
}
var Xy = Yy(function () {
    return { mode: "light" };
  }),
  Zy = Xy.useTheme;
function Qy(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function e0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var t0 = (function () {
    function e(r) {
      var n = this;
      ((this._insertTag = function (i) {
        var a;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (a = n.insertionPoint.nextSibling)
            : n.prepend
              ? (a = n.container.firstChild)
              : (a = n.before)
          : (a = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, a),
          n.tags.push(i));
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(e0(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = Qy(i);
          try {
            a.insertRule(n, a.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (n) {
          var i;
          return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  ye = "-ms-",
  Sa = "-moz-",
  Z = "-webkit-",
  pp = "comm",
  ou = "rule",
  su = "decl",
  r0 = "@import",
  hp = "@keyframes",
  n0 = "@layer",
  i0 = Math.abs,
  $a = String.fromCharCode,
  a0 = Object.assign;
function o0(e, t) {
  return me(e, 0) ^ 45
    ? (((((((t << 2) ^ me(e, 0)) << 2) ^ me(e, 1)) << 2) ^ me(e, 2)) << 2) ^ me(e, 3)
    : 0;
}
function gp(e) {
  return e.trim();
}
function s0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function Cs(e, t) {
  return e.indexOf(t);
}
function me(e, t) {
  return e.charCodeAt(t) | 0;
}
function ki(e, t, r) {
  return e.slice(t, r);
}
function vt(e) {
  return e.length;
}
function uu(e) {
  return e.length;
}
function ea(e, t) {
  return (t.push(e), e);
}
function u0(e, t) {
  return e.map(t).join("");
}
var Va = 1,
  Nr = 1,
  _p = 0,
  Ie = 0,
  he = 0,
  Hr = "";
function Ga(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: Va,
    column: Nr,
    length: o,
    return: "",
  };
}
function ii(e, t) {
  return a0(Ga("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function c0() {
  return he;
}
function l0() {
  return ((he = Ie > 0 ? me(Hr, --Ie) : 0), Nr--, he === 10 && ((Nr = 1), Va--), he);
}
function Fe() {
  return ((he = Ie < _p ? me(Hr, Ie++) : 0), Nr++, he === 10 && ((Nr = 1), Va++), he);
}
function _t() {
  return me(Hr, Ie);
}
function ua() {
  return Ie;
}
function Mi(e, t) {
  return ki(Hr, e, t);
}
function xi(e) {
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
function bp(e) {
  return ((Va = Nr = 1), (_p = vt((Hr = e))), (Ie = 0), []);
}
function mp(e) {
  return ((Hr = ""), e);
}
function ca(e) {
  return gp(Mi(Ie - 1, As(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function d0(e) {
  for (; (he = _t()) && he < 33; ) Fe();
  return xi(e) > 2 || xi(he) > 3 ? "" : " ";
}
function f0(e, t) {
  for (; --t && Fe() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return Mi(e, ua() + (t < 6 && _t() == 32 && Fe() == 32));
}
function As(e) {
  for (; Fe(); )
    switch (he) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && As(he);
        break;
      case 40:
        e === 41 && As(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Ie;
}
function v0(e, t) {
  for (; Fe() && e + he !== 57; ) if (e + he === 84 && _t() === 47) break;
  return "/*" + Mi(t, Ie - 1) + "*" + $a(e === 47 ? e : Fe());
}
function p0(e) {
  for (; !xi(_t()); ) Fe();
  return Mi(e, Ie);
}
function h0(e) {
  return mp(la("", null, null, null, [""], (e = bp(e)), 0, [0], e));
}
function la(e, t, r, n, i, a, o, u, s) {
  for (
    var c = 0,
      l = 0,
      d = o,
      p = 0,
      v = 0,
      g = 0,
      f = 1,
      h = 1,
      _ = 1,
      b = 0,
      m = "",
      O = i,
      w = a,
      S = n,
      k = m;
    h;
  )
    switch (((g = b), (b = Fe()))) {
      case 40:
        if (g != 108 && me(k, d - 1) == 58) {
          Cs((k += Q(ca(b), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += ca(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += d0(g);
        break;
      case 92:
        k += f0(ua() - 1, 7);
        continue;
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            ea(g0(v0(Fe(), ua()), t, r), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * f:
        u[c++] = vt(k) * _;
      case 125 * f:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            (_ == -1 && (k = Q(k, /\f/g, "")),
              v > 0 &&
                vt(k) - d &&
                ea(v > 32 ? kd(k + ";", n, r, d - 1) : kd(Q(k, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            k += ";";
          default:
            if ((ea((S = Ed(k, t, r, c, l, i, u, m, (O = []), (w = []), d)), a), b === 123))
              if (l === 0) la(k, t, S, S, O, a, d, u, w);
              else
                switch (p === 99 && me(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    la(
                      e,
                      S,
                      S,
                      n && ea(Ed(e, S, S, 0, 0, i, u, m, i, (O = []), d), w),
                      i,
                      w,
                      d,
                      u,
                      n ? O : w,
                    );
                    break;
                  default:
                    la(k, S, S, S, [""], w, 0, u, w);
                }
        }
        ((c = l = v = 0), (f = _ = 1), (m = k = ""), (d = o));
        break;
      case 58:
        ((d = 1 + vt(k)), (v = g));
      default:
        if (f < 1) {
          if (b == 123) --f;
          else if (b == 125 && f++ == 0 && l0() == 125) continue;
        }
        switch (((k += $a(b)), b * f)) {
          case 38:
            _ = l > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (vt(k) - 1) * _), (_ = 1));
            break;
          case 64:
            (_t() === 45 && (k += ca(Fe())), (p = _t()), (l = d = vt((m = k += p0(ua())))), b++);
            break;
          case 45:
            g === 45 && vt(k) == 2 && (f = 0);
        }
    }
  return a;
}
function Ed(e, t, r, n, i, a, o, u, s, c, l) {
  for (var d = i - 1, p = i === 0 ? a : [""], v = uu(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var _ = 0, b = ki(e, d + 1, (d = i0((f = o[g])))), m = e; _ < v; ++_)
      (m = gp(f > 0 ? p[_] + " " + b : Q(b, /&\f/g, p[_]))) && (s[h++] = m);
  return Ga(e, t, r, i === 0 ? ou : u, s, c, l);
}
function g0(e, t, r) {
  return Ga(e, t, r, pp, $a(c0()), ki(e, 2, -2), 0);
}
function kd(e, t, r, n) {
  return Ga(e, t, r, su, ki(e, 0, n), ki(e, n + 1, -1), n);
}
function Fr(e, t) {
  for (var r = "", n = uu(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function _0(e, t, r, n) {
  switch (e.type) {
    case n0:
      if (e.children.length) break;
    case r0:
    case su:
      return (e.return = e.return || e.value);
    case pp:
      return "";
    case hp:
      return (e.return = e.value + "{" + Fr(e.children, n) + "}");
    case ou:
      e.value = e.props.join(",");
  }
  return vt((r = Fr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function b0(e) {
  var t = uu(e);
  return function (r, n, i, a) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, i, a) || "";
    return o;
  };
}
function m0(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function y0(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var w0 = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = _t()), i === 38 && a === 12 && (r[n] = 1), !xi(a); ) Fe();
    return Mi(t, Ie);
  },
  O0 = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (xi(i)) {
        case 0:
          (i === 38 && _t() === 12 && (r[n] = 1), (t[n] += w0(Ie - 1, r, n)));
          break;
        case 2:
          t[n] += ca(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = _t() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += $a(i);
      }
    while ((i = Fe()));
    return t;
  },
  S0 = function (t, r) {
    return mp(O0(bp(t), r));
  },
  xd = new WeakMap(),
  E0 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !xd.get(n)) && !i) {
        xd.set(t, !0);
        for (var a = [], o = S0(r, a), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = a[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  k0 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function yp(e, t) {
  switch (o0(e, t)) {
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
      return Z + e + Sa + e + ye + e + e;
    case 6828:
    case 4268:
      return Z + e + ye + e + e;
    case 6165:
      return Z + e + ye + "flex-" + e + e;
    case 5187:
      return Z + e + Q(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return Z + e + ye + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + ye + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + ye + Q(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + ye + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + Q(e, "-grow", "") + Z + e + ye + Q(e, "grow", "positive") + e;
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
          Q(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + ye + "flex-pack:$3"),
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
      if (vt(e) - 1 - t > 6)
        switch (me(e, t + 1)) {
          case 109:
            if (me(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + Sa + (me(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Cs(e, "stretch") ? yp(Q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (me(e, t + 1) !== 115) break;
    case 6444:
      switch (me(e, vt(e) - 3 - (~Cs(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + Z) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                (me(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Z +
                "$2$3$1" +
                ye +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (me(e, t + 11)) {
        case 114:
          return Z + e + ye + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + ye + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + ye + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + ye + e + e;
  }
  return e;
}
var x0 = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case su:
          t.return = yp(t.value, t.length);
          break;
        case hp:
          return Fr([ii(t, { value: Q(t.value, "@", "@" + Z) })], i);
        case ou:
          if (t.length)
            return u0(t.props, function (a) {
              switch (s0(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Fr([ii(t, { props: [Q(a, /:(read-\w+)/, ":" + Sa + "$1")] })], i);
                case "::placeholder":
                  return Fr(
                    [
                      ii(t, { props: [Q(a, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      ii(t, { props: [Q(a, /:(plac\w+)/, ":" + Sa + "$1")] }),
                      ii(t, { props: [Q(a, /:(plac\w+)/, ye + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  R0 = [x0],
  P0 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || R0,
      a = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var h = f.getAttribute("data-emotion").split(" "), _ = 1; _ < h.length; _++)
            a[h[_]] = !0;
          u.push(f);
        },
      ));
    var s,
      c = [E0, k0];
    {
      var l,
        d = [
          _0,
          m0(function (f) {
            l.insert(f);
          }),
        ],
        p = b0(c.concat(i, d)),
        v = function (h) {
          return Fr(h0(h), p);
        };
      s = function (h, _, b, m) {
        ((l = b), v(h ? h + "{" + _.styles + "}" : _.styles), m && (g.inserted[_.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new t0({
        key: r,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: s,
    };
    return (g.sheet.hydrate(u), g);
  },
  as = { exports: {} },
  ee = {};
var Rd;
function C0() {
  if (Rd) return ee;
  Rd = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    i = e ? Symbol.for("react.strict_mode") : 60108,
    a = e ? Symbol.for("react.profiler") : 60114,
    o = e ? Symbol.for("react.provider") : 60109,
    u = e ? Symbol.for("react.context") : 60110,
    s = e ? Symbol.for("react.async_mode") : 60111,
    c = e ? Symbol.for("react.concurrent_mode") : 60111,
    l = e ? Symbol.for("react.forward_ref") : 60112,
    d = e ? Symbol.for("react.suspense") : 60113,
    p = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    g = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    h = e ? Symbol.for("react.fundamental") : 60117,
    _ = e ? Symbol.for("react.responder") : 60118,
    b = e ? Symbol.for("react.scope") : 60119;
  function m(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case t:
          switch (((w = w.type), w)) {
            case s:
            case c:
            case n:
            case a:
            case i:
            case d:
              return w;
            default:
              switch (((w = w && w.$$typeof), w)) {
                case u:
                case l:
                case g:
                case v:
                case o:
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
  function O(w) {
    return m(w) === c;
  }
  return (
    (ee.AsyncMode = s),
    (ee.ConcurrentMode = c),
    (ee.ContextConsumer = u),
    (ee.ContextProvider = o),
    (ee.Element = t),
    (ee.ForwardRef = l),
    (ee.Fragment = n),
    (ee.Lazy = g),
    (ee.Memo = v),
    (ee.Portal = r),
    (ee.Profiler = a),
    (ee.StrictMode = i),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (w) {
      return O(w) || m(w) === s;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (w) {
      return m(w) === u;
    }),
    (ee.isContextProvider = function (w) {
      return m(w) === o;
    }),
    (ee.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (ee.isForwardRef = function (w) {
      return m(w) === l;
    }),
    (ee.isFragment = function (w) {
      return m(w) === n;
    }),
    (ee.isLazy = function (w) {
      return m(w) === g;
    }),
    (ee.isMemo = function (w) {
      return m(w) === v;
    }),
    (ee.isPortal = function (w) {
      return m(w) === r;
    }),
    (ee.isProfiler = function (w) {
      return m(w) === a;
    }),
    (ee.isStrictMode = function (w) {
      return m(w) === i;
    }),
    (ee.isSuspense = function (w) {
      return m(w) === d;
    }),
    (ee.isValidElementType = function (w) {
      return (
        typeof w == "string" ||
        typeof w == "function" ||
        w === n ||
        w === c ||
        w === a ||
        w === i ||
        w === d ||
        w === p ||
        (typeof w == "object" &&
          w !== null &&
          (w.$$typeof === g ||
            w.$$typeof === v ||
            w.$$typeof === o ||
            w.$$typeof === u ||
            w.$$typeof === l ||
            w.$$typeof === h ||
            w.$$typeof === _ ||
            w.$$typeof === b ||
            w.$$typeof === f))
      );
    }),
    (ee.typeOf = m),
    ee
  );
}
var Pd;
function A0() {
  return (Pd || ((Pd = 1), (as.exports = C0())), as.exports);
}
var os, Cd;
function I0() {
  if (Cd) return os;
  Cd = 1;
  var e = A0(),
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
    i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    a = {};
  ((a[e.ForwardRef] = n), (a[e.Memo] = i));
  function o(g) {
    return e.isMemo(g) ? i : a[g.$$typeof] || t;
  }
  var u = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    p = Object.prototype;
  function v(g, f, h) {
    if (typeof f != "string") {
      if (p) {
        var _ = d(f);
        _ && _ !== p && v(g, _, h);
      }
      var b = s(f);
      c && (b = b.concat(c(f)));
      for (var m = o(g), O = o(f), w = 0; w < b.length; ++w) {
        var S = b[w];
        if (!r[S] && !(h && h[S]) && !(O && O[S]) && !(m && m[S])) {
          var k = l(f, S);
          try {
            u(g, S, k);
          } catch {}
        }
      }
    }
    return g;
  }
  return ((os = v), os);
}
I0();
var j0 = !0;
function wp(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
    }),
    n
  );
}
var cu = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || j0 === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
  },
  Op = function (t, r, n) {
    cu(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do (t.insert(r === a ? "." + i : "", a, t.sheet, !0), (a = a.next));
      while (a !== void 0);
    }
  };
function D0(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
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
  switch (i) {
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
var T0 = {
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
  M0 = /[A-Z]|^ms/g,
  F0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Sp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ad = function (t) {
    return t != null && typeof t != "boolean";
  },
  ss = y0(function (e) {
    return Sp(e) ? e : e.replace(M0, "-$&").toLowerCase();
  }),
  Id = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(F0, function (n, i, a) {
            return ((pt = { name: i, styles: a, next: pt }), i);
          });
    }
    return T0[t] !== 1 && !Sp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ri(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1) return ((pt = { name: i.name, styles: i.styles, next: pt }), i.name);
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((pt = { name: o.name, styles: o.styles, next: pt }), (o = o.next));
        var u = a.styles + ";";
        return u;
      }
      return L0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = pt,
          c = r(e);
        return ((pt = s), Ri(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function L0(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += Ri(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += a + "{" + t[u] + "}")
          : Ad(u) && (n += ss(a) + ":" + Id(a, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) Ad(o[s]) && (n += ss(a) + ":" + Id(a, o[s]) + ";");
      else {
        var c = Ri(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += ss(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var jd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  pt;
function lu(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    i = "";
  pt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0) ((n = !1), (i += Ri(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((i += Ri(r, t, e[u])), n)) {
      var s = a;
      i += s[u];
    }
  jd.lastIndex = 0;
  for (var c = "", l; (l = jd.exec(i)) !== null; ) c += "-" + l[1];
  var d = D0(i) + c;
  return { name: d, styles: i, next: pt };
}
var B0 = function (t) {
    return t();
  },
  N0 = Lu.useInsertionEffect ? Lu.useInsertionEffect : !1,
  Ep = N0 || B0,
  kp = y.createContext(typeof HTMLElement < "u" ? P0({ key: "css" }) : null);
kp.Provider;
var xp = function (t) {
    return y.forwardRef(function (r, n) {
      var i = y.useContext(kp);
      return t(r, i, n);
    });
  },
  Rp = y.createContext({}),
  du = {}.hasOwnProperty,
  Is = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  U0 = function (t, r) {
    var n = {};
    for (var i in r) du.call(r, i) && (n[i] = r[i]);
    return ((n[Is] = t), n);
  },
  q0 = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      cu(r, n, i),
      Ep(function () {
        return Op(r, n, i);
      }),
      null
    );
  },
  z0 = xp(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var i = e[Is],
      a = [n],
      o = "";
    typeof e.className == "string"
      ? (o = wp(t.registered, a, e.className))
      : e.className != null && (o = e.className + " ");
    var u = lu(a, void 0, y.useContext(Rp));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) du.call(e, c) && c !== "css" && c !== Is && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(q0, { cache: t, serialized: u, isStringTag: typeof i == "string" }),
        y.createElement(i, s),
      )
    );
  }),
  $0 = z0,
  jt = function (t, r) {
    var n = arguments;
    if (r == null || !du.call(r, "css")) return y.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = $0), (a[1] = U0(t, r)));
    for (var o = 2; o < i; o++) a[o] = n[o];
    return y.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(jt || (jt = {}));
function kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return lu(t);
}
var V0 = function e(t) {
  for (var r = t.length, n = 0, i = ""; n < r; n++) {
    var a = t[n];
    if (a != null) {
      var o = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a)) o = e(a);
          else {
            o = "";
            for (var u in a) a[u] && u && (o && (o += " "), (o += u));
          }
          break;
        }
        default:
          o = a;
      }
      o && (i && (i += " "), (i += o));
    }
  }
  return i;
};
function G0(e, t, r) {
  var n = [],
    i = wp(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var H0 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Ep(function () {
        for (var i = 0; i < n.length; i++) Op(r, n[i], !1);
      }),
      null
    );
  },
  W0 = xp(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = lu(c, t.registered);
        return (r.push(d), cu(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return G0(t.registered, n, V0(c));
      },
      a = { css: n, cx: i, theme: y.useContext(Rp) },
      o = e.children(a);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(H0, { cache: t, serializedArr: r }),
      o,
    );
  });
function K0(e, t) {
  var r = y.useRef(!0);
  y.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var Pp = 2,
  js = kt({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: Pp,
  }),
  Ds = kt({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -Pp,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  J0 = kt({
    "&:focus": js,
    "&:focus-visible": js,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  Y0 = kt({
    "&:focus": Ds,
    "&:focus-visible": Ds,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Cp = y.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      i = r ? Ds : js,
      a = r ? Y0 : J0,
      o = typeof n > "u" ? a : n === "on" && i;
    return jt(W0, null, function (u) {
      var s = u.css,
        c = u.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Cp.displayName = "FocusRing";
function It(e) {
  (e.preventDefault(), e.stopPropagation());
}
var X0 = 9;
function Dd(e) {
  e.keyCode !== X0 && It(e);
}
var Z0 = {
    onMouseDownCapture: It,
    onMouseUpCapture: It,
    onKeyDownCapture: Dd,
    onKeyUpCapture: Dd,
    onTouchStartCapture: It,
    onTouchEndCapture: It,
    onPointerDownCapture: It,
    onPointerUpCapture: It,
    onClickCapture: It,
    onClick: It,
  },
  Q0 = {};
function ew(e) {
  var t = e.isInteractive;
  return t ? Q0 : Z0;
}
function Td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Re(e) {
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
var Ht = 8,
  us = ["default", "primary", "danger", "warning"],
  Ts = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  tw = { default: Ts.default, compact: Ts.compact, none: "inherit" },
  rw = {
    default: "0 ".concat(Ht + Ht / 4, "px"),
    compact: "0 ".concat(Ht + Ht / 4, "px"),
    none: "0",
  },
  nw = { compact: "0 ".concat(Ht / 4, "px"), default: "0 ".concat(Ht / 4, "px"), none: "0" },
  iw = { default: "middle", compact: "middle", none: "baseline" },
  Ap = { content: "0 ".concat(Ht / 4, "px"), icon: "0 ".concat(Ht / 4, "px") },
  Ip = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  aw = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Re(Re({}, Ip), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  ow = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  sw = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  uw = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  cw = {
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
  lw = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  dw = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  fw = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Re(
      Re({}, Ip),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  vw = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function pw(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Re(
    Re(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: Br("platform-dst-shape-theme-default")
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
        height: Ts[r],
        lineHeight: tw[r],
        padding: a ? nw[r] : rw[r],
        verticalAlign: iw[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? fw
        : Re(
            Re(
              Re(
                Re(
                  Re(
                    Re(
                      Re(Re({}, t === "default" && aw), t === "primary" && ow),
                      t === "link" && sw,
                    ),
                    t === "subtle" && uw,
                  ),
                  t === "subtle-link" && cw,
                ),
                t === "warning" && lw,
              ),
              t === "danger" && dw,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: us.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: us.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: us.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            vw,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Md(e) {
  var t = e.spacing;
  return kt({
    display: "flex",
    margin: t === "none" ? 0 : Ap.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function hw(e) {
  var t = e.spacing;
  return kt({
    margin: t === "none" ? 0 : Ap.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function gw(e) {
  var t = e.hasOverlay;
  return kt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var _w = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fu = function (t) {
    return t && y.isValidElement(t) && t.type === au;
  },
  bw = [
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
  mw = { "> *": { pointerEvents: "none" } },
  yw = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  ww = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Fd = function (t, r) {
    return !t || fu(t) ? null : r;
  },
  Ow = function (t, r) {
    return fu(t) ? t : t ? jt("span", { css: r }, t) : null;
  },
  Sw = E.forwardRef(function (t, r) {
    var n = t.analyticsContext,
      i = t.appearance,
      a = i === void 0 ? "default" : i,
      o = t.autoFocus,
      u = o === void 0 ? !1 : o,
      s = t.buttonCss,
      c = t.children,
      l = t.className,
      d = t.href,
      p = t.component,
      v = p === void 0 ? (d ? "a" : "button") : p,
      g = t.iconAfter,
      f = t.iconBefore,
      h = t.interactionName,
      _ = t.isDisabled,
      b = _ === void 0 ? !1 : _,
      m = t.isSelected,
      O = m === void 0 ? !1 : m,
      w = t.onBlur,
      S = t.onClick,
      k = S === void 0 ? we : S,
      D = t.onFocus,
      I = t.onMouseDown,
      P = I === void 0 ? we : I,
      T = t.overlay;
    t.shouldFitContainer;
    var q = t.spacing,
      U = q === void 0 ? "default" : q,
      V = t.tabIndex,
      Y = V === void 0 ? 0 : V,
      G = t.type,
      $ = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      B = ne(t, bw),
      A = y.useRef(),
      be = y.useCallback(
        function (pe) {
          if (((A.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [A, r],
      );
    K0(A, u);
    var ae = y.useContext(tu),
      ue = y.useCallback(
        function (pe, ze) {
          (ae && ae.tracePress(h, pe.timeStamp), k(pe, ze));
        },
        [k, ae, h],
      ),
      le = Si({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      ge = y.useCallback(
        function (pe) {
          (pe.preventDefault(), P(pe));
        },
        [P],
      );
    y.useEffect(
      function () {
        var pe = A.current;
        b && pe && pe === document.activeElement && pe.blur();
      },
      [b],
    );
    var ce = !!T,
      qe = kt(gw({ hasOverlay: ce })),
      Oe = !b && !ce,
      tt = {};
    return (
      (O || b || a === "warning") &&
        (tt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || b
                ? "var(--ds-icon-subtle, ".concat(Os, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Os, ")"),
              " !important",
            ),
          },
        }),
      jt(
        Cp,
        null,
        jt(
          v,
          te(
            {},
            B,
            {
              ref: be,
              className: l,
              css: [s, Oe ? null : mw],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: b,
              href: Oe ? d : void 0,
              onBlur: w,
              onClick: le,
              onFocus: D,
              onMouseDown: ge,
              tabIndex: b ? -1 : Y,
              type: $,
            },
            ew({ isInteractive: Oe }),
          ),
          f ? jt("span", { css: [qe, Md({ spacing: U }), Fd(c, yw)] }, f) : null,
          Ow(c, [qe, hw({ spacing: U })]),
          g ? jt("span", { css: [qe, Md({ spacing: U }), Fd(c, ww)] }, g) : null,
          T ? jt("span", { css: [_w, tt] }, T) : null,
        ),
      )
    );
  });
function Ew(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return fu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var kw = [
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
  Ld = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  vu = E.memo(
    E.forwardRef(function (t, r) {
      var n = t.appearance,
        i = n === void 0 ? "default" : n,
        a = t.children,
        o = t.iconBefore,
        u = t.iconAfter,
        s = t.isSelected,
        c = s === void 0 ? !1 : s,
        l = t.onMouseDown,
        d = l === void 0 ? we : l,
        p = t.onMouseUp,
        v = p === void 0 ? we : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        _ = h === void 0 ? "default" : h,
        b = ne(t, kw),
        m = Zy(),
        O = m.mode,
        w = Ew({ children: a, iconBefore: o, iconAfter: u }),
        S = y.useState(!1),
        k = K(S, 2),
        D = k[0],
        I = k[1],
        P = y.useCallback(
          function (U) {
            (d(U), Ld && I(!0));
          },
          [d, I],
        ),
        T = y.useCallback(
          function (U) {
            (v(U), Ld && I(!1));
          },
          [v, I],
        ),
        q = y.useMemo(
          function () {
            return pw({
              appearance: i,
              spacing: _,
              isSelected: c,
              shouldFitContainer: f,
              isOnlySingleIcon: w,
            });
          },
          [i, _, O, c, f, w],
        );
      return E.createElement(
        Sw,
        te({}, b, {
          ref: r,
          appearance: i,
          buttonCss: q,
          children: a,
          "data-firefox-is-active": D ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: P,
          onMouseUp: T,
          spacing: _,
        }),
      );
    }),
  );
vu.displayName = "Button";
function Bd(e) {
  return E.createElement(vu, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function xw(e) {
  return E.createElement(vu, te({}, e, { appearance: "subtle" }));
}
var Rw = { container: "_1e0c1txw _kqswh2mm" };
function Pw(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    qa,
    { as: "li", testId: r, key: t, xcss: Rw.container, paddingInline: "space.100" },
    E.createElement(
      Py,
      { testId: r && "".concat(r, "-text") },
      E.createElement(au, null, "Skipped pages from ", n, " to ", i),
      "…",
    ),
  );
}
var Nd = {},
  Ud =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function Cw(e, t) {
  return !!(e === t || (Ud(e) && Ud(t)));
}
function Aw(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Cw(e[r], t[r])) return !1;
  return !0;
}
function Iw(e, t) {
  t === void 0 && (t = Aw);
  var r = null;
  function n() {
    for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
    if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult;
    var o = e.apply(this, i);
    return ((r = { lastResult: o, lastArgs: i, lastThis: this }), o);
  }
  return (
    (n.clear = function () {
      r = null;
    }),
    n
  );
}
var jw = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > a,
    l = c && a - 4 < r,
    d = c && r < s - a + 3,
    p = Iw(function () {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(h, _).map(function (b, m) {
        return u(b, h + m, i);
      });
    });
  if (!c) return p(0, s);
  if (l && !d) {
    var v = a - 2;
    return [].concat(
      De(p(0, 1)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: 2, to: s - v })],
      De(p(s - v)),
    );
  }
  if (!l && d) {
    var g = a - 2;
    return [].concat(
      De(p(0, g)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: g + 1, to: s - 1 })],
      De(p(s - 1)),
    );
  }
  var f = a - 4;
  return [].concat(
    De(p(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: i && "".concat(i, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    De(p(r - Math.floor(f / 2), r + f - 1)),
    [o({ key: "ellipsis-2", testId: i && "".concat(i, "-ellipsis"), from: r + 3, to: s - 1 })],
    De(p(s - 1)),
  );
};
function qd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Dw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Ms = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  Tw = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function zd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Jm : Zm;
  return E.createElement(
    qa,
    { as: "span", xcss: Ms.navigatorIconWrapper },
    E.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function Mw(e, t) {
  var r = e.components,
    n = r === void 0 ? Nd : r,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    u = e.label,
    s = u === void 0 ? "pagination" : u,
    c = e.pageLabel,
    l = c === void 0 ? "page" : c,
    d = e.previousLabel,
    p = d === void 0 ? "previous" : d,
    v = e.nextLabel,
    g = v === void 0 ? "next" : v,
    f = e.style,
    h = f === void 0 ? Nd : f,
    _ = e.max,
    b = _ === void 0 ? 7 : _,
    m = e.onChange,
    O = m === void 0 ? we : m,
    w = e.pages,
    S = e.getPageLabel,
    k = e.renderEllipsis,
    D = k === void 0 ? Pw : k,
    I = e.analyticsContext,
    P = e.testId,
    T = e.isDisabled,
    q = Bb(o, function () {
      return a || 0;
    }),
    U = K(q, 2),
    V = U[0],
    Y = U[1],
    G = Si(
      Dw(
        {
          fn: function (B, A) {
            var be = B.event,
              ae = B.selectedPageIndex;
            (o === void 0 && Y(ae), O && O(be, w[ae], A));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        Tw,
      ),
    ),
    $ = function (B, A, be) {
      var ae = w[V],
        ue = "".concat(l, " ").concat(S ? S(B, A) : B),
        le = B === ae;
      return E.createElement(
        oa,
        { as: "li", xcss: Ms.paginationMenuItem, key: "page-".concat(S ? S(B, A) : A) },
        E.createElement(
          xw,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: A });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: T,
            page: B,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(A),
          },
          S ? S(B, A) : B,
        ),
      );
    };
  return E.createElement(
    qa,
    { testId: P, style: h, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      oa,
      { space: "space.0", alignBlock: "center" },
      E.createElement(Bd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (B) {
          return G({ event: B, selectedPageIndex: V - 1 });
        },
        isDisabled: T || V === 0,
        iconBefore: E.createElement(zd, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      E.createElement(
        oa,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ms.paginationMenu },
        jw(w, V, { max: b, ellipsis: D, transform: $ }, P),
      ),
      E.createElement(Bd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (B) {
          return G({ event: B, selectedPageIndex: V + 1 });
        },
        isDisabled: T || V === w.length - 1,
        iconBefore: E.createElement(zd, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var Fw = y.memo(y.forwardRef(Mw));
function Lw(e, t, r) {
  return (
    (t = J(t)),
    Be(e, jp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var Bw = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = Lw(this, t, [].concat(i))),
        x(r, "onChange", function (o, u, s) {
          r.props.onChange(u, s);
        }),
        r
      );
    }
    return (
      Ne(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.total,
              a = n.value,
              o = a === void 0 ? 1 : a,
              u = n.i18n,
              s = n.testId,
              c = n.isDisabled,
              l = De(Array(i)).map(function (p, v) {
                return v + 1;
              }),
              d = o - 1;
            return E.createElement(Fw, {
              selectedIndex: d,
              isDisabled: c,
              label: u?.label,
              nextLabel: u?.next,
              previousLabel: u?.prev,
              pageLabel: u?.pageLabel,
              onChange: this.onChange,
              pages: l,
              testId: s && "".concat(s, "--pagination"),
            });
          },
        },
      ])
    );
  })(E.Component),
  Nw = ["isRanking", "testId"],
  Uw = [
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
function $d(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ai(e) {
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
var Vd = "--local-dynamic-table-text-color",
  qw = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ne(t, Nw);
    return y.createElement(
      "thead",
      te({ "data-testid": n }, i, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  zw = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ne(e, Uw),
      l = ai(
        ai(ai({}, u), r && $v({ width: r })),
        {},
        x({}, Vd, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === cr,
      p = i === ya,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return y.createElement(
      g,
      te({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: ai(
          ai({}, l),
          {},
          { "--_17ckjys": qv("var(--ds-text-subtle, ".concat("var(".concat(Vd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function $w(e, t, r) {
  return (
    (t = J(t)),
    Be(e, Dp() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function Dp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dp = function () {
    return !!e;
  })();
}
function Vw(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = $w(this, r, [].concat(a))),
        x(n, "state", { refWidth: 0, refHeight: 0 }),
        x(n, "innerRef", function (u) {
          u && !n.props.isRanking && (n.ref = u);
        }),
        x(n, "updateDimensions", function () {
          if (n.ref) {
            var u = n.ref.getBoundingClientRect(),
              s = u.width,
              c = u.height;
            (s !== n.state.refWidth || c !== n.state.refHeight) &&
              n.setState({ refWidth: s, refHeight: c });
          }
        }),
        n
      );
    }
    return (
      Ne(r, t),
      ve(r, [
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (i) {
            var a = this.props.isRanking,
              o = i.isRanking;
            o && !a && this.updateDimensions();
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.state,
              a = i.refWidth,
              o = i.refHeight;
            return E.createElement(
              e,
              te({ refWidth: a, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(E.Component);
}
var oi = {},
  Gd;
function Gw() {
  if (Gd) return oi;
  ((Gd = 1), Object.defineProperty(oi, "__esModule", { value: !0 }), (oi.default = void 0));
  var e = r(hr()),
    t = r(Ua);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowDownIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ArrowDownIcon"), (oi.default = n), oi);
}
var Hw = Gw();
const Ww = Yt(Hw);
var si = {},
  Hd;
function Kw() {
  if (Hd) return si;
  ((Hd = 1), Object.defineProperty(si, "__esModule", { value: !0 }), (si.default = void 0));
  var e = r(hr()),
    t = r(Ua);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  const n = (i) =>
    e.default.createElement(
      t.default,
      Object.assign(
        {
          name: "ArrowUpIcon",
          dangerouslySetGlyph:
            '<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>',
        },
        i,
      ),
    );
  return ((n.displayName = "ArrowUpIcon"), (si.default = n), si);
}
var Jw = Kw();
const Yw = Yt(Jw);
var Xw = "Escape";
function Zw(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    i = y.useCallback(
      function (o) {
        r || n.current || o.key !== Xw || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!r)
        return za.bindAll(
          document,
          [
            { type: "keydown", listener: i },
            { type: "keyup", listener: a },
          ],
          { capture: !1 },
        );
    },
    [i, a, r],
  );
}
function ui(e) {
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
var Qw = y.createContext(null),
  e1 = y.createContext(null);
function t1() {
  var e = y.useContext(e1);
  return e;
}
function r1(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = y.useContext(Qw),
    a = t1();
  y.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var fi = { none: 0, small: 100, medium: 350, large: 700 },
  cs = 0.5,
  n1 = { none: fi.none, small: fi.small * cs, medium: fi.medium * cs, large: fi.large * cs },
  i1 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  a1 = function () {
    if (!i1()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  o1 = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  s1 = function () {
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
      }, o1(t)),
      y.useCallback(function (n, i) {
        for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++)
          o[u - 2] = arguments[u];
        var s = setTimeout.apply(
          void 0,
          [
            function () {
              ((r.current = r.current.filter(function (c) {
                return c !== s;
              })),
                n());
            },
            i,
          ].concat(o),
        );
        r.current.push(s);
      }, [])
    );
  },
  Tp = { appear: !0, isExiting: !1 },
  Mp = y.createContext(Tp),
  Wd = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tp;
    return E.createElement(Mp.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Kd = function (t) {
    var r = [];
    return (
      y.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  u1 = function (t, r) {
    for (var n = r.concat([]), i = c1(r), a = 0; a < t.length; a++) {
      var o = t[a],
        u = !i[o.key];
      u && n.splice(a + 1, 0, o);
    }
    return n;
  },
  c1 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  l1 = function (t, r) {
    for (
      var n = new Set(
          t.map(function (s) {
            return s.key;
          }),
        ),
        i = new Set(),
        a = 0;
      a < r.length;
      a++
    ) {
      var o = r[a],
        u = o.key;
      n.has(u) || i.add(u);
    }
    return i;
  },
  Fp = y.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      i = e.exitThenEnter,
      a = y.useState([null, n]),
      o = K(a, 2),
      u = o[0],
      s = o[1],
      c = y.useState([]),
      l = K(c, 2),
      d = l[0],
      p = l[1],
      v = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = K(v, 2),
      f = g[0],
      h = g[1];
    if (
      (y.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var _ = K(u, 2),
      b = _[0],
      m = _[1],
      O = Kd(b),
      w = Kd(m);
    m !== n && s([m, n]);
    var S = l1(w, O),
      k = !!S.size,
      D = w;
    if ((k && (D = u1(w, O)), i))
      if (d.length) D = d;
      else {
        var I = D.filter(function (P) {
          return S.has(P.key);
        });
        I.length && p(I);
      }
    return (
      S.size
        ? (D = D.map(function (P) {
            var T = S.has(P.key);
            return Wd(P, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (D = D.map(function (P) {
            return Wd(P, f);
          })),
      D
    );
  }),
  d1 = function () {
    return y.useContext(Mp);
  };
Fp.displayName = "ExitingPersistence";
function f1() {
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
var v1 = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  p1 = function () {
    var t = f1(),
      r = y.useContext(v1);
    return r(t);
  },
  h1 = function (t) {
    var r = t.children,
      n = t.animationTimingFunction,
      i = t.animationTimingFunctionExiting,
      a = i === void 0 ? n : i,
      o = t.enteringAnimation,
      u = t.exitingAnimation,
      s = u === void 0 ? o : u,
      c = t.isPaused,
      l = t.onFinish,
      d = t.duration,
      p = d === void 0 ? "large" : d,
      v = p1(),
      g = d1(),
      f = g.isExiting,
      h = g.onFinish,
      _ = g.appear,
      b = s1(),
      m = c || !v.isReady,
      O = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = y.useState(_),
      k = K(S, 2),
      D = k[0],
      I = k[1];
    return (
      y.useEffect(
        function () {
          var P = !1;
          if (!m) {
            if (!_) {
              l && l(w);
              return;
            }
            var T = function () {
              (w === "exiting" && h?.(), P || I(!1), l?.(w));
            };
            if (a1()) {
              T();
              return;
            }
            return (
              I(!0),
              b(T, f ? n1[p] : fi[p] + O),
              function () {
                P = !0;
              }
            );
          }
        },
        [h, w, f, p, O, m, b],
      ),
      r(
        {
          ref: v.ref,
          className: D
            ? R([
                R(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                m && R(["_1y0ctrqk"]),
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
                f && a === "ease-out" && R(["_1pgldkwg"]),
                f && a === "ease-in" && R(["_1pgl1nzg"]),
                f && a === "ease-in-40-out" && R(["_1pgl5y64"]),
                f && a === "ease-in-60-out" && R(["_1pgl1ddy"]),
                f && a === "ease-in-80-out" && R(["_1pglannl"]),
                f && a === "ease-in-out" && R(["_1pgl1fu8"]),
                ((!f && o === "fade-in") || (f && s === "fade-in")) && R(["_j7hq1cgr"]),
                ((!f && o === "fade-out") || (f && s === "fade-out")) && R(["_j7hq1lln"]),
                ((!f && o === "zoom-in") || (f && s === "zoom-in")) && R(["_j7hqe8p0"]),
                ((!f && o === "zoom-out") || (f && s === "zoom-out")) && R(["_j7hqy6ql"]),
                ((!f && o === "slide-in-from-top") || (f && s === "slide-in-from-top")) &&
                  R(["_j7hqqshu"]),
                ((!f && o === "slide-out-from-top") || (f && s === "slide-out-from-top")) &&
                  R(["_j7hq7ri4"]),
                ((!f && o === "slide-in-from-right") || (f && s === "slide-in-from-right")) &&
                  R(["_j7hqdfjr"]),
                ((!f && o === "slide-out-from-right") || (f && s === "slide-out-from-right")) &&
                  R(["_j7hqonfj"]),
                ((!f && o === "slide-in-from-bottom") || (f && s === "slide-in-from-bottom")) &&
                  R(["_j7hq1liq"]),
                ((!f && o === "slide-out-from-bottom") || (f && s === "slide-out-from-bottom")) &&
                  R(["_j7hqhnf1"]),
                ((!f && o === "slide-in-from-left") || (f && s === "slide-in-from-left")) &&
                  R(["_j7hq1bh1"]),
                ((!f && o === "slide-out-from-left") || (f && s === "slide-out-from-left")) &&
                  R(["_j7hqj08w"]),
                ((!f && o === "fade-in-from-top") || (f && s === "fade-in-from-top")) &&
                  R(["_j7hq2iua"]),
                ((!f && o === "fade-out-from-top") || (f && s === "fade-out-from-top")) &&
                  R(["_j7hq39va"]),
                ((!f && o === "fade-in-from-left") || (f && s === "fade-in-from-left")) &&
                  R(["_j7hq15m2"]),
                ((!f && o === "fade-out-from-left") || (f && s === "fade-out-from-left")) &&
                  R(["_j7hq1yiv"]),
                ((!f && o === "fade-in-from-bottom") || (f && s === "fade-in-from-bottom")) &&
                  R(["_j7hq1w00"]),
                ((!f && o === "fade-out-from-bottom") || (f && s === "fade-out-from-bottom")) &&
                  R(["_j7hqzy3z"]),
                ((!f && o === "fade-in-from-right") || (f && s === "fade-in-from-right")) &&
                  R(["_j7hqpqak"]),
                ((!f && o === "fade-out-from-right") || (f && s === "fade-out-from-right")) &&
                  R(["_j7hq1ebg"]),
                ((!f && o === "fade-in-from-top-constant") ||
                  (f && s === "fade-in-from-top-constant")) &&
                  R(["_j7hqm2e2"]),
                ((!f && o === "fade-out-from-top-constant") ||
                  (f && s === "fade-out-from-top-constant")) &&
                  R(["_j7hq97jn"]),
                ((!f && o === "fade-in-from-left-constant") ||
                  (f && s === "fade-in-from-left-constant")) &&
                  R(["_j7hqovgq"]),
                ((!f && o === "fade-out-from-left-constant") ||
                  (f && s === "fade-out-from-left-constant")) &&
                  R(["_j7hq15do"]),
                ((!f && o === "fade-in-from-bottom-constant") ||
                  (f && s === "fade-in-from-bottom-constant")) &&
                  R(["_j7hq797a"]),
                ((!f && o === "fade-out-from-bottom-constant") ||
                  (f && s === "fade-out-from-bottom-constant")) &&
                  R(["_j7hqwo7r"]),
                ((!f && o === "fade-in-from-right-constant") ||
                  (f && s === "fade-in-from-right-constant")) &&
                  R(["_j7hqt8u5"]),
                ((!f && o === "fade-out-from-right-constant") ||
                  (f && s === "fade-out-from-right-constant")) &&
                  R(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        w,
      )
    );
  },
  g1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  _1 = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? g1[a] : void 0,
      p =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      h1,
      {
        duration: i,
        enteringAnimation: a
          ? "fade-in-from-".concat(a).concat(s === "proportional" ? "" : "-constant")
          : "fade-in",
        exitingAnimation: p,
        animationTimingFunction: "ease-in-out",
        onFinish: c,
        isPaused: l,
      },
      r,
    );
  },
  b1 = y.createContext();
y.createContext();
var m1 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  y1 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  w1 = function (t, r) {
    if (typeof t == "function") return y1(t, r);
    t != null && (t.current = r);
  },
  Jd = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        a = n[1];
      return ((r[i] = a), r);
    }, {});
  },
  Yd =
    typeof window < "u" && window.document && window.document.createElement
      ? y.useLayoutEffect
      : y.useEffect,
  Pe = "top",
  Ze = "bottom",
  Qe = "right",
  Ce = "left",
  pu = "auto",
  Fi = [Pe, Ze, Qe, Ce],
  Ur = "start",
  Pi = "end",
  O1 = "clippingParents",
  Lp = "viewport",
  ci = "popper",
  S1 = "reference",
  Xd = Fi.reduce(function (e, t) {
    return e.concat([t + "-" + Ur, t + "-" + Pi]);
  }, []),
  Bp = [].concat(Fi, [pu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Ur, t + "-" + Pi]);
  }, []),
  E1 = "beforeRead",
  k1 = "read",
  x1 = "afterRead",
  R1 = "beforeMain",
  P1 = "main",
  C1 = "afterMain",
  A1 = "beforeWrite",
  I1 = "write",
  j1 = "afterWrite",
  D1 = [E1, k1, x1, R1, P1, C1, A1, I1, j1];
function St(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Le(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function lr(e) {
  var t = Le(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xe(e) {
  var t = Le(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Le(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function T1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Xe(a) ||
      !St(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var u = i[o];
        u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function M1(e) {
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
        var i = t.elements[n],
          a = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = o.reduce(function (s, c) {
            return ((s[c] = ""), s);
          }, {});
        !Xe(i) ||
          !St(i) ||
          (Object.assign(i.style, u),
          Object.keys(a).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const F1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: T1,
  effect: M1,
  requires: ["computeStyles"],
};
function bt(e) {
  return e.split("-")[0];
}
var sr = Math.max,
  Ea = Math.min,
  qr = Math.round;
function Fs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Np() {
  return !/^((?!chrome|android).)*safari/i.test(Fs());
}
function zr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Xe(e) &&
    ((i = (e.offsetWidth > 0 && qr(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && qr(n.height) / e.offsetHeight) || 1));
  var o = lr(e) ? Le(e) : window,
    u = o.visualViewport,
    s = !Np() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    l = (n.top + (s && u ? u.offsetTop : 0)) / a,
    d = n.width / i,
    p = n.height / a;
  return { width: d, height: p, top: l, right: c + d, bottom: l + p, left: c, x: c, y: l };
}
function gu(e) {
  var t = zr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Up(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && hu(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Bt(e) {
  return Le(e).getComputedStyle(e);
}
function L1(e) {
  return ["table", "td", "th"].indexOf(St(e)) >= 0;
}
function Xt(e) {
  return ((lr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ha(e) {
  return St(e) === "html" ? e : e.assignedSlot || e.parentNode || (hu(e) ? e.host : null) || Xt(e);
}
function Zd(e) {
  return !Xe(e) || Bt(e).position === "fixed" ? null : e.offsetParent;
}
function B1(e) {
  var t = /firefox/i.test(Fs()),
    r = /Trident/i.test(Fs());
  if (r && Xe(e)) {
    var n = Bt(e);
    if (n.position === "fixed") return null;
  }
  var i = Ha(e);
  for (hu(i) && (i = i.host); Xe(i) && ["html", "body"].indexOf(St(i)) < 0; ) {
    var a = Bt(i);
    if (
      a.transform !== "none" ||
      a.perspective !== "none" ||
      a.contain === "paint" ||
      ["transform", "perspective"].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === "filter") ||
      (t && a.filter && a.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function Li(e) {
  for (var t = Le(e), r = Zd(e); r && L1(r) && Bt(r).position === "static"; ) r = Zd(r);
  return r && (St(r) === "html" || (St(r) === "body" && Bt(r).position === "static"))
    ? t
    : r || B1(e) || t;
}
function _u(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gi(e, t, r) {
  return sr(e, Ea(t, r));
}
function N1(e, t, r) {
  var n = gi(e, t, r);
  return n > r ? r : n;
}
function qp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function zp(e) {
  return Object.assign({}, qp(), e);
}
function $p(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var U1 = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    zp(typeof t != "number" ? t : $p(t, Fi))
  );
};
function q1(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = bt(r.placement),
    s = _u(u),
    c = [Ce, Qe].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = U1(i.padding, r),
      p = gu(a),
      v = s === "y" ? Pe : Ce,
      g = s === "y" ? Ze : Qe,
      f = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      h = o[s] - r.rects.reference[s],
      _ = Li(a),
      b = _ ? (s === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      m = f / 2 - h / 2,
      O = d[v],
      w = b - p[l] - d[g],
      S = b / 2 - p[l] / 2 + m,
      k = gi(O, S, w),
      D = s;
    r.modifiersData[n] = ((t = {}), (t[D] = k), (t.centerOffset = k - S), t);
  }
}
function z1(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Up(t.elements.popper, i) && (t.elements.arrow = i)));
}
const $1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: q1,
  effect: z1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function $r(e) {
  return e.split("-")[1];
}
var V1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function G1(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: qr(r * i) / i || 0, y: qr(n * i) / i || 0 };
}
function Qd(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    i = e.placement,
    a = e.variation,
    o = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    p = o.x,
    v = p === void 0 ? 0 : p,
    g = o.y,
    f = g === void 0 ? 0 : g,
    h = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = h.x), (f = h.y));
  var _ = o.hasOwnProperty("x"),
    b = o.hasOwnProperty("y"),
    m = Ce,
    O = Pe,
    w = window;
  if (c) {
    var S = Li(r),
      k = "clientHeight",
      D = "clientWidth";
    if (
      (S === Le(r) &&
        ((S = Xt(r)),
        Bt(S).position !== "static" &&
          u === "absolute" &&
          ((k = "scrollHeight"), (D = "scrollWidth"))),
      (S = S),
      i === Pe || ((i === Ce || i === Qe) && a === Pi))
    ) {
      O = Ze;
      var I = d && S === w && w.visualViewport ? w.visualViewport.height : S[k];
      ((f -= I - n.height), (f *= s ? 1 : -1));
    }
    if (i === Ce || ((i === Pe || i === Ze) && a === Pi)) {
      m = Qe;
      var P = d && S === w && w.visualViewport ? w.visualViewport.width : S[D];
      ((v -= P - n.width), (v *= s ? 1 : -1));
    }
  }
  var T = Object.assign({ position: u }, c && V1),
    q = l === !0 ? G1({ x: v, y: f }, Le(r)) : { x: v, y: f };
  if (((v = q.x), (f = q.y), s)) {
    var U;
    return Object.assign(
      {},
      T,
      ((U = {}),
      (U[O] = b ? "0" : ""),
      (U[m] = _ ? "0" : ""),
      (U.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      U),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = b ? f + "px" : ""), (t[m] = _ ? v + "px" : ""), (t.transform = ""), t),
  );
}
function H1(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    a = r.adaptive,
    o = a === void 0 ? !0 : a,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: bt(t.placement),
      variation: $r(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Qd(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Qd(
          Object.assign({}, c, {
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
const W1 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: H1, data: {} };
var ta = { passive: !0 };
function K1(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    a = i === void 0 ? !0 : i,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = Le(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, ta);
      }),
    u && s.addEventListener("resize", r.update, ta),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ta);
        }),
        u && s.removeEventListener("resize", r.update, ta));
    }
  );
}
const J1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: K1,
  data: {},
};
var Y1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function da(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Y1[t];
  });
}
var X1 = { start: "end", end: "start" };
function ef(e) {
  return e.replace(/start|end/g, function (t) {
    return X1[t];
  });
}
function bu(e) {
  var t = Le(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function mu(e) {
  return zr(Xt(e)).left + bu(e).scrollLeft;
}
function Z1(e, t) {
  var r = Le(e),
    n = Xt(e),
    i = r.visualViewport,
    a = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var c = Np();
    (c || (!c && t === "fixed")) && ((u = i.offsetLeft), (s = i.offsetTop));
  }
  return { width: a, height: o, x: u + mu(e), y: s };
}
function Q1(e) {
  var t,
    r = Xt(e),
    n = bu(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = sr(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = sr(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + mu(e),
    s = -n.scrollTop;
  return (
    Bt(i || r).direction === "rtl" && (u += sr(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: u, y: s }
  );
}
function yu(e) {
  var t = Bt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Vp(e) {
  return ["html", "body", "#document"].indexOf(St(e)) >= 0
    ? e.ownerDocument.body
    : Xe(e) && yu(e)
      ? e
      : Vp(Ha(e));
}
function _i(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Vp(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Le(n),
    o = i ? [a].concat(a.visualViewport || [], yu(n) ? n : []) : n,
    u = t.concat(o);
  return i ? u : u.concat(_i(Ha(o)));
}
function Ls(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function eO(e, t) {
  var r = zr(e, !1, t === "fixed");
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
function tf(e, t, r) {
  return t === Lp ? Ls(Z1(e, r)) : lr(t) ? eO(t, r) : Ls(Q1(Xt(e)));
}
function tO(e) {
  var t = _i(Ha(e)),
    r = ["absolute", "fixed"].indexOf(Bt(e).position) >= 0,
    n = r && Xe(e) ? Li(e) : e;
  return lr(n)
    ? t.filter(function (i) {
        return lr(i) && Up(i, n) && St(i) !== "body";
      })
    : [];
}
function rO(e, t, r, n) {
  var i = t === "clippingParents" ? tO(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    u = a.reduce(
      function (s, c) {
        var l = tf(e, c, n);
        return (
          (s.top = sr(l.top, s.top)),
          (s.right = Ea(l.right, s.right)),
          (s.bottom = Ea(l.bottom, s.bottom)),
          (s.left = sr(l.left, s.left)),
          s
        );
      },
      tf(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function Gp(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    i = n ? bt(n) : null,
    a = n ? $r(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case Pe:
      s = { x: o, y: t.y - r.height };
      break;
    case Ze:
      s = { x: o, y: t.y + t.height };
      break;
    case Qe:
      s = { x: t.x + t.width, y: u };
      break;
    case Ce:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = i ? _u(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case Ur:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Pi:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ci(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    u = r.boundary,
    s = u === void 0 ? O1 : u,
    c = r.rootBoundary,
    l = c === void 0 ? Lp : c,
    d = r.elementContext,
    p = d === void 0 ? ci : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    _ = zp(typeof h != "number" ? h : $p(h, Fi)),
    b = p === ci ? S1 : ci,
    m = e.rects.popper,
    O = e.elements[g ? b : p],
    w = rO(lr(O) ? O : O.contextElement || Xt(e.elements.popper), s, l, o),
    S = zr(e.elements.reference),
    k = Gp({ reference: S, element: m, placement: i }),
    D = Ls(Object.assign({}, m, k)),
    I = p === ci ? D : S,
    P = {
      top: w.top - I.top + _.top,
      bottom: I.bottom - w.bottom + _.bottom,
      left: w.left - I.left + _.left,
      right: I.right - w.right + _.right,
    },
    T = e.modifiersData.offset;
  if (p === ci && T) {
    var q = T[i];
    Object.keys(P).forEach(function (U) {
      var V = [Qe, Ze].indexOf(U) >= 0 ? 1 : -1,
        Y = [Pe, Ze].indexOf(U) >= 0 ? "y" : "x";
      P[U] += q[Y] * V;
    });
  }
  return P;
}
function nO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? Bp : s,
    l = $r(n),
    d = l
      ? u
        ? Xd
        : Xd.filter(function (g) {
            return $r(g) === l;
          })
      : Fi,
    p = d.filter(function (g) {
      return c.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = Ci(e, { placement: f, boundary: i, rootBoundary: a, padding: o })[bt(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function iO(e) {
  if (bt(e) === pu) return [];
  var t = da(e);
  return [ef(e), t, ef(t)];
}
function aO(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var i = r.mainAxis,
        a = i === void 0 ? !0 : i,
        o = r.altAxis,
        u = o === void 0 ? !0 : o,
        s = r.fallbackPlacements,
        c = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        p = r.altBoundary,
        v = r.flipVariations,
        g = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        h = t.options.placement,
        _ = bt(h),
        b = _ === h,
        m = s || (b || !g ? [da(h)] : iO(h)),
        O = [h].concat(m).reduce(function (le, ge) {
          return le.concat(
            bt(ge) === pu
              ? nO(t, {
                  placement: ge,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : ge,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        k = new Map(),
        D = !0,
        I = O[0],
        P = 0;
      P < O.length;
      P++
    ) {
      var T = O[P],
        q = bt(T),
        U = $r(T) === Ur,
        V = [Pe, Ze].indexOf(q) >= 0,
        Y = V ? "width" : "height",
        G = Ci(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: p, padding: c }),
        $ = V ? (U ? Qe : Ce) : U ? Ze : Pe;
      w[Y] > S[Y] && ($ = da($));
      var X = da($),
        B = [];
      if (
        (a && B.push(G[q] <= 0),
        u && B.push(G[$] <= 0, G[X] <= 0),
        B.every(function (le) {
          return le;
        }))
      ) {
        ((I = T), (D = !1));
        break;
      }
      k.set(T, B);
    }
    if (D)
      for (
        var A = g ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (qe) {
              var Oe = k.get(qe);
              if (Oe)
                return Oe.slice(0, ge).every(function (tt) {
                  return tt;
                });
            });
            if (ce) return ((I = ce), "break");
          },
          ae = A;
        ae > 0;
        ae--
      ) {
        var ue = be(ae);
        if (ue === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const oO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: aO,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function rf(e, t, r) {
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
function nf(e) {
  return [Pe, Qe, Ze, Ce].some(function (t) {
    return e[t] >= 0;
  });
}
function sO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Ci(t, { elementContext: "reference" }),
    u = Ci(t, { altBoundary: !0 }),
    s = rf(o, n),
    c = rf(u, i, a),
    l = nf(s),
    d = nf(c);
  ((t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": d,
    })));
}
const uO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sO,
};
function cO(e, t, r) {
  var n = bt(e),
    i = [Ce, Pe].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    u = a[1];
  return (
    (o = o || 0),
    (u = (u || 0) * i),
    [Ce, Qe].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function lO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Bp.reduce(function (l, d) {
      return ((l[d] = cO(d, t.rects, a)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const dO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: lO };
function fO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Gp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const vO = { name: "popperOffsets", enabled: !0, phase: "read", fn: fO, data: {} };
function pO(e) {
  return e === "x" ? "y" : "x";
}
function hO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.mainAxis,
    a = i === void 0 ? !0 : i,
    o = r.altAxis,
    u = o === void 0 ? !1 : o,
    s = r.boundary,
    c = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    p = r.tether,
    v = p === void 0 ? !0 : p,
    g = r.tetherOffset,
    f = g === void 0 ? 0 : g,
    h = Ci(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    _ = bt(t.placement),
    b = $r(t.placement),
    m = !b,
    O = _u(_),
    w = pO(O),
    S = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    D = t.rects.popper,
    I = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    q = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var U,
        V = O === "y" ? Pe : Ce,
        Y = O === "y" ? Ze : Qe,
        G = O === "y" ? "height" : "width",
        $ = S[O],
        X = $ + h[V],
        B = $ - h[Y],
        A = v ? -D[G] / 2 : 0,
        be = b === Ur ? k[G] : D[G],
        ae = b === Ur ? -D[G] : -k[G],
        ue = t.elements.arrow,
        le = v && ue ? gu(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : qp(),
        ce = ge[V],
        qe = ge[Y],
        Oe = gi(0, k[G], le[G]),
        tt = m ? k[G] / 2 - A - Oe - ce - P.mainAxis : be - Oe - ce - P.mainAxis,
        pe = m ? -k[G] / 2 + A + Oe + qe + P.mainAxis : ae + Oe + qe + P.mainAxis,
        ze = t.elements.arrow && Li(t.elements.arrow),
        yr = ze ? (O === "y" ? ze.clientTop || 0 : ze.clientLeft || 0) : 0,
        Rt = (U = T?.[O]) != null ? U : 0,
        Se = $ + tt - Rt - yr,
        Ee = $ + pe - Rt,
        Ut = gi(v ? Ea(X, Se) : X, $, v ? sr(B, Ee) : B);
      ((S[O] = Ut), (q[O] = Ut - $));
    }
    if (u) {
      var dt,
        rt = O === "x" ? Pe : Ce,
        qt = O === "x" ? Ze : Qe,
        $e = S[w],
        je = w === "y" ? "height" : "width",
        ke = $e + h[rt],
        nt = $e - h[qt],
        zt = [Pe, Ce].indexOf(_) !== -1,
        $i = (dt = T?.[w]) != null ? dt : 0,
        Vi = zt ? ke : $e - k[je] - D[je] - $i + P.altAxis,
        Gi = zt ? $e + k[je] + D[je] - $i - P.altAxis : nt,
        Hi = v && zt ? N1(Vi, $e, Gi) : gi(v ? Vi : ke, $e, v ? Gi : nt);
      ((S[w] = Hi), (q[w] = Hi - $e));
    }
    t.modifiersData[n] = q;
  }
}
const gO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hO,
  requiresIfExists: ["offset"],
};
function _O(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function bO(e) {
  return e === Le(e) || !Xe(e) ? bu(e) : _O(e);
}
function mO(e) {
  var t = e.getBoundingClientRect(),
    r = qr(t.width) / e.offsetWidth || 1,
    n = qr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function yO(e, t, r) {
  r === void 0 && (r = !1);
  var n = Xe(t),
    i = Xe(t) && mO(t),
    a = Xt(t),
    o = zr(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((St(t) !== "body" || yu(a)) && (u = bO(t)),
      Xe(t) ? ((s = zr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : a && (s.x = mu(a))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function wO(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    (o.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && i(s);
      }
    }),
      n.push(a));
  }
  return (
    e.forEach(function (a) {
      r.has(a.name) || i(a);
    }),
    n
  );
}
function OO(e) {
  var t = wO(e);
  return D1.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function SO(e) {
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
function EO(e) {
  var t = e.reduce(function (r, n) {
    var i = r[n.name];
    return (
      (r[n.name] = i
        ? Object.assign({}, i, n, {
            options: Object.assign({}, i.options, n.options),
            data: Object.assign({}, i.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var af = { placement: "bottom", modifiers: [], strategy: "absolute" };
function of() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function kO(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    a = i === void 0 ? af : i;
  return function (u, s, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, af, a),
        modifiersData: {},
        elements: { reference: u, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      p = !1,
      v = {
        state: l,
        setOptions: function (_) {
          var b = typeof _ == "function" ? _(l.options) : _;
          (f(),
            (l.options = Object.assign({}, a, l.options, b)),
            (l.scrollParents = {
              reference: lr(u) ? _i(u) : u.contextElement ? _i(u.contextElement) : [],
              popper: _i(s),
            }));
          var m = OO(EO([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = m.filter(function (O) {
              return O.enabled;
            })),
            g(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var _ = l.elements,
              b = _.reference,
              m = _.popper;
            if (of(b, m)) {
              ((l.rects = {
                reference: yO(b, Li(m), l.options.strategy === "fixed"),
                popper: gu(m),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (P) {
                  return (l.modifiersData[P.name] = Object.assign({}, P.data));
                }));
              for (var O = 0; O < l.orderedModifiers.length; O++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (O = -1));
                  continue;
                }
                var w = l.orderedModifiers[O],
                  S = w.fn,
                  k = w.options,
                  D = k === void 0 ? {} : k,
                  I = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: D, name: I, instance: v }) || l);
              }
            }
          }
        },
        update: SO(function () {
          return new Promise(function (h) {
            (v.forceUpdate(), h(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!of(u, s)) return v;
    v.setOptions(c).then(function (h) {
      !p && c.onFirstUpdate && c.onFirstUpdate(h);
    });
    function g() {
      l.orderedModifiers.forEach(function (h) {
        var _ = h.name,
          b = h.options,
          m = b === void 0 ? {} : b,
          O = h.effect;
        if (typeof O == "function") {
          var w = O({ state: l, name: _, instance: v, options: m }),
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
var xO = [J1, vO, W1, F1, dO, oO, gO, $1, uO],
  RO = kO({ defaultModifiers: xO }),
  ls,
  sf;
function PO() {
  if (sf) return ls;
  sf = 1;
  var e = typeof Element < "u",
    t = typeof Map == "function",
    r = typeof Set == "function",
    n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(a, o) {
    if (a === o) return !0;
    if (a && o && typeof a == "object" && typeof o == "object") {
      if (a.constructor !== o.constructor) return !1;
      var u, s, c;
      if (Array.isArray(a)) {
        if (((u = a.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (!i(a[s], o[s])) return !1;
        return !0;
      }
      var l;
      if (t && a instanceof Map && o instanceof Map) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        for (l = a.entries(); !(s = l.next()).done; )
          if (!i(s.value[1], o.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && a instanceof Set && o instanceof Set) {
        if (a.size !== o.size) return !1;
        for (l = a.entries(); !(s = l.next()).done; ) if (!o.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
        if (((u = a.length), u != o.length)) return !1;
        for (s = u; s-- !== 0; ) if (a[s] !== o[s]) return !1;
        return !0;
      }
      if (a.constructor === RegExp) return a.source === o.source && a.flags === o.flags;
      if (
        a.valueOf !== Object.prototype.valueOf &&
        typeof a.valueOf == "function" &&
        typeof o.valueOf == "function"
      )
        return a.valueOf() === o.valueOf();
      if (
        a.toString !== Object.prototype.toString &&
        typeof a.toString == "function" &&
        typeof o.toString == "function"
      )
        return a.toString() === o.toString();
      if (((c = Object.keys(a)), (u = c.length), u !== Object.keys(o).length)) return !1;
      for (s = u; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
      if (e && a instanceof Element) return !1;
      for (s = u; s-- !== 0; )
        if (
          !((c[s] === "_owner" || c[s] === "__v" || c[s] === "__o") && a.$$typeof) &&
          !i(a[c[s]], o[c[s]])
        )
          return !1;
      return !0;
    }
    return a !== a && o !== o;
  }
  return (
    (ls = function (o, u) {
      try {
        return i(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    ls
  );
}
var CO = PO();
const AO = Yt(CO);
var IO = [],
  jO = function (t, r, n) {
    n === void 0 && (n = {});
    var i = y.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || IO,
      },
      o = y.useState({
        styles: {
          popper: { position: a.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      u = o[0],
      s = o[1],
      c = y.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var g = v.state,
              f = Object.keys(g.elements);
            Ta.flushSync(function () {
              s({
                styles: Jd(
                  f.map(function (h) {
                    return [h, g.styles[h] || {}];
                  }),
                ),
                attributes: Jd(
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
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return AO(i.current, p) ? i.current || p : ((i.current = p), p);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c],
      ),
      d = y.useRef();
    return (
      Yd(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Yd(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || RO,
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
        styles: u.styles,
        attributes: u.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  },
  DO = function () {},
  TO = function () {
    return Promise.resolve(null);
  },
  MO = [];
function FO(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? MO : a,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = y.useContext(b1),
    p = y.useState(null),
    v = p[0],
    g = p[1],
    f = y.useState(null),
    h = f[0],
    _ = f[1];
  y.useEffect(
    function () {
      w1(c, v);
    },
    [c, v],
  );
  var b = y.useMemo(
      function () {
        return {
          placement: r,
          strategy: i,
          onFirstUpdate: s,
          modifiers: [].concat(o, [{ name: "arrow", enabled: h != null, options: { element: h } }]),
        };
      },
      [r, i, s, o, h],
    ),
    m = jO(u || d, v, b),
    O = m.state,
    w = m.styles,
    S = m.forceUpdate,
    k = m.update,
    D = y.useMemo(
      function () {
        return {
          ref: g,
          style: w.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: w.arrow, ref: _ },
          forceUpdate: S || DO,
          update: k || TO,
        };
      },
      [g, _, r, O, w, k, S],
    );
  return m1(l)(D);
}
function LO(e) {
  var t = e.viewportPadding;
  return [
    {
      name: "maxSizeData",
      enabled: !0,
      phase: "read",
      fn: function (n) {
        var i = n.state,
          a = n.name;
        window.visualViewport &&
          (i.modifiersData[a] = {
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
        var i,
          a,
          o,
          u,
          s = n.state,
          c = s.modifiersData.maxSizeData;
        if (
          !(
            typeof (c == null || (i = c.viewport) === null || i === void 0 ? void 0 : i.width) !=
              "number" ||
            typeof (c == null || (a = c.viewport) === null || a === void 0 ? void 0 : a.height) !=
              "number"
          )
        ) {
          var l = c.viewport,
            d = s.modifiersData.popperOffsets,
            p = d === void 0 ? { x: 0, y: 0 } : d,
            v = s.placement.split("-"),
            g = K(v, 1),
            f = g[0],
            h =
              (o =
                (u = s.modifiersData) === null ||
                u === void 0 ||
                (u = u.offset) === null ||
                u === void 0
                  ? void 0
                  : u[s.placement]) !== null && o !== void 0
                ? o
                : { x: 0, y: 0 },
            _ = l.width - 2 * t,
            b = l.height - 2 * t;
          (f === "top" && (b = s.rects.reference.y + h.y - t),
            f === "bottom" && (b = l.height - p.y - t),
            f === "left" && (_ = s.rects.reference.x + h.x - t),
            f === "right" && (_ = l.width - p.x - t),
            (s.styles.popper.maxWidth = "".concat(_, "px")),
            (s.styles.popper.maxHeight = "".concat(b, "px")));
        }
      },
    },
  ];
}
var Bs = 5,
  BO = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: Bs,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function NO() {
  return null;
}
var UO = [0, 8];
function qO(e) {
  var t = e.children,
    r = t === void 0 ? NO : t,
    n = e.offset,
    i = n === void 0 ? UO : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    g = K(i, 2),
    f = g[0],
    h = g[1],
    _ = y.useMemo(
      function () {
        var m = {
            name: "preventOverflow",
            options: { padding: Bs, rootBoundary: v ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [f, h] } },
          w = v ? LO({ viewportPadding: Bs }) : [];
        return [].concat(BO, [m, O], De(w));
      },
      [f, h, v],
    ),
    b = y.useMemo(
      function () {
        return c == null ? _ : [].concat(De(_), De(c));
      },
      [_, c],
    );
  return E.createElement(FO, { modifiers: b, placement: o, strategy: d, referenceElement: s }, r);
}
var Hp = "atlaskit-portal-container",
  Wp = "body > .atlaskit-portal-container",
  Kp = "atlaskit-portal",
  zO = function (t) {
    var r = document.createElement("div");
    return ((r.className = Kp), (r.style.zIndex = "".concat(t)), r);
  },
  Jp = function () {
    return document.body;
  },
  Yp = function () {
    var t = document.querySelector(Wp);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Hp),
        (n.style.display = "flex"),
        (r = Jp()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  $O = function (t) {
    Yp().removeChild(t);
  },
  VO = function (t) {
    t.parentElement || Yp().appendChild(t);
  },
  Xp = function () {
    return document !== void 0;
  },
  GO = function (t) {
    if (Xp()) {
      var r = document.createElement("div");
      return ((r.className = Kp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  HO = function () {
    if (Xp()) {
      var t = document.querySelector(Wp);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Hp),
          (n.style.display = "flex"),
          (r = Jp()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function WO(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return zO(t);
      },
      [t],
    );
  return (
    VO(n),
    y.useEffect(
      function () {
        return function () {
          $O(n);
        };
      },
      [n],
    ),
    Ta.createPortal(r, n)
  );
}
var Zp = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function KO(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    i = K(n, 2),
    a = i[0],
    o = i[1];
  Zp(
    function () {
      var s = GO(t);
      o(s);
      var c = HO();
      if (!(!s || !c))
        return (
          c.appendChild(s),
          function () {
            (s && c.removeChild(s), o(null));
          }
        );
    },
    [t],
  );
  var u = E.createElement(y.Suspense, { fallback: null }, r);
  return a ? Ta.createPortal(u, a) : null;
}
var JO = function (t) {
    var r = y.useState(!1),
      n = K(r, 2),
      i = n[0],
      a = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? Zp : y.useEffect;
      }),
      u = K(o, 1),
      s = u[0];
    return (
      s(function () {
        a(!0);
      }, []),
      i
    );
  },
  YO = "akPortalMount",
  XO = "akPortalUnmount",
  uf = {
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
  ZO = function (t) {
    return uf.hasOwnProperty(t) ? uf[t] : null;
  },
  QO = function (t, r) {
    var n = { layer: ZO(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function cf(e, t) {
  var r = QO(e, t);
  window.dispatchEvent(r);
}
var eS = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        cf(YO, r),
        function () {
          cf(XO, r);
        }
      );
    },
    [r],
  );
};
function tS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = JO(a);
  return (
    eS(r),
    Br("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(KO, { zIndex: r }, n)
      : o
        ? E.createElement(WO, { zIndex: r }, n)
        : null
  );
}
var bi = new Set(),
  Ai = null;
function lf() {
  if (!Ai) {
    Ai = za.bindAll(window, [
      { type: "dragend", listener: ds },
      { type: "pointerdown", listener: ds },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ds();
          };
        })(),
      },
    ]);
    var e = Array.from(bi);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ds() {
  var e;
  ((e = Ai) === null || e === void 0 || e(), (Ai = null));
  var t = Array.from(bi);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function rS() {
  return za.bindAll(window, [
    { type: "dragstart", listener: lf },
    { type: "dragenter", listener: lf },
  ]);
}
var ra = null;
function nS(e) {
  return (
    ra || (ra = rS()),
    bi.add(e),
    e.onRegister({ isDragging: Ai !== null }),
    function () {
      if ((bi.delete(e), bi.size === 0)) {
        var r;
        ((r = ra) === null || r === void 0 || r(), (ra = null));
      }
    }
  );
}
var mi = null;
function vi() {
  mi != null && (window.clearTimeout(mi), (mi = null));
}
function df(e, t) {
  (vi(),
    (mi = window.setTimeout(function () {
      ((mi = null), e());
    }, t)));
}
var ft = null;
function iS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ft && ft.entry === e);
  }
  function n() {
    r() && (vi(), (ft = null));
  }
  function i() {
    (r() && e.done(), (t = "done"), n());
  }
  function a() {
    (r() && e.hide({ isImmediate: !0 }), i());
  }
  function o() {
    if (r()) {
      if (t === "waiting-to-hide") {
        ((t = "shown"), vi());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), vi(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function u(v) {
    var g = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        a();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (g) {
          a();
          return;
        }
        ((t = "waiting-to-hide"),
          df(function () {
            ((t = "hide-animating"), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function s() {
    r() && t === "hide-animating" && i();
  }
  function c() {
    return t === "shown" || t === "waiting-to-hide" || t === "hide-animating";
  }
  function l() {
    return e.source.type === "mouse" ? e.source.mouse : null;
  }
  function d() {
    var v = !!(ft && ft.isVisible());
    (ft && (vi(), ft.entry.hide({ isImmediate: !0 }), ft.entry.done(), (ft = null)),
      (ft = { entry: e, isVisible: c }));
    function g() {
      ((t = "shown"), e.show({ isImmediate: v }));
    }
    if (v) {
      g();
      return;
    }
    ((t = "waiting-to-show"), df(g, e.delay));
  }
  d();
  var p = {
    keep: o,
    abort: n,
    isActive: r,
    requestHide: u,
    finishHideAnimation: s,
    mousePosition: l(),
  };
  return p;
}
function aS(e, t) {
  var r = Wy();
  return t ? "".concat(r(e)) : void 0;
}
var ff = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81o8v _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  oS = function (t) {
    var r = t.shortcut;
    return y.createElement(
      "div",
      { className: R([ff.shortcutSegmentsContainer]) },
      r.map(function (n, i) {
        return y.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(i), className: R([ff.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Qp = y.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.placement,
      u = t.testId,
      s = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return y.createElement(
      "div",
      { ref: r, style: n, "data-testid": u ? "".concat(u, "--wrapper") : void 0 },
      y.createElement(
        "div",
        {
          role: "tooltip",
          className: R(["_80om73ad", i]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        a,
        d && y.createElement(oS, { shortcut: d }),
      ),
    );
  });
Qp.displayName = "TooltipPrimitive";
var vf = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  eh = y.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.truncate,
      u = t.placement,
      s = t.testId,
      c = t.onMouseOut,
      l = t.onMouseOver,
      d = t.id,
      p = t.shortcut;
    return y.createElement(
      Qp,
      {
        ref: r,
        style: n,
        className: R([vf.base, o && vf.truncate, i]),
        placement: u,
        testId: s,
        id: d,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: p,
      },
      a,
    );
  });
eh.displayName = "TooltipContainer";
function pf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function hf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hf(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var sS = Ky.tooltip(),
  gf = { componentName: "tooltip", packageName: "@atlaskit/tooltip", packageVersion: "20.10.0" },
  uS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  cS = function (t) {
    return t.split("-")[0];
  };
function lS(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    i = e.mousePosition,
    a = i === void 0 ? "bottom" : i,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? eh : c,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    g = e.delay,
    f = g === void 0 ? 300 : g,
    h = e.onShow,
    _ = h === void 0 ? we : h,
    b = e.onHide,
    m = b === void 0 ? we : b,
    O = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    k = e.hideTooltipOnMouseDown,
    D = k === void 0 ? !1 : k,
    I = e.analyticsContext,
    P = e.strategy,
    T = P === void 0 ? "fixed" : P,
    q = e.ignoreTooltipPointerEvents,
    U = q === void 0 ? !1 : q,
    V = e.isScreenReaderAnnouncementDisabled,
    Y = V === void 0 ? !1 : V,
    G = e.shortcut,
    $ = n === "mouse" ? a : n,
    X = kl(Ir({ fn: _, action: "displayed", analyticsData: I }, gf)),
    B = kl(Ir({ fn: m, action: "hidden", analyticsData: I }, gf)),
    A = y.useRef(null),
    be = y.useState("hide"),
    ae = K(be, 2),
    ue = ae[0],
    le = ae[1],
    ge = y.useRef(null),
    ce = y.useRef(null),
    qe = function (re) {
      ((ce.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = y.useCallback(function (F) {
      ge.current = F;
    }, []),
    tt = ui(ue),
    pe = ui(X),
    ze = ui(B),
    yr = ui(f),
    Rt = ui(O),
    Se = y.useRef(!1),
    Ee = y.useCallback(function (F) {
      ((A.current = F), (Se.current = !1));
    }, []),
    Ut = y.useCallback(
      function () {
        A.current &&
          (Se.current && ze.current(), (A.current = null), (Se.current = !1), le("hide"));
      },
      [ze],
    ),
    dt = y.useCallback(
      function () {
        A.current && (A.current.abort(), Se.current && ze.current(), (A.current = null));
      },
      [ze],
    );
  y.useEffect(
    function () {
      return function () {
        A.current && dt();
      };
    },
    [dt],
  );
  var rt = y.useRef(!1);
  y.useEffect(function () {
    return nS({
      onRegister: function (re) {
        var Pt = re.isDragging;
        rt.current = Pt;
      },
      onDragStart: function () {
        var re;
        ((re = A.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (rt.current = !0));
      },
      onDragEnd: function () {
        rt.current = !1;
      },
    });
  }, []);
  var qt = y.useCallback(
      function (F) {
        var re;
        if (!rt.current) {
          if ((A.current && !A.current.isActive() && dt(), A.current && A.current.isActive())) {
            A.current.keep();
            return;
          }
          if (!(Rt.current && !((re = Rt.current) !== null && re !== void 0 && re.call(Rt)))) {
            var Pt = {
                source: F,
                delay: yr.current,
                show: function (wr) {
                  var Xr = wr.isImmediate;
                  (Se.current || ((Se.current = !0), pe.current()),
                    le(Xr ? "show-immediate" : "fade-in"));
                },
                hide: function (wr) {
                  var Xr = wr.isImmediate;
                  le(Xr ? "hide" : "before-fade-out");
                },
                done: Ut,
              },
              lo = iS(Pt);
            Ee(lo);
          }
        }
      },
      [Rt, yr, Ut, Ee, dt, pe],
    ),
    $e = y.useCallback(
      function () {
        var F;
        (F = A.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
      },
      [A],
    );
  (Zw({ onClose: $e, isDisabled: ue === "hide" || ue === "fade-out" }),
    y.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var F = za.bind(window, {
          type: "scroll",
          listener: function () {
            A.current && A.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return F;
      },
      [ue],
    ));
  var je = y.useCallback(
      function () {
        D && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [D],
    ),
    ke = y.useCallback(
      function () {
        S && A.current && A.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    nt = y.useCallback(
      function (F) {
        if (!(ce.current && F.target === ce.current) && !F.defaultPrevented) {
          F.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: pf({ left: F.clientX, top: F.clientY }) }
              : { type: "keyboard" };
          qt(re);
        }
      },
      [n, qt],
    ),
    zt = y.useCallback(function (F) {
      (ce.current && F.target === ce.current) ||
        F.defaultPrevented ||
        (F.preventDefault(), A.current && A.current.requestHide({ isImmediate: !1 }));
    }, []),
    $i =
      n === "mouse"
        ? function (F) {
            var re;
            (re = A.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (A.current.mousePosition = pf({ left: F.clientX, top: F.clientY }));
          }
        : void 0,
    Vi = y.useCallback(function () {
      if (A.current && A.current.isActive()) {
        A.current.keep();
        return;
      }
    }, []),
    Gi = y.useCallback(
      function (F) {
        try {
          if (!F.target.matches(":focus-visible")) return;
        } catch {}
        qt({ type: "keyboard" });
      },
      [qt],
    ),
    Hi = y.useCallback(function () {
      A.current && A.current.requestHide({ isImmediate: !1 });
    }, []),
    tg = y.useCallback(
      function (F) {
        F === "exiting" &&
          tt.current === "fade-out" &&
          A.current &&
          A.current.finishHideAnimation();
      },
      [tt],
    ),
    rg = p,
    uo = ue !== "hide" && !!o,
    Au = !Y && uo,
    Iu = ue !== "hide" && ue !== "fade-out",
    ng = y.useCallback(function () {
      var F;
      (F = A.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
    }, []);
  r1({ isOpen: uo && Iu, onClose: ng });
  var ju = function () {
      var re;
      if (n === "mouse" && (re = A.current) !== null && re !== void 0 && re.mousePosition) {
        var Pt;
        return (Pt = A.current) === null || Pt === void 0 ? void 0 : Pt.mousePosition;
      }
      return ge.current || void 0;
    },
    Yr = aS("tooltip", Au),
    co = {
      onMouseOver: nt,
      onMouseOut: zt,
      onMouseMove: $i,
      onMouseDown: je,
      onClick: ke,
      onFocus: Gi,
      onBlur: Hi,
    };
  v && (co["data-testid"] = "".concat(v, "--container"));
  var Du = typeof t == "function";
  y.useEffect(
    function () {
      if (!Du) {
        var F = ge.current;
        if (!(!F || !Yr))
          return (
            F.setAttribute("aria-describedby", Yr),
            function () {
              return F.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Du, Yr],
  );
  var Tu = Au
    ? E.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: Yr },
        typeof o == "function" ? o({}) : o,
      )
    : null;
  return E.createElement(
    E.Fragment,
    null,
    typeof t == "function"
      ? E.createElement(
          E.Fragment,
          null,
          t(Ir(Ir({}, co), {}, { "aria-describedby": Yr, ref: Oe })),
          Tu,
        )
      : E.createElement(rg, te({}, co, { ref: qe, role: "presentation" }), t, Tu),
    uo
      ? E.createElement(
          tS,
          { zIndex: sS },
          E.createElement(qO, { placement: $, referenceElement: ju(), strategy: T }, function (F) {
            var re = F.ref,
              Pt = F.style,
              lo = F.update,
              fo = F.placement,
              wr = n === "mouse" ? void 0 : uS[cS(fo)];
            return E.createElement(
              Fp,
              { appear: !0 },
              Iu &&
                E.createElement(
                  _1,
                  {
                    distance: "constant",
                    entranceDirection: wr,
                    exitDirection: wr,
                    onFinish: tg,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (Xr) {
                    var ig = Xr.className;
                    return E.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(ig),
                        style: Ir(Ir({}, Pt), U && { pointerEvents: "none" }),
                        truncate: s,
                        placement: $,
                        testId: ju() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: zt,
                        onMouseOver: Vi,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: lo }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var dS = [
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
  li = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  _f = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  th = function (t) {
    var r = t.content,
      n = t.inlineStyles,
      i = t.testId;
    t.isRanking;
    var a = t.innerRef,
      o = t.isSortable,
      u = t.sortOrder,
      s = t.onClick,
      c = t.headCellId,
      l = t.activeSortButtonId,
      d = t.ascendingSortTooltip,
      p = d === void 0 ? "Sort ascending" : d,
      v = t.descendingSortTooltip,
      g = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      h = f === void 0 ? "Sort button" : f,
      _ = t.isIconOnlyHeader,
      b = ne(t, dS),
      m = y.useState(!1),
      O = K(m, 2),
      w = O[0],
      S = O[1],
      k = y.useState(!1),
      D = K(k, 2),
      I = D[0],
      P = D[1],
      T = c === l || u !== void 0,
      q = w || T || I,
      U = q && _,
      V = !_ || q || (_ && !I),
      Y = y.useCallback(
        function () {
          P?.(!0);
        },
        [P],
      ),
      G = y.useCallback(
        function () {
          P?.(!1);
        },
        [P],
      ),
      $ = y.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      X = y.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      B = E.createElement(
        qa,
        { xcss: _f.headCellContainer, onMouseEnter: $, onMouseLeave: X, onFocus: Y, onBlur: G },
        E.createElement(
          lS,
          { content: u === cr ? p : g },
          E.createElement(
            My,
            { onClick: s, xcss: li.buttonWrapper, "aria-roledescription": h },
            E.createElement(
              Oa,
              { xcss: U ? li.hideIconHeaderWrapper : li.visibleHeaderWrapper },
              E.createElement("span", { className: R([_f.text]) }, r),
            ),
            V &&
              E.createElement(
                Oa,
                { xcss: q ? li.sortIconVisibleWrapper : li.sortIconHiddenWrapper },
                u === cr
                  ? E.createElement(Yw, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(Ww, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      zw,
      te(
        {
          style: n,
          testId: i && "".concat(i, "--head--cell"),
          ref: typeof a != "string" ? a : null,
        },
        b,
        { isSortable: o, sortOrder: u },
      ),
      o ? B : r,
    );
  },
  fS = ["isRanking", "refHeight", "refWidth"];
function vS(e, t, r) {
  return (
    (t = J(t)),
    Be(e, rh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
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
var pS = (function (e) {
    function t() {
      return (fe(this, t), vS(this, t, arguments));
    }
    return (
      Ne(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.isRanking;
            n.refHeight;
            var a = n.refWidth,
              o = ne(n, fS),
              u = F_(i, a);
            return E.createElement(th, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(E.Component),
  hS = Vw(pS),
  gS = ["cells"],
  _S = [
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
function bS(e, t, r) {
  return (
    (t = J(t)),
    Be(e, nh() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function nh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (nh = function () {
    return !!e;
  })();
}
var mS = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = bS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ne(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            _a(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              _a(n.sortKey, n.head);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.head,
              o = i.sortKey,
              u = i.sortOrder,
              s = i.isFixedSize,
              c = i.onSort,
              l = i.isRanking,
              d = i.isRankable,
              p = i.testId,
              v = this.state.activeSortButtonId;
            if (!a) return null;
            var g = d ? hS : th,
              f = a.cells,
              h = ne(a, gS);
            return E.createElement(
              qw,
              te({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (_, b) {
                  var m = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    w = _.colSpan,
                    S = _.content,
                    k = _.descendingSortTooltip,
                    D = _.isIconOnlyHeader,
                    I = _.isSortable,
                    P = _.key,
                    T = _.shouldTruncate,
                    q = _.testId,
                    U = _.width,
                    V = ne(_, _S),
                    Y = "head-cell-".concat(b),
                    G = function () {
                      (n.setState({ activeSortButtonId: Y }), I && c(_)());
                    };
                  return E.createElement(
                    g,
                    te(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: D,
                        isSortable: !!I,
                        isRanking: l,
                        key: P || b,
                        headCellId: Y,
                        activeSortButtonId: v,
                        onClick: G,
                        testId: q || p,
                        shouldTruncate: T,
                        sortOrder: P === o ? u : void 0,
                        width: U,
                        ascendingSortTooltip: m,
                        descendingSortTooltip: k,
                        buttonAriaRoleDescription: O,
                      },
                      V,
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
  yS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function wS(e) {
  switch (e) {
    case ya:
      return cr;
    case cr:
      return ya;
    default:
      return e;
  }
}
var OS = function (t) {
    var r = t.caption,
      n = t.head,
      i = t.highlightedRowIndex,
      a = t.rows,
      o = t.sortKey,
      u = t.sortOrder,
      s = t.loadingLabel,
      c = t.onPageRowsUpdate,
      l = t.testId,
      d = t.totalRows,
      p = t.label,
      v = t.isLoading,
      g = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      h = f === void 0 ? !1 : f,
      _ = t.rowsPerPage,
      b = _ === void 0 ? 1 / 0 : _,
      m = t.onSetPage,
      O = m === void 0 ? we : m,
      w = t.onSort,
      S = w === void 0 ? we : w,
      k = t.page,
      D = k === void 0 ? 1 : k,
      I = t.emptyView,
      P = t.isRankable,
      T = P === void 0 ? !1 : P,
      q = t.isRankingDisabled,
      U = q === void 0 ? !1 : q,
      V = t.onRankStart,
      Y = V === void 0 ? we : V,
      G = t.onRankEnd,
      $ = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      B = t.paginationi18n,
      A =
        B === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : B,
      be = y.useState(!1),
      ae = K(be, 2),
      ue = ae[0],
      le = ae[1],
      ge = y.useRef(null),
      ce = Si({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      qe = Si({
        fn: $,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    y.useEffect(
      function () {
        (_a(o, n), M_(n));
      },
      [o, n],
    );
    var Oe = function (ke) {
        return function () {
          var nt = ke.key;
          if (nt) {
            if (ce && T && nt === o && u === ya) {
              ce({ key: null, sortOrder: null, item: ke });
              return;
            }
            var zt = nt !== o ? cr : wS(u);
            ce && ce({ key: nt, item: ke, sortOrder: zt });
          }
        };
      },
      tt = function (ke, nt) {
        O(ke, nt);
      },
      pe = function (ke) {
        (le(!0), Y(ke));
      },
      ze = function (ke) {
        (le(!1), qe(ke));
      },
      yr = function () {
        return X || (Lv(a || [], D, b).length > 2 ? wa : eb);
      },
      Rt = function () {
        return g ? E.createElement(ob, { testId: l }) : I && E.createElement(sb, { testId: l }, I);
      },
      Se = a && a.length,
      Ee,
      Ut = !1;
    (d && Number.isInteger(d) && b && Se && Se <= d
      ? ((Ee = Math.ceil(d / b)), (Ut = !0))
      : (Ee = Se && b ? Math.ceil(Se / b) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var dt = D > Ee ? Ee : D,
      rt = !!Se,
      qt = yr(),
      $e = Rt();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        Yv,
        {
          isLoading: g && rt,
          spinnerSize: qt,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          nb,
          { isFixedSize: h, "aria-label": p, hasDataRow: rt, testId: l, isLoading: g },
          !!r && E.createElement(ib, null, r),
          n &&
            E.createElement(mS, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: T,
              testId: l,
            }),
          rt &&
            E.createElement(ES, {
              ref: ge,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: b,
              page: dt,
              isFixedSize: h || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Ut,
              testId: l,
              isRankable: T,
              isRanking: ue,
              onRankStart: pe,
              onRankEnd: ze,
              isRankingDisabled: U || g || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : E.createElement(
            ab,
            { testId: l },
            E.createElement(Bw, {
              value: dt,
              onChange: tt,
              total: Ee,
              i18n: A,
              isDisabled: g,
              testId: l,
            }),
          ),
      !rt &&
        $e &&
        E.createElement(Kv, { isLoading: g, spinnerSize: wa, testId: l, loadingLabel: s }, $e),
    );
  },
  SS = y.lazy(function () {
    return Rv(
      () => import("./body-Bdr7HoDI.js"),
      __vite__mapDeps([2, 3, 1, 4, 5]),
      import.meta.url,
    );
  }),
  ES = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ne(t, yS),
      l = i && !c.sortKey,
      d = y.useState(!1),
      p = K(d, 2),
      v = p[0],
      g = p[1];
    y.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = E.createElement(Ob, te({ ref: r }, c));
    return l && v
      ? E.createElement(
          Eb,
          { fallback: f },
          E.createElement(
            y.Suspense,
            { fallback: f },
            E.createElement(
              SS,
              te({ ref: r }, c, {
                isRanking: a,
                onRankStart: o,
                onRankEnd: u,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : f;
  });
function kS(e, t, r) {
  return (
    (t = J(t)),
    Be(e, ih() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
  );
}
function ih() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ih = function () {
    return !!e;
  })();
}
var wu = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = kS(this, t, [].concat(i))),
      x(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      x(r, "onSetPageHandler", function (o, u) {
        var s = r.props.onSetPage;
        s && (s(o, u), r.setState({ page: o }));
      }),
      x(r, "onSortHandler", function (o, u) {
        var s = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: c, sortOrder: l }, u), r.setState({ sortKey: s, sortOrder: l }));
      }),
      x(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      x(r, "onRankEndHandler", function (o) {
        var u = o.destination,
          s = r.state,
          c = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!u || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var p = L_(o, c, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    Ne(t, e),
    ve(t, [
      {
        key: "UNSAFE_componentWillReceiveProps",
        value: function (n) {
          var i = n.sortKey || this.state.sortKey,
            a = n.sortOrder || this.state.sortOrder,
            o = n.page || this.state.page;
          this.setState({ page: o, sortKey: i, sortOrder: a, rows: n.rows });
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.state,
            i = n.page,
            a = n.sortKey,
            o = n.sortOrder,
            u = n.rows,
            s = this.props,
            c = s.caption,
            l = s.emptyView,
            d = s.head,
            p = s.highlightedRowIndex,
            v = s.loadingSpinnerSize,
            g = s.isLoading,
            f = s.loadingLabel,
            h = s.isFixedSize,
            _ = s.isRankable,
            b = s.isRankingDisabled,
            m = s.rowsPerPage,
            O = s.paginationi18n,
            w = s.onRankStart,
            S = s.onPageRowsUpdate,
            k = s.testId,
            D = s.label;
          return E.createElement(OS, {
            paginationi18n: O,
            caption: c,
            emptyView: l,
            head: d,
            highlightedRowIndex: p,
            loadingSpinnerSize: v,
            isLoading: g,
            loadingLabel: f,
            isFixedSize: h,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: i,
            rows: u,
            rowsPerPage: m,
            sortKey: a,
            sortOrder: o,
            isRankable: _,
            isRankingDisabled: b,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: S,
            testId: k,
            label: D,
          });
        },
      },
    ])
  );
})(E.Component);
x(wu, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const xS = (e, t, r) => {
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
  ah = (e, t, r) => ({ cells: xS(e, t, r) });
function H(e) {
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
var RS = {};
function Wa() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : RS;
}
var oh = Object.assign,
  ka = Object.getOwnPropertyDescriptor,
  mt = Object.defineProperty,
  Ka = Object.prototype,
  Ns = [];
Object.freeze(Ns);
var sh = {};
Object.freeze(sh);
var PS = typeof Proxy < "u",
  CS = Object.toString();
function uh() {
  PS || H("Proxy not available");
}
function ch(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Dr = function () {};
function ut(e) {
  return typeof e == "function";
}
function dr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ja(e) {
  return e !== null && typeof e == "object";
}
function Jt(e) {
  if (!Ja(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === CS;
}
function lh(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ya(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function dh(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function gr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ja(n) && n[r] === !0;
    }
  );
}
function Wr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function AS(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Dt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var fh = typeof Object.getOwnPropertySymbols < "u";
function IS(e) {
  var t = Object.keys(e);
  if (!fh) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ka.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Xa =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : fh
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function vh(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Ft(e, t) {
  return Ka.hasOwnProperty.call(e, t);
}
var jS =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Xa(t).forEach(function (n) {
        r[n] = ka(t, n);
      }),
      r
    );
  };
function Te(e, t) {
  return !!(e & t);
}
function Me(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function bf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, MS(n.key), n));
  }
}
function Kr(e, t, r) {
  return (t && DS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Tr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = FS(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr() {
  return (
    (fr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fr.apply(null, arguments)
  );
}
function ph(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Us(e, t));
}
function Us(e, t) {
  return (
    (Us = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Us(e, t)
  );
}
function TS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function MS(e) {
  var t = TS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FS(e, t) {
  if (e) {
    if (typeof e == "string") return bf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? bf(e, t)
          : void 0
    );
  }
}
var gt = Symbol("mobx-stored-annotations");
function yt(e) {
  function t(r, n) {
    if (Ni(n)) return e.decorate_20223_(r, n);
    Bi(r, n, e);
  }
  return Object.assign(t, e);
}
function Bi(e, t, r) {
  (Ft(e, gt) || Ya(e, gt, fr({}, e[gt])), $S(r) || (e[gt][t] = r));
}
function LS(e) {
  return (Ft(e, gt) || Ya(e, gt, fr({}, e[gt])), e[gt]);
}
function Ni(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var L = Symbol("mobx administration"),
  Zt = (function () {
    function e(r) {
      (r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.NOT_TRACKING_),
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
        return Ah(this);
      }),
      (t.reportChanged = function () {
        (Ke(), Ih(this), Je());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Kr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Te(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Te(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Te(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
Zt.isBeingObservedMask_ = 1;
Zt.isPendingUnobservationMask_ = 2;
Zt.diffValueMask_ = 4;
var Ou = gr("Atom", Zt);
function hh(e, t, r) {
  (t === void 0 && (t = Dr), r === void 0 && (r = Dr));
  var n = new Zt(e);
  return (t !== Dr && KE(n, t), r !== Dr && Fh(n, r), n);
}
function BS(e, t) {
  return Kh(e, t);
}
function NS(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var xa = { structural: BS, default: NS };
function vr(e, t, r) {
  return Uh(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : Jt(e)
        ? se.object(e, void 0, { name: r })
        : Wr(e)
          ? se.map(e, { name: r })
          : Dt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !Vr(e) && !ji(e)
              ? lh(e)
                ? Gr(e)
                : Ii(r, e)
              : e;
}
function US(e, t, r) {
  if (e == null || ao(e) || io(e) || br(e) || ht(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (Jt(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Wr(e)) return se.map(e, { name: r, deep: !1 });
  if (Dt(e)) return se.set(e, { name: r, deep: !1 });
}
function Za(e) {
  return e;
}
function qS(e, t) {
  return Kh(e, t) ? t : e;
}
var zS = "override";
function $S(e) {
  return e.annotationType_ === zS;
}
function Ui(e, t) {
  return { annotationType_: e, options_: t, make_: VS, extend_: GS, decorate_20223_: HS };
}
function VS(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Vr(r.value)) return 1;
  var a = gh(e, this, t, r, !1);
  return (mt(n, t, a), 2);
}
function GS(e, t, r, n) {
  var i = gh(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function HS(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, p, v;
      return pr(
        (l = (d = a.options_) == null ? void 0 : d.name) != null ? l : n.toString(),
        c,
        (p = (v = a.options_) == null ? void 0 : v.autoAction) != null ? p : !1,
      );
    };
  if (r == "field")
    return function (s) {
      var c,
        l = s;
      return (
        Vr(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Vr(e) || (e = o(e)),
      (u = this.options_) != null &&
        u.bound &&
        i(function () {
          var s = this,
            c = s[n].bind(s);
          ((c.isMobxAction = !0), (s[n] = c));
        }),
      e
    );
  }
  H(
    "Cannot apply '" +
      a.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        a.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function WS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function gh(e, t, r, n, i) {
  var a, o, u, s, c, l, d;
  (i === void 0 && (i = C.safeDescriptors), WS(e, t, r, n));
  var p = n.value;
  if ((a = t.options_) != null && a.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: pr(
      (o = (u = t.options_) == null ? void 0 : u.name) != null ? o : r.toString(),
      p,
      (s = (c = t.options_) == null ? void 0 : c.autoAction) != null ? s : !1,
      (l = t.options_) != null && l.bound ? ((d = e.proxy_) != null ? d : e.target_) : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function _h(e, t) {
  return { annotationType_: e, options_: t, make_: KS, extend_: JS, decorate_20223_: YS };
}
function KS(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!Ft(e.target_, t) || !ji(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (ji(r.value)) return 1;
  var a = bh(e, this, t, r, !1, !1);
  return (mt(n, t, a), 2);
}
function JS(e, t, r, n) {
  var i,
    a = bh(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function YS(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    ji(e) || (e = Gr(e)),
    (r = this.options_) != null &&
      r.bound &&
      i(function () {
        var a = this,
          o = a[n].bind(a);
        ((o.isMobXFlow = !0), (a[n] = o));
      }),
    e
  );
}
function XS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function bh(e, t, r, n, i, a) {
  (a === void 0 && (a = C.safeDescriptors), XS(e, t, r, n));
  var o = n.value;
  if ((ji(o) || (o = Gr(o)), i)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function Su(e, t) {
  return { annotationType_: e, options_: t, make_: ZS, extend_: QS, decorate_20223_: eE };
}
function ZS(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function QS(e, t, r, n) {
  return (
    tE(e, this, t, r),
    e.defineComputedProperty_(t, fr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function eE(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Jr(this)[L],
        o = fr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new ct(o)));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function tE(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Qa(e, t) {
  return { annotationType_: e, options_: t, make_: rE, extend_: nE, decorate_20223_: iE };
}
function rE(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function nE(e, t, r, n) {
  var i, a;
  return (
    aE(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : vr,
      n,
    )
  );
}
function iE(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = Jr(u)[L],
      p = new ur(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : vr,
        "ObservableObject." + i.toString(),
        !1,
      );
    (d.values_.set(i, p), a.add(u));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (a.has(this) || o(this, e.get.call(this)), this[L].getObservablePropValue_(i));
      },
      set: function (s) {
        return (a.has(this) || o(this, s), this[L].setObservablePropValue_(i, s));
      },
      init: function (s) {
        return (a.has(this) || o(this, s), s);
      },
    };
}
function aE(e, t, r, n) {
  t.annotationType_;
}
var oE = "true",
  sE = mh();
function mh(e) {
  return { annotationType_: oE, options_: e, make_: uE, extend_: cE, decorate_20223_: lE };
}
function uE(e, t, r, n) {
  var i, a;
  if (r.get) return eo.make_(e, t, r, n);
  if (r.set) {
    var o = Vr(r.set) ? r.set : pr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: C.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (mt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if (lh(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? Gr.bound : Gr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? Ii.bound : Ii;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function cE(e, t, r, n) {
  var i, a;
  if (r.get) return eo.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: C.safeDescriptors ? e.isPlainObject_ : !0, set: pr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  return u.extend_(e, t, r, n);
}
function lE(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var dE = "observable",
  fE = "observable.ref",
  vE = "observable.shallow",
  pE = "observable.struct",
  yh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(yh);
function na(e) {
  return e || yh;
}
var qs = Qa(dE),
  hE = Qa(fE, { enhancer: Za }),
  gE = Qa(vE, { enhancer: US }),
  _E = Qa(pE, { enhancer: qS }),
  wh = yt(qs);
function ia(e) {
  return e.deep === !0 ? vr : e.deep === !1 ? Za : mE(e.defaultDecorator);
}
function bE(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : mh(e)) : void 0;
}
function mE(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : vr;
}
function Oh(e, t, r) {
  if (Ni(t)) return qs.decorate_20223_(e, t);
  if (dr(t)) {
    Bi(e, t, qs);
    return;
  }
  return Uh(e)
    ? e
    : Jt(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : Wr(e)
          ? se.map(e, t)
          : Dt(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
oh(Oh, wh);
var yE = {
    box: function (t, r) {
      var n = na(r);
      return new ur(t, ia(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = na(r);
      return (C.useProxies === !1 || n.proxy === !1 ? bk : uk)(t, ia(n), n.name);
    },
    map: function (t, r) {
      var n = na(r);
      return new zh(t, ia(n), n.name);
    },
    set: function (t, r) {
      var n = na(r);
      return new $h(t, ia(n), n.name);
    },
    object: function (t, r, n) {
      return mr(function () {
        return ZE(C.useProxies === !1 || n?.proxy === !1 ? Jr({}, n) : ak({}, n), t, r);
      });
    },
    ref: yt(hE),
    shallow: yt(gE),
    deep: wh,
    struct: yt(_E),
  },
  se = oh(Oh, yE),
  Sh = "computed",
  wE = "computed.struct",
  zs = Su(Sh),
  OE = Su(wE, { equals: xa.structural }),
  eo = function (t, r) {
    if (Ni(r)) return zs.decorate_20223_(t, r);
    if (dr(r)) return Bi(t, r, zs);
    if (Jt(t)) return yt(Su(Sh, t));
    var n = Jt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ct(n));
  };
Object.assign(eo, zs);
eo.struct = yt(OE);
var mf,
  yf,
  Ra = 0,
  SE = 1,
  EE =
    (mf = (yf = ka(function () {}, "name")) == null ? void 0 : yf.configurable) != null ? mf : !1,
  wf = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function pr(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return kE(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    EE && ((wf.value = e), mt(i, "name", wf)),
    i
  );
}
function kE(e, t, r, n, i) {
  var a = xE(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    RE(a);
  }
}
function xE(e, t, r, n) {
  var i = !1,
    a = 0,
    o = C.trackingDerivation,
    u = !t || !o;
  Ke();
  var s = C.allowStateChanges;
  u && (_r(), (s = to(!0)));
  var c = Eu(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: SE++,
      parentActionId_: Ra,
    };
  return ((Ra = l.actionId_), l);
}
function RE(e) {
  (Ra !== e.actionId_ && H(30),
    (Ra = e.parentActionId_),
    e.error_ !== void 0 && (C.suppressReactionErrors = !0),
    ro(e.prevAllowStateChanges_),
    yi(e.prevAllowStateReads_),
    Je(),
    e.runAsAction_ && Lt(e.prevDerivation_),
    (C.suppressReactionErrors = !1));
}
function PE(e, t) {
  var r = to(e);
  try {
    return t();
  } finally {
    ro(r);
  }
}
function to(e) {
  var t = C.allowStateChanges;
  return ((C.allowStateChanges = e), t);
}
function ro(e) {
  C.allowStateChanges = e;
}
var ur = (function (e) {
    function t(n, i, a, o, u) {
      var s;
      return (
        a === void 0 && (a = "ObservableValue"),
        u === void 0 && (u = xa.default),
        (s = e.call(this, a) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = i),
        (s.name_ = a),
        (s.equals = u),
        (s.value_ = i(n, void 0, a)),
        s
      );
    }
    ph(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        (this.value_, (i = this.prepareNewValue_(i)), i !== C.UNCHANGED && this.setNewValue_(i));
      }),
      (r.prepareNewValue_ = function (i) {
        if (He(this)) {
          var a = We(this, { object: this, type: wt, newValue: i });
          if (!a) return C.UNCHANGED;
          i = a.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? C.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var a = this.value_;
        ((this.value_ = i),
          this.reportChanged(),
          ot(this) && st(this, { type: wt, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return qi(this, i);
      }),
      (r.observe_ = function (i, a) {
        return (
          a &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: wt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          zi(this, i)
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
        return vh(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Zt),
  ct = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Ca(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Pa.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = pr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? xa.structural : xa.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        DE(this);
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
          (this.isComputing && H(32, this.name_, this.derivation),
          C.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          $s(this) &&
            (this.warnAboutUntrackedRead_(), Ke(), (this.value_ = this.computeValue_(!1)), Je());
        else if ((Ah(this), $s(this))) {
          var n = C.trackingContext;
          (this.keepAlive_ && !n && (C.trackingContext = this),
            this.trackAndCompute() && jE(this),
            (C.trackingContext = n));
        }
        var i = this.value_;
        if (fa(i)) throw i.cause;
        return i;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          (this.isRunningSetter && H(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else H(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          i = this.dependenciesState_ === W.NOT_TRACKING_,
          a = this.computeValue_(!0),
          o = i || fa(n) || fa(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = to(!1),
          a;
        if (n) a = Eh(this, this.derivation, this.scope_);
        else if (C.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new Ca(o);
          }
        return (ro(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Vs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          u = void 0;
        return $E(function () {
          var s = a.get();
          if (!o || i) {
            var c = _r();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: wt,
              object: a,
              newValue: s,
              oldValue: u,
            }),
              Lt(c));
          }
          ((o = !1), (u = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return vh(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Kr(e, [
        {
          key: "isComputing",
          get: function () {
            return Te(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Te(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Te(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Te(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Te(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Me(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
ct.isComputingMask_ = 1;
ct.isRunningSetterMask_ = 2;
ct.isBeingObservedMask_ = 4;
ct.isPendingUnobservationMask_ = 8;
ct.diffValueMask_ = 16;
var no = gr("ComputedValue", ct),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var Pa;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Pa || (Pa = {}));
var Ca = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function fa(e) {
  return e instanceof Ca;
}
function $s(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = Eu(!0), r = _r(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (no(o)) {
          if (C.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Lt(r), yi(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Lt(r), yi(t), !0);
        }
      }
      return (xh(e), Lt(r), yi(t), !1);
    }
  }
}
function Eh(e, t, r) {
  var n = Eu(!0);
  (xh(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++C.runId));
  var i = C.trackingDerivation;
  ((C.trackingDerivation = e), C.inBatch++);
  var a;
  if (C.disableErrorBoundaries === !0) a = t.call(r);
  else
    try {
      a = t.call(r);
    } catch (o) {
      a = new Ca(o);
    }
  return (C.inBatch--, (C.trackingDerivation = i), CE(e), yi(n), a);
}
function CE(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = W.UP_TO_DATE_,
      i = 0,
      a = e.unboundDepsCount_,
      o = 0;
    o < a;
    o++
  ) {
    var u = r[o];
    (u.diffValue === 0 && ((u.diffValue = 1), i !== o && (r[i] = u), i++),
      u.dependenciesState_ > n && (n = u.dependenciesState_));
  }
  for (r.length = i, e.newObserving_ = null, a = t.length; a--; ) {
    var s = t[a];
    (s.diffValue === 0 && Ph(s, e), (s.diffValue = 0));
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue === 1 && ((c.diffValue = 0), IE(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Vs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Ph(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function kh(e) {
  var t = _r();
  try {
    return e();
  } finally {
    Lt(t);
  }
}
function _r() {
  var e = C.trackingDerivation;
  return ((C.trackingDerivation = null), e);
}
function Lt(e) {
  C.trackingDerivation = e;
}
function Eu(e) {
  var t = C.allowStateReads;
  return ((C.allowStateReads = e), t);
}
function yi(e) {
  C.allowStateReads = e;
}
function xh(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var va = function () {
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
  pa = !0,
  Rh = !1,
  C = (function () {
    var e = Wa();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (pa = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new va().version && (pa = !1),
      pa
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new va()))
        : (setTimeout(function () {
            Rh || H(35);
          }, 1),
          new va())
    );
  })();
function AE() {
  if (((C.pendingReactions.length || C.inBatch || C.isRunningReactions) && H(36), (Rh = !0), pa)) {
    var e = Wa();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (C = new va()));
  }
}
function IE(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function Ph(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Ch(e));
}
function Ch(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), C.pendingUnobservations.push(e));
}
function Ke() {
  C.inBatch++;
}
function Je() {
  if (--C.inBatch === 0) {
    jh();
    for (var e = C.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ct && r.suspend_()));
    }
    C.pendingUnobservations = [];
  }
}
function Ah(e) {
  var t = C.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && C.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && C.inBatch > 0 && Ch(e), !1);
}
function Ih(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function jE(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function DE(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Et = (function () {
  function e(r, n, i, a) {
    (r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = W.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Pa.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = a));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), C.pendingReactions.push(this), jh());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Ke(), (this.isScheduled = !1));
        var n = C.trackingContext;
        if (((C.trackingContext = this), $s(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((C.trackingContext = n), Je());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Ke(), (this.isRunning = !0));
        var i = C.trackingContext;
        C.trackingContext = this;
        var a = Eh(this, n, void 0);
        ((C.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Vs(this),
          fa(a) && this.reportExceptionInDerivation_(a.cause),
          Je());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (C.disableErrorBoundaries) throw n;
      var a = "[mobx] uncaught error in '" + this + "'";
      (C.suppressReactionErrors || console.error(a, n),
        C.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, i);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Ke(), Vs(this), Je()));
    }),
    (t.getDisposer_ = function (n) {
      var i = this,
        a = function o() {
          (i.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", a),
        (a[L] = this),
        "dispose" in Symbol && typeof Symbol.dispose == "symbol" && (a[Symbol.dispose] = a),
        a
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    Kr(e, [
      {
        key: "isDisposed",
        get: function () {
          return Te(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Te(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Te(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Te(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Te(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Me(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
Et.isDisposedMask_ = 1;
Et.isScheduledMask_ = 2;
Et.isTrackPendingMask_ = 4;
Et.isRunningMask_ = 8;
Et.diffValueMask_ = 16;
var TE = 100,
  Gs = function (t) {
    return t();
  };
function jh() {
  C.inBatch > 0 || C.isRunningReactions || Gs(ME);
}
function ME() {
  C.isRunningReactions = !0;
  for (var e = C.pendingReactions, t = 0; e.length > 0; ) {
    ++t === TE && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  C.isRunningReactions = !1;
}
var Aa = gr("Reaction", Et);
function FE(e) {
  var t = Gs;
  Gs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function wi() {
  return !1;
}
function LE(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Dh = "action",
  BE = "action.bound",
  Th = "autoAction",
  NE = "autoAction.bound",
  UE = "<unnamed action>",
  Hs = Ui(Dh),
  qE = Ui(BE, { bound: !0 }),
  Ws = Ui(Th, { autoAction: !0 }),
  zE = Ui(NE, { autoAction: !0, bound: !0 });
function Mh(e) {
  var t = function (n, i) {
    if (ut(n)) return pr(n.name || UE, n, e);
    if (ut(i)) return pr(n, i, e);
    if (Ni(i)) return (e ? Ws : Hs).decorate_20223_(n, i);
    if (dr(i)) return Bi(n, i, e ? Ws : Hs);
    if (dr(n)) return yt(Ui(e ? Th : Dh, { name: n, autoAction: e }));
  };
  return t;
}
var Ye = Mh(!1);
Object.assign(Ye, Hs);
var Ii = Mh(!0);
Object.assign(Ii, Ws);
Ye.bound = yt(qE);
Ii.bound = yt(zE);
function Vr(e) {
  return ut(e) && e.isMobxAction === !0;
}
function $E(e, t) {
  var r, n, i, a;
  t === void 0 && (t = sh);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new Et(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = GE(t),
      l = !1;
    s = new Et(
      o,
      function () {
        l ||
          ((l = !0),
          c(function () {
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
    ((i = t) != null && (i = i.signal) != null && i.aborted) || s.schedule_(),
    s.getDisposer_((a = t) == null ? void 0 : a.signal)
  );
}
var VE = function (t) {
  return t();
};
function GE(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : VE;
}
var HE = "onBO",
  WE = "onBUO";
function KE(e, t, r) {
  return Lh(HE, e, t, r);
}
function Fh(e, t, r) {
  return Lh(WE, e, t, r);
}
function Lh(e, t, r, n) {
  var i = Da(t),
    a = ut(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var u = i[o];
      u && (u.delete(a), u.size === 0 && delete i[o]);
    }
  );
}
var JE = "never",
  aa = "always",
  YE = "observed";
function XE(e) {
  e.isolateGlobalState === !0 && AE();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (C.useProxies = t === aa ? !0 : t === JE ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (C.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === aa ? aa : r === YE;
    ((C.enforceActions = n), (C.allowStateChanges = !(n === !0 || n === aa)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (C[i] = !!e[i]);
  }),
    (C.allowStateReads = !C.observableRequiresReaction),
    e.reactionScheduler && FE(e.reactionScheduler));
}
function ZE(e, t, r, n) {
  var i = jS(t);
  return (
    mr(function () {
      var a = Jr(e, n)[L];
      Xa(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function QE(e, t) {
  return Bh(Da(e, t));
}
function Bh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = ek(e.observing_).map(Bh)),
    t
  );
}
function ek(e) {
  return Array.from(new Set(e));
}
var tk = 0;
function Nh() {
  this.message = "FLOW_CANCELLED";
}
Nh.prototype = Object.create(Error.prototype);
var fs = _h("flow"),
  rk = _h("flow.bound", { bound: !0 }),
  Gr = Object.assign(function (t, r) {
    if (Ni(r)) return fs.decorate_20223_(t, r);
    if (dr(r)) return Bi(t, r, fs);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var u = this,
          s = arguments,
          c = ++tk,
          l = Ye(i + " - runid: " + c + " - init", n).apply(u, s),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function _(O) {
              p = void 0;
              var w;
              try {
                w = Ye(i + " - runid: " + c + " - yield " + h++, l.next).call(l, O);
              } catch (S) {
                return f(S);
              }
              m(w);
            }
            function b(O) {
              p = void 0;
              var w;
              try {
                w = Ye(i + " - runid: " + c + " - yield " + h++, l.throw).call(l, O);
              } catch (S) {
                return f(S);
              }
              m(w);
            }
            function m(O) {
              if (ut(O?.then)) {
                O.then(m, f);
                return;
              }
              return O.done ? g(O.value) : ((p = Promise.resolve(O.value)), p.then(_, b));
            }
            _(void 0);
          });
        return (
          (v.cancel = Ye(i + " - runid: " + c + " - cancel", function () {
            try {
              p && Of(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Dr, Dr), Of(f), d(new Nh()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, fs);
Gr.bound = yt(rk);
function Of(e) {
  ut(e.cancel) && e.cancel();
}
function ji(e) {
  return e?.isMobXFlow === !0;
}
function nk(e, t) {
  return e ? ao(e) || !!e[L] || Ou(e) || Aa(e) || no(e) : !1;
}
function Uh(e) {
  return nk(e);
}
function Tt(e, t) {
  (t === void 0 && (t = void 0), Ke());
  try {
    return e.apply(t);
  } finally {
    Je();
  }
}
function jr(e) {
  return e[L];
}
var ik = {
  has: function (t, r) {
    return jr(t).has_(r);
  },
  get: function (t, r) {
    return jr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return dr(r) ? ((i = jr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return dr(r) ? ((n = jr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = jr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return jr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function ak(e, t) {
  var r, n;
  return (
    uh(),
    (e = Jr(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, ik))
  );
}
function He(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function qi(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    ch(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function We(e, t) {
  var r = _r();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, a = n.length;
      i < a && ((t = n[i](t)), t && !t.type && H(14), !!t);
      i++
    );
    return t;
  } finally {
    Lt(r);
  }
}
function ot(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function zi(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    ch(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function st(e, t) {
  var r = _r(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Lt(r);
  }
}
function ku(e, t, r) {
  return (
    mr(function () {
      var n,
        i = Jr(e, r)[L];
      ((n = t) != null || (t = LS(e)),
        Xa(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var Sf = "splice",
  wt = "update",
  ok = 1e4,
  sk = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Ft(Ia, r)
              ? Ia[r]
              : t[r];
    },
    set: function (t, r, n) {
      var i = t[L];
      return (
        r === "length" && i.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : i.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      H(15);
    },
  },
  xu = (function () {
    function e(r, n, i, a) {
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
        (this.owned_ = i),
        (this.legacyMode_ = a),
        (this.atom_ = new Zt(r)),
        (this.enhancer_ = function (o, u) {
          return n(o, u, "ObservableArray[..]");
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
        return qi(this, n);
      }),
      (t.observe_ = function (n, i) {
        return (
          i === void 0 && (i = !1),
          i &&
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
          zi(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && H("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
          if (n > i) {
            for (var a = new Array(n - i), o = 0; o < n - i; o++) a[o] = void 0;
            this.spliceWithArray_(i, 0, a);
          } else this.spliceWithArray_(n, i - n);
      }),
      (t.updateArrayLength_ = function (n, i) {
        (n !== this.lastKnownLength_ && H(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && Wh(n + i + 1));
      }),
      (t.spliceWithArray_ = function (n, i, a) {
        var o = this;
        this.atom_;
        var u = this.values_.length;
        if (
          (n === void 0 ? (n = 0) : n > u ? (n = u) : n < 0 && (n = Math.max(0, u + n)),
          arguments.length === 1
            ? (i = u - n)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, u - n))),
          a === void 0 && (a = Ns),
          He(this))
        ) {
          var s = We(this, { object: this.proxy_, type: Sf, index: n, removedCount: i, added: a });
          if (!s) return Ns;
          ((i = s.removedCount), (a = s.added));
        }
        if (
          ((a =
            a.length === 0
              ? a
              : a.map(function (d) {
                  return o.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var c = a.length - i;
          this.updateArrayLength_(u, c);
        }
        var l = this.spliceItemsIntoValues_(n, i, a);
        return (
          (i !== 0 || a.length !== 0) && this.notifyArraySplice_(n, a, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, i, a) {
        if (a.length < ok) {
          var o;
          return (o = this.values_).splice.apply(o, [n, i].concat(a));
        } else {
          var u = this.values_.slice(n, n + i),
            s = this.values_.slice(n + i);
          this.values_.length += a.length - i;
          for (var c = 0; c < a.length; c++) this.values_[n + c] = a[c];
          for (var l = 0; l < s.length; l++) this.values_[n + a.length + l] = s[l];
          return u;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, i, a) {
        var o = !this.owned_ && wi(),
          u = ot(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: wt,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: a,
                }
              : null;
        (this.atom_.reportChanged(), u && st(this, s));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && wi(),
          u = ot(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Sf,
                  index: n,
                  removed: a,
                  added: i,
                  removedCount: a.length,
                  addedCount: i.length,
                }
              : null;
        (this.atom_.reportChanged(), u && st(this, s));
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]));
      }),
      (t.set_ = function (n, i) {
        var a = this.values_;
        if ((this.legacyMode_ && n > a.length && H(17, n, a.length), n < a.length)) {
          this.atom_;
          var o = a[n];
          if (He(this)) {
            var u = We(this, { type: wt, object: this.proxy_, index: n, newValue: i });
            if (!u) return;
            i = u.newValue;
          }
          i = this.enhancer_(i, o);
          var s = i !== o;
          s && ((a[n] = i), this.notifyArrayChildUpdate_(n, i, o));
        } else {
          for (var c = new Array(n + 1 - a.length), l = 0; l < c.length - 1; l++) c[l] = void 0;
          ((c[c.length - 1] = i), this.spliceWithArray_(a.length, 0, c));
        }
      }),
      e
    );
  })();
function uk(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    uh(),
    mr(function () {
      var i = new xu(r, t, n, !1);
      dh(i.values_, L, i);
      var a = new Proxy(i.values_, sk);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var Ia = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[L];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
    var o = this[L];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function (t, r, n) {
    return this[L].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[L], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[L].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[L], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (C.trackingDerivation && H(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    C.trackingDerivation && H(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[L],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ie("at", Ue);
ie("concat", Ue);
ie("flat", Ue);
ie("includes", Ue);
ie("indexOf", Ue);
ie("join", Ue);
ie("lastIndexOf", Ue);
ie("slice", Ue);
ie("toString", Ue);
ie("toLocaleString", Ue);
ie("toSorted", Ue);
ie("toSpliced", Ue);
ie("with", Ue);
ie("every", lt);
ie("filter", lt);
ie("find", lt);
ie("findIndex", lt);
ie("findLast", lt);
ie("findLastIndex", lt);
ie("flatMap", lt);
ie("forEach", lt);
ie("map", lt);
ie("some", lt);
ie("toReversed", lt);
ie("reduce", qh);
ie("reduceRight", qh);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (Ia[e] = t(e));
}
function Ue(e) {
  return function () {
    var t = this[L];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function lt(e) {
  return function (t, r) {
    var n = this,
      i = this[L];
    i.atom_.reportObserved();
    var a = i.dehanceValues_(i.values_);
    return a[e](function (o, u) {
      return t.call(r, o, u, n);
    });
  };
}
function qh(e) {
  return function () {
    var t = this,
      r = this[L];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (a, o, u) {
        return i(a, o, u, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var ck = gr("ObservableArrayAdministration", xu);
function io(e) {
  return Ja(e) && ck(e[L]);
}
var lk = {},
  Wt = "add",
  ja = "delete",
  zh = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = vr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = lk),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        ut(Map) || H(18),
        mr(function () {
          ((a.keysAtom_ = hh("ObservableMap.keys()")),
            (a.data_ = new Map()),
            (a.hasMap_ = new Map()),
            r && a.merge(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var i = this;
        if (!C.trackingDerivation) return this.has_(n);
        var a = this.hasMap_.get(n);
        if (!a) {
          var o = (a = new ur(this.has_(n), Za, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Fh(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (He(this)) {
          var o = We(this, { type: a ? wt : Wt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, He(this))) {
          var a = We(this, { type: ja, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = wi(),
            u = ot(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: ja,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Tt(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            u && st(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== C.UNCHANGED)) {
          var o = wi(),
            u = ot(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: wt,
                    object: this,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && st(this, s));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Tt(function () {
            var c,
              l = new ur(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = wi(),
          u = ot(this),
          s =
            u || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Wt,
                  object: this,
                  name: n,
                  newValue: i,
                }
              : null;
        u && st(this, s);
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
          i = this.keys();
        return Ef({
          next: function () {
            var o = i.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : n.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          i = this.keys();
        return Ef({
          next: function () {
            var o = i.next(),
              u = o.done,
              s = o.value;
            return { done: u, value: u ? void 0 : [s, n.get(s)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, i) {
        for (var a = Tr(this), o; !(o = a()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(i, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          br(n) && (n = new Map(n)),
          Tt(function () {
            Jt(n)
              ? IS(n).forEach(function (a) {
                  return i.set(a, n[a]);
                })
              : Array.isArray(n)
                ? n.forEach(function (a) {
                    var o = a[0],
                      u = a[1];
                    return i.set(o, u);
                  })
                : Wr(n)
                  ? (AS(n) || H(19, n),
                    n.forEach(function (a, o) {
                      return i.set(o, a);
                    }))
                  : n != null && H(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Tt(function () {
          kh(function () {
            for (var i = Tr(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Tt(function () {
            for (
              var a = dk(n), o = new Map(), u = !1, s = Tr(i.data_.keys()), c;
              !(c = s()).done;
            ) {
              var l = c.value;
              if (!a.has(l)) {
                var d = i.delete(l);
                if (d) u = !0;
                else {
                  var p = i.data_.get(l);
                  o.set(l, p);
                }
              }
            }
            for (var v = Tr(a.entries()), g; !(g = v()).done; ) {
              var f = g.value,
                h = f[0],
                _ = f[1],
                b = i.data_.has(h);
              if ((i.set(h, _), i.data_.has(h))) {
                var m = i.data_.get(h);
                (o.set(h, m), b || (u = !0));
              }
            }
            if (!u)
              if (i.data_.size !== o.size) i.keysAtom_.reportChanged();
              else
                for (var O = i.data_.keys(), w = o.keys(), S = O.next(), k = w.next(); !S.done; ) {
                  if (S.value !== k.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (k = w.next()));
                }
            i.data_ = o;
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
      (t.observe_ = function (n, i) {
        return zi(this, n);
      }),
      (t.intercept_ = function (n) {
        return qi(this, n);
      }),
      Kr(e, [
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
  br = gr("ObservableMap", zh);
function Ef(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Pu(e));
}
function dk(e) {
  if (Wr(e) || br(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Jt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var fk = {},
  $h = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = vr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = fk),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        ut(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, i);
        }),
        mr(function () {
          ((a.atom_ = hh(a.name_)), r && a.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Tt(function () {
          kh(function () {
            for (var i = Tr(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = Tr(this), o; !(o = a()).done; ) {
          var u = o.value;
          n.call(i, u, u, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, He(this))) {
          var a = We(this, { type: Wt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Tt(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            u = ot(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Wt,
                    object: this,
                    newValue: n,
                  }
                : null;
          u && st(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (He(this)) {
          var a = We(this, { type: ja, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = ot(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ja,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Tt(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
            }),
            u && st(this, s),
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
        return kf({
          next: function () {
            var a = n.next(),
              o = a.value,
              u = a.done;
            return u ? { value: void 0, done: u } : { value: [o, o], done: u };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var n = this,
          i = this.data_.values();
        return kf({
          next: function () {
            var o = i.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Dt(n) && !ht(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Dt(n) && !ht(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Dt(n) && !ht(n)) return n.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if (Dt(n) && !ht(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          ht(n) && (n = new Set(n)),
          Tt(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : Dt(n)
                ? (i.clear(),
                  n.forEach(function (a) {
                    return i.add(a);
                  }))
                : n != null && H("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, i) {
        return zi(this, n);
      }),
      (t.intercept_ = function (n) {
        return qi(this, n);
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
      Kr(e, [
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
  ht = gr("ObservableSet", $h);
function kf(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Pu(e));
}
var xf = Object.create(null),
  Rf = "remove",
  Vh = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = sE),
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
        (this.name_ = i),
        (this.defaultAnnotation_ = a),
        (this.keysAtom_ = new Zt("ObservableObject.keys")),
        (this.isPlainObject_ = Jt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var a = this.values_.get(n);
        if (a instanceof ct) return (a.set(i), !0);
        if (He(this)) {
          var o = We(this, { type: wt, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== C.UNCHANGED)) {
          var u = ot(this),
            s = !1,
            c =
              u || s
                ? {
                    type: wt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && st(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (C.trackingDerivation && !Ft(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          Ft(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, i)
              : a
                ? Reflect.set(this.target_, n, i)
                : ((this.target_[n] = i), !0)
            : this.extend_(
                n,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                a,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!C.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new ur(n in this.target_, Za, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[gt]) != null && a[n]) return;
            H(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ka; ) {
            var u = ka(o, n);
            if (u) {
              var s = i.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Cf(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, a, o) {
        if ((o === void 0 && (o = !1), a === !0 && (a = this.defaultAnnotation_), a === !1))
          return this.defineProperty_(n, i, o);
        var u = a.extend_(this, n, i, o);
        return (u && Cf(this, a, n), u);
      }),
      (t.defineProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Ke();
          var o = this.delete_(n);
          if (!o) return o;
          if (He(this)) {
            var u = We(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = fr({}, i, { value: s }));
          }
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else mt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Je();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Ke();
          var u = this.delete_(n);
          if (!u) return u;
          if (He(this)) {
            var s = We(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i,
            });
            if (!s) return null;
            i = s.newValue;
          }
          var c = Pf(n),
            l = {
              configurable: C.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: c.get,
              set: c.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else mt(this.target_, n, l);
          var d = new ur(i, a, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Je();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Ke();
          var o = this.delete_(n);
          if (!o) return o;
          if (He(this)) {
            var u = We(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_));
          var s = Pf(n),
            c = {
              configurable: C.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else mt(this.target_, n, c);
          (this.values_.set(n, new ct(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Je();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !Ft(this.target_, n))) return !0;
        if (He(this)) {
          var a = We(this, { object: this.proxy_ || this.target_, name: n, type: Rf });
          if (!a) return null;
        }
        try {
          var o;
          Ke();
          var u = ot(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = ka(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof ur && (l = c.value_), Ih(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var p = {
              type: Rf,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && st(this, p);
          }
        } finally {
          Je();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return zi(this, n);
      }),
      (t.intercept_ = function (n) {
        return qi(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = ot(this),
          u = !1;
        if (o || u) {
          var s =
            o || u
              ? {
                  type: Wt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: i,
                }
              : null;
          o && st(this, s);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Xa(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Jr(e, t) {
  var r;
  if (Ft(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Vh(e, new Map(), String(n), bE(t));
  return (Ya(e, L, i), e);
}
var vk = gr("ObservableObjectAdministration", Vh);
function Pf(e) {
  return (
    xf[e] ||
    (xf[e] = {
      get: function () {
        return this[L].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[L].setObservablePropValue_(e, r);
      },
    })
  );
}
function ao(e) {
  return Ja(e) ? vk(e[L]) : !1;
}
function Cf(e, t, r) {
  var n;
  (n = e.target_[gt]) == null || delete n[r];
}
var pk = Hh(0),
  hk = (function () {
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
  vs = 0,
  Gh = function () {};
function gk(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
gk(Gh, Array.prototype);
var Ru = (function (e) {
  function t(n, i, a, o) {
    var u;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      mr(function () {
        var s = new xu(a, i, o, !0);
        ((s.proxy_ = u),
          dh(u, L, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          hk && Object.defineProperty(u, "0", pk));
      }),
      u
    );
  }
  ph(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[L].atom_.reportObserved();
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        a.map(function (u) {
          return io(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return Pu({
        next: function () {
          return i < n.length ? { value: n[i++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Kr(t, [
      {
        key: "length",
        get: function () {
          return this[L].getArrayLength_();
        },
        set: function (i) {
          this[L].setArrayLength_(i);
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
})(Gh);
Object.entries(Ia).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ya(Ru.prototype, t, r);
});
function Hh(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[L].get_(e);
    },
    set: function (r) {
      this[L].set_(e, r);
    },
  };
}
function _k(e) {
  mt(Ru.prototype, "" + e, Hh(e));
}
function Wh(e) {
  if (e > vs) {
    for (var t = vs; t < e + 100; t++) _k(t);
    vs = e;
  }
}
Wh(1e3);
function bk(e, t, r) {
  return new Ru(e, t, r);
}
function Da(e, t) {
  if (typeof e == "object" && e !== null) {
    if (io(e)) return (t !== void 0 && H(23), e[L].atom_);
    if (ht(e)) return e.atom_;
    if (br(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, Ks(e)), r);
    }
    if (ao(e)) {
      if (!t) return H(26);
      var n = e[L].values_.get(t);
      return (n || H(27, t, Ks(e)), n);
    }
    if (Ou(e) || no(e) || Aa(e)) return e;
  } else if (ut(e) && Aa(e[L])) return e[L];
  H(28);
}
function mk(e, t) {
  if ((e || H(29), Ou(e) || no(e) || Aa(e) || br(e) || ht(e))) return e;
  if (e[L]) return e[L];
  H(24, e);
}
function Ks(e, t) {
  var r;
  if (t !== void 0) r = Da(e, t);
  else {
    if (Vr(e)) return e.name;
    ao(e) || br(e) || ht(e) ? (r = mk(e)) : (r = Da(e));
  }
  return r.name_;
}
function mr(e) {
  var t = _r(),
    r = to(!0);
  Ke();
  try {
    return e();
  } finally {
    (Je(), ro(r), Lt(t));
  }
}
var Af = Ka.toString;
function Kh(e, t, r) {
  return (r === void 0 && (r = -1), Js(e, t, r));
}
function Js(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== "function" && a !== "object" && typeof t != "object") return !1;
  var o = Af.call(e);
  if (o !== Af.call(t)) return !1;
  switch (o) {
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
  ((e = If(e)), (t = If(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(ut(s) && s instanceof s && ut(c) && c instanceof c) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (n = n || []), (i = i || []));
  for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
  if ((n.push(e), i.push(t), u)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!Js(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var g = d[v];
      if (!(Ft(t, g) && Js(e[g], t[g], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function If(e) {
  return io(e) ? e.slice() : Wr(e) || br(e) || Dt(e) || ht(e) ? Array.from(e.entries()) : e;
}
var jf,
  yk = ((jf = Wa().Iterator) == null ? void 0 : jf.prototype) || {};
function Pu(e) {
  return ((e[Symbol.iterator] = wk), Object.assign(Object.create(yk), e));
}
function wk() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Wa();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: LE, extras: { getDebugName: Ks }, $mobx: L });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!ku) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Ok(e) {
  e();
}
function Sk(e) {
  (e || (e = Ok), XE({ reactionScheduler: e }));
}
function Ek(e) {
  return QE(e);
}
var kk = 1e4,
  xk = 1e4,
  Rk = (function () {
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
            (n === void 0 && (n = kk), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
            var i = Date.now();
            (r.registrations.forEach(function (a, o) {
              i - a.registeredAt >= n && (r.finalize(a.value), r.registrations.delete(o));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, xk));
        },
      }),
      e
    );
  })(),
  Pk = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Rk,
  Di = new Pk(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  ps = { exports: {} },
  hs = {};
var Df;
function Ck() {
  if (Df) return hs;
  Df = 1;
  var e = hr();
  function t(d, p) {
    return (d === p && (d !== 0 || 1 / d === 1 / p)) || (d !== d && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    i = e.useEffect,
    a = e.useLayoutEffect,
    o = e.useDebugValue;
  function u(d, p) {
    var v = p(),
      g = n({ inst: { value: v, getSnapshot: p } }),
      f = g[0].inst,
      h = g[1];
    return (
      a(
        function () {
          ((f.value = v), (f.getSnapshot = p), s(f) && h({ inst: f }));
        },
        [d, v, p],
      ),
      i(
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
      o(v),
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
  function c(d, p) {
    return p();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? c
      : u;
  return (
    (hs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    hs
  );
}
var Tf;
function Ak() {
  return (Tf || ((Tf = 1), (ps.exports = Ck())), ps.exports);
}
var Ik = Ak();
function Mf(e) {
  e.reaction = new Et("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function jk(e, t) {
  t === void 0 && (t = "observed");
  var r = E.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (u) {
        return (
          Di.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (Mf(n), (n.stateVersion = Symbol())),
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
  var i = r.current;
  (i.reaction || (Mf(i), Di.register(r, i, i)),
    E.useDebugValue(i.reaction, Ek),
    Ik.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
  var a, o;
  if (
    (i.reaction.track(function () {
      try {
        a = e();
      } catch (u) {
        o = u;
      }
    }),
    o)
  )
    throw o;
  return a;
}
var gs,
  _s,
  Jh = typeof Symbol == "function" && Symbol.for,
  Dk =
    (_s =
      (gs = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || gs === void 0
        ? void 0
        : gs.configurable) !== null && _s !== void 0
      ? _s
      : !1,
  Ff = Jh
    ? Symbol.for("react.forward_ref")
    : typeof y.forwardRef == "function" &&
      y.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Lf = Jh
    ? Symbol.for("react.memo")
    : typeof y.memo == "function" &&
      y.memo(function (e) {
        return null;
      }).$$typeof;
function Tk(e, t) {
  var r;
  if (Lf && e.$$typeof === Lf)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    i = e,
    a = e.displayName || e.name;
  if (Ff && e.$$typeof === Ff && ((n = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return jk(function () {
      return i(u, s);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    Dk && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    Fk(e, o),
    o
  );
}
var Mk = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Fk(e, t) {
  Object.keys(e).forEach(function (r) {
    Mk[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var bs;
Sk(Ta.unstable_batchedUpdates);
bs = Di.finalizeAllImmediately;
function Lk(e, t) {
  if (Bf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.hasOwnProperty.call(t, r[i]) || !Bf(e[r[i]], t[r[i]])) return !1;
  return !0;
}
function Bf(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Nf = Symbol("patchMixins"),
  Yh = Symbol("patchedDefinition");
function Bk(e, t) {
  var r = (e[Nf] = e[Nf] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Uf(e, t) {
  for (var r = this, n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  t.locks++;
  try {
    var o;
    return (e != null && (o = e.apply(this, i)), o);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (u) {
          u.apply(r, i);
        }));
  }
}
function qf(e, t) {
  var r = function () {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    Uf.call.apply(Uf, [this, e, t].concat(a));
  };
  return r;
}
function Nk(e, t, r) {
  var n = Bk(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[Yh])) {
    var a = e[t],
      o = Xh(e, t, i ? i.enumerable : void 0, n, a);
    Object.defineProperty(e, t, o);
  }
}
function Xh(e, t, r, n, i) {
  var a,
    o = qf(i, n);
  return (
    (a = {}),
    (a[Yh] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (s) {
      if (this === e) o = qf(s, n);
      else {
        var c = Xh(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = r),
    a
  );
}
var zf = Symbol("ObserverAdministration"),
  $f = Symbol("isMobXReactObserver");
function Ys(e) {
  var t;
  return (t = e[zf]) != null
    ? t
    : (e[zf] = {
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
function Uk(e) {
  var t = e.prototype;
  if (e[$f]) {
    var r = Xs(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[$f] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== y.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Vf;
    else if (t.shouldComponentUpdate !== Vf)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var i = Xs(e);
    throw new Error(
      "[mobx-react] class component (" +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: qk.call(this, n),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = Ys(this);
      return (
        (u.mounted = !0),
        Di.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    Nk(t, "componentWillUnmount", function () {
      var o,
        u = Ys(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Xs(e) {
  return e.displayName || e.name || "<component>";
}
function qk(e) {
  var t = e.bind(this),
    r = Ys(this);
  function n() {
    r.reaction || ((r.reaction = zk(r)), r.mounted || Di.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = PE(!1, t);
        } catch (o) {
          i = o;
        }
      }),
      i)
    )
      throw i;
    return a;
  }
  return n;
}
function zk(e) {
  return new Et(e.name + ".render()", function () {
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
function Vf(e, t) {
  return this.state !== t ? !0 : !Lk(this.props, e);
}
function oo(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? Uk(e)
      : Tk(e)
  );
}
function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Zs.apply(null, arguments)
  );
}
function $k(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Vk = ["children"],
  Gf = E.createContext({});
function Zh(e) {
  var t = e.children,
    r = $k(e, Vk),
    n = E.useContext(Gf),
    i = E.useRef(Zs({}, n, r)),
    a = i.current;
  return E.createElement(Gf.Provider, { value: a }, t);
}
Zh.displayName = "MobXProvider";
E.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var Gk = Object.defineProperty,
  Hk = Object.getOwnPropertyDescriptor,
  Nt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Hk(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Gk(t, r, i), i);
  };
class xt {
  constructor() {
    ((this.isLoading = !0), ku(this));
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
Nt([se], xt.prototype, "isLoading", 2);
Nt([se], xt.prototype, "users", 2);
Nt([se], xt.prototype, "duplicates", 2);
Nt([se], xt.prototype, "sort", 2);
Nt([Ye.bound], xt.prototype, "saveUsers", 1);
Nt([Ye.bound], xt.prototype, "saveSort", 1);
Nt([Ye.bound], xt.prototype, "saveDuplicates", 1);
Nt([Ye], xt.prototype, "loading", 1);
Nt([Ye], xt.prototype, "stopLoading", 1);
const Wk = new xt();
var Kk = Object.defineProperty,
  Jk = Object.getOwnPropertyDescriptor,
  Qh = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Jk(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Kk(t, r, i), i);
  };
class Cu {
  constructor() {
    ((this.state = "ROOT"), ku(this));
  }
  saveState(t) {
    this.state = t;
  }
}
Qh([se], Cu.prototype, "state", 2);
Qh([Ye.bound], Cu.prototype, "saveState", 1);
const Yk = new Cu();
class Xk {
  constructor() {
    ((this.usersStore = Wk), (this.stateStore = Yk));
  }
}
const eg = new Xk(),
  Zk = y.createContext(eg),
  so = () => y.useContext(Zk),
  Qk = oo(() => {
    const { usersStore: e, stateStore: t } = so(),
      r = ah(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? M.jsx("div", { children: "User Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(wu, {
                head: r,
                onSort: async (i) => {
                  let a = { name: i.key, sortType: i.sortOrder };
                  e.loading();
                  try {
                    const o = await Mt.invoke("fetch", { sortType: a });
                    (e.saveUsers(o), e.saveSort(a));
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: n.map((i, a) => {
                  const o = [
                    { key: "id", content: i.id },
                    { key: "name", content: i.name },
                    { key: "email", content: i.email },
                    {
                      key: "delete",
                      content: M.jsx("div", {
                        children: M.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Mt.invoke("delete", { id: i.id }));
                              const u = await Mt.invoke("fetch", { sortType: e.sort });
                              e.saveUsers(u);
                            } finally {
                              e.stopLoading();
                            }
                          },
                          children: "delete",
                        }),
                      }),
                    },
                  ];
                  return { key: `row-${a}-${i.id}`, cells: o };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: M.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              M.jsx("br", {}),
              M.jsx("br", {}),
              M.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const i = await Mt.invoke("duplicate", { sortType: e.sort });
                    (e.saveDuplicates(i), t.saveState("DUPLICATE"));
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
  ex = oo(() => {
    const { usersStore: e, stateStore: t } = so(),
      [r, n] = y.useState({}),
      i = (o) => {
        const { name: u, value: s, type: c } = o.target;
        n((l) => ({ ...l, [u]: c === "number" ? Number(s) : s }));
      },
      a = async (o) => {
        (o.preventDefault(), await Mt.invoke("create", { data: r }), e.loading());
        try {
          (e.saveUsers(await Mt.invoke("fetch", { sortType: e.sort })), t.saveState("ROOT"));
        } finally {
          e.stopLoading();
        }
      };
    return M.jsx("div", {
      children: M.jsxs("form", {
        onSubmit: a,
        children: [
          M.jsxs(
            "div",
            {
              children: [
                M.jsx("label", { htmlFor: "name", children: "Name" }),
                M.jsx("br", {}),
                M.jsx("input", { type: "text", id: "name", name: "name", onChange: i }),
                M.jsx("br", {}),
              ],
            },
            "name",
          ),
          M.jsxs(
            "div",
            {
              children: [
                M.jsx("label", { htmlFor: "email", children: "Email" }),
                M.jsx("br", {}),
                M.jsx("input", { type: "text", id: "email", name: "email", onChange: i }),
                M.jsx("br", {}),
              ],
            },
            "email",
          ),
          M.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  tx = oo(() => {
    const { usersStore: e } = so(),
      t = ah(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? M.jsx("div", { children: "Duplicate Table is EMPTY" })
      : M.jsx("div", {
          children: M.jsxs("div", {
            children: [
              M.jsx(wu, {
                head: t,
                onSort: async (n) => {
                  let i = { name: n.key, sortType: n.sortOrder };
                  e.loading();
                  try {
                    const a = await Mt.invoke("duplicate", { sortType: i });
                    e.saveDuplicates(a);
                  } finally {
                    e.stopLoading();
                  }
                },
                rows: r.map((n, i) => {
                  const a = [
                    { key: "name", content: n.name },
                    { key: "email", content: n.email },
                    { key: "count", content: n.count },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 5,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: M.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              M.jsx("br", {}),
              M.jsx("br", {}),
            ],
          }),
        });
  });
function rx() {
  const { usersStore: e, stateStore: t } = so();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          const n = await Mt.invoke("fetch", { type: "USER", sortType: e.sort });
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
      return M.jsx("div", {
        children: M.jsxs("div", {
          children: [
            M.jsx("button", { onClick: () => t.saveState("ADD_USER"), children: "Add a new User" }),
            M.jsx("br", {}),
            M.jsx("br", {}),
            M.jsx(Qk, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return M.jsx("div", {
        children: M.jsxs("div", {
          children: [
            M.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            M.jsx("br", {}),
            M.jsx("br", {}),
            M.jsx(tx, {}),
          ],
        }),
      });
    case "ADD_USER":
      return M.jsx("div", {
        children: M.jsxs("div", {
          children: [
            M.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            M.jsx("br", {}),
            M.jsx("br", {}),
            M.jsx(ex, {}),
          ],
        }),
      });
    default:
      return M.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const nx = oo(rx),
  ix = document.getElementById("root"),
  ax = ag.createRoot(ix),
  Hf = () => {
    ax.render(M.jsx(Zh, { ...eg, children: M.jsx(nx, {}) }));
  };
Mt.view.theme
  .enable()
  .then(() => {
    Hf();
  })
  .catch((e) => {
    (console.error(e.message), Hf());
  });
export {
  E as R,
  gb as T,
  Ne as _,
  ve as a,
  xs as b,
  fe as c,
  Be as d,
  J as e,
  K as f,
  x as g,
  ne as h,
  za as i,
  De as j,
  te as k,
  yy as l,
  jt as m,
  kt as n,
  R as o,
  pb as p,
  F_ as q,
  y as r,
  db as s,
  Vw as w,
};
