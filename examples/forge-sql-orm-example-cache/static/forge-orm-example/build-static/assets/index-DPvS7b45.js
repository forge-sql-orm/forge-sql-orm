const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-BEjbWMh5.js", "./lodash-vendor-RhPBt8ex.js"]),
) => i.map((i) => d[i]);
import { r as yn, c as oo } from "./react-dom-vendor-BXC0oJZi.js";
import { g as io, a as so, r as ao } from "./lodash-vendor-RhPBt8ex.js";
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
  new MutationObserver((t) => {
    for (const i of t)
      if (i.type === "childList")
        for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(t) {
    const i = {};
    return (
      t.integrity && (i.integrity = t.integrity),
      t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : t.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function s(t) {
    if (t.ep) return;
    t.ep = !0;
    const i = o(t);
    fetch(t.href, i);
  }
})();
var Qe = { exports: {} },
  L = {};
var Fr;
function lo() {
  if (Fr) return L;
  Fr = 1;
  var e = yn(),
    n = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(l, u, a) {
    var c,
      p = {},
      b = null,
      d = null;
    (a !== void 0 && (b = "" + a),
      u.key !== void 0 && (b = "" + u.key),
      u.ref !== void 0 && (d = u.ref));
    for (c in u) s.call(u, c) && !i.hasOwnProperty(c) && (p[c] = u[c]);
    if (l && l.defaultProps) for (c in ((u = l.defaultProps), u)) p[c] === void 0 && (p[c] = u[c]);
    return { $$typeof: n, type: l, key: b, ref: d, props: p, _owner: t.current };
  }
  return ((L.Fragment = o), (L.jsx = r), (L.jsxs = r), L);
}
var Sr;
function uo() {
  return (Sr || ((Sr = 1), (Qe.exports = lo())), Qe.exports);
}
var m = uo(),
  I = yn();
const co = io(I);
var Xe = {},
  jr = function (e, n) {
    return (
      (jr =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, s) {
            o.__proto__ = s;
          }) ||
        function (o, s) {
          for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (o[t] = s[t]);
        }),
      jr(e, n)
    );
  };
function _n(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  jr(e, n);
  function o() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
}
var Ne = function () {
  return (
    (Ne =
      Object.assign ||
      function (n) {
        for (var o, s = 1, t = arguments.length; s < t; s++) {
          o = arguments[s];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
        }
        return n;
      }),
    Ne.apply(this, arguments)
  );
};
function mn(e, n) {
  var o = {};
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && n.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, s = Object.getOwnPropertySymbols(e); t < s.length; t++)
      n.indexOf(s[t]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, s[t]) &&
        (o[s[t]] = e[s[t]]);
  return o;
}
function bn(e, n, o, s) {
  var t = arguments.length,
    i = t < 3 ? n : s === null ? (s = Object.getOwnPropertyDescriptor(n, o)) : s,
    r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, n, o, s);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (r = e[l]) && (i = (t < 3 ? r(i) : t > 3 ? r(n, o, i) : r(n, o)) || i);
  return (t > 3 && i && Object.defineProperty(n, o, i), i);
}
function wn(e, n) {
  return function (o, s) {
    n(o, s, e);
  };
}
function En(e, n, o, s, t, i) {
  function r(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (
    var l = s.kind,
      u = l === "getter" ? "get" : l === "setter" ? "set" : "value",
      a = !n && e ? (s.static ? e : e.prototype) : null,
      c = n || (a ? Object.getOwnPropertyDescriptor(a, s.name) : {}),
      p,
      b = !1,
      d = o.length - 1;
    d >= 0;
    d--
  ) {
    var y = {};
    for (var f in s) y[f] = f === "access" ? {} : s[f];
    for (var f in s.access) y.access[f] = s.access[f];
    y.addInitializer = function (g) {
      if (b) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(r(g || null));
    };
    var h = (0, o[d])(l === "accessor" ? { get: c.get, set: c.set } : c[u], y);
    if (l === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      ((p = r(h.get)) && (c.get = p),
        (p = r(h.set)) && (c.set = p),
        (p = r(h.init)) && t.unshift(p));
    } else (p = r(h)) && (l === "field" ? t.unshift(p) : (c[u] = p));
  }
  (a && Object.defineProperty(a, s.name, c), (b = !0));
}
function Rn(e, n, o) {
  for (var s = arguments.length > 2, t = 0; t < n.length; t++)
    o = s ? n[t].call(e, o) : n[t].call(e);
  return s ? o : void 0;
}
function Pn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function On(e, n, o) {
  return (
    typeof n == "symbol" && (n = n.description ? "[".concat(n.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", n) : n })
  );
}
function jn(e, n) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, n);
}
function xn(e, n, o, s) {
  function t(i) {
    return i instanceof o
      ? i
      : new o(function (r) {
          r(i);
        });
  }
  return new (o || (o = Promise))(function (i, r) {
    function l(c) {
      try {
        a(s.next(c));
      } catch (p) {
        r(p);
      }
    }
    function u(c) {
      try {
        a(s.throw(c));
      } catch (p) {
        r(p);
      }
    }
    function a(c) {
      c.done ? i(c.value) : t(c.value).then(l, u);
    }
    a((s = s.apply(e, n || [])).next());
  });
}
function Cn(e, n) {
  var o = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    s,
    t,
    i,
    r = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (r.next = l(0)),
    (r.throw = l(1)),
    (r.return = l(2)),
    typeof Symbol == "function" &&
      (r[Symbol.iterator] = function () {
        return this;
      }),
    r
  );
  function l(a) {
    return function (c) {
      return u([a, c]);
    };
  }
  function u(a) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; r && ((r = 0), a[0] && (o = 0)), o; )
      try {
        if (
          ((s = 1),
          t &&
            (i =
              a[0] & 2 ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) &&
            !(i = i.call(t, a[1])).done)
        )
          return i;
        switch (((t = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
          case 0:
          case 1:
            i = a;
            break;
          case 4:
            return (o.label++, { value: a[1], done: !1 });
          case 5:
            (o.label++, (t = a[1]), (a = [0]));
            continue;
          case 7:
            ((a = o.ops.pop()), o.trys.pop());
            continue;
          default:
            if (
              ((i = o.trys), !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              o = 0;
              continue;
            }
            if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
              o.label = a[1];
              break;
            }
            if (a[0] === 6 && o.label < i[1]) {
              ((o.label = i[1]), (i = a));
              break;
            }
            if (i && o.label < i[2]) {
              ((o.label = i[2]), o.ops.push(a));
              break;
            }
            (i[2] && o.ops.pop(), o.trys.pop());
            continue;
        }
        a = n.call(e, o);
      } catch (c) {
        ((a = [6, c]), (t = 0));
      } finally {
        s = i = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var Ve = Object.create
  ? function (e, n, o, s) {
      s === void 0 && (s = o);
      var t = Object.getOwnPropertyDescriptor(n, o);
      ((!t || ("get" in t ? !n.__esModule : t.writable || t.configurable)) &&
        (t = {
          enumerable: !0,
          get: function () {
            return n[o];
          },
        }),
        Object.defineProperty(e, s, t));
    }
  : function (e, n, o, s) {
      (s === void 0 && (s = o), (e[s] = n[o]));
    };
function Bn(e, n) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(n, o) && Ve(n, e, o);
}
function Ge(e) {
  var n = typeof Symbol == "function" && Symbol.iterator,
    o = n && e[n],
    s = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e });
      },
    };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Cr(e, n) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var s = o.call(e),
    t,
    i = [],
    r;
  try {
    for (; (n === void 0 || n-- > 0) && !(t = s.next()).done; ) i.push(t.value);
  } catch (l) {
    r = { error: l };
  } finally {
    try {
      t && !t.done && (o = s.return) && o.call(s);
    } finally {
      if (r) throw r.error;
    }
  }
  return i;
}
function Fn() {
  for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(Cr(arguments[n]));
  return e;
}
function Sn() {
  for (var e = 0, n = 0, o = arguments.length; n < o; n++) e += arguments[n].length;
  for (var s = Array(e), t = 0, n = 0; n < o; n++)
    for (var i = arguments[n], r = 0, l = i.length; r < l; r++, t++) s[t] = i[r];
  return s;
}
function In(e, n, o) {
  if (o || arguments.length === 2)
    for (var s = 0, t = n.length, i; s < t; s++)
      (i || !(s in n)) && (i || (i = Array.prototype.slice.call(n, 0, s)), (i[s] = n[s]));
  return e.concat(i || Array.prototype.slice.call(n));
}
function U(e) {
  return this instanceof U ? ((this.v = e), this) : new U(e);
}
function qn(e, n, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = o.apply(e, n || []),
    t,
    i = [];
  return (
    (t = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    l("next"),
    l("throw"),
    l("return", r),
    (t[Symbol.asyncIterator] = function () {
      return this;
    }),
    t
  );
  function r(d) {
    return function (y) {
      return Promise.resolve(y).then(d, p);
    };
  }
  function l(d, y) {
    s[d] &&
      ((t[d] = function (f) {
        return new Promise(function (h, g) {
          i.push([d, f, h, g]) > 1 || u(d, f);
        });
      }),
      y && (t[d] = y(t[d])));
  }
  function u(d, y) {
    try {
      a(s[d](y));
    } catch (f) {
      b(i[0][3], f);
    }
  }
  function a(d) {
    d.value instanceof U ? Promise.resolve(d.value.v).then(c, p) : b(i[0][2], d);
  }
  function c(d) {
    u("next", d);
  }
  function p(d) {
    u("throw", d);
  }
  function b(d, y) {
    (d(y), i.shift(), i.length && u(i[0][0], i[0][1]));
  }
}
function Tn(e) {
  var n, o;
  return (
    (n = {}),
    s("next"),
    s("throw", function (t) {
      throw t;
    }),
    s("return"),
    (n[Symbol.iterator] = function () {
      return this;
    }),
    n
  );
  function s(t, i) {
    n[t] = e[t]
      ? function (r) {
          return (o = !o) ? { value: U(e[t](r)), done: !1 } : i ? i(r) : r;
        }
      : i;
  }
}
function Mn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e[Symbol.asyncIterator],
    o;
  return n
    ? n.call(e)
    : ((e = typeof Ge == "function" ? Ge(e) : e[Symbol.iterator]()),
      (o = {}),
      s("next"),
      s("throw"),
      s("return"),
      (o[Symbol.asyncIterator] = function () {
        return this;
      }),
      o);
  function s(i) {
    o[i] =
      e[i] &&
      function (r) {
        return new Promise(function (l, u) {
          ((r = e[i](r)), t(l, u, r.done, r.value));
        });
      };
  }
  function t(i, r, l, u) {
    Promise.resolve(u).then(function (a) {
      i({ value: a, done: l });
    }, r);
  }
}
function An(e, n) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: n }) : (e.raw = n), e);
}
var fo = Object.create
    ? function (e, n) {
        Object.defineProperty(e, "default", { enumerable: !0, value: n });
      }
    : function (e, n) {
        e.default = n;
      },
  xr = function (e) {
    return (
      (xr =
        Object.getOwnPropertyNames ||
        function (n) {
          var o = [];
          for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (o[o.length] = s);
          return o;
        }),
      xr(e)
    );
  };
