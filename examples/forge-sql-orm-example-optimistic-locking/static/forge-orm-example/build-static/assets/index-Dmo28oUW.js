const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./iframe-resizer-DSle_E2m.js",
      "./rolldown-runtime-COnpUsM8.js",
      "./custom-theme-BHUa3WXR.js",
      "./custom-theme-loading-utils-ByyD2p9P.js",
      "./wrapNativeSuper-DbbKRv4Y.js",
      "./client-core-vendor-BFJ-FBHn.js",
      "./body-tlvIHgQr.js",
      "./inline-styles-if-ranking-4FDZxTl0.js",
      "./react-dom-vendor-DD8-Uyz5.js",
      "./inline-styles-if-ranking-DMqwCerb.css",
      "./body-BMQTJ_qR.css",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, n, r, t as i } from "./rolldown-runtime-COnpUsM8.js";
import { n as a, r as o, t as s } from "./react-dom-vendor-DD8-Uyz5.js";
import { t as c } from "./lodash-vendor-DVWR8zLq.js";
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
  u as S,
} from "./wrapNativeSuper-DbbKRv4Y.js";
import {
  _ as C,
  a as w,
  b as T,
  c as E,
  d as D,
  f as O,
  g as k,
  h as A,
  i as j,
  l as M,
  m as N,
  n as ee,
  o as te,
  p as ne,
  r as re,
  s as ie,
  t as ae,
  u as oe,
  v as se,
  x as P,
  y as F,
} from "./inline-styles-if-ranking-4FDZxTl0.js";
import {
  C as ce,
  D as I,
  E as le,
  O as ue,
  S as de,
  T as L,
  _ as fe,
  b as pe,
  d as me,
  g as he,
  h as R,
  i as ge,
  m as _e,
  t as ve,
  v as ye,
  w as z,
  x as be,
  y as xe,
} from "./custom-theme-loading-utils-ByyD2p9P.js";
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
var B = e(o()),
  V = r({
    __addDisposableResource: () => Je,
    __assign: () => Qe,
    __asyncDelegator: () => Be,
    __asyncGenerator: () => ze,
    __asyncValues: () => Ve,
    __await: () => Re,
    __awaiter: () => Ae,
    __classPrivateFieldGet: () => Ge,
    __classPrivateFieldIn: () => qe,
    __classPrivateFieldSet: () => Ke,
    __createBinding: () => $e,
    __decorate: () => H,
    __disposeResources: () => Ye,
    __esDecorate: () => Te,
    __exportStar: () => Me,
    __extends: () => Se,
    __generator: () => je,
    __importDefault: () => We,
    __importStar: () => Ue,
    __makeTemplateObject: () => He,
    __metadata: () => ke,
    __param: () => we,
    __propKey: () => De,
    __read: () => Pe,
    __rest: () => Ce,
    __rewriteRelativeImportExtension: () => Xe,
    __runInitializers: () => Ee,
    __setFunctionName: () => Oe,
    __spread: () => Fe,
    __spreadArray: () => Le,
    __spreadArrays: () => Ie,
    __values: () => Ne,
    default: () => rt,
  });
function Se(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  Ze(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Ce(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function H(e, t, n, r) {
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
function we(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function Te(e, t, n, r, i, a) {
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
function Ee(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function De(e) {
  return typeof e == `symbol` ? e : `${e}`;
}
function Oe(e, t, n) {
  return (
    typeof t == `symbol` && (t = t.description ? `[${t.description}]` : ``),
    Object.defineProperty(e, `name`, { configurable: !0, value: n ? `${n} ${t}` : t })
  );
}
function ke(e, t) {
  if (typeof Reflect == `object` && typeof Reflect.metadata == `function`)
    return Reflect.metadata(e, t);
}
function Ae(e, t, n, r) {
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
function je(e, t) {
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
function Me(e, t) {
  for (var n in e) n !== `default` && !Object.prototype.hasOwnProperty.call(t, n) && $e(t, e, n);
}
function Ne(e) {
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
function Pe(e, t) {
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
function Fe() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Pe(arguments[t]));
  return e;
}
function Ie() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
  return r;
}
function Le(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Re(e) {
  return this instanceof Re ? ((this.v = e), this) : new Re(e);
}
function ze(e, t, n) {
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
    e.value instanceof Re ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function Be(e) {
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
          return (n = !n) ? { value: Re(e[r](t)), done: !1 } : i ? i(t) : t;
        }
      : i;
  }
}
function Ve(e) {
  if (!Symbol.asyncIterator) throw TypeError(`Symbol.asyncIterator is not defined.`);
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Ne == `function` ? Ne(e) : e[Symbol.iterator]()),
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
function He(e, t) {
  return (Object.defineProperty ? Object.defineProperty(e, `raw`, { value: t }) : (e.raw = t), e);
}
function Ue(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n = tt(e), r = 0; r < n.length; r++) n[r] !== `default` && $e(t, e, n[r]);
  return (et(t, e), t);
}
function We(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ge(e, t, n, r) {
  if (n === `a` && !r) throw TypeError(`Private accessor was defined without a getter`);
  if (typeof t == `function` ? e !== t || !r : !t.has(e))
    throw TypeError(`Cannot read private member from an object whose class did not declare it`);
  return n === `m` ? r : n === `a` ? r.call(e) : r ? r.value : t.get(e);
}
function Ke(e, t, n, r, i) {
  if (r === `m`) throw TypeError(`Private method is not writable`);
  if (r === `a` && !i) throw TypeError(`Private accessor was defined without a setter`);
  if (typeof t == `function` ? e !== t || !i : !t.has(e))
    throw TypeError(`Cannot write private member to an object whose class did not declare it`);
  return (r === `a` ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
}
function qe(e, t) {
  if (t === null || (typeof t != `object` && typeof t != `function`))
    throw TypeError(`Cannot use 'in' operator on non-object`);
  return typeof e == `function` ? t === e : e.has(t);
}
function Je(e, t, n) {
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
function Ye(e) {
  function t(t) {
    ((e.error = e.hasError ? new nt(t, e.error, `An error was suppressed during disposal.`) : t),
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
function Xe(e, t) {
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
var Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it = n(() => {
    ((Ze = function (e, t) {
      return (
        (Ze =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        Ze(e, t)
      );
    }),
      (Qe = function () {
        return (
          (Qe =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Qe.apply(this, arguments)
        );
      }),
      ($e = Object.create
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
      (et = Object.create
        ? function (e, t) {
            Object.defineProperty(e, `default`, { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
      (tt = function (e) {
        return (
          (tt =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            }),
          tt(e)
        );
      }),
      (nt =
        typeof SuppressedError == `function`
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return ((r.name = `SuppressedError`), (r.error = e), (r.suppressed = t), r);
            }),
      (rt = {
        __extends: Se,
        __assign: Qe,
        __rest: Ce,
        __decorate: H,
        __param: we,
        __esDecorate: Te,
        __runInitializers: Ee,
        __propKey: De,
        __setFunctionName: Oe,
        __metadata: ke,
        __awaiter: Ae,
        __generator: je,
        __createBinding: $e,
        __exportStar: Me,
        __values: Ne,
        __read: Pe,
        __spread: Fe,
        __spreadArrays: Ie,
        __spreadArray: Le,
        __await: Re,
        __asyncGenerator: ze,
        __asyncDelegator: Be,
        __asyncValues: Ve,
        __makeTemplateObject: He,
        __importStar: Ue,
        __importDefault: We,
        __classPrivateFieldGet: Ge,
        __classPrivateFieldSet: Ke,
        __classPrivateFieldIn: qe,
        __addDisposableResource: Je,
        __disposeResources: Ye,
        __rewriteRelativeImportExtension: Xe,
      }));
  }),
  at = i((e) => {
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
  U = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BridgeAPIError = void 0),
      (e.BridgeAPIError = class extends Error {}));
  }),
  W = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getCallBridge = void 0));
    var t = U();
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
  ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.withRateLimiter = void 0));
    var t = U();
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
  st = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.makeInvoke = e.invoke = void 0));
    var t = W(),
      n = U(),
      r = ot(),
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
  ct = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (it(), t(V)).__exportStar(st(), e));
  }),
  lt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e._invokeEndpointFn = e.InvokeType = void 0));
    var t = W(),
      n = U(),
      r = ot(),
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
  ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeRemote = void 0));
    var t = lt();
    e.invokeRemote = (e) => (0, t._invokeEndpointFn)(t.InvokeType.REMOTE)(e);
  }),
  dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.invokeService = void 0));
    var t = lt();
    e.invokeService = (e) => (0, t._invokeEndpointFn)(t.InvokeType.SERVICE)(e);
  }),
  ft = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (it(), t(V));
    (n.__exportStar(ut(), e), n.__exportStar(dt(), e));
  }),
  pt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.submit = void 0));
    var t = W(),
      n = U(),
      r = (0, t.getCallBridge)();
    e.submit = async (e) => {
      if ((await r(`submit`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not submittable.`);
    };
  }),
  mt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.close = void 0));
    var t = W(),
      n = U(),
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
  ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.open = void 0));
    var t = W(),
      n = U(),
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
  gt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.refresh = void 0));
    var t = W(),
      n = U(),
      r = (0, t.getCallBridge)();
    e.refresh = async (e) => {
      if ((await r(`refresh`, e)) === !1)
        throw new n.BridgeAPIError(`this resource's view is not refreshable.`);
    };
  }),
  _t = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.createHistory = void 0));
    var t = (0, W().getCallBridge)();
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
  vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FORGE_SUPPORTED_LOCALE_CODES = e.I18N_BUNDLE_FOLDER_NAME = e.I18N_INFO_FILE_NAME = void 0),
      (e.I18N_INFO_FILE_NAME = `i18n-info.json`),
      (e.I18N_BUNDLE_FOLDER_NAME = `__LOCALES__`),
      (e.FORGE_SUPPORTED_LOCALE_CODES =
        `zh-CN.zh-TW.cs-CZ.da-DK.nl-NL.en-US.en-GB.et-EE.fi-FI.fr-FR.de-DE.hu-HU.is-IS.it-IT.ja-JP.ko-KR.no-NO.pl-PL.pt-BR.pt-PT.ro-RO.ru-RU.sk-SK.tr-TR.es-ES.sv-SE`.split(
          `.`,
        )));
  }),
  yt = i((e) => {
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
  bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getTranslationValueFromContent = e.getTranslationValue = void 0));
    var n = (it(), t(V)).__importDefault(c());
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
  xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Translator = void 0));
    var t = bt();
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
  St = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.ensureLocale = void 0));
    var t = vt(),
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
  Ct = i((e) => {
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
  wt = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
  }),
  Tt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getI18nSupportedModuleEntries =
        e.extractI18nPropertiesFromModules =
        e.extractI18nKeysFromModules =
        e.getTranslationValue =
          void 0));
    var n = (it(), t(V));
    (n.__exportStar(vt(), e),
      n.__exportStar(yt(), e),
      n.__exportStar(xt(), e),
      n.__exportStar(St(), e));
    var r = bt();
    Object.defineProperty(e, `getTranslationValue`, {
      enumerable: !0,
      get: function () {
        return r.getTranslationValue;
      },
    });
    var i = Ct();
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
      n.__exportStar(wt(), e));
  }),
  Et = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getContext = void 0));
    var t = W(),
      n = Tt(),
      r = (0, t.getCallBridge)();
    e.getContext = async () => {
      let e = await r(`getContext`),
        t = e?.locale;
      return (t && (e.locale = (0, n.ensureLocale)(t) ?? t), e);
    };
  }),
  Dt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.changeWindowTitle = void 0));
    var t = W(),
      n = U(),
      r = (0, t.getCallBridge)();
    e.changeWindowTitle = async (e) => {
      try {
        await r(`changeWindowTitle`, e);
      } catch {
        throw new n.BridgeAPIError(`the window title wasn't changed due to error.`);
      }
    };
  }),
  Ot = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.theme = void 0));
    var t = (0, W().getCallBridge)();
    e.theme = { enable: () => t(`enableTheming`) };
  }),
  kt = i((e) => {
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
  At = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.containsSerialisedBlobs =
        e.containsBlobs =
        e.deserialiseBlobsInPayload =
        e.serialiseBlobsInPayload =
          void 0));
    var t = kt(),
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
  jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.events = void 0));
    var t = W(),
      n = At(),
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
  Mt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.emitReadyEvent = void 0));
    var t = jt(),
      n = nn(),
      r = (0, W().getCallBridge)(),
      i = `EXTENSION_READY`;
    e.emitReadyEvent = async () => {
      let e = await n.view.getContext();
      await t.events.emit(i, { localId: e.localId });
      try {
        await r(`emitReadyEvent`);
      } catch {}
    };
  }),
  Nt,
  Pt,
  Ft,
  It,
  Lt = n(() => {
    ((Nt = `modulepreload`),
      (Pt = function (e, t) {
        return new URL(e, t).href;
      }),
      (Ft = {}),
      (It = function (e, t, n) {
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
              if (((t = Pt(t, n)), t in Ft)) return;
              Ft[t] = !0;
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
                ((o.rel = r ? `stylesheet` : Nt),
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
  Rt = i((e) => {
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
  zt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i));
  }),
  Bt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(zt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      return typeof e == `string` && t.default.test(e);
    }
    e.default = r;
  }),
  Vt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.unsafeStringify = i));
    var t = n(Bt());
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
  Ht = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Rt()),
      n = Vt();
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
  Ut = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(Bt());
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
  Wt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.URL = e.DNS = void 0),
      (e.default = s));
    var t = Vt(),
      n = r(Ut());
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
  Gt = i((e) => {
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
  Kt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Wt()),
      n = r(Gt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v3`, 48, n.default);
  }),
  qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = {
        randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      }));
  }),
  Jt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = i(qt()),
      n = i(Rt()),
      r = Vt();
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
  Yt = i((e) => {
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
  Xt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = r(Wt()),
      n = r(Yt());
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.default = (0, t.default)(`v5`, 80, n.default);
  }),
  Zt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.default = void 0),
      (e.default = `00000000-0000-0000-0000-000000000000`));
  }),
  Qt = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var t = n(Bt());
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e) {
      if (!(0, t.default)(e)) throw TypeError(`Invalid UUID`);
      return parseInt(e.slice(14, 15), 16);
    }
    e.default = r;
  }),
  $t = i((e) => {
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
    var t = u(Ht()),
      n = u(Kt()),
      r = u(Jt()),
      i = u(Xt()),
      a = u(Zt()),
      o = u(Qt()),
      s = u(Bt()),
      c = u(Vt()),
      l = u(Ut());
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  }),
  en = i((t) => {
    (Lt(),
      Object.defineProperty(t, `__esModule`, { value: !0 }),
      (t.createAdfRendererIframeProps = void 0));
    var n = $t();
    t.createAdfRendererIframeProps = async (t, r) => {
      let i = await It(
          () => import(`./iframe-resizer-DSle_E2m.js`).then((t) => e(t.default)),
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
  tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.onClose = void 0));
    var t = W(),
      n = U(),
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
  nn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.view = void 0));
    var t = pt(),
      n = mt(),
      r = ht(),
      i = gt(),
      a = _t(),
      o = Et(),
      s = Dt(),
      c = Ot(),
      l = Mt(),
      u = en(),
      d = tn();
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
  rn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (it(), t(V)).__exportStar(nn(), e));
  }),
  an = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.router = void 0));
    var t = (0, W().getCallBridge)();
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
  on = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (it(), t(V)).__exportStar(an(), e));
  }),
  sn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Modal = void 0));
    var t = W(),
      n = U(),
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
  cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (it(), t(V)).__exportStar(sn(), e));
  }),
  ln = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.productFetchApi = e.remoteFetchApi = void 0));
    var t = kt(),
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
  un = i((e) => {
    var t;
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.requestRemote = e.requestBitbucket = e.requestJira = e.requestConfluence = void 0));
    var n = W(),
      r = ln();
    ((t = (0, r.productFetchApi)((0, n.getCallBridge)())),
      (e.requestConfluence = t.requestConfluence),
      (e.requestJira = t.requestJira),
      (e.requestBitbucket = t.requestBitbucket),
      (e.requestRemote = (0, r.remoteFetchApi)((0, n.getCallBridge)()).requestRemote));
  }),
  dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = W(),
      n = U(),
      r = (0, t.getCallBridge)();
    e.showFlag = (e) => {
      if (!e.id) throw new n.BridgeAPIError(`"id" must be defined in flag options`);
      let t = r(`showFlag`, { ...e, type: e.type ?? `info` });
      return { close: async () => (await t, r(`closeFlag`, { id: e.id })) };
    };
  }),
  fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.showFlag = void 0));
    var t = dn();
    Object.defineProperty(e, `showFlag`, {
      enumerable: !0,
      get: function () {
        return t.showFlag;
      },
    });
  }),
  pn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (it(), t(V)).__exportStar(jt(), e));
  }),
  mn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.realtime = void 0));
    var t = (0, W().getCallBridge)();
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
  hn = i((e) => {
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
  gn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.Bitbucket = e.Confluence = e.Jira = e.realtime = void 0));
    var t = mn();
    Object.defineProperty(e, `realtime`, {
      enumerable: !0,
      get: function () {
        return t.realtime;
      },
    });
    var n = hn();
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
  _n = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.open = e.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0));
    var t = W(),
      n = U(),
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
  vn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.isEnabled = void 0));
    var t = (0, W().getCallBridge)();
    e.isEnabled = () => t(`isRovoEnabled`);
  }),
  yn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.rovo = void 0));
    var t = _n(),
      n = vn();
    e.rovo = { open: t.open, isEnabled: n.isEnabled };
  }),
  bn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (it(), t(V)).__exportStar(yn(), e));
  }),
  xn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createTranslationFunction = e.getTranslations = e.resetTranslationsCache = void 0));
    var t = Tt(),
      n = rn(),
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
  Sn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.permissions = void 0));
    var t = (0, W().getCallBridge)();
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
  Cn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.parseUrl = void 0));
    function t(e) {
      let t = e.match(/^(.*?:)/)?.[0] ?? `https:`,
        n = e.replace(t, ``).replace(/^\/*/, ``).replace(/^\\*/, ``).split(`?`)[0].split(`#`)[0],
        r = n.split(`/`)[0];
      return { protocol: t, hostname: r, pathname: n.slice(r.length) || `/` };
    }
    e.parseUrl = t;
  }),
  wn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.getEgressesBasedOnToggles =
        e.sortAndGroupEgressPermissionsByDomain =
        e.EgressCategory =
        e.EgressType =
        e.globToRegex =
          void 0));
    var t = Cn();
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
  Tn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.EgressFilteringService = void 0));
    var t = Cn(),
      n = wn();
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
  En = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (it(), t(V));
    (n.__exportStar(Tn(), e), n.__exportStar(Cn(), e), n.__exportStar(wn(), e));
  }),
  Dn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (it(), t(V)).__exportStar(En(), e));
  }),
  On = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkPermissions = e.createPermissionUtils = void 0));
    var t = Dn(),
      n = rn();
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
  kn = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (it(), t(V));
    (n.__exportStar(Sn(), e), n.__exportStar(On(), e));
  }),
  An = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = void 0),
      (e.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR = `Object Store bridge methods are restricted to Forge apps in a non-production environment. For more information please see https://developer.atlassian.com/platform/forge/cli-reference/environments/ for reference on Forge app environments.`));
  }),
  jn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.checkRestrictedEnvironment = void 0));
    var t = U(),
      n = rn(),
      r = An();
    e.checkRestrictedEnvironment = async () => {
      let { environmentType: e } = await n.view.getContext();
      if (e === `PRODUCTION`)
        throw new t.BridgeAPIError(r.BRIDGE_OBJECT_STORE_RESTRICTED_ENVIRONMENT_ERROR);
    };
  }),
  Mn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.upload = e.createUploadPromises = void 0));
    var t = ct(),
      n = U(),
      r = jn(),
      i = (0, W().getCallBridge)(),
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
  Nn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.deleteObjects = void 0));
    var t = ct(),
      n = U(),
      r = jn(),
      i = (0, W().getCallBridge)();
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
  Pn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.download = void 0));
    var t = ct(),
      n = U(),
      r = jn(),
      i = (0, W().getCallBridge)();
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
  Fn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.getMetadata = void 0));
    var t = ct(),
      n = U(),
      r = jn(),
      i = (0, W().getCallBridge)();
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
  In = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.createUploadPromises = e.objectStore = void 0));
    var t = Mn();
    Object.defineProperty(e, `createUploadPromises`, {
      enumerable: !0,
      get: function () {
        return t.createUploadPromises;
      },
    });
    var n = Nn(),
      r = Pn(),
      i = Fn();
    e.objectStore = {
      upload: t.upload,
      download: r.download,
      getMetadata: i.getMetadata,
      delete: n.deleteObjects,
    };
  }),
  Ln = i((e) => {
    Object.defineProperty(e, `__esModule`, { value: !0 });
    var n = (it(), t(V));
    (n.__exportStar(In(), e), n.__exportStar(An(), e));
  }),
  Rn = i((e) => {
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
  zn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }),
      (e.FeatureFlagEventType = void 0),
      (function (e) {
        e.CHECKFLAG = `checkFlag`;
      })((e.FeatureFlagEventType ||= {})));
  }),
  Bn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.trackFeatureFlagEvent = void 0));
    var t = W(),
      n = U(),
      r = ot(),
      i = zn(),
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
  Vn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.initFeatureFlags = void 0));
    var t = W(),
      n = U(),
      r = ot(),
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
  Hn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = Rn(),
      n = Bn(),
      r = Vn(),
      i = zn();
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
  Un = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.FeatureFlags = void 0));
    var t = Hn();
    Object.defineProperty(e, `FeatureFlags`, {
      enumerable: !0,
      get: function () {
        return t.FeatureFlags;
      },
    });
  }),
  Wn = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.i18n = e.NavigationTarget = void 0));
    var n = (it(), t(V)),
      r = at();
    (Object.defineProperty(e, `NavigationTarget`, {
      enumerable: !0,
      get: function () {
        return r.NavigationTarget;
      },
    }),
      n.__exportStar(ct(), e),
      n.__exportStar(ft(), e),
      n.__exportStar(rn(), e),
      n.__exportStar(on(), e),
      n.__exportStar(cn(), e),
      n.__exportStar(un(), e),
      n.__exportStar(fn(), e),
      n.__exportStar(pn(), e),
      n.__exportStar(gn(), e),
      n.__exportStar(bn(), e),
      (e.i18n = n.__importStar(xn())),
      n.__exportStar(kn(), e),
      n.__exportStar(Ln(), e),
      n.__exportStar(Un(), e));
  })();
function G(e) {
  var t = [...arguments].slice(1);
  throw Error(
    typeof e == `number`
      ? `[MobX] minified error nr: ` +
          e +
          (t.length ? ` ` + t.map(String).join(`,`) : ``) +
          `. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts`
      : `[MobX] ` + e,
  );
}
var Gn = {};
function Kn() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof window < `u`
      ? window
      : typeof global < `u`
        ? global
        : typeof self < `u`
          ? self
          : Gn;
}
var qn = Object.assign,
  Jn = Object.getOwnPropertyDescriptor,
  Yn = Object.defineProperty,
  Xn = Object.prototype,
  Zn = [];
Object.freeze(Zn);
var Qn = {};
Object.freeze(Qn);
var $n = typeof Proxy < `u`,
  er = Object.toString();
