const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-BCqYYRNo.js", "./lodash-vendor-Dv-o4pqD.js"]),
) => i.map((i) => d[i]);
import { r as Mn, c as bi } from "./react-dom-vendor-BXC0oJZi.js";
import { g as wi, a as Ei, r as Oi } from "./lodash-vendor-Dv-o4pqD.js";
import { r as M } from "./client-core-vendor-CP5_oPjo.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const t of i.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && a(t);
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
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = s(n);
    fetch(n.href, i);
  }
})();
var rt = { exports: {} },
  z = {};
var kt;
function Ri() {
  if (kt) return z;
  kt = 1;
  var e = Mn(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(c, l, o) {
    var u,
      d = {},
      h = null,
      f = null;
    (o !== void 0 && (h = "" + o),
      l.key !== void 0 && (h = "" + l.key),
      l.ref !== void 0 && (f = l.ref));
    for (u in l) a.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (c && c.defaultProps) for (u in ((l = c.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: r, type: c, key: h, ref: f, props: d, _owner: n.current };
  }
  return ((z.Fragment = s), (z.jsx = t), (z.jsxs = t), z);
}
var Ut;
function Si() {
  return (Ut || ((Ut = 1), (rt.exports = Ri())), rt.exports);
}
var b = Si(),
  ze = Mn();
const Pi = wi(ze);
var nt = {},
  qt = function (e, r) {
    return (
      (qt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (s, a) {
            s.__proto__ = a;
          }) ||
        function (s, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (s[n] = a[n]);
        }),
      qt(e, r)
    );
  };
function qn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  qt(e, r);
  function s() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
}
var Je = function () {
  return (
    (Je =
      Object.assign ||
      function (r) {
        for (var s, a = 1, n = arguments.length; a < n; a++) {
          s = arguments[a];
          for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i]);
        }
        return r;
      }),
    Je.apply(this, arguments)
  );
};
function Fn(e, r) {
  var s = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (s[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      r.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (s[a[n]] = e[a[n]]);
  return s;
}
function Dn(e, r, s, a) {
  var n = arguments.length,
    i = n < 3 ? r : a === null ? (a = Object.getOwnPropertyDescriptor(r, s)) : a,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, s, a);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (t = e[c]) && (i = (n < 3 ? t(i) : n > 3 ? t(r, s, i) : t(r, s)) || i);
  return (n > 3 && i && Object.defineProperty(r, s, i), i);
}
function Bn(e, r) {
  return function (s, a) {
    r(s, a, e);
  };
}
function Tn(e, r, s, a, n, i) {
  function t(v) {
    if (v !== void 0 && typeof v != "function") throw new TypeError("Function expected");
    return v;
  }
  for (
    var c = a.kind,
      l = c === "getter" ? "get" : c === "setter" ? "set" : "value",
      o = !r && e ? (a.static ? e : e.prototype) : null,
      u = r || (o ? Object.getOwnPropertyDescriptor(o, a.name) : {}),
      d,
      h = !1,
      f = s.length - 1;
    f >= 0;
    f--
  ) {
    var p = {};
    for (var _ in a) p[_] = _ === "access" ? {} : a[_];
    for (var _ in a.access) p.access[_] = a.access[_];
    p.addInitializer = function (v) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(v || null));
    };
    var g = (0, s[f])(c === "accessor" ? { get: u.get, set: u.set } : u[l], p);
    if (c === "accessor") {
      if (g === void 0) continue;
      if (g === null || typeof g != "object") throw new TypeError("Object expected");
      ((d = t(g.get)) && (u.get = d),
        (d = t(g.set)) && (u.set = d),
        (d = t(g.init)) && n.unshift(d));
    } else (d = t(g)) && (c === "field" ? n.unshift(d) : (u[l] = d));
  }
  (o && Object.defineProperty(o, a.name, u), (h = !0));
}
function kn(e, r, s) {
  for (var a = arguments.length > 2, n = 0; n < r.length; n++)
    s = a ? r[n].call(e, s) : r[n].call(e);
  return a ? s : void 0;
}
function Un(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function xn(e, r, s) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: s ? "".concat(s, " ", r) : r })
  );
}
function Ln(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Nn(e, r, s, a) {
  function n(i) {
    return i instanceof s
      ? i
      : new s(function (t) {
          t(i);
        });
  }
  return new (s || (s = Promise))(function (i, t) {
    function c(u) {
      try {
        o(a.next(u));
      } catch (d) {
        t(d);
      }
    }
    function l(u) {
      try {
        o(a.throw(u));
      } catch (d) {
        t(d);
      }
    }
    function o(u) {
      u.done ? i(u.value) : n(u.value).then(c, l);
    }
    o((a = a.apply(e, r || [])).next());
  });
}
function Gn(e, r) {
  var s = {
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
    return function (u) {
      return l([o, u]);
    };
  }
  function l(o) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), o[0] && (s = 0)), s; )
      try {
        if (
          ((a = 1),
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
      } catch (u) {
        ((o = [6, u]), (n = 0));
      } finally {
        a = i = 0;
      }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
var Ye = Object.create
  ? function (e, r, s, a) {
      a === void 0 && (a = s);
      var n = Object.getOwnPropertyDescriptor(r, s);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[s];
          },
        }),
        Object.defineProperty(e, a, n));
    }
  : function (e, r, s, a) {
      (a === void 0 && (a = s), (e[a] = r[s]));
    };
