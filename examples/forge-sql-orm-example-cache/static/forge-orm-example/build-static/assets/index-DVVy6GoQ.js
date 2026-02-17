const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-BCqYYRNo.js", "./lodash-vendor-Dv-o4pqD.js"]),
) => i.map((i) => d[i]);
import { r as An, c as bi } from "./react-dom-vendor-BXC0oJZi.js";
import { g as wi, a as Ei, r as Ri } from "./lodash-vendor-Dv-o4pqD.js";
import { r as A } from "./client-core-vendor-CP5_oPjo.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) l(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const t of i.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && l(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
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
  function l(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = s(n);
    fetch(n.href, i);
  }
})();
var nt = { exports: {} },
  W = {};
var kt;
function Oi() {
  if (kt) return W;
  kt = 1;
  var e = An(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, u, o) {
    var a,
      d = {},
      _ = null,
      f = null;
    (o !== void 0 && (_ = "" + o),
      u.key !== void 0 && (_ = "" + u.key),
      u.ref !== void 0 && (f = u.ref));
    for (a in u) l.call(u, a) && !i.hasOwnProperty(a) && (d[a] = u[a]);
    if (c && c.defaultProps) for (a in ((u = c.defaultProps), u)) d[a] === void 0 && (d[a] = u[a]);
    return { $$typeof: r, type: c, key: _, ref: f, props: d, _owner: n.current };
  }
  return ((W.Fragment = s), (W.jsx = t), (W.jsxs = t), W);
}
var Ut;
function Pi() {
  return (Ut || ((Ut = 1), (nt.exports = Oi())), nt.exports);
}
var y = Pi(),
  I = An();
const Si = wi(I);
var it = {},
  Bt = function (e, r) {
    return (
      (Bt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, l) {
            s.__proto__ = l;
          }) ||
        function (s, l) {
          for (var n in l) Object.prototype.hasOwnProperty.call(l, n) && (s[n] = l[n]);
        }),
      Bt(e, r)
    );
  };
function Bn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Bt(e, r);
  function s() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
}
var Ye = function () {
  return (
    (Ye =
      Object.assign ||
      function (r) {
        for (var s, l = 1, n = arguments.length; l < n; l++) {
          s = arguments[l];
          for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i]);
        }
        return r;
      }),
    Ye.apply(this, arguments)
  );
};
function Mn(e, r) {
  var s = {};
  for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && r.indexOf(l) < 0 && (s[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, l = Object.getOwnPropertySymbols(e); n < l.length; n++)
      r.indexOf(l[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, l[n]) &&
        (s[l[n]] = e[l[n]]);
  return s;
}
function Dn(e, r, s, l) {
  var n = arguments.length,
    i = n < 3 ? r : l === null ? (l = Object.getOwnPropertyDescriptor(r, s)) : l,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, s, l);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (i = (n < 3 ? t(i) : n > 3 ? t(r, s, i) : t(r, s)) || i);
  return (n > 3 && i && Object.defineProperty(r, s, i), i);
}
function qn(e, r) {
  return function (s, l) {
    r(s, l, e);
  };
}
function Tn(e, r, s, l, n, i) {
  function t(v) {
    if (v !== void 0 && typeof v != "function") throw new TypeError("Function expected");
    return v;
  }
  for (
    var c = l.kind,
      u = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      o = !r && e ? (l.static ? e : e.prototype) : null,
      a = r || (o ? Object.getOwnPropertyDescriptor(o, l.name) : {}),
      d,
      _ = !1,
      f = s.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var h in l) p[h] = h === "access" ? {} : l[h];
    for (var h in l.access) p.access[h] = l.access[h];
    p.addInitializer = function (v) {
      if (_) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(v || null));
    };
    var g = (0, s[f])(c === "accessor" ? { get: a.get, set: a.set } : a[u], p);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = t(g.get)) && (a.get = d),
        (d = t(g.set)) && (a.set = d),
        (d = t(g.init)) && n.unshift(d));
    } else (d = t(g)) && (c === "field" ? n.unshift(d) : (a[u] = d));
  }
  (o && Object.defineProperty(o, l.name, a), (_ = !0));
}
function kn(e, r, s) {
  for (var l = arguments.length > 2, n = 0; n < r.length; n++)
    s = l ? r[n].call(e, s) : r[n].call(e);
  return l ? s : void 0;
}
function Un(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Ln(e, r, s) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", r) : r })
  );
}
function Nn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Gn(e, r, s, l) {
  function n(i) {
    return i instanceof s
      ? i
      : new s(function (t) {
          t(i);
        });
  }
  return new (s || (s = Promise))(function (i, t) {
    function c(a) {
      try {
        o(l.next(a));
      } catch (d) {
        t(d);
      }
    }
    function u(a) {
      try {
        o(l.throw(a));
      } catch (d) {
        t(d);
      }
    }
    function o(a) {
      a.done ? i(a.value) : n(a.value).then(c, u);
    }
    o((l = l.apply(e, r || [])).next());
  });
}
function Vn(e, r) {
  var s = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    l,
    n,
    i,
    t = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (t.next = c(0)),
    (t.throw = c(1)),
    (t.return = c(2)),
    typeof Symbol == "function" &&
      (t[Symbol.iterator] = function () {
        return this;
      }),
    t
  );
  function c(o) {
    return function (a) {
      return u([o, a]);
    };
  }
  function u(o) {
    if (l) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), o[0] && (s = 0)), s; )
      try {
        if (
          ((l = 1),
          n &&
            (i =
              o[0] & 2 ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
            !(i = i.call(n, o[1])).done)
        )
          return i;
        switch (((n = 0), i && (o = [o[0] & 2, i.value]), o[0])) {
          case 0:
          case 1:
            i = o;
            break;
          case 4:
            return (s.label++, { value: o[1], done: !1 });
          case 5:
            (s.label++, (n = o[1]), (o = [0]));
            continue;
          case 7:
            ((o = s.ops.pop()), s.trys.pop());
            continue;
          default:
            if (
              ((i = s.trys), !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2))
            ) {
              s = 0;
              continue;
            }
            if (o[0] === 3 && (!i || (o[1] > i[0] && o[1] < i[3]))) {
              s.label = o[1];
              break;
            }
            if (o[0] === 6 && s.label < i[1]) {
              ((s.label = i[1]), (i = o));
              break;
            }
            if (i && s.label < i[2]) {
              ((s.label = i[2]), s.ops.push(o));
              break;
            }
            (i[2] && s.ops.pop(), s.trys.pop());
            continue;
        }
        o = r.call(e, s);
      } catch (a) {
        ((o = [6, a]), (n = 0));
      } finally {
        l = i = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
var Xe = Object.create
  ? function (e, r, s, l) {
      l === void 0 && (l = s);
      var n = Object.getOwnPropertyDescriptor(r, s);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[s];
          },
        }),
        Object.defineProperty(e, l, n));
    }
  : function (e, r, s, l) {
      (l === void 0 && (l = s), (e[l] = r[s]));
    };