function kn(e) {
  if (e && e.__esModule) return e;
  var n = {};
  if (e != null) for (var o = xr(e), s = 0; s < o.length; s++) o[s] !== "default" && Ve(n, e, o[s]);
  return (fo(n, e), n);
}
function Dn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Un(e, n, o, s) {
  if (o === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? e !== n || !s : !n.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? s : o === "a" ? s.call(e) : s ? s.value : n.get(e);
}
function Ln(e, n, o, s, t) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !t) throw new TypeError("Private accessor was defined without a setter");
  if (typeof n == "function" ? e !== n || !t : !n.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (s === "a" ? t.call(e, o) : t ? (t.value = o) : n.set(e, o), o);
}
function Nn(e, n) {
  if (n === null || (typeof n != "object" && typeof n != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? n === e : e.has(n);
}
function Gn(e, n, o) {
  if (n != null) {
    if (typeof n != "object" && typeof n != "function") throw new TypeError("Object expected.");
    var s, t;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      s = n[Symbol.asyncDispose];
    }
    if (s === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((s = n[Symbol.dispose]), o && (t = s));
    }
    if (typeof s != "function") throw new TypeError("Object not disposable.");
    (t &&
      (s = function () {
        try {
          t.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: n, dispose: s, async: o }));
  } else o && e.stack.push({ async: !0 });
  return n;
}
var ho =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, n, o) {
        var s = new Error(o);
        return ((s.name = "SuppressedError"), (s.error = e), (s.suppressed = n), s);
      };
function Vn(e) {
  function n(i) {
    ((e.error = e.hasError ? new ho(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var o,
    s = 0;
  function t() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && s === 1) return ((s = 0), e.stack.push(o), Promise.resolve().then(t));
        if (o.dispose) {
          var i = o.dispose.call(o.value);
          if (o.async)
            return (
              (s |= 2),
              Promise.resolve(i).then(t, function (r) {
                return (n(r), t());
              })
            );
        } else s |= 1;
      } catch (r) {
        n(r);
      }
    if (s === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return t();
}
function Wn(e, n) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, s, t, i, r) {
        return s
          ? n
            ? ".jsx"
            : ".js"
          : t && (!i || !r)
            ? o
            : t + i + "." + r.toLowerCase() + "js";
      })
    : e;
}
const go = {
    __extends: _n,
    __assign: Ne,
    __rest: mn,
    __decorate: bn,
    __param: wn,
    __esDecorate: En,
    __runInitializers: Rn,
    __propKey: Pn,
    __setFunctionName: On,
    __metadata: jn,
    __awaiter: xn,
    __generator: Cn,
    __createBinding: Ve,
    __exportStar: Bn,
    __values: Ge,
    __read: Cr,
    __spread: Fn,
    __spreadArrays: Sn,
    __spreadArray: In,
    __await: U,
    __asyncGenerator: qn,
    __asyncDelegator: Tn,
    __asyncValues: Mn,
    __makeTemplateObject: An,
    __importStar: kn,
    __importDefault: Dn,
    __classPrivateFieldGet: Un,
    __classPrivateFieldSet: Ln,
    __classPrivateFieldIn: Nn,
    __addDisposableResource: Gn,
    __disposeResources: Vn,
    __rewriteRelativeImportExtension: Wn,
  },
  po = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: Gn,
        get __assign() {
          return Ne;
        },
        __asyncDelegator: Tn,
        __asyncGenerator: qn,
        __asyncValues: Mn,
        __await: U,
        __awaiter: xn,
        __classPrivateFieldGet: Un,
        __classPrivateFieldIn: Nn,
        __classPrivateFieldSet: Ln,
        __createBinding: Ve,
        __decorate: bn,
        __disposeResources: Vn,
        __esDecorate: En,
        __exportStar: Bn,
        __extends: _n,
        __generator: Cn,
        __importDefault: Dn,
        __importStar: kn,
        __makeTemplateObject: An,
        __metadata: jn,
        __param: wn,
        __propKey: Pn,
        __read: Cr,
        __rest: mn,
        __rewriteRelativeImportExtension: Wn,
        __runInitializers: Rn,
        __setFunctionName: On,
        __spread: Fn,
        __spreadArray: In,
        __spreadArrays: Sn,
        __values: Ge,
        default: go,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j = so(po);
var N = {},
  Ir;
function vo() {
  return (
    Ir ||
      ((Ir = 1),
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
  qr;
function P() {
  if (qr) return V;
  ((qr = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.BridgeAPIError = void 0));
  class e extends Error {}
  return ((V.BridgeAPIError = e), V);
}
var Tr;
function R() {
  if (Tr) return G;
  ((Tr = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.getCallBridge = void 0));
  const e = P();
  function n(s) {
    return !!s?.callBridge;
  }
  const o = () => {
    if (!n(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((G.getCallBridge = o), G);
}
var W = {},
  Mr;
function We() {
  if (Mr) return W;
  ((Mr = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.withRateLimiter = void 0));
  const e = P(),
    n = (o, s, t, i) => {
      let r = Date.now(),
        l = 0;
      return async (...u) => {
        const a = Date.now();
        if ((a - r > t && ((r = a), (l = 0)), l >= s))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((l = l + 1), o(...u));
      };
    };
  return ((W.withRateLimiter = n), W);
}
var Ar;
function yo() {
  return (
    Ar ||
      ((Ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const n = R(),
          o = P(),
          s = We(),
          t = (0, n.getCallBridge)(),
          i = (u) => {
            if (u && Object.values(u).some((a) => typeof a == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          r = (u, a) => {
            if (typeof u != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (i(a), t("invoke", { functionKey: u, payload: a }));
          };
        e.invoke = (0, s.withRateLimiter)(
          r,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function l() {
          return e.invoke;
        }
        e.makeInvoke = l;
      })($e)),
    $e
  );
}
var kr;
function Ue() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(yo(), e));
      })(Ze)),
    Ze
  );
}
var er = {},
  z = {},
  rr = {},
  Dr;
function zn() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const n = R(),
          o = P(),
          s = We(),
          t = 500,
          i = 25,
          r = 1e3 * i;
        (function (p) {
          ((p.REMOTE = "Remote"), (p.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const l = (0, n.getCallBridge)(),
          u = (p) => {
            if (p && Object.values(p).some((b) => typeof b == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (p) => async (b) => {
            u(b);
            const d = { ...b, invokeType: `ui-${p.toLowerCase()}-fetch` },
              y = await l("invoke", d),
              { success: f, payload: h, error: g } = y ?? {},
              v = { ...(f ? h : g) };
            if (v && v.headers)
              for (const _ in v.headers)
                Array.isArray(v.headers[_]) && (v.headers[_] = v.headers[_].join(","));
            return v;
          },
          c = (p) => {
            const b = a(p);
            return (0, s.withRateLimiter)(
              b,
              t,
              r,
              `${p} invocation calls are rate limited at ${t}/${i}s`,
            );
          };
        e._invokeEndpointFn = c;
      })(rr)),
    rr
  );
}
var Ur;
function _o() {
  if (Ur) return z;
  ((Ur = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.invokeRemote = void 0));
  const e = zn(),
    n = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((z.invokeRemote = n), z);
}
var H = {},
  Lr;
function mo() {
  if (Lr) return H;
  ((Lr = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.invokeService = void 0));
  const e = zn(),
    n = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((H.invokeService = n), H);
}
var Nr;
function bo() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = j;
        (n.__exportStar(_o(), e), n.__exportStar(mo(), e));
      })(er)),
    er
  );
}
var tr = {},
  K = {},
  J = {},
  Gr;
function wo() {
  if (Gr) return J;
  ((Gr = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.submit = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = async (t) => {
      if ((await o("submit", t)) === !1)
        throw new n.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((J.submit = s), J);
}
var Y = {},
  Vr;
function Eo() {
  if (Vr) return Y;
  ((Vr = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.close = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = async (t) => {
      try {
        if ((await o("close", t)) === !1)
          throw new n.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new n.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((Y.close = s), Y);
}
var Q = {},
  Wr;
function Ro() {
  if (Wr) return Q;
  ((Wr = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.open = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = async () => {
      try {
        if ((await o("open")) === !1)
          throw new n.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new n.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Q.open = s), Q);
}
var X = {},
  zr;
function Po() {
  if (zr) return X;
  ((zr = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.refresh = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = async (t) => {
      if ((await o("refresh", t)) === !1)
        throw new n.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((X.refresh = s), X);
}
var Z = {},
  Hr;
function Oo() {
  if (Hr) return Z;
  ((Hr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.createHistory = void 0));
  const n = (0, R().getCallBridge)(),
    o = async () => {
      const s = await n("createHistory");
      return (
        s.listen((t) => {
          s.location = t;
        }),
        s
      );
    };
  return ((Z.createHistory = o), Z);
}
var $ = {},
  nr = {},
  F = {},
  Kr;
function Hn() {
  return (
    Kr ||
      ((Kr = 1),
      Object.defineProperty(F, "__esModule", { value: !0 }),
      (F.FORGE_SUPPORTED_LOCALE_CODES = F.I18N_BUNDLE_FOLDER_NAME = F.I18N_INFO_FILE_NAME = void 0),
      (F.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (F.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (F.FORGE_SUPPORTED_LOCALE_CODES = [
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
    F
  );
}
var T = {},
  Jr;
function jo() {
  if (Jr) return T;
  ((Jr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.TranslationsGetter = T.TranslationGetterError = void 0));
  const e = (s, t) => {
    s.includes(t) || s.push(t);
  };
  class n extends Error {
    constructor(t) {
      (super(t), (this.name = "TranslationGetterError"));
    }
  }
  T.TranslationGetterError = n;
  class o {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(t) {
      this.resourcesAccessor = t;
    }
    async getTranslations(t, i = { fallback: !0 }) {
      const r = await this.getI18nInfoConfig(),
        { fallback: l } = i;
      if (!l) {
        let u;
        return (
          r.locales.includes(t) && (u = await this.getTranslationResource(t)),
          { translations: u ?? null, locale: t }
        );
      }
      for (const u of this.getLocaleLookupOrder(t, r)) {
        const a = await this.getTranslationResource(u);
        if (a) return { translations: a, locale: u };
      }
      return { translations: null, locale: t };
    }
    async getTranslationsByLocaleLookupOrder(t) {
      const i = await this.getI18nInfoConfig(),
        r = this.getLocaleLookupOrder(t, i);
      return await Promise.all(
        r.map(async (l) => {
          const u = await this.getTranslationResource(l);
          return { locale: l, translations: u };
        }),
      );
    }
    reset() {
      ((this.i18nInfoConfig = null), this.translationResources.clear());
    }
    async getTranslationResource(t) {
      let i = this.translationResources.get(t);
      if (!i)
        try {
          ((i = await this.resourcesAccessor.getTranslationResource(t)),
            this.translationResources.set(t, i));
        } catch (r) {
          throw r instanceof n ? r : new n(`Failed to get translation resource for locale: ${t}`);
        }
      return i;
    }
    async getI18nInfoConfig() {
      if (!this.i18nInfoConfig)
        try {
          this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
        } catch (t) {
          throw t instanceof n ? t : new n("Failed to get i18n info config");
        }
      return this.i18nInfoConfig;
    }
    getLocaleLookupOrder(t, i) {
      const { locales: r, fallback: l } = i,
        u = [t],
        a = l[t];
      return (
        a && Array.isArray(a) && a.length > 0 && u.push(...a),
        e(u, i.fallback.default),
        u.filter((c) => r.includes(c))
      );
    }
  }
  return ((T.TranslationsGetter = o), T);
}
var ee = {},
  or = {},
  Yr;
function Kn() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = j.__importDefault(ao()),
          s = (i, r, l) => {
            const u = i[l];
            return u ? (0, e.getTranslationValueFromContent)(u, r) : null;
          };
        e.getTranslationValue = s;
        const t = (i, r) => {
          let l = i[r];
          if (!l) {
            const u = r.split(".");
            u.length > 1 && (l = (0, o.default)(i, u, null));
          }
          return typeof l == "string" ? l : null;
        };
        e.getTranslationValueFromContent = t;
      })(or)),
    or
  );
}
var Qr;
function xo() {
  if (Qr) return ee;
  ((Qr = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.Translator = void 0));
  const e = Kn();
  class n {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(s, t) {
      ((this.locale = s), (this.translationsGetter = t));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(s) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let t = this.cache.get(s);
      if (t === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const r = (0, e.getTranslationValueFromContent)(i, s);
          if (r !== null) {
            t = r;
            break;
          }
        }
        ((t = t ?? null), this.cache.set(s, t));
      }
      return t;
    }
  }
  return ((ee.Translator = n), ee);
}
var re = {},
  Xr;
function Co() {
  if (Xr) return re;
  ((Xr = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.ensureLocale = void 0));
  const e = Hn(),
    n = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    s = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, r) => {
        const [l] = r.split("-");
        return (i[l] || (i[l] = r), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    t = (i) => {
      const r = i.replace("_", "-");
      return n.has(r) ? r : (s[r] ?? o[r] ?? null);
    };
  return ((re.ensureLocale = t), re);
}
var ir = {},
  Zr;
function Bo() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const n = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          o = (a) => typeof a?.i18n == "string",
          s = (a) => a.startsWith("connect-"),
          t = (a) => a.startsWith("core:"),
          i = (a) => {
            const c = new Set(),
              p = (b, d) =>
                !n(b) || c.has(b)
                  ? []
                  : (c.add(b),
                    Object.entries(b).flatMap(([y, f]) => {
                      const h = [...d, y];
                      return o(f)
                        ? [{ propertyPath: h, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((g) => p(g, h))
                          : p(f, h);
                    }));
            return p(a, []);
          },
          r = (a) =>
            Object.entries(a).flatMap(([c, p]) =>
              !s(c) && !t(c) && p && Array.isArray(p) && p.length > 0 ? p.map((b) => [b, c]) : [],
            );
        e.getI18nSupportedModuleEntries = r;
        const l = (a) => {
          const c = new Set();
          for (const p of (0, e.getI18nSupportedModuleEntries)(a)) {
            const b = i(p[0]);
            for (const { key: d } of b) c.add(d);
          }
          return c.size > 0 ? Array.from(c) : [];
        };
        e.extractI18nKeysFromModules = l;
        const u = (a) => {
          const c = [];
          for (const p of (0, e.getI18nSupportedModuleEntries)(a)) {
            const b = i(p[0]);
            for (const d of b) c.push({ moduleName: p[1], ...d });
          }
          return c;
        };
        e.extractI18nPropertiesFromModules = u;
      })(ir)),
    ir
  );
}
var sr = {},
  $r;
function Fo() {
  return ($r || (($r = 1), Object.defineProperty(sr, "__esModule", { value: !0 })), sr);
}
var et;
function Jn() {
  return (
    et ||
      ((et = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const n = j;
        (n.__exportStar(Hn(), e),
          n.__exportStar(jo(), e),
          n.__exportStar(xo(), e),
          n.__exportStar(Co(), e));
        var o = Kn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var s = Bo();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return s.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return s.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return s.getI18nSupportedModuleEntries;
            },
          }),
          n.__exportStar(Fo(), e));
      })(nr)),
    nr
  );
}
var rt;
function So() {
  if (rt) return $;
  ((rt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.getContext = void 0));
  const e = R(),
    n = Jn(),
    o = (0, e.getCallBridge)(),
    s = async () => {
      var t;
      const i = await o("getContext"),
        r = i?.locale;
      return (r && (i.locale = (t = (0, n.ensureLocale)(r)) !== null && t !== void 0 ? t : r), i);
    };
  return (($.getContext = s), $);
}
var te = {},
  tt;
function Io() {
  if (tt) return te;
  ((tt = 1),
    Object.defineProperty(te, "__esModule", { value: !0 }),
    (te.changeWindowTitle = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = async (t) => {
      try {
        await o("changeWindowTitle", t);
      } catch {
        throw new n.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((te.changeWindowTitle = s), te);
}
var ne = {},
  nt;
function qo() {
  if (nt) return ne;
  ((nt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.theme = void 0));
  const n = (0, R().getCallBridge)();
  return ((ne.theme = { enable: () => n("enableTheming") }), ne);
}
var oe = {},
  ie = {},
  ar = {},
  M = {},
  ot;
function Yn() {
  if (ot) return M;
  ((ot = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.blobToBase64 = M.base64ToBlob = void 0));
  const e = (o, s) => {
    if (!o) return null;
    const t = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(t),
      r = new Array(i.length);
    for (let u = 0; u < i.length; u++) r[u] = i.charCodeAt(u);
    const l = new Uint8Array(r);
    return new Blob([l], { type: s });
  };
  M.base64ToBlob = e;
  const n = (o) =>
    new Promise((s, t) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        s(i.result);
      }),
        (i.onerror = t),
        i.readAsDataURL(o));
    });
  return ((M.blobToBase64 = n), M);
}
var it;
function To() {
  return (
    it ||
      ((it = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const n = Yn(),
          o = (a) => {
            if (
              typeof a != "object" ||
              a === null ||
              Object.prototype.toString.call(a) !== "[object Object]"
            )
              return !1;
            const c = Object.getPrototypeOf(a);
            if (c === null) return !0;
            const p = Object.prototype.hasOwnProperty.call(c, "constructor") && c.constructor;
            return (
              typeof p == "function" &&
              p instanceof p &&
              Function.prototype.call(p) === Function.prototype.call(a)
            );
          },
          s = async (a) => ({ data: await (0, n.blobToBase64)(a), type: a.type }),
          t = (a) => (0, n.base64ToBlob)(a.data, a.type),
          i = async (a) => {
            if (a instanceof Blob) return { ...(await s(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((c) => (0, e.serialiseBlobsInPayload)(c)));
            if (a && o(a)) {
              const c = await Promise.all(
                Object.entries(a).map(async ([p, b]) => [
                  p,
                  await (0, e.serialiseBlobsInPayload)(b),
                ]),
              );
              return Object.fromEntries(c);
            }
            return a;
          };
        e.serialiseBlobsInPayload = i;
        const r = (a) => {
          if (a && o(a) && "__isBlobData" in a) {
            const c = a;
            return t({ data: c.data, type: c.type });
          }
          if (Array.isArray(a)) return a.map((c) => (0, e.deserialiseBlobsInPayload)(c));
          if (a && o(a)) {
            const c = {};
            for (const [p, b] of Object.entries(a)) c[p] = (0, e.deserialiseBlobsInPayload)(b);
            return c;
          }
          return a;
        };
        e.deserialiseBlobsInPayload = r;
        const l = (a) =>
          a instanceof Blob
            ? !0
            : Array.isArray(a)
              ? a.some((c) => (0, e.containsBlobs)(c))
              : a && o(a)
                ? Object.values(a).some((c) => (0, e.containsBlobs)(c))
                : !1;
        e.containsBlobs = l;
        const u = (a) =>
          a && o(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((c) => (0, e.containsSerialisedBlobs)(c))
              : a && o(a)
                ? Object.values(a).some((c) => (0, e.containsSerialisedBlobs)(c))
                : !1;
        e.containsSerialisedBlobs = u;
      })(ar)),
    ar
  );
}
var st;
function Qn() {
  if (st) return ie;
  ((st = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.events = void 0));
  const e = R(),
    n = To(),
    o = (0, e.getCallBridge)(),
    s = (u) => (a) => {
      let c = a;
      return ((0, n.containsSerialisedBlobs)(a) && (c = (0, n.deserialiseBlobsInPayload)(a)), u(c));
    },
    t = async (u, a) => {
      let c = a;
      return (
        (0, n.containsBlobs)(a) && (c = await (0, n.serialiseBlobsInPayload)(a)),
        o("emit", { event: u, payload: c })
      );
    },
    i = (u, a) => o("on", { event: u, callback: s(a) }),
    r = async (u, a) => {
      let c = a;
      return (
        (0, n.containsBlobs)(a) && (c = await (0, n.serialiseBlobsInPayload)(a)),
        o("emitPublic", { event: u, payload: c })
      );
    },
    l = (u, a) => o("onPublic", { event: u, callback: s(a) });
  return ((ie.events = { emit: t, on: i, emitPublic: r, onPublic: l }), ie);
}
var at;
function Mo() {
  if (at) return oe;
  ((at = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.emitReadyEvent = void 0));
  const e = Qn(),
    n = eo(),
    s = (0, R().getCallBridge)(),
    t = "EXTENSION_READY",
    i = async () => {
      const r = await n.view.getContext();
      await e.events.emit(t, { localId: r.localId });
      try {
        await s("emitReadyEvent");
      } catch {}
    };
  return ((oe.emitReadyEvent = i), oe);
}
const Ao = "modulepreload",
  ko = function (e, n) {
    return new URL(e, n).href;
  },
  lt = {},
  Do = function (n, o, s) {
    let t = Promise.resolve();
    if (o && o.length > 0) {
      let a = function (c) {
        return Promise.all(
          c.map((p) =>
            Promise.resolve(p).then(
              (b) => ({ status: "fulfilled", value: b }),
              (b) => ({ status: "rejected", reason: b }),
            ),
          ),
        );
      };
      const r = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        u = l?.nonce || l?.getAttribute("nonce");
      t = a(
        o.map((c) => {
          if (((c = ko(c, s)), c in lt)) return;
          lt[c] = !0;
          const p = c.endsWith(".css"),
            b = p ? '[rel="stylesheet"]' : "";
          if (s)
            for (let y = r.length - 1; y >= 0; y--) {
              const f = r[y];
              if (f.href === c && (!p || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${c}"]${b}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = p ? "stylesheet" : Ao),
            p || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            u && d.setAttribute("nonce", u),
            document.head.appendChild(d),
            p)
          )
            return new Promise((y, f) => {
              (d.addEventListener("load", y),
                d.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${c}`))));
            });
        }),
      );
    }
    function i(r) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = r), window.dispatchEvent(l), !l.defaultPrevented)) throw r;
    }
    return t.then((r) => {
      for (const l of r || []) l.status === "rejected" && i(l.reason);
      return n().catch(i);
    });
  };
var se = {},
  lr = {},
  ae = {},
  Le = {},
  ut;
function Xn() {
  if (ut) return Le;
  ((ut = 1), Object.defineProperty(Le, "__esModule", { value: !0 }), (Le.default = o));
  let e;
  const n = new Uint8Array(16);
  function o() {
    if (
      !e &&
      ((e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !e)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return e(n);
  }
  return Le;
}
var D = {},
  le = {},
  ue = {},
  ct;
function Uo() {
  if (ct) return ue;
  ((ct = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ue.default = e), ue);
}
var dt;
function ze() {
  if (dt) return le;
  ((dt = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.default = void 0));
  var e = n(Uo());
  function n(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function o(t) {
    return typeof t == "string" && e.default.test(t);
  }
  var s = o;
  return ((le.default = s), le);
}
var ft;
function He() {
  if (ft) return D;
  ((ft = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.default = void 0),
    (D.unsafeStringify = s));
  var e = n(ze());
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  const o = [];
  for (let r = 0; r < 256; ++r) o.push((r + 256).toString(16).slice(1));
  function s(r, l = 0) {
    return (
      o[r[l + 0]] +
      o[r[l + 1]] +
      o[r[l + 2]] +
      o[r[l + 3]] +
      "-" +
      o[r[l + 4]] +
      o[r[l + 5]] +
      "-" +
      o[r[l + 6]] +
      o[r[l + 7]] +
      "-" +
      o[r[l + 8]] +
      o[r[l + 9]] +
      "-" +
      o[r[l + 10]] +
      o[r[l + 11]] +
      o[r[l + 12]] +
      o[r[l + 13]] +
      o[r[l + 14]] +
      o[r[l + 15]]
    );
  }
  function t(r, l = 0) {
    const u = s(r, l);
    if (!(0, e.default)(u)) throw TypeError("Stringified UUID is invalid");
    return u;
  }
  var i = t;
  return ((D.default = i), D);
}
var ht;
function Lo() {
  if (ht) return ae;
  ((ht = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.default = void 0));
  var e = o(Xn()),
    n = He();
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  let s,
    t,
    i = 0,
    r = 0;
  function l(a, c, p) {
    let b = (c && p) || 0;
    const d = c || new Array(16);
    a = a || {};
    let y = a.node || s,
      f = a.clockseq !== void 0 ? a.clockseq : t;
    if (y == null || f == null) {
      const E = a.random || (a.rng || e.default)();
      (y == null && (y = s = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        f == null && (f = t = ((E[6] << 8) | E[7]) & 16383));
    }
    let h = a.msecs !== void 0 ? a.msecs : Date.now(),
      g = a.nsecs !== void 0 ? a.nsecs : r + 1;
    const v = h - i + (g - r) / 1e4;
    if (
      (v < 0 && a.clockseq === void 0 && (f = (f + 1) & 16383),
      (v < 0 || h > i) && a.nsecs === void 0 && (g = 0),
      g >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = h), (r = g), (t = f), (h += 122192928e5));
    const _ = ((h & 268435455) * 1e4 + g) % 4294967296;
    ((d[b++] = (_ >>> 24) & 255),
      (d[b++] = (_ >>> 16) & 255),
      (d[b++] = (_ >>> 8) & 255),
      (d[b++] = _ & 255));
    const w = ((h / 4294967296) * 1e4) & 268435455;
    ((d[b++] = (w >>> 8) & 255),
      (d[b++] = w & 255),
      (d[b++] = ((w >>> 24) & 15) | 16),
      (d[b++] = (w >>> 16) & 255),
      (d[b++] = (f >>> 8) | 128),
      (d[b++] = f & 255));
    for (let E = 0; E < 6; ++E) d[b + E] = y[E];
    return c || (0, n.unsafeStringify)(d);
  }
  var u = l;
  return ((ae.default = u), ae);
}
var ce = {},
  q = {},
  de = {},
  gt;
function Zn() {
  if (gt) return de;
  ((gt = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = n(ze());
  function n(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function o(t) {
    if (!(0, e.default)(t)) throw TypeError("Invalid UUID");
    let i;
    const r = new Uint8Array(16);
    return (
      (r[0] = (i = parseInt(t.slice(0, 8), 16)) >>> 24),
      (r[1] = (i >>> 16) & 255),
      (r[2] = (i >>> 8) & 255),
      (r[3] = i & 255),
      (r[4] = (i = parseInt(t.slice(9, 13), 16)) >>> 8),
      (r[5] = i & 255),
      (r[6] = (i = parseInt(t.slice(14, 18), 16)) >>> 8),
      (r[7] = i & 255),
      (r[8] = (i = parseInt(t.slice(19, 23), 16)) >>> 8),
      (r[9] = i & 255),
      (r[10] = ((i = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
      (r[11] = (i / 4294967296) & 255),
      (r[12] = (i >>> 24) & 255),
      (r[13] = (i >>> 16) & 255),
      (r[14] = (i >>> 8) & 255),
      (r[15] = i & 255),
      r
    );
  }
  var s = o;
  return ((de.default = s), de);
}
var pt;
function $n() {
  if (pt) return q;
  ((pt = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.URL = q.DNS = void 0),
    (q.default = r));
  var e = He(),
    n = o(Zn());
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l) {
    l = unescape(encodeURIComponent(l));
    const u = [];
    for (let a = 0; a < l.length; ++a) u.push(l.charCodeAt(a));
    return u;
  }
  const t = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  q.DNS = t;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  q.URL = i;
  function r(l, u, a) {
    function c(p, b, d, y) {
      var f;
      if (
        (typeof p == "string" && (p = s(p)),
        typeof b == "string" && (b = (0, n.default)(b)),
        ((f = b) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let h = new Uint8Array(16 + p.length);
      if (
        (h.set(b),
        h.set(p, b.length),
        (h = a(h)),
        (h[6] = (h[6] & 15) | u),
        (h[8] = (h[8] & 63) | 128),
        d)
      ) {
        y = y || 0;
        for (let g = 0; g < 16; ++g) d[y + g] = h[g];
        return d;
      }
      return (0, e.unsafeStringify)(h);
    }
    try {
      c.name = l;
    } catch {}
    return ((c.DNS = t), (c.URL = i), c);
  }
  return q;
}
var fe = {},
  vt;
function No() {
  if (vt) return fe;
  ((vt = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const y = unescape(encodeURIComponent(d));
      d = new Uint8Array(y.length);
      for (let f = 0; f < y.length; ++f) d[f] = y.charCodeAt(f);
    }
    return n(s(t(d), d.length * 8));
  }
  function n(d) {
    const y = [],
      f = d.length * 32,
      h = "0123456789abcdef";
    for (let g = 0; g < f; g += 8) {
      const v = (d[g >> 5] >>> (g % 32)) & 255,
        _ = parseInt(h.charAt((v >>> 4) & 15) + h.charAt(v & 15), 16);
      y.push(_);
    }
    return y;
  }
  function o(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function s(d, y) {
    ((d[y >> 5] |= 128 << (y % 32)), (d[o(y) - 1] = y));
    let f = 1732584193,
      h = -271733879,
      g = -1732584194,
      v = 271733878;
    for (let _ = 0; _ < d.length; _ += 16) {
      const w = f,
        E = h,
        O = g,
        C = v;
      ((f = u(f, h, g, v, d[_], 7, -680876936)),
        (v = u(v, f, h, g, d[_ + 1], 12, -389564586)),
        (g = u(g, v, f, h, d[_ + 2], 17, 606105819)),
        (h = u(h, g, v, f, d[_ + 3], 22, -1044525330)),
        (f = u(f, h, g, v, d[_ + 4], 7, -176418897)),
        (v = u(v, f, h, g, d[_ + 5], 12, 1200080426)),
        (g = u(g, v, f, h, d[_ + 6], 17, -1473231341)),
        (h = u(h, g, v, f, d[_ + 7], 22, -45705983)),
        (f = u(f, h, g, v, d[_ + 8], 7, 1770035416)),
        (v = u(v, f, h, g, d[_ + 9], 12, -1958414417)),
        (g = u(g, v, f, h, d[_ + 10], 17, -42063)),
        (h = u(h, g, v, f, d[_ + 11], 22, -1990404162)),
        (f = u(f, h, g, v, d[_ + 12], 7, 1804603682)),
        (v = u(v, f, h, g, d[_ + 13], 12, -40341101)),
        (g = u(g, v, f, h, d[_ + 14], 17, -1502002290)),
        (h = u(h, g, v, f, d[_ + 15], 22, 1236535329)),
        (f = a(f, h, g, v, d[_ + 1], 5, -165796510)),
        (v = a(v, f, h, g, d[_ + 6], 9, -1069501632)),
        (g = a(g, v, f, h, d[_ + 11], 14, 643717713)),
        (h = a(h, g, v, f, d[_], 20, -373897302)),
        (f = a(f, h, g, v, d[_ + 5], 5, -701558691)),
        (v = a(v, f, h, g, d[_ + 10], 9, 38016083)),
        (g = a(g, v, f, h, d[_ + 15], 14, -660478335)),
        (h = a(h, g, v, f, d[_ + 4], 20, -405537848)),
        (f = a(f, h, g, v, d[_ + 9], 5, 568446438)),
        (v = a(v, f, h, g, d[_ + 14], 9, -1019803690)),
        (g = a(g, v, f, h, d[_ + 3], 14, -187363961)),
        (h = a(h, g, v, f, d[_ + 8], 20, 1163531501)),
        (f = a(f, h, g, v, d[_ + 13], 5, -1444681467)),
        (v = a(v, f, h, g, d[_ + 2], 9, -51403784)),
        (g = a(g, v, f, h, d[_ + 7], 14, 1735328473)),
        (h = a(h, g, v, f, d[_ + 12], 20, -1926607734)),
        (f = c(f, h, g, v, d[_ + 5], 4, -378558)),
        (v = c(v, f, h, g, d[_ + 8], 11, -2022574463)),
        (g = c(g, v, f, h, d[_ + 11], 16, 1839030562)),
        (h = c(h, g, v, f, d[_ + 14], 23, -35309556)),
        (f = c(f, h, g, v, d[_ + 1], 4, -1530992060)),
        (v = c(v, f, h, g, d[_ + 4], 11, 1272893353)),
        (g = c(g, v, f, h, d[_ + 7], 16, -155497632)),
        (h = c(h, g, v, f, d[_ + 10], 23, -1094730640)),
        (f = c(f, h, g, v, d[_ + 13], 4, 681279174)),
        (v = c(v, f, h, g, d[_], 11, -358537222)),
        (g = c(g, v, f, h, d[_ + 3], 16, -722521979)),
        (h = c(h, g, v, f, d[_ + 6], 23, 76029189)),
        (f = c(f, h, g, v, d[_ + 9], 4, -640364487)),
        (v = c(v, f, h, g, d[_ + 12], 11, -421815835)),
        (g = c(g, v, f, h, d[_ + 15], 16, 530742520)),
        (h = c(h, g, v, f, d[_ + 2], 23, -995338651)),
        (f = p(f, h, g, v, d[_], 6, -198630844)),
        (v = p(v, f, h, g, d[_ + 7], 10, 1126891415)),
        (g = p(g, v, f, h, d[_ + 14], 15, -1416354905)),
        (h = p(h, g, v, f, d[_ + 5], 21, -57434055)),
        (f = p(f, h, g, v, d[_ + 12], 6, 1700485571)),
        (v = p(v, f, h, g, d[_ + 3], 10, -1894986606)),
        (g = p(g, v, f, h, d[_ + 10], 15, -1051523)),
        (h = p(h, g, v, f, d[_ + 1], 21, -2054922799)),
        (f = p(f, h, g, v, d[_ + 8], 6, 1873313359)),
        (v = p(v, f, h, g, d[_ + 15], 10, -30611744)),
        (g = p(g, v, f, h, d[_ + 6], 15, -1560198380)),
        (h = p(h, g, v, f, d[_ + 13], 21, 1309151649)),
        (f = p(f, h, g, v, d[_ + 4], 6, -145523070)),
        (v = p(v, f, h, g, d[_ + 11], 10, -1120210379)),
        (g = p(g, v, f, h, d[_ + 2], 15, 718787259)),
        (h = p(h, g, v, f, d[_ + 9], 21, -343485551)),
        (f = i(f, w)),
        (h = i(h, E)),
        (g = i(g, O)),
        (v = i(v, C)));
    }
    return [f, h, g, v];
  }
  function t(d) {
    if (d.length === 0) return [];
    const y = d.length * 8,
      f = new Uint32Array(o(y));
    for (let h = 0; h < y; h += 8) f[h >> 5] |= (d[h / 8] & 255) << (h % 32);
    return f;
  }
  function i(d, y) {
    const f = (d & 65535) + (y & 65535);
    return (((d >> 16) + (y >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function r(d, y) {
    return (d << y) | (d >>> (32 - y));
  }
  function l(d, y, f, h, g, v) {
    return i(r(i(i(y, d), i(h, v)), g), f);
  }
  function u(d, y, f, h, g, v, _) {
    return l((y & f) | (~y & h), d, y, g, v, _);
  }
  function a(d, y, f, h, g, v, _) {
    return l((y & h) | (f & ~h), d, y, g, v, _);
  }
  function c(d, y, f, h, g, v, _) {
    return l(y ^ f ^ h, d, y, g, v, _);
  }
  function p(d, y, f, h, g, v, _) {
    return l(f ^ (y | ~h), d, y, g, v, _);
  }
  var b = e;
  return ((fe.default = b), fe);
}
var yt;
function Go() {
  if (yt) return ce;
  ((yt = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.default = void 0));
  var e = o($n()),
    n = o(No());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var t = (0, e.default)("v3", 48, n.default);
  return ((ce.default = t), ce);
}
var he = {},
  ge = {},
  _t;
function Vo() {
  if (_t) return ge;
  ((_t = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var n = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ge.default = n), ge);
}
var mt;
function Wo() {
  if (mt) return he;
  ((mt = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = s(Vo()),
    n = s(Xn()),
    o = He();
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function t(r, l, u) {
    if (e.default.randomUUID && !l && !r) return e.default.randomUUID();
    r = r || {};
    const a = r.random || (r.rng || n.default)();
    if (((a[6] = (a[6] & 15) | 64), (a[8] = (a[8] & 63) | 128), l)) {
      u = u || 0;
      for (let c = 0; c < 16; ++c) l[u + c] = a[c];
      return l;
    }
    return (0, o.unsafeStringify)(a);
  }
  var i = t;
  return ((he.default = i), he);
}
var pe = {},
  ve = {},
  bt;
function zo() {
  if (bt) return ve;
  ((bt = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  function e(t, i, r, l) {
    switch (t) {
      case 0:
        return (i & r) ^ (~i & l);
      case 1:
        return i ^ r ^ l;
      case 2:
        return (i & r) ^ (i & l) ^ (r & l);
      case 3:
        return i ^ r ^ l;
    }
  }
  function n(t, i) {
    return (t << i) | (t >>> (32 - i));
  }
  function o(t) {
    const i = [1518500249, 1859775393, 2400959708, 3395469782],
      r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof t == "string") {
      const c = unescape(encodeURIComponent(t));
      t = [];
      for (let p = 0; p < c.length; ++p) t.push(c.charCodeAt(p));
    } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
    t.push(128);
    const l = t.length / 4 + 2,
      u = Math.ceil(l / 16),
      a = new Array(u);
    for (let c = 0; c < u; ++c) {
      const p = new Uint32Array(16);
      for (let b = 0; b < 16; ++b)
        p[b] =
          (t[c * 64 + b * 4] << 24) |
          (t[c * 64 + b * 4 + 1] << 16) |
          (t[c * 64 + b * 4 + 2] << 8) |
          t[c * 64 + b * 4 + 3];
      a[c] = p;
    }
    ((a[u - 1][14] = ((t.length - 1) * 8) / Math.pow(2, 32)),
      (a[u - 1][14] = Math.floor(a[u - 1][14])),
      (a[u - 1][15] = ((t.length - 1) * 8) & 4294967295));
    for (let c = 0; c < u; ++c) {
      const p = new Uint32Array(80);
      for (let g = 0; g < 16; ++g) p[g] = a[c][g];
      for (let g = 16; g < 80; ++g) p[g] = n(p[g - 3] ^ p[g - 8] ^ p[g - 14] ^ p[g - 16], 1);
      let b = r[0],
        d = r[1],
        y = r[2],
        f = r[3],
        h = r[4];
      for (let g = 0; g < 80; ++g) {
        const v = Math.floor(g / 20),
          _ = (n(b, 5) + e(v, d, y, f) + h + i[v] + p[g]) >>> 0;
        ((h = f), (f = y), (y = n(d, 30) >>> 0), (d = b), (b = _));
      }
      ((r[0] = (r[0] + b) >>> 0),
        (r[1] = (r[1] + d) >>> 0),
        (r[2] = (r[2] + y) >>> 0),
        (r[3] = (r[3] + f) >>> 0),
        (r[4] = (r[4] + h) >>> 0));
    }
    return [
      (r[0] >> 24) & 255,
      (r[0] >> 16) & 255,
      (r[0] >> 8) & 255,
      r[0] & 255,
      (r[1] >> 24) & 255,
      (r[1] >> 16) & 255,
      (r[1] >> 8) & 255,
      r[1] & 255,
      (r[2] >> 24) & 255,
      (r[2] >> 16) & 255,
      (r[2] >> 8) & 255,
      r[2] & 255,
      (r[3] >> 24) & 255,
      (r[3] >> 16) & 255,
      (r[3] >> 8) & 255,
      r[3] & 255,
      (r[4] >> 24) & 255,
      (r[4] >> 16) & 255,
      (r[4] >> 8) & 255,
      r[4] & 255,
    ];
  }
  var s = o;
  return ((ve.default = s), ve);
}
var wt;
function Ho() {
  if (wt) return pe;
  ((wt = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = o($n()),
    n = o(zo());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var t = (0, e.default)("v5", 80, n.default);
  return ((pe.default = t), pe);
}
var ye = {},
  Et;
function Ko() {
  if (Et) return ye;
  ((Et = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((ye.default = e), ye);
}
var _e = {},
  Rt;
function Jo() {
  if (Rt) return _e;
  ((Rt = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = n(ze());
  function n(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function o(t) {
    if (!(0, e.default)(t)) throw TypeError("Invalid UUID");
    return parseInt(t.slice(14, 15), 16);
  }
  var s = o;
  return ((_e.default = s), _e);
}
var Pt;
function Yo() {
  return (
    Pt ||
      ((Pt = 1),
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
              return a.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return u.default;
            },
          }),
          Object.defineProperty(e, "v1", {
            enumerable: !0,
            get: function () {
              return n.default;
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
              return s.default;
            },
          }),
          Object.defineProperty(e, "v5", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }),
          Object.defineProperty(e, "validate", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return r.default;
            },
          }));
        var n = c(Lo()),
          o = c(Go()),
          s = c(Wo()),
          t = c(Ho()),
          i = c(Ko()),
          r = c(Jo()),
          l = c(ze()),
          u = c(He()),
          a = c(Zn());
        function c(p) {
          return p && p.__esModule ? p : { default: p };
        }
      })(lr)),
    lr
  );
}
var Ot;
function Qo() {
  if (Ot) return se;
  ((Ot = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.createAdfRendererIframeProps = void 0));
  const e = Yo(),
    n = async (o, s) => {
      const t = await Do(
          () => import("./index-BEjbWMh5.js").then((c) => c.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = t.default || t,
        r = new URL(document.referrer).origin,
        l = `${r}/forge-apps/adf-renderer`,
        u = s || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        a = () => {
          var c, p, b, d, y, f;
          const h = document.getElementById(u),
            g = {
              type: "adf-document",
              document: (c = o.extension.macro) === null || c === void 0 ? void 0 : c.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: o.localId,
              isEditing:
                (b = (p = o.extension) === null || p === void 0 ? void 0 : p.isEditing) !== null &&
                b !== void 0
                  ? b
                  : !1,
              contentId:
                (y = (d = o.extension) === null || d === void 0 ? void 0 : d.content) === null ||
                y === void 0
                  ? void 0
                  : y.id,
            };
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (v) => {
                var _;
                (_ = v?.iFrameResizer) === null || _ === void 0 || _.resize();
              },
            },
            h || "",
          ),
            (f = h?.contentWindow) === null || f === void 0 || f.postMessage(g, r));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: u, src: l, onLoad: a }
      );
    };
  return ((se.createAdfRendererIframeProps = n), se);
}
var me = {},
  jt;
function Xo() {
  if (jt) return me;
  ((jt = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.onClose = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = async (t) => {
      try {
        if ((await o("onClose", t)) === !1)
          throw new n.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new n.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((me.onClose = s), me);
}
var xt;
function eo() {
  if (xt) return K;
  ((xt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.view = void 0));
  const e = wo(),
    n = Eo(),
    o = Ro(),
    s = Po(),
    t = Oo(),
    i = So(),
    r = Io(),
    l = qo(),
    u = Mo(),
    a = Qo(),
    c = Xo();
  return (
    (K.view = {
      submit: e.submit,
      close: n.close,
      onClose: c.onClose,
      open: o.open,
      refresh: s.refresh,
      createHistory: t.createHistory,
      getContext: i.getContext,
      theme: l.theme,
      changeWindowTitle: r.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
      createAdfRendererIframeProps: a.createAdfRendererIframeProps,
    }),
    K
  );
}
var Ct;
function Ke() {
  return (
    Ct ||
      ((Ct = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(eo(), e));
      })(tr)),
    tr
  );
}
var ur = {},
  be = {},
  Bt;
function Zo() {
  if (Bt) return be;
  ((Bt = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.router = void 0));
  const n = (0, R().getCallBridge)(),
    o = async (r) => {
      if (!r?.target) throw new Error("target is required for getUrl");
      const l = await n("getUrl", r);
      if (!l) throw new Error("Failed to get URL");
      try {
        return new URL(l);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${l} (${u})`);
      }
    },
    s = (r) => {
      if (typeof r == "string") return n("navigate", { url: r, type: "same-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return n("navigate", { ...r, type: "same-tab" });
    },
    t = (r) => {
      if (typeof r == "string") return n("navigate", { url: r, type: "new-tab" });
      if (!r?.target) throw new Error("target is required for navigation");
      return n("navigate", { ...r, type: "new-tab" });
    },
    i = async () => n("reload");
  return ((be.router = { getUrl: o, navigate: s, open: t, reload: i }), be);
}
var Ft;
function $o() {
  return (
    Ft ||
      ((Ft = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Zo(), e));
      })(ur)),
    ur
  );
}
var cr = {},
  we = {},
  St;
function ei() {
  if (St) return we;
  ((St = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.Modal = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = () => {};
  class t {
    constructor(r) {
      var l, u;
      ((this.resource = r?.resource || null),
        (this.onClose = r?.onClose || s),
        (this.size = r?.size || "medium"),
        (this.context = r?.context || {}),
        (this.closeOnEscape = (l = r?.closeOnEscape) !== null && l !== void 0 ? l : !0),
        (this.closeOnOverlayClick = (u = r?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0),
        (this.title = r?.title || ""),
        (this.icon = r?.icon || ""));
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
          throw new n.BridgeAPIError("Unable to open modal.");
      } catch {
        throw new n.BridgeAPIError("Unable to open modal.");
      }
    }
  }
  return ((we.Modal = t), we);
}
var It;
function ri() {
  return (
    It ||
      ((It = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(ei(), e));
      })(cr)),
    cr
  );
}
var x = {},
  A = {},
  qt;
function ti() {
  if (qt) return A;
  ((qt = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.productFetchApi = A.remoteFetchApi = void 0));
  const e = Yn(),
    n = async (r, l = !1) => {
      const u = {};
      for (const [a, c] of r.entries())
        if (l ? a.startsWith("file") : a === "file") {
          const b = c.name,
            d = c.type;
          ((u[a] = await (0, e.blobToBase64)(c)), (u[`__${a}Name`] = b), (u[`__${a}Type`] = d));
        } else u[a] = c;
      return JSON.stringify(u);
    },
    o = (r) => {
      if (!r) return r;
      if ("signal" in r) {
        const { signal: l, ...u } = r;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          u
        );
      }
      return r;
    },
    s = async (r, l) => {
      const u = l?.body instanceof FormData,
        a = u ? await n(l?.body, r === "remote") : l?.body,
        c = new Request("", { body: a, method: l?.method, headers: l?.headers }),
        p = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(p),
        isMultipartFormData: u,
      };
    },
    t = (r) => {
      const l = async (u, a) => {
        const c = o(a),
          { body: p, headers: b, isMultipartFormData: d } = await s("remote", c),
          y = {
            remoteKey: u,
            fetchRequestInit: { ...c, body: p, headers: [...b.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: h,
            statusText: g,
            status: v,
            isAttachment: _,
          } = await r("fetchRemote", y),
          w = _ ? (0, e.base64ToBlob)(f, h["content-type"]) : f;
        return new Response(w || null, { headers: h, status: v, statusText: g });
      };
      return { requestRemote: (u, a) => l(u, a) };
    };
  A.remoteFetchApi = t;
  const i = (r) => {
    const l = async (u, a, c) => {
      const p = o(c),
        { body: b, headers: d, isMultipartFormData: y } = await s("product", p);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const f = {
          product: u,
          restPath: a,
          fetchRequestInit: { ...p, body: b, headers: [...d.entries()] },
          isMultipartFormData: y,
        },
        {
          body: h,
          headers: g,
          statusText: v,
          status: _,
          isAttachment: w,
        } = await r("fetchProduct", f),
        E = w ? (0, e.base64ToBlob)(h, g["content-type"]) : h;
      return new Response(E || null, { headers: g, status: _, statusText: v });
    };
    return {
      requestConfluence: (u, a) => l("confluence", u, a),
      requestJira: (u, a) => l("jira", u, a),
      requestBitbucket: (u, a) => l("bitbucket", u, a),
    };
  };
  return ((A.productFetchApi = i), A);
}
var Tt;
function ni() {
  if (Tt) return x;
  Tt = 1;
  var e;
  (Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.requestRemote = x.requestBitbucket = x.requestJira = x.requestConfluence = void 0));
  const n = R(),
    o = ti();
  return (
    (e = (0, o.productFetchApi)((0, n.getCallBridge)())),
    (x.requestConfluence = e.requestConfluence),
    (x.requestJira = e.requestJira),
    (x.requestBitbucket = e.requestBitbucket),
    (x.requestRemote = (0, o.remoteFetchApi)((0, n.getCallBridge)()).requestRemote),
    x
  );
}
var dr = {},
  Ee = {},
  Mt;
function oi() {
  if (Mt) return Ee;
  ((Mt = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.showFlag = void 0));
  const e = R(),
    n = P(),
    o = (0, e.getCallBridge)(),
    s = (t) => {
      var i;
      if (!t.id) throw new n.BridgeAPIError('"id" must be defined in flag options');
      const r = o("showFlag", { ...t, type: (i = t.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await r, o("closeFlag", { id: t.id })) };
    };
  return ((Ee.showFlag = s), Ee);
}
var At;
function ii() {
  return (
    At ||
      ((At = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var n = oi();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return n.showFlag;
          },
        });
      })(dr)),
    dr
  );
}
var fr = {},
  kt;
function si() {
  return (
    kt ||
      ((kt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Qn(), e));
      })(fr)),
    fr
  );
}
var hr = {},
  Re = {},
  Dt;
function ai() {
  if (Dt) return Re;
  ((Dt = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.realtime = void 0));
  const n = (0, R().getCallBridge)(),
    o = (r, l, u) => n("publishRealtimeChannel", { channelName: r, eventPayload: l, options: u }),
    s = (r, l, u) => n("subscribeRealtimeChannel", { channelName: r, onEvent: l, options: u }),
    t = (r, l, u) =>
      n("publishRealtimeChannel", { channelName: r, eventPayload: l, options: u, isGlobal: !0 }),
    i = (r, l, u) =>
      n("subscribeRealtimeChannel", { channelName: r, onEvent: l, options: u, isGlobal: !0 });
  return ((Re.realtime = { publish: o, subscribe: s, publishGlobal: t, subscribeGlobal: i }), Re);
}
var gr = {},
  Ut;
function li() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = void 0),
          (function (n) {
            ((n.Board = "board"), (n.Issue = "issue"), (n.Project = "project"));
          })(e.Jira || (e.Jira = {})),
          (function (n) {
            ((n.Content = "content"), (n.Space = "space"));
          })(e.Confluence || (e.Confluence = {})),
          (function (n) {
            ((n.Repository = "repository"), (n.PullRequest = "pullRequest"));
          })(e.Bitbucket || (e.Bitbucket = {})));
      })(gr)),
    gr
  );
}
var Lt;
function ui() {
  return (
    Lt ||
      ((Lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var n = ai();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return n.realtime;
          },
        });
        var o = li();
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
      })(hr)),
    hr
  );
}
var pr = {},
  Pe = {},
  vr = {},
  Nt;