function Vn(e, r) {
  for (var s in e) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && Ye(r, e, s);
}
function Qe(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    s = r && e[r],
    a = 0;
  if (s) return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && a >= e.length && (e = void 0), { value: e && e[a++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bt(e, r) {
  var s = typeof Symbol == "function" && e[Symbol.iterator];
  if (!s) return e;
  var a = s.call(e),
    n,
    i = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = a.next()).done; ) i.push(n.value);
  } catch (c) {
    t = { error: c };
  } finally {
    try {
      n && !n.done && (s = a.return) && s.call(a);
    } finally {
      if (t) throw t.error;
    }
  }
  return i;
}
function zn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Bt(arguments[r]));
  return e;
}
function Wn() {
  for (var e = 0, r = 0, s = arguments.length; r < s; r++) e += arguments[r].length;
  for (var a = Array(e), n = 0, r = 0; r < s; r++)
    for (var i = arguments[r], t = 0, c = i.length; t < c; t++, n++) a[n] = i[t];
  return a;
}
function Hn(e, r, s) {
  if (s || arguments.length === 2)
    for (var a = 0, n = r.length, i; a < n; a++)
      (i || !(a in r)) && (i || (i = Array.prototype.slice.call(r, 0, a)), (i[a] = r[a]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function G(e) {
  return this instanceof G ? ((this.v = e), this) : new G(e);
}
function Kn(e, r, s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var a = s.apply(e, r || []),
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
    a[f] &&
      ((n[f] = function (_) {
        return new Promise(function (g, v) {
          i.push([f, _, g, v]) > 1 || l(f, _);
        });
      }),
      p && (n[f] = p(n[f])));
  }
  function l(f, p) {
    try {
      o(a[f](p));
    } catch (_) {
      h(i[0][3], _);
    }
  }
  function o(f) {
    f.value instanceof G ? Promise.resolve(f.value.v).then(u, d) : h(i[0][2], f);
  }
  function u(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function h(f, p) {
    (f(p), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function Jn(e) {
  var r, s;
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
          return (s = !s) ? { value: G(e[n](t)), done: !1 } : i ? i(t) : t;
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
      a("next"),
      a("throw"),
      a("return"),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s);
  function a(i) {
    s[i] =
      e[i] &&
      function (t) {
        return new Promise(function (c, l) {
          ((t = e[i](t)), n(c, l, t.done, t.value));
        });
      };
  }
  function n(i, t, c, l) {
    Promise.resolve(l).then(function (o) {
      i({ value: o, done: c });
    }, t);
  }
}
function Yn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var Ci = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  Ft = function (e) {
    return (
      (Ft =
        Object.getOwnPropertyNames ||
        function (r) {
          var s = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (s[s.length] = a);
          return s;
        }),
      Ft(e)
    );
  };
function Xn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var s = Ft(e), a = 0; a < s.length; a++) s[a] !== "default" && Ye(r, e, s[a]);
  return (Ci(r, e), r);
}
function Zn(e) {
  return e && e.__esModule ? e : { default: e };
}
function $n(e, r, s, a) {
  if (s === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return s === "m" ? a : s === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function ei(e, r, s, a, n) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? n.call(e, s) : n ? (n.value = s) : r.set(e, s), s);
}
function ti(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function ri(e, r, s) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var a, n;
    if (s) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      a = r[Symbol.asyncDispose];
    }
    if (a === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((a = r[Symbol.dispose]), s && (n = a));
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
      e.stack.push({ value: r, dispose: a, async: s }));
  } else s && e.stack.push({ async: !0 });
  return r;
}
var Ii =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, s) {
        var a = new Error(s);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function ni(e) {
  function r(i) {
    ((e.error = e.hasError ? new Ii(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var s,
    a = 0;
  function n() {
    for (; (s = e.stack.pop()); )
      try {
        if (!s.async && a === 1) return ((a = 0), e.stack.push(s), Promise.resolve().then(n));
        if (s.dispose) {
          var i = s.dispose.call(s.value);
          if (s.async)
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
function ii(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (s, a, n, i, t) {
        return a
          ? r
            ? ".jsx"
            : ".js"
          : n && (!i || !t)
            ? s
            : n + i + "." + t.toLowerCase() + "js";
      })
    : e;
}
const Ai = {
    __extends: qn,
    __assign: Je,
    __rest: Fn,
    __decorate: Dn,
    __param: Bn,
    __esDecorate: Tn,
    __runInitializers: kn,
    __propKey: Un,
    __setFunctionName: xn,
    __metadata: Ln,
    __awaiter: Nn,
    __generator: Gn,
    __createBinding: Ye,
    __exportStar: Vn,
    __values: Qe,
    __read: Bt,
    __spread: zn,
    __spreadArrays: Wn,
    __spreadArray: Hn,
    __await: G,
    __asyncGenerator: Kn,
    __asyncDelegator: Jn,
    __asyncValues: Qn,
    __makeTemplateObject: Yn,
    __importStar: Xn,
    __importDefault: Zn,
    __classPrivateFieldGet: $n,
    __classPrivateFieldSet: ei,
    __classPrivateFieldIn: ti,
    __addDisposableResource: ri,
    __disposeResources: ni,
    __rewriteRelativeImportExtension: ii,
  },
  ji = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: ri,
        get __assign() {
          return Je;
        },
        __asyncDelegator: Jn,
        __asyncGenerator: Kn,
        __asyncValues: Qn,
        __await: G,
        __awaiter: Nn,
        __classPrivateFieldGet: $n,
        __classPrivateFieldIn: ti,
        __classPrivateFieldSet: ei,
        __createBinding: Ye,
        __decorate: Dn,
        __disposeResources: ni,
        __esDecorate: Tn,
        __exportStar: Vn,
        __extends: qn,
        __generator: Gn,
        __importDefault: Zn,
        __importStar: Xn,
        __makeTemplateObject: Yn,
        __metadata: Ln,
        __param: Bn,
        __propKey: Un,
        __read: Bt,
        __rest: Fn,
        __rewriteRelativeImportExtension: ii,
        __runInitializers: kn,
        __setFunctionName: xn,
        __spread: zn,
        __spreadArray: Hn,
        __spreadArrays: Wn,
        __values: Qe,
        default: Ai,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S = Ei(ji);
var W = {},
  xt;
function Mi() {
  return (
    xt ||
      ((xt = 1),
      Object.defineProperty(W, "__esModule", { value: !0 }),
      (W.NavigationTarget = void 0),
      (W.NavigationTarget = {
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
    W
  );
}
var it = {},
  ot = {},
  H = {},
  K = {},
  Lt;
function R() {
  if (Lt) return K;
  ((Lt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.BridgeAPIError = void 0));
  class e extends Error {}
  return ((K.BridgeAPIError = e), K);
}
var Nt;
function w() {
  if (Nt) return H;
  ((Nt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.getCallBridge = void 0));
  const e = R();
  function r(a) {
    return !!a?.callBridge;
  }
  const s = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((H.getCallBridge = s), H);
}
var J = {},
  Gt;
function Xe() {
  if (Gt) return J;
  ((Gt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.withRateLimiter = void 0));
  const e = R(),
    r = (s, a, n, i) => {
      let t = Date.now(),
        c = 0;
      return async (...l) => {
        const o = Date.now();
        if ((o - t > n && ((t = o), (c = 0)), c >= a))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((c = c + 1), s(...l));
      };
    };
  return ((J.withRateLimiter = r), J);
}
var Vt;
function qi() {
  return (
    Vt ||
      ((Vt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = w(),
          s = R(),
          a = Xe(),
          n = (0, r.getCallBridge)(),
          i = (l) => {
            if (l && Object.values(l).some((o) => typeof o == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, o) => {
            if (typeof l != "string") throw new s.BridgeAPIError("functionKey must be a string!");
            return (i(o), n("invoke", { functionKey: l, payload: o }));
          };
        e.invoke = (0, a.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function c() {
          return e.invoke;
        }
        e.makeInvoke = c;
      })(ot)),
    ot
  );
}
var zt;
function We() {
  return (
    zt ||
      ((zt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(qi(), e));
      })(it)),
    it
  );
}
var st = {},
  Q = {},
  at = {},
  Wt;
function oi() {
  return (
    Wt ||
      ((Wt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = w(),
          s = R(),
          a = Xe(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (d) {
          ((d.REMOTE = "Remote"), (d.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const c = (0, r.getCallBridge)(),
          l = (d) => {
            if (d && Object.values(d).some((h) => typeof h == "function"))
              throw new s.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          o = (d) => async (h) => {
            l(h);
            const f = { ...h, invokeType: `ui-${d.toLowerCase()}-fetch` },
              p = await c("invoke", f),
              { success: _, payload: g, error: v } = p ?? {},
              y = { ...(_ ? g : v) };
            if (y && y.headers)
              for (const m in y.headers)
                Array.isArray(y.headers[m]) && (y.headers[m] = y.headers[m].join(","));
            return y;
          },
          u = (d) => {
            const h = o(d);
            return (0, a.withRateLimiter)(
              h,
              n,
              t,
              `${d} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = u;
      })(at)),
    at
  );
}
var Ht;
function Fi() {
  if (Ht) return Q;
  ((Ht = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.invokeRemote = void 0));
  const e = oi(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(s);
  return ((Q.invokeRemote = r), Q);
}
var Y = {},
  Kt;
function Di() {
  if (Kt) return Y;
  ((Kt = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.invokeService = void 0));
  const e = oi(),
    r = (s) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(s);
  return ((Y.invokeService = r), Y);
}
var Jt;
function Bi() {
  return (
    Jt ||
      ((Jt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(Fi(), e), r.__exportStar(Di(), e));
      })(st)),
    st
  );
}
var ut = {},
  X = {},
  Z = {},
  Qt;
function Ti() {
  if (Qt) return Z;
  ((Qt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.submit = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await s("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((Z.submit = a), Z);
}
var $ = {},
  Yt;
function ki() {
  if (Yt) return $;
  ((Yt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.close = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await s("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return (($.close = a), $);
}
var ee = {},
  Xt;
function Ui() {
  if (Xt) return ee;
  ((Xt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.open = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async () => {
      try {
        if ((await s("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((ee.open = a), ee);
}
var te = {},
  Zt;
function xi() {
  if (Zt) return te;
  ((Zt = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.refresh = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await s("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((te.refresh = a), te);
}
var re = {},
  $t;
function Li() {
  if ($t) return re;
  (($t = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.createHistory = void 0));
  const r = (0, w().getCallBridge)(),
    s = async () => {
      const a = await r("createHistory");
      return (
        a.listen((n) => {
          a.location = n;
        }),
        a
      );
    };
  return ((re.createHistory = s), re);
}
var ne = {},
  lt = {},
  I = {},
  er;
function si() {
  return (
    er ||
      ((er = 1),
      Object.defineProperty(I, "__esModule", { value: !0 }),
      (I.FORGE_SUPPORTED_LOCALE_CODES = I.I18N_BUNDLE_FOLDER_NAME = I.I18N_INFO_FILE_NAME = void 0),
      (I.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (I.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (I.FORGE_SUPPORTED_LOCALE_CODES = [
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
    I
  );
}
var F = {},
  tr;
function Ni() {
  if (tr) return F;
  ((tr = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.TranslationsGetter = F.TranslationGetterError = void 0));
  const e = (a, n) => {
    a.includes(n) || a.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  F.TranslationGetterError = r;
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
        let l;
        return (
          t.locales.includes(n) && (l = await this.getTranslationResource(n)),
          { translations: l ?? null, locale: n }
        );
      }
      for (const l of this.getLocaleLookupOrder(n, t)) {
        const o = await this.getTranslationResource(l);
        if (o) return { translations: o, locale: l };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const i = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, i);
      return await Promise.all(
        t.map(async (c) => {
          const l = await this.getTranslationResource(c);
          return { locale: c, translations: l };
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
        l = [n],
        o = c[n];
      return (
        o && Array.isArray(o) && o.length > 0 && l.push(...o),
        e(l, i.fallback.default),
        l.filter((u) => t.includes(u))
      );
    }
  }
  return ((F.TranslationsGetter = s), F);
}
var ie = {},
  ct = {},
  rr;
function ai() {
  return (
    rr ||
      ((rr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const s = S.__importDefault(Oi()),
          a = (i, t, c) => {
            const l = i[c];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = a;
        const n = (i, t) => {
          let c = i[t];
          if (!c) {
            const l = t.split(".");
            l.length > 1 && (c = (0, s.default)(i, l, null));
          }
          return typeof c == "string" ? c : null;
        };
        e.getTranslationValueFromContent = n;
      })(ct)),
    ct
  );
}
var nr;
function Gi() {
  if (nr) return ie;
  ((nr = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.Translator = void 0));
  const e = ai();
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
  return ((ie.Translator = r), ie);
}
var oe = {},
  ir;
function Vi() {
  if (ir) return oe;
  ((ir = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.ensureLocale = void 0));
  const e = si(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    s = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    a = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, t) => {
        const [c] = t.split("-");
        return (i[c] || (i[c] = t), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const t = i.replace("_", "-");
      return r.has(t) ? t : (a[t] ?? s[t] ?? null);
    };
  return ((oe.ensureLocale = n), oe);
}
var dt = {},
  or;
function zi() {
  return (
    or ||
      ((or = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (o) => typeof o == "object" && o !== null && !Array.isArray(o),
          s = (o) => typeof o?.i18n == "string",
          a = (o) => o.startsWith("connect-"),
          n = (o) => o.startsWith("core:"),
          i = (o) => {
            const u = new Set(),
              d = (h, f) =>
                !r(h) || u.has(h)
                  ? []
                  : (u.add(h),
                    Object.entries(h).flatMap(([p, _]) => {
                      const g = [...f, p];
                      return s(_)
                        ? [{ propertyPath: g, key: _.i18n }]
                        : Array.isArray(_)
                          ? _.flatMap((v) => d(v, g))
                          : d(_, g);
                    }));
            return d(o, []);
          },
          t = (o) =>
            Object.entries(o).flatMap(([u, d]) =>
              !a(u) && !n(u) && d && Array.isArray(d) && d.length > 0 ? d.map((h) => [h, u]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const c = (o) => {
          const u = new Set();
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const h = i(d[0]);
            for (const { key: f } of h) u.add(f);
          }
          return u.size > 0 ? Array.from(u) : [];
        };
        e.extractI18nKeysFromModules = c;
        const l = (o) => {
          const u = [];
          for (const d of (0, e.getI18nSupportedModuleEntries)(o)) {
            const h = i(d[0]);
            for (const f of h) u.push({ moduleName: d[1], ...f });
          }
          return u;
        };
        e.extractI18nPropertiesFromModules = l;
      })(dt)),
    dt
  );
}
var ft = {},
  sr;
function Wi() {
  return (sr || ((sr = 1), Object.defineProperty(ft, "__esModule", { value: !0 })), ft);
}
var ar;
function ui() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = S;
        (r.__exportStar(si(), e),
          r.__exportStar(Ni(), e),
          r.__exportStar(Gi(), e),
          r.__exportStar(Vi(), e));
        var s = ai();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return s.getTranslationValue;
          },
        });
        var a = zi();
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
          r.__exportStar(Wi(), e));
      })(lt)),
    lt
  );
}
var ur;
function Hi() {
  if (ur) return ne;
  ((ur = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.getContext = void 0));
  const e = w(),
    r = ui(),
    s = (0, e.getCallBridge)(),
    a = async () => {
      var n;
      const i = await s("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((ne.getContext = a), ne);
}
var se = {},
  lr;
function Ki() {
  if (lr) return se;
  ((lr = 1),
    Object.defineProperty(se, "__esModule", { value: !0 }),
    (se.changeWindowTitle = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        await s("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((se.changeWindowTitle = a), se);
}
var ae = {},
  cr;
function Ji() {
  if (cr) return ae;
  ((cr = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.theme = void 0));
  const r = (0, w().getCallBridge)();
  return ((ae.theme = { enable: () => r("enableTheming") }), ae);
}
var ue = {},
  le = {},
  _t = {},
  D = {},
  dr;
function li() {
  if (dr) return D;
  ((dr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.blobToBase64 = D.base64ToBlob = void 0));
  const e = (s, a) => {
    if (!s) return null;
    const n = s.includes(";base64") ? s.split(",")[1] : s,
      i = atob(n),
      t = new Array(i.length);
    for (let l = 0; l < i.length; l++) t[l] = i.charCodeAt(l);
    const c = new Uint8Array(t);
    return new Blob([c], { type: a });
  };
  D.base64ToBlob = e;
  const r = (s) =>
    new Promise((a, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        a(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(s));
    });
  return ((D.blobToBase64 = r), D);
}
var fr;
function Qi() {
  return (
    fr ||
      ((fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = li(),
          s = (o) => {
            if (
              typeof o != "object" ||
              o === null ||
              Object.prototype.toString.call(o) !== "[object Object]"
            )
              return !1;
            const u = Object.getPrototypeOf(o);
            if (u === null) return !0;
            const d = Object.prototype.hasOwnProperty.call(u, "constructor") && u.constructor;
            return (
              typeof d == "function" &&
              d instanceof d &&
              Function.prototype.call(d) === Function.prototype.call(o)
            );
          },
          a = async (o) => ({ data: await (0, r.blobToBase64)(o), type: o.type }),
          n = (o) => (0, r.base64ToBlob)(o.data, o.type),
          i = async (o) => {
            if (o instanceof Blob) return { ...(await a(o)), __isBlobData: !0 };
            if (Array.isArray(o))
              return Promise.all(o.map((u) => (0, e.serialiseBlobsInPayload)(u)));
            if (o && s(o)) {
              const u = await Promise.all(
                Object.entries(o).map(async ([d, h]) => [
                  d,
                  await (0, e.serialiseBlobsInPayload)(h),
                ]),
              );
              return Object.fromEntries(u);
            }
            return o;
          };
        e.serialiseBlobsInPayload = i;
        const t = (o) => {
          if (o && s(o) && "__isBlobData" in o) {
            const u = o;
            return n({ data: u.data, type: u.type });
          }
          if (Array.isArray(o)) return o.map((u) => (0, e.deserialiseBlobsInPayload)(u));
          if (o && s(o)) {
            const u = {};
            for (const [d, h] of Object.entries(o)) u[d] = (0, e.deserialiseBlobsInPayload)(h);
            return u;
          }
          return o;
        };
        e.deserialiseBlobsInPayload = t;
        const c = (o) =>
          o instanceof Blob
            ? !0
            : Array.isArray(o)
              ? o.some((u) => (0, e.containsBlobs)(u))
              : o && s(o)
                ? Object.values(o).some((u) => (0, e.containsBlobs)(u))
                : !1;
        e.containsBlobs = c;
        const l = (o) =>
          o && s(o) && "__isBlobData" in o
            ? !0
            : Array.isArray(o)
              ? o.some((u) => (0, e.containsSerialisedBlobs)(u))
              : o && s(o)
                ? Object.values(o).some((u) => (0, e.containsSerialisedBlobs)(u))
                : !1;
        e.containsSerialisedBlobs = l;
      })(_t)),
    _t
  );
}
var _r;
function ci() {
  if (_r) return le;
  ((_r = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.events = void 0));
  const e = w(),
    r = Qi(),
    s = (0, e.getCallBridge)(),
    a = async (i, t) => {
      let c = t;
      return (
        (0, r.containsBlobs)(t) && (c = await (0, r.serialiseBlobsInPayload)(t)),
        s("emit", { event: i, payload: c })
      );
    },
    n = (i, t) =>
      s("on", {
        event: i,
        callback: (l) => {
          let o = l;
          return (
            (0, r.containsSerialisedBlobs)(l) && (o = (0, r.deserialiseBlobsInPayload)(l)),
            t(o)
          );
        },
      });
  return ((le.events = { emit: a, on: n }), le);
}
var gr;
function Yi() {
  if (gr) return ue;
  ((gr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.emitReadyEvent = void 0));
  const e = ci(),
    r = gi(),
    s = w(),
    a = R(),
    n = (0, s.getCallBridge)(),
    i = "EXTENSION_READY",
    t = async () => {
      const c = await r.view.getContext();
      await e.events.emit(i, { localId: c.localId });
      try {
        if ((await n("emitReadyEvent")) === !1)
          throw new a.BridgeAPIError("Unable to emit ready event.");
      } catch {
        throw new a.BridgeAPIError("Unable to emit ready event.");
      }
    };
  return ((ue.emitReadyEvent = t), ue);
}
const Xi = "modulepreload",
  Zi = function (e, r) {
    return new URL(e, r).href;
  },
  hr = {},
  $i = function (r, s, a) {
    let n = Promise.resolve();
    if (s && s.length > 0) {
      let o = function (u) {
        return Promise.all(
          u.map((d) =>
            Promise.resolve(d).then(
              (h) => ({ status: "fulfilled", value: h }),
              (h) => ({ status: "rejected", reason: h }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        l = c?.nonce || c?.getAttribute("nonce");
      n = o(
        s.map((u) => {
          if (((u = Zi(u, a)), u in hr)) return;
          hr[u] = !0;
          const d = u.endsWith(".css"),
            h = d ? '[rel="stylesheet"]' : "";
          if (a)
            for (let p = t.length - 1; p >= 0; p--) {
              const _ = t[p];
              if (_.href === u && (!d || _.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${h}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = d ? "stylesheet" : Xi),
            d || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = u),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            d)
          )
            return new Promise((p, _) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${u}`))));
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
var ce = {},
  gt = {},
  de = {},
  He = {},
  vr;
function di() {
  if (vr) return He;
  ((vr = 1), Object.defineProperty(He, "__esModule", { value: !0 }), (He.default = s));
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
  return He;
}
var x = {},
  fe = {},
  _e = {},
  pr;
function eo() {
  if (pr) return _e;
  ((pr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((_e.default = e), _e);
}
var yr;
function Ze() {
  if (yr) return fe;
  ((yr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = r(eo());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var a = s;
  return ((fe.default = a), fe);
}
var mr;
function $e() {
  if (mr) return x;
  ((mr = 1),
    Object.defineProperty(x, "__esModule", { value: !0 }),
    (x.default = void 0),
    (x.unsafeStringify = a));
  var e = r(Ze());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const s = [];
  for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
  function a(t, c = 0) {
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
    const l = a(t, c);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var i = n;
  return ((x.default = i), x);
}
var br;
function to() {
  if (br) return de;
  ((br = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e = s(di()),
    r = $e();
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  let a,
    n,
    i = 0,
    t = 0;
  function c(o, u, d) {
    let h = (u && d) || 0;
    const f = u || new Array(16);
    o = o || {};
    let p = o.node || a,
      _ = o.clockseq !== void 0 ? o.clockseq : n;
    if (p == null || _ == null) {
      const E = o.random || (o.rng || e.default)();
      (p == null && (p = a = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        _ == null && (_ = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let g = o.msecs !== void 0 ? o.msecs : Date.now(),
      v = o.nsecs !== void 0 ? o.nsecs : t + 1;
    const y = g - i + (v - t) / 1e4;
    if (
      (y < 0 && o.clockseq === void 0 && (_ = (_ + 1) & 16383),
      (y < 0 || g > i) && o.nsecs === void 0 && (v = 0),
      v >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = g), (t = v), (n = _), (g += 122192928e5));
    const m = ((g & 268435455) * 1e4 + v) % 4294967296;
    ((f[h++] = (m >>> 24) & 255),
      (f[h++] = (m >>> 16) & 255),
      (f[h++] = (m >>> 8) & 255),
      (f[h++] = m & 255));
    const O = ((g / 4294967296) * 1e4) & 268435455;
    ((f[h++] = (O >>> 8) & 255),
      (f[h++] = O & 255),
      (f[h++] = ((O >>> 24) & 15) | 16),
      (f[h++] = (O >>> 16) & 255),
      (f[h++] = (_ >>> 8) | 128),
      (f[h++] = _ & 255));
    for (let E = 0; E < 6; ++E) f[h + E] = p[E];
    return u || (0, r.unsafeStringify)(f);
  }
  var l = c;
  return ((de.default = l), de);
}
var ge = {},
  j = {},
  he = {},
  wr;
function fi() {
  if (wr) return he;
  ((wr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = r(Ze());
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
  var a = s;
  return ((he.default = a), he);
}
var Er;
function _i() {
  if (Er) return j;
  ((Er = 1),
    Object.defineProperty(j, "__esModule", { value: !0 }),
    (j.URL = j.DNS = void 0),
    (j.default = t));
  var e = $e(),
    r = s(fi());
  function s(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function a(c) {
    c = unescape(encodeURIComponent(c));
    const l = [];
    for (let o = 0; o < c.length; ++o) l.push(c.charCodeAt(o));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  j.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  j.URL = i;
  function t(c, l, o) {
    function u(d, h, f, p) {
      var _;
      if (
        (typeof d == "string" && (d = a(d)),
        typeof h == "string" && (h = (0, r.default)(h)),
        ((_ = h) === null || _ === void 0 ? void 0 : _.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + d.length);
      if (
        (g.set(h),
        g.set(d, h.length),
        (g = o(g)),
        (g[6] = (g[6] & 15) | l),
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
      u.name = c;
    } catch {}
    return ((u.DNS = n), (u.URL = i), u);
  }
  return j;
}
var ve = {},
  Or;
function ro() {
  if (Or) return ve;
  ((Or = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  function e(f) {
    if (typeof f == "string") {
      const p = unescape(encodeURIComponent(f));
      f = new Uint8Array(p.length);
      for (let _ = 0; _ < p.length; ++_) f[_] = p.charCodeAt(_);
    }
    return r(a(n(f), f.length * 8));
  }
  function r(f) {
    const p = [],
      _ = f.length * 32,
      g = "0123456789abcdef";
    for (let v = 0; v < _; v += 8) {
      const y = (f[v >> 5] >>> (v % 32)) & 255,
        m = parseInt(g.charAt((y >>> 4) & 15) + g.charAt(y & 15), 16);
      p.push(m);
    }
    return p;
  }
  function s(f) {
    return (((f + 64) >>> 9) << 4) + 14 + 1;
  }
  function a(f, p) {
    ((f[p >> 5] |= 128 << (p % 32)), (f[s(p) - 1] = p));
    let _ = 1732584193,
      g = -271733879,
      v = -1732584194,
      y = 271733878;
    for (let m = 0; m < f.length; m += 16) {
      const O = _,
        E = g,
        C = v,
        V = y;
      ((_ = l(_, g, v, y, f[m], 7, -680876936)),
        (y = l(y, _, g, v, f[m + 1], 12, -389564586)),
        (v = l(v, y, _, g, f[m + 2], 17, 606105819)),
        (g = l(g, v, y, _, f[m + 3], 22, -1044525330)),
        (_ = l(_, g, v, y, f[m + 4], 7, -176418897)),
        (y = l(y, _, g, v, f[m + 5], 12, 1200080426)),
        (v = l(v, y, _, g, f[m + 6], 17, -1473231341)),
        (g = l(g, v, y, _, f[m + 7], 22, -45705983)),
        (_ = l(_, g, v, y, f[m + 8], 7, 1770035416)),
        (y = l(y, _, g, v, f[m + 9], 12, -1958414417)),
        (v = l(v, y, _, g, f[m + 10], 17, -42063)),
        (g = l(g, v, y, _, f[m + 11], 22, -1990404162)),
        (_ = l(_, g, v, y, f[m + 12], 7, 1804603682)),
        (y = l(y, _, g, v, f[m + 13], 12, -40341101)),
        (v = l(v, y, _, g, f[m + 14], 17, -1502002290)),
        (g = l(g, v, y, _, f[m + 15], 22, 1236535329)),
        (_ = o(_, g, v, y, f[m + 1], 5, -165796510)),
        (y = o(y, _, g, v, f[m + 6], 9, -1069501632)),
        (v = o(v, y, _, g, f[m + 11], 14, 643717713)),
        (g = o(g, v, y, _, f[m], 20, -373897302)),
        (_ = o(_, g, v, y, f[m + 5], 5, -701558691)),
        (y = o(y, _, g, v, f[m + 10], 9, 38016083)),
        (v = o(v, y, _, g, f[m + 15], 14, -660478335)),
        (g = o(g, v, y, _, f[m + 4], 20, -405537848)),
        (_ = o(_, g, v, y, f[m + 9], 5, 568446438)),
        (y = o(y, _, g, v, f[m + 14], 9, -1019803690)),
        (v = o(v, y, _, g, f[m + 3], 14, -187363961)),
        (g = o(g, v, y, _, f[m + 8], 20, 1163531501)),
        (_ = o(_, g, v, y, f[m + 13], 5, -1444681467)),
        (y = o(y, _, g, v, f[m + 2], 9, -51403784)),
        (v = o(v, y, _, g, f[m + 7], 14, 1735328473)),
        (g = o(g, v, y, _, f[m + 12], 20, -1926607734)),
        (_ = u(_, g, v, y, f[m + 5], 4, -378558)),
        (y = u(y, _, g, v, f[m + 8], 11, -2022574463)),
        (v = u(v, y, _, g, f[m + 11], 16, 1839030562)),
        (g = u(g, v, y, _, f[m + 14], 23, -35309556)),
        (_ = u(_, g, v, y, f[m + 1], 4, -1530992060)),
        (y = u(y, _, g, v, f[m + 4], 11, 1272893353)),
        (v = u(v, y, _, g, f[m + 7], 16, -155497632)),
        (g = u(g, v, y, _, f[m + 10], 23, -1094730640)),
        (_ = u(_, g, v, y, f[m + 13], 4, 681279174)),
        (y = u(y, _, g, v, f[m], 11, -358537222)),
        (v = u(v, y, _, g, f[m + 3], 16, -722521979)),
        (g = u(g, v, y, _, f[m + 6], 23, 76029189)),
        (_ = u(_, g, v, y, f[m + 9], 4, -640364487)),
        (y = u(y, _, g, v, f[m + 12], 11, -421815835)),
        (v = u(v, y, _, g, f[m + 15], 16, 530742520)),
        (g = u(g, v, y, _, f[m + 2], 23, -995338651)),
        (_ = d(_, g, v, y, f[m], 6, -198630844)),
        (y = d(y, _, g, v, f[m + 7], 10, 1126891415)),
        (v = d(v, y, _, g, f[m + 14], 15, -1416354905)),
        (g = d(g, v, y, _, f[m + 5], 21, -57434055)),
        (_ = d(_, g, v, y, f[m + 12], 6, 1700485571)),
        (y = d(y, _, g, v, f[m + 3], 10, -1894986606)),
        (v = d(v, y, _, g, f[m + 10], 15, -1051523)),
        (g = d(g, v, y, _, f[m + 1], 21, -2054922799)),
        (_ = d(_, g, v, y, f[m + 8], 6, 1873313359)),
        (y = d(y, _, g, v, f[m + 15], 10, -30611744)),
        (v = d(v, y, _, g, f[m + 6], 15, -1560198380)),
        (g = d(g, v, y, _, f[m + 13], 21, 1309151649)),
        (_ = d(_, g, v, y, f[m + 4], 6, -145523070)),
        (y = d(y, _, g, v, f[m + 11], 10, -1120210379)),
        (v = d(v, y, _, g, f[m + 2], 15, 718787259)),
        (g = d(g, v, y, _, f[m + 9], 21, -343485551)),
        (_ = i(_, O)),
        (g = i(g, E)),
        (v = i(v, C)),
        (y = i(y, V)));
    }
    return [_, g, v, y];
  }
  function n(f) {
    if (f.length === 0) return [];
    const p = f.length * 8,
      _ = new Uint32Array(s(p));
    for (let g = 0; g < p; g += 8) _[g >> 5] |= (f[g / 8] & 255) << (g % 32);
    return _;
  }
  function i(f, p) {
    const _ = (f & 65535) + (p & 65535);
    return (((f >> 16) + (p >> 16) + (_ >> 16)) << 16) | (_ & 65535);
  }
  function t(f, p) {
    return (f << p) | (f >>> (32 - p));
  }
  function c(f, p, _, g, v, y) {
    return i(t(i(i(p, f), i(g, y)), v), _);
  }
  function l(f, p, _, g, v, y, m) {
    return c((p & _) | (~p & g), f, p, v, y, m);
  }
  function o(f, p, _, g, v, y, m) {
    return c((p & g) | (_ & ~g), f, p, v, y, m);
  }
  function u(f, p, _, g, v, y, m) {
    return c(p ^ _ ^ g, f, p, v, y, m);
  }
  function d(f, p, _, g, v, y, m) {
    return c(_ ^ (p | ~g), f, p, v, y, m);
  }
  var h = e;
  return ((ve.default = h), ve);
}
var Rr;
function no() {
  if (Rr) return ge;
  ((Rr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = s(_i()),
    r = s(ro());
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ge.default = n), ge);
}
var pe = {},
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
var Pr;
function oo() {
  if (Pr) return pe;
  ((Pr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = a(io()),
    r = a(di()),
    s = $e();
  function a(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, c, l) {
    if (e.default.randomUUID && !c && !t) return e.default.randomUUID();
    t = t || {};
    const o = t.random || (t.rng || r.default)();
    if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), c)) {
      l = l || 0;
      for (let u = 0; u < 16; ++u) c[l + u] = o[u];
      return c;
    }
    return (0, s.unsafeStringify)(o);
  }
  var i = n;
  return ((pe.default = i), pe);
}
var me = {},
  be = {},
  Cr;
function so() {
  if (Cr) return be;
  ((Cr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
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
      const u = unescape(encodeURIComponent(n));
      n = [];
      for (let d = 0; d < u.length; ++d) n.push(u.charCodeAt(d));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const c = n.length / 4 + 2,
      l = Math.ceil(c / 16),
      o = new Array(l);
    for (let u = 0; u < l; ++u) {
      const d = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        d[h] =
          (n[u * 64 + h * 4] << 24) |
          (n[u * 64 + h * 4 + 1] << 16) |
          (n[u * 64 + h * 4 + 2] << 8) |
          n[u * 64 + h * 4 + 3];
      o[u] = d;
    }
    ((o[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (o[l - 1][14] = Math.floor(o[l - 1][14])),
      (o[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let u = 0; u < l; ++u) {
      const d = new Uint32Array(80);
      for (let v = 0; v < 16; ++v) d[v] = o[u][v];
      for (let v = 16; v < 80; ++v) d[v] = r(d[v - 3] ^ d[v - 8] ^ d[v - 14] ^ d[v - 16], 1);
      let h = t[0],
        f = t[1],
        p = t[2],
        _ = t[3],
        g = t[4];
      for (let v = 0; v < 80; ++v) {
        const y = Math.floor(v / 20),
          m = (r(h, 5) + e(y, f, p, _) + g + i[y] + d[v]) >>> 0;
        ((g = _), (_ = p), (p = r(f, 30) >>> 0), (f = h), (h = m));
      }
      ((t[0] = (t[0] + h) >>> 0),
        (t[1] = (t[1] + f) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
        (t[3] = (t[3] + _) >>> 0),
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
  var a = s;
  return ((be.default = a), be);
}
var Ir;
function ao() {
  if (Ir) return me;
  ((Ir = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = s(_i()),
    r = s(so());
  function s(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((me.default = n), me);
}
var we = {},
  Ar;
function uo() {
  if (Ar) return we;
  ((Ar = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((we.default = e), we);
}
var Ee = {},
  jr;
function lo() {
  if (jr) return Ee;
  ((jr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.default = void 0));
  var e = r(Ze());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function s(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var a = s;
  return ((Ee.default = a), Ee);
}
var Mr;
function co() {
  return (
    Mr ||
      ((Mr = 1),
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
              return s.default;
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
              return c.default;
            },
          }),
          Object.defineProperty(e, "version", {
            enumerable: !0,
            get: function () {
              return t.default;
            },
          }));
        var r = u(to()),
          s = u(no()),
          a = u(oo()),
          n = u(ao()),
          i = u(uo()),
          t = u(lo()),
          c = u(Ze()),
          l = u($e()),
          o = u(fi());
        function u(d) {
          return d && d.__esModule ? d : { default: d };
        }
      })(gt)),
    gt
  );
}
var qr;
function fo() {
  if (qr) return ce;
  ((qr = 1),
    Object.defineProperty(ce, "__esModule", { value: !0 }),
    (ce.createAdfRendererIframeProps = void 0));
  const e = co(),
    r = async (s, a) => {
      const n = await $i(
          () => import("./index-BCqYYRNo.js").then((u) => u.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        c = `${t}/forge-apps/adf-renderer`,
        l = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        o = () => {
          var u, d, h, f;
          const p = document.getElementById(l),
            _ = {
              type: "adf-document",
              document: (u = s.extension.macro) === null || u === void 0 ? void 0 : u.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: s.localId,
              isEditing:
                (h = (d = s.extension) === null || d === void 0 ? void 0 : d.isEditing) !== null &&
                h !== void 0
                  ? h
                  : !1,
            };
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (g) => {
                var v;
                (v = g?.iFrameResizer) === null || v === void 0 || v.resize();
              },
            },
            p || "",
          ),
            (f = p?.contentWindow) === null || f === void 0 || f.postMessage(_, t));
        };
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = "auto"), (document.body.style.height = "auto"));
        }, 200),
        { id: l, src: c, onLoad: o }
      );
    };
  return ((ce.createAdfRendererIframeProps = r), ce);
}
var Oe = {},
  Fr;
function _o() {
  if (Fr) return Oe;
  ((Fr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.onClose = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        if ((await s("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((Oe.onClose = a), Oe);
}
var Dr;
function gi() {
  if (Dr) return X;
  ((Dr = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.view = void 0));
  const e = Ti(),
    r = ki(),
    s = Ui(),
    a = xi(),
    n = Li(),
    i = Hi(),
    t = Ki(),
    c = Ji(),
    l = Yi(),
    o = fo(),
    u = _o();
  return (
    (X.view = {
      submit: e.submit,
      close: r.close,
      onClose: u.onClose,
      open: s.open,
      refresh: a.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: c.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: o.createAdfRendererIframeProps,
    }),
    X
  );
}
var Br;
function et() {
  return (
    Br ||
      ((Br = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(gi(), e));
      })(ut)),
    ut
  );
}
var ht = {},
  Re = {},
  Tr;
function go() {
  if (Tr) return Re;
  ((Tr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.router = void 0));
  const r = (0, w().getCallBridge)(),
    s = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const c = await r("getUrl", t);
      if (!c) throw new Error("Failed to get URL");
      try {
        return new URL(c);
      } catch (l) {
        throw new Error(`Failed to parse URL: ${c} (${l})`);
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
  return ((Re.router = { getUrl: s, navigate: a, open: n, reload: i }), Re);
}
var kr;
function ho() {
  return (
    kr ||
      ((kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(go(), e));
      })(ht)),
    ht
  );
}
var vt = {},
  Se = {},
  Ur;
function vo() {
  if (Ur) return Se;
  ((Ur = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.Modal = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = () => {};
  class n {
    constructor(t) {
      var c, l;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || a),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (c = t?.closeOnEscape) !== null && c !== void 0 ? c : !0),
        (this.closeOnOverlayClick = (l = t?.closeOnOverlayClick) !== null && l !== void 0 ? l : !0),
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
var xr;
function po() {
  return (
    xr ||
      ((xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(vo(), e));
      })(vt)),
    vt
  );
}
var P = {},
  B = {},
  Lr;
function yo() {
  if (Lr) return B;
  ((Lr = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.productFetchApi = B.remoteFetchApi = void 0));
  const e = li(),
    r = async (t) => {
      const c = {};
      for (const [l, o] of t.entries())
        if (l === "file") {
          const u = o.name,
            d = o.type;
          ((c.file = await (0, e.blobToBase64)(o)), (c.__fileName = u), (c.__fileType = d));
        } else c[l] = o;
      return JSON.stringify(c);
    },
    s = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: c, ...l } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          l
        );
      }
      return t;
    },
    a = async (t) => {
      const c = t?.body instanceof FormData,
        l = c ? await r(t?.body) : t?.body,
        o = new Request("", { body: l, method: t?.method, headers: t?.headers }),
        u = Object.fromEntries(o.headers.entries());
      return {
        body: o.method !== "GET" ? await o.text() : null,
        headers: new Headers(u),
        isMultipartFormData: c,
      };
    },
    n = (t) => {
      const c = async (l, o) => {
        const u = s(o),
          { body: d, headers: h, isMultipartFormData: f } = await a(u),
          p = {
            remoteKey: l,
            fetchRequestInit: { ...u, body: d, headers: [...h.entries()] },
            isMultipartFormData: f,
          },
          {
            body: _,
            headers: g,
            statusText: v,
            status: y,
            isAttachment: m,
          } = await t("fetchRemote", p),
          O = m ? (0, e.base64ToBlob)(_, g["content-type"]) : _;
        return new Response(O || null, { headers: g, status: y, statusText: v });
      };
      return { requestRemote: (l, o) => c(l, o) };
    };
  B.remoteFetchApi = n;
  const i = (t) => {
    const c = async (l, o, u) => {
      const d = s(u),
        { body: h, headers: f, isMultipartFormData: p } = await a(d);
      f.has("X-Atlassian-Token") || f.set("X-Atlassian-Token", "no-check");
      const _ = {
          product: l,
          restPath: o,
          fetchRequestInit: { ...d, body: h, headers: [...f.entries()] },
          isMultipartFormData: p,
        },
        {
          body: g,
          headers: v,
          statusText: y,
          status: m,
          isAttachment: O,
        } = await t("fetchProduct", _),
        E = O ? (0, e.base64ToBlob)(g, v["content-type"]) : g;
      return new Response(E || null, { headers: v, status: m, statusText: y });
    };
    return {
      requestConfluence: (l, o) => c("confluence", l, o),
      requestJira: (l, o) => c("jira", l, o),
      requestBitbucket: (l, o) => c("bitbucket", l, o),
    };
  };
  return ((B.productFetchApi = i), B);
}
var Nr;
function mo() {
  if (Nr) return P;
  Nr = 1;
  var e;
  (Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.requestRemote = P.requestBitbucket = P.requestJira = P.requestConfluence = void 0));
  const r = w(),
    s = yo();
  return (
    (e = (0, s.productFetchApi)((0, r.getCallBridge)())),
    (P.requestConfluence = e.requestConfluence),
    (P.requestJira = e.requestJira),
    (P.requestBitbucket = e.requestBitbucket),
    (P.requestRemote = (0, s.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    P
  );
}
var pt = {},
  Pe = {},
  Gr;
function bo() {
  if (Gr) return Pe;
  ((Gr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
  const e = w(),
    r = R(),
    s = (0, e.getCallBridge)(),
    a = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = s("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, s("closeFlag", { id: n.id })) };
    };
  return ((Pe.showFlag = a), Pe);
}
var Vr;
function wo() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = bo();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(pt)),
    pt
  );
}
var yt = {},
  zr;
function Eo() {
  return (
    zr ||
      ((zr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(ci(), e));
      })(yt)),
    yt
  );
}
var mt = {},
  Ce = {},
  Wr;
function Oo() {
  if (Wr) return Ce;
  ((Wr = 1), Object.defineProperty(Ce, "__esModule", { value: !0 }), (Ce.realtime = void 0));
  const r = (0, w().getCallBridge)(),
    s = (t, c, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l }),
    a = (t, c, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l }),
    n = (t, c, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: c, options: l, isGlobal: !0 }),
    i = (t, c, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: c, options: l, isGlobal: !0 });
  return ((Ce.realtime = { publish: s, subscribe: a, publishGlobal: n, subscribeGlobal: i }), Ce);
}
var bt = {},
  Hr;
function Ro() {
  return (
    Hr ||
      ((Hr = 1),
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
      })(bt)),
    bt
  );
}
var Kr;
function So() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = Oo();
        Object.defineProperty(e, "realtime", {
          enumerable: !0,
          get: function () {
            return r.realtime;
          },
        });
        var s = Ro();
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
      })(mt)),
    mt
  );
}
var wt = {},
  Ie = {},
  Et = {},
  Jr;
function Po() {
  return (
    Jr ||
      ((Jr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = w(),
          s = R(),
          a = 30,
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
              if (c.agentName.length > a) throw new Error("rovo agent name too long");
              if (c.agentKey.length > a) throw new Error("rovo agent key too long");
            }
            const l = i(c);
            if ((await n("openRovo", l)) === !1)
              throw new s.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(Et)),
    Et
  );
}
var Ae = {},
  Qr;
function Co() {
  if (Qr) return Ae;
  ((Qr = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.isEnabled = void 0));
  const r = (0, w().getCallBridge)(),
    s = () => r("isRovoEnabled");
  return ((Ae.isEnabled = s), Ae);
}
var Yr;
function Io() {
  if (Yr) return Ie;
  ((Yr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.rovo = void 0));
  const e = Po(),
    r = Co();
  return ((Ie.rovo = { open: e.open, isEnabled: r.isEnabled }), Ie);
}
var Xr;
function Ao() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Io(), e));
      })(wt)),
    wt
  );
}
var A = {},
  Zr;
function jo() {
  if (Zr) return A;
  ((Zr = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.createTranslationFunction = A.getTranslations = A.resetTranslationsCache = void 0));
  const e = ui(),
    r = et(),
    s = {
      getI18nInfoConfig: async () => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!c.ok) throw new Error("Failed to get i18n info config: " + c.statusText);
        return (await c.json()).config;
      },
      getTranslationResource: async (c) => {
        const l = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${c}.json`);
        if (!l.ok) throw new Error(`Failed to get translation resource for locale: ${c}`);
        return l.json();
      },
    },
    a = new e.TranslationsGetter(s),
    n = () => {
      a.reset();
    };
  A.resetTranslationsCache = n;
  const i = async (c = null, l = { fallback: !0 }) => {
    let o = c;
    return (o || (o = (await r.view.getContext()).locale), await a.getTranslations(o, l));
  };
  A.getTranslations = i;
  const t = async (c = null) => {
    let l = c;
    l || (l = (await r.view.getContext()).locale);
    const o = new e.Translator(l, a);
    return (
      await o.init(),
      (u, d) => {
        var h, f;
        return (f = (h = o.translate(u)) !== null && h !== void 0 ? h : d) !== null && f !== void 0
          ? f
          : u;
      }
    );
  };
  return ((A.createTranslationFunction = t), A);
}
var Ot = {},
  je = {},
  $r;
function Mo() {
  if ($r) return je;
  (($r = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.permissions = void 0));
  const r = (0, w().getCallBridge)(),
    s = async (l) => r("__permission__egressGet", l),
    a = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    i = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    c = async (l) => r("__permission__remoteSet", l);
  return (
    (je.permissions = {
      egress: { get: s, set: a, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: c },
    }),
    je
  );
}
var T = {},
  Rt = {},
  St = {},
  Me = {},
  qe = {},
  en;
function Tt() {
  if (en) return qe;
  ((en = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.parseUrl = void 0));
  function e(r) {
    var s, a;
    const n =
        (a = (s = r.match(/^(.*?:)/)) === null || s === void 0 ? void 0 : s[0]) !== null &&
        a !== void 0
          ? a
          : "https:",
      i = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = i.split("/")[0],
      c = i.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: c };
  }
  return ((qe.parseUrl = e), qe);
}
var Pt = {},
  tn;
function hi() {
  return (
    tn ||
      ((tn = 1),
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
          const l = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${l}$`);
        }
        e.globToRegex = s;
        const a = (t) => {
          if (t?.length === 0) return [];
          const c = /^(.*?:\/\/)/,
            l = new Set(),
            o = [];
          return (
            t.forEach((u) => {
              const d = c.test(u) ? u : `https://${u}`,
                h = (0, r.parseUrl)(d);
              h.hostname.startsWith("*")
                ? (l.add(h.hostname.substring(2)), o.push(s(h.hostname)))
                : l.add(h.hostname);
            }),
            [...l].sort().reduce((u, d) => (o.some((h) => h.test(d)) || u.push(d), u), [])
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
          const c = t.egress.filter((o) => {
              var u;
              if (
                ((u = o.category) === null || u === void 0 ? void 0 : u.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const d = t.installationConfig.find(
                    (h) => h.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return d?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            l = new Map();
          for (const o of c)
            (l.has(o.type) || l.set(o.type, o.addresses),
              l.set(o.type, [...l.get(o.type), ...o.addresses]));
          return [...l.entries()].map(([o, u]) => ({ type: o, addresses: [...new Set(u)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(Pt)),
    Pt
  );
}
var rn;
function qo() {
  if (rn) return Me;
  ((rn = 1),
    Object.defineProperty(Me, "__esModule", { value: !0 }),
    (Me.EgressFilteringService = void 0));
  const e = Tt(),
    r = hi();
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
  return ((Me.EgressFilteringService = s), Me);
}
var nn;
function Fo() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(qo(), e), r.__exportStar(Tt(), e), r.__exportStar(hi(), e));
      })(St)),
    St
  );
}
var on;
function Do() {
  return (
    on ||
      ((on = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), S.__exportStar(Fo(), e));
      })(Rt)),
    Rt
  );
}
var sn;
function Bo() {
  if (sn) return T;
  ((sn = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.checkPermissions = T.createPermissionUtils = void 0));
  const e = Do(),
    r = et();
  function s(d) {
    return typeof d == "string" ? d : "address" in d && d.address ? d.address : d.remote || "";
  }
  const a = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(d) {
    if (!d) return null;
    const { scopes: h, external: f = {} } = d,
      p = Array.isArray(h) ? h : Object.keys(h || {});
    return {
      hasScope: (_) => p.includes(_),
      canFetchFrom: (_, g) => {
        var v;
        const y = (v = f.fetch) === null || v === void 0 ? void 0 : v[_];
        if (!y?.length) return !1;
        const m = y.map(s).filter((C) => C.length > 0);
        if (m.length === 0) return !1;
        const O = new e.EgressFilteringService(m);
        return _ === "client" ? O.isValidUrlCSP(g) : O.isValidUrl(g);
      },
      canLoadResource: (_, g) => {
        const v = f[_];
        if (!v?.length) return !1;
        const y = v.map(s).filter((E) => E.length > 0);
        return y.length === 0 ? !1 : new e.EgressFilteringService(y).isValidUrlCSP(g);
      },
      getScopes: () => p,
      getExternalPermissions: () => f,
      hasAnyPermissions: () => p.length > 0 || Object.keys(f).length > 0,
    };
  }
  T.createPermissionUtils = i;
  function t(d, h) {
    if (!d?.length) return;
    const f = d.filter((p) => !h.hasScope(p));
    return f.length > 0 ? f : void 0;
  }
  function c(d, h) {
    if (!d?.fetch) return;
    const f = {};
    return (
      n.forEach((p) => {
        var _;
        const g = (_ = d.fetch) === null || _ === void 0 ? void 0 : _[p];
        if (g?.length) {
          const v = g.filter((y) => !h.canFetchFrom(p, y));
          v.length > 0 && (f[p] = v);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function l(d, h) {
    const f = {};
    return (
      a.forEach((p) => {
        const _ = d?.[p];
        if (_?.length) {
          const g = _.filter((v) => !h.canLoadResource(p, v));
          g.length > 0 && (f[p] = g);
        }
      }),
      Object.keys(f).length > 0 ? f : void 0
    );
  }
  function o(d, h) {
    if (!d) return;
    const f = c(d, h),
      p = l(d, h);
    if (!f && !p) return;
    const _ = {};
    return (f && (_.fetch = f), p && Object.assign(_, p), _);
  }
  async function u(d, h) {
    var f;
    if (!d) return { granted: !1, missing: null };
    if (!(!((f = d.scopes) === null || f === void 0) && f.length) && !d.external)
      return { granted: !0, missing: null };
    let p = h;
    p || (p = (await r.view.getContext()).permissions);
    const _ = i(p);
    if (!_) return { granted: !1, missing: null };
    const g = {};
    let v = !0;
    const y = t(d.scopes, _);
    y && ((g.scopes = y), (v = !1));
    const m = o(d.external, _);
    return (m && ((g.external = m), (v = !1)), { granted: v, missing: v ? null : g });
  }
  return ((T.checkPermissions = u), T);
}
var an;
function To() {
  return (
    an ||
      ((an = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(Mo(), e), r.__exportStar(Bo(), e));
      })(Ot)),
    Ot
  );
}
var Ct = {},
  It = {},
  At = {},
  Fe = {},
  De = {},
  un;
function vi() {
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
var ln;
function tt() {
  if (ln) return Fe;
  ((ln = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = et(),
    s = vi(),
    a = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(s.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Fe.checkRestrictedEnvironment = a), Fe);
}
var cn;
function ko() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = We(),
          s = R(),
          a = tt(),
          i = (0, w().getCallBridge)(),
          t = (u, d) => {
            const h = atob(u),
              f = new Array(h.length);
            for (let _ = 0; _ < h.length; _++) f[_] = h.charCodeAt(_);
            const p = new Uint8Array(f);
            return new Blob([p], { type: d || "application/octet-stream" });
          },
          c = async (u) => {
            const d = u.size,
              h = await u.arrayBuffer(),
              f = await crypto.subtle.digest("SHA-256", h),
              p = new Uint8Array(f),
              _ = btoa(String.fromCharCode(...p));
            return { length: d, checksum: _, checksumType: "SHA256" };
          },
          l = async ({ functionKey: u, objects: d }) => {
            if (!u || u.length === 0)
              throw new s.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(d) || d.length === 0)
              throw new s.BridgeAPIError("objects array is required and must not be empty");
            const h = d.map((y, m) => {
                if (y instanceof Blob) return y;
                if (!(y && typeof y == "object" && "data" in y && typeof y.data == "string"))
                  throw new s.BridgeAPIError(
                    `Invalid object type at index ${m}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(y.data, y.mimeType);
                } catch {
                  throw new s.BridgeAPIError(
                    `Invalid base64 data at index ${m}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              f = await Promise.all(h.map((y) => c(y))),
              p = await (0, r.invoke)(u, { allObjectMetadata: f });
            if (!p || typeof p != "object")
              throw new s.BridgeAPIError("Invalid response from functionKey");
            const _ = new Map(),
              g = new Map();
            return (
              h.forEach((y, m) => {
                const O = f[m];
                (_.set(O.checksum, y), g.set(O.checksum, m));
              }),
              Object.entries(p).map(([y, m]) => {
                const { key: O, checksum: E } = m,
                  C = _.get(E),
                  V = g.get(E);
                return V === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: O,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : C
                    ? {
                        promise: (async () => {
                          try {
                            const q = await fetch(y, {
                              method: "PUT",
                              body: C,
                              headers: {
                                "Content-Type": C.type || "application/octet-stream",
                                "Content-Length": C.size.toString(),
                              },
                            });
                            return {
                              success: q.ok,
                              key: O,
                              status: q.status,
                              error: q.ok ? void 0 : `Upload failed with status ${q.status}`,
                            };
                          } catch (q) {
                            return {
                              success: !1,
                              key: O,
                              status: 503,
                              error: q instanceof Error ? q.message : "Upload failed",
                            };
                          }
                        })(),
                        index: V,
                        objectType: C.type,
                        objectSize: C.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: O,
                          error: `Blob not found for checksum ${E}`,
                        }),
                        index: V,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const o = async ({ functionKey: u, objects: d }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const h = await (0, e.createUploadPromises)({ functionKey: u, objects: d });
          return await Promise.all(h.map((p) => p.promise));
        };
        e.upload = o;
      })(At)),
    At
  );
}
var Be = {},
  dn;
function Uo() {
  if (dn) return Be;
  ((dn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.deleteObjects = void 0));
  const e = We(),
    r = R(),
    s = tt(),
    n = (0, w().getCallBridge)(),
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
        c.map(async (l) => {
          await (0, e.invoke)(t, { key: l });
        }),
      );
    };
  return ((Be.deleteObjects = i), Be);
}
var Te = {},
  fn;
function xo() {
  if (fn) return Te;
  ((fn = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.download = void 0));
  const e = We(),
    r = R(),
    s = tt(),
    n = (0, w().getCallBridge)(),
    i = async ({ functionKey: t, keys: c }) => {
      if (
        (await (0, s.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(c) || c.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const l = await (0, e.invoke)(t, { keys: c });
      if (!l || typeof l != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const o = Object.entries(l).map(async ([d, h]) => {
        try {
          const f = await fetch(d, { method: "GET" });
          if (!f.ok)
            return {
              success: !1,
              key: h,
              status: f.status,
              error: `Download failed with status ${f.status}`,
            };
          const p = await f.blob();
          return { success: !0, key: h, blob: p, status: f.status };
        } catch (f) {
          return {
            success: !1,
            key: h,
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
  _n;
function Lo() {
  if (_n) return ke;
  ((_n = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.getMetadata = void 0));
  const e = We(),
    r = R(),
    s = tt(),
    n = (0, w().getCallBridge)(),
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
          const u = await (0, e.invoke)(t, { key: o });
          return !u || typeof u != "object"
            ? { key: o, error: "Invalid response from functionKey" }
            : u;
        }),
      );
    };
  return ((ke.getMetadata = i), ke);
}
var gn;
function No() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createUploadPromises = e.objectStore = void 0));
        const r = ko();
        Object.defineProperty(e, "createUploadPromises", {
          enumerable: !0,
          get: function () {
            return r.createUploadPromises;
          },
        });
        const s = Uo(),
          a = xo(),
          n = Lo();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: n.getMetadata,
          delete: s.deleteObjects,
        };
      })(It)),
    It
  );
}
var hn;
function Go() {
  return (
    hn ||
      ((hn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = S;
        (r.__exportStar(No(), e), r.__exportStar(vi(), e));
      })(Ct)),
    Ct
  );
}
var jt = {},
  Ue = {},
  k = {},
  L = {},
  Ke = {},
  vn;
function Vo() {
  if (vn) return Ke;
  ((vn = 1), Object.defineProperty(Ke, "__esModule", { value: !0 }));
  const e = M();
  let r = class {
    constructor(a) {
      ((this._sdkKey = a),
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
    setValues(a, n) {
      var i;
      if (!a) return !1;
      const t = (0, e._typedJsonParse)(a.data, "has_updates", "EvaluationResponse");
      return t == null
        ? !1
        : ((this._source = a.source),
          t?.has_updates !== !0 ||
            ((this._rawValues = a.data),
            (this._lcut = t.time),
            (this._receivedAt = a.receivedAt),
            (this._values = t),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(a.source, t)),
            a.source && t.user && this._setWarningState(n, t),
            e.SDKFlags.setFlags(this._sdkKey, (i = t.sdk_flags) !== null && i !== void 0 ? i : {})),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.feature_gates,
        a,
      );
    }
    getConfig(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.dynamic_configs,
        a,
      );
    }
    getLayer(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.layer_configs,
        a,
      );
    }
    getParamStore(a) {
      var n;
      return this._getDetailedStoreResult(
        (n = this._values) === null || n === void 0 ? void 0 : n.param_stores,
        a,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var a;
      return (a = this._values) === null || a === void 0 ? void 0 : a.exposures;
    }
    _extractBootstrapMetadata(a, n) {
      if (a !== "Bootstrap") return null;
      const i = {};
      return (
        n.user && (i.user = n.user),
        n.sdkInfo && (i.generatorSDKInfo = n.sdkInfo),
        (i.lcut = n.time),
        i
      );
    }
    _getDetailedStoreResult(a, n) {
      let i = null;
      return (
        a && (i = a[n] ? a[n] : a[(0, e._DJB2)(n)]),
        { result: i, details: this._getDetails(i == null) }
      );
    }
    _setWarningState(a, n) {
      var i, t;
      const c = e.StableID.get(this._sdkKey);
      if (
        ((i = a.customIDs) === null || i === void 0 ? void 0 : i.stableID) !== c &&
        ((!((t = a.customIDs) === null || t === void 0) && t.stableID) || c)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in n) {
        const l = n.user;
        (0, e._getFullUserHash)(a) !== (0, e._getFullUserHash)(l) &&
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
      var n, i;
      const t = this.getCurrentSourceDetails();
      let c = t.reason;
      const l = (n = t.warnings) !== null && n !== void 0 ? n : [];
      (this._source === "Bootstrap" && l.length > 0 && (c = c + l[0]),
        c !== "Uninitialized" &&
          c !== "NoValues" &&
          (c = `${c}:${a ? "Unrecognized" : "Recognized"}`));
      const o =
        this._source === "Bootstrap" && (i = this._bootstrapMetadata) !== null && i !== void 0
          ? i
          : void 0;
      return (o && (t.bootstrapMetadata = o), Object.assign(Object.assign({}, t), { reason: c }));
    }
  };
  return ((Ke.default = r), Ke);
}
var N = {},
  xe = {},
  pn;
function zo() {
  if (pn) return xe;
  ((pn = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe._resolveDeltasResponse = void 0));
  const e = M(),
    r = 2;
  function s(t, c) {
    const l = (0, e._typedJsonParse)(c, "checksum", "DeltasEvaluationResponse");
    if (!l) return { hadBadDeltaChecksum: !0 };
    const o = a(t, l),
      u = n(o),
      d = (0, e._DJB2Object)(
        {
          feature_gates: u.feature_gates,
          dynamic_configs: u.dynamic_configs,
          layer_configs: u.layer_configs,
        },
        r,
      );
    return d === l.checksumV2
      ? JSON.stringify(u)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: u,
          badFullResponse: l.deltas_full_response,
        };
  }
  xe._resolveDeltasResponse = s;
  function a(t, c) {
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
    t?.forEach((l) => {
      delete c[l];
    });
  }
  return xe;
}
var yn;
function pi() {
  if (yn) return N;
  yn = 1;
  var e =
    (N && N.__awaiter) ||
    function (n, i, t, c) {
      function l(o) {
        return o instanceof t
          ? o
          : new t(function (u) {
              u(o);
            });
      }
      return new (t || (t = Promise))(function (o, u) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            u(_);
          }
        }
        function h(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function f(p) {
          p.done ? o(p.value) : l(p.value).then(d, h);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  Object.defineProperty(N, "__esModule", { value: !0 });
  const r = M(),
    s = zo();
  class a extends r.NetworkCore {
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
    fetchEvaluations(i, t, c, l, o) {
      return e(this, void 0, void 0, function* () {
        var u, d, h, f, p, _;
        const g = t ? (0, r._typedJsonParse)(t, "has_updates", "InitializeResponse") : null;
        let v = {
          user: l,
          hash:
            (h =
              (d = (u = this._option) === null || u === void 0 ? void 0 : u.networkConfig) ===
                null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && h !== void 0
              ? h
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g?.has_updates) {
          const y =
            g?.hash_used !==
            ((_ =
              (p = (f = this._option) === null || f === void 0 ? void 0 : f.networkConfig) ===
                null || p === void 0
                ? void 0
                : p.initializeHashAlgorithm) !== null && _ !== void 0
              ? _
              : "djb2");
          v = Object.assign(Object.assign({}, v), {
            sinceTime: o && !y ? g.time : 0,
            previousDerivedFields: "derived_fields" in g && o ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: y ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(i, g, v, c);
      });
    }
    _fetchEvaluations(i, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var o, u;
        const d = yield this.post({
          sdkKey: i,
          urlConfig: this._initializeUrlConfig,
          data: c,
          retries: 2,
          isStatsigEncodable: !0,
          priority: l,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200) return (o = d?.body) !== null && o !== void 0 ? o : null;
        if (
          t?.has_updates !== !0 ||
          ((u = d.body) === null || u === void 0 ? void 0 : u.includes('"is_delta":true')) !== !0 ||
          c.deltasResponseRequested !== !0
        )
          return d.body;
        const h = (0, s._resolveDeltasResponse)(t, d.body);
        return typeof h == "string"
          ? h
          : this._fetchEvaluations(
              i,
              t,
              Object.assign(Object.assign(Object.assign({}, c), h), {
                deltasResponseRequested: !1,
              }),
              l,
            );
      });
    }
  }
  return ((N.default = a), N);
}
var Le = {},
  mn;
function Wo() {
  if (mn) return Le;
  ((mn = 1),
    Object.defineProperty(Le, "__esModule", { value: !0 }),
    (Le._makeParamStoreGetter = void 0));
  const e = M(),
    r = { disableExposureLog: !0 };
  function s(u) {
    return u == null || u.disableExposureLog === !1;
  }
  function a(u, d) {
    return d != null && !(0, e._isTypeMatch)(u, d);
  }
  function n(u, d) {
    return u.value;
  }
  function i(u, d, h) {
    return u.getFeatureGate(d.gate_name, s(h) ? void 0 : r).value ? d.pass_value : d.fail_value;
  }
  function t(u, d, h, f) {
    const _ = u.getDynamicConfig(d.config_name, s(f) ? void 0 : r).get(d.param_name);
    return a(_, h) ? h : _;
  }
  function c(u, d, h, f) {
    const _ = u.getExperiment(d.experiment_name, s(f) ? void 0 : r).get(d.param_name);
    return a(_, h) ? h : _;
  }
  function l(u, d, h, f) {
    const _ = u.getLayer(d.layer_name, s(f) ? void 0 : r).get(d.param_name);
    return a(_, h) ? h : _;
  }
  function o(u, d, h) {
    return (f, p) => {
      if (d == null) return p;
      const _ = d[f];
      if (_ == null || (p != null && (0, e._typeOf)(p) !== _.param_type)) return p;
      switch (_.ref_type) {
        case "static":
          return n(_);
        case "gate":
          return i(u, _, h);
        case "dynamic_config":
          return t(u, _, p, h);
        case "experiment":
          return c(u, _, p, h);
        case "layer":
          return l(u, _, p, h);
        default:
          return p;
      }
    };
  }
  return ((Le._makeParamStoreGetter = o), Le);
}
var U = {},
  bn;
function Ho() {
  if (bn) return U;
  bn = 1;
  var e =
    (U && U.__awaiter) ||
    function (n, i, t, c) {
      function l(o) {
        return o instanceof t
          ? o
          : new t(function (u) {
              u(o);
            });
      }
      return new (t || (t = Promise))(function (o, u) {
        function d(p) {
          try {
            f(c.next(p));
          } catch (_) {
            u(_);
          }
        }
        function h(p) {
          try {
            f(c.throw(p));
          } catch (_) {
            u(_);
          }
        }
        function f(p) {
          p.done ? o(p.value) : l(p.value).then(d, h);
        }
        f((c = c.apply(n, i || [])).next());
      });
    };
  (Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.StatsigEvaluationsDataAdapter = void 0));
  const r = M(),
    s = pi();
  let a = class extends r.DataAdapterCore {
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
    _fetchFromNetwork(i, t, c, l) {
      return e(this, void 0, void 0, function* () {
        var o;
        const u = yield (o = this._network) === null || o === void 0
          ? void 0
          : o.fetchEvaluations(this._getSdkKey(), i, c?.priority, t, l);
        return u ?? null;
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
  return ((U.StatsigEvaluationsDataAdapter = a), U);
}
var wn;
function Ko() {
  if (wn) return L;
  wn = 1;
  var e =
    (L && L.__awaiter) ||
    function (c, l, o, u) {
      function d(h) {
        return h instanceof o
          ? h
          : new o(function (f) {
              f(h);
            });
      }
      return new (o || (o = Promise))(function (h, f) {
        function p(v) {
          try {
            g(u.next(v));
          } catch (y) {
            f(y);
          }
        }
        function _(v) {
          try {
            g(u.throw(v));
          } catch (y) {
            f(y);
          }
        }
        function g(v) {
          v.done ? h(v.value) : d(v.value).then(p, _);
        }
        g((u = u.apply(c, l || [])).next());
      });
    };
  Object.defineProperty(L, "__esModule", { value: !0 });
  const r = M(),
    s = Vo(),
    a = pi(),
    n = Wo(),
    i = Ho();
  let t = class Dt extends r.StatsigClientBase {
    static instance(l) {
      const o = (0, r._getStatsigGlobal)().instance(l);
      return o instanceof Dt
        ? o
        : (r.Log.warn(
            (0, r._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Dt(l ?? "", {}));
    }
    constructor(l, o, u = null) {
      var d, h;
      r.SDKType._setClientType(l, "javascript-client");
      const f = new a.default(u, (_) => {
        this.$emt(_);
      });
      (super(
        l,
        (d = u?.dataAdapter) !== null && d !== void 0 ? d : new i.StatsigEvaluationsDataAdapter(),
        f,
        u,
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
        (this._store = new s.default(l)),
        (this._network = f),
        (this._user = this._configureUser(o, u)),
        (this._sdkInstanceID = (0, r.getUUID)()));
      const p = (h = u?.plugins) !== null && h !== void 0 ? h : [];
      for (const _ of p) _.bind(this);
    }
    initializeSync(l) {
      var o;
      return this.loadingStatus !== "Uninitialized"
        ? (0, r.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
            "MultipleInitializations",
            ...((o = this._store.getWarnings()) !== null && o !== void 0 ? o : []),
          ])
        : (this._logger.start(), this.updateUserSync(this._user, l));
    }
    initializeAsync(l) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(l)), this._initializePromise);
      });
    }
    updateUserSync(l, o) {
      const u = performance.now();
      try {
        return this._updateUserSyncImpl(l, o, u);
      } catch (d) {
        const h = d instanceof Error ? d : new Error(String(d));
        return this._createErrorUpdateDetails(h, u);
      }
    }
    _updateUserSyncImpl(l, o, u) {
      var d;
      const h = [...((d = this._store.getWarnings()) !== null && d !== void 0 ? d : [])];
      this._resetForUser(l);
      const f = this.dataAdapter.getDataSync(this._user);
      (f == null && h.push("NoCachedValues"),
        this._store.setValues(f, this._user),
        this._finalizeUpdate(f));
      const p = o?.disableBackgroundCacheRefresh;
      return p === !0 || (p == null && f?.source === "Bootstrap")
        ? (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          )
        : (this._runPostUpdate(f ?? null, this._user),
          (0, r.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - u,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            h,
          ));
    }
    updateUserAsync(l, o) {
      return e(this, void 0, void 0, function* () {
        const u = performance.now();
        try {
          return yield this._updateUserAsyncImpl(l, o);
        } catch (d) {
          const h = d instanceof Error ? d : new Error(String(d));
          return this._createErrorUpdateDetails(h, u);
        }
      });
    }
    _updateUserAsyncImpl(l, o) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(l);
        const u = this._user;
        r.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(u);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, u, o)),
          u !== this._user)
        )
          return (0, r.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let h = !1;
        (d != null &&
          (r.Diagnostics._markInitProcessStart(this._sdkKey),
          (h = this._store.setValues(d, this._user)),
          r.Diagnostics._markInitProcessEnd(this._sdkKey, { success: h })),
          this._finalizeUpdate(d),
          h ||
            (this._errorBoundary.attachErrorIfNoneExists(
              r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          r.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            h,
            this._store.getCurrentSourceDetails(),
          ));
        const f = r.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, r.createUpdateDetails)(
          h,
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
    checkGate(l, o) {
      return this.getFeatureGate(l, o).value;
    }
    logEvent(l, o, u) {
      const d = typeof l == "string" ? { eventName: l, value: o, metadata: u } : l;
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
    _initializeAsyncImpl(l) {
      return e(this, void 0, void 0, function* () {
        return (
          r.Storage.isReady() || (yield r.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, l)
        );
      });
    }
    _createErrorUpdateDetails(l, o) {
      var u;
      return (0, r.createUpdateDetails)(
        !1,
        this._store.getSource(),
        performance.now() - o,
        l,
        null,
        [...((u = this._store.getWarnings()) !== null && u !== void 0 ? u : [])],
      );
    }
    _finalizeUpdate(l) {
      (this._store.finalize(), this._setStatus("Ready", l));
    }
    _runPostUpdate(l, o) {
      this.dataAdapter.getDataAsync(l, o, { priority: "low" }).catch((u) => {
        r.Log.error("An error occurred after update.", u);
      });
    }
    _resetForUser(l) {
      (this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(l, this._options)));
    }
    _configureUser(l, o) {
      var u;
      const d = (0, r._normalizeUser)(l, o),
        h = (u = d.customIDs) === null || u === void 0 ? void 0 : u.stableID;
      return (h && r.StableID.setOverride(h, this._sdkKey), d);
    }
    _getFeatureGateImpl(l, o) {
      var u, d;
      const { result: h, details: f } = this._store.getGate(l),
        p = (0, r._makeFeatureGate)(l, f, h),
        _ =
          (d = (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getGateOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, p, this._user, o),
        g = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createGateExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(l, o) {
      var u, d;
      const { result: h, details: f } = this._store.getConfig(l),
        p = (0, r._makeDynamicConfig)(l, f, h),
        _ =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(u, p, this._user, o),
        g = _ ?? p;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, g, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(l, o) {
      var u, d, h, f;
      const { result: p, details: _ } = this._store.getConfig(l),
        g = (0, r._makeExperiment)(l, _, p);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, r._mapExposures)(
          (d = (u = g.__evaluation) === null || u === void 0 ? void 0 : u.secondary_exposures) !==
            null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const v =
          (f =
            (h = this.overrideAdapter) === null || h === void 0
              ? void 0
              : h.getExperimentOverride) === null || f === void 0
            ? void 0
            : f.call(h, g, this._user, o),
        y = v ?? g;
      return (
        this._enqueueExposure(
          l,
          (0, r._createConfigExposure)(this._user, y, this._store.getExposureMapping()),
          o,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: y }),
        y
      );
    }
    _getLayerImpl(l, o) {
      var u, d, h;
      const { result: f, details: p } = this._store.getLayer(l),
        _ = (0, r._makeLayer)(l, p, f),
        g =
          (d =
            (u = this.overrideAdapter) === null || u === void 0 ? void 0 : u.getLayerOverride) ===
            null || d === void 0
            ? void 0
            : d.call(u, _, this._user, o);
      o?.disableExposureLog && this._logger.incrementNonExposureCount(l);
      const v = (0, r._mergeOverride)(
        _,
        g,
        (h = g?.__value) !== null && h !== void 0 ? h : _.__value,
        (y) => {
          o?.disableExposureLog ||
            this._enqueueExposure(
              l,
              (0, r._createLayerParameterExposure)(
                this._user,
                v,
                y,
                this._store.getExposureMapping(),
              ),
              o,
            );
        },
      );
      return (this.$emt({ name: "layer_evaluation", layer: v }), v);
    }
    _getParameterStoreImpl(l, o) {
      var u, d;
      const { result: h, details: f } = this._store.getParamStore(l);
      this._logger.incrementNonExposureCount(l);
      const p = {
          name: l,
          details: f,
          __configuration: h,
          get: (0, n._makeParamStoreGetter)(this, h, o),
        },
        _ =
          (d =
            (u = this.overrideAdapter) === null || u === void 0
              ? void 0
              : u.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(u, p, o);
      return (
        _ != null &&
          ((p.__configuration = _.config),
          (p.details = _.details),
          (p.get = (0, n._makeParamStoreGetter)(this, _.config, o))),
        p
      );
    }
  };
  return ((L.default = t), L);
}
var En;
function Jo() {
  return (
    En ||
      ((En = 1),
      (function (e) {
        var r =
            (k && k.__createBinding) ||
            (Object.create
              ? function (t, c, l, o) {
                  o === void 0 && (o = l);
                  var u = Object.getOwnPropertyDescriptor(c, l);
                  ((!u || ("get" in u ? !c.__esModule : u.writable || u.configurable)) &&
                    (u = {
                      enumerable: !0,
                      get: function () {
                        return c[l];
                      },
                    }),
                    Object.defineProperty(t, o, u));
                }
              : function (t, c, l, o) {
                  (o === void 0 && (o = l), (t[o] = c[l]));
                }),
          s =
            (k && k.__exportStar) ||
            function (t, c) {
              for (var l in t)
                l !== "default" && !Object.prototype.hasOwnProperty.call(c, l) && r(c, t, l);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.StatsigClient = void 0));
        const a = M(),
          n = Ko();
        ((e.StatsigClient = n.default), s(M(), e));
        const i = Object.assign((0, a._getStatsigGlobal)(), { StatsigClient: n.default });
        e.default = i;
      })(k)),
    k
  );
}
var Ne = {},
  Ge = {},
  On;
function Qo() {
  if (On) return Ge;
  ((On = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.initFeatureFlags = void 0));
  const e = w(),
    r = R(),
    s = Xe(),
    a = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((o) => typeof o == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (l) => (t(l), i("initFeatureFlags", { user: l.user }));
  return (
    (Ge.initFeatureFlags = (0, s.withRateLimiter)(
      c,
      a,
      n,
      `Feature flags initialisation calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    Ge
  );
}
var Rn;
function Yo() {
  if (Rn) return Ne;
  ((Rn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.ForgeDataAdapter = void 0));
  const e = Qo();
  class r {
    constructor() {
      ((this.options = null), (this.environment = void 0), (this.cache = null));
    }
    async getDataAsync(a, n, i) {
      var t;
      if (a) return a;
      this.environment = ((t = this.options) === null || t === void 0 ? void 0 : t.environment) || {
        tier: "development",
      };
      const c = { ...n, statsigEnvironment: this.environment },
        l = await (0, e.initFeatureFlags)({ user: c }),
        o = {
          source: "Network",
          data: JSON.stringify(l),
          receivedAt: Date.now(),
          stableID: null,
          fullUserHash: null,
        };
      return ((this.cache = o), o);
    }
    getDataSync(a) {
      return this.cache;
    }
    async attach(a, n, i) {
      this.options = n;
    }
    async prefetchData() {}
    async setData(a) {}
    async setDataLegacy(a) {}
    async shutdown() {
      ((this.options = null), (this.cache = null), (this.environment = void 0));
    }
  }
  return ((Ne.ForgeDataAdapter = r), Ne);
}
var Mt = {},
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
      })(Mt)),
    Mt
  );
}
var Ve = {},
  Pn;
function Xo() {
  if (Pn) return Ve;
  ((Pn = 1),
    Object.defineProperty(Ve, "__esModule", { value: !0 }),
    (Ve.trackFeatureFlagEvent = void 0));
  const e = w(),
    r = R(),
    s = yi(),
    a = Xe(),
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
      if (Object.values(o).some((u) => typeof u == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (o) => (c(o), t("trackFeatureFlagEvent", o));
  return (
    (Ve.trackFeatureFlagEvent = (0, a.withRateLimiter)(
      l,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Ve
  );
}
var Cn;
function Zo() {
  if (Cn) return Ue;
  ((Cn = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.ForgeFeatureFlags = void 0));
  const e = Jo(),
    r = Yo(),
    s = yi(),
    a = Xo();
  class n {
    constructor() {
      ((this.initialized = !1),
        (this.client = null),
        (this.dataAdapter = null),
        (this.eventProps = {}),
        (this.CLIENT_KEY = "client-forge-internal-key"));
    }
    async initialize(t, c = {}) {
      var l;
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
        (l = o.environment) === null || l === void 0 ? void 0 : l.tier),
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
      const l = {
        type: s.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: c,
        },
      };
      (0, a.trackFeatureFlagEvent)(l);
    }
  }
  return ((Ue.ForgeFeatureFlags = n), Ue);
}
var In;
function $o() {
  return (
    In ||
      ((In = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ForgeFeatureFlags = void 0));
        var r = Zo();
        Object.defineProperty(e, "ForgeFeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.ForgeFeatureFlags;
          },
        });
      })(jt)),
    jt
  );
}
var An;
function es() {
  return (
    An ||
      ((An = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = S;
        var s = Mi();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return s.NavigationTarget;
          },
        }),
          r.__exportStar(We(), e),
          r.__exportStar(Bi(), e),
          r.__exportStar(et(), e),
          r.__exportStar(ho(), e),
          r.__exportStar(po(), e),
          r.__exportStar(mo(), e),
          r.__exportStar(wo(), e),
          r.__exportStar(Eo(), e),
          r.__exportStar(So(), e),
          r.__exportStar(Ao(), e),
          (e.i18n = r.__importStar(jo())),
          r.__exportStar(To(), e),
          r.__exportStar(Go(), e),
          r.__exportStar($o(), e));
      })(nt)),
    nt
  );
}
var mi = es();
const ts = () => {
    const [e, r] = ze.useState(null),
      [s, a] = ze.useState(!1),
      [n, i] = ze.useState(null),
      [t, c] = ze.useState(null),
      l = async (o) => {
        (a(!0), i(null), r(null), c(o));
        try {
          const u = await mi.invoke(o);
          (r(u || []), i(null));
        } catch (u) {
          const d = u instanceof Error ? u.message : "Unknown error occurred";
          (i(d), r(null));
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
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getTimeOutError" ? "#FF8B00" : "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getTimeOutError" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getTimeOutError" ? "Loading..." : "⏱️ Timeout Error",
                }),
                b.jsx("button", {
                  onClick: () => l("getOOMError"),
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getOOMError" ? "#C43E37" : "#FF5630",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getOOMError" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getOOMError" ? "Loading..." : "💥 OOM Error",
                }),
                b.jsx("button", {
                  onClick: () => l("getQueryResult"),
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getQueryResult" ? "#36B37E" : "#0052CC",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getQueryResult" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getQueryResult" ? "Loading..." : "✅ Optimized Query",
                }),
                b.jsx("button", {
                  onClick: () => l("getQueryResultCache"),
                  disabled: s,
                  style: {
                    padding: "15px 24px",
                    backgroundColor: t === "getQueryResultCache" ? "#36B37E" : "#0052CC",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: s ? "not-allowed" : "pointer",
                    opacity: s && t !== "getQueryResultCache" ? 0.6 : 1,
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  },
                  children: s && t === "getQueryResultCache" ? "Loading..." : "💾 Cached Query",
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
                          children: e.map((o, u) =>
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
                                    children: [String(o.id).substring(0, 8), "..."],
                                  }),
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(o.userId).substring(0, 8), "..."],
                                  }),
                                  b.jsx("td", {
                                    style: { padding: "8px", border: "1px solid #ddd" },
                                    children:
                                      o.title.length > 50
                                        ? `${o.title.substring(0, 50)}...`
                                        : o.title,
                                  }),
                                  b.jsx("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: new Date(o.createdAt).toLocaleString(),
                                  }),
                                  b.jsxs("td", {
                                    style: {
                                      padding: "8px",
                                      border: "1px solid #ddd",
                                      fontSize: "12px",
                                    },
                                    children: [String(o.documentId).substring(0, 8), "..."],
                                  }),
                                ],
                              },
                              u,
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
  rs = document.getElementById("root"),
  ns = bi.createRoot(rs),
  jn = () => {
    ns.render(b.jsx(Pi.StrictMode, { children: b.jsx(ts, {}) }));
  };
mi.view.theme
  .enable()
  .then(() => {
    jn();
  })
  .catch((e) => {
    (console.error(e.message), jn());
  });
