const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./iframe-resizer-BWob_Ceh.js",
      "./rolldown-runtime-COnpUsM8.js",
      "./custom-theme-fcrqexx0.js",
      "./custom-theme-loading-utils-C8FY6PMf.js",
      "./client-core-vendor-BDdbfQD4.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, r, t as i } from "./rolldown-runtime-COnpUsM8.js";
import { n as a, r as o, t as s } from "./react-dom-vendor-DD8-Uyz5.js";
import { t as c } from "./lodash-vendor-DVWR8zLq.js";
import {
  A as l,
  B as u,
  C as d,
  D as f,
  E as p,
  F as m,
  I as h,
  L as g,
  M as _,
  N as v,
  O as y,
  P as b,
  R as x,
  S,
  T as C,
  V as w,
  _ as T,
  b as E,
  d as D,
  g as O,
  h as k,
  i as A,
  j,
  k as M,
  m as N,
  t as ee,
  v as te,
  w as P,
  x as ne,
  y as re,
  z as ie,
} from "./custom-theme-loading-utils-C8FY6PMf.js";
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
var F = e(o()),
  I = r({
    __addDisposableResource: () => Ae,
    __assign: () => Pe,
    __asyncDelegator: () => Ce,
    __asyncGenerator: () => Se,
    __asyncValues: () => we,
    __await: () => xe,
    __awaiter: () => pe,
    __classPrivateFieldGet: () => De,
    __classPrivateFieldIn: () => ke,
    __classPrivateFieldSet: () => Oe,
    __createBinding: () => Fe,
    __decorate: () => L,
    __disposeResources: () => je,
    __esDecorate: () => ce,
    __exportStar: () => he,
    __extends: () => ae,
    __generator: () => me,
    __importDefault: () => Ee,
    __importStar: () => R,
    __makeTemplateObject: () => Te,
    __metadata: () => fe,
    __param: () => se,
    __propKey: () => ue,
    __read: () => _e,
    __rest: () => oe,
    __rewriteRelativeImportExtension: () => Me,
    __runInitializers: () => le,
    __setFunctionName: () => de,
    __spread: () => ve,
    __spreadArray: () => be,
    __spreadArrays: () => ye,
    __values: () => ge,
    default: () => ze,
  });
function ae(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  Ne(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function oe(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function L(e, t, n, r) {
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
function se(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function ce(e, t, n, r, i, a) {
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
function le(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function ue(e) {
  return typeof e == `symbol` ? e : `${e}`;
}
function de(e, t, n) {
  return (
    typeof t == `symbol` && (t = t.description ? `[${t.description}]` : ``),
    Object.defineProperty(e, `name`, { configurable: !0, value: n ? `${n} ${t}` : t })
  );
}
function fe(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function pe(e, t, n, r) {
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
function me(e, t) {
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
function he(e, t) {
  for (var n in e) n !== `default` && !Object.prototype.hasOwnProperty.call(t, n) && Fe(t, e, n);
}
function ge(e) {
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
function _e(e, t) {
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
function ve() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_e(arguments[t]));
  return e;
}
function ye() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
  return r;
}
function be(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function xe(e) {
  return this instanceof xe ? ((this.v = e), this) : new xe(e);
}
function Se(e, t, n) {
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
    e.value instanceof xe ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function Ce(e) {
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
          return (n = !n) ? { value: xe(e[r](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function we(e) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof ge == `function` ? ge(e) : e[Symbol.iterator]()),
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
function Te(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, `raw`, { value: t }) : (e.raw = t), e);
}
function R(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = Le(e), r = 0; r < n.length; r++) n[r] !== `default` && Fe(t, e, n[r]);
  return (Ie(t, e), t);
}
function Ee(e) {
  return e && e.__esModule ? e : { default: e };
}
function De(e, t, n, r) {
  if (n === `a` && !r) throw TypeError(`Private accessor was defined without a getter`);
  if (typeof t == `function` ? e !== t || !r : !t.has(e))
    throw TypeError(`Cannot read private member from an object whose class did not declare it`);
  return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e);
}
function Oe(e, t, n, r, i) {
  if (r === `m`) throw TypeError(`Private method is not writable`);
  if (r === `a` && !i) throw TypeError(`Private accessor was defined without a setter`);
  if (typeof t == `function` ? e !== t || !i : !t.has(e))
    throw TypeError(`Cannot write private member to an object whose class did not declare it`);
  return (r === `a` ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
}
function ke(e, t) {
  if (t === null || (typeof t != `object` && typeof t != `function`))
    throw TypeError(`Cannot use 'in' operator on non-object`);
  return typeof e == `function` ? t === e : e.has(t);
}
function Ae(e, t, n) {
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
function je(e) {
  function t(t) {
    ((e.error = e.hasError ? new Re(t, e.error, `An error was suppressed during disposal.`) : t),
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
function Me(e, t) {
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
var Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  z = n(() => {
    ((Ne = function (e, t) {
      return (
        (Ne =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        Ne(e, t)
      );
    }),
      (Pe = function () {
        return (
          (Pe =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Pe.apply(this, arguments)
        );
      }),
      (Fe = Object.create
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
      (Ie = Object.create
        ? function (e, t) {
            Object.defineProperty(e, `default`, { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
      (Le = function (e) {
        return (
          (Le =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            }),
          Le(e)
        );
      }),
      (Re =
        typeof SuppressedError == `function`
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return ((r.name = `SuppressedError`), (r.error = e), (r.suppressed = t), r);
            }),
      (ze = {
        __extends: ae,
        __assign: Pe,
        __rest: oe,
        __decorate: L,
        __param: se,
        __esDecorate: ce,
        __runInitializers: le,
        __propKey: ue,
        __setFunctionName: de,
        __metadata: fe,
        __awaiter: pe,
        __generator: me,
        __createBinding: Fe,
        __exportStar: he,
        __values: ge,
        __read: _e,
        __spread: ve,
        __spreadArrays: ye,
        __spreadArray: be,
        __await: xe,
        __asyncGenerator: Se,
        __asyncDelegator: Ce,
        __asyncValues: we,
        __makeTemplateObject: Te,
        __importStar: R,
        __importDefault: Ee,
        __classPrivateFieldGet: De,
        __classPrivateFieldSet: Oe,
        __classPrivateFieldIn: ke,
        __addDisposableResource: Ae,
        __disposeResources: je,
        __rewriteRelativeImportExtension: Me,
      }));
  }),
  Be = i((e) => {
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
  B = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BridgeAPIError = void 0),
      (e.BridgeAPIError = class extends Error {}));
  }),
  V = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getCallBridge = void 0));
    var t = B();
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
  Ve = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.withRateLimiter = void 0));
    var t = B();
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
  He = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.makeInvoke = e.invoke = void 0));
    var t = V(),
      n = B(),
      r = Ve(),
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
  Ue = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (z(), t(I)).__exportStar(He(), e));
  }),
  We = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._invokeEndpointFn = e.InvokeType = void 0));
    var t = V(),
      n = B(),
      r = Ve(),
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
  Ge = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeRemote = void 0));
    var t = We();
    e.invokeRemote = (e) => (0, t._invokeEndpointFn)(t.InvokeType.REMOTE)(e);
  }),
  Ke = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeService = void 0));
    var t = We();
    e.invokeService = (e) => (0, t._invokeEndpointFn)(t.InvokeType.SERVICE)(e);
  }),
  qe = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (z(), t(I));
    (n.__exportStar(Ge(), e), n.__exportStar(Ke(), e));
  }),
  Je = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.submit = void 0));
    var t = V(),
      n = B(),
      r = (0, t.getCallBridge)();
    e.submit = async (e) => {
      if ((await r(`submit`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not submittable.`);
    };
  }),
  Ye = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.close = void 0));
    var t = V(),
      n = B(),
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
  Xe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.open = void 0));
    var t = V(),
      n = B(),
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
  Ze = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.refresh = void 0));
    var t = V(),
      n = B(),
      r = (0, t.getCallBridge)();
    e.refresh = async (e) => {
      if ((await r(`refresh`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not refreshable.`);
    };
  }),
  Qe = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.createHistory = void 0));
    var t = (0, V().getCallBridge)();
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
  $e = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FORGE_SUPPORTED_LOCALE_CODES = e.I18N_BUNDLE_FOLDER_NAME = e.I18N_INFO_FILE_NAME = void 0),
      (e.I18N_INFO_FILE_NAME = `i18n-info.json`),
      (e.I18N_BUNDLE_FOLDER_NAME = `__LOCALES__`),
      (e.FORGE_SUPPORTED_LOCALE_CODES =
        `zh-CN.zh-TW.cs-CZ.da-DK.nl-NL.en-US.en-GB.et-EE.fi-FI.fr-FR.de-DE.hu-HU.is-IS.it-IT.ja-JP.ko-KR.no-NO.pl-PL.pt-BR.pt-PT.ro-RO.ru-RU.sk-SK.tr-TR.es-ES.sv-SE`.split(
          `.`,
        )));
  }),
  et = i((e) => {
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
  tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
    var n = (z(), t(I)).__importDefault(c());
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
  nt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Translator = void 0));
    var t = tt();
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
  rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.ensureLocale = void 0));
    var t = $e(),
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
  it = i((e) => {
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
  at = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getI18nSupportedModuleEntries =
        e.extractI18nPropertiesFromModules =
        e.extractI18nKeysFromModules =
        e.getTranslationValue =
          void 0));
    var n = (z(), t(I));
    (n.__exportStar($e(), e),
      n.__exportStar(et(), e),
      n.__exportStar(nt(), e),
      n.__exportStar(rt(), e));
    var r = tt();
    Object.defineProperty(e, `getTranslationValue`, {
      enumerable: !0,
      get: function () {
        return r.getTranslationValue;
      },
    });
    var i = it();
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
      n.__exportStar(at(), e));
  }),
  st = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getContext = void 0));
    var t = V(),
      n = ot(),
      r = (0, t.getCallBridge)();
    e.getContext = async () => {
      let e = await r(`getContext`),
        t = e?.locale;
      return (t && (e.locale = (0, n.ensureLocale)(t) ?? t), e);
    };
  }),
  ct = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.changeWindowTitle = void 0));
    var t = V(),
      n = B(),
      r = (0, t.getCallBridge)();
    e.changeWindowTitle = async (e) => {
      try {
        await r(`changeWindowTitle`, e);
      } catch {
        throw new n.BridgeAPIError(`the window title wasn't changed due to error.`);
      }
    };
  }),
  lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.theme = void 0));
    var t = (0, V().getCallBridge)();
    e.theme = { enable: () => t(`enableTheming`) };
  }),
  ut = i((e) => {
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
  dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.containsSerialisedBlobs =
        e.containsBlobs =
        e.deserialiseBlobsInPayload =
        e.serialiseBlobsInPayload =
          void 0));
    var t = ut(),
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
  ft = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.events = void 0));
    var t = V(),
      n = dt(),
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
  pt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.emitReadyEvent = void 0));
    var t = ft(),
      n = Lt(),
      r = (0, V().getCallBridge)(),
      i = `EXTENSION_READY`;
    e.emitReadyEvent = async () => {
      let e = await n.view.getContext();
      await t.events.emit(i, { localId: e.localId });
      try {
        await r(`emitReadyEvent`);
      } catch {}
    };
  }),
  mt,
  ht,
  gt,
  _t,
  vt = n(() => {
    ((mt = `modulepreload`),
      (ht = function (e, t) {
        return new URL(e, t).href;
      }),
      (gt = {}),
      (_t = function (e, t, n) {
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
              if (((t = ht(t, n)), t in gt)) return;
              gt[t] = !0;
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
                ((o.rel = r ? `stylesheet` : mt),
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
  yt = i((e) => {
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
  bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i));
  }),
  xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(bt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      return typeof e == `string` && t.default.test(e);
    }
    e.default = r;
  }),
  St = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.unsafeStringify = i));
    var t = n(xt());
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
  Ct = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(yt()),
      n = St();
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
  wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(xt());
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
  Tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.URL = e.DNS = void 0),
      (e.default = s));
    var t = St(),
      n = r(wt());
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
  Et = i((e) => {
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
  Dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Tt()),
      n = r(Et());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v3`, 48, n.default);
  }),
  Ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = {
        randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      }));
  }),
  kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = i(Ot()),
      n = i(yt()),
      r = St();
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
  At = i((e) => {
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
  jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Tt()),
      n = r(At());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v5`, 80, n.default);
  }),
  Mt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = `00000000-0000-0000-0000-000000000000`));
  }),
  Nt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(xt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      if (!(0, t.default)(e)) throw TypeError(`Invalid UUID`);
      return parseInt(e.slice(14, 15), 16);
    }
    e.default = r;
  }),
  Pt = i((e) => {
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
    var t = u(Ct()),
      n = u(Dt()),
      r = u(kt()),
      i = u(jt()),
      a = u(Mt()),
      o = u(Nt()),
      s = u(xt()),
      c = u(St()),
      l = u(wt());
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }),
  Ft = i((t) => {
    (vt(),
      Object.defineProperty(t, `__esModule`, { value: !0 }),
      (t.createAdfRendererIframeProps = void 0));
    var n = Pt();
    t.createAdfRendererIframeProps = async (t, r) => {
      let i = await _t(
          () => import(`./iframe-resizer-BWob_Ceh.js`).then((t) => e(t.default)),
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
  It = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.onClose = void 0));
    var t = V(),
      n = B(),
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
  Lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.view = void 0));
    var t = Je(),
      n = Ye(),
      r = Xe(),
      i = Ze(),
      a = Qe(),
      o = st(),
      s = ct(),
      c = lt(),
      l = pt(),
      u = Ft(),
      d = It();
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
  Rt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (z(), t(I)).__exportStar(Lt(), e));
  }),
  zt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.router = void 0));
    var t = (0, V().getCallBridge)();
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
  Bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (z(), t(I)).__exportStar(zt(), e));
  }),
  Vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Modal = void 0));
    var t = V(),
      n = B(),
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
  Ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (z(), t(I)).__exportStar(Vt(), e));
  }),
  Ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.productFetchApi = e.remoteFetchApi = void 0));
    var t = ut(),
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
  Wt = i((e) => {
    var t;
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.requestRemote = e.requestBitbucket = e.requestJira = e.requestConfluence = void 0));
    var n = V(),
      r = Ut();
    ((t = (0, r.productFetchApi)((0, n.getCallBridge)())),
      (e.requestConfluence = t.requestConfluence),
      (e.requestJira = t.requestJira),
      (e.requestBitbucket = t.requestBitbucket),
      (e.requestRemote = (0, r.remoteFetchApi)((0, n.getCallBridge)()).requestRemote));
  }),
  Gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = V(),
      n = B(),
      r = (0, t.getCallBridge)();
    e.showFlag = (e) => {
      if (!e.id) throw new n.BridgeAPIError(`"id" must be defined in flag options`);
      let t = r(`showFlag`, { ...e, type: e.type ?? `info` });
      return { close: async () => (await t, r(`closeFlag`, { id: e.id })) };
    };
  }),
  Kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = Gt();
    Object.defineProperty(e, `showFlag`, {
      enumerable: !0,
      get: function () {
        return t.showFlag;
      },
    });
  }),
  qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (z(), t(I)).__exportStar(ft(), e));
  }),
  Jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.realtime = void 0));
    var t = (0, V().getCallBridge)();
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
  Yt = i((e) => {
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
  Xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
    var t = Jt();
    Object.defineProperty(e, `realtime`, {
      enumerable: !0,
      get: function () {
        return t.realtime;
      },
    });
    var n = Yt();
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
  Zt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
    var t = V(),
      n = B(),
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
  Qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.isEnabled = void 0));
    var t = (0, V().getCallBridge)();
    e.isEnabled = () => t(`isRovoEnabled`);
  }),
  $t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.rovo = void 0));
    var t = Zt(),
      n = Qt();
    e.rovo = { open: t.open, isEnabled: n.isEnabled };
  }),
  en = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (z(), t(I)).__exportStar($t(), e));
  }),
  tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createTranslationFunction = e.getTranslations = e.resetTranslationsCache = void 0));
    var t = ot(),
      n = Rt(),
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
  nn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.permissions = void 0));
    var t = (0, V().getCallBridge)();
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
  rn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.parseUrl = void 0));
    function t(e) {
      let t = e.match(/^(.*?:)/)?.[0] ?? `https:`,
        n = e.replace(t, ``).replace(/^\/*/, ``).replace(/^\\*/, ``).split(`?`)[0].split(`#`)[0],
        r = n.split(`/`)[0];
      return { protocol: t, hostname: r, pathname: n.slice(r.length) || `/` };
    }
    e.parseUrl = t;
  }),
  an = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getEgressesBasedOnToggles =
        e.sortAndGroupEgressPermissionsByDomain =
        e.EgressCategory =
        e.EgressType =
        e.globToRegex =
          void 0));
    var t = rn();
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
  on = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EgressFilteringService = void 0));
    var t = rn(),
      n = an();
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
  sn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (z(), t(I));
    (n.__exportStar(on(), e), n.__exportStar(rn(), e), n.__exportStar(an(), e));
  }),
  cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (z(), t(I)).__exportStar(sn(), e));
  }),
  ln = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkPermissions = e.createPermissionUtils = void 0));
    var t = cn(),
      n = Rt();
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
  un = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (z(), t(I));
    (n.__exportStar(nn(), e), n.__exportStar(ln(), e));
  }),
  dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = `Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.`));
  }),
  fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkRestrictedEnvironment = void 0));
    var t = B(),
      n = Rt(),
      r = dn();
    e.checkRestrictedEnvironment = async () => {
      let { environmentType: e } = await n.view.getContext();
      if (e === `PRODUCTION`)
        throw new t.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  }),
  pn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.upload = e.createUploadPromises = void 0));
    var t = Ue(),
      n = B(),
      r = fn(),
      i = (0, V().getCallBridge)(),
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
  mn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.deleteObjects = void 0));
    var t = Ue(),
      n = B(),
      r = fn(),
      i = (0, V().getCallBridge)();
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
  hn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.download = void 0));
    var t = Ue(),
      n = B(),
      r = fn(),
      i = (0, V().getCallBridge)();
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
  gn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getMetadata = void 0));
    var t = Ue(),
      n = B(),
      r = fn(),
      i = (0, V().getCallBridge)();
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
  _n = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createUploadPromises = e.objectStore = void 0));
    var t = pn();
    Object.defineProperty(e, `createUploadPromises`, {
      enumerable: !0,
      get: function () {
        return t.createUploadPromises;
      },
    });
    var n = mn(),
      r = hn(),
      i = gn();
    e.objectStore = {
      upload: t.upload,
      download: r.download,
      getMetadata: i.getMetadata,
      delete: n.deleteObjects,
    };
  }),
  vn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (z(), t(I));
    (n.__exportStar(_n(), e), n.__exportStar(dn(), e));
  }),
  yn = i((e) => {
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
  bn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FeatureFlagEventType = void 0),
      (function (e) {
        e.CHECKFLAG = `checkFlag`;
      })((e.FeatureFlagEventType ||= {})));
  }),
  xn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.trackFeatureFlagEvent = void 0));
    var t = V(),
      n = B(),
      r = Ve(),
      i = bn(),
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
  Sn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.initFeatureFlags = void 0));
    var t = V(),
      n = B(),
      r = Ve(),
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
  Cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = yn(),
      n = xn(),
      r = Sn(),
      i = bn();
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
  wn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = Cn();
    Object.defineProperty(e, `FeatureFlags`, {
      enumerable: !0,
      get: function () {
        return t.FeatureFlags;
      },
    });
  }),
  Tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.i18n = e.NavigationTarget = void 0));
    var n = (z(), t(I)),
      r = Be();
    (Object.defineProperty(e, `NavigationTarget`, {
      enumerable: !0,
      get: function () {
        return r.NavigationTarget;
      },
    }),
      n.__exportStar(Ue(), e),
      n.__exportStar(qe(), e),
      n.__exportStar(Rt(), e),
      n.__exportStar(Bt(), e),
      n.__exportStar(Ht(), e),
      n.__exportStar(Wt(), e),
      n.__exportStar(Kt(), e),
      n.__exportStar(qt(), e),
      n.__exportStar(Xt(), e),
      n.__exportStar(en(), e),
      (e.i18n = n.__importStar(tn())),
      n.__exportStar(un(), e),
      n.__exportStar(vn(), e),
      n.__exportStar(wn(), e));
  });
