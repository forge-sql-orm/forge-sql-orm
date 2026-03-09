const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-DSebzXMd.js", "./lodash-vendor-DaE80aqm.js"]),
) => i.map((i) => d[i]);
import { r as mn, c as ao } from "./react-dom-vendor-BXC0oJZi.js";
import { g as so, r as uo } from "./lodash-vendor-DaE80aqm.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const t of i.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && s(t);
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
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = o(n);
    fetch(n.href, i);
  }
})();
var Ze = { exports: {} },
  L = {};
var Tt;
function co() {
  if (Tt) return L;
  Tt = 1;
  var e = mn(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(u, l, a) {
    var c,
      _ = {},
      m = null,
      d = null;
    (a !== void 0 && (m = "" + a),
      l.key !== void 0 && (m = "" + l.key),
      l.ref !== void 0 && (d = l.ref));
    for (c in l) s.call(l, c) && !i.hasOwnProperty(c) && (_[c] = l[c]);
    if (u && u.defaultProps) for (c in ((l = u.defaultProps), l)) _[c] === void 0 && (_[c] = l[c]);
    return { $$typeof: r, type: u, key: m, ref: d, props: _, _owner: n.current };
  }
  return ((L.Fragment = o), (L.jsx = t), (L.jsxs = t), L);
}
var Bt;
function lo() {
  return (Bt || ((Bt = 1), (Ze.exports = co())), Ze.exports);
}
var P = lo(),
  Le = mn(),
  Qe = {},
  St = function (e, r) {
    return (
      (St =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, s) {
            o.__proto__ = s;
          }) ||
        function (o, s) {
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (o[n] = s[n]);
        }),
      St(e, r)
    );
  };