function ci() {
  return (
    Nt ||
      ((Nt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const n = R(),
          o = P(),
          s = 30,
          t = (0, n.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const i = (l) => {
            switch (l.type) {
              case "forge":
                return { agentName: l.agentName, agentKey: l.agentKey, prompt: l.prompt };
              case "atlassian":
                return { agentName: l.agentName, prompt: l.prompt };
              default:
                return { prompt: l.prompt };
            }
          },
          r = async (l) => {
            if (l.type === "forge") {
              if (l.agentName.length > s) throw new Error("rovo agent name too long");
              if (l.agentKey.length > s) throw new Error("rovo agent key too long");
            }
            const u = i(l);
            if ((await t("openRovo", u)) === !1)
              throw new o.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = r;
      })(vr)),
    vr
  );
}
var Oe = {},
  Gt;
function di() {
  if (Gt) return Oe;
  ((Gt = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.isEnabled = void 0));
  const n = (0, R().getCallBridge)(),
    o = () => n("isRovoEnabled");
  return ((Oe.isEnabled = o), Oe);
}
var Vt;
function fi() {
  if (Vt) return Pe;
  ((Vt = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.rovo = void 0));
  const e = ci(),
    n = di();
  return ((Pe.rovo = { open: e.open, isEnabled: n.isEnabled }), Pe);
}
var Wt;
function hi() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(fi(), e));
      })(pr)),
    pr
  );
}
var S = {},
  zt;
