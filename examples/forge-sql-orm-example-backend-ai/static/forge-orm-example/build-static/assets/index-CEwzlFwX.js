const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./iframe-resizer-Bs5bfbS0.js",
      "./rolldown-runtime-BYbx6iT9.js",
      "./custom-theme-BwT9qcig.js",
      "./wrapNativeSuper-C8aTj56-.js",
      "./body-Ccy5UUZO.js",
      "./react-dom-vendor-BHIljUNy.js",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, r, t as i } from "./rolldown-runtime-BYbx6iT9.js";
import { n as a, r as o, t as s } from "./react-dom-vendor-BHIljUNy.js";
import { t as c } from "./lodash-vendor-CY-a7-Db.js";
import {
  a as l,
  c as u,
  d,
  f,
  h as p,
  i as m,
  l as h,
  m as g,
  n as _,
  o as v,
  p as y,
  r as b,
  s as x,
  t as S,
  u as C,
} from "./wrapNativeSuper-C8aTj56-.js";
import { t as w } from "./client-core-vendor-DsAVthuu.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var T = e(o()),
  E = r({
    __addDisposableResource: () => ve,
    __assign: () => Se,
    __asyncDelegator: () => ue,
    __asyncGenerator: () => le,
    __asyncValues: () => de,
    __await: () => ce,
    __awaiter: () => te,
    __classPrivateFieldGet: () => he,
    __classPrivateFieldIn: () => _e,
    __classPrivateFieldSet: () => ge,
    __createBinding: () => Ce,
    __decorate: () => k,
    __disposeResources: () => ye,
    __esDecorate: () => j,
    __exportStar: () => re,
    __extends: () => D,
    __generator: () => ne,
    __importDefault: () => me,
    __importStar: () => pe,
    __makeTemplateObject: () => fe,
    __metadata: () => ee,
    __param: () => A,
    __propKey: () => N,
    __read: () => ae,
    __rest: () => O,
    __rewriteRelativeImportExtension: () => be,
    __runInitializers: () => M,
    __setFunctionName: () => P,
    __spread: () => oe,
    __spreadArray: () => F,
    __spreadArrays: () => se,
    __values: () => ie,
    default: () => I,
  });
function D(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  xe(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function O(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function k(e, t, n, r) {
  var i = arguments.length,
    a = i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    o;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    a = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
  return (i > 3 && a && Object.defineProperty(t, n, a), a);
}
function A(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function j(e, t, n, r, i, a) {
  function o(e) {
    if (e !== void 0 && typeof e != `function`) throw TypeError(`Function expected`);
    return e;
  }
  for (
    var s = r.kind,
      c = s === `getter` ? `get` : s === `setter` ? `set` : `value`,
      l = !t && e ? (r.static ? e : e.prototype) : null,
      u = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}),
      d,
      f = !1,
      p = n.length - 1;
    p >= 0;
    p--
  ) {
    var m = {};
    for (var h in r) m[h] = h === `access` ? {} : r[h];
    for (var h in r.access) m.access[h] = r.access[h];
    m.addInitializer = function (e) {
      if (f) throw TypeError(`Cannot add initializers after decoration has completed`);
      a.push(o(e || null));
    };
    var g = (0, n[p])(s === `accessor` ? { get: u.get, set: u.set } : u[c], m);
    if (s === `accessor`) {
      if (g === void 0) continue;
      if (typeof g != `object` || !g) throw TypeError(`Object expected`);
      ((d = o(g.get)) && (u.get = d),
        (d = o(g.set)) && (u.set = d),
        (d = o(g.init)) && i.unshift(d));
    } else (d = o(g)) && (s === `field` ? i.unshift(d) : (u[c] = d));
  }
  (l && Object.defineProperty(l, r.name, u), (f = !0));
}
function M(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function N(e) {
  return typeof e == `symbol` ? e : `${e}`;
}
function P(e, t, n) {
  return (
    typeof t == `symbol` && (t = t.description ? `[${t.description}]` : ``),
    Object.defineProperty(e, `name`, { configurable: !0, value: n ? `${n} ${t}` : t })
  );
}
function ee(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function te(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function ne(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    a,
    o = Object.create((typeof Iterator == `function` ? Iterator : Object).prototype);
  return (
    (o.next = s(0)),
    (o.throw = s(1)),
    (o.return = s(2)),
    typeof Symbol == `function` &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(e) {
    return function (t) {
      return c([e, t]);
    };
  }
  function c(s) {
    if (r) throw TypeError(`Generator is already executing.`);
    for (; o && ((o = 0), s[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          i &&
            (a =
              s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) &&
            !(a = a.call(i, s[1])).done)
        )
          return a;
        switch (((i = 0), a && (s = [s[0] & 2, a.value]), s[0])) {
          case 0:
          case 1:
            a = s;
            break;
          case 4:
            return (n.label++, { value: s[1], done: !1 });
          case 5:
            (n.label++, (i = s[1]), (s = [0]));
            continue;
          case 7:
            ((s = n.ops.pop()), n.trys.pop());
            continue;
          default:
            if (
              ((a = n.trys), !(a = a.length > 0 && a[a.length - 1])) &&
              (s[0] === 6 || s[0] === 2)
            ) {
              n = 0;
              continue;
            }
            if (s[0] === 3 && (!a || (s[1] > a[0] && s[1] < a[3]))) {
              n.label = s[1];
              break;
            }
            if (s[0] === 6 && n.label < a[1]) {
              ((n.label = a[1]), (a = s));
              break;
            }
            if (a && n.label < a[2]) {
              ((n.label = a[2]), n.ops.push(s));
              break;
            }
            (a[2] && n.ops.pop(), n.trys.pop());
            continue;
        }
        s = t.call(e, n);
      } catch (e) {
        ((s = [6, e]), (i = 0));
      } finally {
        r = a = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function re(e, t) {
  for (var n in e) n !== `default` && !Object.prototype.hasOwnProperty.call(t, n) && Ce(t, e, n);
}
function ie(e) {
  var t = typeof Symbol == `function` && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == `number`)
    return {
      next: function () {
        return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
      },
    };
  throw TypeError(t ? `Object is not iterable.` : `Symbol.iterator is not defined.`);
}
function ae(e, t) {
  var n = typeof Symbol == `function` && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    a = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (e) {
    o = { error: e };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function oe() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(ae(arguments[t]));
  return e;
}
function se() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
  return r;
}
function F(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function ce(e) {
  return this instanceof ce ? ((this.v = e), this) : new ce(e);
}
function le(e, t, n) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var r = n.apply(e, t || []),
    i,
    a = [];
  return (
    (i = Object.create((typeof AsyncIterator == `function` ? AsyncIterator : Object).prototype)),
    s(`next`),
    s(`throw`),
    s(`return`, o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(e) {
    return function (t) {
      return Promise.resolve(t).then(e, d);
    };
  }
  function s(e, t) {
    r[e] &&
      ((i[e] = function (t) {
        return new Promise(function (n, r) {
          a.push([e, t, n, r]) > 1 || c(e, t);
        });
      }),
      t && (i[e] = t(i[e])));
  }
  function c(e, t) {
    try {
      l(r[e](t));
    } catch (e) {
      f(a[0][3], e);
    }
  }
  function l(e) {
    e.value instanceof ce ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
  }
  function u(e) {
    c(`next`, e);
  }
  function d(e) {
    c(`throw`, e);
  }
  function f(e, t) {
    (e(t), a.shift(), a.length && c(a[0][0], a[0][1]));
  }
}
function ue(e) {
  var t, n;
  return (
    (t = {}),
    r(`next`),
    r(`throw`, function (e) {
      throw e;
    }),
    r(`return`),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(r, i) {
    t[r] = e[r]
      ? function (t) {
          return (n = !n) ? { value: ce(e[r](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function de(e) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof ie == `function` ? ie(e) : e[Symbol.iterator]()),
      (n = {}),
      r(`next`),
      r(`throw`),
      r(`return`),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(t) {
    n[t] =
      e[t] &&
      function (n) {
        return new Promise(function (r, a) {
          ((n = e[t](n)), i(r, a, n.done, n.value));
        });
      };
  }
  function i(e, t, n, r) {
    Promise.resolve(r).then(function (t) {
      e({ value: t, done: n });
    }, t);
  }
}
function fe(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, `raw`, { value: t }) : (e.raw = t), e);
}
function pe(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = Te(e), r = 0; r < n.length; r++) n[r] !== `default` && Ce(t, e, n[r]);
  return (we(t, e), t);
}
function me(e) {
  return e && e.__esModule ? e : { default: e };
}
function he(e, t, n, r) {
  if (n === `a` && !r) throw TypeError(`Private accessor was defined without a getter`);
  if (typeof t == `function` ? e !== t || !r : !t.has(e))
    throw TypeError(`Cannot read private member from an object whose class did not declare it`);
  return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e);
}
function ge(e, t, n, r, i) {
  if (r === `m`) throw TypeError(`Private method is not writable`);
  if (r === `a` && !i) throw TypeError(`Private accessor was defined without a setter`);
  if (typeof t == `function` ? e !== t || !i : !t.has(e))
    throw TypeError(`Cannot write private member to an object whose class did not declare it`);
  return (r === `a` ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
}
function _e(e, t) {
  if (t === null || (typeof t != `object` && typeof t != `function`))
    throw TypeError(`Cannot use 'in' operator on non-object`);
  return typeof e == `function` ? t === e : e.has(t);
}
function ve(e, t, n) {
  if (t != null) {
    if (typeof t != `object` && typeof t != `function`) throw TypeError(`Object expected.`);
    var r, i;
    if (n) {
      if (!Symbol.asyncDispose) throw TypeError(`Symbol.asyncDispose is not defined.`);
      r = t[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw TypeError(`Symbol.dispose is not defined.`);
      ((r = t[Symbol.dispose]), n && (i = r));
    }
    if (typeof r != `function`) throw TypeError(`Object not disposable.`);
    (i &&
      (r = function () {
        try {
          i.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      e.stack.push({ value: t, dispose: r, async: n }));
  } else n && e.stack.push({ async: !0 });
  return t;
}
function ye(e) {
  function t(t) {
    ((e.error = e.hasError ? new Ee(t, e.error, `An error was suppressed during disposal.`) : t),
      (e.hasError = !0));
  }
  var n,
    r = 0;
  function i() {
    for (; (n = e.stack.pop()); )
      try {
        if (!n.async && r === 1) return ((r = 0), e.stack.push(n), Promise.resolve().then(i));
        if (n.dispose) {
          var a = n.dispose.call(n.value);
          if (n.async)
            return (
              (r |= 2),
              Promise.resolve(a).then(i, function (e) {
                return (t(e), i());
              })
            );
        } else r |= 1;
      } catch (e) {
        t(e);
      }
    if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function be(e, t) {
  return typeof e == `string` && /^\.\.?\//.test(e)
    ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (e, n, r, i, a) {
        return n
          ? t
            ? `.jsx`
            : `.js`
          : r && (!i || !a)
            ? e
            : r + i + `.` + a.toLowerCase() + `js`;
      })
    : e;
}
var xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  I,
  De = n(() => {
    ((xe = function (e, t) {
      return (
        (xe =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        xe(e, t)
      );
    }),
      (Se = function () {
        return (
          (Se =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Se.apply(this, arguments)
        );
      }),
      (Ce = Object.create
        ? function (e, t, n, r) {
            r === void 0 && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, i));
          }
        : function (e, t, n, r) {
            (r === void 0 && (r = n), (e[r] = t[n]));
          }),
      (we = Object.create
        ? function (e, t) {
            Object.defineProperty(e, `default`, { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
      (Te = function (e) {
        return (
          (Te =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            }),
          Te(e)
        );
      }),
      (Ee =
        typeof SuppressedError == `function`
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return ((r.name = `SuppressedError`), (r.error = e), (r.suppressed = t), r);
            }),
      (I = {
        __extends: D,
        __assign: Se,
        __rest: O,
        __decorate: k,
        __param: A,
        __esDecorate: j,
        __runInitializers: M,
        __propKey: N,
        __setFunctionName: P,
        __metadata: ee,
        __awaiter: te,
        __generator: ne,
        __createBinding: Ce,
        __exportStar: re,
        __values: ie,
        __read: ae,
        __spread: oe,
        __spreadArrays: se,
        __spreadArray: F,
        __await: ce,
        __asyncGenerator: le,
        __asyncDelegator: ue,
        __asyncValues: de,
        __makeTemplateObject: fe,
        __importStar: pe,
        __importDefault: me,
        __classPrivateFieldGet: he,
        __classPrivateFieldSet: ge,
        __classPrivateFieldIn: _e,
        __addDisposableResource: ve,
        __disposeResources: ye,
        __rewriteRelativeImportExtension: be,
      }));
  }),
  Oe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.NavigationTarget = void 0),
      (e.NavigationTarget = {
        ContentView: `contentView`,
        ContentEdit: `contentEdit`,
        ContentList: `contentList`,
        SpaceView: `spaceView`,
        Module: `module`,
        UserProfile: `userProfile`,
        Dashboard: `dashboard`,
        Issue: `issue`,
        ProjectSettingsDetails: `projectSettingsDetails`,
      }));
  }),
  L = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BridgeAPIError = void 0),
      (e.BridgeAPIError = class extends Error {}));
  }),
  R = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getCallBridge = void 0));
    var t = L();
    function n(e) {
      return !!e?.callBridge;
    }
    e.getCallBridge = () => {
      if (!n(globalThis.__bridge))
        throw new t.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
      return globalThis.__bridge.callBridge;
    };
  }),
  ke = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.withRateLimiter = void 0));
    var t = L();
    e.withRateLimiter = (e, n, r, i) => {
      let a = Date.now(),
        o = 0;
      return async (...s) => {
        let c = Date.now();
        if ((c - a > r && ((a = c), (o = 0)), o >= n))
          throw new t.BridgeAPIError(i || `Too many invocations.`);
        return ((o += 1), e(...s));
      };
    };
  }),
  Ae = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.makeInvoke = e.invoke = void 0));
    var t = R(),
      n = L(),
      r = ke(),
      i = (0, t.getCallBridge)(),
      a = (e) => {
        if (e && Object.values(e).some((e) => typeof e == `function`))
          throw new n.BridgeAPIError(`Passing functions as part of the payload is not supported!`);
      };
    e.invoke = (0, r.withRateLimiter)(
      (e, t) => {
        if (typeof e != `string`) throw new n.BridgeAPIError(`functionKey must be a string!`);
        return (a(t), i(`invoke`, { functionKey: e, payload: t }));
      },
      500,
      1e3 * 25,
      `Resolver calls are rate limited at 500req/25s`,
    );
    function o() {
      return e.invoke;
    }
    e.makeInvoke = o;
  }),
  je = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (De(), t(E)).__exportStar(Ae(), e));
  }),
  Me = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._invokeEndpointFn = e.InvokeType = void 0));
    var t = R(),
      n = L(),
      r = ke(),
      i = 500,
      a = 25,
      o = 1e3 * a;
    (function (e) {
      ((e.REMOTE = `Remote`), (e.SERVICE = `Container`));
    })((e.InvokeType ||= {}));
    var s = (0, t.getCallBridge)(),
      c = (e) => {
        if (e && Object.values(e).some((e) => typeof e == `function`))
          throw new n.BridgeAPIError(`Passing functions as part of the payload is not supported!`);
      },
      l = (e) => async (t) => {
        c(t);
        let {
            success: n,
            payload: r,
            error: i,
          } = (await s(`invoke`, { ...t, invokeType: `ui-${e.toLowerCase()}-fetch` })) ?? {},
          a = { ...(n ? r : i) };
        if (a && a.headers)
          for (let e in a.headers)
            Array.isArray(a.headers[e]) && (a.headers[e] = a.headers[e].join(`,`));
        return a;
      };
    e._invokeEndpointFn = (e) => {
      let t = l(e);
      return (0, r.withRateLimiter)(
        t,
        i,
        o,
        `${e} invocation calls are rate limited at ${i}/${a}s`,
      );
    };
  }),
  Ne = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeRemote = void 0));
    var t = Me();
    e.invokeRemote = (e) => (0, t._invokeEndpointFn)(t.InvokeType.REMOTE)(e);
  }),
  Pe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeService = void 0));
    var t = Me();
    e.invokeService = (e) => (0, t._invokeEndpointFn)(t.InvokeType.SERVICE)(e);
  }),
  Fe = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (De(), t(E));
    (n.__exportStar(Ne(), e), n.__exportStar(Pe(), e));
  }),
  Ie = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.submit = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)();
    e.submit = async (e) => {
      if ((await r(`submit`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not submittable.`);
    };
  }),
  Le = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.close = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)();
    e.close = async (e) => {
      try {
        if ((await r(`close`, e)) === !1)
          throw new n.BridgeAPIError(`this resource's view is not closable.`);
      } catch {
        throw new n.BridgeAPIError(`this resource's view is not closable.`);
      }
    };
  }),
  Re = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.open = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)();
    e.open = async () => {
      try {
        if ((await r(`open`)) === !1)
          throw new n.BridgeAPIError(`this resource's view is not openable.`);
      } catch {
        throw new n.BridgeAPIError(`this resource's view is not openable.`);
      }
    };
  }),
  ze = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.refresh = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)();
    e.refresh = async (e) => {
      if ((await r(`refresh`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not refreshable.`);
    };
  }),
  Be = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.createHistory = void 0));
    var t = (0, R().getCallBridge)();
    e.createHistory = async () => {
      let e = await t(`createHistory`);
      return (
        e.listen((t) => {
          e.location = t;
        }),
        e
      );
    };
  }),
  Ve = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FORGE_SUPPORTED_LOCALE_CODES = e.I18N_BUNDLE_FOLDER_NAME = e.I18N_INFO_FILE_NAME = void 0),
      (e.I18N_INFO_FILE_NAME = `i18n-info.json`),
      (e.I18N_BUNDLE_FOLDER_NAME = `__LOCALES__`),
      (e.FORGE_SUPPORTED_LOCALE_CODES =
        `zh-CN.zh-TW.cs-CZ.da-DK.nl-NL.en-US.en-GB.et-EE.fi-FI.fr-FR.de-DE.hu-HU.is-IS.it-IT.ja-JP.ko-KR.no-NO.pl-PL.pt-BR.pt-PT.ro-RO.ru-RU.sk-SK.tr-TR.es-ES.sv-SE`.split(
          `.`,
        )));
  }),
  He = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.TranslationsGetter = e.TranslationGetterError = void 0));
    var t = (e, t) => {
        e.includes(t) || e.push(t);
      },
      n = class extends Error {
        constructor(e) {
          (super(e), (this.name = `TranslationGetterError`));
        }
      };
    ((e.TranslationGetterError = n),
      (e.TranslationsGetter = class {
        resourcesAccessor;
        i18nInfoConfig = null;
        translationResources = new Map();
        constructor(e) {
          this.resourcesAccessor = e;
        }
        async getTranslations(e, t = { fallback: !0 }) {
          let n = await this.getI18nInfoConfig(),
            { fallback: r } = t;
          if (!r) {
            let t;
            return (
              n.locales.includes(e) && (t = await this.getTranslationResource(e)),
              { translations: t ?? null, locale: e }
            );
          }
          for (let t of this.getLocaleLookupOrder(e, n)) {
            let e = await this.getTranslationResource(t);
            if (e) return { translations: e, locale: t };
          }
          return { translations: null, locale: e };
        }
        async getTranslationsByLocaleLookupOrder(e) {
          let t = await this.getI18nInfoConfig(),
            n = this.getLocaleLookupOrder(e, t);
          return await Promise.all(
            n.map(async (e) => ({ locale: e, translations: await this.getTranslationResource(e) })),
          );
        }
        reset() {
          ((this.i18nInfoConfig = null), this.translationResources.clear());
        }
        async getTranslationResource(e) {
          let t = this.translationResources.get(e);
          if (!t)
            try {
              ((t = await this.resourcesAccessor.getTranslationResource(e)),
                this.translationResources.set(e, t));
            } catch (t) {
              throw t instanceof n
                ? t
                : new n(`Failed to get translation resource for locale: ${e}`);
            }
          return t;
        }
        async getI18nInfoConfig() {
          if (!this.i18nInfoConfig)
            try {
              this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
            } catch (e) {
              throw e instanceof n ? e : new n(`Failed to get i18n info config`);
            }
          return this.i18nInfoConfig;
        }
        getLocaleLookupOrder(e, n) {
          let { locales: r, fallback: i } = n,
            a = [e],
            o = i[e];
          return (
            o && Array.isArray(o) && o.length > 0 && a.push(...o),
            t(a, n.fallback.default),
            a.filter((e) => r.includes(e))
          );
        }
      }));
  }),
  Ue = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
    var n = (De(), t(E)).__importDefault(c());
    ((e.getTranslationValue = (t, n, r) => {
      let i = t[r];
      return i ? (0, e.getTranslationValueFromContent)(i, n) : null;
    }),
      (e.getTranslationValueFromContent = (e, t) => {
        let r = e[t];
        if (!r) {
          let i = t.split(`.`);
          i.length > 1 && (r = (0, n.default)(e, i, null));
        }
        return typeof r == `string` ? r : null;
      }));
  }),
  We = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Translator = void 0));
    var t = Ue();
    e.Translator = class {
      locale;
      translationsGetter;
      localeLookupOrderedTranslations = null;
      cache = new Map();
      constructor(e, t) {
        ((this.locale = e), (this.translationsGetter = t));
      }
      async init() {
        this.localeLookupOrderedTranslations =
          await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
      }
      translate(e) {
        if (!this.localeLookupOrderedTranslations) throw Error(`TranslationLookup not initialized`);
        let n = this.cache.get(e);
        if (n === void 0) {
          for (let { translations: r } of this.localeLookupOrderedTranslations) {
            let i = (0, t.getTranslationValueFromContent)(r, e);
            if (i !== null) {
              n = i;
              break;
            }
          }
          ((n ??= null), this.cache.set(e, n));
        }
        return n;
      }
    };
  }),
  Ge = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.ensureLocale = void 0));
    var t = Ve(),
      n = new Set(t.FORGE_SUPPORTED_LOCALE_CODES),
      r = { "en-UK": `en-GB`, "nb-NO": `no-NO` },
      i = t.FORGE_SUPPORTED_LOCALE_CODES.reduce(
        (e, t) => {
          let [n] = t.split(`-`);
          return (e[n] || (e[n] = t), e);
        },
        { nb: `no-NO`, pt: `pt-PT` },
      );
    e.ensureLocale = (e) => {
      let t = e.replace(`_`, `-`);
      return n.has(t) ? t : (i[t] ?? r[t] ?? null);
    };
  }),
  Ke = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.extractI18nPropertiesFromModules =
        e.extractI18nKeysFromModules =
        e.getI18nSupportedModuleEntries =
          void 0));
    var t = (e) => typeof e == `object` && !!e && !Array.isArray(e),
      n = (e) => typeof e?.i18n == `string`,
      r = (e) => e.startsWith(`connect-`),
      i = (e) => e.startsWith(`core:`),
      a = (e) => {
        let r = new Set(),
          i = (e, a) =>
            !t(e) || r.has(e)
              ? []
              : (r.add(e),
                Object.entries(e).flatMap(([e, t]) => {
                  let r = [...a, e];
                  return n(t)
                    ? [{ propertyPath: r, key: t.i18n }]
                    : Array.isArray(t)
                      ? t.flatMap((e) => i(e, r))
                      : i(t, r);
                }));
        return i(e, []);
      };
    ((e.getI18nSupportedModuleEntries = (e) =>
      Object.entries(e).flatMap(([e, t]) =>
        !r(e) && !i(e) && t && Array.isArray(t) && t.length > 0 ? t.map((t) => [t, e]) : [],
      )),
      (e.extractI18nKeysFromModules = (t) => {
        let n = new Set();
        for (let r of (0, e.getI18nSupportedModuleEntries)(t)) {
          let e = a(r[0]);
          for (let { key: t } of e) n.add(t);
        }
        return n.size > 0 ? Array.from(n) : [];
      }),
      (e.extractI18nPropertiesFromModules = (t) => {
        let n = [];
        for (let r of (0, e.getI18nSupportedModuleEntries)(t)) {
          let e = a(r[0]);
          for (let t of e) n.push({ moduleName: r[1], ...t });
        }
        return n;
      }));
  }),
  qe = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  Je = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getI18nSupportedModuleEntries =
        e.extractI18nPropertiesFromModules =
        e.extractI18nKeysFromModules =
        e.getTranslationValue =
          void 0));
    var n = (De(), t(E));
    (n.__exportStar(Ve(), e),
      n.__exportStar(He(), e),
      n.__exportStar(We(), e),
      n.__exportStar(Ge(), e));
    var r = Ue();
    Object.defineProperty(e, `getTranslationValue`, {
      enumerable: !0,
      get: function () {
        return r.getTranslationValue;
      },
    });
    var i = Ke();
    (Object.defineProperty(e, `extractI18nKeysFromModules`, {
      enumerable: !0,
      get: function () {
        return i.extractI18nKeysFromModules;
      },
    }),
      Object.defineProperty(e, `extractI18nPropertiesFromModules`, {
        enumerable: !0,
        get: function () {
          return i.extractI18nPropertiesFromModules;
        },
      }),
      Object.defineProperty(e, `getI18nSupportedModuleEntries`, {
        enumerable: !0,
        get: function () {
          return i.getI18nSupportedModuleEntries;
        },
      }),
      n.__exportStar(qe(), e));
  }),
  Ye = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getContext = void 0));
    var t = R(),
      n = Je(),
      r = (0, t.getCallBridge)();
    e.getContext = async () => {
      let e = await r(`getContext`),
        t = e?.locale;
      return (t && (e.locale = (0, n.ensureLocale)(t) ?? t), e);
    };
  }),
  Xe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.changeWindowTitle = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)();
    e.changeWindowTitle = async (e) => {
      try {
        await r(`changeWindowTitle`, e);
      } catch {
        throw new n.BridgeAPIError(`the window title wasn't changed due to error.`);
      }
    };
  }),
  Ze = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.theme = void 0));
    var t = (0, R().getCallBridge)();
    e.theme = { enable: () => t(`enableTheming`) };
  }),
  Qe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.blobToBase64 = e.base64ToBlob = void 0),
      (e.base64ToBlob = (e, t) => {
        if (!e) return null;
        let n = e.includes(`;base64`) ? e.split(`,`)[1] : e,
          r = atob(n),
          i = Array(r.length);
        for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
        let a = new Uint8Array(i);
        return new Blob([a], { type: t });
      }),
      (e.blobToBase64 = (e) =>
        new Promise((t, n) => {
          let r = new FileReader();
          ((r.onloadend = () => {
            t(r.result);
          }),
            (r.onerror = n),
            r.readAsDataURL(e));
        })));
  }),
  $e = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.containsSerialisedBlobs =
        e.containsBlobs =
        e.deserialiseBlobsInPayload =
        e.serialiseBlobsInPayload =
          void 0));
    var t = Qe(),
      n = (e) => {
        if (typeof e != `object` || !e || Object.prototype.toString.call(e) !== `[object Object]`)
          return !1;
        let t = Object.getPrototypeOf(e);
        if (t === null) return !0;
        let n = Object.prototype.hasOwnProperty.call(t, `constructor`) && t.constructor;
        return (
          typeof n == `function` &&
          n instanceof n &&
          Function.prototype.call(n) === Function.prototype.call(e)
        );
      },
      r = async (e) => ({ data: await (0, t.blobToBase64)(e), type: e.type }),
      i = (e) => (0, t.base64ToBlob)(e.data, e.type);
    ((e.serialiseBlobsInPayload = async (t) => {
      if (t instanceof Blob) return { ...(await r(t)), __isBlobData: !0 };
      if (Array.isArray(t)) return Promise.all(t.map((t) => (0, e.serialiseBlobsInPayload)(t)));
      if (t && n(t)) {
        let n = await Promise.all(
          Object.entries(t).map(async ([t, n]) => [t, await (0, e.serialiseBlobsInPayload)(n)]),
        );
        return Object.fromEntries(n);
      }
      return t;
    }),
      (e.deserialiseBlobsInPayload = (t) => {
        if (t && n(t) && `__isBlobData` in t) {
          let e = t;
          return i({ data: e.data, type: e.type });
        }
        if (Array.isArray(t)) return t.map((t) => (0, e.deserialiseBlobsInPayload)(t));
        if (t && n(t)) {
          let n = {};
          for (let [r, i] of Object.entries(t)) n[r] = (0, e.deserialiseBlobsInPayload)(i);
          return n;
        }
        return t;
      }),
      (e.containsBlobs = (t) =>
        t instanceof Blob
          ? !0
          : Array.isArray(t)
            ? t.some((t) => (0, e.containsBlobs)(t))
            : t && n(t)
              ? Object.values(t).some((t) => (0, e.containsBlobs)(t))
              : !1),
      (e.containsSerialisedBlobs = (t) =>
        t && n(t) && `__isBlobData` in t
          ? !0
          : Array.isArray(t)
            ? t.some((t) => (0, e.containsSerialisedBlobs)(t))
            : t && n(t)
              ? Object.values(t).some((t) => (0, e.containsSerialisedBlobs)(t))
              : !1));
  }),
  et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.events = void 0));
    var t = R(),
      n = $e(),
      r = (0, t.getCallBridge)(),
      i = (e) => (t) => {
        let r = t;
        return (
          (0, n.containsSerialisedBlobs)(t) && (r = (0, n.deserialiseBlobsInPayload)(t)),
          e(r)
        );
      };
    e.events = {
      emit: async (e, t) => {
        let i = t;
        return (
          (0, n.containsBlobs)(t) && (i = await (0, n.serialiseBlobsInPayload)(t)),
          r(`emit`, { event: e, payload: i })
        );
      },
      on: (e, t) => r(`on`, { event: e, callback: i(t) }),
      emitPublic: async (e, t) => {
        let i = t;
        return (
          (0, n.containsBlobs)(t) && (i = await (0, n.serialiseBlobsInPayload)(t)),
          r(`emitPublic`, { event: e, payload: i })
        );
      },
      onPublic: (e, t) => r(`onPublic`, { event: e, callback: i(t) }),
    };
  }),
  tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.emitReadyEvent = void 0));
    var t = et(),
      n = Tt(),
      r = (0, R().getCallBridge)(),
      i = `EXTENSION_READY`;
    e.emitReadyEvent = async () => {
      let e = await n.view.getContext();
      await t.events.emit(i, { localId: e.localId });
      try {
        await r(`emitReadyEvent`);
      } catch {}
    };
  }),
  nt,
  rt,
  it,
  at,
  ot = n(() => {
    ((nt = `modulepreload`),
      (rt = function (e, t) {
        return new URL(e, t).href;
      }),
      (it = {}),
      (at = function (e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
          let e = document.getElementsByTagName(`link`),
            i = document.querySelector(`meta[property=csp-nonce]`),
            a = i?.nonce || i?.getAttribute(`nonce`);
          function o(e) {
            return Promise.all(
              e.map((e) =>
                Promise.resolve(e).then(
                  (e) => ({ status: `fulfilled`, value: e }),
                  (e) => ({ status: `rejected`, reason: e }),
                ),
              ),
            );
          }
          r = o(
            t.map((t) => {
              if (((t = rt(t, n)), t in it)) return;
              it[t] = !0;
              let r = t.endsWith(`.css`),
                i = r ? `[rel="stylesheet"]` : ``;
              if (n)
                for (let n = e.length - 1; n >= 0; n--) {
                  let i = e[n];
                  if (i.href === t && (!r || i.rel === `stylesheet`)) return;
                }
              else if (document.querySelector(`link[href="${t}"]${i}`)) return;
              let o = document.createElement(`link`);
              if (
                ((o.rel = r ? `stylesheet` : nt),
                r || (o.as = `script`),
                (o.crossOrigin = ``),
                (o.href = t),
                a && o.setAttribute(`nonce`, a),
                document.head.appendChild(o),
                r)
              )
                return new Promise((e, n) => {
                  (o.addEventListener(`load`, e),
                    o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
                });
            }),
          );
        }
        function i(e) {
          let t = new Event(`vite:preloadError`, { cancelable: !0 });
          if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
        }
        return r.then((t) => {
          for (let e of t || []) e.status === `rejected` && i(e.reason);
          return e().catch(i);
        });
      }));
  }),
  st = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = r));
    var t,
      n = new Uint8Array(16);
    function r() {
      if (
        !t &&
        ((t = typeof crypto < `u` && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
        !t)
      )
        throw Error(
          `crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`,
        );
      return t(n);
    }
  }),
  ct = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i));
  }),
  lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(ct());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      return typeof e == `string` && t.default.test(e);
    }
    e.default = r;
  }),
  ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.unsafeStringify = i));
    var t = n(lt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = [];
    for (let e = 0; e < 256; ++e) r.push((e + 256).toString(16).slice(1));
    function i(e, t = 0) {
      return (
        r[e[t + 0]] +
        r[e[t + 1]] +
        r[e[t + 2]] +
        r[e[t + 3]] +
        `-` +
        r[e[t + 4]] +
        r[e[t + 5]] +
        `-` +
        r[e[t + 6]] +
        r[e[t + 7]] +
        `-` +
        r[e[t + 8]] +
        r[e[t + 9]] +
        `-` +
        r[e[t + 10]] +
        r[e[t + 11]] +
        r[e[t + 12]] +
        r[e[t + 13]] +
        r[e[t + 14]] +
        r[e[t + 15]]
      );
    }
    function a(e, n = 0) {
      let r = i(e, n);
      if (!(0, t.default)(r)) throw TypeError(`Stringified UUID is invalid`);
      return r;
    }
    e.default = a;
  }),
  dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(st()),
      n = ut();
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i,
      a,
      o = 0,
      s = 0;
    function c(e, r, c) {
      let l = (r && c) || 0,
        u = r || Array(16);
      e ||= {};
      let d = e.node || i,
        f = e.clockseq === void 0 ? a : e.clockseq;
      if (d == null || f == null) {
        let n = e.random || (e.rng || t.default)();
        ((d ??= i = [n[0] | 1, n[1], n[2], n[3], n[4], n[5]]),
          (f ??= a = ((n[6] << 8) | n[7]) & 16383));
      }
      let p = e.msecs === void 0 ? Date.now() : e.msecs,
        m = e.nsecs === void 0 ? s + 1 : e.nsecs,
        h = p - o + (m - s) / 1e4;
      if (
        (h < 0 && e.clockseq === void 0 && (f = (f + 1) & 16383),
        (h < 0 || p > o) && e.nsecs === void 0 && (m = 0),
        m >= 1e4)
      )
        throw Error(`uuid.v1(): Can't create more than 10M uuids/sec`);
      ((o = p), (s = m), (a = f), (p += 0xb1d069b5400));
      let g = ((p & 268435455) * 1e4 + m) % 4294967296;
      ((u[l++] = (g >>> 24) & 255),
        (u[l++] = (g >>> 16) & 255),
        (u[l++] = (g >>> 8) & 255),
        (u[l++] = g & 255));
      let _ = ((p / 4294967296) * 1e4) & 268435455;
      ((u[l++] = (_ >>> 8) & 255),
        (u[l++] = _ & 255),
        (u[l++] = ((_ >>> 24) & 15) | 16),
        (u[l++] = (_ >>> 16) & 255),
        (u[l++] = (f >>> 8) | 128),
        (u[l++] = f & 255));
      for (let e = 0; e < 6; ++e) u[l + e] = d[e];
      return r || (0, n.unsafeStringify)(u);
    }
    e.default = c;
  }),
  ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(lt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      if (!(0, t.default)(e)) throw TypeError(`Invalid UUID`);
      let n,
        r = new Uint8Array(16);
      return (
        (r[0] = (n = parseInt(e.slice(0, 8), 16)) >>> 24),
        (r[1] = (n >>> 16) & 255),
        (r[2] = (n >>> 8) & 255),
        (r[3] = n & 255),
        (r[4] = (n = parseInt(e.slice(9, 13), 16)) >>> 8),
        (r[5] = n & 255),
        (r[6] = (n = parseInt(e.slice(14, 18), 16)) >>> 8),
        (r[7] = n & 255),
        (r[8] = (n = parseInt(e.slice(19, 23), 16)) >>> 8),
        (r[9] = n & 255),
        (r[10] = ((n = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
        (r[11] = (n / 4294967296) & 255),
        (r[12] = (n >>> 24) & 255),
        (r[13] = (n >>> 16) & 255),
        (r[14] = (n >>> 8) & 255),
        (r[15] = n & 255),
        r
      );
    }
    e.default = r;
  }),
  pt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.URL = e.DNS = void 0),
      (e.default = s));
    var t = ut(),
      n = r(ft());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e) {
      e = unescape(encodeURIComponent(e));
      let t = [];
      for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
      return t;
    }
    var a = `6ba7b810-9dad-11d1-80b4-00c04fd430c8`;
    e.DNS = a;
    var o = `6ba7b811-9dad-11d1-80b4-00c04fd430c8`;
    e.URL = o;
    function s(e, r, s) {
      function c(e, a, o, c) {
        if (
          (typeof e == `string` && (e = i(e)),
          typeof a == `string` && (a = (0, n.default)(a)),
          a?.length !== 16)
        )
          throw TypeError(`Namespace must be array-like (16 iterable integer values, 0-255)`);
        let l = new Uint8Array(16 + e.length);
        if (
          (l.set(a),
          l.set(e, a.length),
          (l = s(l)),
          (l[6] = (l[6] & 15) | r),
          (l[8] = (l[8] & 63) | 128),
          o)
        ) {
          c ||= 0;
          for (let e = 0; e < 16; ++e) o[c + e] = l[e];
          return o;
        }
        return (0, t.unsafeStringify)(l);
      }
      try {
        c.name = e;
      } catch {}
      return ((c.DNS = a), (c.URL = o), c);
    }
  }),
  mt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    function t(e) {
      if (typeof e == `string`) {
        let t = unescape(encodeURIComponent(e));
        e = new Uint8Array(t.length);
        for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
      }
      return n(i(a(e), e.length * 8));
    }
    function n(e) {
      let t = [],
        n = e.length * 32,
        r = `0123456789abcdef`;
      for (let i = 0; i < n; i += 8) {
        let n = (e[i >> 5] >>> (i % 32)) & 255,
          a = parseInt(r.charAt((n >>> 4) & 15) + r.charAt(n & 15), 16);
        t.push(a);
      }
      return t;
    }
    function r(e) {
      return (((e + 64) >>> 9) << 4) + 14 + 1;
    }
    function i(e, t) {
      ((e[t >> 5] |= 128 << (t % 32)), (e[r(t) - 1] = t));
      let n = 1732584193,
        i = -271733879,
        a = -1732584194,
        s = 271733878;
      for (let t = 0; t < e.length; t += 16) {
        let r = n,
          c = i,
          p = a,
          m = s;
        ((n = l(n, i, a, s, e[t], 7, -680876936)),
          (s = l(s, n, i, a, e[t + 1], 12, -389564586)),
          (a = l(a, s, n, i, e[t + 2], 17, 606105819)),
          (i = l(i, a, s, n, e[t + 3], 22, -1044525330)),
          (n = l(n, i, a, s, e[t + 4], 7, -176418897)),
          (s = l(s, n, i, a, e[t + 5], 12, 1200080426)),
          (a = l(a, s, n, i, e[t + 6], 17, -1473231341)),
          (i = l(i, a, s, n, e[t + 7], 22, -45705983)),
          (n = l(n, i, a, s, e[t + 8], 7, 1770035416)),
          (s = l(s, n, i, a, e[t + 9], 12, -1958414417)),
          (a = l(a, s, n, i, e[t + 10], 17, -42063)),
          (i = l(i, a, s, n, e[t + 11], 22, -1990404162)),
          (n = l(n, i, a, s, e[t + 12], 7, 1804603682)),
          (s = l(s, n, i, a, e[t + 13], 12, -40341101)),
          (a = l(a, s, n, i, e[t + 14], 17, -1502002290)),
          (i = l(i, a, s, n, e[t + 15], 22, 1236535329)),
          (n = u(n, i, a, s, e[t + 1], 5, -165796510)),
          (s = u(s, n, i, a, e[t + 6], 9, -1069501632)),
          (a = u(a, s, n, i, e[t + 11], 14, 643717713)),
          (i = u(i, a, s, n, e[t], 20, -373897302)),
          (n = u(n, i, a, s, e[t + 5], 5, -701558691)),
          (s = u(s, n, i, a, e[t + 10], 9, 38016083)),
          (a = u(a, s, n, i, e[t + 15], 14, -660478335)),
          (i = u(i, a, s, n, e[t + 4], 20, -405537848)),
          (n = u(n, i, a, s, e[t + 9], 5, 568446438)),
          (s = u(s, n, i, a, e[t + 14], 9, -1019803690)),
          (a = u(a, s, n, i, e[t + 3], 14, -187363961)),
          (i = u(i, a, s, n, e[t + 8], 20, 1163531501)),
          (n = u(n, i, a, s, e[t + 13], 5, -1444681467)),
          (s = u(s, n, i, a, e[t + 2], 9, -51403784)),
          (a = u(a, s, n, i, e[t + 7], 14, 1735328473)),
          (i = u(i, a, s, n, e[t + 12], 20, -1926607734)),
          (n = d(n, i, a, s, e[t + 5], 4, -378558)),
          (s = d(s, n, i, a, e[t + 8], 11, -2022574463)),
          (a = d(a, s, n, i, e[t + 11], 16, 1839030562)),
          (i = d(i, a, s, n, e[t + 14], 23, -35309556)),
          (n = d(n, i, a, s, e[t + 1], 4, -1530992060)),
          (s = d(s, n, i, a, e[t + 4], 11, 1272893353)),
          (a = d(a, s, n, i, e[t + 7], 16, -155497632)),
          (i = d(i, a, s, n, e[t + 10], 23, -1094730640)),
          (n = d(n, i, a, s, e[t + 13], 4, 681279174)),
          (s = d(s, n, i, a, e[t], 11, -358537222)),
          (a = d(a, s, n, i, e[t + 3], 16, -722521979)),
          (i = d(i, a, s, n, e[t + 6], 23, 76029189)),
          (n = d(n, i, a, s, e[t + 9], 4, -640364487)),
          (s = d(s, n, i, a, e[t + 12], 11, -421815835)),
          (a = d(a, s, n, i, e[t + 15], 16, 530742520)),
          (i = d(i, a, s, n, e[t + 2], 23, -995338651)),
          (n = f(n, i, a, s, e[t], 6, -198630844)),
          (s = f(s, n, i, a, e[t + 7], 10, 1126891415)),
          (a = f(a, s, n, i, e[t + 14], 15, -1416354905)),
          (i = f(i, a, s, n, e[t + 5], 21, -57434055)),
          (n = f(n, i, a, s, e[t + 12], 6, 1700485571)),
          (s = f(s, n, i, a, e[t + 3], 10, -1894986606)),
          (a = f(a, s, n, i, e[t + 10], 15, -1051523)),
          (i = f(i, a, s, n, e[t + 1], 21, -2054922799)),
          (n = f(n, i, a, s, e[t + 8], 6, 1873313359)),
          (s = f(s, n, i, a, e[t + 15], 10, -30611744)),
          (a = f(a, s, n, i, e[t + 6], 15, -1560198380)),
          (i = f(i, a, s, n, e[t + 13], 21, 1309151649)),
          (n = f(n, i, a, s, e[t + 4], 6, -145523070)),
          (s = f(s, n, i, a, e[t + 11], 10, -1120210379)),
          (a = f(a, s, n, i, e[t + 2], 15, 718787259)),
          (i = f(i, a, s, n, e[t + 9], 21, -343485551)),
          (n = o(n, r)),
          (i = o(i, c)),
          (a = o(a, p)),
          (s = o(s, m)));
      }
      return [n, i, a, s];
    }
    function a(e) {
      if (e.length === 0) return [];
      let t = e.length * 8,
        n = new Uint32Array(r(t));
      for (let r = 0; r < t; r += 8) n[r >> 5] |= (e[r / 8] & 255) << (r % 32);
      return n;
    }
    function o(e, t) {
      let n = (e & 65535) + (t & 65535);
      return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (n & 65535);
    }
    function s(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function c(e, t, n, r, i, a) {
      return o(s(o(o(t, e), o(r, a)), i), n);
    }
    function l(e, t, n, r, i, a, o) {
      return c((t & n) | (~t & r), e, t, i, a, o);
    }
    function u(e, t, n, r, i, a, o) {
      return c((t & r) | (n & ~r), e, t, i, a, o);
    }
    function d(e, t, n, r, i, a, o) {
      return c(t ^ n ^ r, e, t, i, a, o);
    }
    function f(e, t, n, r, i, a, o) {
      return c(n ^ (t | ~r), e, t, i, a, o);
    }
    e.default = t;
  }),
  ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(pt()),
      n = r(mt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v3`, 48, n.default);
  }),
  gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = {
        randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      }));
  }),
  _t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = i(gt()),
      n = i(st()),
      r = ut();
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e, i, a) {
      if (t.default.randomUUID && !i && !e) return t.default.randomUUID();
      e ||= {};
      let o = e.random || (e.rng || n.default)();
      if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), i)) {
        a ||= 0;
        for (let e = 0; e < 16; ++e) i[a + e] = o[e];
        return i;
      }
      return (0, r.unsafeStringify)(o);
    }
    e.default = a;
  }),
  vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    function t(e, t, n, r) {
      switch (e) {
        case 0:
          return (t & n) ^ (~t & r);
        case 1:
          return t ^ n ^ r;
        case 2:
          return (t & n) ^ (t & r) ^ (n & r);
        case 3:
          return t ^ n ^ r;
      }
    }
    function n(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function r(e) {
      let r = [1518500249, 1859775393, 2400959708, 3395469782],
        i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof e == `string`) {
        let t = unescape(encodeURIComponent(e));
        e = [];
        for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
      } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
      e.push(128);
      let a = e.length / 4 + 2,
        o = Math.ceil(a / 16),
        s = Array(o);
      for (let t = 0; t < o; ++t) {
        let n = new Uint32Array(16);
        for (let r = 0; r < 16; ++r)
          n[r] =
            (e[t * 64 + r * 4] << 24) |
            (e[t * 64 + r * 4 + 1] << 16) |
            (e[t * 64 + r * 4 + 2] << 8) |
            e[t * 64 + r * 4 + 3];
        s[t] = n;
      }
      ((s[o - 1][14] = ((e.length - 1) * 8) / 2 ** 32),
        (s[o - 1][14] = Math.floor(s[o - 1][14])),
        (s[o - 1][15] = ((e.length - 1) * 8) & 4294967295));
      for (let e = 0; e < o; ++e) {
        let a = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) a[t] = s[e][t];
        for (let e = 16; e < 80; ++e) a[e] = n(a[e - 3] ^ a[e - 8] ^ a[e - 14] ^ a[e - 16], 1);
        let o = i[0],
          c = i[1],
          l = i[2],
          u = i[3],
          d = i[4];
        for (let e = 0; e < 80; ++e) {
          let i = Math.floor(e / 20),
            s = (n(o, 5) + t(i, c, l, u) + d + r[i] + a[e]) >>> 0;
          ((d = u), (u = l), (l = n(c, 30) >>> 0), (c = o), (o = s));
        }
        ((i[0] = (i[0] + o) >>> 0),
          (i[1] = (i[1] + c) >>> 0),
          (i[2] = (i[2] + l) >>> 0),
          (i[3] = (i[3] + u) >>> 0),
          (i[4] = (i[4] + d) >>> 0));
      }
      return [
        (i[0] >> 24) & 255,
        (i[0] >> 16) & 255,
        (i[0] >> 8) & 255,
        i[0] & 255,
        (i[1] >> 24) & 255,
        (i[1] >> 16) & 255,
        (i[1] >> 8) & 255,
        i[1] & 255,
        (i[2] >> 24) & 255,
        (i[2] >> 16) & 255,
        (i[2] >> 8) & 255,
        i[2] & 255,
        (i[3] >> 24) & 255,
        (i[3] >> 16) & 255,
        (i[3] >> 8) & 255,
        i[3] & 255,
        (i[4] >> 24) & 255,
        (i[4] >> 16) & 255,
        (i[4] >> 8) & 255,
        i[4] & 255,
      ];
    }
    e.default = r;
  }),
  yt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(pt()),
      n = r(vt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v5`, 80, n.default);
  }),
  bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = `00000000-0000-0000-0000-000000000000`));
  }),
  xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(lt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      if (!(0, t.default)(e)) throw TypeError(`Invalid UUID`);
      return parseInt(e.slice(14, 15), 16);
    }
    e.default = r;
  }),
  St = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      Object.defineProperty(e, `NIL`, {
        enumerable: !0,
        get: function () {
          return a.default;
        },
      }),
      Object.defineProperty(e, `parse`, {
        enumerable: !0,
        get: function () {
          return l.default;
        },
      }),
      Object.defineProperty(e, `stringify`, {
        enumerable: !0,
        get: function () {
          return c.default;
        },
      }),
      Object.defineProperty(e, `v1`, {
        enumerable: !0,
        get: function () {
          return t.default;
        },
      }),
      Object.defineProperty(e, `v3`, {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      }),
      Object.defineProperty(e, `v4`, {
        enumerable: !0,
        get: function () {
          return r.default;
        },
      }),
      Object.defineProperty(e, `v5`, {
        enumerable: !0,
        get: function () {
          return i.default;
        },
      }),
      Object.defineProperty(e, `validate`, {
        enumerable: !0,
        get: function () {
          return s.default;
        },
      }),
      Object.defineProperty(e, `version`, {
        enumerable: !0,
        get: function () {
          return o.default;
        },
      }));
    var t = u(dt()),
      n = u(ht()),
      r = u(_t()),
      i = u(yt()),
      a = u(bt()),
      o = u(xt()),
      s = u(lt()),
      c = u(ut()),
      l = u(ft());
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }),
  Ct = i((t) => {
    (ot(),
      Object.defineProperty(t, `__esModule`, { value: !0 }),
      (t.createAdfRendererIframeProps = void 0));
    var n = St();
    t.createAdfRendererIframeProps = async (t, r) => {
      let i = await at(
          () => import(`./iframe-resizer-Bs5bfbS0.js`).then((t) => e(t.default)),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ),
        a = i.default || i,
        o = new URL(document.referrer).origin,
        s = `${o}/forge-apps/adf-renderer`,
        c = r || `forge-adf-renderer-iframe-${(0, n.v4)()}`;
      return (
        setTimeout(() => {
          ((document.documentElement.style.height = `auto`), (document.body.style.height = `auto`));
        }, 200),
        {
          id: c,
          src: s,
          onLoad: () => {
            var e;
            let n = document.getElementById(c),
              r = {
                type: `adf-document`,
                document: t.extension.macro?.body,
                timestamp: Date.now(),
                source: `forge-adf-renderer`,
                localId: t.localId,
                isEditing: t.extension?.isEditing ?? !1,
                contentId: t.extension?.content?.id,
              };
            (a.iframeResizer(
              {
                heightCalculationMethod: `taggedElement`,
                widthCalculationMethod: `bodyScroll`,
                initCallback: (e) => {
                  var t;
                  (t = e?.iFrameResizer) == null || t.resize();
                },
              },
              n || ``,
            ),
              (e = n?.contentWindow) == null || e.postMessage(r, o));
          },
        }
      );
    };
  }),
  wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.onClose = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)();
    e.onClose = async (e) => {
      try {
        if ((await r(`onClose`, e)) === !1)
          throw new n.BridgeAPIError("`onClose` call has failed.");
      } catch {
        throw new n.BridgeAPIError(
          "`onClose` failed because this resource's view is not closable.",
        );
      }
    };
  }),
  Tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.view = void 0));
    var t = Ie(),
      n = Le(),
      r = Re(),
      i = ze(),
      a = Be(),
      o = Ye(),
      s = Xe(),
      c = Ze(),
      l = tt(),
      u = Ct(),
      d = wt();
    e.view = {
      submit: t.submit,
      close: n.close,
      onClose: d.onClose,
      open: r.open,
      refresh: i.refresh,
      createHistory: a.createHistory,
      getContext: o.getContext,
      theme: c.theme,
      changeWindowTitle: s.changeWindowTitle,
      emitReadyEvent: l.emitReadyEvent,
      createAdfRendererIframeProps: u.createAdfRendererIframeProps,
    };
  }),
  Et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (De(), t(E)).__exportStar(Tt(), e));
  }),
  Dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.router = void 0));
    var t = (0, R().getCallBridge)();
    e.router = {
      getUrl: async (e) => {
        if (!e?.target) throw Error(`target is required for getUrl`);
        let n = await t(`getUrl`, e);
        if (!n) throw Error(`Failed to get URL`);
        try {
          return new URL(n);
        } catch (e) {
          throw Error(`Failed to parse URL: ${n} (${e})`);
        }
      },
      navigate: (e) => {
        if (typeof e == `string`) return t(`navigate`, { url: e, type: `same-tab` });
        if (!e?.target) throw Error(`target is required for navigation`);
        return t(`navigate`, { ...e, type: `same-tab` });
      },
      open: (e) => {
        if (typeof e == `string`) return t(`navigate`, { url: e, type: `new-tab` });
        if (!e?.target) throw Error(`target is required for navigation`);
        return t(`navigate`, { ...e, type: `new-tab` });
      },
      reload: async () => t(`reload`),
    };
  }),
  Ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (De(), t(E)).__exportStar(Dt(), e));
  }),
  kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Modal = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)(),
      i = () => {};
    e.Modal = class {
      constructor(e) {
        ((this.resource = e?.resource || null),
          (this.onClose = e?.onClose || i),
          (this.size = e?.size || `medium`),
          (this.context = e?.context || {}),
          (this.closeOnEscape = e?.closeOnEscape ?? !0),
          (this.closeOnOverlayClick = e?.closeOnOverlayClick ?? !0),
          (this.title = e?.title || ``),
          (this.icon = e?.icon || ``));
      }
      async open() {
        try {
          if (
            (await r(`openModal`, {
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
            throw new n.BridgeAPIError(`Unable to open modal.`);
        } catch {
          throw new n.BridgeAPIError(`Unable to open modal.`);
        }
      }
    };
  }),
  At = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (De(), t(E)).__exportStar(kt(), e));
  }),
  jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.productFetchApi = e.remoteFetchApi = void 0));
    var t = Qe(),
      n = async (e, n = !1) => {
        let r = {};
        for (let [i, a] of e.entries())
          if (n ? i.startsWith(`file`) : i === `file`) {
            let e = a.name,
              n = a.type;
            ((r[i] = await (0, t.blobToBase64)(a)), (r[`__${i}Name`] = e), (r[`__${i}Type`] = n));
          } else r[i] = a;
        return JSON.stringify(r);
      },
      r = (e) => {
        if (!e) return e;
        if (`signal` in e) {
          let { signal: t, ...n } = e;
          return (
            console.error(
              `Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.`,
            ),
            n
          );
        }
        return e;
      },
      i = async (e, t) => {
        let r = t?.body instanceof FormData,
          i = r ? await n(t?.body, e === `remote`) : t?.body,
          a = new Request(``, { body: i, method: t?.method, headers: t?.headers }),
          o = Object.fromEntries(a.headers.entries());
        return {
          body: a.method === `GET` ? null : await a.text(),
          headers: new Headers(o),
          isMultipartFormData: r,
        };
      };
    ((e.remoteFetchApi = (e) => {
      let n = async (n, a) => {
        let o = r(a),
          { body: s, headers: c, isMultipartFormData: l } = await i(`remote`, o),
          {
            body: u,
            headers: d,
            statusText: f,
            status: p,
            isAttachment: m,
          } = await e(`fetchRemote`, {
            remoteKey: n,
            fetchRequestInit: { ...o, body: s, headers: [...c.entries()] },
            isMultipartFormData: l,
          }),
          h = m ? (0, t.base64ToBlob)(u, d[`content-type`]) : u;
        return new Response(h || null, { headers: d, status: p, statusText: f });
      };
      return { requestRemote: (e, t) => n(e, t) };
    }),
      (e.productFetchApi = (e) => {
        let n = async (n, a, o) => {
          let s = r(o),
            { body: c, headers: l, isMultipartFormData: u } = await i(`product`, s);
          l.has(`X-Atlassian-Token`) || l.set(`X-Atlassian-Token`, `no-check`);
          let {
              body: d,
              headers: f,
              statusText: p,
              status: m,
              isAttachment: h,
            } = await e(`fetchProduct`, {
              product: n,
              restPath: a,
              fetchRequestInit: { ...s, body: c, headers: [...l.entries()] },
              isMultipartFormData: u,
            }),
            g = h ? (0, t.base64ToBlob)(d, f[`content-type`]) : d;
          return new Response(g || null, { headers: f, status: m, statusText: p });
        };
        return {
          requestConfluence: (e, t) => n(`confluence`, e, t),
          requestJira: (e, t) => n(`jira`, e, t),
          requestBitbucket: (e, t) => n(`bitbucket`, e, t),
        };
      }));
  }),
  Mt = i((e) => {
    var t;
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.requestRemote = e.requestBitbucket = e.requestJira = e.requestConfluence = void 0));
    var n = R(),
      r = jt();
    ((t = (0, r.productFetchApi)((0, n.getCallBridge)())),
      (e.requestConfluence = t.requestConfluence),
      (e.requestJira = t.requestJira),
      (e.requestBitbucket = t.requestBitbucket),
      (e.requestRemote = (0, r.remoteFetchApi)((0, n.getCallBridge)()).requestRemote));
  }),
  Nt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = R(),
      n = L(),
      r = (0, t.getCallBridge)();
    e.showFlag = (e) => {
      if (!e.id) throw new n.BridgeAPIError(`"id" must be defined in flag options`);
      let t = r(`showFlag`, { ...e, type: e.type ?? `info` });
      return { close: async () => (await t, r(`closeFlag`, { id: e.id })) };
    };
  }),
  Pt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = Nt();
    Object.defineProperty(e, `showFlag`, {
      enumerable: !0,
      get: function () {
        return t.showFlag;
      },
    });
  }),
  Ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (De(), t(E)).__exportStar(et(), e));
  }),
  It = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.realtime = void 0));
    var t = (0, R().getCallBridge)();
    e.realtime = {
      publish: (e, n, r) =>
        t(`publishRealtimeChannel`, { channelName: e, eventPayload: n, options: r }),
      subscribe: (e, n, r) =>
        t(`subscribeRealtimeChannel`, { channelName: e, onEvent: n, options: r }),
      publishGlobal: (e, n, r) =>
        t(`publishRealtimeChannel`, { channelName: e, eventPayload: n, options: r, isGlobal: !0 }),
      subscribeGlobal: (e, n, r) =>
        t(`subscribeRealtimeChannel`, { channelName: e, onEvent: n, options: r, isGlobal: !0 }),
    };
  }),
  Lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Bitbucket = e.Confluence = e.Jira = void 0),
      (function (e) {
        ((e.Board = `board`), (e.Issue = `issue`), (e.Project = `project`));
      })((e.Jira ||= {})),
      (function (e) {
        ((e.Content = `content`), (e.Space = `space`));
      })((e.Confluence ||= {})),
      (function (e) {
        ((e.Repository = `repository`), (e.PullRequest = `pullRequest`));
      })((e.Bitbucket ||= {})));
  }),
  Rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
    var t = It();
    Object.defineProperty(e, `realtime`, {
      enumerable: !0,
      get: function () {
        return t.realtime;
      },
    });
    var n = Lt();
    (Object.defineProperty(e, `Jira`, {
      enumerable: !0,
      get: function () {
        return n.Jira;
      },
    }),
      Object.defineProperty(e, `Confluence`, {
        enumerable: !0,
        get: function () {
          return n.Confluence;
        },
      }),
      Object.defineProperty(e, `Bitbucket`, {
        enumerable: !0,
        get: function () {
          return n.Bitbucket;
        },
      }));
  }),
  zt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
    var t = R(),
      n = L(),
      r = 30,
      i = (0, t.getCallBridge)();
    e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = `Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/`;
    var a = (e) => {
      switch (e.type) {
        case `forge`:
          return { agentName: e.agentName, agentKey: e.agentKey, prompt: e.prompt };
        case `atlassian`:
          return { agentName: e.agentName, prompt: e.prompt };
        default:
          return { prompt: e.prompt };
      }
    };
    e.open = async (t) => {
      if (t.type === `forge`) {
        if (t.agentName.length > r) throw Error(`rovo agent name too long`);
        if (t.agentKey.length > r) throw Error(`rovo agent key too long`);
      }
      if ((await i(`openRovo`, a(t))) === !1)
        throw new n.BridgeAPIError(e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
    };
  }),
  Bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.isEnabled = void 0));
    var t = (0, R().getCallBridge)();
    e.isEnabled = () => t(`isRovoEnabled`);
  }),
  Vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.rovo = void 0));
    var t = zt(),
      n = Bt();
    e.rovo = { open: t.open, isEnabled: n.isEnabled };
  }),
  Ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (De(), t(E)).__exportStar(Vt(), e));
  }),
  Ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createTranslationFunction = e.getTranslations = e.resetTranslationsCache = void 0));
    var t = Je(),
      n = Et(),
      r = new t.TranslationsGetter({
        getI18nInfoConfig: async () => {
          let e = await fetch(`./${t.I18N_BUNDLE_FOLDER_NAME}/${t.I18N_INFO_FILE_NAME}`);
          if (!e.ok) throw Error(`Failed to get i18n info config: ` + e.statusText);
          return (await e.json()).config;
        },
        getTranslationResource: async (e) => {
          let n = await fetch(`./${t.I18N_BUNDLE_FOLDER_NAME}/${e}.json`);
          if (!n.ok) throw Error(`Failed to get translation resource for locale: ${e}`);
          return n.json();
        },
      });
    ((e.resetTranslationsCache = () => {
      r.reset();
    }),
      (e.getTranslations = async (e = null, t = { fallback: !0 }) => {
        let i = e;
        return ((i ||= (await n.view.getContext()).locale), await r.getTranslations(i, t));
      }),
      (e.createTranslationFunction = async (e = null) => {
        let i = e;
        i ||= (await n.view.getContext()).locale;
        let a = new t.Translator(i, r);
        return (await a.init(), (e, t) => a.translate(e) ?? t ?? e);
      }));
  }),
  Wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.permissions = void 0));
    var t = (0, R().getCallBridge)();
    e.permissions = {
      egress: {
        get: async (e) => t(`__permission__egressGet`, e),
        set: async (e) => t(`__permission__egressSet`, e),
        deleteDomain: async (e) => t(`__permission__egressDeleteDomain`, e),
        deleteGroup: async (e) => t(`__permission__egressDeleteGroup`, e),
      },
      remote: {
        get: async (e) => t(`__permission__remoteGet`, e),
        set: async (e) => t(`__permission__remoteSet`, e),
      },
    };
  }),
  Gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.parseUrl = void 0));
    function t(e) {
      let t = e.match(/^(.*?:)/)?.[0] ?? `https:`,
        n = e.replace(t, ``).replace(/^\/*/, ``).replace(/^\\*/, ``).split(`?`)[0].split(`#`)[0],
        r = n.split(`/`)[0];
      return { protocol: t, hostname: r, pathname: n.slice(r.length) || `/` };
    }
    e.parseUrl = t;
  }),
  Kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getEgressesBasedOnToggles =
        e.sortAndGroupEgressPermissionsByDomain =
        e.EgressCategory =
        e.EgressType =
        e.globToRegex =
          void 0));
    var t = Gt();
    function n(e) {
      let t = e.replace(/[.+?^${}()|[\]\\]/g, `\\$&`).replace(/\*/g, `.*`);
      return RegExp(`^${t}$`);
    }
    ((e.globToRegex = n),
      (e.sortAndGroupEgressPermissionsByDomain = (e) => {
        if (e?.length === 0) return [];
        let r = /^(.*?:\/\/)/,
          i = new Set(),
          a = [];
        return (
          e.forEach((e) => {
            let o = r.test(e) ? e : `https://${e}`,
              s = (0, t.parseUrl)(o);
            s.hostname.startsWith(`*`)
              ? (i.add(s.hostname.substring(2)), a.push(n(s.hostname)))
              : i.add(s.hostname);
          }),
          [...i].sort().reduce((e, t) => (a.some((e) => e.test(t)) || e.push(t), e), [])
        );
      }),
      (function (e) {
        ((e.FetchBackendSide = `FETCH_BACKEND_SIDE`),
          (e.FetchClientSide = `FETCH_CLIENT_SIDE`),
          (e.Fonts = `FONTS`),
          (e.Frames = `FRAMES`),
          (e.Images = `IMAGES`),
          (e.Media = `MEDIA`),
          (e.Scripts = `SCRIPTS`),
          (e.Styles = `STYLES`));
      })((e.EgressType ||= {})));
    var r;
    ((function (e) {
      e.ANALYTICS = `ANALYTICS`;
    })((r = e.EgressCategory ||= {})),
      (e.getEgressesBasedOnToggles = (e) => {
        let t = e.egress.filter((t) =>
            t.category?.toUpperCase() === r.ANALYTICS
              ? e.installationConfig
                ? e.installationConfig.find((e) => e.key.toUpperCase() === `ALLOW_EGRESS_ANALYTICS`)
                    ?.value !== !1
                : e.overrides.ALLOW_EGRESS_ANALYTICS !== !1
              : !0,
          ),
          n = new Map();
        for (let e of t)
          (n.has(e.type) || n.set(e.type, e.addresses),
            n.set(e.type, [...n.get(e.type), ...e.addresses]));
        return [...n.entries()].map(([e, t]) => ({ type: e, addresses: [...new Set(t)] }));
      }));
  }),
  qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EgressFilteringService = void 0));
    var t = Gt(),
      n = Kt();
    e.EgressFilteringService = class {
      constructor(e) {
        ((this.URLs = e.filter((e) => !e.startsWith(`*`)).map((e) => this.parseUrl(e))),
          (this.wildcardDomains = e
            .filter((e) => e !== `*`)
            .map((e) => this.parseUrl(e))
            .filter((e) => decodeURIComponent(e.hostname).startsWith(`*`))
            .map((e) => ({ ...e, regex: (0, n.globToRegex)(decodeURIComponent(e.hostname)) }))),
          (this.allowsEverything = e.includes(`*`)));
      }
      parseUrl(e) {
        return (0, t.parseUrl)(e);
      }
      containsWildCardEgress() {
        return this.allowsEverything;
      }
      isValidUrl(e) {
        if (this.allowsEverything) return !0;
        let t = this.parseUrl(e);
        return (
          this.allowedDomainExact(t, this.URLs) ||
          this.allowedDomainPattern(t, this.wildcardDomains)
        );
      }
      isValidUrlCSP(e) {
        if (this.allowsEverything) return !0;
        let t = this.parseUrl(e);
        return (
          this.allowedDomainExactAndPath(t, this.URLs) ||
          this.allowedDomainPatternAndPath(t, this.wildcardDomains)
        );
      }
      allowedDomainExact(e, t) {
        return t.filter((t) => t.protocol === e.protocol).some((t) => t.hostname === e.hostname);
      }
      allowedDomainExactAndPath(e, t) {
        return t
          .filter((t) => this.protocolMatchesCSP(t.protocol, e.protocol))
          .filter((t) => t.hostname === e.hostname)
          .some((t) => this.pathMatches(t.pathname, e.pathname));
      }
      allowedDomainPattern(e, t) {
        return t.filter((t) => t.protocol === e.protocol).some((t) => t.regex.test(e.hostname));
      }
      allowedDomainPatternAndPath(e, t) {
        return t
          .filter((t) => this.protocolMatchesCSP(t.protocol, e.protocol))
          .filter((t) => t.regex.test(e.hostname))
          .some((t) => this.pathMatches(t.pathname, e.pathname));
      }
      protocolMatchesCSP(e, t) {
        return e === t || (e === `http:` && t === `https:`) || (e === `ws:` && t === `wss:`);
      }
      pathMatches(e, t) {
        return e === `/` ? !0 : e.endsWith(`/`) ? t.startsWith(e) : t === e;
      }
    };
  }),
  Jt = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (De(), t(E));
    (n.__exportStar(qt(), e), n.__exportStar(Gt(), e), n.__exportStar(Kt(), e));
  }),
  Yt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (De(), t(E)).__exportStar(Jt(), e));
  }),
  Xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkPermissions = e.createPermissionUtils = void 0));
    var t = Yt(),
      n = Et();
    function r(e) {
      return typeof e == `string` ? e : `address` in e && e.address ? e.address : e.remote || ``;
    }
    var i = [`fonts`, `styles`, `frames`, `images`, `media`, `scripts`],
      a = [`backend`, `client`];
    function o(e) {
      if (!e) return null;
      let { scopes: n, external: i = {} } = e,
        a = Array.isArray(n) ? n : Object.keys(n || {});
      return {
        hasScope: (e) => a.includes(e),
        canFetchFrom: (e, n) => {
          let a = i.fetch?.[e];
          if (!a?.length) return !1;
          let o = a.map(r).filter((e) => e.length > 0);
          if (o.length === 0) return !1;
          let s = new t.EgressFilteringService(o);
          return e === `client` ? s.isValidUrlCSP(n) : s.isValidUrl(n);
        },
        canLoadResource: (e, n) => {
          let a = i[e];
          if (!a?.length) return !1;
          let o = a.map(r).filter((e) => e.length > 0);
          return o.length === 0 ? !1 : new t.EgressFilteringService(o).isValidUrlCSP(n);
        },
        getScopes: () => a,
        getExternalPermissions: () => i,
        hasAnyPermissions: () => a.length > 0 || Object.keys(i).length > 0,
      };
    }
    e.createPermissionUtils = o;
    function s(e, t) {
      if (!e?.length) return;
      let n = e.filter((e) => !t.hasScope(e));
      return n.length > 0 ? n : void 0;
    }
    function c(e, t) {
      if (!e?.fetch) return;
      let n = {};
      return (
        a.forEach((r) => {
          let i = e.fetch?.[r];
          if (i?.length) {
            let e = i.filter((e) => !t.canFetchFrom(r, e));
            e.length > 0 && (n[r] = e);
          }
        }),
        Object.keys(n).length > 0 ? n : void 0
      );
    }
    function l(e, t) {
      let n = {};
      return (
        i.forEach((r) => {
          let i = e?.[r];
          if (i?.length) {
            let e = i.filter((e) => !t.canLoadResource(r, e));
            e.length > 0 && (n[r] = e);
          }
        }),
        Object.keys(n).length > 0 ? n : void 0
      );
    }
    function u(e, t) {
      if (!e) return;
      let n = c(e, t),
        r = l(e, t);
      if (!n && !r) return;
      let i = {};
      return (n && (i.fetch = n), r && Object.assign(i, r), i);
    }
    function d(e, t) {
      if (e !== void 0 && (typeof e != `object` || !e || Array.isArray(e)))
        throw TypeError(
          `${t} should be an object, not ${Array.isArray(e) ? `an array` : `a ${typeof e}`}`,
        );
    }
    function f(e, t) {
      if (e !== void 0 && !Array.isArray(e))
        throw TypeError(`${t} should be an array, not a ${typeof e}`);
    }
    function p(e) {
      f(e.scopes, `scopes`);
      let t = e.external;
      if (t !== void 0) {
        if ((d(t, `external`), t.fetch !== void 0)) {
          d(t.fetch, `external.fetch`);
          for (let e of a) f(t.fetch[e], `external.fetch.${e}`);
        }
        for (let e of i) f(t[e], `external.${e}`);
      }
    }
    async function m(e, t) {
      if (!e) return { granted: !1, missing: null };
      if ((p(e), !e.scopes?.length && !e.external)) return { granted: !0, missing: null };
      let r = t;
      r ||= (await n.view.getContext()).permissions;
      let i = o(r);
      if (!i) return { granted: !1, missing: null };
      let a = {},
        c = !0,
        l = s(e.scopes, i);
      l && ((a.scopes = l), (c = !1));
      let d = u(e.external, i);
      return (d && ((a.external = d), (c = !1)), { granted: c, missing: c ? null : a });
    }
    e.checkPermissions = m;
  }),
  Zt = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (De(), t(E));
    (n.__exportStar(Wt(), e), n.__exportStar(Xt(), e));
  }),
  Qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = `Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.`));
  }),
  $t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkRestrictedEnvironment = void 0));
    var t = L(),
      n = Et(),
      r = Qt();
    e.checkRestrictedEnvironment = async () => {
      let { environmentType: e } = await n.view.getContext();
      if (e === `PRODUCTION`)
        throw new t.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  }),
  en = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.upload = e.createUploadPromises = void 0));
    var t = je(),
      n = L(),
      r = $t(),
      i = (0, R().getCallBridge)(),
      a = (e, t) => {
        let n = atob(e),
          r = Array(n.length);
        for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
        let i = new Uint8Array(r);
        return new Blob([i], { type: t || `application/octet-stream` });
      },
      o = async (e) => {
        let t = e.size,
          n = await e.arrayBuffer(),
          r = await crypto.subtle.digest(`SHA-256`, n),
          i = new Uint8Array(r);
        return { length: t, checksum: btoa(String.fromCharCode(...i)), checksumType: `SHA256` };
      };
    ((e.createUploadPromises = async ({ functionKey: e, objects: r }) => {
      if (!e || e.length === 0)
        throw new n.BridgeAPIError(`functionKey is required to filter and generate presigned URLs`);
      if (!Array.isArray(r) || r.length === 0)
        throw new n.BridgeAPIError(`objects array is required and must not be empty`);
      let i = r.map((e, t) => {
          if (e instanceof Blob) return e;
          if (!(e && typeof e == `object` && `data` in e && typeof e.data == `string`))
            throw new n.BridgeAPIError(
              `Invalid object type at index ${t}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`,
            );
          try {
            return a(e.data, e.mimeType);
          } catch {
            throw new n.BridgeAPIError(
              `Invalid base64 data at index ${t}. The data string must be valid base64 encoded.`,
            );
          }
        }),
        s = await Promise.all(i.map((e) => o(e))),
        c = await (0, t.invoke)(e, { allObjectMetadata: s });
      if (!c || typeof c != `object`)
        throw new n.BridgeAPIError(`Invalid response from functionKey`);
      let l = new Map(),
        u = new Map();
      return (
        i.forEach((e, t) => {
          let n = s[t];
          (l.set(n.checksum, e), u.set(n.checksum, t));
        }),
        Object.entries(c).map(([e, t]) => {
          let { key: n, checksum: r } = t,
            i = l.get(r),
            a = u.get(r);
          return a === void 0
            ? {
                promise: Promise.resolve({
                  success: !1,
                  key: n,
                  error: `Index not found for checksum ${r}`,
                }),
                index: -1,
              }
            : i
              ? {
                  promise: (async () => {
                    try {
                      let t = await fetch(e, {
                        method: `PUT`,
                        body: i,
                        headers: {
                          "Content-Type": i.type || `application/octet-stream`,
                          "Content-Length": i.size.toString(),
                        },
                      });
                      return {
                        success: t.ok,
                        key: n,
                        status: t.status,
                        error: t.ok ? void 0 : `Upload failed with status ${t.status}`,
                      };
                    } catch (e) {
                      return {
                        success: !1,
                        key: n,
                        status: 503,
                        error: e instanceof Error ? e.message : `Upload failed`,
                      };
                    }
                  })(),
                  index: a,
                  objectType: i.type,
                  objectSize: i.size,
                }
              : {
                  promise: Promise.resolve({
                    success: !1,
                    key: n,
                    error: `Blob not found for checksum ${r}`,
                  }),
                  index: a,
                };
        })
      );
    }),
      (e.upload = async ({ functionKey: t, objects: n }) => {
        (await (0, r.checkRestrictedEnvironment)(),
          i(`trackObjectStoreAction`, { action: `upload` }));
        let a = await (0, e.createUploadPromises)({ functionKey: t, objects: n });
        return await Promise.all(a.map((e) => e.promise));
      }));
  }),
  tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.deleteObjects = void 0));
    var t = je(),
      n = L(),
      r = $t(),
      i = (0, R().getCallBridge)();
    e.deleteObjects = async ({ functionKey: e, keys: a }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i(`trackObjectStoreAction`, { action: `delete` }),
        !e || e.length === 0)
      )
        throw new n.BridgeAPIError(`functionKey is required to delete objects`);
      if (!Array.isArray(a) || a.length === 0)
        throw new n.BridgeAPIError(`keys array is required and must not be empty`);
      await Promise.all(
        a.map(async (n) => {
          await (0, t.invoke)(e, { key: n });
        }),
      );
    };
  }),
  nn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.download = void 0));
    var t = je(),
      n = L(),
      r = $t(),
      i = (0, R().getCallBridge)();
    e.download = async ({ functionKey: e, keys: a }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i(`trackObjectStoreAction`, { action: `download` }),
        !e || e.length === 0)
      )
        throw new n.BridgeAPIError(`functionKey is required to filter and generate download URLs`);
      if (!Array.isArray(a) || a.length === 0)
        throw new n.BridgeAPIError(`keys array is required and must not be empty`);
      let o = await (0, t.invoke)(e, { keys: a });
      if (!o || typeof o != `object`)
        throw new n.BridgeAPIError(`Invalid response from functionKey`);
      let s = Object.entries(o).map(async ([e, t]) => {
        try {
          let n = await fetch(e, { method: `GET` });
          return n.ok
            ? { success: !0, key: t, blob: await n.blob(), status: n.status }
            : {
                success: !1,
                key: t,
                status: n.status,
                error: `Download failed with status ${n.status}`,
              };
        } catch (e) {
          return {
            success: !1,
            key: t,
            status: 503,
            error: e instanceof Error ? e.message : `Download failed`,
          };
        }
      });
      return await Promise.all(s);
    };
  }),
  rn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getMetadata = void 0));
    var t = je(),
      n = L(),
      r = $t(),
      i = (0, R().getCallBridge)();
    e.getMetadata = async ({ functionKey: e, keys: a }) => {
      if (
        (await (0, r.checkRestrictedEnvironment)(),
        i(`trackObjectStoreAction`, { action: `getMetadata` }),
        !e || e.length === 0)
      )
        throw new n.BridgeAPIError(
          `functionKey is required to filter and generate object metadata`,
        );
      if (!Array.isArray(a) || a.length === 0)
        throw new n.BridgeAPIError(`keys array is required and must not be empty`);
      return await Promise.all(
        a.map(async (n) => {
          let r = await (0, t.invoke)(e, { key: n });
          return !r || typeof r != `object`
            ? { key: n, error: `Invalid response from functionKey` }
            : r;
        }),
      );
    };
  }),
  an = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createUploadPromises = e.objectStore = void 0));
    var t = en();
    Object.defineProperty(e, `createUploadPromises`, {
      enumerable: !0,
      get: function () {
        return t.createUploadPromises;
      },
    });
    var n = tn(),
      r = nn(),
      i = rn();
    e.objectStore = {
      upload: t.upload,
      download: r.download,
      getMetadata: i.getMetadata,
      delete: n.deleteObjects,
    };
  }),
  on = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (De(), t(E));
    (n.__exportStar(an(), e), n.__exportStar(Qt(), e));
  }),
  sn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Evaluator = void 0),
      (e.Evaluator = class {
        constructor(e) {
          this.results = e;
        }
        checkFlag(e, t) {
          if (!this.results || !this.results.feature_flags) return t;
          let n = this.results.feature_flags,
            r = ``;
          try {
            r = this.getHashedValue(e);
          } catch (e) {
            return (console.error(`Unexpected error occurred while evaluating flag `, e), t);
          }
          if (!r) return t;
          let i = n[r];
          return i ? (i.disabled ? !1 : i.value) : t;
        }
        shutDown() {
          this.results = void 0;
        }
        getHashedValue(e) {
          if (typeof e != `string`) return ``;
          let t = e.trim();
          if (t.length === 0) return ``;
          let n = 5381;
          for (let e = 0; e < t.length; e += 1) {
            let r = t.charCodeAt(e);
            ((n = (n << 5) + n + r), (n |= 0));
          }
          return (n >>> 0).toString();
        }
      }));
  }),
  cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FeatureFlagEventType = void 0),
      (function (e) {
        e.CHECKFLAG = `checkFlag`;
      })((e.FeatureFlagEventType ||= {})));
  }),
  ln = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.trackFeatureFlagEvent = void 0));
    var t = R(),
      n = L(),
      r = ke(),
      i = cn(),
      a = 500,
      o = 1e3 * 25,
      s = (0, t.getCallBridge)(),
      c = (e) => {
        if (!e || !e.type || !e.properties)
          throw new n.BridgeAPIError(
            `Missing required parameters. Parameter type, and properties are required in the payload.`,
          );
        if (!(e.type.toUpperCase() in i.FeatureFlagEventType))
          throw new n.BridgeAPIError(`Event type is not supported`);
        if (Object.values(e).some((e) => typeof e == `function`))
          throw new n.BridgeAPIError(`Passing functions as part of the payload is not supported!`);
      };
    e.trackFeatureFlagEvent = (0, r.withRateLimiter)(
      (e) => (c(e), s(`trackFeatureFlagEvent`, e)),
      a,
      o,
      `Feature flags calls are rate limited at ${a}req/${o / 1e3}s`,
    );
  }),
  un = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.initFeatureFlags = void 0));
    var t = R(),
      n = L(),
      r = ke(),
      i = 500,
      a = 1e3 * 25,
      o = (0, t.getCallBridge)(),
      s = (e) => {
        if (!e || !e.user || !e.config)
          throw new n.BridgeAPIError(
            `Missing required parameters. Parameter user is required in the payload.`,
          );
        if (
          !e.config.environment ||
          ![`development`, `staging`, `production`].includes(e.config.environment)
        )
          throw new n.BridgeAPIError(
            `Invalid environment. Valid environments are: development, staging, production`,
          );
        if (Object.values(e).some((e) => typeof e == `function`))
          throw new n.BridgeAPIError(`Passing functions as part of the payload is not supported!`);
      };
    e.initFeatureFlags = (0, r.withRateLimiter)(
      (e) => (s(e), o(`initFeatureFlags`, { user: e.user, config: e.config })),
      i,
      a,
      `Feature flags initialisation calls are rate limited at ${i}req/${a / 1e3}s`,
    );
  }),
  dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = sn(),
      n = ln(),
      r = un(),
      i = cn();
    e.FeatureFlags = class {
      constructor() {
        ((this.initialized = !1), (this.eventProps = {}));
      }
      async initialize(e, n = { environment: `development` }) {
        if (this.isInitialized()) return;
        (n?.environment || (n.environment = `development`),
          (this.eventProps.environment = n.environment));
        let i = await (0, r.initFeatureFlags)({ user: e, config: n });
        ((this.initialized = !0), (this.evaluator = new t.Evaluator(i)));
      }
      checkFlag(e, t = !1) {
        if (!this.isInitialized() || !this.evaluator)
          throw (
            this.sendCheckFlagEvent(e, !1),
            Error(`FeatureFlags not initialized. Call initialize() first.`)
          );
        return (this.sendCheckFlagEvent(e, !0), this.evaluator.checkFlag(e, t));
      }
      shutdown() {
        this.isInitialized() && ((this.initialized = !1), this.evaluator.shutDown());
      }
      isInitialized() {
        return this.initialized;
      }
      sendCheckFlagEvent(e, t) {
        let r = {
          type: i.FeatureFlagEventType.CHECKFLAG,
          properties: {
            ...this.eventProps,
            environment: this.eventProps.environment || `development`,
            name: e,
            success: t,
          },
        };
        (0, n.trackFeatureFlagEvent)(r);
      }
    };
  }),
  fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = dn();
    Object.defineProperty(e, `FeatureFlags`, {
      enumerable: !0,
      get: function () {
        return t.FeatureFlags;
      },
    });
  }),
  pn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.i18n = e.NavigationTarget = void 0));
    var n = (De(), t(E)),
      r = Oe();
    (Object.defineProperty(e, `NavigationTarget`, {
      enumerable: !0,
      get: function () {
        return r.NavigationTarget;
      },
    }),
      n.__exportStar(je(), e),
      n.__exportStar(Fe(), e),
      n.__exportStar(Et(), e),
      n.__exportStar(Ot(), e),
      n.__exportStar(At(), e),
      n.__exportStar(Mt(), e),
      n.__exportStar(Pt(), e),
      n.__exportStar(Ft(), e),
      n.__exportStar(Rt(), e),
      n.__exportStar(Ht(), e),
      (e.i18n = n.__importStar(Ut())),
      n.__exportStar(Zt(), e),
      n.__exportStar(on(), e),
      n.__exportStar(fn(), e));
  });
function z() {
  return (
    (z = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    z.apply(null, arguments)
  );
}
function mn() {}
var hn = !1;
function gn(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function _n(e) {
  var t = document.createElement(`style`);
  return (
    t.setAttribute(`data-emotion`, e.key),
    e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
    t.appendChild(document.createTextNode(``)),
    t.setAttribute(`data-s`, ``),
    t
  );
}
var vn = (function () {
    function e(e) {
      var t = this;
      ((this._insertTag = function (e) {
        var n =
          t.tags.length === 0
            ? t.insertionPoint
              ? t.insertionPoint.nextSibling
              : t.prepend
                ? t.container.firstChild
                : t.before
            : t.tags[t.tags.length - 1].nextSibling;
        (t.container.insertBefore(e, n), t.tags.push(e));
      }),
        (this.isSpeedy = e.speedy === void 0 ? !hn : e.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = e.nonce),
        (this.key = e.key),
        (this.container = e.container),
        (this.prepend = e.prepend),
        (this.insertionPoint = e.insertionPoint),
        (this.before = null));
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (e) {
        e.forEach(this._insertTag);
      }),
      (t.insert = function (e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(_n(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = gn(t);
          try {
            n.insertRule(e, n.cssRules.length);
          } catch {}
        } else t.appendChild(document.createTextNode(e));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (e) {
          return e.parentNode?.removeChild(e);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  yn = `-ms-`,
  bn = `-moz-`,
  B = `-webkit-`,
  xn = `comm`,
  Sn = `rule`,
  Cn = `decl`,
  wn = `@import`,
  Tn = `@keyframes`,
  En = `@layer`,
  Dn = Math.abs,
  On = String.fromCharCode,
  kn = Object.assign;
function An(e, t) {
  return Pn(e, 0) ^ 45
    ? (((((((t << 2) ^ Pn(e, 0)) << 2) ^ Pn(e, 1)) << 2) ^ Pn(e, 2)) << 2) ^ Pn(e, 3)
    : 0;
}
function jn(e) {
  return e.trim();
}
function Mn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function V(e, t, n) {
  return e.replace(t, n);
}
function Nn(e, t) {
  return e.indexOf(t);
}
function Pn(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fn(e, t, n) {
  return e.slice(t, n);
}
function In(e) {
  return e.length;
}
function Ln(e) {
  return e.length;
}
function Rn(e, t) {
  return (t.push(e), e);
}
function zn(e, t) {
  return e.map(t).join(``);
}
var Bn = 1,
  Vn = 1,
  Hn = 0,
  Un = 0,
  H = 0,
  Wn = ``;
function Gn(e, t, n, r, i, a, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: Bn,
    column: Vn,
    length: o,
    return: ``,
  };
}
function Kn(e, t) {
  return kn(Gn(``, null, null, ``, null, null, 0), e, { length: -e.length }, t);
}
function qn() {
  return H;
}
function Jn() {
  return ((H = Un > 0 ? Pn(Wn, --Un) : 0), Vn--, H === 10 && ((Vn = 1), Bn--), H);
}
function Yn() {
  return ((H = Un < Hn ? Pn(Wn, Un++) : 0), Vn++, H === 10 && ((Vn = 1), Bn++), H);
}
function Xn() {
  return Pn(Wn, Un);
}
function Zn() {
  return Un;
}
function Qn(e, t) {
  return Fn(Wn, e, t);
}
function $n(e) {
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
function er(e) {
  return ((Bn = Vn = 1), (Hn = In((Wn = e))), (Un = 0), []);
}
function tr(e) {
  return ((Wn = ``), e);
}
function nr(e) {
  return jn(Qn(Un - 1, ar(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rr(e) {
  for (; (H = Xn()) && H < 33; ) Yn();
  return $n(e) > 2 || $n(H) > 3 ? `` : ` `;
}
function ir(e, t) {
  for (; --t && Yn() && !(H < 48 || H > 102 || (H > 57 && H < 65) || (H > 70 && H < 97)); );
  return Qn(e, Zn() + (t < 6 && Xn() == 32 && Yn() == 32));
}
function ar(e) {
  for (; Yn(); )
    switch (H) {
      case e:
        return Un;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ar(H);
        break;
      case 40:
        e === 41 && ar(e);
        break;
      case 92:
        Yn();
        break;
    }
  return Un;
}
function or(e, t) {
  for (; Yn() && e + H !== 57 && !(e + H === 84 && Xn() === 47); );
  return `/*` + Qn(t, Un - 1) + `*` + On(e === 47 ? e : Yn());
}
function sr(e) {
  for (; !$n(Xn()); ) Yn();
  return Qn(e, Un);
}
function cr(e) {
  return tr(lr(``, null, null, null, [``], (e = er(e)), 0, [0], e));
}
function lr(e, t, n, r, i, a, o, s, c) {
  for (
    var l = 0,
      u = 0,
      d = o,
      f = 0,
      p = 0,
      m = 0,
      h = 1,
      g = 1,
      _ = 1,
      v = 0,
      y = ``,
      b = i,
      x = a,
      S = r,
      C = y;
    g;
  )
    switch (((m = v), (v = Yn()))) {
      case 40:
        if (m != 108 && Pn(C, d - 1) == 58) {
          Nn((C += V(nr(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += nr(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += rr(m);
        break;
      case 92:
        C += ir(Zn() - 1, 7);
        continue;
      case 47:
        switch (Xn()) {
          case 42:
          case 47:
            Rn(dr(or(Yn(), Zn()), t, n), c);
            break;
          default:
            C += `/`;
        }
        break;
      case 123 * h:
        s[l++] = In(C) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (_ == -1 && (C = V(C, /\f/g, ``)),
              p > 0 &&
                In(C) - d &&
                Rn(p > 32 ? fr(C + `;`, r, n, d - 1) : fr(V(C, ` `, ``) + `;`, r, n, d - 2), c));
            break;
          case 59:
            C += `;`;
          default:
            if ((Rn((S = ur(C, t, n, l, u, i, s, y, (b = []), (x = []), d)), a), v === 123))
              if (u === 0) lr(C, t, S, S, b, a, d, s, x);
              else
                switch (f === 99 && Pn(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lr(
                      e,
                      S,
                      S,
                      r && Rn(ur(e, S, S, 0, 0, i, s, y, i, (b = []), d), x),
                      i,
                      x,
                      d,
                      s,
                      r ? b : x,
                    );
                    break;
                  default:
                    lr(C, S, S, S, [``], x, 0, s, x);
                }
        }
        ((l = u = p = 0), (h = _ = 1), (y = C = ``), (d = o));
        break;
      case 58:
        ((d = 1 + In(C)), (p = m));
      default:
        if (h < 1) {
          if (v == 123) --h;
          else if (v == 125 && h++ == 0 && Jn() == 125) continue;
        }
        switch (((C += On(v)), v * h)) {
          case 38:
            _ = u > 0 ? 1 : ((C += `\f`), -1);
            break;
          case 44:
            ((s[l++] = (In(C) - 1) * _), (_ = 1));
            break;
          case 64:
            (Xn() === 45 && (C += nr(Yn())), (f = Xn()), (u = d = In((y = C += sr(Zn())))), v++);
            break;
          case 45:
            m === 45 && In(C) == 2 && (h = 0);
        }
    }
  return a;
}
function ur(e, t, n, r, i, a, o, s, c, l, u) {
  for (var d = i - 1, f = i === 0 ? a : [``], p = Ln(f), m = 0, h = 0, g = 0; m < r; ++m)
    for (var _ = 0, v = Fn(e, d + 1, (d = Dn((h = o[m])))), y = e; _ < p; ++_)
      (y = jn(h > 0 ? f[_] + ` ` + v : V(v, /&\f/g, f[_]))) && (c[g++] = y);
  return Gn(e, t, n, i === 0 ? Sn : s, c, l, u);
}
function dr(e, t, n) {
  return Gn(e, t, n, xn, On(qn()), Fn(e, 2, -2), 0);
}
function fr(e, t, n, r) {
  return Gn(e, t, n, Cn, Fn(e, 0, r), Fn(e, r + 1, -1), r);
}
function pr(e, t) {
  for (var n = ``, r = Ln(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ``;
  return n;
}
function mr(e, t, n, r) {
  switch (e.type) {
    case En:
      if (e.children.length) break;
    case wn:
    case Cn:
      return (e.return = e.return || e.value);
    case xn:
      return ``;
    case Tn:
      return (e.return = e.value + `{` + pr(e.children, r) + `}`);
    case Sn:
      e.value = e.props.join(`,`);
  }
  return In((n = pr(e.children, r))) ? (e.return = e.value + `{` + n + `}`) : ``;
}
function hr(e) {
  var t = Ln(e);
  return function (n, r, i, a) {
    for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
    return o;
  };
}
function gr(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function _r(e) {
  var t = Object.create(null);
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n]);
  };
}
var vr = function (e, t, n) {
    for (var r = 0, i = 0; (r = i), (i = Xn()), r === 38 && i === 12 && (t[n] = 1), !$n(i); ) Yn();
    return Qn(e, Un);
  },
  yr = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch ($n(r)) {
        case 0:
          (r === 38 && Xn() === 12 && (t[n] = 1), (e[n] += vr(Un - 1, t, n)));
          break;
        case 2:
          e[n] += nr(r);
          break;
        case 4:
          if (r === 44) {
            ((e[++n] = Xn() === 58 ? `&\f` : ``), (t[n] = e[n].length));
            break;
          }
        default:
          e[n] += On(r);
      }
    while ((r = Yn()));
    return e;
  },
  br = function (e, t) {
    return tr(yr(er(e), t));
  },
  xr = new WeakMap(),
  Sr = function (e) {
    if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
      for (
        var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
        n.type !== `rule`;
      )
        if (((n = n.parent), !n)) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !xr.get(n)) && !r) {
        xr.set(e, !0);
        for (var i = [], a = br(t, i), o = n.props, s = 0, c = 0; s < a.length; s++)
          for (var l = 0; l < o.length; l++, c++)
            e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + ` ` + a[s];
      }
    }
  },
  Cr = function (e) {
    if (e.type === `decl`) {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ``), (e.value = ``));
    }
  };
function wr(e, t) {
  switch (An(e, t)) {
    case 5103:
      return B + `print-` + e + e;
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
      return B + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + bn + e + yn + e + e;
    case 6828:
    case 4268:
      return B + e + yn + e + e;
    case 6165:
      return B + e + yn + `flex-` + e + e;
    case 5187:
      return B + e + V(e, /(\w+).+(:[^]+)/, B + `box-$1$2` + yn + `flex-$1$2`) + e;
    case 5443:
      return B + e + yn + `flex-item-` + V(e, /flex-|-self/, ``) + e;
    case 4675:
      return B + e + yn + `flex-line-pack` + V(e, /align-content|flex-|-self/, ``) + e;
    case 5548:
      return B + e + yn + V(e, `shrink`, `negative`) + e;
    case 5292:
      return B + e + yn + V(e, `basis`, `preferred-size`) + e;
    case 6060:
      return B + `box-` + V(e, `-grow`, ``) + B + e + yn + V(e, `grow`, `positive`) + e;
    case 4554:
      return B + V(e, /([^-])(transform)/g, `$1` + B + `$2`) + e;
    case 6187:
      return V(V(V(e, /(zoom-|grab)/, B + `$1`), /(image-set)/, B + `$1`), e, ``) + e;
    case 5495:
    case 3959:
      return V(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return (
        V(
          V(e, /(.+:)(flex-)?(.*)/, B + `box-pack:$3` + yn + `flex-pack:$3`),
          /s.+-b[^;]+/,
          `justify`,
        ) +
        B +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e, /(.+)-inline(.+)/, B + `$1$2`) + e;
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
      if (In(e) - 1 - t > 6)
        switch (Pn(e, t + 1)) {
          case 109:
            if (Pn(e, t + 4) !== 45) break;
          case 102:
            return (
              V(
                e,
                /(.+:)(.+)-([^]+)/,
                `$1` + B + `$2-$3$1` + bn + (Pn(e, t + 3) == 108 ? `$3` : `$2-$3`),
              ) + e
            );
          case 115:
            return ~Nn(e, `stretch`) ? wr(V(e, `stretch`, `fill-available`), t) + e : e;
        }
      break;
    case 4949:
      if (Pn(e, t + 1) !== 115) break;
    case 6444:
      switch (Pn(e, In(e) - 3 - (~Nn(e, `!important`) && 10))) {
        case 107:
          return V(e, `:`, `:` + B) + e;
        case 101:
          return (
            V(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              `$1` +
                B +
                (Pn(e, 14) === 45 ? `inline-` : ``) +
                `box$3$1` +
                B +
                `$2$3$1` +
                yn +
                `$2box$3`,
            ) + e
          );
      }
      break;
    case 5936:
      switch (Pn(e, t + 11)) {
        case 114:
          return B + e + yn + V(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
        case 108:
          return B + e + yn + V(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
        case 45:
          return B + e + yn + V(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
      }
      return B + e + yn + e + e;
  }
  return e;
}
var Tr = [
    function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case Cn:
            e.return = wr(e.value, e.length);
            break;
          case Tn:
            return pr([Kn(e, { value: V(e.value, `@`, `@` + B) })], r);
          case Sn:
            if (e.length)
              return zn(e.props, function (t) {
                switch (Mn(t, /(::plac\w+|:read-\w+)/)) {
                  case `:read-only`:
                  case `:read-write`:
                    return pr([Kn(e, { props: [V(t, /:(read-\w+)/, `:` + bn + `$1`)] })], r);
                  case `::placeholder`:
                    return pr(
                      [
                        Kn(e, { props: [V(t, /:(plac\w+)/, `:` + B + `input-$1`)] }),
                        Kn(e, { props: [V(t, /:(plac\w+)/, `:` + bn + `$1`)] }),
                        Kn(e, { props: [V(t, /:(plac\w+)/, yn + `input-$1`)] }),
                      ],
                      r,
                    );
                }
                return ``;
              });
        }
    },
  ],
  Er = function (e) {
    var t = e.key;
    if (t === `css`) {
      var n = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
      Array.prototype.forEach.call(n, function (e) {
        e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
          (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
      });
    }
    var r = e.stylisPlugins || Tr,
      i = {},
      a,
      o = [];
    ((a = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll(`style[data-emotion^="` + t + ` "]`),
        function (e) {
          for (var t = e.getAttribute(`data-emotion`).split(` `), n = 1; n < t.length; n++)
            i[t[n]] = !0;
          o.push(e);
        },
      ));
    var s,
      c = [Sr, Cr],
      l,
      u = [
        mr,
        gr(function (e) {
          l.insert(e);
        }),
      ],
      d = hr(c.concat(r, u)),
      f = function (e) {
        return pr(cr(e), d);
      };
    s = function (e, t, n, r) {
      ((l = n), f(e ? e + `{` + t.styles + `}` : t.styles), r && (p.inserted[t.name] = !0));
    };
    var p = {
      key: t,
      sheet: new vn({
        key: t,
        container: a,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return (p.sheet.hydrate(o), p);
  },
  Dr = i((e) => {
    var t = typeof Symbol == `function` && Symbol.for,
      n = t ? Symbol.for(`react.element`) : 60103,
      r = t ? Symbol.for(`react.portal`) : 60106,
      i = t ? Symbol.for(`react.fragment`) : 60107,
      a = t ? Symbol.for(`react.strict_mode`) : 60108,
      o = t ? Symbol.for(`react.profiler`) : 60114,
      s = t ? Symbol.for(`react.provider`) : 60109,
      c = t ? Symbol.for(`react.context`) : 60110,
      l = t ? Symbol.for(`react.async_mode`) : 60111,
      u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
      d = t ? Symbol.for(`react.forward_ref`) : 60112,
      f = t ? Symbol.for(`react.suspense`) : 60113,
      p = t ? Symbol.for(`react.suspense_list`) : 60120,
      m = t ? Symbol.for(`react.memo`) : 60115,
      h = t ? Symbol.for(`react.lazy`) : 60116,
      g = t ? Symbol.for(`react.block`) : 60121,
      _ = t ? Symbol.for(`react.fundamental`) : 60117,
      v = t ? Symbol.for(`react.responder`) : 60118,
      y = t ? Symbol.for(`react.scope`) : 60119;
    function b(e) {
      if (typeof e == `object` && e) {
        var t = e.$$typeof;
        switch (t) {
          case n:
            switch (((e = e.type), e)) {
              case l:
              case u:
              case i:
              case o:
              case a:
              case f:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case c:
                  case d:
                  case h:
                  case m:
                  case s:
                    return e;
                  default:
                    return t;
                }
            }
          case r:
            return t;
        }
      }
    }
    function x(e) {
      return b(e) === u;
    }
    ((e.AsyncMode = l),
      (e.ConcurrentMode = u),
      (e.ContextConsumer = c),
      (e.ContextProvider = s),
      (e.Element = n),
      (e.ForwardRef = d),
      (e.Fragment = i),
      (e.Lazy = h),
      (e.Memo = m),
      (e.Portal = r),
      (e.Profiler = o),
      (e.StrictMode = a),
      (e.Suspense = f),
      (e.isAsyncMode = function (e) {
        return x(e) || b(e) === l;
      }),
      (e.isConcurrentMode = x),
      (e.isContextConsumer = function (e) {
        return b(e) === c;
      }),
      (e.isContextProvider = function (e) {
        return b(e) === s;
      }),
      (e.isElement = function (e) {
        return typeof e == `object` && !!e && e.$$typeof === n;
      }),
      (e.isForwardRef = function (e) {
        return b(e) === d;
      }),
      (e.isFragment = function (e) {
        return b(e) === i;
      }),
      (e.isLazy = function (e) {
        return b(e) === h;
      }),
      (e.isMemo = function (e) {
        return b(e) === m;
      }),
      (e.isPortal = function (e) {
        return b(e) === r;
      }),
      (e.isProfiler = function (e) {
        return b(e) === o;
      }),
      (e.isStrictMode = function (e) {
        return b(e) === a;
      }),
      (e.isSuspense = function (e) {
        return b(e) === f;
      }),
      (e.isValidElementType = function (e) {
        return (
          typeof e == `string` ||
          typeof e == `function` ||
          e === i ||
          e === u ||
          e === o ||
          e === a ||
          e === f ||
          e === p ||
          (typeof e == `object` &&
            !!e &&
            (e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === s ||
              e.$$typeof === c ||
              e.$$typeof === d ||
              e.$$typeof === _ ||
              e.$$typeof === v ||
              e.$$typeof === y ||
              e.$$typeof === g))
        );
      }),
      (e.typeOf = b));
  }),
  Or = i((e, t) => {
    t.exports = Dr();
  }),
  kr = i((e, t) => {
    var n = Or(),
      r = {
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
      i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
      a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
      o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
      s = {};
    ((s[n.ForwardRef] = a), (s[n.Memo] = o));
    function c(e) {
      return n.isMemo(e) ? o : s[e.$$typeof] || r;
    }
    var l = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      d = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      m = Object.prototype;
    function h(e, t, n) {
      if (typeof t != `string`) {
        if (m) {
          var r = p(t);
          r && r !== m && h(e, r, n);
        }
        var a = u(t);
        d && (a = a.concat(d(t)));
        for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
          var _ = a[g];
          if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
            var v = f(t, _);
            try {
              l(e, _, v);
            } catch {}
          }
        }
      }
      return e;
    }
    t.exports = h;
  }),
  Ar = !0;
function jr(e, t, n) {
  var r = ``;
  return (
    n.split(` `).forEach(function (n) {
      e[n] === void 0 ? n && (r += n + ` `) : t.push(e[n] + `;`);
    }),
    r
  );
}
var Mr = function (e, t, n) {
    var r = e.key + `-` + t.name;
    (n === !1 || Ar === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
  },
  Nr = function (e, t, n) {
    Mr(e, t, n);
    var r = e.key + `-` + t.name;
    if (e.inserted[t.name] === void 0) {
      var i = t;
      do (e.insert(t === i ? `.` + r : ``, i, e.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Pr(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    ((n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      ((t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Fr = {
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
  Ir = !1,
  Lr = /[A-Z]|^ms/g,
  Rr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  zr = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Br = function (e) {
    return e != null && typeof e != `boolean`;
  },
  Vr = _r(function (e) {
    return zr(e) ? e : e.replace(Lr, `-$&`).toLowerCase();
  }),
  Hr = function (e, t) {
    switch (e) {
      case `animation`:
      case `animationName`:
        if (typeof t == `string`)
          return t.replace(Rr, function (e, t, n) {
            return ((qr = { name: t, styles: n, next: qr }), t);
          });
    }
    return Fr[e] !== 1 && !zr(e) && typeof t == `number` && t !== 0 ? t + `px` : t;
  },
  Ur = `Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;
function Wr(e, t, n) {
  if (n == null) return ``;
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case `boolean`:
      return ``;
    case `object`:
      var i = n;
      if (i.anim === 1) return ((qr = { name: i.name, styles: i.styles, next: qr }), i.name);
      var a = n;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((qr = { name: o.name, styles: o.styles, next: qr }), (o = o.next));
        return a.styles + `;`;
      }
      return Gr(e, t, n);
    case `function`:
      if (e !== void 0) {
        var s = qr,
          c = n(e);
        return ((qr = s), Wr(e, t, c));
      }
      break;
  }
  var l = n;
  if (t == null) return l;
  var u = t[l];
  return u === void 0 ? l : u;
}
function Gr(e, t, n) {
  var r = ``;
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Wr(e, t, n[i]) + `;`;
  else
    for (var a in n) {
      var o = n[a];
      if (typeof o != `object`) {
        var s = o;
        t != null && t[s] !== void 0
          ? (r += a + `{` + t[s] + `}`)
          : Br(s) && (r += Vr(a) + `:` + Hr(a, s) + `;`);
      } else {
        if (a === `NO_COMPONENT_SELECTOR` && Ir) throw Error(Ur);
        if (Array.isArray(o) && typeof o[0] == `string` && (t == null || t[o[0]] === void 0))
          for (var c = 0; c < o.length; c++) Br(o[c]) && (r += Vr(a) + `:` + Hr(a, o[c]) + `;`);
        else {
          var l = Wr(e, t, o);
          switch (a) {
            case `animation`:
            case `animationName`:
              r += Vr(a) + `:` + l + `;`;
              break;
            default:
              r += a + `{` + l + `}`;
          }
        }
      }
    }
  return r;
}
var Kr = /label:\s*([^\s;{]+)\s*(;|$)/g,
  qr;
function Jr(e, t, n) {
  if (e.length === 1 && typeof e[0] == `object` && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    i = ``;
  qr = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? ((r = !1), (i += Wr(n, t, a))) : (i += a[0]);
  for (var o = 1; o < e.length; o++) ((i += Wr(n, t, e[o])), r && (i += a[o]));
  Kr.lastIndex = 0;
  for (var s = ``, c; (c = Kr.exec(i)) !== null; ) s += `-` + c[1];
  return { name: Pr(i) + s, styles: i, next: qr };
}
var Yr = function (e) {
    return e();
  },
  Xr = T.useInsertionEffect ? T.useInsertionEffect : !1,
  Zr = Xr || Yr;
Xr || T.useLayoutEffect;
var Qr = T.createContext(typeof HTMLElement < `u` ? Er({ key: `css` }) : null);
Qr.Provider;
var $r = function (e) {
    return (0, T.forwardRef)(function (t, n) {
      return e(t, (0, T.useContext)(Qr), n);
    });
  },
  ei = T.createContext({}),
  ti = {}.hasOwnProperty,
  ni = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
  ri = function (e, t) {
    var n = {};
    for (var r in t) ti.call(t, r) && (n[r] = t[r]);
    return ((n[ni] = e), n);
  },
  ii = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Mr(t, n, r),
      Zr(function () {
        return Nr(t, n, r);
      }),
      null
    );
  },
  ai = $r(function (e, t, n) {
    var r = e.css;
    typeof r == `string` && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[ni],
      a = [r],
      o = ``;
    typeof e.className == `string`
      ? (o = jr(t.registered, a, e.className))
      : e.className != null && (o = e.className + ` `);
    var s = Jr(a, void 0, T.useContext(ei));
    o += t.key + `-` + s.name;
    var c = {};
    for (var l in e) ti.call(e, l) && l !== `css` && l !== ni && (c[l] = e[l]);
    return (
      (c.className = o),
      n && (c.ref = n),
      T.createElement(
        T.Fragment,
        null,
        T.createElement(ii, { cache: t, serialized: s, isStringTag: typeof i == `string` }),
        T.createElement(i, c),
      )
    );
  });
kr();
var oi = function (e, t) {
  var n = arguments;
  if (t == null || !ti.call(t, `css`)) return T.createElement.apply(void 0, n);
  var r = n.length,
    i = Array(r);
  ((i[0] = ai), (i[1] = ri(e, t)));
  for (var a = 2; a < r; a++) i[a] = n[a];
  return T.createElement.apply(null, i);
};
(function (e) {
  var t;
  (function (e) {})((t ||= e.JSX ||= {}));
})((oi ||= {}));
function U() {
  return Jr([...arguments]);
}
var si = function e(t) {
  for (var n = t.length, r = 0, i = ``; r < n; r++) {
    var a = t[r];
    if (a != null) {
      var o = void 0;
      switch (typeof a) {
        case `boolean`:
          break;
        case `object`:
          if (Array.isArray(a)) o = e(a);
          else for (var s in ((o = ``), a)) a[s] && s && (o && (o += ` `), (o += s));
          break;
        default:
          o = a;
      }
      o && (i && (i += ` `), (i += o));
    }
  }
  return i;
};
function ci(e, t, n) {
  var r = [],
    i = jr(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var li = function (e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      Zr(function () {
        for (var e = 0; e < n.length; e++) Nr(t, n[e], !1);
      }),
      null
    );
  },
  ui = $r(function (e, t) {
    var n = [],
      r = function () {
        var e = Jr([...arguments], t.registered);
        return (n.push(e), Mr(t, e, !1), t.key + `-` + e.name);
      },
      i = {
        css: r,
        cx: function () {
          var e = [...arguments];
          return ci(t.registered, r, si(e));
        },
        theme: T.useContext(ei),
      },
      a = e.children(i);
    return T.createElement(
      T.Fragment,
      null,
      T.createElement(li, { cache: t, serializedArr: n }),
      a,
    );
  });
function di(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? di(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : di(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var pi = (function () {
  function e(t) {
    var n = this;
    (h(this, e),
      x(this, `_isAnalyticsEvent`, !0),
      x(this, `clone`, function () {
        return new e({ payload: fi({}, n.payload) });
      }),
      (this.payload = t.payload));
  }
  return u(e, [
    {
      key: `update`,
      value: function (e) {
        return (
          typeof e == `function` && (this.payload = e(this.payload)),
          C(e) === `object` && (this.payload = fi(fi({}, this.payload), e)),
          this
        );
      },
    },
  ]);
})();
function mi(e, t) {
  for (; !{}.hasOwnProperty.call(e, t) && (e = b(e)) !== null; );
  return e;
}
function hi() {
  return (
    (hi =
      typeof Reflect < `u` && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, n) {
            var r = mi(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
            }
          }),
    hi.apply(null, arguments)
  );
}
function gi(e, t, n) {
  return ((t = b(t)), m(e, _i() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function _i() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_i = function () {
    return !!e;
  })();
}
function vi(e, t, n, r) {
  var i = hi(b(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var yi = (function (e) {
  function t(e) {
    var n;
    return (
      h(this, t),
      (n = gi(this, t, [e])),
      x(n, `_isUIAnalyticsEvent`, !0),
      x(n, `clone`, function () {
        return n.hasFired
          ? null
          : new t({
              context: l(n.context),
              handlers: l(n.handlers),
              payload: JSON.parse(JSON.stringify(n.payload)),
            });
      }),
      x(n, `fire`, function (e) {
        n.hasFired ||
          (n.handlers.forEach(function (t) {
            return t(n, e);
          }),
          (n.hasFired = !0));
      }),
      (n.context = e.context || []),
      (n.handlers = e.handlers || []),
      (n.hasFired = !1),
      n
    );
  }
  return (
    _(t, e),
    u(t, [
      {
        key: `update`,
        value: function (e) {
          return this.hasFired ? this : vi(t, `update`, this, 3)([e]);
        },
      },
    ])
  );
})(pi);
function bi(e, t, n, r, i, a, o) {
  try {
    var s = e[a](o),
      c = s.value;
  } catch (e) {
    n(e);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function W(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, i) {
      var a = e.apply(t, n);
      function o(e) {
        bi(a, r, i, o, s, `next`, e);
      }
      function s(e) {
        bi(a, r, i, o, s, `throw`, e);
      }
      o(void 0);
    });
  };
}
var xi = i((e, t) => {
    function n(e, t) {
      ((this.v = e), (this.k = t));
    }
    ((t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Si = i((e, t) => {
    function n(e, r, i, a) {
      var o = Object.defineProperty;
      try {
        o({}, ``, {});
      } catch {
        o = 0;
      }
      ((t.exports = n =
        function (e, t, r, i) {
          function a(t, r) {
            n(e, t, function (e) {
              return this._invoke(t, r, e);
            });
          }
          t
            ? o
              ? o(e, t, { value: r, enumerable: !i, configurable: !i, writable: !i })
              : (e[t] = r)
            : (a(`next`, 0), a(`throw`, 1), a(`return`, 2));
        }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e, r, i, a));
    }
    ((t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Ci = i((e, t) => {
    var n = Si();
    function r() {
      var e,
        i,
        a = typeof Symbol == `function` ? Symbol : {},
        o = a.iterator || `@@iterator`,
        s = a.toStringTag || `@@toStringTag`;
      function c(t, r, a, o) {
        var s = r && r.prototype instanceof u ? r : u,
          c = Object.create(s.prototype);
        return (
          n(
            c,
            `_invoke`,
            (function (t, n, r) {
              var a,
                o,
                s,
                c = 0,
                u = r || [],
                d = !1,
                f = {
                  p: 0,
                  n: 0,
                  v: e,
                  a: p,
                  f: p.bind(e, 4),
                  d: function (t, n) {
                    return ((a = t), (o = 0), (s = e), (f.n = n), l);
                  },
                };
              function p(t, n) {
                for (o = t, s = n, i = 0; !d && c && !r && i < u.length; i++) {
                  var r,
                    a = u[i],
                    p = f.p,
                    m = a[2];
                  t > 3
                    ? (r = m === n) && ((s = a[(o = a[4]) ? 5 : ((o = 3), 3)]), (a[4] = a[5] = e))
                    : a[0] <= p &&
                      ((r = t < 2 && p < a[1])
                        ? ((o = 0), (f.v = n), (f.n = a[1]))
                        : p < m &&
                          (r = t < 3 || a[0] > n || n > m) &&
                          ((a[4] = t), (a[5] = n), (f.n = m), (o = 0)));
                }
                if (r || t > 1) return l;
                throw ((d = !0), n);
              }
              return function (r, u, m) {
                if (c > 1) throw TypeError(`Generator is already running`);
                for (d && u === 1 && p(u, m), o = u, s = m; (i = o < 2 ? e : s) || !d; ) {
                  a || (o ? (o < 3 ? (o > 1 && (f.n = -1), p(o, s)) : (f.n = s)) : (f.v = s));
                  try {
                    if (((c = 2), a)) {
                      if ((o || (r = `next`), (i = a[r]))) {
                        if (!(i = i.call(a, s)))
                          throw TypeError(`iterator result is not an object`);
                        if (!i.done) return i;
                        ((s = i.value), o < 2 && (o = 0));
                      } else
                        (o === 1 && (i = a.return) && i.call(a),
                          o < 2 &&
                            ((s = TypeError(`The iterator does not provide a '` + r + `' method`)),
                            (o = 1)));
                      a = e;
                    } else if ((i = (d = f.n < 0) ? s : t.call(n, f)) !== l) break;
                  } catch (t) {
                    ((a = e), (o = 1), (s = t));
                  } finally {
                    c = 1;
                  }
                }
                return { value: i, done: d };
              };
            })(t, a, o),
            !0,
          ),
          c
        );
      }
      var l = {};
      function u() {}
      function d() {}
      function f() {}
      i = Object.getPrototypeOf;
      var p = [][o]
          ? i(i([][o]()))
          : (n((i = {}), o, function () {
              return this;
            }),
            i),
        m = (f.prototype = u.prototype = Object.create(p));
      function h(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, f)
            : ((e.__proto__ = f), n(e, s, `GeneratorFunction`)),
          (e.prototype = Object.create(m)),
          e
        );
      }
      return (
        (d.prototype = f),
        n(m, `constructor`, f),
        n(f, `constructor`, d),
        (d.displayName = `GeneratorFunction`),
        n(f, s, `GeneratorFunction`),
        n(m),
        n(m, s, `Generator`),
        n(m, o, function () {
          return this;
        }),
        n(m, `toString`, function () {
          return `[object Generator]`;
        }),
        ((t.exports = r =
          function () {
            return { w: c, m: h };
          }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports))()
      );
    }
    ((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  wi = i((e, t) => {
    var n = xi(),
      r = Si();
    function i(e, t) {
      function a(r, i, o, s) {
        try {
          var c = e[r](i),
            l = c.value;
          return l instanceof n
            ? t.resolve(l.v).then(
                function (e) {
                  a(`next`, e, o, s);
                },
                function (e) {
                  a(`throw`, e, o, s);
                },
              )
            : t.resolve(l).then(
                function (e) {
                  ((c.value = e), o(c));
                },
                function (e) {
                  return a(`throw`, e, o, s);
                },
              );
        } catch (e) {
          s(e);
        }
      }
      var o;
      (this.next ||
        (r(i.prototype),
        r(
          i.prototype,
          (typeof Symbol == `function` && Symbol.asyncIterator) || `@asyncIterator`,
          function () {
            return this;
          },
        )),
        r(
          this,
          `_invoke`,
          function (e, n, r) {
            function i() {
              return new t(function (t, n) {
                a(e, r, t, n);
              });
            }
            return (o = o ? o.then(i, i) : i());
          },
          !0,
        ));
    }
    ((t.exports = i), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Ti = i((e, t) => {
    var n = Ci(),
      r = wi();
    function i(e, t, i, a, o) {
      return new r(n().w(e, t, i, a), o || Promise);
    }
    ((t.exports = i), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Ei = i((e, t) => {
    var n = Ti();
    function r(e, t, r, i, a) {
      var o = n(e, t, r, i, a);
      return o.next().then(function (e) {
        return e.done ? e.value : o.next();
      });
    }
    ((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Di = i((e, t) => {
    function n(e) {
      var t = Object(e),
        n = [];
      for (var r in t) n.unshift(r);
      return function e() {
        for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
        return ((e.done = !0), e);
      };
    }
    ((t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Oi = i((e, t) => {
    function n(e) {
      "@babel/helpers - typeof";
      return (
        (t.exports = n =
          typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == `function` &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? `symbol`
                  : typeof e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    ((t.exports = n), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  ki = i((e, t) => {
    var n = Oi().default;
    function r(e) {
      if (e != null) {
        var t = e[(typeof Symbol == `function` && Symbol.iterator) || `@@iterator`],
          r = 0;
        if (t) return t.call(e);
        if (typeof e.next == `function`) return e;
        if (!isNaN(e.length))
          return {
            next: function () {
              return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
            },
          };
      }
      throw TypeError(n(e) + ` is not iterable`);
    }
    ((t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  Ai = i((e, t) => {
    var n = xi(),
      r = Ci(),
      i = Ei(),
      a = Ti(),
      o = wi(),
      s = Di(),
      c = ki();
    function l() {
      var e = r(),
        u = e.m(l),
        d = (Object.getPrototypeOf ? Object.getPrototypeOf(u) : u.__proto__).constructor;
      function f(e) {
        var t = typeof e == `function` && e.constructor;
        return !!t && (t === d || (t.displayName || t.name) === `GeneratorFunction`);
      }
      var p = { throw: 1, return: 2, break: 3, continue: 3 };
      function m(e) {
        var t, n;
        return function (r) {
          (t ||
            ((t = {
              stop: function () {
                return n(r.a, 2);
              },
              catch: function () {
                return r.v;
              },
              abrupt: function (e, t) {
                return n(r.a, p[e], t);
              },
              delegateYield: function (e, i, a) {
                return ((t.resultName = i), n(r.d, c(e), a));
              },
              finish: function (e) {
                return n(r.f, e);
              },
            }),
            (n = function (e, n, i) {
              ((r.p = t.prev), (r.n = t.next));
              try {
                return e(n, i);
              } finally {
                t.next = r.n;
              }
            })),
            t.resultName && ((t[t.resultName] = r.v), (t.resultName = void 0)),
            (t.sent = r.v),
            (t.next = r.n));
          try {
            return e.call(this, t);
          } finally {
            ((r.p = t.prev), (r.n = t.next));
          }
        };
      }
      return ((t.exports = l =
        function () {
          return {
            wrap: function (t, n, r, i) {
              return e.w(m(t), n, r, i && i.reverse());
            },
            isGeneratorFunction: f,
            mark: e.m,
            awrap: function (e, t) {
              return new n(e, t);
            },
            AsyncIterator: o,
            async: function (e, t, n, r, o) {
              return (f(t) ? a : i)(m(e), t, n, r, o);
            },
            keys: s,
            values: c,
          };
        }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports))();
    }
    ((t.exports = l), (t.exports.__esModule = !0), (t.exports.default = t.exports));
  }),
  ji = i((e, t) => {
    var n = Ai()();
    t.exports = n;
    try {
      regeneratorRuntime = n;
    } catch {
      typeof globalThis == `object`
        ? (globalThis.regeneratorRuntime = n)
        : Function(`r`, `regeneratorRuntime = r`)(n);
    }
  }),
  Mi = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.V1InitializeContainer = void 0));
    var t = w();
    e.V1InitializeContainer = class {
      constructor(e) {
        this._values = e;
      }
      getGate(e) {
        return this._getResultFromLookup(this._values.feature_gates, e);
      }
      getConfig(e) {
        return this._getResultFromLookup(this._values.dynamic_configs, e);
      }
      getLayer(e) {
        return this._getResultFromLookup(this._values.layer_configs, e);
      }
      getParamStore(e) {
        return this._getResultFromLookup(this._values.param_stores, e);
      }
      getConfigList() {
        return Object.keys(this._values.dynamic_configs);
      }
      getExposureMapping() {
        return this._values.exposures;
      }
      _getResultFromLookup(e, n) {
        return e ? (e[n] ?? e[(0, t._DJB2)(n)] ?? null) : null;
      }
    };
  }),
  Ni = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.V2InitializeContainer = void 0));
    var t = w();
    e.V2InitializeContainer = class {
      constructor(e) {
        this._values = e;
      }
      getGate(e) {
        let t = this._getResultFromLookup(this._values.feature_gates, e);
        return t
          ? {
              name: e,
              value: t.v === !0,
              rule_id: t.r ?? `default`,
              secondary_exposures: t.s ?? [],
              id_type: t.i ?? ``,
            }
          : null;
      }
      getConfig(e) {
        let t = this._getResultFromLookup(this._values.dynamic_configs, e);
        return t
          ? {
              name: e,
              value: this._values.values[t.v] ?? {},
              rule_id: t.r,
              secondary_exposures: t.s ?? [],
              id_type: t.i ?? ``,
              is_user_in_experiment: t.ue === !0,
              passed: t.p === !0,
              group_name: t.gn ?? void 0,
              is_experiment_active: t.ea === !0,
              group: t.r,
              is_device_based: t.i === `stableID`,
            }
          : null;
      }
      getLayer(e) {
        let t = this._getResultFromLookup(this._values.layer_configs, e);
        return t
          ? {
              name: e,
              value: this._values.values[t.v] ?? {},
              rule_id: t.r,
              secondary_exposures: t.s ?? [],
              is_user_in_experiment: t.ue === !0,
              group_name: t.gn ?? void 0,
              is_experiment_active: t.ea === !0,
              group: t.r,
              is_device_based: t.i === `stableID`,
              allocated_experiment_name: t.ae ?? ``,
              explicit_parameters: t.ep ?? [],
              undelegated_secondary_exposures: t.us ?? [],
              parameter_rule_ids: t.pr,
            }
          : null;
      }
      getParamStore(e) {
        return this._getResultFromLookup(this._values.param_stores, e);
      }
      getConfigList() {
        return Object.keys(this._values.dynamic_configs);
      }
      getExposureMapping() {
        return this._values.exposures;
      }
      _getResultFromLookup(e, n) {
        return e ? (e[n] ?? e[(0, t._DJB2)(n)] ?? null) : null;
      }
    };
  }),
  Pi = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var t = w(),
      n = Mi(),
      r = Ni();
    e.default = class {
      constructor(e, t) {
        ((this._sdkKey = e),
          (this._options = t),
          (this._valuesForExternalUse = null),
          (this._values = null),
          (this._source = `Uninitialized`),
          (this._lcut = 0),
          (this._receivedAt = 0),
          (this._bootstrapMetadata = null),
          (this._warnings = new Set()));
      }
      reset() {
        ((this._values = null),
          (this._valuesForExternalUse = null),
          (this._source = `Loading`),
          (this._lcut = 0),
          (this._receivedAt = 0),
          (this._bootstrapMetadata = null),
          this._warnings.clear());
      }
      finalize() {
        this._values || (this._source = `NoValues`);
      }
      getValues() {
        return this._valuesForExternalUse;
      }
      setValues(e, i) {
        if (!e) return !1;
        let a = (0, t._typedJsonParse)(e.data, `has_updates`, `EvaluationResponse`);
        return a == null
          ? !1
          : ((this._source = e.source),
            a?.has_updates !== !0 || (a.time ?? 0) < this._lcut
              ? !0
              : ((this._valuesForExternalUse = (0, t._typedJsonParse)(
                  e.data,
                  `has_updates`,
                  `EvaluationResponse`,
                )),
                (this._lcut = a.time),
                (this._receivedAt = e.receivedAt),
                a.response_format === `init-v2`
                  ? (this._values = new r.V2InitializeContainer(a))
                  : (this._values = new n.V1InitializeContainer(a)),
                (this._bootstrapMetadata = this._extractBootstrapMetadata(e.source, a)),
                e.source && a.user && this._setWarningState(i, a),
                t.SDKFlags.setFlags(this._sdkKey, a.sdk_flags ?? {}),
                !0));
      }
      getWarnings() {
        if (this._warnings.size !== 0) return Array.from(this._warnings);
      }
      getGate(e) {
        let t = this._values ? this._values.getGate(e) : null;
        return this._getDetailedStoreResult(t);
      }
      getConfig(e) {
        let t = this._values ? this._values.getConfig(e) : null;
        return this._getDetailedStoreResult(t);
      }
      getConfigList() {
        return this._values ? this._values.getConfigList() : [];
      }
      getLayer(e) {
        let t = this._values ? this._values.getLayer(e) : null;
        return this._getDetailedStoreResult(t);
      }
      getParamStore(e) {
        let t = this._values ? this._values.getParamStore(e) : null;
        return this._getDetailedStoreResult(t);
      }
      getSource() {
        return this._source;
      }
      getExposureMapping() {
        return this._values?.getExposureMapping();
      }
      _extractBootstrapMetadata(e, t) {
        if (e !== `Bootstrap`) return null;
        let n = {};
        return (
          t.user && (n.user = t.user),
          t.sdkInfo && (n.generatorSDKInfo = t.sdkInfo),
          (n.lcut = t.time),
          n
        );
      }
      _getDetailedStoreResult(e) {
        return { result: e, details: this._getDetails(e == null) };
      }
      _setWarningState(e, n) {
        let r = t.StableID.get(this._sdkKey);
        if (e.customIDs?.stableID !== r && (e.customIDs?.stableID || r)) {
          this._warnings.add(`StableIDMismatch`);
          return;
        }
        if (`user` in n) {
          let r = n.user,
            i = Object.assign(Object.assign({}, e), {
              analyticsOnlyMetadata: void 0,
              privateAttributes: void 0,
            });
          (this._options?.disableStableID &&
            ((i = Object.assign(Object.assign({}, i), {
              customIDs: Object.assign(Object.assign({}, i.customIDs), { stableID: void 0 }),
            })),
            (r = Object.assign(Object.assign({}, r), {
              customIDs: Object.assign(Object.assign({}, r.customIDs), { stableID: void 0 }),
            }))),
            (0, t._getFullUserHash)(i) !== (0, t._getFullUserHash)(r) &&
              this._warnings.add(`PartialUserMatch`));
        }
      }
      getCurrentSourceDetails() {
        if (this._source === `Uninitialized` || this._source === `NoValues`)
          return { reason: this._source };
        let e = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
        return (this._warnings.size > 0 && (e.warnings = Array.from(this._warnings)), e);
      }
      _getDetails(e) {
        let t = this.getCurrentSourceDetails(),
          n = t.reason,
          r = t.warnings ?? [];
        (this._source === `Bootstrap` && r.length > 0 && (n += r[0]),
          n !== `Uninitialized` &&
            n !== `NoValues` &&
            (n = `${n}:${e ? `Unrecognized` : `Recognized`}`));
        let i = this._source === `Bootstrap` ? (this._bootstrapMetadata ?? void 0) : void 0;
        return (i && (t.bootstrapMetadata = i), Object.assign(Object.assign({}, t), { reason: n }));
      }
    };
  }),
  Fi = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._resolveDeltasResponse = void 0));
    var t = w(),
      n = 2;
    function r(e, r) {
      let o = (0, t._typedJsonParse)(r, `checksum`, `DeltasEvaluationResponse`);
      if (!o) return { hadBadDeltaChecksum: !0 };
      let s = a(i(e, o)),
        c = (0, t._DJB2Object)(
          {
            feature_gates: s.feature_gates,
            dynamic_configs: s.dynamic_configs,
            layer_configs: s.layer_configs,
          },
          n,
        );
      return c === o.checksumV2
        ? JSON.stringify(s)
        : {
            hadBadDeltaChecksum: !0,
            badChecksum: c,
            badMergedConfigs: s,
            badFullResponse: o.deltas_full_response,
          };
    }
    e._resolveDeltasResponse = r;
    function i(e, t) {
      return Object.assign(Object.assign(Object.assign({}, e), t), {
        feature_gates: Object.assign(Object.assign({}, e.feature_gates), t.feature_gates),
        layer_configs: Object.assign(Object.assign({}, e.layer_configs), t.layer_configs),
        dynamic_configs: Object.assign(Object.assign({}, e.dynamic_configs), t.dynamic_configs),
      });
    }
    function a(e) {
      let t = e;
      return (
        o(e.deleted_gates, t.feature_gates),
        delete t.deleted_gates,
        o(e.deleted_configs, t.dynamic_configs),
        delete t.deleted_configs,
        o(e.deleted_layers, t.layer_configs),
        delete t.deleted_layers,
        t
      );
    }
    function o(e, t) {
      e?.forEach((e) => {
        delete t[e];
      });
    }
  }),
  Ii = i((e) => {
    var t =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = w(),
      r = Fi();
    e.default = class extends n.NetworkCore {
      constructor(e, t) {
        super(e, t);
        let r = e?.networkConfig;
        ((this._option = e),
          (this._initializeUrlConfig = new n.UrlConfiguration(
            n.Endpoint._initialize,
            r?.initializeUrl,
            r?.api,
            r?.initializeFallbackUrls,
          )));
      }
      fetchEvaluations(e, r, i, a, o) {
        return t(this, void 0, void 0, function* () {
          let t = r ? (0, n._typedJsonParse)(r, `has_updates`, `InitializeResponse`) : null,
            s = {
              user: a,
              hash: this._option?.networkConfig?.initializeHashAlgorithm ?? `djb2`,
              deltasResponseRequested: !1,
              full_checksum: null,
            };
          if (t?.has_updates) {
            let e =
              t?.hash_used !== (this._option?.networkConfig?.initializeHashAlgorithm ?? `djb2`);
            s = Object.assign(Object.assign({}, s), {
              sinceTime: o && !e ? t.time : 0,
              previousDerivedFields: `derived_fields` in t && o ? t.derived_fields : {},
              deltasResponseRequested: !0,
              full_checksum: t.full_checksum,
              partialUserMatchSinceTime: e ? 0 : t.time,
            });
          }
          return this._fetchEvaluations(e, t, s, i);
        });
      }
      _fetchEvaluations(e, n, i, a) {
        return t(this, void 0, void 0, function* () {
          let t = yield this.post({
            sdkKey: e,
            urlConfig: this._initializeUrlConfig,
            data: i,
            retries: 2,
            isStatsigEncodable: !0,
            priority: a,
          });
          if (t?.code === 204) return `{"has_updates": false}`;
          if (t?.code !== 200) return t?.body ?? null;
          if (
            n?.has_updates !== !0 ||
            t.body?.includes(`"is_delta":true`) !== !0 ||
            i.deltasResponseRequested !== !0
          )
            return t.body;
          let o = (0, r._resolveDeltasResponse)(n, t.body);
          return typeof o == `string`
            ? o
            : this._fetchEvaluations(
                e,
                n,
                Object.assign(Object.assign(Object.assign({}, i), o), {
                  deltasResponseRequested: !1,
                }),
                a,
              );
        });
      }
    };
  }),
  Li = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e._makeParamStoreGetter = void 0));
    var t = w(),
      n = { disableExposureLog: !0 };
    function r(e) {
      return e == null || e.disableExposureLog === !1;
    }
    function i(e, n) {
      return n != null && !(0, t._isTypeMatch)(e, n);
    }
    function a(e, t) {
      return e.value;
    }
    function o(e, t, i) {
      return e.getFeatureGate(t.gate_name, r(i) ? void 0 : n).value ? t.pass_value : t.fail_value;
    }
    function s(e, t, a, o) {
      let s = e.getDynamicConfig(t.config_name, r(o) ? void 0 : n).get(t.param_name);
      return i(s, a) ? a : s;
    }
    function c(e, t, a, o) {
      let s = e.getExperiment(t.experiment_name, r(o) ? void 0 : n).get(t.param_name);
      return i(s, a) ? a : s;
    }
    function l(e, t, a, o) {
      let s = e.getLayer(t.layer_name, r(o) ? void 0 : n).get(t.param_name);
      return i(s, a) ? a : s;
    }
    function u(e, n, r) {
      return (i, u) => {
        if (n == null) return u;
        let d = n[i];
        if (d == null || (u != null && (0, t._typeOf)(u) !== d.param_type)) return u;
        switch (d.ref_type) {
          case `static`:
            return a(d, r);
          case `gate`:
            return o(e, d, r);
          case `dynamic_config`:
            return s(e, d, u, r);
          case `experiment`:
            return c(e, d, u, r);
          case `layer`:
            return l(e, d, u, r);
          default:
            return u;
        }
      };
    }
    e._makeParamStoreGetter = u;
  }),
  Ri = i((e) => {
    var t =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.StatsigEvaluationsDataAdapter = void 0));
    var n = w(),
      r = Ii();
    e.StatsigEvaluationsDataAdapter = class extends n.DataAdapterCore {
      constructor() {
        (super(`EvaluationsDataAdapter`, `evaluations`),
          (this._network = null),
          (this._options = null));
      }
      attach(e, t, n) {
        (super.attach(e, t, n),
          n !== null && n instanceof r.default
            ? (this._network = n)
            : (this._network = new r.default(t ?? {})));
      }
      getDataAsync(e, t, r) {
        return this._getDataAsyncImpl(e, (0, n._normalizeUser)(t, this._options), r);
      }
      prefetchData(e, t) {
        return this._prefetchDataImpl(e, t);
      }
      setData(e) {
        let t = (0, n._typedJsonParse)(e, `has_updates`, `data`);
        t && `user` in t
          ? super.setData(e, t.user)
          : n.Log.error(
              `StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.`,
            );
      }
      setDataLegacy(e, t) {
        super.setData(e, t);
      }
      _fetchFromNetwork(e, n, r, i) {
        return t(this, void 0, void 0, function* () {
          return (
            (yield this._network?.fetchEvaluations(this._getSdkKey(), e, r?.priority, n, i)) ?? null
          );
        });
      }
      _getCacheKey(e) {
        let t = (0, n._getStorageKey)(this._getSdkKey(), e, this._options?.customUserCacheKeyFunc);
        return `${n.DataAdapterCachePrefix}.${this._cacheSuffix}.${t}`;
      }
      _isCachedResultValidFor204(e, t) {
        return e.fullUserHash != null && e.fullUserHash === (0, n._getFullUserHash)(t);
      }
    };
  }),
  zi = i((e) => {
    var t =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = w(),
      r = Pi(),
      i = Ii(),
      a = Li(),
      o = Ri();
    e.default = class e extends n.StatsigClientBase {
      static instance(t) {
        let r = (0, n._getStatsigGlobal)().instance(t);
        return r instanceof e
          ? r
          : (n.Log.warn(
              (0, n._isServerEnv)()
                ? `StatsigClient.instance is not supported in server environments`
                : `Unable to find StatsigClient instance`,
            ),
            new e(t ?? ``, {}));
      }
      constructor(e, t, a = null) {
        n.SDKType._setClientType(e, `javascript-client`);
        let s = new i.default(a, (e) => {
          this.$emt(e);
        });
        (super(e, a?.dataAdapter ?? new o.StatsigEvaluationsDataAdapter(), s, a),
          (this._possibleFirstTouchMetadata = {}),
          (this.getFeatureGate = this._memoize(
            n.MemoPrefix._gate,
            this._getFeatureGateImpl.bind(this),
          )),
          (this.getDynamicConfig = this._memoize(
            n.MemoPrefix._dynamicConfig,
            this._getDynamicConfigImpl.bind(this),
          )),
          (this.getExperiment = this._memoize(
            n.MemoPrefix._experiment,
            this._getExperimentImpl.bind(this),
          )),
          (this.getConfigList = this._memoize(
            n.MemoPrefix._configList,
            this._getConfigListImpl.bind(this),
          )),
          (this.getLayer = this._memoize(n.MemoPrefix._layer, this._getLayerImpl.bind(this))),
          (this.getParameterStore = this._memoize(
            n.MemoPrefix._paramStore,
            this._getParameterStoreImpl.bind(this),
          )),
          (this._store = new r.default(e, a ?? null)),
          (this._network = s),
          (this._user = this._configureUser(t, a)),
          (this._sdkInstanceID = (0, n.getUUID)()),
          (this._contextHandle = new n.PrecomputedEvaluationsContextHandle(
            e,
            () => this._options,
            () => this._errorBoundary,
            () => this._store.getValues(),
            () => this._user,
            () => this._sdkInstanceID,
          )));
        let c = a?.plugins ?? [];
        for (let e of c) e.bind(this);
      }
      initializeSync(e) {
        return this.loadingStatus === `Uninitialized`
          ? (this._logger.start(), this.updateUserSync(this._user, e))
          : (0, n.createUpdateDetails)(!0, this._store.getSource(), -1, null, null, [
              `MultipleInitializations`,
              ...(this._store.getWarnings() ?? []),
            ]);
      }
      initializeAsync(e) {
        return t(this, void 0, void 0, function* () {
          return (
            (this._initializePromise ||= this._initializeAsyncImpl(e)),
            this._initializePromise
          );
        });
      }
      updateUserSync(e, t) {
        let n = performance.now();
        try {
          return this._updateUserSyncImpl(e, t, n);
        } catch (e) {
          let t = e instanceof Error ? e : Error(String(e));
          return this._createErrorUpdateDetails(t, n);
        }
      }
      _updateUserSyncImpl(e, t, r) {
        let i = [...(this._store.getWarnings() ?? [])];
        this._resetForUser(e);
        let a = this.dataAdapter.getDataSync(this._user);
        (a ?? i.push(`NoCachedValues`),
          this._store.setValues(a, this._user),
          this._finalizeUpdate(a));
        let o = t?.disableBackgroundCacheRefresh;
        return (
          o === !0 ||
            (o == null && a?.source === `Bootstrap`) ||
            this._runPostUpdate(a ?? null, this._user),
          (0, n.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - r,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            i,
          )
        );
      }
      updateUserAsync(e, n) {
        return t(this, void 0, void 0, function* () {
          let t = performance.now();
          try {
            return yield this._updateUserAsyncImpl(e, n);
          } catch (e) {
            let n = e instanceof Error ? e : Error(String(e));
            return this._createErrorUpdateDetails(n, t);
          }
        });
      }
      _updateUserAsyncImpl(e, r) {
        return t(this, void 0, void 0, function* () {
          this._resetForUser(e);
          let t = this._user;
          n.Diagnostics._markInitOverallStart(this._sdkKey);
          let i = this.dataAdapter.getDataSync(t);
          if (
            (this._store.setValues(i, this._user),
            this._setStatus(`Loading`, i),
            (i = yield this.dataAdapter.getDataAsync(i, t, r)),
            t !== this._user)
          )
            return (0, n.createUpdateDetails)(
              !1,
              this._store.getSource(),
              -1,
              Error(`User changed during update`),
              this._network.getLastUsedInitUrlAndReset(),
            );
          let a = !1;
          (i != null &&
            (n.Diagnostics._markInitProcessStart(this._sdkKey),
            (a = this._store.setValues(i, this._user)),
            n.Diagnostics._markInitProcessEnd(this._sdkKey, { success: a })),
            this._finalizeUpdate(i),
            a ||
              (this._errorBoundary.attachErrorIfNoneExists(
                n.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
              ),
              this.$emt({ name: `initialization_failure` })),
            n.Diagnostics._markInitOverallEnd(
              this._sdkKey,
              a,
              this._store.getCurrentSourceDetails(),
            ));
          let o = n.Diagnostics._enqueueDiagnosticsEvent(
            this._user,
            this._logger,
            this._sdkKey,
            this._options,
          );
          return (0, n.createUpdateDetails)(
            a,
            this._store.getSource(),
            o,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            this._store.getWarnings(),
          );
        });
      }
      getContext() {
        let e = (0, n._cloneObject)(`StatsigUser`, this._user);
        return (
          (e ??= (n.Log.error(`Failed to clone user`), {})),
          {
            sdkKey: this._sdkKey,
            options: this._options,
            values: this._store.getValues(),
            user: e,
            errorBoundary: this._errorBoundary,
            session: n.StatsigSession.get(this._sdkKey),
            stableID: n.StableID.get(this._sdkKey),
            sdkInstanceID: this._sdkInstanceID,
          }
        );
      }
      getContextHandle() {
        return this._contextHandle;
      }
      checkGate(e, t) {
        return this.getFeatureGate(e, t).value;
      }
      logEvent(e, t, n) {
        let r = typeof e == `string` ? { eventName: e, value: t, metadata: n } : e;
        (this.$emt({ name: `log_event_called`, event: r }),
          this._logger.enqueue(
            Object.assign(Object.assign({}, r), { user: this._user, time: Date.now() }),
          ));
      }
      updateUserWithAnalyticsOnlyMetadata(e) {
        this._user = this._configureUser(
          Object.assign(Object.assign({}, this._user), { analyticsOnlyMetadata: e }),
          this._options,
        );
      }
      _primeReadyRipcord() {
        this.$on(`error`, () => {
          this.loadingStatus === `Loading` && this._finalizeUpdate(null);
        });
      }
      _initializeAsyncImpl(e) {
        return t(this, void 0, void 0, function* () {
          return (
            n.Storage.isReady() || (yield n.Storage.isReadyResolver()),
            this._logger.start(),
            this.updateUserAsync(this._user, e)
          );
        });
      }
      _createErrorUpdateDetails(e, t) {
        return (0, n.createUpdateDetails)(
          !1,
          this._store.getSource(),
          performance.now() - t,
          e,
          null,
          [...(this._store.getWarnings() ?? [])],
        );
      }
      _finalizeUpdate(e) {
        (this._store.finalize(), this._setStatus(`Ready`, e));
      }
      _runPostUpdate(e, t) {
        this.dataAdapter.getDataAsync(e, t, { priority: `low` }).catch((e) => {
          n.Log.error(`An error occurred after update.`, e);
        });
      }
      _resetForUser(e) {
        (this._logger.reset(),
          this._store.reset(),
          (this._user = this._configureUser(e, this._options)));
      }
      _configureUser(e, t) {
        var r;
        let i = (0, n._normalizeUser)(e, t),
          a = i.customIDs?.stableID;
        if (a) {
          let e = (r = this.storageProvider).isReadyResolver?.call(r);
          e
            ? e.then(
                () => n.StableID.setOverride(a, this._sdkKey),
                () => n.StableID.setOverride(a, this._sdkKey),
              )
            : n.StableID.setOverride(a, this._sdkKey);
        }
        return (
          Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
            (i.analyticsOnlyMetadata = Object.assign(
              Object.assign({}, i.analyticsOnlyMetadata),
              this._possibleFirstTouchMetadata,
            )),
          i
        );
      }
      _getFeatureGateImpl(e, t) {
        var r;
        let { result: i, details: a } = this._store.getGate(e);
        (this._checkUserHasIdForEvaluation(i?.id_type, e, `Gate`),
          this._checkInitializationStatus(a.reason));
        let o = (0, n._makeFeatureGate)(e, a, i),
          s = (r = this.overrideAdapter)?.getGateOverride?.call(r, o, this._user, t) ?? o;
        return (
          this._enqueueExposure(
            e,
            (0, n._createGateExposure)(this._user, s, this._store.getExposureMapping()),
            t,
          ),
          this.$emt({ name: `gate_evaluation`, gate: s }),
          s
        );
      }
      _getDynamicConfigImpl(e, t) {
        var r;
        let { result: i, details: a } = this._store.getConfig(e);
        (this._checkUserHasIdForEvaluation(i?.id_type, e, `Dynamic config`),
          this._checkInitializationStatus(a.reason));
        let o = (0, n._makeDynamicConfig)(e, a, i),
          s = (r = this.overrideAdapter)?.getDynamicConfigOverride?.call(r, o, this._user, t) ?? o;
        return (
          this._enqueueExposure(
            e,
            (0, n._createConfigExposure)(this._user, s, this._store.getExposureMapping()),
            t,
          ),
          this.$emt({ name: `dynamic_config_evaluation`, dynamicConfig: s }),
          s
        );
      }
      _getExperimentImpl(e, t) {
        var r;
        let { result: i, details: a } = this._store.getConfig(e);
        (this._checkUserHasIdForEvaluation(i?.id_type, e, `Experiment`),
          this._checkInitializationStatus(a.reason));
        let o = (0, n._makeExperiment)(e, a, i);
        o.__evaluation != null &&
          (o.__evaluation.secondary_exposures = (0, n._mapExposures)(
            o.__evaluation?.secondary_exposures ?? [],
            this._store.getExposureMapping(),
          ));
        let s = (r = this.overrideAdapter)?.getExperimentOverride?.call(r, o, this._user, t) ?? o;
        return (
          this._enqueueExposure(
            e,
            (0, n._createConfigExposure)(this._user, s, this._store.getExposureMapping()),
            t,
          ),
          this.$emt({ name: `experiment_evaluation`, experiment: s }),
          s
        );
      }
      _getConfigListImpl() {
        return this._store.getConfigList();
      }
      _getLayerImpl(e, t) {
        var r;
        let { result: i, details: a } = this._store.getLayer(e),
          o = (0, n._makeLayer)(e, a, i),
          s = (r = this.overrideAdapter)?.getLayerOverride?.call(r, o, this._user, t);
        t?.disableExposureLog && this._logger.incrementNonExposureCount(e);
        let c = (0, n._mergeOverride)(o, s, s?.__value ?? o.__value, (r) => {
          t?.disableExposureLog ||
            this._enqueueExposure(
              e,
              (0, n._createLayerParameterExposure)(
                this._user,
                c,
                r,
                this._store.getExposureMapping(),
              ),
              t,
            );
        });
        return (this.$emt({ name: `layer_evaluation`, layer: c }), c);
      }
      _getParameterStoreImpl(e, t) {
        var n;
        let { result: r, details: i } = this._store.getParamStore(e);
        this._logger.incrementNonExposureCount(e);
        let o = {
            name: e,
            details: i,
            __configuration: r,
            get: (0, a._makeParamStoreGetter)(this, r, t),
          },
          s = (n = this.overrideAdapter)?.getParamStoreOverride?.call(n, o, t);
        return (
          s != null &&
            ((o.__configuration = s.config),
            (o.details = s.details),
            (o.get = (0, a._makeParamStoreGetter)(this, s.config, t))),
          o
        );
      }
      _checkUserHasIdForEvaluation(e, t, r) {
        e &&
          ((0, n._getUnitIDFromUser)(this._user, e) ||
            n.Log.warn(`The user does not have the required id_type "${e}" for ${r} "${t}"`));
      }
      _checkInitializationStatus(e) {
        (e === `Uninitialized` || e.startsWith(`Loading`)) &&
          n.Log.warn(`SDK initialization has not completed. Reason: ${e}`);
      }
    };
  }),
  Bi = i((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e)
            r !== `default` && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.StatsigClient = void 0));
    var r = w(),
      i = zi();
    ((e.StatsigClient = i.default),
      n(w(), e),
      (e.default = Object.assign((0, r._getStatsigGlobal)(), { StatsigClient: i.default })));
  }),
  Vi = e(
    i((e, t) => {
      var n = Object.prototype.hasOwnProperty,
        r = `~`;
      function i() {}
      Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function a(e, t, n) {
        ((this.fn = e), (this.context = t), (this.once = n || !1));
      }
      function o(e, t, n, i, o) {
        if (typeof n != `function`) throw TypeError(`The listener must be a function`);
        var s = new a(n, i || e, o),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
      }
      function c() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      ((c.prototype.eventNames = function () {
        var e = [],
          t,
          i;
        if (this._eventsCount === 0) return e;
        for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
      }),
        (c.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
          return o;
        }),
        (c.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (e, t, n, i, a, o) {
          var s = r ? r + e : e;
          if (!this._events[s]) return !1;
          var c = this._events[s],
            l = arguments.length,
            u,
            d;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, t), !0);
              case 3:
                return (c.fn.call(c.context, t, n), !0);
              case 4:
                return (c.fn.call(c.context, t, n, i), !0);
              case 5:
                return (c.fn.call(c.context, t, n, i, a), !0);
              case 6:
                return (c.fn.call(c.context, t, n, i, a, o), !0);
            }
            for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
            c.fn.apply(c.context, u);
          } else {
            var f = c.length,
              p;
            for (d = 0; d < f; d++)
              switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                case 1:
                  c[d].fn.call(c[d].context);
                  break;
                case 2:
                  c[d].fn.call(c[d].context, t);
                  break;
                case 3:
                  c[d].fn.call(c[d].context, t, n);
                  break;
                case 4:
                  c[d].fn.call(c[d].context, t, n, i);
                  break;
                default:
                  if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                  c[d].fn.apply(c[d].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (c.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (c.prototype.removeListener = function (e, t, n, i) {
          var a = r ? r + e : e;
          if (!this._events[a]) return this;
          if (!t) return (s(this, a), this);
          var o = this._events[a];
          if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
            l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        t !== void 0 && (t.exports = c));
    })(),
  );
function Hi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ui(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hi(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Wi = `@all-features`,
  Gi = (function () {
    function e() {
      (h(this, e), x(this, `eventToValue`, new Map()), (this.emitter = new Vi.default()));
    }
    return u(e, [
      {
        key: `onGateUpdated`,
        value: function (e, t, n, r) {
          var i = this,
            a = n(e, Ui(Ui({}, r), {}, { fireGateExposure: !1 }));
          this.eventToValue.get(t) === void 0 && this.eventToValue.set(t, a);
          var o = function () {
            var a = n(e, Ui(Ui({}, r), {}, { fireGateExposure: !1 }));
            i.eventToValue.get(t) !== a && (i.eventToValue.set(t, a), t(a));
          };
          return (
            this.emitter.on(e, o),
            function () {
              i.emitter.off(e, o);
            }
          );
        },
      },
      {
        key: `onExperimentValueUpdated`,
        value: function (e, t, n, r, i, a) {
          var o = this,
            s = `${e}.${t}`,
            c = i(e, t, n, Ui(Ui({}, a), {}, { fireExperimentExposure: !1 }));
          this.eventToValue.get(r) === void 0 && this.eventToValue.set(r, c);
          var l = function () {
            var s = i(e, t, n, Ui(Ui({}, a), {}, { fireExperimentExposure: !1 }));
            o.eventToValue.get(r) !== s && (o.eventToValue.set(r, s), r(s));
          };
          return (
            this.emitter.on(s, l),
            function () {
              o.emitter.off(s, l);
            }
          );
        },
      },
      {
        key: `onAnyUpdated`,
        value: function (e) {
          var t = this;
          return (
            this.emitter.on(Wi, e),
            function () {
              t.emitter.off(Wi, e);
            }
          );
        },
      },
      {
        key: `anyUpdated`,
        value: function () {
          var e = this;
          (this.emitter.emit(Wi),
            this.emitter
              .eventNames()
              .filter(function (e) {
                return e !== Wi;
              })
              .forEach(function (t) {
                e.emitter.emit(t);
              }));
        },
      },
    ]);
  })(),
  Ki = `fedramp-moderate`;
function qi() {
  var e,
    t = globalThis,
    n = t.MICROS_PERIMETER || t.UNSAFE_ATL_CONTEXT_BOUNDARY;
  if (n) return n === Ki;
  var r =
    (e = t.location) == null || (e = e.hostname) == null
      ? void 0
      : e.match(
          /atlassian-us-gov-mod\.(com|net)|atlassian-us-gov\.(com|net)|atlassian-fex\.(com|net)|atlassian-stg-fedm\.(com|net)/,
        );
  return r ? r.length > 0 : !1;
}
var Ji = {
    Error: `Error`,
    LocalOverride: `LocalOverride`,
    Unrecognized: `Unrecognized`,
    Uninitialized: `Uninitialized`,
    NetworkNotModified: `NetworkNotModified`,
    Network: `Network`,
    InvalidBootstrap: `InvalidBootstrap`,
    Bootstrap: `Bootstrap`,
    Cache: `Cache`,
    Unknown: `Unknown`,
  },
  Yi = { Development: `development`, Staging: `staging`, Production: `production` },
  Xi = { COMMERCIAL: `commercial`, FEDRAMP_MODERATE: `fedramp-moderate` },
  Zi = [
    `api`,
    `disableCurrentPageLogging`,
    `loggingIntervalMillis`,
    `loggingBufferMaxSize`,
    `localMode`,
    `eventLoggingApi`,
    `eventLoggingApiForRetries`,
    `disableLocalStorage`,
    `ignoreWindowUndefined`,
    `disableAllLogging`,
    `initTimeoutMs`,
    `disableNetworkKeepalive`,
    `overrideStableID`,
    `disableErrorLogging`,
    `disableAutoMetricsLogging`,
  ];
function Qi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function $i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qi(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ea = function (e) {
    return $i({ perimeter: qi() ? Xi.FEDRAMP_MODERATE : Xi.COMMERCIAL }, e);
  },
  ta = function (e, t) {
    if (!e && !t) return !0;
    if (!e || !t) return !1;
    var n = Object.entries(e),
      r = Object.entries(t);
    if (n.length !== r.length) return !1;
    var i = function (e, t) {
      var n = f(e, 1)[0],
        r = f(t, 1)[0];
      return n.localeCompare(r);
    };
    (n.sort(i), r.sort(i));
    for (var a = 0; a < n.length; a++) if (f(n[a], 2)[1] !== f(r[a], 2)[1]) return !1;
    return !0;
  },
  na = function (e, t) {
    var n = { customIDs: e, custom: t };
    return (e.atlassianAccountId && (n.userID = e.atlassianAccountId), n);
  };
function ra(e) {
  var t = [...arguments].slice(1);
  if (!t.length) return e;
  var n = t.shift();
  if (n == null) return ra.apply(void 0, [e].concat(l(t)));
  for (var r = 0, i = Object.entries(n); r < i.length; r++) {
    var a = f(i[r], 2),
      o = a[0],
      s = a[1],
      c = e[o],
      u = s && C(s) === `object` && !Array.isArray(s),
      d = c && C(c) === `object` && !Array.isArray(c);
    u && d ? (e[o] = ra(c, s)) : (e[o] = s);
  }
  return ra.apply(void 0, [e].concat(l(t)));
}
var ia = function (e) {
    var t = e.api,
      n = e.disableCurrentPageLogging,
      r = e.loggingIntervalMillis,
      i = e.loggingBufferMaxSize,
      a = e.localMode,
      o = e.eventLoggingApi,
      s = e.eventLoggingApiForRetries,
      c = e.disableLocalStorage,
      l = e.ignoreWindowUndefined,
      u = e.disableAllLogging;
    return (
      e.initTimeoutMs,
      e.disableNetworkKeepalive,
      e.overrideStableID,
      e.disableErrorLogging,
      e.disableAutoMetricsLogging,
      $i(
        $i({}, d(e, Zi)),
        {},
        {
          networkConfig: {
            api: t,
            logEventUrl: o ? o + `rgstr` : void 0,
            logEventFallbackUrls: s ? [s] : void 0,
            preventAllNetworkTraffic: a || (!l && typeof window > `u`),
          },
          includeCurrentPageUrlWithEvents: !n,
          loggingIntervalMs: r,
          loggingBufferMaxSize: i,
          disableStorage: c === void 0 ? a : c,
          disableLogging: u === void 0 ? a : u,
        },
      )
    );
  },
  aa = Object.entries(Ji).map(function (e) {
    var t = f(e, 2),
      n = t[0],
      r = t[1];
    return [n.toLowerCase(), r];
  }),
  oa = function (e) {
    var t = e.reason.toLowerCase();
    return {
      reason:
        aa.find(function (e) {
          var n = f(e, 1)[0];
          return t.includes(n);
        })?.[1] ?? Ji.Unknown,
      time: e.receivedAt ?? Date.now(),
    };
  },
  sa = function (e) {
    return e.map(function (e) {
      return typeof e == `string` ? { gate: e } : e;
    });
  },
  ca = (function () {
    function e(t, n, r, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : ``,
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null;
      (h(this, e),
        (this.value = n),
        (this._name = t),
        (this._ruleID = r),
        (this._secondaryExposures = a),
        (this._allocatedExperimentName = o),
        (this._evaluationDetails = i),
        (this._onDefaultValueFallback = s));
    }
    return u(
      e,
      [
        {
          key: `get`,
          value: function (e, t, n) {
            var r,
              i = this.getValue(e, t);
            if (i == null) return t;
            var a = Array.isArray(t) ? `array` : C(t),
              o = Array.isArray(i) ? `array` : C(i);
            if (n) {
              var s;
              return n(i)
                ? (this.fireExposure(e), i)
                : ((s = this._onDefaultValueFallback) == null || s.call(this, this, e, a, o), t);
            }
            return t == null || a === o
              ? (this.fireExposure(e), i)
              : ((r = this._onDefaultValueFallback) == null || r.call(this, this, e, a, o), t);
          },
        },
        {
          key: `getValue`,
          value: function (e, t) {
            return e == null
              ? this.value
              : ((t ??= null), this.value[e] == null ? t : (this.fireExposure(e), this.value[e]));
          },
        },
        {
          key: `fireExposure`,
          value: function (e) {
            this.experiment && this.experiment.get(e);
          },
        },
      ],
      [
        {
          key: `fromExperiment`,
          value: function (t) {
            var n = new e(
              t.name,
              t.value,
              t.ruleID,
              oa(t.details),
              sa(t.__evaluation?.secondary_exposures ?? []),
              t.groupName ?? void 0,
            );
            return ((n.experiment = t), n);
          },
        },
      ],
    );
  })(),
  la = (function () {
    function e(t, n, r, i) {
      var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null,
        o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [],
        c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : ``,
        l = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [];
      (h(this, e),
        (this._logParameterFunction = a),
        (this._name = t),
        (this._value = JSON.parse(JSON.stringify(n ?? {}))),
        (this._ruleID = r ?? ``),
        (this._evaluationDetails = i),
        (this._secondaryExposures = o),
        (this._undelegatedSecondaryExposures = s),
        (this._allocatedExperimentName = c),
        (this._explicitParameters = l));
    }
    return u(
      e,
      [
        {
          key: `get`,
          value: function (e, t, n) {
            var r = this,
              i = this._value[e];
            if (i == null) return t;
            var a = function () {
              return (r._logLayerParameterExposure(e), i);
            };
            return n
              ? n(i)
                ? a()
                : t
              : t == null || (C(i) === C(t) && Array.isArray(t) === Array.isArray(i))
                ? a()
                : t;
          },
        },
        {
          key: `getValue`,
          value: function (e, t) {
            t ??= null;
            var n = this._value[e];
            return (n != null && this._logLayerParameterExposure(e), n ?? t);
          },
        },
        {
          key: `_logLayerParameterExposure`,
          value: function (e) {
            var t;
            (t = this._logParameterFunction) == null || t.call(this, this, e);
          },
        },
      ],
      [
        {
          key: `fromLayer`,
          value: function (t) {
            return new e(
              t.name,
              t.__value,
              t.ruleID,
              oa(t.details),
              function (e, n) {
                return t.get(n);
              },
              sa(t.__evaluation?.secondary_exposures ?? []),
              sa(t.__evaluation?.undelegated_secondary_exposures ?? []),
              t.__evaluation?.allocated_experiment_name,
              t.__evaluation?.explicit_parameters,
            );
          },
        },
      ],
    );
  })(),
  ua = `0.0.0-development`;
function da(e, t, n) {
  return ((t = b(t)), m(e, fa() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function fa() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (fa = function () {
    return !!e;
  })();
}
var pa = (function (e) {
    function t(e) {
      return (h(this, t), da(this, t, [e]));
    }
    return (_(t, e), u(t));
  })(S(Error)),
  G = e(ji());
function ma(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ha(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ma(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ma(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ga = 5e3,
  _a = `https://api.atlassian.com/flags`,
  va = `https://api.stg.atlassian.com/flags`,
  ya = `https://api.dev.atlassian.com/flags`,
  ba = `https://api.stg.atlassian-us-gov-mod.com/flags`,
  xa = `https://api.atlassian-us-gov-mod.com/flags`,
  Sa = `https://atlassian-statsig-proxy-archetype.atl-paas.%s.atl-ic.net`,
  Ca = `oasis-stg.com/flags`,
  wa = `atlassian-isolated.net/flags`,
  Ta = `/gateway/api/flags`,
  Ea = (function () {
    function e() {
      h(this, e);
    }
    return u(e, null, [
      {
        key: `fetchClientSdk`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t) {
              var n, r;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.targetApp),
                          (r = `/api/v2/frontend/clientSdkKey/${n}`),
                          (e.prev = 2),
                          (e.next = 5),
                          this.fetchRequest(r, `GET`, t)
                        );
                      case 5:
                        return e.abrupt(`return`, e.sent);
                      case 8:
                        if (((e.prev = 8), (e.t0 = e.catch(2)), !(e.t0 instanceof Error))) {
                          e.next = 12;
                          break;
                        }
                        throw e.t0;
                      case 12:
                        throw Error(`Failed to retrieve client sdk key`);
                      case 13:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
                [[2, 8]],
              );
            }),
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `fetchExperimentValues`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = { identifiers: n, customAttributes: r, targetApp: t.targetApp }),
                          (e.prev = 1),
                          (e.next = 4),
                          this.fetchRequest(`/api/v2/frontend/experimentValues`, `POST`, t, i)
                        );
                      case 4:
                        return e.abrupt(`return`, e.sent);
                      case 7:
                        if (((e.prev = 7), (e.t0 = e.catch(1)), !(e.t0 instanceof Error))) {
                          e.next = 11;
                          break;
                        }
                        throw e.t0;
                      case 11:
                        throw Error(`Failed to retrieve experiment values`);
                      case 12:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 7]],
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `handleResponseError`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t) {
              var n;
              return G.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.ok) {
                        e.next = 5;
                        break;
                      }
                      return ((e.next = 3), t.text());
                    case 3:
                      throw (
                        (n = e.sent),
                        new pa(
                          `Non 2xx response status received, status: ${t.status}, body: ${JSON.stringify(n)}`,
                        )
                      );
                    case 5:
                      if (t.status !== 204) {
                        e.next = 7;
                        break;
                      }
                      throw new pa(`Unexpected 204 response`);
                    case 7:
                    case `end`:
                      return e.stop();
                  }
              }, e);
            }),
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `extractResponseBody`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t) {
              var n;
              return G.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.next = 2), t.text());
                    case 2:
                      return ((n = e.sent), e.abrupt(`return`, JSON.parse(n)));
                    case 4:
                    case `end`:
                      return e.stop();
                  }
              }, e);
            }),
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `getBaseUrl`,
        value: function (e) {
          var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          if (t) return Ta;
          if (n === Xi.FEDRAMP_MODERATE)
            switch (e) {
              case Yi.Production:
                return xa;
              case Yi.Staging:
                return ba;
              default:
                throw Error(`Invalid environment "${e}" for "${n}" perimeter`);
            }
          else if (n === Xi.COMMERCIAL)
            switch (e) {
              case Yi.Development:
                return ya;
              case Yi.Staging:
                var i = this.getApiUrl(r);
                return i === null ? va : i;
              default:
                var a = this.getApiUrl(r);
                return a === null ? _a : a;
            }
          else throw Error(`Invalid perimeter "${n}"`);
        },
      },
      {
        key: `fetchRequest`,
        value: (function () {
          var t = W(
            G.default.mark(function t(n, r, i, a) {
              var o, s, c, l, u;
              return G.default.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (o = e.getBaseUrl(
                            i.environment,
                            i.useGatewayURL,
                            i.perimeter,
                            i.isolationContextId,
                          )),
                          (s = i.fetchTimeoutMs || ga),
                          AbortSignal.timeout
                            ? (c = AbortSignal.timeout(s))
                            : AbortController &&
                              ((l = new AbortController()),
                              (c = l.signal),
                              setTimeout(function () {
                                return l.abort();
                              }, s)),
                          (t.next = 5),
                          fetch(
                            `${o}${n}`,
                            ha(
                              {
                                method: r,
                                headers: {
                                  "Content-Type": `application/json`,
                                  "X-Client-Name": `feature-gate-js-client`,
                                  "X-Client-Version": ua,
                                  "X-API-KEY": i.apiKey,
                                },
                                signal: c,
                              },
                              a && { body: JSON.stringify(a) },
                            ),
                          )
                        );
                      case 5:
                        return ((u = t.sent), (t.next = 8), this.handleResponseError(u));
                      case 8:
                        return ((t.next = 10), this.extractResponseBody(u));
                      case 10:
                        return t.abrupt(`return`, t.sent);
                      case 11:
                      case `end`:
                        return t.stop();
                    }
                },
                t,
                this,
              );
            }),
          );
          function n(e, n, r, i) {
            return t.apply(this, arguments);
          }
          return n;
        })(),
      },
      {
        key: `getApiUrl`,
        value: function (e) {
          var t = this.getWindowLocation();
          if (t === void 0) return e ? Sa.replace(`%s`, e) : null;
          var n = t.protocol,
            r = t.hostname,
            i = r.match(/([^.]+)\.oasis-stg\.com$/);
          if (i) return `${n}//api.${i[1]}.${Ca}`;
          var a = r.match(/([^.]+)\.atlassian-isolated\.net$/);
          return a ? `${n}//api.${a[1]}.${wa}` : null;
        },
      },
      {
        key: `getWindowLocation`,
        value: function () {
          if (typeof window < `u` && window.location) return window.location;
        },
      },
    ]);
  })(),
  Da = Bi();
function Oa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ka(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Oa(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Oa(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Aa(e, t, n) {
  return ((t = b(t)), m(e, ja() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function ja() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ja = function () {
    return !!e;
  })();
}
function Ma(e, t, n, r) {
  var i = hi(b(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var Na = (function (e) {
    function t() {
      var e;
      return (
        h(this, t),
        (e = Aa(this, t, [`NoFetchDataAdapter`, `nofetch`])),
        x(e, `bootstrapResult`, null),
        e
      );
    }
    return (
      _(t, e),
      u(t, [
        {
          key: `setBootstrapData`,
          value: function (e) {
            this.bootstrapResult = e
              ? {
                  source: `Bootstrap`,
                  data: JSON.stringify(e),
                  receivedAt: Date.now(),
                  stableID: Da.StableID.get(this._getSdkKey()),
                  fullUserHash: null,
                }
              : null;
          },
        },
        {
          key: `prefetchData`,
          value: (function () {
            var e = W(
              G.default.mark(function e(t, n) {
                return G.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case `end`:
                        return e.stop();
                    }
                }, e);
              }),
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: `getDataAsync`,
          value: (function () {
            var e = W(
              G.default.mark(function e(t, n, r) {
                return G.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            `return`,
                            this.bootstrapResult &&
                              ka(
                                ka({}, this.bootstrapResult),
                                {},
                                { fullUserHash: (0, Da._getFullUserHash)(n) },
                              ),
                          );
                        case 1:
                        case `end`:
                          return e.stop();
                      }
                  },
                  e,
                  this,
                );
              }),
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: `getDataSync`,
          value: function (e) {
            return (
              this.bootstrapResult &&
              ka(ka({}, this.bootstrapResult), {}, { fullUserHash: (0, Da._getFullUserHash)(e) })
            );
          },
        },
        {
          key: `_fetchFromNetwork`,
          value: (function () {
            var e = W(
              G.default.mark(function e(t, n, r) {
                return G.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(`return`, null);
                      case 1:
                      case `end`:
                        return e.stop();
                    }
                }, e);
              }),
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: `_getCacheKey`,
          value: function (e) {
            var t = (0, Da._getStorageKey)(this._getSdkKey(), e);
            return `${Da.DataAdapterCachePrefix}.${this._cacheSuffix}.${t}`;
          },
        },
        {
          key: `_isCachedResultValidFor204`,
          value: function (e, t) {
            return !1;
          },
        },
        {
          key: `setDataLegacy`,
          value: function (e, n) {
            Ma(t, `setData`, this, 3)([e, n]);
          },
        },
        {
          key: `toJSON`,
          value: function () {
            var e = ka({}, this);
            return (delete e._options, delete e._inMemoryCache, delete e.bootstrapResult, e);
          },
        },
      ])
    );
  })(Da.DataAdapterCore),
  Pa = w();
function Fa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ia(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fa(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fa(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function La(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Ra(e)) || (t && e && typeof e.length == `number`)) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
    o = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return ((o = e.done), e);
    },
    e: function (e) {
      ((s = !0), (a = e));
    },
    f: function () {
      try {
        o || n.return == null || n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function Ra(e, t) {
  if (e) {
    if (typeof e == `string`) return za(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? za(e, t)
          : void 0
    );
  }
}
function za(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Ba = `LocalOverride:Recognized`,
  Va = `STATSIG_OVERRIDES`,
  Ha = `STATSIG_JS_LITE_LOCAL_OVERRIDES`,
  Ua = function () {
    return { gates: {}, configs: {}, layers: {} };
  },
  Wa = function (e, t) {
    return t + `:` + e;
  },
  Ga = (function () {
    function e(t) {
      (h(this, e),
        (this._overrides = Ua()),
        (this._djb2Map = new Map()),
        (this._localStorageKey = t));
    }
    return u(e, [
      {
        key: `parseStoredOverrides`,
        value: function (e) {
          try {
            var t = window.localStorage.getItem(e);
            return t ? JSON.parse(t) : Ua();
          } catch {
            return Ua();
          }
        },
      },
      {
        key: `mergeOverrides`,
        value: function () {
          for (var e = Ua(), t = [...arguments], n = 0, r = t; n < r.length; n++) {
            for (var i = r[n], a = 0, o = Object.entries((s = i.gates) ?? {}); a < o.length; a++) {
              var s,
                c = f(o[a], 2),
                l = c[0],
                u = c[1];
              e.gates[l] = u;
            }
            for (var d = 0, p = Object.entries((m = i.configs) ?? {}); d < p.length; d++) {
              var m,
                h = f(p[d], 2),
                g = h[0],
                _ = h[1];
              e.configs[g] = _;
            }
            for (var v = 0, y = Object.entries((b = i.layers) ?? {}); v < y.length; v++) {
              var b,
                x = f(y[v], 2),
                S = x[0],
                C = x[1];
              e.layers[S] = C;
            }
          }
          return e;
        },
      },
      {
        key: `initFromStoredOverrides`,
        value: function () {
          var e = this.mergeOverrides(
            this._overrides,
            this.parseStoredOverrides(Ha),
            this.parseStoredOverrides(this._localStorageKey),
          );
          try {
            window.localStorage.removeItem(Ha);
          } catch {}
          for (var t = 0, n = Object.values(e); t < n.length; t++) {
            var r = n[t],
              i = new Set(Object.keys(r)),
              a = La(i),
              o;
            try {
              for (a.s(); !(o = a.n()).done; ) {
                var s = o.value,
                  c = (0, Pa._DJB2)(s);
                i.has(c) && delete r[c];
              }
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
          }
          this.applyOverrides(e);
        },
      },
      {
        key: `saveOverrides`,
        value: function () {
          try {
            window.localStorage.setItem(this._localStorageKey, JSON.stringify(this._overrides));
          } catch {}
        },
      },
      {
        key: `getOverrides`,
        value: function () {
          return this.mergeOverrides(this._overrides);
        },
      },
      {
        key: `applyOverrides`,
        value: function (e) {
          var t = Ia(Ia({}, Ua()), e);
          this._djb2Map.clear();
          for (var n = 0, r = Object.entries(t); n < r.length; n++)
            for (
              var i = f(r[n], 2), a = i[0], o = i[1], s = 0, c = Object.entries(o);
              s < c.length;
              s++
            ) {
              var l = f(c[s], 2),
                u = l[0],
                d = l[1];
              this._djb2Map.set(Wa((0, Pa._DJB2)(u), a), d);
            }
          this._overrides = t;
        },
      },
      {
        key: `setOverrides`,
        value: function (e) {
          (this.applyOverrides(e), this.saveOverrides());
        },
      },
      {
        key: `overrideGate`,
        value: function (e, t) {
          ((this._overrides.gates[e] = t),
            this._djb2Map.set(Wa((0, Pa._DJB2)(e), `gates`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeGateOverride`,
        value: function (e) {
          (delete this._overrides.gates[e],
            this._djb2Map.delete(Wa((0, Pa._DJB2)(e), `gates`)),
            this.saveOverrides());
        },
      },
      {
        key: `getGateOverride`,
        value: function (e, t) {
          var n = this._overrides.gates[e.name] ?? this._djb2Map.get(Wa(e.name, `gates`));
          return n == null
            ? null
            : Ia(Ia({}, e), {}, { value: n, details: Ia(Ia({}, e.details), {}, { reason: Ba }) });
        },
      },
      {
        key: `overrideDynamicConfig`,
        value: function (e, t) {
          ((this._overrides.configs[e] = t),
            this._djb2Map.set(Wa((0, Pa._DJB2)(e), `configs`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeDynamicConfigOverride`,
        value: function (e) {
          (delete this._overrides.configs[e],
            this._djb2Map.delete(Wa((0, Pa._DJB2)(e), `configs`)),
            this.saveOverrides());
        },
      },
      {
        key: `getDynamicConfigOverride`,
        value: function (e, t) {
          return this._getConfigOverride(e, this._overrides.configs);
        },
      },
      {
        key: `overrideExperiment`,
        value: function (e, t) {
          ((this._overrides.configs[e] = t),
            this._djb2Map.set(Wa((0, Pa._DJB2)(e), `configs`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeExperimentOverride`,
        value: function (e) {
          (delete this._overrides.configs[e],
            this._djb2Map.delete(Wa((0, Pa._DJB2)(e), `configs`)),
            this.saveOverrides());
        },
      },
      {
        key: `getExperimentOverride`,
        value: function (e, t) {
          return this._getConfigOverride(e, this._overrides.configs);
        },
      },
      {
        key: `overrideLayer`,
        value: function (e, t) {
          ((this._overrides.layers[e] = t),
            this._djb2Map.set(Wa((0, Pa._DJB2)(e), `layers`), t),
            this.saveOverrides());
        },
      },
      {
        key: `removeLayerOverride`,
        value: function (e) {
          (delete this._overrides.layers[e],
            this._djb2Map.delete(Wa((0, Pa._DJB2)(e), `layers`)),
            this.saveOverrides());
        },
      },
      {
        key: `removeAllOverrides`,
        value: function () {
          this._overrides = Ua();
          try {
            window.localStorage.removeItem(this._localStorageKey);
          } catch {}
        },
      },
      {
        key: `getLayerOverride`,
        value: function (e, t) {
          var n = this._overrides.layers[e.name] ?? this._djb2Map.get(Wa(e.name, `layers`));
          return n == null
            ? null
            : Ia(
                Ia({}, e),
                {},
                {
                  __value: n,
                  get: (0, Pa._makeTypedGet)(e.name, n),
                  details: Ia(Ia({}, e.details), {}, { reason: Ba }),
                },
              );
        },
      },
      {
        key: `_getConfigOverride`,
        value: function (e, t) {
          var n = t[e.name] ?? this._djb2Map.get(Wa(e.name, `configs`));
          return n == null
            ? null
            : Ia(
                Ia({}, e),
                {},
                {
                  value: n,
                  get: (0, Pa._makeTypedGet)(e.name, n),
                  details: Ia(Ia({}, e.details), {}, { reason: Ba }),
                },
              );
        },
      },
    ]);
  })(),
  Ka = [`sdkKey`, `environment`, `updateUserCompletionCallback`, `perimeter`];
function qa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qa(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qa(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ya = `client-default-key`,
  Xa = `https://xp.atlassian.com/v1/rgstr`,
  Za = (function () {
    function e() {
      var t = this,
        n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        r = n.localStorageKey,
        i = r === void 0 ? Va : r,
        a = n.overrideAdapter;
      (h(this, e),
        x(this, `initPromise`, null),
        x(this, `initCompleted`, !1),
        x(this, `initWithDefaults`, !1),
        x(this, `hasCheckGateErrorOccurred`, !1),
        x(this, `hasGetExperimentErrorOccurred`, !1),
        x(this, `hasGetExperimentValueErrorOccurred`, !1),
        x(this, `hasGetLayerErrorOccurred`, !1),
        x(this, `hasGetLayerValueErrorOccurred`, !1),
        x(this, `subscriptions`, new Gi()),
        x(this, `dataAdapter`, new Na()),
        x(this, `statsigValuesUpdated`, function () {
          (t.user && t.statsigClient.updateUserSync(t.user, { disableBackgroundCacheRefresh: !0 }),
            t.subscriptions.anyUpdated());
        }),
        (this.overrideAdapter = a || new Ga(i)));
    }
    return u(e, [
      {
        key: `initialize`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i = this,
                a,
                o;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((a = ea(t)), !this.initPromise)) {
                          e.next = 4;
                          break;
                        }
                        return (
                          ta(a, this.initOptions) ||
                            console.warn(
                              `Feature Gates client already initialized with different options. New options were not applied.`,
                            ),
                          e.abrupt(`return`, this.initPromise)
                        );
                      case 4:
                        return (
                          (o = performance.now()),
                          (this.initOptions = a),
                          (this.initPromise = this.init(a, n, r)
                            .then(function () {
                              ((i.initCompleted = !0), (i.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var e = performance.now() - o;
                              i.fireClientEvent(o, e, `initialize`, i.initCompleted, a.apiKey);
                            })),
                          e.abrupt(`return`, this.initPromise)
                        );
                      case 8:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `initializeWithProvider`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r, i) {
              var a = this,
                o,
                s;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((o = ea(t)), !this.initPromise)) {
                          e.next = 4;
                          break;
                        }
                        return (
                          ta(o, this.initOptions) ||
                            console.warn(
                              `Feature Gates client already initialized with different options. New options were not applied.`,
                            ),
                          e.abrupt(`return`, this.initPromise)
                        );
                      case 4:
                        return (
                          (s = performance.now()),
                          (this.initOptions = o),
                          (this.provider = n),
                          this.provider.setClientVersion(ua),
                          this.provider.setApplyUpdateCallback &&
                            this.provider.setApplyUpdateCallback(
                              this.applyUpdateCallback.bind(this),
                            ),
                          (this.initPromise = this.initWithProvider(o, n, r, i)
                            .then(function () {
                              ((a.initCompleted = !0), (a.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var e = performance.now() - s;
                              a.fireClientEvent(
                                s,
                                e,
                                `initializeWithProvider`,
                                a.initCompleted,
                                n.getApiKey ? n.getApiKey() : void 0,
                              );
                            })),
                          e.abrupt(`return`, this.initPromise)
                        );
                      case 11:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n, r, i) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `applyUpdateCallback`,
        value: function (e) {
          try {
            (this.initCompleted || this.initWithDefaults) &&
              (this.assertInitialized(this.statsigClient),
              this.dataAdapter.setBootstrapData(e.experimentValues),
              this.dataAdapter.setData(JSON.stringify(e.experimentValues)),
              this.statsigValuesUpdated());
          } catch (e) {
            console.warn(`Error when attempting to apply update`, e);
          }
        },
      },
      {
        key: `fireClientEvent`,
        value: function (e, t, n, r) {
          var i,
            a = this,
            o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
          (i = this.initOptions.analyticsWebClient) == null ||
            i
              .then(function (i) {
                var s = Ja(
                  {
                    targetApp: a.initOptions.targetApp,
                    clientVersion: `0.0.0-development`,
                    success: r,
                    startTime: e,
                    totalTime: t,
                  },
                  o && { apiKey: o },
                );
                i.sendOperationalEvent({
                  action: n,
                  actionSubject: `featureGatesClient`,
                  attributes: s,
                  tags: [`measurement`],
                  source: `@atlaskit/feature-gate-js-client`,
                });
              })
              .catch(function (e) {
                a.initOptions.environment !== Yi.Production &&
                  console.error(`Analytics web client promise did not resolve`, e);
              });
        },
      },
      {
        key: `initializeFromValues`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i = this,
                a,
                o,
                s,
                c = arguments;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((a = c.length > 3 && c[3] !== void 0 ? c[3] : {}),
                          (o = ea(t)),
                          !this.initPromise)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (
                          ta(o, this.initOptions) ||
                            console.warn(
                              `Feature Gates client already initialized with different options. New options were not applied.`,
                            ),
                          e.abrupt(`return`, this.initPromise)
                        );
                      case 5:
                        return (
                          Object.prototype.hasOwnProperty.call(a, `has_updates`) ||
                            (a.has_updates = !0),
                          (s = performance.now()),
                          (this.initOptions = o),
                          (this.initPromise = this.initFromValues(o, n, r, a)
                            .then(function () {
                              ((i.initCompleted = !0), (i.initWithDefaults = !0));
                            })
                            .finally(function () {
                              var e = performance.now() - s;
                              i.fireClientEvent(s, e, `initializeFromValues`, i.initCompleted);
                            })),
                          e.abrupt(`return`, this.initPromise)
                        );
                      case 10:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `assertInitialized`,
        value: function (e) {
          if (!e) throw Error(`Client must be initialized before using this method`);
        },
      },
      {
        key: `updateUser`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i, a;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (i = ea(t)),
                          (a = function () {
                            return Ea.fetchExperimentValues(i, n, r).then(function (e) {
                              return {
                                experimentValues: e.experimentValues,
                                customAttributesFromFetch: e.customAttributes,
                              };
                            });
                          }),
                          (e.next = 5),
                          this.updateUserUsingInitializeValuesProducer(a, n, r)
                        );
                      case 5:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `updateUserWithProvider`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n) {
              var r = this;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.provider)) {
                          e.next = 3;
                          break;
                        }
                        throw Error(
                          `Cannot update user using provider as the client was not initialised with a provider`,
                        );
                      case 3:
                        return ((e.next = 5), this.provider.setProfile(this.initOptions, t, n));
                      case 5:
                        return (
                          (e.next = 7),
                          this.updateUserUsingInitializeValuesProducer(
                            function () {
                              return r.provider.getExperimentValues();
                            },
                            t,
                            n,
                          )
                        );
                      case 7:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `updateUserWithValues`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n) {
              var r,
                i,
                a = arguments;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = a.length > 2 && a[2] !== void 0 ? a[2] : {}),
                          this.assertInitialized(this.statsigClient),
                          (i = function () {
                            return Promise.resolve({
                              experimentValues: r,
                              customAttributesFromFetch: n,
                            });
                          }),
                          (e.next = 5),
                          this.updateUserUsingInitializeValuesProducer(i, t, n)
                        );
                      case 5:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `initializeCalled`,
        value: function () {
          return this.initPromise != null;
        },
      },
      {
        key: `initializeCompleted`,
        value: function () {
          return this.initCompleted;
        },
      },
      {
        key: `waitUntilInitializeCompleted`,
        value: (function () {
          var e = W(
            G.default.mark(function e() {
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (this.initPromise) {
                          e.next = 2;
                          break;
                        }
                        throw Error(
                          `The client must be initialized before you can wait until initialized.`,
                        );
                      case 2:
                        if (!this.initCompleted) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt(`return`);
                      case 4:
                        return ((e.next = 6), this.initPromise);
                      case 6:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `checkGate`,
        value: function (e) {
          var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var n = t.fireGateExposure,
              r = n === void 0 ? !0 : n;
            return this.statsigClient.checkGate(e, { disableExposureLog: !r });
          } catch (t) {
            return (
              (this.hasCheckGateErrorOccurred ||=
                (console.warn({
                  msg: `An error has occurred checking the feature gate. Only the first occurrence of this error is logged.`,
                  gateName: e,
                  error: t,
                }),
                !0)),
              !1
            );
          }
        },
      },
      {
        key: `isGateExist`,
        value: function (e) {
          try {
            return (
              this.assertInitialized(this.statsigClient),
              !this.statsigClient
                .getFeatureGate(e, { disableExposureLog: !0 })
                .details.reason.includes(`Unrecognized`)
            );
          } catch (e) {
            return (console.error(`Error occurred when trying to check FeatureGate: ${e}`), !0);
          }
        },
      },
      {
        key: `isExperimentExist`,
        value: function (e) {
          try {
            return (
              this.assertInitialized(this.statsigClient),
              !this.statsigClient
                .getExperiment(e, { disableExposureLog: !0 })
                .details.reason.includes(`Unrecognized`)
            );
          } catch (e) {
            return (console.error(`Error occurred when trying to check Experiment: ${e}`), !0);
          }
        },
      },
      {
        key: `manuallyLogGateExposure`,
        value: function (e) {
          (this.assertInitialized(this.statsigClient), this.statsigClient.checkGate(e));
        },
      },
      {
        key: `getExperiment`,
        value: function (e) {
          var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var n = t.fireExperimentExposure,
              r = n === void 0 ? !0 : n;
            return ca.fromExperiment(
              this.statsigClient.getExperiment(e, { disableExposureLog: !r }),
            );
          } catch (t) {
            return (
              (this.hasGetExperimentErrorOccurred ||=
                (console.warn({
                  msg: `An error has occurred getting the experiment. Only the first occurrence of this error is logged.`,
                  experimentName: e,
                  error: t,
                }),
                !0)),
              new ca(e, {}, ``, { time: Date.now(), reason: Ji.Error })
            );
          }
        },
      },
      {
        key: `getExperimentValue`,
        value: function (e, t, n) {
          var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getExperiment(e, r);
          try {
            var a = r.typeGuard;
            return i.get(t, n, a);
          } catch (t) {
            return (
              (this.hasGetExperimentValueErrorOccurred ||=
                (console.warn({
                  msg: `An error has occurred getting the experiment value. Only the first occurrence of this error is logged.`,
                  experimentName: e,
                  defaultValue: n,
                  options: r,
                  error: t,
                }),
                !0)),
              n
            );
          }
        },
      },
      {
        key: `manuallyLogExperimentExposure`,
        value: function (e) {
          (this.assertInitialized(this.statsigClient), this.statsigClient.getExperiment(e));
        },
      },
      {
        key: `manuallyLogLayerExposure`,
        value: function (e, t) {
          var n;
          (this.assertInitialized(this.statsigClient),
            (n = this.statsigClient.getLayer(e)) == null || n.get(t));
        },
      },
      {
        key: `shutdownStatsig`,
        value: function () {
          (this.assertInitialized(this.statsigClient), this.statsigClient.shutdown());
        },
      },
      {
        key: `overrideGate`,
        value: function (e, t) {
          if ((this.overrideAdapter.overrideGate(e, t), this.user)) {
            var n;
            (n = this.statsigClient) == null ||
              n.updateUserSync(this.user, { disableBackgroundCacheRefresh: !0 });
          }
          this.statsigValuesUpdated();
        },
      },
      {
        key: `clearGateOverride`,
        value: function (e) {
          (this.overrideAdapter.removeGateOverride(e), this.statsigValuesUpdated());
        },
      },
      {
        key: `overrideConfig`,
        value: function (e, t) {
          (this.overrideAdapter.overrideDynamicConfig(e, t), this.statsigValuesUpdated());
        },
      },
      {
        key: `clearConfigOverride`,
        value: function (e) {
          (this.overrideAdapter.removeDynamicConfigOverride(e), this.statsigValuesUpdated());
        },
      },
      {
        key: `setOverrides`,
        value: function (e) {
          (this.overrideAdapter.setOverrides(e), this.statsigValuesUpdated());
        },
      },
      {
        key: `getOverrides`,
        value: function () {
          return this.overrideAdapter.getOverrides();
        },
      },
      {
        key: `clearAllOverrides`,
        value: function () {
          (this.overrideAdapter.removeAllOverrides(), this.statsigValuesUpdated());
        },
      },
      {
        key: `isCurrentUser`,
        value: function (e, t) {
          return ta(this.currentIdentifiers, e) && ta(this.currentAttributes, t);
        },
      },
      {
        key: `onGateUpdated`,
        value: function (e, t) {
          var n = this,
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.subscriptions.onGateUpdated(
            e,
            function (i) {
              var a = r.fireGateExposure;
              (a === void 0 || a) && n.manuallyLogGateExposure(e);
              try {
                t(i);
              } catch (t) {
                console.warn(`Error calling callback for gate ${e} with value ${i}`, t);
              }
            },
            this.checkGate.bind(this),
            r,
          );
        },
      },
      {
        key: `onExperimentValueUpdated`,
        value: function (e, t, n, r) {
          var i = this,
            a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
          return this.subscriptions.onExperimentValueUpdated(
            e,
            t,
            n,
            function (t) {
              var n = a.fireExperimentExposure;
              (n === void 0 || n) && i.manuallyLogExperimentExposure(e);
              try {
                r(t);
              } catch (n) {
                console.warn(`Error calling callback for experiment ${e} with value ${t}`, n);
              }
            },
            this.getExperimentValue.bind(this),
            a,
          );
        },
      },
      {
        key: `onAnyUpdated`,
        value: function (e) {
          return this.subscriptions.onAnyUpdated(e);
        },
      },
      {
        key: `init`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i, a, o, s, c, l, u, d;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((i = Ja({}, t)), !t.localMode)) {
                          e.next = 5;
                          break;
                        }
                        return ((e.next = 4), this.initFromValues(i, n, r));
                      case 4:
                        return e.abrupt(`return`);
                      case 5:
                        return (
                          (e.prev = 5),
                          (s = Ea.fetchClientSdk(t).then(function (e) {
                            return (i.sdkKey = e.clientSdkKey);
                          })),
                          (c = Ea.fetchExperimentValues(t, n, r)),
                          (e.next = 10),
                          Promise.all([s, c])
                        );
                      case 10:
                        ((l = e.sent),
                          (u = f(l, 2)),
                          (d = u[1]),
                          (a = d.experimentValues),
                          (o = d.customAttributes),
                          (e.next = 24));
                        break;
                      case 17:
                        return (
                          (e.prev = 17),
                          (e.t0 = e.catch(5)),
                          e.t0 instanceof Error &&
                            console.error(
                              `Error occurred when trying to fetch the Feature Gates client values, error: ${e.t0 === null || e.t0 === void 0 ? void 0 : e.t0.message}`,
                            ),
                          console.warn(`Initialising Statsig client without values`),
                          (e.next = 23),
                          this.initFromValues(i, n, r)
                        );
                      case 23:
                        throw e.t0;
                      case 24:
                        return e.abrupt(`return`, this.initFromValues(i, n, o, a));
                      case 25:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
                [[5, 17]],
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `initWithProvider`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r, i) {
              var a, o, s, c, l, u, d, p;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = Ja(Ja({}, t), {}, { disableCurrentPageLogging: !0 })),
                          (e.prev = 1),
                          (e.next = 4),
                          n.setProfile(t, r, i)
                        );
                      case 4:
                        return (
                          (c = n.getClientSdkKey().then(function (e) {
                            return (a.sdkKey = e);
                          })),
                          (l = n.getExperimentValues()),
                          (e.next = 8),
                          Promise.all([c, l])
                        );
                      case 8:
                        ((u = e.sent),
                          (d = f(u, 2)),
                          (p = d[1]),
                          (o = p.experimentValues),
                          (s = p.customAttributesFromFetch),
                          (e.next = 22));
                        break;
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.t0 = e.catch(1)),
                          e.t0 instanceof Error &&
                            console.error(
                              `Error occurred when trying to fetch the Feature Gates client values, error: ${e.t0 === null || e.t0 === void 0 ? void 0 : e.t0.message}`,
                            ),
                          console.warn(`Initialising Statsig client without values`),
                          (e.next = 21),
                          this.initFromValues(a, r, i)
                        );
                      case 21:
                        throw e.t0;
                      case 22:
                        return e.abrupt(`return`, this.initFromValues(a, r, s, o));
                      case 23:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 15]],
              );
            }),
          );
          function t(t, n, r, i) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `initFromValues`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i,
                a,
                o,
                s,
                c,
                l,
                u,
                f,
                p = arguments;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = p.length > 3 && p[3] !== void 0 ? p[3] : {}),
                          this.overrideAdapter.initFromStoredOverrides(),
                          (this.currentIdentifiers = n),
                          (this.currentAttributes = r),
                          (o = ia(t)),
                          (o.sdkKey ||= Ya),
                          ((i = o.networkConfig) != null && i.logEventUrl) ||
                            (o.networkConfig = Ja(
                              Ja({}, o.networkConfig),
                              {},
                              { logEventUrl: Xa },
                            )),
                          o.perimeter === Xi.FEDRAMP_MODERATE && (o.disableLogging = !0),
                          (s = o.sdkKey),
                          (c = o.environment),
                          o.updateUserCompletionCallback,
                          o.perimeter,
                          (l = d(o, Ka)),
                          (u = na(n, r)),
                          (this.user = ra({}, a.user, u)),
                          (f = Ja(
                            Ja({}, l),
                            {},
                            {
                              environment: { tier: c },
                              includeCurrentPageUrlWithEvents: !1,
                              dataAdapter: this.dataAdapter,
                              overrideAdapter: this.overrideAdapter,
                              logEventCompressionMode: Da.LogEventCompressionMode.Forced,
                            },
                          )),
                          n.stableId
                            ? Da.StableID.setOverride(n.stableId, s)
                            : (f.disableStableID = !0),
                          (e.prev = 13),
                          (this.statsigClient = new Da.StatsigClient(s, this.user, f)),
                          this.dataAdapter.setBootstrapData(a),
                          (e.next = 18),
                          this.statsigClient.initializeAsync()
                        );
                      case 18:
                        e.next = 30;
                        break;
                      case 20:
                        return (
                          (e.prev = 20),
                          (e.t0 = e.catch(13)),
                          e.t0 instanceof Error &&
                            console.error(
                              `Error occurred when trying to initialise the Statsig client, error: ${e.t0 === null || e.t0 === void 0 ? void 0 : e.t0.message}`,
                            ),
                          console.warn(
                            `Initialising Statsig client with default sdk key and without values`,
                          ),
                          (this.statsigClient = new Da.StatsigClient(Ya, this.user, f)),
                          this.dataAdapter.setBootstrapData(),
                          (e.next = 28),
                          this.statsigClient.initializeAsync()
                        );
                      case 28:
                        throw ((this.initWithDefaults = !0), e.t0);
                      case 30:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
                [[13, 20]],
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `updateUserUsingInitializeValuesProducer`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i = this,
                a,
                o,
                s;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((this.assertInitialized(this.statsigClient), this.initPromise)) {
                          e.next = 3;
                          break;
                        }
                        throw Error(
                          `The client must be initialized before you can update the user.`,
                        );
                      case 3:
                        if (!this.isCurrentUser(n, r)) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt(`return`, this.initPromise);
                      case 5:
                        return (
                          (a = this.initPromise),
                          (e.prev = 6),
                          (e.next = 9),
                          this.initPromise
                        );
                      case 9:
                        e.next = 13;
                        break;
                      case 11:
                        ((e.prev = 11), (e.t0 = e.catch(6)));
                      case 13:
                        return (
                          (o = t()),
                          (s = this.updateStatsigClientUser(o, n, r)),
                          (this.initPromise = s.catch(
                            W(
                              G.default.mark(function e() {
                                return G.default.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (((i.initPromise = a), !i.provider)) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          (e.next = 4),
                                          i.provider.setProfile(
                                            i.initOptions,
                                            i.currentIdentifiers,
                                            i.currentAttributes,
                                          )
                                        );
                                      case 4:
                                      case `end`:
                                        return e.stop();
                                    }
                                }, e);
                              }),
                            ),
                          )),
                          e.abrupt(`return`, s)
                        );
                      case 17:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
                [[6, 11]],
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `updateStatsigClientUser`,
        value: (function () {
          var e = W(
            G.default.mark(function e(t, n, r) {
              var i, a, o, s, c, l, u, d, f, p;
              return G.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          this.assertInitialized(this.statsigClient),
                          (e.prev = 1),
                          (e.next = 4),
                          t
                        );
                      case 4:
                        ((o = e.sent),
                          (c = na(n, o.customAttributesFromFetch)),
                          (s = ra({}, o.experimentValues.user, c)),
                          (e.next = 14));
                        break;
                      case 9:
                        throw (
                          (e.prev = 9),
                          (e.t0 = e.catch(1)),
                          (d = e.t0 instanceof Error ? e.t0.message : JSON.stringify(e.t0)),
                          (l = (u = this.initOptions).updateUserCompletionCallback) == null ||
                            l.call(u, !1, d),
                          e.t0
                        );
                      case 14:
                        if (
                          ((f = !0),
                          (p = null),
                          (e.prev = 16),
                          this.dataAdapter.setBootstrapData(o.experimentValues),
                          (this.user = s),
                          !this.user)
                        ) {
                          e.next = 22;
                          break;
                        }
                        return ((e.next = 22), this.statsigClient.updateUserAsync(this.user));
                      case 22:
                        e.next = 28;
                        break;
                      case 24:
                        ((e.prev = 24), (e.t1 = e.catch(16)), (f = !1), (p = String(e.t1)));
                      case 28:
                        if (
                          ((i = this.initOptions) == null ||
                            (a = i.updateUserCompletionCallback) == null ||
                            a.call(i, f, p),
                          !f)
                        ) {
                          e.next = 35;
                          break;
                        }
                        ((this.currentIdentifiers = n),
                          (this.currentAttributes = r),
                          this.subscriptions.anyUpdated(),
                          (e.next = 36));
                        break;
                      case 35:
                        throw Error(`Failed to update user. An unexpected error occured.`);
                      case 36:
                      case `end`:
                        return e.stop();
                    }
                },
                e,
                this,
                [
                  [1, 9],
                  [16, 24],
                ],
              );
            }),
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: `getPackageVersion`,
        value: function () {
          return ua;
        },
      },
      {
        key: `getLayer`,
        value: function (e) {
          var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          try {
            this.assertInitialized(this.statsigClient);
            var n = t.fireLayerExposure,
              r = n === void 0 ? !0 : n;
            return la.fromLayer(this.statsigClient.getLayer(e, { disableExposureLog: !r }));
          } catch (t) {
            return (
              (this.hasGetLayerErrorOccurred ||=
                (console.warn({
                  msg: `An error has occurred getting the layer. Only the first occurrence of this error is logged.`,
                  layerName: e,
                  error: t,
                }),
                !0)),
              la.fromLayer((0, Da._makeLayer)(e, { reason: `Error` }, null))
            );
          }
        },
      },
      {
        key: `getLayerValue`,
        value: function (e, t, n) {
          var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            i = this.getLayer(e, r);
          try {
            var a = r.typeGuard;
            return i.get(t, n, a);
          } catch (t) {
            return (
              (this.hasGetLayerValueErrorOccurred ||=
                (console.warn({
                  msg: `An error has occurred getting the layer value. Only the first occurrence of this error is logged.`,
                  layerName: e,
                  defaultValue: n,
                  options: r,
                  error: t,
                }),
                !0)),
              n
            );
          }
        },
      },
    ]);
  })(),
  K,
  q = (function () {
    function e() {
      h(this, e);
    }
    return u(e, null, [
      {
        key: `isGateExists`,
        value: function (e) {
          return this.client.isGateExist(e);
        },
      },
      {
        key: `isExperimentExists`,
        value: function (e) {
          return this.client.isExperimentExist(e);
        },
      },
    ]);
  })();
((K = q),
  x(q, `client`, new Za()),
  x(q, `hasCheckGateErrorOccurred`, !1),
  x(q, `hasGetExperimentValueErrorOccurred`, !1),
  x(q, `checkGate`, function (e, t) {
    try {
      if (
        typeof window < `u` &&
        window.__CRITERION__ &&
        typeof window.__CRITERION__.getFeatureFlagOverride == `function`
      ) {
        var n = window.__CRITERION__.getFeatureFlagOverride(e);
        if (n !== void 0) return n;
      }
    } catch (t) {
      K.hasCheckGateErrorOccurred ||
        (console.warn({
          msg: `An error has occurred checking the feature gate from criterion override. Only the first occurrence of this error is logged.`,
          gateName: e,
          error: t,
        }),
        (K.hasCheckGateErrorOccurred = !0));
    }
    return K.client.checkGate(e, t);
  }),
  x(q, `getExperimentValue`, function (e, t, n, r) {
    try {
      if (
        typeof window < `u` &&
        window.__CRITERION__ &&
        typeof window.__CRITERION__.getExperimentValueOverride == `function`
      ) {
        var i = window.__CRITERION__.getExperimentValueOverride(e, t);
        if (i != null) return i;
      }
    } catch (t) {
      return (
        K.hasGetExperimentValueErrorOccurred ||
          (console.warn({
            msg: `An error has occurred getting the experiment value from criterion override. Only the first occurrence of this error is logged.`,
            experimentName: e,
            defaultValue: n,
            options: r,
            error: t,
          }),
          (K.hasGetExperimentValueErrorOccurred = !0)),
        n
      );
    }
    return K.client.getExperimentValue(e, t, n, r);
  }),
  x(q, `initializeCalled`, K.client.initializeCalled.bind(K.client)),
  x(q, `initializeCompleted`, K.client.initializeCompleted.bind(K.client)),
  x(q, `waitUntilInitializeCompleted`, K.client.waitUntilInitializeCompleted.bind(K.client)),
  x(q, `initialize`, K.client.initialize.bind(K.client)),
  x(q, `initializeWithProvider`, K.client.initializeWithProvider.bind(K.client)),
  x(q, `initializeFromValues`, K.client.initializeFromValues.bind(K.client)),
  x(q, `manuallyLogGateExposure`, K.client.manuallyLogGateExposure.bind(K.client)),
  x(q, `getExperiment`, K.client.getExperiment.bind(K.client)),
  x(q, `manuallyLogExperimentExposure`, K.client.manuallyLogExperimentExposure.bind(K.client)),
  x(q, `manuallyLogLayerExposure`, K.client.manuallyLogLayerExposure.bind(K.client)),
  x(q, `shutdownStatsig`, K.client.shutdownStatsig.bind(K.client)),
  x(q, `overrideGate`, K.client.overrideGate.bind(K.client)),
  x(q, `clearGateOverride`, K.client.clearGateOverride.bind(K.client)),
  x(q, `overrideConfig`, K.client.overrideConfig.bind(K.client)),
  x(q, `clearConfigOverride`, K.client.clearConfigOverride.bind(K.client)),
  x(q, `setOverrides`, K.client.setOverrides.bind(K.client)),
  x(q, `getOverrides`, K.client.getOverrides.bind(K.client)),
  x(q, `clearAllOverrides`, K.client.clearAllOverrides.bind(K.client)),
  x(q, `isCurrentUser`, K.client.isCurrentUser.bind(K.client)),
  x(q, `onGateUpdated`, K.client.onGateUpdated.bind(K.client)),
  x(q, `onExperimentValueUpdated`, K.client.onExperimentValueUpdated.bind(K.client)),
  x(q, `onAnyUpdated`, K.client.onAnyUpdated.bind(K.client)),
  x(q, `updateUser`, K.client.updateUser.bind(K.client)),
  x(q, `updateUserWithProvider`, K.client.updateUserWithProvider.bind(K.client)),
  x(q, `updateUserWithValues`, K.client.updateUserWithValues.bind(K.client)),
  x(q, `getPackageVersion`, K.client.getPackageVersion.bind(K.client)),
  x(q, `getLayer`, K.client.getLayer.bind(K.client)),
  x(q, `getLayerValue`, K.client.getLayerValue.bind(K.client)));
var Qa = q;
if (typeof window < `u`)
  if (window.__FEATUREGATES_JS__ === void 0) window.__FEATUREGATES_JS__ = q;
  else {
    var $a, eo;
    Qa = window.__FEATUREGATES_JS__;
    var to =
      (($a = Qa) == null || (eo = $a.getPackageVersion) == null ? void 0 : eo.call($a)) ||
      `4.10.0 or earlier`;
    if (to !== `0.0.0-development`) {
      var no = `Multiple versions of FeatureGateClients found on the current page.
      The currently bound version is ${to} when module version ${ua} was loading.`;
      console.warn(no);
    }
  }
var ro = Qa,
  io,
  ao,
  oo =
    (globalThis == null || (io = globalThis.process) == null || (io = io.env) == null
      ? void 0
      : io.JEST_WORKER_ID) === void 0 &&
    (globalThis == null || (ao = globalThis.process) == null || (ao = ao.env) == null
      ? void 0
      : ao.NODE_ENV) !== `production`,
  so = function () {
    var e;
    oo && (e = console).debug.apply(e, arguments);
  },
  co = `@atlaskit/platform-feature-flags`,
  lo = `__PLATFORM_FEATURE_FLAGS__`,
  uo = typeof process < `u` && !0,
  fo = uo ? {}.ENABLE_PLATFORM_FF === `true` : !1,
  po = uo ? {}.STORYBOOK_ENABLE_PLATFORM_FF === `true` : !1,
  mo = fo || po,
  ho = { booleanResolver: void 0 },
  go = typeof window < `u` ? window : globalThis;
go[lo] = go.__PLATFORM_FEATURE_FLAGS__ || ho;
function _o(e) {
  if (mo)
    return (
      so(
        `[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.`,
        co,
        e,
      ),
      !0
    );
  try {
    if (
      go.__PLATFORM_FEATURE_FLAGS__?.booleanResolver === void 0 ||
      go.__PLATFORM_FEATURE_FLAGS__?.booleanResolver === null
    )
      return ro.checkGate(e);
    var t = go.__PLATFORM_FEATURE_FLAGS__?.booleanResolver(e);
    return typeof t == `boolean`
      ? t
      : (console.warn(`${e} resolved to a non-boolean value, returning false for safety`), !1);
  } catch {
    return !1;
  }
}
function J(e) {
  return _o(e);
}
var vo = (0, T.createContext)({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  yo = function () {
    return (0, T.useContext)(vo);
  },
  bo = function (e) {
    var t = (0, T.useRef)(e);
    return ((t.current = e), t);
  };
function xo(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function So(e, t) {
  var n = (0, T.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    r = (0, T.useRef)(!0),
    i = (0, T.useRef)(n),
    a =
      r.current || (t && i.current.inputs && xo(t, i.current.inputs))
        ? i.current
        : { inputs: t, result: e() };
  return (
    (0, T.useEffect)(
      function () {
        ((r.current = !1), (i.current = a));
      },
      [a],
    ),
    a.result
  );
}
function Co(e, t) {
  return So(function () {
    return e;
  }, t);
}
function wo() {
  var e = yo();
  return {
    createAnalyticsEvent: Co(
      function (t) {
        return new yi({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: t,
        });
      },
      [e],
    ),
  };
}
function To(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? To(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : To(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Do(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = wo().createAnalyticsEvent,
    l = bo(s),
    u = bo(t);
  return (0, T.useCallback)(
    function (e) {
      var t = c({
          action: n,
          actionSubject: i || r,
          attributes: { componentName: r, packageName: a, packageVersion: o },
        }),
        s = Eo({ componentName: r, packageName: a, packageVersion: o }, l.current);
      t.context.push(s);
      var d = t.clone();
      (d && d.fire(`atlaskit`), u.current(e, t));
    },
    [n, r, i, a, o, c, l, u],
  );
}
function Oo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Oo(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Oo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ao(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = wo().createAnalyticsEvent,
    c = bo(o),
    l = bo(t);
  return (0, T.useCallback)(
    function () {
      var e = s({
          action: n,
          actionSubject: r,
          attributes: { componentName: r, packageName: i, packageVersion: a },
        }),
        t = ko({ componentName: r, packageName: i, packageVersion: a }, c.current);
      e.context.push(t);
      var o = e.clone();
      (o && o.fire(`atlaskit`), l.current(e));
    },
    [n, r, i, a, s, c, l],
  );
}
function jo(e, t) {
  var n = (0, T.useRef)(!0);
  (0, T.useEffect)(
    function () {
      (e && n.current && t && e.current && e.current.focus(), (n.current = !1));
    },
    [t, e],
  );
}
var Mo = 2,
  No = U({
    outline: `var(--ds-border-width-focused, 2px) solid var(--ds-border-focused, #4688EC)`,
    outlineOffset: Mo,
  }),
  Po = U({
    outlineColor: `var(--ds-border-focused, #4688EC)`,
    outlineOffset: -Mo,
    outlineStyle: `solid`,
    outlineWidth: `var(--ds-border-width-focused, 2px)`,
  }),
  Fo = U({
    "&:focus": No,
    "&:focus-visible": No,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid` },
    },
  }),
  Io = U({
    "&:focus": Po,
    "&:focus-visible": Po,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid`, outlineOffset: `-1px` },
    },
  }),
  Lo = (0, T.memo)(function (e) {
    var t = e.children,
      n = e.isInset,
      r = e.focus,
      i = r === void 0 ? (n ? Io : Fo) : r === `on` && (n ? Po : No);
    return oi(ui, null, function (e) {
      var n = e.css,
        r = e.cx;
      return T.Children.only(
        i ? (0, T.cloneElement)(t, { className: r([n(i), t.props.className]) }) : t,
      );
    });
  });
Lo.displayName = `FocusRing`;
var Ro = (0, T.createContext)(null);
function zo(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Bo = 9;
function Vo(e) {
  e.keyCode !== Bo && zo(e);
}
var Ho = {
    onMouseDownCapture: zo,
    onMouseUpCapture: zo,
    onKeyDownCapture: Vo,
    onKeyUpCapture: Vo,
    onTouchStartCapture: zo,
    onTouchEndCapture: zo,
    onPointerDownCapture: zo,
    onPointerUpCapture: zo,
    onClickCapture: zo,
    onClick: zo,
  },
  Uo = {};
function Wo(e) {
  return e.isInteractive ? Uo : Ho;
}
function Go(e) {
  var t = e.spacing;
  return U({
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 1,
    flexShrink: 1,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
  });
}
function Ko(e) {
  var t = e.hasOverlay;
  return U({ opacity: +!t, transition: `opacity 0.3s` });
}
function qo(e) {
  var t = e.spacing;
  return U({
    display: `flex`,
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: `center`,
    fontSize: 0,
    lineHeight: 0,
    userSelect: `none`,
  });
}
function Y(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(` `)) return e[0];
  let t = {};
  for (let n of e) {
    if (!n) continue;
    let e = n.split(` `);
    for (let n of e) {
      let e = n.startsWith(`_`) ? n.slice(0, Jo) : n;
      t[e] = n;
    }
  }
  let n = ``;
  for (let e in t) n += t[e] + ` `;
  if (n) return n.trimEnd();
}
var Jo,
  Yo = n(() => {
    Jo = 5;
  });
function Xo(e, t, n) {
  return e == null ? `var(--c-, )` : t ? (n ? n + e + t : e + t) : e;
}
var Zo = n(() => {}),
  Qo = n(() => {
    (Yo(), Zo());
  }),
  X = n(() => {
    Qo();
  });
X();
var $o = function (e) {
  var t = e.children,
    n = e.testId,
    r = e.role,
    i = e.id;
  return T.createElement(
    `span`,
    {
      id: i,
      "data-testid": n,
      role: r,
      className: Y([
        `_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c`,
      ]),
    },
    t,
  );
};
$o.displayName = `VisuallyHidden`;
var es = function (e) {
    return e && (0, T.isValidElement)(e) && e.type === $o;
  },
  ts = {
    position: `absolute`,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  ns = [
    `analyticsContext`,
    `appearance`,
    `autoFocus`,
    `buttonCss`,
    `children`,
    `className`,
    `href`,
    `component`,
    `iconAfter`,
    `iconBefore`,
    `interactionName`,
    `isDisabled`,
    `isSelected`,
    `onBlur`,
    `onClick`,
    `onFocus`,
    `onMouseDown`,
    `overlay`,
    `shouldFitContainer`,
    `spacing`,
    `tabIndex`,
    `type`,
    `testId`,
  ],
  rs = { "> *": { pointerEvents: `none` } },
  is = U({
    "--ds--button--new-icon-padding-end": `var(--ds-space-025, 2px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-050, 4px)`,
    marginInlineStart: `var(--ds-space-negative-025, -2px)`,
  }),
  as = U({
    "--ds--button--new-icon-padding-end": `var(--ds-space-050, 4px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-025, 2px)`,
    marginInlineEnd: `var(--ds-space-negative-025, -2px)`,
  }),
  os = function (e, t) {
    return !e || es(e) ? null : t;
  },
  ss = function (e, t) {
    return es(e) ? e : e ? oi(`span`, { css: t }, e) : null;
  },
  cs = T.forwardRef(function (e, t) {
    var n = e.analyticsContext,
      r = e.appearance,
      i = r === void 0 ? `default` : r,
      a = e.autoFocus,
      o = a === void 0 ? !1 : a,
      s = e.buttonCss,
      c = e.children,
      l = e.className,
      u = e.href,
      f = e.component,
      p = f === void 0 ? (u ? `a` : `button`) : f,
      m = e.iconAfter,
      h = e.iconBefore,
      g = e.interactionName,
      _ = e.isDisabled,
      v = _ === void 0 ? !1 : _,
      y = e.isSelected,
      b = y === void 0 ? !1 : y,
      x = e.onBlur,
      S = e.onClick,
      C = S === void 0 ? mn : S,
      w = e.onFocus,
      E = e.onMouseDown,
      D = E === void 0 ? mn : E,
      O = e.overlay;
    e.shouldFitContainer;
    var k = e.spacing,
      A = k === void 0 ? `default` : k,
      j = e.tabIndex,
      M = j === void 0 ? 0 : j,
      N = e.type,
      P = N === void 0 ? (u ? void 0 : `button`) : N,
      ee = e.testId,
      te = d(e, ns),
      ne = (0, T.useRef)(),
      re = (0, T.useCallback)(
        function (e) {
          if (((ne.current = e), t != null)) {
            if (typeof t == `function`) {
              t(e);
              return;
            }
            t.current = e;
          }
        },
        [ne, t],
      );
    jo(ne, o);
    var ie = (0, T.useContext)(Ro),
      ae = Do({
        fn: (0, T.useCallback)(
          function (e, t) {
            (ie && ie.tracePress(g, e.timeStamp), C(e, t));
          },
          [C, ie, g],
        ),
        action: `clicked`,
        componentName: `button`,
        packageName: `@atlaskit/button`,
        packageVersion: `23.11.3`,
        analyticsData: n,
      }),
      oe = (0, T.useCallback)(
        function (e) {
          (e.preventDefault(), D(e));
        },
        [D],
      );
    (0, T.useEffect)(
      function () {
        var e = ne.current;
        v && e && e === document.activeElement && e.blur();
      },
      [v],
    );
    var se = !!O,
      F = U(Ko({ hasOverlay: se })),
      ce = !v && !se,
      le = {};
    return (
      (b || v || i === `warning`) &&
        (le = {
          "[data-theme] & circle": {
            stroke: `${b || v ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-warning-inverse, #292A2E)`} !important`,
          },
        }),
      oi(
        Lo,
        null,
        oi(
          p,
          z(
            {},
            te,
            {
              ref: re,
              className: l,
              css: [s, ce ? null : rs],
              "data-has-overlay": se ? !0 : void 0,
              "data-testid": ee,
              disabled: v,
              href: ce ? u : void 0,
              onBlur: x,
              onClick: ae,
              onFocus: w,
              onMouseDown: oe,
              tabIndex: v ? -1 : M,
              type: P,
            },
            Wo({ isInteractive: ce }),
          ),
          h ? oi(`span`, { css: [F, qo({ spacing: A }), os(c, is)] }, h) : null,
          ss(c, [F, Go({ spacing: A })]),
          m ? oi(`span`, { css: [F, qo({ spacing: A }), os(c, as)] }, m) : null,
          O ? oi(`span`, { css: [ts, le] }, O) : null,
        ),
      )
    );
  });
function ls(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ls(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ls(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ds = 8,
  fs = [`default`, `primary`, `danger`, `warning`],
  ps = { default: `${32 / 14}em`, compact: `${24 / 14}em`, none: `auto` },
  ms = { default: ps.default, compact: ps.compact, none: `inherit` },
  hs = { default: `0 ${ds + ds / 4}px`, compact: `0 ${ds + ds / 4}px`, none: `0` },
  gs = { compact: `0 ${ds / 4}px`, default: `0 ${ds / 4}px`, none: `0` },
  _s = { default: `middle`, compact: `middle`, none: `baseline` },
  vs = {
    borderRadius: `inherit`,
    inset: `var(--ds-space-0, 0px)`,
    borderStyle: `solid`,
    borderWidth: `var(--ds-border-width, 1px)`,
    pointerEvents: `none`,
    position: `absolute`,
  },
  ys = {
    background: `var(--ds-background-neutral-subtle, #00000000)`,
    color: `var(--ds-text, #292A2E)`,
    "&::after": us(us({}, vs), {}, { content: `""`, borderColor: `var(--ds-border, #0B120E24)` }),
    "&:hover": { background: `var(--ds-background-neutral-hovered, #0B120E24)` },
    "&:active": { background: `var(--ds-background-neutral-pressed, #080F214A)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-neutral-subtle, #00000000)`,
    },
    "&:disabled[disabled]": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:hover": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:active": { background: `var(--ds-background-neutral-subtle, #00000000)` },
  },
  bs = {
    background: `var(--ds-background-brand-bold, #1868DB)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-brand-bold-hovered, #1558BC)` },
    "&:active": { background: `var(--ds-background-brand-bold-pressed, #144794)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-brand-bold, #1868DB)`,
    },
  },
  xs = {
    background: `transparent`,
    color: `var(--ds-link, #1868DB)`,
    "&:hover": { color: `var(--ds-link, #1868DB)`, textDecoration: `underline` },
    "&:active": { color: `var(--ds-link-pressed, #1558BC)`, textDecoration: `underline` },
  },
  Ss = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": { background: `var(--ds-background-neutral-subtle-hovered, #0515240F)` },
    "&:active": { background: `var(--ds-background-neutral-subtle-pressed, #0B120E24)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: `transparent` },
  },
  Cs = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": {
      background: `transparent`,
      color: `var(--ds-text-subtle, #505258)`,
      textDecoration: `underline`,
    },
    "&:active": {
      background: `transparent`,
      color: `var(--ds-text, #292A2E)`,
      textDecoration: `underline`,
    },
  },
  ws = {
    background: `var(--ds-background-warning-bold, #FBC828)`,
    color: `var(--ds-text-warning-inverse, #292A2E)`,
    "&:hover": { background: `var(--ds-background-warning-bold-hovered, #FCA700)` },
    "&:active": { background: `var(--ds-background-warning-bold-pressed, #F68909)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-warning-bold, #FBC828)`,
    },
  },
  Ts = {
    background: `var(--ds-background-danger-bold, #C9372C)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-danger-bold-hovered, #AE2E24)` },
    "&:active": { background: `var(--ds-background-danger-bold-pressed, #872821)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-danger-bold, #C9372C)`,
    },
  },
  Es = {
    background: `var(--ds-background-selected, #E9F2FE)`,
    color: `var(--ds-text-selected, #1868DB)`,
    "&:not([disabled])::after": us(
      us({}, vs),
      {},
      { content: `""`, borderColor: `var(--ds-border-selected, #1868DB)` },
    ),
  },
  Ds = { '&[data-has-overlay="true"]': { cursor: `default`, textDecoration: `none` } };
function Os(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return us(
    us(
      {
        alignItems: `baseline`,
        borderWidth: 0,
        borderRadius: J(`platform-dst-shape-theme-default`)
          ? `var(--ds-radius-medium, 6px)`
          : `var(--ds-radius-small, 3px)`,
        boxSizing: `border-box`,
        display: `inline-flex`,
        fontSize: `inherit`,
        fontStyle: `normal`,
        fontFamily: `inherit`,
        fontWeight: `var(--ds-font-weight-medium, 500)`,
        maxWidth: `100%`,
        position: `relative`,
        textAlign: `center`,
        textDecoration: `none`,
        transition: `background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)`,
        whiteSpace: `nowrap`,
        cursor: `pointer`,
        height: ps[n],
        lineHeight: ms[n],
        padding: a ? gs[n] : hs[n],
        verticalAlign: _s[n],
        width: i ? `100%` : `auto`,
        justifyContent: `center`,
      },
      r
        ? Es
        : us(
            us(
              us(
                us(
                  us(
                    us(
                      us(us({}, t === `default` && ys), t === `primary` && bs),
                      t === `link` && xs,
                    ),
                    t === `subtle` && Ss,
                  ),
                  t === `subtle-link` && Cs,
                ),
                t === `warning` && ws,
              ),
              t === `danger` && Ts,
            ),
            {},
            {
              "&[disabled]": {
                color: `var(--ds-text-disabled, #080F214A)`,
                backgroundColor: fs.includes(t)
                  ? `var(--ds-background-disabled, #17171708)`
                  : `transparent`,
                cursor: `not-allowed`,
                textDecoration: `none`,
                "&:hovered": {
                  backgroundColor: fs.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
                "&:active": {
                  backgroundColor: fs.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
              },
            },
            Ds,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function ks(e) {
  var t = e.children,
    n = e.iconBefore,
    r = e.iconAfter;
  return es(t) ? !0 : t ? !1 : !!((n && !r) || (!n && r));
}
var As = [
    `appearance`,
    `children`,
    `iconBefore`,
    `iconAfter`,
    `isSelected`,
    `onMouseDown`,
    `onMouseUp`,
    `shouldFitContainer`,
    `spacing`,
  ],
  js = typeof navigator < `u` && navigator.userAgent.toLowerCase().indexOf(`firefox`) > -1,
  Ms = T.memo(
    T.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `default` : n,
        i = e.children,
        a = e.iconBefore,
        o = e.iconAfter,
        s = e.isSelected,
        c = s === void 0 ? !1 : s,
        l = e.onMouseDown,
        u = l === void 0 ? mn : l,
        p = e.onMouseUp,
        m = p === void 0 ? mn : p,
        h = e.shouldFitContainer,
        g = h === void 0 ? !1 : h,
        _ = e.spacing,
        v = _ === void 0 ? `default` : _,
        y = d(e, As),
        b = ks({ children: i, iconBefore: a, iconAfter: o }),
        x = f((0, T.useState)(!1), 2),
        S = x[0],
        C = x[1],
        w = (0, T.useCallback)(
          function (e) {
            (u(e), js && C(!0));
          },
          [u, C],
        ),
        E = (0, T.useCallback)(
          function (e) {
            (m(e), js && C(!1));
          },
          [m, C],
        ),
        D = (0, T.useMemo)(
          function () {
            return Os({
              appearance: r,
              spacing: v,
              isSelected: c,
              shouldFitContainer: g,
              isOnlySingleIcon: b,
            });
          },
          [r, v, c, g, b],
        );
      return T.createElement(
        cs,
        z({}, y, {
          ref: t,
          appearance: r,
          buttonCss: D,
          children: i,
          "data-firefox-is-active": S ? !0 : void 0,
          iconAfter: o,
          iconBefore: a,
          isSelected: c,
          onMouseDown: w,
          onMouseUp: E,
          spacing: v,
        }),
      );
    }),
  );
Ms.displayName = `Button`;
var Ns = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
X();
function Ps(e) {
  return e === `inherit` ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-inverse, #FFFFFF)`;
}
var Fs = {
    rotateStyles: `_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o`,
    loadInStyles: `_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw`,
    wrapperStyles: `_1e0c116y _s7n4nkob`,
    circleStyles: `_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz`,
  },
  Is = typeof window > `u` ? T.useEffect : T.useLayoutEffect,
  Ls = T.memo(
    T.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `inherit` : n,
        i = e.delay,
        a = i === void 0 ? 0 : i,
        o = e.interactionName,
        s = e.label,
        c = e.size,
        l = c === void 0 ? `medium` : c,
        u = e.testId,
        d = typeof l == `number` ? l : Ns[l],
        f = `${a}ms`,
        p = Ps(r),
        m = (0, T.useContext)(Ro);
      return (
        Is(
          function () {
            if (m != null) return m.hold(o);
          },
          [m, o],
        ),
        T.createElement(
          `span`,
          {
            "data-testid": u ? `${u}-wrapper` : `spinner-wrapper`,
            style: { animationDelay: f, width: d, height: d },
            className: Y([Fs.wrapperStyles, Fs.rotateStyles]),
          },
          T.createElement(
            `svg`,
            {
              height: d,
              width: d,
              viewBox: `0 0 16 16`,
              xmlns: `http://www.w3.org/2000/svg`,
              "data-testid": u,
              ref: t,
              "aria-label": s || void 0,
              style: { animationDelay: f },
              role: s ? `img` : `none`,
              className: Y([Fs.loadInStyles]),
            },
            T.createElement(`circle`, {
              cx: `8`,
              cy: `8`,
              r: `7`,
              style: { stroke: p },
              className: Y([Fs.circleStyles]),
            }),
          ),
        )
      );
    }),
  ),
  Rs = {
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
  zs = function (e, t, n) {
    return e + (n && isFinite(n) ? (t - 1) * n : 0);
  },
  Bs = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = e.destination,
      a = e.sourceIndex;
    if (!i) return t;
    var o = zs(a, n, r),
      s = zs(i.index, n, r),
      c = t.slice(),
      l = f(c.splice(o, 1), 1)[0];
    return (c.splice(s, 0, l), c);
  },
  Vs = function (e) {
    !e ||
      !e.cells ||
      e.cells.forEach(function (e) {
        if (e.isSortable && !e.key)
          try {
            throw Error(`isSortable can't be set to true, if the 'key' prop is missing.`);
          } catch (e) {
            console.error(e);
          }
      });
  },
  Hs = `DESC`,
  Us = `small`,
  Ws = `large`,
  Gs = 0.22,
  Ks = function (e, t, n) {
    return !t || !n || !e.length ? [] : e.slice((t - 1) * n, t * n);
  },
  qs = function (e, t) {
    if (
      e &&
      !(
        t &&
        t.cells
          .map(function (e) {
            return e.key;
          })
          .includes(e)
      )
    )
      try {
        throw Error(`Cell with ${e} key not found in head.`);
      } catch (e) {
        console.error(e);
      }
  };
X();
var Js = function (e) {
  var t = e.children;
  return T.createElement(
    `caption`,
    { className: Y([`_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03`]) },
    t,
  );
};
X();
var Ys = function (e) {
  var t = e.children,
    n = e.testId;
  return T.createElement(
    `div`,
    {
      "data-testid": n && `${n}--empty-view-container`,
      className: Y([
        `_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o`,
      ]),
    },
    t,
  );
};
X();
var Xs = function (e) {
  var t = e.children,
    n = e.testId;
  return T.createElement(
    `div`,
    { "data-testid": n && `${n}--empty-view-with-fixed-height`, className: Y([`_4t3i1jdh`]) },
    t,
  );
};
X();
var Zs = function (e) {
  var t = e.children,
    n = e.testId;
  return T.createElement(
    `div`,
    { "data-testid": n && `${n}--pagination--container`, className: Y([`_1e0c1txw _1bah1h6o`]) },
    t,
  );
};
X();
var Qs = [`isFixedSize`, `hasDataRow`, `children`, `testId`, `isLoading`],
  $s = (0, T.forwardRef)(function (e, t) {
    var n = e.isFixedSize,
      r = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      s = d(e, Qs);
    return T.createElement(
      `table`,
      z(
        {
          inert: o ? `` : void 0,
          style: {
            "--local-dynamic-table-hover-bg": `var(--ds-background-neutral-subtle-hovered, #0515240F)`,
            "--local-dynamic-table-highlighted-bg": `var(--ds-background-selected, #E9F2FE)`,
            "--local-dynamic-table-hover-highlighted-bg": `var(--ds-background-selected-hovered, #CFE1FD)`,
            "--local-dynamic-table-row-focus-outline": `var(--ds-border-focused, #4688EC)`,
          },
          ref: t,
        },
        s,
        {
          "data-testid": a && `${a}--table`,
          className: Y([
            `_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp`,
            n && `_1kqm1n9t`,
            r && `_179r1uh4`,
          ]),
        },
      ),
      i,
    );
  }),
  ec = [`rows`, `head`, `sortKey`, `sortOrder`, `rowsPerPage`, `page`, `forwardedRef`];
function tc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tc(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rc(e, t, n) {
  return ((t = b(t)), m(e, ic() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function ic() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ic = function () {
    return !!e;
  })();
}
var ac = function (e, t, n) {
    for (var r = 0; r < e.length; r++) if (t.cells[r] && t.cells[r]?.key === n) return e[r]?.key;
  },
  oc = function (e, t, n, r) {
    if (!n || !e) return t;
    if (!t) return [];
    var i = r === `ASC` ? 1 : -1,
      a = new Intl.Collator(void 0, { numeric: !0, sensitivity: `accent` });
    return Array.from(t).sort(function (t, r) {
      var o = ac(t.cells, e, n),
        s = ac(r.cells, e, n);
      if (o === void 0 || s === void 0) return i;
      if (C(o) !== C(s)) {
        if (typeof o == `number`) return -1;
        if (typeof s == `number`) return 1;
        if (typeof o == `string`) return -1;
        if (typeof s == `string`) return 1;
      }
      return typeof o == `string` && typeof s == `string`
        ? i * a.compare(o, s)
        : (!o && o !== 0) || o < s
          ? -i
          : (!s && s !== 0) || o > s
            ? i
            : o === s
              ? 0
              : 1;
    });
  };
function sc(e) {
  var t = (function (t) {
    function n() {
      var e;
      h(this, n);
      var t = [...arguments];
      return ((e = rc(this, n, [].concat(t))), x(e, `state`, { pageRows: [] }), e);
    }
    return (
      _(n, t),
      u(
        n,
        [
          {
            key: `componentDidMount`,
            value: function () {
              this.props.onPageRowsUpdate && this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (e, t) {
              this.props.onPageRowsUpdate &&
                this.state.pageRows !== t.pageRows &&
                this.props.onPageRowsUpdate(this.state.pageRows);
            },
          },
          {
            key: `render`,
            value: function () {
              var t = this.props;
              t.rows;
              var n = t.head;
              (t.sortKey, t.sortOrder, t.rowsPerPage, t.page);
              var r = t.forwardedRef,
                i = d(t, ec);
              return T.createElement(
                e,
                z({ pageRows: this.state.pageRows, head: n }, i, { ref: r }),
              );
            },
          },
        ],
        [
          {
            key: `getDerivedStateFromProps`,
            value: function (e, t) {
              var n = e.rows,
                r = e.head,
                i = e.sortKey,
                a = e.sortOrder,
                o = e.page,
                s = e.rowsPerPage,
                c = e.isTotalPagesControlledExternally;
              qs(i, r);
              var l, u;
              return (
                c ? ((l = n), (u = n)) : ((l = oc(r, n, i, a) || []), (u = Ks(l, o, s))),
                nc(nc({}, t), {}, { pageRows: u })
              );
            },
          },
        ],
      )
    );
  })(T.Component);
  return T.forwardRef(function (e, n) {
    return T.createElement(t, z({}, e, { forwardedRef: n }));
  });
}
var cc = `--local-dynamic-table-width`,
  lc = function (e) {
    var t = e.width;
    return t === void 0 ? void 0 : x({}, cc, `${t}%`);
  };
X();
var uc = [`width`, `isFixedSize`, `shouldTruncate`, `innerRef`],
  dc = function (e) {
    var t = e.width,
      n = e.isFixedSize,
      r = e.shouldTruncate,
      i = e.innerRef,
      a = d(e, uc);
    return T.createElement(
      `td`,
      z(
        {
          style: lc({ width: t }),
          ref: i,
          className: Y([
            `_1bsb8a2a`,
            n && r && `_1bto1l2s _o5721q9c`,
            n && `_1reo15vq _18m915vq`,
            `_19itglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t`,
            a.className,
          ]),
        },
        a,
      ),
    );
  };
X();
var fc = [`isHighlighted`, `children`, `style`, `testId`, `className`],
  pc = (0, T.forwardRef)(function (e, t) {
    var n = e.isHighlighted,
      r = e.children,
      i = e.style,
      a = e.testId,
      o = e.className,
      s = d(e, fc);
    return T.createElement(
      `tr`,
      z(
        {
          style: i,
          className: Y([
            `_bfhksm61 _1ygbdfik _1ah312gs`,
            n ? `_bfhk15s3 _irr3ufnl` : `_irr31dpa`,
            o,
          ]),
        },
        s,
        { ref: t, "data-testid": a },
      ),
      r,
    );
  }),
  mc = [`cells`],
  hc = [`content`, `testId`],
  gc = function (e) {
    var t = e.row,
      n = e.head,
      r = e.testId,
      i = e.isFixedSize,
      a = e.isHighlighted,
      o = t.cells,
      s = d(t, mc);
    return T.createElement(
      pc,
      z(
        {},
        s,
        { isHighlighted: a },
        a ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: t.testId || (r && `${r}--row-${s.key}`) },
      ),
      o.map(function (e, t) {
        var a = e.content,
          o = e.testId,
          s = d(e, hc),
          c = (n || { cells: [] }).cells[t] || {},
          l = c.shouldTruncate,
          u = c.width;
        return T.createElement(
          dc,
          z({ "data-testid": o || (r && `${r}--cell-${t}`) }, s, {
            isFixedSize: i,
            key: t,
            shouldTruncate: l,
            width: u,
          }),
          a,
        );
      }),
    );
  };
function _c(e, t, n) {
  return ((t = b(t)), m(e, vc() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function vc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vc = function () {
    return !!e;
  })();
}
var yc = (function (e) {
    function t() {
      return (h(this, t), _c(this, t, arguments));
    }
    return (
      _(t, e),
      u(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.pageRows,
              n = e.head,
              r = e.isFixedSize,
              i = e.highlightedRowIndex,
              a = e.testId,
              o = e.forwardedRef;
            return T.createElement(
              `tbody`,
              { "data-testid": a && `${a}--body`, ref: o },
              t.map(function (e, t) {
                return T.createElement(gc, {
                  head: n,
                  isFixedSize: r,
                  key: e.key || t,
                  row: e,
                  isHighlighted:
                    e.isHighlighted ||
                    (!!i && (typeof i == `number` ? i === t : i.indexOf(t) > -1)),
                  testId: a,
                });
              }),
            );
          },
        },
      ])
    );
  })(T.Component),
  bc = sc(
    T.forwardRef(function (e, t) {
      return T.createElement(yc, z({}, e, { forwardedRef: t }));
    }),
  );
function xc(e, t, n) {
  return ((t = b(t)), m(e, Sc() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function Sc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sc = function () {
    return !!e;
  })();
}
var Cc = (function (e) {
  function t(e) {
    var n;
    return (h(this, t), (n = xc(this, t, [e])), (n.state = { hasError: !1 }), n);
  }
  return (
    _(t, e),
    u(
      t,
      [
        {
          key: `render`,
          value: function () {
            return this.state.hasError ? this.props.fallback : this.props.children;
          },
        },
      ],
      [
        {
          key: `getDerivedStateFromError`,
          value: function () {
            return { hasError: !0 };
          },
        },
      ],
    )
  );
})(T.Component);
X();
var wc = function (e) {
  var t = e.children,
    n = e.testId;
  return T.createElement(
    `div`,
    { "data-testid": n && `${n}--container`, className: Y([`_kqswh2mm`]) },
    t,
  );
};
X();
function Tc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tc(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Dc = `--contents-opacity`,
  Oc = function (e) {
    var t = e.children,
      n = e.contentsOpacity,
      r = e.testId;
    return T.createElement(
      `div`,
      {
        "data-testid": r && `${r}--contents--container`,
        className: Y([`_tzy47hfw _lcxvglyw`]),
        style: Ec(Ec({}, x({}, Dc, n)), {}, { "--_cnddr8": Xo(`var(${Dc})`) }),
      },
      t,
    );
  };
X();
var kc = function (e) {
  var t = e.children,
    n = e.testId;
  return T.createElement(
    `div`,
    {
      "data-testid": n && `${n}--spinner--container`,
      className: Y([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o`]),
    },
    t,
  );
};
function Ac(e, t, n) {
  return ((t = b(t)), m(e, jc() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function jc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jc = function () {
    return !!e;
  })();
}
var Mc = (function (e) {
  function t() {
    return (h(this, t), Ac(this, t, arguments));
  }
  return (
    _(t, e),
    u(t, [
      {
        key: `render`,
        value: function () {
          var e = this.props,
            t = e.children,
            n = e.isLoading,
            r = e.spinnerSize,
            i = e.contentsOpacity,
            a = e.testId,
            o = e.loadingLabel;
          return T.createElement(
            wc,
            { testId: a },
            n ? T.createElement(Oc, { contentsOpacity: i, testId: a }, t) : t,
            n &&
              T.createElement(
                kc,
                { testId: a },
                T.createElement(Ls, { size: r, testId: a && `${a}--loadingSpinner`, label: o }),
              ),
          );
        },
      },
    ])
  );
})(T.Component);
(x(Mc, `defaultProps`, {
  isLoading: !0,
  spinnerSize: Ws,
  contentsOpacity: Gs,
  loadingLabel: `Loading table`,
}),
  X());
var Nc = [`children`, `testId`];
function Pc(e, t, n) {
  return ((t = b(t)), m(e, Fc() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function Fc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Fc = function () {
    return !!e;
  })();
}
var Ic = (0, T.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.testId,
      i = d(e, Nc);
    return T.createElement(
      `div`,
      z({}, i, { "data-testid": r, ref: t, className: Y([`_kqswh2mm _6rth1ejb`]) }),
      n,
    );
  }),
  Lc = function (e) {
    var t = e.children,
      n = e.testId;
    return T.createElement(
      `div`,
      {
        "data-testid": n && `${n}--spinner-backdrop`,
        className: Y([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw`]),
      },
      t,
    );
  },
  Rc = (0, T.forwardRef)(function (e, t) {
    var n = e.children;
    return T.createElement(`div`, { ref: t, className: Y([`_kqswh2mm _152tidpf`]) }, n);
  }),
  zc = (function (e) {
    function t() {
      var e;
      h(this, t);
      var n = [...arguments];
      return (
        (e = Pc(this, t, [].concat(n))),
        x(e, `spinnerRef`, T.createRef()),
        x(e, `containerRef`, T.createRef()),
        x(e, `componentDidMount`, function () {
          e.props.isLoading &&
            e.hasTargetNode() &&
            (e.attachListeners(), e.updateTargetAppearance(), e.updateSpinnerPosition());
        }),
        x(e, `UNSAFE_componentWillReceiveProps`, function (t) {
          !t.isLoading || !e.hasTargetNode(t)
            ? e.detachListeners()
            : e.props.isLoading || e.attachListeners();
        }),
        x(e, `componentDidUpdate`, function () {
          e.hasTargetNode() &&
            (e.updateTargetAppearance(), e.props.isLoading && e.updateSpinnerPosition());
        }),
        x(e, `componentWillUnmount`, function () {
          e.detachListeners();
        }),
        x(e, `getTargetNode`, function () {
          var t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.props)
            .targetRef;
          return t?.() || e.containerRef.current;
        }),
        x(e, `hasTargetNode`, function (t) {
          return !!e.getTargetNode(t);
        }),
        x(e, `isVerticallyVisible`, function (e, t) {
          var n = e.top;
          return e.bottom <= 0 ? !1 : n < t;
        }),
        x(e, `isFullyVerticallyVisible`, function (e, t) {
          var n = e.top,
            r = e.bottom;
          return n >= 0 && r <= t;
        }),
        x(e, `handleResize`, function () {
          e.updateSpinnerPosition();
        }),
        x(e, `handleScroll`, function () {
          e.updateSpinnerPosition();
        }),
        x(e, `translateSpinner`, function (e, t, n) {
          ((e.style.position = n ? `fixed` : ``),
            (e.style.transform = t === 0 ? `` : `translate3d(0, ${t}px, 0)`));
        }),
        x(e, `updateTargetAppearance`, function () {
          var t = e.getTargetNode(),
            n = e.props,
            r = n.isLoading,
            i = n.contentsOpacity;
          t &&
            t.style &&
            C(t.style) === `object` &&
            ((t.style.pointerEvents = r ? `none` : ``), (t.style.opacity = r ? i.toString() : ``));
        }),
        e
      );
    }
    return (
      _(t, e),
      u(t, [
        {
          key: `attachListeners`,
          value: function () {
            (window.addEventListener(`scroll`, this.handleScroll),
              window.addEventListener(`resize`, this.handleResize));
          },
        },
        {
          key: `detachListeners`,
          value: function () {
            (window.removeEventListener(`scroll`, this.handleScroll),
              window.removeEventListener(`resize`, this.handleResize));
          },
        },
        {
          key: `updateSpinnerPosition`,
          value: function () {
            var e = window.innerHeight,
              t = this.getTargetNode(),
              n = this.spinnerRef?.current;
            if (!(!t || typeof t.getBoundingClientRect != `function` || !n)) {
              var r = t.getBoundingClientRect(),
                i = n.getBoundingClientRect(),
                a = i.height,
                o = this.isVerticallyVisible(r, e),
                s = r.top,
                c = r.bottom,
                l = r.height;
              if (o) {
                if (l >= a * 3 && !this.isFullyVerticallyVisible(r, e)) {
                  if (s >= 0) {
                    var u = e - s,
                      d = u / 2 + s - a / 2,
                      f = u < a * 3 ? s + a : d;
                    this.translateSpinner(n, f, !0);
                  } else if (s < 0 && c > e) {
                    var p = e / 2 - a / 2;
                    this.translateSpinner(n, p, !0);
                  } else {
                    var m = c / 2 - a / 2,
                      h = m < a ? m - (a - m) : m;
                    this.translateSpinner(n, h, !0);
                  }
                  return;
                }
              } else if (!this.isVerticallyVisible(i, e)) return;
              var g = this.containerRef?.current;
              if (g && typeof g.getBoundingClientRect == `function`) {
                var _ = (s - g.getBoundingClientRect().top) / 2;
                this.translateSpinner(n, _, !1);
              }
            }
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.children,
              n = e.isLoading,
              r = e.spinnerSize,
              i = e.testId,
              a = e.loadingLabel;
            return T.createElement(
              Ic,
              { testId: i && `${i}--loading--container--advanced`, ref: this.containerRef },
              t,
              n &&
                T.createElement(
                  Lc,
                  { testId: i },
                  T.createElement(
                    Rc,
                    { ref: this.spinnerRef },
                    T.createElement(Ls, { size: r, testId: i && `${i}--loadingSpinner`, label: a }),
                  ),
                ),
            );
          },
        },
      ])
    );
  })(T.Component);
x(zc, `defaultProps`, {
  isLoading: !0,
  spinnerSize: Ws,
  contentsOpacity: `var(--ds-opacity-loading, 0.2)`,
  loadingLabel: `Loading table`,
});
function Bc(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    n = e !== void 0,
    r = f((0, T.useState)(t), 2),
    i = r[0],
    a = r[1],
    o = (0, T.useRef)(n);
  return (
    (0, T.useEffect)(
      function () {
        o.current = n;
      },
      [n],
    ),
    [
      n ? e : i,
      (0, T.useCallback)(function (e) {
        o.current || a(e);
      }, []),
    ]
  );
}
var Vc = n(() => {}),
  Hc,
  Uc,
  Wc,
  Gc,
  Kc,
  qc,
  Jc = n(() => {
    (Vc(),
      (Hc = e(o())),
      X(),
      (Uc = e(o())),
      (Wc = {
        none: `_1bsbpxbi _4t3ipxbi`,
        compact: `_1bsb1ejb _4t3i1ejb`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Gc = {
        none: `_1bsbutpp _4t3iutpp`,
        compact: `_1bsbpxbi _4t3ipxbi`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Kc = {
        medium: { none: 0, compact: 4, spacious: 4 },
        small: { none: 0, compact: 2.66, spacious: 8 },
      }),
      (qc = (0, Uc.memo)(function (e) {
        var t = e,
          n = t.color,
          r = n === void 0 ? `currentColor` : n,
          i = t.testId,
          a = t.label,
          o = t.dangerouslySetGlyph,
          s = t.shouldScale,
          c = t.spacing,
          l = c === void 0 ? `none` : c,
          u = t.name,
          d = o ? { __html: o } : void 0,
          f = `medium`;
        if (`size` in e && e.size !== void 0) {
          if (typeof e.size == `string`) f = e.size === `small` || e.size === `medium` ? e.size : f;
          else if (u) {
            var p = e.size(u);
            f = p === `small` || p === `medium` ? p : f;
          }
        }
        var m = 16,
          h = Kc[f][l],
          g = m + 2 * h;
        return Hc.createElement(
          `span`,
          {
            "data-testid": i,
            role: a ? `img` : void 0,
            "aria-label": a || void 0,
            "aria-hidden": a ? void 0 : !0,
            style: { color: r },
            className: Y([
              `_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9`,
              `_12va1onz _jcxd1r8n`,
              s && `_1bsb1kw7 _4t3i1kw7`,
              f === `small` && `_vwz4utpp`,
            ]),
          },
          Hc.createElement(`svg`, {
            fill: `none`,
            viewBox: `${0 - h} ${0 - h} ${g} ${g}`,
            role: `presentation`,
            dangerouslySetInnerHTML: d,
            className: Y([
              `_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31`,
              s ? `_1bsb1kw7 _4t3i1kw7` : f === `small` ? Gc[l] : Wc[l],
            ]),
          }),
        );
      })));
  }),
  Yc = r({ Icon: () => qc, default: () => qc }),
  Xc = n(() => {
    Jc();
  }),
  Zc = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `ChevronLeftIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" d="m9.97 1.47-6 6a.75.75 0 0 0-.052 1.004l.052.056 6 6 1.06-1.06L5.56 8l5.47-5.47z"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `ChevronLeftIcon`), (e.default = a));
  }),
  Qc = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `ChevronRightIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" d="m6.03 1.47 6 6a.75.75 0 0 1 .052 1.004l-.052.056-6 6-1.06-1.06L10.44 8 4.97 2.53z"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `ChevronRightIcon`), (e.default = a));
  }),
  $c = (0, T.createContext)(`elevation.surface`),
  el = function () {
    return (0, T.useContext)($c);
  };
(($c.displayName = `SurfaceProvider`), X());
var tl = [
    `as`,
    `children`,
    `backgroundColor`,
    `padding`,
    `paddingBlock`,
    `paddingBlockStart`,
    `paddingBlockEnd`,
    `paddingInline`,
    `paddingInlineStart`,
    `paddingInlineEnd`,
    `style`,
    `testId`,
    `xcss`,
  ],
  nl = [`className`],
  rl = {
    "color.background.accent.lime.subtlest": `_bfhkm890`,
    "color.background.accent.lime.subtlest.hovered": `_bfhkd4y8`,
    "color.background.accent.lime.subtlest.pressed": `_bfhkkuup`,
    "color.background.accent.lime.subtler": `_bfhkz2ec`,
    "color.background.accent.lime.subtler.hovered": `_bfhk1gf0`,
    "color.background.accent.lime.subtler.pressed": `_bfhk2kxc`,
    "color.background.accent.lime.subtle": `_bfhkbq5w`,
    "color.background.accent.lime.subtle.hovered": `_bfhkfoww`,
    "color.background.accent.lime.subtle.pressed": `_bfhk1jbd`,
    "color.background.accent.lime.bolder": `_bfhktde4`,
    "color.background.accent.lime.bolder.hovered": `_bfhknzpa`,
    "color.background.accent.lime.bolder.pressed": `_bfhkh0j0`,
    "color.background.accent.red.subtlest": `_bfhk1vk5`,
    "color.background.accent.red.subtlest.hovered": `_bfhk1i6i`,
    "color.background.accent.red.subtlest.pressed": `_bfhknbir`,
    "color.background.accent.red.subtler": `_bfhk1rtt`,
    "color.background.accent.red.subtler.hovered": `_bfhkaffd`,
    "color.background.accent.red.subtler.pressed": `_bfhk1j5a`,
    "color.background.accent.red.subtle": `_bfhkkrt9`,
    "color.background.accent.red.subtle.hovered": `_bfhk1sou`,
    "color.background.accent.red.subtle.pressed": `_bfhk1fnn`,
    "color.background.accent.red.bolder": `_bfhkuibq`,
    "color.background.accent.red.bolder.hovered": `_bfhk100f`,
    "color.background.accent.red.bolder.pressed": `_bfhk1cl6`,
    "color.background.accent.orange.subtlest": `_bfhkf5uh`,
    "color.background.accent.orange.subtlest.hovered": `_bfhk19yr`,
    "color.background.accent.orange.subtlest.pressed": `_bfhkf90x`,
    "color.background.accent.orange.subtler": `_bfhk165s`,
    "color.background.accent.orange.subtler.hovered": `_bfhk1ei0`,
    "color.background.accent.orange.subtler.pressed": `_bfhkdpo3`,
    "color.background.accent.orange.subtle": `_bfhk1kkj`,
    "color.background.accent.orange.subtle.hovered": `_bfhk9mfs`,
    "color.background.accent.orange.subtle.pressed": `_bfhkaxpp`,
    "color.background.accent.orange.bolder": `_bfhk1qg1`,
    "color.background.accent.orange.bolder.hovered": `_bfhk12qo`,
    "color.background.accent.orange.bolder.pressed": `_bfhk1fyq`,
    "color.background.accent.yellow.subtlest": `_bfhkibhp`,
    "color.background.accent.yellow.subtlest.hovered": `_bfhkaetg`,
    "color.background.accent.yellow.subtlest.pressed": `_bfhk1o1l`,
    "color.background.accent.yellow.subtler": `_bfhk1773`,
    "color.background.accent.yellow.subtler.hovered": `_bfhk1uw7`,
    "color.background.accent.yellow.subtler.pressed": `_bfhk1r9w`,
    "color.background.accent.yellow.subtle": `_bfhk8y3s`,
    "color.background.accent.yellow.subtle.hovered": `_bfhk819w`,
    "color.background.accent.yellow.subtle.pressed": `_bfhk1jx0`,
    "color.background.accent.yellow.bolder": `_bfhk1vop`,
    "color.background.accent.yellow.bolder.hovered": `_bfhkkjqf`,
    "color.background.accent.yellow.bolder.pressed": `_bfhk1okt`,
    "color.background.accent.green.subtlest": `_bfhkn729`,
    "color.background.accent.green.subtlest.hovered": `_bfhk3utz`,
    "color.background.accent.green.subtlest.pressed": `_bfhkyfny`,
    "color.background.accent.green.subtler": `_bfhk1wnw`,
    "color.background.accent.green.subtler.hovered": `_bfhk1e2h`,
    "color.background.accent.green.subtler.pressed": `_bfhkybhx`,
    "color.background.accent.green.subtle": `_bfhk1rsu`,
    "color.background.accent.green.subtle.hovered": `_bfhk12e3`,
    "color.background.accent.green.subtle.pressed": `_bfhk1g86`,
    "color.background.accent.green.bolder": `_bfhk1e5c`,
    "color.background.accent.green.bolder.hovered": `_bfhka5yi`,
    "color.background.accent.green.bolder.pressed": `_bfhk1j68`,
    "color.background.accent.teal.subtlest": `_bfhk7xuz`,
    "color.background.accent.teal.subtlest.hovered": `_bfhk108c`,
    "color.background.accent.teal.subtlest.pressed": `_bfhk1cxp`,
    "color.background.accent.teal.subtler": `_bfhk1a17`,
    "color.background.accent.teal.subtler.hovered": `_bfhkkwwr`,
    "color.background.accent.teal.subtler.pressed": `_bfhk1jb0`,
    "color.background.accent.teal.subtle": `_bfhktdv8`,
    "color.background.accent.teal.subtle.hovered": `_bfhkzh8h`,
    "color.background.accent.teal.subtle.pressed": `_bfhk16zl`,
    "color.background.accent.teal.bolder": `_bfhk2c8p`,
    "color.background.accent.teal.bolder.hovered": `_bfhkl3ve`,
    "color.background.accent.teal.bolder.pressed": `_bfhktor0`,
    "color.background.accent.blue.subtlest": `_bfhk1s93`,
    "color.background.accent.blue.subtlest.hovered": `_bfhkdaj9`,
    "color.background.accent.blue.subtlest.pressed": `_bfhkxm0g`,
    "color.background.accent.blue.subtler": `_bfhk1dy8`,
    "color.background.accent.blue.subtler.hovered": `_bfhk815t`,
    "color.background.accent.blue.subtler.pressed": `_bfhkrwxf`,
    "color.background.accent.blue.subtle": `_bfhk115i`,
    "color.background.accent.blue.subtle.hovered": `_bfhk9pr4`,
    "color.background.accent.blue.subtle.pressed": `_bfhknpx7`,
    "color.background.accent.blue.bolder": `_bfhk16e3`,
    "color.background.accent.blue.bolder.hovered": `_bfhk1vbm`,
    "color.background.accent.blue.bolder.pressed": `_bfhk1xwi`,
    "color.background.accent.purple.subtlest": `_bfhkp2ly`,
    "color.background.accent.purple.subtlest.hovered": `_bfhkkca2`,
    "color.background.accent.purple.subtlest.pressed": `_bfhk1jbm`,
    "color.background.accent.purple.subtler": `_bfhk1nm4`,
    "color.background.accent.purple.subtler.hovered": `_bfhkattl`,
    "color.background.accent.purple.subtler.pressed": `_bfhk3nfk`,
    "color.background.accent.purple.subtle": `_bfhk18ah`,
    "color.background.accent.purple.subtle.hovered": `_bfhk8bp1`,
    "color.background.accent.purple.subtle.pressed": `_bfhk1cd2`,
    "color.background.accent.purple.bolder": `_bfhkya33`,
    "color.background.accent.purple.bolder.hovered": `_bfhk1af5`,
    "color.background.accent.purple.bolder.pressed": `_bfhk6cze`,
    "color.background.accent.magenta.subtlest": `_bfhk8tvm`,
    "color.background.accent.magenta.subtlest.hovered": `_bfhkr3zd`,
    "color.background.accent.magenta.subtlest.pressed": `_bfhk1ckf`,
    "color.background.accent.magenta.subtler": `_bfhkv9ra`,
    "color.background.accent.magenta.subtler.hovered": `_bfhk1axx`,
    "color.background.accent.magenta.subtler.pressed": `_bfhk42ri`,
    "color.background.accent.magenta.subtle": `_bfhk1mi6`,
    "color.background.accent.magenta.subtle.hovered": `_bfhkrwyz`,
    "color.background.accent.magenta.subtle.pressed": `_bfhk6c15`,
    "color.background.accent.magenta.bolder": `_bfhkc3uk`,
    "color.background.accent.magenta.bolder.hovered": `_bfhk1ok8`,
    "color.background.accent.magenta.bolder.pressed": `_bfhkeawv`,
    "color.background.accent.gray.subtlest": `_bfhkysee`,
    "color.background.accent.gray.subtlest.hovered": `_bfhkwejn`,
    "color.background.accent.gray.subtlest.pressed": `_bfhk18ut`,
    "color.background.accent.gray.subtler": `_bfhk7qp0`,
    "color.background.accent.gray.subtler.hovered": `_bfhk10ef`,
    "color.background.accent.gray.subtler.pressed": `_bfhk1rk9`,
    "color.background.accent.gray.subtle": `_bfhk18j9`,
    "color.background.accent.gray.subtle.hovered": `_bfhk1nv3`,
    "color.background.accent.gray.subtle.pressed": `_bfhkq9tj`,
    "color.background.accent.gray.bolder": `_bfhk1i45`,
    "color.background.accent.gray.bolder.hovered": `_bfhkbyip`,
    "color.background.accent.gray.bolder.pressed": `_bfhk1van`,
    "color.background.disabled": `_bfhkby5v`,
    "color.background.input": `_bfhk1j9a`,
    "color.background.input.hovered": `_bfhkl4ek`,
    "color.background.input.pressed": `_bfhkr01l`,
    "color.background.inverse.subtle": `_bfhk1vck`,
    "color.background.inverse.subtle.hovered": `_bfhkmpja`,
    "color.background.inverse.subtle.pressed": `_bfhk1gii`,
    "color.background.neutral": `_bfhki8nm`,
    "color.background.neutral.hovered": `_bfhkplhp`,
    "color.background.neutral.pressed": `_bfhk1gdz`,
    "color.background.neutral.subtle": `_bfhksm61`,
    "color.background.neutral.subtle.hovered": `_bfhk1dpa`,
    "color.background.neutral.subtle.pressed": `_bfhkfcek`,
    "color.background.neutral.bold": `_bfhk1aqn`,
    "color.background.neutral.bold.hovered": `_bfhk1ibz`,
    "color.background.neutral.bold.pressed": `_bfhkof27`,
    "color.background.selected": `_bfhk15s3`,
    "color.background.selected.hovered": `_bfhkufnl`,
    "color.background.selected.pressed": `_bfhknozp`,
    "color.background.selected.bold": `_bfhkjmqp`,
    "color.background.selected.bold.hovered": `_bfhk1q28`,
    "color.background.selected.bold.pressed": `_bfhk12kk`,
    "color.background.brand.subtlest": `_bfhk1gmr`,
    "color.background.brand.subtlest.hovered": `_bfhk3v15`,
    "color.background.brand.subtlest.pressed": `_bfhku02c`,
    "color.background.brand.bold": `_bfhk1856`,
    "color.background.brand.bold.hovered": `_bfhkhf2y`,
    "color.background.brand.bold.pressed": `_bfhkg6ey`,
    "color.background.brand.boldest": `_bfhk1o4i`,
    "color.background.brand.boldest.hovered": `_bfhklefx`,
    "color.background.brand.boldest.pressed": `_bfhk16k6`,
    "color.background.danger": `_bfhk1gly`,
    "color.background.danger.hovered": `_bfhk1yvi`,
    "color.background.danger.pressed": `_bfhk1r4b`,
    "color.background.danger.bold": `_bfhkybec`,
    "color.background.danger.bold.hovered": `_bfhks9hg`,
    "color.background.danger.bold.pressed": `_bfhk13a9`,
    "color.background.warning": `_bfhk1917`,
    "color.background.warning.hovered": `_bfhk19zu`,
    "color.background.warning.pressed": `_bfhkzr32`,
    "color.background.warning.bold": `_bfhk1kmu`,
    "color.background.warning.bold.hovered": `_bfhk1spp`,
    "color.background.warning.bold.pressed": `_bfhk4m4m`,
    "color.background.success": `_bfhk1y9u`,
    "color.background.success.hovered": `_bfhk1vfx`,
    "color.background.success.pressed": `_bfhk1wl5`,
    "color.background.success.bold": `_bfhkkcmj`,
    "color.background.success.bold.hovered": `_bfhky7x8`,
    "color.background.success.bold.pressed": `_bfhkwcbh`,
    "color.background.discovery": `_bfhk6vm6`,
    "color.background.discovery.hovered": `_bfhk12eq`,
    "color.background.discovery.pressed": `_bfhk18vq`,
    "color.background.discovery.bold": `_bfhku5tj`,
    "color.background.discovery.bold.hovered": `_bfhkfqeg`,
    "color.background.discovery.bold.pressed": `_bfhk1f1m`,
    "color.background.information": `_bfhk19ip`,
    "color.background.information.hovered": `_bfhk86z5`,
    "color.background.information.pressed": `_bfhk1c1j`,
    "color.background.information.bold": `_bfhkx4w0`,
    "color.background.information.bold.hovered": `_bfhkq2ii`,
    "color.background.information.bold.pressed": `_bfhkf89v`,
    "color.blanket": `_bfhk1i5c`,
    "color.blanket.selected": `_bfhk7wq0`,
    "color.blanket.danger": `_bfhkrprw`,
    "color.skeleton": `_bfhkizff`,
    "color.skeleton.subtle": `_bfhkvkf5`,
    "elevation.surface": `_bfhkvuon`,
    "elevation.surface.hovered": `_bfhk19i6`,
    "elevation.surface.pressed": `_bfhk13ro`,
    "elevation.surface.overlay": `_bfhk1bhr`,
    "elevation.surface.overlay.hovered": `_bfhk6o2t`,
    "elevation.surface.overlay.pressed": `_bfhkm8nx`,
    "elevation.surface.raised": `_bfhkhp5a`,
    "elevation.surface.raised.hovered": `_bfhk116u`,
    "elevation.surface.raised.pressed": `_bfhk14aj`,
    "elevation.surface.sunken": `_bfhkhfxm`,
    "utility.elevation.surface.current": `_bfhkchd4`,
  },
  il = {
    "elevation.surface": `_1q1lvuon`,
    "elevation.surface.hovered": `_1q1l19i6`,
    "elevation.surface.pressed": `_1q1l13ro`,
    "elevation.surface.overlay": `_1q1l1bhr`,
    "elevation.surface.overlay.hovered": `_1q1l6o2t`,
    "elevation.surface.overlay.pressed": `_1q1lm8nx`,
    "elevation.surface.raised": `_1q1lhp5a`,
    "elevation.surface.raised.hovered": `_1q1l116u`,
    "elevation.surface.raised.pressed": `_1q1l14aj`,
    "elevation.surface.sunken": `_1q1lhfxm`,
  },
  al = {
    "space.0": `_1q51ze3t`,
    "space.025": `_1q51v77o`,
    "space.050": `_1q511b66`,
    "space.075": `_1q5112x7`,
    "space.100": `_1q51u2gc`,
    "space.150": `_1q51utpp`,
    "space.200": `_1q51pxbi`,
    "space.250": `_1q51v47k`,
    "space.300": `_1q511ejb`,
    "space.400": `_1q51xy5q`,
    "space.500": `_1q511jfw`,
    "space.600": `_1q51oahv`,
    "space.800": `_1q51xncg`,
    "space.1000": `_1q511epz`,
  },
  ol = {
    "space.0": `_85i5ze3t`,
    "space.025": `_85i5v77o`,
    "space.050": `_85i51b66`,
    "space.075": `_85i512x7`,
    "space.100": `_85i5u2gc`,
    "space.150": `_85i5utpp`,
    "space.200": `_85i5pxbi`,
    "space.250": `_85i5v47k`,
    "space.300": `_85i51ejb`,
    "space.400": `_85i5xy5q`,
    "space.500": `_85i51jfw`,
    "space.600": `_85i5oahv`,
    "space.800": `_85i5xncg`,
    "space.1000": `_85i51epz`,
  },
  sl = {
    "space.0": `_bozgze3t`,
    "space.025": `_bozgv77o`,
    "space.050": `_bozg1b66`,
    "space.075": `_bozg12x7`,
    "space.100": `_bozgu2gc`,
    "space.150": `_bozgutpp`,
    "space.200": `_bozgpxbi`,
    "space.250": `_bozgv47k`,
    "space.300": `_bozg1ejb`,
    "space.400": `_bozgxy5q`,
    "space.500": `_bozg1jfw`,
    "space.600": `_bozgoahv`,
    "space.800": `_bozgxncg`,
    "space.1000": `_bozg1epz`,
  },
  cl = {
    "space.0": `_y4tize3t`,
    "space.025": `_y4tiv77o`,
    "space.050": `_y4ti1b66`,
    "space.075": `_y4ti12x7`,
    "space.100": `_y4tiu2gc`,
    "space.150": `_y4tiutpp`,
    "space.200": `_y4tipxbi`,
    "space.250": `_y4tiv47k`,
    "space.300": `_y4ti1ejb`,
    "space.400": `_y4tixy5q`,
    "space.500": `_y4ti1jfw`,
    "space.600": `_y4tioahv`,
    "space.800": `_y4tixncg`,
    "space.1000": `_y4ti1epz`,
  },
  ll = (0, T.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `div` : n,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = s === void 0 ? o : s,
      l = e.paddingBlockStart,
      u = l === void 0 ? c : l,
      f = e.paddingBlockEnd,
      p = f === void 0 ? c : f,
      m = e.paddingInline,
      h = m === void 0 ? o : m,
      g = e.paddingInlineStart,
      _ = g === void 0 ? h : g,
      v = e.paddingInlineEnd,
      y = v === void 0 ? h : v,
      b = e.style,
      x = e.testId,
      S = e.xcss,
      C = d(e, tl);
    C.className;
    var w = d(C, nl),
      E = T.createElement(
        r,
        z(
          {
            style: b,
            ref: t,
            className: Y([
              `_19itglyw _vchhusvi _r06hglyw`,
              a && rl[a],
              a && ul(a) && il[a],
              u && al[u],
              p && ol[p],
              _ && sl[_],
              y && cl[y],
              S,
            ]),
          },
          w,
          { "data-testid": x },
        ),
        i,
      );
    return a ? T.createElement($c.Provider, { value: a }, E) : E;
  });
function ul(e) {
  return e in il;
}
var dl = () =>
  Error(`
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
`);
X();
var fl = (...e) => Y(e);
function pl() {
  return {
    css() {
      throw dl();
    },
    cssMap() {
      throw dl();
    },
    cx: fl,
    XCSSProp() {
      throw dl();
    },
  };
}
var ml = pl();
(ml.css, ml.cssMap, ml.cssMap);
var hl = ml.cx;
(ml.XCSSProp, X());
var gl = [
    `as`,
    `role`,
    `alignItems`,
    `justifyContent`,
    `gap`,
    `columnGap`,
    `rowGap`,
    `children`,
    `testId`,
    `direction`,
    `wrap`,
    `xcss`,
  ],
  _l = {
    "space.0": `_1p57ze3t`,
    "space.025": `_1p57v77o`,
    "space.050": `_1p571b66`,
    "space.075": `_1p5712x7`,
    "space.100": `_1p57u2gc`,
    "space.150": `_1p57utpp`,
    "space.200": `_1p57pxbi`,
    "space.250": `_1p57v47k`,
    "space.300": `_1p571ejb`,
    "space.400": `_1p57xy5q`,
    "space.500": `_1p571jfw`,
    "space.600": `_1p57oahv`,
    "space.800": `_1p57xncg`,
    "space.1000": `_1p571epz`,
  },
  vl = {
    "space.0": `_gy1pze3t`,
    "space.025": `_gy1pv77o`,
    "space.050": `_gy1p1b66`,
    "space.075": `_gy1p12x7`,
    "space.100": `_gy1pu2gc`,
    "space.150": `_gy1putpp`,
    "space.200": `_gy1ppxbi`,
    "space.250": `_gy1pv47k`,
    "space.300": `_gy1p1ejb`,
    "space.400": `_gy1pxy5q`,
    "space.500": `_gy1p1jfw`,
    "space.600": `_gy1poahv`,
    "space.800": `_gy1pxncg`,
    "space.1000": `_gy1p1epz`,
  },
  yl = {
    start: `_1bahv2br`,
    center: `_1bah1h6o`,
    end: `_1bahh9n0`,
    "space-between": `_1bah1yb4`,
    "space-around": `_1bah1b1v`,
    "space-evenly": `_1bahitcz`,
    stretch: `_1bah1fhb`,
  },
  bl = { column: `_2lx21bp4`, row: `_2lx2vrvc` },
  xl = { wrap: `_1n261g80`, nowrap: `_1n261q9c` },
  Sl = {
    start: `_4cvrv2br`,
    center: `_4cvr1h6o`,
    baseline: `_4cvr1q9y`,
    end: `_4cvrh9n0`,
    stretch: `_4cvr1fhb`,
  },
  Cl = { root: `_1e0c1txw _vchhusvi` },
  wl = (0, T.memo)(
    (0, T.forwardRef)(function (e, t) {
      var n = e.as,
        r = n === void 0 ? `div` : n,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        l = e.rowGap,
        u = e.children,
        f = e.testId,
        p = e.direction,
        m = e.wrap,
        h = e.xcss,
        g = d(e, gl);
      return T.createElement(
        r,
        z({}, g, {
          role: i,
          className: Y([
            Cl.root,
            s && vl[s],
            c && vl[c],
            s && _l[s],
            l && _l[l],
            a && Sl[a],
            p && bl[p],
            o && yl[o],
            m && xl[m],
            h,
          ]),
          "data-testid": f,
          ref: t,
        }),
        u,
      );
    }),
  );
((wl.displayName = `Flex`), X());
var Tl = [
    `as`,
    `alignInline`,
    `alignBlock`,
    `shouldWrap`,
    `spread`,
    `grow`,
    `space`,
    `rowSpace`,
    `separator`,
    `xcss`,
    `testId`,
    `role`,
    `children`,
  ],
  El = {
    separator: `_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw`,
    hug: `_16jlidpf`,
    fill: `_1bsb1osq _16jlkb7n`,
  },
  Dl = function (e) {
    var t = e.children;
    return T.createElement(`span`, { className: Y([El.separator]) }, t);
  },
  Ol = (0, T.memo)(
    (0, T.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `start` : i,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        c = e.spread,
        l = e.grow,
        u = e.space,
        f = e.rowSpace,
        p = e.separator,
        m = e.xcss,
        h = e.testId,
        g = e.role,
        _ = e.children,
        v = d(e, Tl),
        y = typeof p == `string` ? T.createElement(Dl, null, p) : p,
        b = y
          ? T.Children.toArray(_)
              .filter(Boolean)
              .map(function (e, t) {
                return T.createElement(T.Fragment, { key: t }, p && t > 0 ? y : null, e);
              })
          : _;
      return T.createElement(
        wl,
        z({}, v, {
          as: n,
          role: g,
          alignItems: a,
          justifyContent: c || r,
          direction: `row`,
          gap: u,
          rowGap: f,
          wrap: s ? `wrap` : void 0,
          xcss: hl(l === `hug` && El.hug, l === `fill` && El.fill, m),
          testId: h,
          ref: t,
        }),
        b,
      );
    }),
  );
Ol.displayName = `Inline`;
var kl = [
    `as`,
    `alignInline`,
    `alignBlock`,
    `spread`,
    `grow`,
    `space`,
    `children`,
    `testId`,
    `xcss`,
    `role`,
  ],
  Al = { hug: `_16jlidpf`, fill: `_1bsb1osq _16jlkb7n` },
  jl = (0, T.memo)(
    (0, T.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `stretch` : i,
        o = e.spread,
        s = e.grow,
        c = e.space,
        l = e.children,
        u = e.testId,
        f = e.xcss,
        p = e.role,
        m = d(e, kl);
      return T.createElement(
        wl,
        z({}, m, {
          as: n,
          role: p,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: hl(s === `hug` && Al.hug, s === `fill` && Al.fill, f),
          testId: u,
          ref: t,
        }),
        l,
      );
    }),
  );
jl.displayName = `Stack`;
var Ml = !0,
  Nl = `Invariant failed`;
function Pl(e, t) {
  if (!e) {
    if (Ml) throw Error(Nl);
    var n = typeof t == `function` ? t() : t,
      r = n ? `${Nl}: ${n}` : Nl;
    throw Error(r);
  }
}
var Fl = (0, T.createContext)(!1),
  Il = function () {
    return (0, T.useContext)(Fl);
  },
  Ll = Fl.Provider;
X();
var Rl = [`span`, `p`, `strong`, `em`],
  zl = function (e, t) {
    var n = el();
    if (e !== `inherit`) {
      if (e) return e;
      if (!t) return Wl.hasOwnProperty(n) ? Wl[n] : `color.text`;
    }
  },
  Bl = {
    root: `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65`,
    "as.strong": `_k48pwu06`,
    "as.em": `_zg8l1m30`,
    "textAlign.center": `_y3gn1h6o`,
    "textAlign.end": `_y3gnh9n0`,
    "textAlign.start": `_y3gnv2br`,
    truncation: `_1reo15vq _18m915vq _1e0ccj1k _sudp1e54`,
    breakAll: `_1nmz9jpi`,
  },
  Vl = { medium: `_11c8fhey`, large: `_11c81d4k`, small: `_11c8wadc` },
  Hl = { bold: `_k48pwu06`, medium: `_k48p1wq8`, regular: `_k48pi7a9`, semibold: `_k48p1pd9` },
  Ul = {
    "color.text": `_syazi7uo`,
    "color.text.accent.lime": `_syaz1tco`,
    "color.text.accent.lime.bolder": `_syaz1ik3`,
    "color.text.accent.red": `_syaz9lu1`,
    "color.text.accent.red.bolder": `_syazhwvp`,
    "color.text.accent.orange": `_syazp1lv`,
    "color.text.accent.orange.bolder": `_syaz7i1p`,
    "color.text.accent.yellow": `_syazfb2s`,
    "color.text.accent.yellow.bolder": `_syazekll`,
    "color.text.accent.green": `_syazh55r`,
    "color.text.accent.green.bolder": `_syaz1y78`,
    "color.text.accent.teal": `_syaz17qg`,
    "color.text.accent.teal.bolder": `_syaz12v7`,
    "color.text.accent.blue": `_syaz16jw`,
    "color.text.accent.blue.bolder": `_syaz1kyx`,
    "color.text.accent.purple": `_syazqmo9`,
    "color.text.accent.purple.bolder": `_syaz1mn1`,
    "color.text.accent.magenta": `_syaz1s8m`,
    "color.text.accent.magenta.bolder": `_syaz1qur`,
    "color.text.accent.gray": `_syaz1sqi`,
    "color.text.accent.gray.bolder": `_syaz1tmo`,
    "color.text.disabled": `_syaz1gmx`,
    "color.text.inverse": `_syaz15cr`,
    "color.text.selected": `_syaz6x5g`,
    "color.text.brand": `_syaz1oa5`,
    "color.text.danger": `_syaz1tmw`,
    "color.text.warning": `_syaz1xn9`,
    "color.text.warning.inverse": `_syaz1yd3`,
    "color.text.success": `_syazgsak`,
    "color.text.discovery": `_syazdv2p`,
    "color.text.information": `_syazu3tg`,
    "color.text.subtlest": `_syaz1rpy`,
    "color.text.subtle": `_syazazsu`,
    "color.link": `_syaz13af`,
    "color.link.pressed": `_syaz12zz`,
    "color.link.visited": `_syaz1ra0`,
    "color.link.visited.pressed": `_syaz17z1`,
  },
  Wl = {
    "color.background.neutral.bold": `color.text.inverse`,
    "color.background.neutral.bold.hovered": `color.text.inverse`,
    "color.background.neutral.bold.pressed": `color.text.inverse`,
    "color.background.selected.bold": `color.text.inverse`,
    "color.background.selected.bold.hovered": `color.text.inverse`,
    "color.background.selected.bold.pressed": `color.text.inverse`,
    "color.background.brand.bold": `color.text.inverse`,
    "color.background.brand.bold.hovered": `color.text.inverse`,
    "color.background.brand.bold.pressed": `color.text.inverse`,
    "color.background.brand.boldest": `color.text.inverse`,
    "color.background.brand.boldest.hovered": `color.text.inverse`,
    "color.background.brand.boldest.pressed": `color.text.inverse`,
    "color.background.danger.bold": `color.text.inverse`,
    "color.background.danger.bold.hovered": `color.text.inverse`,
    "color.background.danger.bold.pressed": `color.text.inverse`,
    "color.background.warning.bold": `color.text.warning.inverse`,
    "color.background.warning.bold.hovered": `color.text.warning.inverse`,
    "color.background.warning.bold.pressed": `color.text.warning.inverse`,
    "color.background.success.bold": `color.text.inverse`,
    "color.background.success.bold.hovered": `color.text.inverse`,
    "color.background.success.bold.pressed": `color.text.inverse`,
    "color.background.discovery.bold": `color.text.inverse`,
    "color.background.discovery.bold.hovered": `color.text.inverse`,
    "color.background.discovery.bold.pressed": `color.text.inverse`,
    "color.background.information.bold": `color.text.inverse`,
    "color.background.information.bold.hovered": `color.text.inverse`,
    "color.background.information.bold.pressed": `color.text.inverse`,
  },
  Gl = (0, T.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `span` : n,
      i = e.color,
      a = e.align,
      o = e.testId,
      s = e.id,
      c = e.size,
      l = e.weight,
      u = e.maxLines,
      d = e.xcss,
      f = e.children;
    Pl(Rl.includes(r), `@atlaskit/primitives: Text received an invalid "as" value of "${r}"`);
    var p = Il(),
      m = zl(i, p);
    !c && !p && (c = `medium`);
    var h = T.createElement(
      r,
      {
        id: s,
        className: Y([
          Bl.root,
          c && Vl[c],
          m && Ul[m],
          u && Bl.truncation,
          u === 1 && Bl.breakAll,
          a && Bl[`textAlign.${a}`],
          l && Hl[l],
          r === `em` && Bl[`as.em`],
          r === `strong` && Bl[`as.strong`],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? h : T.createElement(Ll, { value: !0 }, h);
  });
function Kl() {
  if (typeof window < `u` && window.navigator != null) {
    var e = window.navigator.userAgent?.toLowerCase();
    return e ? e.includes(`safari`) && !e.includes(`chrome`) : !1;
  }
  return !1;
}
X();
var ql = [`as`, `children`, `isInset`, `testId`, `style`, `xcss`],
  Jl = [`className`],
  Yl = (0, T.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `button` : n,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      l = d(e, ql);
    l.className;
    var u = d(l, Jl);
    return T.createElement(
      r,
      z({}, u, {
        ref: t,
        className: Y([
          `_ymio1r31 _ypr0glyw _zcxs1o36 _mizu194a _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y`,
          a && `_1ah31gjf _2mwq1gjf`,
          c,
        ]),
        style: s,
        "data-testid": o,
      }),
      i,
    );
  }),
  Xl = [
    `children`,
    `isDisabled`,
    `type`,
    `onClick`,
    `interactionName`,
    `componentName`,
    `analyticsContext`,
    `style`,
    `testId`,
    `xcss`,
    `tabIndex`,
  ],
  Zl = [`className`],
  Ql = { root: `_19itglyw _vchhusvi _r06hglyw _80omtlke`, disabled: `_80om13gf` },
  $l = (0, T.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.isDisabled,
      i = e.type,
      a = i === void 0 ? `button` : i,
      o = e.onClick,
      s = o === void 0 ? mn : o,
      c = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      f = e.style,
      p = e.testId,
      m = e.xcss,
      h = e.tabIndex,
      g = d(e, Xl),
      _ = (0, T.useContext)(Ro),
      v = Do({
        fn: (0, T.useCallback)(
          function (e, t) {
            (_ && _.tracePress(c, e.timeStamp), s(e, t));
          },
          [s, _, c],
        ),
        action: `clicked`,
        componentName: l || `Pressable`,
        packageName: `@atlaskit/primitives`,
        packageVersion: `19.0.0`,
        analyticsData: u,
        actionSubject: `button`,
      });
    g.className;
    var y = d(g, Zl);
    return T.createElement(
      Yl,
      z({ as: `button`, tabIndex: h ?? (Kl() && !r ? 0 : void 0), style: f }, y, {
        type: a,
        onClick: v,
        disabled: r,
        xcss: fl(Ql.root, r && Ql.disabled, m),
        testId: p,
        ref: t,
      }),
      n,
    );
  }),
  eu = (0, T.createContext)(!1),
  tu = function () {
    return (0, T.useContext)(eu);
  },
  nu = (0, T.createContext)(!1),
  ru = function () {
    return (0, T.useContext)(nu);
  },
  iu = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bind = void 0));
    function t(e, t) {
      var n = t.type,
        r = t.listener,
        i = t.options;
      return (
        e.addEventListener(n, r, i),
        function () {
          e.removeEventListener(n, r, i);
        }
      );
    }
    e.bind = t;
  }),
  au = i((e) => {
    var t =
      (e && e.__assign) ||
      function () {
        return (
          (t =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          t.apply(this, arguments)
        );
      };
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bindAll = void 0));
    var n = iu();
    function r(e) {
      if (e !== void 0) return typeof e == `boolean` ? { capture: e } : e;
    }
    function i(e, n) {
      return n == null ? e : t(t({}, e), { options: t(t({}, r(n)), r(e.options)) });
    }
    function a(e, t, r) {
      var a = t.map(function (t) {
        var a = i(t, r);
        return (0, n.bind)(e, a);
      });
      return function () {
        a.forEach(function (e) {
          return e();
        });
      };
    }
    e.bindAll = a;
  }),
  ou = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bindAll = e.bind = void 0));
    var t = iu();
    Object.defineProperty(e, `bind`, {
      enumerable: !0,
      get: function () {
        return t.bind;
      },
    });
    var n = au();
    Object.defineProperty(e, `bindAll`, {
      enumerable: !0,
      get: function () {
        return n.bindAll;
      },
    });
  }),
  su = [`light`, `dark`, `auto`],
  cu = [
    `light-increased-contrast`,
    `light`,
    `light-future`,
    `dark`,
    `dark-future`,
    `dark-increased-contrast`,
    `spacing`,
    `shape`,
    `typography`,
    `motion`,
  ];
[].concat(cu, []);
var lu = {
  "atlassian-light": {
    id: `light`,
    displayName: `Light Theme`,
    palette: `defaultPalette`,
    attributes: { type: `color`, mode: `light` },
  },
  "atlassian-light-future": {
    id: `light-future`,
    displayName: `Future Light Theme`,
    palette: `defaultPalette`,
    attributes: { type: `color`, mode: `light` },
    override: `light`,
  },
  "atlassian-light-increased-contrast": {
    id: `light-increased-contrast`,
    displayName: `Light Theme (increased contrast)`,
    palette: `defaultPalette`,
    attributes: { type: `color`, mode: `light` },
    extends: `light`,
    increasesContrastFor: `light`,
  },
  "atlassian-dark": {
    id: `dark`,
    displayName: `Dark Theme`,
    palette: `defaultPalette`,
    attributes: { type: `color`, mode: `dark` },
  },
  "atlassian-dark-future": {
    id: `dark-future`,
    displayName: `Future Dark Theme`,
    palette: `defaultPalette`,
    attributes: { type: `color`, mode: `dark` },
    override: `light`,
  },
  "atlassian-dark-increased-contrast": {
    id: `dark-increased-contrast`,
    displayName: `Dark Theme (increased contrast)`,
    palette: `defaultPalette`,
    attributes: { type: `color`, mode: `dark` },
    extends: `dark`,
    increasesContrastFor: `dark`,
  },
  "atlassian-spacing": {
    id: `spacing`,
    displayName: `Atlassian Spacing`,
    palette: `spacingScale`,
    attributes: { type: `spacing` },
  },
  "atlassian-typography": {
    id: `typography`,
    displayName: `Atlassian Typography`,
    palette: `typographyPalette`,
    attributes: { type: `typography` },
  },
  "atlassian-shape": {
    id: `shape`,
    displayName: `Shape`,
    palette: `shapePalette`,
    attributes: { type: `shape` },
  },
  "atlassian-motion": {
    id: `motion`,
    displayName: `Motion`,
    palette: `motionPalette`,
    attributes: { type: `motion` },
  },
};
function uu() {
  if (J(`platform-dst-shape-theme-default`)) return `shape`;
}
function du() {
  if (J(`platform-dst-motion-theme-default`)) return `motion`;
}
var Z = {
    colorMode: `auto`,
    contrastMode: `auto`,
    dark: `dark`,
    light: `light`,
    shape: uu,
    spacing: `spacing`,
    typography: `typography`,
    motion: du,
    UNSAFE_themeOptions: void 0,
  },
  fu = {
    "motion.avatar.enter": `--ds-avatar-enter`,
    "motion.avatar.exit": `--ds-avatar-exit`,
    "motion.avatar.hovered": `--ds-avatar-hovered`,
    "motion.blanket.enter": `--ds-blanket-enter`,
    "motion.blanket.exit": `--ds-blanket-exit`,
    "motion.duration.instant": `--ds-duration-instant`,
    "motion.duration.long": `--ds-duration-long`,
    "motion.duration.medium": `--ds-duration-medium`,
    "motion.duration.short": `--ds-duration-short`,
    "motion.duration.xlong": `--ds-duration-xlong`,
    "motion.duration.xshort": `--ds-duration-xshort`,
    "motion.duration.xxlong": `--ds-duration-xxlong`,
    "motion.duration.xxshort": `--ds-duration-xxshort`,
    "motion.easing.in.practical": `--ds-easing-in-practical`,
    "motion.easing.inout.bold": `--ds-easing-inout-bold`,
    "motion.easing.out.practical": `--ds-easing-out-practical`,
    "motion.easing.out.bold": `--ds-easing-out-bold`,
    "motion.easing.spring": `--ds-easing-spring`,
    "motion.flag.enter": `--ds-flag-enter`,
    "motion.flag.exit": `--ds-flag-exit`,
    "motion.flag.reposition": `--ds-flag-reposition`,
    "motion.keyframe.fade.in": `--ds-keyframe-fade-in`,
    "motion.keyframe.fade.out": `--ds-keyframe-fade-out`,
    "motion.keyframe.scale.in.medium": `--ds-keyframe-scale-in-medium`,
    "motion.keyframe.scale.in.small": `--ds-keyframe-scale-in-small`,
    "motion.keyframe.scale.out.medium": `--ds-keyframe-scale-out-medium`,
    "motion.keyframe.scale.out.small": `--ds-keyframe-scale-out-small`,
    "motion.keyframe.slide.in.bottom.short": `--ds-keyframe-slide-in-bottom-short`,
    "motion.keyframe.slide.in.left.half": `--ds-keyframe-slide-in-left-half`,
    "motion.keyframe.slide.in.left.short": `--ds-keyframe-slide-in-left-short`,
    "motion.keyframe.slide.in.right.short": `--ds-keyframe-slide-in-right-short`,
    "motion.keyframe.slide.in.top.short": `--ds-keyframe-slide-in-top-short`,
    "motion.keyframe.slide.out.bottom.short": `--ds-keyframe-slide-out-bottom-short`,
    "motion.keyframe.slide.out.left.half": `--ds-keyframe-slide-out-left-half`,
    "motion.keyframe.slide.out.left.short": `--ds-keyframe-slide-out-left-short`,
    "motion.keyframe.slide.out.right.short": `--ds-keyframe-slide-out-right-short`,
    "motion.keyframe.slide.out.top.short": `--ds-keyframe-slide-out-top-short`,
    "motion.modal.enter": `--ds-modal-enter`,
    "motion.modal.exit": `--ds-modal-exit`,
    "motion.popup.enter.bottom": `--ds-popup-enter-bottom`,
    "motion.popup.enter.left": `--ds-popup-enter-left`,
    "motion.popup.enter.right": `--ds-popup-enter-right`,
    "motion.popup.enter.top": `--ds-popup-enter-top`,
    "motion.popup.exit.bottom": `--ds-popup-exit-bottom`,
    "motion.popup.exit.left": `--ds-popup-exit-left`,
    "motion.popup.exit.right": `--ds-popup-exit-right`,
    "motion.popup.exit.top": `--ds-popup-exit-top`,
    "motion.spotlight.enter": `--ds-spotlight-enter`,
    "motion.spotlight.exit": `--ds-spotlight-exit`,
    "color.text": `--ds-text`,
    "color.text.accent.lime": `--ds-text-accent-lime`,
    "color.text.accent.lime.bolder": `--ds-text-accent-lime-bolder`,
    "color.text.accent.red": `--ds-text-accent-red`,
    "color.text.accent.red.bolder": `--ds-text-accent-red-bolder`,
    "color.text.accent.orange": `--ds-text-accent-orange`,
    "color.text.accent.orange.bolder": `--ds-text-accent-orange-bolder`,
    "color.text.accent.yellow": `--ds-text-accent-yellow`,
    "color.text.accent.yellow.bolder": `--ds-text-accent-yellow-bolder`,
    "color.text.accent.green": `--ds-text-accent-green`,
    "color.text.accent.green.bolder": `--ds-text-accent-green-bolder`,
    "color.text.accent.teal": `--ds-text-accent-teal`,
    "color.text.accent.teal.bolder": `--ds-text-accent-teal-bolder`,
    "color.text.accent.blue": `--ds-text-accent-blue`,
    "color.text.accent.blue.bolder": `--ds-text-accent-blue-bolder`,
    "color.text.accent.purple": `--ds-text-accent-purple`,
    "color.text.accent.purple.bolder": `--ds-text-accent-purple-bolder`,
    "color.text.accent.magenta": `--ds-text-accent-magenta`,
    "color.text.accent.magenta.bolder": `--ds-text-accent-magenta-bolder`,
    "color.text.accent.gray": `--ds-text-accent-gray`,
    "color.text.accent.gray.bolder": `--ds-text-accent-gray-bolder`,
    "color.text.disabled": `--ds-text-disabled`,
    "color.text.inverse": `--ds-text-inverse`,
    "color.text.selected": `--ds-text-selected`,
    "color.text.brand": `--ds-text-brand`,
    "color.text.danger": `--ds-text-danger`,
    "color.text.danger.bolder": `--ds-text-danger-bolder`,
    "color.text.warning": `--ds-text-warning`,
    "color.text.warning.inverse": `--ds-text-warning-inverse`,
    "color.text.warning.bolder": `--ds-text-warning-bolder`,
    "color.text.success": `--ds-text-success`,
    "color.text.success.bolder": `--ds-text-success-bolder`,
    "color.text.discovery": `--ds-text-discovery`,
    "color.text.discovery.bolder": `--ds-text-discovery-bolder`,
    "color.text.information": `--ds-text-information`,
    "color.text.information.bolder": `--ds-text-information-bolder`,
    "color.text.subtlest": `--ds-text-subtlest`,
    "color.text.subtle": `--ds-text-subtle`,
    "color.link": `--ds-link`,
    "color.link.pressed": `--ds-link-pressed`,
    "color.link.visited": `--ds-link-visited`,
    "color.link.visited.pressed": `--ds-link-visited-pressed`,
    "color.icon": `--ds-icon`,
    "color.icon.accent.lime": `--ds-icon-accent-lime`,
    "color.icon.accent.red": `--ds-icon-accent-red`,
    "color.icon.accent.orange": `--ds-icon-accent-orange`,
    "color.icon.accent.yellow": `--ds-icon-accent-yellow`,
    "color.icon.accent.green": `--ds-icon-accent-green`,
    "color.icon.accent.teal": `--ds-icon-accent-teal`,
    "color.icon.accent.blue": `--ds-icon-accent-blue`,
    "color.icon.accent.purple": `--ds-icon-accent-purple`,
    "color.icon.accent.magenta": `--ds-icon-accent-magenta`,
    "color.icon.accent.gray": `--ds-icon-accent-gray`,
    "color.icon.disabled": `--ds-icon-disabled`,
    "color.icon.inverse": `--ds-icon-inverse`,
    "color.icon.selected": `--ds-icon-selected`,
    "color.icon.brand": `--ds-icon-brand`,
    "color.icon.danger": `--ds-icon-danger`,
    "color.icon.warning": `--ds-icon-warning`,
    "color.icon.warning.inverse": `--ds-icon-warning-inverse`,
    "color.icon.success": `--ds-icon-success`,
    "color.icon.discovery": `--ds-icon-discovery`,
    "color.icon.information": `--ds-icon-information`,
    "color.icon.subtlest": `--ds-icon-subtlest`,
    "color.icon.subtle": `--ds-icon-subtle`,
    "color.border": `--ds-border`,
    "color.border.accent.lime": `--ds-border-accent-lime`,
    "color.border.accent.red": `--ds-border-accent-red`,
    "color.border.accent.orange": `--ds-border-accent-orange`,
    "color.border.accent.yellow": `--ds-border-accent-yellow`,
    "color.border.accent.green": `--ds-border-accent-green`,
    "color.border.accent.teal": `--ds-border-accent-teal`,
    "color.border.accent.blue": `--ds-border-accent-blue`,
    "color.border.accent.purple": `--ds-border-accent-purple`,
    "color.border.accent.magenta": `--ds-border-accent-magenta`,
    "color.border.accent.gray": `--ds-border-accent-gray`,
    "color.border.disabled": `--ds-border-disabled`,
    "color.border.focused": `--ds-border-focused`,
    "color.border.input": `--ds-border-input`,
    "color.border.inverse": `--ds-border-inverse`,
    "color.border.selected": `--ds-border-selected`,
    "color.border.brand": `--ds-border-brand`,
    "color.border.danger": `--ds-border-danger`,
    "color.border.warning": `--ds-border-warning`,
    "color.border.success": `--ds-border-success`,
    "color.border.discovery": `--ds-border-discovery`,
    "color.border.information": `--ds-border-information`,
    "color.border.bold": `--ds-border-bold`,
    "color.background.accent.lime.subtlest": `--ds-background-accent-lime-subtlest`,
    "color.background.accent.lime.subtlest.hovered": `--ds-background-accent-lime-subtlest-hovered`,
    "color.background.accent.lime.subtlest.pressed": `--ds-background-accent-lime-subtlest-pressed`,
    "color.background.accent.lime.subtler": `--ds-background-accent-lime-subtler`,
    "color.background.accent.lime.subtler.hovered": `--ds-background-accent-lime-subtler-hovered`,
    "color.background.accent.lime.subtler.pressed": `--ds-background-accent-lime-subtler-pressed`,
    "color.background.accent.lime.subtle": `--ds-background-accent-lime-subtle`,
    "color.background.accent.lime.subtle.hovered": `--ds-background-accent-lime-subtle-hovered`,
    "color.background.accent.lime.subtle.pressed": `--ds-background-accent-lime-subtle-pressed`,
    "color.background.accent.lime.bolder": `--ds-background-accent-lime-bolder`,
    "color.background.accent.lime.bolder.hovered": `--ds-background-accent-lime-bolder-hovered`,
    "color.background.accent.lime.bolder.pressed": `--ds-background-accent-lime-bolder-pressed`,
    "color.background.accent.red.subtlest": `--ds-background-accent-red-subtlest`,
    "color.background.accent.red.subtlest.hovered": `--ds-background-accent-red-subtlest-hovered`,
    "color.background.accent.red.subtlest.pressed": `--ds-background-accent-red-subtlest-pressed`,
    "color.background.accent.red.subtler": `--ds-background-accent-red-subtler`,
    "color.background.accent.red.subtler.hovered": `--ds-background-accent-red-subtler-hovered`,
    "color.background.accent.red.subtler.pressed": `--ds-background-accent-red-subtler-pressed`,
    "color.background.accent.red.subtle": `--ds-background-accent-red-subtle`,
    "color.background.accent.red.subtle.hovered": `--ds-background-accent-red-subtle-hovered`,
    "color.background.accent.red.subtle.pressed": `--ds-background-accent-red-subtle-pressed`,
    "color.background.accent.red.bolder": `--ds-background-accent-red-bolder`,
    "color.background.accent.red.bolder.hovered": `--ds-background-accent-red-bolder-hovered`,
    "color.background.accent.red.bolder.pressed": `--ds-background-accent-red-bolder-pressed`,
    "color.background.accent.orange.subtlest": `--ds-background-accent-orange-subtlest`,
    "color.background.accent.orange.subtlest.hovered": `--ds-background-accent-orange-subtlest-hovered`,
    "color.background.accent.orange.subtlest.pressed": `--ds-background-accent-orange-subtlest-pressed`,
    "color.background.accent.orange.subtler": `--ds-background-accent-orange-subtler`,
    "color.background.accent.orange.subtler.hovered": `--ds-background-accent-orange-subtler-hovered`,
    "color.background.accent.orange.subtler.pressed": `--ds-background-accent-orange-subtler-pressed`,
    "color.background.accent.orange.subtle": `--ds-background-accent-orange-subtle`,
    "color.background.accent.orange.subtle.hovered": `--ds-background-accent-orange-subtle-hovered`,
    "color.background.accent.orange.subtle.pressed": `--ds-background-accent-orange-subtle-pressed`,
    "color.background.accent.orange.bolder": `--ds-background-accent-orange-bolder`,
    "color.background.accent.orange.bolder.hovered": `--ds-background-accent-orange-bolder-hovered`,
    "color.background.accent.orange.bolder.pressed": `--ds-background-accent-orange-bolder-pressed`,
    "color.background.accent.yellow.subtlest": `--ds-background-accent-yellow-subtlest`,
    "color.background.accent.yellow.subtlest.hovered": `--ds-background-accent-yellow-subtlest-hovered`,
    "color.background.accent.yellow.subtlest.pressed": `--ds-background-accent-yellow-subtlest-pressed`,
    "color.background.accent.yellow.subtler": `--ds-background-accent-yellow-subtler`,
    "color.background.accent.yellow.subtler.hovered": `--ds-background-accent-yellow-subtler-hovered`,
    "color.background.accent.yellow.subtler.pressed": `--ds-background-accent-yellow-subtler-pressed`,
    "color.background.accent.yellow.subtle": `--ds-background-accent-yellow-subtle`,
    "color.background.accent.yellow.subtle.hovered": `--ds-background-accent-yellow-subtle-hovered`,
    "color.background.accent.yellow.subtle.pressed": `--ds-background-accent-yellow-subtle-pressed`,
    "color.background.accent.yellow.bolder": `--ds-background-accent-yellow-bolder`,
    "color.background.accent.yellow.bolder.hovered": `--ds-background-accent-yellow-bolder-hovered`,
    "color.background.accent.yellow.bolder.pressed": `--ds-background-accent-yellow-bolder-pressed`,
    "color.background.accent.green.subtlest": `--ds-background-accent-green-subtlest`,
    "color.background.accent.green.subtlest.hovered": `--ds-background-accent-green-subtlest-hovered`,
    "color.background.accent.green.subtlest.pressed": `--ds-background-accent-green-subtlest-pressed`,
    "color.background.accent.green.subtler": `--ds-background-accent-green-subtler`,
    "color.background.accent.green.subtler.hovered": `--ds-background-accent-green-subtler-hovered`,
    "color.background.accent.green.subtler.pressed": `--ds-background-accent-green-subtler-pressed`,
    "color.background.accent.green.subtle": `--ds-background-accent-green-subtle`,
    "color.background.accent.green.subtle.hovered": `--ds-background-accent-green-subtle-hovered`,
    "color.background.accent.green.subtle.pressed": `--ds-background-accent-green-subtle-pressed`,
    "color.background.accent.green.bolder": `--ds-background-accent-green-bolder`,
    "color.background.accent.green.bolder.hovered": `--ds-background-accent-green-bolder-hovered`,
    "color.background.accent.green.bolder.pressed": `--ds-background-accent-green-bolder-pressed`,
    "color.background.accent.teal.subtlest": `--ds-background-accent-teal-subtlest`,
    "color.background.accent.teal.subtlest.hovered": `--ds-background-accent-teal-subtlest-hovered`,
    "color.background.accent.teal.subtlest.pressed": `--ds-background-accent-teal-subtlest-pressed`,
    "color.background.accent.teal.subtler": `--ds-background-accent-teal-subtler`,
    "color.background.accent.teal.subtler.hovered": `--ds-background-accent-teal-subtler-hovered`,
    "color.background.accent.teal.subtler.pressed": `--ds-background-accent-teal-subtler-pressed`,
    "color.background.accent.teal.subtle": `--ds-background-accent-teal-subtle`,
    "color.background.accent.teal.subtle.hovered": `--ds-background-accent-teal-subtle-hovered`,
    "color.background.accent.teal.subtle.pressed": `--ds-background-accent-teal-subtle-pressed`,
    "color.background.accent.teal.bolder": `--ds-background-accent-teal-bolder`,
    "color.background.accent.teal.bolder.hovered": `--ds-background-accent-teal-bolder-hovered`,
    "color.background.accent.teal.bolder.pressed": `--ds-background-accent-teal-bolder-pressed`,
    "color.background.accent.blue.subtlest": `--ds-background-accent-blue-subtlest`,
    "color.background.accent.blue.subtlest.hovered": `--ds-background-accent-blue-subtlest-hovered`,
    "color.background.accent.blue.subtlest.pressed": `--ds-background-accent-blue-subtlest-pressed`,
    "color.background.accent.blue.subtler": `--ds-background-accent-blue-subtler`,
    "color.background.accent.blue.subtler.hovered": `--ds-background-accent-blue-subtler-hovered`,
    "color.background.accent.blue.subtler.pressed": `--ds-background-accent-blue-subtler-pressed`,
    "color.background.accent.blue.subtle": `--ds-background-accent-blue-subtle`,
    "color.background.accent.blue.subtle.hovered": `--ds-background-accent-blue-subtle-hovered`,
    "color.background.accent.blue.subtle.pressed": `--ds-background-accent-blue-subtle-pressed`,
    "color.background.accent.blue.bolder": `--ds-background-accent-blue-bolder`,
    "color.background.accent.blue.bolder.hovered": `--ds-background-accent-blue-bolder-hovered`,
    "color.background.accent.blue.bolder.pressed": `--ds-background-accent-blue-bolder-pressed`,
    "color.background.accent.purple.subtlest": `--ds-background-accent-purple-subtlest`,
    "color.background.accent.purple.subtlest.hovered": `--ds-background-accent-purple-subtlest-hovered`,
    "color.background.accent.purple.subtlest.pressed": `--ds-background-accent-purple-subtlest-pressed`,
    "color.background.accent.purple.subtler": `--ds-background-accent-purple-subtler`,
    "color.background.accent.purple.subtler.hovered": `--ds-background-accent-purple-subtler-hovered`,
    "color.background.accent.purple.subtler.pressed": `--ds-background-accent-purple-subtler-pressed`,
    "color.background.accent.purple.subtle": `--ds-background-accent-purple-subtle`,
    "color.background.accent.purple.subtle.hovered": `--ds-background-accent-purple-subtle-hovered`,
    "color.background.accent.purple.subtle.pressed": `--ds-background-accent-purple-subtle-pressed`,
    "color.background.accent.purple.bolder": `--ds-background-accent-purple-bolder`,
    "color.background.accent.purple.bolder.hovered": `--ds-background-accent-purple-bolder-hovered`,
    "color.background.accent.purple.bolder.pressed": `--ds-background-accent-purple-bolder-pressed`,
    "color.background.accent.magenta.subtlest": `--ds-background-accent-magenta-subtlest`,
    "color.background.accent.magenta.subtlest.hovered": `--ds-background-accent-magenta-subtlest-hovered`,
    "color.background.accent.magenta.subtlest.pressed": `--ds-background-accent-magenta-subtlest-pressed`,
    "color.background.accent.magenta.subtler": `--ds-background-accent-magenta-subtler`,
    "color.background.accent.magenta.subtler.hovered": `--ds-background-accent-magenta-subtler-hovered`,
    "color.background.accent.magenta.subtler.pressed": `--ds-background-accent-magenta-subtler-pressed`,
    "color.background.accent.magenta.subtle": `--ds-background-accent-magenta-subtle`,
    "color.background.accent.magenta.subtle.hovered": `--ds-background-accent-magenta-subtle-hovered`,
    "color.background.accent.magenta.subtle.pressed": `--ds-background-accent-magenta-subtle-pressed`,
    "color.background.accent.magenta.bolder": `--ds-background-accent-magenta-bolder`,
    "color.background.accent.magenta.bolder.hovered": `--ds-background-accent-magenta-bolder-hovered`,
    "color.background.accent.magenta.bolder.pressed": `--ds-background-accent-magenta-bolder-pressed`,
    "color.background.accent.gray.subtlest": `--ds-background-accent-gray-subtlest`,
    "color.background.accent.gray.subtlest.hovered": `--ds-background-accent-gray-subtlest-hovered`,
    "color.background.accent.gray.subtlest.pressed": `--ds-background-accent-gray-subtlest-pressed`,
    "color.background.accent.gray.subtler": `--ds-background-accent-gray-subtler`,
    "color.background.accent.gray.subtler.hovered": `--ds-background-accent-gray-subtler-hovered`,
    "color.background.accent.gray.subtler.pressed": `--ds-background-accent-gray-subtler-pressed`,
    "color.background.accent.gray.subtle": `--ds-background-accent-gray-subtle`,
    "color.background.accent.gray.subtle.hovered": `--ds-background-accent-gray-subtle-hovered`,
    "color.background.accent.gray.subtle.pressed": `--ds-background-accent-gray-subtle-pressed`,
    "color.background.accent.gray.bolder": `--ds-background-accent-gray-bolder`,
    "color.background.accent.gray.bolder.hovered": `--ds-background-accent-gray-bolder-hovered`,
    "color.background.accent.gray.bolder.pressed": `--ds-background-accent-gray-bolder-pressed`,
    "color.background.disabled": `--ds-background-disabled`,
    "color.background.input": `--ds-background-input`,
    "color.background.input.hovered": `--ds-background-input-hovered`,
    "color.background.input.pressed": `--ds-background-input-pressed`,
    "color.background.inverse.subtle": `--ds-background-inverse-subtle`,
    "color.background.inverse.subtle.hovered": `--ds-background-inverse-subtle-hovered`,
    "color.background.inverse.subtle.pressed": `--ds-background-inverse-subtle-pressed`,
    "color.background.neutral": `--ds-background-neutral`,
    "color.background.neutral.hovered": `--ds-background-neutral-hovered`,
    "color.background.neutral.pressed": `--ds-background-neutral-pressed`,
    "color.background.neutral.subtle": `--ds-background-neutral-subtle`,
    "color.background.neutral.subtle.hovered": `--ds-background-neutral-subtle-hovered`,
    "color.background.neutral.subtle.pressed": `--ds-background-neutral-subtle-pressed`,
    "color.background.neutral.bold": `--ds-background-neutral-bold`,
    "color.background.neutral.bold.hovered": `--ds-background-neutral-bold-hovered`,
    "color.background.neutral.bold.pressed": `--ds-background-neutral-bold-pressed`,
    "color.background.selected": `--ds-background-selected`,
    "color.background.selected.hovered": `--ds-background-selected-hovered`,
    "color.background.selected.pressed": `--ds-background-selected-pressed`,
    "color.background.selected.bold": `--ds-background-selected-bold`,
    "color.background.selected.bold.hovered": `--ds-background-selected-bold-hovered`,
    "color.background.selected.bold.pressed": `--ds-background-selected-bold-pressed`,
    "color.background.brand.subtlest": `--ds-background-brand-subtlest`,
    "color.background.brand.subtlest.hovered": `--ds-background-brand-subtlest-hovered`,
    "color.background.brand.subtlest.pressed": `--ds-background-brand-subtlest-pressed`,
    "color.background.brand.bold": `--ds-background-brand-bold`,
    "color.background.brand.bold.hovered": `--ds-background-brand-bold-hovered`,
    "color.background.brand.bold.pressed": `--ds-background-brand-bold-pressed`,
    "color.background.brand.boldest": `--ds-background-brand-boldest`,
    "color.background.brand.boldest.hovered": `--ds-background-brand-boldest-hovered`,
    "color.background.brand.boldest.pressed": `--ds-background-brand-boldest-pressed`,
    "color.background.danger": `--ds-background-danger`,
    "color.background.danger.hovered": `--ds-background-danger-hovered`,
    "color.background.danger.pressed": `--ds-background-danger-pressed`,
    "color.background.danger.subtler": `--ds-background-danger-subtler`,
    "color.background.danger.subtler.hovered": `--ds-background-danger-subtler-hovered`,
    "color.background.danger.subtler.pressed": `--ds-background-danger-subtler-pressed`,
    "color.background.danger.bold": `--ds-background-danger-bold`,
    "color.background.danger.bold.hovered": `--ds-background-danger-bold-hovered`,
    "color.background.danger.bold.pressed": `--ds-background-danger-bold-pressed`,
    "color.background.warning": `--ds-background-warning`,
    "color.background.warning.hovered": `--ds-background-warning-hovered`,
    "color.background.warning.pressed": `--ds-background-warning-pressed`,
    "color.background.warning.subtler": `--ds-background-warning-subtler`,
    "color.background.warning.subtler.hovered": `--ds-background-warning-subtler-hovered`,
    "color.background.warning.subtler.pressed": `--ds-background-warning-subtler-pressed`,
    "color.background.warning.bold": `--ds-background-warning-bold`,
    "color.background.warning.bold.hovered": `--ds-background-warning-bold-hovered`,
    "color.background.warning.bold.pressed": `--ds-background-warning-bold-pressed`,
    "color.background.success": `--ds-background-success`,
    "color.background.success.hovered": `--ds-background-success-hovered`,
    "color.background.success.pressed": `--ds-background-success-pressed`,
    "color.background.success.subtler": `--ds-background-success-subtler`,
    "color.background.success.subtler.hovered": `--ds-background-success-subtler-hovered`,
    "color.background.success.subtler.pressed": `--ds-background-success-subtler-pressed`,
    "color.background.success.bold": `--ds-background-success-bold`,
    "color.background.success.bold.hovered": `--ds-background-success-bold-hovered`,
    "color.background.success.bold.pressed": `--ds-background-success-bold-pressed`,
    "color.background.discovery": `--ds-background-discovery`,
    "color.background.discovery.hovered": `--ds-background-discovery-hovered`,
    "color.background.discovery.pressed": `--ds-background-discovery-pressed`,
    "color.background.discovery.subtler": `--ds-background-discovery-subtler`,
    "color.background.discovery.subtler.hovered": `--ds-background-discovery-subtler-hovered`,
    "color.background.discovery.subtler.pressed": `--ds-background-discovery-subtler-pressed`,
    "color.background.discovery.bold": `--ds-background-discovery-bold`,
    "color.background.discovery.bold.hovered": `--ds-background-discovery-bold-hovered`,
    "color.background.discovery.bold.pressed": `--ds-background-discovery-bold-pressed`,
    "color.background.information": `--ds-background-information`,
    "color.background.information.hovered": `--ds-background-information-hovered`,
    "color.background.information.pressed": `--ds-background-information-pressed`,
    "color.background.information.subtler": `--ds-background-information-subtler`,
    "color.background.information.subtler.hovered": `--ds-background-information-subtler-hovered`,
    "color.background.information.subtler.pressed": `--ds-background-information-subtler-pressed`,
    "color.background.information.bold": `--ds-background-information-bold`,
    "color.background.information.bold.hovered": `--ds-background-information-bold-hovered`,
    "color.background.information.bold.pressed": `--ds-background-information-bold-pressed`,
    "color.blanket": `--ds-blanket`,
    "color.blanket.selected": `--ds-blanket-selected`,
    "color.blanket.danger": `--ds-blanket-danger`,
    "color.interaction.hovered": `--ds-interaction-hovered`,
    "color.interaction.pressed": `--ds-interaction-pressed`,
    "color.skeleton": `--ds-skeleton`,
    "color.skeleton.subtle": `--ds-skeleton-subtle`,
    "color.chart.categorical.1": `--ds-chart-categorical-1`,
    "color.chart.categorical.1.hovered": `--ds-chart-categorical-1-hovered`,
    "color.chart.categorical.2": `--ds-chart-categorical-2`,
    "color.chart.categorical.2.hovered": `--ds-chart-categorical-2-hovered`,
    "color.chart.categorical.3": `--ds-chart-categorical-3`,
    "color.chart.categorical.3.hovered": `--ds-chart-categorical-3-hovered`,
    "color.chart.categorical.4": `--ds-chart-categorical-4`,
    "color.chart.categorical.4.hovered": `--ds-chart-categorical-4-hovered`,
    "color.chart.categorical.5": `--ds-chart-categorical-5`,
    "color.chart.categorical.5.hovered": `--ds-chart-categorical-5-hovered`,
    "color.chart.categorical.6": `--ds-chart-categorical-6`,
    "color.chart.categorical.6.hovered": `--ds-chart-categorical-6-hovered`,
    "color.chart.categorical.7": `--ds-chart-categorical-7`,
    "color.chart.categorical.7.hovered": `--ds-chart-categorical-7-hovered`,
    "color.chart.categorical.8": `--ds-chart-categorical-8`,
    "color.chart.categorical.8.hovered": `--ds-chart-categorical-8-hovered`,
    "color.chart.lime.bold": `--ds-chart-lime-bold`,
    "color.chart.lime.bold.hovered": `--ds-chart-lime-bold-hovered`,
    "color.chart.lime.bolder": `--ds-chart-lime-bolder`,
    "color.chart.lime.bolder.hovered": `--ds-chart-lime-bolder-hovered`,
    "color.chart.lime.boldest": `--ds-chart-lime-boldest`,
    "color.chart.lime.boldest.hovered": `--ds-chart-lime-boldest-hovered`,
    "color.chart.neutral": `--ds-chart-neutral`,
    "color.chart.neutral.hovered": `--ds-chart-neutral-hovered`,
    "color.chart.red.bold": `--ds-chart-red-bold`,
    "color.chart.red.bold.hovered": `--ds-chart-red-bold-hovered`,
    "color.chart.red.bolder": `--ds-chart-red-bolder`,
    "color.chart.red.bolder.hovered": `--ds-chart-red-bolder-hovered`,
    "color.chart.red.boldest": `--ds-chart-red-boldest`,
    "color.chart.red.boldest.hovered": `--ds-chart-red-boldest-hovered`,
    "color.chart.orange.bold": `--ds-chart-orange-bold`,
    "color.chart.orange.bold.hovered": `--ds-chart-orange-bold-hovered`,
    "color.chart.orange.bolder": `--ds-chart-orange-bolder`,
    "color.chart.orange.bolder.hovered": `--ds-chart-orange-bolder-hovered`,
    "color.chart.orange.boldest": `--ds-chart-orange-boldest`,
    "color.chart.orange.boldest.hovered": `--ds-chart-orange-boldest-hovered`,
    "color.chart.yellow.bold": `--ds-chart-yellow-bold`,
    "color.chart.yellow.bold.hovered": `--ds-chart-yellow-bold-hovered`,
    "color.chart.yellow.bolder": `--ds-chart-yellow-bolder`,
    "color.chart.yellow.bolder.hovered": `--ds-chart-yellow-bolder-hovered`,
    "color.chart.yellow.boldest": `--ds-chart-yellow-boldest`,
    "color.chart.yellow.boldest.hovered": `--ds-chart-yellow-boldest-hovered`,
    "color.chart.green.bold": `--ds-chart-green-bold`,
    "color.chart.green.bold.hovered": `--ds-chart-green-bold-hovered`,
    "color.chart.green.bolder": `--ds-chart-green-bolder`,
    "color.chart.green.bolder.hovered": `--ds-chart-green-bolder-hovered`,
    "color.chart.green.boldest": `--ds-chart-green-boldest`,
    "color.chart.green.boldest.hovered": `--ds-chart-green-boldest-hovered`,
    "color.chart.teal.bold": `--ds-chart-teal-bold`,
    "color.chart.teal.bold.hovered": `--ds-chart-teal-bold-hovered`,
    "color.chart.teal.bolder": `--ds-chart-teal-bolder`,
    "color.chart.teal.bolder.hovered": `--ds-chart-teal-bolder-hovered`,
    "color.chart.teal.boldest": `--ds-chart-teal-boldest`,
    "color.chart.teal.boldest.hovered": `--ds-chart-teal-boldest-hovered`,
    "color.chart.blue.bold": `--ds-chart-blue-bold`,
    "color.chart.blue.bold.hovered": `--ds-chart-blue-bold-hovered`,
    "color.chart.blue.bolder": `--ds-chart-blue-bolder`,
    "color.chart.blue.bolder.hovered": `--ds-chart-blue-bolder-hovered`,
    "color.chart.blue.boldest": `--ds-chart-blue-boldest`,
    "color.chart.blue.boldest.hovered": `--ds-chart-blue-boldest-hovered`,
    "color.chart.purple.bold": `--ds-chart-purple-bold`,
    "color.chart.purple.bold.hovered": `--ds-chart-purple-bold-hovered`,
    "color.chart.purple.bolder": `--ds-chart-purple-bolder`,
    "color.chart.purple.bolder.hovered": `--ds-chart-purple-bolder-hovered`,
    "color.chart.purple.boldest": `--ds-chart-purple-boldest`,
    "color.chart.purple.boldest.hovered": `--ds-chart-purple-boldest-hovered`,
    "color.chart.magenta.bold": `--ds-chart-magenta-bold`,
    "color.chart.magenta.bold.hovered": `--ds-chart-magenta-bold-hovered`,
    "color.chart.magenta.bolder": `--ds-chart-magenta-bolder`,
    "color.chart.magenta.bolder.hovered": `--ds-chart-magenta-bolder-hovered`,
    "color.chart.magenta.boldest": `--ds-chart-magenta-boldest`,
    "color.chart.magenta.boldest.hovered": `--ds-chart-magenta-boldest-hovered`,
    "color.chart.gray.bold": `--ds-chart-gray-bold`,
    "color.chart.gray.bold.hovered": `--ds-chart-gray-bold-hovered`,
    "color.chart.gray.bolder": `--ds-chart-gray-bolder`,
    "color.chart.gray.bolder.hovered": `--ds-chart-gray-bolder-hovered`,
    "color.chart.gray.boldest": `--ds-chart-gray-boldest`,
    "color.chart.gray.boldest.hovered": `--ds-chart-gray-boldest-hovered`,
    "color.chart.brand": `--ds-chart-brand`,
    "color.chart.brand.hovered": `--ds-chart-brand-hovered`,
    "color.chart.danger": `--ds-chart-danger`,
    "color.chart.danger.hovered": `--ds-chart-danger-hovered`,
    "color.chart.danger.bold": `--ds-chart-danger-bold`,
    "color.chart.danger.bold.hovered": `--ds-chart-danger-bold-hovered`,
    "color.chart.warning": `--ds-chart-warning`,
    "color.chart.warning.hovered": `--ds-chart-warning-hovered`,
    "color.chart.warning.bold": `--ds-chart-warning-bold`,
    "color.chart.warning.bold.hovered": `--ds-chart-warning-bold-hovered`,
    "color.chart.success": `--ds-chart-success`,
    "color.chart.success.hovered": `--ds-chart-success-hovered`,
    "color.chart.success.bold": `--ds-chart-success-bold`,
    "color.chart.success.bold.hovered": `--ds-chart-success-bold-hovered`,
    "color.chart.discovery": `--ds-chart-discovery`,
    "color.chart.discovery.hovered": `--ds-chart-discovery-hovered`,
    "color.chart.discovery.bold": `--ds-chart-discovery-bold`,
    "color.chart.discovery.bold.hovered": `--ds-chart-discovery-bold-hovered`,
    "color.chart.information": `--ds-chart-information`,
    "color.chart.information.hovered": `--ds-chart-information-hovered`,
    "color.chart.information.bold": `--ds-chart-information-bold`,
    "color.chart.information.bold.hovered": `--ds-chart-information-bold-hovered`,
    "elevation.surface": `--ds-surface`,
    "elevation.surface.hovered": `--ds-surface-hovered`,
    "elevation.surface.pressed": `--ds-surface-pressed`,
    "elevation.surface.overlay": `--ds-surface-overlay`,
    "elevation.surface.overlay.hovered": `--ds-surface-overlay-hovered`,
    "elevation.surface.overlay.pressed": `--ds-surface-overlay-pressed`,
    "elevation.surface.raised": `--ds-surface-raised`,
    "elevation.surface.raised.hovered": `--ds-surface-raised-hovered`,
    "elevation.surface.raised.pressed": `--ds-surface-raised-pressed`,
    "elevation.surface.sunken": `--ds-surface-sunken`,
    "elevation.shadow.overflow": `--ds-shadow-overflow`,
    "elevation.shadow.overflow.perimeter": `--ds-shadow-overflow-perimeter`,
    "elevation.shadow.overflow.spread": `--ds-shadow-overflow-spread`,
    "elevation.shadow.overlay": `--ds-shadow-overlay`,
    "elevation.shadow.raised": `--ds-shadow-raised`,
    "opacity.disabled": `--ds-opacity-disabled`,
    "opacity.loading": `--ds-opacity-loading`,
    "utility.UNSAFE.transparent": `--ds-UNSAFE-transparent`,
    "utility.elevation.surface.current": `--ds-elevation-surface-current`,
    "space.0": `--ds-space-0`,
    "space.025": `--ds-space-025`,
    "space.050": `--ds-space-050`,
    "space.075": `--ds-space-075`,
    "space.100": `--ds-space-100`,
    "space.150": `--ds-space-150`,
    "space.200": `--ds-space-200`,
    "space.250": `--ds-space-250`,
    "space.300": `--ds-space-300`,
    "space.400": `--ds-space-400`,
    "space.500": `--ds-space-500`,
    "space.600": `--ds-space-600`,
    "space.800": `--ds-space-800`,
    "space.1000": `--ds-space-1000`,
    "space.negative.025": `--ds-space-negative-025`,
    "space.negative.050": `--ds-space-negative-050`,
    "space.negative.075": `--ds-space-negative-075`,
    "space.negative.100": `--ds-space-negative-100`,
    "space.negative.150": `--ds-space-negative-150`,
    "space.negative.200": `--ds-space-negative-200`,
    "space.negative.250": `--ds-space-negative-250`,
    "space.negative.300": `--ds-space-negative-300`,
    "space.negative.400": `--ds-space-negative-400`,
    "font.heading.xxlarge": `--ds-font-heading-xxlarge`,
    "font.heading.xlarge": `--ds-font-heading-xlarge`,
    "font.heading.large": `--ds-font-heading-large`,
    "font.heading.medium": `--ds-font-heading-medium`,
    "font.heading.small": `--ds-font-heading-small`,
    "font.heading.xsmall": `--ds-font-heading-xsmall`,
    "font.heading.xxsmall": `--ds-font-heading-xxsmall`,
    "font.body.large": `--ds-font-body-large`,
    "font.body": `--ds-font-body`,
    "font.body.small": `--ds-font-body-small`,
    "font.metric.large": `--ds-font-metric-large`,
    "font.metric.medium": `--ds-font-metric-medium`,
    "font.metric.small": `--ds-font-metric-small`,
    "font.code": `--ds-font-code`,
    "font.weight.regular": `--ds-font-weight-regular`,
    "font.weight.medium": `--ds-font-weight-medium`,
    "font.weight.semibold": `--ds-font-weight-semibold`,
    "font.weight.bold": `--ds-font-weight-bold`,
    "font.family.heading": `--ds-font-family-heading`,
    "font.family.body": `--ds-font-family-body`,
    "font.family.code": `--ds-font-family-code`,
    "font.family.brand.heading": `--ds-font-family-brand-heading`,
    "font.family.brand.body": `--ds-font-family-brand-body`,
    "radius.xsmall": `--ds-radius-xsmall`,
    "radius.small": `--ds-radius-small`,
    "radius.medium": `--ds-radius-medium`,
    "radius.large": `--ds-radius-large`,
    "radius.xlarge": `--ds-radius-xlarge`,
    "radius.xxlarge": `--ds-radius-xxlarge`,
    "radius.full": `--ds-radius-full`,
    "radius.tile": `--ds-radius-tile`,
    "border.width": `--ds-border-width`,
    "border.width.selected": `--ds-border-width-selected`,
    "border.width.focused": `--ds-border-width-focused`,
  },
  pu = `data-theme`,
  mu = `data-subtree-theme`,
  hu = `data-color-mode`,
  gu = `data-contrast-mode`,
  _u = `data-custom-theme`,
  vu = `--ds-elevation-surface-current`,
  yu = [`light`, `dark`, `spacing`, `typography`, `shape`, `motion`],
  bu = `UNSAFE_themeOptions`,
  xu = function (e) {
    return (
      yu.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  Su = function (e) {
    return (
      cu.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  Cu = function (e) {
    return [`light`, `dark`, `auto`].includes(e);
  },
  wu = function (e) {
    return e
      .split(` `)
      .map(function (e) {
        return e.split(/:([^]*)/);
      })
      .reduce(function (e, t) {
        var n = f(t, 2),
          r = n[0],
          i = n[1];
        if ((r === `colorMode` && Cu(i) && (e[r] = i), xu(r) && Su(i) && (e[r] = i), r === bu))
          try {
            e[bu] = JSON.parse(i);
          } catch {}
        return e;
      }, {});
  },
  Tu = function (e) {
    return Object.entries(e).reduce(function (e, t) {
      var n = f(t, 2),
        r = n[0],
        i = n[1];
      return (r === `colorMode` && typeof i == `string` && Cu(i)) ||
        (r === bu && C(i) === `object`) ||
        (xu(r) && typeof i == `string` && Su(i))
        ? e + `${e ? ` ` : ``}${r}:${C(i) === `object` ? JSON.stringify(i) : i}`
        : e;
    }, ``);
  };
function Eu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Du(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Eu(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Eu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ou = function (e) {
    return (
      su.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  ku = function () {
    if (typeof document > `u`) return {};
    var e = document.documentElement,
      t = e.getAttribute(`data-color-mode`) || ``;
    return Du(Du({}, wu(e.getAttribute(`data-theme`) || ``)), Ou(t) && { colorMode: t });
  },
  Au = function (e) {
    return /^#[0-9A-F]{6}$/i.test(e);
  },
  ju = function (e) {
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e);
  };
function Mu(e, t, n) {
  return `#` + ((1 << 24) + (e << 16) + (t << 8) + n).toString(16).slice(1);
}
function Nu(e) {
  if (e.length === 9) {
    var t = parseInt(e.slice(7, 9), 16) / 255;
    return Number(parseFloat(t.toString()).toFixed(2));
  }
  return 1;
}
function Pu(e) {
  if (!ju(e)) throw Error(`Invalid HEX`);
  var t = e.substring(1).split(``);
  return (
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = `0x` + t.join(``)),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255, Nu(e)]
  );
}
function Fu(e) {
  if (!ju(e)) throw Error(`Invalid HEX`);
  var t = e.substring(1).split(``);
  return (
    t.length === 3 && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
    (t = `0x` + t.join(``)),
    [(t >> 16) & 255, (t >> 8) & 255, t & 255]
  );
}
function Iu(e) {
  if (!ju(e)) throw Error(`Invalid HEX`);
  var t = 0,
    n = 0,
    r = 0;
  (e.length === 4
    ? ((t = `0x` + e[1] + e[1]), (n = `0x` + e[2] + e[2]), (r = `0x` + e[3] + e[3]))
    : e.length === 7 &&
      ((t = `0x` + e[1] + e[2]), (n = `0x` + e[3] + e[4]), (r = `0x` + e[5] + e[6])),
    (t /= 255),
    (n /= 255),
    (r /= 255));
  var i = Math.min(t, n, r),
    a = Math.max(t, n, r),
    o = a - i,
    s = 0,
    c = 0,
    l = 0;
  return (
    (s = o === 0 ? 0 : a === t ? ((n - r) / o) % 6 : a === n ? (r - t) / o + 2 : (t - n) / o + 4),
    (s = Math.round(s * 60)),
    s < 0 && (s += 360),
    (l = (a + i) / 2),
    (c = o === 0 ? 0 : o / (1 - Math.abs(2 * l - 1))),
    (c = +(c * 100).toFixed(1)),
    (l = +(l * 100).toFixed(1)),
    [s, c, l]
  );
}
function Lu(e, t, n) {
  ((t /= 100), (n /= 100));
  var r = function (t) {
      return (t + e / 30) % 12;
    },
    i = t * Math.min(n, 1 - n),
    a = function (e) {
      return n - i * Math.max(-1, Math.min(r(e) - 3, Math.min(9 - r(e), 1)));
    };
  return [255 * a(0), 255 * a(8), 255 * a(4)];
}
function Ru(e, t, n) {
  var r = e / 255,
    i = t / 255,
    a = n / 255,
    o = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4,
    s = i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4,
    c = a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  return 0.2126 * o + 0.7152 * s + 0.0722 * c;
}
function zu(e, t) {
  if (!ju(e) || !ju(t)) throw Error(`Invalid HEX`);
  var n = Fu(e),
    r = Fu(t),
    i = Ru(n[0], n[1], n[2]),
    a = Ru(r[0], r[1], r[2]),
    o = Math.max(i, a),
    s = Math.min(i, a);
  return (o + 0.05) / (s + 0.05);
}
function Bu(e, t) {
  var n = Vu(e),
    r = Vu(t),
    i = n[0] - r[0],
    a = n[1] - r[1],
    o = n[2] - r[2],
    s = Math.sqrt(n[1] * n[1] + n[2] * n[2]),
    c = s - Math.sqrt(r[1] * r[1] + r[2] * r[2]),
    l = a * a + o * o - c * c;
  l = l < 0 ? 0 : Math.sqrt(l);
  var u = 1 + 0.045 * s,
    d = 1 + 0.015 * s,
    f = i / 1,
    p = c / u,
    m = l / d,
    h = f * f + p * p + m * m;
  return h < 0 ? 0 : Math.sqrt(h);
}
function Vu(e) {
  var t = e[0] / 255,
    n = e[1] / 255,
    r = e[2] / 255,
    i,
    a,
    o;
  return (
    (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
    (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92),
    (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
    (i = (t * 0.4124 + n * 0.3576 + r * 0.1805) / 0.95047),
    (a = (t * 0.2126 + n * 0.7152 + r * 0.0722) / 1),
    (o = (t * 0.0193 + n * 0.1192 + r * 0.9505) / 1.08883),
    (i = i > 0.008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116),
    (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
    (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116),
    [116 * a - 16, 500 * (i - a), 200 * (a - o)]
  );
}
var Hu = function (e) {
  for (var t = 0, n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    ((t = (t << 5) - t + r), (t &= t));
  }
  return new Uint32Array([t])[0].toString(36);
};
function Uu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Uu(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Uu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Gu = `light`,
  Ku = `no-preference`,
  qu = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.colorMode,
      n = t === void 0 ? Z.colorMode : t,
      r = e.dark,
      i = r === void 0 ? Z.dark : r,
      a = e.light,
      o = a === void 0 ? Z.light : a,
      s = e.contrastMode,
      c = s === void 0 ? Z.contrastMode : s,
      l = e.motion,
      u = l === void 0 ? Z.motion() : l,
      d = e.shape,
      f = d === void 0 ? Z.shape() : d,
      p = e.spacing,
      m = p === void 0 ? Z.spacing : p,
      h = e.typography,
      g = h === void 0 ? Z.typography : h,
      _ = e.UNSAFE_themeOptions,
      v = _ === void 0 ? Z.UNSAFE_themeOptions : _,
      y = x(
        x({}, pu, Tu({ dark: i, light: o, motion: u, shape: f, spacing: m, typography: g })),
        hu,
        n === `auto` ? Gu : n,
      );
    if (
      (J(`platform_increased-contrast-themes`) &&
        (y = Wu(Wu({}, y), {}, x({}, gu, c === `auto` ? Ku : c))),
      v && Au(v.brandColor))
    ) {
      var b = Hu(JSON.stringify(v));
      y[_u] = b;
    }
    return y;
  };
ot();
var Ju = {
    light: function () {
      return at(() => import(`./atlassian-light-CmTQZltT.js`), [], import.meta.url);
    },
    "light-future": function () {
      return at(() => import(`./atlassian-light-future-C1IISflO.js`), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return at(
        () => import(`./atlassian-light-increased-contrast-DdTVsidF.js`),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return at(() => import(`./atlassian-dark-DLSM76AZ.js`), [], import.meta.url);
    },
    "dark-future": function () {
      return at(() => import(`./atlassian-dark-future-XOgq3F_t.js`), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return at(
        () => import(`./atlassian-dark-increased-contrast-D-zcWJ7-.js`),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return at(() => import(`./atlassian-spacing-BKMfruk3.js`), [], import.meta.url);
    },
    typography: function () {
      return at(() => import(`./atlassian-typography-BDbyNlyx.js`), [], import.meta.url);
    },
    shape: function () {
      return at(() => import(`./atlassian-shape-YciEaKQR.js`), [], import.meta.url);
    },
    motion: function () {
      return at(() => import(`./atlassian-motion-T7vuu75Q.js`), [], import.meta.url);
    },
  },
  Yu = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n, r;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  !document.head.querySelector(`style[data-theme="${t}"]:not([data-custom-theme])`)
                ) {
                  e.next = 2;
                  break;
                }
                return e.abrupt(`return`);
              case 2:
                if (t) {
                  e.next = 4;
                  break;
                }
                return e.abrupt(`return`);
              case 4:
                return ((e.next = 6), Xu(t));
              case 6:
                ((n = e.sent),
                  (r = document.createElement(`style`)),
                  (r.textContent = n),
                  (r.dataset.theme = t),
                  document.head.appendChild(r));
              case 11:
              case `end`:
                return e.stop();
            }
        }, e);
      }),
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })(),
  Xu = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n, r;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), Ju[t]());
              case 2:
                return ((n = e.sent), (r = n.default), e.abrupt(`return`, r));
              case 5:
              case `end`:
                return e.stop();
            }
        }, e);
      }),
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })(),
  Zu = ou(),
  Qu = typeof window < `u` && `matchMedia` in window;
function $u(e) {
  document.documentElement.setAttribute(hu, e.matches ? `dark` : `light`);
}
var ed = Qu && window.matchMedia(`(prefers-color-scheme: dark)`),
  td = new ((function () {
    function e() {
      (h(this, e), x(this, `unbindThemeChangeListener`, null));
    }
    return u(e, [
      {
        key: `getColorMode`,
        value: function () {
          return ed && ed != null && ed.matches ? `dark` : `light`;
        },
      },
      {
        key: `bind`,
        value: function () {
          ed &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = (0, Zu.bind)(ed, { type: `change`, listener: $u }));
        },
      },
      {
        key: `unbind`,
        value: function () {
          this.unbindThemeChangeListener &&= (this.unbindThemeChangeListener(), null);
        },
      },
    ]);
  })())(),
  nd = typeof window < `u` && `matchMedia` in window;
function rd(e) {
  document.documentElement.setAttribute(gu, e.matches ? `more` : `no-preference`);
}
var id = nd && window.matchMedia(`(prefers-contrast: more)`),
  ad = new ((function () {
    function e() {
      (h(this, e), x(this, `unbindContrastChangeListener`, null));
    }
    return u(e, [
      {
        key: `getContrastMode`,
        value: function () {
          return id && id != null && id.matches ? `more` : `no-preference`;
        },
      },
      {
        key: `bind`,
        value: function () {
          id &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = (0, Zu.bind)(id, {
              type: `change`,
              listener: rd,
            }));
        },
      },
      {
        key: `unbind`,
        value: function () {
          this.unbindContrastChangeListener &&= (this.unbindContrastChangeListener(), null);
        },
      },
    ]);
  })())();
function od(e) {
  (e.colorMode === `auto` ? ((e.colorMode = td.getColorMode()), td.bind()) : td.unbind(),
    J(`platform_increased-contrast-themes`) &&
      (e.contrastMode === `auto`
        ? ((e.contrastMode = ad.getContrastMode()), ad.bind())
        : ad.unbind()));
  var t = qu(e);
  return (
    Object.entries(t).forEach(function (e) {
      var t = f(e, 2),
        n = t[0],
        r = t[1];
      document.documentElement.setAttribute(n, r);
    }),
    function () {
      (td.unbind(), J(`platform_increased-contrast-themes`) && ad.unbind());
    }
  );
}
function sd(e, t) {
  var n = Hu(JSON.stringify(e)),
    r = [];
  return (
    (t === `auto` ? [`light`, `dark`] : [t]).forEach(function (e) {
      var t = document.head.querySelector(`style[${_u}="${n}"][${pu}="${e}"]`);
      t ? document.head.appendChild(t) : r.push(e);
    }),
    r
  );
}
function cd(e) {
  var t = l(Array.from(document.head.querySelectorAll(`style[${_u}][${pu}]`)));
  t.length < e ||
    t.slice(0, t.length - (e - 1)).forEach(function (e) {
      return e.remove();
    });
}
function ld(e, t) {
  return Object.entries(e).reduce(function (e, n) {
    var r = f(n, 2),
      i = r[0],
      a = r[1],
      o = fu[i];
    return o
      ? `${e}
  ${o}: ${typeof a == `string` ? a : t[a]};`
      : e;
  }, ``);
}
function ud(e) {
  return Object.entries(lu).find(function (t) {
    return f(t, 2)[1].increasesContrastFor === e;
  })?.[1].id;
}
var dd = function (e) {
    var t = e.colorMode,
      n = e.contrastMode,
      r = e.dark,
      i = e.light,
      a = e.shape,
      o = e.spacing,
      s = e.typography,
      c = e.motion,
      u = [i, r],
      d = [];
    if (t === `auto`)
      (n !== `no-preference` &&
        J(`platform_increased-contrast-themes`) &&
        u.forEach(function (e) {
          var t = ud(e);
          t && u.push(t);
        }),
        d.push.apply(d, u));
    else if ((d.push(e[t]), n !== `no-preference` && J(`platform_increased-contrast-themes`))) {
      var f = ud(e[t]);
      f && d.push(f);
    }
    return (
      [a, o, s, c].forEach(function (e) {
        e && d.push(e);
      }),
      l(new Set(d))
    );
  },
  fd = function (e) {
    return l(new Set([]));
  };
ot();
function pd(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = md(e)) || (t && e && typeof e.length == `number`)) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
    o = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return ((o = e.done), e);
    },
    e: function (e) {
      ((s = !0), (a = e));
    },
    f: function () {
      try {
        o || n.return == null || n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function md(e, t) {
  if (e) {
    if (typeof e == `string`) return hd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? hd(e, t)
          : void 0
    );
  }
}
function hd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function gd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function _d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gd(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var vd = (function () {
    var e = W(
      G.default.mark(function e() {
        var t,
          n,
          r,
          i,
          a,
          o,
          s,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w,
          T,
          E,
          D,
          O,
          k,
          A,
          j,
          M,
          N = arguments;
        return G.default.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = N.length > 0 && N[0] !== void 0 ? N[0] : {}),
                    (n = N.length > 1 ? N[1] : void 0),
                    (r =
                      typeof t == `function`
                        ? t(
                            _d(
                              _d({}, Z),
                              {},
                              { typography: Z.typography, shape: Z.shape(), motion: Z.motion() },
                              ku(),
                            ),
                          )
                        : t),
                    (i = r.colorMode),
                    (a = i === void 0 ? Z.colorMode : i),
                    (o = r.contrastMode),
                    (s = o === void 0 ? Z.contrastMode : o),
                    (c = r.dark),
                    (l = c === void 0 ? Z.dark : c),
                    (u = r.light),
                    (d = u === void 0 ? Z.light : u),
                    (f = r.shape),
                    (p = f === void 0 ? Z.shape() : f),
                    (m = r.spacing),
                    (h = m === void 0 ? Z.spacing : m),
                    (g = r.typography),
                    (_ = g === void 0 ? Z.typography : g),
                    (v = r.motion),
                    (y = v === void 0 ? Z.motion() : v),
                    (b = r.UNSAFE_themeOptions),
                    (x = b === void 0 ? Z.UNSAFE_themeOptions : b),
                    J(`platform_increased-contrast-themes`) ||
                      (d === `light-increased-contrast` && (d = `light`),
                      l === `dark-increased-contrast` && (l = `dark`)),
                    (S = {
                      colorMode: a,
                      contrastMode: s,
                      dark: l,
                      light: d,
                      shape: p,
                      spacing: h,
                      typography: _,
                      motion: y,
                      UNSAFE_themeOptions: n ? void 0 : x,
                    }),
                    (C = dd(S)),
                    (w = n || Yu),
                    (T = C.map(
                      (function () {
                        var e = W(
                          G.default.mark(function e(t) {
                            return G.default.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return ((e.next = 2), w(t));
                                  case 2:
                                    return e.abrupt(`return`, e.sent);
                                  case 3:
                                  case `end`:
                                    return e.stop();
                                }
                            }, e);
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    )),
                    !n &&
                      x &&
                      Au(x?.brandColor) &&
                      ((E = a || Z.colorMode),
                      (D = sd(x, E)),
                      D.length > 0 &&
                        T.push(
                          W(
                            G.default.mark(function e() {
                              var t, n;
                              return G.default.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        at(
                                          () => import(`./custom-theme-BwT9qcig.js`),
                                          __vite__mapDeps([2, 3]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((t = e.sent),
                                        (n = t.loadAndAppendCustomThemeCss),
                                        n({
                                          colorMode: D.length === 2 ? `auto` : D[0],
                                          UNSAFE_themeOptions: x,
                                        }));
                                    case 5:
                                    case `end`:
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          )(),
                        )),
                    (e.next = 11),
                    Promise.all(T)
                  );
                case 11:
                  ((O = fd(S)), (k = pd(O)), (e.prev = 13), k.s());
                case 15:
                  if ((A = k.n()).done) {
                    e.next = 21;
                    break;
                  }
                  return ((j = A.value), (e.next = 19), w(j));
                case 19:
                  e.next = 15;
                  break;
                case 21:
                  e.next = 26;
                  break;
                case 23:
                  ((e.prev = 23), (e.t0 = e.catch(13)), k.e(e.t0));
                case 26:
                  return ((e.prev = 26), k.f(), e.finish(26));
                case 29:
                  return ((M = od(S)), e.abrupt(`return`, M));
                case 31:
                case `end`:
                  return e.stop();
              }
          },
          e,
          null,
          [[13, 23, 26, 29]],
        );
      }),
    );
    return function () {
      return e.apply(this, arguments);
    };
  })(),
  yd = (function () {
    function e(t) {
      (h(this, e), x(this, `legacyObserver`, null), (this.callback = t), e.callbacks.add(t));
    }
    return u(e, [
      {
        key: `observe`,
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var t = ku();
              e.callbacks.forEach(function (e) {
                return e(t);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [pu, hu] }));
        },
      },
      {
        key: `disconnect`,
        value: function () {
          (this.callback && e.callbacks.delete(this.callback),
            e.callbacks.size === 0 && e.observer && (e.observer.disconnect(), (e.observer = null)));
        },
      },
    ]);
  })();
(x(yd, `observer`, null), x(yd, `callbacks`, new Set()));
var bd = (0, T.createContext)(void 0),
  xd = (0, T.createContext)(void 0),
  Sd = (0, T.createContext)(!1),
  Cd = (0, T.createContext)(void 0),
  wd = (0, T.createContext)(void 0),
  Td = function () {
    return (0, T.useContext)(Sd) ?? !1;
  },
  Ed = function () {
    return typeof document < `u` ? document : null;
  };
function Dd(e) {
  var t = Ed();
  return t ? t.head.querySelector(`style[${pu}="${e}"]`) : !1;
}
var Od = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n, r;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!Dd(t)) {
                  e.next = 2;
                  break;
                }
                return e.abrupt(`return`);
              case 2:
                if (t) {
                  e.next = 4;
                  break;
                }
                return e.abrupt(`return`);
              case 4:
                return ((e.next = 6), Ju[t]());
              case 6:
                return ((n = e.sent), (r = n.default), e.abrupt(`return`, r));
              case 9:
              case `end`:
                return e.stop();
            }
        }, e);
      }),
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })(),
  kd = (function () {
    var e = W(
      G.default.mark(function e(t, n) {
        var r, i;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((r = Ed()), r)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(`return`);
              case 3:
                if (
                  ((i = r.createElement(`style`)),
                  (i.textContent = t),
                  (i.dataset.theme = n),
                  !Dd(n))
                ) {
                  e.next = 8;
                  break;
                }
                return e.abrupt(`return`);
              case 8:
                r.head.appendChild(i);
              case 9:
              case `end`:
                return e.stop();
            }
        }, e);
      }),
    );
    return function (t, n) {
      return e.apply(this, arguments);
    };
  })(),
  Ad = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), Od(t));
              case 2:
                if (((n = e.sent), n)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt(`return`);
              case 5:
                kd(n, t);
              case 6:
              case `end`:
                return e.stop();
            }
        }, e);
      }),
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })(),
  jd = (function () {
    var e = W(
      G.default.mark(function e(t) {
        var n;
        return G.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                ((n = Object.values(t).filter(function (e) {
                  return !!e;
                })),
                  n.forEach(Ad));
              case 2:
              case `end`:
                return e.stop();
            }
        }, e);
      }),
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })();
X();
function Md(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Nd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Md(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Md(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Pd = { dark: `dark`, light: `light`, spacing: `spacing`, typography: `typography` },
  Fd =
    typeof window < `u` && `matchMedia` in window
      ? window.matchMedia(`(prefers-color-scheme: dark)`)
      : void 0;
function Id(e) {
  return e === `auto` ? (Fd != null && Fd.matches ? `dark` : `light`) : e;
}
var Ld = { body: `_1e0c1bgi` };
function Rd(e) {
  var t = e.children,
    n = e.defaultColorMode,
    r = n === void 0 ? `auto` : n,
    i = e.defaultTheme,
    a = f((0, T.useState)(r), 2),
    o = a[0],
    s = a[1],
    c = f((0, T.useState)(Id(r)), 2),
    l = c[0],
    u = c[1],
    d = f(
      (0, T.useState)(function () {
        return Nd(Nd({}, Pd), i);
      }),
      2,
    ),
    p = d[0],
    m = d[1],
    h = (0, T.useCallback)(function (e) {
      (s(e), u(Id(e)));
    }, []),
    g = (0, T.useCallback)(function (e) {
      m(function (t) {
        return Nd(Nd({}, t), e);
      });
    }, []),
    _ = (0, T.useRef)(null),
    v = tu(),
    y = ru(),
    b = Td(),
    S = v && !b && y;
  ((0, T.useEffect)(
    function () {
      if (S) {
        var e = (function () {
          var e = W(
            G.default.mark(function e() {
              var t;
              return G.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!_.current) {
                        e.next = 6;
                        break;
                      }
                      return ((e.next = 3), _.current);
                    case 3:
                      ((t = e.sent), t(), (_.current = null));
                    case 6:
                    case `end`:
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return (
          (function () {
            var t = W(
              G.default.mark(function t() {
                var n;
                return G.default.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return ((t.next = 2), e());
                      case 2:
                        ((n = vd(Nd(Nd({}, p), {}, { colorMode: l }))), (_.current = n));
                      case 4:
                      case `end`:
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function () {
              return t.apply(this, arguments);
            };
          })()(),
          function () {
            e();
          }
        );
      } else jd(p);
    },
    [v, b, S, l, p],
  ),
    (0, T.useEffect)(
      function () {
        if (Fd)
          return (0, Zu.bind)(Fd, {
            type: `change`,
            listener: function (e) {
              o === `auto` && u(e.matches ? `dark` : `light`);
            },
          });
      },
      [o],
    ));
  var C = Nd(Nd({}, qu(Nd(Nd({}, p), {}, { colorMode: l }))), {}, x({}, mu, !0));
  return T.createElement(
    Sd.Provider,
    { value: !0 },
    T.createElement(
      bd.Provider,
      { value: l },
      T.createElement(
        xd.Provider,
        { value: h },
        T.createElement(
          Cd.Provider,
          { value: p },
          T.createElement(
            wd.Provider,
            { value: g },
            S ? t : T.createElement(`div`, z({}, C, { className: Y([Ld.body]) }), t),
          ),
        ),
      ),
    ),
  );
}
function zd() {
  var e = (0, T.useContext)(bd),
    t = ku(),
    n = f((0, T.useState)(t?.colorMode || `light`), 2),
    r = n[0],
    i = n[1];
  return (
    (0, T.useEffect)(
      function () {
        if (!e) {
          var t = new yd(function (e) {
            i(e?.colorMode || `light`);
          });
          return (
            t.observe(),
            function () {
              return t.disconnect();
            }
          );
        }
      },
      [e],
    ),
    e || r
  );
}
function Bd() {
  return T.useId().replace(/[:«»]/g, `_`);
}
function Vd(e) {
  return T.createElement(Ms, {
    "aria-label": e[`aria-label`],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: `subtle`,
  });
}
function Hd(e) {
  return T.createElement(Ms, z({}, e, { appearance: `subtle` }));
}
var Ud = { container: `_1e0c1txw _kqswh2mm` };
function Wd(e) {
  var t = e.key,
    n = e.testId,
    r = e.from,
    i = e.to;
  return T.createElement(
    ll,
    { as: `li`, testId: n, key: t, xcss: Ud.container, paddingInline: `space.100` },
    T.createElement(
      Gl,
      { testId: n && `${n}-text` },
      T.createElement($o, null, `Skipped pages from `, r, ` to `, i),
      `…`,
    ),
  );
}
var Gd = {},
  Kd =
    Number.isNaN ||
    function (e) {
      return typeof e == `number` && e !== e;
    };
function qd(e, t) {
  return !!(e === t || (Kd(e) && Kd(t)));
}
function Jd(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!qd(e[n], t[n])) return !1;
  return !0;
}
function Yd(e, t) {
  t === void 0 && (t = Jd);
  var n = null;
  function r() {
    var r = [...arguments];
    if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
    var i = e.apply(this, r);
    return ((n = { lastResult: i, lastArgs: r, lastThis: this }), i);
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var Xd = function (e, t, n, r) {
    var i = n.max,
      a = n.ellipsis,
      o = n.transform,
      s = e.length,
      c = s > i,
      u = c && i - 4 < t,
      d = c && t < s - i + 3,
      f = Yd(function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
          n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
        return e.slice(t, n).map(function (e, n) {
          return o(e, t + n, r);
        });
      });
    if (!c) return f(0, s);
    if (u && !d) {
      var p = i - 2;
      return [].concat(
        l(f(0, 1)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: s - p })],
        l(f(s - p)),
      );
    }
    if (!u && d) {
      var m = i - 2;
      return [].concat(
        l(f(0, m)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: m + 1, to: s - 1 })],
        l(f(s - 1)),
      );
    }
    var h = i - 4;
    return [].concat(
      l(f(0, 1)),
      [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: t - Math.floor(h / 2) })],
      l(f(t - Math.floor(h / 2), t + h - 1)),
      [a({ key: `ellipsis-2`, testId: r && `${r}-ellipsis`, from: t + 3, to: s - 1 })],
      l(f(s - 1)),
    );
  },
  Zd = e(Zc()),
  Qd = e(Qc());
function $d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? $d(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $d(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var tf = {
    paginationMenu: `_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t`,
    paginationMenuItem: `_1pfhze3t _ect4ttxp`,
    navigatorIconWrapper: `_18zr12x7`,
  },
  nf = {
    componentName: `pagination`,
    packageName: `@atlaskit/pagination`,
    packageVersion: `16.2.11`,
  };
function rf(e) {
  var t = e.chevronDirection === `left` ? Zd.default : Qd.default;
  return T.createElement(
    ll,
    { as: `span`, xcss: tf.navigatorIconWrapper },
    T.createElement(t, { label: ``, color: `currentColor`, size: `small` }),
  );
}
function af(e, t) {
  var n = e.components,
    r = n === void 0 ? Gd : n,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? `pagination` : s,
    l = e.pageLabel,
    u = l === void 0 ? `page` : l,
    d = e.previousLabel,
    p = d === void 0 ? `previous` : d,
    m = e.nextLabel,
    h = m === void 0 ? `next` : m,
    g = e.style,
    _ = g === void 0 ? Gd : g,
    v = e.max,
    y = v === void 0 ? 7 : v,
    b = e.onChange,
    x = b === void 0 ? mn : b,
    S = e.pages,
    C = e.getPageLabel,
    w = e.renderEllipsis,
    E = w === void 0 ? Wd : w,
    D = e.analyticsContext,
    O = e.testId,
    k = e.isDisabled,
    A = f(
      Bc(o, function () {
        return a || 0;
      }),
      2,
    ),
    j = A[0],
    M = A[1],
    N = Do(
      ef(
        {
          fn: function (e, t) {
            var n = e.event,
              r = e.selectedPageIndex;
            (o === void 0 && M(r), x && x(n, S[r], t));
          },
          action: `changed`,
          actionSubject: `pageNumber`,
          analyticsData: D,
        },
        nf,
      ),
    );
  return T.createElement(
    ll,
    { testId: O, style: _, ref: t, "aria-label": c, as: `nav` },
    T.createElement(
      Ol,
      { space: `space.0`, alignBlock: `center` },
      T.createElement(Vd, {
        key: `left-navigator`,
        component: r.Previous,
        onClick: function (e) {
          return N({ event: e, selectedPageIndex: j - 1 });
        },
        isDisabled: k || j === 0,
        iconBefore: T.createElement(rf, { chevronDirection: `left` }),
        "aria-label": p,
        testId: O && `${O}--left-navigator`,
      }),
      T.createElement(
        Ol,
        { space: `space.0`, alignBlock: `baseline`, as: `ul`, xcss: tf.paginationMenu },
        Xd(
          S,
          j,
          {
            max: y,
            ellipsis: E,
            transform: function (e, t, n) {
              var i = S[j],
                a = `${u} ${C ? C(e, t) : e}`,
                o = e === i;
              return T.createElement(
                Ol,
                { as: `li`, xcss: tf.paginationMenuItem, key: `page-${C ? C(e, t) : t}` },
                T.createElement(
                  Hd,
                  {
                    component: r.Page,
                    onClick: function (e) {
                      return N({ event: e, selectedPageIndex: t });
                    },
                    "aria-current": o ? `page` : void 0,
                    "aria-label": a,
                    isSelected: o,
                    isDisabled: k,
                    page: e,
                    testId: n && `${n}--${o ? `current-` : ``}page-${t}`,
                  },
                  C ? C(e, t) : e,
                ),
              );
            },
          },
          O,
        ),
      ),
      T.createElement(Vd, {
        key: `right-navigator`,
        component: r.Next,
        onClick: function (e) {
          return N({ event: e, selectedPageIndex: j + 1 });
        },
        isDisabled: k || j === S.length - 1,
        iconBefore: T.createElement(rf, { chevronDirection: `right` }),
        "aria-label": h,
        testId: O && `${O}--right-navigator`,
      }),
    ),
  );
}
var of = (0, T.memo)((0, T.forwardRef)(af));
function sf(e, t, n) {
  return ((t = b(t)), m(e, cf() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function cf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cf = function () {
    return !!e;
  })();
}
var lf = (function (e) {
  function t() {
    var e;
    h(this, t);
    var n = [...arguments];
    return (
      (e = sf(this, t, [].concat(n))),
      x(e, `onChange`, function (t, n, r) {
        e.props.onChange(n, r);
      }),
      e
    );
  }
  return (
    _(t, e),
    u(t, [
      {
        key: `render`,
        value: function () {
          var e = this.props,
            t = e.total,
            n = e.value,
            r = n === void 0 ? 1 : n,
            i = e.i18n,
            a = e.testId,
            o = e.isDisabled,
            s = l(Array(t)).map(function (e, t) {
              return t + 1;
            }),
            c = r - 1;
          return T.createElement(of, {
            selectedIndex: c,
            isDisabled: o,
            label: i?.label,
            nextLabel: i?.next,
            previousLabel: i?.prev,
            pageLabel: i?.pageLabel,
            onChange: this.onChange,
            pages: s,
            testId: a && `${a}--pagination`,
          });
        },
      },
    ])
  );
})(T.Component);
X();
var uf = [`isRanking`, `testId`],
  df = function (e) {
    var t = e.isRanking,
      n = e.testId,
      r = d(e, uf);
    return T.createElement(
      `thead`,
      z({ "data-testid": n }, r, { className: Y([`_179rglyw`, t && `_1e0c1ule`]) }),
    );
  };
function ff(e, t, n) {
  return ((t = b(t)), m(e, pf() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function pf() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (pf = function () {
    return !!e;
  })();
}
function mf(e) {
  return (function (t) {
    function n() {
      var e;
      h(this, n);
      var t = [...arguments];
      return (
        (e = ff(this, n, [].concat(t))),
        x(e, `state`, { refWidth: 0, refHeight: 0 }),
        x(e, `innerRef`, function (t) {
          t && !e.props.isRanking && (e.ref = t);
        }),
        x(e, `updateDimensions`, function () {
          if (e.ref) {
            var t = e.ref.getBoundingClientRect(),
              n = t.width,
              r = t.height;
            (n !== e.state.refWidth || r !== e.state.refHeight) &&
              e.setState({ refWidth: n, refHeight: r });
          }
        }),
        e
      );
    }
    return (
      _(n, t),
      u(n, [
        {
          key: `UNSAFE_componentWillReceiveProps`,
          value: function (e) {
            var t = this.props.isRanking;
            e.isRanking && !t && this.updateDimensions();
          },
        },
        {
          key: `render`,
          value: function () {
            var t = this.state,
              n = t.refWidth,
              r = t.refHeight;
            return T.createElement(
              e,
              z({ refWidth: n, refHeight: r, innerRef: this.innerRef }, this.props),
            );
          },
        },
      ])
    );
  })(T.Component);
}
var hf = function (e, t, n) {
    return e ? (n ? { width: t, height: n } : { width: t }) : {};
  },
  gf = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `ArrowDownIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" fill-rule="evenodd" d="M8.75 1v11.44l3.72-3.72 1.06 1.06-5 5a.75.75 0 0 1-1.06 0l-5-5 1.06-1.06 3.72 3.72V1z" clip-rule="evenodd"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `ArrowDownIcon`), (e.default = a));
  }),
  _f = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `ArrowUpIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" fill-rule="evenodd" d="M8.75 15V3.56l3.72 3.72 1.06-1.06-5-5a.75.75 0 0 0-1.06 0l-5 5 1.06 1.06 3.72-3.72V15z" clip-rule="evenodd"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `ArrowUpIcon`), (e.default = a));
  });
function vf(e) {
  var t = e.onClose,
    n = e.isDisabled,
    r = (0, T.useRef)(!1),
    i = (0, T.useCallback)(
      function (e) {
        n || r.current || e.key !== `Escape` || ((r.current = !0), t(e));
      },
      [t, n],
    ),
    a = (0, T.useCallback)(function () {
      r.current = !1;
    }, []);
  (0, T.useEffect)(
    function () {
      if (!n)
        return (0, Zu.bindAll)(
          document,
          [
            { type: `keydown`, listener: i },
            { type: `keyup`, listener: a },
          ],
          { capture: !1 },
        );
    },
    [i, a, n],
  );
}
function yf(e) {
  var t = (0, T.useRef)(e);
  return (
    (0, T.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var bf = (0, T.createContext)(null),
  xf = (0, T.createContext)(null);
function Sf() {
  return (0, T.useContext)(xf);
}
function Cf(e) {
  var t = e.isOpen,
    n = e.type,
    r = e.onClose,
    i = (0, T.useContext)(bf),
    a = Sf();
  (0, T.useEffect)(
    function () {
      if (i !== null && t) return i.onClose(r, { namespace: a, type: n });
    },
    [i, t, a, r, n],
  );
}
var wf = { none: 0, small: 100, medium: 350, large: 700 },
  Tf = 0.5,
  Ef = { none: wf.none, small: wf.small * Tf, medium: wf.medium * Tf, large: wf.large * Tf },
  Df = function () {
    return typeof window < `u` && `matchMedia` in window;
  },
  Of = function () {
    return Df() ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches : !1;
  },
  kf = function (e) {
    switch (e.cleanup) {
      case `next-effect`:
        return;
      default:
        return [];
    }
  },
  Af = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: `unmount` },
      t = (0, T.useRef)([]);
    return (
      (0, T.useEffect)(function () {
        return function () {
          t.current.length &&
            (t.current.forEach(function (e) {
              return clearTimeout(e);
            }),
            (t.current = []));
        };
      }, kf(e)),
      (0, T.useCallback)(function (e, n) {
        var r = [...arguments].slice(2),
          i = setTimeout.apply(
            void 0,
            [
              function () {
                ((t.current = t.current.filter(function (e) {
                  return e !== i;
                })),
                  e());
              },
              n,
            ].concat(r),
          );
        t.current.push(i);
      }, [])
    );
  },
  jf = { appear: !0, isExiting: !1 },
  Mf = (0, T.createContext)(jf),
  Nf = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jf;
    return T.createElement(Mf.Provider, { key: `${e.key}-provider`, value: t }, e);
  },
  Pf = function (e) {
    var t = [];
    return (
      T.Children.toArray(e).forEach(function (e) {
        typeof e != `boolean` && e && t.push(e);
      }),
      t
    );
  },
  Ff = function (e, t) {
    for (var n = t.concat([]), r = If(t), i = 0; i < e.length; i++) {
      var a = e[i];
      r[a.key] || n.splice(i + 1, 0, a);
    }
    return n;
  },
  If = function (e) {
    return e.reduce(function (e, t) {
      return ((e[t.key] = t), e);
    }, {});
  },
  Lf = function (e, t) {
    for (
      var n = new Set(
          e.map(function (e) {
            return e.key;
          }),
        ),
        r = new Set(),
        i = 0;
      i < t.length;
      i++
    ) {
      var a = t[i].key;
      n.has(a) || r.add(a);
    }
    return r;
  },
  Rf = (0, T.memo)(function (e) {
    var t = e.appear,
      n = t === void 0 ? !1 : t,
      r = e.children,
      i = e.exitThenEnter,
      a = f((0, T.useState)([null, r]), 2),
      o = a[0],
      s = a[1],
      c = f((0, T.useState)([]), 2),
      l = c[0],
      u = c[1],
      d = f(
        (0, T.useState)(function () {
          return { appear: n, isExiting: !1 };
        }),
        2,
      ),
      p = d[0],
      m = d[1];
    if (
      ((0, T.useEffect)(function () {
        p.appear || m({ appear: !0, isExiting: !1 });
      }, []),
      typeof o == `boolean`)
    )
      return r;
    var h = f(o, 2),
      g = h[0],
      _ = h[1],
      v = Pf(g),
      y = Pf(_);
    _ !== r && s([_, r]);
    var b = Lf(y, v),
      x = !!b.size,
      S = y;
    if ((x && (S = Ff(y, v)), i))
      if (l.length) S = J(`platform-dst-motion-uplift`) ? v : l;
      else {
        var C = S.filter(function (e) {
          return b.has(e.key);
        });
        C.length && u(C);
      }
    return (
      (S = b.size
        ? S.map(function (e) {
            var t = b.has(e.key);
            return Nf(e, {
              appear: !0,
              isExiting: t,
              onFinish: t
                ? function () {
                    (b.delete(e.key), b.size === 0 && (s([null, r]), u([])));
                  }
                : void 0,
            });
          })
        : S.map(function (e) {
            return Nf(e, p);
          })),
      S
    );
  }),
  zf = function () {
    return (0, T.useContext)(Mf);
  };
Rf.displayName = `ExitingPersistence`;
function Bf() {
  var e = (0, T.useRef)(``);
  return (
    (e.current ||=
      `_` +
      (
        Number(String(Math.random()).slice(2)) +
        Date.now() +
        Math.round(performance.now())
      ).toString(36)),
    e.current
  );
}
var Vf = (0, T.createContext)(function () {
    return { isReady: !0, delay: 0, ref: mn };
  }),
  Hf = function () {
    var e = Bf();
    return (0, T.useContext)(Vf)(e);
  };
X();
var Uf = function (e) {
    var t = e.children,
      n = e.animationTimingFunction,
      r = e.animationTimingFunctionExiting,
      i = r === void 0 ? n : r,
      a = e.enteringAnimation,
      o = e.exitingAnimation,
      s = o === void 0 ? a : o,
      c = e.isPaused,
      l = e.onFinish,
      u = e.duration,
      d = u === void 0 ? `large` : u,
      p = Hf(),
      m = zf(),
      h = m.isExiting,
      g = m.onFinish,
      _ = m.appear,
      v = Af(),
      y = c || !p.isReady,
      b = h ? 0 : p.delay,
      x = h ? `exiting` : `entering`,
      S = f((0, T.useState)(_), 2),
      C = S[0],
      w = S[1];
    return (
      (0, T.useEffect)(
        function () {
          var e = !1;
          if (!y) {
            if (!_) {
              l && l(x);
              return;
            }
            var t = function () {
              (x === `exiting` && g?.(), e || w(!1), l?.(x));
            };
            if (Of()) {
              t();
              return;
            }
            return (
              w(!0),
              v(t, h ? Ef[d] : wf[d] + b),
              function () {
                e = !0;
              }
            );
          }
        },
        [g, x, h, d, b, y, v],
      ),
      t(
        {
          ref: p.ref,
          className: C
            ? Y([
                Y([`_1o51eoah _1y0co91m _1bumglyw _sedtglyw`]),
                y && Y([`_1y0ctrqk`]),
                d === `small` && Y([`_5sag1yx9`]),
                d === `medium` && Y([`_5sag1ttt`]),
                d === `large` && Y([`_5sagpwmj`]),
                h && d === `small` && Y([`_5sag14ed`]),
                h && d === `medium` && Y([`_5sagluct`]),
                h && d === `large` && Y([`_5sag1ttt`]),
                h && Y([`_ju255cps _1o51q7pw`]),
                !h && n === `linear` && Y([`_1pglp3kn`]),
                !h && n === `ease-out` && Y([`_1pgldkwg`]),
                !h && n === `ease-in` && Y([`_1pgl1nzg`]),
                !h && n === `ease-in-40-out` && Y([`_1pgl5y64`]),
                !h && n === `ease-in-60-out` && Y([`_1pgl1ddy`]),
                !h && n === `ease-in-80-out` && Y([`_1pglannl`]),
                !h && n === `ease-in-out` && Y([`_1pgl1fu8`]),
                h && n === `linear` && Y([`_1pglp3kn`]),
                h && i === `ease-out` && Y([`_1pgldkwg`]),
                h && i === `ease-in` && Y([`_1pgl1nzg`]),
                h && i === `ease-in-40-out` && Y([`_1pgl5y64`]),
                h && i === `ease-in-60-out` && Y([`_1pgl1ddy`]),
                h && i === `ease-in-80-out` && Y([`_1pglannl`]),
                h && i === `ease-in-out` && Y([`_1pgl1fu8`]),
                ((!h && a === `fade-in`) || (h && s === `fade-in`)) && Y([`_j7hq1cgr`]),
                ((!h && a === `fade-out`) || (h && s === `fade-out`)) && Y([`_j7hq1lln`]),
                ((!h && a === `zoom-in`) || (h && s === `zoom-in`)) && Y([`_j7hqe8p0`]),
                ((!h && a === `zoom-out`) || (h && s === `zoom-out`)) && Y([`_j7hqy6ql`]),
                ((!h && a === `slide-in-from-top`) || (h && s === `slide-in-from-top`)) &&
                  Y([`_j7hqqshu`]),
                ((!h && a === `slide-out-from-top`) || (h && s === `slide-out-from-top`)) &&
                  Y([`_j7hq7ri4`]),
                ((!h && a === `slide-in-from-right`) || (h && s === `slide-in-from-right`)) &&
                  Y([`_j7hqdfjr`]),
                ((!h && a === `slide-out-from-right`) || (h && s === `slide-out-from-right`)) &&
                  Y([`_j7hqonfj`]),
                ((!h && a === `slide-in-from-bottom`) || (h && s === `slide-in-from-bottom`)) &&
                  Y([`_j7hq1liq`]),
                ((!h && a === `slide-out-from-bottom`) || (h && s === `slide-out-from-bottom`)) &&
                  Y([`_j7hqhnf1`]),
                ((!h && a === `slide-in-from-left`) || (h && s === `slide-in-from-left`)) &&
                  Y([`_j7hq1bh1`]),
                ((!h && a === `slide-out-from-left`) || (h && s === `slide-out-from-left`)) &&
                  Y([`_j7hqj08w`]),
                ((!h && a === `fade-in-from-top`) || (h && s === `fade-in-from-top`)) &&
                  Y([`_j7hq2iua`]),
                ((!h && a === `fade-out-from-top`) || (h && s === `fade-out-from-top`)) &&
                  Y([`_j7hq39va`]),
                ((!h && a === `fade-in-from-left`) || (h && s === `fade-in-from-left`)) &&
                  Y([`_j7hq15m2`]),
                ((!h && a === `fade-out-from-left`) || (h && s === `fade-out-from-left`)) &&
                  Y([`_j7hq1yiv`]),
                ((!h && a === `fade-in-from-bottom`) || (h && s === `fade-in-from-bottom`)) &&
                  Y([`_j7hq1w00`]),
                ((!h && a === `fade-out-from-bottom`) || (h && s === `fade-out-from-bottom`)) &&
                  Y([`_j7hqzy3z`]),
                ((!h && a === `fade-in-from-right`) || (h && s === `fade-in-from-right`)) &&
                  Y([`_j7hqpqak`]),
                ((!h && a === `fade-out-from-right`) || (h && s === `fade-out-from-right`)) &&
                  Y([`_j7hq1ebg`]),
                ((!h && a === `fade-in-from-top-constant`) ||
                  (h && s === `fade-in-from-top-constant`)) &&
                  Y([`_j7hqm2e2`]),
                ((!h && a === `fade-out-from-top-constant`) ||
                  (h && s === `fade-out-from-top-constant`)) &&
                  Y([`_j7hq97jn`]),
                ((!h && a === `fade-in-from-left-constant`) ||
                  (h && s === `fade-in-from-left-constant`)) &&
                  Y([`_j7hqovgq`]),
                ((!h && a === `fade-out-from-left-constant`) ||
                  (h && s === `fade-out-from-left-constant`)) &&
                  Y([`_j7hq15do`]),
                ((!h && a === `fade-in-from-bottom-constant`) ||
                  (h && s === `fade-in-from-bottom-constant`)) &&
                  Y([`_j7hq797a`]),
                ((!h && a === `fade-out-from-bottom-constant`) ||
                  (h && s === `fade-out-from-bottom-constant`)) &&
                  Y([`_j7hqwo7r`]),
                ((!h && a === `fade-in-from-right-constant`) ||
                  (h && s === `fade-in-from-right-constant`)) &&
                  Y([`_j7hqt8u5`]),
                ((!h && a === `fade-out-from-right-constant`) ||
                  (h && s === `fade-out-from-right-constant`)) &&
                  Y([`_j7hq1pgp`]),
              ])
            : ``,
          style: { animationDelay: `${b}ms` },
        },
        x,
      )
    );
  },
  Wf = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  Gf = function (e) {
    var t = e.children,
      n = e.duration,
      r = n === void 0 ? `large` : n,
      i = e.entranceDirection,
      a = e.exitDirection,
      o = e.distance,
      s = o === void 0 ? `proportional` : o,
      c = e.onFinish,
      l = e.isPaused,
      u = i === void 0 ? void 0 : Wf[i],
      d = a || u ? `fade-out-from-${a || u}${s === `proportional` ? `` : `-constant`}` : `fade-out`;
    return T.createElement(
      Uf,
      {
        duration: r,
        enteringAnimation: i
          ? `fade-in-from-${i}${s === `proportional` ? `` : `-constant`}`
          : `fade-in`,
        exitingAnimation: d,
        animationTimingFunction: `ease-in-out`,
        onFinish: c,
        isPaused: l,
      },
      t,
    );
  };
function Kf(e) {
  return function (t) {
    e.forEach(function (e) {
      typeof e == `function` ? e(t) : e !== null && C(e) === `object` && (e.current = t);
    });
  };
}
var qf = T.createContext();
T.createContext();
var Jf = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  Yf = function (e) {
    if (typeof e == `function`) {
      var t = [...arguments].slice(1);
      return e.apply(void 0, t);
    }
  },
  Xf = function (e, t) {
    if (typeof e == `function`) return Yf(e, t);
    e != null && (e.current = t);
  },
  Zf = function (e) {
    return e.reduce(function (e, t) {
      var n = t[0];
      return ((e[n] = t[1]), e);
    }, {});
  },
  Qf =
    typeof window < `u` && window.document && window.document.createElement
      ? T.useLayoutEffect
      : T.useEffect,
  $f = `bottom`,
  ep = `right`,
  tp = `left`,
  np = `auto`,
  rp = [`top`, $f, ep, tp],
  ip = `start`,
  ap = `clippingParents`,
  op = `viewport`,
  sp = `popper`,
  cp = `reference`,
  lp = rp.reduce(function (e, t) {
    return e.concat([t + `-` + ip, t + `-end`]);
  }, []),
  up = [].concat(rp, [np]).reduce(function (e, t) {
    return e.concat([t, t + `-` + ip, t + `-end`]);
  }, []),
  dp = [
    `beforeRead`,
    `read`,
    `afterRead`,
    `beforeMain`,
    `main`,
    `afterMain`,
    `beforeWrite`,
    `write`,
    `afterWrite`,
  ];
function fp(e) {
  return e ? (e.nodeName || ``).toLowerCase() : null;
}
function pp(e) {
  if (e == null) return window;
  if (e.toString() !== `[object Window]`) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function mp(e) {
  return e instanceof pp(e).Element || e instanceof Element;
}
function hp(e) {
  return e instanceof pp(e).HTMLElement || e instanceof HTMLElement;
}
function gp(e) {
  return typeof ShadowRoot > `u` ? !1 : e instanceof pp(e).ShadowRoot || e instanceof ShadowRoot;
}
function _p(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (e) {
    var n = t.styles[e] || {},
      r = t.attributes[e] || {},
      i = t.elements[e];
    !hp(i) ||
      !fp(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? `` : t);
      }));
  });
}
function vp(e) {
  var t = e.state,
    n = {
      popper: { position: t.options.strategy, left: `0`, top: `0`, margin: `0` },
      arrow: { position: `absolute` },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (e) {
        var r = t.elements[e],
          i = t.attributes[e] || {},
          a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
            return ((e[t] = ``), e);
          }, {});
        !hp(r) ||
          !fp(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (e) {
            r.removeAttribute(e);
          }));
      });
    }
  );
}
var yp = {
  name: `applyStyles`,
  enabled: !0,
  phase: `write`,
  fn: _p,
  effect: vp,
  requires: [`computeStyles`],
};
function bp(e) {
  return e.split(`-`)[0];
}
var xp = Math.max,
  Sp = Math.min,
  Cp = Math.round;
function wp() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + `/` + e.version;
        })
        .join(` `)
    : navigator.userAgent;
}
function Tp() {
  return !/^((?!chrome|android).)*safari/i.test(wp());
}
function Ep(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    hp(e) &&
    ((i = (e.offsetWidth > 0 && Cp(r.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Cp(r.height) / e.offsetHeight) || 1));
  var o = (mp(e) ? pp(e) : window).visualViewport,
    s = !Tp() && n,
    c = (r.left + (s && o ? o.offsetLeft : 0)) / i,
    l = (r.top + (s && o ? o.offsetTop : 0)) / a,
    u = r.width / i,
    d = r.height / a;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c, x: c, y: l };
}
function Dp(e) {
  var t = Ep(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Op(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && gp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function kp(e) {
  return pp(e).getComputedStyle(e);
}
function Ap(e) {
  return [`table`, `td`, `th`].indexOf(fp(e)) >= 0;
}
function jp(e) {
  return ((mp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mp(e) {
  return fp(e) === `html` ? e : e.assignedSlot || e.parentNode || (gp(e) ? e.host : null) || jp(e);
}
function Np(e) {
  return !hp(e) || kp(e).position === `fixed` ? null : e.offsetParent;
}
function Pp(e) {
  var t = /firefox/i.test(wp());
  if (/Trident/i.test(wp()) && hp(e) && kp(e).position === `fixed`) return null;
  var n = Mp(e);
  for (gp(n) && (n = n.host); hp(n) && [`html`, `body`].indexOf(fp(n)) < 0; ) {
    var r = kp(n);
    if (
      r.transform !== `none` ||
      r.perspective !== `none` ||
      r.contain === `paint` ||
      [`transform`, `perspective`].indexOf(r.willChange) !== -1 ||
      (t && r.willChange === `filter`) ||
      (t && r.filter && r.filter !== `none`)
    )
      return n;
    n = n.parentNode;
  }
  return null;
}
function Fp(e) {
  for (var t = pp(e), n = Np(e); n && Ap(n) && kp(n).position === `static`; ) n = Np(n);
  return n && (fp(n) === `html` || (fp(n) === `body` && kp(n).position === `static`))
    ? t
    : n || Pp(e) || t;
}
function Ip(e) {
  return [`top`, `bottom`].indexOf(e) >= 0 ? `x` : `y`;
}
function Lp(e, t, n) {
  return xp(e, Sp(t, n));
}
function Rp(e, t, n) {
  var r = Lp(e, t, n);
  return r > n ? n : r;
}
function zp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Bp(e) {
  return Object.assign({}, zp(), e);
}
function Vp(e, t) {
  return t.reduce(function (t, n) {
    return ((t[n] = e), t);
  }, {});
}
var Hp = function (e, t) {
  return (
    (e = typeof e == `function` ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    Bp(typeof e == `number` ? Vp(e, rp) : e)
  );
};
function Up(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    a = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    s = bp(n.placement),
    c = Ip(s),
    l = [`left`, `right`].indexOf(s) >= 0 ? `height` : `width`;
  if (!(!a || !o)) {
    var u = Hp(i.padding, n),
      d = Dp(a),
      f = c === `y` ? `top` : tp,
      p = c === `y` ? $f : ep,
      m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l],
      h = o[c] - n.rects.reference[c],
      g = Fp(a),
      _ = g ? (c === `y` ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = m / 2 - h / 2,
      y = u[f],
      b = _ - d[l] - u[p],
      x = _ / 2 - d[l] / 2 + v,
      S = Lp(y, x, b),
      C = c;
    n.modifiersData[r] = ((t = {}), (t[C] = S), (t.centerOffset = S - x), t);
  }
}
function Wp(e) {
  var t = e.state,
    n = e.options.element,
    r = n === void 0 ? `[data-popper-arrow]` : n;
  r != null &&
    ((typeof r == `string` && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (Op(t.elements.popper, r) && (t.elements.arrow = r)));
}
var Gp = {
  name: `arrow`,
  enabled: !0,
  phase: `main`,
  fn: Up,
  effect: Wp,
  requires: [`popperOffsets`],
  requiresIfExists: [`preventOverflow`],
};
function Kp(e) {
  return e.split(`-`)[1];
}
var qp = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function Jp(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Cp(n * i) / i || 0, y: Cp(r * i) / i || 0 };
}
function Yp(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    a = e.variation,
    o = e.offsets,
    s = e.position,
    c = e.gpuAcceleration,
    l = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    f = o.x,
    p = f === void 0 ? 0 : f,
    m = o.y,
    h = m === void 0 ? 0 : m,
    g = typeof u == `function` ? u({ x: p, y: h }) : { x: p, y: h };
  ((p = g.x), (h = g.y));
  var _ = o.hasOwnProperty(`x`),
    v = o.hasOwnProperty(`y`),
    y = tp,
    b = `top`,
    x = window;
  if (l) {
    var S = Fp(n),
      C = `clientHeight`,
      w = `clientWidth`;
    if (
      (S === pp(n) &&
        ((S = jp(n)),
        kp(S).position !== `static` &&
          s === `absolute` &&
          ((C = `scrollHeight`), (w = `scrollWidth`))),
      (S = S),
      i === `top` || ((i === `left` || i === `right`) && a === `end`))
    ) {
      b = $f;
      var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
      ((h -= T - r.height), (h *= c ? 1 : -1));
    }
    if (i === `left` || ((i === `top` || i === `bottom`) && a === `end`)) {
      y = ep;
      var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
      ((p -= E - r.width), (p *= c ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, l && qp),
    O = u === !0 ? Jp({ x: p, y: h }, pp(n)) : { x: p, y: h };
  if (((p = O.x), (h = O.y), c)) {
    var k;
    return Object.assign(
      {},
      D,
      ((k = {}),
      (k[b] = v ? `0` : ``),
      (k[y] = _ ? `0` : ``),
      (k.transform =
        (x.devicePixelRatio || 1) <= 1
          ? `translate(` + p + `px, ` + h + `px)`
          : `translate3d(` + p + `px, ` + h + `px, 0)`),
      k),
    );
  }
  return Object.assign(
    {},
    D,
    ((t = {}), (t[b] = v ? h + `px` : ``), (t[y] = _ ? p + `px` : ``), (t.transform = ``), t),
  );
}
function Xp(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    a = n.adaptive,
    o = a === void 0 ? !0 : a,
    s = n.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: bp(t.placement),
      variation: Kp(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === `fixed`,
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Yp(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: c,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Yp(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: `absolute`,
            adaptive: !1,
            roundOffsets: c,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    })));
}
var Zp = { name: `computeStyles`, enabled: !0, phase: `beforeWrite`, fn: Xp, data: {} },
  Qp = { passive: !0 };
function $p(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    a = i === void 0 ? !0 : i,
    o = r.resize,
    s = o === void 0 ? !0 : o,
    c = pp(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (e) {
        e.addEventListener(`scroll`, n.update, Qp);
      }),
    s && c.addEventListener(`resize`, n.update, Qp),
    function () {
      (a &&
        l.forEach(function (e) {
          e.removeEventListener(`scroll`, n.update, Qp);
        }),
        s && c.removeEventListener(`resize`, n.update, Qp));
    }
  );
}
var em = {
    name: `eventListeners`,
    enabled: !0,
    phase: `write`,
    fn: function () {},
    effect: $p,
    data: {},
  },
  tm = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function nm(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return tm[e];
  });
}
var rm = { start: `end`, end: `start` };
function im(e) {
  return e.replace(/start|end/g, function (e) {
    return rm[e];
  });
}
function am(e) {
  var t = pp(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function om(e) {
  return Ep(jp(e)).left + am(e).scrollLeft;
}
function sm(e, t) {
  var n = pp(e),
    r = jp(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var l = Tp();
    (l || (!l && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: a, height: o, x: s + om(e), y: c };
}
function cm(e) {
  var t = jp(e),
    n = am(e),
    r = e.ownerDocument?.body,
    i = xp(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    a = xp(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -n.scrollLeft + om(e),
    s = -n.scrollTop;
  return (
    kp(r || t).direction === `rtl` && (o += xp(t.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function lm(e) {
  var t = kp(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function um(e) {
  return [`html`, `body`, `#document`].indexOf(fp(e)) >= 0
    ? e.ownerDocument.body
    : hp(e) && lm(e)
      ? e
      : um(Mp(e));
}
function dm(e, t) {
  t === void 0 && (t = []);
  var n = um(e),
    r = n === e.ownerDocument?.body,
    i = pp(n),
    a = r ? [i].concat(i.visualViewport || [], lm(n) ? n : []) : n,
    o = t.concat(a);
  return r ? o : o.concat(dm(Mp(a)));
}
function fm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function pm(e, t) {
  var n = Ep(e, !1, t === `fixed`);
  return (
    (n.top += e.clientTop),
    (n.left += e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function mm(e, t, n) {
  return t === `viewport` ? fm(sm(e, n)) : mp(t) ? pm(t, n) : fm(cm(jp(e)));
}
function hm(e) {
  var t = dm(Mp(e)),
    n = [`absolute`, `fixed`].indexOf(kp(e).position) >= 0 && hp(e) ? Fp(e) : e;
  return mp(n)
    ? t.filter(function (e) {
        return mp(e) && Op(e, n) && fp(e) !== `body`;
      })
    : [];
}
function gm(e, t, n, r) {
  var i = t === `clippingParents` ? hm(e) : [].concat(t),
    a = [].concat(i, [n]),
    o = a[0],
    s = a.reduce(
      function (t, n) {
        var i = mm(e, n, r);
        return (
          (t.top = xp(i.top, t.top)),
          (t.right = Sp(i.right, t.right)),
          (t.bottom = Sp(i.bottom, t.bottom)),
          (t.left = xp(i.left, t.left)),
          t
        );
      },
      mm(e, o, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function _m(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? bp(r) : null,
    a = r ? Kp(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    c;
  switch (i) {
    case `top`:
      c = { x: o, y: t.y - n.height };
      break;
    case $f:
      c = { x: o, y: t.y + t.height };
      break;
    case ep:
      c = { x: t.x + t.width, y: s };
      break;
    case tp:
      c = { x: t.x - n.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = i ? Ip(i) : null;
  if (l != null) {
    var u = l === `y` ? `height` : `width`;
    switch (a) {
      case ip:
        c[l] = c[l] - (t[u] / 2 - n[u] / 2);
        break;
      case `end`:
        c[l] = c[l] + (t[u] / 2 - n[u] / 2);
        break;
      default:
    }
  }
  return c;
}
function vm(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    a = n.strategy,
    o = a === void 0 ? e.strategy : a,
    s = n.boundary,
    c = s === void 0 ? ap : s,
    l = n.rootBoundary,
    u = l === void 0 ? op : l,
    d = n.elementContext,
    f = d === void 0 ? sp : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    h = n.padding,
    g = h === void 0 ? 0 : h,
    _ = Bp(typeof g == `number` ? Vp(g, rp) : g),
    v = f === `popper` ? cp : sp,
    y = e.rects.popper,
    b = e.elements[m ? v : f],
    x = gm(mp(b) ? b : b.contextElement || jp(e.elements.popper), c, u, o),
    S = Ep(e.elements.reference),
    C = _m({ reference: S, element: y, strategy: `absolute`, placement: i }),
    w = fm(Object.assign({}, y, C)),
    T = f === `popper` ? w : S,
    E = {
      top: x.top - T.top + _.top,
      bottom: T.bottom - x.bottom + _.bottom,
      left: x.left - T.left + _.left,
      right: T.right - x.right + _.right,
    },
    D = e.modifiersData.offset;
  if (f === `popper` && D) {
    var O = D[i];
    Object.keys(E).forEach(function (e) {
      var t = [`right`, `bottom`].indexOf(e) >= 0 ? 1 : -1,
        n = [`top`, `bottom`].indexOf(e) >= 0 ? `y` : `x`;
      E[e] += O[n] * t;
    });
  }
  return E;
}
function ym(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    a = n.rootBoundary,
    o = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    l = c === void 0 ? up : c,
    u = Kp(r),
    d = u
      ? s
        ? lp
        : lp.filter(function (e) {
            return Kp(e) === u;
          })
      : rp,
    f = d.filter(function (e) {
      return l.indexOf(e) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (t, n) {
    return ((t[n] = vm(e, { placement: n, boundary: i, rootBoundary: a, padding: o })[bp(n)]), t);
  }, {});
  return Object.keys(p).sort(function (e, t) {
    return p[e] - p[t];
  });
}
function bm(e) {
  if (bp(e) === `auto`) return [];
  var t = nm(e);
  return [im(e), t, im(t)];
}
function xm(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        a = i === void 0 ? !0 : i,
        o = n.altAxis,
        s = o === void 0 ? !0 : o,
        c = n.fallbackPlacements,
        l = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        p = n.flipVariations,
        m = p === void 0 ? !0 : p,
        h = n.allowedAutoPlacements,
        g = t.options.placement,
        _ = bp(g) === g,
        v = c || (_ || !m ? [nm(g)] : bm(g)),
        y = [g].concat(v).reduce(function (e, n) {
          return e.concat(
            bp(n) === `auto`
              ? ym(t, {
                  placement: n,
                  boundary: u,
                  rootBoundary: d,
                  padding: l,
                  flipVariations: m,
                  allowedAutoPlacements: h,
                })
              : n,
          );
        }, []),
        b = t.rects.reference,
        x = t.rects.popper,
        S = new Map(),
        C = !0,
        w = y[0],
        T = 0;
      T < y.length;
      T++
    ) {
      var E = y[T],
        D = bp(E),
        O = Kp(E) === ip,
        k = [`top`, $f].indexOf(D) >= 0,
        A = k ? `width` : `height`,
        j = vm(t, { placement: E, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        M = k ? (O ? ep : tp) : O ? $f : `top`;
      b[A] > x[A] && (M = nm(M));
      var N = nm(M),
        P = [];
      if (
        (a && P.push(j[D] <= 0),
        s && P.push(j[M] <= 0, j[N] <= 0),
        P.every(function (e) {
          return e;
        }))
      ) {
        ((w = E), (C = !1));
        break;
      }
      S.set(E, P);
    }
    if (C)
      for (
        var ee = m ? 3 : 1,
          te = function (e) {
            var t = y.find(function (t) {
              var n = S.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return ((w = t), `break`);
          },
          ne = ee;
        ne > 0 && te(ne) !== `break`;
        ne--
      );
    t.placement !== w && ((t.modifiersData[r]._skip = !0), (t.placement = w), (t.reset = !0));
  }
}
var Sm = {
  name: `flip`,
  enabled: !0,
  phase: `main`,
  fn: xm,
  requiresIfExists: [`offset`],
  data: { _skip: !1 },
};
function Cm(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function wm(e) {
  return [`top`, ep, $f, tp].some(function (t) {
    return e[t] >= 0;
  });
}
function Tm(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = vm(t, { elementContext: `reference` }),
    s = vm(t, { altBoundary: !0 }),
    c = Cm(o, r),
    l = Cm(s, i, a),
    u = wm(c),
    d = wm(l);
  ((t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: l,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    })));
}
var Em = {
  name: `hide`,
  enabled: !0,
  phase: `main`,
  requiresIfExists: [`preventOverflow`],
  fn: Tm,
};
function Dm(e, t, n) {
  var r = bp(e),
    i = [`left`, `top`].indexOf(r) >= 0 ? -1 : 1,
    a = typeof n == `function` ? n(Object.assign({}, t, { placement: e })) : n,
    o = a[0],
    s = a[1];
  return (
    (o ||= 0),
    (s = (s || 0) * i),
    [`left`, `right`].indexOf(r) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function Om(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    a = i === void 0 ? [0, 0] : i,
    o = up.reduce(function (e, n) {
      return ((e[n] = Dm(n, t.rects, a)), e);
    }, {}),
    s = o[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = o));
}
var km = { name: `offset`, enabled: !0, phase: `main`, requires: [`popperOffsets`], fn: Om };
function Am(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = _m({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: `absolute`,
    placement: t.placement,
  });
}
var jm = { name: `popperOffsets`, enabled: !0, phase: `read`, fn: Am, data: {} };
function Mm(e) {
  return e === `x` ? `y` : `x`;
}
function Nm(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    a = i === void 0 ? !0 : i,
    o = n.altAxis,
    s = o === void 0 ? !1 : o,
    c = n.boundary,
    l = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    f = n.tether,
    p = f === void 0 ? !0 : f,
    m = n.tetherOffset,
    h = m === void 0 ? 0 : m,
    g = vm(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    _ = bp(t.placement),
    v = Kp(t.placement),
    y = !v,
    b = Ip(_),
    x = Mm(b),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    w = t.rects.popper,
    T = typeof h == `function` ? h(Object.assign({}, t.rects, { placement: t.placement })) : h,
    E =
      typeof T == `number`
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    O = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var k = b === `y` ? `top` : tp,
        A = b === `y` ? $f : ep,
        j = b === `y` ? `height` : `width`,
        M = S[b],
        N = M + g[k],
        P = M - g[A],
        ee = p ? -w[j] / 2 : 0,
        te = v === `start` ? C[j] : w[j],
        ne = v === `start` ? -w[j] : -C[j],
        re = t.elements.arrow,
        ie = p && re ? Dp(re) : { width: 0, height: 0 },
        ae = t.modifiersData[`arrow#persistent`]
          ? t.modifiersData[`arrow#persistent`].padding
          : zp(),
        oe = ae[k],
        se = ae[A],
        F = Lp(0, C[j], ie[j]),
        ce = y ? C[j] / 2 - ee - F - oe - E.mainAxis : te - F - oe - E.mainAxis,
        le = y ? -C[j] / 2 + ee + F + se + E.mainAxis : ne + F + se + E.mainAxis,
        ue = t.elements.arrow && Fp(t.elements.arrow),
        de = ue ? (b === `y` ? ue.clientTop || 0 : ue.clientLeft || 0) : 0,
        fe = D?.[b] ?? 0,
        pe = M + ce - fe - de,
        me = M + le - fe,
        he = Lp(p ? Sp(N, pe) : N, M, p ? xp(P, me) : P);
      ((S[b] = he), (O[b] = he - M));
    }
    if (s) {
      var ge = b === `x` ? `top` : tp,
        _e = b === `x` ? $f : ep,
        ve = S[x],
        ye = x === `y` ? `height` : `width`,
        be = ve + g[ge],
        xe = ve - g[_e],
        Se = [`top`, tp].indexOf(_) !== -1,
        Ce = D?.[x] ?? 0,
        we = Se ? be : ve - C[ye] - w[ye] - Ce + E.altAxis,
        Te = Se ? ve + C[ye] + w[ye] - Ce - E.altAxis : xe,
        Ee = p && Se ? Rp(we, ve, Te) : Lp(p ? we : be, ve, p ? Te : xe);
      ((S[x] = Ee), (O[x] = Ee - ve));
    }
    t.modifiersData[r] = O;
  }
}
var Pm = {
  name: `preventOverflow`,
  enabled: !0,
  phase: `main`,
  fn: Nm,
  requiresIfExists: [`offset`],
};
function Fm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Im(e) {
  return e === pp(e) || !hp(e) ? am(e) : Fm(e);
}
function Lm(e) {
  var t = e.getBoundingClientRect(),
    n = Cp(t.width) / e.offsetWidth || 1,
    r = Cp(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Rm(e, t, n) {
  n === void 0 && (n = !1);
  var r = hp(t),
    i = hp(t) && Lm(t),
    a = jp(t),
    o = Ep(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((fp(t) !== `body` || lm(a)) && (s = Im(t)),
      hp(t) ? ((c = Ep(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = om(a))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function zm(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (e) {
    t.set(e.name, e);
  });
  function i(e) {
    (n.add(e.name),
      [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
        if (!n.has(e)) {
          var r = t.get(e);
          r && i(r);
        }
      }),
      r.push(e));
  }
  return (
    e.forEach(function (e) {
      n.has(e.name) || i(e);
    }),
    r
  );
}
function Bm(e) {
  var t = zm(e);
  return dp.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n;
      }),
    );
  }, []);
}
function Vm(e) {
  var t;
  return function () {
    return (
      (t ||= new Promise(function (n) {
        Promise.resolve().then(function () {
          ((t = void 0), n(e()));
        });
      })),
      t
    );
  };
}
function Hm(e) {
  var t = e.reduce(function (e, t) {
    var n = e[t.name];
    return (
      (e[t.name] = n
        ? Object.assign({}, n, t, {
            options: Object.assign({}, n.options, t.options),
            data: Object.assign({}, n.data, t.data),
          })
        : t),
      e
    );
  }, {});
  return Object.keys(t).map(function (e) {
    return t[e];
  });
}
var Um = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function Wm() {
  return ![...arguments].some(function (e) {
    return !(e && typeof e.getBoundingClientRect == `function`);
  });
}
function Gm(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    a = i === void 0 ? Um : i;
  return function (e, t, n) {
    n === void 0 && (n = a);
    var i = {
        placement: `bottom`,
        orderedModifiers: [],
        options: Object.assign({}, Um, a),
        modifiersData: {},
        elements: { reference: e, popper: t },
        attributes: {},
        styles: {},
      },
      o = [],
      s = !1,
      c = {
        state: i,
        setOptions: function (n) {
          var o = typeof n == `function` ? n(i.options) : n;
          (u(),
            (i.options = Object.assign({}, a, i.options, o)),
            (i.scrollParents = {
              reference: mp(e) ? dm(e) : e.contextElement ? dm(e.contextElement) : [],
              popper: dm(t),
            }));
          var s = Bm(Hm([].concat(r, i.options.modifiers)));
          return (
            (i.orderedModifiers = s.filter(function (e) {
              return e.enabled;
            })),
            l(),
            c.update()
          );
        },
        forceUpdate: function () {
          if (!s) {
            var e = i.elements,
              t = e.reference,
              n = e.popper;
            if (Wm(t, n)) {
              ((i.rects = {
                reference: Rm(t, Fp(n), i.options.strategy === `fixed`),
                popper: Dp(n),
              }),
                (i.reset = !1),
                (i.placement = i.options.placement),
                i.orderedModifiers.forEach(function (e) {
                  return (i.modifiersData[e.name] = Object.assign({}, e.data));
                }));
              for (var r = 0; r < i.orderedModifiers.length; r++) {
                if (i.reset === !0) {
                  ((i.reset = !1), (r = -1));
                  continue;
                }
                var a = i.orderedModifiers[r],
                  o = a.fn,
                  l = a.options,
                  u = l === void 0 ? {} : l,
                  d = a.name;
                typeof o == `function` &&
                  (i = o({ state: i, options: u, name: d, instance: c }) || i);
              }
            }
          }
        },
        update: Vm(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(i));
          });
        }),
        destroy: function () {
          (u(), (s = !0));
        },
      };
    if (!Wm(e, t)) return c;
    c.setOptions(n).then(function (e) {
      !s && n.onFirstUpdate && n.onFirstUpdate(e);
    });
    function l() {
      i.orderedModifiers.forEach(function (e) {
        var t = e.name,
          n = e.options,
          r = n === void 0 ? {} : n,
          a = e.effect;
        if (typeof a == `function`) {
          var s = a({ state: i, name: t, instance: c, options: r });
          o.push(s || function () {});
        }
      });
    }
    function u() {
      (o.forEach(function (e) {
        return e();
      }),
        (o = []));
    }
    return c;
  };
}
var Km = Gm({ defaultModifiers: [em, jm, Zp, yp, km, Sm, Pm, Gp, Em] }),
  qm = i((e, t) => {
    var n = typeof Element < `u`,
      r = typeof Map == `function`,
      i = typeof Set == `function`,
      a = typeof ArrayBuffer == `function` && !!ArrayBuffer.isView;
    function o(e, t) {
      if (e === t) return !0;
      if (e && t && typeof e == `object` && typeof t == `object`) {
        if (e.constructor !== t.constructor) return !1;
        var s, c, l;
        if (Array.isArray(e)) {
          if (((s = e.length), s != t.length)) return !1;
          for (c = s; c-- !== 0; ) if (!o(e[c], t[c])) return !1;
          return !0;
        }
        var u;
        if (r && e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (u = e.entries(); !(c = u.next()).done; ) if (!t.has(c.value[0])) return !1;
          for (u = e.entries(); !(c = u.next()).done; )
            if (!o(c.value[1], t.get(c.value[0]))) return !1;
          return !0;
        }
        if (i && e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (u = e.entries(); !(c = u.next()).done; ) if (!t.has(c.value[0])) return !1;
          return !0;
        }
        if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
          if (((s = e.length), s != t.length)) return !1;
          for (c = s; c-- !== 0; ) if (e[c] !== t[c]) return !1;
          return !0;
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (
          e.valueOf !== Object.prototype.valueOf &&
          typeof e.valueOf == `function` &&
          typeof t.valueOf == `function`
        )
          return e.valueOf() === t.valueOf();
        if (
          e.toString !== Object.prototype.toString &&
          typeof e.toString == `function` &&
          typeof t.toString == `function`
        )
          return e.toString() === t.toString();
        if (((l = Object.keys(e)), (s = l.length), s !== Object.keys(t).length)) return !1;
        for (c = s; c-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, l[c])) return !1;
        if (n && e instanceof Element) return !1;
        for (c = s; c-- !== 0; )
          if (
            !((l[c] === `_owner` || l[c] === `__v` || l[c] === `__o`) && e.$$typeof) &&
            !o(e[l[c]], t[l[c]])
          )
            return !1;
        return !0;
      }
      return e !== e && t !== t;
    }
    t.exports = function (e, t) {
      try {
        return o(e, t);
      } catch (e) {
        if ((e.message || ``).match(/stack|recursion/i))
          return (console.warn(`react-fast-compare cannot handle circular refs`), !1);
        throw e;
      }
    };
  }),
  Jm = e(a()),
  Ym = e(qm()),
  Xm = [],
  Zm = function (e, t, n) {
    n === void 0 && (n = {});
    var r = T.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || `bottom`,
        strategy: n.strategy || `absolute`,
        modifiers: n.modifiers || Xm,
      },
      a = T.useState({
        styles: {
          popper: { position: i.strategy, left: `0`, top: `0` },
          arrow: { position: `absolute` },
        },
        attributes: {},
      }),
      o = a[0],
      s = a[1],
      c = T.useMemo(function () {
        return {
          name: `updateState`,
          enabled: !0,
          phase: `write`,
          fn: function (e) {
            var t = e.state,
              n = Object.keys(t.elements);
            Jm.flushSync(function () {
              s({
                styles: Zf(
                  n.map(function (e) {
                    return [e, t.styles[e] || {}];
                  }),
                ),
                attributes: Zf(
                  n.map(function (e) {
                    return [e, t.attributes[e]];
                  }),
                ),
              });
            });
          },
          requires: [`computeStyles`],
        };
      }, []),
      l = T.useMemo(
        function () {
          var e = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: `applyStyles`, enabled: !1 }]),
          };
          return (0, Ym.default)(r.current, e) ? r.current || e : ((r.current = e), e);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      u = T.useRef();
    return (
      Qf(
        function () {
          u.current && u.current.setOptions(l);
        },
        [l],
      ),
      Qf(
        function () {
          if (!(e == null || t == null)) {
            var r = (n.createPopper || Km)(e, t, l);
            return (
              (u.current = r),
              function () {
                (r.destroy(), (u.current = null));
              }
            );
          }
        },
        [e, t, n.createPopper],
      ),
      {
        state: u.current ? u.current.state : null,
        styles: o.styles,
        attributes: o.attributes,
        update: u.current ? u.current.update : null,
        forceUpdate: u.current ? u.current.forceUpdate : null,
      }
    );
  },
  Qm = function () {},
  $m = function () {
    return Promise.resolve(null);
  },
  eh = [];
function th(e) {
  var t = e.placement,
    n = t === void 0 ? `bottom` : t,
    r = e.strategy,
    i = r === void 0 ? `absolute` : r,
    a = e.modifiers,
    o = a === void 0 ? eh : a,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = T.useContext(qf),
    f = T.useState(null),
    p = f[0],
    m = f[1],
    h = T.useState(null),
    g = h[0],
    _ = h[1];
  T.useEffect(
    function () {
      Xf(l, p);
    },
    [l, p],
  );
  var v = T.useMemo(
      function () {
        return {
          placement: n,
          strategy: i,
          onFirstUpdate: c,
          modifiers: [].concat(o, [{ name: `arrow`, enabled: g != null, options: { element: g } }]),
        };
      },
      [n, i, c, o, g],
    ),
    y = Zm(s || d, p, v),
    b = y.state,
    x = y.styles,
    S = y.forceUpdate,
    C = y.update,
    w = T.useMemo(
      function () {
        return {
          ref: m,
          style: x.popper,
          placement: b ? b.placement : n,
          hasPopperEscaped:
            b && b.modifiersData.hide ? b.modifiersData.hide.hasPopperEscaped : null,
          isReferenceHidden:
            b && b.modifiersData.hide ? b.modifiersData.hide.isReferenceHidden : null,
          arrowProps: { style: x.arrow, ref: _ },
          forceUpdate: S || Qm,
          update: C || $m,
        };
      },
      [m, _, n, b, x, C, S],
    );
  return Jf(u)(w);
}
function nh(e) {
  var t = e.viewportPadding;
  return [
    {
      name: `maxSizeData`,
      enabled: !0,
      phase: `read`,
      fn: function (e) {
        var t = e.state,
          n = e.name;
        window.visualViewport &&
          (t.modifiersData[n] = {
            viewport: { width: window.visualViewport.width, height: window.visualViewport.height },
          });
      },
    },
    {
      name: `maxSize`,
      enabled: !0,
      phase: `beforeWrite`,
      requiresIfExists: [`offset`, `preventOverflow`, `flip`],
      fn: function (e) {
        var n,
          r,
          i,
          a = e.state,
          o = a.modifiersData.maxSizeData;
        if (
          !(
            typeof (o == null || (n = o.viewport) == null ? void 0 : n.width) != `number` ||
            typeof (o == null || (r = o.viewport) == null ? void 0 : r.height) != `number`
          )
        ) {
          var s = o.viewport,
            c = a.modifiersData.popperOffsets,
            l = c === void 0 ? { x: 0, y: 0 } : c,
            u = f(a.placement.split(`-`), 1)[0],
            d = ((i = a.modifiersData) == null || (i = i.offset) == null
              ? void 0
              : i[a.placement]) ?? { x: 0, y: 0 },
            p = s.width - 2 * t,
            m = s.height - 2 * t;
          (u === `top` && (m = a.rects.reference.y + d.y - t),
            u === `bottom` && (m = s.height - l.y - t),
            u === `left` && (p = a.rects.reference.x + d.x - t),
            u === `right` && (p = s.width - l.x - t),
            (a.styles.popper.maxWidth = `${p}px`),
            (a.styles.popper.maxHeight = `${m}px`));
        }
      },
    },
  ];
}
var rh = 5,
  ih = [
    {
      name: `flip`,
      options: {
        flipVariations: !1,
        padding: rh,
        boundary: `clippingParents`,
        rootBoundary: `viewport`,
      },
    },
  ];
function ah() {
  return null;
}
var oh = [0, 8];
function sh(e) {
  var t = e.children,
    n = t === void 0 ? ah : t,
    r = e.offset,
    i = r === void 0 ? oh : r,
    a = e.placement,
    o = a === void 0 ? `bottom-start` : a,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    u = e.modifiers,
    d = e.strategy,
    p = d === void 0 ? `fixed` : d,
    m = e.shouldFitViewport,
    h = m === void 0 ? !1 : m,
    g = f(i, 2),
    _ = g[0],
    v = g[1],
    y = (0, T.useMemo)(
      function () {
        var e = {
            name: `preventOverflow`,
            options: { padding: rh, rootBoundary: h ? `viewport` : `document` },
          },
          t = { name: `offset`, options: { offset: [_, v] } },
          n = h ? nh({ viewportPadding: rh }) : [];
        return [].concat(ih, [e, t], l(n));
      },
      [_, v, h],
    ),
    b = (0, T.useMemo)(
      function () {
        return u == null ? y : [].concat(l(y), l(u));
      },
      [y, u],
    );
  return T.createElement(th, { modifiers: b, placement: o, strategy: p, referenceElement: c }, n);
}
var ch = `atlaskit-portal-container`,
  lh = `body > .atlaskit-portal-container`,
  uh = `atlaskit-portal`,
  dh = function () {
    return document.body;
  },
  fh = function () {
    var e = document.querySelector(lh);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = ch),
        (n.style.display = `flex`),
        (t = dh()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  ph = function (e) {
    e.parentElement || fh().appendChild(e);
  },
  mh = function (e) {
    var t = document.createElement(`div`);
    return ((t.className = uh), (t.style.zIndex = `${e}`), t);
  },
  hh = function () {
    var e = document.querySelector(lh);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = ch),
        (n.style.display = `flex`),
        (t = dh()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  gh = function (e) {
    var t = hh();
    t.contains(e) && t.removeChild(e);
  };
function _h(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = r === void 0 ? !1 : r,
    a = (0, T.useMemo)(
      function () {
        return mh(t);
      },
      [t],
    ),
    o = zd();
  return (
    ph(a),
    (0, T.useEffect)(
      function () {
        J(`import_into_jsm_in_template_gallery_killswitch`) && i && gh(a);
      },
      [i, a],
    ),
    (0, T.useEffect)(
      function () {
        return function () {
          gh(a);
        };
      },
      [a],
    ),
    (0, Jm.createPortal)(o ? T.createElement(Rd, { defaultColorMode: o }, n) : n, a)
  );
}
var vh = typeof window < `u` ? T.useLayoutEffect : T.useEffect,
  yh = function () {
    return document !== void 0;
  },
  bh = function (e) {
    if (yh()) {
      var t = document.createElement(`div`);
      return ((t.className = uh), (t.style.zIndex = `${e}`), t);
    }
  },
  xh = function () {
    return document !== void 0;
  },
  Sh = function () {
    if (xh()) {
      var e = document.querySelector(lh);
      if (!e) {
        var t,
          n = document.createElement(`div`);
        return (
          (n.className = ch),
          (n.style.display = `flex`),
          (t = dh()) == null || t.appendChild(n),
          n
        );
      }
      return e;
    }
  },
  Ch = function () {
    return document !== void 0;
  },
  wh = function (e) {
    if (Ch() && e) {
      var t;
      (t = dh()) == null || t.removeChild(e);
    }
  };
function Th(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = f((0, T.useState)(null), 2),
    a = i[0],
    o = i[1],
    s = zd();
  return (
    vh(
      function () {
        if (J(`import_into_jsm_in_template_gallery_killswitch`)) {
          if (!r) {
            var e = bh(t);
            o(e);
            var n = Sh();
            return !e || !n
              ? void 0
              : (n.appendChild(e),
                function () {
                  (n && (n.removeChild(e), !n.hasChildNodes() && wh(n)), o(null));
                });
          }
        } else {
          var i = bh(t);
          o(i);
          var a = Sh();
          return !i || !a
            ? void 0
            : (a.appendChild(i),
              function () {
                (i && a.removeChild(i), o(null));
              });
        }
      },
      [t, r, J],
    ),
    a
      ? (0, Jm.createPortal)(
          T.createElement(
            T.Suspense,
            { fallback: null },
            s ? T.createElement(Rd, { defaultColorMode: s }, n) : n,
          ),
          a,
        )
      : null
  );
}
var Eh = function (e) {
    var t = f((0, T.useState)(!1), 2),
      n = t[0],
      r = t[1],
      i = f(
        (0, T.useState)(function () {
          return e === `layoutEffect` ? vh : T.useEffect;
        }),
        1,
      )[0];
    return (
      i(function () {
        r(!0);
      }, []),
      n
    );
  },
  Dh = `akPortalMount`,
  Oh = `akPortalUnmount`,
  kh = {
    100: `card`,
    200: `navigation`,
    300: `dialog`,
    400: `layer`,
    500: `blanket`,
    510: `modal`,
    600: `flag`,
    700: `spotlight`,
    9999: `tooltip`,
  },
  Ah = function (e) {
    return kh.hasOwnProperty(e) ? kh[e] : null;
  },
  jh = function (e, t) {
    var n = { layer: Ah(Number(t)), zIndex: t };
    return new CustomEvent(e, { detail: n });
  };
function Mh(e, t) {
  var n = jh(e, t);
  window.dispatchEvent(n);
}
var Nh = function (e) {
  var t = Number(e);
  (0, T.useEffect)(
    function () {
      return (
        Mh(Dh, t),
        function () {
          Mh(Oh, t);
        }
      );
    },
    [t],
  );
};
function Ph(e) {
  var t = e.zIndex,
    n = t === void 0 ? 0 : t,
    r = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? `effect` : i,
    o = e.isClosed,
    s = o === void 0 ? !1 : o,
    c = Eh(a);
  return (
    Nh(n),
    J(`platform_design_system_team_portal_logic_r18_fix`)
      ? T.createElement(Th, { zIndex: n, isClosed: s }, r)
      : c
        ? T.createElement(_h, { zIndex: n, isClosed: s }, r)
        : null
  );
}
var Fh = new Set(),
  Ih = null;
function Lh() {
  Ih ||
    ((Ih = (0, Zu.bindAll)(window, [
      { type: `dragend`, listener: Rh },
      { type: `pointerdown`, listener: Rh },
      {
        type: `pointermove`,
        listener: (function () {
          var e = 0;
          return function () {
            if (e < 20) {
              e++;
              return;
            }
            Rh();
          };
        })(),
      },
    ])),
    Array.from(Fh).forEach(function (e) {
      e.onDragStart();
    }));
}
function Rh() {
  var e;
  ((e = Ih) == null || e(),
    (Ih = null),
    Array.from(Fh).forEach(function (e) {
      e.onDragEnd();
    }));
}
function zh() {
  return (0, Zu.bindAll)(window, [
    { type: `dragstart`, listener: Lh },
    { type: `dragenter`, listener: Lh },
  ]);
}
var Bh = null;
function Vh(e) {
  return (
    (Bh ||= zh()),
    Fh.add(e),
    e.onRegister({ isDragging: Ih !== null }),
    function () {
      if ((Fh.delete(e), Fh.size === 0)) {
        var t;
        ((t = Bh) == null || t(), (Bh = null));
      }
    }
  );
}
function Hh(e) {
  var t = e || { top: 0, left: 0 };
  return {
    getBoundingClientRect: function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    },
    clientWidth: 0,
    clientHeight: 0,
  };
}
function Uh(e, t) {
  var n = t.targetElement,
    r = t.tooltipPosition;
  if (r === `mouse`)
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: e.clientX, y: e.clientY, width: 0, height: 0 });
      },
    };
  var i = n.getBoundingClientRect();
  if (r === `mouse-x`)
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: e.clientX, y: i.top, width: 0, height: i.height });
      },
    };
  if (r === `mouse-y`)
    return {
      getBoundingClientRect: function () {
        return DOMRect.fromRect({ x: i.left, y: e.clientY, width: i.width, height: 0 });
      },
    };
  throw Error(`Invalid tooltip position for virtual element: ${r}`);
}
var Wh = null;
function Gh() {
  Wh != null && (window.clearTimeout(Wh), (Wh = null));
}
function Kh(e, t) {
  (Gh(),
    (Wh = window.setTimeout(function () {
      ((Wh = null), e());
    }, t)));
}
var qh = null;
function Jh(e) {
  var t = `waiting-to-show`;
  function n() {
    return !!(qh && qh.entry === e);
  }
  function r() {
    n() && (Gh(), (qh = null));
  }
  function i() {
    (n() && e.done(), (t = `done`), r());
  }
  function a() {
    (n() && e.hide({ isImmediate: !0 }), i());
  }
  function o() {
    if (n()) {
      if (t === `waiting-to-hide`) {
        ((t = `shown`), Gh());
        return;
      }
      if (t === `hide-animating`) {
        ((t = `shown`), Gh(), e.show({ isImmediate: !1 }));
        return;
      }
    }
  }
  function s(r) {
    var i = r.isImmediate;
    if (n()) {
      if (t === `waiting-to-show`) {
        a();
        return;
      }
      if (t !== `waiting-to-hide`) {
        if (i) {
          a();
          return;
        }
        ((t = `waiting-to-hide`),
          Kh(function () {
            ((t = `hide-animating`), e.hide({ isImmediate: !1 }));
          }, e.delay));
      }
    }
  }
  function c() {
    n() && t === `hide-animating` && i();
  }
  function l() {
    return t === `shown` || t === `waiting-to-hide` || t === `hide-animating`;
  }
  function u() {
    return e.source.type === `mouse` ? e.source.mouse : null;
  }
  function d() {
    var n = J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? e.shouldAlwaysFadeIn : !1,
      r = !!(qh && qh.isVisible()) && !n;
    ((qh &&= (Gh(), qh.entry.hide({ isImmediate: !0 }), qh.entry.done(), null)),
      (qh = { entry: e, isVisible: l }));
    function i() {
      ((t = `shown`), e.show({ isImmediate: r }));
    }
    if (r) {
      i();
      return;
    }
    ((t = `waiting-to-show`), Kh(i, e.delay));
  }
  return (
    d(),
    {
      keep: o,
      abort: r,
      isActive: n,
      requestHide: s,
      finishHideAnimation: c,
      mousePosition: J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? void 0 : u(),
      mousePos:
        e.source.type === `mouse` && J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? { clientX: e.source.clientX, clientY: e.source.clientY }
          : null,
    }
  );
}
function Yh() {
  var e = Bd();
  return function (t) {
    return `${e}-${t.toString()}`;
  };
}
function Xh(e, t) {
  var n = Yh();
  return t ? `${n(e)}` : void 0;
}
X();
var Zh = {
    shortcutSegmentsContainer: `_zulpv77o _1e0c1txw _1q511b66 _85i5v77o`,
    shortcutSegment: `_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p`,
  },
  Qh = function (e) {
    var t = e.shortcut;
    return T.createElement(
      `div`,
      { className: Y([Zh.shortcutSegmentsContainer]) },
      t.map(function (e, t) {
        return T.createElement(`kbd`, { key: `${e}-${t}`, className: Y([Zh.shortcutSegment]) }, e);
      }),
    );
  };
X();
var $h = (0, T.forwardRef)(function (e, t) {
  var n = e.style,
    r = e.className,
    i = e.children,
    a = e.placement,
    o = e.testId,
    s = e.onMouseOut,
    c = e.onMouseOver,
    l = e.id,
    u = e.shortcut;
  return T.createElement(
    `div`,
    { ref: t, style: n, "data-testid": o ? `${o}--wrapper` : void 0 },
    T.createElement(
      `div`,
      {
        role: `tooltip`,
        className: Y([`_80om73ad`, r]),
        onMouseOut: s,
        onMouseOver: c,
        "data-placement": a,
        "data-testid": o,
        id: l,
      },
      i,
      u && T.createElement(Qh, { shortcut: u }),
    ),
  );
});
(($h.displayName = `TooltipPrimitive`), X());
var eg = {
    base: `_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhk1aqn _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna`,
    truncate: `_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c`,
  },
  tg = (0, T.forwardRef)(function (e, t) {
    var n = e.style,
      r = e.className,
      i = e.children,
      a = e.truncate,
      o = e.placement,
      s = e.testId,
      c = e.onMouseOut,
      l = e.onMouseOver,
      u = e.id,
      d = e.shortcut;
    return T.createElement(
      $h,
      {
        ref: t,
        style: n,
        className: Y([eg.base, a && eg.truncate, r]),
        placement: o,
        testId: s,
        id: u,
        onMouseOut: c,
        onMouseOver: l,
        shortcut: d,
      },
      i,
    );
  });
tg.displayName = `TooltipContainer`;
function ng(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function rg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ng(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ng(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ig = Rs.tooltip(),
  ag = { componentName: `tooltip`, packageName: `@atlaskit/tooltip`, packageVersion: `21.1.6` },
  og = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  sg = function (e) {
    return e.split(`-`)[0];
  };
function cg(e) {
  var t = e.children,
    n = e.position,
    r = n === void 0 ? `bottom` : n,
    i = e.mousePosition,
    a = i === void 0 ? `bottom` : i,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    l = e.component,
    u = l === void 0 ? tg : l,
    d = e.tag,
    p = d === void 0 ? `div` : d,
    m = e.testId,
    h = e.delay,
    g = h === void 0 ? 300 : h,
    _ = e.onShow,
    v = _ === void 0 ? mn : _,
    y = e.onHide,
    b = y === void 0 ? mn : y,
    x = e.canAppear,
    S = e.hideTooltipOnClick,
    C = S === void 0 ? !1 : S,
    w = e.hideTooltipOnMouseDown,
    E = w === void 0 ? !1 : w,
    D = e.analyticsContext,
    O = e.strategy,
    k = O === void 0 ? `fixed` : O,
    A = e.ignoreTooltipPointerEvents,
    j = A === void 0 ? !1 : A,
    M = e.isScreenReaderAnnouncementDisabled,
    N = M === void 0 ? !1 : M,
    P = e.shortcut,
    ee = e.UNSAFE_shouldAlwaysFadeIn,
    te = ee === void 0 ? !1 : ee,
    ne = e.UNSAFE_shouldRenderToParent,
    re = ne === void 0 ? !1 : ne,
    ie = r === `mouse` || r === `mouse-y` || r === `mouse-x`,
    ae = ie ? a : r,
    oe = Ao(rg({ fn: v, action: `displayed`, analyticsData: D }, ag)),
    se = Ao(rg({ fn: b, action: `hidden`, analyticsData: D }, ag)),
    F = (0, T.useRef)(null),
    ce = f((0, T.useState)(`hide`), 2),
    le = ce[0],
    ue = ce[1],
    de = (0, T.useRef)(null),
    fe = (0, T.useRef)(null),
    pe = function (e) {
      ((fe.current = e), (de.current = e ? e.firstElementChild : null));
    },
    me = (0, T.useCallback)(function (e) {
      de.current = e;
    }, []),
    he = yf(le),
    ge = yf(oe),
    _e = yf(se),
    ve = yf(g),
    ye = yf(x),
    be = (0, T.useRef)(!1),
    xe = yf(te),
    Se = (0, T.useCallback)(function (e) {
      ((F.current = e), (be.current = !1));
    }, []),
    Ce = (0, T.useCallback)(
      function () {
        F.current &&
          (be.current && _e.current(), (F.current = null), (be.current = !1), ue(`hide`));
      },
      [_e],
    ),
    we = (0, T.useCallback)(
      function () {
        F.current &&= (F.current.abort(), be.current && _e.current(), null);
      },
      [_e],
    );
  (0, T.useEffect)(
    function () {
      return function () {
        F.current && we();
      };
    },
    [we],
  );
  var Te = (0, T.useRef)(!1);
  (0, T.useEffect)(function () {
    return Vh({
      onRegister: function (e) {
        Te.current = e.isDragging;
      },
      onDragStart: function () {
        var e;
        ((e = F.current) == null || e.requestHide({ isImmediate: !0 }), (Te.current = !0));
      },
      onDragEnd: function () {
        Te.current = !1;
      },
    });
  }, []);
  var Ee = (0, T.useCallback)(
    function (e) {
      var t;
      if (!Te.current) {
        if ((F.current && !F.current.isActive() && we(), F.current && F.current.isActive())) {
          F.current.keep();
          return;
        }
        (ye.current && !((t = ye.current) != null && t.call(ye))) ||
          Se(
            Jh({
              source: e,
              delay: ve.current,
              show: function (e) {
                var t = e.isImmediate;
                (be.current || ((be.current = !0), ge.current()),
                  ue(t ? `show-immediate` : `fade-in`));
              },
              hide: function (e) {
                e.isImmediate ? ue(`hide`) : ue(`before-fade-out`);
              },
              done: Ce,
              shouldAlwaysFadeIn: J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                ? xe.current
                : !1,
            }),
          );
      }
    },
    [ye, ve, Ce, Se, we, ge, xe],
  );
  (vf({
    onClose: (0, T.useCallback)(
      function () {
        var e;
        (e = F.current) == null || e.requestHide({ isImmediate: !0 });
      },
      [F],
    ),
    isDisabled: le === `hide` || le === `fade-out`,
  }),
    (0, T.useEffect)(
      function () {
        return le === `hide`
          ? mn
          : (le === `before-fade-out` && ue(`fade-out`),
            (0, Zu.bind)(window, {
              type: `scroll`,
              listener: function () {
                F.current && F.current.requestHide({ isImmediate: !0 });
              },
              options: { capture: !0, passive: !0, once: !0 },
            }));
      },
      [le],
    ));
  var I = (0, T.useCallback)(
      function () {
        E && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [E],
    ),
    De = (0, T.useCallback)(
      function () {
        C && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [C],
    ),
    Oe = (0, T.useCallback)(
      function (e) {
        (fe.current && e.target === fe.current) ||
          e.defaultPrevented ||
          (e.preventDefault(),
          Ee(
            ie
              ? {
                  type: `mouse`,
                  mouse: J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                    ? void 0
                    : Hh({ left: e.clientX, top: e.clientY }),
                  clientX: e.clientX,
                  clientY: e.clientY,
                }
              : { type: `keyboard` },
          ));
      },
      [ie, Ee],
    ),
    L = (0, T.useCallback)(function (e) {
      (fe.current && e.target === fe.current) ||
        e.defaultPrevented ||
        (e.preventDefault(), F.current && F.current.requestHide({ isImmediate: !1 }));
    }, []),
    R = ie
      ? function (e) {
          var t;
          (t = F.current) != null &&
            t.isActive() &&
            (J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ||
              (F.current.mousePosition = Hh({ left: e.clientX, top: e.clientY })),
            (F.current.mousePos = { clientX: e.clientX, clientY: e.clientY }));
        }
      : void 0,
    ke = (0, T.useCallback)(function () {
      if (F.current && F.current.isActive()) {
        F.current.keep();
        return;
      }
    }, []),
    Ae = (0, T.useCallback)(
      function (e) {
        try {
          if (!e.target.matches(`:focus-visible`)) return;
        } catch {}
        Ee({ type: `keyboard` });
      },
      [Ee],
    ),
    je = (0, T.useCallback)(function () {
      F.current && F.current.requestHide({ isImmediate: !1 });
    }, []),
    Me = (0, T.useCallback)(
      function (e) {
        e === `exiting` &&
          he.current === `fade-out` &&
          F.current &&
          F.current.finishHideAnimation();
      },
      [he],
    ),
    Ne = p,
    Pe = le !== `hide` && !!o,
    Fe = !N && Pe,
    Ie = le !== `hide` && le !== `fade-out`,
    Le = (0, T.useCallback)(function () {
      var e;
      (e = F.current) == null || e.requestHide({ isImmediate: !0 });
    }, []);
  Cf({ isOpen: Pe && Ie, onClose: Le });
  var Re = function () {
      var e, t;
      return ie &&
        (e = F.current) != null &&
        e.mousePos &&
        de.current &&
        J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
        ? Uh(F.current.mousePos, { targetElement: de.current, tooltipPosition: r })
        : ie &&
            (t = F.current) != null &&
            t.mousePosition &&
            !J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? F.current?.mousePosition
          : de.current || void 0;
    },
    ze = Xh(`tooltip`, Fe),
    Be = {
      onMouseOver: Oe,
      onMouseOut: L,
      onMouseMove: R,
      onMouseDown: I,
      onClick: De,
      onFocus: Ae,
      onBlur: je,
    };
  m && (Be[`data-testid`] = `${m}--container`);
  var Ve = typeof t == `function`;
  (0, T.useEffect)(
    function () {
      if (!Ve) {
        var e = de.current;
        if (!(!e || !ze))
          return (
            e.setAttribute(`aria-describedby`, ze),
            function () {
              return e.removeAttribute(`aria-describedby`);
            }
          );
      }
    },
    [Ve, ze],
  );
  var He = Fe
      ? T.createElement(
          `span`,
          { "data-testid": m ? `${m}-hidden` : void 0, hidden: !0, id: ze },
          typeof o == `function` ? o({}) : o,
        )
      : null,
    Ue = re && J(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? T.Fragment : lg;
  return T.createElement(
    T.Fragment,
    null,
    typeof t == `function`
      ? T.createElement(
          T.Fragment,
          null,
          t(rg(rg({}, Be), {}, { "aria-describedby": ze, ref: me })),
          He,
        )
      : T.createElement(Ne, z({}, Be, { ref: pe, role: `presentation` }), t, He),
    Pe
      ? T.createElement(
          Ue,
          null,
          T.createElement(sh, { placement: ae, referenceElement: Re(), strategy: k }, function (e) {
            var t = e.ref,
              n = e.style,
              r = e.update,
              i = e.placement,
              a = ie ? void 0 : og[sg(i)];
            return T.createElement(
              Rf,
              { appear: !0 },
              Ie &&
                T.createElement(
                  Gf,
                  {
                    distance: `constant`,
                    entranceDirection: a,
                    exitDirection: a,
                    onFinish: Me,
                    duration: le === `show-immediate` ? `none` : `medium`,
                  },
                  function (e) {
                    var i = e.className;
                    return T.createElement(
                      u,
                      {
                        ref: t,
                        className: `Tooltip ${i}`,
                        style: rg(rg({}, n), j && { pointerEvents: `none` }),
                        truncate: c,
                        placement: ae,
                        testId: Re() ? m : m && `${m}--unresolved`,
                        onMouseOut: L,
                        onMouseOver: ke,
                        shortcut: P,
                      },
                      typeof o == `function` ? o({ update: r }) : o,
                    );
                  },
                ),
            );
          }),
        )
      : null,
  );
}
var lg = function (e) {
  var t = e.children;
  return T.createElement(Ph, { zIndex: ig }, t);
};
X();
var ug = [
  `width`,
  `children`,
  `isSortable`,
  `sortOrder`,
  `isFixedSize`,
  `shouldTruncate`,
  `onClick`,
  `style`,
  `testId`,
];
function dg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? dg(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var pg = `--local-dynamic-table-text-color`,
  mg = (0, T.forwardRef)(function (e, t) {
    var n = e.width,
      r = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      l = d(e, ug),
      u = fg(
        fg(fg({}, s), n && lc({ width: n })),
        {},
        x({}, pg, `var(--ds-text-subtlest, #6B6E76)`),
      ),
      f = i === `ASC`,
      p = i === Hs,
      m = function () {
        if (f) return `ascending`;
        if (p) return `descending`;
      },
      h = r ? `th` : `td`;
    return T.createElement(
      h,
      z({ "aria-sort": m(), style: u, onClick: void 0, ref: t, "data-testid": c }, l, {
        className: Y([
          `_izbqglyw _h7alglyw _85i51b66 _1q511b66 _y4tiu2gc _bozgu2gc _y3gn1e5h _1s37ze3t _uupyze3t`,
          `_11c8wadc _179r1uh4 _mqm2glyw _kqswh2mm _syazazsu _k48pwu06 _y3gn1e5h _s7n4nkob _1ygbd0i9`,
          `_1bsb8a2a`,
          a && o && `_1bto1l2s _o5721q9c`,
          a && `_1reo15vq _18m915vq`,
        ]),
      }),
      r,
    );
  });
X();
var hg = e(gf()),
  gg = e(_f()),
  _g = [
    `content`,
    `inlineStyles`,
    `testId`,
    `isRanking`,
    `innerRef`,
    `isSortable`,
    `sortOrder`,
    `onClick`,
    `headCellId`,
    `activeSortButtonId`,
    `ascendingSortTooltip`,
    `descendingSortTooltip`,
    `buttonAriaRoleDescription`,
    `isIconOnlyHeader`,
  ],
  vg = {
    buttonWrapper: `_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke`,
    sortIconHiddenWrapper: `_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n`,
    sortIconVisibleWrapper: `_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66`,
    hideIconHeaderWrapper: `_tzy4idpf _18u010v4`,
    visibleHeaderWrapper: `_tzy4kb7n _u5f31b66`,
  },
  yg = { headCellContainer: `_1e0c1txw _4cvr1h6o`, text: `_11c8wadc _syazazsu _k48pwu06` },
  bg = function (e) {
    var t = e.content,
      n = e.inlineStyles,
      r = e.testId;
    e.isRanking;
    var i = e.innerRef,
      a = e.isSortable,
      o = e.sortOrder,
      s = e.onClick,
      c = e.headCellId,
      l = e.activeSortButtonId,
      u = e.ascendingSortTooltip,
      p = u === void 0 ? `Sort ascending` : u,
      m = e.descendingSortTooltip,
      h = m === void 0 ? `Sort descending` : m,
      g = e.buttonAriaRoleDescription,
      _ = g === void 0 ? `Sort button` : g,
      v = e.isIconOnlyHeader,
      y = d(e, _g),
      b = f((0, T.useState)(!1), 2),
      x = b[0],
      S = b[1],
      C = f((0, T.useState)(!1), 2),
      w = C[0],
      E = C[1],
      D = x || c === l || o !== void 0 || w,
      O = D && v,
      k = !v || D || (v && !w),
      A = (0, T.useCallback)(
        function () {
          E?.(!0);
        },
        [E],
      ),
      j = (0, T.useCallback)(
        function () {
          E?.(!1);
        },
        [E],
      ),
      M = (0, T.useCallback)(
        function () {
          S(!0);
        },
        [S],
      ),
      N = (0, T.useCallback)(
        function () {
          S(!1);
        },
        [S],
      ),
      P = T.createElement(
        ll,
        { xcss: yg.headCellContainer, onMouseEnter: M, onMouseLeave: N, onFocus: A, onBlur: j },
        T.createElement(
          cg,
          { content: o === `ASC` ? p : h },
          T.createElement(
            $l,
            { onClick: s, xcss: vg.buttonWrapper, "aria-roledescription": _ },
            T.createElement(
              wl,
              { xcss: O ? vg.hideIconHeaderWrapper : vg.visibleHeaderWrapper },
              T.createElement(`span`, { className: Y([yg.text]) }, t),
            ),
            k &&
              T.createElement(
                wl,
                { xcss: D ? vg.sortIconVisibleWrapper : vg.sortIconHiddenWrapper },
                o === `ASC`
                  ? T.createElement(gg.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--up--icon`,
                    })
                  : T.createElement(hg.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--down--icon`,
                    }),
              ),
          ),
        ),
      );
    return T.createElement(
      mg,
      z({ style: n, testId: r && `${r}--head--cell`, ref: typeof i == `string` ? null : i }, y, {
        isSortable: a,
        sortOrder: o,
      }),
      a ? P : t,
    );
  },
  xg = [`isRanking`, `refHeight`, `refWidth`];
function Sg(e, t, n) {
  return ((t = b(t)), m(e, Cg() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function Cg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Cg = function () {
    return !!e;
  })();
}
var wg = mf(
    (function (e) {
      function t() {
        return (h(this, t), Sg(this, t, arguments));
      }
      return (
        _(t, e),
        u(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.isRanking;
              e.refHeight;
              var n = e.refWidth,
                r = d(e, xg),
                i = hf(t, n);
              return T.createElement(bg, z({ inlineStyles: i }, r));
            },
          },
        ])
      );
    })(T.Component),
  ),
  Tg = [`cells`],
  Eg = [
    `ascendingSortTooltip`,
    `buttonAriaRoleDescription`,
    `colSpan`,
    `content`,
    `descendingSortTooltip`,
    `isIconOnlyHeader`,
    `isSortable`,
    `key`,
    `shouldTruncate`,
    `testId`,
    `width`,
  ];
function Dg(e, t, n) {
  return ((t = b(t)), m(e, Og() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function Og() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Og = function () {
    return !!e;
  })();
}
var kg = (function (e) {
  function t(e) {
    var n;
    return (h(this, t), (n = Dg(this, t, [e])), (n.state = { activeSortButtonId: null }), n);
  }
  return (
    _(t, e),
    u(t, [
      {
        key: `UNSAFE_componentWillMount`,
        value: function () {
          qs(this.props.sortKey, this.props.head);
        },
      },
      {
        key: `UNSAFE_componentWillReceiveProps`,
        value: function (e) {
          (this.props.sortKey !== e.sortKey || this.props.head !== e.head) && qs(e.sortKey, e.head);
        },
      },
      {
        key: `render`,
        value: function () {
          var e = this,
            t = this.props,
            n = t.head,
            r = t.sortKey,
            i = t.sortOrder,
            a = t.isFixedSize,
            o = t.onSort,
            s = t.isRanking,
            c = t.isRankable,
            l = t.testId,
            u = this.state.activeSortButtonId;
          if (!n) return null;
          var f = c ? wg : bg,
            p = n.cells,
            m = d(n, Tg);
          return T.createElement(
            df,
            z({}, m, { isRanking: s, testId: l && `${l}--head` }),
            T.createElement(
              `tr`,
              null,
              p.map(function (t, n) {
                var c = t.ascendingSortTooltip,
                  p = t.buttonAriaRoleDescription,
                  m = t.colSpan,
                  h = t.content,
                  g = t.descendingSortTooltip,
                  _ = t.isIconOnlyHeader,
                  v = t.isSortable,
                  y = t.key,
                  b = t.shouldTruncate,
                  x = t.testId,
                  S = t.width,
                  C = d(t, Eg),
                  w = `head-cell-${n}`;
                return T.createElement(
                  f,
                  z(
                    {
                      colSpan: m,
                      content: h,
                      isFixedSize: a,
                      isIconOnlyHeader: _,
                      isSortable: !!v,
                      isRanking: s,
                      key: y || n,
                      headCellId: w,
                      activeSortButtonId: u,
                      onClick: function () {
                        (e.setState({ activeSortButtonId: w }), v && o(t)());
                      },
                      testId: x || l,
                      shouldTruncate: b,
                      sortOrder: y === r ? i : void 0,
                      width: S,
                      ascendingSortTooltip: c,
                      descendingSortTooltip: g,
                      buttonAriaRoleDescription: p,
                    },
                    C,
                  ),
                );
              }),
            ),
          );
        },
      },
    ])
  );
})(T.Component);
ot();
var Ag = [`isRankable`, `isRanking`, `onRankStart`, `onRankEnd`, `isRankingDisabled`];
function jg(e) {
  switch (e) {
    case Hs:
      return `ASC`;
    case `ASC`:
      return Hs;
    default:
      return e;
  }
}
var Mg = function (e) {
    var t = e.caption,
      n = e.head,
      r = e.highlightedRowIndex,
      i = e.rows,
      a = e.sortKey,
      o = e.sortOrder,
      s = e.loadingLabel,
      c = e.onPageRowsUpdate,
      l = e.testId,
      u = e.totalRows,
      d = e.label,
      p = e.isLoading,
      m = p === void 0 ? !1 : p,
      h = e.isFixedSize,
      g = h === void 0 ? !1 : h,
      _ = e.rowsPerPage,
      v = _ === void 0 ? 1 / 0 : _,
      y = e.onSetPage,
      b = y === void 0 ? mn : y,
      x = e.onSort,
      S = x === void 0 ? mn : x,
      C = e.page,
      w = C === void 0 ? 1 : C,
      E = e.emptyView,
      D = e.isRankable,
      O = D === void 0 ? !1 : D,
      k = e.isRankingDisabled,
      A = k === void 0 ? !1 : k,
      j = e.onRankStart,
      M = j === void 0 ? mn : j,
      N = e.onRankEnd,
      P = N === void 0 ? mn : N,
      ee = e.loadingSpinnerSize,
      te = e.paginationi18n,
      ne =
        te === void 0
          ? { prev: `Previous Page`, next: `Next Page`, label: `Pagination`, pageLabel: `Page` }
          : te,
      re = f((0, T.useState)(!1), 2),
      ie = re[0],
      ae = re[1],
      oe = (0, T.useRef)(null),
      se = Do({
        fn: S,
        action: `sorted`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      }),
      F = Do({
        fn: P,
        action: `ranked`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      });
    (0, T.useEffect)(
      function () {
        (qs(a, n), Vs(n));
      },
      [a, n],
    );
    var ce = function (e) {
        return function () {
          var t = e.key;
          if (t) {
            if (se && O && t === a && o === `DESC`) {
              se({ key: null, sortOrder: null, item: e });
              return;
            }
            var n = t === a ? jg(o) : `ASC`;
            se && se({ key: t, item: e, sortOrder: n });
          }
        };
      },
      le = function (e, t) {
        b(e, t);
      },
      ue = function (e) {
        (ae(!0), M(e));
      },
      de = function (e) {
        (ae(!1), F(e));
      },
      fe = function () {
        return ee || (Ks(i || [], w, v).length > 2 ? Ws : Us);
      },
      pe = function () {
        return m ? T.createElement(Xs, { testId: l }) : E && T.createElement(Ys, { testId: l }, E);
      },
      me = i && i.length,
      he,
      ge = !1;
    (u && Number.isInteger(u) && v && me && me <= u
      ? ((he = Math.ceil(u / v)), (ge = !0))
      : (he = me && v ? Math.ceil(me / v) : 0),
      (he = he < 1 ? 1 : he));
    var _e = w > he ? he : w,
      ve = !!me,
      ye = fe(),
      be = pe();
    return T.createElement(
      T.Fragment,
      null,
      T.createElement(
        zc,
        {
          isLoading: m && ve,
          spinnerSize: ye,
          targetRef: function () {
            return oe.current;
          },
          testId: l,
          loadingLabel: s,
        },
        T.createElement(
          $s,
          { isFixedSize: g, "aria-label": d, hasDataRow: ve, testId: l, isLoading: m },
          !!t && T.createElement(Js, null, t),
          n &&
            T.createElement(kg, {
              head: n,
              onSort: ce,
              sortKey: a,
              sortOrder: o,
              isRanking: ie,
              isRankable: O,
              testId: l,
            }),
          ve &&
            T.createElement(Pg, {
              ref: oe,
              highlightedRowIndex: r,
              rows: i,
              head: n,
              sortKey: a,
              sortOrder: o,
              rowsPerPage: v,
              page: _e,
              isFixedSize: g || !1,
              onPageRowsUpdate: c,
              isTotalPagesControlledExternally: ge,
              testId: l,
              isRankable: O,
              isRanking: ie,
              onRankStart: ue,
              onRankEnd: de,
              isRankingDisabled: A || m || !1,
            }),
        ),
      ),
      he <= 1
        ? null
        : T.createElement(
            Zs,
            { testId: l },
            T.createElement(lf, {
              value: _e,
              onChange: le,
              total: he,
              i18n: ne,
              isDisabled: m,
              testId: l,
            }),
          ),
      !ve &&
        be &&
        T.createElement(Mc, { isLoading: m, spinnerSize: `large`, testId: l, loadingLabel: s }, be),
    );
  },
  Ng = (0, T.lazy)(function () {
    return at(
      () => import(`./body-Ccy5UUZO.js`),
      __vite__mapDeps([4, 1, 3, 5, 6]),
      import.meta.url,
    );
  }),
  Pg = (0, T.forwardRef)(function (e, t) {
    var n = e.isRankable,
      r = n === void 0 ? !1 : n,
      i = e.isRanking,
      a = e.onRankStart,
      o = e.onRankEnd,
      s = e.isRankingDisabled,
      c = d(e, Ag),
      l = r && !c.sortKey,
      u = f((0, T.useState)(!1), 2),
      p = u[0],
      m = u[1];
    (0, T.useEffect)(
      function () {
        l && m(!0);
      },
      [l],
    );
    var h = T.createElement(bc, z({ ref: t }, c));
    return l && p
      ? T.createElement(
          Cc,
          { fallback: h },
          T.createElement(
            T.Suspense,
            { fallback: h },
            T.createElement(
              Ng,
              z({ ref: t }, c, {
                isRanking: i,
                onRankStart: a,
                onRankEnd: o,
                isRankingDisabled: s,
              }),
            ),
          ),
        )
      : h;
  });
function Fg(e, t, n) {
  return ((t = b(t)), m(e, Ig() ? Reflect.construct(t, n || [], b(e).constructor) : t.apply(e, n)));
}
function Ig() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ig = function () {
    return !!e;
  })();
}
var Lg = (function (e) {
  function t() {
    var e;
    h(this, t);
    var n = [...arguments];
    return (
      (e = Fg(this, t, [].concat(n))),
      x(e, `state`, {
        page: e.props.defaultPage,
        sortKey: e.props.defaultSortKey,
        sortOrder: e.props.defaultSortOrder,
        rows: e.props.rows,
      }),
      x(e, `onSetPageHandler`, function (t, n) {
        var r = e.props.onSetPage;
        r && (r(t, n), e.setState({ page: t }));
      }),
      x(e, `onSortHandler`, function (t, n) {
        var r = t.key,
          i = t.item,
          a = t.sortOrder,
          o = e.props.onSort;
        o && (o({ key: r, item: i, sortOrder: a }, n), e.setState({ sortKey: r, sortOrder: a }));
      }),
      x(e, `onRankEndIfExistsHandler`, function (t) {
        e.props.onRankEnd && e.props.onRankEnd(t);
      }),
      x(e, `onRankEndHandler`, function (t) {
        var n = t.destination,
          r = e.state,
          i = r.rows,
          a = r.page,
          o = e.props.rowsPerPage;
        if (!n || !i) {
          e.onRankEndIfExistsHandler(t);
          return;
        }
        var s = Bs(t, i, a, o);
        (e.setState({ rows: s }), e.onRankEndIfExistsHandler(t));
      }),
      e
    );
  }
  return (
    _(t, e),
    u(t, [
      {
        key: `UNSAFE_componentWillReceiveProps`,
        value: function (e) {
          var t = e.sortKey || this.state.sortKey,
            n = e.sortOrder || this.state.sortOrder,
            r = e.page || this.state.page;
          this.setState({ page: r, sortKey: t, sortOrder: n, rows: e.rows });
        },
      },
      {
        key: `render`,
        value: function () {
          var e = this.state,
            t = e.page,
            n = e.sortKey,
            r = e.sortOrder,
            i = e.rows,
            a = this.props,
            o = a.caption,
            s = a.emptyView,
            c = a.head,
            l = a.highlightedRowIndex,
            u = a.loadingSpinnerSize,
            d = a.isLoading,
            f = a.loadingLabel,
            p = a.isFixedSize,
            m = a.isRankable,
            h = a.isRankingDisabled,
            g = a.rowsPerPage,
            _ = a.paginationi18n,
            v = a.onRankStart,
            y = a.onPageRowsUpdate,
            b = a.testId,
            x = a.label;
          return T.createElement(Mg, {
            paginationi18n: _,
            caption: o,
            emptyView: s,
            head: c,
            highlightedRowIndex: l,
            loadingSpinnerSize: u,
            isLoading: d,
            loadingLabel: f,
            isFixedSize: p,
            onSetPage: this.onSetPageHandler,
            onSort: this.onSortHandler,
            page: t,
            rows: i,
            rowsPerPage: g,
            sortKey: n,
            sortOrder: r,
            isRankable: m,
            isRankingDisabled: h,
            onRankEnd: this.onRankEndHandler,
            onRankStart: v,
            onPageRowsUpdate: y,
            testId: b,
            label: x,
          });
        },
      },
    ])
  );
})(T.Component);
(x(Lg, `defaultProps`, {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: mn,
  onSort: mn,
  rowsPerPage: 1 / 0,
}),
  X());
var Rg = [
  `resize`,
  `appearance`,
  `isCompact`,
  `isRequired`,
  `isReadOnly`,
  `isDisabled`,
  `isInvalid`,
  `isMonospaced`,
  `minimumRows`,
  `testId`,
  `maxHeight`,
  `onBlur`,
  `onFocus`,
  `onChange`,
  `value`,
  `style`,
];
function zg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zg(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Vg = {
    componentName: `textArea`,
    packageName: `@atlaskit/textarea`,
    packageVersion: `0.0.0-development`,
  },
  Hg = 20,
  Ug = 16,
  Wg = 2,
  Gg = 6,
  Kg = `0.2s`,
  qg = 2,
  Jg = {
    standard: `_1dqonqa1 _kp82rsbi _1ltx1j9a _1bqsbk0g _z1pvby5v _19wtrsbi _12yml4ek _1l02v77o _11zpv77o _141f1v6z _daj71v6z _olc612x7 _14ji12x7 _7ba01v6z _1kod1v6z _858u1v1w _jomrr01l _7ehivyy1 _186j1v1w _qu18by5v`,
    subtle: `_1dqonqa1 _kp821j28 _1ltx1j28 _19wtrsbi _12yml4ek _1l02v77o _11zpv77o _141f1v6z _daj71v6z _olc612x7 _14ji12x7 _1kod1v6z _7ba01v6z _858u1v1w _jomrr01l _7ehivyy1`,
    none: `_1dqoglyw _kp821j28 _1ltx1j28 _19wt1j28 _12ym1j28 _1l02v77o _daj712x7 _11zpv77o _141f12x7 _olc612x7 _1kod12x7 _14ji12x7 _7ba012x7 _858u1j28 _jomr1j28 _7ehi3sij`,
  },
  Yg = { default: `_11c81d4k _1tn2fhey`, monospace: `_11c81d4k _ect4zzfg _1tn2fhey _14md1vhz` },
  Xg = {
    horizontal: `_14zg1e08`,
    vertical: `_14zg1e54`,
    auto: `_14zg1hrf`,
    smart: `_14zgglyw`,
    none: `_14zgglyw`,
  },
  Zg = function (e) {
    e.style.height = `auto`;
    var t = qg,
      n = e.scrollHeight + t * 2;
    e.style.height = `${n}px`;
  },
  Qg = (0, T.forwardRef)(function (e, t) {
    var n = (0, T.useRef)(null),
      r = e.resize,
      i = r === void 0 ? `smart` : r,
      a = e.appearance,
      o = a === void 0 ? `standard` : a,
      s = e.isCompact,
      c = s === void 0 ? !1 : s,
      l = e.isRequired,
      u = l === void 0 ? !1 : l,
      f = e.isReadOnly,
      p = f === void 0 ? !1 : f,
      m = e.isDisabled,
      h = m === void 0 ? !1 : m,
      g = e.isInvalid,
      _ = g === void 0 ? !1 : g,
      v = e.isMonospaced,
      y = v === void 0 ? !1 : v,
      b = e.minimumRows,
      x = b === void 0 ? 2 : b,
      S = e.testId,
      w = e.maxHeight,
      E = w === void 0 ? `50vh` : w,
      D = e.onBlur,
      O = e.onFocus,
      k = e.onChange,
      A = e.value,
      j = e.style,
      M = d(e, Rg),
      N = (0, T.useMemo)(
        function () {
          return o === `none` ? 2 : 1;
        },
        [o],
      );
    (0, T.useEffect)(
      function () {
        var e = n.current;
        i === `smart` && e && Zg(e);
      },
      [i, A],
    );
    var P = Do(
        Bg(
          {
            fn: function (e) {
              D && D(e);
            },
            action: `blurred`,
          },
          Vg,
        ),
      ),
      ee = Do(
        Bg(
          {
            fn: function (e) {
              O && O(e);
            },
            action: `focused`,
          },
          Vg,
        ),
      ),
      te = function (e) {
        ((n.current = e),
          t && C(t) === `object` && (t.current = e),
          t && typeof t == `function` && t(e));
      },
      ne = (0, T.useCallback)(
        function (e) {
          var t = n.current;
          (i === `smart` && t && Zg(t), k && k(e));
        },
        [k, i],
      ),
      re = { "data-invalid": _ || void 0, "data-compact": c || void 0, "data-testid": S || void 0 };
    return T.createElement(
      `textarea`,
      z(
        {},
        re,
        {
          value: A,
          disabled: h,
          readOnly: p,
          required: u,
          ref: te,
          onChange: ne,
          onBlur: P,
          onFocus: ee,
          rows: x,
        },
        M,
        {
          className: Y([
            `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _16jlkb7n _1o9zkb7n _i0dl1osq _2rkofajl _11c8fhey _12ji1r31 _1qu2glyw _12y31o36 _1reo1wug _18m91wug _v5641gs0 _189ee4h9 _1e0c1ule _vchhusvi _1bsb1osq _1ul9idpf _p12f1osq _kqswh2mm _syazi7uo _slp31hna _153g1bqt _usy41j9a _1a2sizbr _vbqb1gmx _j5dh13gf _cfjqkb7n _k3o7n7od _1goxglyw _13xeglyw _1fra1bqt _ibjdl4ek _6zpvizbr _19k0by5v _1idr1rpy _1lep1gmx _nmhq1fiz _1n388sxn _1luh1v1w _ndzbr01l _1vj0vyy1`,
            J(`platform-dst-shape-theme-default`) && `_2rko1qi0`,
            Jg[o],
            Yg[y ? `monospace` : `default`],
            Xg[i],
            `_uzq71d1b _16lw1cn1`,
          ]),
          style: Bg(
            Bg({}, j),
            {},
            {
              maxHeight: E,
              "--_19uzta9": Xo(`background-color ${Kg} ease-in-out,
               border-color ${Kg} ease-in-out`),
              "--_dqsusn": Xo(`${Ug * x + Wg * 2 + N * 2}px`),
              "--_n9nqvh": Xo(`${Hg * x + Gg * 2 + N * 2}px`),
            },
          ),
        },
      ),
    );
  }),
  $g = (0, T.memo)(
    (0, T.forwardRef)(function (e, t) {
      return T.createElement(Qg, z({ ref: t }, e));
    }),
  );
(($g.displayName = `TextArea`), X());
var e_ = [
  `appearance`,
  `className`,
  `elemAfterInput`,
  `elemBeforeInput`,
  `isCompact`,
  `isDisabled`,
  `isInvalid`,
  `isMonospaced`,
  `isReadOnly`,
  `isRequired`,
  `name`,
  `onBlur`,
  `onChange`,
  `onFocus`,
  `onMouseDown`,
  `placeholder`,
  `testId`,
  `width`,
];
function t_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function n_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? t_(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : t_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var r_ = { invalid: `_msj6gir2`, disabled: `_6up518qt` },
  i_ = { componentName: `textField`, packageName: `@atlaskit/textfield`, packageVersion: `8.3.2` },
  a_ = {
    standard: `_1h6dby5v _bfhkby5v _syaz1gmx _80om13gf`,
    subtle: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
    none: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
  },
  o_ = {
    standard: `_1p9x1v1w _qao9r01l _q433vyy1`,
    subtle: `_1p9x1v1w _qao9r01l _q433vyy1`,
    none: `_1p9x1j28 _qao91j28 _q4333sij`,
  },
  s_ = {
    standard: `_4cvxrsbi _irr3l4ek`,
    subtle: `_4cvxrsbi _irr3l4ek`,
    none: `_4cvx1j28 _irr31j28`,
  },
  c_ = {
    standard: `_1h6drsbi _1dqonqa1 _syazi7uo _80om1kdv _bfhk1j9a _msj6gir2`,
    subtle: `_1h6d1j28 _1dqonqa1 _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
    none: `_1h6d1j28 _1dqoglyw _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
  },
  l_ = { xsmall: 80, small: 160, medium: 240, large: 320, xlarge: 480 },
  u_ = function (e) {
    return e ? (e in l_ ? `${l_[e]}px` : `${+e}px`) : `100%`;
  },
  d_ = {
    standard: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    subtle: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    none: `_1dqoglyw`,
  },
  f_ = (0, T.forwardRef)(function (e, t) {
    var n = e.appearance,
      r = n === void 0 ? `standard` : n,
      i = e.className,
      a = e.elemAfterInput,
      o = e.elemBeforeInput,
      s = e.isCompact,
      c = s === void 0 ? !1 : s,
      l = e.isDisabled,
      u = l === void 0 ? !1 : l,
      f = e.isInvalid,
      p = f === void 0 ? !1 : f,
      m = e.isMonospaced,
      h = m === void 0 ? !1 : m,
      g = e.isReadOnly,
      _ = g === void 0 ? !1 : g,
      v = e.isRequired,
      y = v === void 0 ? !1 : v,
      b = e.name,
      x = e.onBlur,
      S = e.onChange,
      w = e.onFocus,
      E = e.onMouseDown,
      D = e.placeholder,
      O = e.testId,
      k = e.width,
      A = d(e, e_),
      j = (0, T.useRef)(null),
      M = Do(
        n_(
          {
            fn: function (e) {
              w && w(e);
            },
            action: `focused`,
          },
          i_,
        ),
      ),
      N = Do(
        n_(
          {
            fn: function (e) {
              x && x(e);
            },
            action: `blurred`,
          },
          i_,
        ),
      ),
      P = (0, T.useCallback)(
        function (e) {
          (e.target.tagName !== `INPUT` && e.preventDefault(),
            j && j.current && !u && document.activeElement !== j.current && j.current.focus(),
            E && E(e));
        },
        [E, u],
      ),
      ee = (0, T.useCallback)(
        function (e) {
          ((j.current = e),
            t && (C(t) === `object` && (t.current = e), typeof t == `function` && t(e)));
        },
        [t],
      );
    return T.createElement(
      `div`,
      {
        role: `presentation`,
        "data-disabled": u || void 0,
        "data-invalid": p || void 0,
        "data-ds--text-field--container": !0,
        "data-testid": O && `${O}-container`,
        onMouseDown: P,
        style: { maxWidth: `${u_(k)}` },
        className: Y([
          `_16jlkb7n _1o9zkb7n _i0dl1osq _11c8fhey _1reo15vq _18m915vq _v564r5cv _189ee4h9 _1e0c1txw _vchhusvi _4cvr1h6o _1bah1yb4 _lcxv1wug _s7n4jp4b _slp31hna _1tnqfajl`,
          J(`platform-dst-shape-theme-default`) && `_1tnq1qi0`,
          c_[r],
          d_[r],
          !u && o_[r],
          !u && s_[r],
          u && r_.disabled,
          u && a_[r],
          p && r_.invalid,
          p && `_1h6d1bqt _4cvx1bqt _16qsizbr _1dbzizbr _uk1sr01l`,
          i,
        ]),
      },
      o,
      T.createElement(
        `input`,
        z({}, A, {
          "aria-invalid": p || void 0,
          "data-compact": c || void 0,
          "data-ds--text-field--input": !0,
          "data-monospaced": h || void 0,
          "data-testid": O,
          disabled: u,
          name: b,
          onBlur: N,
          onChange: S,
          onFocus: M,
          placeholder: D,
          readOnly: _,
          ref: ee,
          required: y,
          className: Y([
            `_19itidpf _11c81d4k _12ji1r31 _1qu2glyw _12y31o36 _vchhusvi _1bsb1osq _1ul9idpf _bfhk1j28 _syaz1kw7 _80om1kw7 _14ji12x7 _olc612x7 _1kod12x7 _7ba012x7 _1goxglyw _13xeglyw _1n7e1l2s _1idr1rpy _1tn2fhey _l9oiu2gc _549yu2gc _1h5w12x7 _124212x7`,
            h && `_ect4zzfg _14mdzzfg`,
            c && `_11zpv77o _1l02v77o _daj712x7 _141f12x7 _1srd1b66 _oi9h1b66 _1e3012x7 _1txv12x7`,
            u && `_syaz1gmx _1idr1gmx`,
            u && `_1fnx18qt`,
          ]),
        }),
      ),
      a,
    );
  });
function p_(e) {
  return p(e) || v(e) || g(e) || y();
}
var m_ = (0, T.createContext)(null),
  h_ = (0, T.createContext)(null);
X();
function g_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function __(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? g_(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : g_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var v_ = {
    componentName: `tabs`,
    packageName: `@atlaskit/tabs`,
    packageVersion: `0.0.0-development`,
  },
  y_ = function (e) {
    var t = e.tabPanel,
      n = e.index,
      r = e.isSelected,
      i = e.tabsId;
    return (
      t &&
      T.createElement(
        h_.Provider,
        {
          value: {
            role: `tabpanel`,
            id: `${i}-${n}-tab`,
            hidden: r ? void 0 : !0,
            "aria-labelledby": `${i}-${n}`,
            tabIndex: r ? 0 : -1,
          },
          key: n,
        },
        t,
      )
    );
  },
  b_ = function (e) {
    var t = e.shouldUnmountTabPanelOnChange,
      n = t === void 0 ? !1 : t,
      r = e.selected,
      i = e.defaultSelected,
      a = e.onChange,
      o = e.id,
      s = e.analyticsContext,
      c = e.children,
      l = e.testId,
      u = f((0, T.useState)(r || i || 0), 2),
      d = u[0],
      p = u[1],
      m = r === void 0 ? d : r,
      h = p_(
        T.Children.toArray(c).filter(function (e) {
          return !!e;
        }),
      ),
      g = h[0],
      _ = h.slice(1),
      v = (0, T.useRef)(new Set([m]));
    v.current.has(m) || v.current.add(m);
    var y = Do(
        __(
          {
            fn: (0, T.useCallback)(
              function (e, t) {
                (a && a(e, t), p(e));
              },
              [a],
            ),
            action: `clicked`,
            analyticsData: s,
          },
          v_,
        ),
      ),
      b = n
        ? y_({ tabPanel: _[m], index: m, isSelected: !0, tabsId: o })
        : Array.from(v.current).map(function (e) {
            return y_({ tabPanel: _[e], index: e, isSelected: e === m, tabsId: o });
          });
    return T.createElement(
      `div`,
      {
        "data-testid": l,
        className: Y([
          `_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n`,
          `_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw`,
        ]),
      },
      T.createElement(m_.Provider, { value: { selected: m, onChange: y, tabsId: o } }, g),
      T.createElement(T.Fragment, null, b),
    );
  };
function x_() {
  var e = (0, T.useContext)(h_);
  if (e == null) throw Error(`@atlaskit/tabs:  A TabPanel must have a Tabs parent.`);
  return e;
}
var S_ = function (e) {
    var t = e.children,
      n = e.testId,
      r = x_(),
      i = r.role,
      a = r.id,
      o = r.hidden,
      s = r[`aria-labelledby`],
      c = r.tabIndex;
    return T.createElement(
      Yl,
      {
        as: `div`,
        isInset: !0,
        testId: n,
        role: i,
        id: a,
        hidden: o,
        "aria-labelledby": s,
        tabIndex: c,
      },
      T.createElement(T.Fragment, null, t),
    );
  },
  C_ = (0, T.createContext)(null);
function w_() {
  var e = (0, T.useContext)(C_);
  if (e == null || e === void 0) throw Error(`@atlaskit/tabs: A Tab must have a TabList parent.`);
  return e;
}
var T_ = (0, T.forwardRef)(function (e, t) {
  var n = e.children,
    r = e.testId,
    i = w_(),
    a = i.onClick,
    o = i.id,
    s = i[`aria-controls`],
    c = i[`aria-posinset`],
    l = i[`aria-selected`],
    u = i[`aria-setsize`],
    d = i.onKeyDown,
    f = i.role,
    p = i.tabIndex;
  return T.createElement(
    Yl,
    {
      as: `div`,
      isInset: !0,
      testId: r,
      onClick: a,
      id: o,
      "aria-controls": s,
      "aria-posinset": c,
      "aria-selected": l,
      "aria-setsize": u,
      onKeyDown: d,
      role: f,
      tabIndex: p,
      ref: t,
    },
    T.createElement(Gl, { weight: `medium`, color: `inherit`, maxLines: 1 }, n),
  );
});
function E_() {
  var e = (0, T.useContext)(m_);
  if (e == null) throw Error(`@atlaskit/tabs: A TabList must have a Tabs parent.`);
  return e;
}
X();
var D_ = function (e) {
    var t = e.children,
      n = E_(),
      r = n.tabsId,
      i = n.selected,
      a = n.onChange,
      o = (0, T.createRef)(),
      s = T.Children.toArray(t).filter(Boolean),
      c = s.length,
      l = (0, T.useCallback)(
        function (e) {
          var t = o.current?.querySelector(`[id='${r}-${e}']`);
          (t && t.focus(), a(e));
        },
        [r, o, a],
      ),
      u = (0, T.useCallback)(
        function (e) {
          if ([`ArrowRight`, `ArrowLeft`, `Home`, `End`].includes(e.key)) {
            e.preventDefault();
            var t = c - 1;
            if ([`Home`, `End`].includes(e.key)) {
              l(e.key === `Home` ? 0 : t);
              return;
            }
            var n =
              parseInt(e.currentTarget.getAttribute(`aria-posinset`) || `0`) -
              1 +
              (e.key === `ArrowRight` ? 1 : -1);
            ((n < 0 || n >= c) && (n = n < 0 ? t : 0), l(n));
          }
        },
        [c, l],
      ),
      d = (0, T.useCallback)(
        function (e) {
          var t = e.tab,
            n = e.isSelected,
            i = e.index;
          return T.createElement(
            C_.Provider,
            {
              value: {
                onClick: function () {
                  return a(i);
                },
                onKeyDown: u,
                "aria-setsize": c,
                role: `tab`,
                id: `${r}-${i}`,
                "aria-posinset": i + 1,
                "aria-selected": n,
                "aria-controls": `${r}-${i}-tab`,
                tabIndex: n ? 0 : -1,
              },
              key: i,
            },
            t,
          );
        },
        [c, u, a, r],
      );
    return T.createElement(
      `div`,
      {
        role: `tablist`,
        ref: o,
        className: Y([
          `_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t`,
          `_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quzazsu _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1uh4 _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oazazsu _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1uh4 _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i20i7uo _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmzz0c1 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiem6x5g _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1rus1l7x _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc`,
        ]),
      },
      s.map(function (e, t) {
        return d({ tab: e, index: t, isSelected: t === i });
      }),
    );
  },
  O_ = (0, T.createContext)(void 0),
  k_ = function () {
    var e = (0, T.useContext)(O_);
    if (e)
      return e.appearance === `navigation`
        ? {
            spacing: `default`,
            appearance: `subtle`,
            isDisabled: !1,
            isActiveOverSelected: !1,
            isNavigationSplitButton: !0,
            isHighlighted: e.isHighlighted,
          }
        : {
            spacing: e.spacing,
            appearance: e.appearance,
            isDisabled: e.isDisabled,
            isActiveOverSelected: !0,
            isNavigationSplitButton: !1,
            isHighlighted: !1,
          };
  };
function A_(e) {
  (e.preventDefault(), e.stopPropagation());
}
var j_ = 9;
function M_(e) {
  e.keyCode !== j_ && A_(e);
}
function N_(e, t) {
  return e
    ? {
        onMouseDownCapture: A_,
        onMouseUpCapture: A_,
        onKeyDownCapture: M_,
        onKeyUpCapture: M_,
        onTouchStartCapture: A_,
        onTouchEndCapture: A_,
        onPointerDownCapture: A_,
        onPointerUpCapture: A_,
        onClickCapture: A_,
        onClick: A_,
      }
    : t;
}
function P_(e) {
  switch (e) {
    case `compact`:
      return `small`;
    default:
      return `medium`;
  }
}
function F_(e) {
  var t = e.appearance,
    n = e.isDisabled,
    r = e.isSelected;
  return n || r
    ? `inherit`
    : t === `primary` || t === `danger` || t === `discovery`
      ? `invert`
      : `inherit`;
}
function I_(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isDisabled,
    i = e.isSelected,
    a = e.testId;
  return T.createElement(Ls, {
    size: P_(n),
    appearance: F_({ appearance: t, isDisabled: r, isSelected: i }),
    testId: a ? `${a}--loading-spinner` : void 0,
  });
}
X();
var L_ =
    `appearance.autoFocus.isDisabled.isLoading.isSelected.isIconButton.isCircle.hasIconBefore.hasIconAfter.shouldFitContainer.spacing.ariaLabel.ariaLabelledBy.children.interactionName.onClick.onMouseDown.onMouseDownCapture.onMouseUp.onMouseUpCapture.onKeyDown.onKeyDownCapture.onKeyUp.onKeyUpCapture.onTouchStart.onTouchStartCapture.onTouchEnd.onTouchEndCapture.onPointerDown.onPointerDownCapture.onPointerUp.onPointerUpCapture.onClickCapture.testId.analyticsContext.componentName.role.onMouseOver.onMouseOut.onFocus.onBlur.onMouseMove.type`.split(
      `.`,
    ),
  R_ = [`className`, `css`, `as`, `style`],
  z_ = `, Loading`,
  B_ = {
    base: `_2rkofajl _11c8fhey _v5649dqc _189eidpf _1rjc12x7 _1e0c116y _vchhusvi _1bsb1wug _p12f1osq _kqswh2mm _4cvr1q9y _1bah1h6o _gy1p1b66 _1o9zidpf _4t3iviql _k48p1wq8 _y4tiutpp _bozgutpp _y3gn1h6o _s7n4nkob _14mj1kw7 _9v7aze3t _1tv3nqa1 _39yqe4h9 _11fnglyw _18postnw`,
    baseT26Shape: `_2rko1qi0`,
    linkDecorationUnset: `_4bfu1r31 _1hmsglyw _ajmmnqa1 _1a3b1r31 _4fprglyw _5goinqa1 _9oik1r31 _1bnxglyw _jf4cnqa1 _1nrm1r31 _c2waglyw _1iohnqa1`,
    disabled: `_80om13gf _syaz1gmx _30l31gmx _9h8h1gmx`,
    sharedDisabled: `_bfhkby5v _irr3by5v _1di6by5v`,
    spacingCompact: `_1rjcv77o _gy1p1b66 _4t3i1k8s _y4tiutpp _bozgutpp _s7n4nkob`,
    spacingCompactT26Shape: `_2rko12b0`,
    circle: `_2rko1rr0`,
    fullWidth: `_1bsb1osq`,
    loading: `_80om15jw`,
    iconButton: `_4t3iviql _1bsbviql _y4tize3t _bozgze3t`,
    iconButtonCompact: `_4t3i1k8s _1bsb1k8s`,
    buttonIconBefore: `_bozgutpp _gy1p12x7`,
    buttonIconAfter: `_y4tiutpp _gy1p12x7`,
    splitButton: `_g0pbb4wl`,
    loadingOverlay: `_1reo15vq _18m915vq _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _u7coze3t _152tze3t _rjxpze3t _1e02ze3t`,
    navigationSplitButton: `_1bsb1tcg _bfhksm61 _y4ti12x7 _bozg12x7`,
  },
  V_ = {
    root: `_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  H_ = {
    root: `_bfhk1856 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3hf2y _9h8h15cr _1di6g6ey`,
  },
  U_ = {
    root: `_bfhk1kmu _syaz1yd3 _10531yd3 _f8pj1yd3 _30l31yd3 _9h8h1yd3`,
    interactive: `_30l31yd3 _irr31spp _9h8h1yd3 _1di64m4m`,
  },
  W_ = {
    root: `_bfhkybec _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3s9hg _9h8h15cr _1di613a9`,
  },
  G_ = {
    root: `_bfhku5tj _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3fqeg _9h8h15cr _1di61f1m`,
  },
  K_ = {
    root: `_bfhksm61 _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  q_ = {
    root: `_bfhk15s3 _syaz6x5g _8l3mq98m _aetrb3bt _10536x5g _f8pj6x5g _30l36x5g _9h8h6x5g`,
    insideSplitButton: `_1pbycs5v`,
    interactive: `_irr3ufnl _30l36x5g _1di6nozp _9h8h6x5g`,
    warning: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    danger: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    discovery: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
  },
  J_ = T.forwardRef(function (e, t) {
    var n = e.appearance,
      r = e.autoFocus,
      i = r === void 0 ? !1 : r,
      a = e.isDisabled,
      o = a === void 0 ? !1 : a,
      s = e.isLoading,
      c = s === void 0 ? !1 : s,
      l = e.isSelected,
      u = l === void 0 ? !1 : l,
      f = e.isIconButton,
      p = f === void 0 ? !1 : f,
      m = e.isCircle,
      h = m === void 0 ? !1 : m,
      g = e.hasIconBefore,
      _ = g === void 0 ? !1 : g,
      v = e.hasIconAfter,
      y = v === void 0 ? !1 : v,
      b = e.shouldFitContainer,
      x = b === void 0 ? !1 : b,
      S = e.spacing,
      C = S === void 0 ? `default` : S,
      w = e.ariaLabel,
      E = e.ariaLabelledBy,
      D = e.children,
      O = e.interactionName,
      k = e.onClick,
      A = e.onMouseDown,
      j = e.onMouseDownCapture,
      M = e.onMouseUp,
      N = e.onMouseUpCapture,
      P = e.onKeyDown,
      ee = e.onKeyDownCapture,
      te = e.onKeyUp,
      ne = e.onKeyUpCapture,
      re = e.onTouchStart,
      ie = e.onTouchStartCapture,
      ae = e.onTouchEnd,
      oe = e.onTouchEndCapture,
      se = e.onPointerDown,
      F = e.onPointerDownCapture,
      ce = e.onPointerUp,
      le = e.onPointerUpCapture,
      ue = e.onClickCapture,
      de = e.testId,
      fe = e.analyticsContext,
      pe = e.componentName,
      me = e.role,
      he = e.onMouseOver,
      ge = e.onMouseOut,
      _e = e.onFocus,
      ve = e.onBlur,
      ye = e.onMouseMove,
      be = e.type,
      xe = d(e, L_),
      Se = (0, T.useRef)(null),
      Ce = k_(),
      we = Bd(),
      Te = !!Ce,
      Ee = Ce?.isNavigationSplitButton || !1,
      I = Ce?.appearance === `default` ? `subtle` : n || Ce?.appearance || `default`,
      De = Ce?.spacing || C,
      Oe = Ce?.isDisabled || o,
      L = !Oe && !c,
      R = Oe || c,
      ke = u && !Oe;
    (jo(Se, i), xe.className, xe.css, xe.as, xe.style);
    var Ae = d(xe, R_);
    return T.createElement(
      $l,
      z(
        {},
        Ae,
        {
          componentName: pe || `button`,
          analyticsContext: fe,
          role: me,
          ref: Kf([Se, t]),
          xcss: hl(
            B_.base,
            J(`platform-dst-shape-theme-default`) && B_.baseT26Shape,
            I === `default` && V_.root,
            I === `default` && L && V_.interactive,
            I === `primary` && H_.root,
            I === `primary` && L && H_.interactive,
            I === `warning` && U_.root,
            I === `warning` && L && U_.interactive,
            I === `danger` && W_.root,
            I === `danger` && L && W_.interactive,
            I === `discovery` && G_.root,
            I === `discovery` && L && G_.interactive,
            I === `subtle` && K_.root,
            I === `subtle` && L && K_.interactive,
            B_.linkDecorationUnset,
            ke && q_.root,
            ke && Te && q_.insideSplitButton,
            ke && L && q_.interactive,
            ke && I === `danger` && q_.danger,
            ke && I === `warning` && q_.warning,
            ke && I === `discovery` && q_.discovery,
            Oe && B_.disabled,
            Oe && I !== `default` && I !== `subtle` && B_.sharedDisabled,
            Oe && I === `default` && V_.disabled,
            h && !Te && B_.circle,
            De === `compact` && B_.spacingCompact,
            De === `compact` && J(`platform-dst-shape-theme-default`) && B_.spacingCompactT26Shape,
            x && B_.fullWidth,
            _ && B_.buttonIconBefore,
            y && B_.buttonIconAfter,
            p && B_.iconButton,
            p && De === `compact` && B_.iconButtonCompact,
            c && B_.loading,
            Te && B_.splitButton,
            Ee && B_.navigationSplitButton,
          ),
          isDisabled: J(`platform-dst_fix_not_focusable_loading_button`) ? Oe : R,
        },
        J(`platform-dst_fix_not_focusable_loading_button`) && { "aria-live": `polite` },
        c && J(`platform-dst_fix_not_focusable_loading_button`) && { "aria-disabled": !0 },
        {
          "aria-label": c && w && !E ? `${w} ${z_}` : w,
          "aria-labelledby": c && E ? `${E} ${we}` : E,
          onClick: k,
        },
        N_(R, {
          onMouseDownCapture: j,
          onMouseUpCapture: N,
          onKeyDownCapture: ee,
          onKeyUpCapture: ne,
          onTouchStartCapture: ie,
          onTouchEndCapture: oe,
          onPointerDownCapture: F,
          onPointerUpCapture: le,
          onClickCapture: ue,
        }),
        {
          testId: de,
          onMouseOver: he,
          onFocus: _e,
          onMouseMove: ye,
          onBlur: ve,
          type: be,
          interactionName: O,
          onMouseDown: A,
          onMouseUp: M,
          onKeyDown: P,
          onMouseOut: ge,
          onKeyUp: te,
          onTouchStart: re,
          onTouchEnd: ae,
          onPointerDown: se,
          onPointerUp: ce,
        },
      ),
      T.createElement(
        O_.Provider,
        { value: void 0 },
        D,
        c &&
          T.createElement(
            `span`,
            { className: Y([B_.loadingOverlay]) },
            I_({ spacing: De, appearance: I, isDisabled: Oe, isSelected: ke, testId: de }),
          ),
        c && (E || !w) && T.createElement($o, { id: we }, z_),
      ),
    );
  });
X();
var Y_ = {
    text: `_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c`,
    icon: `_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw`,
    common: `_v564g17y`,
    fade: `_tzy4idpf`,
  },
  X_ = function (e) {
    var t = e.children,
      n = e.type,
      r = n === void 0 ? `text` : n,
      i = e.isLoading;
    return T.createElement(
      `span`,
      { className: Y([Y_.common, r === `text` && Y_.text, r === `icon` && Y_.icon, i && Y_.fade]) },
      t,
    );
  };
function Z_(e) {
  return !e.displayName && !e.render && typeof e == `function`;
}
var Q_ = function (e) {
    var t = e.icon,
      n = Z_(t),
      r = {
        label: ``,
        color: `currentColor`,
        size: J(`platform_dst_button_chevron_sizing`)
          ? function (e) {
              return e.startsWith(`Chevron`) ? `small` : `medium`;
            }
          : void 0,
      };
    return T.createElement(T.Fragment, null, n ? t(r) : T.createElement(t, r));
  },
  $_ =
    `aria-label.aria-labelledby.analyticsContext.appearance.autoFocus.icon.interactionName.isDisabled.isLoading.isSelected.isTooltipDisabled.label.onClick.onClickCapture.onKeyDownCapture.onKeyUpCapture.onMouseDownCapture.onMouseUpCapture.onPointerDownCapture.onPointerUpCapture.onTouchEndCapture.onTouchStartCapture.shape.spacing.testId.tooltip.type`.split(
      `.`,
    ),
  ev = [`className`, `css`, `as`, `style`],
  tv = T.memo(
    T.forwardRef(function (e, t) {
      e[`aria-label`];
      var n = e[`aria-labelledby`],
        r = e.analyticsContext,
        i = e.appearance,
        a = e.autoFocus,
        o = e.icon,
        s = e.interactionName,
        c = e.isDisabled,
        l = e.isLoading,
        u = l === void 0 ? !1 : l,
        f = e.isSelected,
        p = e.isTooltipDisabled,
        m = p === void 0 ? !0 : p,
        h = e.label,
        g = e.onClick,
        _ = e.onClickCapture,
        v = e.onKeyDownCapture,
        y = e.onKeyUpCapture,
        b = e.onMouseDownCapture,
        x = e.onMouseUpCapture,
        S = e.onPointerDownCapture,
        C = e.onPointerUpCapture,
        w = e.onTouchEndCapture,
        E = e.onTouchStartCapture,
        D = e.shape,
        O = e.spacing,
        k = e.testId,
        A = e.tooltip,
        j = e.type,
        M = j === void 0 ? `button` : j,
        N = d(e, $_);
      (N.className, N.css, N.as, N.style);
      var P = d(N, ev);
      return m
        ? T.createElement(
            J_,
            z({}, P, {
              ref: t,
              appearance: i,
              autoFocus: a,
              isDisabled: c,
              isLoading: u,
              isSelected: f,
              isIconButton: !0,
              isCircle: D === `circle`,
              hasIconBefore: !!o,
              spacing: O,
              ariaLabelledBy: n,
              onClick: g,
              onClickCapture: _,
              onKeyDownCapture: v,
              onKeyUpCapture: y,
              onMouseDownCapture: b,
              onMouseUpCapture: x,
              onPointerDownCapture: S,
              onPointerUpCapture: C,
              onTouchStartCapture: E,
              onTouchEndCapture: w,
              testId: k,
              componentName: `IconButton`,
              analyticsContext: r,
              type: M,
              interactionName: s,
            }),
            T.createElement(
              X_,
              { type: `icon`, isLoading: u },
              T.createElement(Q_, { icon: o }),
              T.createElement($o, null, h),
            ),
          )
        : T.createElement(
            cg,
            {
              content: A?.content ?? h,
              testId: A?.testId,
              position: A?.position,
              delay: A?.delay,
              onShow: A?.onShow,
              onHide: A?.onHide,
              mousePosition: A?.mousePosition,
              analyticsContext: A?.analyticsContext,
              strategy: A?.strategy,
              tag: A?.tag,
              truncate: A?.truncate,
              component: A?.component,
              hideTooltipOnClick: A?.hideTooltipOnClick,
              hideTooltipOnMouseDown: A?.hideTooltipOnMouseDown,
              ignoreTooltipPointerEvents: A?.ignoreTooltipPointerEvents,
              shortcut: A?.shortcut,
            },
            function (e) {
              return T.createElement(
                J_,
                z({}, P, {
                  appearance: i,
                  autoFocus: a,
                  isDisabled: c,
                  isLoading: u,
                  isSelected: f,
                  isIconButton: !0,
                  isCircle: D === `circle`,
                  hasIconBefore: !1,
                  spacing: O,
                  ariaLabelledBy: n,
                  onClick: function (t, n) {
                    var r;
                    (g?.(t, n), (r = e.onClick) == null || r.call(e, t));
                  },
                  onMouseOver: function (t) {
                    var n, r;
                    ((n = e.onMouseOver) == null || n.call(e, t),
                      (r = P.onMouseOver) == null || r.call(P, t));
                  },
                  onMouseOut: function (t) {
                    var n, r;
                    ((n = e.onMouseOut) == null || n.call(e, t),
                      (r = P.onMouseOut) == null || r.call(P, t));
                  },
                  onMouseMove: function (t) {
                    var n, r;
                    ((n = e.onMouseMove) == null || n.call(e, t),
                      (r = P.onMouseMove) == null || r.call(P, t));
                  },
                  onMouseDown: function (t) {
                    var n, r;
                    ((n = e.onMouseDown) == null || n.call(e, t),
                      (r = P.onMouseDown) == null || r.call(P, t));
                  },
                  onFocus: function (t) {
                    var n, r;
                    ((n = e.onFocus) == null || n.call(e, t),
                      (r = P.onFocus) == null || r.call(P, t));
                  },
                  onBlur: function (t) {
                    var n, r;
                    ((n = e.onBlur) == null || n.call(e, t),
                      (r = P.onBlur) == null || r.call(P, t));
                  },
                  ref: Kf([t, e?.ref].filter(Boolean)),
                  onMouseDownCapture: b,
                  onMouseUpCapture: x,
                  onKeyDownCapture: v,
                  onKeyUpCapture: y,
                  onTouchStartCapture: E,
                  onTouchEndCapture: w,
                  onPointerDownCapture: S,
                  onPointerUpCapture: C,
                  onClickCapture: _,
                  type: M,
                  testId: k,
                  analyticsContext: r,
                  interactionName: s,
                  componentName: `IconButton`,
                }),
                T.createElement(
                  X_,
                  { type: `icon`, isLoading: u },
                  T.createElement(Q_, { icon: o }),
                  T.createElement($o, null, h),
                ),
              );
            },
          );
    }),
  );
tv.displayName = `IconButton`;
function nv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function rv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nv(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var iv = {
    "100%": `100%`,
    "size.100": `1rem`,
    "size.200": `1.5rem`,
    "size.300": `2rem`,
    "size.400": `2.5rem`,
    "size.500": `3rem`,
    "size.600": `6rem`,
    "size.1000": `12rem`,
  },
  av = {
    "space.0": `var(--ds-space-0, 0px)`,
    "space.025": `var(--ds-space-025, 2px)`,
    "space.050": `var(--ds-space-050, 4px)`,
    "space.075": `var(--ds-space-075, 6px)`,
    "space.100": `var(--ds-space-100, 8px)`,
    "space.150": `var(--ds-space-150, 12px)`,
    "space.200": `var(--ds-space-200, 16px)`,
    "space.250": `var(--ds-space-250, 20px)`,
    "space.300": `var(--ds-space-300, 24px)`,
    "space.400": `var(--ds-space-400, 32px)`,
    "space.500": `var(--ds-space-500, 40px)`,
    "space.600": `var(--ds-space-600, 48px)`,
    "space.800": `var(--ds-space-800, 64px)`,
    "space.1000": `var(--ds-space-1000, 80px)`,
  },
  Q = rv(rv({}, av), {
    "space.negative.025": `var(--ds-space-negative-025, -2px)`,
    "space.negative.050": `var(--ds-space-negative-050, -4px)`,
    "space.negative.075": `var(--ds-space-negative-075, -6px)`,
    "space.negative.100": `var(--ds-space-negative-100, -8px)`,
    "space.negative.150": `var(--ds-space-negative-150, -12px)`,
    "space.negative.200": `var(--ds-space-negative-200, -16px)`,
    "space.negative.250": `var(--ds-space-negative-250, -20px)`,
    "space.negative.300": `var(--ds-space-negative-300, -24px)`,
    "space.negative.400": `var(--ds-space-negative-400, -32px)`,
  }),
  ov = {
    "color.background.neutral.bold": `color.text.inverse`,
    "color.background.neutral.bold.hovered": `color.text.inverse`,
    "color.background.neutral.bold.pressed": `color.text.inverse`,
    "color.background.selected.bold": `color.text.inverse`,
    "color.background.selected.bold.hovered": `color.text.inverse`,
    "color.background.selected.bold.pressed": `color.text.inverse`,
    "color.background.brand.bold": `color.text.inverse`,
    "color.background.brand.bold.hovered": `color.text.inverse`,
    "color.background.brand.bold.pressed": `color.text.inverse`,
    "color.background.brand.boldest": `color.text.inverse`,
    "color.background.brand.boldest.hovered": `color.text.inverse`,
    "color.background.brand.boldest.pressed": `color.text.inverse`,
    "color.background.danger.bold": `color.text.inverse`,
    "color.background.danger.bold.hovered": `color.text.inverse`,
    "color.background.danger.bold.pressed": `color.text.inverse`,
    "color.background.warning.bold": `color.text.warning.inverse`,
    "color.background.warning.bold.hovered": `color.text.warning.inverse`,
    "color.background.warning.bold.pressed": `color.text.warning.inverse`,
    "color.background.success.bold": `color.text.inverse`,
    "color.background.success.bold.hovered": `color.text.inverse`,
    "color.background.success.bold.pressed": `color.text.inverse`,
    "color.background.discovery.bold": `color.text.inverse`,
    "color.background.discovery.bold.hovered": `color.text.inverse`,
    "color.background.discovery.bold.pressed": `color.text.inverse`,
    "color.background.information.bold": `color.text.inverse`,
    "color.background.information.bold.hovered": `color.text.inverse`,
    "color.background.information.bold.pressed": `color.text.inverse`,
  },
  sv = {
    "opacity.disabled": `var(--ds-opacity-disabled, 0.4)`,
    "opacity.loading": `var(--ds-opacity-loading, 0.2)`,
  },
  cv = {
    "elevation.shadow.overflow": `var(--ds-shadow-overflow, 0px 0px 8px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.overflow.perimeter": `var(--ds-shadow-overflow-perimeter, #1E1F211f)`,
    "elevation.shadow.overflow.spread": `var(--ds-shadow-overflow-spread, #1E1F2129)`,
    "elevation.shadow.overlay": `var(--ds-shadow-overlay, 0px 8px 12px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.raised": `var(--ds-shadow-raised, 0px 1px 1px #1E1F21, 0px 0px 1px #1E1F21)`,
  },
  lv = {
    "elevation.surface": `var(--ds-surface, #FFFFFF)`,
    "elevation.surface.hovered": `var(--ds-surface-hovered, #F0F1F2)`,
    "elevation.surface.pressed": `var(--ds-surface-pressed, #DDDEE1)`,
    "elevation.surface.overlay": `var(--ds-surface-overlay, #FFFFFF)`,
    "elevation.surface.overlay.hovered": `var(--ds-surface-overlay-hovered, #F0F1F2)`,
    "elevation.surface.overlay.pressed": `var(--ds-surface-overlay-pressed, #DDDEE1)`,
    "elevation.surface.raised": `var(--ds-surface-raised, #FFFFFF)`,
    "elevation.surface.raised.hovered": `var(--ds-surface-raised-hovered, #F0F1F2)`,
    "elevation.surface.raised.pressed": `var(--ds-surface-raised-pressed, #DDDEE1)`,
    "elevation.surface.sunken": `var(--ds-surface-sunken, #F8F8F8)`,
  },
  uv = {
    "color.border": `var(--ds-border, #0B120E24)`,
    "color.border.accent.lime": `var(--ds-border-accent-lime, #6A9A23)`,
    "color.border.accent.red": `var(--ds-border-accent-red, #E2483D)`,
    "color.border.accent.orange": `var(--ds-border-accent-orange, #E06C00)`,
    "color.border.accent.yellow": `var(--ds-border-accent-yellow, #B38600)`,
    "color.border.accent.green": `var(--ds-border-accent-green, #22A06B)`,
    "color.border.accent.teal": `var(--ds-border-accent-teal, #2898BD)`,
    "color.border.accent.blue": `var(--ds-border-accent-blue, #357DE8)`,
    "color.border.accent.purple": `var(--ds-border-accent-purple, #AF59E1)`,
    "color.border.accent.magenta": `var(--ds-border-accent-magenta, #CD519D)`,
    "color.border.accent.gray": `var(--ds-border-accent-gray, #7D818A)`,
    "color.border.disabled": `var(--ds-border-disabled, #0515240F)`,
    "color.border.focused": `var(--ds-border-focused, #4688EC)`,
    "color.border.input": `var(--ds-border-input, #8C8F97)`,
    "color.border.inverse": `var(--ds-border-inverse, #FFFFFF)`,
    "color.border.selected": `var(--ds-border-selected, #1868DB)`,
    "color.border.brand": `var(--ds-border-brand, #1868DB)`,
    "color.border.danger": `var(--ds-border-danger, #E2483D)`,
    "color.border.warning": `var(--ds-border-warning, #E06C00)`,
    "color.border.success": `var(--ds-border-success, #6A9A23)`,
    "color.border.discovery": `var(--ds-border-discovery, #AF59E1)`,
    "color.border.information": `var(--ds-border-information, #357DE8)`,
    "color.border.bold": `var(--ds-border-bold, #7D818A)`,
  },
  dv = {
    "color.background.accent.lime.subtlest": `var(--ds-background-accent-lime-subtlest, #EFFFD6)`,
    "color.background.accent.lime.subtlest.hovered": `var(--ds-background-accent-lime-subtlest-hovered, #D3F1A7)`,
    "color.background.accent.lime.subtlest.pressed": `var(--ds-background-accent-lime-subtlest-pressed, #BDE97C)`,
    "color.background.accent.lime.subtler": `var(--ds-background-accent-lime-subtler, #D3F1A7)`,
    "color.background.accent.lime.subtler.hovered": `var(--ds-background-accent-lime-subtler-hovered, #BDE97C)`,
    "color.background.accent.lime.subtler.pressed": `var(--ds-background-accent-lime-subtler-pressed, #B3DF72)`,
    "color.background.accent.lime.subtle": `var(--ds-background-accent-lime-subtle, #94C748)`,
    "color.background.accent.lime.subtle.hovered": `var(--ds-background-accent-lime-subtle-hovered, #B3DF72)`,
    "color.background.accent.lime.subtle.pressed": `var(--ds-background-accent-lime-subtle-pressed, #BDE97C)`,
    "color.background.accent.lime.bolder": `var(--ds-background-accent-lime-bolder, #5B7F24)`,
    "color.background.accent.lime.bolder.hovered": `var(--ds-background-accent-lime-bolder-hovered, #4C6B1F)`,
    "color.background.accent.lime.bolder.pressed": `var(--ds-background-accent-lime-bolder-pressed, #3F5224)`,
    "color.background.accent.red.subtlest": `var(--ds-background-accent-red-subtlest, #FFECEB)`,
    "color.background.accent.red.subtlest.hovered": `var(--ds-background-accent-red-subtlest-hovered, #FFD5D2)`,
    "color.background.accent.red.subtlest.pressed": `var(--ds-background-accent-red-subtlest-pressed, #FFB8B2)`,
    "color.background.accent.red.subtler": `var(--ds-background-accent-red-subtler, #FFD5D2)`,
    "color.background.accent.red.subtler.hovered": `var(--ds-background-accent-red-subtler-hovered, #FFB8B2)`,
    "color.background.accent.red.subtler.pressed": `var(--ds-background-accent-red-subtler-pressed, #FD9891)`,
    "color.background.accent.red.subtle": `var(--ds-background-accent-red-subtle, #F87168)`,
    "color.background.accent.red.subtle.hovered": `var(--ds-background-accent-red-subtle-hovered, #FD9891)`,
    "color.background.accent.red.subtle.pressed": `var(--ds-background-accent-red-subtle-pressed, #FFB8B2)`,
    "color.background.accent.red.bolder": `var(--ds-background-accent-red-bolder, #C9372C)`,
    "color.background.accent.red.bolder.hovered": `var(--ds-background-accent-red-bolder-hovered, #AE2E24)`,
    "color.background.accent.red.bolder.pressed": `var(--ds-background-accent-red-bolder-pressed, #872821)`,
    "color.background.accent.orange.subtlest": `var(--ds-background-accent-orange-subtlest, #FFF5DB)`,
    "color.background.accent.orange.subtlest.hovered": `var(--ds-background-accent-orange-subtlest-hovered, #FCE4A6)`,
    "color.background.accent.orange.subtlest.pressed": `var(--ds-background-accent-orange-subtlest-pressed, #FBD779)`,
    "color.background.accent.orange.subtler": `var(--ds-background-accent-orange-subtler, #FCE4A6)`,
    "color.background.accent.orange.subtler.hovered": `var(--ds-background-accent-orange-subtler-hovered, #FBD779)`,
    "color.background.accent.orange.subtler.pressed": `var(--ds-background-accent-orange-subtler-pressed, #FBC828)`,
    "color.background.accent.orange.subtle": `var(--ds-background-accent-orange-subtle, #FCA700)`,
    "color.background.accent.orange.subtle.hovered": `var(--ds-background-accent-orange-subtle-hovered, #FBC828)`,
    "color.background.accent.orange.subtle.pressed": `var(--ds-background-accent-orange-subtle-pressed, #FBD779)`,
    "color.background.accent.orange.bolder": `var(--ds-background-accent-orange-bolder, #BD5B00)`,
    "color.background.accent.orange.bolder.hovered": `var(--ds-background-accent-orange-bolder-hovered, #9E4C00)`,
    "color.background.accent.orange.bolder.pressed": `var(--ds-background-accent-orange-bolder-pressed, #7A3B00)`,
    "color.background.accent.yellow.subtlest": `var(--ds-background-accent-yellow-subtlest, #FEF7C8)`,
    "color.background.accent.yellow.subtlest.hovered": `var(--ds-background-accent-yellow-subtlest-hovered, #F5E989)`,
    "color.background.accent.yellow.subtlest.pressed": `var(--ds-background-accent-yellow-subtlest-pressed, #EFDD4E)`,
    "color.background.accent.yellow.subtler": `var(--ds-background-accent-yellow-subtler, #F5E989)`,
    "color.background.accent.yellow.subtler.hovered": `var(--ds-background-accent-yellow-subtler-hovered, #EFDD4E)`,
    "color.background.accent.yellow.subtler.pressed": `var(--ds-background-accent-yellow-subtler-pressed, #EED12B)`,
    "color.background.accent.yellow.subtle": `var(--ds-background-accent-yellow-subtle, #EED12B)`,
    "color.background.accent.yellow.subtle.hovered": `var(--ds-background-accent-yellow-subtle-hovered, #DDB30E)`,
    "color.background.accent.yellow.subtle.pressed": `var(--ds-background-accent-yellow-subtle-pressed, #EFDD4E)`,
    "color.background.accent.yellow.bolder": `var(--ds-background-accent-yellow-bolder, #946F00)`,
    "color.background.accent.yellow.bolder.hovered": `var(--ds-background-accent-yellow-bolder-hovered, #7F5F01)`,
    "color.background.accent.yellow.bolder.pressed": `var(--ds-background-accent-yellow-bolder-pressed, #614A05)`,
    "color.background.accent.green.subtlest": `var(--ds-background-accent-green-subtlest, #DCFFF1)`,
    "color.background.accent.green.subtlest.hovered": `var(--ds-background-accent-green-subtlest-hovered, #BAF3DB)`,
    "color.background.accent.green.subtlest.pressed": `var(--ds-background-accent-green-subtlest-pressed, #97EDC9)`,
    "color.background.accent.green.subtler": `var(--ds-background-accent-green-subtler, #BAF3DB)`,
    "color.background.accent.green.subtler.hovered": `var(--ds-background-accent-green-subtler-hovered, #97EDC9)`,
    "color.background.accent.green.subtler.pressed": `var(--ds-background-accent-green-subtler-pressed, #7EE2B8)`,
    "color.background.accent.green.subtle": `var(--ds-background-accent-green-subtle, #4BCE97)`,
    "color.background.accent.green.subtle.hovered": `var(--ds-background-accent-green-subtle-hovered, #7EE2B8)`,
    "color.background.accent.green.subtle.pressed": `var(--ds-background-accent-green-subtle-pressed, #97EDC9)`,
    "color.background.accent.green.bolder": `var(--ds-background-accent-green-bolder, #1F845A)`,
    "color.background.accent.green.bolder.hovered": `var(--ds-background-accent-green-bolder-hovered, #216E4E)`,
    "color.background.accent.green.bolder.pressed": `var(--ds-background-accent-green-bolder-pressed, #19573D)`,
    "color.background.accent.teal.subtlest": `var(--ds-background-accent-teal-subtlest, #E7F9FF)`,
    "color.background.accent.teal.subtlest.hovered": `var(--ds-background-accent-teal-subtlest-hovered, #C6EDFB)`,
    "color.background.accent.teal.subtlest.pressed": `var(--ds-background-accent-teal-subtlest-pressed, #B1E4F7)`,
    "color.background.accent.teal.subtler": `var(--ds-background-accent-teal-subtler, #C6EDFB)`,
    "color.background.accent.teal.subtler.hovered": `var(--ds-background-accent-teal-subtler-hovered, #B1E4F7)`,
    "color.background.accent.teal.subtler.pressed": `var(--ds-background-accent-teal-subtler-pressed, #9DD9EE)`,
    "color.background.accent.teal.subtle": `var(--ds-background-accent-teal-subtle, #6CC3E0)`,
    "color.background.accent.teal.subtle.hovered": `var(--ds-background-accent-teal-subtle-hovered, #9DD9EE)`,
    "color.background.accent.teal.subtle.pressed": `var(--ds-background-accent-teal-subtle-pressed, #B1E4F7)`,
    "color.background.accent.teal.bolder": `var(--ds-background-accent-teal-bolder, #227D9B)`,
    "color.background.accent.teal.bolder.hovered": `var(--ds-background-accent-teal-bolder-hovered, #206A83)`,
    "color.background.accent.teal.bolder.pressed": `var(--ds-background-accent-teal-bolder-pressed, #1A5265)`,
    "color.background.accent.blue.subtlest": `var(--ds-background-accent-blue-subtlest, #E9F2FE)`,
    "color.background.accent.blue.subtlest.hovered": `var(--ds-background-accent-blue-subtlest-hovered, #CFE1FD)`,
    "color.background.accent.blue.subtlest.pressed": `var(--ds-background-accent-blue-subtlest-pressed, #ADCBFB)`,
    "color.background.accent.blue.subtler": `var(--ds-background-accent-blue-subtler, #CFE1FD)`,
    "color.background.accent.blue.subtler.hovered": `var(--ds-background-accent-blue-subtler-hovered, #ADCBFB)`,
    "color.background.accent.blue.subtler.pressed": `var(--ds-background-accent-blue-subtler-pressed, #8FB8F6)`,
    "color.background.accent.blue.subtle": `var(--ds-background-accent-blue-subtle, #669DF1)`,
    "color.background.accent.blue.subtle.hovered": `var(--ds-background-accent-blue-subtle-hovered, #8FB8F6)`,
    "color.background.accent.blue.subtle.pressed": `var(--ds-background-accent-blue-subtle-pressed, #ADCBFB)`,
    "color.background.accent.blue.bolder": `var(--ds-background-accent-blue-bolder, #1868DB)`,
    "color.background.accent.blue.bolder.hovered": `var(--ds-background-accent-blue-bolder-hovered, #1558BC)`,
    "color.background.accent.blue.bolder.pressed": `var(--ds-background-accent-blue-bolder-pressed, #144794)`,
    "color.background.accent.purple.subtlest": `var(--ds-background-accent-purple-subtlest, #F8EEFE)`,
    "color.background.accent.purple.subtlest.hovered": `var(--ds-background-accent-purple-subtlest-hovered, #EED7FC)`,
    "color.background.accent.purple.subtlest.pressed": `var(--ds-background-accent-purple-subtlest-pressed, #E3BDFA)`,
    "color.background.accent.purple.subtler": `var(--ds-background-accent-purple-subtler, #EED7FC)`,
    "color.background.accent.purple.subtler.hovered": `var(--ds-background-accent-purple-subtler-hovered, #E3BDFA)`,
    "color.background.accent.purple.subtler.pressed": `var(--ds-background-accent-purple-subtler-pressed, #D8A0F7)`,
    "color.background.accent.purple.subtle": `var(--ds-background-accent-purple-subtle, #C97CF4)`,
    "color.background.accent.purple.subtle.hovered": `var(--ds-background-accent-purple-subtle-hovered, #D8A0F7)`,
    "color.background.accent.purple.subtle.pressed": `var(--ds-background-accent-purple-subtle-pressed, #E3BDFA)`,
    "color.background.accent.purple.bolder": `var(--ds-background-accent-purple-bolder, #964AC0)`,
    "color.background.accent.purple.bolder.hovered": `var(--ds-background-accent-purple-bolder-hovered, #803FA5)`,
    "color.background.accent.purple.bolder.pressed": `var(--ds-background-accent-purple-bolder-pressed, #673286)`,
    "color.background.accent.magenta.subtlest": `var(--ds-background-accent-magenta-subtlest, #FFECF8)`,
    "color.background.accent.magenta.subtlest.hovered": `var(--ds-background-accent-magenta-subtlest-hovered, #FDD0EC)`,
    "color.background.accent.magenta.subtlest.pressed": `var(--ds-background-accent-magenta-subtlest-pressed, #FCB6E1)`,
    "color.background.accent.magenta.subtler": `var(--ds-background-accent-magenta-subtler, #FDD0EC)`,
    "color.background.accent.magenta.subtler.hovered": `var(--ds-background-accent-magenta-subtler-hovered, #FCB6E1)`,
    "color.background.accent.magenta.subtler.pressed": `var(--ds-background-accent-magenta-subtler-pressed, #F797D2)`,
    "color.background.accent.magenta.subtle": `var(--ds-background-accent-magenta-subtle, #E774BB)`,
    "color.background.accent.magenta.subtle.hovered": `var(--ds-background-accent-magenta-subtle-hovered, #F797D2)`,
    "color.background.accent.magenta.subtle.pressed": `var(--ds-background-accent-magenta-subtle-pressed, #FCB6E1)`,
    "color.background.accent.magenta.bolder": `var(--ds-background-accent-magenta-bolder, #AE4787)`,
    "color.background.accent.magenta.bolder.hovered": `var(--ds-background-accent-magenta-bolder-hovered, #943D73)`,
    "color.background.accent.magenta.bolder.pressed": `var(--ds-background-accent-magenta-bolder-pressed, #77325B)`,
    "color.background.accent.gray.subtlest": `var(--ds-background-accent-gray-subtlest, #F0F1F2)`,
    "color.background.accent.gray.subtlest.hovered": `var(--ds-background-accent-gray-subtlest-hovered, #DDDEE1)`,
    "color.background.accent.gray.subtlest.pressed": `var(--ds-background-accent-gray-subtlest-pressed, #B7B9BE)`,
    "color.background.accent.gray.subtler": `var(--ds-background-accent-gray-subtler, #DDDEE1)`,
    "color.background.accent.gray.subtler.hovered": `var(--ds-background-accent-gray-subtler-hovered, #B7B9BE)`,
    "color.background.accent.gray.subtler.pressed": `var(--ds-background-accent-gray-subtler-pressed, #8C8F97)`,
    "color.background.accent.gray.subtle": `var(--ds-background-accent-gray-subtle, #8C8F97)`,
    "color.background.accent.gray.subtle.hovered": `var(--ds-background-accent-gray-subtle-hovered, #B7B9BE)`,
    "color.background.accent.gray.subtle.pressed": `var(--ds-background-accent-gray-subtle-pressed, #DDDEE1)`,
    "color.background.accent.gray.bolder": `var(--ds-background-accent-gray-bolder, #6B6E76)`,
    "color.background.accent.gray.bolder.hovered": `var(--ds-background-accent-gray-bolder-hovered, #505258)`,
    "color.background.accent.gray.bolder.pressed": `var(--ds-background-accent-gray-bolder-pressed, #3B3D42)`,
    "color.background.disabled": `var(--ds-background-disabled, #17171708)`,
    "color.background.input": `var(--ds-background-input, #FFFFFF)`,
    "color.background.input.hovered": `var(--ds-background-input-hovered, #F8F8F8)`,
    "color.background.input.pressed": `var(--ds-background-input-pressed, #FFFFFF)`,
    "color.background.inverse.subtle": `var(--ds-background-inverse-subtle, #00000029)`,
    "color.background.inverse.subtle.hovered": `var(--ds-background-inverse-subtle-hovered, #0000003D)`,
    "color.background.inverse.subtle.pressed": `var(--ds-background-inverse-subtle-pressed, #00000052)`,
    "color.background.neutral": `var(--ds-background-neutral, #0515240F)`,
    "color.background.neutral.hovered": `var(--ds-background-neutral-hovered, #0B120E24)`,
    "color.background.neutral.pressed": `var(--ds-background-neutral-pressed, #080F214A)`,
    "color.background.neutral.subtle": `var(--ds-background-neutral-subtle, #00000000)`,
    "color.background.neutral.subtle.hovered": `var(--ds-background-neutral-subtle-hovered, #0515240F)`,
    "color.background.neutral.subtle.pressed": `var(--ds-background-neutral-subtle-pressed, #0B120E24)`,
    "color.background.neutral.bold": `var(--ds-background-neutral-bold, #292A2E)`,
    "color.background.neutral.bold.hovered": `var(--ds-background-neutral-bold-hovered, #3B3D42)`,
    "color.background.neutral.bold.pressed": `var(--ds-background-neutral-bold-pressed, #505258)`,
    "color.background.selected": `var(--ds-background-selected, #E9F2FE)`,
    "color.background.selected.hovered": `var(--ds-background-selected-hovered, #CFE1FD)`,
    "color.background.selected.pressed": `var(--ds-background-selected-pressed, #8FB8F6)`,
    "color.background.selected.bold": `var(--ds-background-selected-bold, #1868DB)`,
    "color.background.selected.bold.hovered": `var(--ds-background-selected-bold-hovered, #1558BC)`,
    "color.background.selected.bold.pressed": `var(--ds-background-selected-bold-pressed, #123263)`,
    "color.background.brand.subtlest": `var(--ds-background-brand-subtlest, #E9F2FE)`,
    "color.background.brand.subtlest.hovered": `var(--ds-background-brand-subtlest-hovered, #CFE1FD)`,
    "color.background.brand.subtlest.pressed": `var(--ds-background-brand-subtlest-pressed, #ADCBFB)`,
    "color.background.brand.bold": `var(--ds-background-brand-bold, #1868DB)`,
    "color.background.brand.bold.hovered": `var(--ds-background-brand-bold-hovered, #1558BC)`,
    "color.background.brand.bold.pressed": `var(--ds-background-brand-bold-pressed, #144794)`,
    "color.background.brand.boldest": `var(--ds-background-brand-boldest, #1C2B42)`,
    "color.background.brand.boldest.hovered": `var(--ds-background-brand-boldest-hovered, #123263)`,
    "color.background.brand.boldest.pressed": `var(--ds-background-brand-boldest-pressed, #144794)`,
    "color.background.danger": `var(--ds-background-danger, #FFECEB)`,
    "color.background.danger.hovered": `var(--ds-background-danger-hovered, #FFD5D2)`,
    "color.background.danger.pressed": `var(--ds-background-danger-pressed, #FFB8B2)`,
    "color.background.danger.subtler": `var(--ds-background-danger-subtler, #FFD5D2)`,
    "color.background.danger.subtler.hovered": `var(--ds-background-danger-subtler-hovered, #FFB8B2)`,
    "color.background.danger.subtler.pressed": `var(--ds-background-danger-subtler-pressed, #FD9891)`,
    "color.background.danger.bold": `var(--ds-background-danger-bold, #C9372C)`,
    "color.background.danger.bold.hovered": `var(--ds-background-danger-bold-hovered, #AE2E24)`,
    "color.background.danger.bold.pressed": `var(--ds-background-danger-bold-pressed, #872821)`,
    "color.background.warning": `var(--ds-background-warning, #FFF5DB)`,
    "color.background.warning.hovered": `var(--ds-background-warning-hovered, #FCE4A6)`,
    "color.background.warning.pressed": `var(--ds-background-warning-pressed, #FBD779)`,
    "color.background.warning.subtler": `var(--ds-background-warning-subtler, #FCE4A6)`,
    "color.background.warning.subtler.hovered": `var(--ds-background-warning-subtler-hovered, #FBD779)`,
    "color.background.warning.subtler.pressed": `var(--ds-background-warning-subtler-pressed, #FBC828)`,
    "color.background.warning.bold": `var(--ds-background-warning-bold, #FBC828)`,
    "color.background.warning.bold.hovered": `var(--ds-background-warning-bold-hovered, #FCA700)`,
    "color.background.warning.bold.pressed": `var(--ds-background-warning-bold-pressed, #F68909)`,
    "color.background.success": `var(--ds-background-success, #EFFFD6)`,
    "color.background.success.hovered": `var(--ds-background-success-hovered, #D3F1A7)`,
    "color.background.success.pressed": `var(--ds-background-success-pressed, #BDE97C)`,
    "color.background.success.subtler": `var(--ds-background-success-subtler, #D3F1A7)`,
    "color.background.success.subtler.hovered": `var(--ds-background-success-subtler-hovered, #BDE97C)`,
    "color.background.success.subtler.pressed": `var(--ds-background-success-subtler-pressed, #B3DF72)`,
    "color.background.success.bold": `var(--ds-background-success-bold, #5B7F24)`,
    "color.background.success.bold.hovered": `var(--ds-background-success-bold-hovered, #4C6B1F)`,
    "color.background.success.bold.pressed": `var(--ds-background-success-bold-pressed, #3F5224)`,
    "color.background.discovery": `var(--ds-background-discovery, #F8EEFE)`,
    "color.background.discovery.hovered": `var(--ds-background-discovery-hovered, #EED7FC)`,
    "color.background.discovery.pressed": `var(--ds-background-discovery-pressed, #E3BDFA)`,
    "color.background.discovery.subtler": `var(--ds-background-discovery-subtler, #EED7FC)`,
    "color.background.discovery.subtler.hovered": `var(--ds-background-discovery-subtler-hovered, #E3BDFA)`,
    "color.background.discovery.subtler.pressed": `var(--ds-background-discovery-subtler-pressed, #D8A0F7)`,
    "color.background.discovery.bold": `var(--ds-background-discovery-bold, #964AC0)`,
    "color.background.discovery.bold.hovered": `var(--ds-background-discovery-bold-hovered, #803FA5)`,
    "color.background.discovery.bold.pressed": `var(--ds-background-discovery-bold-pressed, #673286)`,
    "color.background.information": `var(--ds-background-information, #E9F2FE)`,
    "color.background.information.hovered": `var(--ds-background-information-hovered, #CFE1FD)`,
    "color.background.information.pressed": `var(--ds-background-information-pressed, #ADCBFB)`,
    "color.background.information.subtler": `var(--ds-background-information-subtler, #CFE1FD)`,
    "color.background.information.subtler.hovered": `var(--ds-background-information-subtler-hovered, #ADCBFB)`,
    "color.background.information.subtler.pressed": `var(--ds-background-information-subtler-pressed, #8FB8F6)`,
    "color.background.information.bold": `var(--ds-background-information-bold, #1868DB)`,
    "color.background.information.bold.hovered": `var(--ds-background-information-bold-hovered, #1558BC)`,
    "color.background.information.bold.pressed": `var(--ds-background-information-bold-pressed, #144794)`,
    "color.blanket": `var(--ds-blanket, #050C1F75)`,
    "color.blanket.selected": `var(--ds-blanket-selected, #388BFF14)`,
    "color.blanket.danger": `var(--ds-blanket-danger, #EF5C4814)`,
    "color.skeleton": `var(--ds-skeleton, #0515240F)`,
    "color.skeleton.subtle": `var(--ds-skeleton-subtle, #17171708)`,
    "elevation.surface": `var(--ds-surface, #FFFFFF)`,
    "elevation.surface.hovered": `var(--ds-surface-hovered, #F0F1F2)`,
    "elevation.surface.pressed": `var(--ds-surface-pressed, #DDDEE1)`,
    "elevation.surface.overlay": `var(--ds-surface-overlay, #FFFFFF)`,
    "elevation.surface.overlay.hovered": `var(--ds-surface-overlay-hovered, #F0F1F2)`,
    "elevation.surface.overlay.pressed": `var(--ds-surface-overlay-pressed, #DDDEE1)`,
    "elevation.surface.raised": `var(--ds-surface-raised, #FFFFFF)`,
    "elevation.surface.raised.hovered": `var(--ds-surface-raised-hovered, #F0F1F2)`,
    "elevation.surface.raised.pressed": `var(--ds-surface-raised-pressed, #DDDEE1)`,
    "elevation.surface.sunken": `var(--ds-surface-sunken, #F8F8F8)`,
    "utility.elevation.surface.current": `var(--ds-elevation-surface-current, #FFFFFF)`,
  },
  fv = {
    "color.text": `var(--ds-text, #292A2E)`,
    "color.text.accent.lime": `var(--ds-text-accent-lime, #4C6B1F)`,
    "color.text.accent.lime.bolder": `var(--ds-text-accent-lime-bolder, #37471F)`,
    "color.text.accent.red": `var(--ds-text-accent-red, #AE2E24)`,
    "color.text.accent.red.bolder": `var(--ds-text-accent-red-bolder, #5D1F1A)`,
    "color.text.accent.orange": `var(--ds-text-accent-orange, #9E4C00)`,
    "color.text.accent.orange.bolder": `var(--ds-text-accent-orange-bolder, #693200)`,
    "color.text.accent.yellow": `var(--ds-text-accent-yellow, #7F5F01)`,
    "color.text.accent.yellow.bolder": `var(--ds-text-accent-yellow-bolder, #533F04)`,
    "color.text.accent.green": `var(--ds-text-accent-green, #216E4E)`,
    "color.text.accent.green.bolder": `var(--ds-text-accent-green-bolder, #164B35)`,
    "color.text.accent.teal": `var(--ds-text-accent-teal, #206A83)`,
    "color.text.accent.teal.bolder": `var(--ds-text-accent-teal-bolder, #164555)`,
    "color.text.accent.blue": `var(--ds-text-accent-blue, #1558BC)`,
    "color.text.accent.blue.bolder": `var(--ds-text-accent-blue-bolder, #123263)`,
    "color.text.accent.purple": `var(--ds-text-accent-purple, #803FA5)`,
    "color.text.accent.purple.bolder": `var(--ds-text-accent-purple-bolder, #48245D)`,
    "color.text.accent.magenta": `var(--ds-text-accent-magenta, #943D73)`,
    "color.text.accent.magenta.bolder": `var(--ds-text-accent-magenta-bolder, #50253F)`,
    "color.text.accent.gray": `var(--ds-text-accent-gray, #505258)`,
    "color.text.accent.gray.bolder": `var(--ds-text-accent-gray-bolder, #1E1F21)`,
    "color.text.disabled": `var(--ds-text-disabled, #080F214A)`,
    "color.text.inverse": `var(--ds-text-inverse, #FFFFFF)`,
    "color.text.selected": `var(--ds-text-selected, #1868DB)`,
    "color.text.brand": `var(--ds-text-brand, #1868DB)`,
    "color.text.danger": `var(--ds-text-danger, #AE2E24)`,
    "color.text.danger.bolder": `var(--ds-text-danger-bolder, #5D1F1A)`,
    "color.text.warning": `var(--ds-text-warning, #9E4C00)`,
    "color.text.warning.inverse": `var(--ds-text-warning-inverse, #292A2E)`,
    "color.text.warning.bolder": `var(--ds-text-warning-bolder, #693200)`,
    "color.text.success": `var(--ds-text-success, #4C6B1F)`,
    "color.text.success.bolder": `var(--ds-text-success-bolder, #37471F)`,
    "color.text.discovery": `var(--ds-text-discovery, #803FA5)`,
    "color.text.discovery.bolder": `var(--ds-text-discovery-bolder, #48245D)`,
    "color.text.information": `var(--ds-text-information, #1558BC)`,
    "color.text.information.bolder": `var(--ds-text-information-bolder, #123263)`,
    "color.text.subtlest": `var(--ds-text-subtlest, #6B6E76)`,
    "color.text.subtle": `var(--ds-text-subtle, #505258)`,
    "color.link": `var(--ds-link, #1868DB)`,
    "color.link.pressed": `var(--ds-link-pressed, #1558BC)`,
    "color.link.visited": `var(--ds-link-visited, #803FA5)`,
    "color.link.visited.pressed": `var(--ds-link-visited-pressed, #48245D)`,
  },
  pv = {
    1: 1,
    card: 100,
    navigation: 200,
    dialog: 300,
    layer: 400,
    blanket: 500,
    modal: 510,
    flag: 600,
    spotlight: 700,
    tooltip: 800,
  },
  mv = {
    "border.width": `var(--ds-border-width, 1px)`,
    "border.width.selected": `var(--ds-border-width-selected, 2px)`,
    "border.width.focused": `var(--ds-border-width-focused, 2px)`,
  },
  hv = {
    "radius.xsmall": `var(--ds-radius-xsmall, 2px)`,
    "radius.small": `var(--ds-radius-small, 3px)`,
    "radius.medium": `var(--ds-radius-medium, 6px)`,
    "radius.large": `var(--ds-radius-large, 8px)`,
    "radius.xlarge": `var(--ds-radius-xlarge, 12px)`,
    "radius.xxlarge": `var(--ds-radius-xxlarge, 16px)`,
    "radius.full": `var(--ds-radius-full, 9999px)`,
    "radius.tile": `var(--ds-radius-tile, 25%)`,
  },
  gv = {
    "font.body": `var(--ds-font-body, normal 400 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.body.large": `var(--ds-font-body-large, normal 400 16px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.body.small": `var(--ds-font-body-small, normal 400 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.code": `var(--ds-font-code, normal 400 0.875em/1 "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)`,
    "font.heading.large": `var(--ds-font-heading-large, normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.heading.medium": `var(--ds-font-heading-medium, normal 653 20px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.heading.small": `var(--ds-font-heading-small, normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.heading.xlarge": `var(--ds-font-heading-xlarge, normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.heading.xsmall": `var(--ds-font-heading-xsmall, normal 653 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.heading.xxlarge": `var(--ds-font-heading-xxlarge, normal 653 32px/36px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.heading.xxsmall": `var(--ds-font-heading-xxsmall, normal 653 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.metric.large": `var(--ds-font-metric-large, normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.metric.medium": `var(--ds-font-metric-medium, normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.metric.small": `var(--ds-font-metric-small, normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  _v = {
    "font.weight.bold": `var(--ds-font-weight-bold, 653)`,
    "font.weight.medium": `var(--ds-font-weight-medium, 500)`,
    "font.weight.regular": `var(--ds-font-weight-regular, 400)`,
    "font.weight.semibold": `var(--ds-font-weight-semibold, 600)`,
  },
  vv = {
    "font.family.body": `var(--ds-font-family-body, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.body": `var(--ds-font-family-brand-body, "Charlie Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.heading": `var(--ds-font-family-brand-heading, "Charlie Display", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.code": `var(--ds-font-family-code, "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)`,
    "font.family.heading": `var(--ds-font-family-heading, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  yv = {
    medium: `var(--ds-font-body, normal 400 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    large: `var(--ds-font-body-large, normal 400 16px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-body-small, normal 400 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  bv = {
    bold: `var(--ds-font-weight-bold, 653)`,
    medium: `var(--ds-font-weight-medium, 500)`,
    regular: `var(--ds-font-weight-regular, 400)`,
    semibold: `var(--ds-font-weight-semibold, 600)`,
  },
  xv = {
    large: `var(--ds-font-metric-large, normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    medium: `var(--ds-font-metric-medium, normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-metric-small, normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  Sv = [
    `padding`,
    `paddingBlock`,
    `paddingBlockStart`,
    `paddingBlockEnd`,
    `paddingInline`,
    `paddingInlineStart`,
    `paddingInlineEnd`,
    `gap`,
    `rowGap`,
    `columnGap`,
  ],
  Cv = function (e, t) {
    return Object.keys(t).reduce(function (n, r) {
      return ((n[r] = U(x({}, e, t[r]))), n);
    }, {});
  },
  wv = Sv.reduce(function (e, t) {
    return ((e[t] = Cv(t, av)), e);
  }, {}),
  Tv = Sv.reduce(function (e, t) {
    return ((e[t] = Cv(t, av)), e);
  }, {}),
  Ev = Cv(`backgroundColor`, dv);
(Cv(`color`, fv),
  Cv(`fontWeight`, _v),
  Cv(`fontFamily`, vv),
  Cv(`font`, gv),
  Cv(`font`, yv),
  Cv(`fontWeight`, bv));
var Dv = Cv(vu, lv),
  Ov = function (e) {
    return lv[e] !== void 0;
  };
Cv(`font`, xv);
function kv(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Av(e)) || (t && e && typeof e.length == `number`)) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a,
    o = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return ((o = e.done), e);
    },
    e: function (e) {
      ((s = !0), (a = e));
    },
    f: function () {
      try {
        o || n.return == null || n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function Av(e, t) {
  if (e) {
    if (typeof e == `string`) return jv(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? jv(e, t)
          : void 0
    );
  }
}
function jv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Mv = {
    backgroundColor: dv,
    blockSize: iv,
    borderBlockColor: uv,
    borderBlockEndColor: uv,
    borderBlockEndWidth: mv,
    borderBlockStartColor: uv,
    borderBlockStartWidth: mv,
    borderBlockWidth: mv,
    borderBottomColor: uv,
    borderBottomLeftRadius: hv,
    borderBottomRightRadius: hv,
    borderBottomWidth: mv,
    borderColor: uv,
    borderEndEndRadius: hv,
    borderEndStartRadius: hv,
    borderInlineColor: uv,
    borderInlineEndColor: uv,
    borderInlineEndWidth: mv,
    borderInlineStartColor: uv,
    borderInlineStartWidth: mv,
    borderInlineWidth: mv,
    borderLeftColor: uv,
    borderLeftWidth: mv,
    borderRadius: hv,
    borderRightColor: uv,
    borderRightWidth: mv,
    borderStartEndRadius: hv,
    borderStartStartRadius: hv,
    borderTopColor: uv,
    borderTopLeftRadius: hv,
    borderTopRightRadius: hv,
    borderTopWidth: mv,
    borderWidth: mv,
    bottom: Q,
    boxShadow: cv,
    color: fv,
    columnGap: av,
    font: gv,
    fontFamily: vv,
    fontWeight: _v,
    gap: av,
    height: iv,
    inlineSize: iv,
    inset: Q,
    insetBlock: Q,
    insetBlockEnd: Q,
    insetBlockStart: Q,
    insetInline: Q,
    insetInlineEnd: Q,
    insetInlineStart: Q,
    left: Q,
    margin: Q,
    marginBlock: Q,
    marginBlockEnd: Q,
    marginBlockStart: Q,
    marginBottom: Q,
    marginInline: Q,
    marginInlineEnd: Q,
    marginInlineStart: Q,
    marginLeft: Q,
    marginRight: Q,
    marginTop: Q,
    maxBlockSize: iv,
    maxHeight: iv,
    maxInlineSize: iv,
    maxWidth: iv,
    minBlockSize: iv,
    minHeight: iv,
    minInlineSize: iv,
    minWidth: iv,
    opacity: sv,
    outlineColor: uv,
    outlineOffset: Q,
    outlineWidth: mv,
    padding: av,
    paddingBlock: av,
    paddingBlockEnd: av,
    paddingBlockStart: av,
    paddingBottom: av,
    paddingInline: av,
    paddingInlineEnd: av,
    paddingInlineStart: av,
    paddingLeft: av,
    paddingRight: av,
    paddingTop: av,
    right: Q,
    rowGap: av,
    top: Q,
    width: iv,
    zIndex: pv,
  },
  Nv = Symbol(`UNSAFE_INTERNAL_styles`),
  Pv = function () {
    return (
      (typeof process > `u` ? `undefined` : C(process)) === `object` && C({}) === `object` && !1
    );
  },
  Fv = /(\.|\s|&+|\*\>|#|\[.*\])/,
  Iv = /^@media .*$|^::?.*$|^@supports .*$/,
  Lv = function (e) {
    return !e || C(e) !== `object`
      ? e
      : Array.isArray(e)
        ? e.map(Lv)
        : (Object.entries(e).forEach(function (t) {
            var n = f(t, 2),
              r = n[0],
              i = n[1];
            if (C(i) === `object` && Iv.test(r)) {
              e[r] = Lv(i);
              return;
            }
            if (Pv() && Fv.test(r)) throw Error(`Styles not supported for key '${r}'.`);
            r in Mv && (e[r] = Mv[r][i] ?? i);
          }),
          e);
  },
  Rv = function (e) {
    return x({}, Nv, U(Lv(e)));
  },
  zv = function (e) {
    if (Array.isArray(e)) {
      var t = [],
        n = [],
        r = kv(e),
        i;
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var a = i.value,
            o = zv(a);
          (o.emotion && t.push.apply(t, l(o.emotion)), o.static && n.push(o.static));
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      return { emotion: t, static: n.join(` `) };
    }
    var s = (e || {})[Nv];
    if (s) return { emotion: [s] };
    if (e) {
      var c = `${e}`;
      if (c) return { static: c };
    }
    return {};
  };
function Bv(e) {
  return Rv(e);
}
var Vv = [
    `as`,
    `children`,
    `backgroundColor`,
    `padding`,
    `paddingBlock`,
    `paddingBlockStart`,
    `paddingBlockEnd`,
    `paddingInline`,
    `paddingInlineStart`,
    `paddingInlineEnd`,
    `style`,
    `testId`,
    `xcss`,
  ],
  Hv = [`className`],
  Uv = (0, T.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `div` : n,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = e.paddingBlockStart,
      l = e.paddingBlockEnd,
      u = e.paddingInline,
      f = e.paddingInlineStart,
      p = e.paddingInlineEnd,
      m = e.style,
      h = e.testId,
      g = e.xcss,
      _ = d(e, Vv);
    _.className;
    var v = d(_, Hv),
      y = zv(g),
      b = oi(
        r,
        z({ style: m, ref: t, className: y.static }, v, {
          css: [
            Wv,
            a && Ev[a],
            Ov(a) && Dv[a],
            o && wv.padding[o],
            s && wv.paddingBlock[s],
            c && wv.paddingBlockStart[c],
            l && wv.paddingBlockEnd[l],
            u && wv.paddingInline[u],
            f && wv.paddingInlineStart[f],
            p && wv.paddingInlineEnd[p],
            y.emotion,
          ],
          "data-testid": h,
        }),
        i,
      );
    return a ? oi($c.Provider, { value: a }, b) : b;
  }),
  Wv = U({ boxSizing: `border-box`, appearance: `none`, border: `none` }),
  Gv = {
    start: U({ justifyContent: `start` }),
    center: U({ justifyContent: `center` }),
    end: U({ justifyContent: `end` }),
    "space-between": U({ justifyContent: `space-between` }),
    "space-around": U({ justifyContent: `space-around` }),
    "space-evenly": U({ justifyContent: `space-evenly` }),
    stretch: U({ justifyContent: `stretch` }),
  },
  Kv = { column: U({ flexDirection: `column` }), row: U({ flexDirection: `row` }) },
  qv = { wrap: U({ flexWrap: `wrap` }), nowrap: U({ flexWrap: `nowrap` }) },
  Jv = {
    start: U({ alignItems: `start` }),
    center: U({ alignItems: `center` }),
    baseline: U({ alignItems: `baseline` }),
    end: U({ alignItems: `end` }),
    stretch: U({ alignItems: `stretch` }),
  },
  Yv = U({ display: `flex`, boxSizing: `border-box` }),
  Xv = (0, T.memo)(
    (0, T.forwardRef)(function (e, t) {
      var n = e.as,
        r = n === void 0 ? `div` : n,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        u = e.rowGap,
        d = e.children,
        f = e.testId,
        p = e.direction,
        m = e.wrap,
        h = e.xcss,
        g = e.id,
        _ = zv(h);
      return oi(
        r,
        {
          id: g,
          role: i,
          className: _.static,
          css: [
            Yv,
            s && Tv.gap[s],
            c && Tv.columnGap[c],
            u && Tv.rowGap[u],
            a && Jv[a],
            p && Kv[p],
            o && Gv[o],
            m && qv[m],
          ].concat(l(_.emotion || [])),
          "data-testid": f,
          ref: t,
        },
        d,
      );
    }),
  );
Xv.displayName = `Flex`;
var Zv = { hug: Bv({ flexGrow: 0 }), fill: Bv({ width: `100%`, flexGrow: 1 }) },
  Qv = U({
    color: `var(--ds-text-subtle, #42526E)`,
    marginBlock: `var(--ds-space-0, 0px)`,
    marginInline: `var(--ds-space-negative-025, -2px)`,
    pointerEvents: `none`,
    userSelect: `none`,
  }),
  $v = function (e) {
    var t = e.children;
    return oi(`span`, { css: Qv }, t);
  },
  ey = (0, T.memo)(
    (0, T.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `start` : i,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        c = e.spread,
        u = e.grow,
        d = e.space,
        f = e.rowSpace,
        p = e.separator,
        m = e.xcss,
        h = e.testId,
        g = e.role,
        _ = e.id,
        v = e.children,
        y = typeof p == `string` ? oi($v, null, p) : p,
        b = y
          ? T.Children.toArray(v)
              .filter(Boolean)
              .map(function (e, t) {
                return oi(T.Fragment, { key: t }, p && t > 0 ? y : null, e);
              })
          : v,
        x = c || r,
        S = u ? [Zv[u]].concat(l(Array.isArray(m) ? m : [m])) : m;
      return oi(
        Xv,
        {
          id: _,
          as: n,
          role: g,
          alignItems: a,
          justifyContent: x,
          direction: `row`,
          gap: d,
          rowGap: f,
          wrap: s ? `wrap` : void 0,
          xcss: S,
          testId: h,
          ref: t,
        },
        b,
      );
    }),
  );
ey.displayName = `Inline`;
var ty = { hug: Bv({ flexGrow: 0 }), fill: Bv({ width: `100%`, flexGrow: 1 }) },
  ny = (0, T.memo)(
    (0, T.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `stretch` : i,
        o = e.spread,
        s = e.grow,
        c = e.space,
        u = e.children,
        d = e.testId,
        f = e.xcss,
        p = e.role,
        m = e.id;
      return oi(
        Xv,
        {
          id: m,
          as: n,
          role: p,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: s ? [ty[s]].concat(l(Array.isArray(f) ? f : [f])) : f,
          testId: d,
          ref: t,
        },
        u,
      );
    }),
  );
ny.displayName = `Stack`;
var ry = (0, T.createContext)(0),
  iy = function () {
    return (0, T.useContext)(ry);
  },
  ay = function (e) {
    var t = iy();
    return [t, (t && (t > 6 ? `div` : `h${t}`)) || e];
  };
X();
var oy = {
    xxlarge: `h1`,
    xlarge: `h1`,
    large: `h2`,
    medium: `h3`,
    small: `h4`,
    xsmall: `h5`,
    xxsmall: `h6`,
  },
  sy = { reset: `_dxsyidpf _1i144jg8 _nmk4glyw` },
  cy = {
    "color.text": `_1w90i7uo`,
    "color.text.inverse": `_1w9015cr`,
    "color.text.warning.inverse": `_1w901yd3`,
  },
  ly = {
    xxlarge: `_fqox1iff`,
    xlarge: `_fqox12ln`,
    large: `_fqox10sd`,
    medium: `_fqox1af2`,
    small: `_fqox1e3o`,
    xsmall: `_fqox1qyo`,
    xxsmall: `_fqoxi4vh`,
  },
  uy = function (e) {
    var t = el();
    return e || (ov.hasOwnProperty(t) ? ov[t] : `color.text`);
  },
  dy = (0, T.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.size,
      i = e.id,
      a = e.testId,
      o = e.as,
      s = e.color,
      c = f(ay(oy[r]), 2),
      l = c[0],
      u = c[1],
      d = o || u,
      p = d === `div` && l,
      m = uy(s);
    return T.createElement(
      d,
      {
        id: i,
        ref: t,
        "data-testid": a,
        role: p ? `heading` : void 0,
        "aria-level": p ? l : void 0,
        className: Y([sy.reset, ly[r], cy[m]]),
      },
      n,
    );
  }),
  fy = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `CrossIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" d="M14.03 3.03 9.06 8l4.97 4.97-1.06 1.06L8 9.06l-4.97 4.97-1.06-1.06L6.94 8 1.97 3.03l1.06-1.06L8 6.94l4.97-4.97z"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `CrossIcon`), (e.default = a));
  }),
  py = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `StatusDiscoveryIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" d="M10.5 15.06v-3.81a.75.75 0 0 1 .75-.75h3.81z"/><path fill="currentcolor" fill-rule="evenodd" d="M13 1a2 2 0 0 1 2 2v6h-4.75C9.56 9 9 9.56 9 10.25V15H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM4 9h3V7.5H4zm0-5v1.5h7V4z" clip-rule="evenodd"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `StatusDiscoveryIcon`), (e.default = a));
  }),
  my = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `StatusErrorIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" fill-rule="evenodd" d="M6.586.603a2 2 0 0 1 2.828 0l5.983 5.983a2 2 0 0 1 0 2.828l-5.983 5.982a2 2 0 0 1-2.828 0L.604 9.414a2 2 0 0 1 0-2.828zM8 10.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.75-6.5V9h1.5V3.75z" clip-rule="evenodd"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `StatusErrorIcon`), (e.default = a));
  }),
  hy = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `StatusInformationIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.5 6.75v1.5h.75v4.25h1.5v-5A.75.75 0 0 0 8 6.75zM8 3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clip-rule="evenodd"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `StatusInformationIcon`), (e.default = a));
  }),
  gy = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `StatusSuccessIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0l5-6-1.152-.96z" clip-rule="evenodd"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `StatusSuccessIcon`), (e.default = a));
  }),
  _y = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xc(), t(Yc)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (e) =>
      n.default.createElement(
        r.default,
        Object.assign(
          {
            name: `StatusWarningIcon`,
            dangerouslySetGlyph: `<path fill="currentcolor" fill-rule="evenodd" d="M6.242 1.168c.756-1.395 2.76-1.395 3.516 0l5.9 10.878c.723 1.333-.242 2.953-1.758 2.953H2.1C.584 15-.38 13.38.342 12.046zM8 10.75a1 1 0 1 0 0 2.001 1 1 0 0 0 0-2M7.25 4.5v5h1.5v-5z" clip-rule="evenodd"/>`,
          },
          e,
        ),
      );
    ((a.displayName = `StatusWarningIcon`), (e.default = a));
  }),
  vy = e(py()),
  yy = e(my()),
  by = e(hy()),
  xy = e(gy()),
  Sy = e(_y());
function Cy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cy(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cy(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ty = {
  information: {
    backgroundColor: `var(--ds-background-information, #E9F2FE)`,
    Icon: by.default,
    primaryIconColor: `var(--ds-icon-information, #357DE8)`,
  },
  warning: {
    backgroundColor: `var(--ds-background-warning, #FFF5DB)`,
    Icon: Sy.default,
    primaryIconColor: `var(--ds-icon-warning, #E06C00)`,
  },
  error: {
    backgroundColor: `var(--ds-background-danger, #FFECEB)`,
    Icon: yy.default,
    primaryIconColor: `var(--ds-icon-danger, #C9372C)`,
  },
  success: {
    backgroundColor: `var(--ds-background-success, #EFFFD6)`,
    Icon: xy.default,
    primaryIconColor: `var(--ds-icon-success, #6A9A23)`,
  },
  discovery: {
    backgroundColor: `var(--ds-background-discovery, #F8EEFE)`,
    Icon: vy.default,
    primaryIconColor: `var(--ds-icon-discovery, #AF59E1)`,
  },
};
function Ey(e, t) {
  var n = Ty[e] || Ty.information,
    r =
      t ||
      function (t) {
        var r = t.primaryColor;
        return T.createElement(n.Icon, { color: r, spacing: `spacious`, label: e });
      };
  return wy(wy({}, n), {}, { Icon: r });
}
X();
var Dy = e(fy()),
  Oy = {
    container: `_2rko12b0 _1rjcpxbi _18zrpxbi _1nmz1hna`,
    containerT26Shape: `_2rko1mok`,
    iconContainer: `_1mou1i6y _1e0c1txw`,
    contentContainer: `_16jlkb7n`,
    content: `_11c8fhey _syazi7uo`,
    actionsContainer: `_11c8fhey`,
    dismissButtonContainer: `_1pfh1i6y`,
  },
  ky = {
    information: `_bfhk19ip`,
    warning: `_bfhk1917`,
    error: `_bfhk1gly`,
    success: `_bfhk1y9u`,
    discovery: `_bfhk6vm6`,
  },
  Ay = (0, T.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.appearance,
      i = r === void 0 ? `information` : r,
      a = e.actions,
      o = e.title,
      s = e.icon,
      c = e.isDismissible,
      l = e.onDismiss,
      u = e.testId,
      d = f((0, T.useState)(!1), 2),
      p = d[0],
      m = d[1],
      h = (0, T.useCallback)(
        function () {
          (l?.(), m(!0));
        },
        [l],
      ),
      g = Ey(i, s),
      _ = g.primaryIconColor,
      v = g.backgroundColor,
      y = g.Icon,
      b = a && a.type === T.Fragment ? a.props.children : a,
      x = T.Children.toArray(b);
    return c && p
      ? null
      : T.createElement(
          `section`,
          {
            "data-testid": u,
            ref: t,
            className: Y([
              Oy.container,
              J(`platform-dst-shape-theme-default`) && Oy.containerT26Shape,
              ky[i],
            ]),
          },
          T.createElement(
            Ol,
            { space: `space.200`, alignBlock: `stretch` },
            T.createElement(
              `div`,
              { className: Y([Oy.iconContainer]) },
              T.createElement(y, {
                size: `medium`,
                primaryColor: _,
                secondaryColor: v,
                color: _,
                spacing: `spacious`,
              }),
            ),
            T.createElement(
              jl,
              { space: `space.100`, testId: u && `${u}--content`, xcss: Oy.contentContainer },
              !!o && T.createElement(dy, { as: `h2`, size: `small` }, o),
              T.createElement(`div`, { className: Y([Oy.content]) }, n),
              x.length > 0 &&
                T.createElement(
                  Ol,
                  {
                    shouldWrap: !0,
                    testId: u && `${u}--actions`,
                    separator: `·`,
                    space: `space.100`,
                    rowSpace: `space.0`,
                    role: x.length > 1 ? `list` : void 0,
                    xcss: Oy.actionsContainer,
                  },
                  x.map(function (e, t) {
                    return T.createElement(
                      Ol,
                      { role: x.length > 1 ? `listitem` : void 0, key: t },
                      e,
                    );
                  }),
                ),
            ),
            c &&
              T.createElement(
                `div`,
                { className: Y([Oy.dismissButtonContainer]) },
                T.createElement(tv, {
                  testId: u && `${u}--dismiss-button`,
                  label: `Dismiss`,
                  icon: Dy.default,
                  appearance: `subtle`,
                  onClick: h,
                  spacing: `compact`,
                }),
              ),
          ),
        );
  });
Ay.displayName = `SectionMessage`;
var jy = i((e) => {
    var t = o(),
      n = Symbol.for(`react.element`),
      r = Object.prototype.hasOwnProperty,
      i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      a = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(e, t, o) {
      var s,
        c = {},
        l = null,
        u = null;
      for (s in (o !== void 0 && (l = `` + o),
      t.key !== void 0 && (l = `` + t.key),
      t.ref !== void 0 && (u = t.ref),
      t))
        r.call(t, s) && !a.hasOwnProperty(s) && (c[s] = t[s]);
      if (e && e.defaultProps)
        for (s in ((t = e.defaultProps), t)) c[s] === void 0 && (c[s] = t[s]);
      return { $$typeof: n, type: e, key: l, ref: u, props: c, _owner: i.current };
    }
    ((e.jsx = s), (e.jsxs = s));
  }),
  My = i((e, t) => {
    t.exports = jy();
  }),
  Ny = pn(),
  $ = My(),
  Py = Bv({ width: `100%` }),
  Fy = Bv({ width: `100%`, maxWidth: `100%` }),
  Iy = Bv({ whiteSpace: `normal`, overflowWrap: `anywhere` });
function Ly() {
  let [e, t] = (0, T.useState)(1),
    [n, r] = (0, T.useState)(``),
    [i, a] = (0, T.useState)(``),
    [o, s] = (0, T.useState)(``),
    [c, l] = (0, T.useState)([]),
    [u, d] = (0, T.useState)([]),
    [f, p] = (0, T.useState)(!1),
    [m, h] = (0, T.useState)(``),
    [g, _] = (0, T.useState)(null),
    [v, y] = (0, T.useState)(null),
    [b, x] = (0, T.useState)(null),
    S = 2048,
    C = (0, T.useCallback)(async () => {
      let e = await (0, Ny.invoke)(`fetch`);
      return (d(e), l([]), e);
    }, []),
    w = (0, T.useCallback)(async () => {
      (p(!0), h(``));
      try {
        h(`Loaded ${(await C()).length} document(s)`);
      } catch (e) {
        h(`Fetch failed: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
        p(!1);
      }
    }, [C]);
  (0, T.useEffect)(() => {
    e === 0 && w();
  }, [e, w]);
  let E = async () => {
      let e = n.trim(),
        t = i.trim();
      if (!e) {
        h(`Title is required`);
        return;
      }
      if (!t) {
        h(`Document is required`);
        return;
      }
      if (t.length > S) {
        h(`Document must be at most ${S} characters`);
        return;
      }
      (p(!0), h(``));
      try {
        let n = await (0, Ny.invoke)(`create`, { data: { title: e, document: t } });
        try {
          h(`Document created. insertId: ${n}. Showing ${(await C()).length} document(s).`);
        } catch (e) {
          h(
            `Document created. insertId: ${n}. Could not refresh list: ${e instanceof Error ? e.message : String(e)}`,
          );
        }
      } catch (e) {
        h(`Create failed: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
        p(!1);
      }
    },
    D = async () => {
      let e = o.trim();
      if (!e) {
        h(`Search text is required`);
        return;
      }
      if (e.length > S) {
        h(`Search text must be at most ${S} characters`);
        return;
      }
      (p(!0), h(``));
      try {
        let t = await (0, Ny.invoke)(`search`, { text: e });
        (l(t), d([]), h(`Found ${t.length} result(s)`));
      } catch (e) {
        h(`Search failed: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
        p(!1);
      }
    },
    O = {
      cells: [
        { key: `id`, content: `ID`, width: 10 },
        { key: `title`, content: `Title`, width: 25 },
        { key: `document`, content: `Document`, width: 45 },
        { key: `similarity`, content: `Similarity (%)`, width: 20 },
      ],
    },
    k = c.map((e) => ({
      key: `search-${e.id}`,
      cells: [
        { key: `id-${e.id}`, content: e.id },
        { key: `title-${e.id}`, content: e.title },
        {
          key: `document-${e.id}`,
          content: (0, $.jsxs)(ny, {
            space: `space.100`,
            children: [
              (0, $.jsx)(ey, {
                children: (0, $.jsx)(Ms, {
                  onClick: () => x((t) => (t === e.id ? null : e.id)),
                  children: b === e.id ? `Hide document` : `Open document`,
                }),
              }),
              b === e.id
                ? (0, $.jsxs)(Uv, {
                    xcss: Iy,
                    children: [(0, $.jsx)(`strong`, { children: `Document:` }), ` `, e.document],
                  })
                : null,
            ],
          }),
        },
        { key: `similarity-${e.id}`, content: `${((1 - e.distance) * 100).toFixed(2)}%` },
      ],
    })),
    A = {
      cells: [
        { key: `id`, content: `ID`, width: 10 },
        { key: `title`, content: `Title`, width: 25 },
        { key: `document`, content: `Document`, width: 30 },
        { key: `vector`, content: `Vector`, width: 35 },
      ],
    },
    j = u.map((e) => ({
      key: `fetch-${e.id}`,
      cells: [
        { key: `id-${e.id}`, content: e.id },
        { key: `title-${e.id}`, content: e.title },
        {
          key: `document-${e.id}`,
          content: (0, $.jsxs)(ny, {
            space: `space.100`,
            children: [
              (0, $.jsx)(ey, {
                children: (0, $.jsx)(Ms, {
                  onClick: () => _((t) => (t === e.id ? null : e.id)),
                  children: g === e.id ? `Hide document` : `Open document`,
                }),
              }),
              g === e.id
                ? (0, $.jsxs)(Uv, {
                    xcss: Iy,
                    children: [(0, $.jsx)(`strong`, { children: `Document:` }), ` `, e.document],
                  })
                : null,
            ],
          }),
        },
        {
          key: `vector-${e.id}`,
          content: (0, $.jsxs)(ny, {
            space: `space.100`,
            children: [
              (0, $.jsx)(ey, {
                children: (0, $.jsx)(Ms, {
                  onClick: () => y((t) => (t === e.id ? null : e.id)),
                  children: v === e.id ? `Hide vector` : `Open vector`,
                }),
              }),
              v === e.id
                ? (0, $.jsxs)(Uv, {
                    xcss: Iy,
                    children: [
                      (0, $.jsx)(`strong`, { children: `Vector:` }),
                      ` [`,
                      e.embedding.join(`, `),
                      `]`,
                    ],
                  })
                : null,
            ],
          }),
        },
      ],
    }));
  return (0, $.jsx)(Uv, {
    padding: `space.300`,
    xcss: Py,
    children: (0, $.jsxs)(ny, {
      space: `space.300`,
      children: [
        (0, $.jsx)(`h2`, { children: `TiDB Vector Example (backend embeddings)` }),
        (0, $.jsxs)(b_, {
          id: `vector-tabs`,
          selected: e,
          onChange: (e) => t(e),
          children: [
            (0, $.jsxs)(D_, {
              children: [
                (0, $.jsx)(T_, { children: `Add documents` }),
                (0, $.jsx)(T_, { children: `AI(Vector) search` }),
              ],
            }),
            (0, $.jsx)(S_, {
              children: (0, $.jsx)(Uv, {
                padding: `space.200`,
                xcss: Fy,
                children: (0, $.jsxs)(ny, {
                  space: `space.150`,
                  children: [
                    (0, $.jsx)(`h3`, { children: `Insert document` }),
                    (0, $.jsx)(f_, {
                      value: n,
                      maxLength: 255,
                      placeholder: `Title`,
                      onChange: (e) => r(e.target.value),
                    }),
                    (0, $.jsx)($g, {
                      value: i,
                      maxLength: S,
                      minimumRows: 8,
                      resize: `vertical`,
                      placeholder: `Document text`,
                      onChange: (e) => a(e.target.value),
                    }),
                    (0, $.jsxs)(Uv, { as: `small`, children: [i.length, `/`, S, ` chars`] }),
                    (0, $.jsx)(Uv, {
                      as: `small`,
                      children: `Embedding is computed on the Forge backend from document text.`,
                    }),
                    (0, $.jsxs)(ey, {
                      space: `space.100`,
                      children: [
                        (0, $.jsx)(Ms, {
                          appearance: `primary`,
                          onClick: E,
                          isDisabled: f,
                          children: `Insert`,
                        }),
                        (0, $.jsx)(Ms, { onClick: w, isDisabled: f, children: `Fetch all` }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, $.jsx)(S_, {
              children: (0, $.jsx)(Uv, {
                padding: `space.200`,
                xcss: Fy,
                children: (0, $.jsxs)(ny, {
                  space: `space.150`,
                  children: [
                    (0, $.jsx)(`h3`, { children: `AI(Vector) search` }),
                    (0, $.jsx)($g, {
                      value: o,
                      maxLength: S,
                      minimumRows: 6,
                      resize: `vertical`,
                      placeholder: `Query text`,
                      onChange: (e) => s(e.target.value),
                    }),
                    (0, $.jsxs)(Uv, { as: `small`, children: [o.length, `/`, S, ` chars`] }),
                    (0, $.jsx)(Uv, {
                      as: `small`,
                      children: `Search runs on the backend: your text is embedded server-side.`,
                    }),
                    (0, $.jsx)(ey, {
                      space: `space.100`,
                      children: (0, $.jsx)(Ms, {
                        appearance: `primary`,
                        onClick: D,
                        isDisabled: f,
                        children: `Search`,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        m
          ? (0, $.jsx)(Ay, {
              appearance: `information`,
              children: (0, $.jsx)(`p`, { children: m }),
            })
          : null,
        (0, $.jsxs)(Uv, {
          as: `section`,
          children: [
            (0, $.jsx)(`h3`, { children: `Results` }),
            c.length > 0
              ? (0, $.jsx)(Lg, { head: O, rows: k, rowsPerPage: 10, defaultPage: 1 })
              : null,
            u.length > 0
              ? (0, $.jsx)(Lg, { head: A, rows: j, rowsPerPage: 10, defaultPage: 1 })
              : null,
          ],
        }),
      ],
    }),
  });
}
var Ry = (0, s().createRoot)(document.getElementById(`root`)),
  zy = () => {
    Ry.render((0, $.jsx)(Ly, {}));
  };
Ny.view.theme
  .enable()
  .then(() => {
    zy();
  })
  .catch((e) => {
    (console.error(e.message), zy());
  });
export {
  Y as C,
  z as E,
  X as S,
  oi as T,
  ou as _,
  Hu as a,
  dc as b,
  zu as c,
  Pu as d,
  Ru as f,
  Z as g,
  _u as h,
  ld as i,
  Iu as l,
  hu as m,
  mf as n,
  Lu as o,
  Mu as p,
  cd as r,
  Bu as s,
  hf as t,
  Fu as u,
  Pl as v,
  U as w,
  sc as x,
  pc as y,
};
