const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-DSebzXMd.js", "./lodash-vendor-DaE80aqm.js"]),
) => i.map((i) => d[i]);
import { r as _n, c as oo } from "./react-dom-vendor-BXC0oJZi.js";
import { g as io, r as ao } from "./lodash-vendor-DaE80aqm.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const t of o.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = i(n);
    fetch(n.href, o);
  }
})();
var Qe = { exports: {} },
  L = {};
var qt;
function so() {
  if (qt) return L;
  qt = 1;
  var e = _n(),
    r = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(u, l, s) {
    var c,
      g = {},
      m = null,
      d = null;
    (s !== void 0 && (m = "" + s),
      l.key !== void 0 && (m = "" + l.key),
      l.ref !== void 0 && (d = l.ref));
    for (c in l) a.call(l, c) && !o.hasOwnProperty(c) && (g[c] = l[c]);
    if (u && u.defaultProps) for (c in ((l = u.defaultProps), l)) g[c] === void 0 && (g[c] = l[c]);
    return { $$typeof: r, type: u, key: m, ref: d, props: g, _owner: n.current };
  }
  return ((L.Fragment = i), (L.jsx = t), (L.jsxs = t), L);
}
var Ft;
function uo() {
  return (Ft || ((Ft = 1), (Qe.exports = so())), Qe.exports);
}
var E = uo(),
  T = _n(),
  Xe = {},
  St = function (e, r) {
    return (
      (St =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (i, a) {
            i.__proto__ = a;
          }) ||
        function (i, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (i[n] = a[n]);
        }),
      St(e, r)
    );
  };
function yn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  St(e, r);
  function i() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
}
var Ne = function () {
  return (
    (Ne =
      Object.assign ||
      function (r) {
        for (var i, a = 1, n = arguments.length; a < n; a++) {
          i = arguments[a];
          for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
        }
        return r;
      }),
    Ne.apply(this, arguments)
  );
};
function mn(e, r) {
  var i = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (i[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      r.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (i[a[n]] = e[a[n]]);
  return i;
}
function bn(e, r, i, a) {
  var n = arguments.length,
    o = n < 3 ? r : a === null ? (a = Object.getOwnPropertyDescriptor(r, i)) : a,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, r, i, a);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (t = e[u]) && (o = (n < 3 ? t(o) : n > 3 ? t(r, i, o) : t(r, i)) || o);
  return (n > 3 && o && Object.defineProperty(r, i, o), o);
}
function wn(e, r) {
  return function (i, a) {
    r(i, a, e);
  };
}
function En(e, r, i, a, n, o) {
  function t(h) {
    if (h !== void 0 && typeof h != "function") throw new TypeError("Function expected");
    return h;
  }
  for (
    var u = a.kind,
      l = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      s = !r && e ? (a.static ? e : e.prototype) : null,
      c = r || (s ? Object.getOwnPropertyDescriptor(s, a.name) : {}),
      g,
      m = !1,
      d = i.length - 1;
    d >= 0;
    d--
  ) {
    var _ = {};
    for (var f in a) _[f] = f === "access" ? {} : a[f];
    for (var f in a.access) _.access[f] = a.access[f];
    _.addInitializer = function (h) {
      if (m) throw new TypeError("Cannot add initializers after decoration has completed");
      o.push(t(h || null));
    };
    var v = (0, i[d])(u === "accessor" ? { get: c.get, set: c.set } : c[l], _);
    if (u === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((g = t(v.get)) && (c.get = g),
        (g = t(v.set)) && (c.set = g),
        (g = t(v.init)) && n.unshift(g));
    } else (g = t(v)) && (u === "field" ? n.unshift(g) : (c[l] = g));
  }
  (s && Object.defineProperty(s, a.name, c), (m = !0));
}
function Rn(e, r, i) {
  for (var a = arguments.length > 2, n = 0; n < r.length; n++)
    i = a ? r[n].call(e, i) : r[n].call(e);
  return a ? i : void 0;
}
function On(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Pn(e, r, i) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: i ? "".concat(i, " ", r) : r })
  );
}
function Sn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function In(e, r, i, a) {
  function n(o) {
    return o instanceof i
      ? o
      : new i(function (t) {
          t(o);
        });
  }
  return new (i || (i = Promise))(function (o, t) {
    function u(c) {
      try {
        s(a.next(c));
      } catch (g) {
        t(g);
      }
    }
    function l(c) {
      try {
        s(a.throw(c));
      } catch (g) {
        t(g);
      }
    }
    function s(c) {
      c.done ? o(c.value) : n(c.value).then(u, l);
    }
    s((a = a.apply(e, r || [])).next());
  });
}
function Cn(e, r) {
  var i = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    a,
    n,
    o,
    t = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (t.next = u(0)),
    (t.throw = u(1)),
    (t.return = u(2)),
    typeof Symbol == "function" &&
      (t[Symbol.iterator] = function () {
        return this;
      }),
    t
  );
  function u(s) {
    return function (c) {
      return l([s, c]);
    };
  }
  function l(s) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), s[0] && (i = 0)), i; )
      try {
        if (
          ((a = 1),
          n &&
            (o =
              s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
            !(o = o.call(n, s[1])).done)
        )
          return o;
        switch (((n = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return (i.label++, { value: s[1], done: !1 });
          case 5:
            (i.label++, (n = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = i.ops.pop()), i.trys.pop());
            continue;
          default:
            if (
              ((o = i.trys), !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              i = 0;
              continue;
            }
            if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
              i.label = s[1];
              break;
            }
            if (s[0] === 6 && i.label < o[1]) {
              ((i.label = o[1]), (o = s));
              break;
            }
            if (o && i.label < o[2]) {
              ((i.label = o[2]), i.ops.push(s));
              break;
            }
            (o[2] && i.ops.pop(), i.trys.pop());
            continue;
        }
        s = r.call(e, i);
      } catch (c) {
        ((s = [6, c]), (n = 0));
      } finally {
        a = o = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var Ve = Object.create
  ? function (e, r, i, a) {
      a === void 0 && (a = i);
      var n = Object.getOwnPropertyDescriptor(r, i);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[i];
          },
        }),
        Object.defineProperty(e, a, n));
    }
  : function (e, r, i, a) {
      (a === void 0 && (a = i), (e[a] = r[i]));
    };
