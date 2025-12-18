const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-Ds7nV9OR.js",
      "./client-core-vendor-Dxn4qry8.js",
      "./body-DfQkMGxe.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./lodash-vendor-BPQ1tp_f.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as gr, a as Ma, c as sg } from "./react-dom-vendor--YlRhZCI.js";
import { g as Xf, r as Yt, a as Xt, b as kt, s as Ge } from "./client-core-vendor-Dxn4qry8.js";
import { r as ug } from "./lodash-vendor-BPQ1tp_f.js";
function cg(e, t) {
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
var go = { exports: {} },
  Zr = {};
var Bu;
function lg() {
  if (Bu) return Zr;
  Bu = 1;
  var e = gr(),
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
var qu;
function dg() {
  return (qu || ((qu = 1), (go.exports = lg())), go.exports);
}
var k = dg(),
  _o = {},
  Os = function (e, t) {
    return (
      (Os =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      Os(e, t)
    );
  };
function Qf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Os(e, t);
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
function Zf(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function ev(e, t, r, n) {
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
function tv(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function rv(e, t, r, n, i, a) {
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
    var h = {};
    for (var f in n) h[f] = f === "access" ? {} : n[f];
    for (var f in n.access) h.access[f] = n.access[f];
    h.addInitializer = function (_) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(o(_ || null));
    };
    var g = (0, r[v])(u === "accessor" ? { get: l.get, set: l.set } : l[s], h);
    if (u === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = o(g.get)) && (l.get = d),
        (d = o(g.set)) && (l.set = d),
        (d = o(g.init)) && i.unshift(d));
    } else (d = o(g)) && (u === "field" ? i.unshift(d) : (l[s] = d));
  }
  (c && Object.defineProperty(c, n.name, l), (p = !0));
}
function nv(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function iv(e) {
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
function sv(e, t, r, n) {
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
function uv(e, t) {
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
var La = Object.create
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
function cv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && La(t, e, r);
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
function ru(e, t) {
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
function lv() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(ru(arguments[t]));
  return e;
}
function dv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, u = a.length; o < u; o++, i++) n[i] = a[o];
  return n;
}
function fv(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Nr(e) {
  return this instanceof Nr ? ((this.v = e), this) : new Nr(e);
}
function vv(e, t, r) {
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
    return function (h) {
      return Promise.resolve(h).then(v, d);
    };
  }
  function u(v, h) {
    n[v] &&
      ((i[v] = function (f) {
        return new Promise(function (g, _) {
          a.push([v, f, g, _]) > 1 || s(v, f);
        });
      }),
      h && (i[v] = h(i[v])));
  }
  function s(v, h) {
    try {
      c(n[v](h));
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
  function p(v, h) {
    (v(h), a.shift(), a.length && s(a[0][0], a[0][1]));
  }
}
function pv(e) {
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
function hv(e) {
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
function gv(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e);
}
var fg = Object.create
    ? function (e, t) {
        Object.defineProperty(e, "default", { enumerable: !0, value: t });
      }
    : function (e, t) {
        e.default = t;
      },
  Ss = function (e) {
    return (
      (Ss =
        Object.getOwnPropertyNames ||
        function (t) {
          var r = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
          return r;
        }),
      Ss(e)
    );
  };
function _v(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = Ss(e), n = 0; n < r.length; n++) r[n] !== "default" && La(t, e, r[n]);
  return (fg(t, e), t);
}
function bv(e) {
  return e && e.__esModule ? e : { default: e };
}
function yv(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function mv(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r);
}
function wv(e, t) {
  if (t === null || (typeof t != "object" && typeof t != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Ov(e, t, r) {
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
var vg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Sv(e) {
  function t(a) {
    ((e.error = e.hasError ? new vg(a, e.error, "An error was suppressed during disposal.") : a),
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
function Ev(e, t) {
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
const pg = {
    __extends: Qf,
    __assign: ga,
    __rest: Zf,
    __decorate: ev,
    __param: tv,
    __esDecorate: rv,
    __runInitializers: nv,
    __propKey: iv,
    __setFunctionName: av,
    __metadata: ov,
    __awaiter: sv,
    __generator: uv,
    __createBinding: La,
    __exportStar: cv,
    __values: _a,
    __read: ru,
    __spread: lv,
    __spreadArrays: dv,
    __spreadArray: fv,
    __await: Nr,
    __asyncGenerator: vv,
    __asyncDelegator: pv,
    __asyncValues: hv,
    __makeTemplateObject: gv,
    __importStar: _v,
    __importDefault: bv,
    __classPrivateFieldGet: yv,
    __classPrivateFieldSet: mv,
    __classPrivateFieldIn: wv,
    __addDisposableResource: Ov,
    __disposeResources: Sv,
    __rewriteRelativeImportExtension: Ev,
  },
  hg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Ov,
        get __assign() {
          return ga;
        },
        __asyncDelegator: pv,
        __asyncGenerator: vv,
        __asyncValues: hv,
        __await: Nr,
        __awaiter: sv,
        __classPrivateFieldGet: yv,
        __classPrivateFieldIn: wv,
        __classPrivateFieldSet: mv,
        __createBinding: La,
        __decorate: ev,
        __disposeResources: Sv,
        __esDecorate: rv,
        __exportStar: cv,
        __extends: Qf,
        __generator: uv,
        __importDefault: bv,
        __importStar: _v,
        __makeTemplateObject: gv,
        __metadata: ov,
        __param: tv,
        __propKey: iv,
        __read: ru,
        __rest: Zf,
        __rewriteRelativeImportExtension: Ev,
        __runInitializers: nv,
        __setFunctionName: av,
        __spread: lv,
        __spreadArray: fv,
        __spreadArrays: dv,
        __values: _a,
        default: pg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rt = Xf(hg);
var en = {},
  zu;
function gg() {
  return (
    zu ||
      ((zu = 1),
      Object.defineProperty(en, "__esModule", { value: !0 }),
      (en.NavigationTarget = void 0),
      (en.NavigationTarget = {
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
    en
  );
}
var bo = {},
  yo = {},
  tn = {},
  rn = {},
  Uu;
function _e() {
  if (Uu) return rn;
  ((Uu = 1), Object.defineProperty(rn, "__esModule", { value: !0 }), (rn.BridgeAPIError = void 0));
  class e extends Error {}
  return ((rn.BridgeAPIError = e), rn);
}
var $u;
function se() {
  if ($u) return tn;
  (($u = 1), Object.defineProperty(tn, "__esModule", { value: !0 }), (tn.getCallBridge = void 0));
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
  return ((tn.getCallBridge = r), tn);
}
var nn = {},
  Vu;
function Fa() {
  if (Vu) return nn;
  ((Vu = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.withRateLimiter = void 0));
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
  return ((nn.withRateLimiter = t), nn);
}
var Gu;
function _g() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = se(),
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
      })(yo)),
    yo
  );
}
var Hu;
function Mi() {
  return (
    Hu ||
      ((Hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(_g(), e));
      })(bo)),
    bo
  );
}
var mo = {},
  an = {},
  wo = {},
  Wu;
function kv() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = se(),
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
              h = await u("invoke", v),
              { success: f, payload: g, error: _ } = h ?? {},
              b = { ...(f ? g : _) };
            if (b && b.headers)
              for (const y in b.headers)
                Array.isArray(b.headers[y]) && (b.headers[y] = b.headers[y].join(","));
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
      })(wo)),
    wo
  );
}
var Ku;
function bg() {
  if (Ku) return an;
  ((Ku = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.invokeRemote = void 0));
  const e = kv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((an.invokeRemote = t), an);
}
var on = {},
  Yu;
function yg() {
  if (Yu) return on;
  ((Yu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.invokeService = void 0));
  const e = kv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((on.invokeService = t), on);
}
var Ju;
function mg() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = rt;
        (t.__exportStar(bg(), e), t.__exportStar(yg(), e));
      })(mo)),
    mo
  );
}
var Oo = {},
  sn = {},
  un = {},
  Xu;
function wg() {
  if (Xu) return un;
  ((Xu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.submit = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((un.submit = n), un);
}
var cn = {},
  Qu;
function Og() {
  if (Qu) return cn;
  ((Qu = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.close = void 0));
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
  return ((cn.close = n), cn);
}
var ln = {},
  Zu;
function Sg() {
  if (Zu) return ln;
  ((Zu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.open = void 0));
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
  return ((ln.open = n), ln);
}
var dn = {},
  ec;
function Eg() {
  if (ec) return dn;
  ((ec = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.refresh = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((dn.refresh = n), dn);
}
var fn = {},
  tc;
function kg() {
  if (tc) return fn;
  ((tc = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.createHistory = void 0));
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
  return ((fn.createHistory = r), fn);
}
var vn = {},
  So = {},
  jt = {},
  rc;
function xv() {
  return (
    rc ||
      ((rc = 1),
      Object.defineProperty(jt, "__esModule", { value: !0 }),
      (jt.FORGE_SUPPORTED_LOCALE_CODES =
        jt.I18N_BUNDLE_FOLDER_NAME =
        jt.I18N_INFO_FILE_NAME =
          void 0),
      (jt.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (jt.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (jt.FORGE_SUPPORTED_LOCALE_CODES = [
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
    jt
  );
}
var er = {},
  nc;
function xg() {
  if (nc) return er;
  ((nc = 1),
    Object.defineProperty(er, "__esModule", { value: !0 }),
    (er.TranslationsGetter = er.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  er.TranslationGetterError = t;
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
  return ((er.TranslationsGetter = r), er);
}
var pn = {},
  Eo = {},
  ic;
function Rv() {
  return (
    ic ||
      ((ic = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = rt.__importDefault(ug()),
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
      })(Eo)),
    Eo
  );
}
var ac;
function Rg() {
  if (ac) return pn;
  ((ac = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.Translator = void 0));
  const e = Rv();
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
  return ((pn.Translator = t), pn);
}
var hn = {},
  oc;
function Pg() {
  if (oc) return hn;
  ((oc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.ensureLocale = void 0));
  const e = xv(),
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
  return ((hn.ensureLocale = i), hn);
}
var ko = {},
  sc;
function Cg() {
  return (
    sc ||
      ((sc = 1),
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
                    Object.entries(p).flatMap(([h, f]) => {
                      const g = [...v, h];
                      return r(f)
                        ? [{ propertyPath: g, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((_) => d(_, g))
                          : d(f, g);
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
      })(ko)),
    ko
  );
}
var xo = {},
  uc;
function Ag() {
  return (uc || ((uc = 1), Object.defineProperty(xo, "__esModule", { value: !0 })), xo);
}
var cc;
function Pv() {
  return (
    cc ||
      ((cc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const t = rt;
        (t.__exportStar(xv(), e),
          t.__exportStar(xg(), e),
          t.__exportStar(Rg(), e),
          t.__exportStar(Pg(), e));
        var r = Rv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Cg();
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
          t.__exportStar(Ag(), e));
      })(So)),
    So
  );
}
var lc;
function Ig() {
  if (lc) return vn;
  ((lc = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.getContext = void 0));
  const e = se(),
    t = Pv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var i;
      const a = await r("getContext"),
        o = a?.locale;
      return (o && (a.locale = (i = (0, t.ensureLocale)(o)) !== null && i !== void 0 ? i : o), a);
    };
  return ((vn.getContext = n), vn);
}
var gn = {},
  dc;
function jg() {
  if (dc) return gn;
  ((dc = 1),
    Object.defineProperty(gn, "__esModule", { value: !0 }),
    (gn.changeWindowTitle = void 0));
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
  return ((gn.changeWindowTitle = n), gn);
}
var _n = {},
  fc;
function Dg() {
  if (fc) return _n;
  ((fc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.theme = void 0));
  const t = (0, se().getCallBridge)();
  return ((_n.theme = { enable: () => t("enableTheming") }), _n);
}
var bn = {},
  yn = {},
  Ro = {},
  tr = {},
  vc;
function Cv() {
  if (vc) return tr;
  ((vc = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.blobToBase64 = tr.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  tr.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((tr.blobToBase64 = t), tr);
}
var pc;
function Tg() {
  return (
    pc ||
      ((pc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const t = Cv(),
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
      })(Ro)),
    Ro
  );
}
var hc;
function Av() {
  if (hc) return yn;
  ((hc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.events = void 0));
  const e = se(),
    t = Tg(),
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
var gc;
function Mg() {
  if (gc) return bn;
  ((gc = 1), Object.defineProperty(bn, "__esModule", { value: !0 }), (bn.emitReadyEvent = void 0));
  const e = Av(),
    t = Mv(),
    r = "EXTENSION_READY",
    n = async () => {
      const i = await t.view.getContext();
      await e.events.emit(r, { localId: i.localId });
    };
  return ((bn.emitReadyEvent = n), bn);
}
const Lg = "modulepreload",
  Fg = function (e, t) {
    return new URL(e, t).href;
  },
  _c = {},
  Iv = function (t, r, n) {
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
          if (((l = Fg(l, n)), l in _c)) return;
          _c[l] = !0;
          const d = l.endsWith(".css"),
            p = d ? '[rel="stylesheet"]' : "";
          if (n)
            for (let h = o.length - 1; h >= 0; h--) {
              const f = o[h];
              if (f.href === l && (!d || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = d ? "stylesheet" : Lg),
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
  Po = {},
  wn = {},
  Ki = {},
  bc;
function jv() {
  if (bc) return Ki;
  ((bc = 1), Object.defineProperty(Ki, "__esModule", { value: !0 }), (Ki.default = r));
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
var Sr = {},
  On = {},
  Sn = {},
  yc;
function Ng() {
  if (yc) return Sn;
  ((yc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((Sn.default = e), Sn);
}
var mc;
function Na() {
  if (mc) return On;
  ((mc = 1), Object.defineProperty(On, "__esModule", { value: !0 }), (On.default = void 0));
  var e = t(Ng());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var n = r;
  return ((On.default = n), On);
}
var wc;
function Ba() {
  if (wc) return Sr;
  ((wc = 1),
    Object.defineProperty(Sr, "__esModule", { value: !0 }),
    (Sr.default = void 0),
    (Sr.unsafeStringify = n));
  var e = t(Na());
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
  return ((Sr.default = a), Sr);
}
var Oc;
function Bg() {
  if (Oc) return wn;
  ((Oc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.default = void 0));
  var e = r(jv()),
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
    let h = c.node || n,
      f = c.clockseq !== void 0 ? c.clockseq : i;
    if (h == null || f == null) {
      const w = c.random || (c.rng || e.default)();
      (h == null && (h = n = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = i = ((w[6] << 8) | w[7]) & 16383));
    }
    let g = c.msecs !== void 0 ? c.msecs : Date.now(),
      _ = c.nsecs !== void 0 ? c.nsecs : o + 1;
    const b = g - a + (_ - o) / 1e4;
    if (
      (b < 0 && c.clockseq === void 0 && (f = (f + 1) & 16383),
      (b < 0 || g > a) && c.nsecs === void 0 && (_ = 0),
      _ >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((a = g), (o = _), (i = f), (g += 122192928e5));
    const y = ((g & 268435455) * 1e4 + _) % 4294967296;
    ((v[p++] = (y >>> 24) & 255),
      (v[p++] = (y >>> 16) & 255),
      (v[p++] = (y >>> 8) & 255),
      (v[p++] = y & 255));
    const O = ((g / 4294967296) * 1e4) & 268435455;
    ((v[p++] = (O >>> 8) & 255),
      (v[p++] = O & 255),
      (v[p++] = ((O >>> 24) & 15) | 16),
      (v[p++] = (O >>> 16) & 255),
      (v[p++] = (f >>> 8) | 128),
      (v[p++] = f & 255));
    for (let w = 0; w < 6; ++w) v[p + w] = h[w];
    return l || (0, t.unsafeStringify)(v);
  }
  var s = u;
  return ((wn.default = s), wn);
}
var En = {},
  Vt = {},
  kn = {},
  Sc;
function Dv() {
  if (Sc) return kn;
  ((Sc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.default = void 0));
  var e = t(Na());
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
  return ((kn.default = n), kn);
}
var Ec;
function Tv() {
  if (Ec) return Vt;
  ((Ec = 1),
    Object.defineProperty(Vt, "__esModule", { value: !0 }),
    (Vt.URL = Vt.DNS = void 0),
    (Vt.default = o));
  var e = Ba(),
    t = r(Dv());
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
  Vt.DNS = i;
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Vt.URL = a;
  function o(u, s, c) {
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
        (g = c(g)),
        (g[6] = (g[6] & 15) | s),
        (g[8] = (g[8] & 63) | 128),
        v)
      ) {
        h = h || 0;
        for (let _ = 0; _ < 16; ++_) v[h + _] = g[_];
        return v;
      }
      return (0, e.unsafeStringify)(g);
    }
    try {
      l.name = u;
    } catch {}
    return ((l.DNS = i), (l.URL = a), l);
  }
  return Vt;
}
var xn = {},
  kc;
function qg() {
  if (kc) return xn;
  ((kc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.default = void 0));
  function e(v) {
    if (typeof v == "string") {
      const h = unescape(encodeURIComponent(v));
      v = new Uint8Array(h.length);
      for (let f = 0; f < h.length; ++f) v[f] = h.charCodeAt(f);
    }
    return t(n(i(v), v.length * 8));
  }
  function t(v) {
    const h = [],
      f = v.length * 32,
      g = "0123456789abcdef";
    for (let _ = 0; _ < f; _ += 8) {
      const b = (v[_ >> 5] >>> (_ % 32)) & 255,
        y = parseInt(g.charAt((b >>> 4) & 15) + g.charAt(b & 15), 16);
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
      _ = -1732584194,
      b = 271733878;
    for (let y = 0; y < v.length; y += 16) {
      const O = f,
        w = g,
        S = _,
        x = b;
      ((f = s(f, g, _, b, v[y], 7, -680876936)),
        (b = s(b, f, g, _, v[y + 1], 12, -389564586)),
        (_ = s(_, b, f, g, v[y + 2], 17, 606105819)),
        (g = s(g, _, b, f, v[y + 3], 22, -1044525330)),
        (f = s(f, g, _, b, v[y + 4], 7, -176418897)),
        (b = s(b, f, g, _, v[y + 5], 12, 1200080426)),
        (_ = s(_, b, f, g, v[y + 6], 17, -1473231341)),
        (g = s(g, _, b, f, v[y + 7], 22, -45705983)),
        (f = s(f, g, _, b, v[y + 8], 7, 1770035416)),
        (b = s(b, f, g, _, v[y + 9], 12, -1958414417)),
        (_ = s(_, b, f, g, v[y + 10], 17, -42063)),
        (g = s(g, _, b, f, v[y + 11], 22, -1990404162)),
        (f = s(f, g, _, b, v[y + 12], 7, 1804603682)),
        (b = s(b, f, g, _, v[y + 13], 12, -40341101)),
        (_ = s(_, b, f, g, v[y + 14], 17, -1502002290)),
        (g = s(g, _, b, f, v[y + 15], 22, 1236535329)),
        (f = c(f, g, _, b, v[y + 1], 5, -165796510)),
        (b = c(b, f, g, _, v[y + 6], 9, -1069501632)),
        (_ = c(_, b, f, g, v[y + 11], 14, 643717713)),
        (g = c(g, _, b, f, v[y], 20, -373897302)),
        (f = c(f, g, _, b, v[y + 5], 5, -701558691)),
        (b = c(b, f, g, _, v[y + 10], 9, 38016083)),
        (_ = c(_, b, f, g, v[y + 15], 14, -660478335)),
        (g = c(g, _, b, f, v[y + 4], 20, -405537848)),
        (f = c(f, g, _, b, v[y + 9], 5, 568446438)),
        (b = c(b, f, g, _, v[y + 14], 9, -1019803690)),
        (_ = c(_, b, f, g, v[y + 3], 14, -187363961)),
        (g = c(g, _, b, f, v[y + 8], 20, 1163531501)),
        (f = c(f, g, _, b, v[y + 13], 5, -1444681467)),
        (b = c(b, f, g, _, v[y + 2], 9, -51403784)),
        (_ = c(_, b, f, g, v[y + 7], 14, 1735328473)),
        (g = c(g, _, b, f, v[y + 12], 20, -1926607734)),
        (f = l(f, g, _, b, v[y + 5], 4, -378558)),
        (b = l(b, f, g, _, v[y + 8], 11, -2022574463)),
        (_ = l(_, b, f, g, v[y + 11], 16, 1839030562)),
        (g = l(g, _, b, f, v[y + 14], 23, -35309556)),
        (f = l(f, g, _, b, v[y + 1], 4, -1530992060)),
        (b = l(b, f, g, _, v[y + 4], 11, 1272893353)),
        (_ = l(_, b, f, g, v[y + 7], 16, -155497632)),
        (g = l(g, _, b, f, v[y + 10], 23, -1094730640)),
        (f = l(f, g, _, b, v[y + 13], 4, 681279174)),
        (b = l(b, f, g, _, v[y], 11, -358537222)),
        (_ = l(_, b, f, g, v[y + 3], 16, -722521979)),
        (g = l(g, _, b, f, v[y + 6], 23, 76029189)),
        (f = l(f, g, _, b, v[y + 9], 4, -640364487)),
        (b = l(b, f, g, _, v[y + 12], 11, -421815835)),
        (_ = l(_, b, f, g, v[y + 15], 16, 530742520)),
        (g = l(g, _, b, f, v[y + 2], 23, -995338651)),
        (f = d(f, g, _, b, v[y], 6, -198630844)),
        (b = d(b, f, g, _, v[y + 7], 10, 1126891415)),
        (_ = d(_, b, f, g, v[y + 14], 15, -1416354905)),
        (g = d(g, _, b, f, v[y + 5], 21, -57434055)),
        (f = d(f, g, _, b, v[y + 12], 6, 1700485571)),
        (b = d(b, f, g, _, v[y + 3], 10, -1894986606)),
        (_ = d(_, b, f, g, v[y + 10], 15, -1051523)),
        (g = d(g, _, b, f, v[y + 1], 21, -2054922799)),
        (f = d(f, g, _, b, v[y + 8], 6, 1873313359)),
        (b = d(b, f, g, _, v[y + 15], 10, -30611744)),
        (_ = d(_, b, f, g, v[y + 6], 15, -1560198380)),
        (g = d(g, _, b, f, v[y + 13], 21, 1309151649)),
        (f = d(f, g, _, b, v[y + 4], 6, -145523070)),
        (b = d(b, f, g, _, v[y + 11], 10, -1120210379)),
        (_ = d(_, b, f, g, v[y + 2], 15, 718787259)),
        (g = d(g, _, b, f, v[y + 9], 21, -343485551)),
        (f = a(f, O)),
        (g = a(g, w)),
        (_ = a(_, S)),
        (b = a(b, x)));
    }
    return [f, g, _, b];
  }
  function i(v) {
    if (v.length === 0) return [];
    const h = v.length * 8,
      f = new Uint32Array(r(h));
    for (let g = 0; g < h; g += 8) f[g >> 5] |= (v[g / 8] & 255) << (g % 32);
    return f;
  }
  function a(v, h) {
    const f = (v & 65535) + (h & 65535);
    return (((v >> 16) + (h >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function o(v, h) {
    return (v << h) | (v >>> (32 - h));
  }
  function u(v, h, f, g, _, b) {
    return a(o(a(a(h, v), a(g, b)), _), f);
  }
  function s(v, h, f, g, _, b, y) {
    return u((h & f) | (~h & g), v, h, _, b, y);
  }
  function c(v, h, f, g, _, b, y) {
    return u((h & g) | (f & ~g), v, h, _, b, y);
  }
  function l(v, h, f, g, _, b, y) {
    return u(h ^ f ^ g, v, h, _, b, y);
  }
  function d(v, h, f, g, _, b, y) {
    return u(f ^ (h | ~g), v, h, _, b, y);
  }
  var p = e;
  return ((xn.default = p), xn);
}
var xc;
function zg() {
  if (xc) return En;
  ((xc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.default = void 0));
  var e = r(Tv()),
    t = r(qg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v3", 48, t.default);
  return ((En.default = i), En);
}
var Rn = {},
  Pn = {},
  Rc;
function Ug() {
  if (Rc) return Pn;
  ((Rc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((Pn.default = t), Pn);
}
var Pc;
function $g() {
  if (Pc) return Rn;
  ((Pc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
  var e = n(Ug()),
    t = n(jv()),
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
  return ((Rn.default = a), Rn);
}
var Cn = {},
  An = {},
  Cc;
function Vg() {
  if (Cc) return An;
  ((Cc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
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
        h = o[2],
        f = o[3],
        g = o[4];
      for (let _ = 0; _ < 80; ++_) {
        const b = Math.floor(_ / 20),
          y = (t(p, 5) + e(b, v, h, f) + g + a[b] + d[_]) >>> 0;
        ((g = f), (f = h), (h = t(v, 30) >>> 0), (v = p), (p = y));
      }
      ((o[0] = (o[0] + p) >>> 0),
        (o[1] = (o[1] + v) >>> 0),
        (o[2] = (o[2] + h) >>> 0),
        (o[3] = (o[3] + f) >>> 0),
        (o[4] = (o[4] + g) >>> 0));
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
  return ((An.default = n), An);
}
var Ac;
function Gg() {
  if (Ac) return Cn;
  ((Ac = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  var e = r(Tv()),
    t = r(Vg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v5", 80, t.default);
  return ((Cn.default = i), Cn);
}
var In = {},
  Ic;
function Hg() {
  if (Ic) return In;
  ((Ic = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((In.default = e), In);
}
var jn = {},
  jc;
function Wg() {
  if (jc) return jn;
  ((jc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
  var e = t(Na());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var n = r;
  return ((jn.default = n), jn);
}
var Dc;
function Kg() {
  return (
    Dc ||
      ((Dc = 1),
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
          r = l(zg()),
          n = l($g()),
          i = l(Gg()),
          a = l(Hg()),
          o = l(Wg()),
          u = l(Na()),
          s = l(Ba()),
          c = l(Dv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(Po)),
    Po
  );
}
var Tc;
function Yg() {
  if (Tc) return mn;
  ((Tc = 1),
    Object.defineProperty(mn, "__esModule", { value: !0 }),
    (mn.createAdfRendererIframeProps = void 0));
  const e = Kg(),
    t = async (r, n) => {
      const i = await Iv(
          () => import("./index-Ds7nV9OR.js").then((l) => l.i),
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
              initCallback: (h) => {
                var f;
                (f = h?.iFrameResizer) === null || f === void 0 || f.resize();
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
var Mc;
function Mv() {
  if (Mc) return sn;
  ((Mc = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.view = void 0));
  const e = wg(),
    t = Og(),
    r = Sg(),
    n = Eg(),
    i = kg(),
    a = Ig(),
    o = jg(),
    u = Dg(),
    s = Mg(),
    c = Yg();
  return (
    (sn.view = {
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
    sn
  );
}
var Lc;
function nu() {
  return (
    Lc ||
      ((Lc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(Mv(), e));
      })(Oo)),
    Oo
  );
}
var Co = {},
  Dn = {},
  Fc;
function Jg() {
  if (Fc) return Dn;
  ((Fc = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.router = void 0));
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
  return ((Dn.router = { getUrl: r, navigate: n, open: i, reload: a }), Dn);
}
var Nc;
function Xg() {
  return (
    Nc ||
      ((Nc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(Jg(), e));
      })(Co)),
    Co
  );
}
var Ao = {},
  Tn = {},
  Bc;
function Qg() {
  if (Bc) return Tn;
  ((Bc = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.Modal = void 0));
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
  return ((Tn.Modal = i), Tn);
}
var qc;
function Zg() {
  return (
    qc ||
      ((qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(Qg(), e));
      })(Ao)),
    Ao
  );
}
var ot = {},
  rr = {},
  zc;
function e_() {
  if (zc) return rr;
  ((zc = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.productFetchApi = rr.remoteFetchApi = void 0));
  const e = Cv(),
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
          h = {
            remoteKey: s,
            fetchRequestInit: { ...l, body: d, headers: [...p.entries()] },
            isMultipartFormData: v,
          },
          {
            body: f,
            headers: g,
            statusText: _,
            status: b,
            isAttachment: y,
          } = await o("fetchRemote", h),
          O = y ? (0, e.base64ToBlob)(f, g["content-type"]) : f;
        return new Response(O || null, { headers: g, status: b, statusText: _ });
      };
      return { requestRemote: (s, c) => u(s, c) };
    };
  rr.remoteFetchApi = i;
  const a = (o) => {
    const u = async (s, c, l) => {
      const d = r(l),
        { body: p, headers: v, isMultipartFormData: h } = await n(d);
      v.has("X-Atlassian-Token") || v.set("X-Atlassian-Token", "no-check");
      const f = {
          product: s,
          restPath: c,
          fetchRequestInit: { ...d, body: p, headers: [...v.entries()] },
          isMultipartFormData: h,
        },
        {
          body: g,
          headers: _,
          statusText: b,
          status: y,
          isAttachment: O,
        } = await o("fetchProduct", f),
        w = O ? (0, e.base64ToBlob)(g, _["content-type"]) : g;
      return new Response(w || null, { headers: _, status: y, statusText: b });
    };
    return {
      requestConfluence: (s, c) => u("confluence", s, c),
      requestJira: (s, c) => u("jira", s, c),
      requestBitbucket: (s, c) => u("bitbucket", s, c),
    };
  };
  return ((rr.productFetchApi = a), rr);
}
var Uc;
function t_() {
  if (Uc) return ot;
  Uc = 1;
  var e;
  (Object.defineProperty(ot, "__esModule", { value: !0 }),
    (ot.requestRemote = ot.requestBitbucket = ot.requestJira = ot.requestConfluence = void 0));
  const t = se(),
    r = e_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (ot.requestConfluence = e.requestConfluence),
    (ot.requestJira = e.requestJira),
    (ot.requestBitbucket = e.requestBitbucket),
    (ot.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    ot
  );
}
var Io = {},
  Mn = {},
  $c;
function r_() {
  if ($c) return Mn;
  (($c = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.showFlag = void 0));
  const e = se(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = (i) => {
      var a;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await o, r("closeFlag", { id: i.id })) };
    };
  return ((Mn.showFlag = n), Mn);
}
var Vc;
function n_() {
  return (
    Vc ||
      ((Vc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = r_();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return t.showFlag;
          },
        });
      })(Io)),
    Io
  );
}
var jo = {},
  Gc;
function i_() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(Av(), e));
      })(jo)),
    jo
  );
}
var Do = {},
  Ln = {},
  Hc;
function a_() {
  if (Hc) return Ln;
  ((Hc = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.realtime = void 0));
  const t = (0, se().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    i = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    a = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((Ln.realtime = { publish: r, subscribe: n, publishGlobal: i, subscribeGlobal: a }), Ln);
}
var To = {},
  Wc;
function o_() {
  return (
    Wc ||
      ((Wc = 1),
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
      })(To)),
    To
  );
}
var Kc;
function s_() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = a_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = o_();
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
      })(Do)),
    Do
  );
}
var Mo = {},
  Fn = {},
  Lo = {},
  Yc;
function u_() {
  return (
    Yc ||
      ((Yc = 1),
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
      })(Lo)),
    Lo
  );
}
var Jc;
function c_() {
  if (Jc) return Fn;
  ((Jc = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.rovo = void 0));
  const e = u_();
  return ((Fn.rovo = { open: e.open }), Fn);
}
var Xc;
function l_() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(c_(), e));
      })(Mo)),
    Mo
  );
}
var Dt = {},
  Qc;
function d_() {
  if (Qc) return Dt;
  ((Qc = 1),
    Object.defineProperty(Dt, "__esModule", { value: !0 }),
    (Dt.createTranslationFunction = Dt.getTranslations = Dt.resetTranslationsCache = void 0));
  const e = Pv(),
    t = nu(),
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
  Dt.resetTranslationsCache = i;
  const a = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  Dt.getTranslations = a;
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
  return ((Dt.createTranslationFunction = o), Dt);
}
var Fo = {},
  Nn = {},
  Zc;
function f_() {
  if (Zc) return Nn;
  ((Zc = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.permissions = void 0));
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
var el;
function v_() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), rt.__exportStar(f_(), e));
      })(Fo)),
    Fo
  );
}
var No = {},
  Bo = {},
  qo = {},
  Bn = {},
  qn = {},
  tl;
function Lv() {
  return (
    tl ||
      ((tl = 1),
      Object.defineProperty(qn, "__esModule", { value: !0 }),
      (qn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (qn.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    qn
  );
}
var rl;
function qa() {
  if (rl) return Bn;
  ((rl = 1),
    Object.defineProperty(Bn, "__esModule", { value: !0 }),
    (Bn.checkRestrictedEnvironment = void 0));
  const e = _e(),
    t = nu(),
    r = Lv(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Bn.checkRestrictedEnvironment = n), Bn);
}
var nl;
function p_() {
  return (
    nl ||
      ((nl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Mi(),
          r = _e(),
          n = qa(),
          a = (0, se().getCallBridge)(),
          o = (l, d) => {
            const p = atob(l),
              v = new Array(p.length);
            for (let f = 0; f < p.length; f++) v[f] = p.charCodeAt(f);
            const h = new Uint8Array(v);
            return new Blob([h], { type: d || "application/octet-stream" });
          },
          u = async (l) => {
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
            const p = d.map((b, y) => {
                if (b instanceof Blob) return b;
                if (!(b && typeof b == "object" && "data" in b && typeof b.data == "string"))
                  throw new r.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return o(b.data, b.mimeType);
                } catch {
                  throw new r.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              v = await Promise.all(p.map((b) => u(b))),
              h = await (0, t.invoke)(l, { allObjectMetadata: v });
            if (!h || typeof h != "object")
              throw new r.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              g = new Map();
            return (
              p.forEach((b, y) => {
                const O = v[y];
                (f.set(O.checksum, b), g.set(O.checksum, y));
              }),
              Object.entries(h).map(([b, y]) => {
                const { key: O, checksum: w } = y,
                  S = f.get(w),
                  x = g.get(w);
                return x === void 0
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
                            const j = await fetch(b, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: j.ok,
                              key: O,
                              status: j.status,
                              error: j.ok ? void 0 : `Upload failed with status ${j.status}`,
                            };
                          } catch (j) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: j instanceof Error ? j.message : "Upload failed",
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
                          key: O,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: x,
                      };
              })
            );
          };
        e.createUploadPromises = s;
        const c = async ({ functionKey: l, objects: d }) => {
          (await (0, n.checkRestrictedEnvironment)(),
            a("trackObjectStoreAction", { action: "upload" }));
          const p = await (0, e.createUploadPromises)({ functionKey: l, objects: d });
          return await Promise.all(p.map((h) => h.promise));
        };
        e.upload = c;
      })(qo)),
    qo
  );
}
var zn = {},
  il;
function h_() {
  if (il) return zn;
  ((il = 1), Object.defineProperty(zn, "__esModule", { value: !0 }), (zn.deleteObjects = void 0));
  const e = Mi(),
    t = _e(),
    r = qa(),
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
var Un = {},
  al;
function g_() {
  if (al) return Un;
  ((al = 1), Object.defineProperty(Un, "__esModule", { value: !0 }), (Un.download = void 0));
  const e = Mi(),
    t = _e(),
    r = qa(),
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
      return await Promise.all(c);
    };
  return ((Un.download = a), Un);
}
var $n = {},
  ol;
function __() {
  if (ol) return $n;
  ((ol = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.getMetadata = void 0));
  const e = Mi(),
    t = _e(),
    r = qa(),
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
  return (($n.getMetadata = a), $n);
}
var sl;
function b_() {
  return (
    sl ||
      ((sl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = p_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = h_(),
          n = g_(),
          i = __();
        e.objectStore = {
          upload: t.upload,
          download: n.download,
          getMetadata: i.getMetadata,
          delete: r.deleteObjects,
        };
      })(Bo)),
    Bo
  );
}
var ul;
function y_() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = rt;
        (t.__exportStar(b_(), e), t.__exportStar(Lv(), e));
      })(No)),
    No
  );
}
var zo = {},
  Vn = {},
  nr = {},
  Er = {},
  Yi = {},
  cl;
