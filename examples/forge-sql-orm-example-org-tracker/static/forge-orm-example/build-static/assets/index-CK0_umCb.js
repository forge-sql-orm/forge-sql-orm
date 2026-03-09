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
var Ze = { exports: {} },
  V = {};
var Tt;
function co() {
  if (Tt) return V;
  Tt = 1;
  var e = mn(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(u, c, s) {
    var l,
      _ = {},
      m = null,
      d = null;
    (s !== void 0 && (m = "" + s),
      c.key !== void 0 && (m = "" + c.key),
      c.ref !== void 0 && (d = c.ref));
    for (l in c) a.call(c, l) && !i.hasOwnProperty(l) && (_[l] = c[l]);
    if (u && u.defaultProps) for (l in ((c = u.defaultProps), c)) _[l] === void 0 && (_[l] = c[l]);
    return { $$typeof: r, type: u, key: m, ref: d, props: _, _owner: n.current };
  }
  return ((V.Fragment = o), (V.jsx = t), (V.jsxs = t), V);
}
var Bt;
function lo() {
  return (Bt || ((Bt = 1), (Ze.exports = co())), Ze.exports);
}
var O = lo(),
  q = mn(),
  Qe = {},
  It = function (e, r) {
    return (
      (It =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (o, a) {
            o.__proto__ = a;
          }) ||
        function (o, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (o[n] = a[n]);
        }),
      It(e, r)
    );
  };
function bn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  It(e, r);
  function o() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
}
var xe = function () {
  return (
    (xe =
      Object.assign ||
      function (r) {
        for (var o, a = 1, n = arguments.length; a < n; a++) {
          o = arguments[a];
          for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }),
    xe.apply(this, arguments)
  );
};
function wn(e, r) {
  var o = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      r.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (o[a[n]] = e[a[n]]);
  return o;
}
function En(e, r, o, a) {
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
function On(e, r) {
  return function (o, a) {
    r(o, a, e);
  };
}
function Pn(e, r, o, a, n, i) {
  function t(h) {
    if (h !== void 0 && typeof h != "function") throw new TypeError("Function expected");
    return h;
  }
  for (
    var u = a.kind,
      c = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      s = !r && e ? (a.static ? e : e.prototype) : null,
      l = r || (s ? Object.getOwnPropertyDescriptor(s, a.name) : {}),
      _,
      m = !1,
      d = o.length - 1;
    d >= 0;
    d--
  ) {
    var p = {};
    for (var f in a) p[f] = f === "access" ? {} : a[f];
    for (var f in a.access) p.access[f] = a.access[f];
    p.addInitializer = function (h) {
      if (m) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(t(h || null));
    };
    var v = (0, o[d])(u === "accessor" ? { get: l.get, set: l.set } : l[c], p);
    if (u === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      ((_ = t(v.get)) && (l.get = _),
        (_ = t(v.set)) && (l.set = _),
        (_ = t(v.init)) && n.unshift(_));
    } else (_ = t(v)) && (u === "field" ? n.unshift(_) : (l[c] = _));
  }
  (s && Object.defineProperty(s, a.name, l), (m = !0));
}
function Rn(e, r, o) {
  for (var a = arguments.length > 2, n = 0; n < r.length; n++)
    o = a ? r[n].call(e, o) : r[n].call(e);
  return a ? o : void 0;
}
function Sn(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function In(e, r, o) {
  return (
    typeof r == "symbol" && (r = r.description ? "[".concat(r.description, "]") : ""),
    Object.defineProperty(e, "name", { configurable: !0, value: o ? "".concat(o, " ", r) : r })
  );
}
function jn(e, r) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, r);
}
function Cn(e, r, o, a) {
  function n(i) {
    return i instanceof o
      ? i
      : new o(function (t) {
          t(i);
        });
  }
  return new (o || (o = Promise))(function (i, t) {
    function u(l) {
      try {
        s(a.next(l));
      } catch (_) {
        t(_);
      }
    }
    function c(l) {
      try {
        s(a.throw(l));
      } catch (_) {
        t(_);
      }
    }
    function s(l) {
      l.done ? i(l.value) : n(l.value).then(u, c);
    }
    s((a = a.apply(e, r || [])).next());
  });
}
function qn(e, r) {
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
    return function (l) {
      return c([s, l]);
    };
  }
  function c(s) {
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
      } catch (l) {
        ((s = [6, l]), (n = 0));
      } finally {
        a = i = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var We = Object.create
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
function Tn(e, r) {
  for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && We(r, e, o);
}
function ze(e) {
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
function Bn() {
  for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Ct(arguments[r]));
  return e;
}
function Fn() {
  for (var e = 0, r = 0, o = arguments.length; r < o; r++) e += arguments[r].length;
  for (var a = Array(e), n = 0, r = 0; r < o; r++)
    for (var i = arguments[r], t = 0, u = i.length; t < u; t++, n++) a[n] = i[t];
  return a;
}
function An(e, r, o) {
  if (o || arguments.length === 2)
    for (var a = 0, n = r.length, i; a < n; a++)
      (i || !(a in r)) && (i || (i = Array.prototype.slice.call(r, 0, a)), (i[a] = r[a]));
  return e.concat(i || Array.prototype.slice.call(r));
}
function L(e) {
  return this instanceof L ? ((this.v = e), this) : new L(e);
}
function Mn(e, r, o) {
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
    return function (p) {
      return Promise.resolve(p).then(d, _);
    };
  }
  function u(d, p) {
    a[d] &&
      ((n[d] = function (f) {
        return new Promise(function (v, h) {
          i.push([d, f, v, h]) > 1 || c(d, f);
        });
      }),
      p && (n[d] = p(n[d])));
  }
  function c(d, p) {
    try {
      s(a[d](p));
    } catch (f) {
      m(i[0][3], f);
    }
  }
  function s(d) {
    d.value instanceof L ? Promise.resolve(d.value.v).then(l, _) : m(i[0][2], d);
  }
  function l(d) {
    c("next", d);
  }
  function _(d) {
    c("throw", d);
  }
  function m(d, p) {
    (d(p), i.shift(), i.length && c(i[0][0], i[0][1]));
  }
}
function kn(e) {
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
          return (o = !o) ? { value: L(e[n](t)), done: !1 } : i ? i(t) : t;
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
    : ((e = typeof ze == "function" ? ze(e) : e[Symbol.iterator]()),
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
        return new Promise(function (u, c) {
          ((t = e[i](t)), n(u, c, t.done, t.value));
        });
      };
  }
  function n(i, t, u, c) {
    Promise.resolve(c).then(function (s) {
      i({ value: s, done: u });
    }, t);
  }
}
function Nn(e, r) {
  return (Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e);
}
var fo = Object.create
    ? function (e, r) {
        Object.defineProperty(e, "default", { enumerable: !0, value: r });
      }
    : function (e, r) {
        e.default = r;
      },
  jt = function (e) {
    return (
      (jt =
        Object.getOwnPropertyNames ||
        function (r) {
          var o = [];
          for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (o[o.length] = a);
          return o;
        }),
      jt(e)
    );
  };
