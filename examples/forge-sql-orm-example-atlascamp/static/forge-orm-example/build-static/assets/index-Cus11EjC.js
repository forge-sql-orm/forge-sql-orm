const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-BEjbWMh5.js", "./lodash-vendor-RhPBt8ex.js"]),
) => i.map((i) => d[i]);
import { r as pn, c as oo } from "./react-dom-vendor-BXC0oJZi.js";
import { g as io, a as so, r as ao } from "./lodash-vendor-RhPBt8ex.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const t of i.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = o(n);
    fetch(n.href, i);
  }
})();
var Qe = { exports: {} },
  U = {};
var It;
function uo() {
  if (It) return U;
  It = 1;
  var e = pn(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(u, l, s) {
    var c,
      v = {},
      m = null,
      d = null;
    (s !== void 0 && (m = "" + s),
      l.key !== void 0 && (m = "" + l.key),
      l.ref !== void 0 && (d = l.ref));
    for (c in l) a.call(l, c) && !i.hasOwnProperty(c) && (v[c] = l[c]);
    if (u && u.defaultProps) for (c in ((l = u.defaultProps), l)) v[c] === void 0 && (v[c] = l[c]);
    return { $$typeof: r, type: u, key: m, ref: d, props: v, _owner: n.current };
  }
  return ((U.Fragment = o), (U.jsx = t), (U.jsxs = t), U);
}
var qt;
function lo() {
  return (qt || ((qt = 1), (Qe.exports = uo())), Qe.exports);
}
var b = lo(),
  xe = pn();
const co = io(xe);
var Ye = {},
  Pt = function (e, r) {
    return (
      (Pt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, a) {
            o.__proto__ = a;
          }) ||
        function (o, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (o[n] = a[n]);
        }),
      Pt(e, r)
    );
  };