function bn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  St(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var Ge = function () {
  return (
    (Ge =
      Object.assign ||
      function (r) {
        for (var o, s = 1, n = arguments.length; s < n; s++) {
          o = arguments[s];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }),
    Ge.apply(this, arguments)
  );
};
function wn(e, r) {
  var o = {};
  for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++)
      r.indexOf(s[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, s[n]) &&
        (o[s[n]] = e[s[n]]);
  return o;
}
function En(e, r, o, s) {
  var n = arguments.length,
    i = n < 3 ? r : s === null ? (s = Object.getOwnPropertyDescriptor(r, o)) : s,
    t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, r, o, s);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (t = e[u]) && (i = (n < 3 ? t(i) : n > 3 ? t(r, o, i) : t(r, o)) || i);
  return (n > 3 && i && Object.defineProperty(r, o, i), i);
}
function On(e, r) {
  return function (o, s) {
    r(o, s, e);
  };
}
function Pn(e, r, o, s, n, i) {
  function t(h) {
    if (h !== void 0 && typeof h != "function") throw new TypeError("Function expected");
    return h;
  }
  for (
    var u = s.kind,
      l = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      a = !r && e ? (s.static ? e : e.prototype) : null,
      c = r || (a ? Object.getOwnPropertyDescriptor(a, s.name) : {}),
      _,
      m = !1,
      d = o.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var f in s) p[f] = f === "access" ? {} : s[f];
    for (var f in s.access) p.access[f] = s.access[f];
    p.addInitializer = function (h) {
      if (m) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(h || null));
    };
    var v = (0, o[d])(u === "accessor" ? { get: c.get, set: c.set } : c[l], p);
    if (u === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((_ = t(v.get)) && (c.get = _),
        (_ = t(v.set)) && (c.set = _),
        (_ = t(v.init)) && n.unshift(_));
    } else (_ = t(v)) && (u === "field" ? n.unshift(_) : (c[l] = _));
  }
  (a && Object.defineProperty(a, s.name, c), (m = !0));
}
function Rn(e, r, o) {
  for (var s = arguments.length > 2, n = 0; n < r.length; n++)
    o = s ? r[n].call(e, o) : r[n].call(e);
  return s ? o : void 0;
}
function In(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Sn(e, r, o) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", r) : r })
  );
}
function qn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Cn(e, r, o, s) {
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
        a(s.next(c));
      } catch (_) {
        t(_);
      }
    }
    function l(c) {
      try {
        a(s.throw(c));
      } catch (_) {
        t(_);
      }
    }
    function a(c) {
      c.done ? i(c.value) : n(c.value).then(u, l);
    }
    a((s = s.apply(e, r || [])).next());
  });
}
function jn(e, r) {
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
  function u(a) {
    return function (c) {
      return l([a, c]);
    };
  }
  function l(a) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t && ((t = 0), a[0] && (o = 0)), o; )
      try {
        if (
          ((s = 1),
          n &&
            (i =
              a[0] & 2 ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
            !(i = i.call(n, a[1])).done)
        )
          return i;
        switch (((n = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
          case 0:
          case 1:
            i = a;
            break;
          case 4:
            return (o.label++, { value: a[1], done: !1 });
          case 5:
            (o.label++, (n = a[1]), (a = [0]));
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
        a = r.call(e, o);
      } catch (c) {
        ((a = [6, c]), (n = 0));
      } finally {
        s = i = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var xe = Object.create
  ? function (e, r, o, s) {
      s === void 0 && (s = o);
      var n = Object.getOwnPropertyDescriptor(r, o);
      ((!n || ("get" in n ? !r.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function () {
            return r[o];
          },
        }),
        Object.defineProperty(e, s, n));
    }
  : function (e, r, o, s) {
      (s === void 0 && (s = o), (e[s] = r[o]));
    };
function Tn(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && xe(r, e, o);
}
function Ve(e) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    o = r && e[r],
    s = 0;
  if (o) return o.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e });
      },
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ct(e, r) {
  var o = typeof Symbol == "function" && e[Symbol.iterator];
  if (!o) return e;
  var s = o.call(e),
    n,
    i = [],
    t;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = s.next()).done; ) i.push(n.value);
  } catch (u) {
    t = { error: u };
  } finally {
    try {
      n && !n.done && (o = s.return) && o.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return i;
}
function Bn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Ct(arguments[r]));
  return e;
}
function Mn() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var s = Array(e), n = 0, r = 0; r < o; r++)
    for (var i = arguments[r], t = 0, u = i.length; t < u; t++, n++) s[n] = i[t];
  return s;
}
function Fn(e, r, o) {
  if (o || arguments.length === 2)
    for (var s = 0, n = r.length, i; s < n; s++)
      (i || !(s in r)) && (i || (i = Array.prototype.slice.call(r, 0, s)), (i[s] = r[s]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function D(e) {
  return this instanceof D ? ((this.v = e), this) : new D(e);
}
function An(e, r, o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = o.apply(e, r || []),
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
    return function (p) {
      return Promise.resolve(p).then(d, _);
    };
  }
  function u(d, p) {
    s[d] &&
      ((n[d] = function (f) {
        return new Promise(function (v, h) {
          i.push([d, f, v, h]) > 1 || l(d, f);
        });
      }),
      p && (n[d] = p(n[d])));
  }
  function l(d, p) {
    try {
      a(s[d](p));
    } catch (f) {
      m(i[0][3], f);
    }
  }
  function a(d) {
    d.value instanceof D ? Promise.resolve(d.value.v).then(c, _) : m(i[0][2], d);
  }
  function c(d) {
    l("next", d);
  }
  function _(d) {
    l("throw", d);
  }
  function m(d, p) {
    (d(p), i.shift(), i.length && l(i[0][0], i[0][1]));
  }
}
function kn(e) {
  var r, o;
  return (
    (r = {}),
    s("next"),
    s("throw", function (n) {
      throw n;
    }),
    s("return"),
    (r[Symbol.iterator] = function () {
      return this;
    }),
    r
  );
  function s(n, i) {
    r[n] = e[n]
      ? function (t) {
          return (o = !o) ? { value: D(e[n](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Un(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator],
    o;
  return r
    ? r.call(e)
    : ((e = typeof Ve == "function" ? Ve(e) : e[Symbol.iterator]()),
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
      function (t) {
        return new Promise(function (u, l) {
          ((t = e[i](t)), n(u, l, t.done, t.value));
        });
      };
  }
  function n(i, t, u, l) {
    Promise.resolve(l).then(function (a) {
      i({ value: a, done: u });
    }, t);
  }
}
function Dn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var fo = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  qt = function (e) {
    return (
      (qt =
        Object.getOwnPropertyNames ||
        function (r) {
          var o = [];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (o[o.length] = s);
          return o;
        }),
      qt(e)
    );
  };
function Ln(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o = qt(e), s = 0; s < o.length; s++) o[s] !== "default" && xe(r, e, o[s]);
  return (fo(r, e), r);
}
function Nn(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gn(e, r, o, s) {
  if (o === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !s : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? s : o === "a" ? s.call(e) : s ? s.value : r.get(e);
}
function Vn(e, r, o, s, n) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (s === "a" ? n.call(e, o) : n ? (n.value = o) : r.set(e, o), o);
}
function Wn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function xn(e, r, o) {
  if (r != null) {
    if (typeof r != "object" && typeof r != "function") throw new TypeError("Object expected.");
    var s, n;
    if (o) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      s = r[Symbol.asyncDispose];
    }
    if (s === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((s = r[Symbol.dispose]), o && (n = s));
    }
    if (typeof s != "function") throw new TypeError("Object not disposable.");
    (n &&
      (s = function () {
        try {
          n.call(this);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e.stack.push({ value: r, dispose: s, async: o }));
  } else o && e.stack.push({ async: !0 });
  return r;
}
var vo =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, o) {
        var s = new Error(o);
        return ((s.name = "SuppressedError"), (s.error = e), (s.suppressed = r), s);
      };
function Hn(e) {
  function r(i) {
    ((e.error = e.hasError ? new vo(i, e.error, "An error was suppressed during disposal.") : i),
      (e.hasError = !0));
  }
  var o,
    s = 0;
  function n() {
    for (; (o = e.stack.pop()); )
      try {
        if (!o.async && s === 1) return ((s = 0), e.stack.push(o), Promise.resolve().then(n));
        if (o.dispose) {
          var i = o.dispose.call(o.value);
          if (o.async)
            return (
              (s |= 2),
              Promise.resolve(i).then(n, function (t) {
                return (r(t), n());
              })
            );
        } else s |= 1;
      } catch (t) {
        r(t);
      }
    if (s === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return n();
}
function zn(e, r) {
  return typeof e == "string" && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (o, s, n, i, t) {
        return s
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
    __extends: bn,
    __assign: Ge,
    __rest: wn,
    __decorate: En,
    __param: On,
    __esDecorate: Pn,
    __runInitializers: Rn,
    __propKey: In,
    __setFunctionName: Sn,
    __metadata: qn,
    __awaiter: Cn,
    __generator: jn,
    __createBinding: xe,
    __exportStar: Tn,
    __values: Ve,
    __read: Ct,
    __spread: Bn,
    __spreadArrays: Mn,
    __spreadArray: Fn,
    __await: D,
    __asyncGenerator: An,
    __asyncDelegator: kn,
    __asyncValues: Un,
    __makeTemplateObject: Dn,
    __importStar: Ln,
    __importDefault: Nn,
    __classPrivateFieldGet: Gn,
    __classPrivateFieldSet: Vn,
    __classPrivateFieldIn: Wn,
    __addDisposableResource: xn,
    __disposeResources: Hn,
    __rewriteRelativeImportExtension: zn,
  },
  go = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: xn,
        get __assign() {
          return Ge;
        },
        __asyncDelegator: kn,
        __asyncGenerator: An,
        __asyncValues: Un,
        __await: D,
        __awaiter: Cn,
        __classPrivateFieldGet: Gn,
        __classPrivateFieldIn: Wn,
        __classPrivateFieldSet: Vn,
        __createBinding: xe,
        __decorate: En,
        __disposeResources: Hn,
        __esDecorate: Pn,
        __exportStar: Tn,
        __extends: bn,
        __generator: jn,
        __importDefault: Nn,
        __importStar: Ln,
        __makeTemplateObject: Dn,
        __metadata: qn,
        __param: On,
        __propKey: In,
        __read: Ct,
        __rest: wn,
        __rewriteRelativeImportExtension: zn,
        __runInitializers: Rn,
        __setFunctionName: Sn,
        __spread: Bn,
        __spreadArray: Fn,
        __spreadArrays: Mn,
        __values: Ve,
        default: ho,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I = so(go);
var N = {},
  Mt;
function _o() {
  return (
    Mt ||
      ((Mt = 1),
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
var $e = {},
  et = {},
  G = {},
  V = {},
  Ft;
function O() {
  if (Ft) return V;
  ((Ft = 1), Object.defineProperty(V, "__esModule", { value: !0 }), (V.BridgeAPIError = void 0));
  class e extends Error {}
  return ((V.BridgeAPIError = e), V);
}
var At;
function E() {
  if (At) return G;
  ((At = 1), Object.defineProperty(G, "__esModule", { value: !0 }), (G.getCallBridge = void 0));
  const e = O();
  function r(s) {
    return !!s?.callBridge;
  }
  const o = () => {
    if (!r(window.__bridge))
      throw new e.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
    return window.__bridge.callBridge;
  };
  return ((G.getCallBridge = o), G);
}
var W = {},
  kt;
function He() {
  if (kt) return W;
  ((kt = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.withRateLimiter = void 0));
  const e = O(),
    r = (o, s, n, i) => {
      let t = Date.now(),
        u = 0;
      return async (...l) => {
        const a = Date.now();
        if ((a - t > n && ((t = a), (u = 0)), u >= s))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((u = u + 1), o(...l));
      };
    };
  return ((W.withRateLimiter = r), W);
}
var Ut;
function po() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = E(),
          o = O(),
          s = He(),
          n = (0, r.getCallBridge)(),
          i = (l) => {
            if (l && Object.values(l).some((a) => typeof a == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (l, a) => {
            if (typeof l != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (i(a), n("invoke", { functionKey: l, payload: a }));
          };
        e.invoke = (0, s.withRateLimiter)(
          t,
          500,
          1e3 * 25,
          "Resolver calls are rate limited at 500req/25s",
        );
        function u() {
          return e.invoke;
        }
        e.makeInvoke = u;
      })(et)),
    et
  );
}
var Dt;
function De() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(po(), e));
      })($e)),
    $e
  );
}
var tt = {},
  x = {},
  rt = {},
  Lt;
function Jn() {
  return (
    Lt ||
      ((Lt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = E(),
          o = O(),
          s = He(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (_) {
          ((_.REMOTE = "Remote"), (_.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, r.getCallBridge)(),
          l = (_) => {
            if (_ && Object.values(_).some((m) => typeof m == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          a = (_) => async (m) => {
            l(m);
            const d = { ...m, invokeType: `ui-${_.toLowerCase()}-fetch` },
              p = await u("invoke", d),
              { success: f, payload: v, error: h } = p ?? {},
              g = { ...(f ? v : h) };
            if (g && g.headers)
              for (const y in g.headers)
                Array.isArray(g.headers[y]) && (g.headers[y] = g.headers[y].join(","));
            return g;
          },
          c = (_) => {
            const m = a(_);
            return (0, s.withRateLimiter)(
              m,
              n,
              t,
              `${_} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = c;
      })(rt)),
    rt
  );
}
var Nt;
function yo() {
  if (Nt) return x;
  ((Nt = 1), Object.defineProperty(x, "__esModule", { value: !0 }), (x.invokeRemote = void 0));
  const e = Jn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((x.invokeRemote = r), x);
}
var H = {},
  Gt;
function mo() {
  if (Gt) return H;
  ((Gt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.invokeService = void 0));
  const e = Jn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((H.invokeService = r), H);
}
var Vt;
function bo() {
  return (
    Vt ||
      ((Vt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(yo(), e), r.__exportStar(mo(), e));
      })(tt)),
    tt
  );
}
var nt = {},
  z = {},
  J = {},
  Wt;
function wo() {
  if (Wt) return J;
  ((Wt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.submit = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      if ((await o("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((J.submit = s), J);
}
var K = {},
  xt;
function Eo() {
  if (xt) return K;
  ((xt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.close = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      try {
        if ((await o("close", n)) === !1)
          throw new r.BridgeAPIError("this resource's view is not closable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not closable.");
      }
    };
  return ((K.close = s), K);
}
var Y = {},
  Ht;
function Oo() {
  if (Ht) return Y;
  ((Ht = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.open = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = async () => {
      try {
        if ((await o("open")) === !1)
          throw new r.BridgeAPIError("this resource's view is not openable.");
      } catch {
        throw new r.BridgeAPIError("this resource's view is not openable.");
      }
    };
  return ((Y.open = s), Y);
}
var X = {},
  zt;
function Po() {
  if (zt) return X;
  ((zt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.refresh = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      if ((await o("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return ((X.refresh = s), X);
}
var Z = {},
  Jt;
function Ro() {
  if (Jt) return Z;
  ((Jt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.createHistory = void 0));
  const r = (0, E().getCallBridge)(),
    o = async () => {
      const s = await r("createHistory");
      return (
        s.listen((n) => {
          s.location = n;
        }),
        s
      );
    };
  return ((Z.createHistory = o), Z);
}
var Q = {},
  ot = {},
  j = {},
  Kt;
function Kn() {
  return (
    Kt ||
      ((Kt = 1),
      Object.defineProperty(j, "__esModule", { value: !0 }),
      (j.FORGE_SUPPORTED_LOCALE_CODES = j.I18N_BUNDLE_FOLDER_NAME = j.I18N_INFO_FILE_NAME = void 0),
      (j.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (j.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (j.FORGE_SUPPORTED_LOCALE_CODES = [
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
    j
  );
}
var M = {},
  Yt;
function Io() {
  if (Yt) return M;
  ((Yt = 1),
    Object.defineProperty(M, "__esModule", { value: !0 }),
    (M.TranslationsGetter = M.TranslationGetterError = void 0));
  const e = (s, n) => {
    s.includes(n) || s.push(n);
  };
  class r extends Error {
    constructor(n) {
      (super(n), (this.name = "TranslationGetterError"));
    }
  }
  M.TranslationGetterError = r;
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
        const a = await this.getTranslationResource(l);
        if (a) return { translations: a, locale: l };
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
        a = u[n];
      return (
        a && Array.isArray(a) && a.length > 0 && l.push(...a),
        e(l, i.fallback.default),
        l.filter((c) => t.includes(c))
      );
    }
  }
  return ((M.TranslationsGetter = o), M);
}
var $ = {},
  it = {},
  Xt;
function Yn() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = I.__importDefault(uo()),
          s = (i, t, u) => {
            const l = i[u];
            return l ? (0, e.getTranslationValueFromContent)(l, t) : null;
          };
        e.getTranslationValue = s;
        const n = (i, t) => {
          let u = i[t];
          if (!u) {
            const l = t.split(".");
            l.length > 1 && (u = (0, o.default)(i, l, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = n;
      })(it)),
    it
  );
}
var Zt;
function So() {
  if (Zt) return $;
  ((Zt = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.Translator = void 0));
  const e = Yn();
  class r {
    locale;
    translationsGetter;
    localeLookupOrderedTranslations = null;
    cache = new Map();
    constructor(s, n) {
      ((this.locale = s), (this.translationsGetter = n));
    }
    async init() {
      this.localeLookupOrderedTranslations =
        await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
    }
    translate(s) {
      if (!this.localeLookupOrderedTranslations)
        throw new Error("TranslationLookup not initialized");
      let n = this.cache.get(s);
      if (n === void 0) {
        for (const { translations: i } of this.localeLookupOrderedTranslations) {
          const t = (0, e.getTranslationValueFromContent)(i, s);
          if (t !== null) {
            n = t;
            break;
          }
        }
        ((n = n ?? null), this.cache.set(s, n));
      }
      return n;
    }
  }
  return (($.Translator = r), $);
}
var ee = {},
  Qt;
function qo() {
  if (Qt) return ee;
  ((Qt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.ensureLocale = void 0));
  const e = Kn(),
    r = new Set(e.FORGE_SUPPORTED_LOCALE_CODES),
    o = { "en-UK": "en-GB", "nb-NO": "no-NO" },
    s = e.FORGE_SUPPORTED_LOCALE_CODES.reduce(
      (i, t) => {
        const [u] = t.split("-");
        return (i[u] || (i[u] = t), i);
      },
      { nb: "no-NO", pt: "pt-PT" },
    ),
    n = (i) => {
      const t = i.replace("_", "-");
      return r.has(t) ? t : (s[t] ?? o[t] ?? null);
    };
  return ((ee.ensureLocale = n), ee);
}
var at = {},
  $t;
function Co() {
  return (
    $t ||
      (($t = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getI18nSupportedModuleEntries =
              void 0));
        const r = (a) => typeof a == "object" && a !== null && !Array.isArray(a),
          o = (a) => typeof a?.i18n == "string",
          s = (a) => a.startsWith("connect-"),
          n = (a) => a.startsWith("core:"),
          i = (a) => {
            const c = new Set(),
              _ = (m, d) =>
                !r(m) || c.has(m)
                  ? []
                  : (c.add(m),
                    Object.entries(m).flatMap(([p, f]) => {
                      const v = [...d, p];
                      return o(f)
                        ? [{ propertyPath: v, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((h) => _(h, v))
                          : _(f, v);
                    }));
            return _(a, []);
          },
          t = (a) =>
            Object.entries(a).flatMap(([c, _]) =>
              !s(c) && !n(c) && _ && Array.isArray(_) && _.length > 0 ? _.map((m) => [m, c]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const u = (a) => {
          const c = new Set();
          for (const _ of (0, e.getI18nSupportedModuleEntries)(a)) {
            const m = i(_[0]);
            for (const { key: d } of m) c.add(d);
          }
          return c.size > 0 ? Array.from(c) : [];
        };
        e.extractI18nKeysFromModules = u;
        const l = (a) => {
          const c = [];
          for (const _ of (0, e.getI18nSupportedModuleEntries)(a)) {
            const m = i(_[0]);
            for (const d of m) c.push({ moduleName: _[1], ...d });
          }
          return c;
        };
        e.extractI18nPropertiesFromModules = l;
      })(at)),
    at
  );
}
var st = {},
  er;
function jo() {
  return (er || ((er = 1), Object.defineProperty(st, "__esModule", { value: !0 })), st);
}
var tr;
function Xn() {
  return (
    tr ||
      ((tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getI18nSupportedModuleEntries =
            e.extractI18nPropertiesFromModules =
            e.extractI18nKeysFromModules =
            e.getTranslationValue =
              void 0));
        const r = I;
        (r.__exportStar(Kn(), e),
          r.__exportStar(Io(), e),
          r.__exportStar(So(), e),
          r.__exportStar(qo(), e));
        var o = Yn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var s = Co();
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
          r.__exportStar(jo(), e));
      })(ot)),
    ot
  );
}
var rr;
function To() {
  if (rr) return Q;
  ((rr = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.getContext = void 0));
  const e = E(),
    r = Xn(),
    o = (0, e.getCallBridge)(),
    s = async () => {
      var n;
      const i = await o("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((Q.getContext = s), Q);
}
var te = {},
  nr;
function Bo() {
  if (nr) return te;
  ((nr = 1),
    Object.defineProperty(te, "__esModule", { value: !0 }),
    (te.changeWindowTitle = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      try {
        await o("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((te.changeWindowTitle = s), te);
}
var re = {},
  or;
function Mo() {
  if (or) return re;
  ((or = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.theme = void 0));
  const r = (0, E().getCallBridge)();
  return ((re.theme = { enable: () => r("enableTheming") }), re);
}
var ne = {},
  oe = {},
  ut = {},
  F = {},
  ir;
function Zn() {
  if (ir) return F;
  ((ir = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.blobToBase64 = F.base64ToBlob = void 0));
  const e = (o, s) => {
    if (!o) return null;
    const n = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(n),
      t = new Array(i.length);
    for (let l = 0; l < i.length; l++) t[l] = i.charCodeAt(l);
    const u = new Uint8Array(t);
    return new Blob([u], { type: s });
  };
  F.base64ToBlob = e;
  const r = (o) =>
    new Promise((s, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        s(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(o));
    });
  return ((F.blobToBase64 = r), F);
}
var ar;
function Fo() {
  return (
    ar ||
      ((ar = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.containsSerialisedBlobs =
            e.containsBlobs =
            e.deserialiseBlobsInPayload =
            e.serialiseBlobsInPayload =
              void 0));
        const r = Zn(),
          o = (a) => {
            if (
              typeof a != "object" ||
              a === null ||
              Object.prototype.toString.call(a) !== "[object Object]"
            )
              return !1;
            const c = Object.getPrototypeOf(a);
            if (c === null) return !0;
            const _ = Object.prototype.hasOwnProperty.call(c, "constructor") && c.constructor;
            return (
              typeof _ == "function" &&
              _ instanceof _ &&
              Function.prototype.call(_) === Function.prototype.call(a)
            );
          },
          s = async (a) => ({ data: await (0, r.blobToBase64)(a), type: a.type }),
          n = (a) => (0, r.base64ToBlob)(a.data, a.type),
          i = async (a) => {
            if (a instanceof Blob) return { ...(await s(a)), __isBlobData: !0 };
            if (Array.isArray(a))
              return Promise.all(a.map((c) => (0, e.serialiseBlobsInPayload)(c)));
            if (a && o(a)) {
              const c = await Promise.all(
                Object.entries(a).map(async ([_, m]) => [
                  _,
                  await (0, e.serialiseBlobsInPayload)(m),
                ]),
              );
              return Object.fromEntries(c);
            }
            return a;
          };
        e.serialiseBlobsInPayload = i;
        const t = (a) => {
          if (a && o(a) && "__isBlobData" in a) {
            const c = a;
            return n({ data: c.data, type: c.type });
          }
          if (Array.isArray(a)) return a.map((c) => (0, e.deserialiseBlobsInPayload)(c));
          if (a && o(a)) {
            const c = {};
            for (const [_, m] of Object.entries(a)) c[_] = (0, e.deserialiseBlobsInPayload)(m);
            return c;
          }
          return a;
        };
        e.deserialiseBlobsInPayload = t;
        const u = (a) =>
          a instanceof Blob
            ? !0
            : Array.isArray(a)
              ? a.some((c) => (0, e.containsBlobs)(c))
              : a && o(a)
                ? Object.values(a).some((c) => (0, e.containsBlobs)(c))
                : !1;
        e.containsBlobs = u;
        const l = (a) =>
          a && o(a) && "__isBlobData" in a
            ? !0
            : Array.isArray(a)
              ? a.some((c) => (0, e.containsSerialisedBlobs)(c))
              : a && o(a)
                ? Object.values(a).some((c) => (0, e.containsSerialisedBlobs)(c))
                : !1;
        e.containsSerialisedBlobs = l;
      })(ut)),
    ut
  );
}
var sr;
function Qn() {
  if (sr) return oe;
  ((sr = 1), Object.defineProperty(oe, "__esModule", { value: !0 }), (oe.events = void 0));
  const e = E(),
    r = Fo(),
    o = (0, e.getCallBridge)(),
    s = (l) => (a) => {
      let c = a;
      return ((0, r.containsSerialisedBlobs)(a) && (c = (0, r.deserialiseBlobsInPayload)(a)), l(c));
    },
    n = async (l, a) => {
      let c = a;
      return (
        (0, r.containsBlobs)(a) && (c = await (0, r.serialiseBlobsInPayload)(a)),
        o("emit", { event: l, payload: c })
      );
    },
    i = (l, a) => o("on", { event: l, callback: s(a) }),
    t = async (l, a) => {
      let c = a;
      return (
        (0, r.containsBlobs)(a) && (c = await (0, r.serialiseBlobsInPayload)(a)),
        o("emitPublic", { event: l, payload: c })
      );
    },
    u = (l, a) => o("onPublic", { event: l, callback: s(a) });
  return ((oe.events = { emit: n, on: i, emitPublic: t, onPublic: u }), oe);
}
var ur;
function Ao() {
  if (ur) return ne;
  ((ur = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.emitReadyEvent = void 0));
  const e = Qn(),
    r = ro(),
    s = (0, E().getCallBridge)(),
    n = "EXTENSION_READY",
    i = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await s("emitReadyEvent");
      } catch {}
    };
  return ((ne.emitReadyEvent = i), ne);
}
const ko = "modulepreload",
  Uo = function (e, r) {
    return new URL(e, r).href;
  },
  cr = {},
  Do = function (r, o, s) {
    let n = Promise.resolve();
    if (o && o.length > 0) {
      let a = function (c) {
        return Promise.all(
          c.map((_) =>
            Promise.resolve(_).then(
              (m) => ({ status: "fulfilled", value: m }),
              (m) => ({ status: "rejected", reason: m }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        u = document.querySelector("meta[property=csp-nonce]"),
        l = u?.nonce || u?.getAttribute("nonce");
      n = a(
        o.map((c) => {
          if (((c = Uo(c, s)), c in cr)) return;
          cr[c] = !0;
          const _ = c.endsWith(".css"),
            m = _ ? '[rel="stylesheet"]' : "";
          if (s)
            for (let p = t.length - 1; p >= 0; p--) {
              const f = t[p];
              if (f.href === c && (!_ || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = _ ? "stylesheet" : ko),
            _ || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            _)
          )
            return new Promise((p, f) => {
              (d.addEventListener("load", p),
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
  ct = {},
  ae = {},
  Ne = {},
  lr;
function $n() {
  if (lr) return Ne;
  ((lr = 1), Object.defineProperty(Ne, "__esModule", { value: !0 }), (Ne.default = o));
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
  return Ne;
}
var U = {},
  se = {},
  ue = {},
  dr;
function Lo() {
  if (dr) return ue;
  ((dr = 1), Object.defineProperty(ue, "__esModule", { value: !0 }), (ue.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((ue.default = e), ue);
}
var fr;
function ze() {
  if (fr) return se;
  ((fr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.default = void 0));
  var e = r(Lo());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var s = o;
  return ((se.default = s), se);
}
var vr;
function Je() {
  if (vr) return U;
  ((vr = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.default = void 0),
    (U.unsafeStringify = s));
  var e = r(ze());
  function r(t) {
    return t && t.__esModule ? t : { default: t };
  }
  const o = [];
  for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
  function s(t, u = 0) {
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
    const l = s(t, u);
    if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
    return l;
  }
  var i = n;
  return ((U.default = i), U);
}
var hr;
function No() {
  if (hr) return ae;
  ((hr = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.default = void 0));
  var e = o($n()),
    r = Je();
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  let s,
    n,
    i = 0,
    t = 0;
  function u(a, c, _) {
    let m = (c && _) || 0;
    const d = c || new Array(16);
    a = a || {};
    let p = a.node || s,
      f = a.clockseq !== void 0 ? a.clockseq : n;
    if (p == null || f == null) {
      const w = a.random || (a.rng || e.default)();
      (p == null && (p = s = [w[0] | 1, w[1], w[2], w[3], w[4], w[5]]),
        f == null && (f = n = ((w[6] << 8) | w[7]) & 16383));
    }
    let v = a.msecs !== void 0 ? a.msecs : Date.now(),
      h = a.nsecs !== void 0 ? a.nsecs : t + 1;
    const g = v - i + (h - t) / 1e4;
    if (
      (g < 0 && a.clockseq === void 0 && (f = (f + 1) & 16383),
      (g < 0 || v > i) && a.nsecs === void 0 && (h = 0),
      h >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = v), (t = h), (n = f), (v += 122192928e5));
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
    for (let w = 0; w < 6; ++w) d[m + w] = p[w];
    return c || (0, r.unsafeStringify)(d);
  }
  var l = u;
  return ((ae.default = l), ae);
}
var ce = {},
  B = {},
  le = {},
  gr;
function eo() {
  if (gr) return le;
  ((gr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.default = void 0));
  var e = r(ze());
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
  var s = o;
  return ((le.default = s), le);
}
var _r;
function to() {
  if (_r) return B;
  ((_r = 1),
    Object.defineProperty(B, "__esModule", { value: !0 }),
    (B.URL = B.DNS = void 0),
    (B.default = t));
  var e = Je(),
    r = o(eo());
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function s(u) {
    u = unescape(encodeURIComponent(u));
    const l = [];
    for (let a = 0; a < u.length; ++a) l.push(u.charCodeAt(a));
    return l;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  B.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  B.URL = i;
  function t(u, l, a) {
    function c(_, m, d, p) {
      var f;
      if (
        (typeof _ == "string" && (_ = s(_)),
        typeof m == "string" && (m = (0, r.default)(m)),
        ((f = m) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let v = new Uint8Array(16 + _.length);
      if (
        (v.set(m),
        v.set(_, m.length),
        (v = a(v)),
        (v[6] = (v[6] & 15) | l),
        (v[8] = (v[8] & 63) | 128),
        d)
      ) {
        p = p || 0;
        for (let h = 0; h < 16; ++h) d[p + h] = v[h];
        return d;
      }
      return (0, e.unsafeStringify)(v);
    }
    try {
      c.name = u;
    } catch {}
    return ((c.DNS = n), (c.URL = i), c);
  }
  return B;
}
var de = {},
  pr;
function Go() {
  if (pr) return de;
  ((pr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let f = 0; f < p.length; ++f) d[f] = p.charCodeAt(f);
    }
    return r(s(n(d), d.length * 8));
  }
  function r(d) {
    const p = [],
      f = d.length * 32,
      v = "0123456789abcdef";
    for (let h = 0; h < f; h += 8) {
      const g = (d[h >> 5] >>> (h % 32)) & 255,
        y = parseInt(v.charAt((g >>> 4) & 15) + v.charAt(g & 15), 16);
      p.push(y);
    }
    return p;
  }
  function o(d) {
    return (((d + 64) >>> 9) << 4) + 14 + 1;
  }
  function s(d, p) {
    ((d[p >> 5] |= 128 << (p % 32)), (d[o(p) - 1] = p));
    let f = 1732584193,
      v = -271733879,
      h = -1732584194,
      g = 271733878;
    for (let y = 0; y < d.length; y += 16) {
      const b = f,
        w = v,
        R = h,
        q = g;
      ((f = l(f, v, h, g, d[y], 7, -680876936)),
        (g = l(g, f, v, h, d[y + 1], 12, -389564586)),
        (h = l(h, g, f, v, d[y + 2], 17, 606105819)),
        (v = l(v, h, g, f, d[y + 3], 22, -1044525330)),
        (f = l(f, v, h, g, d[y + 4], 7, -176418897)),
        (g = l(g, f, v, h, d[y + 5], 12, 1200080426)),
        (h = l(h, g, f, v, d[y + 6], 17, -1473231341)),
        (v = l(v, h, g, f, d[y + 7], 22, -45705983)),
        (f = l(f, v, h, g, d[y + 8], 7, 1770035416)),
        (g = l(g, f, v, h, d[y + 9], 12, -1958414417)),
        (h = l(h, g, f, v, d[y + 10], 17, -42063)),
        (v = l(v, h, g, f, d[y + 11], 22, -1990404162)),
        (f = l(f, v, h, g, d[y + 12], 7, 1804603682)),
        (g = l(g, f, v, h, d[y + 13], 12, -40341101)),
        (h = l(h, g, f, v, d[y + 14], 17, -1502002290)),
        (v = l(v, h, g, f, d[y + 15], 22, 1236535329)),
        (f = a(f, v, h, g, d[y + 1], 5, -165796510)),
        (g = a(g, f, v, h, d[y + 6], 9, -1069501632)),
        (h = a(h, g, f, v, d[y + 11], 14, 643717713)),
        (v = a(v, h, g, f, d[y], 20, -373897302)),
        (f = a(f, v, h, g, d[y + 5], 5, -701558691)),
        (g = a(g, f, v, h, d[y + 10], 9, 38016083)),
        (h = a(h, g, f, v, d[y + 15], 14, -660478335)),
        (v = a(v, h, g, f, d[y + 4], 20, -405537848)),
        (f = a(f, v, h, g, d[y + 9], 5, 568446438)),
        (g = a(g, f, v, h, d[y + 14], 9, -1019803690)),
        (h = a(h, g, f, v, d[y + 3], 14, -187363961)),
        (v = a(v, h, g, f, d[y + 8], 20, 1163531501)),
        (f = a(f, v, h, g, d[y + 13], 5, -1444681467)),
        (g = a(g, f, v, h, d[y + 2], 9, -51403784)),
        (h = a(h, g, f, v, d[y + 7], 14, 1735328473)),
        (v = a(v, h, g, f, d[y + 12], 20, -1926607734)),
        (f = c(f, v, h, g, d[y + 5], 4, -378558)),
        (g = c(g, f, v, h, d[y + 8], 11, -2022574463)),
        (h = c(h, g, f, v, d[y + 11], 16, 1839030562)),
        (v = c(v, h, g, f, d[y + 14], 23, -35309556)),
        (f = c(f, v, h, g, d[y + 1], 4, -1530992060)),
        (g = c(g, f, v, h, d[y + 4], 11, 1272893353)),
        (h = c(h, g, f, v, d[y + 7], 16, -155497632)),
        (v = c(v, h, g, f, d[y + 10], 23, -1094730640)),
        (f = c(f, v, h, g, d[y + 13], 4, 681279174)),
        (g = c(g, f, v, h, d[y], 11, -358537222)),
        (h = c(h, g, f, v, d[y + 3], 16, -722521979)),
        (v = c(v, h, g, f, d[y + 6], 23, 76029189)),
        (f = c(f, v, h, g, d[y + 9], 4, -640364487)),
        (g = c(g, f, v, h, d[y + 12], 11, -421815835)),
        (h = c(h, g, f, v, d[y + 15], 16, 530742520)),
        (v = c(v, h, g, f, d[y + 2], 23, -995338651)),
        (f = _(f, v, h, g, d[y], 6, -198630844)),
        (g = _(g, f, v, h, d[y + 7], 10, 1126891415)),
        (h = _(h, g, f, v, d[y + 14], 15, -1416354905)),
        (v = _(v, h, g, f, d[y + 5], 21, -57434055)),
        (f = _(f, v, h, g, d[y + 12], 6, 1700485571)),
        (g = _(g, f, v, h, d[y + 3], 10, -1894986606)),
        (h = _(h, g, f, v, d[y + 10], 15, -1051523)),
        (v = _(v, h, g, f, d[y + 1], 21, -2054922799)),
        (f = _(f, v, h, g, d[y + 8], 6, 1873313359)),
        (g = _(g, f, v, h, d[y + 15], 10, -30611744)),
        (h = _(h, g, f, v, d[y + 6], 15, -1560198380)),
        (v = _(v, h, g, f, d[y + 13], 21, 1309151649)),
        (f = _(f, v, h, g, d[y + 4], 6, -145523070)),
        (g = _(g, f, v, h, d[y + 11], 10, -1120210379)),
        (h = _(h, g, f, v, d[y + 2], 15, 718787259)),
        (v = _(v, h, g, f, d[y + 9], 21, -343485551)),
        (f = i(f, b)),
        (v = i(v, w)),
        (h = i(h, R)),
        (g = i(g, q)));
    }
    return [f, v, h, g];
  }
  function n(d) {
    if (d.length === 0) return [];
    const p = d.length * 8,
      f = new Uint32Array(o(p));
    for (let v = 0; v < p; v += 8) f[v >> 5] |= (d[v / 8] & 255) << (v % 32);
    return f;
  }
  function i(d, p) {
    const f = (d & 65535) + (p & 65535);
    return (((d >> 16) + (p >> 16) + (f >> 16)) << 16) | (f & 65535);
  }
  function t(d, p) {
    return (d << p) | (d >>> (32 - p));
  }
  function u(d, p, f, v, h, g) {
    return i(t(i(i(p, d), i(v, g)), h), f);
  }
  function l(d, p, f, v, h, g, y) {
    return u((p & f) | (~p & v), d, p, h, g, y);
  }
  function a(d, p, f, v, h, g, y) {
    return u((p & v) | (f & ~v), d, p, h, g, y);
  }
  function c(d, p, f, v, h, g, y) {
    return u(p ^ f ^ v, d, p, h, g, y);
  }
  function _(d, p, f, v, h, g, y) {
    return u(f ^ (p | ~v), d, p, h, g, y);
  }
  var m = e;
  return ((de.default = m), de);
}
var yr;
function Vo() {
  if (yr) return ce;
  ((yr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.default = void 0));
  var e = o(to()),
    r = o(Go());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((ce.default = n), ce);
}
var fe = {},
  ve = {},
  mr;
function Wo() {
  if (mr) return ve;
  ((mr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((ve.default = r), ve);
}
var br;
function xo() {
  if (br) return fe;
  ((br = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = s(Wo()),
    r = s($n()),
    o = Je();
  function s(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, u, l) {
    if (e.default.randomUUID && !u && !t) return e.default.randomUUID();
    t = t || {};
    const a = t.random || (t.rng || r.default)();
    if (((a[6] = (a[6] & 15) | 64), (a[8] = (a[8] & 63) | 128), u)) {
      l = l || 0;
      for (let c = 0; c < 16; ++c) u[l + c] = a[c];
      return u;
    }
    return (0, o.unsafeStringify)(a);
  }
  var i = n;
  return ((fe.default = i), fe);
}
var he = {},
  ge = {},
  wr;
function Ho() {
  if (wr) return ge;
  ((wr = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
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
      for (let _ = 0; _ < c.length; ++_) n.push(c.charCodeAt(_));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const u = n.length / 4 + 2,
      l = Math.ceil(u / 16),
      a = new Array(l);
    for (let c = 0; c < l; ++c) {
      const _ = new Uint32Array(16);
      for (let m = 0; m < 16; ++m)
        _[m] =
          (n[c * 64 + m * 4] << 24) |
          (n[c * 64 + m * 4 + 1] << 16) |
          (n[c * 64 + m * 4 + 2] << 8) |
          n[c * 64 + m * 4 + 3];
      a[c] = _;
    }
    ((a[l - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (a[l - 1][14] = Math.floor(a[l - 1][14])),
      (a[l - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let c = 0; c < l; ++c) {
      const _ = new Uint32Array(80);
      for (let h = 0; h < 16; ++h) _[h] = a[c][h];
      for (let h = 16; h < 80; ++h) _[h] = r(_[h - 3] ^ _[h - 8] ^ _[h - 14] ^ _[h - 16], 1);
      let m = t[0],
        d = t[1],
        p = t[2],
        f = t[3],
        v = t[4];
      for (let h = 0; h < 80; ++h) {
        const g = Math.floor(h / 20),
          y = (r(m, 5) + e(g, d, p, f) + v + i[g] + _[h]) >>> 0;
        ((v = f), (f = p), (p = r(d, 30) >>> 0), (d = m), (m = y));
      }
      ((t[0] = (t[0] + m) >>> 0),
        (t[1] = (t[1] + d) >>> 0),
        (t[2] = (t[2] + p) >>> 0),
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
  var s = o;
  return ((ge.default = s), ge);
}
var Er;
function zo() {
  if (Er) return he;
  ((Er = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  var e = o(to()),
    r = o(Ho());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((he.default = n), he);
}
var _e = {},
  Or;
function Jo() {
  if (Or) return _e;
  ((Or = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((_e.default = e), _e);
}
var pe = {},
  Pr;
function Ko() {
  if (Pr) return pe;
  ((Pr = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = r(ze());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var s = o;
  return ((pe.default = s), pe);
}
var Rr;
function Yo() {
  return (
    Rr ||
      ((Rr = 1),
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
              return s.default;
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
        var r = c(No()),
          o = c(Vo()),
          s = c(xo()),
          n = c(zo()),
          i = c(Jo()),
          t = c(Ko()),
          u = c(ze()),
          l = c(Je()),
          a = c(eo());
        function c(_) {
          return _ && _.__esModule ? _ : { default: _ };
        }
      })(ct)),
    ct
  );
}
var Ir;
function Xo() {
  if (Ir) return ie;
  ((Ir = 1),
    Object.defineProperty(ie, "__esModule", { value: !0 }),
    (ie.createAdfRendererIframeProps = void 0));
  const e = Yo(),
    r = async (o, s) => {
      const n = await Do(
          () => import("./index-DSebzXMd.js").then((c) => c.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        u = `${t}/forge-apps/adf-renderer`,
        l = s || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        a = () => {
          var c, _, m, d, p, f;
          const v = document.getElementById(l),
            h = {
              type: "adf-document",
              document: (c = o.extension.macro) === null || c === void 0 ? void 0 : c.body,
              timestamp: Date.now(),
              source: "forge-adf-renderer",
              localId: o.localId,
              isEditing:
                (m = (_ = o.extension) === null || _ === void 0 ? void 0 : _.isEditing) !== null &&
                m !== void 0
                  ? m
                  : !1,
              contentId:
                (p = (d = o.extension) === null || d === void 0 ? void 0 : d.content) === null ||
                p === void 0
                  ? void 0
                  : p.id,
            };
          (i.iframeResizer(
            {
              heightCalculationMethod: "taggedElement",
              widthCalculationMethod: "bodyScroll",
              initCallback: (g) => {
                var y;
                (y = g?.iFrameResizer) === null || y === void 0 || y.resize();
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
        { id: l, src: u, onLoad: a }
      );
    };
  return ((ie.createAdfRendererIframeProps = r), ie);
}
var ye = {},
  Sr;
function Zo() {
  if (Sr) return ye;
  ((Sr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.onClose = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = async (n) => {
      try {
        if ((await o("onClose", n)) === !1)
          throw new r.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new r.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  return ((ye.onClose = s), ye);
}
var qr;
function ro() {
  if (qr) return z;
  ((qr = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.view = void 0));
  const e = wo(),
    r = Eo(),
    o = Oo(),
    s = Po(),
    n = Ro(),
    i = To(),
    t = Bo(),
    u = Mo(),
    l = Ao(),
    a = Xo(),
    c = Zo();
  return (
    (z.view = {
      submit: e.submit,
      close: r.close,
      onClose: c.onClose,
      open: o.open,
      refresh: s.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: u.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: a.createAdfRendererIframeProps,
    }),
    z
  );
}
var Cr;
function Ke() {
  return (
    Cr ||
      ((Cr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(ro(), e));
      })(nt)),
    nt
  );
}
var lt = {},
  me = {},
  jr;
function Qo() {
  if (jr) return me;
  ((jr = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.router = void 0));
  const r = (0, E().getCallBridge)(),
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
    s = (t) => {
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
  return ((me.router = { getUrl: o, navigate: s, open: n, reload: i }), me);
}
var Tr;
function $o() {
  return (
    Tr ||
      ((Tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Qo(), e));
      })(lt)),
    lt
  );
}
var dt = {},
  be = {},
  Br;
function ei() {
  if (Br) return be;
  ((Br = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.Modal = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = () => {};
  class n {
    constructor(t) {
      var u, l;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || s),
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
var Mr;
function ti() {
  return (
    Mr ||
      ((Mr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(ei(), e));
      })(dt)),
    dt
  );
}
var S = {},
  A = {},
  Fr;
function ri() {
  if (Fr) return A;
  ((Fr = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.productFetchApi = A.remoteFetchApi = void 0));
  const e = Zn(),
    r = async (t, u = !1) => {
      const l = {};
      for (const [a, c] of t.entries())
        if (u ? a.startsWith("file") : a === "file") {
          const m = c.name,
            d = c.type;
          ((l[a] = await (0, e.blobToBase64)(c)), (l[`__${a}Name`] = m), (l[`__${a}Type`] = d));
        } else l[a] = c;
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
    s = async (t, u) => {
      const l = u?.body instanceof FormData,
        a = l ? await r(u?.body, t === "remote") : u?.body,
        c = new Request("", { body: a, method: u?.method, headers: u?.headers }),
        _ = Object.fromEntries(c.headers.entries());
      return {
        body: c.method !== "GET" ? await c.text() : null,
        headers: new Headers(_),
        isMultipartFormData: l,
      };
    },
    n = (t) => {
      const u = async (l, a) => {
        const c = o(a),
          { body: _, headers: m, isMultipartFormData: d } = await s("remote", c),
          p = {
            remoteKey: l,
            fetchRequestInit: { ...c, body: _, headers: [...m.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: v,
            statusText: h,
            status: g,
            isAttachment: y,
          } = await t("fetchRemote", p),
          b = y ? (0, e.base64ToBlob)(f, v["content-type"]) : f;
        return new Response(b || null, { headers: v, status: g, statusText: h });
      };
      return { requestRemote: (l, a) => u(l, a) };
    };
  A.remoteFetchApi = n;
  const i = (t) => {
    const u = async (l, a, c) => {
      const _ = o(c),
        { body: m, headers: d, isMultipartFormData: p } = await s("product", _);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const f = {
          product: l,
          restPath: a,
          fetchRequestInit: { ..._, body: m, headers: [...d.entries()] },
          isMultipartFormData: p,
        },
        {
          body: v,
          headers: h,
          statusText: g,
          status: y,
          isAttachment: b,
        } = await t("fetchProduct", f),
        w = b ? (0, e.base64ToBlob)(v, h["content-type"]) : v;
      return new Response(w || null, { headers: h, status: y, statusText: g });
    };
    return {
      requestConfluence: (l, a) => u("confluence", l, a),
      requestJira: (l, a) => u("jira", l, a),
      requestBitbucket: (l, a) => u("bitbucket", l, a),
    };
  };
  return ((A.productFetchApi = i), A);
}
var Ar;
function ni() {
  if (Ar) return S;
  Ar = 1;
  var e;
  (Object.defineProperty(S, "__esModule", { value: !0 }),
    (S.requestRemote = S.requestBitbucket = S.requestJira = S.requestConfluence = void 0));
  const r = E(),
    o = ri();
  return (
    (e = (0, o.productFetchApi)((0, r.getCallBridge)())),
    (S.requestConfluence = e.requestConfluence),
    (S.requestJira = e.requestJira),
    (S.requestBitbucket = e.requestBitbucket),
    (S.requestRemote = (0, o.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    S
  );
}
var ft = {},
  we = {},
  kr;
function oi() {
  if (kr) return we;
  ((kr = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.showFlag = void 0));
  const e = E(),
    r = O(),
    o = (0, e.getCallBridge)(),
    s = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = o("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, o("closeFlag", { id: n.id })) };
    };
  return ((we.showFlag = s), we);
}
var Ur;
function ii() {
  return (
    Ur ||
      ((Ur = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.showFlag = void 0));
        var r = oi();
        Object.defineProperty(e, "showFlag", {
          enumerable: !0,
          get: function () {
            return r.showFlag;
          },
        });
      })(ft)),
    ft
  );
}
var vt = {},
  Dr;
function ai() {
  return (
    Dr ||
      ((Dr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(Qn(), e));
      })(vt)),
    vt
  );
}
var ht = {},
  Ee = {},
  Lr;
function si() {
  if (Lr) return Ee;
  ((Lr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.realtime = void 0));
  const r = (0, E().getCallBridge)(),
    o = (t, u, l) => r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: l }),
    s = (t, u, l) => r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: l }),
    n = (t, u, l) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: l, isGlobal: !0 }),
    i = (t, u, l) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: l, isGlobal: !0 });
  return ((Ee.realtime = { publish: o, subscribe: s, publishGlobal: n, subscribeGlobal: i }), Ee);
}
var gt = {},
  Nr;
function ui() {
  return (
    Nr ||
      ((Nr = 1),
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
var Gr;
function ci() {
  return (
    Gr ||
      ((Gr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
        var r = si();
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
      })(ht)),
    ht
  );
}
var _t = {},
  Oe = {},
  pt = {},
  Vr;
function li() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = E(),
          o = O(),
          s = 30,
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
              if (u.agentName.length > s) throw new Error("rovo agent name too long");
              if (u.agentKey.length > s) throw new Error("rovo agent key too long");
            }
            const l = i(u);
            if ((await n("openRovo", l)) === !1)
              throw new o.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(pt)),
    pt
  );
}
var Pe = {},
  Wr;
function di() {
  if (Wr) return Pe;
  ((Wr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.isEnabled = void 0));
  const r = (0, E().getCallBridge)(),
    o = () => r("isRovoEnabled");
  return ((Pe.isEnabled = o), Pe);
}
var xr;
function fi() {
  if (xr) return Oe;
  ((xr = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.rovo = void 0));
  const e = li(),
    r = di();
  return ((Oe.rovo = { open: e.open, isEnabled: r.isEnabled }), Oe);
}
var Hr;
function vi() {
  return (
    Hr ||
      ((Hr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(fi(), e));
      })(_t)),
    _t
  );
}
var T = {},
  zr;
function hi() {
  if (zr) return T;
  ((zr = 1),
    Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.createTranslationFunction = T.getTranslations = T.resetTranslationsCache = void 0));
  const e = Xn(),
    r = Ke(),
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
    s = new e.TranslationsGetter(o),
    n = () => {
      s.reset();
    };
  T.resetTranslationsCache = n;
  const i = async (u = null, l = { fallback: !0 }) => {
    let a = u;
    return (a || (a = (await r.view.getContext()).locale), await s.getTranslations(a, l));
  };
  T.getTranslations = i;
  const t = async (u = null) => {
    let l = u;
    l || (l = (await r.view.getContext()).locale);
    const a = new e.Translator(l, s);
    return (
      await a.init(),
      (c, _) => {
        var m, d;
        return (d = (m = a.translate(c)) !== null && m !== void 0 ? m : _) !== null && d !== void 0
          ? d
          : c;
      }
    );
  };
  return ((T.createTranslationFunction = t), T);
}
var yt = {},
  Re = {},
  Jr;
function gi() {
  if (Jr) return Re;
  ((Jr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.permissions = void 0));
  const r = (0, E().getCallBridge)(),
    o = async (l) => r("__permission__egressGet", l),
    s = async (l) => r("__permission__egressSet", l),
    n = async (l) => r("__permission__egressDeleteDomain", l),
    i = async (l) => r("__permission__egressDeleteGroup", l),
    t = async (l) => r("__permission__remoteGet", l),
    u = async (l) => r("__permission__remoteSet", l);
  return (
    (Re.permissions = {
      egress: { get: o, set: s, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: u },
    }),
    Re
  );
}
var k = {},
  mt = {},
  bt = {},
  Ie = {},
  Se = {},
  Kr;
function jt() {
  if (Kr) return Se;
  ((Kr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.parseUrl = void 0));
  function e(r) {
    var o, s;
    const n =
        (s = (o = r.match(/^(.*?:)/)) === null || o === void 0 ? void 0 : o[0]) !== null &&
        s !== void 0
          ? s
          : "https:",
      i = r.replace(n, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0],
      t = i.split("/")[0],
      u = i.slice(t.length) || "/";
    return { protocol: n, hostname: t, pathname: u };
  }
  return ((Se.parseUrl = e), Se);
}
var wt = {},
  Yr;
function no() {
  return (
    Yr ||
      ((Yr = 1),
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
        const s = (t) => {
          if (t?.length === 0) return [];
          const u = /^(.*?:\/\/)/,
            l = new Set(),
            a = [];
          return (
            t.forEach((c) => {
              const _ = u.test(c) ? c : `https://${c}`,
                m = (0, r.parseUrl)(_);
              m.hostname.startsWith("*")
                ? (l.add(m.hostname.substring(2)), a.push(o(m.hostname)))
                : l.add(m.hostname);
            }),
            [...l].sort().reduce((c, _) => (a.some((m) => m.test(_)) || c.push(_), c), [])
          );
        };
        ((e.sortAndGroupEgressPermissionsByDomain = s),
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
          const u = t.egress.filter((a) => {
              var c;
              if (
                ((c = a.category) === null || c === void 0 ? void 0 : c.toUpperCase()) ===
                n.ANALYTICS
              )
                if (t.installationConfig) {
                  const _ = t.installationConfig.find(
                    (m) => m.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS",
                  );
                  return _?.value !== !1;
                } else return t.overrides.ALLOW_EGRESS_ANALYTICS !== !1;
              return !0;
            }),
            l = new Map();
          for (const a of u)
            (l.has(a.type) || l.set(a.type, a.addresses),
              l.set(a.type, [...l.get(a.type), ...a.addresses]));
          return [...l.entries()].map(([a, c]) => ({ type: a, addresses: [...new Set(c)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(wt)),
    wt
  );
}
var Xr;
function _i() {
  if (Xr) return Ie;
  ((Xr = 1),
    Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie.EgressFilteringService = void 0));
  const e = jt(),
    r = no();
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
  return ((Ie.EgressFilteringService = o), Ie);
}
var Zr;
function pi() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(_i(), e), r.__exportStar(jt(), e), r.__exportStar(no(), e));
      })(bt)),
    bt
  );
}
var Qr;
function yi() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), I.__exportStar(pi(), e));
      })(mt)),
    mt
  );
}
var $r;
function mi() {
  if ($r) return k;
  (($r = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.checkPermissions = k.createPermissionUtils = void 0));
  const e = yi(),
    r = Ke();
  function o(p) {
    return typeof p == "string" ? p : "address" in p && p.address ? p.address : p.remote || "";
  }
  const s = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(p) {
    if (!p) return null;
    const { scopes: f, external: v = {} } = p,
      h = Array.isArray(f) ? f : Object.keys(f || {});
    return {
      hasScope: (g) => h.includes(g),
      canFetchFrom: (g, y) => {
        var b;
        const w = (b = v.fetch) === null || b === void 0 ? void 0 : b[g];
        if (!w?.length) return !1;
        const R = w.map(o).filter((C) => C.length > 0);
        if (R.length === 0) return !1;
        const q = new e.EgressFilteringService(R);
        return g === "client" ? q.isValidUrlCSP(y) : q.isValidUrl(y);
      },
      canLoadResource: (g, y) => {
        const b = v[g];
        if (!b?.length) return !1;
        const w = b.map(o).filter((Xe) => Xe.length > 0);
        return w.length === 0 ? !1 : new e.EgressFilteringService(w).isValidUrlCSP(y);
      },
      getScopes: () => h,
      getExternalPermissions: () => v,
      hasAnyPermissions: () => h.length > 0 || Object.keys(v).length > 0,
    };
  }
  k.createPermissionUtils = i;
  function t(p, f) {
    if (!p?.length) return;
    const v = p.filter((h) => !f.hasScope(h));
    return v.length > 0 ? v : void 0;
  }
  function u(p, f) {
    if (!p?.fetch) return;
    const v = {};
    return (
      n.forEach((h) => {
        var g;
        const y = (g = p.fetch) === null || g === void 0 ? void 0 : g[h];
        if (y?.length) {
          const b = y.filter((w) => !f.canFetchFrom(h, w));
          b.length > 0 && (v[h] = b);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function l(p, f) {
    const v = {};
    return (
      s.forEach((h) => {
        const g = p?.[h];
        if (g?.length) {
          const y = g.filter((b) => !f.canLoadResource(h, b));
          y.length > 0 && (v[h] = y);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function a(p, f) {
    if (!p) return;
    const v = u(p, f),
      h = l(p, f);
    if (!v && !h) return;
    const g = {};
    return (v && (g.fetch = v), h && Object.assign(g, h), g);
  }
  function c(p, f) {
    if (p !== void 0 && (typeof p != "object" || p === null || Array.isArray(p)))
      throw new TypeError(
        `${f} should be an object, not ${Array.isArray(p) ? "an array" : `a ${typeof p}`}`,
      );
  }
  function _(p, f) {
    if (p !== void 0 && !Array.isArray(p))
      throw new TypeError(`${f} should be an array, not a ${typeof p}`);
  }
  function m(p) {
    _(p.scopes, "scopes");
    const f = p.external;
    if (f !== void 0) {
      if ((c(f, "external"), f.fetch !== void 0)) {
        c(f.fetch, "external.fetch");
        for (const v of n) _(f.fetch[v], `external.fetch.${v}`);
      }
      for (const v of s) _(f[v], `external.${v}`);
    }
  }
  async function d(p, f) {
    var v;
    if (!p) return { granted: !1, missing: null };
    if ((m(p), !(!((v = p.scopes) === null || v === void 0) && v.length) && !p.external))
      return { granted: !0, missing: null };
    let h = f;
    h || (h = (await r.view.getContext()).permissions);
    const g = i(h);
    if (!g) return { granted: !1, missing: null };
    const y = {};
    let b = !0;
    const w = t(p.scopes, g);
    w && ((y.scopes = w), (b = !1));
    const R = a(p.external, g);
    return (R && ((y.external = R), (b = !1)), { granted: b, missing: b ? null : y });
  }
  return ((k.checkPermissions = d), k);
}
var en;
function bi() {
  return (
    en ||
      ((en = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(gi(), e), r.__exportStar(mi(), e));
      })(yt)),
    yt
  );
}
var Et = {},
  Ot = {},
  Pt = {},
  qe = {},
  Ce = {},
  tn;
function oo() {
  return (
    tn ||
      ((tn = 1),
      Object.defineProperty(Ce, "__esModule", { value: !0 }),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Ce.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Ce
  );
}
var rn;
function Ye() {
  if (rn) return qe;
  ((rn = 1),
    Object.defineProperty(qe, "__esModule", { value: !0 }),
    (qe.checkRestrictedEnvironment = void 0));
  const e = O(),
    r = Ke(),
    o = oo(),
    s = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(o.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((qe.checkRestrictedEnvironment = s), qe);
}
var nn;
function wi() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = De(),
          o = O(),
          s = Ye(),
          i = (0, E().getCallBridge)(),
          t = (c, _) => {
            const m = atob(c),
              d = new Array(m.length);
            for (let f = 0; f < m.length; f++) d[f] = m.charCodeAt(f);
            const p = new Uint8Array(d);
            return new Blob([p], { type: _ || "application/octet-stream" });
          },
          u = async (c) => {
            const _ = c.size,
              m = await c.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", m),
              p = new Uint8Array(d),
              f = btoa(String.fromCharCode(...p));
            return { length: _, checksum: f, checksumType: "SHA256" };
          },
          l = async ({ functionKey: c, objects: _ }) => {
            if (!c || c.length === 0)
              throw new o.BridgeAPIError(
                "functionKey is required to filter and generate presigned URLs",
              );
            if (!Array.isArray(_) || _.length === 0)
              throw new o.BridgeAPIError("objects array is required and must not be empty");
            const m = _.map((g, y) => {
                if (g instanceof Blob) return g;
                if (!(g && typeof g == "object" && "data" in g && typeof g.data == "string"))
                  throw new o.BridgeAPIError(
                    `Invalid object type at index ${y}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
                  );
                try {
                  return t(g.data, g.mimeType);
                } catch {
                  throw new o.BridgeAPIError(
                    `Invalid base64 data at index ${y}. The data string must be valid base64 encoded.`,
                  );
                }
              }),
              d = await Promise.all(m.map((g) => u(g))),
              p = await (0, r.invoke)(c, { allObjectMetadata: d });
            if (!p || typeof p != "object")
              throw new o.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              v = new Map();
            return (
              m.forEach((g, y) => {
                const b = d[y];
                (f.set(b.checksum, g), v.set(b.checksum, y));
              }),
              Object.entries(p).map(([g, y]) => {
                const { key: b, checksum: w } = y,
                  R = f.get(w),
                  q = v.get(w);
                return q === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: b,
                        error: `Index not found for checksum ${w}`,
                      }),
                      index: -1,
                    }
                  : R
                    ? {
                        promise: (async () => {
                          try {
                            const C = await fetch(g, {
                              method: "PUT",
                              body: R,
                              headers: {
                                "Content-Type": R.type || "application/octet-stream",
                                "Content-Length": R.size.toString(),
                              },
                            });
                            return {
                              success: C.ok,
                              key: b,
                              status: C.status,
                              error: C.ok ? void 0 : `Upload failed with status ${C.status}`,
                            };
                          } catch (C) {
                            return {
                              success: !1,
                              key: b,
                              status: 503,
                              error: C instanceof Error ? C.message : "Upload failed",
                            };
                          }
                        })(),
                        index: q,
                        objectType: R.type,
                        objectSize: R.size,
                      }
                    : {
                        promise: Promise.resolve({
                          success: !1,
                          key: b,
                          error: `Blob not found for checksum ${w}`,
                        }),
                        index: q,
                      };
              })
            );
          };
        e.createUploadPromises = l;
        const a = async ({ functionKey: c, objects: _ }) => {
          (await (0, s.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const m = await (0, e.createUploadPromises)({ functionKey: c, objects: _ });
          return await Promise.all(m.map((p) => p.promise));
        };
        e.upload = a;
      })(Pt)),
    Pt
  );
}
var je = {},
  on;
function Ei() {
  if (on) return je;
  ((on = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.deleteObjects = void 0));
  const e = De(),
    r = O(),
    o = Ye(),
    n = (0, E().getCallBridge)(),
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
  return ((je.deleteObjects = i), je);
}
var Te = {},
  an;
function Oi() {
  if (an) return Te;
  ((an = 1), Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.download = void 0));
  const e = De(),
    r = O(),
    o = Ye(),
    n = (0, E().getCallBridge)(),
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
      const a = Object.entries(l).map(async ([_, m]) => {
        try {
          const d = await fetch(_, { method: "GET" });
          if (!d.ok)
            return {
              success: !1,
              key: m,
              status: d.status,
              error: `Download failed with status ${d.status}`,
            };
          const p = await d.blob();
          return { success: !0, key: m, blob: p, status: d.status };
        } catch (d) {
          return {
            success: !1,
            key: m,
            status: 503,
            error: d instanceof Error ? d.message : "Download failed",
          };
        }
      });
      return await Promise.all(a);
    };
  return ((Te.download = i), Te);
}
var Be = {},
  sn;
function Pi() {
  if (sn) return Be;
  ((sn = 1), Object.defineProperty(Be, "__esModule", { value: !0 }), (Be.getMetadata = void 0));
  const e = De(),
    r = O(),
    o = Ye(),
    n = (0, E().getCallBridge)(),
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
        u.map(async (a) => {
          const c = await (0, e.invoke)(t, { key: a });
          return !c || typeof c != "object"
            ? { key: a, error: "Invalid response from functionKey" }
            : c;
        }),
      );
    };
  return ((Be.getMetadata = i), Be);
}
var un;
function Ri() {
  return (
    un ||
      ((un = 1),
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
          s = Oi(),
          n = Pi();
        e.objectStore = {
          upload: r.upload,
          download: s.download,
          getMetadata: n.getMetadata,
          delete: o.deleteObjects,
        };
      })(Ot)),
    Ot
  );
}
var cn;
function Ii() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = I;
        (r.__exportStar(Ri(), e), r.__exportStar(oo(), e));
      })(Et)),
    Et
  );
}
var Rt = {},
  Me = {},
  Fe = {},
  ln;
function Si() {
  if (ln) return Fe;
  ((ln = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.Evaluator = void 0));
  class e {
    constructor(o) {
      this.results = o;
    }
    checkFlag(o, s) {
      if (!this.results || !this.results.feature_flags) return s;
      const n = this.results.feature_flags;
      let i = "";
      try {
        i = this.getHashedValue(o);
      } catch (u) {
        return (console.error("Unexpected error occurred while evaluating flag ", u), s);
      }
      if (!i) return s;
      const t = n[i];
      return t ? (t.disabled ? !1 : t.value) : s;
    }
    shutDown() {
      this.results = void 0;
    }
    getHashedValue(o) {
      if (typeof o != "string") return "";
      const s = o.trim();
      if (s.length === 0) return "";
      let n = 5381;
      for (let i = 0; i < s.length; i += 1) {
        const t = s.charCodeAt(i);
        ((n = (n << 5) + n + t), (n |= 0));
      }
      return (n >>> 0).toString();
    }
  }
  return ((Fe.Evaluator = e), Fe);
}
var Ae = {},
  It = {},
  dn;
function io() {
  return (
    dn ||
      ((dn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FeatureFlagEventType = void 0),
          (function (r) {
            r.CHECKFLAG = "checkFlag";
          })(e.FeatureFlagEventType || (e.FeatureFlagEventType = {})));
      })(It)),
    It
  );
}
var fn;
function qi() {
  if (fn) return Ae;
  ((fn = 1),
    Object.defineProperty(Ae, "__esModule", { value: !0 }),
    (Ae.trackFeatureFlagEvent = void 0));
  const e = E(),
    r = O(),
    o = He(),
    s = io(),
    n = 500,
    i = 1e3 * 25,
    t = (0, e.getCallBridge)(),
    u = (a) => {
      if (!a || !a.type || !a.properties)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter type, and properties are required in the payload.",
        );
      if (!(a.type.toUpperCase() in s.FeatureFlagEventType))
        throw new r.BridgeAPIError("Event type is not supported");
      if (Object.values(a).some((c) => typeof c == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    l = (a) => (u(a), t("trackFeatureFlagEvent", a));
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
  vn;
function Ci() {
  if (vn) return ke;
  ((vn = 1),
    Object.defineProperty(ke, "__esModule", { value: !0 }),
    (ke.initFeatureFlags = void 0));
  const e = E(),
    r = O(),
    o = He(),
    s = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (l) => {
      if (!l || !l.user || !l.config)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(l).some((a) => typeof a == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (l) => (t(l), i("initFeatureFlags", { user: l.user, config: l.config }));
  return (
    (ke.initFeatureFlags = (0, o.withRateLimiter)(
      u,
      s,
      n,
      `Feature flags initialisation calls are rate limited at ${s}req/${n / 1e3}s`,
    )),
    ke
  );
}
var hn;
function ji() {
  if (hn) return Me;
  ((hn = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.FeatureFlags = void 0));
  const e = Si(),
    r = qi(),
    o = Ci(),
    s = io();
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
        type: s.FeatureFlagEventType.CHECKFLAG,
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
var gn;
function Ti() {
  return (
    gn ||
      ((gn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FeatureFlags = void 0));
        var r = ji();
        Object.defineProperty(e, "FeatureFlags", {
          enumerable: !0,
          get: function () {
            return r.FeatureFlags;
          },
        });
      })(Rt)),
    Rt
  );
}
var _n;
function Bi() {
  return (
    _n ||
      ((_n = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.i18n = e.NavigationTarget = void 0));
        const r = I;
        var o = _o();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          r.__exportStar(De(), e),
          r.__exportStar(bo(), e),
          r.__exportStar(Ke(), e),
          r.__exportStar($o(), e),
          r.__exportStar(ti(), e),
          r.__exportStar(ni(), e),
          r.__exportStar(ii(), e),
          r.__exportStar(ai(), e),
          r.__exportStar(ci(), e),
          r.__exportStar(vi(), e),
          (e.i18n = r.__importStar(hi())),
          r.__exportStar(bi(), e),
          r.__exportStar(Ii(), e),
          r.__exportStar(Ti(), e));
      })(Qe)),
    Qe
  );
}
var We = Bi();
async function Ue(e, r, o) {
  await We.showFlag({
    id: `checklist-${Date.now()}`,
    title: e,
    type: o,
    description: r,
    isAutoDismiss: !0,
  });
}
function Mi(e) {
  return new Date(e).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function pn() {
  return P.jsx("div", {
    className: "loading-overlay",
    children: P.jsx("div", { className: "loading-spinner" }),
  });
}
function Fi() {
  const [e, r] = Le.useState({
      checkList: "[]",
      issueId: "",
      updatedAt: new Date(),
      updateDisplayName: "",
      updateId: "",
    }),
    [o, s] = Le.useState(!0),
    [n, i] = Le.useState(!1);
  Le.useEffect(() => {
    t();
  }, []);
  const t = async () => {
      try {
        const a = await We.invoke("getCheckList");
        r(a);
      } catch {
        await Ue(
          "Checklist Loading Error",
          "Unable to load the checklist. Please try again later.",
          "error",
        );
      } finally {
        s(!1);
      }
    },
    u = async (a) => {
      try {
        i(!0);
        const c = await We.invoke(a ? "updateWithOptimisticLocking" : "update", e);
        c.error
          ? c.concurrent
            ? (await Ue(
                "Concurrent Modification Detected",
                `User ${c.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
                "error",
              ),
              await t())
            : await Ue(
                "Update Failed",
                c.message || "Unable to update the checklist. Please try again later.",
                "error",
              )
          : c.data &&
            (r(c.data),
            await Ue(
              "Update Successful",
              "The checklist has been successfully updated",
              "success",
            ));
      } catch {
        await Ue(
          "Update Error",
          "An error occurred while updating the checklist. Please try again later.",
          "error",
        );
      } finally {
        i(!1);
      }
    },
    l = (a) => {
      const c = [...JSON.parse(e.checkList)];
      ((c[a] = { ...c[a], done: !c[a].done }), r({ ...e, checkList: JSON.stringify(c) }));
    };
  return o
    ? P.jsx("div", { className: "checklist-container", children: P.jsx(pn, {}) })
    : P.jsxs("div", {
        className: "checklist-container",
        children: [
          n && P.jsx(pn, {}),
          P.jsxs("div", {
            className: "checklist-header",
            children: [
              P.jsx("h2", { children: "Issue Checklist" }),
              P.jsxs("div", {
                className: "last-update",
                children: ["Last updated by ", e.updateDisplayName, " on ", Mi(e.updatedAt)],
              }),
            ],
          }),
          P.jsx("div", {
            className: "checklist",
            children: JSON.parse(e.checkList).map((a, c) =>
              P.jsxs(
                "div",
                {
                  className: "checklist-item",
                  children: [
                    P.jsx("input", { type: "checkbox", checked: a.done, onChange: () => l(c) }),
                    P.jsx("span", { children: a.label }),
                  ],
                },
                c,
              ),
            ),
          }),
          P.jsxs("div", {
            className: "buttons",
            children: [
              P.jsx("button", { onClick: () => u(!0), children: "Update with Locking" }),
              P.jsx("button", { onClick: () => u(!1), children: "Update without Locking" }),
            ],
          }),
        ],
      });
}
const Ai = document.getElementById("root"),
  ki = ao.createRoot(Ai),
  yn = () => {
    ki.render(P.jsx(Fi, {}));
  };
We.view.theme
  .enable()
  .then(() => {
    yn();
  })
  .catch((e) => {
    (console.error(e.message), yn());
  });