function Dn(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (e != null) for (var o = jt(e), a = 0; a < o.length; a++) o[a] !== "default" && We(r, e, o[a]);
  return (fo(r, e), r);
}
function Ln(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gn(e, r, o, a) {
  if (o === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !a : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? a : o === "a" ? a.call(e) : a ? a.value : r.get(e);
}
function Vn(e, r, o, a, n) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !n : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (a === "a" ? n.call(e, o) : n ? (n.value = o) : r.set(e, o), o);
}
function xn(e, r) {
  if (r === null || (typeof r != "object" && typeof r != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? r === e : e.has(r);
}
function zn(e, r, o) {
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
var vo =
  typeof SuppressedError == "function"
    ? SuppressedError
    : function (e, r, o) {
        var a = new Error(o);
        return ((a.name = "SuppressedError"), (a.error = e), (a.suppressed = r), a);
      };
function Wn(e) {
  function r(i) {
    ((e.error = e.hasError ? new vo(i, e.error, "An error was suppressed during disposal.") : i),
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
function Hn(e, r) {
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
    __extends: bn,
    __assign: xe,
    __rest: wn,
    __decorate: En,
    __param: On,
    __esDecorate: Pn,
    __runInitializers: Rn,
    __propKey: Sn,
    __setFunctionName: In,
    __metadata: jn,
    __awaiter: Cn,
    __generator: qn,
    __createBinding: We,
    __exportStar: Tn,
    __values: ze,
    __read: Ct,
    __spread: Bn,
    __spreadArrays: Fn,
    __spreadArray: An,
    __await: L,
    __asyncGenerator: Mn,
    __asyncDelegator: kn,
    __asyncValues: Un,
    __makeTemplateObject: Nn,
    __importStar: Dn,
    __importDefault: Ln,
    __classPrivateFieldGet: Gn,
    __classPrivateFieldSet: Vn,
    __classPrivateFieldIn: xn,
    __addDisposableResource: zn,
    __disposeResources: Wn,
    __rewriteRelativeImportExtension: Hn,
  },
  go = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __addDisposableResource: zn,
        get __assign() {
          return xe;
        },
        __asyncDelegator: kn,
        __asyncGenerator: Mn,
        __asyncValues: Un,
        __await: L,
        __awaiter: Cn,
        __classPrivateFieldGet: Gn,
        __classPrivateFieldIn: xn,
        __classPrivateFieldSet: Vn,
        __createBinding: We,
        __decorate: En,
        __disposeResources: Wn,
        __esDecorate: Pn,
        __exportStar: Tn,
        __extends: bn,
        __generator: qn,
        __importDefault: Ln,
        __importStar: Dn,
        __makeTemplateObject: Nn,
        __metadata: jn,
        __param: On,
        __propKey: Sn,
        __read: Ct,
        __rest: wn,
        __rewriteRelativeImportExtension: Hn,
        __runInitializers: Rn,
        __setFunctionName: In,
        __spread: Bn,
        __spreadArray: An,
        __spreadArrays: Fn,
        __values: ze,
        default: ho,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j = so(go);
var x = {},
  Ft;
function _o() {
  return (
    Ft ||
      ((Ft = 1),
      Object.defineProperty(x, "__esModule", { value: !0 }),
      (x.NavigationTarget = void 0),
      (x.NavigationTarget = {
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
    x
  );
}
var $e = {},
  et = {},
  z = {},
  W = {},
  At;
function R() {
  if (At) return W;
  ((At = 1), Object.defineProperty(W, "__esModule", { value: !0 }), (W.BridgeAPIError = void 0));
  class e extends Error {}
  return ((W.BridgeAPIError = e), W);
}
var Mt;
function P() {
  if (Mt) return z;
  ((Mt = 1), Object.defineProperty(z, "__esModule", { value: !0 }), (z.getCallBridge = void 0));
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
  return ((z.getCallBridge = o), z);
}
var H = {},
  kt;
function He() {
  if (kt) return H;
  ((kt = 1), Object.defineProperty(H, "__esModule", { value: !0 }), (H.withRateLimiter = void 0));
  const e = R(),
    r = (o, a, n, i) => {
      let t = Date.now(),
        u = 0;
      return async (...c) => {
        const s = Date.now();
        if ((s - t > n && ((t = s), (u = 0)), u >= a))
          throw new e.BridgeAPIError(i || "Too many invocations.");
        return ((u = u + 1), o(...c));
      };
    };
  return ((H.withRateLimiter = r), H);
}
var Ut;
function po() {
  return (
    Ut ||
      ((Ut = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), (e.makeInvoke = e.invoke = void 0));
        const r = P(),
          o = R(),
          a = He(),
          n = (0, r.getCallBridge)(),
          i = (c) => {
            if (c && Object.values(c).some((s) => typeof s == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          t = (c, s) => {
            if (typeof c != "string") throw new o.BridgeAPIError("functionKey must be a string!");
            return (i(s), n("invoke", { functionKey: c, payload: s }));
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
      })(et)),
    et
  );
}
var Nt;
function Ge() {
  return (
    Nt ||
      ((Nt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(po(), e));
      })($e)),
    $e
  );
}
var tt = {},
  K = {},
  rt = {},
  Dt;
function Kn() {
  return (
    Dt ||
      ((Dt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e._invokeEndpointFn = e.InvokeType = void 0));
        const r = P(),
          o = R(),
          a = He(),
          n = 500,
          i = 25,
          t = 1e3 * i;
        (function (_) {
          ((_.REMOTE = "Remote"), (_.SERVICE = "Container"));
        })(e.InvokeType || (e.InvokeType = {}));
        const u = (0, r.getCallBridge)(),
          c = (_) => {
            if (_ && Object.values(_).some((m) => typeof m == "function"))
              throw new o.BridgeAPIError(
                "Passing functions as part of the payload is not supported!",
              );
          },
          s = (_) => async (m) => {
            c(m);
            const d = { ...m, invokeType: `ui-${_.toLowerCase()}-fetch` },
              p = await u("invoke", d),
              { success: f, payload: v, error: h } = p ?? {},
              g = { ...(f ? v : h) };
            if (g && g.headers)
              for (const y in g.headers)
                Array.isArray(g.headers[y]) && (g.headers[y] = g.headers[y].join(","));
            return g;
          },
          l = (_) => {
            const m = s(_);
            return (0, a.withRateLimiter)(
              m,
              n,
              t,
              `${_} invocation calls are rate limited at ${n}/${i}s`,
            );
          };
        e._invokeEndpointFn = l;
      })(rt)),
    rt
  );
}
var Lt;
function yo() {
  if (Lt) return K;
  ((Lt = 1), Object.defineProperty(K, "__esModule", { value: !0 }), (K.invokeRemote = void 0));
  const e = Kn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.REMOTE)(o);
  return ((K.invokeRemote = r), K);
}
var J = {},
  Gt;
function mo() {
  if (Gt) return J;
  ((Gt = 1), Object.defineProperty(J, "__esModule", { value: !0 }), (J.invokeService = void 0));
  const e = Kn(),
    r = (o) => (0, e._invokeEndpointFn)(e.InvokeType.SERVICE)(o);
  return ((J.invokeService = r), J);
}
var Vt;
function bo() {
  return (
    Vt ||
      ((Vt = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = j;
        (r.__exportStar(yo(), e), r.__exportStar(mo(), e));
      })(tt)),
    tt
  );
}
var nt = {},
  Y = {},
  X = {},
  xt;
function wo() {
  if (xt) return X;
  ((xt = 1), Object.defineProperty(X, "__esModule", { value: !0 }), (X.submit = void 0));
  const e = P(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await o("submit", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not submittable.");
    };
  return ((X.submit = a), X);
}
var Z = {},
  zt;
function Eo() {
  if (zt) return Z;
  ((zt = 1), Object.defineProperty(Z, "__esModule", { value: !0 }), (Z.close = void 0));
  const e = P(),
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
  return ((Z.close = a), Z);
}
var Q = {},
  Wt;
function Oo() {
  if (Wt) return Q;
  ((Wt = 1), Object.defineProperty(Q, "__esModule", { value: !0 }), (Q.open = void 0));
  const e = P(),
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
var $ = {},
  Ht;
function Po() {
  if (Ht) return $;
  ((Ht = 1), Object.defineProperty($, "__esModule", { value: !0 }), ($.refresh = void 0));
  const e = P(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      if ((await o("refresh", n)) === !1)
        throw new r.BridgeAPIError("this resource's view is not refreshable.");
    };
  return (($.refresh = a), $);
}
var ee = {},
  Kt;
function Ro() {
  if (Kt) return ee;
  ((Kt = 1), Object.defineProperty(ee, "__esModule", { value: !0 }), (ee.createHistory = void 0));
  const r = (0, P().getCallBridge)(),
    o = async () => {
      const a = await r("createHistory");
      return (
        a.listen((n) => {
          a.location = n;
        }),
        a
      );
    };
  return ((ee.createHistory = o), ee);
}
var te = {},
  ot = {},
  B = {},
  Jt;
function Jn() {
  return (
    Jt ||
      ((Jt = 1),
      Object.defineProperty(B, "__esModule", { value: !0 }),
      (B.FORGE_SUPPORTED_LOCALE_CODES = B.I18N_BUNDLE_FOLDER_NAME = B.I18N_INFO_FILE_NAME = void 0),
      (B.I18N_INFO_FILE_NAME = "i18n-info.json"),
      (B.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__"),
      (B.FORGE_SUPPORTED_LOCALE_CODES = [
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
    B
  );
}
var M = {},
  Yt;
function So() {
  if (Yt) return M;
  ((Yt = 1),
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
        let c;
        return (
          t.locales.includes(n) && (c = await this.getTranslationResource(n)),
          { translations: c ?? null, locale: n }
        );
      }
      for (const c of this.getLocaleLookupOrder(n, t)) {
        const s = await this.getTranslationResource(c);
        if (s) return { translations: s, locale: c };
      }
      return { translations: null, locale: n };
    }
    async getTranslationsByLocaleLookupOrder(n) {
      const i = await this.getI18nInfoConfig(),
        t = this.getLocaleLookupOrder(n, i);
      return await Promise.all(
        t.map(async (u) => {
          const c = await this.getTranslationResource(u);
          return { locale: u, translations: c };
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
        c = [n],
        s = u[n];
      return (
        s && Array.isArray(s) && s.length > 0 && c.push(...s),
        e(c, i.fallback.default),
        c.filter((l) => t.includes(l))
      );
    }
  }
  return ((M.TranslationsGetter = o), M);
}
var re = {},
  it = {},
  Xt;
function Yn() {
  return (
    Xt ||
      ((Xt = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
        const o = j.__importDefault(uo()),
          a = (i, t, u) => {
            const c = i[u];
            return c ? (0, e.getTranslationValueFromContent)(c, t) : null;
          };
        e.getTranslationValue = a;
        const n = (i, t) => {
          let u = i[t];
          if (!u) {
            const c = t.split(".");
            c.length > 1 && (u = (0, o.default)(i, c, null));
          }
          return typeof u == "string" ? u : null;
        };
        e.getTranslationValueFromContent = n;
      })(it)),
    it
  );
}
var Zt;
function Io() {
  if (Zt) return re;
  ((Zt = 1), Object.defineProperty(re, "__esModule", { value: !0 }), (re.Translator = void 0));
  const e = Yn();
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
  return ((re.Translator = r), re);
}
var ne = {},
  Qt;
function jo() {
  if (Qt) return ne;
  ((Qt = 1), Object.defineProperty(ne, "__esModule", { value: !0 }), (ne.ensureLocale = void 0));
  const e = Jn(),
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
  return ((ne.ensureLocale = n), ne);
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
        const r = (s) => typeof s == "object" && s !== null && !Array.isArray(s),
          o = (s) => typeof s?.i18n == "string",
          a = (s) => s.startsWith("connect-"),
          n = (s) => s.startsWith("core:"),
          i = (s) => {
            const l = new Set(),
              _ = (m, d) =>
                !r(m) || l.has(m)
                  ? []
                  : (l.add(m),
                    Object.entries(m).flatMap(([p, f]) => {
                      const v = [...d, p];
                      return o(f)
                        ? [{ propertyPath: v, key: f.i18n }]
                        : Array.isArray(f)
                          ? f.flatMap((h) => _(h, v))
                          : _(f, v);
                    }));
            return _(s, []);
          },
          t = (s) =>
            Object.entries(s).flatMap(([l, _]) =>
              !a(l) && !n(l) && _ && Array.isArray(_) && _.length > 0 ? _.map((m) => [m, l]) : [],
            );
        e.getI18nSupportedModuleEntries = t;
        const u = (s) => {
          const l = new Set();
          for (const _ of (0, e.getI18nSupportedModuleEntries)(s)) {
            const m = i(_[0]);
            for (const { key: d } of m) l.add(d);
          }
          return l.size > 0 ? Array.from(l) : [];
        };
        e.extractI18nKeysFromModules = u;
        const c = (s) => {
          const l = [];
          for (const _ of (0, e.getI18nSupportedModuleEntries)(s)) {
            const m = i(_[0]);
            for (const d of m) l.push({ moduleName: _[1], ...d });
          }
          return l;
        };
        e.extractI18nPropertiesFromModules = c;
      })(at)),
    at
  );
}
var st = {},
  er;
function qo() {
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
        const r = j;
        (r.__exportStar(Jn(), e),
          r.__exportStar(So(), e),
          r.__exportStar(Io(), e),
          r.__exportStar(jo(), e));
        var o = Yn();
        Object.defineProperty(e, "getTranslationValue", {
          enumerable: !0,
          get: function () {
            return o.getTranslationValue;
          },
        });
        var a = Co();
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
      })(ot)),
    ot
  );
}
var rr;
function To() {
  if (rr) return te;
  ((rr = 1), Object.defineProperty(te, "__esModule", { value: !0 }), (te.getContext = void 0));
  const e = P(),
    r = Xn(),
    o = (0, e.getCallBridge)(),
    a = async () => {
      var n;
      const i = await o("getContext"),
        t = i?.locale;
      return (t && (i.locale = (n = (0, r.ensureLocale)(t)) !== null && n !== void 0 ? n : t), i);
    };
  return ((te.getContext = a), te);
}
var oe = {},
  nr;
function Bo() {
  if (nr) return oe;
  ((nr = 1),
    Object.defineProperty(oe, "__esModule", { value: !0 }),
    (oe.changeWindowTitle = void 0));
  const e = P(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = async (n) => {
      try {
        await o("changeWindowTitle", n);
      } catch {
        throw new r.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
  return ((oe.changeWindowTitle = a), oe);
}
var ie = {},
  or;
function Fo() {
  if (or) return ie;
  ((or = 1), Object.defineProperty(ie, "__esModule", { value: !0 }), (ie.theme = void 0));
  const r = (0, P().getCallBridge)();
  return ((ie.theme = { enable: () => r("enableTheming") }), ie);
}
var ae = {},
  se = {},
  ut = {},
  k = {},
  ir;
function Zn() {
  if (ir) return k;
  ((ir = 1),
    Object.defineProperty(k, "__esModule", { value: !0 }),
    (k.blobToBase64 = k.base64ToBlob = void 0));
  const e = (o, a) => {
    if (!o) return null;
    const n = o.includes(";base64") ? o.split(",")[1] : o,
      i = atob(n),
      t = new Array(i.length);
    for (let c = 0; c < i.length; c++) t[c] = i.charCodeAt(c);
    const u = new Uint8Array(t);
    return new Blob([u], { type: a });
  };
  k.base64ToBlob = e;
  const r = (o) =>
    new Promise((a, n) => {
      const i = new FileReader();
      ((i.onloadend = () => {
        a(i.result);
      }),
        (i.onerror = n),
        i.readAsDataURL(o));
    });
  return ((k.blobToBase64 = r), k);
}
var ar;
function Ao() {
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
          o = (s) => {
            if (
              typeof s != "object" ||
              s === null ||
              Object.prototype.toString.call(s) !== "[object Object]"
            )
              return !1;
            const l = Object.getPrototypeOf(s);
            if (l === null) return !0;
            const _ = Object.prototype.hasOwnProperty.call(l, "constructor") && l.constructor;
            return (
              typeof _ == "function" &&
              _ instanceof _ &&
              Function.prototype.call(_) === Function.prototype.call(s)
            );
          },
          a = async (s) => ({ data: await (0, r.blobToBase64)(s), type: s.type }),
          n = (s) => (0, r.base64ToBlob)(s.data, s.type),
          i = async (s) => {
            if (s instanceof Blob) return { ...(await a(s)), __isBlobData: !0 };
            if (Array.isArray(s))
              return Promise.all(s.map((l) => (0, e.serialiseBlobsInPayload)(l)));
            if (s && o(s)) {
              const l = await Promise.all(
                Object.entries(s).map(async ([_, m]) => [
                  _,
                  await (0, e.serialiseBlobsInPayload)(m),
                ]),
              );
              return Object.fromEntries(l);
            }
            return s;
          };
        e.serialiseBlobsInPayload = i;
        const t = (s) => {
          if (s && o(s) && "__isBlobData" in s) {
            const l = s;
            return n({ data: l.data, type: l.type });
          }
          if (Array.isArray(s)) return s.map((l) => (0, e.deserialiseBlobsInPayload)(l));
          if (s && o(s)) {
            const l = {};
            for (const [_, m] of Object.entries(s)) l[_] = (0, e.deserialiseBlobsInPayload)(m);
            return l;
          }
          return s;
        };
        e.deserialiseBlobsInPayload = t;
        const u = (s) =>
          s instanceof Blob
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsBlobs)(l))
              : s && o(s)
                ? Object.values(s).some((l) => (0, e.containsBlobs)(l))
                : !1;
        e.containsBlobs = u;
        const c = (s) =>
          s && o(s) && "__isBlobData" in s
            ? !0
            : Array.isArray(s)
              ? s.some((l) => (0, e.containsSerialisedBlobs)(l))
              : s && o(s)
                ? Object.values(s).some((l) => (0, e.containsSerialisedBlobs)(l))
                : !1;
        e.containsSerialisedBlobs = c;
      })(ut)),
    ut
  );
}
var sr;
function Qn() {
  if (sr) return se;
  ((sr = 1), Object.defineProperty(se, "__esModule", { value: !0 }), (se.events = void 0));
  const e = P(),
    r = Ao(),
    o = (0, e.getCallBridge)(),
    a = (c) => (s) => {
      let l = s;
      return ((0, r.containsSerialisedBlobs)(s) && (l = (0, r.deserialiseBlobsInPayload)(s)), c(l));
    },
    n = async (c, s) => {
      let l = s;
      return (
        (0, r.containsBlobs)(s) && (l = await (0, r.serialiseBlobsInPayload)(s)),
        o("emit", { event: c, payload: l })
      );
    },
    i = (c, s) => o("on", { event: c, callback: a(s) }),
    t = async (c, s) => {
      let l = s;
      return (
        (0, r.containsBlobs)(s) && (l = await (0, r.serialiseBlobsInPayload)(s)),
        o("emitPublic", { event: c, payload: l })
      );
    },
    u = (c, s) => o("onPublic", { event: c, callback: a(s) });
  return ((se.events = { emit: n, on: i, emitPublic: t, onPublic: u }), se);
}
var ur;
function Mo() {
  if (ur) return ae;
  ((ur = 1), Object.defineProperty(ae, "__esModule", { value: !0 }), (ae.emitReadyEvent = void 0));
  const e = Qn(),
    r = ro(),
    a = (0, P().getCallBridge)(),
    n = "EXTENSION_READY",
    i = async () => {
      const t = await r.view.getContext();
      await e.events.emit(n, { localId: t.localId });
      try {
        await a("emitReadyEvent");
      } catch {}
    };
  return ((ae.emitReadyEvent = i), ae);
}
const ko = "modulepreload",
  Uo = function (e, r) {
    return new URL(e, r).href;
  },
  cr = {},
  No = function (r, o, a) {
    let n = Promise.resolve();
    if (o && o.length > 0) {
      let s = function (l) {
        return Promise.all(
          l.map((_) =>
            Promise.resolve(_).then(
              (m) => ({ status: "fulfilled", value: m }),
              (m) => ({ status: "rejected", reason: m }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        u = document.querySelector("meta[property=csp-nonce]"),
        c = u?.nonce || u?.getAttribute("nonce");
      n = s(
        o.map((l) => {
          if (((l = Uo(l, a)), l in cr)) return;
          cr[l] = !0;
          const _ = l.endsWith(".css"),
            m = _ ? '[rel="stylesheet"]' : "";
          if (a)
            for (let p = t.length - 1; p >= 0; p--) {
              const f = t[p];
              if (f.href === l && (!_ || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${m}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = _ ? "stylesheet" : ko),
            _ || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = l),
            c && d.setAttribute("nonce", c),
            document.head.appendChild(d),
            _)
          )
            return new Promise((p, f) => {
              (d.addEventListener("load", p),
                d.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`))));
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
var ue = {},
  ct = {},
  ce = {},
  Ve = {},
  lr;
function $n() {
  if (lr) return Ve;
  ((lr = 1), Object.defineProperty(Ve, "__esModule", { value: !0 }), (Ve.default = o));
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
  return Ve;
}
var D = {},
  le = {},
  de = {},
  dr;
function Do() {
  if (dr) return de;
  ((dr = 1), Object.defineProperty(de, "__esModule", { value: !0 }), (de.default = void 0));
  var e =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return ((de.default = e), de);
}
var fr;
function Ke() {
  if (fr) return le;
  ((fr = 1), Object.defineProperty(le, "__esModule", { value: !0 }), (le.default = void 0));
  var e = r(Do());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    return typeof n == "string" && e.default.test(n);
  }
  var a = o;
  return ((le.default = a), le);
}
var vr;
function Je() {
  if (vr) return D;
  ((vr = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.default = void 0),
    (D.unsafeStringify = a));
  var e = r(Ke());
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
    const c = a(t, u);
    if (!(0, e.default)(c)) throw TypeError("Stringified UUID is invalid");
    return c;
  }
  var i = n;
  return ((D.default = i), D);
}
var hr;
function Lo() {
  if (hr) return ce;
  ((hr = 1), Object.defineProperty(ce, "__esModule", { value: !0 }), (ce.default = void 0));
  var e = o($n()),
    r = Je();
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  let a,
    n,
    i = 0,
    t = 0;
  function u(s, l, _) {
    let m = (l && _) || 0;
    const d = l || new Array(16);
    s = s || {};
    let p = s.node || a,
      f = s.clockseq !== void 0 ? s.clockseq : n;
    if (p == null || f == null) {
      const E = s.random || (s.rng || e.default)();
      (p == null && (p = a = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]),
        f == null && (f = n = ((E[6] << 8) | E[7]) & 16383));
    }
    let v = s.msecs !== void 0 ? s.msecs : Date.now(),
      h = s.nsecs !== void 0 ? s.nsecs : t + 1;
    const g = v - i + (h - t) / 1e4;
    if (
      (g < 0 && s.clockseq === void 0 && (f = (f + 1) & 16383),
      (g < 0 || v > i) && s.nsecs === void 0 && (h = 0),
      h >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ((i = v), (t = h), (n = f), (v += 122192928e5));
    const y = ((v & 268435455) * 1e4 + h) % 4294967296;
    ((d[m++] = (y >>> 24) & 255),
      (d[m++] = (y >>> 16) & 255),
      (d[m++] = (y >>> 8) & 255),
      (d[m++] = y & 255));
    const w = ((v / 4294967296) * 1e4) & 268435455;
    ((d[m++] = (w >>> 8) & 255),
      (d[m++] = w & 255),
      (d[m++] = ((w >>> 24) & 15) | 16),
      (d[m++] = (w >>> 16) & 255),
      (d[m++] = (f >>> 8) | 128),
      (d[m++] = f & 255));
    for (let E = 0; E < 6; ++E) d[m + E] = p[E];
    return l || (0, r.unsafeStringify)(d);
  }
  var c = u;
  return ((ce.default = c), ce);
}
var fe = {},
  A = {},
  ve = {},
  gr;
function eo() {
  if (gr) return ve;
  ((gr = 1), Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = void 0));
  var e = r(Ke());
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
  return ((ve.default = a), ve);
}
var _r;
function to() {
  if (_r) return A;
  ((_r = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.URL = A.DNS = void 0),
    (A.default = t));
  var e = Je(),
    r = o(eo());
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u) {
    u = unescape(encodeURIComponent(u));
    const c = [];
    for (let s = 0; s < u.length; ++s) c.push(u.charCodeAt(s));
    return c;
  }
  const n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  A.DNS = n;
  const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  A.URL = i;
  function t(u, c, s) {
    function l(_, m, d, p) {
      var f;
      if (
        (typeof _ == "string" && (_ = a(_)),
        typeof m == "string" && (m = (0, r.default)(m)),
        ((f = m) === null || f === void 0 ? void 0 : f.length) !== 16)
      )
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let v = new Uint8Array(16 + _.length);
      if (
        (v.set(m),
        v.set(_, m.length),
        (v = s(v)),
        (v[6] = (v[6] & 15) | c),
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
      l.name = u;
    } catch {}
    return ((l.DNS = n), (l.URL = i), l);
  }
  return A;
}
var he = {},
  pr;
function Go() {
  if (pr) return he;
  ((pr = 1), Object.defineProperty(he, "__esModule", { value: !0 }), (he.default = void 0));
  function e(d) {
    if (typeof d == "string") {
      const p = unescape(encodeURIComponent(d));
      d = new Uint8Array(p.length);
      for (let f = 0; f < p.length; ++f) d[f] = p.charCodeAt(f);
    }
    return r(a(n(d), d.length * 8));
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
  function a(d, p) {
    ((d[p >> 5] |= 128 << (p % 32)), (d[o(p) - 1] = p));
    let f = 1732584193,
      v = -271733879,
      h = -1732584194,
      g = 271733878;
    for (let y = 0; y < d.length; y += 16) {
      const w = f,
        E = v,
        S = h,
        C = g;
      ((f = c(f, v, h, g, d[y], 7, -680876936)),
        (g = c(g, f, v, h, d[y + 1], 12, -389564586)),
        (h = c(h, g, f, v, d[y + 2], 17, 606105819)),
        (v = c(v, h, g, f, d[y + 3], 22, -1044525330)),
        (f = c(f, v, h, g, d[y + 4], 7, -176418897)),
        (g = c(g, f, v, h, d[y + 5], 12, 1200080426)),
        (h = c(h, g, f, v, d[y + 6], 17, -1473231341)),
        (v = c(v, h, g, f, d[y + 7], 22, -45705983)),
        (f = c(f, v, h, g, d[y + 8], 7, 1770035416)),
        (g = c(g, f, v, h, d[y + 9], 12, -1958414417)),
        (h = c(h, g, f, v, d[y + 10], 17, -42063)),
        (v = c(v, h, g, f, d[y + 11], 22, -1990404162)),
        (f = c(f, v, h, g, d[y + 12], 7, 1804603682)),
        (g = c(g, f, v, h, d[y + 13], 12, -40341101)),
        (h = c(h, g, f, v, d[y + 14], 17, -1502002290)),
        (v = c(v, h, g, f, d[y + 15], 22, 1236535329)),
        (f = s(f, v, h, g, d[y + 1], 5, -165796510)),
        (g = s(g, f, v, h, d[y + 6], 9, -1069501632)),
        (h = s(h, g, f, v, d[y + 11], 14, 643717713)),
        (v = s(v, h, g, f, d[y], 20, -373897302)),
        (f = s(f, v, h, g, d[y + 5], 5, -701558691)),
        (g = s(g, f, v, h, d[y + 10], 9, 38016083)),
        (h = s(h, g, f, v, d[y + 15], 14, -660478335)),
        (v = s(v, h, g, f, d[y + 4], 20, -405537848)),
        (f = s(f, v, h, g, d[y + 9], 5, 568446438)),
        (g = s(g, f, v, h, d[y + 14], 9, -1019803690)),
        (h = s(h, g, f, v, d[y + 3], 14, -187363961)),
        (v = s(v, h, g, f, d[y + 8], 20, 1163531501)),
        (f = s(f, v, h, g, d[y + 13], 5, -1444681467)),
        (g = s(g, f, v, h, d[y + 2], 9, -51403784)),
        (h = s(h, g, f, v, d[y + 7], 14, 1735328473)),
        (v = s(v, h, g, f, d[y + 12], 20, -1926607734)),
        (f = l(f, v, h, g, d[y + 5], 4, -378558)),
        (g = l(g, f, v, h, d[y + 8], 11, -2022574463)),
        (h = l(h, g, f, v, d[y + 11], 16, 1839030562)),
        (v = l(v, h, g, f, d[y + 14], 23, -35309556)),
        (f = l(f, v, h, g, d[y + 1], 4, -1530992060)),
        (g = l(g, f, v, h, d[y + 4], 11, 1272893353)),
        (h = l(h, g, f, v, d[y + 7], 16, -155497632)),
        (v = l(v, h, g, f, d[y + 10], 23, -1094730640)),
        (f = l(f, v, h, g, d[y + 13], 4, 681279174)),
        (g = l(g, f, v, h, d[y], 11, -358537222)),
        (h = l(h, g, f, v, d[y + 3], 16, -722521979)),
        (v = l(v, h, g, f, d[y + 6], 23, 76029189)),
        (f = l(f, v, h, g, d[y + 9], 4, -640364487)),
        (g = l(g, f, v, h, d[y + 12], 11, -421815835)),
        (h = l(h, g, f, v, d[y + 15], 16, 530742520)),
        (v = l(v, h, g, f, d[y + 2], 23, -995338651)),
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
        (f = i(f, w)),
        (v = i(v, E)),
        (h = i(h, S)),
        (g = i(g, C)));
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
  function c(d, p, f, v, h, g, y) {
    return u((p & f) | (~p & v), d, p, h, g, y);
  }
  function s(d, p, f, v, h, g, y) {
    return u((p & v) | (f & ~v), d, p, h, g, y);
  }
  function l(d, p, f, v, h, g, y) {
    return u(p ^ f ^ v, d, p, h, g, y);
  }
  function _(d, p, f, v, h, g, y) {
    return u(f ^ (p | ~v), d, p, h, g, y);
  }
  var m = e;
  return ((he.default = m), he);
}
var yr;
function Vo() {
  if (yr) return fe;
  ((yr = 1), Object.defineProperty(fe, "__esModule", { value: !0 }), (fe.default = void 0));
  var e = o(to()),
    r = o(Go());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v3", 48, r.default);
  return ((fe.default = n), fe);
}
var ge = {},
  _e = {},
  mr;
function xo() {
  if (mr) return _e;
  ((mr = 1), Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = void 0));
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
  return ((_e.default = r), _e);
}
var br;
function zo() {
  if (br) return ge;
  ((br = 1), Object.defineProperty(ge, "__esModule", { value: !0 }), (ge.default = void 0));
  var e = a(xo()),
    r = a($n()),
    o = Je();
  function a(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function n(t, u, c) {
    if (e.default.randomUUID && !u && !t) return e.default.randomUUID();
    t = t || {};
    const s = t.random || (t.rng || r.default)();
    if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), u)) {
      c = c || 0;
      for (let l = 0; l < 16; ++l) u[c + l] = s[l];
      return u;
    }
    return (0, o.unsafeStringify)(s);
  }
  var i = n;
  return ((ge.default = i), ge);
}
var pe = {},
  ye = {},
  wr;
function Wo() {
  if (wr) return ye;
  ((wr = 1), Object.defineProperty(ye, "__esModule", { value: !0 }), (ye.default = void 0));
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
      const l = unescape(encodeURIComponent(n));
      n = [];
      for (let _ = 0; _ < l.length; ++_) n.push(l.charCodeAt(_));
    } else Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    const u = n.length / 4 + 2,
      c = Math.ceil(u / 16),
      s = new Array(c);
    for (let l = 0; l < c; ++l) {
      const _ = new Uint32Array(16);
      for (let m = 0; m < 16; ++m)
        _[m] =
          (n[l * 64 + m * 4] << 24) |
          (n[l * 64 + m * 4 + 1] << 16) |
          (n[l * 64 + m * 4 + 2] << 8) |
          n[l * 64 + m * 4 + 3];
      s[l] = _;
    }
    ((s[c - 1][14] = ((n.length - 1) * 8) / Math.pow(2, 32)),
      (s[c - 1][14] = Math.floor(s[c - 1][14])),
      (s[c - 1][15] = ((n.length - 1) * 8) & 4294967295));
    for (let l = 0; l < c; ++l) {
      const _ = new Uint32Array(80);
      for (let h = 0; h < 16; ++h) _[h] = s[l][h];
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
  var a = o;
  return ((ye.default = a), ye);
}
var Er;
function Ho() {
  if (Er) return pe;
  ((Er = 1), Object.defineProperty(pe, "__esModule", { value: !0 }), (pe.default = void 0));
  var e = o(to()),
    r = o(Wo());
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = (0, e.default)("v5", 80, r.default);
  return ((pe.default = n), pe);
}
var me = {},
  Or;
function Ko() {
  if (Or) return me;
  ((Or = 1), Object.defineProperty(me, "__esModule", { value: !0 }), (me.default = void 0));
  var e = "00000000-0000-0000-0000-000000000000";
  return ((me.default = e), me);
}
var be = {},
  Pr;
function Jo() {
  if (Pr) return be;
  ((Pr = 1), Object.defineProperty(be, "__esModule", { value: !0 }), (be.default = void 0));
  var e = r(Ke());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function o(n) {
    if (!(0, e.default)(n)) throw TypeError("Invalid UUID");
    return parseInt(n.slice(14, 15), 16);
  }
  var a = o;
  return ((be.default = a), be);
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
              return s.default;
            },
          }),
          Object.defineProperty(e, "stringify", {
            enumerable: !0,
            get: function () {
              return c.default;
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
        var r = l(Lo()),
          o = l(Vo()),
          a = l(zo()),
          n = l(Ho()),
          i = l(Ko()),
          t = l(Jo()),
          u = l(Ke()),
          c = l(Je()),
          s = l(eo());
        function l(_) {
          return _ && _.__esModule ? _ : { default: _ };
        }
      })(ct)),
    ct
  );
}
var Sr;
function Xo() {
  if (Sr) return ue;
  ((Sr = 1),
    Object.defineProperty(ue, "__esModule", { value: !0 }),
    (ue.createAdfRendererIframeProps = void 0));
  const e = Yo(),
    r = async (o, a) => {
      const n = await No(
          () => import("./index-DSebzXMd.js").then((l) => l.i),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        i = n.default || n,
        t = new URL(document.referrer).origin,
        u = `${t}/forge-apps/adf-renderer`,
        c = a || `forge-adf-renderer-iframe-${(0, e.v4)()}`,
        s = () => {
          var l, _, m, d, p, f;
          const v = document.getElementById(c),
            h = {
              type: "adf-document",
              document: (l = o.extension.macro) === null || l === void 0 ? void 0 : l.body,
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
        { id: c, src: u, onLoad: s }
      );
    };
  return ((ue.createAdfRendererIframeProps = r), ue);
}
var we = {},
  Ir;
function Zo() {
  if (Ir) return we;
  ((Ir = 1), Object.defineProperty(we, "__esModule", { value: !0 }), (we.onClose = void 0));
  const e = P(),
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
  return ((we.onClose = a), we);
}
var jr;
function ro() {
  if (jr) return Y;
  ((jr = 1), Object.defineProperty(Y, "__esModule", { value: !0 }), (Y.view = void 0));
  const e = wo(),
    r = Eo(),
    o = Oo(),
    a = Po(),
    n = Ro(),
    i = To(),
    t = Bo(),
    u = Fo(),
    c = Mo(),
    s = Xo(),
    l = Zo();
  return (
    (Y.view = {
      submit: e.submit,
      close: r.close,
      onClose: l.onClose,
      open: o.open,
      refresh: a.refresh,
      createHistory: n.createHistory,
      getContext: i.getContext,
      theme: u.theme,
      changeWindowTitle: t.changeWindowTitle,
      emitReadyEvent: c.emitReadyEvent,
      createAdfRendererIframeProps: s.createAdfRendererIframeProps,
    }),
    Y
  );
}
var Cr;
function Ye() {
  return (
    Cr ||
      ((Cr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(ro(), e));
      })(nt)),
    nt
  );
}
var lt = {},
  Ee = {},
  qr;
function Qo() {
  if (qr) return Ee;
  ((qr = 1), Object.defineProperty(Ee, "__esModule", { value: !0 }), (Ee.router = void 0));
  const r = (0, P().getCallBridge)(),
    o = async (t) => {
      if (!t?.target) throw new Error("target is required for getUrl");
      const u = await r("getUrl", t);
      if (!u) throw new Error("Failed to get URL");
      try {
        return new URL(u);
      } catch (c) {
        throw new Error(`Failed to parse URL: ${u} (${c})`);
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
  return ((Ee.router = { getUrl: o, navigate: a, open: n, reload: i }), Ee);
}
var Tr;
function $o() {
  return (
    Tr ||
      ((Tr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Qo(), e));
      })(lt)),
    lt
  );
}
var dt = {},
  Oe = {},
  Br;
function ei() {
  if (Br) return Oe;
  ((Br = 1), Object.defineProperty(Oe, "__esModule", { value: !0 }), (Oe.Modal = void 0));
  const e = P(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = () => {};
  class n {
    constructor(t) {
      var u, c;
      ((this.resource = t?.resource || null),
        (this.onClose = t?.onClose || a),
        (this.size = t?.size || "medium"),
        (this.context = t?.context || {}),
        (this.closeOnEscape = (u = t?.closeOnEscape) !== null && u !== void 0 ? u : !0),
        (this.closeOnOverlayClick = (c = t?.closeOnOverlayClick) !== null && c !== void 0 ? c : !0),
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
  return ((Oe.Modal = n), Oe);
}
var Fr;
function ti() {
  return (
    Fr ||
      ((Fr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(ei(), e));
      })(dt)),
    dt
  );
}
var T = {},
  U = {},
  Ar;
function ri() {
  if (Ar) return U;
  ((Ar = 1),
    Object.defineProperty(U, "__esModule", { value: !0 }),
    (U.productFetchApi = U.remoteFetchApi = void 0));
  const e = Zn(),
    r = async (t, u = !1) => {
      const c = {};
      for (const [s, l] of t.entries())
        if (u ? s.startsWith("file") : s === "file") {
          const m = l.name,
            d = l.type;
          ((c[s] = await (0, e.blobToBase64)(l)), (c[`__${s}Name`] = m), (c[`__${s}Type`] = d));
        } else c[s] = l;
      return JSON.stringify(c);
    },
    o = (t) => {
      if (!t) return t;
      if ("signal" in t) {
        const { signal: u, ...c } = t;
        return (
          console.error(
            "Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.",
          ),
          c
        );
      }
      return t;
    },
    a = async (t, u) => {
      const c = u?.body instanceof FormData,
        s = c ? await r(u?.body, t === "remote") : u?.body,
        l = new Request("", { body: s, method: u?.method, headers: u?.headers }),
        _ = Object.fromEntries(l.headers.entries());
      return {
        body: l.method !== "GET" ? await l.text() : null,
        headers: new Headers(_),
        isMultipartFormData: c,
      };
    },
    n = (t) => {
      const u = async (c, s) => {
        const l = o(s),
          { body: _, headers: m, isMultipartFormData: d } = await a("remote", l),
          p = {
            remoteKey: c,
            fetchRequestInit: { ...l, body: _, headers: [...m.entries()] },
            isMultipartFormData: d,
          },
          {
            body: f,
            headers: v,
            statusText: h,
            status: g,
            isAttachment: y,
          } = await t("fetchRemote", p),
          w = y ? (0, e.base64ToBlob)(f, v["content-type"]) : f;
        return new Response(w || null, { headers: v, status: g, statusText: h });
      };
      return { requestRemote: (c, s) => u(c, s) };
    };
  U.remoteFetchApi = n;
  const i = (t) => {
    const u = async (c, s, l) => {
      const _ = o(l),
        { body: m, headers: d, isMultipartFormData: p } = await a("product", _);
      d.has("X-Atlassian-Token") || d.set("X-Atlassian-Token", "no-check");
      const f = {
          product: c,
          restPath: s,
          fetchRequestInit: { ..._, body: m, headers: [...d.entries()] },
          isMultipartFormData: p,
        },
        {
          body: v,
          headers: h,
          statusText: g,
          status: y,
          isAttachment: w,
        } = await t("fetchProduct", f),
        E = w ? (0, e.base64ToBlob)(v, h["content-type"]) : v;
      return new Response(E || null, { headers: h, status: y, statusText: g });
    };
    return {
      requestConfluence: (c, s) => u("confluence", c, s),
      requestJira: (c, s) => u("jira", c, s),
      requestBitbucket: (c, s) => u("bitbucket", c, s),
    };
  };
  return ((U.productFetchApi = i), U);
}
var Mr;
function ni() {
  if (Mr) return T;
  Mr = 1;
  var e;
  (Object.defineProperty(T, "__esModule", { value: !0 }),
    (T.requestRemote = T.requestBitbucket = T.requestJira = T.requestConfluence = void 0));
  const r = P(),
    o = ri();
  return (
    (e = (0, o.productFetchApi)((0, r.getCallBridge)())),
    (T.requestConfluence = e.requestConfluence),
    (T.requestJira = e.requestJira),
    (T.requestBitbucket = e.requestBitbucket),
    (T.requestRemote = (0, o.remoteFetchApi)((0, r.getCallBridge)()).requestRemote),
    T
  );
}
var ft = {},
  Pe = {},
  kr;
function oi() {
  if (kr) return Pe;
  ((kr = 1), Object.defineProperty(Pe, "__esModule", { value: !0 }), (Pe.showFlag = void 0));
  const e = P(),
    r = R(),
    o = (0, e.getCallBridge)(),
    a = (n) => {
      var i;
      if (!n.id) throw new r.BridgeAPIError('"id" must be defined in flag options');
      const t = o("showFlag", { ...n, type: (i = n.type) !== null && i !== void 0 ? i : "info" });
      return { close: async () => (await t, o("closeFlag", { id: n.id })) };
    };
  return ((Pe.showFlag = a), Pe);
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
  Nr;
function ai() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(Qn(), e));
      })(vt)),
    vt
  );
}
var ht = {},
  Re = {},
  Dr;
function si() {
  if (Dr) return Re;
  ((Dr = 1), Object.defineProperty(Re, "__esModule", { value: !0 }), (Re.realtime = void 0));
  const r = (0, P().getCallBridge)(),
    o = (t, u, c) => r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: c }),
    a = (t, u, c) => r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: c }),
    n = (t, u, c) =>
      r("publishRealtimeChannel", { channelName: t, eventPayload: u, options: c, isGlobal: !0 }),
    i = (t, u, c) =>
      r("subscribeRealtimeChannel", { channelName: t, onEvent: u, options: c, isGlobal: !0 });
  return ((Re.realtime = { publish: o, subscribe: a, publishGlobal: n, subscribeGlobal: i }), Re);
}
var gt = {},
  Lr;
function ui() {
  return (
    Lr ||
      ((Lr = 1),
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
  Se = {},
  pt = {},
  Vr;
function li() {
  return (
    Vr ||
      ((Vr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
        const r = P(),
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
            const c = i(u);
            if ((await n("openRovo", c)) === !1)
              throw new o.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
          };
        e.open = t;
      })(pt)),
    pt
  );
}
var Ie = {},
  xr;
function di() {
  if (xr) return Ie;
  ((xr = 1), Object.defineProperty(Ie, "__esModule", { value: !0 }), (Ie.isEnabled = void 0));
  const r = (0, P().getCallBridge)(),
    o = () => r("isRovoEnabled");
  return ((Ie.isEnabled = o), Ie);
}
var zr;
function fi() {
  if (zr) return Se;
  ((zr = 1), Object.defineProperty(Se, "__esModule", { value: !0 }), (Se.rovo = void 0));
  const e = li(),
    r = di();
  return ((Se.rovo = { open: e.open, isEnabled: r.isEnabled }), Se);
}
var Wr;
function vi() {
  return (
    Wr ||
      ((Wr = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(fi(), e));
      })(_t)),
    _t
  );
}
var F = {},
  Hr;
function hi() {
  if (Hr) return F;
  ((Hr = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.createTranslationFunction = F.getTranslations = F.resetTranslationsCache = void 0));
  const e = Xn(),
    r = Ye(),
    o = {
      getI18nInfoConfig: async () => {
        const u = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${e.I18N_INFO_FILE_NAME}`);
        if (!u.ok) throw new Error("Failed to get i18n info config: " + u.statusText);
        return (await u.json()).config;
      },
      getTranslationResource: async (u) => {
        const c = await fetch(`./${e.I18N_BUNDLE_FOLDER_NAME}/${u}.json`);
        if (!c.ok) throw new Error(`Failed to get translation resource for locale: ${u}`);
        return c.json();
      },
    },
    a = new e.TranslationsGetter(o),
    n = () => {
      a.reset();
    };
  F.resetTranslationsCache = n;
  const i = async (u = null, c = { fallback: !0 }) => {
    let s = u;
    return (s || (s = (await r.view.getContext()).locale), await a.getTranslations(s, c));
  };
  F.getTranslations = i;
  const t = async (u = null) => {
    let c = u;
    c || (c = (await r.view.getContext()).locale);
    const s = new e.Translator(c, a);
    return (
      await s.init(),
      (l, _) => {
        var m, d;
        return (d = (m = s.translate(l)) !== null && m !== void 0 ? m : _) !== null && d !== void 0
          ? d
          : l;
      }
    );
  };
  return ((F.createTranslationFunction = t), F);
}
var yt = {},
  je = {},
  Kr;
function gi() {
  if (Kr) return je;
  ((Kr = 1), Object.defineProperty(je, "__esModule", { value: !0 }), (je.permissions = void 0));
  const r = (0, P().getCallBridge)(),
    o = async (c) => r("__permission__egressGet", c),
    a = async (c) => r("__permission__egressSet", c),
    n = async (c) => r("__permission__egressDeleteDomain", c),
    i = async (c) => r("__permission__egressDeleteGroup", c),
    t = async (c) => r("__permission__remoteGet", c),
    u = async (c) => r("__permission__remoteSet", c);
  return (
    (je.permissions = {
      egress: { get: o, set: a, deleteDomain: n, deleteGroup: i },
      remote: { get: t, set: u },
    }),
    je
  );
}
var N = {},
  mt = {},
  bt = {},
  Ce = {},
  qe = {},
  Jr;
function qt() {
  if (Jr) return qe;
  ((Jr = 1), Object.defineProperty(qe, "__esModule", { value: !0 }), (qe.parseUrl = void 0));
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
  return ((qe.parseUrl = e), qe);
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
        const r = qt();
        function o(t) {
          const c = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
          return new RegExp(`^${c}$`);
        }
        e.globToRegex = o;
        const a = (t) => {
          if (t?.length === 0) return [];
          const u = /^(.*?:\/\/)/,
            c = new Set(),
            s = [];
          return (
            t.forEach((l) => {
              const _ = u.test(l) ? l : `https://${l}`,
                m = (0, r.parseUrl)(_);
              m.hostname.startsWith("*")
                ? (c.add(m.hostname.substring(2)), s.push(o(m.hostname)))
                : c.add(m.hostname);
            }),
            [...c].sort().reduce((l, _) => (s.some((m) => m.test(_)) || l.push(_), l), [])
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
              var l;
              if (
                ((l = s.category) === null || l === void 0 ? void 0 : l.toUpperCase()) ===
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
            c = new Map();
          for (const s of u)
            (c.has(s.type) || c.set(s.type, s.addresses),
              c.set(s.type, [...c.get(s.type), ...s.addresses]));
          return [...c.entries()].map(([s, l]) => ({ type: s, addresses: [...new Set(l)] }));
        };
        e.getEgressesBasedOnToggles = i;
      })(wt)),
    wt
  );
}
var Xr;
function _i() {
  if (Xr) return Ce;
  ((Xr = 1),
    Object.defineProperty(Ce, "__esModule", { value: !0 }),
    (Ce.EgressFilteringService = void 0));
  const e = qt(),
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
  return ((Ce.EgressFilteringService = o), Ce);
}
var Zr;
function pi() {
  return (
    Zr ||
      ((Zr = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = j;
        (r.__exportStar(_i(), e), r.__exportStar(qt(), e), r.__exportStar(no(), e));
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
        (Object.defineProperty(e, "__esModule", { value: !0 }), j.__exportStar(pi(), e));
      })(mt)),
    mt
  );
}
var $r;
function mi() {
  if ($r) return N;
  (($r = 1),
    Object.defineProperty(N, "__esModule", { value: !0 }),
    (N.checkPermissions = N.createPermissionUtils = void 0));
  const e = yi(),
    r = Ye();
  function o(p) {
    return typeof p == "string" ? p : "address" in p && p.address ? p.address : p.remote || "";
  }
  const a = ["fonts", "styles", "frames", "images", "media", "scripts"],
    n = ["backend", "client"];
  function i(p) {
    if (!p) return null;
    const { scopes: f, external: v = {} } = p,
      h = Array.isArray(f) ? f : Object.keys(f || {});
    return {
      hasScope: (g) => h.includes(g),
      canFetchFrom: (g, y) => {
        var w;
        const E = (w = v.fetch) === null || w === void 0 ? void 0 : w[g];
        if (!E?.length) return !1;
        const S = E.map(o).filter((b) => b.length > 0);
        if (S.length === 0) return !1;
        const C = new e.EgressFilteringService(S);
        return g === "client" ? C.isValidUrlCSP(y) : C.isValidUrl(y);
      },
      canLoadResource: (g, y) => {
        const w = v[g];
        if (!w?.length) return !1;
        const E = w.map(o).filter((G) => G.length > 0);
        return E.length === 0 ? !1 : new e.EgressFilteringService(E).isValidUrlCSP(y);
      },
      getScopes: () => h,
      getExternalPermissions: () => v,
      hasAnyPermissions: () => h.length > 0 || Object.keys(v).length > 0,
    };
  }
  N.createPermissionUtils = i;
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
          const w = y.filter((E) => !f.canFetchFrom(h, E));
          w.length > 0 && (v[h] = w);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function c(p, f) {
    const v = {};
    return (
      a.forEach((h) => {
        const g = p?.[h];
        if (g?.length) {
          const y = g.filter((w) => !f.canLoadResource(h, w));
          y.length > 0 && (v[h] = y);
        }
      }),
      Object.keys(v).length > 0 ? v : void 0
    );
  }
  function s(p, f) {
    if (!p) return;
    const v = u(p, f),
      h = c(p, f);
    if (!v && !h) return;
    const g = {};
    return (v && (g.fetch = v), h && Object.assign(g, h), g);
  }
  function l(p, f) {
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
      if ((l(f, "external"), f.fetch !== void 0)) {
        l(f.fetch, "external.fetch");
        for (const v of n) _(f.fetch[v], `external.fetch.${v}`);
      }
      for (const v of a) _(f[v], `external.${v}`);
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
    let w = !0;
    const E = t(p.scopes, g);
    E && ((y.scopes = E), (w = !1));
    const S = s(p.external, g);
    return (S && ((y.external = S), (w = !1)), { granted: w, missing: w ? null : y });
  }
  return ((N.checkPermissions = d), N);
}
var en;
function bi() {
  return (
    en ||
      ((en = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = j;
        (r.__exportStar(gi(), e), r.__exportStar(mi(), e));
      })(yt)),
    yt
  );
}
var Et = {},
  Ot = {},
  Pt = {},
  Te = {},
  Be = {},
  tn;
function oo() {
  return (
    tn ||
      ((tn = 1),
      Object.defineProperty(Be, "__esModule", { value: !0 }),
      (Be.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (Be.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR =
        "Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.")),
    Be
  );
}
var rn;
function Xe() {
  if (rn) return Te;
  ((rn = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.checkRestrictedEnvironment = void 0));
  const e = R(),
    r = Ye(),
    o = oo(),
    a = async () => {
      const { environmentType: n } = await r.view.getContext();
      if (n === "PRODUCTION")
        throw new e.BridgeAPIError(o.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  return ((Te.checkRestrictedEnvironment = a), Te);
}
var nn;
function wi() {
  return (
    nn ||
      ((nn = 1),
      (function (e) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.upload = e.createUploadPromises = void 0));
        const r = Ge(),
          o = R(),
          a = Xe(),
          i = (0, P().getCallBridge)(),
          t = (l, _) => {
            const m = atob(l),
              d = new Array(m.length);
            for (let f = 0; f < m.length; f++) d[f] = m.charCodeAt(f);
            const p = new Uint8Array(d);
            return new Blob([p], { type: _ || "application/octet-stream" });
          },
          u = async (l) => {
            const _ = l.size,
              m = await l.arrayBuffer(),
              d = await crypto.subtle.digest("SHA-256", m),
              p = new Uint8Array(d),
              f = btoa(String.fromCharCode(...p));
            return { length: _, checksum: f, checksumType: "SHA256" };
          },
          c = async ({ functionKey: l, objects: _ }) => {
            if (!l || l.length === 0)
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
              p = await (0, r.invoke)(l, { allObjectMetadata: d });
            if (!p || typeof p != "object")
              throw new o.BridgeAPIError("Invalid response from functionKey");
            const f = new Map(),
              v = new Map();
            return (
              m.forEach((g, y) => {
                const w = d[y];
                (f.set(w.checksum, g), v.set(w.checksum, y));
              }),
              Object.entries(p).map(([g, y]) => {
                const { key: w, checksum: E } = y,
                  S = f.get(E),
                  C = v.get(E);
                return C === void 0
                  ? {
                      promise: Promise.resolve({
                        success: !1,
                        key: w,
                        error: `Index not found for checksum ${E}`,
                      }),
                      index: -1,
                    }
                  : S
                    ? {
                        promise: (async () => {
                          try {
                            const b = await fetch(g, {
                              method: "PUT",
                              body: S,
                              headers: {
                                "Content-Type": S.type || "application/octet-stream",
                                "Content-Length": S.size.toString(),
                              },
                            });
                            return {
                              success: b.ok,
                              key: w,
                              status: b.status,
                              error: b.ok ? void 0 : `Upload failed with status ${b.status}`,
                            };
                          } catch (b) {
                            return {
                              success: !1,
                              key: w,
                              status: 503,
                              error: b instanceof Error ? b.message : "Upload failed",
                            };
                          }
                        })(),
                        index: C,
                        objectType: S.type,
                        objectSize: S.size,
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
        e.createUploadPromises = c;
        const s = async ({ functionKey: l, objects: _ }) => {
          (await (0, a.checkRestrictedEnvironment)(),
            i("trackObjectStoreAction", { action: "upload" }));
          const m = await (0, e.createUploadPromises)({ functionKey: l, objects: _ });
          return await Promise.all(m.map((p) => p.promise));
        };
        e.upload = s;
      })(Pt)),
    Pt
  );
}
var Fe = {},
  on;
function Ei() {
  if (on) return Fe;
  ((on = 1), Object.defineProperty(Fe, "__esModule", { value: !0 }), (Fe.deleteObjects = void 0));
  const e = Ge(),
    r = R(),
    o = Xe(),
    n = (0, P().getCallBridge)(),
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
        u.map(async (c) => {
          await (0, e.invoke)(t, { key: c });
        }),
      );
    };
  return ((Fe.deleteObjects = i), Fe);
}
var Ae = {},
  an;
function Oi() {
  if (an) return Ae;
  ((an = 1), Object.defineProperty(Ae, "__esModule", { value: !0 }), (Ae.download = void 0));
  const e = Ge(),
    r = R(),
    o = Xe(),
    n = (0, P().getCallBridge)(),
    i = async ({ functionKey: t, keys: u }) => {
      if (
        (await (0, o.checkRestrictedEnvironment)(),
        n("trackObjectStoreAction", { action: "download" }),
        !t || t.length === 0)
      )
        throw new r.BridgeAPIError("functionKey is required to filter and generate download URLs");
      if (!Array.isArray(u) || u.length === 0)
        throw new r.BridgeAPIError("keys array is required and must not be empty");
      const c = await (0, e.invoke)(t, { keys: u });
      if (!c || typeof c != "object")
        throw new r.BridgeAPIError("Invalid response from functionKey");
      const s = Object.entries(c).map(async ([_, m]) => {
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
      return await Promise.all(s);
    };
  return ((Ae.download = i), Ae);
}
var Me = {},
  sn;
function Pi() {
  if (sn) return Me;
  ((sn = 1), Object.defineProperty(Me, "__esModule", { value: !0 }), (Me.getMetadata = void 0));
  const e = Ge(),
    r = R(),
    o = Xe(),
    n = (0, P().getCallBridge)(),
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
          const l = await (0, e.invoke)(t, { key: s });
          return !l || typeof l != "object"
            ? { key: s, error: "Invalid response from functionKey" }
            : l;
        }),
      );
    };
  return ((Me.getMetadata = i), Me);
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
          a = Oi(),
          n = Pi();
        e.objectStore = {
          upload: r.upload,
          download: a.download,
          getMetadata: n.getMetadata,
          delete: o.deleteObjects,
        };
      })(Ot)),
    Ot
  );
}
var cn;
function Si() {
  return (
    cn ||
      ((cn = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = j;
        (r.__exportStar(Ri(), e), r.__exportStar(oo(), e));
      })(Et)),
    Et
  );
}
var Rt = {},
  ke = {},
  Ue = {},
  ln;