function _n(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Pt(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var Le = function () {
  return (
    (Le =
      Object.assign ||
      function (r) {
        for (var o, a = 1, n = arguments.length; a < n; a++) {
          o = arguments[a];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }),
    Le.apply(this, arguments)
  );
};
function yn(e, r) {
  var o = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      r.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (o[a[n]] = e[a[n]]);
  return o;
}
function mn(e, r, o, a) {
  var n = arguments.length,
    i = n < 3 ? r : a === null ? (a = Object.getOwnPropertyDescriptor(r, o)) : a,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, o, a);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (t = e[u]) && (i = (n < 3 ? t(i) : n > 3 ? t(r, o, i) : t(r, o)) || i);
  return (n > 3 && i && Object.defineProperty(r, o, i), i);
}
function bn(e, r) {
  return function (o, a) {
    r(o, a, e);
  };
}
function wn(e, r, o, a, n, i) {
  function t(h) {
    if (h !== void 0 && typeof h != "function") throw new TypeError("Function expected");
    return h;
  }
  for (
    var u = a.kind,
      l = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      s = !r && e ? (a.static ? e : e.prototype) : null,
      c = r || (s ? Object.getOwnPropertyDescriptor(s, a.name) : {}),
      v,
      m = !1,
      d = o.length - 1;
    d >= 0;
    d--
  ) {
    var _ = {};
    for (var f in a) _[f] = f === "access" ? {} : a[f];
    for (var f in a.access) _.access[f] = a.access[f];
    _.addInitializer = function (h) {
      if (m) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(h || null));
    };
    var g = (0, o[d])(u === "accessor" ? { get: c.get, set: c.set } : c[l], _);
    if (u === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((v = t(g.get)) && (c.get = v),
        (v = t(g.set)) && (c.set = v),
        (v = t(g.init)) && n.unshift(v));
    } else (v = t(g)) && (u === "field" ? n.unshift(v) : (c[l] = v));
  }
  (s && Object.defineProperty(s, a.name, c), (m = !0));
}
function En(e, r, o) {
  for (var a = arguments.length > 2, n = 0; n < r.length; n++)
    o = a ? r[n].call(e, o) : r[n].call(e);
  return a ? o : void 0;
}
function On(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Rn(e, r, o) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", r) : r })
  );
}
function Pn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Sn(e, r, o, a) {
  function n(i) {
    return i instanceof o
      ? i
      : new o(function (t) {
          t(i);
        });
  }
  return new (o || (o = Promise))(function (i, t) {
    function u(c) {
      try {
        s(a.next(c));
      } catch (v) {
        t(v);
      }
    }
    function l(c) {
      try {
        s(a.throw(c));
      } catch (v) {
        t(v);
      }
    }
    function s(c) {
      c.done ? i(c.value) : n(c.value).then(u, l);
    }
    s((a = a.apply(e, r || [])).next());
  });
}
function Cn(e, r) {
  var o = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    a,
    n,
    i,
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
    for (; t && ((t = 0), s[0] && (o = 0)), o; )
      try {
        if (
          ((a = 1),
          n &&
            (i =
              s[0] & 2 ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
            !(i = i.call(n, s[1])).done)
        )
          return i;
        switch (((n = 0), i && (s = [s[0] & 2, i.value]), s[0])) {
          case 0:
          case 1:
            i = s;
            break;
          case 4:
            return (o.label++, { value: s[1], done: !1 });
          case 5:
            (o.label++, (n = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((i = o.trys), !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
              o.label = s[1];
              break;
            }
            if (s[0] === 6 && o.label < i[1]) {
              ((o.label = i[1]), (i = s));
              break;
            }
            if (i && o.label < i[2]) {
              ((o.label = i[2]), o.ops.push(s));
              break;
            }
            (i[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        s = r.call(e, o);
      } catch (c) {
        ((s = [6, c]), (n = 0));
      } finally {
        a = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var Ge = Object.create
  ? function (e, r, o, a) {
      a === void 0 && (a = o);
      var n = Object.getOwnPropertyDescriptor(r, o);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[o];
          },
        }),
        Object.defineProperty(e, a, n));
    }
  : function (e, r, o, a) {
      (a === void 0 && (a = o), (e[a] = r[o]));
    };
function jn(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && Ge(r, e, o);
}
function Ne(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    o = r && e[r],
    a = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && a >= e.length && (e = void 0), { value: e && e[a++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ct(e, r) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var a = o.call(e),
    n,
    i = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = a.next()).done; ) i.push(n.value);
  } catch (u) {
    t = { error: u };
  } finally {
    try {
      n && !n.done && (o = a.return) && o.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return i;
}
function In() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Ct(arguments[r]));
  return e;
}
function qn() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var a = Array(e), n = 0, r = 0; r < o; r++)
    for (var i = arguments[r], t = 0, u = i.length; t < u; t++, n++) a[n] = i[t];
  return a;
}
function Bn(e, r, o) {
  if (o || arguments.length === 2)
    for (var a = 0, n = r.length, i; a < n; a++)
      (i || !(a in r)) && (i || (i = Array.prototype.slice.call(r, 0, a)), (i[a] = r[a]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function D(e) {
  return this instanceof D ? ((this.v = e), this) : new D(e);
}
function Fn(e, r, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = o.apply(e, r || []),
    n,
    i = [];
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
      return Promise.resolve(_).then(d, v);
    };
  }
  function u(d, _) {
    a[d] &&
      ((n[d] = function (f) {
        return new Promise(function (g, h) {
          i.push([d, f, g, h]) > 1 || l(d, f);
        });
      }),
      _ && (n[d] = _(n[d])));
  }
  function l(d, _) {
    try {
      s(a[d](_));
    } catch (f) {
      m(i[0][3], f);
    }
  }
  function s(d) {
    d.value instanceof D ? Promise.resolve(d.value.v).then(c, v) : m(i[0][2], d);
  }
  function c(d) {
    l("next", d);
  }
  function v(d) {
    l("throw", d);
  }
  function m(d, _) {
    (d(_), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function Tn(e) {
  var r, o;
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
  function a(n, i) {
    r[n] = e[n]
      ? function (t) {
          return (o = !o) ? { value: D(e[n](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Mn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    o;
  return r
    ? r.call(e)
    : ((e = typeof Ne == "function" ? Ne(e) : e[Symbol.iterator]()),
      (o = {}),
      a("next"),
      a("throw"),
      a("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function a(i) {
    o[i] =
      e[i] &&
      function (t) {
        return new Promise(function (u, l) {
          ((t = e[i](t)), n(u, l, t.done, t.value));
        });
      };
  }
  function n(i, t, u, l) {
    Promise.resolve(l).then(function (s) {
      i({ value: s, done: u });
    }, t);
  }
}
function An(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var fo = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  St = function (e) {
    return (
      (St =
        Object.getOwnPropertyNames ||
        function (r) {
          var o = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (o[o.length] = a);
          return o;
        }),
      St(e)
    );
  };
function kn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o = St(e), a = 0; a < o.length; a++) o[a] !== "default" && Ge(r, e, o[a]);
  return (fo(r, e), r);
}
function xn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dn(e, r, o, a) {
  if (o === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? a : o === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function Un(e, r, o, a, n) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? n.call(e, o) : n ? (n.value = o) : r.set(e, o), o);
}
function Ln(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function Nn(e, r, o) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var a, n;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      a = r[Symbol.asyncDispose];
    }
    if (a === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((a = r[Symbol.dispose]), o && (n = a));
    }
    if (typeof a != "function") throw new TypeError("Object not disposable.");
    (n &&
      (a = function () {
        try {
          n.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: r, dispose: a, async: o }));
  } else o && e.stack.push({ async: !0 });
  return r;
}
var go =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, o) {
        var a = new Error(o);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function Gn(e) {
  function r(i) {
    ((e.error = e.hasError ? new go(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var o,
    a = 0;
  function n() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && a === 1) return ((a = 0), e.stack.push(o), Promise.resolve().then(n));
        if (o.dispose) {
          var i = o.dispose.call(o.value);
          if (o.async)
            return (
              (a |= 2),
              Promise.resolve(i).then(n, function (t) {
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
function Vn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, a, n, i, t) {
        return a
          ? r
            ? ".jsx"
            : ".js"
          : n && (!i || !t)
            ? o
            : n + i + "." + t.toLowerCase() + "js";
      })
    : e;
}
const ho = {
    __extends: _n,
    __assign: Le,
    __rest: yn,
    __decorate: mn,
    __param: bn,
    __esDecorate: wn,
    __runInitializers: En,
    __propKey: On,
    __setFunctionName: Rn,
    __metadata: Pn,
    __awaiter: Sn,
    __generator: Cn,
    __createBinding: Ge,
    __exportStar: jn,
    __values: Ne,
    __read: Ct,
    __spread: In,
    __spreadArrays: qn,
    __spreadArray: Bn,
    __await: D,
    __asyncGenerator: Fn,
    __asyncDelegator: Tn,
    __asyncValues: Mn,
    __makeTemplateObject: An,
    __importStar: kn,
    __importDefault: xn,
    __classPrivateFieldGet: Dn,
    __classPrivateFieldSet: Un,
    __classPrivateFieldIn: Ln,
    __addDisposableResource: Nn,
    __disposeResources: Gn,
    __rewriteRelativeImportExtension: Vn,
  },
  vo = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Nn,
        get __assign() {
          return Le;
        },
        __asyncDelegator: Tn,
        __asyncGenerator: Fn,
        __asyncValues: Mn,
        __await: D,
        __awaiter: Sn,
        __classPrivateFieldGet: Dn,
        __classPrivateFieldIn: Ln,
        __classPrivateFieldSet: Un,
        __createBinding: Ge,
        __decorate: mn,
        __disposeResources: Gn,
        __esDecorate: wn,
        __exportStar: jn,
        __extends: _n,
        __generator: Cn,
        __importDefault: xn,
        __importStar: kn,
        __makeTemplateObject: An,
        __metadata: Pn,
        __param: bn,
        __propKey: On,
        __read: Ct,
        __rest: yn,
        __rewriteRelativeImportExtension: Vn,
        __runInitializers: En,
        __setFunctionName: Rn,
        __spread: In,
        __spreadArray: Bn,
        __spreadArrays: qn,
        __values: Ne,
        default: ho,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S = so(vo);
var L = {},
  Bt;
function po() {
  return (
    Bt ||
      ((Bt = 1),
      Object.defineProperty(L, "__esModule", { value: !0 }),
      (L.NavigationTarget = void 0),
      (L.NavigationTarget = {
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
    L
  );
}
var Xe = {},
  Ze = {},
  N = {},
  G = {},
  Ft;
function R() {
  if (Ft) return G;
  ((Ft = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.BridgeAPIError = void 0));
  class e extends Error {}
  return ((G.BridgeAPIError = e), G);
}
var Tt;
function O() {
  if (Tt) return N;
  ((Tt = 1), Object.defineProperty(N, "__esModule", { value: !0 }), (N.getCallBridge = void 0));
  const e = R();
  function r(a) {
    return !!a?.callBridge;
  }
  const o = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((N.getCallBridge = o), N);
}
var V = {},
  Mt;
function Ve() {
  if (Mt) return V;
  ((Mt = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.withRateLimiter = void 0));
  const e = R(),
    r = (o, a, n, i) => {
      let t = Date.now(),
        u = 0;
      return async (...l) => {
        const s = Date.now();
        if ((s - t > n && ((t = s), (u = 0)), u >= a))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((u = u + 1), o(...l));
      };
    };
  return ((V.withRateLimiter = r), V);
}
var At;
function _o() {
  return (
    At ||
      ((At = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = O(),
          o = R(),
          a = Ve(),
          n = (0, r.getCallBridge)(),
          i = (l) => {
            if (l && Object.values(l).some((s) => typeof s == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, s) => {
            if (typeof l != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (i(s), n("invoke", { functionKey: l, payload: s }));
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
      })(Ze)),
    Ze
  );
}
var kt;
function De() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(_o(), e));
      })(Xe)),
    Xe
  );
}
var $e = {},
  W = {},
  et = {},
  xt;
function Wn() {
  return (
    xt ||
      ((xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = O(),
          o = R(),
          a = Ve(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (v) {
          ((v.REMOTE = "Remote"), (v.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, r.getCallBridge)(),
          l = (v) => {
            if (v && Object.values(v).some((m) => typeof m == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (v) => async (m) => {
            l(m);
            const d = { ...m, invokeType: `ui-${v.toLowerCase()}-fetch` },
              _ = await u("invoke", d),
              { success: f, payload: g, error: h } = _ ?? {},
              p = { ...(f ? g : h) };
            if (p && p.headers)
              for (const y in p.headers)
                Array.isArray(p.headers[y]) && (p.headers[y] = p.headers[y].join(","));
            return p;
          },
          c = (v) => {
            const m = s(v);
            return (0, a.withRateLimiter)(
              m,
              n,
              t,
              `${v} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = c;
      })(et)),
    et
  );
}
var Dt;
function yo() {
  if (Dt) return W;
  ((Dt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.invokeRemote = void 0));
  const e = Wn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((W.invokeRemote = r), W);
}
var z = {},
  Ut;
function mo() {
  if (Ut) return z;
  ((Ut = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.invokeService = void 0));
  const e = Wn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((z.invokeService = r), z);
}
var Lt;
function bo() {
  return (
    Lt ||
      ((Lt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(yo(), e), r.__exportStar(mo(), e));
      })($e)),
    $e
  );
}
var tt = {},
  H = {},
  K = {},
  Nt;
function wo() {
  if (Nt) return K;
  ((Nt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.submit = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await o("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((K.submit = a), K);
}
var J = {},
  Gt;
function Eo() {
  if (Gt) return J;
  ((Gt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.close = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await o("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((J.close = a), J);
}
var Q = {},
  Vt;
function Oo() {
  if (Vt) return Q;
  ((Vt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.open = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async () => {
      try {
        if ((await o("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Q.open = a), Q);
}
var Y = {},
  Wt;
function Ro() {
  if (Wt) return Y;
  ((Wt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.refresh = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await o("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((Y.refresh = a), Y);
}
var X = {},
  zt;
function Po() {
  if (zt) return X;
  ((zt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.createHistory = void 0));
  const r = (0, O().getCallBridge)(),
    o = async () => {
      const a = await r("createHistory");
      return (
        a.listen((n) => {
          a.location = n;
        }),
        a
      );
    };
  return ((X.createHistory = o), X);
}
var Z = {},
  rt = {},
  q = {},
  Ht;
function zn() {
  return (
    Ht ||
      ((Ht = 1),
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
var T = {},
  Kt;
function So() {
  if (Kt) return T;
  ((Kt = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.TranslationsGetter = T.TranslationGetterError = void 0));
  const e = (a, n) => {
    a.includes(n) || a.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  T.TranslationGetterError = r;
  class o {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, i = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: u } = i;
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
      const i = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, i);
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
      let i = this.translationResources.get(n);
      if (!i)
        try {
          ((i = await this.resourcesAccessor.getTranslationResource(n)),
            this.translationResources.set(n, i));
        } catch (t) {
          throw t instanceof r ? t : new r(`Failed to get translation resource for locale: ${n}`);
        }
      return i;
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
    getLocaleLookupOrder(n, i) {
      const { locales: t, fallback: u } = i,
        l = [n],
        s = u[n];
      return (
        s && Array.isArray(s) && s.length > 0 && l.push(...s),
        e(l, i.fallback.default),
        l.filter((c) => t.includes(c))
      );
    }
  }
  return ((T.TranslationsGetter = o), T);
}
var $ = {},
  nt = {},
  Jt;
function Hn() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = S.__importDefault(ao()),
          a = (i, t, u) => {
            const l = i[u];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = a;
        const n = (i, t) => {
          let u = i[t];
          if (!u) {
            const l = t.split(".");
            l.length > 1 && (u = (0, o.default)(i, l, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = n;
      })(nt)),
    nt
  );
}
var Qt;
function Co() {
  if (Qt) return $;
  ((Qt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.Translator = void 0));
  const e = Hn();
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
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(i, a);
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
  return (($.Translator = r), $);
}
var ee = {},
  Yt;
function jo() {
  if (Yt) return ee;
  ((Yt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.ensureLocale = void 0));
  const e = zn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    a = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, t) => {
        const [u] = t.split("-");
        return (i[u] || (i[u] = t), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const t = i.replace("_", "-");
      return r.has(t) ? t : (a[t] ?? o[t] ?? null);
    };
  return ((ee.ensureLocale = n), ee);
}
var ot = {},
  Xt;
function Io() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          o = (s) => typeof s?.i18n == "string",
          a = (s) => s.startsWith("connect-"),
          n = (s) => s.startsWith("core:"),
          i = (s) => {
            const c = new Set(),
              v = (m, d) =>
                !r(m) || c.has(m)
                  ? []
                  : (c.add(m),
                    Object.entries(m).flatMap(([_, f]) => {
                      const g = [...d, _];
                      return o(f)
                        ? [{ propertyPath: g, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((h) => v(h, g))
                          : v(f, g);
                    }));
            return v(s, []);
          },
          t = (s) =>
            Object.entries(s).flatMap(([c, v]) =>
              !a(c) && !n(c) && v && Array.isArray(v) && v.length > 0 ? v.map((m) => [m, c]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const u = (s) => {
          const c = new Set();
          for (const v of (0, e.getI18nSupportedModuleEntries)(s)) {
            const m = i(v[0]);
            for (const { key: d } of m) c.add(d);
          }
          return c.size > 0 ? Array.from(c) : [];
        };
        e.extractI18nKeysFromModules = u;
        const l = (s) => {
          const c = [];
          for (const v of (0, e.getI18nSupportedModuleEntries)(s)) {
            const m = i(v[0]);
            for (const d of m) c.push({ moduleName: v[1], ...d });
          }
          return c;
        };
        e.extractI18nPropertiesFromModules = l;
      })(ot)),
    ot
  );
}
var it = {},
  Zt;
function qo() {
  return (Zt || ((Zt = 1), Object.defineProperty(it, "__esModule", { value: !0 })), it);
}
var $t;
function Kn() {
  return (
    $t ||
      (($t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = S;
        (r.__exportStar(zn(), e),
          r.__exportStar(So(), e),
          r.__exportStar(Co(), e),
          r.__exportStar(jo(), e));
        var o = Hn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
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
          r.__exportStar(qo(), e));
      })(rt)),
    rt
  );
}
var er;
function Bo() {
  if (er) return Z;
  ((er = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.getContext = void 0));
  const e = O(),
    r = Kn(),
    o = (0, e.getCallBridge)(),
    a = async () => {
      var n;
      const i = await o("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((Z.getContext = a), Z);
}
var te = {},
  tr;
function Fo() {
  if (tr) return te;
  ((tr = 1),
    Object.defineProperty(te, "__esModule", { value: !0 }),
    (te.changeWindowTitle = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        await o("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((te.changeWindowTitle = a), te);
}
var re = {},
  rr;
function To() {
  if (rr) return re;
  ((rr = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.theme = void 0));
  const r = (0, O().getCallBridge)();
  return ((re.theme = { enable: () => r("enableTheming") }), re);
}
var ne = {},
  oe = {},
  st = {},
  M = {},
  nr;
function Jn() {
  if (nr) return M;
  ((nr = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.blobToBase64 = M.base64ToBlob = void 0));
  const e = (o, a) => {
    if (!o) return null;
    const n = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(n),
      t = new Array(i.length);
    for (let l = 0; l < i.length; l++) t[l] = i.charCodeAt(l);
    const u = new Uint8Array(t);
    return new Blob([u], { type: a });
  };
  M.base64ToBlob = e;
  const r = (o) =>
    new Promise((a, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        a(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(o));
    });
  return ((M.blobToBase64 = r), M);
}
var or;
function Mo() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = Jn(),
          o = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const c = Object.getPrototypeOf(s);
            if (c === null) return !0;
            const v = Object.prototype.hasOwnProperty.call(c, "constructor") && c.constructor;
            return (
              typeof v == "function" &&
              v instanceof v &&
              Function.prototype.call(v) === Function.prototype.call(s)
            );
          },
          a = async (s) => ({ data: await (0, r.blobToBase64)(s), type: s.type }),
          n = (s) => (0, r.base64ToBlob)(s.data, s.type),
          i = async (s) => {
            if (s instanceof Blob) return { ...(await a(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((c) => (0, e.serialiseBlobsInPayload)(c)));
            if (s && o(s)) {
              const c = await Promise.all(
                Object.entries(s).map(async ([v, m]) => [
                  v,
                  await (0, e.serialiseBlobsInPayload)(m),
                ]),
              );
              return Object.fromEntries(c);
            }
            return s;
          };
        e.serialiseBlobsInPayload = i;
        const t = (s) => {
          if (s && o(s) && "__isBlobData" in s) {
            const c = s;
            return n({ data: c.data, type: c.type });
          }
          if (Array.isArray(s)) return s.map((c) => (0, e.deserialiseBlobsInPayload)(c));
          if (s && o(s)) {
            const c = {};
            for (const [v, m] of Object.entries(s)) c[v] = (0, e.deserialiseBlobsInPayload)(m);
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
              : s && o(s)
                ? Object.values(s).some((c) => (0, e.containsBlobs)(c))
                : !1;
        e.containsBlobs = u;
        const l = (s) =>
          s && o(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((c) => (0, e.containsSerialisedBlobs)(c))
              : s && o(s)
                ? Object.values(s).some((c) => (0, e.containsSerialisedBlobs)(c))
                : !1;
        e.containsSerialisedBlobs = l;
      })(st)),
    st
  );
}
var ir;
function Qn() {
  if (ir) return oe;
  ((ir = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.events = void 0));
  const e = O(),
    r = Mo(),
    o = (0, e.getCallBridge)(),
    a = (l) => (s) => {
      let c = s;
      return ((0, r.containsSerialisedBlobs)(s) && (c = (0, r.deserialiseBlobsInPayload)(s)), l(c));
    },
    n = async (l, s) => {
      let c = s;
      return (
        (0, r.containsBlobs)(s) && (c = await (0, r.serialiseBlobsInPayload)(s)),
        o("emit", { event: l, payload: c })
      );
    },
    i = (l, s) => o("on", { event: l, callback: a(s) }),
    t = async (l, s) => {
      let c = s;
      return (
        (0, r.containsBlobs)(s) && (c = await (0, r.serialiseBlobsInPayload)(s)),
        o("emitPublic", { event: l, payload: c })
      );
    },
    u = (l, s) => o("onPublic", { event: l, callback: a(s) });
  return ((oe.events = { emit: n, on: i, emitPublic: t, onPublic: u }), oe);
}
var sr;
function Ao() {
  if (sr) return ne;
  ((sr = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.emitReadyEvent = void 0));
  const e = Qn(),
    r = $n(),
    a = (0, O().getCallBridge)(),
    n = "EXTENSION_READY",
    i = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await a("emitReadyEvent");
      } catch {}
    };
  return ((ne.emitReadyEvent = i), ne);
}
const ko = "modulepreload",
  xo = function (e, r) {
    return new URL(e, r).href;
  },
  ar = {},
  Do = function (r, o, a) {
    let n = Promise.resolve();
    if (o && o.length > 0) {
      let s = function (c) {
        return Promise.all(
          c.map((v) =>
            Promise.resolve(v).then(
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
        o.map((c) => {
          if (((c = xo(c, a)), c in ar)) return;
          ar[c] = !0;
          const v = c.endsWith(".css"),
            m = v ? '[rel="stylesheet"]' : "";
          if (a)
            for (let _ = t.length - 1; _ >= 0; _--) {
              const f = t[_];
              if (f.href === c && (!v || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = v ? "stylesheet" : ko),
            v || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            v)
          )
            return new Promise((_, f) => {
              (d.addEventListener("load", _),
                d.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${c}`))));
            });
        }),
      );
    }
    function i(t) {
      const u = new Event("vite:preloadError", { cancelable: !0 });
      if (((u.payload = t), window.dispatchEvent(u), !u.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const u of t || []) u.status === "rejected" && i(u.reason);
      return r().catch(i);
    });
  };
var ie = {},
  at = {},
  se = {},
  Ue = {},
  ur;
function Yn() {
  if (ur) return Ue;
  ((ur = 1), Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.default = o));
  let e;
  const r = new Uint8Array(16);
  function o() {
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
  return Ue;
}
var x = {},
  ae = {},
  ue = {},
  lr;
function Uo() {
  if (lr) return ue;
  ((lr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ue.default = e), ue);
}
var cr;
function We() {
  if (cr) return ae;
  ((cr = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.default = void 0));
  var e = r(Uo());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var a = o;
  return ((ae.default = a), ae);
}
var dr;
function ze() {
  if (dr) return x;
  ((dr = 1),
    Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.default = void 0),
    (x.unsafeStringify = a));
  var e = r(We());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const o = [];
  for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
  function a(t, u = 0) {
    return (
      o[t[u + 0]] +
      o[t[u + 1]] +
      o[t[u + 2]] +
      o[t[u + 3]] +
      "-" +
      o[t[u + 4]] +
      o[t[u + 5]] +
      "-" +
      o[t[u + 6]] +
      o[t[u + 7]] +
      "-" +
      o[t[u + 8]] +
      o[t[u + 9]] +
      "-" +
      o[t[u + 10]] +
      o[t[u + 11]] +
      o[t[u + 12]] +
      o[t[u + 13]] +
      o[t[u + 14]] +
      o[t[u + 15]]
    );
  }
  function n(t, u = 0) {
    const l = a(t, u);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var i = n;
  return ((x.default = i), x);
}
var fr;
function Lo() {
  if (fr) return se;
  ((fr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.default = void 0));
  var e = o(Yn()),
    r = ze();
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  let a,
    n,
    i = 0,
    t = 0;
  function u(s, c, v) {
    let m = (c && v) || 0;
    const d = c || new Array(16);
    s = s || {};
    let _ = s.node || a,
      f = s.clockseq !== void 0 ? s.clockseq : n;
    if (_ == null || f == null) {
      const E = s.random || (s.rng || e.default)();
      (_ == null && (_ = a = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        f == null && (f = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let g = s.msecs !== void 0 ? s.msecs : Date.now(),
      h = s.nsecs !== void 0 ? s.nsecs : t + 1;
    const p = g - i + (h - t) / 1e4;
    if (
      (p < 0 && s.clockseq === void 0 && (f = (f + 1) & 16383),
      (p < 0 || g > i) && s.nsecs === void 0 && (h = 0),
      h >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = g), (t = h), (n = f), (g += 122192928e5));
    const y = ((g & 268435455) * 1e4 + h) % 4294967296;
    ((d[m++] = (y >>> 24) & 255),
      (d[m++] = (y >>> 16) & 255),
      (d[m++] = (y >>> 8) & 255),
      (d[m++] = y & 255));
    const w = ((g / 4294967296) * 1e4) & 268435455;
    ((d[m++] = (w >>> 8) & 255),
      (d[m++] = w & 255),
      (d[m++] = ((w >>> 24) & 15) | 16),
      (d[m++] = (w >>> 16) & 255),
      (d[m++] = (f >>> 8) | 128),
      (d[m++] = f & 255));
    for (let E = 0; E < 6; ++E) d[m + E] = _[E];
    return c || (0, r.unsafeStringify)(d);
  }
  var l = u;
  return ((se.default = l), se);
}
var le = {},
  F = {},
  ce = {},
  gr;
function Xn() {
  if (gr) return ce;
  ((gr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    let i;
    const t = new Uint8Array(16);
    return (
      (t[0] = (i = parseInt(n.slice(0, 8), 16)) >>> 24),
      (t[1] = (i >>> 16) & 255),
      (t[2] = (i >>> 8) & 255),
      (t[3] = i & 255),
      (t[4] = (i = parseInt(n.slice(9, 13), 16)) >>> 8),
      (t[5] = i & 255),
      (t[6] = (i = parseInt(n.slice(14, 18), 16)) >>> 8),
      (t[7] = i & 255),
      (t[8] = (i = parseInt(n.slice(19, 23), 16)) >>> 8),
      (t[9] = i & 255),
      (t[10] = ((i = parseInt(n.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (i / 4294967296) & 255),
      (t[12] = (i >>> 24) & 255),
      (t[13] = (i >>> 16) & 255),
      (t[14] = (i >>> 8) & 255),
      (t[15] = i & 255),
      t
    );
  }
  var a = o;
  return ((ce.default = a), ce);
}
var hr;
function Zn() {
  if (hr) return F;
  ((hr = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.URL = F.DNS = void 0),
    (F.default = t));
  var e = ze(),
    r = o(Xn());
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u) {
    u = unescape(encodeURIComponent(u));
    const l = [];
    for (let s = 0; s < u.length; ++s) l.push(u.charCodeAt(s));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  F.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  F.URL = i;
  function t(u, l, s) {
    function c(v, m, d, _) {
      var f;
      if (
        (typeof v == "string" && (v = a(v)),
        typeof m == "string" && (m = (0, r.default)(m)),
        ((f = m) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + v.length);
      if (
        (g.set(m),
        g.set(v, m.length),
        (g = s(g)),
        (g[6] = (g[6] & 15) | l),
        (g[8] = (g[8] & 63) | 128),
        d)
      ) {
        _ = _ || 0;
        for (let h = 0; h < 16; ++h) d[_ + h] = g[h];
        return d;
      }
      return (0, e.unsafeStringify)(g);
    }
    try {
      c.name = u;
    } catch {}
    return ((c.DNS = n), (c.URL = i), c);
  }
  return F;
}
var de = {},
  vr;
function No() {
  if (vr) return de;
  ((vr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
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
      g = "0123456789abcdef";
    for (let h = 0; h < f; h += 8) {
      const p = (d[h >> 5] >>> (h % 32)) & 255,
        y = parseInt(g.charAt((p >>> 4) & 15) + g.charAt(p & 15), 16);
      _.push(y);
    }
    return _;
  }
  function o(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function a(d, _) {
    ((d[_ >> 5] |= 128 << (_ % 32)), (d[o(_) - 1] = _));
    let f = 1732584193,
      g = -271733879,
      h = -1732584194,
      p = 271733878;
    for (let y = 0; y < d.length; y += 16) {
      const w = f,
        E = g,
        P = h,
        j = p;
      ((f = l(f, g, h, p, d[y], 7, -680876936)),
        (p = l(p, f, g, h, d[y + 1], 12, -389564586)),
        (h = l(h, p, f, g, d[y + 2], 17, 606105819)),
        (g = l(g, h, p, f, d[y + 3], 22, -1044525330)),
        (f = l(f, g, h, p, d[y + 4], 7, -176418897)),
        (p = l(p, f, g, h, d[y + 5], 12, 1200080426)),
        (h = l(h, p, f, g, d[y + 6], 17, -1473231341)),
        (g = l(g, h, p, f, d[y + 7], 22, -45705983)),
        (f = l(f, g, h, p, d[y + 8], 7, 1770035416)),
        (p = l(p, f, g, h, d[y + 9], 12, -1958414417)),
        (h = l(h, p, f, g, d[y + 10], 17, -42063)),
        (g = l(g, h, p, f, d[y + 11], 22, -1990404162)),
        (f = l(f, g, h, p, d[y + 12], 7, 1804603682)),
        (p = l(p, f, g, h, d[y + 13], 12, -40341101)),
        (h = l(h, p, f, g, d[y + 14], 17, -1502002290)),
        (g = l(g, h, p, f, d[y + 15], 22, 1236535329)),
        (f = s(f, g, h, p, d[y + 1], 5, -165796510)),
        (p = s(p, f, g, h, d[y + 6], 9, -1069501632)),
        (h = s(h, p, f, g, d[y + 11], 14, 643717713)),
        (g = s(g, h, p, f, d[y], 20, -373897302)),
        (f = s(f, g, h, p, d[y + 5], 5, -701558691)),
        (p = s(p, f, g, h, d[y + 10], 9, 38016083)),
        (h = s(h, p, f, g, d[y + 15], 14, -660478335)),
        (g = s(g, h, p, f, d[y + 4], 20, -405537848)),
        (f = s(f, g, h, p, d[y + 9], 5, 568446438)),
        (p = s(p, f, g, h, d[y + 14], 9, -1019803690)),
        (h = s(h, p, f, g, d[y + 3], 14, -187363961)),
        (g = s(g, h, p, f, d[y + 8], 20, 1163531501)),
        (f = s(f, g, h, p, d[y + 13], 5, -1444681467)),
        (p = s(p, f, g, h, d[y + 2], 9, -51403784)),
        (h = s(h, p, f, g, d[y + 7], 14, 1735328473)),
        (g = s(g, h, p, f, d[y + 12], 20, -1926607734)),
        (f = c(f, g, h, p, d[y + 5], 4, -378558)),
        (p = c(p, f, g, h, d[y + 8], 11, -2022574463)),
        (h = c(h, p, f, g, d[y + 11], 16, 1839030562)),
        (g = c(g, h, p, f, d[y + 14], 23, -35309556)),
        (f = c(f, g, h, p, d[y + 1], 4, -1530992060)),
        (p = c(p, f, g, h, d[y + 4], 11, 1272893353)),
        (h = c(h, p, f, g, d[y + 7], 16, -155497632)),
        (g = c(g, h, p, f, d[y + 10], 23, -1094730640)),
        (f = c(f, g, h, p, d[y + 13], 4, 681279174)),
        (p = c(p, f, g, h, d[y], 11, -358537222)),
        (h = c(h, p, f, g, d[y + 3], 16, -722521979)),
        (g = c(g, h, p, f, d[y + 6], 23, 76029189)),
        (f = c(f, g, h, p, d[y + 9], 4, -640364487)),
        (p = c(p, f, g, h, d[y + 12], 11, -421815835)),
        (h = c(h, p, f, g, d[y + 15], 16, 530742520)),
        (g = c(g, h, p, f, d[y + 2], 23, -995338651)),
        (f = v(f, g, h, p, d[y], 6, -198630844)),
        (p = v(p, f, g, h, d[y + 7], 10, 1126891415)),
        (h = v(h, p, f, g, d[y + 14], 15, -1416354905)),
        (g = v(g, h, p, f, d[y + 5], 21, -57434055)),
        (f = v(f, g, h, p, d[y + 12], 6, 1700485571)),
        (p = v(p, f, g, h, d[y + 3], 10, -1894986606)),
        (h = v(h, p, f, g, d[y + 10], 15, -1051523)),
        (g = v(g, h, p, f, d[y + 1], 21, -2054922799)),
        (f = v(f, g, h, p, d[y + 8], 6, 1873313359)),
        (p = v(p, f, g, h, d[y + 15], 10, -30611744)),
        (h = v(h, p, f, g, d[y + 6], 15, -1560198380)),
        (g = v(g, h, p, f, d[y + 13], 21, 1309151649)),
        (f = v(f, g, h, p, d[y + 4], 6, -145523070)),
        (p = v(p, f, g, h, d[y + 11], 10, -1120210379)),
        (h = v(h, p, f, g, d[y + 2], 15, 718787259)),
        (g = v(g, h, p, f, d[y + 9], 21, -343485551)),
        (f = i(f, w)),
        (g = i(g, E)),
        (h = i(h, P)),
        (p = i(p, j)));
    }
    return [f, g, h, p];
  }
  function n(d) {
    if (d.length === 0) return [];
    const _ = d.length * 8,
      f = new Uint32Array(o(_));
    for (let g = 0; g < _; g += 8) f[g >> 5] |= (d[g / 8] & 255) << (g % 32);
    return f;
  }
  function i(d, _) {
    const f = (d & 65535) + (_ & 65535);
    return (((d >> 16) + (_ >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function t(d, _) {
    return (d << _) | (d >>> (32 - _));
  }
  function u(d, _, f, g, h, p) {
    return i(t(i(i(_, d), i(g, p)), h), f);
  }
  function l(d, _, f, g, h, p, y) {
    return u((_ & f) | (~_ & g), d, _, h, p, y);
  }
  function s(d, _, f, g, h, p, y) {
    return u((_ & g) | (f & ~g), d, _, h, p, y);
  }
  function c(d, _, f, g, h, p, y) {
    return u(_ ^ f ^ g, d, _, h, p, y);
  }
  function v(d, _, f, g, h, p, y) {
    return u(f ^ (_ | ~g), d, _, h, p, y);
  }
  var m = e;
  return ((de.default = m), de);
}
var pr;
function Go() {
  if (pr) return le;
  ((pr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.default = void 0));
  var e = o(Zn()),
    r = o(No());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((le.default = n), le);
}
var fe = {},
  ge = {},
  _r;
function Vo() {
  if (_r) return ge;
  ((_r = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ge.default = r), ge);
}
var yr;
function Wo() {
  if (yr) return fe;
  ((yr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = a(Vo()),
    r = a(Yn()),
    o = ze();
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
    return (0, o.unsafeStringify)(s);
  }
  var i = n;
  return ((fe.default = i), fe);
}
var he = {},
  ve = {},
  mr;
function zo() {
  if (mr) return ve;
  ((mr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  function e(n, i, t, u) {
    switch (n) {
      case 0:
        return (i & t) ^ (~i & u);
      case 1:
        return i ^ t ^ u;
      case 2:
        return (i & t) ^ (i & u) ^ (t & u);
      case 3:
        return i ^ t ^ u;
    }
  }
  function r(n, i) {
    return (n << i) | (n >>> (32 - i));
  }
  function o(n) {
    const i = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const c = unescape(encodeURIComponent(n));
      n = [];
      for (let v = 0; v < c.length; ++v) n.push(c.charCodeAt(v));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const u = n.length / 4 + 2,
      l = Math.ceil(u / 16),
      s = new Array(l);
    for (let c = 0; c < l; ++c) {
      const v = new Uint32Array(16);
      for (let m = 0; m < 16; ++m)
        v[m] =
          (n[c * 64 + m * 4] << 24) |
          (n[c * 64 + m * 4 + 1] << 16) |
          (n[c * 64 + m * 4 + 2] << 8) |
          n[c * 64 + m * 4 + 3];
      s[c] = v;
    }
    ((s[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (s[l - 1][14] = Math.floor(s[l - 1][14])),
      (s[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let c = 0; c < l; ++c) {
      const v = new Uint32Array(80);
      for (let h = 0; h < 16; ++h) v[h] = s[c][h];
      for (let h = 16; h < 80; ++h) v[h] = r(v[h - 3] ^ v[h - 8] ^ v[h - 14] ^ v[h - 16], 1);
      let m = t[0],
        d = t[1],
        _ = t[2],
        f = t[3],
        g = t[4];
      for (let h = 0; h < 80; ++h) {
        const p = Math.floor(h / 20),
          y = (r(m, 5) + e(p, d, _, f) + g + i[p] + v[h]) >>> 0;
        ((g = f), (f = _), (_ = r(d, 30) >>> 0), (d = m), (m = y));
      }
      ((t[0] = (t[0] + m) >>> 0),
        (t[1] = (t[1] + d) >>> 0),
        (t[2] = (t[2] + _) >>> 0),
        (t[3] = (t[3] + f) >>> 0),
        (t[4] = (t[4] + g) >>> 0));
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
  var a = o;
  return ((ve.default = a), ve);
}
var br;
function Ho() {
  if (br) return he;
  ((br = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = o(Zn()),
    r = o(zo());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((he.default = n), he);
}
var pe = {},
  wr;
function Ko() {
  if (wr) return pe;
  ((wr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((pe.default = e), pe);
}
var _e = {},
  Er;
function Jo() {
  if (Er) return _e;
  ((Er = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = r(We());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var a = o;
  return ((_e.default = a), _e);
}
var Or;
function Qo() {
  return (
    Or ||
      ((Or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "NIL", {
            enumerable: !0,
            get: function () {
              return i.default;
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
              return o.default;
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
        var r = c(Lo()),
          o = c(Go()),
          a = c(Wo()),
          n = c(Ho()),
          i = c(Ko()),
          t = c(Jo()),
          u = c(We()),
          l = c(ze()),
          s = c(Xn());
        function c(v) {
          return v && v.__esModule ? v : { default: v };
        }
      })(at)),
    at
  );
}
var Rr;
function Yo() {
  if (Rr) return ie;
  ((Rr = 1),
    Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie.createAdfRendererIframeProps = void 0));
  const e = Qo(),
    r = async (o, a) => {
      const n = await Do(
          () => import("./index-BEjbWMh5.js").then((c) => c.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        u = `${t}/forge-apps/adf-renderer`,
        l = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        s = () => {
          var c, v, m, d, _, f;
          const g = document.getElementById(l),
            h = {
              type: "adf-document",
              document: (c = o.extension.macro) === null || c === void 0 ? void 0 : c.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: o.localId,
              isEditing:
                (m = (v = o.extension) === null || v === void 0 ? void 0 : v.isEditing) !== null &&
                m !== void 0
                  ? m
                  : !1,
              contentId:
                (_ = (d = o.extension) === null || d === void 0 ? void 0 : d.content) === null ||
                _ === void 0
                  ? void 0
                  : _.id,
            };
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (p) => {
                var y;
                (y = p?.iFrameResizer) === null || y === void 0 || y.resize();
              },
            },
            g || "",
          ),
            (f = g?.contentWindow) === null || f === void 0 || f.postMessage(h, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: u, onLoad: s }
      );
    };
  return ((ie.createAdfRendererIframeProps = r), ie);
}
var ye = {},
  Pr;
function Xo() {
  if (Pr) return ye;
  ((Pr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.onClose = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await o("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((ye.onClose = a), ye);
}
var Sr;
function $n() {
  if (Sr) return H;
  ((Sr = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.view = void 0));
  const e = wo(),
    r = Eo(),
    o = Oo(),
    a = Ro(),
    n = Po(),
    i = Bo(),
    t = Fo(),
    u = To(),
    l = Ao(),
    s = Yo(),
    c = Xo();
  return (
    (H.view = {
      submit: e.submit,
      close: r.close,
      onClose: c.onClose,
      open: o.open,
      refresh: a.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: u.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: s.createAdfRendererIframeProps,
    }),
    H
  );
}
var Cr;
function He() {
  return (
    Cr ||
      ((Cr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar($n(), e));
      })(tt)),
    tt
  );
}
var ut = {},
  me = {},
  jr;
function Zo() {
  if (jr) return me;
  ((jr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.router = void 0));
  const r = (0, O().getCallBridge)(),
    o = async (t) => {
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
    i = async () => r("reload");
  return ((me.router = { getUrl: o, navigate: a, open: n, reload: i }), me);
}
var Ir;
function $o() {
  return (
    Ir ||
      ((Ir = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Zo(), e));
      })(ut)),
    ut
  );
}
var lt = {},
  be = {},
  qr;
function ei() {
  if (qr) return be;
  ((qr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.Modal = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
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
          (await o("openModal", {
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
  return ((be.Modal = n), be);
}
var Br;
function ti() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(ei(), e));
      })(lt)),
    lt
  );
}
var C = {},
  A = {},
  Fr;
function ri() {
  if (Fr) return A;
  ((Fr = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.productFetchApi = A.remoteFetchApi = void 0));
  const e = Jn(),
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
    o = (t) => {
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
        v = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(v),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const u = async (l, s) => {
        const c = o(s),
          { body: v, headers: m, isMultipartFormData: d } = await a("remote", c),
          _ = {
            remoteKey: l,
            fetchRequestInit: { ...c, body: v, headers: [...m.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: g,
            statusText: h,
            status: p,
            isAttachment: y,
          } = await t("fetchRemote", _),
          w = y ? (0, e.base64ToBlob)(f, g["content-type"]) : f;
        return new Response(w || null, { headers: g, status: p, statusText: h });
      };
      return { requestRemote: (l, s) => u(l, s) };
    };
  A.remoteFetchApi = n;
  const i = (t) => {
    const u = async (l, s, c) => {
      const v = o(c),
        { body: m, headers: d, isMultipartFormData: _ } = await a("product", v);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const f = {
          product: l,
          restPath: s,
          fetchRequestInit: { ...v, body: m, headers: [...d.entries()] },
          isMultipartFormData: _,
        },
        {
          body: g,
          headers: h,
          statusText: p,
          status: y,
          isAttachment: w,
        } = await t("fetchProduct", f),
        E = w ? (0, e.base64ToBlob)(g, h["content-type"]) : g;
      return new Response(E || null, { headers: h, status: y, statusText: p });
    };
    return {
      requestConfluence: (l, s) => u("confluence", l, s),
      requestJira: (l, s) => u("jira", l, s),
      requestBitbucket: (l, s) => u("bitbucket", l, s),
    };
  };
  return ((A.productFetchApi = i), A);
}
var Tr;
function ni() {
  if (Tr) return C;
  Tr = 1;
  var e;
  (Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.requestRemote = C.requestBitbucket = C.requestJira = C.requestConfluence = void 0));
  const r = O(),
    o = ri();
  return (
    (e = (0, o.productFetchApi)((0, r.getCallBridge)())),
    (C.requestConfluence = e.requestConfluence),
    (C.requestJira = e.requestJira),
    (C.requestBitbucket = e.requestBitbucket),
    (C.requestRemote = (0, o.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    C
  );
}
var ct = {},
  we = {},
  Mr;
function oi() {
  if (Mr) return we;
  ((Mr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.showFlag = void 0));
  const e = O(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = o("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, o("closeFlag", { id: n.id })) };
    };
  return ((we.showFlag = a), we);
}
var Ar;
function ii() {
  return (
    Ar ||
      ((Ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = oi();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(ct)),
    ct
  );
}
var dt = {},
  kr;
function si() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Qn(), e));
      })(dt)),
    dt
  );
}
var ft = {},
  Ee = {},
  xr;
function ai() {
  if (xr) return Ee;
  ((xr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.realtime = void 0));
  const r = (0, O().getCallBridge)(),
    o = (t, u, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: l }),
    a = (t, u, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: l }),
    n = (t, u, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: l, isGlobal: !0 }),
    i = (t, u, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: l, isGlobal: !0 });
  return ((Ee.realtime = { publish: o, subscribe: a, publishGlobal: n, subscribeGlobal: i }), Ee);
}
var gt = {},
  Dr;
function ui() {
  return (
    Dr ||
      ((Dr = 1),
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
      })(gt)),
    gt
  );
}
var Ur;
function li() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = ai();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var o = ui();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return o.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return o.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return o.Bitbucket;
            },
          }));
      })(ft)),
    ft
  );
}
var ht = {},
  Oe = {},
  vt = {},
  Lr;
function ci() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = O(),
          o = R(),
          a = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const i = (u) => {
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
            const l = i(u);
            if ((await n("openRovo", l)) === !1)
              throw new o.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(vt)),
    vt
  );
}
var Re = {},
  Nr;
function di() {
  if (Nr) return Re;
  ((Nr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.isEnabled = void 0));
  const r = (0, O().getCallBridge)(),
    o = () => r("isRovoEnabled");
  return ((Re.isEnabled = o), Re);
}
var Gr;
function fi() {
  if (Gr) return Oe;
  ((Gr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.rovo = void 0));
  const e = ci(),
    r = di();
  return ((Oe.rovo = { open: e.open, isEnabled: r.isEnabled }), Oe);
}
var Vr;
function gi() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(fi(), e));
      })(ht)),
    ht
  );
}
var B = {},
  Wr;
function hi() {
  if (Wr) return B;
  ((Wr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.createTranslationFunction = B.getTranslations = B.resetTranslationsCache = void 0));
  const e = Kn(),
    r = He(),
    o = {
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
    a = new e.TranslationsGetter(o),
    n = () => {
      a.reset();
    };
  B.resetTranslationsCache = n;
  const i = async (u = null, l = { fallback: !0 }) => {
    let s = u;
    return (s || (s = (await r.view.getContext()).locale), await a.getTranslations(s, l));
  };
  B.getTranslations = i;
  const t = async (u = null) => {
    let l = u;
    l || (l = (await r.view.getContext()).locale);
    const s = new e.Translator(l, a);
    return (
      await s.init(),
      (c, v) => {
        var m, d;
        return (d = (m = s.translate(c)) !== null && m !== void 0 ? m : v) !== null && d !== void 0
          ? d
          : c;
      }
    );
  };
  return ((B.createTranslationFunction = t), B);
}
var pt = {},
  Pe = {},
  zr;
function vi() {
  if (zr) return Pe;
  ((zr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.permissions = void 0));
  const r = (0, O().getCallBridge)(),
    o = async (l) => r("__permission__egressGet", l),
    a = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    i = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    u = async (l) => r("__permission__remoteSet", l);
  return (
    (Pe.permissions = {
      egress: { get: o, set: a, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: u },
    }),
    Pe
  );
}
var k = {},
  _t = {},
  yt = {},
  Se = {},
  Ce = {},
  Hr;
function jt() {
  if (Hr) return Ce;
  ((Hr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.parseUrl = void 0));
  function e(r) {
    var o, a;
    const n =
        (a = (o = r.match(/^(.*?:)/)) === null || o === void 0 ? void 0 : o[0]) !== null &&
        a !== void 0
          ? a
          : "https:",
      i = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = i.split("/")[0],
      u = i.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: u };
  }
  return ((Ce.parseUrl = e), Ce);
}
var mt = {},
  Kr;
function eo() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = jt();
        function o(t) {
          const l = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${l}$`);
        }
        e.globToRegex = o;
        const a = (t) => {
          if (t?.length === 0) return [];
          const u = /^(.*?:\/\/)/,
            l = new Set(),
            s = [];
          return (
            t.forEach((c) => {
              const v = u.test(c) ? c : `https://${c}`,
                m = (0, r.parseUrl)(v);
              m.hostname.startsWith("*")
                ? (l.add(m.hostname.substring(2)), s.push(o(m.hostname)))
                : l.add(m.hostname);
            }),
            [...l].sort().reduce((c, v) => (s.some((m) => m.test(v)) || c.push(v), c), [])
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
        const i = (t) => {
          const u = t.egress.filter((s) => {
              var c;
              if (
                ((c = s.category) === null || c === void 0 ? void 0 : c.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const v = t.installationConfig.find(
                    (m) => m.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return v?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            l = new Map();
          for (const s of u)
            (l.has(s.type) || l.set(s.type, s.addresses),
              l.set(s.type, [...l.get(s.type), ...s.addresses]));
          return [...l.entries()].map(([s, c]) => ({ type: s, addresses: [...new Set(c)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(mt)),
    mt
  );
}
var Jr;
function pi() {
  if (Jr) return Se;
  ((Jr = 1),
    Object.defineProperty(Se, "__esModule", { value: !0 }),
    (Se.EgressFilteringService = void 0));
  const e = jt(),
    r = eo();
  class o {
    constructor(n) {
      ((this.URLs = n.filter((i) => !i.startsWith("*")).map((i) => this.parseUrl(i))),
        (this.wildcardDomains = n
          .filter((i) => i !== "*")
          .map((i) => this.parseUrl(i))
          .filter((i) => decodeURIComponent(i.hostname).startsWith("*"))
          .map((i) => ({ ...i, regex: (0, r.globToRegex)(decodeURIComponent(i.hostname)) }))),
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
      const i = this.parseUrl(n);
      return (
        this.allowedDomainExact(i, this.URLs) || this.allowedDomainPattern(i, this.wildcardDomains)
      );
    }
    isValidUrlCSP(n) {
      if (this.allowsEverything) return !0;
      const i = this.parseUrl(n);
      return (
        this.allowedDomainExactAndPath(i, this.URLs) ||
        this.allowedDomainPatternAndPath(i, this.wildcardDomains)
      );
    }
    allowedDomainExact(n, i) {
      return i.filter((t) => t.protocol === n.protocol).some((t) => t.hostname === n.hostname);
    }
    allowedDomainExactAndPath(n, i) {
      return i
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.hostname === n.hostname)
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    allowedDomainPattern(n, i) {
      return i.filter((t) => t.protocol === n.protocol).some((t) => t.regex.test(n.hostname));
    }
    allowedDomainPatternAndPath(n, i) {
      return i
        .filter((t) => this.protocolMatchesCSP(t.protocol, n.protocol))
        .filter((t) => t.regex.test(n.hostname))
        .some((t) => this.pathMatches(t.pathname, n.pathname));
    }
    protocolMatchesCSP(n, i) {
      return n === i || (n === "http:" && i === "https:") || (n === "ws:" && i === "wss:");
    }
    pathMatches(n, i) {
      return n === "/" ? !0 : n.endsWith("/") ? i.startsWith(n) : i === n;
    }
  }
  return ((Se.EgressFilteringService = o), Se);
}
var Qr;
function _i() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(pi(), e), r.__exportStar(jt(), e), r.__exportStar(eo(), e));
      })(yt)),
    yt
  );
}
var Yr;
function yi() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(_i(), e));
      })(_t)),
    _t
  );
}
var Xr;
function mi() {
  if (Xr) return k;
  ((Xr = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.checkPermissions = k.createPermissionUtils = void 0));
  const e = yi(),
    r = He();
  function o(_) {
    return typeof _ == "string" ? _ : "address" in _ && _.address ? _.address : _.remote || "";
  }
  const a = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(_) {
    if (!_) return null;
    const { scopes: f, external: g = {} } = _,
      h = Array.isArray(f) ? f : Object.keys(f || {});
    return {
      hasScope: (p) => h.includes(p),
      canFetchFrom: (p, y) => {
        var w;
        const E = (w = g.fetch) === null || w === void 0 ? void 0 : w[p];
        if (!E?.length) return !1;
        const P = E.map(o).filter((I) => I.length > 0);
        if (P.length === 0) return !1;
        const j = new e.EgressFilteringService(P);
        return p === "client" ? j.isValidUrlCSP(y) : j.isValidUrl(y);
      },
      canLoadResource: (p, y) => {
        const w = g[p];
        if (!w?.length) return !1;
        const E = w.map(o).filter((Je) => Je.length > 0);
        return E.length === 0 ? !1 : new e.EgressFilteringService(E).isValidUrlCSP(y);
      },
      getScopes: () => h,
      getExternalPermissions: () => g,
      hasAnyPermissions: () => h.length > 0 || Object.keys(g).length > 0,
    };
  }
  k.createPermissionUtils = i;
  function t(_, f) {
    if (!_?.length) return;
    const g = _.filter((h) => !f.hasScope(h));
    return g.length > 0 ? g : void 0;
  }
  function u(_, f) {
    if (!_?.fetch) return;
    const g = {};
    return (
      n.forEach((h) => {
        var p;
        const y = (p = _.fetch) === null || p === void 0 ? void 0 : p[h];
        if (y?.length) {
          const w = y.filter((E) => !f.canFetchFrom(h, E));
          w.length > 0 && (g[h] = w);
        }
      }),
      Object.keys(g).length > 0 ? g : void 0
    );
  }
  function l(_, f) {
    const g = {};
    return (
      a.forEach((h) => {
        const p = _?.[h];
        if (p?.length) {
          const y = p.filter((w) => !f.canLoadResource(h, w));
          y.length > 0 && (g[h] = y);
        }
      }),
      Object.keys(g).length > 0 ? g : void 0
    );
  }
  function s(_, f) {
    if (!_) return;
    const g = u(_, f),
      h = l(_, f);
    if (!g && !h) return;
    const p = {};
    return (g && (p.fetch = g), h && Object.assign(p, h), p);
  }
  function c(_, f) {
    if (_ !== void 0 && (typeof _ != "object" || _ === null || Array.isArray(_)))
      throw new TypeError(
        `${f} should be an object, not ${Array.isArray(_) ? "an array" : `a ${typeof _}`}`,
      );
  }
  function v(_, f) {
    if (_ !== void 0 && !Array.isArray(_))
      throw new TypeError(`${f} should be an array, not a ${typeof _}`);
  }
  function m(_) {
    v(_.scopes, "scopes");
    const f = _.external;
    if (f !== void 0) {
      if ((c(f, "external"), f.fetch !== void 0)) {
        c(f.fetch, "external.fetch");
        for (const g of n) v(f.fetch[g], `external.fetch.${g}`);
      }
      for (const g of a) v(f[g], `external.${g}`);
    }
  }
  async function d(_, f) {
    var g;
    if (!_) return { granted: !1, missing: null };
    if ((m(_), !(!((g = _.scopes) === null || g === void 0) && g.length) && !_.external))
      return { granted: !0, missing: null };
    let h = f;
    h || (h = (await r.view.getContext()).permissions);
    const p = i(h);
    if (!p) return { granted: !1, missing: null };
    const y = {};
    let w = !0;
    const E = t(_.scopes, p);
    E && ((y.scopes = E), (w = !1));
    const P = s(_.external, p);
    return (P && ((y.external = P), (w = !1)), { granted: w, missing: w ? null : y });
  }
  return ((k.checkPermissions = d), k);
}
var Zr;
function bi() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(vi(), e), r.__exportStar(mi(), e));
      })(pt)),
    pt
  );
}
var bt = {},
  wt = {},
  Et = {},
  je = {},
  Ie = {},
  $r;
function to() {
  return (
    $r ||
      (($r = 1),
      Object.defineProperty(Ie, "__esModule", { value: !0 }),
      (Ie.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Ie.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Ie
  );
}
var en;
function Ke() {
  if (en) return je;
  ((en = 1),
    Object.defineProperty(je, "__esModule", { value: !0 }),
    (je.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = He(),
    o = to(),
    a = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(o.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((je.checkRestrictedEnvironment = a), je);
}
var tn;
function wi() {
  return (
    tn ||
      ((tn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = De(),
          o = R(),
          a = Ke(),
          i = (0, O().getCallBridge)(),
          t = (c, v) => {
            const m = atob(c),
              d = new Array(m.length);
            for (let f = 0; f < m.length; f++) d[f] = m.charCodeAt(f);
            const _ = new Uint8Array(d);
            return new Blob([_], { type: v || "application/octet-stream" });
          },
          u = async (c) => {
            const v = c.size,
              m = await c.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", m),
              _ = new Uint8Array(d),
              f = btoa(String.fromCharCode(..._));
            return { length: v, checksum: f, checksumType: "SHA256" };
          },
          l = async ({ functionKey: c, objects: v }) => {
            if (!c || c.length === 0)
              throw new o.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(v) || v.length === 0)
              throw new o.BridgeAPIError("objects array is required and must not be empty");
            const m = v.map((p, y) => {
                if (p instanceof Blob) return p;
                if (!(p && typeof p == "object" && "data" in p && typeof p.data == "string"))
                  throw new o.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(p.data, p.mimeType);
                } catch {
                  throw new o.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(m.map((p) => u(p))),
              _ = await (0, r.invoke)(c, { allObjectMetadata: d });
            if (!_ || typeof _ != "object")
              throw new o.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              g = new Map();
            return (
              m.forEach((p, y) => {
                const w = d[y];
                (f.set(w.checksum, p), g.set(w.checksum, y));
              }),
              Object.entries(_).map(([p, y]) => {
                const { key: w, checksum: E } = y,
                  P = f.get(E),
                  j = g.get(E);
                return j === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: w,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : P
                    ? {
                        promise: (async () => {
                          try {
                            const I = await fetch(p, {
                              method: "PUT",
                              body: P,
                              headers: {
                                "Content-Type": P.type || "application/octet-stream",
                                "Content-Length": P.size.toString(),
                              },
                            });
                            return {
                              success: I.ok,
                              key: w,
                              status: I.status,
                              error: I.ok ? void 0 : `Upload failed with status ${I.status}`,
                            };
                          } catch (I) {
                            return {
                              success: !1,
                              key: w,
                              status: 503,
                              error: I instanceof Error ? I.message : "Upload failed",
                            };
                          }
                        })(),
                        index: j,
                        objectType: P.type,
                        objectSize: P.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: w,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: j,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const s = async ({ functionKey: c, objects: v }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const m = await (0, e.createUploadPromises)({ functionKey: c, objects: v });
          return await Promise.all(m.map((_) => _.promise));
        };
        e.upload = s;
      })(Et)),
    Et
  );
}
var qe = {},
  rn;
function Ei() {
  if (rn) return qe;
  ((rn = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.deleteObjects = void 0));
  const e = De(),
    r = R(),
    o = Ke(),
    n = (0, O().getCallBridge)(),
    i = async ({ functionKey: t, keys: u }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
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
  return ((qe.deleteObjects = i), qe);
}
var Be = {},
  nn;
function Oi() {
  if (nn) return Be;
  ((nn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.download = void 0));
  const e = De(),
    r = R(),
    o = Ke(),
    n = (0, O().getCallBridge)(),
    i = async ({ functionKey: t, keys: u }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(u) || u.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(t, { keys: u });
      if (!l || typeof l != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const s = Object.entries(l).map(async ([v, m]) => {
        try {
          const d = await fetch(v, { method: "GET" });
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
  return ((Be.download = i), Be);
}
var Fe = {},
  on;
function Ri() {
  if (on) return Fe;
  ((on = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.getMetadata = void 0));
  const e = De(),
    r = R(),
    o = Ke(),
    n = (0, O().getCallBridge)(),
    i = async ({ functionKey: t, keys: u }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
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
  return ((Fe.getMetadata = i), Fe);
}
var sn;
function Pi() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = wi();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const o = Ei(),
          a = Oi(),
          n = Ri();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: n.getMetadata,
          delete: o.deleteObjects,
        };
      })(wt)),
    wt
  );
}
var an;
function Si() {
  return (
    an ||
      ((an = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(Pi(), e), r.__exportStar(to(), e));
      })(bt)),
    bt
  );
}
var Ot = {},
  Te = {},
  Me = {},
  un;
function Ci() {
  if (un) return Me;
  ((un = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.Evaluator = void 0));
  class e {
    constructor(o) {
      this.results = o;
    }
    checkFlag(o, a) {
      if (!this.results || !this.results.feature_flags) return a;
      const n = this.results.feature_flags;
      let i = "";
      try {
        i = this.getHashedValue(o);
      } catch (u) {
        return (console.error("Unexpected error occurred while evaluating flag ", u), a);
      }
      if (!i) return a;
      const t = n[i];
      return t ? (t.disabled ? !1 : t.value) : a;
    }
    shutDown() {
      this.results = void 0;
    }
    getHashedValue(o) {
      if (typeof o != "string") return "";
      const a = o.trim();
      if (a.length === 0) return "";
      let n = 5381;
      for (let i = 0; i < a.length; i += 1) {
        const t = a.charCodeAt(i);
        ((n = (n << 5) + n + t), (n |= 0));
      }
      return (n >>> 0).toString();
    }
  }
  return ((Me.Evaluator = e), Me);
}
var Ae = {},
  Rt = {},
  ln;
function ro() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = void 0),
          (function (r) {
            r.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Rt)),
    Rt
  );
}
var cn;
function ji() {
  if (cn) return Ae;
  ((cn = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.trackFeatureFlagEvent = void 0));
  const e = O(),
    r = R(),
    o = Ve(),
    a = ro(),
    n = 500,
    i = 1e3 * 25,
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
    (Ae.trackFeatureFlagEvent = (0, o.withRateLimiter)(
      l,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Ae
  );
}
var ke = {},
  dn;
function Ii() {
  if (dn) return ke;
  ((dn = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.initFeatureFlags = void 0));
  const e = O(),
    r = R(),
    o = Ve(),
    a = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user || !l.config)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((s) => typeof s == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (l) => (t(l), i("initFeatureFlags", { user: l.user, config: l.config }));
  return (
    (ke.initFeatureFlags = (0, o.withRateLimiter)(
      u,
      a,
      n,
      `Feature flags initialisation calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    ke
  );
}
var fn;
function qi() {
  if (fn) return Te;
  ((fn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.FeatureFlags = void 0));
  const e = Ci(),
    r = ji(),
    o = Ii(),
    a = ro();
  class n {
    constructor() {
      ((this.initialized = !1), (this.eventProps = {}));
    }
    async initialize(t, u = { environment: "development" }) {
      if (this.isInitialized()) return;
      this.eventProps.environment = u.environment;
      const l = await (0, o.initFeatureFlags)({ user: t, config: u });
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
  return ((Te.FeatureFlags = n), Te);
}
var gn;
function Bi() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FeatureFlags = void 0));
        var r = qi();
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
var hn;
function Fi() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = S;
        var o = po();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          r.__exportStar(De(), e),
          r.__exportStar(bo(), e),
          r.__exportStar(He(), e),
          r.__exportStar($o(), e),
          r.__exportStar(ti(), e),
          r.__exportStar(ni(), e),
          r.__exportStar(ii(), e),
          r.__exportStar(si(), e),
          r.__exportStar(li(), e),
          r.__exportStar(gi(), e),
          (e.i18n = r.__importStar(hi())),
          r.__exportStar(bi(), e),
          r.__exportStar(Si(), e),
          r.__exportStar(Bi(), e));
      })(Ye)),
    Ye
  );
}
var no = Fi();
const Ti = () => {
    const [e, r] = xe.useState(null),
      [o, a] = xe.useState(!1),
      [n, i] = xe.useState(null),
      [t, u] = xe.useState(null),
      l = async (s) => {
        (a(!0), i(null), r(null), u(s));
        try {
          const c = await no.invoke(s);
          (r(c || []), i(null));
        } catch (c) {
          const v = c instanceof Error ? c.message : "Unknown error occurred";
          (i(v), r(null));
        } finally {
          a(!1);
        }
      };
    return b.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        b.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Query Demo",
        }),
        b.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            b.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "Query Types:",
            }),
            b.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "Timeout Error:" }),
                    " Executes a query with SLEEP(10) to test timeout behavior",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "OOM Error:" }),
                    " Executes a complex query with subquery that may cause Out of Memory",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "Optimized Query:" }),
                    " Uses cached permissions for better performance",
                  ],
                }),
                b.jsxs("li", {
                  children: [
                    b.jsx("strong", { children: "Cached Query:" }),
                    " Uses cached permissions with optimized query structure",
                  ],
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            b.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Execute Queries",
            }),
            b.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Click on a button to execute the corresponding query and see the results or errors.",
            }),
            b.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                b.jsx("button", {
                  onClick: () => l("getTimeOutError"),
                  disabled: o,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getTimeOutError" ? "#FF8B00" : "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: o ? "not-allowed" : "pointer",
                    opacity: o && t !== "getTimeOutError" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: o && t === "getTimeOutError" ? "Loading..." : "⏱️ Timeout Error",
                }),
                b.jsx("button", {
                  onClick: () => l("getOOMError"),
                  disabled: o,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getOOMError" ? "#C43E37" : "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: o ? "not-allowed" : "pointer",
                    opacity: o && t !== "getOOMError" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: o && t === "getOOMError" ? "Loading..." : "💥 OOM Error",
                }),
                b.jsx("button", {
                  onClick: () => l("getQueryResult"),
                  disabled: o,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getQueryResult" ? "#36B37E" : "#0052CC",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: o ? "not-allowed" : "pointer",
                    opacity: o && t !== "getQueryResult" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: o && t === "getQueryResult" ? "Loading..." : "✅ Optimized Query",
                }),
                b.jsx("button", {
                  onClick: () => l("getQueryResultCache"),
                  disabled: o,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getQueryResultCache" ? "#36B37E" : "#0052CC",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: o ? "not-allowed" : "pointer",
                    opacity: o && t !== "getQueryResultCache" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: o && t === "getQueryResultCache" ? "Loading..." : "💾 Cached Query",
                }),
              ],
            }),
            n &&
              b.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [b.jsx("strong", { children: "Error:" }), " ", n],
              }),
            e &&
              !n &&
              b.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  b.jsx("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: "Query Results",
                  }),
                  b.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.length, " record(s)"],
                  }),
                  b.jsx("div", {
                    style: { maxHeight: "400px", overflowY: "auto" },
                    children: b.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        b.jsx("thead", {
                          children: b.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "ID",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Title",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Created At",
                              }),
                              b.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Document ID",
                              }),
                            ],
                          }),
                        }),
                        b.jsx("tbody", {
                          children: e.map((s, c) =>
                            b.jsxs(
                              "tr",
                              {
                                children: [
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(s.id).substring(0, 8), "..."],
                                  }),
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(s.userId).substring(0, 8), "..."],
                                  }),
                                  b.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children:
                                      s.title.length > 50
                                        ? `${s.title.substring(0, 50)}...`
                                        : s.title,
                                  }),
                                  b.jsx("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: new Date(s.createdAt).toLocaleString(),
                                  }),
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(s.documentId).substring(0, 8), "..."],
                                  }),
                                ],
                              },
                              c,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Mi = document.getElementById("root"),
  Ai = oo.createRoot(Mi),
  vn = () => {
    Ai.render(b.jsx(co.StrictMode, { children: b.jsx(Ti, {}) }));
  };
no.view.theme
  .enable()
  .then(() => {
    vn();
  })
  .catch((e) => {
    (console.error(e.message), vn());
  });