function m_() {
  if (cl) return Yi;
  ((cl = 1), Object.defineProperty(Yi, "__esModule", { value: !0 }));
  const e = Yt();
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
  return ((Yi.default = t), Yi);
}
var kr = {},
  Gn = {},
  ll;
function w_() {
  if (ll) return Gn;
  ((ll = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn._resolveDeltasResponse = void 0));
  const e = Yt(),
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
  Gn._resolveDeltasResponse = r;
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
  return Gn;
}
var dl;
function Fv() {
  if (dl) return kr;
  dl = 1;
  var e =
    (kr && kr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(kr, "__esModule", { value: !0 });
  const t = Yt(),
    r = w_();
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
        var l, d, p, v, h, f;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
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
        if (g?.has_updates) {
          const b =
            g?.hash_used !==
            ((f =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: b ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(a, g, _, u);
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
  return ((kr.default = n), kr);
}
var Hn = {},
  fl;
function O_() {
  if (fl) return Hn;
  ((fl = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn._makeParamStoreGetter = void 0));
  const e = Yt(),
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
    return (v, h) => {
      if (d == null) return h;
      const f = d[v];
      if (f == null || (h != null && (0, e._typeOf)(h) !== f.param_type)) return h;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, h, p);
        case "experiment":
          return u(l, f, h, p);
        case "layer":
          return s(l, f, h, p);
        default:
          return h;
      }
    };
  }
  return ((Hn._makeParamStoreGetter = c), Hn);
}
var ir = {},
  vl;
function S_() {
  if (vl) return ir;
  vl = 1;
  var e =
    (ir && ir.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.StatsigEvaluationsDataAdapter = void 0));
  const t = Yt(),
    r = Fv();
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
  return ((ir.StatsigEvaluationsDataAdapter = n), ir);
}
var pl;
function E_() {
  if (pl) return Er;
  pl = 1;
  var e =
    (Er && Er.__awaiter) ||
    function (u, s, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function h(_) {
          try {
            g(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            g(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function g(_) {
          _.done ? p(_.value) : d(_.value).then(h, f);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Er, "__esModule", { value: !0 });
  const t = Yt(),
    r = m_(),
    n = Fv(),
    i = O_(),
    a = S_();
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
      const h = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of h) f.bind(this);
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
      const h = c?.disableBackgroundCacheRefresh;
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
        h = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
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
      const _ =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, g, this._user, c),
        b = _ ?? g;
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
      const { result: v, details: h } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        f,
        g,
        (p = g?.__value) !== null && p !== void 0 ? p : f.__value,
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
      const h = {
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
            : d.call(l, h, c);
      return (
        f != null &&
          ((h.__configuration = f.config),
          (h.details = f.details),
          (h.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        h
      );
    }
  }
  return ((Er.default = o), Er);
}
var hl;
function k_() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        var t =
            (nr && nr.__createBinding) ||
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
            (nr && nr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Yt(),
          i = E_();
        ((e.StatsigClient = i.default), r(Yt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(nr)),
    nr
  );
}
var Wn = {},
  Kn = {},
  gl;
function x_() {
  if (gl) return Kn;
  ((gl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn.initFeatureFlags = void 0));
  const e = se(),
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
    (Kn.initFeatureFlags = (0, r.withRateLimiter)(
      u,
      n,
      i,
      `Feature flags initialisation calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Kn
  );
}
var _l;
function R_() {
  if (_l) return Wn;
  ((_l = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn.ForgeDataAdapter = void 0));
  const e = x_();
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
  return ((Wn.ForgeDataAdapter = t), Wn);
}
var Uo = {},
  bl;
function Nv() {
  return (
    bl ||
      ((bl = 1),
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
      })(Uo)),
    Uo
  );
}
var Yn = {},
  yl;
function P_() {
  if (yl) return Yn;
  ((yl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.trackFeatureFlagEvent = void 0));
  const e = se(),
    t = _e(),
    r = Nv(),
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
    (Yn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    Yn
  );
}
var ml;
function C_() {
  if (ml) return Vn;
  ((ml = 1),
    Object.defineProperty(Vn, "__esModule", { value: !0 }),
    (Vn.ForgeFeatureFlags = void 0));
  const e = k_(),
    t = R_(),
    r = Nv(),
    n = P_();
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
  return ((Vn.ForgeFeatureFlags = i), Vn);
}
var wl;
function A_() {
  return (
    wl ||
      ((wl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = C_();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return t.ForgeFeatureFlags;
          },
        });
      })(zo)),
    zo
  );
}
var Ol;
function I_() {
  return (
    Ol ||
      ((Ol = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = rt;
        var r = gg();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Mi(), e),
          t.__exportStar(mg(), e),
          t.__exportStar(nu(), e),
          t.__exportStar(Xg(), e),
          t.__exportStar(Zg(), e),
          t.__exportStar(t_(), e),
          t.__exportStar(n_(), e),
          t.__exportStar(i_(), e),
          t.__exportStar(s_(), e),
          t.__exportStar(l_(), e),
          (e.i18n = t.__importStar(d_())),
          t.__exportStar(v_(), e),
          t.__exportStar(y_(), e),
          t.__exportStar(A_(), e));
      })(_o)),
    _o
  );
}
var Re = I_();
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
var j_ = {};
function za() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : j_;
}
var Bv = Object.assign,
  ba = Object.getOwnPropertyDescriptor,
  mt = Object.defineProperty,
  Ua = Object.prototype,
  Es = [];
Object.freeze(Es);
var qv = {};
Object.freeze(qv);
var D_ = typeof Proxy < "u",
  T_ = Object.toString();
function zv() {
  D_ || H("Proxy not available");
}
function Uv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Tr = function () {};
function lt(e) {
  return typeof e == "function";
}
function lr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function $a(e) {
  return e !== null && typeof e == "object";
}
function Jt(e) {
  if (!$a(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === T_;
}
function $v(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Va(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Vv(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function _r(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return $a(n) && n[r] === !0;
    }
  );
}
function Wr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function M_(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Mt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var Gv = typeof Object.getOwnPropertySymbols < "u";
function L_(e) {
  var t = Object.keys(e);
  if (!Gv) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return Ua.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Ga =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Gv
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function Hv(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Nt(e, t) {
  return Ua.hasOwnProperty.call(e, t);
}
var F_ =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ga(t).forEach(function (n) {
        r[n] = ba(t, n);
      }),
      r
    );
  };
function Me(e, t) {
  return !!(e & t);
}
function Le(e, t, r) {
  return (r ? (e |= t) : (e &= ~t), e);
}
function Sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function N_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, q_(n.key), n));
  }
}
function Kr(e, t, r) {
  return (t && N_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Mr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = z_(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    dr.apply(null, arguments)
  );
}
function Wv(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ks(e, t));
}
function ks(e, t) {
  return (
    (ks = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    ks(e, t)
  );
}
function B_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function q_(e) {
  var t = B_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z_(e, t) {
  if (e) {
    if (typeof e == "string") return Sl(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Sl(e, t)
          : void 0
    );
  }
}
var yt = Symbol("mobx-stored-annotations");
function wt(e) {
  function t(r, n) {
    if (Fi(n)) return e.decorate_20223_(r, n);
    Li(r, n, e);
  }
  return Object.assign(t, e);
}
function Li(e, t, r) {
  (Nt(e, yt) || Va(e, yt, dr({}, e[yt])), K_(r) || (e[yt][t] = r));
}
function U_(e) {
  return (Nt(e, yt) || Va(e, yt, dr({}, e[yt])), e[yt]);
}
function Fi(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var F = Symbol("mobx administration"),
  Qt = (function () {
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
        return cp(this);
      }),
      (t.reportChanged = function () {
        (Je(), lp(this), Xe());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Kr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
Qt.isBeingObservedMask_ = 1;
Qt.isPendingUnobservationMask_ = 2;
Qt.diffValueMask_ = 4;
var iu = _r("Atom", Qt);
function Kv(e, t, r) {
  (t === void 0 && (t = Tr), r === void 0 && (r = Tr));
  var n = new Qt(e);
  return (t !== Tr && Zb(n, t), r !== Tr && hp(n, r), n);
}
function $_(e, t) {
  return Rp(e, t);
}
function V_(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ya = { structural: $_, default: V_ };
function fr(e, t, r) {
  return yp(e)
    ? e
    : Array.isArray(e)
      ? oe.array(e, { name: r })
      : Jt(e)
        ? oe.object(e, void 0, { name: r })
        : Wr(e)
          ? oe.map(e, { name: r })
          : Mt(e)
            ? oe.set(e, { name: r })
            : typeof e == "function" && !Br(e) && !Ei(e)
              ? $v(e)
                ? qr(e)
                : Si(r, e)
              : e;
}
function G_(e, t, r) {
  if (e == null || Za(e) || Qa(e) || yr(e) || bt(e)) return e;
  if (Array.isArray(e)) return oe.array(e, { name: r, deep: !1 });
  if (Jt(e)) return oe.object(e, void 0, { name: r, deep: !1 });
  if (Wr(e)) return oe.map(e, { name: r, deep: !1 });
  if (Mt(e)) return oe.set(e, { name: r, deep: !1 });
}
function Ha(e) {
  return e;
}
function H_(e, t) {
  return Rp(e, t) ? t : e;
}
var W_ = "override";
function K_(e) {
  return e.annotationType_ === W_;
}
function Ni(e, t) {
  return { annotationType_: e, options_: t, make_: Y_, extend_: J_, decorate_20223_: X_ };
}
function Y_(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (Br(r.value)) return 1;
  var a = Yv(e, this, t, r, !1);
  return (mt(n, t, a), 2);
}
function J_(e, t, r, n) {
  var i = Yv(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function X_(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, p, v;
      return vr(
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
        Br(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      Br(e) || (e = o(e)),
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
function Q_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Yv(e, t, r, n, i) {
  var a, o, u, s, c, l, d;
  (i === void 0 && (i = A.safeDescriptors), Q_(e, t, r, n));
  var p = n.value;
  if ((a = t.options_) != null && a.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: vr(
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
function Jv(e, t) {
  return { annotationType_: e, options_: t, make_: Z_, extend_: eb, decorate_20223_: tb };
}
function Z_(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!Nt(e.target_, t) || !Ei(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (Ei(r.value)) return 1;
  var a = Xv(e, this, t, r, !1, !1);
  return (mt(n, t, a), 2);
}
function eb(e, t, r, n) {
  var i,
    a = Xv(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function tb(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    Ei(e) || (e = qr(e)),
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
function rb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Xv(e, t, r, n, i, a) {
  (a === void 0 && (a = A.safeDescriptors), rb(e, t, r, n));
  var o = n.value;
  if ((Ei(o) || (o = qr(o)), i)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function au(e, t) {
  return { annotationType_: e, options_: t, make_: nb, extend_: ib, decorate_20223_: ab };
}
function nb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ib(e, t, r, n) {
  return (
    ob(e, this, t, r),
    e.defineComputedProperty_(t, dr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function ab(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Yr(this)[F],
        o = dr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new dt(o)));
    }),
    function () {
      return this[F].getObservablePropValue_(n);
    }
  );
}
function ob(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Wa(e, t) {
  return { annotationType_: e, options_: t, make_: sb, extend_: ub, decorate_20223_: cb };
}
function sb(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ub(e, t, r, n) {
  var i, a;
  return (
    lb(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : fr,
      n,
    )
  );
}
function cb(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = Yr(u)[F],
      p = new ur(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : fr,
        "ObservableObject." + i.toString(),
        !1,
      );
    (d.values_.set(i, p), a.add(u));
  }
  if (n == "accessor")
    return {
      get: function () {
        return (a.has(this) || o(this, e.get.call(this)), this[F].getObservablePropValue_(i));
      },
      set: function (s) {
        return (a.has(this) || o(this, s), this[F].setObservablePropValue_(i, s));
      },
      init: function (s) {
        return (a.has(this) || o(this, s), s);
      },
    };
}
function lb(e, t, r, n) {
  t.annotationType_;
}
var db = "true",
  fb = Qv();
function Qv(e) {
  return { annotationType_: db, options_: e, make_: vb, extend_: pb, decorate_20223_: hb };
}
function vb(e, t, r, n) {
  var i, a;
  if (r.get) return Ka.make_(e, t, r, n);
  if (r.set) {
    var o = Br(r.set) ? r.set : vr(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: A.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (mt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var u;
    if ($v(r.value)) {
      var s,
        c = (s = this.options_) != null && s.autoBind ? qr.bound : qr;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? Si.bound : Si;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? oe.ref : oe;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function pb(e, t, r, n) {
  var i, a;
  if (r.get) return Ka.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: vr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? oe.ref : oe;
  return u.extend_(e, t, r, n);
}
function hb(e, t) {
  H("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var gb = "observable",
  _b = "observable.ref",
  bb = "observable.shallow",
  yb = "observable.struct",
  Zv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Zv);
function Ji(e) {
  return e || Zv;
}
var xs = Wa(gb),
  mb = Wa(_b, { enhancer: Ha }),
  wb = Wa(bb, { enhancer: G_ }),
  Ob = Wa(yb, { enhancer: H_ }),
  ep = wt(xs);
function Xi(e) {
  return e.deep === !0 ? fr : e.deep === !1 ? Ha : Eb(e.defaultDecorator);
}
function Sb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Qv(e)) : void 0;
}
function Eb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : fr;
}
function tp(e, t, r) {
  if (Fi(t)) return xs.decorate_20223_(e, t);
  if (lr(t)) {
    Li(e, t, xs);
    return;
  }
  return yp(e)
    ? e
    : Jt(e)
      ? oe.object(e, t, r)
      : Array.isArray(e)
        ? oe.array(e, t)
        : Wr(e)
          ? oe.map(e, t)
          : Mt(e)
            ? oe.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : oe.box(e, t);
}
Bv(tp, ep);
var kb = {
    box: function (t, r) {
      var n = Ji(r);
      return new ur(t, Xi(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ji(r);
      return (A.useProxies === !1 || n.proxy === !1 ? Sy : vy)(t, Xi(n), n.name);
    },
    map: function (t, r) {
      var n = Ji(r);
      return new wp(t, Xi(n), n.name);
    },
    set: function (t, r) {
      var n = Ji(r);
      return new Op(t, Xi(n), n.name);
    },
    object: function (t, r, n) {
      return mr(function () {
        return ny(A.useProxies === !1 || n?.proxy === !1 ? Yr({}, n) : ly({}, n), t, r);
      });
    },
    ref: wt(mb),
    shallow: wt(wb),
    deep: ep,
    struct: wt(Ob),
  },
  oe = Bv(tp, kb),
  rp = "computed",
  xb = "computed.struct",
  Rs = au(rp),
  Rb = au(xb, { equals: ya.structural }),
  Ka = function (t, r) {
    if (Fi(r)) return Rs.decorate_20223_(t, r);
    if (lr(r)) return Li(t, r, Rs);
    if (Jt(t)) return wt(au(rp, t));
    var n = Jt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new dt(n));
  };
Object.assign(Ka, Rs);
Ka.struct = wt(Rb);
var El,
  kl,
  ma = 0,
  Pb = 1,
  Cb =
    (El = (kl = ba(function () {}, "name")) == null ? void 0 : kl.configurable) != null ? El : !1,
  xl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function vr(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return Ab(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    Cb && ((xl.value = e), mt(i, "name", xl)),
    i
  );
}
function Ab(e, t, r, n, i) {
  var a = Ib(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    jb(a);
  }
}
function Ib(e, t, r, n) {
  var i = !1,
    a = 0,
    o = A.trackingDerivation,
    u = !t || !o;
  Je();
  var s = A.allowStateChanges;
  u && (br(), (s = Ya(!0)));
  var c = ou(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: Pb++,
      parentActionId_: ma,
    };
  return ((ma = l.actionId_), l);
}
function jb(e) {
  (ma !== e.actionId_ && H(30),
    (ma = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Ja(e.prevAllowStateChanges_),
    hi(e.prevAllowStateReads_),
    Xe(),
    e.runAsAction_ && Bt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function Db(e, t) {
  var r = Ya(e);
  try {
    return t();
  } finally {
    Ja(r);
  }
}
function Ya(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function Ja(e) {
  A.allowStateChanges = e;
}
var ur = (function (e) {
    function t(n, i, a, o, u) {
      var s;
      return (
        a === void 0 && (a = "ObservableValue"),
        u === void 0 && (u = ya.default),
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
    Wv(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        (this.value_, (i = this.prepareNewValue_(i)), i !== A.UNCHANGED && this.setNewValue_(i));
      }),
      (r.prepareNewValue_ = function (i) {
        if (Ke(this)) {
          var a = Ye(this, { object: this, type: Ot, newValue: i });
          if (!a) return A.UNCHANGED;
          i = a.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? A.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var a = this.value_;
        ((this.value_ = i),
          this.reportChanged(),
          ut(this) && ct(this, { type: Ot, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return Bi(this, i);
      }),
      (r.observe_ = function (i, a) {
        return (
          a &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Ot,
              newValue: this.value_,
              oldValue: void 0,
            }),
          qi(this, i)
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
        return Hv(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Qt),
  dt = (function () {
    function e(r) {
      ((this.dependenciesState_ = W.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = W.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Oa(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = wa.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || H(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = vr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? ya.structural : ya.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Nb(this);
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
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Ps(this) &&
            (this.warnAboutUntrackedRead_(), Je(), (this.value_ = this.computeValue_(!1)), Xe());
        else if ((cp(this), Ps(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && Fb(this),
            (A.trackingContext = n));
        }
        var i = this.value_;
        if (sa(i)) throw i.cause;
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
          o = i || sa(n) || sa(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = Ya(!1),
          a;
        if (n) a = np(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new Oa(o);
          }
        return (Ja(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Cs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          u = void 0;
        return Kb(function () {
          var s = a.get();
          if (!o || i) {
            var c = br();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: Ot,
              object: a,
              newValue: s,
              oldValue: u,
            }),
              Bt(c));
          }
          ((o = !1), (u = s));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return Hv(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Kr(e, [
        {
          key: "isComputing",
          get: function () {
            return Me(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Me(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Me(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Me(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
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
var Xa = _r("ComputedValue", dt),
  W;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(W || (W = {}));
var wa;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(wa || (wa = {}));
var Oa = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function sa(e) {
  return e instanceof Oa;
}
function Ps(e) {
  switch (e.dependenciesState_) {
    case W.UP_TO_DATE_:
      return !1;
    case W.NOT_TRACKING_:
    case W.STALE_:
      return !0;
    case W.POSSIBLY_STALE_: {
      for (var t = ou(!0), r = br(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (Xa(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Bt(r), hi(t), !0);
            }
          if (e.dependenciesState_ === W.STALE_) return (Bt(r), hi(t), !0);
        }
      }
      return (ap(e), Bt(r), hi(t), !1);
    }
  }
}
function np(e, t, r) {
  var n = ou(!0);
  (ap(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++A.runId));
  var i = A.trackingDerivation;
  ((A.trackingDerivation = e), A.inBatch++);
  var a;
  if (A.disableErrorBoundaries === !0) a = t.call(r);
  else
    try {
      a = t.call(r);
    } catch (o) {
      a = new Oa(o);
    }
  return (A.inBatch--, (A.trackingDerivation = i), Tb(e), hi(n), a);
}
function Tb(e) {
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
    (s.diffValue === 0 && sp(s, e), (s.diffValue = 0));
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue === 1 && ((c.diffValue = 0), Lb(c, e));
  }
  n !== W.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Cs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) sp(t[r], e);
  e.dependenciesState_ = W.NOT_TRACKING_;
}
function ip(e) {
  var t = br();
  try {
    return e();
  } finally {
    Bt(t);
  }
}
function br() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Bt(e) {
  A.trackingDerivation = e;
}
function ou(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function hi(e) {
  A.allowStateReads = e;
}
function ap(e) {
  if (e.dependenciesState_ !== W.UP_TO_DATE_) {
    e.dependenciesState_ = W.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = W.UP_TO_DATE_;
  }
}
var ua = function () {
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
  ca = !0,
  op = !1,
  A = (function () {
    var e = za();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ca = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ua().version && (ca = !1),
      ca
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ua()))
        : (setTimeout(function () {
            op || H(35);
          }, 1),
          new ua())
    );
  })();
function Mb() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && H(36), (op = !0), ca)) {
    var e = za();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new ua()));
  }
}
function Lb(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function sp(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && up(e));
}
function up(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), A.pendingUnobservations.push(e));
}
function Je() {
  A.inBatch++;
}
function Xe() {
  if (--A.inBatch === 0) {
    dp();
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
function cp(e) {
  var t = A.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && A.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && A.inBatch > 0 && up(e), !1);
}
function lp(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === W.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = W.STALE_));
    }));
}
function Fb(e) {
  e.lowestObserverState_ !== W.STALE_ &&
    ((e.lowestObserverState_ = W.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.POSSIBLY_STALE_
        ? (t.dependenciesState_ = W.STALE_)
        : t.dependenciesState_ === W.UP_TO_DATE_ && (e.lowestObserverState_ = W.UP_TO_DATE_);
    }));
}
function Nb(e) {
  e.lowestObserverState_ === W.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = W.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === W.UP_TO_DATE_ &&
        ((t.dependenciesState_ = W.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var xt = (function () {
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
      (this.isTracing_ = wa.NONE),
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
      this.isScheduled || ((this.isScheduled = !0), A.pendingReactions.push(this), dp());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Je(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), Ps(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((A.trackingContext = n), Xe());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Je(), (this.isRunning = !0));
        var i = A.trackingContext;
        A.trackingContext = this;
        var a = np(this, n, void 0);
        ((A.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Cs(this),
          sa(a) && this.reportExceptionInDerivation_(a.cause),
          Xe());
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (A.disableErrorBoundaries) throw n;
      var a = "[mobx] uncaught error in '" + this + "'";
      (A.suppressReactionErrors || console.error(a, n),
        A.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, i);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Je(), Cs(this), Xe()));
    }),
    (t.getDisposer_ = function (n) {
      var i = this,
        a = function o() {
          (i.dispose(),
            n == null || n.removeEventListener == null || n.removeEventListener("abort", o));
        };
      return (
        n == null || n.addEventListener == null || n.addEventListener("abort", a),
        (a[F] = this),
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
          return Me(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Me(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Me(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Me(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Me(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
xt.isDisposedMask_ = 1;
xt.isScheduledMask_ = 2;
xt.isTrackPendingMask_ = 4;
xt.isRunningMask_ = 8;
xt.diffValueMask_ = 16;
var Bb = 100,
  As = function (t) {
    return t();
  };
function dp() {
  A.inBatch > 0 || A.isRunningReactions || As(qb);
}
function qb() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Bb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var Sa = _r("Reaction", xt);
function zb(e) {
  var t = As;
  As = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function gi() {
  return !1;
}
function Ub(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var fp = "action",
  $b = "action.bound",
  vp = "autoAction",
  Vb = "autoAction.bound",
  Gb = "<unnamed action>",
  Is = Ni(fp),
  Hb = Ni($b, { bound: !0 }),
  js = Ni(vp, { autoAction: !0 }),
  Wb = Ni(Vb, { autoAction: !0, bound: !0 });
function pp(e) {
  var t = function (n, i) {
    if (lt(n)) return vr(n.name || Gb, n, e);
    if (lt(i)) return vr(n, i, e);
    if (Fi(i)) return (e ? js : Is).decorate_20223_(n, i);
    if (lr(i)) return Li(n, i, e ? js : Is);
    if (lr(n)) return wt(Ni(e ? vp : fp, { name: n, autoAction: e }));
  };
  return t;
}
var Qe = pp(!1);
Object.assign(Qe, Is);
var Si = pp(!0);
Object.assign(Si, js);
Qe.bound = wt(Hb);
Si.bound = wt(Wb);
function Br(e) {
  return lt(e) && e.isMobxAction === !0;
}
function Kb(e, t) {
  var r, n, i, a;
  t === void 0 && (t = qv);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    u = !t.scheduler && !t.delay,
    s;
  if (u)
    s = new xt(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var c = Jb(t),
      l = !1;
    s = new xt(
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
var Yb = function (t) {
  return t();
};
function Jb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Yb;
}
var Xb = "onBO",
  Qb = "onBUO";
function Zb(e, t, r) {
  return gp(Xb, e, t, r);
}
function hp(e, t, r) {
  return gp(Qb, e, t, r);
}
function gp(e, t, r, n) {
  var i = xa(t),
    a = lt(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var u = i[o];
      u && (u.delete(a), u.size === 0 && delete i[o]);
    }
  );
}
var ey = "never",
  Qi = "always",
  ty = "observed";
function ry(e) {
  e.isolateGlobalState === !0 && Mb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === Qi ? !0 : t === ey ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Qi ? Qi : r === ty;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === Qi)));
  }
  ([
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (A[i] = !!e[i]);
  }),
    (A.allowStateReads = !A.observableRequiresReaction),
    e.reactionScheduler && zb(e.reactionScheduler));
}
function ny(e, t, r, n) {
  var i = F_(t);
  return (
    mr(function () {
      var a = Yr(e, n)[F];
      Ga(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function iy(e, t) {
  return _p(xa(e, t));
}
function _p(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = ay(e.observing_).map(_p)),
    t
  );
}
function ay(e) {
  return Array.from(new Set(e));
}
var oy = 0;
function bp() {
  this.message = "FLOW_CANCELLED";
}
bp.prototype = Object.create(Error.prototype);
var $o = Jv("flow"),
  sy = Jv("flow.bound", { bound: !0 }),
  qr = Object.assign(function (t, r) {
    if (Fi(r)) return $o.decorate_20223_(t, r);
    if (lr(r)) return Li(t, r, $o);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var u = this,
          s = arguments,
          c = ++oy,
          l = Qe(i + " - runid: " + c + " - init", n).apply(u, s),
          d,
          p = void 0,
          v = new Promise(function (h, f) {
            var g = 0;
            d = f;
            function _(O) {
              p = void 0;
              var w;
              try {
                w = Qe(i + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function b(O) {
              p = void 0;
              var w;
              try {
                w = Qe(i + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function y(O) {
              if (lt(O?.then)) {
                O.then(y, f);
                return;
              }
              return O.done ? h(O.value) : ((p = Promise.resolve(O.value)), p.then(_, b));
            }
            _(void 0);
          });
        return (
          (v.cancel = Qe(i + " - runid: " + c + " - cancel", function () {
            try {
              p && Rl(p);
              var h = l.return(void 0),
                f = Promise.resolve(h.value);
              (f.then(Tr, Tr), Rl(f), d(new bp()));
            } catch (g) {
              d(g);
            }
          })),
          v
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, $o);
qr.bound = wt(sy);
function Rl(e) {
  lt(e.cancel) && e.cancel();
}
function Ei(e) {
  return e?.isMobXFlow === !0;
}
function uy(e, t) {
  return e ? Za(e) || !!e[F] || iu(e) || Sa(e) || Xa(e) : !1;
}
function yp(e) {
  return uy(e);
}
function Lt(e, t) {
  (t === void 0 && (t = void 0), Je());
  try {
    return e.apply(t);
  } finally {
    Xe();
  }
}
function xr(e) {
  return e[F];
}
var cy = {
  has: function (t, r) {
    return xr(t).has_(r);
  },
  get: function (t, r) {
    return xr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return lr(r) ? ((i = xr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return lr(r) ? ((n = xr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = xr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return xr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    H(13);
  },
};
function ly(e, t) {
  var r, n;
  return (
    zv(),
    (e = Yr(e, t)),
    (n = (r = e[F]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, cy))
  );
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Bi(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Uv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ye(e, t) {
  var r = br();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, a = n.length;
      i < a && ((t = n[i](t)), t && !t.type && H(14), !!t);
      i++
    );
    return t;
  } finally {
    Bt(r);
  }
}
function ut(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function qi(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Uv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ct(e, t) {
  var r = br(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Bt(r);
  }
}
function su(e, t, r) {
  return (
    mr(function () {
      var n,
        i = Yr(e, r)[F];
      ((n = t) != null || (t = U_(e)),
        Ga(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var Pl = "splice",
  Ot = "update",
  dy = 1e4,
  fy = {
    get: function (t, r) {
      var n = t[F];
      return r === F
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Nt(Ea, r)
              ? Ea[r]
              : t[r];
    },
    set: function (t, r, n) {
      var i = t[F];
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
  uu = (function () {
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
        (this.atom_ = new Qt(r)),
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
        return Bi(this, n);
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
          qi(this, n)
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
          this.legacyMode_ && i > 0 && xp(n + i + 1));
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
          a === void 0 && (a = Es),
          Ke(this))
        ) {
          var s = Ye(this, { object: this.proxy_, type: Pl, index: n, removedCount: i, added: a });
          if (!s) return Es;
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
        if (a.length < dy) {
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
        var o = !this.owned_ && gi(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Ot,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: a,
                }
              : null;
        (this.atom_.reportChanged(), u && ct(this, s));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && gi(),
          u = ut(this),
          s =
            u || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Pl,
                  index: n,
                  removed: a,
                  added: i,
                  removedCount: a.length,
                  addedCount: i.length,
                }
              : null;
        (this.atom_.reportChanged(), u && ct(this, s));
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
          if (Ke(this)) {
            var u = Ye(this, { type: Ot, object: this.proxy_, index: n, newValue: i });
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
function vy(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    zv(),
    mr(function () {
      var i = new uu(r, t, n, !1);
      Vv(i.values_, F, i);
      var a = new Proxy(i.values_, fy);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var Ea = {
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
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
    var o = this[F];
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
    return this[F].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[F].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (var t = this[F], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (A.trackingDerivation && H(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && H(37, "sort");
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var r = this[F],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
ie("at", Be);
ie("concat", Be);
ie("flat", Be);
ie("includes", Be);
ie("indexOf", Be);
ie("join", Be);
ie("lastIndexOf", Be);
ie("slice", Be);
ie("toString", Be);
ie("toLocaleString", Be);
ie("toSorted", Be);
ie("toSpliced", Be);
ie("with", Be);
ie("every", ft);
ie("filter", ft);
ie("find", ft);
ie("findIndex", ft);
ie("findLast", ft);
ie("findLastIndex", ft);
ie("flatMap", ft);
ie("forEach", ft);
ie("map", ft);
ie("some", ft);
ie("toReversed", ft);
ie("reduce", mp);
ie("reduceRight", mp);
function ie(e, t) {
  typeof Array.prototype[e] == "function" && (Ea[e] = t(e));
}
function Be(e) {
  return function () {
    var t = this[F];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function ft(e) {
  return function (t, r) {
    var n = this,
      i = this[F];
    i.atom_.reportObserved();
    var a = i.dehanceValues_(i.values_);
    return a[e](function (o, u) {
      return t.call(r, o, u, n);
    });
  };
}
function mp(e) {
  return function () {
    var t = this,
      r = this[F];
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
var py = _r("ObservableArrayAdministration", uu);
function Qa(e) {
  return $a(e) && py(e[F]);
}
var hy = {},
  Wt = "add",
  ka = "delete",
  wp = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = fr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[F] = hy),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        lt(Map) || H(18),
        mr(function () {
          ((a.keysAtom_ = Kv("ObservableMap.keys()")),
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
        if (!A.trackingDerivation) return this.has_(n);
        var a = this.hasMap_.get(n);
        if (!a) {
          var o = (a = new ur(this.has_(n), Ha, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            hp(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (Ke(this)) {
          var o = Ye(this, { type: a ? Ot : Wt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, Ke(this))) {
          var a = Ye(this, { type: ka, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = gi(),
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: ka,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Lt(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            u && ct(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var o = gi(),
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Ot,
                    object: this,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && ct(this, s));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Lt(function () {
            var c,
              l = new ur(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = gi(),
          u = ut(this),
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
        u && ct(this, s);
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
        return Cl({
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
        return Cl({
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
        for (var a = Mr(this), o; !(o = a()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(i, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          yr(n) && (n = new Map(n)),
          Lt(function () {
            Jt(n)
              ? L_(n).forEach(function (a) {
                  return i.set(a, n[a]);
                })
              : Array.isArray(n)
                ? n.forEach(function (a) {
                    var o = a[0],
                      u = a[1];
                    return i.set(o, u);
                  })
                : Wr(n)
                  ? (M_(n) || H(19, n),
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
        Lt(function () {
          ip(function () {
            for (var i = Mr(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Lt(function () {
            for (
              var a = gy(n), o = new Map(), u = !1, s = Mr(i.data_.keys()), c;
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
            for (var v = Mr(a.entries()), h; !(h = v()).done; ) {
              var f = h.value,
                g = f[0],
                _ = f[1],
                b = i.data_.has(g);
              if ((i.set(g, _), i.data_.has(g))) {
                var y = i.data_.get(g);
                (o.set(g, y), b || (u = !0));
              }
            }
            if (!u)
              if (i.data_.size !== o.size) i.keysAtom_.reportChanged();
              else
                for (var O = i.data_.keys(), w = o.keys(), S = O.next(), x = w.next(); !S.done; ) {
                  if (S.value !== x.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  ((S = O.next()), (x = w.next()));
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
        return qi(this, n);
      }),
      (t.intercept_ = function (n) {
        return Bi(this, n);
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
  yr = _r("ObservableMap", wp);
function Cl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), lu(e));
}
function gy(e) {
  if (Wr(e) || yr(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Jt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return H(21, e);
}
var _y = {},
  Op = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = fr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[F] = _y),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        lt(Set) || H(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, i);
        }),
        mr(function () {
          ((a.atom_ = Kv(a.name_)), r && a.replace(r));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        Lt(function () {
          ip(function () {
            for (var i = Mr(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = Mr(this), o; !(o = a()).done; ) {
          var u = o.value;
          n.call(i, u, u, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, Ke(this))) {
          var a = Ye(this, { type: Wt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Lt(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            u = ut(this),
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
          u && ct(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (Ke(this)) {
          var a = Ye(this, { type: ka, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = ut(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ka,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Lt(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
            }),
            u && ct(this, s),
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
        return Al({
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
        return Al({
          next: function () {
            var o = i.next(),
              u = o.value,
              s = o.done;
            return s ? { value: void 0, done: s } : { value: n.dehanceValue_(u), done: s };
          },
        });
      }),
      (t.intersection = function (n) {
        if (Mt(n) && !bt(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Mt(n) && !bt(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Mt(n) && !bt(n)) return n.symmetricDifference(this);
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
        if (Mt(n) && !bt(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          bt(n) && (n = new Set(n)),
          Lt(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : Mt(n)
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
        return qi(this, n);
      }),
      (t.intercept_ = function (n) {
        return Bi(this, n);
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
  bt = _r("ObservableSet", Op);
function Al(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), lu(e));
}
var Il = Object.create(null),
  jl = "remove",
  Sp = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = fb),
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
        (this.keysAtom_ = new Qt("ObservableObject.keys")),
        (this.isPlainObject_ = Jt(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var a = this.values_.get(n);
        if (a instanceof dt) return (a.set(i), !0);
        if (Ke(this)) {
          var o = Ye(this, { type: Ot, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var u = ut(this),
            s = !1,
            c =
              u || s
                ? {
                    type: Ot,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: a.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          (a.setNewValue_(i), u && ct(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !Nt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          Nt(this.target_, n)
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
        if (!A.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new ur(n in this.target_, Ha, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[yt]) != null && a[n]) return;
            H(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== Ua; ) {
            var u = ba(o, n);
            if (u) {
              var s = i.make_(this, n, u, o);
              if (s === 0) return;
              if (s === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Tl(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, a, o) {
        if ((o === void 0 && (o = !1), a === !0 && (a = this.defaultAnnotation_), a === !1))
          return this.defineProperty_(n, i, o);
        var u = a.extend_(this, n, i, o);
        return (u && Tl(this, a, n), u);
      }),
      (t.defineProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = dr({}, i, { value: s }));
          }
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else mt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, a, o) {
        (o === void 0 && (o = !1), this.keysAtom_);
        try {
          Je();
          var u = this.delete_(n);
          if (!u) return u;
          if (Ke(this)) {
            var s = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i,
            });
            if (!s) return null;
            i = s.newValue;
          }
          var c = Dl(n),
            l = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
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
          Xe();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Je();
          var o = this.delete_(n);
          if (!o) return o;
          if (Ke(this)) {
            var u = Ye(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: void 0,
            });
            if (!u) return null;
          }
          (i.name || (i.name = "ObservableObject.key"), (i.context = this.proxy_ || this.target_));
          var s = Dl(n),
            c = {
              configurable: A.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, n, c)) return !1;
          } else mt(this.target_, n, c);
          (this.values_.set(n, new dt(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !Nt(this.target_, n))) return !0;
        if (Ke(this)) {
          var a = Ye(this, { object: this.proxy_ || this.target_, name: n, type: jl });
          if (!a) return null;
        }
        try {
          var o;
          Je();
          var u = ut(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = ba(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof ur && (l = c.value_), lp(c)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null || (o = o.get(n)) == null || o.set(n in this.target_),
            u || s)
          ) {
            var p = {
              type: jl,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            u && ct(this, p);
          }
        } finally {
          Xe();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return qi(this, n);
      }),
      (t.intercept_ = function (n) {
        return Bi(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = ut(this),
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
          o && ct(this, s);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Ga(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Yr(e, t) {
  var r;
  if (Nt(e, F)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Sp(e, new Map(), String(n), Sb(t));
  return (Va(e, F, i), e);
}
var by = _r("ObservableObjectAdministration", Sp);
function Dl(e) {
  return (
    Il[e] ||
    (Il[e] = {
      get: function () {
        return this[F].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[F].setObservablePropValue_(e, r);
      },
    })
  );
}
function Za(e) {
  return $a(e) ? by(e[F]) : !1;
}
function Tl(e, t, r) {
  var n;
  (n = e.target_[yt]) == null || delete n[r];
}
var yy = kp(0),
  my = (function () {
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
  Vo = 0,
  Ep = function () {};
function wy(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
wy(Ep, Array.prototype);
var cu = (function (e) {
  function t(n, i, a, o) {
    var u;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      mr(function () {
        var s = new uu(a, i, o, !0);
        ((s.proxy_ = u),
          Vv(u, F, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          my && Object.defineProperty(u, "0", yy));
      }),
      u
    );
  }
  Wv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[F].atom_.reportObserved();
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        a.map(function (u) {
          return Qa(u) ? u.slice() : u;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return lu({
        next: function () {
          return i < n.length ? { value: n[i++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Kr(t, [
      {
        key: "length",
        get: function () {
          return this[F].getArrayLength_();
        },
        set: function (i) {
          this[F].setArrayLength_(i);
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
})(Ep);
Object.entries(Ea).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Va(cu.prototype, t, r);
});
function kp(e) {
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
function Oy(e) {
  mt(cu.prototype, "" + e, kp(e));
}
function xp(e) {
  if (e > Vo) {
    for (var t = Vo; t < e + 100; t++) Oy(t);
    Vo = e;
  }
}
xp(1e3);
function Sy(e, t, r) {
  return new cu(e, t, r);
}
function xa(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Qa(e)) return (t !== void 0 && H(23), e[F].atom_);
    if (bt(e)) return e.atom_;
    if (yr(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || H(25, t, Ds(e)), r);
    }
    if (Za(e)) {
      if (!t) return H(26);
      var n = e[F].values_.get(t);
      return (n || H(27, t, Ds(e)), n);
    }
    if (iu(e) || Xa(e) || Sa(e)) return e;
  } else if (lt(e) && Sa(e[F])) return e[F];
  H(28);
}
function Ey(e, t) {
  if ((e || H(29), iu(e) || Xa(e) || Sa(e) || yr(e) || bt(e))) return e;
  if (e[F]) return e[F];
  H(24, e);
}
function Ds(e, t) {
  var r;
  if (t !== void 0) r = xa(e, t);
  else {
    if (Br(e)) return e.name;
    Za(e) || yr(e) || bt(e) ? (r = Ey(e)) : (r = xa(e));
  }
  return r.name_;
}
function mr(e) {
  var t = br(),
    r = Ya(!0);
  Je();
  try {
    return e();
  } finally {
    (Xe(), Ja(r), Bt(t));
  }
}
var Ml = Ua.toString;
function Rp(e, t, r) {
  return (r === void 0 && (r = -1), Ts(e, t, r));
}
function Ts(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== "function" && a !== "object" && typeof t != "object") return !1;
  var o = Ml.call(e);
  if (o !== Ml.call(t)) return !1;
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
  ((e = Ll(e)), (t = Ll(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(lt(s) && s instanceof s && lt(c) && c instanceof c) &&
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
    for (; l--; ) if (!Ts(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var d = Object.keys(e),
      p = d.length;
    if (Object.keys(t).length !== p) return !1;
    for (var v = 0; v < p; v++) {
      var h = d[v];
      if (!(Nt(t, h) && Ts(e[h], t[h], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function Ll(e) {
  return Qa(e) ? e.slice() : Wr(e) || yr(e) || Mt(e) || bt(e) ? Array.from(e.entries()) : e;
}
var Fl,
  ky = ((Fl = za().Iterator) == null ? void 0 : Fl.prototype) || {};
function lu(e) {
  return ((e[Symbol.iterator] = xy), Object.assign(Object.create(ky), e));
}
function xy() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = za();
  typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Ub, extras: { getDebugName: Ds }, $mobx: F });
var m = gr();
const E = Xt(m),
  Nl = cg({ __proto__: null, default: E }, [m]);
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!su) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Ry(e) {
  e();
}
function Py(e) {
  (e || (e = Ry), ry({ reactionScheduler: e }));
}
function Cy(e) {
  return iy(e);
}
var Ay = 1e4,
  Iy = 1e4,
  jy = (function () {
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
            (n === void 0 && (n = Ay), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Iy));
        },
      }),
      e
    );
  })(),
  Dy = typeof FinalizationRegistry < "u" ? FinalizationRegistry : jy,
  ki = new Dy(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Go = { exports: {} },
  Ho = {};
var Bl;
function Ty() {
  if (Bl) return Ho;
  Bl = 1;
  var e = gr();
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
      h = n({ inst: { value: v, getSnapshot: p } }),
      f = h[0].inst,
      g = h[1];
    return (
      a(
        function () {
          ((f.value = v), (f.getSnapshot = p), s(f) && g({ inst: f }));
        },
        [d, v, p],
      ),
      i(
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
    (Ho.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Ho
  );
}
var ql;
function My() {
  return (ql || ((ql = 1), (Go.exports = Ty())), Go.exports);
}
var Ly = My();
function zl(e) {
  e.reaction = new xt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Fy(e, t) {
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
          ki.unregister(n),
          (n.onStoreChange = u),
          n.reaction || (zl(n), (n.stateVersion = Symbol())),
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
  (i.reaction || (zl(i), ki.register(r, i, i)),
    E.useDebugValue(i.reaction, Cy),
    Ly.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot));
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
var Wo,
  Ko,
  Pp = typeof Symbol == "function" && Symbol.for,
  Ny =
    (Ko =
      (Wo = Object.getOwnPropertyDescriptor(function () {}, "name")) === null || Wo === void 0
        ? void 0
        : Wo.configurable) !== null && Ko !== void 0
      ? Ko
      : !1,
  Ul = Pp
    ? Symbol.for("react.forward_ref")
    : typeof m.forwardRef == "function" &&
      m.forwardRef(function (e) {
        return null;
      }).$$typeof,
  $l = Pp
    ? Symbol.for("react.memo")
    : typeof m.memo == "function" &&
      m.memo(function (e) {
        return null;
      }).$$typeof;
function By(e, t) {
  var r;
  if ($l && e.$$typeof === $l)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  var n = (r = void 0) !== null && r !== void 0 ? r : !1,
    i = e,
    a = e.displayName || e.name;
  if (Ul && e.$$typeof === Ul && ((n = !0), (i = e.render), typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var o = function (u, s) {
    return Fy(function () {
      return i(u, s);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    Ny && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = m.forwardRef(o)),
    (o = m.memo(o)),
    zy(e, o),
    o
  );
}
var qy = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function zy(e, t) {
  Object.keys(e).forEach(function (r) {
    qy[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Yo;
Py(Ma.unstable_batchedUpdates);
Yo = ki.finalizeAllImmediately;
function Uy(e, t) {
  if (Vl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var i = 0; i < r.length; i++)
    if (!Object.hasOwnProperty.call(t, r[i]) || !Vl(e[r[i]], t[r[i]])) return !1;
  return !0;
}
function Vl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Gl = Symbol("patchMixins"),
  Cp = Symbol("patchedDefinition");
function $y(e, t) {
  var r = (e[Gl] = e[Gl] || {}),
    n = (r[t] = r[t] || {});
  return ((n.locks = n.locks || 0), (n.methods = n.methods || []), n);
}
function Hl(e, t) {
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
function Wl(e, t) {
  var r = function () {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    Hl.call.apply(Hl, [this, e, t].concat(a));
  };
  return r;
}
function Vy(e, t, r) {
  var n = $y(e, t);
  n.methods.indexOf(r) < 0 && n.methods.push(r);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[Cp])) {
    var a = e[t],
      o = Ap(e, t, i ? i.enumerable : void 0, n, a);
    Object.defineProperty(e, t, o);
  }
}
function Ap(e, t, r, n, i) {
  var a,
    o = Wl(i, n);
  return (
    (a = {}),
    (a[Cp] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (s) {
      if (this === e) o = Wl(s, n);
      else {
        var c = Ap(this, t, r, n, s);
        Object.defineProperty(this, t, c);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = r),
    a
  );
}
var Kl = Symbol("ObserverAdministration"),
  Yl = Symbol("isMobXReactObserver");
function Ms(e) {
  var t;
  return (t = e[Kl]) != null
    ? t
    : (e[Kl] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: Ls(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Gy(e) {
  var t = e.prototype;
  if (e[Yl]) {
    var r = Ls(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[Yl] = !0;
  if (t.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== m.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Jl;
    else if (t.shouldComponentUpdate !== Jl)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var n = t.render;
  if (typeof n != "function") {
    var i = Ls(e);
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
        value: Hy.call(this, n),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var o = this,
        u = Ms(this);
      return (
        (u.mounted = !0),
        ki.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    Vy(t, "componentWillUnmount", function () {
      var o,
        u = Ms(this);
      ((o = u.reaction) == null || o.dispose(),
        (u.reaction = null),
        (u.forceUpdate = null),
        (u.mounted = !1),
        (u.reactionInvalidatedBeforeMount = !1));
    }),
    e
  );
}
function Ls(e) {
  return e.displayName || e.name || "<component>";
}
function Hy(e) {
  var t = e.bind(this),
    r = Ms(this);
  function n() {
    r.reaction || ((r.reaction = Wy(r)), r.mounted || ki.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = Db(!1, t);
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
function Wy(e) {
  return new xt(e.name + ".render()", function () {
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
function Jl(e, t) {
  return this.state !== t ? !0 : !Uy(this.props, e);
}
function eo(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? Gy(e)
      : By(e)
  );
}
function Fs() {
  return (
    (Fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fs.apply(null, arguments)
  );
}
function Ky(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Yy = ["children"],
  Xl = E.createContext({});
function Ip(e) {
  var t = e.children,
    r = Ky(e, Yy),
    n = E.useContext(Xl),
    i = E.useRef(Fs({}, n, r)),
    a = i.current;
  return E.createElement(Xl.Provider, { value: a }, t);
}
Ip.displayName = "MobXProvider";
E.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!oe) throw new Error("mobx-react requires mobx to be available");
var Jy = Object.defineProperty,
  Xy = Object.getOwnPropertyDescriptor,
  Pt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Xy(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Jy(t, r, i), i);
  };
class vt {
  constructor() {
    ((this.isLoading = !1), su(this));
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
Pt([oe], vt.prototype, "isLoading", 2);
Pt([oe], vt.prototype, "plan", 2);
Pt([oe], vt.prototype, "planString", 2);
Pt([oe], vt.prototype, "slowQueries", 2);
Pt([oe], vt.prototype, "history", 2);
Pt([Qe.bound], vt.prototype, "showPlan", 1);
Pt([Qe.bound], vt.prototype, "saveSlowQuery", 1);
Pt([Qe.bound], vt.prototype, "saveHistory", 1);
Pt([Qe], vt.prototype, "loading", 1);
Pt([Qe], vt.prototype, "stopLoading", 1);
const Qy = new vt();
var Zy = Object.defineProperty,
  em = Object.getOwnPropertyDescriptor,
  du = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? em(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Zy(t, r, i), i);
  };
class to {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), su(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
du([oe], to.prototype, "state", 2);
du([oe], to.prototype, "lastState", 2);
du([Qe.bound], to.prototype, "saveState", 1);
const fu = new to();
class tm {
  constructor() {
    ((this.usersStore = Qy), (this.stateStore = fu));
  }
}
const jp = new tm(),
  rm = m.createContext(jp),
  ro = () => m.useContext(rm);
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
function nm(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ie(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Dp(e) {
  var t = nm(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function Ql(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Dp(n.key), n));
  }
}
function ve(e, t, r) {
  return (
    t && Ql(e.prototype, t),
    r && Ql(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function im(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qe(e, t) {
  if (t && (Ie(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return im(e);
}
function Y(e) {
  return (
    (Y = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Y(e)
  );
}
function xi(e, t) {
  return (
    (xi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    xi(e, t)
  );
}
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && xi(e, t));
}
function R(e, t, r) {
  return (
    (t = Dp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function we() {}
function am(e) {
  if (Array.isArray(e)) return e;
}
function om(e, t) {
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
function Ns(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Tp(e, t) {
  if (e) {
    if (typeof e == "string") return Ns(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Ns(e, t)
          : void 0
    );
  }
}
function sm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return am(e) || om(e, t) || Tp(e, t) || sm();
}
var Mp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  um = function (t) {
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
  Ra = function (t, r) {
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
  cm = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Zl = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  lm = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var u = Zl(o, n, i),
      s = Zl(a.index, n, i),
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
function dm(e, t) {
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
    i = dm(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]), t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
  }
  return i;
}
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
function Jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ed(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ed(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var fm = (function () {
  function e(t) {
    var r = this;
    (fe(this, e),
      R(this, "_isAnalyticsEvent", !0),
      R(this, "clone", function () {
        var n = Jo({}, r.payload);
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
          Ie(r) === "object" && (this.payload = Jo(Jo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function vm(e) {
  if (Array.isArray(e)) return Ns(e);
}
function pm(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function hm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(e) {
  return vm(e) || pm(e) || Tp(e) || hm();
}
function gm(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = Y(e)) !== null; );
  return e;
}
function Pa() {
  return (
    (Pa =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = gm(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    Pa.apply(null, arguments)
  );
}
function _m(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, Lp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function bm(e, t, r, n) {
  var i = Pa(Y(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var ym = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = _m(this, t, [r])),
        R(n, "_isUIAnalyticsEvent", !0),
        R(n, "clone", function () {
          if (n.hasFired) return null;
          var i = Te(n.context),
            a = Te(n.handlers),
            o = JSON.parse(JSON.stringify(n.payload));
          return new t({ context: i, handlers: a, payload: o });
        }),
        R(n, "fire", function (i) {
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
      ze(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : bm(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(fm),
  mm = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  wm = function () {
    return m.useContext(mm);
  },
  Ca = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function Om(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Sm(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    i = m.useRef(r),
    a = n.current || !!(t && i.current.inputs && Om(t, i.current.inputs)),
    o = a ? i.current : { inputs: t, result: e() };
  return (
    m.useEffect(
      function () {
        ((n.current = !1), (i.current = o));
      },
      [o],
    ),
    o.result
  );
}
function Em(e, t) {
  return Sm(function () {
    return e;
  }, t);
}
function Fp() {
  var e = wm(),
    t = Em(
      function (r) {
        return new ym({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: r,
        });
      },
      [e],
    );
  return { createAnalyticsEvent: t };
}
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
function km(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? td(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : td(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ri(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = Fp(),
    c = s.createAnalyticsEvent,
    l = Ca(u),
    d = Ca(t),
    p = m.useCallback(
      function (v) {
        var h = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          f = km({ componentName: n, packageName: a, packageVersion: o }, l.current);
        h.context.push(f);
        var g = h.clone();
        (g && g.fire("atlaskit"), d.current(v, h));
      },
      [r, n, i, a, o, c, l, d],
    );
  return p;
}
function rd(e, t) {
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
function xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function nd(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    u = Fp(),
    s = u.createAnalyticsEvent,
    c = Ca(o),
    l = Ca(t),
    d = m.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          v = xm({ componentName: n, packageName: i, packageVersion: a }, c.current);
        p.context.push(v);
        var h = p.clone();
        (h && h.fire("atlaskit"), l.current(p));
      },
      [r, n, i, a, s, c, l],
    );
  return d;
}
var pr = "ASC",
  Aa = "DESC",
  Rm = "small",
  Ia = "large",
  Np = 0.22;
const Pm = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, Pm) : a;
      t[o] = a;
    }
  }
  let r = "";
  for (const n in t) r += t[n] + " ";
  if (r) return r.trimEnd();
}
function Bp(e, t, r) {
  return e ?? "var(--c-, )";
}
var Cm = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Am = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      u = ne(e, Cm);
    return m.createElement(
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
          className: P([
            "_1bsb1osq _yq5hus1c _btyzidpf _ect41gqc",
            r && "_1kqm1n9t",
            n && "_179r1uh4",
          ]),
        },
      ),
      i,
    );
  }),
  Im = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: P(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  jm = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--pagination--container"),
        className: P(["_1e0c1txw _1bah1h6o"]),
      },
      r,
    );
  },
  Dm = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--empty-view-with-fixed-height"),
        className: P(["_4t3i1jdh"]),
      },
      r,
    );
  },
  Tm = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
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
  Mm = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
function id(e, t) {
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
function ad(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? id(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : id(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Lm(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, qp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var od = function (t, r, n) {
    for (var i = 0; i < t.length; i++) {
      var a;
      if (r.cells[i] && ((a = r.cells[i]) === null || a === void 0 ? void 0 : a.key) === n) {
        var o;
        return (o = t[i]) === null || o === void 0 ? void 0 : o.key;
      }
    }
  },
  Fm = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === pr ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = od(s.cells, t, n),
        d = od(c.cells, t, n);
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
function Nm(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
      return ((i = Lm(this, n, [].concat(o))), R(i, "state", { pageRows: [] }), i);
    }
    return (
      ze(n, r),
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
                s = ne(a, Mm);
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
              Ra(c, s);
              var h, f;
              return (
                v ? ((h = u), (f = u)) : ((h = Fm(s, u, c, l) || []), (f = Mp(h, d, p))),
                ad(ad({}, o), {}, { pageRows: f })
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
var Bm = "--local-dynamic-table-width",
  zp = function (t) {
    var r = t.width;
    return typeof r < "u" ? R({}, Bm, "".concat(r, "%")) : void 0;
  },
  qm = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  zm = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ne(t, qm);
    return m.createElement(
      "td",
      te(
        {
          style: zp({ width: r }),
          ref: a,
          className: P([
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
  Um = ["isHighlighted", "children", "style", "testId", "className"],
  $m = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      u = ne(e, Um);
    return m.createElement(
      "tr",
      te(
        {
          style: i,
          className: P([
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
  Vm = ["cells"],
  Gm = ["content", "testId"],
  Hm = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ne(r, Vm);
    return E.createElement(
      $m,
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
          v = ne(c, Gm),
          h = (n || { cells: [] }).cells[l] || {},
          f = h.shouldTruncate,
          g = h.width;
        return E.createElement(
          zm,
          te({ "data-testid": p || (i && "".concat(i, "--cell-").concat(l)) }, v, {
            isFixedSize: a,
            key: l,
            shouldTruncate: f,
            width: g,
          }),
          d,
        );
      }),
    );
  };
function Wm(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, Up() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Up() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Up = function () {
    return !!e;
  })();
}
var Km = (function (e) {
    function t() {
      return (fe(this, t), Wm(this, t, arguments));
    }
    return (
      ze(t, e),
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
                return E.createElement(Hm, {
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
  Ym = Nm(
    E.forwardRef(function (e, t) {
      return E.createElement(Km, te({}, e, { forwardedRef: t }));
    }),
  );
function Jm(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, $p() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function $p() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($p = function () {
    return !!e;
  })();
}
var Xm = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = Jm(this, t, [r])), (n.state = { hasError: !1 }), n);
  }
  return (
    ze(t, e),
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
const vu = m.createContext(null);
var Qm = "#FFFFFF",
  Bs = "#42526E",
  Zm = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function e0(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Bs, ")")
    : "var(--ds-icon-inverse, ".concat(Qm, ")");
}
var Zi = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  t0 = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
  Vp = E.memo(
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
        p = typeof l == "number" ? l : Zm[l],
        v = "".concat(o, "ms"),
        h = e0(i),
        f = m.useContext(vu);
      return (
        t0(
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
            className: P([Zi.wrapperStyles, Zi.rotateStyles]),
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
              className: P([Zi.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: P([Zi.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
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
function ud(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var cd = "--contents-opacity",
  r0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  n0 = function (t) {
    var r = t.children,
      n = t.contentsOpacity,
      i = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": i && "".concat(i, "--contents--container"),
        className: P(["_tzy47hfw _lcxvglyw"]),
        style: ud(ud({}, R({}, cd, n)), {}, { "--_cnddr8": Bp("var(".concat(cd, ")")) }),
      },
      r,
    );
  },
  i0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner--container"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o"]),
      },
      r,
    );
  };
function a0(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, Gp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Gp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Gp = function () {
    return !!e;
  })();
}
var Hp = (function (e) {
  function t() {
    return (fe(this, t), a0(this, t, arguments));
  }
  return (
    ze(t, e),
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
            r0,
            { testId: s },
            a ? E.createElement(n0, { contentsOpacity: u, testId: s }, i) : i,
            a &&
              E.createElement(
                i0,
                { testId: s },
                E.createElement(Vp, {
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
R(Hp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ia,
  contentsOpacity: Np,
  loadingLabel: "Loading table",
});
var o0 = ["children", "testId"],
  s0 = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ne(e, o0);
    return m.createElement(
      "div",
      te({}, i, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  u0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      {
        "data-testid": n && "".concat(n, "--spinner-backdrop"),
        className: P(["_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw"]),
      },
      r,
    );
  },
  c0 = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function l0(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, Wp() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function Wp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Wp = function () {
    return !!e;
  })();
}
var Kp = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = l0(this, t, [].concat(i))),
      R(r, "spinnerRef", E.createRef()),
      R(r, "containerRef", E.createRef()),
      R(r, "componentDidMount", function () {
        r.props.isLoading &&
          r.hasTargetNode() &&
          (r.attachListeners(), r.updateTargetAppearance(), r.updateSpinnerPosition());
      }),
      R(r, "UNSAFE_componentWillReceiveProps", function (o) {
        !o.isLoading || !r.hasTargetNode(o)
          ? r.detachListeners()
          : r.props.isLoading || r.attachListeners();
      }),
      R(r, "componentDidUpdate", function () {
        r.hasTargetNode() &&
          (r.updateTargetAppearance(), r.props.isLoading && r.updateSpinnerPosition());
      }),
      R(r, "componentWillUnmount", function () {
        r.detachListeners();
      }),
      R(r, "getTargetNode", function () {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r.props,
          u = o.targetRef,
          s = u?.();
        return s || r.containerRef.current;
      }),
      R(r, "hasTargetNode", function (o) {
        return !!r.getTargetNode(o);
      }),
      R(r, "isVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return c <= 0 ? !1 : s < u;
      }),
      R(r, "isFullyVerticallyVisible", function (o, u) {
        var s = o.top,
          c = o.bottom;
        return s >= 0 && c <= u;
      }),
      R(r, "handleResize", function () {
        r.updateSpinnerPosition();
      }),
      R(r, "handleScroll", function () {
        r.updateSpinnerPosition();
      }),
      R(r, "translateSpinner", function (o, u, s) {
        ((o.style.position = s ? "fixed" : ""),
          (o.style.transform = u !== 0 ? "translate3d(0, ".concat(u, "px, 0)") : ""));
      }),
      R(r, "updateTargetAppearance", function () {
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
    ze(t, e),
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
              h = s.height;
            if (d) {
              var f = h >= l * 3;
              if (f && !this.isFullyVerticallyVisible(s, a)) {
                if (p >= 0) {
                  var g = a - p,
                    _ = g / 2 + p - l / 2,
                    b = g < l * 3 ? p + l : _;
                  this.translateSpinner(u, b, !0);
                } else if (p < 0 && v > a) {
                  var y = a / 2 - l / 2;
                  this.translateSpinner(u, y, !0);
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
              var x = S.getBoundingClientRect().top,
                T = (p - x) / 2;
              this.translateSpinner(u, T, !1);
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
            s0,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                u0,
                { testId: u },
                E.createElement(
                  c0,
                  { ref: this.spinnerRef },
                  E.createElement(Vp, {
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
R(Kp, "defaultProps", {
  isLoading: !0,
  spinnerSize: Ia,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Np), ")"),
  loadingLabel: "Loading table",
});
function d0(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    i = K(n, 2),
    a = i[0],
    o = i[1],
    u = m.useRef(r);
  m.useEffect(
    function () {
      u.current = r;
    },
    [r],
  );
  var s = r ? e : a,
    c = m.useCallback(function (l) {
      u.current || o(l);
    }, []);
  return [s, c];
}
var Jn = {};
function ld(e, t, r, n, i, a, o) {
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
        ld(a, n, i, o, u, "next", s);
      }
      function u(s) {
        ld(a, n, i, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var Xo = { exports: {} },
  Qo = { exports: {} },
  dd;
function Yp() {
  return (
    dd ||
      ((dd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Qo)),
    Qo.exports
  );
}
var Zo = { exports: {} },
  es = { exports: {} },
  fd;
function Jp() {
  return (
    fd ||
      ((fd = 1),
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
              function p(v, h) {
                t(s, v, function (f) {
                  return this._invoke(v, h, f);
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
      })(es)),
    es.exports
  );
}
var vd;
function Xp() {
  return (
    vd ||
      ((vd = 1),
      (function (e) {
        var t = Jp();
        function r() {
          var n,
            i,
            a = typeof Symbol == "function" ? Symbol : {},
            o = a.iterator || "@@iterator",
            u = a.toStringTag || "@@toStringTag";
          function s(g, _, b, y) {
            var O = _ && _.prototype instanceof l ? _ : l,
              w = Object.create(O.prototype);
            return (
              t(
                w,
                "_invoke",
                (function (S, x, T) {
                  var j,
                    C,
                    M,
                    z = 0,
                    q = T || [],
                    V = !1,
                    J = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: G,
                      f: G.bind(n, 4),
                      d: function (X, N) {
                        return ((j = X), (C = 0), (M = n), (J.n = N), c);
                      },
                    };
                  function G($, X) {
                    for (C = $, M = X, i = 0; !V && z && !N && i < q.length; i++) {
                      var N,
                        I = q[i],
                        be = J.p,
                        ae = I[2];
                      $ > 3
                        ? (N = ae === X) &&
                          ((M = I[(C = I[4]) ? 5 : ((C = 3), 3)]), (I[4] = I[5] = n))
                        : I[0] <= be &&
                          ((N = $ < 2 && be < I[1])
                            ? ((C = 0), (J.v = X), (J.n = I[1]))
                            : be < ae &&
                              (N = $ < 3 || I[0] > X || X > ae) &&
                              ((I[4] = $), (I[5] = X), (J.n = ae), (C = 0)));
                    }
                    if (N || $ > 1) return c;
                    throw ((V = !0), X);
                  }
                  return function ($, X, N) {
                    if (z > 1) throw TypeError("Generator is already running");
                    for (V && X === 1 && G(X, N), C = X, M = N; (i = C < 2 ? n : M) || !V; ) {
                      j || (C ? (C < 3 ? (C > 1 && (J.n = -1), G(C, M)) : (J.n = M)) : (J.v = M));
                      try {
                        if (((z = 2), j)) {
                          if ((C || ($ = "next"), (i = j[$]))) {
                            if (!(i = i.call(j, M)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((M = i.value), C < 2 && (C = 0));
                          } else
                            (C === 1 && (i = j.return) && i.call(j),
                              C < 2 &&
                                ((M = TypeError(
                                  "The iterator does not provide a '" + $ + "' method",
                                )),
                                (C = 1)));
                          j = n;
                        } else if ((i = (V = J.n < 0) ? M : S.call(x, J)) !== c) break;
                      } catch (I) {
                        ((j = n), (C = 1), (M = I));
                      } finally {
                        z = 1;
                      }
                    }
                    return { value: i, done: V };
                  };
                })(g, b, y),
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
            h = (p.prototype = l.prototype = Object.create(v));
          function f(g) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(g, p)
                : ((g.__proto__ = p), t(g, u, "GeneratorFunction")),
              (g.prototype = Object.create(h)),
              g
            );
          }
          return (
            (d.prototype = p),
            t(h, "constructor", p),
            t(p, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            t(p, u, "GeneratorFunction"),
            t(h),
            t(h, u, "Generator"),
            t(h, o, function () {
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
      })(Zo)),
    Zo.exports
  );
}
var ts = { exports: {} },
  rs = { exports: {} },
  ns = { exports: {} },
  pd;
function Qp() {
  return (
    pd ||
      ((pd = 1),
      (function (e) {
        var t = Yp(),
          r = Jp();
        function n(i, a) {
          function o(s, c, l, d) {
            try {
              var p = i[s](c),
                v = p.value;
              return v instanceof t
                ? a.resolve(v.v).then(
                    function (h) {
                      o("next", h, l, d);
                    },
                    function (h) {
                      o("throw", h, l, d);
                    },
                  )
                : a.resolve(v).then(
                    function (h) {
                      ((p.value = h), l(p));
                    },
                    function (h) {
                      return o("throw", h, l, d);
                    },
                  );
            } catch (h) {
              d(h);
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
      })(ns)),
    ns.exports
  );
}
var hd;
function Zp() {
  return (
    hd ||
      ((hd = 1),
      (function (e) {
        var t = Xp(),
          r = Qp();
        function n(i, a, o, u, s) {
          return new r(t().w(i, a, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(rs)),
    rs.exports
  );
}
var gd;
function f0() {
  return (
    gd ||
      ((gd = 1),
      (function (e) {
        var t = Zp();
        function r(n, i, a, o, u) {
          var s = t(n, i, a, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ts)),
    ts.exports
  );
}
var is = { exports: {} },
  _d;
function v0() {
  return (
    _d ||
      ((_d = 1),
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
      })(is)),
    is.exports
  );
}
var as = { exports: {} },
  os = { exports: {} },
  bd;
function p0() {
  return (
    bd ||
      ((bd = 1),
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
      })(os)),
    os.exports
  );
}
var yd;
function h0() {
  return (
    yd ||
      ((yd = 1),
      (function (e) {
        var t = p0().default;
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
      })(as)),
    as.exports
  );
}
var md;
function g0() {
  return (
    md ||
      ((md = 1),
      (function (e) {
        var t = Yp(),
          r = Xp(),
          n = f0(),
          i = Zp(),
          a = Qp(),
          o = v0(),
          u = h0();
        function s() {
          var c = r(),
            l = c.m(s),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(l) : l.__proto__).constructor;
          function p(f) {
            var g = typeof f == "function" && f.constructor;
            return !!g && (g === d || (g.displayName || g.name) === "GeneratorFunction");
          }
          var v = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(f) {
            var g, _;
            return function (b) {
              (g ||
                ((g = {
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
                    return ((g.resultName = w), _(b.d, u(O), S));
                  },
                  finish: function (O) {
                    return _(b.f, O);
                  },
                }),
                (_ = function (O, w, S) {
                  ((b.p = g.prev), (b.n = g.next));
                  try {
                    return O(w, S);
                  } finally {
                    g.next = b.n;
                  }
                })),
                g.resultName && ((g[g.resultName] = b.v), (g.resultName = void 0)),
                (g.sent = b.v),
                (g.next = b.n));
              try {
                return f.call(this, g);
              } finally {
                ((b.p = g.prev), (b.n = g.next));
              }
            };
          }
          return ((e.exports = s =
            function () {
              return {
                wrap: function (_, b, y, O) {
                  return c.w(h(_), b, y, O && O.reverse());
                },
                isGeneratorFunction: p,
                mark: c.m,
                awrap: function (_, b) {
                  return new t(_, b);
                },
                AsyncIterator: a,
                async: function (_, b, y, O, w) {
                  return (p(b) ? i : n)(h(_), b, y, O, w);
                },
                keys: o,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Xo)),
    Xo.exports
  );
}
var ss, wd;
function _0() {
  if (wd) return ss;
  wd = 1;
  var e = g0()();
  ss = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return ss;
}
var b0 = _0();
const B = Xt(b0);
var ar = {},
  Rr = {},
  ea = {},
  Xn = {},
  Od;
function y0() {
  if (Od) return Xn;
  ((Od = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.V1InitializeContainer = void 0));
  const e = kt();
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
  return ((Xn.V1InitializeContainer = t), Xn);
}
var Qn = {},
  Sd;
function m0() {
  if (Sd) return Qn;
  ((Sd = 1),
    Object.defineProperty(Qn, "__esModule", { value: !0 }),
    (Qn.V2InitializeContainer = void 0));
  const e = kt();
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
  return ((Qn.V2InitializeContainer = t), Qn);
}
var Ed;
function w0() {
  if (Ed) return ea;
  ((Ed = 1), Object.defineProperty(ea, "__esModule", { value: !0 }));
  const e = kt(),
    t = y0(),
    r = m0();
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
  return ((ea.default = n), ea);
}
var Pr = {},
  Zn = {},
  kd;
function O0() {
  if (kd) return Zn;
  ((kd = 1),
    Object.defineProperty(Zn, "__esModule", { value: !0 }),
    (Zn._resolveDeltasResponse = void 0));
  const e = kt(),
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
var xd;
function eh() {
  if (xd) return Pr;
  xd = 1;
  var e =
    (Pr && Pr.__awaiter) ||
    function (i, a, o, u) {
      function s(c) {
        return c instanceof o
          ? c
          : new o(function (l) {
              l(c);
            });
      }
      return new (o || (o = Promise))(function (c, l) {
        function d(h) {
          try {
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  Object.defineProperty(Pr, "__esModule", { value: !0 });
  const t = kt(),
    r = O0();
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
        var l, d, p, v, h, f;
        const g = o ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse") : null;
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
        if (g?.has_updates) {
          const b =
            g?.hash_used !==
            ((f =
              (h = (v = this._option) === null || v === void 0 ? void 0 : v.networkConfig) ===
                null || h === void 0
                ? void 0
                : h.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2");
          _ = Object.assign(Object.assign({}, _), {
            sinceTime: c && !b ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && c ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: b ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(a, g, _, u);
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
  return ((Pr.default = n), Pr);
}
var ei = {},
  Rd;
function S0() {
  if (Rd) return ei;
  ((Rd = 1),
    Object.defineProperty(ei, "__esModule", { value: !0 }),
    (ei._makeParamStoreGetter = void 0));
  const e = kt(),
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
    return (v, h) => {
      if (d == null) return h;
      const f = d[v];
      if (f == null || (h != null && (0, e._typeOf)(h) !== f.param_type)) return h;
      switch (f.ref_type) {
        case "static":
          return i(f);
        case "gate":
          return a(l, f, p);
        case "dynamic_config":
          return o(l, f, h, p);
        case "experiment":
          return u(l, f, h, p);
        case "layer":
          return s(l, f, h, p);
        default:
          return h;
      }
    };
  }
  return ((ei._makeParamStoreGetter = c), ei);
}
var or = {},
  Pd;
function E0() {
  if (Pd) return or;
  Pd = 1;
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
        function d(h) {
          try {
            v(u.next(h));
          } catch (f) {
            l(f);
          }
        }
        function p(h) {
          try {
            v(u.throw(h));
          } catch (f) {
            l(f);
          }
        }
        function v(h) {
          h.done ? c(h.value) : s(h.value).then(d, p);
        }
        v((u = u.apply(i, a || [])).next());
      });
    };
  (Object.defineProperty(or, "__esModule", { value: !0 }),
    (or.StatsigEvaluationsDataAdapter = void 0));
  const t = kt(),
    r = eh();
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
  return ((or.StatsigEvaluationsDataAdapter = n), or);
}
var Cd;
function k0() {
  if (Cd) return Rr;
  Cd = 1;
  var e =
    (Rr && Rr.__awaiter) ||
    function (u, s, c, l) {
      function d(p) {
        return p instanceof c
          ? p
          : new c(function (v) {
              v(p);
            });
      }
      return new (c || (c = Promise))(function (p, v) {
        function h(_) {
          try {
            g(l.next(_));
          } catch (b) {
            v(b);
          }
        }
        function f(_) {
          try {
            g(l.throw(_));
          } catch (b) {
            v(b);
          }
        }
        function g(_) {
          _.done ? p(_.value) : d(_.value).then(h, f);
        }
        g((l = l.apply(u, s || [])).next());
      });
    };
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  const t = kt(),
    r = w0(),
    n = eh(),
    i = S0(),
    a = E0();
  let o = class qs extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof qs
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new qs(s ?? "", {}));
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
      const h = (p = l?.plugins) !== null && p !== void 0 ? p : [];
      for (const f of h) f.bind(this);
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
      const h = c?.disableBackgroundCacheRefresh;
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
    _getFeatureGateImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getGate(s),
        h = (0, t._makeFeatureGate)(s, v, p),
        f =
          (d = (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(s, c) {
      var l, d;
      const { result: p, details: v } = this._store.getConfig(s),
        h = (0, t._makeDynamicConfig)(s, v, p),
        f =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, h, this._user, c),
        g = f ?? h;
      return (
        this._enqueueExposure(
          s,
          (0, t._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          c,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(s, c) {
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
      const _ =
          (v =
            (p = this.overrideAdapter) === null || p === void 0
              ? void 0
              : p.getExperimentOverride) === null || v === void 0
            ? void 0
            : v.call(p, g, this._user, c),
        b = _ ?? g;
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
      const { result: v, details: h } = this._store.getLayer(s),
        f = (0, t._makeLayer)(s, h, v),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0 ? void 0 : l.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(l, f, this._user, c);
      c?.disableExposureLog && this._logger.incrementNonExposureCount(s);
      const _ = (0, t._mergeOverride)(
        f,
        g,
        (p = g?.__value) !== null && p !== void 0 ? p : f.__value,
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
      const h = {
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
            : d.call(l, h, c);
      return (
        f != null &&
          ((h.__configuration = f.config),
          (h.details = f.details),
          (h.get = (0, i._makeParamStoreGetter)(this, f.config, c))),
        h
      );
    }
  };
  return ((Rr.default = o), Rr);
}
var Ad;
function x0() {
  return (
    Ad ||
      ((Ad = 1),
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
        const n = kt(),
          i = k0();
        ((e.StatsigClient = i.default), r(kt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(ar)),
    ar
  );
}
var st = x0(),
  us = { exports: {} },
  Id;
function R0() {
  return (
    Id ||
      ((Id = 1),
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
            h = r ? r + c : c;
          return (
            s._events[h]
              ? s._events[h].fn
                ? (s._events[h] = [s._events[h], v])
                : s._events[h].push(v)
              : ((s._events[h] = v), s._eventsCount++),
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
            for (var p = 0, v = d.length, h = new Array(v); p < v; p++) h[p] = d[p].fn;
            return h;
          }),
          (u.prototype.listenerCount = function (c) {
            var l = r ? r + c : c,
              d = this._events[l];
            return d ? (d.fn ? 1 : d.length) : 0;
          }),
          (u.prototype.emit = function (c, l, d, p, v, h) {
            var f = r ? r + c : c;
            if (!this._events[f]) return !1;
            var g = this._events[f],
              _ = arguments.length,
              b,
              y;
            if (g.fn) {
              switch ((g.once && this.removeListener(c, g.fn, void 0, !0), _)) {
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
              for (y = 1, b = new Array(_ - 1); y < _; y++) b[y - 1] = arguments[y];
              g.fn.apply(g.context, b);
            } else {
              var O = g.length,
                w;
              for (y = 0; y < O; y++)
                switch ((g[y].once && this.removeListener(c, g[y].fn, void 0, !0), _)) {
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
                    if (!b) for (w = 1, b = new Array(_ - 1); w < _; w++) b[w - 1] = arguments[w];
                    g[y].fn.apply(g[y].context, b);
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
            var h = this._events[v];
            if (h.fn) h.fn === l && (!p || h.once) && (!d || h.context === d) && o(this, v);
            else {
              for (var f = 0, g = [], _ = h.length; f < _; f++)
                (h[f].fn !== l || (p && !h[f].once) || (d && h[f].context !== d)) && g.push(h[f]);
              g.length ? (this._events[v] = g.length === 1 ? g[0] : g) : o(this, v);
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
      })(us)),
    us.exports
  );
}
var P0 = R0();
const C0 = Xt(P0);
function jd(e, t) {
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
      ? jd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ta = "@all-features",
  A0 = (function () {
    function e() {
      (fe(this, e), R(this, "eventToValue", new Map()), (this.emitter = new C0()));
    }
    return ve(e, [
      {
        key: "onGateUpdated",
        value: function (r, n, i, a) {
          var o = this,
            u = i(r, Gt(Gt({}, a), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(n) === void 0 && this.eventToValue.set(n, u);
          var s = function () {
            var l = i(r, Gt(Gt({}, a), {}, { fireGateExposure: !1 })),
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
            l = o(r, n, i, Gt(Gt({}, u), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(a) === void 0 && this.eventToValue.set(a, l);
          var d = function () {
            var v = o(r, n, i, Gt(Gt({}, u), {}, { fireExperimentExposure: !1 })),
              h = s.eventToValue.get(a);
            h !== v && (s.eventToValue.set(a, v), a(v));
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
            this.emitter.on(ta, r),
            function () {
              n.emitter.off(ta, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(ta),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== ta;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  I0 = "fedramp-moderate";
function j0() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === I0;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var pu = (function (e) {
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
  fi = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Pi = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  D0 = [
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
function Dd(e, t) {
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
function zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ra = function (t) {
    return zs({ perimeter: j0() ? Pi.FEDRAMP_MODERATE : Pi.COMMERCIAL }, t);
  },
  ti = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (p, v) {
      var h = K(p, 1),
        f = h[0],
        g = K(v, 1),
        _ = g[0];
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
  Td = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  T0 = function (t) {
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
    var p = ne(t, D0);
    return zs(
      zs({}, p),
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
  M0 = Object.entries(pu).map(function (e) {
    var t = K(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  th = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = M0.find(function (o) {
            var u = K(o, 1),
              s = u[0];
            return a.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : pu.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  Us = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Md = (function () {
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
                th(r.details),
                Us(
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
  Ld = (function () {
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
                th(r.details),
                function (l, d) {
                  return r.get(d);
                },
                Us(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                Us(
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
function L0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function rh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (rh = function () {
    return !!e;
  })();
}
function F0(e, t, r) {
  if (rh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && xi(i, r.prototype), i);
}
function $s(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    ($s = function (n) {
      if (n === null || !L0(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return F0(n, arguments, Y(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        xi(i, n)
      );
    }),
    $s(e)
  );
}
function N0(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, nh() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var Fd = (function (e) {
  function t(r) {
    return (fe(this, t), N0(this, t, [r]));
  }
  return (ze(t, e), ve(t));
})($s(Error));
function Nd(e, t) {
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
function B0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var q0 = 5e3,
  z0 = "https://api.atlassian.com/flags",
  U0 = "https://api.stg.atlassian.com/flags",
  $0 = "https://api.dev.atlassian.com/flags",
  V0 = "https://api.stg.atlassian-us-gov-mod.com/flags",
  G0 = "https://api.atlassian-us-gov-mod.com/flags",
  H0 = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  W0 = "oasis-stg.com/flags",
  K0 = "atlassian-isolated.net/flags",
  Y0 = "/gateway/api/flags",
  cs = (function () {
    function e() {
      fe(this, e);
    }
    return ve(e, null, [
      {
        key: "fetchClientSdk",
        value: (function () {
          var t = de(
            B.mark(function n(i) {
              var a, o;
              return B.wrap(
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
            B.mark(function n(i, a, o) {
              var u;
              return B.wrap(
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
            B.mark(function n(i) {
              var a;
              return B.wrap(function (u) {
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
                        new Fd(
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
                      throw new Fd("Unexpected 204 response");
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
            B.mark(function n(i) {
              var a;
              return B.wrap(function (u) {
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
          if (n) return Y0;
          if (i === Pi.FEDRAMP_MODERATE)
            switch (r) {
              case fi.Production:
                return G0;
              case fi.Staging:
                return V0;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === Pi.COMMERCIAL)
            switch (r) {
              case fi.Development:
                return $0;
              case fi.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : U0;
              default:
                var u = this.getApiUrl(a);
                return u !== null ? u : z0;
            }
          else throw new Error('Invalid perimeter "'.concat(i, '"'));
        },
      },
      {
        key: "fetchRequest",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o, u) {
              var s, c, l, d, p;
              return B.wrap(
                function (h) {
                  for (;;)
                    switch ((h.prev = h.next)) {
                      case 0:
                        return (
                          (s = e.getBaseUrl(
                            o.environment,
                            o.useGatewayURL,
                            o.perimeter,
                            o.isolationContextId,
                          )),
                          (c = o.fetchTimeoutMs || q0),
                          AbortSignal.timeout
                            ? (l = AbortSignal.timeout(c))
                            : AbortController &&
                              ((d = new AbortController()),
                              (l = d.signal),
                              setTimeout(function () {
                                return d.abort();
                              }, c)),
                          (h.next = 5),
                          fetch(
                            "".concat(s).concat(i),
                            B0(
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
          if (n === void 0) return r ? H0.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat(W0);
          var u = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(i, "//api.").concat(u[1], ".").concat(K0) : null;
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
function Bd(e, t) {
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
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function J0(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, ih() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function X0(e, t, r, n) {
  var i = Pa(Y(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Q0 = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = J0(this, t, ["NoFetchDataAdapter", "nofetch"])),
      R(r, "bootstrapResult", null),
      r
    );
  }
  return (
    ze(t, e),
    ve(t, [
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
          var r = de(
            B.mark(function i(a, o) {
              return B.wrap(function (s) {
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
            B.mark(function i(a, o, u) {
              return B.wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return c.abrupt(
                          "return",
                          this.bootstrapResult &&
                            ri(
                              ri({}, this.bootstrapResult),
                              {},
                              { fullUserHash: st._getFullUserHash(o) },
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
            ri(ri({}, this.bootstrapResult), {}, { fullUserHash: st._getFullUserHash(n) })
          );
        },
      },
      {
        key: "_fetchFromNetwork",
        value: (function () {
          var r = de(
            B.mark(function i(a, o, u) {
              return B.wrap(function (c) {
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
          var i = st._getStorageKey(this._getSdkKey(), n);
          return "".concat(st.DataAdapterCachePrefix, ".").concat(this._cacheSuffix, ".").concat(i);
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
          X0(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = ri({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(st.DataAdapterCore);
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
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Z0(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = ew(e)) || t) {
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
function ew(e, t) {
  if (e) {
    if (typeof e == "string") return zd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? zd(e, t)
          : void 0
    );
  }
}
function zd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ls = "LocalOverride:Recognized",
  tw = "STATSIG_OVERRIDES",
  Ud = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  Cr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  He = function (t, r) {
    return r + ":" + t;
  },
  rw = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = Cr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : Cr();
          } catch {
            return Cr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = Cr(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
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
                h = p[1];
              r.gates[v] = h;
            }
            for (
              var f = 0, g = Object.entries((_ = s.configs) !== null && _ !== void 0 ? _ : {});
              f < g.length;
              f++
            ) {
              var _,
                b = K(g[f], 2),
                y = b[0],
                O = b[1];
              r.configs[y] = O;
            }
            for (
              var w = 0, S = Object.entries((x = s.layers) !== null && x !== void 0 ? x : {});
              w < S.length;
              w++
            ) {
              var x,
                T = K(S[w], 2),
                j = T[0],
                C = T[1];
              r.layers[j] = C;
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
            this.parseStoredOverrides(Ud),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Ud);
          } catch {}
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              u = Z0(o),
              s;
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var c = s.value,
                  l = Ge._DJB2(c);
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
          var n = xe(xe({}, Cr()), r);
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
              this._djb2Map.set(He(Ge._DJB2(p), u), v);
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
            this._djb2Map.set(He(Ge._DJB2(r), "gates"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeGateOverride",
        value: function (r) {
          (delete this._overrides.gates[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "gates")),
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
                : this._djb2Map.get(He(r.name, "gates"));
          return a == null
            ? null
            : xe(xe({}, r), {}, { value: a, details: xe(xe({}, r.details), {}, { reason: ls }) });
        },
      },
      {
        key: "overrideDynamicConfig",
        value: function (r, n) {
          ((this._overrides.configs[r] = n),
            this._djb2Map.set(He(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeDynamicConfigOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "configs")),
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
            this._djb2Map.set(He(Ge._DJB2(r), "configs"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeExperimentOverride",
        value: function (r) {
          (delete this._overrides.configs[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "configs")),
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
            this._djb2Map.set(He(Ge._DJB2(r), "layers"), n),
            this.saveOverrides());
        },
      },
      {
        key: "removeLayerOverride",
        value: function (r) {
          (delete this._overrides.layers[r],
            this._djb2Map.delete(He(Ge._DJB2(r), "layers")),
            this.saveOverrides());
        },
      },
      {
        key: "removeAllOverrides",
        value: function () {
          this._overrides = Cr();
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
                : this._djb2Map.get(He(r.name, "layers"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  __value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: ls }),
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
                : this._djb2Map.get(He(r.name, "configs"));
          return a == null
            ? null
            : xe(
                xe({}, r),
                {},
                {
                  value: a,
                  get: Ge._makeTypedGet(r.name, a),
                  details: xe(xe({}, r.details), {}, { reason: ls }),
                },
              );
        },
      },
    ]);
  })(),
  nw = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
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
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $d(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $d(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Vd = "client-default-key",
  iw = "https://xp.atlassian.com/v1/rgstr",
  aw = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? tw : n,
        a = r.overrideAdapter;
      (fe(this, e),
        R(this, "initPromise", null),
        R(this, "initCompleted", !1),
        R(this, "initWithDefaults", !1),
        R(this, "hasCheckGateErrorOccurred", !1),
        R(this, "hasGetExperimentErrorOccurred", !1),
        R(this, "hasGetExperimentValueErrorOccurred", !1),
        R(this, "hasGetLayerErrorOccurred", !1),
        R(this, "hasGetLayerValueErrorOccurred", !1),
        R(this, "subscriptions", new A0()),
        R(this, "dataAdapter", new Q0()),
        R(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new rw(i)));
    }
    return ve(e, [
      {
        key: "initialize",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o) {
              var u = this,
                s,
                c;
              return B.wrap(
                function (d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (((s = ra(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ti(s, this.initOptions) ||
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
            B.mark(function n(i, a, o, u) {
              var s = this,
                c,
                l;
              return B.wrap(
                function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (((c = ra(i)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ti(c, this.initOptions) ||
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
                                h = v - l;
                              s.fireClientEvent(
                                l,
                                h,
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
                var l = Ht(
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
                u.initOptions.environment !== fi.Production &&
                  console.error("Analytics web client promise did not resolve", c);
              });
        },
      },
      {
        key: "initializeFromValues",
        value: (function () {
          var t = de(
            B.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l,
                d = arguments;
              return B.wrap(
                function (v) {
                  for (;;)
                    switch ((v.prev = v.next)) {
                      case 0:
                        if (
                          ((s = d.length > 3 && d[3] !== void 0 ? d[3] : {}),
                          (c = ra(i)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ti(c, this.initOptions) ||
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
                              var h = performance.now(),
                                f = h - l;
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
            B.mark(function n(i, a, o) {
              var u, s;
              return B.wrap(
                function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (u = ra(i)),
                          (s = function () {
                            return cs.fetchExperimentValues(u, a, o).then(function (p) {
                              var v = p.experimentValues,
                                h = p.customAttributes;
                              return { experimentValues: v, customAttributesFromFetch: h };
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
            B.mark(function n(i, a) {
              var o = this;
              return B.wrap(
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
            B.mark(function n(i, a) {
              var o,
                u,
                s = arguments;
              return B.wrap(
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
            B.mark(function n() {
              return B.wrap(
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
            return Md.fromExperiment(
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
              new Md(r, {}, "", { time: Date.now(), reason: pu.Error })
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
          return ti(this.currentIdentifiers, r) && ti(this.currentAttributes, n);
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
            B.mark(function n(i, a, o) {
              var u, s, c, l, d, p, v, h;
              return B.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (u = Ht({}, i)),
                          (g.prev = 1),
                          (l = cs.fetchClientSdk(i).then(function (_) {
                            return (u.sdkKey = _.clientSdkKey);
                          })),
                          (d = cs.fetchExperimentValues(i, a, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = g.sent),
                          (v = K(p, 2)),
                          (h = v[1]),
                          (s = h.experimentValues),
                          (c = h.customAttributes),
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
                          this.initFromValues(u, a, o)
                        );
                      case 19:
                        throw g.t0;
                      case 20:
                        return g.abrupt("return", this.initFromValues(u, a, c, s));
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
            B.mark(function n(i, a, o, u) {
              var s, c, l, d, p, v, h, f;
              return B.wrap(
                function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        return (
                          (s = Ht(Ht({}, i), {}, { disableCurrentPageLogging: !0 })),
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
                          (h = K(v, 2)),
                          (f = h[1]),
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
            B.mark(function n(i, a, o) {
              var u,
                s,
                c,
                l,
                d,
                p,
                v,
                h = arguments;
              return B.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (s = h.length > 3 && h[3] !== void 0 ? h[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = a),
                          (this.currentAttributes = o),
                          (c = T0(i)),
                          c.sdkKey || (c.sdkKey = Vd),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Ht(
                              Ht({}, c.networkConfig),
                              {},
                              { logEventUrl: iw },
                            )),
                          c.perimeter === Pi.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (p = ne(c, nw)),
                          (this.user = Td(a, o)),
                          (v = Ht(
                            Ht({}, p),
                            {},
                            {
                              environment: { tier: d },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: st.LogEventCompressionMode.Forced,
                            },
                          )),
                          a.stableId
                            ? st.StableID.setOverride(a.stableId, l)
                            : (v.disableStableID = !0),
                          (g.prev = 12),
                          (this.statsigClient = new st.StatsigClient(l, this.user, v)),
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
                          (this.statsigClient = new st.StatsigClient(Vd, this.user, v)),
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
            B.mark(function n(i, a, o) {
              var u = this,
                s,
                c,
                l;
              return B.wrap(
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
                              B.mark(function v() {
                                return B.wrap(function (f) {
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
            B.mark(function n(i, a, o) {
              var u, s, c, l, d, p, v, h, f;
              return B.wrap(
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
                        ((c = _.sent), (l = Td(a, c.customAttributesFromFetch)), (_.next = 13));
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
                          ((h = !0),
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
                        ((_.prev = 23), (_.t1 = _.catch(15)), (h = !1), (f = String(_.t1)));
                      case 27:
                        if (
                          ((u = this.initOptions) === null ||
                            u === void 0 ||
                            (s = u.updateUserCompletionCallback) === null ||
                            s === void 0 ||
                            s.call(u, h, f),
                          !h)
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
            return Ld.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Ld.fromLayer(st._makeLayer(r, { reason: "Error" }, null))
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
  D,
  U = (function () {
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
D = U;
R(U, "client", new aw());
R(U, "hasCheckGateErrorOccurred", !1);
R(U, "hasGetExperimentValueErrorOccurred", !1);
R(U, "checkGate", function (e, t) {
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
R(U, "getExperimentValue", function (e, t, r, n) {
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
      D.hasGetExperimentValueErrorOccurred ||
        (console.warn({
          msg: "An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.",
          experimentName: e,
          defaultValue: r,
          options: n,
          error: a,
        }),
        (D.hasGetExperimentValueErrorOccurred = !0)),
      r
    );
  }
  return D.client.getExperimentValue(e, t, r, n);
});
R(U, "initializeCalled", D.client.initializeCalled.bind(D.client));
R(U, "initializeCompleted", D.client.initializeCompleted.bind(D.client));
R(U, "waitUntilInitializeCompleted", D.client.waitUntilInitializeCompleted.bind(D.client));
R(U, "initialize", D.client.initialize.bind(D.client));
R(U, "initializeWithProvider", D.client.initializeWithProvider.bind(D.client));
R(U, "initializeFromValues", D.client.initializeFromValues.bind(D.client));
R(U, "manuallyLogGateExposure", D.client.manuallyLogGateExposure.bind(D.client));
R(U, "getExperiment", D.client.getExperiment.bind(D.client));
R(U, "manuallyLogExperimentExposure", D.client.manuallyLogExperimentExposure.bind(D.client));
R(U, "manuallyLogLayerExposure", D.client.manuallyLogLayerExposure.bind(D.client));
R(U, "shutdownStatsig", D.client.shutdownStatsig.bind(D.client));
R(U, "overrideGate", D.client.overrideGate.bind(D.client));
R(U, "clearGateOverride", D.client.clearGateOverride.bind(D.client));
R(U, "overrideConfig", D.client.overrideConfig.bind(D.client));
R(U, "clearConfigOverride", D.client.clearConfigOverride.bind(D.client));
R(U, "setOverrides", D.client.setOverrides.bind(D.client));
R(U, "getOverrides", D.client.getOverrides.bind(D.client));
R(U, "clearAllOverrides", D.client.clearAllOverrides.bind(D.client));
R(U, "isCurrentUser", D.client.isCurrentUser.bind(D.client));
R(U, "onGateUpdated", D.client.onGateUpdated.bind(D.client));
R(U, "onExperimentValueUpdated", D.client.onExperimentValueUpdated.bind(D.client));
R(U, "onAnyUpdated", D.client.onAnyUpdated.bind(D.client));
R(U, "updateUser", D.client.updateUser.bind(D.client));
R(U, "updateUserWithProvider", D.client.updateUserWithProvider.bind(D.client));
R(U, "updateUserWithValues", D.client.updateUserWithValues.bind(D.client));
R(U, "getPackageVersion", D.client.getPackageVersion.bind(D.client));
R(U, "getLayer", D.client.getLayer.bind(D.client));
R(U, "getLayerValue", D.client.getLayerValue.bind(D.client));
var Vs = U;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = U;
  else {
    var na, ds;
    Vs = window.__FEATUREGATES_JS__;
    var Gd =
      ((na = Vs) === null || na === void 0 || (ds = na.getPackageVersion) === null || ds === void 0
        ? void 0
        : ds.call(na)) || "4.10.0 or earlier";
    if (Gd !== Lr) {
      var ow = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(Gd, " when module version ")
        .concat(Lr, " was loading.");
      console.warn(ow);
    }
  }
var Ar,
  Ir,
  sw =
    (globalThis == null ||
    (Ar = globalThis.process) === null ||
    Ar === void 0 ||
    (Ar = Ar.env) === null ||
    Ar === void 0
      ? void 0
      : Ar.JEST_WORKER_ID) !== void 0,
  uw =
    !sw &&
    (globalThis == null ||
    (Ir = globalThis.process) === null ||
    Ir === void 0 ||
    (Ir = Ir.env) === null ||
    Ir === void 0
      ? void 0
      : Ir.NODE_ENV) !== "production",
  cw = function () {
    var t;
    uw && (t = console).debug.apply(t, arguments);
  },
  hu = {},
  lw = "@atlaskit/platform-feature-flags",
  _i = "__PLATFORM_FEATURE_FLAGS__",
  ah = typeof process < "u" && typeof hu < "u",
  dw = ah ? hu.ENABLE_PLATFORM_FF === "true" : !1,
  fw = ah ? hu.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  vw = dw || fw,
  pw = { booleanResolver: void 0 },
  bi = typeof window < "u" ? window : globalThis;
bi[_i] = bi[_i] || pw;
function hw(e) {
  if (vw)
    return (
      cw(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        lw,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = bi[_i]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = bi[_i]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Vs.checkGate(e);
    var i = (n = bi[_i]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function zr(e) {
  return hw(e);
}
var gw = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  _w = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  bw = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  Hd = m.memo(function (t) {
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
      h = r.spacing,
      f = h === void 0 ? "none" : h,
      g = r.name,
      _ = d ? { __html: d } : void 0;
    if (l && !zr("platform-visual-refresh-icons"))
      return m.createElement(l, {
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
      else if (g) {
        var y = t.size(g);
        b = y === "small" || y === "medium" ? y : b;
      }
    }
    var O = 16,
      w = bw[b][f],
      S = O + 2 * w;
    return m.createElement(
      "span",
      {
        "data-testid": a,
        role: o ? "img" : void 0,
        "aria-label": o || void 0,
        "aria-hidden": o ? void 0 : !0,
        style: { color: i },
        className: P([
          "_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9",
          "_12va1onz _jcxd1r8n",
          p && "_1bsb1kw7 _4t3i1kw7",
          b === "small" && "_vwz4utpp",
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
        dangerouslySetInnerHTML: _,
        className: P([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          p ? "_1bsb1kw7 _4t3i1kw7" : b === "small" ? _w[f] : gw[f],
        ]),
      }),
    );
  });
const yw = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: Hd, default: Hd }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  no = Xf(yw);
var Wd;
function mw() {
  if (Wd) return Jn;
  ((Wd = 1), Object.defineProperty(Jn, "__esModule", { value: !0 }), (Jn.default = void 0));
  var e = r(gr()),
    t = r(no);
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
var ww = mw();
const Ow = Xt(ww);
var ni = {},
  Kd;
function Sw() {
  if (Kd) return ni;
  ((Kd = 1), Object.defineProperty(ni, "__esModule", { value: !0 }), (ni.default = void 0));
  var e = r(gr()),
    t = r(no);
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
  return ((n.displayName = "ChevronRightIcon"), (ni.default = n), ni);
}
var Ew = Sw();
const kw = Xt(Ew);
var gu = m.createContext("elevation.surface"),
  xw = function () {
    return m.useContext(gu);
  };
gu.displayName = "SurfaceProvider";
var Rw = [
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
  Pw = ["className"],
  Cw = {
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
  oh = {
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
  Aw = {
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
  Iw = {
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
  jw = {
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
  Dw = {
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
  io = m.forwardRef(function (e, t) {
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
      h = v === void 0 ? o : v,
      f = e.paddingInlineStart,
      g = f === void 0 ? h : f,
      _ = e.paddingInlineEnd,
      b = _ === void 0 ? h : _,
      y = e.style,
      O = e.testId,
      w = e.xcss,
      S = ne(e, Rw);
    S.className;
    var x = ne(S, Pw),
      T = m.createElement(
        n,
        te(
          {
            style: y,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              a && Cw[a],
              a && Tw(a) && oh[a],
              l && Aw[l],
              p && Iw[p],
              g && jw[g],
              b && Dw[b],
              w,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        i,
      );
    return a ? m.createElement(gu.Provider, { value: a }, T) : T;
  });
function Tw(e) {
  return e in oh;
}
const fs = () =>
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
  sh = (...e) => P(e);
function Mw() {
  return {
    css() {
      throw fs();
    },
    cssMap() {
      throw fs();
    },
    cx: sh,
    XCSSProp() {
      throw fs();
    },
  };
}
var Lw = Mw(),
  Fw = Lw.cx,
  Nw = [
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
  Yd = {
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
  Jd = {
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
  Bw = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  qw = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  zw = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  Uw = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  $w = { root: "_1e0c1txw _vchhusvi" },
  ja = m.memo(
    m.forwardRef(function (e, t) {
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
        h = e.xcss,
        f = ne(e, Nw);
      return m.createElement(
        n,
        te({}, f, {
          role: i,
          className: P([
            $w.root,
            u && Jd[u],
            s && Jd[s],
            u && Yd[u],
            c && Yd[c],
            a && Uw[a],
            p && qw[p],
            o && Bw[o],
            v && zw[v],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
ja.displayName = "Flex";
var Vw = [
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
  Gs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  Gw = function (t) {
    var r = t.children;
    return m.createElement("span", { className: P([Gs.separator]) }, r);
  },
  la = m.memo(
    m.forwardRef(function (e, t) {
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
        h = e.testId,
        f = e.role,
        g = e.children,
        _ = ne(e, Vw),
        b = typeof p == "string" ? m.createElement(Gw, null, p) : p,
        y = b
          ? m.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, w) {
                return m.createElement(m.Fragment, { key: w }, p && w > 0 ? b : null, O);
              })
          : g;
      return m.createElement(
        ja,
        te({}, _, {
          as: r,
          role: f,
          alignItems: a,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: Fw(c === "hug" && Gs.hug, c === "fill" && Gs.fill, v),
          testId: h,
          ref: t,
        }),
        y,
      );
    }),
  );
la.displayName = "Inline";
var Hw = "Invariant failed";
function Ww(e, t) {
  if (!e) throw new Error(Hw);
}
var uh = m.createContext(!1),
  Kw = function () {
    return m.useContext(uh);
  },
  Yw = uh.Provider,
  Jw = ["span", "p", "strong", "em"],
  Xw = function (t, r) {
    var n = xw();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return Xd.hasOwnProperty(n) ? Xd[n] : "color.text";
    }
  },
  jr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Qw = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  Zw = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  e1 = {
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
  Xd = {
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
  t1 = m.forwardRef(function (e, t) {
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
    Ww(Jw.includes(n));
    var v = Kw(),
      h = Xw(i, v);
    !s && !v && (s = "medium");
    var f = m.createElement(
      n,
      {
        id: u,
        className: P([
          jr.root,
          s && Qw[s],
          h && e1[h],
          l && jr.truncation,
          l === 1 && jr.breakAll,
          a && jr["textAlign.".concat(a)],
          c && Zw[c],
          n === "em" && jr["as.em"],
          n === "strong" && jr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return v ? f : m.createElement(Yw, { value: !0 }, f);
  });
function r1() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var n1 = ["as", "children", "isInset", "testId", "style", "xcss"],
  i1 = ["className"],
  a1 = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ne(e, n1);
    c.className;
    var l = ne(c, i1);
    return m.createElement(
      n,
      te({}, l, {
        ref: t,
        className: P([
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
  o1 = [
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
  s1 = ["className"],
  Qd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  u1 = m.forwardRef(function (e, t) {
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
      h = e.tabIndex,
      f = ne(e, o1),
      g = m.useContext(vu),
      _ = m.useCallback(
        function (O, w) {
          (g && g.tracePress(s, O.timeStamp), u(O, w));
        },
        [u, g, s],
      ),
      b = Ri({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ne(f, s1);
    return m.createElement(
      a1,
      te({ as: "button", tabIndex: h ?? (r1() && !n ? 0 : void 0), style: d }, y, {
        type: a,
        onClick: b,
        disabled: n,
        xcss: sh(Qd.root, n && Qd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  }),
  vs = {},
  ii = {},
  Zd;
function ch() {
  if (Zd) return ii;
  ((Zd = 1), Object.defineProperty(ii, "__esModule", { value: !0 }), (ii.bind = void 0));
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
  return ((ii.bind = e), ii);
}
var sr = {},
  ef;
function c1() {
  if (ef) return sr;
  ef = 1;
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
  var t = ch();
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
var tf;
function l1() {
  return (
    tf ||
      ((tf = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = ch();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = c1();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(vs)),
    vs
  );
}
var ao = l1(),
  d1 = function () {
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
  lh = function (e) {
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: d1() });
  },
  f1 = lh(),
  v1 = m.createContext(lh()),
  p1 = function (e) {
    return e.value++;
  },
  h1 = function (e) {
    return e ? e.prefix : "";
  },
  g1 = function (e) {
    var t = e || f1,
      r = h1(t),
      n = p1(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  dh = function () {
    var e = m.useContext(v1),
      t = m.useState(function () {
        return g1(e);
      })[0];
    return t;
  },
  _1 = function () {
    var e = dh().uid;
    return e;
  },
  b1 = function () {
    var e = dh().gen;
    return e;
  },
  ps,
  da = (ps = E.useId) !== null && ps !== void 0 ? ps : void 0;
function y1() {
  return da && zr("platform-dst-react-18-use-id")
    ? zr("platform-dst-react-18-use-id-selector-safe")
      ? da().replace(/[:«»]/g, "_")
      : da()
    : "uid".concat(_1());
}
function m1() {
  if (da && zr("platform-dst-react-18-use-id")) {
    var e = y1();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return b1();
}
var _u = function (t) {
  var r = t.children,
    n = t.testId,
    i = t.role,
    a = t.id;
  return m.createElement(
    "span",
    {
      id: a,
      "data-testid": n,
      role: i,
      className: P([
        "_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c",
      ]),
    },
    r,
  );
};
_u.displayName = "VisuallyHidden";
var w1 = {
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
  O1 = ["children"];
function S1(e) {
  var t = function (u, s) {
      return u(s);
    },
    r = m.createContext(e);
  function n(o) {
    var u = m.useContext(r),
      s = u || t,
      c = s(o);
    return c;
  }
  function i(o) {
    var u = o.children,
      s = ne(o, O1),
      c = n(s);
    return E.createElement(E.Fragment, null, u(c));
  }
  function a(o) {
    var u = m.useContext(r),
      s = o.value || t,
      c = m.useCallback(
        function (l) {
          return s(u, l);
        },
        [u, s],
      );
    return E.createElement(r.Provider, { value: c }, o.children);
  }
  return { Consumer: i, Provider: a, useTheme: n };
}
var E1 = S1(function () {
    return { mode: "light" };
  }),
  k1 = E1.useTheme;
function x1(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function R1(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var P1 = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(R1(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = x1(i);
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
  me = "-ms-",
  Da = "-moz-",
  Q = "-webkit-",
  fh = "comm",
  bu = "rule",
  yu = "decl",
  C1 = "@import",
  vh = "@keyframes",
  A1 = "@layer",
  I1 = Math.abs,
  oo = String.fromCharCode,
  j1 = Object.assign;
function D1(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function ph(e) {
  return e.trim();
}
function T1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, r) {
  return e.replace(t, r);
}
function Hs(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ci(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function mu(e) {
  return e.length;
}
function ia(e, t) {
  return (t.push(e), e);
}
function M1(e, t) {
  return e.map(t).join("");
}
var so = 1,
  Ur = 1,
  hh = 0,
  je = 0,
  he = 0,
  Jr = "";
function uo(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: so,
    column: Ur,
    length: o,
    return: "",
  };
}
function ai(e, t) {
  return j1(uo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function L1() {
  return he;
}
function F1() {
  return ((he = je > 0 ? ye(Jr, --je) : 0), Ur--, he === 10 && ((Ur = 1), so--), he);
}
function Fe() {
  return ((he = je < hh ? ye(Jr, je++) : 0), Ur++, he === 10 && ((Ur = 1), so++), he);
}
function St() {
  return ye(Jr, je);
}
function fa() {
  return je;
}
function zi(e, t) {
  return Ci(Jr, e, t);
}
function Ai(e) {
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
function gh(e) {
  return ((so = Ur = 1), (hh = gt((Jr = e))), (je = 0), []);
}
function _h(e) {
  return ((Jr = ""), e);
}
function va(e) {
  return ph(zi(je - 1, Ws(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function N1(e) {
  for (; (he = St()) && he < 33; ) Fe();
  return Ai(e) > 2 || Ai(he) > 3 ? "" : " ";
}
function B1(e, t) {
  for (; --t && Fe() && !(he < 48 || he > 102 || (he > 57 && he < 65) || (he > 70 && he < 97)); );
  return zi(e, fa() + (t < 6 && St() == 32 && Fe() == 32));
}
function Ws(e) {
  for (; Fe(); )
    switch (he) {
      case e:
        return je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ws(he);
        break;
      case 40:
        e === 41 && Ws(e);
        break;
      case 92:
        Fe();
        break;
    }
  return je;
}
function q1(e, t) {
  for (; Fe() && e + he !== 57; ) if (e + he === 84 && St() === 47) break;
  return "/*" + zi(t, je - 1) + "*" + oo(e === 47 ? e : Fe());
}
function z1(e) {
  for (; !Ai(St()); ) Fe();
  return zi(e, je);
}
function U1(e) {
  return _h(pa("", null, null, null, [""], (e = gh(e)), 0, [0], e));
}
function pa(e, t, r, n, i, a, o, u, s) {
  for (
    var c = 0,
      l = 0,
      d = o,
      p = 0,
      v = 0,
      h = 0,
      f = 1,
      g = 1,
      _ = 1,
      b = 0,
      y = "",
      O = i,
      w = a,
      S = n,
      x = y;
    g;
  )
    switch (((h = b), (b = Fe()))) {
      case 40:
        if (h != 108 && ye(x, d - 1) == 58) {
          Hs((x += Z(va(b), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += va(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += N1(h);
        break;
      case 92:
        x += B1(fa() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            ia($1(q1(Fe(), fa()), t, r), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        u[c++] = gt(x) * _;
      case 125 * f:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            (_ == -1 && (x = Z(x, /\f/g, "")),
              v > 0 &&
                gt(x) - d &&
                ia(v > 32 ? nf(x + ";", n, r, d - 1) : nf(Z(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((ia((S = rf(x, t, r, c, l, i, u, y, (O = []), (w = []), d)), a), b === 123))
              if (l === 0) pa(x, t, S, S, O, a, d, u, w);
              else
                switch (p === 99 && ye(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pa(
                      e,
                      S,
                      S,
                      n && ia(rf(e, S, S, 0, 0, i, u, y, i, (O = []), d), w),
                      i,
                      w,
                      d,
                      u,
                      n ? O : w,
                    );
                    break;
                  default:
                    pa(x, S, S, S, [""], w, 0, u, w);
                }
        }
        ((c = l = v = 0), (f = _ = 1), (y = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + gt(x)), (v = h));
      default:
        if (f < 1) {
          if (b == 123) --f;
          else if (b == 125 && f++ == 0 && F1() == 125) continue;
        }
        switch (((x += oo(b)), b * f)) {
          case 38:
            _ = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (gt(x) - 1) * _), (_ = 1));
            break;
          case 64:
            (St() === 45 && (x += va(Fe())), (p = St()), (l = d = gt((y = x += z1(fa())))), b++);
            break;
          case 45:
            h === 45 && gt(x) == 2 && (f = 0);
        }
    }
  return a;
}
function rf(e, t, r, n, i, a, o, u, s, c, l) {
  for (var d = i - 1, p = i === 0 ? a : [""], v = mu(p), h = 0, f = 0, g = 0; h < n; ++h)
    for (var _ = 0, b = Ci(e, d + 1, (d = I1((f = o[h])))), y = e; _ < v; ++_)
      (y = ph(f > 0 ? p[_] + " " + b : Z(b, /&\f/g, p[_]))) && (s[g++] = y);
  return uo(e, t, r, i === 0 ? bu : u, s, c, l);
}
function $1(e, t, r) {
  return uo(e, t, r, fh, oo(L1()), Ci(e, 2, -2), 0);
}
function nf(e, t, r, n) {
  return uo(e, t, r, yu, Ci(e, 0, n), Ci(e, n + 1, -1), n);
}
function Fr(e, t) {
  for (var r = "", n = mu(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function V1(e, t, r, n) {
  switch (e.type) {
    case A1:
      if (e.children.length) break;
    case C1:
    case yu:
      return (e.return = e.return || e.value);
    case fh:
      return "";
    case vh:
      return (e.return = e.value + "{" + Fr(e.children, n) + "}");
    case bu:
      e.value = e.props.join(",");
  }
  return gt((r = Fr(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function G1(e) {
  var t = mu(e);
  return function (r, n, i, a) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, i, a) || "";
    return o;
  };
}
function H1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function W1(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var K1 = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = St()), i === 38 && a === 12 && (r[n] = 1), !Ai(a); ) Fe();
    return zi(t, je);
  },
  Y1 = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (Ai(i)) {
        case 0:
          (i === 38 && St() === 12 && (r[n] = 1), (t[n] += K1(je - 1, r, n)));
          break;
        case 2:
          t[n] += va(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = St() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += oo(i);
      }
    while ((i = Fe()));
    return t;
  },
  J1 = function (t, r) {
    return _h(Y1(gh(t), r));
  },
  af = new WeakMap(),
  X1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !af.get(n)) && !i) {
        af.set(t, !0);
        for (var a = [], o = J1(r, a), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = a[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  Q1 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function bh(e, t) {
  switch (D1(e, t)) {
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
      return Q + e + Da + e + me + e + e;
    case 6828:
    case 4268:
      return Q + e + me + e + e;
    case 6165:
      return Q + e + me + "flex-" + e + e;
    case 5187:
      return Q + e + Z(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return Q + e + me + "flex-item-" + Z(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + me + "flex-line-pack" + Z(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + me + Z(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + me + Z(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + Z(e, "-grow", "") + Q + e + me + Z(e, "grow", "positive") + e;
    case 4554:
      return Q + Z(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return Z(Z(Z(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Z(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return (
        Z(
          Z(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + me + "flex-pack:$3"),
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
      return Z(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
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
      if (gt(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Q + "$2-$3$1" + Da + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Hs(e, "stretch") ? bh(Z(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, gt(e) - 3 - (~Hs(e, "!important") && 10))) {
        case 107:
          return Z(e, ":", ":" + Q) + e;
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Q +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Q +
                "$2$3$1" +
                me +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + me + Z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + me + e + e;
  }
  return e;
}
var Z1 = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case yu:
          t.return = bh(t.value, t.length);
          break;
        case vh:
          return Fr([ai(t, { value: Z(t.value, "@", "@" + Q) })], i);
        case bu:
          if (t.length)
            return M1(t.props, function (a) {
              switch (T1(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Fr([ai(t, { props: [Z(a, /:(read-\w+)/, ":" + Da + "$1")] })], i);
                case "::placeholder":
                  return Fr(
                    [
                      ai(t, { props: [Z(a, /:(plac\w+)/, ":" + Q + "input-$1")] }),
                      ai(t, { props: [Z(a, /:(plac\w+)/, ":" + Da + "$1")] }),
                      ai(t, { props: [Z(a, /:(plac\w+)/, me + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  eO = [Z1],
  tO = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var g = f.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || eO,
      a = {},
      o,
      u = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (f) {
          for (var g = f.getAttribute("data-emotion").split(" "), _ = 1; _ < g.length; _++)
            a[g[_]] = !0;
          u.push(f);
        },
      ));
    var s,
      c = [X1, Q1];
    {
      var l,
        d = [
          V1,
          H1(function (f) {
            l.insert(f);
          }),
        ],
        p = G1(c.concat(i, d)),
        v = function (g) {
          return Fr(U1(g), p);
        };
      s = function (g, _, b, y) {
        ((l = b), v(g ? g + "{" + _.styles + "}" : _.styles), y && (h.inserted[_.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new P1({
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
    return (h.sheet.hydrate(u), h);
  },
  hs = { exports: {} },
  ee = {};
var of;
function rO() {
  if (of) return ee;
  of = 1;
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
    h = e ? Symbol.for("react.lazy") : 60116,
    f = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    _ = e ? Symbol.for("react.responder") : 60118,
    b = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
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
                case h:
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
    return y(w) === c;
  }
  return (
    (ee.AsyncMode = s),
    (ee.ConcurrentMode = c),
    (ee.ContextConsumer = u),
    (ee.ContextProvider = o),
    (ee.Element = t),
    (ee.ForwardRef = l),
    (ee.Fragment = n),
    (ee.Lazy = h),
    (ee.Memo = v),
    (ee.Portal = r),
    (ee.Profiler = a),
    (ee.StrictMode = i),
    (ee.Suspense = d),
    (ee.isAsyncMode = function (w) {
      return O(w) || y(w) === s;
    }),
    (ee.isConcurrentMode = O),
    (ee.isContextConsumer = function (w) {
      return y(w) === u;
    }),
    (ee.isContextProvider = function (w) {
      return y(w) === o;
    }),
    (ee.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (ee.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (ee.isFragment = function (w) {
      return y(w) === n;
    }),
    (ee.isLazy = function (w) {
      return y(w) === h;
    }),
    (ee.isMemo = function (w) {
      return y(w) === v;
    }),
    (ee.isPortal = function (w) {
      return y(w) === r;
    }),
    (ee.isProfiler = function (w) {
      return y(w) === a;
    }),
    (ee.isStrictMode = function (w) {
      return y(w) === i;
    }),
    (ee.isSuspense = function (w) {
      return y(w) === d;
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
          (w.$$typeof === h ||
            w.$$typeof === v ||
            w.$$typeof === o ||
            w.$$typeof === u ||
            w.$$typeof === l ||
            w.$$typeof === g ||
            w.$$typeof === _ ||
            w.$$typeof === b ||
            w.$$typeof === f))
      );
    }),
    (ee.typeOf = y),
    ee
  );
}
var sf;
function nO() {
  return (sf || ((sf = 1), (hs.exports = rO())), hs.exports);
}
var gs, uf;
function iO() {
  if (uf) return gs;
  uf = 1;
  var e = nO(),
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
  function o(h) {
    return e.isMemo(h) ? i : a[h.$$typeof] || t;
  }
  var u = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    p = Object.prototype;
  function v(h, f, g) {
    if (typeof f != "string") {
      if (p) {
        var _ = d(f);
        _ && _ !== p && v(h, _, g);
      }
      var b = s(f);
      c && (b = b.concat(c(f)));
      for (var y = o(h), O = o(f), w = 0; w < b.length; ++w) {
        var S = b[w];
        if (!r[S] && !(g && g[S]) && !(O && O[S]) && !(y && y[S])) {
          var x = l(f, S);
          try {
            u(h, S, x);
          } catch {}
        }
      }
    }
    return h;
  }
  return ((gs = v), gs);
}
iO();
var aO = !0;
function yh(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
    }),
    n
  );
}
var wu = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || aO === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
  },
  mh = function (t, r, n) {
    wu(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do (t.insert(r === a ? "." + i : "", a, t.sheet, !0), (a = a.next));
      while (a !== void 0);
    }
  };
function oO(e) {
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
var sO = {
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
  uO = /[A-Z]|^ms/g,
  cO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  wh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  cf = function (t) {
    return t != null && typeof t != "boolean";
  },
  _s = W1(function (e) {
    return wh(e) ? e : e.replace(uO, "-$&").toLowerCase();
  }),
  lf = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(cO, function (n, i, a) {
            return ((_t = { name: i, styles: a, next: _t }), i);
          });
    }
    return sO[t] !== 1 && !wh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Ii(e, t, r) {
  if (r == null) return "";
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1) return ((_t = { name: i.name, styles: i.styles, next: _t }), i.name);
      var a = r;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((_t = { name: o.name, styles: o.styles, next: _t }), (o = o.next));
        var u = a.styles + ";";
        return u;
      }
      return lO(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = _t,
          c = r(e);
        return ((_t = s), Ii(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function lO(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += Ii(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0
          ? (n += a + "{" + t[u] + "}")
          : cf(u) && (n += _s(a) + ":" + lf(a, u) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
        for (var s = 0; s < o.length; s++) cf(o[s]) && (n += _s(a) + ":" + lf(a, o[s]) + ";");
      else {
        var c = Ii(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            n += _s(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var df = /label:\s*([^\s;{]+)\s*(;|$)/g,
  _t;
function Ou(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    i = "";
  _t = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0) ((n = !1), (i += Ii(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((i += Ii(r, t, e[u])), n)) {
      var s = a;
      i += s[u];
    }
  df.lastIndex = 0;
  for (var c = "", l; (l = df.exec(i)) !== null; ) c += "-" + l[1];
  var d = oO(i) + c;
  return { name: d, styles: i, next: _t };
}
var dO = function (t) {
    return t();
  },
  fO = Nl.useInsertionEffect ? Nl.useInsertionEffect : !1,
  Oh = fO || dO,
  Sh = m.createContext(typeof HTMLElement < "u" ? tO({ key: "css" }) : null);
Sh.Provider;
var Eh = function (t) {
    return m.forwardRef(function (r, n) {
      var i = m.useContext(Sh);
      return t(r, i, n);
    });
  },
  kh = m.createContext({}),
  Su = {}.hasOwnProperty,
  Ks = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  vO = function (t, r) {
    var n = {};
    for (var i in r) Su.call(r, i) && (n[i] = r[i]);
    return ((n[Ks] = t), n);
  },
  pO = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      wu(r, n, i),
      Oh(function () {
        return mh(r, n, i);
      }),
      null
    );
  },
  hO = Eh(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var i = e[Ks],
      a = [n],
      o = "";
    typeof e.className == "string"
      ? (o = yh(t.registered, a, e.className))
      : e.className != null && (o = e.className + " ");
    var u = Ou(a, void 0, m.useContext(kh));
    o += t.key + "-" + u.name;
    var s = {};
    for (var c in e) Su.call(e, c) && c !== "css" && c !== Ks && (s[c] = e[c]);
    return (
      (s.className = o),
      r && (s.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(pO, { cache: t, serialized: u, isStringTag: typeof i == "string" }),
        m.createElement(i, s),
      )
    );
  }),
  gO = hO,
  Ft = function (t, r) {
    var n = arguments;
    if (r == null || !Su.call(r, "css")) return m.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = gO), (a[1] = vO(t, r)));
    for (var o = 2; o < i; o++) a[o] = n[o];
    return m.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ft || (Ft = {}));
function Ct() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return Ou(t);
}
var _O = function e(t) {
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
function bO(e, t, r) {
  var n = [],
    i = yh(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var yO = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Oh(function () {
        for (var i = 0; i < n.length; i++) mh(r, n[i], !1);
      }),
      null
    );
  },
  mO = Eh(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = Ou(c, t.registered);
        return (r.push(d), wu(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return bO(t.registered, n, _O(c));
      },
      a = { css: n, cx: i, theme: m.useContext(kh) },
      o = e.children(a);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(yO, { cache: t, serializedArr: r }),
      o,
    );
  });
function wO(e, t) {
  var r = m.useRef(!0);
  m.useEffect(
    function () {
      (e && r.current && t && e.current && e.current.focus(), (r.current = !1));
    },
    [t, e],
  );
}
var xh = 2,
  Ys = Ct({
    outline: "var(--ds-border-width-focused, 2px)".concat(
      " solid ",
      "var(--ds-border-focused, #2684FF)",
    ),
    outlineOffset: xh,
  }),
  Js = Ct({
    outlineColor: "var(--ds-border-focused, #2684FF)",
    outlineOffset: -xh,
    outlineStyle: "solid",
    outlineWidth: "var(--ds-border-width-focused, 2px)",
  }),
  OO = Ct({
    "&:focus": Ys,
    "&:focus-visible": Ys,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  SO = Ct({
    "&:focus": Js,
    "&:focus-visible": Js,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": {
        outline: "var(--ds-border-width, 1px)".concat(" solid"),
        outlineOffset: "-1px",
      },
    },
  }),
  Rh = m.memo(function (e) {
    var t = e.children,
      r = e.isInset,
      n = e.focus,
      i = r ? Js : Ys,
      a = r ? SO : OO,
      o = typeof n > "u" ? a : n === "on" && i;
    return Ft(mO, null, function (u) {
      var s = u.css,
        c = u.cx;
      return m.Children.only(
        o ? m.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Rh.displayName = "FocusRing";
function Tt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var EO = 9;
function ff(e) {
  e.keyCode !== EO && Tt(e);
}
var kO = {
    onMouseDownCapture: Tt,
    onMouseUpCapture: Tt,
    onKeyDownCapture: ff,
    onKeyUpCapture: ff,
    onTouchStartCapture: Tt,
    onTouchEndCapture: Tt,
    onPointerDownCapture: Tt,
    onPointerUpCapture: Tt,
    onClickCapture: Tt,
    onClick: Tt,
  },
  xO = {};
function RO(e) {
  var t = e.isInteractive;
  return t ? xO : kO;
}
function vf(e, t) {
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
      ? vf(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Kt = 8,
  bs = ["default", "primary", "danger", "warning"],
  Xs = { default: "".concat(32 / 14, "em"), compact: "".concat(24 / 14, "em"), none: "auto" },
  PO = { default: Xs.default, compact: Xs.compact, none: "inherit" },
  CO = {
    default: "0 ".concat(Kt + Kt / 4, "px"),
    compact: "0 ".concat(Kt + Kt / 4, "px"),
    none: "0",
  },
  AO = { compact: "0 ".concat(Kt / 4, "px"), default: "0 ".concat(Kt / 4, "px"), none: "0" },
  IO = { default: "middle", compact: "middle", none: "baseline" },
  Ph = { content: "0 ".concat(Kt / 4, "px"), icon: "0 ".concat(Kt / 4, "px") },
  Ch = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  jO = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Pe(Pe({}, Ch), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  DO = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  TO = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  MO = {
    background: "transparent",
    color: "var(--ds-text-subtle, #505258)",
    "&:hover": { background: "var(--ds-background-neutral-subtle-hovered, #0515240F)" },
    "&:active": { background: "var(--ds-background-neutral-subtle-pressed, #0B120E24)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: "transparent" },
  },
  LO = {
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
  FO = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  NO = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  BO = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Pe(
      Pe({}, Ch),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  qO = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function zO(e) {
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
        borderRadius: zr("platform-dst-shape-theme-default")
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
        height: Xs[r],
        lineHeight: PO[r],
        padding: a ? AO[r] : CO[r],
        verticalAlign: IO[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? BO
        : Pe(
            Pe(
              Pe(
                Pe(
                  Pe(
                    Pe(
                      Pe(Pe({}, t === "default" && jO), t === "primary" && DO),
                      t === "link" && TO,
                    ),
                    t === "subtle" && MO,
                  ),
                  t === "subtle-link" && LO,
                ),
                t === "warning" && FO,
              ),
              t === "danger" && NO,
            ),
            {},
            {
              "&[disabled]": {
                color: "var(--ds-text-disabled, #080F214A)",
                backgroundColor: bs.includes(t)
                  ? "var(--ds-background-disabled, #17171708)"
                  : "transparent",
                cursor: "not-allowed",
                textDecoration: "none",
                "&:hovered": {
                  backgroundColor: bs.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
                "&:active": {
                  backgroundColor: bs.includes(t)
                    ? "var(--ds-background-disabled, #17171708)"
                    : "transparent",
                },
              },
            },
            qO,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function pf(e) {
  var t = e.spacing;
  return Ct({
    display: "flex",
    margin: t === "none" ? 0 : Ph.icon,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: "center",
    fontSize: 0,
    lineHeight: 0,
    userSelect: "none",
  });
}
function UO(e) {
  var t = e.spacing;
  return Ct({
    margin: t === "none" ? 0 : Ph.content,
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });
}
function $O(e) {
  var t = e.hasOverlay;
  return Ct({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var VO = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Eu = function (t) {
    return t && m.isValidElement(t) && t.type === _u;
  },
  GO = [
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
  HO = { "> *": { pointerEvents: "none" } },
  WO = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  KO = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  hf = function (t, r) {
    return !t || Eu(t) ? null : r;
  },
  YO = function (t, r) {
    return Eu(t) ? t : t ? Ft("span", { css: r }, t) : null;
  },
  JO = E.forwardRef(function (t, r) {
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
      h = t.iconAfter,
      f = t.iconBefore,
      g = t.interactionName,
      _ = t.isDisabled,
      b = _ === void 0 ? !1 : _,
      y = t.isSelected,
      O = y === void 0 ? !1 : y,
      w = t.onBlur,
      S = t.onClick,
      x = S === void 0 ? we : S,
      T = t.onFocus,
      j = t.onMouseDown,
      C = j === void 0 ? we : j,
      M = t.overlay;
    t.shouldFitContainer;
    var z = t.spacing,
      q = z === void 0 ? "default" : z,
      V = t.tabIndex,
      J = V === void 0 ? 0 : V,
      G = t.type,
      $ = G === void 0 ? (d ? void 0 : "button") : G,
      X = t.testId,
      N = ne(t, GO),
      I = m.useRef(),
      be = m.useCallback(
        function (pe) {
          if (((I.current = pe), r != null)) {
            if (typeof r == "function") {
              r(pe);
              return;
            }
            r.current = pe;
          }
        },
        [I, r],
      );
    wO(I, u);
    var ae = m.useContext(vu),
      ue = m.useCallback(
        function (pe, $e) {
          (ae && ae.tracePress(g, pe.timeStamp), x(pe, $e));
        },
        [x, ae, g],
      ),
      le = Ri({
        fn: ue,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      ge = m.useCallback(
        function (pe) {
          (pe.preventDefault(), C(pe));
        },
        [C],
      );
    m.useEffect(
      function () {
        var pe = I.current;
        b && pe && pe === document.activeElement && pe.blur();
      },
      [b],
    );
    var ce = !!M,
      Ue = Ct($O({ hasOverlay: ce })),
      Oe = !b && !ce,
      nt = {};
    return (
      (O || b || a === "warning") &&
        (nt = {
          "[data-theme] & circle": {
            stroke: "".concat(
              O || b
                ? "var(--ds-icon-subtle, ".concat(Bs, ")")
                : "var(--ds-icon-warning-inverse, ".concat(Bs, ")"),
              " !important",
            ),
          },
        }),
      Ft(
        Rh,
        null,
        Ft(
          v,
          te(
            {},
            N,
            {
              ref: be,
              className: l,
              css: [s, Oe ? null : HO],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": X,
              disabled: b,
              href: Oe ? d : void 0,
              onBlur: w,
              onClick: le,
              onFocus: T,
              onMouseDown: ge,
              tabIndex: b ? -1 : J,
              type: $,
            },
            RO({ isInteractive: Oe }),
          ),
          f ? Ft("span", { css: [Ue, pf({ spacing: q }), hf(c, WO)] }, f) : null,
          YO(c, [Ue, UO({ spacing: q })]),
          h ? Ft("span", { css: [Ue, pf({ spacing: q }), hf(c, KO)] }, h) : null,
          M ? Ft("span", { css: [VO, nt] }, M) : null,
        ),
      )
    );
  });
function XO(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Eu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var QO = [
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
  gf = typeof navigator < "u" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  ku = E.memo(
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
        h = t.shouldFitContainer,
        f = h === void 0 ? !1 : h,
        g = t.spacing,
        _ = g === void 0 ? "default" : g,
        b = ne(t, QO),
        y = k1(),
        O = y.mode,
        w = XO({ children: a, iconBefore: o, iconAfter: u }),
        S = m.useState(!1),
        x = K(S, 2),
        T = x[0],
        j = x[1],
        C = m.useCallback(
          function (q) {
            (d(q), gf && j(!0));
          },
          [d, j],
        ),
        M = m.useCallback(
          function (q) {
            (v(q), gf && j(!1));
          },
          [v, j],
        ),
        z = m.useMemo(
          function () {
            return zO({
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
        JO,
        te({}, b, {
          ref: r,
          appearance: i,
          buttonCss: z,
          children: a,
          "data-firefox-is-active": T ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: C,
          onMouseUp: M,
          spacing: _,
        }),
      );
    }),
  );
ku.displayName = "Button";
function _f(e) {
  return E.createElement(ku, {
    "aria-label": e["aria-label"],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: "subtle",
  });
}
function ZO(e) {
  return E.createElement(ku, te({}, e, { appearance: "subtle" }));
}
var eS = { container: "_1e0c1txw _kqswh2mm" };
function tS(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    io,
    { as: "li", testId: r, key: t, xcss: eS.container, paddingInline: "space.100" },
    E.createElement(
      t1,
      { testId: r && "".concat(r, "-text") },
      E.createElement(_u, null, "Skipped pages from ", n, " to ", i),
      "…",
    ),
  );
}
var bf = {},
  yf =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function rS(e, t) {
  return !!(e === t || (yf(e) && yf(t)));
}
function nS(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!rS(e[r], t[r])) return !1;
  return !0;
}
function iS(e, t) {
  t === void 0 && (t = nS);
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
var aS = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > a,
    l = c && a - 4 < r,
    d = c && r < s - a + 3,
    p = iS(function () {
      var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
        _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
      return t.slice(g, _).map(function (b, y) {
        return u(b, g + y, i);
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
    var h = a - 2;
    return [].concat(
      Te(p(0, h)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: h + 1, to: s - 1 })],
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
function mf(e, t) {
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
function oS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mf(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Qs = {
    paginationMenu:
      "_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t",
    paginationMenuItem: "_1pfhze3t _ect41gqc",
    navigatorIconWrapper: "_18zr12x7",
  },
  sS = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "0.0.0-development",
  };
function wf(e) {
  var t = e.chevronDirection,
    r = t === "left" ? Ow : kw;
  return E.createElement(
    io,
    { as: "span", xcss: Qs.navigatorIconWrapper },
    E.createElement(r, {
      label: "",
      LEGACY_margin: "0 ".concat("var(--ds-space-negative-075, -6px)"),
      color: "currentColor",
      size: "small",
    }),
  );
}
function uS(e, t) {
  var r = e.components,
    n = r === void 0 ? bf : r,
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
    h = v === void 0 ? "next" : v,
    f = e.style,
    g = f === void 0 ? bf : f,
    _ = e.max,
    b = _ === void 0 ? 7 : _,
    y = e.onChange,
    O = y === void 0 ? we : y,
    w = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    T = x === void 0 ? tS : x,
    j = e.analyticsContext,
    C = e.testId,
    M = e.isDisabled,
    z = d0(o, function () {
      return a || 0;
    }),
    q = K(z, 2),
    V = q[0],
    J = q[1],
    G = Ri(
      oS(
        {
          fn: function (N, I) {
            var be = N.event,
              ae = N.selectedPageIndex;
            (o === void 0 && J(ae), O && O(be, w[ae], I));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: j,
        },
        sS,
      ),
    ),
    $ = function (N, I, be) {
      var ae = w[V],
        ue = "".concat(l, " ").concat(S ? S(N, I) : N),
        le = N === ae;
      return E.createElement(
        la,
        { as: "li", xcss: Qs.paginationMenuItem, key: "page-".concat(S ? S(N, I) : I) },
        E.createElement(
          ZO,
          {
            component: n.Page,
            onClick: function (ce) {
              return G({ event: ce, selectedPageIndex: I });
            },
            "aria-current": le ? "page" : void 0,
            "aria-label": ue,
            isSelected: le,
            isDisabled: M,
            page: N,
            testId:
              be &&
              ""
                .concat(be, "--")
                .concat(le ? "current-" : "", "page-")
                .concat(I),
          },
          S ? S(N, I) : N,
        ),
      );
    };
  return E.createElement(
    io,
    { testId: C, style: g, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      la,
      { space: "space.0", alignBlock: "center" },
      E.createElement(_f, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V - 1 });
        },
        isDisabled: M || V === 0,
        iconBefore: E.createElement(wf, { chevronDirection: "left" }),
        "aria-label": p,
        testId: C && "".concat(C, "--left-navigator"),
      }),
      E.createElement(
        la,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Qs.paginationMenu },
        aS(w, V, { max: b, ellipsis: T, transform: $ }, C),
      ),
      E.createElement(_f, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return G({ event: N, selectedPageIndex: V + 1 });
        },
        isDisabled: M || V === w.length - 1,
        iconBefore: E.createElement(wf, { chevronDirection: "right" }),
        "aria-label": h,
        testId: C && "".concat(C, "--right-navigator"),
      }),
    ),
  );
}
var cS = m.memo(m.forwardRef(uS));
function lS(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, Ah() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var dS = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = lS(this, t, [].concat(i))),
        R(r, "onChange", function (o, u, s) {
          r.props.onChange(u, s);
        }),
        r
      );
    }
    return (
      ze(t, e),
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
            return E.createElement(cS, {
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
  fS = ["isRanking", "testId"],
  vS = [
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
function Of(e, t) {
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
function oi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Of(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Of(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Sf = "--local-dynamic-table-text-color",
  pS = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ne(t, fS);
    return m.createElement(
      "thead",
      te({ "data-testid": n }, i, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  hS = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ne(e, vS),
      l = oi(
        oi(oi({}, u), r && zp({ width: r })),
        {},
        R({}, Sf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === pr,
      p = i === Aa,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      h = n ? "th" : "td";
    return m.createElement(
      h,
      te({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: P([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: oi(
          oi({}, l),
          {},
          { "--_17ckjys": Bp("var(--ds-text-subtle, ".concat("var(".concat(Sf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function gS(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, Ih() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
function _S(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = gS(this, r, [].concat(a))),
        R(n, "state", { refWidth: 0, refHeight: 0 }),
        R(n, "innerRef", function (u) {
          u && !n.props.isRanking && (n.ref = u);
        }),
        R(n, "updateDimensions", function () {
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
      ze(r, t),
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
var si = {},
  Ef;
function bS() {
  if (Ef) return si;
  ((Ef = 1), Object.defineProperty(si, "__esModule", { value: !0 }), (si.default = void 0));
  var e = r(gr()),
    t = r(no);
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
  return ((n.displayName = "ArrowDownIcon"), (si.default = n), si);
}
var yS = bS();
const mS = Xt(yS);
var ui = {},
  kf;
function wS() {
  if (kf) return ui;
  ((kf = 1), Object.defineProperty(ui, "__esModule", { value: !0 }), (ui.default = void 0));
  var e = r(gr()),
    t = r(no);
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
  return ((n.displayName = "ArrowUpIcon"), (ui.default = n), ui);
}
var OS = wS();
const SS = Xt(OS);
var ES = "Escape";
function kS(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    i = m.useCallback(
      function (o) {
        r || n.current || o.key !== ES || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return ao.bindAll(
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
function ci(e) {
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
var xS = m.createContext(null),
  RS = m.createContext(null);
function PS() {
  var e = m.useContext(RS);
  return e;
}
function CS(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = m.useContext(xS),
    a = PS();
  m.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var vi = { none: 0, small: 100, medium: 350, large: 700 },
  ys = 0.5,
  AS = { none: vi.none, small: vi.small * ys, medium: vi.medium * ys, large: vi.large * ys },
  IS = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  jS = function () {
    if (!IS()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  DS = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  TS = function () {
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
      }, DS(t)),
      m.useCallback(function (n, i) {
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
  jh = { appear: !0, isExiting: !1 },
  Dh = m.createContext(jh),
  xf = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jh;
    return E.createElement(Dh.Provider, { key: "".concat(t.key, "-provider"), value: r }, t);
  },
  Rf = function (t) {
    var r = [];
    return (
      m.Children.toArray(t).forEach(function (n) {
        typeof n != "boolean" && n && r.push(n);
      }),
      r
    );
  },
  MS = function (t, r) {
    for (var n = r.concat([]), i = LS(r), a = 0; a < t.length; a++) {
      var o = t[a],
        u = !i[o.key];
      u && n.splice(a + 1, 0, o);
    }
    return n;
  },
  LS = function (t) {
    return t.reduce(function (r, n) {
      return ((r[n.key] = n), r);
    }, {});
  },
  FS = function (t, r) {
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
  Th = m.memo(function (e) {
    var t = e.appear,
      r = t === void 0 ? !1 : t,
      n = e.children,
      i = e.exitThenEnter,
      a = m.useState([null, n]),
      o = K(a, 2),
      u = o[0],
      s = o[1],
      c = m.useState([]),
      l = K(c, 2),
      d = l[0],
      p = l[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = K(v, 2),
      f = h[0],
      g = h[1];
    if (
      (m.useEffect(function () {
        f.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var _ = K(u, 2),
      b = _[0],
      y = _[1],
      O = Rf(b),
      w = Rf(y);
    y !== n && s([y, n]);
    var S = FS(w, O),
      x = !!S.size,
      T = w;
    if ((x && (T = MS(w, O)), i))
      if (d.length) T = d;
      else {
        var j = T.filter(function (C) {
          return S.has(C.key);
        });
        j.length && p(j);
      }
    return (
      S.size
        ? (T = T.map(function (C) {
            var M = S.has(C.key);
            return xf(C, {
              appear: !0,
              isExiting: M,
              onFinish: M
                ? function () {
                    (S.delete(C.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (T = T.map(function (C) {
            return xf(C, f);
          })),
      T
    );
  }),
  NS = function () {
    return m.useContext(Dh);
  };
Th.displayName = "ExitingPersistence";
function BS() {
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
var qS = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: we };
  }),
  zS = function () {
    var t = BS(),
      r = m.useContext(qS);
    return r(t);
  },
  US = function (t) {
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
      v = zS(),
      h = NS(),
      f = h.isExiting,
      g = h.onFinish,
      _ = h.appear,
      b = TS(),
      y = c || !v.isReady,
      O = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(_),
      x = K(S, 2),
      T = x[0],
      j = x[1];
    return (
      m.useEffect(
        function () {
          var C = !1;
          if (!y) {
            if (!_) {
              l && l(w);
              return;
            }
            var M = function () {
              (w === "exiting" && g?.(), C || j(!1), l?.(w));
            };
            if (jS()) {
              M();
              return;
            }
            return (
              j(!0),
              b(M, f ? AS[p] : vi[p] + O),
              function () {
                C = !0;
              }
            );
          }
        },
        [g, w, f, p, O, y, b],
      ),
      r(
        {
          ref: v.ref,
          className: T
            ? P([
                P(["_1o51eoah _1y0co91m _1bumglyw _sedtglyw"]),
                y && P(["_1y0ctrqk"]),
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
                f && a === "ease-out" && P(["_1pgldkwg"]),
                f && a === "ease-in" && P(["_1pgl1nzg"]),
                f && a === "ease-in-40-out" && P(["_1pgl5y64"]),
                f && a === "ease-in-60-out" && P(["_1pgl1ddy"]),
                f && a === "ease-in-80-out" && P(["_1pglannl"]),
                f && a === "ease-in-out" && P(["_1pgl1fu8"]),
                ((!f && o === "fade-in") || (f && s === "fade-in")) && P(["_j7hq1cgr"]),
                ((!f && o === "fade-out") || (f && s === "fade-out")) && P(["_j7hq1lln"]),
                ((!f && o === "zoom-in") || (f && s === "zoom-in")) && P(["_j7hqe8p0"]),
                ((!f && o === "zoom-out") || (f && s === "zoom-out")) && P(["_j7hqy6ql"]),
                ((!f && o === "slide-in-from-top") || (f && s === "slide-in-from-top")) &&
                  P(["_j7hqqshu"]),
                ((!f && o === "slide-out-from-top") || (f && s === "slide-out-from-top")) &&
                  P(["_j7hq7ri4"]),
                ((!f && o === "slide-in-from-right") || (f && s === "slide-in-from-right")) &&
                  P(["_j7hqdfjr"]),
                ((!f && o === "slide-out-from-right") || (f && s === "slide-out-from-right")) &&
                  P(["_j7hqonfj"]),
                ((!f && o === "slide-in-from-bottom") || (f && s === "slide-in-from-bottom")) &&
                  P(["_j7hq1liq"]),
                ((!f && o === "slide-out-from-bottom") || (f && s === "slide-out-from-bottom")) &&
                  P(["_j7hqhnf1"]),
                ((!f && o === "slide-in-from-left") || (f && s === "slide-in-from-left")) &&
                  P(["_j7hq1bh1"]),
                ((!f && o === "slide-out-from-left") || (f && s === "slide-out-from-left")) &&
                  P(["_j7hqj08w"]),
                ((!f && o === "fade-in-from-top") || (f && s === "fade-in-from-top")) &&
                  P(["_j7hq2iua"]),
                ((!f && o === "fade-out-from-top") || (f && s === "fade-out-from-top")) &&
                  P(["_j7hq39va"]),
                ((!f && o === "fade-in-from-left") || (f && s === "fade-in-from-left")) &&
                  P(["_j7hq15m2"]),
                ((!f && o === "fade-out-from-left") || (f && s === "fade-out-from-left")) &&
                  P(["_j7hq1yiv"]),
                ((!f && o === "fade-in-from-bottom") || (f && s === "fade-in-from-bottom")) &&
                  P(["_j7hq1w00"]),
                ((!f && o === "fade-out-from-bottom") || (f && s === "fade-out-from-bottom")) &&
                  P(["_j7hqzy3z"]),
                ((!f && o === "fade-in-from-right") || (f && s === "fade-in-from-right")) &&
                  P(["_j7hqpqak"]),
                ((!f && o === "fade-out-from-right") || (f && s === "fade-out-from-right")) &&
                  P(["_j7hq1ebg"]),
                ((!f && o === "fade-in-from-top-constant") ||
                  (f && s === "fade-in-from-top-constant")) &&
                  P(["_j7hqm2e2"]),
                ((!f && o === "fade-out-from-top-constant") ||
                  (f && s === "fade-out-from-top-constant")) &&
                  P(["_j7hq97jn"]),
                ((!f && o === "fade-in-from-left-constant") ||
                  (f && s === "fade-in-from-left-constant")) &&
                  P(["_j7hqovgq"]),
                ((!f && o === "fade-out-from-left-constant") ||
                  (f && s === "fade-out-from-left-constant")) &&
                  P(["_j7hq15do"]),
                ((!f && o === "fade-in-from-bottom-constant") ||
                  (f && s === "fade-in-from-bottom-constant")) &&
                  P(["_j7hq797a"]),
                ((!f && o === "fade-out-from-bottom-constant") ||
                  (f && s === "fade-out-from-bottom-constant")) &&
                  P(["_j7hqwo7r"]),
                ((!f && o === "fade-in-from-right-constant") ||
                  (f && s === "fade-in-from-right-constant")) &&
                  P(["_j7hqt8u5"]),
                ((!f && o === "fade-out-from-right-constant") ||
                  (f && s === "fade-out-from-right-constant")) &&
                  P(["_j7hq1pgp"]),
              ])
            : "",
          style: { animationDelay: "".concat(O, "ms") },
        },
        w,
      )
    );
  },
  $S = { top: "bottom", bottom: "top", left: "right", right: "left" },
  VS = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? $S[a] : void 0,
      p =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      US,
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
  GS = m.createContext();
m.createContext();
var HS = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  WS = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  KS = function (t, r) {
    if (typeof t == "function") return WS(t, r);
    t != null && (t.current = r);
  },
  Pf = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        a = n[1];
      return ((r[i] = a), r);
    }, {});
  },
  Cf =
    typeof window < "u" && window.document && window.document.createElement
      ? m.useLayoutEffect
      : m.useEffect,
  Ce = "top",
  et = "bottom",
  tt = "right",
  Ae = "left",
  xu = "auto",
  Ui = [Ce, et, tt, Ae],
  $r = "start",
  ji = "end",
  YS = "clippingParents",
  Mh = "viewport",
  li = "popper",
  JS = "reference",
  Af = Ui.reduce(function (e, t) {
    return e.concat([t + "-" + $r, t + "-" + ji]);
  }, []),
  Lh = [].concat(Ui, [xu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + $r, t + "-" + ji]);
  }, []),
  XS = "beforeRead",
  QS = "read",
  ZS = "afterRead",
  eE = "beforeMain",
  tE = "main",
  rE = "afterMain",
  nE = "beforeWrite",
  iE = "write",
  aE = "afterWrite",
  oE = [XS, QS, ZS, eE, tE, rE, nE, iE, aE];
function Rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ne(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function hr(e) {
  var t = Ne(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = Ne(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ru(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ne(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function sE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Ze(a) ||
      !Rt(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var u = i[o];
        u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function uE(e) {
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
        !Ze(i) ||
          !Rt(i) ||
          (Object.assign(i.style, u),
          Object.keys(a).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const cE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: sE,
  effect: uE,
  requires: ["computeStyles"],
};
function Et(e) {
  return e.split("-")[0];
}
var cr = Math.max,
  Ta = Math.min,
  Vr = Math.round;
function Zs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Fh() {
  return !/^((?!chrome|android).)*safari/i.test(Zs());
}
function Gr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Ze(e) &&
    ((i = (e.offsetWidth > 0 && Vr(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Vr(n.height) / e.offsetHeight) || 1));
  var o = hr(e) ? Ne(e) : window,
    u = o.visualViewport,
    s = !Fh() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    l = (n.top + (s && u ? u.offsetTop : 0)) / a,
    d = n.width / i,
    p = n.height / a;
  return { width: d, height: p, top: l, right: c + d, bottom: l + p, left: c, x: c, y: l };
}
function Pu(e) {
  var t = Gr(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Nh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Ru(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function qt(e) {
  return Ne(e).getComputedStyle(e);
}
function lE(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function Zt(e) {
  return ((hr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function co(e) {
  return Rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ru(e) ? e.host : null) || Zt(e);
}
function If(e) {
  return !Ze(e) || qt(e).position === "fixed" ? null : e.offsetParent;
}
function dE(e) {
  var t = /firefox/i.test(Zs()),
    r = /Trident/i.test(Zs());
  if (r && Ze(e)) {
    var n = qt(e);
    if (n.position === "fixed") return null;
  }
  var i = co(e);
  for (Ru(i) && (i = i.host); Ze(i) && ["html", "body"].indexOf(Rt(i)) < 0; ) {
    var a = qt(i);
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
function $i(e) {
  for (var t = Ne(e), r = If(e); r && lE(r) && qt(r).position === "static"; ) r = If(r);
  return r && (Rt(r) === "html" || (Rt(r) === "body" && qt(r).position === "static"))
    ? t
    : r || dE(e) || t;
}
function Cu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yi(e, t, r) {
  return cr(e, Ta(t, r));
}
function fE(e, t, r) {
  var n = yi(e, t, r);
  return n > r ? r : n;
}
function Bh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function qh(e) {
  return Object.assign({}, Bh(), e);
}
function zh(e, t) {
  return t.reduce(function (r, n) {
    return ((r[n] = e), r);
  }, {});
}
var vE = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    qh(typeof t != "number" ? t : zh(t, Ui))
  );
};
function pE(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = Et(r.placement),
    s = Cu(u),
    c = [Ae, tt].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = vE(i.padding, r),
      p = Pu(a),
      v = s === "y" ? Ce : Ae,
      h = s === "y" ? et : tt,
      f = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      _ = $i(a),
      b = _ ? (s === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      y = f / 2 - g / 2,
      O = d[v],
      w = b - p[l] - d[h],
      S = b / 2 - p[l] / 2 + y,
      x = yi(O, S, w),
      T = s;
    r.modifiersData[n] = ((t = {}), (t[T] = x), (t.centerOffset = x - S), t);
  }
}
function hE(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Nh(t.elements.popper, i) && (t.elements.arrow = i)));
}
const gE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pE,
  effect: hE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Hr(e) {
  return e.split("-")[1];
}
var _E = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function bE(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Vr(r * i) / i || 0, y: Vr(n * i) / i || 0 };
}
function jf(e) {
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
    h = o.y,
    f = h === void 0 ? 0 : h,
    g = typeof l == "function" ? l({ x: v, y: f }) : { x: v, y: f };
  ((v = g.x), (f = g.y));
  var _ = o.hasOwnProperty("x"),
    b = o.hasOwnProperty("y"),
    y = Ae,
    O = Ce,
    w = window;
  if (c) {
    var S = $i(r),
      x = "clientHeight",
      T = "clientWidth";
    if (
      (S === Ne(r) &&
        ((S = Zt(r)),
        qt(S).position !== "static" &&
          u === "absolute" &&
          ((x = "scrollHeight"), (T = "scrollWidth"))),
      (S = S),
      i === Ce || ((i === Ae || i === tt) && a === ji))
    ) {
      O = et;
      var j = d && S === w && w.visualViewport ? w.visualViewport.height : S[x];
      ((f -= j - n.height), (f *= s ? 1 : -1));
    }
    if (i === Ae || ((i === Ce || i === et) && a === ji)) {
      y = tt;
      var C = d && S === w && w.visualViewport ? w.visualViewport.width : S[T];
      ((v -= C - n.width), (v *= s ? 1 : -1));
    }
  }
  var M = Object.assign({ position: u }, c && _E),
    z = l === !0 ? bE({ x: v, y: f }, Ne(r)) : { x: v, y: f };
  if (((v = z.x), (f = z.y), s)) {
    var q;
    return Object.assign(
      {},
      M,
      ((q = {}),
      (q[O] = b ? "0" : ""),
      (q[y] = _ ? "0" : ""),
      (q.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      q),
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}), (t[O] = b ? f + "px" : ""), (t[y] = _ ? v + "px" : ""), (t.transform = ""), t),
  );
}
function yE(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    a = r.adaptive,
    o = a === void 0 ? !0 : a,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: Et(t.placement),
      variation: Hr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      jf(
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
        jf(
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
const mE = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: yE, data: {} };
var aa = { passive: !0 };
function wE(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    i = n.scroll,
    a = i === void 0 ? !0 : i,
    o = n.resize,
    u = o === void 0 ? !0 : o,
    s = Ne(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (l) {
        l.addEventListener("scroll", r.update, aa);
      }),
    u && s.addEventListener("resize", r.update, aa),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, aa);
        }),
        u && s.removeEventListener("resize", r.update, aa));
    }
  );
}
const OE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: wE,
  data: {},
};
var SE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ha(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return SE[t];
  });
}
var EE = { start: "end", end: "start" };
function Df(e) {
  return e.replace(/start|end/g, function (t) {
    return EE[t];
  });
}
function Au(e) {
  var t = Ne(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Iu(e) {
  return Gr(Zt(e)).left + Au(e).scrollLeft;
}
function kE(e, t) {
  var r = Ne(e),
    n = Zt(e),
    i = r.visualViewport,
    a = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var c = Fh();
    (c || (!c && t === "fixed")) && ((u = i.offsetLeft), (s = i.offsetTop));
  }
  return { width: a, height: o, x: u + Iu(e), y: s };
}
function xE(e) {
  var t,
    r = Zt(e),
    n = Au(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = cr(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = cr(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + Iu(e),
    s = -n.scrollTop;
  return (
    qt(i || r).direction === "rtl" && (u += cr(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: u, y: s }
  );
}
function ju(e) {
  var t = qt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Uh(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0
    ? e.ownerDocument.body
    : Ze(e) && ju(e)
      ? e
      : Uh(co(e));
}
function mi(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Uh(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Ne(n),
    o = i ? [a].concat(a.visualViewport || [], ju(n) ? n : []) : n,
    u = t.concat(o);
  return i ? u : u.concat(mi(co(o)));
}
function eu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function RE(e, t) {
  var r = Gr(e, !1, t === "fixed");
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
function Tf(e, t, r) {
  return t === Mh ? eu(kE(e, r)) : hr(t) ? RE(t, r) : eu(xE(Zt(e)));
}
function PE(e) {
  var t = mi(co(e)),
    r = ["absolute", "fixed"].indexOf(qt(e).position) >= 0,
    n = r && Ze(e) ? $i(e) : e;
  return hr(n)
    ? t.filter(function (i) {
        return hr(i) && Nh(i, n) && Rt(i) !== "body";
      })
    : [];
}
function CE(e, t, r, n) {
  var i = t === "clippingParents" ? PE(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    u = a.reduce(
      function (s, c) {
        var l = Tf(e, c, n);
        return (
          (s.top = cr(l.top, s.top)),
          (s.right = Ta(l.right, s.right)),
          (s.bottom = Ta(l.bottom, s.bottom)),
          (s.left = cr(l.left, s.left)),
          s
        );
      },
      Tf(e, o, n),
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function $h(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    i = n ? Et(n) : null,
    a = n ? Hr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case Ce:
      s = { x: o, y: t.y - r.height };
      break;
    case et:
      s = { x: o, y: t.y + t.height };
      break;
    case tt:
      s = { x: t.x + t.width, y: u };
      break;
    case Ae:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = i ? Cu(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case $r:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case ji:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Di(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    u = r.boundary,
    s = u === void 0 ? YS : u,
    c = r.rootBoundary,
    l = c === void 0 ? Mh : c,
    d = r.elementContext,
    p = d === void 0 ? li : d,
    v = r.altBoundary,
    h = v === void 0 ? !1 : v,
    f = r.padding,
    g = f === void 0 ? 0 : f,
    _ = qh(typeof g != "number" ? g : zh(g, Ui)),
    b = p === li ? JS : li,
    y = e.rects.popper,
    O = e.elements[h ? b : p],
    w = CE(hr(O) ? O : O.contextElement || Zt(e.elements.popper), s, l, o),
    S = Gr(e.elements.reference),
    x = $h({ reference: S, element: y, placement: i }),
    T = eu(Object.assign({}, y, x)),
    j = p === li ? T : S,
    C = {
      top: w.top - j.top + _.top,
      bottom: j.bottom - w.bottom + _.bottom,
      left: w.left - j.left + _.left,
      right: j.right - w.right + _.right,
    },
    M = e.modifiersData.offset;
  if (p === li && M) {
    var z = M[i];
    Object.keys(C).forEach(function (q) {
      var V = [tt, et].indexOf(q) >= 0 ? 1 : -1,
        J = [Ce, et].indexOf(q) >= 0 ? "y" : "x";
      C[q] += z[J] * V;
    });
  }
  return C;
}
function AE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? Lh : s,
    l = Hr(n),
    d = l
      ? u
        ? Af
        : Af.filter(function (h) {
            return Hr(h) === l;
          })
      : Ui,
    p = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (h, f) {
    return ((h[f] = Di(e, { placement: f, boundary: i, rootBoundary: a, padding: o })[Et(f)]), h);
  }, {});
  return Object.keys(v).sort(function (h, f) {
    return v[h] - v[f];
  });
}
function IE(e) {
  if (Et(e) === xu) return [];
  var t = ha(e);
  return [Df(e), t, Df(t)];
}
function jE(e) {
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
        h = v === void 0 ? !0 : v,
        f = r.allowedAutoPlacements,
        g = t.options.placement,
        _ = Et(g),
        b = _ === g,
        y = s || (b || !h ? [ha(g)] : IE(g)),
        O = [g].concat(y).reduce(function (le, ge) {
          return le.concat(
            Et(ge) === xu
              ? AE(t, {
                  placement: ge,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: f,
                })
              : ge,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        T = !0,
        j = O[0],
        C = 0;
      C < O.length;
      C++
    ) {
      var M = O[C],
        z = Et(M),
        q = Hr(M) === $r,
        V = [Ce, et].indexOf(z) >= 0,
        J = V ? "width" : "height",
        G = Di(t, { placement: M, boundary: l, rootBoundary: d, altBoundary: p, padding: c }),
        $ = V ? (q ? tt : Ae) : q ? et : Ce;
      w[J] > S[J] && ($ = ha($));
      var X = ha($),
        N = [];
      if (
        (a && N.push(G[z] <= 0),
        u && N.push(G[$] <= 0, G[X] <= 0),
        N.every(function (le) {
          return le;
        }))
      ) {
        ((j = M), (T = !1));
        break;
      }
      x.set(M, N);
    }
    if (T)
      for (
        var I = h ? 3 : 1,
          be = function (ge) {
            var ce = O.find(function (Ue) {
              var Oe = x.get(Ue);
              if (Oe)
                return Oe.slice(0, ge).every(function (nt) {
                  return nt;
                });
            });
            if (ce) return ((j = ce), "break");
          },
          ae = I;
        ae > 0;
        ae--
      ) {
        var ue = be(ae);
        if (ue === "break") break;
      }
    t.placement !== j && ((t.modifiersData[n]._skip = !0), (t.placement = j), (t.reset = !0));
  }
}
const DE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jE,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Mf(e, t, r) {
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
function Lf(e) {
  return [Ce, tt, et, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function TE(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Di(t, { elementContext: "reference" }),
    u = Di(t, { altBoundary: !0 }),
    s = Mf(o, n),
    c = Mf(u, i, a),
    l = Lf(s),
    d = Lf(c);
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
const ME = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: TE,
};
function LE(e, t, r) {
  var n = Et(e),
    i = [Ae, Ce].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    u = a[1];
  return (
    (o = o || 0),
    (u = (u || 0) * i),
    [Ae, tt].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function FE(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Lh.reduce(function (l, d) {
      return ((l[d] = LE(d, t.rects, a)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const NE = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: FE };
function BE(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = $h({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const qE = { name: "popperOffsets", enabled: !0, phase: "read", fn: BE, data: {} };
function zE(e) {
  return e === "x" ? "y" : "x";
}
function UE(e) {
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
    h = r.tetherOffset,
    f = h === void 0 ? 0 : h,
    g = Di(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    _ = Et(t.placement),
    b = Hr(t.placement),
    y = !b,
    O = Cu(_),
    w = zE(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    T = t.rects.popper,
    j = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    C =
      typeof j == "number"
        ? { mainAxis: j, altAxis: j }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var q,
        V = O === "y" ? Ce : Ae,
        J = O === "y" ? et : tt,
        G = O === "y" ? "height" : "width",
        $ = S[O],
        X = $ + g[V],
        N = $ - g[J],
        I = v ? -T[G] / 2 : 0,
        be = b === $r ? x[G] : T[G],
        ae = b === $r ? -T[G] : -x[G],
        ue = t.elements.arrow,
        le = v && ue ? Pu(ue) : { width: 0, height: 0 },
        ge = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Bh(),
        ce = ge[V],
        Ue = ge[J],
        Oe = yi(0, x[G], le[G]),
        nt = y ? x[G] / 2 - I - Oe - ce - C.mainAxis : be - Oe - ce - C.mainAxis,
        pe = y ? -x[G] / 2 + I + Oe + Ue + C.mainAxis : ae + Oe + Ue + C.mainAxis,
        $e = t.elements.arrow && $i(t.elements.arrow),
        wr = $e ? (O === "y" ? $e.clientTop || 0 : $e.clientLeft || 0) : 0,
        At = (q = M?.[O]) != null ? q : 0,
        Se = $ + nt - At - wr,
        Ee = $ + pe - At,
        zt = yi(v ? Ta(X, Se) : X, $, v ? cr(N, Ee) : N);
      ((S[O] = zt), (z[O] = zt - $));
    }
    if (u) {
      var pt,
        it = O === "x" ? Ce : Ae,
        Ut = O === "x" ? et : tt,
        Ve = S[w],
        De = w === "y" ? "height" : "width",
        ke = Ve + g[it],
        at = Ve - g[Ut],
        $t = [Ce, Ae].indexOf(_) !== -1,
        Vi = (pt = M?.[w]) != null ? pt : 0,
        Gi = $t ? ke : Ve - x[De] - T[De] - Vi + C.altAxis,
        Hi = $t ? Ve + x[De] + T[De] - Vi - C.altAxis : at,
        Wi = v && $t ? fE(Gi, Ve, Hi) : yi(v ? Gi : ke, Ve, v ? Hi : at);
      ((S[w] = Wi), (z[w] = Wi - Ve));
    }
    t.modifiersData[n] = z;
  }
}
const $E = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: UE,
  requiresIfExists: ["offset"],
};
function VE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function GE(e) {
  return e === Ne(e) || !Ze(e) ? Au(e) : VE(e);
}
function HE(e) {
  var t = e.getBoundingClientRect(),
    r = Vr(t.width) / e.offsetWidth || 1,
    n = Vr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function WE(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ze(t),
    i = Ze(t) && HE(t),
    a = Zt(t),
    o = Gr(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Rt(t) !== "body" || ju(a)) && (u = GE(t)),
      Ze(t) ? ((s = Gr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : a && (s.x = Iu(a))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function KE(e) {
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
function YE(e) {
  var t = KE(e);
  return oE.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function JE(e) {
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
function XE(e) {
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
var Ff = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Nf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function QE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    a = i === void 0 ? Ff : i;
  return function (u, s, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ff, a),
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
              reference: hr(u) ? mi(u) : u.contextElement ? mi(u.contextElement) : [],
              popper: mi(s),
            }));
          var y = YE(XE([].concat(n, l.options.modifiers)));
          return (
            (l.orderedModifiers = y.filter(function (O) {
              return O.enabled;
            })),
            h(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var _ = l.elements,
              b = _.reference,
              y = _.popper;
            if (Nf(b, y)) {
              ((l.rects = {
                reference: WE(b, $i(y), l.options.strategy === "fixed"),
                popper: Pu(y),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (C) {
                  return (l.modifiersData[C.name] = Object.assign({}, C.data));
                }));
              for (var O = 0; O < l.orderedModifiers.length; O++) {
                if (l.reset === !0) {
                  ((l.reset = !1), (O = -1));
                  continue;
                }
                var w = l.orderedModifiers[O],
                  S = w.fn,
                  x = w.options,
                  T = x === void 0 ? {} : x,
                  j = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: T, name: j, instance: v }) || l);
              }
            }
          }
        },
        update: JE(function () {
          return new Promise(function (g) {
            (v.forceUpdate(), g(l));
          });
        }),
        destroy: function () {
          (f(), (p = !0));
        },
      };
    if (!Nf(u, s)) return v;
    v.setOptions(c).then(function (g) {
      !p && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function h() {
      l.orderedModifiers.forEach(function (g) {
        var _ = g.name,
          b = g.options,
          y = b === void 0 ? {} : b,
          O = g.effect;
        if (typeof O == "function") {
          var w = O({ state: l, name: _, instance: v, options: y }),
            S = function () {};
          d.push(w || S);
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
var ZE = [OE, qE, mE, cE, NE, DE, $E, gE, ME],
  ek = QE({ defaultModifiers: ZE }),
  ms,
  Bf;
function tk() {
  if (Bf) return ms;
  Bf = 1;
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
    (ms = function (o, u) {
      try {
        return i(o, u);
      } catch (s) {
        if ((s.message || "").match(/stack|recursion/i))
          return (console.warn("react-fast-compare cannot handle circular refs"), !1);
        throw s;
      }
    }),
    ms
  );
}
var rk = tk();
const nk = Xt(rk);
var ik = [],
  ak = function (t, r, n) {
    n === void 0 && (n = {});
    var i = m.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || ik,
      },
      o = m.useState({
        styles: {
          popper: { position: a.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      u = o[0],
      s = o[1],
      c = m.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (v) {
            var h = v.state,
              f = Object.keys(h.elements);
            Ma.flushSync(function () {
              s({
                styles: Pf(
                  f.map(function (g) {
                    return [g, h.styles[g] || {}];
                  }),
                ),
                attributes: Pf(
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
      l = m.useMemo(
        function () {
          var p = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [c, { name: "applyStyles", enabled: !1 }]),
          };
          return nk(i.current, p) ? i.current || p : ((i.current = p), p);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c],
      ),
      d = m.useRef();
    return (
      Cf(
        function () {
          d.current && d.current.setOptions(l);
        },
        [l],
      ),
      Cf(
        function () {
          if (!(t == null || r == null)) {
            var p = n.createPopper || ek,
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
  ok = function () {},
  sk = function () {
    return Promise.resolve(null);
  },
  uk = [];
function ck(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? uk : a,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = m.useContext(GS),
    p = m.useState(null),
    v = p[0],
    h = p[1],
    f = m.useState(null),
    g = f[0],
    _ = f[1];
  m.useEffect(
    function () {
      KS(c, v);
    },
    [c, v],
  );
  var b = m.useMemo(
      function () {
        return {
          placement: r,
          strategy: i,
          onFirstUpdate: s,
          modifiers: [].concat(o, [{ name: "arrow", enabled: g != null, options: { element: g } }]),
        };
      },
      [r, i, s, o, g],
    ),
    y = ak(u || d, v, b),
    O = y.state,
    w = y.styles,
    S = y.forceUpdate,
    x = y.update,
    T = m.useMemo(
      function () {
        return {
          ref: h,
          style: w.popper,
          placement: O ? O.placement : r,
          hasPopperEscaped:
            O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: w.arrow, ref: _ },
          forceUpdate: S || ok,
          update: x || sk,
        };
      },
      [h, _, r, O, w, x, S],
    );
  return HS(l)(T);
}
function lk(e) {
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
            h = K(v, 1),
            f = h[0],
            g =
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
          (f === "top" && (b = s.rects.reference.y + g.y - t),
            f === "bottom" && (b = l.height - p.y - t),
            f === "left" && (_ = s.rects.reference.x + g.x - t),
            f === "right" && (_ = l.width - p.x - t),
            (s.styles.popper.maxWidth = "".concat(_, "px")),
            (s.styles.popper.maxHeight = "".concat(b, "px")));
        }
      },
    },
  ];
}
var tu = 5,
  dk = [
    {
      name: "flip",
      options: {
        flipVariations: !1,
        padding: tu,
        boundary: "clippingParents",
        rootBoundary: "viewport",
      },
    },
  ];
function fk() {
  return null;
}
var vk = [0, 8];
function pk(e) {
  var t = e.children,
    r = t === void 0 ? fk : t,
    n = e.offset,
    i = n === void 0 ? vk : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    h = K(i, 2),
    f = h[0],
    g = h[1],
    _ = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: tu, rootBoundary: v ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [f, g] } },
          w = v ? lk({ viewportPadding: tu }) : [];
        return [].concat(dk, [y, O], Te(w));
      },
      [f, g, v],
    ),
    b = m.useMemo(
      function () {
        return c == null ? _ : [].concat(Te(_), Te(c));
      },
      [_, c],
    );
  return E.createElement(ck, { modifiers: b, placement: o, strategy: d, referenceElement: s }, r);
}
var Vh = "atlaskit-portal-container",
  Gh = "body > .atlaskit-portal-container",
  Hh = "atlaskit-portal",
  hk = function (t) {
    var r = document.createElement("div");
    return ((r.className = Hh), (r.style.zIndex = "".concat(t)), r);
  },
  Wh = function () {
    return document.body;
  },
  Kh = function () {
    var t = document.querySelector(Gh);
    if (!t) {
      var r,
        n = document.createElement("div");
      return (
        (n.className = Vh),
        (n.style.display = "flex"),
        (r = Wh()) === null || r === void 0 || r.appendChild(n),
        n
      );
    }
    return t;
  },
  gk = function (t) {
    Kh().removeChild(t);
  },
  _k = function (t) {
    t.parentElement || Kh().appendChild(t);
  },
  Yh = function () {
    return document !== void 0;
  },
  bk = function (t) {
    if (Yh()) {
      var r = document.createElement("div");
      return ((r.className = Hh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  yk = function () {
    if (Yh()) {
      var t = document.querySelector(Gh);
      if (!t) {
        var r,
          n = document.createElement("div");
        return (
          (n.className = Vh),
          (n.style.display = "flex"),
          (r = Wh()) === null || r === void 0 || r.appendChild(n),
          n
        );
      }
      return t;
    }
  };
function mk(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return hk(t);
      },
      [t],
    );
  return (
    _k(n),
    m.useEffect(
      function () {
        return function () {
          gk(n);
        };
      },
      [n],
    ),
    Ma.createPortal(r, n)
  );
}
var Jh = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function wk(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    i = K(n, 2),
    a = i[0],
    o = i[1];
  Jh(
    function () {
      var s = bk(t);
      o(s);
      var c = yk();
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
  var u = E.createElement(m.Suspense, { fallback: null }, r);
  return a ? Ma.createPortal(u, a) : null;
}
var Ok = function (t) {
    var r = m.useState(!1),
      n = K(r, 2),
      i = n[0],
      a = n[1],
      o = m.useState(function () {
        return t === "layoutEffect" ? Jh : m.useEffect;
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
  Sk = "akPortalMount",
  Ek = "akPortalUnmount",
  qf = {
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
  kk = function (t) {
    return qf.hasOwnProperty(t) ? qf[t] : null;
  },
  xk = function (t, r) {
    var n = { layer: kk(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function zf(e, t) {
  var r = xk(e, t);
  window.dispatchEvent(r);
}
var Rk = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        zf(Sk, r),
        function () {
          zf(Ek, r);
        }
      );
    },
    [r],
  );
};
function Pk(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = Ok(a);
  return (
    Rk(r),
    zr("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(wk, { zIndex: r }, n)
      : o
        ? E.createElement(mk, { zIndex: r }, n)
        : null
  );
}
var wi = new Set(),
  Ti = null;
function Uf() {
  if (!Ti) {
    Ti = ao.bindAll(window, [
      { type: "dragend", listener: ws },
      { type: "pointerdown", listener: ws },
      {
        type: "pointermove",
        listener: (function () {
          var t = 0;
          return function () {
            if (t < 20) {
              t++;
              return;
            }
            ws();
          };
        })(),
      },
    ]);
    var e = Array.from(wi);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ws() {
  var e;
  ((e = Ti) === null || e === void 0 || e(), (Ti = null));
  var t = Array.from(wi);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function Ck() {
  return ao.bindAll(window, [
    { type: "dragstart", listener: Uf },
    { type: "dragenter", listener: Uf },
  ]);
}
var oa = null;
function Ak(e) {
  return (
    oa || (oa = Ck()),
    wi.add(e),
    e.onRegister({ isDragging: Ti !== null }),
    function () {
      if ((wi.delete(e), wi.size === 0)) {
        var r;
        ((r = oa) === null || r === void 0 || r(), (oa = null));
      }
    }
  );
}
var Oi = null;
function pi() {
  Oi != null && (window.clearTimeout(Oi), (Oi = null));
}
function $f(e, t) {
  (pi(),
    (Oi = window.setTimeout(function () {
      ((Oi = null), e());
    }, t)));
}
var ht = null;
function Ik(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ht && ht.entry === e);
  }
  function n() {
    r() && (pi(), (ht = null));
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
        ((t = "shown"), pi());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), pi(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function u(v) {
    var h = v.isImmediate;
    if (r()) {
      if (t === "waiting-to-show") {
        a();
        return;
      }
      if (t !== "waiting-to-hide") {
        if (h) {
          a();
          return;
        }
        ((t = "waiting-to-hide"),
          $f(function () {
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
    var v = !!(ht && ht.isVisible());
    (ht && (pi(), ht.entry.hide({ isImmediate: !0 }), ht.entry.done(), (ht = null)),
      (ht = { entry: e, isVisible: c }));
    function h() {
      ((t = "shown"), e.show({ isImmediate: v }));
    }
    if (v) {
      h();
      return;
    }
    ((t = "waiting-to-show"), $f(h, e.delay));
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
function jk(e, t) {
  var r = m1();
  return t ? "".concat(r(e)) : void 0;
}
var Vf = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81o8v _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  Dk = function (t) {
    var r = t.shortcut;
    return m.createElement(
      "div",
      { className: P([Vf.shortcutSegmentsContainer]) },
      r.map(function (n, i) {
        return m.createElement(
          "kbd",
          { key: "".concat(n, "-").concat(i), className: P([Vf.shortcutSegment]) },
          n,
        );
      }),
    );
  },
  Xh = m.forwardRef(function (t, r) {
    var n = t.style,
      i = t.className,
      a = t.children,
      o = t.placement,
      u = t.testId,
      s = t.onMouseOut,
      c = t.onMouseOver,
      l = t.id,
      d = t.shortcut;
    return m.createElement(
      "div",
      { ref: r, style: n, "data-testid": u ? "".concat(u, "--wrapper") : void 0 },
      m.createElement(
        "div",
        {
          role: "tooltip",
          className: P(["_80om73ad", i]),
          onMouseOut: s,
          onMouseOver: c,
          "data-placement": o,
          "data-testid": u,
          id: l,
        },
        a,
        d && m.createElement(Dk, { shortcut: d }),
      ),
    );
  });
Xh.displayName = "TooltipPrimitive";
var Gf = {
    base: "_2rkofajl _11c8dcr7 _vchhusvi _p12fp3fh _bfhkgkf6 _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna",
    truncate: "_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c",
  },
  Qh = m.forwardRef(function (t, r) {
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
    return m.createElement(
      Xh,
      {
        ref: r,
        style: n,
        className: P([Gf.base, o && Gf.truncate, i]),
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
Qh.displayName = "TooltipContainer";
function Hf(e) {
  var t = e || { top: 0, left: 0 },
    r = function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    };
  return { getBoundingClientRect: r, clientWidth: 0, clientHeight: 0 };
}
function Wf(e, t) {
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
      ? Wf(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Tk = w1.tooltip(),
  Kf = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  Mk = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Lk = function (t) {
    return t.split("-")[0];
  };
function Fk(e) {
  var t = e.children,
    r = e.position,
    n = r === void 0 ? "bottom" : r,
    i = e.mousePosition,
    a = i === void 0 ? "bottom" : i,
    o = e.content,
    u = e.truncate,
    s = u === void 0 ? !1 : u,
    c = e.component,
    l = c === void 0 ? Qh : c,
    d = e.tag,
    p = d === void 0 ? "div" : d,
    v = e.testId,
    h = e.delay,
    f = h === void 0 ? 300 : h,
    g = e.onShow,
    _ = g === void 0 ? we : g,
    b = e.onHide,
    y = b === void 0 ? we : b,
    O = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    T = x === void 0 ? !1 : x,
    j = e.analyticsContext,
    C = e.strategy,
    M = C === void 0 ? "fixed" : C,
    z = e.ignoreTooltipPointerEvents,
    q = z === void 0 ? !1 : z,
    V = e.isScreenReaderAnnouncementDisabled,
    J = V === void 0 ? !1 : V,
    G = e.shortcut,
    $ = n === "mouse" ? a : n,
    X = nd(Dr({ fn: _, action: "displayed", analyticsData: j }, Kf)),
    N = nd(Dr({ fn: y, action: "hidden", analyticsData: j }, Kf)),
    I = m.useRef(null),
    be = m.useState("hide"),
    ae = K(be, 2),
    ue = ae[0],
    le = ae[1],
    ge = m.useRef(null),
    ce = m.useRef(null),
    Ue = function (re) {
      ((ce.current = re), (ge.current = re ? re.firstElementChild : null));
    },
    Oe = m.useCallback(function (L) {
      ge.current = L;
    }, []),
    nt = ci(ue),
    pe = ci(X),
    $e = ci(N),
    wr = ci(f),
    At = ci(O),
    Se = m.useRef(!1),
    Ee = m.useCallback(function (L) {
      ((I.current = L), (Se.current = !1));
    }, []),
    zt = m.useCallback(
      function () {
        I.current &&
          (Se.current && $e.current(), (I.current = null), (Se.current = !1), le("hide"));
      },
      [$e],
    ),
    pt = m.useCallback(
      function () {
        I.current && (I.current.abort(), Se.current && $e.current(), (I.current = null));
      },
      [$e],
    );
  m.useEffect(
    function () {
      return function () {
        I.current && pt();
      };
    },
    [pt],
  );
  var it = m.useRef(!1);
  m.useEffect(function () {
    return Ak({
      onRegister: function (re) {
        var It = re.isDragging;
        it.current = It;
      },
      onDragStart: function () {
        var re;
        ((re = I.current) === null || re === void 0 || re.requestHide({ isImmediate: !0 }),
          (it.current = !0));
      },
      onDragEnd: function () {
        it.current = !1;
      },
    });
  }, []);
  var Ut = m.useCallback(
      function (L) {
        var re;
        if (!it.current) {
          if ((I.current && !I.current.isActive() && pt(), I.current && I.current.isActive())) {
            I.current.keep();
            return;
          }
          if (!(At.current && !((re = At.current) !== null && re !== void 0 && re.call(At)))) {
            var It = {
                source: L,
                delay: wr.current,
                show: function (Or) {
                  var Qr = Or.isImmediate;
                  (Se.current || ((Se.current = !0), pe.current()),
                    le(Qr ? "show-immediate" : "fade-in"));
                },
                hide: function (Or) {
                  var Qr = Or.isImmediate;
                  le(Qr ? "hide" : "before-fade-out");
                },
                done: zt,
              },
              po = Ik(It);
            Ee(po);
          }
        }
      },
      [At, wr, zt, Ee, pt, pe],
    ),
    Ve = m.useCallback(
      function () {
        var L;
        (L = I.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
      },
      [I],
    );
  (kS({ onClose: Ve, isDisabled: ue === "hide" || ue === "fade-out" }),
    m.useEffect(
      function () {
        if (ue === "hide") return we;
        ue === "before-fade-out" && le("fade-out");
        var L = ao.bind(window, {
          type: "scroll",
          listener: function () {
            I.current && I.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return L;
      },
      [ue],
    ));
  var De = m.useCallback(
      function () {
        T && I.current && I.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    ke = m.useCallback(
      function () {
        S && I.current && I.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    at = m.useCallback(
      function (L) {
        if (!(ce.current && L.target === ce.current) && !L.defaultPrevented) {
          L.preventDefault();
          var re =
            n === "mouse"
              ? { type: "mouse", mouse: Hf({ left: L.clientX, top: L.clientY }) }
              : { type: "keyboard" };
          Ut(re);
        }
      },
      [n, Ut],
    ),
    $t = m.useCallback(function (L) {
      (ce.current && L.target === ce.current) ||
        L.defaultPrevented ||
        (L.preventDefault(), I.current && I.current.requestHide({ isImmediate: !1 }));
    }, []),
    Vi =
      n === "mouse"
        ? function (L) {
            var re;
            (re = I.current) !== null &&
              re !== void 0 &&
              re.isActive() &&
              (I.current.mousePosition = Hf({ left: L.clientX, top: L.clientY }));
          }
        : void 0,
    Gi = m.useCallback(function () {
      if (I.current && I.current.isActive()) {
        I.current.keep();
        return;
      }
    }, []),
    Hi = m.useCallback(
      function (L) {
        try {
          if (!L.target.matches(":focus-visible")) return;
        } catch {}
        Ut({ type: "keyboard" });
      },
      [Ut],
    ),
    Wi = m.useCallback(function () {
      I.current && I.current.requestHide({ isImmediate: !1 });
    }, []),
    ng = m.useCallback(
      function (L) {
        L === "exiting" &&
          nt.current === "fade-out" &&
          I.current &&
          I.current.finishHideAnimation();
      },
      [nt],
    ),
    ig = p,
    fo = ue !== "hide" && !!o,
    Tu = !J && fo,
    Mu = ue !== "hide" && ue !== "fade-out",
    ag = m.useCallback(function () {
      var L;
      (L = I.current) === null || L === void 0 || L.requestHide({ isImmediate: !0 });
    }, []);
  CS({ isOpen: fo && Mu, onClose: ag });
  var Lu = function () {
      var re;
      if (n === "mouse" && (re = I.current) !== null && re !== void 0 && re.mousePosition) {
        var It;
        return (It = I.current) === null || It === void 0 ? void 0 : It.mousePosition;
      }
      return ge.current || void 0;
    },
    Xr = jk("tooltip", Tu),
    vo = {
      onMouseOver: at,
      onMouseOut: $t,
      onMouseMove: Vi,
      onMouseDown: De,
      onClick: ke,
      onFocus: Hi,
      onBlur: Wi,
    };
  v && (vo["data-testid"] = "".concat(v, "--container"));
  var Fu = typeof t == "function";
  m.useEffect(
    function () {
      if (!Fu) {
        var L = ge.current;
        if (!(!L || !Xr))
          return (
            L.setAttribute("aria-describedby", Xr),
            function () {
              return L.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Fu, Xr],
  );
  var Nu = Tu
    ? E.createElement(
        "span",
        { "data-testid": v ? "".concat(v, "-hidden") : void 0, hidden: !0, id: Xr },
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
          t(Dr(Dr({}, vo), {}, { "aria-describedby": Xr, ref: Oe })),
          Nu,
        )
      : E.createElement(ig, te({}, vo, { ref: Ue, role: "presentation" }), t, Nu),
    fo
      ? E.createElement(
          Pk,
          { zIndex: Tk },
          E.createElement(pk, { placement: $, referenceElement: Lu(), strategy: M }, function (L) {
            var re = L.ref,
              It = L.style,
              po = L.update,
              ho = L.placement,
              Or = n === "mouse" ? void 0 : Mk[Lk(ho)];
            return E.createElement(
              Th,
              { appear: !0 },
              Mu &&
                E.createElement(
                  VS,
                  {
                    distance: "constant",
                    entranceDirection: Or,
                    exitDirection: Or,
                    onFinish: ng,
                    duration: ue !== "show-immediate" ? "medium" : "none",
                  },
                  function (Qr) {
                    var og = Qr.className;
                    return E.createElement(
                      l,
                      {
                        ref: re,
                        className: "Tooltip ".concat(og),
                        style: Dr(Dr({}, It), q && { pointerEvents: "none" }),
                        truncate: s,
                        placement: $,
                        testId: Lu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: $t,
                        onMouseOver: Gi,
                        shortcut: G,
                      },
                      typeof o == "function" ? o({ update: po }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var Nk = [
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
  di = {
    buttonWrapper:
      "_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke",
    sortIconHiddenWrapper:
      "_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n",
    sortIconVisibleWrapper: "_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66",
    hideIconHeaderWrapper: "_tzy4idpf _18u010v4",
    visibleHeaderWrapper: "_tzy4kb7n _u5f31b66",
  },
  Yf = { headCellContainer: "_1e0c1txw _4cvr1h6o", text: "_11c81o8v _syazazsu _k48pmoej" },
  Zh = function (t) {
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
      h = v === void 0 ? "Sort descending" : v,
      f = t.buttonAriaRoleDescription,
      g = f === void 0 ? "Sort button" : f,
      _ = t.isIconOnlyHeader,
      b = ne(t, Nk),
      y = m.useState(!1),
      O = K(y, 2),
      w = O[0],
      S = O[1],
      x = m.useState(!1),
      T = K(x, 2),
      j = T[0],
      C = T[1],
      M = c === l || u !== void 0,
      z = w || M || j,
      q = z && _,
      V = !_ || z || (_ && !j),
      J = m.useCallback(
        function () {
          C?.(!0);
        },
        [C],
      ),
      G = m.useCallback(
        function () {
          C?.(!1);
        },
        [C],
      ),
      $ = m.useCallback(
        function () {
          S(!0);
        },
        [S],
      ),
      X = m.useCallback(
        function () {
          S(!1);
        },
        [S],
      ),
      N = E.createElement(
        io,
        { xcss: Yf.headCellContainer, onMouseEnter: $, onMouseLeave: X, onFocus: J, onBlur: G },
        E.createElement(
          Fk,
          { content: u === pr ? p : h },
          E.createElement(
            u1,
            { onClick: s, xcss: di.buttonWrapper, "aria-roledescription": g },
            E.createElement(
              ja,
              { xcss: q ? di.hideIconHeaderWrapper : di.visibleHeaderWrapper },
              E.createElement("span", { className: P([Yf.text]) }, r),
            ),
            V &&
              E.createElement(
                ja,
                { xcss: z ? di.sortIconVisibleWrapper : di.sortIconHiddenWrapper },
                u === pr
                  ? E.createElement(SS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(mS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      hS,
      te(
        {
          style: n,
          testId: i && "".concat(i, "--head--cell"),
          ref: typeof a != "string" ? a : null,
        },
        b,
        { isSortable: o, sortOrder: u },
      ),
      o ? N : r,
    );
  },
  Bk = ["isRanking", "refHeight", "refWidth"];
function qk(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, eg() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function eg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (eg = function () {
    return !!e;
  })();
}
var zk = (function (e) {
    function t() {
      return (fe(this, t), qk(this, t, arguments));
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.isRanking;
            n.refHeight;
            var a = n.refWidth,
              o = ne(n, Bk),
              u = cm(i, a);
            return E.createElement(Zh, te({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(E.Component),
  Uk = _S(zk),
  $k = ["cells"],
  Vk = [
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
function Gk(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, tg() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
  );
}
function tg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tg = function () {
    return !!e;
  })();
}
var Hk = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = Gk(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      ze(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Ra(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Ra(n.sortKey, n.head);
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
            var h = d ? Uk : Zh,
              f = a.cells,
              g = ne(a, $k);
            return E.createElement(
              pS,
              te({}, g, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (_, b) {
                  var y = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    w = _.colSpan,
                    S = _.content,
                    x = _.descendingSortTooltip,
                    T = _.isIconOnlyHeader,
                    j = _.isSortable,
                    C = _.key,
                    M = _.shouldTruncate,
                    z = _.testId,
                    q = _.width,
                    V = ne(_, Vk),
                    J = "head-cell-".concat(b),
                    G = function () {
                      (n.setState({ activeSortButtonId: J }), j && c(_)());
                    };
                  return E.createElement(
                    h,
                    te(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: T,
                        isSortable: !!j,
                        isRanking: l,
                        key: C || b,
                        headCellId: J,
                        activeSortButtonId: v,
                        onClick: G,
                        testId: z || p,
                        shouldTruncate: M,
                        sortOrder: C === o ? u : void 0,
                        width: q,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: x,
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
  Wk = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function Kk(e) {
  switch (e) {
    case Aa:
      return pr;
    case pr:
      return Aa;
    default:
      return e;
  }
}
var Yk = function (t) {
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
      h = v === void 0 ? !1 : v,
      f = t.isFixedSize,
      g = f === void 0 ? !1 : f,
      _ = t.rowsPerPage,
      b = _ === void 0 ? 1 / 0 : _,
      y = t.onSetPage,
      O = y === void 0 ? we : y,
      w = t.onSort,
      S = w === void 0 ? we : w,
      x = t.page,
      T = x === void 0 ? 1 : x,
      j = t.emptyView,
      C = t.isRankable,
      M = C === void 0 ? !1 : C,
      z = t.isRankingDisabled,
      q = z === void 0 ? !1 : z,
      V = t.onRankStart,
      J = V === void 0 ? we : V,
      G = t.onRankEnd,
      $ = G === void 0 ? we : G,
      X = t.loadingSpinnerSize,
      N = t.paginationi18n,
      I =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      be = m.useState(!1),
      ae = K(be, 2),
      ue = ae[0],
      le = ae[1],
      ge = m.useRef(null),
      ce = Ri({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      Ue = Ri({
        fn: $,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    m.useEffect(
      function () {
        (Ra(o, n), um(n));
      },
      [o, n],
    );
    var Oe = function (ke) {
        return function () {
          var at = ke.key;
          if (at) {
            if (ce && M && at === o && u === Aa) {
              ce({ key: null, sortOrder: null, item: ke });
              return;
            }
            var $t = at !== o ? pr : Kk(u);
            ce && ce({ key: at, item: ke, sortOrder: $t });
          }
        };
      },
      nt = function (ke, at) {
        O(ke, at);
      },
      pe = function (ke) {
        (le(!0), J(ke));
      },
      $e = function (ke) {
        (le(!1), Ue(ke));
      },
      wr = function () {
        return X || (Mp(a || [], T, b).length > 2 ? Ia : Rm);
      },
      At = function () {
        return h ? E.createElement(Dm, { testId: l }) : j && E.createElement(Tm, { testId: l }, j);
      },
      Se = a && a.length,
      Ee,
      zt = !1;
    (d && Number.isInteger(d) && b && Se && Se <= d
      ? ((Ee = Math.ceil(d / b)), (zt = !0))
      : (Ee = Se && b ? Math.ceil(Se / b) : 0),
      (Ee = Ee < 1 ? 1 : Ee));
    var pt = T > Ee ? Ee : T,
      it = !!Se,
      Ut = wr(),
      Ve = At();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        Kp,
        {
          isLoading: h && it,
          spinnerSize: Ut,
          targetRef: function () {
            return ge.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          Am,
          { isFixedSize: g, "aria-label": p, hasDataRow: it, testId: l, isLoading: h },
          !!r && E.createElement(Im, null, r),
          n &&
            E.createElement(Hk, {
              head: n,
              onSort: Oe,
              sortKey: o,
              sortOrder: u,
              isRanking: ue,
              isRankable: M,
              testId: l,
            }),
          it &&
            E.createElement(Xk, {
              ref: ge,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: b,
              page: pt,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: zt,
              testId: l,
              isRankable: M,
              isRanking: ue,
              onRankStart: pe,
              onRankEnd: $e,
              isRankingDisabled: q || h || !1,
            }),
        ),
      ),
      Ee <= 1
        ? null
        : E.createElement(
            jm,
            { testId: l },
            E.createElement(dS, {
              value: pt,
              onChange: nt,
              total: Ee,
              i18n: I,
              isDisabled: h,
              testId: l,
            }),
          ),
      !it &&
        Ve &&
        E.createElement(Hp, { isLoading: h, spinnerSize: Ia, testId: l, loadingLabel: s }, Ve),
    );
  },
  Jk = m.lazy(function () {
    return Iv(
      () => import("./body-DfQkMGxe.js"),
      __vite__mapDeps([2, 3, 1, 4, 5]),
      import.meta.url,
    );
  }),
  Xk = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ne(t, Wk),
      l = i && !c.sortKey,
      d = m.useState(!1),
      p = K(d, 2),
      v = p[0],
      h = p[1];
    m.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var f = E.createElement(Ym, te({ ref: r }, c));
    return l && v
      ? E.createElement(
          Xm,
          { fallback: f },
          E.createElement(
            m.Suspense,
            { fallback: f },
            E.createElement(
              Jk,
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
function Qk(e, t, r) {
  return (
    (t = Y(t)),
    qe(e, rg() ? Reflect.construct(t, r || [], Y(e).constructor) : t.apply(e, r))
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
var lo = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = Qk(this, t, [].concat(i))),
      R(r, "state", {
        page: r.props.defaultPage,
        sortKey: r.props.defaultSortKey,
        sortOrder: r.props.defaultSortOrder,
        rows: r.props.rows,
      }),
      R(r, "onSetPageHandler", function (o, u) {
        var s = r.props.onSetPage;
        s && (s(o, u), r.setState({ page: o }));
      }),
      R(r, "onSortHandler", function (o, u) {
        var s = o.key,
          c = o.item,
          l = o.sortOrder,
          d = r.props.onSort;
        d && (d({ key: s, item: c, sortOrder: l }, u), r.setState({ sortKey: s, sortOrder: l }));
      }),
      R(r, "onRankEndIfExistsHandler", function (o) {
        r.props.onRankEnd && r.props.onRankEnd(o);
      }),
      R(r, "onRankEndHandler", function (o) {
        var u = o.destination,
          s = r.state,
          c = s.rows,
          l = s.page,
          d = r.props.rowsPerPage;
        if (!u || !c) {
          r.onRankEndIfExistsHandler(o);
          return;
        }
        var p = lm(o, c, l, d);
        (r.setState({ rows: p }), r.onRankEndIfExistsHandler(o));
      }),
      r
    );
  }
  return (
    ze(t, e),
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
            h = s.isLoading,
            f = s.loadingLabel,
            g = s.isFixedSize,
            _ = s.isRankable,
            b = s.isRankingDisabled,
            y = s.rowsPerPage,
            O = s.paginationi18n,
            w = s.onRankStart,
            S = s.onPageRowsUpdate,
            x = s.testId,
            T = s.label;
          return E.createElement(Yk, {
            paginationi18n: O,
            caption: c,
            emptyView: l,
            head: d,
            highlightedRowIndex: p,
            loadingSpinnerSize: v,
            isLoading: h,
            loadingLabel: f,
            isFixedSize: g,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: i,
            rows: u,
            rowsPerPage: y,
            sortKey: a,
            sortOrder: o,
            isRankable: _,
            isRankingDisabled: b,
            onRankEnd: this.onRankEndHandler,
            onRankStart: w,
            onPageRowsUpdate: S,
            testId: x,
            label: T,
          });
        },
      },
    ])
  );
})(E.Component);
R(lo, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: we,
  onSort: we,
  rowsPerPage: 1 / 0,
});
const Zk = (e, t) => {
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
  Du = (e, t) => ({ cells: Zk(e, t) }),
  ex = eo(() => {
    const { usersStore: e } = ro(),
      t = Du(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? k.jsx("div", { children: "SlowQuery is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(lo, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
                    { key: "time", content: n.time },
                    { key: "query", content: n.query },
                    { key: "queryTime", content: n.queryTime },
                    { key: "resultRows", content: n.resultRows },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? k.jsx(k.Fragment, {
                            children: k.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), fu.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : k.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  tx = eo(() => {
    const { usersStore: e } = ro(),
      t = Du(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? k.jsxs("div", { children: ["$", e.planString] })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(lo, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
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
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 200,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  rx = eo(() => {
    const { usersStore: e } = ro(),
      t = Du(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? k.jsx("div", { children: "Query history is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(lo, {
                head: t,
                rows: r.map((n, i) => {
                  const a = [
                    { key: "summaryBeginTime", content: n.summaryBeginTime },
                    { key: "summaryEndTime", content: n.summaryEndTime },
                    { key: "digestText", content: n.digestText },
                    { key: "stmtType", content: n.stmtType },
                    { key: "tableNames", content: n.tableNames },
                    { key: "planHint", content: n.planHint },
                    {
                      key: "plan",
                      content: n.parsedPlan
                        ? k.jsx(k.Fragment, {
                            children: k.jsx("button", {
                              onClick: () => {
                                n.parsedPlan &&
                                  (e.showPlan(n.parsedPlan, n.plan), fu.saveState("PLAN"));
                              },
                              children: "Show Plan",
                            }),
                          })
                        : k.jsx("p", {}),
                    },
                  ];
                  return { key: `row-${i}`, cells: a };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: "large",
                emptyView: k.jsx("div", { children: "Duplicate Table is EMPTY" }),
                isRankable: !0,
              }),
              k.jsx("br", {}),
              k.jsx("br", {}),
            ],
          }),
        });
  }),
  We = (e, t) => {
    Re.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function nx() {
  const { usersStore: e, stateStore: t } = ro();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explain");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explainWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explainAnalyze");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const h = await Re.invoke("explainAnalyzeWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), We("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        await Re.invoke("executeQuery");
      } catch (h) {
        (console.error(h), We("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Re.invoke("executeQueryWith");
      } catch (h) {
        (console.error(h), We("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Re.invoke("optimizeQuery");
      } catch (h) {
        (console.error(h), We("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Re.invoke("optimizeQueryCTE");
      } catch (h) {
        (console.error(h), We("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Re.invoke("dropStats");
      } catch (h) {
        (console.error(h), We("dropStats error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Re.invoke("deOptimizeQuery");
      } catch (h) {
        (console.error(h), We("deoptimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    p = async () => {
      e.loading();
      try {
        const h = await Re.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(h), t.saveState("HISTORY"));
      } catch (h) {
        (console.error(h), We("History error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    v = async () => {
      e.loading();
      try {
        const h = await Re.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(h), t.saveState("SLOW_QUERY"));
      } catch (h) {
        (console.error(h), We("Slowquery error", h.message));
      } finally {
        e.stopLoading();
      }
    };
  switch (t.state) {
    case "ROOT":
      return k.jsxs("div", {
        className: "query-analysis-container",
        children: [
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 1: Initial Query Analysis" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: o, children: "1. Execute SQL" }),
                    k.jsx("button", { onClick: r, children: "2. Explain (optional) " }),
                    k.jsx("button", { onClick: i, children: "3. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 2: Adding Indexes — Better but Not Yet Great" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "SELECT `category`.`name` AS `a_categoryname_name`, `product`.`name` AS `a_productname_name`, `order_item`.`quantity` AS `a_orderitemquantity_quantity` FROM `order_item` LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id` LEFT JOIN `category` ON `product`.`category_id` = `category`.`id` ORDER BY `order_item`.`created_at` ASC LIMIT 10 OFFSET 50000;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: s, children: "4. Add optimization indexes" }),
                    k.jsx("button", { onClick: o, children: "5. Execute SQL" }),
                    k.jsx("button", { onClick: r, children: "6. Explain (optional) " }),
                    k.jsx("button", { onClick: i, children: "7. Explain Analyze" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", {
                children: "Stage 3: Optimizing with WITH Clause — Smarter Pagination",
              }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: u, children: "8. Execute CTE" }),
                    k.jsx("button", { onClick: n, children: "9. Explain CTE (optional)" }),
                    k.jsx("button", { onClick: a, children: "10. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Stage 4: Final Optimization — Goodbye Full Table Scans" }),
              k.jsx("div", {
                className: "query-example",
                children: k.jsx("pre", {
                  children:
                    "WITH withQuery AS ( SELECT id, product_id, product_name, quantity, created_at FROM order_item ORDER BY created_at ASC LIMIT 10 OFFSET 350000 ) SELECT category.name, withQuery.quantity, product.name FROM withQuery LEFT JOIN product ON withQuery.product_id = product.id LEFT JOIN category ON category.id = product.category_id;",
                }),
              }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", {
                      onClick: c,
                      children: "9. Add optimization indexes for CTE",
                    }),
                    k.jsx("button", { onClick: u, children: "10. Execute CTE" }),
                    k.jsx("button", { onClick: n, children: "11. Explain CTE (optional)" }),
                    k.jsx("button", { onClick: a, children: "12. Explain Analyze CTE" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Additional action" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsxs("div", {
                  className: "button-row",
                  children: [
                    k.jsx("button", { onClick: d, children: "Drop indexes(back to Stage 1)" }),
                    k.jsx("button", { onClick: l, children: "DROP STATS from all tables" }),
                  ],
                }),
              }),
            ],
          }),
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Query History Analysis" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsx("button", { onClick: p, children: "Show Query History" }),
              }),
            ],
          }),
          k.jsx("div", { className: "section-spacer" }),
          k.jsxs("section", {
            className: "analysis-section",
            children: [
              k.jsx("h2", { children: "Slow Query Analysis" }),
              k.jsx("div", {
                className: "button-group",
                children: k.jsx("button", { onClick: v, children: "Analyze Slow Queries" }),
              }),
            ],
          }),
        ],
      });
    case "SLOW_QUERY":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(ex, {}),
        ],
      });
    case "HISTORY":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState("ROOT"),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(rx, {}),
        ],
      });
    case "PLAN":
      return k.jsxs("div", {
        className: "analysis-results",
        children: [
          k.jsx("button", {
            className: "back-button",
            onClick: () => t.saveState(t.lastState),
            children: "Back to Analysis",
          }),
          k.jsx("div", { className: "results-spacer" }),
          k.jsx(tx, {}),
        ],
      });
    default:
      return k.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const ix = eo(nx),
  ax = document.getElementById("root"),
  ox = sg.createRoot(ax),
  Jf = () => {
    ox.render(k.jsx(Ip, { ...jp, children: k.jsx(ix, {}) }));
  };
Re.view.theme
  .enable()
  .then(() => {
    Jf();
  })
  .catch((e) => {
    (console.error(e.message), Jf());
  });
export {
  E as R,
  $m as T,
  ze as _,
  ve as a,
  $s as b,
  fe as c,
  qe as d,
  Y as e,
  K as f,
  R as g,
  ne as h,
  ao as i,
  Te as j,
  te as k,
  Ww as l,
  Ft as m,
  Ct as n,
  P as o,
  zm as p,
  cm as q,
  m as r,
  Nm as s,
  _S as w,
};