function gi() {
  if (zt) return S;
  ((zt = 1),
    Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.createTranslationFunction = S.getTranslations = S.resetTranslationsCache = void 0));
  const e = Jn(),
    n = Ke(),
    o = {
      getI18nInfoConfig: async () => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!l.ok) throw new Error("Failed to get i18n info config: " + l.statusText);
        return (await l.json()).config;
      },
      getTranslationResource: async (l) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${l}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${l}`);
        return u.json();
      },
    },
    s = new e.TranslationsGetter(o),
    t = () => {
      s.reset();
    };
  S.resetTranslationsCache = t;
  const i = async (l = null, u = { fallback: !0 }) => {
    let a = l;
    return (a || (a = (await n.view.getContext()).locale), await s.getTranslations(a, u));
  };
  S.getTranslations = i;
  const r = async (l = null) => {
    let u = l;
    u || (u = (await n.view.getContext()).locale);
    const a = new e.Translator(u, s);
    return (
      await a.init(),
      (c, p) => {
        var b, d;
        return (d = (b = a.translate(c)) !== null && b !== void 0 ? b : p) !== null && d !== void 0
          ? d
          : c;
      }
    );
  };
  return ((S.createTranslationFunction = r), S);
}
var yr = {},
  je = {},
  Ht;
function pi() {
  if (Ht) return je;
  ((Ht = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.permissions = void 0));
  const n = (0, R().getCallBridge)(),
    o = async (u) => n("__permission__egressGet", u),
    s = async (u) => n("__permission__egressSet", u),
    t = async (u) => n("__permission__egressDeleteDomain", u),
    i = async (u) => n("__permission__egressDeleteGroup", u),
    r = async (u) => n("__permission__remoteGet", u),
    l = async (u) => n("__permission__remoteSet", u);
  return (
    (je.permissions = {
      egress: { get: o, set: s, deleteDomain: t, deleteGroup: i },
      remote: { get: r, set: l },
    }),
    je
  );
}
var k = {},
  _r = {},
  mr = {},
  xe = {},
  Ce = {},
  Kt;
function Br() {
  if (Kt) return Ce;
  ((Kt = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.parseUrl = void 0));
  function e(n) {
    var o, s;
    const t =
        (s = (o = n.match(/^(.*?:)/)) === null || o === void 0 ? void 0 : o[0]) !== null &&
        s !== void 0
          ? s
          : "https:",
      i = n.replace(t, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      r = i.split("/")[0],
      l = i.slice(r.length) || "/";
    return { protocol: t, hostname: r, pathname: l };
  }
  return ((Ce.parseUrl = e), Ce);
}
var br = {},
  Jt;
function ro() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const n = Br();
        function o(r) {
          const u = r.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${u}$`);
        }
        e.globToRegex = o;
        const s = (r) => {
          if (r?.length === 0) return [];
          const l = /^(.*?:\/\/)/,
            u = new Set(),
            a = [];
          return (
            r.forEach((c) => {
              const p = l.test(c) ? c : `https://${c}`,
                b = (0, n.parseUrl)(p);
              b.hostname.startsWith("*")
                ? (u.add(b.hostname.substring(2)), a.push(o(b.hostname)))
                : u.add(b.hostname);
            }),
            [...u].sort().reduce((c, p) => (a.some((b) => b.test(p)) || c.push(p), c), [])
          );
        };
        ((e.sortAndGroupEgressPermissionsByDomain = s),
          (function (r) {
            ((r.FetchBackendSide = "FETCH_BACKEND_SIDE"),
              (r.FetchClientSide = "FETCH_CLIENT_SIDE"),
              (r.Fonts = "FONTS"),
              (r.Frames = "FRAMES"),
              (r.Images = "IMAGES"),
              (r.Media = "MEDIA"),
              (r.Navigation = "NAVIGATION"),
              (r.Scripts = "SCRIPTS"),
              (r.Styles = "STYLES"));
          })(e.EgressType || (e.EgressType = {})));
        var t;
        (function (r) {
          r.ANALYTICS = "ANALYTICS";
        })((t = e.EgressCategory || (e.EgressCategory = {})));
        const i = (r) => {
          const l = r.egress.filter((a) => {
              var c;
              if (
                ((c = a.category) === null || c === void 0 ? void 0 : c.toUpperCase()) ===
                t.ANALYTICS
              )
                if (r.installationConfig) {
                  const p = r.installationConfig.find(
                    (b) => b.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return p?.value !== !1;
                } else return r.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            u = new Map();
          for (const a of l)
            (u.has(a.type) || u.set(a.type, a.addresses),
              u.set(a.type, [...u.get(a.type), ...a.addresses]));
          return [...u.entries()].map(([a, c]) => ({ type: a, addresses: [...new Set(c)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(br)),
    br
  );
}
var Yt;
function vi() {
  if (Yt) return xe;
  ((Yt = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.EgressFilteringService = void 0));
  const e = Br(),
    n = ro();
  class o {
    constructor(t) {
      ((this.URLs = t.filter((i) => !i.startsWith("*")).map((i) => this.parseUrl(i))),
        (this.wildcardDomains = t
          .filter((i) => i !== "*")
          .map((i) => this.parseUrl(i))
          .filter((i) => decodeURIComponent(i.hostname).startsWith("*"))
          .map((i) => ({ ...i, regex: (0, n.globToRegex)(decodeURIComponent(i.hostname)) }))),
        (this.allowsEverything = t.includes("*")));
    }
    parseUrl(t) {
      return (0, e.parseUrl)(t);
    }
    containsWildCardEgress() {
      return this.allowsEverything;
    }
    isValidUrl(t) {
      if (this.allowsEverything) return !0;
      const i = this.parseUrl(t);
      return (
        this.allowedDomainExact(i, this.URLs) || this.allowedDomainPattern(i, this.wildcardDomains)
      );
    }
    isValidUrlCSP(t) {
      if (this.allowsEverything) return !0;
      const i = this.parseUrl(t);
      return (
        this.allowedDomainExactAndPath(i, this.URLs) ||
        this.allowedDomainPatternAndPath(i, this.wildcardDomains)
      );
    }
    allowedDomainExact(t, i) {
      return i.filter((r) => r.protocol === t.protocol).some((r) => r.hostname === t.hostname);
    }
    allowedDomainExactAndPath(t, i) {
      return i
        .filter((r) => this.protocolMatchesCSP(r.protocol, t.protocol))
        .filter((r) => r.hostname === t.hostname)
        .some((r) => this.pathMatches(r.pathname, t.pathname));
    }
    allowedDomainPattern(t, i) {
      return i.filter((r) => r.protocol === t.protocol).some((r) => r.regex.test(t.hostname));
    }
    allowedDomainPatternAndPath(t, i) {
      return i
        .filter((r) => this.protocolMatchesCSP(r.protocol, t.protocol))
        .filter((r) => r.regex.test(t.hostname))
        .some((r) => this.pathMatches(r.pathname, t.pathname));
    }
    protocolMatchesCSP(t, i) {
      return t === i || (t === "http:" && i === "https:") || (t === "ws:" && i === "wss:");
    }
    pathMatches(t, i) {
      return t === "/" ? !0 : t.endsWith("/") ? i.startsWith(t) : i === t;
    }
  }
  return ((xe.EgressFilteringService = o), xe);
}
var Qt;
function yi() {
  return (
    Qt ||
      ((Qt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = j;
        (n.__exportStar(vi(), e), n.__exportStar(Br(), e), n.__exportStar(ro(), e));
      })(mr)),
    mr
  );
}
var Xt;
function _i() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(yi(), e));
      })(_r)),
    _r
  );
}
var Zt;
function mi() {
  if (Zt) return k;
  ((Zt = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.checkPermissions = k.createPermissionUtils = void 0));
  const e = _i(),
    n = Ke();
  function o(y) {
    return typeof y == "string" ? y : "address" in y && y.address ? y.address : y.remote || "";
  }
  const s = ["fonts", "styles", "frames", "images", "media", "scripts"],
    t = ["backend", "client"];
  function i(y) {
    if (!y) return null;
    const { scopes: f, external: h = {} } = y,
      g = Array.isArray(f) ? f : Object.keys(f || {});
    return {
      hasScope: (v) => g.includes(v),
      canFetchFrom: (v, _) => {
        var w;
        const E = (w = h.fetch) === null || w === void 0 ? void 0 : w[v];
        if (!E?.length) return !1;
        const O = E.map(o).filter((B) => B.length > 0);
        if (O.length === 0) return !1;
        const C = new e.EgressFilteringService(O);
        return v === "client" ? C.isValidUrlCSP(_) : C.isValidUrl(_);
      },
      canLoadResource: (v, _) => {
        const w = h[v];
        if (!w?.length) return !1;
        const E = w.map(o).filter((Ye) => Ye.length > 0);
        return E.length === 0 ? !1 : new e.EgressFilteringService(E).isValidUrlCSP(_);
      },
      getScopes: () => g,
      getExternalPermissions: () => h,
      hasAnyPermissions: () => g.length > 0 || Object.keys(h).length > 0,
    };
  }
  k.createPermissionUtils = i;
  function r(y, f) {
    if (!y?.length) return;
    const h = y.filter((g) => !f.hasScope(g));
    return h.length > 0 ? h : void 0;
  }
  function l(y, f) {
    if (!y?.fetch) return;
    const h = {};
    return (
      t.forEach((g) => {
        var v;
        const _ = (v = y.fetch) === null || v === void 0 ? void 0 : v[g];
        if (_?.length) {
          const w = _.filter((E) => !f.canFetchFrom(g, E));
          w.length > 0 && (h[g] = w);
        }
      }),
      Object.keys(h).length > 0 ? h : void 0
    );
  }
  function u(y, f) {
    const h = {};
    return (
      s.forEach((g) => {
        const v = y?.[g];
        if (v?.length) {
          const _ = v.filter((w) => !f.canLoadResource(g, w));
          _.length > 0 && (h[g] = _);
        }
      }),
      Object.keys(h).length > 0 ? h : void 0
    );
  }
  function a(y, f) {
    if (!y) return;
    const h = l(y, f),
      g = u(y, f);
    if (!h && !g) return;
    const v = {};
    return (h && (v.fetch = h), g && Object.assign(v, g), v);
  }
  function c(y, f) {
    if (y !== void 0 && (typeof y != "object" || y === null || Array.isArray(y)))
      throw new TypeError(
        `${f} should be an object, not ${Array.isArray(y) ? "an array" : `a ${typeof y}`}`,
      );
  }
  function p(y, f) {
    if (y !== void 0 && !Array.isArray(y))
      throw new TypeError(`${f} should be an array, not a ${typeof y}`);
  }
  function b(y) {
    p(y.scopes, "scopes");
    const f = y.external;
    if (f !== void 0) {
      if ((c(f, "external"), f.fetch !== void 0)) {
        c(f.fetch, "external.fetch");
        for (const h of t) p(f.fetch[h], `external.fetch.${h}`);
      }
      for (const h of s) p(f[h], `external.${h}`);
    }
  }
  async function d(y, f) {
    var h;
    if (!y) return { granted: !1, missing: null };
    if ((b(y), !(!((h = y.scopes) === null || h === void 0) && h.length) && !y.external))
      return { granted: !0, missing: null };
    let g = f;
    g || (g = (await n.view.getContext()).permissions);
    const v = i(g);
    if (!v) return { granted: !1, missing: null };
    const _ = {};
    let w = !0;
    const E = r(y.scopes, v);
    E && ((_.scopes = E), (w = !1));
    const O = a(y.external, v);
    return (O && ((_.external = O), (w = !1)), { granted: w, missing: w ? null : _ });
  }
  return ((k.checkPermissions = d), k);
}
var $t;
function bi() {
  return (
    $t ||
      (($t = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = j;
        (n.__exportStar(pi(), e), n.__exportStar(mi(), e));
      })(yr)),
    yr
  );
}
var wr = {},
  Er = {},
  Rr = {},
  Be = {},
  Fe = {},
  en;