function Ii() {
  if (ln) return Ue;
  ((ln = 1), Object.defineProperty(Ue, "__esModule", { value: !0 }), (Ue.Evaluator = void 0));
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
  return ((Ue.Evaluator = e), Ue);
}
var Ne = {},
  St = {},
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
      })(St)),
    St
  );
}
var fn;
function ji() {
  if (fn) return Ne;
  ((fn = 1),
    Object.defineProperty(Ne, "__esModule", { value: !0 }),
    (Ne.trackFeatureFlagEvent = void 0));
  const e = P(),
    r = R(),
    o = He(),
    a = io(),
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
      if (Object.values(s).some((l) => typeof l == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    c = (s) => (u(s), t("trackFeatureFlagEvent", s));
  return (
    (Ne.trackFeatureFlagEvent = (0, o.withRateLimiter)(
      c,
      n,
      i,
      `Feature flags calls are rate limited at ${n}req/${i / 1e3}s`,
    )),
    Ne
  );
}
var De = {},
  vn;
function Ci() {
  if (vn) return De;
  ((vn = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.initFeatureFlags = void 0));
  const e = P(),
    r = R(),
    o = He(),
    a = 500,
    n = 1e3 * 25,
    i = (0, e.getCallBridge)(),
    t = (c) => {
      if (!c || !c.user || !c.config)
        throw new r.BridgeAPIError(
          "Missing required parameters. Parameter user is required in the payload.",
        );
      if (Object.values(c).some((s) => typeof s == "function"))
        throw new r.BridgeAPIError("Passing functions as part of the payload is not supported!");
    },
    u = (c) => (t(c), i("initFeatureFlags", { user: c.user, config: c.config }));
  return (
    (De.initFeatureFlags = (0, o.withRateLimiter)(
      u,
      a,
      n,
      `Feature flags initialisation calls are rate limited at ${a}req/${n / 1e3}s`,
    )),
    De
  );
}
var hn;
function qi() {
  if (hn) return ke;
  ((hn = 1), Object.defineProperty(ke, "__esModule", { value: !0 }), (ke.FeatureFlags = void 0));
  const e = Ii(),
    r = ji(),
    o = Ci(),
    a = io();
  class n {
    constructor() {
      ((this.initialized = !1), (this.eventProps = {}));
    }
    async initialize(t, u = { environment: "development" }) {
      if (this.isInitialized()) return;
      this.eventProps.environment = u.environment;
      const c = await (0, o.initFeatureFlags)({ user: t, config: u });
      ((this.initialized = !0), (this.evaluator = new e.Evaluator(c)));
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
      const c = {
        type: a.FeatureFlagEventType.CHECKFLAG,
        properties: {
          ...this.eventProps,
          environment: this.eventProps.environment || "development",
          name: t,
          success: u,
        },
      };
      (0, r.trackFeatureFlagEvent)(c);
    }
  }
  return ((ke.FeatureFlags = n), ke);
}
var gn;
function Ti() {
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
        const r = j;
        var o = _o();
        (Object.defineProperty(e, "NavigationTarget", {
          enumerable: !0,
          get: function () {
            return o.NavigationTarget;
          },
        }),
          r.__exportStar(Ge(), e),
          r.__exportStar(bo(), e),
          r.__exportStar(Ye(), e),
          r.__exportStar($o(), e),
          r.__exportStar(ti(), e),
          r.__exportStar(ni(), e),
          r.__exportStar(ii(), e),
          r.__exportStar(ai(), e),
          r.__exportStar(ci(), e),
          r.__exportStar(vi(), e),
          (e.i18n = r.__importStar(hi())),
          r.__exportStar(bi(), e),
          r.__exportStar(Si(), e),
          r.__exportStar(Ti(), e));
      })(Qe)),
    Qe
  );
}
var Le = Bi();
const Fi = "_container_16ann_1",
  Ai = "_header_16ann_9",
  Mi = "_controls_16ann_20",
  ki = "_searchSection_16ann_28",
  Ui = "_searchInput_16ann_34",
  Ni = "_orgSelect_16ann_35",
  Di = "_input_16ann_36",
  Li = "_select_16ann_37",
  Gi = "_addButton_16ann_63",
  Vi = "_addForm_16ann_79",
  xi = "_submitButton_16ann_88",
  zi = "_spinner_16ann_108",
  Wi = "_spinnerInner_16ann_113",
  Hi = "_tableContainer_16ann_117",
  Ki = "_table_16ann_117",
  Ji = "_stats_16ann_146",
  Yi = "_loadingContainer_16ann_155",
  I = {
    container: Fi,
    header: Ai,
    controls: Mi,
    searchSection: ki,
    searchInput: Ui,
    orgSelect: Ni,
    input: Di,
    select: Li,
    addButton: Gi,
    addForm: Vi,
    submitButton: xi,
    spinner: zi,
    spinnerInner: Wi,
    tableContainer: Hi,
    table: Ki,
    stats: Ji,
    loadingContainer: Yi,
  },
  pn = () =>
    O.jsx("div", { className: I.spinner, children: O.jsx("div", { className: I.spinnerInner }) });