function En() {
  return (
    (En = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    En.apply(null, arguments)
  );
}
function Dn() {}
var On = !1;
function kn(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function An(e) {
  var t = document.createElement(`style`);
  return (
    t.setAttribute(`data-emotion`, e.key),
    e.nonce !== void 0 && t.setAttribute(`nonce`, e.nonce),
    t.appendChild(document.createTextNode(``)),
    t.setAttribute(`data-s`, ``),
    t
  );
}
var jn = (function () {
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
        (this.isSpeedy = e.speedy === void 0 ? !On : e.speedy),
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(An(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = kn(t);
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
  Mn = `-ms-`,
  Nn = `-moz-`,
  H = `-webkit-`,
  Pn = `comm`,
  Fn = `rule`,
  In = `decl`,
  Ln = `@import`,
  Rn = `@keyframes`,
  zn = `@layer`,
  Bn = Math.abs,
  Vn = String.fromCharCode,
  Hn = Object.assign;
function Un(e, t) {
  return W(e, 0) ^ 45
    ? (((((((t << 2) ^ W(e, 0)) << 2) ^ W(e, 1)) << 2) ^ W(e, 2)) << 2) ^ W(e, 3)
    : 0;
}
function Wn(e) {
  return e.trim();
}
function Gn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, n) {
  return e.replace(t, n);
}
function Kn(e, t) {
  return e.indexOf(t);
}
function W(e, t) {
  return e.charCodeAt(t) | 0;
}
function qn(e, t, n) {
  return e.slice(t, n);
}
function Jn(e) {
  return e.length;
}
function Yn(e) {
  return e.length;
}
function Xn(e, t) {
  return (t.push(e), e);
}
function Zn(e, t) {
  return e.map(t).join(``);
}
var Qn = 1,
  $n = 1,
  er = 0,
  tr = 0,
  G = 0,
  nr = ``;
function rr(e, t, n, r, i, a, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: Qn,
    column: $n,
    length: o,
    return: ``,
  };
}
function ir(e, t) {
  return Hn(rr(``, null, null, ``, null, null, 0), e, { length: -e.length }, t);
}
function ar() {
  return G;
}
function or() {
  return ((G = tr > 0 ? W(nr, --tr) : 0), $n--, G === 10 && (($n = 1), Qn--), G);
}
function sr() {
  return ((G = tr < er ? W(nr, tr++) : 0), $n++, G === 10 && (($n = 1), Qn++), G);
}
function cr() {
  return W(nr, tr);
}
function lr() {
  return tr;
}
function ur(e, t) {
  return qn(nr, e, t);
}
function dr(e) {
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
function fr(e) {
  return ((Qn = $n = 1), (er = Jn((nr = e))), (tr = 0), []);
}
function pr(e) {
  return ((nr = ``), e);
}
function mr(e) {
  return Wn(ur(tr - 1, _r(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hr(e) {
  for (; (G = cr()) && G < 33; ) sr();
  return dr(e) > 2 || dr(G) > 3 ? `` : ` `;
}
function gr(e, t) {
  for (; --t && sr() && !(G < 48 || G > 102 || (G > 57 && G < 65) || (G > 70 && G < 97)); );
  return ur(e, lr() + (t < 6 && cr() == 32 && sr() == 32));
}
function _r(e) {
  for (; sr(); )
    switch (G) {
      case e:
        return tr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _r(G);
        break;
      case 40:
        e === 41 && _r(e);
        break;
      case 92:
        sr();
        break;
    }
  return tr;
}
function vr(e, t) {
  for (; sr() && e + G !== 57 && !(e + G === 84 && cr() === 47); );
  return `/*` + ur(t, tr - 1) + `*` + Vn(e === 47 ? e : sr());
}
function yr(e) {
  for (; !dr(cr()); ) sr();
  return ur(e, tr);
}
function br(e) {
  return pr(xr(``, null, null, null, [``], (e = fr(e)), 0, [0], e));
}
function xr(e, t, n, r, i, a, o, s, c) {
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
    switch (((m = v), (v = sr()))) {
      case 40:
        if (m != 108 && W(C, d - 1) == 58) {
          Kn((C += U(mr(v), `&`, `&\f`)), `&\f`) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += mr(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += hr(m);
        break;
      case 92:
        C += gr(lr() - 1, 7);
        continue;
      case 47:
        switch (cr()) {
          case 42:
          case 47:
            Xn(Cr(vr(sr(), lr()), t, n), c);
            break;
          default:
            C += `/`;
        }
        break;
      case 123 * h:
        s[l++] = Jn(C) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            (_ == -1 && (C = U(C, /\f/g, ``)),
              p > 0 &&
                Jn(C) - d &&
                Xn(p > 32 ? wr(C + `;`, r, n, d - 1) : wr(U(C, ` `, ``) + `;`, r, n, d - 2), c));
            break;
          case 59:
            C += `;`;
          default:
            if ((Xn((S = Sr(C, t, n, l, u, i, s, y, (b = []), (x = []), d)), a), v === 123))
              if (u === 0) xr(C, t, S, S, b, a, d, s, x);
              else
                switch (f === 99 && W(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xr(
                      e,
                      S,
                      S,
                      r && Xn(Sr(e, S, S, 0, 0, i, s, y, i, (b = []), d), x),
                      i,
                      x,
                      d,
                      s,
                      r ? b : x,
                    );
                    break;
                  default:
                    xr(C, S, S, S, [``], x, 0, s, x);
                }
        }
        ((l = u = p = 0), (h = _ = 1), (y = C = ``), (d = o));
        break;
      case 58:
        ((d = 1 + Jn(C)), (p = m));
      default:
        if (h < 1) {
          if (v == 123) --h;
          else if (v == 125 && h++ == 0 && or() == 125) continue;
        }
        switch (((C += Vn(v)), v * h)) {
          case 38:
            _ = u > 0 ? 1 : ((C += `\f`), -1);
            break;
          case 44:
            ((s[l++] = (Jn(C) - 1) * _), (_ = 1));
            break;
          case 64:
            (cr() === 45 && (C += mr(sr())), (f = cr()), (u = d = Jn((y = C += yr(lr())))), v++);
            break;
          case 45:
            m === 45 && Jn(C) == 2 && (h = 0);
        }
    }
  return a;
}
function Sr(e, t, n, r, i, a, o, s, c, l, u) {
  for (var d = i - 1, f = i === 0 ? a : [``], p = Yn(f), m = 0, h = 0, g = 0; m < r; ++m)
    for (var _ = 0, v = qn(e, d + 1, (d = Bn((h = o[m])))), y = e; _ < p; ++_)
      (y = Wn(h > 0 ? f[_] + ` ` + v : U(v, /&\f/g, f[_]))) && (c[g++] = y);
  return rr(e, t, n, i === 0 ? Fn : s, c, l, u);
}
function Cr(e, t, n) {
  return rr(e, t, n, Pn, Vn(ar()), qn(e, 2, -2), 0);
}
function wr(e, t, n, r) {
  return rr(e, t, n, In, qn(e, 0, r), qn(e, r + 1, -1), r);
}
function Tr(e, t) {
  for (var n = ``, r = Yn(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ``;
  return n;
}
function Er(e, t, n, r) {
  switch (e.type) {
    case zn:
      if (e.children.length) break;
    case Ln:
    case In:
      return (e.return = e.return || e.value);
    case Pn:
      return ``;
    case Rn:
      return (e.return = e.value + `{` + Tr(e.children, r) + `}`);
    case Fn:
      e.value = e.props.join(`,`);
  }
  return Jn((n = Tr(e.children, r))) ? (e.return = e.value + `{` + n + `}`) : ``;
}
function Dr(e) {
  var t = Yn(e);
  return function (n, r, i, a) {
    for (var o = ``, s = 0; s < t; s++) o += e[s](n, r, i, a) || ``;
    return o;
  };
}
function Or(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function kr(e) {
  var t = Object.create(null);
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n]);
  };
}
var Ar = function (e, t, n) {
    for (var r = 0, i = 0; (r = i), (i = cr()), r === 38 && i === 12 && (t[n] = 1), !dr(i); ) sr();
    return ur(e, tr);
  },
  jr = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (dr(r)) {
        case 0:
          (r === 38 && cr() === 12 && (t[n] = 1), (e[n] += Ar(tr - 1, t, n)));
          break;
        case 2:
          e[n] += mr(r);
          break;
        case 4:
          if (r === 44) {
            ((e[++n] = cr() === 58 ? `&\f` : ``), (t[n] = e[n].length));
            break;
          }
        default:
          e[n] += Vn(r);
      }
    while ((r = sr()));
    return e;
  },
  Mr = function (e, t) {
    return pr(jr(fr(e), t));
  },
  Nr = new WeakMap(),
  Pr = function (e) {
    if (!(e.type !== `rule` || !e.parent || e.length < 1)) {
      for (
        var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
        n.type !== `rule`;
      )
        if (((n = n.parent), !n)) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Nr.get(n)) && !r) {
        Nr.set(e, !0);
        for (var i = [], a = Mr(t, i), o = n.props, s = 0, c = 0; s < a.length; s++)
          for (var l = 0; l < o.length; l++, c++)
            e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + ` ` + a[s];
      }
    }
  },
  Fr = function (e) {
    if (e.type === `decl`) {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ``), (e.value = ``));
    }
  };
function Ir(e, t) {
  switch (Un(e, t)) {
    case 5103:
      return H + `print-` + e + e;
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
      return H + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + Nn + e + Mn + e + e;
    case 6828:
    case 4268:
      return H + e + Mn + e + e;
    case 6165:
      return H + e + Mn + `flex-` + e + e;
    case 5187:
      return H + e + U(e, /(\w+).+(:[^]+)/, H + `box-$1$2` + Mn + `flex-$1$2`) + e;
    case 5443:
      return H + e + Mn + `flex-item-` + U(e, /flex-|-self/, ``) + e;
    case 4675:
      return H + e + Mn + `flex-line-pack` + U(e, /align-content|flex-|-self/, ``) + e;
    case 5548:
      return H + e + Mn + U(e, `shrink`, `negative`) + e;
    case 5292:
      return H + e + Mn + U(e, `basis`, `preferred-size`) + e;
    case 6060:
      return H + `box-` + U(e, `-grow`, ``) + H + e + Mn + U(e, `grow`, `positive`) + e;
    case 4554:
      return H + U(e, /([^-])(transform)/g, `$1` + H + `$2`) + e;
    case 6187:
      return U(U(U(e, /(zoom-|grab)/, H + `$1`), /(image-set)/, H + `$1`), e, ``) + e;
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return (
        U(
          U(e, /(.+:)(flex-)?(.*)/, H + `box-pack:$3` + Mn + `flex-pack:$3`),
          /s.+-b[^;]+/,
          `justify`,
        ) +
        H +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, H + `$1$2`) + e;
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
      if (Jn(e) - 1 - t > 6)
        switch (W(e, t + 1)) {
          case 109:
            if (W(e, t + 4) !== 45) break;
          case 102:
            return (
              U(
                e,
                /(.+:)(.+)-([^]+)/,
                `$1` + H + `$2-$3$1` + Nn + (W(e, t + 3) == 108 ? `$3` : `$2-$3`),
              ) + e
            );
          case 115:
            return ~Kn(e, `stretch`) ? Ir(U(e, `stretch`, `fill-available`), t) + e : e;
        }
      break;
    case 4949:
      if (W(e, t + 1) !== 115) break;
    case 6444:
      switch (W(e, Jn(e) - 3 - (~Kn(e, `!important`) && 10))) {
        case 107:
          return U(e, `:`, `:` + H) + e;
        case 101:
          return (
            U(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              `$1` +
                H +
                (W(e, 14) === 45 ? `inline-` : ``) +
                `box$3$1` +
                H +
                `$2$3$1` +
                Mn +
                `$2box$3`,
            ) + e
          );
      }
      break;
    case 5936:
      switch (W(e, t + 11)) {
        case 114:
          return H + e + Mn + U(e, /[svh]\w+-[tblr]{2}/, `tb`) + e;
        case 108:
          return H + e + Mn + U(e, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e;
        case 45:
          return H + e + Mn + U(e, /[svh]\w+-[tblr]{2}/, `lr`) + e;
      }
      return H + e + Mn + e + e;
  }
  return e;
}
var Lr = [
    function (e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case In:
            e.return = Ir(e.value, e.length);
            break;
          case Rn:
            return Tr([ir(e, { value: U(e.value, `@`, `@` + H) })], r);
          case Fn:
            if (e.length)
              return Zn(e.props, function (t) {
                switch (Gn(t, /(::plac\w+|:read-\w+)/)) {
                  case `:read-only`:
                  case `:read-write`:
                    return Tr([ir(e, { props: [U(t, /:(read-\w+)/, `:` + Nn + `$1`)] })], r);
                  case `::placeholder`:
                    return Tr(
                      [
                        ir(e, { props: [U(t, /:(plac\w+)/, `:` + H + `input-$1`)] }),
                        ir(e, { props: [U(t, /:(plac\w+)/, `:` + Nn + `$1`)] }),
                        ir(e, { props: [U(t, /:(plac\w+)/, Mn + `input-$1`)] }),
                      ],
                      r,
                    );
                }
                return ``;
              });
        }
    },
  ],
  Rr = function (e) {
    var t = e.key;
    if (t === `css`) {
      var n = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
      Array.prototype.forEach.call(n, function (e) {
        e.getAttribute(`data-emotion`).indexOf(` `) !== -1 &&
          (document.head.appendChild(e), e.setAttribute(`data-s`, ``));
      });
    }
    var r = e.stylisPlugins || Lr,
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
      c = [Pr, Fr],
      l,
      u = [
        Er,
        Or(function (e) {
          l.insert(e);
        }),
      ],
      d = Dr(c.concat(r, u)),
      f = function (e) {
        return Tr(br(e), d);
      };
    s = function (e, t, n, r) {
      ((l = n), f(e ? e + `{` + t.styles + `}` : t.styles), r && (p.inserted[t.name] = !0));
    };
    var p = {
      key: t,
      sheet: new jn({
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
  zr = i((e) => {
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
  Br = i((e, t) => {
    t.exports = zr();
  }),
  Vr = i((e, t) => {
    var n = Br(),
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
  Hr = !0;
function Ur(e, t, n) {
  var r = ``;
  return (
    n.split(` `).forEach(function (n) {
      e[n] === void 0 ? n && (r += n + ` `) : t.push(e[n] + `;`);
    }),
    r
  );
}
var Wr = function (e, t, n) {
    var r = e.key + `-` + t.name;
    (n === !1 || Hr === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
  },
  Gr = function (e, t, n) {
    Wr(e, t, n);
    var r = e.key + `-` + t.name;
    if (e.inserted[t.name] === void 0) {
      var i = t;
      do (e.insert(t === i ? `.` + r : ``, i, e.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Kr(e) {
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
var qr = {
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
  Jr = !1,
  Yr = /[A-Z]|^ms/g,
  Xr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Zr = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Qr = function (e) {
    return e != null && typeof e != `boolean`;
  },
  $r = kr(function (e) {
    return Zr(e) ? e : e.replace(Yr, `-$&`).toLowerCase();
  }),
  ei = function (e, t) {
    switch (e) {
      case `animation`:
      case `animationName`:
        if (typeof t == `string`)
          return t.replace(Xr, function (e, t, n) {
            return ((ai = { name: t, styles: n, next: ai }), t);
          });
    }
    return qr[e] !== 1 && !Zr(e) && typeof t == `number` && t !== 0 ? t + `px` : t;
  },
  ti = `Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;
function ni(e, t, n) {
  if (n == null) return ``;
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case `boolean`:
      return ``;
    case `object`:
      var i = n;
      if (i.anim === 1) return ((ai = { name: i.name, styles: i.styles, next: ai }), i.name);
      var a = n;
      if (a.styles !== void 0) {
        var o = a.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((ai = { name: o.name, styles: o.styles, next: ai }), (o = o.next));
        return a.styles + `;`;
      }
      return ri(e, t, n);
    case `function`:
      if (e !== void 0) {
        var s = ai,
          c = n(e);
        return ((ai = s), ni(e, t, c));
      }
      break;
  }
  var l = n;
  if (t == null) return l;
  var u = t[l];
  return u === void 0 ? l : u;
}
function ri(e, t, n) {
  var r = ``;
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += ni(e, t, n[i]) + `;`;
  else
    for (var a in n) {
      var o = n[a];
      if (typeof o != `object`) {
        var s = o;
        t != null && t[s] !== void 0
          ? (r += a + `{` + t[s] + `}`)
          : Qr(s) && (r += $r(a) + `:` + ei(a, s) + `;`);
      } else {
        if (a === `NO_COMPONENT_SELECTOR` && Jr) throw Error(ti);
        if (Array.isArray(o) && typeof o[0] == `string` && (t == null || t[o[0]] === void 0))
          for (var c = 0; c < o.length; c++) Qr(o[c]) && (r += $r(a) + `:` + ei(a, o[c]) + `;`);
        else {
          var l = ni(e, t, o);
          switch (a) {
            case `animation`:
            case `animationName`:
              r += $r(a) + `:` + l + `;`;
              break;
            default:
              r += a + `{` + l + `}`;
          }
        }
      }
    }
  return r;
}
var ii = /label:\s*([^\s;{]+)\s*(;|$)/g,
  ai;
function oi(e, t, n) {
  if (e.length === 1 && typeof e[0] == `object` && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0,
    i = ``;
  ai = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? ((r = !1), (i += ni(n, t, a))) : (i += a[0]);
  for (var o = 1; o < e.length; o++) ((i += ni(n, t, e[o])), r && (i += a[o]));
  ii.lastIndex = 0;
  for (var s = ``, c; (c = ii.exec(i)) !== null; ) s += `-` + c[1];
  return { name: Kr(i) + s, styles: i, next: ai };
}
var si = function (e) {
    return e();
  },
  ci = F.useInsertionEffect ? F.useInsertionEffect : !1,
  li = ci || si;
ci || F.useLayoutEffect;
var ui = F.createContext(typeof HTMLElement < `u` ? Rr({ key: `css` }) : null);
ui.Provider;
var di = function (e) {
    return (0, F.forwardRef)(function (t, n) {
      return e(t, (0, F.useContext)(ui), n);
    });
  },
  fi = F.createContext({}),
  pi = {}.hasOwnProperty,
  mi = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,
  hi = function (e, t) {
    var n = {};
    for (var r in t) pi.call(t, r) && (n[r] = t[r]);
    return ((n[mi] = e), n);
  },
  gi = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Wr(t, n, r),
      li(function () {
        return Gr(t, n, r);
      }),
      null
    );
  },
  _i = di(function (e, t, n) {
    var r = e.css;
    typeof r == `string` && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[mi],
      a = [r],
      o = ``;
    typeof e.className == `string`
      ? (o = Ur(t.registered, a, e.className))
      : e.className != null && (o = e.className + ` `);
    var s = oi(a, void 0, F.useContext(fi));
    o += t.key + `-` + s.name;
    var c = {};
    for (var l in e) pi.call(e, l) && l !== `css` && l !== mi && (c[l] = e[l]);
    return (
      (c.className = o),
      n && (c.ref = n),
      F.createElement(
        F.Fragment,
        null,
        F.createElement(gi, { cache: t, serialized: s, isStringTag: typeof i == `string` }),
        F.createElement(i, c),
      )
    );
  });
Vr();
var vi = function (e, t) {
  var n = arguments;
  if (t == null || !pi.call(t, `css`)) return F.createElement.apply(void 0, n);
  var r = n.length,
    i = Array(r);
  ((i[0] = _i), (i[1] = hi(e, t)));
  for (var a = 2; a < r; a++) i[a] = n[a];
  return F.createElement.apply(null, i);
};
(function (e) {
  var t;
  (function (e) {})((t ||= e.JSX ||= {}));
})((vi ||= {}));
function K() {
  return oi([...arguments]);
}
var yi = function e(t) {
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
function bi(e, t, n) {
  var r = [],
    i = Ur(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var xi = function (e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      li(function () {
        for (var e = 0; e < n.length; e++) Gr(t, n[e], !1);
      }),
      null
    );
  },
  Si = di(function (e, t) {
    var n = [],
      r = function () {
        var e = oi([...arguments], t.registered);
        return (n.push(e), Wr(t, e, !1), t.key + `-` + e.name);
      },
      i = {
        css: r,
        cx: function () {
          var e = [...arguments];
          return bi(t.registered, r, yi(e));
        },
        theme: F.useContext(fi),
      },
      a = e.children(i);
    return F.createElement(
      F.Fragment,
      null,
      F.createElement(xi, { cache: t, serializedArr: n }),
      a,
    );
  });
function Ci(e, t) {
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
function wi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ci(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ci(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Ti = (function () {
  function e(t) {
    var n = this;
    (m(this, e),
      v(this, `_isAnalyticsEvent`, !0),
      v(this, `clone`, function () {
        return new e({ payload: wi({}, n.payload) });
      }),
      (this.payload = t.payload));
  }
  return b(e, [
    {
      key: `update`,
      value: function (e) {
        return (
          typeof e == `function` && (this.payload = e(this.payload)),
          h(e) === `object` && (this.payload = wi(wi({}, this.payload), e)),
          this
        );
      },
    },
  ]);
})();
function Ei(e, t, n) {
  return ((t = M(t)), l(e, Di() ? Reflect.construct(t, n || [], M(e).constructor) : t.apply(e, n)));
}
function Di() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Di = function () {
    return !!e;
  })();
}
function Oi(e, t, n, r) {
  var i = y(M(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var ki = (function (e) {
    function t(e) {
      var n;
      return (
        m(this, t),
        (n = Ei(this, t, [e])),
        v(n, `_isUIAnalyticsEvent`, !0),
        v(n, `clone`, function () {
          return n.hasFired
            ? null
            : new t({
                context: j(n.context),
                handlers: j(n.handlers),
                payload: JSON.parse(JSON.stringify(n.payload)),
              });
        }),
        v(n, `fire`, function (e) {
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
      f(t, e),
      b(t, [
        {
          key: `update`,
          value: function (e) {
            return this.hasFired ? this : Oi(t, `update`, this, 3)([e]);
          },
        },
      ])
    );
  })(Ti),
  Ai = (0, F.createContext)({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  ji = function () {
    return (0, F.useContext)(Ai);
  },
  Mi = function (e) {
    var t = (0, F.useRef)(e);
    return ((t.current = e), t);
  };
function Ni(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Pi(e, t) {
  var n = (0, F.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    r = (0, F.useRef)(!0),
    i = (0, F.useRef)(n),
    a =
      r.current || (t && i.current.inputs && Ni(t, i.current.inputs))
        ? i.current
        : { inputs: t, result: e() };
  return (
    (0, F.useEffect)(
      function () {
        ((r.current = !1), (i.current = a));
      },
      [a],
    ),
    a.result
  );
}
function Fi(e, t) {
  return Pi(function () {
    return e;
  }, t);
}
function Ii() {
  var e = ji();
  return {
    createAnalyticsEvent: Fi(
      function (t) {
        return new ki({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: t,
        });
      },
      [e],
    ),
  };
}
function Li(e, t) {
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
function Ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Li(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Li(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zi(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = Ii().createAnalyticsEvent,
    l = Mi(s),
    u = Mi(t);
  return (0, F.useCallback)(
    function (e) {
      var t = c({
          action: n,
          actionSubject: i || r,
          attributes: { componentName: r, packageName: a, packageVersion: o },
        }),
        s = Ri({ componentName: r, packageName: a, packageVersion: o }, l.current);
      t.context.push(s);
      var d = t.clone();
      (d && d.fire(`atlaskit`), u.current(e, t));
    },
    [n, r, i, a, o, c, l, u],
  );
}
function Bi(e, t) {
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
function Vi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bi(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hi(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = Ii().createAnalyticsEvent,
    c = Mi(o),
    l = Mi(t);
  return (0, F.useCallback)(
    function () {
      var e = s({
          action: n,
          actionSubject: r,
          attributes: { componentName: r, packageName: i, packageVersion: a },
        }),
        t = Vi({ componentName: r, packageName: i, packageVersion: a }, c.current);
      e.context.push(t);
      var o = e.clone();
      (o && o.fire(`atlaskit`), l.current(e));
    },
    [n, r, i, a, s, c, l],
  );
}
function Ui(e, t) {
  var n = (0, F.useRef)(!0);
  (0, F.useEffect)(
    function () {
      (e && n.current && t && e.current && e.current.focus(), (n.current = !1));
    },
    [t, e],
  );
}
var Wi = 2,
  Gi = K({
    outline: `var(--ds-border-width-focused, 2px) solid var(--ds-border-focused, #4688EC)`,
    outlineOffset: Wi,
  }),
  Ki = K({
    outlineColor: `var(--ds-border-focused, #4688EC)`,
    outlineOffset: -Wi,
    outlineStyle: `solid`,
    outlineWidth: `var(--ds-border-width-focused, 2px)`,
  }),
  qi = K({
    "&:focus": Gi,
    "&:focus-visible": Gi,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid` },
    },
  }),
  Ji = K({
    "&:focus": Ki,
    "&:focus-visible": Ki,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid`, outlineOffset: `-1px` },
    },
  }),
  Yi = (0, F.memo)(function (e) {
    var t = e.children,
      n = e.isInset,
      r = e.focus,
      i = r === void 0 ? (n ? Ji : qi) : r === `on` && (n ? Ki : Gi);
    return vi(Si, null, function (e) {
      var n = e.css,
        r = e.cx;
      return F.Children.only(
        i ? (0, F.cloneElement)(t, { className: r([n(i), t.props.className]) }) : t,
      );
    });
  });
Yi.displayName = `FocusRing`;
var Xi = (0, F.createContext)(null);
function Zi(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Qi = 9;
function $i(e) {
  e.keyCode !== Qi && Zi(e);
}
var ea = {
    onMouseDownCapture: Zi,
    onMouseUpCapture: Zi,
    onKeyDownCapture: $i,
    onKeyUpCapture: $i,
    onTouchStartCapture: Zi,
    onTouchEndCapture: Zi,
    onPointerDownCapture: Zi,
    onPointerUpCapture: Zi,
    onClickCapture: Zi,
    onClick: Zi,
  },
  ta = {};
function na(e) {
  return e.isInteractive ? ta : ea;
}
function ra(e) {
  var t = e.spacing;
  return K({
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 1,
    flexShrink: 1,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
  });
}
function ia(e) {
  var t = e.hasOverlay;
  return K({ opacity: +!t, transition: `opacity 0.3s` });
}
function aa(e) {
  var t = e.spacing;
  return K({
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
function q(e) {
  if (!e.length) return;
  if (e.length === 1 && e[0] && !e[0].includes(` `)) return e[0];
  let t = {};
  for (let n of e) {
    if (!n) continue;
    let e = n.split(` `);
    for (let n of e) {
      let e = n.startsWith(`_`) ? n.slice(0, oa) : n;
      t[e] = n;
    }
  }
  let n = ``;
  for (let e in t) n += t[e] + ` `;
  if (n) return n.trimEnd();
}
var oa,
  sa = n(() => {
    oa = 5;
  }),
  ca = n(() => {
    sa();
  }),
  J = n(() => {
    ca();
  });
J();
var la = function (e) {
  var t = e.children,
    n = e.testId,
    r = e.role,
    i = e.id;
  return F.createElement(
    `span`,
    {
      id: i,
      "data-testid": n,
      role: r,
      className: q([
        `_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c`,
      ]),
    },
    t,
  );
};
la.displayName = `VisuallyHidden`;
var ua = function (e) {
    return e && (0, F.isValidElement)(e) && e.type === la;
  },
  da = {
    position: `absolute`,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  fa = [
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
  pa = { "> *": { pointerEvents: `none` } },
  ma = K({
    "--ds--button--new-icon-padding-end": `var(--ds-space-025, 2px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-050, 4px)`,
    marginInlineStart: `var(--ds-space-negative-025, -2px)`,
  }),
  ha = K({
    "--ds--button--new-icon-padding-end": `var(--ds-space-050, 4px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-025, 2px)`,
    marginInlineEnd: `var(--ds-space-negative-025, -2px)`,
  }),
  ga = function (e, t) {
    return !e || ua(e) ? null : t;
  },
  _a = function (e, t) {
    return ua(e) ? e : e ? vi(`span`, { css: t }, e) : null;
  },
  va = F.forwardRef(function (e, t) {
    var n = e.analyticsContext,
      r = e.appearance,
      i = r === void 0 ? `default` : r,
      a = e.autoFocus,
      o = a === void 0 ? !1 : a,
      s = e.buttonCss,
      c = e.children,
      l = e.className,
      u = e.href,
      d = e.component,
      f = d === void 0 ? (u ? `a` : `button`) : d,
      p = e.iconAfter,
      m = e.iconBefore,
      h = e.interactionName,
      _ = e.isDisabled,
      v = _ === void 0 ? !1 : _,
      y = e.isSelected,
      b = y === void 0 ? !1 : y,
      x = e.onBlur,
      S = e.onClick,
      C = S === void 0 ? Dn : S,
      w = e.onFocus,
      T = e.onMouseDown,
      E = T === void 0 ? Dn : T,
      D = e.overlay;
    e.shouldFitContainer;
    var O = e.spacing,
      k = O === void 0 ? `default` : O,
      A = e.tabIndex,
      j = A === void 0 ? 0 : A,
      M = e.type,
      N = M === void 0 ? (u ? void 0 : `button`) : M,
      ee = e.testId,
      te = g(e, fa),
      P = (0, F.useRef)(),
      ne = (0, F.useCallback)(
        function (e) {
          if (((P.current = e), t != null)) {
            if (typeof t == `function`) {
              t(e);
              return;
            }
            t.current = e;
          }
        },
        [P, t],
      );
    Ui(P, o);
    var re = (0, F.useContext)(Xi),
      ie = zi({
        fn: (0, F.useCallback)(
          function (e, t) {
            (re && re.tracePress(h, e.timeStamp), C(e, t));
          },
          [C, re, h],
        ),
        action: `clicked`,
        componentName: `button`,
        packageName: `@atlaskit/button`,
        packageVersion: `23.11.3`,
        analyticsData: n,
      }),
      I = (0, F.useCallback)(
        function (e) {
          (e.preventDefault(), E(e));
        },
        [E],
      );
    (0, F.useEffect)(
      function () {
        var e = P.current;
        v && e && e === document.activeElement && e.blur();
      },
      [v],
    );
    var ae = !!D,
      oe = K(ia({ hasOverlay: ae })),
      L = !v && !ae,
      se = {};
    return (
      (b || v || i === `warning`) &&
        (se = {
          "[data-theme] & circle": {
            stroke: `${b || v ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-warning-inverse, #292A2E)`} !important`,
          },
        }),
      vi(
        Yi,
        null,
        vi(
          f,
          En(
            {},
            te,
            {
              ref: ne,
              className: l,
              css: [s, L ? null : pa],
              "data-has-overlay": ae ? !0 : void 0,
              "data-testid": ee,
              disabled: v,
              href: L ? u : void 0,
              onBlur: x,
              onClick: ie,
              onFocus: w,
              onMouseDown: I,
              tabIndex: v ? -1 : j,
              type: N,
            },
            na({ isInteractive: L }),
          ),
          m ? vi(`span`, { css: [oe, aa({ spacing: k }), ga(c, ma)] }, m) : null,
          _a(c, [oe, ra({ spacing: k })]),
          p ? vi(`span`, { css: [oe, aa({ spacing: k }), ga(c, ha)] }, p) : null,
          D ? vi(`span`, { css: [da, se] }, D) : null,
        ),
      )
    );
  });
function ya(e, t) {
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
function ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ya(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ya(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var xa = 8,
  Sa = [`default`, `primary`, `danger`, `warning`],
  Ca = { default: `${32 / 14}em`, compact: `${24 / 14}em`, none: `auto` },
  wa = { default: Ca.default, compact: Ca.compact, none: `inherit` },
  Ta = { default: `0 ${xa + xa / 4}px`, compact: `0 ${xa + xa / 4}px`, none: `0` },
  Ea = { compact: `0 ${xa / 4}px`, default: `0 ${xa / 4}px`, none: `0` },
  Da = { default: `middle`, compact: `middle`, none: `baseline` },
  Oa = {
    borderRadius: `inherit`,
    inset: `var(--ds-space-0, 0px)`,
    borderStyle: `solid`,
    borderWidth: `var(--ds-border-width, 1px)`,
    pointerEvents: `none`,
    position: `absolute`,
  },
  ka = {
    background: `var(--ds-background-neutral-subtle, #00000000)`,
    color: `var(--ds-text, #292A2E)`,
    "&::after": ba(ba({}, Oa), {}, { content: `""`, borderColor: `var(--ds-border, #0B120E24)` }),
    "&:hover": { background: `var(--ds-background-neutral-hovered, #0B120E24)` },
    "&:active": { background: `var(--ds-background-neutral-pressed, #080F214A)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-neutral-subtle, #00000000)`,
    },
    "&:disabled[disabled]": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:hover": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:active": { background: `var(--ds-background-neutral-subtle, #00000000)` },
  },
  Aa = {
    background: `var(--ds-background-brand-bold, #1868DB)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-brand-bold-hovered, #1558BC)` },
    "&:active": { background: `var(--ds-background-brand-bold-pressed, #144794)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-brand-bold, #1868DB)`,
    },
  },
  ja = {
    background: `transparent`,
    color: `var(--ds-link, #1868DB)`,
    "&:hover": { color: `var(--ds-link, #1868DB)`, textDecoration: `underline` },
    "&:active": { color: `var(--ds-link-pressed, #1558BC)`, textDecoration: `underline` },
  },
  Ma = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": { background: `var(--ds-background-neutral-subtle-hovered, #0515240F)` },
    "&:active": { background: `var(--ds-background-neutral-subtle-pressed, #0B120E24)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: `transparent` },
  },
  Na = {
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
  Pa = {
    background: `var(--ds-background-warning-bold, #FBC828)`,
    color: `var(--ds-text-warning-inverse, #292A2E)`,
    "&:hover": { background: `var(--ds-background-warning-bold-hovered, #FCA700)` },
    "&:active": { background: `var(--ds-background-warning-bold-pressed, #F68909)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-warning-bold, #FBC828)`,
    },
  },
  Fa = {
    background: `var(--ds-background-danger-bold, #C9372C)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-danger-bold-hovered, #AE2E24)` },
    "&:active": { background: `var(--ds-background-danger-bold-pressed, #872821)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-danger-bold, #C9372C)`,
    },
  },
  Ia = {
    background: `var(--ds-background-selected, #E9F2FE)`,
    color: `var(--ds-text-selected, #1868DB)`,
    "&:not([disabled])::after": ba(
      ba({}, Oa),
      {},
      { content: `""`, borderColor: `var(--ds-border-selected, #1868DB)` },
    ),
  },
  La = { '&[data-has-overlay="true"]': { cursor: `default`, textDecoration: `none` } };
function Ra(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return ba(
    ba(
      {
        alignItems: `baseline`,
        borderWidth: 0,
        borderRadius: P(`platform-dst-shape-theme-default`)
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
        height: Ca[n],
        lineHeight: wa[n],
        padding: a ? Ea[n] : Ta[n],
        verticalAlign: Da[n],
        width: i ? `100%` : `auto`,
        justifyContent: `center`,
      },
      r
        ? Ia
        : ba(
            ba(
              ba(
                ba(
                  ba(
                    ba(
                      ba(ba({}, t === `default` && ka), t === `primary` && Aa),
                      t === `link` && ja,
                    ),
                    t === `subtle` && Ma,
                  ),
                  t === `subtle-link` && Na,
                ),
                t === `warning` && Pa,
              ),
              t === `danger` && Fa,
            ),
            {},
            {
              "&[disabled]": {
                color: `var(--ds-text-disabled, #080F214A)`,
                backgroundColor: Sa.includes(t)
                  ? `var(--ds-background-disabled, #17171708)`
                  : `transparent`,
                cursor: `not-allowed`,
                textDecoration: `none`,
                "&:hovered": {
                  backgroundColor: Sa.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
                "&:active": {
                  backgroundColor: Sa.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
              },
            },
            La,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function za(e) {
  var t = e.children,
    n = e.iconBefore,
    r = e.iconAfter;
  return ua(t) ? !0 : t ? !1 : !!((n && !r) || (!n && r));
}
var Ba = [
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
  Va = typeof navigator < `u` && navigator.userAgent.toLowerCase().indexOf(`firefox`) > -1,
  Ha = F.memo(
    F.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `default` : n,
        i = e.children,
        a = e.iconBefore,
        o = e.iconAfter,
        s = e.isSelected,
        c = s === void 0 ? !1 : s,
        l = e.onMouseDown,
        u = l === void 0 ? Dn : l,
        d = e.onMouseUp,
        f = d === void 0 ? Dn : d,
        p = e.shouldFitContainer,
        m = p === void 0 ? !1 : p,
        h = e.spacing,
        _ = h === void 0 ? `default` : h,
        v = g(e, Ba),
        y = za({ children: i, iconBefore: a, iconAfter: o }),
        b = x((0, F.useState)(!1), 2),
        S = b[0],
        C = b[1],
        w = (0, F.useCallback)(
          function (e) {
            (u(e), Va && C(!0));
          },
          [u, C],
        ),
        T = (0, F.useCallback)(
          function (e) {
            (f(e), Va && C(!1));
          },
          [f, C],
        ),
        E = (0, F.useMemo)(
          function () {
            return Ra({
              appearance: r,
              spacing: _,
              isSelected: c,
              shouldFitContainer: m,
              isOnlySingleIcon: y,
            });
          },
          [r, _, c, m, y],
        );
      return F.createElement(
        va,
        En({}, v, {
          ref: t,
          appearance: r,
          buttonCss: E,
          children: i,
          "data-firefox-is-active": S ? !0 : void 0,
          iconAfter: o,
          iconBefore: a,
          isSelected: c,
          onMouseDown: w,
          onMouseUp: T,
          spacing: _,
        }),
      );
    }),
  );
Ha.displayName = `Button`;
var Ua = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
J();
function Wa(e) {
  return e === `inherit` ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-inverse, #FFFFFF)`;
}
var Ga = {
    rotateStyles: `_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o`,
    loadInStyles: `_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw`,
    wrapperStyles: `_1e0c116y _s7n4nkob`,
    circleStyles: `_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz`,
  },
  Ka = typeof window > `u` ? F.useEffect : F.useLayoutEffect,
  qa = F.memo(
    F.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `inherit` : n,
        i = e.delay,
        a = i === void 0 ? 0 : i,
        o = e.interactionName,
        s = e.label,
        c = e.size,
        l = c === void 0 ? `medium` : c,
        u = e.testId,
        d = typeof l == `number` ? l : Ua[l],
        f = `${a}ms`,
        p = Wa(r),
        m = (0, F.useContext)(Xi);
      return (
        Ka(
          function () {
            if (m != null) return m.hold(o);
          },
          [m, o],
        ),
        F.createElement(
          `span`,
          {
            "data-testid": u ? `${u}-wrapper` : `spinner-wrapper`,
            style: { animationDelay: f, width: d, height: d },
            className: q([Ga.wrapperStyles, Ga.rotateStyles]),
          },
          F.createElement(
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
              className: q([Ga.loadInStyles]),
            },
            F.createElement(`circle`, {
              cx: `8`,
              cy: `8`,
              r: `7`,
              style: { stroke: p },
              className: q([Ga.circleStyles]),
            }),
          ),
        )
      );
    }),
  ),
  Ja = {
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
  };
J();
var Ya = [
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
function Xa(e, t) {
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
function Za(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Xa(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xa(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Qa = { invalid: `_msj6gir2`, disabled: `_6up518qt` },
  $a = { componentName: `textField`, packageName: `@atlaskit/textfield`, packageVersion: `8.3.2` },
  eo = {
    standard: `_1h6dby5v _bfhkby5v _syaz1gmx _80om13gf`,
    subtle: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
    none: `_1h6d1j28 _bfhk1j28 _syaz1gmx _80om13gf`,
  },
  to = {
    standard: `_1p9x1v1w _qao9r01l _q433vyy1`,
    subtle: `_1p9x1v1w _qao9r01l _q433vyy1`,
    none: `_1p9x1j28 _qao91j28 _q4333sij`,
  },
  no = {
    standard: `_4cvxrsbi _irr3l4ek`,
    subtle: `_4cvxrsbi _irr3l4ek`,
    none: `_4cvx1j28 _irr31j28`,
  },
  ro = {
    standard: `_1h6drsbi _1dqonqa1 _syazi7uo _80om1kdv _bfhk1j9a _msj6gir2`,
    subtle: `_1h6d1j28 _1dqonqa1 _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
    none: `_1h6d1j28 _1dqoglyw _syazi7uo _80om1kdv _16hg1j28 _msj6gir2`,
  },
  io = { xsmall: 80, small: 160, medium: 240, large: 320, xlarge: 480 },
  ao = function (e) {
    return e ? (e in io ? `${io[e]}px` : `${+e}px`) : `100%`;
  },
  oo = {
    standard: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    subtle: `_1dqonqa1 _1q51e4h9 _85i5e4h9 _bozgidpf _y4tiidpf`,
    none: `_1dqoglyw`,
  },
  so = (0, F.forwardRef)(function (e, t) {
    var n = e.appearance,
      r = n === void 0 ? `standard` : n,
      i = e.className,
      a = e.elemAfterInput,
      o = e.elemBeforeInput,
      s = e.isCompact,
      c = s === void 0 ? !1 : s,
      l = e.isDisabled,
      u = l === void 0 ? !1 : l,
      d = e.isInvalid,
      f = d === void 0 ? !1 : d,
      p = e.isMonospaced,
      m = p === void 0 ? !1 : p,
      _ = e.isReadOnly,
      v = _ === void 0 ? !1 : _,
      y = e.isRequired,
      b = y === void 0 ? !1 : y,
      x = e.name,
      S = e.onBlur,
      C = e.onChange,
      w = e.onFocus,
      T = e.onMouseDown,
      E = e.placeholder,
      D = e.testId,
      O = e.width,
      k = g(e, Ya),
      A = (0, F.useRef)(null),
      j = zi(
        Za(
          {
            fn: function (e) {
              w && w(e);
            },
            action: `focused`,
          },
          $a,
        ),
      ),
      M = zi(
        Za(
          {
            fn: function (e) {
              S && S(e);
            },
            action: `blurred`,
          },
          $a,
        ),
      ),
      N = (0, F.useCallback)(
        function (e) {
          (e.target.tagName !== `INPUT` && e.preventDefault(),
            A && A.current && !u && document.activeElement !== A.current && A.current.focus(),
            T && T(e));
        },
        [T, u],
      ),
      ee = (0, F.useCallback)(
        function (e) {
          ((A.current = e),
            t && (h(t) === `object` && (t.current = e), typeof t == `function` && t(e)));
        },
        [t],
      );
    return F.createElement(
      `div`,
      {
        role: `presentation`,
        "data-disabled": u || void 0,
        "data-invalid": f || void 0,
        "data-ds--text-field--container": !0,
        "data-testid": D && `${D}-container`,
        onMouseDown: N,
        style: { maxWidth: `${ao(O)}` },
        className: q([
          `_16jlkb7n _1o9zkb7n _i0dl1osq _11c8fhey _1reo15vq _18m915vq _v564r5cv _189ee4h9 _1e0c1txw _vchhusvi _4cvr1h6o _1bah1yb4 _lcxv1wug _s7n4jp4b _slp31hna _1tnqfajl`,
          P(`platform-dst-shape-theme-default`) && `_1tnq1qi0`,
          ro[r],
          oo[r],
          !u && to[r],
          !u && no[r],
          u && Qa.disabled,
          u && eo[r],
          f && Qa.invalid,
          f && `_1h6d1bqt _4cvx1bqt _16qsizbr _1dbzizbr _uk1sr01l`,
          i,
        ]),
      },
      o,
      F.createElement(
        `input`,
        En({}, k, {
          "aria-invalid": f || void 0,
          "data-compact": c || void 0,
          "data-ds--text-field--input": !0,
          "data-monospaced": m || void 0,
          "data-testid": D,
          disabled: u,
          name: x,
          onBlur: M,
          onChange: C,
          onFocus: j,
          placeholder: E,
          readOnly: v,
          ref: ee,
          required: b,
          className: q([
            `_19itidpf _11c81d4k _12ji1r31 _1qu2glyw _12y31o36 _vchhusvi _1bsb1osq _1ul9idpf _bfhk1j28 _syaz1kw7 _80om1kw7 _14ji12x7 _olc612x7 _1kod12x7 _7ba012x7 _1goxglyw _13xeglyw _1n7e1l2s _1idr1rpy _1tn2fhey _l9oiu2gc _549yu2gc _1h5w12x7 _124212x7`,
            m && `_ect4zzfg _14mdzzfg`,
            c && `_11zpv77o _1l02v77o _daj712x7 _141f12x7 _1srd1b66 _oi9h1b66 _1e3012x7 _1txv12x7`,
            u && `_syaz1gmx _1idr1gmx`,
            u && `_1fnx18qt`,
          ]),
        }),
      ),
      a,
    );
  });
function co(e) {
  return w(e) || _(e) || u(e) || ie();
}
var lo = (0, F.createContext)(null),
  uo = (0, F.createContext)(null);
J();
function fo(e, t) {
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
function po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fo(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var mo = { componentName: `tabs`, packageName: `@atlaskit/tabs`, packageVersion: `19.0.5` },
  ho = function (e) {
    var t = e.tabPanel,
      n = e.index,
      r = e.isSelected,
      i = e.tabsId;
    return (
      t &&
      F.createElement(
        uo.Provider,
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
  go = function (e) {
    var t = e.shouldUnmountTabPanelOnChange,
      n = t === void 0 ? !1 : t,
      r = e.selected,
      i = e.defaultSelected,
      a = e.onChange,
      o = e.id,
      s = e.analyticsContext,
      c = e.children,
      l = e.testId,
      u = x((0, F.useState)(r || i || 0), 2),
      d = u[0],
      f = u[1],
      p = r === void 0 ? d : r,
      m = co(
        F.Children.toArray(c).filter(function (e) {
          return !!e;
        }),
      ),
      h = m[0],
      g = m.slice(1),
      _ = (0, F.useRef)(new Set([p]));
    _.current.has(p) || _.current.add(p);
    var v = zi(
        po(
          {
            fn: (0, F.useCallback)(
              function (e, t) {
                (a && a(e, t), f(e));
              },
              [a],
            ),
            action: `clicked`,
            analyticsData: s,
          },
          mo,
        ),
      ),
      y = n
        ? ho({ tabPanel: g[p], index: p, isSelected: !0, tabsId: o })
        : Array.from(_.current).map(function (e) {
            return ho({ tabPanel: g[e], index: e, isSelected: e === p, tabsId: o });
          });
    return F.createElement(
      `div`,
      {
        "data-testid": l,
        className: q([
          `_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n`,
          `_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw`,
        ]),
      },
      F.createElement(lo.Provider, { value: { selected: p, onChange: v, tabsId: o } }, h),
      F.createElement(F.Fragment, null, y),
    );
  },
  _o = (0, F.createContext)(`elevation.surface`),
  vo = function () {
    return (0, F.useContext)(_o);
  };
_o.displayName = `SurfaceProvider`;
var yo = () =>
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
J();
var bo = (...e) => q(e);
function xo() {
  return {
    css() {
      throw yo();
    },
    cssMap() {
      throw yo();
    },
    cx: bo,
    XCSSProp() {
      throw yo();
    },
  };
}
var So = xo();
(So.css, So.cssMap, So.cssMap);
var Co = So.cx;
(So.XCSSProp, J());
var wo = [
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
  To = {
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
  Eo = {
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
  Do = {
    start: `_1bahv2br`,
    center: `_1bah1h6o`,
    end: `_1bahh9n0`,
    "space-between": `_1bah1yb4`,
    "space-around": `_1bah1b1v`,
    "space-evenly": `_1bahitcz`,
    stretch: `_1bah1fhb`,
  },
  Oo = { column: `_2lx21bp4`, row: `_2lx2vrvc` },
  ko = { wrap: `_1n261g80`, nowrap: `_1n261q9c` },
  Ao = {
    start: `_4cvrv2br`,
    center: `_4cvr1h6o`,
    baseline: `_4cvr1q9y`,
    end: `_4cvrh9n0`,
    stretch: `_4cvr1fhb`,
  },
  jo = { root: `_1e0c1txw _vchhusvi` },
  Mo = (0, F.memo)(
    (0, F.forwardRef)(function (e, t) {
      var n = e.as,
        r = n === void 0 ? `div` : n,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        l = e.rowGap,
        u = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        m = e.xcss,
        h = g(e, wo);
      return F.createElement(
        r,
        En({}, h, {
          role: i,
          className: q([
            jo.root,
            s && Eo[s],
            c && Eo[c],
            s && To[s],
            l && To[l],
            a && Ao[a],
            f && Oo[f],
            o && Do[o],
            p && ko[p],
            m,
          ]),
          "data-testid": d,
          ref: t,
        }),
        u,
      );
    }),
  );
((Mo.displayName = `Flex`), J());
var No = [
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
  Po = {
    separator: `_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw`,
    hug: `_16jlidpf`,
    fill: `_1bsb1osq _16jlkb7n`,
  },
  Fo = function (e) {
    var t = e.children;
    return F.createElement(`span`, { className: q([Po.separator]) }, t);
  },
  Io = (0, F.memo)(
    (0, F.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `start` : i,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        c = e.spread,
        l = e.grow,
        u = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        m = e.testId,
        h = e.role,
        _ = e.children,
        v = g(e, No),
        y = typeof f == `string` ? F.createElement(Fo, null, f) : f,
        b = y
          ? F.Children.toArray(_)
              .filter(Boolean)
              .map(function (e, t) {
                return F.createElement(F.Fragment, { key: t }, f && t > 0 ? y : null, e);
              })
          : _;
      return F.createElement(
        Mo,
        En({}, v, {
          as: n,
          role: h,
          alignItems: a,
          justifyContent: c || r,
          direction: `row`,
          gap: u,
          rowGap: d,
          wrap: s ? `wrap` : void 0,
          xcss: Co(l === `hug` && Po.hug, l === `fill` && Po.fill, p),
          testId: m,
          ref: t,
        }),
        b,
      );
    }),
  );
Io.displayName = `Inline`;
var Lo = [
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
  Ro = { hug: `_16jlidpf`, fill: `_1bsb1osq _16jlkb7n` },
  zo = (0, F.memo)(
    (0, F.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `stretch` : i,
        o = e.spread,
        s = e.grow,
        c = e.space,
        l = e.children,
        u = e.testId,
        d = e.xcss,
        f = e.role,
        p = g(e, Lo);
      return F.createElement(
        Mo,
        En({}, p, {
          as: n,
          role: f,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: Co(s === `hug` && Ro.hug, s === `fill` && Ro.fill, d),
          testId: u,
          ref: t,
        }),
        l,
      );
    }),
  );
zo.displayName = `Stack`;
var Bo = !0,
  Vo = `Invariant failed`;
function Ho(e, t) {
  if (!e) {
    if (Bo) throw Error(Vo);
    var n = typeof t == `function` ? t() : t,
      r = n ? `${Vo}: ${n}` : Vo;
    throw Error(r);
  }
}
var Uo = (0, F.createContext)(!1),
  Wo = function () {
    return (0, F.useContext)(Uo);
  },
  Go = Uo.Provider;
J();
var Ko = [`span`, `p`, `strong`, `em`],
  qo = function (e, t) {
    var n = vo();
    if (e !== `inherit`) {
      if (e) return e;
      if (!t) return Qo.hasOwnProperty(n) ? Qo[n] : `color.text`;
    }
  },
  Jo = {
    root: `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65`,
    "as.strong": `_k48pwu06`,
    "as.em": `_zg8l1m30`,
    "textAlign.center": `_y3gn1h6o`,
    "textAlign.end": `_y3gnh9n0`,
    "textAlign.start": `_y3gnv2br`,
    truncation: `_1reo15vq _18m915vq _1e0ccj1k _sudp1e54`,
    breakAll: `_1nmz9jpi`,
  },
  Yo = { medium: `_11c8fhey`, large: `_11c81d4k`, small: `_11c8wadc` },
  Xo = { bold: `_k48pwu06`, medium: `_k48p1wq8`, regular: `_k48pi7a9`, semibold: `_k48p1pd9` },
  Zo = {
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
  Qo = {
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
  $o = (0, F.forwardRef)(function (e, t) {
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
    Ho(Ko.includes(r), `@atlaskit/primitives: Text received an invalid "as" value of "${r}"`);
    var p = Wo(),
      m = qo(i, p);
    !c && !p && (c = `medium`);
    var h = F.createElement(
      r,
      {
        id: s,
        className: q([
          Jo.root,
          c && Yo[c],
          m && Zo[m],
          u && Jo.truncation,
          u === 1 && Jo.breakAll,
          a && Jo[`textAlign.${a}`],
          l && Xo[l],
          r === `em` && Jo[`as.em`],
          r === `strong` && Jo[`as.strong`],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? h : F.createElement(Go, { value: !0 }, h);
  });
function es() {
  if (typeof window < `u` && window.navigator != null) {
    var e = window.navigator.userAgent?.toLowerCase();
    return e ? e.includes(`safari`) && !e.includes(`chrome`) : !1;
  }
  return !1;
}
J();
var ts = [`as`, `children`, `isInset`, `testId`, `style`, `xcss`],
  ns = [`className`],
  rs = (0, F.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `button` : n,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      l = g(e, ts);
    l.className;
    var u = g(l, ns);
    return F.createElement(
      r,
      En({}, u, {
        ref: t,
        className: q([
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
  is = [
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
  as = [`className`],
  os = { root: `_19itglyw _vchhusvi _r06hglyw _80omtlke`, disabled: `_80om13gf` },
  ss = (0, F.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.isDisabled,
      i = e.type,
      a = i === void 0 ? `button` : i,
      o = e.onClick,
      s = o === void 0 ? Dn : o,
      c = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      m = e.tabIndex,
      h = g(e, is),
      _ = (0, F.useContext)(Xi),
      v = zi({
        fn: (0, F.useCallback)(
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
    h.className;
    var y = g(h, as);
    return F.createElement(
      rs,
      En({ as: `button`, tabIndex: m ?? (es() && !r ? 0 : void 0), style: d }, y, {
        type: a,
        onClick: v,
        disabled: r,
        xcss: bo(os.root, r && os.disabled, p),
        testId: f,
        ref: t,
      }),
      n,
    );
  }),
  cs = (0, F.createContext)(!1),
  ls = function () {
    return (0, F.useContext)(cs);
  },
  us = (0, F.createContext)(!1),
  ds = function () {
    return (0, F.useContext)(us);
  },
  fs = i((e) => {
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
  ps = i((e) => {
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
    var n = fs();
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
  ms = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.bindAll = e.bind = void 0));
    var t = fs();
    Object.defineProperty(e, `bind`, {
      enumerable: !0,
      get: function () {
        return t.bind;
      },
    });
    var n = ps();
    Object.defineProperty(e, `bindAll`, {
      enumerable: !0,
      get: function () {
        return n.bindAll;
      },
    });
  }),
  hs = [`light`, `dark`, `spacing`, `typography`, `shape`, `motion`],
  gs = `UNSAFE_themeOptions`,
  _s = function (e) {
    return (
      hs.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  vs = function (e) {
    return (
      S.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  ys = function (e) {
    return [`light`, `dark`, `auto`].includes(e);
  },
  bs = function (e) {
    return e
      .split(` `)
      .map(function (e) {
        return e.split(/:([^]*)/);
      })
      .reduce(function (e, t) {
        var n = x(t, 2),
          r = n[0],
          i = n[1];
        if ((r === `colorMode` && ys(i) && (e[r] = i), _s(r) && vs(i) && (e[r] = i), r === gs))
          try {
            e[gs] = JSON.parse(i);
          } catch {}
        return e;
      }, {});
  },
  xs = function (e) {
    return Object.entries(e).reduce(function (e, t) {
      var n = x(t, 2),
        r = n[0],
        i = n[1];
      return (r === `colorMode` && typeof i == `string` && ys(i)) ||
        (r === gs && h(i) === `object`) ||
        (_s(r) && typeof i == `string` && vs(i))
        ? e + `${e ? ` ` : ``}${r}:${h(i) === `object` ? JSON.stringify(i) : i}`
        : e;
    }, ``);
  };
function Ss(e, t) {
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
function Cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ss(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ss(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var ws = function (e) {
    return (
      E.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  Ts = function () {
    if (typeof document > `u`) return {};
    var e = document.documentElement,
      t = e.getAttribute(`data-color-mode`) || ``;
    return Cs(Cs({}, bs(e.getAttribute(`data-theme`) || ``)), ws(t) && { colorMode: t });
  };
function Es(e, t) {
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
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Es(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Es(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Os = `light`,
  ks = `no-preference`,
  As = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.colorMode,
      n = t === void 0 ? d.colorMode : t,
      r = e.dark,
      i = r === void 0 ? d.dark : r,
      a = e.light,
      o = a === void 0 ? d.light : a,
      s = e.contrastMode,
      c = s === void 0 ? d.contrastMode : s,
      l = e.motion,
      u = l === void 0 ? d.motion() : l,
      f = e.shape,
      p = f === void 0 ? d.shape() : f,
      m = e.spacing,
      h = m === void 0 ? d.spacing : m,
      g = e.typography,
      _ = g === void 0 ? d.typography : g,
      y = e.UNSAFE_themeOptions,
      b = y === void 0 ? d.UNSAFE_themeOptions : y,
      x = v(
        v({}, re, xs({ dark: i, light: o, motion: u, shape: p, spacing: h, typography: _ })),
        N,
        n === `auto` ? Os : n,
      );
    if (
      (P(`platform_increased-contrast-themes`) &&
        (x = Ds(Ds({}, x), {}, v({}, k, c === `auto` ? ks : c))),
      b && D(b.brandColor))
    ) {
      var S = A(JSON.stringify(b));
      x[T] = S;
    }
    return x;
  };
vt();
var js = {
    light: function () {
      return _t(() => import(`./atlassian-light-B1KF1953.js`), [], import.meta.url);
    },
    "light-future": function () {
      return _t(() => import(`./atlassian-light-future-C13ltG2F.js`), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return _t(
        () => import(`./atlassian-light-increased-contrast-BNTVMd1W.js`),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return _t(() => import(`./atlassian-dark-BFXzfqbZ.js`), [], import.meta.url);
    },
    "dark-future": function () {
      return _t(() => import(`./atlassian-dark-future-Bw1KUvV8.js`), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return _t(
        () => import(`./atlassian-dark-increased-contrast-DEdiqvAK.js`),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return _t(() => import(`./atlassian-spacing-DK5WAAmW.js`), [], import.meta.url);
    },
    typography: function () {
      return _t(() => import(`./atlassian-typography-DzIF28hO.js`), [], import.meta.url);
    },
    shape: function () {
      return _t(() => import(`./atlassian-shape-D1_1hnIs.js`), [], import.meta.url);
    },
    motion: function () {
      return _t(() => import(`./atlassian-motion-DzDytpqf.js`), [], import.meta.url);
    },
  },
  Y = e(C()),
  Ms = (function () {
    var e = p(
      Y.default.mark(function e(t) {
        var n, r;
        return Y.default.wrap(function (e) {
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
                return ((e.next = 6), Ns(t));
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
  Ns = (function () {
    var e = p(
      Y.default.mark(function e(t) {
        var n, r;
        return Y.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), js[t]());
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
  Ps = ms(),
  Fs = typeof window < `u` && `matchMedia` in window;
function Is(e) {
  document.documentElement.setAttribute(N, e.matches ? `dark` : `light`);
}
var Ls = Fs && window.matchMedia(`(prefers-color-scheme: dark)`),
  Rs = new ((function () {
    function e() {
      (m(this, e), v(this, `unbindThemeChangeListener`, null));
    }
    return b(e, [
      {
        key: `getColorMode`,
        value: function () {
          return Ls && Ls != null && Ls.matches ? `dark` : `light`;
        },
      },
      {
        key: `bind`,
        value: function () {
          Ls &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = (0, Ps.bind)(Ls, { type: `change`, listener: Is }));
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
  zs = typeof window < `u` && `matchMedia` in window;
function Bs(e) {
  document.documentElement.setAttribute(k, e.matches ? `more` : `no-preference`);
}
var Vs = zs && window.matchMedia(`(prefers-contrast: more)`),
  Hs = new ((function () {
    function e() {
      (m(this, e), v(this, `unbindContrastChangeListener`, null));
    }
    return b(e, [
      {
        key: `getContrastMode`,
        value: function () {
          return Vs && Vs != null && Vs.matches ? `more` : `no-preference`;
        },
      },
      {
        key: `bind`,
        value: function () {
          Vs &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = (0, Ps.bind)(Vs, {
              type: `change`,
              listener: Bs,
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
function Us(e) {
  (e.colorMode === `auto` ? ((e.colorMode = Rs.getColorMode()), Rs.bind()) : Rs.unbind(),
    P(`platform_increased-contrast-themes`) &&
      (e.contrastMode === `auto`
        ? ((e.contrastMode = Hs.getContrastMode()), Hs.bind())
        : Hs.unbind()));
  var t = As(e);
  return (
    Object.entries(t).forEach(function (e) {
      var t = x(e, 2),
        n = t[0],
        r = t[1];
      document.documentElement.setAttribute(n, r);
    }),
    function () {
      (Rs.unbind(), P(`platform_increased-contrast-themes`) && Hs.unbind());
    }
  );
}
function Ws(e) {
  return Object.entries(ne).find(function (t) {
    return x(t, 2)[1].increasesContrastFor === e;
  })?.[1].id;
}
var Gs = function (e) {
    var t = e.colorMode,
      n = e.contrastMode,
      r = e.dark,
      i = e.light,
      a = e.shape,
      o = e.spacing,
      s = e.typography,
      c = e.motion,
      l = [i, r],
      u = [];
    if (t === `auto`)
      (n !== `no-preference` &&
        P(`platform_increased-contrast-themes`) &&
        l.forEach(function (e) {
          var t = Ws(e);
          t && l.push(t);
        }),
        u.push.apply(u, l));
    else if ((u.push(e[t]), n !== `no-preference` && P(`platform_increased-contrast-themes`))) {
      var d = Ws(e[t]);
      d && u.push(d);
    }
    return (
      [a, o, s, c].forEach(function (e) {
        e && u.push(e);
      }),
      j(new Set(u))
    );
  },
  Ks = function (e) {
    return j(new Set([]));
  };
vt();
function qs(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Js(e)) || (t && e && typeof e.length == `number`)) {
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
function Js(e, t) {
  if (e) {
    if (typeof e == `string`) return Ys(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ys(e, t)
          : void 0
    );
  }
}
function Ys(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Xs(e, t) {
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
function Zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Xs(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xs(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Qs = (function () {
    var e = p(
      Y.default.mark(function e() {
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
          f,
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
          O,
          k,
          A,
          j,
          M,
          N,
          te,
          ne,
          re = arguments;
        return Y.default.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = re.length > 0 && re[0] !== void 0 ? re[0] : {}),
                    (n = re.length > 1 ? re[1] : void 0),
                    (r =
                      typeof t == `function`
                        ? t(
                            Zs(
                              Zs({}, d),
                              {},
                              { typography: d.typography, shape: d.shape(), motion: d.motion() },
                              Ts(),
                            ),
                          )
                        : t),
                    (i = r.colorMode),
                    (a = i === void 0 ? d.colorMode : i),
                    (o = r.contrastMode),
                    (s = o === void 0 ? d.contrastMode : o),
                    (c = r.dark),
                    (l = c === void 0 ? d.dark : c),
                    (u = r.light),
                    (f = u === void 0 ? d.light : u),
                    (m = r.shape),
                    (h = m === void 0 ? d.shape() : m),
                    (g = r.spacing),
                    (_ = g === void 0 ? d.spacing : g),
                    (v = r.typography),
                    (y = v === void 0 ? d.typography : v),
                    (b = r.motion),
                    (x = b === void 0 ? d.motion() : b),
                    (S = r.UNSAFE_themeOptions),
                    (C = S === void 0 ? d.UNSAFE_themeOptions : S),
                    P(`platform_increased-contrast-themes`) ||
                      (f === `light-increased-contrast` && (f = `light`),
                      l === `dark-increased-contrast` && (l = `dark`)),
                    (w = {
                      colorMode: a,
                      contrastMode: s,
                      dark: l,
                      light: f,
                      shape: h,
                      spacing: _,
                      typography: y,
                      motion: x,
                      UNSAFE_themeOptions: n ? void 0 : C,
                    }),
                    (T = Gs(w)),
                    (E = n || Ms),
                    (O = T.map(
                      (function () {
                        var e = p(
                          Y.default.mark(function e(t) {
                            return Y.default.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return ((e.next = 2), E(t));
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
                      C &&
                      D(C?.brandColor) &&
                      ((k = a || d.colorMode),
                      (A = ee(C, k)),
                      A.length > 0 &&
                        O.push(
                          p(
                            Y.default.mark(function e() {
                              var t, n;
                              return Y.default.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        _t(
                                          () => import(`./custom-theme-fcrqexx0.js`),
                                          __vite__mapDeps([2, 3, 1, 4]),
                                          import.meta.url,
                                        )
                                      );
                                    case 2:
                                      ((t = e.sent),
                                        (n = t.loadAndAppendCustomThemeCss),
                                        n({
                                          colorMode: A.length === 2 ? `auto` : A[0],
                                          UNSAFE_themeOptions: C,
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
                    Promise.all(O)
                  );
                case 11:
                  ((j = Ks(w)), (M = qs(j)), (e.prev = 13), M.s());
                case 15:
                  if ((N = M.n()).done) {
                    e.next = 21;
                    break;
                  }
                  return ((te = N.value), (e.next = 19), E(te));
                case 19:
                  e.next = 15;
                  break;
                case 21:
                  e.next = 26;
                  break;
                case 23:
                  ((e.prev = 23), (e.t0 = e.catch(13)), M.e(e.t0));
                case 26:
                  return ((e.prev = 26), M.f(), e.finish(26));
                case 29:
                  return ((ne = Us(w)), e.abrupt(`return`, ne));
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
  $s = (function () {
    function e(t) {
      (m(this, e), v(this, `legacyObserver`, null), (this.callback = t), e.callbacks.add(t));
    }
    return b(e, [
      {
        key: `observe`,
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var t = Ts();
              e.callbacks.forEach(function (e) {
                return e(t);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [re, N] }));
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
(v($s, `observer`, null), v($s, `callbacks`, new Set()));
var ec = (0, F.createContext)(void 0),
  tc = (0, F.createContext)(void 0),
  nc = (0, F.createContext)(!1),
  rc = (0, F.createContext)(void 0),
  ic = (0, F.createContext)(void 0),
  ac = function () {
    return (0, F.useContext)(nc) ?? !1;
  },
  oc = function () {
    return typeof document < `u` ? document : null;
  };
function sc(e) {
  var t = oc();
  return t ? t.head.querySelector(`style[${re}="${e}"]`) : !1;
}
var cc = (function () {
    var e = p(
      Y.default.mark(function e(t) {
        var n, r;
        return Y.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!sc(t)) {
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
                return ((e.next = 6), js[t]());
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
  lc = (function () {
    var e = p(
      Y.default.mark(function e(t, n) {
        var r, i;
        return Y.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((r = oc()), r)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(`return`);
              case 3:
                if (
                  ((i = r.createElement(`style`)),
                  (i.textContent = t),
                  (i.dataset.theme = n),
                  !sc(n))
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
  uc = (function () {
    var e = p(
      Y.default.mark(function e(t) {
        var n;
        return Y.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), cc(t));
              case 2:
                if (((n = e.sent), n)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt(`return`);
              case 5:
                lc(n, t);
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
  dc = (function () {
    var e = p(
      Y.default.mark(function e(t) {
        var n;
        return Y.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                ((n = Object.values(t).filter(function (e) {
                  return !!e;
                })),
                  n.forEach(uc));
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
J();
function fc(e, t) {
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
function pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fc(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var mc = { dark: `dark`, light: `light`, spacing: `spacing`, typography: `typography` },
  hc =
    typeof window < `u` && `matchMedia` in window
      ? window.matchMedia(`(prefers-color-scheme: dark)`)
      : void 0;
function gc(e) {
  return e === `auto` ? (hc != null && hc.matches ? `dark` : `light`) : e;
}
var _c = { body: `_1e0c1bgi` };
function vc(e) {
  var t = e.children,
    n = e.defaultColorMode,
    r = n === void 0 ? `auto` : n,
    i = e.defaultTheme,
    a = x((0, F.useState)(r), 2),
    o = a[0],
    s = a[1],
    c = x((0, F.useState)(gc(r)), 2),
    l = c[0],
    u = c[1],
    d = x(
      (0, F.useState)(function () {
        return pc(pc({}, mc), i);
      }),
      2,
    ),
    f = d[0],
    m = d[1],
    h = (0, F.useCallback)(function (e) {
      (s(e), u(gc(e)));
    }, []),
    g = (0, F.useCallback)(function (e) {
      m(function (t) {
        return pc(pc({}, t), e);
      });
    }, []),
    _ = (0, F.useRef)(null),
    y = ls(),
    b = ds(),
    S = ac(),
    C = y && !S && b;
  ((0, F.useEffect)(
    function () {
      if (C) {
        var e = (function () {
          var e = p(
            Y.default.mark(function e() {
              var t;
              return Y.default.wrap(function (e) {
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
            var t = p(
              Y.default.mark(function t() {
                var n;
                return Y.default.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return ((t.next = 2), e());
                      case 2:
                        ((n = Qs(pc(pc({}, f), {}, { colorMode: l }))), (_.current = n));
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
      } else dc(f);
    },
    [y, S, C, l, f],
  ),
    (0, F.useEffect)(
      function () {
        if (hc)
          return (0, Ps.bind)(hc, {
            type: `change`,
            listener: function (e) {
              o === `auto` && u(e.matches ? `dark` : `light`);
            },
          });
      },
      [o],
    ));
  var w = pc(pc({}, As(pc(pc({}, f), {}, { colorMode: l }))), {}, v({}, te, !0));
  return F.createElement(
    nc.Provider,
    { value: !0 },
    F.createElement(
      ec.Provider,
      { value: l },
      F.createElement(
        tc.Provider,
        { value: h },
        F.createElement(
          rc.Provider,
          { value: f },
          F.createElement(
            ic.Provider,
            { value: g },
            C ? t : F.createElement(`div`, En({}, w, { className: q([_c.body]) }), t),
          ),
        ),
      ),
    ),
  );
}
function yc() {
  var e = (0, F.useContext)(ec),
    t = Ts(),
    n = x((0, F.useState)(t?.colorMode || `light`), 2),
    r = n[0],
    i = n[1];
  return (
    (0, F.useEffect)(
      function () {
        if (!e) {
          var t = new $s(function (e) {
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
function bc() {
  return F.useId().replace(/[:«»]/g, `_`);
}
function xc() {
  var e = (0, F.useContext)(uo);
  if (e == null) throw Error(`@atlaskit/tabs:  A TabPanel must have a Tabs parent.`);
  return e;
}
var Sc = function (e) {
    var t = e.children,
      n = e.testId,
      r = xc(),
      i = r.role,
      a = r.id,
      o = r.hidden,
      s = r[`aria-labelledby`],
      c = r.tabIndex;
    return F.createElement(
      rs,
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
      F.createElement(F.Fragment, null, t),
    );
  },
  Cc = (0, F.createContext)(null);
function wc() {
  var e = (0, F.useContext)(Cc);
  if (e == null || e === void 0) throw Error(`@atlaskit/tabs: A Tab must have a TabList parent.`);
  return e;
}
var Tc = (0, F.forwardRef)(function (e, t) {
  var n = e.children,
    r = e.testId,
    i = wc(),
    a = i.onClick,
    o = i.id,
    s = i[`aria-controls`],
    c = i[`aria-posinset`],
    l = i[`aria-selected`],
    u = i[`aria-setsize`],
    d = i.onKeyDown,
    f = i.role,
    p = i.tabIndex;
  return F.createElement(
    rs,
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
    F.createElement($o, { weight: `medium`, color: `inherit`, maxLines: 1 }, n),
  );
});
function Ec() {
  var e = (0, F.useContext)(lo);
  if (e == null) throw Error(`@atlaskit/tabs: A TabList must have a Tabs parent.`);
  return e;
}
J();
var Dc = function (e) {
  var t = e.children,
    n = Ec(),
    r = n.tabsId,
    i = n.selected,
    a = n.onChange,
    o = (0, F.createRef)(),
    s = F.Children.toArray(t).filter(Boolean),
    c = s.length,
    l = (0, F.useCallback)(
      function (e) {
        var t = o.current?.querySelector(`[id='${r}-${e}']`);
        (t && t.focus(), a(e));
      },
      [r, o, a],
    ),
    u = (0, F.useCallback)(
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
    d = (0, F.useCallback)(
      function (e) {
        var t = e.tab,
          n = e.isSelected,
          i = e.index;
        return F.createElement(
          Cc.Provider,
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
  return F.createElement(
    `div`,
    {
      role: `tablist`,
      ref: o,
      className: q([
        `_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t`,
        `_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quzazsu _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1uh4 _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oazazsu _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1uh4 _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i20i7uo _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmzz0c1 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiem6x5g _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1rus1l7x _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc`,
      ]),
    },
    s.map(function (e, t) {
      return d({ tab: e, index: t, isSelected: t === i });
    }),
  );
};
function Oc(e) {
  return function (t) {
    e.forEach(function (e) {
      typeof e == `function` ? e(t) : e !== null && h(e) === `object` && (e.current = t);
    });
  };
}
var kc = (0, F.createContext)(void 0),
  Ac = function () {
    var e = (0, F.useContext)(kc);
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
function jc(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Mc = 9;
function Nc(e) {
  e.keyCode !== Mc && jc(e);
}
function Pc(e, t) {
  return e
    ? {
        onMouseDownCapture: jc,
        onMouseUpCapture: jc,
        onKeyDownCapture: Nc,
        onKeyUpCapture: Nc,
        onTouchStartCapture: jc,
        onTouchEndCapture: jc,
        onPointerDownCapture: jc,
        onPointerUpCapture: jc,
        onClickCapture: jc,
        onClick: jc,
      }
    : t;
}
function Fc(e) {
  switch (e) {
    case `compact`:
      return `small`;
    default:
      return `medium`;
  }
}
function Ic(e) {
  var t = e.appearance,
    n = e.isDisabled,
    r = e.isSelected;
  return n || r
    ? `inherit`
    : t === `primary` || t === `danger` || t === `discovery`
      ? `invert`
      : `inherit`;
}
function Lc(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isDisabled,
    i = e.isSelected,
    a = e.testId;
  return F.createElement(qa, {
    size: Fc(n),
    appearance: Ic({ appearance: t, isDisabled: r, isSelected: i }),
    testId: a ? `${a}--loading-spinner` : void 0,
  });
}
J();
var Rc =
    `appearance.autoFocus.isDisabled.isLoading.isSelected.isIconButton.isCircle.hasIconBefore.hasIconAfter.shouldFitContainer.spacing.ariaLabel.ariaLabelledBy.children.interactionName.onClick.onMouseDown.onMouseDownCapture.onMouseUp.onMouseUpCapture.onKeyDown.onKeyDownCapture.onKeyUp.onKeyUpCapture.onTouchStart.onTouchStartCapture.onTouchEnd.onTouchEndCapture.onPointerDown.onPointerDownCapture.onPointerUp.onPointerUpCapture.onClickCapture.testId.analyticsContext.componentName.role.onMouseOver.onMouseOut.onFocus.onBlur.onMouseMove.type`.split(
      `.`,
    ),
  zc = [`className`, `css`, `as`, `style`],
  Bc = `, Loading`,
  X = {
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
  Vc = {
    root: `_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  Hc = {
    root: `_bfhk1856 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3hf2y _9h8h15cr _1di6g6ey`,
  },
  Uc = {
    root: `_bfhk1kmu _syaz1yd3 _10531yd3 _f8pj1yd3 _30l31yd3 _9h8h1yd3`,
    interactive: `_30l31yd3 _irr31spp _9h8h1yd3 _1di64m4m`,
  },
  Wc = {
    root: `_bfhkybec _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3s9hg _9h8h15cr _1di613a9`,
  },
  Gc = {
    root: `_bfhku5tj _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3fqeg _9h8h15cr _1di61f1m`,
  },
  Kc = {
    root: `_bfhksm61 _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  qc = {
    root: `_bfhk15s3 _syaz6x5g _8l3mq98m _aetrb3bt _10536x5g _f8pj6x5g _30l36x5g _9h8h6x5g`,
    insideSplitButton: `_1pbycs5v`,
    interactive: `_irr3ufnl _30l36x5g _1di6nozp _9h8h6x5g`,
    warning: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    danger: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    discovery: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
  },
  Jc = F.forwardRef(function (e, t) {
    var n = e.appearance,
      r = e.autoFocus,
      i = r === void 0 ? !1 : r,
      a = e.isDisabled,
      o = a === void 0 ? !1 : a,
      s = e.isLoading,
      c = s === void 0 ? !1 : s,
      l = e.isSelected,
      u = l === void 0 ? !1 : l,
      d = e.isIconButton,
      f = d === void 0 ? !1 : d,
      p = e.isCircle,
      m = p === void 0 ? !1 : p,
      h = e.hasIconBefore,
      _ = h === void 0 ? !1 : h,
      v = e.hasIconAfter,
      y = v === void 0 ? !1 : v,
      b = e.shouldFitContainer,
      x = b === void 0 ? !1 : b,
      S = e.spacing,
      C = S === void 0 ? `default` : S,
      w = e.ariaLabel,
      T = e.ariaLabelledBy,
      E = e.children,
      D = e.interactionName,
      O = e.onClick,
      k = e.onMouseDown,
      A = e.onMouseDownCapture,
      j = e.onMouseUp,
      M = e.onMouseUpCapture,
      N = e.onKeyDown,
      ee = e.onKeyDownCapture,
      te = e.onKeyUp,
      ne = e.onKeyUpCapture,
      re = e.onTouchStart,
      ie = e.onTouchStartCapture,
      I = e.onTouchEnd,
      ae = e.onTouchEndCapture,
      oe = e.onPointerDown,
      L = e.onPointerDownCapture,
      se = e.onPointerUp,
      ce = e.onPointerUpCapture,
      le = e.onClickCapture,
      ue = e.testId,
      de = e.analyticsContext,
      fe = e.componentName,
      pe = e.role,
      me = e.onMouseOver,
      he = e.onMouseOut,
      ge = e.onFocus,
      _e = e.onBlur,
      ve = e.onMouseMove,
      ye = e.type,
      be = g(e, Rc),
      xe = (0, F.useRef)(null),
      Se = Ac(),
      Ce = bc(),
      we = !!Se,
      Te = Se?.isNavigationSplitButton || !1,
      R = Se?.appearance === `default` ? `subtle` : n || Se?.appearance || `default`,
      Ee = Se?.spacing || C,
      De = Se?.isDisabled || o,
      Oe = !De && !c,
      ke = De || c,
      Ae = u && !De;
    (Ui(xe, i), be.className, be.css, be.as, be.style);
    var je = g(be, zc);
    return F.createElement(
      ss,
      En(
        {},
        je,
        {
          componentName: fe || `button`,
          analyticsContext: de,
          role: pe,
          ref: Oc([xe, t]),
          xcss: Co(
            X.base,
            P(`platform-dst-shape-theme-default`) && X.baseT26Shape,
            R === `default` && Vc.root,
            R === `default` && Oe && Vc.interactive,
            R === `primary` && Hc.root,
            R === `primary` && Oe && Hc.interactive,
            R === `warning` && Uc.root,
            R === `warning` && Oe && Uc.interactive,
            R === `danger` && Wc.root,
            R === `danger` && Oe && Wc.interactive,
            R === `discovery` && Gc.root,
            R === `discovery` && Oe && Gc.interactive,
            R === `subtle` && Kc.root,
            R === `subtle` && Oe && Kc.interactive,
            X.linkDecorationUnset,
            Ae && qc.root,
            Ae && we && qc.insideSplitButton,
            Ae && Oe && qc.interactive,
            Ae && R === `danger` && qc.danger,
            Ae && R === `warning` && qc.warning,
            Ae && R === `discovery` && qc.discovery,
            De && X.disabled,
            De && R !== `default` && R !== `subtle` && X.sharedDisabled,
            De && R === `default` && Vc.disabled,
            m && !we && X.circle,
            Ee === `compact` && X.spacingCompact,
            Ee === `compact` && P(`platform-dst-shape-theme-default`) && X.spacingCompactT26Shape,
            x && X.fullWidth,
            _ && X.buttonIconBefore,
            y && X.buttonIconAfter,
            f && X.iconButton,
            f && Ee === `compact` && X.iconButtonCompact,
            c && X.loading,
            we && X.splitButton,
            Te && X.navigationSplitButton,
          ),
          isDisabled: P(`platform-dst_fix_not_focusable_loading_button`) ? De : ke,
        },
        P(`platform-dst_fix_not_focusable_loading_button`) && { "aria-live": `polite` },
        c && P(`platform-dst_fix_not_focusable_loading_button`) && { "aria-disabled": !0 },
        {
          "aria-label": c && w && !T ? `${w} ${Bc}` : w,
          "aria-labelledby": c && T ? `${T} ${Ce}` : T,
          onClick: O,
        },
        Pc(ke, {
          onMouseDownCapture: A,
          onMouseUpCapture: M,
          onKeyDownCapture: ee,
          onKeyUpCapture: ne,
          onTouchStartCapture: ie,
          onTouchEndCapture: ae,
          onPointerDownCapture: L,
          onPointerUpCapture: ce,
          onClickCapture: le,
        }),
        {
          testId: ue,
          onMouseOver: me,
          onFocus: ge,
          onMouseMove: ve,
          onBlur: _e,
          type: ye,
          interactionName: D,
          onMouseDown: k,
          onMouseUp: j,
          onKeyDown: N,
          onMouseOut: he,
          onKeyUp: te,
          onTouchStart: re,
          onTouchEnd: I,
          onPointerDown: oe,
          onPointerUp: se,
        },
      ),
      F.createElement(
        kc.Provider,
        { value: void 0 },
        E,
        c &&
          F.createElement(
            `span`,
            { className: q([X.loadingOverlay]) },
            Lc({ spacing: Ee, appearance: R, isDisabled: De, isSelected: Ae, testId: ue }),
          ),
        c && (T || !w) && F.createElement(la, { id: Ce }, Bc),
      ),
    );
  });
J();
var Yc = {
    text: `_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c`,
    icon: `_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw`,
    common: `_v564g17y`,
    fade: `_tzy4idpf`,
  },
  Xc = function (e) {
    var t = e.children,
      n = e.type,
      r = n === void 0 ? `text` : n,
      i = e.isLoading;
    return F.createElement(
      `span`,
      { className: q([Yc.common, r === `text` && Yc.text, r === `icon` && Yc.icon, i && Yc.fade]) },
      t,
    );
  };
function Zc(e) {
  return !e.displayName && !e.render && typeof e == `function`;
}
var Qc = function (e) {
  var t = e.icon,
    n = Zc(t),
    r = {
      label: ``,
      color: `currentColor`,
      size: P(`platform_dst_button_chevron_sizing`)
        ? function (e) {
            return e.startsWith(`Chevron`) ? `small` : `medium`;
          }
        : void 0,
    };
  return F.createElement(F.Fragment, null, n ? t(r) : F.createElement(t, r));
};
function $c(e) {
  var t = e.onClose,
    n = e.isDisabled,
    r = (0, F.useRef)(!1),
    i = (0, F.useCallback)(
      function (e) {
        n || r.current || e.key !== `Escape` || ((r.current = !0), t(e));
      },
      [t, n],
    ),
    a = (0, F.useCallback)(function () {
      r.current = !1;
    }, []);
  (0, F.useEffect)(
    function () {
      if (!n)
        return (0, Ps.bindAll)(
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
function el(e) {
  var t = (0, F.useRef)(e);
  return (
    (0, F.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var tl = (0, F.createContext)(null),
  nl = (0, F.createContext)(null);
function rl() {
  return (0, F.useContext)(nl);
}
function il(e) {
  var t = e.isOpen,
    n = e.type,
    r = e.onClose,
    i = (0, F.useContext)(tl),
    a = rl();
  (0, F.useEffect)(
    function () {
      if (i !== null && t) return i.onClose(r, { namespace: a, type: n });
    },
    [i, t, a, r, n],
  );
}
var al = { none: 0, small: 100, medium: 350, large: 700 },
  ol = 0.5,
  sl = { none: al.none, small: al.small * ol, medium: al.medium * ol, large: al.large * ol },
  cl = function () {
    return typeof window < `u` && `matchMedia` in window;
  },
  ll = function () {
    return cl() ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches : !1;
  },
  ul = function (e) {
    switch (e.cleanup) {
      case `next-effect`:
        return;
      default:
        return [];
    }
  },
  dl = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: `unmount` },
      t = (0, F.useRef)([]);
    return (
      (0, F.useEffect)(function () {
        return function () {
          t.current.length &&
            (t.current.forEach(function (e) {
              return clearTimeout(e);
            }),
            (t.current = []));
        };
      }, ul(e)),
      (0, F.useCallback)(function (e, n) {
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
  fl = { appear: !0, isExiting: !1 },
  pl = (0, F.createContext)(fl),
  ml = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fl;
    return F.createElement(pl.Provider, { key: `${e.key}-provider`, value: t }, e);
  },
  hl = function (e) {
    var t = [];
    return (
      F.Children.toArray(e).forEach(function (e) {
        typeof e != `boolean` && e && t.push(e);
      }),
      t
    );
  },
  gl = function (e, t) {
    for (var n = t.concat([]), r = _l(t), i = 0; i < e.length; i++) {
      var a = e[i];
      r[a.key] || n.splice(i + 1, 0, a);
    }
    return n;
  },
  _l = function (e) {
    return e.reduce(function (e, t) {
      return ((e[t.key] = t), e);
    }, {});
  },
  vl = function (e, t) {
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
  yl = (0, F.memo)(function (e) {
    var t = e.appear,
      n = t === void 0 ? !1 : t,
      r = e.children,
      i = e.exitThenEnter,
      a = x((0, F.useState)([null, r]), 2),
      o = a[0],
      s = a[1],
      c = x((0, F.useState)([]), 2),
      l = c[0],
      u = c[1],
      d = x(
        (0, F.useState)(function () {
          return { appear: n, isExiting: !1 };
        }),
        2,
      ),
      f = d[0],
      p = d[1];
    if (
      ((0, F.useEffect)(function () {
        f.appear || p({ appear: !0, isExiting: !1 });
      }, []),
      typeof o == `boolean`)
    )
      return r;
    var m = x(o, 2),
      h = m[0],
      g = m[1],
      _ = hl(h),
      v = hl(g);
    g !== r && s([g, r]);
    var y = vl(v, _),
      b = !!y.size,
      S = v;
    if ((b && (S = gl(v, _)), i))
      if (l.length) S = P(`platform-dst-motion-uplift`) ? _ : l;
      else {
        var C = S.filter(function (e) {
          return y.has(e.key);
        });
        C.length && u(C);
      }
    return (
      (S = y.size
        ? S.map(function (e) {
            var t = y.has(e.key);
            return ml(e, {
              appear: !0,
              isExiting: t,
              onFinish: t
                ? function () {
                    (y.delete(e.key), y.size === 0 && (s([null, r]), u([])));
                  }
                : void 0,
            });
          })
        : S.map(function (e) {
            return ml(e, f);
          })),
      S
    );
  }),
  bl = function () {
    return (0, F.useContext)(pl);
  };
yl.displayName = `ExitingPersistence`;
function xl() {
  var e = (0, F.useRef)(``);
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
var Sl = (0, F.createContext)(function () {
    return { isReady: !0, delay: 0, ref: Dn };
  }),
  Cl = function () {
    var e = xl();
    return (0, F.useContext)(Sl)(e);
  };
J();
var wl = function (e) {
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
      f = Cl(),
      p = bl(),
      m = p.isExiting,
      h = p.onFinish,
      g = p.appear,
      _ = dl(),
      v = c || !f.isReady,
      y = m ? 0 : f.delay,
      b = m ? `exiting` : `entering`,
      S = x((0, F.useState)(g), 2),
      C = S[0],
      w = S[1];
    return (
      (0, F.useEffect)(
        function () {
          var e = !1;
          if (!v) {
            if (!g) {
              l && l(b);
              return;
            }
            var t = function () {
              (b === `exiting` && h?.(), e || w(!1), l?.(b));
            };
            if (ll()) {
              t();
              return;
            }
            return (
              w(!0),
              _(t, m ? sl[d] : al[d] + y),
              function () {
                e = !0;
              }
            );
          }
        },
        [h, b, m, d, y, v, _],
      ),
      t(
        {
          ref: f.ref,
          className: C
            ? q([
                q([`_1o51eoah _1y0co91m _1bumglyw _sedtglyw`]),
                v && q([`_1y0ctrqk`]),
                d === `small` && q([`_5sag1yx9`]),
                d === `medium` && q([`_5sag1ttt`]),
                d === `large` && q([`_5sagpwmj`]),
                m && d === `small` && q([`_5sag14ed`]),
                m && d === `medium` && q([`_5sagluct`]),
                m && d === `large` && q([`_5sag1ttt`]),
                m && q([`_ju255cps _1o51q7pw`]),
                !m && n === `linear` && q([`_1pglp3kn`]),
                !m && n === `ease-out` && q([`_1pgldkwg`]),
                !m && n === `ease-in` && q([`_1pgl1nzg`]),
                !m && n === `ease-in-40-out` && q([`_1pgl5y64`]),
                !m && n === `ease-in-60-out` && q([`_1pgl1ddy`]),
                !m && n === `ease-in-80-out` && q([`_1pglannl`]),
                !m && n === `ease-in-out` && q([`_1pgl1fu8`]),
                m && n === `linear` && q([`_1pglp3kn`]),
                m && i === `ease-out` && q([`_1pgldkwg`]),
                m && i === `ease-in` && q([`_1pgl1nzg`]),
                m && i === `ease-in-40-out` && q([`_1pgl5y64`]),
                m && i === `ease-in-60-out` && q([`_1pgl1ddy`]),
                m && i === `ease-in-80-out` && q([`_1pglannl`]),
                m && i === `ease-in-out` && q([`_1pgl1fu8`]),
                ((!m && a === `fade-in`) || (m && s === `fade-in`)) && q([`_j7hq1cgr`]),
                ((!m && a === `fade-out`) || (m && s === `fade-out`)) && q([`_j7hq1lln`]),
                ((!m && a === `zoom-in`) || (m && s === `zoom-in`)) && q([`_j7hqe8p0`]),
                ((!m && a === `zoom-out`) || (m && s === `zoom-out`)) && q([`_j7hqy6ql`]),
                ((!m && a === `slide-in-from-top`) || (m && s === `slide-in-from-top`)) &&
                  q([`_j7hqqshu`]),
                ((!m && a === `slide-out-from-top`) || (m && s === `slide-out-from-top`)) &&
                  q([`_j7hq7ri4`]),
                ((!m && a === `slide-in-from-right`) || (m && s === `slide-in-from-right`)) &&
                  q([`_j7hqdfjr`]),
                ((!m && a === `slide-out-from-right`) || (m && s === `slide-out-from-right`)) &&
                  q([`_j7hqonfj`]),
                ((!m && a === `slide-in-from-bottom`) || (m && s === `slide-in-from-bottom`)) &&
                  q([`_j7hq1liq`]),
                ((!m && a === `slide-out-from-bottom`) || (m && s === `slide-out-from-bottom`)) &&
                  q([`_j7hqhnf1`]),
                ((!m && a === `slide-in-from-left`) || (m && s === `slide-in-from-left`)) &&
                  q([`_j7hq1bh1`]),
                ((!m && a === `slide-out-from-left`) || (m && s === `slide-out-from-left`)) &&
                  q([`_j7hqj08w`]),
                ((!m && a === `fade-in-from-top`) || (m && s === `fade-in-from-top`)) &&
                  q([`_j7hq2iua`]),
                ((!m && a === `fade-out-from-top`) || (m && s === `fade-out-from-top`)) &&
                  q([`_j7hq39va`]),
                ((!m && a === `fade-in-from-left`) || (m && s === `fade-in-from-left`)) &&
                  q([`_j7hq15m2`]),
                ((!m && a === `fade-out-from-left`) || (m && s === `fade-out-from-left`)) &&
                  q([`_j7hq1yiv`]),
                ((!m && a === `fade-in-from-bottom`) || (m && s === `fade-in-from-bottom`)) &&
                  q([`_j7hq1w00`]),
                ((!m && a === `fade-out-from-bottom`) || (m && s === `fade-out-from-bottom`)) &&
                  q([`_j7hqzy3z`]),
                ((!m && a === `fade-in-from-right`) || (m && s === `fade-in-from-right`)) &&
                  q([`_j7hqpqak`]),
                ((!m && a === `fade-out-from-right`) || (m && s === `fade-out-from-right`)) &&
                  q([`_j7hq1ebg`]),
                ((!m && a === `fade-in-from-top-constant`) ||
                  (m && s === `fade-in-from-top-constant`)) &&
                  q([`_j7hqm2e2`]),
                ((!m && a === `fade-out-from-top-constant`) ||
                  (m && s === `fade-out-from-top-constant`)) &&
                  q([`_j7hq97jn`]),
                ((!m && a === `fade-in-from-left-constant`) ||
                  (m && s === `fade-in-from-left-constant`)) &&
                  q([`_j7hqovgq`]),
                ((!m && a === `fade-out-from-left-constant`) ||
                  (m && s === `fade-out-from-left-constant`)) &&
                  q([`_j7hq15do`]),
                ((!m && a === `fade-in-from-bottom-constant`) ||
                  (m && s === `fade-in-from-bottom-constant`)) &&
                  q([`_j7hq797a`]),
                ((!m && a === `fade-out-from-bottom-constant`) ||
                  (m && s === `fade-out-from-bottom-constant`)) &&
                  q([`_j7hqwo7r`]),
                ((!m && a === `fade-in-from-right-constant`) ||
                  (m && s === `fade-in-from-right-constant`)) &&
                  q([`_j7hqt8u5`]),
                ((!m && a === `fade-out-from-right-constant`) ||
                  (m && s === `fade-out-from-right-constant`)) &&
                  q([`_j7hq1pgp`]),
              ])
            : ``,
          style: { animationDelay: `${y}ms` },
        },
        b,
      )
    );
  },
  Tl = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  El = function (e) {
    var t = e.children,
      n = e.duration,
      r = n === void 0 ? `large` : n,
      i = e.entranceDirection,
      a = e.exitDirection,
      o = e.distance,
      s = o === void 0 ? `proportional` : o,
      c = e.onFinish,
      l = e.isPaused,
      u = i === void 0 ? void 0 : Tl[i],
      d = a || u ? `fade-out-from-${a || u}${s === `proportional` ? `` : `-constant`}` : `fade-out`;
    return F.createElement(
      wl,
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
  },
  Dl = F.createContext();
F.createContext();
var Ol = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  kl = function (e) {
    if (typeof e == `function`) {
      var t = [...arguments].slice(1);
      return e.apply(void 0, t);
    }
  },
  Al = function (e, t) {
    if (typeof e == `function`) return kl(e, t);
    e != null && (e.current = t);
  },
  jl = function (e) {
    return e.reduce(function (e, t) {
      var n = t[0];
      return ((e[n] = t[1]), e);
    }, {});
  },
  Ml =
    typeof window < `u` && window.document && window.document.createElement
      ? F.useLayoutEffect
      : F.useEffect,
  Nl = `bottom`,
  Pl = `right`,
  Fl = `left`,
  Il = `auto`,
  Ll = [`top`, Nl, Pl, Fl],
  Rl = `start`,
  zl = `clippingParents`,
  Bl = `viewport`,
  Vl = `popper`,
  Hl = `reference`,
  Ul = Ll.reduce(function (e, t) {
    return e.concat([t + `-` + Rl, t + `-end`]);
  }, []),
  Wl = [].concat(Ll, [Il]).reduce(function (e, t) {
    return e.concat([t, t + `-` + Rl, t + `-end`]);
  }, []),
  Gl = [
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
function Kl(e) {
  return e ? (e.nodeName || ``).toLowerCase() : null;
}
function ql(e) {
  if (e == null) return window;
  if (e.toString() !== `[object Window]`) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Jl(e) {
  return e instanceof ql(e).Element || e instanceof Element;
}
function Yl(e) {
  return e instanceof ql(e).HTMLElement || e instanceof HTMLElement;
}
function Xl(e) {
  return typeof ShadowRoot > `u` ? !1 : e instanceof ql(e).ShadowRoot || e instanceof ShadowRoot;
}
function Zl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (e) {
    var n = t.styles[e] || {},
      r = t.attributes[e] || {},
      i = t.elements[e];
    !Yl(i) ||
      !Kl(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? `` : t);
      }));
  });
}
function Ql(e) {
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
        !Yl(r) ||
          !Kl(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (e) {
            r.removeAttribute(e);
          }));
      });
    }
  );
}
var $l = {
  name: `applyStyles`,
  enabled: !0,
  phase: `write`,
  fn: Zl,
  effect: Ql,
  requires: [`computeStyles`],
};
function eu(e) {
  return e.split(`-`)[0];
}
var tu = Math.max,
  nu = Math.min,
  ru = Math.round;
function iu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + `/` + e.version;
        })
        .join(` `)
    : navigator.userAgent;
}
function au() {
  return !/^((?!chrome|android).)*safari/i.test(iu());
}
function ou(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    Yl(e) &&
    ((i = (e.offsetWidth > 0 && ru(r.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && ru(r.height) / e.offsetHeight) || 1));
  var o = (Jl(e) ? ql(e) : window).visualViewport,
    s = !au() && n,
    c = (r.left + (s && o ? o.offsetLeft : 0)) / i,
    l = (r.top + (s && o ? o.offsetTop : 0)) / a,
    u = r.width / i,
    d = r.height / a;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c, x: c, y: l };
}
function su(e) {
  var t = ou(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function cu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Xl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function lu(e) {
  return ql(e).getComputedStyle(e);
}
function uu(e) {
  return [`table`, `td`, `th`].indexOf(Kl(e)) >= 0;
}
function du(e) {
  return ((Jl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fu(e) {
  return Kl(e) === `html` ? e : e.assignedSlot || e.parentNode || (Xl(e) ? e.host : null) || du(e);
}
function pu(e) {
  return !Yl(e) || lu(e).position === `fixed` ? null : e.offsetParent;
}
function mu(e) {
  var t = /firefox/i.test(iu());
  if (/Trident/i.test(iu()) && Yl(e) && lu(e).position === `fixed`) return null;
  var n = fu(e);
  for (Xl(n) && (n = n.host); Yl(n) && [`html`, `body`].indexOf(Kl(n)) < 0; ) {
    var r = lu(n);
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
function hu(e) {
  for (var t = ql(e), n = pu(e); n && uu(n) && lu(n).position === `static`; ) n = pu(n);
  return n && (Kl(n) === `html` || (Kl(n) === `body` && lu(n).position === `static`))
    ? t
    : n || mu(e) || t;
}
function gu(e) {
  return [`top`, `bottom`].indexOf(e) >= 0 ? `x` : `y`;
}
function _u(e, t, n) {
  return tu(e, nu(t, n));
}
function vu(e, t, n) {
  var r = _u(e, t, n);
  return r > n ? n : r;
}
function yu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bu(e) {
  return Object.assign({}, yu(), e);
}
function xu(e, t) {
  return t.reduce(function (t, n) {
    return ((t[n] = e), t);
  }, {});
}
var Su = function (e, t) {
  return (
    (e = typeof e == `function` ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    bu(typeof e == `number` ? xu(e, Ll) : e)
  );
};
function Cu(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    a = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    s = eu(n.placement),
    c = gu(s),
    l = [`left`, `right`].indexOf(s) >= 0 ? `height` : `width`;
  if (!(!a || !o)) {
    var u = Su(i.padding, n),
      d = su(a),
      f = c === `y` ? `top` : Fl,
      p = c === `y` ? Nl : Pl,
      m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l],
      h = o[c] - n.rects.reference[c],
      g = hu(a),
      _ = g ? (c === `y` ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = m / 2 - h / 2,
      y = u[f],
      b = _ - d[l] - u[p],
      x = _ / 2 - d[l] / 2 + v,
      S = _u(y, x, b),
      C = c;
    n.modifiersData[r] = ((t = {}), (t[C] = S), (t.centerOffset = S - x), t);
  }
}
function wu(e) {
  var t = e.state,
    n = e.options.element,
    r = n === void 0 ? `[data-popper-arrow]` : n;
  r != null &&
    ((typeof r == `string` && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (cu(t.elements.popper, r) && (t.elements.arrow = r)));
}
var Tu = {
  name: `arrow`,
  enabled: !0,
  phase: `main`,
  fn: Cu,
  effect: wu,
  requires: [`popperOffsets`],
  requiresIfExists: [`preventOverflow`],
};
function Eu(e) {
  return e.split(`-`)[1];
}
var Du = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function Ou(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: ru(n * i) / i || 0, y: ru(r * i) / i || 0 };
}
function ku(e) {
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
    y = Fl,
    b = `top`,
    x = window;
  if (l) {
    var S = hu(n),
      C = `clientHeight`,
      w = `clientWidth`;
    if (
      (S === ql(n) &&
        ((S = du(n)),
        lu(S).position !== `static` &&
          s === `absolute` &&
          ((C = `scrollHeight`), (w = `scrollWidth`))),
      (S = S),
      i === `top` || ((i === `left` || i === `right`) && a === `end`))
    ) {
      b = Nl;
      var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
      ((h -= T - r.height), (h *= c ? 1 : -1));
    }
    if (i === `left` || ((i === `top` || i === `bottom`) && a === `end`)) {
      y = Pl;
      var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
      ((p -= E - r.width), (p *= c ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, l && Du),
    O = u === !0 ? Ou({ x: p, y: h }, ql(n)) : { x: p, y: h };
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
function Au(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    a = n.adaptive,
    o = a === void 0 ? !0 : a,
    s = n.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: eu(t.placement),
      variation: Eu(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === `fixed`,
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ku(
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
        ku(
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
var ju = { name: `computeStyles`, enabled: !0, phase: `beforeWrite`, fn: Au, data: {} },
  Mu = { passive: !0 };
function Nu(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    a = i === void 0 ? !0 : i,
    o = r.resize,
    s = o === void 0 ? !0 : o,
    c = ql(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (e) {
        e.addEventListener(`scroll`, n.update, Mu);
      }),
    s && c.addEventListener(`resize`, n.update, Mu),
    function () {
      (a &&
        l.forEach(function (e) {
          e.removeEventListener(`scroll`, n.update, Mu);
        }),
        s && c.removeEventListener(`resize`, n.update, Mu));
    }
  );
}
var Pu = {
    name: `eventListeners`,
    enabled: !0,
    phase: `write`,
    fn: function () {},
    effect: Nu,
    data: {},
  },
  Fu = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Iu(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return Fu[e];
  });
}
var Lu = { start: `end`, end: `start` };
function Ru(e) {
  return e.replace(/start|end/g, function (e) {
    return Lu[e];
  });
}
function zu(e) {
  var t = ql(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Bu(e) {
  return ou(du(e)).left + zu(e).scrollLeft;
}
function Vu(e, t) {
  var n = ql(e),
    r = du(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var l = au();
    (l || (!l && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: a, height: o, x: s + Bu(e), y: c };
}
function Hu(e) {
  var t = du(e),
    n = zu(e),
    r = e.ownerDocument?.body,
    i = tu(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    a = tu(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -n.scrollLeft + Bu(e),
    s = -n.scrollTop;
  return (
    lu(r || t).direction === `rtl` && (o += tu(t.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function Uu(e) {
  var t = lu(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Wu(e) {
  return [`html`, `body`, `#document`].indexOf(Kl(e)) >= 0
    ? e.ownerDocument.body
    : Yl(e) && Uu(e)
      ? e
      : Wu(fu(e));
}
function Gu(e, t) {
  t === void 0 && (t = []);
  var n = Wu(e),
    r = n === e.ownerDocument?.body,
    i = ql(n),
    a = r ? [i].concat(i.visualViewport || [], Uu(n) ? n : []) : n,
    o = t.concat(a);
  return r ? o : o.concat(Gu(fu(a)));
}
function Ku(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function qu(e, t) {
  var n = ou(e, !1, t === `fixed`);
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
function Ju(e, t, n) {
  return t === `viewport` ? Ku(Vu(e, n)) : Jl(t) ? qu(t, n) : Ku(Hu(du(e)));
}
function Yu(e) {
  var t = Gu(fu(e)),
    n = [`absolute`, `fixed`].indexOf(lu(e).position) >= 0 && Yl(e) ? hu(e) : e;
  return Jl(n)
    ? t.filter(function (e) {
        return Jl(e) && cu(e, n) && Kl(e) !== `body`;
      })
    : [];
}
function Xu(e, t, n, r) {
  var i = t === `clippingParents` ? Yu(e) : [].concat(t),
    a = [].concat(i, [n]),
    o = a[0],
    s = a.reduce(
      function (t, n) {
        var i = Ju(e, n, r);
        return (
          (t.top = tu(i.top, t.top)),
          (t.right = nu(i.right, t.right)),
          (t.bottom = nu(i.bottom, t.bottom)),
          (t.left = tu(i.left, t.left)),
          t
        );
      },
      Ju(e, o, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Zu(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? eu(r) : null,
    a = r ? Eu(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    c;
  switch (i) {
    case `top`:
      c = { x: o, y: t.y - n.height };
      break;
    case Nl:
      c = { x: o, y: t.y + t.height };
      break;
    case Pl:
      c = { x: t.x + t.width, y: s };
      break;
    case Fl:
      c = { x: t.x - n.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = i ? gu(i) : null;
  if (l != null) {
    var u = l === `y` ? `height` : `width`;
    switch (a) {
      case Rl:
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
function Qu(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    a = n.strategy,
    o = a === void 0 ? e.strategy : a,
    s = n.boundary,
    c = s === void 0 ? zl : s,
    l = n.rootBoundary,
    u = l === void 0 ? Bl : l,
    d = n.elementContext,
    f = d === void 0 ? Vl : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    h = n.padding,
    g = h === void 0 ? 0 : h,
    _ = bu(typeof g == `number` ? xu(g, Ll) : g),
    v = f === `popper` ? Hl : Vl,
    y = e.rects.popper,
    b = e.elements[m ? v : f],
    x = Xu(Jl(b) ? b : b.contextElement || du(e.elements.popper), c, u, o),
    S = ou(e.elements.reference),
    C = Zu({ reference: S, element: y, strategy: `absolute`, placement: i }),
    w = Ku(Object.assign({}, y, C)),
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
function $u(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    a = n.rootBoundary,
    o = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    l = c === void 0 ? Wl : c,
    u = Eu(r),
    d = u
      ? s
        ? Ul
        : Ul.filter(function (e) {
            return Eu(e) === u;
          })
      : Ll,
    f = d.filter(function (e) {
      return l.indexOf(e) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (t, n) {
    return ((t[n] = Qu(e, { placement: n, boundary: i, rootBoundary: a, padding: o })[eu(n)]), t);
  }, {});
  return Object.keys(p).sort(function (e, t) {
    return p[e] - p[t];
  });
}
function ed(e) {
  if (eu(e) === `auto`) return [];
  var t = Iu(e);
  return [Ru(e), t, Ru(t)];
}
function td(e) {
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
        _ = eu(g) === g,
        v = c || (_ || !m ? [Iu(g)] : ed(g)),
        y = [g].concat(v).reduce(function (e, n) {
          return e.concat(
            eu(n) === `auto`
              ? $u(t, {
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
        D = eu(E),
        O = Eu(E) === Rl,
        k = [`top`, Nl].indexOf(D) >= 0,
        A = k ? `width` : `height`,
        j = Qu(t, { placement: E, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        M = k ? (O ? Pl : Fl) : O ? Nl : `top`;
      b[A] > x[A] && (M = Iu(M));
      var N = Iu(M),
        ee = [];
      if (
        (a && ee.push(j[D] <= 0),
        s && ee.push(j[M] <= 0, j[N] <= 0),
        ee.every(function (e) {
          return e;
        }))
      ) {
        ((w = E), (C = !1));
        break;
      }
      S.set(E, ee);
    }
    if (C)
      for (
        var te = m ? 3 : 1,
          P = function (e) {
            var t = y.find(function (t) {
              var n = S.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return ((w = t), `break`);
          },
          ne = te;
        ne > 0 && P(ne) !== `break`;
        ne--
      );
    t.placement !== w && ((t.modifiersData[r]._skip = !0), (t.placement = w), (t.reset = !0));
  }
}
var nd = {
  name: `flip`,
  enabled: !0,
  phase: `main`,
  fn: td,
  requiresIfExists: [`offset`],
  data: { _skip: !1 },
};
function rd(e, t, n) {
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
function id(e) {
  return [`top`, Pl, Nl, Fl].some(function (t) {
    return e[t] >= 0;
  });
}
function ad(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Qu(t, { elementContext: `reference` }),
    s = Qu(t, { altBoundary: !0 }),
    c = rd(o, r),
    l = rd(s, i, a),
    u = id(c),
    d = id(l);
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
var od = {
  name: `hide`,
  enabled: !0,
  phase: `main`,
  requiresIfExists: [`preventOverflow`],
  fn: ad,
};
function sd(e, t, n) {
  var r = eu(e),
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
function cd(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    a = i === void 0 ? [0, 0] : i,
    o = Wl.reduce(function (e, n) {
      return ((e[n] = sd(n, t.rects, a)), e);
    }, {}),
    s = o[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = o));
}
var ld = { name: `offset`, enabled: !0, phase: `main`, requires: [`popperOffsets`], fn: cd };
function ud(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Zu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: `absolute`,
    placement: t.placement,
  });
}
var dd = { name: `popperOffsets`, enabled: !0, phase: `read`, fn: ud, data: {} };
function fd(e) {
  return e === `x` ? `y` : `x`;
}
function pd(e) {
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
    g = Qu(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    _ = eu(t.placement),
    v = Eu(t.placement),
    y = !v,
    b = gu(_),
    x = fd(b),
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
      var k = b === `y` ? `top` : Fl,
        A = b === `y` ? Nl : Pl,
        j = b === `y` ? `height` : `width`,
        M = S[b],
        N = M + g[k],
        ee = M - g[A],
        te = p ? -w[j] / 2 : 0,
        P = v === `start` ? C[j] : w[j],
        ne = v === `start` ? -w[j] : -C[j],
        re = t.elements.arrow,
        ie = p && re ? su(re) : { width: 0, height: 0 },
        F = t.modifiersData[`arrow#persistent`]
          ? t.modifiersData[`arrow#persistent`].padding
          : yu(),
        I = F[k],
        ae = F[A],
        oe = _u(0, C[j], ie[j]),
        L = y ? C[j] / 2 - te - oe - I - E.mainAxis : P - oe - I - E.mainAxis,
        se = y ? -C[j] / 2 + te + oe + ae + E.mainAxis : ne + oe + ae + E.mainAxis,
        ce = t.elements.arrow && hu(t.elements.arrow),
        le = ce ? (b === `y` ? ce.clientTop || 0 : ce.clientLeft || 0) : 0,
        ue = D?.[b] ?? 0,
        de = M + L - ue - le,
        fe = M + se - ue,
        pe = _u(p ? nu(N, de) : N, M, p ? tu(ee, fe) : ee);
      ((S[b] = pe), (O[b] = pe - M));
    }
    if (s) {
      var me = b === `x` ? `top` : Fl,
        he = b === `x` ? Nl : Pl,
        ge = S[x],
        _e = x === `y` ? `height` : `width`,
        ve = ge + g[me],
        ye = ge - g[he],
        be = [`top`, Fl].indexOf(_) !== -1,
        xe = D?.[x] ?? 0,
        Se = be ? ve : ge - C[_e] - w[_e] - xe + E.altAxis,
        Ce = be ? ge + C[_e] + w[_e] - xe - E.altAxis : ye,
        we = p && be ? vu(Se, ge, Ce) : _u(p ? Se : ve, ge, p ? Ce : ye);
      ((S[x] = we), (O[x] = we - ge));
    }
    t.modifiersData[r] = O;
  }
}
var md = {
  name: `preventOverflow`,
  enabled: !0,
  phase: `main`,
  fn: pd,
  requiresIfExists: [`offset`],
};
function hd(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function gd(e) {
  return e === ql(e) || !Yl(e) ? zu(e) : hd(e);
}
function _d(e) {
  var t = e.getBoundingClientRect(),
    n = ru(t.width) / e.offsetWidth || 1,
    r = ru(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function vd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Yl(t),
    i = Yl(t) && _d(t),
    a = du(t),
    o = ou(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Kl(t) !== `body` || Uu(a)) && (s = gd(t)),
      Yl(t) ? ((c = ou(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = Bu(a))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function yd(e) {
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
function bd(e) {
  var t = yd(e);
  return Gl.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n;
      }),
    );
  }, []);
}
function xd(e) {
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
function Sd(e) {
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
var Cd = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function wd() {
  return ![...arguments].some(function (e) {
    return !(e && typeof e.getBoundingClientRect == `function`);
  });
}
function Td(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    a = i === void 0 ? Cd : i;
  return function (e, t, n) {
    n === void 0 && (n = a);
    var i = {
        placement: `bottom`,
        orderedModifiers: [],
        options: Object.assign({}, Cd, a),
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
              reference: Jl(e) ? Gu(e) : e.contextElement ? Gu(e.contextElement) : [],
              popper: Gu(t),
            }));
          var s = bd(Sd([].concat(r, i.options.modifiers)));
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
            if (wd(t, n)) {
              ((i.rects = {
                reference: vd(t, hu(n), i.options.strategy === `fixed`),
                popper: su(n),
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
        update: xd(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(i));
          });
        }),
        destroy: function () {
          (u(), (s = !0));
        },
      };
    if (!wd(e, t)) return c;
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
var Ed = Td({ defaultModifiers: [Pu, dd, ju, $l, ld, nd, md, Tu, od] }),
  Dd = i((e, t) => {
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
  Od = e(a()),
  kd = e(Dd()),
  Ad = [],
  jd = function (e, t, n) {
    n === void 0 && (n = {});
    var r = F.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || `bottom`,
        strategy: n.strategy || `absolute`,
        modifiers: n.modifiers || Ad,
      },
      a = F.useState({
        styles: {
          popper: { position: i.strategy, left: `0`, top: `0` },
          arrow: { position: `absolute` },
        },
        attributes: {},
      }),
      o = a[0],
      s = a[1],
      c = F.useMemo(function () {
        return {
          name: `updateState`,
          enabled: !0,
          phase: `write`,
          fn: function (e) {
            var t = e.state,
              n = Object.keys(t.elements);
            Od.flushSync(function () {
              s({
                styles: jl(
                  n.map(function (e) {
                    return [e, t.styles[e] || {}];
                  }),
                ),
                attributes: jl(
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
      l = F.useMemo(
        function () {
          var e = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: `applyStyles`, enabled: !1 }]),
          };
          return (0, kd.default)(r.current, e) ? r.current || e : ((r.current = e), e);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      u = F.useRef();
    return (
      Ml(
        function () {
          u.current && u.current.setOptions(l);
        },
        [l],
      ),
      Ml(
        function () {
          if (!(e == null || t == null)) {
            var r = (n.createPopper || Ed)(e, t, l);
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
  Md = function () {},
  Nd = function () {
    return Promise.resolve(null);
  },
  Pd = [];
function Fd(e) {
  var t = e.placement,
    n = t === void 0 ? `bottom` : t,
    r = e.strategy,
    i = r === void 0 ? `absolute` : r,
    a = e.modifiers,
    o = a === void 0 ? Pd : a,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = F.useContext(Dl),
    f = F.useState(null),
    p = f[0],
    m = f[1],
    h = F.useState(null),
    g = h[0],
    _ = h[1];
  F.useEffect(
    function () {
      Al(l, p);
    },
    [l, p],
  );
  var v = F.useMemo(
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
    y = jd(s || d, p, v),
    b = y.state,
    x = y.styles,
    S = y.forceUpdate,
    C = y.update,
    w = F.useMemo(
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
          forceUpdate: S || Md,
          update: C || Nd,
        };
      },
      [m, _, n, b, x, C, S],
    );
  return Ol(u)(w);
}
function Id(e) {
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
            u = x(a.placement.split(`-`), 1)[0],
            d = ((i = a.modifiersData) == null || (i = i.offset) == null
              ? void 0
              : i[a.placement]) ?? { x: 0, y: 0 },
            f = s.width - 2 * t,
            p = s.height - 2 * t;
          (u === `top` && (p = a.rects.reference.y + d.y - t),
            u === `bottom` && (p = s.height - l.y - t),
            u === `left` && (f = a.rects.reference.x + d.x - t),
            u === `right` && (f = s.width - l.x - t),
            (a.styles.popper.maxWidth = `${f}px`),
            (a.styles.popper.maxHeight = `${p}px`));
        }
      },
    },
  ];
}
var Ld = 5,
  Rd = [
    {
      name: `flip`,
      options: {
        flipVariations: !1,
        padding: Ld,
        boundary: `clippingParents`,
        rootBoundary: `viewport`,
      },
    },
  ];
function zd() {
  return null;
}
var Bd = [0, 8];
function Vd(e) {
  var t = e.children,
    n = t === void 0 ? zd : t,
    r = e.offset,
    i = r === void 0 ? Bd : r,
    a = e.placement,
    o = a === void 0 ? `bottom-start` : a,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    l = e.modifiers,
    u = e.strategy,
    d = u === void 0 ? `fixed` : u,
    f = e.shouldFitViewport,
    p = f === void 0 ? !1 : f,
    m = x(i, 2),
    h = m[0],
    g = m[1],
    _ = (0, F.useMemo)(
      function () {
        var e = {
            name: `preventOverflow`,
            options: { padding: Ld, rootBoundary: p ? `viewport` : `document` },
          },
          t = { name: `offset`, options: { offset: [h, g] } },
          n = p ? Id({ viewportPadding: Ld }) : [];
        return [].concat(Rd, [e, t], j(n));
      },
      [h, g, p],
    ),
    v = (0, F.useMemo)(
      function () {
        return l == null ? _ : [].concat(j(_), j(l));
      },
      [_, l],
    );
  return F.createElement(Fd, { modifiers: v, placement: o, strategy: d, referenceElement: c }, n);
}
var Hd = `atlaskit-portal-container`,
  Ud = `body > .atlaskit-portal-container`,
  Wd = `atlaskit-portal`,
  Gd = function () {
    return document.body;
  },
  Kd = function () {
    var e = document.querySelector(Ud);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = Hd),
        (n.style.display = `flex`),
        (t = Gd()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  qd = function (e) {
    e.parentElement || Kd().appendChild(e);
  },
  Jd = function (e) {
    var t = document.createElement(`div`);
    return ((t.className = Wd), (t.style.zIndex = `${e}`), t);
  },
  Yd = function () {
    var e = document.querySelector(Ud);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = Hd),
        (n.style.display = `flex`),
        (t = Gd()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  Xd = function (e) {
    var t = Yd();
    t.contains(e) && t.removeChild(e);
  };
function Zd(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = r === void 0 ? !1 : r,
    a = (0, F.useMemo)(
      function () {
        return Jd(t);
      },
      [t],
    ),
    o = yc();
  return (
    qd(a),
    (0, F.useEffect)(
      function () {
        P(`import_into_jsm_in_template_gallery_killswitch`) && i && Xd(a);
      },
      [i, a],
    ),
    (0, F.useEffect)(
      function () {
        return function () {
          Xd(a);
        };
      },
      [a],
    ),
    (0, Od.createPortal)(o ? F.createElement(vc, { defaultColorMode: o }, n) : n, a)
  );
}
var Qd = typeof window < `u` ? F.useLayoutEffect : F.useEffect,
  $d = function () {
    return document !== void 0;
  },
  ef = function (e) {
    if ($d()) {
      var t = document.createElement(`div`);
      return ((t.className = Wd), (t.style.zIndex = `${e}`), t);
    }
  },
  tf = function () {
    return document !== void 0;
  },
  nf = function () {
    if (tf()) {
      var e = document.querySelector(Ud);
      if (!e) {
        var t,
          n = document.createElement(`div`);
        return (
          (n.className = Hd),
          (n.style.display = `flex`),
          (t = Gd()) == null || t.appendChild(n),
          n
        );
      }
      return e;
    }
  },
  rf = function () {
    return document !== void 0;
  },
  af = function (e) {
    if (rf() && e) {
      var t;
      (t = Gd()) == null || t.removeChild(e);
    }
  };
function of(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = x((0, F.useState)(null), 2),
    a = i[0],
    o = i[1],
    s = yc();
  return (
    Qd(
      function () {
        if (P(`import_into_jsm_in_template_gallery_killswitch`)) {
          if (!r) {
            var e = ef(t);
            o(e);
            var n = nf();
            return !e || !n
              ? void 0
              : (n.appendChild(e),
                function () {
                  (n && (n.removeChild(e), !n.hasChildNodes() && af(n)), o(null));
                });
          }
        } else {
          var i = ef(t);
          o(i);
          var a = nf();
          return !i || !a
            ? void 0
            : (a.appendChild(i),
              function () {
                (i && a.removeChild(i), o(null));
              });
        }
      },
      [t, r, P],
    ),
    a
      ? (0, Od.createPortal)(
          F.createElement(
            F.Suspense,
            { fallback: null },
            s ? F.createElement(vc, { defaultColorMode: s }, n) : n,
          ),
          a,
        )
      : null
  );
}
var sf = function (e) {
    var t = x((0, F.useState)(!1), 2),
      n = t[0],
      r = t[1],
      i = x(
        (0, F.useState)(function () {
          return e === `layoutEffect` ? Qd : F.useEffect;
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
  cf = `akPortalMount`,
  lf = `akPortalUnmount`,
  uf = {
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
  df = function (e) {
    return uf.hasOwnProperty(e) ? uf[e] : null;
  },
  ff = function (e, t) {
    var n = { layer: df(Number(t)), zIndex: t };
    return new CustomEvent(e, { detail: n });
  };
function pf(e, t) {
  var n = ff(e, t);
  window.dispatchEvent(n);
}
var mf = function (e) {
  var t = Number(e);
  (0, F.useEffect)(
    function () {
      return (
        pf(cf, t),
        function () {
          pf(lf, t);
        }
      );
    },
    [t],
  );
};
function hf(e) {
  var t = e.zIndex,
    n = t === void 0 ? 0 : t,
    r = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? `effect` : i,
    o = e.isClosed,
    s = o === void 0 ? !1 : o,
    c = sf(a);
  return (
    mf(n),
    P(`platform_design_system_team_portal_logic_r18_fix`)
      ? F.createElement(of, { zIndex: n, isClosed: s }, r)
      : c
        ? F.createElement(Zd, { zIndex: n, isClosed: s }, r)
        : null
  );
}
var gf = new Set(),
  _f = null;
function vf() {
  _f ||
    ((_f = (0, Ps.bindAll)(window, [
      { type: `dragend`, listener: yf },
      { type: `pointerdown`, listener: yf },
      {
        type: `pointermove`,
        listener: (function () {
          var e = 0;
          return function () {
            if (e < 20) {
              e++;
              return;
            }
            yf();
          };
        })(),
      },
    ])),
    Array.from(gf).forEach(function (e) {
      e.onDragStart();
    }));
}
function yf() {
  var e;
  ((e = _f) == null || e(),
    (_f = null),
    Array.from(gf).forEach(function (e) {
      e.onDragEnd();
    }));
}
function bf() {
  return (0, Ps.bindAll)(window, [
    { type: `dragstart`, listener: vf },
    { type: `dragenter`, listener: vf },
  ]);
}
var xf = null;
function Sf(e) {
  return (
    (xf ||= bf()),
    gf.add(e),
    e.onRegister({ isDragging: _f !== null }),
    function () {
      if ((gf.delete(e), gf.size === 0)) {
        var t;
        ((t = xf) == null || t(), (xf = null));
      }
    }
  );
}
function Cf(e) {
  var t = e || { top: 0, left: 0 };
  return {
    getBoundingClientRect: function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    },
    clientWidth: 0,
    clientHeight: 0,
  };
}
function wf(e, t) {
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
var Tf = null;
function Ef() {
  Tf != null && (window.clearTimeout(Tf), (Tf = null));
}
function Df(e, t) {
  (Ef(),
    (Tf = window.setTimeout(function () {
      ((Tf = null), e());
    }, t)));
}
var Of = null;
function kf(e) {
  var t = `waiting-to-show`;
  function n() {
    return !!(Of && Of.entry === e);
  }
  function r() {
    n() && (Ef(), (Of = null));
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
        ((t = `shown`), Ef());
        return;
      }
      if (t === `hide-animating`) {
        ((t = `shown`), Ef(), e.show({ isImmediate: !1 }));
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
          Df(function () {
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
    var n = P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? e.shouldAlwaysFadeIn : !1,
      r = !!(Of && Of.isVisible()) && !n;
    ((Of &&= (Ef(), Of.entry.hide({ isImmediate: !0 }), Of.entry.done(), null)),
      (Of = { entry: e, isVisible: l }));
    function i() {
      ((t = `shown`), e.show({ isImmediate: r }));
    }
    if (r) {
      i();
      return;
    }
    ((t = `waiting-to-show`), Df(i, e.delay));
  }
  return (
    d(),
    {
      keep: o,
      abort: r,
      isActive: n,
      requestHide: s,
      finishHideAnimation: c,
      mousePosition: P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? void 0 : u(),
      mousePos:
        e.source.type === `mouse` && P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? { clientX: e.source.clientX, clientY: e.source.clientY }
          : null,
    }
  );
}
function Af() {
  var e = bc();
  return function (t) {
    return `${e}-${t.toString()}`;
  };
}
function jf(e, t) {
  var n = Af();
  return t ? `${n(e)}` : void 0;
}
J();
var Mf = {
    shortcutSegmentsContainer: `_zulpv77o _1e0c1txw _1q511b66 _85i5v77o`,
    shortcutSegment: `_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p`,
  },
  Nf = function (e) {
    var t = e.shortcut;
    return F.createElement(
      `div`,
      { className: q([Mf.shortcutSegmentsContainer]) },
      t.map(function (e, t) {
        return F.createElement(`kbd`, { key: `${e}-${t}`, className: q([Mf.shortcutSegment]) }, e);
      }),
    );
  };
J();
var Pf = (0, F.forwardRef)(function (e, t) {
  var n = e.style,
    r = e.className,
    i = e.children,
    a = e.placement,
    o = e.testId,
    s = e.onMouseOut,
    c = e.onMouseOver,
    l = e.id,
    u = e.shortcut;
  return F.createElement(
    `div`,
    { ref: t, style: n, "data-testid": o ? `${o}--wrapper` : void 0 },
    F.createElement(
      `div`,
      {
        role: `tooltip`,
        className: q([`_80om73ad`, r]),
        onMouseOut: s,
        onMouseOver: c,
        "data-placement": a,
        "data-testid": o,
        id: l,
      },
      i,
      u && F.createElement(Nf, { shortcut: u }),
    ),
  );
});
((Pf.displayName = `TooltipPrimitive`), J());
var Ff = {
    base: `_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhk1aqn _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna`,
    truncate: `_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c`,
  },
  If = (0, F.forwardRef)(function (e, t) {
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
    return F.createElement(
      Pf,
      {
        ref: t,
        style: n,
        className: q([Ff.base, a && Ff.truncate, r]),
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
If.displayName = `TooltipContainer`;
function Lf(e, t) {
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
function Rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Lf(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Lf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var zf = Ja.tooltip(),
  Bf = { componentName: `tooltip`, packageName: `@atlaskit/tooltip`, packageVersion: `21.1.6` },
  Vf = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  Hf = function (e) {
    return e.split(`-`)[0];
  };
function Uf(e) {
  var t = e.children,
    n = e.position,
    r = n === void 0 ? `bottom` : n,
    i = e.mousePosition,
    a = i === void 0 ? `bottom` : i,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    l = e.component,
    u = l === void 0 ? If : l,
    d = e.tag,
    f = d === void 0 ? `div` : d,
    p = e.testId,
    m = e.delay,
    h = m === void 0 ? 300 : m,
    g = e.onShow,
    _ = g === void 0 ? Dn : g,
    v = e.onHide,
    y = v === void 0 ? Dn : v,
    b = e.canAppear,
    S = e.hideTooltipOnClick,
    C = S === void 0 ? !1 : S,
    w = e.hideTooltipOnMouseDown,
    T = w === void 0 ? !1 : w,
    E = e.analyticsContext,
    D = e.strategy,
    O = D === void 0 ? `fixed` : D,
    k = e.ignoreTooltipPointerEvents,
    A = k === void 0 ? !1 : k,
    j = e.isScreenReaderAnnouncementDisabled,
    M = j === void 0 ? !1 : j,
    N = e.shortcut,
    ee = e.UNSAFE_shouldAlwaysFadeIn,
    te = ee === void 0 ? !1 : ee,
    ne = e.UNSAFE_shouldRenderToParent,
    re = ne === void 0 ? !1 : ne,
    ie = r === `mouse` || r === `mouse-y` || r === `mouse-x`,
    I = ie ? a : r,
    ae = Hi(Rf({ fn: _, action: `displayed`, analyticsData: E }, Bf)),
    oe = Hi(Rf({ fn: y, action: `hidden`, analyticsData: E }, Bf)),
    L = (0, F.useRef)(null),
    se = x((0, F.useState)(`hide`), 2),
    ce = se[0],
    le = se[1],
    ue = (0, F.useRef)(null),
    de = (0, F.useRef)(null),
    fe = function (e) {
      ((de.current = e), (ue.current = e ? e.firstElementChild : null));
    },
    pe = (0, F.useCallback)(function (e) {
      ue.current = e;
    }, []),
    me = el(ce),
    he = el(ae),
    ge = el(oe),
    _e = el(h),
    ve = el(b),
    ye = (0, F.useRef)(!1),
    be = el(te),
    xe = (0, F.useCallback)(function (e) {
      ((L.current = e), (ye.current = !1));
    }, []),
    Se = (0, F.useCallback)(
      function () {
        L.current &&
          (ye.current && ge.current(), (L.current = null), (ye.current = !1), le(`hide`));
      },
      [ge],
    ),
    Ce = (0, F.useCallback)(
      function () {
        L.current &&= (L.current.abort(), ye.current && ge.current(), null);
      },
      [ge],
    );
  (0, F.useEffect)(
    function () {
      return function () {
        L.current && Ce();
      };
    },
    [Ce],
  );
  var we = (0, F.useRef)(!1);
  (0, F.useEffect)(function () {
    return Sf({
      onRegister: function (e) {
        we.current = e.isDragging;
      },
      onDragStart: function () {
        var e;
        ((e = L.current) == null || e.requestHide({ isImmediate: !0 }), (we.current = !0));
      },
      onDragEnd: function () {
        we.current = !1;
      },
    });
  }, []);
  var Te = (0, F.useCallback)(
    function (e) {
      var t;
      if (!we.current) {
        if ((L.current && !L.current.isActive() && Ce(), L.current && L.current.isActive())) {
          L.current.keep();
          return;
        }
        (ve.current && !((t = ve.current) != null && t.call(ve))) ||
          xe(
            kf({
              source: e,
              delay: _e.current,
              show: function (e) {
                var t = e.isImmediate;
                (ye.current || ((ye.current = !0), he.current()),
                  le(t ? `show-immediate` : `fade-in`));
              },
              hide: function (e) {
                e.isImmediate ? le(`hide`) : le(`before-fade-out`);
              },
              done: Se,
              shouldAlwaysFadeIn: P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                ? be.current
                : !1,
            }),
          );
      }
    },
    [ve, _e, Se, xe, Ce, he, be],
  );
  ($c({
    onClose: (0, F.useCallback)(
      function () {
        var e;
        (e = L.current) == null || e.requestHide({ isImmediate: !0 });
      },
      [L],
    ),
    isDisabled: ce === `hide` || ce === `fade-out`,
  }),
    (0, F.useEffect)(
      function () {
        return ce === `hide`
          ? Dn
          : (ce === `before-fade-out` && le(`fade-out`),
            (0, Ps.bind)(window, {
              type: `scroll`,
              listener: function () {
                L.current && L.current.requestHide({ isImmediate: !0 });
              },
              options: { capture: !0, passive: !0, once: !0 },
            }));
      },
      [ce],
    ));
  var R = (0, F.useCallback)(
      function () {
        T && L.current && L.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    Ee = (0, F.useCallback)(
      function () {
        C && L.current && L.current.requestHide({ isImmediate: !0 });
      },
      [C],
    ),
    De = (0, F.useCallback)(
      function (e) {
        (de.current && e.target === de.current) ||
          e.defaultPrevented ||
          (e.preventDefault(),
          Te(
            ie
              ? {
                  type: `mouse`,
                  mouse: P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                    ? void 0
                    : Cf({ left: e.clientX, top: e.clientY }),
                  clientX: e.clientX,
                  clientY: e.clientY,
                }
              : { type: `keyboard` },
          ));
      },
      [ie, Te],
    ),
    Oe = (0, F.useCallback)(function (e) {
      (de.current && e.target === de.current) ||
        e.defaultPrevented ||
        (e.preventDefault(), L.current && L.current.requestHide({ isImmediate: !1 }));
    }, []),
    ke = ie
      ? function (e) {
          var t;
          (t = L.current) != null &&
            t.isActive() &&
            (P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ||
              (L.current.mousePosition = Cf({ left: e.clientX, top: e.clientY })),
            (L.current.mousePos = { clientX: e.clientX, clientY: e.clientY }));
        }
      : void 0,
    Ae = (0, F.useCallback)(function () {
      if (L.current && L.current.isActive()) {
        L.current.keep();
        return;
      }
    }, []),
    je = (0, F.useCallback)(
      function (e) {
        try {
          if (!e.target.matches(`:focus-visible`)) return;
        } catch {}
        Te({ type: `keyboard` });
      },
      [Te],
    ),
    Me = (0, F.useCallback)(function () {
      L.current && L.current.requestHide({ isImmediate: !1 });
    }, []),
    Ne = (0, F.useCallback)(
      function (e) {
        e === `exiting` &&
          me.current === `fade-out` &&
          L.current &&
          L.current.finishHideAnimation();
      },
      [me],
    ),
    Pe = f,
    Fe = ce !== `hide` && !!o,
    Ie = !M && Fe,
    Le = ce !== `hide` && ce !== `fade-out`,
    Re = (0, F.useCallback)(function () {
      var e;
      (e = L.current) == null || e.requestHide({ isImmediate: !0 });
    }, []);
  il({ isOpen: Fe && Le, onClose: Re });
  var ze = function () {
      var e, t;
      return ie &&
        (e = L.current) != null &&
        e.mousePos &&
        ue.current &&
        P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
        ? wf(L.current.mousePos, { targetElement: ue.current, tooltipPosition: r })
        : ie &&
            (t = L.current) != null &&
            t.mousePosition &&
            !P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? L.current?.mousePosition
          : ue.current || void 0;
    },
    z = jf(`tooltip`, Ie),
    Be = {
      onMouseOver: De,
      onMouseOut: Oe,
      onMouseMove: ke,
      onMouseDown: R,
      onClick: Ee,
      onFocus: je,
      onBlur: Me,
    };
  p && (Be[`data-testid`] = `${p}--container`);
  var B = typeof t == `function`;
  (0, F.useEffect)(
    function () {
      if (!B) {
        var e = ue.current;
        if (!(!e || !z))
          return (
            e.setAttribute(`aria-describedby`, z),
            function () {
              return e.removeAttribute(`aria-describedby`);
            }
          );
      }
    },
    [B, z],
  );
  var V = Ie
      ? F.createElement(
          `span`,
          { "data-testid": p ? `${p}-hidden` : void 0, hidden: !0, id: z },
          typeof o == `function` ? o({}) : o,
        )
      : null,
    Ve = re && P(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? F.Fragment : Wf;
  return F.createElement(
    F.Fragment,
    null,
    typeof t == `function`
      ? F.createElement(
          F.Fragment,
          null,
          t(Rf(Rf({}, Be), {}, { "aria-describedby": z, ref: pe })),
          V,
        )
      : F.createElement(Pe, En({}, Be, { ref: fe, role: `presentation` }), t, V),
    Fe
      ? F.createElement(
          Ve,
          null,
          F.createElement(Vd, { placement: I, referenceElement: ze(), strategy: O }, function (e) {
            var t = e.ref,
              n = e.style,
              r = e.update,
              i = e.placement,
              a = ie ? void 0 : Vf[Hf(i)];
            return F.createElement(
              yl,
              { appear: !0 },
              Le &&
                F.createElement(
                  El,
                  {
                    distance: `constant`,
                    entranceDirection: a,
                    exitDirection: a,
                    onFinish: Ne,
                    duration: ce === `show-immediate` ? `none` : `medium`,
                  },
                  function (e) {
                    var i = e.className;
                    return F.createElement(
                      u,
                      {
                        ref: t,
                        className: `Tooltip ${i}`,
                        style: Rf(Rf({}, n), A && { pointerEvents: `none` }),
                        truncate: c,
                        placement: I,
                        testId: ze() ? p : p && `${p}--unresolved`,
                        onMouseOut: Oe,
                        onMouseOver: Ae,
                        shortcut: N,
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
var Wf = function (e) {
    var t = e.children;
    return F.createElement(hf, { zIndex: zf }, t);
  },
  Gf =
    `aria-label.aria-labelledby.analyticsContext.appearance.autoFocus.icon.interactionName.isDisabled.isLoading.isSelected.isTooltipDisabled.label.onClick.onClickCapture.onKeyDownCapture.onKeyUpCapture.onMouseDownCapture.onMouseUpCapture.onPointerDownCapture.onPointerUpCapture.onTouchEndCapture.onTouchStartCapture.shape.spacing.testId.tooltip.type`.split(
      `.`,
    ),
  Kf = [`className`, `css`, `as`, `style`],
  qf = F.memo(
    F.forwardRef(function (e, t) {
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
        d = e.isSelected,
        f = e.isTooltipDisabled,
        p = f === void 0 ? !0 : f,
        m = e.label,
        h = e.onClick,
        _ = e.onClickCapture,
        v = e.onKeyDownCapture,
        y = e.onKeyUpCapture,
        b = e.onMouseDownCapture,
        x = e.onMouseUpCapture,
        S = e.onPointerDownCapture,
        C = e.onPointerUpCapture,
        w = e.onTouchEndCapture,
        T = e.onTouchStartCapture,
        E = e.shape,
        D = e.spacing,
        O = e.testId,
        k = e.tooltip,
        A = e.type,
        j = A === void 0 ? `button` : A,
        M = g(e, Gf);
      (M.className, M.css, M.as, M.style);
      var N = g(M, Kf);
      return p
        ? F.createElement(
            Jc,
            En({}, N, {
              ref: t,
              appearance: i,
              autoFocus: a,
              isDisabled: c,
              isLoading: u,
              isSelected: d,
              isIconButton: !0,
              isCircle: E === `circle`,
              hasIconBefore: !!o,
              spacing: D,
              ariaLabelledBy: n,
              onClick: h,
              onClickCapture: _,
              onKeyDownCapture: v,
              onKeyUpCapture: y,
              onMouseDownCapture: b,
              onMouseUpCapture: x,
              onPointerDownCapture: S,
              onPointerUpCapture: C,
              onTouchStartCapture: T,
              onTouchEndCapture: w,
              testId: O,
              componentName: `IconButton`,
              analyticsContext: r,
              type: j,
              interactionName: s,
            }),
            F.createElement(
              Xc,
              { type: `icon`, isLoading: u },
              F.createElement(Qc, { icon: o }),
              F.createElement(la, null, m),
            ),
          )
        : F.createElement(
            Uf,
            {
              content: k?.content ?? m,
              testId: k?.testId,
              position: k?.position,
              delay: k?.delay,
              onShow: k?.onShow,
              onHide: k?.onHide,
              mousePosition: k?.mousePosition,
              analyticsContext: k?.analyticsContext,
              strategy: k?.strategy,
              tag: k?.tag,
              truncate: k?.truncate,
              component: k?.component,
              hideTooltipOnClick: k?.hideTooltipOnClick,
              hideTooltipOnMouseDown: k?.hideTooltipOnMouseDown,
              ignoreTooltipPointerEvents: k?.ignoreTooltipPointerEvents,
              shortcut: k?.shortcut,
            },
            function (e) {
              return F.createElement(
                Jc,
                En({}, N, {
                  appearance: i,
                  autoFocus: a,
                  isDisabled: c,
                  isLoading: u,
                  isSelected: d,
                  isIconButton: !0,
                  isCircle: E === `circle`,
                  hasIconBefore: !1,
                  spacing: D,
                  ariaLabelledBy: n,
                  onClick: function (t, n) {
                    var r;
                    (h?.(t, n), (r = e.onClick) == null || r.call(e, t));
                  },
                  onMouseOver: function (t) {
                    var n, r;
                    ((n = e.onMouseOver) == null || n.call(e, t),
                      (r = N.onMouseOver) == null || r.call(N, t));
                  },
                  onMouseOut: function (t) {
                    var n, r;
                    ((n = e.onMouseOut) == null || n.call(e, t),
                      (r = N.onMouseOut) == null || r.call(N, t));
                  },
                  onMouseMove: function (t) {
                    var n, r;
                    ((n = e.onMouseMove) == null || n.call(e, t),
                      (r = N.onMouseMove) == null || r.call(N, t));
                  },
                  onMouseDown: function (t) {
                    var n, r;
                    ((n = e.onMouseDown) == null || n.call(e, t),
                      (r = N.onMouseDown) == null || r.call(N, t));
                  },
                  onFocus: function (t) {
                    var n, r;
                    ((n = e.onFocus) == null || n.call(e, t),
                      (r = N.onFocus) == null || r.call(N, t));
                  },
                  onBlur: function (t) {
                    var n, r;
                    ((n = e.onBlur) == null || n.call(e, t),
                      (r = N.onBlur) == null || r.call(N, t));
                  },
                  ref: Oc([t, e?.ref].filter(Boolean)),
                  onMouseDownCapture: b,
                  onMouseUpCapture: x,
                  onKeyDownCapture: v,
                  onKeyUpCapture: y,
                  onTouchStartCapture: T,
                  onTouchEndCapture: w,
                  onPointerDownCapture: S,
                  onPointerUpCapture: C,
                  onClickCapture: _,
                  type: j,
                  testId: O,
                  analyticsContext: r,
                  interactionName: s,
                  componentName: `IconButton`,
                }),
                F.createElement(
                  Xc,
                  { type: `icon`, isLoading: u },
                  F.createElement(Qc, { icon: o }),
                  F.createElement(la, null, m),
                ),
              );
            },
          );
    }),
  );
qf.displayName = `IconButton`;
function Jf(e, t) {
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
function Yf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Jf(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Jf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Xf = {
    "100%": `100%`,
    "size.100": `1rem`,
    "size.200": `1.5rem`,
    "size.300": `2rem`,
    "size.400": `2.5rem`,
    "size.500": `3rem`,
    "size.600": `6rem`,
    "size.1000": `12rem`,
  },
  Z = {
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
  Q = Yf(Yf({}, Z), {
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
  Zf = {
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
  Qf = {
    "opacity.disabled": `var(--ds-opacity-disabled, 0.4)`,
    "opacity.loading": `var(--ds-opacity-loading, 0.2)`,
  },
  $f = {
    "elevation.shadow.overflow": `var(--ds-shadow-overflow, 0px 0px 8px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.overflow.perimeter": `var(--ds-shadow-overflow-perimeter, #1E1F211f)`,
    "elevation.shadow.overflow.spread": `var(--ds-shadow-overflow-spread, #1E1F2129)`,
    "elevation.shadow.overlay": `var(--ds-shadow-overlay, 0px 8px 12px #1E1F21, 0px 0px 1px #1E1F21)`,
    "elevation.shadow.raised": `var(--ds-shadow-raised, 0px 1px 1px #1E1F21, 0px 0px 1px #1E1F21)`,
  },
  ep = {
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
  tp = {
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
  np = {
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
  rp = {
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
  ip = {
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
  ap = {
    "border.width": `var(--ds-border-width, 1px)`,
    "border.width.selected": `var(--ds-border-width-selected, 2px)`,
    "border.width.focused": `var(--ds-border-width-focused, 2px)`,
  },
  op = {
    "radius.xsmall": `var(--ds-radius-xsmall, 2px)`,
    "radius.small": `var(--ds-radius-small, 3px)`,
    "radius.medium": `var(--ds-radius-medium, 6px)`,
    "radius.large": `var(--ds-radius-large, 8px)`,
    "radius.xlarge": `var(--ds-radius-xlarge, 12px)`,
    "radius.xxlarge": `var(--ds-radius-xxlarge, 16px)`,
    "radius.full": `var(--ds-radius-full, 9999px)`,
    "radius.tile": `var(--ds-radius-tile, 25%)`,
  },
  sp = {
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
  cp = {
    "font.weight.bold": `var(--ds-font-weight-bold, 653)`,
    "font.weight.medium": `var(--ds-font-weight-medium, 500)`,
    "font.weight.regular": `var(--ds-font-weight-regular, 400)`,
    "font.weight.semibold": `var(--ds-font-weight-semibold, 600)`,
  },
  lp = {
    "font.family.body": `var(--ds-font-family-body, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.body": `var(--ds-font-family-brand-body, "Charlie Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.brand.heading": `var(--ds-font-family-brand-heading, "Charlie Display", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    "font.family.code": `var(--ds-font-family-code, "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)`,
    "font.family.heading": `var(--ds-font-family-heading, "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  up = {
    medium: `var(--ds-font-body, normal 400 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    large: `var(--ds-font-body-large, normal 400 16px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-body-small, normal 400 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  dp = {
    bold: `var(--ds-font-weight-bold, 653)`,
    medium: `var(--ds-font-weight-medium, 500)`,
    regular: `var(--ds-font-weight-regular, 400)`,
    semibold: `var(--ds-font-weight-semibold, 600)`,
  },
  fp = {
    large: `var(--ds-font-metric-large, normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    medium: `var(--ds-font-metric-medium, normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
    small: `var(--ds-font-metric-small, normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif)`,
  },
  pp = [
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
  mp = function (e, t) {
    return Object.keys(t).reduce(function (n, r) {
      return ((n[r] = K(v({}, e, t[r]))), n);
    }, {});
  },
  hp = pp.reduce(function (e, t) {
    return ((e[t] = mp(t, Z)), e);
  }, {}),
  gp = pp.reduce(function (e, t) {
    return ((e[t] = mp(t, Z)), e);
  }, {}),
  _p = mp(`backgroundColor`, np);
(mp(`color`, rp),
  mp(`fontWeight`, cp),
  mp(`fontFamily`, lp),
  mp(`font`, sp),
  mp(`font`, up),
  mp(`fontWeight`, dp));
var vp = mp(O, ep),
  yp = function (e) {
    return ep[e] !== void 0;
  };
mp(`font`, fp);
function bp(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = xp(e)) || (t && e && typeof e.length == `number`)) {
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
function xp(e, t) {
  if (e) {
    if (typeof e == `string`) return Sp(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Sp(e, t)
          : void 0
    );
  }
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Cp = {
    backgroundColor: np,
    blockSize: Xf,
    borderBlockColor: tp,
    borderBlockEndColor: tp,
    borderBlockEndWidth: ap,
    borderBlockStartColor: tp,
    borderBlockStartWidth: ap,
    borderBlockWidth: ap,
    borderBottomColor: tp,
    borderBottomLeftRadius: op,
    borderBottomRightRadius: op,
    borderBottomWidth: ap,
    borderColor: tp,
    borderEndEndRadius: op,
    borderEndStartRadius: op,
    borderInlineColor: tp,
    borderInlineEndColor: tp,
    borderInlineEndWidth: ap,
    borderInlineStartColor: tp,
    borderInlineStartWidth: ap,
    borderInlineWidth: ap,
    borderLeftColor: tp,
    borderLeftWidth: ap,
    borderRadius: op,
    borderRightColor: tp,
    borderRightWidth: ap,
    borderStartEndRadius: op,
    borderStartStartRadius: op,
    borderTopColor: tp,
    borderTopLeftRadius: op,
    borderTopRightRadius: op,
    borderTopWidth: ap,
    borderWidth: ap,
    bottom: Q,
    boxShadow: $f,
    color: rp,
    columnGap: Z,
    font: sp,
    fontFamily: lp,
    fontWeight: cp,
    gap: Z,
    height: Xf,
    inlineSize: Xf,
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
    maxBlockSize: Xf,
    maxHeight: Xf,
    maxInlineSize: Xf,
    maxWidth: Xf,
    minBlockSize: Xf,
    minHeight: Xf,
    minInlineSize: Xf,
    minWidth: Xf,
    opacity: Qf,
    outlineColor: tp,
    outlineOffset: Q,
    outlineWidth: ap,
    padding: Z,
    paddingBlock: Z,
    paddingBlockEnd: Z,
    paddingBlockStart: Z,
    paddingBottom: Z,
    paddingInline: Z,
    paddingInlineEnd: Z,
    paddingInlineStart: Z,
    paddingLeft: Z,
    paddingRight: Z,
    paddingTop: Z,
    right: Q,
    rowGap: Z,
    top: Q,
    width: Xf,
    zIndex: ip,
  },
  wp = Symbol(`UNSAFE_INTERNAL_styles`),
  Tp = function () {
    return (
      (typeof process > `u` ? `undefined` : h(process)) === `object` && h({}) === `object` && !1
    );
  },
  Ep = /(\.|\s|&+|\*\>|#|\[.*\])/,
  Dp = /^@media .*$|^::?.*$|^@supports .*$/,
  Op = function (e) {
    return !e || h(e) !== `object`
      ? e
      : Array.isArray(e)
        ? e.map(Op)
        : (Object.entries(e).forEach(function (t) {
            var n = x(t, 2),
              r = n[0],
              i = n[1];
            if (h(i) === `object` && Dp.test(r)) {
              e[r] = Op(i);
              return;
            }
            if (Tp() && Ep.test(r)) throw Error(`Styles not supported for key '${r}'.`);
            r in Cp && (e[r] = Cp[r][i] ?? i);
          }),
          e);
  },
  kp = function (e) {
    return v({}, wp, K(Op(e)));
  },
  Ap = function (e) {
    if (Array.isArray(e)) {
      var t = [],
        n = [],
        r = bp(e),
        i;
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var a = i.value,
            o = Ap(a);
          (o.emotion && t.push.apply(t, j(o.emotion)), o.static && n.push(o.static));
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      return { emotion: t, static: n.join(` `) };
    }
    var s = (e || {})[wp];
    if (s) return { emotion: [s] };
    if (e) {
      var c = `${e}`;
      if (c) return { static: c };
    }
    return {};
  };
function jp(e) {
  return kp(e);
}
var Mp = [
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
  Np = [`className`],
  Pp = (0, F.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `div` : n,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = e.paddingBlockStart,
      l = e.paddingBlockEnd,
      u = e.paddingInline,
      d = e.paddingInlineStart,
      f = e.paddingInlineEnd,
      p = e.style,
      m = e.testId,
      h = e.xcss,
      _ = g(e, Mp);
    _.className;
    var v = g(_, Np),
      y = Ap(h),
      b = vi(
        r,
        En({ style: p, ref: t, className: y.static }, v, {
          css: [
            Fp,
            a && _p[a],
            yp(a) && vp[a],
            o && hp.padding[o],
            s && hp.paddingBlock[s],
            c && hp.paddingBlockStart[c],
            l && hp.paddingBlockEnd[l],
            u && hp.paddingInline[u],
            d && hp.paddingInlineStart[d],
            f && hp.paddingInlineEnd[f],
            y.emotion,
          ],
          "data-testid": m,
        }),
        i,
      );
    return a ? vi(_o.Provider, { value: a }, b) : b;
  }),
  Fp = K({ boxSizing: `border-box`, appearance: `none`, border: `none` }),
  Ip = {
    start: K({ justifyContent: `start` }),
    center: K({ justifyContent: `center` }),
    end: K({ justifyContent: `end` }),
    "space-between": K({ justifyContent: `space-between` }),
    "space-around": K({ justifyContent: `space-around` }),
    "space-evenly": K({ justifyContent: `space-evenly` }),
    stretch: K({ justifyContent: `stretch` }),
  },
  Lp = { column: K({ flexDirection: `column` }), row: K({ flexDirection: `row` }) },
  Rp = { wrap: K({ flexWrap: `wrap` }), nowrap: K({ flexWrap: `nowrap` }) },
  zp = {
    start: K({ alignItems: `start` }),
    center: K({ alignItems: `center` }),
    baseline: K({ alignItems: `baseline` }),
    end: K({ alignItems: `end` }),
    stretch: K({ alignItems: `stretch` }),
  },
  Bp = K({ display: `flex`, boxSizing: `border-box` }),
  Vp = (0, F.memo)(
    (0, F.forwardRef)(function (e, t) {
      var n = e.as,
        r = n === void 0 ? `div` : n,
        i = e.role,
        a = e.alignItems,
        o = e.justifyContent,
        s = e.gap,
        c = e.columnGap,
        l = e.rowGap,
        u = e.children,
        d = e.testId,
        f = e.direction,
        p = e.wrap,
        m = e.xcss,
        h = e.id,
        g = Ap(m);
      return vi(
        r,
        {
          id: h,
          role: i,
          className: g.static,
          css: [
            Bp,
            s && gp.gap[s],
            c && gp.columnGap[c],
            l && gp.rowGap[l],
            a && zp[a],
            f && Lp[f],
            o && Ip[o],
            p && Rp[p],
          ].concat(j(g.emotion || [])),
          "data-testid": d,
          ref: t,
        },
        u,
      );
    }),
  );
Vp.displayName = `Flex`;
var Hp = { hug: jp({ flexGrow: 0 }), fill: jp({ width: `100%`, flexGrow: 1 }) },
  Up = K({
    color: `var(--ds-text-subtle, #42526E)`,
    marginBlock: `var(--ds-space-0, 0px)`,
    marginInline: `var(--ds-space-negative-025, -2px)`,
    pointerEvents: `none`,
    userSelect: `none`,
  }),
  Wp = function (e) {
    var t = e.children;
    return vi(`span`, { css: Up }, t);
  },
  Gp = (0, F.memo)(
    (0, F.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `start` : i,
        o = e.shouldWrap,
        s = o === void 0 ? !1 : o,
        c = e.spread,
        l = e.grow,
        u = e.space,
        d = e.rowSpace,
        f = e.separator,
        p = e.xcss,
        m = e.testId,
        h = e.role,
        g = e.id,
        _ = e.children,
        v = typeof f == `string` ? vi(Wp, null, f) : f,
        y = v
          ? F.Children.toArray(_)
              .filter(Boolean)
              .map(function (e, t) {
                return vi(F.Fragment, { key: t }, f && t > 0 ? v : null, e);
              })
          : _,
        b = c || r,
        x = l ? [Hp[l]].concat(j(Array.isArray(p) ? p : [p])) : p;
      return vi(
        Vp,
        {
          id: g,
          as: n,
          role: h,
          alignItems: a,
          justifyContent: b,
          direction: `row`,
          gap: u,
          rowGap: d,
          wrap: s ? `wrap` : void 0,
          xcss: x,
          testId: m,
          ref: t,
        },
        y,
      );
    }),
  );
Gp.displayName = `Inline`;
var Kp = { hug: jp({ flexGrow: 0 }), fill: jp({ width: `100%`, flexGrow: 1 }) },
  qp = (0, F.memo)(
    (0, F.forwardRef)(function (e, t) {
      var n = e.as,
        r = e.alignInline,
        i = e.alignBlock,
        a = i === void 0 ? `stretch` : i,
        o = e.spread,
        s = e.grow,
        c = e.space,
        l = e.children,
        u = e.testId,
        d = e.xcss,
        f = e.role,
        p = e.id;
      return vi(
        Vp,
        {
          id: p,
          as: n,
          role: f,
          gap: c,
          direction: `column`,
          alignItems: r,
          justifyContent: o || a,
          xcss: s ? [Kp[s]].concat(j(Array.isArray(d) ? d : [d])) : d,
          testId: u,
          ref: t,
        },
        l,
      );
    }),
  );
qp.displayName = `Stack`;
var Jp = (0, F.createContext)(0),
  Yp = function () {
    return (0, F.useContext)(Jp);
  },
  Xp = function (e) {
    var t = Yp();
    return [t, (t && (t > 6 ? `div` : `h${t}`)) || e];
  };
J();
var Zp = {
    xxlarge: `h1`,
    xlarge: `h1`,
    large: `h2`,
    medium: `h3`,
    small: `h4`,
    xsmall: `h5`,
    xxsmall: `h6`,
  },
  Qp = { reset: `_dxsyidpf _1i144jg8 _nmk4glyw` },
  $p = {
    "color.text": `_1w90i7uo`,
    "color.text.inverse": `_1w9015cr`,
    "color.text.warning.inverse": `_1w901yd3`,
  },
  em = {
    xxlarge: `_fqox1iff`,
    xlarge: `_fqox12ln`,
    large: `_fqox10sd`,
    medium: `_fqox1af2`,
    small: `_fqox1e3o`,
    xsmall: `_fqox1qyo`,
    xxsmall: `_fqoxi4vh`,
  },
  tm = function (e) {
    var t = vo();
    return e || (Zf.hasOwnProperty(t) ? Zf[t] : `color.text`);
  },
  nm = (0, F.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.size,
      i = e.id,
      a = e.testId,
      o = e.as,
      s = e.color,
      c = x(Xp(Zp[r]), 2),
      l = c[0],
      u = c[1],
      d = o || u,
      f = d === `div` && l,
      p = tm(s);
    return F.createElement(
      d,
      {
        id: i,
        ref: t,
        "data-testid": a,
        role: f ? `heading` : void 0,
        "aria-level": f ? l : void 0,
        className: q([Qp.reset, em[r], $p[p]]),
      },
      n,
    );
  }),
  rm = n(() => {}),
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um = n(() => {
    (rm(),
      (im = e(o())),
      J(),
      (am = e(o())),
      (om = {
        none: `_1bsbpxbi _4t3ipxbi`,
        compact: `_1bsb1ejb _4t3i1ejb`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (sm = {
        none: `_1bsbutpp _4t3iutpp`,
        compact: `_1bsbpxbi _4t3ipxbi`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (cm = {
        medium: { none: 0, compact: 4, spacious: 4 },
        small: { none: 0, compact: 2.66, spacious: 8 },
      }),
      (lm = (0, am.memo)(function (e) {
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
          h = cm[f][l],
          g = m + 2 * h;
        return im.createElement(
          `span`,
          {
            "data-testid": i,
            role: a ? `img` : void 0,
            "aria-label": a || void 0,
            "aria-hidden": a ? void 0 : !0,
            style: { color: r },
            className: q([
              `_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9`,
              `_12va1onz _jcxd1r8n`,
              s && `_1bsb1kw7 _4t3i1kw7`,
              f === `small` && `_vwz4utpp`,
            ]),
          },
          im.createElement(`svg`, {
            fill: `none`,
            viewBox: `${0 - h} ${0 - h} ${g} ${g}`,
            role: `presentation`,
            dangerouslySetInnerHTML: d,
            className: q([
              `_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31`,
              s ? `_1bsb1kw7 _4t3i1kw7` : f === `small` ? sm[l] : om[l],
            ]),
          }),
        );
      })));
  }),
  dm = r({ Icon: () => lm, default: () => lm }),
  fm = n(() => {
    um();
  }),
  pm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((fm(), t(dm)));
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
  mm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((fm(), t(dm)));
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
  hm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((fm(), t(dm)));
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
  gm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((fm(), t(dm)));
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
  _m = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((fm(), t(dm)));
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
  vm = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((fm(), t(dm)));
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
  ym = e(mm()),
  bm = e(hm()),
  xm = e(gm()),
  Sm = e(_m()),
  Cm = e(vm());
function wm(e, t) {
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
function Tm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wm(Object(n), !0).forEach(function (t) {
          v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wm(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Em = {
  information: {
    backgroundColor: `var(--ds-background-information, #E9F2FE)`,
    Icon: xm.default,
    primaryIconColor: `var(--ds-icon-information, #357DE8)`,
  },
  warning: {
    backgroundColor: `var(--ds-background-warning, #FFF5DB)`,
    Icon: Cm.default,
    primaryIconColor: `var(--ds-icon-warning, #E06C00)`,
  },
  error: {
    backgroundColor: `var(--ds-background-danger, #FFECEB)`,
    Icon: bm.default,
    primaryIconColor: `var(--ds-icon-danger, #C9372C)`,
  },
  success: {
    backgroundColor: `var(--ds-background-success, #EFFFD6)`,
    Icon: Sm.default,
    primaryIconColor: `var(--ds-icon-success, #6A9A23)`,
  },
  discovery: {
    backgroundColor: `var(--ds-background-discovery, #F8EEFE)`,
    Icon: ym.default,
    primaryIconColor: `var(--ds-icon-discovery, #AF59E1)`,
  },
};
function Dm(e, t) {
  var n = Em[e] || Em.information,
    r =
      t ||
      function (t) {
        var r = t.primaryColor;
        return F.createElement(n.Icon, { color: r, spacing: `spacious`, label: e });
      };
  return Tm(Tm({}, n), {}, { Icon: r });
}
J();
var Om = e(pm()),
  km = {
    container: `_2rko12b0 _1rjcpxbi _18zrpxbi _1nmz1hna`,
    containerT26Shape: `_2rko1mok`,
    iconContainer: `_1mou1i6y _1e0c1txw`,
    contentContainer: `_16jlkb7n`,
    content: `_11c8fhey _syazi7uo`,
    actionsContainer: `_11c8fhey`,
    dismissButtonContainer: `_1pfh1i6y`,
  },
  Am = {
    information: `_bfhk19ip`,
    warning: `_bfhk1917`,
    error: `_bfhk1gly`,
    success: `_bfhk1y9u`,
    discovery: `_bfhk6vm6`,
  },
  jm = (0, F.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.appearance,
      i = r === void 0 ? `information` : r,
      a = e.actions,
      o = e.title,
      s = e.icon,
      c = e.isDismissible,
      l = e.onDismiss,
      u = e.testId,
      d = x((0, F.useState)(!1), 2),
      f = d[0],
      p = d[1],
      m = (0, F.useCallback)(
        function () {
          (l?.(), p(!0));
        },
        [l],
      ),
      h = Dm(i, s),
      g = h.primaryIconColor,
      _ = h.backgroundColor,
      v = h.Icon,
      y = a && a.type === F.Fragment ? a.props.children : a,
      b = F.Children.toArray(y);
    return c && f
      ? null
      : F.createElement(
          `section`,
          {
            "data-testid": u,
            ref: t,
            className: q([
              km.container,
              P(`platform-dst-shape-theme-default`) && km.containerT26Shape,
              Am[i],
            ]),
          },
          F.createElement(
            Io,
            { space: `space.200`, alignBlock: `stretch` },
            F.createElement(
              `div`,
              { className: q([km.iconContainer]) },
              F.createElement(v, {
                size: `medium`,
                primaryColor: g,
                secondaryColor: _,
                color: g,
                spacing: `spacious`,
              }),
            ),
            F.createElement(
              zo,
              { space: `space.100`, testId: u && `${u}--content`, xcss: km.contentContainer },
              !!o && F.createElement(nm, { as: `h2`, size: `small` }, o),
              F.createElement(`div`, { className: q([km.content]) }, n),
              b.length > 0 &&
                F.createElement(
                  Io,
                  {
                    shouldWrap: !0,
                    testId: u && `${u}--actions`,
                    separator: `·`,
                    space: `space.100`,
                    rowSpace: `space.0`,
                    role: b.length > 1 ? `list` : void 0,
                    xcss: km.actionsContainer,
                  },
                  b.map(function (e, t) {
                    return F.createElement(
                      Io,
                      { role: b.length > 1 ? `listitem` : void 0, key: t },
                      e,
                    );
                  }),
                ),
            ),
            c &&
              F.createElement(
                `div`,
                { className: q([km.dismissButtonContainer]) },
                F.createElement(qf, {
                  testId: u && `${u}--dismiss-button`,
                  label: `Dismiss`,
                  icon: Om.default,
                  appearance: `subtle`,
                  onClick: m,
                  spacing: `compact`,
                }),
              ),
          ),
        );
  });
jm.displayName = `SectionMessage`;
var Mm = i((e) => {
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
  Nm = i((e, t) => {
    t.exports = Mm();
  }),
  Pm = Tn(),
  $ = Nm(),
  Fm = jp({ width: `100%`, maxWidth: `100%` });
function Im() {
  let [e, t] = (0, F.useState)(1),
    [n, r] = (0, F.useState)(`dog`),
    [i, a] = (0, F.useState)([`1`, `2`, `1`]),
    [o, s] = (0, F.useState)([`1`, `2`, `3`]),
    [c, l] = (0, F.useState)([]),
    [u, d] = (0, F.useState)([]),
    [f, p] = (0, F.useState)(!1),
    [m, h] = (0, F.useState)(``),
    g = (e) => e.map((e) => Number(e.trim())),
    _ = (e) =>
      e.length === 3
        ? e.some((e) => Number.isNaN(e))
          ? `Vector values must be valid numbers`
          : null
        : `Vector must contain exactly 3 numbers`,
    v = (0, F.useCallback)(async () => {
      let e = await (0, Pm.invoke)(`fetch`);
      return (d(e), l([]), e);
    }, []),
    y = (0, F.useCallback)(async () => {
      (p(!0), h(``));
      try {
        h(`Loaded ${(await v()).length} document(s)`);
      } catch (e) {
        h(`Fetch failed: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
        p(!1);
      }
    }, [v]);
  return (
    (0, F.useEffect)(() => {
      e === 0 && y();
    }, [e, y]),
    (0, $.jsx)(Pp, {
      padding: `space.300`,
      children: (0, $.jsxs)(qp, {
        space: `space.300`,
        children: [
          (0, $.jsx)(`h2`, { children: `TiDB Vector Example (3D)` }),
          (0, $.jsx)(Pp, {
            xcss: Fm,
            children: (0, $.jsxs)(go, {
              id: `vector-tabs`,
              selected: e,
              onChange: (e) => t(e),
              children: [
                (0, $.jsxs)(Dc, {
                  children: [
                    (0, $.jsx)(Tc, { children: `Add documents` }),
                    (0, $.jsx)(Tc, { children: `Vector search` }),
                  ],
                }),
                (0, $.jsx)(Sc, {
                  children: (0, $.jsx)(Pp, {
                    padding: `space.200`,
                    children: (0, $.jsxs)(qp, {
                      space: `space.150`,
                      children: [
                        (0, $.jsx)(`h3`, { children: `Insert document` }),
                        (0, $.jsx)(`label`, { children: `Document` }),
                        (0, $.jsx)(so, { value: n, onChange: (e) => r(e.target.value) }),
                        (0, $.jsx)(`label`, { children: `Embedding vector (3 numbers)` }),
                        i.map((e, t) =>
                          (0, $.jsx)(
                            so,
                            {
                              value: e,
                              placeholder: `v${t + 1}`,
                              onChange: (e) => {
                                let n = [...i];
                                ((n[t] = e.target.value), a(n));
                              },
                            },
                            t,
                          ),
                        ),
                        (0, $.jsxs)(Gp, {
                          space: `space.100`,
                          children: [
                            (0, $.jsx)(Ha, {
                              appearance: `primary`,
                              onClick: async () => {
                                let e = g(i),
                                  t = _(e);
                                if (t) {
                                  h(t);
                                  return;
                                }
                                (p(!0), h(``));
                                try {
                                  let t = await (0, Pm.invoke)(`create`, {
                                    data: { document: n, embedding: e },
                                  });
                                  try {
                                    h(
                                      `Document created. insertId: ${t}. Showing ${(await v()).length} document(s).`,
                                    );
                                  } catch (e) {
                                    h(
                                      `Document created. insertId: ${t}. Could not refresh list: ${e instanceof Error ? e.message : String(e)}`,
                                    );
                                  }
                                } catch (e) {
                                  h(`Create failed: ${e instanceof Error ? e.message : String(e)}`);
                                } finally {
                                  p(!1);
                                }
                              },
                              isDisabled: f,
                              children: `Insert`,
                            }),
                            (0, $.jsx)(Ha, { onClick: y, isDisabled: f, children: `Fetch all` }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, $.jsx)(Sc, {
                  children: (0, $.jsx)(Pp, {
                    padding: `space.200`,
                    children: (0, $.jsxs)(qp, {
                      space: `space.150`,
                      children: [
                        (0, $.jsx)(`h3`, { children: `Vector search` }),
                        (0, $.jsx)(`label`, { children: `Query vector (3 numbers)` }),
                        o.map((e, t) =>
                          (0, $.jsx)(
                            so,
                            {
                              value: e,
                              placeholder: `q${t + 1}`,
                              onChange: (e) => {
                                let n = [...o];
                                ((n[t] = e.target.value), s(n));
                              },
                            },
                            t,
                          ),
                        ),
                        (0, $.jsx)(Gp, {
                          space: `space.100`,
                          children: (0, $.jsx)(Ha, {
                            appearance: `primary`,
                            onClick: async () => {
                              let e = g(o),
                                t = _(e);
                              if (t) {
                                h(t);
                                return;
                              }
                              (p(!0), h(``));
                              try {
                                let t = await (0, Pm.invoke)(`search`, { vector: e });
                                (l(t), d([]), h(`Found ${t.length} result(s)`));
                              } catch (e) {
                                h(`Search failed: ${e instanceof Error ? e.message : String(e)}`);
                              } finally {
                                p(!1);
                              }
                            },
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
          }),
          m
            ? (0, $.jsx)(jm, {
                appearance: `information`,
                children: (0, $.jsx)(`p`, { children: m }),
              })
            : null,
          (0, $.jsxs)(`section`, {
            children: [
              (0, $.jsx)(`h3`, { children: `Results` }),
              c.length > 0
                ? (0, $.jsxs)(`table`, {
                    children: [
                      (0, $.jsx)(`thead`, {
                        children: (0, $.jsxs)(`tr`, {
                          children: [
                            (0, $.jsx)(`th`, {
                              style: { textAlign: `left`, paddingRight: 16 },
                              children: `ID`,
                            }),
                            (0, $.jsx)(`th`, {
                              style: { textAlign: `left`, paddingRight: 16 },
                              children: `Document`,
                            }),
                            (0, $.jsx)(`th`, {
                              style: { textAlign: `left` },
                              children: `Distance`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        children: c.map((e) =>
                          (0, $.jsxs)(
                            `tr`,
                            {
                              children: [
                                (0, $.jsx)(`td`, { children: e.id }),
                                (0, $.jsx)(`td`, { children: e.document }),
                                (0, $.jsx)(`td`, { children: e.distance }),
                              ],
                            },
                            `${e.id}-${e.document}`,
                          ),
                        ),
                      }),
                    ],
                  })
                : null,
              u.length > 0
                ? (0, $.jsxs)(`table`, {
                    children: [
                      (0, $.jsx)(`thead`, {
                        children: (0, $.jsxs)(`tr`, {
                          children: [
                            (0, $.jsx)(`th`, {
                              style: { textAlign: `left`, paddingRight: 16 },
                              children: `ID`,
                            }),
                            (0, $.jsx)(`th`, {
                              style: { textAlign: `left`, paddingRight: 16 },
                              children: `Document`,
                            }),
                            (0, $.jsx)(`th`, {
                              style: { textAlign: `left` },
                              children: `Embedding`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        children: u.map((e) =>
                          (0, $.jsxs)(
                            `tr`,
                            {
                              children: [
                                (0, $.jsx)(`td`, { children: e.id }),
                                (0, $.jsx)(`td`, { children: e.document }),
                                (0, $.jsxs)(`td`, { children: [`[`, e.embedding.join(`, `), `]`] }),
                              ],
                            },
                            `${e.id}-${e.document}`,
                          ),
                        ),
                      }),
                    ],
                  })
                : null,
            ],
          }),
        ],
      }),
    })
  );
}
var Lm = (0, s().createRoot)(document.getElementById(`root`)),
  Rm = () => {
    Lm.render((0, $.jsx)(Im, {}));
  };
Pm.view.theme
  .enable()
  .then(() => {
    Rm();
  })
  .catch((e) => {
    (console.error(e.message), Rm());
  });