function to() {
  return (
    en ||
      ((en = 1),
      Object.defineProperty(Fe, "__esModule", { value: !0 }),
      (Fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Fe.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Fe
  );
}
var rn;
function Je() {
  if (rn) return Be;
  ((rn = 1),
    Object.defineProperty(Be, "__esModule", { value: !0 }),
    (Be.checkRestrictedEnvironment = void 0));
  const e = P(),
    n = Ke(),
    o = to(),
    s = async () => {
      const { environmentType: t } = await n.view.getContext();
      if (t === "PRODUCTION")
        throw new e.BridgeAPIError(o.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Be.checkRestrictedEnvironment = s), Be);
}
var tn;
function wi() {
  return (
    tn ||
      ((tn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const n = Ue(),
          o = P(),
          s = Je(),
          i = (0, R().getCallBridge)(),
          r = (c, p) => {
            const b = atob(c),
              d = new Array(b.length);
            for (let f = 0; f < b.length; f++) d[f] = b.charCodeAt(f);
            const y = new Uint8Array(d);
            return new Blob([y], { type: p || "application/octet-stream" });
          },
          l = async (c) => {
            const p = c.size,
              b = await c.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", b),
              y = new Uint8Array(d),
              f = btoa(String.fromCharCode(...y));
            return { length: p, checksum: f, checksumType: "SHA256" };
          },
          u = async ({ functionKey: c, objects: p }) => {
            if (!c || c.length === 0)
              throw new o.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(p) || p.length === 0)
              throw new o.BridgeAPIError("objects array is required and must not be empty");
            const b = p.map((v, _) => {
                if (v instanceof Blob) return v;
                if (!(v && typeof v == "object" && "data" in v && typeof v.data == "string"))
                  throw new o.BridgeAPIError(
                    `Invalid object type at index ${_}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return r(v.data, v.mimeType);
                } catch {
                  throw new o.BridgeAPIError(
                    `Invalid base64 data at index ${_}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(b.map((v) => l(v))),
              y = await (0, n.invoke)(c, { allObjectMetadata: d });
            if (!y || typeof y != "object")
              throw new o.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              h = new Map();
            return (
              b.forEach((v, _) => {
                const w = d[_];
                (f.set(w.checksum, v), h.set(w.checksum, _));
              }),
              Object.entries(y).map(([v, _]) => {
                const { key: w, checksum: E } = _,
                  O = f.get(E),
                  C = h.get(E);
                return C === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: w,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : O
                    ? {
                        promise: (async () => {
                          try {
                            const B = await fetch(v, {
                              method: "PUT",
                              body: O,
                              headers: {
                                "Content-Type": O.type || "application/octet-stream",
                                "Content-Length": O.size.toString(),
                              },
                            });
                            return {
                              success: B.ok,
                              key: w,
                              status: B.status,
                              error: B.ok ? void 0 : `Upload failed with status ${B.status}`,
                            };
                          } catch (B) {
                            return {
                              success: !1,
                              key: w,
                              status: 503,
                              error: B instanceof Error ? B.message : "Upload failed",
                            };
                          }
                        })(),
                        index: C,
                        objectType: O.type,
                        objectSize: O.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: w,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: C,
                      };
              })
            );
          };
        e.createUploadPromises = u;
        const a = async ({ functionKey: c, objects: p }) => {
          (await (0, s.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const b = await (0, e.createUploadPromises)({ functionKey: c, objects: p });
          return await Promise.all(b.map((y) => y.promise));
        };
        e.upload = a;
      })(Rr)),
    Rr
  );
}
var Se = {},
  nn;
function Ei() {
  if (nn) return Se;
  ((nn = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.deleteObjects = void 0));
  const e = Ue(),
    n = P(),
    o = Je(),
    t = (0, R().getCallBridge)(),
    i = async ({ functionKey: r, keys: l }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        t("trackObjectStoreAction", { action: "delete" }),
        !r || r.length === 0)
      )
        throw new n.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(l) || l.length === 0)
        throw new n.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        l.map(async (u) => {
          await (0, e.invoke)(r, { key: u });
        }),
      );
    };
  return ((Se.deleteObjects = i), Se);
}
var Ie = {},
  on;
function Ri() {
  if (on) return Ie;
  ((on = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.download = void 0));
  const e = Ue(),
    n = P(),
    o = Je(),
    t = (0, R().getCallBridge)(),
    i = async ({ functionKey: r, keys: l }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        t("trackObjectStoreAction", { action: "download" }),
        !r || r.length === 0)
      )
        throw new n.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(l) || l.length === 0)
        throw new n.BridgeAPIError("keys array is required and must not be empty");
      const u = await (0, e.invoke)(r, { keys: l });
      if (!u || typeof u != "object")
        throw new n.BridgeAPIError("Invalid response from functionKey");
      const a = Object.entries(u).map(async ([p, b]) => {
        try {
          const d = await fetch(p, { method: "GET" });
          if (!d.ok)
            return {
              success: !1,
              key: b,
              status: d.status,
              error: `Download failed with status ${d.status}`,
            };
          const y = await d.blob();
          return { success: !0, key: b, blob: y, status: d.status };
        } catch (d) {
          return {
            success: !1,
            key: b,
            status: 503,
            error: d instanceof Error ? d.message : "Download failed",
          };
        }
      });
      return await Promise.all(a);
    };
  return ((Ie.download = i), Ie);
}
var qe = {},
  sn;