function jn(e, r) {
  for (var i in e) i !== "default" && !Object.prototype.hasOwnProperty.call(r, i) && Ve(r, e, i);
}
function Ge(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    i = r && e[r],
    a = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && a >= e.length && (e = void 0), { value: e && e[a++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ct(e, r) {
  var i = typeof Symbol == "function" && e[Symbol.iterator];
  if (!i) return e;
  var a = i.call(e),
    n,
    o = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = a.next()).done; ) o.push(n.value);
  } catch (u) {
    t = { error: u };
  } finally {
    try {
      n && !n.done && (i = a.return) && i.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return o;
}
function qn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Ct(arguments[r]));
  return e;
}
function Fn() {
  for (var e = 0, r = 0, i = arguments.length; r < i; r++) e += arguments[r].length;
  for (var a = Array(e), n = 0, r = 0; r < i; r++)
    for (var o = arguments[r], t = 0, u = o.length; t < u; t++, n++) a[n] = o[t];
  return a;
}
function Bn(e, r, i) {
  if (i || arguments.length === 2)
    for (var a = 0, n = r.length, o; a < n; a++)
      (o || !(a in r)) && (o || (o = Array.prototype.slice.call(r, 0, a)), (o[a] = r[a]));
  return e.concat(o || Array.prototype.slice.call(r));
}
function x(e) {
  return this instanceof x ? ((this.v = e), this) : new x(e);
}
function Tn(e, r, i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = i.apply(e, r || []),
    n,
    o = [];
  return (
    (n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", t),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function t(d) {
    return function (_) {
      return Promise.resolve(_).then(d, g);
    };
  }
  function u(d, _) {
    a[d] &&
      ((n[d] = function (f) {
        return new Promise(function (v, h) {
          o.push([d, f, v, h]) > 1 || l(d, f);
        });
      }),
      _ && (n[d] = _(n[d])));
  }
  function l(d, _) {
    try {
      s(a[d](_));
    } catch (f) {
      m(o[0][3], f);
    }
  }
  function s(d) {
    d.value instanceof x ? Promise.resolve(d.value.v).then(c, g) : m(o[0][2], d);
  }
  function c(d) {
    l("next", d);
  }
  function g(d) {
    l("throw", d);
  }
  function m(d, _) {
    (d(_), o.shift(), o.length && l(o[0][0], o[0][1]));
  }
}
function Mn(e) {
  var r, i;
  return (
    (r = {}),
    a("next"),
    a("throw", function (n) {
      throw n;
    }),
    a("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function a(n, o) {
    r[n] = e[n]
      ? function (t) {
          return (i = !i) ? { value: x(e[n](t)), done: !1 } : o ? o(t) : t;
        }
      : o;
  }
}
function An(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    i;
  return r
    ? r.call(e)
    : ((e = typeof Ge == "function" ? Ge(e) : e[Symbol.iterator]()),
      (i = {}),
      a("next"),
      a("throw"),
      a("return"),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i);
  function a(o) {
    i[o] =
      e[o] &&
      function (t) {
        return new Promise(function (u, l) {
          ((t = e[o](t)), n(u, l, t.done, t.value));
        });
      };
  }
  function n(o, t, u, l) {
    Promise.resolve(l).then(function (s) {
      o({ value: s, done: u });
    }, t);
  }
}
function kn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var lo = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  It = function (e) {
    return (
      (It =
        Object.getOwnPropertyNames ||
        function (r) {
          var i = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (i[i.length] = a);
          return i;
        }),
      It(e)
    );
  };
function Dn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var i = It(e), a = 0; a < i.length; a++) i[a] !== "default" && Ve(r, e, i[a]);
  return (lo(r, e), r);
}
function Un(e) {
  return e && e.__esModule ? e : { default: e };
}
function xn(e, r, i, a) {
  if (i === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? a : i === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function Ln(e, r, i, a, n) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? n.call(e, i) : n ? (n.value = i) : r.set(e, i), i);
}
function Nn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Gn(e, r, i) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var a, n;
    if (i) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      a = r[Symbol.asyncDispose];
    }
    if (a === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((a = r[Symbol.dispose]), i && (n = a));
    }
    if (typeof a != "function") throw new TypeError("Object not disposable.");
    (n &&
      (a = function () {
        try {
          n.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: r, dispose: a, async: i }));
  } else i && e.stack.push({ async: !0 });
  return r;
}
var co =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, i) {
        var a = new Error(i);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function Vn(e) {
  function r(o) {
    ((e.error = e.hasError ? new co(o, e.error, "An error was suppressed during disposal.") : o),
      (e.hasError = !0));
  }
  var i,
    a = 0;
  function n() {
    for (; (i = e.stack.pop()); )
      try {
        if (!i.async && a === 1) return ((a = 0), e.stack.push(i), Promise.resolve().then(n));
        if (i.dispose) {
          var o = i.dispose.call(i.value);
          if (i.async)
            return (
              (a |= 2),
              Promise.resolve(o).then(n, function (t) {
                return (r(t), n());
              })
            );
        } else a |= 1;
      } catch (t) {
        r(t);
      }
    if (a === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function Hn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (i, a, n, o, t) {
        return a
          ? r
            ? ".jsx"
            : ".js"
          : n && (!o || !t)
            ? i
            : n + o + "." + t.toLowerCase() + "js";
      })
    : e;
}
const fo = {
    __extends: yn,
    __assign: Ne,
    __rest: mn,
    __decorate: bn,
    __param: wn,
    __esDecorate: En,
    __runInitializers: Rn,
    __propKey: On,
    __setFunctionName: Pn,
    __metadata: Sn,
    __awaiter: In,
    __generator: Cn,
    __createBinding: Ve,
    __exportStar: jn,
    __values: Ge,
    __read: Ct,
    __spread: qn,
    __spreadArrays: Fn,
    __spreadArray: Bn,
    __await: x,
    __asyncGenerator: Tn,
    __asyncDelegator: Mn,
    __asyncValues: An,
    __makeTemplateObject: kn,
    __importStar: Dn,
    __importDefault: Un,
    __classPrivateFieldGet: xn,
    __classPrivateFieldSet: Ln,
    __classPrivateFieldIn: Nn,
    __addDisposableResource: Gn,
    __disposeResources: Vn,
    __rewriteRelativeImportExtension: Hn,
  },
  vo = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Gn,
        get __assign() {
          return Ne;
        },
        __asyncDelegator: Mn,
        __asyncGenerator: Tn,
        __asyncValues: An,
        __await: x,
        __awaiter: In,
        __classPrivateFieldGet: xn,
        __classPrivateFieldIn: Nn,
        __classPrivateFieldSet: Ln,
        __createBinding: Ve,
        __decorate: bn,
        __disposeResources: Vn,
        __esDecorate: En,
        __exportStar: jn,
        __extends: yn,
        __generator: Cn,
        __importDefault: Un,
        __importStar: Dn,
        __makeTemplateObject: kn,
        __metadata: Sn,
        __param: wn,
        __propKey: On,
        __read: Ct,
        __rest: mn,
        __rewriteRelativeImportExtension: Hn,
        __runInitializers: Rn,
        __setFunctionName: Pn,
        __spread: qn,
        __spreadArray: Bn,
        __spreadArrays: Fn,
        __values: Ge,
        default: fo,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S = io(vo);
var N = {},
  Bt;
function ho() {
  return (
    Bt ||
      ((Bt = 1),
      Object.defineProperty(N, "__esModule", { value: !0 }),
      (N.NavigationTarget = void 0),
      (N.NavigationTarget = {
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
    N
  );
}
var Ze = {},
  $e = {},
  G = {},
  V = {},
  Tt;
function O() {
  if (Tt) return V;
  ((Tt = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.BridgeAPIError = void 0));
  class e extends Error {}
  return ((V.BridgeAPIError = e), V);
}
var Mt;
function R() {
  if (Mt) return G;
  ((Mt = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.getCallBridge = void 0));
  const e = O();
  function r(a) {
    return !!a?.callBridge;
  }
  const i = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((G.getCallBridge = i), G);
}
var H = {},
  At;
function He() {
  if (At) return H;
  ((At = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.withRateLimiter = void 0));
  const e = O(),
    r = (i, a, n, o) => {
      let t = Date.now(),
        u = 0;
      return async (...l) => {
        const s = Date.now();
        if ((s - t > n && ((t = s), (u = 0)), u >= a))
          throw new e.BridgeAPIError(o || "Too many invocations.");
        return ((u = u + 1), i(...l));
      };
    };
  return ((H.withRateLimiter = r), H);
}
var kt;
function go() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = R(),
          i = O(),
          a = He(),
          n = (0, r.getCallBridge)(),
          o = (l) => {
            if (l && Object.values(l).some((s) => typeof s == "function"))
              throw new i.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, s) => {
            if (typeof l != "string") throw new i.BridgeAPIError("functionKey must be a string!");
            return (o(s), n("invoke", { functionKey: l, payload: s }));
          };
        e.invoke = (0, a.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function u() {
          return e.invoke;
        }
        e.makeInvoke = u;
      })($e)),
    $e
  );
}
var Dt;
function Ue() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(go(), e));
      })(Ze)),
    Ze
  );
}
var et = {},
  W = {},
  tt = {},
  Ut;
function Wn() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = R(),
          i = O(),
          a = He(),
          n = 500,
          o = 25,
          t = 1e3 * o;
        (function (g) {
          ((g.REMOTE = "Remote"), (g.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, r.getCallBridge)(),
          l = (g) => {
            if (g && Object.values(g).some((m) => typeof m == "function"))
              throw new i.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (g) => async (m) => {
            l(m);
            const d = { ...m, invokeType: `ui-${g.toLowerCase()}-fetch` },
              _ = await u("invoke", d),
              { success: f, payload: v, error: h } = _ ?? {},
              p = { ...(f ? v : h) };
            if (p && p.headers)
              for (const y in p.headers)
                Array.isArray(p.headers[y]) && (p.headers[y] = p.headers[y].join(","));
            return p;
          },
          c = (g) => {
            const m = s(g);
            return (0, a.withRateLimiter)(
              m,
              n,
              t,
              `${g} invocation calls are rate limited at ${n}/${o}s`,
            );
          };
        e._invokeEndpointFn = c;
      })(tt)),
    tt
  );
}
var xt;
function po() {
  if (xt) return W;
  ((xt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.invokeRemote = void 0));
  const e = Wn(),
    r = (i) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(i);
  return ((W.invokeRemote = r), W);
}
var z = {},
  Lt;
function _o() {
  if (Lt) return z;
  ((Lt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.invokeService = void 0));
  const e = Wn(),
    r = (i) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(i);
  return ((z.invokeService = r), z);
}
var Nt;
function yo() {
  return (
    Nt ||
      ((Nt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(po(), e), r.__exportStar(_o(), e));
      })(et)),
    et
  );
}
var rt = {},
  K = {},
  J = {},
  Gt;
