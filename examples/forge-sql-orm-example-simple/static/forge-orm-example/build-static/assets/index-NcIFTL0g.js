const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-JJ6DjNTc.js",
      "./client-core-vendor-DC5q1RXn.js",
      "./body-R_CFuef8.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./lodash-vendor-B0QWQanV.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as br, a as Ma, c as og } from "./react-dom-vendor--YlRhZCI.js";
import { g as Yt, a as Wf, r as Kt, b as Ot, s as $e } from "./client-core-vendor-DC5q1RXn.js";
import { r as sg } from "./lodash-vendor-B0QWQanV.js";
function ug(e, t) {
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
  en = {};
var Mu;
function cg() {
  if (Mu) return en;
  Mu = 1;
  var e = br(),
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
  return ((en.Fragment = r), (en.jsx = o), (en.jsxs = o), en);
}
var Fu;
function lg() {
  return (Fu || ((Fu = 1), (vo.exports = cg())), vo.exports);
}
var F = lg(),
  y = br();
const E = Yt(y),
  Lu = ug({ __proto__: null, default: E }, [y]);
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
var ga = function () {
  return (
    (ga =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    ga.apply(this, arguments)
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
var Fa = Object.create
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
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Fa(t, e, r);
}
function _a(e) {
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
function Nr(e) {
  return this instanceof Nr ? ((this.v = e), this) : new Nr(e);
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
    v.value instanceof Nr ? Promise.resolve(v.value.v).then(l, d) : p(a[0][2], v);
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
          return (r = !r) ? { value: Nr(e[i](o)), done: !1 } : a ? a(o) : o;
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
    : ((e = typeof _a == "function" ? _a(e) : e[Symbol.iterator]()),
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
var dg = Object.create
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
  if (e != null) for (var r = ys(e), n = 0; n < r.length; n++) r[n] !== "default" && Fa(t, e, r[n]);
  return (dg(t, e), t);
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
var fg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function mv(e) {
  function t(a) {
    ((e.error = e.hasError ? new fg(a, e.error, "An error was suppressed during disposal.") : a),
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
const vg = {
    __extends: Kf,
    __assign: ga,
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
    __createBinding: Fa,
    __exportStar: av,
    __values: _a,
    __read: Qs,
    __spread: ov,
    __spreadArrays: sv,
    __spreadArray: uv,
    __await: Nr,
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
  pg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: bv,
        get __assign() {
          return ga;
        },
        __asyncDelegator: lv,
        __asyncGenerator: cv,
        __asyncValues: dv,
        __await: Nr,
        __awaiter: nv,
        __classPrivateFieldGet: hv,
        __classPrivateFieldIn: _v,
        __classPrivateFieldSet: gv,
        __createBinding: Fa,
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
        __values: _a,
        default: vg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qe = Wf(pg);
var tn = {},
  Bu;
function hg() {
  return (
    Bu ||
      ((Bu = 1),
      Object.defineProperty(tn, "__esModule", { value: !0 }),
      (tn.NavigationTarget = void 0),
      (tn.NavigationTarget = {
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
    tn
  );
}
var ho = {},
  go = {},
  rn = {},
  nn = {},
  Nu;
function _e() {
  if (Nu) return nn;
  ((Nu = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((nn.BridgeAPIError = e), nn);
}
var Uu;
function se() {
  if (Uu) return rn;
  ((Uu = 1), Object.defineProperty(rn, "__esModule", { value: !0 }), (rn.getCallBridge = void 0));
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
  return ((rn.getCallBridge = r), rn);
}
var an = {},
  qu;
function La() {
  if (qu) return an;
  ((qu = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.withRateLimiter = void 0));
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
  return ((an.withRateLimiter = t), an);
}
var zu;
function gg() {
  return (
    zu ||
      ((zu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = se(),
          r = _e(),
          n = La(),
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
function Fi() {
  return (
    $u ||
      (($u = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Qe.__exportStar(gg(), e));
      })(ho)),
    ho
  );
}
var _o = {},
  on = {},
  bo = {},
  Vu;
function wv() {
  return (
    Vu ||
      ((Vu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = se(),
          r = _e(),
          n = La(),
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
function _g() {
  if (Gu) return on;
  ((Gu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.invokeRemote = void 0));
  const e = wv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((on.invokeRemote = t), on);
}
var sn = {},
  Hu;
function bg() {
  if (Hu) return sn;
  ((Hu = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.invokeService = void 0));
  const e = wv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((sn.invokeService = t), sn);
}
var Wu;
function mg() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Qe;
        (t.__exportStar(_g(), e), t.__exportStar(bg(), e));
      })(_o)),
    _o
  );
}
var mo = {},
  un = {},
  cn = {},
  Ku;
function yg() {
  if (Ku) return cn;
  ((Ku = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.submit = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((cn.submit = n), cn);
}
var ln = {},
  Ju;
function wg() {
  if (Ju) return ln;
  ((Ju = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.close = void 0));
  const e = se(),
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
  return ((ln.close = n), ln);
}
var dn = {},
  Yu;
function Og() {
  if (Yu) return dn;
  ((Yu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.open = void 0));
  const e = se(),
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
  return ((dn.open = n), dn);
}
var fn = {},
  Xu;
function Sg() {
  if (Xu) return fn;
  ((Xu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.refresh = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((fn.refresh = n), fn);
}
var vn = {},
  Zu;
function Eg() {
  if (Zu) return vn;
  ((Zu = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.createHistory = void 0));
  const t = (0, se().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((i) => {
          n.location = i;
        }),
        n
      );
    };
  return ((vn.createHistory = r), vn);
}
var pn = {},
  yo = {},
  Pt = {},
  Qu;
function Ov() {
  return (
    Qu ||
      ((Qu = 1),
      Object.defineProperty(Pt, "__esModule", { value: !0 }),
      (Pt.FORGE_SUPPORTED_LOCALE_CODES =
        Pt.I18N_BUNDLE_FOLDER_NAME =
        Pt.I18N_INFO_FILE_NAME =
          void 0),
      (Pt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (Pt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (Pt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    Pt
  );
}
var rr = {},
  ec;
function kg() {
  if (ec) return rr;
  ((ec = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.TranslationsGetter = rr.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  rr.TranslationGetterError = t;
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
  return ((rr.TranslationsGetter = r), rr);
}
var hn = {},
  wo = {},
  tc;
function Sv() {
  return (
    tc ||
      ((tc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = Qe.__importDefault(sg()),
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
function xg() {
  if (rc) return hn;
  ((rc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.Translator = void 0));
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
  return ((hn.Translator = t), hn);
}
var gn = {},
  nc;
function Rg() {
  if (nc) return gn;
  ((nc = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.ensureLocale = void 0));
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
  return ((gn.ensureLocale = i), gn);
}
var Oo = {},
  ic;
function Pg() {
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
function Cg() {
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
        const t = Qe;
        (t.__exportStar(Ov(), e),
          t.__exportStar(kg(), e),
          t.__exportStar(xg(), e),
          t.__exportStar(Rg(), e));
        var r = Sv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Pg();
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
          t.__exportStar(Cg(), e));
      })(yo)),
    yo
  );
}
var sc;
function Ag() {
  if (sc) return pn;
  ((sc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.getContext = void 0));
  const e = se(),
    t = Ev(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var i;
      const a = await r("getContext"),
        o = a?.locale;
      return (o && (a.locale = (i = (0, t.ensureLocale)(o)) !== null && i !== void 0 ? i : o), a);
    };
  return ((pn.getContext = n), pn);
}
var _n = {},
  uc;
function Ig() {
  if (uc) return _n;
  ((uc = 1),
    Object.defineProperty(_n, "__esModule", { value: !0 }),
    (_n.changeWindowTitle = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        await r("changeWindowTitle", i);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((_n.changeWindowTitle = n), _n);
}
var bn = {},
  cc;
function jg() {
  if (cc) return bn;
  ((cc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.theme = void 0));
  const t = (0, se().getCallBridge)();
  return ((bn.theme = { enable: () => t("enableTheming") }), bn);
}
var mn = {},
  yn = {},
  Eo = {},
  nr = {},
  lc;
function kv() {
  if (lc) return nr;
  ((lc = 1),
    Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.blobToBase64 = nr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  nr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((nr.blobToBase64 = t), nr);
}
var dc;
function Dg() {
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
  if (fc) return yn;
  ((fc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.events = void 0));
  const e = se(),
    t = Dg(),
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
  return ((yn.events = { emit: n, on: i }), yn);
}
var vc;
function Tg() {
  if (vc) return mn;
  ((vc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.emitReadyEvent = void 0));
  const e = xv(),
    t = Iv(),
    r = se(),
    n = _e(),
    i = (0, r.getCallBridge)(),
    a = "EXTENSION_READY",
    o = async () => {
      const u = await t.view.getContext();
      await e.events.emit(a, { localId: u.localId });
      try {
        if ((await i("emitReadyEvent")) === !1)
          throw new n.BridgeAPIError("Unable to emit ready event.");
      } catch {
        throw new n.BridgeAPIError("Unable to emit ready event.");
      }
    };
  return ((mn.emitReadyEvent = o), mn);
}
const Mg = "modulepreload",
  Fg = function (e, t) {
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
          if (((l = Fg(l, n)), l in pc)) return;
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
            ((v.rel = d ? "stylesheet" : Mg),
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
var wn = {},
  ko = {},
  On = {},
  Ki = {},
  hc;
function Pv() {
  if (hc) return Ki;
  ((hc = 1), Object.defineProperty(Ki, "__esModule", { value: !0 }), (Ki.default = r));
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
  return Ki;
}
var Er = {},
  Sn = {},
  En = {},
  gc;
function Lg() {
  if (gc) return En;
  ((gc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((En.default = e), En);
}
var _c;
function Ba() {
  if (_c) return Sn;
  ((_c = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.default = void 0));
  var e = t(Lg());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var n = r;
  return ((Sn.default = n), Sn);
}
var bc;
function Na() {
  if (bc) return Er;
  ((bc = 1),
    Object.defineProperty(Er, "__esModule", { value: !0 }),
    (Er.default = void 0),
    (Er.unsafeStringify = n));
  var e = t(Ba());
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
  return ((Er.default = a), Er);
}
var mc;
function Bg() {
  if (mc) return On;
  ((mc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.default = void 0));
  var e = r(Pv()),
    t = Na();
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
  return ((On.default = s), On);
}
var kn = {},
  $t = {},
  xn = {},
  yc;
function Cv() {
  if (yc) return xn;
  ((yc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.default = void 0));
  var e = t(Ba());
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
  return ((xn.default = n), xn);
}
var wc;
function Av() {
  if (wc) return $t;
  ((wc = 1),
    Object.defineProperty($t, "__esModule", { value: !0 }),
    ($t.URL = $t.DNS = void 0),
    ($t.default = o));
  var e = Na(),
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
var Rn = {},
  Oc;
function Ng() {
  if (Oc) return Rn;
  ((Oc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
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
  return ((Rn.default = p), Rn);
}
var Sc;
function Ug() {
  if (Sc) return kn;
  ((Sc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.default = void 0));
  var e = r(Av()),
    t = r(Ng());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v3", 48, t.default);
  return ((kn.default = i), kn);
}
var Pn = {},
  Cn = {},
  Ec;
function qg() {
  if (Ec) return Cn;
  ((Ec = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Cn.default = t), Cn);
}
var kc;
function zg() {
  if (kc) return Pn;
  ((kc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.default = void 0));
  var e = n(qg()),
    t = n(Pv()),
    r = Na();
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
  return ((Pn.default = a), Pn);
}
var An = {},
  In = {},
  xc;
function $g() {
  if (xc) return In;
  ((xc = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
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
  return ((In.default = n), In);
}
var Rc;
function Vg() {
  if (Rc) return An;
  ((Rc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
  var e = r(Av()),
    t = r($g());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v5", 80, t.default);
  return ((An.default = i), An);
}
var jn = {},
  Pc;
function Gg() {
  if (Pc) return jn;
  ((Pc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((jn.default = e), jn);
}
var Dn = {},
  Cc;
function Hg() {
  if (Cc) return Dn;
  ((Cc = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = t(Ba());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var n = r;
  return ((Dn.default = n), Dn);
}
var Ac;
function Wg() {
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
        var t = l(Bg()),
          r = l(Ug()),
          n = l(zg()),
          i = l(Vg()),
          a = l(Gg()),
          o = l(Hg()),
          u = l(Ba()),
          s = l(Na()),
          c = l(Cv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(ko)),
    ko
  );
}
var Ic;
function Kg() {
  if (Ic) return wn;
  ((Ic = 1),
    Object.defineProperty(wn, "__esModule", { value: !0 }),
    (wn.createAdfRendererIframeProps = void 0));
  const e = Wg(),
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
  return ((wn.createAdfRendererIframeProps = t), wn);
}
var jc;
function Iv() {
  if (jc) return un;
  ((jc = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.view = void 0));
  const e = yg(),
    t = wg(),
    r = Og(),
    n = Sg(),
    i = Eg(),
    a = Ag(),
    o = Ig(),
    u = jg(),
    s = Tg(),
    c = Kg();
  return (
    (un.view = {
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
    un
  );
}
var Dc;
function eu() {
  return (
    Dc ||
      ((Dc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Qe.__exportStar(Iv(), e));
      })(mo)),
    mo
  );
}
var xo = {},
  Tn = {},
  Tc;
function Jg() {
  if (Tc) return Tn;
  ((Tc = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.router = void 0));
  const t = (0, se().getCallBridge)(),
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
  return ((Tn.router = { getUrl: r, navigate: n, open: i, reload: a }), Tn);
}
var Mc;
function Yg() {
  return (
    Mc ||
      ((Mc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Qe.__exportStar(Jg(), e));
      })(xo)),
    xo
  );
}
var Ro = {},
  Mn = {},
  Fc;
function Xg() {
  if (Fc) return Mn;
  ((Fc = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.Modal = void 0));
  const e = se(),
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
  return ((Mn.Modal = i), Mn);
}
var Lc;
function Zg() {
  return (
    Lc ||
      ((Lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Qe.__exportStar(Xg(), e));
      })(Ro)),
    Ro
  );
}
var rt = {},
  ir = {},
  Bc;
function Qg() {
  if (Bc) return ir;
  ((Bc = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.productFetchApi = ir.remoteFetchApi = void 0));
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
  ir.remoteFetchApi = i;
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
  return ((ir.productFetchApi = a), ir);
}
var Nc;
function e_() {
  if (Nc) return rt;
  Nc = 1;
  var e;
  (Object.defineProperty(rt, "__esModule", { value: !0 }),
    (rt.requestRemote = rt.requestBitbucket = rt.requestJira = rt.requestConfluence = void 0));
  const t = se(),
    r = Qg();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (rt.requestConfluence = e.requestConfluence),
    (rt.requestJira = e.requestJira),
    (rt.requestBitbucket = e.requestBitbucket),
    (rt.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    rt
  );
}
var Po = {},
  Fn = {},
  Uc;
function t_() {
  if (Uc) return Fn;
  ((Uc = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.showFlag = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = (i) => {
      var a;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await o, r("closeFlag", { id: i.id })) };
    };
  return ((Fn.showFlag = n), Fn);
}
var qc;
function r_() {
  return (
    qc ||
      ((qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = t_();
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
function n_() {
  return (
    zc ||
      ((zc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Qe.__exportStar(xv(), e));
      })(Co)),
    Co
  );
}
var Ao = {},
  Ln = {},
  $c;
function i_() {
  if ($c) return Ln;
  (($c = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.realtime = void 0));
  const t = (0, se().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    i = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    a = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((Ln.realtime = { publish: r, subscribe: n, publishGlobal: i, subscribeGlobal: a }), Ln);
}
var Io = {},
  Vc;
function a_() {
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
function o_() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = i_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = a_();
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
  Bn = {},
  Do = {},
  Hc;
function s_() {
  return (
    Hc ||
      ((Hc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = se(),
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
function u_() {
  if (Wc) return Bn;
  ((Wc = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.rovo = void 0));
  const e = s_();
  return ((Bn.rovo = { open: e.open }), Bn);
}
var Kc;
function c_() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Qe.__exportStar(u_(), e));
      })(jo)),
    jo
  );
}
var Ct = {},
  Jc;
function l_() {
  if (Jc) return Ct;
  ((Jc = 1),
    Object.defineProperty(Ct, "__esModule", { value: !0 }),
    (Ct.createTranslationFunction = Ct.getTranslations = Ct.resetTranslationsCache = void 0));
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
  Ct.resetTranslationsCache = i;
  const a = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Ct.getTranslations = a;
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
  return ((Ct.createTranslationFunction = o), Ct);
}
var To = {},
  Nn = {},
  Yc;
function d_() {
  if (Yc) return Nn;
  ((Yc = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.permissions = void 0));
  const t = (0, se().getCallBridge)(),
    r = async (s) => t("__permission__egressGet", s),
    n = async (s) => t("__permission__egressSet", s),
    i = async (s) => t("__permission__egressDeleteDomain", s),
    a = async (s) => t("__permission__egressDeleteGroup", s),
    o = async (s) => t("__permission__remoteGet", s),
    u = async (s) => t("__permission__remoteSet", s);
  return (
    (Nn.permissions = {
      egress: { get: r, set: n, deleteDomain: i, deleteGroup: a },
      remote: { get: o, set: u },
    }),
    Nn
  );
}
var Xc;
function f_() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), Qe.__exportStar(d_(), e));
      })(To)),
    To
  );
}
var Mo = {},
  Fo = {},
  Lo = {},
  Un = {},
  qn = {},
  Zc;
function jv() {
  return (
    Zc ||
      ((Zc = 1),
      Object.defineProperty(qn, "__esModule", { value: !0 }),
      (qn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (qn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    qn
  );
}
var Qc;
function Ua() {
  if (Qc) return Un;
  ((Qc = 1),
    Object.defineProperty(Un, "__esModule", { value: !0 }),
    (Un.checkRestrictedEnvironment = void 0));
  const e = _e(),
    t = eu(),
    r = jv(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Un.checkRestrictedEnvironment = n), Un);
}
var el;
function v_() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Fi(),
          r = _e(),
          n = Ua(),
          a = (0, se().getCallBridge)(),
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
                            const A = await fetch(b, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: A.ok,
                              key: O,
                              status: A.status,
                              error: A.ok ? void 0 : `Upload failed with status ${A.status}`,
                            };
                          } catch (A) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: A instanceof Error ? A.message : "Upload failed",
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
var zn = {},
  tl;
function p_() {
  if (tl) return zn;
  ((tl = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.deleteObjects = void 0));
  const e = Fi(),
    t = _e(),
    r = Ua(),
    i = (0, se().getCallBridge)(),
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
  return ((zn.deleteObjects = a), zn);
}
var $n = {},
  rl;
function h_() {
  if (rl) return $n;
  ((rl = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.download = void 0));
  const e = Fi(),
    t = _e(),
    r = Ua(),
    i = (0, se().getCallBridge)(),
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
  return (($n.download = a), $n);
}
var Vn = {},
  nl;
function g_() {
  if (nl) return Vn;
  ((nl = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.getMetadata = void 0));
  const e = Fi(),
    t = _e(),
    r = Ua(),
    i = (0, se().getCallBridge)(),
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
  return ((Vn.getMetadata = a), Vn);
}
var il;
function __() {
  return (
    il ||
      ((il = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = v_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = p_(),
          n = h_(),
          i = g_();
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
function b_() {
  return (
    al ||
      ((al = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = Qe;
        (t.__exportStar(__(), e), t.__exportStar(jv(), e));
      })(Mo)),
    Mo
  );
}
var Bo = {},
  Gn = {},
  ar = {},
  kr = {},
  Ji = {},
  ol;
function m_() {
  if (ol) return Ji;
  ((ol = 1), Object.defineProperty(Ji, "__esModule", { value: !0 }));
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
  return ((Ji.default = t), Ji);
}
var xr = {},
  Hn = {},
  sl;
function y_() {
  if (sl) return Hn;
  ((sl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn._resolveDeltasResponse = void 0));
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
  Hn._resolveDeltasResponse = r;
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
  return Hn;
}
var ul;
function Dv() {
  if (ul) return xr;
  ul = 1;
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
  const t = Kt(),
    r = y_();
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
var Wn = {},
  cl;
function w_() {
  if (cl) return Wn;
  ((cl = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn._makeParamStoreGetter = void 0));
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
  return ((Wn._makeParamStoreGetter = c), Wn);
}
var or = {},
  ll;
function O_() {
  if (ll) return or;
  ll = 1;
  var e =
    (or && or.__awaiter) ||
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
  (Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.StatsigEvaluationsDataAdapter = void 0));
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
  return ((or.StatsigEvaluationsDataAdapter = n), or);
}
var dl;
function S_() {
  if (dl) return kr;
  dl = 1;
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
  const t = Kt(),
    r = m_(),
    n = Dv(),
    i = w_(),
    a = O_();
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
  return ((kr.default = o), kr);
}
var fl;
function E_() {
  return (
    fl ||
      ((fl = 1),
      (function (e) {
        var t =
            (ar && ar.__createBinding) ||
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
            (ar && ar.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Kt(),
          i = S_();
        ((e.StatsigClient = i.default), r(Kt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(ar)),
    ar
  );
}
var Kn = {},
  Jn = {},
  vl;
function k_() {
  if (vl) return Jn;
  ((vl = 1),
    Object.defineProperty(Jn, "__esModule", { value: !0 }),
    (Jn.initFeatureFlags = void 0));
  const e = se(),
    t = _e(),
    r = La(),
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
    (Jn.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      i,
      `Feature flags initialisation calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Jn
  );
}
var pl;
function x_() {
  if (pl) return Kn;
  ((pl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.ForgeDataAdapter = void 0));
  const e = k_();
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
  return ((Kn.ForgeDataAdapter = t), Kn);
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
var Yn = {},
  gl;
function R_() {
  if (gl) return Yn;
  ((gl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.trackFeatureFlagEvent = void 0));
  const e = se(),
    t = _e(),
    r = Tv(),
    n = La(),
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
    (Yn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    Yn
  );
}
var _l;
function P_() {
  if (_l) return Gn;
  ((_l = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn.ForgeFeatureFlags = void 0));
  const e = E_(),
    t = x_(),
    r = Tv(),
    n = R_();
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
  return ((Gn.ForgeFeatureFlags = i), Gn);
}
var bl;
function C_() {
  return (
    bl ||
      ((bl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = P_();
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
function A_() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = Qe;
        var r = hg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Fi(), e),
          t.__exportStar(mg(), e),
          t.__exportStar(eu(), e),
          t.__exportStar(Yg(), e),
          t.__exportStar(Zg(), e),
          t.__exportStar(e_(), e),
          t.__exportStar(r_(), e),
          t.__exportStar(n_(), e),
          t.__exportStar(o_(), e),
          t.__exportStar(c_(), e),
          (e.i18n = t.__importStar(l_())),
          t.__exportStar(f_(), e),
          t.__exportStar(b_(), e),
          t.__exportStar(C_(), e));
      })(po)),
    po
  );
}
var Tt = A_();
function fe(e, t) {
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
function I_(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ie(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Mv(e) {
  var t = I_(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
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
function j_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ne(e, t) {
  if (t && (Ie(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return j_(e);
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
function Ei(e, t) {
  return (
    (Ei = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Ei(e, t)
  );
}
function Ue(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ei(e, t));
}
function x(e, t, r) {
  return (
    (t = Mv(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Oe() {}
function D_(e) {
  if (Array.isArray(e)) return e;
}
function T_(e, t) {
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
function M_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return D_(e) || T_(e, t) || Fv(e, t) || M_();
}
var Lv = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  F_ = function (t) {
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
  ba = function (t, r) {
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
  L_ = function (t, r, n) {
    return t ? { width: r } : {};
  },
  wl = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  B_ = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var u = wl(o, n, i),
      s = wl(a.index, n, i),
      c = r.slice(),
      l = c.splice(u, 1),
      d = Y(l, 1),
      p = d[0];
    return (c.splice(s, 0, p), c);
  };
function re() {
  return (
    (re = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    re.apply(null, arguments)
  );
}
function N_(e, t) {
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
    i = N_(e, t);
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
var U_ = (function () {
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
          Ie(r) === "object" && (this.payload = Uo(Uo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function q_(e) {
  if (Array.isArray(e)) return ws(e);
}
function z_(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function $_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return q_(e) || z_(e) || Fv(e) || $_();
}
function V_(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function ma() {
  return (
    (ma =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = V_(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    ma.apply(null, arguments)
  );
}
function G_(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, Bv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function H_(e, t, r, n) {
  var i = ma(X(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var W_ = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = G_(this, t, [r])),
        x(n, "_isUIAnalyticsEvent", !0),
        x(n, "clone", function () {
          if (n.hasFired) return null;
          var i = Te(n.context),
            a = Te(n.handlers),
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
      Ue(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : H_(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(U_),
  K_ = y.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  J_ = function () {
    return y.useContext(K_);
  },
  ya = function (t) {
    var r = y.useRef(t);
    return ((r.current = t), r);
  };
function Y_(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function X_(e, t) {
  var r = y.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = y.useRef(!0),
    i = y.useRef(r),
    a = n.current || !!(t && i.current.inputs && Y_(t, i.current.inputs)),
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
function Z_(e, t) {
  return X_(function () {
    return e;
  }, t);
}
function Nv() {
  var e = J_(),
    t = Z_(
      function (r) {
        return new W_({
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
function Q_(e) {
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
function ki(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = Nv(),
    c = s.createAnalyticsEvent,
    l = ya(u),
    d = ya(t),
    p = y.useCallback(
      function (v) {
        var g = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          f = Q_({ componentName: n, packageName: a, packageVersion: o }, l.current);
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
function eb(e) {
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
    c = ya(o),
    l = ya(t),
    d = y.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          v = eb({ componentName: n, packageName: i, packageVersion: a }, c.current);
        p.context.push(v);
        var g = p.clone();
        (g && g.fire("atlaskit"), l.current(p));
      },
      [r, n, i, a, s, c, l],
    );
  return d;
}
var fr = "ASC",
  wa = "DESC",
  tb = "small",
  Oa = "large",
  Uv = 0.22;
const rb = 5;
function R(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, rb) : a;
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
var nb = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  ib = y.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      u = ie(e, nb);
    return y.createElement(
      "table",
      re(
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
  ab = function (t) {
    var r = t.children;
    return y.createElement(
      "caption",
      { className: R(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  ob = function (t) {
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
  sb = function (t) {
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
  ub = function (t) {
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
  cb = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
function lb(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, zv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
  db = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === fr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = Pl(s.cells, t, n),
        d = Pl(c.cells, t, n);
      if (l === void 0 || d === void 0) return a;
      if (Ie(l) !== Ie(d)) {
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
function fb(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
      return ((i = lb(this, n, [].concat(o))), x(i, "state", { pageRows: [] }), i);
    }
    return (
      Ue(n, r),
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
                s = ie(a, cb);
              return E.createElement(
                e,
                re({ pageRows: this.state.pageRows, head: o }, s, { ref: u }),
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
              ba(c, s);
              var g, f;
              return (
                v ? ((g = u), (f = u)) : ((g = db(s, u, c, l) || []), (f = Lv(g, d, p))),
                Rl(Rl({}, o), {}, { pageRows: f })
              );
            },
          },
        ],
      )
    );
  })(E.Component);
  return E.forwardRef(function (r, n) {
    return E.createElement(t, re({}, r, { forwardedRef: n }));
  });
}
var vb = "--local-dynamic-table-width",
  $v = function (t) {
    var r = t.width;
    return typeof r < "u" ? x({}, vb, "".concat(r, "%")) : void 0;
  },
  pb = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  hb = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ie(t, pb);
    return y.createElement(
      "td",
      re(
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
  gb = ["isHighlighted", "children", "style", "testId", "className"],
  _b = y.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      u = ie(e, gb);
    return y.createElement(
      "tr",
      re(
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
  bb = ["cells"],
  mb = ["content", "testId"],
  yb = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ie(r, bb);
    return E.createElement(
      _b,
      re(
        {},
        s,
        { isHighlighted: o },
        o ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: r.testId || (i && "".concat(i, "--row-").concat(s.key)) },
      ),
      u.map(function (c, l) {
        var d = c.content,
          p = c.testId,
          v = ie(c, mb),
          g = (n || { cells: [] }).cells[l] || {},
          f = g.shouldTruncate,
          h = g.width;
        return E.createElement(
          hb,
          re({ "data-testid": p || (i && "".concat(i, "--cell-").concat(l)) }, v, {
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
function wb(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, Vv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Ob = (function (e) {
    function t() {
      return (fe(this, t), wb(this, t, arguments));
    }
    return (
      Ue(t, e),
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
                return E.createElement(yb, {
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
  Sb = fb(
    E.forwardRef(function (e, t) {
      return E.createElement(Ob, re({}, e, { forwardedRef: t }));
    }),
  );
function Eb(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, Gv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var kb = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = Eb(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    Ue(t, e),
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
var xb = "#FFFFFF",
  Os = "#42526E",
  Rb = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function Pb(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Os, ")")
    : "var(--ds-icon-inverse, ".concat(xb, ")");
}
var Yi = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  Cb = typeof window > "u" ? y.useEffect : y.useLayoutEffect,
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
        p = typeof l == "number" ? l : Rb[l],
        v = "".concat(o, "ms"),
        g = Pb(i),
        f = y.useContext(tu);
      return (
        Cb(
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
            className: R([Yi.wrapperStyles, Yi.rotateStyles]),
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
              className: R([Yi.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: g },
              className: R([Yi.circleStyles]),
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
  Ab = function (t) {
    var r = t.children,
      n = t.testId;
    return y.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: R(["_kqswh2mm"]) },
      r,
    );
  },
  Ib = function (t) {
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
  jb = function (t) {
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
function Db(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, Wv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
    return (fe(this, t), Db(this, t, arguments));
  }
  return (
    Ue(t, e),
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
            Ab,
            { testId: s },
            a ? E.createElement(Ib, { contentsOpacity: u, testId: s }, i) : i,
            a &&
              E.createElement(
                jb,
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
  spinnerSize: Oa,
  contentsOpacity: Uv,
  loadingLabel: "Loading table",
});
var Tb = ["children", "testId"],
  Mb = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ie(e, Tb);
    return y.createElement(
      "div",
      re({}, i, { "data-testid": n, ref: t, className: R(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  Fb = function (t) {
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
  Lb = y.forwardRef(function (e, t) {
    var r = e.children;
    return y.createElement("div", { ref: t, className: R(["_kqswh2mm _152tidpf"]) }, r);
  });
function Bb(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, Jv() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
      (r = Bb(this, t, [].concat(i))),
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
          Ie(o.style) === "object" &&
          ((o.style.pointerEvents = s ? "none" : ""), (o.style.opacity = s ? c.toString() : ""));
      }),
      r
    );
  }
  return (
    Ue(t, e),
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
                j = (p - k) / 2;
              this.translateSpinner(u, j, !1);
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
            Mb,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                Fb,
                { testId: u },
                E.createElement(
                  Lb,
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
  spinnerSize: Oa,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Uv), ")"),
  loadingLabel: "Loading table",
});
function Nb(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = y.useState(t),
    i = Y(n, 2),
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
var Xn = {},
  Ub = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  qb = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  zb = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  jl = y.memo(function (t) {
    var r = t,
      n = r.color,
      i = n === void 0 ? "currentColor" : n,
      a = r.testId,
      o = r.label,
      u = r.dangerouslySetGlyph,
      s = r.shouldScale,
      c = r.spacing,
      l = c === void 0 ? "none" : c,
      d = r.name,
      p = u ? { __html: u } : void 0,
      v = "medium";
    if ("size" in t && t.size !== void 0) {
      if (typeof t.size == "string") v = t.size === "small" || t.size === "medium" ? t.size : v;
      else if (d) {
        var g = t.size(d);
        v = g === "small" || g === "medium" ? g : v;
      }
    }
    var f = 16,
      h = zb[v][l],
      _ = f + 2 * h;
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
          s && "_1bsb1kw7 _4t3i1kw7",
          v === "small" && "_vwz4utpp",
        ]),
      },
      y.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - h, " ")
          .concat(0 - h, " ")
          .concat(_, " ")
          .concat(_),
        role: "presentation",
        dangerouslySetInnerHTML: p,
        className: R([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          s ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? qb[l] : Ub[l],
        ]),
      }),
    );
  });
const $b = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: jl, default: jl }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  qa = Wf($b);
var Dl;
function Vb() {
  if (Dl) return Xn;
  ((Dl = 1), Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.default = void 0));
  var e = r(br()),
    t = r(qa);
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
  return ((n.displayName = "ChevronLeftIcon"), (Xn.default = n), Xn);
}
var Gb = Vb();
const Hb = Yt(Gb);
var Zn = {},
  Tl;
function Wb() {
  if (Tl) return Zn;
  ((Tl = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.default = void 0));
  var e = r(br()),
    t = r(qa);
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
  return ((n.displayName = "ChevronRightIcon"), (Zn.default = n), Zn);
}
var Kb = Wb();
const Jb = Yt(Kb);
var ru = y.createContext("elevation.surface"),
  Yb = function () {
    return y.useContext(ru);
  };
ru.displayName = "SurfaceProvider";
var Xb = [
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
  Zb = ["className"],
  Qb = {
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
  Xv = {
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
  em = {
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
  tm = {
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
  rm = {
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
  nm = {
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
  za = y.forwardRef(function (e, t) {
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
      S = ie(e, Xb);
    S.className;
    var k = ie(S, Zb),
      j = y.createElement(
        n,
        re(
          {
            style: m,
            ref: t,
            className: R([
              "_19itglyw _vchhusvi _r06hglyw",
              a && Qb[a],
              a && im(a) && Xv[a],
              l && em[l],
              p && tm[p],
              h && rm[h],
              b && nm[b],
              w,
            ]),
          },
          k,
          { "data-testid": O },
        ),
        i,
      );
    return a ? y.createElement(ru.Provider, { value: a }, j) : j;
  });
function im(e) {
  return e in Xv;
}
const qo = () =>
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
  Zv = (...e) => R(e);
function am() {
  return {
    css() {
      throw qo();
    },
    cssMap() {
      throw qo();
    },
    cx: Zv,
    XCSSProp() {
      throw qo();
    },
  };
}
var om = am(),
  sm = om.cx,
  um = [
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
  Ml = {
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
  Fl = {
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
  cm = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  lm = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  dm = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  fm = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  vm = { root: "_1e0c1txw _vchhusvi" },
  Sa = y.memo(
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
        f = ie(e, um);
      return y.createElement(
        n,
        re({}, f, {
          role: i,
          className: R([
            vm.root,
            u && Fl[u],
            s && Fl[s],
            u && Ml[u],
            c && Ml[c],
            a && fm[a],
            p && lm[p],
            o && cm[o],
            v && dm[v],
            g,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Sa.displayName = "Flex";
var pm = [
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
  Ss = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  hm = function (t) {
    var r = t.children;
    return y.createElement("span", { className: R([Ss.separator]) }, r);
  },
  sa = y.memo(
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
        _ = ie(e, pm),
        b = typeof p == "string" ? y.createElement(hm, null, p) : p,
        m = b
          ? y.Children.toArray(h)
              .filter(Boolean)
              .map(function (O, w) {
                return y.createElement(y.Fragment, { key: w }, p && w > 0 ? b : null, O);
              })
          : h;
      return y.createElement(
        Sa,
        re({}, _, {
          as: r,
          role: f,
          alignItems: a,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: sm(c === "hug" && Ss.hug, c === "fill" && Ss.fill, v),
          testId: g,
          ref: t,
        }),
        m,
      );
    }),
  );
sa.displayName = "Inline";
var gm = "Invariant failed";
function _m(e, t) {
  if (!e) throw new Error(gm);
}
var Qv = y.createContext(!1),
  bm = function () {
    return y.useContext(Qv);
  },
  mm = Qv.Provider,
  ym = ["span", "p", "strong", "em"],
  wm = function (t, r) {
    var n = Yb();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Ll.hasOwnProperty(n) ? Ll[n] : "color.text";
    }
  },
  Rr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Om = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Sm = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  Em = {
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
  Ll = {
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
  km = y.forwardRef(function (e, t) {
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
    _m(ym.includes(n));
    var v = bm(),
      g = wm(i, v);
    !s && !v && (s = "medium");
    var f = y.createElement(
      n,
      {
        id: u,
        className: R([
          Rr.root,
          s && Om[s],
          g && Em[g],
          l && Rr.truncation,
          l === 1 && Rr.breakAll,
          a && Rr["textAlign.".concat(a)],
          c && Sm[c],
          n === "em" && Rr["as.em"],
          n === "strong" && Rr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return v ? f : y.createElement(mm, { value: !0 }, f);
  });
function xm() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var Rm = ["as", "children", "isInset", "testId", "style", "xcss"],
  Pm = ["className"],
  Cm = y.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ie(e, Rm);
    c.className;
    var l = ie(c, Pm);
    return y.createElement(
      n,
      re({}, l, {
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
  Am = [
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
  Im = ["className"],
  Bl = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  jm = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.isDisabled,
      i = e.type,
      a = i === void 0 ? "button" : i,
      o = e.onClick,
      u = o === void 0 ? Oe : o,
      s = e.interactionName,
      c = e.componentName,
      l = e.analyticsContext,
      d = e.style,
      p = e.testId,
      v = e.xcss,
      g = e.tabIndex,
      f = ie(e, Am),
      h = y.useContext(tu),
      _ = y.useCallback(
        function (O, w) {
          (h && h.tracePress(s, O.timeStamp), u(O, w));
        },
        [u, h, s],
      ),
      b = ki({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var m = ie(f, Im);
    return y.createElement(
      Cm,
      re({ as: "button", tabIndex: g ?? (xm() && !n ? 0 : void 0), style: d }, m, {
        type: a,
        onClick: b,
        disabled: n,
        xcss: Zv(Bl.root, n && Bl.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  });
function Nl(e, t, r, n, i, a, o) {
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
        Nl(a, n, i, o, u, "next", s);
      }
      function u(s) {
        Nl(a, n, i, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var zo = { exports: {} },
  $o = { exports: {} },
  Ul;
function ep() {
  return (
    Ul ||
      ((Ul = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })($o)),
    $o.exports
  );
}
var Vo = { exports: {} },
  Go = { exports: {} },
  ql;
function tp() {
  return (
    ql ||
      ((ql = 1),
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
      })(Go)),
    Go.exports
  );
}
var zl;
function rp() {
  return (
    zl ||
      ((zl = 1),
      (function (e) {
        var t = tp();
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
                (function (S, k, j) {
                  var A,
                    P,
                    D,
                    z = 0,
                    q = j || [],
                    G = !1,
                    Z = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: H,
                      f: H.bind(n, 4),
                      d: function (K, B) {
                        return ((A = K), (P = 0), (D = n), (Z.n = B), c);
                      },
                    };
                  function H(U, K) {
                    for (P = U, D = K, i = 0; !G && z && !B && i < q.length; i++) {
                      var B,
                        $ = q[i],
                        T = Z.p,
                        ue = $[2];
                      U > 3
                        ? (B = ue === K) &&
                          ((D = $[(P = $[4]) ? 5 : ((P = 3), 3)]), ($[4] = $[5] = n))
                        : $[0] <= T &&
                          ((B = U < 2 && T < $[1])
                            ? ((P = 0), (Z.v = K), (Z.n = $[1]))
                            : T < ue &&
                              (B = U < 3 || $[0] > K || K > ue) &&
                              (($[4] = U), ($[5] = K), (Z.n = ue), (P = 0)));
                    }
                    if (B || U > 1) return c;
                    throw ((G = !0), K);
                  }
                  return function (U, K, B) {
                    if (z > 1) throw TypeError("Generator is already running");
                    for (G && K === 1 && H(K, B), P = K, D = B; (i = P < 2 ? n : D) || !G; ) {
                      A || (P ? (P < 3 ? (P > 1 && (Z.n = -1), H(P, D)) : (Z.n = D)) : (Z.v = D));
                      try {
                        if (((z = 2), A)) {
                          if ((P || (U = "next"), (i = A[U]))) {
                            if (!(i = i.call(A, D)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((D = i.value), P < 2 && (P = 0));
                          } else
                            (P === 1 && (i = A.return) && i.call(A),
                              P < 2 &&
                                ((D = TypeError(
                                  "The iterator does not provide a '" + U + "' method",
                                )),
                                (P = 1)));
                          A = n;
                        } else if ((i = (G = Z.n < 0) ? D : S.call(k, Z)) !== c) break;
                      } catch ($) {
                        ((A = n), (P = 1), (D = $));
                      } finally {
                        z = 1;
                      }
                    }
                    return { value: i, done: G };
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
      })(Vo)),
    Vo.exports
  );
}
var Ho = { exports: {} },
  Wo = { exports: {} },
  Ko = { exports: {} },
  $l;
function np() {
  return (
    $l ||
      (($l = 1),
      (function (e) {
        var t = ep(),
          r = tp();
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
      })(Ko)),
    Ko.exports
  );
}
var Vl;
function ip() {
  return (
    Vl ||
      ((Vl = 1),
      (function (e) {
        var t = rp(),
          r = np();
        function n(i, a, o, u, s) {
          return new r(t().w(i, a, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Wo)),
    Wo.exports
  );
}
var Gl;
function Dm() {
  return (
    Gl ||
      ((Gl = 1),
      (function (e) {
        var t = ip();
        function r(n, i, a, o, u) {
          var s = t(n, i, a, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Ho)),
    Ho.exports
  );
}
var Jo = { exports: {} },
  Hl;
function Tm() {
  return (
    Hl ||
      ((Hl = 1),
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
      })(Jo)),
    Jo.exports
  );
}
var Yo = { exports: {} },
  Xo = { exports: {} },
  Wl;
function Mm() {
  return (
    Wl ||
      ((Wl = 1),
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
      })(Xo)),
    Xo.exports
  );
}
var Kl;
function Fm() {
  return (
    Kl ||
      ((Kl = 1),
      (function (e) {
        var t = Mm().default;
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
      })(Yo)),
    Yo.exports
  );
}
var Jl;
function Lm() {
  return (
    Jl ||
      ((Jl = 1),
      (function (e) {
        var t = ep(),
          r = rp(),
          n = Dm(),
          i = ip(),
          a = np(),
          o = Tm(),
          u = Fm();
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
      })(zo)),
    zo.exports
  );
}
var Zo, Yl;
function Bm() {
  if (Yl) return Zo;
  Yl = 1;
  var e = Lm()();
  Zo = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return Zo;
}
var Nm = Bm();
const N = Yt(Nm);
var Qo = {},
  Qn = {},
  Xl;
function ap() {
  if (Xl) return Qn;
  ((Xl = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.bind = void 0));
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
  return ((Qn.bind = e), Qn);
}
var sr = {},
  Zl;
function Um() {
  if (Zl) return sr;
  Zl = 1;
  var e =
    (sr && sr.__assign) ||
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
  (Object.defineProperty(sr, "__esModule", { value: !0 }), (sr.bindAll = void 0));
  var t = ap();
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
  return ((sr.bindAll = i), sr);
}
var Ql;
function qm() {
  return (
    Ql ||
      ((Ql = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = ap();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = Um();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(Qo)),
    Qo
  );
}
var $a = qm(),
  ur = {},
  Pr = {},
  Xi = {},
  ei = {},
  ed;
function zm() {
  if (ed) return ei;
  ((ed = 1),
    Object.defineProperty(ei, "__esModule", { value: !0 }),
    (ei.V1InitializeContainer = void 0));
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
  return ((ei.V1InitializeContainer = t), ei);
}
var ti = {},
  td;
function $m() {
  if (td) return ti;
  ((td = 1),
    Object.defineProperty(ti, "__esModule", { value: !0 }),
    (ti.V2InitializeContainer = void 0));
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
  return ((ti.V2InitializeContainer = t), ti);
}
var rd;
function Vm() {
  if (rd) return Xi;
  ((rd = 1), Object.defineProperty(Xi, "__esModule", { value: !0 }));
  const e = Ot(),
    t = zm(),
    r = $m();
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
  return ((Xi.default = n), Xi);
}
var Cr = {},
  ri = {},
  nd;
function Gm() {
  if (nd) return ri;
  ((nd = 1),
    Object.defineProperty(ri, "__esModule", { value: !0 }),
    (ri._resolveDeltasResponse = void 0));
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
  ri._resolveDeltasResponse = r;
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
  return ri;
}
var id;
function op() {
  if (id) return Cr;
  id = 1;
  var e =
    (Cr && Cr.__awaiter) ||
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
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  const t = Ot(),
    r = Gm();
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
  return ((Cr.default = n), Cr);
}
var ni = {},
  ad;
function Hm() {
  if (ad) return ni;
  ((ad = 1),
    Object.defineProperty(ni, "__esModule", { value: !0 }),
    (ni._makeParamStoreGetter = void 0));
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
  return ((ni._makeParamStoreGetter = c), ni);
}
var cr = {},
  od;
function Wm() {
  if (od) return cr;
  od = 1;
  var e =
    (cr && cr.__awaiter) ||
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
  (Object.defineProperty(cr, "__esModule", { value: !0 }),
    (cr.StatsigEvaluationsDataAdapter = void 0));
  const t = Ot(),
    r = op();
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
  return ((cr.StatsigEvaluationsDataAdapter = n), cr);
}
var sd;
function Km() {
  if (sd) return Pr;
  sd = 1;
  var e =
    (Pr && Pr.__awaiter) ||
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
  Object.defineProperty(Pr, "__esModule", { value: !0 });
  const t = Ot(),
    r = Vm(),
    n = op(),
    i = Hm(),
    a = Wm();
  let o = class Es extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof Es
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Es(s ?? "", {}));
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
  return ((Pr.default = o), Pr);
}
var ud;
function Jm() {
  return (
    ud ||
      ((ud = 1),
      (function (e) {
        var t =
            (ur && ur.__createBinding) ||
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
            (ur && ur.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Ot(),
          i = Km();
        ((e.StatsigClient = i.default), r(Ot(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(ur)),
    ur
  );
}
var nt = Jm(),
  es = { exports: {} },
  cd;
function Ym() {
  return (
    cd ||
      ((cd = 1),
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
      })(es)),
    es.exports
  );
}
var Xm = Ym();
const Zm = Yt(Xm);
function ld(e, t) {
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
      ? ld(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ld(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Zi = "@all-features",
  Qm = (function () {
    function e() {
      (fe(this, e), x(this, "eventToValue", new Map()), (this.emitter = new Zm()));
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
            this.emitter.on(Zi, r),
            function () {
              n.emitter.off(Zi, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(Zi),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== Zi;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  ey = "fedramp-moderate";
function ty() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === ey;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var nu = (function (e) {
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
  vi = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  xi = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  ry = [
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
function ks(e) {
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
var Qi = function (t) {
    return ks({ perimeter: ty() ? xi.FEDRAMP_MODERATE : xi.COMMERCIAL }, t);
  },
  ii = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (p, v) {
      var g = Y(p, 1),
        f = g[0],
        h = Y(v, 1),
        _ = h[0];
      return f.localeCompare(_);
    };
    (n.sort(a), i.sort(a));
    for (var o = 0; o < n.length; o++) {
      var u = Y(n[o], 2),
        s = u[1],
        c = Y(i[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  fd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  ny = function (t) {
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
    var p = ie(t, ry);
    return ks(
      ks({}, p),
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
  iy = Object.entries(nu).map(function (e) {
    var t = Y(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  sp = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = iy.find(function (o) {
            var u = Y(o, 1),
              s = u[0];
            return a.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : nu.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  xs = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  vd = (function () {
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
            var u = Array.isArray(n) ? "array" : Ie(n),
              s = Array.isArray(o) ? "array" : Ie(o);
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
                sp(r.details),
                xs(
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
  pd = (function () {
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
              : n == null || (Ie(o) === Ie(n) && Array.isArray(n) === Array.isArray(o))
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
                sp(r.details),
                function (l, d) {
                  return r.get(d);
                },
                xs(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                xs(
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
  Lr = "0.0.0-development";
function ay(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function up() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (up = function () {
    return !!e;
  })();
}
function oy(e, t, r) {
  if (up()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && Ei(i, r.prototype), i);
}
function Rs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Rs = function (n) {
      if (n === null || !ay(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return oy(n, arguments, X(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Ei(i, n)
      );
    }),
    Rs(e)
  );
}
function sy(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, cp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function cp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cp = function () {
    return !!e;
  })();
}
var hd = (function (e) {
  function t(r) {
    return (fe(this, t), sy(this, t, [r]));
  }
  return (Ue(t, e), ve(t));
})(Rs(Error));
function gd(e, t) {
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
function uy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var cy = 5e3,
  ly = "https://api.atlassian.com/flags",
  dy = "https://api.stg.atlassian.com/flags",
  fy = "https://api.dev.atlassian.com/flags",
  vy = "https://api.stg.atlassian-us-gov-mod.com/flags",
  py = "https://api.atlassian-us-gov-mod.com/flags",
  hy = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  gy = "oasis-stg.com/flags",
  _y = "atlassian-isolated.net/flags",
  by = "/gateway/api/flags",
  ts = (function () {
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
                        new hd(
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
                      throw new hd("Unexpected 204 response");
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
          if (n) return by;
          if (i === xi.FEDRAMP_MODERATE)
            switch (r) {
              case vi.Production:
                return py;
              case vi.Staging:
                return vy;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === xi.COMMERCIAL)
            switch (r) {
              case vi.Development:
                return fy;
              case vi.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : dy;
              default:
                var u = this.getApiUrl(a);
                return u !== null ? u : ly;
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
                          (c = o.fetchTimeoutMs || cy),
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
                            uy(
                              {
                                method: a,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Lr,
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
          if (n === void 0) return r ? hy.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat(gy);
          var u = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(i, "//api.").concat(u[1], ".").concat(_y) : null;
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
function _d(e, t) {
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
function my(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, lp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function lp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (lp = function () {
    return !!e;
  })();
}
function yy(e, t, r, n) {
  var i = ma(X(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var wy = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = my(this, t, ["NoFetchDataAdapter", "nofetch"])),
      x(r, "bootstrapResult", null),
      r
    );
  }
  return (
    Ue(t, e),
    ve(t, [
      {
        key: "setBootstrapData",
        value: function (n) {
          this.bootstrapResult = n
            ? {
                source: "Bootstrap",
                data: JSON.stringify(n),
                receivedAt: Date.now(),
                stableID: nt.StableID.get(this._getSdkKey()),
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
                            ai(
                              ai({}, this.bootstrapResult),
                              {},
                              { fullUserHash: nt._getFullUserHash(o) },
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
            ai(ai({}, this.bootstrapResult), {}, { fullUserHash: nt._getFullUserHash(n) })
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
          var i = nt._getStorageKey(this._getSdkKey(), n);
          return "".concat(nt.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(i);
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
          yy(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ai({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(nt.DataAdapterCore);
function bd(e, t) {
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
      ? bd(Object(r), !0).forEach(function (n) {
          x(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Oy(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Sy(e)) || t) {
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
function Sy(e, t) {
  if (e) {
    if (typeof e == "string") return md(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? md(e, t)
          : void 0
    );
  }
}
function md(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var rs = "LocalOverride:Recognized",
  Ey = "STATSIG_OVERRIDES",
  yd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Ar = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ve = function (t, r) {
    return r + ":" + t;
  },
  ky = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Ar()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Ar();
          } catch {
            return Ar();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Ar(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
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
                p = Y(l[c], 2),
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
                b = Y(h[f], 2),
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
                j = Y(S[w], 2),
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
            this.parseStoredOverrides(yd),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(yd);
          } catch {}
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              u = Oy(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = $e._DJB2(c);
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
          var n = Re(Re({}, Ar()), r);
          this._djb2Map.clear();
          for (var i = 0, a = Object.entries(n); i < a.length; i++)
            for (
              var o = Y(a[i], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = Y(l[c], 2),
                p = d[0],
                v = d[1];
              this._djb2Map.set(Ve($e._DJB2(p), u), v);
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
            this._djb2Map.set(Ve($e._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(Ve($e._DJB2(r), "gates")),
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
                : this._djb2Map.get(Ve(r.name, "gates"));
          return a == null
            ? null
            : Re(Re({}, r), {}, { value: a, details: Re(Re({}, r.details), {}, { reason: rs }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(Ve($e._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ve($e._DJB2(r), "configs")),
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
            this._djb2Map.set(Ve($e._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(Ve($e._DJB2(r), "configs")),
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
            this._djb2Map.set(Ve($e._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(Ve($e._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Ar();
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
                : this._djb2Map.get(Ve(r.name, "layers"));
          return a == null
            ? null
            : Re(
                Re({}, r),
                {},
                {
                  __value: a,
                  get: $e._makeTypedGet(r.name, a),
                  details: Re(Re({}, r.details), {}, { reason: rs }),
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
                : this._djb2Map.get(Ve(r.name, "configs"));
          return a == null
            ? null
            : Re(
                Re({}, r),
                {},
                {
                  value: a,
                  get: $e._makeTypedGet(r.name, a),
                  details: Re(Re({}, r.details), {}, { reason: rs }),
                },
              );
        },
      },
    ]);
  })(),
  xy = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function wd(e, t) {
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
var Od = "client-default-key",
  Ry = "https://xp.atlassian.com/v1/rgstr",
  Py = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? Ey : n,
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
        x(this, "subscriptions", new Qm()),
        x(this, "dataAdapter", new wy()),
        x(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new ky(i)));
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
                        if (((s = Qi(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ii(s, this.initOptions) ||
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
                        if (((c = Qi(i)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ii(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Lr),
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
                    clientVersion: Lr,
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
                u.initOptions.environment !== vi.Production &&
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
                          (c = Qi(i)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ii(c, this.initOptions) ||
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
                          (u = Qi(i)),
                          (s = function () {
                            return ts.fetchExperimentValues(u, a, o).then(function (p) {
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
            return vd.fromExperiment(
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
              new vd(r, {}, "", { time: Date.now(), reason: nu.Error })
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
          return ii(this.currentIdentifiers, r) && ii(this.currentAttributes, n);
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
                          (l = ts.fetchClientSdk(i).then(function (_) {
                            return (u.sdkKey = _.clientSdkKey);
                          })),
                          (d = ts.fetchExperimentValues(i, a, o)),
                          (h.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = h.sent),
                          (v = Y(p, 2)),
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
                          (g = Y(v, 2)),
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
                          (c = ny(i)),
                          c.sdkKey || (c.sdkKey = Od),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Gt(
                              Gt({}, c.networkConfig),
                              {},
                              { logEventUrl: Ry },
                            )),
                          c.perimeter === xi.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (p = ie(c, xy)),
                          (this.user = fd(a, o)),
                          (v = Gt(
                            Gt({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: nt.LogEventCompressionMode.Forced,
                            },
                          )),
                          a.stableId
                            ? nt.StableID.setOverride(a.stableId, l)
                            : (v.disableStableID = !0),
                          (h.prev = 12),
                          (this.statsigClient = new nt.StatsigClient(l, this.user, v)),
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
                          (this.statsigClient = new nt.StatsigClient(Od, this.user, v)),
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
                        ((c = _.sent), (l = fd(a, c.customAttributesFromFetch)), (_.next = 13));
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
          return Lr;
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
            return pd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              pd.fromLayer(nt._makeLayer(r, { reason: "Error" }, null))
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
  I,
  V = (function () {
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
I = V;
x(V, "client", new Py());
x(V, "hasCheckGateErrorOccurred", !1);
x(V, "hasGetExperimentValueErrorOccurred", !1);
x(V, "checkGate", function (e, t) {
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
    I.hasCheckGateErrorOccurred ||
      (console.warn({
        msg: "An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.",
        gateName: e,
        error: n,
      }),
      (I.hasCheckGateErrorOccurred = !0));
  }
  return I.client.checkGate(e, t);
});
x(V, "getExperimentValue", function (e, t, r, n) {
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
      I.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: a,
        }),
        (I.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return I.client.getExperimentValue(e, t, r, n);
});
x(V, "initializeCalled", I.client.initializeCalled.bind(I.client));
x(V, "initializeCompleted", I.client.initializeCompleted.bind(I.client));
x(V, "waitUntilInitializeCompleted", I.client.waitUntilInitializeCompleted.bind(I.client));
x(V, "initialize", I.client.initialize.bind(I.client));
x(V, "initializeWithProvider", I.client.initializeWithProvider.bind(I.client));
x(V, "initializeFromValues", I.client.initializeFromValues.bind(I.client));
x(V, "manuallyLogGateExposure", I.client.manuallyLogGateExposure.bind(I.client));
x(V, "getExperiment", I.client.getExperiment.bind(I.client));
x(V, "manuallyLogExperimentExposure", I.client.manuallyLogExperimentExposure.bind(I.client));
x(V, "manuallyLogLayerExposure", I.client.manuallyLogLayerExposure.bind(I.client));
x(V, "shutdownStatsig", I.client.shutdownStatsig.bind(I.client));
x(V, "overrideGate", I.client.overrideGate.bind(I.client));
x(V, "clearGateOverride", I.client.clearGateOverride.bind(I.client));
x(V, "overrideConfig", I.client.overrideConfig.bind(I.client));
x(V, "clearConfigOverride", I.client.clearConfigOverride.bind(I.client));
x(V, "setOverrides", I.client.setOverrides.bind(I.client));
x(V, "getOverrides", I.client.getOverrides.bind(I.client));
x(V, "clearAllOverrides", I.client.clearAllOverrides.bind(I.client));
x(V, "isCurrentUser", I.client.isCurrentUser.bind(I.client));
x(V, "onGateUpdated", I.client.onGateUpdated.bind(I.client));
x(V, "onExperimentValueUpdated", I.client.onExperimentValueUpdated.bind(I.client));
x(V, "onAnyUpdated", I.client.onAnyUpdated.bind(I.client));
x(V, "updateUser", I.client.updateUser.bind(I.client));
x(V, "updateUserWithProvider", I.client.updateUserWithProvider.bind(I.client));
x(V, "updateUserWithValues", I.client.updateUserWithValues.bind(I.client));
x(V, "getPackageVersion", I.client.getPackageVersion.bind(I.client));
x(V, "getLayer", I.client.getLayer.bind(I.client));
x(V, "getLayerValue", I.client.getLayerValue.bind(I.client));
var Ps = V;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = V;
  else {
    var ea, ns;
    Ps = window.__FEATUREGATES_JS__;
    var Sd =
      ((ea = Ps) === null || ea === void 0 || (ns = ea.getPackageVersion) === null || ns === void 0
        ? void 0
        : ns.call(ea)) || "4.10.0 or earlier";
    if (Sd !== Lr) {
      var Cy = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Sd, " when module version ")
        .concat(Lr, " was loading.");
      console.warn(Cy);
    }
  }
var Ir,
  jr,
  Ay =
    (globalThis == null ||
    (Ir = globalThis.process) === null ||
    Ir === void 0 ||
    (Ir = Ir.env) === null ||
    Ir === void 0
      ? void 0
      : Ir.JEST_WORKER_ID) !== void 0,
  Iy =
    !Ay &&
    (globalThis == null ||
    (jr = globalThis.process) === null ||
    jr === void 0 ||
    (jr = jr.env) === null ||
    jr === void 0
      ? void 0
      : jr.NODE_ENV) !== "production",
  jy = function () {
    var t;
    Iy && (t = console).debug.apply(t, arguments);
  },
  iu = {},
  Dy = "@atlaskit/platform-feature-flags",
  gi = "__PLATFORM_FEATURE_FLAGS__",
  dp = typeof process < "u" && typeof iu < "u",
  Ty = dp ? iu.ENABLE_PLATFORM_FF === "true" : !1,
  My = dp ? iu.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  Fy = Ty || My,
  Ly = { booleanResolver: void 0 },
  _i = typeof window < "u" ? window : globalThis;
_i[gi] = _i[gi] || Ly;
function By(e) {
  if (Fy)
    return (
      jy(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        Dy,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = _i[gi]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = _i[gi]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Ps.checkGate(e);
    var i = (n = _i[gi]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function it(e) {
  return By(e);
}
var Ny = function () {
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
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: Ny() });
  },
  Uy = fp(),
  qy = y.createContext(fp()),
  zy = function (e) {
    return e.value++;
  },
  $y = function (e) {
    return e ? e.prefix : "";
  },
  Vy = function (e) {
    var t = e || Uy,
      r = $y(t),
      n = zy(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  vp = function () {
    var e = y.useContext(qy),
      t = y.useState(function () {
        return Vy(e);
      })[0];
    return t;
  },
  Gy = function () {
    var e = vp().uid;
    return e;
  },
  Hy = function () {
    var e = vp().gen;
    return e;
  },
  is,
  ua = (is = E.useId) !== null && is !== void 0 ? is : void 0;
function Wy() {
  return ua && it("platform-dst-react-18-use-id")
    ? it("platform-dst-react-18-use-id-selector-safe")
      ? ua().replace(/[:«»]/g, "_")
      : ua()
    : "uid".concat(Gy());
}
function Ky() {
  if (ua && it("platform-dst-react-18-use-id")) {
    var e = Wy();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return Hy();
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
var Jy = {
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
  Yy = ["children"];
function Xy(e) {
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
      s = ie(o, Yy),
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
var Zy = Xy(function () {
    return { mode: "light" };
  }),
  Qy = Zy.useTheme;
function e0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function t0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var r0 = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(t0(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = e0(i);
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
  we = "-ms-",
  Ea = "-moz-",
  Q = "-webkit-",
  pp = "comm",
  ou = "rule",
  su = "decl",
  n0 = "@import",
  hp = "@keyframes",
  i0 = "@layer",
  a0 = Math.abs,
  Va = String.fromCharCode,
  o0 = Object.assign;
function s0(e, t) {
  return me(e, 0) ^ 45
    ? (((((((t << 2) ^ me(e, 0)) << 2) ^ me(e, 1)) << 2) ^ me(e, 2)) << 2) ^ me(e, 3)
    : 0;
}
function gp(e) {
  return e.trim();
}
function u0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Cs(e, t) {
  return e.indexOf(t);
}
function me(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ri(e, t, r) {
  return e.slice(t, r);
}
function vt(e) {
  return e.length;
}
function uu(e) {
  return e.length;
}
function ta(e, t) {
  return (t.push(e), e);
}
function c0(e, t) {
  return e.map(t).join("");
}
var Ga = 1,
  Ur = 1,
  _p = 0,
  je = 0,
  ge = 0,
  Wr = "";
function Ha(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: Ga,
    column: Ur,
    length: o,
    return: "",
  };
}
function oi(e, t) {
  return o0(Ha("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function l0() {
  return ge;
}
function d0() {
  return ((ge = je > 0 ? me(Wr, --je) : 0), Ur--, ge === 10 && ((Ur = 1), Ga--), ge);
}
function Le() {
  return ((ge = je < _p ? me(Wr, je++) : 0), Ur++, ge === 10 && ((Ur = 1), Ga++), ge);
}
function _t() {
  return me(Wr, je);
}
function ca() {
  return je;
}
function Li(e, t) {
  return Ri(Wr, e, t);
}
function Pi(e) {
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
  return ((Ga = Ur = 1), (_p = vt((Wr = e))), (je = 0), []);
}
function mp(e) {
  return ((Wr = ""), e);
}
function la(e) {
  return gp(Li(je - 1, As(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function f0(e) {
  for (; (ge = _t()) && ge < 33; ) Le();
  return Pi(e) > 2 || Pi(ge) > 3 ? "" : " ";
}
function v0(e, t) {
  for (; --t && Le() && !(ge < 48 || ge > 102 || (ge > 57 && ge < 65) || (ge > 70 && ge < 97)); );
  return Li(e, ca() + (t < 6 && _t() == 32 && Le() == 32));
}
function As(e) {
  for (; Le(); )
    switch (ge) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && As(ge);
        break;
      case 40:
        e === 41 && As(e);
        break;
      case 92:
        Le();
        break;
    }
  return je;
}
function p0(e, t) {
  for (; Le() && e + ge !== 57; ) if (e + ge === 84 && _t() === 47) break;
  return "/*" + Li(t, je - 1) + "*" + Va(e === 47 ? e : Le());
}
function h0(e) {
  for (; !Pi(_t()); ) Le();
  return Li(e, je);
}
function g0(e) {
  return mp(da("", null, null, null, [""], (e = bp(e)), 0, [0], e));
}
function da(e, t, r, n, i, a, o, u, s) {
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
    switch (((g = b), (b = Le()))) {
      case 40:
        if (g != 108 && me(k, d - 1) == 58) {
          Cs((k += ee(la(b), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += la(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += f0(g);
        break;
      case 92:
        k += v0(ca() - 1, 7);
        continue;
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            ta(_0(p0(Le(), ca()), t, r), s);
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
            (_ == -1 && (k = ee(k, /\f/g, "")),
              v > 0 &&
                vt(k) - d &&
                ta(v > 32 ? kd(k + ";", n, r, d - 1) : kd(ee(k, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            k += ";";
          default:
            if ((ta((S = Ed(k, t, r, c, l, i, u, m, (O = []), (w = []), d)), a), b === 123))
              if (l === 0) da(k, t, S, S, O, a, d, u, w);
              else
                switch (p === 99 && me(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    da(
                      e,
                      S,
                      S,
                      n && ta(Ed(e, S, S, 0, 0, i, u, m, i, (O = []), d), w),
                      i,
                      w,
                      d,
                      u,
                      n ? O : w,
                    );
                    break;
                  default:
                    da(k, S, S, S, [""], w, 0, u, w);
                }
        }
        ((c = l = v = 0), (f = _ = 1), (m = k = ""), (d = o));
        break;
      case 58:
        ((d = 1 + vt(k)), (v = g));
      default:
        if (f < 1) {
          if (b == 123) --f;
          else if (b == 125 && f++ == 0 && d0() == 125) continue;
        }
        switch (((k += Va(b)), b * f)) {
          case 38:
            _ = l > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (vt(k) - 1) * _), (_ = 1));
            break;
          case 64:
            (_t() === 45 && (k += la(Le())), (p = _t()), (l = d = vt((m = k += h0(ca())))), b++);
            break;
          case 45:
            g === 45 && vt(k) == 2 && (f = 0);
        }
    }
  return a;
}
function Ed(e, t, r, n, i, a, o, u, s, c, l) {
  for (var d = i - 1, p = i === 0 ? a : [""], v = uu(p), g = 0, f = 0, h = 0; g < n; ++g)
    for (var _ = 0, b = Ri(e, d + 1, (d = a0((f = o[g])))), m = e; _ < v; ++_)
      (m = gp(f > 0 ? p[_] + " " + b : ee(b, /&\f/g, p[_]))) && (s[h++] = m);
  return Ha(e, t, r, i === 0 ? ou : u, s, c, l);
}
function _0(e, t, r) {
  return Ha(e, t, r, pp, Va(l0()), Ri(e, 2, -2), 0);
}
function kd(e, t, r, n) {
  return Ha(e, t, r, su, Ri(e, 0, n), Ri(e, n + 1, -1), n);
}
function Br(e, t) {
  for (var r = "", n = uu(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function b0(e, t, r, n) {
  switch (e.type) {
    case i0:
      if (e.children.length) break;
    case n0:
    case su:
      return (e.return = e.return || e.value);
    case pp:
      return "";
    case hp:
      return (e.return = e.value + "{" + Br(e.children, n) + "}");
    case ou:
      e.value = e.props.join(",");
  }
  return vt((r = Br(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function m0(e) {
  var t = uu(e);
  return function (r, n, i, a) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, i, a) || "";
    return o;
  };
}
function y0(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function w0(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var O0 = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = _t()), i === 38 && a === 12 && (r[n] = 1), !Pi(a); ) Le();
    return Li(t, je);
  },
  S0 = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (Pi(i)) {
        case 0:
          (i === 38 && _t() === 12 && (r[n] = 1), (t[n] += O0(je - 1, r, n)));
          break;
        case 2:
          t[n] += la(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = _t() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Va(i);
      }
    while ((i = Le()));
    return t;
  },
  E0 = function (t, r) {
    return mp(S0(bp(t), r));
  },
  xd = new WeakMap(),
  k0 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !xd.get(n)) && !i) {
        xd.set(t, !0);
        for (var a = [], o = E0(r, a), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = a[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  x0 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function yp(e, t) {
  switch (s0(e, t)) {
    case 5103:
      return Q + "print-" + e + e;
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
      return Q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Q + e + Ea + e + we + e + e;
    case 6828:
    case 4268:
      return Q + e + we + e + e;
    case 6165:
      return Q + e + we + "flex-" + e + e;
    case 5187:
      return Q + e + ee(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + we + "flex-$1$2") + e;
    case 5443:
      return Q + e + we + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + we + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + we + ee(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + we + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + ee(e, "-grow", "") + Q + e + we + ee(e, "grow", "positive") + e;
    case 4554:
      return Q + ee(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + we + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Q +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
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
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + Ea + (me(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Cs(e, "stretch") ? yp(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (me(e, t + 1) !== 115) break;
    case 6444:
      switch (me(e, vt(e) - 3 - (~Cs(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Q) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (me(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Q +
                "$2$3$1" +
                we +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (me(e, t + 11)) {
        case 114:
          return Q + e + we + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + we + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + we + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + we + e + e;
  }
  return e;
}
var R0 = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case su:
          t.return = yp(t.value, t.length);
          break;
        case hp:
          return Br([oi(t, { value: ee(t.value, "@", "@" + Q) })], i);
        case ou:
          if (t.length)
            return c0(t.props, function (a) {
              switch (u0(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Br([oi(t, { props: [ee(a, /:(read-\w+)/, ":" + Ea + "$1")] })], i);
                case "::placeholder":
                  return Br(
                    [
                      oi(t, { props: [ee(a, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      oi(t, { props: [ee(a, /:(plac\w+)/, ":" + Ea + "$1")] }),
                      oi(t, { props: [ee(a, /:(plac\w+)/, we + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  P0 = [R0],
  C0 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var h = f.getAttribute("data-emotion");
        h.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || P0,
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
      c = [k0, x0];
    {
      var l,
        d = [
          b0,
          y0(function (f) {
            l.insert(f);
          }),
        ],
        p = m0(c.concat(i, d)),
        v = function (h) {
          return Br(g0(h), p);
        };
      s = function (h, _, b, m) {
        ((l = b), v(h ? h + "{" + _.styles + "}" : _.styles), m && (g.inserted[_.name] = !0));
      };
    }
    var g = {
      key: r,
      sheet: new r0({
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
  te = {};
var Rd;
function A0() {
  if (Rd) return te;
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
    (te.AsyncMode = s),
    (te.ConcurrentMode = c),
    (te.ContextConsumer = u),
    (te.ContextProvider = o),
    (te.Element = t),
    (te.ForwardRef = l),
    (te.Fragment = n),
    (te.Lazy = g),
    (te.Memo = v),
    (te.Portal = r),
    (te.Profiler = a),
    (te.StrictMode = i),
    (te.Suspense = d),
    (te.isAsyncMode = function (w) {
      return O(w) || m(w) === s;
    }),
    (te.isConcurrentMode = O),
    (te.isContextConsumer = function (w) {
      return m(w) === u;
    }),
    (te.isContextProvider = function (w) {
      return m(w) === o;
    }),
    (te.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (te.isForwardRef = function (w) {
      return m(w) === l;
    }),
    (te.isFragment = function (w) {
      return m(w) === n;
    }),
    (te.isLazy = function (w) {
      return m(w) === g;
    }),
    (te.isMemo = function (w) {
      return m(w) === v;
    }),
    (te.isPortal = function (w) {
      return m(w) === r;
    }),
    (te.isProfiler = function (w) {
      return m(w) === a;
    }),
    (te.isStrictMode = function (w) {
      return m(w) === i;
    }),
    (te.isSuspense = function (w) {
      return m(w) === d;
    }),
    (te.isValidElementType = function (w) {
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
    (te.typeOf = m),
    te
  );
}
var Pd;
function I0() {
  return (Pd || ((Pd = 1), (as.exports = A0())), as.exports);
}
var os, Cd;
function j0() {
  if (Cd) return os;
  Cd = 1;
  var e = I0(),
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
j0();
var D0 = !0;
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
    (n === !1 || D0 === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
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
function T0(e) {
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
var M0 = {
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
  F0 = /[A-Z]|^ms/g,
  L0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Sp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ad = function (t) {
    return t != null && typeof t != "boolean";
  },
  ss = w0(function (e) {
    return Sp(e) ? e : e.replace(F0, "-$&").toLowerCase();
  }),
  Id = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(L0, function (n, i, a) {
            return ((pt = { name: i, styles: a, next: pt }), i);
          });
    }
    return M0[t] !== 1 && !Sp(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ci(e, t, r) {
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
      return B0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = pt,
          c = r(e);
        return ((pt = s), Ci(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function B0(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += Ci(e, t, r[i]) + ";";
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
        var c = Ci(e, t, o);
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
  if (a == null || a.raw === void 0) ((n = !1), (i += Ci(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((i += Ci(r, t, e[u])), n)) {
      var s = a;
      i += s[u];
    }
  jd.lastIndex = 0;
  for (var c = "", l; (l = jd.exec(i)) !== null; ) c += "-" + l[1];
  var d = T0(i) + c;
  return { name: d, styles: i, next: pt };
}
var N0 = function (t) {
    return t();
  },
  U0 = Lu.useInsertionEffect ? Lu.useInsertionEffect : !1,
  Ep = U0 || N0,
  kp = y.createContext(typeof HTMLElement < "u" ? C0({ key: "css" }) : null);
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
  q0 = function (t, r) {
    var n = {};
    for (var i in r) du.call(r, i) && (n[i] = r[i]);
    return ((n[Is] = t), n);
  },
  z0 = function (t) {
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
  $0 = xp(function (e, t, r) {
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
        y.createElement(z0, { cache: t, serialized: u, isStringTag: typeof i == "string" }),
        y.createElement(i, s),
      )
    );
  }),
  V0 = $0,
  It = function (t, r) {
    var n = arguments;
    if (r == null || !du.call(r, "css")) return y.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = V0), (a[1] = q0(t, r)));
    for (var o = 2; o < i; o++) a[o] = n[o];
    return y.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(It || (It = {}));
function kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return lu(t);
}
var G0 = function e(t) {
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
function H0(e, t, r) {
  var n = [],
    i = wp(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var W0 = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Ep(function () {
        for (var i = 0; i < n.length; i++) Op(r, n[i], !1);
      }),
      null
    );
  },
  K0 = xp(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = lu(c, t.registered);
        return (r.push(d), cu(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return H0(t.registered, n, G0(c));
      },
      a = { css: n, cx: i, theme: y.useContext(Rp) },
      o = e.children(a);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(W0, { cache: t, serializedArr: r }),
      o,
    );
  });
function J0(e, t) {
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
  Y0 = kt({
    "&:focus": js,
    "&:focus-visible": js,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  X0 = kt({
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
      a = r ? X0 : Y0,
      o = typeof n > "u" ? a : n === "on" && i;
    return It(K0, null, function (u) {
      var s = u.css,
        c = u.cx;
      return y.Children.only(
        o ? y.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Cp.displayName = "FocusRing";
function At(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Z0 = 9;
function Dd(e) {
  e.keyCode !== Z0 && At(e);
}
var Q0 = {
    onMouseDownCapture: At,
    onMouseUpCapture: At,
    onKeyDownCapture: Dd,
    onKeyUpCapture: Dd,
    onTouchStartCapture: At,
    onTouchEndCapture: At,
    onPointerDownCapture: At,
    onPointerUpCapture: At,
    onClickCapture: At,
    onClick: At,
  },
  ew = {};
function tw(e) {
  var t = e.isInteractive;
  return t ? ew : Q0;
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
function Pe(e) {
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
  rw = { default: Ts.default, compact: Ts.compact, none: "inherit" },
  nw = {
    default: "0 ".concat(Ht + Ht / 4, "px"),
    compact: "0 ".concat(Ht + Ht / 4, "px"),
    none: "0",
  },
  iw = { compact: "0 ".concat(Ht / 4, "px"), default: "0 ".concat(Ht / 4, "px"), none: "0" },
  aw = { default: "middle", compact: "middle", none: "baseline" },
  Ap = { content: "0 ".concat(Ht / 4, "px"), icon: "0 ".concat(Ht / 4, "px") },
  Ip = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  ow = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Pe(Pe({}, Ip), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  sw = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  uw = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  cw = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  lw = {
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
  dw = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  fw = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  vw = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Pe(
      Pe({}, Ip),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  pw = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function hw(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Pe(
    Pe(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: it("platform-dst-shape-theme-default")
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
        lineHeight: rw[r],
        padding: a ? iw[r] : nw[r],
        verticalAlign: aw[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? vw
        : Pe(
            Pe(
              Pe(
                Pe(
                  Pe(
                    Pe(
                      Pe(Pe({}, t === "default" && ow), t === "primary" && sw),
                      t === "link" && uw,
                    ),
                    t === "subtle" && cw,
                  ),
                  t === "subtle-link" && lw,
                ),
                t === "warning" && dw,
              ),
              t === "danger" && fw,
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
            pw,
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
function gw(e) {
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
function _w(e) {
  var t = e.hasOverlay;
  return kt({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var bw = {
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
  mw = [
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
  yw = { "> *": { pointerEvents: "none" } },
  ww = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  Ow = kt({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  Fd = function (t, r) {
    return !t || fu(t) ? null : r;
  },
  Sw = function (t, r) {
    return fu(t) ? t : t ? It("span", { css: r }, t) : null;
  },
  Ew = E.forwardRef(function (t, r) {
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
      k = S === void 0 ? Oe : S,
      j = t.onFocus,
      A = t.onMouseDown,
      P = A === void 0 ? Oe : A,
      D = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      q = z === void 0 ? "default" : z,
      G = t.tabIndex,
      Z = G === void 0 ? 0 : G,
      H = t.type,
      U = H === void 0 ? (d ? void 0 : "button") : H,
      K = t.testId,
      B = ie(t, mw),
      $ = y.useRef(),
      T = y.useCallback(
        function (he) {
          if ((($.current = he), r != null)) {
            if (typeof r == "function") {
              r(he);
              return;
            }
            r.current = he;
          }
        },
        [$, r],
      );
    J0($, u);
    var ue = y.useContext(tu),
      ke = y.useCallback(
        function (he, dt) {
          (ue && ue.tracePress(h, he.timeStamp), k(he, dt));
        },
        [k, ue, h],
      ),
      ae = ki({
        fn: ke,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      pe = y.useCallback(
        function (he) {
          (he.preventDefault(), P(he));
        },
        [P],
      );
    y.useEffect(
      function () {
        var he = $.current;
        b && he && he === document.activeElement && he.blur();
      },
      [b],
    );
    var ce = !!D,
      ye = kt(_w({ hasOverlay: ce })),
      Se = !b && !ce,
      lt = {};
    return (
      (O || b || a === "warning") &&
        (lt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || b
                ? "var(--ds-icon-subtle, ".concat(Os, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Os, ")"),
              " !important",
            ),
          },
        }),
      It(
        Cp,
        null,
        It(
          v,
          re(
            {},
            B,
            {
              ref: T,
              className: l,
              css: [s, Se ? null : yw],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": K,
              disabled: b,
              href: Se ? d : void 0,
              onBlur: w,
              onClick: ae,
              onFocus: j,
              onMouseDown: pe,
              tabIndex: b ? -1 : Z,
              type: U,
            },
            tw({ isInteractive: Se }),
          ),
          f ? It("span", { css: [ye, Md({ spacing: q }), Fd(c, ww)] }, f) : null,
          Sw(c, [ye, gw({ spacing: q })]),
          g ? It("span", { css: [ye, Md({ spacing: q }), Fd(c, Ow)] }, g) : null,
          D ? It("span", { css: [bw, lt] }, D) : null,
        ),
      )
    );
  });
function kw(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return fu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var xw = [
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
        d = l === void 0 ? Oe : l,
        p = t.onMouseUp,
        v = p === void 0 ? Oe : p,
        g = t.shouldFitContainer,
        f = g === void 0 ? !1 : g,
        h = t.spacing,
        _ = h === void 0 ? "default" : h,
        b = ie(t, xw),
        m = Qy(),
        O = m.mode,
        w = kw({ children: a, iconBefore: o, iconAfter: u }),
        S = y.useState(!1),
        k = Y(S, 2),
        j = k[0],
        A = k[1],
        P = y.useCallback(
          function (q) {
            (d(q), Ld && A(!0));
          },
          [d, A],
        ),
        D = y.useCallback(
          function (q) {
            (v(q), Ld && A(!1));
          },
          [v, A],
        ),
        z = y.useMemo(
          function () {
            return hw({
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
        Ew,
        re({}, b, {
          ref: r,
          appearance: i,
          buttonCss: z,
          children: a,
          "data-firefox-is-active": j ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: P,
          onMouseUp: D,
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
function Rw(e) {
  return E.createElement(vu, re({}, e, { appearance: "subtle" }));
}
var Pw = { container: "_1e0c1txw _kqswh2mm" };
function Cw(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    za,
    { as: "li", testId: r, key: t, xcss: Pw.container, paddingInline: "space.100" },
    E.createElement(
      km,
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
function Aw(e, t) {
  return !!(e === t || (Ud(e) && Ud(t)));
}
function Iw(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Aw(e[r], t[r])) return !1;
  return !0;
}
function jw(e, t) {
  t === void 0 && (t = Iw);
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
var Dw = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > a,
    l = c && a - 4 < r,
    d = c && r < s - a + 3,
    p = jw(function () {
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
      Te(p(0, 1)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: 2, to: s - v })],
      Te(p(s - v)),
    );
  }
  if (!l && d) {
    var g = a - 2;
    return [].concat(
      Te(p(0, g)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: g + 1, to: s - 1 })],
      Te(p(s - 1)),
    );
  }
  var f = a - 4;
  return [].concat(
    Te(p(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: i && "".concat(i, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Te(p(r - Math.floor(f / 2), r + f - 1)),
    [o({ key: "ellipsis-2", testId: i && "".concat(i, "-ellipsis"), from: r + 3, to: s - 1 })],
    Te(p(s - 1)),
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
function Tw(e) {
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
  Mw = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.2.0",
  };
function zd(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Hb : Jb;
  return E.createElement(
    za,
    { as: "span", xcss: Ms.navigatorIconWrapper },
    E.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function Fw(e, t) {
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
    O = m === void 0 ? Oe : m,
    w = e.pages,
    S = e.getPageLabel,
    k = e.renderEllipsis,
    j = k === void 0 ? Cw : k,
    A = e.analyticsContext,
    P = e.testId,
    D = e.isDisabled,
    z = Nb(o, function () {
      return a || 0;
    }),
    q = Y(z, 2),
    G = q[0],
    Z = q[1],
    H = ki(
      Tw(
        {
          fn: function (B, $) {
            var T = B.event,
              ue = B.selectedPageIndex;
            (o === void 0 && Z(ue), O && O(T, w[ue], $));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: A,
        },
        Mw,
      ),
    ),
    U = function (B, $, T) {
      var ue = w[G],
        ke = "".concat(l, " ").concat(S ? S(B, $) : B),
        ae = B === ue;
      return E.createElement(
        sa,
        { as: "li", xcss: Ms.paginationMenuItem, key: "page-".concat(S ? S(B, $) : $) },
        E.createElement(
          Rw,
          {
            component: n.Page,
            onClick: function (ce) {
              return H({ event: ce, selectedPageIndex: $ });
            },
            "aria-current": ae ? "page" : void 0,
            "aria-label": ke,
            isSelected: ae,
            isDisabled: D,
            page: B,
            testId:
              T &&
              ""
                .concat(T, "--")
                .concat(ae ? "current-" : "", "page-")
                .concat($),
          },
          S ? S(B, $) : B,
        ),
      );
    };
  return E.createElement(
    za,
    { testId: P, style: h, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      sa,
      { space: "space.0", alignBlock: "center" },
      E.createElement(Bd, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (B) {
          return H({ event: B, selectedPageIndex: G - 1 });
        },
        isDisabled: D || G === 0,
        iconBefore: E.createElement(zd, { chevronDirection: "left" }),
        "aria-label": p,
        testId: P && "".concat(P, "--left-navigator"),
      }),
      E.createElement(
        sa,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Ms.paginationMenu },
        Dw(w, G, { max: b, ellipsis: j, transform: U }, P),
      ),
      E.createElement(Bd, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (B) {
          return H({ event: B, selectedPageIndex: G + 1 });
        },
        isDisabled: D || G === w.length - 1,
        iconBefore: E.createElement(zd, { chevronDirection: "right" }),
        "aria-label": g,
        testId: P && "".concat(P, "--right-navigator"),
      }),
    ),
  );
}
var Lw = y.memo(y.forwardRef(Fw));
function Bw(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, jp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Nw = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = Bw(this, t, [].concat(i))),
        x(r, "onChange", function (o, u, s) {
          r.props.onChange(u, s);
        }),
        r
      );
    }
    return (
      Ue(t, e),
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
              l = Te(Array(i)).map(function (p, v) {
                return v + 1;
              }),
              d = o - 1;
            return E.createElement(Lw, {
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
  Uw = ["isRanking", "testId"],
  qw = [
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
function si(e) {
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
  zw = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ie(t, Uw);
    return y.createElement(
      "thead",
      re({ "data-testid": n }, i, { className: R(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  $w = y.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ie(e, qw),
      l = si(
        si(si({}, u), r && $v({ width: r })),
        {},
        x({}, Vd, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === fr,
      p = i === wa,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      g = n ? "th" : "td";
    return y.createElement(
      g,
      re({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: R([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: si(
          si({}, l),
          {},
          { "--_17ckjys": qv("var(--ds-text-subtle, ".concat("var(".concat(Vd, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function Vw(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, Dp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function Gw(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = Vw(this, r, [].concat(a))),
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
      Ue(r, t),
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
              re({ refWidth: a, refHeight: o, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(E.Component);
}
var ui = {},
  Gd;
function Hw() {
  if (Gd) return ui;
  ((Gd = 1), Object.defineProperty(ui, "__esModule", { value: !0 }), (ui.default = void 0));
  var e = r(br()),
    t = r(qa);
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
  return ((n.displayName = "ArrowDownIcon"), (ui.default = n), ui);
}
var Ww = Hw();
const Kw = Yt(Ww);
var ci = {},
  Hd;
function Jw() {
  if (Hd) return ci;
  ((Hd = 1), Object.defineProperty(ci, "__esModule", { value: !0 }), (ci.default = void 0));
  var e = r(br()),
    t = r(qa);
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
  return ((n.displayName = "ArrowUpIcon"), (ci.default = n), ci);
}
var Yw = Jw();
const Xw = Yt(Yw);
var Zw = "Escape";
function Qw(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = y.useRef(!1),
    i = y.useCallback(
      function (o) {
        r || n.current || o.key !== Zw || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = y.useCallback(function () {
      n.current = !1;
    }, []);
  y.useEffect(
    function () {
      if (!r)
        return $a.bindAll(
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
function li(e) {
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
var e1 = y.createContext(null),
  t1 = y.createContext(null);
function r1() {
  var e = y.useContext(t1);
  return e;
}
function n1(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = y.useContext(e1),
    a = r1();
  y.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var pi = { none: 0, small: 100, medium: 350, large: 700 },
  cs = 0.5,
  i1 = { none: pi.none, small: pi.small * cs, medium: pi.medium * cs, large: pi.large * cs },
  a1 = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  o1 = function () {
    if (!a1()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  s1 = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  u1 = function () {
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
      }, s1(t)),
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
  c1 = function (t, r) {
    for (var n = r.concat([]), i = l1(r), a = 0; a < t.length; a++) {
      var o = t[a],
        u = !i[o.key];
      u && n.splice(a + 1, 0, o);
    }
    return n;
  },
  l1 = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  d1 = function (t, r) {
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
      o = Y(a, 2),
      u = o[0],
      s = o[1],
      c = y.useState([]),
      l = Y(c, 2),
      d = l[0],
      p = l[1],
      v = y.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      g = Y(v, 2),
      f = g[0],
      h = g[1];
    if (
      (y.useEffect(function () {
        f.appear || h({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var _ = Y(u, 2),
      b = _[0],
      m = _[1],
      O = Kd(b),
      w = Kd(m);
    m !== n && s([m, n]);
    var S = d1(w, O),
      k = !!S.size,
      j = w;
    if ((k && (j = c1(w, O)), i))
      if (d.length) j = d;
      else {
        var A = j.filter(function (P) {
          return S.has(P.key);
        });
        A.length && p(A);
      }
    return (
      S.size
        ? (j = j.map(function (P) {
            var D = S.has(P.key);
            return Wd(P, {
              appear: !0,
              isExiting: D,
              onFinish: D
                ? function () {
                    (S.delete(P.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (j = j.map(function (P) {
            return Wd(P, f);
          })),
      j
    );
  }),
  f1 = function () {
    return y.useContext(Mp);
  };
Fp.displayName = "ExitingPersistence";
function v1() {
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
var p1 = y.createContext(function () {
    return { isReady: !0, delay: 0, ref: Oe };
  }),
  h1 = function () {
    var t = v1(),
      r = y.useContext(p1);
    return r(t);
  },
  g1 = function (t) {
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
      v = h1(),
      g = f1(),
      f = g.isExiting,
      h = g.onFinish,
      _ = g.appear,
      b = u1(),
      m = c || !v.isReady,
      O = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = y.useState(_),
      k = Y(S, 2),
      j = k[0],
      A = k[1];
    return (
      y.useEffect(
        function () {
          var P = !1;
          if (!m) {
            if (!_) {
              l && l(w);
              return;
            }
            var D = function () {
              (w === "exiting" && h?.(), P || A(!1), l?.(w));
            };
            if (o1()) {
              D();
              return;
            }
            return (
              A(!0),
              b(D, f ? i1[p] : pi[p] + O),
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
          className: j
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
  _1 = { top: "bottom", bottom: "top", left: "right", right: "left" },
  b1 = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? _1[a] : void 0,
      p =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      g1,
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
  m1 = y.createContext();
y.createContext();
var y1 = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  w1 = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  O1 = function (t, r) {
    if (typeof t == "function") return w1(t, r);
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
  Ce = "top",
  Xe = "bottom",
  Ze = "right",
  Ae = "left",
  pu = "auto",
  Bi = [Ce, Xe, Ze, Ae],
  qr = "start",
  Ai = "end",
  S1 = "clippingParents",
  Lp = "viewport",
  di = "popper",
  E1 = "reference",
  Xd = Bi.reduce(function (e, t) {
    return e.concat([t + "-" + qr, t + "-" + Ai]);
  }, []),
  Bp = [].concat(Bi, [pu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + qr, t + "-" + Ai]);
  }, []),
  k1 = "beforeRead",
  x1 = "read",
  R1 = "afterRead",
  P1 = "beforeMain",
  C1 = "main",
  A1 = "afterMain",
  I1 = "beforeWrite",
  j1 = "write",
  D1 = "afterWrite",
  T1 = [k1, x1, R1, P1, C1, A1, I1, j1, D1];
function St(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Be(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function vr(e) {
  var t = Be(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ye(e) {
  var t = Be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function M1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Ye(a) ||
      !St(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var u = i[o];
        u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function F1(e) {
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
        !Ye(i) ||
          !St(i) ||
          (Object.assign(i.style, u),
          Object.keys(a).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const L1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: M1,
  effect: F1,
  requires: ["computeStyles"],
};
function bt(e) {
  return e.split("-")[0];
}
var lr = Math.max,
  ka = Math.min,
  zr = Math.round;
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
function $r(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Ye(e) &&
    ((i = (e.offsetWidth > 0 && zr(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && zr(n.height) / e.offsetHeight) || 1));
  var o = vr(e) ? Be(e) : window,
    u = o.visualViewport,
    s = !Np() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    l = (n.top + (s && u ? u.offsetTop : 0)) / a,
    d = n.width / i,
    p = n.height / a;
  return { width: d, height: p, top: l, right: c + d, bottom: l + p, left: c, x: c, y: l };
}
function gu(e) {
  var t = $r(e),
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
function Lt(e) {
  return Be(e).getComputedStyle(e);
}
function B1(e) {
  return ["table", "td", "th"].indexOf(St(e)) >= 0;
}
function Xt(e) {
  return ((vr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wa(e) {
  return St(e) === "html" ? e : e.assignedSlot || e.parentNode || (hu(e) ? e.host : null) || Xt(e);
}
function Zd(e) {
  return !Ye(e) || Lt(e).position === "fixed" ? null : e.offsetParent;
}
function N1(e) {
  var t = /firefox/i.test(Fs()),
    r = /Trident/i.test(Fs());
  if (r && Ye(e)) {
    var n = Lt(e);
    if (n.position === "fixed") return null;
  }
  var i = Wa(e);
  for (hu(i) && (i = i.host); Ye(i) && ["html", "body"].indexOf(St(i)) < 0; ) {
    var a = Lt(i);
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
function Ni(e) {
  for (var t = Be(e), r = Zd(e); r && B1(r) && Lt(r).position === "static"; ) r = Zd(r);
  return r && (St(r) === "html" || (St(r) === "body" && Lt(r).position === "static"))
    ? t
    : r || N1(e) || t;
}
function _u(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bi(e, t, r) {
  return lr(e, ka(t, r));
}
function U1(e, t, r) {
  var n = bi(e, t, r);
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
var q1 = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    zp(typeof t != "number" ? t : $p(t, Bi))
  );
};
function z1(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = bt(r.placement),
    s = _u(u),
    c = [Ae, Ze].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = q1(i.padding, r),
      p = gu(a),
      v = s === "y" ? Ce : Ae,
      g = s === "y" ? Xe : Ze,
      f = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      h = o[s] - r.rects.reference[s],
      _ = Ni(a),
      b = _ ? (s === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      m = f / 2 - h / 2,
      O = d[v],
      w = b - p[l] - d[g],
      S = b / 2 - p[l] / 2 + m,
      k = bi(O, S, w),
      j = s;
    r.modifiersData[n] = ((t = {}), (t[j] = k), (t.centerOffset = k - S), t);
  }
}
function $1(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Up(t.elements.popper, i) && (t.elements.arrow = i)));
}
const V1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: z1,
  effect: $1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Vr(e) {
  return e.split("-")[1];
}
var G1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function H1(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: zr(r * i) / i || 0, y: zr(n * i) / i || 0 };
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
    m = Ae,
    O = Ce,
    w = window;
  if (c) {
    var S = Ni(r),
      k = "clientHeight",
      j = "clientWidth";
    if (
      (S === Be(r) &&
        ((S = Xt(r)),
        Lt(S).position !== "static" &&
          u === "absolute" &&
          ((k = "scrollHeight"), (j = "scrollWidth"))),
      (S = S),
      i === Ce || ((i === Ae || i === Ze) && a === Ai))
    ) {
      O = Xe;
      var A = d && S === w && w.visualViewport ? w.visualViewport.height : S[k];
      ((f -= A - n.height), (f *= s ? 1 : -1));
    }
    if (i === Ae || ((i === Ce || i === Xe) && a === Ai)) {
      m = Ze;
      var P = d && S === w && w.visualViewport ? w.visualViewport.width : S[j];
      ((v -= P - n.width), (v *= s ? 1 : -1));
    }
  }
  var D = Object.assign({ position: u }, c && G1),
    z = l === !0 ? H1({ x: v, y: f }, Be(r)) : { x: v, y: f };
  if (((v = z.x), (f = z.y), s)) {
    var q;
    return Object.assign(
      {},
      D,
      ((q = {}),
      (q[O] = b ? "0" : ""),
      (q[m] = _ ? "0" : ""),
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
    ((t = {}), (t[O] = b ? f + "px" : ""), (t[m] = _ ? v + "px" : ""), (t.transform = ""), t),
  );
}
function W1(e) {
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
      variation: Vr(t.placement),
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
const K1 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: W1, data: {} };
var ra = { passive: !0 };
function J1(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    a = i === void 0 ? !0 : i,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = Be(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, ra);
      }),
    u && s.addEventListener("resize", r.update, ra),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, ra);
        }),
        u && s.removeEventListener("resize", r.update, ra));
    }
  );
}
const Y1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: J1,
  data: {},
};
var X1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function fa(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return X1[t];
  });
}
var Z1 = { start: "end", end: "start" };
function ef(e) {
  return e.replace(/start|end/g, function (t) {
    return Z1[t];
  });
}
function bu(e) {
  var t = Be(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function mu(e) {
  return $r(Xt(e)).left + bu(e).scrollLeft;
}
function Q1(e, t) {
  var r = Be(e),
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
function eO(e) {
  var t,
    r = Xt(e),
    n = bu(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = lr(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = lr(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + mu(e),
    s = -n.scrollTop;
  return (
    Lt(i || r).direction === "rtl" && (u += lr(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: u, y: s }
  );
}
function yu(e) {
  var t = Lt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Vp(e) {
  return ["html", "body", "#document"].indexOf(St(e)) >= 0
    ? e.ownerDocument.body
    : Ye(e) && yu(e)
      ? e
      : Vp(Wa(e));
}
function mi(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Vp(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Be(n),
    o = i ? [a].concat(a.visualViewport || [], yu(n) ? n : []) : n,
    u = t.concat(o);
  return i ? u : u.concat(mi(Wa(o)));
}
function Ls(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function tO(e, t) {
  var r = $r(e, !1, t === "fixed");
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
  return t === Lp ? Ls(Q1(e, r)) : vr(t) ? tO(t, r) : Ls(eO(Xt(e)));
}
function rO(e) {
  var t = mi(Wa(e)),
    r = ["absolute", "fixed"].indexOf(Lt(e).position) >= 0,
    n = r && Ye(e) ? Ni(e) : e;
  return vr(n)
    ? t.filter(function (i) {
        return vr(i) && Up(i, n) && St(i) !== "body";
      })
    : [];
}
function nO(e, t, r, n) {
  var i = t === "clippingParents" ? rO(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    u = a.reduce(
      function (s, c) {
        var l = tf(e, c, n);
        return (
          (s.top = lr(l.top, s.top)),
          (s.right = ka(l.right, s.right)),
          (s.bottom = ka(l.bottom, s.bottom)),
          (s.left = lr(l.left, s.left)),
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
    a = n ? Vr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case Ce:
      s = { x: o, y: t.y - r.height };
      break;
    case Xe:
      s = { x: o, y: t.y + t.height };
      break;
    case Ze:
      s = { x: t.x + t.width, y: u };
      break;
    case Ae:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = i ? _u(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case qr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Ai:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Ii(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    u = r.boundary,
    s = u === void 0 ? S1 : u,
    c = r.rootBoundary,
    l = c === void 0 ? Lp : c,
    d = r.elementContext,
    p = d === void 0 ? di : d,
    v = r.altBoundary,
    g = v === void 0 ? !1 : v,
    f = r.padding,
    h = f === void 0 ? 0 : f,
    _ = zp(typeof h != "number" ? h : $p(h, Bi)),
    b = p === di ? E1 : di,
    m = e.rects.popper,
    O = e.elements[g ? b : p],
    w = nO(vr(O) ? O : O.contextElement || Xt(e.elements.popper), s, l, o),
    S = $r(e.elements.reference),
    k = Gp({ reference: S, element: m, placement: i }),
    j = Ls(Object.assign({}, m, k)),
    A = p === di ? j : S,
    P = {
      top: w.top - A.top + _.top,
      bottom: A.bottom - w.bottom + _.bottom,
      left: w.left - A.left + _.left,
      right: A.right - w.right + _.right,
    },
    D = e.modifiersData.offset;
  if (p === di && D) {
    var z = D[i];
    Object.keys(P).forEach(function (q) {
      var G = [Ze, Xe].indexOf(q) >= 0 ? 1 : -1,
        Z = [Ce, Xe].indexOf(q) >= 0 ? "y" : "x";
      P[q] += z[Z] * G;
    });
  }
  return P;
}
function iO(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? Bp : s,
    l = Vr(n),
    d = l
      ? u
        ? Xd
        : Xd.filter(function (g) {
            return Vr(g) === l;
          })
      : Bi,
    p = d.filter(function (g) {
      return c.indexOf(g) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (g, f) {
    return ((g[f] = Ii(e, { placement: f, boundary: i, rootBoundary: a, padding: o })[bt(f)]), g);
  }, {});
  return Object.keys(v).sort(function (g, f) {
    return v[g] - v[f];
  });
}
function aO(e) {
  if (bt(e) === pu) return [];
  var t = fa(e);
  return [ef(e), t, ef(t)];
}
function oO(e) {
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
        m = s || (b || !g ? [fa(h)] : aO(h)),
        O = [h].concat(m).reduce(function (ae, pe) {
          return ae.concat(
            bt(pe) === pu
              ? iO(t, {
                  placement: pe,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: f,
                })
              : pe,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        k = new Map(),
        j = !0,
        A = O[0],
        P = 0;
      P < O.length;
      P++
    ) {
      var D = O[P],
        z = bt(D),
        q = Vr(D) === qr,
        G = [Ce, Xe].indexOf(z) >= 0,
        Z = G ? "width" : "height",
        H = Ii(t, { placement: D, boundary: l, rootBoundary: d, altBoundary: p, padding: c }),
        U = G ? (q ? Ze : Ae) : q ? Xe : Ce;
      w[Z] > S[Z] && (U = fa(U));
      var K = fa(U),
        B = [];
      if (
        (a && B.push(H[z] <= 0),
        u && B.push(H[U] <= 0, H[K] <= 0),
        B.every(function (ae) {
          return ae;
        }))
      ) {
        ((A = D), (j = !1));
        break;
      }
      k.set(D, B);
    }
    if (j)
      for (
        var $ = g ? 3 : 1,
          T = function (pe) {
            var ce = O.find(function (ye) {
              var Se = k.get(ye);
              if (Se)
                return Se.slice(0, pe).every(function (lt) {
                  return lt;
                });
            });
            if (ce) return ((A = ce), "break");
          },
          ue = $;
        ue > 0;
        ue--
      ) {
        var ke = T(ue);
        if (ke === "break") break;
      }
    t.placement !== A && ((t.modifiersData[n]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const sO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: oO,
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
  return [Ce, Ze, Xe, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function uO(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Ii(t, { elementContext: "reference" }),
    u = Ii(t, { altBoundary: !0 }),
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
const cO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: uO,
};
function lO(e, t, r) {
  var n = bt(e),
    i = [Ae, Ce].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    u = a[1];
  return (
    (o = o || 0),
    (u = (u || 0) * i),
    [Ae, Ze].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function dO(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Bp.reduce(function (l, d) {
      return ((l[d] = lO(d, t.rects, a)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const fO = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: dO };
function vO(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Gp({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const pO = { name: "popperOffsets", enabled: !0, phase: "read", fn: vO, data: {} };
function hO(e) {
  return e === "x" ? "y" : "x";
}
function gO(e) {
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
    h = Ii(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    _ = bt(t.placement),
    b = Vr(t.placement),
    m = !b,
    O = _u(_),
    w = hO(O),
    S = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    j = t.rects.popper,
    A = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    P =
      typeof A == "number"
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var q,
        G = O === "y" ? Ce : Ae,
        Z = O === "y" ? Xe : Ze,
        H = O === "y" ? "height" : "width",
        U = S[O],
        K = U + h[G],
        B = U - h[Z],
        $ = v ? -j[H] / 2 : 0,
        T = b === qr ? k[H] : j[H],
        ue = b === qr ? -j[H] : -k[H],
        ke = t.elements.arrow,
        ae = v && ke ? gu(ke) : { width: 0, height: 0 },
        pe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : qp(),
        ce = pe[G],
        ye = pe[Z],
        Se = bi(0, k[H], ae[H]),
        lt = m ? k[H] / 2 - $ - Se - ce - P.mainAxis : T - Se - ce - P.mainAxis,
        he = m ? -k[H] / 2 + $ + Se + ye + P.mainAxis : ue + Se + ye + P.mainAxis,
        dt = t.elements.arrow && Ni(t.elements.arrow),
        Nt = dt ? (O === "y" ? dt.clientTop || 0 : dt.clientLeft || 0) : 0,
        Qt = (q = D?.[O]) != null ? q : 0,
        ze = U + lt - Qt - Nt,
        be = U + he - Qt,
        Ut = bi(v ? ka(K, ze) : K, U, v ? lr(B, be) : B);
      ((S[O] = Ut), (z[O] = Ut - U));
    }
    if (u) {
      var qt,
        et = O === "x" ? Ce : Ae,
        zt = O === "x" ? Xe : Ze,
        Ee = S[w],
        De = w === "y" ? "height" : "width",
        xe = Ee + h[et],
        tt = Ee - h[zt],
        er = [Ce, Ae].indexOf(_) !== -1,
        Xr = (qt = D?.[w]) != null ? qt : 0,
        Gi = er ? xe : Ee - k[De] - j[De] - Xr + P.altAxis,
        Hi = er ? Ee + k[De] + j[De] - Xr - P.altAxis : tt,
        Wi = v && er ? U1(Gi, Ee, Hi) : bi(v ? Gi : xe, Ee, v ? Hi : tt);
      ((S[w] = Wi), (z[w] = Wi - Ee));
    }
    t.modifiersData[n] = z;
  }
}
const _O = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: gO,
  requiresIfExists: ["offset"],
};
function bO(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function mO(e) {
  return e === Be(e) || !Ye(e) ? bu(e) : bO(e);
}
function yO(e) {
  var t = e.getBoundingClientRect(),
    r = zr(t.width) / e.offsetWidth || 1,
    n = zr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function wO(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ye(t),
    i = Ye(t) && yO(t),
    a = Xt(t),
    o = $r(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((St(t) !== "body" || yu(a)) && (u = mO(t)),
      Ye(t) ? ((s = $r(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : a && (s.x = mu(a))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function OO(e) {
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
function SO(e) {
  var t = OO(e);
  return T1.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function EO(e) {
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
function kO(e) {
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
function xO(e) {
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
              reference: vr(u) ? mi(u) : u.contextElement ? mi(u.contextElement) : [],
              popper: mi(s),
            }));
          var m = SO(kO([].concat(n, l.options.modifiers)));
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
                reference: wO(b, Ni(m), l.options.strategy === "fixed"),
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
                  j = k === void 0 ? {} : k,
                  A = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: j, name: A, instance: v }) || l);
              }
            }
          }
        },
        update: EO(function () {
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
var RO = [Y1, pO, K1, L1, fO, sO, _O, V1, cO],
  PO = xO({ defaultModifiers: RO }),
  ls,
  sf;
function CO() {
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
var AO = CO();
const IO = Yt(AO);
var jO = [],
  DO = function (t, r, n) {
    n === void 0 && (n = {});
    var i = y.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || jO,
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
            Ma.flushSync(function () {
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
          return IO(i.current, p) ? i.current || p : ((i.current = p), p);
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
            var p = n.createPopper || PO,
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
  TO = function () {},
  MO = function () {
    return Promise.resolve(null);
  },
  FO = [];
function LO(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? FO : a,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = y.useContext(m1),
    p = y.useState(null),
    v = p[0],
    g = p[1],
    f = y.useState(null),
    h = f[0],
    _ = f[1];
  y.useEffect(
    function () {
      O1(c, v);
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
    m = DO(u || d, v, b),
    O = m.state,
    w = m.styles,
    S = m.forceUpdate,
    k = m.update,
    j = y.useMemo(
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
          forceUpdate: S || TO,
          update: k || MO,
        };
      },
      [g, _, r, O, w, k, S],
    );
  return y1(l)(j);
}
function BO(e) {
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
            g = Y(v, 1),
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
  NO = [
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
function UO() {
  return null;
}
var qO = [0, 8];
function zO(e) {
  var t = e.children,
    r = t === void 0 ? UO : t,
    n = e.offset,
    i = n === void 0 ? qO : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    g = Y(i, 2),
    f = g[0],
    h = g[1],
    _ = y.useMemo(
      function () {
        var m = {
            name: "preventOverflow",
            options: { padding: Bs, rootBoundary: v ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [f, h] } },
          w = v ? BO({ viewportPadding: Bs }) : [];
        return [].concat(NO, [m, O], Te(w));
      },
      [f, h, v],
    ),
    b = y.useMemo(
      function () {
        return c == null ? _ : [].concat(Te(_), Te(c));
      },
      [_, c],
    );
  return E.createElement(LO, { modifiers: b, placement: o, strategy: d, referenceElement: s }, r);
}
var Hp = "atlaskit-portal-container",
  Wp = "body > .atlaskit-portal-container",
  Kp = "atlaskit-portal",
  $O = function (t) {
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
  VO = function (t) {
    Yp().removeChild(t);
  },
  GO = function (t) {
    t.parentElement || Yp().appendChild(t);
  },
  Xp = function () {
    return document !== void 0;
  },
  HO = function (t) {
    if (Xp()) {
      var r = document.createElement("div");
      return ((r.className = Kp), (r.style.zIndex = "".concat(t)), r);
    }
  },
  WO = function () {
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
function KO(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useMemo(
      function () {
        return $O(t);
      },
      [t],
    );
  return (
    GO(n),
    y.useEffect(
      function () {
        return function () {
          VO(n);
        };
      },
      [n],
    ),
    Ma.createPortal(r, n)
  );
}
var Zp = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function JO(e) {
  var t = e.zIndex,
    r = e.children,
    n = y.useState(null),
    i = Y(n, 2),
    a = i[0],
    o = i[1];
  Zp(
    function () {
      var s = HO(t);
      o(s);
      var c = WO();
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
  return a ? Ma.createPortal(u, a) : null;
}
var YO = function (t) {
    var r = y.useState(!1),
      n = Y(r, 2),
      i = n[0],
      a = n[1],
      o = y.useState(function () {
        return t === "layoutEffect" ? Zp : y.useEffect;
      }),
      u = Y(o, 1),
      s = u[0];
    return (
      s(function () {
        a(!0);
      }, []),
      i
    );
  },
  XO = "akPortalMount",
  ZO = "akPortalUnmount",
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
  QO = function (t) {
    return uf.hasOwnProperty(t) ? uf[t] : null;
  },
  eS = function (t, r) {
    var n = { layer: QO(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function cf(e, t) {
  var r = eS(e, t);
  window.dispatchEvent(r);
}
var tS = function (t) {
  var r = Number(t);
  y.useEffect(
    function () {
      return (
        cf(XO, r),
        function () {
          cf(ZO, r);
        }
      );
    },
    [r],
  );
};
function rS(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = YO(a);
  return (
    tS(r),
    it("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(JO, { zIndex: r }, n)
      : o
        ? E.createElement(KO, { zIndex: r }, n)
        : null
  );
}
var yi = new Set(),
  ji = null;
function lf() {
  if (!ji) {
    ji = $a.bindAll(window, [
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
    var e = Array.from(yi);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ds() {
  var e;
  ((e = ji) === null || e === void 0 || e(), (ji = null));
  var t = Array.from(yi);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function nS() {
  return $a.bindAll(window, [
    { type: "dragstart", listener: lf },
    { type: "dragenter", listener: lf },
  ]);
}
var na = null;
function iS(e) {
  return (
    na || (na = nS()),
    yi.add(e),
    e.onRegister({ isDragging: ji !== null }),
    function () {
      if ((yi.delete(e), yi.size === 0)) {
        var r;
        ((r = na) === null || r === void 0 || r(), (na = null));
      }
    }
  );
}
var wi = null;
function hi() {
  wi != null && (window.clearTimeout(wi), (wi = null));
}
function df(e, t) {
  (hi(),
    (wi = window.setTimeout(function () {
      ((wi = null), e());
    }, t)));
}
var ft = null;
function aS(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ft && ft.entry === e);
  }
  function n() {
    r() && (hi(), (ft = null));
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
        ((t = "shown"), hi());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), hi(), e.show({ isImmediate: !1 }));
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
    (ft && (hi(), ft.entry.hide({ isImmediate: !0 }), ft.entry.done(), (ft = null)),
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
    mousePosition: it("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && it("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return p;
}
function oS(e, t) {
  var r = Ky();
  return t ? "".concat(r(e)) : void 0;
}
var ff = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81o8v _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  sS = function (t) {
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
        d && y.createElement(sS, { shortcut: d }),
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
function uS(e, t) {
  var r = t.targetElement,
    n = t.tooltipPosition;
  if (n === "mouse")
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: e.clientX, y: e.clientY, width: 0, height: 0 });
      },
    };
  var i = r.getBoundingClientRect();
  if (n === "mouse-x")
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: e.clientX, y: i.top, width: 0, height: i.height });
      },
    };
  if (n === "mouse-y")
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: i.left, y: e.clientY, width: i.width, height: 0 });
      },
    };
  throw new Error("Invalid tooltip position for virtual element: ".concat(n));
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
function Dr(e) {
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
var cS = Jy.tooltip(),
  gf = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  lS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  dS = function (t) {
    return t.split("-")[0];
  };
function fS(e) {
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
    _ = h === void 0 ? Oe : h,
    b = e.onHide,
    m = b === void 0 ? Oe : b,
    O = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    k = e.hideTooltipOnMouseDown,
    j = k === void 0 ? !1 : k,
    A = e.analyticsContext,
    P = e.strategy,
    D = P === void 0 ? "fixed" : P,
    z = e.ignoreTooltipPointerEvents,
    q = z === void 0 ? !1 : z,
    G = e.isScreenReaderAnnouncementDisabled,
    Z = G === void 0 ? !1 : G,
    H = e.shortcut,
    U = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    K = U ? a : n,
    B = kl(Dr({ fn: _, action: "displayed", analyticsData: A }, gf)),
    $ = kl(Dr({ fn: m, action: "hidden", analyticsData: A }, gf)),
    T = y.useRef(null),
    ue = y.useState("hide"),
    ke = Y(ue, 2),
    ae = ke[0],
    pe = ke[1],
    ce = y.useRef(null),
    ye = y.useRef(null),
    Se = function (ne) {
      ((ye.current = ne), (ce.current = ne ? ne.firstElementChild : null));
    },
    lt = y.useCallback(function (M) {
      ce.current = M;
    }, []),
    he = li(ae),
    dt = li(B),
    Nt = li($),
    Qt = li(f),
    ze = li(O),
    be = y.useRef(!1),
    Ut = y.useCallback(function (M) {
      ((T.current = M), (be.current = !1));
    }, []),
    qt = y.useCallback(
      function () {
        T.current &&
          (be.current && Nt.current(), (T.current = null), (be.current = !1), pe("hide"));
      },
      [Nt],
    ),
    et = y.useCallback(
      function () {
        T.current && (T.current.abort(), be.current && Nt.current(), (T.current = null));
      },
      [Nt],
    );
  y.useEffect(
    function () {
      return function () {
        T.current && et();
      };
    },
    [et],
  );
  var zt = y.useRef(!1);
  y.useEffect(function () {
    return iS({
      onRegister: function (ne) {
        var Rt = ne.isDragging;
        zt.current = Rt;
      },
      onDragStart: function () {
        var ne;
        ((ne = T.current) === null || ne === void 0 || ne.requestHide({ isImmediate: !0 }),
          (zt.current = !0));
      },
      onDragEnd: function () {
        zt.current = !1;
      },
    });
  }, []);
  var Ee = y.useCallback(
      function (M) {
        var ne;
        if (!zt.current) {
          if ((T.current && !T.current.isActive() && et(), T.current && T.current.isActive())) {
            T.current.keep();
            return;
          }
          if (!(ze.current && !((ne = ze.current) !== null && ne !== void 0 && ne.call(ze)))) {
            var Rt = {
                source: M,
                delay: Qt.current,
                show: function (Sr) {
                  var Qr = Sr.isImmediate;
                  (be.current || ((be.current = !0), dt.current()),
                    pe(Qr ? "show-immediate" : "fade-in"));
                },
                hide: function (Sr) {
                  var Qr = Sr.isImmediate;
                  pe(Qr ? "hide" : "before-fade-out");
                },
                done: qt,
              },
              tr = aS(Rt);
            Ut(tr);
          }
        }
      },
      [ze, Qt, qt, Ut, et, dt],
    ),
    De = y.useCallback(
      function () {
        var M;
        (M = T.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
      },
      [T],
    );
  (Qw({ onClose: De, isDisabled: ae === "hide" || ae === "fade-out" }),
    y.useEffect(
      function () {
        if (ae === "hide") return Oe;
        ae === "before-fade-out" && pe("fade-out");
        var M = $a.bind(window, {
          type: "scroll",
          listener: function () {
            T.current && T.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return M;
      },
      [ae],
    ));
  var xe = y.useCallback(
      function () {
        j && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [j],
    ),
    tt = y.useCallback(
      function () {
        S && T.current && T.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    er = y.useCallback(
      function (M) {
        if (!(ye.current && M.target === ye.current) && !M.defaultPrevented) {
          M.preventDefault();
          var ne = U
            ? {
                type: "mouse",
                mouse: it("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : pf({ left: M.clientX, top: M.clientY }),
                clientX: M.clientX,
                clientY: M.clientY,
              }
            : { type: "keyboard" };
          Ee(ne);
        }
      },
      [U, Ee],
    ),
    Xr = y.useCallback(function (M) {
      (ye.current && M.target === ye.current) ||
        M.defaultPrevented ||
        (M.preventDefault(), T.current && T.current.requestHide({ isImmediate: !1 }));
    }, []),
    Gi = U
      ? function (M) {
          var ne;
          (ne = T.current) !== null &&
            ne !== void 0 &&
            ne.isActive() &&
            (it("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (T.current.mousePosition = pf({ left: M.clientX, top: M.clientY })),
            (T.current.mousePos = { clientX: M.clientX, clientY: M.clientY }));
        }
      : void 0,
    Hi = y.useCallback(function () {
      if (T.current && T.current.isActive()) {
        T.current.keep();
        return;
      }
    }, []),
    Wi = y.useCallback(
      function (M) {
        try {
          if (!M.target.matches(":focus-visible")) return;
        } catch {}
        Ee({ type: "keyboard" });
      },
      [Ee],
    ),
    tg = y.useCallback(function () {
      T.current && T.current.requestHide({ isImmediate: !1 });
    }, []),
    rg = y.useCallback(
      function (M) {
        M === "exiting" &&
          he.current === "fade-out" &&
          T.current &&
          T.current.finishHideAnimation();
      },
      [he],
    ),
    ng = p,
    co = ae !== "hide" && !!o,
    Au = !Z && co,
    Iu = ae !== "hide" && ae !== "fade-out",
    ig = y.useCallback(function () {
      var M;
      (M = T.current) === null || M === void 0 || M.requestHide({ isImmediate: !0 });
    }, []);
  n1({ isOpen: co && Iu, onClose: ig });
  var ju = function () {
      var ne, Rt;
      if (
        U &&
        (ne = T.current) !== null &&
        ne !== void 0 &&
        ne.mousePos &&
        ce.current &&
        it("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return uS(T.current.mousePos, { targetElement: ce.current, tooltipPosition: n });
      if (
        U &&
        (Rt = T.current) !== null &&
        Rt !== void 0 &&
        Rt.mousePosition &&
        !it("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var tr;
        return (tr = T.current) === null || tr === void 0 ? void 0 : tr.mousePosition;
      }
      return ce.current || void 0;
    },
    Zr = oS("tooltip", Au),
    lo = {
      onMouseOver: er,
      onMouseOut: Xr,
      onMouseMove: Gi,
      onMouseDown: xe,
      onClick: tt,
      onFocus: Wi,
      onBlur: tg,
    };
  v && (lo["data-testid"] = "".concat(v, "--container"));
  var Du = typeof t == "function";
  y.useEffect(
    function () {
      if (!Du) {
        var M = ce.current;
        if (!(!M || !Zr))
          return (
            M.setAttribute("aria-describedby", Zr),
            function () {
              return M.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Du, Zr],
  );
  var Tu = Au
    ? E.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: Zr },
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
          t(Dr(Dr({}, lo), {}, { "aria-describedby": Zr, ref: lt })),
          Tu,
        )
      : E.createElement(ng, re({}, lo, { ref: Se, role: "presentation" }), t, Tu),
    co
      ? E.createElement(
          rS,
          { zIndex: cS },
          E.createElement(zO, { placement: K, referenceElement: ju(), strategy: D }, function (M) {
            var ne = M.ref,
              Rt = M.style,
              tr = M.update,
              fo = M.placement,
              Sr = U ? void 0 : lS[dS(fo)];
            return E.createElement(
              Fp,
              { appear: !0 },
              Iu &&
                E.createElement(
                  b1,
                  {
                    distance: "constant",
                    entranceDirection: Sr,
                    exitDirection: Sr,
                    onFinish: rg,
                    duration: ae !== "show-immediate" ? "medium" : "none",
                  },
                  function (Qr) {
                    var ag = Qr.className;
                    return E.createElement(
                      l,
                      {
                        ref: ne,
                        className: "Tooltip ".concat(ag),
                        style: Dr(Dr({}, Rt), q && { pointerEvents: "none" }),
                        truncate: s,
                        placement: K,
                        testId: ju() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Xr,
                        onMouseOver: Hi,
                        shortcut: H,
                      },
                      typeof o == "function" ? o({ update: tr }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var vS = [
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
  fi = {
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
      b = ie(t, vS),
      m = y.useState(!1),
      O = Y(m, 2),
      w = O[0],
      S = O[1],
      k = y.useState(!1),
      j = Y(k, 2),
      A = j[0],
      P = j[1],
      D = c === l || u !== void 0,
      z = w || D || A,
      q = z && _,
      G = !_ || z || (_ && !A),
      Z = y.useCallback(
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
      U = y.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      K = y.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      B = E.createElement(
        za,
        { xcss: _f.headCellContainer, onMouseEnter: U, onMouseLeave: K, onFocus: Z, onBlur: H },
        E.createElement(
          fS,
          { content: u === fr ? p : g },
          E.createElement(
            jm,
            { onClick: s, xcss: fi.buttonWrapper, "aria-roledescription": h },
            E.createElement(
              Sa,
              { xcss: q ? fi.hideIconHeaderWrapper : fi.visibleHeaderWrapper },
              E.createElement("span", { className: R([_f.text]) }, r),
            ),
            G &&
              E.createElement(
                Sa,
                { xcss: z ? fi.sortIconVisibleWrapper : fi.sortIconHiddenWrapper },
                u === fr
                  ? E.createElement(Xw, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(Kw, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      $w,
      re(
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
  pS = ["isRanking", "refHeight", "refWidth"];
function hS(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, rh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var gS = (function (e) {
    function t() {
      return (fe(this, t), hS(this, t, arguments));
    }
    return (
      Ue(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.isRanking;
            n.refHeight;
            var a = n.refWidth,
              o = ie(n, pS),
              u = L_(i, a);
            return E.createElement(th, re({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(E.Component),
  _S = Gw(gS),
  bS = ["cells"],
  mS = [
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
function yS(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, nh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var wS = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = yS(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ue(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            ba(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              ba(n.sortKey, n.head);
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
            var g = d ? _S : th,
              f = a.cells,
              h = ie(a, bS);
            return E.createElement(
              zw,
              re({}, h, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (_, b) {
                  var m = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    w = _.colSpan,
                    S = _.content,
                    k = _.descendingSortTooltip,
                    j = _.isIconOnlyHeader,
                    A = _.isSortable,
                    P = _.key,
                    D = _.shouldTruncate,
                    z = _.testId,
                    q = _.width,
                    G = ie(_, mS),
                    Z = "head-cell-".concat(b),
                    H = function () {
                      (n.setState({ activeSortButtonId: Z }), A && c(_)());
                    };
                  return E.createElement(
                    g,
                    re(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: j,
                        isSortable: !!A,
                        isRanking: l,
                        key: P || b,
                        headCellId: Z,
                        activeSortButtonId: v,
                        onClick: H,
                        testId: z || p,
                        shouldTruncate: D,
                        sortOrder: P === o ? u : void 0,
                        width: q,
                        ascendingSortTooltip: m,
                        descendingSortTooltip: k,
                        buttonAriaRoleDescription: O,
                      },
                      G,
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
  OS = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function SS(e) {
  switch (e) {
    case wa:
      return fr;
    case fr:
      return wa;
    default:
      return e;
  }
}
var ES = function (t) {
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
      O = m === void 0 ? Oe : m,
      w = t.onSort,
      S = w === void 0 ? Oe : w,
      k = t.page,
      j = k === void 0 ? 1 : k,
      A = t.emptyView,
      P = t.isRankable,
      D = P === void 0 ? !1 : P,
      z = t.isRankingDisabled,
      q = z === void 0 ? !1 : z,
      G = t.onRankStart,
      Z = G === void 0 ? Oe : G,
      H = t.onRankEnd,
      U = H === void 0 ? Oe : H,
      K = t.loadingSpinnerSize,
      B = t.paginationi18n,
      $ =
        B === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : B,
      T = y.useState(!1),
      ue = Y(T, 2),
      ke = ue[0],
      ae = ue[1],
      pe = y.useRef(null),
      ce = ki({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      ye = ki({
        fn: U,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    y.useEffect(
      function () {
        (ba(o, n), F_(n));
      },
      [o, n],
    );
    var Se = function (xe) {
        return function () {
          var tt = xe.key;
          if (tt) {
            if (ce && D && tt === o && u === wa) {
              ce({ key: null, sortOrder: null, item: xe });
              return;
            }
            var er = tt !== o ? fr : SS(u);
            ce && ce({ key: tt, item: xe, sortOrder: er });
          }
        };
      },
      lt = function (xe, tt) {
        O(xe, tt);
      },
      he = function (xe) {
        (ae(!0), Z(xe));
      },
      dt = function (xe) {
        (ae(!1), ye(xe));
      },
      Nt = function () {
        return K || (Lv(a || [], j, b).length > 2 ? Oa : tb);
      },
      Qt = function () {
        return g ? E.createElement(sb, { testId: l }) : A && E.createElement(ub, { testId: l }, A);
      },
      ze = a && a.length,
      be,
      Ut = !1;
    (d && Number.isInteger(d) && b && ze && ze <= d
      ? ((be = Math.ceil(d / b)), (Ut = !0))
      : (be = ze && b ? Math.ceil(ze / b) : 0),
      (be = be < 1 ? 1 : be));
    var qt = j > be ? be : j,
      et = !!ze,
      zt = Nt(),
      Ee = Qt();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        Yv,
        {
          isLoading: g && et,
          spinnerSize: zt,
          targetRef: function () {
            return pe.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          ib,
          { isFixedSize: h, "aria-label": p, hasDataRow: et, testId: l, isLoading: g },
          !!r && E.createElement(ab, null, r),
          n &&
            E.createElement(wS, {
              head: n,
              onSort: Se,
              sortKey: o,
              sortOrder: u,
              isRanking: ke,
              isRankable: D,
              testId: l,
            }),
          et &&
            E.createElement(xS, {
              ref: pe,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: b,
              page: qt,
              isFixedSize: h || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: Ut,
              testId: l,
              isRankable: D,
              isRanking: ke,
              onRankStart: he,
              onRankEnd: dt,
              isRankingDisabled: q || g || !1,
            }),
        ),
      ),
      be <= 1
        ? null
        : E.createElement(
            ob,
            { testId: l },
            E.createElement(Nw, {
              value: qt,
              onChange: lt,
              total: be,
              i18n: $,
              isDisabled: g,
              testId: l,
            }),
          ),
      !et &&
        Ee &&
        E.createElement(Kv, { isLoading: g, spinnerSize: Oa, testId: l, loadingLabel: s }, Ee),
    );
  },
  kS = y.lazy(function () {
    return Rv(
      () => import("./body-R_CFuef8.js"),
      __vite__mapDeps([2, 3, 1, 4, 5]),
      import.meta.url,
    );
  }),
  xS = y.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ie(t, OS),
      l = i && !c.sortKey,
      d = y.useState(!1),
      p = Y(d, 2),
      v = p[0],
      g = p[1];
    y.useEffect(
      function () {
        l && g(!0);
      },
      [l],
    );
    var f = E.createElement(Sb, re({ ref: r }, c));
    return l && v
      ? E.createElement(
          kb,
          { fallback: f },
          E.createElement(
            y.Suspense,
            { fallback: f },
            E.createElement(
              kS,
              re({ ref: r }, c, {
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
function RS(e, t, r) {
  return (
    (t = X(t)),
    Ne(e, ih() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
      (r = RS(this, t, [].concat(i))),
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
        var p = B_(o, c, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    Ue(t, e),
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
            j = s.label;
          return E.createElement(ES, {
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
            label: j,
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
  onSetPage: Oe,
  onSort: Oe,
  rowsPerPage: 1 / 0,
});
const PS = (e, t, r) => {
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
  ah = (e, t, r) => ({ cells: PS(e, t, r) });
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
var CS = {};
function Ka() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : CS;
}
var oh = Object.assign,
  xa = Object.getOwnPropertyDescriptor,
  mt = Object.defineProperty,
  Ja = Object.prototype,
  Ns = [];
Object.freeze(Ns);
var sh = {};
Object.freeze(sh);
var AS = typeof Proxy < "u",
  IS = Object.toString();
function uh() {
  AS || W("Proxy not available");
}
function ch(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Mr = function () {};
function st(e) {
  return typeof e == "function";
}
function pr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ya(e) {
  return e !== null && typeof e == "object";
}
function Jt(e) {
  if (!Ya(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === IS;
}
function lh(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Xa(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function dh(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function mr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ya(n) && n[r] === !0;
    }
  );
}
function Kr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function jS(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function jt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var fh = typeof Object.getOwnPropertySymbols < "u";
function DS(e) {
  var t = Object.keys(e);
  if (!fh) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ja.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Za =
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
function Mt(e, t) {
  return Ja.hasOwnProperty.call(e, t);
}
var TS =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Za(t).forEach(function (n) {
        r[n] = xa(t, n);
      }),
      r
    );
  };
function Me(e, t) {
  return !!(e & t);
}
function Fe(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function bf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function MS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, LS(n.key), n));
  }
}
function Jr(e, t, r) {
  return (t && MS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Fr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = BS(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hr() {
  return (
    (hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    hr.apply(null, arguments)
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
function FS(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function LS(e) {
  var t = FS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BS(e, t) {
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
    if (qi(n)) return e.decorate_20223_(r, n);
    Ui(r, n, e);
  }
  return Object.assign(t, e);
}
function Ui(e, t, r) {
  (Mt(e, gt) || Xa(e, gt, hr({}, e[gt])), GS(r) || (e[gt][t] = r));
}
function NS(e) {
  return (Mt(e, gt) || Xa(e, gt, hr({}, e[gt])), e[gt]);
}
function qi(e) {
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
        (this.lowestObserverState_ = J.NOT_TRACKING_),
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
        (We(), Ih(this), Ke());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Jr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
Zt.isBeingObservedMask_ = 1;
Zt.isPendingUnobservationMask_ = 2;
Zt.diffValueMask_ = 4;
var Ou = mr("Atom", Zt);
function hh(e, t, r) {
  (t === void 0 && (t = Mr), r === void 0 && (r = Mr));
  var n = new Zt(e);
  return (t !== Mr && YE(n, t), r !== Mr && Fh(n, r), n);
}
function US(e, t) {
  return Kh(e, t);
}
function qS(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ra = { structural: US, default: qS };
function gr(e, t, r) {
  return Uh(e)
    ? e
    : Array.isArray(e)
      ? le.array(e, { name: r })
      : Jt(e)
        ? le.object(e, void 0, { name: r })
        : Kr(e)
          ? le.map(e, { name: r })
          : jt(e)
            ? le.set(e, { name: r })
            : typeof e == "function" && !Gr(e) && !Ti(e)
              ? lh(e)
                ? Hr(e)
                : Di(r, e)
              : e;
}
function zS(e, t, r) {
  if (e == null || oo(e) || ao(e) || wr(e) || ht(e)) return e;
  if (Array.isArray(e)) return le.array(e, { name: r, deep: !1 });
  if (Jt(e)) return le.object(e, void 0, { name: r, deep: !1 });
  if (Kr(e)) return le.map(e, { name: r, deep: !1 });
  if (jt(e)) return le.set(e, { name: r, deep: !1 });
}
function Qa(e) {
  return e;
}
function $S(e, t) {
  return Kh(e, t) ? t : e;
}
var VS = "override";
function GS(e) {
  return e.annotationType_ === VS;
}
function zi(e, t) {
  return { annotationType_: e, options_: t, make_: HS, extend_: WS, decorate_20223_: KS };
}
function HS(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Gr(r.value)) return 1;
  var a = gh(e, this, t, r, !1);
  return (mt(n, t, a), 2);
}
function WS(e, t, r, n) {
  var i = gh(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function KS(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, p, v;
      return _r(
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
        Gr(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Gr(e) || (e = o(e)),
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
  W(
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
function JS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function gh(e, t, r, n, i) {
  var a, o, u, s, c, l, d;
  (i === void 0 && (i = C.safeDescriptors), JS(e, t, r, n));
  var p = n.value;
  if ((a = t.options_) != null && a.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: _r(
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
  return { annotationType_: e, options_: t, make_: YS, extend_: XS, decorate_20223_: ZS };
}
function YS(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!Mt(e.target_, t) || !Ti(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ti(r.value)) return 1;
  var a = bh(e, this, t, r, !1, !1);
  return (mt(n, t, a), 2);
}
function XS(e, t, r, n) {
  var i,
    a = bh(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function ZS(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    Ti(e) || (e = Hr(e)),
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
function QS(e, t, r, n) {
  (t.annotationType_, n.value);
}
function bh(e, t, r, n, i, a) {
  (a === void 0 && (a = C.safeDescriptors), QS(e, t, r, n));
  var o = n.value;
  if ((Ti(o) || (o = Hr(o)), i)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function Su(e, t) {
  return { annotationType_: e, options_: t, make_: eE, extend_: tE, decorate_20223_: rE };
}
function eE(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function tE(e, t, r, n) {
  return (
    nE(e, this, t, r),
    e.defineComputedProperty_(t, hr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function rE(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Yr(this)[L],
        o = hr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new ut(o)));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function nE(e, t, r, n) {
  (t.annotationType_, n.get);
}
function eo(e, t) {
  return { annotationType_: e, options_: t, make_: iE, extend_: aE, decorate_20223_: oE };
}
function iE(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function aE(e, t, r, n) {
  var i, a;
  return (
    sE(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : gr,
      n,
    )
  );
}
function oE(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = Yr(u)[L],
      p = new dr(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : gr,
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
function sE(e, t, r, n) {
  t.annotationType_;
}
var uE = "true",
  cE = mh();
function mh(e) {
  return { annotationType_: uE, options_: e, make_: lE, extend_: dE, decorate_20223_: fE };
}
function lE(e, t, r, n) {
  var i, a;
  if (r.get) return to.make_(e, t, r, n);
  if (r.set) {
    var o = Gr(r.set) ? r.set : _r(t.toString(), r.set);
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
        c = (s = this.options_) != null && s.autoBind ? Hr.bound : Hr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? Di.bound : Di;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? le.ref : le;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function dE(e, t, r, n) {
  var i, a;
  if (r.get) return to.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: C.safeDescriptors ? e.isPlainObject_ : !0, set: _r(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? le.ref : le;
  return u.extend_(e, t, r, n);
}
function fE(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var vE = "observable",
  pE = "observable.ref",
  hE = "observable.shallow",
  gE = "observable.struct",
  yh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(yh);
function ia(e) {
  return e || yh;
}
var qs = eo(vE),
  _E = eo(pE, { enhancer: Qa }),
  bE = eo(hE, { enhancer: zS }),
  mE = eo(gE, { enhancer: $S }),
  wh = yt(qs);
function aa(e) {
  return e.deep === !0 ? gr : e.deep === !1 ? Qa : wE(e.defaultDecorator);
}
function yE(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : mh(e)) : void 0;
}
function wE(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : gr;
}
function Oh(e, t, r) {
  if (qi(t)) return qs.decorate_20223_(e, t);
  if (pr(t)) {
    Ui(e, t, qs);
    return;
  }
  return Uh(e)
    ? e
    : Jt(e)
      ? le.object(e, t, r)
      : Array.isArray(e)
        ? le.array(e, t)
        : Kr(e)
          ? le.map(e, t)
          : jt(e)
            ? le.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : le.box(e, t);
}
oh(Oh, wh);
var OE = {
    box: function (t, r) {
      var n = ia(r);
      return new dr(t, aa(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = ia(r);
      return (C.useProxies === !1 || n.proxy === !1 ? yk : lk)(t, aa(n), n.name);
    },
    map: function (t, r) {
      var n = ia(r);
      return new zh(t, aa(n), n.name);
    },
    set: function (t, r) {
      var n = ia(r);
      return new $h(t, aa(n), n.name);
    },
    object: function (t, r, n) {
      return Or(function () {
        return ek(C.useProxies === !1 || n?.proxy === !1 ? Yr({}, n) : sk({}, n), t, r);
      });
    },
    ref: yt(_E),
    shallow: yt(bE),
    deep: wh,
    struct: yt(mE),
  },
  le = oh(Oh, OE),
  Sh = "computed",
  SE = "computed.struct",
  zs = Su(Sh),
  EE = Su(SE, { equals: Ra.structural }),
  to = function (t, r) {
    if (qi(r)) return zs.decorate_20223_(t, r);
    if (pr(r)) return Ui(t, r, zs);
    if (Jt(t)) return yt(Su(Sh, t));
    var n = Jt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new ut(n));
  };
Object.assign(to, zs);
to.struct = yt(EE);
var mf,
  yf,
  Pa = 0,
  kE = 1,
  xE =
    (mf = (yf = xa(function () {}, "name")) == null ? void 0 : yf.configurable) != null ? mf : !1,
  wf = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function _r(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return RE(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    xE && ((wf.value = e), mt(i, "name", wf)),
    i
  );
}
function RE(e, t, r, n, i) {
  var a = PE(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    CE(a);
  }
}
function PE(e, t, r, n) {
  var i = !1,
    a = 0,
    o = C.trackingDerivation,
    u = !t || !o;
  We();
  var s = C.allowStateChanges;
  u && (yr(), (s = ro(!0)));
  var c = Eu(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: kE++,
      parentActionId_: Pa,
    };
  return ((Pa = l.actionId_), l);
}
function CE(e) {
  (Pa !== e.actionId_ && W(30),
    (Pa = e.parentActionId_),
    e.error_ !== void 0 && (C.suppressReactionErrors = !0),
    no(e.prevAllowStateChanges_),
    Oi(e.prevAllowStateReads_),
    Ke(),
    e.runAsAction_ && Ft(e.prevDerivation_),
    (C.suppressReactionErrors = !1));
}
function AE(e, t) {
  var r = ro(e);
  try {
    return t();
  } finally {
    no(r);
  }
}
function ro(e) {
  var t = C.allowStateChanges;
  return ((C.allowStateChanges = e), t);
}
function no(e) {
  C.allowStateChanges = e;
}
var dr = (function (e) {
    function t(n, i, a, o, u) {
      var s;
      return (
        a === void 0 && (a = "ObservableValue"),
        u === void 0 && (u = Ra.default),
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
        if (Ge(this)) {
          var a = He(this, { object: this, type: wt, newValue: i });
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
          at(this) && ot(this, { type: wt, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return $i(this, i);
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
          Vi(this, i)
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
  ut = (function () {
    function e(r) {
      ((this.dependenciesState_ = J.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Aa(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Ca.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = _r("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? Ra.structural : Ra.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        ME(this);
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
          C.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          $s(this) &&
            (this.warnAboutUntrackedRead_(), We(), (this.value_ = this.computeValue_(!1)), Ke());
        else if ((Ah(this), $s(this))) {
          var n = C.trackingContext;
          (this.keepAlive_ && !n && (C.trackingContext = this),
            this.trackAndCompute() && TE(this),
            (C.trackingContext = n));
        }
        var i = this.value_;
        if (va(i)) throw i.cause;
        return i;
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
          i = this.dependenciesState_ === J.NOT_TRACKING_,
          a = this.computeValue_(!0),
          o = i || va(n) || va(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = ro(!1),
          a;
        if (n) a = Eh(this, this.derivation, this.scope_);
        else if (C.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new Aa(o);
          }
        return (no(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Vs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          u = void 0;
        return GE(function () {
          var s = a.get();
          if (!o || i) {
            var c = yr();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: wt,
              object: a,
              newValue: s,
              oldValue: u,
            }),
              Ft(c));
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
      Jr(e, [
        {
          key: "isComputing",
          get: function () {
            return Me(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Me(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
ut.isComputingMask_ = 1;
ut.isRunningSetterMask_ = 2;
ut.isBeingObservedMask_ = 4;
ut.isPendingUnobservationMask_ = 8;
ut.diffValueMask_ = 16;
var io = mr("ComputedValue", ut),
  J;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(J || (J = {}));
var Ca;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Ca || (Ca = {}));
var Aa = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function va(e) {
  return e instanceof Aa;
}
function $s(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_: {
      for (var t = Eu(!0), r = yr(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (io(o)) {
          if (C.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Ft(r), Oi(t), !0);
            }
          if (e.dependenciesState_ === J.STALE_) return (Ft(r), Oi(t), !0);
        }
      }
      return (xh(e), Ft(r), Oi(t), !1);
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
      a = new Aa(o);
    }
  return (C.inBatch--, (C.trackingDerivation = i), IE(e), Oi(n), a);
}
function IE(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = J.UP_TO_DATE_,
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
    c.diffValue === 1 && ((c.diffValue = 0), DE(c, e));
  }
  n !== J.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Vs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Ph(t[r], e);
  e.dependenciesState_ = J.NOT_TRACKING_;
}
function kh(e) {
  var t = yr();
  try {
    return e();
  } finally {
    Ft(t);
  }
}
function yr() {
  var e = C.trackingDerivation;
  return ((C.trackingDerivation = null), e);
}
function Ft(e) {
  C.trackingDerivation = e;
}
function Eu(e) {
  var t = C.allowStateReads;
  return ((C.allowStateReads = e), t);
}
function Oi(e) {
  C.allowStateReads = e;
}
function xh(e) {
  if (e.dependenciesState_ !== J.UP_TO_DATE_) {
    e.dependenciesState_ = J.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = J.UP_TO_DATE_;
  }
}
var pa = function () {
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
  ha = !0,
  Rh = !1,
  C = (function () {
    var e = Ka();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ha = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new pa().version && (ha = !1),
      ha
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new pa()))
        : (setTimeout(function () {
            Rh || W(35);
          }, 1),
          new pa())
    );
  })();
function jE() {
  if (((C.pendingReactions.length || C.inBatch || C.isRunningReactions) && W(36), (Rh = !0), ha)) {
    var e = Ka();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (C = new pa()));
  }
}
function DE(e, t) {
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
function We() {
  C.inBatch++;
}
function Ke() {
  if (--C.inBatch === 0) {
    jh();
    for (var e = C.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ut && r.suspend_()));
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
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === J.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = J.STALE_));
    }));
}
function TE(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.POSSIBLY_STALE_
        ? (t.dependenciesState_ = J.STALE_)
        : t.dependenciesState_ === J.UP_TO_DATE_ && (e.lowestObserverState_ = J.UP_TO_DATE_);
    }));
}
function ME(e) {
  e.lowestObserverState_ === J.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = J.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.UP_TO_DATE_ &&
        ((t.dependenciesState_ = J.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = J.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Ca.NONE),
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
        (We(), (this.isScheduled = !1));
        var n = C.trackingContext;
        if (((C.trackingContext = this), $s(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((C.trackingContext = n), Ke());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (We(), (this.isRunning = !0));
        var i = C.trackingContext;
        C.trackingContext = this;
        var a = Eh(this, n, void 0);
        ((C.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Vs(this),
          va(a) && this.reportExceptionInDerivation_(a.cause),
          Ke());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (We(), Vs(this), Ke()));
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
    Jr(e, [
      {
        key: "isDisposed",
        get: function () {
          return Me(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Me(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Me(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Me(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Fe(this.flags_, e.diffValueMask_, n === 1);
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
var FE = 100,
  Gs = function (t) {
    return t();
  };
function jh() {
  C.inBatch > 0 || C.isRunningReactions || Gs(LE);
}
function LE() {
  C.isRunningReactions = !0;
  for (var e = C.pendingReactions, t = 0; e.length > 0; ) {
    ++t === FE && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  C.isRunningReactions = !1;
}
var Ia = mr("Reaction", Et);
function BE(e) {
  var t = Gs;
  Gs = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Si() {
  return !1;
}
function NE(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var Dh = "action",
  UE = "action.bound",
  Th = "autoAction",
  qE = "autoAction.bound",
  zE = "<unnamed action>",
  Hs = zi(Dh),
  $E = zi(UE, { bound: !0 }),
  Ws = zi(Th, { autoAction: !0 }),
  VE = zi(qE, { autoAction: !0, bound: !0 });
function Mh(e) {
  var t = function (n, i) {
    if (st(n)) return _r(n.name || zE, n, e);
    if (st(i)) return _r(n, i, e);
    if (qi(i)) return (e ? Ws : Hs).decorate_20223_(n, i);
    if (pr(i)) return Ui(n, i, e ? Ws : Hs);
    if (pr(n)) return yt(zi(e ? Th : Dh, { name: n, autoAction: e }));
  };
  return t;
}
var Je = Mh(!1);
Object.assign(Je, Hs);
var Di = Mh(!0);
Object.assign(Di, Ws);
Je.bound = yt($E);
Di.bound = yt(VE);
function Gr(e) {
  return st(e) && e.isMobxAction === !0;
}
function GE(e, t) {
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
    var c = WE(t),
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
var HE = function (t) {
  return t();
};
function WE(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : HE;
}
var KE = "onBO",
  JE = "onBUO";
function YE(e, t, r) {
  return Lh(KE, e, t, r);
}
function Fh(e, t, r) {
  return Lh(JE, e, t, r);
}
function Lh(e, t, r, n) {
  var i = Ta(t),
    a = st(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var u = i[o];
      u && (u.delete(a), u.size === 0 && delete i[o]);
    }
  );
}
var XE = "never",
  oa = "always",
  ZE = "observed";
function QE(e) {
  e.isolateGlobalState === !0 && jE();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (C.useProxies = t === oa ? !0 : t === XE ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (C.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === oa ? oa : r === ZE;
    ((C.enforceActions = n), (C.allowStateChanges = !(n === !0 || n === oa)));
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
    e.reactionScheduler && BE(e.reactionScheduler));
}
function ek(e, t, r, n) {
  var i = TS(t);
  return (
    Or(function () {
      var a = Yr(e, n)[L];
      Za(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function tk(e, t) {
  return Bh(Ta(e, t));
}
function Bh(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = rk(e.observing_).map(Bh)),
    t
  );
}
function rk(e) {
  return Array.from(new Set(e));
}
var nk = 0;
function Nh() {
  this.message = "FLOW_CANCELLED";
}
Nh.prototype = Object.create(Error.prototype);
var fs = _h("flow"),
  ik = _h("flow.bound", { bound: !0 }),
  Hr = Object.assign(function (t, r) {
    if (qi(r)) return fs.decorate_20223_(t, r);
    if (pr(r)) return Ui(t, r, fs);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var u = this,
          s = arguments,
          c = ++nk,
          l = Je(i + " - runid: " + c + " - init", n).apply(u, s),
          d,
          p = void 0,
          v = new Promise(function (g, f) {
            var h = 0;
            d = f;
            function _(O) {
              p = void 0;
              var w;
              try {
                w = Je(i + " - runid: " + c + " - yield " + h++, l.next).call(l, O);
              } catch (S) {
                return f(S);
              }
              m(w);
            }
            function b(O) {
              p = void 0;
              var w;
              try {
                w = Je(i + " - runid: " + c + " - yield " + h++, l.throw).call(l, O);
              } catch (S) {
                return f(S);
              }
              m(w);
            }
            function m(O) {
              if (st(O?.then)) {
                O.then(m, f);
                return;
              }
              return O.done ? g(O.value) : ((p = Promise.resolve(O.value)), p.then(_, b));
            }
            _(void 0);
          });
        return (
          (v.cancel = Je(i + " - runid: " + c + " - cancel", function () {
            try {
              p && Of(p);
              var g = l.return(void 0),
                f = Promise.resolve(g.value);
              (f.then(Mr, Mr), Of(f), d(new Nh()));
            } catch (h) {
              d(h);
            }
          })),
          v
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, fs);
Hr.bound = yt(ik);
function Of(e) {
  st(e.cancel) && e.cancel();
}
function Ti(e) {
  return e?.isMobXFlow === !0;
}
function ak(e, t) {
  return e ? oo(e) || !!e[L] || Ou(e) || Ia(e) || io(e) : !1;
}
function Uh(e) {
  return ak(e);
}
function Dt(e, t) {
  (t === void 0 && (t = void 0), We());
  try {
    return e.apply(t);
  } finally {
    Ke();
  }
}
function Tr(e) {
  return e[L];
}
var ok = {
  has: function (t, r) {
    return Tr(t).has_(r);
  },
  get: function (t, r) {
    return Tr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return pr(r) ? ((i = Tr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return pr(r) ? ((n = Tr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = Tr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return Tr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function sk(e, t) {
  var r, n;
  return (
    uh(),
    (e = Yr(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, ok))
  );
}
function Ge(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function $i(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    ch(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function He(e, t) {
  var r = yr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, a = n.length;
      i < a && ((t = n[i](t)), t && !t.type && W(14), !!t);
      i++
    );
    return t;
  } finally {
    Ft(r);
  }
}
function at(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Vi(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    ch(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ot(e, t) {
  var r = yr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Ft(r);
  }
}
function ku(e, t, r) {
  return (
    Or(function () {
      var n,
        i = Yr(e, r)[L];
      ((n = t) != null || (t = NS(e)),
        Za(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var Sf = "splice",
  wt = "update",
  uk = 1e4,
  ck = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Mt(ja, r)
              ? ja[r]
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
      W(15);
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
        return $i(this, n);
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
          Vi(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && W("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
          if (n > i) {
            for (var a = new Array(n - i), o = 0; o < n - i; o++) a[o] = void 0;
            this.spliceWithArray_(i, 0, a);
          } else this.spliceWithArray_(n, i - n);
      }),
      (t.updateArrayLength_ = function (n, i) {
        (n !== this.lastKnownLength_ && W(16),
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
          Ge(this))
        ) {
          var s = He(this, { object: this.proxy_, type: Sf, index: n, removedCount: i, added: a });
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
        if (a.length < uk) {
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
        var o = !this.owned_ && Si(),
          u = at(this),
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
        (this.atom_.reportChanged(), u && ot(this, s));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && Si(),
          u = at(this),
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
        (this.atom_.reportChanged(), u && ot(this, s));
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
        if ((this.legacyMode_ && n > a.length && W(17, n, a.length), n < a.length)) {
          this.atom_;
          var o = a[n];
          if (Ge(this)) {
            var u = He(this, { type: wt, object: this.proxy_, index: n, newValue: i });
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
function lk(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    uh(),
    Or(function () {
      var i = new xu(r, t, n, !1);
      dh(i.values_, L, i);
      var a = new Proxy(i.values_, ck);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var ja = {
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
    return (C.trackingDerivation && W(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    C.trackingDerivation && W(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[L],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
oe("at", qe);
oe("concat", qe);
oe("flat", qe);
oe("includes", qe);
oe("indexOf", qe);
oe("join", qe);
oe("lastIndexOf", qe);
oe("slice", qe);
oe("toString", qe);
oe("toLocaleString", qe);
oe("toSorted", qe);
oe("toSpliced", qe);
oe("with", qe);
oe("every", ct);
oe("filter", ct);
oe("find", ct);
oe("findIndex", ct);
oe("findLast", ct);
oe("findLastIndex", ct);
oe("flatMap", ct);
oe("forEach", ct);
oe("map", ct);
oe("some", ct);
oe("toReversed", ct);
oe("reduce", qh);
oe("reduceRight", qh);
function oe(e, t) {
  typeof Array.prototype[e] == "function" && (ja[e] = t(e));
}
function qe(e) {
  return function () {
    var t = this[L];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ct(e) {
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
var dk = mr("ObservableArrayAdministration", xu);
function ao(e) {
  return Ya(e) && dk(e[L]);
}
var fk = {},
  Wt = "add",
  Da = "delete",
  zh = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = gr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = fk),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        st(Map) || W(18),
        Or(function () {
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
          var o = (a = new dr(this.has_(n), Qa, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            Fh(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (Ge(this)) {
          var o = He(this, { type: a ? wt : Wt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, Ge(this))) {
          var a = He(this, { type: Da, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = Si(),
            u = at(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Da,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Dt(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            u && ot(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== C.UNCHANGED)) {
          var o = Si(),
            u = at(this),
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
          (a.setNewValue_(i), u && ot(this, s));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Dt(function () {
            var c,
              l = new dr(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = Si(),
          u = at(this),
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
        u && ot(this, s);
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
        for (var a = Fr(this), o; !(o = a()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(i, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          wr(n) && (n = new Map(n)),
          Dt(function () {
            Jt(n)
              ? DS(n).forEach(function (a) {
                  return i.set(a, n[a]);
                })
              : Array.isArray(n)
                ? n.forEach(function (a) {
                    var o = a[0],
                      u = a[1];
                    return i.set(o, u);
                  })
                : Kr(n)
                  ? (jS(n) || W(19, n),
                    n.forEach(function (a, o) {
                      return i.set(o, a);
                    }))
                  : n != null && W(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        Dt(function () {
          kh(function () {
            for (var i = Fr(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Dt(function () {
            for (
              var a = vk(n), o = new Map(), u = !1, s = Fr(i.data_.keys()), c;
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
            for (var v = Fr(a.entries()), g; !(g = v()).done; ) {
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
        return Vi(this, n);
      }),
      (t.intercept_ = function (n) {
        return $i(this, n);
      }),
      Jr(e, [
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
  wr = mr("ObservableMap", zh);
function Ef(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), Pu(e));
}
function vk(e) {
  if (Kr(e) || wr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Jt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var pk = {},
  $h = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = gr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = pk),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        st(Set) || W(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, i);
        }),
        Or(function () {
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
        Dt(function () {
          kh(function () {
            for (var i = Fr(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = Fr(this), o; !(o = a()).done; ) {
          var u = o.value;
          n.call(i, u, u, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, Ge(this))) {
          var a = He(this, { type: Wt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Dt(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            u = at(this),
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
          u && ot(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (Ge(this)) {
          var a = He(this, { type: Da, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = at(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Da,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Dt(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
            }),
            u && ot(this, s),
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
        if (jt(n) && !ht(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (jt(n) && !ht(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (jt(n) && !ht(n)) return n.symmetricDifference(this);
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
        if (jt(n) && !ht(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          ht(n) && (n = new Set(n)),
          Dt(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : jt(n)
                ? (i.clear(),
                  n.forEach(function (a) {
                    return i.add(a);
                  }))
                : n != null && W("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, i) {
        return Vi(this, n);
      }),
      (t.intercept_ = function (n) {
        return $i(this, n);
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
      Jr(e, [
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
  ht = mr("ObservableSet", $h);
function kf(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), Pu(e));
}
var xf = Object.create(null),
  Rf = "remove",
  Vh = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = cE),
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
        if (a instanceof ut) return (a.set(i), !0);
        if (Ge(this)) {
          var o = He(this, { type: wt, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== C.UNCHANGED)) {
          var u = at(this),
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
          (a.setNewValue_(i), u && ot(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (C.trackingDerivation && !Mt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          Mt(this.target_, n)
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
            ((i = new dr(n in this.target_, Qa, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[gt]) != null && a[n]) return;
            W(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ja; ) {
            var u = xa(o, n);
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
          We();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ge(this)) {
            var u = He(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = hr({}, i, { value: s }));
          }
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else mt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Ke();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          We();
          var u = this.delete_(n);
          if (!u) return u;
          if (Ge(this)) {
            var s = He(this, {
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
          var d = new dr(i, a, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Ke();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          We();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ge(this)) {
            var u = He(this, {
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
          (this.values_.set(n, new ut(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Ke();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !Mt(this.target_, n))) return !0;
        if (Ge(this)) {
          var a = He(this, { object: this.proxy_ || this.target_, name: n, type: Rf });
          if (!a) return null;
        }
        try {
          var o;
          We();
          var u = at(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = xa(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof dr && (l = c.value_), Ih(c)),
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
            u && ot(this, p);
          }
        } finally {
          Ke();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return Vi(this, n);
      }),
      (t.intercept_ = function (n) {
        return $i(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = at(this),
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
          o && ot(this, s);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Za(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Yr(e, t) {
  var r;
  if (Mt(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Vh(e, new Map(), String(n), yE(t));
  return (Xa(e, L, i), e);
}
var hk = mr("ObservableObjectAdministration", Vh);
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
function oo(e) {
  return Ya(e) ? hk(e[L]) : !1;
}
function Cf(e, t, r) {
  var n;
  (n = e.target_[gt]) == null || delete n[r];
}
var gk = Hh(0),
  _k = (function () {
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
function bk(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
bk(Gh, Array.prototype);
var Ru = (function (e) {
  function t(n, i, a, o) {
    var u;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      Or(function () {
        var s = new xu(a, i, o, !0);
        ((s.proxy_ = u),
          dh(u, L, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          _k && Object.defineProperty(u, "0", gk));
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
          return ao(u) ? u.slice() : u;
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
    Jr(t, [
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
Object.entries(ja).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Xa(Ru.prototype, t, r);
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
function mk(e) {
  mt(Ru.prototype, "" + e, Hh(e));
}
function Wh(e) {
  if (e > vs) {
    for (var t = vs; t < e + 100; t++) mk(t);
    vs = e;
  }
}
Wh(1e3);
function yk(e, t, r) {
  return new Ru(e, t, r);
}
function Ta(e, t) {
  if (typeof e == "object" && e !== null) {
    if (ao(e)) return (t !== void 0 && W(23), e[L].atom_);
    if (ht(e)) return e.atom_;
    if (wr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, Ks(e)), r);
    }
    if (oo(e)) {
      if (!t) return W(26);
      var n = e[L].values_.get(t);
      return (n || W(27, t, Ks(e)), n);
    }
    if (Ou(e) || io(e) || Ia(e)) return e;
  } else if (st(e) && Ia(e[L])) return e[L];
  W(28);
}
function wk(e, t) {
  if ((e || W(29), Ou(e) || io(e) || Ia(e) || wr(e) || ht(e))) return e;
  if (e[L]) return e[L];
  W(24, e);
}
function Ks(e, t) {
  var r;
  if (t !== void 0) r = Ta(e, t);
  else {
    if (Gr(e)) return e.name;
    oo(e) || wr(e) || ht(e) ? (r = wk(e)) : (r = Ta(e));
  }
  return r.name_;
}
function Or(e) {
  var t = yr(),
    r = ro(!0);
  We();
  try {
    return e();
  } finally {
    (Ke(), no(r), Ft(t));
  }
}
var Af = Ja.toString;
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
      !(st(s) && s instanceof s && st(c) && c instanceof c) &&
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
      if (!(Mt(t, g) && Js(e[g], t[g], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function If(e) {
  return ao(e) ? e.slice() : Kr(e) || wr(e) || jt(e) || ht(e) ? Array.from(e.entries()) : e;
}
var jf,
  Ok = ((jf = Ka().Iterator) == null ? void 0 : jf.prototype) || {};
function Pu(e) {
  return ((e[Symbol.iterator] = Sk), Object.assign(Object.create(Ok), e));
}
function Sk() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ka();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: NE, extras: { getDebugName: Ks }, $mobx: L });
if (!y.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!ku) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Ek(e) {
  e();
}
function kk(e) {
  (e || (e = Ek), QE({ reactionScheduler: e }));
}
function xk(e) {
  return tk(e);
}
var Rk = 1e4,
  Pk = 1e4,
  Ck = (function () {
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
            (n === void 0 && (n = Rk), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Pk));
        },
      }),
      e
    );
  })(),
  Ak = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Ck,
  Mi = new Ak(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  ps = { exports: {} },
  hs = {};
var Df;
function Ik() {
  if (Df) return hs;
  Df = 1;
  var e = br();
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
function jk() {
  return (Tf || ((Tf = 1), (ps.exports = Ik())), ps.exports);
}
var Dk = jk();
function Mf(e) {
  e.reaction = new Et("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Tk(e, t) {
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
          Mi.unregister(n),
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
  (i.reaction || (Mf(i), Mi.register(r, i, i)),
    E.useDebugValue(i.reaction, xk),
    Dk.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
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
  Mk =
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
function Fk(e, t) {
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
    return Tk(function () {
      return i(u, s);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    Mk && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = y.forwardRef(o)),
    (o = y.memo(o)),
    Bk(e, o),
    o
  );
}
var Lk = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Bk(e, t) {
  Object.keys(e).forEach(function (r) {
    Lk[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var bs;
kk(Ma.unstable_batchedUpdates);
bs = Mi.finalizeAllImmediately;
function Nk(e, t) {
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
function Uk(e, t) {
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
function qk(e, t, r) {
  var n = Uk(e, t);
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
function zk(e) {
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
        value: $k.call(this, n),
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
        Mi.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    qk(t, "componentWillUnmount", function () {
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
function $k(e) {
  var t = e.bind(this),
    r = Ys(this);
  function n() {
    r.reaction || ((r.reaction = Vk(r)), r.mounted || Mi.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = AE(!1, t);
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
function Vk(e) {
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
  return this.state !== t ? !0 : !Nk(this.props, e);
}
function so(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(y.Component, e) ||
    Object.prototype.isPrototypeOf.call(y.PureComponent, e)
      ? zk(e)
      : Fk(e)
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
function Gk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Hk = ["children"],
  Gf = E.createContext({});
function Zh(e) {
  var t = e.children,
    r = Gk(e, Hk),
    n = E.useContext(Gf),
    i = E.useRef(Zs({}, n, r)),
    a = i.current;
  return E.createElement(Gf.Provider, { value: a }, t);
}
Zh.displayName = "MobXProvider";
E.version.split(".")[0];
if (!y.Component) throw new Error("mobx-react requires React to be available");
if (!le) throw new Error("mobx-react requires mobx to be available");
var Wk = Object.defineProperty,
  Kk = Object.getOwnPropertyDescriptor,
  Bt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Kk(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Wk(t, r, i), i);
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
Bt([le], xt.prototype, "isLoading", 2);
Bt([le], xt.prototype, "users", 2);
Bt([le], xt.prototype, "duplicates", 2);
Bt([le], xt.prototype, "sort", 2);
Bt([Je.bound], xt.prototype, "saveUsers", 1);
Bt([Je.bound], xt.prototype, "saveSort", 1);
Bt([Je.bound], xt.prototype, "saveDuplicates", 1);
Bt([Je], xt.prototype, "loading", 1);
Bt([Je], xt.prototype, "stopLoading", 1);
const Jk = new xt();
var Yk = Object.defineProperty,
  Xk = Object.getOwnPropertyDescriptor,
  Qh = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Xk(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Yk(t, r, i), i);
  };
class Cu {
  constructor() {
    ((this.state = "ROOT"), ku(this));
  }
  saveState(t) {
    this.state = t;
  }
}
Qh([le], Cu.prototype, "state", 2);
Qh([Je.bound], Cu.prototype, "saveState", 1);
const Zk = new Cu();
class Qk {
  constructor() {
    ((this.usersStore = Jk), (this.stateStore = Zk));
  }
}
const eg = new Qk(),
  ex = y.createContext(eg),
  uo = () => y.useContext(ex),
  tx = so(() => {
    const { usersStore: e, stateStore: t } = uo(),
      r = ah(!0, !0, "USER"),
      n = e.users;
    return !n || n.length === 0
      ? F.jsx("div", { children: "User Table is EMPTY" })
      : F.jsx("div", {
          children: F.jsxs("div", {
            children: [
              F.jsx(wu, {
                head: r,
                onSort: async (i) => {
                  let a = { name: i.key, sortType: i.sortOrder };
                  e.loading();
                  try {
                    const o = await Tt.invoke("fetch", { sortType: a });
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
                      content: F.jsx("div", {
                        children: F.jsx("button", {
                          onClick: async () => {
                            try {
                              (e.loading(), await Tt.invoke("delete", { id: i.id }));
                              const u = await Tt.invoke("fetch", { sortType: e.sort });
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
                emptyView: F.jsx("div", { children: "User Table is EMPTY" }),
                isRankable: !0,
              }),
              F.jsx("br", {}),
              F.jsx("br", {}),
              F.jsx("button", {
                onClick: async () => {
                  e.loading();
                  try {
                    const i = await Tt.invoke("duplicate", { sortType: e.sort });
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
  rx = so(() => {
    const { usersStore: e, stateStore: t } = uo(),
      [r, n] = y.useState({}),
      i = (o) => {
        const { name: u, value: s, type: c } = o.target;
        n((l) => ({ ...l, [u]: c === "number" ? Number(s) : s }));
      },
      a = async (o) => {
        (o.preventDefault(), await Tt.invoke("create", { data: r }), e.loading());
        try {
          (e.saveUsers(await Tt.invoke("fetch", { sortType: e.sort })), t.saveState("ROOT"));
        } finally {
          e.stopLoading();
        }
      };
    return F.jsx("div", {
      children: F.jsxs("form", {
        onSubmit: a,
        children: [
          F.jsxs(
            "div",
            {
              children: [
                F.jsx("label", { htmlFor: "name", children: "Name" }),
                F.jsx("br", {}),
                F.jsx("input", { type: "text", id: "name", name: "name", onChange: i }),
                F.jsx("br", {}),
              ],
            },
            "name",
          ),
          F.jsxs(
            "div",
            {
              children: [
                F.jsx("label", { htmlFor: "email", children: "Email" }),
                F.jsx("br", {}),
                F.jsx("input", { type: "text", id: "email", name: "email", onChange: i }),
                F.jsx("br", {}),
              ],
            },
            "email",
          ),
          F.jsx("input", { type: "submit", value: "Submit" }),
        ],
      }),
    });
  }),
  nx = so(() => {
    const { usersStore: e } = uo(),
      t = ah(!0, !1, "DUPLICATE"),
      r = e.duplicates;
    return !r || r.length === 0
      ? F.jsx("div", { children: "Duplicate Table is EMPTY" })
      : F.jsx("div", {
          children: F.jsxs("div", {
            children: [
              F.jsx(wu, {
                head: t,
                onSort: async (n) => {
                  let i = { name: n.key, sortType: n.sortOrder };
                  e.loading();
                  try {
                    const a = await Tt.invoke("duplicate", { sortType: i });
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
                emptyView: F.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              F.jsx("br", {}),
              F.jsx("br", {}),
            ],
          }),
        });
  });
function ix() {
  const { usersStore: e, stateStore: t } = uo();
  if (
    (y.useEffect(() => {
      (async () => {
        try {
          const n = await Tt.invoke("fetch", { type: "USER", sortType: e.sort });
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
      return F.jsx("div", {
        children: F.jsxs("div", {
          children: [
            F.jsx("button", { onClick: () => t.saveState("ADD_USER"), children: "Add a new User" }),
            F.jsx("br", {}),
            F.jsx("br", {}),
            F.jsx(tx, {}),
          ],
        }),
      });
    case "DUPLICATE":
      return F.jsx("div", {
        children: F.jsxs("div", {
          children: [
            F.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            F.jsx("br", {}),
            F.jsx("br", {}),
            F.jsx(nx, {}),
          ],
        }),
      });
    case "ADD_USER":
      return F.jsx("div", {
        children: F.jsxs("div", {
          children: [
            F.jsx("button", { onClick: () => t.saveState("ROOT"), children: "back" }),
            F.jsx("br", {}),
            F.jsx("br", {}),
            F.jsx(rx, {}),
          ],
        }),
      });
    default:
      return F.jsxs("div", { children: ["ERROR: unsupprted state $", t.state] });
  }
}
const ax = so(ix),
  ox = document.getElementById("root"),
  sx = og.createRoot(ox),
  Hf = () => {
    sx.render(F.jsx(Zh, { ...eg, children: F.jsx(ax, {}) }));
  };
Tt.view.theme
  .enable()
  .then(() => {
    Hf();
  })
  .catch((e) => {
    (console.error(e.message), Hf());
  });
export {
  E as R,
  _b as T,
  Ue as _,
  ve as a,
  Rs as b,
  fe as c,
  Ne as d,
  X as e,
  Y as f,
  x as g,
  ie as h,
  $a as i,
  Te as j,
  re as k,
  _m as l,
  It as m,
  kt as n,
  R as o,
  hb as p,
  L_ as q,
  y as r,
  fb as s,
  Gw as w,
};