function Pi() {
  if (sn) return qe;
  ((sn = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.getMetadata = void 0));
  const e = Ue(),
    n = P(),
    o = Je(),
    t = (0, R().getCallBridge)(),
    i = async ({ functionKey: r, keys: l }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        t("trackObjectStoreAction", { action: "getMetadata" }),
        !r || r.length === 0)
      )
        throw new n.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(l) || l.length === 0)
        throw new n.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        l.map(async (a) => {
          const c = await (0, e.invoke)(r, { key: a });
          return !c || typeof c != "object"
            ? { key: a, error: "Invalid response from functionKey" }
            : c;
        }),
      );
    };
  return ((qe.getMetadata = i), qe);
}
var an;
function Oi() {
  return (
    an ||
      ((an = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const n = wi();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return n.createUploadPromises;
          },
        });
        const o = Ei(),
          s = Ri(),
          t = Pi();
        e.objectStore = {
          upload: n.upload,
          download: s.download,
          getMetadata: t.getMetadata,
          delete: o.deleteObjects,
        };
      })(Er)),
    Er
  );
}
var ln;
function ji() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = j;
        (n.__exportStar(Oi(), e), n.__exportStar(to(), e));
      })(wr)),
    wr
  );
}
var Pr = {},
  Te = {},
  Me = {},
  un;