function Xi() {
  const [e, r] = q.useState([]),
    [o, a] = q.useState([]),
    [n, i] = q.useState(""),
    [t, u] = q.useState(null),
    [c, s] = q.useState(null),
    [l, _] = q.useState(""),
    [m, d] = q.useState(null),
    [p, f] = q.useState(!1),
    [v, h] = q.useState(!0),
    [g, y] = q.useState(!1),
    w = async () => {
      try {
        const b = await Le.invoke("getUsers", {
          searchTerm: n || void 0,
          organizationId: t || void 0,
        });
        r(b);
      } catch (b) {
        console.error("Error fetching users:", b);
      }
    },
    E = async () => {
      try {
        const b = await Le.invoke("getOrganizations");
        a(b);
      } catch (b) {
        console.error("Error fetching organizations:", b);
      }
    },
    S = async () => {
      try {
        const b = await Le.invoke("getUserStats");
        s(b);
      } catch (b) {
        console.error("Error fetching stats:", b);
      }
    },
    C = async () => {
      h(!0);
      try {
        await Promise.all([w(), E(), S()]);
      } finally {
        h(!1);
      }
    };
  q.useEffect(() => {
    C();
  }, [n, t]);
  const G = async () => {
    if (!(!l || !m)) {
      y(!0);
      try {
        (await Le.invoke("createUser", { name: l, organizationId: m }),
          _(""),
          d(null),
          f(!1),
          await C());
      } catch (b) {
        console.error("Error adding user:", b);
      } finally {
        y(!1);
      }
    }
  };
  return v
    ? O.jsxs("div", {
        className: I.loadingContainer,
        children: [O.jsx(pn, {}), O.jsx("p", { children: "Loading data..." })],
      })
    : O.jsxs("div", {
        className: I.container,
        children: [
          O.jsx("header", {
            className: I.header,
            children: O.jsx("h1", { children: "OrgTracker" }),
          }),
          O.jsxs("div", {
            className: I.controls,
            children: [
              O.jsxs("div", {
                className: I.searchSection,
                children: [
                  O.jsx("input", {
                    type: "text",
                    placeholder: "🔍 Search by name...",
                    value: n,
                    onChange: (b) => i(b.target.value),
                    className: I.searchInput,
                  }),
                  O.jsxs("select", {
                    value: t || "",
                    onChange: (b) => u(b.target.value ? Number(b.target.value) : null),
                    className: I.orgSelect,
                    children: [
                      O.jsx("option", { value: "", children: "All Organizations" }),
                      o.map((b) =>
                        O.jsxs(
                          "option",
                          {
                            value: b.id,
                            children: [b.name, " (", c?.orgBreakdown[b.id] || 0, ")"],
                          },
                          b.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              O.jsx("button", {
                className: I.addButton,
                onClick: () => f(!p),
                children: p ? "Cancel" : "+ Add User",
              }),
            ],
          }),
          p &&
            O.jsxs("div", {
              className: I.addForm,
              children: [
                O.jsx("input", {
                  type: "text",
                  placeholder: "User Name",
                  value: l,
                  onChange: (b) => _(b.target.value),
                  className: I.input,
                  disabled: g,
                }),
                O.jsxs("select", {
                  value: m || "",
                  onChange: (b) => d(Number(b.target.value)),
                  className: I.select,
                  disabled: g,
                  children: [
                    O.jsx("option", { value: "", children: "Select Organization" }),
                    o.map((b) => O.jsx("option", { value: b.id, children: b.name }, b.id)),
                  ],
                }),
                O.jsx("button", {
                  onClick: G,
                  className: I.submitButton,
                  disabled: !l || !m || g,
                  style: {
                    opacity: !l || !m || g ? 0.5 : 1,
                    cursor: !l || !m || g ? "not-allowed" : "pointer",
                  },
                  children: g
                    ? O.jsxs(O.Fragment, {
                        children: [
                          O.jsx(pn, {}),
                          O.jsx("span", { style: { marginLeft: "8px" }, children: "Adding..." }),
                        ],
                      })
                    : "Add User",
                }),
              ],
            }),
          O.jsx("div", {
            className: I.tableContainer,
            children: O.jsxs("table", {
              className: I.table,
              children: [
                O.jsx("thead", {
                  children: O.jsxs("tr", {
                    children: [
                      O.jsx("th", { children: "👤 User Name" }),
                      O.jsx("th", { children: "🏢 Organization" }),
                    ],
                  }),
                }),
                O.jsx("tbody", {
                  children: e.map((b) =>
                    O.jsxs(
                      "tr",
                      {
                        children: [
                          O.jsx("td", { children: b.users.name }),
                          O.jsx("td", { children: b.organization.name }),
                        ],
                      },
                      b.users.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
          O.jsx("div", {
            className: I.stats,
            children: O.jsxs("p", { children: ["Total Users: ", c?.totalUsers || 0] }),
          }),
        ],
      });
}
const Zi = document.getElementById("root"),
  Qi = ao.createRoot(Zi),
  yn = () => {
    Qi.render(O.jsx(Xi, {}));
  };
Le.view.theme
  .enable()
  .then(() => {
    yn();
  })
  .catch((e) => {
    (console.error(e.message), yn());
  });