function mo() {
  if (Gt) return J;
  ((Gt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.submit = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await i("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((J.submit = a), J);
}
var Y = {},
  Vt;
function bo() {
  if (Vt) return Y;
  ((Vt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.close = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await i("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((Y.close = a), Y);
}
var Q = {},
  Ht;
function wo() {
  if (Ht) return Q;
  ((Ht = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.open = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = async () => {
      try {
        if ((await i("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Q.open = a), Q);
}
var X = {},
  Wt;
function Eo() {
  if (Wt) return X;
  ((Wt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.refresh = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await i("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((X.refresh = a), X);
}
var Z = {},
  zt;
function Ro() {
  if (zt) return Z;
  ((zt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.createHistory = void 0));
  const r = (0, R().getCallBridge)(),
    i = async () => {
      const a = await r("createHistory");
      return (
        a.listen((n) => {
          a.location = n;
        }),
        a
      );
    };
  return ((Z.createHistory = i), Z);
}
var $ = {},
  nt = {},
  q = {},
  Kt;
function zn() {
  return (
    Kt ||
      ((Kt = 1),
      Object.defineProperty(q, "__esModule", { value: !0 }),
      (q.FORGE_SUPPORTED_LOCALE_CODES = q.I18N_BUNDLE_FOLDER_NAME = q.I18N_INFO_FILE_NAME = void 0),
      (q.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (q.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (q.FORGE_SUPPORTED_LOCALE_CODES = [
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
    q
  );
}
var M = {},
  Jt;
function Oo() {
  if (Jt) return M;
  ((Jt = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.TranslationsGetter = M.TranslationGetterError = void 0));
  const e = (a, n) => {
    a.includes(n) || a.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  M.TranslationGetterError = r;
  class i {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, o = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: u } = o;
      if (!u) {
        let l;
        return (
          t.locales.includes(n) && (l = await this.getTranslationResource(n)),
          { translations: l ?? null, locale: n }
        );
      }
      for (const l of this.getLocaleLookupOrder(n, t)) {
        const s = await this.getTranslationResource(l);
        if (s) return { translations: s, locale: l };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const o = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, o);
      return await Promise.all(
        t.map(async (u) => {
          const l = await this.getTranslationResource(u);
          return { locale: u, translations: l };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(n) {
      let o = this.translationResources.get(n);
      if (!o)
        try {
          ((o = await this.resourcesAccessor.getTranslationResource(n)),
            this.translationResources.set(n, o));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${n}`);
        }
      return o;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (n) {
          throw n instanceof r ? n : new r("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(n, o) {
      const { locales: t, fallback: u } = o,
        l = [n],
        s = u[n];
      return (
        s && Array.isArray(s) && s.length > 0 && l.push(...s),
        e(l, o.fallback.default),
        l.filter((c) => t.includes(c))
      );
    }
  }
  return ((M.TranslationsGetter = i), M);
}
var ee = {},
  ot = {},
  Yt;
function Kn() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const i = S.__importDefault(ao()),
          a = (o, t, u) => {
            const l = o[u];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = a;
        const n = (o, t) => {
          let u = o[t];
          if (!u) {
            const l = t.split(".");
            l.length > 1 && (u = (0, i.default)(o, l, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = n;
      })(ot)),
    ot
  );
}
var Qt;
function Po() {
  if (Qt) return ee;
  ((Qt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.Translator = void 0));
  const e = Kn();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(a, n) {
      ((this.locale = a), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(a) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(a);
      if (n === void 0) {
        for (const { translations: o } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(o, a);
          if (t !== null) {
            n = t;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(a, n));
      }
      return n;
    }
  }
  return ((ee.Translator = r), ee);
}
var te = {},
  Xt;
function So() {
  if (Xt) return te;
  ((Xt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.ensureLocale = void 0));
  const e = zn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    i = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    a = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (o, t) => {
        const [u] = t.split("-");
        return (o[u] || (o[u] = t), o);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (o) => {
      const t = o.replace("_", "-");
      return r.has(t) ? t : (a[t] ?? i[t] ?? null);
    };
  return ((te.ensureLocale = n), te);
}
var it = {},
  Zt;
function Io() {
  return (
    Zt ||
      ((Zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          i = (s) => typeof s?.i18n == "string",
          a = (s) => s.startsWith("connect-"),
          n = (s) => s.startsWith("core:"),
          o = (s) => {
            const c = new Set(),
              g = (m, d) =>
                !r(m) || c.has(m)
                  ? []
                  : (c.add(m),
                    Object.entries(m).flatMap(([_, f]) => {
                      const v = [...d, _];
                      return i(f)
                        ? [{ propertyPath: v, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((h) => g(h, v))
                          : g(f, v);
                    }));
            return g(s, []);
          },
          t = (s) =>
            Object.entries(s).flatMap(([c, g]) =>
              !a(c) && !n(c) && g && Array.isArray(g) && g.length > 0 ? g.map((m) => [m, c]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const u = (s) => {
          const c = new Set();
          for (const g of (0, e.getI18nSupportedModuleEntries)(s)) {
            const m = o(g[0]);
            for (const { key: d } of m) c.add(d);
          }
          return c.size > 0 ? Array.from(c) : [];
        };
        e.extractI18nKeysFromModules = u;
        const l = (s) => {
          const c = [];
          for (const g of (0, e.getI18nSupportedModuleEntries)(s)) {
            const m = o(g[0]);
            for (const d of m) c.push({ moduleName: g[1], ...d });
          }
          return c;
        };
        e.extractI18nPropertiesFromModules = l;
      })(it)),
    it
  );
}
var at = {},
  $t;
function Co() {
  return ($t || (($t = 1), Object.defineProperty(at, "__esModule", { value: !0 })), at);
}
var er;
function Jn() {
  return (
    er ||
      ((er = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = S;
        (r.__exportStar(zn(), e),
          r.__exportStar(Oo(), e),
          r.__exportStar(Po(), e),
          r.__exportStar(So(), e));
        var i = Kn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return i.getTranslationValue;
          },
        });
        var a = Io();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return a.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return a.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return a.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(Co(), e));
      })(nt)),
    nt
  );
}
var tr;
function jo() {
  if (tr) return $;
  ((tr = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.getContext = void 0));
  const e = R(),
    r = Jn(),
    i = (0, e.getCallBridge)(),
    a = async () => {
      var n;
      const o = await i("getContext"),
        t = o?.locale;
      return (t && (o.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), o);
    };
  return (($.getContext = a), $);
}
var re = {},
  rr;
function qo() {
  if (rr) return re;
  ((rr = 1),
    Object.defineProperty(re, "__esModule", { value: !0 }),
    (re.changeWindowTitle = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        await i("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((re.changeWindowTitle = a), re);
}
var ne = {},
  nr;
function Fo() {
  if (nr) return ne;
  ((nr = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.theme = void 0));
  const r = (0, R().getCallBridge)();
  return ((ne.theme = { enable: () => r("enableTheming") }), ne);
}
var oe = {},
  ie = {},
  st = {},
  A = {},
  or;
function Yn() {
  if (or) return A;
  ((or = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.blobToBase64 = A.base64ToBlob = void 0));
  const e = (i, a) => {
    if (!i) return null;
    const n = i.includes(";base64") ? i.split(",")[1] : i,
      o = atob(n),
      t = new Array(o.length);
    for (let l = 0; l < o.length; l++) t[l] = o.charCodeAt(l);
    const u = new Uint8Array(t);
    return new Blob([u], { type: a });
  };
  A.base64ToBlob = e;
  const r = (i) =>
    new Promise((a, n) => {
      const o = new FileReader();
      ((o.onloadend = () => {
        a(o.result);
      }),
        (o.onerror = n),
        o.readAsDataURL(i));
    });
  return ((A.blobToBase64 = r), A);
}
var ir;
function Bo() {
  return (
    ir ||
      ((ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = Yn(),
          i = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const c = Object.getPrototypeOf(s);
            if (c === null) return !0;
            const g = Object.prototype.hasOwnProperty.call(c, "constructor") && c.constructor;
            return (
              typeof g == "function" &&
              g instanceof g &&
              Function.prototype.call(g) === Function.prototype.call(s)
            );
          },
          a = async (s) => ({ data: await (0, r.blobToBase64)(s), type: s.type }),
          n = (s) => (0, r.base64ToBlob)(s.data, s.type),
          o = async (s) => {
            if (s instanceof Blob) return { ...(await a(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((c) => (0, e.serialiseBlobsInPayload)(c)));
            if (s && i(s)) {
              const c = await Promise.all(
                Object.entries(s).map(async ([g, m]) => [
                  g,
                  await (0, e.serialiseBlobsInPayload)(m),
                ]),
              );
              return Object.fromEntries(c);
            }
            return s;
          };
        e.serialiseBlobsInPayload = o;
        const t = (s) => {
          if (s && i(s) && "__isBlobData" in s) {
            const c = s;
            return n({ data: c.data, type: c.type });
          }
          if (Array.isArray(s)) return s.map((c) => (0, e.deserialiseBlobsInPayload)(c));
          if (s && i(s)) {
            const c = {};
            for (const [g, m] of Object.entries(s)) c[g] = (0, e.deserialiseBlobsInPayload)(m);
            return c;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = t;
        const u = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((c) => (0, e.containsBlobs)(c))
              : s && i(s)
                ? Object.values(s).some((c) => (0, e.containsBlobs)(c))
                : !1;
        e.containsBlobs = u;
        const l = (s) =>
          s && i(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((c) => (0, e.containsSerialisedBlobs)(c))
              : s && i(s)
                ? Object.values(s).some((c) => (0, e.containsSerialisedBlobs)(c))
                : !1;
        e.containsSerialisedBlobs = l;
      })(st)),
    st
  );
}
var ar;
function Qn() {
  if (ar) return ie;
  ((ar = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.events = void 0));
  const e = R(),
    r = Bo(),
    i = (0, e.getCallBridge)(),
    a = (l) => (s) => {
      let c = s;
      return ((0, r.containsSerialisedBlobs)(s) && (c = (0, r.deserialiseBlobsInPayload)(s)), l(c));
    },
    n = async (l, s) => {
      let c = s;
      return (
        (0, r.containsBlobs)(s) && (c = await (0, r.serialiseBlobsInPayload)(s)),
        i("emit", { event: l, payload: c })
      );
    },
    o = (l, s) => i("on", { event: l, callback: a(s) }),
    t = async (l, s) => {
      let c = s;
      return (
        (0, r.containsBlobs)(s) && (c = await (0, r.serialiseBlobsInPayload)(s)),
        i("emitPublic", { event: l, payload: c })
      );
    },
    u = (l, s) => i("onPublic", { event: l, callback: a(s) });
  return ((ie.events = { emit: n, on: o, emitPublic: t, onPublic: u }), ie);
}
var sr;
function To() {
  if (sr) return oe;
  ((sr = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.emitReadyEvent = void 0));
  const e = Qn(),
    r = eo(),
    a = (0, R().getCallBridge)(),
    n = "EXTENSION_READY",
    o = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await a("emitReadyEvent");
      } catch {}
    };
  return ((oe.emitReadyEvent = o), oe);
}
const Mo = "modulepreload",
  Ao = function (e, r) {
    return new URL(e, r).href;
  },
  ur = {},
  ko = function (r, i, a) {
    let n = Promise.resolve();
    if (i && i.length > 0) {
      let s = function (c) {
        return Promise.all(
          c.map((g) =>
            Promise.resolve(g).then(
              (m) => ({ status: "fulfilled", value: m }),
              (m) => ({ status: "rejected", reason: m }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        u = document.querySelector("meta[property=csp-nonce]"),
        l = u?.nonce || u?.getAttribute("nonce");
      n = s(
        i.map((c) => {
          if (((c = Ao(c, a)), c in ur)) return;
          ur[c] = !0;
          const g = c.endsWith(".css"),
            m = g ? '[rel="stylesheet"]' : "";
          if (a)
            for (let _ = t.length - 1; _ >= 0; _--) {
              const f = t[_];
              if (f.href === c && (!g || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = g ? "stylesheet" : Mo),
            g || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            g)
          )
            return new Promise((_, f) => {
              (d.addEventListener("load", _),
                d.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${c}`))));
            });
        }),
      );
    }
    function o(t) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = t), window.dispatchEvent(u), !u.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const u of t || []) u.status === "rejected" && o(u.reason);
      return r().catch(o);
    });
  };
var ae = {},
  ut = {},
  se = {},
  xe = {},
  lr;
function Xn() {
  if (lr) return xe;
  ((lr = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.default = i));
  let e;
  const r = new Uint8Array(16);
  function i() {
    if (
      !e &&
      ((e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !e)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return e(r);
  }
  return xe;
}
var U = {},
  ue = {},
  le = {},
  cr;
function Do() {
  if (cr) return le;
  ((cr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((le.default = e), le);
}
var dr;
function We() {
  if (dr) return ue;
  ((dr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.default = void 0));
  var e = r(Do());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function i(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var a = i;
  return ((ue.default = a), ue);
}
var fr;
function ze() {
  if (fr) return U;
  ((fr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.default = void 0),
    (U.unsafeStringify = a));
  var e = r(We());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const i = [];
  for (let t = 0; t < 256; ++t) i.push((t + 256).toString(16).slice(1));
  function a(t, u = 0) {
    return (
      i[t[u + 0]] +
      i[t[u + 1]] +
      i[t[u + 2]] +
      i[t[u + 3]] +
      "-" +
      i[t[u + 4]] +
      i[t[u + 5]] +
      "-" +
      i[t[u + 6]] +
      i[t[u + 7]] +
      "-" +
      i[t[u + 8]] +
      i[t[u + 9]] +
      "-" +
      i[t[u + 10]] +
      i[t[u + 11]] +
      i[t[u + 12]] +
      i[t[u + 13]] +
      i[t[u + 14]] +
      i[t[u + 15]]
    );
  }
  function n(t, u = 0) {
    const l = a(t, u);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var o = n;
  return ((U.default = o), U);
}
var vr;
function Uo() {
  if (vr) return se;
  ((vr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.default = void 0));
  var e = i(Xn()),
    r = ze();
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  let a,
    n,
    o = 0,
    t = 0;
  function u(s, c, g) {
    let m = (c && g) || 0;
    const d = c || new Array(16);
    s = s || {};
    let _ = s.node || a,
      f = s.clockseq !== void 0 ? s.clockseq : n;
    if (_ == null || f == null) {
      const w = s.random || (s.rng || e.default)();
      (_ == null && (_ = a = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = n = ((w[6] << 8) | w[7]) & 16383));
    }
    let v = s.msecs !== void 0 ? s.msecs : Date.now(),
      h = s.nsecs !== void 0 ? s.nsecs : t + 1;
    const p = v - o + (h - t) / 1e4;
    if (
      (p < 0 && s.clockseq === void 0 && (f = (f + 1) & 16383),
      (p < 0 || v > o) && s.nsecs === void 0 && (h = 0),
      h >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((o = v), (t = h), (n = f), (v += 122192928e5));
    const y = ((v & 268435455) * 1e4 + h) % 4294967296;
    ((d[m++] = (y >>> 24) & 255),
      (d[m++] = (y >>> 16) & 255),
      (d[m++] = (y >>> 8) & 255),
      (d[m++] = y & 255));
    const b = ((v / 4294967296) * 1e4) & 268435455;
    ((d[m++] = (b >>> 8) & 255),
      (d[m++] = b & 255),
      (d[m++] = ((b >>> 24) & 15) | 16),
      (d[m++] = (b >>> 16) & 255),
      (d[m++] = (f >>> 8) | 128),
      (d[m++] = f & 255));
    for (let w = 0; w < 6; ++w) d[m + w] = _[w];
    return c || (0, r.unsafeStringify)(d);
  }
  var l = u;
  return ((se.default = l), se);
}
var ce = {},
  B = {},
  de = {},
  hr;
function Zn() {
  if (hr) return de;
  ((hr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function i(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    let o;
    const t = new Uint8Array(16);
    return (
      (t[0] = (o = parseInt(n.slice(0, 8), 16)) >>> 24),
      (t[1] = (o >>> 16) & 255),
      (t[2] = (o >>> 8) & 255),
      (t[3] = o & 255),
      (t[4] = (o = parseInt(n.slice(9, 13), 16)) >>> 8),
      (t[5] = o & 255),
      (t[6] = (o = parseInt(n.slice(14, 18), 16)) >>> 8),
      (t[7] = o & 255),
      (t[8] = (o = parseInt(n.slice(19, 23), 16)) >>> 8),
      (t[9] = o & 255),
      (t[10] = ((o = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (o / 4294967296) & 255),
      (t[12] = (o >>> 24) & 255),
      (t[13] = (o >>> 16) & 255),
      (t[14] = (o >>> 8) & 255),
      (t[15] = o & 255),
      t
    );
  }
  var a = i;
  return ((de.default = a), de);
}
var gr;
function $n() {
  if (gr) return B;
  ((gr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.URL = B.DNS = void 0),
    (B.default = t));
  var e = ze(),
    r = i(Zn());
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u) {
    u = unescape(encodeURIComponent(u));
    const l = [];
    for (let s = 0; s < u.length; ++s) l.push(u.charCodeAt(s));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  B.DNS = n;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  B.URL = o;
  function t(u, l, s) {
    function c(g, m, d, _) {
      var f;
      if (
        (typeof g == "string" && (g = a(g)),
        typeof m == "string" && (m = (0, r.default)(m)),
        ((f = m) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let v = new Uint8Array(16 + g.length);
      if (
        (v.set(m),
        v.set(g, m.length),
        (v = s(v)),
        (v[6] = (v[6] & 15) | l),
        (v[8] = (v[8] & 63) | 128),
        d)
      ) {
        _ = _ || 0;
        for (let h = 0; h < 16; ++h) d[_ + h] = v[h];
        return d;
      }
      return (0, e.unsafeStringify)(v);
    }
    try {
      c.name = u;
    } catch {}
    return ((c.DNS = n), (c.URL = o), c);
  }
  return B;
}
var fe = {},
  pr;
function xo() {
  if (pr) return fe;
  ((pr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const _ = unescape(encodeURIComponent(d));
      d = new Uint8Array(_.length);
      for (let f = 0; f < _.length; ++f) d[f] = _.charCodeAt(f);
    }
    return r(a(n(d), d.length * 8));
  }
  function r(d) {
    const _ = [],
      f = d.length * 32,
      v = "0123456789abcdef";
    for (let h = 0; h < f; h += 8) {
      const p = (d[h >> 5] >>> (h % 32)) & 255,
        y = parseInt(v.charAt((p >>> 4) & 15) + v.charAt(p & 15), 16);
      _.push(y);
    }
    return _;
  }
  function i(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function a(d, _) {
    ((d[_ >> 5] |= 128 << (_ % 32)), (d[i(_) - 1] = _));
    let f = 1732584193,
      v = -271733879,
      h = -1732584194,
      p = 271733878;
    for (let y = 0; y < d.length; y += 16) {
      const b = f,
        w = v,
        P = h,
        I = p;
      ((f = l(f, v, h, p, d[y], 7, -680876936)),
        (p = l(p, f, v, h, d[y + 1], 12, -389564586)),
        (h = l(h, p, f, v, d[y + 2], 17, 606105819)),
        (v = l(v, h, p, f, d[y + 3], 22, -1044525330)),
        (f = l(f, v, h, p, d[y + 4], 7, -176418897)),
        (p = l(p, f, v, h, d[y + 5], 12, 1200080426)),
        (h = l(h, p, f, v, d[y + 6], 17, -1473231341)),
        (v = l(v, h, p, f, d[y + 7], 22, -45705983)),
        (f = l(f, v, h, p, d[y + 8], 7, 1770035416)),
        (p = l(p, f, v, h, d[y + 9], 12, -1958414417)),
        (h = l(h, p, f, v, d[y + 10], 17, -42063)),
        (v = l(v, h, p, f, d[y + 11], 22, -1990404162)),
        (f = l(f, v, h, p, d[y + 12], 7, 1804603682)),
        (p = l(p, f, v, h, d[y + 13], 12, -40341101)),
        (h = l(h, p, f, v, d[y + 14], 17, -1502002290)),
        (v = l(v, h, p, f, d[y + 15], 22, 1236535329)),
        (f = s(f, v, h, p, d[y + 1], 5, -165796510)),
        (p = s(p, f, v, h, d[y + 6], 9, -1069501632)),
        (h = s(h, p, f, v, d[y + 11], 14, 643717713)),
        (v = s(v, h, p, f, d[y], 20, -373897302)),
        (f = s(f, v, h, p, d[y + 5], 5, -701558691)),
        (p = s(p, f, v, h, d[y + 10], 9, 38016083)),
        (h = s(h, p, f, v, d[y + 15], 14, -660478335)),
        (v = s(v, h, p, f, d[y + 4], 20, -405537848)),
        (f = s(f, v, h, p, d[y + 9], 5, 568446438)),
        (p = s(p, f, v, h, d[y + 14], 9, -1019803690)),
        (h = s(h, p, f, v, d[y + 3], 14, -187363961)),
        (v = s(v, h, p, f, d[y + 8], 20, 1163531501)),
        (f = s(f, v, h, p, d[y + 13], 5, -1444681467)),
        (p = s(p, f, v, h, d[y + 2], 9, -51403784)),
        (h = s(h, p, f, v, d[y + 7], 14, 1735328473)),
        (v = s(v, h, p, f, d[y + 12], 20, -1926607734)),
        (f = c(f, v, h, p, d[y + 5], 4, -378558)),
        (p = c(p, f, v, h, d[y + 8], 11, -2022574463)),
        (h = c(h, p, f, v, d[y + 11], 16, 1839030562)),
        (v = c(v, h, p, f, d[y + 14], 23, -35309556)),
        (f = c(f, v, h, p, d[y + 1], 4, -1530992060)),
        (p = c(p, f, v, h, d[y + 4], 11, 1272893353)),
        (h = c(h, p, f, v, d[y + 7], 16, -155497632)),
        (v = c(v, h, p, f, d[y + 10], 23, -1094730640)),
        (f = c(f, v, h, p, d[y + 13], 4, 681279174)),
        (p = c(p, f, v, h, d[y], 11, -358537222)),
        (h = c(h, p, f, v, d[y + 3], 16, -722521979)),
        (v = c(v, h, p, f, d[y + 6], 23, 76029189)),
        (f = c(f, v, h, p, d[y + 9], 4, -640364487)),
        (p = c(p, f, v, h, d[y + 12], 11, -421815835)),
        (h = c(h, p, f, v, d[y + 15], 16, 530742520)),
        (v = c(v, h, p, f, d[y + 2], 23, -995338651)),
        (f = g(f, v, h, p, d[y], 6, -198630844)),
        (p = g(p, f, v, h, d[y + 7], 10, 1126891415)),
        (h = g(h, p, f, v, d[y + 14], 15, -1416354905)),
        (v = g(v, h, p, f, d[y + 5], 21, -57434055)),
        (f = g(f, v, h, p, d[y + 12], 6, 1700485571)),
        (p = g(p, f, v, h, d[y + 3], 10, -1894986606)),
        (h = g(h, p, f, v, d[y + 10], 15, -1051523)),
        (v = g(v, h, p, f, d[y + 1], 21, -2054922799)),
        (f = g(f, v, h, p, d[y + 8], 6, 1873313359)),
        (p = g(p, f, v, h, d[y + 15], 10, -30611744)),
        (h = g(h, p, f, v, d[y + 6], 15, -1560198380)),
        (v = g(v, h, p, f, d[y + 13], 21, 1309151649)),
        (f = g(f, v, h, p, d[y + 4], 6, -145523070)),
        (p = g(p, f, v, h, d[y + 11], 10, -1120210379)),
        (h = g(h, p, f, v, d[y + 2], 15, 718787259)),
        (v = g(v, h, p, f, d[y + 9], 21, -343485551)),
        (f = o(f, b)),
        (v = o(v, w)),
        (h = o(h, P)),
        (p = o(p, I)));
    }
    return [f, v, h, p];
  }
  function n(d) {
    if (d.length === 0) return [];
    const _ = d.length * 8,
      f = new Uint32Array(i(_));
    for (let v = 0; v < _; v += 8) f[v >> 5] |= (d[v / 8] & 255) << (v % 32);
    return f;
  }
  function o(d, _) {
    const f = (d & 65535) + (_ & 65535);
    return (((d >> 16) + (_ >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function t(d, _) {
    return (d << _) | (d >>> (32 - _));
  }
  function u(d, _, f, v, h, p) {
    return o(t(o(o(_, d), o(v, p)), h), f);
  }
  function l(d, _, f, v, h, p, y) {
    return u((_ & f) | (~_ & v), d, _, h, p, y);
  }
  function s(d, _, f, v, h, p, y) {
    return u((_ & v) | (f & ~v), d, _, h, p, y);
  }
  function c(d, _, f, v, h, p, y) {
    return u(_ ^ f ^ v, d, _, h, p, y);
  }
  function g(d, _, f, v, h, p, y) {
    return u(f ^ (_ | ~v), d, _, h, p, y);
  }
  var m = e;
  return ((fe.default = m), fe);
}
var _r;
function Lo() {
  if (_r) return ce;
  ((_r = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.default = void 0));
  var e = i($n()),
    r = i(xo());
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ce.default = n), ce);
}
var ve = {},
  he = {},
  yr;
function No() {
  if (yr) return he;
  ((yr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((he.default = r), he);
}
var mr;
function Go() {
  if (mr) return ve;
  ((mr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = a(No()),
    r = a(Xn()),
    i = ze();
  function a(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, u, l) {
    if (e.default.randomUUID && !u && !t) return e.default.randomUUID();
    t = t || {};
    const s = t.random || (t.rng || r.default)();
    if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), u)) {
      l = l || 0;
      for (let c = 0; c < 16; ++c) u[l + c] = s[c];
      return u;
    }
    return (0, i.unsafeStringify)(s);
  }
  var o = n;
  return ((ve.default = o), ve);
}
var ge = {},
  pe = {},
  br;
function Vo() {
  if (br) return pe;
  ((br = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  function e(n, o, t, u) {
    switch (n) {
      case 0:
        return (o & t) ^ (~o & u);
      case 1:
        return o ^ t ^ u;
      case 2:
        return (o & t) ^ (o & u) ^ (t & u);
      case 3:
        return o ^ t ^ u;
    }
  }
  function r(n, o) {
    return (n << o) | (n >>> (32 - o));
  }
  function i(n) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const c = unescape(encodeURIComponent(n));
      n = [];
      for (let g = 0; g < c.length; ++g) n.push(c.charCodeAt(g));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const u = n.length / 4 + 2,
      l = Math.ceil(u / 16),
      s = new Array(l);
    for (let c = 0; c < l; ++c) {
      const g = new Uint32Array(16);
      for (let m = 0; m < 16; ++m)
        g[m] =
          (n[c * 64 + m * 4] << 24) |
          (n[c * 64 + m * 4 + 1] << 16) |
          (n[c * 64 + m * 4 + 2] << 8) |
          n[c * 64 + m * 4 + 3];
      s[c] = g;
    }
    ((s[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (s[l - 1][14] = Math.floor(s[l - 1][14])),
      (s[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let c = 0; c < l; ++c) {
      const g = new Uint32Array(80);
      for (let h = 0; h < 16; ++h) g[h] = s[c][h];
      for (let h = 16; h < 80; ++h) g[h] = r(g[h - 3] ^ g[h - 8] ^ g[h - 14] ^ g[h - 16], 1);
      let m = t[0],
        d = t[1],
        _ = t[2],
        f = t[3],
        v = t[4];
      for (let h = 0; h < 80; ++h) {
        const p = Math.floor(h / 20),
          y = (r(m, 5) + e(p, d, _, f) + v + o[p] + g[h]) >>> 0;
        ((v = f), (f = _), (_ = r(d, 30) >>> 0), (d = m), (m = y));
      }
      ((t[0] = (t[0] + m) >>> 0),
        (t[1] = (t[1] + d) >>> 0),
        (t[2] = (t[2] + _) >>> 0),
        (t[3] = (t[3] + f) >>> 0),
        (t[4] = (t[4] + v) >>> 0));
    }
    return [
      (t[0] >> 24) & 255,
      (t[0] >> 16) & 255,
      (t[0] >> 8) & 255,
      t[0] & 255,
      (t[1] >> 24) & 255,
      (t[1] >> 16) & 255,
      (t[1] >> 8) & 255,
      t[1] & 255,
      (t[2] >> 24) & 255,
      (t[2] >> 16) & 255,
      (t[2] >> 8) & 255,
      t[2] & 255,
      (t[3] >> 24) & 255,
      (t[3] >> 16) & 255,
      (t[3] >> 8) & 255,
      t[3] & 255,
      (t[4] >> 24) & 255,
      (t[4] >> 16) & 255,
      (t[4] >> 8) & 255,
      t[4] & 255,
    ];
  }
  var a = i;
  return ((pe.default = a), pe);
}
var wr;
function Ho() {
  if (wr) return ge;
  ((wr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = i($n()),
    r = i(Vo());
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((ge.default = n), ge);
}
var _e = {},
  Er;
function Wo() {
  if (Er) return _e;
  ((Er = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((_e.default = e), _e);
}
var ye = {},
  Rr;
function zo() {
  if (Rr) return ye;
  ((Rr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function i(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var a = i;
  return ((ye.default = a), ye);
}
var Or;
function Ko() {
  return (
    Or ||
      ((Or = 1),
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
              return s.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(e, "v1", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }),
          Object.defineProperty(e, "v3", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(e, "v5", {
            enumerable: !0,
            get: function () {
              return n.default;
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
              return t.default;
            },
          }));
        var r = c(Uo()),
          i = c(Lo()),
          a = c(Go()),
          n = c(Ho()),
          o = c(Wo()),
          t = c(zo()),
          u = c(We()),
          l = c(ze()),
          s = c(Zn());
        function c(g) {
          return g && g.__esModule ? g : { default: g };
        }
      })(ut)),
    ut
  );
}
var Pr;
function Jo() {
  if (Pr) return ae;
  ((Pr = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.createAdfRendererIframeProps = void 0));
  const e = Ko(),
    r = async (i, a) => {
      const n = await ko(
          () => import("./index-DSebzXMd.js").then((c) => c.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        o = n.default || n,
        t = new URL(document.referrer).origin,
        u = `${t}/forge-apps/adf-renderer`,
        l = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        s = () => {
          var c, g, m, d, _, f;
          const v = document.getElementById(l),
            h = {
              type: "adf-document",
              document: (c = i.extension.macro) === null || c === void 0 ? void 0 : c.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: i.localId,
              isEditing:
                (m = (g = i.extension) === null || g === void 0 ? void 0 : g.isEditing) !== null &&
                m !== void 0
                  ? m
                  : !1,
              contentId:
                (_ = (d = i.extension) === null || d === void 0 ? void 0 : d.content) === null ||
                _ === void 0
                  ? void 0
                  : _.id,
            };
          (o.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (p) => {
                var y;
                (y = p?.iFrameResizer) === null || y === void 0 || y.resize();
              },
            },
            v || "",
          ),
            (f = v?.contentWindow) === null || f === void 0 || f.postMessage(h, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: u, onLoad: s }
      );
    };
  return ((ae.createAdfRendererIframeProps = r), ae);
}
var me = {},
  Sr;
function Yo() {
  if (Sr) return me;
  ((Sr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.onClose = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await i("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((me.onClose = a), me);
}
var Ir;
function eo() {
  if (Ir) return K;
  ((Ir = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.view = void 0));
  const e = mo(),
    r = bo(),
    i = wo(),
    a = Eo(),
    n = Ro(),
    o = jo(),
    t = qo(),
    u = Fo(),
    l = To(),
    s = Jo(),
    c = Yo();
  return (
    (K.view = {
      submit: e.submit,
      close: r.close,
      onClose: c.onClose,
      open: i.open,
      refresh: a.refresh,
      createHistory: n.createHistory,
      getContext: o.getContext,
      theme: u.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: s.createAdfRendererIframeProps,
    }),
    K
  );
}
var Cr;
function Ke() {
  return (
    Cr ||
      ((Cr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(eo(), e));
      })(rt)),
    rt
  );
}
var lt = {},
  be = {},
  jr;
function Qo() {
  if (jr) return be;
  ((jr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.router = void 0));
  const r = (0, R().getCallBridge)(),
    i = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const u = await r("getUrl", t);
      if (!u) throw new Error("Failed to get URL");
      try {
        return new URL(u);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${u} (${l})`);
      }
    },
    a = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "same-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "same-tab" });
    },
    n = (t) => {
      if (typeof t == "string") return r("navigate", { url: t, type: "new-tab" });
      if (!t?.target) throw new Error("target is required for navigation");
      return r("navigate", { ...t, type: "new-tab" });
    },
    o = async () => r("reload");
  return ((be.router = { getUrl: i, navigate: a, open: n, reload: o }), be);
}
var qr;
function Xo() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Qo(), e));
      })(lt)),
    lt
  );
}
var ct = {},
  we = {},
  Fr;
function Zo() {
  if (Fr) return we;
  ((Fr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.Modal = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = () => {};
  class n {
    constructor(t) {
      var u, l;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || a),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (u = t?.closeOnEscape) !== null && u !== void 0 ? u : !0),
        (this.closeOnOverlayClick = (l = t?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0),
        (this.title = t?.title || ""),
        (this.icon = t?.icon || ""));
    }
    async open() {
      try {
        if (
          (await i("openModal", {
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
          throw new r.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new r.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((we.Modal = n), we);
}
var Br;
function $o() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Zo(), e));
      })(ct)),
    ct
  );
}
var C = {},
  k = {},
  Tr;
function ei() {
  if (Tr) return k;
  ((Tr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.productFetchApi = k.remoteFetchApi = void 0));
  const e = Yn(),
    r = async (t, u = !1) => {
      const l = {};
      for (const [s, c] of t.entries())
        if (u ? s.startsWith("file") : s === "file") {
          const m = c.name,
            d = c.type;
          ((l[s] = await (0, e.blobToBase64)(c)), (l[`__${s}Name`] = m), (l[`__${s}Type`] = d));
        } else l[s] = c;
      return JSON.stringify(l);
    },
    i = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: u, ...l } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          l
        );
      }
      return t;
    },
    a = async (t, u) => {
      const l = u?.body instanceof FormData,
        s = l ? await r(u?.body, t === "remote") : u?.body,
        c = new Request("", { body: s, method: u?.method, headers: u?.headers }),
        g = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(g),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const u = async (l, s) => {
        const c = i(s),
          { body: g, headers: m, isMultipartFormData: d } = await a("remote", c),
          _ = {
            remoteKey: l,
            fetchRequestInit: { ...c, body: g, headers: [...m.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: v,
            statusText: h,
            status: p,
            isAttachment: y,
          } = await t("fetchRemote", _),
          b = y ? (0, e.base64ToBlob)(f, v["content-type"]) : f;
        return new Response(b || null, { headers: v, status: p, statusText: h });
      };
      return { requestRemote: (l, s) => u(l, s) };
    };
  k.remoteFetchApi = n;
  const o = (t) => {
    const u = async (l, s, c) => {
      const g = i(c),
        { body: m, headers: d, isMultipartFormData: _ } = await a("product", g);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const f = {
          product: l,
          restPath: s,
          fetchRequestInit: { ...g, body: m, headers: [...d.entries()] },
          isMultipartFormData: _,
        },
        {
          body: v,
          headers: h,
          statusText: p,
          status: y,
          isAttachment: b,
        } = await t("fetchProduct", f),
        w = b ? (0, e.base64ToBlob)(v, h["content-type"]) : v;
      return new Response(w || null, { headers: h, status: y, statusText: p });
    };
    return {
      requestConfluence: (l, s) => u("confluence", l, s),
      requestJira: (l, s) => u("jira", l, s),
      requestBitbucket: (l, s) => u("bitbucket", l, s),
    };
  };
  return ((k.productFetchApi = o), k);
}
var Mr;
function ti() {
  if (Mr) return C;
  Mr = 1;
  var e;
  (Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.requestRemote = C.requestBitbucket = C.requestJira = C.requestConfluence = void 0));
  const r = R(),
    i = ei();
  return (
    (e = (0, i.productFetchApi)((0, r.getCallBridge)())),
    (C.requestConfluence = e.requestConfluence),
    (C.requestJira = e.requestJira),
    (C.requestBitbucket = e.requestBitbucket),
    (C.requestRemote = (0, i.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    C
  );
}
var dt = {},
  Ee = {},
  Ar;
function ri() {
  if (Ar) return Ee;
  ((Ar = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.showFlag = void 0));
  const e = R(),
    r = O(),
    i = (0, e.getCallBridge)(),
    a = (n) => {
      var o;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = i("showFlag", { ...n, type: (o = n.type) !== null && o !== void 0 ? o : "info" });
      return { close: async () => (await t, i("closeFlag", { id: n.id })) };
    };
  return ((Ee.showFlag = a), Ee);
}
var kr;
function ni() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = ri();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(dt)),
    dt
  );
}
var ft = {},
  Dr;
function oi() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Qn(), e));
      })(ft)),
    ft
  );
}
var vt = {},
  Re = {},
  Ur;
function ii() {
  if (Ur) return Re;
  ((Ur = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.realtime = void 0));
  const r = (0, R().getCallBridge)(),
    i = (t, u, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: l }),
    a = (t, u, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: l }),
    n = (t, u, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: l, isGlobal: !0 }),
    o = (t, u, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: l, isGlobal: !0 });
  return ((Re.realtime = { publish: i, subscribe: a, publishGlobal: n, subscribeGlobal: o }), Re);
}
var ht = {},
  xr;
function ai() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = void 0),
          (function (r) {
            ((r.Board = "board"), (r.Issue = "issue"), (r.Project = "project"));
          })(e.Jira || (e.Jira = {})),
          (function (r) {
            ((r.Content = "content"), (r.Space = "space"));
          })(e.Confluence || (e.Confluence = {})),
          (function (r) {
            ((r.Repository = "repository"), (r.PullRequest = "pullRequest"));
          })(e.Bitbucket || (e.Bitbucket = {})));
      })(ht)),
    ht
  );
}
var Lr;
function si() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = ii();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var i = ai();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return i.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return i.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return i.Bitbucket;
            },
          }));
      })(vt)),
    vt
  );
}
var gt = {},
  Oe = {},
  pt = {},
  Nr;
function ui() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = R(),
          i = O(),
          a = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const o = (u) => {
            switch (u.type) {
              case "forge":
                return { agentName: u.agentName, agentKey: u.agentKey, prompt: u.prompt };
              case "atlassian":
                return { agentName: u.agentName, prompt: u.prompt };
              default:
                return { prompt: u.prompt };
            }
          },
          t = async (u) => {
            if (u.type === "forge") {
              if (u.agentName.length > a) throw new Error("rovo agent name too long");
              if (u.agentKey.length > a) throw new Error("rovo agent key too long");
            }
            const l = o(u);
            if ((await n("openRovo", l)) === !1)
              throw new i.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(pt)),
    pt
  );
}
var Pe = {},
  Gr;
function li() {
  if (Gr) return Pe;
  ((Gr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.isEnabled = void 0));
  const r = (0, R().getCallBridge)(),
    i = () => r("isRovoEnabled");
  return ((Pe.isEnabled = i), Pe);
}
var Vr;
function ci() {
  if (Vr) return Oe;
  ((Vr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.rovo = void 0));
  const e = ui(),
    r = li();
  return ((Oe.rovo = { open: e.open, isEnabled: r.isEnabled }), Oe);
}
var Hr;
function di() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(ci(), e));
      })(gt)),
    gt
  );
}
var F = {},
  Wr;
function fi() {
  if (Wr) return F;
  ((Wr = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.createTranslationFunction = F.getTranslations = F.resetTranslationsCache = void 0));
  const e = Jn(),
    r = Ke(),
    i = {
      getI18nInfoConfig: async () => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!u.ok) throw new Error("Failed to get i18n info config: " + u.statusText);
        return (await u.json()).config;
      },
      getTranslationResource: async (u) => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${u}.json`);
        if (!l.ok) throw new Error(`Failed to get translation resource for locale: ${u}`);
        return l.json();
      },
    },
    a = new e.TranslationsGetter(i),
    n = () => {
      a.reset();
    };
  F.resetTranslationsCache = n;
  const o = async (u = null, l = { fallback: !0 }) => {
    let s = u;
    return (s || (s = (await r.view.getContext()).locale), await a.getTranslations(s, l));
  };
  F.getTranslations = o;
  const t = async (u = null) => {
    let l = u;
    l || (l = (await r.view.getContext()).locale);
    const s = new e.Translator(l, a);
    return (
      await s.init(),
      (c, g) => {
        var m, d;
        return (d = (m = s.translate(c)) !== null && m !== void 0 ? m : g) !== null && d !== void 0
          ? d
          : c;
      }
    );
  };
  return ((F.createTranslationFunction = t), F);
}
var _t = {},
  Se = {},
  zr;
function vi() {
  if (zr) return Se;
  ((zr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.permissions = void 0));
  const r = (0, R().getCallBridge)(),
    i = async (l) => r("__permission__egressGet", l),
    a = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    o = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    u = async (l) => r("__permission__remoteSet", l);
  return (
    (Se.permissions = {
      egress: { get: i, set: a, deleteDomain: n, deleteGroup: o },
      remote: { get: t, set: u },
    }),
    Se
  );
}
var D = {},
  yt = {},
  mt = {},
  Ie = {},
  Ce = {},
  Kr;
function jt() {
  if (Kr) return Ce;
  ((Kr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.parseUrl = void 0));
  function e(r) {
    var i, a;
    const n =
        (a = (i = r.match(/^(.*?:)/)) === null || i === void 0 ? void 0 : i[0]) !== null &&
        a !== void 0
          ? a
          : "https:",
      o = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = o.split("/")[0],
      u = o.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: u };
  }
  return ((Ce.parseUrl = e), Ce);
}
var bt = {},
  Jr;
function to() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = jt();
        function i(t) {
          const l = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${l}$`);
        }
        e.globToRegex = i;
        const a = (t) => {
          if (t?.length === 0) return [];
          const u = /^(.*?:\/\/)/,
            l = new Set(),
            s = [];
          return (
            t.forEach((c) => {
              const g = u.test(c) ? c : `https://${c}`,
                m = (0, r.parseUrl)(g);
              m.hostname.startsWith("*")
                ? (l.add(m.hostname.substring(2)), s.push(i(m.hostname)))
                : l.add(m.hostname);
            }),
            [...l].sort().reduce((c, g) => (s.some((m) => m.test(g)) || c.push(g), c), [])
          );
        };
        ((e.sortAndGroupEgressPermissionsByDomain = a),
          (function (t) {
            ((t.FetchBackendSide = "FETCH_BACKEND_SIDE"),
              (t.FetchClientSide = "FETCH_CLIENT_SIDE"),
              (t.Fonts = "FONTS"),
              (t.Frames = "FRAMES"),
              (t.Images = "IMAGES"),
              (t.Media = "MEDIA"),
              (t.Navigation = "NAVIGATION"),
              (t.Scripts = "SCRIPTS"),
              (t.Styles = "STYLES"));
          })(e.EgressType || (e.EgressType = {})));
        var n;
        (function (t) {
          t.ANALYTICS = "ANALYTICS";
        })((n = e.EgressCategory || (e.EgressCategory = {})));
        const o = (t) => {
          const u = t.egress.filter((s) => {
              var c;
              if (
                ((c = s.category) === null || c === void 0 ? void 0 : c.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const g = t.installationConfig.find(
                    (m) => m.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return g?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            l = new Map();
          for (const s of u)
            (l.has(s.type) || l.set(s.type, s.addresses),
              l.set(s.type, [...l.get(s.type), ...s.addresses]));
          return [...l.entries()].map(([s, c]) => ({ type: s, addresses: [...new Set(c)] }));
        };
        e.getEgressesBasedOnToggles = o;
      })(bt)),
    bt
  );
}
var Yr;
function hi() {
  if (Yr) return Ie;
  ((Yr = 1),
    Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie.EgressFilteringService = void 0));
  const e = jt(),
    r = to();
  class i {
    constructor(n) {
      ((this.URLs = n.filter((o) => !o.startsWith("*")).map((o) => this.parseUrl(o))),
        (this.wildcardDomains = n
          .filter((o) => o !== "*")
          .map((o) => this.parseUrl(o))
          .filter((o) => decodeURIComponent(o.hostname).startsWith("*"))
          .map((o) => ({ ...o, regex: (0, r.globToRegex)(decodeURIComponent(o.hostname)) }))),
        (this.allowsEverything = n.includes("*")));
    }
    parseUrl(n) {
      return (0, e.parseUrl)(n);
    }
    containsWildCardEgress() {
      return this.allowsEverything;
    }
    isValidUrl(n) {
      if (this.allowsEverything) return !0;
      const o = this.parseUrl(n);
      return (
        this.allowedDomainExact(o, this.URLs) || this.allowedDomainPattern(o, this.wildcardDomains)
      );
    }
    isValidUrlCSP(n) {
      if (this.allowsEverything) return !0;
      const o = this.parseUrl(n);
      return (
        this.allowedDomainExactAndPath(o, this.URLs) ||
        this.allowedDomainPatternAndPath(o, this.wildcardDomains)
      );
    }
    allowedDomainExact(n, o) {
      return o.filter((t) => t.protocol === n.protocol).some((t) => t.hostname === n.hostname);
    }
    allowedDomainExactAndPath(n, o) {
      return o
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.hostname === n.hostname)
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    allowedDomainPattern(n, o) {
      return o.filter((t) => t.protocol === n.protocol).some((t) => t.regex.test(n.hostname));
    }
    allowedDomainPatternAndPath(n, o) {
      return o
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.regex.test(n.hostname))
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    protocolMatchesCSP(n, o) {
      return n === o || (n === "http:" && o === "https:") || (n === "ws:" && o === "wss:");
    }
    pathMatches(n, o) {
      return n === "/" ? !0 : n.endsWith("/") ? o.startsWith(n) : o === n;
    }
  }
  return ((Ie.EgressFilteringService = i), Ie);
}
var Qr;
function gi() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(hi(), e), r.__exportStar(jt(), e), r.__exportStar(to(), e));
      })(mt)),
    mt
  );
}
var Xr;
function pi() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(gi(), e));
      })(yt)),
    yt
  );
}
var Zr;
function _i() {
  if (Zr) return D;
  ((Zr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.checkPermissions = D.createPermissionUtils = void 0));
  const e = pi(),
    r = Ke();
  function i(_) {
    return typeof _ == "string" ? _ : "address" in _ && _.address ? _.address : _.remote || "";
  }
  const a = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function o(_) {
    if (!_) return null;
    const { scopes: f, external: v = {} } = _,
      h = Array.isArray(f) ? f : Object.keys(f || {});
    return {
      hasScope: (p) => h.includes(p),
      canFetchFrom: (p, y) => {
        var b;
        const w = (b = v.fetch) === null || b === void 0 ? void 0 : b[p];
        if (!w?.length) return !1;
        const P = w.map(i).filter((j) => j.length > 0);
        if (P.length === 0) return !1;
        const I = new e.EgressFilteringService(P);
        return p === "client" ? I.isValidUrlCSP(y) : I.isValidUrl(y);
      },
      canLoadResource: (p, y) => {
        const b = v[p];
        if (!b?.length) return !1;
        const w = b.map(i).filter((Ye) => Ye.length > 0);
        return w.length === 0 ? !1 : new e.EgressFilteringService(w).isValidUrlCSP(y);
      },
      getScopes: () => h,
      getExternalPermissions: () => v,
      hasAnyPermissions: () => h.length > 0 || Object.keys(v).length > 0,
    };
  }
  D.createPermissionUtils = o;
  function t(_, f) {
    if (!_?.length) return;
    const v = _.filter((h) => !f.hasScope(h));
    return v.length > 0 ? v : void 0;
  }
  function u(_, f) {
    if (!_?.fetch) return;
    const v = {};
    return (
      n.forEach((h) => {
        var p;
        const y = (p = _.fetch) === null || p === void 0 ? void 0 : p[h];
        if (y?.length) {
          const b = y.filter((w) => !f.canFetchFrom(h, w));
          b.length > 0 && (v[h] = b);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function l(_, f) {
    const v = {};
    return (
      a.forEach((h) => {
        const p = _?.[h];
        if (p?.length) {
          const y = p.filter((b) => !f.canLoadResource(h, b));
          y.length > 0 && (v[h] = y);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function s(_, f) {
    if (!_) return;
    const v = u(_, f),
      h = l(_, f);
    if (!v && !h) return;
    const p = {};
    return (v && (p.fetch = v), h && Object.assign(p, h), p);
  }
  function c(_, f) {
    if (_ !== void 0 && (typeof _ != "object" || _ === null || Array.isArray(_)))
      throw new TypeError(
        `${f} should be an object, not ${Array.isArray(_) ? "an array" : `a ${typeof _}`}`,
      );
  }
  function g(_, f) {
    if (_ !== void 0 && !Array.isArray(_))
      throw new TypeError(`${f} should be an array, not a ${typeof _}`);
  }
  function m(_) {
    g(_.scopes, "scopes");
    const f = _.external;
    if (f !== void 0) {
      if ((c(f, "external"), f.fetch !== void 0)) {
        c(f.fetch, "external.fetch");
        for (const v of n) g(f.fetch[v], `external.fetch.${v}`);
      }
      for (const v of a) g(f[v], `external.${v}`);
    }
  }
  async function d(_, f) {
    var v;
    if (!_) return { granted: !1, missing: null };
    if ((m(_), !(!((v = _.scopes) === null || v === void 0) && v.length) && !_.external))
      return { granted: !0, missing: null };
    let h = f;
    h || (h = (await r.view.getContext()).permissions);
    const p = o(h);
    if (!p) return { granted: !1, missing: null };
    const y = {};
    let b = !0;
    const w = t(_.scopes, p);
    w && ((y.scopes = w), (b = !1));
    const P = s(_.external, p);
    return (P && ((y.external = P), (b = !1)), { granted: b, missing: b ? null : y });
  }
  return ((D.checkPermissions = d), D);
}
var $r;
function yi() {
  return (
    $r ||
      (($r = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(vi(), e), r.__exportStar(_i(), e));
      })(_t)),
    _t
  );
}
var wt = {},
  Et = {},
  Rt = {},
  je = {},
  qe = {},
  en;
function ro() {
  return (
    en ||
      ((en = 1),
      Object.defineProperty(qe, "__esModule", { value: !0 }),
      (qe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (qe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    qe
  );
}
var tn;
function Je() {
  if (tn) return je;
  ((tn = 1),
    Object.defineProperty(je, "__esModule", { value: !0 }),
    (je.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = Ke(),
    i = ro(),
    a = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(i.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((je.checkRestrictedEnvironment = a), je);
}
var rn;
function mi() {
  return (
    rn ||
      ((rn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Ue(),
          i = O(),
          a = Je(),
          o = (0, R().getCallBridge)(),
          t = (c, g) => {
            const m = atob(c),
              d = new Array(m.length);
            for (let f = 0; f < m.length; f++) d[f] = m.charCodeAt(f);
            const _ = new Uint8Array(d);
            return new Blob([_], { type: g || "application/octet-stream" });
          },
          u = async (c) => {
            const g = c.size,
              m = await c.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", m),
              _ = new Uint8Array(d),
              f = btoa(String.fromCharCode(..._));
            return { length: g, checksum: f, checksumType: "SHA256" };
          },
          l = async ({ functionKey: c, objects: g }) => {
            if (!c || c.length === 0)
              throw new i.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(g) || g.length === 0)
              throw new i.BridgeAPIError("objects array is required and must not be empty");
            const m = g.map((p, y) => {
                if (p instanceof Blob) return p;
                if (!(p && typeof p == "object" && "data" in p && typeof p.data == "string"))
                  throw new i.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(p.data, p.mimeType);
                } catch {
                  throw new i.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(m.map((p) => u(p))),
              _ = await (0, r.invoke)(c, { allObjectMetadata: d });
            if (!_ || typeof _ != "object")
              throw new i.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              v = new Map();
            return (
              m.forEach((p, y) => {
                const b = d[y];
                (f.set(b.checksum, p), v.set(b.checksum, y));
              }),
              Object.entries(_).map(([p, y]) => {
                const { key: b, checksum: w } = y,
                  P = f.get(w),
                  I = v.get(w);
                return I === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: b,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : P
                    ? {
                        promise: (async () => {
                          try {
                            const j = await fetch(p, {
                              method: "PUT",
                              body: P,
                              headers: {
                                "Content-Type": P.type || "application/octet-stream",
                                "Content-Length": P.size.toString(),
                              },
                            });
                            return {
                              success: j.ok,
                              key: b,
                              status: j.status,
                              error: j.ok ? void 0 : `Upload failed with status ${j.status}`,
                            };
                          } catch (j) {
                            return {
                              success: !1,
                              key: b,
                              status: 503,
                              error: j instanceof Error ? j.message : "Upload failed",
                            };
                          }
                        })(),
                        index: I,
                        objectType: P.type,
                        objectSize: P.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: b,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: I,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const s = async ({ functionKey: c, objects: g }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            o("trackObjectStoreAction", { action: "upload" }));
          const m = await (0, e.createUploadPromises)({ functionKey: c, objects: g });
          return await Promise.all(m.map((_) => _.promise));
        };
        e.upload = s;
      })(Rt)),
    Rt
  );
}
var Fe = {},
  nn;
function bi() {
  if (nn) return Fe;
  ((nn = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.deleteObjects = void 0));
  const e = Ue(),
    r = O(),
    i = Je(),
    n = (0, R().getCallBridge)(),
    o = async ({ functionKey: t, keys: u }) => {
      if (
        (await (0, i.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "delete" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(u) || u.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        u.map(async (l) => {
          await (0, e.invoke)(t, { key: l });
        }),
      );
    };
  return ((Fe.deleteObjects = o), Fe);
}
var Be = {},
  on;
function wi() {
  if (on) return Be;
  ((on = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.download = void 0));
  const e = Ue(),
    r = O(),
    i = Je(),
    n = (0, R().getCallBridge)(),
    o = async ({ functionKey: t, keys: u }) => {
      if (
        (await (0, i.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(u) || u.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(t, { keys: u });
      if (!l || typeof l != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const s = Object.entries(l).map(async ([g, m]) => {
        try {
          const d = await fetch(g, { method: "GET" });
          if (!d.ok)
            return {
              success: !1,
              key: m,
              status: d.status,
              error: `Download failed with status ${d.status}`,
            };
          const _ = await d.blob();
          return { success: !0, key: m, blob: _, status: d.status };
        } catch (d) {
          return {
            success: !1,
            key: m,
            status: 503,
            error: d instanceof Error ? d.message : "Download failed",
          };
        }
      });
      return await Promise.all(s);
    };
  return ((Be.download = o), Be);
}
var Te = {},
  an;
function Ei() {
  if (an) return Te;
  ((an = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.getMetadata = void 0));
  const e = Ue(),
    r = O(),
    i = Je(),
    n = (0, R().getCallBridge)(),
    o = async ({ functionKey: t, keys: u }) => {
      if (
        (await (0, i.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "getMetadata" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(u) || u.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        u.map(async (s) => {
          const c = await (0, e.invoke)(t, { key: s });
          return !c || typeof c != "object"
            ? { key: s, error: "Invalid response from functionKey" }
            : c;
        }),
      );
    };
  return ((Te.getMetadata = o), Te);
}
var sn;
function Ri() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = mi();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const i = bi(),
          a = wi(),
          n = Ei();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: n.getMetadata,
          delete: i.deleteObjects,
        };
      })(Et)),
    Et
  );
}
var un;
function Oi() {
  return (
    un ||
      ((un = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(Ri(), e), r.__exportStar(ro(), e));
      })(wt)),
    wt
  );
}
var Ot = {},
  Me = {},
  Ae = {},
  ln;
function Pi() {
  if (ln) return Ae;
  ((ln = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.Evaluator = void 0));
  class e {
    constructor(i) {
      this.results = i;
    }
    checkFlag(i, a) {
      if (!this.results || !this.results.feature_flags) return a;
      const n = this.results.feature_flags;
      let o = "";
      try {
        o = this.getHashedValue(i);
      } catch (u) {
        return (console.error("Unexpected error occurred while evaluating flag ", u), a);
      }
      if (!o) return a;
      const t = n[o];
      return t ? (t.disabled ? !1 : t.value) : a;
    }
    shutDown() {
      this.results = void 0;
    }
    getHashedValue(i) {
      if (typeof i != "string") return "";
      const a = i.trim();
      if (a.length === 0) return "";
      let n = 5381;
      for (let o = 0; o < a.length; o += 1) {
        const t = a.charCodeAt(o);
        ((n = (n << 5) + n + t), (n |= 0));
      }
      return (n >>> 0).toString();
    }
  }
  return ((Ae.Evaluator = e), Ae);
}
var ke = {},
  Pt = {},
  cn;
function no() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = void 0),
          (function (r) {
            r.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Pt)),
    Pt
  );
}
var dn;
function Si() {
  if (dn) return ke;
  ((dn = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.trackFeatureFlagEvent = void 0));
  const e = R(),
    r = O(),
    i = He(),
    a = no(),
    n = 500,
    o = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    u = (s) => {
      if (!s || !s.type || !s.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(s.type.toUpperCase() in a.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(s).some((c) => typeof c == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (s) => (u(s), t("trackFeatureFlagEvent", s));
  return (
    (ke.trackFeatureFlagEvent = (0, i.withRateLimiter)(
      l,
      n,
      o,
      `Feature flags calls are rate limited at ${n}req/${o / 1e3}s`,
    )),
    ke
  );
}
var De = {},
  fn;
function Ii() {
  if (fn) return De;
  ((fn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.initFeatureFlags = void 0));
  const e = R(),
    r = O(),
    i = He(),
    a = 500,
    n = 1e3 * 25,
    o = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user || !l.config)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((s) => typeof s == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (l) => (t(l), o("initFeatureFlags", { user: l.user, config: l.config }));
  return (
    (De.initFeatureFlags = (0, i.withRateLimiter)(
      u,
      a,
      n,
      `Feature flags initialisation calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    De
  );
}
var vn;
function Ci() {
  if (vn) return Me;
  ((vn = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.FeatureFlags = void 0));
  const e = Pi(),
    r = Si(),
    i = Ii(),
    a = no();
  class n {
    constructor() {
      ((this.initialized = !1), (this.eventProps = {}));
    }
    async initialize(t, u = { environment: "development" }) {
      if (this.isInitialized()) return;
      this.eventProps.environment = u.environment;
      const l = await (0, i.initFeatureFlags)({ user: t, config: u });
      ((this.initialized = !0), (this.evaluator = new e.Evaluator(l)));
    }
    checkFlag(t, u = !1) {
      if (!this.isInitialized() || !this.evaluator)
        throw (
          this.sendCheckFlagEvent(t, !1),
          new Error("FeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(t, !0), this.evaluator.checkFlag(t, u));
    }
    shutdown() {
      this.isInitialized() && ((this.initialized = !1), this.evaluator.shutDown());
    }
    isInitialized() {
      return this.initialized;
    }
    sendCheckFlagEvent(t, u) {
      const l = {
        type: a.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: u,
        },
      };
      (0, r.trackFeatureFlagEvent)(l);
    }
  }
  return ((Me.FeatureFlags = n), Me);
}
var hn;
function ji() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FeatureFlags = void 0));
        var r = Ci();
        Object.defineProperty(e, "FeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.FeatureFlags;
          },
        });
      })(Ot)),
    Ot
  );
}
var gn;
function qi() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = S;
        var i = ho();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return i.NavigationTarget;
          },
        }),
          r.__exportStar(Ue(), e),
          r.__exportStar(yo(), e),
          r.__exportStar(Ke(), e),
          r.__exportStar(Xo(), e),
          r.__exportStar($o(), e),
          r.__exportStar(ti(), e),
          r.__exportStar(ni(), e),
          r.__exportStar(oi(), e),
          r.__exportStar(si(), e),
          r.__exportStar(di(), e),
          (e.i18n = r.__importStar(fi())),
          r.__exportStar(yi(), e),
          r.__exportStar(Oi(), e),
          r.__exportStar(ji(), e));
      })(Xe)),
    Xe
  );
}
var Le = qi();
function Fi() {
  const [e, r] = T.useState(""),
    [i, a] = T.useState(""),
    [n, o] = T.useState(""),
    [t, u] = T.useState(!1),
    [l, s] = T.useState(!1),
    [c, g] = T.useState(!1),
    [m, d] = T.useState([]),
    _ = (b, w, P) => {
      d((I) => [{ id: Date.now(), query: b, result: w, timestamp: new Date(), type: P }, ...I]);
    },
    f = async () => {
      try {
        (o(""), u(!0));
        const b = await Le.invoke("execute", { query: e });
        (a(b), _(e, b, "SQL"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        u(!1);
      }
    },
    v = async () => {
      try {
        (o(""), s(!0));
        const b = await Le.invoke("executeDDL", { query: e });
        (a(b), _(e, b, "DDL"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        s(!1);
      }
    },
    h = async () => {
      try {
        (o(""), g(!0));
        const b = await Le.invoke("executeCommand", { command: e });
        (a(b), _(e, b, "COMMAND"));
      } catch (b) {
        (o(b instanceof Error ? b.message : "An error occurred"), a(""));
      } finally {
        g(!1);
      }
    },
    p = (b) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      }).format(b),
    y = (b) => {
      switch (b) {
        case "SQL":
          return "#0052CC";
        case "DDL":
          return "#36B37E";
        case "COMMAND":
          return "#FF5630";
        default:
          return "#0052CC";
      }
    };
  return E.jsxs("div", {
    style: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
    children: [
      E.jsx("h1", { children: "SQL Query Executor" }),
      E.jsxs("div", {
        style: { marginBottom: "20px" },
        children: [
          E.jsx("textarea", {
            value: e,
            onChange: (b) => r(b.target.value),
            placeholder: "Enter your SQL query here...",
            style: {
              width: "100%",
              minHeight: "150px",
              padding: "10px",
              marginBottom: "10px",
              fontFamily: "monospace",
              fontSize: "14px",
            },
          }),
          E.jsxs("div", {
            style: { display: "flex", gap: "10px" },
            children: [
              E.jsx("button", {
                onClick: f,
                disabled: t || l || c,
                style: {
                  padding: "10px 20px",
                  backgroundColor: t ? "#0052CC80" : "#0052CC",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: t ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: t
                  ? E.jsxs(E.Fragment, {
                      children: [
                        E.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Query",
              }),
              E.jsx("button", {
                onClick: v,
                disabled: t || l || c,
                style: {
                  padding: "10px 20px",
                  backgroundColor: l ? "#36B37E80" : "#36B37E",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: l ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: l
                  ? E.jsxs(E.Fragment, {
                      children: [
                        E.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute DDL",
              }),
              E.jsx("button", {
                onClick: h,
                disabled: t || l || c,
                style: {
                  padding: "10px 20px",
                  backgroundColor: c ? "#FF563080" : "#FF5630",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: c ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                },
                children: c
                  ? E.jsxs(E.Fragment, {
                      children: [
                        E.jsx("div", {
                          style: {
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          },
                        }),
                        "Executing...",
                      ],
                    })
                  : "Execute Command",
              }),
            ],
          }),
        ],
      }),
      n &&
        E.jsx("div", {
          style: {
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          },
          children: n,
        }),
      i &&
        E.jsxs("div", {
          children: [
            E.jsx("h3", { children: "Result:" }),
            E.jsx("pre", {
              style: {
                backgroundColor: "#F4F5F7",
                padding: "15px",
                borderRadius: "3px",
                overflow: "auto",
                maxHeight: "400px",
              },
              children: i,
            }),
          ],
        }),
      m.length > 0 &&
        E.jsxs("div", {
          style: { marginTop: "30px" },
          children: [
            E.jsx("h2", { children: "Query History" }),
            E.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: "20px" },
              children: m.map((b) =>
                E.jsxs(
                  "div",
                  {
                    style: { border: "1px solid #DFE1E6", borderRadius: "3px", overflow: "hidden" },
                    children: [
                      E.jsxs("div", {
                        style: {
                          padding: "10px",
                          backgroundColor: y(b.type),
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          E.jsxs("span", {
                            style: { fontWeight: "bold" },
                            children: [b.type, " Query"],
                          }),
                          E.jsx("span", { children: p(b.timestamp) }),
                        ],
                      }),
                      E.jsxs("div", {
                        style: { padding: "15px" },
                        children: [
                          E.jsxs("div", {
                            style: { marginBottom: "10px" },
                            children: [
                              E.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Query:" }),
                              E.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: b.query,
                              }),
                            ],
                          }),
                          E.jsxs("div", {
                            children: [
                              E.jsx("h4", { style: { margin: "0 0 5px 0" }, children: "Result:" }),
                              E.jsx("pre", {
                                style: {
                                  backgroundColor: "#F4F5F7",
                                  padding: "10px",
                                  borderRadius: "3px",
                                  margin: 0,
                                  overflow: "auto",
                                  maxHeight: "200px",
                                },
                                children: b.result,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  b.id,
                ),
              ),
            }),
          ],
        }),
      E.jsx("style", {
        children: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
      }),
    ],
  });
}
const Bi = document.getElementById("root"),
  Ti = oo.createRoot(Bi),
  pn = () => {
    Ti.render(E.jsx(Fi, {}));
  };
Le.view.theme
  .enable()
  .then(() => {
    pn();
  })
  .catch((e) => {
    (console.error(e.message), pn());
  });