function xi() {
  if (un) return Me;
  ((un = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.Evaluator = void 0));
  class e {
    constructor(o) {
      this.results = o;
    }
    checkFlag(o, s) {
      if (!this.results || !this.results.feature_flags) return s;
      const t = this.results.feature_flags;
      let i = "";
      try {
        i = this.getHashedValue(o);
      } catch (l) {
        return (console.error("Unexpected error occurred while evaluating flag ", l), s);
      }
      if (!i) return s;
      const r = t[i];
      return r ? (r.disabled ? !1 : r.value) : s;
    }
    shutDown() {
      this.results = void 0;
    }
    getHashedValue(o) {
      if (typeof o != "string") return "";
      const s = o.trim();
      if (s.length === 0) return "";
      let t = 5381;
      for (let i = 0; i < s.length; i += 1) {
        const r = s.charCodeAt(i);
        ((t = (t << 5) + t + r), (t |= 0));
      }
      return (t >>> 0).toString();
    }
  }
  return ((Me.Evaluator = e), Me);
}
var Ae = {},
  Or = {},
  cn;
function no() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = void 0),
          (function (n) {
            n.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(Or)),
    Or
  );
}
var dn;
function Ci() {
  if (dn) return Ae;
  ((dn = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.trackFeatureFlagEvent = void 0));
  const e = R(),
    n = P(),
    o = We(),
    s = no(),
    t = 500,
    i = 1e3 * 25,
    r = (0, e.getCallBridge)(),
    l = (a) => {
      if (!a || !a.type || !a.properties)
        throw new n.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(a.type.toUpperCase() in s.FeatureFlagEventType))
        throw new n.BridgeAPIError("Event type is not supported");
      if (Object.values(a).some((c) => typeof c == "function"))
        throw new n.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (a) => (l(a), r("trackFeatureFlagEvent", a));
  return (
    (Ae.trackFeatureFlagEvent = (0, o.withRateLimiter)(
      u,
      t,
      i,
      `Feature flags calls are rate limited at ${t}req/${i / 1e3}s`,
    )),
    Ae
  );
}
var ke = {},
  fn;