function tr() {
  $n || G(`Proxy not available`);
}
function nr(e) {
  var t = !1;
  return function () {
    if (!t) return ((t = !0), e.apply(this, arguments));
  };
}
var rr = function () {};
function ir(e) {
  return typeof e == `function`;
}
function ar(e) {
  switch (typeof e) {
    case `string`:
    case `symbol`:
    case `number`:
      return !0;
  }
  return !1;
}
function or(e) {
  return typeof e == `object` && !!e;
}
function sr(e) {
  if (!or(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n.toString() === er;
}
function cr(e) {
  var t = e?.constructor;
  return t ? t.name === `GeneratorFunction` || t.displayName === `GeneratorFunction` : !1;
}
function lr(e, t, n) {
  Yn(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function ur(e, t, n) {
  Yn(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function dr(e, t) {
  var n = `isMobX` + e;
  return (
    (t.prototype[n] = !0),
    function (e) {
      return or(e) && e[n] === !0;
    }
  );
}
function fr(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Map]`;
}
function pr(e) {
  return Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(e))) === null;
}
function mr(e) {
  return e != null && Object.prototype.toString.call(e) === `[object Set]`;
}
var hr = Object.getOwnPropertySymbols !== void 0;
function gr(e) {
  var t = Object.keys(e);
  if (!hr) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (t) {
          return Xn.propertyIsEnumerable.call(e, t);
        }),
      )
    : t;
}
var _r =
  typeof Reflect < `u` && Reflect.ownKeys
    ? Reflect.ownKeys
    : hr
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
function vr(e) {
  return e === null ? null : typeof e == `object` ? `` + e : e;
}
function yr(e, t) {
  return Xn.hasOwnProperty.call(e, t);
}
var br =
  Object.getOwnPropertyDescriptors ||
  function (e) {
    var t = {};
    return (
      _r(e).forEach(function (n) {
        t[n] = Jn(e, n);
      }),
      t
    );
  };
function xr(e, t) {
  return !!(e & t);
}
function Sr(e, t, n) {
  return (n ? (e |= t) : (e &= ~t), e);
}
function Cr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, jr(r.key), r));
  }
}
function Tr(e, t, n) {
  return (
    t && wr(e.prototype, t),
    n && wr(e, n),
    Object.defineProperty(e, `prototype`, { writable: !1 }),
    e
  );
}
function Er(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Mr(e)) || (t && e && typeof e.length == `number`)) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dr() {
  return (
    (Dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Dr.apply(null, arguments)
  );
}
function Or(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), kr(e, t));
}
function kr(e, t) {
  return (
    (kr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    kr(e, t)
  );
}
function Ar(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function jr(e) {
  var t = Ar(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Mr(e, t) {
  if (e) {
    if (typeof e == `string`) return Cr(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Cr(e, t)
          : void 0
    );
  }
}
var Nr = Symbol(`mobx-stored-annotations`);
function Pr(e) {
  function t(t, n) {
    if (Lr(n)) return e.decorate_20223_(t, n);
    Fr(t, n, e);
  }
  return Object.assign(t, e);
}
function Fr(e, t, n) {
  (yr(e, Nr) || lr(e, Nr, Dr({}, e[Nr])), Zr(n) || (e[Nr][t] = n));
}
function Ir(e) {
  return (yr(e, Nr) || lr(e, Nr, Dr({}, e[Nr])), e[Nr]);
}
function Lr(e) {
  return typeof e == `object` && typeof e.kind == `string`;
}
var K = Symbol(`mobx administration`),
  Rr = (function () {
    function e(e) {
      (e === void 0 && (e = `Atom`),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = e));
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (e) {
            return e();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (e) {
            return e();
          });
      }),
      (t.reportObserved = function () {
        return Oa(this);
      }),
      (t.reportChanged = function () {
        (Ea(), ka(this), Da());
      }),
      (t.toString = function () {
        return this.name_;
      }),
      Tr(e, [
        {
          key: `isBeingObserved`,
          get: function () {
            return xr(this.flags_, e.isBeingObservedMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.isBeingObservedMask_, t);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return xr(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.isPendingUnobservationMask_, t);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!xr(this.flags_, e.diffValueMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.diffValueMask_, t === 1);
          },
        },
      ])
    );
  })();
((Rr.isBeingObservedMask_ = 1), (Rr.isPendingUnobservationMask_ = 2), (Rr.diffValueMask_ = 4));
var zr = dr(`Atom`, Rr);
function Br(e, t, n) {
  (t === void 0 && (t = rr), n === void 0 && (n = rr));
  var r = new Rr(e);
  return (t !== rr && ao(r, t), n !== rr && oo(r, n), r);
}
function Vr(e, t) {
  return e === t;
}
function Hr(e, t) {
  return ks(e, t);
}
function Ur(e, t) {
  return ks(e, t, 1);
}
function Wr(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Gr = { identity: Vr, structural: Hr, default: Wr, shallow: Ur };
function Kr(e, t, n) {
  return To(e)
    ? e
    : Array.isArray(e)
      ? q.array(e, { name: n })
      : sr(e)
        ? q.object(e, void 0, { name: n })
        : fr(e)
          ? q.map(e, { name: n })
          : mr(e)
            ? q.set(e, { name: n })
            : typeof e == `function` && !$a(e) && !Co(e)
              ? cr(e)
                ? xo(e)
                : Qa(n, e)
              : e;
}
function qr(e, t, n) {
  if (e == null || fs(e) || Jo(e) || $o(e) || is(e)) return e;
  if (Array.isArray(e)) return q.array(e, { name: n, deep: !1 });
  if (sr(e)) return q.object(e, void 0, { name: n, deep: !1 });
  if (fr(e)) return q.map(e, { name: n, deep: !1 });
  if (mr(e)) return q.set(e, { name: n, deep: !1 });
}
function Jr(e) {
  return e;
}
function Yr(e, t) {
  return ks(e, t) ? t : e;
}
var Xr = `override`;
function Zr(e) {
  return e.annotationType_ === Xr;
}
function Qr(e, t) {
  return { annotationType_: e, options_: t, make_: $r, extend_: ei, decorate_20223_: ti };
}
function $r(e, t, n, r) {
  var i;
  return (i = this.options_) != null && i.bound
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 1
    : r === e.target_
      ? this.extend_(e, t, n, !1) === null
        ? 0
        : 2
      : $a(n.value)
        ? 1
        : (Yn(r, t, ri(e, this, t, n, !1)), 2);
}
function ei(e, t, n, r) {
  var i = ri(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function ti(e, t) {
  var n = t.kind,
    r = t.name,
    i = t.addInitializer,
    a = this,
    o = function (e) {
      return Xi(a.options_?.name ?? r.toString(), e, a.options_?.autoAction ?? !1);
    };
  if (n == `field`)
    return function (e) {
      var t,
        n = e;
      return (
        $a(n) || (n = o(n)),
        (t = a.options_) != null && t.bound && ((n = n.bind(this)), (n.isMobxAction = !0)),
        n
      );
    };
  if (n == `method`) {
    var s;
    return (
      $a(e) || (e = o(e)),
      (s = this.options_) != null &&
        s.bound &&
        i(function () {
          var e = this,
            t = e[r].bind(e);
          ((t.isMobxAction = !0), (e[r] = t));
        }),
      e
    );
  }
  G(
    `Cannot apply '` +
      a.annotationType_ +
      `' to '` +
      String(r) +
      `' (kind: ` +
      n +
      `):` +
      (`
'` +
        a.annotationType_ +
        `' can only be used on properties with a function value.`),
  );
}
function ni(e, t, n, r) {
  (t.annotationType_, r.value);
}
function ri(e, t, n, r, i) {
  var a, o;
  (i === void 0 && (i = Y.safeDescriptors), ni(e, t, n, r));
  var s = r.value;
  return (
    (a = t.options_) != null && a.bound && (s = s.bind(e.proxy_ ?? e.target_)),
    {
      value: Xi(
        t.options_?.name ?? n.toString(),
        s,
        t.options_?.autoAction ?? !1,
        (o = t.options_) != null && o.bound ? (e.proxy_ ?? e.target_) : void 0,
      ),
      configurable: i ? e.isPlainObject_ : !0,
      enumerable: !1,
      writable: !i,
    }
  );
}
function ii(e, t) {
  return { annotationType_: e, options_: t, make_: ai, extend_: oi, decorate_20223_: si };
}
function ai(e, t, n, r) {
  var i;
  return r === e.target_
    ? this.extend_(e, t, n, !1) === null
      ? 0
      : 2
    : (i = this.options_) != null &&
        i.bound &&
        (!yr(e.target_, t) || !Co(e.target_[t])) &&
        this.extend_(e, t, n, !1) === null
      ? 0
      : Co(n.value)
        ? 1
        : (Yn(r, t, li(e, this, t, n, !1, !1)), 2);
}
function oi(e, t, n, r) {
  var i = li(e, this, t, n, this.options_?.bound);
  return e.defineProperty_(t, i, r);
}
function si(e, t) {
  var n,
    r = t.name,
    i = t.addInitializer;
  return (
    Co(e) || (e = xo(e)),
    (n = this.options_) != null &&
      n.bound &&
      i(function () {
        var e = this,
          t = e[r].bind(e);
        ((t.isMobXFlow = !0), (e[r] = t));
      }),
    e
  );
}
function ci(e, t, n, r) {
  (t.annotationType_, r.value);
}
function li(e, t, n, r, i, a) {
  (a === void 0 && (a = Y.safeDescriptors), ci(e, t, n, r));
  var o = r.value;
  return (
    Co(o) || (o = xo(o)),
    i && ((o = o.bind(e.proxy_ ?? e.target_)), (o.isMobXFlow = !0)),
    { value: o, configurable: a ? e.isPlainObject_ : !0, enumerable: !1, writable: !a }
  );
}
function ui(e, t) {
  return { annotationType_: e, options_: t, make_: di, extend_: fi, decorate_20223_: pi };
}
function di(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function fi(e, t, n, r) {
  return (
    mi(e, this, t, n),
    e.defineComputedProperty_(t, Dr({}, this.options_, { get: n.get, set: n.set }), r)
  );
}
function pi(e, t) {
  var n = this,
    r = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var t = ls(this)[K],
        i = Dr({}, n.options_, { get: e, context: this });
      ((i.name ||= `ObservableObject.` + r.toString()), t.values_.set(r, new ia(i)));
    }),
    function () {
      return this[K].getObservablePropValue_(r);
    }
  );
}
function mi(e, t, n, r) {
  (t.annotationType_, r.get);
}
function hi(e, t) {
  return { annotationType_: e, options_: t, make_: gi, extend_: _i, decorate_20223_: vi };
}
function gi(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function _i(e, t, n, r) {
  return (
    yi(e, this, t, n),
    e.defineObservableProperty_(t, n.value, this.options_?.enhancer ?? Kr, r)
  );
}
function vi(e, t) {
  var n = this,
    r = t.kind,
    i = t.name,
    a = new WeakSet();
  function o(e, t) {
    var r = ls(e)[K],
      o = new ra(t, n.options_?.enhancer ?? Kr, `ObservableObject.` + i.toString(), !1);
    (r.values_.set(i, o), a.add(e));
  }
  if (r == `accessor`)
    return {
      get: function () {
        return (a.has(this) || o(this, e.get.call(this)), this[K].getObservablePropValue_(i));
      },
      set: function (e) {
        return (a.has(this) || o(this, e), this[K].setObservablePropValue_(i, e));
      },
      init: function (e) {
        return (a.has(this) || o(this, e), e);
      },
    };
}
function yi(e, t, n, r) {
  t.annotationType_;
}
var bi = `true`,
  xi = Si();
function Si(e) {
  return { annotationType_: bi, options_: e, make_: Ci, extend_: wi, decorate_20223_: Ti };
}
function Ci(e, t, n, r) {
  var i;
  if (n.get) return Gi.make_(e, t, n, r);
  if (n.set) {
    var a = $a(n.set) ? n.set : Xi(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: Y.safeDescriptors ? e.isPlainObject_ : !0,
          set: a,
        }) === null
        ? 0
        : 2
      : (Yn(r, t, { configurable: !0, set: a }), 2);
  }
  if (r !== e.target_ && typeof n.value == `function`) {
    var o;
    if (cr(n.value)) {
      var s;
      return ((s = this.options_) != null && s.autoBind ? xo.bound : xo).make_(e, t, n, r);
    }
    return ((o = this.options_) != null && o.autoBind ? Qa.bound : Qa).make_(e, t, n, r);
  }
  var c = this.options_?.deep === !1 ? q.ref : q;
  return (
    typeof n.value == `function` &&
      (i = this.options_) != null &&
      i.autoBind &&
      (n.value = n.value.bind(e.proxy_ ?? e.target_)),
    c.make_(e, t, n, r)
  );
}
function wi(e, t, n, r) {
  var i;
  return n.get
    ? Gi.extend_(e, t, n, r)
    : n.set
      ? e.defineProperty_(
          t,
          { configurable: Y.safeDescriptors ? e.isPlainObject_ : !0, set: Xi(t.toString(), n.set) },
          r,
        )
      : (typeof n.value == `function` &&
          (i = this.options_) != null &&
          i.autoBind &&
          (n.value = n.value.bind(e.proxy_ ?? e.target_)),
        (this.options_?.deep === !1 ? q.ref : q).extend_(e, t, n, r));
}
function Ti(e, t) {
  G(`'` + this.annotationType_ + `' cannot be used as a decorator`);
}
var Ei = `observable`,
  Di = `observable.ref`,
  Oi = `observable.shallow`,
  ki = `observable.struct`,
  Ai = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Ai);
function ji(e) {
  return e || Ai;
}
var Mi = hi(Ei),
  Ni = hi(Di, { enhancer: Jr }),
  Pi = hi(Oi, { enhancer: qr }),
  Fi = hi(ki, { enhancer: Yr }),
  Ii = Pr(Mi);
function Li(e) {
  return e.deep === !0 ? Kr : e.deep === !1 ? Jr : zi(e.defaultDecorator);
}
function Ri(e) {
  return e ? (e.defaultDecorator ?? Si(e)) : void 0;
}
function zi(e) {
  return e ? (e.options_?.enhancer ?? Kr) : Kr;
}
function Bi(e, t, n) {
  if (Lr(t)) return Mi.decorate_20223_(e, t);
  if (ar(t)) {
    Fr(e, t, Mi);
    return;
  }
  return To(e)
    ? e
    : sr(e)
      ? q.object(e, t, n)
      : Array.isArray(e)
        ? q.array(e, t)
        : fr(e)
          ? q.map(e, t)
          : mr(e)
            ? q.set(e, t)
            : typeof e == `object` && e
              ? e
              : q.box(e, t);
}
qn(Bi, Ii);
var q = qn(Bi, {
    box: function (e, t) {
      var n = ji(t);
      return new ra(e, Li(n), n.name, !0, n.equals);
    },
    array: function (e, t) {
      var n = ji(t);
      return (Y.useProxies === !1 || n.proxy === !1 ? Cs : Ho)(e, Li(n), n.name);
    },
    map: function (e, t) {
      var n = ji(t);
      return new Qo(e, Li(n), n.name);
    },
    set: function (e, t) {
      var n = ji(t);
      return new rs(e, Li(n), n.name);
    },
    object: function (e, t, n) {
      return Ds(function () {
        return po(Y.useProxies === !1 || n?.proxy === !1 ? ls({}, n) : ko({}, n), e, t);
      });
    },
    ref: Pr(Ni),
    shallow: Pr(Pi),
    deep: Ii,
    struct: Pr(Fi),
  }),
  Vi = `computed`,
  Hi = `computed.struct`,
  Ui = ui(Vi),
  Wi = ui(Hi, { equals: Gr.structural }),
  Gi = function (e, t) {
    if (Lr(t)) return Ui.decorate_20223_(e, t);
    if (ar(t)) return Fr(e, t, Ui);
    if (sr(e)) return Pr(ui(Vi, e));
    var n = sr(t) ? t : {};
    return ((n.get = e), (n.name ||= e.name || ``), new ia(n));
  };
(Object.assign(Gi, Ui), (Gi.struct = Pr(Wi)));
var Ki = 0,
  qi = 1,
  Ji = Jn(function () {}, `name`)?.configurable ?? !1,
  Yi = { value: `action`, configurable: !0, writable: !1, enumerable: !1 };
function Xi(e, t, n, r) {
  n === void 0 && (n = !1);
  function i() {
    return Zi(e, n, t, r || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    Ji && ((Yi.value = e), Yn(i, `name`, Yi)),
    i
  );
}
function Zi(e, t, n, r, i) {
  var a = Qi(e, t, r, i);
  try {
    return n.apply(r, i);
  } catch (e) {
    throw ((a.error_ = e), e);
  } finally {
    $i(a);
  }
}
function Qi(e, t, n, r) {
  var i = !1,
    a = 0,
    o = Y.trackingDerivation,
    s = !t || !o;
  Ea();
  var c = Y.allowStateChanges;
  s && (ma(), (c = ta(!0)));
  var l = ga(!0),
    u = {
      runAsAction_: s,
      prevDerivation_: o,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: l,
      notifySpy_: i,
      startTime_: a,
      actionId_: qi++,
      parentActionId_: Ki,
    };
  return ((Ki = u.actionId_), u);
}
function $i(e) {
  (Ki !== e.actionId_ && G(30),
    (Ki = e.parentActionId_),
    e.error_ !== void 0 && (Y.suppressReactionErrors = !0),
    na(e.prevAllowStateChanges_),
    _a(e.prevAllowStateReads_),
    Da(),
    e.runAsAction_ && ha(e.prevDerivation_),
    (Y.suppressReactionErrors = !1));
}
function ea(e, t) {
  var n = ta(e);
  try {
    return t();
  } finally {
    na(n);
  }
}
function ta(e) {
  var t = Y.allowStateChanges;
  return ((Y.allowStateChanges = e), t);
}
function na(e) {
  Y.allowStateChanges = e;
}
var ra = (function (e) {
    function t(t, n, r, i, a) {
      var o;
      return (
        r === void 0 && (r = `ObservableValue`),
        i === void 0 && (i = !0),
        a === void 0 && (a = Gr.default),
        (o = e.call(this, r) || this),
        (o.enhancer = void 0),
        (o.name_ = void 0),
        (o.equals = void 0),
        (o.hasUnreportedChange_ = !1),
        (o.interceptors_ = void 0),
        (o.changeListeners_ = void 0),
        (o.value_ = void 0),
        (o.dehancer = void 0),
        (o.enhancer = n),
        (o.name_ = r),
        (o.equals = a),
        (o.value_ = n(t, void 0, r)),
        o
      );
    }
    Or(t, e);
    var n = t.prototype;
    return (
      (n.dehanceValue = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (n.set = function (e) {
        (this.value_, (e = this.prepareNewValue_(e)), e !== Y.UNCHANGED && this.setNewValue_(e));
      }),
      (n.prepareNewValue_ = function (e) {
        if (Ao(this)) {
          var t = Mo(this, { object: this, type: Ro, newValue: e });
          if (!t) return Y.UNCHANGED;
          e = t.newValue;
        }
        return (
          (e = this.enhancer(e, this.value_, this.name_)),
          this.equals(this.value_, e) ? Y.UNCHANGED : e
        );
      }),
      (n.setNewValue_ = function (e) {
        var t = this.value_;
        ((this.value_ = e),
          this.reportChanged(),
          No(this) && Fo(this, { type: Ro, object: this, newValue: e, oldValue: t }));
      }),
      (n.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (n.intercept_ = function (e) {
        return jo(this, e);
      }),
      (n.observe_ = function (e, t) {
        return (
          t &&
            e({
              observableKind: `value`,
              debugObjectName: this.name_,
              object: this,
              type: Ro,
              newValue: this.value_,
              oldValue: void 0,
            }),
          Po(this, e)
        );
      }),
      (n.raw = function () {
        return this.value_;
      }),
      (n.toJSON = function () {
        return this.get();
      }),
      (n.toString = function () {
        return this.name_ + `[` + this.value_ + `]`;
      }),
      (n.valueOf = function () {
        return vr(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Rr),
  ia = (function () {
    function e(e) {
      ((this.dependenciesState_ = J.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new sa(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = oa.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        e.get || G(31),
        (this.derivation = e.get),
        (this.name_ = e.name || `ComputedValue`),
        e.set && (this.setter_ = Xi(`ComputedValue-setter`, e.set)),
        (this.equals_ = e.equals || (e.compareStructural || e.struct ? Gr.structural : Gr.default)),
        (this.scope_ = e.context),
        (this.requiresReaction_ = e.requiresReaction),
        (this.keepAlive_ = !!e.keepAlive));
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        ja(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (e) {
            return e();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (e) {
            return e();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && G(32, this.name_, this.derivation),
          Y.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          la(this) &&
            (this.warnAboutUntrackedRead_(), Ea(), (this.value_ = this.computeValue_(!1)), Da());
        else if ((Oa(this), la(this))) {
          var e = Y.trackingContext;
          (this.keepAlive_ && !e && (Y.trackingContext = this),
            this.trackAndCompute() && Aa(this),
            (Y.trackingContext = e));
        }
        var t = this.value_;
        if (ca(t)) throw t.cause;
        return t;
      }),
      (t.set = function (e) {
        if (this.setter_) {
          (this.isRunningSetter && G(33, this.name_), (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, e);
          } finally {
            this.isRunningSetter = !1;
          }
        } else G(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var e = this.value_,
          t = this.dependenciesState_ === J.NOT_TRACKING_,
          n = this.computeValue_(!0),
          r = t || ca(e) || ca(n) || !this.equals_(e, n);
        return (r && (this.value_ = n), r);
      }),
      (t.computeValue_ = function (e) {
        this.isComputing = !0;
        var t = ta(!1),
          n;
        if (e) n = ua(this, this.derivation, this.scope_);
        else if (Y.disableErrorBoundaries === !0) n = this.derivation.call(this.scope_);
        else
          try {
            n = this.derivation.call(this.scope_);
          } catch (e) {
            n = new sa(e);
          }
        return (na(t), (this.isComputing = !1), n);
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (fa(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (e, t) {
        var n = this,
          r = !0,
          i = void 0;
        return eo(function () {
          var a = n.get();
          if (!r || t) {
            var o = ma();
            (e({
              observableKind: `computed`,
              debugObjectName: n.name_,
              type: Ro,
              object: n,
              newValue: a,
              oldValue: i,
            }),
              ha(o));
          }
          ((r = !1), (i = a));
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + `[` + this.derivation.toString() + `]`;
      }),
      (t.valueOf = function () {
        return vr(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Tr(e, [
        {
          key: `isComputing`,
          get: function () {
            return xr(this.flags_, e.isComputingMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.isComputingMask_, t);
          },
        },
        {
          key: `isRunningSetter`,
          get: function () {
            return xr(this.flags_, e.isRunningSetterMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.isRunningSetterMask_, t);
          },
        },
        {
          key: `isBeingObserved`,
          get: function () {
            return xr(this.flags_, e.isBeingObservedMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.isBeingObservedMask_, t);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return xr(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.isPendingUnobservationMask_, t);
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!xr(this.flags_, e.diffValueMask_);
          },
          set: function (t) {
            this.flags_ = Sr(this.flags_, e.diffValueMask_, t === 1);
          },
        },
      ])
    );
  })();
((ia.isComputingMask_ = 1),
  (ia.isRunningSetterMask_ = 2),
  (ia.isBeingObservedMask_ = 4),
  (ia.isPendingUnobservationMask_ = 8),
  (ia.diffValueMask_ = 16));
var aa = dr(`ComputedValue`, ia),
  J;
(function (e) {
  ((e[(e.NOT_TRACKING_ = -1)] = `NOT_TRACKING_`),
    (e[(e.UP_TO_DATE_ = 0)] = `UP_TO_DATE_`),
    (e[(e.POSSIBLY_STALE_ = 1)] = `POSSIBLY_STALE_`),
    (e[(e.STALE_ = 2)] = `STALE_`));
})((J ||= {}));
var oa;
(function (e) {
  ((e[(e.NONE = 0)] = `NONE`), (e[(e.LOG = 1)] = `LOG`), (e[(e.BREAK = 2)] = `BREAK`));
})((oa ||= {}));
var sa = function (e) {
  ((this.cause = void 0), (this.cause = e));
};
function ca(e) {
  return e instanceof sa;
}
function la(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_:
      for (var t = ga(!0), n = ma(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
        var o = r[a];
        if (aa(o)) {
          if (Y.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return (ha(n), _a(t), !0);
            }
          if (e.dependenciesState_ === J.STALE_) return (ha(n), _a(t), !0);
        }
      }
      return (va(e), ha(n), _a(t), !1);
  }
}
function ua(e, t, n) {
  var r = ga(!0);
  (va(e),
    (e.newObserving_ = Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++Y.runId));
  var i = Y.trackingDerivation;
  ((Y.trackingDerivation = e), Y.inBatch++);
  var a;
  if (Y.disableErrorBoundaries === !0) a = t.call(n);
  else
    try {
      a = t.call(n);
    } catch (e) {
      a = new sa(e);
    }
  return (Y.inBatch--, (Y.trackingDerivation = i), da(e), _a(r), a);
}
function da(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = J.UP_TO_DATE_,
      i = 0,
      a = e.unboundDepsCount_,
      o = 0;
    o < a;
    o++
  ) {
    var s = n[o];
    (s.diffValue === 0 && ((s.diffValue = 1), i !== o && (n[i] = s), i++),
      s.dependenciesState_ > r && (r = s.dependenciesState_));
  }
  for (n.length = i, e.newObserving_ = null, a = t.length; a--; ) {
    var c = t[a];
    (c.diffValue === 0 && wa(c, e), (c.diffValue = 0));
  }
  for (; i--; ) {
    var l = n[i];
    l.diffValue === 1 && ((l.diffValue = 0), Ca(l, e));
  }
  r !== J.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function fa(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) wa(t[n], e);
  e.dependenciesState_ = J.NOT_TRACKING_;
}
function pa(e) {
  var t = ma();
  try {
    return e();
  } finally {
    ha(t);
  }
}
function ma() {
  var e = Y.trackingDerivation;
  return ((Y.trackingDerivation = null), e);
}
function ha(e) {
  Y.trackingDerivation = e;
}
function ga(e) {
  var t = Y.allowStateReads;
  return ((Y.allowStateReads = e), t);
}
function _a(e) {
  Y.allowStateReads = e;
}
function va(e) {
  if (e.dependenciesState_ !== J.UP_TO_DATE_) {
    e.dependenciesState_ = J.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = J.UP_TO_DATE_;
  }
}
var ya = function () {
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
  ba = !0,
  xa = !1,
  Y = (function () {
    var e = Kn();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ba = !1),
      e.__mobxGlobals && e.__mobxGlobals.version !== new ya().version && (ba = !1),
      ba
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ya()))
        : (setTimeout(function () {
            xa || G(35);
          }, 1),
          new ya())
    );
  })();
function Sa() {
  if (((Y.pendingReactions.length || Y.inBatch || Y.isRunningReactions) && G(36), (xa = !0), ba)) {
    var e = Kn();
    (--e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (Y = new ya()));
  }
}
function Ca(e, t) {
  (e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_));
}
function wa(e, t) {
  (e.observers_.delete(t), e.observers_.size === 0 && Ta(e));
}
function Ta(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), Y.pendingUnobservations.push(e));
}
function Ea() {
  Y.inBatch++;
}
function Da() {
  if (--Y.inBatch === 0) {
    Fa();
    for (var e = Y.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      ((n.isPendingUnobservation = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
          n instanceof ia && n.suspend_()));
    }
    Y.pendingUnobservations = [];
  }
}
function Oa(e) {
  var t = Y.trackingDerivation;
  return t === null
    ? (e.observers_.size === 0 && Y.inBatch > 0 && Ta(e), !1)
    : (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved && Y.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved);
}
function ka(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (e) {
      (e.dependenciesState_ === J.UP_TO_DATE_ && e.onBecomeStale_(),
        (e.dependenciesState_ = J.STALE_));
    }));
}
function Aa(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.POSSIBLY_STALE_
        ? (t.dependenciesState_ = J.STALE_)
        : t.dependenciesState_ === J.UP_TO_DATE_ && (e.lowestObserverState_ = J.UP_TO_DATE_);
    }));
}
function ja(e) {
  e.lowestObserverState_ === J.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = J.POSSIBLY_STALE_),
    e.observers_.forEach(function (e) {
      e.dependenciesState_ === J.UP_TO_DATE_ &&
        ((e.dependenciesState_ = J.POSSIBLY_STALE_), e.onBecomeStale_());
    }));
}
var Ma = (function () {
  function e(e, t, n, r) {
    (e === void 0 && (e = `Reaction`),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = J.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = oa.NONE),
      (this.name_ = e),
      (this.onInvalidate_ = t),
      (this.errorHandler_ = n),
      (this.requiresObservable_ = r));
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled || ((this.isScheduled = !0), Y.pendingReactions.push(this), Fa());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        (Ea(), (this.isScheduled = !1));
        var e = Y.trackingContext;
        if (((Y.trackingContext = this), la(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }
        ((Y.trackingContext = e), Da());
      }
    }),
    (t.track = function (e) {
      if (!this.isDisposed) {
        (Ea(), (this.isRunning = !0));
        var t = Y.trackingContext;
        Y.trackingContext = this;
        var n = ua(this, e, void 0);
        ((Y.trackingContext = t),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && fa(this),
          ca(n) && this.reportExceptionInDerivation_(n.cause),
          Da());
      }
    }),
    (t.reportExceptionInDerivation_ = function (e) {
      var t = this;
      if (this.errorHandler_) {
        this.errorHandler_(e, this);
        return;
      }
      if (Y.disableErrorBoundaries) throw e;
      var n = `[mobx] uncaught error in '` + this + `'`;
      (Y.suppressReactionErrors || console.error(n, e),
        Y.globalReactionErrorHandlers.forEach(function (n) {
          return n(e, t);
        }));
    }),
    (t.dispose = function () {
      this.isDisposed || ((this.isDisposed = !0), this.isRunning || (Ea(), fa(this), Da()));
    }),
    (t.getDisposer_ = function (e) {
      var t = this,
        n = function n() {
          (t.dispose(),
            e == null || e.removeEventListener == null || e.removeEventListener(`abort`, n));
        };
      return (
        e == null || e.addEventListener == null || e.addEventListener(`abort`, n),
        (n[K] = this),
        `dispose` in Symbol && typeof Symbol.dispose == `symbol` && (n[Symbol.dispose] = n),
        n
      );
    }),
    (t.toString = function () {
      return `Reaction[` + this.name_ + `]`;
    }),
    (t.trace = function (e) {
      e === void 0 && (e = !1);
    }),
    Tr(e, [
      {
        key: `isDisposed`,
        get: function () {
          return xr(this.flags_, e.isDisposedMask_);
        },
        set: function (t) {
          this.flags_ = Sr(this.flags_, e.isDisposedMask_, t);
        },
      },
      {
        key: `isScheduled`,
        get: function () {
          return xr(this.flags_, e.isScheduledMask_);
        },
        set: function (t) {
          this.flags_ = Sr(this.flags_, e.isScheduledMask_, t);
        },
      },
      {
        key: `isTrackPending`,
        get: function () {
          return xr(this.flags_, e.isTrackPendingMask_);
        },
        set: function (t) {
          this.flags_ = Sr(this.flags_, e.isTrackPendingMask_, t);
        },
      },
      {
        key: `isRunning`,
        get: function () {
          return xr(this.flags_, e.isRunningMask_);
        },
        set: function (t) {
          this.flags_ = Sr(this.flags_, e.isRunningMask_, t);
        },
      },
      {
        key: `diffValue`,
        get: function () {
          return +!!xr(this.flags_, e.diffValueMask_);
        },
        set: function (t) {
          this.flags_ = Sr(this.flags_, e.diffValueMask_, t === 1);
        },
      },
    ])
  );
})();
((Ma.isDisposedMask_ = 1),
  (Ma.isScheduledMask_ = 2),
  (Ma.isTrackPendingMask_ = 4),
  (Ma.isRunningMask_ = 8),
  (Ma.diffValueMask_ = 16));
var Na = 100,
  Pa = function (e) {
    return e();
  };
function Fa() {
  Y.inBatch > 0 || Y.isRunningReactions || Pa(Ia);
}
function Ia() {
  Y.isRunningReactions = !0;
  for (var e = Y.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Na && (console.error(`[mobx] cycle in reaction: ` + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
  }
  Y.isRunningReactions = !1;
}
var La = dr(`Reaction`, Ma);
function Ra(e) {
  var t = Pa;
  Pa = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function za() {
  return !1;
}
function Ba(e) {
  return (console.warn(`[mobx.spy] Is a no-op in production builds`), function () {});
}
var Va = `action`,
  Ha = `action.bound`,
  Ua = `autoAction`,
  Wa = `autoAction.bound`,
  Ga = `<unnamed action>`,
  Ka = Qr(Va),
  qa = Qr(Ha, { bound: !0 }),
  Ja = Qr(Ua, { autoAction: !0 }),
  Ya = Qr(Wa, { autoAction: !0, bound: !0 });
function Xa(e) {
  return function (t, n) {
    if (ir(t)) return Xi(t.name || Ga, t, e);
    if (ir(n)) return Xi(t, n, e);
    if (Lr(n)) return (e ? Ja : Ka).decorate_20223_(t, n);
    if (ar(n)) return Fr(t, n, e ? Ja : Ka);
    if (ar(t)) return Pr(Qr(e ? Ua : Va, { name: t, autoAction: e }));
  };
}
var Za = Xa(!1);
Object.assign(Za, Ka);
var Qa = Xa(!0);
(Object.assign(Qa, Ja), (Za.bound = Pr(qa)), (Qa.bound = Pr(Ya)));
function $a(e) {
  return ir(e) && e.isMobxAction === !0;
}
function eo(e, t) {
  var n;
  t === void 0 && (t = Qn);
  var r = t?.name ?? `Autorun`,
    i = !t.scheduler && !t.delay,
    a;
  if (i)
    a = new Ma(
      r,
      function () {
        this.track(c);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var o = no(t),
      s = !1;
    a = new Ma(
      r,
      function () {
        s ||
          ((s = !0),
          o(function () {
            ((s = !1), a.isDisposed || a.track(c));
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function c() {
    e(a);
  }
  return (
    ((n = t) != null && (n = n.signal) != null && n.aborted) || a.schedule_(),
    a.getDisposer_(t?.signal)
  );
}
var to = function (e) {
  return e();
};
function no(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : to;
}
var ro = `onBO`,
  io = `onBUO`;
function ao(e, t, n) {
  return so(ro, e, t, n);
}
function oo(e, t, n) {
  return so(io, e, t, n);
}
function so(e, t, n, r) {
  var i = typeof r == `function` ? ws(t, n) : ws(t),
    a = ir(r) ? r : n,
    o = e + `L`;
  return (
    i[o] ? i[o].add(a) : (i[o] = new Set([a])),
    function () {
      var e = i[o];
      e && (e.delete(a), e.size === 0 && delete i[o]);
    }
  );
}
var co = `never`,
  lo = `always`,
  uo = `observed`;
function fo(e) {
  e.isolateGlobalState === !0 && Sa();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 && (Y.useProxies = t === lo ? !0 : t === co ? !1 : typeof Proxy < `u`),
    t === `ifavailable` && (Y.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === lo ? lo : n === uo;
    ((Y.enforceActions = r), (Y.allowStateChanges = !(r === !0 || r === lo)));
  }
  ([
    `computedRequiresReaction`,
    `reactionRequiresObservable`,
    `observableRequiresReaction`,
    `disableErrorBoundaries`,
    `safeDescriptors`,
  ].forEach(function (t) {
    t in e && (Y[t] = !!e[t]);
  }),
    (Y.allowStateReads = !Y.observableRequiresReaction),
    e.reactionScheduler && Ra(e.reactionScheduler));
}
function po(e, t, n, r) {
  var i = br(t);
  return (
    Ds(function () {
      var t = ls(e, r)[K];
      _r(i).forEach(function (e) {
        t.extend_(e, i[e], n && e in n ? n[e] : !0);
      });
    }),
    e
  );
}
function mo(e, t) {
  return ho(ws(e, t));
}
function ho(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ && e.observing_.length > 0 && (t.dependencies = go(e.observing_).map(ho)),
    t
  );
}
function go(e) {
  return Array.from(new Set(e));
}
var _o = 0;
function vo() {
  this.message = `FLOW_CANCELLED`;
}
vo.prototype = Object.create(Error.prototype);
var yo = ii(`flow`),
  bo = ii(`flow.bound`, { bound: !0 }),
  xo = Object.assign(function (e, t) {
    if (Lr(t)) return yo.decorate_20223_(e, t);
    if (ar(t)) return Fr(e, t, yo);
    var n = e,
      r = n.name || `<unnamed flow>`,
      i = function () {
        var e = this,
          t = arguments,
          i = ++_o,
          a = Za(r + ` - runid: ` + i + ` - init`, n).apply(e, t),
          o,
          s = void 0,
          c = new Promise(function (e, t) {
            var n = 0;
            o = t;
            function c(e) {
              s = void 0;
              var o;
              try {
                o = Za(r + ` - runid: ` + i + ` - yield ` + n++, a.next).call(a, e);
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function l(e) {
              s = void 0;
              var o;
              try {
                o = Za(r + ` - runid: ` + i + ` - yield ` + n++, a.throw).call(a, e);
              } catch (e) {
                return t(e);
              }
              u(o);
            }
            function u(n) {
              if (ir(n?.then)) {
                n.then(u, t);
                return;
              }
              return n.done ? e(n.value) : ((s = Promise.resolve(n.value)), s.then(c, l));
            }
            c(void 0);
          });
        return (
          (c.cancel = Za(r + ` - runid: ` + i + ` - cancel`, function () {
            try {
              s && So(s);
              var e = a.return(void 0),
                t = Promise.resolve(e.value);
              (t.then(rr, rr), So(t), o(new vo()));
            } catch (e) {
              o(e);
            }
          })),
          c
        );
      };
    return ((i.isMobXFlow = !0), i);
  }, yo);
xo.bound = Pr(bo);
function So(e) {
  ir(e.cancel) && e.cancel();
}
function Co(e) {
  return e?.isMobXFlow === !0;
}
function wo(e, t) {
  return e
    ? t === void 0
      ? fs(e) || !!e[K] || zr(e) || La(e) || aa(e)
      : fs(e)
        ? e[K].values_.has(t)
        : !1
    : !1;
}
function To(e) {
  return wo(e);
}
function Eo(e, t) {
  (t === void 0 && (t = void 0), Ea());
  try {
    return e.apply(t);
  } finally {
    Da();
  }
}
function Do(e) {
  return e[K];
}
var Oo = {
  has: function (e, t) {
    return Do(e).has_(t);
  },
  get: function (e, t) {
    return Do(e).get_(t);
  },
  set: function (e, t, n) {
    return ar(t) ? (Do(e).set_(t, n, !0) ?? !0) : !1;
  },
  deleteProperty: function (e, t) {
    return ar(t) ? (Do(e).delete_(t, !0) ?? !0) : !1;
  },
  defineProperty: function (e, t, n) {
    return Do(e).defineProperty_(t, n) ?? !0;
  },
  ownKeys: function (e) {
    return Do(e).ownKeys_();
  },
  preventExtensions: function (e) {
    G(13);
  },
};
function ko(e, t) {
  var n;
  return (tr(), (e = ls(e, t)), (n = e[K]).proxy_ ?? (n.proxy_ = new Proxy(e, Oo)));
}
function Ao(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function jo(e, t) {
  var n = (e.interceptors_ ||= []);
  return (
    n.push(t),
    nr(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function Mo(e, t) {
  var n = ma();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
      i < a && ((t = r[i](t)), t && !t.type && G(14), t);
      i++
    );
    return t;
  } finally {
    ha(n);
  }
}
function No(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Po(e, t) {
  var n = (e.changeListeners_ ||= []);
  return (
    n.push(t),
    nr(function () {
      var e = n.indexOf(t);
      e !== -1 && n.splice(e, 1);
    })
  );
}
function Fo(e, t) {
  var n = ma(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, a = r.length; i < a; i++) r[i](t);
    ha(n);
  }
}
function Io(e, t, n) {
  return (
    Ds(function () {
      var r = ls(e, n)[K];
      ((t ??= Ir(e)),
        _r(t).forEach(function (e) {
          return r.make_(e, t[e]);
        }));
    }),
    e
  );
}
var Lo = `splice`,
  Ro = `update`,
  zo = 1e4,
  Bo = {
    get: function (e, t) {
      var n = e[K];
      return t === K
        ? n
        : t === `length`
          ? n.getArrayLength_()
          : typeof t == `string` && !isNaN(t)
            ? n.get_(parseInt(t))
            : yr(Uo, t)
              ? Uo[t]
              : e[t];
    },
    set: function (e, t, n) {
      var r = e[K];
      return (
        t === `length` && r.setArrayLength_(n),
        typeof t == `symbol` || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
        !0
      );
    },
    preventExtensions: function () {
      G(15);
    },
  },
  Vo = (function () {
    function e(e, t, n, r) {
      (e === void 0 && (e = `ObservableArray`),
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
        (this.owned_ = n),
        (this.legacyMode_ = r),
        (this.atom_ = new Rr(e)),
        (this.enhancer_ = function (e, n) {
          return t(e, n, `ObservableArray[..]`);
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (t.dehanceValues_ = function (e) {
        return this.dehancer !== void 0 && e.length > 0 ? e.map(this.dehancer) : e;
      }),
      (t.intercept_ = function (e) {
        return jo(this, e);
      }),
      (t.observe_ = function (e, t) {
        return (
          t === void 0 && (t = !1),
          t &&
            e({
              observableKind: `array`,
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: `splice`,
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          Po(this, e)
        );
      }),
      (t.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (t.setArrayLength_ = function (e) {
        (typeof e != `number` || isNaN(e) || e < 0) && G(`Out of range: ` + e);
        var t = this.values_.length;
        if (e !== t)
          if (e > t) {
            for (var n = Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
            this.spliceWithArray_(t, 0, n);
          } else this.spliceWithArray_(e, t - e);
      }),
      (t.updateArrayLength_ = function (e, t) {
        (e !== this.lastKnownLength_ && G(16),
          (this.lastKnownLength_ += t),
          this.legacyMode_ && t > 0 && Ss(e + t + 1));
      }),
      (t.spliceWithArray_ = function (e, t, n) {
        var r = this;
        this.atom_;
        var i = this.values_.length;
        if (
          (e === void 0 ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
          (t = arguments.length === 1 ? i - e : t == null ? 0 : Math.max(0, Math.min(t, i - e))),
          n === void 0 && (n = Zn),
          Ao(this))
        ) {
          var a = Mo(this, { object: this.proxy_, type: Lo, index: e, removedCount: t, added: n });
          if (!a) return Zn;
          ((t = a.removedCount), (n = a.added));
        }
        if (
          ((n =
            n.length === 0
              ? n
              : n.map(function (e) {
                  return r.enhancer_(e, void 0);
                })),
          this.legacyMode_)
        ) {
          var o = n.length - t;
          this.updateArrayLength_(i, o);
        }
        var s = this.spliceItemsIntoValues_(e, t, n);
        return (
          (t !== 0 || n.length !== 0) && this.notifyArraySplice_(e, n, s),
          this.dehanceValues_(s)
        );
      }),
      (t.spliceItemsIntoValues_ = function (e, t, n) {
        if (n.length < zo) {
          var r;
          return (r = this.values_).splice.apply(r, [e, t].concat(n));
        } else {
          var i = this.values_.slice(e, e + t),
            a = this.values_.slice(e + t);
          this.values_.length += n.length - t;
          for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
          for (var s = 0; s < a.length; s++) this.values_[e + n.length + s] = a[s];
          return i;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (e, t, n) {
        var r = !this.owned_ && za(),
          i = No(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  type: Ro,
                  debugObjectName: this.atom_.name_,
                  index: e,
                  newValue: t,
                  oldValue: n,
                }
              : null;
        (this.atom_.reportChanged(), i && Fo(this, a));
      }),
      (t.notifyArraySplice_ = function (e, t, n) {
        var r = !this.owned_ && za(),
          i = No(this),
          a =
            i || r
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Lo,
                  index: e,
                  removed: n,
                  added: t,
                  removedCount: n.length,
                  addedCount: t.length,
                }
              : null;
        (this.atom_.reportChanged(), i && Fo(this, a));
      }),
      (t.get_ = function (e) {
        if (this.legacyMode_ && e >= this.values_.length) {
          console.warn(`[mobx] Out of bounds read: ` + e);
          return;
        }
        return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
      }),
      (t.set_ = function (e, t) {
        var n = this.values_;
        if ((this.legacyMode_ && e > n.length && G(17, e, n.length), e < n.length)) {
          this.atom_;
          var r = n[e];
          if (Ao(this)) {
            var i = Mo(this, { type: Ro, object: this.proxy_, index: e, newValue: t });
            if (!i) return;
            t = i.newValue;
          }
          ((t = this.enhancer_(t, r)),
            t !== r && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r)));
        } else {
          for (var a = Array(e + 1 - n.length), o = 0; o < a.length - 1; o++) a[o] = void 0;
          ((a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a));
        }
      }),
      e
    );
  })();
function Ho(e, t, n, r) {
  return (
    n === void 0 && (n = `ObservableArray`),
    r === void 0 && (r = !1),
    tr(),
    Ds(function () {
      var i = new Vo(n, t, r, !1);
      ur(i.values_, K, i);
      var a = new Proxy(i.values_, Bo);
      return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
    })
  );
}
var Uo = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (e) {
    var t = this[K];
    return t.spliceWithArray_(0, t.values_.length, e);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (e, t) {
    var n = [...arguments].slice(2),
      r = this[K];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return r.spliceWithArray_(e);
      case 2:
        return r.spliceWithArray_(e, t);
    }
    return r.spliceWithArray_(e, t, n);
  },
  spliceWithArray: function (e, t, n) {
    return this[K].spliceWithArray_(e, t, n);
  },
  push: function () {
    var e = this[K],
      t = [...arguments];
    return (e.spliceWithArray_(e.values_.length, 0, t), e.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[K].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    var e = this[K],
      t = [...arguments];
    return (e.spliceWithArray_(0, 0, t), e.values_.length);
  },
  reverse: function () {
    return (Y.trackingDerivation && G(37, `reverse`), this.replace(this.slice().reverse()), this);
  },
  sort: function () {
    Y.trackingDerivation && G(37, `sort`);
    var e = this.slice();
    return (e.sort.apply(e, arguments), this.replace(e), this);
  },
  remove: function (e) {
    var t = this[K],
      n = t.dehanceValues_(t.values_).indexOf(e);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
(X(`at`, Wo),
  X(`concat`, Wo),
  X(`flat`, Wo),
  X(`includes`, Wo),
  X(`indexOf`, Wo),
  X(`join`, Wo),
  X(`lastIndexOf`, Wo),
  X(`slice`, Wo),
  X(`toString`, Wo),
  X(`toLocaleString`, Wo),
  X(`toSorted`, Wo),
  X(`toSpliced`, Wo),
  X(`with`, Wo),
  X(`every`, Go),
  X(`filter`, Go),
  X(`find`, Go),
  X(`findIndex`, Go),
  X(`findLast`, Go),
  X(`findLastIndex`, Go),
  X(`flatMap`, Go),
  X(`forEach`, Go),
  X(`map`, Go),
  X(`some`, Go),
  X(`toReversed`, Go),
  X(`reduce`, Ko),
  X(`reduceRight`, Ko));
function X(e, t) {
  typeof Array.prototype[e] == `function` && (Uo[e] = t(e));
}
function Wo(e) {
  return function () {
    var t = this[K];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function Go(e) {
  return function (t, n) {
    var r = this,
      i = this[K];
    return (
      i.atom_.reportObserved(),
      i.dehanceValues_(i.values_)[e](function (e, i) {
        return t.call(n, e, i, r);
      })
    );
  };
}
function Ko(e) {
  return function () {
    var t = this,
      n = this[K];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (e, n, r) {
        return i(e, n, r, t);
      }),
      r[e].apply(r, arguments)
    );
  };
}
var qo = dr(`ObservableArrayAdministration`, Vo);
function Jo(e) {
  return or(e) && qo(e[K]);
}
var Yo = {},
  Xo = `add`,
  Zo = `delete`,
  Qo = (function () {
    function e(e, t, n) {
      var r = this;
      (t === void 0 && (t = Kr),
        n === void 0 && (n = `ObservableMap`),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[K] = Yo),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = t),
        (this.name_ = n),
        ir(Map) || G(18),
        Ds(function () {
          ((r.keysAtom_ = Br(`ObservableMap.keys()`)),
            (r.data_ = new Map()),
            (r.hasMap_ = new Map()),
            e && r.merge(e));
        }));
    }
    var t = e.prototype;
    return (
      (t.has_ = function (e) {
        return this.data_.has(e);
      }),
      (t.has = function (e) {
        var t = this;
        if (!Y.trackingDerivation) return this.has_(e);
        var n = this.hasMap_.get(e);
        if (!n) {
          var r = (n = new ra(this.has_(e), Jr, `ObservableMap.key?`, !1));
          (this.hasMap_.set(e, r),
            oo(r, function () {
              return t.hasMap_.delete(e);
            }));
        }
        return n.get();
      }),
      (t.set = function (e, t) {
        var n = this.has_(e);
        if (Ao(this)) {
          var r = Mo(this, { type: n ? Ro : Xo, object: this, newValue: t, name: e });
          if (!r) return this;
          t = r.newValue;
        }
        return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
      }),
      (t.delete = function (e) {
        var t = this;
        if ((this.keysAtom_, Ao(this) && !Mo(this, { type: Zo, object: this, name: e }))) return !1;
        if (this.has_(e)) {
          var n = za(),
            r = No(this),
            i =
              r || n
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: Zo,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e,
                  }
                : null;
          return (
            Eo(function () {
              var n;
              (t.keysAtom_.reportChanged(),
                (n = t.hasMap_.get(e)) == null || n.setNewValue_(!1),
                t.data_.get(e).setNewValue_(void 0),
                t.data_.delete(e));
            }),
            r && Fo(this, i),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (e, t) {
        var n = this.data_.get(e);
        if (((t = n.prepareNewValue_(t)), t !== Y.UNCHANGED)) {
          var r = za(),
            i = No(this),
            a =
              i || r
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: Ro,
                    object: this,
                    oldValue: n.value_,
                    name: e,
                    newValue: t,
                  }
                : null;
          (n.setNewValue_(t), i && Fo(this, a));
        }
      }),
      (t.addValue_ = function (e, t) {
        var n = this;
        (this.keysAtom_,
          Eo(function () {
            var r,
              i = new ra(t, n.enhancer_, `ObservableMap.key`, !1);
            (n.data_.set(e, i),
              (t = i.value_),
              (r = n.hasMap_.get(e)) == null || r.setNewValue_(!0),
              n.keysAtom_.reportChanged());
          }));
        var r = za(),
          i = No(this),
          a =
            i || r
              ? {
                  observableKind: `map`,
                  debugObjectName: this.name_,
                  type: Xo,
                  object: this,
                  name: e,
                  newValue: t,
                }
              : null;
        i && Fo(this, a);
      }),
      (t.get = function (e) {
        return this.has(e)
          ? this.dehanceValue_(this.data_.get(e).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (t.keys = function () {
        return (this.keysAtom_.reportObserved(), this.data_.keys());
      }),
      (t.values = function () {
        var e = this,
          t = this.keys();
        return es({
          next: function () {
            var n = t.next(),
              r = n.done,
              i = n.value;
            return { done: r, value: r ? void 0 : e.get(i) };
          },
        });
      }),
      (t.entries = function () {
        var e = this,
          t = this.keys();
        return es({
          next: function () {
            var n = t.next(),
              r = n.done,
              i = n.value;
            return { done: r, value: r ? void 0 : [i, e.get(i)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (e, t) {
        for (var n = Er(this), r; !(r = n()).done; ) {
          var i = r.value,
            a = i[0],
            o = i[1];
          e.call(t, o, a, this);
        }
      }),
      (t.merge = function (e) {
        var t = this;
        return (
          $o(e) && (e = new Map(e)),
          Eo(function () {
            sr(e)
              ? gr(e).forEach(function (n) {
                  return t.set(n, e[n]);
                })
              : Array.isArray(e)
                ? e.forEach(function (e) {
                    var n = e[0],
                      r = e[1];
                    return t.set(n, r);
                  })
                : fr(e)
                  ? (pr(e) || G(19, e),
                    e.forEach(function (e, n) {
                      return t.set(n, e);
                    }))
                  : e != null && G(20, e);
          }),
          this
        );
      }),
      (t.clear = function () {
        var e = this;
        Eo(function () {
          pa(function () {
            for (var t = Er(e.keys()), n; !(n = t()).done; ) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (t.replace = function (e) {
        var t = this;
        return (
          Eo(function () {
            for (
              var n = ts(e), r = new Map(), i = !1, a = Er(t.data_.keys()), o;
              !(o = a()).done;
            ) {
              var s = o.value;
              if (!n.has(s))
                if (t.delete(s)) i = !0;
                else {
                  var c = t.data_.get(s);
                  r.set(s, c);
                }
            }
            for (var l = Er(n.entries()), u; !(u = l()).done; ) {
              var d = u.value,
                f = d[0],
                p = d[1],
                m = t.data_.has(f);
              if ((t.set(f, p), t.data_.has(f))) {
                var h = t.data_.get(f);
                (r.set(f, h), m || (i = !0));
              }
            }
            if (!i)
              if (t.data_.size !== r.size) t.keysAtom_.reportChanged();
              else
                for (var g = t.data_.keys(), _ = r.keys(), v = g.next(), y = _.next(); !v.done; ) {
                  if (v.value !== y.value) {
                    t.keysAtom_.reportChanged();
                    break;
                  }
                  ((v = g.next()), (y = _.next()));
                }
            t.data_ = r;
          }),
          this
        );
      }),
      (t.toString = function () {
        return `[object ObservableMap]`;
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (e, t) {
        return Po(this, e);
      }),
      (t.intercept_ = function (e) {
        return jo(this, e);
      }),
      Tr(e, [
        {
          key: `size`,
          get: function () {
            return (this.keysAtom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Map`;
          },
        },
      ])
    );
  })(),
  $o = dr(`ObservableMap`, Qo);
function es(e) {
  return ((e[Symbol.toStringTag] = `MapIterator`), Ns(e));
}
function ts(e) {
  if (fr(e) || $o(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (sr(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return G(21, e);
}
var ns = {},
  rs = (function () {
    function e(e, t, n) {
      var r = this;
      (t === void 0 && (t = Kr),
        n === void 0 && (n = `ObservableSet`),
        (this.name_ = void 0),
        (this[K] = ns),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = n),
        ir(Set) || G(22),
        (this.enhancer_ = function (e, r) {
          return t(e, r, n);
        }),
        Ds(function () {
          ((r.atom_ = Br(r.name_)), e && r.replace(e));
        }));
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (e) {
        return this.dehancer === void 0 ? e : this.dehancer(e);
      }),
      (t.clear = function () {
        var e = this;
        Eo(function () {
          pa(function () {
            for (var t = Er(e.data_.values()), n; !(n = t()).done; ) {
              var r = n.value;
              e.delete(r);
            }
          });
        });
      }),
      (t.forEach = function (e, t) {
        for (var n = Er(this), r; !(r = n()).done; ) {
          var i = r.value;
          e.call(t, i, i, this);
        }
      }),
      (t.add = function (e) {
        var t = this;
        if ((this.atom_, Ao(this))) {
          var n = Mo(this, { type: Xo, object: this, newValue: e });
          if (!n) return this;
          e = n.newValue;
        }
        if (!this.has(e)) {
          Eo(function () {
            (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
          });
          var r = !1,
            i = No(this),
            a =
              i || r
                ? {
                    observableKind: `set`,
                    debugObjectName: this.name_,
                    type: Xo,
                    object: this,
                    newValue: e,
                  }
                : null;
          i && Fo(this, a);
        }
        return this;
      }),
      (t.delete = function (e) {
        var t = this;
        if (Ao(this) && !Mo(this, { type: Zo, object: this, oldValue: e })) return !1;
        if (this.has(e)) {
          var n = !1,
            r = No(this),
            i =
              r || n
                ? {
                    observableKind: `set`,
                    debugObjectName: this.name_,
                    type: Zo,
                    object: this,
                    oldValue: e,
                  }
                : null;
          return (
            Eo(function () {
              (t.atom_.reportChanged(), t.data_.delete(e));
            }),
            r && Fo(this, i),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (e) {
        return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e)));
      }),
      (t.entries = function () {
        var e = this.values();
        return as({
          next: function () {
            var t = e.next(),
              n = t.value,
              r = t.done;
            return r ? { value: void 0, done: r } : { value: [n, n], done: r };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var e = this,
          t = this.data_.values();
        return as({
          next: function () {
            var n = t.next(),
              r = n.value,
              i = n.done;
            return i ? { value: void 0, done: i } : { value: e.dehanceValue_(r), done: i };
          },
        });
      }),
      (t.intersection = function (e) {
        return mr(e) && !is(e) ? e.intersection(this) : new Set(this).intersection(e);
      }),
      (t.union = function (e) {
        return mr(e) && !is(e) ? e.union(this) : new Set(this).union(e);
      }),
      (t.difference = function (e) {
        return new Set(this).difference(e);
      }),
      (t.symmetricDifference = function (e) {
        return mr(e) && !is(e) ? e.symmetricDifference(this) : new Set(this).symmetricDifference(e);
      }),
      (t.isSubsetOf = function (e) {
        return new Set(this).isSubsetOf(e);
      }),
      (t.isSupersetOf = function (e) {
        return new Set(this).isSupersetOf(e);
      }),
      (t.isDisjointFrom = function (e) {
        return mr(e) && !is(e) ? e.isDisjointFrom(this) : new Set(this).isDisjointFrom(e);
      }),
      (t.replace = function (e) {
        var t = this;
        return (
          is(e) && (e = new Set(e)),
          Eo(function () {
            Array.isArray(e) || mr(e)
              ? (t.clear(),
                e.forEach(function (e) {
                  return t.add(e);
                }))
              : e != null && G(`Cannot initialize set from ` + e);
          }),
          this
        );
      }),
      (t.observe_ = function (e, t) {
        return Po(this, e);
      }),
      (t.intercept_ = function (e) {
        return jo(this, e);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return `[object ObservableSet]`;
      }),
      (t[Symbol.iterator] = function () {
        return this.values();
      }),
      Tr(e, [
        {
          key: `size`,
          get: function () {
            return (this.atom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Set`;
          },
        },
      ])
    );
  })(),
  is = dr(`ObservableSet`, rs);
function as(e) {
  return ((e[Symbol.toStringTag] = `SetIterator`), Ns(e));
}
var os = Object.create(null),
  ss = `remove`,
  cs = (function () {
    function e(e, t, n, r) {
      (t === void 0 && (t = new Map()),
        r === void 0 && (r = xi),
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
        (this.target_ = e),
        (this.values_ = t),
        (this.name_ = n),
        (this.defaultAnnotation_ = r),
        (this.keysAtom_ = new Rr(`ObservableObject.keys`)),
        (this.isPlainObject_ = sr(this.target_)));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (e) {
        return this.values_.get(e).get();
      }),
      (t.setObservablePropValue_ = function (e, t) {
        var n = this.values_.get(e);
        if (n instanceof ia) return (n.set(t), !0);
        if (Ao(this)) {
          var r = Mo(this, { type: Ro, object: this.proxy_ || this.target_, name: e, newValue: t });
          if (!r) return null;
          t = r.newValue;
        }
        if (((t = n.prepareNewValue_(t)), t !== Y.UNCHANGED)) {
          var i = No(this),
            a = i
              ? {
                  type: Ro,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  oldValue: n.value_,
                  name: e,
                  newValue: t,
                }
              : null;
          (n.setNewValue_(t), i && Fo(this, a));
        }
        return !0;
      }),
      (t.get_ = function (e) {
        return (Y.trackingDerivation && !yr(this.target_, e) && this.has_(e), this.target_[e]);
      }),
      (t.set_ = function (e, t, n) {
        return (
          n === void 0 && (n = !1),
          yr(this.target_, e)
            ? this.values_.has(e)
              ? this.setObservablePropValue_(e, t)
              : n
                ? Reflect.set(this.target_, e, t)
                : ((this.target_[e] = t), !0)
            : this.extend_(
                e,
                { value: t, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                n,
              )
        );
      }),
      (t.has_ = function (e) {
        if (!Y.trackingDerivation) return e in this.target_;
        this.pendingKeys_ ||= new Map();
        var t = this.pendingKeys_.get(e);
        return (
          t ||
            ((t = new ra(e in this.target_, Jr, `ObservableObject.key?`, !1)),
            this.pendingKeys_.set(e, t)),
          t.get()
        );
      }),
      (t.make_ = function (e, t) {
        if ((t === !0 && (t = this.defaultAnnotation_), t !== !1)) {
          if (!(e in this.target_)) {
            var n;
            if ((n = this.target_[Nr]) != null && n[e]) return;
            G(1, t.annotationType_, this.name_ + `.` + e.toString());
          }
          for (var r = this.target_; r && r !== Xn; ) {
            var i = Jn(r, e);
            if (i) {
              var a = t.make_(this, e, i, r);
              if (a === 0) return;
              if (a === 1) break;
            }
            r = Object.getPrototypeOf(r);
          }
          ps(this, t, e);
        }
      }),
      (t.extend_ = function (e, t, n, r) {
        if ((r === void 0 && (r = !1), n === !0 && (n = this.defaultAnnotation_), n === !1))
          return this.defineProperty_(e, t, r);
        var i = n.extend_(this, e, t, r);
        return (i && ps(this, n, e), i);
      }),
      (t.defineProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          Ea();
          var r = this.delete_(e);
          if (!r) return r;
          if (Ao(this)) {
            var i = Mo(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: Xo,
              newValue: t.value,
            });
            if (!i) return null;
            var a = i.newValue;
            t.value !== a && (t = Dr({}, t, { value: a }));
          }
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, t)) return !1;
          } else Yn(this.target_, e, t);
          this.notifyPropertyAddition_(e, t.value);
        } finally {
          Da();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (e, t, n, r) {
        (r === void 0 && (r = !1), this.keysAtom_);
        try {
          Ea();
          var i = this.delete_(e);
          if (!i) return i;
          if (Ao(this)) {
            var a = Mo(this, {
              object: this.proxy_ || this.target_,
              name: e,
              type: Xo,
              newValue: t,
            });
            if (!a) return null;
            t = a.newValue;
          }
          var o = ds(e),
            s = {
              configurable: Y.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: o.get,
              set: o.set,
            };
          if (r) {
            if (!Reflect.defineProperty(this.target_, e, s)) return !1;
          } else Yn(this.target_, e, s);
          var c = new ra(t, n, `ObservableObject.key`, !1);
          (this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_));
        } finally {
          Da();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (e, t, n) {
        (n === void 0 && (n = !1), this.keysAtom_);
        try {
          Ea();
          var r = this.delete_(e);
          if (!r) return r;
          if (
            Ao(this) &&
            !Mo(this, { object: this.proxy_ || this.target_, name: e, type: Xo, newValue: void 0 })
          )
            return null;
          ((t.name ||= `ObservableObject.key`), (t.context = this.proxy_ || this.target_));
          var i = ds(e),
            a = {
              configurable: Y.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: i.get,
              set: i.set,
            };
          if (n) {
            if (!Reflect.defineProperty(this.target_, e, a)) return !1;
          } else Yn(this.target_, e, a);
          (this.values_.set(e, new ia(t)), this.notifyPropertyAddition_(e, void 0));
        } finally {
          Da();
        }
        return !0;
      }),
      (t.delete_ = function (e, t) {
        if ((t === void 0 && (t = !1), this.keysAtom_, !yr(this.target_, e))) return !0;
        if (Ao(this) && !Mo(this, { object: this.proxy_ || this.target_, name: e, type: ss }))
          return null;
        try {
          var n;
          Ea();
          var r = No(this),
            i = !1,
            a = this.values_.get(e),
            o = void 0;
          if ((!a && (r || i) && (o = Jn(this.target_, e)?.value), t)) {
            if (!Reflect.deleteProperty(this.target_, e)) return !1;
          } else delete this.target_[e];
          if (
            (a && (this.values_.delete(e), a instanceof ra && (o = a.value_), ka(a)),
            this.keysAtom_.reportChanged(),
            (n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(e in this.target_),
            r || i)
          ) {
            var s = {
              type: ss,
              observableKind: `object`,
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: o,
              name: e,
            };
            r && Fo(this, s);
          }
        } finally {
          Da();
        }
        return !0;
      }),
      (t.observe_ = function (e, t) {
        return Po(this, e);
      }),
      (t.intercept_ = function (e) {
        return jo(this, e);
      }),
      (t.notifyPropertyAddition_ = function (e, t) {
        var n,
          r = No(this),
          i = !1;
        if (r || i) {
          var a =
            r || i
              ? {
                  type: Xo,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                }
              : null;
          r && Fo(this, a);
        }
        ((n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (t.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), _r(this.target_));
      }),
      (t.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      e
    );
  })();
function ls(e, t) {
  if (yr(e, K)) return e;
  var n = t?.name ?? `ObservableObject`;
  return (lr(e, K, new cs(e, new Map(), String(n), Ri(t))), e);
}
var us = dr(`ObservableObjectAdministration`, cs);
function ds(e) {
  return (
    os[e] ||
    (os[e] = {
      get: function () {
        return this[K].getObservablePropValue_(e);
      },
      set: function (t) {
        return this[K].setObservablePropValue_(e, t);
      },
    })
  );
}
function fs(e) {
  return or(e) ? us(e[K]) : !1;
}
function ps(e, t, n) {
  var r;
  (r = e.target_[Nr]) == null || delete r[n];
}
var ms = bs(0),
  hs = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, `0`, {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  gs = 0,
  _s = function () {};
function vs(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ === void 0
      ? (e.prototype = t)
      : (e.prototype.__proto__ = t);
}
vs(_s, Array.prototype);
var ys = (function (e) {
  function t(t, n, r, i) {
    var a;
    return (
      r === void 0 && (r = `ObservableArray`),
      i === void 0 && (i = !1),
      (a = e.call(this) || this),
      Ds(function () {
        var e = new Vo(r, n, i, !0);
        ((e.proxy_ = a),
          ur(a, K, e),
          t && t.length && a.spliceWithArray(0, 0, t),
          hs && Object.defineProperty(a, `0`, ms));
      }),
      a
    );
  }
  Or(t, e);
  var n = t.prototype;
  return (
    (n.concat = function () {
      this[K].atom_.reportObserved();
      var e = [...arguments];
      return Array.prototype.concat.apply(
        this.slice(),
        e.map(function (e) {
          return Jo(e) ? e.slice() : e;
        }),
      );
    }),
    (n[Symbol.iterator] = function () {
      var e = this,
        t = 0;
      return Ns({
        next: function () {
          return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
        },
      });
    }),
    Tr(t, [
      {
        key: `length`,
        get: function () {
          return this[K].getArrayLength_();
        },
        set: function (e) {
          this[K].setArrayLength_(e);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return `Array`;
        },
      },
    ])
  );
})(_s);
Object.entries(Uo).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== `concat` && lr(ys.prototype, t, n);
});
function bs(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[K].get_(e);
    },
    set: function (t) {
      this[K].set_(e, t);
    },
  };
}
function xs(e) {
  Yn(ys.prototype, `` + e, bs(e));
}
function Ss(e) {
  if (e > gs) {
    for (var t = gs; t < e + 100; t++) xs(t);
    gs = e;
  }
}
Ss(1e3);
function Cs(e, t, n) {
  return new ys(e, t, n);
}
function ws(e, t) {
  if (typeof e == `object` && e) {
    if (Jo(e)) return (t !== void 0 && G(23), e[K].atom_);
    if (is(e)) return e.atom_;
    if ($o(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return (n || G(25, t, Es(e)), n);
    }
    if (fs(e)) {
      if (!t) return G(26);
      var r = e[K].values_.get(t);
      return (r || G(27, t, Es(e)), r);
    }
    if (zr(e) || aa(e) || La(e)) return e;
  } else if (ir(e) && La(e[K])) return e[K];
  G(28);
}
function Ts(e, t) {
  if ((e || G(29), t !== void 0)) return Ts(ws(e, t));
  if (zr(e) || aa(e) || La(e) || $o(e) || is(e)) return e;
  if (e[K]) return e[K];
  G(24, e);
}
function Es(e, t) {
  var n;
  if (t !== void 0) n = ws(e, t);
  else if ($a(e)) return e.name;
  else n = fs(e) || $o(e) || is(e) ? Ts(e) : ws(e);
  return n.name_;
}
function Ds(e) {
  var t = ma(),
    n = ta(!0);
  Ea();
  try {
    return e();
  } finally {
    (Da(), na(n), ha(t));
  }
}
var Os = Xn.toString;
function ks(e, t, n) {
  return (n === void 0 && (n = -1), As(e, t, n));
}
function As(e, t, n, r, i) {
  if (e === t) return e !== 0 || 1 / e == 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var a = typeof e;
  if (a !== `function` && a !== `object` && typeof t != `object`) return !1;
  var o = Os.call(e);
  if (o !== Os.call(t)) return !1;
  switch (o) {
    case `[object RegExp]`:
    case `[object String]`:
      return `` + e == `` + t;
    case `[object Number]`:
      return +e == +e ? (+e == 0 ? 1 / e == 1 / t : +e == +t) : +t != +t;
    case `[object Date]`:
    case `[object Boolean]`:
      return +e == +t;
    case `[object Symbol]`:
      return typeof Symbol < `u` && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case `[object Map]`:
    case `[object Set]`:
      n >= 0 && n++;
      break;
  }
  ((e = js(e)), (t = js(t)));
  var s = o === `[object Array]`;
  if (!s) {
    if (typeof e != `object` || typeof t != `object`) return !1;
    var c = e.constructor,
      l = t.constructor;
    if (
      c !== l &&
      !(ir(c) && c instanceof c && ir(l) && l instanceof l) &&
      `constructor` in e &&
      `constructor` in t
    )
      return !1;
  }
  if (n === 0) return !1;
  (n < 0 && (n = -1), (r ||= []), (i ||= []));
  for (var u = r.length; u--; ) if (r[u] === e) return i[u] === t;
  if ((r.push(e), i.push(t), s)) {
    if (((u = e.length), u !== t.length)) return !1;
    for (; u--; ) if (!As(e[u], t[u], n - 1, r, i)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var p = 0; p < f; p++) {
      var m = d[p];
      if (!(yr(t, m) && As(e[m], t[m], n - 1, r, i))) return !1;
    }
  }
  return (r.pop(), i.pop(), !0);
}
function js(e) {
  return Jo(e) ? e.slice() : fr(e) || $o(e) || mr(e) || is(e) ? Array.from(e.entries()) : e;
}
var Ms = Kn().Iterator?.prototype || {};
function Ns(e) {
  return ((e[Symbol.iterator] = Ps), Object.assign(Object.create(Ms), e));
}
function Ps() {
  return this;
}
if (
  ([`Symbol`, `Map`, `Set`].forEach(function (e) {
    Kn()[e] === void 0 && G(`MobX requires global '` + e + `' to be available or polyfilled`);
  }),
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == `object` &&
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: Ba, extras: { getDebugName: Es }, $mobx: K }),
  !B.useState)
)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!Io) throw Error(`mobx-react-lite@3 requires mobx at least version 6 to be available`);
var Fs = e(a());
function Is(e) {
  e();
}
function Ls(e) {
  ((e ||= Is), fo({ reactionScheduler: e }));
}
function Rs(e) {
  return mo(e);
}
var zs = !1;
function Bs() {
  return zs;
}
var Vs = 1e4,
  Hs = 1e4,
  Us = (function () {
    function e(e) {
      var t = this;
      (Object.defineProperty(this, `finalize`, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e,
      }),
        Object.defineProperty(this, `registrations`, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, `sweepTimeout`, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, `sweep`, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (e) {
            (e === void 0 && (e = Vs), clearTimeout(t.sweepTimeout), (t.sweepTimeout = void 0));
            var n = Date.now();
            (t.registrations.forEach(function (r, i) {
              n - r.registeredAt >= e && (t.finalize(r.value), t.registrations.delete(i));
            }),
              t.registrations.size > 0 && t.scheduleSweep());
          },
        }),
        Object.defineProperty(this, `finalizeAllImmediately`, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            t.sweep(0);
          },
        }));
    }
    return (
      Object.defineProperty(e.prototype, `register`, {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t, n) {
          (this.registrations.set(n, { value: t, registeredAt: Date.now() }), this.scheduleSweep());
        },
      }),
      Object.defineProperty(e.prototype, `unregister`, {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          this.registrations.delete(e);
        },
      }),
      Object.defineProperty(e.prototype, `scheduleSweep`, {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Hs));
        },
      }),
      e
    );
  })(),
  Ws = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : Us)(function (e) {
    var t;
    ((t = e.reaction) == null || t.dispose(), (e.reaction = null));
  }),
  Gs = i((e) => {
    var t = o();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      s = t.useLayoutEffect,
      c = t.useDebugValue;
    function l(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        o = r[0].inst,
        l = r[1];
      return (
        s(
          function () {
            ((o.value = n), (o.getSnapshot = t), u(o) && l({ inst: o }));
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              u(o) && l({ inst: o }),
              e(function () {
                u(o) && l({ inst: o });
              })
            );
          },
          [e],
        ),
        c(n),
        n
      );
    }
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` || window.document === void 0 || window.document.createElement === void 0
        ? d
        : l;
    e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  Ks = i((e, t) => {
    t.exports = Gs();
  })();
function qs(e) {
  e.reaction = new Ma(`observer${e.name}`, function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) == null || t.call(e));
  });
}
function Js(e, t) {
  if ((t === void 0 && (t = `observed`), Bs())) return e();
  var n = B.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (e) {
        return (
          Ws.unregister(r),
          (r.onStoreChange = e),
          r.reaction || (qs(r), (r.stateVersion = Symbol())),
          function () {
            var e;
            ((r.onStoreChange = null),
              (e = r.reaction) == null || e.dispose(),
              (r.reaction = null));
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var i = n.current;
  (i.reaction || (qs(i), Ws.register(n, i, i)),
    B.useDebugValue(i.reaction, Rs),
    (0, Ks.useSyncExternalStore)(i.subscribe, i.getSnapshot, i.getSnapshot));
  var a, o;
  if (
    (i.reaction.track(function () {
      try {
        a = e();
      } catch (e) {
        o = e;
      }
    }),
    o)
  )
    throw o;
  return a;
}
var Ys = typeof Symbol == `function` && Symbol.for,
  Xs = Object.getOwnPropertyDescriptor(function () {}, `name`)?.configurable ?? !1,
  Zs = Ys
    ? Symbol.for(`react.forward_ref`)
    : typeof B.forwardRef == `function` &&
      (0, B.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  Qs = Ys
    ? Symbol.for(`react.memo`)
    : typeof B.memo == `function` &&
      (0, B.memo)(function (e) {
        return null;
      }).$$typeof;
function $s(e, t) {
  if (Qs && e.$$typeof === Qs)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (Bs()) return e;
  var n = t?.forwardRef ?? !1,
    r = e,
    i = e.displayName || e.name;
  if (Zs && e.$$typeof === Zs && ((n = !0), (r = e.render), typeof r != `function`))
    throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function (e, t) {
    return Js(function () {
      return r(e, t);
    }, i);
  };
  return (
    (a.displayName = e.displayName),
    Xs && Object.defineProperty(a, `name`, { value: e.name, writable: !0, configurable: !0 }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    n && (a = (0, B.forwardRef)(a)),
    (a = (0, B.memo)(a)),
    tc(e, a),
    a
  );
}
var ec = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function tc(e, t) {
  Object.keys(e).forEach(function (n) {
    ec[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
function nc(e) {
  var t = e.children,
    n = e.render;
  t &&
    n &&
    console.error("MobX Observer: Do not use children and render in the same time in `Observer`");
  var r = t || n;
  return typeof r == `function` ? Js(r) : null;
}
((nc.displayName = `Observer`), Ls(Fs.unstable_batchedUpdates), Ws.finalizeAllImmediately);
function rc(e, t) {
  if (ic(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var i = 0; i < n.length; i++)
    if (!Object.hasOwnProperty.call(t, n[i]) || !ic(e[n[i]], t[n[i]])) return !1;
  return !0;
}
function ic(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var ac = Symbol(`patchMixins`),
  oc = Symbol(`patchedDefinition`);
function sc(e, t) {
  var n = (e[ac] = e[ac] || {}),
    r = (n[t] = n[t] || {});
  return ((r.locks = r.locks || 0), (r.methods = r.methods || []), r);
}
function cc(e, t) {
  var n = this,
    r = [...arguments].slice(2);
  t.locks++;
  try {
    var i;
    return (e != null && (i = e.apply(this, r)), i);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (e) {
          e.apply(n, r);
        }));
  }
}
function lc(e, t) {
  return function () {
    var n = [...arguments];
    cc.call.apply(cc, [this, e, t].concat(n));
  };
}
function uc(e, t, n) {
  var r = sc(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[oc])) {
    var a = e[t],
      o = dc(e, t, i ? i.enumerable : void 0, r, a);
    Object.defineProperty(e, t, o);
  }
}
function dc(e, t, n, r, i) {
  var a,
    o = lc(i, r);
  return (
    (a = {}),
    (a[oc] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (i) {
      if (this === e) o = lc(i, r);
      else {
        var a = dc(this, t, n, r, i);
        Object.defineProperty(this, t, a);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = n),
    a
  );
}
var fc = Symbol(`ObserverAdministration`),
  pc = Symbol(`isMobXReactObserver`);
function mc(e) {
  return (
    e[fc] ??
    (e[fc] = {
      reaction: null,
      mounted: !1,
      reactionInvalidatedBeforeMount: !1,
      forceUpdate: null,
      name: gc(e.constructor),
      state: void 0,
      props: void 0,
      context: void 0,
    })
  );
}
function hc(e) {
  var t = e.prototype;
  if (e[pc]) {
    var n = gc(e);
    throw Error(
      `The provided component class (` +
        n +
        `) has already been declared as an observer component.`,
    );
  } else e[pc] = !0;
  if (t.componentWillReact)
    throw Error(`The componentWillReact life-cycle event is no longer supported`);
  if (e.__proto__ !== B.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = yc;
    else if (t.shouldComponentUpdate !== yc)
      throw Error(`It is not allowed to use shouldComponentUpdate in observer based components.`);
  }
  var r = t.render;
  if (typeof r != `function`) {
    var i = gc(e);
    throw Error(
      `[mobx-react] class component (` +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, `render`, {
        configurable: !1,
        writable: !1,
        value: Bs() ? r : _c.call(this, r),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var e = this,
        t = mc(this);
      return (
        (t.mounted = !0),
        Ws.unregister(this),
        (t.forceUpdate = function () {
          return e.forceUpdate();
        }),
        (!t.reaction || t.reactionInvalidatedBeforeMount) && t.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    uc(t, `componentWillUnmount`, function () {
      var e;
      if (!Bs()) {
        var t = mc(this);
        ((e = t.reaction) == null || e.dispose(),
          (t.reaction = null),
          (t.forceUpdate = null),
          (t.mounted = !1),
          (t.reactionInvalidatedBeforeMount = !1));
      }
    }),
    e
  );
}
function gc(e) {
  return e.displayName || e.name || `<component>`;
}
function _c(e) {
  var t = e.bind(this),
    n = mc(this);
  function r() {
    n.reaction || ((n.reaction = vc(n)), n.mounted || Ws.register(this, n, this));
    var e = void 0,
      r = void 0;
    if (
      (n.reaction.track(function () {
        try {
          r = ea(!1, t);
        } catch (t) {
          e = t;
        }
      }),
      e)
    )
      throw e;
    return r;
  }
  return r;
}
function vc(e) {
  return new Ma(e.name + `.render()`, function () {
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
function yc(e, t) {
  return (
    Bs() &&
      console.warn(
        `[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.`,
      ),
    this.state === t ? !rc(this.props, e) : !0
  );
}
function bc(e, t) {
  if (t && t.kind !== `class`) throw Error(`The @observer decorator can be used on classes only`);
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(B.Component, e) ||
    Object.prototype.isPrototypeOf.call(B.PureComponent, e)
      ? hc(e)
      : $s(e)
  );
}
function xc() {
  return (
    (xc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xc.apply(null, arguments)
  );
}
function Sc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var Cc = [`children`],
  wc = B.createContext({});
function Tc(e) {
  var t = e.children,
    n = Sc(e, Cc),
    r = B.useContext(wc),
    i = B.useRef(xc({}, r, n)).current;
  return B.createElement(wc.Provider, { value: i }, t);
}
if (((Tc.displayName = `MobXProvider`), `18.3.1`.split(`.`)[0], !B.Component))
  throw Error(`mobx-react requires React to be available`);
if (!q) throw Error(`mobx-react requires mobx to be available`);
function Ec(e, t, n, r) {
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
var Dc = `Loading ...`,
  Z = class {
    constructor() {
      ((this.state = `ROOT`),
        (this.isLoading = !0),
        (this.message = Dc),
        (this.testNonVersioningData = ``),
        (this.testNumberVersioningData = ``),
        (this.testDateVersioningData = ``),
        (this.testTimestampVersioningData = ``),
        Io(this));
    }
    saveState(e) {
      this.state = e;
    }
    saveResponse(e) {
      ((this.testData = e.testDataId),
        (this.testDataOptimisticNumber = e.testDataOptimisticNumberId),
        (this.testDataOptimisticTimeStampId = e.testDataOptimisticTimeStampId),
        (this.testDataOptimisticDateId = e.testDataOptimisticDateId));
    }
    saveUpdateResponse(e, t) {
      switch (e) {
        case `WITHOUT_VERSIONING`:
          this.testNonVersioningData = t;
          return;
        case `OPTIMISTIC_DATE`:
          this.testDateVersioningData = t;
          return;
        case `OPTIMISTIC_NUMBER`:
          this.testNumberVersioningData = t;
          return;
        case `OPTIMISTIC_TIMESTAMP`:
          this.testTimestampVersioningData = t;
          return;
        default:
          throw Error(`unsupported ` + e);
      }
    }
    clearStates(e) {
      switch (e) {
        case `WITHOUT_VERSIONING`:
          this.testNonVersioningData = ``;
          return;
        case `OPTIMISTIC_DATE`:
          this.testDateVersioningData = ``;
          return;
        case `OPTIMISTIC_NUMBER`:
          this.testNumberVersioningData = ``;
          return;
        case `OPTIMISTIC_TIMESTAMP`:
          this.testTimestampVersioningData = ``;
          return;
        default:
          throw Error(`unsupported ` + e);
      }
    }
    loading(e) {
      ((this.isLoading = !0), (this.message = e ?? Dc));
    }
    stopLoading() {
      ((this.isLoading = !1), (this.message = Dc));
    }
  };
(Ec([q], Z.prototype, `state`, void 0),
  Ec([q], Z.prototype, `isLoading`, void 0),
  Ec([q], Z.prototype, `message`, void 0),
  Ec([q], Z.prototype, `testData`, void 0),
  Ec([q], Z.prototype, `testDataOptimisticNumber`, void 0),
  Ec([q], Z.prototype, `testDataOptimisticDateId`, void 0),
  Ec([q], Z.prototype, `testDataOptimisticTimeStampId`, void 0),
  Ec([q], Z.prototype, `testNonVersioningData`, void 0),
  Ec([q], Z.prototype, `testNumberVersioningData`, void 0),
  Ec([q], Z.prototype, `testDateVersioningData`, void 0),
  Ec([q], Z.prototype, `testTimestampVersioningData`, void 0),
  Ec([Za.bound], Z.prototype, `saveState`, null),
  Ec([Za.bound], Z.prototype, `saveResponse`, null),
  Ec([Za.bound], Z.prototype, `saveUpdateResponse`, null),
  Ec([Za.bound], Z.prototype, `clearStates`, null),
  Ec([Za], Z.prototype, `loading`, null),
  Ec([Za], Z.prototype, `stopLoading`, null));
var Oc = new Z(),
  kc = new (class {
    constructor() {
      this.stateStore = Oc;
    }
  })(),
  Ac = (0, B.createContext)(kc),
  jc = () => (0, B.useContext)(Ac);
function Mc() {}
var Nc = function (e, t, n) {
    return e + (n && isFinite(n) ? (t - 1) * n : 0);
  },
  Pc = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = e.destination,
      a = e.sourceIndex;
    if (!i) return t;
    var o = Nc(a, n, r),
      s = Nc(i.index, n, r),
      c = t.slice(),
      u = l(c.splice(o, 1), 1)[0];
    return (c.splice(s, 0, u), c);
  };
function Fc(e, t) {
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
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Fc(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Lc = (function () {
  function e(t) {
    var n = this;
    (p(this, e),
      h(this, `_isAnalyticsEvent`, !0),
      h(this, `clone`, function () {
        return new e({ payload: Ic({}, n.payload) });
      }),
      (this.payload = t.payload));
  }
  return y(e, [
    {
      key: `update`,
      value: function (e) {
        return (
          typeof e == `function` && (this.payload = e(this.payload)),
          g(e) === `object` && (this.payload = Ic(Ic({}, this.payload), e)),
          this
        );
      },
    },
  ]);
})();
function Rc(e, t, n) {
  return ((t = d(t)), f(e, zc() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function zc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (zc = function () {
    return !!e;
  })();
}
function Bc(e, t, n, r) {
  var i = ue(d(1 & r ? e.prototype : e), t, n);
  return 2 & r && typeof i == `function`
    ? function (e) {
        return i.apply(n, e);
      }
    : i;
}
var Vc = (function (e) {
    function t(e) {
      var n;
      return (
        p(this, t),
        (n = Rc(this, t, [e])),
        h(n, `_isUIAnalyticsEvent`, !0),
        h(n, `clone`, function () {
          return n.hasFired
            ? null
            : new t({
                context: _(n.context),
                handlers: _(n.handlers),
                payload: JSON.parse(JSON.stringify(n.payload)),
              });
        }),
        h(n, `fire`, function (e) {
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
      S(t, e),
      y(t, [
        {
          key: `update`,
          value: function (e) {
            return this.hasFired ? this : Bc(t, `update`, this, 3)([e]);
          },
        },
      ])
    );
  })(Lc),
  Hc = (0, B.createContext)({
    getAtlaskitAnalyticsContext: function () {
      return [];
    },
    getAtlaskitAnalyticsEventHandlers: function () {
      return [];
    },
  }),
  Uc = function () {
    return (0, B.useContext)(Hc);
  },
  Wc = function (e) {
    var t = (0, B.useRef)(e);
    return ((t.current = e), t);
  };
function Gc(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Kc(e, t) {
  var n = (0, B.useState)(function () {
      return { inputs: t, result: e() };
    })[0],
    r = (0, B.useRef)(!0),
    i = (0, B.useRef)(n),
    a =
      r.current || (t && i.current.inputs && Gc(t, i.current.inputs))
        ? i.current
        : { inputs: t, result: e() };
  return (
    (0, B.useEffect)(
      function () {
        ((r.current = !1), (i.current = a));
      },
      [a],
    ),
    a.result
  );
}
function qc(e, t) {
  return Kc(function () {
    return e;
  }, t);
}
function Jc() {
  var e = Uc();
  return {
    createAnalyticsEvent: qc(
      function (t) {
        return new Vc({
          context: e.getAtlaskitAnalyticsContext(),
          handlers: e.getAtlaskitAnalyticsEventHandlers(),
          payload: t,
        });
      },
      [e],
    ),
  };
}
function Yc(e, t) {
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
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Yc(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Zc(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.actionSubject,
    a = e.packageName,
    o = e.packageVersion,
    s = e.analyticsData,
    c = Jc().createAnalyticsEvent,
    l = Wc(s),
    u = Wc(t);
  return (0, B.useCallback)(
    function (e) {
      var t = c({
          action: n,
          actionSubject: i || r,
          attributes: { componentName: r, packageName: a, packageVersion: o },
        }),
        s = Xc({ componentName: r, packageName: a, packageVersion: o }, l.current);
      t.context.push(s);
      var d = t.clone();
      (d && d.fire(`atlaskit`), u.current(e, t));
    },
    [n, r, i, a, o, c, l, u],
  );
}
function Qc(e, t) {
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
function $c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qc(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function el(e) {
  var t = e.fn,
    n = e.action,
    r = e.componentName,
    i = e.packageName,
    a = e.packageVersion,
    o = e.analyticsData,
    s = Jc().createAnalyticsEvent,
    c = Wc(o),
    l = Wc(t);
  return (0, B.useCallback)(
    function () {
      var e = s({
          action: n,
          actionSubject: r,
          attributes: { componentName: r, packageName: i, packageVersion: a },
        }),
        t = $c({ componentName: r, packageName: i, packageVersion: a }, c.current);
      e.context.push(t);
      var o = e.clone();
      (o && o.fire(`atlaskit`), l.current(e));
    },
    [n, r, i, a, s, c, l],
  );
}
var tl = function (e) {
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
};
O();
var nl = function (e) {
  var t = e.children;
  return B.createElement(
    `caption`,
    { className: N([`_11c81af2 _6rthu2gc _1pfh1ejb _m6k41e03`]) },
    t,
  );
};
O();
var rl = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    {
      "data-testid": n && `${n}--empty-view-container`,
      className: N([
        `_19pk1wug _2hwx1wug _otyr1wug _18u01wug _ca0q19bv _u5f319bv _n3td19bv _19bv19bv _1bsb1ssb _y3gn1h6o`,
      ]),
    },
    t,
  );
};
O();
var il = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    { "data-testid": n && `${n}--empty-view-with-fixed-height`, className: N([`_4t3i1jdh`]) },
    t,
  );
};
O();
var al = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    { "data-testid": n && `${n}--pagination--container`, className: N([`_1e0c1txw _1bah1h6o`]) },
    t,
  );
};
O();
var ol = [`isFixedSize`, `hasDataRow`, `children`, `testId`, `isLoading`],
  sl = (0, B.forwardRef)(function (e, t) {
    var n = e.isFixedSize,
      r = e.hasDataRow,
      i = e.children,
      a = e.testId,
      o = e.isLoading,
      s = m(e, ol);
    return B.createElement(
      `table`,
      P(
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
          className: N([
            `_1bsb1osq _yq5hus1c _btyzidpf _ect4ttxp`,
            n && `_1kqm1n9t`,
            r && `_179r1uh4`,
          ]),
        },
      ),
      i,
    );
  }),
  cl = [`cells`],
  ll = [`content`, `testId`],
  ul = function (e) {
    var t = e.row,
      n = e.head,
      r = e.testId,
      i = e.isFixedSize,
      a = e.isHighlighted,
      o = t.cells,
      s = m(t, cl);
    return B.createElement(
      E,
      P(
        {},
        s,
        { isHighlighted: a },
        a ? { "data-ts--dynamic-table--table-row--highlighted": !0 } : null,
        { testId: t.testId || (r && `${r}--row-${s.key}`) },
      ),
      o.map(function (e, t) {
        var a = e.content,
          o = e.testId,
          s = m(e, ll),
          c = (n || { cells: [] }).cells[t] || {},
          l = c.shouldTruncate,
          u = c.width;
        return B.createElement(
          M,
          P({ "data-testid": o || (r && `${r}--cell-${t}`) }, s, {
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
function dl(e, t, n) {
  return ((t = d(t)), f(e, fl() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function fl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (fl = function () {
    return !!e;
  })();
}
var pl = (function (e) {
    function t() {
      return (p(this, t), dl(this, t, arguments));
    }
    return (
      S(t, e),
      y(t, [
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
            return B.createElement(
              `tbody`,
              { "data-testid": a && `${a}--body`, ref: o },
              t.map(function (e, t) {
                return B.createElement(ul, {
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
  })(B.Component),
  ml = D(
    B.forwardRef(function (e, t) {
      return B.createElement(pl, P({}, e, { forwardedRef: t }));
    }),
  );
function hl(e, t, n) {
  return ((t = d(t)), f(e, gl() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function gl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gl = function () {
    return !!e;
  })();
}
var _l = (function (e) {
    function t(e) {
      var n;
      return (p(this, t), (n = hl(this, t, [e])), (n.state = { hasError: !1 }), n);
    }
    return (
      S(t, e),
      y(
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
  })(B.Component),
  vl = (0, B.createContext)(null),
  yl = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };
O();
function bl(e) {
  return e === `inherit` ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-inverse, #FFFFFF)`;
}
var xl = {
    rotateStyles: `_j7hqsf8s _5sag12kz _tip812c5 _1pgl2qsq _8hrz1h6o`,
    loadInStyles: `_j7hq1ky6 _5sag9cwz _1pgl1ytf _1o51q7pw`,
    wrapperStyles: `_1e0c116y _s7n4nkob`,
    circleStyles: `_lswuglyw _7ljx1dhp _1snbbs82 _jcxd7g3v _1tjm1onz`,
  },
  Sl = typeof window > `u` ? B.useEffect : B.useLayoutEffect,
  Cl = B.memo(
    B.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `inherit` : n,
        i = e.delay,
        a = i === void 0 ? 0 : i,
        o = e.interactionName,
        s = e.label,
        c = e.size,
        l = c === void 0 ? `medium` : c,
        u = e.testId,
        d = typeof l == `number` ? l : yl[l],
        f = `${a}ms`,
        p = bl(r),
        m = (0, B.useContext)(vl);
      return (
        Sl(
          function () {
            if (m != null) return m.hold(o);
          },
          [m, o],
        ),
        B.createElement(
          `span`,
          {
            "data-testid": u ? `${u}-wrapper` : `spinner-wrapper`,
            style: { animationDelay: f, width: d, height: d },
            className: N([xl.wrapperStyles, xl.rotateStyles]),
          },
          B.createElement(
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
              className: N([xl.loadInStyles]),
            },
            B.createElement(`circle`, {
              cx: `8`,
              cy: `8`,
              r: `7`,
              style: { stroke: p },
              className: N([xl.circleStyles]),
            }),
          ),
        )
      );
    }),
  );
O();
var wl = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    { "data-testid": n && `${n}--container`, className: N([`_kqswh2mm`]) },
    t,
  );
};
O();
function Tl(e, t) {
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
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tl(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Dl = `--contents-opacity`,
  Ol = function (e) {
    var t = e.children,
      n = e.contentsOpacity,
      r = e.testId;
    return B.createElement(
      `div`,
      {
        "data-testid": r && `${r}--contents--container`,
        className: N([`_tzy47hfw _lcxvglyw`]),
        style: El(El({}, h({}, Dl, n)), {}, { "--_cnddr8": ne(`var(${Dl})`) }),
      },
      t,
    );
  };
O();
var kl = function (e) {
  var t = e.children,
    n = e.testId;
  return B.createElement(
    `div`,
    {
      "data-testid": n && `${n}--spinner--container`,
      className: N([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o`]),
    },
    t,
  );
};
function Al(e, t, n) {
  return ((t = d(t)), f(e, jl() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function jl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (jl = function () {
    return !!e;
  })();
}
var Ml = (function (e) {
  function t() {
    return (p(this, t), Al(this, t, arguments));
  }
  return (
    S(t, e),
    y(t, [
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
          return B.createElement(
            wl,
            { testId: a },
            n ? B.createElement(Ol, { contentsOpacity: i, testId: a }, t) : t,
            n &&
              B.createElement(
                kl,
                { testId: a },
                B.createElement(Cl, { size: r, testId: a && `${a}--loadingSpinner`, label: o }),
              ),
          );
        },
      },
    ])
  );
})(B.Component);
(h(Ml, `defaultProps`, {
  isLoading: !0,
  spinnerSize: se,
  contentsOpacity: F,
  loadingLabel: `Loading table`,
}),
  O());
var Nl = [`children`, `testId`];
function Pl(e, t, n) {
  return ((t = d(t)), f(e, Fl() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function Fl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Fl = function () {
    return !!e;
  })();
}
var Il = (0, B.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.testId,
      i = m(e, Nl);
    return B.createElement(
      `div`,
      P({}, i, { "data-testid": r, ref: t, className: N([`_kqswh2mm _6rth1ejb`]) }),
      n,
    );
  }),
  Ll = function (e) {
    var t = e.children,
      n = e.testId;
    return B.createElement(
      `div`,
      {
        "data-testid": n && `${n}--spinner-backdrop`,
        className: N([`_1r04idpf _1e0c1txw _kqswstnw _4cvr1h6o _1bah1h6o _lcxvglyw`]),
      },
      t,
    );
  },
  Rl = (0, B.forwardRef)(function (e, t) {
    var n = e.children;
    return B.createElement(`div`, { ref: t, className: N([`_kqswh2mm _152tidpf`]) }, n);
  }),
  zl = (function (e) {
    function t() {
      var e;
      p(this, t);
      var n = [...arguments];
      return (
        (e = Pl(this, t, [].concat(n))),
        h(e, `spinnerRef`, B.createRef()),
        h(e, `containerRef`, B.createRef()),
        h(e, `componentDidMount`, function () {
          e.props.isLoading &&
            e.hasTargetNode() &&
            (e.attachListeners(), e.updateTargetAppearance(), e.updateSpinnerPosition());
        }),
        h(e, `UNSAFE_componentWillReceiveProps`, function (t) {
          !t.isLoading || !e.hasTargetNode(t)
            ? e.detachListeners()
            : e.props.isLoading || e.attachListeners();
        }),
        h(e, `componentDidUpdate`, function () {
          e.hasTargetNode() &&
            (e.updateTargetAppearance(), e.props.isLoading && e.updateSpinnerPosition());
        }),
        h(e, `componentWillUnmount`, function () {
          e.detachListeners();
        }),
        h(e, `getTargetNode`, function () {
          var t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.props)
            .targetRef;
          return t?.() || e.containerRef.current;
        }),
        h(e, `hasTargetNode`, function (t) {
          return !!e.getTargetNode(t);
        }),
        h(e, `isVerticallyVisible`, function (e, t) {
          var n = e.top;
          return e.bottom <= 0 ? !1 : n < t;
        }),
        h(e, `isFullyVerticallyVisible`, function (e, t) {
          var n = e.top,
            r = e.bottom;
          return n >= 0 && r <= t;
        }),
        h(e, `handleResize`, function () {
          e.updateSpinnerPosition();
        }),
        h(e, `handleScroll`, function () {
          e.updateSpinnerPosition();
        }),
        h(e, `translateSpinner`, function (e, t, n) {
          ((e.style.position = n ? `fixed` : ``),
            (e.style.transform = t === 0 ? `` : `translate3d(0, ${t}px, 0)`));
        }),
        h(e, `updateTargetAppearance`, function () {
          var t = e.getTargetNode(),
            n = e.props,
            r = n.isLoading,
            i = n.contentsOpacity;
          t &&
            t.style &&
            g(t.style) === `object` &&
            ((t.style.pointerEvents = r ? `none` : ``), (t.style.opacity = r ? i.toString() : ``));
        }),
        e
      );
    }
    return (
      S(t, e),
      y(t, [
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
            return B.createElement(
              Il,
              { testId: i && `${i}--loading--container--advanced`, ref: this.containerRef },
              t,
              n &&
                B.createElement(
                  Ll,
                  { testId: i },
                  B.createElement(
                    Rl,
                    { ref: this.spinnerRef },
                    B.createElement(Cl, { size: r, testId: i && `${i}--loadingSpinner`, label: a }),
                  ),
                ),
            );
          },
        },
      ])
    );
  })(B.Component);
h(zl, `defaultProps`, {
  isLoading: !0,
  spinnerSize: se,
  contentsOpacity: `var(--ds-opacity-loading, 0.2)`,
  loadingLabel: `Loading table`,
});
function Bl(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return e;
          },
    n = e !== void 0,
    r = l((0, B.useState)(t), 2),
    i = r[0],
    a = r[1],
    o = (0, B.useRef)(n);
  return (
    (0, B.useEffect)(
      function () {
        o.current = n;
      },
      [n],
    ),
    [
      n ? e : i,
      (0, B.useCallback)(function (e) {
        o.current || a(e);
      }, []),
    ]
  );
}
var Vl = n(() => {}),
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl = n(() => {
    (Vl(),
      (Hl = e(o())),
      O(),
      (Ul = e(o())),
      (Wl = {
        none: `_1bsbpxbi _4t3ipxbi`,
        compact: `_1bsb1ejb _4t3i1ejb`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Gl = {
        none: `_1bsbutpp _4t3iutpp`,
        compact: `_1bsbpxbi _4t3ipxbi`,
        spacious: `_1bsb1ejb _4t3i1ejb`,
      }),
      (Kl = {
        medium: { none: 0, compact: 4, spacious: 4 },
        small: { none: 0, compact: 2.66, spacious: 8 },
      }),
      (ql = (0, Ul.memo)(function (e) {
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
          h = Kl[f][l],
          g = m + 2 * h;
        return Hl.createElement(
          `span`,
          {
            "data-testid": i,
            role: a ? `img` : void 0,
            "aria-label": a || void 0,
            "aria-hidden": a ? void 0 : !0,
            style: { color: r },
            className: N([
              `_1e0c1o8l _vchhusvi _1o9zidpf _vwz4kb7n _y4ti1igz _bozg1mb9`,
              `_12va1onz _jcxd1r8n`,
              s && `_1bsb1kw7 _4t3i1kw7`,
              f === `small` && `_vwz4utpp`,
            ]),
          },
          Hl.createElement(`svg`, {
            fill: `none`,
            viewBox: `${0 - h} ${0 - h} ${g} ${g}`,
            role: `presentation`,
            dangerouslySetInnerHTML: d,
            className: N([
              `_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31`,
              s ? `_1bsb1kw7 _4t3i1kw7` : f === `small` ? Gl[l] : Wl[l],
            ]),
          }),
        );
      })));
  }),
  Yl = r({ Icon: () => ql, default: () => ql }),
  Xl = n(() => {
    Jl();
  }),
  Zl = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xl(), t(Yl)));
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
  Ql = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xl(), t(Yl)));
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
  $l = (0, B.createContext)(`elevation.surface`),
  eu = function () {
    return (0, B.useContext)($l);
  };
(($l.displayName = `SurfaceProvider`), O());
var tu = [
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
  nu = [`className`],
  ru = {
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
  iu = {
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
  au = {
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
  ou = {
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
  su = {
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
  cu = {
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
  lu = (0, B.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `div` : n,
      i = e.children,
      a = e.backgroundColor,
      o = e.padding,
      s = e.paddingBlock,
      c = s === void 0 ? o : s,
      l = e.paddingBlockStart,
      u = l === void 0 ? c : l,
      d = e.paddingBlockEnd,
      f = d === void 0 ? c : d,
      p = e.paddingInline,
      h = p === void 0 ? o : p,
      g = e.paddingInlineStart,
      _ = g === void 0 ? h : g,
      v = e.paddingInlineEnd,
      y = v === void 0 ? h : v,
      b = e.style,
      x = e.testId,
      S = e.xcss,
      C = m(e, tu);
    C.className;
    var w = m(C, nu),
      T = B.createElement(
        r,
        P(
          {
            style: b,
            ref: t,
            className: N([
              `_19itglyw _vchhusvi _r06hglyw`,
              a && ru[a],
              a && uu(a) && iu[a],
              u && au[u],
              f && ou[f],
              _ && su[_],
              y && cu[y],
              S,
            ]),
          },
          w,
          { "data-testid": x },
        ),
        i,
      );
    return a ? B.createElement($l.Provider, { value: a }, T) : T;
  });
function uu(e) {
  return e in iu;
}
var du = () =>
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
O();
var fu = (...e) => N(e);
function pu() {
  return {
    css() {
      throw du();
    },
    cssMap() {
      throw du();
    },
    cx: fu,
    XCSSProp() {
      throw du();
    },
  };
}
var mu = pu();
(mu.css, mu.cssMap, mu.cssMap);
var hu = mu.cx;
(mu.XCSSProp, O());
var gu = [
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
  _u = {
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
  vu = {
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
  yu = {
    start: `_1bahv2br`,
    center: `_1bah1h6o`,
    end: `_1bahh9n0`,
    "space-between": `_1bah1yb4`,
    "space-around": `_1bah1b1v`,
    "space-evenly": `_1bahitcz`,
    stretch: `_1bah1fhb`,
  },
  bu = { column: `_2lx21bp4`, row: `_2lx2vrvc` },
  xu = { wrap: `_1n261g80`, nowrap: `_1n261q9c` },
  Su = {
    start: `_4cvrv2br`,
    center: `_4cvr1h6o`,
    baseline: `_4cvr1q9y`,
    end: `_4cvrh9n0`,
    stretch: `_4cvr1fhb`,
  },
  Cu = { root: `_1e0c1txw _vchhusvi` },
  wu = (0, B.memo)(
    (0, B.forwardRef)(function (e, t) {
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
        h = e.xcss,
        g = m(e, gu);
      return B.createElement(
        r,
        P({}, g, {
          role: i,
          className: N([
            Cu.root,
            s && vu[s],
            c && vu[c],
            s && _u[s],
            l && _u[l],
            a && Su[a],
            f && bu[f],
            o && yu[o],
            p && xu[p],
            h,
          ]),
          "data-testid": d,
          ref: t,
        }),
        u,
      );
    }),
  );
((wu.displayName = `Flex`), O());
var Tu = [
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
  Eu = {
    separator: `_1mouze3t _195g1i6y _syazjjyb _lcxvglyw _uiztglyw`,
    hug: `_16jlidpf`,
    fill: `_1bsb1osq _16jlkb7n`,
  },
  Du = function (e) {
    var t = e.children;
    return B.createElement(`span`, { className: N([Eu.separator]) }, t);
  },
  Ou = (0, B.memo)(
    (0, B.forwardRef)(function (e, t) {
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
        h = e.testId,
        g = e.role,
        _ = e.children,
        v = m(e, Tu),
        y = typeof f == `string` ? B.createElement(Du, null, f) : f,
        b = y
          ? B.Children.toArray(_)
              .filter(Boolean)
              .map(function (e, t) {
                return B.createElement(B.Fragment, { key: t }, f && t > 0 ? y : null, e);
              })
          : _;
      return B.createElement(
        wu,
        P({}, v, {
          as: n,
          role: g,
          alignItems: a,
          justifyContent: c || r,
          direction: `row`,
          gap: u,
          rowGap: d,
          wrap: s ? `wrap` : void 0,
          xcss: hu(l === `hug` && Eu.hug, l === `fill` && Eu.fill, p),
          testId: h,
          ref: t,
        }),
        b,
      );
    }),
  );
Ou.displayName = `Inline`;
var ku = (0, B.createContext)(!1),
  Au = function () {
    return (0, B.useContext)(ku);
  },
  ju = ku.Provider;
O();
var Mu = [`span`, `p`, `strong`, `em`],
  Nu = function (e, t) {
    var n = eu();
    if (e !== `inherit`) {
      if (e) return e;
      if (!t) return Ru.hasOwnProperty(n) ? Ru[n] : `color.text`;
    }
  },
  Pu = {
    root: `_19pkidpf _2hwxidpf _otyridpf _18u0idpf _1i4qfg65`,
    "as.strong": `_k48pwu06`,
    "as.em": `_zg8l1m30`,
    "textAlign.center": `_y3gn1h6o`,
    "textAlign.end": `_y3gnh9n0`,
    "textAlign.start": `_y3gnv2br`,
    truncation: `_1reo15vq _18m915vq _1e0ccj1k _sudp1e54`,
    breakAll: `_1nmz9jpi`,
  },
  Fu = { medium: `_11c8fhey`, large: `_11c81d4k`, small: `_11c8wadc` },
  Iu = { bold: `_k48pwu06`, medium: `_k48p1wq8`, regular: `_k48pi7a9`, semibold: `_k48p1pd9` },
  Lu = {
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
  Ru = {
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
  zu = (0, B.forwardRef)(function (e, t) {
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
    ie(Mu.includes(r), `@atlaskit/primitives: Text received an invalid "as" value of "${r}"`);
    var p = Au(),
      m = Nu(i, p);
    !c && !p && (c = `medium`);
    var h = B.createElement(
      r,
      {
        id: s,
        className: N([
          Pu.root,
          c && Fu[c],
          m && Lu[m],
          u && Pu.truncation,
          u === 1 && Pu.breakAll,
          a && Pu[`textAlign.${a}`],
          l && Iu[l],
          r === `em` && Pu[`as.em`],
          r === `strong` && Pu[`as.strong`],
          d,
        ]),
        style: { WebkitLineClamp: u },
        "data-testid": o,
        ref: t,
      },
      f,
    );
    return p ? h : B.createElement(ju, { value: !0 }, h);
  });
function Bu() {
  if (typeof window < `u` && window.navigator != null) {
    var e = window.navigator.userAgent?.toLowerCase();
    return e ? e.includes(`safari`) && !e.includes(`chrome`) : !1;
  }
  return !1;
}
O();
var Vu = [`as`, `children`, `isInset`, `testId`, `style`, `xcss`],
  Hu = [`className`],
  Uu = (0, B.forwardRef)(function (e, t) {
    var n = e.as,
      r = n === void 0 ? `button` : n,
      i = e.children,
      a = e.isInset,
      o = e.testId,
      s = e.style,
      c = e.xcss,
      l = m(e, Vu);
    l.className;
    var u = m(l, Hu);
    return B.createElement(
      r,
      P({}, u, {
        ref: t,
        className: N([
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
  Wu = [
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
  Gu = [`className`],
  Ku = { root: `_19itglyw _vchhusvi _r06hglyw _80omtlke`, disabled: `_80om13gf` },
  qu = (0, B.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.isDisabled,
      i = e.type,
      a = i === void 0 ? `button` : i,
      o = e.onClick,
      s = o === void 0 ? Mc : o,
      c = e.interactionName,
      l = e.componentName,
      u = e.analyticsContext,
      d = e.style,
      f = e.testId,
      p = e.xcss,
      h = e.tabIndex,
      g = m(e, Wu),
      _ = (0, B.useContext)(vl),
      v = Zc({
        fn: (0, B.useCallback)(
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
    var y = m(g, Gu);
    return B.createElement(
      Uu,
      P({ as: `button`, tabIndex: h ?? (Bu() && !r ? 0 : void 0), style: d }, y, {
        type: a,
        onClick: v,
        disabled: r,
        xcss: fu(Ku.root, r && Ku.disabled, p),
        testId: f,
        ref: t,
      }),
      n,
    );
  }),
  Ju = (0, B.createContext)(!1),
  Yu = function () {
    return (0, B.useContext)(Ju);
  },
  Xu = (0, B.createContext)(!1),
  Zu = function () {
    return (0, B.useContext)(Xu);
  };
function Qu(e, t) {
  var n = pe[e];
  return ((n ||= xe), t ? `var(${n}, ${t})` : `var(${n})`);
}
var $u = [`light`, `dark`, `spacing`, `typography`, `shape`, `motion`],
  ed = `UNSAFE_themeOptions`,
  td = function (e) {
    return (
      $u.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  nd = function (e) {
    return (
      ce.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  rd = function (e) {
    return [`light`, `dark`, `auto`].includes(e);
  },
  id = function (e) {
    return e
      .split(` `)
      .map(function (e) {
        return e.split(/:([^]*)/);
      })
      .reduce(function (e, t) {
        var n = l(t, 2),
          r = n[0],
          i = n[1];
        if ((r === `colorMode` && rd(i) && (e[r] = i), td(r) && nd(i) && (e[r] = i), r === ed))
          try {
            e[ed] = JSON.parse(i);
          } catch {}
        return e;
      }, {});
  },
  ad = function (e) {
    return Object.entries(e).reduce(function (e, t) {
      var n = l(t, 2),
        r = n[0],
        i = n[1];
      return (r === `colorMode` && typeof i == `string` && rd(i)) ||
        (r === ed && g(i) === `object`) ||
        (td(r) && typeof i == `string` && nd(i))
        ? e + `${e ? ` ` : ``}${r}:${g(i) === `object` ? JSON.stringify(i) : i}`
        : e;
    }, ``);
  };
function od(e, t) {
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
function sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? od(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : od(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var cd = function (e) {
    return (
      be.find(function (t) {
        return t === e;
      }) !== void 0
    );
  },
  ld = function () {
    if (typeof document > `u`) return {};
    var e = document.documentElement,
      t = e.getAttribute(`data-color-mode`) || ``;
    return sd(sd({}, id(e.getAttribute(`data-theme`) || ``)), cd(t) && { colorMode: t });
  };
function ud(e, t) {
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
function dd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ud(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ud(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var fd = `light`,
  pd = `no-preference`,
  md = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.colorMode,
      n = t === void 0 ? z.colorMode : t,
      r = e.dark,
      i = r === void 0 ? z.dark : r,
      a = e.light,
      o = a === void 0 ? z.light : a,
      s = e.contrastMode,
      c = s === void 0 ? z.contrastMode : s,
      l = e.motion,
      u = l === void 0 ? z.motion() : l,
      d = e.shape,
      f = d === void 0 ? z.shape() : d,
      p = e.spacing,
      m = p === void 0 ? z.spacing : p,
      g = e.typography,
      _ = g === void 0 ? z.typography : g,
      v = e.UNSAFE_themeOptions,
      y = v === void 0 ? z.UNSAFE_themeOptions : v,
      b = h(
        h({}, ye, ad({ dark: i, light: o, motion: u, shape: f, spacing: m, typography: _ })),
        _e,
        n === `auto` ? fd : n,
      );
    if (
      (L(`platform_increased-contrast-themes`) &&
        (b = dd(dd({}, b), {}, h({}, R, c === `auto` ? pd : c))),
      y && me(y.brandColor))
    ) {
      var x = ge(JSON.stringify(y));
      b[he] = x;
    }
    return b;
  };
Lt();
var hd = {
    light: function () {
      return It(() => import(`./atlassian-light-B4KoDEbt.js`), [], import.meta.url);
    },
    "light-future": function () {
      return It(() => import(`./atlassian-light-future-DKM5j9ZV.js`), [], import.meta.url);
    },
    "light-increased-contrast": function () {
      return It(
        () => import(`./atlassian-light-increased-contrast-jVeZopnG.js`),
        [],
        import.meta.url,
      );
    },
    dark: function () {
      return It(() => import(`./atlassian-dark-BitxfF75.js`), [], import.meta.url);
    },
    "dark-future": function () {
      return It(() => import(`./atlassian-dark-future-CwgxGfeB.js`), [], import.meta.url);
    },
    "dark-increased-contrast": function () {
      return It(
        () => import(`./atlassian-dark-increased-contrast-Cnh8Zgxj.js`),
        [],
        import.meta.url,
      );
    },
    spacing: function () {
      return It(() => import(`./atlassian-spacing-Clc_kSQO.js`), [], import.meta.url);
    },
    typography: function () {
      return It(() => import(`./atlassian-typography-B1SRcYiZ.js`), [], import.meta.url);
    },
    shape: function () {
      return It(() => import(`./atlassian-shape-4W9UVfYR.js`), [], import.meta.url);
    },
    motion: function () {
      return It(() => import(`./atlassian-motion-DJC8sDd8.js`), [], import.meta.url);
    },
  },
  Q = e(le()),
  gd = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n, r;
        return Q.default.wrap(function (e) {
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
                return ((e.next = 6), _d(t));
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
  _d = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n, r;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), hd[t]());
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
  vd = te(),
  yd = typeof window < `u` && `matchMedia` in window;
function bd(e) {
  document.documentElement.setAttribute(_e, e.matches ? `dark` : `light`);
}
var xd = yd && window.matchMedia(`(prefers-color-scheme: dark)`),
  Sd = new ((function () {
    function e() {
      (p(this, e), h(this, `unbindThemeChangeListener`, null));
    }
    return y(e, [
      {
        key: `getColorMode`,
        value: function () {
          return xd && xd != null && xd.matches ? `dark` : `light`;
        },
      },
      {
        key: `bind`,
        value: function () {
          xd &&
            this.unbindThemeChangeListener === null &&
            (this.unbindThemeChangeListener = (0, vd.bind)(xd, { type: `change`, listener: bd }));
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
  Cd = typeof window < `u` && `matchMedia` in window;
function wd(e) {
  document.documentElement.setAttribute(R, e.matches ? `more` : `no-preference`);
}
var Td = Cd && window.matchMedia(`(prefers-contrast: more)`),
  Ed = new ((function () {
    function e() {
      (p(this, e), h(this, `unbindContrastChangeListener`, null));
    }
    return y(e, [
      {
        key: `getContrastMode`,
        value: function () {
          return Td && Td != null && Td.matches ? `more` : `no-preference`;
        },
      },
      {
        key: `bind`,
        value: function () {
          Td &&
            this.unbindContrastChangeListener === null &&
            (this.unbindContrastChangeListener = (0, vd.bind)(Td, {
              type: `change`,
              listener: wd,
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
function Dd(e) {
  (e.colorMode === `auto` ? ((e.colorMode = Sd.getColorMode()), Sd.bind()) : Sd.unbind(),
    L(`platform_increased-contrast-themes`) &&
      (e.contrastMode === `auto`
        ? ((e.contrastMode = Ed.getContrastMode()), Ed.bind())
        : Ed.unbind()));
  var t = md(e);
  return (
    Object.entries(t).forEach(function (e) {
      var t = l(e, 2),
        n = t[0],
        r = t[1];
      document.documentElement.setAttribute(n, r);
    }),
    function () {
      (Sd.unbind(), L(`platform_increased-contrast-themes`) && Ed.unbind());
    }
  );
}
function Od(e) {
  return Object.entries(de).find(function (t) {
    return l(t, 2)[1].increasesContrastFor === e;
  })?.[1].id;
}
var kd = function (e) {
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
        L(`platform_increased-contrast-themes`) &&
        l.forEach(function (e) {
          var t = Od(e);
          t && l.push(t);
        }),
        u.push.apply(u, l));
    else if ((u.push(e[t]), n !== `no-preference` && L(`platform_increased-contrast-themes`))) {
      var d = Od(e[t]);
      d && u.push(d);
    }
    return (
      [a, o, s, c].forEach(function (e) {
        e && u.push(e);
      }),
      _(new Set(u))
    );
  },
  Ad = function (e) {
    return _(new Set([]));
  };
Lt();
function jd(e, t) {
  var n = (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (!n) {
    if (Array.isArray(e) || (n = Md(e)) || (t && e && typeof e.length == `number`)) {
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
function Md(e, t) {
  if (e) {
    if (typeof e == `string`) return Nd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Nd(e, t)
          : void 0
    );
  }
}
function Nd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Pd(e, t) {
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
function Fd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Pd(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Pd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Id = (function () {
    var e = I(
      Q.default.mark(function e() {
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
        return Q.default.wrap(
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
                            Fd(
                              Fd({}, z),
                              {},
                              { typography: z.typography, shape: z.shape(), motion: z.motion() },
                              ld(),
                            ),
                          )
                        : t),
                    (i = r.colorMode),
                    (a = i === void 0 ? z.colorMode : i),
                    (o = r.contrastMode),
                    (s = o === void 0 ? z.contrastMode : o),
                    (c = r.dark),
                    (l = c === void 0 ? z.dark : c),
                    (u = r.light),
                    (d = u === void 0 ? z.light : u),
                    (f = r.shape),
                    (p = f === void 0 ? z.shape() : f),
                    (m = r.spacing),
                    (h = m === void 0 ? z.spacing : m),
                    (g = r.typography),
                    (_ = g === void 0 ? z.typography : g),
                    (v = r.motion),
                    (y = v === void 0 ? z.motion() : v),
                    (b = r.UNSAFE_themeOptions),
                    (x = b === void 0 ? z.UNSAFE_themeOptions : b),
                    L(`platform_increased-contrast-themes`) ||
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
                    (C = kd(S)),
                    (w = n || gd),
                    (T = C.map(
                      (function () {
                        var e = I(
                          Q.default.mark(function e(t) {
                            return Q.default.wrap(function (e) {
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
                      me(x?.brandColor) &&
                      ((E = a || z.colorMode),
                      (D = ve(x, E)),
                      D.length > 0 &&
                        T.push(
                          I(
                            Q.default.mark(function e() {
                              var t, n;
                              return Q.default.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        It(
                                          () => import(`./custom-theme-BHUa3WXR.js`),
                                          __vite__mapDeps([2, 3, 1, 4, 5]),
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
                  ((O = Ad(S)), (k = jd(O)), (e.prev = 13), k.s());
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
                  return ((M = Dd(S)), e.abrupt(`return`, M));
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
  Ld = (function () {
    function e(t) {
      (p(this, e), h(this, `legacyObserver`, null), (this.callback = t), e.callbacks.add(t));
    }
    return y(e, [
      {
        key: `observe`,
        value: function () {
          e.observer ||
            ((e.observer = new MutationObserver(function () {
              var t = ld();
              e.callbacks.forEach(function (e) {
                return e(t);
              });
            })),
            e.observer.observe(document.documentElement, { attributeFilter: [ye, _e] }));
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
(h(Ld, `observer`, null), h(Ld, `callbacks`, new Set()));
var Rd = (0, B.createContext)(void 0),
  zd = (0, B.createContext)(void 0),
  Bd = (0, B.createContext)(!1),
  Vd = (0, B.createContext)(void 0),
  Hd = (0, B.createContext)(void 0),
  Ud = function () {
    return (0, B.useContext)(Bd) ?? !1;
  },
  Wd = function () {
    return typeof document < `u` ? document : null;
  };
function Gd(e) {
  var t = Wd();
  return t ? t.head.querySelector(`style[${ye}="${e}"]`) : !1;
}
var Kd = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n, r;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!Gd(t)) {
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
                return ((e.next = 6), hd[t]());
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
  qd = (function () {
    var e = I(
      Q.default.mark(function e(t, n) {
        var r, i;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((r = Wd()), r)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(`return`);
              case 3:
                if (
                  ((i = r.createElement(`style`)),
                  (i.textContent = t),
                  (i.dataset.theme = n),
                  !Gd(n))
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
  Jd = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), Kd(t));
              case 2:
                if (((n = e.sent), n)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt(`return`);
              case 5:
                qd(n, t);
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
  Yd = (function () {
    var e = I(
      Q.default.mark(function e(t) {
        var n;
        return Q.default.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                ((n = Object.values(t).filter(function (e) {
                  return !!e;
                })),
                  n.forEach(Jd));
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
O();
function Xd(e, t) {
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
function Zd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Xd(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Qd = { dark: `dark`, light: `light`, spacing: `spacing`, typography: `typography` },
  $d =
    typeof window < `u` && `matchMedia` in window
      ? window.matchMedia(`(prefers-color-scheme: dark)`)
      : void 0;
function ef(e) {
  return e === `auto` ? ($d != null && $d.matches ? `dark` : `light`) : e;
}
var tf = { body: `_1e0c1bgi` };
function nf(e) {
  var t = e.children,
    n = e.defaultColorMode,
    r = n === void 0 ? `auto` : n,
    i = e.defaultTheme,
    a = l((0, B.useState)(r), 2),
    o = a[0],
    s = a[1],
    c = l((0, B.useState)(ef(r)), 2),
    u = c[0],
    d = c[1],
    f = l(
      (0, B.useState)(function () {
        return Zd(Zd({}, Qd), i);
      }),
      2,
    ),
    p = f[0],
    m = f[1],
    g = (0, B.useCallback)(function (e) {
      (s(e), d(ef(e)));
    }, []),
    _ = (0, B.useCallback)(function (e) {
      m(function (t) {
        return Zd(Zd({}, t), e);
      });
    }, []),
    v = (0, B.useRef)(null),
    y = Yu(),
    b = Zu(),
    x = Ud(),
    S = y && !x && b;
  ((0, B.useEffect)(
    function () {
      if (S) {
        var e = (function () {
          var e = I(
            Q.default.mark(function e() {
              var t;
              return Q.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!v.current) {
                        e.next = 6;
                        break;
                      }
                      return ((e.next = 3), v.current);
                    case 3:
                      ((t = e.sent), t(), (v.current = null));
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
            var t = I(
              Q.default.mark(function t() {
                var n;
                return Q.default.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return ((t.next = 2), e());
                      case 2:
                        ((n = Id(Zd(Zd({}, p), {}, { colorMode: u }))), (v.current = n));
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
      } else Yd(p);
    },
    [y, x, S, u, p],
  ),
    (0, B.useEffect)(
      function () {
        if ($d)
          return (0, vd.bind)($d, {
            type: `change`,
            listener: function (e) {
              o === `auto` && d(e.matches ? `dark` : `light`);
            },
          });
      },
      [o],
    ));
  var C = Zd(Zd({}, md(Zd(Zd({}, p), {}, { colorMode: u }))), {}, h({}, fe, !0));
  return B.createElement(
    Bd.Provider,
    { value: !0 },
    B.createElement(
      Rd.Provider,
      { value: u },
      B.createElement(
        zd.Provider,
        { value: g },
        B.createElement(
          Vd.Provider,
          { value: p },
          B.createElement(
            Hd.Provider,
            { value: _ },
            S ? t : B.createElement(`div`, P({}, C, { className: N([tf.body]) }), t),
          ),
        ),
      ),
    ),
  );
}
function rf() {
  var e = (0, B.useContext)(Rd),
    t = ld(),
    n = l((0, B.useState)(t?.colorMode || `light`), 2),
    r = n[0],
    i = n[1];
  return (
    (0, B.useEffect)(
      function () {
        if (!e) {
          var t = new Ld(function (e) {
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
function af() {
  return B.useId().replace(/[:«»]/g, `_`);
}
O();
var of = function (e) {
  var t = e.children,
    n = e.testId,
    r = e.role,
    i = e.id;
  return B.createElement(
    `span`,
    {
      id: i,
      "data-testid": n,
      role: r,
      className: N([
        `_ca0qidpf _u5f3idpf _n3tdidpf _19bvidpf _19itidpf _1reo15vq _18m915vq _1bsbt94y _4t3it94y _kqswstnw _ogto7mnp _uiztglyw _o5721q9c`,
      ]),
    },
    t,
  );
};
of.displayName = `VisuallyHidden`;
function sf(e, t) {
  var n = (0, B.useRef)(!0);
  (0, B.useEffect)(
    function () {
      (e && n.current && t && e.current && e.current.focus(), (n.current = !1));
    },
    [t, e],
  );
}
var cf = 2,
  lf = j({
    outline: `var(--ds-border-width-focused, 2px) solid var(--ds-border-focused, #4688EC)`,
    outlineOffset: cf,
  }),
  uf = j({
    outlineColor: `var(--ds-border-focused, #4688EC)`,
    outlineOffset: -cf,
    outlineStyle: `solid`,
    outlineWidth: `var(--ds-border-width-focused, 2px)`,
  }),
  df = j({
    "&:focus": lf,
    "&:focus-visible": lf,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid` },
    },
  }),
  ff = j({
    "&:focus": uf,
    "&:focus-visible": uf,
    "&:focus:not(:focus-visible)": { outline: `none` },
    "@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)": {
      "&:focus-visible": { outline: `var(--ds-border-width, 1px) solid`, outlineOffset: `-1px` },
    },
  }),
  pf = (0, B.memo)(function (e) {
    var t = e.children,
      n = e.isInset,
      r = e.focus,
      i = r === void 0 ? (n ? ff : df) : r === `on` && (n ? uf : lf);
    return w(re, null, function (e) {
      var n = e.css,
        r = e.cx;
      return B.Children.only(
        i ? (0, B.cloneElement)(t, { className: r([n(i), t.props.className]) }) : t,
      );
    });
  });
pf.displayName = `FocusRing`;
function mf(e) {
  (e.preventDefault(), e.stopPropagation());
}
var hf = 9;
function gf(e) {
  e.keyCode !== hf && mf(e);
}
var _f = {
    onMouseDownCapture: mf,
    onMouseUpCapture: mf,
    onKeyDownCapture: gf,
    onKeyUpCapture: gf,
    onTouchStartCapture: mf,
    onTouchEndCapture: mf,
    onPointerDownCapture: mf,
    onPointerUpCapture: mf,
    onClickCapture: mf,
    onClick: mf,
  },
  vf = {};
function yf(e) {
  return e.isInteractive ? vf : _f;
}
function bf(e) {
  var t = e.spacing;
  return j({
    margin: t === `none` ? 0 : `0 2px`,
    flexGrow: 1,
    flexShrink: 1,
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
  });
}
function xf(e) {
  var t = e.hasOverlay;
  return j({ opacity: +!t, transition: `opacity 0.3s` });
}
function Sf(e) {
  var t = e.spacing;
  return j({
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
var Cf = function (e) {
    return e && (0, B.isValidElement)(e) && e.type === of;
  },
  wf = {
    position: `absolute`,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  Tf = [
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
  Ef = { "> *": { pointerEvents: `none` } },
  Df = j({
    "--ds--button--new-icon-padding-end": `var(--ds-space-025, 2px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-050, 4px)`,
    marginInlineStart: `var(--ds-space-negative-025, -2px)`,
  }),
  Of = j({
    "--ds--button--new-icon-padding-end": `var(--ds-space-050, 4px)`,
    "--ds--button--new-icon-padding-start": `var(--ds-space-025, 2px)`,
    marginInlineEnd: `var(--ds-space-negative-025, -2px)`,
  }),
  kf = function (e, t) {
    return !e || Cf(e) ? null : t;
  },
  Af = function (e, t) {
    return Cf(e) ? e : e ? w(`span`, { css: t }, e) : null;
  },
  jf = B.forwardRef(function (e, t) {
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
      h = e.iconBefore,
      g = e.interactionName,
      _ = e.isDisabled,
      v = _ === void 0 ? !1 : _,
      y = e.isSelected,
      b = y === void 0 ? !1 : y,
      x = e.onBlur,
      S = e.onClick,
      C = S === void 0 ? Mc : S,
      T = e.onFocus,
      E = e.onMouseDown,
      D = E === void 0 ? Mc : E,
      O = e.overlay;
    e.shouldFitContainer;
    var k = e.spacing,
      A = k === void 0 ? `default` : k,
      M = e.tabIndex,
      N = M === void 0 ? 0 : M,
      ee = e.type,
      te = ee === void 0 ? (u ? void 0 : `button`) : ee,
      ne = e.testId,
      re = m(e, Tf),
      ie = (0, B.useRef)(),
      ae = (0, B.useCallback)(
        function (e) {
          if (((ie.current = e), t != null)) {
            if (typeof t == `function`) {
              t(e);
              return;
            }
            t.current = e;
          }
        },
        [ie, t],
      );
    sf(ie, o);
    var oe = (0, B.useContext)(vl),
      se = Zc({
        fn: (0, B.useCallback)(
          function (e, t) {
            (oe && oe.tracePress(g, e.timeStamp), C(e, t));
          },
          [C, oe, g],
        ),
        action: `clicked`,
        componentName: `button`,
        packageName: `@atlaskit/button`,
        packageVersion: `23.11.3`,
        analyticsData: n,
      }),
      F = (0, B.useCallback)(
        function (e) {
          (e.preventDefault(), D(e));
        },
        [D],
      );
    (0, B.useEffect)(
      function () {
        var e = ie.current;
        v && e && e === document.activeElement && e.blur();
      },
      [v],
    );
    var ce = !!O,
      I = j(xf({ hasOverlay: ce })),
      le = !v && !ce,
      ue = {};
    return (
      (b || v || i === `warning`) &&
        (ue = {
          "[data-theme] & circle": {
            stroke: `${b || v ? `var(--ds-icon-subtle, #505258)` : `var(--ds-icon-warning-inverse, #292A2E)`} !important`,
          },
        }),
      w(
        pf,
        null,
        w(
          f,
          P(
            {},
            re,
            {
              ref: ae,
              className: l,
              css: [s, le ? null : Ef],
              "data-has-overlay": ce ? !0 : void 0,
              "data-testid": ne,
              disabled: v,
              href: le ? u : void 0,
              onBlur: x,
              onClick: se,
              onFocus: T,
              onMouseDown: F,
              tabIndex: v ? -1 : N,
              type: te,
            },
            yf({ isInteractive: le }),
          ),
          h ? w(`span`, { css: [I, Sf({ spacing: A }), kf(c, Df)] }, h) : null,
          Af(c, [I, bf({ spacing: A })]),
          p ? w(`span`, { css: [I, Sf({ spacing: A }), kf(c, Of)] }, p) : null,
          O ? w(`span`, { css: [wf, ue] }, O) : null,
        ),
      )
    );
  });
function Mf(e, t) {
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
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Mf(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Pf = 8,
  Ff = [`default`, `primary`, `danger`, `warning`],
  If = { default: `${32 / 14}em`, compact: `${24 / 14}em`, none: `auto` },
  Lf = { default: If.default, compact: If.compact, none: `inherit` },
  Rf = { default: `0 ${Pf + Pf / 4}px`, compact: `0 ${Pf + Pf / 4}px`, none: `0` },
  zf = { compact: `0 ${Pf / 4}px`, default: `0 ${Pf / 4}px`, none: `0` },
  Bf = { default: `middle`, compact: `middle`, none: `baseline` },
  Vf = {
    borderRadius: `inherit`,
    inset: `var(--ds-space-0, 0px)`,
    borderStyle: `solid`,
    borderWidth: `var(--ds-border-width, 1px)`,
    pointerEvents: `none`,
    position: `absolute`,
  },
  Hf = {
    background: `var(--ds-background-neutral-subtle, #00000000)`,
    color: `var(--ds-text, #292A2E)`,
    "&::after": Nf(Nf({}, Vf), {}, { content: `""`, borderColor: `var(--ds-border, #0B120E24)` }),
    "&:hover": { background: `var(--ds-background-neutral-hovered, #0B120E24)` },
    "&:active": { background: `var(--ds-background-neutral-pressed, #080F214A)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-neutral-subtle, #00000000)`,
    },
    "&:disabled[disabled]": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:hover": { background: `var(--ds-background-neutral-subtle, #00000000)` },
    "&:disabled[disabled]:active": { background: `var(--ds-background-neutral-subtle, #00000000)` },
  },
  Uf = {
    background: `var(--ds-background-brand-bold, #1868DB)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-brand-bold-hovered, #1558BC)` },
    "&:active": { background: `var(--ds-background-brand-bold-pressed, #144794)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-brand-bold, #1868DB)`,
    },
  },
  Wf = {
    background: `transparent`,
    color: `var(--ds-link, #1868DB)`,
    "&:hover": { color: `var(--ds-link, #1868DB)`, textDecoration: `underline` },
    "&:active": { color: `var(--ds-link-pressed, #1558BC)`, textDecoration: `underline` },
  },
  Gf = {
    background: `transparent`,
    color: `var(--ds-text-subtle, #505258)`,
    "&:hover": { background: `var(--ds-background-neutral-subtle-hovered, #0515240F)` },
    "&:active": { background: `var(--ds-background-neutral-subtle-pressed, #0B120E24)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': { background: `transparent` },
  },
  Kf = {
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
  qf = {
    background: `var(--ds-background-warning-bold, #FBC828)`,
    color: `var(--ds-text-warning-inverse, #292A2E)`,
    "&:hover": { background: `var(--ds-background-warning-bold-hovered, #FCA700)` },
    "&:active": { background: `var(--ds-background-warning-bold-pressed, #F68909)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-warning-bold, #FBC828)`,
    },
  },
  Jf = {
    background: `var(--ds-background-danger-bold, #C9372C)`,
    color: `var(--ds-text-inverse, #FFFFFF)`,
    "&:hover": { background: `var(--ds-background-danger-bold-hovered, #AE2E24)` },
    "&:active": { background: `var(--ds-background-danger-bold-pressed, #872821)` },
    '&[data-has-overlay="true"]:not([disabled]):hover': {
      background: `var(--ds-background-danger-bold, #C9372C)`,
    },
  },
  Yf = {
    background: `var(--ds-background-selected, #E9F2FE)`,
    color: `var(--ds-text-selected, #1868DB)`,
    "&:not([disabled])::after": Nf(
      Nf({}, Vf),
      {},
      { content: `""`, borderColor: `var(--ds-border-selected, #1868DB)` },
    ),
  },
  Xf = { '&[data-has-overlay="true"]': { cursor: `default`, textDecoration: `none` } };
function Zf(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isSelected,
    i = e.shouldFitContainer,
    a = e.isOnlySingleIcon;
  return Nf(
    Nf(
      {
        alignItems: `baseline`,
        borderWidth: 0,
        borderRadius: L(`platform-dst-shape-theme-default`)
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
        height: If[n],
        lineHeight: Lf[n],
        padding: a ? zf[n] : Rf[n],
        verticalAlign: Bf[n],
        width: i ? `100%` : `auto`,
        justifyContent: `center`,
      },
      r
        ? Yf
        : Nf(
            Nf(
              Nf(
                Nf(
                  Nf(
                    Nf(
                      Nf(Nf({}, t === `default` && Hf), t === `primary` && Uf),
                      t === `link` && Wf,
                    ),
                    t === `subtle` && Gf,
                  ),
                  t === `subtle-link` && Kf,
                ),
                t === `warning` && qf,
              ),
              t === `danger` && Jf,
            ),
            {},
            {
              "&[disabled]": {
                color: `var(--ds-text-disabled, #080F214A)`,
                backgroundColor: Ff.includes(t)
                  ? `var(--ds-background-disabled, #17171708)`
                  : `transparent`,
                cursor: `not-allowed`,
                textDecoration: `none`,
                "&:hovered": {
                  backgroundColor: Ff.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
                "&:active": {
                  backgroundColor: Ff.includes(t)
                    ? `var(--ds-background-disabled, #17171708)`
                    : `transparent`,
                },
              },
            },
            Xf,
          ),
    ),
    {},
    { "&::-moz-focus-inner": { border: 0, margin: 0, padding: 0 } },
  );
}
function Qf(e) {
  var t = e.children,
    n = e.iconBefore,
    r = e.iconAfter;
  return Cf(t) ? !0 : t ? !1 : !!((n && !r) || (!n && r));
}
var $f = [
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
  ep = typeof navigator < `u` && navigator.userAgent.toLowerCase().indexOf(`firefox`) > -1,
  tp = B.memo(
    B.forwardRef(function (e, t) {
      var n = e.appearance,
        r = n === void 0 ? `default` : n,
        i = e.children,
        a = e.iconBefore,
        o = e.iconAfter,
        s = e.isSelected,
        c = s === void 0 ? !1 : s,
        u = e.onMouseDown,
        d = u === void 0 ? Mc : u,
        f = e.onMouseUp,
        p = f === void 0 ? Mc : f,
        h = e.shouldFitContainer,
        g = h === void 0 ? !1 : h,
        _ = e.spacing,
        v = _ === void 0 ? `default` : _,
        y = m(e, $f),
        b = Qf({ children: i, iconBefore: a, iconAfter: o }),
        x = l((0, B.useState)(!1), 2),
        S = x[0],
        C = x[1],
        w = (0, B.useCallback)(
          function (e) {
            (d(e), ep && C(!0));
          },
          [d, C],
        ),
        T = (0, B.useCallback)(
          function (e) {
            (p(e), ep && C(!1));
          },
          [p, C],
        ),
        E = (0, B.useMemo)(
          function () {
            return Zf({
              appearance: r,
              spacing: v,
              isSelected: c,
              shouldFitContainer: g,
              isOnlySingleIcon: b,
            });
          },
          [r, v, c, g, b],
        );
      return B.createElement(
        jf,
        P({}, y, {
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
          spacing: v,
        }),
      );
    }),
  );
tp.displayName = `Button`;
function np(e) {
  return B.createElement(tp, {
    "aria-label": e[`aria-label`],
    isDisabled: e.isDisabled,
    iconBefore: e.iconBefore,
    testId: e.testId,
    onClick: e.onClick,
    component: e.component,
    appearance: `subtle`,
  });
}
function rp(e) {
  return B.createElement(tp, P({}, e, { appearance: `subtle` }));
}
var ip = { container: `_1e0c1txw _kqswh2mm` };
function ap(e) {
  var t = e.key,
    n = e.testId,
    r = e.from,
    i = e.to;
  return B.createElement(
    lu,
    { as: `li`, testId: n, key: t, xcss: ip.container, paddingInline: `space.100` },
    B.createElement(
      zu,
      { testId: n && `${n}-text` },
      B.createElement(of, null, `Skipped pages from `, r, ` to `, i),
      `…`,
    ),
  );
}
var op = {},
  sp =
    Number.isNaN ||
    function (e) {
      return typeof e == `number` && e !== e;
    };
function cp(e, t) {
  return !!(e === t || (sp(e) && sp(t)));
}
function lp(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!cp(e[n], t[n])) return !1;
  return !0;
}
function up(e, t) {
  t === void 0 && (t = lp);
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
var dp = function (e, t, n, r) {
    var i = n.max,
      a = n.ellipsis,
      o = n.transform,
      s = e.length,
      c = s > i,
      l = c && i - 4 < t,
      u = c && t < s - i + 3,
      d = up(function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
          n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
        return e.slice(t, n).map(function (e, n) {
          return o(e, t + n, r);
        });
      });
    if (!c) return d(0, s);
    if (l && !u) {
      var f = i - 2;
      return [].concat(
        _(d(0, 1)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: s - f })],
        _(d(s - f)),
      );
    }
    if (!l && u) {
      var p = i - 2;
      return [].concat(
        _(d(0, p)),
        [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: p + 1, to: s - 1 })],
        _(d(s - 1)),
      );
    }
    var m = i - 4;
    return [].concat(
      _(d(0, 1)),
      [a({ key: `ellipsis-1`, testId: r && `${r}-ellipsis`, from: 2, to: t - Math.floor(m / 2) })],
      _(d(t - Math.floor(m / 2), t + m - 1)),
      [a({ key: `ellipsis-2`, testId: r && `${r}-ellipsis`, from: t + 3, to: s - 1 })],
      _(d(s - 1)),
    );
  },
  fp = e(Zl()),
  pp = e(Ql());
function mp(e, t) {
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
function hp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? mp(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var gp = {
    paginationMenu: `_1q51ze3t _y4tize3t _85i5ze3t _bozgze3t _1pfhze3t _12l2ze3t _6rthze3t _ahbqze3t`,
    paginationMenuItem: `_1pfhze3t _ect4ttxp`,
    navigatorIconWrapper: `_18zr12x7`,
  },
  _p = {
    componentName: `pagination`,
    packageName: `@atlaskit/pagination`,
    packageVersion: `16.2.11`,
  };
function vp(e) {
  var t = e.chevronDirection === `left` ? fp.default : pp.default;
  return B.createElement(
    lu,
    { as: `span`, xcss: gp.navigatorIconWrapper },
    B.createElement(t, { label: ``, color: `currentColor`, size: `small` }),
  );
}
function yp(e, t) {
  var n = e.components,
    r = n === void 0 ? op : n,
    i = e.defaultSelectedIndex,
    a = i === void 0 ? 0 : i,
    o = e.selectedIndex,
    s = e.label,
    c = s === void 0 ? `pagination` : s,
    u = e.pageLabel,
    d = u === void 0 ? `page` : u,
    f = e.previousLabel,
    p = f === void 0 ? `previous` : f,
    m = e.nextLabel,
    h = m === void 0 ? `next` : m,
    g = e.style,
    _ = g === void 0 ? op : g,
    v = e.max,
    y = v === void 0 ? 7 : v,
    b = e.onChange,
    x = b === void 0 ? Mc : b,
    S = e.pages,
    C = e.getPageLabel,
    w = e.renderEllipsis,
    T = w === void 0 ? ap : w,
    E = e.analyticsContext,
    D = e.testId,
    O = e.isDisabled,
    k = l(
      Bl(o, function () {
        return a || 0;
      }),
      2,
    ),
    A = k[0],
    j = k[1],
    M = Zc(
      hp(
        {
          fn: function (e, t) {
            var n = e.event,
              r = e.selectedPageIndex;
            (o === void 0 && j(r), x && x(n, S[r], t));
          },
          action: `changed`,
          actionSubject: `pageNumber`,
          analyticsData: E,
        },
        _p,
      ),
    );
  return B.createElement(
    lu,
    { testId: D, style: _, ref: t, "aria-label": c, as: `nav` },
    B.createElement(
      Ou,
      { space: `space.0`, alignBlock: `center` },
      B.createElement(np, {
        key: `left-navigator`,
        component: r.Previous,
        onClick: function (e) {
          return M({ event: e, selectedPageIndex: A - 1 });
        },
        isDisabled: O || A === 0,
        iconBefore: B.createElement(vp, { chevronDirection: `left` }),
        "aria-label": p,
        testId: D && `${D}--left-navigator`,
      }),
      B.createElement(
        Ou,
        { space: `space.0`, alignBlock: `baseline`, as: `ul`, xcss: gp.paginationMenu },
        dp(
          S,
          A,
          {
            max: y,
            ellipsis: T,
            transform: function (e, t, n) {
              var i = S[A],
                a = `${d} ${C ? C(e, t) : e}`,
                o = e === i;
              return B.createElement(
                Ou,
                { as: `li`, xcss: gp.paginationMenuItem, key: `page-${C ? C(e, t) : t}` },
                B.createElement(
                  rp,
                  {
                    component: r.Page,
                    onClick: function (e) {
                      return M({ event: e, selectedPageIndex: t });
                    },
                    "aria-current": o ? `page` : void 0,
                    "aria-label": a,
                    isSelected: o,
                    isDisabled: O,
                    page: e,
                    testId: n && `${n}--${o ? `current-` : ``}page-${t}`,
                  },
                  C ? C(e, t) : e,
                ),
              );
            },
          },
          D,
        ),
      ),
      B.createElement(np, {
        key: `right-navigator`,
        component: r.Next,
        onClick: function (e) {
          return M({ event: e, selectedPageIndex: A + 1 });
        },
        isDisabled: O || A === S.length - 1,
        iconBefore: B.createElement(vp, { chevronDirection: `right` }),
        "aria-label": h,
        testId: D && `${D}--right-navigator`,
      }),
    ),
  );
}
var bp = (0, B.memo)((0, B.forwardRef)(yp));
function xp(e, t, n) {
  return ((t = d(t)), f(e, Sp() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function Sp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Sp = function () {
    return !!e;
  })();
}
var Cp = (function (e) {
  function t() {
    var e;
    p(this, t);
    var n = [...arguments];
    return (
      (e = xp(this, t, [].concat(n))),
      h(e, `onChange`, function (t, n, r) {
        e.props.onChange(n, r);
      }),
      e
    );
  }
  return (
    S(t, e),
    y(t, [
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
            s = _(Array(t)).map(function (e, t) {
              return t + 1;
            }),
            c = r - 1;
          return B.createElement(bp, {
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
})(B.Component);
O();
var wp = [`isRanking`, `testId`],
  Tp = function (e) {
    var t = e.isRanking,
      n = e.testId,
      r = m(e, wp);
    return B.createElement(
      `thead`,
      P({ "data-testid": n }, r, { className: N([`_179rglyw`, t && `_1e0c1ule`]) }),
    );
  },
  Ep = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xl(), t(Yl)));
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
  Dp = i((e) => {
    (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.default = void 0));
    var n = i(o()),
      r = i((Xl(), t(Yl)));
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
function Op(e) {
  var t = e.onClose,
    n = e.isDisabled,
    r = (0, B.useRef)(!1),
    i = (0, B.useCallback)(
      function (e) {
        n || r.current || e.key !== `Escape` || ((r.current = !0), t(e));
      },
      [t, n],
    ),
    a = (0, B.useCallback)(function () {
      r.current = !1;
    }, []);
  (0, B.useEffect)(
    function () {
      if (!n)
        return (0, vd.bindAll)(
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
function kp(e) {
  var t = (0, B.useRef)(e);
  return (
    (0, B.useEffect)(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
var Ap = (0, B.createContext)(null),
  jp = (0, B.createContext)(null);
function Mp() {
  return (0, B.useContext)(jp);
}
function Np(e) {
  var t = e.isOpen,
    n = e.type,
    r = e.onClose,
    i = (0, B.useContext)(Ap),
    a = Mp();
  (0, B.useEffect)(
    function () {
      if (i !== null && t) return i.onClose(r, { namespace: a, type: n });
    },
    [i, t, a, r, n],
  );
}
var Pp = { none: 0, small: 100, medium: 350, large: 700 },
  Fp = 0.5,
  Ip = { none: Pp.none, small: Pp.small * Fp, medium: Pp.medium * Fp, large: Pp.large * Fp },
  Lp = function () {
    return typeof window < `u` && `matchMedia` in window;
  },
  Rp = function () {
    return Lp() ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches : !1;
  },
  zp = function (e) {
    switch (e.cleanup) {
      case `next-effect`:
        return;
      default:
        return [];
    }
  },
  Bp = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { cleanup: `unmount` },
      t = (0, B.useRef)([]);
    return (
      (0, B.useEffect)(function () {
        return function () {
          t.current.length &&
            (t.current.forEach(function (e) {
              return clearTimeout(e);
            }),
            (t.current = []));
        };
      }, zp(e)),
      (0, B.useCallback)(function (e, n) {
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
  Vp = { appear: !0, isExiting: !1 },
  Hp = (0, B.createContext)(Vp),
  Up = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vp;
    return B.createElement(Hp.Provider, { key: `${e.key}-provider`, value: t }, e);
  },
  Wp = function (e) {
    var t = [];
    return (
      B.Children.toArray(e).forEach(function (e) {
        typeof e != `boolean` && e && t.push(e);
      }),
      t
    );
  },
  Gp = function (e, t) {
    for (var n = t.concat([]), r = Kp(t), i = 0; i < e.length; i++) {
      var a = e[i];
      r[a.key] || n.splice(i + 1, 0, a);
    }
    return n;
  },
  Kp = function (e) {
    return e.reduce(function (e, t) {
      return ((e[t.key] = t), e);
    }, {});
  },
  qp = function (e, t) {
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
  Jp = (0, B.memo)(function (e) {
    var t = e.appear,
      n = t === void 0 ? !1 : t,
      r = e.children,
      i = e.exitThenEnter,
      a = l((0, B.useState)([null, r]), 2),
      o = a[0],
      s = a[1],
      c = l((0, B.useState)([]), 2),
      u = c[0],
      d = c[1],
      f = l(
        (0, B.useState)(function () {
          return { appear: n, isExiting: !1 };
        }),
        2,
      ),
      p = f[0],
      m = f[1];
    if (
      ((0, B.useEffect)(function () {
        p.appear || m({ appear: !0, isExiting: !1 });
      }, []),
      typeof o == `boolean`)
    )
      return r;
    var h = l(o, 2),
      g = h[0],
      _ = h[1],
      v = Wp(g),
      y = Wp(_);
    _ !== r && s([_, r]);
    var b = qp(y, v),
      x = !!b.size,
      S = y;
    if ((x && (S = Gp(y, v)), i))
      if (u.length) S = L(`platform-dst-motion-uplift`) ? v : u;
      else {
        var C = S.filter(function (e) {
          return b.has(e.key);
        });
        C.length && d(C);
      }
    return (
      (S = b.size
        ? S.map(function (e) {
            var t = b.has(e.key);
            return Up(e, {
              appear: !0,
              isExiting: t,
              onFinish: t
                ? function () {
                    (b.delete(e.key), b.size === 0 && (s([null, r]), d([])));
                  }
                : void 0,
            });
          })
        : S.map(function (e) {
            return Up(e, p);
          })),
      S
    );
  }),
  Yp = function () {
    return (0, B.useContext)(Hp);
  };
Jp.displayName = `ExitingPersistence`;
function Xp() {
  var e = (0, B.useRef)(``);
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
var Zp = (0, B.createContext)(function () {
    return { isReady: !0, delay: 0, ref: Mc };
  }),
  Qp = function () {
    var e = Xp();
    return (0, B.useContext)(Zp)(e);
  };
O();
var $p = function (e) {
    var t = e.children,
      n = e.animationTimingFunction,
      r = e.animationTimingFunctionExiting,
      i = r === void 0 ? n : r,
      a = e.enteringAnimation,
      o = e.exitingAnimation,
      s = o === void 0 ? a : o,
      c = e.isPaused,
      u = e.onFinish,
      d = e.duration,
      f = d === void 0 ? `large` : d,
      p = Qp(),
      m = Yp(),
      h = m.isExiting,
      g = m.onFinish,
      _ = m.appear,
      v = Bp(),
      y = c || !p.isReady,
      b = h ? 0 : p.delay,
      x = h ? `exiting` : `entering`,
      S = l((0, B.useState)(_), 2),
      C = S[0],
      w = S[1];
    return (
      (0, B.useEffect)(
        function () {
          var e = !1;
          if (!y) {
            if (!_) {
              u && u(x);
              return;
            }
            var t = function () {
              (x === `exiting` && g?.(), e || w(!1), u?.(x));
            };
            if (Rp()) {
              t();
              return;
            }
            return (
              w(!0),
              v(t, h ? Ip[f] : Pp[f] + b),
              function () {
                e = !0;
              }
            );
          }
        },
        [g, x, h, f, b, y, v],
      ),
      t(
        {
          ref: p.ref,
          className: C
            ? N([
                N([`_1o51eoah _1y0co91m _1bumglyw _sedtglyw`]),
                y && N([`_1y0ctrqk`]),
                f === `small` && N([`_5sag1yx9`]),
                f === `medium` && N([`_5sag1ttt`]),
                f === `large` && N([`_5sagpwmj`]),
                h && f === `small` && N([`_5sag14ed`]),
                h && f === `medium` && N([`_5sagluct`]),
                h && f === `large` && N([`_5sag1ttt`]),
                h && N([`_ju255cps _1o51q7pw`]),
                !h && n === `linear` && N([`_1pglp3kn`]),
                !h && n === `ease-out` && N([`_1pgldkwg`]),
                !h && n === `ease-in` && N([`_1pgl1nzg`]),
                !h && n === `ease-in-40-out` && N([`_1pgl5y64`]),
                !h && n === `ease-in-60-out` && N([`_1pgl1ddy`]),
                !h && n === `ease-in-80-out` && N([`_1pglannl`]),
                !h && n === `ease-in-out` && N([`_1pgl1fu8`]),
                h && n === `linear` && N([`_1pglp3kn`]),
                h && i === `ease-out` && N([`_1pgldkwg`]),
                h && i === `ease-in` && N([`_1pgl1nzg`]),
                h && i === `ease-in-40-out` && N([`_1pgl5y64`]),
                h && i === `ease-in-60-out` && N([`_1pgl1ddy`]),
                h && i === `ease-in-80-out` && N([`_1pglannl`]),
                h && i === `ease-in-out` && N([`_1pgl1fu8`]),
                ((!h && a === `fade-in`) || (h && s === `fade-in`)) && N([`_j7hq1cgr`]),
                ((!h && a === `fade-out`) || (h && s === `fade-out`)) && N([`_j7hq1lln`]),
                ((!h && a === `zoom-in`) || (h && s === `zoom-in`)) && N([`_j7hqe8p0`]),
                ((!h && a === `zoom-out`) || (h && s === `zoom-out`)) && N([`_j7hqy6ql`]),
                ((!h && a === `slide-in-from-top`) || (h && s === `slide-in-from-top`)) &&
                  N([`_j7hqqshu`]),
                ((!h && a === `slide-out-from-top`) || (h && s === `slide-out-from-top`)) &&
                  N([`_j7hq7ri4`]),
                ((!h && a === `slide-in-from-right`) || (h && s === `slide-in-from-right`)) &&
                  N([`_j7hqdfjr`]),
                ((!h && a === `slide-out-from-right`) || (h && s === `slide-out-from-right`)) &&
                  N([`_j7hqonfj`]),
                ((!h && a === `slide-in-from-bottom`) || (h && s === `slide-in-from-bottom`)) &&
                  N([`_j7hq1liq`]),
                ((!h && a === `slide-out-from-bottom`) || (h && s === `slide-out-from-bottom`)) &&
                  N([`_j7hqhnf1`]),
                ((!h && a === `slide-in-from-left`) || (h && s === `slide-in-from-left`)) &&
                  N([`_j7hq1bh1`]),
                ((!h && a === `slide-out-from-left`) || (h && s === `slide-out-from-left`)) &&
                  N([`_j7hqj08w`]),
                ((!h && a === `fade-in-from-top`) || (h && s === `fade-in-from-top`)) &&
                  N([`_j7hq2iua`]),
                ((!h && a === `fade-out-from-top`) || (h && s === `fade-out-from-top`)) &&
                  N([`_j7hq39va`]),
                ((!h && a === `fade-in-from-left`) || (h && s === `fade-in-from-left`)) &&
                  N([`_j7hq15m2`]),
                ((!h && a === `fade-out-from-left`) || (h && s === `fade-out-from-left`)) &&
                  N([`_j7hq1yiv`]),
                ((!h && a === `fade-in-from-bottom`) || (h && s === `fade-in-from-bottom`)) &&
                  N([`_j7hq1w00`]),
                ((!h && a === `fade-out-from-bottom`) || (h && s === `fade-out-from-bottom`)) &&
                  N([`_j7hqzy3z`]),
                ((!h && a === `fade-in-from-right`) || (h && s === `fade-in-from-right`)) &&
                  N([`_j7hqpqak`]),
                ((!h && a === `fade-out-from-right`) || (h && s === `fade-out-from-right`)) &&
                  N([`_j7hq1ebg`]),
                ((!h && a === `fade-in-from-top-constant`) ||
                  (h && s === `fade-in-from-top-constant`)) &&
                  N([`_j7hqm2e2`]),
                ((!h && a === `fade-out-from-top-constant`) ||
                  (h && s === `fade-out-from-top-constant`)) &&
                  N([`_j7hq97jn`]),
                ((!h && a === `fade-in-from-left-constant`) ||
                  (h && s === `fade-in-from-left-constant`)) &&
                  N([`_j7hqovgq`]),
                ((!h && a === `fade-out-from-left-constant`) ||
                  (h && s === `fade-out-from-left-constant`)) &&
                  N([`_j7hq15do`]),
                ((!h && a === `fade-in-from-bottom-constant`) ||
                  (h && s === `fade-in-from-bottom-constant`)) &&
                  N([`_j7hq797a`]),
                ((!h && a === `fade-out-from-bottom-constant`) ||
                  (h && s === `fade-out-from-bottom-constant`)) &&
                  N([`_j7hqwo7r`]),
                ((!h && a === `fade-in-from-right-constant`) ||
                  (h && s === `fade-in-from-right-constant`)) &&
                  N([`_j7hqt8u5`]),
                ((!h && a === `fade-out-from-right-constant`) ||
                  (h && s === `fade-out-from-right-constant`)) &&
                  N([`_j7hq1pgp`]),
              ])
            : ``,
          style: { animationDelay: `${b}ms` },
        },
        x,
      )
    );
  },
  em = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  tm = function (e) {
    var t = e.children,
      n = e.duration,
      r = n === void 0 ? `large` : n,
      i = e.entranceDirection,
      a = e.exitDirection,
      o = e.distance,
      s = o === void 0 ? `proportional` : o,
      c = e.onFinish,
      l = e.isPaused,
      u = i === void 0 ? void 0 : em[i],
      d = a || u ? `fade-out-from-${a || u}${s === `proportional` ? `` : `-constant`}` : `fade-out`;
    return B.createElement(
      $p,
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
  nm = B.createContext();
B.createContext();
var rm = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  im = function (e) {
    if (typeof e == `function`) {
      var t = [...arguments].slice(1);
      return e.apply(void 0, t);
    }
  },
  am = function (e, t) {
    if (typeof e == `function`) return im(e, t);
    e != null && (e.current = t);
  },
  om = function (e) {
    return e.reduce(function (e, t) {
      var n = t[0];
      return ((e[n] = t[1]), e);
    }, {});
  },
  sm =
    typeof window < `u` && window.document && window.document.createElement
      ? B.useLayoutEffect
      : B.useEffect,
  cm = `bottom`,
  lm = `right`,
  um = `left`,
  dm = `auto`,
  fm = [`top`, cm, lm, um],
  pm = `start`,
  mm = `clippingParents`,
  hm = `viewport`,
  gm = `popper`,
  _m = `reference`,
  vm = fm.reduce(function (e, t) {
    return e.concat([t + `-` + pm, t + `-end`]);
  }, []),
  ym = [].concat(fm, [dm]).reduce(function (e, t) {
    return e.concat([t, t + `-` + pm, t + `-end`]);
  }, []),
  bm = [
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
function xm(e) {
  return e ? (e.nodeName || ``).toLowerCase() : null;
}
function Sm(e) {
  if (e == null) return window;
  if (e.toString() !== `[object Window]`) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Cm(e) {
  return e instanceof Sm(e).Element || e instanceof Element;
}
function wm(e) {
  return e instanceof Sm(e).HTMLElement || e instanceof HTMLElement;
}
function Tm(e) {
  return typeof ShadowRoot > `u` ? !1 : e instanceof Sm(e).ShadowRoot || e instanceof ShadowRoot;
}
function Em(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (e) {
    var n = t.styles[e] || {},
      r = t.attributes[e] || {},
      i = t.elements[e];
    !wm(i) ||
      !xm(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? `` : t);
      }));
  });
}
function Dm(e) {
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
        !wm(r) ||
          !xm(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (e) {
            r.removeAttribute(e);
          }));
      });
    }
  );
}
var Om = {
  name: `applyStyles`,
  enabled: !0,
  phase: `write`,
  fn: Em,
  effect: Dm,
  requires: [`computeStyles`],
};
function km(e) {
  return e.split(`-`)[0];
}
var Am = Math.max,
  jm = Math.min,
  Mm = Math.round;
function Nm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + `/` + e.version;
        })
        .join(` `)
    : navigator.userAgent;
}
function Pm() {
  return !/^((?!chrome|android).)*safari/i.test(Nm());
}
function Fm(e, t, n) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  var r = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    wm(e) &&
    ((i = (e.offsetWidth > 0 && Mm(r.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Mm(r.height) / e.offsetHeight) || 1));
  var o = (Cm(e) ? Sm(e) : window).visualViewport,
    s = !Pm() && n,
    c = (r.left + (s && o ? o.offsetLeft : 0)) / i,
    l = (r.top + (s && o ? o.offsetTop : 0)) / a,
    u = r.width / i,
    d = r.height / a;
  return { width: u, height: d, top: l, right: c + u, bottom: l + d, left: c, x: c, y: l };
}
function Im(e) {
  var t = Fm(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Lm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Tm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Rm(e) {
  return Sm(e).getComputedStyle(e);
}
function zm(e) {
  return [`table`, `td`, `th`].indexOf(xm(e)) >= 0;
}
function Bm(e) {
  return ((Cm(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Vm(e) {
  return xm(e) === `html` ? e : e.assignedSlot || e.parentNode || (Tm(e) ? e.host : null) || Bm(e);
}
function Hm(e) {
  return !wm(e) || Rm(e).position === `fixed` ? null : e.offsetParent;
}
function Um(e) {
  var t = /firefox/i.test(Nm());
  if (/Trident/i.test(Nm()) && wm(e) && Rm(e).position === `fixed`) return null;
  var n = Vm(e);
  for (Tm(n) && (n = n.host); wm(n) && [`html`, `body`].indexOf(xm(n)) < 0; ) {
    var r = Rm(n);
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
function Wm(e) {
  for (var t = Sm(e), n = Hm(e); n && zm(n) && Rm(n).position === `static`; ) n = Hm(n);
  return n && (xm(n) === `html` || (xm(n) === `body` && Rm(n).position === `static`))
    ? t
    : n || Um(e) || t;
}
function Gm(e) {
  return [`top`, `bottom`].indexOf(e) >= 0 ? `x` : `y`;
}
function Km(e, t, n) {
  return Am(e, jm(t, n));
}
function qm(e, t, n) {
  var r = Km(e, t, n);
  return r > n ? n : r;
}
function Jm() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ym(e) {
  return Object.assign({}, Jm(), e);
}
function Xm(e, t) {
  return t.reduce(function (t, n) {
    return ((t[n] = e), t);
  }, {});
}
var Zm = function (e, t) {
  return (
    (e = typeof e == `function` ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    Ym(typeof e == `number` ? Xm(e, fm) : e)
  );
};
function Qm(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    a = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    s = km(n.placement),
    c = Gm(s),
    l = [`left`, `right`].indexOf(s) >= 0 ? `height` : `width`;
  if (!(!a || !o)) {
    var u = Zm(i.padding, n),
      d = Im(a),
      f = c === `y` ? `top` : um,
      p = c === `y` ? cm : lm,
      m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l],
      h = o[c] - n.rects.reference[c],
      g = Wm(a),
      _ = g ? (c === `y` ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = m / 2 - h / 2,
      y = u[f],
      b = _ - d[l] - u[p],
      x = _ / 2 - d[l] / 2 + v,
      S = Km(y, x, b),
      C = c;
    n.modifiersData[r] = ((t = {}), (t[C] = S), (t.centerOffset = S - x), t);
  }
}
function $m(e) {
  var t = e.state,
    n = e.options.element,
    r = n === void 0 ? `[data-popper-arrow]` : n;
  r != null &&
    ((typeof r == `string` && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (Lm(t.elements.popper, r) && (t.elements.arrow = r)));
}
var eh = {
  name: `arrow`,
  enabled: !0,
  phase: `main`,
  fn: Qm,
  effect: $m,
  requires: [`popperOffsets`],
  requiresIfExists: [`preventOverflow`],
};
function th(e) {
  return e.split(`-`)[1];
}
var nh = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function rh(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Mm(n * i) / i || 0, y: Mm(r * i) / i || 0 };
}
function ih(e) {
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
    y = um,
    b = `top`,
    x = window;
  if (l) {
    var S = Wm(n),
      C = `clientHeight`,
      w = `clientWidth`;
    if (
      (S === Sm(n) &&
        ((S = Bm(n)),
        Rm(S).position !== `static` &&
          s === `absolute` &&
          ((C = `scrollHeight`), (w = `scrollWidth`))),
      (S = S),
      i === `top` || ((i === `left` || i === `right`) && a === `end`))
    ) {
      b = cm;
      var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
      ((h -= T - r.height), (h *= c ? 1 : -1));
    }
    if (i === `left` || ((i === `top` || i === `bottom`) && a === `end`)) {
      y = lm;
      var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
      ((p -= E - r.width), (p *= c ? 1 : -1));
    }
  }
  var D = Object.assign({ position: s }, l && nh),
    O = u === !0 ? rh({ x: p, y: h }, Sm(n)) : { x: p, y: h };
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
function ah(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    a = n.adaptive,
    o = a === void 0 ? !0 : a,
    s = n.roundOffsets,
    c = s === void 0 ? !0 : s,
    l = {
      placement: km(t.placement),
      variation: th(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === `fixed`,
    };
  (t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ih(
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
        ih(
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
var oh = { name: `computeStyles`, enabled: !0, phase: `beforeWrite`, fn: ah, data: {} },
  sh = { passive: !0 };
function ch(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    a = i === void 0 ? !0 : i,
    o = r.resize,
    s = o === void 0 ? !0 : o,
    c = Sm(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (e) {
        e.addEventListener(`scroll`, n.update, sh);
      }),
    s && c.addEventListener(`resize`, n.update, sh),
    function () {
      (a &&
        l.forEach(function (e) {
          e.removeEventListener(`scroll`, n.update, sh);
        }),
        s && c.removeEventListener(`resize`, n.update, sh));
    }
  );
}
var lh = {
    name: `eventListeners`,
    enabled: !0,
    phase: `write`,
    fn: function () {},
    effect: ch,
    data: {},
  },
  uh = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function dh(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return uh[e];
  });
}
var fh = { start: `end`, end: `start` };
function ph(e) {
  return e.replace(/start|end/g, function (e) {
    return fh[e];
  });
}
function mh(e) {
  var t = Sm(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function hh(e) {
  return Fm(Bm(e)).left + mh(e).scrollLeft;
}
function gh(e, t) {
  var n = Sm(e),
    r = Bm(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    var l = Pm();
    (l || (!l && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: a, height: o, x: s + hh(e), y: c };
}
function _h(e) {
  var t = Bm(e),
    n = mh(e),
    r = e.ownerDocument?.body,
    i = Am(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    a = Am(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
    o = -n.scrollLeft + hh(e),
    s = -n.scrollTop;
  return (
    Rm(r || t).direction === `rtl` && (o += Am(t.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: a, x: o, y: s }
  );
}
function vh(e) {
  var t = Rm(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function yh(e) {
  return [`html`, `body`, `#document`].indexOf(xm(e)) >= 0
    ? e.ownerDocument.body
    : wm(e) && vh(e)
      ? e
      : yh(Vm(e));
}
function bh(e, t) {
  t === void 0 && (t = []);
  var n = yh(e),
    r = n === e.ownerDocument?.body,
    i = Sm(n),
    a = r ? [i].concat(i.visualViewport || [], vh(n) ? n : []) : n,
    o = t.concat(a);
  return r ? o : o.concat(bh(Vm(a)));
}
function xh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Sh(e, t) {
  var n = Fm(e, !1, t === `fixed`);
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
function Ch(e, t, n) {
  return t === `viewport` ? xh(gh(e, n)) : Cm(t) ? Sh(t, n) : xh(_h(Bm(e)));
}
function wh(e) {
  var t = bh(Vm(e)),
    n = [`absolute`, `fixed`].indexOf(Rm(e).position) >= 0 && wm(e) ? Wm(e) : e;
  return Cm(n)
    ? t.filter(function (e) {
        return Cm(e) && Lm(e, n) && xm(e) !== `body`;
      })
    : [];
}
function Th(e, t, n, r) {
  var i = t === `clippingParents` ? wh(e) : [].concat(t),
    a = [].concat(i, [n]),
    o = a[0],
    s = a.reduce(
      function (t, n) {
        var i = Ch(e, n, r);
        return (
          (t.top = Am(i.top, t.top)),
          (t.right = jm(i.right, t.right)),
          (t.bottom = jm(i.bottom, t.bottom)),
          (t.left = Am(i.left, t.left)),
          t
        );
      },
      Ch(e, o, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Eh(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? km(r) : null,
    a = r ? th(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    c;
  switch (i) {
    case `top`:
      c = { x: o, y: t.y - n.height };
      break;
    case cm:
      c = { x: o, y: t.y + t.height };
      break;
    case lm:
      c = { x: t.x + t.width, y: s };
      break;
    case um:
      c = { x: t.x - n.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = i ? Gm(i) : null;
  if (l != null) {
    var u = l === `y` ? `height` : `width`;
    switch (a) {
      case pm:
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
function Dh(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    a = n.strategy,
    o = a === void 0 ? e.strategy : a,
    s = n.boundary,
    c = s === void 0 ? mm : s,
    l = n.rootBoundary,
    u = l === void 0 ? hm : l,
    d = n.elementContext,
    f = d === void 0 ? gm : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    h = n.padding,
    g = h === void 0 ? 0 : h,
    _ = Ym(typeof g == `number` ? Xm(g, fm) : g),
    v = f === `popper` ? _m : gm,
    y = e.rects.popper,
    b = e.elements[m ? v : f],
    x = Th(Cm(b) ? b : b.contextElement || Bm(e.elements.popper), c, u, o),
    S = Fm(e.elements.reference),
    C = Eh({ reference: S, element: y, strategy: `absolute`, placement: i }),
    w = xh(Object.assign({}, y, C)),
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
function Oh(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    a = n.rootBoundary,
    o = n.padding,
    s = n.flipVariations,
    c = n.allowedAutoPlacements,
    l = c === void 0 ? ym : c,
    u = th(r),
    d = u
      ? s
        ? vm
        : vm.filter(function (e) {
            return th(e) === u;
          })
      : fm,
    f = d.filter(function (e) {
      return l.indexOf(e) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (t, n) {
    return ((t[n] = Dh(e, { placement: n, boundary: i, rootBoundary: a, padding: o })[km(n)]), t);
  }, {});
  return Object.keys(p).sort(function (e, t) {
    return p[e] - p[t];
  });
}
function kh(e) {
  if (km(e) === `auto`) return [];
  var t = dh(e);
  return [ph(e), t, ph(t)];
}
function Ah(e) {
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
        _ = km(g) === g,
        v = c || (_ || !m ? [dh(g)] : kh(g)),
        y = [g].concat(v).reduce(function (e, n) {
          return e.concat(
            km(n) === `auto`
              ? Oh(t, {
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
        D = km(E),
        O = th(E) === pm,
        k = [`top`, cm].indexOf(D) >= 0,
        A = k ? `width` : `height`,
        j = Dh(t, { placement: E, boundary: u, rootBoundary: d, altBoundary: f, padding: l }),
        M = k ? (O ? lm : um) : O ? cm : `top`;
      b[A] > x[A] && (M = dh(M));
      var N = dh(M),
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
          ne = function (e) {
            var t = y.find(function (t) {
              var n = S.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return ((w = t), `break`);
          },
          re = te;
        re > 0 && ne(re) !== `break`;
        re--
      );
    t.placement !== w && ((t.modifiersData[r]._skip = !0), (t.placement = w), (t.reset = !0));
  }
}
var jh = {
  name: `flip`,
  enabled: !0,
  phase: `main`,
  fn: Ah,
  requiresIfExists: [`offset`],
  data: { _skip: !1 },
};
function Mh(e, t, n) {
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
function Nh(e) {
  return [`top`, lm, cm, um].some(function (t) {
    return e[t] >= 0;
  });
}
function Ph(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    o = Dh(t, { elementContext: `reference` }),
    s = Dh(t, { altBoundary: !0 }),
    c = Mh(o, r),
    l = Mh(s, i, a),
    u = Nh(c),
    d = Nh(l);
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
var Fh = {
  name: `hide`,
  enabled: !0,
  phase: `main`,
  requiresIfExists: [`preventOverflow`],
  fn: Ph,
};
function Ih(e, t, n) {
  var r = km(e),
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
function Lh(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    a = i === void 0 ? [0, 0] : i,
    o = ym.reduce(function (e, n) {
      return ((e[n] = Ih(n, t.rects, a)), e);
    }, {}),
    s = o[t.placement],
    c = s.x,
    l = s.y;
  (t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[r] = o));
}
var Rh = { name: `offset`, enabled: !0, phase: `main`, requires: [`popperOffsets`], fn: Lh };
function zh(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Eh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: `absolute`,
    placement: t.placement,
  });
}
var Bh = { name: `popperOffsets`, enabled: !0, phase: `read`, fn: zh, data: {} };
function Vh(e) {
  return e === `x` ? `y` : `x`;
}
function Hh(e) {
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
    g = Dh(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
    _ = km(t.placement),
    v = th(t.placement),
    y = !v,
    b = Gm(_),
    x = Vh(b),
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
      var k = b === `y` ? `top` : um,
        A = b === `y` ? cm : lm,
        j = b === `y` ? `height` : `width`,
        M = S[b],
        N = M + g[k],
        ee = M - g[A],
        te = p ? -w[j] / 2 : 0,
        ne = v === `start` ? C[j] : w[j],
        re = v === `start` ? -w[j] : -C[j],
        ie = t.elements.arrow,
        ae = p && ie ? Im(ie) : { width: 0, height: 0 },
        oe = t.modifiersData[`arrow#persistent`]
          ? t.modifiersData[`arrow#persistent`].padding
          : Jm(),
        se = oe[k],
        P = oe[A],
        F = Km(0, C[j], ae[j]),
        ce = y ? C[j] / 2 - te - F - se - E.mainAxis : ne - F - se - E.mainAxis,
        I = y ? -C[j] / 2 + te + F + P + E.mainAxis : re + F + P + E.mainAxis,
        le = t.elements.arrow && Wm(t.elements.arrow),
        ue = le ? (b === `y` ? le.clientTop || 0 : le.clientLeft || 0) : 0,
        de = D?.[b] ?? 0,
        L = M + ce - de - ue,
        fe = M + I - de,
        pe = Km(p ? jm(N, L) : N, M, p ? Am(ee, fe) : ee);
      ((S[b] = pe), (O[b] = pe - M));
    }
    if (s) {
      var me = b === `x` ? `top` : um,
        he = b === `x` ? cm : lm,
        R = S[x],
        ge = x === `y` ? `height` : `width`,
        _e = R + g[me],
        ve = R - g[he],
        ye = [`top`, um].indexOf(_) !== -1,
        z = D?.[x] ?? 0,
        be = ye ? _e : R - C[ge] - w[ge] - z + E.altAxis,
        xe = ye ? R + C[ge] + w[ge] - z - E.altAxis : ve,
        B = p && ye ? qm(be, R, xe) : Km(p ? be : _e, R, p ? xe : ve);
      ((S[x] = B), (O[x] = B - R));
    }
    t.modifiersData[r] = O;
  }
}
var Uh = {
  name: `preventOverflow`,
  enabled: !0,
  phase: `main`,
  fn: Hh,
  requiresIfExists: [`offset`],
};
function Wh(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Gh(e) {
  return e === Sm(e) || !wm(e) ? mh(e) : Wh(e);
}
function Kh(e) {
  var t = e.getBoundingClientRect(),
    n = Mm(t.width) / e.offsetWidth || 1,
    r = Mm(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function qh(e, t, n) {
  n === void 0 && (n = !1);
  var r = wm(t),
    i = wm(t) && Kh(t),
    a = Bm(t),
    o = Fm(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((xm(t) !== `body` || vh(a)) && (s = Gh(t)),
      wm(t) ? ((c = Fm(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = hh(a))),
    {
      x: o.left + s.scrollLeft - c.x,
      y: o.top + s.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Jh(e) {
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
function Yh(e) {
  var t = Jh(e);
  return bm.reduce(function (e, n) {
    return e.concat(
      t.filter(function (e) {
        return e.phase === n;
      }),
    );
  }, []);
}
function Xh(e) {
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
function Zh(e) {
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
var Qh = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function $h() {
  return ![...arguments].some(function (e) {
    return !(e && typeof e.getBoundingClientRect == `function`);
  });
}
function eg(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    a = i === void 0 ? Qh : i;
  return function (e, t, n) {
    n === void 0 && (n = a);
    var i = {
        placement: `bottom`,
        orderedModifiers: [],
        options: Object.assign({}, Qh, a),
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
              reference: Cm(e) ? bh(e) : e.contextElement ? bh(e.contextElement) : [],
              popper: bh(t),
            }));
          var s = Yh(Zh([].concat(r, i.options.modifiers)));
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
            if ($h(t, n)) {
              ((i.rects = {
                reference: qh(t, Wm(n), i.options.strategy === `fixed`),
                popper: Im(n),
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
        update: Xh(function () {
          return new Promise(function (e) {
            (c.forceUpdate(), e(i));
          });
        }),
        destroy: function () {
          (u(), (s = !0));
        },
      };
    if (!$h(e, t)) return c;
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
var tg = eg({ defaultModifiers: [lh, Bh, oh, Om, Rh, jh, Uh, eh, Fh] }),
  ng = e(
    i((e, t) => {
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
    })(),
  ),
  rg = [],
  ig = function (e, t, n) {
    n === void 0 && (n = {});
    var r = B.useRef(null),
      i = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || `bottom`,
        strategy: n.strategy || `absolute`,
        modifiers: n.modifiers || rg,
      },
      a = B.useState({
        styles: {
          popper: { position: i.strategy, left: `0`, top: `0` },
          arrow: { position: `absolute` },
        },
        attributes: {},
      }),
      o = a[0],
      s = a[1],
      c = B.useMemo(function () {
        return {
          name: `updateState`,
          enabled: !0,
          phase: `write`,
          fn: function (e) {
            var t = e.state,
              n = Object.keys(t.elements);
            Fs.flushSync(function () {
              s({
                styles: om(
                  n.map(function (e) {
                    return [e, t.styles[e] || {}];
                  }),
                ),
                attributes: om(
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
      l = B.useMemo(
        function () {
          var e = {
            onFirstUpdate: i.onFirstUpdate,
            placement: i.placement,
            strategy: i.strategy,
            modifiers: [].concat(i.modifiers, [c, { name: `applyStyles`, enabled: !1 }]),
          };
          return (0, ng.default)(r.current, e) ? r.current || e : ((r.current = e), e);
        },
        [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c],
      ),
      u = B.useRef();
    return (
      sm(
        function () {
          u.current && u.current.setOptions(l);
        },
        [l],
      ),
      sm(
        function () {
          if (!(e == null || t == null)) {
            var r = (n.createPopper || tg)(e, t, l);
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
  ag = function () {},
  og = function () {
    return Promise.resolve(null);
  },
  sg = [];
function cg(e) {
  var t = e.placement,
    n = t === void 0 ? `bottom` : t,
    r = e.strategy,
    i = r === void 0 ? `absolute` : r,
    a = e.modifiers,
    o = a === void 0 ? sg : a,
    s = e.referenceElement,
    c = e.onFirstUpdate,
    l = e.innerRef,
    u = e.children,
    d = B.useContext(nm),
    f = B.useState(null),
    p = f[0],
    m = f[1],
    h = B.useState(null),
    g = h[0],
    _ = h[1];
  B.useEffect(
    function () {
      am(l, p);
    },
    [l, p],
  );
  var v = B.useMemo(
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
    y = ig(s || d, p, v),
    b = y.state,
    x = y.styles,
    S = y.forceUpdate,
    C = y.update,
    w = B.useMemo(
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
          forceUpdate: S || ag,
          update: C || og,
        };
      },
      [m, _, n, b, x, C, S],
    );
  return rm(u)(w);
}
function lg(e) {
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
            u = c === void 0 ? { x: 0, y: 0 } : c,
            d = l(a.placement.split(`-`), 1)[0],
            f = ((i = a.modifiersData) == null || (i = i.offset) == null
              ? void 0
              : i[a.placement]) ?? { x: 0, y: 0 },
            p = s.width - 2 * t,
            m = s.height - 2 * t;
          (d === `top` && (m = a.rects.reference.y + f.y - t),
            d === `bottom` && (m = s.height - u.y - t),
            d === `left` && (p = a.rects.reference.x + f.x - t),
            d === `right` && (p = s.width - u.x - t),
            (a.styles.popper.maxWidth = `${p}px`),
            (a.styles.popper.maxHeight = `${m}px`));
        }
      },
    },
  ];
}
var ug = 5,
  dg = [
    {
      name: `flip`,
      options: {
        flipVariations: !1,
        padding: ug,
        boundary: `clippingParents`,
        rootBoundary: `viewport`,
      },
    },
  ];
function fg() {
  return null;
}
var pg = [0, 8];
function mg(e) {
  var t = e.children,
    n = t === void 0 ? fg : t,
    r = e.offset,
    i = r === void 0 ? pg : r,
    a = e.placement,
    o = a === void 0 ? `bottom-start` : a,
    s = e.referenceElement,
    c = s === void 0 ? void 0 : s,
    u = e.modifiers,
    d = e.strategy,
    f = d === void 0 ? `fixed` : d,
    p = e.shouldFitViewport,
    m = p === void 0 ? !1 : p,
    h = l(i, 2),
    g = h[0],
    v = h[1],
    y = (0, B.useMemo)(
      function () {
        var e = {
            name: `preventOverflow`,
            options: { padding: ug, rootBoundary: m ? `viewport` : `document` },
          },
          t = { name: `offset`, options: { offset: [g, v] } },
          n = m ? lg({ viewportPadding: ug }) : [];
        return [].concat(dg, [e, t], _(n));
      },
      [g, v, m],
    ),
    b = (0, B.useMemo)(
      function () {
        return u == null ? y : [].concat(_(y), _(u));
      },
      [y, u],
    );
  return B.createElement(cg, { modifiers: b, placement: o, strategy: f, referenceElement: c }, n);
}
var hg = `atlaskit-portal-container`,
  gg = `body > .atlaskit-portal-container`,
  _g = `atlaskit-portal`,
  vg = function () {
    return document.body;
  },
  yg = function () {
    var e = document.querySelector(gg);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = hg),
        (n.style.display = `flex`),
        (t = vg()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  bg = function (e) {
    e.parentElement || yg().appendChild(e);
  },
  xg = function (e) {
    var t = document.createElement(`div`);
    return ((t.className = _g), (t.style.zIndex = `${e}`), t);
  },
  Sg = function () {
    var e = document.querySelector(gg);
    if (!e) {
      var t,
        n = document.createElement(`div`);
      return (
        (n.className = hg),
        (n.style.display = `flex`),
        (t = vg()) == null || t.appendChild(n),
        n
      );
    }
    return e;
  },
  Cg = function (e) {
    var t = Sg();
    t.contains(e) && t.removeChild(e);
  };
function wg(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = r === void 0 ? !1 : r,
    a = (0, B.useMemo)(
      function () {
        return xg(t);
      },
      [t],
    ),
    o = rf();
  return (
    bg(a),
    (0, B.useEffect)(
      function () {
        L(`import_into_jsm_in_template_gallery_killswitch`) && i && Cg(a);
      },
      [i, a],
    ),
    (0, B.useEffect)(
      function () {
        return function () {
          Cg(a);
        };
      },
      [a],
    ),
    (0, Fs.createPortal)(o ? B.createElement(nf, { defaultColorMode: o }, n) : n, a)
  );
}
var Tg = typeof window < `u` ? B.useLayoutEffect : B.useEffect,
  Eg = function () {
    return document !== void 0;
  },
  Dg = function (e) {
    if (Eg()) {
      var t = document.createElement(`div`);
      return ((t.className = _g), (t.style.zIndex = `${e}`), t);
    }
  },
  Og = function () {
    return document !== void 0;
  },
  kg = function () {
    if (Og()) {
      var e = document.querySelector(gg);
      if (!e) {
        var t,
          n = document.createElement(`div`);
        return (
          (n.className = hg),
          (n.style.display = `flex`),
          (t = vg()) == null || t.appendChild(n),
          n
        );
      }
      return e;
    }
  },
  Ag = function () {
    return document !== void 0;
  },
  jg = function (e) {
    if (Ag() && e) {
      var t;
      (t = vg()) == null || t.removeChild(e);
    }
  };
function Mg(e) {
  var t = e.zIndex,
    n = e.children,
    r = e.isClosed,
    i = l((0, B.useState)(null), 2),
    a = i[0],
    o = i[1],
    s = rf();
  return (
    Tg(
      function () {
        if (L(`import_into_jsm_in_template_gallery_killswitch`)) {
          if (!r) {
            var e = Dg(t);
            o(e);
            var n = kg();
            return !e || !n
              ? void 0
              : (n.appendChild(e),
                function () {
                  (n && (n.removeChild(e), !n.hasChildNodes() && jg(n)), o(null));
                });
          }
        } else {
          var i = Dg(t);
          o(i);
          var a = kg();
          return !i || !a
            ? void 0
            : (a.appendChild(i),
              function () {
                (i && a.removeChild(i), o(null));
              });
        }
      },
      [t, r, L],
    ),
    a
      ? (0, Fs.createPortal)(
          B.createElement(
            B.Suspense,
            { fallback: null },
            s ? B.createElement(nf, { defaultColorMode: s }, n) : n,
          ),
          a,
        )
      : null
  );
}
var Ng = function (e) {
    var t = l((0, B.useState)(!1), 2),
      n = t[0],
      r = t[1],
      i = l(
        (0, B.useState)(function () {
          return e === `layoutEffect` ? Tg : B.useEffect;
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
  Pg = `akPortalMount`,
  Fg = `akPortalUnmount`,
  Ig = {
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
  Lg = function (e) {
    return Ig.hasOwnProperty(e) ? Ig[e] : null;
  },
  Rg = function (e, t) {
    var n = { layer: Lg(Number(t)), zIndex: t };
    return new CustomEvent(e, { detail: n });
  };
function zg(e, t) {
  var n = Rg(e, t);
  window.dispatchEvent(n);
}
var Bg = function (e) {
  var t = Number(e);
  (0, B.useEffect)(
    function () {
      return (
        zg(Pg, t),
        function () {
          zg(Fg, t);
        }
      );
    },
    [t],
  );
};
function Vg(e) {
  var t = e.zIndex,
    n = t === void 0 ? 0 : t,
    r = e.children,
    i = e.mountStrategy,
    a = i === void 0 ? `effect` : i,
    o = e.isClosed,
    s = o === void 0 ? !1 : o,
    c = Ng(a);
  return (
    Bg(n),
    L(`platform_design_system_team_portal_logic_r18_fix`)
      ? B.createElement(Mg, { zIndex: n, isClosed: s }, r)
      : c
        ? B.createElement(wg, { zIndex: n, isClosed: s }, r)
        : null
  );
}
var Hg = {
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
  Ug = new Set(),
  Wg = null;
function Gg() {
  Wg ||
    ((Wg = (0, vd.bindAll)(window, [
      { type: `dragend`, listener: Kg },
      { type: `pointerdown`, listener: Kg },
      {
        type: `pointermove`,
        listener: (function () {
          var e = 0;
          return function () {
            if (e < 20) {
              e++;
              return;
            }
            Kg();
          };
        })(),
      },
    ])),
    Array.from(Ug).forEach(function (e) {
      e.onDragStart();
    }));
}
function Kg() {
  var e;
  ((e = Wg) == null || e(),
    (Wg = null),
    Array.from(Ug).forEach(function (e) {
      e.onDragEnd();
    }));
}
function qg() {
  return (0, vd.bindAll)(window, [
    { type: `dragstart`, listener: Gg },
    { type: `dragenter`, listener: Gg },
  ]);
}
var Jg = null;
function Yg(e) {
  return (
    (Jg ||= qg()),
    Ug.add(e),
    e.onRegister({ isDragging: Wg !== null }),
    function () {
      if ((Ug.delete(e), Ug.size === 0)) {
        var t;
        ((t = Jg) == null || t(), (Jg = null));
      }
    }
  );
}
function Xg(e) {
  var t = e || { top: 0, left: 0 };
  return {
    getBoundingClientRect: function () {
      return { top: t.top, left: t.left, bottom: t.top, right: t.left, width: 0, height: 0 };
    },
    clientWidth: 0,
    clientHeight: 0,
  };
}
function Zg(e, t) {
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
var Qg = null;
function $g() {
  Qg != null && (window.clearTimeout(Qg), (Qg = null));
}
function e_(e, t) {
  ($g(),
    (Qg = window.setTimeout(function () {
      ((Qg = null), e());
    }, t)));
}
var t_ = null;
function n_(e) {
  var t = `waiting-to-show`;
  function n() {
    return !!(t_ && t_.entry === e);
  }
  function r() {
    n() && ($g(), (t_ = null));
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
        ((t = `shown`), $g());
        return;
      }
      if (t === `hide-animating`) {
        ((t = `shown`), $g(), e.show({ isImmediate: !1 }));
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
          e_(function () {
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
    var n = L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? e.shouldAlwaysFadeIn : !1,
      r = !!(t_ && t_.isVisible()) && !n;
    ((t_ &&= ($g(), t_.entry.hide({ isImmediate: !0 }), t_.entry.done(), null)),
      (t_ = { entry: e, isVisible: l }));
    function i() {
      ((t = `shown`), e.show({ isImmediate: r }));
    }
    if (r) {
      i();
      return;
    }
    ((t = `waiting-to-show`), e_(i, e.delay));
  }
  return (
    d(),
    {
      keep: o,
      abort: r,
      isActive: n,
      requestHide: s,
      finishHideAnimation: c,
      mousePosition: L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? void 0 : u(),
      mousePos:
        e.source.type === `mouse` && L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? { clientX: e.source.clientX, clientY: e.source.clientY }
          : null,
    }
  );
}
function r_() {
  var e = af();
  return function (t) {
    return `${e}-${t.toString()}`;
  };
}
function i_(e, t) {
  var n = r_();
  return t ? `${n(e)}` : void 0;
}
O();
var a_ = {
    shortcutSegmentsContainer: `_zulpv77o _1e0c1txw _1q511b66 _85i5v77o`,
    shortcutSegment: `_11c8wadc _2rkolb4i _1dqonqa1 _189ee4h9 _1h6d1ihb _1e0c1txw _4cvr1h6o _4t3i1k92 _vchhusvi _1q51v77o _85i5v77o _bozg12x7 _y4ti12x7 _16qsn7od _1254n7od _cgnln7od _syazn7od _ahbqn7od _12l2n7od _1pfhn7od _6rthn7od _1ul9n7od _w19jn7od _bfhk261p`,
  },
  o_ = function (e) {
    var t = e.shortcut;
    return B.createElement(
      `div`,
      { className: N([a_.shortcutSegmentsContainer]) },
      t.map(function (e, t) {
        return B.createElement(`kbd`, { key: `${e}-${t}`, className: N([a_.shortcutSegment]) }, e);
      }),
    );
  };
O();
var s_ = (0, B.forwardRef)(function (e, t) {
  var n = e.style,
    r = e.className,
    i = e.children,
    a = e.placement,
    o = e.testId,
    s = e.onMouseOut,
    c = e.onMouseOver,
    l = e.id,
    u = e.shortcut;
  return B.createElement(
    `div`,
    { ref: t, style: n, "data-testid": o ? `${o}--wrapper` : void 0 },
    B.createElement(
      `div`,
      {
        role: `tooltip`,
        className: N([`_80om73ad`, r]),
        onMouseOut: s,
        onMouseOver: c,
        "data-placement": a,
        "data-testid": o,
        id: l,
      },
      i,
      u && B.createElement(o_, { shortcut: u }),
    ),
  );
});
((s_.displayName = `TooltipPrimitive`), O());
var c_ = {
    base: `_2rkofajl _11c8wadc _vchhusvi _p12fp3fh _bfhk1aqn _syaz15cr _152tze3t _1e02ze3t _1i4q1hna _1q511b66 _85i51b66 _y4ti12x7 _bozg12x7 _slp31hna`,
    truncate: `_1reo15vq _18m915vq _p12f1pna _1bto1l2s _o5721q9c`,
  },
  l_ = (0, B.forwardRef)(function (e, t) {
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
    return B.createElement(
      s_,
      {
        ref: t,
        style: n,
        className: N([c_.base, a && c_.truncate, r]),
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
l_.displayName = `TooltipContainer`;
function u_(e, t) {
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
function d_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? u_(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : u_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var f_ = Hg.tooltip(),
  p_ = { componentName: `tooltip`, packageName: `@atlaskit/tooltip`, packageVersion: `21.1.6` },
  m_ = { top: `bottom`, bottom: `top`, left: `right`, right: `left` },
  h_ = function (e) {
    return e.split(`-`)[0];
  };
function g_(e) {
  var t = e.children,
    n = e.position,
    r = n === void 0 ? `bottom` : n,
    i = e.mousePosition,
    a = i === void 0 ? `bottom` : i,
    o = e.content,
    s = e.truncate,
    c = s === void 0 ? !1 : s,
    u = e.component,
    d = u === void 0 ? l_ : u,
    f = e.tag,
    p = f === void 0 ? `div` : f,
    m = e.testId,
    h = e.delay,
    g = h === void 0 ? 300 : h,
    _ = e.onShow,
    v = _ === void 0 ? Mc : _,
    y = e.onHide,
    b = y === void 0 ? Mc : y,
    x = e.canAppear,
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
    ae = ie ? a : r,
    oe = el(d_({ fn: v, action: `displayed`, analyticsData: E }, p_)),
    se = el(d_({ fn: b, action: `hidden`, analyticsData: E }, p_)),
    F = (0, B.useRef)(null),
    ce = l((0, B.useState)(`hide`), 2),
    I = ce[0],
    le = ce[1],
    ue = (0, B.useRef)(null),
    de = (0, B.useRef)(null),
    fe = function (e) {
      ((de.current = e), (ue.current = e ? e.firstElementChild : null));
    },
    pe = (0, B.useCallback)(function (e) {
      ue.current = e;
    }, []),
    me = kp(I),
    he = kp(oe),
    R = kp(se),
    ge = kp(g),
    _e = kp(x),
    ve = (0, B.useRef)(!1),
    ye = kp(te),
    z = (0, B.useCallback)(function (e) {
      ((F.current = e), (ve.current = !1));
    }, []),
    be = (0, B.useCallback)(
      function () {
        F.current && (ve.current && R.current(), (F.current = null), (ve.current = !1), le(`hide`));
      },
      [R],
    ),
    xe = (0, B.useCallback)(
      function () {
        F.current &&= (F.current.abort(), ve.current && R.current(), null);
      },
      [R],
    );
  (0, B.useEffect)(
    function () {
      return function () {
        F.current && xe();
      };
    },
    [xe],
  );
  var V = (0, B.useRef)(!1);
  (0, B.useEffect)(function () {
    return Yg({
      onRegister: function (e) {
        V.current = e.isDragging;
      },
      onDragStart: function () {
        var e;
        ((e = F.current) == null || e.requestHide({ isImmediate: !0 }), (V.current = !0));
      },
      onDragEnd: function () {
        V.current = !1;
      },
    });
  }, []);
  var Se = (0, B.useCallback)(
    function (e) {
      var t;
      if (!V.current) {
        if ((F.current && !F.current.isActive() && xe(), F.current && F.current.isActive())) {
          F.current.keep();
          return;
        }
        (_e.current && !((t = _e.current) != null && t.call(_e))) ||
          z(
            n_({
              source: e,
              delay: ge.current,
              show: function (e) {
                var t = e.isImmediate;
                (ve.current || ((ve.current = !0), he.current()),
                  le(t ? `show-immediate` : `fade-in`));
              },
              hide: function (e) {
                e.isImmediate ? le(`hide`) : le(`before-fade-out`);
              },
              done: be,
              shouldAlwaysFadeIn: L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                ? ye.current
                : !1,
            }),
          );
      }
    },
    [_e, ge, be, z, xe, he, ye],
  );
  (Op({
    onClose: (0, B.useCallback)(
      function () {
        var e;
        (e = F.current) == null || e.requestHide({ isImmediate: !0 });
      },
      [F],
    ),
    isDisabled: I === `hide` || I === `fade-out`,
  }),
    (0, B.useEffect)(
      function () {
        return I === `hide`
          ? Mc
          : (I === `before-fade-out` && le(`fade-out`),
            (0, vd.bind)(window, {
              type: `scroll`,
              listener: function () {
                F.current && F.current.requestHide({ isImmediate: !0 });
              },
              options: { capture: !0, passive: !0, once: !0 },
            }));
      },
      [I],
    ));
  var Ce = (0, B.useCallback)(
      function () {
        T && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [T],
    ),
    H = (0, B.useCallback)(
      function () {
        C && F.current && F.current.requestHide({ isImmediate: !0 });
      },
      [C],
    ),
    we = (0, B.useCallback)(
      function (e) {
        (de.current && e.target === de.current) ||
          e.defaultPrevented ||
          (e.preventDefault(),
          Se(
            ie
              ? {
                  type: `mouse`,
                  mouse: L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
                    ? void 0
                    : Xg({ left: e.clientX, top: e.clientY }),
                  clientX: e.clientX,
                  clientY: e.clientY,
                }
              : { type: `keyboard` },
          ));
      },
      [ie, Se],
    ),
    Te = (0, B.useCallback)(function (e) {
      (de.current && e.target === de.current) ||
        e.defaultPrevented ||
        (e.preventDefault(), F.current && F.current.requestHide({ isImmediate: !1 }));
    }, []),
    Ee = ie
      ? function (e) {
          var t;
          (t = F.current) != null &&
            t.isActive() &&
            (L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ||
              (F.current.mousePosition = Xg({ left: e.clientX, top: e.clientY })),
            (F.current.mousePos = { clientX: e.clientX, clientY: e.clientY }));
        }
      : void 0,
    De = (0, B.useCallback)(function () {
      if (F.current && F.current.isActive()) {
        F.current.keep();
        return;
      }
    }, []),
    Oe = (0, B.useCallback)(
      function (e) {
        try {
          if (!e.target.matches(`:focus-visible`)) return;
        } catch {}
        Se({ type: `keyboard` });
      },
      [Se],
    ),
    ke = (0, B.useCallback)(function () {
      F.current && F.current.requestHide({ isImmediate: !1 });
    }, []),
    Ae = (0, B.useCallback)(
      function (e) {
        e === `exiting` &&
          me.current === `fade-out` &&
          F.current &&
          F.current.finishHideAnimation();
      },
      [me],
    ),
    je = p,
    Me = I !== `hide` && !!o,
    Ne = !M && Me,
    Pe = I !== `hide` && I !== `fade-out`,
    Fe = (0, B.useCallback)(function () {
      var e;
      (e = F.current) == null || e.requestHide({ isImmediate: !0 });
    }, []);
  Np({ isOpen: Me && Pe, onClose: Fe });
  var Ie = function () {
      var e, t;
      return ie &&
        (e = F.current) != null &&
        e.mousePos &&
        ue.current &&
        L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
        ? Zg(F.current.mousePos, { targetElement: ue.current, tooltipPosition: r })
        : ie &&
            (t = F.current) != null &&
            t.mousePosition &&
            !L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`)
          ? F.current?.mousePosition
          : ue.current || void 0;
    },
    Le = i_(`tooltip`, Ne),
    Re = {
      onMouseOver: we,
      onMouseOut: Te,
      onMouseMove: Ee,
      onMouseDown: Ce,
      onClick: H,
      onFocus: Oe,
      onBlur: ke,
    };
  m && (Re[`data-testid`] = `${m}--container`);
  var ze = typeof t == `function`;
  (0, B.useEffect)(
    function () {
      if (!ze) {
        var e = ue.current;
        if (!(!e || !Le))
          return (
            e.setAttribute(`aria-describedby`, Le),
            function () {
              return e.removeAttribute(`aria-describedby`);
            }
          );
      }
    },
    [ze, Le],
  );
  var Be = Ne
      ? B.createElement(
          `span`,
          { "data-testid": m ? `${m}-hidden` : void 0, hidden: !0, id: Le },
          typeof o == `function` ? o({}) : o,
        )
      : null,
    Ve = re && L(`platform_dst_nav4_side_nav_resize_tooltip_feedback`) ? B.Fragment : __;
  return B.createElement(
    B.Fragment,
    null,
    typeof t == `function`
      ? B.createElement(
          B.Fragment,
          null,
          t(d_(d_({}, Re), {}, { "aria-describedby": Le, ref: pe })),
          Be,
        )
      : B.createElement(je, P({}, Re, { ref: fe, role: `presentation` }), t, Be),
    Me
      ? B.createElement(
          Ve,
          null,
          B.createElement(mg, { placement: ae, referenceElement: Ie(), strategy: O }, function (e) {
            var t = e.ref,
              n = e.style,
              r = e.update,
              i = e.placement,
              a = ie ? void 0 : m_[h_(i)];
            return B.createElement(
              Jp,
              { appear: !0 },
              Pe &&
                B.createElement(
                  tm,
                  {
                    distance: `constant`,
                    entranceDirection: a,
                    exitDirection: a,
                    onFinish: Ae,
                    duration: I === `show-immediate` ? `none` : `medium`,
                  },
                  function (e) {
                    var i = e.className;
                    return B.createElement(
                      d,
                      {
                        ref: t,
                        className: `Tooltip ${i}`,
                        style: d_(d_({}, n), A && { pointerEvents: `none` }),
                        truncate: c,
                        placement: ae,
                        testId: Ie() ? m : m && `${m}--unresolved`,
                        onMouseOut: Te,
                        onMouseOver: De,
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
var __ = function (e) {
  var t = e.children;
  return B.createElement(Vg, { zIndex: f_ }, t);
};
O();
var v_ = [
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
function y_(e, t) {
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
function b_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? y_(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : y_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var x_ = `--local-dynamic-table-text-color`,
  S_ = (0, B.forwardRef)(function (e, t) {
    var n = e.width,
      r = e.children;
    e.isSortable;
    var i = e.sortOrder,
      a = e.isFixedSize,
      o = e.shouldTruncate;
    e.onClick;
    var s = e.style,
      c = e.testId,
      l = m(e, v_),
      u = b_(
        b_(b_({}, s), n && oe({ width: n })),
        {},
        h({}, x_, `var(--ds-text-subtlest, #6B6E76)`),
      ),
      d = i === `ASC`,
      f = i === C,
      p = function () {
        if (d) return `ascending`;
        if (f) return `descending`;
      },
      g = r ? `th` : `td`;
    return B.createElement(
      g,
      P({ "aria-sort": p(), style: u, onClick: void 0, ref: t, "data-testid": c }, l, {
        className: N([
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
O();
var C_ = e(Ep()),
  w_ = e(Dp()),
  T_ = [
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
  E_ = {
    buttonWrapper: `_1e0c1txw _bfhk1j28 _4cvr1h6o _ca0qze3t _u5f3ze3t _n3tdze3t _19bvze3t _d0altlke`,
    sortIconHiddenWrapper: `_1e0c1txw _tzy4idpf _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66 _1h7hkb7n`,
    sortIconVisibleWrapper: `_1e0c1txw _tzy4kb7n _bfhk1j28 _ca0q1b66 _u5f31b66 _n3td1b66 _19bv1b66`,
    hideIconHeaderWrapper: `_tzy4idpf _18u010v4`,
    visibleHeaderWrapper: `_tzy4kb7n _u5f31b66`,
  },
  D_ = { headCellContainer: `_1e0c1txw _4cvr1h6o`, text: `_11c8wadc _syazazsu _k48pwu06` },
  O_ = function (e) {
    var t = e.content,
      n = e.inlineStyles,
      r = e.testId;
    e.isRanking;
    var i = e.innerRef,
      a = e.isSortable,
      o = e.sortOrder,
      s = e.onClick,
      c = e.headCellId,
      u = e.activeSortButtonId,
      d = e.ascendingSortTooltip,
      f = d === void 0 ? `Sort ascending` : d,
      p = e.descendingSortTooltip,
      h = p === void 0 ? `Sort descending` : p,
      g = e.buttonAriaRoleDescription,
      _ = g === void 0 ? `Sort button` : g,
      v = e.isIconOnlyHeader,
      y = m(e, T_),
      b = l((0, B.useState)(!1), 2),
      x = b[0],
      S = b[1],
      C = l((0, B.useState)(!1), 2),
      w = C[0],
      T = C[1],
      E = x || c === u || o !== void 0 || w,
      D = E && v,
      O = !v || E || (v && !w),
      k = (0, B.useCallback)(
        function () {
          T?.(!0);
        },
        [T],
      ),
      A = (0, B.useCallback)(
        function () {
          T?.(!1);
        },
        [T],
      ),
      j = (0, B.useCallback)(
        function () {
          S(!0);
        },
        [S],
      ),
      M = (0, B.useCallback)(
        function () {
          S(!1);
        },
        [S],
      ),
      ee = B.createElement(
        lu,
        { xcss: D_.headCellContainer, onMouseEnter: j, onMouseLeave: M, onFocus: k, onBlur: A },
        B.createElement(
          g_,
          { content: o === `ASC` ? f : h },
          B.createElement(
            qu,
            { onClick: s, xcss: E_.buttonWrapper, "aria-roledescription": _ },
            B.createElement(
              wu,
              { xcss: D ? E_.hideIconHeaderWrapper : E_.visibleHeaderWrapper },
              B.createElement(`span`, { className: N([D_.text]) }, t),
            ),
            O &&
              B.createElement(
                wu,
                { xcss: E ? E_.sortIconVisibleWrapper : E_.sortIconHiddenWrapper },
                o === `ASC`
                  ? B.createElement(w_.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--up--icon`,
                    })
                  : B.createElement(C_.default, {
                      label: ``,
                      color: `var(--ds-text-subtle, #505258)`,
                      testId: r && `${r}--down--icon`,
                    }),
              ),
          ),
        ),
      );
    return B.createElement(
      S_,
      P({ style: n, testId: r && `${r}--head--cell`, ref: typeof i == `string` ? null : i }, y, {
        isSortable: a,
        sortOrder: o,
      }),
      a ? ee : t,
    );
  },
  k_ = [`isRanking`, `refHeight`, `refWidth`];
function A_(e, t, n) {
  return ((t = d(t)), f(e, j_() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function j_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (j_ = function () {
    return !!e;
  })();
}
var M_ = ee(
    (function (e) {
      function t() {
        return (p(this, t), A_(this, t, arguments));
      }
      return (
        S(t, e),
        y(t, [
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.isRanking;
              e.refHeight;
              var n = e.refWidth,
                r = m(e, k_),
                i = ae(t, n);
              return B.createElement(O_, P({ inlineStyles: i }, r));
            },
          },
        ])
      );
    })(B.Component),
  ),
  N_ = [`cells`],
  P_ = [
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
function F_(e, t, n) {
  return ((t = d(t)), f(e, I_() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function I_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (I_ = function () {
    return !!e;
  })();
}
var L_ = (function (e) {
  function t(e) {
    var n;
    return (p(this, t), (n = F_(this, t, [e])), (n.state = { activeSortButtonId: null }), n);
  }
  return (
    S(t, e),
    y(t, [
      {
        key: `UNSAFE_componentWillMount`,
        value: function () {
          A(this.props.sortKey, this.props.head);
        },
      },
      {
        key: `UNSAFE_componentWillReceiveProps`,
        value: function (e) {
          (this.props.sortKey !== e.sortKey || this.props.head !== e.head) && A(e.sortKey, e.head);
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
          var d = c ? M_ : O_,
            f = n.cells,
            p = m(n, N_);
          return B.createElement(
            Tp,
            P({}, p, { isRanking: s, testId: l && `${l}--head` }),
            B.createElement(
              `tr`,
              null,
              f.map(function (t, n) {
                var c = t.ascendingSortTooltip,
                  f = t.buttonAriaRoleDescription,
                  p = t.colSpan,
                  h = t.content,
                  g = t.descendingSortTooltip,
                  _ = t.isIconOnlyHeader,
                  v = t.isSortable,
                  y = t.key,
                  b = t.shouldTruncate,
                  x = t.testId,
                  S = t.width,
                  C = m(t, P_),
                  w = `head-cell-${n}`;
                return B.createElement(
                  d,
                  P(
                    {
                      colSpan: p,
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
                      buttonAriaRoleDescription: f,
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
})(B.Component);
Lt();
var R_ = [`isRankable`, `isRanking`, `onRankStart`, `onRankEnd`, `isRankingDisabled`];
function z_(e) {
  switch (e) {
    case C:
      return `ASC`;
    case `ASC`:
      return C;
    default:
      return e;
  }
}
var B_ = function (e) {
    var t = e.caption,
      n = e.head,
      r = e.highlightedRowIndex,
      i = e.rows,
      a = e.sortKey,
      o = e.sortOrder,
      s = e.loadingLabel,
      c = e.onPageRowsUpdate,
      u = e.testId,
      d = e.totalRows,
      f = e.label,
      p = e.isLoading,
      m = p === void 0 ? !1 : p,
      h = e.isFixedSize,
      g = h === void 0 ? !1 : h,
      _ = e.rowsPerPage,
      v = _ === void 0 ? 1 / 0 : _,
      y = e.onSetPage,
      b = y === void 0 ? Mc : y,
      x = e.onSort,
      S = x === void 0 ? Mc : x,
      C = e.page,
      w = C === void 0 ? 1 : C,
      E = e.emptyView,
      D = e.isRankable,
      O = D === void 0 ? !1 : D,
      j = e.isRankingDisabled,
      M = j === void 0 ? !1 : j,
      N = e.onRankStart,
      ee = N === void 0 ? Mc : N,
      te = e.onRankEnd,
      ne = te === void 0 ? Mc : te,
      re = e.loadingSpinnerSize,
      ie = e.paginationi18n,
      ae =
        ie === void 0
          ? { prev: `Previous Page`, next: `Next Page`, label: `Pagination`, pageLabel: `Page` }
          : ie,
      oe = l((0, B.useState)(!1), 2),
      P = oe[0],
      F = oe[1],
      ce = (0, B.useRef)(null),
      I = Zc({
        fn: S,
        action: `sorted`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      }),
      le = Zc({
        fn: ne,
        action: `ranked`,
        componentName: `dynamicTable`,
        packageName: `@atlaskit/dynamic-table`,
        packageVersion: `0.0.0-development`,
      });
    (0, B.useEffect)(
      function () {
        (A(a, n), tl(n));
      },
      [a, n],
    );
    var ue = function (e) {
        return function () {
          var t = e.key;
          if (t) {
            if (I && O && t === a && o === `DESC`) {
              I({ key: null, sortOrder: null, item: e });
              return;
            }
            var n = t === a ? z_(o) : `ASC`;
            I && I({ key: t, item: e, sortOrder: n });
          }
        };
      },
      de = function (e, t) {
        b(e, t);
      },
      L = function (e) {
        (F(!0), ee(e));
      },
      fe = function (e) {
        (F(!1), le(e));
      },
      pe = function () {
        return re || (k(i || [], w, v).length > 2 ? se : T);
      },
      me = function () {
        return m ? B.createElement(il, { testId: u }) : E && B.createElement(rl, { testId: u }, E);
      },
      he = i && i.length,
      R,
      ge = !1;
    (d && Number.isInteger(d) && v && he && he <= d
      ? ((R = Math.ceil(d / v)), (ge = !0))
      : (R = he && v ? Math.ceil(he / v) : 0),
      (R = R < 1 ? 1 : R));
    var _e = w > R ? R : w,
      ve = !!he,
      ye = pe(),
      z = me();
    return B.createElement(
      B.Fragment,
      null,
      B.createElement(
        zl,
        {
          isLoading: m && ve,
          spinnerSize: ye,
          targetRef: function () {
            return ce.current;
          },
          testId: u,
          loadingLabel: s,
        },
        B.createElement(
          sl,
          { isFixedSize: g, "aria-label": f, hasDataRow: ve, testId: u, isLoading: m },
          !!t && B.createElement(nl, null, t),
          n &&
            B.createElement(L_, {
              head: n,
              onSort: ue,
              sortKey: a,
              sortOrder: o,
              isRanking: P,
              isRankable: O,
              testId: u,
            }),
          ve &&
            B.createElement(H_, {
              ref: ce,
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
              testId: u,
              isRankable: O,
              isRanking: P,
              onRankStart: L,
              onRankEnd: fe,
              isRankingDisabled: M || m || !1,
            }),
        ),
      ),
      R <= 1
        ? null
        : B.createElement(
            al,
            { testId: u },
            B.createElement(Cp, {
              value: _e,
              onChange: de,
              total: R,
              i18n: ae,
              isDisabled: m,
              testId: u,
            }),
          ),
      !ve &&
        z &&
        B.createElement(Ml, { isLoading: m, spinnerSize: `large`, testId: u, loadingLabel: s }, z),
    );
  },
  V_ = (0, B.lazy)(function () {
    return It(
      () => import(`./body-tlvIHgQr.js`),
      __vite__mapDeps([6, 1, 7, 4, 8, 9, 10]),
      import.meta.url,
    );
  }),
  H_ = (0, B.forwardRef)(function (e, t) {
    var n = e.isRankable,
      r = n === void 0 ? !1 : n,
      i = e.isRanking,
      a = e.onRankStart,
      o = e.onRankEnd,
      s = e.isRankingDisabled,
      c = m(e, R_),
      u = r && !c.sortKey,
      d = l((0, B.useState)(!1), 2),
      f = d[0],
      p = d[1];
    (0, B.useEffect)(
      function () {
        u && p(!0);
      },
      [u],
    );
    var h = B.createElement(ml, P({ ref: t }, c));
    return u && f
      ? B.createElement(
          _l,
          { fallback: h },
          B.createElement(
            B.Suspense,
            { fallback: h },
            B.createElement(
              V_,
              P({ ref: t }, c, {
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
function U_(e, t, n) {
  return ((t = d(t)), f(e, W_() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n)));
}
function W_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (W_ = function () {
    return !!e;
  })();
}
var G_ = (function (e) {
  function t() {
    var e;
    p(this, t);
    var n = [...arguments];
    return (
      (e = U_(this, t, [].concat(n))),
      h(e, `state`, {
        page: e.props.defaultPage,
        sortKey: e.props.defaultSortKey,
        sortOrder: e.props.defaultSortOrder,
        rows: e.props.rows,
      }),
      h(e, `onSetPageHandler`, function (t, n) {
        var r = e.props.onSetPage;
        r && (r(t, n), e.setState({ page: t }));
      }),
      h(e, `onSortHandler`, function (t, n) {
        var r = t.key,
          i = t.item,
          a = t.sortOrder,
          o = e.props.onSort;
        o && (o({ key: r, item: i, sortOrder: a }, n), e.setState({ sortKey: r, sortOrder: a }));
      }),
      h(e, `onRankEndIfExistsHandler`, function (t) {
        e.props.onRankEnd && e.props.onRankEnd(t);
      }),
      h(e, `onRankEndHandler`, function (t) {
        var n = t.destination,
          r = e.state,
          i = r.rows,
          a = r.page,
          o = e.props.rowsPerPage;
        if (!n || !i) {
          e.onRankEndIfExistsHandler(t);
          return;
        }
        var s = Pc(t, i, a, o);
        (e.setState({ rows: s }), e.onRankEndIfExistsHandler(t));
      }),
      e
    );
  }
  return (
    S(t, e),
    y(t, [
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
          return B.createElement(B_, {
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
})(B.Component);
h(G_, `defaultProps`, {
  defaultPage: 1,
  isLoading: !1,
  isFixedSize: !1,
  isRankable: !1,
  onSetPage: Mc,
  onSort: Mc,
  rowsPerPage: 1 / 0,
});
var K_ = (e) => {
    let t = [];
    return (
      t.push({ key: `id`, content: `ID`, isSortable: !1, width: e ? 25 : void 0 }),
      t.push({
        key: `testDateColumn`,
        content: `example Datetime`,
        isSortable: !1,
        width: e ? 25 : void 0,
      }),
      t.push({ key: `testNameColumn`, content: `Name`, isSortable: !1, width: e ? 25 : void 0 }),
      t.push({ key: `version`, content: `Version`, isSortable: !1, width: e ? 25 : void 0 }),
      t.push({ key: `Action`, content: `Action`, isSortable: !1, width: e ? 25 : void 0 }),
      t
    );
  },
  q_ = (e) => ({ cells: K_(e) });
function J_(e) {
  return function (t) {
    e.forEach(function (e) {
      typeof e == `function` ? e(t) : e !== null && g(e) === `object` && (e.current = t);
    });
  };
}
var Y_ = (0, B.createContext)(void 0),
  X_ = function () {
    var e = (0, B.useContext)(Y_);
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
function Z_(e) {
  (e.preventDefault(), e.stopPropagation());
}
var Q_ = 9;
function $_(e) {
  e.keyCode !== Q_ && Z_(e);
}
function ev(e, t) {
  return e
    ? {
        onMouseDownCapture: Z_,
        onMouseUpCapture: Z_,
        onKeyDownCapture: $_,
        onKeyUpCapture: $_,
        onTouchStartCapture: Z_,
        onTouchEndCapture: Z_,
        onPointerDownCapture: Z_,
        onPointerUpCapture: Z_,
        onClickCapture: Z_,
        onClick: Z_,
      }
    : t;
}
function tv(e) {
  switch (e) {
    case `compact`:
      return `small`;
    default:
      return `medium`;
  }
}
function nv(e) {
  var t = e.appearance,
    n = e.isDisabled,
    r = e.isSelected;
  return n || r
    ? `inherit`
    : t === `primary` || t === `danger` || t === `discovery`
      ? `invert`
      : `inherit`;
}
function rv(e) {
  var t = e.appearance,
    n = e.spacing,
    r = e.isDisabled,
    i = e.isSelected,
    a = e.testId;
  return B.createElement(Cl, {
    size: tv(n),
    appearance: nv({ appearance: t, isDisabled: r, isSelected: i }),
    testId: a ? `${a}--loading-spinner` : void 0,
  });
}
O();
var iv =
    `appearance.autoFocus.isDisabled.isLoading.isSelected.isIconButton.isCircle.hasIconBefore.hasIconAfter.shouldFitContainer.spacing.ariaLabel.ariaLabelledBy.children.interactionName.onClick.onMouseDown.onMouseDownCapture.onMouseUp.onMouseUpCapture.onKeyDown.onKeyDownCapture.onKeyUp.onKeyUpCapture.onTouchStart.onTouchStartCapture.onTouchEnd.onTouchEndCapture.onPointerDown.onPointerDownCapture.onPointerUp.onPointerUpCapture.onClickCapture.testId.analyticsContext.componentName.role.onMouseOver.onMouseOut.onFocus.onBlur.onMouseMove.type`.split(
      `.`,
    ),
  av = [`className`, `css`, `as`, `style`],
  ov = `, Loading`,
  sv = {
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
  cv = {
    root: `_bfhksm61 _syazazsu _8l3m1l7x _aetrb3bt _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  lv = {
    root: `_bfhk1856 _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3hf2y _9h8h15cr _1di6g6ey`,
  },
  uv = {
    root: `_bfhk1kmu _syaz1yd3 _10531yd3 _f8pj1yd3 _30l31yd3 _9h8h1yd3`,
    interactive: `_30l31yd3 _irr31spp _9h8h1yd3 _1di64m4m`,
  },
  dv = {
    root: `_bfhkybec _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3s9hg _9h8h15cr _1di613a9`,
  },
  fv = {
    root: `_bfhku5tj _syaz15cr _105315cr _f8pj15cr _30l315cr _9h8h15cr`,
    interactive: `_30l315cr _irr3fqeg _9h8h15cr _1di61f1m`,
  },
  pv = {
    root: `_bfhksm61 _syazazsu _1053azsu _f8pjazsu _30l3azsu _9h8hazsu`,
    interactive: `_irr31dpa _30l3azsu _1di6fcek _9h8hazsu`,
    disabled: `_bfhk1j28 _8l3mbk0g _irr31j28 _1di61j28`,
  },
  mv = {
    root: `_bfhk15s3 _syaz6x5g _8l3mq98m _aetrb3bt _10536x5g _f8pj6x5g _30l36x5g _9h8h6x5g`,
    insideSplitButton: `_1pbycs5v`,
    interactive: `_irr3ufnl _30l36x5g _1di6nozp _9h8h6x5g`,
    warning: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    danger: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
    discovery: `_bfhk15s3 _syaz6x5g _30l36x5g _irr315s3 _9h8h6x5g _1di615s3`,
  },
  hv = B.forwardRef(function (e, t) {
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
      h = p === void 0 ? !1 : p,
      g = e.hasIconBefore,
      _ = g === void 0 ? !1 : g,
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
      ee = e.onKeyDown,
      te = e.onKeyDownCapture,
      ne = e.onKeyUp,
      re = e.onKeyUpCapture,
      ie = e.onTouchStart,
      ae = e.onTouchStartCapture,
      oe = e.onTouchEnd,
      se = e.onTouchEndCapture,
      F = e.onPointerDown,
      ce = e.onPointerDownCapture,
      I = e.onPointerUp,
      le = e.onPointerUpCapture,
      ue = e.onClickCapture,
      de = e.testId,
      fe = e.analyticsContext,
      pe = e.componentName,
      me = e.role,
      he = e.onMouseOver,
      R = e.onMouseOut,
      ge = e.onFocus,
      _e = e.onBlur,
      ve = e.onMouseMove,
      ye = e.type,
      z = m(e, iv),
      be = (0, B.useRef)(null),
      xe = X_(),
      V = af(),
      Se = !!xe,
      Ce = xe?.isNavigationSplitButton || !1,
      H = xe?.appearance === `default` ? `subtle` : n || xe?.appearance || `default`,
      we = xe?.spacing || C,
      Te = xe?.isDisabled || o,
      Ee = !Te && !c,
      De = Te || c,
      Oe = u && !Te;
    (sf(be, i), z.className, z.css, z.as, z.style);
    var ke = m(z, av);
    return B.createElement(
      qu,
      P(
        {},
        ke,
        {
          componentName: pe || `button`,
          analyticsContext: fe,
          role: me,
          ref: J_([be, t]),
          xcss: hu(
            sv.base,
            L(`platform-dst-shape-theme-default`) && sv.baseT26Shape,
            H === `default` && cv.root,
            H === `default` && Ee && cv.interactive,
            H === `primary` && lv.root,
            H === `primary` && Ee && lv.interactive,
            H === `warning` && uv.root,
            H === `warning` && Ee && uv.interactive,
            H === `danger` && dv.root,
            H === `danger` && Ee && dv.interactive,
            H === `discovery` && fv.root,
            H === `discovery` && Ee && fv.interactive,
            H === `subtle` && pv.root,
            H === `subtle` && Ee && pv.interactive,
            sv.linkDecorationUnset,
            Oe && mv.root,
            Oe && Se && mv.insideSplitButton,
            Oe && Ee && mv.interactive,
            Oe && H === `danger` && mv.danger,
            Oe && H === `warning` && mv.warning,
            Oe && H === `discovery` && mv.discovery,
            Te && sv.disabled,
            Te && H !== `default` && H !== `subtle` && sv.sharedDisabled,
            Te && H === `default` && cv.disabled,
            h && !Se && sv.circle,
            we === `compact` && sv.spacingCompact,
            we === `compact` && L(`platform-dst-shape-theme-default`) && sv.spacingCompactT26Shape,
            x && sv.fullWidth,
            _ && sv.buttonIconBefore,
            y && sv.buttonIconAfter,
            f && sv.iconButton,
            f && we === `compact` && sv.iconButtonCompact,
            c && sv.loading,
            Se && sv.splitButton,
            Ce && sv.navigationSplitButton,
          ),
          isDisabled: L(`platform-dst_fix_not_focusable_loading_button`) ? Te : De,
        },
        L(`platform-dst_fix_not_focusable_loading_button`) && { "aria-live": `polite` },
        c && L(`platform-dst_fix_not_focusable_loading_button`) && { "aria-disabled": !0 },
        {
          "aria-label": c && w && !T ? `${w} ${ov}` : w,
          "aria-labelledby": c && T ? `${T} ${V}` : T,
          onClick: O,
        },
        ev(De, {
          onMouseDownCapture: A,
          onMouseUpCapture: M,
          onKeyDownCapture: te,
          onKeyUpCapture: re,
          onTouchStartCapture: ae,
          onTouchEndCapture: se,
          onPointerDownCapture: ce,
          onPointerUpCapture: le,
          onClickCapture: ue,
        }),
        {
          testId: de,
          onMouseOver: he,
          onFocus: ge,
          onMouseMove: ve,
          onBlur: _e,
          type: ye,
          interactionName: D,
          onMouseDown: k,
          onMouseUp: j,
          onKeyDown: ee,
          onMouseOut: R,
          onKeyUp: ne,
          onTouchStart: ie,
          onTouchEnd: oe,
          onPointerDown: F,
          onPointerUp: I,
        },
      ),
      B.createElement(
        Y_.Provider,
        { value: void 0 },
        E,
        c &&
          B.createElement(
            `span`,
            { className: N([sv.loadingOverlay]) },
            rv({ spacing: we, appearance: H, isDisabled: Te, isSelected: Oe, testId: de }),
          ),
        c && (T || !w) && B.createElement(of, { id: V }, ov),
      ),
    );
  });
O();
var gv = {
    text: `_1reo15vq _18m915vq _16jlkb7n _1o9zkb7n _1bto1l2s _o5721q9c`,
    icon: `_1e0c1txw _16jlidpf _1o9zidpf _1wpz1h6o _1wybidpf _vwz4idpf _uiztglyw`,
    common: `_v564g17y`,
    fade: `_tzy4idpf`,
  },
  _v = function (e) {
    var t = e.children,
      n = e.type,
      r = n === void 0 ? `text` : n,
      i = e.isLoading;
    return B.createElement(
      `span`,
      { className: N([gv.common, r === `text` && gv.text, r === `icon` && gv.icon, i && gv.fade]) },
      t,
    );
  };
function vv(e) {
  return !e.displayName && !e.render && typeof e == `function`;
}
var yv = function (e) {
    var t = e.icon,
      n = vv(t),
      r = {
        label: ``,
        color: `currentColor`,
        size: L(`platform_dst_button_chevron_sizing`)
          ? function (e) {
              return e.startsWith(`Chevron`) ? `small` : `medium`;
            }
          : void 0,
      };
    return B.createElement(B.Fragment, null, n ? t(r) : B.createElement(t, r));
  },
  bv =
    `analyticsContext.appearance.aria-label.aria-labelledby.autoFocus.children.iconAfter.iconBefore.interactionName.isDisabled.isLoading.isSelected.onClick.onClickCapture.onKeyDownCapture.onKeyUpCapture.onMouseDownCapture.onMouseUpCapture.onPointerDownCapture.onPointerUpCapture.onTouchEndCapture.onTouchStartCapture.shouldFitContainer.spacing.testId.type`.split(
      `.`,
    ),
  xv = [`className`, `css`, `as`, `style`],
  Sv = B.memo(
    B.forwardRef(function (e, t) {
      var n = e.analyticsContext,
        r = e.appearance,
        i = e[`aria-label`],
        a = e[`aria-labelledby`],
        o = e.autoFocus,
        s = e.children,
        c = e.iconAfter,
        l = e.iconBefore,
        u = e.interactionName,
        d = e.isDisabled,
        f = e.isLoading,
        p = f === void 0 ? !1 : f,
        h = e.isSelected,
        g = e.onClick,
        _ = e.onClickCapture,
        v = e.onKeyDownCapture,
        y = e.onKeyUpCapture,
        b = e.onMouseDownCapture,
        x = e.onMouseUpCapture,
        S = e.onPointerDownCapture,
        C = e.onPointerUpCapture,
        w = e.onTouchEndCapture,
        T = e.onTouchStartCapture,
        E = e.shouldFitContainer,
        D = e.spacing,
        O = e.testId,
        k = e.type,
        A = k === void 0 ? `button` : k,
        j = m(e, bv);
      (j.className, j.css, j.as, j.style);
      var M = m(j, xv);
      return B.createElement(
        hv,
        P(
          {
            analyticsContext: n,
            ref: t,
            appearance: r,
            autoFocus: o,
            isDisabled: d,
            isLoading: p,
            isSelected: h,
            hasIconBefore: !!l,
            hasIconAfter: !!c,
            shouldFitContainer: E,
            spacing: D,
            ariaLabel: i,
            ariaLabelledBy: a,
            onClick: g,
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
            componentName: `Button`,
            type: A,
            interactionName: u,
          },
          M,
        ),
        l &&
          B.createElement(
            _v,
            { type: `icon`, position: `before`, isLoading: p },
            B.createElement(yv, { icon: l }),
          ),
        s && B.createElement(_v, { isLoading: p }, s),
        c &&
          B.createElement(
            _v,
            { type: `icon`, position: `after`, isLoading: p },
            B.createElement(yv, { icon: c }),
          ),
      );
    }),
  );
Sv.displayName = `Button`;
var Cv = i((e) => {
    var t = o(),
      n = Symbol.for(`react.element`),
      r = Symbol.for(`react.fragment`),
      i = Object.prototype.hasOwnProperty,
      a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      s = { key: !0, ref: !0, __self: !0, __source: !0 };
    function c(e, t, r) {
      var o,
        c = {},
        l = null,
        u = null;
      for (o in (r !== void 0 && (l = `` + r),
      t.key !== void 0 && (l = `` + t.key),
      t.ref !== void 0 && (u = t.ref),
      t))
        i.call(t, o) && !s.hasOwnProperty(o) && (c[o] = t[o]);
      if (e && e.defaultProps)
        for (o in ((t = e.defaultProps), t)) c[o] === void 0 && (c[o] = t[o]);
      return { $$typeof: n, type: e, key: l, ref: u, props: c, _owner: a.current };
    }
    ((e.Fragment = r), (e.jsx = c), (e.jsxs = c));
  }),
  $ = i((e, t) => {
    t.exports = Cv();
  })(),
  wv = bc((e) => {
    let { stateStore: t } = jc(),
      n = q_(!0),
      r;
    switch (e.type) {
      case `WITHOUT_VERSIONING`:
        r = t.testData;
        break;
      case `OPTIMISTIC_NUMBER`:
        r = t.testDataOptimisticNumber;
        break;
      case `OPTIMISTIC_DATE`:
        r = t.testDataOptimisticDateId;
        break;
      case `OPTIMISTIC_TIMESTAMP`:
        r = t.testDataOptimisticTimeStampId;
        break;
      default:
        return (0, $.jsxs)(`div`, { children: [`Unsupported $`, e.type] });
    }
    return r
      ? (0, $.jsx)(`div`, {
          children: (0, $.jsxs)(`div`, {
            children: [
              (0, $.jsx)(G_, {
                head: n,
                rows: [r].map((n, r) => {
                  let i = [
                    { key: `id`, content: n.id },
                    { key: `testDateColumn`, content: String(n.testDateColumn) },
                    { key: `testNameColumn`, content: n.testNameColumn },
                    { key: `version`, content: n.version === void 0 ? `EMPTY` : String(n.version) },
                    {
                      key: `action`,
                      content: (0, $.jsx)(`div`, {
                        children: (0, $.jsx)(Sv, {
                          appearance: `warning`,
                          onClick: () => t.saveState(e.type),
                          children: `update`,
                        }),
                      }),
                    },
                  ];
                  return { key: `row-${r}-${n.id}`, cells: i };
                }),
                rowsPerPage: 10,
                defaultPage: 1,
                loadingSpinnerSize: `large`,
                emptyView: (0, $.jsx)(`div`, { children: `Table is EMPTY` }),
                isRankable: !0,
              }),
              (0, $.jsx)(`br`, {}),
              (0, $.jsx)(`br`, {}),
            ],
          }),
        })
      : (0, $.jsx)(`div`, { children: `Try update first` });
  });
function Tv(e) {
  return u(e) || b(e) || x(e) || v();
}
var Ev = (0, B.createContext)(null),
  Dv = (0, B.createContext)(null);
O();
function Ov(e, t) {
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
function kv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ov(Object(n), !0).forEach(function (t) {
          h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ov(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var Av = {
    componentName: `tabs`,
    packageName: `@atlaskit/tabs`,
    packageVersion: `0.0.0-development`,
  },
  jv = function (e) {
    var t = e.tabPanel,
      n = e.index,
      r = e.isSelected,
      i = e.tabsId;
    return (
      t &&
      B.createElement(
        Dv.Provider,
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
  Mv = function (e) {
    var t = e.shouldUnmountTabPanelOnChange,
      n = t === void 0 ? !1 : t,
      r = e.selected,
      i = e.defaultSelected,
      a = e.onChange,
      o = e.id,
      s = e.analyticsContext,
      c = e.children,
      u = e.testId,
      d = l((0, B.useState)(r || i || 0), 2),
      f = d[0],
      p = d[1],
      m = r === void 0 ? f : r,
      h = Tv(
        B.Children.toArray(c).filter(function (e) {
          return !!e;
        }),
      ),
      g = h[0],
      _ = h.slice(1),
      v = (0, B.useRef)(new Set([m]));
    v.current.has(m) || v.current.add(m);
    var y = Zc(
        kv(
          {
            fn: (0, B.useCallback)(
              function (e, t) {
                (a && a(e, t), p(e));
              },
              [a],
            ),
            action: `clicked`,
            analyticsData: s,
          },
          Av,
        ),
      ),
      b = n
        ? jv({ tabPanel: _[m], index: m, isSelected: !0, tabsId: o })
        : Array.from(v.current).map(function (e) {
            return jv({ tabPanel: _[e], index: e, isSelected: e === m, tabsId: o });
          });
    return B.createElement(
      `div`,
      {
        "data-testid": u,
        className: N([
          `_1e0c1txw _p12f1osq _1tkeidpf _i0dl1osq _2lx21bp4 _16jlkb7n`,
          `_1c3y1txw _ftfaidpf _18i0kb7n _185bglyw`,
        ]),
      },
      B.createElement(Ev.Provider, { value: { selected: m, onChange: y, tabsId: o } }, g),
      B.createElement(B.Fragment, null, b),
    );
  };
function Nv() {
  var e = (0, B.useContext)(Dv);
  if (e == null) throw Error(`@atlaskit/tabs:  A TabPanel must have a Tabs parent.`);
  return e;
}
var Pv = function (e) {
    var t = e.children,
      n = e.testId,
      r = Nv(),
      i = r.role,
      a = r.id,
      o = r.hidden,
      s = r[`aria-labelledby`],
      c = r.tabIndex;
    return B.createElement(
      Uu,
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
      B.createElement(B.Fragment, null, t),
    );
  },
  Fv = (0, B.createContext)(null);
function Iv() {
  var e = (0, B.useContext)(Fv);
  if (e == null || e === void 0) throw Error(`@atlaskit/tabs: A Tab must have a TabList parent.`);
  return e;
}
var Lv = (0, B.forwardRef)(function (e, t) {
  var n = e.children,
    r = e.testId,
    i = Iv(),
    a = i.onClick,
    o = i.id,
    s = i[`aria-controls`],
    c = i[`aria-posinset`],
    l = i[`aria-selected`],
    u = i[`aria-setsize`],
    d = i.onKeyDown,
    f = i.role,
    p = i.tabIndex;
  return B.createElement(
    Uu,
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
    B.createElement(zu, { weight: `medium`, color: `inherit`, maxLines: 1 }, n),
  );
});
function Rv() {
  var e = (0, B.useContext)(Ev);
  if (e == null) throw Error(`@atlaskit/tabs: A TabList must have a Tabs parent.`);
  return e;
}
O();
var zv = function (e) {
    var t = e.children,
      n = Rv(),
      r = n.tabsId,
      i = n.selected,
      a = n.onChange,
      o = (0, B.createRef)(),
      s = B.Children.toArray(t).filter(Boolean),
      c = s.length,
      l = (0, B.useCallback)(
        function (e) {
          var t = o.current?.querySelector(`[id='${r}-${e}']`);
          (t && t.focus(), a(e));
        },
        [r, o, a],
      ),
      u = (0, B.useCallback)(
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
      d = (0, B.useCallback)(
        function (e) {
          var t = e.tab,
            n = e.isSelected,
            i = e.index;
          return B.createElement(
            Fv.Provider,
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
    return B.createElement(
      `div`,
      {
        role: `tablist`,
        ref: o,
        className: N([
          `_1e0c1txw _kqswh2mm _85i5ze3t _1q51ze3t _y4tize3t _bozgze3t`,
          `_k48p1wq8 _ahbqx0bf _gpbcidpf _10vzidpf _1mmwidpf _15plidpf _qwyt1qi0 _7hip15vq _1fud15vq _bb0mh2mm _1quzazsu _rzxytlke _1ofh12x7 _pryi12x7 _1a85u2gc _rmpau2gc _1dze1l2s _1tms1q9c _fiizidpf _1xrmidpf _xyihidpf _166qidpf _1lzu1uh4 _24g71kw7 _140sidpf _lycustnw _15d8b3bt _1fztidpf _wd7eu2gc _1olcu2gc _1oazazsu _w9ewidpf _170tidpf _y1g1idpf _1nvfidpf _1b8d1uh4 _1n121kw7 _7p9oidpf _o2e1stnw _16u6b3bt _1yk1idpf _1lbou2gc _1c9uu2gc _1i20i7uo _bppridpf _1mbxidpf _kn0bidpf _wsgdidpf _rsmzz0c1 _1m0e1kw7 _93pdidpf _1sglstnw _1ksob3bt _1p9sidpf _1qa1u2gc _1jjcu2gc _fiem6x5g _pascidpf _eid3idpf _zr3eidpf _fntnidpf _1mp41kw7 _kfgte4h9 _1cs8stnw _1rus1l7x _1kt9b3bt _1fkridpf _1enwidpf _z5wtu2gc`,
        ]),
      },
      s.map(function (e, t) {
        return d({ tab: e, index: t, isSelected: t === i });
      }),
    );
  },
  Bv = Object.keys(
    (function (e) {
      return (
        (e[(e.WITHOUT_VERSIONING = 0)] = `WITHOUT_VERSIONING`),
        (e[(e.OPTIMISTIC_NUMBER = 1)] = `OPTIMISTIC_NUMBER`),
        (e[(e.OPTIMISTIC_DATE = 2)] = `OPTIMISTIC_DATE`),
        (e[(e.OPTIMISTIC_TIMESTAMP = 3)] = `OPTIMISTIC_TIMESTAMP`),
        e
      );
    })({}),
  ).filter((e) => isNaN(Number(e))),
  Vv = ({ children: e, testId: t }) =>
    (0, $.jsx)(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `column`,
        flexGrow: 1,
        backgroundColor: Qu(`color.background.neutral`),
        borderRadius: `3px`,
        color: Qu(`color.text.subtlest`),
        font: Qu(`font.heading.xxlarge`),
        marginBlockEnd: Qu(`space.100`, `8px`),
        marginBlockStart: Qu(`space.200`, `16px`),
        paddingBlockEnd: Qu(`space.400`, `32px`),
        paddingBlockStart: Qu(`space.400`, `32px`),
        paddingInlineEnd: Qu(`space.400`, `32px`),
        paddingInlineStart: Qu(`space.400`, `32px`),
      },
      "data-testid": t,
      children: e,
    });
function Hv() {
  let { stateStore: e } = jc();
  return e.isLoading
    ? `loading....`
    : (0, $.jsxs)(`div`, {
        children: [
          (0, $.jsxs)(`div`, {
            className: `reset-section`,
            children: [
              (0, $.jsx)(`h2`, { children: `Reset All` }),
              (0, $.jsx)(`p`, {
                children: `Click the button below to revert all test entities to their initial state. This removes any changes you've made during testing.`,
              }),
              (0, $.jsx)(`br`, {}),
              (0, $.jsxs)(Sv, {
                appearance: `danger`,
                onClick: async () => {
                  try {
                    (e.loading(`Clear ...`),
                      await (0, Wn.invoke)(`clearAll`, {
                        testDataId: e.testData?.id,
                        testDataOptimisticNumberId: e.testDataOptimisticNumber?.id,
                        testDataOptimisticDateId: e.testDataOptimisticDateId?.id,
                        testDataOptimisticTimeStampId: e.testDataOptimisticTimeStampId?.id,
                      }));
                  } finally {
                    e.stopLoading();
                  }
                  window.location.reload();
                },
                children: [` `, `Reset All`],
              }),
            ],
          }),
          (0, $.jsx)(`br`, {}),
          (0, $.jsx)(`p`, {
            children: `Use the tabs below to navigate between different examples of optimistic locking. Each tab demonstrates a different versioning approach, along with instructions on how to test the locking behavior.`,
          }),
          (0, $.jsx)(`br`, {}),
          (0, $.jsxs)(Mv, {
            onChange: (e) => console.log(`Selected Tab`, e + 1),
            defaultSelected: 1,
            id: `default`,
            children: [
              (0, $.jsxs)(zv, {
                children: [
                  ` `,
                  Bv.map((e) => {
                    switch (e) {
                      case `WITHOUT_VERSIONING`:
                        return (0, $.jsx)(
                          Lv,
                          { children: `Entity Without Version Column (No Locking)` },
                          e,
                        );
                      case `OPTIMISTIC_NUMBER`:
                        return (0, $.jsx)(
                          Lv,
                          { children: `Entity with Numeric Version Column` },
                          e,
                        );
                      case `OPTIMISTIC_DATE`:
                        return (0, $.jsx)(
                          Lv,
                          { children: `Entity with Datetime-Based Version Column` },
                          e,
                        );
                      case `OPTIMISTIC_TIMESTAMP`:
                        return (0, $.jsx)(
                          Lv,
                          { children: `Entity with Timestamp-BasedVersion Column` },
                          e,
                        );
                    }
                  }),
                ],
              }),
              (0, $.jsx)(Pv, { children: (0, $.jsx)($.Fragment, {}) }),
              (0, $.jsx)(Pv, {
                children: (0, $.jsx)(Vv, {
                  children: (0, $.jsxs)(`div`, {
                    children: [
                      (0, $.jsx)(`h2`, { children: `Entity Without Version Column (No Locking)` }),
                      (0, $.jsx)(`p`, {
                        children: `This entity does not use any versioning or optimistic locking mechanism. When two users open the same record in different browser tabs and both make changes, the last update simply overwrites the previous changes. There is no conflict detection in place.`,
                      }),
                      (0, $.jsx)(`h3`, { children: `How to Test` }),
                      (0, $.jsxs)(`ol`, {
                        children: [
                          (0, $.jsx)(`li`, {
                            children: `Open this entity's update form in two separate browser tabs.`,
                          }),
                          (0, $.jsxs)(`li`, {
                            children: [
                              `In the first tab, change any field and click `,
                              (0, $.jsx)(`strong`, { children: `Update` }),
                              `.`,
                            ],
                          }),
                          (0, $.jsxs)(`li`, {
                            children: [
                              `In the second tab, also change a field and click `,
                              (0, $.jsx)(`strong`, { children: `Update` }),
                              `.`,
                            ],
                          }),
                          (0, $.jsx)(`li`, {
                            children: `Both updates will succeed, and the second update will overwrite the first one.`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`br`, {}),
                      (0, $.jsx)(wv, { type: `WITHOUT_VERSIONING` }),
                    ],
                  }),
                }),
              }),
              (0, $.jsx)(Pv, {
                children: (0, $.jsx)(Vv, {
                  children: (0, $.jsxs)(`div`, {
                    className: `entity-section`,
                    children: [
                      (0, $.jsx)(`h2`, { children: `Entity with Numeric Version Column` }),
                      (0, $.jsx)(`p`, {
                        children: `This entity uses an integer field for optimistic locking. When a user updates the record, the version number increments. A second user with an outdated version will encounter an error upon saving.`,
                      }),
                      (0, $.jsx)(`h3`, { children: `How to Test` }),
                      (0, $.jsxs)(`ol`, {
                        children: [
                          (0, $.jsx)(`li`, {
                            children: `Open this entity's update form in two separate browser tabs.`,
                          }),
                          (0, $.jsxs)(`li`, {
                            children: [
                              `In the first tab, change any field and click `,
                              (0, $.jsx)(`strong`, { children: `Update` }),
                              `. This succeeds and increments the version number.`,
                            ],
                          }),
                          (0, $.jsx)(`li`, {
                            children: `In the second tab, attempt to update the record without refreshing.`,
                          }),
                          (0, $.jsx)(`li`, {
                            children: `The update will fail with an optimistic locking error, indicating the record was modified elsewhere.`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`br`, {}),
                      (0, $.jsx)(wv, { type: `OPTIMISTIC_NUMBER` }),
                    ],
                  }),
                }),
              }),
              (0, $.jsx)(Pv, {
                children: (0, $.jsx)(Vv, {
                  children: (0, $.jsxs)(`div`, {
                    className: `entity-section`,
                    children: [
                      (0, $.jsx)(`h2`, { children: `Entity with DateTime-Based Version Column` }),
                      (0, $.jsx)(`p`, {
                        children: `This entity uses a datetime field for optimistic locking. Whenever the record is updated, the date-based version changes. Any subsequent update with the old date value will fail.`,
                      }),
                      (0, $.jsx)(`h3`, { children: `How to Test` }),
                      (0, $.jsxs)(`ol`, {
                        children: [
                          (0, $.jsx)(`li`, {
                            children: `Open this entity's update form in two separate browser tabs.`,
                          }),
                          (0, $.jsxs)(`li`, {
                            children: [
                              `In the first tab, change any field and click `,
                              (0, $.jsx)(`strong`, { children: `Update` }),
                              `. This sets or updates the date-based version.`,
                            ],
                          }),
                          (0, $.jsx)(`li`, {
                            children: `In the second tab, try to update the record without refreshing.`,
                          }),
                          (0, $.jsx)(`li`, {
                            children: `The second update will fail with an optimistic locking error because the version date has changed.`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`br`, {}),
                      (0, $.jsx)(wv, { type: `OPTIMISTIC_DATE` }),
                    ],
                  }),
                }),
              }),
              (0, $.jsx)(Pv, {
                children: (0, $.jsx)(Vv, {
                  children: (0, $.jsxs)(`div`, {
                    className: `entity-section`,
                    children: [
                      (0, $.jsx)(`h2`, { children: `Entity with Timestamp-Based Version Column` }),
                      (0, $.jsx)(`p`, {
                        children: `This entity uses a timestamp column for optimistic locking. Whenever the record is updated, the timestamp is refreshed. Any subsequent update attempts with an outdated timestamp will fail.`,
                      }),
                      (0, $.jsx)(`h3`, { children: `How to Test` }),
                      (0, $.jsxs)(`ol`, {
                        children: [
                          (0, $.jsx)(`li`, {
                            children: `Open this entity's update form in two separate browser tabs.`,
                          }),
                          (0, $.jsxs)(`li`, {
                            children: [
                              `In the first tab, modify any field and click `,
                              (0, $.jsx)(`strong`, { children: `Update` }),
                              `. This refreshes the timestamp.`,
                            ],
                          }),
                          (0, $.jsx)(`li`, {
                            children: `In the second tab, try to update the record without reloading the page.`,
                          }),
                          (0, $.jsx)(`li`, {
                            children: `The second update will fail, indicating that another process has already changed the record.`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`br`, {}),
                      (0, $.jsx)(wv, { type: `OPTIMISTIC_TIMESTAMP` }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
var Uv = bc(Hv),
  Wv = bc((e) => {
    let { stateStore: t } = jc(),
      [n, r] = (0, B.useState)(``),
      [i, a] = (0, B.useState)({}),
      o = (e) => {
        let { name: t, value: n, type: r } = e.target;
        a((e) => ({ ...e, [t]: r === `number` ? Number(n) : n }));
      },
      s = async (t) => {
        t.preventDefault();
        let n = { ...c };
        (i.testNameColumn && (n.testNameColumn = i.testNameColumn),
          i.testDateColumn && (n.testDateColumn = new Date(i.testDateColumn)),
          r(await (0, Wn.invoke)(`update`, { data: n, objectName: e.type })));
      },
      c;
    switch (e.type) {
      case `WITHOUT_VERSIONING`:
        c = t.testData;
        break;
      case `OPTIMISTIC_NUMBER`:
        c = t.testDataOptimisticNumber;
        break;
      case `OPTIMISTIC_DATE`:
        c = t.testDataOptimisticDateId;
        break;
      case `OPTIMISTIC_TIMESTAMP`:
        c = t.testDataOptimisticTimeStampId;
        break;
      default:
        return (0, $.jsxs)(`div`, { children: [`Unsupported $`, e.type] });
    }
    return (0, $.jsxs)(`div`, {
      children: [
        (0, $.jsx)(`div`, {
          children: (0, $.jsx)(`button`, {
            onClick: async () => {
              try {
                t.loading();
                let e = await (0, Wn.invoke)(`fetchOrCreateIfNotExists`);
                t.saveResponse(e);
              } finally {
                t.stopLoading();
              }
              t.saveState(`ROOT`);
            },
            children: `Back to main`,
          }),
        }),
        (0, $.jsx)(`br`, {}),
        (0, $.jsxs)(`form`, {
          onSubmit: s,
          children: [
            (0, $.jsxs)(
              `div`,
              {
                children: [
                  (0, $.jsx)(`label`, { htmlFor: `testNameColumn`, children: `Name` }),
                  (0, $.jsx)(`br`, {}),
                  (0, $.jsx)(`input`, {
                    type: `text`,
                    id: `testNameColumn`,
                    name: `testNameColumn`,
                    defaultValue: c.testNameColumn,
                    onChange: o,
                  }),
                  (0, $.jsx)(`br`, {}),
                ],
              },
              `testNameColumn`,
            ),
            (0, $.jsxs)(
              `div`,
              {
                children: [
                  (0, $.jsx)(`label`, { htmlFor: `testDateColumn`, children: `dateTime` }),
                  (0, $.jsx)(`br`, {}),
                  (0, $.jsx)(`input`, {
                    type: `datetime-local`,
                    id: `testDateColumn`,
                    name: `testDateColumn`,
                    defaultValue: String(c.testDateColumn),
                    onChange: o,
                  }),
                  (0, $.jsx)(`br`, {}),
                ],
              },
              `testDateColumn`,
            ),
            (0, $.jsx)(`br`, {}),
            (0, $.jsx)(`input`, {
              type: `submit`,
              value: `Submit`,
              disabled: Object.keys(i).length === 0,
            }),
          ],
        }),
        (0, $.jsx)(`br`, {}),
        (0, $.jsx)(`br`, {}),
        n
          ? (0, $.jsxs)(`div`, {
              children: [
                (0, $.jsx)(`p`, { children: `STATUS:` }),
                (0, $.jsxs)(`b`, { children: [` `, n] }),
              ],
            })
          : null,
      ],
    });
  });
function Gv() {
  let { stateStore: e } = jc();
  if (
    ((0, B.useEffect)(() => {
      (async () => {
        try {
          e.loading();
          let t = await (0, Wn.invoke)(`fetchOrCreateIfNotExists`);
          e.saveResponse(t);
        } finally {
          e.stopLoading();
        }
      })().catch(console.error);
    }, []),
    e.isLoading)
  )
    return e.message;
  switch (e.state) {
    case `ROOT`:
      return (0, $.jsx)(Uv, {});
    case `WITHOUT_VERSIONING`:
    case `OPTIMISTIC_TIMESTAMP`:
    case `OPTIMISTIC_DATE`:
    case `OPTIMISTIC_NUMBER`:
      return (0, $.jsx)(Wv, { type: e.state });
    default:
      return (0, $.jsxs)(`div`, { children: [`ERROR: unsupprted state $`, e.state] });
  }
}
var Kv = bc(Gv),
  qv = (0, s().createRoot)(document.getElementById(`root`)),
  Jv = () => {
    qv.render((0, $.jsx)(Tc, { ...kc, children: (0, $.jsx)(Kv, {}) }));
  };
Wn.view.theme
  .enable()
  .then(() => {
    Jv();
  })
  .catch((e) => {
    (console.error(e.message), Jv());
  });