function zn(e, r) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && Xe(r, e, s);
}
function Qe(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    s = r && e[r],
    l = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && l >= e.length && (e = void 0), { value: e && e[l++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qt(e, r) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var l = s.call(e),
    n,
    i = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = l.next()).done; ) i.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (s = l.return) && s.call(l);
    } finally {
      if (t) throw t.error;
    }
  }
  return i;
}
function Wn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(qt(arguments[r]));
  return e;
}
function Hn() {
  for (var e = 0, r = 0, s = arguments.length; r < s; r++) e += arguments[r].length;
  for (var l = Array(e), n = 0, r = 0; r < s; r++)
    for (var i = arguments[r], t = 0, c = i.length; t < c; t++, n++) l[n] = i[t];
  return l;
}
function Kn(e, r, s) {
  if (s || arguments.length === 2)
    for (var l = 0, n = r.length, i; l < n; l++)
      (i || !(l in r)) && (i || (i = Array.prototype.slice.call(r, 0, l)), (i[l] = r[l]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function V(e) {
  return this instanceof V ? ((this.v = e), this) : new V(e);
}
function Jn(e, r, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var l = s.apply(e, r || []),
    n,
    i = [];
  return (
    (n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    c("next"),
    c("throw"),
    c("return", t),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function t(f) {
    return function (p) {
      return Promise.resolve(p).then(f, d);
    };
  }
  function c(f, p) {
    l[f] &&
      ((n[f] = function (h) {
        return new Promise(function (g, v) {
          i.push([f, h, g, v]) > 1 || u(f, h);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function u(f, p) {
    try {
      o(l[f](p));
    } catch (h) {
      _(i[0][3], h);
    }
  }
  function o(f) {
    f.value instanceof V ? Promise.resolve(f.value.v).then(a, d) : _(i[0][2], f);
  }
  function a(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function _(f, p) {
    (f(p), i.shift(), i.length && u(i[0][0], i[0][1]));
  }
}
function Yn(e) {
  var r, s;
  return (
    (r = {}),
    l("next"),
    l("throw", function (n) {
      throw n;
    }),
    l("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function l(n, i) {
    r[n] = e[n]
      ? function (t) {
          return (s = !s) ? { value: V(e[n](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Qn(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    s;
  return r
    ? r.call(e)
    : ((e = typeof Qe == "function" ? Qe(e) : e[Symbol.iterator]()),
      (s = {}),
      l("next"),
      l("throw"),
      l("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function l(i) {
    s[i] =
      e[i] &&
      function (t) {
        return new Promise(function (c, u) {
          ((t = e[i](t)), n(c, u, t.done, t.value));
        });
      };
  }
  function n(i, t, c, u) {
    Promise.resolve(u).then(function (o) {
      i({ value: o, done: c });
    }, t);
  }
}
function Xn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var ji = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Mt = function (e) {
    return (
      (Mt =
        Object.getOwnPropertyNames ||
        function (r) {
          var s = [];
          for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (s[s.length] = l);
          return s;
        }),
      Mt(e)
    );
  };
function Zn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var s = Mt(e), l = 0; l < s.length; l++) s[l] !== "default" && Xe(r, e, s[l]);
  return (ji(r, e), r);
}
function $n(e) {
  return e && e.__esModule ? e : { default: e };
}
function ei(e, r, s, l) {
  if (s === "a" && !l) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !l : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? l : s === "a" ? l.call(e) : l ? l.value : r.get(e);
}
function ti(e, r, s, l, n) {
  if (l === "m") throw new TypeError("Private method is not writable");
  if (l === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (l === "a" ? n.call(e, s) : n ? (n.value = s) : r.set(e, s), s);
}
function ri(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function ni(e, r, s) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var l, n;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      l = r[Symbol.asyncDispose];
    }
    if (l === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((l = r[Symbol.dispose]), s && (n = l));
    }
    if (typeof l != "function") throw new TypeError("Object not disposable.");
    (n &&
      (l = function () {
        try {
          n.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: r, dispose: l, async: s }));
  } else s && e.stack.push({ async: !0 });
  return r;
}
var xi =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, s) {
        var l = new Error(s);
        return ((l.name = "SuppressedError"), (l.error = e), (l.suppressed = r), l);
      };
function ii(e) {
  function r(i) {
    ((e.error = e.hasError ? new xi(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var s,
    l = 0;
  function n() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && l === 1) return ((l = 0), e.stack.push(s), Promise.resolve().then(n));
        if (s.dispose) {
          var i = s.dispose.call(s.value);
          if (s.async)
            return (
              (l |= 2),
              Promise.resolve(i).then(n, function (t) {
                return (r(t), n());
              })
            );
        } else l |= 1;
      } catch (t) {
        r(t);
      }
    if (l === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function oi(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, l, n, i, t) {
        return l
          ? r
            ? ".jsx"
            : ".js"
          : n && (!i || !t)
            ? s
            : n + i + "." + t.toLowerCase() + "js";
      })
    : e;
}
const Ci = {
    __extends: Bn,
    __assign: Ye,
    __rest: Mn,
    __decorate: Dn,
    __param: qn,
    __esDecorate: Tn,
    __runInitializers: kn,
    __propKey: Un,
    __setFunctionName: Ln,
    __metadata: Nn,
    __awaiter: Gn,
    __generator: Vn,
    __createBinding: Xe,
    __exportStar: zn,
    __values: Qe,
    __read: qt,
    __spread: Wn,
    __spreadArrays: Hn,
    __spreadArray: Kn,
    __await: V,
    __asyncGenerator: Jn,
    __asyncDelegator: Yn,
    __asyncValues: Qn,
    __makeTemplateObject: Xn,
    __importStar: Zn,
    __importDefault: $n,
    __classPrivateFieldGet: ei,
    __classPrivateFieldSet: ti,
    __classPrivateFieldIn: ri,
    __addDisposableResource: ni,
    __disposeResources: ii,
    __rewriteRelativeImportExtension: oi,
  },
  Ii = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: ni,
        get __assign() {
          return Ye;
        },
        __asyncDelegator: Yn,
        __asyncGenerator: Jn,
        __asyncValues: Qn,
        __await: V,
        __awaiter: Gn,
        __classPrivateFieldGet: ei,
        __classPrivateFieldIn: ri,
        __classPrivateFieldSet: ti,
        __createBinding: Xe,
        __decorate: Dn,
        __disposeResources: ii,
        __esDecorate: Tn,
        __exportStar: zn,
        __extends: Bn,
        __generator: Vn,
        __importDefault: $n,
        __importStar: Zn,
        __makeTemplateObject: Xn,
        __metadata: Nn,
        __param: qn,
        __propKey: Un,
        __read: qt,
        __rest: Mn,
        __rewriteRelativeImportExtension: oi,
        __runInitializers: kn,
        __setFunctionName: Ln,
        __spread: Wn,
        __spreadArray: Kn,
        __spreadArrays: Hn,
        __values: Qe,
        default: Ci,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P = Ei(Ii);
var H = {},
  Lt;
function Fi() {
  return (
    Lt ||
      ((Lt = 1),
      Object.defineProperty(H, "__esModule", { value: !0 }),
      (H.NavigationTarget = void 0),
      (H.NavigationTarget = {
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
    H
  );
}
var ot = {},
  st = {},
  K = {},
  J = {},
  Nt;
function O() {
  if (Nt) return J;
  ((Nt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.BridgeAPIError = void 0));
  class e extends Error {}
  return ((J.BridgeAPIError = e), J);
}
var Gt;
function R() {
  if (Gt) return K;
  ((Gt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.getCallBridge = void 0));
  const e = O();
  function r(l) {
    return !!l?.callBridge;
  }
  const s = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((K.getCallBridge = s), K);
}
var Y = {},
  Vt;
function Ze() {
  if (Vt) return Y;
  ((Vt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.withRateLimiter = void 0));
  const e = O(),
    r = (s, l, n, i) => {
      let t = Date.now(),
        c = 0;
      return async (...u) => {
        const o = Date.now();
        if ((o - t > n && ((t = o), (c = 0)), c >= l))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), s(...u));
      };
    };
  return ((Y.withRateLimiter = r), Y);
}
var zt;
function Ai() {
  return (
    zt ||
      ((zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = R(),
          s = O(),
          l = Ze(),
          n = (0, r.getCallBridge)(),
          i = (u) => {
            if (u && Object.values(u).some((o) => typeof o == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (u, o) => {
            if (typeof u != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (i(o), n("invoke", { functionKey: u, payload: o }));
          };
        e.invoke = (0, l.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(st)),
    st
  );
}
var Wt;
function He() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Ai(), e));
      })(ot)),
    ot
  );
}
var at = {},
  Q = {},
  lt = {},
  Ht;
function si() {
  return (
    Ht ||
      ((Ht = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = R(),
          s = O(),
          l = Ze(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          u = (d) => {
            if (d && Object.values(d).some((_) => typeof _ == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (d) => async (_) => {
            u(_);
            const f = { ..._, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await c("invoke", f),
              { success: h, payload: g, error: v } = p ?? {},
              m = { ...(h ? g : v) };
            if (m && m.headers)
              for (const b in m.headers)
                Array.isArray(m.headers[b]) && (m.headers[b] = m.headers[b].join(","));
            return m;
          },
          a = (d) => {
            const _ = o(d);
            return (0, l.withRateLimiter)(
              _,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = a;
      })(lt)),
    lt
  );
}
var Kt;
function Bi() {
  if (Kt) return Q;
  ((Kt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = si(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((Q.invokeRemote = r), Q);
}
var X = {},
  Jt;
function Mi() {
  if (Jt) return X;
  ((Jt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.invokeService = void 0));
  const e = si(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((X.invokeService = r), X);
}
var Yt;
function Di() {
  return (
    Yt ||
      ((Yt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Bi(), e), r.__exportStar(Mi(), e));
      })(at)),
    at
  );
}
var ut = {},
  Z = {},
  $ = {},
  Qt;
function qi() {
  if (Qt) return $;
  ((Qt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.submit = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = async (n) => {
      if ((await s("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return (($.submit = l), $);
}
var ee = {},
  Xt;
function Ti() {
  if (Xt) return ee;
  ((Xt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.close = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = async (n) => {
      try {
        if ((await s("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((ee.close = l), ee);
}
var te = {},
  Zt;
function ki() {
  if (Zt) return te;
  ((Zt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.open = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = async () => {
      try {
        if ((await s("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((te.open = l), te);
}
var re = {},
  $t;
function Ui() {
  if ($t) return re;
  (($t = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.refresh = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = async (n) => {
      if ((await s("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((re.refresh = l), re);
}
var ne = {},
  er;
function Li() {
  if (er) return ne;
  ((er = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.createHistory = void 0));
  const r = (0, R().getCallBridge)(),
    s = async () => {
      const l = await r("createHistory");
      return (
        l.listen((n) => {
          l.location = n;
        }),
        l
      );
    };
  return ((ne.createHistory = s), ne);
}
var ie = {},
  ct = {},
  x = {},
  tr;
function ai() {
  return (
    tr ||
      ((tr = 1),
      Object.defineProperty(x, "__esModule", { value: !0 }),
      (x.FORGE_SUPPORTED_LOCALE_CODES = x.I18N_BUNDLE_FOLDER_NAME = x.I18N_INFO_FILE_NAME = void 0),
      (x.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (x.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (x.FORGE_SUPPORTED_LOCALE_CODES = [
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
    x
  );
}
var M = {},
  rr;
function Ni() {
  if (rr) return M;
  ((rr = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.TranslationsGetter = M.TranslationGetterError = void 0));
  const e = (l, n) => {
    l.includes(n) || l.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  M.TranslationGetterError = r;
  class s {
    resourcesAccessor;
    i18nInfoConfig = null;
    translationResources = new Map();
    constructor(n) {
      this.resourcesAccessor = n;
    }
    async getTranslations(n, i = { fallback: !0 }) {
      const t = await this.getI18nInfoConfig(),
        { fallback: c } = i;
      if (!c) {
        let u;
        return (
          t.locales.includes(n) && (u = await this.getTranslationResource(n)),
          { translations: u ?? null, locale: n }
        );
      }
      for (const u of this.getLocaleLookupOrder(n, t)) {
        const o = await this.getTranslationResource(u);
        if (o) return { translations: o, locale: u };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const i = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, i);
      return await Promise.all(
        t.map(async (c) => {
          const u = await this.getTranslationResource(c);
          return { locale: c, translations: u };
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
      const { locales: t, fallback: c } = i,
        u = [n],
        o = c[n];
      return (
        o && Array.isArray(o) && o.length > 0 && u.push(...o),
        e(u, i.fallback.default),
        u.filter((a) => t.includes(a))
      );
    }
  }
  return ((M.TranslationsGetter = s), M);
}
var oe = {},
  dt = {},
  nr;
function li() {
  return (
    nr ||
      ((nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = P.__importDefault(Ri()),
          l = (i, t, c) => {
            const u = i[c];
            return u ? (0, e.getTranslationValueFromContent)(u, t) : null;
          };
        e.getTranslationValue = l;
        const n = (i, t) => {
          let c = i[t];
          if (!c) {
            const u = t.split(".");
            u.length > 1 && (c = (0, s.default)(i, u, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(dt)),
    dt
  );
}
var ir;
function Gi() {
  if (ir) return oe;
  ((ir = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.Translator = void 0));
  const e = li();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(l, n) {
      ((this.locale = l), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(l) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(l);
      if (n === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(i, l);
          if (t !== null) {
            n = t;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(l, n));
      }
      return n;
    }
  }
  return ((oe.Translator = r), oe);
}
var se = {},
  or;
function Vi() {
  if (or) return se;
  ((or = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.ensureLocale = void 0));
  const e = ai(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    l = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, t) => {
        const [c] = t.split("-");
        return (i[c] || (i[c] = t), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const t = i.replace("_", "-");
      return r.has(t) ? t : (l[t] ?? s[t] ?? null);
    };
  return ((se.ensureLocale = n), se);
}
var ft = {},
  sr;
function zi() {
  return (
    sr ||
      ((sr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (o) => typeof o == "object" && o !== null && !Array.isArray(o),
          s = (o) => typeof o?.i18n == "string",
          l = (o) => o.startsWith("connect-"),
          n = (o) => o.startsWith("core:"),
          i = (o) => {
            const a = new Set(),
              d = (_, f) =>
                !r(_) || a.has(_)
                  ? []
                  : (a.add(_),
                    Object.entries(_).flatMap(([p, h]) => {
                      const g = [...f, p];
                      return s(h)
                        ? [{ propertyPath: g, key: h.i18n }]
                        : Array.isArray(h)
                          ? h.flatMap((v) => d(v, g))
                          : d(h, g);
                    }));
            return d(o, []);
          },
          t = (o) =>
            Object.entries(o).flatMap(([a, d]) =>
              !l(a) && !n(a) && d && Array.isArray(d) && d.length > 0 ? d.map((_) => [_, a]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (o) => {
          const a = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const _ = i(d[0]);
            for (const { key: f } of _) a.add(f);
          }
          return a.size > 0 ? Array.from(a) : [];
        };
        e.extractI18nKeysFromModules = c;
        const u = (o) => {
          const a = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const _ = i(d[0]);
            for (const f of _) a.push({ moduleName: d[1], ...f });
          }
          return a;
        };
        e.extractI18nPropertiesFromModules = u;
      })(ft)),
    ft
  );
}
var ht = {},
  ar;
function Wi() {
  return (ar || ((ar = 1), Object.defineProperty(ht, "__esModule", { value: !0 })), ht);
}
var lr;
function ui() {
  return (
    lr ||
      ((lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = P;
        (r.__exportStar(ai(), e),
          r.__exportStar(Ni(), e),
          r.__exportStar(Gi(), e),
          r.__exportStar(Vi(), e));
        var s = li();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var l = zi();
        (Object.defineProperty(e, "extractI18nKeysFromModules", {
          enumerable: !0,
          get: function () {
            return l.extractI18nKeysFromModules;
          },
        }),
          Object.defineProperty(e, "extractI18nPropertiesFromModules", {
            enumerable: !0,
            get: function () {
              return l.extractI18nPropertiesFromModules;
            },
          }),
          Object.defineProperty(e, "getI18nSupportedModuleEntries", {
            enumerable: !0,
            get: function () {
              return l.getI18nSupportedModuleEntries;
            },
          }),
          r.__exportStar(Wi(), e));
      })(ct)),
    ct
  );
}
var ur;
function Hi() {
  if (ur) return ie;
  ((ur = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.getContext = void 0));
  const e = R(),
    r = ui(),
    s = (0, e.getCallBridge)(),
    l = async () => {
      var n;
      const i = await s("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((ie.getContext = l), ie);
}
var ae = {},
  cr;
function Ki() {
  if (cr) return ae;
  ((cr = 1),
    Object.defineProperty(ae, "__esModule", { value: !0 }),
    (ae.changeWindowTitle = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = async (n) => {
      try {
        await s("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((ae.changeWindowTitle = l), ae);
}
var le = {},
  dr;
function Ji() {
  if (dr) return le;
  ((dr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.theme = void 0));
  const r = (0, R().getCallBridge)();
  return ((le.theme = { enable: () => r("enableTheming") }), le);
}
var ue = {},
  ce = {},
  gt = {},
  D = {},
  fr;
function ci() {
  if (fr) return D;
  ((fr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.blobToBase64 = D.base64ToBlob = void 0));
  const e = (s, l) => {
    if (!s) return null;
    const n = s.includes(";base64") ? s.split(",")[1] : s,
      i = atob(n),
      t = new Array(i.length);
    for (let u = 0; u < i.length; u++) t[u] = i.charCodeAt(u);
    const c = new Uint8Array(t);
    return new Blob([c], { type: l });
  };
  D.base64ToBlob = e;
  const r = (s) =>
    new Promise((l, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        l(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(s));
    });
  return ((D.blobToBase64 = r), D);
}
var hr;
function Yi() {
  return (
    hr ||
      ((hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = ci(),
          s = (o) => {
            if (
              typeof o != "object" ||
              o === null ||
              Object.prototype.toString.call(o) !== "[object Object]"
            )
              return !1;
            const a = Object.getPrototypeOf(o);
            if (a === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(a, "constructor") && a.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(o)
            );
          },
          l = async (o) => ({ data: await (0, r.blobToBase64)(o), type: o.type }),
          n = (o) => (0, r.base64ToBlob)(o.data, o.type),
          i = async (o) => {
            if (o instanceof Blob) return { ...(await l(o)), __isBlobData: !0 };
            if (Array.isArray(o))
              return Promise.all(o.map((a) => (0, e.serialiseBlobsInPayload)(a)));
            if (o && s(o)) {
              const a = await Promise.all(
                Object.entries(o).map(async ([d, _]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(_),
                ]),
              );
              return Object.fromEntries(a);
            }
            return o;
          };
        e.serialiseBlobsInPayload = i;
        const t = (o) => {
          if (o && s(o) && "__isBlobData" in o) {
            const a = o;
            return n({ data: a.data, type: a.type });
          }
          if (Array.isArray(o)) return o.map((a) => (0, e.deserialiseBlobsInPayload)(a));
          if (o && s(o)) {
            const a = {};
            for (const [d, _] of Object.entries(o)) a[d] = (0, e.deserialiseBlobsInPayload)(_);
            return a;
          }
          return o;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (o) =>
          o instanceof Blob
            ? !0
            : Array.isArray(o)
              ? o.some((a) => (0, e.containsBlobs)(a))
              : o && s(o)
                ? Object.values(o).some((a) => (0, e.containsBlobs)(a))
                : !1;
        e.containsBlobs = c;
        const u = (o) =>
          o && s(o) && "__isBlobData" in o
            ? !0
            : Array.isArray(o)
              ? o.some((a) => (0, e.containsSerialisedBlobs)(a))
              : o && s(o)
                ? Object.values(o).some((a) => (0, e.containsSerialisedBlobs)(a))
                : !1;
        e.containsSerialisedBlobs = u;
      })(gt)),
    gt
  );
}
var gr;
function di() {
  if (gr) return ce;
  ((gr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.events = void 0));
  const e = R(),
    r = Yi(),
    s = (0, e.getCallBridge)(),
    l = (u) => (o) => {
      let a = o;
      return ((0, r.containsSerialisedBlobs)(o) && (a = (0, r.deserialiseBlobsInPayload)(o)), u(a));
    },
    n = async (u, o) => {
      let a = o;
      return (
        (0, r.containsBlobs)(o) && (a = await (0, r.serialiseBlobsInPayload)(o)),
        s("emit", { event: u, payload: a })
      );
    },
    i = (u, o) => s("on", { event: u, callback: l(o) }),
    t = async (u, o) => {
      let a = o;
      return (
        (0, r.containsBlobs)(o) && (a = await (0, r.serialiseBlobsInPayload)(o)),
        s("emitPublic", { event: u, payload: a })
      );
    },
    c = (u, o) => s("onPublic", { event: u, callback: l(o) });
  return ((ce.events = { emit: n, on: i, emitPublic: t, onPublic: c }), ce);
}
var _r;
function Qi() {
  if (_r) return ue;
  ((_r = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = di(),
    r = _i(),
    l = (0, R().getCallBridge)(),
    n = "EXTENSION_READY",
    i = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await l("emitReadyEvent");
      } catch {}
    };
  return ((ue.emitReadyEvent = i), ue);
}
const Xi = "modulepreload",
  Zi = function (e, r) {
    return new URL(e, r).href;
  },
  vr = {},
  $i = function (r, s, l) {
    let n = Promise.resolve();
    if (s && s.length > 0) {
      let o = function (a) {
        return Promise.all(
          a.map((d) =>
            Promise.resolve(d).then(
              (_) => ({ status: "fulfilled", value: _ }),
              (_) => ({ status: "rejected", reason: _ }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        u = c?.nonce || c?.getAttribute("nonce");
      n = o(
        s.map((a) => {
          if (((a = Zi(a, l)), a in vr)) return;
          vr[a] = !0;
          const d = a.endsWith(".css"),
            _ = d ? '[rel="stylesheet"]' : "";
          if (l)
            for (let p = t.length - 1; p >= 0; p--) {
              const h = t[p];
              if (h.href === a && (!d || h.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${a}"]${_}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = d ? "stylesheet" : Xi),
            d || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = a),
            u && f.setAttribute("nonce", u),
            document.head.appendChild(f),
            d)
          )
            return new Promise((p, h) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${a}`))));
            });
        }),
      );
    }
    function i(t) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = t), window.dispatchEvent(c), !c.defaultPrevented)) throw t;
    }
    return n.then((t) => {
      for (const c of t || []) c.status === "rejected" && i(c.reason);
      return r().catch(i);
    });
  };
var de = {},
  _t = {},
  fe = {},
  Ke = {},
  pr;
function fi() {
  if (pr) return Ke;
  ((pr = 1), Object.defineProperty(Ke, "__esModule", { value: !0 }), (Ke.default = s));
  let e;
  const r = new Uint8Array(16);
  function s() {
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
  return Ke;
}
var L = {},
  he = {},
  ge = {},
  mr;
function eo() {
  if (mr) return ge;
  ((mr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ge.default = e), ge);
}
var yr;
function $e() {
  if (yr) return he;
  ((yr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = r(eo());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var l = s;
  return ((he.default = l), he);
}
var br;
function et() {
  if (br) return L;
  ((br = 1),
    Object.defineProperty(L, "__esModule", { value: !0 }),
    (L.default = void 0),
    (L.unsafeStringify = l));
  var e = r($e());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const s = [];
  for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
  function l(t, c = 0) {
    return (
      s[t[c + 0]] +
      s[t[c + 1]] +
      s[t[c + 2]] +
      s[t[c + 3]] +
      "-" +
      s[t[c + 4]] +
      s[t[c + 5]] +
      "-" +
      s[t[c + 6]] +
      s[t[c + 7]] +
      "-" +
      s[t[c + 8]] +
      s[t[c + 9]] +
      "-" +
      s[t[c + 10]] +
      s[t[c + 11]] +
      s[t[c + 12]] +
      s[t[c + 13]] +
      s[t[c + 14]] +
      s[t[c + 15]]
    );
  }
  function n(t, c = 0) {
    const u = l(t, c);
    if (!(0, e.default)(u)) throw TypeError("Stringified UUID is invalid");
    return u;
  }
  var i = n;
  return ((L.default = i), L);
}
var wr;
function to() {
  if (wr) return fe;
  ((wr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = s(fi()),
    r = et();
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  let l,
    n,
    i = 0,
    t = 0;
  function c(o, a, d) {
    let _ = (a && d) || 0;
    const f = a || new Array(16);
    o = o || {};
    let p = o.node || l,
      h = o.clockseq !== void 0 ? o.clockseq : n;
    if (p == null || h == null) {
      const E = o.random || (o.rng || e.default)();
      (p == null && (p = l = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        h == null && (h = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let g = o.msecs !== void 0 ? o.msecs : Date.now(),
      v = o.nsecs !== void 0 ? o.nsecs : t + 1;
    const m = g - i + (v - t) / 1e4;
    if (
      (m < 0 && o.clockseq === void 0 && (h = (h + 1) & 16383),
      (m < 0 || g > i) && o.nsecs === void 0 && (v = 0),
      v >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = g), (t = v), (n = h), (g += 122192928e5));
    const b = ((g & 268435455) * 1e4 + v) % 4294967296;
    ((f[_++] = (b >>> 24) & 255),
      (f[_++] = (b >>> 16) & 255),
      (f[_++] = (b >>> 8) & 255),
      (f[_++] = b & 255));
    const w = ((g / 4294967296) * 1e4) & 268435455;
    ((f[_++] = (w >>> 8) & 255),
      (f[_++] = w & 255),
      (f[_++] = ((w >>> 24) & 15) | 16),
      (f[_++] = (w >>> 16) & 255),
      (f[_++] = (h >>> 8) | 128),
      (f[_++] = h & 255));
    for (let E = 0; E < 6; ++E) f[_ + E] = p[E];
    return a || (0, r.unsafeStringify)(f);
  }
  var u = c;
  return ((fe.default = u), fe);
}
var _e = {},
  F = {},
  ve = {},
  Er;
function hi() {
  if (Er) return ve;
  ((Er = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = r($e());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
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
  var l = s;
  return ((ve.default = l), ve);
}
var Rr;
function gi() {
  if (Rr) return F;
  ((Rr = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.URL = F.DNS = void 0),
    (F.default = t));
  var e = et(),
    r = s(hi());
  function s(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function l(c) {
    c = unescape(encodeURIComponent(c));
    const u = [];
    for (let o = 0; o < c.length; ++o) u.push(c.charCodeAt(o));
    return u;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  F.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  F.URL = i;
  function t(c, u, o) {
    function a(d, _, f, p) {
      var h;
      if (
        (typeof d == "string" && (d = l(d)),
        typeof _ == "string" && (_ = (0, r.default)(_)),
        ((h = _) === null || h === void 0 ? void 0 : h.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + d.length);
      if (
        (g.set(_),
        g.set(d, _.length),
        (g = o(g)),
        (g[6] = (g[6] & 15) | u),
        (g[8] = (g[8] & 63) | 128),
        f)
      ) {
        p = p || 0;
        for (let v = 0; v < 16; ++v) f[p + v] = g[v];
        return f;
      }
      return (0, e.unsafeStringify)(g);
    }
    try {
      a.name = c;
    } catch {}
    return ((a.DNS = n), (a.URL = i), a);
  }
  return F;
}
var pe = {},
  Or;
function ro() {
  if (Or) return pe;
  ((Or = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  function e(f) {
    if (typeof f == "string") {
      const p = unescape(encodeURIComponent(f));
      f = new Uint8Array(p.length);
      for (let h = 0; h < p.length; ++h) f[h] = p.charCodeAt(h);
    }
    return r(l(n(f), f.length * 8));
  }
  function r(f) {
    const p = [],
      h = f.length * 32,
      g = "0123456789abcdef";
    for (let v = 0; v < h; v += 8) {
      const m = (f[v >> 5] >>> (v % 32)) & 255,
        b = parseInt(g.charAt((m >>> 4) & 15) + g.charAt(m & 15), 16);
      p.push(b);
    }
    return p;
  }
  function s(f) {
    return (((f + 64) >>> 9) << 4) + 14 + 1;
  }
  function l(f, p) {
    ((f[p >> 5] |= 128 << (p % 32)), (f[s(p) - 1] = p));
    let h = 1732584193,
      g = -271733879,
      v = -1732584194,
      m = 271733878;
    for (let b = 0; b < f.length; b += 16) {
      const w = h,
        E = g,
        j = v,
        z = m;
      ((h = u(h, g, v, m, f[b], 7, -680876936)),
        (m = u(m, h, g, v, f[b + 1], 12, -389564586)),
        (v = u(v, m, h, g, f[b + 2], 17, 606105819)),
        (g = u(g, v, m, h, f[b + 3], 22, -1044525330)),
        (h = u(h, g, v, m, f[b + 4], 7, -176418897)),
        (m = u(m, h, g, v, f[b + 5], 12, 1200080426)),
        (v = u(v, m, h, g, f[b + 6], 17, -1473231341)),
        (g = u(g, v, m, h, f[b + 7], 22, -45705983)),
        (h = u(h, g, v, m, f[b + 8], 7, 1770035416)),
        (m = u(m, h, g, v, f[b + 9], 12, -1958414417)),
        (v = u(v, m, h, g, f[b + 10], 17, -42063)),
        (g = u(g, v, m, h, f[b + 11], 22, -1990404162)),
        (h = u(h, g, v, m, f[b + 12], 7, 1804603682)),
        (m = u(m, h, g, v, f[b + 13], 12, -40341101)),
        (v = u(v, m, h, g, f[b + 14], 17, -1502002290)),
        (g = u(g, v, m, h, f[b + 15], 22, 1236535329)),
        (h = o(h, g, v, m, f[b + 1], 5, -165796510)),
        (m = o(m, h, g, v, f[b + 6], 9, -1069501632)),
        (v = o(v, m, h, g, f[b + 11], 14, 643717713)),
        (g = o(g, v, m, h, f[b], 20, -373897302)),
        (h = o(h, g, v, m, f[b + 5], 5, -701558691)),
        (m = o(m, h, g, v, f[b + 10], 9, 38016083)),
        (v = o(v, m, h, g, f[b + 15], 14, -660478335)),
        (g = o(g, v, m, h, f[b + 4], 20, -405537848)),
        (h = o(h, g, v, m, f[b + 9], 5, 568446438)),
        (m = o(m, h, g, v, f[b + 14], 9, -1019803690)),
        (v = o(v, m, h, g, f[b + 3], 14, -187363961)),
        (g = o(g, v, m, h, f[b + 8], 20, 1163531501)),
        (h = o(h, g, v, m, f[b + 13], 5, -1444681467)),
        (m = o(m, h, g, v, f[b + 2], 9, -51403784)),
        (v = o(v, m, h, g, f[b + 7], 14, 1735328473)),
        (g = o(g, v, m, h, f[b + 12], 20, -1926607734)),
        (h = a(h, g, v, m, f[b + 5], 4, -378558)),
        (m = a(m, h, g, v, f[b + 8], 11, -2022574463)),
        (v = a(v, m, h, g, f[b + 11], 16, 1839030562)),
        (g = a(g, v, m, h, f[b + 14], 23, -35309556)),
        (h = a(h, g, v, m, f[b + 1], 4, -1530992060)),
        (m = a(m, h, g, v, f[b + 4], 11, 1272893353)),
        (v = a(v, m, h, g, f[b + 7], 16, -155497632)),
        (g = a(g, v, m, h, f[b + 10], 23, -1094730640)),
        (h = a(h, g, v, m, f[b + 13], 4, 681279174)),
        (m = a(m, h, g, v, f[b], 11, -358537222)),
        (v = a(v, m, h, g, f[b + 3], 16, -722521979)),
        (g = a(g, v, m, h, f[b + 6], 23, 76029189)),
        (h = a(h, g, v, m, f[b + 9], 4, -640364487)),
        (m = a(m, h, g, v, f[b + 12], 11, -421815835)),
        (v = a(v, m, h, g, f[b + 15], 16, 530742520)),
        (g = a(g, v, m, h, f[b + 2], 23, -995338651)),
        (h = d(h, g, v, m, f[b], 6, -198630844)),
        (m = d(m, h, g, v, f[b + 7], 10, 1126891415)),
        (v = d(v, m, h, g, f[b + 14], 15, -1416354905)),
        (g = d(g, v, m, h, f[b + 5], 21, -57434055)),
        (h = d(h, g, v, m, f[b + 12], 6, 1700485571)),
        (m = d(m, h, g, v, f[b + 3], 10, -1894986606)),
        (v = d(v, m, h, g, f[b + 10], 15, -1051523)),
        (g = d(g, v, m, h, f[b + 1], 21, -2054922799)),
        (h = d(h, g, v, m, f[b + 8], 6, 1873313359)),
        (m = d(m, h, g, v, f[b + 15], 10, -30611744)),
        (v = d(v, m, h, g, f[b + 6], 15, -1560198380)),
        (g = d(g, v, m, h, f[b + 13], 21, 1309151649)),
        (h = d(h, g, v, m, f[b + 4], 6, -145523070)),
        (m = d(m, h, g, v, f[b + 11], 10, -1120210379)),
        (v = d(v, m, h, g, f[b + 2], 15, 718787259)),
        (g = d(g, v, m, h, f[b + 9], 21, -343485551)),
        (h = i(h, w)),
        (g = i(g, E)),
        (v = i(v, j)),
        (m = i(m, z)));
    }
    return [h, g, v, m];
  }
  function n(f) {
    if (f.length === 0) return [];
    const p = f.length * 8,
      h = new Uint32Array(s(p));
    for (let g = 0; g < p; g += 8) h[g >> 5] |= (f[g / 8] & 255) << (g % 32);
    return h;
  }
  function i(f, p) {
    const h = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (h >> 16)) << 16) | (h & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, h, g, v, m) {
    return i(t(i(i(p, f), i(g, m)), v), h);
  }
  function u(f, p, h, g, v, m, b) {
    return c((p & h) | (~p & g), f, p, v, m, b);
  }
  function o(f, p, h, g, v, m, b) {
    return c((p & g) | (h & ~g), f, p, v, m, b);
  }
  function a(f, p, h, g, v, m, b) {
    return c(p ^ h ^ g, f, p, v, m, b);
  }
  function d(f, p, h, g, v, m, b) {
    return c(h ^ (p | ~g), f, p, v, m, b);
  }
  var _ = e;
  return ((pe.default = _), pe);
}
var Pr;
function no() {
  if (Pr) return _e;
  ((Pr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = s(gi()),
    r = s(ro());
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((_e.default = n), _e);
}
var me = {},
  ye = {},
  Sr;
function io() {
  if (Sr) return ye;
  ((Sr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ye.default = r), ye);
}
var jr;
function oo() {
  if (jr) return me;
  ((jr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = l(io()),
    r = l(fi()),
    s = et();
  function l(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, u) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const o = t.random || (t.rng || r.default)();
    if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), c)) {
      u = u || 0;
      for (let a = 0; a < 16; ++a) c[u + a] = o[a];
      return c;
    }
    return (0, s.unsafeStringify)(o);
  }
  var i = n;
  return ((me.default = i), me);
}
var be = {},
  we = {},
  xr;
function so() {
  if (xr) return we;
  ((xr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  function e(n, i, t, c) {
    switch (n) {
      case 0:
        return (i & t) ^ (~i & c);
      case 1:
        return i ^ t ^ c;
      case 2:
        return (i & t) ^ (i & c) ^ (t & c);
      case 3:
        return i ^ t ^ c;
    }
  }
  function r(n, i) {
    return (n << i) | (n >>> (32 - i));
  }
  function s(n) {
    const i = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
      const a = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < a.length; ++d) n.push(a.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      u = Math.ceil(c / 16),
      o = new Array(u);
    for (let a = 0; a < u; ++a) {
      const d = new Uint32Array(16);
      for (let _ = 0; _ < 16; ++_)
        d[_] =
          (n[a * 64 + _ * 4] << 24) |
          (n[a * 64 + _ * 4 + 1] << 16) |
          (n[a * 64 + _ * 4 + 2] << 8) |
          n[a * 64 + _ * 4 + 3];
      o[a] = d;
    }
    ((o[u - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (o[u - 1][14] = Math.floor(o[u - 1][14])),
      (o[u - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let a = 0; a < u; ++a) {
      const d = new Uint32Array(80);
      for (let v = 0; v < 16; ++v) d[v] = o[a][v];
      for (let v = 16; v < 80; ++v) d[v] = r(d[v - 3] ^ d[v - 8] ^ d[v - 14] ^ d[v - 16], 1);
      let _ = t[0],
        f = t[1],
        p = t[2],
        h = t[3],
        g = t[4];
      for (let v = 0; v < 80; ++v) {
        const m = Math.floor(v / 20),
          b = (r(_, 5) + e(m, f, p, h) + g + i[m] + d[v]) >>> 0;
        ((g = h), (h = p), (p = r(f, 30) >>> 0), (f = _), (_ = b));
      }
      ((t[0] = (t[0] + _) >>> 0),
        (t[1] = (t[1] + f) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + h) >>> 0),
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
  var l = s;
  return ((we.default = l), we);
}
var Cr;
function ao() {
  if (Cr) return be;
  ((Cr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = s(gi()),
    r = s(so());
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((be.default = n), be);
}
var Ee = {},
  Ir;
function lo() {
  if (Ir) return Ee;
  ((Ir = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((Ee.default = e), Ee);
}
var Re = {},
  Fr;
function uo() {
  if (Fr) return Re;
  ((Fr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.default = void 0));
  var e = r($e());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var l = s;
  return ((Re.default = l), Re);
}
var Ar;
function co() {
  return (
    Ar ||
      ((Ar = 1),
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
              return o.default;
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
              return r.default;
            },
          }),
          Object.defineProperty(e, "v3", {
            enumerable: !0,
            get: function () {
              return s.default;
            },
          }),
          Object.defineProperty(e, "v4", {
            enumerable: !0,
            get: function () {
              return l.default;
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
              return c.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }));
        var r = a(to()),
          s = a(no()),
          l = a(oo()),
          n = a(ao()),
          i = a(lo()),
          t = a(uo()),
          c = a($e()),
          u = a(et()),
          o = a(hi());
        function a(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(_t)),
    _t
  );
}
var Br;
function fo() {
  if (Br) return de;
  ((Br = 1),
    Object.defineProperty(de, "__esModule", { value: !0 }),
    (de.createAdfRendererIframeProps = void 0));
  const e = co(),
    r = async (s, l) => {
      const n = await $i(
          () => import("./index-BCqYYRNo.js").then((a) => a.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        u = l || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        o = () => {
          var a, d, _, f, p, h, g;
          const v = document.getElementById(u),
            m = {
              type: "adf-document",
              document: (a = s.extension.macro) === null || a === void 0 ? void 0 : a.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: s.localId,
              isEditing:
                (_ = (d = s.extension) === null || d === void 0 ? void 0 : d.isEditing) !== null &&
                _ !== void 0
                  ? _
                  : !1,
              contentId:
                (h =
                  (p = (f = s.extension) === null || f === void 0 ? void 0 : f.macro) === null ||
                  p === void 0
                    ? void 0
                    : p.content) === null || h === void 0
                  ? void 0
                  : h.id,
            };
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (b) => {
                var w;
                (w = b?.iFrameResizer) === null || w === void 0 || w.resize();
              },
            },
            v || "",
          ),
            (g = v?.contentWindow) === null || g === void 0 || g.postMessage(m, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: u, src: c, onLoad: o }
      );
    };
  return ((de.createAdfRendererIframeProps = r), de);
}
var Oe = {},
  Mr;
function ho() {
  if (Mr) return Oe;
  ((Mr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.onClose = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = async (n) => {
      try {
        if ((await s("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((Oe.onClose = l), Oe);
}
var Dr;
function _i() {
  if (Dr) return Z;
  ((Dr = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.view = void 0));
  const e = qi(),
    r = Ti(),
    s = ki(),
    l = Ui(),
    n = Li(),
    i = Hi(),
    t = Ki(),
    c = Ji(),
    u = Qi(),
    o = fo(),
    a = ho();
  return (
    (Z.view = {
      submit: e.submit,
      close: r.close,
      onClose: a.onClose,
      open: s.open,
      refresh: l.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: u.emitReadyEvent,
      createAdfRendererIframeProps: o.createAdfRendererIframeProps,
    }),
    Z
  );
}
var qr;
function tt() {
  return (
    qr ||
      ((qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(_i(), e));
      })(ut)),
    ut
  );
}
var vt = {},
  Pe = {},
  Tr;
function go() {
  if (Tr) return Pe;
  ((Tr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.router = void 0));
  const r = (0, R().getCallBridge)(),
    s = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const c = await r("getUrl", t);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (u) {
        throw new Error(`Failed to parse URL: ${c} (${u})`);
      }
    },
    l = (t) => {
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
  return ((Pe.router = { getUrl: s, navigate: l, open: n, reload: i }), Pe);
}
var kr;
function _o() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(go(), e));
      })(vt)),
    vt
  );
}
var pt = {},
  Se = {},
  Ur;
function vo() {
  if (Ur) return Se;
  ((Ur = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.Modal = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = () => {};
  class n {
    constructor(t) {
      var c, u;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || l),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (c = t?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick = (u = t?.closeOnOverlayClick) !== null && u !== void 0 ? u : !0),
        (this.title = t?.title || ""),
        (this.icon = t?.icon || ""));
    }
    async open() {
      try {
        if (
          (await s("openModal", {
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
  return ((Se.Modal = n), Se);
}
var Lr;
function po() {
  return (
    Lr ||
      ((Lr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(vo(), e));
      })(pt)),
    pt
  );
}
var S = {},
  q = {},
  Nr;
function mo() {
  if (Nr) return q;
  ((Nr = 1),
    Object.defineProperty(q, "__esModule", { value: !0 }),
    (q.productFetchApi = q.remoteFetchApi = void 0));
  const e = ci(),
    r = async (t, c = !1) => {
      const u = {};
      for (const [o, a] of t.entries())
        if (c ? o.startsWith("file") : o === "file") {
          const _ = a.name,
            f = a.type;
          ((u[o] = await (0, e.blobToBase64)(a)), (u[`__${o}Name`] = _), (u[`__${o}Type`] = f));
        } else u[o] = a;
      return JSON.stringify(u);
    },
    s = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: c, ...u } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          u
        );
      }
      return t;
    },
    l = async (t, c) => {
      const u = c?.body instanceof FormData,
        o = u ? await r(c?.body, t === "remote") : c?.body,
        a = new Request("", { body: o, method: c?.method, headers: c?.headers }),
        d = Object.fromEntries(a.headers.entries());
      return {
        body: a.method !== "GET" ? await a.text() : null,
        headers: new Headers(d),
        isMultipartFormData: u,
      };
    },
    n = (t) => {
      const c = async (u, o) => {
        const a = s(o),
          { body: d, headers: _, isMultipartFormData: f } = await l("remote", a),
          p = {
            remoteKey: u,
            fetchRequestInit: { ...a, body: d, headers: [..._.entries()] },
            isMultipartFormData: f,
          },
          {
            body: h,
            headers: g,
            statusText: v,
            status: m,
            isAttachment: b,
          } = await t("fetchRemote", p),
          w = b ? (0, e.base64ToBlob)(h, g["content-type"]) : h;
        return new Response(w || null, { headers: g, status: m, statusText: v });
      };
      return { requestRemote: (u, o) => c(u, o) };
    };
  q.remoteFetchApi = n;
  const i = (t) => {
    const c = async (u, o, a) => {
      const d = s(a),
        { body: _, headers: f, isMultipartFormData: p } = await l("product", d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const h = {
          product: u,
          restPath: o,
          fetchRequestInit: { ...d, body: _, headers: [...f.entries()] },
          isMultipartFormData: p,
        },
        {
          body: g,
          headers: v,
          statusText: m,
          status: b,
          isAttachment: w,
        } = await t("fetchProduct", h),
        E = w ? (0, e.base64ToBlob)(g, v["content-type"]) : g;
      return new Response(E || null, { headers: v, status: b, statusText: m });
    };
    return {
      requestConfluence: (u, o) => c("confluence", u, o),
      requestJira: (u, o) => c("jira", u, o),
      requestBitbucket: (u, o) => c("bitbucket", u, o),
    };
  };
  return ((q.productFetchApi = i), q);
}
var Gr;
function yo() {
  if (Gr) return S;
  Gr = 1;
  var e;
  (Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.requestRemote = S.requestBitbucket = S.requestJira = S.requestConfluence = void 0));
  const r = R(),
    s = mo();
  return (
    (e = (0, s.productFetchApi)((0, r.getCallBridge)())),
    (S.requestConfluence = e.requestConfluence),
    (S.requestJira = e.requestJira),
    (S.requestBitbucket = e.requestBitbucket),
    (S.requestRemote = (0, s.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    S
  );
}
var mt = {},
  je = {},
  Vr;
function bo() {
  if (Vr) return je;
  ((Vr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.showFlag = void 0));
  const e = R(),
    r = O(),
    s = (0, e.getCallBridge)(),
    l = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = s("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, s("closeFlag", { id: n.id })) };
    };
  return ((je.showFlag = l), je);
}
var zr;
function wo() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = bo();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(mt)),
    mt
  );
}
var yt = {},
  Wr;
function Eo() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(di(), e));
      })(yt)),
    yt
  );
}
var bt = {},
  xe = {},
  Hr;
function Ro() {
  if (Hr) return xe;
  ((Hr = 1), Object.defineProperty(xe, "__esModule", { value: !0 }), (xe.realtime = void 0));
  const r = (0, R().getCallBridge)(),
    s = (t, c, u) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: u }),
    l = (t, c, u) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: u }),
    n = (t, c, u) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: u, isGlobal: !0 }),
    i = (t, c, u) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: u, isGlobal: !0 });
  return ((xe.realtime = { publish: s, subscribe: l, publishGlobal: n, subscribeGlobal: i }), xe);
}
var wt = {},
  Kr;
function Oo() {
  return (
    Kr ||
      ((Kr = 1),
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
      })(wt)),
    wt
  );
}
var Jr;
function Po() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = Ro();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var s = Oo();
        (Object.defineProperty(e, "Jira", {
          enumerable: !0,
          get: function () {
            return s.Jira;
          },
        }),
          Object.defineProperty(e, "Confluence", {
            enumerable: !0,
            get: function () {
              return s.Confluence;
            },
          }),
          Object.defineProperty(e, "Bitbucket", {
            enumerable: !0,
            get: function () {
              return s.Bitbucket;
            },
          }));
      })(bt)),
    bt
  );
}
var Et = {},
  Ce = {},
  Rt = {},
  Yr;
function So() {
  return (
    Yr ||
      ((Yr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = R(),
          s = O(),
          l = 30,
          n = (0, r.getCallBridge)();
        e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE =
          "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
        const i = (c) => {
            switch (c.type) {
              case "forge":
                return { agentName: c.agentName, agentKey: c.agentKey, prompt: c.prompt };
              case "atlassian":
                return { agentName: c.agentName, prompt: c.prompt };
              default:
                return { prompt: c.prompt };
            }
          },
          t = async (c) => {
            if (c.type === "forge") {
              if (c.agentName.length > l) throw new Error("rovo agent name too long");
              if (c.agentKey.length > l) throw new Error("rovo agent key too long");
            }
            const u = i(c);
            if ((await n("openRovo", u)) === !1)
              throw new s.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(Rt)),
    Rt
  );
}
var Ie = {},
  Qr;
function jo() {
  if (Qr) return Ie;
  ((Qr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.isEnabled = void 0));
  const r = (0, R().getCallBridge)(),
    s = () => r("isRovoEnabled");
  return ((Ie.isEnabled = s), Ie);
}
var Xr;
function xo() {
  if (Xr) return Ce;
  ((Xr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.rovo = void 0));
  const e = So(),
    r = jo();
  return ((Ce.rovo = { open: e.open, isEnabled: r.isEnabled }), Ce);
}
var Zr;
function Co() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(xo(), e));
      })(Et)),
    Et
  );
}
var C = {},
  $r;
function Io() {
  if ($r) return C;
  (($r = 1),
    Object.defineProperty(C, "__esModule", { value: !0 }),
    (C.createTranslationFunction = C.getTranslations = C.resetTranslationsCache = void 0));
  const e = ui(),
    r = tt(),
    s = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!u.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return u.json();
      },
    },
    l = new e.TranslationsGetter(s),
    n = () => {
      l.reset();
    };
  C.resetTranslationsCache = n;
  const i = async (c = null, u = { fallback: !0 }) => {
    let o = c;
    return (o || (o = (await r.view.getContext()).locale), await l.getTranslations(o, u));
  };
  C.getTranslations = i;
  const t = async (c = null) => {
    let u = c;
    u || (u = (await r.view.getContext()).locale);
    const o = new e.Translator(u, l);
    return (
      await o.init(),
      (a, d) => {
        var _, f;
        return (f = (_ = o.translate(a)) !== null && _ !== void 0 ? _ : d) !== null && f !== void 0
          ? f
          : a;
      }
    );
  };
  return ((C.createTranslationFunction = t), C);
}
var Ot = {},
  Fe = {},
  en;
function Fo() {
  if (en) return Fe;
  ((en = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.permissions = void 0));
  const r = (0, R().getCallBridge)(),
    s = async (u) => r("__permission__egressGet", u),
    l = async (u) => r("__permission__egressSet", u),
    n = async (u) => r("__permission__egressDeleteDomain", u),
    i = async (u) => r("__permission__egressDeleteGroup", u),
    t = async (u) => r("__permission__remoteGet", u),
    c = async (u) => r("__permission__remoteSet", u);
  return (
    (Fe.permissions = {
      egress: { get: s, set: l, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: c },
    }),
    Fe
  );
}
var T = {},
  Pt = {},
  St = {},
  Ae = {},
  Be = {},
  tn;
function Tt() {
  if (tn) return Be;
  ((tn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.parseUrl = void 0));
  function e(r) {
    var s, l;
    const n =
        (l = (s = r.match(/^(.*?:)/)) === null || s === void 0 ? void 0 : s[0]) !== null &&
        l !== void 0
          ? l
          : "https:",
      i = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = i.split("/")[0],
      c = i.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: c };
  }
  return ((Be.parseUrl = e), Be);
}
var jt = {},
  rn;
function vi() {
  return (
    rn ||
      ((rn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getEgressesBasedOnToggles =
            e.sortAndGroupEgressPermissionsByDomain =
            e.EgressCategory =
            e.EgressType =
            e.globToRegex =
              void 0));
        const r = Tt();
        function s(t) {
          const u = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${u}$`);
        }
        e.globToRegex = s;
        const l = (t) => {
          if (t?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            u = new Set(),
            o = [];
          return (
            t.forEach((a) => {
              const d = c.test(a) ? a : `https://${a}`,
                _ = (0, r.parseUrl)(d);
              _.hostname.startsWith("*")
                ? (u.add(_.hostname.substring(2)), o.push(s(_.hostname)))
                : u.add(_.hostname);
            }),
            [...u].sort().reduce((a, d) => (o.some((_) => _.test(d)) || a.push(d), a), [])
          );
        };
        ((e.sortAndGroupEgressPermissionsByDomain = l),
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
          const c = t.egress.filter((o) => {
              var a;
              if (
                ((a = o.category) === null || a === void 0 ? void 0 : a.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const d = t.installationConfig.find(
                    (_) => _.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return d?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            u = new Map();
          for (const o of c)
            (u.has(o.type) || u.set(o.type, o.addresses),
              u.set(o.type, [...u.get(o.type), ...o.addresses]));
          return [...u.entries()].map(([o, a]) => ({ type: o, addresses: [...new Set(a)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(jt)),
    jt
  );
}
var nn;
function Ao() {
  if (nn) return Ae;
  ((nn = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.EgressFilteringService = void 0));
  const e = Tt(),
    r = vi();
  class s {
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
  return ((Ae.EgressFilteringService = s), Ae);
}
var on;
function Bo() {
  return (
    on ||
      ((on = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Ao(), e), r.__exportStar(Tt(), e), r.__exportStar(vi(), e));
      })(St)),
    St
  );
}
var sn;
function Mo() {
  return (
    sn ||
      ((sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), P.__exportStar(Bo(), e));
      })(Pt)),
    Pt
  );
}
var an;
function Do() {
  if (an) return T;
  ((an = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.checkPermissions = T.createPermissionUtils = void 0));
  const e = Mo(),
    r = tt();
  function s(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const l = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(d) {
    if (!d) return null;
    const { scopes: _, external: f = {} } = d,
      p = Array.isArray(_) ? _ : Object.keys(_ || {});
    return {
      hasScope: (h) => p.includes(h),
      canFetchFrom: (h, g) => {
        var v;
        const m = (v = f.fetch) === null || v === void 0 ? void 0 : v[h];
        if (!m?.length) return !1;
        const b = m.map(s).filter((j) => j.length > 0);
        if (b.length === 0) return !1;
        const w = new e.EgressFilteringService(b);
        return h === "client" ? w.isValidUrlCSP(g) : w.isValidUrl(g);
      },
      canLoadResource: (h, g) => {
        const v = f[h];
        if (!v?.length) return !1;
        const m = v.map(s).filter((E) => E.length > 0);
        return m.length === 0 ? !1 : new e.EgressFilteringService(m).isValidUrlCSP(g);
      },
      getScopes: () => p,
      getExternalPermissions: () => f,
      hasAnyPermissions: () => p.length > 0 || Object.keys(f).length > 0,
    };
  }
  T.createPermissionUtils = i;
  function t(d, _) {
    if (!d?.length) return;
    const f = d.filter((p) => !_.hasScope(p));
    return f.length > 0 ? f : void 0;
  }
  function c(d, _) {
    if (!d?.fetch) return;
    const f = {};
    return (
      n.forEach((p) => {
        var h;
        const g = (h = d.fetch) === null || h === void 0 ? void 0 : h[p];
        if (g?.length) {
          const v = g.filter((m) => !_.canFetchFrom(p, m));
          v.length > 0 && (f[p] = v);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function u(d, _) {
    const f = {};
    return (
      l.forEach((p) => {
        const h = d?.[p];
        if (h?.length) {
          const g = h.filter((v) => !_.canLoadResource(p, v));
          g.length > 0 && (f[p] = g);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function o(d, _) {
    if (!d) return;
    const f = c(d, _),
      p = u(d, _);
    if (!f && !p) return;
    const h = {};
    return (f && (h.fetch = f), p && Object.assign(h, p), h);
  }
  async function a(d, _) {
    var f;
    if (!d) return { granted: !1, missing: null };
    if (!(!((f = d.scopes) === null || f === void 0) && f.length) && !d.external)
      return { granted: !0, missing: null };
    let p = _;
    p || (p = (await r.view.getContext()).permissions);
    const h = i(p);
    if (!h) return { granted: !1, missing: null };
    const g = {};
    let v = !0;
    const m = t(d.scopes, h);
    m && ((g.scopes = m), (v = !1));
    const b = o(d.external, h);
    return (b && ((g.external = b), (v = !1)), { granted: v, missing: v ? null : g });
  }
  return ((T.checkPermissions = a), T);
}
var ln;
function qo() {
  return (
    ln ||
      ((ln = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(Fo(), e), r.__exportStar(Do(), e));
      })(Ot)),
    Ot
  );
}
var xt = {},
  Ct = {},
  It = {},
  Me = {},
  De = {},
  un;
function pi() {
  return (
    un ||
      ((un = 1),
      Object.defineProperty(De, "__esModule", { value: !0 }),
      (De.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (De.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    De
  );
}
var cn;
function rt() {
  if (cn) return Me;
  ((cn = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = tt(),
    s = pi(),
    l = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Me.checkRestrictedEnvironment = l), Me);
}
var dn;
function To() {
  return (
    dn ||
      ((dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = He(),
          s = O(),
          l = rt(),
          i = (0, R().getCallBridge)(),
          t = (a, d) => {
            const _ = atob(a),
              f = new Array(_.length);
            for (let h = 0; h < _.length; h++) f[h] = _.charCodeAt(h);
            const p = new Uint8Array(f);
            return new Blob([p], { type: d || "application/octet-stream" });
          },
          c = async (a) => {
            const d = a.size,
              _ = await a.arrayBuffer(),
              f = await crypto.subtle.digest("SHA-256", _),
              p = new Uint8Array(f),
              h = btoa(String.fromCharCode(...p));
            return { length: d, checksum: h, checksumType: "SHA256" };
          },
          u = async ({ functionKey: a, objects: d }) => {
            if (!a || a.length === 0)
              throw new s.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new s.BridgeAPIError("objects array is required and must not be empty");
            const _ = d.map((m, b) => {
                if (m instanceof Blob) return m;
                if (!(m && typeof m == "object" && "data" in m && typeof m.data == "string"))
                  throw new s.BridgeAPIError(
                    `Invalid object type at index ${b}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(m.data, m.mimeType);
                } catch {
                  throw new s.BridgeAPIError(
                    `Invalid base64 data at index ${b}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              f = await Promise.all(_.map((m) => c(m))),
              p = await (0, r.invoke)(a, { allObjectMetadata: f });
            if (!p || typeof p != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const h = new Map(),
              g = new Map();
            return (
              _.forEach((m, b) => {
                const w = f[b];
                (h.set(w.checksum, m), g.set(w.checksum, b));
              }),
              Object.entries(p).map(([m, b]) => {
                const { key: w, checksum: E } = b,
                  j = h.get(E),
                  z = g.get(E);
                return z === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: w,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : j
                    ? {
                        promise: (async () => {
                          try {
                            const B = await fetch(m, {
                              method: "PUT",
                              body: j,
                              headers: {
                                "Content-Type": j.type || "application/octet-stream",
                                "Content-Length": j.size.toString(),
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
                        index: z,
                        objectType: j.type,
                        objectSize: j.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: w,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: z,
                      };
              })
            );
          };
        e.createUploadPromises = u;
        const o = async ({ functionKey: a, objects: d }) => {
          (await (0, l.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const _ = await (0, e.createUploadPromises)({ functionKey: a, objects: d });
          return await Promise.all(_.map((p) => p.promise));
        };
        e.upload = o;
      })(It)),
    It
  );
}
var qe = {},
  fn;
function ko() {
  if (fn) return qe;
  ((fn = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.deleteObjects = void 0));
  const e = He(),
    r = O(),
    s = rt(),
    n = (0, R().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "delete" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to delete objects");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      await Promise.all(
        c.map(async (u) => {
          await (0, e.invoke)(t, { key: u });
        }),
      );
    };
  return ((qe.deleteObjects = i), qe);
}
var Te = {},
  hn;
function Uo() {
  if (hn) return Te;
  ((hn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.download = void 0));
  const e = He(),
    r = O(),
    s = rt(),
    n = (0, R().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const u = await (0, e.invoke)(t, { keys: c });
      if (!u || typeof u != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const o = Object.entries(u).map(async ([d, _]) => {
        try {
          const f = await fetch(d, { method: "GET" });
          if (!f.ok)
            return {
              success: !1,
              key: _,
              status: f.status,
              error: `Download failed with status ${f.status}`,
            };
          const p = await f.blob();
          return { success: !0, key: _, blob: p, status: f.status };
        } catch (f) {
          return {
            success: !1,
            key: _,
            status: 503,
            error: f instanceof Error ? f.message : "Download failed",
          };
        }
      });
      return await Promise.all(o);
    };
  return ((Te.download = i), Te);
}
var ke = {},
  gn;
function Lo() {
  if (gn) return ke;
  ((gn = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.getMetadata = void 0));
  const e = He(),
    r = O(),
    s = rt(),
    n = (0, R().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "getMetadata" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError(
          "functionKey is required to filter and generate object metadata",
        );
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      return await Promise.all(
        c.map(async (o) => {
          const a = await (0, e.invoke)(t, { key: o });
          return !a || typeof a != "object"
            ? { key: o, error: "Invalid response from functionKey" }
            : a;
        }),
      );
    };
  return ((ke.getMetadata = i), ke);
}
var _n;
function No() {
  return (
    _n ||
      ((_n = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = To();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const s = ko(),
          l = Uo(),
          n = Lo();
        e.objectStore = {
          upload: r.upload,
          download: l.download,
          getMetadata: n.getMetadata,
          delete: s.deleteObjects,
        };
      })(Ct)),
    Ct
  );
}
var vn;
function Go() {
  return (
    vn ||
      ((vn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = P;
        (r.__exportStar(No(), e), r.__exportStar(pi(), e));
      })(xt)),
    xt
  );
}
var Ft = {},
  Ue = {},
  k = {},
  N = {},
  Je = {},
  pn;
function Vo() {
  if (pn) return Je;
  ((pn = 1), Object.defineProperty(Je, "__esModule", { value: !0 }));
  const e = A();
  let r = class {
    constructor(l) {
      ((this._sdkKey = l),
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
    setValues(l, n) {
      var i;
      if (!l) return !1;
      const t = (0, e._typedJsonParse)(l.data, "has_updates", "EvaluationResponse");
      return t == null
        ? !1
        : ((this._source = l.source),
          t?.has_updates !== !0 ||
            ((this._rawValues = l.data),
            (this._lcut = t.time),
            (this._receivedAt = l.receivedAt),
            (this._values = t),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(l.source, t)),
            l.source && t.user && this._setWarningState(n, t),
            e.SDKFlags.setFlags(this._sdkKey, (i = t.sdk_flags) !== null && i !== void 0 ? i : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(l) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.feature_gates,
        l,
      );
    }
    getConfig(l) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.dynamic_configs,
        l,
      );
    }
    getLayer(l) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.layer_configs,
        l,
      );
    }
    getParamStore(l) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.param_stores,
        l,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var l;
      return (l = this._values) === null || l === void 0 ? void 0 : l.exposures;
    }
    _extractBootstrapMetadata(l, n) {
      if (l !== "Bootstrap") return null;
      const i = {};
      return (
        n.user && (i.user = n.user),
        n.sdkInfo && (i.generatorSDKInfo = n.sdkInfo),
        (i.lcut = n.time),
        i
      );
    }
    _getDetailedStoreResult(l, n) {
      let i = null;
      return (
        l && (i = l[n] ? l[n] : l[(0, e._DJB2)(n)]),
        { result: i, details: this._getDetails(i == null) }
      );
    }
    _setWarningState(l, n) {
      var i, t;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((i = l.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== c &&
        ((!((t = l.customIDs) === null || t === void 0) && t.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const u = n.user;
        (0, e._getFullUserHash)(l) !== (0, e._getFullUserHash)(u) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const l = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
      return (this._warnings.size > 0 && (l.warnings = Array.from(this._warnings)), l);
    }
    _getDetails(l) {
      var n, i;
      const t = this.getCurrentSourceDetails();
      let c = t.reason;
      const u = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && u.length > 0 && (c = c + u[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${l ? "Unrecognized" : "Recognized"}`));
      const o =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (o && (t.bootstrapMetadata = o), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((Je.default = r), Je);
}
var G = {},
  Le = {},
  mn;
function zo() {
  if (mn) return Le;
  ((mn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le._resolveDeltasResponse = void 0));
  const e = A(),
    r = 2;
  function s(t, c) {
    const u = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!u) return { hadBadDeltaChecksum: !0 };
    const o = l(t, u),
      a = n(o),
      d = (0, e._DJB2Object)(
        {
          feature_gates: a.feature_gates,
          dynamic_configs: a.dynamic_configs,
          layer_configs: a.layer_configs,
        },
        r,
      );
    return d === u.checksumV2
      ? JSON.stringify(a)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: a,
          badFullResponse: u.deltas_full_response,
        };
  }
  Le._resolveDeltasResponse = s;
  function l(t, c) {
    return Object.assign(Object.assign(Object.assign({}, t), c), {
      feature_gates: Object.assign(Object.assign({}, t.feature_gates), c.feature_gates),
      layer_configs: Object.assign(Object.assign({}, t.layer_configs), c.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, t.dynamic_configs), c.dynamic_configs),
    });
  }
  function n(t) {
    const c = t;
    return (
      i(t.deleted_gates, c.feature_gates),
      delete c.deleted_gates,
      i(t.deleted_configs, c.dynamic_configs),
      delete c.deleted_configs,
      i(t.deleted_layers, c.layer_configs),
      delete c.deleted_layers,
      c
    );
  }
  function i(t, c) {
    t?.forEach((u) => {
      delete c[u];
    });
  }
  return Le;
}
var yn;
function mi() {
  if (yn) return G;
  yn = 1;
  var e =
    (G && G.__awaiter) ||
    function (n, i, t, c) {
      function u(o) {
        return o instanceof t
          ? o
          : new t(function (a) {
              a(o);
            });
      }
      return new (t || (t = Promise))(function (o, a) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (h) {
            a(h);
          }
        }
        function _(p) {
          try {
            f(c.throw(p));
          } catch (h) {
            a(h);
          }
        }
        function f(p) {
          p.done ? o(p.value) : u(p.value).then(d, _);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(G, "__esModule", { value: !0 });
  const r = A(),
    s = zo();
  class l extends r.NetworkCore {
    constructor(i, t) {
      super(i, t);
      const c = i?.networkConfig;
      ((this._option = i),
        (this._initializeUrlConfig = new r.UrlConfiguration(
          r.Endpoint._initialize,
          c?.initializeUrl,
          c?.api,
          c?.initializeFallbackUrls,
        )));
    }
    fetchEvaluations(i, t, c, u, o) {
      return e(this, void 0, void 0, function* () {
        var a, d, _, f, p, h;
        const g = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let v = {
          user: u,
          hash:
            (_ =
              (d = (a = this._option) === null || a === void 0 ? void 0 : a.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g?.has_updates) {
          const m =
            g?.hash_used !==
            ((h =
              (p = (f = this._option) === null || f === void 0 ? void 0 : f.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2");
          v = Object.assign(Object.assign({}, v), {
            sinceTime: o && !m ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && o ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: m ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, v, c);
      });
    }
    _fetchEvaluations(i, t, c, u) {
      return e(this, void 0, void 0, function* () {
        var o, a;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: u,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (o = d?.body) !== null && o !== void 0 ? o : null;
        if (
          t?.has_updates !== !0 ||
          ((a = d.body) === null || a === void 0 ? void 0 : a.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const _ = (0, s._resolveDeltasResponse)(t, d.body);
        return typeof _ == "string"
          ? _
          : this._fetchEvaluations(
              i,
              t,
              Object.assign(Object.assign(Object.assign({}, c), _), {
                deltasResponseRequested: !1,
              }),
              u,
            );
      });
    }
  }
  return ((G.default = l), G);
}
var Ne = {},
  bn;
function Wo() {
  if (bn) return Ne;
  ((bn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne._makeParamStoreGetter = void 0));
  const e = A(),
    r = { disableExposureLog: !0 };
  function s(a) {
    return a == null || a.disableExposureLog === !1;
  }
  function l(a, d) {
    return d != null && !(0, e._isTypeMatch)(a, d);
  }
  function n(a, d) {
    return a.value;
  }
  function i(a, d, _) {
    return a.getFeatureGate(d.gate_name, s(_) ? void 0 : r).value ? d.pass_value : d.fail_value;
  }
  function t(a, d, _, f) {
    const h = a.getDynamicConfig(d.config_name, s(f) ? void 0 : r).get(d.param_name);
    return l(h, _) ? _ : h;
  }
  function c(a, d, _, f) {
    const h = a.getExperiment(d.experiment_name, s(f) ? void 0 : r).get(d.param_name);
    return l(h, _) ? _ : h;
  }
  function u(a, d, _, f) {
    const h = a.getLayer(d.layer_name, s(f) ? void 0 : r).get(d.param_name);
    return l(h, _) ? _ : h;
  }
  function o(a, d, _) {
    return (f, p) => {
      if (d == null) return p;
      const h = d[f];
      if (h == null || (p != null && (0, e._typeOf)(p) !== h.param_type)) return p;
      switch (h.ref_type) {
        case "static":
          return n(h);
        case "gate":
          return i(a, h, _);
        case "dynamic_config":
          return t(a, h, p, _);
        case "experiment":
          return c(a, h, p, _);
        case "layer":
          return u(a, h, p, _);
        default:
          return p;
      }
    };
  }
  return ((Ne._makeParamStoreGetter = o), Ne);
}
var U = {},
  wn;
function Ho() {
  if (wn) return U;
  wn = 1;
  var e =
    (U && U.__awaiter) ||
    function (n, i, t, c) {
      function u(o) {
        return o instanceof t
          ? o
          : new t(function (a) {
              a(o);
            });
      }
      return new (t || (t = Promise))(function (o, a) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (h) {
            a(h);
          }
        }
        function _(p) {
          try {
            f(c.throw(p));
          } catch (h) {
            a(h);
          }
        }
        function f(p) {
          p.done ? o(p.value) : u(p.value).then(d, _);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.StatsigEvaluationsDataAdapter = void 0));
  const r = A(),
    s = mi();
  let l = class extends r.DataAdapterCore {
    constructor() {
      (super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null));
    }
    attach(i, t, c) {
      (super.attach(i, t, c),
        c !== null && c instanceof s.default
          ? (this._network = c)
          : (this._network = new s.default(t ?? {})));
    }
    getDataAsync(i, t, c) {
      return this._getDataAsyncImpl(i, (0, r._normalizeUser)(t, this._options), c);
    }
    prefetchData(i, t) {
      return this._prefetchDataImpl(i, t);
    }
    setData(i) {
      const t = (0, r._typedJsonParse)(i, "has_updates", "data");
      t && "user" in t
        ? super.setData(i, t.user)
        : r.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(i, t) {
      super.setData(i, t);
    }
    _fetchFromNetwork(i, t, c, u) {
      return e(this, void 0, void 0, function* () {
        var o;
        const a = yield (o = this._network) === null || o === void 0
          ? void 0
          : o.fetchEvaluations(this._getSdkKey(), i, c?.priority, t, u);
        return a ?? null;
      });
    }
    _getCacheKey(i) {
      var t;
      const c = (0, r._getStorageKey)(
        this._getSdkKey(),
        i,
        (t = this._options) === null || t === void 0 ? void 0 : t.customUserCacheKeyFunc,
      );
      return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${c}`;
    }
    _isCachedResultValidFor204(i, t) {
      return i.fullUserHash != null && i.fullUserHash === (0, r._getFullUserHash)(t);
    }
  };
  return ((U.StatsigEvaluationsDataAdapter = l), U);
}
var En;
function Ko() {
  if (En) return N;
  En = 1;
  var e =
    (N && N.__awaiter) ||
    function (c, u, o, a) {
      function d(_) {
        return _ instanceof o
          ? _
          : new o(function (f) {
              f(_);
            });
      }
      return new (o || (o = Promise))(function (_, f) {
        function p(v) {
          try {
            g(a.next(v));
          } catch (m) {
            f(m);
          }
        }
        function h(v) {
          try {
            g(a.throw(v));
          } catch (m) {
            f(m);
          }
        }
        function g(v) {
          v.done ? _(v.value) : d(v.value).then(p, h);
        }
        g((a = a.apply(c, u || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = A(),
    s = Vo(),
    l = mi(),
    n = Wo(),
    i = Ho();
  let t = class Dt extends r.StatsigClientBase {
    static instance(u) {
      const o = (0, r._getStatsigGlobal)().instance(u);
      return o instanceof Dt
        ? o
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Dt(u ?? "", {}));
    }
    constructor(u, o, a = null) {
      var d, _;
      r.SDKType._setClientType(u, "javascript-client");
      const f = new l.default(a, (h) => {
        this.$emt(h);
      });
      (super(
        u,
        (d = a?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
        f,
        a,
      ),
        (this.getFeatureGate = this._memoize(
          r.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          r.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          r.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getLayer = this._memoize(r.MemoPrefix._layer, this._getLayerImpl.bind(this))),
        (this.getParameterStore = this._memoize(
          r.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new s.default(u)),
        (this._network = f),
        (this._user = this._configureUser(o, a)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (_ = a?.plugins) !== null && _ !== void 0 ? _ : [];
      for (const h of p) h.bind(this);
    }
    initializeSync(u) {
      var o;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((o = this._store.getWarnings()) !== null && o !== void 0 ? o : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, u));
    }
    initializeAsync(u) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(u)), this._initializePromise);
      });
    }
    updateUserSync(u, o) {
      const a = performance.now();
      try {
        return this._updateUserSyncImpl(u, o, a);
      } catch (d) {
        const _ = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(_, a);
      }
    }
    _updateUserSyncImpl(u, o, a) {
      var d;
      const _ = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(u);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && _.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = o?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && f?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - a,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            _,
          )
        : (this._runPostUpdate(f ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - a,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            _,
          ));
    }
    updateUserAsync(u, o) {
      return e(this, void 0, void 0, function* () {
        const a = performance.now();
        try {
          return yield this._updateUserAsyncImpl(u, o);
        } catch (d) {
          const _ = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(_, a);
        }
      });
    }
    _updateUserAsyncImpl(u, o) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(u);
        const a = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(a);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, a, o)),
          a !== this._user)
        )
          return (0, r.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let _ = !1;
        (d != null &&
          (r.Diagnostics._markInitProcessStart(this._sdkKey),
          (_ = this._store.setValues(d, this._user)),
          r.Diagnostics._markInitProcessEnd(this._sdkKey, { success: _ })),
          this._finalizeUpdate(d),
          _ ||
            (this._errorBoundary.attachErrorIfNoneExists(
              r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          r.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            _,
            this._store.getCurrentSourceDetails(),
          ));
        const f = r.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, r.createUpdateDetails)(
          _,
          this._store.getSource(),
          f,
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
        session: r.StatsigSession.get(this._sdkKey),
        stableID: r.StableID.get(this._sdkKey),
        sdkInstanceID: this._sdkInstanceID,
      };
    }
    checkGate(u, o) {
      return this.getFeatureGate(u, o).value;
    }
    logEvent(u, o, a) {
      const d = typeof u == "string" ? { eventName: u, value: o, metadata: a } : u;
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
    _initializeAsyncImpl(u) {
      return e(this, void 0, void 0, function* () {
        return (
          r.Storage.isReady() || (yield r.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, u)
        );
      });
    }
    _createErrorUpdateDetails(u, o) {
      var a;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - o,
        u,
        null,
        [...((a = this._store.getWarnings()) !== null && a !== void 0 ? a : [])],
      );
    }
    _finalizeUpdate(u) {
      (this._store.finalize(), this._setStatus("Ready", u));
    }
    _runPostUpdate(u, o) {
      this.dataAdapter.getDataAsync(u, o, { priority: "low" }).catch((a) => {
        r.Log.error("An error occurred after update.", a);
      });
    }
    _resetForUser(u) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(u, this._options)));
    }
    _configureUser(u, o) {
      var a;
      const d = (0, r._normalizeUser)(u, o),
        _ = (a = d.customIDs) === null || a === void 0 ? void 0 : a.stableID;
      return (_ && r.StableID.setOverride(_, this._sdkKey), d);
    }
    _getFeatureGateImpl(u, o) {
      var a, d;
      const { result: _, details: f } = this._store.getGate(u),
        p = (0, r._makeFeatureGate)(u, f, _),
        h =
          (d = (a = this.overrideAdapter) === null || a === void 0 ? void 0 : a.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(a, p, this._user, o),
        g = h ?? p;
      return (
        this._enqueueExposure(
          u,
          (0, r._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(u, o) {
      var a, d;
      const { result: _, details: f } = this._store.getConfig(u),
        p = (0, r._makeDynamicConfig)(u, f, _),
        h =
          (d =
            (a = this.overrideAdapter) === null || a === void 0
              ? void 0
              : a.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(a, p, this._user, o),
        g = h ?? p;
      return (
        this._enqueueExposure(
          u,
          (0, r._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(u, o) {
      var a, d, _, f;
      const { result: p, details: h } = this._store.getConfig(u),
        g = (0, r._makeExperiment)(u, h, p);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (d = (a = g.__evaluation) === null || a === void 0 ? void 0 : a.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const v =
          (f =
            (_ = this.overrideAdapter) === null || _ === void 0
              ? void 0
              : _.getExperimentOverride) === null || f === void 0
            ? void 0
            : f.call(_, g, this._user, o),
        m = v ?? g;
      return (
        this._enqueueExposure(
          u,
          (0, r._createConfigExposure)(this._user, m, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: m }),
        m
      );
    }
    _getLayerImpl(u, o) {
      var a, d, _;
      const { result: f, details: p } = this._store.getLayer(u),
        h = (0, r._makeLayer)(u, p, f),
        g =
          (d =
            (a = this.overrideAdapter) === null || a === void 0 ? void 0 : a.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(a, h, this._user, o);
      o?.disableExposureLog && this._logger.incrementNonExposureCount(u);
      const v = (0, r._mergeOverride)(
        h,
        g,
        (_ = g?.__value) !== null && _ !== void 0 ? _ : h.__value,
        (m) => {
          o?.disableExposureLog ||
            this._enqueueExposure(
              u,
              (0, r._createLayerParameterExposure)(
                this._user,
                v,
                m,
                this._store.getExposureMapping(),
              ),
              o,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: v }), v);
    }
    _getParameterStoreImpl(u, o) {
      var a, d;
      const { result: _, details: f } = this._store.getParamStore(u);
      this._logger.incrementNonExposureCount(u);
      const p = {
          name: u,
          details: f,
          __configuration: _,
          get: (0, n._makeParamStoreGetter)(this, _, o),
        },
        h =
          (d =
            (a = this.overrideAdapter) === null || a === void 0
              ? void 0
              : a.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(a, p, o);
      return (
        h != null &&
          ((p.__configuration = h.config),
          (p.details = h.details),
          (p.get = (0, n._makeParamStoreGetter)(this, h.config, o))),
        p
      );
    }
  };
  return ((N.default = t), N);
}
var Rn;
function Jo() {
  return (
    Rn ||
      ((Rn = 1),
      (function (e) {
        var r =
            (k && k.__createBinding) ||
            (Object.create
              ? function (t, c, u, o) {
                  o === void 0 && (o = u);
                  var a = Object.getOwnPropertyDescriptor(c, u);
                  ((!a || ("get" in a ? !c.__esModule : a.writable || a.configurable)) &&
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return c[u];
                      },
                    }),
                    Object.defineProperty(t, o, a));
                }
              : function (t, c, u, o) {
                  (o === void 0 && (o = u), (t[o] = c[u]));
                }),
          s =
            (k && k.__exportStar) ||
            function (t, c) {
              for (var u in t)
                u !== "default" && !Object.prototype.hasOwnProperty.call(c, u) && r(c, t, u);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const l = A(),
          n = Ko();
        ((e.StatsigClient = n.default), s(A(), e));
        const i = Object.assign((0, l._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(k)),
    k
  );
}
var Ge = {},
  Ve = {},
  On;
function Yo() {
  if (On) return Ve;
  ((On = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.initFeatureFlags = void 0));
  const e = R(),
    r = O(),
    s = Ze(),
    l = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (u) => {
      if (!u || !u.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(u).some((o) => typeof o == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (u) => (t(u), i("initFeatureFlags", { user: u.user }));
  return (
    (Ve.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      l,
      n,
      `Feature flags initialisation calls are rate limited at ${l}req/${n / 1e3}s`,
    )),
    Ve
  );
}
var Pn;
function Qo() {
  if (Pn) return Ge;
  ((Pn = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.ForgeDataAdapter = void 0));
  const e = Yo();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(l, n, i) {
      var t;
      if (l) return l;
      this.environment = ((t = this.options) === null || t === void 0 ? void 0 : t.environment) || {
        tier: "development",
      };
      const c = { ...n, statsigEnvironment: this.environment },
        u = await (0, e.initFeatureFlags)({ user: c }),
        o = {
          source: "Network",
          data: JSON.stringify(u),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = o), o);
    }
    getDataSync(l) {
      return this.cache;
    }
    async attach(l, n, i) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(l) {}
    async setDataLegacy(l) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Ge.ForgeDataAdapter = r), Ge);
}
var At = {},
  Sn;
function yi() {
  return (
    Sn ||
      ((Sn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = e.ExtensionEnvironment = void 0),
          (function (s) {
            ((s.DEVELOPMENT = "DEVELOPMENT"),
              (s.STAGING = "STAGING"),
              (s.PRODUCTION = "PRODUCTION"));
          })(e.ExtensionEnvironment || (e.ExtensionEnvironment = {})));
        var r;
        ((function (s) {
          s.USER_ACCESS = "USER_ACCESS";
        })(r || (r = {})),
          (function (s) {
            s.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(At)),
    At
  );
}
var ze = {},
  jn;
function Xo() {
  if (jn) return ze;
  ((jn = 1),
    Object.defineProperty(ze, "__esModule", { value: !0 }),
    (ze.trackFeatureFlagEvent = void 0));
  const e = R(),
    r = O(),
    s = yi(),
    l = Ze(),
    n = 500,
    i = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    c = (o) => {
      if (!o || !o.type || !o.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(o.type.toUpperCase() in s.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(o).some((a) => typeof a == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (o) => (c(o), t("trackFeatureFlagEvent", o));
  return (
    (ze.trackFeatureFlagEvent = (0, l.withRateLimiter)(
      u,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    ze
  );
}
var xn;
function Zo() {
  if (xn) return Ue;
  ((xn = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.ForgeFeatureFlags = void 0));
  const e = Jo(),
    r = Qo(),
    s = yi(),
    l = Xo();
  class n {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(t, c = {}) {
      var u;
      if (this.isInitialized()) return;
      this.dataAdapter = new r.ForgeDataAdapter();
      const o = {
        environment: { tier: c.environment || "development" },
        disableEvaluationMemoization: !1,
        loggingEnabled: e.LoggingEnabledOption.disabled,
        logLevel: e.LogLevel.None,
        dataAdapter: this.dataAdapter,
      };
      ((this.eventProps.environment =
        (u = o.environment) === null || u === void 0 ? void 0 : u.tier),
        (this.client = new e.StatsigClient(this.CLIENT_KEY, this.convertUser(t), o)),
        await this.client.initializeAsync(),
        (this.initialized = !0));
    }
    checkFlag(t) {
      if (!this.isInitialized() || !this.client)
        throw (
          this.sendCheckFlagEvent(t, !1),
          new Error("ForgeFeatureFlags not initialized. Call initialize() first.")
        );
      return (this.sendCheckFlagEvent(t, !0), this.client.checkGate(t, { disableExposureLog: !0 }));
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
    convertUser(t) {
      return {
        userID: t.userId,
        custom: { ...(t.custom || {}), ...(t.attributes || {}) },
        customIDs: t.identifiers || {},
      };
    }
    sendCheckFlagEvent(t, c) {
      const u = {
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: c,
        },
      };
      (0, l.trackFeatureFlagEvent)(u);
    }
  }
  return ((Ue.ForgeFeatureFlags = n), Ue);
}
var Cn;
function $o() {
  return (
    Cn ||
      ((Cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Zo();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(Ft)),
    Ft
  );
}
var In;
function es() {
  return (
    In ||
      ((In = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = P;
        var s = Fi();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          r.__exportStar(He(), e),
          r.__exportStar(Di(), e),
          r.__exportStar(tt(), e),
          r.__exportStar(_o(), e),
          r.__exportStar(po(), e),
          r.__exportStar(yo(), e),
          r.__exportStar(wo(), e),
          r.__exportStar(Eo(), e),
          r.__exportStar(Po(), e),
          r.__exportStar(Co(), e),
          (e.i18n = r.__importStar(Io())),
          r.__exportStar(qo(), e),
          r.__exportStar(Go(), e),
          r.__exportStar($o(), e));
      })(it)),
    it
  );
}
var We = es();
const ts = () => {
    const [e, r] = I.useState(null),
      [s, l] = I.useState(null),
      [n, i] = I.useState(!1),
      [t, c] = I.useState(null),
      [u, o] = I.useState(null),
      [a, d] = I.useState(null),
      [_, f] = I.useState(null),
      [p, h] = I.useState({ userName: "", product: "" }),
      g = async (w) => {
        (i(!0), c(null));
        try {
          const E = await We.invoke("fetch", { action: w });
          r(E);
        } catch (E) {
          c(E instanceof Error ? E.message : "Unknown error occurred");
        } finally {
          i(!1);
        }
      },
      v = async () => {
        if (!p.userName.trim() || !p.product.trim()) {
          o("Please fill in all fields");
          return;
        }
        (i(!0), o(null));
        try {
          (await We.invoke("insertUserOrOrder", p), o(null), h({ userName: "", product: "" }));
        } catch (w) {
          o(w instanceof Error ? w.message : "Failed to insert user/order");
        } finally {
          i(!1);
        }
      },
      m = async () => {
        (i(!0), d(null));
        try {
          (await We.invoke("clearCache"), d(null));
        } catch (w) {
          d(w instanceof Error ? w.message : "Failed to clear cache");
        } finally {
          i(!1);
        }
      },
      b = async () => {
        (i(!0), f(null));
        try {
          const w = await We.invoke("runPerformanceAnalyze");
          (l(w?.DML), f(null));
        } catch (w) {
          f(w instanceof Error ? w.message : "Failed to run performance analysis");
        } finally {
          i(!1);
        }
      };
    return y.jsxs("div", {
      style: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
      },
      children: [
        y.jsx("h1", {
          style: { color: "#0052CC", marginBottom: "30px" },
          children: "🚀 Forge SQL ORM Cache Demo",
        }),
        y.jsxs("div", {
          style: {
            padding: "20px",
            backgroundColor: "#F4F5F7",
            borderRadius: "8px",
            marginBottom: "30px",
          },
          children: [
            y.jsx("h3", {
              style: { color: "#172B4D", marginBottom: "15px" },
              children: "How it works:",
            }),
            y.jsxs("ul", {
              style: { color: "#6B778C", lineHeight: "1.6" },
              children: [
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Non-Cached Query:" }),
                    " Executes a fresh query with 1-second sleep every time",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Cached Query:" }),
                    " Uses global cache - first execution takes time, subsequent calls are instant",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Timeout:" }),
                    " Tests query timeout behavior with 10-second sleep",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Out of Memory:" }),
                    " Tests memory limit with large data operations",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Add User & Order:" }),
                    " Uses ",
                    y.jsx("code", { children: "executeWithCacheContext" }),
                    " to automatically clear cache after operations",
                  ],
                }),
                y.jsxs("li", {
                  children: [
                    y.jsx("strong", { children: "Cache Management:" }),
                    " Clear cache manually or run performance analysis",
                  ],
                }),
              ],
            }),
          ],
        }),
        y.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            y.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Query Performance Test",
            }),
            y.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.",
            }),
            y.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "10px",
                marginBottom: "20px",
              },
              children: [
                y.jsx("button", {
                  onClick: () => g("slow"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "🚫 Non-Cached",
                }),
                y.jsx("button", {
                  onClick: () => g("cacheable"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#36B37E",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "✅ Cached",
                }),
                y.jsx("button", {
                  onClick: () => g("timeout"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "⏱️ Timeout",
                }),
                y.jsx("button", {
                  onClick: () => g("outOfMemory"),
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#C43E37",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "💥 Out of Memory",
                }),
              ],
            }),
            t &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "20px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", t],
              }),
            e &&
              !t &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginTop: "10px",
                },
                children: [
                  y.jsxs("h3", {
                    style: { margin: "0 0 10px 0", color: "#172B4D" },
                    children: ["Query Results (", e.times, "ms)"],
                  }),
                  y.jsxs("div", {
                    style: { fontSize: "14px", color: "#6B778C", marginBottom: "10px" },
                    children: ["Found ", e.rows.length, " records"],
                  }),
                  y.jsx("div", {
                    style: { maxHeight: "200px", overflowY: "auto" },
                    children: y.jsxs("table", {
                      style: { width: "100%", borderCollapse: "collapse" },
                      children: [
                        y.jsx("thead", {
                          children: y.jsxs("tr", {
                            style: { backgroundColor: "#E9ECF0" },
                            children: [
                              y.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User ID",
                              }),
                              y.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "User Name",
                              }),
                              y.jsx("th", {
                                style: {
                                  padding: "8px",
                                  textAlign: "left",
                                  border: "1px solid #ddd",
                                },
                                children: "Product",
                              }),
                              y.jsx("th", {
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
                        y.jsx("tbody", {
                          children: e.rows.map((w, E) =>
                            y.jsxs(
                              "tr",
                              {
                                children: [
                                  y.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userId,
                                  }),
                                  y.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.userName,
                                  }),
                                  y.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children: w.product || "N/A",
                                  }),
                                  y.jsx("td", {
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
        y.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            y.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Add User & Order",
            }),
            y.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children:
                "Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.",
            }),
            y.jsxs("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
                marginBottom: "20px",
              },
              children: [
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User ID (optional):",
                    }),
                    y.jsx("input", {
                      type: "number",
                      value: p.userId || "",
                      onChange: (w) =>
                        h({ ...p, userId: w.target.value ? parseInt(w.target.value) : void 0 }),
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
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "User Name:",
                    }),
                    y.jsx("input", {
                      type: "text",
                      value: p.userName,
                      onChange: (w) => h({ ...p, userName: w.target.value }),
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
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product ID (optional):",
                    }),
                    y.jsx("input", {
                      type: "number",
                      value: p.productId || "",
                      onChange: (w) =>
                        h({ ...p, productId: w.target.value ? parseInt(w.target.value) : void 0 }),
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
                y.jsxs("div", {
                  children: [
                    y.jsx("label", {
                      style: {
                        display: "block",
                        marginBottom: "5px",
                        fontWeight: "bold",
                        color: "#172B4D",
                      },
                      children: "Product:",
                    }),
                    y.jsx("input", {
                      type: "text",
                      value: p.product,
                      onChange: (w) => h({ ...p, product: w.target.value }),
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
            y.jsx("button", {
              onClick: v,
              disabled: n,
              style: {
                padding: "12px 24px",
                backgroundColor: "#0052CC",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: n ? "not-allowed" : "pointer",
                opacity: n ? 0.6 : 1,
                fontSize: "16px",
                fontWeight: "bold",
              },
              children: n ? "Processing..." : "➕ Add User & Order",
            }),
            u &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginTop: "15px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", u],
              }),
          ],
        }),
        y.jsxs("div", {
          style: {
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          },
          children: [
            y.jsx("h2", {
              style: { color: "#172B4D", marginBottom: "20px" },
              children: "Cache Management",
            }),
            y.jsx("p", {
              style: { color: "#6B778C", marginBottom: "20px" },
              children: "Manage the cache and run performance analysis.",
            }),
            y.jsxs("div", {
              style: { display: "flex", gap: "10px", marginBottom: "15px" },
              children: [
                y.jsx("button", {
                  onClick: m,
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "🗑️ Clear Cache",
                }),
                y.jsx("button", {
                  onClick: b,
                  disabled: n,
                  style: {
                    padding: "10px 20px",
                    backgroundColor: "#FF8B00",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: n ? "not-allowed" : "pointer",
                    opacity: n ? 0.6 : 1,
                  },
                  children: n ? "Loading..." : "📊 Run Performance Analysis",
                }),
              ],
            }),
            a &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", a],
              }),
            _ &&
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                  borderRadius: "4px",
                  color: "#C62828",
                  marginBottom: "15px",
                },
                children: [y.jsx("strong", { children: "Error:" }), " ", _],
              }),
          ],
        }),
        s &&
          !_ &&
          y.jsxs("div", {
            style: {
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            },
            children: [
              y.jsx("h2", {
                style: { color: "#172B4D", marginBottom: "20px" },
                children: "Performance Analysis Results",
              }),
              y.jsxs("div", {
                style: {
                  padding: "15px",
                  backgroundColor: "#F4F5F7",
                  borderRadius: "4px",
                  marginBottom: "20px",
                },
                children: [
                  y.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      marginBottom: "20px",
                    },
                    children: [
                      y.jsxs("div", {
                        children: [y.jsx("strong", { children: "Window:" }), " ", s.window],
                      }),
                      y.jsxs("div", {
                        children: [y.jsx("strong", { children: "Top Queries:" }), " ", s.top],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("strong", { children: "Latency Threshold:" }),
                          " ",
                          s.warnThresholdMs,
                          "ms",
                        ],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("strong", { children: "Memory Threshold:" }),
                          " ",
                          (s.memoryThresholdBytes / 1024 / 1024).toFixed(1),
                          "MB",
                        ],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("strong", { children: "Generated:" }),
                          " ",
                          new Date(s.generatedAt).toLocaleString(),
                        ],
                      }),
                    ],
                  }),
                  s.rows.length > 0
                    ? y.jsxs("div", {
                        children: [
                          y.jsxs("h3", {
                            style: { margin: "0 0 15px 0", color: "#172B4D" },
                            children: ["Slow Queries Found (", s.rows.length, ")"],
                          }),
                          s.rows.map((w, E) =>
                            y.jsxs(
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
                                  y.jsxs("div", {
                                    style: {
                                      display: "grid",
                                      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                      gap: "10px",
                                      marginBottom: "15px",
                                    },
                                    children: [
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Rank:" }),
                                          " ",
                                          w.rank,
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Type:" }),
                                          " ",
                                          w.stmtType,
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Executions:" }),
                                          " ",
                                          w.execCount,
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Avg Latency:" }),
                                          " ",
                                          w.avgLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Max Latency:" }),
                                          " ",
                                          w.maxLatencyMs.toFixed(2),
                                          "ms",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Avg Memory:" }),
                                          " ",
                                          w.avgMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Max Memory:" }),
                                          " ",
                                          w.maxMemMB.toFixed(2),
                                          "MB",
                                        ],
                                      }),
                                      y.jsxs("div", {
                                        children: [
                                          y.jsx("strong", { children: "Plan Cache:" }),
                                          " ",
                                          w.planInCache ? "Yes" : "No",
                                        ],
                                      }),
                                    ],
                                  }),
                                  y.jsxs("div", {
                                    style: { marginBottom: "10px" },
                                    children: [
                                      y.jsx("strong", { children: "SQL Query:" }),
                                      y.jsx("pre", {
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
                                  y.jsxs("details", {
                                    style: { marginTop: "10px" },
                                    children: [
                                      y.jsx("summary", {
                                        style: {
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                          color: "#0052CC",
                                        },
                                        children: "View Execution Plan",
                                      }),
                                      y.jsx("pre", {
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
                    : y.jsxs("div", {
                        style: {
                          padding: "20px",
                          textAlign: "center",
                          color: "#36B37E",
                          backgroundColor: "#E8F5E8",
                          borderRadius: "4px",
                        },
                        children: [
                          y.jsx("strong", { children: "✅ No slow queries found!" }),
                          y.jsx("br", {}),
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
  rs = document.getElementById("root"),
  ns = bi.createRoot(rs),
  Fn = () => {
    ns.render(y.jsx(Si.StrictMode, { children: y.jsx(ts, {}) }));
  };
We.view.theme
  .enable()
  .then(() => {
    Fn();
  })
  .catch((e) => {
    (console.error(e.message), Fn());
  });