function Bi() {
  if (fn) return ke;
  ((fn = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.initFeatureFlags = void 0));
  const e = R(),
    n = P(),
    o = We(),
    s = 500,
    t = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    r = (u) => {
      if (!u || !u.user || !u.config)
        throw new n.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(u).some((a) => typeof a == "function"))
        throw new n.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (u) => (r(u), i("initFeatureFlags", { user: u.user, config: u.config }));
  return (
    (ke.initFeatureFlags = (0, o.withRateLimiter)(
      l,
      s,
      t,
      `Feature flags initialisation calls are rate limited at ${s}req/${t / 1e3}s`,
    )),
    ke
  );
}
var hn;
function Fi() {
  if (hn) return Te;
  ((hn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.FeatureFlags = void 0));
  const e = xi(),
    n = Ci(),
    o = Bi(),
    s = no();
  class t {
    constructor() {
      ((this.initialized = !1), (this.eventProps = {}));
    }
    async initialize(r, l = { environment: "development" }) {
      if (this.isInitialized()) return;
      this.eventProps.environment = l.environment;
      const u = await (0, o.initFeatureFlags)({ user: r, config: l });
      ((this.initialized = !0), (this.evaluator = new e.Evaluator(u)));
    }
    checkFlag(r, l = !1) {
      if (!this.isInitialized() || !this.evaluator)
        throw (
          this.sendCheckFlagEvent(r, !1),
          new Error("FeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(r, !0), this.evaluator.checkFlag(r, l));
    }
    shutdown() {
      this.isInitialized() && ((this.initialized = !1), this.evaluator.shutDown());
    }
    isInitialized() {
      return this.initialized;
    }
    sendCheckFlagEvent(r, l) {
      const u = {
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: r,
          success: l,
        },
      };
      (0, n.trackFeatureFlagEvent)(u);
    }
  }
  return ((Te.FeatureFlags = t), Te);
}
var gn;
function Si() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FeatureFlags = void 0));
        var n = Fi();
        Object.defineProperty(e, "FeatureFlags", {
          enumerable: !0,
          get: function () {
            return n.FeatureFlags;
          },
        });
      })(Pr)),
    Pr
  );
}
var pn;
function Ii() {
  return (
    pn ||
      ((pn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const n = j;
        var o = vo();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          n.__exportStar(Ue(), e),
          n.__exportStar(bo(), e),
          n.__exportStar(Ke(), e),
          n.__exportStar($o(), e),
          n.__exportStar(ri(), e),
          n.__exportStar(ni(), e),
          n.__exportStar(ii(), e),
          n.__exportStar(si(), e),
          n.__exportStar(ui(), e),
          n.__exportStar(hi(), e),
          (e.i18n = n.__importStar(gi())),
          n.__exportStar(bi(), e),
          n.__exportStar(ji(), e),
          n.__exportStar(Si(), e));
      })(Xe)),
    Xe
  );
}
var De = Ii();
const qi = () => {
    const [e, n] = I.useState(null),
      [o, s] = I.useState(null),
      [t, i] = I.useState(!1),
      [r, l] = I.useState(null),
      [u, a] = I.useState(null),
      [c, p] = I.useState(null),
      [b, d] = I.useState(null),
      [y, f] = I.useState({ userName: "", product: "" }),
      h = async (w) => {
        (i(!0), l(null));
        try {
          const E = await De.invoke("fetch", { action: w });
          n(E);
        } catch (E) {
          l(E instanceof Error ? E.message : "Unknown error occurred");
        } finally {
          i(!1);
        }
      },
      g = async () => {
        if (!y.userName.trim() || !y.product.trim()) {
          a("Please fill in all fields");
          return;
        }
        (i(!0), a(null));
        try {
          (await De.invoke("insertUserOrOrder", y), a(null), f({ userName: "", product: "" }));
        } catch (w) {
          a(w instanceof Error ? w.message : "Failed to insert user/order");
        } finally {
          i(!1);
        }
      },
      v = async () => {
        (i(!0), p(null));
        try {
          (await De.invoke("clearCache"), p(null));
        } catch (w) {
          p(w instanceof Error ? w.message : "Failed to clear cache");
        } finally {
          i(!1);
        }
      },
      _ = async () => {
        (i(!0), d(null));
        try {
          const w = await De.invoke("runPerformanceAnalyze");
          (s(w?.DML), d(null));
        } catch (w) {
          d(w instanceof Error ? w.message : "Failed to run performance analysis");
        } finally {
          i(!1);
        }
      };
    return m.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        m.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        m.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            m.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            m.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Timeout:" }),
                    " Tests query timeout behavior with 10-second sleep",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Out of Memory:" }),
                    " Tests memory limit with large data operations",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    m.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                m.jsxs("li", {
                  children: [
                    m.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            m.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            m.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            m.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "10px",
                marginBottom: "20px",
              },
              children: [
                m.jsx("button", {
                  onClick: () => h("slow"),
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "🚫 Non-Cached",
                }),
                m.jsx("button", {
                  onClick: () => h("cacheable"),
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#36B37E",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "✅ Cached",
                }),
                m.jsx("button", {
                  onClick: () => h("timeout"),
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "⏱️ Timeout",
                }),
                m.jsx("button", {
                  onClick: () => h("outOfMemory"),
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#C43E37",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "💥 Out of Memory",
                }),
              ],
            }),
            r &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", r],
              }),
            e &&
              !r &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  m.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  m.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  m.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: m.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        m.jsx("thead", {
                          children: m.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              m.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product ID",
                              }),
                            ],
                          }),
                        }),
                        m.jsx("tbody", {
                          children: e.rows.map((w, E) =>
                            m.jsxs(
                              "tr",
                              {
                                children: [
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userId,
                                  }),
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userName,
                                  }),
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.product || "N/A",
                                  }),
                                  m.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.productId || "N/A",
                                  }),
                                ],
                              },
                              E,
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
        m.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            m.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            m.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            m.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    m.jsx("input", {
                      type: "number",
                      value: y.userId || "",
                      onChange: (w) =>
                        f({ ...y, userId: w.target.value ? parseInt(w.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    m.jsx("input", {
                      type: "text",
                      value: y.userName,
                      onChange: (w) => f({ ...y, userName: w.target.value }),
                      placeholder: "Enter user name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    m.jsx("input", {
                      type: "number",
                      value: y.productId || "",
                      onChange: (w) =>
                        f({ ...y, productId: w.target.value ? parseInt(w.target.value) : void 0 }),
                      placeholder: "Leave empty for auto-generated",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
                m.jsxs("div", {
                  children: [
                    m.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    m.jsx("input", {
                      type: "text",
                      value: y.product,
                      onChange: (w) => f({ ...y, product: w.target.value }),
                      placeholder: "Enter product name",
                      style: {
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "14px",
                      },
                    }),
                  ],
                }),
              ],
            }),
            m.jsx("button", {
              onClick: g,
              disabled: t,
              style: {
                padding: "12px 24px",
                backgroundColor: "#0052CC",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: t ? "not-allowed" : "pointer",
                opacity: t ? 0.6 : 1,
                fontSize: "16px",
                fontWeight: "bold",
              },
              children: t ? "Processing..." : "➕ Add User & Order",
            }),
            u &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", u],
              }),
          ],
        }),
        m.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            m.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            m.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            m.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                m.jsx("button", {
                  onClick: v,
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "🗑️ Clear Cache",
                }),
                m.jsx("button", {
                  onClick: _,
                  disabled: t,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: t ? "not-allowed" : "pointer",
                    opacity: t ? 0.6 : 1,
                  },
                  children: t ? "Loading..." : "📊 Run Performance Analysis",
                }),
              ],
            }),
            c &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", c],
              }),
            b &&
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [m.jsx("strong", { children: "Error:" }), " ", b],
              }),
          ],
        }),
        o &&
          !b &&
          m.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              m.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              m.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  m.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      m.jsxs("div", {
                        children: [m.jsx("strong", { children: "Window:" }), " ", o.window],
                      }),
                      m.jsxs("div", {
                        children: [m.jsx("strong", { children: "Top Queries:" }), " ", o.top],
                      }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          o.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (o.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(o.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  o.rows.length > 0
                    ? m.jsxs("div", {
                        children: [
                          m.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", o.rows.length, ")"],
                          }),
                          o.rows.map((w, E) =>
                            m.jsxs(
                              "div",
                              {
                                style: {
                                  marginBottom: "20px",
                                  padding: "15px",
                                  backgroundColor: "#FFF2CC",
                                  border: "1px solid #FFD700",
                                  borderRadius: "4px",
                                },
                                children: [
                                  m.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          w.rank,
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Type:" }),
                                          " ",
                                          w.stmtType,
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          w.execCount,
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          w.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          w.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          w.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          w.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        children: [
                                          m.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          w.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  m.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      m.jsx("strong", { children: "SQL Query:" }),
                                      m.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "12px",
                                          overflow: "auto",
                                          marginTop: "5px",
                                        },
                                        children: w.digestText,
                                      }),
                                    ],
                                  }),
                                  m.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      m.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      m.jsx("pre", {
                                        style: {
                                          backgroundColor: "#F8F9FA",
                                          padding: "10px",
                                          borderRadius: "4px",
                                          fontSize: "11px",
                                          overflow: "auto",
                                          marginTop: "10px",
                                          whiteSpace: "pre-wrap",
                                        },
                                        children: w.plan,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              E,
                            ),
                          ),
                        ],
                      })
                    : m.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          m.jsx("strong", { children: "✅ No slow queries found!" }),
                          m.jsx("br", {}),
                          "All queries are performing within the specified thresholds.",
                        ],
                      }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Ti = document.getElementById("root"),
  Mi = oo.createRoot(Ti),
  vn = () => {
    Mi.render(m.jsx(co.StrictMode, { children: m.jsx(qi, {}) }));
  };
De.view.theme
  .enable()
  .then(() => {
    vn();
  })
  .catch((e) => {
    (console.error(e.message), vn());
  });
