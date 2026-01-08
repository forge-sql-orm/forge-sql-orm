const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-Ds7nV9OR.js",
      "./client-core-vendor-Dxn4qry8.js",
      "./body-IDtLYh6Q.js",
      "./react-dom-vendor--YlRhZCI.js",
      "./lodash-vendor-BPQ1tp_f.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { r as yr, a as Fa, c as ug } from "./react-dom-vendor--YlRhZCI.js";
import { g as Xf, r as Yt, a as Xt, b as kt, s as Ve } from "./client-core-vendor-Dxn4qry8.js";
import { r as cg } from "./lodash-vendor-BPQ1tp_f.js";
function lg(e, t) {
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
  tn = {};
var Bu;
function dg() {
  if (Bu) return tn;
  Bu = 1;
  var e = yr(),
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
  return ((tn.Fragment = r), (tn.jsx = o), (tn.jsxs = o), tn);
}
var qu;
function fg() {
  return (qu || ((qu = 1), (go.exports = dg())), go.exports);
}
var k = fg(),
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
var _a = function () {
  return (
    (_a =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    _a.apply(this, arguments)
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
function ba(e) {
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
function qr(e) {
  return this instanceof qr ? ((this.v = e), this) : new qr(e);
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
    v.value instanceof qr ? Promise.resolve(v.value.v).then(l, d) : p(a[0][2], v);
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
          return (r = !r) ? { value: qr(e[i](o)), done: !1 } : a ? a(o) : o;
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
    : ((e = typeof ba == "function" ? ba(e) : e[Symbol.iterator]()),
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
var vg = Object.create
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
  return (vg(t, e), t);
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
var pg =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return ((n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n);
      };
function Sv(e) {
  function t(a) {
    ((e.error = e.hasError ? new pg(a, e.error, "An error was suppressed during disposal.") : a),
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
const hg = {
    __extends: Qf,
    __assign: _a,
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
    __values: ba,
    __read: ru,
    __spread: lv,
    __spreadArrays: dv,
    __spreadArray: fv,
    __await: qr,
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
  gg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Ov,
        get __assign() {
          return _a;
        },
        __asyncDelegator: pv,
        __asyncGenerator: vv,
        __asyncValues: hv,
        __await: qr,
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
        __values: ba,
        default: hg,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  tt = Xf(gg);
var rn = {},
  zu;
function _g() {
  return (
    zu ||
      ((zu = 1),
      Object.defineProperty(rn, "__esModule", { value: !0 }),
      (rn.NavigationTarget = void 0),
      (rn.NavigationTarget = {
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
    rn
  );
}
var bo = {},
  yo = {},
  nn = {},
  an = {},
  Uu;
function _e() {
  if (Uu) return an;
  ((Uu = 1), Object.defineProperty(an, "__esModule", { value: !0 }), (an.BridgeAPIError = void 0));
  class e extends Error {}
  return ((an.BridgeAPIError = e), an);
}
var $u;
function ue() {
  if ($u) return nn;
  (($u = 1), Object.defineProperty(nn, "__esModule", { value: !0 }), (nn.getCallBridge = void 0));
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
  return ((nn.getCallBridge = r), nn);
}
var on = {},
  Vu;
function Na() {
  if (Vu) return on;
  ((Vu = 1), Object.defineProperty(on, "__esModule", { value: !0 }), (on.withRateLimiter = void 0));
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
  return ((on.withRateLimiter = t), on);
}
var Gu;
function bg() {
  return (
    Gu ||
      ((Gu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const t = ue(),
          r = _e(),
          n = Na(),
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
function Li() {
  return (
    Hu ||
      ((Hu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), tt.__exportStar(bg(), e));
      })(bo)),
    bo
  );
}
var mo = {},
  sn = {},
  wo = {},
  Wu;
function kv() {
  return (
    Wu ||
      ((Wu = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const t = ue(),
          r = _e(),
          n = Na(),
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
function yg() {
  if (Ku) return sn;
  ((Ku = 1), Object.defineProperty(sn, "__esModule", { value: !0 }), (sn.invokeRemote = void 0));
  const e = kv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(r);
  return ((sn.invokeRemote = t), sn);
}
var un = {},
  Yu;
function mg() {
  if (Yu) return un;
  ((Yu = 1), Object.defineProperty(un, "__esModule", { value: !0 }), (un.invokeService = void 0));
  const e = kv(),
    t = (r) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(r);
  return ((un.invokeService = t), un);
}
var Ju;
function wg() {
  return (
    Ju ||
      ((Ju = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = tt;
        (t.__exportStar(yg(), e), t.__exportStar(mg(), e));
      })(mo)),
    mo
  );
}
var Oo = {},
  cn = {},
  ln = {},
  Xu;
function Og() {
  if (Xu) return ln;
  ((Xu = 1), Object.defineProperty(ln, "__esModule", { value: !0 }), (ln.submit = void 0));
  const e = ue(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("submit", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((ln.submit = n), ln);
}
var dn = {},
  Qu;
function Sg() {
  if (Qu) return dn;
  ((Qu = 1), Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.close = void 0));
  const e = ue(),
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
  return ((dn.close = n), dn);
}
var fn = {},
  Zu;
function Eg() {
  if (Zu) return fn;
  ((Zu = 1), Object.defineProperty(fn, "__esModule", { value: !0 }), (fn.open = void 0));
  const e = ue(),
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
  return ((fn.open = n), fn);
}
var vn = {},
  ec;
function kg() {
  if (ec) return vn;
  ((ec = 1), Object.defineProperty(vn, "__esModule", { value: !0 }), (vn.refresh = void 0));
  const e = ue(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      if ((await r("refresh", i)) === !1)
        throw new t.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((vn.refresh = n), vn);
}
var pn = {},
  tc;
function xg() {
  if (tc) return pn;
  ((tc = 1), Object.defineProperty(pn, "__esModule", { value: !0 }), (pn.createHistory = void 0));
  const t = (0, ue().getCallBridge)(),
    r = async () => {
      const n = await t("createHistory");
      return (
        n.listen((i) => {
          n.location = i;
        }),
        n
      );
    };
  return ((pn.createHistory = r), pn);
}
var hn = {},
  So = {},
  It = {},
  rc;
function xv() {
  return (
    rc ||
      ((rc = 1),
      Object.defineProperty(It, "__esModule", { value: !0 }),
      (It.FORGE_SUPPORTED_LOCALE_CODES =
        It.I18N_BUNDLE_FOLDER_NAME =
        It.I18N_INFO_FILE_NAME =
          void 0),
      (It.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (It.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (It.FORGE_SUPPORTED_LOCALE_CODES = [
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
    It
  );
}
var nr = {},
  nc;
function Rg() {
  if (nc) return nr;
  ((nc = 1),
    Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.TranslationsGetter = nr.TranslationGetterError = void 0));
  const e = (n, i) => {
    n.includes(i) || n.push(i);
  };
  class t extends Error {
    constructor(i) {
      (super(i), (this.name = "TranslationGetterError"));
    }
  }
  nr.TranslationGetterError = t;
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
  return ((nr.TranslationsGetter = r), nr);
}
var gn = {},
  Eo = {},
  ic;
function Rv() {
  return (
    ic ||
      ((ic = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const r = tt.__importDefault(cg()),
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
function Pg() {
  if (ac) return gn;
  ((ac = 1), Object.defineProperty(gn, "__esModule", { value: !0 }), (gn.Translator = void 0));
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
  return ((gn.Translator = t), gn);
}
var _n = {},
  oc;
function Cg() {
  if (oc) return _n;
  ((oc = 1), Object.defineProperty(_n, "__esModule", { value: !0 }), (_n.ensureLocale = void 0));
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
  return ((_n.ensureLocale = i), _n);
}
var ko = {},
  sc;
function Ag() {
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
function Ig() {
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
        const t = tt;
        (t.__exportStar(xv(), e),
          t.__exportStar(Rg(), e),
          t.__exportStar(Pg(), e),
          t.__exportStar(Cg(), e));
        var r = Rv();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return r.getTranslationValue;
          },
        });
        var n = Ag();
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
          t.__exportStar(Ig(), e));
      })(So)),
    So
  );
}
var lc;
function jg() {
  if (lc) return hn;
  ((lc = 1), Object.defineProperty(hn, "__esModule", { value: !0 }), (hn.getContext = void 0));
  const e = ue(),
    t = Pv(),
    r = (0, e.getCallBridge)(),
    n = async () => {
      var i;
      const a = await r("getContext"),
        o = a?.locale;
      return (o && (a.locale = (i = (0, t.ensureLocale)(o)) !== null && i !== void 0 ? i : o), a);
    };
  return ((hn.getContext = n), hn);
}
var bn = {},
  dc;
function Dg() {
  if (dc) return bn;
  ((dc = 1),
    Object.defineProperty(bn, "__esModule", { value: !0 }),
    (bn.changeWindowTitle = void 0));
  const e = ue(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = async (i) => {
      try {
        await r("changeWindowTitle", i);
      } catch {
        throw new t.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((bn.changeWindowTitle = n), bn);
}
var yn = {},
  fc;
function Tg() {
  if (fc) return yn;
  ((fc = 1), Object.defineProperty(yn, "__esModule", { value: !0 }), (yn.theme = void 0));
  const t = (0, ue().getCallBridge)();
  return ((yn.theme = { enable: () => t("enableTheming") }), yn);
}
var mn = {},
  wn = {},
  Ro = {},
  ir = {},
  vc;
function Cv() {
  if (vc) return ir;
  ((vc = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.blobToBase64 = ir.base64ToBlob = void 0));
  const e = (r, n) => {
    if (!r) return null;
    const i = r.includes(";base64") ? r.split(",")[1] : r,
      a = atob(i),
      o = new Array(a.length);
    for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
    const u = new Uint8Array(o);
    return new Blob([u], { type: n });
  };
  ir.base64ToBlob = e;
  const t = (r) =>
    new Promise((n, i) => {
      const a = new FileReader();
      ((a.onloadend = () => {
        n(a.result);
      }),
        (a.onerror = i),
        a.readAsDataURL(r));
    });
  return ((ir.blobToBase64 = t), ir);
}
var pc;
function Mg() {
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
  if (hc) return wn;
  ((hc = 1), Object.defineProperty(wn, "__esModule", { value: !0 }), (wn.events = void 0));
  const e = ue(),
    t = Mg(),
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
  return ((wn.events = { emit: n, on: i }), wn);
}
var gc;
function Fg() {
  if (gc) return mn;
  ((gc = 1), Object.defineProperty(mn, "__esModule", { value: !0 }), (mn.emitReadyEvent = void 0));
  const e = Av(),
    t = Mv(),
    r = ue(),
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
const Lg = "modulepreload",
  Ng = function (e, t) {
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
          if (((l = Ng(l, n)), l in _c)) return;
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
var On = {},
  Po = {},
  Sn = {},
  Yi = {},
  bc;
function jv() {
  if (bc) return Yi;
  ((bc = 1), Object.defineProperty(Yi, "__esModule", { value: !0 }), (Yi.default = r));
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
  return Yi;
}
var kr = {},
  En = {},
  kn = {},
  yc;
function Bg() {
  if (yc) return kn;
  ((yc = 1), Object.defineProperty(kn, "__esModule", { value: !0 }), (kn.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((kn.default = e), kn);
}
var mc;
function Ba() {
  if (mc) return En;
  ((mc = 1), Object.defineProperty(En, "__esModule", { value: !0 }), (En.default = void 0));
  var e = t(Bg());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    return typeof i == "string" && e.default.test(i);
  }
  var n = r;
  return ((En.default = n), En);
}
var wc;
function qa() {
  if (wc) return kr;
  ((wc = 1),
    Object.defineProperty(kr, "__esModule", { value: !0 }),
    (kr.default = void 0),
    (kr.unsafeStringify = n));
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
  return ((kr.default = a), kr);
}
var Oc;
function qg() {
  if (Oc) return Sn;
  ((Oc = 1), Object.defineProperty(Sn, "__esModule", { value: !0 }), (Sn.default = void 0));
  var e = r(jv()),
    t = qa();
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
  return ((Sn.default = s), Sn);
}
var xn = {},
  Vt = {},
  Rn = {},
  Sc;
function Dv() {
  if (Sc) return Rn;
  ((Sc = 1), Object.defineProperty(Rn, "__esModule", { value: !0 }), (Rn.default = void 0));
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
  return ((Rn.default = n), Rn);
}
var Ec;
function Tv() {
  if (Ec) return Vt;
  ((Ec = 1),
    Object.defineProperty(Vt, "__esModule", { value: !0 }),
    (Vt.URL = Vt.DNS = void 0),
    (Vt.default = o));
  var e = qa(),
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
var Pn = {},
  kc;
function zg() {
  if (kc) return Pn;
  ((kc = 1), Object.defineProperty(Pn, "__esModule", { value: !0 }), (Pn.default = void 0));
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
  return ((Pn.default = p), Pn);
}
var xc;
function Ug() {
  if (xc) return xn;
  ((xc = 1), Object.defineProperty(xn, "__esModule", { value: !0 }), (xn.default = void 0));
  var e = r(Tv()),
    t = r(zg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v3", 48, t.default);
  return ((xn.default = i), xn);
}
var Cn = {},
  An = {},
  Rc;
function $g() {
  if (Rc) return An;
  ((Rc = 1), Object.defineProperty(An, "__esModule", { value: !0 }), (An.default = void 0));
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((An.default = t), An);
}
var Pc;
function Vg() {
  if (Pc) return Cn;
  ((Pc = 1), Object.defineProperty(Cn, "__esModule", { value: !0 }), (Cn.default = void 0));
  var e = n($g()),
    t = n(jv()),
    r = qa();
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
  return ((Cn.default = a), Cn);
}
var In = {},
  jn = {},
  Cc;
function Gg() {
  if (Cc) return jn;
  ((Cc = 1), Object.defineProperty(jn, "__esModule", { value: !0 }), (jn.default = void 0));
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
  return ((jn.default = n), jn);
}
var Ac;
function Hg() {
  if (Ac) return In;
  ((Ac = 1), Object.defineProperty(In, "__esModule", { value: !0 }), (In.default = void 0));
  var e = r(Tv()),
    t = r(Gg());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = (0, e.default)("v5", 80, t.default);
  return ((In.default = i), In);
}
var Dn = {},
  Ic;
function Wg() {
  if (Ic) return Dn;
  ((Ic = 1), Object.defineProperty(Dn, "__esModule", { value: !0 }), (Dn.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Dn.default = e), Dn);
}
var Tn = {},
  jc;
function Kg() {
  if (jc) return Tn;
  ((jc = 1), Object.defineProperty(Tn, "__esModule", { value: !0 }), (Tn.default = void 0));
  var e = t(Ba());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e.default)(i)) throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var n = r;
  return ((Tn.default = n), Tn);
}
var Dc;
function Yg() {
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
        var t = l(qg()),
          r = l(Ug()),
          n = l(Vg()),
          i = l(Hg()),
          a = l(Wg()),
          o = l(Kg()),
          u = l(Ba()),
          s = l(qa()),
          c = l(Dv());
        function l(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(Po)),
    Po
  );
}
var Tc;
function Jg() {
  if (Tc) return On;
  ((Tc = 1),
    Object.defineProperty(On, "__esModule", { value: !0 }),
    (On.createAdfRendererIframeProps = void 0));
  const e = Yg(),
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
  return ((On.createAdfRendererIframeProps = t), On);
}
var Mc;
function Mv() {
  if (Mc) return cn;
  ((Mc = 1), Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.view = void 0));
  const e = Og(),
    t = Sg(),
    r = Eg(),
    n = kg(),
    i = xg(),
    a = jg(),
    o = Dg(),
    u = Tg(),
    s = Fg(),
    c = Jg();
  return (
    (cn.view = {
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
    cn
  );
}
var Fc;
function nu() {
  return (
    Fc ||
      ((Fc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), tt.__exportStar(Mv(), e));
      })(Oo)),
    Oo
  );
}
var Co = {},
  Mn = {},
  Lc;
function Xg() {
  if (Lc) return Mn;
  ((Lc = 1), Object.defineProperty(Mn, "__esModule", { value: !0 }), (Mn.router = void 0));
  const t = (0, ue().getCallBridge)(),
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
  return ((Mn.router = { getUrl: r, navigate: n, open: i, reload: a }), Mn);
}
var Nc;
function Qg() {
  return (
    Nc ||
      ((Nc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), tt.__exportStar(Xg(), e));
      })(Co)),
    Co
  );
}
var Ao = {},
  Fn = {},
  Bc;
function Zg() {
  if (Bc) return Fn;
  ((Bc = 1), Object.defineProperty(Fn, "__esModule", { value: !0 }), (Fn.Modal = void 0));
  const e = ue(),
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
  return ((Fn.Modal = i), Fn);
}
var qc;
function e_() {
  return (
    qc ||
      ((qc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), tt.__exportStar(Zg(), e));
      })(Ao)),
    Ao
  );
}
var it = {},
  ar = {},
  zc;
function t_() {
  if (zc) return ar;
  ((zc = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.productFetchApi = ar.remoteFetchApi = void 0));
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
  ar.remoteFetchApi = i;
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
  return ((ar.productFetchApi = a), ar);
}
var Uc;
function r_() {
  if (Uc) return it;
  Uc = 1;
  var e;
  (Object.defineProperty(it, "__esModule", { value: !0 }),
    (it.requestRemote = it.requestBitbucket = it.requestJira = it.requestConfluence = void 0));
  const t = ue(),
    r = t_();
  return (
    (e = (0, r.productFetchApi)((0, t.getCallBridge)())),
    (it.requestConfluence = e.requestConfluence),
    (it.requestJira = e.requestJira),
    (it.requestBitbucket = e.requestBitbucket),
    (it.requestRemote = (0, r.remoteFetchApi)((0, t.getCallBridge)()).requestRemote),
    it
  );
}
var Io = {},
  Ln = {},
  $c;
function n_() {
  if ($c) return Ln;
  (($c = 1), Object.defineProperty(Ln, "__esModule", { value: !0 }), (Ln.showFlag = void 0));
  const e = ue(),
    t = _e(),
    r = (0, e.getCallBridge)(),
    n = (i) => {
      var a;
      if (!i.id) throw new t.BridgeAPIError('"id" must be defined in flag options');
      const o = r("showFlag", { ...i, type: (a = i.type) !== null && a !== void 0 ? a : "info" });
      return { close: async () => (await o, r("closeFlag", { id: i.id })) };
    };
  return ((Ln.showFlag = n), Ln);
}
var Vc;
function i_() {
  return (
    Vc ||
      ((Vc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var t = n_();
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
function a_() {
  return (
    Gc ||
      ((Gc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), tt.__exportStar(Av(), e));
      })(jo)),
    jo
  );
}
var Do = {},
  Nn = {},
  Hc;
function o_() {
  if (Hc) return Nn;
  ((Hc = 1), Object.defineProperty(Nn, "__esModule", { value: !0 }), (Nn.realtime = void 0));
  const t = (0, ue().getCallBridge)(),
    r = (o, u, s) => t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s }),
    n = (o, u, s) => t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s }),
    i = (o, u, s) =>
      t("publishRealtimeChannel", { channelName: o, eventPayload: u, options: s, isGlobal: !0 }),
    a = (o, u, s) =>
      t("subscribeRealtimeChannel", { channelName: o, onEvent: u, options: s, isGlobal: !0 });
  return ((Nn.realtime = { publish: r, subscribe: n, publishGlobal: i, subscribeGlobal: a }), Nn);
}
var To = {},
  Wc;
function s_() {
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
function u_() {
  return (
    Kc ||
      ((Kc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var t = o_();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return t.realtime;
          },
        });
        var r = s_();
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
  Bn = {},
  Fo = {},
  Yc;
function c_() {
  return (
    Yc ||
      ((Yc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const t = ue(),
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
      })(Fo)),
    Fo
  );
}
var Jc;
function l_() {
  if (Jc) return Bn;
  ((Jc = 1), Object.defineProperty(Bn, "__esModule", { value: !0 }), (Bn.rovo = void 0));
  const e = c_();
  return ((Bn.rovo = { open: e.open }), Bn);
}
var Xc;
function d_() {
  return (
    Xc ||
      ((Xc = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), tt.__exportStar(l_(), e));
      })(Mo)),
    Mo
  );
}
var jt = {},
  Qc;
function f_() {
  if (Qc) return jt;
  ((Qc = 1),
    Object.defineProperty(jt, "__esModule", { value: !0 }),
    (jt.createTranslationFunction = jt.getTranslations = jt.resetTranslationsCache = void 0));
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
  jt.resetTranslationsCache = i;
  const a = async (u = null, s = { fallback: !0 }) => {
    let c = u;
    return (c || (c = (await t.view.getContext()).locale), await n.getTranslations(c, s));
  };
  jt.getTranslations = a;
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
  return ((jt.createTranslationFunction = o), jt);
}
var Lo = {},
  qn = {},
  Zc;
function v_() {
  if (Zc) return qn;
  ((Zc = 1), Object.defineProperty(qn, "__esModule", { value: !0 }), (qn.permissions = void 0));
  const t = (0, ue().getCallBridge)(),
    r = async (s) => t("__permission__egressGet", s),
    n = async (s) => t("__permission__egressSet", s),
    i = async (s) => t("__permission__egressDeleteDomain", s),
    a = async (s) => t("__permission__egressDeleteGroup", s),
    o = async (s) => t("__permission__remoteGet", s),
    u = async (s) => t("__permission__remoteSet", s);
  return (
    (qn.permissions = {
      egress: { get: r, set: n, deleteDomain: i, deleteGroup: a },
      remote: { get: o, set: u },
    }),
    qn
  );
}
var el;
function p_() {
  return (
    el ||
      ((el = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), tt.__exportStar(v_(), e));
      })(Lo)),
    Lo
  );
}
var No = {},
  Bo = {},
  qo = {},
  zn = {},
  Un = {},
  tl;
function Fv() {
  return (
    tl ||
      ((tl = 1),
      Object.defineProperty(Un, "__esModule", { value: !0 }),
      (Un.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Un.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Un
  );
}
var rl;
function za() {
  if (rl) return zn;
  ((rl = 1),
    Object.defineProperty(zn, "__esModule", { value: !0 }),
    (zn.checkRestrictedEnvironment = void 0));
  const e = _e(),
    t = nu(),
    r = Fv(),
    n = async () => {
      const { environmentType: i } = await t.view.getContext();
      if (i === "PRODUCTION")
        throw new e.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((zn.checkRestrictedEnvironment = n), zn);
}
var nl;
function h_() {
  return (
    nl ||
      ((nl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const t = Li(),
          r = _e(),
          n = za(),
          a = (0, ue().getCallBridge)(),
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
var $n = {},
  il;
function g_() {
  if (il) return $n;
  ((il = 1), Object.defineProperty($n, "__esModule", { value: !0 }), ($n.deleteObjects = void 0));
  const e = Li(),
    t = _e(),
    r = za(),
    i = (0, ue().getCallBridge)(),
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
  return (($n.deleteObjects = a), $n);
}
var Vn = {},
  al;
function __() {
  if (al) return Vn;
  ((al = 1), Object.defineProperty(Vn, "__esModule", { value: !0 }), (Vn.download = void 0));
  const e = Li(),
    t = _e(),
    r = za(),
    i = (0, ue().getCallBridge)(),
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
  return ((Vn.download = a), Vn);
}
var Gn = {},
  ol;
function b_() {
  if (ol) return Gn;
  ((ol = 1), Object.defineProperty(Gn, "__esModule", { value: !0 }), (Gn.getMetadata = void 0));
  const e = Li(),
    t = _e(),
    r = za(),
    i = (0, ue().getCallBridge)(),
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
  return ((Gn.getMetadata = a), Gn);
}
var sl;
function y_() {
  return (
    sl ||
      ((sl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const t = h_();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return t.createUploadPromises;
          },
        });
        const r = g_(),
          n = __(),
          i = b_();
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
function m_() {
  return (
    ul ||
      ((ul = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const t = tt;
        (t.__exportStar(y_(), e), t.__exportStar(Fv(), e));
      })(No)),
    No
  );
}
var zo = {},
  Hn = {},
  or = {},
  xr = {},
  Ji = {},
  cl;
function w_() {
  if (cl) return Ji;
  ((cl = 1), Object.defineProperty(Ji, "__esModule", { value: !0 }));
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
  return ((Ji.default = t), Ji);
}
var Rr = {},
  Wn = {},
  ll;
function O_() {
  if (ll) return Wn;
  ((ll = 1),
    Object.defineProperty(Wn, "__esModule", { value: !0 }),
    (Wn._resolveDeltasResponse = void 0));
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
  Wn._resolveDeltasResponse = r;
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
  return Wn;
}
var dl;
function Lv() {
  if (dl) return Rr;
  dl = 1;
  var e =
    (Rr && Rr.__awaiter) ||
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
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  const t = Yt(),
    r = O_();
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
  return ((Rr.default = n), Rr);
}
var Kn = {},
  fl;
function S_() {
  if (fl) return Kn;
  ((fl = 1),
    Object.defineProperty(Kn, "__esModule", { value: !0 }),
    (Kn._makeParamStoreGetter = void 0));
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
  return ((Kn._makeParamStoreGetter = c), Kn);
}
var sr = {},
  vl;
function E_() {
  if (vl) return sr;
  vl = 1;
  var e =
    (sr && sr.__awaiter) ||
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
  (Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.StatsigEvaluationsDataAdapter = void 0));
  const t = Yt(),
    r = Lv();
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
  return ((sr.StatsigEvaluationsDataAdapter = n), sr);
}
var pl;
function k_() {
  if (pl) return xr;
  pl = 1;
  var e =
    (xr && xr.__awaiter) ||
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
  Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = Yt(),
    r = w_(),
    n = Lv(),
    i = S_(),
    a = E_();
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
  return ((xr.default = o), xr);
}
var hl;
function x_() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        var t =
            (or && or.__createBinding) ||
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
            (or && or.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = Yt(),
          i = k_();
        ((e.StatsigClient = i.default), r(Yt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(or)),
    or
  );
}
var Yn = {},
  Jn = {},
  gl;
function R_() {
  if (gl) return Jn;
  ((gl = 1),
    Object.defineProperty(Jn, "__esModule", { value: !0 }),
    (Jn.initFeatureFlags = void 0));
  const e = ue(),
    t = _e(),
    r = Na(),
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
var _l;
function P_() {
  if (_l) return Yn;
  ((_l = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.ForgeDataAdapter = void 0));
  const e = R_();
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
  return ((Yn.ForgeDataAdapter = t), Yn);
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
var Xn = {},
  yl;
function C_() {
  if (yl) return Xn;
  ((yl = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.trackFeatureFlagEvent = void 0));
  const e = ue(),
    t = _e(),
    r = Nv(),
    n = Na(),
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
    (Xn.trackFeatureFlagEvent = (0, n.withRateLimiter)(
      s,
      i,
      a,
      `Feature flags calls are rate limited at ${i}req/${a / 1e3}s`,
    )),
    Xn
  );
}
var ml;
function A_() {
  if (ml) return Hn;
  ((ml = 1),
    Object.defineProperty(Hn, "__esModule", { value: !0 }),
    (Hn.ForgeFeatureFlags = void 0));
  const e = x_(),
    t = P_(),
    r = Nv(),
    n = C_();
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
  return ((Hn.ForgeFeatureFlags = i), Hn);
}
var wl;
function I_() {
  return (
    wl ||
      ((wl = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var t = A_();
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
function j_() {
  return (
    Ol ||
      ((Ol = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const t = tt;
        var r = _g();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return r.NavigationTarget;
          },
        }),
          t.__exportStar(Li(), e),
          t.__exportStar(wg(), e),
          t.__exportStar(nu(), e),
          t.__exportStar(Qg(), e),
          t.__exportStar(e_(), e),
          t.__exportStar(r_(), e),
          t.__exportStar(i_(), e),
          t.__exportStar(a_(), e),
          t.__exportStar(u_(), e),
          t.__exportStar(d_(), e),
          (e.i18n = t.__importStar(f_())),
          t.__exportStar(p_(), e),
          t.__exportStar(m_(), e),
          t.__exportStar(I_(), e));
      })(_o)),
    _o
  );
}
var Pe = j_();
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
var D_ = {};
function Ua() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : D_;
}
var Bv = Object.assign,
  ya = Object.getOwnPropertyDescriptor,
  mt = Object.defineProperty,
  $a = Object.prototype,
  Es = [];
Object.freeze(Es);
var qv = {};
Object.freeze(qv);
var T_ = typeof Proxy < "u",
  M_ = Object.toString();
function zv() {
  T_ || W("Proxy not available");
}
function Uv(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var Fr = function () {};
function ct(e) {
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
function Va(e) {
  return e !== null && typeof e == "object";
}
function Jt(e) {
  if (!Va(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === M_;
}
function $v(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Ga(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function Vv(e, t, r) {
  mt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function mr(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Va(n) && n[r] === !0;
    }
  );
}
function Kr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function F_(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function Tt(e) {
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
          return $a.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var Ha =
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
function Lt(e, t) {
  return $a.hasOwnProperty.call(e, t);
}
var N_ =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      Ha(t).forEach(function (n) {
        r[n] = ya(t, n);
      }),
      r
    );
  };
function Fe(e, t) {
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
function B_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, z_(n.key), n));
  }
}
function Yr(e, t, r) {
  return (t && B_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Lr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = U_(e)) || t) {
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
function q_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function z_(e) {
  var t = q_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function U_(e, t) {
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
    if (Bi(n)) return e.decorate_20223_(r, n);
    Ni(r, n, e);
  }
  return Object.assign(t, e);
}
function Ni(e, t, r) {
  (Lt(e, yt) || Ga(e, yt, pr({}, e[yt])), Y_(r) || (e[yt][t] = r));
}
function $_(e) {
  return (Lt(e, yt) || Ga(e, yt, pr({}, e[yt])), e[yt]);
}
function Bi(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var L = Symbol("mobx administration"),
  Qt = (function () {
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
        return cp(this);
      }),
      (t.reportChanged = function () {
        (Ye(), lp(this), Je());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Yr(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Fe(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Fe(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Fe(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var iu = mr("Atom", Qt);
function Kv(e, t, r) {
  (t === void 0 && (t = Fr), r === void 0 && (r = Fr));
  var n = new Qt(e);
  return (t !== Fr && ey(n, t), r !== Fr && hp(n, r), n);
}
function V_(e, t) {
  return Rp(e, t);
}
function G_(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var ma = { structural: V_, default: G_ };
function hr(e, t, r) {
  return yp(e)
    ? e
    : Array.isArray(e)
      ? se.array(e, { name: r })
      : Jt(e)
        ? se.object(e, void 0, { name: r })
        : Kr(e)
          ? se.map(e, { name: r })
          : Tt(e)
            ? se.set(e, { name: r })
            : typeof e == "function" && !zr(e) && !xi(e)
              ? $v(e)
                ? Ur(e)
                : ki(r, e)
              : e;
}
function H_(e, t, r) {
  if (e == null || eo(e) || Za(e) || Or(e) || bt(e)) return e;
  if (Array.isArray(e)) return se.array(e, { name: r, deep: !1 });
  if (Jt(e)) return se.object(e, void 0, { name: r, deep: !1 });
  if (Kr(e)) return se.map(e, { name: r, deep: !1 });
  if (Tt(e)) return se.set(e, { name: r, deep: !1 });
}
function Wa(e) {
  return e;
}
function W_(e, t) {
  return Rp(e, t) ? t : e;
}
var K_ = "override";
function Y_(e) {
  return e.annotationType_ === K_;
}
function qi(e, t) {
  return { annotationType_: e, options_: t, make_: J_, extend_: X_, decorate_20223_: Q_ };
}
function J_(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound) return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (zr(r.value)) return 1;
  var a = Yv(e, this, t, r, !1);
  return (mt(n, t, a), 2);
}
function X_(e, t, r, n) {
  var i = Yv(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function Q_(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    a = this,
    o = function (c) {
      var l, d, p, v;
      return gr(
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
        zr(l) || (l = o(l)),
        (c = a.options_) != null && c.bound && ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var u;
    return (
      zr(e) || (e = o(e)),
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
function Z_(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Yv(e, t, r, n, i) {
  var a, o, u, s, c, l, d;
  (i === void 0 && (i = A.safeDescriptors), Z_(e, t, r, n));
  var p = n.value;
  if ((a = t.options_) != null && a.bound) {
    var v;
    p = p.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return {
    value: gr(
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
  return { annotationType_: e, options_: t, make_: eb, extend_: tb, decorate_20223_: rb };
}
function eb(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!Lt(e.target_, t) || !xi(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (xi(r.value)) return 1;
  var a = Xv(e, this, t, r, !1, !1);
  return (mt(n, t, a), 2);
}
function tb(e, t, r, n) {
  var i,
    a = Xv(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, a, n);
}
function rb(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    xi(e) || (e = Ur(e)),
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
function nb(e, t, r, n) {
  (t.annotationType_, n.value);
}
function Xv(e, t, r, n, i, a) {
  (a === void 0 && (a = A.safeDescriptors), nb(e, t, r, n));
  var o = n.value;
  if ((xi(o) || (o = Ur(o)), i)) {
    var u;
    ((o = o.bind((u = e.proxy_) != null ? u : e.target_)), (o.isMobXFlow = !0));
  }
  return { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a };
}
function au(e, t) {
  return { annotationType_: e, options_: t, make_: ib, extend_: ab, decorate_20223_: ob };
}
function ib(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function ab(e, t, r, n) {
  return (
    sb(e, this, t, r),
    e.defineComputedProperty_(t, pr({}, this.options_, { get: r.get, set: r.set }), n)
  );
}
function ob(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var a = Jr(this)[L],
        o = pr({}, r.options_, { get: e, context: this });
      (o.name || (o.name = "ObservableObject." + n.toString()), a.values_.set(n, new lt(o)));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function sb(e, t, r, n) {
  (t.annotationType_, n.get);
}
function Ka(e, t) {
  return { annotationType_: e, options_: t, make_: ub, extend_: cb, decorate_20223_: lb };
}
function ub(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function cb(e, t, r, n) {
  var i, a;
  return (
    db(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (a = this.options_) == null ? void 0 : a.enhancer) != null ? i : hr,
      n,
    )
  );
}
function lb(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(u, s) {
    var c,
      l,
      d = Jr(u)[L],
      p = new dr(
        s,
        (c = (l = r.options_) == null ? void 0 : l.enhancer) != null ? c : hr,
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
function db(e, t, r, n) {
  t.annotationType_;
}
var fb = "true",
  vb = Qv();
function Qv(e) {
  return { annotationType_: fb, options_: e, make_: pb, extend_: hb, decorate_20223_: gb };
}
function pb(e, t, r, n) {
  var i, a;
  if (r.get) return Ya.make_(e, t, r, n);
  if (r.set) {
    var o = zr(r.set) ? r.set : gr(t.toString(), r.set);
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
        c = (s = this.options_) != null && s.autoBind ? Ur.bound : Ur;
      return c.make_(e, t, r, n);
    }
    var l = (u = this.options_) != null && u.autoBind ? ki.bound : ki;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? se.ref : se;
  if (typeof r.value == "function" && (a = this.options_) != null && a.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return d.make_(e, t, r, n);
}
function hb(e, t, r, n) {
  var i, a;
  if (r.get) return Ya.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      { configurable: A.safeDescriptors ? e.isPlainObject_ : !0, set: gr(t.toString(), r.set) },
      n,
    );
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var u = ((a = this.options_) == null ? void 0 : a.deep) === !1 ? se.ref : se;
  return u.extend_(e, t, r, n);
}
function gb(e, t) {
  W("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var _b = "observable",
  bb = "observable.ref",
  yb = "observable.shallow",
  mb = "observable.struct",
  Zv = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Zv);
function Xi(e) {
  return e || Zv;
}
var xs = Ka(_b),
  wb = Ka(bb, { enhancer: Wa }),
  Ob = Ka(yb, { enhancer: H_ }),
  Sb = Ka(mb, { enhancer: W_ }),
  ep = wt(xs);
function Qi(e) {
  return e.deep === !0 ? hr : e.deep === !1 ? Wa : kb(e.defaultDecorator);
}
function Eb(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Qv(e)) : void 0;
}
function kb(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : hr;
}
function tp(e, t, r) {
  if (Bi(t)) return xs.decorate_20223_(e, t);
  if (vr(t)) {
    Ni(e, t, xs);
    return;
  }
  return yp(e)
    ? e
    : Jt(e)
      ? se.object(e, t, r)
      : Array.isArray(e)
        ? se.array(e, t)
        : Kr(e)
          ? se.map(e, t)
          : Tt(e)
            ? se.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : se.box(e, t);
}
Bv(tp, ep);
var xb = {
    box: function (t, r) {
      var n = Xi(r);
      return new dr(t, Qi(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Xi(r);
      return (A.useProxies === !1 || n.proxy === !1 ? Ey : py)(t, Qi(n), n.name);
    },
    map: function (t, r) {
      var n = Xi(r);
      return new wp(t, Qi(n), n.name);
    },
    set: function (t, r) {
      var n = Xi(r);
      return new Op(t, Qi(n), n.name);
    },
    object: function (t, r, n) {
      return Sr(function () {
        return iy(A.useProxies === !1 || n?.proxy === !1 ? Jr({}, n) : dy({}, n), t, r);
      });
    },
    ref: wt(wb),
    shallow: wt(Ob),
    deep: ep,
    struct: wt(Sb),
  },
  se = Bv(tp, xb),
  rp = "computed",
  Rb = "computed.struct",
  Rs = au(rp),
  Pb = au(Rb, { equals: ma.structural }),
  Ya = function (t, r) {
    if (Bi(r)) return Rs.decorate_20223_(t, r);
    if (vr(r)) return Ni(t, r, Rs);
    if (Jt(t)) return wt(au(rp, t));
    var n = Jt(r) ? r : {};
    return ((n.get = t), n.name || (n.name = t.name || ""), new lt(n));
  };
Object.assign(Ya, Rs);
Ya.struct = wt(Pb);
var El,
  kl,
  wa = 0,
  Cb = 1,
  Ab =
    (El = (kl = ya(function () {}, "name")) == null ? void 0 : kl.configurable) != null ? El : !1,
  xl = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function gr(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return Ib(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    Ab && ((xl.value = e), mt(i, "name", xl)),
    i
  );
}
function Ib(e, t, r, n, i) {
  var a = jb(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((a.error_ = o), o);
  } finally {
    Db(a);
  }
}
function jb(e, t, r, n) {
  var i = !1,
    a = 0,
    o = A.trackingDerivation,
    u = !t || !o;
  Ye();
  var s = A.allowStateChanges;
  u && (wr(), (s = Ja(!0)));
  var c = ou(!0),
    l = {
      runAsAction_: u,
      prevDerivation_: o,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: c,
      notifySpy_: i,
      startTime_: a,
      actionId_: Cb++,
      parentActionId_: wa,
    };
  return ((wa = l.actionId_), l);
}
function Db(e) {
  (wa !== e.actionId_ && W(30),
    (wa = e.parentActionId_),
    e.error_ !== void 0 && (A.suppressReactionErrors = !0),
    Xa(e.prevAllowStateChanges_),
    _i(e.prevAllowStateReads_),
    Je(),
    e.runAsAction_ && Nt(e.prevDerivation_),
    (A.suppressReactionErrors = !1));
}
function Tb(e, t) {
  var r = Ja(e);
  try {
    return t();
  } finally {
    Xa(r);
  }
}
function Ja(e) {
  var t = A.allowStateChanges;
  return ((A.allowStateChanges = e), t);
}
function Xa(e) {
  A.allowStateChanges = e;
}
var dr = (function (e) {
    function t(n, i, a, o, u) {
      var s;
      return (
        a === void 0 && (a = "ObservableValue"),
        u === void 0 && (u = ma.default),
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
        if (We(this)) {
          var a = Ke(this, { object: this, type: Ot, newValue: i });
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
          st(this) && ut(this, { type: Ot, object: this, newValue: i, oldValue: a }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (i) {
        return zi(this, i);
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
          Ui(this, i)
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
  lt = (function () {
    function e(r) {
      ((this.dependenciesState_ = Y.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = Y.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new Sa(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Oa.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || W(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = gr("ComputedValue-setter", r.set)),
        (this.equals_ = r.equals || (r.compareStructural || r.struct ? ma.structural : ma.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        Bb(this);
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
          A.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Ps(this) &&
            (this.warnAboutUntrackedRead_(), Ye(), (this.value_ = this.computeValue_(!1)), Je());
        else if ((cp(this), Ps(this))) {
          var n = A.trackingContext;
          (this.keepAlive_ && !n && (A.trackingContext = this),
            this.trackAndCompute() && Nb(this),
            (A.trackingContext = n));
        }
        var i = this.value_;
        if (ua(i)) throw i.cause;
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
          i = this.dependenciesState_ === Y.NOT_TRACKING_,
          a = this.computeValue_(!0),
          o = i || ua(n) || ua(a) || !this.equals_(n, a);
        return (o && (this.value_ = a), o);
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = Ja(!1),
          a;
        if (n) a = np(this, this.derivation, this.scope_);
        else if (A.disableErrorBoundaries === !0) a = this.derivation.call(this.scope_);
        else
          try {
            a = this.derivation.call(this.scope_);
          } catch (o) {
            a = new Sa(o);
          }
        return (Xa(i), (this.isComputing = !1), a);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Cs(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var a = this,
          o = !0,
          u = void 0;
        return Yb(function () {
          var s = a.get();
          if (!o || i) {
            var c = wr();
            (n({
              observableKind: "computed",
              debugObjectName: a.name_,
              type: Ot,
              object: a,
              newValue: s,
              oldValue: u,
            }),
              Nt(c));
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
      Yr(e, [
        {
          key: "isComputing",
          get: function () {
            return Fe(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Fe(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Fe(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Fe(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Fe(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Le(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
lt.isComputingMask_ = 1;
lt.isRunningSetterMask_ = 2;
lt.isBeingObservedMask_ = 4;
lt.isPendingUnobservationMask_ = 8;
lt.diffValueMask_ = 16;
var Qa = mr("ComputedValue", lt),
  Y;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_"));
})(Y || (Y = {}));
var Oa;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK"));
})(Oa || (Oa = {}));
var Sa = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function ua(e) {
  return e instanceof Sa;
}
function Ps(e) {
  switch (e.dependenciesState_) {
    case Y.UP_TO_DATE_:
      return !1;
    case Y.NOT_TRACKING_:
    case Y.STALE_:
      return !0;
    case Y.POSSIBLY_STALE_: {
      for (var t = ou(!0), r = wr(), n = e.observing_, i = n.length, a = 0; a < i; a++) {
        var o = n[a];
        if (Qa(o)) {
          if (A.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (Nt(r), _i(t), !0);
            }
          if (e.dependenciesState_ === Y.STALE_) return (Nt(r), _i(t), !0);
        }
      }
      return (ap(e), Nt(r), _i(t), !1);
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
      a = new Sa(o);
    }
  return (A.inBatch--, (A.trackingDerivation = i), Mb(e), _i(n), a);
}
function Mb(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = Y.UP_TO_DATE_,
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
  n !== Y.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function Cs(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) sp(t[r], e);
  e.dependenciesState_ = Y.NOT_TRACKING_;
}
function ip(e) {
  var t = wr();
  try {
    return e();
  } finally {
    Nt(t);
  }
}
function wr() {
  var e = A.trackingDerivation;
  return ((A.trackingDerivation = null), e);
}
function Nt(e) {
  A.trackingDerivation = e;
}
function ou(e) {
  var t = A.allowStateReads;
  return ((A.allowStateReads = e), t);
}
function _i(e) {
  A.allowStateReads = e;
}
function ap(e) {
  if (e.dependenciesState_ !== Y.UP_TO_DATE_) {
    e.dependenciesState_ = Y.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; ) t[r].lowestObserverState_ = Y.UP_TO_DATE_;
  }
}
var ca = function () {
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
  la = !0,
  op = !1,
  A = (function () {
    var e = Ua();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (la = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ca().version && (la = !1),
      la
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ca()))
        : (setTimeout(function () {
            op || W(35);
          }, 1),
          new ca())
    );
  })();
function Fb() {
  if (((A.pendingReactions.length || A.inBatch || A.isRunningReactions) && W(36), (op = !0), la)) {
    var e = Ua();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (A = new ca()));
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
function Ye() {
  A.inBatch++;
}
function Je() {
  if (--A.inBatch === 0) {
    dp();
    for (var e = A.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof lt && r.suspend_()));
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
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      (t.dependenciesState_ === Y.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = Y.STALE_));
    }));
}
function Nb(e) {
  e.lowestObserverState_ !== Y.STALE_ &&
    ((e.lowestObserverState_ = Y.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.POSSIBLY_STALE_
        ? (t.dependenciesState_ = Y.STALE_)
        : t.dependenciesState_ === Y.UP_TO_DATE_ && (e.lowestObserverState_ = Y.UP_TO_DATE_);
    }));
}
function Bb(e) {
  e.lowestObserverState_ === Y.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = Y.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === Y.UP_TO_DATE_ &&
        ((t.dependenciesState_ = Y.POSSIBLY_STALE_), t.onBecomeStale_());
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
      (this.dependenciesState_ = Y.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Oa.NONE),
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
        (Ye(), (this.isScheduled = !1));
        var n = A.trackingContext;
        if (((A.trackingContext = this), Ps(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        ((A.trackingContext = n), Je());
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        (Ye(), (this.isRunning = !0));
        var i = A.trackingContext;
        A.trackingContext = this;
        var a = np(this, n, void 0);
        ((A.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && Cs(this),
          ua(a) && this.reportExceptionInDerivation_(a.cause),
          Je());
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
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Ye(), Cs(this), Je()));
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
    Yr(e, [
      {
        key: "isDisposed",
        get: function () {
          return Fe(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Fe(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Fe(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Fe(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Le(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Fe(this.flags_, e.diffValueMask_) ? 1 : 0;
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
var qb = 100,
  As = function (t) {
    return t();
  };
function dp() {
  A.inBatch > 0 || A.isRunningReactions || As(zb);
}
function zb() {
  A.isRunningReactions = !0;
  for (var e = A.pendingReactions, t = 0; e.length > 0; ) {
    ++t === qb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction_();
  }
  A.isRunningReactions = !1;
}
var Ea = mr("Reaction", xt);
function Ub(e) {
  var t = As;
  As = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function bi() {
  return !1;
}
function $b(e) {
  return (console.warn("[mobx.spy] Is a no-op in production builds"), function () {});
}
var fp = "action",
  Vb = "action.bound",
  vp = "autoAction",
  Gb = "autoAction.bound",
  Hb = "<unnamed action>",
  Is = qi(fp),
  Wb = qi(Vb, { bound: !0 }),
  js = qi(vp, { autoAction: !0 }),
  Kb = qi(Gb, { autoAction: !0, bound: !0 });
function pp(e) {
  var t = function (n, i) {
    if (ct(n)) return gr(n.name || Hb, n, e);
    if (ct(i)) return gr(n, i, e);
    if (Bi(i)) return (e ? js : Is).decorate_20223_(n, i);
    if (vr(i)) return Ni(n, i, e ? js : Is);
    if (vr(n)) return wt(qi(e ? vp : fp, { name: n, autoAction: e }));
  };
  return t;
}
var Xe = pp(!1);
Object.assign(Xe, Is);
var ki = pp(!0);
Object.assign(ki, js);
Xe.bound = wt(Wb);
ki.bound = wt(Kb);
function zr(e) {
  return ct(e) && e.isMobxAction === !0;
}
function Yb(e, t) {
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
    var c = Xb(t),
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
var Jb = function (t) {
  return t();
};
function Xb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : Jb;
}
var Qb = "onBO",
  Zb = "onBUO";
function ey(e, t, r) {
  return gp(Qb, e, t, r);
}
function hp(e, t, r) {
  return gp(Zb, e, t, r);
}
function gp(e, t, r, n) {
  var i = Ra(t),
    a = ct(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var u = i[o];
      u && (u.delete(a), u.size === 0 && delete i[o]);
    }
  );
}
var ty = "never",
  Zi = "always",
  ry = "observed";
function ny(e) {
  e.isolateGlobalState === !0 && Fb();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 && (A.useProxies = t === Zi ? !0 : t === ty ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (A.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Zi ? Zi : r === ry;
    ((A.enforceActions = n), (A.allowStateChanges = !(n === !0 || n === Zi)));
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
    e.reactionScheduler && Ub(e.reactionScheduler));
}
function iy(e, t, r, n) {
  var i = N_(t);
  return (
    Sr(function () {
      var a = Jr(e, n)[L];
      Ha(i).forEach(function (o) {
        a.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function ay(e, t) {
  return _p(Ra(e, t));
}
function _p(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = oy(e.observing_).map(_p)),
    t
  );
}
function oy(e) {
  return Array.from(new Set(e));
}
var sy = 0;
function bp() {
  this.message = "FLOW_CANCELLED";
}
bp.prototype = Object.create(Error.prototype);
var $o = Jv("flow"),
  uy = Jv("flow.bound", { bound: !0 }),
  Ur = Object.assign(function (t, r) {
    if (Bi(r)) return $o.decorate_20223_(t, r);
    if (vr(r)) return Ni(t, r, $o);
    var n = t,
      i = n.name || "<unnamed flow>",
      a = function () {
        var u = this,
          s = arguments,
          c = ++sy,
          l = Xe(i + " - runid: " + c + " - init", n).apply(u, s),
          d,
          p = void 0,
          v = new Promise(function (h, f) {
            var g = 0;
            d = f;
            function _(O) {
              p = void 0;
              var w;
              try {
                w = Xe(i + " - runid: " + c + " - yield " + g++, l.next).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function b(O) {
              p = void 0;
              var w;
              try {
                w = Xe(i + " - runid: " + c + " - yield " + g++, l.throw).call(l, O);
              } catch (S) {
                return f(S);
              }
              y(w);
            }
            function y(O) {
              if (ct(O?.then)) {
                O.then(y, f);
                return;
              }
              return O.done ? h(O.value) : ((p = Promise.resolve(O.value)), p.then(_, b));
            }
            _(void 0);
          });
        return (
          (v.cancel = Xe(i + " - runid: " + c + " - cancel", function () {
            try {
              p && Rl(p);
              var h = l.return(void 0),
                f = Promise.resolve(h.value);
              (f.then(Fr, Fr), Rl(f), d(new bp()));
            } catch (g) {
              d(g);
            }
          })),
          v
        );
      };
    return ((a.isMobXFlow = !0), a);
  }, $o);
Ur.bound = wt(uy);
function Rl(e) {
  ct(e.cancel) && e.cancel();
}
function xi(e) {
  return e?.isMobXFlow === !0;
}
function cy(e, t) {
  return e ? eo(e) || !!e[L] || iu(e) || Ea(e) || Qa(e) : !1;
}
function yp(e) {
  return cy(e);
}
function Mt(e, t) {
  (t === void 0 && (t = void 0), Ye());
  try {
    return e.apply(t);
  } finally {
    Je();
  }
}
function Pr(e) {
  return e[L];
}
var ly = {
  has: function (t, r) {
    return Pr(t).has_(r);
  },
  get: function (t, r) {
    return Pr(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return vr(r) ? ((i = Pr(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return vr(r) ? ((n = Pr(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = Pr(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return Pr(t).ownKeys_();
  },
  preventExtensions: function (t) {
    W(13);
  },
};
function dy(e, t) {
  var r, n;
  return (
    zv(),
    (e = Jr(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, ly))
  );
}
function We(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function zi(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    Uv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ke(e, t) {
  var r = wr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, a = n.length;
      i < a && ((t = n[i](t)), t && !t.type && W(14), !!t);
      i++
    );
    return t;
  } finally {
    Nt(r);
  }
}
function st(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ui(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    Uv(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function ut(e, t) {
  var r = wr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, a = n.length; i < a; i++) n[i](t);
    Nt(r);
  }
}
function su(e, t, r) {
  return (
    Sr(function () {
      var n,
        i = Jr(e, r)[L];
      ((n = t) != null || (t = $_(e)),
        Ha(t).forEach(function (a) {
          return i.make_(a, t[a]);
        }));
    }),
    e
  );
}
var Pl = "splice",
  Ot = "update",
  fy = 1e4,
  vy = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : Lt(ka, r)
              ? ka[r]
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
        return zi(this, n);
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
          Ui(this, n)
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
          We(this))
        ) {
          var s = Ke(this, { object: this.proxy_, type: Pl, index: n, removedCount: i, added: a });
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
        if (a.length < fy) {
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
        var o = !this.owned_ && bi(),
          u = st(this),
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
        (this.atom_.reportChanged(), u && ut(this, s));
      }),
      (t.notifyArraySplice_ = function (n, i, a) {
        var o = !this.owned_ && bi(),
          u = st(this),
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
        (this.atom_.reportChanged(), u && ut(this, s));
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
          if (We(this)) {
            var u = Ke(this, { type: Ot, object: this.proxy_, index: n, newValue: i });
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
function py(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    zv(),
    Sr(function () {
      var i = new uu(r, t, n, !1);
      Vv(i.values_, L, i);
      var a = new Proxy(i.values_, vy);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var ka = {
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
    return (A.trackingDerivation && W(37, "reverse"), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    A.trackingDerivation && W(37, "sort");
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
oe("every", dt);
oe("filter", dt);
oe("find", dt);
oe("findIndex", dt);
oe("findLast", dt);
oe("findLastIndex", dt);
oe("flatMap", dt);
oe("forEach", dt);
oe("map", dt);
oe("some", dt);
oe("toReversed", dt);
oe("reduce", mp);
oe("reduceRight", mp);
function oe(e, t) {
  typeof Array.prototype[e] == "function" && (ka[e] = t(e));
}
function qe(e) {
  return function () {
    var t = this[L];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function dt(e) {
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
function mp(e) {
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
var hy = mr("ObservableArrayAdministration", uu);
function Za(e) {
  return Va(e) && hy(e[L]);
}
var gy = {},
  Wt = "add",
  xa = "delete",
  wp = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = hr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = gy),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        ct(Map) || W(18),
        Sr(function () {
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
          var o = (a = new dr(this.has_(n), Wa, "ObservableMap.key?", !1));
          (this.hasMap_.set(n, o),
            hp(o, function () {
              return i.hasMap_.delete(n);
            }));
        }
        return a.get();
      }),
      (t.set = function (n, i) {
        var a = this.has_(n);
        if (We(this)) {
          var o = Ke(this, { type: a ? Ot : Wt, object: this, newValue: i, name: n });
          if (!o) return this;
          i = o.newValue;
        }
        return (a ? this.updateValue_(n, i) : this.addValue_(n, i), this);
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, We(this))) {
          var a = Ke(this, { type: xa, object: this, name: n });
          if (!a) return !1;
        }
        if (this.has_(n)) {
          var o = bi(),
            u = st(this),
            s =
              u || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: xa,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            Mt(function () {
              var c;
              (i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1));
              var l = i.data_.get(n);
              (l.setNewValue_(void 0), i.data_.delete(n));
            }),
            u && ut(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var a = this.data_.get(n);
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var o = bi(),
            u = st(this),
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
          (a.setNewValue_(i), u && ut(this, s));
        }
      }),
      (t.addValue_ = function (n, i) {
        var a = this;
        (this.keysAtom_,
          Mt(function () {
            var c,
              l = new dr(i, a.enhancer_, "ObservableMap.key", !1);
            (a.data_.set(n, l),
              (i = l.value_),
              (c = a.hasMap_.get(n)) == null || c.setNewValue_(!0),
              a.keysAtom_.reportChanged());
          }));
        var o = bi(),
          u = st(this),
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
        u && ut(this, s);
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
        for (var a = Lr(this), o; !(o = a()).done; ) {
          var u = o.value,
            s = u[0],
            c = u[1];
          n.call(i, c, s, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          Or(n) && (n = new Map(n)),
          Mt(function () {
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
                : Kr(n)
                  ? (F_(n) || W(19, n),
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
        Mt(function () {
          ip(function () {
            for (var i = Lr(n.keys()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          Mt(function () {
            for (
              var a = _y(n), o = new Map(), u = !1, s = Lr(i.data_.keys()), c;
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
            for (var v = Lr(a.entries()), h; !(h = v()).done; ) {
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
        return Ui(this, n);
      }),
      (t.intercept_ = function (n) {
        return zi(this, n);
      }),
      Yr(e, [
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
  Or = mr("ObservableMap", wp);
function Cl(e) {
  return ((e[Symbol.toStringTag] = "MapIterator"), lu(e));
}
function _y(e) {
  if (Kr(e) || Or(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Jt(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return W(21, e);
}
var by = {},
  Op = (function () {
    function e(r, n, i) {
      var a = this;
      (n === void 0 && (n = hr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = by),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        ct(Set) || W(22),
        (this.enhancer_ = function (o, u) {
          return n(o, u, i);
        }),
        Sr(function () {
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
        Mt(function () {
          ip(function () {
            for (var i = Lr(n.data_.values()), a; !(a = i()).done; ) {
              var o = a.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var a = Lr(this), o; !(o = a()).done; ) {
          var u = o.value;
          n.call(i, u, u, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, We(this))) {
          var a = Ke(this, { type: Wt, object: this, newValue: n });
          if (!a) return this;
          n = a.newValue;
        }
        if (!this.has(n)) {
          Mt(function () {
            (i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged());
          });
          var o = !1,
            u = st(this),
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
          u && ut(this, s);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (We(this)) {
          var a = Ke(this, { type: xa, object: this, oldValue: n });
          if (!a) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            u = st(this),
            s =
              u || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: xa,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            Mt(function () {
              (i.atom_.reportChanged(), i.data_.delete(n));
            }),
            u && ut(this, s),
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
        if (Tt(n) && !bt(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (Tt(n) && !bt(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (Tt(n) && !bt(n)) return n.symmetricDifference(this);
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
        if (Tt(n) && !bt(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          bt(n) && (n = new Set(n)),
          Mt(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (a) {
                  return i.add(a);
                }))
              : Tt(n)
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
        return Ui(this, n);
      }),
      (t.intercept_ = function (n) {
        return zi(this, n);
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
      Yr(e, [
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
  bt = mr("ObservableSet", Op);
function Al(e) {
  return ((e[Symbol.toStringTag] = "SetIterator"), lu(e));
}
var Il = Object.create(null),
  jl = "remove",
  Sp = (function () {
    function e(r, n, i, a) {
      (n === void 0 && (n = new Map()),
        a === void 0 && (a = vb),
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
        if (a instanceof lt) return (a.set(i), !0);
        if (We(this)) {
          var o = Ke(this, { type: Ot, object: this.proxy_ || this.target_, name: n, newValue: i });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = a.prepareNewValue_(i)), i !== A.UNCHANGED)) {
          var u = st(this),
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
          (a.setNewValue_(i), u && ut(this, c));
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (A.trackingDerivation && !Lt(this.target_, n) && this.has_(n), this.target_[n]);
      }),
      (t.set_ = function (n, i, a) {
        return (
          a === void 0 && (a = !1),
          Lt(this.target_, n)
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
            ((i = new dr(n in this.target_, Wa, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var a;
            if ((a = this.target_[yt]) != null && a[n]) return;
            W(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== $a; ) {
            var u = ya(o, n);
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
          Ye();
          var o = this.delete_(n);
          if (!o) return o;
          if (We(this)) {
            var u = Ke(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Wt,
              newValue: i.value,
            });
            if (!u) return null;
            var s = u.newValue;
            i.value !== s && (i = pr({}, i, { value: s }));
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
          Ye();
          var u = this.delete_(n);
          if (!u) return u;
          if (We(this)) {
            var s = Ke(this, {
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
          var d = new dr(i, a, "ObservableObject.key", !1);
          (this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_));
        } finally {
          Je();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, a) {
        (a === void 0 && (a = !1), this.keysAtom_);
        try {
          Ye();
          var o = this.delete_(n);
          if (!o) return o;
          if (We(this)) {
            var u = Ke(this, {
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
          (this.values_.set(n, new lt(i)), this.notifyPropertyAddition_(n, void 0));
        } finally {
          Je();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !Lt(this.target_, n))) return !0;
        if (We(this)) {
          var a = Ke(this, { object: this.proxy_ || this.target_, name: n, type: jl });
          if (!a) return null;
        }
        try {
          var o;
          Ye();
          var u = st(this),
            s = !1,
            c = this.values_.get(n),
            l = void 0;
          if (!c && (u || s)) {
            var d;
            l = (d = ya(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (c && (this.values_.delete(n), c instanceof dr && (l = c.value_), lp(c)),
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
            u && ut(this, p);
          }
        } finally {
          Je();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return Ui(this, n);
      }),
      (t.intercept_ = function (n) {
        return zi(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var a,
          o = st(this),
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
          o && ut(this, s);
        }
        ((a = this.pendingKeys_) == null || (a = a.get(n)) == null || a.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), Ha(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function Jr(e, t) {
  var r;
  if (Lt(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Sp(e, new Map(), String(n), Eb(t));
  return (Ga(e, L, i), e);
}
var yy = mr("ObservableObjectAdministration", Sp);
function Dl(e) {
  return (
    Il[e] ||
    (Il[e] = {
      get: function () {
        return this[L].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[L].setObservablePropValue_(e, r);
      },
    })
  );
}
function eo(e) {
  return Va(e) ? yy(e[L]) : !1;
}
function Tl(e, t, r) {
  var n;
  (n = e.target_[yt]) == null || delete n[r];
}
var my = kp(0),
  wy = (function () {
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
function Oy(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
Oy(Ep, Array.prototype);
var cu = (function (e) {
  function t(n, i, a, o) {
    var u;
    return (
      a === void 0 && (a = "ObservableArray"),
      o === void 0 && (o = !1),
      (u = e.call(this) || this),
      Sr(function () {
        var s = new uu(a, i, o, !0);
        ((s.proxy_ = u),
          Vv(u, L, s),
          n && n.length && u.spliceWithArray(0, 0, n),
          wy && Object.defineProperty(u, "0", my));
      }),
      u
    );
  }
  Wv(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[L].atom_.reportObserved();
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        a.map(function (u) {
          return Za(u) ? u.slice() : u;
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
    Yr(t, [
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
})(Ep);
Object.entries(ka).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && Ga(cu.prototype, t, r);
});
function kp(e) {
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
function Sy(e) {
  mt(cu.prototype, "" + e, kp(e));
}
function xp(e) {
  if (e > Vo) {
    for (var t = Vo; t < e + 100; t++) Sy(t);
    Vo = e;
  }
}
xp(1e3);
function Ey(e, t, r) {
  return new cu(e, t, r);
}
function Ra(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Za(e)) return (t !== void 0 && W(23), e[L].atom_);
    if (bt(e)) return e.atom_;
    if (Or(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return (r || W(25, t, Ds(e)), r);
    }
    if (eo(e)) {
      if (!t) return W(26);
      var n = e[L].values_.get(t);
      return (n || W(27, t, Ds(e)), n);
    }
    if (iu(e) || Qa(e) || Ea(e)) return e;
  } else if (ct(e) && Ea(e[L])) return e[L];
  W(28);
}
function ky(e, t) {
  if ((e || W(29), iu(e) || Qa(e) || Ea(e) || Or(e) || bt(e))) return e;
  if (e[L]) return e[L];
  W(24, e);
}
function Ds(e, t) {
  var r;
  if (t !== void 0) r = Ra(e, t);
  else {
    if (zr(e)) return e.name;
    eo(e) || Or(e) || bt(e) ? (r = ky(e)) : (r = Ra(e));
  }
  return r.name_;
}
function Sr(e) {
  var t = wr(),
    r = Ja(!0);
  Ye();
  try {
    return e();
  } finally {
    (Je(), Xa(r), Nt(t));
  }
}
var Ml = $a.toString;
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
  ((e = Fl(e)), (t = Fl(t)));
  var u = o === "[object Array]";
  if (!u) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      c = t.constructor;
    if (
      s !== c &&
      !(ct(s) && s instanceof s && ct(c) && c instanceof c) &&
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
      if (!(Lt(t, h) && Ts(e[h], t[h], r - 1, n, i))) return !1;
    }
  }
  return (n.pop(), i.pop(), !0);
}
function Fl(e) {
  return Za(e) ? e.slice() : Kr(e) || Or(e) || Tt(e) || bt(e) ? Array.from(e.entries()) : e;
}
var Ll,
  xy = ((Ll = Ua().Iterator) == null ? void 0 : Ll.prototype) || {};
function lu(e) {
  return ((e[Symbol.iterator] = Ry), Object.assign(Object.create(xy), e));
}
function Ry() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ua();
  typeof t[e] > "u" && W("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: $b, extras: { getDebugName: Ds }, $mobx: L });
var m = yr();
const E = Xt(m),
  Nl = lg({ __proto__: null, default: E }, [m]);
if (!m.useState) throw new Error("mobx-react-lite requires React with Hooks support");
if (!su) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Py(e) {
  e();
}
function Cy(e) {
  (e || (e = Py), ny({ reactionScheduler: e }));
}
function Ay(e) {
  return ay(e);
}
var Iy = 1e4,
  jy = 1e4,
  Dy = (function () {
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
            (n === void 0 && (n = Iy), clearTimeout(r.sweepTimeout), (r.sweepTimeout = void 0));
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
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, jy));
        },
      }),
      e
    );
  })(),
  Ty = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Dy,
  Ri = new Ty(function (e) {
    var t;
    ((t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null));
  }),
  Go = { exports: {} },
  Ho = {};
var Bl;
function My() {
  if (Bl) return Ho;
  Bl = 1;
  var e = yr();
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
function Fy() {
  return (ql || ((ql = 1), (Go.exports = My())), Go.exports);
}
var Ly = Fy();
function zl(e) {
  e.reaction = new xt("observer".concat(e.name), function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) === null || t === void 0 || t.call(e));
  });
}
function Ny(e, t) {
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
          Ri.unregister(n),
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
  (i.reaction || (zl(i), Ri.register(r, i, i)),
    E.useDebugValue(i.reaction, Ay),
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
  By =
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
function qy(e, t) {
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
    return Ny(function () {
      return i(u, s);
    }, a);
  };
  return (
    (o.displayName = e.displayName),
    By && Object.defineProperty(o, "name", { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (o.contextTypes = e.contextTypes),
    n && (o = m.forwardRef(o)),
    (o = m.memo(o)),
    Uy(e, o),
    o
  );
}
var zy = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Uy(e, t) {
  Object.keys(e).forEach(function (r) {
    zy[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
var Yo;
Cy(Fa.unstable_batchedUpdates);
Yo = Ri.finalizeAllImmediately;
function $y(e, t) {
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
function Vy(e, t) {
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
function Gy(e, t, r) {
  var n = Vy(e, t);
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
        name: Fs(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function Hy(e) {
  var t = e.prototype;
  if (e[Yl]) {
    var r = Fs(e);
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
    var i = Fs(e);
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
        value: Wy.call(this, n),
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
        Ri.unregister(this),
        (u.forceUpdate = function () {
          return o.forceUpdate();
        }),
        (!u.reaction || u.reactionInvalidatedBeforeMount) && u.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    Gy(t, "componentWillUnmount", function () {
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
function Fs(e) {
  return e.displayName || e.name || "<component>";
}
function Wy(e) {
  var t = e.bind(this),
    r = Ms(this);
  function n() {
    r.reaction || ((r.reaction = Ky(r)), r.mounted || Ri.register(this, r, this));
    var i = void 0,
      a = void 0;
    if (
      (r.reaction.track(function () {
        try {
          a = Tb(!1, t);
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
function Ky(e) {
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
  return this.state !== t ? !0 : !$y(this.props, e);
}
function to(e, t) {
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(m.Component, e) ||
    Object.prototype.isPrototypeOf.call(m.PureComponent, e)
      ? Hy(e)
      : qy(e)
  );
}
function Ls() {
  return (
    (Ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ls.apply(null, arguments)
  );
}
function Yy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Jy = ["children"],
  Xl = E.createContext({});
function Ip(e) {
  var t = e.children,
    r = Yy(e, Jy),
    n = E.useContext(Xl),
    i = E.useRef(Ls({}, n, r)),
    a = i.current;
  return E.createElement(Xl.Provider, { value: a }, t);
}
Ip.displayName = "MobXProvider";
E.version.split(".")[0];
if (!m.Component) throw new Error("mobx-react requires React to be available");
if (!se) throw new Error("mobx-react requires mobx to be available");
var Xy = Object.defineProperty,
  Qy = Object.getOwnPropertyDescriptor,
  Pt = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? Qy(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && Xy(t, r, i), i);
  };
class ft {
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
Pt([se], ft.prototype, "isLoading", 2);
Pt([se], ft.prototype, "plan", 2);
Pt([se], ft.prototype, "planString", 2);
Pt([se], ft.prototype, "slowQueries", 2);
Pt([se], ft.prototype, "history", 2);
Pt([Xe.bound], ft.prototype, "showPlan", 1);
Pt([Xe.bound], ft.prototype, "saveSlowQuery", 1);
Pt([Xe.bound], ft.prototype, "saveHistory", 1);
Pt([Xe], ft.prototype, "loading", 1);
Pt([Xe], ft.prototype, "stopLoading", 1);
const Zy = new ft();
var em = Object.defineProperty,
  tm = Object.getOwnPropertyDescriptor,
  du = (e, t, r, n) => {
    for (var i = n > 1 ? void 0 : n ? tm(t, r) : t, a = e.length - 1, o; a >= 0; a--)
      (o = e[a]) && (i = (n ? o(t, r, i) : o(i)) || i);
    return (n && i && em(t, r, i), i);
  };
class ro {
  constructor() {
    ((this.state = "ROOT"), (this.lastState = "ROOT"), su(this));
  }
  saveState(t) {
    ((this.lastState = this.state), (this.state = t));
  }
}
du([se], ro.prototype, "state", 2);
du([se], ro.prototype, "lastState", 2);
du([Xe.bound], ro.prototype, "saveState", 1);
const fu = new ro();
class rm {
  constructor() {
    ((this.usersStore = Zy), (this.stateStore = fu));
  }
}
const jp = new rm(),
  nm = m.createContext(jp),
  no = () => m.useContext(nm);
function fe(e, t) {
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
function im(e, t) {
  if (je(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (je(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Dp(e) {
  var t = im(e, "string");
  return je(t) == "symbol" ? t : t + "";
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
function am(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ze(e, t) {
  if (t && (je(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return am(e);
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
function Pi(e, t) {
  return (
    (Pi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    Pi(e, t)
  );
}
function Ue(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Pi(e, t));
}
function R(e, t, r) {
  return (
    (t = Dp(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Oe() {}
function om(e) {
  if (Array.isArray(e)) return e;
}
function sm(e, t) {
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
function um() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J(e, t) {
  return om(e) || sm(e, t) || Tp(e, t) || um();
}
var Mp = function (t, r, n) {
    return !r || !n || !t.length ? [] : t.slice((r - 1) * n, r * n);
  },
  cm = function (t) {
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
  Pa = function (t, r) {
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
  lm = function (t, r, n) {
    return t ? { width: r } : {};
  },
  Zl = function (t, r, n) {
    var i = n && isFinite(n) ? (r - 1) * n : 0;
    return t + i;
  },
  dm = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      i = arguments.length > 3 ? arguments[3] : void 0,
      a = t.destination,
      o = t.sourceIndex;
    if (!a) return r;
    var u = Zl(o, n, i),
      s = Zl(a.index, n, i),
      c = r.slice(),
      l = c.splice(u, 1),
      d = J(l, 1),
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
function fm(e, t) {
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
    i = fm(e, t);
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
var vm = (function () {
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
          je(r) === "object" && (this.payload = Jo(Jo({}, this.payload), r)),
          this
        );
      },
    },
  ]);
})();
function pm(e) {
  if (Array.isArray(e)) return Ns(e);
}
function hm(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function gm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Me(e) {
  return pm(e) || hm(e) || Tp(e) || gm();
}
function _m(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = X(e)) !== null; );
  return e;
}
function Ca() {
  return (
    (Ca =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = _m(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    Ca.apply(null, arguments)
  );
}
function bm(e, t, r) {
  return (
    (t = X(t)),
    ze(e, Fp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function ym(e, t, r, n) {
  var i = Ca(X(e.prototype), t, r);
  return 2 & n && typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var mm = (function (e) {
    function t(r) {
      var n;
      return (
        fe(this, t),
        (n = bm(this, t, [r])),
        R(n, "_isUIAnalyticsEvent", !0),
        R(n, "clone", function () {
          if (n.hasFired) return null;
          var i = Me(n.context),
            a = Me(n.handlers),
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
      Ue(t, e),
      ve(t, [
        {
          key: "update",
          value: function (n) {
            return this.hasFired ? this : ym(t, "update", this, 3)([n]);
          },
        },
      ])
    );
  })(vm),
  wm = m.createContext({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Om = function () {
    return m.useContext(wm);
  },
  Aa = function (t) {
    var r = m.useRef(t);
    return ((r.current = t), r);
  };
function Sm(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Em(e, t) {
  var r = m.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = m.useRef(!0),
    i = m.useRef(r),
    a = n.current || !!(t && i.current.inputs && Sm(t, i.current.inputs)),
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
function km(e, t) {
  return Em(function () {
    return e;
  }, t);
}
function Lp() {
  var e = Om(),
    t = km(
      function (r) {
        return new mm({
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
function xm(e) {
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
function Ci(e) {
  var t = e.fn,
    r = e.action,
    n = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    u = e.analyticsData,
    s = Lp(),
    c = s.createAnalyticsEvent,
    l = Aa(u),
    d = Aa(t),
    p = m.useCallback(
      function (v) {
        var h = c({
            action: r,
            actionSubject: i || n,
            attributes: { componentName: n, packageName: a, packageVersion: o },
          }),
          f = xm({ componentName: n, packageName: a, packageVersion: o }, l.current);
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
function Rm(e) {
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
    u = Lp(),
    s = u.createAnalyticsEvent,
    c = Aa(o),
    l = Aa(t),
    d = m.useCallback(
      function () {
        var p = s({
            action: r,
            actionSubject: n,
            attributes: { componentName: n, packageName: i, packageVersion: a },
          }),
          v = Rm({ componentName: n, packageName: i, packageVersion: a }, c.current);
        p.context.push(v);
        var h = p.clone();
        (h && h.fire("atlaskit"), l.current(p));
      },
      [r, n, i, a, s, c, l],
    );
  return d;
}
var _r = "ASC",
  Ia = "DESC",
  Pm = "small",
  ja = "large",
  Np = 0.22;
const Cm = 5;
function P(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
  const t = {};
  for (const n of e) {
    if (!n) continue;
    const i = n.split(" ");
    for (const a of i) {
      const o = a.startsWith("_") ? a.slice(0, Cm) : a;
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
var Am = ["isFixedSize", "hasDataRow", "children", "testId", "isLoading"],
  Im = m.forwardRef(function (e, t) {
    var r = e.isFixedSize,
      n = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      u = ie(e, Am);
    return m.createElement(
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
  jm = function (t) {
    var r = t.children;
    return m.createElement(
      "caption",
      { className: P(["_11c8lodh _6rthu2gc _1pfh1ejb _m6k41e03"]) },
      r,
    );
  },
  Dm = function (t) {
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
  Tm = function (t) {
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
  Mm = function (t) {
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
  Fm = ["rows", "head", "sortKey", "sortOrder", "rowsPerPage", "page", "forwardedRef"];
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
    (t = X(t)),
    ze(e, qp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
  Nm = function (t, r, n, i) {
    if (!n || !t) return r;
    if (!r) return [];
    var a = i === _r ? 1 : -1,
      o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "accent" }),
      u = Array.from(r);
    return u.sort(function (s, c) {
      var l = od(s.cells, t, n),
        d = od(c.cells, t, n);
      if (l === void 0 || d === void 0) return a;
      if (je(l) !== je(d)) {
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
function Bm(e) {
  var t = (function (r) {
    function n() {
      var i;
      fe(this, n);
      for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++) o[u] = arguments[u];
      return ((i = Lm(this, n, [].concat(o))), R(i, "state", { pageRows: [] }), i);
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
                s = ie(a, Fm);
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
              Pa(c, s);
              var h, f;
              return (
                v ? ((h = u), (f = u)) : ((h = Nm(s, u, c, l) || []), (f = Mp(h, d, p))),
                ad(ad({}, o), {}, { pageRows: f })
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
var qm = "--local-dynamic-table-width",
  zp = function (t) {
    var r = t.width;
    return typeof r < "u" ? R({}, qm, "".concat(r, "%")) : void 0;
  },
  zm = ["width", "isFixedSize", "shouldTruncate", "innerRef"],
  Um = function (t) {
    var r = t.width,
      n = t.isFixedSize,
      i = t.shouldTruncate,
      a = t.innerRef,
      o = ie(t, zm);
    return m.createElement(
      "td",
      re(
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
  $m = ["isHighlighted", "children", "style", "testId", "className"],
  Vm = m.forwardRef(function (e, t) {
    var r = e.isHighlighted,
      n = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      u = ie(e, $m);
    return m.createElement(
      "tr",
      re(
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
  Gm = ["cells"],
  Hm = ["content", "testId"],
  Wm = function (t) {
    var r = t.row,
      n = t.head,
      i = t.testId,
      a = t.isFixedSize,
      o = t.isHighlighted,
      u = r.cells,
      s = ie(r, Gm);
    return E.createElement(
      Vm,
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
          v = ie(c, Hm),
          h = (n || { cells: [] }).cells[l] || {},
          f = h.shouldTruncate,
          g = h.width;
        return E.createElement(
          Um,
          re({ "data-testid": p || (i && "".concat(i, "--cell-").concat(l)) }, v, {
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
function Km(e, t, r) {
  return (
    (t = X(t)),
    ze(e, Up() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Ym = (function (e) {
    function t() {
      return (fe(this, t), Km(this, t, arguments));
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
                return E.createElement(Wm, {
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
  Jm = Bm(
    E.forwardRef(function (e, t) {
      return E.createElement(Ym, re({}, e, { forwardedRef: t }));
    }),
  );
function Xm(e, t, r) {
  return (
    (t = X(t)),
    ze(e, $p() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Qm = (function (e) {
  function t(r) {
    var n;
    return (fe(this, t), (n = Xm(this, t, [r])), (n.state = { hasError: !1 }), n);
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
const vu = m.createContext(null);
var Zm = "#FFFFFF",
  Bs = "#42526E",
  e0 = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
function t0(e) {
  return e === "inherit"
    ? "var(--ds-icon-subtle, ".concat(Bs, ")")
    : "var(--ds-icon-inverse, ".concat(Zm, ")");
}
var ea = {
    rotateStyles: "_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o",
    loadInStyles: "_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw",
    wrapperStyles: "_1e0c116y _s7n4nkob",
    circleStyles: "_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz",
  },
  r0 = typeof window > "u" ? m.useEffect : m.useLayoutEffect,
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
        p = typeof l == "number" ? l : e0[l],
        v = "".concat(o, "ms"),
        h = t0(i),
        f = m.useContext(vu);
      return (
        r0(
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
            className: P([ea.wrapperStyles, ea.rotateStyles]),
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
              className: P([ea.loadInStyles]),
            },
            E.createElement("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              style: { stroke: h },
              className: P([ea.circleStyles]),
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
  n0 = function (t) {
    var r = t.children,
      n = t.testId;
    return m.createElement(
      "div",
      { "data-testid": n && "".concat(n, "--container"), className: P(["_kqswh2mm"]) },
      r,
    );
  },
  i0 = function (t) {
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
  a0 = function (t) {
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
function o0(e, t, r) {
  return (
    (t = X(t)),
    ze(e, Gp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
    return (fe(this, t), o0(this, t, arguments));
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
            n0,
            { testId: s },
            a ? E.createElement(i0, { contentsOpacity: u, testId: s }, i) : i,
            a &&
              E.createElement(
                a0,
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
  spinnerSize: ja,
  contentsOpacity: Np,
  loadingLabel: "Loading table",
});
var s0 = ["children", "testId"],
  u0 = m.forwardRef(function (e, t) {
    var r = e.children,
      n = e.testId,
      i = ie(e, s0);
    return m.createElement(
      "div",
      re({}, i, { "data-testid": n, ref: t, className: P(["_kqswh2mm _6rth1ejb"]) }),
      r,
    );
  }),
  c0 = function (t) {
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
  l0 = m.forwardRef(function (e, t) {
    var r = e.children;
    return m.createElement("div", { ref: t, className: P(["_kqswh2mm _152tidpf"]) }, r);
  });
function d0(e, t, r) {
  return (
    (t = X(t)),
    ze(e, Wp() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
      (r = d0(this, t, [].concat(i))),
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
          je(o.style) === "object" &&
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
                D = (p - x) / 2;
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
            u0,
            { testId: u && "".concat(u, "--loading--container--advanced"), ref: this.containerRef },
            i,
            a &&
              E.createElement(
                c0,
                { testId: u },
                E.createElement(
                  l0,
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
  spinnerSize: ja,
  contentsOpacity: "var(--ds-opacity-loading, ".concat("".concat(Np), ")"),
  loadingLabel: "Loading table",
});
function f0(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    r = e !== void 0,
    n = m.useState(t),
    i = J(n, 2),
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
var Qn = {},
  v0 = {
    none: "_1bsbpxbi _4t3ipxbi",
    compact: "_1bsb1ejb _4t3i1ejb",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  p0 = {
    none: "_1bsbutpp _4t3iutpp",
    compact: "_1bsbpxbi _4t3ipxbi",
    spacious: "_1bsb1ejb _4t3i1ejb",
  },
  h0 = {
    medium: { none: 0, compact: 4, spacious: 4 },
    small: { none: 0, compact: 2.66, spacious: 8 },
  },
  ld = m.memo(function (t) {
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
        var h = t.size(d);
        v = h === "small" || h === "medium" ? h : v;
      }
    }
    var f = 16,
      g = h0[v][l],
      _ = f + 2 * g;
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
          s && "_1bsb1kw7 _4t3i1kw7",
          v === "small" && "_vwz4utpp",
        ]),
      },
      m.createElement("svg", {
        fill: "none",
        viewBox: ""
          .concat(0 - g, " ")
          .concat(0 - g, " ")
          .concat(_, " ")
          .concat(_),
        role: "presentation",
        dangerouslySetInnerHTML: p,
        className: P([
          "_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31",
          s ? "_1bsb1kw7 _4t3i1kw7" : v === "small" ? p0[l] : v0[l],
        ]),
      }),
    );
  });
const g0 = Object.freeze(
    Object.defineProperty({ __proto__: null, Icon: ld, default: ld }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  io = Xf(g0);
var dd;
function _0() {
  if (dd) return Qn;
  ((dd = 1), Object.defineProperty(Qn, "__esModule", { value: !0 }), (Qn.default = void 0));
  var e = r(yr()),
    t = r(io);
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
  return ((n.displayName = "ChevronLeftIcon"), (Qn.default = n), Qn);
}
var b0 = _0();
const y0 = Xt(b0);
var Zn = {},
  fd;
function m0() {
  if (fd) return Zn;
  ((fd = 1), Object.defineProperty(Zn, "__esModule", { value: !0 }), (Zn.default = void 0));
  var e = r(yr()),
    t = r(io);
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
var w0 = m0();
const O0 = Xt(w0);
var pu = m.createContext("elevation.surface"),
  S0 = function () {
    return m.useContext(pu);
  };
pu.displayName = "SurfaceProvider";
var E0 = [
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
  k0 = ["className"],
  x0 = {
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
  Yp = {
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
  R0 = {
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
  P0 = {
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
  C0 = {
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
  A0 = {
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
  ao = m.forwardRef(function (e, t) {
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
      S = ie(e, E0);
    S.className;
    var x = ie(S, k0),
      D = m.createElement(
        n,
        re(
          {
            style: y,
            ref: t,
            className: P([
              "_19itglyw _vchhusvi _r06hglyw",
              a && x0[a],
              a && I0(a) && Yp[a],
              l && R0[l],
              p && P0[p],
              g && C0[g],
              b && A0[b],
              w,
            ]),
          },
          x,
          { "data-testid": O },
        ),
        i,
      );
    return a ? m.createElement(pu.Provider, { value: a }, D) : D;
  });
function I0(e) {
  return e in Yp;
}
const Xo = () =>
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
  Jp = (...e) => P(e);
function j0() {
  return {
    css() {
      throw Xo();
    },
    cssMap() {
      throw Xo();
    },
    cx: Jp,
    XCSSProp() {
      throw Xo();
    },
  };
}
var D0 = j0(),
  T0 = D0.cx,
  M0 = [
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
  vd = {
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
  pd = {
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
  F0 = {
    start: "_1bahv2br",
    center: "_1bah1h6o",
    end: "_1bahh9n0",
    "space-between": "_1bah1yb4",
    "space-around": "_1bah1b1v",
    "space-evenly": "_1bahitcz",
    stretch: "_1bah1fhb",
  },
  L0 = { column: "_2lx21bp4", row: "_2lx2vrvc" },
  N0 = { wrap: "_1n261g80", nowrap: "_1n261q9c" },
  B0 = {
    start: "_4cvrv2br",
    center: "_4cvr1h6o",
    baseline: "_4cvr1q9y",
    end: "_4cvrh9n0",
    stretch: "_4cvr1fhb",
  },
  q0 = { root: "_1e0c1txw _vchhusvi" },
  Da = m.memo(
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
        f = ie(e, M0);
      return m.createElement(
        n,
        re({}, f, {
          role: i,
          className: P([
            q0.root,
            u && pd[u],
            s && pd[s],
            u && vd[u],
            c && vd[c],
            a && B0[a],
            p && L0[p],
            o && F0[o],
            v && N0[v],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        l,
      );
    }),
  );
Da.displayName = "Flex";
var z0 = [
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
  qs = {
    separator: "_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw",
    hug: "_16jlidpf",
    fill: "_1bsb1osq _16jlkb7n",
  },
  U0 = function (t) {
    var r = t.children;
    return m.createElement("span", { className: P([qs.separator]) }, r);
  },
  da = m.memo(
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
        _ = ie(e, z0),
        b = typeof p == "string" ? m.createElement(U0, null, p) : p,
        y = b
          ? m.Children.toArray(g)
              .filter(Boolean)
              .map(function (O, w) {
                return m.createElement(m.Fragment, { key: w }, p && w > 0 ? b : null, O);
              })
          : g;
      return m.createElement(
        Da,
        re({}, _, {
          as: r,
          role: f,
          alignItems: a,
          justifyContent: s || n,
          direction: "row",
          gap: l,
          rowGap: d,
          wrap: u ? "wrap" : void 0,
          xcss: T0(c === "hug" && qs.hug, c === "fill" && qs.fill, v),
          testId: h,
          ref: t,
        }),
        y,
      );
    }),
  );
da.displayName = "Inline";
var $0 = "Invariant failed";
function V0(e, t) {
  if (!e) throw new Error($0);
}
var Xp = m.createContext(!1),
  G0 = function () {
    return m.useContext(Xp);
  },
  H0 = Xp.Provider,
  W0 = ["span", "p", "strong", "em"],
  K0 = function (t, r) {
    var n = S0();
    if (t !== "inherit") {
      if (t) return t;
      if (!r) return hd.hasOwnProperty(n) ? hd[n] : "color.text";
    }
  },
  Cr = {
    root: "_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65",
    "as.strong": "_k48pmoej",
    "as.em": "_zg8l1m30",
    "textAlign.center": "_y3gn1h6o",
    "textAlign.end": "_y3gnh9n0",
    "textAlign.start": "_y3gnv2br",
    truncation: "_1reo15vq _18m915vq _1e0ccj1k _sudp1e54",
    breakAll: "_1nmz9jpi",
  },
  Y0 = { medium: "_11c82smr", UNSAFE_small: "_11c8dcr7", large: "_11c81ixg", small: "_11c81o8v" },
  J0 = { bold: "_k48pmoej", medium: "_k48p1wq8", regular: "_k48pi7a9", semibold: "_k48p1pd9" },
  X0 = {
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
  hd = {
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
  Q0 = m.forwardRef(function (e, t) {
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
    V0(W0.includes(n));
    var v = G0(),
      h = K0(i, v);
    !s && !v && (s = "medium");
    var f = m.createElement(
      n,
      {
        id: u,
        className: P([
          Cr.root,
          s && Y0[s],
          h && X0[h],
          l && Cr.truncation,
          l === 1 && Cr.breakAll,
          a && Cr["textAlign.".concat(a)],
          c && J0[c],
          n === "em" && Cr["as.em"],
          n === "strong" && Cr["as.strong"],
          d,
        ]),
        style: { WebkitLineClamp: l },
        "data-testid": o,
        ref: t,
      },
      p,
    );
    return v ? f : m.createElement(H0, { value: !0 }, f);
  });
function Z0() {
  if (typeof window < "u" && window.navigator != null) {
    var e,
      t = (e = window.navigator.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    return t ? t.includes("safari") && !t.includes("chrome") : !1;
  }
  return !1;
}
var ew = ["as", "children", "isInset", "testId", "style", "xcss"],
  tw = ["className"],
  rw = m.forwardRef(function (e, t) {
    var r = e.as,
      n = r === void 0 ? "button" : r,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      u = e.style,
      s = e.xcss,
      c = ie(e, ew);
    c.className;
    var l = ie(c, tw);
    return m.createElement(
      n,
      re({}, l, {
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
  nw = [
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
  iw = ["className"],
  gd = { root: "_19itglyw _vchhusvi _r06hglyw _80omtlke", disabled: "_80om13gf" },
  aw = m.forwardRef(function (e, t) {
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
      h = e.tabIndex,
      f = ie(e, nw),
      g = m.useContext(vu),
      _ = m.useCallback(
        function (O, w) {
          (g && g.tracePress(s, O.timeStamp), u(O, w));
        },
        [u, g, s],
      ),
      b = Ci({
        fn: _,
        action: "clicked",
        componentName: c || "Pressable",
        packageName: "@atlaskit/primitives",
        packageVersion: "0.0.0-development",
        analyticsData: l,
        actionSubject: "button",
      });
    f.className;
    var y = ie(f, iw);
    return m.createElement(
      rw,
      re({ as: "button", tabIndex: h ?? (Z0() && !n ? 0 : void 0), style: d }, y, {
        type: a,
        onClick: b,
        disabled: n,
        xcss: Jp(gd.root, n && gd.disabled, v),
        testId: p,
        ref: t,
      }),
      r,
    );
  });
function _d(e, t, r, n, i, a, o) {
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
        _d(a, n, i, o, u, "next", s);
      }
      function u(s) {
        _d(a, n, i, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var Qo = { exports: {} },
  Zo = { exports: {} },
  bd;
function Qp() {
  return (
    bd ||
      ((bd = 1),
      (function (e) {
        function t(r, n) {
          ((this.v = r), (this.k = n));
        }
        ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(Zo)),
    Zo.exports
  );
}
var es = { exports: {} },
  ts = { exports: {} },
  yd;
function Zp() {
  return (
    yd ||
      ((yd = 1),
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
      })(ts)),
    ts.exports
  );
}
var md;
function eh() {
  return (
    md ||
      ((md = 1),
      (function (e) {
        var t = Zp();
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
                (function (S, x, D) {
                  var I,
                    C,
                    T,
                    U = 0,
                    z = D || [],
                    G = !1,
                    Q = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: H,
                      f: H.bind(n, 4),
                      d: function (K, N) {
                        return ((I = K), (C = 0), (T = n), (Q.n = N), c);
                      },
                    };
                  function H(q, K) {
                    for (C = q, T = K, i = 0; !G && U && !N && i < z.length; i++) {
                      var N,
                        $ = z[i],
                        M = Q.p,
                        ce = $[2];
                      q > 3
                        ? (N = ce === K) &&
                          ((T = $[(C = $[4]) ? 5 : ((C = 3), 3)]), ($[4] = $[5] = n))
                        : $[0] <= M &&
                          ((N = q < 2 && M < $[1])
                            ? ((C = 0), (Q.v = K), (Q.n = $[1]))
                            : M < ce &&
                              (N = q < 3 || $[0] > K || K > ce) &&
                              (($[4] = q), ($[5] = K), (Q.n = ce), (C = 0)));
                    }
                    if (N || q > 1) return c;
                    throw ((G = !0), K);
                  }
                  return function (q, K, N) {
                    if (U > 1) throw TypeError("Generator is already running");
                    for (G && K === 1 && H(K, N), C = K, T = N; (i = C < 2 ? n : T) || !G; ) {
                      I || (C ? (C < 3 ? (C > 1 && (Q.n = -1), H(C, T)) : (Q.n = T)) : (Q.v = T));
                      try {
                        if (((U = 2), I)) {
                          if ((C || (q = "next"), (i = I[q]))) {
                            if (!(i = i.call(I, T)))
                              throw TypeError("iterator result is not an object");
                            if (!i.done) return i;
                            ((T = i.value), C < 2 && (C = 0));
                          } else
                            (C === 1 && (i = I.return) && i.call(I),
                              C < 2 &&
                                ((T = TypeError(
                                  "The iterator does not provide a '" + q + "' method",
                                )),
                                (C = 1)));
                          I = n;
                        } else if ((i = (G = Q.n < 0) ? T : S.call(x, Q)) !== c) break;
                      } catch ($) {
                        ((I = n), (C = 1), (T = $));
                      } finally {
                        U = 1;
                      }
                    }
                    return { value: i, done: G };
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
      })(es)),
    es.exports
  );
}
var rs = { exports: {} },
  ns = { exports: {} },
  is = { exports: {} },
  wd;
function th() {
  return (
    wd ||
      ((wd = 1),
      (function (e) {
        var t = Qp(),
          r = Zp();
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
      })(is)),
    is.exports
  );
}
var Od;
function rh() {
  return (
    Od ||
      ((Od = 1),
      (function (e) {
        var t = eh(),
          r = th();
        function n(i, a, o, u, s) {
          return new r(t().w(i, a, o, u), s || Promise);
        }
        ((e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(ns)),
    ns.exports
  );
}
var Sd;
function ow() {
  return (
    Sd ||
      ((Sd = 1),
      (function (e) {
        var t = rh();
        function r(n, i, a, o, u) {
          var s = t(n, i, a, o, u);
          return s.next().then(function (c) {
            return c.done ? c.value : s.next();
          });
        }
        ((e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports));
      })(rs)),
    rs.exports
  );
}
var as = { exports: {} },
  Ed;
function sw() {
  return (
    Ed ||
      ((Ed = 1),
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
      })(as)),
    as.exports
  );
}
var os = { exports: {} },
  ss = { exports: {} },
  kd;
function uw() {
  return (
    kd ||
      ((kd = 1),
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
      })(ss)),
    ss.exports
  );
}
var xd;
function cw() {
  return (
    xd ||
      ((xd = 1),
      (function (e) {
        var t = uw().default;
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
      })(os)),
    os.exports
  );
}
var Rd;
function lw() {
  return (
    Rd ||
      ((Rd = 1),
      (function (e) {
        var t = Qp(),
          r = eh(),
          n = ow(),
          i = rh(),
          a = th(),
          o = sw(),
          u = cw();
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
      })(Qo)),
    Qo.exports
  );
}
var us, Pd;
function dw() {
  if (Pd) return us;
  Pd = 1;
  var e = lw()();
  us = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = e)
      : Function("r", "regeneratorRuntime = r")(e);
  }
  return us;
}
var fw = dw();
const B = Xt(fw);
var cs = {},
  ei = {},
  Cd;
function nh() {
  if (Cd) return ei;
  ((Cd = 1), Object.defineProperty(ei, "__esModule", { value: !0 }), (ei.bind = void 0));
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
  return ((ei.bind = e), ei);
}
var ur = {},
  Ad;
function vw() {
  if (Ad) return ur;
  Ad = 1;
  var e =
    (ur && ur.__assign) ||
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
  (Object.defineProperty(ur, "__esModule", { value: !0 }), (ur.bindAll = void 0));
  var t = nh();
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
  return ((ur.bindAll = i), ur);
}
var Id;
function pw() {
  return (
    Id ||
      ((Id = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.bindAll = e.bind = void 0));
        var t = nh();
        Object.defineProperty(e, "bind", {
          enumerable: !0,
          get: function () {
            return t.bind;
          },
        });
        var r = vw();
        Object.defineProperty(e, "bindAll", {
          enumerable: !0,
          get: function () {
            return r.bindAll;
          },
        });
      })(cs)),
    cs
  );
}
var oo = pw(),
  cr = {},
  Ar = {},
  ta = {},
  ti = {},
  jd;
function hw() {
  if (jd) return ti;
  ((jd = 1),
    Object.defineProperty(ti, "__esModule", { value: !0 }),
    (ti.V1InitializeContainer = void 0));
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
  return ((ti.V1InitializeContainer = t), ti);
}
var ri = {},
  Dd;
function gw() {
  if (Dd) return ri;
  ((Dd = 1),
    Object.defineProperty(ri, "__esModule", { value: !0 }),
    (ri.V2InitializeContainer = void 0));
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
  return ((ri.V2InitializeContainer = t), ri);
}
var Td;
function _w() {
  if (Td) return ta;
  ((Td = 1), Object.defineProperty(ta, "__esModule", { value: !0 }));
  const e = kt(),
    t = hw(),
    r = gw();
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
  return ((ta.default = n), ta);
}
var Ir = {},
  ni = {},
  Md;
function bw() {
  if (Md) return ni;
  ((Md = 1),
    Object.defineProperty(ni, "__esModule", { value: !0 }),
    (ni._resolveDeltasResponse = void 0));
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
  ni._resolveDeltasResponse = r;
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
  return ni;
}
var Fd;
function ih() {
  if (Fd) return Ir;
  Fd = 1;
  var e =
    (Ir && Ir.__awaiter) ||
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
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  const t = kt(),
    r = bw();
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
  return ((Ir.default = n), Ir);
}
var ii = {},
  Ld;
function yw() {
  if (Ld) return ii;
  ((Ld = 1),
    Object.defineProperty(ii, "__esModule", { value: !0 }),
    (ii._makeParamStoreGetter = void 0));
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
  return ((ii._makeParamStoreGetter = c), ii);
}
var lr = {},
  Nd;
function mw() {
  if (Nd) return lr;
  Nd = 1;
  var e =
    (lr && lr.__awaiter) ||
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
  (Object.defineProperty(lr, "__esModule", { value: !0 }),
    (lr.StatsigEvaluationsDataAdapter = void 0));
  const t = kt(),
    r = ih();
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
  return ((lr.StatsigEvaluationsDataAdapter = n), lr);
}
var Bd;
function ww() {
  if (Bd) return Ar;
  Bd = 1;
  var e =
    (Ar && Ar.__awaiter) ||
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
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  const t = kt(),
    r = _w(),
    n = ih(),
    i = yw(),
    a = mw();
  let o = class zs extends t.StatsigClientBase {
    static instance(s) {
      const c = (0, t._getStatsigGlobal)().instance(s);
      return c instanceof zs
        ? c
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new zs(s ?? "", {}));
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
  return ((Ar.default = o), Ar);
}
var qd;
function Ow() {
  return (
    qd ||
      ((qd = 1),
      (function (e) {
        var t =
            (cr && cr.__createBinding) ||
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
            (cr && cr.__exportStar) ||
            function (o, u) {
              for (var s in o)
                s !== "default" && !Object.prototype.hasOwnProperty.call(u, s) && t(u, o, s);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const n = kt(),
          i = ww();
        ((e.StatsigClient = i.default), r(kt(), e));
        const a = Object.assign((0, n._getStatsigGlobal)(), { StatsigClient: i.default });
        e.default = a;
      })(cr)),
    cr
  );
}
var at = Ow(),
  ls = { exports: {} },
  zd;
function Sw() {
  return (
    zd ||
      ((zd = 1),
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
      })(ls)),
    ls.exports
  );
}
var Ew = Sw();
const kw = Xt(Ew);
function Ud(e, t) {
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
      ? Ud(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ud(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ra = "@all-features",
  xw = (function () {
    function e() {
      (fe(this, e), R(this, "eventToValue", new Map()), (this.emitter = new kw()));
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
            this.emitter.on(ra, r),
            function () {
              n.emitter.off(ra, r);
            }
          );
        },
      },
      {
        key: "anyUpdated",
        value: function () {
          var r = this;
          (this.emitter.emit(ra),
            this.emitter
              .eventNames()
              .filter(function (n) {
                return n !== ra;
              })
              .forEach(function (n) {
                r.emitter.emit(n);
              }));
        },
      },
    ]);
  })(),
  Rw = "fedramp-moderate";
function Pw() {
  var e,
    t = globalThis,
    r = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (r) return r === Rw;
  var n =
    (e = t.location) === null || e === void 0 || (e = e.hostname) === null || e === void 0
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return n ? n.length > 0 : !1;
}
var hu = (function (e) {
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
  pi = (function (e) {
    return (
      (e.Development = "development"),
      (e.Staging = "staging"),
      (e.Production = "production"),
      e
    );
  })({}),
  Ai = (function (e) {
    return ((e.COMMERCIAL = "commercial"), (e.FEDRAMP_MODERATE = "fedramp-moderate"), e);
  })({}),
  Cw = [
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
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Us(e) {
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
var na = function (t) {
    return Us({ perimeter: Pw() ? Ai.FEDRAMP_MODERATE : Ai.COMMERCIAL }, t);
  },
  ai = function (t, r) {
    if (!t && !r) return !0;
    if (!t || !r) return !1;
    var n = Object.entries(t),
      i = Object.entries(r);
    if (n.length !== i.length) return !1;
    var a = function (p, v) {
      var h = J(p, 1),
        f = h[0],
        g = J(v, 1),
        _ = g[0];
      return f.localeCompare(_);
    };
    (n.sort(a), i.sort(a));
    for (var o = 0; o < n.length; o++) {
      var u = J(n[o], 2),
        s = u[1],
        c = J(i[o], 2),
        l = c[1];
      if (s !== l) return !1;
    }
    return !0;
  },
  Vd = function (t, r) {
    var n = { customIDs: t, custom: r };
    return (t.atlassianAccountId && (n.userID = t.atlassianAccountId), n);
  },
  Aw = function (t) {
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
    var p = ie(t, Cw);
    return Us(
      Us({}, p),
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
  Iw = Object.entries(hu).map(function (e) {
    var t = J(e, 2),
      r = t[0],
      n = t[1];
    return [r.toLowerCase(), n];
  }),
  ah = function (t) {
    var r,
      n,
      i,
      a = t.reason.toLowerCase();
    return {
      reason:
        (r =
          (n = Iw.find(function (o) {
            var u = J(o, 1),
              s = u[0];
            return a.includes(s);
          })) === null || n === void 0
            ? void 0
            : n[1]) !== null && r !== void 0
          ? r
          : hu.Unknown,
      time: (i = t.receivedAt) !== null && i !== void 0 ? i : Date.now(),
    };
  },
  $s = function (t) {
    return t.map(function (r) {
      return typeof r == "string" ? { gate: r } : r;
    });
  },
  Gd = (function () {
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
            var u = Array.isArray(n) ? "array" : je(n),
              s = Array.isArray(o) ? "array" : je(o);
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
                ah(r.details),
                $s(
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
  Hd = (function () {
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
              : n == null || (je(o) === je(n) && Array.isArray(n) === Array.isArray(o))
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
                ah(r.details),
                function (l, d) {
                  return r.get(d);
                },
                $s(
                  (n =
                    (i = r.__evaluation) === null || i === void 0
                      ? void 0
                      : i.secondary_exposures) !== null && n !== void 0
                    ? n
                    : [],
                ),
                $s(
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
  Nr = "0.0.0-development";
function jw(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function oh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (oh = function () {
    return !!e;
  })();
}
function Dw(e, t, r) {
  if (oh()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (e.bind.apply(e, n))();
  return (r && Pi(i, r.prototype), i);
}
function Vs(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Vs = function (n) {
      if (n === null || !jw(n)) return n;
      if (typeof n != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (t !== void 0) {
        if (t.has(n)) return t.get(n);
        t.set(n, i);
      }
      function i() {
        return Dw(n, arguments, X(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Pi(i, n)
      );
    }),
    Vs(e)
  );
}
function Tw(e, t, r) {
  return (
    (t = X(t)),
    ze(e, sh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function sh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (sh = function () {
    return !!e;
  })();
}
var Wd = (function (e) {
  function t(r) {
    return (fe(this, t), Tw(this, t, [r]));
  }
  return (Ue(t, e), ve(t));
})(Vs(Error));
function Kd(e, t) {
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
function Mw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Fw = 5e3,
  Lw = "https://api.atlassian.com/flags",
  Nw = "https://api.stg.atlassian.com/flags",
  Bw = "https://api.dev.atlassian.com/flags",
  qw = "https://api.stg.atlassian-us-gov-mod.com/flags",
  zw = "https://api.atlassian-us-gov-mod.com/flags",
  Uw = "https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net",
  $w = "oasis-stg.com/flags",
  Vw = "atlassian-isolated.net/flags",
  Gw = "/gateway/api/flags",
  ds = (function () {
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
                        new Wd(
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
                      throw new Wd("Unexpected 204 response");
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
          if (n) return Gw;
          if (i === Ai.FEDRAMP_MODERATE)
            switch (r) {
              case pi.Production:
                return zw;
              case pi.Staging:
                return qw;
              default:
                throw new Error(
                  'Invalid environment "'.concat(r, '" for "').concat(i, '" perimeter'),
                );
            }
          else if (i === Ai.COMMERCIAL)
            switch (r) {
              case pi.Development:
                return Bw;
              case pi.Staging:
                var o = this.getApiUrl(a);
                return o !== null ? o : Nw;
              default:
                var u = this.getApiUrl(a);
                return u !== null ? u : Lw;
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
                          (c = o.fetchTimeoutMs || Fw),
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
                            Mw(
                              {
                                method: a,
                                headers: {
                                  "Content-Type": "application/json",
                                  "X-Client-Name": "feature-gate-js-client",
                                  "X-Client-Version": Nr,
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
          if (n === void 0) return r ? Uw.replace("%s", r) : null;
          var i = n.protocol,
            a = n.hostname,
            o = a.match(/([^.]+)\.oasis-stg\.com$/);
          if (o) return "".concat(i, "//api.").concat(o[1], ".").concat($w);
          var u = a.match(/([^.]+)\.atlassian-isolated\.net$/);
          return u ? "".concat(i, "//api.").concat(u[1], ".").concat(Vw) : null;
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
      ? Yd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Hw(e, t, r) {
  return (
    (t = X(t)),
    ze(e, uh() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
  );
}
function uh() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (uh = function () {
    return !!e;
  })();
}
function Ww(e, t, r, n) {
  var i = Ca(X(e.prototype), t, r);
  return typeof i == "function"
    ? function (a) {
        return i.apply(r, a);
      }
    : i;
}
var Kw = (function (e) {
  function t() {
    var r;
    return (
      fe(this, t),
      (r = Hw(this, t, ["NoFetchDataAdapter", "nofetch"])),
      R(r, "bootstrapResult", null),
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
                            oi(
                              oi({}, this.bootstrapResult),
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
            oi(oi({}, this.bootstrapResult), {}, { fullUserHash: at._getFullUserHash(n) })
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
          Ww(t, "setData", this)([n, i]);
        },
      },
      {
        key: "toJSON",
        value: function () {
          var n = oi({}, this);
          return (delete n._options, delete n._inMemoryCache, delete n.bootstrapResult, n);
        },
      },
    ])
  );
})(at.DataAdapterCore);
function Jd(e, t) {
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
      ? Jd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Yw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Jw(e)) || t) {
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
function Jw(e, t) {
  if (e) {
    if (typeof e == "string") return Xd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Xd(e, t)
          : void 0
    );
  }
}
function Xd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var fs = "LocalOverride:Recognized",
  Xw = "STATSIG_OVERRIDES",
  Qd = "STATSIG_JS_LITE_LOCAL_OVERRIDES",
  jr = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Ge = function (t, r) {
    return r + ":" + t;
  },
  Qw = (function () {
    function e(t) {
      (fe(this, e),
        (this._overrides = jr()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return ve(e, [
      {
        key: "parseStoredOverrides",
        value: function (r) {
          try {
            var n = window.localStorage.getItem(r);
            return n ? JSON.parse(n) : jr();
          } catch {
            return jr();
          }
        },
      },
      {
        key: "mergeOverrides",
        value: function () {
          for (var r = jr(), n = arguments.length, i = new Array(n), a = 0; a < n; a++)
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
                p = J(l[c], 2),
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
                b = J(g[f], 2),
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
                D = J(S[w], 2),
                I = D[0],
                C = D[1];
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
          for (var n = 0, i = Object.values(r); n < i.length; n++) {
            var a = i[n],
              o = new Set(Object.keys(a)),
              u = Yw(o),
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
          var n = Re(Re({}, jr()), r);
          this._djb2Map.clear();
          for (var i = 0, a = Object.entries(n); i < a.length; i++)
            for (
              var o = J(a[i], 2), u = o[0], s = o[1], c = 0, l = Object.entries(s);
              c < l.length;
              c++
            ) {
              var d = J(l[c], 2),
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
            : Re(Re({}, r), {}, { value: a, details: Re(Re({}, r.details), {}, { reason: fs }) });
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
          this._overrides = jr();
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
            : Re(
                Re({}, r),
                {},
                {
                  __value: a,
                  get: Ve._makeTypedGet(r.name, a),
                  details: Re(Re({}, r.details), {}, { reason: fs }),
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
            : Re(
                Re({}, r),
                {},
                {
                  value: a,
                  get: Ve._makeTypedGet(r.name, a),
                  details: Re(Re({}, r.details), {}, { reason: fs }),
                },
              );
        },
      },
    ]);
  })(),
  Zw = ["sdkKey", "environment", "updateUserCompletionCallback", "perimeter"];
function Zd(e, t) {
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
      ? Zd(Object(r), !0).forEach(function (n) {
          R(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zd(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var ef = "client-default-key",
  e1 = "https://xp.atlassian.com/v1/rgstr",
  t1 = (function () {
    function e() {
      var t = this,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = r.localStorageKey,
        i = n === void 0 ? Xw : n,
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
        R(this, "subscriptions", new xw()),
        R(this, "dataAdapter", new Kw()),
        R(this, "statsigValuesUpdated", function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new Qw(i)));
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
                        if (((s = na(i)), !this.initPromise)) {
                          d.next = 4;
                          break;
                        }
                        return (
                          ai(s, this.initOptions) ||
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
                        if (((c = na(i)), !this.initPromise)) {
                          p.next = 4;
                          break;
                        }
                        return (
                          ai(c, this.initOptions) ||
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
                          this.provider.setClientVersion(Nr),
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
                    clientVersion: Nr,
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
                u.initOptions.environment !== pi.Production &&
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
                          (c = na(i)),
                          !this.initPromise)
                        ) {
                          v.next = 5;
                          break;
                        }
                        return (
                          ai(c, this.initOptions) ||
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
                          (u = na(i)),
                          (s = function () {
                            return ds.fetchExperimentValues(u, a, o).then(function (p) {
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
            return Gd.fromExperiment(
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
              new Gd(r, {}, "", { time: Date.now(), reason: hu.Error })
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
          return ai(this.currentIdentifiers, r) && ai(this.currentAttributes, n);
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
                          (l = ds.fetchClientSdk(i).then(function (_) {
                            return (u.sdkKey = _.clientSdkKey);
                          })),
                          (d = ds.fetchExperimentValues(i, a, o)),
                          (g.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        ((p = g.sent),
                          (v = J(p, 2)),
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
                          (h = J(v, 2)),
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
                          (c = Aw(i)),
                          c.sdkKey || (c.sdkKey = ef),
                          ((u = c.networkConfig) !== null && u !== void 0 && u.logEventUrl) ||
                            (c.networkConfig = Ht(
                              Ht({}, c.networkConfig),
                              {},
                              { logEventUrl: e1 },
                            )),
                          c.perimeter === Ai.FEDRAMP_MODERATE && (c.disableLogging = !0),
                          (l = c.sdkKey),
                          (d = c.environment),
                          c.updateUserCompletionCallback,
                          c.perimeter,
                          (p = ie(c, Zw)),
                          (this.user = Vd(a, o)),
                          (v = Ht(
                            Ht({}, p),
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
                          (g.prev = 12),
                          (this.statsigClient = new at.StatsigClient(l, this.user, v)),
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
                          (this.statsigClient = new at.StatsigClient(ef, this.user, v)),
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
                        ((c = _.sent), (l = Vd(a, c.customAttributesFromFetch)), (_.next = 13));
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
          return Nr;
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
            return Hd.fromLayer(this.statsigClient.getLayer(r, { disableExposureLog: !a }));
          } catch (o) {
            return (
              this.hasGetLayerErrorOccurred ||
                (console.warn({
                  msg: "An error has occurred getting the layer. Only the first occurrence of this error is logged.",
                  layerName: r,
                  error: o,
                }),
                (this.hasGetLayerErrorOccurred = !0)),
              Hd.fromLayer(at._makeLayer(r, { reason: "Error" }, null))
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
j = V;
R(V, "client", new t1());
R(V, "hasCheckGateErrorOccurred", !1);
R(V, "hasGetExperimentValueErrorOccurred", !1);
R(V, "checkGate", function (e, t) {
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
R(V, "getExperimentValue", function (e, t, r, n) {
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
R(V, "initializeCalled", j.client.initializeCalled.bind(j.client));
R(V, "initializeCompleted", j.client.initializeCompleted.bind(j.client));
R(V, "waitUntilInitializeCompleted", j.client.waitUntilInitializeCompleted.bind(j.client));
R(V, "initialize", j.client.initialize.bind(j.client));
R(V, "initializeWithProvider", j.client.initializeWithProvider.bind(j.client));
R(V, "initializeFromValues", j.client.initializeFromValues.bind(j.client));
R(V, "manuallyLogGateExposure", j.client.manuallyLogGateExposure.bind(j.client));
R(V, "getExperiment", j.client.getExperiment.bind(j.client));
R(V, "manuallyLogExperimentExposure", j.client.manuallyLogExperimentExposure.bind(j.client));
R(V, "manuallyLogLayerExposure", j.client.manuallyLogLayerExposure.bind(j.client));
R(V, "shutdownStatsig", j.client.shutdownStatsig.bind(j.client));
R(V, "overrideGate", j.client.overrideGate.bind(j.client));
R(V, "clearGateOverride", j.client.clearGateOverride.bind(j.client));
R(V, "overrideConfig", j.client.overrideConfig.bind(j.client));
R(V, "clearConfigOverride", j.client.clearConfigOverride.bind(j.client));
R(V, "setOverrides", j.client.setOverrides.bind(j.client));
R(V, "getOverrides", j.client.getOverrides.bind(j.client));
R(V, "clearAllOverrides", j.client.clearAllOverrides.bind(j.client));
R(V, "isCurrentUser", j.client.isCurrentUser.bind(j.client));
R(V, "onGateUpdated", j.client.onGateUpdated.bind(j.client));
R(V, "onExperimentValueUpdated", j.client.onExperimentValueUpdated.bind(j.client));
R(V, "onAnyUpdated", j.client.onAnyUpdated.bind(j.client));
R(V, "updateUser", j.client.updateUser.bind(j.client));
R(V, "updateUserWithProvider", j.client.updateUserWithProvider.bind(j.client));
R(V, "updateUserWithValues", j.client.updateUserWithValues.bind(j.client));
R(V, "getPackageVersion", j.client.getPackageVersion.bind(j.client));
R(V, "getLayer", j.client.getLayer.bind(j.client));
R(V, "getLayerValue", j.client.getLayerValue.bind(j.client));
var Gs = V;
if (typeof window < "u")
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = V;
  else {
    var ia, vs;
    Gs = window.__FEATUREGATES_JS__;
    var tf =
      ((ia = Gs) === null || ia === void 0 || (vs = ia.getPackageVersion) === null || vs === void 0
        ? void 0
        : vs.call(ia)) || "4.10.0 or earlier";
    if (tf !== Nr) {
      var r1 = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is `
        .concat(tf, " when module version ")
        .concat(Nr, " was loading.");
      console.warn(r1);
    }
  }
var Dr,
  Tr,
  n1 =
    (globalThis == null ||
    (Dr = globalThis.process) === null ||
    Dr === void 0 ||
    (Dr = Dr.env) === null ||
    Dr === void 0
      ? void 0
      : Dr.JEST_WORKER_ID) !== void 0,
  i1 =
    !n1 &&
    (globalThis == null ||
    (Tr = globalThis.process) === null ||
    Tr === void 0 ||
    (Tr = Tr.env) === null ||
    Tr === void 0
      ? void 0
      : Tr.NODE_ENV) !== "production",
  a1 = function () {
    var t;
    i1 && (t = console).debug.apply(t, arguments);
  },
  gu = {},
  o1 = "@atlaskit/platform-feature-flags",
  yi = "__PLATFORM_FEATURE_FLAGS__",
  ch = typeof process < "u" && typeof gu < "u",
  s1 = ch ? gu.ENABLE_PLATFORM_FF === "true" : !1,
  u1 = ch ? gu.STORYBOOK_ENABLE_PLATFORM_FF === "true" : !1,
  c1 = s1 || u1,
  l1 = { booleanResolver: void 0 },
  mi = typeof window < "u" ? window : globalThis;
mi[yi] = mi[yi] || l1;
function d1(e) {
  if (c1)
    return (
      a1(
        '[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',
        o1,
        e,
      ),
      !0
    );
  try {
    var t, r, n;
    if (
      ((t = mi[yi]) === null || t === void 0 ? void 0 : t.booleanResolver) === void 0 ||
      ((r = mi[yi]) === null || r === void 0 ? void 0 : r.booleanResolver) === null
    )
      return Gs.checkGate(e);
    var i = (n = mi[yi]) === null || n === void 0 ? void 0 : n.booleanResolver(e);
    return typeof i != "boolean"
      ? (console.warn("".concat(e, " resolved to a non-boolean value, returning false for safety")),
        !1)
      : i;
  } catch {
    return !1;
  }
}
function ot(e) {
  return d1(e);
}
var f1 = function () {
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
    return (e === void 0 && (e = ""), { value: 1, prefix: e, uid: f1() });
  },
  v1 = lh(),
  p1 = m.createContext(lh()),
  h1 = function (e) {
    return e.value++;
  },
  g1 = function (e) {
    return e ? e.prefix : "";
  },
  _1 = function (e) {
    var t = e || v1,
      r = g1(t),
      n = h1(t),
      i = r + n,
      a = function (o) {
        return i + t.uid(o);
      };
    return { uid: i, gen: a };
  },
  dh = function () {
    var e = m.useContext(p1),
      t = m.useState(function () {
        return _1(e);
      })[0];
    return t;
  },
  b1 = function () {
    var e = dh().uid;
    return e;
  },
  y1 = function () {
    var e = dh().gen;
    return e;
  },
  ps,
  fa = (ps = E.useId) !== null && ps !== void 0 ? ps : void 0;
function m1() {
  return fa && ot("platform-dst-react-18-use-id")
    ? ot("platform-dst-react-18-use-id-selector-safe")
      ? fa().replace(/[:«»]/g, "_")
      : fa()
    : "uid".concat(b1());
}
function w1() {
  if (fa && ot("platform-dst-react-18-use-id")) {
    var e = m1();
    return function (t) {
      return "".concat(e, "-").concat(t.toString());
    };
  }
  return y1();
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
var O1 = {
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
  S1 = ["children"];
function E1(e) {
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
      s = ie(o, S1),
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
var k1 = E1(function () {
    return { mode: "light" };
  }),
  x1 = k1.useTheme;
function R1(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function P1(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var C1 = (function () {
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(P1(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = R1(i);
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
  Ta = "-moz-",
  Z = "-webkit-",
  fh = "comm",
  bu = "rule",
  yu = "decl",
  A1 = "@import",
  vh = "@keyframes",
  I1 = "@layer",
  j1 = Math.abs,
  so = String.fromCharCode,
  D1 = Object.assign;
function T1(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^ ye(e, 3)
    : 0;
}
function ph(e) {
  return e.trim();
}
function M1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Hs(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ii(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function mu(e) {
  return e.length;
}
function aa(e, t) {
  return (t.push(e), e);
}
function F1(e, t) {
  return e.map(t).join("");
}
var uo = 1,
  $r = 1,
  hh = 0,
  De = 0,
  ge = 0,
  Xr = "";
function co(e, t, r, n, i, a, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: a,
    line: uo,
    column: $r,
    length: o,
    return: "",
  };
}
function si(e, t) {
  return D1(co("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function L1() {
  return ge;
}
function N1() {
  return ((ge = De > 0 ? ye(Xr, --De) : 0), $r--, ge === 10 && (($r = 1), uo--), ge);
}
function Ne() {
  return ((ge = De < hh ? ye(Xr, De++) : 0), $r++, ge === 10 && (($r = 1), uo++), ge);
}
function St() {
  return ye(Xr, De);
}
function va() {
  return De;
}
function $i(e, t) {
  return Ii(Xr, e, t);
}
function ji(e) {
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
  return ((uo = $r = 1), (hh = gt((Xr = e))), (De = 0), []);
}
function _h(e) {
  return ((Xr = ""), e);
}
function pa(e) {
  return ph($i(De - 1, Ws(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function B1(e) {
  for (; (ge = St()) && ge < 33; ) Ne();
  return ji(e) > 2 || ji(ge) > 3 ? "" : " ";
}
function q1(e, t) {
  for (; --t && Ne() && !(ge < 48 || ge > 102 || (ge > 57 && ge < 65) || (ge > 70 && ge < 97)); );
  return $i(e, va() + (t < 6 && St() == 32 && Ne() == 32));
}
function Ws(e) {
  for (; Ne(); )
    switch (ge) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ws(ge);
        break;
      case 40:
        e === 41 && Ws(e);
        break;
      case 92:
        Ne();
        break;
    }
  return De;
}
function z1(e, t) {
  for (; Ne() && e + ge !== 57; ) if (e + ge === 84 && St() === 47) break;
  return "/*" + $i(t, De - 1) + "*" + so(e === 47 ? e : Ne());
}
function U1(e) {
  for (; !ji(St()); ) Ne();
  return $i(e, De);
}
function $1(e) {
  return _h(ha("", null, null, null, [""], (e = gh(e)), 0, [0], e));
}
function ha(e, t, r, n, i, a, o, u, s) {
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
    switch (((h = b), (b = Ne()))) {
      case 40:
        if (h != 108 && ye(x, d - 1) == 58) {
          Hs((x += ee(pa(b), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += pa(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += B1(h);
        break;
      case 92:
        x += q1(va() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            aa(V1(z1(Ne(), va()), t, r), s);
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
            (_ == -1 && (x = ee(x, /\f/g, "")),
              v > 0 &&
                gt(x) - d &&
                aa(v > 32 ? nf(x + ";", n, r, d - 1) : nf(ee(x, " ", "") + ";", n, r, d - 2), s));
            break;
          case 59:
            x += ";";
          default:
            if ((aa((S = rf(x, t, r, c, l, i, u, y, (O = []), (w = []), d)), a), b === 123))
              if (l === 0) ha(x, t, S, S, O, a, d, u, w);
              else
                switch (p === 99 && ye(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ha(
                      e,
                      S,
                      S,
                      n && aa(rf(e, S, S, 0, 0, i, u, y, i, (O = []), d), w),
                      i,
                      w,
                      d,
                      u,
                      n ? O : w,
                    );
                    break;
                  default:
                    ha(x, S, S, S, [""], w, 0, u, w);
                }
        }
        ((c = l = v = 0), (f = _ = 1), (y = x = ""), (d = o));
        break;
      case 58:
        ((d = 1 + gt(x)), (v = h));
      default:
        if (f < 1) {
          if (b == 123) --f;
          else if (b == 125 && f++ == 0 && N1() == 125) continue;
        }
        switch (((x += so(b)), b * f)) {
          case 38:
            _ = l > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            ((u[c++] = (gt(x) - 1) * _), (_ = 1));
            break;
          case 64:
            (St() === 45 && (x += pa(Ne())), (p = St()), (l = d = gt((y = x += U1(va())))), b++);
            break;
          case 45:
            h === 45 && gt(x) == 2 && (f = 0);
        }
    }
  return a;
}
function rf(e, t, r, n, i, a, o, u, s, c, l) {
  for (var d = i - 1, p = i === 0 ? a : [""], v = mu(p), h = 0, f = 0, g = 0; h < n; ++h)
    for (var _ = 0, b = Ii(e, d + 1, (d = j1((f = o[h])))), y = e; _ < v; ++_)
      (y = ph(f > 0 ? p[_] + " " + b : ee(b, /&\f/g, p[_]))) && (s[g++] = y);
  return co(e, t, r, i === 0 ? bu : u, s, c, l);
}
function V1(e, t, r) {
  return co(e, t, r, fh, so(L1()), Ii(e, 2, -2), 0);
}
function nf(e, t, r, n) {
  return co(e, t, r, yu, Ii(e, 0, n), Ii(e, n + 1, -1), n);
}
function Br(e, t) {
  for (var r = "", n = mu(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function G1(e, t, r, n) {
  switch (e.type) {
    case I1:
      if (e.children.length) break;
    case A1:
    case yu:
      return (e.return = e.return || e.value);
    case fh:
      return "";
    case vh:
      return (e.return = e.value + "{" + Br(e.children, n) + "}");
    case bu:
      e.value = e.props.join(",");
  }
  return gt((r = Br(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function H1(e) {
  var t = mu(e);
  return function (r, n, i, a) {
    for (var o = "", u = 0; u < t; u++) o += e[u](r, n, i, a) || "";
    return o;
  };
}
function W1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function K1(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var Y1 = function (t, r, n) {
    for (var i = 0, a = 0; (i = a), (a = St()), i === 38 && a === 12 && (r[n] = 1), !ji(a); ) Ne();
    return $i(t, De);
  },
  J1 = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (ji(i)) {
        case 0:
          (i === 38 && St() === 12 && (r[n] = 1), (t[n] += Y1(De - 1, r, n)));
          break;
        case 2:
          t[n] += pa(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = St() === 58 ? "&\f" : ""), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += so(i);
      }
    while ((i = Ne()));
    return t;
  },
  X1 = function (t, r) {
    return _h(J1(gh(t), r));
  },
  af = new WeakMap(),
  Q1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !af.get(n)) && !i) {
        af.set(t, !0);
        for (var a = [], o = X1(r, a), u = n.props, s = 0, c = 0; s < o.length; s++)
          for (var l = 0; l < u.length; l++, c++)
            t.props[c] = a[s] ? o[s].replace(/&\f/g, u[l]) : u[l] + " " + o[s];
      }
    }
  },
  Z1 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function bh(e, t) {
  switch (T1(e, t)) {
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
      return Z + e + Ta + e + we + e + e;
    case 6828:
    case 4268:
      return Z + e + we + e + e;
    case 6165:
      return Z + e + we + "flex-" + e + e;
    case 5187:
      return Z + e + ee(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + we + "flex-$1$2") + e;
    case 5443:
      return Z + e + we + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + we + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + we + ee(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + we + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + ee(e, "-grow", "") + Z + e + we + ee(e, "grow", "positive") + e;
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + we + "flex-pack:$3"),
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
      return ee(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
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
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" + Z + "$2-$3$1" + Ta + (ye(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Hs(e, "stretch") ? bh(ee(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, gt(e) - 3 - (~Hs(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Z) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                (ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Z +
                "$2$3$1" +
                we +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return Z + e + we + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + we + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + we + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + we + e + e;
  }
  return e;
}
var eO = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case yu:
          t.return = bh(t.value, t.length);
          break;
        case vh:
          return Br([si(t, { value: ee(t.value, "@", "@" + Z) })], i);
        case bu:
          if (t.length)
            return F1(t.props, function (a) {
              switch (M1(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Br([si(t, { props: [ee(a, /:(read-\w+)/, ":" + Ta + "$1")] })], i);
                case "::placeholder":
                  return Br(
                    [
                      si(t, { props: [ee(a, /:(plac\w+)/, ":" + Z + "input-$1")] }),
                      si(t, { props: [ee(a, /:(plac\w+)/, ":" + Ta + "$1")] }),
                      si(t, { props: [ee(a, /:(plac\w+)/, we + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  tO = [eO],
  rO = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (f) {
        var g = f.getAttribute("data-emotion");
        g.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || tO,
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
      c = [Q1, Z1];
    {
      var l,
        d = [
          G1,
          W1(function (f) {
            l.insert(f);
          }),
        ],
        p = H1(c.concat(i, d)),
        v = function (g) {
          return Br($1(g), p);
        };
      s = function (g, _, b, y) {
        ((l = b), v(g ? g + "{" + _.styles + "}" : _.styles), y && (h.inserted[_.name] = !0));
      };
    }
    var h = {
      key: r,
      sheet: new C1({
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
  te = {};
var of;
function nO() {
  if (of) return te;
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
    (te.AsyncMode = s),
    (te.ConcurrentMode = c),
    (te.ContextConsumer = u),
    (te.ContextProvider = o),
    (te.Element = t),
    (te.ForwardRef = l),
    (te.Fragment = n),
    (te.Lazy = h),
    (te.Memo = v),
    (te.Portal = r),
    (te.Profiler = a),
    (te.StrictMode = i),
    (te.Suspense = d),
    (te.isAsyncMode = function (w) {
      return O(w) || y(w) === s;
    }),
    (te.isConcurrentMode = O),
    (te.isContextConsumer = function (w) {
      return y(w) === u;
    }),
    (te.isContextProvider = function (w) {
      return y(w) === o;
    }),
    (te.isElement = function (w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }),
    (te.isForwardRef = function (w) {
      return y(w) === l;
    }),
    (te.isFragment = function (w) {
      return y(w) === n;
    }),
    (te.isLazy = function (w) {
      return y(w) === h;
    }),
    (te.isMemo = function (w) {
      return y(w) === v;
    }),
    (te.isPortal = function (w) {
      return y(w) === r;
    }),
    (te.isProfiler = function (w) {
      return y(w) === a;
    }),
    (te.isStrictMode = function (w) {
      return y(w) === i;
    }),
    (te.isSuspense = function (w) {
      return y(w) === d;
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
    (te.typeOf = y),
    te
  );
}
var sf;
function iO() {
  return (sf || ((sf = 1), (hs.exports = nO())), hs.exports);
}
var gs, uf;
function aO() {
  if (uf) return gs;
  uf = 1;
  var e = iO(),
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
aO();
var oO = !0;
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
    (n === !1 || oO === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
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
function sO(e) {
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
var uO = {
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
  cO = /[A-Z]|^ms/g,
  lO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  wh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  cf = function (t) {
    return t != null && typeof t != "boolean";
  },
  _s = K1(function (e) {
    return wh(e) ? e : e.replace(cO, "-$&").toLowerCase();
  }),
  lf = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(lO, function (n, i, a) {
            return ((_t = { name: i, styles: a, next: _t }), i);
          });
    }
    return uO[t] !== 1 && !wh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
function Di(e, t, r) {
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
      return dO(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = _t,
          c = r(e);
        return ((_t = s), Di(e, t, c));
      }
      break;
    }
  }
  var l = r;
  if (t == null) return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function dO(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n += Di(e, t, r[i]) + ";";
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
        var c = Di(e, t, o);
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
  if (a == null || a.raw === void 0) ((n = !1), (i += Di(r, t, a)));
  else {
    var o = a;
    i += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (((i += Di(r, t, e[u])), n)) {
      var s = a;
      i += s[u];
    }
  df.lastIndex = 0;
  for (var c = "", l; (l = df.exec(i)) !== null; ) c += "-" + l[1];
  var d = sO(i) + c;
  return { name: d, styles: i, next: _t };
}
var fO = function (t) {
    return t();
  },
  vO = Nl.useInsertionEffect ? Nl.useInsertionEffect : !1,
  Oh = vO || fO,
  Sh = m.createContext(typeof HTMLElement < "u" ? rO({ key: "css" }) : null);
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
  pO = function (t, r) {
    var n = {};
    for (var i in r) Su.call(r, i) && (n[i] = r[i]);
    return ((n[Ks] = t), n);
  },
  hO = function (t) {
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
  gO = Eh(function (e, t, r) {
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
        m.createElement(hO, { cache: t, serialized: u, isStringTag: typeof i == "string" }),
        m.createElement(i, s),
      )
    );
  }),
  _O = gO,
  Ft = function (t, r) {
    var n = arguments;
    if (r == null || !Su.call(r, "css")) return m.createElement.apply(void 0, n);
    var i = n.length,
      a = new Array(i);
    ((a[0] = _O), (a[1] = pO(t, r)));
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
var bO = function e(t) {
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
function yO(e, t, r) {
  var n = [],
    i = yh(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var mO = function (t) {
    var r = t.cache,
      n = t.serializedArr;
    return (
      Oh(function () {
        for (var i = 0; i < n.length; i++) mh(r, n[i], !1);
      }),
      null
    );
  },
  wO = Eh(function (e, t) {
    var r = [],
      n = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        var d = Ou(c, t.registered);
        return (r.push(d), wu(t, d, !1), t.key + "-" + d.name);
      },
      i = function () {
        for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
        return yO(t.registered, n, bO(c));
      },
      a = { css: n, cx: i, theme: m.useContext(kh) },
      o = e.children(a);
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(mO, { cache: t, serializedArr: r }),
      o,
    );
  });
function OO(e, t) {
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
  SO = Ct({
    "&:focus": Ys,
    "&:focus-visible": Ys,
    "&:focus:not(:focus-visible)": { outline: "none" },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: "var(--ds-border-width, 1px)".concat(" solid") },
    },
  }),
  EO = Ct({
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
      a = r ? EO : SO,
      o = typeof n > "u" ? a : n === "on" && i;
    return Ft(wO, null, function (u) {
      var s = u.css,
        c = u.cx;
      return m.Children.only(
        o ? m.cloneElement(t, { className: c([s(o), t.props.className]) }) : t,
      );
    });
  });
Rh.displayName = "FocusRing";
function Dt(e) {
  (e.preventDefault(), e.stopPropagation());
}
var kO = 9;
function ff(e) {
  e.keyCode !== kO && Dt(e);
}
var xO = {
    onMouseDownCapture: Dt,
    onMouseUpCapture: Dt,
    onKeyDownCapture: ff,
    onKeyUpCapture: ff,
    onTouchStartCapture: Dt,
    onTouchEndCapture: Dt,
    onPointerDownCapture: Dt,
    onPointerUpCapture: Dt,
    onClickCapture: Dt,
    onClick: Dt,
  },
  RO = {};
function PO(e) {
  var t = e.isInteractive;
  return t ? RO : xO;
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
function Ce(e) {
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
  CO = { default: Xs.default, compact: Xs.compact, none: "inherit" },
  AO = {
    default: "0 ".concat(Kt + Kt / 4, "px"),
    compact: "0 ".concat(Kt + Kt / 4, "px"),
    none: "0",
  },
  IO = { compact: "0 ".concat(Kt / 4, "px"), default: "0 ".concat(Kt / 4, "px"), none: "0" },
  jO = { default: "middle", compact: "middle", none: "baseline" },
  Ph = { content: "0 ".concat(Kt / 4, "px"), icon: "0 ".concat(Kt / 4, "px") },
  Ch = {
    borderRadius: "inherit",
    inset: "var(--ds-space-0, 0px)",
    borderStyle: "solid",
    borderWidth: "var(--ds-border-width, 1px)",
    pointerEvents: "none",
    position: "absolute",
  },
  DO = {
    background: "var(--ds-background-neutral-subtle, #00000000)",
    color: "var(--ds-text, #292A2E)",
    "&::after": Ce(Ce({}, Ch), {}, { content: '""', borderColor: "var(--ds-border, #0B120E24)" }),
    "&:hover": { background: "var(--ds-background-neutral-hovered, #0B120E24)" },
    "&:active": { background: "var(--ds-background-neutral-pressed, #080F214A)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-neutral-subtle, #00000000)",
    },
    "&:disabled[disabled]": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:hover": { background: "var(--ds-background-neutral-subtle, #00000000)" },
    "&:disabled[disabled]:active": { background: "var(--ds-background-neutral-subtle, #00000000)" },
  },
  TO = {
    background: "var(--ds-background-brand-bold, #1868DB)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-brand-bold-hovered, #1558BC)" },
    "&:active": { background: "var(--ds-background-brand-bold-pressed, #144794)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-brand-bold, #1868DB)",
    },
  },
  MO = {
    background: "transparent",
    color: "var(--ds-link, #1868DB)",
    "&:hover": { color: "var(--ds-link, #1868DB)", textDecoration: "underline" },
    "&:active": { color: "var(--ds-link-pressed, #1558BC)", textDecoration: "underline" },
  },
  FO = {
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
  NO = {
    background: "var(--ds-background-warning-bold, #FBC828)",
    color: "var(--ds-text-warning-inverse, #292A2E)",
    "&:hover": { background: "var(--ds-background-warning-bold-hovered, #FCA700)" },
    "&:active": { background: "var(--ds-background-warning-bold-pressed, #F68909)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-warning-bold, #FBC828)",
    },
  },
  BO = {
    background: "var(--ds-background-danger-bold, #C9372C)",
    color: "var(--ds-text-inverse, #FFFFFF)",
    "&:hover": { background: "var(--ds-background-danger-bold-hovered, #AE2E24)" },
    "&:active": { background: "var(--ds-background-danger-bold-pressed, #872821)" },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: "var(--ds-background-danger-bold, #C9372C)",
    },
  },
  qO = {
    background: "var(--ds-background-selected, #E9F2FE)",
    color: "var(--ds-text-selected, #1868DB)",
    "&:not([disabled])::after": Ce(
      Ce({}, Ch),
      {},
      { content: '""', borderColor: "var(--ds-border-selected, #1868DB)" },
    ),
  },
  zO = { '&[data-has-overlay="true"]': { cursor: "default", textDecoration: "none" } };
function UO(e) {
  var t = e.appearance,
    r = e.spacing,
    n = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Ce(
    Ce(
      {
        alignItems: "baseline",
        borderWidth: 0,
        borderRadius: ot("platform-dst-shape-theme-default")
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
        lineHeight: CO[r],
        padding: a ? IO[r] : AO[r],
        verticalAlign: jO[r],
        width: i ? "100%" : "auto",
        justifyContent: "center",
      },
      n
        ? qO
        : Ce(
            Ce(
              Ce(
                Ce(
                  Ce(
                    Ce(
                      Ce(Ce({}, t === "default" && DO), t === "primary" && TO),
                      t === "link" && MO,
                    ),
                    t === "subtle" && FO,
                  ),
                  t === "subtle-link" && LO,
                ),
                t === "warning" && NO,
              ),
              t === "danger" && BO,
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
            zO,
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
function $O(e) {
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
function VO(e) {
  var t = e.hasOverlay;
  return Ct({ opacity: t ? 0 : 1, transition: "opacity 0.3s" });
}
var GO = {
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
  HO = [
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
  WO = { "> *": { pointerEvents: "none" } },
  KO = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-025, 2px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-050, 4px)",
    marginInlineStart: "var(--ds-space-negative-025, -2px)",
  }),
  YO = Ct({
    "--ds--button--new-icon-padding-end": "var(--ds-space-050, 4px)",
    "--ds--button--new-icon-padding-start": "var(--ds-space-025, 2px)",
    marginInlineEnd: "var(--ds-space-negative-025, -2px)",
  }),
  hf = function (t, r) {
    return !t || Eu(t) ? null : r;
  },
  JO = function (t, r) {
    return Eu(t) ? t : t ? Ft("span", { css: r }, t) : null;
  },
  XO = E.forwardRef(function (t, r) {
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
      x = S === void 0 ? Oe : S,
      D = t.onFocus,
      I = t.onMouseDown,
      C = I === void 0 ? Oe : I,
      T = t.overlay;
    t.shouldFitContainer;
    var U = t.spacing,
      z = U === void 0 ? "default" : U,
      G = t.tabIndex,
      Q = G === void 0 ? 0 : G,
      H = t.type,
      q = H === void 0 ? (d ? void 0 : "button") : H,
      K = t.testId,
      N = ie(t, HO),
      $ = m.useRef(),
      M = m.useCallback(
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
    OO($, u);
    var ce = m.useContext(vu),
      ke = m.useCallback(
        function (he, pt) {
          (ce && ce.tracePress(g, he.timeStamp), x(he, pt));
        },
        [x, ce, g],
      ),
      ae = Ci({
        fn: ke,
        action: "clicked",
        componentName: "button",
        packageName: "@atlaskit/button",
        packageVersion: "0.0.0-development",
        analyticsData: n,
      }),
      pe = m.useCallback(
        function (he) {
          (he.preventDefault(), C(he));
        },
        [C],
      );
    m.useEffect(
      function () {
        var he = $.current;
        b && he && he === document.activeElement && he.blur();
      },
      [b],
    );
    var le = !!T,
      me = Ct(VO({ hasOverlay: le })),
      Se = !b && !le,
      vt = {};
    return (
      (O || b || a === "warning") &&
        (vt = {
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
          re(
            {},
            N,
            {
              ref: M,
              className: l,
              css: [s, Se ? null : WO],
              "data-has-overlay": le ? !0 : void 0,
              "data-testid": K,
              disabled: b,
              href: Se ? d : void 0,
              onBlur: w,
              onClick: ae,
              onFocus: D,
              onMouseDown: pe,
              tabIndex: b ? -1 : Q,
              type: q,
            },
            PO({ isInteractive: Se }),
          ),
          f ? Ft("span", { css: [me, pf({ spacing: z }), hf(c, KO)] }, f) : null,
          JO(c, [me, $O({ spacing: z })]),
          h ? Ft("span", { css: [me, pf({ spacing: z }), hf(c, YO)] }, h) : null,
          T ? Ft("span", { css: [GO, vt] }, T) : null,
        ),
      )
    );
  });
function QO(e) {
  var t = e.children,
    r = e.iconBefore,
    n = e.iconAfter;
  return Eu(t) ? !0 : t ? !1 : !!((r && !n) || (!r && n));
}
var ZO = [
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
        d = l === void 0 ? Oe : l,
        p = t.onMouseUp,
        v = p === void 0 ? Oe : p,
        h = t.shouldFitContainer,
        f = h === void 0 ? !1 : h,
        g = t.spacing,
        _ = g === void 0 ? "default" : g,
        b = ie(t, ZO),
        y = x1(),
        O = y.mode,
        w = QO({ children: a, iconBefore: o, iconAfter: u }),
        S = m.useState(!1),
        x = J(S, 2),
        D = x[0],
        I = x[1],
        C = m.useCallback(
          function (z) {
            (d(z), gf && I(!0));
          },
          [d, I],
        ),
        T = m.useCallback(
          function (z) {
            (v(z), gf && I(!1));
          },
          [v, I],
        ),
        U = m.useMemo(
          function () {
            return UO({
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
        XO,
        re({}, b, {
          ref: r,
          appearance: i,
          buttonCss: U,
          children: a,
          "data-firefox-is-active": D ? !0 : void 0,
          iconAfter: u,
          iconBefore: o,
          isSelected: c,
          onMouseDown: C,
          onMouseUp: T,
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
function eS(e) {
  return E.createElement(ku, re({}, e, { appearance: "subtle" }));
}
var tS = { container: "_1e0c1txw _kqswh2mm" };
function rS(e) {
  var t = e.key,
    r = e.testId,
    n = e.from,
    i = e.to;
  return E.createElement(
    ao,
    { as: "li", testId: r, key: t, xcss: tS.container, paddingInline: "space.100" },
    E.createElement(
      Q0,
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
function nS(e, t) {
  return !!(e === t || (yf(e) && yf(t)));
}
function iS(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!nS(e[r], t[r])) return !1;
  return !0;
}
function aS(e, t) {
  t === void 0 && (t = iS);
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
var oS = function (t, r, n, i) {
  var a = n.max,
    o = n.ellipsis,
    u = n.transform,
    s = t.length,
    c = s > a,
    l = c && a - 4 < r,
    d = c && r < s - a + 3,
    p = aS(function () {
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
      Me(p(0, 1)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: 2, to: s - v })],
      Me(p(s - v)),
    );
  }
  if (!l && d) {
    var h = a - 2;
    return [].concat(
      Me(p(0, h)),
      [o({ key: "ellipsis-1", testId: i && "".concat(i, "-ellipsis"), from: h + 1, to: s - 1 })],
      Me(p(s - 1)),
    );
  }
  var f = a - 4;
  return [].concat(
    Me(p(0, 1)),
    [
      o({
        key: "ellipsis-1",
        testId: i && "".concat(i, "-ellipsis"),
        from: 2,
        to: r - Math.floor(f / 2),
      }),
    ],
    Me(p(r - Math.floor(f / 2), r + f - 1)),
    [o({ key: "ellipsis-2", testId: i && "".concat(i, "-ellipsis"), from: r + 3, to: s - 1 })],
    Me(p(s - 1)),
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
function sS(e) {
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
  uS = {
    componentName: "pagination",
    packageName: "@atlaskit/pagination",
    packageVersion: "16.2.0",
  };
function wf(e) {
  var t = e.chevronDirection,
    r = t === "left" ? y0 : O0;
  return E.createElement(
    ao,
    { as: "span", xcss: Qs.navigatorIconWrapper },
    E.createElement(r, { label: "", color: "currentColor", size: "small" }),
  );
}
function cS(e, t) {
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
    O = y === void 0 ? Oe : y,
    w = e.pages,
    S = e.getPageLabel,
    x = e.renderEllipsis,
    D = x === void 0 ? rS : x,
    I = e.analyticsContext,
    C = e.testId,
    T = e.isDisabled,
    U = f0(o, function () {
      return a || 0;
    }),
    z = J(U, 2),
    G = z[0],
    Q = z[1],
    H = Ci(
      sS(
        {
          fn: function (N, $) {
            var M = N.event,
              ce = N.selectedPageIndex;
            (o === void 0 && Q(ce), O && O(M, w[ce], $));
          },
          action: "changed",
          actionSubject: "pageNumber",
          analyticsData: I,
        },
        uS,
      ),
    ),
    q = function (N, $, M) {
      var ce = w[G],
        ke = "".concat(l, " ").concat(S ? S(N, $) : N),
        ae = N === ce;
      return E.createElement(
        da,
        { as: "li", xcss: Qs.paginationMenuItem, key: "page-".concat(S ? S(N, $) : $) },
        E.createElement(
          eS,
          {
            component: n.Page,
            onClick: function (le) {
              return H({ event: le, selectedPageIndex: $ });
            },
            "aria-current": ae ? "page" : void 0,
            "aria-label": ke,
            isSelected: ae,
            isDisabled: T,
            page: N,
            testId:
              M &&
              ""
                .concat(M, "--")
                .concat(ae ? "current-" : "", "page-")
                .concat($),
          },
          S ? S(N, $) : N,
        ),
      );
    };
  return E.createElement(
    ao,
    { testId: C, style: g, ref: t, "aria-label": s, as: "nav" },
    E.createElement(
      da,
      { space: "space.0", alignBlock: "center" },
      E.createElement(_f, {
        key: "left-navigator",
        component: n.Previous,
        onClick: function (N) {
          return H({ event: N, selectedPageIndex: G - 1 });
        },
        isDisabled: T || G === 0,
        iconBefore: E.createElement(wf, { chevronDirection: "left" }),
        "aria-label": p,
        testId: C && "".concat(C, "--left-navigator"),
      }),
      E.createElement(
        da,
        { space: "space.0", alignBlock: "baseline", as: "ul", xcss: Qs.paginationMenu },
        oS(w, G, { max: b, ellipsis: D, transform: q }, C),
      ),
      E.createElement(_f, {
        key: "right-navigator",
        component: n.Next,
        onClick: function (N) {
          return H({ event: N, selectedPageIndex: G + 1 });
        },
        isDisabled: T || G === w.length - 1,
        iconBefore: E.createElement(wf, { chevronDirection: "right" }),
        "aria-label": h,
        testId: C && "".concat(C, "--right-navigator"),
      }),
    ),
  );
}
var lS = m.memo(m.forwardRef(cS));
function dS(e, t, r) {
  return (
    (t = X(t)),
    ze(e, Ah() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var fS = (function (e) {
    function t() {
      var r;
      fe(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = dS(this, t, [].concat(i))),
        R(r, "onChange", function (o, u, s) {
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
              l = Me(Array(i)).map(function (p, v) {
                return v + 1;
              }),
              d = o - 1;
            return E.createElement(lS, {
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
  vS = ["isRanking", "testId"],
  pS = [
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
function ui(e) {
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
  hS = function (t) {
    var r = t.isRanking,
      n = t.testId,
      i = ie(t, vS);
    return m.createElement(
      "thead",
      re({ "data-testid": n }, i, { className: P(["_179rglyw", r && "_1e0c1ule"]) }),
    );
  },
  gS = m.forwardRef(function (e, t) {
    var r = e.width,
      n = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var u = e.style,
      s = e.testId,
      c = ie(e, pS),
      l = ui(
        ui(ui({}, u), r && zp({ width: r })),
        {},
        R({}, Sf, "var(--ds-text-subtlest, #6B6E76)"),
      ),
      d = i === _r,
      p = i === Ia,
      v = function () {
        if (d) return "ascending";
        if (p) return "descending";
      },
      h = n ? "th" : "td";
    return m.createElement(
      h,
      re({ "aria-sort": v(), onClick: void 0, ref: t, "data-testid": s }, c, {
        className: P([
          "_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t",
          "_11c8dcr7 _179r1uh4 _mqm2glyw _kqswh2mm _syaz12fi _k48pmoej _y3gn1e5h _s7n4nkob _1ygbd0i9",
          "_1bsb8a2a",
          a && o && "_1bto1l2s _o5721q9c",
          a && "_1reo15vq _18m915vq",
        ]),
        style: ui(
          ui({}, l),
          {},
          { "--_17ckjys": Bp("var(--ds-text-subtle, ".concat("var(".concat(Sf, ")"), ")")) },
        ),
      }),
      n,
    );
  });
function _S(e, t, r) {
  return (
    (t = X(t)),
    ze(e, Ih() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
function bS(e) {
  return (function (t) {
    function r() {
      var n;
      fe(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (n = _S(this, r, [].concat(a))),
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
var ci = {},
  Ef;
function yS() {
  if (Ef) return ci;
  ((Ef = 1), Object.defineProperty(ci, "__esModule", { value: !0 }), (ci.default = void 0));
  var e = r(yr()),
    t = r(io);
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
  return ((n.displayName = "ArrowDownIcon"), (ci.default = n), ci);
}
var mS = yS();
const wS = Xt(mS);
var li = {},
  kf;
function OS() {
  if (kf) return li;
  ((kf = 1), Object.defineProperty(li, "__esModule", { value: !0 }), (li.default = void 0));
  var e = r(yr()),
    t = r(io);
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
  return ((n.displayName = "ArrowUpIcon"), (li.default = n), li);
}
var SS = OS();
const ES = Xt(SS);
var kS = "Escape";
function xS(e) {
  var t = e.onClose,
    r = e.isDisabled,
    n = m.useRef(!1),
    i = m.useCallback(
      function (o) {
        r || n.current || o.key !== kS || ((n.current = !0), t(o));
      },
      [t, r],
    ),
    a = m.useCallback(function () {
      n.current = !1;
    }, []);
  m.useEffect(
    function () {
      if (!r)
        return oo.bindAll(
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
function di(e) {
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
var RS = m.createContext(null),
  PS = m.createContext(null);
function CS() {
  var e = m.useContext(PS);
  return e;
}
function AS(e) {
  var t = e.isOpen,
    r = e.type,
    n = e.onClose,
    i = m.useContext(RS),
    a = CS();
  m.useEffect(
    function () {
      if (i !== null && t) return i.onClose(n, { namespace: a, type: r });
    },
    [i, t, a, n, r],
  );
}
var hi = { none: 0, small: 100, medium: 350, large: 700 },
  ys = 0.5,
  IS = { none: hi.none, small: hi.small * ys, medium: hi.medium * ys, large: hi.large * ys },
  jS = function () {
    return typeof window < "u" && "matchMedia" in window;
  },
  DS = function () {
    if (!jS()) return !1;
    var t = window.matchMedia("(prefers-reduced-motion: reduce)"),
      r = t.matches;
    return r;
  },
  TS = function (t) {
    if (t.cleanup !== "next-effect") return [];
  },
  MS = function () {
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
      }, TS(t)),
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
  FS = function (t, r) {
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
  NS = function (t, r) {
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
      o = J(a, 2),
      u = o[0],
      s = o[1],
      c = m.useState([]),
      l = J(c, 2),
      d = l[0],
      p = l[1],
      v = m.useState(function () {
        return { appear: r, isExiting: !1 };
      }),
      h = J(v, 2),
      f = h[0],
      g = h[1];
    if (
      (m.useEffect(function () {
        f.appear || g({ appear: !0, isExiting: !1 });
      }, []),
      typeof u == "boolean")
    )
      return n;
    var _ = J(u, 2),
      b = _[0],
      y = _[1],
      O = Rf(b),
      w = Rf(y);
    y !== n && s([y, n]);
    var S = NS(w, O),
      x = !!S.size,
      D = w;
    if ((x && (D = FS(w, O)), i))
      if (d.length) D = d;
      else {
        var I = D.filter(function (C) {
          return S.has(C.key);
        });
        I.length && p(I);
      }
    return (
      S.size
        ? (D = D.map(function (C) {
            var T = S.has(C.key);
            return xf(C, {
              appear: !0,
              isExiting: T,
              onFinish: T
                ? function () {
                    (S.delete(C.key), S.size === 0 && (s([null, n]), p([])));
                  }
                : void 0,
            });
          }))
        : (D = D.map(function (C) {
            return xf(C, f);
          })),
      D
    );
  }),
  BS = function () {
    return m.useContext(Dh);
  };
Th.displayName = "ExitingPersistence";
function qS() {
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
var zS = m.createContext(function () {
    return { isReady: !0, delay: 0, ref: Oe };
  }),
  US = function () {
    var t = qS(),
      r = m.useContext(zS);
    return r(t);
  },
  $S = function (t) {
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
      v = US(),
      h = BS(),
      f = h.isExiting,
      g = h.onFinish,
      _ = h.appear,
      b = MS(),
      y = c || !v.isReady,
      O = f ? 0 : v.delay,
      w = f ? "exiting" : "entering",
      S = m.useState(_),
      x = J(S, 2),
      D = x[0],
      I = x[1];
    return (
      m.useEffect(
        function () {
          var C = !1;
          if (!y) {
            if (!_) {
              l && l(w);
              return;
            }
            var T = function () {
              (w === "exiting" && g?.(), C || I(!1), l?.(w));
            };
            if (DS()) {
              T();
              return;
            }
            return (
              I(!0),
              b(T, f ? IS[p] : hi[p] + O),
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
          className: D
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
  VS = { top: "bottom", bottom: "top", left: "right", right: "left" },
  GS = function (t) {
    var r = t.children,
      n = t.duration,
      i = n === void 0 ? "large" : n,
      a = t.entranceDirection,
      o = t.exitDirection,
      u = t.distance,
      s = u === void 0 ? "proportional" : u,
      c = t.onFinish,
      l = t.isPaused,
      d = a !== void 0 ? VS[a] : void 0,
      p =
        o || d
          ? "fade-out-from-".concat(o || d).concat(s === "proportional" ? "" : "-constant")
          : "fade-out";
    return E.createElement(
      $S,
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
  HS = m.createContext();
m.createContext();
var WS = function (t) {
    return Array.isArray(t) ? t[0] : t;
  },
  KS = function (t) {
    if (typeof t == "function") {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      return t.apply(void 0, n);
    }
  },
  YS = function (t, r) {
    if (typeof t == "function") return KS(t, r);
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
  Ae = "top",
  Ze = "bottom",
  et = "right",
  Ie = "left",
  xu = "auto",
  Vi = [Ae, Ze, et, Ie],
  Vr = "start",
  Ti = "end",
  JS = "clippingParents",
  Mh = "viewport",
  fi = "popper",
  XS = "reference",
  Af = Vi.reduce(function (e, t) {
    return e.concat([t + "-" + Vr, t + "-" + Ti]);
  }, []),
  Fh = [].concat(Vi, [xu]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Vr, t + "-" + Ti]);
  }, []),
  QS = "beforeRead",
  ZS = "read",
  eE = "afterRead",
  tE = "beforeMain",
  rE = "main",
  nE = "afterMain",
  iE = "beforeWrite",
  aE = "write",
  oE = "afterWrite",
  sE = [QS, ZS, eE, tE, rE, nE, iE, aE, oE];
function Rt(e) {
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
function br(e) {
  var t = Be(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = Be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ru(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function uE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      i = t.attributes[r] || {},
      a = t.elements[r];
    !Qe(a) ||
      !Rt(a) ||
      (Object.assign(a.style, n),
      Object.keys(i).forEach(function (o) {
        var u = i[o];
        u === !1 ? a.removeAttribute(o) : a.setAttribute(o, u === !0 ? "" : u);
      }));
  });
}
function cE(e) {
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
        !Qe(i) ||
          !Rt(i) ||
          (Object.assign(i.style, u),
          Object.keys(a).forEach(function (s) {
            i.removeAttribute(s);
          }));
      });
    }
  );
}
const lE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: uE,
  effect: cE,
  requires: ["computeStyles"],
};
function Et(e) {
  return e.split("-")[0];
}
var fr = Math.max,
  Ma = Math.min,
  Gr = Math.round;
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
function Lh() {
  return !/^((?!chrome|android).)*safari/i.test(Zs());
}
function Hr(e, t, r) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  var n = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Qe(e) &&
    ((i = (e.offsetWidth > 0 && Gr(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Gr(n.height) / e.offsetHeight) || 1));
  var o = br(e) ? Be(e) : window,
    u = o.visualViewport,
    s = !Lh() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / i,
    l = (n.top + (s && u ? u.offsetTop : 0)) / a,
    d = n.width / i,
    p = n.height / a;
  return { width: d, height: p, top: l, right: c + d, bottom: l + p, left: c, x: c, y: l };
}
function Pu(e) {
  var t = Hr(e),
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
function Bt(e) {
  return Be(e).getComputedStyle(e);
}
function dE(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function Zt(e) {
  return ((br(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function lo(e) {
  return Rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ru(e) ? e.host : null) || Zt(e);
}
function If(e) {
  return !Qe(e) || Bt(e).position === "fixed" ? null : e.offsetParent;
}
function fE(e) {
  var t = /firefox/i.test(Zs()),
    r = /Trident/i.test(Zs());
  if (r && Qe(e)) {
    var n = Bt(e);
    if (n.position === "fixed") return null;
  }
  var i = lo(e);
  for (Ru(i) && (i = i.host); Qe(i) && ["html", "body"].indexOf(Rt(i)) < 0; ) {
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
function Gi(e) {
  for (var t = Be(e), r = If(e); r && dE(r) && Bt(r).position === "static"; ) r = If(r);
  return r && (Rt(r) === "html" || (Rt(r) === "body" && Bt(r).position === "static"))
    ? t
    : r || fE(e) || t;
}
function Cu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wi(e, t, r) {
  return fr(e, Ma(t, r));
}
function vE(e, t, r) {
  var n = wi(e, t, r);
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
var pE = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    qh(typeof t != "number" ? t : zh(t, Vi))
  );
};
function hE(e) {
  var t,
    r = e.state,
    n = e.name,
    i = e.options,
    a = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    u = Et(r.placement),
    s = Cu(u),
    c = [Ie, et].indexOf(u) >= 0,
    l = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = pE(i.padding, r),
      p = Pu(a),
      v = s === "y" ? Ae : Ie,
      h = s === "y" ? Ze : et,
      f = r.rects.reference[l] + r.rects.reference[s] - o[s] - r.rects.popper[l],
      g = o[s] - r.rects.reference[s],
      _ = Gi(a),
      b = _ ? (s === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      y = f / 2 - g / 2,
      O = d[v],
      w = b - p[l] - d[h],
      S = b / 2 - p[l] / 2 + y,
      x = wi(O, S, w),
      D = s;
    r.modifiersData[n] = ((t = {}), (t[D] = x), (t.centerOffset = x - S), t);
  }
}
function gE(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Nh(t.elements.popper, i) && (t.elements.arrow = i)));
}
const _E = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: hE,
  effect: gE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Wr(e) {
  return e.split("-")[1];
}
var bE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yE(e, t) {
  var r = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Gr(r * i) / i || 0, y: Gr(n * i) / i || 0 };
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
    y = Ie,
    O = Ae,
    w = window;
  if (c) {
    var S = Gi(r),
      x = "clientHeight",
      D = "clientWidth";
    if (
      (S === Be(r) &&
        ((S = Zt(r)),
        Bt(S).position !== "static" &&
          u === "absolute" &&
          ((x = "scrollHeight"), (D = "scrollWidth"))),
      (S = S),
      i === Ae || ((i === Ie || i === et) && a === Ti))
    ) {
      O = Ze;
      var I = d && S === w && w.visualViewport ? w.visualViewport.height : S[x];
      ((f -= I - n.height), (f *= s ? 1 : -1));
    }
    if (i === Ie || ((i === Ae || i === Ze) && a === Ti)) {
      y = et;
      var C = d && S === w && w.visualViewport ? w.visualViewport.width : S[D];
      ((v -= C - n.width), (v *= s ? 1 : -1));
    }
  }
  var T = Object.assign({ position: u }, c && bE),
    U = l === !0 ? yE({ x: v, y: f }, Be(r)) : { x: v, y: f };
  if (((v = U.x), (f = U.y), s)) {
    var z;
    return Object.assign(
      {},
      T,
      ((z = {}),
      (z[O] = b ? "0" : ""),
      (z[y] = _ ? "0" : ""),
      (z.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + f + "px)"
          : "translate3d(" + v + "px, " + f + "px, 0)"),
      z),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}), (t[O] = b ? f + "px" : ""), (t[y] = _ ? v + "px" : ""), (t.transform = ""), t),
  );
}
function mE(e) {
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
      variation: Wr(t.placement),
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
const wE = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: mE, data: {} };
var oa = { passive: !0 };
function OE(e) {
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
        l.addEventListener("scroll", r.update, oa);
      }),
    u && s.addEventListener("resize", r.update, oa),
    function () {
      (a &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", r.update, oa);
        }),
        u && s.removeEventListener("resize", r.update, oa));
    }
  );
}
const SE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: OE,
  data: {},
};
var EE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ga(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return EE[t];
  });
}
var kE = { start: "end", end: "start" };
function Df(e) {
  return e.replace(/start|end/g, function (t) {
    return kE[t];
  });
}
function Au(e) {
  var t = Be(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Iu(e) {
  return Hr(Zt(e)).left + Au(e).scrollLeft;
}
function xE(e, t) {
  var r = Be(e),
    n = Zt(e),
    i = r.visualViewport,
    a = n.clientWidth,
    o = n.clientHeight,
    u = 0,
    s = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var c = Lh();
    (c || (!c && t === "fixed")) && ((u = i.offsetLeft), (s = i.offsetTop));
  }
  return { width: a, height: o, x: u + Iu(e), y: s };
}
function RE(e) {
  var t,
    r = Zt(e),
    n = Au(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = fr(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    o = fr(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    u = -n.scrollLeft + Iu(e),
    s = -n.scrollTop;
  return (
    Bt(i || r).direction === "rtl" && (u += fr(r.clientWidth, i ? i.clientWidth : 0) - a),
    { width: a, height: o, x: u, y: s }
  );
}
function ju(e) {
  var t = Bt(e),
    r = t.overflow,
    n = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Uh(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0
    ? e.ownerDocument.body
    : Qe(e) && ju(e)
      ? e
      : Uh(lo(e));
}
function Oi(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Uh(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Be(n),
    o = i ? [a].concat(a.visualViewport || [], ju(n) ? n : []) : n,
    u = t.concat(o);
  return i ? u : u.concat(Oi(lo(o)));
}
function eu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function PE(e, t) {
  var r = Hr(e, !1, t === "fixed");
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
  return t === Mh ? eu(xE(e, r)) : br(t) ? PE(t, r) : eu(RE(Zt(e)));
}
function CE(e) {
  var t = Oi(lo(e)),
    r = ["absolute", "fixed"].indexOf(Bt(e).position) >= 0,
    n = r && Qe(e) ? Gi(e) : e;
  return br(n)
    ? t.filter(function (i) {
        return br(i) && Nh(i, n) && Rt(i) !== "body";
      })
    : [];
}
function AE(e, t, r, n) {
  var i = t === "clippingParents" ? CE(e) : [].concat(t),
    a = [].concat(i, [r]),
    o = a[0],
    u = a.reduce(
      function (s, c) {
        var l = Tf(e, c, n);
        return (
          (s.top = fr(l.top, s.top)),
          (s.right = Ma(l.right, s.right)),
          (s.bottom = Ma(l.bottom, s.bottom)),
          (s.left = fr(l.left, s.left)),
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
    a = n ? Wr(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (i) {
    case Ae:
      s = { x: o, y: t.y - r.height };
      break;
    case Ze:
      s = { x: o, y: t.y + t.height };
      break;
    case et:
      s = { x: t.x + t.width, y: u };
      break;
    case Ie:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = i ? Cu(i) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (a) {
      case Vr:
        s[c] = s[c] - (t[l] / 2 - r[l] / 2);
        break;
      case Ti:
        s[c] = s[c] + (t[l] / 2 - r[l] / 2);
        break;
    }
  }
  return s;
}
function Mi(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = n === void 0 ? e.placement : n,
    a = r.strategy,
    o = a === void 0 ? e.strategy : a,
    u = r.boundary,
    s = u === void 0 ? JS : u,
    c = r.rootBoundary,
    l = c === void 0 ? Mh : c,
    d = r.elementContext,
    p = d === void 0 ? fi : d,
    v = r.altBoundary,
    h = v === void 0 ? !1 : v,
    f = r.padding,
    g = f === void 0 ? 0 : f,
    _ = qh(typeof g != "number" ? g : zh(g, Vi)),
    b = p === fi ? XS : fi,
    y = e.rects.popper,
    O = e.elements[h ? b : p],
    w = AE(br(O) ? O : O.contextElement || Zt(e.elements.popper), s, l, o),
    S = Hr(e.elements.reference),
    x = $h({ reference: S, element: y, placement: i }),
    D = eu(Object.assign({}, y, x)),
    I = p === fi ? D : S,
    C = {
      top: w.top - I.top + _.top,
      bottom: I.bottom - w.bottom + _.bottom,
      left: w.left - I.left + _.left,
      right: I.right - w.right + _.right,
    },
    T = e.modifiersData.offset;
  if (p === fi && T) {
    var U = T[i];
    Object.keys(C).forEach(function (z) {
      var G = [et, Ze].indexOf(z) >= 0 ? 1 : -1,
        Q = [Ae, Ze].indexOf(z) >= 0 ? "y" : "x";
      C[z] += U[Q] * G;
    });
  }
  return C;
}
function IE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    i = r.boundary,
    a = r.rootBoundary,
    o = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? Fh : s,
    l = Wr(n),
    d = l
      ? u
        ? Af
        : Af.filter(function (h) {
            return Wr(h) === l;
          })
      : Vi,
    p = d.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  p.length === 0 && (p = d);
  var v = p.reduce(function (h, f) {
    return ((h[f] = Mi(e, { placement: f, boundary: i, rootBoundary: a, padding: o })[Et(f)]), h);
  }, {});
  return Object.keys(v).sort(function (h, f) {
    return v[h] - v[f];
  });
}
function jE(e) {
  if (Et(e) === xu) return [];
  var t = ga(e);
  return [Df(e), t, Df(t)];
}
function DE(e) {
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
        y = s || (b || !h ? [ga(g)] : jE(g)),
        O = [g].concat(y).reduce(function (ae, pe) {
          return ae.concat(
            Et(pe) === xu
              ? IE(t, {
                  placement: pe,
                  boundary: l,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: f,
                })
              : pe,
          );
        }, []),
        w = t.rects.reference,
        S = t.rects.popper,
        x = new Map(),
        D = !0,
        I = O[0],
        C = 0;
      C < O.length;
      C++
    ) {
      var T = O[C],
        U = Et(T),
        z = Wr(T) === Vr,
        G = [Ae, Ze].indexOf(U) >= 0,
        Q = G ? "width" : "height",
        H = Mi(t, { placement: T, boundary: l, rootBoundary: d, altBoundary: p, padding: c }),
        q = G ? (z ? et : Ie) : z ? Ze : Ae;
      w[Q] > S[Q] && (q = ga(q));
      var K = ga(q),
        N = [];
      if (
        (a && N.push(H[U] <= 0),
        u && N.push(H[q] <= 0, H[K] <= 0),
        N.every(function (ae) {
          return ae;
        }))
      ) {
        ((I = T), (D = !1));
        break;
      }
      x.set(T, N);
    }
    if (D)
      for (
        var $ = h ? 3 : 1,
          M = function (pe) {
            var le = O.find(function (me) {
              var Se = x.get(me);
              if (Se)
                return Se.slice(0, pe).every(function (vt) {
                  return vt;
                });
            });
            if (le) return ((I = le), "break");
          },
          ce = $;
        ce > 0;
        ce--
      ) {
        var ke = M(ce);
        if (ke === "break") break;
      }
    t.placement !== I && ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const TE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: DE,
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
function Ff(e) {
  return [Ae, et, Ze, Ie].some(function (t) {
    return e[t] >= 0;
  });
}
function ME(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Mi(t, { elementContext: "reference" }),
    u = Mi(t, { altBoundary: !0 }),
    s = Mf(o, n),
    c = Mf(u, i, a),
    l = Ff(s),
    d = Ff(c);
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
const FE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ME,
};
function LE(e, t, r) {
  var n = Et(e),
    i = [Ie, Ae].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    o = a[0],
    u = a[1];
  return (
    (o = o || 0),
    (u = (u || 0) * i),
    [Ie, et].indexOf(n) >= 0 ? { x: u, y: o } : { x: o, y: u }
  );
}
function NE(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    i = r.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Fh.reduce(function (l, d) {
      return ((l[d] = LE(d, t.rects, a)), l);
    }, {}),
    u = o[t.placement],
    s = u.x,
    c = u.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o));
}
const BE = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: NE };
function qE(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = $h({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const zE = { name: "popperOffsets", enabled: !0, phase: "read", fn: qE, data: {} };
function UE(e) {
  return e === "x" ? "y" : "x";
}
function $E(e) {
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
    g = Mi(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: l }),
    _ = Et(t.placement),
    b = Wr(t.placement),
    y = !b,
    O = Cu(_),
    w = UE(O),
    S = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    D = t.rects.popper,
    I = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    C =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var z,
        G = O === "y" ? Ae : Ie,
        Q = O === "y" ? Ze : et,
        H = O === "y" ? "height" : "width",
        q = S[O],
        K = q + g[G],
        N = q - g[Q],
        $ = v ? -D[H] / 2 : 0,
        M = b === Vr ? x[H] : D[H],
        ce = b === Vr ? -D[H] : -x[H],
        ke = t.elements.arrow,
        ae = v && ke ? Pu(ke) : { width: 0, height: 0 },
        pe = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Bh(),
        le = pe[G],
        me = pe[Q],
        Se = wi(0, x[H], ae[H]),
        vt = y ? x[H] / 2 - $ - Se - le - C.mainAxis : M - Se - le - C.mainAxis,
        he = y ? -x[H] / 2 + $ + Se + me + C.mainAxis : ce + Se + me + C.mainAxis,
        pt = t.elements.arrow && Gi(t.elements.arrow),
        qt = pt ? (O === "y" ? pt.clientTop || 0 : pt.clientLeft || 0) : 0,
        er = (z = T?.[O]) != null ? z : 0,
        $e = q + vt - er - qt,
        be = q + he - er,
        zt = wi(v ? Ma(K, $e) : K, q, v ? fr(N, be) : N);
      ((S[O] = zt), (U[O] = zt - q));
    }
    if (u) {
      var Ut,
        rt = O === "x" ? Ae : Ie,
        $t = O === "x" ? Ze : et,
        Ee = S[w],
        Te = w === "y" ? "height" : "width",
        xe = Ee + g[rt],
        nt = Ee - g[$t],
        tr = [Ae, Ie].indexOf(_) !== -1,
        Qr = (Ut = T?.[w]) != null ? Ut : 0,
        Hi = tr ? xe : Ee - x[Te] - D[Te] - Qr + C.altAxis,
        Wi = tr ? Ee + x[Te] + D[Te] - Qr - C.altAxis : nt,
        Ki = v && tr ? vE(Hi, Ee, Wi) : wi(v ? Hi : xe, Ee, v ? Wi : nt);
      ((S[w] = Ki), (U[w] = Ki - Ee));
    }
    t.modifiersData[n] = U;
  }
}
const VE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $E,
  requiresIfExists: ["offset"],
};
function GE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function HE(e) {
  return e === Be(e) || !Qe(e) ? Au(e) : GE(e);
}
function WE(e) {
  var t = e.getBoundingClientRect(),
    r = Gr(t.width) / e.offsetWidth || 1,
    n = Gr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function KE(e, t, r) {
  r === void 0 && (r = !1);
  var n = Qe(t),
    i = Qe(t) && WE(t),
    a = Zt(t),
    o = Hr(e, i, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Rt(t) !== "body" || ju(a)) && (u = HE(t)),
      Qe(t) ? ((s = Hr(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : a && (s.x = Iu(a))),
    {
      x: o.left + u.scrollLeft - s.x,
      y: o.top + u.scrollTop - s.y,
      width: o.width,
      height: o.height,
    }
  );
}
function YE(e) {
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
function JE(e) {
  var t = YE(e);
  return sE.reduce(function (r, n) {
    return r.concat(
      t.filter(function (i) {
        return i.phase === n;
      }),
    );
  }, []);
}
function XE(e) {
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
function QE(e) {
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
var Lf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Nf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function ZE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    i = t.defaultOptions,
    a = i === void 0 ? Lf : i;
  return function (u, s, c) {
    c === void 0 && (c = a);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Lf, a),
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
              reference: br(u) ? Oi(u) : u.contextElement ? Oi(u.contextElement) : [],
              popper: Oi(s),
            }));
          var y = JE(QE([].concat(n, l.options.modifiers)));
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
                reference: KE(b, Gi(y), l.options.strategy === "fixed"),
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
                  D = x === void 0 ? {} : x,
                  I = w.name;
                typeof S == "function" &&
                  (l = S({ state: l, options: D, name: I, instance: v }) || l);
              }
            }
          }
        },
        update: XE(function () {
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
var ek = [SE, zE, wE, lE, BE, TE, VE, _E, FE],
  tk = ZE({ defaultModifiers: ek }),
  ms,
  Bf;
function rk() {
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
var nk = rk();
const ik = Xt(nk);
var ak = [],
  ok = function (t, r, n) {
    n === void 0 && (n = {});
    var i = m.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || ak,
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
            Fa.flushSync(function () {
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
          return ik(i.current, p) ? i.current || p : ((i.current = p), p);
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
            var p = n.createPopper || tk,
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
  sk = function () {},
  uk = function () {
    return Promise.resolve(null);
  },
  ck = [];
function lk(e) {
  var t = e.placement,
    r = t === void 0 ? "bottom" : t,
    n = e.strategy,
    i = n === void 0 ? "absolute" : n,
    a = e.modifiers,
    o = a === void 0 ? ck : a,
    u = e.referenceElement,
    s = e.onFirstUpdate,
    c = e.innerRef,
    l = e.children,
    d = m.useContext(HS),
    p = m.useState(null),
    v = p[0],
    h = p[1],
    f = m.useState(null),
    g = f[0],
    _ = f[1];
  m.useEffect(
    function () {
      YS(c, v);
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
    y = ok(u || d, v, b),
    O = y.state,
    w = y.styles,
    S = y.forceUpdate,
    x = y.update,
    D = m.useMemo(
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
          forceUpdate: S || sk,
          update: x || uk,
        };
      },
      [h, _, r, O, w, x, S],
    );
  return WS(l)(D);
}
function dk(e) {
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
            h = J(v, 1),
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
  fk = [
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
function vk() {
  return null;
}
var pk = [0, 8];
function hk(e) {
  var t = e.children,
    r = t === void 0 ? vk : t,
    n = e.offset,
    i = n === void 0 ? pk : n,
    a = e.placement,
    o = a === void 0 ? "bottom-start" : a,
    u = e.referenceElement,
    s = u === void 0 ? void 0 : u,
    c = e.modifiers,
    l = e.strategy,
    d = l === void 0 ? "fixed" : l,
    p = e.shouldFitViewport,
    v = p === void 0 ? !1 : p,
    h = J(i, 2),
    f = h[0],
    g = h[1],
    _ = m.useMemo(
      function () {
        var y = {
            name: "preventOverflow",
            options: { padding: tu, rootBoundary: v ? "viewport" : "document" },
          },
          O = { name: "offset", options: { offset: [f, g] } },
          w = v ? dk({ viewportPadding: tu }) : [];
        return [].concat(fk, [y, O], Me(w));
      },
      [f, g, v],
    ),
    b = m.useMemo(
      function () {
        return c == null ? _ : [].concat(Me(_), Me(c));
      },
      [_, c],
    );
  return E.createElement(lk, { modifiers: b, placement: o, strategy: d, referenceElement: s }, r);
}
var Vh = "atlaskit-portal-container",
  Gh = "body > .atlaskit-portal-container",
  Hh = "atlaskit-portal",
  gk = function (t) {
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
  _k = function (t) {
    Kh().removeChild(t);
  },
  bk = function (t) {
    t.parentElement || Kh().appendChild(t);
  },
  Yh = function () {
    return document !== void 0;
  },
  yk = function (t) {
    if (Yh()) {
      var r = document.createElement("div");
      return ((r.className = Hh), (r.style.zIndex = "".concat(t)), r);
    }
  },
  mk = function () {
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
function wk(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useMemo(
      function () {
        return gk(t);
      },
      [t],
    );
  return (
    bk(n),
    m.useEffect(
      function () {
        return function () {
          _k(n);
        };
      },
      [n],
    ),
    Fa.createPortal(r, n)
  );
}
var Jh = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function Ok(e) {
  var t = e.zIndex,
    r = e.children,
    n = m.useState(null),
    i = J(n, 2),
    a = i[0],
    o = i[1];
  Jh(
    function () {
      var s = yk(t);
      o(s);
      var c = mk();
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
  return a ? Fa.createPortal(u, a) : null;
}
var Sk = function (t) {
    var r = m.useState(!1),
      n = J(r, 2),
      i = n[0],
      a = n[1],
      o = m.useState(function () {
        return t === "layoutEffect" ? Jh : m.useEffect;
      }),
      u = J(o, 1),
      s = u[0];
    return (
      s(function () {
        a(!0);
      }, []),
      i
    );
  },
  Ek = "akPortalMount",
  kk = "akPortalUnmount",
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
  xk = function (t) {
    return qf.hasOwnProperty(t) ? qf[t] : null;
  },
  Rk = function (t, r) {
    var n = { layer: xk(Number(r)), zIndex: r };
    return new CustomEvent(t, { detail: n });
  };
function zf(e, t) {
  var r = Rk(e, t);
  window.dispatchEvent(r);
}
var Pk = function (t) {
  var r = Number(t);
  m.useEffect(
    function () {
      return (
        zf(Ek, r),
        function () {
          zf(kk, r);
        }
      );
    },
    [r],
  );
};
function Ck(e) {
  var t = e.zIndex,
    r = t === void 0 ? 0 : t,
    n = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? "effect" : i,
    o = Sk(a);
  return (
    Pk(r),
    ot("platform_design_system_team_portal_logic_r18_fix")
      ? E.createElement(Ok, { zIndex: r }, n)
      : o
        ? E.createElement(wk, { zIndex: r }, n)
        : null
  );
}
var Si = new Set(),
  Fi = null;
function Uf() {
  if (!Fi) {
    Fi = oo.bindAll(window, [
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
    var e = Array.from(Si);
    e.forEach(function (t) {
      t.onDragStart();
    });
  }
}
function ws() {
  var e;
  ((e = Fi) === null || e === void 0 || e(), (Fi = null));
  var t = Array.from(Si);
  t.forEach(function (r) {
    r.onDragEnd();
  });
}
function Ak() {
  return oo.bindAll(window, [
    { type: "dragstart", listener: Uf },
    { type: "dragenter", listener: Uf },
  ]);
}
var sa = null;
function Ik(e) {
  return (
    sa || (sa = Ak()),
    Si.add(e),
    e.onRegister({ isDragging: Fi !== null }),
    function () {
      if ((Si.delete(e), Si.size === 0)) {
        var r;
        ((r = sa) === null || r === void 0 || r(), (sa = null));
      }
    }
  );
}
var Ei = null;
function gi() {
  Ei != null && (window.clearTimeout(Ei), (Ei = null));
}
function $f(e, t) {
  (gi(),
    (Ei = window.setTimeout(function () {
      ((Ei = null), e());
    }, t)));
}
var ht = null;
function jk(e) {
  var t = "waiting-to-show";
  function r() {
    return !!(ht && ht.entry === e);
  }
  function n() {
    r() && (gi(), (ht = null));
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
        ((t = "shown"), gi());
        return;
      }
      if (t === "hide-animating") {
        ((t = "shown"), gi(), e.show({ isImmediate: !1 }));
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
    (ht && (gi(), ht.entry.hide({ isImmediate: !0 }), ht.entry.done(), (ht = null)),
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
    mousePosition: ot("platform_dst_nav4_side_nav_resize_tooltip_feedback") ? void 0 : l(),
    mousePos:
      e.source.type === "mouse" && ot("platform_dst_nav4_side_nav_resize_tooltip_feedback")
        ? { clientX: e.source.clientX, clientY: e.source.clientY }
        : null,
  };
  return p;
}
function Dk(e, t) {
  var r = w1();
  return t ? "".concat(r(e)) : void 0;
}
var Vf = {
    shortcutSegmentsContainer: "_zulpv77o _1e0c1txw _1q511b66 _85i5v77o",
    shortcutSegment:
      "_11c81o8v _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p",
  },
  Tk = function (t) {
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
        d && m.createElement(Tk, { shortcut: d }),
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
function Mk(e, t) {
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
function Mr(e) {
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
var Fk = O1.tooltip(),
  Kf = {
    componentName: "tooltip",
    packageName: "@atlaskit/tooltip",
    packageVersion: "0.0.0-development",
  },
  Lk = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Nk = function (t) {
    return t.split("-")[0];
  };
function Bk(e) {
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
    _ = g === void 0 ? Oe : g,
    b = e.onHide,
    y = b === void 0 ? Oe : b,
    O = e.canAppear,
    w = e.hideTooltipOnClick,
    S = w === void 0 ? !1 : w,
    x = e.hideTooltipOnMouseDown,
    D = x === void 0 ? !1 : x,
    I = e.analyticsContext,
    C = e.strategy,
    T = C === void 0 ? "fixed" : C,
    U = e.ignoreTooltipPointerEvents,
    z = U === void 0 ? !1 : U,
    G = e.isScreenReaderAnnouncementDisabled,
    Q = G === void 0 ? !1 : G,
    H = e.shortcut,
    q = n === "mouse" || n === "mouse-y" || n === "mouse-x",
    K = q ? a : n,
    N = nd(Mr({ fn: _, action: "displayed", analyticsData: I }, Kf)),
    $ = nd(Mr({ fn: y, action: "hidden", analyticsData: I }, Kf)),
    M = m.useRef(null),
    ce = m.useState("hide"),
    ke = J(ce, 2),
    ae = ke[0],
    pe = ke[1],
    le = m.useRef(null),
    me = m.useRef(null),
    Se = function (ne) {
      ((me.current = ne), (le.current = ne ? ne.firstElementChild : null));
    },
    vt = m.useCallback(function (F) {
      le.current = F;
    }, []),
    he = di(ae),
    pt = di(N),
    qt = di($),
    er = di(f),
    $e = di(O),
    be = m.useRef(!1),
    zt = m.useCallback(function (F) {
      ((M.current = F), (be.current = !1));
    }, []),
    Ut = m.useCallback(
      function () {
        M.current &&
          (be.current && qt.current(), (M.current = null), (be.current = !1), pe("hide"));
      },
      [qt],
    ),
    rt = m.useCallback(
      function () {
        M.current && (M.current.abort(), be.current && qt.current(), (M.current = null));
      },
      [qt],
    );
  m.useEffect(
    function () {
      return function () {
        M.current && rt();
      };
    },
    [rt],
  );
  var $t = m.useRef(!1);
  m.useEffect(function () {
    return Ik({
      onRegister: function (ne) {
        var At = ne.isDragging;
        $t.current = At;
      },
      onDragStart: function () {
        var ne;
        ((ne = M.current) === null || ne === void 0 || ne.requestHide({ isImmediate: !0 }),
          ($t.current = !0));
      },
      onDragEnd: function () {
        $t.current = !1;
      },
    });
  }, []);
  var Ee = m.useCallback(
      function (F) {
        var ne;
        if (!$t.current) {
          if ((M.current && !M.current.isActive() && rt(), M.current && M.current.isActive())) {
            M.current.keep();
            return;
          }
          if (!($e.current && !((ne = $e.current) !== null && ne !== void 0 && ne.call($e)))) {
            var At = {
                source: F,
                delay: er.current,
                show: function (Er) {
                  var en = Er.isImmediate;
                  (be.current || ((be.current = !0), pt.current()),
                    pe(en ? "show-immediate" : "fade-in"));
                },
                hide: function (Er) {
                  var en = Er.isImmediate;
                  pe(en ? "hide" : "before-fade-out");
                },
                done: Ut,
              },
              rr = jk(At);
            zt(rr);
          }
        }
      },
      [$e, er, Ut, zt, rt, pt],
    ),
    Te = m.useCallback(
      function () {
        var F;
        (F = M.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
      },
      [M],
    );
  (xS({ onClose: Te, isDisabled: ae === "hide" || ae === "fade-out" }),
    m.useEffect(
      function () {
        if (ae === "hide") return Oe;
        ae === "before-fade-out" && pe("fade-out");
        var F = oo.bind(window, {
          type: "scroll",
          listener: function () {
            M.current && M.current.requestHide({ isImmediate: !0 });
          },
          options: { capture: !0, passive: !0, once: !0 },
        });
        return F;
      },
      [ae],
    ));
  var xe = m.useCallback(
      function () {
        D && M.current && M.current.requestHide({ isImmediate: !0 });
      },
      [D],
    ),
    nt = m.useCallback(
      function () {
        S && M.current && M.current.requestHide({ isImmediate: !0 });
      },
      [S],
    ),
    tr = m.useCallback(
      function (F) {
        if (!(me.current && F.target === me.current) && !F.defaultPrevented) {
          F.preventDefault();
          var ne = q
            ? {
                type: "mouse",
                mouse: ot("platform_dst_nav4_side_nav_resize_tooltip_feedback")
                  ? void 0
                  : Hf({ left: F.clientX, top: F.clientY }),
                clientX: F.clientX,
                clientY: F.clientY,
              }
            : { type: "keyboard" };
          Ee(ne);
        }
      },
      [q, Ee],
    ),
    Qr = m.useCallback(function (F) {
      (me.current && F.target === me.current) ||
        F.defaultPrevented ||
        (F.preventDefault(), M.current && M.current.requestHide({ isImmediate: !1 }));
    }, []),
    Hi = q
      ? function (F) {
          var ne;
          (ne = M.current) !== null &&
            ne !== void 0 &&
            ne.isActive() &&
            (ot("platform_dst_nav4_side_nav_resize_tooltip_feedback") ||
              (M.current.mousePosition = Hf({ left: F.clientX, top: F.clientY })),
            (M.current.mousePos = { clientX: F.clientX, clientY: F.clientY }));
        }
      : void 0,
    Wi = m.useCallback(function () {
      if (M.current && M.current.isActive()) {
        M.current.keep();
        return;
      }
    }, []),
    Ki = m.useCallback(
      function (F) {
        try {
          if (!F.target.matches(":focus-visible")) return;
        } catch {}
        Ee({ type: "keyboard" });
      },
      [Ee],
    ),
    ng = m.useCallback(function () {
      M.current && M.current.requestHide({ isImmediate: !1 });
    }, []),
    ig = m.useCallback(
      function (F) {
        F === "exiting" &&
          he.current === "fade-out" &&
          M.current &&
          M.current.finishHideAnimation();
      },
      [he],
    ),
    ag = p,
    vo = ae !== "hide" && !!o,
    Tu = !Q && vo,
    Mu = ae !== "hide" && ae !== "fade-out",
    og = m.useCallback(function () {
      var F;
      (F = M.current) === null || F === void 0 || F.requestHide({ isImmediate: !0 });
    }, []);
  AS({ isOpen: vo && Mu, onClose: og });
  var Fu = function () {
      var ne, At;
      if (
        q &&
        (ne = M.current) !== null &&
        ne !== void 0 &&
        ne.mousePos &&
        le.current &&
        ot("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      )
        return Mk(M.current.mousePos, { targetElement: le.current, tooltipPosition: n });
      if (
        q &&
        (At = M.current) !== null &&
        At !== void 0 &&
        At.mousePosition &&
        !ot("platform_dst_nav4_side_nav_resize_tooltip_feedback")
      ) {
        var rr;
        return (rr = M.current) === null || rr === void 0 ? void 0 : rr.mousePosition;
      }
      return le.current || void 0;
    },
    Zr = Dk("tooltip", Tu),
    po = {
      onMouseOver: tr,
      onMouseOut: Qr,
      onMouseMove: Hi,
      onMouseDown: xe,
      onClick: nt,
      onFocus: Ki,
      onBlur: ng,
    };
  v && (po["data-testid"] = "".concat(v, "--container"));
  var Lu = typeof t == "function";
  m.useEffect(
    function () {
      if (!Lu) {
        var F = le.current;
        if (!(!F || !Zr))
          return (
            F.setAttribute("aria-describedby", Zr),
            function () {
              return F.removeAttribute("aria-describedby");
            }
          );
      }
    },
    [Lu, Zr],
  );
  var Nu = Tu
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
          t(Mr(Mr({}, po), {}, { "aria-describedby": Zr, ref: vt })),
          Nu,
        )
      : E.createElement(ag, re({}, po, { ref: Se, role: "presentation" }), t, Nu),
    vo
      ? E.createElement(
          Ck,
          { zIndex: Fk },
          E.createElement(hk, { placement: K, referenceElement: Fu(), strategy: T }, function (F) {
            var ne = F.ref,
              At = F.style,
              rr = F.update,
              ho = F.placement,
              Er = q ? void 0 : Lk[Nk(ho)];
            return E.createElement(
              Th,
              { appear: !0 },
              Mu &&
                E.createElement(
                  GS,
                  {
                    distance: "constant",
                    entranceDirection: Er,
                    exitDirection: Er,
                    onFinish: ig,
                    duration: ae !== "show-immediate" ? "medium" : "none",
                  },
                  function (en) {
                    var sg = en.className;
                    return E.createElement(
                      l,
                      {
                        ref: ne,
                        className: "Tooltip ".concat(sg),
                        style: Mr(Mr({}, At), z && { pointerEvents: "none" }),
                        truncate: s,
                        placement: K,
                        testId: Fu() ? v : v && "".concat(v, "--unresolved"),
                        onMouseOut: Qr,
                        onMouseOver: Wi,
                        shortcut: H,
                      },
                      typeof o == "function" ? o({ update: rr }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var qk = [
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
  vi = {
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
      b = ie(t, qk),
      y = m.useState(!1),
      O = J(y, 2),
      w = O[0],
      S = O[1],
      x = m.useState(!1),
      D = J(x, 2),
      I = D[0],
      C = D[1],
      T = c === l || u !== void 0,
      U = w || T || I,
      z = U && _,
      G = !_ || U || (_ && !I),
      Q = m.useCallback(
        function () {
          C?.(!0);
        },
        [C],
      ),
      H = m.useCallback(
        function () {
          C?.(!1);
        },
        [C],
      ),
      q = m.useCallback(
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
      N = E.createElement(
        ao,
        { xcss: Yf.headCellContainer, onMouseEnter: q, onMouseLeave: K, onFocus: Q, onBlur: H },
        E.createElement(
          Bk,
          { content: u === _r ? p : h },
          E.createElement(
            aw,
            { onClick: s, xcss: vi.buttonWrapper, "aria-roledescription": g },
            E.createElement(
              Da,
              { xcss: z ? vi.hideIconHeaderWrapper : vi.visibleHeaderWrapper },
              E.createElement("span", { className: P([Yf.text]) }, r),
            ),
            G &&
              E.createElement(
                Da,
                { xcss: U ? vi.sortIconVisibleWrapper : vi.sortIconHiddenWrapper },
                u === _r
                  ? E.createElement(ES, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--up--icon"),
                    })
                  : E.createElement(wS, {
                      label: "",
                      color: "var(--ds-text-subtle, #505258)",
                      testId: i && "".concat(i, "--down--icon"),
                    }),
              ),
          ),
        ),
      );
    return E.createElement(
      gS,
      re(
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
  zk = ["isRanking", "refHeight", "refWidth"];
function Uk(e, t, r) {
  return (
    (t = X(t)),
    ze(e, eg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var $k = (function (e) {
    function t() {
      return (fe(this, t), Uk(this, t, arguments));
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
              o = ie(n, zk),
              u = lm(i, a);
            return E.createElement(Zh, re({ inlineStyles: u }, o));
          },
        },
      ])
    );
  })(E.Component),
  Vk = bS($k),
  Gk = ["cells"],
  Hk = [
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
function Wk(e, t, r) {
  return (
    (t = X(t)),
    ze(e, tg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var Kk = (function (e) {
    function t(r) {
      var n;
      return (fe(this, t), (n = Wk(this, t, [r])), (n.state = { activeSortButtonId: null }), n);
    }
    return (
      Ue(t, e),
      ve(t, [
        {
          key: "UNSAFE_componentWillMount",
          value: function () {
            Pa(this.props.sortKey, this.props.head);
          },
        },
        {
          key: "UNSAFE_componentWillReceiveProps",
          value: function (n) {
            (this.props.sortKey !== n.sortKey || this.props.head !== n.head) &&
              Pa(n.sortKey, n.head);
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
            var h = d ? Vk : Zh,
              f = a.cells,
              g = ie(a, Gk);
            return E.createElement(
              hS,
              re({}, g, { isRanking: l, testId: p && "".concat(p, "--head") }),
              E.createElement(
                "tr",
                null,
                f.map(function (_, b) {
                  var y = _.ascendingSortTooltip,
                    O = _.buttonAriaRoleDescription,
                    w = _.colSpan,
                    S = _.content,
                    x = _.descendingSortTooltip,
                    D = _.isIconOnlyHeader,
                    I = _.isSortable,
                    C = _.key,
                    T = _.shouldTruncate,
                    U = _.testId,
                    z = _.width,
                    G = ie(_, Hk),
                    Q = "head-cell-".concat(b),
                    H = function () {
                      (n.setState({ activeSortButtonId: Q }), I && c(_)());
                    };
                  return E.createElement(
                    h,
                    re(
                      {
                        colSpan: w,
                        content: S,
                        isFixedSize: s,
                        isIconOnlyHeader: D,
                        isSortable: !!I,
                        isRanking: l,
                        key: C || b,
                        headCellId: Q,
                        activeSortButtonId: v,
                        onClick: H,
                        testId: U || p,
                        shouldTruncate: T,
                        sortOrder: C === o ? u : void 0,
                        width: z,
                        ascendingSortTooltip: y,
                        descendingSortTooltip: x,
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
  Yk = ["isRankable", "isRanking", "onRankStart", "onRankEnd", "isRankingDisabled"];
function Jk(e) {
  switch (e) {
    case Ia:
      return _r;
    case _r:
      return Ia;
    default:
      return e;
  }
}
var Xk = function (t) {
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
      O = y === void 0 ? Oe : y,
      w = t.onSort,
      S = w === void 0 ? Oe : w,
      x = t.page,
      D = x === void 0 ? 1 : x,
      I = t.emptyView,
      C = t.isRankable,
      T = C === void 0 ? !1 : C,
      U = t.isRankingDisabled,
      z = U === void 0 ? !1 : U,
      G = t.onRankStart,
      Q = G === void 0 ? Oe : G,
      H = t.onRankEnd,
      q = H === void 0 ? Oe : H,
      K = t.loadingSpinnerSize,
      N = t.paginationi18n,
      $ =
        N === void 0
          ? { prev: "Previous Page", next: "Next Page", label: "Pagination", pageLabel: "Page" }
          : N,
      M = m.useState(!1),
      ce = J(M, 2),
      ke = ce[0],
      ae = ce[1],
      pe = m.useRef(null),
      le = Ci({
        fn: S,
        action: "sorted",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      }),
      me = Ci({
        fn: q,
        action: "ranked",
        componentName: "dynamicTable",
        packageName: "@atlaskit/dynamic-table",
        packageVersion: "0.0.0-development",
      });
    m.useEffect(
      function () {
        (Pa(o, n), cm(n));
      },
      [o, n],
    );
    var Se = function (xe) {
        return function () {
          var nt = xe.key;
          if (nt) {
            if (le && T && nt === o && u === Ia) {
              le({ key: null, sortOrder: null, item: xe });
              return;
            }
            var tr = nt !== o ? _r : Jk(u);
            le && le({ key: nt, item: xe, sortOrder: tr });
          }
        };
      },
      vt = function (xe, nt) {
        O(xe, nt);
      },
      he = function (xe) {
        (ae(!0), Q(xe));
      },
      pt = function (xe) {
        (ae(!1), me(xe));
      },
      qt = function () {
        return K || (Mp(a || [], D, b).length > 2 ? ja : Pm);
      },
      er = function () {
        return h ? E.createElement(Tm, { testId: l }) : I && E.createElement(Mm, { testId: l }, I);
      },
      $e = a && a.length,
      be,
      zt = !1;
    (d && Number.isInteger(d) && b && $e && $e <= d
      ? ((be = Math.ceil(d / b)), (zt = !0))
      : (be = $e && b ? Math.ceil($e / b) : 0),
      (be = be < 1 ? 1 : be));
    var Ut = D > be ? be : D,
      rt = !!$e,
      $t = qt(),
      Ee = er();
    return E.createElement(
      E.Fragment,
      null,
      E.createElement(
        Kp,
        {
          isLoading: h && rt,
          spinnerSize: $t,
          targetRef: function () {
            return pe.current;
          },
          testId: l,
          loadingLabel: s,
        },
        E.createElement(
          Im,
          { isFixedSize: g, "aria-label": p, hasDataRow: rt, testId: l, isLoading: h },
          !!r && E.createElement(jm, null, r),
          n &&
            E.createElement(Kk, {
              head: n,
              onSort: Se,
              sortKey: o,
              sortOrder: u,
              isRanking: ke,
              isRankable: T,
              testId: l,
            }),
          rt &&
            E.createElement(Zk, {
              ref: pe,
              highlightedRowIndex: i,
              rows: a,
              head: n,
              sortKey: o,
              sortOrder: u,
              rowsPerPage: b,
              page: Ut,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: zt,
              testId: l,
              isRankable: T,
              isRanking: ke,
              onRankStart: he,
              onRankEnd: pt,
              isRankingDisabled: z || h || !1,
            }),
        ),
      ),
      be <= 1
        ? null
        : E.createElement(
            Dm,
            { testId: l },
            E.createElement(fS, {
              value: Ut,
              onChange: vt,
              total: be,
              i18n: $,
              isDisabled: h,
              testId: l,
            }),
          ),
      !rt &&
        Ee &&
        E.createElement(Hp, { isLoading: h, spinnerSize: ja, testId: l, loadingLabel: s }, Ee),
    );
  },
  Qk = m.lazy(function () {
    return Iv(
      () => import("./body-IDtLYh6Q.js"),
      __vite__mapDeps([2, 3, 1, 4, 5]),
      import.meta.url,
    );
  }),
  Zk = m.forwardRef(function (t, r) {
    var n = t.isRankable,
      i = n === void 0 ? !1 : n,
      a = t.isRanking,
      o = t.onRankStart,
      u = t.onRankEnd,
      s = t.isRankingDisabled,
      c = ie(t, Yk),
      l = i && !c.sortKey,
      d = m.useState(!1),
      p = J(d, 2),
      v = p[0],
      h = p[1];
    m.useEffect(
      function () {
        l && h(!0);
      },
      [l],
    );
    var f = E.createElement(Jm, re({ ref: r }, c));
    return l && v
      ? E.createElement(
          Qm,
          { fallback: f },
          E.createElement(
            m.Suspense,
            { fallback: f },
            E.createElement(
              Qk,
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
function ex(e, t, r) {
  return (
    (t = X(t)),
    ze(e, rg() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r))
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
var fo = (function (e) {
  function t() {
    var r;
    fe(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = ex(this, t, [].concat(i))),
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
        var p = dm(o, c, l, d);
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
            D = s.label;
          return E.createElement(Xk, {
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
            label: D,
          });
        },
      },
    ])
  );
})(E.Component);
R(fo, "defaultProps", {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Oe,
  onSort: Oe,
  rowsPerPage: 1 / 0,
});
const tx = (e, t) => {
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
  Du = (e, t) => ({ cells: tx(e, t) }),
  rx = to(() => {
    const { usersStore: e } = no(),
      t = Du(!0, "SLOW_QUERY"),
      r = e.slowQueries;
    return !r || r.length === 0
      ? k.jsx("div", { children: "SlowQuery is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(fo, {
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
  nx = to(() => {
    const { usersStore: e } = no(),
      t = Du(!0, "PLAN"),
      r = e.plan;
    return !r || r.length === 0
      ? k.jsxs("div", { children: ["$", e.planString] })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(fo, {
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
  ix = to(() => {
    const { usersStore: e } = no(),
      t = Du(!0, "HISTORY"),
      r = e.history;
    return !r || r.length === 0
      ? k.jsx("div", { children: "Query history is EMPTY" })
      : k.jsx("div", {
          children: k.jsxs("div", {
            children: [
              k.jsx(fo, {
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
  He = (e, t) => {
    Pe.showFlag({ id: "error-flag", title: e, type: "error", description: t, isAutoDismiss: !0 });
  };
function ax() {
  const { usersStore: e, stateStore: t } = no();
  if (e.isLoading) return "loading....";
  const r = async () => {
      e.loading();
      try {
        const h = await Pe.invoke("explain");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), He("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    n = async () => {
      e.loading();
      try {
        const h = await Pe.invoke("explainWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), He("explain error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    i = async () => {
      e.loading();
      try {
        const h = await Pe.invoke("explainAnalyze");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), He("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    a = async () => {
      e.loading();
      try {
        const h = await Pe.invoke("explainAnalyzeWith");
        (e.showPlan(h, "Plan does not exists"), t.saveState("PLAN"));
      } catch (h) {
        (console.error(h), He("explain analyze error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    o = async () => {
      e.loading();
      try {
        await Pe.invoke("executeQuery");
      } catch (h) {
        (console.error(h), He("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    u = async () => {
      e.loading();
      try {
        await Pe.invoke("executeQueryWith");
      } catch (h) {
        (console.error(h), He("execute query error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    s = async () => {
      e.loading();
      try {
        await Pe.invoke("optimizeQuery");
      } catch (h) {
        (console.error(h), He("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    c = async () => {
      e.loading();
      try {
        await Pe.invoke("optimizeQueryCTE");
      } catch (h) {
        (console.error(h), He("Optimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    l = async () => {
      e.loading();
      try {
        await Pe.invoke("dropStats");
      } catch (h) {
        (console.error(h), He("dropStats error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    d = async () => {
      e.loading();
      try {
        await Pe.invoke("deOptimizeQuery");
      } catch (h) {
        (console.error(h), He("deoptimize error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    p = async () => {
      e.loading();
      try {
        const h = await Pe.invoke("analyzeQueriesHistory", {
          sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
        });
        (e.saveHistory(h), t.saveState("HISTORY"));
      } catch (h) {
        (console.error(h), He("History error", h.message));
      } finally {
        e.stopLoading();
      }
    },
    v = async () => {
      e.loading();
      try {
        const h = await Pe.invoke("analyzeSlowQueries");
        (e.saveSlowQuery(h), t.saveState("SLOW_QUERY"));
      } catch (h) {
        (console.error(h), He("Slowquery error", h.message));
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
          k.jsx(rx, {}),
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
          k.jsx(ix, {}),
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
          k.jsx(nx, {}),
        ],
      });
    default:
      return k.jsxs("div", { children: ["ERROR: unsupported state ", t.state] });
  }
}
const ox = to(ax),
  sx = document.getElementById("root"),
  ux = ug.createRoot(sx),
  Jf = () => {
    ux.render(k.jsx(Ip, { ...jp, children: k.jsx(ox, {}) }));
  };
Pe.view.theme
  .enable()
  .then(() => {
    Jf();
  })
  .catch((e) => {
    (console.error(e.message), Jf());
  });
export {
  E as R,
  Vm as T,
  Ue as _,
  ve as a,
  Vs as b,
  fe as c,
  ze as d,
  X as e,
  J as f,
  R as g,
  ie as h,
  oo as i,
  Me as j,
  re as k,
  V0 as l,
  Ft as m,
  Ct as n,
  P as o,
  Um as p,
  lm as q,
  m as r,
  Bm as s,
  bS as w,
};
